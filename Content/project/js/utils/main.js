/*
 *   SMILEDINING-SA18-0008                  02/09/2018      FixBug                  1. Resend order change flag. 
 *   SMILEDINING-SA18-0010                  03/22/2018      Customize               1. Summary
 *   SMILEDINING-SA18-0011                  05/07/2018      Customize               1. New Web Report.
 *   SMILEDINING-SA19-0018                  08/19/2019      FixBug                  1. 'StartDate' more than 'EndDate' or vice versa.
                                                                                    2. Select date should participate in current date.
                                                                                    3. should not only select Start Date or End Date.
 *   SMILEDINING-SA19-0023                  09/13/2019      Customize               1. Add 'void button' for void previous ticket list on WebSupport.   
 *   SMILEDINING-SA19-0011                  09/03/2019      Customize               1. E-Gift Card.
 *   SMILEDINING-SA20-0006                  13/08/2020      Customize               1. Setup Contactless Payment Type and Update Contactless.
 *   SMILEDINING-SA20-0014                  31/07/2020      Customize               1. Separate email settings of Order Smiledining and E- Gift Card.
 *   SMILECONTACTLESS-SA20-0001             06/10/2020      New Project             1. New project smile contactless integrate smile dining, web owner, web api      
 *   SMILEDINING-SA20-0029                  25/10/2020      Customize               1. Adjust performance for Login.     
 *   SMILEDINING-SA20-0038#1                30/11/2020      Customize               1. Fix bug validate custom menu hour. 
 *   SMILEDINING-SA20-0031                  02/12/2020      Customize               1. Adjust shop close period date and time. 
 *   SMILEDINING-SA20-0031#4                08/01/2021      Customize               1. Add shopClose feature to WebSupport and Fix bug validate custom shopClose.
 *   SMILEDINING-SA21-0007                  02/02/2021      Customize               1. Apple Pay and Set up Unit Of Work  and Shop Close API      
 *   SMILEDINING-SA21-0014                  08/03/2021      Customize               1. Add new product 'Smile Third Party Integrations' used Deliverect. 
 *   SMILEDINING-SA21-0012                  31/03/2021      Customize               1. Change email order confirmation in smile dining. 
 *   SMILEDINING-SA21-0028#3                05/08/2021      Customize               1. Edit UI Smile Dining and Contactless (Layout P2).
 *   SMILEDINING-SA21-0048                  31/08/2021      Customize               1. Add button update taxrate from revenueclass all domain.
 *   SMILEDINING-SA21-0063                  07/10/2021      Customize               1. Add menu Marketing on web owner and Add menu Log on web support.
 *   SMILEDINING-SA21-0065                  12/10/2021      Customize               1. Change the solution to calling API Deliverect by JWT and asynchronous.
 *   SMILEDINING-SA21-0028#9                13/10/2021      Customize               1. Edit UI auto create image.
 *   SMILEDINING-SA21-0063#1                19/10/2021      Customize               1. Remove library ExcelJS,FileSaver and Add Filter Month,Day.
 *   SMILEDINING-SA21-0066                  21/10/2021      Customize               1. New feature web dispatch deliverect.
 *   SMILEDINING-SA21-0080                  03/11/2021      Customize               1. Activate Credit Card Fee & Marketing Service Fee.
 *   SMILEDINING-SA21-0021#8                07/06/2021      Customize               1. Create icon default.
 *   SMILEDINING-SA21-0080#2                09/12/2021      Customize               1. Calculate marketingFee in SmileDining and show receipt and report in webSupport.
 *   SMILEDINING-SA21-0081#1                21/12/2021      Customize               1. Edit class name shimmer and Add swal when get data fail.
 *   SMILEDINING-SA22-0008#10               22/03/2021      Customize               1. Add alert domainId 7 character and Fix call deliverect.
 *   SMILEDINING-SA22-0008#15               01/04/2022      Customize               1. Fix Owner Change Password, Add api token when shop not active and Fix shopMapCode.
 *   SMILEDINING-SA22-0012#1                12/05/2022      Customize               1. Edit Dispatch for DoorDash in webSupport and webOwner.
 *   SMILEDINING-SA22-0017                  06/06/2022      Customize               1. Add menu AutoUpdate in webSupport.
 *   SMILEDINING-SA22-0022                  15/06/2022      Customize               1. Add menu Delivery Billing in webSupport.
 *   SMILEDINING-SA22-0017#2                22/06/2022      Customize               1. Fix bug AutoUpdate in webSupport.
 *   SMILEDINING-SA22-0027                  18/07/2022      Customize               1. Fix bug save log in webSupport.
 *   SMILEDINING-SA22-0028                  22/07/2022      Customize               1. Fix bug monitor in webSupport.
 *   SMILEDINING-SA22-0028#1                25/07/2022      Customize               1. Fix bug monitor for taxes & fees in webSupport.
 *   SMILEDINING-SA22-0032                  18/08/2022      Customize               1. Edit summary report in WebSupport.
                                                                                    2. Edit setting service fee in WebSupport.
                                                                                    3. Add download and print for delivery billing in WebSupport.
 *   SMILEDINING-SA22-0033                  25/08/2022      Customize               1. Add amount deposit and email customer for delivery billing in WebSupport and WebOwner.
 *   WEB-SA22-0046                          30/09/2022      Customize               1. Fix bug alert setting payCash and payCredit for service fee and dispatch in webSupport.
 *   WEB-SA22-0050                          11/10/2022      Customize               1. Add role for Create Account in WebSuuport
 *   WEB-SA22-0057#1                        09/11/2022      Customize               1. Fixbug Flat Rate, Percentage and Setting in Websupport
                                                                                    2. Edit summary report in WebSupport.
 *   WEB-SA22-0070                          15/12/2022      Customize               1. Fix bug AutoUpdate v2 in webSupport.
 *   WEB-SA22-0071                          21/12/2022      Customize               1. Add download excel for Delivery Billing in webSupport.
 *   WEB-SA23-0008                          26/01/2023      Customize               1. Use MQTT send data to kiosk in webSupport.
 *   WEB-SA23-0012                          06/02/2023      Customize               1. Add setting Emergepay and edit UI payment service in webSupport.
 *   WEB-SA23-0013                          09/02/2023      Customize               1. Fix bug summary and delivery billing in webSupport.
 *   WEB-SA23-0013#1                        13/02/2023      Customize               1. Fix bug delivery billing show invalid shop in webSupport and webOwner.
 *   WEB-SA22-0057#5                        24/02/2023      Customize               1. Fix bug save Key of Local For You in webSupport.
 *   WEB-SA23-0020                          13/03/2023      Customize               1. Add setting additional charge for deliverect in webSupport.
     WEB-SA23-0025                          28/03/2023      Customize               1. Add filter product and export excel in menu Setup on webSupport. 
                                                                                    2. Change version api cpxtransaction of setup-dining to v2 on webSupport.
                                                                                    3. Edit version POS in menu Auto Update on webSupport.
     WEB-SA23-0048                          11/09/2023      Customize               1. Add setting Otter on webOwner, webSupport.
     WEB-SA23-0049                          22/09/2023      Customize               1. Add check diff doordash on webSupport and fix bug get address for dispatch on webDining.
     WEB-SA23-0050                          26/09/2023      Customize               1. Fix bug alert invalid shop address and check domain name duplicate on webSupport.
     WEB-SA23-0048#3                        17/10/2023      Customize               1. Fix bug copy food and sync product for Otter on webOwner, webSupport.
     WEB-SA23-0056                          20/12/2023      Customize               1. Add Service Fee Report on webSupport, webDining, webOnTable.
     WEB-SA23-0048#9                        11/01/2024      Customize               1. Fix bug sync product for update items Suspend/Unsuspend Otter on webSupport.
     WEB-SA24-0002                          02/02/2024      Customize               1. Add Order Paper Report on webSupport.
     WEB-SA24-0003                          06/02/2024      Customize               1. New Requirement - Add Purchase date to E-Gift Card Menu on webOwner, webSupport.
                                                                                    2. New Requirement - Change default Auto Sync Product to "Yes" on webSupport.
                                                                                    3. Fix bug saving of shop address due to missing city on webSupport.
 *   WEB-SA23-0049#3                        21/02/2024      Customize               1. Add check ticket previous month and ticket convert to restaurant for delivery billing convert file on webSupport, webOwner, webDining.
 *   WEB-SA24-0016                          05/06/2024      Customize               1. New requirement - Add pay at store only and notification for Smile On Table on webOwner, webSupport, webOnTable.
 *   WEB-SA24-0024                          23/07/2024      Customize               1. Fix bug shop address and change the Captcha and SignalR defaults on webSupport.
 *   WEB-SA24-0024#5                        06/09/2024      Customize               1. Fix bug in the validation of the shop address for DoorDash on webSupport.
 *   WEB-SA24-0029                          17/10/2024      Customize               1. New Requirement - Personnel on webSupport.
 */

