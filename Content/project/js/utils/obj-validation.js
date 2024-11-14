/*
 * obj ValidateForm
 * 
 *      SMILEDINING-SA18-0011      05/07/2018      Customize               1. New Web Report.
 *      SMILEDINING-SA19-0018      08/19/2019      FixBug                  1. 'StartDate' more than 'EndDate' or vice versa.
                                                                           2. Select date should participate in current date.
                                                                           3. should not only select Start Date or End Date.
        SMILEDINING-SA20-0014      31/07/2020      Customize               1. Separate email settings of Order Smiledining and E- Gift Card. 
        SMILEDINING-SA20-0038#1    30/11/2020      Customize               1. Fix bug validate custom menu hour. 
 *      SMILEDINING-SA20-0031      02/12/2020      Customize               1. Adjust shop close period date and time.
 *      SMILEDINING-SA20-0031#4    08/01/2021      Customize               1. Add shopClose feature to WebSupport and Fix bug validate custom shopClose.           
 *      SMILEDINING-SA21-0012      31/03/2021      Customize               1. Change email order confirmation in smile dining.   
 *      SMILEDINING-SA21-0063#1    19/10/2021      Customize               1. Remove library ExcelJS,FileSaver and Add Filter Month,Day.
 *      SMILEDINING-SA21-0080#2    09/12/2021      Customize               1. Calculate marketingFee in SmileDining and show receipt and report in webSupport.
 *      SMILEDINING-SA22-0008#10   22/03/2021      Customize               1. Add alert domainId 7 character and Fix call deliverect.
 *      SMILEDINING-SA22-0022      15/06/2022      Customize               1. Add menu Delivery Billing in webSupport.
 *      SMILEDINING-SA22-0028      22/07/2022      Customize               1. Fix bug monitor in webSupport.
 *      SMILEDINING-SA22-0028#1    25/07/2022      Customize               1. Fix bug monitor for taxes & fees in webSupport.
 *      SMILEDINING-SA22-0032      18/08/2022      Customize               1. Edit summary report in WebSupport.
                                                                           2. Edit setting service fee in WebSupport.
                                                                           3. Add download and print for delivery billing in WebSupport.
        WEB-SA22-0043              27/09/2022      Customize               1. Fix bug change password in Setting
        WEB-SA23-0013              09/02/2023      Customize               1. Fix bug summary and delivery billing in webSupport.
        WEB-SA22-0057#5            24/02/2023      Customize               1. Fix bug save Key of Local For You in webSupport.
        WEB-SA23-0020              13/03/2023      Customize               1. Add setting additional charge for deliverect in webSupport.
        WEB-SA23-0025#1            29/03/2023      Customize               1. Fix bug can't search monitor for firefox on webSupport.
        WEB-SA23-0050              26/09/2023      Customize               1. Fix bug alert invalid shop address and check domain name duplicate on webSupport.
        WEB-SA23-0056              20/12/2023      Customize               1. Add Service Fee Report on webSupport, webDining, webOnTable.
        WEB-SA24-0002              02/02/2024      Customize               1. Add Order Paper Report on webSupport.
        WEB-SA24-0003              06/02/2024      Customize               1. New Requirement - Add Purchase date to E-Gift Card Menu on webOwner, webSupport.
                                                                           2. New Requirement - Change default Auto Sync Product to "Yes" on webSupport.
                                                                           3. Fix bug saving of shop address due to missing city on webSupport.
        WEB-SA24-0024              23/07/2024      Customize               1. Fix bug shop address and change the Captcha and SignalR defaults on webSupport.
        WEB-SA24-0024#3            09/08/2024      Customize               1. Fix bug invalid shop address for doordash on webSupport.
        WEB-SA24-0029              17/10/2024      Customize               1. New Requirement - Personnel on webSupport.
        WEB-SA24-0029#2            07/11/2024      Customize               1. Fix bug modal not closing, invalid password on account creation, and role updates in the Personnel tab on webSupport.
 */

var ObjValidateForm = function (frmName, parent) {
    this.id = frmName;
    this.parent = parent;
    this.error = new Array();
    this.showAlert = true;
};

