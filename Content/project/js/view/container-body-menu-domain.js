/*
 * container-body-menu-domain
 *     SMILEDINING-SA20-0031#4         08/01/2021      Customize               1. Add shopClose feature to WebSupport and Fix bug validate custom shopClose.
 *     SMILEDINING-SA21-0014           08/03/2021      Customize               1. Add new product 'Smile Third Party Integrations' used Deliverect. 
 *     SMILEDINING-SA21-0014#6         02/04/2021      Customize               1. Change UI and sync multi location. 
 *     SMILEDINING-SA21-0014#7         09/04/2021      Customize               1. Modified deliverect sync product and added new feature snooze product.
 *     SMILEDINING-SA21-0028#3         05/08/2021      Customize               1. Edit UI Smile Dining and Contactless (Layout P2).  
 *     SMILEDINING-SA21-0065           12/10/2021      Customize               1. Change the solution to calling API Deliverect by JWT and asynchronous.
 *     SMILEDINING-SA21-0065#1         14/10/2021      Customize               1. Fix bug getAllAccount Deliverect and delete protobuf.
 *     SMILEDINING-SA21-0066           21/10/2021      Customize               1. New feature web dispatch deliverect.
 *     SMILEDINING-SA21-0066#5         14/11/2021      Customize               1. Fix bug webSupport error when open domain and save domain and domain deactivate in setup.
 *     SMILEDINING-SA21-0080           03/11/2021      Customize               1. Activate Credit Card Fee & Marketing Service Fee.
 *     SMILEDINING-SA21-0021#8         07/06/2021      Customize               1. Create icon default.
 *     SMILEDINING-SA21-0080#2         09/12/2021      Customize               1. Calculate marketingFee in SmileDining and show receipt and report in webSupport.
 *     SMILEDINING-SA21-0021#9         09/12/2021      Customize               1. Create icon default custom domain.
 *     SMILEDINING-SA21-0081           16/12/2021      Customize               1. Add loading shimmer web support.
                                                                               2. Fix bug value when click button duplicate.
                                                                               3. Menu summary change call api.
 *     SMILEDINING-SA21-0081#1         21/12/2021      Customize               1. Edit class name shimmer and Add swal when get data fail.
 *     SMILEDINING-SA22-0008#6         03/03/2022      Customize               1. Fix loading shimmer Setup and Fix menu Sync Product and Resend.
 *     SMILEDINING-SA22-0012#1         12/05/2022      Customize               1. Edit Dispatch for DoorDash in webSupport and webOwner.
 *     SMILEDINING-SA22-0022#3         23/06/2022      Customize               1. Fix bug UI Delivery Billing in webSupport.
 *     SMILEDINING-SA22-0032           18/08/2022      Customize               1. Edit summary report in WebSupport.
                                                                               2. Edit setting service fee in WebSupport.
                                                                               3. Add download and print for delivery billing in WebSupport.
 *     WEB-SA22-0041                   21/09/2022      Customize               1. Fix bug save log in webSupport.
 *     WEB-SA22-0046                   30/09/2022      Customize               1. Fix bug alert setting payCash and payCredit for service fee and dispatch in webSupport.
 *     WEB-SA22-0057#1                 09/11/2022      Customize               1. Fixbug Flat Rate, Percentage and Setting in Websupport
                                                                               2. Edit summary report in WebSupport.
 *     WEB-SA23-0008                   26/01/2023      Customize               1. Use MQTT send data to kiosk in webSupport.
 *     WEB-SA22-0057#5                 24/02/2023      Customize               1. Fix bug save Key of Local For You in webSupport.
 *     WEB-SA23-0020                   13/03/2023      Customize               1. Add setting additional charge for deliverect in webSupport.
       WEB-SA23-0048                   11/09/2023      Customize               1. Add setting Otter on webOwner, webSupport.
       WEB-SA23-0048#3                 17/10/2023      Customize               1. Fix bug copy food and sync product for Otter on webOwner, webSupport.
       WEB-SA23-0048#9                 11/01/2024      Customize               1. Fix bug sync product for update items Suspend/Unsuspend Otter on webSupport.
 *     WEB-SA24-0024#2                 24/07/2024      Customize               1. Fix bug shop address for doordash on webSupport.
 */
$(document).on('click', cfrmSetUpDomain_DomainId, function () {
    disableErrMsg($(this));
});

$(document).on('click', cfrmSetUpDomain_DomainName, function () {
    disableErrMsg($(this));
});

$(document).on('click', cfrmSetUpDomain_DomainValue, function () {
    disableErrMsg($(this));
});