var cfrmLogIn = 'frmLogIn';
var cfrmChangePassword = 'frmChangePassword';
var cfrmCreateAccount = 'frmCreateAccount';

var cfrmMonitorSelectDate = 'frmMonitorSelectDate';
var cfrmMonitorResend = 'frmMonitorResend';
var cfrmMonitorAdjustPrice = 'frmMonitorAdjustPrice';
var cfrmMonitorAdjustTip = 'frmMonitorAdjustTip';
var cfrmMonitorVoidTicket = 'frmMonitorVoidTicket'; //Added and End by SMILEDINING-SA19-0023

var cfrmSetUpDomain = 'frmSetUpDomain';
//Added by SMILEDINING-SA20-0031#4
var cfrmShopClose = 'frmShopClose';
var cfrmDeleteShopClose = 'frmDeleteShopClose';
//End Added by SMILEDINING-SA20-0031#4
//Added by SMILEDINING-SA21-0014
var cfrmDeliverectActivateAccount = 'frmDeliverectActivateAccount';
var cfrmDeliverectInsertOrUpdateProduct = 'frmDeliverectInsertOrUpdateProduct';
//End Added by SMILEDINING-SA21-0014
var cfrmOtterSyncProduct = 'frmOtterSyncProduct'; //Added and End by WEB-SA23-0048
var cfrmOtterSyncProductUpdateAvailability = 'frmOtterSyncProductUpdateAvailability'; //Added and End by WEB-SA23-0048#9
var cfrmOtterCheckEventId = 'frmOtterCheckEventId'; //Added and End by WEB-SA23-0048#3
var cfrmResizeImage = 'frmResizeImage'; //Added and End by SMILEDINING-SA21-0028#3
var cfrmCreateIconImage = 'frmCreateIconImage'; //Added and End by SMILEDINING-SA21-0021#8
var cfrmSetUpUsaEpaySearchDate = 'frmSetUpUsaEpaySearchDate';
var cfrmSetUpExportExcel = 'frmSetUpExportExcel'; //Added and End by WEB-SA23-0025
var cfrmOwner = 'frmOwner';
var cfrmUpdateTaxRate = 'frmUpdateTaxRate'; //Added and End by SMILEDINING-SA21-0048

//Added by SMILEDINING-SA18-0011
var cfrmWrUser = 'frmWrUser';
var cfrmWrUserRoleMap = 'frmWrUserRoleMap';
var cfrmWrRoleMenuMap = 'frmWrRoleMenuMap';
//End Added by SMILEDINING-SA18-0011

var cfrmSetUpGetData = 'frmSetUpGetData';
var cfrmSetUpGetDataByKey = 'frmSetUpGetDataByKey';
var cfrmOwnerGetData = 'frmOwnerGetData';
var cfrmOwnerGetDataByKey = 'frmOwnerGetDataByKey';
var cfrmSummaryGetData = 'frmSummaryGetData';       //Added and End by SMILEDINING-SA18-0010
var cfrmRpServiceFeeGetData = 'frmRpServiceFeeGetData'; //Added and End by WEB-SA23-0056
//Added by WEB-SA24-0002
var cfrmRpOrderPaperGetData = 'frmRpOrderPaperGetData';
var cfrmRpOrderPaperSendOrderToGravityByDomain = 'frmRpOrderPaperSendOrderToGravityByDomain';
var cfrmRpOrderPaperSettingStatusUpdateByDomain = 'frmRpOrderPaperSettingStatusUpdateByDomain';
var cfrmRpOrderPaperSettingTypeUpdateByDomain = 'frmRpOrderPaperSettingTypeUpdateByDomain';
var cfrmRpOrderPaperSettingUpdate = 'frmRpOrderPaperSettingUpdate';
//End Added by WEB-SA24-0002
//Added by WEB-SA24-0029
var cfrmPersonnelGetData = 'frmPersonnelGetData';
var cfrmPersonnel = 'frmPersonnel';
var cfrmPersonnelDelete = 'frmPersonnelDelete';
var cfrmPersonnelGroupRoleUpdate = 'frmPersonnelGroupRoleUpdate';
var cfrmPersonnelRole = 'frmPersonnelRole';
var cfrmPersonnelOwnerRoleUpdate = 'frmPersonnelOwnerRoleUpdate';
//End Added by WEB-SA24-0029
var cfrmMarketingServiceGetData = 'frmMarketingServiceGetData';   //Added adn End by SMILEDINING-SA21-0080#2
//Added by SMILEDINING-SA22-0017
var cfrmAutoUpdateGetData = 'frmAutoUpdateGetData';
var cfrmAutoUpdateGetRedis = 'frmAutoUpdateGetRedis';
var cfrmAutoUpdateSendUpdateVersion = 'frmAutoUpdateSendUpdateVersion'
var cfrmAutoUpdateServiceExpireUpdate = 'frmAutoUpdateServiceExpireUpdate';
//End Added by SMILEDINING-SA22-0017
//Added by SMILEDINING-SA19-0011
var cfrmGiftCer = 'frmGiftCer';    
var cfrmGiftCerSearch = 'frmGiftCerSearch';
var cfrmGiftCerSearchDate = 'frmGiftCerSearchDate';
//End Added by SMILEDINING-SA19-0011
var cfrmDeliveryBillingGetData = 'frmDeliveryBillingGetData'; //Added and End by WEB-SA23-0013#1
var cfrmDeliveryBillingSendEmail = 'frmDeliveryBillingSendEmail'; //Added and End by SMILEDINING-SA22-0022
var cfrmDeliveryBillingDownloadExcel = 'frmDeliveryBillingDownloadExcel'; //Added and End by WEB-SA22-0071
//Added by WEB-SA23-0049
var cfrmDeliveryBillingUploadConvertFile = 'frmDeliveryBillingUploadConvertFile';
var cfrmDeliveryBillingConvertTicket = 'frmDeliveryBillingConvertTicket';
var cfrmDeliveryBillingConvertFileUpdate = 'frmDeliveryBillingConvertFileUpdate';
//End Added by WEB-SA23-0049
var cfrmSummarySearch = 'frmSummarySearch'; //Added and End by WEB-SA23-0013
var cfrmRpServiceFeeSearch = 'frmRpServiceFeeSearch'; //Added and End by WEB-SA23-0056
var cfrmLogSelectStore = 'frmLogSelectStore';//Added and End by SMILEDINING-SA21-0063
//Added and End by SMILEDINING-SA21-0063#1
var cfrmLogSelectStore_DomainId = '#txtfrmLog_DomainId';
var cfrmLogSelectStore_TimeFilter = '#txtfrmLog_TimeFilter';
//End Added by SMILEDINING-SA21-0063#1

var cfrmLogIn_Email = '#txtLogInEmail';
var cfrmLogIn_Password = '#txtLogInPassword';

var cfrmSetUpDomain_DomainId = '#txtDomain_DomainId';
var cfrmSetUpDomain_DomainName = '#txtDomain_DomainName';
var cfrmSetUpDomain_DomainValue = '#txtDomain_DomainValue';

var cfrmSetUpDomain_ShopNumber = '#txtDomain_ShopNumber';
var cfrmSetUpDomain_ShopName = '#txtDomain_ShopName';
var cfrmSetUpDomain_ShopAddress = '#txtDomain_ShopAddress';
var cfrmSetUpDomain_ShopAddress_PlaceId = '#txtDomain_ShopAddress_PlaceId'; //Added and End by WEB-SA24-0024#5
var cfrmSetUpDomain_ShopPostal = '#txtDomain_ShopPostal';
//Modified by WEB-SA24-0024
////Added by WEB-SA23-0050
//var cfrmSetUpDomain_ShopCity = '#hdDomain_ShopCity';
//var cfrmSetUpDomain_ShopState = '#hdDomain_ShopState';
////End Added by WEB-SA23-0050
//End Modified by WEB-SA24-0024
//Added by WEB-SA24-0024
var cfrmSetUpDomain_ShopCity = '#txtDomain_ShopCity';
var cfrmSetUpDomain_ShopState = '#txtDomain_ShopState';
//End Added by WEB-SA24-0024
//Added by WEB-SA24-0003
var cfrmSetUpDomain_ShopSubCity = '#hdDomain_ShopSubCity';
var cfrmSetUpDomain_ShopAdministrativeAreaLevel3 = '#hdDomain_ShopAdministrativeAreaLevel3';
//End Added by WEB-SA24-0003
var cfrmSetUpDomain_ShopPhone = '#txtDomain_ShopPhone';
var cfrmSetUpDomain_ShopEmail = '#txtDomain_ShopEmail';
var cfrmSetUpDomain_Latitude = '#txtDomain_Latitude';
var cfrmSetUpDomain_Longitude = '#txtDomain_Longitude';
var cfrmSetUpDomain_TimeStartPickup = '#txtDomain_TimeStartPickup';
var cfrmSetUpDomain_TimeEndPickup = '#txtDomain_TimeEndPickup';
var cfrmSetUpDomain_TimeStartDelivery = '#txtDomain_TimeStartDelivery';
var cfrmSetUpDomain_TimeEndDelivery = '#txtDomain_TimeEndDelivery';
//Added by SMILEDINING-SA20-0014
var cfrmSetUpDomain_ProductId = '#txtDomain_ProductId';
var cfrmSetUpDomain_ShopEmailGiftCard = '#txtDomain_ShopEmailGiftCard';
//End Added by SMILEDINING-SA20-0014

