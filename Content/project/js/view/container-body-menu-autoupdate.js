/*
 * SMILEDINING-SA22-0017                  06/06/2022      Customize                   1. Add menu AutoUpdate in webSupport.
 * SMILEDINING-SA22-0017#1                07/06/2022      Customize                   1. Fix bug AutoUpdate signalR not working in webSupport.
 * SMILEDINING-SA22-0017#2                22/06/2022      Customize                   1. Fix bug AutoUpdate in webSupport.
 * SMILEDINING-SA22-0017#3                22/06/2022      Customize                   1. Fix bug AutoUpdate send data to POS in webSupport.
 * SMILEDINING-SA22-0017#4                24/06/2022      Customize                   1. Fix bug AutoUpdate get redis in webSupport.
 * SMILEDINING-SA22-0017#5                27/06/2022      Customize                   1. Fix bug AutoUpdate get redis and log discord in webSupport.
 * SMILEDINING-SA22-0017#8                04/07/2022      Customize                   1. Fix bug error signalR using try catch in webSupport.
 * WEB-SA22-0041                          21/09/2022      Customize                   1. Fix bug save log in webSupport
 * WEB-SA22-0070                          15/12/2022      Customize                   1. Fix bug AutoUpdate v2 in webSupport.
 */


function setAutoUpdate(groupId, result) {
    if (!isEmpty(vmViewIndex.autoUpdate.data()) && !isEmpty(result)) { 
        var data = ko.mapping.fromJSON(result);
        var processStatus = data.process.status() == cProcessStatusInit ? cProcessStatusStart : data.process.status();
        var filterDomain = ko.utils.arrayFirst(vmViewIndex.autoUpdate.data(), function (domainAll) {
            return domainAll.domainId() == groupId;
        });

        if (!data.process.isRollback()) { /// Not Rollback
            if (data.process.name() == cProcessNameReceivedUpdateRequest && (data.process.status() == cProcessStatusInit || data.process.status() == cProcessStatusStart)) { /// Main Process init
                vmViewIndex.autoUpdate.dataProcessDomainStore.push({
                    domainId: ko.observable(groupId),
                    data: setProcessUpdateVersionDetailInitAutoUpdate(data)
                });
                var filterProcessDomain = ko.utils.arrayFirst(vmViewIndex.autoUpdate.dataProcessDomainStore(), function (item) {
                    return item.domainId() == groupId;
                });
                if (vmViewIndex.autoUpdate.dataUpdateVersionDetailModal.domainId() == groupId) {
                    vmViewIndex.autoUpdate.dataUpdateVersionDetailModal.data(filterProcessDomain.data());
                }
                setTimeout(function () {
                    if (filterProcessDomain.data()[1].status() == cProcessStatusWaiting) {
                        getRedisAutoUpdate(groupId, filterProcessDomain.data()[1].id(), filterProcessDomain.data()[1].name(), filterProcessDomain.data()[1].processName(), cProcessStatusStart);
                    }
                }, 60000);
            } else { /// Process other
                var dataClients = _.head(data.clients());
                var dataProcess = data.process;
                var filterProcessDomain = ko.utils.arrayFirst(vmViewIndex.autoUpdate.dataProcessDomainStore(), function (item) {
                    return item.domainId() == groupId;
                });
                if (filterProcessDomain != null) { //Added and End by SMILEDINING-SA22-0017#1
                    var filterProcess = ko.utils.arrayFirst(filterProcessDomain.data(), function (item) {
                        if (item.name().toUpperCase().includes(cMain)) {
                            if (dataClients == null)
                                return item.processName() == dataProcess.name();
                            else
                                return item.id() == dataClients.id() && dataClients.name().toUpperCase().includes(cMain) && item.processName() == dataProcess.name();
                        }
                        return item.id() == dataClients.id() && item.processName() == dataProcess.name();
                    });
                    var index = filterProcessDomain.data().indexOf(filterProcess);
                    var filterProcessNext = filterProcessDomain.data()[index + 1] ? filterProcessDomain.data()[index + 1] : null;
                    var filterProcessPrev = filterProcessDomain.data()[index - 1] ? filterProcessDomain.data()[index - 1] : null;
                    //if (filterProcessNext == null ? false : (filterProcessNext.status() != cProcessStatusWaiting && filterProcessNext.name() == filterProcess.name())) //Modified and End by SMILEDINING-SA22-0017#8
                    if (filterProcessNext == null ? (filterProcess.processName() == cProcessNameUpdateCompleted && filterProcess.status() != cProcessStatusWaiting) : (filterProcessNext.status() != cProcessStatusWaiting && filterProcessNext.name() == filterProcess.name())) //Added and End by SMILEDINING-SA22-0017#8
                        return;
                    if (filterProcessPrev == null ? false : filterProcessPrev.status() == cProcessStatusWaiting && filterProcessPrev.name() == filterProcess.name()) {
                        var filterProcessArr = ko.utils.arrayFilter(filterProcessDomain.data(), function (item) {
                            return item.id() == filterProcess.id() && item.name() == filterProcess.name();
                        });
                        var indexProcess = filterProcessArr.indexOf(filterProcess);
                        var startIndex = filterProcess.name().toUpperCase().includes(cMain) ? 1 : 0;
                        for (var i = startIndex; i < indexProcess; i++) {
                            filterProcessArr[i].status(cProcessStatusCompleted);
                        }
                    }
                    filterProcess.processName(dataProcess.name());
                    filterProcess.avgExecutionTime(dataProcess.avgExecutionTime());
                    filterProcess.isRollback(dataProcess.isRollback());
                    filterProcess.message(dataProcess.message());
                    filterProcess.status(dataProcess.status());

                    if (filterProcess.status() == cProcessStatusFailed) {
                        var filterProcessArr = ko.utils.arrayFilter(filterProcessDomain.data(), function (item) {
                            return item.id() == filterProcess.id() && item.name() == filterProcess.name();
                        });
                        var indexProcess = filterProcessArr.indexOf(filterProcess);
                        if (filterProcess.name().toUpperCase().includes(cMain)) {
                            var indexProcessDomain = filterProcessDomain.data().indexOf(filterProcess);
                            for (var i = indexProcessDomain + 1; i < filterProcessDomain.data().length; i++) {
                                filterProcessDomain.data()[i].status('');
                            }
                        } else {
                            for (var i = indexProcess + 1; i < filterProcessArr.length; i++) {
                                filterProcessArr[i].status('');
                            }
                        }
                    }
                    if (filterProcess.processName() == cProcessNameUpdateCompleted && filterProcess.status() == cProcessStatusFinished) {
                        var isFinised = true;
                        if (filterProcess.name().toUpperCase().includes(cMain)) {
                            serviceExpireUpdateAutoUpdate(groupId, filterDomain.domainVersion());
                            //Added by SMILEDINING-SA22-0017#5
                            setTimeout(function () { 
                                var processGetSVNAutoUpdaterClientArr = ko.utils.arrayFilter(filterProcessDomain.data(), function (item) {
                                    return item.processName() == cProcessNameGetSVNAutoUpdater && !(item.name().toUpperCase().includes(cMain));
                                });
                                ko.utils.arrayForEach(processGetSVNAutoUpdaterClientArr, function (item) {
                                    if (item.status() == cProcessStatusWaiting && item.id() != filterProcessNext.id() && item.name() != filterProcessNext.name()) {
                                        getRedisAutoUpdate(groupId, item.id(), item.name(), item.processName(), cProcessStatusStart);
                                    }
                                });
                            }, 60000);
                            //End Added by SMILEDINING-SA22-0017#5
                        }
                        var processUpdateCompletedArr = ko.utils.arrayFilter(filterProcessDomain.data(), function (item) {
                            return item.processName() == cProcessNameUpdateCompleted;
                        });
                        ko.utils.arrayForEach(processUpdateCompletedArr, function (item) {
                            if (item.status() != cProcessStatusFinished) {
                                isFinised = false;
                            }
                        });
                        if (isFinised) {
                            filterDomain.status(cProcessStatusFinished);
                            if (vmViewIndex.autoUpdate.dataUpdateVersionDetailModal.domainId() == groupId) {
                                vmViewIndex.autoUpdate.dataUpdateVersionDetailModal.status(cProcessStatusFinished);
                            }
                            return;
                        }
                    }
                    setTimeout(function () {
                        if (filterProcess.status() != cProcessStatusFailed) {
                            if (filterProcess.status() == cProcessStatusStart) {
                                //getRedisAutoUpdate(groupId, filterProcess.id(), filterProcess.name(), filterProcess.processName(), cProcessStatusCompleted); //Modified and End by SMILEDINING-SA22-0017#4
                                //Added by SMILEDINING-SA22-0017#4
                                var delay = 0;
                                if (filterProcess.processName() == cProcessNameGetSVNAutoUpdater || filterProcess.processName() == cProcessNameGetSVN) {
                                    delay = 60000 * 14;
                                } else if (filterProcess.processName() == cProcessNameDumpDatabase) {
                                    delay = 60000 * 2;
                                } else if (filterProcess.processName() == cProcessNameBackupDatabase) {
                                    delay = 60000 * 4;
                                } else if (filterProcess.processName() == cProcessNameUpdateScript) {
                                    delay = 60000 * 9;
                                } else {
                                    delay = 0;
                                }
                                setTimeout(function () { 
                                    if (filterProcess.status() == cProcessStatusStart) //Added and End by SMILEDINING-SA22-0017#5
                                        getRedisAutoUpdate(groupId, filterProcess.id(), filterProcess.name(), filterProcess.processName(), cProcessStatusCompleted);
                                }, delay);
                                //End Added by SMILEDINING-SA22-0017#4
                            } else if (filterProcessNext == null ? false : filterProcessNext.status() == cProcessStatusWaiting) {
                                var processNextStatus = filterProcessNext.processName() == cProcessNameUpdateCompleted ? cProcessStatusFinished : cProcessStatusStart;
                                getRedisAutoUpdate(groupId, filterProcessNext.id(), filterProcessNext.name(), filterProcessNext.processName(), processNextStatus);
                            }
                        } else {
                            getRedisAutoUpdate(groupId, filterProcess.id(), filterProcess.name(), filterProcess.processName(), cProcessStatusStart);
                        }
                    }, 60000);                             
                } //Added and End by SMILEDINING-SA22-0017#1
                //Added by SMILEDINING-SA22-0017#2
                else {
                    if (data.process.name() != cProcessNameReceivedUpdateRequest) {
                        //Modified by WEB-SA22-0070
                        //setTimeout(function () { 
                        //    var filterProcessDomain = ko.utils.arrayFirst(vmViewIndex.autoUpdate.dataProcessDomainStore(), function (item) {
                        //        return item.domainId() == groupId;
                        //    });
                        //    if (filterProcessDomain == null) {
                        //        //getRedisAutoUpdate(groupId, 0, null, cProcessNameReceivedUpdateRequest, cProcessStatusStart); //Modified and End by SMILEDINING-SA22-0017#5
                        //        getRedisAutoUpdate(groupId, 0, null, cProcessNameReceivedUpdateRequest, cProcessStatusInit); //Added and End by SMILEDINING-SA22-0017#5
                        //    }
                        //}, 10000);
                        //End Modified by WEB-SA22-0070
                        //Added by WEB-SA22-0070
                        if (data.process.status() == cProcessStatusFailed) {
                            filterDomain.status(cProcessStatusFailed);
                        } else if (data.process.status() == cProcessStatusFinished) {
                            filterDomain.status(cProcessStatusFinished);
                        } else {
                            filterDomain.status(cProcessStatusUpdating);
                        }
                        //End Added by WEB-SA22-0070
                        return;
                    }
                }
                //End Added by SMILEDINING-SA22-0017#2
            }
        } else { /// Rollback
            processStatus = cProcessStatusRollback + ' ' + processStatus;
            var dataClients = _.head(data.clients());
            var dataProcess = data.process;
            var filterProcessDomain = ko.utils.arrayFirst(vmViewIndex.autoUpdate.dataProcessDomainStore(), function (item) {
                return item.domainId() == groupId;
            });
            var filterProcess = ko.utils.arrayFirst(filterProcessDomain.data(), function (item) {
                if (item.name().toUpperCase().includes(cMain)) {
                    if (dataClients == null)
                        return item.processName() == dataProcess.name();
                    else
                        return item.id() == dataClients.id() && dataClients.name().toUpperCase().includes(cMain) && item.processName() == dataProcess.name();
                }
                return item.id() == dataClients.id() && item.processName() == dataProcess.name();
            });
            var index = filterProcessDomain.data().indexOf(filterProcess);
            var filterProcessNext = filterProcessDomain.data()[index - 1] ? filterProcessDomain.data()[index - 1] : null;
            var filterProcessPrev = filterProcessDomain.data()[index + 1] ? filterProcessDomain.data()[index + 1] : null;
            if (filterProcessNext == null ? false : filterProcessNext.isRollback() && filterProcessNext.name() == filterProcess.name()) 
                return;
            if (filterProcessPrev == null ? false : !filterProcessPrev.isRollback() && !isEmpty(filterProcessPrev.status()) && filterProcessPrev.name() == filterProcess.name()) {
                var filterProcessArr = ko.utils.arrayFilter(filterProcessDomain.data(), function (item) {
                    return item.id() == filterProcess.id() && item.name() == filterProcess.name() && !isEmpty(item.status());
                });
                var indexProcess = filterProcessArr.indexOf(filterProcess);
                var startIndex = filterProcessArr.length - 1;
                for (var i = startIndex; i > indexProcess; i--) {
                    filterProcessArr[i].status(cProcessStatusCompleted);
                    filterProcessArr[i].isRollback(true);
                }
            }
            filterProcess.processName(dataProcess.name());
            filterProcess.avgExecutionTime(dataProcess.avgExecutionTime());
            filterProcess.isRollback(dataProcess.isRollback());
            filterProcess.message(dataProcess.message());
            filterProcess.status(dataProcess.status());

            if (filterProcessNext == null ? false : filterProcessNext.status() != cProcessStatusRollback && filterProcessNext.name() == filterProcess.name()) {
                var filterProcessArr = ko.utils.arrayFilter(filterProcessDomain.data(), function (item) {
                    return item.id() == filterProcess.id() && item.name() == filterProcess.name() && !isEmpty(item.status());
                });
                var indexProcess = filterProcessArr.indexOf(filterProcess);
                for (var i = indexProcess - 1; i >= 0; i--) {
                    filterProcessArr[i].status(cProcessStatusRollback);
                }
            }
            if (filterProcess.status() == cProcessStatusFailed) {
                var message = "Rollback Fail [" + groupId + ", " + filterProcess.name() + ": " + filterProcess.processName() + "]";
                swal(cSwal_Alert_Error, message, cSwal_Icon_Error);
                return;
            }

            setTimeout(function () {
                if (filterProcess.status() != cProcessStatusFailed) {
                    if (filterProcess.status() == cProcessStatusStart) {
                        getRedisAutoUpdate(groupId, filterProcess.id(), filterProcess.name(), filterProcess.processName(), cProcessStatusCompleted);
                    } else if (filterProcessNext == null ? false : filterProcessNext.status() == cProcessStatusRollback) {
                        getRedisAutoUpdate(groupId, filterProcessNext.id(), filterProcessNext.name(), filterProcessNext.processName(), cProcessStatusStart);
                    }
                }
            }, 60000);
        } 

        filterDomain.status(processStatus + ' - ' + data.process.name());
        if (vmViewIndex.autoUpdate.dataUpdateVersionDetailModal.domainId() == groupId) {
            vmViewIndex.autoUpdate.dataUpdateVersionDetailModal.status(filterDomain.status());
        }
    }
};

