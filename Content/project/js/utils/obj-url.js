/*
 *   SMILEDINING-SA18-0008                  02/09/2018      FixBug                      1. Resend order change flag. 
 *   SMILEDINING-SA18-0010                  03/22/2018      Customize                   1. Summary
 *   SMILEDINING-SA18-0011                  05/07/2018      Customize                   1. New Web Report.
 *   SMILEDINING-SA19-0023                  09/13/2019      Customize                   1. Add 'void button' for void previous ticket list on WebSupport.
 *   SMILEDINING-SA19-0011                  09/03/2019      Customize                   1. E-Gift Card.
 *   SMILECONTACTLESS-SA20-0001             06/10/2020      New Project                 1. New project smile contactless integrate smile dining, web owner, web api
 *   SMILEDINING-SA20-0029                  25/10/2020      Customize                   1. Adjust performance for Login.
 *   SMILEDINING-SA20-0031#4                08/01/2021      Customize                   1. Add shopClose feature to WebSupport and Fix bug validate custom shopClose.
 *   SMILEDINING-SA21-0007                  02/02/2021      Customize                   1. Apple Pay and Set up Unit Of Work  and Shop Close API         
 *   SMILEDINING-SA21-0014                  08/03/2021      Customize                   1. Add new product 'Smile Third Party Integrations' used Deliverect. 
 *   SMILEDINING-SA21-0028#3                05/08/2021      Customize                   1. Edit UI Smile Dining and Contactless (Layout P2).
 *   SMILEDINING-SA21-0048                  31/08/2021      Customize                   1. Add button update taxrate from revenueclass all domain.
 *   SMILEDINING-SA21-0048#1                07/09/2021      Customize                   1. Modified close update taxRate.
 *   SMILEDINING-SA21-0063                  07/10/2021      Customize                   1. Add menu Marketing on web owner and Add menu Log on web support.
 *   SMILEDINING-SA21-0065                  12/10/2021      Customize                   1. Change the solution to calling API Deliverect by JWT and asynchronous.
 *   SMILEDINING-SA21-0063#1                19/10/2021      Customize                   1. Remove library ExcelJS,FileSaver and Add Filter Month,Day.
 *   SMILEDINING-SA21-0066                  21/10/2021      Customize                   1. New feature web dispatch deliverect.
 *   SMILEDINING-SA21-0021#8                07/06/2021      Customize                   1. Create icon default.
 *   SMILEDINING-SA21-0080#2                09/12/2021      Customize                   1. Calculate marketingFee in SmileDining and show receipt and report in webSupport.
 *   SMILEDINING-SA22-0017                  06/06/2022      Customize                   1. Add menu AutoUpdate in webSupport.
 *   SMILEDINING-SA22-0022                  15/06/2022      Customize                   1. Add menu Delivery Billing in webSupport.
 *   SMILEDINING-SA22-0027                  18/07/2022      Customize                   1. Fix bug save log in webSupport.
 *   SMILEDINING-SA22-0033                  25/08/2022      Customize                   1. Add amount deposit and email customer for delivery billing in WebSupport and WebOwner.
 *   WEB-SA22-0071                          21/12/2022      Customize                   1. Add download excel for Delivery Billing in webSupport.
 *   WEB-SA23-0008                          26/01/2023      Customize                   1. Use MQTT send data to kiosk in webSupport.
 *   WEB-SA23-0013#1                        13/02/2023      Customize                   1. Fix bug delivery billing show invalid shop in webSupport and webOwner.
     WEB-SA23-0025                          28/03/2023      Customize                   1. Add filter product and export excel in menu Setup on webSupport. 
                                                                                        2. Change version api cpxtransaction of setup-dining to v2 on webSupport.
                                                                                        3. Edit version POS in menu Auto Update on webSupport.
     WEB-SA23-0048                          11/09/2023      Customize                   1. Add setting Otter on webOwner, webSupport.
     WEB-SA23-0049                          22/09/2023      Customize                   1. Add check diff doordash on webSupport and fix bug get address for dispatch on webDining.
     WEB-SA23-0048#3                        17/10/2023      Customize                   1. Fix bug copy food and sync product for Otter on webOwner, webSupport.
     WEB-SA23-0056                          20/12/2023      Customize                   1. Add Service Fee Report on webSupport, webDining, webOnTable.
     WEB-SA23-0048#9                        11/01/2024      Customize                   1. Fix bug sync product for update items Suspend/Unsuspend Otter on webSupport.
     WEB-SA24-0002                          02/02/2024      Customize                   1. Add Order Paper Report on webSupport.
     WEB-SA24-0029                          17/10/2024      Customize                   1. New Requirement - Personnel on webSupport.
 */