var cfrmSetUpDomain_ServiceFee = '#txtDomain_ServiceFee';
var cfrmSetUpDomain_DeliveryChargeTax = '#txtDomain_DeliveryChargeTax';
//var cfrmSetUpDomain_CreditCardFee = '#txtDomain_CreditCardFee'; //Modified and End by SMILEDINING-SA22-0032
var cfrmSetUpDomain_MinimumOrder = '#txtDomain_MinimumOrder';
//var cfrmSetUpDomain_MarketingServiceFee = '#txtDomain_MarketingServiceFee'; //Added and End by SMILEDINING-SA21-0080#2 //Modified and End by SMILEDINING-SA22-0032
var cfrmSetUpDomain_ServiceFeePercent = '#txtDomain_ServiceFeePercent'; //Added and End by SMILEDINING-SA22-0032
var cfrmSetUpDomain_LocalForYou_Key = '#txtDomain_LocalForYou_Key'; //Added and End by WEB-SA22-0057#5
var cfrmSetUpDomain_AdditionalCharge_Amount = '#txtDomain_AdditionalChargeAmount'; //Added and End by WEB-SA23-0020

//Added by SMILEDINING-SA20-0031#4
var cfrmShopClose_StartDate = '#txtShopClose_StartDate';
var cfrmShopClose_EndDate = '#txtShopClose_EndDate';
var cfrmShopClose_Reason = '#txtShopClose_Reason';
//End Added by SMILEDINING-SA20-0031#4

var cfrmOwner_OwnerId = '#txtOwner_OwnerId';
var cfrmOwner_Password = '#txtOwner_Password';
var cfrmOwner_ConfirmPassword = '#txtOwner_ConfirmPassword';
var cfrmOwner_FirstName = '#txtOwner_FirstName';
var cfrmOwner_LastName = '#txtOwner_LastName';
var cfrmOwner_Email = '#txtOwner_Email';
var cfrmOwner_Phone = '#txtOwner_Phone';

var cfrmChangePassword_FirstName = '#txtChangePassword_FirstName';
var cfrmChangePassword_LastName = '#txtChangePassword_LastName';
var cfrmChangePassword_CurrentPassword = '#txtChangePassword_CurrentPassword';
var cfrmChangePassword_NewPassword = '#txtChangePassword_Password';
var cfrmChangePassword_ConfirmPassword = '#txtChangePassword_ConfirmPassword';

var cfrmCreateAccount_FirstName = '#txtCreateAccount_FirstName';
var cfrmCreateAccount_LastName = '#txtCreateAccount_LastName';
var cfrmCreateAccount_Email = '#txtCreateAccount_Email';
var cfrmCreateAccount_SecurityCode = '#txtCreateAccount_SecurityCode';
var cfrmCreateAccount_NewPassword = '#txtCreateAccount_NewPassword';
var cfrmCreateAccount_ConfirmPassword = '#txtCreateAccount_ConfirmPassword';       
var cfrmCreateAccount_RoleName = '#txtCreateAccount_RoleName'; //Added and End by WEB-SA22-0050

//Added by SMILEDINING-SA18-0011
var cfrmWrUser_FirstName = '#txtWebReport_User_FirstName';
var cfrmWrUser_LastName = '#txtWebReport_User_LastName';
var cfrmWrUser_Email = '#txtWebReport_User_Email';
var cfrmWrUser_Phone = '#txtWebReport_User_Phone';
//End Added by SMILEDINING-SA18-0011

//Added by SMILEDINING-SA19-0018
var cfrmShopCloseStartDate = '#hdShopCloseStartDate';
var cfrmShopCloseEndDate = '#hdShopCloseEndDate';
//End Added by SMILEDINING-SA19-0018
//Added by SMILEDINING-SA20-0031
var cfrmShopCloseStartDateContactless = '#hdShopCloseStartDateContactless';
var cfrmShopCloseEndDateContactless = '#hdShopCloseEndDateContactless';
//End Added by SMILEDINING-SA20-0031
//Added by WEB-SA24-0002
var cfrmTxtRpOrderPaperSetting_Condition_Min = '#txtRpOrderPaperSetting_Condition_Min_';
var cfrmTxtRpOrderPaperSetting_Condition_Max = '#txtRpOrderPaperSetting_Condition_Max_';
var cfrmTxtRpOrderPaperSetting_Condition_Qty = '#txtRpOrderPaperSetting_Condition_Qty_';
//End Added by WEB-SA24-0002

var cFeeType_Percentage = 2;    //Added and End by WEB-SA22-0057#1

//Added by SMILEDINING-SA20-0038#1
var cfrmCustom_Day = '#txtDomain_customDay';
var cfrmCustom_Hours = '#txtDomain_customHours';
//End Added by SMILEDINING-SA20-0038#1
var cJsonAccountLogOff = 'jsonAccountLogOff';
var cJsonMonitorGetData = 'jsonMonitorGetData';
var cJsonMonitorGetShopOnline = 'jsonMonitorGetShopOnline';
var cJsonGetCustomer = 'jsonGetCustomer';
var cJsonGetDataDomainValue = 'jsonGetDataDomainValue'; //Added and End by SMILEDINING-SA20-0029
var cJsonGetShopClose = 'jsonGetShopClose'; //Added and End by SMILEDINING-SA20-0031#4

//Added by SMILEDINING-SA18-0011
var cJsonGetWrCustomer = 'jsonGetWrCustomer';
var cJsonGetWrMenu = 'jsonGetWrMenu';
var cJsonGetWrGroupMenu = 'jsonGetWrGroupMenu';
var cJsonGetWrRole = 'jsonGetWrRole';
var cJsonGetWrUser = 'jsonGetWrUser';
var cJsonGetWrRoleMenuMap = 'jsonGetWrRoleMenuMap';
var cJsonGetWrUserRoleMap = 'jsonGetWrUserRoleMap';
//End Added by SMILEDINING-SA18-0011
//Added by SMILEDINING-SA19-0011
var cJsonGetWrEgiftCard = 'jsonGetWrEgiftCard';
var cJsonGetWrGiftCerX = 'jsonGetWrGiftCerX';
//End Added by SMILEDINING-SA19-0011
var cJsonSetUpUsaEpaySearchDateDetail = 'jsonSetUpUsaEpaySearchDateDetail';       //Added and End by SMILEDINING-SA21-0007

var cJsonSendFail = 'jsonSendFail';     //Added and End by SMILEDINING-SA18-0008
var cJsonEgiftCardUpdate = 'jsonEgiftCardUpdate';
var cJsonResetDataSmileDining = 'jsonResetDataSmileDining';     //Added and End by SMILECONTACTLESS-SA20-0001

var cJsonGetAllDomainInvalidTaxRate = 'jsonGetAllDomainInvalidTaxRate'; //Added and End by SMILEDINING-SA21-0048
var cJsonGetDataAllAccount = 'jsonGetDataAllAccount'; //Added and End by SMILEDINING-SA21-0065
var cJsonGetDataDispatch = 'jsonGetDataDispatch'; //Added and End by SMILEDINING-SA21-0066
var cJsonGetDataDeliveryBilling = 'JsonGetDataDeliveryBilling'; //Added and End by SMILEDINING-SA22-0022
var cJsonGetEmailCustomer = 'JsonGetEmailCustomer'; //Added and End by SMILEDINING-SA22-0033
//Added by WEB-SA23-0049
var cJsonGetDataDeliveryBillingConvertFile = 'JsonGetDataDeliveryBillingConvertFile';
var cJsonGetDataDetailMonitor = 'JsonGetDataDetailMonitor';
//End Added by WEB-SA23-0049
//Added by WEB-SA24-0002
var cJsonGetDataRpOrderPaperByDomain = 'JsonGetDataRpOrderPaperByDomain';
var cJsonGetDataRpOrderPaperSetting = 'JsonGetDataRpOrderPaperSetting';
//End Added by WEB-SA24-0002
var cJsonKeepSessionAlive = 'jsonKeepSessionAlive'; //Added and End by SMILEDINING-SA22-0027
var cJsonGetDataMqtt = 'jsonGetDataMqtt'; //Added and End by WEB-SA23-0008