function setProcessUpdateVersionDetailInitAutoUpdate(data) {
    var processInit = {
        'main': [{ 'id': 1, 'name': cProcessNameReceivedUpdateRequest },
            { 'id': 2, 'name': cProcessNameGetSVNAutoUpdater },
            { 'id': 3, 'name': cProcessNameRunAutoUpdater },
            { 'id': 4, 'name': cProcessNameCheckRunAdmin },
            { 'id': 5, 'name': cProcessNameConnectDatabase },
            { 'id': 6, 'name': cProcessNameCreateUpdateDirectory },
            { 'id': 7, 'name': cProcessNameGetSVN },
            { 'id': 8, 'name': cProcessNameDumpDatabase },
            { 'id': 9, 'name': cProcessNameBackupDatabase },
            { 'id': 10, 'name': cProcessNameBackupPOS },
            { 'id': 11, 'name': cProcessNameBackupWebReport },
            { 'id': 12, 'name': cProcessNameBackupTablet },
            { 'id': 13, 'name': cProcessNameStopService },
            { 'id': 14, 'name': cProcessNameDeleteOldPOS },
            { 'id': 15, 'name': cProcessNamePasteNewPOS },
            { 'id': 16, 'name': cProcessNameDeleteOldWebReport },
            { 'id': 17, 'name': cProcessNamePasteNewWebReport },
            { 'id': 18, 'name': cProcessNameDeleteOldTablet },
            { 'id': 19, 'name': cProcessNamePasteNewTablet },
            { 'id': 20, 'name': cProcessNameStartService },
            { 'id': 21, 'name': cProcessNameUpdateScript },
            { 'id': 22, 'name': cProcessNameDeleteBackup },
            { 'id': 23, 'name': cProcessNameRunPOS },
            { 'id': 24, 'name': cProcessNameSendUpdateRequestToClients },
            { 'id': 25, 'name': cProcessNameUpdateCompleted },
        ],
        'client': [{ 'id': 1, 'name': cProcessNameGetSVNAutoUpdater },
            { 'id': 2, 'name': cProcessNameRunAutoUpdater },
            { 'id': 3, 'name': cProcessNameCheckRunAdmin },
            { 'id': 4, 'name': cProcessNameCreateUpdateDirectory },
            { 'id': 5, 'name': cProcessNameGetSVN },
            { 'id': 6, 'name': cProcessNameBackupPOS },
            { 'id': 7, 'name': cProcessNameStopService },
            { 'id': 8, 'name': cProcessNameDeleteOldPOS },
            { 'id': 9, 'name': cProcessNamePasteNewPOS },
            { 'id': 10, 'name': cProcessNameRunPOS },
            { 'id': 11, 'name': cProcessNameUpdateCompleted },
        ]
    };

    var dataProcessArr = ko.observableArray([]);
    var dataClients = data.clients;
    var dataProcess = data.process;
    _.forEach(dataClients(), function (valueClients, index) { 
        var sorting = index + 1;
        if (valueClients.name().toUpperCase().includes(cMain)) {
            _.forEach(processInit.main, function (value) {
                if (value.id == 1) {
                    dataProcessArr.push(new DataProcessUpdateVersionDetailViewModel(valueClients, dataProcess, value, cProcessStatusInit, sorting));
                } else {
                    dataProcessArr.push(new DataProcessUpdateVersionDetailViewModel(valueClients, null, value, cProcessStatusWaiting, sorting));
                }
            });
        } else {
            _.forEach(processInit.client, function (value) {
                dataProcessArr.push(new DataProcessUpdateVersionDetailViewModel(valueClients, null, value, cProcessStatusWaiting, sorting));
            });
        }
    });
    return dataProcessArr;
};