/*
 * obj Url
 */

var ObjUrl = function (objName, objStatus) {
    this.id = objName;
    this.status = objStatus;
};

ObjUrl.prototype.getUrlSubmitForm = function () {
    var tag = $('#' + this.id);
    switch (this.id) {
        case cfrmLogIn:
            return $('#divAccountLogIn').data('request-url');
            break;
        case cfrmMonitorSelectDate:
            return $('#divMonitorSelectDate').data('request-url');
            break;
        case cfrmMonitorResend:
            return $('#divMonitorResend').data('request-url');
            break;
        case cfrmMonitorAdjustPrice:
            return $('#divMonitorAdjustPrice').data('request-url');
            break;
        case cfrmMonitorAdjustTip:
            return $('#divMonitorAdjustTip').data('request-url');
            break;
            //Added by SMILEDINING-SA19-0023
        case cfrmMonitorVoidTicket:
            return $('#divMonitorVoidTicket').data('request-url');
            break;
            //End Added by SMILEDINING-SA19-0023
        case cfrmSetUpDomain:
            if (this.status == cStatusAdd) {
                return $('#divSetUpDomainAdd').data('request-url');
            } else if (this.status == cStatusUpdate) {
                return $('#divSetUpDomainUpdate').data('request-url');
            }
            break;
            //Added by SMILEDINING-SA21-0007
        case cfrmSetUpUsaEpaySearchDate:
            return $('#divSetUpUsaEpaySearchDate').data('request-url');
            break;
            //End Added by SMILEDINING-SA21-0007
        case cfrmOwner:
            if (this.status == cStatusAdd) {
                return $('#divOwnerMemberAdd').data('request-url');
            } else if (this.status == cStatusUpdate) {
                return $('#divOwnerMemberUpdate').data('request-url');
            }
            break;
        case cfrmChangePassword:
            return $('#divAccountChangePassword').data('request-url');
            break;
        case cfrmCreateAccount:
            return $('#divAccountCreateAccount').data('request-url');
            break;
        //Added by SMILEDINING-SA18-0011
        case cfrmWrUser:
            if (this.status == cStatusAdd) {
                return $('#divWebReportMemberAdd').data('request-url');
            } else if (this.status == cStatusUpdate) {
                return $('#divWebReportMemberUpdate').data('request-url');
            }
            break;
        case cfrmWrUserRoleMap:
            if (this.status == cStatusAdd) {
                return $('#divWebReportMemberRoleMapAdd').data('request-url');
            } else if (this.status == cStatusUpdate) {
                return $('#divWebReportMemberRoleMapUpdate').data('request-url');
            }
            break;
        case cfrmWrRoleMenuMap:
            return $('#divWebReportRoleMenuMapTransaction').data('request-url');
            break;
        //End Added by SMILEDINING-SA18-0011
        //Added by  SMILEDINING-SA19-0011
        case cfrmGiftCer:
            if (this.status == cStatusAdd) {
                return $('#divEgiftCardEgiftCardAdd').data('request-url');
            } else if (this.status == cStatusUpdate) {
                return $('#divEgiftCardEgiftCardUpdate').data('request-url');
            }
            break;
        case cfrmGiftCerSearch:
            if (this.status == 'SEARCH') {
                return $('#divEgiftCardGiftCerSearch').data('request-url');
            } else if (this.status == 'RESEND'){
                return $('#divEgiftCardGiftCerResendBySearch').data('request-url');
            }            
            break;
        case cfrmGiftCerSearchDate:
            if (this.status == 'SEARCH') {
                return $('#divEgiftCardGiftCerSearchDate').data('request-url');
            } else if (this.status == 'RESEND') {
                return $('#divEgiftCardGiftCerResendBySearchDate').data('request-url');
            }
            break;
        //End Added by  SMILEDINING-SA19-0011
        //Added by SMILEDINING-SA20-0031#4
        case cfrmShopClose:
            if (this.status == cStatusAdd) {
                return $('#divSetUpShopCloseAdd').data('request-url');
            } else if (this.status == cStatusUpdate) {
                return $('#divSetUpShopCloseUpdate').data('request-url');
            }
            break;
        case cfrmDeleteShopClose:
            return $('#divSetUpShopCloseDelete').data('request-url');
            break;
        //End Added by SMILEDINING-SA20-0031#4
        //Added by SMILEDINING-SA21-0014
        case cfrmDeliverectActivateAccount:
            return $('#divDeliverectActivateAccount').data('request-url');
            break;
        case cfrmDeliverectInsertOrUpdateProduct:
            return $('#divDeliverectInsertOrUpdateProduct').data('request-url');
            break;
            //End Added by SMILEDINING-SA21-0014
        //Added by WEB-SA23-0048
        case cfrmOtterSyncProduct:
            return $('#divOtterSyncProduct').data('request-url');
            break;
        //End Added by WEB-SA23-0048
        //Added by WEB-SA23-0048#9
        case cfrmOtterSyncProductUpdateAvailability:
            return $('#divOtterSyncProductUpdateAvailability').data('request-url');
            break;
        //End Added by WEB-SA23-0048#9
        //Added by WEB-SA23-0048#3
        case cfrmOtterCheckEventId:
            return $('#divOtterCheckEventId').data('request-url');
            break;
        //End Added by WEB-SA23-0048#3
            //Added by SMILEDINING-SA21-0028#3
        case cfrmResizeImage:
            return $('#divResizeImage').data('request-url');
            break;
            //End Added by SMILEDINING-SA21-0028#3
        //Added by SMILEDINING-SA21-0063
        case cfrmLogSelectStore:
            return $('#divLogSelectStore').data('request-url');
            break;
        //End Added by SMILEDINING-SA21-0063
        //Added by SMILEDINING-SA21-0021#8
        case cfrmCreateIconImage:
            return $('#divCreateIconImage').data('request-url');
            break;
        //End Added by SMILEDINING-SA21-0021#8
        //Added by SMILEDINING-SA22-0017
        case cfrmAutoUpdateSendUpdateVersion:
            return $('#divAutoUpdateSendUpdateVersion').data('request-url');
            break;
        case cfrmAutoUpdateServiceExpireUpdate:
            return $('#divAutoUpdateServiceExpireUpdate').data('request-url');
            break;
        //End Added by SMILEDINING-SA22-0017
        //Added by SMILEDINING-SA22-0022
        case cfrmDeliveryBillingSendEmail:
            return $('#divDeliveryBillingSendEmail').data('request-url');
            break;
        //End Added by SMILEDINING-SA22-0022
        //Added by WEB-SA22-0071
        case cfrmDeliveryBillingDownloadExcel:
            return $('#divDeliveryBillingDownloadExcel').data('request-url');
            break;
        //End Added by WEB-SA22-0071
        //Added by WEB-SA23-0025
        case cfrmSetUpExportExcel:
            return $('#divSetUpExportExcel').data('request-url');
            break;
        //End Added by WEB-SA23-0025
        //Added by WEB-SA23-0049
        case cfrmDeliveryBillingUploadConvertFile:
            return $('#divDeliveryBillingUploadConvertFile').data('request-url');
            break;
        case cfrmDeliveryBillingConvertTicket:
            return $('#divDeliveryBillingConvertTicket').data('request-url');
            break;
        case cfrmDeliveryBillingConvertFileUpdate:
            return $('#divDeliveryBillingConvertFileUpdate').data('request-url');
            break;
        //End Added by WEB-SA23-0049
        //Added by WEB-SA24-0002
        case cfrmRpOrderPaperSendOrderToGravityByDomain:
            return $('#divRpOrderPaperSendOrderToGravityByDomain').data('request-url');
            break;
        case cfrmRpOrderPaperSettingStatusUpdateByDomain:
            return $('#divRpOrderPaperSettingStatusUpdateByDomain').data('request-url');
            break;
        case cfrmRpOrderPaperSettingTypeUpdateByDomain:
            return $('#divRpOrderPaperSettingTypeUpdateByDomain').data('request-url');
            break;        
        case cfrmRpOrderPaperSettingUpdate:
            return $('#divRpOrderPaperSettingUpdate').data('request-url');
            break; 
        //End Added by WEB-SA24-0002
        //Added by WEB-SA24-0029
        case cfrmPersonnel:
            if (this.status == cStatusAdd) {
                return $('#divPersonnelInvite').data('request-url');
            } else if (this.status == cStatusUpdate) {
                return $('#divPersonnelUpdate').data('request-url');
            }
            break;
        case cfrmPersonnelDelete:
            return $('#divPersonnelDelete').data('request-url');
            break;        
        case cfrmPersonnelGroupRoleUpdate:
            return $('#divPersonnelGroupRoleUpdate').data('request-url');
            break; 
        case cfrmPersonnelRole:
            if (this.status == cStatusAdd) {
                return $('#divPersonnelRoleAdd').data('request-url');
            } else if (this.status == cStatusUpdate) {
                return $('#divPersonnelRoleUpdate').data('request-url');
            }
            break;        
        case cfrmPersonnelOwnerRoleUpdate:
            return $('#divPersonnelOwnerRoleUpdate').data('request-url');
            break; 
        //End Added by WEB-SA24-0029
        
            //Modified by SMILEDINING-SA21-0048#1
        //    //Added by SMILEDINING-SA21-0048
        //case cfrmUpdateTaxRate:
        //    return $('#divUpdateTaxRate').data('request-url');
        //    break;
        //    //End Added by SMILEDINING-SA21-0048
            //End Modified by SMILEDINING-SA21-0048#1
        //case cfrmRegister:
        //    return $('#divAccountRegister').data('request-url');
        //    break;
        //case cfrmForgotPassword:
        //    return $('#divAccountForgotPassword').data('request-url');
        //    break;
        //case cfrmResetPassword:
        //    return $('#divAccountRestPassword').data('request-url');
        //    break;
        //case cfrmLogOff:
        //    return $('#divAccountLogOff').data('request-url');
        //    break;
        //case cfrmCustomerProfileUpdate:
        //    return $('#divCustomerProfileUpdate').data('request-url');
        //    break;
        //case cfrmChangePassword:
        //    return $('#divCustomerChangePassword').data('request-url');
        //    break;
        //case cfrmCustomerAddressAdd:
        //    return $('#divCustomerAddressAdd').data('request-url');
        //    break;
        //case cfrmCustomerAddressUpdate:
        //    return $('#divCustomerAddressUpdate').data('request-url');
        //    break;
        //case cfrmCustomerAddressDelete:
        //    return $('#divCustomerAddressDelete').data('request-url');
        //    break;
        //case cfrmPayOrder:
        //    return $('#divPayOrder').data('request-url');
        //    break;
        //case cfrmConfirmPayment:
        //    return $('#divConfirmPayment').data('request-url');
        //    break;
        //case cfrmDiscount:
        //    return $('#divDiscount').data('request-url');
        //    break;
        default:
            return null;
            break;
    }
};