var cError_Email_Empty = '- Field "Email" should not be empty.';
var cError_Email_Validate = '- Must be a valid Email Address.';
var cError_FirstName_Empty = '- Field "First Name" should not be empty.';
var cError_LasatName_Empty = '- Field "Last Name" should not be empty.';
var cError_Password_Empty = '- Field  "Password"  should not be empty.';
var cError_Password_Length = '- The Field Password must be at least 6 characters.';
var cError_ConfirmPassword_Empty = '- Field  "Confirm Password"  should not be empty.';
var cError_ConfirmPassword_Length = '- The Field Confirm Password must be at least 6 characters.';
var cError_Password_NotMatch = '- The password and confirmation password do not match.';
var cError_Fail_TimeOut = 'Invalid form data was sent to server. Please refresh this form and try again.';
var cError_Fail_NoInternet = 'Can\'t connect to the Internet.';
var cError_Fail_Send = 'Can\'t resend order to SmilePOS.';
var cError_Fail_Mqtt_Connection = 'Sorry, The server has problem. Please contact support.'; //Added and End by WEB-SA23-0008
var cError_Dev_Url = 'Please set url in layout page';   //Added and End by SMILEDINING-SA21-0021#8
var cError_GetDataDomainValue_Fail = 'GetDataDoaminValue request failed'; //Added and End by SMILEDINING-SA22-0008#15

var cError_Select_Row = 'Can\'t show data. Please select row.';
var cError_Phone_Empty = '- Field "Phone" should not be empty.';

var cError_DomainId_Empty = '- Field "ID" should not be empty.';
var cError_DomainId_Length = '- Field "ID" must be at least 7 characters.';  //Added and End by SMILEDINING-SA22-0008#10
var cError_DomainName_Empty = '- Field "DM Name" should not be empty.';
var cError_DomainValue_Empty = '- Field "DB Name" should not be empty.';

var cError_ShopNumber_Empty = '- Field "Number" should not be empty.';
var cError_ShopName_Empty = '- Field "Name" should not be empty.';
var cError_ShopAddress_Empty = '- Field "Address" should not be empty.';
var cError_ShopAddress_Fail = '- Invalid Address. Please type an address and click the Search button.'; //Added and End by WEB-SA23-0050
//Added by WEB-SA24-0024
var cError_ShopCity_Empty = '- Field "City" should not be empty.';
var cError_ShopState_Empty = '- Field "State" should not be empty.';
//End Added by WEB-SA24-0024
var cError_ShopPostal_Empty = '- Field "Postal" should not be empty.';
var cError_ShopPhone_Empty = '- Field "Phone" should not be empty.';
var cError_ShopEmail_Empty = '- Field "Email" should not be empty.';
var cError_Latitude_Empty = '- Field "Latitude" should not be empty.';
var cError_Longitude_Empty = '- Field "Longitude" should not be empty.';
var cError_TimeStartPickup_Empty = '- Field "Time start pickup" should not be empty.';
var cError_TimeEndPickup_Empty = '- Field "Time end pickup" should not be empty.';
var cError_TimeStartDelivery_Empty = '- Field "Time start delivery" should not be empty.';
var cError_TimeEndDelivery_Empty = '- Field "Time end delivery" should not be empty.';
//Added by SMILEDINING-SA21-0012
var cError_TimeEndPickup_lessthan = '- Field "Time end pickup" can not less than "Time start pickup".';
var cError_TimeEndDelivery_lessthan = '- Field "Time end delivery" can not less than "Time start delivery".';
//End Added by SMILEDINING-SA21-0012
var cError_ShopEmailGiftCard_Empty = '- Field "Email E-Gift Card" should not be empty.'; //Added and End by SMILEDINING-SA20-0014
var cError_ShopCloseReason_Empty = '- Field "Close reason" should not be empty.'; //Added and End by SMILEDINING-SA20-0031#4

var cError_ServiceFee_Empty = '- Field "Service Fee" should not be empty.';
var cError_DeliveryChargeTax_Empty = '- Field "Delivery Charge Tax" should not be empty.';
//var cError_CreditCardFee_Empty = '- Field "Credit Card Fee" should not be empty.'; //Modified and End by SMILEDINING-SA22-0032
var cError_MinimumOrder = '- Field "Minimum Order" should not be empty.';
//Added by SMILEDINING-SA21-0080#2
//Modified by SMILEDINING-SA22-0032
//var cError_MarketingFee_Empty = '- Field "Marketing Service Fee" should not be empty.';
//var cError_CreditCardFee_Data = '- Field "Credit Card Fee" should between 0 and 100.';
//var cError_MarketingFee_Data = '- Field "Marketing Service Fee" should between 0 and 100.';
//End Modified by SMILEDINING-SA22-0032
//End Added by SMILEDINING-SA21-0080#2
//Added by SMILEDINING-SA22-0032
var cError_ServiceFeePercent_Empty = '- Field "Service Fee (%)" should not be empty.';
var cError_ServiceFeePercent_Data = '- Field "Service Fee (%)" should between 0 and 100.';
//End Added by SMILEDINING-SA22-0032
var cError_LocalForYou_Key_Empty = '- Field "Key of Local For You" should not be empty.'; //Added and End by WEB-SA22-0057#5
var cError_OwnerId_Empty = '- Field "Owner Id" should not be empty.';
var cError_SecurityCode_Empty = '- Field "Security Code" should not be empty.';
var cCssInputValidateError = 'input-validation-error';
//Added by SMILEDINING-SA18-0011
var cError_Email_ALREADY = 'This email has already been taken. Please enter a different email address.';
var cError_User_In_Role_ALREADY = 'You have entered and user in role that already exists. Please try again.';
var cError_Restaurant_Empty = '- Field "Restaurant" should not be empty.';
var cError_User_Empty = '- Field "User" should not be empty.';
var cError_Role_Empty = '- Field "Role" should not be empty.';
var cError_Menu_Empty = '- Field  "Menu"  should not be empty in all roles.';
//End Added by SMILEDINING-SA18-0011
var cError_Duplicate_Restaurant = 'Please change join gift cer because duplicate data.';   //Added and End by SMILEDINING-SA19-0011

//Added by SMILEDINING-SA19-0018
var cError_ShopCloseDate_NotEqual = '- Both of "ShopCloseDate" should be empty';
var cError_ShopCloseDate_Error = 'StartDate must less than or equal EndDate';
//End Added by SMILEDINING-SA19-0018
//Added by SMILEDINING-SA20-0038#1
var cError_Customday_Empty = '- Field "Custom day" should not be empty.';
var cError_Customday_lessthan = '- Field "Custom day" can not less than "0".';
var cError_Customday_morethan = '- Field "Custom day" can not more than "366".';
var cError_Customhour_Empty = '- Field "Custom hour" should not be empty.';
var cError_Customhour_lessthan = '- Field "Custom hours" can not less than "0".';
var cError_Customhour_morethan = '- Field "Custom hours" can not more than "23".';
//End Added by SMILEDINING-SA20-0038#1
var cError_Date_Empty = '- Field "Date" should not be empty.'; //Added and End by SMILEDINING-SA22-0028#1
var cError_AdditionalCharge_Name_Empty = '- Please select Additional Charge Name.'; //Added and End by WEB-SA23-0020
//Added and End by SMILEDINING-SA21-0063#1
var cError_LogDomainId_Empty = '- Field "Shop Name" should not be empty.';
var cError_LogTimeMenu_Empty = '- Field "Select Filter" should not be empty';
//End Added by SMILEDINING-SA21-0063#1
//Added by SMILEDINING-SA22-0017
var cError_Version_Empty = 'Please Select Version Before Update';
var cError_Domain_Version_Empty = 'Not New Version Update Domain';
//End Added by SMILEDINING-SA22-0017
//Added by SMILEDINING-SA22-0022
var cError_DispatchType_Empty = '- Please choose Dispatch Type.';
var cError_DispatchName_Empty = '- Please select Dispatch Name.';
var cError_DeliveryBilling_DispatchType_Duplicate = 'Please filter "Delivery By" for single type.';
//End Added by SMILEDINING-SA22-0022
//Added by WEB-SA22-0046
//Modified by WEB-SA22-0057#1
//var cError_PayCash_Service_Fee = 'Please remove "Activate Service Fee (%)" before setting "Pay Cash".';   
//var cError_PayCredit_Service_Fee = 'Please remove "Activate Service Fee (%)" before setting close "Pay Credit".';
//var cError_PayCredit_Dispatch = 'Please choose Dispatch by "None" before setting close "Pay Credit".';
//var cError_PayCash_Dispatch_Service_Fee = 'Please remove "Activate Service Fee (%)" and choose Dispatch by "None" before setting "Pay Cash".'
//var cError_PayCredit_Dispatch_Service_Fee = 'Please remove "Activate Service Fee (%)" and choose Dispatch by "None" before setting close "Pay Credit".';
//End Modified by WEB-SA22-0057#1
//Added by WEB-SA22-0057#1
var cError_PayCash_Service_Fee = 'Please select "Flat Rate" of Dining before setting "Pay Cash".'; 
var cError_PayCash_Dispatch = 'Please choose Dispatch by "None" before setting  "Pay Cash".';
var cError_PayCredit_Service_Fee = 'Please select "Flat Rate" of Dining before setting close "Pay Credit".'; 
var cError_PayCredit_Dispatch = 'Please choose Dispatch by "None" before setting close "Pay Credit".';
var cError_PayCash_Dispatch_Service_Fee = 'Please select "Flat Rate" of Dining and choose Dispatch by "None" before setting "Pay Cash".'
var cError_PayCredit_Dispatch_Service_Fee = 'Please select "Flat Rate" of Dining and choose Dispatch by "None" before setting close "Pay Credit".';
//End Added by WEB-SA22-0057#1
//End Added by WEB-SA22-0046
//Added by WEB-SA24-0002
var cError_RpOrderPaperSetting_CountdownDay = '- Field "Countdown day" should not be empty.';
var cError_RpOrderPaperSetting_Condition_Min = '- Field "Minimum Total sales" should not be empty.';
var cError_RpOrderPaperSetting_Condition_Max = '- Field "Maximum Total sales" should not be empty.';
var cError_RpOrderPaperSetting_Condition_Qty = '- Field "Quantity" should not be empty.';
var cError_RpOrderPaperSetting_Condition_Min_MaxLessThanMin = '- "Minimum Total sales" should less than "Maximum Total sales".';
var cError_RpOrderPaperSetting_Condition_Last_Max = '- Field "Maximum Total sales" of the last condition should be "0" (Infinity).';
//End Added by WEB-SA24-0002
//Added by WEB-SA24-0029
var cError_Personnel_RoleName_Empty = '- Field "Role Name" should not be empty.';
var cError_Personnel_Icon_Empty = '- Field "Icon" should not be empty.';
var cError_Personnel_Color_Empty = '- Field "Color" should not be empty.';
var cError_Personnel_Roles_Empty = '- Field "Roles" should not be empty.';
//End Added by WEB-SA24-0029