function sendUpdateVersionAutoUpdate(ids) {
    var objUrl = new ObjUrl(cfrmAutoUpdateSendUpdateVersion);
    var requestUrl = objUrl.getUrlSubmitForm();
    var version = vmViewIndex.autoUpdate.dataUpdateVersionModal.selectVersionValue();    
    //Modified by SMILEDINING-SA22-0017#2
    //var username = vmViewIndex.autoUpdate.dataSettingSvnModal.username();
    //var password = vmViewIndex.autoUpdate.dataSettingSvnModal.password();
    //var passData = {
    //    domainIds: ids,
    //    version: version,
    //    username: username,
    //    password: password
    //};
    //End Modified by SMILEDINING-SA22-0017#2
    //Added by SMILEDINING-SA22-0017#2
    var passData = {
        domainIds: ids,
        version: version,
        modelSvn: ko.toJSON(vmViewIndex.autoUpdate.dataSettingSvnModal),
        //Added by WEB-SA22-0041
        customerId: vmViewIndex.customer.customerId(),
        email: vmViewIndex.customer.email()
        //End Added by WEB-SA22-0041
    };
    //End Added by SMILEDINING-SA22-0017#2
    $.ajax({
        url: requestUrl,
        async: ajax_async,
        cache: ajax_cache,
        type: ajax_type_post,
        data: passData,
        timeout: ajax_timeout,
    })
    .done(function (result) {
        removeSpinButton(cModalUpdateVersion);
        if (result.status) {
            var domainUpdateFailedList = []; //Added and End by WEB-SA22-0070
            ko.utils.arrayForEach(vmViewIndex.autoUpdate.dataUpdateVersionModal.dataDomainUpdate(), function (domainUpdate) { 
                var filterDomain = ko.utils.arrayFirst(vmViewIndex.autoUpdate.data(), function (domainAll) {
                    return domainAll.domainId() == domainUpdate.domainId();
                });
                //Modified by WEB-SA22-0070
                //filterDomain.status(cProcessStatusInprogress);
                //filterDomain.domainVersion(version);
                //End Modified by WEB-SA22-0070
                //Added by WEB-SA22-0070
                if (result.domainIds.includes(filterDomain.domainId())) {
                    filterDomain.status(cProcessStatusInprogress);
                    filterDomain.domainVersion(version);
                } else {
                    domainUpdateFailedList.push(filterDomain.domainId());
                    filterDomain.status('Send update - ' + cProcessStatusFailed);
                }                
                //End Added by WEB-SA22-0070
            });
            //Added by SMILEDINING-SA22-0017#1
            var gridInstance = $('#' + cGridAutoUpdate).dxDataGrid('instance');
            gridInstance.clearSelection();
            //End Added by SMILEDINING-SA22-0017#1
            modalHide(cModalUpdateVersion);
            //Added by WEB-SA22-0070
            if (domainUpdateFailedList.length > 0) {
                swal(cSwal_Alert_Error, "Send update failed. Please recheck." + "<br/>" + "[" + domainUpdateFailedList.join(', ') + "]", cSwal_Icon_Error);
            }
            //End Added by WEB-SA22-0070

            _.forEach(result.domainIds, function (id) { 
                setTimeout(function () {
                    var filterProcessDomain = ko.utils.arrayFirst(vmViewIndex.autoUpdate.dataProcessDomainStore(), function (item) {
                        return item.domainId() == id;
                    });
                    if (filterProcessDomain == null) {
                        //getRedisAutoUpdate(id, 0, null, cProcessNameReceivedUpdateRequest, cProcessStatusStart); //Modified and End by SMILEDINING-SA22-0017#5
                        getRedisAutoUpdate(id, 0, null, cProcessNameReceivedUpdateRequest, cProcessStatusInit); //Added and End by SMILEDINING-SA22-0017#5
                    }
                //}, 10000); //Added and End by SMILEDINING-SA22-0017#1 //Modified and End by SMILEDINING-SA22-0017#3
                }, 60000); //Modified and End by SMILEDINING-SA22-0017#1 //Added and End by SMILEDINING-SA22-0017#3
            });
        } else {
            swal(cSwal_Alert_Error, result.message, cSwal_Icon_Error);
        }
    })
    .fail(function (result) {
        removeSpinButton(cModalUpdateVersion);
        swal(cSwal_Alert_Error, cError_Fail_TimeOut, cSwal_Icon_Error);
    });
};