$(document).on('click', cfrmSetUpDomain_ShopNumber, function () {
    disableErrMsg($(this));
});

$(document).on('click', cfrmSetUpDomain_ShopName, function () {
    disableErrMsg($(this));
});

$(document).on('click', cfrmSetUpDomain_ShopAddress, function () {
    disableErrMsg($(this))
});

//Added by WEB-SA24-0024#2
$(document).on('click', cfrmSetUpDomain_ShopCity, function () {
    disableErrMsg($(this))
});

$(document).on('click', cfrmSetUpDomain_ShopState, function () {
    disableErrMsg($(this))
});
//End Added by WEB-SA24-0024#2

$(document).on('click', cfrmSetUpDomain_ShopPostal, function () {
    disableErrMsg($(this))
});

$(document).on('click', cfrmSetUpDomain_ShopPhone, function () {
    disableErrMsg($(this))
});

$(document).on('click', cfrmSetUpDomain_ShopEmail, function () {
    disableErrMsg($(this))
});

$(document).on('click', cfrmSetUpDomain_Latitude, function () {
    disableErrMsg($(this))
});

$(document).on('click', cfrmSetUpDomain_Longitude, function () {
    disableErrMsg($(this))
});

$(document).on('click', cfrmSetUpDomain_TimeStartPickup, function () {
    disableErrMsg($(this))
});

$(document).on('click', cfrmSetUpDomain_TimeEndPickup, function () {
    disableErrMsg($(this))
});

$(document).on('click', cfrmSetUpDomain_TimeStartDelivery, function () {
    disableErrMsg($(this))
});

$(document).on('click', cfrmSetUpDomain_TimeEndDelivery, function () {
    disableErrMsg($(this))
});

$(document).on('click', cfrmSetUpDomain_ServiceFee, function () {
    disableErrMsg($(this))
});

$(document).on('click', cfrmSetUpDomain_DeliveryChargeTax, function () {
    disableErrMsg($(this))
});

//Modified by SMILEDINING-SA22-0032
//$(document).on('click', cfrmSetUpDomain_CreditCardFee, function () {
//    disableErrMsg($(this))
//});

////Added by SMILEDINING-SA21-0080#2
//$(document).on('click', cfrmSetUpDomain_MarketingServiceFee, function () {
//    disableErrMsg($(this))
//});
////End Added by SMILEDINING-SA21-0080#2
//End Modified by SMILEDINING-SA22-0032

//Added by SMILEDINING-SA22-0032
$(document).on('click', cfrmSetUpDomain_ServiceFeePercent, function () {
    disableErrMsg($(this))
});
//End Added by SMILEDINING-SA22-0032

$(document).on('click', cfrmSetUpDomain_MinimumOrder, function () {
    disableErrMsg($(this))
});
//Added by WEB-SA22-0057#5
$(document).on('click', '#btnDomain_LocalForYou', function () {
    removeErrorMessage(cfrmSetUpDomain);
});

$(document).on('click', cfrmSetUpDomain_LocalForYou_Key, function () {
    disableErrMsg($(this))
});
//End Added by WEB-SA22-0057#5
//Added by SMILEDINING-SA22-0022#3
$(document).on('click', '#btnDomain_DispatchType', function () {
    removeErrorMessage(cfrmSetUpDomain);
});
//End Added by SMILEDINING-SA22-0022#3
//Added by WEB-SA23-0020
$(document).on('click', cfrmSetUpDomain_AdditionalCharge_Amount, function () {
    removeErrorMessage(cfrmSetUpDomain);
});
//End Added by WEB-SA23-0020