var cSwal_Icon_Error = 'error';
var cSwal_Icon_Success = 'success';
var cSwal_Icon_Warning = 'warning'; //Added and End by SMILEDINING-SA21-0080
var cSwal_Alert_Error = 'Error...';
var cSwal_Alert_Success = 'Success...';
var cSwal_Alert_Required = 'Forget Something?';
var cSwal_Alert_InvalidLogIn = 'Invalid Login.';
var cSwal_Alert_InvalidLogIn = 'Invalid Login.';
var cSwal_Alert_Warning = 'Warning...';    //Added and End by SMILEDINING-SA21-0080

var cGridMonitor = 'gridMonitor';
var cGridShopOnline = 'gridShopOnline';
var cGridOwner = 'gridOwner';
var cGridSummary = 'gridSummary';       //Added and End by SMILEDINING-SA18-0010
var cGridRpServiceFee = 'gridRpServiceFee'; //Added and End by WEB-SA23-0056
var cGridRpOrderPaper = 'gridRpOrderPaper'; //Added and End by WEB-SA24-0002
var cGridAutoUpdate = 'gridAutoUpdate'; //Added and End by SMILEDINING-SA22-0017
//Added by SMILEDINING-SA18-0011
var cGridWrUser = 'gridUser';
var cGridWrUserRoleMap = 'gridUserRoleMap';
var cGridWrRoleMenuMap = 'gridRoleMenuMap';
//End Added by SMILEDINING-SA18-0011
var cGridEgiftCard = 'gridEgiftCard';   //Added and End by SMILEDINING-SA19-0011
var cGridLog = 'gridLog'; //Added and End by SMILEDINING-SA21-0063#1
//Added by SMILEDINING-SA21-0007
var cGridSetUpUsaEpaySearchDate = 'gridSetUpUsaEpaySearchDate';
var cGridSetUpUsaEpaySearchDateDetail = 'gridSetUpUsaEpaySearchDateDetail';
//End Added by SMILEDINING-SA21-0007
//Added by SMILEDINING-SA21-0081#1
var cGridSetup = 'gridSetup';
var cGridMarketing = 'gridMarketing';
//End Added by SMILEDINING-SA21-0081#1
var cGridDeliveryBilling = 'gridDeliveryBilling'; //Added and End by SMILEDINING-SA22-0022
//Added by WEB-SA23-0049
var cGridDeliveryBillingModal = 'gridDeliveryBillingModal';
var cGridDeliveryBillingDetailConvertFileModal = 'gridDeliveryBillingDetailConvertFileModal';
var cGridDeliveryBillingDetailErrorModal = 'gridDeliveryBillingDetailErrorModal';
var cGridDeliveryBillingDetailPrevMonthModal = 'gridDeliveryBillingDetailPrevMonthModal'; //Added and End by WEB-SA23-0049#3
//End Added by WEB-SA23-0049
var cGridPersonnel = 'gridPersonnel'; //Added and End by WEB-SA24-0029

var cModalMonitor = 'modalMonitor';
var cModalSetup = 'modalSetup';
var cModalSettingAllDomain = 'modalSettingAllDomain';   //Added and End by SMILEDINING-SA21-0028#9
//Added by SMILEDINING-SA21-0007
var cModalSetupUsaEpaySearchDate = 'modalSetUpUsaEpaySearchDate';    
var cModalSetupUsaEpaySearchDateDetail = 'modalSetUpUsaEpaySearchDateDetail';
//End Added by SMILEDINING-SA21-0007
var cModalOwner = 'modalOwner';
var cModalChangePassword = 'modalChangePassword';
var cModalCreateAccount = 'modalCreateAccount';
//Added by SMILEDINING-SA18-0011
var cModalWrUser = 'modalWrUser';
var cModalWrUserRoleMap = 'modalWrUserRoleMap';
var cModalWrRoleMenuMap = 'modalWrRoleMenuMap';
//End Added by SMILEDINING-SA18-0011
//Added by SMILEDINING-SA19-0011
var cModalEgiftCard = 'modalEgiftCard';
var cModalEgiftCardDetail = 'modalEgiftCardDetail';
var cModalEgiftCardSearch = 'modalEgiftCardSearch';
var cModalEgiftCardSearchDate = 'modalEgiftCardSearchDate';
//End Added by SMILEDINING-SA19-0011
var cModalSetupShopClose = 'modalSetUpShopClose';   //Added and End by SMILEDINING-SA20-0031#4
//Added by SMILEDINING-SA22-0017
var cModalUpdateVersion = 'modalUpdateVersion';
var cModalUpdateVersionDetail = 'modalUpdateVersionDetail';
var cModalSettingSvn = 'modalSettingSvn';
//Added by SMILEDINING-SA22-0022
var cModalDeliveryBilling = 'modalDeliveryBilling';
var cModalDeliveryBillingSendEmail = 'modalDeliveryBillingSendEmail';
var cModalDeliveryBillingDownloadExcel = 'modalDeliveryBillingDownloadExcel'; //Added and End by WEB-SA22-0071
//End Added by SMILEDINING-SA22-0022
//Added by WEB-SA23-0049
var cModalDeliveryBillingConvertFile = 'modalDeliveryBillingConvertFile';
var cModalDeliveryBillingConvertTicket = 'modalDeliveryBillingConvertTicket';
var cModalDeliveryBillingDetailError = 'modalDeliveryBillingDetailError';
var cModalDeliveryBillingDetailPrevMonth = 'modalDeliveryBillingDetailPrevMonth'; //Added and End by WEB-SA23-0049#3
var cModalDeliveryBillingDetailMonitor = 'modalDeliveryBillingDetailMonitor';
//End Added by WEB-SA23-0049
//Added by WEB-SA24-0002
var cModalRpOrderPaperSetting = 'modalRpOrderPaperSetting';
var cModalRpOrderPaper = 'modalRpOrderPaper';
//End Added by WEB-SA24-0002
//Added by WEB-SA24-0029
var cModalPersonnel = 'modalPersonnel';
var cModalPersonnelSharedInvitation = 'modalPersonnelSharedInvitation';
var cModalPersonnelGroupRole = 'modalPersonnelGroupRole';
var cModalPersonnelRole = 'modalPersonnelRole';
var cModalPersonnelOwnerRole = 'modalPersonnelOwnerRole';
//End Added by WEB-SA24-0029

var cProcessStatusWaiting = "Waiting";
var cProcessStatusInprogress = "In progress";
var cProcessStatusFailed = "Failed";
var cProcessStatusCompleted = "Completed";
var cProcessStatusFinished = "Finished";
var cProcessStatusInit = "Init";
var cProcessStatusStart = "Start";
var cProcessStatusRollback = "Rollback";
var cProcessStatusNotAvailable = "Not available"; //Added and End by SMILEDINING-SA22-0017#2
var cProcessStatusUpdating = "Updating"; //Added and End by WEB-SA22-0070