function getRedisAutoUpdate(id, clientId, clientName, processName, status) {
    var objUrl = new ObjUrl(cfrmAutoUpdateGetRedis);
    var requestUrl = objUrl.getUrlFromJson();
    //Added by SMILEDINING-SA22-0017#4
    var filterDomain = ko.utils.arrayFirst(vmViewIndex.autoUpdate.data(), function (domainAll) {
        return domainAll.domainId() == id;
    });
    //End Added by SMILEDINING-SA22-0017#4
    var passData = {
        domainId: id,
        domainName: filterDomain.domainName(), //Added and End by SMILEDINING-SA22-0017#4
        clientId: clientId,
        clientName: clientName,
        processName: processName,
        status: status
    };
    $.ajax({
        url: requestUrl,
        async: ajax_async,
        cache: ajax_cache,
        type: ajax_type_post,
        data: passData,
        timeout: ajax_timeout,
    })
    .done(function (result) {
        if (result.status) {
            setAutoUpdate(result.domainId, result.obj);
        } else {
            //swal(cSwal_Alert_Error, result.message, cSwal_Icon_Error); //Modified and End by SMILEDINING-SA22-0017#2
            //Added by SMILEDINING-SA22-0017#2
            var groupId = result.domainId;
            if (isEmpty(result.message) && isEmpty(result.obj)) return; //Added and End by SMILEDINING-SA22-0017#5
            if (!isEmpty(result.message)) {
                swal(cSwal_Alert_Error, result.message, cSwal_Icon_Error);
            }
            //Added by SMILEDINING-SA22-0017#3
            var filterDomain = ko.utils.arrayFirst(vmViewIndex.autoUpdate.data(), function (domainAll) {
                return domainAll.domainId() == groupId;
            });
            if (isEmpty(result.obj)) {
                filterDomain.status(cProcessStatusNotAvailable);
                if (vmViewIndex.autoUpdate.dataUpdateVersionDetailModal.domainId() == groupId) {
                    vmViewIndex.autoUpdate.dataUpdateVersionDetailModal.status(filterDomain.status());
                }
                return;
            }
            //End Added by SMILEDINING-SA22-0017#3
            var data = ko.mapping.fromJSON(result.obj);
            var dataClients = _.head(data.clients());
            var dataProcess = data.process;
            var filterProcessDomain = ko.utils.arrayFirst(vmViewIndex.autoUpdate.dataProcessDomainStore(), function (item) {
                return item.domainId() == groupId;
            });
            if (filterProcessDomain != null) {
                var filterProcess = ko.utils.arrayFirst(filterProcessDomain.data(), function (item) {
                    if (item.name().toUpperCase().includes(cMain)) {
                        if (dataClients == null)
                            return item.processName() == dataProcess.name();
                        else
                            return item.id() == dataClients.id() && dataClients.name().toUpperCase().includes(cMain) && item.processName() == dataProcess.name();
                    }
                    return item.id() == dataClients.id() && item.processName() == dataProcess.name();
                });
                filterProcess.processName(dataProcess.name());
                filterProcess.status(dataProcess.status());
                var filterProcessArr = ko.utils.arrayFilter(filterProcessDomain.data(), function (item) {
                    return item.id() == filterProcess.id() && item.name() == filterProcess.name();
                });
                var indexProcess = filterProcessArr.indexOf(filterProcess);
                if (filterProcess.name().toUpperCase().includes(cMain)) {
                    var indexProcessDomain = filterProcessDomain.data().indexOf(filterProcess);
                    for (var i = indexProcessDomain + 1; i < filterProcessDomain.data().length; i++) {
                        filterProcessDomain.data()[i].status('');
                    }
                } else {
                    for (var i = indexProcess + 1; i < filterProcessArr.length; i++) {
                        filterProcessArr[i].status('');
                    }
                }
            }
            //Modified by SMILEDINING-SA22-0017#3
            //var filterDomain = ko.utils.arrayFirst(vmViewIndex.autoUpdate.data(), function (domainAll) {
            //    return domainAll.domainId() == groupId;
            //});
            //End Modified by SMILEDINING-SA22-0017#3
            filterDomain.status(dataClients.name() + ' - ' + dataProcess.status());
            if (vmViewIndex.autoUpdate.dataUpdateVersionDetailModal.domainId() == groupId) {
                vmViewIndex.autoUpdate.dataUpdateVersionDetailModal.status(filterDomain.status());
            }
            //End Added by SMILEDINING-SA22-0017#2
        }         
    })
    .fail(function (result) {
        swal(cSwal_Alert_Error, cError_Fail_TimeOut, cSwal_Icon_Error);
    });
};

function serviceExpireUpdateAutoUpdate(domainId, version) {
    var objUrl = new ObjUrl(cfrmAutoUpdateServiceExpireUpdate);
    var requestUrl = objUrl.getUrlSubmitForm();
    var passData = {
        domainId: domainId,
        version: version
    };
    $.ajax({
        url: requestUrl,
        async: ajax_async,
        cache: ajax_cache,
        type: ajax_type_post,
        data: passData,
        timeout: ajax_timeout,
    })
    .done(function (result) {
    })
    .fail(function (result) {
    });
};