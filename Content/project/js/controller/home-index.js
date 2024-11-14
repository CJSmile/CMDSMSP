/*
 *   SMILEDINING-SA18-0008              02/09/2018      FixBug                  1. Resend order change flag. 
 *   SMILEDINING-SA18-0010              03/22/2018      Customize               1. Summary
 *   SMILEDINING-SA18-0010#01           04/18/2018      Customize               1. Change performance for after login.
 *   SMILEDINING-SA18-0011              05/07/2018      Customize               1. New Web Report.
 *   SMILEDINING-SA19-0023              09/13/2019      Customize               1. Add 'void button' for void previous ticket list on WebSupport.
 *   SMILEDINING-SA19-0011              09/03/2019      Customize               1. E-Gift Card. 
 *   SMILEDINING-SA20-0005              06/13/2020      Customize               1. Add new product.
 *   SMILECONTACTLESS-SA20-0001         06/10/2020      New Project             1. New project smile contactless integrate smile dining, web owner, web api
 *   SMILEDINING-SA20-0029              25/10/2020      Customize               1. Adjust performance for Login. 
 *   SMILEDINING-SA20-0031#4            08/01/2021      Customize               1. Add shopClose feature to WebSupport and Fix bug validate custom shopClose.
 *   SMILEDINING-SA21-0007              02/02/2021      Customize               1. Apple Pay and Set up Unit Of Work  and Shop Close API
 *   SMILEDINING-SA21-0028#3            05/08/2021      Customize               1. Edit UI Smile Dining and Contactless (Layout P2).
 *   SMILEDINING-SA21-0048              31/08/2021      Customize               1. Add button update taxrate from revenueclass all domain.
 *   SMILEDINING-SA21-0063              07/10/2021      Customize               1. Add menu Marketing on web owner and Add menu Log on web support.
 *   SMILEDINING-SA21-0065              12/10/2021      Customize               1. Change the solution to calling API Deliverect by JWT and asynchronous.
 *   SMILEDINING-SA21-0063#1            19/10/2021      Customize               1. Remove library ExcelJS,FileSaver and Add Filter Month,Day.
 *   SMILEDINING-SA21-0066#5            14/11/2021      Customize               1. Fix bug webSupport error when open domain and save domain and domain deactivate in setup.
 *   SMILEDINING-SA21-0063#9            23/11/2021      Customize               1. Edit file name download "LOG" to "DATA_LOG_DOMAINNAME".
 *   SMILEDINING-SA21-0080#2            09/12/2021      Customize               1. Calculate marketingFee in SmileDining and show receipt and report in webSupport.
 *   SMILEDINING-SA21-0081              16/12/2021      Customize               1. Add loading shimmer web support.
                                                                                2. Fix bug value when click button duplicate.
                                                                                3. Menu summary change call api.
 *   SMILEDINING-SA21-0081#1            21/12/2021      Customize               1. Edit class name shimmer and Add swal when get data fail.
 *   SMILEDINING-SA22-0008              23/02/2022      Customize               1. Call API in WebSupport.
 *   SMILEDINING-SA22-0008#6            03/03/2022      Customize               1. Fix loading shimmer Setup and Fix menu Sync Product and Resend.
 *   SMILEDINING-SA22-0008#12           30/03/2022      Customize               1. Fix monitor resend, joingiftcer, delivery charge tax, clear output cache and change password.
 *   SMILEDINING-SA21-0080#10           24/05/2022      Customize               1. Fix bug marketting report (websupport).
 *   SMILEDINING-SA22-0017              06/06/2022      Customize               1. Add menu AutoUpdate in webSupport.
 *   SMILEDINING-SA22-0022              15/06/2022      Customize               1. Add menu Delivery Billing in webSupport. 
 *   SMILEDINING-SA22-0023              17/06/2022      Customize               1. Fix bug edit E-GiftCard for resend in webSupport.
 *   SMILEDINING-SA22-0017#4            24/06/2022      Customize               1. Fix bug AutoUpdate get redis in webSupport.
 *   SMILEDINING-SA22-0017#8            04/07/2022      Customize               1. Fix bug error signalR using try catch in webSupport.
 *   SMILEDINING-SA22-0027              18/07/2022      Customize               1. Fix bug save log in webSupport.
 *   SMILEDINING-SA22-0028              22/07/2022      Customize               1. Fix bug monitor in webSupport.
 *   WEB-SA22-0054                      19/10/2022      Customize               1. Fix bug webSupport can't open in firefox browser.
 *   WEB-SA22-0064                      29/11/2022      Customize               1. Fix bug setting product in webSupport.
                                                                                2. Call Api in webOwner (AccountController, JsonController).
 *   WEB-SA22-0065                      05/12/2022      Customize               1. Fix bug Setting SVN and UpdateVersion in AutoUpdate.
 *   WEB-SA22-0070                      15/12/2022      Customize               1. Fix bug AutoUpdate v2 in webSupport.
 *   WEB-SA23-0002                      09/01/2023      Customize               1. Change Google recaptcha to Cloudflare Turnstile.
 *   WEB-SA23-0008                      26/01/2023      Customize               1. Use MQTT send data to kiosk in webSupport.
 *   WEB-SA23-0008#1                    26/01/2023      Customize               1. Fix bug data centreMapDomain for MQTT in webSupport.
 *   WEB-SA23-0013                      09/02/2023      Customize               1. Fix bug summary and delivery billing in webSupport.
 *   WEB-SA23-0013#1                    13/02/2023      Customize               1. Fix bug delivery billing show invalid shop in webSupport and webOwner.
 *   WEB-SA23-0002#1                    14/02/2023      Customize               1. Fix bug Cloudflare Turnstile when invalid login in webSupport.
 *   WEB-SA23-0013#4                    23/02/2023      Customize               1. Add address and postal in summary and delivery billing in webSupport.
 *   WEB-SA23-0013#5                    24/02/2023      Customize               1. Fix bug filter delivery by in delivery billing in webSupport.
 *   WEB-SA23-0019                      27/02/2023      Customize               1. Fix bug activate E-GiftCard and don't save to cloud in webSupport.
     WEB-SA23-0025                      28/03/2023      Customize               1. Add filter product and export excel in menu Setup on webSupport. 
                                                                                2. Change version api cpxtransaction of setup-dining to v2 on webSupport.
                                                                                3. Edit version POS in menu Auto Update on webSupport.
     WEB-SA23-0002#4                    25/05/2023      Customize               1. Disable Cloudflare Turnstile for webSupporttest.
     WEB-SA23-0049                      22/09/2023      Customize               1. Add check diff doordash on webSupport and fix bug get address for dispatch on webDining.
     WEB-SA23-0049#1                    26/10/2023      Customize               1. Fix bug check diff doordash and add filter product in menu Auto Update on webSupport.
     WEB-SA23-0056                      20/12/2023      Customize               1. Add Service Fee Report on webSupport, webDining, webOnTable.
     WEB-SA24-0002                      02/02/2024      Customize               1. Add Order Paper Report on webSupport.
     WEB-SA24-0015                      28/05/2024      Customize               1. Fix bug webSupport can't open on Safari browser.
     WEB-SA24-0024                      23/07/2024      Customize               1. Fix bug shop address and change the Captcha and SignalR defaults on webSupport.
     WEB-SA24-0024#1                    23/07/2024      Customize               1. Fix bug unable to save shop address on webSupport.
     WEB-SA24-0024#2                    24/07/2024      Customize               1. Fix bug shop address for doordash on webSupport.
     WEB-SA24-0025#1                    31/07/2024      Customize               1. Fix bug Cloudflare Turnstile limit on webSupport.
     WEB-SA24-0024#3                    09/08/2024      Customize               1. Fix bug invalid shop address for doordash on webSupport.
     WEB-SA24-0024#4                    19/08/2024      Customize               1. Fix bug invalid shop address format for doordash on webSupport.
     WEB-SA24-0024#5                    06/09/2024      Customize               1. Fix bug in the validation of the shop address for DoorDash on webSupport.
     WEB-SA24-0029                      17/10/2024      Customize               1. New Requirement - Personnel on webSupport.
     WEB-SA24-0029#1                    29/10/2024      Customize               1. Fix bug Group Role and Create Account in Personnel tab on webSupport.
 */