var cProcessNameReceivedUpdateRequest = "ReceivedUpdateRequest";
var cProcessNameGetSVNAutoUpdater = "GetSVNAutoUpdater";
var cProcessNameRunAutoUpdater = "RunAutoUpdater";
var cProcessNameCheckRunAdmin = "CheckRunAdmin";
var cProcessNameConnectDatabase = "ConnectDatabase";
var cProcessNameCreateUpdateDirectory = "CreateUpdateDirectory"
var cProcessNameGetSVN = "GetSVN";
var cProcessNameDumpDatabase = "DumpDatabase";
var cProcessNameBackupDatabase = "BackupDatabase";
var cProcessNameBackupPOS = "BackupPOS";
var cProcessNameBackupWebReport = "BackupWebReport";
var cProcessNameBackupTablet = "BackupTablet";
var cProcessNameStopService = "StopService";
var cProcessNameDeleteOldPOS = "DeleteOldPOS";
var cProcessNamePasteNewPOS = "PasteNewPOS";
var cProcessNameDeleteOldWebReport = "DeleteOldWebReport";
var cProcessNamePasteNewWebReport = "PasteNewWebReport";
var cProcessNameDeleteOldTablet = "DeleteOldTablet";
var cProcessNamePasteNewTablet = "PasteNewTablet";
var cProcessNameStartService = "StartService";
var cProcessNameUpdateScript = "UpdateScript";
var cProcessNameDeleteBackup = "DeleteBackup";
var cProcessNameRunPOS = "RunPOS";
var cProcessNameSendUpdateRequestToClients = "SendUpdateRequestToClients";
var cProcessNameUpdateCompleted = "UpdateCompleted";

var cMain = "MAIN";
//End Added by SMILEDINING-SA22-0017
var cSoundReceive = 'cSoundReceive';
var cSoundOffline = 'cSoundOffline';

var cStatusAdd = 'ADD';
var cStatusUpdate = 'UPDATE';
//Added by SMILEDINING-SA19-0011
var cStatusSearch = 'SEARCH';
var cStatusResend = 'RESEND';
//End Added by SMILEDINING-SA19-0011
var cShortStatusVoid = 'V'; //Added and End by SMILEDINING-SA19-0023
var cGeoByAddress = 'address'; //Added and End by WEB-SA24-0024

var cProtocal = 'https';
//var cGlobal_application = 'Web';
var cGlobal_application = 'Support';
//var cGlobal_url = '//signalr.smiledining.com/signalr';
//var cGlobal_url = '//localhost:44359/signalr';
var cGlobal_url = '//websignalr.smiledining.com/signalr';
/*inital variable*/
var vmViewIndex;
var _isDelete = false;
var _currentTime = '';
var _currentDate = '';
var _signalConnect = false;
var _hub, _hubCheck;
var _timeoutHandle;
//Modified by SMILEDINING-SA21-0007
//var globalize = Globalize('en');
//var monthDayFormatter = globalize.dateFormatter({ skeleton: "MMMd" });
//End Modified by SMILEDINING-SA21-0007
//Added by SMILEDINING-SA20-0006
var products = {
    cAllProduct: '0',
    cSmilePos: '1',
    cSmileDining: '2',
    cSmileEgiftCard: '3',
    cSmileContactless: '4',
    cSmileThirdPartyIntegrations: '5', //Added and End by SMILEDINING-SA21-0014
    cSmileKiosk: '6', //Added and End by SMILEDINING-SA22-0028
    //cSmileDeliveryService: '7', //Added and End by WEB-SA23-0025 //Modified and End by WEB-SA24-0029
    //Added by WEB-SA24-0029
    cSmileOwner: '7',
    cSmileSupport: '8',
    cSmileCloudPos: '9',
    cSmileCloudDatabase: '10',
    cSmileDeliveryService: '100',
    //End Added by WEB-SA24-0029
    mapName: {
        '0': { name: 'View All Products', shotName: 'View All Products' },
        '1': { name: 'Smile POS', shotName: 'Smile POS' },
        '2': { name: 'Smile Dining', shotName: 'Smile Dining' },
        '3': { name: 'Smile E-Gift Card', shotName: 'E-Gift Card' },
        //'4': { name: 'Smile Contactless Dining', shotName: 'Contactless Dining' }, //Modified and End by SMILEDINING-SA22-0028
        '4': { name: 'Smile On Table', shotName: 'On table' }, //Added and End by SMILEDINING-SA22-0028
        '5': { name: 'Smile Third Party Integrations', shotName: 'Smile Third Party' },   //Added and End by SMILEDINING-SA21-0014
        '6': { name: 'Smile Kiosk', shotName: 'Kiosk' }, //Added and End by SMILEDINING-SA22-0028
        //'7': { name: 'Smile Delivery Service', shotName: 'Delivery Service' }, //Added and End by WEB-SA23-0025 //Modified and End by WEB-SA24-0029
        //Added by WEB-SA24-0029
        '7': { name: 'Smile Owner', shotName: 'Web Owner' },
        '8': { name: 'Smile Support', shotName: 'Web Support' },
        '9': { name: 'Smile Cloud POS', shotName: 'Cloud POS' },
        '10': { name: 'Smile Cloud Database', shotName: 'Cloud Database' },
        '100': { name: 'Smile Delivery Service', shotName: 'Delivery Service' },
        //End Added by WEB-SA24-0029
    }
};
var contactlessPaymentType = {
    cFastService: '0',
    cFineDining: '1'
}
//End Added by SMILEDINING-SA20-0006

//Added by WEB-SA24-0016
var contactlessPaymentMethod = {
    cDefault: '0',
    cPayAtStoreOnly: '1'
}
//End Added by WEB-SA24-0016

//Added by SMILEDINING-SA20-0031#4
var time_start_24h = "00:00:00";
var time_end_24h = "23:59:00";
//End Added by SMILEDINING-SA20-0031#4
//Added by SMILEDINING-SA22-0012#1
var cDispatchType_None = '0'; //Added and End by SMILEDINING-SA22-0022
var cDispatchType_Deliverect = '1';
var cDispatchType_DoorDash = '2';
//Added by SMILEDINING-SA22-0022
var cDispatchType_Deliverect_Name = 'Deliverect';
var cDispatchType_DoorDash_Name = 'DoorDash';
//End Added by SMILEDINING-SA22-0022
var cTipAuto_DoorDash = '20';
var cTipGuide_DoorDash = '18,20,25';
//End Added by SMILEDINING-SA22-0012#1
//Added by WEB-SA22-0050
var cRoleName_Support = 'Support';
var cRoleName_Tester = 'Tester';
var cRoleName_Accounting = 'Accounting';
//End Added by WEB-SA22-0050
//Added by WEB-SA23-0008
var mqtt;
var reconnectTimeoutMqtt = 1000;
var cTopicTable = '/table/';
//End Added by WEB-SA23-0008
//Added by WEB-SA23-0012
var paymentServiceProviders = {
    cUsaepay: 1,
    cEmergepay: 2,
    mapName: {
        1: { name: 'USAePay' },
        2: { name: 'Emergepay' },
    }
};
var fees = {
    cAll: 0, //Added and End by WEB-SA23-0013
    cFlatRate: 1,
    cPercentage: 2,
    mapName: {
        0: { name: 'All Fee Type' }, //Added and End by WEB-SA23-0013
        1: { name: 'Flat Rate' },
        2: { name: 'Percentage' },
    }
};
//End Added by WEB-SA23-0012
//Added by WEB-SA24-0002
var reports = {
    cServiceFee: 1,
    cOrderPaper: 2,
    mapName: {
        1: { name: 'Service Fee Report' },
        2: { name: 'Order Paper' },
    }
};
//End Added by WEB-SA24-0002
//Added by WEB-SA24-0024
var messagingProtocols = {
    cKafkaAndSignalR: 'K',
    cMqtt: 'M',
};
//End Added by WEB-SA24-0024

var cAdditionalCharge_Max = 3; //Added and End by WEB-SA23-0020

window.onload = function () {
    if (window.jQuery) {
        //var device = getMobileOperatingSystem();
        //var device_theme = device_theme_desktop;
        //switch (device) {
        //    case device_andoird:
        //        DevExpress.devices.current({
        //            platform: 'android',
        //            deviceType: 'phone'
        //        });
        //        device_theme = device_theme_android;
        //        break;
        //    case device_ios:
        //        DevExpress.devices.current({
        //            platform: 'ios',
        //            deviceType: 'phone'
        //        });
        //        device_theme = device_theme_ios;
        //        break;
        //    default:
        //        DevExpress.devices.current({
        //            platform: 'generic',
        //            deviceType: 'desktop'
        //        });
        //        break;
        //}
        //DevExpress.ui.themes.current(device_theme);
    } else {
        location.reload();
    }
};