ObjValidateForm.prototype.verifyData = function () {
    var tag, id;
    switch (this.id) {
        case cfrmLogIn:
            tag = this.parent;
            if (tag.find(cfrmLogIn_Email) === undefined || tag.find(cfrmLogIn_Email).val().length == 0) {
                this.error.push(includeNewLine(cError_Email_Empty));
                tag.find(cfrmLogIn_Email).addClass(cCssInputValidateError);
            } else {
                if (!validateEmail(tag.find(cfrmLogIn_Email).val())) {
                    this.error.push(includeNewLine(cError_Email_Validate));
                    tag.find(cfrmLogIn_Email).addClass(cCssInputValidateError);
                }
            }

            if (tag.find(cfrmLogIn_Password) === undefined || tag.find(cfrmLogIn_Password).val().length == 0) {
                this.error.push(includeNewLine(cError_Password_Empty));
                tag.find(cfrmLogIn_Password).addClass(cCssInputValidateError);
            } else {
                if (tag.find(cfrmLogIn_Password).val().length < 6) {
                    this.error.push(includeNewLine(cError_Password_Length));
                    tag.find(cfrmLogIn_Password).addClass(cCssInputValidateError);
                }
            }

            if (this.error.length > 0) {
                multiLine(tag.find('.panel-messsage-error .field-validation-error span'), this.error);
                tag.find('.panel-messsage-error').show();
            }

            break;
        case cfrmSetUpDomain:
            tag = this.parent;

            if (tag.find(cfrmSetUpDomain_DomainId) === undefined || tag.find(cfrmSetUpDomain_DomainId).val().length == 0) {
                this.error.push(includeNewLine(cError_DomainId_Empty));
                tag.find(cfrmSetUpDomain_DomainId).addClass(cCssInputValidateError);
            }

            //Added by SMILEDINING-SA22-0008#10
            if (tag.find(cfrmSetUpDomain_DomainId).val().length > 7) {
                this.error.push(includeNewLine(cError_DomainId_Length));
                tag.find(cfrmSetUpDomain_DomainId).addClass(cCssInputValidateError);
            }
            //End Added by SMILEDINING-SA22-0008#10

            if (tag.find(cfrmSetUpDomain_DomainName) === undefined || tag.find(cfrmSetUpDomain_DomainName).val().length == 0) {
                this.error.push(includeNewLine(cError_DomainName_Empty));
                tag.find(cfrmSetUpDomain_DomainName).addClass(cCssInputValidateError);
            }

            if (tag.find(cfrmSetUpDomain_DomainValue) === undefined || tag.find(cfrmSetUpDomain_DomainValue).val().length == 0) {
                this.error.push(includeNewLine(cError_DomainValue_Empty));
                tag.find(cfrmSetUpDomain_DomainValue).addClass(cCssInputValidateError);
            }

            if (tag.find(cfrmSetUpDomain_ShopNumber) === undefined || tag.find(cfrmSetUpDomain_ShopNumber).val().length == 0) {
                this.error.push(includeNewLine(cError_ShopNumber_Empty));
                tag.find(cfrmSetUpDomain_ShopNumber).addClass(cCssInputValidateError);
            }

            if (tag.find(cfrmSetUpDomain_ShopName) === undefined || tag.find(cfrmSetUpDomain_ShopName).val().length == 0) {
                this.error.push(includeNewLine(cError_ShopName_Empty));
                tag.find(cfrmSetUpDomain_ShopName).addClass(cCssInputValidateError);
            }

            if (tag.find(cfrmSetUpDomain_ShopAddress) === undefined || tag.find(cfrmSetUpDomain_ShopAddress).val().length == 0) {
                this.error.push(includeNewLine(cError_ShopAddress_Empty));
                tag.find(cfrmSetUpDomain_ShopAddress).addClass(cCssInputValidateError);
            }

            if (tag.find(cfrmSetUpDomain_ShopPostal) === undefined || tag.find(cfrmSetUpDomain_ShopPostal).val().length == 0) {
                this.error.push(includeNewLine(cError_ShopPostal_Empty));
                tag.find(cfrmSetUpDomain_ShopPostal).addClass(cCssInputValidateError);
            }

            //Added by WEB-SA24-0003
            if (tag.find(cfrmSetUpDomain_ShopCity) === undefined || tag.find(cfrmSetUpDomain_ShopCity).val().length == 0) {
                if (tag.find(cfrmSetUpDomain_ShopSubCity) !== undefined && tag.find(cfrmSetUpDomain_ShopSubCity).val().length > 0) {
                    const subCity = tag.find(cfrmSetUpDomain_ShopSubCity).val();
                    vmViewIndex.setup.dataModal.shopCity(subCity);
                    tag.find(cfrmSetUpDomain_ShopCity).val(subCity)
                } else if (tag.find(cfrmSetUpDomain_ShopAdministrativeAreaLevel3) !== undefined && tag.find(cfrmSetUpDomain_ShopAdministrativeAreaLevel3).val().length > 0) {
                    const administrativeAreaLevel3 = tag.find(cfrmSetUpDomain_ShopAdministrativeAreaLevel3).val();
                    vmViewIndex.setup.dataModal.shopCity(administrativeAreaLevel3);
                    tag.find(cfrmSetUpDomain_ShopCity).val(administrativeAreaLevel3)
                }
            }
            //End Added by WEB-SA24-0003

            //Added by WEB-SA24-0024
            //if (vmViewIndex.setup.dataModal.webDispatch() == null || vmViewIndex.setup.dataModal.dispatchType() != cDispatchType_DoorDash || !vmViewIndex.setup.dataModal.active()) { //Modified and End by WEB-SA24-0024#3
            if (tag.find(cfrmSetUpDomain_ShopCity) === undefined || tag.find(cfrmSetUpDomain_ShopCity).val().length == 0) {
                this.error.push(includeNewLine(cError_ShopCity_Empty));
                tag.find(cfrmSetUpDomain_ShopCity).addClass(cCssInputValidateError);
            }
            if (tag.find(cfrmSetUpDomain_ShopState) === undefined || tag.find(cfrmSetUpDomain_ShopState).val().length == 0) {
                this.error.push(includeNewLine(cError_ShopState_Empty));
                tag.find(cfrmSetUpDomain_ShopState).addClass(cCssInputValidateError);
            }
            //}  //Modified and End by WEB-SA24-0024#3
            //End Added by WEB-SA24-0024
            
            //Modified by WEB-SA24-0024
            ////Added by WEB-SA23-0050
            //if (tag.find(cfrmSetUpDomain_ShopCity).val().length == 0 || (tag.find(cfrmSetUpDomain_ShopState).val().length == 0)) {
            //    this.error.push(includeNewLine(cError_ShopAddress_Fail));
            //    tag.find(cfrmSetUpDomain_ShopAddress).addClass(cCssInputValidateError);
            //}
            ////End Added by WEB-SA23-0050
            //End Modified by WEB-SA24-0024

            if (tag.find(cfrmSetUpDomain_ShopPhone) === undefined || tag.find(cfrmSetUpDomain_ShopPhone).val().length == 0) {
                this.error.push(includeNewLine(cError_ShopPhone_Empty));
                tag.find(cfrmSetUpDomain_ShopPhone).addClass(cCssInputValidateError);
            }

            if (tag.find(cfrmSetUpDomain_ShopEmail) === undefined || tag.find(cfrmSetUpDomain_ShopEmail).val().length == 0) {
                this.error.push(includeNewLine(cError_ShopEmail_Empty));
                tag.find(cfrmSetUpDomain_ShopEmail).addClass(cCssInputValidateError);
            }
            //Modified by SMILEDINING-SA20-0014
            //else {
            //    if (!validateEmail(tag.find(cfrmSetUpDomain_ShopEmail).val())) {
            //        this.error.push(includeNewLine(cError_Email_Validate));
            //        tag.find(cfrmSetUpDomain_ShopEmail).addClass(cCssInputValidateError);
            //    }
            //}
            //End Modified by SMILEDINING-SA20-0014
            //Added by SMILEDINING-SA20-0014
            if (tag.find(cfrmSetUpDomain_ProductId).val().indexOf(products.cSmileEgiftCard) != -1) {
                if (tag.find(cfrmSetUpDomain_ShopEmailGiftCard) === undefined || tag.find(cfrmSetUpDomain_ShopEmailGiftCard).val().length == 0) {
                    this.error.push(includeNewLine(cError_ShopEmailGiftCard_Empty));
                    tag.find(cfrmSetUpDomain_ShopEmailGiftCard).addClass(cCssInputValidateError);
                }
            }
            //End Added by SMILEDINING-SA20-0014
            if (tag.find(cfrmSetUpDomain_Latitude) === undefined || tag.find(cfrmSetUpDomain_Latitude).val().length == 0) {
                this.error.push(includeNewLine(cError_Latitude_Empty));
                tag.find(cfrmSetUpDomain_Latitude).addClass(cCssInputValidateError);
            }

            if (tag.find(cfrmSetUpDomain_Longitude) === undefined || tag.find(cfrmSetUpDomain_Longitude).val().length == 0) {
                this.error.push(includeNewLine(cError_Longitude_Empty));
                tag.find(cfrmSetUpDomain_Longitude).addClass(cCssInputValidateError);
            }

            if (tag.find(cfrmSetUpDomain_TimeStartPickup) === undefined || tag.find(cfrmSetUpDomain_TimeStartPickup).val().length == 0) {
                this.error.push(includeNewLine(cError_TimeStartPickup_Empty));
                tag.find(cfrmSetUpDomain_TimeStartPickup).addClass(cCssInputValidateError);
            }

            if (tag.find(cfrmSetUpDomain_TimeEndPickup) === undefined || tag.find(cfrmSetUpDomain_TimeEndPickup).val().length == 0) {
                this.error.push(includeNewLine(cError_TimeEndPickup_Empty));
                tag.find(cfrmSetUpDomain_TimeEndPickup).addClass(cCssInputValidateError);
            }

            if (tag.find(cfrmSetUpDomain_TimeStartDelivery) === undefined || tag.find(cfrmSetUpDomain_TimeStartDelivery).val().length == 0) {
                this.error.push(includeNewLine(cError_TimeStartDelivery_Empty));
                tag.find(cfrmSetUpDomain_TimeStartDelivery).addClass(cCssInputValidateError);
            }

            if (tag.find(cfrmSetUpDomain_TimeEndDelivery) === undefined || tag.find(cfrmSetUpDomain_TimeEndDelivery).val().length == 0) {
                this.error.push(includeNewLine(cError_TimeEndDelivery_Empty));
                tag.find(cfrmSetUpDomain_TimeEndDelivery).addClass(cCssInputValidateError);
            }

            //Added by SMILEDINING-SA21-0012
            if ((tag.find(cfrmSetUpDomain_TimeStartPickup) !== undefined && tag.find(cfrmSetUpDomain_TimeStartPickup).val().length != 0)
                && (tag.find(cfrmSetUpDomain_TimeEndPickup) !== undefined && tag.find(cfrmSetUpDomain_TimeEndPickup).val().length != 0)) {
                if (parseInt(tag.find(cfrmSetUpDomain_TimeStartPickup).val()) > parseInt(tag.find(cfrmSetUpDomain_TimeEndPickup).val())) {
                    this.error.push(includeNewLine(cError_TimeEndPickup_lessthan));
                }
            }

            if ((tag.find(cfrmSetUpDomain_TimeStartDelivery) !== undefined && tag.find(cfrmSetUpDomain_TimeStartDelivery).val().length != 0)
                && (tag.find(cfrmSetUpDomain_TimeEndDelivery) !== undefined && tag.find(cfrmSetUpDomain_TimeEndDelivery).val().length != 0)) {
                if (parseInt(tag.find(cfrmSetUpDomain_TimeStartDelivery).val()) > parseInt(tag.find(cfrmSetUpDomain_TimeEndDelivery).val())) {
                    this.error.push(includeNewLine(cError_TimeEndDelivery_lessthan));
                }
            }
            //End Added by SMILEDINING-SA21-0012

            if (tag.find(cfrmSetUpDomain_ServiceFee) === undefined || tag.find(cfrmSetUpDomain_ServiceFee).val().length == 0) {
                this.error.push(includeNewLine(cError_ServiceFee_Empty));
                tag.find(cfrmSetUpDomain_ServiceFee).addClass(cCssInputValidateError);
            }

            if (tag.find(cfrmSetUpDomain_DeliveryChargeTax) === undefined || tag.find(cfrmSetUpDomain_DeliveryChargeTax).val().length == 0) {
                this.error.push(includeNewLine(cError_DeliveryChargeTax_Empty));
                tag.find(cfrmSetUpDomain_DeliveryChargeTax).addClass(cCssInputValidateError);
            }

            //Modified by SMILEDINING-SA21-0080#2
            //if (tag.find(cfrmSetUpDomain_CreditCardFee) === undefined || tag.find(cfrmSetUpDomain_CreditCardFee).val().length == 0) {
            //    this.error.push(includeNewLine(cError_CreditCardFee_Empty));
            //    tag.find(cfrmSetUpDomain_CreditCardFee).addClass(cCssInputValidateError);
            //}
            //End Modified by SMILEDINING-SA21-0080#2

            //Added by SMILEDINING-SA21-0080#2
            //Modified by SMILEDINING-SA22-0032
            //if (tag.find(cfrmSetUpDomain_CreditCardFee) === undefined || tag.find(cfrmSetUpDomain_CreditCardFee).val().length == 0) {
            //    this.error.push(includeNewLine(cError_CreditCardFee_Empty));
            //    tag.find(cfrmSetUpDomain_CreditCardFee).addClass(cCssInputValidateError);
            //} else {
            //    if (parseFloat(tag.find(cfrmSetUpDomain_CreditCardFee).val()) < 0 || parseFloat(tag.find(cfrmSetUpDomain_CreditCardFee).val()) > 100) {
            //        this.error.push(includeNewLine(cError_CreditCardFee_Data));
            //    }
            //}

            //if (tag.find(cfrmSetUpDomain_MarketingServiceFee) === undefined || tag.find(cfrmSetUpDomain_MarketingServiceFee).val().length == 0) {
            //    this.error.push(includeNewLine(cError_MarketingFee_Empty));
            //    tag.find(cfrmSetUpDomain_MarketingServiceFee).addClass(cCssInputValidateError);
            //} else {
            //    if (parseFloat(tag.find(cfrmSetUpDomain_MarketingServiceFee).val()) < 0 || parseFloat(tag.find(cfrmSetUpDomain_MarketingServiceFee).val()) > 100) {
            //        this.error.push(includeNewLine(cError_MarketingFee_Data));
            //    }
            //}
            //End Modified by SMILEDINING-SA22-0032
            //End Added by SMILEDINING-SA21-0080#2

            //Added by SMILEDINING-SA22-0032
            if (tag.find(cfrmSetUpDomain_ServiceFeePercent) === undefined || tag.find(cfrmSetUpDomain_ServiceFeePercent).val().length == 0) {
                this.error.push(includeNewLine(cError_ServiceFeePercent_Empty));
                tag.find(cfrmSetUpDomain_ServiceFeePercent).addClass(cCssInputValidateError);
            } else {
                if (parseFloat(tag.find(cfrmSetUpDomain_ServiceFeePercent).val()) < 0 || parseFloat(tag.find(cfrmSetUpDomain_ServiceFeePercent).val()) > 100) {
                    this.error.push(includeNewLine(cError_ServiceFeePercent_Data));
                    tag.find(cfrmSetUpDomain_ServiceFeePercent).addClass(cCssInputValidateError);
                }
            }
            //End Added by SMILEDINING-SA22-0032

            if (tag.find(cfrmSetUpDomain_MinimumOrder) === undefined || tag.find(cfrmSetUpDomain_MinimumOrder).val().length == 0) {
                this.error.push(includeNewLine(cError_MinimumOrder));
                tag.find(cfrmSetUpDomain_MinimumOrder).addClass(cCssInputValidateError);
            }

            //Added by SMILEDINING-SA19-0018
            if (tag.find(cfrmShopCloseStartDate).val().length == 0 && tag.find(cfrmShopCloseEndDate).val().length != 0)
                this.error.push(includeNewLine(cError_ShopCloseDate_NotEqual));
            else if (tag.find(cfrmShopCloseStartDate).val().length != 0 && tag.find(cfrmShopCloseEndDate).val().length == 0)
                this.error.push(includeNewLine(cError_ShopCloseDate_NotEqual));
            if (moment(tag.find(cfrmShopCloseStartDate).val()).isAfter(tag.find(cfrmShopCloseEndDate).val()))
                this.error.push(includeNewLine(cError_ShopCloseDate_Error));
            //End Added by SMILEDINING-SA19-0018

            //Added by SMILEDINING-SA20-0031
            if (tag.find(cfrmShopCloseStartDateContactless).val().length == 0 && tag.find(cfrmShopCloseEndDateContactless).val().length != 0)
                this.error.push(includeNewLine(cError_ShopCloseDate_NotEqual));
            else if (tag.find(cfrmShopCloseStartDateContactless).val().length != 0 && tag.find(cfrmShopCloseEndDateContactless).val().length == 0)
                this.error.push(includeNewLine(cError_ShopCloseDate_NotEqual));
            if (moment(tag.find(cfrmShopCloseStartDateContactless).val()).isAfter(tag.find(cfrmShopCloseEndDateContactless).val()))
                this.error.push(includeNewLine(cError_ShopCloseDate_Error));
            //End Added by SMILEDINING-SA20-0031

            //Added by SMILEDINING-SA20-0038#1
            if (tag.find(cfrmCustom_Day) === undefined || tag.find(cfrmCustom_Day).val().length == 0) {
                this.error.push(includeNewLine(cError_Customday_Empty));
                tag.find(cfrmCustom_Day).addClass(cCssInputValidateError);
            } else if (parseInt(tag.find(cfrmCustom_Day).val()) < 0) {
                this.error.push(includeNewLine(cError_Customday_lessthan));
                tag.find(cfrmCustom_Day).addClass(cCssInputValidateError);
            } else if (parseInt(tag.find(cfrmCustom_Day).val()) > 366) {
                this.error.push(includeNewLine(cError_Customday_morethan));
                tag.find(cfrmCustom_Day).addClass(cCssInputValidateError);
            }

            if (tag.find(cfrmCustom_Hours) === undefined || tag.find(cfrmCustom_Hours).val().length == 0) {
                this.error.push(includeNewLine(cError_Customhour_Empty));
                tag.find(cfrmCustom_Hours).addClass(cCssInputValidateError);
            } else if (parseInt(tag.find(cfrmCustom_Hours).val()) < 0) {
                this.error.push(includeNewLine(cError_Customhour_lessthan));
                tag.find(cfrmCustom_Hours).addClass(cCssInputValidateError);
            } else if (parseInt(tag.find(cfrmCustom_Hours).val()) > 23) {
                this.error.push(includeNewLine(cError_Customhour_morethan));
                tag.find(cfrmCustom_Hours).addClass(cCssInputValidateError);
            }
            //End Added by SMILEDINING-SA20-0038#1
            //Added by SMILEDINING-SA22-0022
            if (vmViewIndex.setup.dataModal.webDispatch() != null) {
                if (vmViewIndex.setup.dataModal.dispatchType() == cDispatchType_None || isEmpty(vmViewIndex.setup.dataModal.dispatchType())) {
                    this.error.push(includeNewLine(cError_DispatchType_Empty));
                }
                if (vmViewIndex.setup.dataModal.dispatchType() == cDispatchType_Deliverect && isEmpty(vmViewIndex.setup.dataModal.listDispatchSelect())) {
                    this.error.push(includeNewLine(cError_DispatchName_Empty));
                }
            }
            //End Added by SMILEDINING-SA22-0022
            //Added by WEB-SA22-0057#5
            if (vmViewIndex.setup.dataModal.isMarketingKey()) {
                if (tag.find(cfrmSetUpDomain_LocalForYou_Key) === undefined || tag.find(cfrmSetUpDomain_LocalForYou_Key).val().length == 0) {
                    this.error.push(includeNewLine(cError_LocalForYou_Key_Empty));
                    tag.find(cfrmSetUpDomain_LocalForYou_Key).addClass(cCssInputValidateError);
                }
            }
            //End Added by WEB-SA22-0057#5
            //Added by WEB-SA23-0020
            var errorAdditionalCharge = [];
            ko.utils.arrayForEach(vmViewIndex.setup.dataModal.additionalChargeList(), function (item, index) {
                if (item.additionalChargeTypeId() == 0) {
                    errorAdditionalCharge.push(includeNewLine(cError_AdditionalCharge_Name_Empty + ' #' + (index + 1)));
                }
            });
            if (errorAdditionalCharge.length > 0) {
                this.error = this.error.concat(errorAdditionalCharge);
            }
            //End Added by WEB-SA23-0020

            if (this.error.length > 0) {
                multiLine(tag.find('.panel-messsage-error .field-validation-error span'), this.error);
                tag.find('.panel-messsage-error').show();
            }

            break;
        case cfrmOwner:
            tag = this.parent;
            var hasPasswordValue = false;
            var hasConfirmPasswordValue = false;

            if (tag.find(cfrmOwner_OwnerId) === undefined || tag.find(cfrmOwner_OwnerId).val().length == 0) {
                this.error.push(includeNewLine(cError_OwnerId_Empty));
                tag.find(cfrmOwner_OwnerId).addClass(cCssInputValidateError);
            }

            if (tag.find(cfrmOwner_FirstName) === undefined || tag.find(cfrmOwner_FirstName).val().length == 0) {
                this.error.push(includeNewLine(cError_FirstName_Empty));
                tag.find(cfrmOwner_FirstName).addClass(cCssInputValidateError);
            }

            if (tag.find(cfrmOwner_LastName) === undefined || tag.find(cfrmOwner_LastName).val().length == 0) {
                this.error.push(includeNewLine(cError_LasatName_Empty));
                tag.find(cfrmOwner_LastName).addClass(cCssInputValidateError);
            }

            if (tag.find(cfrmOwner_Phone) === undefined || tag.find(cfrmOwner_Phone).val().length == 0) {
                this.error.push(includeNewLine(cError_Phone_Empty));
                tag.find(cfrmOwner_Phone).addClass(cCssInputValidateError);
            }

            if (tag.find(cfrmOwner_Email) === undefined || tag.find(cfrmOwner_Email).val().length == 0) {
                this.error.push(includeNewLine(cError_Email_Empty));
                tag.find(cfrmOwner_Email).addClass(cCssInputValidateError);
            } else {
                if (!validateEmail(tag.find(cfrmOwner_Email).val())) {
                    this.error.push(includeNewLine(cError_Email_Validate));
                    tag.find(cfrmOwner_Email).addClass(cCssInputValidateError);
                }
            }

            if (vmViewIndex.owner.dataModal.showPassword()) {
                if (tag.find(cfrmOwner_Password) === undefined || tag.find(cfrmOwner_Password).val().length == 0) {
                    this.error.push(includeNewLine(cError_Password_Empty));
                    tag.find(cfrmOwner_Password).addClass(cCssInputValidateError);
                } else {
                    if (tag.find(cfrmOwner_Password).val().length < 6) {
                        this.error.push(includeNewLine(cError_Password_Length));
                        tag.find(cfrmOwner_Password).addClass(cCssInputValidateError);
                    } else {
                        hasPasswordValue = true;
                    }
                }

                if (tag.find(cfrmOwner_ConfirmPassword) === undefined || tag.find(cfrmOwner_ConfirmPassword).val().length == 0) {
                    this.error.push(includeNewLine(cError_ConfirmPassword_Empty));
                    tag.find(cfrmOwner_ConfirmPassword).addClass(cCssInputValidateError);
                } else {
                    if (tag.find(cfrmOwner_ConfirmPassword).val().length < 6) {
                        this.error.push(includeNewLine(cError_ConfirmPassword_Length));
                        tag.find(cfrmOwner_ConfirmPassword).addClass(cCssInputValidateError);
                    } else {
                        hasConfirmPasswordValue = true;
                    }
                }

                if (hasPasswordValue && hasConfirmPasswordValue) {
                    if (tag.find(cfrmOwner_Password).val() != tag.find(cfrmOwner_ConfirmPassword).val()) {
                        this.error.push(includeNewLine(cError_Password_NotMatch));
                        tag.find(cfrmOwner_Password).addClass(cCssInputValidateError);
                        tag.find(cfrmOwner_ConfirmPassword).addClass(cCssInputValidateError);
                    }
                }
            }
            
            if (this.error.length > 0) {
                multiLine(tag.find('.panel-messsage-error .field-validation-error span'), this.error);
                tag.find('.panel-messsage-error').show();
            }

            break;
        case cfrmChangePassword:
            tag = this.parent;
            var hasPasswordValue = false;
            var hasConfirmPasswordValue = false;

            if (tag.find(cfrmChangePassword_FirstName) === undefined || tag.find(cfrmChangePassword_FirstName).val().length == 0) {
                this.error.push(includeNewLine(cError_FirstName_Empty));
                tag.find(cfrmChangePassword_FirstName).addClass(cCssInputValidateError);
            }

            if (tag.find(cfrmChangePassword_LastName) === undefined || tag.find(cfrmChangePassword_LastName).val().length == 0) {
                this.error.push(includeNewLine(cError_LasatName_Empty));
                tag.find(cfrmChangePassword_LastName).addClass(cCssInputValidateError);
            }

            if (vmViewIndex.setting.dataModalChangePassword.showPassword()) {

                if (tag.find(cfrmChangePassword_CurrentPassword) === undefined || tag.find(cfrmChangePassword_CurrentPassword).val().length == 0) {
                    this.error.push(includeNewLine(cError_Password_Empty));
                    tag.find(cfrmChangePassword_CurrentPassword).addClass(cCssInputValidateError);
                } else {
                    if (tag.find(cfrmChangePassword_CurrentPassword).val().length < 6) {
                        this.error.push(includeNewLine(cError_Password_Length));
                        tag.find(cfrmChangePassword_CurrentPassword).addClass(cCssInputValidateError);
                    }
                }
                
                if (tag.find(cfrmChangePassword_NewPassword) === undefined || tag.find(cfrmChangePassword_NewPassword).val().length == 0) {               
                    this.error.push(includeNewLine(cError_Password_Empty));
                    tag.find(cfrmChangePassword_NewPassword).addClass(cCssInputValidateError);
                } else {
                    if 
                        (tag.find(cfrmChangePassword_NewPassword).val().length < 6) {
                        //this.error.push(cfrmChangePassword_NewPassword(cError_Password_Length)); //Modified and End by WEB-SA22-0043
                        this.error.push(includeNewLine(cError_Password_Length)); // Added and End by WEB-SA22-0043
                        tag.find(cfrmChangePassword_NewPassword).addClass(cCssInputValidateError);
                    } 
                    else {
                        hasPasswordValue = true;
                    }
                }

                if (tag.find(cfrmChangePassword_ConfirmPassword) === undefined || tag.find(cfrmChangePassword_ConfirmPassword).val().length == 0) {
                    this.error.push(includeNewLine(cError_ConfirmPassword_Empty));
                    tag.find(cfrmChangePassword_ConfirmPassword).addClass(cCssInputValidateError);
                } else {
                    if 
                        (tag.find(cfrmChangePassword_ConfirmPassword).val().length < 6) {
                        this.error.push(includeNewLine(cError_ConfirmPassword_Length));
                        tag.find(cfrmChangePassword_ConfirmPassword).addClass(cCssInputValidateError);
                    } 
                    else {
                        hasConfirmPasswordValue = true;
                    }
                }
                
                if (hasPasswordValue && hasConfirmPasswordValue) {
                    if (tag.find(cfrmChangePassword_NewPassword).val() != tag.find(cfrmChangePassword_ConfirmPassword).val()) {
                        this.error.push(includeNewLine(cError_Password_NotMatch));
                        tag.find(cfrmChangePassword_NewPassword).addClass(cCssInputValidateError);
                        tag.find(cfrmChangePassword_ConfirmPassword).addClass(cCssInputValidateError);
                    }
                }
            }

            if (this.error.length > 0) {
                multiLine(tag.find('.panel-messsage-error .field-validation-error span'), this.error);
                tag.find('.panel-messsage-error').show();
            }

            break;
        case cfrmCreateAccount:
            tag = this.parent;

            if (tag.find(cfrmCreateAccount_FirstName) === undefined || tag.find(cfrmCreateAccount_FirstName).val().length == 0) {
                this.error.push(includeNewLine(cError_FirstName_Empty));
                tag.find(cfrmCreateAccount_FirstName).addClass(cCssInputValidateError);
            }

            if (tag.find(cfrmCreateAccount_LastName) === undefined || tag.find(cfrmCreateAccount_LastName).val().length == 0) {
                this.error.push(includeNewLine(cError_LasatName_Empty));
                tag.find(cfrmCreateAccount_LastName).addClass(cCssInputValidateError);
            }

            if (tag.find(cfrmCreateAccount_Email) === undefined || tag.find(cfrmCreateAccount_Email).val().length == 0) {
                this.error.push(includeNewLine(cError_Email_Empty));
                tag.find(cfrmCreateAccount_Email).addClass(cCssInputValidateError);
            } else {
                if (!validateEmail(tag.find(cfrmCreateAccount_Email).val())) {
                    this.error.push(includeNewLine(cError_Email_Validate));
                    tag.find(cfrmCreateAccount_Email).addClass(cCssInputValidateError);
                }
            }

            //Added by WEB-SA24-0029
            if (isEmpty(vmViewIndex.memberInvite.roleIds())) {
                this.error.push(includeNewLine(cError_Personnel_Roles_Empty));
            }
            //End Added by WEB-SA24-0029

            //Modified by WEB-SA24-0029
            //if (tag.find(cfrmCreateAccount_SecurityCode) === undefined || tag.find(cfrmCreateAccount_SecurityCode).val().length == 0) {
            //    this.error.push(includeNewLine(cError_SecurityCode_Empty));
            //    tag.find(cfrmCreateAccount_SecurityCode).addClass(cCssInputValidateError);
            //}
            //End Modified by WEB-SA24-0029

            if (tag.find(cfrmCreateAccount_NewPassword) === undefined || tag.find(cfrmCreateAccount_NewPassword).val().length == 0) {
                this.error.push(includeNewLine(cError_Password_Empty));
                tag.find(cfrmCreateAccount_NewPassword).addClass(cCssInputValidateError);
            } else {
                if (tag.find(cfrmCreateAccount_NewPassword).val().length < 6) {
                    //this.error.push(cfrmCreateAccount_NewPassword(cError_Password_Length)); //Modified and End by WEB-SA24-0029#2
                    this.error.push(includeNewLine(cError_Password_Length)); //Added and End by WEB-SA24-0029#2
                    tag.find(cfrmCreateAccount_NewPassword).addClass(cCssInputValidateError);
                }
            }

            if (tag.find(cfrmCreateAccount_ConfirmPassword) === undefined || tag.find(cfrmCreateAccount_ConfirmPassword).val().length == 0) {
                this.error.push(includeNewLine(cError_ConfirmPassword_Empty));
                tag.find(cfrmCreateAccount_ConfirmPassword).addClass(cCssInputValidateError);
            } else {
                if (tag.find(cfrmCreateAccount_ConfirmPassword).val().length < 6) {
                    this.error.push(includeNewLine(cError_ConfirmPassword_Length));
                    tag.find(cfrmCreateAccount_ConfirmPassword).addClass(cCssInputValidateError);
                }
            }

            if (tag.find(cfrmCreateAccount_NewPassword).val() != tag.find(cfrmCreateAccount_ConfirmPassword).val()) {
                this.error.push(includeNewLine(cError_Password_NotMatch));
                tag.find(cfrmCreateAccount_NewPassword).addClass(cCssInputValidateError);
                tag.find(cfrmCreateAccount_ConfirmPassword).addClass(cCssInputValidateError);
            }
                
            if (this.error.length > 0) {
                multiLine(tag.find('.panel-messsage-error .field-validation-error span'), this.error);
                tag.find('.panel-messsage-error').show();
            }

            break;
            //Added by SMILEDINING-SA18-0011
        case cfrmWrRoleMenuMap:
            tag = this.parent;

            var verify = false;

            if (vmViewIndex.webreport.dataRoleMenuModal.customerId() == null) {
                vmViewIndex.webreport.dataRoleMenuModal.dxLookupCustomerValid(false);
                vmViewIndex.webreport.dataRoleMenuModal.dxLookupCustomerValidError({
                    message: cError_Restaurant_Empty
                });
                this.error.push(includeNewLine(cError_Restaurant_Empty));
            } else {
                vmViewIndex.webreport.dataRoleMenuModal.dxLookupCustomerValid(true);
            }

            ko.utils.arrayForEach(vmViewIndex.webreport.dataRoleMenuModal.roleMenuMap(), function (item) {
                if (item.arrMenu().length <= 0) verify = verify || false;
                else verify = verify || true;
            });

            if (!verify && vmViewIndex.webreport.dataRoleMenuModal.action() == cStatusAdd) this.error.push(includeNewLine(cError_Menu_Empty));

            if (this.error.length > 0) {
                multiLine(tag.find('.panel-messsage-error .field-validation-error span'), this.error);
                tag.find('.panel-messsage-error').show();
            }

            break;

        case cfrmWrUser:

            tag = this.parent;

            if (tag.find(cfrmWrUser_FirstName) === undefined || tag.find(cfrmWrUser_FirstName).val().length == 0) {
                this.error.push(includeNewLine(cError_FirstName_Empty));
                tag.find(cfrmWrUser_FirstName).addClass(cCssInputValidateError);
            }

            if (tag.find(cfrmWrUser_LastName) === undefined || tag.find(cfrmWrUser_LastName).val().length == 0) {
                this.error.push(includeNewLine(cError_LasatName_Empty));
                tag.find(cfrmWrUser_LastName).addClass(cCssInputValidateError);
            }

            if (tag.find(cfrmWrUser_Email) === undefined || tag.find(cfrmWrUser_Email).val().length == 0) {
                this.error.push(includeNewLine(cError_Email_Empty));
                tag.find(cfrmWrUser_Email).addClass(cCssInputValidateError);
            } else {
                if (!validateEmail(tag.find(cfrmWrUser_Email).val())) {
                    this.error.push(includeNewLine(cError_Email_Validate));
                    tag.find(cfrmWrUser_Email).addClass(cCssInputValidateError);
                }
            }

            if (vmViewIndex.webreport.dataUserModal.action() == cStatusAdd) {
                var filter = ko.utils.arrayFilter(vmViewIndex.webreport.dataUser(), function (item) {
                    return _.lowerCase(item.email()) == _.lowerCase(vmViewIndex.webreport.dataUserModal.email());
                });

                if (!isEmpty(filter)) {
                    this.error.push(includeNewLine(cError_Email_ALREADY));
                    tag.find(cfrmWrUser_Email).addClass(cCssInputValidateError);
                }
            } else {
                var filter = ko.utils.arrayFilter(vmViewIndex.webreport.dataUser(), function (item) {
                    return _.lowerCase(item.email()) == _.lowerCase(tag.find(cfrmWrUser_Email).val()) && item.userId() != vmViewIndex.webreport.dataUserModal.userId();
                });

                if (!isEmpty(filter)) {
                    this.error.push(includeNewLine(cError_Email_ALREADY));
                    tag.find(cfrmWrUser_Email).addClass(cCssInputValidateError);
                }
            }

            if (this.error.length > 0) {
                multiLine(tag.find('.panel-messsage-error .field-validation-error span'), this.error);
                tag.find('.panel-messsage-error').show();
            }

            break;
        case cfrmWrUserRoleMap:

            tag = this.parent;

            if (vmViewIndex.webreport.dataUserRoleMapModal.customerId() == null) {
                vmViewIndex.webreport.dataUserRoleMapModal.dxLookupCustomerValid(false);
                vmViewIndex.webreport.dataUserRoleMapModal.dxLookupCustomerValidError({
                    message: cError_Restaurant_Empty
                });
                this.error.push(includeNewLine(cError_Restaurant_Empty));
            } else {
                vmViewIndex.webreport.dataUserRoleMapModal.dxLookupCustomerValid(true);
            }

            if (vmViewIndex.webreport.dataUserRoleMapModal.userId() == null) {
                vmViewIndex.webreport.dataUserRoleMapModal.dxLookupUserValid(false);
                vmViewIndex.webreport.dataUserRoleMapModal.dxLookupUserValidError({
                    message: cError_User_Empty
                });
                this.error.push(includeNewLine(cError_User_Empty));
            } else {
                vmViewIndex.webreport.dataUserRoleMapModal.dxLookupUserValid(true);
            }

            if (vmViewIndex.webreport.dataUserRoleMapModal.roleId() == null) {
                vmViewIndex.webreport.dataUserRoleMapModal.dxLookupRoleValid(false);
                vmViewIndex.webreport.dataUserRoleMapModal.dxLookupRoleValidError({
                    message: cError_Role_Empty
                });
                this.error.push(includeNewLine(cError_Role_Empty));
            } else {
                vmViewIndex.webreport.dataUserRoleMapModal.dxLookupRoleValid(true);
            }

            if (vmViewIndex.webreport.dataUserRoleMapModal.action() == cStatusAdd) {

                var filter = ko.utils.arrayFilter(vmViewIndex.webreport.dataUserRoleMap(), function (item) {
                    return item.customerId() == vmViewIndex.webreport.dataUserRoleMapModal.customerId() &&
                           item.userId() == vmViewIndex.webreport.dataUserRoleMapModal.userId() &&
                           item.roleId() == vmViewIndex.webreport.dataUserRoleMapModal.roleId()

                });

                if (!isEmpty(filter)) {
                    this.error.push(includeNewLine(cError_User_In_Role_ALREADY));
                    tag.find(cfrmWrUser_Email).addClass(cCssInputValidateError);
                }

            } else {
                var filter = ko.utils.arrayFilter(vmViewIndex.webreport.dataUserRoleMap(), function (item) {
                    return item.customerId() == vmViewIndex.webreport.dataUserRoleMapModal.customerId() &&
                           item.userId() == vmViewIndex.webreport.dataUserRoleMapModal.userId() &&
                           item.roleId() == vmViewIndex.webreport.dataUserRoleMapModal.roleId() &&
                           item.userRoleMapId() != vmViewIndex.webreport.dataUserRoleMapModal.userRoleMapId()
                });

                if (!isEmpty(filter)) {
                    this.error.push(includeNewLine(cError_User_In_Role_ALREADY));
                    tag.find(cfrmWrUser_Email).addClass(cCssInputValidateError);
                }
            }

            if (this.error.length > 0) {
                multiLine(tag.find('.panel-messsage-error .field-validation-error span'), this.error);
                tag.find('.panel-messsage-error').show();
            }
            break;
            //End Added by SMILEDINING-SA18-0011
            //Added by SMILEDINING-SA20-0031#4
        case cfrmShopClose:
            tag = this.parent;
            if (tag.find(cfrmShopClose_Reason) === undefined || tag.find(cfrmShopClose_Reason).val().length == 0)
                this.error.push(includeNewLine(cError_ShopCloseReason_Empty));
            break;
            //End Added by SMILEDINING-SA20-0031#4
        //Added by SMILEDINING-SA21-0063#1
        case cfrmLogSelectStore:
            tag = this.parent;
            if (tag.find(cfrmLogSelectStore_DomainId) === undefined || tag.find(cfrmLogSelectStore_DomainId).val().length == 0) {
                this.error.push(includeNewLine(cError_LogDomainId_Empty));
                tag.find(cfrmLogSelectStore_DomainId).addClass(cCssInputValidateError);
            }
            if (tag.find(cfrmLogSelectStore_TimeFilter) === undefined || tag.find(cfrmLogSelectStore_TimeFilter).val().length == 0) {
                this.error.push(includeNewLine(cError_LogTimeMenu_Empty));
                tag.find(cfrmLogSelectStore_TimeFilter).addClass(cCssInputValidateError);
            }
            break;
        //End Added by SMILEDINING-SA21-0063#1
        //Added by SMILEDINING-SA22-0028
        case cfrmMonitorSelectDate:
            if (isEmpty(vmViewIndex.monitor.domainId())) this.error.push(includeNewLine(cError_Restaurant_Empty));
            //Added by SMILEDINING-SA22-0028#1
            //var date = new Date(vmViewIndex.monitor.selectDate()); //Modified and End by WEB-SA23-0025#1
            var date = new Date(moment(vmViewIndex.monitor.selectDate(), 'L').format('L')); //Added and End by WEB-SA23-0025#1
            if (!(date instanceof Date && !isNaN(date))) this.error.push(includeNewLine(cError_Date_Empty));
            //End Added by SMILEDINING-SA22-0028#1
            break;
        //End Added by SMILEDINING-SA22-0028
        //Added by WEB-SA23-0013
        case cfrmSummaryGetData:
            if (vmViewIndex.summary.isCurrentMonth()) {
                if (vmViewIndex.summary.isCurrentMonth() && isEmpty(vmViewIndex.summary.domainId())) 
                    this.error.push(includeNewLine(cError_LogDomainId_Empty));
                var date = new Date(vmViewIndex.summary.selectMonth());
                if (!(date instanceof Date && !isNaN(date))) 
                    this.error.push(includeNewLine(cError_Date_Empty));
            }
            break;
        //End Added by WEB-SA23-0013
        //Added by WEB-SA23-0056
        case cfrmRpServiceFeeGetData:
            if (vmViewIndex.report.isCurrentMonthRpServiceFee()) {
                if (vmViewIndex.report.isCurrentMonthRpServiceFee() && isEmpty(vmViewIndex.report.domainIdRpServiceFee())) 
                    this.error.push(includeNewLine(cError_LogDomainId_Empty));
                var date = new Date(vmViewIndex.report.selectMonthRpServiceFee());
                if (!(date instanceof Date && !isNaN(date))) 
                    this.error.push(includeNewLine(cError_Date_Empty));
            }
            break;
        //End Added by WEB-SA23-0056
        //Added by WEB-SA24-0002
        case cfrmRpOrderPaperSettingUpdate:
            var $tag = $('#modalRpOrderPaperSetting');

            if ($tag.find('#txtRpOrderPaperSetting_CountdownDay') === undefined || $tag.find('#txtRpOrderPaperSetting_CountdownDay').val().length == 0)
                this.error.push(includeNewLine(cError_RpOrderPaperSetting_CountdownDay));

            var errorRpOrderPaperSettingCondition = [];
            ko.utils.arrayForEach(vmViewIndex.report.dataRpOrderPaperSettingModal.dataSettingCondition(), function (item, index) {
                var itemIndex = index + 1;
                var itemLength = vmViewIndex.report.dataRpOrderPaperSettingModal.dataSettingCondition().length;
                var tagMin = cfrmTxtRpOrderPaperSetting_Condition_Min + itemIndex;
                var tagMax = cfrmTxtRpOrderPaperSetting_Condition_Max + itemIndex;
                var tagQty = cfrmTxtRpOrderPaperSetting_Condition_Qty + itemIndex;
                var conditionIndex = ' #Condition' + itemIndex;
                var itemMin = parseInt(item.min());
                var itemMax = (itemIndex == itemLength && parseInt(item.max()) == 0) ? Infinity : parseInt(item.max());
                if ($tag.find(tagMin) === undefined || $tag.find(tagMin).val().length == 0)
                    errorRpOrderPaperSettingCondition.push(includeNewLine(cError_RpOrderPaperSetting_Condition_Min + conditionIndex));
                if ($tag.find(tagMax) === undefined || $tag.find(tagMax).val().length == 0)
                    errorRpOrderPaperSettingCondition.push(includeNewLine(cError_RpOrderPaperSetting_Condition_Max + conditionIndex));
                if ($tag.find(tagQty) === undefined || $tag.find(tagQty).val().length == 0)
                    errorRpOrderPaperSettingCondition.push(includeNewLine(cError_RpOrderPaperSetting_Condition_Qty + conditionIndex));

                if (itemIndex == itemLength && itemMax != Infinity) {
                    errorRpOrderPaperSettingCondition.push(includeNewLine(cError_RpOrderPaperSetting_Condition_Last_Max));
                } else if (itemMin >= itemMax) {
                    errorRpOrderPaperSettingCondition.push(includeNewLine(cError_RpOrderPaperSetting_Condition_Min_MaxLessThanMin + conditionIndex));
                } else {
                    var minIndex = _.findIndex(vmViewIndex.report.dataRpOrderPaperSettingModal.dataSettingCondition(), function (v, i) {
                        if (index != i) {
                            var min = parseInt(v.min());
                            var max = parseInt(v.max());
                            if (!(min == 1 && max == 0)) {
                                if ((i + 1) == itemLength && max == 0) {
                                    max = Infinity;
                                } else {
                                    max += 1;
                                }
                                if (max > min) {
                                    return _.inRange(itemMin, min, max);
                                }
                            }
                        } else {
                            return false;
                        }
                    });

                    var maxIndex = _.findIndex(vmViewIndex.report.dataRpOrderPaperSettingModal.dataSettingCondition(), function (v, i) {
                        if (index != i) {
                            var min = parseInt(v.min());
                            var max = parseInt(v.max());
                            if (!(min == 1 && max == 0)) {
                                if ((i + 1) == itemLength && max == 0) {
                                    max = Infinity;
                                } else {
                                    max += 1;
                                }
                                if (max > min) {
                                    return _.inRange(itemMax, min, max);
                                }
                            }
                        } else {
                            return false;
                        }
                    });

                    if (minIndex >= 0) {
                        errorRpOrderPaperSettingCondition.push(includeNewLine('- Minimum Total sales of' + conditionIndex + ' should not in range of #Condition' + (minIndex + 1)));
                    }

                    if (maxIndex >= 0) {
                        errorRpOrderPaperSettingCondition.push(includeNewLine('- Maximum Total sales of' + conditionIndex + ' should not in range of #Condition' + (maxIndex + 1)));
                    }
                }
            });
            if (errorRpOrderPaperSettingCondition.length > 0) {
                this.error = this.error.concat(errorRpOrderPaperSettingCondition);
            }
            break;
        //End Added by WEB-SA24-0002
        //Added by WEB-SA24-0029
        case cfrmPersonnel:
            if (isEmpty(vmViewIndex.personnel.dataPersonnelModal.firstName())) {
                this.error.push(includeNewLine(cError_FirstName_Empty));
            }
            if (isEmpty(vmViewIndex.personnel.dataPersonnelModal.lastName())) {
                this.error.push(includeNewLine(cError_LasatName_Empty));
            }
            if (isEmpty(vmViewIndex.personnel.dataPersonnelModal.email())) {
                this.error.push(includeNewLine(cError_Email_Empty));
            } else {
                if (!validateEmail(vmViewIndex.personnel.dataPersonnelModal.email())) {
                    this.error.push(includeNewLine(cError_Email_Validate));
                }
            }
            if (isEmpty(vmViewIndex.personnel.dataPersonnelModal.roleIds())) {
                this.error.push(includeNewLine(cError_Personnel_Roles_Empty));
            }
            break;
        case cfrmPersonnelRole:
            if (isEmpty(vmViewIndex.personnel.dataRoleModal.roleName())) {
                this.error.push(includeNewLine(cError_Personnel_RoleName_Empty));
            }
            if (isEmpty(vmViewIndex.personnel.dataRoleModal.valDropDownBoxIcon())) {
                this.error.push(includeNewLine(cError_Personnel_Icon_Empty));
            }
            if (isEmpty(vmViewIndex.personnel.dataRoleModal.valColorBox())) {
                this.error.push(includeNewLine(cError_Personnel_Color_Empty));
            }
            break;
        //End Added by WEB-SA24-0029
        default:
            return null;
            break;
    }
};