//Added by SMILEDINING-SA20-0031#4
function swalConfirmDeleteShopClose(jsonObj, id) {
    swal({
        title: "Are you sure you want to delete this record?",
        type: "question",
        showCancelButton: true,
        confirmButtonText: "Yes",
        cancelButtonText: "No",
        closeOnConfirm: false,
        closeOnCancel: false,
        confirmButtonClass: "btn theme default-button",
        cancelButtonClass: "btn btn-danger",
        preConfirm: function () {
            var objUrl = new ObjUrl(jsonObj);
            var requestUrl = objUrl.getUrlSubmitForm();
            var passData = {
                'id': id,
                'key': vmViewIndex.setup.dataModal.isClickShopCloseSmileDining(),
                'domainId': vmViewIndex.setup.dataModal.domainId(),
                'domainValue': vmViewIndex.setup.dataModal.domainValue(),
                //Added by WEB-SA22-0041
                'customerId': vmViewIndex.customer.customerId(),
                'email': vmViewIndex.customer.email()
                //End Added by WEB-SA22-0041
            };
            return new Promise(function (resolve) {
                $.ajax({
                    url: requestUrl,
                    async: ajax_async,
                    cache: ajax_cache,
                    type: ajax_type_post,
                    data: passData,
                    timeout: ajax_timeout,
                })
                .done(function (result) {
                    var filterShopClose = ko.utils.arrayFilter(vmViewIndex.setup.dataModal.dataShopClose(), function (shopClose) {
                        return shopClose.time()[0].shopCloseId() == result.obj;
                    });
                    vmViewIndex.setup.dataModal.dataShopClose.remove(_.first(filterShopClose));
                    refreshGrid('gridShopClose');
                    //Added by WEB-SA23-0008
                    if (result.status) {
                        var itemKiosk = !isEmpty(result.objKiosk) ? JSON.parse(result.objKiosk) : null;
                        if (vmViewIndex.isKiosk() && itemKiosk != null) {
                            sendMqtt(itemKiosk, getTopicMqtt(result.domainId, 'stShopClose'), vmViewIndex.mqttClientId());
                        }
                    }
                    vmViewIndex.isKiosk(false);
                    //End Added by WEB-SA23-0008
                    var objAlert = new ObjAlert("", result.message, result.status);
                    objAlert.getAlert();

                })
                .fail(function (result) {
                    var objAlert = new ObjAlert("", result.message, result.status);
                    objAlert.getAlert();
                    vmViewIndex.isKiosk(false); //Added and End by WEB-SA23-0008
                });
            });
        }
    }).then(function () {
        refreshGrid('gridShopClose');
    },
    function (dismiss) {
        if (dismiss === 'cancel') {
            vmViewIndex.isKiosk(false); //Added and End by WEB-SA23-0008
        };
    });
};
//End Added by SMILEDINING-SA20-0031#4