$(document).ready(function () {
    //Knockout
    //function viewModel(pCurrentDate, pCurrentDay, pShowLogIn, pShowMenu, pModelCustomer) { //Modified and End by WEB-SA23-0002#4
    function viewModel(pCurrentDate
                    , pCurrentDay
                    , pCaptchaEnable
                    , pReCaptchaSiteKey //Added and End by WEB-SA24-0025#1
                    , pShowLogIn
                    , pShowMenu
                    , pModelCustomer
		            , pModelMemberInvite //Added and End by WEB-SA24-0029
                    ) { //Added and End by WEB-SA23-0002#4
        var self = this;

        self.loading = new LoadingViewModel();      //Added and End by SMILECONTACTLESS-SA20-0001
        self.showLogin = ko.observable(pShowLogIn);
        self.showMenu = ko.observable(pShowMenu);
        //Added by WEB-SA23-0008
        self.captchaEnable = ko.observable(pCaptchaEnable); //Added and End by WEB-SA23-0002#4
        self.reCaptchaSiteKey = ko.observable(pReCaptchaSiteKey); //Added and End by WEB-SA24-0025#1
        self.mqttServer = ko.observable('');
        self.mqttUser = ko.observable('');
        self.mqttPsw = ko.observable('');
        self.mqttClientId = ko.observable('');
        self.isKiosk = ko.observable(false);
        //End Added by WEB-SA23-0008
        self.disableButtonSubmit = ko.observable(false); //Added and End by WEB-SA24-0029
        self.menu = new MenuViewModel();
        self.customer = new CustomerViewModel(pModelCustomer);
        self.monitor = new MonitorViewModel(pCurrentDate);
        self.setup = new SetupViewModel(pCurrentDate);
        self.owner = new OwnerViewModel();
        self.shopOnline = new ShopOnlineViewModel();
        self.setting = new SettingViewModel();
        //self.resizeimage = new ResizeImageViewModel();  //Added and End by SMILEDINING-SA21-0028#3    //Modified and End by SMILEDINING-SA21-0048
        self.settingAllDomain = new SettingAllDomainViewModel();    //Added and End by SMILEDINING-SA21-0048
        self.summary = new SummaryViewModel();    //Added and End by SMILEDINING-SA18-0010  
        self.webreport = new WebReportViewModel(pCurrentDate);  //Added and End by SMILEDINING-SA18-0011
        self.egiftcard = new EgiftCardViewModel();  //Added and End by SMILEDINING-SA19-0011
        //self.log = new LogViewModel(); //Added and End by SMILEDINING-SA21-0063 //Modified and End by SMILEDINING-SA21-0063#1
        self.log = new LogViewModel(pCurrentDate);//Added and End by SMILEDINING-SA21-0063#1
        self.marketingService = new MarketingServiceViewModel();   //Added and End by SMILEDINING-SA21-0080#2
        self.autoUpdate = new AutoUpdateViewModel(); //Added and End by SMILEDINING-SA22-0017
        self.deliveryBilling = new DeliveryBillingViewModel();   //Added and End by SMILEDINING-SA22-0022
        self.report = new ReportViewModel(); //Added and End by WEB-SA23-0056
        //Added by WEB-SA24-0029
        self.personnel = new PersonnelViewModel();
        self.memberInvite = new MemberInviteViewModel(pModelMemberInvite);
        //End Added by WEB-SA24-0029
        self.logOff = function () {
            var url = getObjFormAjax(cJsonAccountLogOff);
            location.replace(url);
        };
        //pop can't use object
        self.isPopupVisible = ko.observable(false);
    };
    //Modified by SMILEDINING-SA21-0081#1
    //Added by SMILEDINING-SA21-0081
    //$('.shimmer-monitor').hide();
    //$('#shimmer-log').hide();
    //$('#shimmer-summary').hide();
    //$('#shimmer-marketing').hide();
    //$('#shimmer-owner').hide();
    //$('#shimmer-egiftcard').hide();
    //$('#shimmer-webreport-user').hide();
    //$('#shimmer-webreport-menu').hide();
    //$('#shimmer-webreport-role').hide();
    //End Added by SMILEDINING-SA21-0081
    //End Modified by SMILEDINING-SA21-0081#1
    //Added by SMILEDINING-SA21-0081#1
    $('.shimmer-monitor').hide();
    $('.shimmer-log').hide();
    $('.shimmer-summary').hide();
    $('.shimmer-marketing').hide();
    $('.shimmer-owner').hide();
    $('.shimmer-egiftcard').hide();
    $('.shimmer-webreport-user').hide();
    $('.shimmer-webreport-menu').hide();
    $('.shimmer-webreport-role').hide();
    $('.shimmer-autoupdate').hide(); //Added and End by SMILEDINING-SA22-0017
    $('.shimmer-deliverybilling').hide(); //Added and End by SMILEDINING-SA22-0022
    $('.shimmer-rp-servicefee').hide(); //Added and End by WEB-SA23-0056
    $('.shimmer-rp-orderpaper').hide(); //Added and End by WEB-SA24-0002
    $('.shimmer-personnel').hide(); //Added and End by WEB-SA24-0029
    loadingShimmer(true, cGridSetup);   //Added and End by SMILEDINING-SA22-0008#6
    //End Added by SMILEDINING-SA21-0081#1
    var varAuthenticated = $('#divVarAuthenticated').val();
    var varCurrentDay = $('#divVarCurrentDay').val();
    var varCurrentDateTime = $('#divVarCurrentDateTime').val();
    const varCaptchaEnable = convertStrToBool($('#divVarCaptchaEnable').val()); //Added and End by WEB-SA23-0002#4
    var varReCaptchaSiteKey = $('#divVarReCaptchaSiteKey').val(); //Added and End by WEB-SA24-0025#1
    var modelMemberInvite = $('#divModelMemberInvite').val(); //Added and End by WEB-SA24-0029

    _currentTime = moment(varCurrentDateTime, moment_date_format_mmddyyyyhhmmssa);
    //_currentDate = moment(varCurrentDateTime).format(moment_date_format_mmddyyyy); //Modified and End by WEB-SA22-0054
    _currentDate = moment(varCurrentDateTime, moment_date_format_mmddyyyy).format(moment_date_format_mmddyyyy); //Added and End by WEB-SA22-0054


    var key = $('#divVarKey').val();
    key = key.substring(0, key.length - 3);
    if (!isEmpty(varAuthenticated)) {
        var customerProfile = getCustomerObjFormAjax(cJsonGetCustomer, varAuthenticated);
        //vmViewIndex = new viewModel(_currentDate, varCurrentDay, false, true, customerProfile); //Modified and End by WEB-SA23-0002#4
        vmViewIndex = new viewModel(_currentDate
                                , varCurrentDay
                                , varCaptchaEnable
                                , varReCaptchaSiteKey //Added and End by WEB-SA24-0025#1
                                , false
                                , true
                                , customerProfile
				                , modelMemberInvite //Added and End by WEB-SA24-0029
                                ); //Added and End by WEB-SA23-0002#4
        //Modified by SMILEDINING-SA21-0081#1
        //Added by SMILEDINING-SA21-0081
        //loadingShimmer(true, 'Monitor');
        //loadingShimmer(true, 'Owner');
        //loadingShimmer(true, 'E-giftcard');
        //loadingShimmer(true, 'WebReport-User');
        //loadingShimmer(true, 'WebReport-Menu');
        //loadingShimmer(true, 'WebReport-Role');
        //End Added by SMILEDINING-SA21-0081
        //End Modified by SMILEDINING-SA21-0081#1
        //Added by SMILEDINING-SA21-0081#1
        //Modified by SMILEDINING-SA22-0022
        //loadingShimmer(true, cGridMonitor);
        //loadingShimmer(true, cGridOwner);
        //loadingShimmer(true, cGridEgiftCard);
        //loadingShimmer(true, cGridWrUser);
        //loadingShimmer(true, cGridWrRoleMenuMap);
        //loadingShimmer(true, cGridWrUserRoleMap);
        //loadingShimmer(true, cGridAutoUpdate); //Added and End by SMILEDINING-SA22-0017
        //End Modified by SMILEDINING-SA22-0022
        //End Added by SMILEDINING-SA21-0081#1
        getData();
    } else {
        //vmViewIndex = new viewModel(_currentDate, varCurrentDay, true, false, null); //Modified and End by WEB-SA23-0002#4
        vmViewIndex = new viewModel(_currentDate
                                , varCurrentDay
                                , varCaptchaEnable
                                , varReCaptchaSiteKey //Added and End by WEB-SA24-0025#1
                                , true
                                , false
                                , null
				                , modelMemberInvite //Added and End by WEB-SA24-0029
                                ); //Added and End by WEB-SA23-0002#4
    }
    ko.applyBindings(vmViewIndex, document.getElementById('koMenuView'));

    renderCaptcha(); //Added and End by WEB-SA24-0025#1
    Sammy(function () {
        this.get('#:view', function (context) {
            switch (context.path) {
                case '/#monitor':
                    setDefaultMenu();
                    vmViewIndex.menu.name('Monitor');
                    vmViewIndex.menu.monitor(true);
                    toggleSlideMobile();
                    break;
                case '/#setup':
                    //vmViewIndex.setup.showLoading(true); //Added and End by SMILEDINING-SA21-0066#5 //Modified and End by SMILEDINING-SA21-0081
                    //loadingShimmer(true, 'Setup');//Added and End by SMILEDINING-SA21-0081 //Modified and End by SMILEDINING-SA21-0081#1
                    //loadingShimmer(true, cGridSetup); //Added and End by SMILEDINING-SA21-0081#1 //Modified and End by SMILEDINING-SA22-0008#6
                    //Added by SMILEDINING-SA22-0008#6
                    if ($('.shimmer-setup').css('display') == 'none') {
                        loadingShimmer(true, cGridSetup);
                    }
                    //End Added by SMILEDINING-SA22-0008#6
                    vmViewIndex.setup.resetFilterDataGridSetUp(); //Added and End by WEB-SA23-0025
                    getAllAccount(); //Added and End by SMILEDINING-SA21-0065
                    setDefaultMenu();
                    vmViewIndex.menu.name('Setup');
                    vmViewIndex.menu.setup(true);
                    toggleSlideMobile();
                    break;
                case '/#owner':
                    setDefaultMenu();
                    vmViewIndex.menu.name('Owner');
                    vmViewIndex.menu.owner(true);
                    toggleSlideMobile();
                    break;
                //Added by SMILEDINING-SA18-0011
                case '/#webreport':
                    setDefaultMenu();
                    vmViewIndex.menu.name('Web Report');
                    vmViewIndex.menu.webreport(true);
                    toggleSlideMobile();
                    $('.slickWebReport').slick('setPosition');
                    break;
                //End Added by SMILEDINING-SA18-0011
                //Added by SMILEDINING-SA18-0010
                case '/#summary':
                    //isLoading(true);                    //Added and End by SMILECONTACTLESS-SA20-0001 //Modified and End by SMILEDINING-SA21-0081
                    //loadingShimmer(true, 'Summary');      //Added and End by SMILEDINING-SA21-0081 //Modified and End by SMILEDINING-SA21-0081#1
                    loadingShimmer(true, cGridSummary);   //Added and End by SMILEDINING-SA21-0081#1
                    vmViewIndex.summary.resetFilterDataGrid(); //Added and End by WEB-SA23-0013
                    fetchObj(cfrmSummaryGetData);       //Added and End by SMILEDINING-SA20-0029
                    setDefaultMenu();
                    vmViewIndex.menu.name('Summary');
                    vmViewIndex.menu.summary(true);
                    toggleSlideMobile();
                    //isLoading(false);                   //Added and End by SMILECONTACTLESS-SA20-0001 //Modified and End by SMILEDINING-SA21-0081
                    break;
                //End Added by SMILEDINING-SA18-0010
                //case '/#setting':
                //    modalShow(cModalSetting);
                //    break;
                //case '/#logout':
                //Added by SMILEDINING-SA19-0011
                case '/#egiftcard':
                    setDefaultMenu();
                    vmViewIndex.menu.name('E-Gift Card');
                    vmViewIndex.menu.egiftcard(true);
                    toggleSlideMobile();
                    break;
                //End Added by SMILEDINING-SA19-0011
                //Added by SMILEDINING-SA21-0063
                case '/#log':
                    setDefaultMenu();
                    vmViewIndex.menu.name('Log');
                    vmViewIndex.menu.log(true);
                    toggleSlideMobile();
                    break;
                //End Added by SMILEDINING-SA21-0063
                //Added by SMILEDINING-SA22-0017
                case '/#autoupdate':
                    vmViewIndex.autoUpdate.resetFilterDataGridAutoUpdate(); //Added and End by WEB-SA23-0049#1
                    setDefaultMenu();
                    vmViewIndex.menu.name('Auto Update');
                    vmViewIndex.menu.autoUpdate(true);
                    toggleSlideMobile();
                    break;
                //End Added by SMILEDINING-SA22-0017
                //Added by SMILEDINING-SA21-0080#2
                case '/#marketingService':
                    //Modified by SMILEDINING-SA21-0081
                    //isLoading(true);  
                    //var data = getMarketingObjFormAjax(cfrmMarketingServiceGetData);
                    //ko.mapping.fromJSON(data.Result, {}, vmViewIndex.marketingService.data);
                    //setDefaultMenu();
                    //vmViewIndex.menu.name('MarketingService');
                    //vmViewIndex.menu.marketingService(true);
                    //toggleSlideMobile();
                    //isLoading(false);
                    //End Modified by SMILEDINING-SA21-0081
                    //Added by SMILEDINING-SA21-0081
                    setDefaultMenu();
                    vmViewIndex.menu.name('MarketingService');
                    vmViewIndex.menu.marketingService(true);
                    //loadingShimmer(true, 'Marketing'); //Modified and End by SMILEDINING-SA21-0081#1
                    loadingShimmer(true, cGridMarketing); //Added and End by SMILEDINING-SA21-0081#1
                    getMarketingObjFormAjax(cfrmMarketingServiceGetData);
                    toggleSlideMobile();
                    //End Added by SMILEDINING-SA21-0081
                    break;
                //End Added by SMILEDINING-SA21-0080#2
                //Added by SMILEDINING-SA22-0022
                case '/#deliveryBilling':
                    vmViewIndex.deliveryBilling.dataConvertFileModal.isConvertFile(false); //Added and End by WEB-SA23-0049
                    //Added by WEB-SA23-0013#4
                    loadingShimmer(true, cGridDeliveryBilling);
                    vmViewIndex.deliveryBilling.resetFilterDataGrid(true);
                    fetchObj(cfrmDeliveryBillingGetData);
                    //End Added by WEB-SA23-0013#4
                    setDefaultMenu();
                    vmViewIndex.menu.name('DeliveryBilling');
                    vmViewIndex.menu.deliveryBilling(true);
                    toggleSlideMobile();
                    break;
                //End Added by SMILEDINING-SA22-0022
                //Added by WEB-SA23-0056
                case '/#report':
                    //Modified by WEB-SA24-0002
                    //loadingShimmer(true, cGridRpServiceFee);
                    //vmViewIndex.report.resetFilterDataGridRpServiceFee();
                    //fetchObj(cfrmRpServiceFeeGetData);
                    //End Modified by WEB-SA24-0002
                    //Added by WEB-SA24-0002
                    vmViewIndex.report.valSelectReport(0);
                    vmViewIndex.report.valSelectReport(reports.cServiceFee);
                    //End Added by WEB-SA24-0002
                    setDefaultMenu();
                    vmViewIndex.menu.name('Report');
                    vmViewIndex.menu.report(true);
                    toggleSlideMobile();
                    break;
                //End Added by WEB-SA23-0056
                //Added by WEB-SA24-0029
                case '/#personnel':                    
                    loadingShimmer(true, cGridPersonnel);
                    fetchObj(cfrmPersonnelGetData);
                    setDefaultMenu();
                    vmViewIndex.menu.name('Personnel');
                    vmViewIndex.menu.personnel(true);
                    toggleSlideMobile();
                    break;
                //End Added by WEB-SA24-0029
                default:
            }
        });
    }).run('');

    $('.slickSetup').slick({
        arrow: false,
        dots: true,
        infinite: false,
        touchMove: false,
        swipe: false,
        slidesToShow: 1,
        slidesToScroll: 1,
    });

    //Added by SMILEDINING-SA18-0011
    $('.slickWebReport').slick({
        arrow: false,
        dots: true,
        infinite: false,
        touchMove: false,
        swipe: false,
        slidesToShow: 1,
        slidesToScroll: 1,
    });
    //End Added by SMILEDINING-SA18-0011

    //Submit Form
    $(document).on('submit', 'form', function (e) {
        if (!checkInternetConnection()) {
            var objAlert = new ObjAlert(formId, cError_Fail_NoInternet, false);
            objAlert.getAlert();
            return false;
        };

        var form = $(this);
        var formId = form.attr('id');
        var parent = $(this).parent();
        var objValidate = new ObjValidateForm(formId, parent);
        //var status = $(document.activeElement).val(); //Modified and End by WEB-SA24-0015
        //Added by WEB-SA24-0015
        var status = '';
        if (isSafari()) {
            var targetButton = $(e.target).find('button[type=submit]');
            ko.utils.arrayForEach(targetButton, function (item) {
                if ($(item).is(":visible") == true && (item.value == cStatusAdd || item.value == cStatusUpdate || item.value == cStatusSearch || item.value == cStatusResend)) {
                    status = item.value;
                }
            });
        }
        else {
            status = $(document.activeElement).val();
        }
        //End Added by WEB-SA24-0015
        objValidate.verifyData();
        if (objValidate.error.length > 0) {
            if (objValidate.showAlert) {
                var messageError = convertArrToString(objValidate.error);
                swal(cSwal_Alert_Error, replaceNewLineToBr(messageError), cSwal_Icon_Error);
            }
            return false;
        } else {

            addSpinButton(formId);
            var serializedForm = $(this).serialize();
            var objUrl = new ObjUrl(formId, status);
            var requestUrl = objUrl.getUrlSubmitForm();
            if (isEmpty(requestUrl)) {
                swal(cSwal_Alert_Error, cError_Dev_Url, cSwal_Icon_Error);
                return false;
            }
            //Added by WEB-SA23-0008
            if (!checkMqttConnection(formId, status)) {
                swal(cSwal_Alert_Error, cError_Fail_Mqtt_Connection, cSwal_Icon_Error);
                removeSpinButton(formId);
                vmViewIndex.isKiosk(false);
                return false;
            }
            //End Added by WEB-SA23-0008
            //Added By SMILEDINING-SA20-0005
            if (cfrmSetUpDomain == formId) {
                //Added by WEB-SA24-0024
                if (vmViewIndex.setup.dataModal.webDispatch() != null && vmViewIndex.setup.dataModal.dispatchType() == cDispatchType_DoorDash && vmViewIndex.setup.dataModal.active()) {
                    var address = parent.find(cfrmSetUpDomain_ShopAddress).val();
                    var addressPlaceId = parent.find(cfrmSetUpDomain_ShopAddress_PlaceId).val(); //Added and End by WEB-SA24-0024#5
                    var postTal = parent.find(cfrmSetUpDomain_ShopPostal).val();
                    //Added by WEB-SA24-0024#4
                    getPlacePredictions(address, function (predictions) {
                        if (!isEmpty(predictions) && predictions.length > 0) {
                            var prediction = _.find(predictions, function (e) {
                                return e.description.toUpperCase() == address.toUpperCase();
                            });
                            //var placeId = !isEmpty(prediction) ? prediction.place_id : null; //Modified and End by WEB-SA24-0024#5
                            //Added by WEB-SA24-0024#5
                            var placeId = !isEmpty(prediction) ? prediction.place_id : 
                                          !isEmpty(addressPlaceId) ? addressPlaceId : null;
                            //End Added by WEB-SA24-0024#5
                            if (isEmpty(placeId)) { 
                                parent.find(cfrmSetUpDomain_ShopAddress).addClass(cCssInputValidateError);
                                swal(cSwal_Alert_Error, cError_ShopAddress_Fail, cSwal_Icon_Error);
                                removeSpinButton(formId);
                                return false;
                            }

                            getGeoData(placeId, '', function (geoResults) {
                                if (!isEmpty(geoResults.formatted_address) && geoResults.formatted_address.toUpperCase() != address.toUpperCase()
                                    || !isEmpty(geoResults.postal_code) && geoResults.postal_code != postTal
                                    || !address.includes(geoResults.postal_code)
                                ) {
                                    parent.find(cfrmSetUpDomain_ShopAddress).addClass(cCssInputValidateError);
                                    swal(cSwal_Alert_Error, cError_ShopAddress_Fail, cSwal_Icon_Error);
                                    removeSpinButton(formId);
                                    return false;
                                }
                                checkProductUpdate(requestUrl, serializedForm, formId, objValidate);
                            });
                        } else {
                            parent.find(cfrmSetUpDomain_ShopAddress).addClass(cCssInputValidateError);
                            swal(cSwal_Alert_Error, cError_ShopAddress_Fail, cSwal_Icon_Error);
                            removeSpinButton(formId);
                            return false;
                        }
                    });
                    //End Added by WEB-SA24-0024#4
                    //Modified by WEB-SA24-0024#4
                    ////Added by WEB-SA24-0024#2
                    //var city = parent.find(cfrmSetUpDomain_ShopCity).val();
                    //var state = parent.find(cfrmSetUpDomain_ShopState).val();
                    ////End Added by WEB-SA24-0024#2
                    ////Added by WEB-SA24-0024#3
                    //getPlacePredictions(address, function (prediction) {
                    //    if (prediction.description != address) {
                    //        parent.find(cfrmSetUpDomain_ShopAddress).addClass(cCssInputValidateError);
                    //        swal(cSwal_Alert_Error, cError_ShopAddress_Fail, cSwal_Icon_Error);
                    //        removeSpinButton(formId);
                    //        return false;
                    //    }
                    //    getGeoData(prediction.description, cGeoByAddress, function (result) {
                    //        if (!isEmpty(result.postal_code) && result.postal_code != postTal) {
                    //            parent.find(cfrmSetUpDomain_ShopAddress).addClass(cCssInputValidateError);
                    //            swal(cSwal_Alert_Error, cError_ShopAddress_Fail, cSwal_Icon_Error);
                    //            removeSpinButton(formId);
                    //            return false;
                    //        }
                    //        checkProductUpdate(requestUrl, serializedForm, formId, objValidate);
                    //    });
                    //});
                    ////End Added by WEB-SA24-0024#3
                    //End Modified by WEB-SA24-0024#4
                    //Modified by WEB-SA24-0024#3
                    ////Added by WEB-SA24-0024#1
                    //getGeoData(address, cGeoByAddress, function (result) {
                    //    if ((!isEmpty(result.formatted_address) && result.formatted_address != address)
                    //        || (!isEmpty(result.postal_code) && result.postal_code != postTal)
                    //        || (isEmpty(city) || isEmpty(state))) { //Added and End by WEB-SA24-0024#2
                    //        parent.find(cfrmSetUpDomain_ShopAddress).addClass(cCssInputValidateError);
                    //        swal(cSwal_Alert_Error, cError_ShopAddress_Fail, cSwal_Icon_Error);
                    //        removeSpinButton(formId);
                    //        return false;
                    //    }
                    //    checkProductUpdate(requestUrl, serializedForm, formId, objValidate);
                    //});
                    ////End Added by WEB-SA24-0024#1
                    //End Modified by WEB-SA24-0024#3
                } else {
                    checkProductUpdate(requestUrl, serializedForm, formId, objValidate);
                }
                //End Added by WEB-SA24-0024
                //Modified by WEB-SA24-0024
                //var currentProductId = vmViewIndex.setup.dataModal.currentProductId();
                //var newProductId = vmViewIndex.setup.dataModal.productId();
                //End Modified by WEB-SA24-0024
                //Modified by WEB-SA22-0064
                //var checkProduct = true;
                //if (currentProductId.includes('2') || currentProductId.includes('4')) {
                //    if (newProductId.includes('2') || newProductId.includes('4')) {
                //        checkProduct = true;
                //    }
                //    else {
                //        checkProduct = false;
                //    }
                //}
                //if (!checkProduct) {
                //    swal(cSwal_Alert_Error, 'Please select product Smile Dining or Smile Contactless Dining or Both.', cSwal_Icon_Error);
                //}
                //else if (currentProductId != newProductId && newProductId != "") {
                //End Modified by WEB-SA22-0064
                //Modified by WEB-SA24-0024
                //if (currentProductId != newProductId && newProductId != "") { //Added and End by WEB-SA22-0064
                //    swal({
                //        title: 'Are you sure, you want to save?',
                //        type: 'question',
                //        showCancelButton: true,
                //        confirmButtonText: 'Yes',
                //        cancelButtonText: 'No',
                //        closeOnConfirm: false,
                //        closeOnCancel: false,
                //        confirmButtonClass: 'btn theme default-button',
                //        cancelButtonClass: 'btn btn-danger'
                //    }).then(function () {
                //        ajaxForm(requestUrl, serializedForm, formId, objValidate);
                //    }, function (dismiss) {
                //        if (dismiss === 'cancel') {
                //            removeSpinButton(formId);
                //            vmViewIndex.isKiosk(false); //Added and End by WEB-SA23-0008#1
                //        }
                //    });
                //}
                //else {
                //    ajaxForm(requestUrl, serializedForm, formId, objValidate);
                //}
                //End Modified by WEB-SA24-0024
                //Modified by SMILEDINING-SA21-0081
                //} else { 
                //    ajaxForm(requestUrl, serializedForm, formId, objValidate);
                //}
                //End Modified by SMILEDINING-SA21-0081
                //Added by SMILEDINING-SA21-0081
            } else if (formId == cfrmMonitorSelectDate) {
                //loadingShimmer(true, 'Monitor'); //Modified and End by SMILEDINING-SA21-0081#1
                loadingShimmer(true, cGridMonitor); //Added and End by SMILEDINING-SA21-0081#1
                ajaxForm(requestUrl, serializedForm, formId, objValidate);
            } else if (formId == cfrmLogSelectStore) {
                //loadingShimmer(true, 'Log'); //Modified and End by SMILEDINING-SA21-0081#1
                loadingShimmer(true, cGridLog); //Added and End by SMILEDINING-SA21-0081#1
                ajaxForm(requestUrl, serializedForm, formId, objValidate);
            }
            else {
                ajaxForm(requestUrl, serializedForm, formId, objValidate);
            }
            //End Added by SMILEDINING-SA21-0081
            //End Added By SMILEDINING-SA20-0005


            //Modified by SMILECONTACTLESS-SA20-0001
            //var ajaxForm = $.ajax({
            //    url: requestUrl,
            //    async: ajax_async,
            //    cache: ajax_cache,
            //    type: ajax_type_post,
            //    data: serializedForm,
            //    timeout: ajax_timeout, // timeout after 60 seconds
            //});

            //ajaxForm.done(function (result) {
            //    removeSpinButton(formId);
            //    if (result.status) {
            //        afterSubmitForm(formId, result);
            //    }
            //    if (objValidate.showAlert) {
            //        //if (formId == cfrmPayOrder || formId == cfrmConfirmPayment || formId == cfrmDiscount) {
            //        if(false){
            //            if (!result.status) {
            //                var objAlert = new ObjAlert(formId, result.message, result.status);
            //                objAlert.getAlert();
            //            }
            //        }
            //        else {
            //            if (formId == cfrmLogIn) {
            //                grecaptcha.reset();
            //            }
            //            var objAlert = new ObjAlert(formId, result.message, result.status);
            //            objAlert.getAlert();
            //        }
            //    }
            //});

            //ajaxForm.fail(function (result) {
            //    removeSpinButton(formId);
            //    var objAlert = new ObjAlert(formId, cError_Fail_TimeOut, false);
            //    objAlert.getAlert();
            //});
            //End Modified by SMILECONTACTLESS-SA20-0001
        }
        return false;
    });

    //Added by WEB-SA24-0024
    function checkProductUpdate(requestUrl, serializedForm, formId, objValidate) {
        var currentProductId = vmViewIndex.setup.dataModal.currentProductId();
        var newProductId = vmViewIndex.setup.dataModal.productId();
        if (currentProductId != newProductId && newProductId != "") {
            swal({
                title: 'Are you sure, you want to save?',
                type: 'question',
                showCancelButton: true,
                confirmButtonText: 'Yes',
                cancelButtonText: 'No',
                closeOnConfirm: false,
                closeOnCancel: false,
                confirmButtonClass: 'btn theme default-button',
                cancelButtonClass: 'btn btn-danger'
            }).then(function () {
                ajaxForm(requestUrl, serializedForm, formId, objValidate);
            }, function (dismiss) {
                if (dismiss === 'cancel') {
                    removeSpinButton(formId);
                    vmViewIndex.isKiosk(false);
                    return false;
                }
            });
        }
        else {
            ajaxForm(requestUrl, serializedForm, formId, objValidate);
        }
    };
    //End Added by WEB-SA24-0024

    //Added by SMILECONTACTLESS-SA20-0001
    function ajaxForm(requestUrl, serializedForm, formId, objValidate) {
        vmViewIndex.disableButtonSubmit(true); //Added and End by WEB-SA24-0029
        var ajaxForm = $.ajax({
            url: requestUrl,
            async: ajax_async,
            cache: ajax_cache,
            type: ajax_type_post,
            data: serializedForm,
            timeout: ajax_timeout, // timeout after 60 seconds
        });

        ajaxForm.done(function (result) {
            removeSpinButton(formId);
            vmViewIndex.disableButtonSubmit(false); //Added and End by WEB-SA24-0029
            if (result.status) {
                afterSubmitForm(formId, result);
            }
            if (objValidate.showAlert) {
                //if (formId == cfrmPayOrder || formId == cfrmConfirmPayment || formId == cfrmDiscount) {
                if (false) {
                    if (!result.status) {
                        var objAlert = new ObjAlert(formId, result.message, result.status);
                        objAlert.getAlert();
                    }
                }
                else {
                    //Modified by WEB-SA23-0002
                    //if (formId == cfrmLogIn) {
                    //    grecaptcha.reset();
                    //}
                    //End Modified by WEB-SA23-0002
                    //Added by WEB-SA23-0002#1
                    if (!result.status) {
                        if (formId == cfrmLogIn) {
                            //Modified by WEB-SA24-0025#1
                            //if (vmViewIndex.captchaEnable()) //Added and End by WEB-SA23-0002#4
                            //    turnstile.reset();
                            //End Modified by WEB-SA24-0025#1
                            resetCaptCha(); //Added and End by WEB-SA24-0025#1
                        }
                    }
                    //End Added by WEB-SA23-0002#1
                    var objAlert = new ObjAlert(formId, result.message, result.status);
                    objAlert.getAlert();
                }
            }
            vmViewIndex.isKiosk(false); //Added and End by WEB-SA23-0008
        });

        ajaxForm.fail(function (result) {
            removeSpinButton(formId);
            vmViewIndex.disableButtonSubmit(false); //Added and End by WEB-SA24-0029
            if (formId == cfrmMonitorSelectDate) loadingShimmer(false, cGridMonitor); //Added and End by SMILEDINING-SA22-0028
            var objAlert = new ObjAlert(formId, cError_Fail_TimeOut, false);
            objAlert.getAlert();
            vmViewIndex.isKiosk(false); //Added and End by WEB-SA23-0008
        });
    }
    //End Added by SMILECONTACTLESS-SA20-0001

    //Add Slide Swipe
    $('nav.nav-mobile').slideAndSwipe();

    changeDateBoxOnMonitor();

    /*Resize browser*/
    $(window).resize(function (e) {
        changeDateBoxOnMonitor();
    });

    //Protobuf & Signalr
    if (typeof dcodeIO === 'undefined' || !dcodeIO.ProtoBuf) {
        throw (new Error("ProtoBuf.js is not present. Please see www/index.html for manual setup instructions."));
    }

    try {

        var path = $('#protobuf-path').val();
        var protobuf = dcodeIO.ProtoBuf;
        var builder = protobuf.newBuilder({ convertFieldsToCamelCase: true });
        protobuf.loadProtoFile(path, builder);
        var root = builder.build();

        //Specific support only qs = type string.
        $.connection.hub.url = cGlobal_url;
        $.connection.hub.qs = { 'groupId': 'SUPPORT', 'application': cGlobal_application };
        //$.connection.hub.start({ transport: ['webSockets', 'longPolling'] })
        //call client before start();
        //Added by SMILEDINING-SA22-0017
        try { //Added and End by SMILEDINING-SA22-0017#8
            $.connection.checkout.client.sendUpdateToMonitor = function (groupId, data) {
                setAutoUpdate(groupId, data);
            };
        } catch (e) { } //Added and End by SMILEDINING-SA22-0017#8
        //End Added by SMILEDINING-SA22-0017

        try { //Added and End by SMILEDINING-SA22-0017#8
            $.connection.checkout.client.sendRestaurantJustOnline = function (groupId) {
                if (vmViewIndex.shopOnline.data().length != 0) {
                    var filter = ko.utils.arrayFilter(vmViewIndex.shopOnline.data(), function (item) {
                        return item.domainId() == groupId;
                    });
                    var index = vmViewIndex.shopOnline.data.indexOf(_.head(filter));
                    if (index != -1) {
                        vmViewIndex.shopOnline.data()[index].online(true);
                    }
                }
            };
        } catch (e) { } //Added and End by SMILEDINING-SA22-0017#8

        try { //Added and End by SMILEDINING-SA22-0017#8
            $.connection.checkout.client.sendRestaurantJustOffline = function (groupId) {
                if (vmViewIndex.shopOnline.data().length != 0) {
                    var filter = ko.utils.arrayFilter(vmViewIndex.shopOnline.data(), function (item) {
                        return item.domainId() == groupId;
                    });
                    var index = vmViewIndex.shopOnline.data.indexOf(_.head(filter));
                    if (index != -1) {
                        vmViewIndex.shopOnline.data()[index].online(false);
                        toastShopOffline(vmViewIndex.shopOnline.data()[index].domainName());
                        //playSound(cSoundOffline); //Modified and End by WEB-SA24-0024
                    }
                }
            };
        } catch (e) { } //Added and End by SMILEDINING-SA22-0017#8

        try { //Added and End by SMILEDINING-SA22-0017#8
            $.connection.checkout.client.sendRestaurantOnline = function (group) {
                if (vmViewIndex.shopOnline.data().length != 0) {
                    _.forEach(group, function (value) {
                        var filter = ko.utils.arrayFilter(vmViewIndex.shopOnline.data(), function (item) {
                            return item.domainId() == value;
                        });
                        var index = vmViewIndex.shopOnline.data.indexOf(_.head(filter));
                        if (index != -1) {
                            vmViewIndex.shopOnline.data()[index].online(true);
                        }
                    });
                }
            };
        } catch (e) { } //Added and End by SMILEDINING-SA22-0017#8

        try { //Added and End by SMILEDINING-SA22-0017#8
            $.connection.checkout.client.sendTicketToMonitor = function (groupId, ticketId, flag) {
                //if (isToday()) { //Modified and End by SMILEDINING-SA22-0028
                if (isToday() && vmViewIndex.monitor.valueArrProduct() == products.cSmileDining && vmViewIndex.monitor.domainId() == groupId) { //Added and End by SMILEDINING-SA22-0028
                    if (vmViewIndex.monitor.data().length == 0) {
                        var monitor = getObjDomainFormAjax(cJsonMonitorGetData, groupId, ticketId);
                        var data = _.head(ko.mapping.fromJSON(monitor)());
                        data.send(flag);
                        vmViewIndex.monitor.data.unshift(data);
                    } else {
                        var filter = ko.utils.arrayFilter(vmViewIndex.monitor.data(), function (item) {
                            return item.ticketId() == ticketId && item.domainId() == groupId;
                        });
                        var index = vmViewIndex.monitor.data.indexOf(_.head(filter));
                        if (index != -1) {
                            vmViewIndex.monitor.data()[index].send(flag);
                            refreshGrid(cGridMonitor);
                        } else {
                            var monitor = getObjDomainFormAjax(cJsonMonitorGetData, groupId, ticketId);
                            var data = _.head(ko.mapping.fromJSON(monitor)());
                            data.send(flag);
                            vmViewIndex.monitor.data.unshift(data);
                        }
                    }
                    //playSound(cSoundReceive); //Modified and End by WEB-SA24-0024
                }
                //กรณีไม่ได้อยู่ใน menu monitor ต้องแสดง bagae
            };
        } catch (e) { } //Added and End by SMILEDINING-SA22-0017#8

        try { //Added and End by SMILEDINING-SA22-0017#8
            $.connection.checkout.client.sendTicketUpdateToMonitor = function (groupId, ticketId) {
                //if (isToday()) { //Modified and End by SMILEDINING-SA22-0028
                if (isToday() && vmViewIndex.monitor.valueArrProduct() == products.cSmileDining && vmViewIndex.monitor.domainId() == groupId) { //Added and End by SMILEDINING-SA22-0028
                    if (vmViewIndex.monitor.data().length > 0) {
                        var filter = ko.utils.arrayFilter(vmViewIndex.monitor.data(), function (item) {
                            return item.ticketId() == ticketId && item.domainId() == groupId;
                        });
                        var index = vmViewIndex.monitor.data.indexOf(_.head(filter));
                        if (index != -1) {
                            var monitor = getObjDomainFormAjax(cJsonMonitorGetData, groupId, ticketId);
                            var data = _.head(ko.mapping.fromJSON(monitor)());
                            vmViewIndex.monitor.data.replace(vmViewIndex.monitor.data()[index], data);
                            refreshGrid(cGridMonitor);
                        }
                    }
                }
            };
        } catch (e) { } //Added and End by SMILEDINING-SA22-0017#8

        try { //Added and End by SMILEDINING-SA22-0017#8
            $.connection.checkout.client.sendConfirmTicketToMonitor = function (groupId, ticketId) {
                if (isToday()) {
                    if (vmViewIndex.monitor.data().length > 0) {
                        var filter = ko.utils.arrayFilter(vmViewIndex.monitor.data(), function (item) {
                            return item.ticketId() == ticketId && item.domainId() == groupId;
                        });
                        var index = vmViewIndex.monitor.data.indexOf(_.head(filter));
                        if (index != -1) {
                            vmViewIndex.monitor.data()[index].confirm(true);
                            refreshGrid(cGridMonitor);
                        }
                    }
                }
            };
        } catch (e) { } //Added and End by SMILEDINING-SA22-0017#8

        try { //Added and End by SMILEDINING-SA22-0017#8
            $.connection.checkout.client.sendVoidToMonitor = function (groupId, ticketId) {
                if (isToday()) {
                    if (vmViewIndex.monitor.data().length > 0) {
                        var filter = ko.utils.arrayFilter(vmViewIndex.monitor.data(), function (item) {
                            return item.ticketId() == ticketId && item.domainId() == groupId;
                        });
                        var index = vmViewIndex.monitor.data.indexOf(_.head(filter));
                        if (index != -1) {
                            vmViewIndex.monitor.data()[index].ticketStatus('V');
                            refreshGrid(cGridMonitor);
                        }
                    }
                }
            };
        } catch (e) { } //Added and End by SMILEDINING-SA22-0017#8

        try { //Added and End by SMILEDINING-SA22-0017#8
            $.connection.checkout.client.spSendDomainAdd = function (domainId) {
                var dataSetup = getObjFormAjax(cfrmSetUpGetDataByKey, domainId);
                setDomain(dataSetup, cStatusAdd);
            };
        } catch (e) { } //Added and End by SMILEDINING-SA22-0017#8

        try { //Added and End by SMILEDINING-SA22-0017#8
            $.connection.checkout.client.spSendDomainUpdate = function (domainId) {
                var dataSetup = getObjFormAjax(cfrmSetUpGetDataByKey, domainId);
                setDomain(dataSetup, cStatusUpdate);
            };
        } catch (e) { } //Added and End by SMILEDINING-SA22-0017#8

        try { //Added and End by SMILEDINING-SA22-0017#8
            $.connection.checkout.client.spSendOwnerAdd = function (customerId) {
                var dataOwner = getObjFormAjax(cfrmOwnerGetDataByKey, customerId);
                setOwner(dataOwner, cStatusAdd);
            };
        } catch (e) { } //Added and End by SMILEDINING-SA22-0017#8

        try { //Added and End by SMILEDINING-SA22-0017#8
            $.connection.checkout.client.spSendOwnerUpdate = function (customerId) {
                var dataOwner = getObjFormAjax(cfrmOwnerGetDataByKey, customerId);
                setOwner(dataOwner, cStatusUpdate);
            };
        } catch (e) { } //Added and End by SMILEDINING-SA22-0017#8

        //Added by SMILEDINING-SA18-0008
        try { //Added and End by SMILEDINING-SA22-0017#8
            $.connection.checkout.client.returnIncompleteSendOrder = function (groupId, ticketId) {
                getObjSendFailFormAjax(cJsonSendFail, groupId, ticketId);
            };
        } catch (e) { } //Added and End by SMILEDINING-SA22-0017#8
        //End Added by SMILEDINING-SA18-0008

        $.connection.hub.start({ transport: ['longPolling'] })
            .done(function () {
                _signalConnect = true;
                $.connection.checkout.server.joinGroup(key, 'SUPPORT');
                if (!isEmpty(varAuthenticated)) {
                    $.connection.checkout.server.getShopOnline(key);
                }
                console.log('connection started!');
            })
            .fail(function () {
                _signalConnect = false;
                console.log('Could not Connect!');
            });

        $.connection.hub.disconnected(function () {
            setTimeout(function () {
                $.connection.hub.start();
            }, 5000); // Restart connection after 5 seconds.
        });

        $.connection.hub.stateChanged(function (change) {
            if (change.newState === $.signalR.connectionState.reconnecting) {
                _signalConnect = false;
                console.log('Server is unreachable, trying to reconnect...');
            }
            else if (change.newState === $.signalR.connectionState.connected) {
                _signalConnect = true;
                console.log('Server reconnected, reinitialize');
            }
        });
    } catch (e) {
        //location.href = serverMaintenance;
        console.log('error servermaintenace');
    }

    //Modified by SMILEDINING-SA22-0017#4
    //$("input[type='text']").on("click", function () {
    //    $(this).select();
    //});
    //End Modified by SMILEDINING-SA22-0017#4

    setMaskPhone();
    //setGeoLocation(); //Modified and End by WEB-SA24-0024#3
    signOutFirebase();      //Added and End by SMILEDINING-SA18-0011
    setUpKeepAlive(); //Added and End by SMILEDINING-SA22-0027
    setBlockEmoji(); //Added and End by WEB-SA24-0029#1

    //Loading Success
    setTimeout(function () {
        $('body').addClass('loaded');
        $('.viewLoading').removeClass('gb_hidden');

        var ie = checkVersionIE();
        if (!isEmpty(ie)) {
            if (ie < 11) {
                $('#browserVerionModel').modal('show');
            }
        }
    }, 1000);

    function afterSubmitForm(frmName, result) {
        switch (frmName) {
            case cfrmLogIn:
                ko.mapping.fromJSON(result.obj, {}, vmViewIndex.customer);
                getData();
                if (_signalConnect) {
                    $.connection.checkout.server.getShopOnline(key);
                }
                vmViewIndex.showLogin(false);
                vmViewIndex.showMenu(true);
                break;
            case cfrmMonitorSelectDate:
                ko.mapping.fromJSON(result.obj, {}, vmViewIndex.monitor.data);
                //loadingShimmer(false, 'Monitor');   //Added and End by SMILEDINING-SA21-0081  //Modified and End by SMILEDINING-SA21-0081#1
                loadingShimmer(false, cGridMonitor);  //Added and End by SMILEDINING-SA21-0081#1
                break;
            case cfrmMonitorResend:
                resend(result);
                break;
            case cfrmSetUpDomain:
                if (result.transaction.toUpperCase() == cStatusAdd) {
                    var domainId = setDomain(result.obj, result.transaction.toUpperCase());
                    if (domainId != null) {
                        $.connection.checkout.server.spDomainAdd(key, domainId);
                    }
                } else if (result.transaction.toUpperCase() == cStatusUpdate) {
                    var domainId = setDomain(result.obj, result.transaction.toUpperCase());
                    if (domainId != null) {
                        $.connection.checkout.server.spDomainUpdate(key, domainId);
                        //Added by WEB-SA23-0008
                        var itemKiosk = !isEmpty(result.objKiosk) ? JSON.parse(result.objKiosk) : null;
                        if (vmViewIndex.isKiosk() && !isEmpty(itemKiosk)) {
                            sendMqtt(itemKiosk, getTopicMqtt(domainId, 'stGlobalConfig'), vmViewIndex.mqttClientId());
                        }
                        //End Added by WEB-SA23-0008
                        //Added by WEB-SA23-0008#1
                        var itemCentreMapKiosk = !isEmpty(result.obj) ? JSON.parse(result.obj) : null;
                        if (vmViewIndex.isKiosk() && !isEmpty(itemCentreMapKiosk)) {
                            sendMqtt(itemCentreMapKiosk, getTopicMqtt(domainId, 'centreMapDomain'), vmViewIndex.mqttClientId());
                        }
                        //End Added by WEB-SA23-0008#1
                    }
                }
                modalHide(cModalSetup);
                break;
            //Added by SMILEDINING-SA21-0007
            case cfrmSetUpUsaEpaySearchDate:
                if (!isEmpty(result.obj)) {
                    var data = JSON.parse(result.obj);
                    if (data != null) {
                        ko.mapping.fromJSON(JSON.stringify(data), {}, vmViewIndex.setup.dataSetUpUsaEpaySearchDateModal.data);
                    }
                }
                break;
            //End Added by SMILEDINING-SA21-0007
            case cfrmOwner:
                if (result.transaction.toUpperCase() == cStatusAdd) {
                    var customerId = setOwner(result.obj, result.transaction.toUpperCase());
                    if (customerId != null) {
                        $.connection.checkout.server.spOwnerAdd(key, customerId);
                    }
                } else if (result.transaction.toUpperCase() == cStatusUpdate) {
                    if (result.obj.length > 0) {
                        var customerId = setOwner(result.obj, result.transaction.toUpperCase());
                        if (customerId != null) {
                            $.connection.checkout.server.spOwnerUpdate(key, customerId);
                        }
                    }
                }
                modalHide(cModalOwner);
                break;
            case cfrmChangePassword:
                vmViewIndex.customer.firstName(vmViewIndex.setting.dataModalChangePassword.firstName());
                vmViewIndex.customer.lastName(vmViewIndex.setting.dataModalChangePassword.lastName());
                vmViewIndex.setting.dataModalChangePassword.showPassword(false);
                vmViewIndex.setting.dataModalChangePassword.currentPassword('');
                vmViewIndex.setting.dataModalChangePassword.newPassword('');
                vmViewIndex.setting.dataModalChangePassword.confirmPassword('');
                modalHide(cModalChangePassword);
                break;
            case cfrmCreateAccount:
                //Modified by WEB-SA24-0029
                //modalHide(cModalCreateAccount);
                //resetCreateAccountViewModel();
                //End Modified by WEB-SA24-0029
                vmViewIndex.memberInvite.resetData(); //Added and End by WEB-SA24-0029
                break;
            //Added by SMILEDINING-SA18-0011
            case cfrmWrUser:
                setWrUser(result.obj, result.transaction.toUpperCase());
                modalHide(cModalWrUser);
                resetWrUserViewModel();
                break;
            case cfrmWrUserRoleMap:
                setWrUserRoleMap(result.obj, result.transaction.toUpperCase());
                modalHide(cModalWrUserRoleMap);
                resetWrUserRoleMapViewModel();
                break;
            case cfrmWrRoleMenuMap:
                setWrRoleMenuMap(result.obj, result.transaction.toUpperCase(), result.id);
                modalHide(cModalWrRoleMenuMap);
                resetWrRoleMenuViewModel();
                break;
            //End Added by SMILEDINING-SA18-0011
            //Added by SMILEDINING-SA19-0023
            case cfrmMonitorVoidTicket:
                var item = JSON.parse(result.obj);
                updateVoidStatusTicketData(item);
                break;
            //End Added by SMILEDINING-SA19-0023
            //Added by SMILEDINING-SA19-0011
            case cfrmGiftCer:
                setGiftCer(JSON.parse(result.obj), result.transaction.toUpperCase());
                modalHide(cModalEgiftCard);
                break; //Added and End by WEB-SA23-0019
            case cfrmGiftCerSearch:
                var type = result.type.toUpperCase();
                if (type == cStatusSearch) {
                    var data = JSON.parse(result.obj);
                    if (data != null) {
                        if (data.giftCer != null && data.giftCerAccount != null && data.giftCerTx != null) {
                            setGiftCerSearch(data.giftCer, data.giftCerAccount, data.giftCerTx);
                        }
                    }
                } else if (type == cStatusResend) {
                    modalHide(cModalEgiftCardSearch);
                }
                break; //Added and End by WEB-SA23-0019
            case cfrmGiftCerSearchDate:
                var type = result.type.toUpperCase();
                if (type == cStatusSearch) {
                    if (!isEmpty(result.obj)) {
                        var data = JSON.parse(result.obj);
                        if (data != null) {
                            setGiftCerSearchDate(data);
                        }
                    }
                } else if (type == cStatusResend) {
                    modalHide(cModalEgiftCardSearchDate);
                }
                break; //Added and End by SMILEDINING-SA22-0023
            //modalHide(cModalEgiftCardSearch);
            //End Added by SMILEDINING-SA19-0011
            //Added by SMILEDINING-SA20-0031#4
            case cfrmShopClose:
                item = JSON.parse(result.obj);
                val = result.txtValue;
                setShopClose(item, val);
                //Added by WEB-SA23-0008
                var itemKiosk = !isEmpty(result.objKiosk) ? JSON.parse(result.objKiosk) : null;
                if (vmViewIndex.isKiosk() && !isEmpty(itemKiosk)) {
                    sendMqtt(itemKiosk, getTopicMqtt(result.domainId, 'stShopClose'), vmViewIndex.mqttClientId());
                }
                //End Added by WEB-SA23-0008
                break;
            //End Added by SMILEDINING-SA20-0031#4
            //Added by SMILEDINING-SA21-0063
            case cfrmLogSelectStore:
                vmViewIndex.log.domainName(result.domainName); //Added and End by SMILEDINING-SA21-0063#9
                ko.mapping.fromJSON(result.obj, {}, vmViewIndex.log.data);
                //loadingShimmer(false, 'Log');   //Added and End by SMILEDINING-SA21-0081 //Modified and End by SMILEDINING-SA21-0081#1
                loadingShimmer(false, cGridLog); //Added and End by SMILEDINING-SA21-0081#1
                break;
            //End Added by SMILEDINING-SA21-0063
            default:
                break;
        }
    };

    function getData() {
        //Modified by SMILEDINING-SA18-0010#01
        //var monitor = getObjFormAjax(cJsonMonitorGetData);
        //var shopOnline = getObjFormAjax(cJsonMonitorGetShopOnline);
        //var dataSetup = getObjFormAjax(cfrmSetUpGetData);
        //var owner = getObjFormAjax(cfrmOwnerGetData);
        //var setup = ko.mapping.fromJSON(dataSetup);
        //var summary = getObjFormAjax(cfrmSummaryGetData);       //Added and End by SMILEDINING-SA18-0010
        //ko.mapping.fromJSON(monitor, {}, vmViewIndex.monitor.data);
        //ko.mapping.fromJSON(shopOnline, {}, vmViewIndex.shopOnline.data);
        //ko.mapping.fromJS(setup.setupData, {}, vmViewIndex.setup.data);
        //ko.mapping.fromJSON(owner, {} , vmViewIndex.owner.data);
        //ko.mapping.fromJSON(summary, {}, vmViewIndex.summary.data);     //Added and End by SMILEDINING-SA18-0010
        //End Modified by SMILEDINING-SA18-0010#01
        //Added by SMILEDINING-SA18-0011
        //Added by SMILEDINING-SA22-0022
        //loadingShimmer(true, cGridMonitor); //Modified and End by SMILEDINING-SA22-0028
        loadingShimmer(true, cGridOwner);
        loadingShimmer(true, cGridEgiftCard);
        loadingShimmer(true, cGridWrUser);
        loadingShimmer(true, cGridWrRoleMenuMap);
        loadingShimmer(true, cGridWrUserRoleMap);
        loadingShimmer(true, cGridAutoUpdate);
        //Modified by WEB-SA23-0013#4
        //if (vmViewIndex.customer.isAccountant()) {
        //    loadingShimmer(true, cGridDeliveryBilling);
        //    fetchObj(cfrmDeliveryBillingGetData); //Added and End by WEB-SA23-0013#1
        //}
        //End Modified by WEB-SA23-0013#4
        //End Added by SMILEDINING-SA22-0022
        fetchObj(cJsonGetWrMenu);
        fetchObj(cJsonGetWrGroupMenu);
        fetchObj(cJsonGetWrCustomer);
        fetchObj(cJsonGetWrUser);
        fetchObj(cJsonGetWrRoleMenuMap);
        fetchObj(cJsonGetWrUserRoleMap);
        fetchObj(cJsonGetWrRole);
        //End Added by SMILEDINING-SA18-0011

        //Added by SMILEDINING-SA18-0010#01
        fetchObj(cJsonMonitorGetShopOnline);
        fetchObj(cfrmSetUpGetData);
        fetchObj(cfrmOwnerGetData);
        //fetchObj(cfrmSummaryGetData);     //Modified and End by  SMILEDINING-SA20-0029

        //fetchObj(cJsonMonitorGetData);  //Added and End by SMILECONTACTLESS-SA20-0001 //Modified and End by SMILEDINING-SA22-0028
        fetchObj(cfrmAutoUpdateGetData); //Added and End by SMILEDINING-SA22-0017
        //Modified by SMILECONTACTLESS-SA20-0001
        //var monitor = getObjFormAjax(cJsonMonitorGetData);
        //ko.mapping.fromJSON(monitor, {}, vmViewIndex.monitor.data);
        //End Modified by SMILECONTACTLESS-SA20-0001
        //End Added by SMILEDINING-SA18-0010#01

        //Modified by SMILEDINING-SA18-0010#01
        //_.forEach(setup.timeZone(), function (value) {
        //    //vmViewIndex.setup.dataModal.dxLookuptimeZoneCode().dataSource._array.push(value)
        //    vmViewIndex.setup.dataModal.store.insert(value);
        //});

        //_.forEach(vmViewIndex.setup.data(), function (value) {
        //    vmViewIndex.owner.dataModal.store.insert(value.centreMapDomain);
        //    //vmViewIndex.owner.dataModal.dxLookupDomain().dataSource._array.push(value.centreMapDomain)
        //});
        //End Modified by SMILEDINING-SA18-0010#01

        vmViewIndex.setting.dataModalChangePassword.email(vmViewIndex.customer.email());
        vmViewIndex.setting.dataModalChangePassword.firstName(vmViewIndex.customer.firstName());
        vmViewIndex.setting.dataModalChangePassword.lastName(vmViewIndex.customer.lastName());
    };

    function setDomain(result, tx) {
        //Modified by SMILEDINING-SA20-0029
        //if (tx == cStatusAdd) {
        //    var data = ko.mapping.fromJSON(result);
        //    var setupData = ko.mapping.fromJS(data.setupData)()[0];
        //    vmViewIndex.setup.data.push(setupData);
        //    refreshGrid(cGridMonitor);
        //    vmViewIndex.owner.dataModal.store.insert(setupData.centreMapDomain);
        //    resetEgiftCard(setupData);  //Added and End by SMILEDINING-SA19-0011
        //    return setupData.centreMapDomain.domainId();
        //} else if (tx == cStatusUpdate) {
        //    var data = ko.mapping.fromJSON(result);
        //    var setupData = ko.mapping.fromJS(data.setupData)()[0];
        //    var filter = ko.utils.arrayFilter(vmViewIndex.setup.data(), function (item) {
        //        return item.centreMapDomain.domainId() == setupData.centreMapDomain.domainId();
        //    });
        //    resetEgiftCard(setupData);  //Added and End by SMILEDINING-SA19-0011
        //    var index = vmViewIndex.setup.data.indexOf(_.head(filter));
        //    if (index != -1) {
        //        vmViewIndex.setup.data.replace(vmViewIndex.setup.data()[index], setupData);
        //        refreshGrid(cGridMonitor);
        //        return setupData.centreMapDomain.domainId();
        //    }
        //}
        //End Modified by SMILEDINING-SA20-0029
        //Added by SMILEDINING-SA20-0029
        if (tx == cStatusAdd) {
            var data = ko.mapping.fromJSON(result);
            //var setupData = ko.mapping.fromJS(data.setupData)()[0]; //Modified and End by SMILEDINING-SA22-0008
            var setupData = ko.mapping.fromJS(data); //Added and End by SMILEDINING-SA22-0008
            vmViewIndex.setup.data.push(setupData);
            refreshGrid(cGridMonitor);
            vmViewIndex.owner.dataModal.store.insert(setupData);
            resetEgiftCard(setupData);
            return setupData.domainId();
        } else if (tx == cStatusUpdate) {
            var data = ko.mapping.fromJSON(result);
            //var setupData = ko.mapping.fromJS(data.setupData)()[0]; //Modified and End by SMILEDINING-SA22-0008
            var setupData = ko.mapping.fromJS(data);  //Added and End by SMILEDINING-SA22-0008
            var filter = ko.utils.arrayFilter(vmViewIndex.setup.data(), function (item) {
                return item.domainId() == setupData.domainId();
            });
            resetEgiftCard(setupData);
            var index = vmViewIndex.setup.data.indexOf(_.head(filter));
            if (index != -1) {
                vmViewIndex.setup.data.replace(vmViewIndex.setup.data()[index], setupData);
                refreshGrid(cGridMonitor);
                return setupData.domainId();
            }
        }
        //End Added by SMILEDINING-SA20-0029
        return null;
    };

    //Added by SMILEDINING-SA19-0011
    function resetEgiftCard(setupData) {
        var arrProduct = [];
        //var centreMapDomain = setupData.centreMapDomain;      //Modified and End by SMILEDINING-SA20-0029
        var centreMapDomain = setupData;    //Added and End by SMILEDINING-SA20-0029
        var productId = centreMapDomain.productId()

        if (productId.length <= 1) {
            arrProduct.push(productId)
        } else {
            arrProduct = productId.split(',');
        }

        var filter = _.filter(arrProduct, function (o) {
            return o == '3';
        });

        vmViewIndex.egiftcard.data.remove(function (i) {
            return i.domainId() == centreMapDomain.domainId();
        });

        if (filter.length > 0) {
            vmViewIndex.egiftcard.data.push(centreMapDomain);
        }

        refreshGrid(cGridEgiftCard);
    };
    //End Added by SMILEDINING-SA19-0011

    function setOwner(result, tx) {
        if (tx == cStatusAdd) {
            var data = ko.mapping.fromJSON(result);
            var ownerData = _.head(data());
            vmViewIndex.owner.data.push(ownerData);
            refreshGrid(cGridOwner);
            return ownerData.customerId();
        } else if (tx == cStatusUpdate) {
            var data = ko.mapping.fromJSON(result);
            var ownerData = _.head(data());
            var filter = ko.utils.arrayFilter(vmViewIndex.owner.data(), function (item) {
                return item.customerId() == ownerData.customerId()
            });
            var index = vmViewIndex.owner.data.indexOf(_.head(filter));
            if (index != -1) {
                vmViewIndex.owner.data.replace(vmViewIndex.owner.data()[index], ownerData);
                refreshGrid(cGridOwner);
                return ownerData.customerId();
            }
        }
        return null;
    };

    //Added by SMILEDINING-SA18-0011
    function setWrUser(result, tx) {
        if (tx == cStatusAdd) {

            var data = ko.mapping.fromJSON(result);
            var wrUserData = data;
            if (wrUserData.phone() != null) wrUserData.phone(wrUserData.phone().replace(/\D/g, ''));

            /*firebase*/
            firebase.auth().createUserWithEmailAndPassword(wrUserData.email(), 'WebReport123456').then(function (data) {
                firebase.auth().signInWithEmailAndPassword(wrUserData.email(), 'WebReport123456').then(function (data) {
                    var user = firebase.auth().currentUser;
                    user.updateProfile({
                        displayName: wrUserData.firstName() + ' ' + wrUserData.lastName(),
                    }).then(function () {
                        signOutFirebase();

                        vmViewIndex.webreport.dataUser.push(wrUserData);
                        vmViewIndex.webreport.dataUserRoleMapModal.storeUser.insert(wrUserData);
                        refreshGrid(cGridWrUser);

                    }).catch(function (error) {
                        // Handle Error Update Profile.
                        var errorCode = error.code;
                        var errorMessage = error.message;
                    });

                }).catch(function (error) {
                    // Handle Error SignIn.
                    var errorCode = error.code;
                    var errorMessage = error.message;

                });
            }).catch(function (error) {
                // Handle Errors Create User.
                var errorCode = error.code;
                var errorMessage = error.message;

            });

        } else if (tx == cStatusUpdate) {
            var data = ko.mapping.fromJSON(result);
            var wrUserData = data;
            if (wrUserData.phone() != null) wrUserData.phone(wrUserData.phone().replace(/\D/g, ''));
            var filter = ko.utils.arrayFilter(vmViewIndex.webreport.dataUser(), function (item) {
                return item.userId() == wrUserData.userId()
            });
            var index = vmViewIndex.webreport.dataUser.indexOf(_.head(filter));
            vmViewIndex.webreport.dataUserRoleMapModal.storeUser.update(wrUserData.userId(), wrUserData);
            if (index != -1) {
                vmViewIndex.webreport.dataUser.replace(vmViewIndex.webreport.dataUser()[index], wrUserData);
                refreshGrid(cGridWrUser);
            }
        }
        return null;
    };

    function setWrUserRoleMap(result, tx) {
        if (tx == cStatusAdd) {
            var data = ko.mapping.fromJSON(result);
            vmViewIndex.webreport.dataUserRoleMap.push(data);
            refreshGrid(cGridWrUserRoleMap);
        } else if (tx == cStatusUpdate) {
            var data = ko.mapping.fromJSON(result);
            var filter = ko.utils.arrayFilter(vmViewIndex.webreport.dataUserRoleMap(), function (item) {
                return item.userRoleMapId() == data.userRoleMapId()
            });
            var index = vmViewIndex.webreport.dataUserRoleMap.indexOf(_.head(filter));
            if (index != -1) {
                vmViewIndex.webreport.dataUserRoleMap.replace(vmViewIndex.webreport.dataUserRoleMap()[index], data);
                refreshGrid(cGridWrUserRoleMap);
            }
        }
        return null;
    };

    function setWrRoleMenuMap(result, tx, customerId) {
        if (tx == cStatusAdd) {
            var data = ko.mapping.fromJSON(result);
            ko.utils.arrayForEach(data(), function (item) {
                vmViewIndex.webreport.dataRoleMenuMap.push(item);
            });
            refreshGrid(cGridWrRoleMenuMap);
        } else {
            var data = ko.mapping.fromJSON(result);
            vmViewIndex.webreport.dataRoleMenuMap.remove(function (item) {
                return item.customerId() == customerId;
            });
            ko.utils.arrayForEach(data(), function (item) {
                vmViewIndex.webreport.dataRoleMenuMap.push(item);
            });
            refreshGrid(cGridWrRoleMenuMap);
        }
    };

    //Added by SMILEDINING-SA19-0011
    function setGiftCer(domainId, tx) {

        vmViewIndex.egiftcard.dataGiftCerModal.dataJoinDomain.removeAll();

        //if (!isEmpty(vmViewIndex.egiftcard.dataGiftCer)) {
        //    vmViewIndex.egiftcard.dataGiftCer.remove(function (item) {
        //        return item.domainId == domainId;
        //    });
        //}

        //var dataEgiftCard = JSON.parse(getObjFormAjax(cJsonGetWrEgiftCard, domainId));
        //if (dataEgiftCard.length > 0) {
        //    var jsonEgiftCard = JSON.stringify(dataEgiftCard);
        //    ko.mapping.fromJSON(jsonEgiftCard, {}, vmViewIndex.egiftcard.dataGiftCer);
        //}

        vmViewIndex.egiftcard.data.removeAll();
        ko.utils.arrayForEach(vmViewIndex.setup.data(), function (item) {
            var arrProduct = [];
            //Modified by SMILEDINING-SA20-0029
            //if (item.centreMapDomain.productId().length <= 1) {
            //    arrProduct.push(item.centreMapDomain.productId())
            //} else {
            //    arrProduct = item.centreMapDomain.productId().split(',');
            //}
            //var centreMapDomain = _.filter(arrProduct, function (o) {
            //    return o == '3';
            //});
            //End Modified by SMILEDINING-SA20-0029
            //Added by SMILEDINING-SA20-0029
            if (item.productId().length <= 1) {
                arrProduct.push(item.productId())
            } else {
                arrProduct = item.productId().split(',');
            }
            var centreMapDomain = _.filter(arrProduct, function (o) {
                return o == '3';
            });

            if (centreMapDomain.length > 0) {
                vmViewIndex.egiftcard.data.push(item);
            }
            //End Added by SMILEDINING-SA20-0029

            if (centreMapDomain.length > 0) {
                vmViewIndex.egiftcard.data.push(item.centreMapDomain);
            }
        });

        var domainId = '';
        ko.utils.arrayForEach(vmViewIndex.egiftcard.data(), function (item) {
            //Modified by SMILEDINING-SA22-0008#12
            //if (domainId.length == 0) {
            //    domainId = item.domainId();
            //} else {
            //    domainId = domainId + ',' + item.domainId();
            //}
            //vmViewIndex.egiftcard.dataGiftCerModal.storeDomainData.insert(item);
            //End Modified by SMILEDINING-SA22-0008#12
            //Added by SMILEDINING-SA22-0008#12
            if (item != undefined) {
                if (domainId.length == 0) {
                    domainId = item.domainId();
                } else {
                    domainId = domainId + ',' + item.domainId();
                }
                vmViewIndex.egiftcard.dataGiftCerModal.storeDomainData.insert(item);
            }
            //End Added by SMILEDINING-SA22-0008#12
        });

        var dataEgiftCard = JSON.parse(getObjFormAjax(cJsonGetWrEgiftCard, domainId));
        if (dataEgiftCard.length > 0) {
            var jsonEgiftCard = JSON.stringify(dataEgiftCard);
            ko.mapping.fromJSON(jsonEgiftCard, {}, vmViewIndex.egiftcard.dataGiftCer);
        }

    };

    function setGiftCerSearch(dataGiftCer, dataGiftCerAccount, dataGiftCerTransaction) {
        ko.mapping.fromJSON(JSON.stringify(dataGiftCer), {}, vmViewIndex.egiftcard.dataGiftCerSearchModal.dataGiftCer);
        ko.mapping.fromJSON(JSON.stringify(dataGiftCerAccount), {}, vmViewIndex.egiftcard.dataGiftCerSearchModal.dataGiftCerAccount);
        ko.mapping.fromJSON(JSON.stringify(dataGiftCerTransaction), {}, vmViewIndex.egiftcard.dataGiftCerSearchModal.dataGiftCerTransaction);
        vmViewIndex.egiftcard.dataGiftCerSearchModal.search(true);
        var domainId = vmViewIndex.egiftcard.dataGiftCerSearchModal.dataGiftCer().customerCode()
        vmViewIndex.egiftcard.dataGiftCerSearchModal.domainId(domainId);
    };

    function setGiftCerSearchDate(data) {
        //Modified by SMILEDINING-SA22-0008
        //All (shop + egift card)
        //ko.mapping.fromJSON(JSON.stringify(data.giftCerAccount), {}, vmViewIndex.egiftcard.dataGiftCerSearchDateModal.data);
        //Egift Card Only
        //ko.mapping.fromJSON(JSON.stringify(data.giftCerOrder), {}, vmViewIndex.egiftcard.dataGiftCerSearchDateModal.dataEgiftCardOnly);
        //End Modified by SMILEDINING-SA22-0008
        //Added by SMILEDINING-SA22-0008
        //All (shop + egift card)
        ko.mapping.fromJSON(JSON.stringify(data.giftCerAccounts), {}, vmViewIndex.egiftcard.dataGiftCerSearchDateModal.data);
        //Egift Card Only
        ko.mapping.fromJSON(JSON.stringify(data.orders), {}, vmViewIndex.egiftcard.dataGiftCerSearchDateModal.dataEgiftCardOnly);
        //GiftCerOrder
        ko.mapping.fromJSON(JSON.stringify(data.giftCerOrders), {}, vmViewIndex.egiftcard.dataGiftCerSearchDateModal.dataGiftCerOrder);
        //End Added by SMILEDINING-SA22-0008
    };

    //End Added by SMILEDINING-SA19-0011

    //Added by SMILEDINING-SA20-0031#4
    function setShopClose(item, val) {
        var data = _.first(item);
        var itemModel = new DataShopCloseViewModel(item);
        if (val == cStatusAdd) {
            vmViewIndex.setup.dataModal.dataShopClose.push(itemModel);
        } else {
            var filterShopClose = ko.utils.arrayFilter(vmViewIndex.setup.dataModal.dataShopClose(), function (shopClose) {
                return shopClose.time()[0].shopCloseId() == data.shopCloseIdFirst;
            });
            vmViewIndex.setup.dataModal.dataShopClose.replace(_.first(filterShopClose), itemModel);
        }
        modalHide(cModalSetupShopClose);
        vmViewIndex.setup.dataModal.dataSetUpModalShopClose.clearSetUpShopClose();
    };
    //End Added by SMILEDINING-SA20-0031#4

    function signOutFirebase() {
        var checkExistsUser = firebase.auth().currentUser;
        if (checkExistsUser) {
            firebase.auth().signOut().then(function () {
            }).catch(function (error) {
                // Handle Error Signout.
                var errorCode = error.code;
                var errorMessage = error.message;
            });
        }
    };
    //End Added by SMILEDINING-SA18-0011

    function getCustomerObjFormAjax(jsonObj, id) {
        var objUrl = new ObjUrl(jsonObj);
        var requestUrl = objUrl.getUrlFromJson();
        var passData = JSON.parse('{"key" : "' + id + '"}');
        return getJsonFromAjax(requestUrl, !ajax_async, ajax_cache, ajax_type_post, passData, ajax_timeout);
    };

    //Modified by SMILECONTACTLESS-SA20-0001
    //function getObjFormAjax(jsonObj, id) {
    //    var objUrl = new ObjUrl(jsonObj);
    //    var requestUrl = objUrl.getUrlFromJson();
    //    var passData;
    //    if (!isEmpty(id)) {
    //        passData = JSON.parse('{"key" : "' + id + '"}');
    //    }
    //    return getJsonFromAjax(requestUrl, !ajax_async, ajax_cache, ajax_type_post, passData, ajax_timeout);
    //};
    //End Modified by SMILECONTACTLESS-SA20-0001

    function getObjDomainFormAjax(jsonObj, domainId, id) {
        var objUrl = new ObjUrl(jsonObj);
        var requestUrl = objUrl.getUrlFromJson();
        var passData;
        if (!isEmpty(id) && !isEmpty(domainId)) {
            passData = JSON.parse('{"domain" : "' + domainId + '", "key" : "' + id + '"}');
        }
        return getJsonFromAjax(requestUrl, !ajax_async, ajax_cache, ajax_type_post, passData, ajax_timeout);
    };

    //Added by SMILEDINING-SA18-0008
    function getObjSendFailFormAjax(jsonObj, groupId, id) {
        var objUrl = new ObjUrl(jsonObj);
        var requestUrl = objUrl.getUrlFromJson();
        var passData;
        if (!isEmpty(id) && !isEmpty(groupId)) {
            passData = JSON.parse('{"groupId" : "' + groupId + '", "key" : "' + id + '"}');
        }
        return getJsonFromAjax(requestUrl, !ajax_async, ajax_cache, ajax_type_post, passData, ajax_timeout);
    };
    //End Added by SMILEDINING-SA18-0008
    //Added by SMILEDINING-SA21-0080#2
    function getMarketingObjFormAjax(jsonObj, date) {
        var objUrl = new ObjUrl(jsonObj);
        var requestUrl = objUrl.getUrlFromJson();
        var passData;
        if (!isEmpty(date)) {
            //passData = JSON.parse('{"month" : "' + date + '"}');  //Modified and End by SMILEDINING-SA21-0080#10
            passData = JSON.parse('{"date" : "' + date + '"}'); //Added and End by SMILEDINING-SA21-0080#10
        }
        //return getJsonFromAjax(requestUrl, !ajax_async, ajax_cache, ajax_type_post, passData, ajax_timeout); //Modified and End by SMILEDINING-SA21-0081
        //Added by SMILEDINING-SA21-0081
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
                    data = result.obj;
                    ko.mapping.fromJSON(data.Result, {}, vmViewIndex.marketingService.data);
                }
                //loadingShimmer(false, 'Marketing'); //Modified and End by SMILEDINING-SA21-0081#1
                loadingShimmer(false, cGridMarketing); //Added and End by SMILEDINING-SA21-0081#1
            })
            .fail(function (result) {
                vmViewIndex.marketingService.data = null;
                //loadingShimmer(false, 'Marketing'); //Modified and End by SMILEDINING-SA21-0081#1
                loadingShimmer(false, cGridMarketing); //Added and End by SMILEDINING-SA21-0081#1
            });
        //End Added by SMILEDINING-SA21-0081

    };
    //End Added by SMILEDINING-SA21-0080#2


    //Added by SMILEDINING-SA18-0010#01
    function fetchObj(jsonObj) {
        var objUrl = new ObjUrl(jsonObj);
        var requestUrl = objUrl.getUrlFromJson();
        fetch(requestUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(checkStatus)
            .then(parseJSON)
            .then(function (data) {
                switch (jsonObj) {
                    case cfrmSetUpGetData:
                        var setup = ko.mapping.fromJSON(data.obj);
                        //Modified by SMILEDINING-SA22-0008
                        //ko.mapping.fromJS(setup.setupData, {}, vmViewIndex.setup.data);
                        //_.forEach(setup.timeZone(), function (value) {
                        //    //vmViewIndex.setup.dataModal.dxLookuptimeZoneCode().dataSource._array.push(value)
                        //    vmViewIndex.setup.dataModal.store.insert(value);
                        //});
                        //End Modified by SMILEDINING-SA22-0008
                        //Added by SMILEDINING-SA22-0008
                        ko.mapping.fromJS(setup.domains, {}, vmViewIndex.setup.data);
                        _.forEach(setup.timeZones(), function (value) {
                            vmViewIndex.setup.dataModal.store.insert(value);
                        });
                        //End Added by SMILEDINING-SA22-0008
                        //loadingShimmer(false, cGridSetup);  //Added and End by SMILEDINING-SA22-0008#6 //Modified and End by SMILEDINING-SA22-0022
                        //Added by SMILEDINING-SA22-0022
                        setTimeout(function () {
                            loadingShimmer(false, cGridSetup);
                        }, 0);
                        //Modified by WEB-SA23-0013#1
                        //if (vmViewIndex.customer.isAccountant()) {
                        //    _.forEach(setup.domains(), function (item) {
                        //        if (item.dispatchTypeId() != cDispatchType_None) {
                        //            vmViewIndex.deliveryBilling.data.push(item);
                        //        }
                        //    });
                        //    vmViewIndex.deliveryBilling.checkDataSourceFilter();
                        //    setTimeout(function () {
                        //        loadingShimmer(false, cGridDeliveryBilling);
                        //    }, 0);
                        //}
                        //End Modified by WEB-SA23-0013#1
                        //End Added by SMILEDINING-SA22-0022
                        //Modified by SMILEDINING-SA20-0029
                        //_.forEach(vmViewIndex.setup.data(), function (value) {
                        //    vmViewIndex.owner.dataModal.store.insert(value.centreMapDomain);
                        //    //vmViewIndex.owner.dataModal.dxLookupDomain().dataSource._array.push(value.centreMapDomain)
                        //});

                        ////Added by SMILECONTACTLESS-SA20-0001
                        //_.forEach(vmViewIndex.setup.data(), function (value) {
                        //    vmViewIndex.monitor.store.insert(value.centreMapDomain);
                        //});
                        ////End Added by SMILECONTACTLESS-SA20-0001

                        ////Added by SMILEDINING-SA19-0011
                        //vmViewIndex.egiftcard.data.removeAll();
                        //_.forEach(setup.setupData(), function (item) {
                        //    var arrProduct = [];
                        //    if (item.centreMapDomain.productId().length <= 1) {
                        //        arrProduct.push(item.centreMapDomain.productId())
                        //    }else{
                        //        arrProduct = item.centreMapDomain.productId().split(',');
                        //    }
                        //    var centreMapDomain = _.filter(arrProduct, function (o) {
                        //        return o == '3';
                        //    });

                        //    if (centreMapDomain.length > 0) {
                        //        vmViewIndex.egiftcard.data.push(item.centreMapDomain);
                        //    }
                        //});
                        //End Modified by SMILEDINING-SA20-0029

                        //Added by SMILEDINING-SA20-0029
                        //Modified by WEB-SA23-0013
                        //_.forEach(vmViewIndex.setup.data(), function (value) {
                        //    vmViewIndex.owner.dataModal.store.insert(value);
                        //});

                        //_.forEach(vmViewIndex.setup.data(), function (value) {
                        //    vmViewIndex.monitor.store.insert(value);
                        //});
                        ////Added by SMILEDINING-SA21-0063
                        //_.forEach(vmViewIndex.setup.data(), function (value) {
                        //    vmViewIndex.log.store.insert(value);
                        //});
                        ////End Added by SMILEDINING-SA21-0063
                        //End Modified by WEB-SA23-0013
                        //Added by WEB-SA23-0013
                        _.forEach(vmViewIndex.setup.data(), function (value) {
                            vmViewIndex.owner.dataModal.store.insert(value);
                            vmViewIndex.monitor.store.insert(value);
                            vmViewIndex.log.store.insert(value);
                            vmViewIndex.summary.dxLookupShopNameStore.insert(value);
                            vmViewIndex.report.dxLookupShopNameStoreRpServiceFee.insert(value); //Added and End by WEB-SA23-0056
                        });
                        //End Added by WEB-SA23-0013

                        vmViewIndex.egiftcard.data.removeAll();
                        //_.forEach(setup.setupData(), function (item) { //Modified and End by SMILEDINING-SA22-0008
                        _.forEach(setup.domains(), function (item) { //Added and End by SMILEDINING-SA22-0008
                            var arrProduct = [];
                            if (item.productId().length <= 1) {
                                arrProduct.push(item.productId())
                            } else {
                                arrProduct = item.productId().split(',');
                            }
                            var centreMapDomain = _.filter(arrProduct, function (o) {
                                return o == '3';
                            });

                            if (centreMapDomain.length > 0) {
                                vmViewIndex.egiftcard.data.push(item);
                            }
                        });
                        //End Added by SMILEDINING-SA20-0029


                        var domainId = '';
                        ko.utils.arrayForEach(vmViewIndex.egiftcard.data(), function (item) {
                            if (domainId.length == 0) {
                                domainId = item.domainId();
                            } else {
                                domainId = domainId + ',' + item.domainId();
                            }
                            vmViewIndex.egiftcard.dataGiftCerModal.storeDomainData.insert(item);
                        });
                        var dataEgiftCard = JSON.parse(getObjFormAjax(cJsonGetWrEgiftCard, domainId));
                        if (dataEgiftCard != null && dataEgiftCard.length > 0) {
                            var jsonEgiftCard = JSON.stringify(dataEgiftCard);
                            ko.mapping.fromJSON(jsonEgiftCard, {}, vmViewIndex.egiftcard.dataGiftCer);
                            //loadingShimmer(false, 'E-giftcard');    //Added and End by SMILEDINING-SA21-0081 //Modified and End by SMILEDINING-SA21-0081#1
                            //loadingShimmer(false, cGridEgiftCard); //Added and End by SMILEDINING-SA21-0081#1 //Modified and End by SMILEDINING-SA22-0022
                            //Added by SMILEDINING-SA22-0022
                            setTimeout(function () {
                                loadingShimmer(false, cGridEgiftCard);
                            }, 0);
                            //End Added by SMILEDINING-SA22-0022
                        }
                        //ko.mapping.fromJS(setup.setupData, {}, vmViewIndex.egiftcard.data);
                        //End Added by SMILEDINING-SA19-0011
                        break;
                    case cJsonMonitorGetShopOnline:
                        ko.mapping.fromJSON(data.obj, {}, vmViewIndex.shopOnline.data);
                        break;
                    case cfrmOwnerGetData:
                        //Added by SMILEDINING-SA22-0008
                        var json = JSON.parse(data.obj);
                        var jsonResult = json.result;
                        var jsonStr = JSON.stringify(jsonResult);
                        ko.mapping.fromJSON(jsonStr, {}, vmViewIndex.owner.data);
                        //End Added by SMILEDINING-SA22-0008
                        //ko.mapping.fromJSON(data.obj, {}, vmViewIndex.owner.data);
                        //loadingShimmer(false, 'Owner');     //Added and End by SMILEDINING-SA21-0081 //Modified and End by SMILEDINING-SA21-0081#1
                        //loadingShimmer(false, cGridOwner); //Added and End by SMILEDINING-SA21-0081#1 //Modified and End by SMILEDINING-SA22-0022
                        //Added by SMILEDINING-SA22-0022
                        setTimeout(function () {
                            loadingShimmer(false, cGridOwner);
                        }, 0);
                        //End Added by SMILEDINING-SA22-0022
                        break;
                    //Added by SMILEDINING-SA18-0011
                    case cJsonGetWrCustomer:
                        ko.mapping.fromJSON(data.obj, {}, vmViewIndex.webreport.dataCustomer);
                        _.forEach(vmViewIndex.webreport.dataCustomer(), function (value) {
                            vmViewIndex.webreport.dataUserRoleMapModal.storeCustomer.insert(value);
                            vmViewIndex.webreport.dataRoleMenuModal.storeCustomer.insert(value);
                        });
                        break;
                    case cJsonGetWrUser:
                        ko.mapping.fromJSON(data.obj, {}, vmViewIndex.webreport.dataUser);
                        _.forEach(vmViewIndex.webreport.dataUser(), function (value) {
                            vmViewIndex.webreport.dataUserRoleMapModal.storeUser.insert(value);
                        });
                        //loadingShimmer(false, 'WebReport-User'); //Added and End by SMILEDINING-SA21-0081 //Modified and End by SMILEDINING-SA21-0081#1
                        //loadingShimmer(false, cGridWrUser); //Added and End by SMILEDINING-SA21-0081#1 //Modified and End by SMILEDINING-SA22-0022
                        //Added by SMILEDINING-SA22-0022
                        setTimeout(function () {
                            loadingShimmer(false, cGridWrUser);
                        }, 0);
                        //End Added by SMILEDINING-SA22-0022
                        break;
                    case cJsonGetWrRole:
                        ko.mapping.fromJSON(data.obj, {}, vmViewIndex.webreport.dataRole);
                        _.forEach(vmViewIndex.webreport.dataRole(), function (value) {
                            vmViewIndex.webreport.dataUserRoleMapModal.storeRole.insert(value);
                        });

                        var firstRole = _.head(vmViewIndex.webreport.dataRole());
                        vmViewIndex.webreport.rdoRoleSelectInRoleMenuMap(firstRole.roleId());

                        break;
                    case cJsonGetWrGroupMenu:
                        ko.mapping.fromJSON(data.obj, {}, vmViewIndex.webreport.dataGroupMenu);
                        break;
                    case cJsonGetWrMenu:
                        ko.mapping.fromJSON(data.obj, {}, vmViewIndex.webreport.dataMenu);
                        break;
                    case cJsonGetWrRoleMenuMap:
                        ko.mapping.fromJSON(data.obj, {}, vmViewIndex.webreport.dataRoleMenuMap);
                        //loadingShimmer(false, 'WebReport-Menu');//Added and End by SMILEDINING-SA21-0081  //Modified and End by SMILEDINING-SA21-0081#1
                        //loadingShimmer(false, cGridWrRoleMenuMap);    //Added and End by SMILEDINING-SA21-0081#1 //Modified and End by SMILEDINING-SA22-0022
                        //Added by SMILEDINING-SA22-0022
                        setTimeout(function () {
                            loadingShimmer(false, cGridWrRoleMenuMap);
                        }, 0);
                        //End Added by SMILEDINING-SA22-0022
                        break;
                    case cJsonGetWrUserRoleMap:
                        ko.mapping.fromJSON(data.obj, {}, vmViewIndex.webreport.dataUserRoleMap);
                        //loadingShimmer(false, 'WebReport-Role');//Added and End by SMILEDINING-SA21-0081 //Modified and End by SMILEDINING-SA21-0081#1
                        //loadingShimmer(false, cGridWrUserRoleMap); //Added and End by SMILEDINING-SA21-0081#1 //Modified and End by SMILEDINING-SA22-0022
                        //Added by SMILEDINING-SA22-0022
                        setTimeout(function () {
                            loadingShimmer(false, cGridWrUserRoleMap);
                        }, 0);
                        //End Added by SMILEDINING-SA22-0022
                        break;
                    //End Added by SMILEDINING-SA18-0011
                    case cfrmSummaryGetData:
                        //ko.mapping.fromJSON(data.obj, {}, vmViewIndex.summary.data); //Modified and End by SMILEDINING-SA21-0081
                        //ko.mapping.fromJSON(data.obj.Result, {}, vmViewIndex.summary.data); //Added and End by SMILEDINING-SA21-0081 //Modified and End by SMILEDINING-SA21-0081#1
                        //loadingShimmer(false, 'Summary');   //Added and End by SMILEDINING-SA21-0081 //Modified and End by SMILEDINING-SA21-0081#1
                        //Added and End by SMILEDINING-SA21-0081#1
                        if (data.status) {
                            ko.mapping.fromJSON(data.obj, {}, vmViewIndex.summary.data);
                        } else {
                            swal(cSwal_Alert_Error, data.message, cSwal_Icon_Error);
                        }
                        vmViewIndex.summary.filterDataGrid(); //Added and End by WEB-SA23-0013
                        //loadingShimmer(false, cGridSummary); //Modified and End by SMILEDINING-SA22-0022
                        //Added by SMILEDINING-SA22-0022
                        setTimeout(function () {
                            loadingShimmer(false, cGridSummary);
                        }, 0);
                        //End Added by SMILEDINING-SA22-0022
                        //End Added by SMILEDINING-SA21-0081#1
                        break;
                    //Added by SMILEDINING-SA22-0017
                    case cfrmAutoUpdateGetData:
                        if (data.status) {
                            var dataAutoUpdate = JSON.parse(data.obj);
                            ko.mapping.fromJS(dataAutoUpdate.autoUpdate, {}, vmViewIndex.autoUpdate.data);
                            ko.mapping.fromJS(dataAutoUpdate.svn, {}, vmViewIndex.autoUpdate.dataSettingSvnModal);
                            var versionObj = ko.mapping.fromJS(dataAutoUpdate.version);
                            var versionMajor = '';
                            _.forEach(versionObj(), function (value) {
                                if (value.major() != versionMajor) {
                                    vmViewIndex.autoUpdate.dataUpdateVersionModal.storeVersion.insert(value);
                                }
                                versionMajor = value.major();
                            });
                            //Added by WEB-SA22-0065
                            //Modified by WEB-SA22-0070
                            //var lastStorePos = vmViewIndex.autoUpdate.dataSettingSvnModal.storePos().slice(-1);                            
                            //var lastStoreTablet = vmViewIndex.autoUpdate.dataSettingSvnModal.storeTablet().slice(-1);
                            //var lastStoreWebReport = vmViewIndex.autoUpdate.dataSettingSvnModal.storeWebReport().slice(-1);
                            //vmViewIndex.autoUpdate.dataSettingSvnModal.pos(lastStorePos);
                            //vmViewIndex.autoUpdate.dataSettingSvnModal.tablet(lastStoreTablet);
                            //vmViewIndex.autoUpdate.dataSettingSvnModal.webReport(lastStoreWebReport);
                            //End Modified by WEB-SA22-0070
                            //End Added by WEB-SA22-0065
                            //Added by WEB-SA22-0070
                            vmViewIndex.autoUpdate.dataSettingSvnModal.pos(_.last(vmViewIndex.autoUpdate.dataSettingSvnModal.storePos()));
                            vmViewIndex.autoUpdate.dataSettingSvnModal.tablet(_.last(vmViewIndex.autoUpdate.dataSettingSvnModal.storeTablet()));
                            vmViewIndex.autoUpdate.dataSettingSvnModal.webReport(_.last(vmViewIndex.autoUpdate.dataSettingSvnModal.storeWebReport()));
                            //End Added by WEB-SA22-0070
                        }
                        //loadingShimmer(false, cGridAutoUpdate); //Modified and End by SMILEDINING-SA22-0022
                        //Added by SMILEDINING-SA22-0022
                        setTimeout(function () {
                            loadingShimmer(false, cGridAutoUpdate);
                        }, 0);
                        //End Added by SMILEDINING-SA22-0022
                        break;
                    //End Added by SMILEDINING-SA22-0017
                    //Added by SMILECONTACTLESS-SA20-0001
                    case cJsonMonitorGetData:
                        ko.mapping.fromJSON(data.obj, {}, vmViewIndex.monitor.data);
                        //loadingShimmer(false, 'Monitor');    //Added and End by SMILEDINING-SA21-0081 //Modified and End by SMILEDINING-SA21-0081#1
                        //loadingShimmer(false, cGridMonitor); //Added and End by SMILEDINING-SA21-0081#1 //Modified and End by SMILEDINING-SA22-0022
                        //Added by SMILEDINING-SA22-0022
                        setTimeout(function () {
                            loadingShimmer(false, cGridMonitor);
                        }, 0);
                        break;
                    //End Added by SMILEDINING-SA22-0022
                    //End Added by SMILECONTACTLESS-SA20-0001
                    //Added by WEB-SA23-0013#1
                    case cfrmDeliveryBillingGetData:
                        if (data.status) {
                            ko.mapping.fromJSON(data.obj, {}, vmViewIndex.deliveryBilling.data);
                            vmViewIndex.deliveryBilling.checkDataSourceSelectDispatchType(vmViewIndex.deliveryBilling.data()); //Added and End by WEB-SA23-0013#5
                            //Modified by WEB-SA23-0013#5
                            //var dispatchTypeIds = [];
                            //_.forEach(vmViewIndex.deliveryBilling.data(), function (item) {
                            //    dispatchTypeIds = vmViewIndex.deliveryBilling.getUniqueDispatchTypeIds(item.dispatchTypeId(), dispatchTypeIds);
                            //});
                            //dispatchTypeIds.sort(function(a, b){return parseInt(a) - parseInt(b)});
                            //_.forEach(dispatchTypeIds, function (item) {
                            //    if (item == cDispatchType_Deliverect) {
                            //        vmViewIndex.deliveryBilling.selectDispatchTypeStore.insert({ id: cDispatchType_Deliverect, name: cDispatchType_Deliverect_Name });
                            //    }
                            //    if (item == cDispatchType_DoorDash) {
                            //        vmViewIndex.deliveryBilling.selectDispatchTypeStore.insert({ id: cDispatchType_DoorDash, name: cDispatchType_DoorDash_Name });
                            //    }
                            //});
                            //End Modified by WEB-SA23-0013#5
                        }
                        //Added by WEB-SA23-0013#4
                        else {
                            swal(cSwal_Alert_Error, data.message, cSwal_Icon_Error);
                        }
                        vmViewIndex.deliveryBilling.filterDataGrid(true);
                        //End Added by WEB-SA23-0013#4
                        setTimeout(function () {
                            loadingShimmer(false, cGridDeliveryBilling);
                        }, 0);
                        break;
                    //End Added by WEB-SA23-0013#1
                    //Added by WEB-SA23-0056
                    case cfrmRpServiceFeeGetData:
                        if (data.status) {
                            ko.mapping.fromJSON(data.obj, {}, vmViewIndex.report.dataRpServiceFee);
                        } else {
                            swal(cSwal_Alert_Error, data.message, cSwal_Icon_Error);
                        }
                        vmViewIndex.report.filterDataGridRpServiceFee();
                        setTimeout(function () { 
                            loadingShimmer(false, cGridRpServiceFee);                        
                        }, 0);
                        break;
                    //End Added by WEB-SA23-0056
                    //Added by WEB-SA24-0029
                    case cfrmPersonnelGetData:
                        if (data.status) {
                            vmViewIndex.personnel.mapFetchedData(data.obj);
                        } else {
                            swal(cSwal_Alert_Error, data.message, cSwal_Icon_Error);
                        }
                        setTimeout(function () { 
                            loadingShimmer(false, cGridPersonnel);                        
                        }, 0);
                        break;
                    //End Added by WEB-SA24-0029
                    default:
                        break;
                }
            }).catch(function (error) {
                swal(cSwal_Alert_Error, replaceNewLineToBr(jsonObj + ' : request failed'), cSwal_Icon_Error);
            })
    };

    function parseJSON(response) {
        return response.json();
    };

    function checkStatus(response) {
        if (response.status >= 200 && response.status < 300) {
            return response;
        } else {
            var error = new Error(response.statusText);
            error.response = response;
            throw error;
        }
    };
    //End Added by SMILEDINING-SA18-0010#01
    //Added by SMILEDINING-SA22-0027
    function setUpKeepAlive() {
        var delay = (15) * 60 * 1000;
        setInterval(function () {
            getObjFormAjax(cJsonKeepSessionAlive, '');
        }, delay);
    };
    //End Added by SMILEDINING-SA22-0027
});