ObjUrl.prototype.getUrlFromJson = function () {
    switch (this.id) {
        case cJsonAccountLogOff:
            return $('#divAccountLogOff').data('request-url');
            break;
        case cJsonMonitorGetData:
            return $('#divMonitorGetData').data('request-url');
            break;
        case cJsonMonitorGetShopOnline:
            return $('#divMonitorGetShopOnline').data('request-url');
            break;
        case cfrmSetUpGetData:
            return $('#divSetUpGetData').data('request-url');
            break;
        case cfrmSetUpGetDataByKey:
            return $('#divSetUpGetDataByKey').data('request-url');
            break;
        case cfrmOwnerGetData:
            return $('#divOwnerGetData').data('request-url');
            break;
        case cfrmOwnerGetDataByKey:
            return $('#divOwnerGetDataByKey').data('request-url');
            break;
        case cJsonGetCustomer:
            return $('#divJsonGetCustomer').data('request-url');
            break;
        //Added by SMILEDINING-SA18-0008
        case cJsonSendFail:
            return $('#divJsonSendFail').data('request-url');
            break;
        //End Added by SMILEDINING-SA18-0008
        //Added by SMILEDINING-SA18-0010
        case cfrmSummaryGetData:
            return $('#divSummaryGetData').data('request-url');
            break;
        //End Added by SMILEDINING-SA18-0010
        //Added by SMILEDINING-SA18-0011
        case cJsonGetWrCustomer:
            return $('#divWebReportGetWrCustomer').data('request-url');
            break;
        case cJsonGetWrGroupMenu:
            return $('#divWebReportGetWrGroupMenu').data('request-url');
            break;
        case cJsonGetWrMenu:
            return $('#divWebReportGetWrMenu').data('request-url');
            break;
        case cJsonGetWrRole:
            return $('#divWebReportGetWrRole').data('request-url');
            break;
        case cJsonGetWrUser:
            return $('#divWebReportGetWrUser').data('request-url');
            break;
        case cJsonGetWrRoleMenuMap:
            return $('#divWebReportGetWrRoleMenuMap').data('request-url');
            break;
        case cJsonGetWrUserRoleMap:
            return $('#divWebReportGetWrUserRoleMap').data('request-url');
            break;
            //End Added by SMILEDINING-SA18-0011
            //Added by SMILEDINING-SA19-0011
        case cJsonGetWrEgiftCard:
            return $('#divEgiftCardGetWrEgiftCard').data('request-url');
            break;
        case cJsonGetWrGiftCerX:
            return $('#divEgiftCardGetWrGiftCerX').data('request-url');
            break;
            //End Added by SMILEDINING-SA19-0011
        case cJsonEgiftCardUpdate:
            return $('#divJsonEgiftCardUpdate').data('request-url');
            break;
            //Added by SMILECONTACTLESS-SA20-0001
        case cJsonResetDataSmileDining:
            return $('#divJsonResetDataSmileDining').data('request-url');
            break;
            //End Added by SMILECONTACTLESS-SA20-0001
            //Added by SMILEDINING-SA20-0029
        case cJsonGetDataDomainValue:
            return $('#divJsonGetDataDomainValue').data('request-url');
            break;
            //End Added by SMILEDINING-SA20-0029
            //Added by SMILEDINING-SA21-0007
        case cJsonSetUpUsaEpaySearchDateDetail:
            return $('#divJsonSetUpUsaEpaySearchDateDetail').data('request-url');
            break;
            //End Added by SMILEDINING-SA21-0007
            //Added by SMILEDINING-SA20-0031#4
        case cJsonGetShopClose:
            return $('#divSetUpGetShopClose').data('request-url');
            break;
            //End Added by SMILEDINING-SA20-0031#4
            //Modified by SMILEDINING-SA21-0048#1
            //Added by SMILEDINING-SA21-0048
        //case cJsonGetAllDomainInvalidTaxRate:
        //    return $('#divJsonGetAllDomainInvalidTaxRate').data('request-url');
        //    break;
        //    //End Added by SMILEDINING-SA21-0048
            //End Modified by SMILEDINING-SA21-0048#1
            //Added by SMILEDINING-SA21-0065
        case cJsonGetDataAllAccount:
            return $('#divJsonGetDataAllAccount').data('request-url');
            break;
            //End Added by SMILEDINING-SA21-0065
        //Added by SMILEDINING-SA21-0063#1
        case cfrmLogSelectStore:
            return $('#divLogSelectStore').data('request-url');
            break;
        //End Added by SMILEDINING-SA21-0063#1
	        //Added by SMILEDINING-SA21-0066
        case cJsonGetDataDispatch:
            return $('#divJsonGetDataDispatch').data('request-url');
            break;
            //End Added by SMILEDINING-SA21-0066
        //Added by SMILEDINING-SA21-0080#2
        case cfrmMarketingServiceGetData:
            return $('#divMarketingServiceGetData').data('request-url');
            break;
        //End Added by SMILEDINING-SA21-0080#2
        //Added by SMILEDINING-SA22-0017
        case cfrmAutoUpdateGetData:
            return $('#divAutoUpdateGetData').data('request-url');
            break;
        case cfrmAutoUpdateGetRedis:
            return $('#divAutoUpdateGetRedis').data('request-url');
            break;
        //End Added by SMILEDINING-SA22-0017
        //Added by WEB-SA23-0013#1
        case cfrmDeliveryBillingGetData:
            return $('#divDeliveryBillingGetData').data('request-url');
            break;
        //End Added by WEB-SA23-0013#1
        //Added by SMILEDINING-SA22-0022
        case cJsonGetDataDeliveryBilling:
            return $('#divJsonGetDataDeliveryBilling').data('request-url');
            break;
        //End Added by SMILEDINING-SA22-0022
        //Added by SMILEDINING-SA22-0033
        case cJsonGetEmailCustomer:
            return $('#divJsonGetEmailCustomer').data('request-url');
            break;
        //End Added by SMILEDINING-SA22-0033
        //Added by WEB-SA23-0049
        case cJsonGetDataDeliveryBillingConvertFile:
            return $('#divJsonGetDataDeliveryBillingConvertFile').data('request-url');
            break;
        case cJsonGetDataDetailMonitor:
            return $('#divJsonGetDataDetailMonitor').data('request-url');
            break;
        //End Added by WEB-SA23-0049 
        //Added by SMILEDINING-SA22-0027
        case cJsonKeepSessionAlive:
            return $('#divJsonKeepSessionAlive').data('request-url');
            break;
        //End Added by SMILEDINING-SA22-0027
        //Added by WEB-SA23-0008
        case cJsonGetDataMqtt:
            return $('#divJsonGetDataMqtt').data('request-url');
            break;
        //End Added by WEB-SA23-0008
        //Added by WEB-SA23-0056
        case cfrmRpServiceFeeGetData:
            return $('#divRpServiceFeeGetData').data('request-url');
            break;
        //End Added by WEB-SA23-0056
        //Added by WEB-SA24-0002
        case cfrmRpOrderPaperGetData:
            return $('#divRpOrderPaperGetData').data('request-url');
            break;
        case cJsonGetDataRpOrderPaperByDomain:
            return $('#divJsonGetDataRpOrderPaperByDomain').data('request-url');
            break;
        case cJsonGetDataRpOrderPaperSetting:
            return $('#divJsonGetDataRpOrderPaperSetting').data('request-url');
            break;
        //End Added by WEB-SA24-0002
        //Added by WEB-SA24-0029
        case cfrmPersonnelGetData:
            return $('#divPersonnelGetData').data('request-url');
            break;
        //End Added by WEB-SA24-0029
        default:
            return null;
            break;
    }
};