//Added by SMILEDINING-SA21-0014
function deliverectSaveData(jsonObj) {
    var id = '';
    if (jsonObj == cfrmDeliverectActivateAccount) {
        id = 'btnSearchDeliverectAccount';
    } else {
        id = 'btnSyncProduct';
    }
    $('#' + id).addClass('disabled');
    $('#' + id + ' .fa').addClass('fa-circle-o-notch fa-spin');

    var objUrl = new ObjUrl(jsonObj);
    var requestUrl = objUrl.getUrlSubmitForm();
    var data = vmViewIndex.setup.dataModal;
    var passData = {};
    if (jsonObj == cfrmDeliverectActivateAccount) {
        passData = {
            'AccountName': data.accountName(),
            //'LocationName': data.locationName(),  //Modified and End by SMILEDINING-SA21-0014#6
            'DomainId': data.domainId(),
            //Added by WEB-SA22-0041
            'CustomerId': vmViewIndex.customer.customerId(),
            'Email': vmViewIndex.customer.email(),
            //End and Added by WEB-SA22-0041
        };
    } else if (jsonObj == cfrmDeliverectInsertOrUpdateProduct) {
        passData = {
            'AccountId': data.accountId(),
            'LocationId': data.locationId(),            
            'DomainId': data.domainId(),
            //Added by WEB-SA22-0041
            'CustomerId': vmViewIndex.customer.customerId(),
            'Email': vmViewIndex.customer.email(),
            //End and Added by WEB-SA22-0041
        };
    } else {
        if (isEmpty(requestUrl)) {
            swal(cSwal_Alert_Error, cError_Dev_Url, cSwal_Icon_Error);
            return false;
        }
    }

    $.ajax({
        url: requestUrl,
        async: ajax_async,
        cache: ajax_cache,
        type: ajax_type_post,
        data: passData,
        timeout: ajax_timeout,
    })
    .done(function (result) {
        $('#' + id).removeClass('disabled');
        $('#' + id + ' .fa').removeClass('fa-circle-o-notch fa-spin');
        if (result.status) {
            if (jsonObj == cfrmDeliverectActivateAccount) {
                var data = JSON.parse(result.obj);
                vmViewIndex.setup.dataModal.accountId(data.accountId);
                //vmViewIndex.setup.dataModal.locationId(data.locationId);  //Modified and End by SMILEDINING-SA21-0014#6
                //Added by SMILEDINING-SA21-0014#6
                vmViewIndex.setup.dataModal.listLocation([]);
                //Modified by SMILEDINING-SA21-0014#7
                //if (data.listLocation.length > 1) {
                //    vmViewIndex.setup.dataModal.listLocation.push({
                //        locationId: ko.observable('0'),
                //        locationName: ko.observable('All'),
                //    });
                //}               
                //ko.utils.arrayForEach(data.listLocation, function (item) {
                //    vmViewIndex.setup.dataModal.listLocation.push({
                //        locationId: ko.observable(item.locationId),
                //        locationName: ko.observable(item.locationName),
                //    });
                //});
                //vmViewIndex.setup.dataModal.locationSelect('0');
                //vmViewIndex.setup.dataModal.locationId('');
                //var listLocation = vmViewIndex.setup.dataModal.listLocation.slice(0);
                //listLocation.splice(0, 1);
                //vmViewIndex.setup.dataModal.locationId(ko.toJSON(listLocation));
                ////End Added by SMILEDINING-SA21-0014#6
                //End Modified by SMILEDINING-SA21-0014#7
                //Added by SMILEDINING-SA21-0014#7
                ko.utils.arrayForEach(data.listLocation, function (item) {
                    vmViewIndex.setup.dataModal.listLocation.push({
                        locationId: ko.observable(item.locationId),
                        locationName: ko.observable(item.locationName),
                    });
                });
                vmViewIndex.setup.dataModal.locationSelect(_.first(data.listLocation).locationId);
                vmViewIndex.setup.dataModal.locationId(ko.toJSON(_.first(data.listLocation)));
                //End Added by SMILEDINING-SA21-0014#7

                //Added by SMILEDINING-SA21-0066
                vmViewIndex.setup.dataModal.listDispatch([]);
                if (vmViewIndex.setup.dataModal.locationSelect() == vmViewIndex.setup.dataModal.initLocationId()) {
                    vmViewIndex.setup.dataModal.listDispatch(vmViewIndex.setup.dataModal.initListDispatch());
                }
                vmViewIndex.setup.dataModal.dispatchStore([]);
                var dispatchIdStore = []; //Added and End by SMILEDINING-SA21-0066#5
                ko.utils.arrayForEach(data.listDispatch, function (item) {
                    vmViewIndex.setup.dataModal.dispatchStore.push({
                        dispatchId: ko.observable(item.dispatchId),
                        dispatchName: ko.observable(item.dispatchName),
                    });
                    dispatchIdStore.push(item.dispatchId); //Added and End by SMILEDINING-SA21-0066#5
                });
                //End Added by SMILEDINING-SA21-0066
                //Added by SMILEDINING-SA21-0066#5
                vmViewIndex.setup.dataModal.currentDispatchIdStore('');
                vmViewIndex.setup.dataModal.currentDispatchIdStore(ko.toJSON(dispatchIdStore));
                //End Added by SMILEDINING-SA21-0066#5
            }
            if (jsonObj == cfrmDeliverectInsertOrUpdateProduct) {
                //Added by SMILEDINING-SA21-0014#6
                var data = JSON.parse(result.obj);
                var filter = ko.utils.arrayFilter(vmViewIndex.setup.data(), function (item) {
                    return item.domainId() == vmViewIndex.setup.dataModal.domainId();
                });
                var centreMapDomain = _.first(filter);
                //Modified by SMILEDINING-SA22-0008#6
                //centreMapDomain.deliverectAccountId(data.accountId);
                //centreMapDomain.deliverectLocationId(data.locationId);
                //End Modified by SMILEDINING-SA22-0008#6
                //Added by SMILEDINING-SA22-0008#6
                centreMapDomain.deliverect_AccountId(data.accountId);
                centreMapDomain.deliverect_LocationId(data.locationId);
                //End Added by SMILEDINING-SA22-0008#6
                //End Added by SMILEDINING-SA21-0014#6
                var objAlert = new ObjAlert(jsonObj, result.message, result.status);
                objAlert.getAlert();
            }
        } else {
            var objAlert = new ObjAlert(jsonObj, result.message, result.status);
            objAlert.getAlert();
            if (jsonObj == cfrmDeliverectActivateAccount) {
                vmViewIndex.setup.dataModal.accountId('');
                vmViewIndex.setup.dataModal.listLocation([]);
                vmViewIndex.setup.dataModal.locationSelect('');
                vmViewIndex.setup.dataModal.locationId('');
                vmViewIndex.setup.dataModal.listDispatchSelect(''); //Added and End by SMILEDINING-SA22-0012#1
            }
        }
    })
    .fail(function (result) {
        $('#' + id).removeClass('disabled');
        $('#' + id + ' .fa').removeClass('fa-circle-o-notch fa-spin');
        var objAlert = new ObjAlert(jsonObj, cError_Fail_TimeOut, false);
        objAlert.getAlert();
    });
}
//End Added by SMILEDINING-SA21-0014
//Added by WEB-SA23-0048
function otterSyncProduct() {
    var id = 'btnSyncProductOtter';
    $('#' + id).addClass('disabled');
    $('#' + id + ' .fa').addClass('fa-circle-o-notch fa-spin');

    var objUrl = new ObjUrl(cfrmOtterSyncProduct);
    var requestUrl = objUrl.getUrlSubmitForm();
    var passData = {
        'storeId': vmViewIndex.setup.dataModal.otterStoreId(),
        'domainId': vmViewIndex.setup.dataModal.domainId(),
        'domainName': vmViewIndex.setup.dataModal.domainName(),
        'customerId': vmViewIndex.customer.customerId(),
        'email': vmViewIndex.customer.email()
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
        $('#' + id).removeClass('disabled');
        $('#' + id + ' .fa').removeClass('fa-circle-o-notch fa-spin');
        if (result.status) {
            var storeId = result.obj;
            var centreMapDomain = ko.utils.arrayFirst(vmViewIndex.setup.data(), function (item) {
                return item.domainId() == vmViewIndex.setup.dataModal.domainId();
            });
            centreMapDomain.otter_StoreId(storeId);
            vmViewIndex.setup.dataModal.otterEventId(null); //Added and End by WEB-SA23-0048#3
            var objAlert = new ObjAlert(cfrmOtterSyncProduct, result.message, result.status);
            objAlert.getAlert();
        } else {
            var objAlert = new ObjAlert(cfrmOtterSyncProduct, result.message, result.status);
            objAlert.getAlert();
        }
    })
    .fail(function (result) {
        $('#' + id).removeClass('disabled');
        $('#' + id + ' .fa').removeClass('fa-circle-o-notch fa-spin');
        var objAlert = new ObjAlert(cfrmOtterSyncProduct, cError_Fail_TimeOut, false);
        objAlert.getAlert();
    });
};
//End Added by WEB-SA23-0048
//Added by WEB-SA23-0048#9
function otterSyncProductUpdateAvailability() {
    var id = 'btnSyncProductUpdateAvailabilityOtter';
    $('#' + id).addClass('disabled');
    $('#' + id + ' .fa').addClass('fa-circle-o-notch fa-spin');

    var objUrl = new ObjUrl(cfrmOtterSyncProductUpdateAvailability);
    var requestUrl = objUrl.getUrlSubmitForm();
    var passData = {
        'storeId': vmViewIndex.setup.dataModal.otterStoreId(),
        'domainId': vmViewIndex.setup.dataModal.domainId(),
        'domainName': vmViewIndex.setup.dataModal.domainName(),
        'customerId': vmViewIndex.customer.customerId(),
        'email': vmViewIndex.customer.email()
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
        $('#' + id).removeClass('disabled');
        $('#' + id + ' .fa').removeClass('fa-circle-o-notch fa-spin');
        if (result.status) {
            var storeId = result.obj;
            var centreMapDomain = ko.utils.arrayFirst(vmViewIndex.setup.data(), function (item) {
                return item.domainId() == vmViewIndex.setup.dataModal.domainId();
            });
            centreMapDomain.otter_StoreId(storeId);
            var objAlert = new ObjAlert(cfrmOtterSyncProductUpdateAvailability, result.message, result.status);
            objAlert.getAlert();
        } else {
            var objAlert = new ObjAlert(cfrmOtterSyncProductUpdateAvailability, result.message, result.status);
            objAlert.getAlert();
        }
    })
    .fail(function (result) {
        $('#' + id).removeClass('disabled');
        $('#' + id + ' .fa').removeClass('fa-circle-o-notch fa-spin');
        var objAlert = new ObjAlert(cfrmOtterSyncProductUpdateAvailability, cError_Fail_TimeOut, false);
        objAlert.getAlert();
    });
};
//End Added by WEB-SA23-0048#9
//Added by WEB-SA23-0048#3
function otterCheckEventId(jsonData) {
    if (!isEmpty(jsonData)) {
        var globalConfig = JSON.parse(_.head(JSON.parse(jsonData).result.values));
        if (globalConfig.globalConfigKey == 'otter-event-id') {
            vmViewIndex.setup.dataModal.otterEventId(globalConfig.globalConfigValue);
        }
    } else {
        isLoading(true);
        setTimeout(function () {
            var objUrl = new ObjUrl(cfrmOtterCheckEventId);
            var requestUrl = objUrl.getUrlSubmitForm();
            var passData = {
                'domainId': vmViewIndex.setup.dataModal.domainId(),
                'domainName': vmViewIndex.setup.dataModal.domainName(),
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
                    vmViewIndex.setup.dataModal.otterEventId(result.obj);
                    isLoading(false);
                } else {
                    isLoading(false);
                }
            })
            .fail(function (result) {
                isLoading(false);
            });
        }, 0);
    }
};
//End Added by WEB-SA23-0048#3
//Added by SMILEDINING-SA21-0028#3
function ResizeImage(isSetupDomain) {
    var id = isSetupDomain ? 'btnCreateImage': 'btnCreateImageAllDomain';

    $('#' + id).addClass('disabled');
    $('#' + id + ' .fa').addClass('fa-circle-o-notch fa-spin');

    var objUrl = new ObjUrl(cfrmResizeImage);
    var requestUrl = objUrl.getUrlSubmitForm();
    var data = isSetupDomain ? vmViewIndex.setup.dataModal : null;
    var passData = {
        'DomainId': isSetupDomain ? data.domainId() : null,
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
        $('#' + id).removeClass('disabled');
        $('#' + id + ' .fa').removeClass('fa-circle-o-notch fa-spin');
        var objAlert = new ObjAlert(cfrmResizeImage, result.message, result.status);
        objAlert.getAlert();

        if (!isSetupDomain) $('#modalResizeImage').modal('hide'); 
    })
    .fail(function (result) {
        swal(cSwal_Alert_Error, cError_Fail_TimeOut, cSwal_Icon_Error);
    });
}
//End Added by SMILEDINING-SA21-0028#3
//Added by SMILEDINING-SA21-0021#8
function createIconImage() {
    var id = 'btnCreateIconImageAllDomain';

    $('#' + id).addClass('disabled');
    $('#' + id + ' .fa').addClass('fa-circle-o-notch fa-spin');

    var objUrl = new ObjUrl(cfrmCreateIconImage);
    var requestUrl = objUrl.getUrlSubmitForm();
    var passData = {};

    $.ajax({
        url: requestUrl,
        async: ajax_async,
        cache: ajax_cache,
        type: ajax_type_post,
        data: passData,
        timeout: 600000,
    })
        .done(function (result) {
            $('#' + id).removeClass('disabled');
            $('#' + id + ' .fa').removeClass('fa-circle-o-notch fa-spin');
            var objAlert = new ObjAlert(cfrmCreateIconImage, result.message, result.status);
            objAlert.getAlert();

            $('#modalResizeImage').modal('hide');
        })
        .fail(function (result) {
            swal(cSwal_Alert_Error, cError_Fail_TimeOut, cSwal_Icon_Error);
        });
}
//End Added by SMILEDINING-SA21-0021#8
//Added by SMILEDINING-SA21-0021#9
function createIconImageCustomDomain() {
    var id = 'btnCreateIconImageCustomDomain';

    $('#' + id).addClass('disabled');
    $('#' + id + ' .fa').addClass('fa-circle-o-notch fa-spin');

    var objUrl = new ObjUrl(cfrmCreateIconImage);
    var requestUrl = objUrl.getUrlSubmitForm();
    var passData = {
        'DomainId': vmViewIndex.setup.dataModal.domainId(),
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
            $('#' + id).removeClass('disabled');
            $('#' + id + ' .fa').removeClass('fa-circle-o-notch fa-spin');
            var objAlert = new ObjAlert(cfrmCreateIconImage, result.message, result.status);
            objAlert.getAlert();

        })
        .fail(function (result) {
            swal(cSwal_Alert_Error, cError_Fail_TimeOut, cSwal_Icon_Error);
        });
}
//End Added by SMILEDINING-SA21-0021#9
//Added by SMILEDINING-SA21-0065
function getAllAccount() {
    vmViewIndex.setup.dataAllAccount([]);
    var JsDataAllAccount;
    var objUrl = new ObjUrl(cJsonGetDataAllAccount);
    var requestUrl = objUrl.getUrlFromJson();
    var passData;    

    $.ajax({
        url: requestUrl,
        async: ajax_async,
        cache: ajax_cache,
        type: ajax_type_post,
        data: passData,
        timeout: ajax_timeout,
    })
    .done(function (result) {
        if (result.status) { //Added and End by SMILEDINING-SA21-0066#5
            JsDataAllAccount = JSON.parse(result.obj);
            ko.mapping.fromJS(JsDataAllAccount, {}, vmViewIndex.setup.dataAllAccount);
        //Added by SMILEDINING-SA21-0066#5
        } 
        //vmViewIndex.setup.showLoading(false);//Modified and End by SMILEDINING-SA21-0081
        //loadingShimmer(false, 'Setup'); //Added and End by SMILEDINING-SA21-0081 //Modified and End by SMILEDINING-SA21-0081#1
        //loadingShimmer(false, cGridSetup); //Added and End by SMILEDINING-SA21-0081#1 //Modified and End by SMILEDINING-SA22-0008#6
        //Added by SMILEDINING-SA22-0008#6
        if ($('.shimmer-setup').css('display') != 'none') {
            if (vmViewIndex.setup.data().length != 0)
                loadingShimmer(false, cGridSetup);
        }
        //End Added by SMILEDINING-SA22-0008#6
        //End Added by SMILEDINING-SA21-0066#5
    })
    .fail(function (result) {
        JsDataAllAccount = null;
        vmViewIndex.setup.dataAllAccount([]);
        //vmViewIndex.setup.showLoading(false); //Added and End by SMILEDINING-SA21-0066#5 //Modified and End by SMILEDINING-SA21-0081
        //loadingShimmer(false, 'Setup'); //Added and End by SMILEDINING-SA21-0081 //Modified and End by SMILEDINING-SA21-0081#1
        //loadingShimmer(false, cGridSetup); //Added and End by SMILEDINING-SA21-0081#1 //Modified and End by SMILEDINING-SA22-0008#6
        //Added by SMILEDINING-SA22-0008#6
        if (!$('.shimmer-setup').css('display') == 'none') {
            if (vmViewIndex.setup.data() != null)
                loadingShimmer(false, cGridSetup);
        }
        //End Added by SMILEDINING-SA22-0008#6
    });
}
//End Added by SMILEDINING-SA21-0065
//Added by SMILEDINING-SA21-0065#1
function isProduction(domainId) {
    if (domainId != "8907303" && domainId != "8907306") {
        return true;
    }
    else {
        return false;
    }
}
//End Added by SMILEDINING-SA21-0065#1
//Added by SMILEDINING-SA21-0080
function swalConfirmActivateCreditCardAndMarkeingServiceFee() {
    //var text = 'If you enable "Activate Credit Card and Marketing Fee", shop will be can use only "Pay Credit".'; //Modified and End by WEB-SA22-0046 
    //var text = 'If you enable "Activate Service Fee (%)", shop will be can use only "Pay Credit".'; //Added and End by WEB-SA22-0046 //Modified and End by WEB-SA22-0057#1
    var text = 'If you select "Percentage", shop will be can use only "Pay Credit".'; //Added and End by WEB-SA22-0057#1 
    swal({
        title: "Are you sure?",
        text: text,
        type: "question",
        showCancelButton: true,
        confirmButtonText: "Confirm",
        cancelButtonText: "Cancel",
        closeOnConfirm: false,
        closeOnCancel: false,
        confirmButtonClass: "btn theme default-button",
        cancelButtonClass: "btn btn-danger",
    }).then(function () {
        //vmViewIndex.setup.dataModal.feeCreditAndMarketing(true); //Modified and End by WEB-SA22-0057#1
        vmViewIndex.setup.dataModal.feeDining(2); //Added and End by WEB-SA22-0057#1
        vmViewIndex.setup.dataModal.pickupPayCash(false);
        vmViewIndex.setup.dataModal.pickupPayCredit(true);
        vmViewIndex.setup.dataModal.deliveryPayCash(false);
        vmViewIndex.setup.dataModal.deliveryPayCredit(true);
        //Modified by WEB-SA22-0057#1
        //$('#btnDomain_MarketingServiceFeeYes').addClass('active');
        //$('#btnDomain_MarketingServiceFeeNo').removeClass('active');
        //End Modified by WEB-SA22-0057#1
    }, function (dismiss) {
        if (dismiss === 'cancel') {
            //Modified by WEB-SA22-0057#1
            //$('#btnDomain_MarketingServiceFeeYes').removeClass('active');
            //$('#btnDomain_MarketingServiceFeeNo').addClass('active');
            //End Modified by WEB-SA22-0057#1
            //Added by WEB-SA22-0057#1
            vmViewIndex.setup.dataModal.isClickFeeDining(false);
            vmViewIndex.setup.dataModal.feeDining(1);
            //End by WEB-SA22-0057#1
        }
    })
}
//Modified by WEB-SA22-0046 
//function swalValidatePaymentType(isPickup, isPayCash) {
//Modified by SMILEDINING-SA22-0012#1
//var text = isPayCash ? 'Please remove "Activate Credit Card and Marketing Fee" before setting "Pay Cash".'
//: 'Please remove "Activate Credit Card and Marketing Fee" before setting close "Pay Credit".'
//End Modified by SMILEDINING-SA22-0012#1
//Added by SMILEDINING-SA22-0012#1
//var text = '';
// if (isPickup) {
//    text = isPayCash ? 'Please remove "Activate Credit Card and Marketing Fee" before setting "Pay Cash".'
//        : 'Please remove "Activate Credit Card and Marketing Fee" before setting close "Pay Credit".';
//} else {
//    text = isPayCash ? 'Please remove "Activate Credit Card and Marketing Fee" or choose Dispatch by "None" before setting "Pay Cash".'
//        : 'Please remove "Activate Credit Card and Marketing Fee" or choose Dispatch by "None" before setting close "Pay Credit".';
//}
//End Added by SMILEDINING-SA22-0012#1
//End Modified by WEB-SA22-0046 
//Added by WEB-SA22-0046 
function swalValidatePaymentType(isPickup, isPayCash, isFee, isDispatch) {
    var text = '';
    if (isPickup) {
        text = isPayCash ? cError_PayCash_Service_Fee
            : cError_PayCredit_Service_Fee
    } else {
        if (isPayCash) {
            if (isFee && isDispatch) {
                text = cError_PayCash_Dispatch_Service_Fee
            } else {
                if (isDispatch) {
                    text = cError_PayCash_Dispatch;
                } else {
                    text = cError_PayCash_Service_Fee;
                }
            }
        } else {
            if (isFee && isDispatch) {
                text = cError_PayCredit_Dispatch_Service_Fee
            } else {
                if (isDispatch) {
                    text = cError_PayCredit_Dispatch;
                } else {
                    text = cError_PayCredit_Service_Fee;
                }
            }
        }
    }
//End Added by WEB-SA22-0046
    swal({
        title: cSwal_Alert_Warning,
        text: text,
        type: cSwal_Icon_Warning,
        showCancelButton: false,
        confirmButtonText: "Ok",
        closeOnConfirm: false,
        closeOnCancel: false,
        confirmButtonClass: "btn theme default-button",
    }).then(function () {
        if (isPickup && isPayCash) {
            $('#btnDomain_PayCashPickupYes').removeClass('active');
            $('#btnDomain_PayCashPickupNo').addClass('active');
        } else if (isPickup && !isPayCash) {
            $('#btnDomain_PayCreditPickupYes').addClass('active');
            $('#btnDomain_PayCreditPickupNo').removeClass('active');
        } else if (!isPickup && isPayCash) {
            $('#btnDomain_PayCashDeliveryYes').removeClass('active');
            $('#btnDomain_PayCashDeliveryNo').addClass('active');
        } else if (!isPickup && !isPayCash) {
            $('#btnDomain_PayCreditDeliveryYes').addClass('active');
            $('#btnDomain_PayCreditDeliveryNo').removeClass('active');
        }
    });
}
//End Added by SMILEDINING-SA21-0080
//Added by SMILEDINING-SA22-0012#1
function checkDispatch() {
    var isPaymentTypeChanged = !(!vmViewIndex.setup.dataModal.deliveryPayCash() && vmViewIndex.setup.dataModal.deliveryPayCredit());
    var isTipChanged = !(vmViewIndex.setup.dataModal.tipAuto() == cTipAuto_DoorDash && vmViewIndex.setup.dataModal.tipGuide() == cTipGuide_DoorDash);
    if (vmViewIndex.setup.dataModal.webDispatch() != null) {
        if (vmViewIndex.setup.dataModal.dispatchType() == cDispatchType_DoorDash) {
            if (isPaymentTypeChanged || isTipChanged) {
                swal(cSwal_Alert_Warning, "Payment type and tips will automatically be changed.", cSwal_Icon_Warning);
                vmViewIndex.setup.dataModal.tipAuto(cTipAuto_DoorDash);
                vmViewIndex.setup.dataModal.tipGuide(cTipGuide_DoorDash);
            }            
        } else if (isPaymentTypeChanged) {
            swal(cSwal_Alert_Warning, "Payment type will automatically be changed.", cSwal_Icon_Warning);
        }
        vmViewIndex.setup.dataModal.deliveryPayCash(false);
        vmViewIndex.setup.dataModal.deliveryPayCredit(true);
    }
}
//End Added by SMILEDINING-SA22-0012#1