//Added by WEB-SA24-0029
var cDefaultEmail = '-@example.com';
var cRole_Administrator_Id = 0;
var permissions = {
    cMonitor: 3,
    cSetup: 4,
    cOwner: 5,
    cEGiftCard: 6,
    cAutoUpdate: 7,
    cSummary: 8,
    cReport: 9,
    cDeliveryBilling: 10,
    cPersonnel: 11,
    mapName: {
        3: { name: 'Monitor' },
        4: { name: 'Setup' },
        5: { name: 'Owner' },
        6: { name: 'E-Gift Card' },
        7: { name: 'Auto Update' },
        8: { name: 'Summary' },
        9: { name: 'Report' },
        10: { name: 'Delivery Billing' },
        11: { name: 'Personnel' },
    }
};
var icons = ["fa-500px", "fa-address-book", "fa-address-book-o", "fa-address-card", "fa-address-card-o", "fa-adjust", "fa-adn", "fa-align-center", "fa-align-justify", "fa-align-left", "fa-align-right", "fa-amazon", "fa-ambulance", "fa-american-sign-language-interpreting", "fa-anchor", "fa-android", "fa-angellist", "fa-angle-double-down", "fa-angle-double-left", "fa-angle-double-right", "fa-angle-double-up", "fa-angle-down", "fa-angle-left", "fa-angle-right", "fa-angle-up", "fa-apple", "fa-archive", "fa-area-chart", "fa-arrow-circle-down", "fa-arrow-circle-left", "fa-arrow-circle-o-down", "fa-arrow-circle-o-left", "fa-arrow-circle-o-right", "fa-arrow-circle-o-up", "fa-arrow-circle-right", "fa-arrow-circle-up", "fa-arrow-down", "fa-arrow-left", "fa-arrow-right", "fa-arrow-up", "fa-arrows", "fa-arrows-alt", "fa-arrows-h", "fa-arrows-v", "fa-asl-interpreting", "fa-assistive-listening-systems", "fa-asterisk", "fa-at", "fa-audio-description", "fa-automobile", "fa-backward", "fa-balance-scale", "fa-ban", "fa-bandcamp", "fa-bank", "fa-bar-chart", "fa-bar-chart-o", "fa-barcode", "fa-bars", "fa-bath", "fa-bathtub", "fa-battery", "fa-battery-0", "fa-battery-1", "fa-battery-2", "fa-battery-3", "fa-battery-4", "fa-battery-empty", "fa-battery-full", "fa-battery-half", "fa-battery-quarter", "fa-battery-three-quarters", "fa-bed", "fa-beer", "fa-behance", "fa-behance-square", "fa-bell", "fa-bell-o", "fa-bell-slash", "fa-bell-slash-o", "fa-bicycle", "fa-binoculars", "fa-birthday-cake", "fa-bitbucket", "fa-bitbucket-square", "fa-bitcoin", "fa-black-tie", "fa-blind", "fa-bluetooth", "fa-bluetooth-b", "fa-bold", "fa-bolt", "fa-bomb", "fa-book", "fa-bookmark", "fa-bookmark-o", "fa-braille", "fa-briefcase", "fa-btc", "fa-bug", "fa-building", "fa-building-o", "fa-bullhorn", "fa-bullseye", "fa-bus", "fa-buysellads", "fa-cab", "fa-calculator", "fa-calendar", "fa-calendar-check-o", "fa-calendar-minus-o", "fa-calendar-o", "fa-calendar-plus-o", "fa-calendar-times-o", "fa-camera", "fa-camera-retro", "fa-car", "fa-caret-down", "fa-caret-left", "fa-caret-right", "fa-caret-square-o-down", "fa-caret-square-o-left", "fa-caret-square-o-right", "fa-caret-square-o-up", "fa-caret-up", "fa-cart-arrow-down", "fa-cart-plus", "fa-cc", "fa-cc-amex", "fa-cc-diners-club", "fa-cc-discover", "fa-cc-jcb", "fa-cc-mastercard", "fa-cc-paypal", "fa-cc-stripe", "fa-cc-visa", "fa-certificate", "fa-chain", "fa-chain-broken", "fa-check", "fa-check-circle", "fa-check-circle-o", "fa-check-square", "fa-check-square-o", "fa-chevron-circle-down", "fa-chevron-circle-left", "fa-chevron-circle-right", "fa-chevron-circle-up", "fa-chevron-down", "fa-chevron-left", "fa-chevron-right", "fa-chevron-up", "fa-child", "fa-chrome", "fa-circle", "fa-circle-o", "fa-circle-o-notch", "fa-circle-thin", "fa-clipboard", "fa-clock-o", "fa-clone", "fa-close", "fa-cloud", "fa-cloud-download", "fa-cloud-upload", "fa-cny", "fa-code", "fa-code-fork", "fa-codepen", "fa-codiepie", "fa-coffee", "fa-cog", "fa-cogs", "fa-columns", "fa-comment", "fa-comment-o", "fa-commenting", "fa-commenting-o", "fa-comments", "fa-comments-o", "fa-compass", "fa-compress", "fa-connectdevelop", "fa-contao", "fa-copy", "fa-copyright", "fa-creative-commons", "fa-credit-card", "fa-credit-card-alt", "fa-crop", "fa-crosshairs", "fa-css3", "fa-cube", "fa-cubes", "fa-cut", "fa-cutlery", "fa-dashboard", "fa-dashcube", "fa-database", "fa-deaf", "fa-deafness", "fa-dedent", "fa-delicious", "fa-desktop", "fa-deviantart", "fa-diamond", "fa-digg", "fa-dollar", "fa-dot-circle-o", "fa-download", "fa-dribbble", "fa-drivers-license", "fa-drivers-license-o", "fa-dropbox", "fa-drupal", "fa-edge", "fa-edit", "fa-eercast", "fa-eject", "fa-ellipsis-h", "fa-ellipsis-v", "fa-empire", "fa-envelope", "fa-envelope-o", "fa-envelope-open", "fa-envelope-open-o", "fa-envelope-square", "fa-envira", "fa-eraser", "fa-etsy", "fa-eur", "fa-euro", "fa-exchange", "fa-exclamation", "fa-exclamation-circle", "fa-exclamation-triangle", "fa-expand", "fa-expeditedssl", "fa-external-link", "fa-external-link-square", "fa-eye", "fa-eye-slash", "fa-eyedropper", "fa-fa", "fa-facebook", "fa-facebook-f", "fa-facebook-official", "fa-facebook-square", "fa-fast-backward", "fa-fast-forward", "fa-fax", "fa-feed", "fa-female", "fa-fighter-jet", "fa-file", "fa-file-archive-o", "fa-file-audio-o", "fa-file-code-o", "fa-file-excel-o", "fa-file-image-o", "fa-file-movie-o", "fa-file-o", "fa-file-pdf-o", "fa-file-photo-o", "fa-file-picture-o", "fa-file-powerpoint-o", "fa-file-sound-o", "fa-file-text", "fa-file-text-o", "fa-file-video-o", "fa-file-word-o", "fa-file-zip-o", "fa-files-o", "fa-film", "fa-filter", "fa-fire", "fa-fire-extinguisher", "fa-firefox", "fa-first-order", "fa-flag", "fa-flag-checkered", "fa-flag-o", "fa-flash", "fa-flask", "fa-flickr", "fa-floppy-o", "fa-folder", "fa-folder-o", "fa-folder-open", "fa-folder-open-o", "fa-font", "fa-font-awesome", "fa-fonticons", "fa-fort-awesome", "fa-forumbee", "fa-forward", "fa-foursquare", "fa-free-code-camp", "fa-frown-o", "fa-futbol-o", "fa-gamepad", "fa-gavel", "fa-gbp", "fa-ge", "fa-gear", "fa-gears", "fa-genderless", "fa-get-pocket", "fa-gg", "fa-gg-circle", "fa-gift", "fa-git", "fa-git-square", "fa-github", "fa-github-alt", "fa-github-square", "fa-gitlab", "fa-gittip", "fa-glass", "fa-glide", "fa-glide-g", "fa-globe", "fa-google", "fa-google-plus", "fa-google-plus-circle", "fa-google-plus-official", "fa-google-plus-square", "fa-google-wallet", "fa-graduation-cap", "fa-gratipay", "fa-grav", "fa-group", "fa-h-square", "fa-hacker-news", "fa-hand-grab-o", "fa-hand-lizard-o", "fa-hand-o-down", "fa-hand-o-left", "fa-hand-o-right", "fa-hand-o-up", "fa-hand-paper-o", "fa-hand-peace-o", "fa-hand-pointer-o", "fa-hand-rock-o", "fa-hand-scissors-o", "fa-hand-spock-o", "fa-hand-stop-o", "fa-handshake-o", "fa-hard-of-hearing", "fa-hashtag", "fa-hdd-o", "fa-header", "fa-headphones", "fa-heart", "fa-heart-o", "fa-heartbeat", "fa-history", "fa-home", "fa-hospital-o", "fa-hotel", "fa-hourglass", "fa-hourglass-1", "fa-hourglass-2", "fa-hourglass-3", "fa-hourglass-end", "fa-hourglass-half", "fa-hourglass-o", "fa-hourglass-start", "fa-houzz", "fa-html5", "fa-i-cursor", "fa-id-badge", "fa-id-card", "fa-id-card-o", "fa-ils", "fa-image", "fa-imdb", "fa-inbox", "fa-indent", "fa-industry", "fa-info", "fa-info-circle", "fa-inr", "fa-instagram", "fa-institution", "fa-internet-explorer", "fa-intersex", "fa-ioxhost", "fa-italic", "fa-joomla", "fa-jpy", "fa-jsfiddle", "fa-key", "fa-keyboard-o", "fa-krw", "fa-language", "fa-laptop", "fa-lastfm", "fa-lastfm-square", "fa-leaf", "fa-leanpub", "fa-legal", "fa-lemon-o", "fa-level-down", "fa-level-up", "fa-life-bouy", "fa-life-buoy", "fa-life-ring", "fa-life-saver", "fa-lightbulb-o", "fa-line-chart", "fa-link", "fa-linkedin", "fa-linkedin-square", "fa-linode", "fa-linux", "fa-list", "fa-list-alt", "fa-list-ol", "fa-list-ul", "fa-location-arrow", "fa-lock", "fa-long-arrow-down", "fa-long-arrow-left", "fa-long-arrow-right", "fa-long-arrow-up", "fa-low-vision", "fa-magic", "fa-magnet", "fa-mail-forward", "fa-mail-reply", "fa-mail-reply-all", "fa-male", "fa-map", "fa-map-marker", "fa-map-o", "fa-map-pin", "fa-map-signs", "fa-mars", "fa-mars-double", "fa-mars-stroke", "fa-mars-stroke-h", "fa-mars-stroke-v", "fa-maxcdn", "fa-meanpath", "fa-medium", "fa-medkit", "fa-meetup", "fa-meh-o", "fa-mercury", "fa-microchip", "fa-microphone", "fa-microphone-slash", "fa-minus", "fa-minus-circle", "fa-minus-square", "fa-minus-square-o", "fa-mixcloud", "fa-mobile", "fa-mobile-phone", "fa-modx", "fa-money", "fa-moon-o", "fa-mortar-board", "fa-motorcycle", "fa-mouse-pointer", "fa-music", "fa-navicon", "fa-neuter", "fa-newspaper-o", "fa-object-group", "fa-object-ungroup", "fa-odnoklassniki", "fa-odnoklassniki-square", "fa-opencart", "fa-openid", "fa-opera", "fa-optin-monster", "fa-outdent", "fa-pagelines", "fa-paint-brush", "fa-paper-plane", "fa-paper-plane-o", "fa-paperclip", "fa-paragraph", "fa-paste", "fa-pause", "fa-pause-circle", "fa-pause-circle-o", "fa-paw", "fa-paypal", "fa-pencil", "fa-pencil-square", "fa-pencil-square-o", "fa-percent", "fa-phone", "fa-phone-square", "fa-photo", "fa-picture-o", "fa-pie-chart", "fa-pied-piper", "fa-pied-piper-alt", "fa-pied-piper-pp", "fa-pinterest", "fa-pinterest-p", "fa-pinterest-square", "fa-plane", "fa-play", "fa-play-circle", "fa-play-circle-o", "fa-plug", "fa-plus", "fa-plus-circle", "fa-plus-square", "fa-plus-square-o", "fa-podcast", "fa-power-off", "fa-print", "fa-product-hunt", "fa-puzzle-piece", "fa-qq", "fa-qrcode", "fa-question", "fa-question-circle", "fa-question-circle-o", "fa-quora", "fa-quote-left", "fa-quote-right", "fa-ra", "fa-random", "fa-ravelry", "fa-rebel", "fa-recycle", "fa-reddit", "fa-reddit-alien", "fa-reddit-square", "fa-refresh", "fa-registered", "fa-remove", "fa-renren", "fa-reorder", "fa-repeat", "fa-reply", "fa-reply-all", "fa-resistance", "fa-retweet", "fa-rmb", "fa-road", "fa-rocket", "fa-rotate-left", "fa-rotate-right", "fa-rouble", "fa-rss", "fa-rss-square", "fa-rub", "fa-ruble", "fa-rupee", "fa-s15", "fa-safari", "fa-save", "fa-scissors", "fa-scribd", "fa-search", "fa-search-minus", "fa-search-plus", "fa-sellsy", "fa-send", "fa-send-o", "fa-server", "fa-share", "fa-share-alt", "fa-share-alt-square", "fa-share-square", "fa-share-square-o", "fa-shekel", "fa-sheqel", "fa-shield", "fa-ship", "fa-shirtsinbulk", "fa-shopping-bag", "fa-shopping-basket", "fa-shopping-cart", "fa-shower", "fa-sign-in", "fa-sign-language", "fa-sign-out", "fa-signal", "fa-signing", "fa-simplybuilt", "fa-sitemap", "fa-skyatlas", "fa-skype", "fa-slack", "fa-sliders", "fa-slideshare", "fa-smile-o", "fa-snapchat", "fa-snapchat-ghost", "fa-snapchat-square", "fa-snowflake-o", "fa-soccer-ball-o", "fa-sort", "fa-sort-alpha-asc", "fa-sort-alpha-desc", "fa-sort-amount-asc", "fa-sort-amount-desc", "fa-sort-asc", "fa-sort-desc", "fa-sort-down", "fa-sort-numeric-asc", "fa-sort-numeric-desc", "fa-sort-up", "fa-soundcloud", "fa-space-shuttle", "fa-spinner", "fa-spoon", "fa-spotify", "fa-square", "fa-square-o", "fa-stack-exchange", "fa-stack-overflow", "fa-star", "fa-star-half", "fa-star-half-empty", "fa-star-half-full", "fa-star-half-o", "fa-star-o", "fa-steam", "fa-steam-square", "fa-step-backward", "fa-step-forward", "fa-stethoscope", "fa-sticky-note", "fa-sticky-note-o", "fa-stop", "fa-stop-circle", "fa-stop-circle-o", "fa-street-view", "fa-strikethrough", "fa-stumbleupon", "fa-stumbleupon-circle", "fa-subscript", "fa-subway", "fa-suitcase", "fa-sun-o", "fa-superpowers", "fa-superscript", "fa-support", "fa-table", "fa-tablet", "fa-tachometer", "fa-tag", "fa-tags", "fa-tasks", "fa-taxi", "fa-telegram", "fa-television", "fa-tencent-weibo", "fa-terminal", "fa-text-height", "fa-text-width", "fa-th", "fa-th-large", "fa-th-list", "fa-themeisle", "fa-thermometer", "fa-thermometer-0", "fa-thermometer-1", "fa-thermometer-2", "fa-thermometer-3", "fa-thermometer-4", "fa-thermometer-empty", "fa-thermometer-full", "fa-thermometer-half", "fa-thermometer-quarter", "fa-thermometer-three-quarters", "fa-thumb-tack", "fa-thumbs-down", "fa-thumbs-o-down", "fa-thumbs-o-up", "fa-thumbs-up", "fa-ticket", "fa-times", "fa-times-circle", "fa-times-circle-o", "fa-times-rectangle", "fa-times-rectangle-o", "fa-tint", "fa-toggle-down", "fa-toggle-left", "fa-toggle-off", "fa-toggle-on", "fa-toggle-right", "fa-toggle-up", "fa-trademark", "fa-train", "fa-transgender", "fa-transgender-alt", "fa-trash", "fa-trash-o", "fa-tree", "fa-trello", "fa-tripadvisor", "fa-trophy", "fa-truck", "fa-try", "fa-tty", "fa-tumblr", "fa-tumblr-square", "fa-turkish-lira", "fa-tv", "fa-twitch", "fa-twitter", "fa-twitter-square", "fa-umbrella", "fa-underline", "fa-undo", "fa-universal-access", "fa-university", "fa-unlink", "fa-unlock", "fa-unlock-alt", "fa-unsorted", "fa-upload", "fa-usb", "fa-usd", "fa-user", "fa-user-circle", "fa-user-circle-o", "fa-user-md", "fa-user-o", "fa-user-plus", "fa-user-secret", "fa-user-times", "fa-users", "fa-vcard", "fa-vcard-o", "fa-venus", "fa-venus-double", "fa-venus-mars", "fa-viacoin", "fa-viadeo", "fa-viadeo-square", "fa-video-camera", "fa-vimeo", "fa-vimeo-square", "fa-vine", "fa-vk", "fa-volume-control-phone", "fa-volume-down", "fa-volume-off", "fa-volume-up", "fa-warning", "fa-wechat", "fa-weibo", "fa-weixin", "fa-whatsapp", "fa-wheelchair", "fa-wheelchair-alt", "fa-wifi", "fa-wikipedia-w", "fa-window-close", "fa-window-close-o", "fa-window-maximize", "fa-window-minimize", "fa-window-restore", "fa-windows", "fa-won", "fa-wordpress", "fa-wpbeginner", "fa-wpexplorer", "fa-wpforms", "fa-wrench", "fa-xing", "fa-xing-square", "fa-y-combinator", "fa-y-combinator-square", "fa-yahoo", "fa-yc", "fa-yc-square", "fa-yelp", "fa-yen", "fa-yoast", "fa-youtube", "fa-youtube-play", "fa-youtube-square"];
//End Added by WEB-SA24-0029