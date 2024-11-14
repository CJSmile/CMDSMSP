/*
    SMILEDINING-SA17-0026      08/29/17         Customize               1. Add new function Auto Charge.
    SMILEDINING-SA18-0011      05/07/2018       Customize               1. New Web Report.
    SMILEDINING-SA19-0003      03/12/2019       Customize               1. Add config data of minimum order into ‘tbglobalconfig’ table.
                                                                        2. Add minimum order for pickup type of orders.
                                                                        3. Support minimum order when enable or disable minimum order.
                                                                        4. Add Setup minimum order for pickup and delivery and change integer value to floating point value.
    SMILEDINING-SA19-0018      08/19/2019       FixBug                  1. 'StartDate' more than 'EndDate' or vice versa.
                                                                        2. Select date should participate in current date.
                                                                        3. should not only select Start Date or End Date.
    SMILEDINING-SA19-0011      09/03/2019      Customize                1. E-Gift Card.
    SMILEDINING-SA20-0004      13/05/2020      Customize                1. New feature Guest On Smile Dining and Delivery Address and Config Menu Hour.
    SMILEDINING-SA20-0007      07/07/2020      Customize                1. New feature Gift Card.
    SMILEDINING-SA20-0005      13/06/2020      Customize                1. Add new product.
    SMILEDINING-SA20-0006      13/08/2020      Customize                1. Setup Contactless Payment Type and Update Contactless.
    SMILEDINING-SA20-0013      29/07/2020      Customize                1. New feature ASAP Only.
    SMILEDINING-SA20-0014      31/07/2020      Customize                1. Separate email settings of Order Smiledining and E- Gift Card.       
    SMILEDINING-SA20-0038      27/11/2020      Customize                1. Custom time menu.
    SMILEDINING-SA20-0044      18/12/2020      Customize                1. On-off Pay By Cash or Pay By Credit only delivery or pickup.
    SMILEDINING-SA20-0031      02/12/2020      Customize                1. Adjust shop close period date and time.
    SMILEDINING-SA20-0031#4    08/01/2021      Customize                1. Add shopClose feature to WebSupport and Fix bug validate custom shopClose.
    SMILEDINING-SA21-0007      02/02/2021      Customize                1. Apple Pay and Set up Unit Of Work  and Shop Close API
    SMILEDINING-SA21-0014      08/03/2021      Customize                1. Add new product 'Smile Third Party Integrations' used Deliverect.
    SMILEDINING-SA21-0014#1    15/03/2021      Customize                1. Fix bug 'Smile Third Party Integrations'.
    SMILEDINING-SA21-0014#6    02/04/2021      Customize                1. Change UI and sync multi location.
    SMILEDINING-SA21-0014#7    09/04/2021      Customize                1. Modified deliverect sync product and added new feature snooze product. 
    SMILEDINING-SA21-0028#3    05/08/2021      Customize                1. Edit UI Smile Dining and Contactless (Layout P2).
    SMILEDINING-SA21-0043      18/08/2021      Customize                1. Config data SignalR to Kafka
    SMILEDINING-SA21-0052      09/08/2021      Customize                1. Add button 'No Asap' in web support and Edit 'Today Only'
    SMILEDINING-SA21-0054      13/09/2021      Customize                1. Add setting Required Estimate Time
    SMILEDINING-SA21-0057      16/09/2021      Customize                1. Pre order up to max 30 day and Add calculate tax before discount
    SMILEDINING-SA21-0066      21/10/2021      Customize                1. New feature web dispatch deliverect.
    SMILEDINING-SA21-0066#1    22/10/2021      Customize                1. Add button 'none' for WebDispatch.
    SMILEDINING-SA21-0066#3    01/11/2021      Customize                1. Fix bug when channel is busy mode.
    SMILEDINING-SA21-0070      05/11/2021      Customize                1. Add calculate before discount on web contactless.
    SMILEDINING-SA21-0025#3    11/11/2021      Customize                1. Fixed bug show utensils in mail Dining/ LiveOrder webOwner / Monitor webSupport and Resend Ticket.
    SMILEDINING-SA21-0066#5    14/11/2021      Customize                1. Fix bug webSupport error when open domain and save domain and domain deactivate in setup.
    SMILEDINING-SA21-0080      03/11/2021      Customize                1. Activate Credit Card Fee & Marketing Service Fee.
    SMILEDINING-SA21-0080#2    09/12/2021      Customize                1. Calculate marketingFee in SmileDining and show receipt and report in webSupport.
    SMILEDINING-SA21-0021#9    09/12/2021      Customize                1. Create icon default custom domain.
    SMILEDINING-SA21-0081      16/12/2021      Customize                1. Add loading shimmer web support.
                                                                        2. Fix bug value when click button duplicate.
                                                                        3. Menu summary change call api.
    SMILEDINING-SA22-0008      23/02/2022      Customize                1. Call API in WebSupport.
    SMILEDINING-SA22-0008#8    03/04/2022      Customize                1. Fix model and Fix menu Webreport.
    SMILEDINING-SA22-0008#14   31/03/2022      Customize                1. Fix shop close second period time Fix giftcer join domain and Fix redis async.
    SMILEDINING-SA22-0008#19   07/04/2022      Customize                1. Add marketing key on menu setup and Fix admin account can't add owner account.
    SMILEDINING-SA22-0011      25/04/2022      Customize                1. Add dispatch type and dispatch web in setup.
    SMILEDINING-SA22-0008#24   04/05/2022      Customize                1. Fix resend egiftcard and Fix bug egiftcard update.
    SMILEDINING-SA22-0012#1    12/05/2022      Customize                1. Edit Dispatch for DoorDash in webSupport and webOwner.
    SMILEDINING-SA22-0017      06/06/2022      Customize                1. Add menu AutoUpdate in webSupport.
    SMILEDINING-SA22-0020      14/06/2022      Customize                1. Add new charge name 'Payment Fee' apply to order online.
    SMILEDINING-SA22-0022      15/06/2022      Customize                1. Add menu Delivery Billing in webSupport.
    SMILEDINING-SA22-0023      17/06/2022      Customize                1. Fix bug edit E-GiftCard for resend in webSupport.
    SMILEDINING-SA22-0022#2    21/06/2022      Customize                1. Fix bug filter and delete icon Delivery Billing in webSupport.
    SMILEDINING-SA22-0017#2    22/06/2022      Customize                1. Fix bug AutoUpdate in webSupport.
    SMILEDINING-SA22-0017#3    22/06/2022      Customize                1. Fix bug AutoUpdate send data to POS in webSupport.
    SMILEDINING-SA22-0022#3    23/06/2022      Customize                1. Fix bug UI Delivery Billing in webSupport.
    SMILEDINING-SA22-0027      18/07/2022      Customize                1. Fix bug save log in webSupport.
    SMILEDINING-SA22-0028      22/07/2022      Customize                1. Fix bug monitor in webSupport.
    SMILEDINING-SA22-0032      18/08/2022      Customize                1. Edit summary report in WebSupport.
                                                                        2. Edit setting service fee in WebSupport.
                                                                        3. Add download and print for delivery billing in WebSupport.
    SMILEDINING-SA22-0033      25/08/2022      Customize                1. Add amount deposit and email customer for delivery billing in WebSupport and WebOwner.
    SMILEDINING-SA22-0033#2    29/08/2022      Customize                1. Fix bug email customer change Api to centremap profile for delivery billing in WebSupport.
    SMILEDINING-SA22-0039      13/09/2022      Customize                1. Add ThridParty setting in setup.
    WEB-SA22-0041              21/09/2022      Customize                1. Fix bug save log in webSupport.
    WEB-SA22-0046              30/09/2022      Customize                1. Fix bug alert setting payCash and payCredit for service fee and dispatch in webSupport.
    SMILEDINING-SA22-0039#2    06/10/2022      Customize                1. Fix bug Shogo setting in setup 
    WEB-SA22-0050              11/10/2022      Customize                1. Add role for Create Account in WebSuuport
    WEB-SA22-0057              04/11/2022      Customize                1. Add Flat Rate, Percentage and Setting in Websupport
    WEB-SA22-0057#1            09/11/2022      Customize                1. Fixbug Flat Rate, Percentage and Setting in Websupport
                                                                        2. Edit summary report in WebSupport.
    WEB-SA22-0065              05/12/2022      Customize                1. Fix bug Setting SVN and UpdateVersion in AutoUpdate.
    WEB-SA22-0071              21/12/2022      Customize                1. Add download excel for Delivery Billing in webSupport.
    WEB-SA23-0008              26/01/2023      Customize                1. Use MQTT send data to kiosk in webSupport.
    WEB-SA23-0010              02/02/2023      Customize                1. Fix bug text for Taxes & Fees when no tax.
    WEB-SA23-0012              06/02/2023      Customize                1. Add setting Emergepay and edit UI payment service in webSupport.
    WEB-SA23-0013#1            13/02/2023      Customize                1. Fix bug delivery billing show invalid shop in webSupport and webOwner.
    WEB-SA23-0013#4            23/02/2023      Customize                1. Add address and postal in summary and delivery billing in webSupport.
    WEB-SA23-0020              13/03/2023      Customize                1. Add setting additional charge for deliverect in webSupport.
    WEB-SA23-0022              15/03/2023      Customize                1. Add apple pay for Emergepay in webDining, webGiftCard, webOntable, webSupport.
    WEB-SA23-0025              28/03/2023      Customize                1. Add filter product and export excel in menu Setup on webSupport. 
                                                                        2. Change version api cpxtransaction of setup-dining to v2 on webSupport.
                                                                        3. Edit version POS in menu Auto Update on webSupport.
    WEB-SA23-0035#1            30/05/2023      Customize                1. Move setting statement type from webSupport to webOwner.
    WEB-SA23-0043              31/07/2023      Customize                1. Fix bug setting shop close on webOwner, webSupport.
                                                                        2. Add product kiosk in setup on webSupport.
    WEB-SA23-0048              11/09/2023      Customize                1. Add setting Otter on webOwner, webSupport.
    WEB-SA23-0049              22/09/2023      Customize                1. Add check diff doordash on webSupport and fix bug get address for dispatch on webDining.
    WEB-SA23-0048#3            17/10/2023      Customize                1. Fix bug copy food and sync product for Otter on webOwner, webSupport.
    WEB-SA23-0049#1            26/10/2023      Customize                1. Fix bug check diff doordash and add filter product in menu Auto Update on webSupport.
    WEB-SA23-0048#9            11/01/2024      Customize                1. Fix bug sync product for update items Suspend/Unsuspend Otter on webSupport.
    WEB-SA24-0002              02/02/2024      Customize                1. Add Order Paper Report on webSupport.
    WEB-SA24-0003              06/02/2024      Customize                1. New Requirement - Add Purchase date to E-Gift Card Menu on webOwner, webSupport.
                                                                        2. New Requirement - Change default Auto Sync Product to "Yes" on webSupport.
                                                                        3. Fix bug saving of shop address due to missing city on webSupport.
    WEB-SA23-0049#3            21/02/2024      Customize                1. Add check ticket previous month and ticket convert to restaurant for delivery billing convert file on webSupport, webOwner, webDining.
    WEB-SA24-0015              28/05/2024      Customize                1. Fix bug webSupport can't open on Safari browser.
    WEB-SA24-0016              05/06/2024      Customize                1. New requirement - Add pay at store only and notification for Smile On Table on webOwner, webSupport, webOnTable.
    WEB-SA24-0018              24/06/2024      Customize                1. New requirement - cash discount.
    WEB-SA24-0019              25/06/2024      Customize                1. New Requirement - History for Purchase Order Paper.
    WEB-SA24-0024              23/07/2024      Customize                1. Fix bug shop address and change the Captcha and SignalR defaults on webSupport.
    WEB-SA24-0028              17/09/2024      Customize                1. Add ReCaptcha Site Key and Secret Key on webSupport.
    WEB-SA24-0029              17/10/2024      Customize                1. New Requirement - Personnel on webSupport.
    WEB-SA24-0029#1            29/10/2024      Customize                1. Fix bug Group Role and Create Account in Personnel tab on webSupport.
    WEB-SA24-0029#2            07/11/2024      Customize                1. Fix bug modal not closing, invalid password on account creation, and role updates in the Personnel tab on webSupport.
*/

function DataMonitorViewModel() {
    var self = this;
    self.domainId = ko.observable('');
    self.domainValue = ko.observable('');
    self.shopName = ko.observable('');
    self.shopAddress = ko.observable('');
    self.shopPhone = ko.observable('');
    self.shopTicket = ko.observable('');
    self.ticketId = ko.observable(0);
    self.orderTypeName = ko.observable('');
    self.subTotal = ko.observable(0);
    self.deliveryCharge = ko.observable(0);
    self.autoCharge = ko.observable(0);         //Added and End by SMILEDINING-SA17-0026
    self.paymentFee = ko.observable(0); //Added and End by SMILEDINING-SA22-0020
    self.discount = ko.observable(0);
    self.cashDiscount = ko.observable(0); //Added and End by WEB-SA24-0018
    self.tax = ko.observable(0);
    self.tip = ko.observable(0);
    self.utensilsAmount = ko.observable(0);     //Added and End by SMILEDINING-SA21-0025#3
    self.grandTotal = ko.observable(0);
    self.scheduleDateTime = ko.observable('');
    self.todayAsap = ko.observable(true);
    self.ticketDateTime = ko.observable('');
    self.send = ko.observable(false);
    self.confirm = ko.observable(false);
    self.isGuest = ko.observable(false);    //Added and End by SMILEDINING-SA20-0007
    self.printCount = ko.observable(0);
    self.paymentType = ko.observable('');    
    self.customerName = ko.observable('');   
    self.customerAddress = ko.observable('');
    self.customerPhone = ko.observable('');
    self.shopUsePos = ko.observable('');
    self.groupOrder = ko.observableArray([]);
    self.groupTicketPayment = ko.observableArray([]);       //Added and End by SMILEDINING-SA20-0007
    self.sumOrderChoiceName = ko.observable('');
    self.feeCreditAndMarketing = ko.observable('');   //Added and End by SMILEDINING-SA21-0080#2
    //Added by SMILEDINING-SA22-0008
    self.ticketStatus = ko.observable('');
    self.domainName = ko.observable('');
    //End Added by SMILEDINING-SA22-0008
    //Added and End by SMILEDINING-SA22-0028
    self.graguityCharge = ko.observable('');
    self.isDining = ko.observable(true);
    //End Added by SMILEDINING-SA22-0028
    //Added by WEB-SA23-0010
    self.showSplitTaxesAndFees = ko.observable(false);
    self.marketingFee = ko.observable(0);
    self.sumTaxAndFee = ko.pureComputed(function () {
        return rountTwo(self.tax()) + rountTwo(self.marketingFee());
    });
    //End Added by WEB-SA23-0010
};

function DatSetupViewModel(currentTime) {
    var self = this;

    self.action = ko.observable(cStatusAdd);

    //domain
    //self.domainId = ko.observable(0).extend({ numeric: 0 });
    self.domainId = ko.observable('0');
    self.domainName = ko.observable('');
    self.domainNameTemplate = ko.observable(null);
    self.domainNameTemplateUrl = ko.observable(null);
    self.domainValue = ko.observable('');
    self.domainDesc = ko.pureComputed(function () {
        return self.shopName();
    })
    //self.signalR = ko.observable(true); //Added and End by SMILEDINING-SA21-0043 //Modified and End by WEB-SA24-0024
    //Added by WEB-SA24-0024
    self.messagingProtocol = ko.observable(messagingProtocols.cKafkaAndSignalR);
    self.signalR = ko.observable(false);
    //End Added by WEB-SA24-0024
    self.usePos = ko.observable(true);
    self.useTemplate = ko.observable(false);
    self.active = ko.observable(true);
    self.isThirdPartyShogo = ko.observable(false);  //Added and End by SMILEDINING-SA22-0039
    self.sourceKey = ko.observable('');
    self.pin = ko.observable('');
    self.estimateTime = ko.observable(true); //Added and End by SMILEDINING-SA21-0054
    //Added by KENG
    //self.captchaEnable = ko.observable(false); //Modified and End by WEB-SA24-0024
    self.captchaEnable = ko.observable(true); //Added and End by WEB-SA24-0024
    //Added by WEB-SA24-0028
    self.reCaptchaSiteKey = ko.observable('');
    self.reCaptchaSecretKey = ko.observable('');
    //End Added by WEB-SA24-0028
    self.captchaKeepAlive = ko.observable(false);
    //End Added by KENG
    self.apiKey = ko.observable('');    //Added and End by SMILEDINING-SA21-0007
    self.marketingKey = ko.observable(''); //Added and End by SMILEDINING-SA22-0008#19
    //Added by SMILEDINING-SA19-0011
    //Added by WEB-SA22-0057
    self.apiKey_percentage = ko.observable('');
    self.sourceKey_percentage = ko.observable('');
    self.pin_percentage = ko.observable('');
    //Added by WEB-SA23-0012
    self.paymentServiceProvider = ko.observable(1);
    self.emergepayOID = ko.observable(null);
    self.emergepayToken = ko.observable(null);
    self.emergepayOID_Percentage = ko.observable(null);
    self.emergepayToken_Percentage = ko.observable(null);
    //End Added by WEB-SA23-0012
    //Added by WEB-SA23-0022
    self.emergepayApiKey = ko.observable(null);
    self.emergepayApiKey_Percentage = ko.observable(null);
    //End Added by WEB-SA23-0022
    self.otterStoreId = ko.observable(null); //Added and End by WEB-SA23-0048
    self.otterEventId = ko.observable(null); //Added and End by WEB-SA23-0048#3
    self.feePos = ko.observable(1);
    self.feeDining = ko.observable(1);
    self.feeOnTable = ko.observable(1);
    self.feeEGiftCard = ko.observable(1);
    //Added by WEB-SA22-0057#1    
    self.isMarketingKey = ko.observable(false);
    self.clickIsMarketingKey = function () {
        var value = $(event.target).val();
        if (self.isMarketingKey() != value) {
            self.isMarketingKey(value);
        }
    };    
    //End Added by WEB-SA22-0057#1

    //Modified by WEB-SA22-0057#1
    //self.clickMarketingKey = function () {
    //    if (false) {
    //        vmViewIndex.dataModal.marketingKey() == null
    //    }
    //};

    //var feePos = [];
    //feePos.push({
    //    key: '1',
    //    value: 'FlatRate'
    //});
    //feePos.push({
    //    key: '2',
    //    value: 'Percentage'
    //});
    //End Modified by WEB-SA22-0057#1      

    //Added by WEB-SA22-0057#1
    //Modified by WEB-SA23-0012
    //var fee = ko.observableArray([
    //    { key: 1, value: 'Flat Rate' },
    //    { key: 2, value: 'Percentage' }
    //]);
    //End Modified by WEB-SA23-0012
    //End Added by WEB-SA22-0057#1
    //Added by WEB-SA23-0012
    self.feeStore = new DevExpress.data.ArrayStore({
        data: [
                { name: fees.mapName[fees.cFlatRate].name, id: fees.cFlatRate },
                { name: fees.mapName[fees.cPercentage].name, id: fees.cPercentage },
        ],
        key: 'id'
    });
    //End Added by WEB-SA23-0012

    self.dxLookupFeePos = ko.observable({
        //Modified by WEB-SA23-0012
        //dataSource: new DevExpress.data.ArrayStore({
        //    //data: feePos, //Modified and End by WEB-SA-22-0057#1
        //    data: fee(),  // Added and End by WEB-SA-22-0057#1
        //    key: 'key'
        //}),
        //displayExpr: 'value',
        //valueExpr: 'key',
        //End Modified by WEB-SA23-0012
        //Added by WEB-SA23-0012
        dataSource: self.feeStore,
        displayExpr: 'name',
        valueExpr: 'id',
        //End Added by WEB-SA23-0012
        //value: '', //Modified and End by WEB-SA-22-0057#1
        value: self.feePos, // Added and End by WEB-SA-22-0057#1
        closeOnOutsideClick: true, //Added and End by WEB-SA23-0049
        showPopupTitle: false,
        onValueChanged: function (e) {
            var previousValue = e.previousValue;
            var newValue = e.value;
            self.feePos(newValue);
        }
    });

    //Modified by WEB-SA22-0057#1
    //var feeDining = [];
    //feeDining.push({
    //    key: '1',
    //    value: 'FlatRate'
    //});
    //feeDining.push({
    //    key: '2',
    //    value: 'Percentage'
    //});
    //End Modified by WEB-SA22-0057#1

    self.dxLookupFeeDining = ko.observable({
        //Modified by WEB-SA23-0012
        //dataSource: new DevExpress.data.ArrayStore({
        //    //data: feeDining, //Modified and End by WEB-SA22-0057#1
        //    data: fee(), // Added and End by WEB-SA22-0057#1
        //    key: 'key'
        //}),
        //displayExpr: 'value',
        //valueExpr: 'key',
        //End Modified by WEB-SA23-0012
        //Added by WEB-SA23-0012
        dataSource: self.feeStore,
        displayExpr: 'name',
        valueExpr: 'id',
        //End Added by WEB-SA23-0012
        //value: '', //Modified and End by WEB-SA-22-0057#1
        value: self.feeDining, // Added and End by WEB-SA-22-0057#1
        closeOnOutsideClick: true, //Added and End by WEB-SA23-0049
        showPopupTitle: false,
        onValueChanged: function (e) {
            
            var previousValue = e.previousValue;
            var newValue = e.value;
            self.feeDining(newValue);
            //Added by WEB-SA22-0057#1            
            var checkTypeDining = self.feeDining();

            if (self.isClickFeeDining() == true) { 
                if (checkTypeDining == 2) {
                    if (!(!vmViewIndex.setup.dataModal.pickupPayCash() && vmViewIndex.setup.dataModal.pickupPayCredit()
                        && !vmViewIndex.setup.dataModal.deliveryPayCash() && vmViewIndex.setup.dataModal.deliveryPayCredit())) {
                        swalConfirmActivateCreditCardAndMarkeingServiceFee();
                    }
                }
                if (checkTypeDining == 1) {
                    swal(cSwal_Alert_Warning, "Please recheck payment type.", cSwal_Icon_Warning);
                }
            }
            self.isClickFeeDining(false);            
            //End Added by WEB-SA22-0057#1
        }
    });  
    //Added by WEB-SA22-0057#1    
    self.isClickFeeDining = ko.observable(false);
    self.clickFeeDining  = function () {     
        var value = $(event.target).val();
        if (value == "") {
            self.isClickFeeDining(true);
        }
    };       
    //End Added by WEB-SA22-0057#1

    //Modified by WEB-SA22-0057#1
    //var feeOnTable = [];
    //feeOnTable.push({
    //    key: '1',
    //    value: 'FlatRate'
    //});
    //feeOnTable.push({
    //    key: '2',
    //    value: 'Percentage'
    //});
    //End Modified by WEB-SA22-0057#1
    self.dxLookupFeeOnTable = ko.observable({
        //Modified by WEB-SA23-0012
        //dataSource: new DevExpress.data.ArrayStore({
        //    //data: feeOnTable, //Modified and End by WEB-SA-22-0057#1
        //    data: fee(), // Added and End by WEB-SA-22-0057#1
        //    key: 'key'
        //}),
        //displayExpr: 'value',
        //valueExpr: 'key',
        //End Modified by WEB-SA23-0012
        //Added by WEB-SA23-0012
        dataSource: self.feeStore,
        displayExpr: 'name',
        valueExpr: 'id',
        //End Added by WEB-SA23-0012
        //value: '', //Modified and End by WEB-SA-22-0057#1
        value: self.feeOnTable, // Added and End by WEB-SA-22-0057#1
        closeOnOutsideClick: true, //Added and End by WEB-SA23-0049
        showPopupTitle: false,
        onValueChanged: function (e) {
            var previousValue = e.previousValue;
            var newValue = e.value;
            self.feeOnTable(newValue);
        }
    });
    //Modified by WEB-SA22-0057#1
    //var feeEGiftCard = [];
    //feeEGiftCard.push({
    //    key: '1',
    //    value: 'FlatRate'
    //});
    //feeEGiftCard.push({
    //    key: '2',
    //    value: 'Percentage'
    //});
    //End Modified by WEB-SA22-0057#1

    self.dxLookupFeeEGiftCard = ko.observable({
        //Modified by WEB-SA23-0012
        //dataSource: new DevExpress.data.ArrayStore({
        //    //data: feeEGiftCard, //Modified and End by WEB-SA-22-0057#1
        //    data: fee(), // Added and End by WEB-SA-22-0057#1
        //    key: 'key'
        //}),
        //displayExpr: 'value',
        //valueExpr: 'key',
        //End Modified by WEB-SA23-0012
        //Added by WEB-SA23-0012
        dataSource: self.feeStore,
        displayExpr: 'name',
        valueExpr: 'id',
        //End Added by WEB-SA23-0012
        //value: '', //Modified and End by WEB-SA-22-0057#1
        value: self.feeEGiftCard, // Added and End by WEB-SA-22-0057#1
        closeOnOutsideClick: true, //Added and End by WEB-SA23-0049
        showPopupTitle: false,
        onValueChanged: function (e) {
            var previousValue = e.previousValue;
            var newValue = e.value;
            self.feeEGiftCard(newValue);
        }
    });      
    //End by WEB-SA22-0057

    self.arrProduct = ko.observableArray([]);
    self.selectCheckBoxProduct = ko.observableArray([]);
    self.productId = ko.observable('');
    self.currentProductId = ko.observable('');      //Added and End By SMILEDINING-SA20-0005 
    self.showPaymentContactless = ko.observable(false); //Added and End by SMILEDINING-SA20-0006
    //Added by SMILEDINING-SA20-0031
    self.showSmileDining = ko.observable(false);
    self.showSmileContactless = ko.observable(false);
    //End Added by SMILEDINING-SA20-0031
    //Added by SMILEDINING-SA21-0014
    self.showThirdPartyIntegrations = ko.observable(false); 
    self.accountName = ko.observable('');
    self.locationName = ko.observable('');
    self.accountId = ko.observable('');
    self.locationId = ko.observable('');
    //End Added by SMILEDINING-SA21-0014
    //Added by SMILEDINING-SA21-0014#6
    self.listLocation = ko.observableArray([]);
    self.locationSelect = ko.observable('0');
    self.selectLocation = ko.observable({
        acceptCustomValue: false,
        dataSource: self.listLocation,
        displayExpr: 'locationName',
        value: self.locationSelect,
        valueExpr: 'locationId',
        dropDownButtonTemplate: 'dropDownButton',
        onItemClick: function (item) {
            if (item.itemData != null) {
                //Modified by SMILEDINING-SA21-0014#7
                //var listData = [];
                //if (item.itemData.locationId() == '0') {
                //    ko.utils.arrayForEach(self.listLocation(), function (items) {
                //        if (items.locationId() != '0')
                //            listData.push(items);
                //    });
                //} else {
                //    var data = ko.utils.arrayFilter(self.listLocation(), function (items) {
                //        return items.locationId() == item.itemData.locationId();
                //    });
                //    listData.push(_.first(data));
                //}
                //vmViewIndex.setup.dataModal.locationId(ko.toJSON(listData));
                //End Modified by SMILEDINING-SA21-0014#7
                vmViewIndex.setup.dataModal.locationId(ko.toJSON(item.itemData));   //Added and End by SMILEDINING-SA21-0014#7
                //Added by SMILEDINING-SA21-0066
                isLoading(true);
                setTimeout(function () {
                    var dataDispatch = JSON.parse(getObjFormAjax(cJsonGetDataDispatch, self.domainId() + ',' + item.itemData.locationId()));
                    self.listDispatch([]);
                    if (item.itemData.locationId() == self.initLocationId()) {
                        self.listDispatch(self.initListDispatch());
                    }

                    self.dispatchStore([]);
                    var dispatchIdStore = []; //Added and End by SMILEDINING-SA21-0066#5
                    ko.utils.arrayForEach(dataDispatch, function (item) {
                        self.dispatchStore.push({
                            dispatchId: ko.observable(item.dispatchId),
                            dispatchName: ko.observable(item.dispatchName),
                        });
                        dispatchIdStore.push(item.dispatchId); //Added and End by SMILEDINING-SA21-0066#5
                    });
                    //Added by SMILEDINING-SA21-0066#5
                    self.currentDispatchIdStore('');
                    self.currentDispatchIdStore(ko.toJSON(dispatchIdStore));
                    //End Added by SMILEDINING-SA21-0066#5
                    isLoading(false);
                }, 0);                
                //End Added by SMILEDINING-SA21-0066
            }
        }
    });
    //End Added by SMILEDINING-SA21-0014#6
    //self.dispatchType = ko.observable(''); //Added and End by SMILEDINING-SA22-0011 //Modified and End by WEB-SA23-0008
    self.dispatchType = ko.observable(cDispatchType_None); //Added and End by WEB-SA23-0008
    //Added by SMILEDINING-SA21-0066
    self.initLocationId = ko.observable('');
    self.initListDispatch = ko.observableArray([]);
    //self.listDispatchSelect = ko.observableArray([]); //Modified and End by SMILEDINING-SA21-0066#5
    self.listDispatchSelect = ko.observable(''); //Added and End by SMILEDINING-SA21-0066#5
    self.dispatchStore = ko.observableArray([]);
    self.currentDispatchIdStore = ko.observable(''); //Added and End by SMILEDINING-SA21-0066#5
    self.listDispatch = ko.observableArray([]);
    self.selectDispatch = ko.observable({
        dataSource: self.dispatchStore,
        displayExpr: 'dispatchName',
        valueExpr: 'dispatchId',
        value: self.listDispatch,
        showDropDownButton: true,
        searchEnabled: true,
        showSelectionControls: true,
        maxDisplayedTags: 2,
        showMultiTagOnly: false,
        onValueChanged: function (e) {
            //Modified by SMILEDINING-SA21-0066#3
            //var newValues = e.value;
            //self.listDispatchSelect(ko.toJSON(newValues));
            //End Modified by SMILEDINING-SA21-0066#3
            //Added by SMILEDINING-SA21-0066#3
            var maxItems = 1;
            if (e.value.length > maxItems) {
                const newValue = e.value.slice(0, maxItems); 
                e.component.option("value", newValue);
            }
            //Added by SMILEDINING-SA21-0066#5
            self.listDispatchSelect('');
            if (e.value.length > 0) {
            //End Added by SMILEDINING-SA21-0066#5
                self.listDispatchSelect(ko.toJSON(e.value.slice(0, maxItems)));
            } //Added and End by SMILEDINING-SA21-0066#5
            //End Added by SMILEDINING-SA21-0066#3
        },
        //Added by SMILEDINING-SA22-0022#3
        onClosed: function () {
            removeErrorMessage(cfrmSetUpDomain);
        },
        //End Added by SMILEDINING-SA22-0022#3
    });
    //End Added by SMILEDINING-SA21-0066
    self.clickSelectCheckBoxProduct = function (data, event) {

        //Added By SMILEDINING-SA20-0005
        var currentData = self.currentProductId();
        self.currentProductId(currentData);
        //End Added By SMILEDINING-SA20-0005
        //Added by WEB-SA23-0043
        if (!self.selectCheckBoxProduct().includes(products.cSmileContactless)) { 
            self.selectCheckBoxProduct.remove(products.cSmileKiosk);
        }
        //End Added by WEB-SA23-0043

        var obj = [];
        self.productId('');
        ko.utils.arrayForEach(self.selectCheckBoxProduct(), function (item) {
            obj.push(parseInt(item));
        });

        var sort = _.sortBy(obj);
        _.forEach(sort, function (item) {
            if (self.productId().length == 0) {
                self.productId(item + '');
            } else {
                var productId = self.productId();
                self.productId(productId + ',' + item);
            }
        });

        //Added by SMILEDINING-SA20-0006
        if (self.selectCheckBoxProduct().includes(products.cSmileContactless)) {
            self.showPaymentContactless(true);
            self.showSmileContactless(true);    //Added and End by SMILEDINING-SA20-0031
        }
        else {
            self.showPaymentContactless(false);
            //self.contactlessPaymentType(contactlessPaymentType.cFastService); //Modified and End by WEB-SA24-0016
            self.showSmileContactless(false);   //Added and End by SMILEDINING-SA20-0031
        }
        //End Added by SMILEDINING-SA20-0006
        //Added by SMILEDINING-SA20-0031
        if (self.selectCheckBoxProduct().includes(products.cSmileDining)) {
            self.showSmileDining(true);
        }
        else {
            self.showSmileDining(false);
        }
        //End Added by SMILEDINING-SA20-0031
        //Added by SMILEDINING-SA21-0014
        //if (self.selectCheckBoxProduct().includes(products.cSmileThirdPartyIntegrations)) { //Modified and End by SMILEDINING-SA21-0066#5
        if (self.selectCheckBoxProduct().includes(products.cSmileThirdPartyIntegrations) && self.active()) { //Added and End by SMILEDINING-SA21-0066#5
            self.showThirdPartyIntegrations(true);
            //$('.slickSetup .slick-dots li:nth-of-type(4)').removeClass('d-none'); //Modified and End by SMILEDINING-SA22-0039#2
            //$('.slickSetup .slick-dots li:nth-of-type(5)').removeClass('d-none');   //Added and End by SMILEDINING-SA22-0039#2    //Modified and End by WEB-SA22-0057
            $('.slickSetup .slick-dots li:nth-of-type(6)').removeClass('d-none');   //Added and End by WEB-SA22-0057

        }
        else {
            self.showThirdPartyIntegrations(false);
            //$('.slickSetup .slick-dots li:nth-of-type(4)').addClass('d-none');    //Modified and End by SMILEDINING-SA22-0039#2
            //$('.slickSetup .slick-dots li:nth-of-type(5)').addClass('d-none');      //Added and End by SMILEDINING-SA22-0039#2    //Modified and End by WEB-SA22-0057
            $('.slickSetup .slick-dots li:nth-of-type(6)').addClass('d-none');  //Added and End by WEB-SA22-0057
            //Modified by SMILEDINING-SA21-0014#1
            //self.accountName('');
            //self.locationName('');
            //self.accountId('');
            //self.locationId('');
            //End Modified by SMILEDINING-SA21-0014#1
        }
        //End Added by SMILEDINING-SA21-0014
        return true
    };
    //End Added by SMILEDINING-SA19-0011

    //Added by SMILEDINING-SA21-0014
    self.clickSearchDeliverectAccount = function () {
        deliverectSaveData(cfrmDeliverectActivateAccount);
    };
    self.clickZyncProduct = function () {
        deliverectSaveData(cfrmDeliverectInsertOrUpdateProduct);
    };
    //End Added by SMILEDINING-SA21-0014
    //Added by WEB-SA23-0048
    self.clickSyncProductOtter = function () {
        otterSyncProduct();
    };
    //End Added by WEB-SA23-0048 
    //Added by WEB-SA23-0048#9
    self.clickSyncProductUpdateAvailability = function () {
        otterSyncProductUpdateAvailability();
    };
    //End Added by WEB-SA23-0048#9
    //Added by WEB-SA23-0048#3
    self.clickCheckEventIdOtter = function () {
        otterCheckEventId();
    };
    //End Added by WEB-SA23-0048#3
    //Added by SMILEDINING-SA21-0028#3
    self.clickResizeImage = function () {
        ResizeImage(true);
    };
    //End Added by SMILEDINING-SA21-0028#3
    //Added by SMILEDINING-SA21-0021#9
    self.clickCreateIconImage = function () {
        createIconImageCustomDomain();
    };
    //End Added by SMILEDINING-SA21-0021#9
    //status
    self.status = ko.observable(true);
    self.closeReson = ko.observable('');
    self.closeStartDate = ko.observable('');
    self.closeEndDate = ko.observable('');
    //self.currentDate = ko.observable(moment(currentTime).format('MM/DD/YYYY')); //Added and End by SMILEDINING-SA19-0018 //Modified and End by WEB-SA24-0015
    self.currentDate = ko.observable(moment(currentTime, moment_date_format_mmddyyyy).format('L')); //Added and End by WEB-SA24-0015
    //Added by SMILEDINING-SA20-0031
    //status Contactless
    self.statusContactless = ko.observable(true);
    self.closeResonContactless = ko.observable('');
    self.closeStartDateContactless = ko.observable('');
    self.closeEndDateContactless = ko.observable('');
    //End Added by SMILEDINING-SA20-0031
    //Added by SMILEDINING-SA19-0018
    self.computeMinEndDate = ko.pureComputed(function () {
        if (self.closeStartDate() == null || isEmpty(self.closeStartDate())) {
            return self.currentDate();
        }
        else if (moment(self.closeStartDate()).isAfter(self.currentDate())) {
            return self.closeStartDate();
        }
        else {

            return self.currentDate();
        }
    });
    //End Added by SMILEDINING-SA19-0018

    self.dateBoxCloseStartDate = ko.observable({
        type: 'date',
        pickerType: 'calendar',
        //value: '',    //Modified and End by SMILEDINING-SA19-0018
        //Added by SMILEDINING-SA19-0018
        value: self.closeStartDate,
        min: self.currentDate,
        //End Added by SMILEDINING-SA19-0018
        displayFormat: 'MM-dd-yyyy',
        onValueChanged: function (options) {
            //var value = moment(options.value).format(moment_date_format_mmddyyyy); //Modified and End by WEB-SA24-0015
            var value = moment(options.value).format('L'); //Added and End by WEB-SA24-0015
            if (value == 'Invalid date') {
                self.closeStartDate('');
            } else {
                self.closeStartDate(value);
            }
        }
    });

    self.dateBoxCloseEndDate = ko.observable({
        type: 'date',
        pickerType: 'calendar',
        //value: '',    //Modified and End by SMILEDINING-SA19-0018
        //Added by SMILEDINING-SA19-0018
        value: self.closeEndDate,
        min: self.computeMinEndDate,
        //End Added by SMILEDINING-SA19-0018
        displayFormat: 'MM-dd-yyyy',
        onValueChanged: function (options) {
            //var value = moment(options.value).format(moment_date_format_mmddyyyy); //Modified and End by WEB-SA24-0015
            var value = moment(options.value).format('L'); //Added and End by WEB-SA24-0015
            if (value == 'Invalid date') {
                self.closeEndDate('');
            } else {
                self.closeEndDate(value);
            }
        }
    });

    //Added by SMILEDINING-SA20-0031
    self.computeMinEndDateContactless = ko.pureComputed(function () {
        if (self.closeStartDateContactless() == null || isEmpty(self.closeStartDateContactless())) {
            return self.currentDate();
        }
        else if (moment(self.closeStartDateContactless()).isAfter(self.currentDate())) {
            return self.closeStartDateContactless();
        }
        else {
            return self.currentDate();
        }
    });
    self.dateBoxCloseStartDateContactless = ko.observable({
        type: 'date',
        pickerType: 'calendar',
        value: self.closeStartDateContactless,
        min: self.currentDate,
        displayFormat: 'MM-dd-yyyy',
        onValueChanged: function (options) {
            //var value = moment(options.value).format(moment_date_format_mmddyyyy); //Modified and End by WEB-SA24-0015
            var value = moment(options.value).format('L'); //Added and End by WEB-SA24-0015
            if (value == 'Invalid date') {
                self.closeStartDateContactless('');
            } else {
                self.closeStartDateContactless(value);
            }
        }
    });

    self.dateBoxCloseEndDateContactless = ko.observable({
        type: 'date',
        pickerType: 'calendar',
        value: self.closeEndDateContactless,
        min: self.computeMinEndDateContactless,
        displayFormat: 'MM-dd-yyyy',
        onValueChanged: function (options) {
            //var value = moment(options.value).format(moment_date_format_mmddyyyy); //Modified and End by WEB-SA24-0015
            var value = moment(options.value).format('L'); //Added and End by WEB-SA24-0015
            if (value == 'Invalid date') {
                self.closeEndDateContactless('');
            } else {
                self.closeEndDateContactless(value);
            }
        }
    });
    //End Added by SMILEDINING-SA20-0031

    //shop
    self.shopNumber = ko.pureComputed(function () {
        return self.domainId();
    })
    self.shopName = ko.observable('');
    self.shopAddress = ko.observable('');
    self.shopCity = ko.observable('');
    self.shopState = ko.observable('');
    self.shopPostal = ko.observable('');
    self.shopPhone = ko.observable('');
    self.shopFax = ko.observable('');
    self.shopEmail = ko.observable('');
    self.shopEmailGiftCard = ko.observable(''); //Added and End by SMILEDINING-SA20-0014
    self.lat = ko.observable('');
    self.lng = ko.observable('');
    self.timeZoneCode = ko.observable('');
    self.timePickupStart = ko.observable(0).extend({ numeric: 0 });
    self.timePickupEnd = ko.observable(0).extend({ numeric: 0 });
    self.timeDeliveryStart = ko.observable(0).extend({ numeric: 0 });
    self.timeDeliveryEnd = ko.observable(0).extend({ numeric: 0 });

    self.store = new DevExpress.data.ArrayStore({
        data: [],
        key: 'timeZoneCode'
    }),

    self.dxLookuptimeZoneCode = ko.observable({
        //dataSource: new DevExpress.data.ArrayStore({
        //    data: [],
        //    key: 'timeZoneCode'
        //}),
        dataSource: self.store,
        displayExpr: 'name',
        valueExpr: 'timeZoneCode',
        value: '',
        closeOnOutsideClick: true, //Added and End by WEB-SA23-0049
        showPopupTitle: false,
        onValueChanged: function (e) {
            var previousValue = e.previousValue;
            var newValue = e.value;
            self.timeZoneCode(newValue);
        }
    });

    //Payment
    self.serviceFee = ko.observable(0.00).extend({ numeric: 2 });
    self.deliveryChargeTax = ko.observable(0.00).extend({ numeric: 2 });
    //Modified by SMILEDINING-SA22-0032
    //self.creditCardFee = ko.observable(0.00).extend({ numeric: 2 });
    ////Added by SMILEDINING-SA21-0080
    //self.marketingServiceFee = ko.observable(0.00).extend({ numeric: 2 }); 
    //End Modified by SMILEDINING-SA22-0032
    self.serviceFeePercent = ko.observable(0.00).extend({ numeric: 2 }); //Added and End by SMILEDINING-SA22-0032
    self.feeCreditAndMarketing = ko.observable(false);
    //End Added by SMILEDINING-SA21-0080
    //self.minimumOrder = ko.observable(0).extend({ numeric: 0 });          //Modified by SMILEDINING-SA19-0003
    // Added by SMILEDINING-SA19-0003    
    self.minimumOrder = ko.observable(0.00).extend({ numeric: 2 });
    self.minimumOrderForPickup = ko.observable(0.00).extend({ numeric: 2 });
    self.showminimumOrderForPickup = ko.observable(false);
    // End Added by SMILEDINING-SA19-0003

    self.calDeliveryTax = ko.observable(true);
    self.commissionRule = ko.observable('1');
    self.isCalTax = ko.observable(true); //Added and End by SMILEDINING-SA21-0057
    self.isCalTaxContactless = ko.observable(true);//Added and End by SMILEDINING-SA21-0070
    //Modified by SMILEDINING-SA20-0044
    //self.payCash = ko.observable(true);
    //self.payCredit = ko.observable(true);
    //End Modified by SMILEDINING-SA20-0044
    //Added by SMILEDINING-SA20-0044
    self.pickupPayCash = ko.observable(true);
    self.pickupPayCredit = ko.observable(true);
    self.deliveryPayCash = ko.observable(true);
    self.deliveryPayCredit = ko.observable(true);
    //End Added by SMILEDINING-SA20-0044
    //self.statementType = ko.observable('1');    //0 weekly 1 monthly //Modified and End by WEB-SA23-0035#1
    self.mapCode = ko.observable('1');  //0 : lat/long , code 1 : mile

    self.shippingType = ko.observable('2');
    self.menuHourTimeStart = ko.observable('ASAP');     //Added and End by SMILEDINING-SA20-0004
    self.contactlessPaymentType = ko.observable(contactlessPaymentType.cFastService); //Added and End by SMILEDINING-SA20-0006
    self.contactlessPaymentMethod = ko.observable(contactlessPaymentMethod.cDefault); //Added and End by WEB-SA24-0016
    //Added by SMILEDINING-SA20-0038
    self.isCustomTimeMenu = ko.observable(false);
    self.customDay = ko.observable(0).extend({ numeric: 0 });
    self.customHours = ko.observable(0).extend({ numeric: 0 });
    self.isShowCustomTimeMenu = ko.observable(false);
    //End Added by SMILEDINING-SA20-0038
    //self.autoSyncProduct = ko.observable(false);    //Added and End by SMILEDINING-SA21-0014 //Modified and End by WEB-SA24-0003
    self.autoSyncProduct = ko.observable(true);    //Added and End by WEB-SA24-0003
    //Added by SMILEDINING-SA22-0012#1
    self.tipAuto = ko.observable('');
    self.tipGuide = ko.observable('');
    self.dispatchServiceCharge = ko.observable(0.00).extend({ numeric: 2 });
    //End Added by SMILEDINING-SA22-0012#1
    //Added by WEB-SA23-0010
    self.showSplitTaxesAndFeesProductIds = ko.observableArray([]);
    self.productsSplitTaxesAndFeesStore = ko.observableArray([
        { name: products.mapName[products.cSmileDining].name, id: products.cSmileDining },
        { name: products.mapName[products.cSmileContactless].name, id: products.cSmileContactless },
    ]);
    self.selectProductIdsForSplitTaxesAndFees = ko.observable({
        dataSource: self.productsSplitTaxesAndFeesStore,
        displayExpr: 'name',
        valueExpr: 'id',
        value: self.showSplitTaxesAndFeesProductIds,
        showDropDownButton: true,
        searchEnabled: true,
        showSelectionControls: true,
        maxDisplayedTags: 2,
        showMultiTagOnly: false,
        onValueChanged: function (e) {},
    });
    //End Added by WEB-SA23-0010
    
    var commissonRule = [];
    commissonRule.push({
        key: '1',
        value: 'Percentage'
    });
    commissonRule.push({
        key : '2',
        value: 'Transaction'
    });
    commissonRule.push({
        key: '3',
        value: 'Tier'
    });

    self.dxLookupCommission = ko.observable({
        dataSource: new DevExpress.data.ArrayStore({
            data: commissonRule,
            key: 'key'
        }),
        displayExpr: 'value',
        valueExpr: 'key',
        value: '1',
        closeOnOutsideClick: true, //Added and End by WEB-SA23-0049
        showPopupTitle: false,
        onValueChanged: function (e) {
            var previousValue = e.previousValue;
            var newValue = e.value;
            self.commissionRule(newValue);
        }
    });

    self.dxNumBoxTimePickupStart = {
        value: self.timePickupStart
    }

    self.dxNumBoxTimePickupEnd = {
        value: self.timePickupEnd
    }

    self.dxNumBoxTimeDeliveryStart = {
        value: self.timeDeliveryStart
    }

    self.dxNumBoxTimeDeliveryEnd = {
        value: self.timeDeliveryEnd
    }

    self.blurDomainId = function () {
        var value = $(event.target).val();
        if (!$.isNumeric(value)) {
            value = 0;
        }
        //else {
        //    value = parseInt(value);
        //}
        //if (value < 0) {
        //    value = 0;
        //}
        self.domainId(value);
    }

    self.blurTimePickupStart = function () {
        var value = $(event.target).val();
        if (!$.isNumeric(value)) {
            value = 0;
        } else {
            value = parseInt(value);
        }
        if (value < 0) {
            value = 0;
        }
        self.timePickupStart(value);
    }

    self.blurTimePickupEnd = function () {
        var value = $(event.target).val();
        if (!$.isNumeric(value)) {
            value = 0;
        } else {
            value = parseInt(value);
        }
        if (value < 0) {
            value = 0;
        }
        self.timePickupEnd(value);
    }

    self.blurTimeDeliveryStart = function () {
        var value = $(event.target).val();
        if (!$.isNumeric(value)) {
            value = 0;
        } else {
            value = parseInt(value);
        }
        if (value < 0) {
            value = 0;
        }
        self.timeDeliveryStart(value);
    }

    self.blurTimeDeliveryEnd = function () {
        var value = $(event.target).val();
        if (!$.isNumeric(value)) {
            value = 0;
        } else {
            value = parseInt(value);
        }
        if (value < 0) {
            value = 0;
        }
        self.timeDeliveryEnd(value);
    }
    self.blurMinimumOrder = function () {
        var value = $(event.target).val();
        if (!$.isNumeric(value)) {
            value = 0;
        } else {
            //value = parseInt(value);   // Modified and End By SMILEDINING-SA19-0003
            value = parseFloat(value); // Added and End By SMILEDINING-SA19-0003
        }
        if (value < 0) {
            value = 0;
        }
        self.minimumOrder(value);
    }

    // Added By SMILEDINING-SA19-0003
    self.blurMinimumOrderForPickup = function () {
        var value = $(event.target).val();
        if (!$.isNumeric(value)) {
            value = 0;
        } else {
            value = parseFloat(value);
        }
        if (value < 0) {
            value = 0;
        }
        self.minimumOrderForPickup(value);
    }
    // End Added By SMILEDINING-SA19-0003

    self.blurServiceFee = function(){
        var value = $(event.target).val();
        if (!$.isNumeric(value)) {
            value = 0;
        } else {
            value = rountTwo(value);
        }
        if (value < 0) {
            value = 0;
        }
        self.serviceFee(value);
    }

    self.blurDeliveryChargeTax = function () {
        var value = $(event.target).val();
        if (!$.isNumeric(value)) {
            value = 0;
        } else {
            value = rountTwo(value);
        }
        if (value < 0) {
            value = 0;
        }
        self.deliveryChargeTax(value);
    }

    //Modified by SMILEDINING-SA22-0032
    //self.blurCreditCardFee = function () {
    //    var value = $(event.target).val();
    //    if (!$.isNumeric(value)) {
    //        value = 0;
    //    } else {
    //        value = rountTwo(value);
    //    }
    //    if (value < 0) {
    //        value = 0;
    //    }
    //    self.creditCardFee(value);
    //}
    //End Modified by SMILEDINING-SA22-0032

    //Added by SMILEDINING-SA22-0032
    self.blurServiceFeePercent = function () {
        var value = $(event.target).val();
        if (!$.isNumeric(value)) {
            value = 0;
        } else {
            value = rountTwo(value);
        }
        if (value < 0) {
            value = 0;
        }
        self.serviceFeePercent(value);
    }
    //End Added by SMILEDINING-SA22-0032

    //Added by SMILEDINING-SA22-0012#1
    self.blurDispatchServiceCharge = function () {
        var value = $(event.target).val();
        if (!$.isNumeric(value)) {
            value = 0;
        } else {
            value = rountTwo(value);
        }
        if (value < 0) {
            value = 0;
        }
        self.dispatchServiceCharge(value);
    };
    //End Added by SMILEDINING-SA22-0012#1

    //Added by SMILEDINING-SA21-0080
    //Modified by SMILEDINING-SA22-0032
    //self.blurMarketingServiceFee = function () {
    //    var value = $(event.target).val();
    //    if (!$.isNumeric(value)) {
    //        value = 0;
    //    } else {
    //        value = rountTwo(value);
    //    }
    //    if (value < 0) {
    //        value = 0;
    //    }
    //    self.marketingServiceFee(value);
    //};
    //End Modified by SMILEDINING-SA22-0032
    //Modified by WEB-SA22-0057#1
    //self.clickFeeCreditAndMarketing = function () {
    //    var value = $(event.target).val();

    //    if (!self.feeCreditAndMarketing() && value) {
    //        if (!(!vmViewIndex.setup.dataModal.pickupPayCash() && vmViewIndex.setup.dataModal.pickupPayCredit()
    //            && !vmViewIndex.setup.dataModal.deliveryPayCash() && vmViewIndex.setup.dataModal.deliveryPayCredit())) {
    //            swalConfirmActivateCreditCardAndMarkeingServiceFee();
    //        } else {
    //            vmViewIndex.setup.dataModal.feeCreditAndMarketing(true);
    //            $('#btnDomain_MarketingServiceFeeYes').addClass('active');
    //            $('#btnDomain_MarketingServiceFeeNo').removeClass('active');
    //        }
    //    }
    //    if (self.feeCreditAndMarketing() && !value) {
    //        self.feeCreditAndMarketing(false);
    //        $('#btnDomain_MarketingServiceFeeYes').removeClass('active');
    //        $('#btnDomain_MarketingServiceFeeNo').addClass('active');
    //        swal(cSwal_Alert_Warning, "Please recheck payment type.", cSwal_Icon_Warning);
    //    }
    //};
    //End Modified by WEB-SA22-0057#1
    //End Added by SMILEDINING-SA21-0080
    //Modified by SMILEDINING-SA21-0081
    //Added by SMILEDINING-SA21-0043
    //self.clicksignalR = function () {
    //   self.signalR(!self.signalR());
    //};
    //End Added by SMILEDINING-SA21-0043
    //self.clickActive = function () {
    //    self.active(!self.active());
    //    //Added by SMILEDINING-SA21-0066#5
    //    if (self.selectCheckBoxProduct().includes(products.cSmileThirdPartyIntegrations) && self.active()) {
    //        self.showThirdPartyIntegrations(true);
    //        $('.slickSetup .slick-dots li:nth-of-type(4)').removeClass('d-none');
    //    } else {
    //        self.showThirdPartyIntegrations(false);
    //        $('.slickSetup .slick-dots li:nth-of-type(4)').addClass('d-none');
    //    }
    //    //End Added by SMILEDINING-SA21-0066#5
    //};

    //self.clickUsePos = function () {
    //     self.usePos(!self.usePos());
    //};

    //self.clickUseTemplate = function () {
    //    self.useTemplate(!self.useTemplate());
    //};

    ////Added by KENG
    //self.clickCaptchaEnable = function () {
    //    self.captchaEnable(!self.captchaEnable());
    //};

    //self.clickCaptchaKeepAlive = function () {
    //    self.captchaKeepAlive(!self.captchaKeepAlive());
    //};
    ////End Added by KENG

    //self.clickStatus = function () {		
    //    self.status(!self.status());
    //};

    ////Added by SMILEDINING-SA20-0031
    //self.clickStatusContactless = function () {
    //    self.statusContactless(!self.statusContactless());
    //};
    ////End Added by SMILEDINING-SA20-0031

    ////Added by SMILEDINING-SA21-0054
    //self.clickEstimateTime = function () {
    //    self.estimateTime(!self.estimateTime());
    //}
    //End Added by SMILEDINING-SA21-0054
    //End Modified by SMILEDINING-SA21-0081
    //Added by WEB-SA24-0024
    self.clickKafkaAndSignalRProtocol = function () {
        self.messagingProtocol(messagingProtocols.cKafkaAndSignalR);
    };

    self.clickMqttProtocol = function () {
        self.messagingProtocol(messagingProtocols.cMqtt);
    };
    //End Added by WEB-SA24-0024
    //Added by SMILEDINING-SA21-0081
    self.clicksignalR = function () {
        var value = $(event.target).val();
        if (self.signalR() != value) {
            self.signalR(value);
        }
    };
    self.clickActive = function () {
        var value = $(event.target).val();
        if (self.active() != value) {
            self.active(value);
            if (self.selectCheckBoxProduct().includes(products.cSmileThirdPartyIntegrations) && self.active()) {
                self.showThirdPartyIntegrations(true);
                //$('.slickSetup .slick-dots li:nth-of-type(4)').removeClass('d-none'); //Modified and End by SMILEDINING-SA22-0039#2
                //$('.slickSetup .slick-dots li:nth-of-type(5)').removeClass('d-none');   //Added and End by SMILEDINING-SA22-0039#2    //Modified and End by WEB-SA22-0057
                $('.slickSetup .slick-dots li:nth-of-type(6)').removeClass('d-none');   //Added and End by WEB-SA22-0057
            } else {
                self.showThirdPartyIntegrations(false);
                //$('.slickSetup .slick-dots li:nth-of-type(4)').addClass('d-none');    //Modified and End by SMILEDINING-SA22-0039#2
                //$('.slickSetup .slick-dots li:nth-of-type(5)').addClass('d-none');      //Added and End by SMILEDINING-SA22-0039#2    //Modified and End by WEB-SA22-0057
                $('.slickSetup .slick-dots li:nth-of-type(6)').addClass('d-none');      //Added and End by WEB-SA22-0057
            }
        }
    };
    self.clickUsePos = function () {
        var value = $(event.target).val();
        if (self.usePos() != value) {
            self.usePos(value);
        }
    };
    self.clickUseTemplate = function () {
        var value = $(event.target).val();
        if (self.useTemplate() != value) {
            self.useTemplate(value);
        }
    };
    self.clickCaptchaEnable = function () {
        var value = $(event.target).val();
        if (self.captchaEnable() != value) {
            self.captchaEnable(value);
        }
    };
    self.clickCaptchaKeepAlive = function () {
        var value = $(event.target).val();
        if (self.captchaKeepAlive() != value) {
            self.captchaKeepAlive(value);
        }
    };
    self.clickStatus = function () {		
        var value = $(event.target).val();
        if (self.status() != value) {
            self.status(value);
        }
    };
    self.clickStatusContactless = function () {
        var value = $(event.target).val();
        if (self.statusContactless() != value) {
            self.statusContactless(value);
        }
    };
    self.clickEstimateTime = function () {
        var value = $(event.target).val();
        if (self.estimateTime() != value) {
            self.estimateTime(value);
        }
    }
    //End Added by SMILEDINING-SA21-0081
    //Modified by SMILEDINING-SA21-0081
    //self.clickMapCode = function () {
    //    if (self.mapCode() == '1') {
    //        self.mapCode('2');
    //    } else {
    //        self.mapCode('1');
    //    }
    //};
    //End Modified by SMILEDINING-SA21-0081
    //Added by SMILEDINING-SA21-0081
    self.clickMapCode = function () {
        var value = $(event.target).val();
        if (self.mapCode() != value) {
            self.mapCode(value);
        }
    };
    //End Added by SMILEDINING-SA21-0081
    self.clickShippingTypePickup = function () {
        self.shippingType('0');
    };

    self.clickShippingTypeDelivery = function () {
        self.shippingType('1');
    };

    self.clickShippingTypeBoth = function () {
        self.shippingType('2');
    };

    //Added by SMILEDINING-SA20-0004
    self.clickMenuHourStartAsap = function () {
        self.menuHourTimeStart('ASAP');
        self.isCustomTimeMenu(false);    //Added and End by SMILEDINING-SA20-0038
    };

    self.clickMenuHourStartToday = function () {
        self.menuHourTimeStart('TODAY');
        self.isCustomTimeMenu(false);    //Added and End by SMILEDINING-SA20-0038
    };

    self.clickMenuHourStartTodayOnly = function () {
        self.menuHourTimeStart('TODAYONLY');
        self.isCustomTimeMenu(false);    //Added and End by SMILEDINING-SA20-0038
    };
    //End Added by SMILEDINING-SA20-0004
    //Added by SMILEDINING-SA21-0052
    self.clickMenuHourStartNoAsap = function () {
        self.menuHourTimeStart('NOASAP');
        self.isCustomTimeMenu(false);
    };
    //End Added by SMILEDINING-SA21-0052
    //Added by SMILEDINING-SA20-0013
    self.clickMenuHourStartAsapOnly = function () {
        self.menuHourTimeStart('ASAPONLY');
        self.isCustomTimeMenu(false);    //Added and End by SMILEDINING-SA20-0038
    };
    //End Added by SMILEDINING-SA20-0013
    //Added by SMILEDINING-SA20-0038
    self.clickMenuHourStartCustom = function () {
        self.menuHourTimeStart('CUSTOM');
        self.isCustomTimeMenu(true);
    };

    self.blurCustomDay = function () {
        var value = $(event.target).val();
        if (!$.isNumeric(value)) {
            value = 0;
        } else {
            value = parseInt(value);
        }
        if (value < 0) {
            value = 0;
        }
        self.customDay(value);
    }

    self.blurCustomHours = function () {
        var value = $(event.target).val();
        if (!$.isNumeric(value)) {
            value = 0;
        } else {
            value = parseInt(value);
        }
        if (value < 0) {
            value = 0;
        }
        self.customHours(value);
    }
    //End Added by SMILEDINING-SA20-0038
    //Added by WEB-SA23-0012
    self.clickPaymentServiceProvider = function () {
        var value = $(event.target).val();
        if (self.paymentServiceProvider() != value) {
            self.paymentServiceProvider(value);
        }
    };
    //End Added by WEB-SA23-0012

    //Modified by SMILEDINING-SA20-0044
    //self.clickPayCash = function(){
    //    self.payCash(!self.payCash());
    //};

    //self.clickPayCredit = function () {
    //    self.payCredit(!self.payCredit());
    //};
    //End Modified by SMILEDINING-SA20-0044

    //Modified by SMILEDINING-SA21-0080
    ////Added by SMILEDINING-SA20-0044
    //self.clickPayCashPickup = function () {
    //    self.pickupPayCash(!self.pickupPayCash());
    //};
    //self.clickPayCreditPickup = function () {
    //    self.pickupPayCredit(!self.pickupPayCredit());
    //};

    //self.clickPayCashDelivery = function () {
    //    self.deliveryPayCash(!self.deliveryPayCash());
    //};

    //self.clickPayCreditDelivery = function () {
    //    self.deliveryPayCredit(!self.deliveryPayCredit());
    //};
    ////End Added by SMILEDINING-SA20-0044
    //End Modified by SMILEDINING-SA21-0080
    
    //Added by SMILEDINING-SA21-0080
    self.clickPayCashPickup = function () {
        var value = $(event.target).val();
        if (self.pickupPayCash() != value) {
            //if (value && self.feeCreditAndMarketing()) { //Modified and End by WEB-SA22-0057#1
            if (value && self.feeDining() == cFeeType_Percentage) { //Added and End by WEB-SA22-0057#1
                swalValidatePaymentType(true, true);
            } else {
                self.pickupPayCash(value);
            }
        }
    };

    self.clickPayCreditPickup = function () {
        var value = $(event.target).val();
        if (self.pickupPayCredit() != value) {
            //if (!value && self.feeCreditAndMarketing()) { //Modified and End by WEB-SA22-0057#1
            if (!value && self.feeDining() == cFeeType_Percentage) { //Added and End by WEB-SA22-0057#1
                swalValidatePaymentType(true, false);
            } else {
                self.pickupPayCredit(value);
            }
        }
    };

    self.clickPayCashDelivery = function () {
        var value = $(event.target).val();
        if (self.deliveryPayCash() != value) {
        //if (value && self.feeCreditAndMarketing()) { //Modified and End by SMILEDINING-SA22-0012#1
        //Modified by WEB-SA22-0046
        //if (value && (self.feeCreditAndMarketing() || self.webDispatch() != null)) { //Added and End by SMILEDINING-SA22-0012#1
        //    swalValidatePaymentType(false, true);
        //End Modified by WEB-SA22-0046
        //Added by WEB-SA22-0046
            //if (value && self.feeCreditAndMarketing() && self.webDispatch() != null) {    //Modified and End by WEB-SA22-0057#1
            if (value && self.feeDining() == cFeeType_Percentage && self.webDispatch() != null) { //Added and End by WEB-SA22-0057#1
                swalValidatePaymentType(false, true, true, true);
            //} else if (value && self.feeCreditAndMarketing()) { //Modified and End by WEB-SA22-0057#1
            } else if (value && self.feeDining() == cFeeType_Percentage) { //Added and End by WEB-SA22-0057#1
                swalValidatePaymentType(false, true, true, false);
            } else if (value && self.webDispatch() != null) {
                swalValidatePaymentType(false, true, false, true);
        //End Added by WEB-SA22-0046
            } else {
                self.deliveryPayCash(value);
            }
        }
    };

    self.clickPayCreditDelivery = function () {
        var value = $(event.target).val();
        if (self.deliveryPayCredit() != value) {
        //if (!value && self.feeCreditAndMarketing()) { //Modified and End by SMILEDINING-SA22-0012#1
        //Modified by WEB-SA22-0046
        //if (!value && (self.feeCreditAndMarketing() || self.webDispatch() != null)) { //Added and End by SMILEDINING-SA22-0012#1
        //swalValidatePaymentType(false, false);
        //End Modified by WEB-SA22-0046
        //Added by WEB-SA22-0046
            //if (!value && self.feeCreditAndMarketing() && self.webDispatch() != null) { //Modified and End by WEB-SA22-0057#1
            if (!value && self.feeDining() == cFeeType_Percentage && self.webDispatch() != null) {  //Added and End by WEB-SA22-0057#1   
                swalValidatePaymentType(false, false, true, true);
            //} else if (!value && self.feeCreditAndMarketing()) { //Modified and End by WEB-SA22-0057#1
            } else if (!value && self.feeDining() == cFeeType_Percentage) {  //Added and End by WEB-SA22-0057#1  
                swalValidatePaymentType(false, false, true, false);
            } else if (!value && self.webDispatch() != null) {
                swalValidatePaymentType(false, false, false, true);
        //End Added by WEB-SA22-0046
            } else {
                self.deliveryPayCredit(value);
            }
        }
    };
    //End Added by SMILEDINING-SA21-0080
    //Modified by SMILEDINING-SA21-0081
    //self.clickCalDeliveryTax = function () {
    //    self.calDeliveryTax(!self.calDeliveryTax());
    //};

    ////Added by SMILEDINING-SA21-0057
    //self.clickCalTax = function () {
    //    self.isCalTax(!self.isCalTax());
    //};
    ////End Added by SMILEDINING-SA21-0057

    ////Added by SMILEDINING-SA21-0070
    //self.clickCalTaxContaceless = function () {
    //    self.isCalTaxContactless(!self.isCalTaxContactless());
    //};
    //End Added by SMILEDINING-SA21-0070
    //self.clickStatementType = function () {
    //    if (self.statementType() == '1') {
    //        self.statementType('2');
    //    } else {
    //        self.statementType('1');
    //    }
    //};
    //End Modified by SMILEDINING-SA21-0081
    //Added by SMILEDINING-SA21-0081
    self.clickCalDeliveryTax = function () {
        var value = $(event.target).val();
        if (self.calDeliveryTax() != value) {
            self.calDeliveryTax(value);
        }
    };
    self.clickCalTax = function () {
        var value = $(event.target).val();
        if (self.isCalTax() != value) {
            self.isCalTax(value);
        }
    };
    self.clickCalTaxContaceless = function () {
        var value = $(event.target).val();
        if (self.isCalTaxContactless() != value) {
            self.isCalTaxContactless(value);
        }
    };
    //Modified by WEB-SA23-0035#1
    //self.clickStatementType = function () {
    //    var value = $(event.target).val();
    //    if (self.statementType() != value) {
    //        self.statementType(value);
    //    }
    //};
    //End Modified by WEB-SA23-0035#1
    //End Added by SMILEDINING-SA21-0081
 
    //Added by SMILEDINING-SA20-0006
    self.clickFastService = function () {
        self.contactlessPaymentType(contactlessPaymentType.cFastService);
        self.contactlessPaymentMethod(contactlessPaymentMethod.cDefault); //Added and End by WEB-SA24-0016
    };
    self.clickFineDining = function () {
        self.contactlessPaymentType(contactlessPaymentType.cFineDining);
    };
    //End Added by SMILEDINING-SA20-0006

    //Added by WEB-SA24-0016
    self.clickPaymentMethodDefault = function () {
        self.contactlessPaymentMethod(contactlessPaymentMethod.cDefault);
    };

    self.clickPaymentMethodPayAtStoreOnly = function () {
        self.contactlessPaymentMethod(contactlessPaymentMethod.cPayAtStoreOnly);
    };
    //End Added by WEB-SA24-0016
    //Modified by SMILEDINING-SA21-0081
    //Added by SMILEDINING-SA21-0014
    //self.clickAutoSyncProduct = function () {
    //    self.autoSyncProduct(!self.autoSyncProduct());
    //};
    //End Added by SMILEDINING-SA21-0014
    //End Modified by SMILEDINING-SA21-0081
    //Added by SMILEDINING-SA21-0081
    self.clickAutoSyncProduct = function () {
        var value = $(event.target).val();
        if (self.autoSyncProduct() != value) {
            self.autoSyncProduct(value);
        }
    };
    //End Added by SMILEDINING-SA21-0081
    //Added by SMILEDINING-SA21-0066
    //Modified by SMILEDINING-SA21-0066#1
    //self.webDispatch = ko.observable(false); 
    //self.clickWebDispatch = function () {
    //    self.webDispatch(!self.webDispatch());
    //};
    //End Modified by SMILEDINING-SA21-0066#1
    //End Added by SMILEDINING-SA21-0066
    
    //Added by SMILEDINING-SA21-0066#1
    self.webDispatch = ko.observable(null); 
    self.clickWebDispatchYes = function () {
        //self.webDispatch(true); //Modified and End by SMILEDINING-SA22-0012#1
        //Added by SMILEDINING-SA22-0012#1
        if (self.webDispatch() != true) {
            self.webDispatch(true);
            checkDispatch();
        }
        //End Added by SMILEDINING-SA22-0012#1
    };
    self.clickWebDispatchNo = function () {
        //self.webDispatch(false); //Modified and End by SMILEDINING-SA22-0012#1
        //Added by SMILEDINING-SA22-0012#1
        if (self.webDispatch() != false) {
            self.webDispatch(false);
            checkDispatch();
        }
        //End Added by SMILEDINING-SA22-0012#1
    };
    self.clickWebDispatchNone = function () {
        //self.webDispatch(null); //Modified and End by SMILEDINING-SA22-0012#1
        //Added by SMILEDINING-SA22-0012#1
        if (self.webDispatch() != null) {
            self.webDispatch(null);
            self.dispatchType(cDispatchType_None); //Added and End by SMILEDINING-SA22-0022
            swal(cSwal_Alert_Warning, "Please recheck payment type.", cSwal_Icon_Warning);
        }
        //End Added by SMILEDINING-SA22-0012#1
    };
    //End Added by SMILEDINING-SA21-0066#1
    //Added by SMILEDINING-SA22-0011
    self.clickDispatchType = function () {
        var value = $(event.target).val();
        if (self.dispatchType() != value) {
            self.dispatchType(value);
            checkDispatch(); //Added and End by SMILEDINING-SA22-0012#1
        }
    };
    //End Added by SMILEDINING-SA22-0011
    //Added by SMILEDINING-SA20-0031#4
    self.isClickShopCloseSmileDining = ko.observable(true);
    self.clickCustomShopClose = function () {
        //var shopClose = JSON.parse(getObjFormDomainFormAjax(cJsonGetShopClose, self.domainValue(), products.cSmileDining)); //Modified and End by SMILEDINING-SA22-0008
        var shopClose = JSON.parse(getObjFormDomainFormAjax(cJsonGetShopClose, self.domainId(), products.cSmileDining));  //Added and End by SMILEDINING-SA22-0008
        DataShopCloseSetUpViewModel(shopClose);
        self.isClickShopCloseSmileDining(true);
        $('#modalShowShopClose').modal({
            keyboard: false,
            backdrop: "static",
            show: true
        });
    };
    self.clickCustomShopCloseContactless = function () {
        //var shopClose = JSON.parse(getObjFormDomainFormAjax(cJsonGetShopClose, self.domainValue(), products.cSmileContactless)); //Modified and End by SMILEDINING-SA22-0008
        var shopClose = JSON.parse(getObjFormDomainFormAjax(cJsonGetShopClose, self.domainId(), products.cSmileContactless)); //Added and End by SMILEDINING-SA22-0008
        DataShopCloseSetUpViewModel(shopClose);
        self.isClickShopCloseSmileDining(false);

        $('#modalShowShopClose').modal({
            keyboard: false,
            backdrop: "static",
            show: true
        });

    };
    //Added by SMILEDINING-SA22-0039
    self.clickIsThirdPartyShogo = function () {
        var value = $(event.target).val();
        if (self.isThirdPartyShogo() != value) {
            self.isThirdPartyShogo(value);
        }
    };       
    //End Added by SMILEDINING-SA22-0039
     self.clickCloseModalShowShopClose = function () {
        $('#modalSetup').css({ 'overflow-x': 'hidden', 'overflow-y': 'auto' });
    };
    self.dataShopClose = ko.observableArray([]);
    self.dataSetUpModalShopClose = new SetUpShopCloseViewModel();

    self.dataGridShopClose = ko.observable({
        dataSource: self.dataShopClose,
        showBorders: false,
        showColumnHeader: false,
        showColumnLines: false,
        showRowLines: true,
        visible: true,
        hoverStateEnabled: true,
        columnAutoWidth: false,
        columnHidingEnabled: false,
        rowAlternationEnabled: false,
        onInitialized: function (e) {
            dataGrid = e.component;
        },
        columns: [
            {
                caption: '#', width: 40, alignment: 'center',
                cellTemplate: function (container, options) {
                    container.text(dataGrid.pageIndex() * dataGrid.pageSize() + options.rowIndex + 1);
                }
            },
            { dataField: 'startDate', caption: 'StartDate', alignment: 'center', dataType: 'date', width: '200' },
            { dataField: 'endDate', caption: 'EndDate', alignment: 'center', dataType: 'date', width: '200' },
            { dataField: 'reason', caption: 'CloseReason', width: '200' },
            { dataField: 'time', caption: '', width: 80, alignment: 'center' }
        ],
        onCellPrepared: function (options) {
            var column = options.column;
            var fieldData = options.value,
                fieldHtml = '';

            if (column.dataField === 'time') {
                if (!isEmpty(fieldData)) {
                    fieldHtml = "<span><i class='fa fa-trash fa-lg' style='color:red;'></i></span>";
                    options.cellElement.html(fieldHtml);
                }
            }
        },
        onCellClick: function (e) {
            var data = e.data;
            if (e.rowType == 'data' && e.column.dataField == 'time') {
                var id = '';
                if (data.time().length == 1) {
                    id = _.first(data.time()).shopCloseId();
                } else {
                    id = data.time()[0].shopCloseId() + ',' + data.time()[1].shopCloseId();
                }
                //swalConfirmDeleteShopClose(cfrmDeleteShopClose, id); //Modified and End by WEB-SA23-0008
                //Added by WEB-SA23-0008
                if (checkMqttConnection(cfrmDeleteShopClose)) {
                    swalConfirmDeleteShopClose(cfrmDeleteShopClose, id);
                } else {
                    swal(cSwal_Alert_Error, cError_Fail_Mqtt_Connection, cSwal_Icon_Error);
                    vmViewIndex.isKiosk(false);
                }
                //End Added by WEB-SA23-0008
            } else if (e.rowType == 'data') {
                var unmap = ko.mapping.toJSON(data);
                ko.mapping.fromJSON(unmap, {}, self.dataSetUpModalShopClose);
                var dataTime = data.time();
                //Modified by SMILEDINING-SA22-0008#14
                //dataTime.sort(function sortByTime(a, b) {
                //    var aTimestart = moment(a.startTimePmAm(), moment_time_format_hhmmssa);
                //    var bTimestart = moment(b.startTimePmAm(), moment_time_format_hhmmssa);
                //    return aTimestart > bTimestart ? 1 : -1;
                //});
                //End Modified by SMILEDINING-SA22-0008#14
                //Added by SMILEDINING-SA22-0008#14
                if (dataTime[0].startTimePmAm() != null && dataTime[1].startTimePmAm != null) {
                        dataTime.sort(function sortByTime(a, b) {
                        var aTimestart = moment(a.startTimePmAm(), moment_time_format_hhmmssa);
                        var bTimestart = moment(b.startTimePmAm(), moment_time_format_hhmmssa);
                        return aTimestart > bTimestart ? 1 : -1;
                    });
                }
                //End Added by SMILEDINING-SA22-0008#14
                self.dataSetUpModalShopClose.shopCloseIdFirst(_.first(dataTime).shopCloseId());
                self.dataSetUpModalShopClose.hasShowSecondTime(true);
                // 24 Hour??
                if (_.first(dataTime).startTime() == time_start_24h && _.first(dataTime).endTime() == time_end_24h) {
                    self.dataSetUpModalShopClose.valActive24Hour(true);
                    self.dataSetUpModalShopClose.valFirstHourStartTime(moment(time_start_24h, moment_time_format_hhmmss));
                    self.dataSetUpModalShopClose.valFirstHourEndTime(moment(time_end_24h, moment_time_format_hhmmss));

                }
                else {
                    self.dataSetUpModalShopClose.valActive24Hour(false);
                    self.dataSetUpModalShopClose.valFirstHourStartTime(moment(_.first(dataTime).startTime(), moment_time_format_hhmmss));
                    self.dataSetUpModalShopClose.valFirstHourEndTime(moment(_.first(dataTime).endTime(), moment_time_format_hhmmss));
                }

                // Second Peried time
                if (dataTime.length > 1) {
                    self.dataSetUpModalShopClose.valSecondHourStartTime(moment(dataTime[1].startTime(), moment_time_format_hhmmss));
                    self.dataSetUpModalShopClose.valSecondHourEndTime(moment(dataTime[1].endTime(), moment_time_format_hhmmss));
                    self.dataSetUpModalShopClose.shopCloseIdSecond(dataTime[1].shopCloseId());
                    self.dataSetUpModalShopClose.hasShowSecondTime(false);
                }

                self.dataSetUpModalShopClose.disableButtonSubmit(false);
                $('#modalSetUpShopClose').modal({
                    keyboard: false,
                    backdrop: "static",
                    show: true
                });
                self.dataSetUpModalShopClose.chkBtnUpdate(true);
                self.dataSetUpModalShopClose.chkBtnAdd(false);
            }
        },
        onToolbarPreparing: function (e) {
            var toolbarItems = e.toolbarOptions.items;
            toolbarItems.push({
                widget: 'dxButton',
                location: 'after',
                options: {
                    icon: 'fa fa-search',
                    hint: 'Search',
                    onClick: function () {
                        if (self.chkSearch() == false) {
                            self.chkSearch(true);
                        } else if (self.chkSearch() == true) {
                            self.chkSearch(false);
                        }
                    }
                }
            },
            {
                widget: 'dxButton',
                location: 'after',
                options: {
                    icon: 'fa fa-plus',
                    hint: 'Add',
                    onClick: function () {
                        self.dataSetUpModalShopClose.disableButtonSubmit(false);
                        self.dataSetUpModalShopClose.valFirstHourStartTime(moment(time_start_24h, moment_time_format_hhmmss));
                        self.dataSetUpModalShopClose.valFirstHourEndTime(moment(time_end_24h, moment_time_format_hhmmss));
                        self.dataSetUpModalShopClose.hasShowSecondTime(true);
                        $('#modalSetUpShopClose').modal({
                            keyboard: false,
                            backdrop: "static",
                            show: true
                        });
                        self.dataSetUpModalShopClose.chkBtnUpdate(false);
                        self.dataSetUpModalShopClose.chkBtnAdd(true);
                    }
                }
            }
            );
        },
        searchPanel: {
            visible: self.chkSearch,
            placeholder: "Search...",
            highlightSearchText: false
        },
        loadPanel: {
            enabled: true,
            showPane: false,
            text: ""
        },
        pager: {
            showPageSizeSelector: true,
            allowedPageSizes: [30, 60, 90],
            showInfo: false,
            visible: true
        },
        paging: {
            enabled: true,
            pageIndex: 0,
            pageSize: 30
        },
        onRowPrepared: function (e) {
            e.rowElement.addClass('myRow-hover');
        },
        onContentReady: function (e) {
            $("#gridShopClose .dx-scrollable").dxScrollable({ showScrollbar: 'always' });
        }
    }); //dataGridShopClose
    //End Added by SMILEDINING-SA20-0031#4
    //Added by WEB-SA23-0020
    self.isAdditionalCharge = ko.observable(false);
    self.additionalChargeTypeList = ko.observableArray([]);
    self.tempAdditionalChargeList = ko.observableArray([]);
    self.additionalChargeList = ko.observableArray([]);

    self.clickAdditionalCharge = function () {
        var value = $(event.target).val();
        if (self.isAdditionalCharge() != value) {
            self.isAdditionalCharge(value);
        }
        if (self.isAdditionalCharge()) {
            ko.utils.arrayForEach(self.tempAdditionalChargeList(), function (item) {
                self.additionalChargeList.push(new DataAdditionalChargeViewModel(item));
            });
            if (self.additionalChargeList().length == 0) {
                self.additionalChargeList.push(new DataAdditionalChargeViewModel(null));
            }
        } else {
            self.additionalChargeList([]);
        }
    };

    self.clickBtnAddAdditionalCharge = function () {
        if (self.additionalChargeList().length < cAdditionalCharge_Max) {
            self.additionalChargeList.push(new DataAdditionalChargeViewModel(null));
        }
    };

    self.clickBtnRemoveAdditionalCharge = function (i, data, event) {
        const index = i();
        self.additionalChargeList.splice(index, 1);
        if (self.additionalChargeList().length == 0) {
            self.isAdditionalCharge(false);
        }
        removeErrorMessage(cfrmSetUpDomain);
    };

    self.blurAdditionalChargeAmount = function (i, data, event) {
        var value = $(event.target).val();
        const index = i();
        if (!$.isNumeric(value)) {
            value = 0;
        } else {
            value = rountTwo(value);
        }
        if (value < 0) {
            value = 0;
        }
        self.additionalChargeList()[index].amountCharge(value);
    };

    self.changeValueDxLookupAdditionalCharge = function (index, data) {
        var value = data.value;
        var model = data.model;
        var filterAdditionalChargeType = ko.utils.arrayFirst(self.additionalChargeTypeList(), function (item) {
            return item.additionalChargeTypeId() == value;
        });
        if (!isEmpty(filterAdditionalChargeType)) {
            var checkDuplicate = ko.utils.arrayFilter(self.additionalChargeList(), function (item, i) {
                return item.additionalChargeTypeId() == filterAdditionalChargeType.additionalChargeTypeId() && i != index;
            });
            if (isEmpty(checkDuplicate)) {
                model.additionalChargeTypeId(filterAdditionalChargeType.additionalChargeTypeId());
                model.additionalChargeTypeName(filterAdditionalChargeType.additionalChargeTypeName());
                model.refId(filterAdditionalChargeType.refId());
            } else {
                model.additionalChargeTypeId(0);
                swal(cSwal_Alert_Error, 'Additional Charge Name is duplicated. Please select other Name.', cSwal_Icon_Error);
            }
        } else {
            model.additionalChargeTypeId(0);
        }
    };
    //End Added by WEB-SA23-0020
};

//Added by SMILEDINING-SA20-0031#4
function DataShopCloseSetUpViewModel(data) {
    var self = vmViewIndex.setup.dataModal;
    var groups = _.groupBy(data, function (value) {
        return value.startDate + '#' + value.endDate;
    });
    var listDataTime = [];
    _.forEach(groups, function (value, key) {
        var listTime = [];
        listTime.push(new DataTimeCloseViewModel(value[0]));
        if (value.length > 1) {
            listTime.push(new DataTimeCloseViewModel(value[1]));
        }
        listDataTime.push({
            startDate: value[0].startDate,
            endDate: value[0].endDate,
            reason: value[0].reason,
            time: listTime
        });
    });
    ko.mapping.fromJS(listDataTime, {}, self.dataShopClose);
};

function DataShopCloseViewModel(data) {
    var self = this;
    var firstData = _.first(data);
    self.startDate = ko.observable(firstData.startDate);
    self.endDate = ko.observable(firstData.endDate);
    self.reason = ko.observable(firstData.reason);
    var dataTime = [];
    ko.utils.arrayForEach(data, function (item) {
        var value = new DataTimeCloseViewModel(item);
        dataTime.push(value);
    });
    self.time = ko.observableArray(dataTime.slice(0));
};

function DataTimeCloseViewModel(data) {
    var self = this;
    self.startTime = ko.observable(data.startTime);
    self.endTime = ko.observable(data.endTime);
    self.startTimePmAm = ko.observable(data.startTimePmAm);
    self.endTimePmAm = ko.observable(data.endTimePmAm);
    self.shopCloseId = ko.observable(data.shopCloseId);
};

function SetUpShopCloseViewModel() {
    var self = this;
    self.shopCloseIdFirst = ko.observable('');
    self.shopCloseIdSecond = ko.observable('');
    self.startDate = ko.observable(moment().format('L'));
    self.endDate = ko.observable(moment().format('L'));
    self.startTime = ko.observable(null);
    self.endTime = ko.observable(null);
    self.reason = ko.observable('');
    self.valFirstHourStartTime = ko.observable(null);
    self.valFirstHourEndTime = ko.observable(null);
    self.valSecondHourStartTime = ko.observable(null);
    self.valSecondHourEndTime = ko.observable(null);
    self.valActive24Hour = ko.observable(true);
    self.hasShowSecondTime = ko.observable(false);
    self.enableSaveChanges = ko.observable(true);
    self.chkBtnUpdate = ko.observable(false);
    self.chkBtnAdd = ko.observable(true);
    self.disableButtonSubmit = ko.observable(false);

    self.dateFromDateBox = ko.observable({
        acceptCustomValue: false,
        pickerType: "calendar",
        type: "date",
        value: self.startDate,
        width: 150,
        onValueChanged: function (v) {
            if (v.value === "" || v.value === null || v.value === undefined) {
                v.component.option("isValid", false);
            }
            self.startDate(moment(new Date(v.value)).format('L'));
        },
        onKeyDown: function (e) {
            e.jQueryEvent.stopPropagation();
            e.jQueryEvent.preventDefault();
        },
        onInitialized: function (e) {
            setTimeout(function () {
                e.component.field().on('click', function () {
                    if (!e.component.option('opened'))
                        e.component.open();
                });
            });
        }
    });

    self.dateEndDateBox = ko.observable({
        acceptCustomValue: false,
        pickerType: "calendar",
        type: "date",
        value: self.endDate,
        min: self.startDate,
        width: 150,
        onValueChanged: function (v) {
            if (v.value === "" || v.value === null || v.value === undefined) {
                v.component.option("isValid", false);
            }
            self.endDate(moment(new Date(v.value)).format('L'));
        },
        onKeyDown: function (e) {
            e.jQueryEvent.stopPropagation();
            e.jQueryEvent.preventDefault();
        },
        onContentReady: function (e) {
            setTimeout(function () {
                e.component.field().on('click', function () {
                    if (!e.component.option('opened'))
                        e.component.open();
                });
            });
        }
    });
    self.clickActive24Hour = ko.observable({
        offText: 'NO',
        onText: 'YES',
        value: self.valActive24Hour,
        width: '55px',
        onValueChanged: function (item) {
            var self = vmViewIndex.setup.dataModal.dataSetUpModalShopClose;
            if (item.value == true) {
                self.valFirstHourStartTime(moment(time_start_24h, moment_time_format_hhmmss));
                self.valFirstHourEndTime(moment(time_end_24h, moment_time_format_hhmmss));
                self.valSecondHourStartTime(null);
                self.valSecondHourEndTime(null);

                self.valActive24Hour(true);
                self.hasShowSecondTime(true);
            } else {
                self.valActive24Hour(false);
            }
        }
    });

    self.timeObj = ko.pureComputed(function () {
        var data;
        if (self.valActive24Hour()) {
            data = {
                'active24Hour': self.valActive24Hour(),
                'firstStart': moment(time_start_24h, moment_time_format_hhmmss).format(moment_time_format_HHmmss),
                'firstEnd': moment(time_end_24h, moment_time_format_hhmmss).format(moment_time_format_HHmmss),
                'secondStart': null,
                'secondEnd': null,
                'showSecondTime': !self.hasShowSecondTime()
            };

        } else if (self.hasShowSecondTime()) {
            data =
                {
                    'active24Hour': self.valActive24Hour(),
                    'firstStart': moment(self.valFirstHourStartTime()).format(moment_time_format_HHmmss),
                    'firstEnd': moment(self.valFirstHourEndTime()).format(moment_time_format_HHmmss),
                    'secondStart': null,
                    'secondEnd': null,
                    'showSecondTime': !self.hasShowSecondTime()
                };
        } else {
            data =
                {
                    'active24Hour': self.valActive24Hour(),
                    'firstStart': moment(self.valFirstHourStartTime()).format(moment_time_format_HHmmss),
                    'firstEnd': moment(self.valFirstHourEndTime()).format(moment_time_format_HHmmss),
                    'secondStart': moment(self.valSecondHourStartTime()).format(moment_time_format_HHmmss),
                    'secondEnd': moment(self.valSecondHourEndTime()).format(moment_time_format_HHmmss),
                    'showSecondTime': !self.hasShowSecondTime()
                };
        }
        return ko.toJSON(data);
    });

    self.clickShowSecondTime = function () {
        self.hasShowSecondTime(false);
        self.valSecondHourStartTime(null);
        self.valSecondHourEndTime(null);
    };
    self.clickHiddenSecondTime = function () {
        self.hasShowSecondTime(true);
        self.valSecondHourStartTime(null);
        self.valSecondHourEndTime(null);
    };

    self.valFirstHourStartTimeEdit = ko.observable({
        max: self.valFirstHourEndTime,
        pickerType: "list",
        type: "time",
        value: self.valFirstHourStartTime,
        disabled: self.valActive24Hour,
        onValueChanged: function (v) {
            if (v.value === "" || v.value === null || v.value === undefined) {
                v.component.option("isValid", false);
            }
            self.valFirstHourStartTime(v.value);
            self.enableSaveChanges(true);
        },
        onChange: function (v) {
            if (v.component._options.validationError != null) {
                self.enableSaveChanges(false);
            } else {
                self.enableSaveChanges(true);
            }
        }
    });
    self.valFirstHourEndTimeEdit = ko.observable({
        min: self.valFirstHourStartTime,
        max: self.valSecondHourStartTime,
        type: "time",
        pickerType: "list",
        value: self.valFirstHourEndTime,
        disabled: self.valActive24Hour,
        onValueChanged: function (v) {
            if (v.value === "" || v.value === null || v.value === undefined) {
                v.component.option("isValid", false);
            }
            self.valFirstHourEndTime(v.value);
            self.enableSaveChanges(true);
        },
        onChange: function (v) {
            if (v.component._options.validationError != null) {
                self.enableSaveChanges(false);
            } else {
                self.enableSaveChanges(true);
            }
        }
    });
    self.valSecondHourStartTimeEdit = ko.observable({
        min: self.valFirstHourEndTime,
        max: self.valSecondHourEndTime,
        type: "time",
        pickerType: "list",
        value: self.valSecondHourStartTime,
        disabled: self.valActive24Hour,
        onValueChanged: function (v) {
            if (v.value === "" || v.value === null || v.value === undefined) {
                v.component.option("isValid", false);
            }
            self.valSecondHourStartTime(v.value);
            self.enableSaveChanges(true);
        },
        onChange: function (v) {
            if (v.component._options.validationError != null) {
                self.enableSaveChanges(false);
            } else {
                self.enableSaveChanges(true);
            }
        }
    });
    self.valSecondHourEndTimeEdit = ko.observable({
        min: self.valSecondHourStartTime,
        type: "time",
        pickerType: "list",
        value: self.valSecondHourEndTime,
        disabled: self.valActive24Hour,
        onValueChanged: function (v) {
            if (v.value === "" || v.value === null || v.value === undefined) {
                v.component.option("isValid", false);
            }
            self.valSecondHourEndTime(v.value);
            self.enableSaveChanges(true);
        },
        onChange: function (v) {
            if (v.component._options.validationError != null) {
                self.enableSaveChanges(false);
            } else {
                self.enableSaveChanges(true);
            }
        }
    });

    self.btnCloseSetUpShopClose = function () {
        self.clearSetUpShopClose();
    };

    self.clearSetUpShopClose = function () {
        self.shopCloseIdFirst('');
        self.shopCloseIdSecond('');
        self.startDate(moment().format('L'));
        self.endDate(moment().format('L'));
        self.startTime(null);
        self.endTime(null);
        self.reason('');
        self.valFirstHourStartTime(moment(time_start_24h, moment_time_format_hhmmss));
        self.valFirstHourEndTime(moment(time_end_24h, moment_time_format_hhmmss));
        self.valSecondHourStartTime(null);
        self.valSecondHourEndTime(null);
        self.valActive24Hour(true);
        self.hasShowSecondTime(true);
        self.enableSaveChanges(true);
    };

};
//End Added by SMILEDINING-SA20-0031#4
//Added by WEB-SA23-0020
function DataAdditionalChargeViewModel(data) {
    var self = this;
    if (!isEmpty(data)) {
        self.additionalChargeId = ko.observable(data.additionalChargeId());
        self.additionalChargeTypeId = ko.observable(data.additionalChargeTypeId());
        self.additionalChargeTypeName = ko.observable(data.additionalChargeTypeName());
        self.refId = ko.observable(data.refId());
        self.amountCharge = ko.observable(data.amountCharge()).extend({ numeric: 2 });
        self.createOn = ko.observable(data.createOn());
        self.modifyOn = ko.observable(data.modifyOn());
        self.active = ko.observable(data.active());
    } else {
        self.additionalChargeId = ko.observable(0);
        self.additionalChargeTypeId = ko.observable(0);
        self.additionalChargeTypeName = ko.observable(null);
        self.refId = ko.observable(null);
        self.amountCharge = ko.observable(0).extend({ numeric: 2 });
        self.createOn = ko.observable(null);
        self.modifyOn = ko.observable(null);
        self.active = ko.observable(true);
    }
};
//End Added by WEB-SA23-0020

function DataOwnerViewModel() {
    var self = this;
    self.customerId = ko.observable('');
    self.ownerId = ko.observable('');
    self.ownerPhone = ko.observable('');
    self.email = ko.observable('');
    self.firstName = ko.observable('');
    self.lastName = ko.observable('');
    self.password = ko.observable('');
    self.confirmPassword = ko.observable('');
    self.domainId = ko.observable('');    
    self.action = ko.observable(cStatusAdd);
    self.domainDesc = ko.observable('');    //Added and End by SMILEDINING-SA22-0008
    self.showPassword = ko.observable(true);
    self.clickShowPassword = function () {
        self.showPassword(!self.showPassword());
        if (self.showPassword() == false) {
            self.password('');
            self.confirmPassword('');
        }
    };
    self.customerKey = ko.pureComputed(function () {
    return self.domainId() + ':' + self.email();
    });

    self.store = new DevExpress.data.ArrayStore({
        data: [],
        key: 'domainId'
    }),

    self.dxLookupDomain = ko.observable({
        //dataSource: new DevExpress.data.ArrayStore({
        //    data: [],
        //    key: 'domainId'
        //}),
        dataSource: self.store,
        displayExpr: 'domainDesc',
        valueExpr: 'domainId',
        value: '',
        closeOnOutsideClick: true, //Added and End by WEB-SA23-0049
        showPopupTitle: false,
        onValueChanged: function (e) {
            var previousValue = e.previousValue;
            var newValue = e.value;
            self.domainId(newValue);
        },
        //Added by SMILEDINING-SA22-0008
        onSelectionChanged: function (e) {
            var domainDesc = e.selectedItem.domainDesc();
            self.domainDesc(domainDesc);
        }
        //End Added by SMILEDINING-SA22-0008
    });
};

function DataChangePasswordViewModel() {
    var self = this;
    self.email = ko.observable('');
    self.firstName = ko.observable('');
    self.lastName = ko.observable('');
    self.currentPassword = ko.observable('');
    self.newPassword = ko.observable('');
    self.confirmPassword = ko.observable('');
    self.showPassword = ko.observable(false);
    self.clickShowPassword = function () {
        self.showPassword(!self.showPassword());
        if (self.showPassword() == false) {
            self.currentPassword('');
            self.newPassword('');
            self.confirmPassword('');
        }
    };
};

function DataCreateAccountViewModel() {
    var self = this;
    self.firstName = ko.observable('');
    self.lastName = ko.observable('');
    self.email = ko.observable('');
    self.newPassword = ko.observable('');
    self.confirmPassword = ko.observable('');
    self.securityCode = ko.observable('');
    //Added by WEB-SA22-0050 
    self.roleName = ko.observable(cRoleName_Support);
    var roleNameValues = ko.observable([
        {value: cRoleName_Support},
        {value: cRoleName_Tester},
        {value: cRoleName_Accounting}
    ]);
    self.selectRoleName = ko.observable({
        dataSource: new DevExpress.data.ArrayStore({
            data: roleNameValues(),
            key: "value"
        }),
        displayExpr: 'value',
        valueExpr: 'value',
        value: self.roleName,
        dropDownButtonTemplate: 'dropDownButton',
        onValueChanged: function (v) { 
            vmViewIndex.setting.dataModalCreateAccount.roleName(v.value);
        }
    });
    //End Added by WEB-SA22-0050
};

//Added by SMILEDINING-SA18-0011
function DataUserViewModel() {
    var self = this;
    self.userId = ko.observable(null);
    self.email = ko.observable('');
    self.firstName = ko.observable('');
    self.lastName = ko.observable('');
    self.phone = ko.observable('');
    self.active = ko.observable(true);

    self.enableSendResetPassword = ko.observable(true);

    self.action = ko.observable(cStatusAdd);

    self.clickResetpassword = function (data, event) {
        if (isEmpty(self.email())) {
            swal(cSwal_Alert_Error, replaceNewLineToBr('require email'), cSwal_Icon_Error);
        } else {
            self.enableSendResetPassword(false);
            sendResetPasswordForWebReport(self.email());
        }
    };

    self.clickActive = function () {
        self.active(!self.active());
    };
};

function sendResetPasswordForWebReport(email) {
    var auth = firebase.auth();
    var emailAddress = email;

    auth.sendPasswordResetEmail(emailAddress).then(function (data) {
        vmViewIndex.webreport.dataUserModal.enableSendResetPassword(true);
        swal(cSwal_Alert_Success, replaceNewLineToBr('Reset password is success.'), cSwal_Icon_Success);

    }).catch(function (error) {
        // Handle Error Reset Password Email.
        var errorCode = error.code;
        var errorMessage = error.message;
        swal(cSwal_Alert_Error, replaceNewLineToBr('Email is incorrectly formatted.'), cSwal_Icon_Error);
    });
};

function DataRoleMenuMapModel() {
    var self = this;
    self.roleMenuMapId = ko.observable(null);
    self.customerId = ko.observable(null);
    self.roleMenuMap = ko.observableArray([]);
    self.action = ko.observable(cStatusAdd);

    self.dataObj = ko.computed(function () {
        return ko.toJSON(self.roleMenuMap());
    });

    self.storeCustomer = new DevExpress.data.ArrayStore({
        data: [],
        key: 'customerId'
    });

    self.dxLookupCustomerValid = ko.observable(true);
    self.dxLookupCustomerValidError = ko.observableArray([]);

    self.dxLookupCustomer = ko.observable({
        dataSource: self.storeCustomer,
        displayExpr: 'shopName',
        valueExpr: 'customerId',
        value: '',
        closeOnOutsideClick: true, //Added and End by WEB-SA23-0049
        showPopupTitle: false,
        onValueChanged: function (e) {
            var previousValue = e.previousValue;
            var newValue = e.value;

            var filter = ko.utils.arrayFilter(vmViewIndex.webreport.dataRoleMenuMap(), function (item) {
                return item.customerId() == newValue;
            });

            //if (filter.length > 0 && !isEmpty(previousValue)) { //Modified and End by SMILEDINING-SA22-0008#8
            if (isEmpty(newValue) && !isEmpty(previousValue)) { //Added and End by SMILEDINING-SA22-0008#8
                swal(cSwal_Alert_Error, replaceNewLineToBr(cError_Restaurant_Empty), cSwal_Icon_Error);
                self.dxLookupCustomer({ value: '' });
                self.customerId(null);
                return false;
            }

            self.customerId(newValue);
            removeErrorMessageRoleMenuMap();
        },
        isValid: self.dxLookupCustomerValid,
        validationError: self.dxLookupCustomerValidError
    });

};

function ChildrenDataRoleMenuMapModel(id, name, children) {
    var self = this;
    self.roleId = ko.observable(id);
    self.roleName = ko.observable(name);
    self.arrMenu = ko.observableArray([]);

    var Menu = function (id, name) {
        var self = this;
        self.menuId = ko.observable(id);
        self.menuName = ko.observable(name);
    };

    var data = children.map(function (item) {
        self.arrMenu.push(item.id);
        return new Menu(item.id, item.name);
    });

    self.clickMenu = function (data, event) {

        var filter = ko.utils.arrayFilter(self.children(), function (item) {
            return item.menuId() == data.menuId();
        });

        if (filter.length > 0) {
            self.children.remove(function (item) {
                return item.menuId() == data.menuId();
            });
        } else {
            self.children.push(new Menu(data.menuId(), data.menuName()));
        }

        return true
    };

    self.children = ko.observableArray(data);
};

function DataUserRoleMapModel() {
    var self = this;
    self.userRoleMapId = ko.observable(null);
    self.customerId = ko.observable(null);
    self.userId = ko.observable(null);
    self.roleId = ko.observable(null);
    self.active = ko.observable(true);

    self.storeRole = new DevExpress.data.ArrayStore({
        data: [],
        key: 'roleId'
    });

    self.storeCustomer = new DevExpress.data.ArrayStore({
        data: [],
        key: 'customerId'
    });

    self.storeUser = new DevExpress.data.ArrayStore({
        data: [],
        key: 'userId'
    });

    self.dxLookupCustomerValid = ko.observable(true);
    self.dxLookupUserValid = ko.observable(true);
    self.dxLookupRoleValid = ko.observable(true);

    self.dxLookupCustomerValidError = ko.observableArray([]);
    self.dxLookupUserValidError = ko.observableArray([]);
    self.dxLookupRoleValidError = ko.observableArray([]);

    self.dxLookupCustomer = ko.observable({
        dataSource: self.storeCustomer,
        displayExpr: 'shopName',
        valueExpr: 'customerId',
        value: '',
        closeOnOutsideClick: true, //Added and End by WEB-SA23-0049
        showPopupTitle: false,
        onValueChanged: function (e) {
            var previousValue = e.previousValue;
            var newValue = e.value;
            self.customerId(newValue);
            removeErrorMessageUserRoleMap();
        },
        isValid: self.dxLookupCustomerValid,
        validationError: self.dxLookupCustomerValidError
    });

    self.dxLookupUser = ko.observable({
        dataSource: self.storeUser,
        displayExpr: 'email',
        valueExpr: 'userId',
        value: '',
        closeOnOutsideClick: true, //Added and End by WEB-SA23-0049
        showPopupTitle: false,
        onValueChanged: function (e) {
            var previousValue = e.previousValue;
            var newValue = e.value;
            self.userId(newValue);
            removeErrorMessageUserRoleMap();
        },
        isValid: self.dxLookupUserValid,
        validationError: self.dxLookupUserValidError
    });

    self.dxLookupRole = ko.observable({
        dataSource: self.storeRole,
        displayExpr: 'roleName',
        valueExpr: 'roleId',
        value: '',
        closeOnOutsideClick: true, //Added and End by WEB-SA23-0049
        showPopupTitle: false,
        onValueChanged: function (e) {
            var previousValue = e.previousValue;
            var newValue = e.value;
            self.roleId(newValue);
            removeErrorMessageUserRoleMap();
        },
        isValid: self.dxLookupRoleValid,
        validationError: self.dxLookupRoleValidError
    });

    self.action = ko.observable(cStatusAdd);
};
//End Added by SMILEDINING-SA18-0011

//Added by SMILEDINING-SA19-0011
function DataGiftCerModel() {
    var self = this;
    self.domainId = ko.observable();
    self.domainName = ko.observable('');
    self.times = ko.observable(0);
    self.isMain = ko.observable(true);

    self.selectJoinDomainId = ko.observable(null);
    self.selectJoinDomainName = ko.observable('');

    self.dataJoinDomain = ko.observableArray([]);

    self.storeDomainData = new DevExpress.data.ArrayStore({
        data: [],
        key: 'domainId'
    });

    self.storeDomain = new DevExpress.data.ArrayStore({
        data: [],
        key: 'domainId'
    });

    self.dxLookupDomainValid = ko.observable(true);

    self.dxLookupDomainValidError = ko.observableArray([]);

    self.dxLookupDomain = ko.observable({
        dataSource: self.storeDomain,
        displayExpr: 'domainDesc',
        valueExpr: 'domainId',
        value: '',
        closeOnOutsideClick: true, //Added and End by WEB-SA23-0049
        showPopupTitle: false,
        onValueChanged: function (e) {
            var previousValue = e.previousValue;
            var newValue = e.value;

            var filter = _.head(ko.utils.arrayFilter(self.storeDomainData._array, function (item) {
                return (item.domainId() === newValue);
            }));

            if (isEmpty(filter)) {
                self.selectJoinDomainId(null);
                self.selectJoinDomainName('');
            } else {
                self.selectJoinDomainId(filter.domainId());
                self.selectJoinDomainName(filter.domainName());
            }

            removeErrorMessage(cfrmGiftCer);
        },
        isValid: self.dxLookupDomainValid,
        validationError: self.dxLookupDomainValidError
    });

    self.clickJoin = function () {
        var filter = _.head(ko.utils.arrayFilter(self.dataJoinDomain(), function (item) {
            return (item.domainId() === self.selectJoinDomainId());
        }));

        if (!isEmpty(filter) && filter.domainId().length > 0) {
            swal(cSwal_Alert_Error, replaceNewLineToBr(cError_Duplicate_Restaurant), cSwal_Icon_Error);
            self.dxLookupDomain({ value: '' });
            return false;
        }

        if (self.selectJoinDomainName().length == 0) {
            swal(cSwal_Alert_Error, replaceNewLineToBr(cError_Restaurant_Empty), cSwal_Icon_Error);
            return false;
        }

        self.dataJoinDomain.push(new DataGiftCerJoinModel(self.selectJoinDomainId(), self.selectJoinDomainName()));
        self.dxLookupDomain({ value: '' });
    };

    self.dataObj = ko.pureComputed(function () {
        return ko.toJSON(self.dataJoinDomain());
    });

    self.action = ko.observable(cStatusAdd);
};

function DataGiftCerJoinModel(domainId, domainName) {
    var self = this;
    self.domainId = ko.observable(domainId);
    self.domainName = ko.observable(domainName);
    self.close = function (data, event) {
        vmViewIndex.egiftcard.dataGiftCerModal.dataJoinDomain.remove(function (item) {
            return item.domainId() == data.domainId();
        });
    }
};

function DataGiftCerDetailModel(domainId, domainName) {
    var self = this;
    self.domainId = ko.observable(domainId);
    self.domainName = ko.observable(domainName);
    self.data = ko.observableArray([]);
};

function DataGiftCerSearchModel() {
    var self = this;
    self.search = ko.observable(false);
    self.domainId = ko.observable('');
    self.giftCode = ko.observable();
    self.blurGiftCode = function () {
        var value = $(event.target).val();
        if (!$.isNumeric(value)) {
            value = 0;
        }
        self.giftCode(value);
    };

    self.dataGiftCer = ko.observableArray([]);
    self.dataGiftCerAccount = ko.observableArray([]);
    self.dataGiftCerTransaction = ko.observableArray([]);

    self.dataGridEgiftCard = ko.observable({
        onInitialized: function (e) {
            dataGrid = e.component;
        },
        dataSource: self.dataGiftCerTransaction,
        showColumnLines: true,
        showRowLines: true,
        showBorders: true,
        hoverStateEnabled: true,
        //columnChooser: {
        //    enabled: true,
        //    mode: 'select'
        //},
        sorting: { mode: 'multiple' },
        paging: {
            pageSize: 15
        },
        pager: {
            showPageSizeSelector: true,
            allowedPageSizes: [15, 30, 60, 90],
            showInfo: true,
            showNavigationButtons: true,
            showPageSizeSelector: true,
            visible: true
        },
        filterRow: { visible: true },
        allowColumnReordering: true,
        columnAutoWidth: true,
        columns: [
            {
                caption: '#', width: 80, alignment: 'center',
                cellTemplate: function (container, options) {
                    container.text(dataGrid.pageIndex() * dataGrid.pageSize() + options.rowIndex + 1);
                }
            },
            { dataField: 'tDate', caption: 'Date', alignment: 'center', width: '200px' },
            { dataField: 'tAction', caption: 'Description', alignment: 'center', cssClass: 'left' },
            { dataField: 'tAmount', caption: 'Amount', alignment: 'center', width: '80px' },
            { dataField: 'tStatus', caption: 'Status', alignment: 'center', width: '80px' },
          
        ],
        //onRowPrepared: function (e) {
        //    e.rowElement.addClass('datagrid-summary-state-hover');
        //},
        onRowClick: function (info) {
            var data = info.data;
        },
    });
};

function DataGiftCerSearchDateModel(currentTime) {
    var self = this;
    var newDate;
    if (isFireFox()) {
        newDate = new Date();
    } else {
        //newDate = getDateJs(moment(currentTime).format(moment_date_format_mmddyyyy)); //Modified and End by WEB-SA24-0015
        newDate = getDateJs(moment(currentTime).format('L')); //Added and End by WEB-SA24-0015
    }
    self.startDateBox = ko.observable({
        type: 'date',
        pickerType: 'calendar',
        //value: currentTime,
        value: newDate,
        displayFormat: 'MM-dd-yyyy',
        onValueChanged: function (options) {
            var value = moment(options.value).format(moment_date_format_mmddyyyy);
            //self.selectDate(value);
            self.startDate(value);
        }
    });

    self.endDateBox = ko.observable({
        type: 'date',
        pickerType: 'calendar',
        //value: currentTime,
        value: newDate,
        displayFormat: 'MM-dd-yyyy',
        onValueChanged: function (options) {
            var value = moment(options.value).format(moment_date_format_mmddyyyy);
            //self.selectDate(value);
            self.endDate(value);
        }
    });

    //self.selectDate = ko.observable(moment(currentTime).format(moment_date_format_mmddyyyy));
    self.startDate = ko.observable(moment(currentTime).format(moment_date_format_mmddyyyy));
    self.endDate = ko.observable(moment(currentTime).format(moment_date_format_mmddyyyy));

    self.domainId = ko.observable('');
    self.giftCode = ko.observable();
    self.data = ko.observableArray([]);
    self.dataEgiftCardOnly = ko.observableArray([]);
    //Added by SMILEDINING-SA22-0008
    self.dataGiftCerOrder = ko.observableArray([]);
    self.domainName = ko.observable('');
    //End Added by SMILEDINING-SA22-0008
    //Added by SMILEDINING-SA22-0023
    self.dataGiftCerSendType = ko.observableArray([
        { id: 1, name: 'Email' },
        { id: 2, name: 'SMS' },
        { id: 3, name: 'Email/SMS' },
    ]);
    self.giftCerSendTypeId = ko.observable(3);
    self.checkEditGiftCard = function (sendTypeId) { 
        var form = $(".popupEditGiftCard .dx-form").dxForm("instance");
        setTimeout(function () {
            form.itemOption("toEmail", "visible", sendTypeId == 2 ? false : true);
            form.itemOption("toEmail", "validationRules", sendTypeId == 2 ? null : [{ type: 'required' }]);
            form.itemOption("toPhone", "visible", sendTypeId == 1 ? false : true);
            form.itemOption("toPhone", "validationRules", sendTypeId == 1 ? null : [{ type: 'required' }]);
        },0);
    };
    //End Added by SMILEDINING-SA22-0023

    self.dataGridEgiftCard = ko.observable({
        onInitialized: function (e) {
            dataGrid = e.component;
        },
        dataSource: self.data,
        showColumnLines: true,
        showRowLines: true,
        showBorders: true,
        //hoverStateEnabled: true,
        //columnChooser: {
        //    enabled: true,
        //    mode: 'select'
        //},
        sorting: { mode: 'multiple' },
        paging: {
            pageSize: 15
        },
        pager: {
            showPageSizeSelector: true,
            allowedPageSizes: [15, 30, 60, 90],
            showInfo: true,
            showNavigationButtons: true,
            showPageSizeSelector: true,
            visible: true
        },
        filterRow: { visible: true },
        allowColumnReordering: true,
        columnAutoWidth: true,
        columns: [
            {
                caption: '#', width: 80, alignment: 'center',
                cellTemplate: function (container, options) {
                    container.text(dataGrid.pageIndex() * dataGrid.pageSize() + options.rowIndex + 1);
                }
            },
            { dataField: 'createOn', caption: 'Purchase Date', alignment: 'center', width: '120', dataType: 'date', format: "MM/dd/yyyy", }, //Added and End by WEB-SA24-0003
            { dataField: 'giftCode', caption: 'Gift Card Number', alignment: 'center', cssClass: 'center' },
            { dataField: 'accountStatus', caption: 'Resend', alignment: 'center', width: '80px', allowFiltering: false },
        ],
        onCellPrepared: function (options) {
            var column = options.column;
            var fieldData = options.value,
                fieldHtml = '';

            if (column.dataField === 'accountStatus') {
                if (!isEmpty(fieldData)) {
                    fieldHtml = "<span><button type='button' class='btn btn-light text-primary' value='RESEND'>Resend</button></span>";
                    options.cellElement.html(fieldHtml);
                }
            }
        },
        onCellClick: function (e) {
            var data = e.data;
            if (e.rowType == 'data' && e.column.dataField == 'accountStatus') {
                //var messageObject = { msgType: 'warning', msgTitle: 'Do you want resend SMS/Email [' + data.giftCode() + '] ?' }; //Modified and End by SMILEDINING-SA22-0023
                //Added by SMILEDINING-SA22-0023
                var giftCerOrder = _.find(self.dataGiftCerOrder(), function (item) {
                    return item.giftCode() == data.giftCode();
                });
                var sendType = ko.utils.arrayFirst(self.dataGiftCerSendType(), function (item) { 
                    return item.id == giftCerOrder.giftCerSendTypeId();
                });
                var messageObject = { msgType: 'warning', msgTitle: 'Do you want resend ' + sendType.name + ' [' + data.giftCode() + '] ?' };
                //End Added by SMILEDINING-SA22-0023
                swalMessage(messageObject, function () {
                    self.giftCode(data.giftCode());
                    $('#' + cfrmGiftCerSearchDate).submit();
                });
            } 
        },

    });

    self.dataGridEgiftCardOnly = ko.observable({
        onInitialized: function (e) {
            dataGrid = e.component;
        },
        dataSource: self.dataEgiftCardOnly,
        showColumnLines: true,
        showRowLines: true,
        showBorders: true,
        //hoverStateEnabled: true,
        //columnChooser: {
        //    enabled: true,
        //    mode: 'select'
        //},
        sorting: { mode: 'multiple' },
        paging: {
            pageSize: 15
        },
        pager: {
            showPageSizeSelector: true,
            allowedPageSizes: [15, 30, 60, 90],
            showInfo: true,
            showNavigationButtons: true,
            showPageSizeSelector: true,
            visible: true
        },
        filterRow: { visible: true },
        allowColumnReordering: true,
        columnAutoWidth: true,
        columns: [
            {
                dataField: '', caption: '#', width: 80, alignment: 'center',
                cellTemplate: function (container, options) {
                    container.text(dataGrid.pageIndex() * dataGrid.pageSize() + options.rowIndex + 1);
                }
            },

            { dataField: 'fromEmail', caption: 'From', alignment: 'center', width: '200' },
            { dataField: 'toEmail', caption: 'To Email', alignment: 'center', width: '200' },
            { dataField: 'toPhone', caption: 'To Phone', alignment: 'center', width: '100', dataType: 'number' },
            { dataField: 'orderDateTime', caption: 'Purchase Date', alignment: 'center', width: '120', dataType: 'date', format: "MM/dd/yyyy", }, //Added and End by WEB-SA24-0003
            { dataField: 'deliveryDate', caption: 'Delivery Date', alignment: 'center', width: '110', dataType: 'date', format: "MM/dd/yyyy", },
            { dataField: 'giftCode', caption: 'Card Number', alignment: 'center', width: '130', dataType: 'number' },
            { dataField: 'payAmount', caption: 'Pay', alignment: 'center', format: 'currency', precision: '2', width: '100' },
            { dataField: 'getAmount', caption: 'Value', alignment: 'center', format: 'currency', precision: '2', width: '100' },
            //{ dataField: 'giftCerAccountId', caption: 'Resend', alignment: 'center', width: '80px', allowFiltering: false },
            { dataField: 'resend', caption: 'Resend', alignment: 'center', width: '80px', allowFiltering: false },
        ],
        onCellPrepared: function (options) {
            var column = options.column;
            var fieldData = options.value,
                fieldHtml = '';

            //if (column.dataField === 'giftCerAccountId') {
            if (column.dataField === 'resend') {
                if (!isEmpty(fieldData)) {
                    fieldHtml = "<span><button type='button' class='btn btn-light text-primary' value='RESEND'>Resend</button></span>";
                    options.cellElement.html(fieldHtml);
                }
            }
        },
        editing: {
            mode: "popup",
            allowUpdating: true,
            popup: {
                title: "E-Gift Card",
                showTitle: true,
                width: 600,
                height: 300,
                position: {
                    my: "top",
                    at: "top",
                    of: window
                },
                //Added by SMILEDINING-SA22-0023
                onShowing: function (e) {
                    e.component._$content[0].classList.add("popupEditGiftCard");
                    self.checkEditGiftCard(self.giftCerSendTypeId());
                },
                //End Added by SMILEDINING-SA22-0023
            },
            form: {
                items: [{
                    itemType: 'group',
                    colCount: 2,
                    colSpan: 2,
                    //items: ['toEmail', 'toPhone'] //Modified and End by SMILEDINING-SA22-0023
                    //Added by SMILEDINING-SA22-0023
                    items: [
                        {
                            dataField: 'type',
                            editorType: 'dxSelectBox',
                            colSpan: 2,
                            editorOptions: {
                                items: self.dataGiftCerSendType,
                                valueExpr: 'id',
                                displayExpr: 'name',
                                value: self.giftCerSendTypeId,
                                onValueChanged(data) {
                                    var id = data.value;
                                    self.giftCerSendTypeId(id)
                                    self.checkEditGiftCard(id);
                                },
                            },
                        }, 'toEmail', 'toPhone'
                    ],
                    //End Added by SMILEDINING-SA22-0023
                }]
            }
        },
        //Added by SMILEDINING-SA22-0023
        onEditingStart: function (e) {
            if (e.data != undefined) {
                var giftCerOrder = _.find(self.dataGiftCerOrder(), function (item) {
                    return item.giftCode() == e.data.giftCode();
                });
                if (giftCerOrder != null) {
                    self.giftCerSendTypeId(giftCerOrder.giftCerSendTypeId());
                }
            }
        },
        //End Added by SMILEDINING-SA22-0023
        onEditorPreparing: function (e) {
            if (e.parentType == 'dataRow' && e.dataField == 'toEmail') {
                e.editorOptions.maxLength = 50;
            }
            if (e.parentType == 'dataRow' && e.dataField == 'toPhone') {
                e.editorOptions.maxLength = 10;
            }
        },
        //Added by SMILEDINING-SA22-0023
        onRowUpdating: function(e) {
            var newData = e.newData;
            if (self.giftCerSendTypeId() == 1) {
                newData.toPhone = null;
            } else if (self.giftCerSendTypeId() == 2) {
                newData.toEmail = null;
            }
        },
        //End Added by SMILEDINING-SA22-0023
        onRowUpdated: function (e) {
            var data = e.key;
            var giftCode = data.giftCode();
            //Modified by SMILEDINING-SA22-0008
            //var toEmail = data.toEmail();
            //var toPhone = data.toPhone();
            //var id = giftCode + '|' + toEmail + '|' + toPhone;
            //var objUrl = new ObjUrl(cJsonEgiftCardUpdate);
            //var requestUrl = objUrl.getUrlFromJson();
            //passData = JSON.parse('{"domain" : "' + self.domainId() + '", "key" : "' + id + '"}');
            //End Modified by SMILEDINING-SA22-0008
            //Added by SMILEDINING-SA22-0008
            var giftCerOrder = _.find(self.dataGiftCerOrder(), function (item) {
                return item.giftCode() == giftCode;
            });
            var toEmail = giftCerOrder.email();
            var toPhone = giftCerOrder.phone();
            if (giftCerOrder.email() != data.toEmail()) {
                if (data.toEmail() == null) {
                    toEmail = '';
                } else {
                    toEmail = data.toEmail();
                }
            }
            if (giftCerOrder.phone() != data.toPhone()) {
                if (data.toPhone() == null) {
                    toPhone = '';
                } else {
                    toPhone = data.toPhone();
                }
            }
            //Added by SMILEDINING-SA22-0023
            giftCerOrder.email(toEmail);
            giftCerOrder.phone(toPhone);
            giftCerOrder.giftCerSendTypeId(self.giftCerSendTypeId());
            //End Added by SMILEDINING-SA22-0023
               
            var dataStr = "GiftCerOrderId=" + giftCerOrder.giftCerOrderId() + "&" + "GiftCerTransactionId=" + giftCerOrder.giftCerTransactionId() + "&" +
                "GiftCode=" + giftCerOrder.giftCode() + "&" +
                "From=" + giftCerOrder.from() + "&" +
                "Message=" + giftCerOrder.message() + "&" +
                "Phone=" + toPhone + "&" +
                "Email=" + toEmail + "&" +
                //"TodayAsp=" + giftCerOrder.todayAsap() + "&" + //Modified and End by SMILEDINING-SA22-0008#24
                "TodayAsp=" + giftCerOrder.todayAsp() + "&" + //Added and End by SMILEDINING-SA22-0008#24
                "DeliveryDate=" + giftCerOrder.deliveryDate() + "&" +
                "PayAmount=" + giftCerOrder.payAmount() + "&" +
                "GetAmount=" + giftCerOrder.getAmount() + "&" +
                //"GiftCerSendTypeId=" + giftCerOrder.giftCerSendTypeId() + "&" + //Modified and End by SMILEDINING-SA22-0023
                "GiftCerSendTypeId=" + self.giftCerSendTypeId() + "&" + //Added and End by SMILEDINING-SA22-0023
                "GiftCerImagesId=" + giftCerOrder.giftCerImagesId() + "&" +
                "GiftCerAccountId=" + giftCerOrder.giftCerAccountId() + "&" +
                "IsReceive=" + giftCerOrder.isReceive() + "&" +
                //"domainName=" + self.domainName() + "&" + "domainId=" + self.domainId(); //Added and End by SMILEDINING-SA22-0027 // Modified and End by WEB-SA22-0041
                //"domainName=" + self.domainName(); //Modified and End by SMILEDINING-SA22-0027
                //Added by WEB-SA22-0041
                "domainName=" + self.domainName() + "&" + "domainId=" + self.domainId() + "&" +
                "customerId=" + vmViewIndex.customer.customerId() + "&" + "email=" + vmViewIndex.customer.email();
                //End Added by WEB-SA22-0041
            var objUrl = new ObjUrl(cJsonEgiftCardUpdate);
            var requestUrl = objUrl.getUrlFromJson();
            passData = dataStr;
            //End Added by SMILEDINING-SA22-0008
            getJsonFromAjax(requestUrl, !ajax_async, ajax_cache, ajax_type_post, passData, ajax_timeout);
        },
        onCellClick: function (e) {
            var data = e.data;
            //if (e.rowType == 'data' && e.column.dataField == 'giftCerAccountId') {
            if (e.rowType == 'data' && e.column.dataField == 'resend') {
                //var messageObject = { msgType: 'warning', msgTitle: 'Do you want resend SMS/Email [' + data.giftCode() + '] ?' }; //Modified and End by SMILEDINING-SA22-0023
                //Added by SMILEDINING-SA22-0023
                var giftCerOrder = _.find(self.dataGiftCerOrder(), function (item) {
                    return item.giftCode() == data.giftCode();
                });
                var sendType = ko.utils.arrayFirst(self.dataGiftCerSendType(), function (item) { 
                    return item.id == giftCerOrder.giftCerSendTypeId();
                });
                var messageObject = { msgType: 'warning', msgTitle: 'Do you want resend ' + sendType.name + ' [' + data.giftCode() + '] ?' };
                //End Added by SMILEDINING-SA22-0023
                swalMessage(messageObject, function () {
                    self.giftCode(data.giftCode());
                    $('#' + cfrmGiftCerSearchDate).submit();
                });
            }
        },

    });

};
//End Added by SMILEDINING-SA19-0011

//Added by SMILEDINING-SA21-0007
function DataSetupUsaEpaySearchDateViewModel(currentTime) {
    var self = this;
    var newDate;
    if (isFireFox()) {
        newDate = new Date();
    } else {
        //newDate = getDateJs(moment(currentTime).format(moment_date_format_mmddyyyy)); //Modified and End by WEB-SA24-0015
        newDate = getDateJs(moment(currentTime, moment_date_format_mmddyyyy).format('L')); //Added and End by WEB-SA24-0015
    }

    self.startDateBox = ko.observable({
        type: 'date',
        pickerType: 'calendar',
        value: newDate,
        displayFormat: 'MM-dd-yyyy',
        onValueChanged: function (options) {
            var value = moment(options.value).format(moment_date_format_mmddyyyy);
            self.startDate(value);
        }
    });

    self.endDateBox = ko.observable({
        type: 'date',
        pickerType: 'calendar',
        value: newDate,
        displayFormat: 'MM-dd-yyyy',
        onValueChanged: function (options) {
            var value = moment(options.value).format(moment_date_format_mmddyyyy);
            self.endDate(value);
        }
    });

    self.domainId = ko.observable('');
    //Modified by WEB-SA24-0015
    //self.startDate = ko.observable(moment(currentTime).format(moment_date_format_mmddyyyy));
    //self.endDate = ko.observable(moment(currentTime).format(moment_date_format_mmddyyyy));
    //End Modified by WEB-SA24-0015
    //Added by WEB-SA24-0015
    self.startDate = ko.observable(moment(currentTime, moment_date_format_mmddyyyy).format(moment_date_format_mmddyyyy));
    self.endDate = ko.observable(moment(currentTime, moment_date_format_mmddyyyy).format(moment_date_format_mmddyyyy));
    //End Added by WEB-SA24-0015
    self.data = ko.observableArray([]);
    self.dataDetail = ko.observableArray([]);

    self.dataGridUsaEpaySearchDate = ko.observable({        
        dataSource: self.data,
        showColumnLines: true,
        showRowLines: true,
        showBorders: true,
        hoverStateEnabled: true,
        sorting: { mode: 'multiple' },
        paging: {
            pageSize: 15
        },
        pager: {
            showPageSizeSelector: true,
            allowedPageSizes: [15, 30, 60, 90],
            showInfo: true,
            showNavigationButtons: true,
            showPageSizeSelector: true,
            visible: true
        },
        filterRow: { visible: true },
        allowColumnReordering: true,
        columnAutoWidth: true,
        columns: [
           { dataField: 'domainId', caption: '', width: 80, alignment: 'center', allowFiltering: false, visible: false },
           { dataField: 'batchRefNum', caption: '#', alignment: 'center', cssClass: 'left' },
           { dataField: 'date', caption: 'Date', alignment: 'center', cssClass: 'left', sortOrder: 'asc' },
           { dataField: 'netAmount', caption: 'Net Amount', alignment: 'center', cssClass: 'right' },
           { dataField: 'saleAmount', caption: 'Sale Amount', alignment: 'center', cssClass: 'right' },
           { dataField: 'voidAmount', caption: 'Void Amount', width: 100, alignment: 'center', cssClass: 'right' },
           { dataField: 'creditAmount', caption: 'Credit Amount', width: 100, alignment: 'center', cssClass: 'right' },
           { dataField: 'active', caption: '', width: 80, alignment: 'center', allowFiltering: false }
        ],
        onCellPrepared: function (options) {
            var column = options.column;
            var fieldData = options.value,
                fieldHtml = '';

            if (column.dataField === 'active') {
                if (!isEmpty(fieldData)) {
                    fieldHtml = "<span><i class='fa fa-list-alt'></i></span>";
                    options.cellElement.html(fieldHtml);
                }
            }
        },
        onRowClick: function (info) { },
        onCellClick: function (e) {
            var data = e.data;
            if (e.rowType == 'data' && e.column.dataField == 'active') {
                isLoading(true);
                vmViewIndex.setup.dataSetUpUsaEpaySearchDateModal.dataDetail([]);
                refreshGrid(cGridSetUpUsaEpaySearchDateDetail);
                const key = data.domainId() + '|' + data.batchRefNum();
                var usaEpayTx = getObjFormAjax(cJsonSetUpUsaEpaySearchDateDetail, key);
                ko.mapping.fromJSON(usaEpayTx, {}, vmViewIndex.setup.dataSetUpUsaEpaySearchDateModal.dataDetail);                
                modalShow(cModalSetupUsaEpaySearchDateDetail);
                isLoading(false);
            }
        },
    });

    self.dataGridUsaEpaySearchDateDetail = ko.observable({
        dataSource: self.dataDetail,
        showColumnLines: true,
        showRowLines: true,
        showBorders: true,
        sorting: { mode: 'multiple' },
        paging: {
            pageSize: 15
        },
        pager: {
            showPageSizeSelector: true,
            allowedPageSizes: [15, 30, 60, 90],
            showInfo: true,
            showNavigationButtons: true,
            showPageSizeSelector: true,
            visible: true
        },
        filterRow: { visible: true },
        allowColumnReordering: true,
        columnAutoWidth: true,
        columns: [
           { dataField: 'accountHolder', caption: 'Account Holder', alignment: 'center', cssClass: 'left' },
           { dataField: 'cardNumber', caption: 'Card Number', alignment: 'center', cssClass: 'left', sortOrder: 'asc' },
           { dataField: 'cardType', caption: 'Card Type', alignment: 'center', cssClass: 'center' },
           { dataField: 'amount', caption: 'Amount', alignment: 'center', cssClass: 'right' },
           { dataField: 'status', caption: 'Status Code', alignment: 'center', cssClass: 'center' },
        ],
        onCellPrepared: function (options) {
            var column = options.column;
            var fieldData = options.value,
                fieldHtml = '';
            if (column.dataField === 'status') {
                if (!isEmpty(fieldData)) {   
                    if (fieldData == 'S') {
                        fieldHtml = "<span class='text-success'>Settle</span>";
                    } else if (fieldData == 'R') {
                        fieldHtml = "<span class='text-danger'>Refund</span>";
                    }
                    else if (fieldData == 'V') {
                        fieldHtml = "<span class='text-danger'>Void</span>";                    
                    } else {
                        fieldHtml = fieldData.value;
                    }
                    options.cellElement.html(fieldHtml);
                }
            }
        },
        onRowClick: function (info) { },
    });
};
//End Added by SMILEDINING-SA21-0007

//Added by SMILEDINING-SA22-0017
function DataUpdateVersionViewModel() {
    var self = this;
    var dataGrid; //Added and End by SMILEDINING-SA22-0017#3
    self.data = ko.observableArray([]);
    self.dataDomainUpdate = ko.observableArray([]);
    self.dataDomainUpdateLength = ko.observable(0); //Added and End by SMILEDINING-SA22-0017#2
    self.selectVersionValue = ko.observable('');
    self.storeVersion = new DevExpress.data.ArrayStore({
        data: [],
        key: 'versionId'
    });
    self.clickUpdateVersion = function () {
        if (isEmpty(self.selectVersionValue())) {
            swal(cSwal_Alert_Warning, cError_Version_Empty, cSwal_Icon_Warning);
        } else {
            var domainIds = [];
            ko.utils.arrayForEach(self.dataDomainUpdate(), function (item) {
                domainIds.push(item.domainId());
            });
            if (domainIds.length > 0) {
                addSpinButton(cModalUpdateVersion);
                sendUpdateVersionAutoUpdate(domainIds);
            } else {
                swal(cSwal_Alert_Warning, cError_Domain_Version_Empty, cSwal_Icon_Warning);
            }

        }

    };
    self.dxLookupVersion = ko.observable({
        dataSource: self.storeVersion,
        placeholder: 'Please Select Version',
        displayExpr: 'major',
        valueExpr: 'versionId',
        value: self.selectVersionValue(),
        onSelectionChanged: function (e) {
            if (self.dataDomainUpdate().length != 0) {
                self.dataDomainUpdate.removeAll();
            }
            var newValue = e.selectedItem.major();
            self.selectVersionValue(newValue);
        }
    });
    self.dataGridUpdateVersion = ko.observable({
        onInitialized: function (e) {
            dataGrid = e.component;
        },
        dataSource: self.data,
        showColumnLines: true,
        showRowLines: false,
        showBorders: true,
        hoverStateEnabled: true,
        onInitialized: function (e) {
            dataGrid = e.component;
        },
        columns: [
            {
                caption: '#', width: 40, alignment: 'center',
                cellTemplate: function (container, options) {
                    container.text(dataGrid.pageIndex() * dataGrid.pageSize() + options.rowIndex + 1);
                }
            },
            { dataField: 'domainDesc', caption: 'Shop Name', alignment: 'center' },
            {
                dataField: 'domainVersion', caption: 'Version', alignment: 'center',
                calculateCellValue: function (rowData) {
                    var currentVersion = parseFloat(rowData.domainVersion());
                    var newVersion = parseFloat(self.selectVersionValue());
                    //if (newVersion > currentVersion) { //Modified and End by SMILEDINING-SA22-0017#3
                    if (newVersion >= currentVersion) { //Added and End by SMILEDINING-SA22-0017#3
                        //return currentVersion + " => " + newVersion; //Modified and End by WEB-SA23-0025
                        return rowData.domainVersion() + " => " + newVersion; //Added and End by WEB-SA23-0025
                    } else {
                        //return currentVersion; //Modified and End by WEB-SA23-0025
                        return rowData.domainVersion(); //Added and End by WEB-SA23-0025
                    }
                }
            },
            {
                dataField: 'time', caption: '', width: 80, alignment: 'center',
                calculateCellValue: function (rowData) {
                    return "delete";
                }
            }
        ],
        onCellPrepared: function (options) {
            var column = options.column;
            var fieldData = options.value;
            var fieldHtml = '';
            if (column.dataField == 'time') {
                if (!isEmpty(fieldData)) {
                    fieldHtml = "<span><i class='fa fa-trash fa-lg' style='color:red;'></i></span>";
                    options.cellElement.html(fieldHtml);
                }
            }
            if (column.dataField == 'domainVersion') {
                if (options.displayValue != undefined && self.selectVersionValue() != "") {
                    var newVersion = parseFloat(self.selectVersionValue());
                    var currentVersion = parseFloat(options.data.domainVersion());
                    //var check = newVersion > currentVersion ? true : false; //Modified and End by SMILEDINING-SA22-0017#3
                    var check = newVersion >= currentVersion ? true : false; //Added and End by SMILEDINING-SA22-0017#3
                    if (check) {
                        //options.cellElement.css("color", "red");  //Modified and End by WEB-SA22-0065
                        options.cellElement.css("color", "black");  //Added and End by WEB-SA22-0065
                        if (self.dataDomainUpdate().indexOf(options.data) == -1) //Added and End by SMILEDINING-SA22-0017#2
                            self.dataDomainUpdate().push(options.data);
                    }
                    //Added by WEB-SA22-0065
                    else { 
                         options.cellElement.css("opacity", "0.4"); 
                    }
                    //End Added by WEB-SA22-0065
                }

            }
            self.dataDomainUpdateLength(self.dataDomainUpdate().length); //Added and End by SMILEDINING-SA22-0017#2
        },
        onCellClick: function (e) {
            //Modified by SMILEDINING-SA22-0017#3
            //var dataGrid = e.component;
            //var data = e.data;
            //End Modified by SMILEDINING-SA22-0017#3
            if (e.rowType == 'data') {
                if (e.value == "delete") {
                    dataGrid.deleteRow(e.rowIndex);
                }
            }
        },
        loadPanel: {
            enabled: true,
            showPane: false,
            text: ""
        },
        pager: {
            showPageSizeSelector: true,
            //allowedPageSizes: [30, 60, 90], //Modified and End by SMILEDINING-SA22-0017#3
            allowedPageSizes: [15, 30, 60, 90], //Added and End by SMILEDINING-SA22-0017#3
            showInfo: false,
            visible: true
        },
        paging: {
            enabled: true,
            pageIndex: 0,
            //pageSize: 30 //Modified and End by SMILEDINING-SA22-0017#3
            pageSize: 15 //Added and End by SMILEDINING-SA22-0017#3
        },
        //Added by SMILEDINING-SA22-0017#2
        onRowRemoved(e) {
            self.dataDomainUpdate.remove(e.data);
            self.dataDomainUpdateLength(self.dataDomainUpdate().length);
        }
        //End Added by SMILEDINING-SA22-0017#2
    });
};

function DataUpdateVersionDetailViewModel() {
    var self = this;
    var dataGrid; //Added and End by SMILEDINING-SA22-0017#3
    self.data = ko.observableArray([]);
    self.domainId = ko.observable('');
    self.domainDesc = ko.observable('');
    self.domainVersion = ko.observable('');
    self.status = ko.observable('');
    self.clickCloseModal = function () {
        if (self.data().length > 0) {
            self.data([]);
            self.domainId('');
            self.domainDesc('');
            self.domainVersion('');
            self.status('');
        }
    };
    self.checkColor = function () {
        var status = self.status();
        var color = '';
        //if (status.includes(cProcessStatusFailed)) { //Modified and End by SMILEDINING-SA22-0017#2
        if (status.includes(cProcessStatusFailed) || status.includes(cProcessStatusNotAvailable)) { //Added and End by SMILEDINING-SA22-0017#2
            color = "red";
        } else if (status == cProcessStatusFinished) {
            color = "green";
        } else {
            color = "#FF9800";
        }
        return color;
    };
    self.dataGridUpdateVersionDetail = ko.observable({
        onInitialized: function (e) {
            dataGrid = e.component;
        },
        dataSource: self.data,
        showColumnLines: true,
        showRowLines: false,
        showBorders: true,
        hoverStateEnabled: true,
        //Modified by SMILEDINING-SA22-0017#3
        //onInitialized: function (e) {
        //    dataGrid = e.component;
        //},
        //End Modified by SMILEDINING-SA22-0017#3
        scrolling: {
            mode: 'virtual',
        },
        paging: {
            pageSize: 100
        },
        columns: [
            {
                caption: '#', width: 40, alignment: 'center',
                cellTemplate: function (container, options) {
                    //container.text(dataGrid.pageIndex() * dataGrid.pageSize() + options.data.processId()); //Modified and End by SMILEDINING-SA22-0017#3
                    container.text(options.data.processId()); //Added and End by SMILEDINING-SA22-0017#3
                }
            },
            {
                dataField: 'sorting', caption: '#', groupIndex: 0, autoExpandGroup: false,
                calculateCellValue: function (rowData) {
                    return rowData.sorting() + ' - Name: ' + rowData.name();
                }
            },
            { dataField: 'processName', caption: 'Process', alignment: 'left', },
            { dataField: 'status', caption: 'Status', alignment: 'center', },
        ],
        onCellPrepared: function (e) {
            var data = e.data
            var fieldHtml = '';
            if (e.rowType === "data" && e.column.dataField === "status") {
                if (data.status() == cProcessStatusInit) {
                    fieldHtml = '<span style="color:green;"><i class="fa fa-check-circle"></i> Start</span>';
                } else if (data.status() == cProcessStatusStart) {
                    if (!data.isRollback())
                        fieldHtml = '<div class="progress-bar"> <span class="bar"> <span class="progress"></span> </span> </div>';
                    else
                        fieldHtml = '<div class="progress-bar-rollback"> <span class="bar"> <span class="progress-rollback"></span> </span> </div>';
                } else if (data.status() == cProcessStatusCompleted) {
                    if (!data.isRollback())
                        fieldHtml = '<span style="color:green;"><i class="fa fa-check-circle"></i> Completed</span>';
                    else
                        fieldHtml = '<span style="color:green;"><i class="fa fa-check-circle"></i> Rollback Completed</span>';
                } else if (data.status() == cProcessStatusFinished) {
                    fieldHtml = '<span style="color:green;"><i class="fa fa-check-circle"></i> Finished</span>';
                } else if (data.status() == cProcessStatusFailed) {
                    fieldHtml = '<span style="color:red;">Fail <i class="fa fa-exclamation-circle"></i></span>';
                //Added by SMILEDINING-SA22-0017#2
                } else if (data.status() == cProcessStatusNotAvailable) {
                    fieldHtml = '<span style="color:red;">Not available <i class="fa fa-exclamation-circle"></i></span>';
                //End Added by SMILEDINING-SA22-0017#2
                } else if (data.status() == cProcessStatusWaiting) {
                    fieldHtml = '<span style="color:#FF9800;">In progress...</span>';
                } else if (data.status() == cProcessStatusRollback) {
                    fieldHtml = '<span style="color:#FF9800;">Rollback In progress...</span>';
                } else {
                    fieldHtml = '';
                }
                e.cellElement.html(fieldHtml);
            }
        }
    });
};

function DataProcessUpdateVersionDetailViewModel(dataClients, dataProcess, process, status, sorting) {
    var self = this;
    self.id = ko.observable(isEmpty(dataClients) ? '' : dataClients.id());
    self.name = ko.observable(isEmpty(dataClients) ? '' : dataClients.name());
    self.processName = ko.observable(isEmpty(process) ? '' : process.name);
    self.processId = ko.observable(isEmpty(process) ? '' : process.id);
    self.status = ko.observable(isEmpty(status) ? '' : status);
    self.avgExecutionTime = ko.observable(isEmpty(dataProcess) ? '' : dataProcess.avgExecutionTime());
    self.isRollback = ko.observable(isEmpty(dataProcess) ? false : dataProcess.isRollback());
    self.message = ko.observable(isEmpty(dataProcess) ? '' : dataProcess.message());
    self.sorting = ko.observable(isEmpty(sorting) ? '' : sorting);
};

function DataSettingSvnViewModel() {
    var self = this;
    self.urlRepository = ko.observable('');
    self.username = ko.observable('');
    self.password = ko.observable('');
    self.autoUpdatePath = ko.observable('');   
    self.pos = ko.observable('');    
    self.tablet = ko.observable('');
    self.webReport = ko.observable('');
    //Added by WEB-SA22-0065    
    self.storePos = ko.observableArray([]);    
    self.storeTablet = ko.observableArray([]);
    self.storeWebReport = ko.observableArray([]);   
       
    self.dxSelectPos = ko.observable({
        dataSource: self.storePos,
        displayExpr: '',
        valueExpr: '',
        value: self.pos,
        acceptCustomValue: true,       
        onValueChanged: function (e) {
            var previousValue = e.previousValue;
            var newValue = e.value;
            self.pos(newValue);        
        },
    });

    self.dxSelectTablet = ko.observable({
        dataSource: self.storeTablet,
        displayExpr: '',
        valueExpr: '',
        value: self.tablet,
        acceptCustomValue: true,
        onValueChanged: function (e) {
            var previousValue = e.previousValue;
            var newValue = e.value;
            self.tablet(newValue);        
        },
    });

    self.dxSelectWebReport = ko.observable({
        dataSource: self.storeWebReport,
        displayExpr: '',
        valueExpr: '',
        value: self.webReport,
        acceptCustomValue: true,
        onValueChanged: function (e) {
            var previousValue = e.previousValue;
            var newValue = e.value;
            self.webReport(newValue);        
        },
    });
    //End Added by WEB-SA22-0065
};
//End Added by SMILEDINING-SA22-0017
//Added by SMILEDINING-SA22-0022
function DataDeliveryBillingViewModel() { 
    var self = this;
    var dataGrid; //Added and End by SMILEDINING-SA22-0022#3
    self.shopName = ko.observable('');
    self.shopStreet = ko.observable('');
    self.period = ko.observable('');
    self.countCommission= ko.observable(0.00);
    self.countTip = ko.observable(0.00);
    self.sumCommission = ko.observable(0.00);
    self.sumTip = ko.observable(0.00);
    self.totalAmount = ko.observable(0.00);
    self.selectMonth = ko.observable(new Date());
    self.deliveryBillingDetail = ko.observableArray([]);
    self.dataObj = ko.observable(null);
    //Added by SMILEDINING-SA22-0033
    self.sumAmountDeposit = ko.observable(0.00); 
    self.emailCustomerArr = ko.observableArray([]);
    //End Added by SMILEDINING-SA22-0033
    self.dateBoxMonthMax = ko.observable(null); //Added and End by WEB-SA23-0013#1

    self.dateBoxMonth = ko.observable({
        acceptCustomValue: false, //Added and End by WEB-SA22-0071
        type: 'date',
        width: 250,
        value: self.selectMonth(),
        max: self.dateBoxMonthMax, //Added and End by WEB-SA23-0013#1
        displayFormat: 'monthAndYear',
        minZoomLevel: "century",
        maxZoomLevel: "year",
        onValueChanged: function (e) {
            //self.selectMonth(e.value); //Modified and End by WEB-SA23-0013#4
            //Added by WEB-SA23-0013#4
            var value = moment(e.value).format('L');
            if (value != self.selectMonth()) {
                self.selectMonth(value);
            //End Added by WEB-SA23-0013#4
                //if (e.element.context.id == "selectMonthHeader") { //Modified and End by SMILEDINING-SA22-0022#3
                if (e.element.context.id == "selectMonthHeader" && self.dataObj() != null) { //Added and End by SMILEDINING-SA22-0022#3
                    isLoading(true);
                    setTimeout(function () {
                        var dateSelect = moment(e.value).format('L');
                        //var dataDeliveryBilling = JSON.parse(getDataDeliveryBillingObjFormAjax(cJsonGetDataDeliveryBilling, self.dataObj().domainId(), self.dataObj().domainName(), dateSelect)); //Modified and End by SMILEDINING-SA22-0022#3
                        //var dataDeliveryBilling = JSON.parse(getDataDeliveryBillingObjFormAjax(cJsonGetDataDeliveryBilling, self.dataObj().domainId(), self.dataObj().domainName(), dateSelect, self.dataObj().dispatchTypeId())); //Added and End by SMILEDINING-SA22-0022#3 //Modified and End by WEB-SA23-0013#1
                        //Added by WEB-SA23-0013#1
                        var dispatchTypeId = vmViewIndex.deliveryBilling.valSelectDispatchType() == '0' ? _.first(self.dataObj().dispatchTypeId().split(',')) ?? vmViewIndex.deliveryBilling.valSelectDispatchType() : vmViewIndex.deliveryBilling.valSelectDispatchType();
                        var dataDeliveryBilling = JSON.parse(getDataDeliveryBillingObjFormAjax(cJsonGetDataDeliveryBilling, self.dataObj().domainId(), self.dataObj().domainName(), dateSelect, dispatchTypeId));
                        //End Added by WEB-SA23-0013#1
                        DataDeliveryBillingModalViewModel(dataDeliveryBilling);
                        isLoading(false);
                    }, 0);
                }
            } //Added and End by WEB-SA23-0013#4
        }
    });

    self.dataGridDeliveryBilling = ko.observable({
        dataSource: self.deliveryBillingDetail,
        showBorders: false,
        showColumnHeader: false,
        showColumnLines: false,
        showRowLines: true,
        visible: true,
        hoverStateEnabled: true,
        columnAutoWidth: true,
        onInitialized: function (e) {
            dataGrid = e.component;
        },
        columns: [
            {
                caption: '#', width: 40, alignment: 'center',
                cellTemplate: function (container, options) {
                    container.text(dataGrid.pageIndex() * dataGrid.pageSize() + options.rowIndex + 1);
                }
            },
            { dataField: 'ticketId', caption: 'Order ID', alignment: 'center', width: 120 },
            { dataField: 'ticketDateTime', caption: 'Date/Time', alignment: 'left', width:  150},
            { dataField: 'customerName', caption: 'Customer Name', alignment: 'left', width: 140 },
            { dataField: 'total', caption: 'Total', dataType: 'number', alignment: 'right', cssClass: 'right', format: 'currency', precision: 2, width: 70 },
            { dataField: 'commission', caption: 'Commission', dataType: 'number', alignment: 'right', cssClass: 'right', format: 'currency', precision: 2, width: 100 },
            { dataField: 'dasherTip', caption: 'Dasher Tip', dataType: 'number', alignment: 'right', cssClass: 'right', format: 'currency', precision: 2, width: 90 },
            { dataField: 'totalCharge', caption: 'Total Charge', dataType: 'number', alignment: 'right', cssClass: 'right', format: 'currency', precision: 2, width: 100 }
        ],
        pager: {
            showPageSizeSelector: true,
            //allowedPageSizes: [30, 60, 90], //Modified and End by SMILEDINING-SA22-0022#3
            allowedPageSizes: [15, 30, 60, 90], //Added and End by SMILEDINING-SA22-0022#3
            showInfo: false,
            visible: true
        },
        paging: {
            enabled: true,
            pageIndex: 0,
            //pageSize: 30 //Modified and End by SMILEDINING-SA22-0022#3
            pageSize: 15 //Added and End by SMILEDINING-SA22-0022#3
        },
        loadPanel: {
            enabled: true,
            showPane: false,
            text: ""
        },
        onContentReady: function () {
            $("#gridDeliveryBilling .dx-scrollable").dxScrollable({ showScrollbar: 'always' });
        }
    });

    self.clearDataModal = function () { 
        self.shopName('');
        self.shopStreet('');
        self.period('');
        self.countCommission(0.00);
        self.countTip(0.00);
        self.sumCommission(0.00);
        self.sumTip(0.00);
        self.totalAmount(0.00);
        self.selectMonth(new Date());
        self.deliveryBillingDetail([]);
        self.dataObj(null);
        //Added by SMILEDINING-SA22-0033
        self.sumAmountDeposit(0.00);
        self.emailCustomerArr([]);
        //End Added by SMILEDINING-SA22-0033
        vmViewIndex.deliveryBilling.dataSendEmailModal.data([]);
        //Added by WEB-SA22-0071
        vmViewIndex.deliveryBilling.dataDownloadExcelModal.data([]);
        vmViewIndex.deliveryBilling.dataDownloadExcelModal.dispatchTypeId('');
        //End Added by WEB-SA22-0071
        self.dateBoxMonthMax(null); //Added and End by WEB-SA23-0013#1
    };

    //Added by SMILEDINING-SA22-0022#3
    //Modified by WEB-SA22-0071
    //self.resetDateBoxMonth = function (isDeliveryBillingDetail) {
    //    var dataDateBox = isDeliveryBillingDetail ? $("#selectMonthHeader").dxDateBox('instance') : $(".selectMonthSendEmail").dxDateBox('instance');
    //    dataDateBox.option({ value: new Date() });
    //};
    //End Modified by WEB-SA22-0071
    //End Added by SMILEDINING-SA22-0022#3
    //Added by WEB-SA22-0071
    self.resetDateBoxMonth = function (isDeliveryBillingDetail, isSendEmail) {
        var dataDateBox = isDeliveryBillingDetail ? $("#selectMonthHeader").dxDateBox('instance') : isSendEmail ? $(".selectMonthSendEmail").dxDateBox('instance') : $(".selectMonthDownloadExcel").dxDateBox('instance');
        //dataDateBox.option({ value: new Date() }); //Modified and End by WEB-SA23-0013#1
        dataDateBox.option({ value: self.selectMonth() }); //Added and End by WEB-SA23-0013#1
    };
    //End Added by WEB-SA22-0071

    self.clickSendEmail = function () {
        addSpinButton(cModalDeliveryBilling);
        addSpinButton(cModalDeliveryBillingSendEmail);
        var listDomainName = [];
        var dispatchType = 0;
        var dateSelect = moment(self.selectMonth()).format('L');
        if (!isEmpty(self.dataObj())) {
            listDomainName.push(self.dataObj().domainName());
            dispatchType = self.dataObj().dispatchTypeId();
        } else {
            ko.utils.arrayForEach(vmViewIndex.deliveryBilling.dataSendEmailModal.data(), function (item) { 
                listDomainName.push(item.domainName());
            });
            dispatchType = _.first(vmViewIndex.deliveryBilling.dataSendEmailModal.data()).dispatchTypeId();
            dateSelect = moment(vmViewIndex.deliveryBilling.selectMonth()).format('L'); //Added and End by WEB-SA23-0013#4
        }

        var objUrl = new ObjUrl(cfrmDeliveryBillingSendEmail);
        var requestUrl = objUrl.getUrlSubmitForm();
        var passData = {
            listDomainName: listDomainName,
            dateSelect: dateSelect,
            dispatchType: dispatchType,
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
            removeSpinButton(cModalDeliveryBilling);
            removeSpinButton(cModalDeliveryBillingSendEmail);
            if (result.status) {
                var gridInstance = $('#' + cGridDeliveryBilling).dxDataGrid('instance');
                gridInstance.clearSelection();
                modalHide(cModalDeliveryBilling);
                modalHide(cModalDeliveryBillingSendEmail);
            }
            var objAlert = new ObjAlert(cfrmDeliveryBillingSendEmail, result.message, result.status);
            objAlert.getAlert();
        })
        .fail(function (result) {
            removeSpinButton(cModalDeliveryBilling);
            removeSpinButton(cModalDeliveryBillingSendEmail);
            swal(cSwal_Alert_Error, cError_Fail_TimeOut, cSwal_Icon_Error);
        });
    };

    //Added by SMILEDINING-SA22-0032
    self.clickPrintDeliveryBilling = function () {
        var tagTbody = $('#gridDeliveryBillingModal tbody');
        tagTbody.css('font-size', '14px');
        //Added by SMILEDINING-SA22-0033
        var tagShopStreet = $('#divDeliveryBillingContent .shop-street');
        tagShopStreet.css({ 'width': '20rem', 'margin': '0'});
        var tagTableColumn_1 = $('#divDeliveryBillingContent .table-head-color .column-1');
        tagTableColumn_1.css('width', '7.9rem');
        //End Added by SMILEDINING-SA22-0033
        var id = $('#divDeliveryBillingContent');
        var divContent = id.html();
        var removeNoData = removeTag('.dx-datagrid-nodata', divContent);
        var removePageSizes = removeTag('.dx-page-sizes', removeNoData);
        var dataResult = removeTag('.dx-pages', removePageSizes);
        printWindow(dataResult);
        tagTbody.css('font-size', '');
        //Added by SMILEDINING-SA22-0033
        tagShopStreet.css({ 'width': '', 'margin': ''});
        tagTableColumn_1.css('width', ''); 
        //End Added by SMILEDINING-SA22-0033
    };

    self.clickDownloadDeliveryBilling = function () {
        var id = $('#divDeliveryBillingContent');
        var divContent = id.html();
        var removeNoData = removeTag('.dx-datagrid-nodata', divContent);
        var removeScrollbar = removeTag('.dx-scrollable-scrollbar', removeNoData);
        var dataResult = removeTag('.dx-pager', removeScrollbar);

        var newDivContent = document.querySelector('#divDeliveryBillingDownload');
        newDivContent.innerHTML = dataResult;

        var tagNewDivContent = $('#divDeliveryBillingDownload');
        tagNewDivContent.removeClass('d-none');

        var tagGridHeader = tagNewDivContent.find('tr');
        tagGridHeader.css('color', '#000');
        tagGridHeader.css('background-color', '#fff');
        tagGridHeader.find('td div').css('color', '#000');

        var tagGridDeliveryBilling = tagNewDivContent.find('#gridDeliveryBillingModal');
        tagGridDeliveryBilling.find('tr td').css('border', '0');
        tagGridDeliveryBilling.find('.dx-datagrid-rowsview').css('border', '0');
        tagGridDeliveryBilling.find('.dx-row-lines td').css('border', '0');

        html2canvas(newDivContent, {
            allowTaint: false,
            useCORS: true,
        }).then(canvas => {
            //Modified by WEB-SA22-0071
            //tagNewDivContent.addClass('d-none');
            //saveAs(canvas.toDataURL(), 'delivery_billing_' + moment(_currentTime).format(moment_date_format_mmddyyyyhhmmssa2) + '.png');
            //End Modified by WEB-SA22-0071
            //Added by WEB-SA22-0071
            html2canvas(newDivContent, { /// fix autofocus not working
                allowTaint: false,
                useCORS: true,
            }).then(canvas => {
                tagNewDivContent.addClass('d-none');
                saveAs(canvas.toDataURL(), 'delivery_billing_' + moment(_currentTime).format(moment_date_format_mmddyyyy) + '.png');
            });
            //End Added by WEB-SA22-0071
        });
    };
    //End Added by SMILEDINING-SA22-0032
};

function DataDeliveryBillingModalViewModel(data) {
    var self = vmViewIndex.deliveryBilling.dataModal;
    self.shopName(data.shopName);
    self.shopStreet(data.shopStreet);
    self.period(data.period);
    self.countCommission(data.countCommission);
    self.countTip(data.countTip);
    self.sumCommission(data.sumCommission);
    self.sumTip(data.sumTip);
    self.totalAmount(rountTwo(self.sumCommission() + self.sumTip()));
    //self.selectMonth(new Date(data.currentDateTime)); //Modified and End by SMILEDINING-SA22-0022#3
    self.sumAmountDeposit(data.sumAmountDeposit); //Added and End by SMILEDINING-SA22-0033
    ko.mapping.fromJS(data.deliveryBillingDetail, {}, self.deliveryBillingDetail);
};

function DataDeliveryBillingSendEmailViewModel() {
    var self = this;
    var dataGrid; //Added and End by SMILEDINING-SA22-0022#3
    self.data = ko.observableArray([]);
    self.dataLength = ko.observable(0);

    self.dataGridSendEmail = ko.observable({
        //Added by SMILEDINING-SA22-0022#3
        onInitialized: function (e) {
            dataGrid = e.component;
        },
        //End Added by SMILEDINING-SA22-0022#3
        dataSource: self.data,
        showColumnLines: true,
        showRowLines: true,
        showBorders: true,
        editing: {
            allowDeleting: true,
        },
        hoverStateEnabled: true,
        sorting: { mode: 'multiple' },
        paging: {
            pageSize: 15
        },
        pager: {
            showPageSizeSelector: true,
            allowedPageSizes: [15, 30, 60, 90],
            showInfo: true,
            showNavigationButtons: true,
            showPageSizeSelector: true,
            visible: true
        },
        allowColumnReordering: true,
        columnAutoWidth: true,
        columns: [
            {
                //caption: '#', width: 40, alignment: 'center', //Modified and End by SMILEDINING-SA22-0022#3
                caption: '#', width: 60, alignment: 'center', //Added and End by SMILEDINING-SA22-0022#3
                cellTemplate: function (container, options) {
                    container.text(dataGrid.pageIndex() * dataGrid.pageSize() + options.rowIndex + 1);
                }
            },
            //{ dataField: 'domainDesc', caption: 'Shop Name', alignment: 'center', cssClass: 'left', width: 400 }, //Modified and End by SMILEDINING-SA22-0033
            //Added by SMILEDINING-SA22-0033
            { dataField: 'domainDesc', caption: 'Shop Name', alignment: 'center', cssClass: 'left', width: 300 },
            //{ dataField: 'email', caption: 'Email Customer', alignment: 'center', cssClass: 'left', width: 200 }, //Modified and End by SMILEDINING-SA22-0033#2
            { dataField: 'email', caption: 'Email', alignment: 'center', cssClass: 'left', width: 200 },  //Added and End by SMILEDINING-SA22-0033#2
            //End Added and End by SMILEDINING-SA22-0033
            { dataField: 'dispatchTypeId', caption: 'Delivery By', alignment: 'center', cssClass: 'left'},
        ],
        onCellPrepared: function (options) {
            var column = options.column;
            var fieldData = options.value,
                fieldHtml = '';

            if (column.dataField === 'dispatchTypeId') {
                if (!isEmpty(fieldData)) {
                    if (fieldData == cDispatchType_Deliverect) {
                        fieldHtml = "<span><img src='/Content/Images/deliverect_logo.png'></span>";
                    } else if (fieldData == cDispatchType_DoorDash) {
                        fieldHtml = "<span><img src='/Content/Images/doordash_logo.png'></span>";
                    }
                    options.cellElement.html(fieldHtml);
                }
            //} else if (column.type === 'buttons' && column.dataField === undefined && fieldData !== undefined) { //Modified and End by SMILEDINING-SA22-0022#2
            } else if (column.command === 'edit' && column.dataField === undefined && fieldData !== undefined) { //Added and End by SMILEDINING-SA22-0022#2
                fieldHtml = "<span><i class='fa fa-trash fa-lg' style='color:red;'></i></span>";
                options.cellElement.html(fieldHtml);
            }
            self.dataLength(self.data().length);
        },
        onCellClick: function (e) {
            //var dataGrid = e.component; //Modified and End by SMILEDINING-SA22-0022#3
            var column = e.column;
            //if (e.rowType === 'data' && column.type === 'buttons' && column.dataField === undefined) { //Modified and End by SMILEDINING-SA22-0022#2
            if (e.rowType === 'data' && column.command === 'edit' && column.dataField === undefined) { //Added and End by SMILEDINING-SA22-0022#2
                dataGrid.deleteRow(e.rowIndex);
            }
        },
        onRowRemoved() {
          self.dataLength(self.data().length);
        }
    });
}
//End Added by SMILEDINING-SA22-0022

//Added by WEB-SA22-0071
function DataDeliveryBillingDownloadExcelViewModel() {
    var self = this;
    var dataGrid;
    self.data = ko.observableArray([]);
    self.dataLength = ko.observable(0);
    self.dispatchTypeId = ko.observable('');

    self.dataGridDownload = ko.observable({
        onInitialized: function (e) {
            dataGrid = e.component;
        },
        dataSource: self.data,
        showColumnLines: true,
        showRowLines: true,
        showBorders: true,
        editing: {
            allowDeleting: true,
        },
        hoverStateEnabled: true,
        sorting: { mode: 'multiple' },
        paging: {
            pageSize: 15
        },
        pager: {
            showPageSizeSelector: true,
            allowedPageSizes: [15, 30, 60, 90],
            showInfo: true,
            showNavigationButtons: true,
            showPageSizeSelector: true,
            visible: true
        },
        allowColumnReordering: true,
        columnAutoWidth: true,
        columns: [
            {
                caption: '#', width: 60, alignment: 'center',
                cellTemplate: function (container, options) {
                    container.text(dataGrid.pageIndex() * dataGrid.pageSize() + options.rowIndex + 1);
                }
            },
            { dataField: 'domainDesc', caption: 'Shop Name', alignment: 'center', cssClass: 'left', width: 300 },
            { dataField: 'dispatchTypeId', caption: 'Delivery By', alignment: 'center', cssClass: 'left'},
        ],
        onCellPrepared: function (options) {
            var column = options.column;
            var fieldData = options.value,
                fieldHtml = '';

            if (column.dataField === 'dispatchTypeId') {
                if (!isEmpty(fieldData)) {
                    if (fieldData == cDispatchType_Deliverect) {
                        fieldHtml = "<span><img src='/Content/Images/deliverect_logo.png'></span>";
                    } else if (fieldData == cDispatchType_DoorDash) {
                        fieldHtml = "<span><img src='/Content/Images/doordash_logo.png'></span>";
                    }
                    options.cellElement.html(fieldHtml);
                }
            } else if (column.command === 'edit' && column.dataField === undefined && fieldData !== undefined) {
                fieldHtml = "<span><i class='fa fa-trash fa-lg' style='color:red;'></i></span>";
                options.cellElement.html(fieldHtml);
            }
            self.dataLength(self.data().length);
        },
        onCellClick: function (e) {
            var column = e.column;
            if (e.rowType === 'data' && column.command === 'edit' && column.dataField === undefined) {
                dataGrid.deleteRow(e.rowIndex);
            }
        },
        onRowRemoved() {
          self.dataLength(self.data().length);
        }
    });

    self.clickDownload = function () {
        addSpinButton(cModalDeliveryBillingDownloadExcel);
        var domainIds = [];
        var dispatchType = 0;
        //var dateSelect = moment(vmViewIndex.deliveryBilling.dataModal.selectMonth()).format('L'); //Modified and End by WEB-SA23-0013#4
        var dateSelect = moment(vmViewIndex.deliveryBilling.selectMonth()).format('L'); //Added and End by WEB-SA23-0013#4
        ko.utils.arrayForEach(vmViewIndex.deliveryBilling.dataDownloadExcelModal.data(), function (item) { 
            domainIds.push(item.domainId());
        });
        dispatchType = self.dispatchTypeId();

        var objUrl = new ObjUrl(cfrmDeliveryBillingDownloadExcel);
        var requestUrl = objUrl.getUrlSubmitForm();
        var passData = {
            domainIds: domainIds,
            dateSelect: dateSelect,
            dispatchType: dispatchType,
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
            removeSpinButton(cModalDeliveryBillingDownloadExcel);
            if (result.status) {
                window.location = '/DeliveryBilling/Download?fileGuid=' + result.fileGuid + '&filename=' + result.fileName;
            } else {
                if (!isEmpty(result.message)) {
                    var objAlert = new ObjAlert(cfrmDeliveryBillingDownloadExcel, result.message, result.status);
                    objAlert.getAlert();
                }
            }
        })
        .fail(function (result) {
            removeSpinButton(cModalDeliveryBillingDownloadExcel);
            swal(cSwal_Alert_Error, cError_Fail_TimeOut, cSwal_Icon_Error);
        });
    };
}
//End Added by WEB-SA22-0071

//Added by WEB-SA23-0049
function DataDeliveryBillingConvertFileViewModel() {
    var self = this;
    var dataGrid;
    var dataGridDetail;
    var dataGridDetailError;
    var dataGridDetailPrevMonth; //Added and End by WEB-SA23-0049#3
    // Data Convert File
    self.data = ko.observableArray([]);
    self.isConvertFile = ko.observable(false);    
    self.selectMonth = ko.observable(moment(getPrevMonth(new Date()), 'L').format('L'));
    self.selectMonthAfterConvertFile = ko.observable(self.selectMonth());
    self.valFilterAbnormal = ko.observable(0);
    self.filterAbnormalStore = new DevExpress.data.ArrayStore({
        key: 'id',
        data: [
            //Modified by WEB-SA23-0049#1
            //{ id: 0, name: 'All' },
            //{ id: 1, name: 'Employment / Transaction' },
            //{ id: 2, name: 'Abnormal / No transaction' },
            //{ id: 3, name: 'Only UnConfirm / No transaction' },
            //End Modified by WEB-SA23-0049#1
            //Added by WEB-SA23-0049#1
            { id: 0, name: 'All' },
            { id: 1, name: 'Match' },
            { id: 2, name: 'No Match' },
            { id: 3, name: 'Abnormal' },
            { id: 4, name: 'Refund' },
            { id: 5, name: 'UnConfirm' },
            //End Added by WEB-SA23-0049#1
        ],
    });
    
    // Data Delivery Billing 
    self.shopName = ko.observable('');
    self.shopStreet = ko.observable('');
    self.period = ko.observable('');
    self.countCommission= ko.observable(0.00);
    self.countTip = ko.observable(0.00);
    self.sumCommission = ko.observable(0.00);
    self.sumTip = ko.observable(0.00);
    self.totalAmount = ko.observable(0.00);
    self.sumAmountDeposit = ko.observable(0.00); 
    self.domainId = ko.observable(''); 
    self.domainName = ko.observable(''); 
    self.deliveryBillingDetailList = ko.observableArray([]);
    self.deliveryBillingDetailErrorList = ko.observableArray([]);
    self.textBtnErrorList = ko.pureComputed(function() {
        return 'Error List ' + '(' + self.deliveryBillingDetailErrorList().length + ')';
    });
    //Added by WEB-SA23-0049#3
    self.deliveryBillingDetailPrevMonthList = ko.observableArray([]);
    self.isDeliveryBillingDetailPrevMonth = ko.observable(false);
    self.textBtnPrevMonthList = ko.pureComputed(function() {
        return 'Previous Month List ' + '(' + self.deliveryBillingDetailPrevMonthList().length + ')';
    });    
    //End Added by WEB-SA23-0049#3
    self.valFilterConfirmByDriver = ko.observable(0);
    self.filterConfirmByDriverStore = new DevExpress.data.ArrayStore({
        key: 'id',
        data: [
            { id: 0, name: 'All' },
            { id: 1, name: 'Confirm by Driver' },
            { id: 2, name: 'Unconfirm by Driver' },
        ],
    });

    // Data Detail Monitor
    self.dataDetailMonitor = new DataMonitorViewModel();
    self.dataDetailMonitor.isConfirmByDriver = ko.observable(false);
    self.dataDetailMonitor.isConvertTicket = ko.observable(false);
    self.dataDetailMonitor.isConvertTicketPrevMonth = ko.observable(false); //Added and End by WEB-SA23-0049#3
    self.dataDetailMonitor.valSelectTicketStatusConfirmByDriver = ko.observable(0);
    self.dataDetailMonitor.selectTicketStatusConfirmByDriverStore = new DevExpress.data.ArrayStore({
        key: 'id',
        data: [
            { id: 0, name: 'Unconfirm by Driver' },
            { id: 1, name: 'Confirm by Driver' },
        ],
    });

    // Widget
    self.dateBoxMonth = ko.observable({
        acceptCustomValue: false,
        type: 'date',
        value: self.selectMonth(),
        max: new Date(),
        displayFormat: 'monthAndYear',
        minZoomLevel: "century",
        maxZoomLevel: "year",
        onValueChanged: function (e) {
            var value = moment(e.value).format('L');
            if (value != self.selectMonth()) {
                self.selectMonth(value);
            }
        }
    });

    self.dataGridOptions = ko.observable({
        onInitialized: function (e) {
            dataGrid = e.component;
        },
        dataSource: self.data,
        showColumnLines: true,
        showRowLines: true,
        showBorders: true,
        hoverStateEnabled: true,
        headerFilter: {
          visible: true,
        },
        grouping: {
            contextMenuEnabled: true,
            expandMode: 'rowClick'
        },
        sorting: { mode: 'multiple' },
        paging: {
            pageSize: 15
        },
        pager: {
            showPageSizeSelector: true,
            allowedPageSizes: [15, 30, 60, 90],
            showInfo: true,
            showNavigationButtons: true,
            showPageSizeSelector: true,
            visible: true
        },
        groupPanel: {
            visible: false
        },
        filterRow: { visible: true },
        allowColumnReordering: true,
        columnAutoWidth: true,
        columns: [
            { dataField: 'domainId', caption: 'ID', alignment: 'center', width: '120px', allowHeaderFiltering: false },
            { 
                dataField: 'domainDesc', caption: 'Shop Name', alignment: 'center', cssClass: 'left', sortOrder: 'asc', allowHeaderFiltering: false,
                cellTemplate: function (container, options) {
                    //Modified by WEB-SA23-0049#1
                    //if (options.data.isAbnormal()) {
                    //    if (options.data.isUpdate()) {
                    //        container.html("<p>" + options.data.domainDesc() + " <span class='badge badge-success'> Abnormal </span>" + "</p>");
                    //    } else {
                    //        container.html("<p>" + options.data.domainDesc() + " <span class='badge badge-danger'> Abnormal </span>" + "</p>");
                    //    }
                    //} else {
                    //End Modified by WEB-SA23-0049#1
                    //Added by WEB-SA23-0049#1
                    if (!options.data.isMatch()) {
                        if (options.data.isUpdate()) {
                            container.html("<p>" + options.data.domainDesc() + " <span class='badge badge-success'> No Match </span>" + "</p>");
                        } else {
                            container.html("<p>" + options.data.domainDesc() + " <span class='badge badge-danger'> No Match </span>" + "</p>");
                        }
                    } else {
                    //End Added by WEB-SA23-0049#1
                        container.html(options.data.domainDesc());
                    }
                },
            },
            { dataField: 'address', caption: 'Address', alignment: 'center', cssClass: 'left', width: '500px', allowHeaderFiltering: false },
            { dataField: 'state', caption: 'State', alignment: 'center', cssClass: 'left', width: '90px', allowHeaderFiltering: false },
            { dataField: 'postal', caption: 'Postal', alignment: 'center', cssClass: 'left', width: '120px', allowHeaderFiltering: false },
            { dataField: 'dispatchTypeId', caption: 'Delivery By', alignment: 'center', cssClass: 'left', width: '300px', allowFiltering: false, allowHeaderFiltering: false }
        ],
        onCellPrepared: function (options) {
            var column = options.column;
            var fieldData = options.value,
                fieldHtml = '';
            if (column.dataField === 'dispatchTypeId') {
                if (!isEmpty(fieldData)) {
                    var isDeliverect = fieldData.includes(cDispatchType_Deliverect);
                    var isDoorDash = fieldData.includes(cDispatchType_DoorDash)
                    if (isDeliverect) {
                        fieldHtml = "<span><img src='/Content/Images/deliverect_logo.png'></span>";
                    } else if (isDoorDash) {
                        fieldHtml = "<span><img src='/Content/Images/doordash_logo.png'></span>";
                    }
                    options.cellElement.html(fieldHtml);
                }
            }
        },
        onCellClick: function (e) {
            var data = e.data;
            if (!isEmpty(data) && e.column.dataField != undefined) {
                isLoading(true);
                setTimeout(function () {
                    var getDataDeliveryBilling = getDataDeliveryBillingObjFormAjax(cJsonGetDataDeliveryBillingConvertFile, data.domainId(), data.domainName(), self.selectMonthAfterConvertFile(), parseInt('2'));
                    if (!isEmpty(getDataDeliveryBilling)) {
                        var dataDeliveryBilling = JSON.parse(getDataDeliveryBilling);
                        DataDeliveryBillingConvertFileModalViewModel(dataDeliveryBilling);
                    }
                    self.domainId(data.domainId());
                    self.domainName(data.domainName());
                    self.valFilterConfirmByDriver(0);
                    self.dataDetailMonitor.isConvertTicket(false);
                    var btnErrorListEditor = $(`#${cGridDeliveryBillingDetailConvertFileModal} .btnErrorList`).dxButton('instance');
                    btnErrorListEditor.option({ text: self.textBtnErrorList() });
                    //Added by WEB-SA23-0049#1
                    if (self.deliveryBillingDetailErrorList().length > 0) {
                        $(`#${cGridDeliveryBillingDetailConvertFileModal} .btnErrorList`).addClass("hasError");
                    } else {
                        $(`#${cGridDeliveryBillingDetailConvertFileModal} .btnErrorList`).removeClass("hasError");
                    }
                    //End Added by WEB-SA23-0049#1
                    //Added by WEB-SA23-0049#3
                    var btnPrevMonthListEditor = $(`#${cGridDeliveryBillingDetailConvertFileModal} .btnPrevMonthList`).dxButton('instance');
                    btnPrevMonthListEditor.option({ text: self.textBtnPrevMonthList() });
                    if (self.deliveryBillingDetailPrevMonthList().length > 0) {
                        $(`#${cGridDeliveryBillingDetailConvertFileModal} .btnPrevMonthList`).addClass("hasPrevMonth");
                    } else {
                        $(`#${cGridDeliveryBillingDetailConvertFileModal} .btnPrevMonthList`).removeClass("hasPrevMonth");
                    }
                    //End Added by WEB-SA23-0049#3
                    modalShow(cModalDeliveryBilling);
                    dataGridDetail.pageSize(15);
                    dataGridDetail.pageIndex(0);
                    isLoading(false); 
                },0);
            }
        },
        onToolbarPreparing: function (e) {
            e.toolbarOptions.items.unshift(
                {
                    location: 'before',
                    widget: 'dxButton',
                    options: {
                        text: "Convert File",  
                        icon: 'upload',
                        onClick() {
                            modalShow(cModalDeliveryBillingConvertFile);             
                        },
                    },
                },
                {
                    location: 'after',
                    widget: 'dxDateBox',
                    options: {
                        acceptCustomValue: false,
                        type: 'date',
                        value: self.selectMonthAfterConvertFile,
                        displayFormat: 'monthAndYear',
                        maxZoomLevel: 'year',
                        minZoomLevel: 'century',
                        width: 170,
                        disabled: true,
                        onValueChanged: function (e) { }
                    }
                },
                {
                    location: 'after',
                    widget: 'dxSelectBox',
                    options: {
                        dataSource: self.filterAbnormalStore,
                        displayExpr: 'name',
                        valueExpr: 'id',
                        value: self.valFilterAbnormal,
                        width: 260,
                        onValueChanged: function (data) {
                            //Modified by WEB-SA23-0049#1
                            //if (data.value === 1) {
                            //    dataGrid.filter(['isAbnormal', '=', false]);
                            //} else if (data.value === 2) {
                            //    dataGrid.filter(['isAbnormal', '=', true]);
                            //} else if (data.value === 3) {
                            //    dataGrid.filter(['hasUnConfirmByDriver', '=', true]);
                            //} else {
                            //    dataGrid.clearFilter('dataSource');
                            //}       
                            //End Modified by WEB-SA23-0049#1
                            //Added by WEB-SA23-0049#1
                            if (data.value === 1) {
                                dataGrid.filter(['isMatch', '=', true]);
                            } else if (data.value === 2) {
                                dataGrid.filter(['isMatch', '=', false]);
                            } else if (data.value === 3) {
                                dataGrid.filter(['hasAbnormal', '=', true]);
                            } else if (data.value === 4) {
                                dataGrid.filter(['hasRefund', '=', true]);
                            } else if (data.value === 5) {
                                dataGrid.filter(['hasUnConfirmByDriver', '=', true]);
                            } else {
                                dataGrid.clearFilter('dataSource');
                            }       
                            //End Added by WEB-SA23-0049#1
                        }
                    }
                },
            );
        }
    });
        
    self.dataGridDeliveryBillingDetail = ko.observable({
        onInitialized: function (e) {
            dataGridDetail = e.component;
        },
        dataSource: self.deliveryBillingDetailList,
        showBorders: false,
        showColumnHeader: false,
        showColumnLines: false,
        showRowLines: true,
        visible: true,
        hoverStateEnabled: true,
        columnAutoWidth: true,
        pager: {
            showPageSizeSelector: true,
            allowedPageSizes: [15, 30, 60, 90],
            showInfo: false,
            visible: true
        },
        paging: {
            enabled: true,
            pageIndex: 0,
            pageSize: 15
        },
        loadPanel: {
            enabled: true,
            showPane: false,
            text: ""
        },
        columns: [
            {
                caption: '#', width: 40, alignment: 'center',
                cellTemplate: function (container, options) {
                    container.text(dataGridDetail.pageIndex() * dataGridDetail.pageSize() + options.rowIndex + 1);
                }
            },
            { 
                //dataField: 'status', caption: 'Status', alignment: 'center', cssClass: 'left', width: 150, //Modified and End by WEB-SA23-0049#3
                dataField: 'status', caption: 'Status', alignment: 'center', cssClass: 'left', minWidth: 150, sortOrder: "desc", //Added and End by WEB-SA23-0049#3
                //Added by WEB-SA23-0049#1
                cellTemplate: function (container, options) {
                    if (options.data.status() == 'End Of Month') {
                        container.html("<p><span class='badge badge-warning'> End Of Month </span></p>");
                    } 
                    //Added by WEB-SA23-0049#3
                    else if (options.data.isConvertToRestaurant())
                    {
                        if (!isEmpty(options.data.status())) {
                            container.html("<p>" + options.data.status() + "<span class='badge badge-primary ml-2'> Convert </span>" + "</p>");
                        }
                        else {
                            container.html("<p><span class='badge badge-primary'> Convert </span></p>");
                        }
                    }
                    //End Added by WEB-SA23-0049#3
                    else {
                        container.html(options.data.status());
                    }
                },
                //End Added by WEB-SA23-0049#1
            },
            { dataField: 'ticketId', caption: 'Order ID', alignment: 'center', width: 120 },
            { dataField: 'ticketDateTime', caption: 'Date/Time', alignment: 'left', width:  160},
            { dataField: 'customerName', caption: 'Customer Name', alignment: 'left', width: 140 },
            { dataField: 'total', caption: 'Total', dataType: 'number', alignment: 'right', cssClass: 'right', format: 'currency', precision: 2, width: 70 },
            { dataField: 'commission', caption: 'Commission', dataType: 'number', alignment: 'right', cssClass: 'right', format: 'currency', precision: 2, width: 100 },
            { dataField: 'dasherTip', caption: 'Dasher Tip', dataType: 'number', alignment: 'right', cssClass: 'right', format: 'currency', precision: 2, width: 90 },
            { dataField: 'totalCharge', caption: 'Total Charge', dataType: 'number', alignment: 'right', cssClass: 'right', format: 'currency', precision: 2, width: 100 }
        ],
        onRowPrepared: function (e) {
            if (e.data != undefined) {
                var data = e.data;
                if (!data.isConfirmByDriver()) {
                    e.rowElement.css('background', '#E0E0E0');
                }
            }
        }, 
        onCellClick: function (e) {
            var data = e.data;
            if (!isEmpty(data) && e.column.dataField != undefined) {
                isLoading(true);
                setTimeout(function () { 
                    var ticketIdSplit = data.ticketId().split('-');
                    var objUrl = new ObjUrl(cJsonGetDataDetailMonitor);
                    var requestUrl = objUrl.getUrlFromJson();
                    var passData = {
                        domainId: ticketIdSplit[0],
                        ticketId: ticketIdSplit[1],
                    }
                    var jsonDataDetailMonitor = getJsonFromAjax(requestUrl, !ajax_async, ajax_cache, ajax_type_post, passData, ajax_timeout);
                    ko.mapping.fromJSON(jsonDataDetailMonitor, {}, self.dataDetailMonitor);
                    self.dataDetailMonitor.isConfirmByDriver(data.isConfirmByDriver());
                    self.dataDetailMonitor.valSelectTicketStatusConfirmByDriver(data.isConfirmByDriver() ? 1 : 0);
                    modalShow(cModalDeliveryBillingDetailMonitor);
                    isLoading(false); 
                },0);
            }
        },
        onToolbarPreparing: function (e) {
            e.toolbarOptions.items.unshift( 
                {
                    //location: 'after', //Modified and End by WEB-SA23-0049#3
                    location: 'before', //Added and End by WEB-SA23-0049#3
                    widget: 'dxSelectBox',
                    options: {
                        dataSource: self.filterConfirmByDriverStore,
                        displayExpr: 'name',
                        valueExpr: 'id',
                        value: self.valFilterConfirmByDriver,
                        width: 180,
                        onValueChanged: function (data) {
                            if (data.value === 1) {
                                dataGridDetail.filter(['isConfirmByDriver', '=', true]);
                            } else if (data.value === 2) {
                                dataGridDetail.filter(['isConfirmByDriver', '=', false]);
                            } else {
                                dataGridDetail.clearFilter('dataSource');
                            }                            
                        }
                    }
                },
                //Added by WEB-SA23-0049#3
                {
                    location: 'after',
                    widget: 'dxButton',
                    options: {
                        text: self.textBtnPrevMonthList(),  
                        icon: 'fa fa-file',
                        elementAttr: {
                          class: 'btnPrevMonthList',
                        },
                        onClick() {
                            self.dataDetailMonitor.isConvertTicketPrevMonth(false);
                            self.isDeliveryBillingDetailPrevMonth(true);
                            modalHide(cModalDeliveryBilling);
                            modalShow(cModalDeliveryBillingDetailPrevMonth);
                            refreshGrid(cGridDeliveryBillingDetailPrevMonthModal);
                        },
                    },
                },
                //End Added by WEB-SA23-0049#3
                {
                    location: 'after',
                    widget: 'dxButton',
                    options: {
                        text: self.textBtnErrorList(),  
                        icon: 'fa fa-exclamation-circle',
                        elementAttr: {
                          class: 'btnErrorList',
                        },
                        onClick() {
                            modalHide(cModalDeliveryBilling);
                            modalShow(cModalDeliveryBillingDetailError);
                            refreshGrid(cGridDeliveryBillingDetailErrorModal);
                        },
                    },
                },
            );
        },
    });
    
    self.dataGridDeliveryBillingDetailError = ko.observable({
        onInitialized: function (e) {
            dataGridDetailError = e.component;
        },
        dataSource: self.deliveryBillingDetailErrorList,
        showBorders: true,
        showColumnHeader: false,
        showColumnLines: true,
        showRowLines: true,
        visible: true,
        hoverStateEnabled: true,
        allowColumnResizing: true,
        columnAutoWidth: true,
        columnChooser: {
            enabled: true,
            mode: 'select'
        },
        pager: {
            showPageSizeSelector: true,
            allowedPageSizes: [15, 30, 60, 90],
            showInfo: false,
            visible: true
        },
        paging: {
            enabled: true,
            pageIndex: 0,
            pageSize: 15
        },
        loadPanel: {
            enabled: true,
            showPane: false,
            text: ""
        },
        columns: [
            {
                caption: '#', width: 40, alignment: 'center',
                cellTemplate: function (container, options) {
                    container.text(dataGridDetailError.pageIndex() * dataGridDetailError.pageSize() + options.rowIndex + 1);
                }
            },
            { dataField: 'startDate', caption: 'START_DATE', alignment: 'left', },
            { dataField: 'endDate', caption: 'END_DATE', alignment: 'left', },
            { dataField: 'deliveryDate', caption: 'DELIVERY_DATE', alignment: 'left', },
            { dataField: 'cancellationDate', caption: 'CANCELLATION_DATE', alignment: 'left', },
            { dataField: 'doorDashId', caption: 'DOORDASH_ID', alignment: 'left', },
            { dataField: 'deliveryId', caption: 'DELIVERY_UUID', alignment: 'left', },
            { dataField: 'driveOrderId', caption: 'DRIVE_ORDER_ID', alignment: 'left', },
            { dataField: 'externalOrderId', caption: 'EXTERNAL_ORDER_ID', alignment: 'left', },
            { dataField: 'isReturnDeliveryFlag', caption: 'IS_RETURN_DELIVERY_FLAG', alignment: 'center', },
            { dataField: 'businessName', caption: 'BUSINESS_NAME', alignment: 'left', },
            { dataField: 'externalStoreId', caption: 'EXTERNAL_STORE_ID', alignment: 'left', },
            { dataField: 'storeName', caption: 'STORE_NAME', alignment: 'left', },
            { dataField: 'storeAddress', caption: 'STORE_ADDRESS', alignment: 'left', },
            { dataField: 'subTotal', caption: 'subtotal', alignment: 'left', cssClass: 'right', },
            { dataField: 'driveFee', caption: 'drive_fee', alignment: 'left', cssClass: 'right', },
            { dataField: 'driveFeeTax', caption: 'drive_fee_tax', alignment: 'left', cssClass: 'right', },
            { dataField: 'adjustment', caption: 'adjustment', alignment: 'left', cssClass: 'right', },
            { dataField: 'cashAdjustment', caption: 'cash_adjustment', alignment: 'left', cssClass: 'right', },
            { dataField: 'dasherTip', caption: 'dasher_tip', alignment: 'left', cssClass: 'right', },
            { dataField: 'aggregatorFee', caption: 'aggregator_fee', alignment: 'left', cssClass: 'right', },
            { dataField: 'acceptanceRateFee', caption: 'acceptance_rate_fee', alignment: 'left', cssClass: 'right', },
            { dataField: 'dasherRegulatoryFee', caption: 'dasher_regulatory_fee', alignment: 'left', cssClass: 'right', },
            { dataField: 'totalCharge', caption: 'total_charge', alignment: 'left', cssClass: 'right', },
            { dataField: 'notes', caption: 'NOTES', alignment: 'left', },
        ],
        onCellPrepared: function (options) {
            var column = options.column;
            var fieldData = options.value,
                fieldHtml = '';
            if (column.dataField === 'isReturnDeliveryFlag') {
                if (!isEmpty(fieldData)) {
                    if (fieldData == true) {
                        fieldHtml = "<span><i class='fa fa-check theme-true'></i></span>";
                    } else if (fieldData == false) {
                        fieldHtml = "<span><i class='fa fa-times theme-false'></i></span>";
                    } else {
                        fieldHtml = fieldData.value;
                    }
                    options.cellElement.html(fieldHtml);
                }
            }
        },
    });

    //Added by WEB-SA23-0049#3
    self.dataGridDeliveryBillingDetailPrevMonth = ko.observable({
        onInitialized: function (e) {
            dataGridDetailPrevMonth = e.component;
        },
        dataSource: self.deliveryBillingDetailPrevMonthList,
        showBorders: false,
        showColumnHeader: false,
        showColumnLines: false,
        showRowLines: true,
        visible: true,
        hoverStateEnabled: true,
        columnAutoWidth: true,
        pager: {
            showPageSizeSelector: true,
            allowedPageSizes: [15, 30, 60, 90],
            showInfo: false,
            visible: true
        },
        paging: {
            enabled: true,
            pageIndex: 0,
            pageSize: 15
        },
        loadPanel: {
            enabled: true,
            showPane: false,
            text: ""
        },
        columns: [
            {
                caption: '#', width: 40, alignment: 'center',
                cellTemplate: function (container, options) {
                    container.text(dataGridDetailPrevMonth.pageIndex() * dataGridDetailPrevMonth.pageSize() + options.rowIndex + 1);
                }
            },
            { 
                dataField: 'status', caption: 'Status', alignment: 'center', cssClass: 'left', minWidth: 150, sortOrder: "desc",
                cellTemplate: function (container, options) {
                    if (options.data.status() == 'End Of Month') {
                        container.html("<p><span class='badge badge-warning'> End Of Month </span></p>");
                    } 
                    else if (options.data.isConvertToRestaurant())
                    {
                        if (!isEmpty(options.data.status())) {
                            container.html("<p>" + options.data.status() + "<span class='badge badge-primary ml-2'> Convert </span>" + "</p>");
                        }
                        else {
                            container.html("<p><span class='badge badge-primary'> Convert </span></p>");
                        }                        
                    }
                    else {
                        container.html(options.data.status());
                    }
                },
            },
            { dataField: 'ticketId', caption: 'Order ID', alignment: 'center', width: 120 },
            { dataField: 'ticketDateTime', caption: 'Date/Time', alignment: 'left', width:  160},
            { dataField: 'customerName', caption: 'Customer Name', alignment: 'left', width: 140 },
            { dataField: 'total', caption: 'Total', dataType: 'number', alignment: 'right', cssClass: 'right', format: 'currency', precision: 2, width: 70 },
            { dataField: 'commission', caption: 'Commission', dataType: 'number', alignment: 'right', cssClass: 'right', format: 'currency', precision: 2, width: 100 },
            { dataField: 'dasherTip', caption: 'Dasher Tip', dataType: 'number', alignment: 'right', cssClass: 'right', format: 'currency', precision: 2, width: 90 },
            { dataField: 'totalCharge', caption: 'Total Charge', dataType: 'number', alignment: 'right', cssClass: 'right', format: 'currency', precision: 2, width: 100 }
        ],
        onRowPrepared: function (e) {
            if (e.data != undefined) {
                var data = e.data;
                if (!data.isConfirmByDriver()) {
                    e.rowElement.css('background', '#E0E0E0');
                }
            }
        }, 
        onCellClick: function (e) {
            var data = e.data;
            if (!isEmpty(data) && e.column.dataField != undefined) {
                isLoading(true);
                setTimeout(function () { 
                    var ticketIdSplit = data.ticketId().split('-');
                    var objUrl = new ObjUrl(cJsonGetDataDetailMonitor);
                    var requestUrl = objUrl.getUrlFromJson();
                    var passData = {
                        domainId: ticketIdSplit[0],
                        ticketId: ticketIdSplit[1],
                    }
                    var jsonDataDetailMonitor = getJsonFromAjax(requestUrl, !ajax_async, ajax_cache, ajax_type_post, passData, ajax_timeout);
                    ko.mapping.fromJSON(jsonDataDetailMonitor, {}, self.dataDetailMonitor);
                    self.dataDetailMonitor.isConfirmByDriver(data.isConfirmByDriver());
                    self.dataDetailMonitor.valSelectTicketStatusConfirmByDriver(data.isConfirmByDriver() ? 1 : 0);
                    modalShow(cModalDeliveryBillingDetailMonitor);
                    isLoading(false); 
                },0);
            }
        },
        onToolbarPreparing: function (e) {
            e.toolbarOptions.items.unshift( 
                {
                    location: 'before',
                    widget: 'dxSelectBox',
                    options: {
                        dataSource: self.filterConfirmByDriverStore,
                        displayExpr: 'name',
                        valueExpr: 'id',
                        value: ko.observable(0),
                        width: 180,
                        onValueChanged: function (data) {
                            if (data.value === 1) {
                                dataGridDetailPrevMonth.filter(['isConfirmByDriver', '=', true]);
                            } else if (data.value === 2) {
                                dataGridDetailPrevMonth.filter(['isConfirmByDriver', '=', false]);
                            } else {
                                dataGridDetailPrevMonth.clearFilter('dataSource');
                            }                            
                        }
                    }
                },
            );
        },
    });
    //End Added by WEB-SA23-0049#3

    self.clickUpload = function () {
        addSpinButton(cModalDeliveryBillingConvertFile);
        var dateSelect = moment(self.selectMonth()).format('L');
        var serializedForm = new FormData();
        serializedForm.append("uploadConvertFile", jQuery("#uploadConvertFile").get(0).files[0]);
        serializedForm.append("dateSelect", dateSelect);

        var objUrl = new ObjUrl(cfrmDeliveryBillingUploadConvertFile);
        var requestUrl = objUrl.getUrlSubmitForm();
        $.ajax({
            url: requestUrl,
            async: ajax_async,
            cache: ajax_cache,
            type: ajax_type_post,
            data: serializedForm,
            processData: false,
            contentType: false,
            timeout: ajax_timeout,
        })
        .done(function (result) {
            removeSpinButton(cModalDeliveryBillingConvertFile);
            if (result.status) {
                ko.mapping.fromJSON(result.obj, {}, self.data);
                self.selectMonthAfterConvertFile(self.selectMonth());
                self.valFilterAbnormal(0);
                self.valFilterAbnormal(2);
                self.isConvertFile(true);
                modalHide(cModalDeliveryBillingConvertFile);
            }
            var objAlert = new ObjAlert(cfrmDeliveryBillingUploadConvertFile, result.message, result.status);
            objAlert.getAlert();
        })
        .fail(function (result) {
            removeSpinButton(cModalDeliveryBillingConvertFile);
            swal(cSwal_Alert_Error, cError_Fail_TimeOut, cSwal_Icon_Error);
        });
    };

    self.clickCloseModalDeliveryBillingConvertFile = function () {
        if (self.dataDetailMonitor.isConvertTicket()) {
            swal({
                title: 'Do you want to save?',
                text: 'Something has changed. Please save your changes.',
                type: 'question',
                showCancelButton: true,
                confirmButtonText: 'Yes',
                cancelButtonText: 'Cancel',
                confirmButtonClass: 'btn theme default-button px-4 gb_margin-x-5px',
                cancelButtonClass: 'btn btn-secondary gb_margin-x-5px',
                buttonsStyling: false,
                showLoaderOnConfirm: true,
                allowOutsideClick: false,
                allowEscapeKey: false,
            }).then(function () {
                self.clickSaveDeliveryBillingConvertFile();
            }, function (dismiss) {
                if (dismiss === 'cancel') {}
            });
        } else {
            modalHide(cModalDeliveryBilling);
        }
    };

    self.clickSaveDeliveryBillingConvertFile = function () { 
        if (self.dataDetailMonitor.isConvertTicket()) {
            addSpinButton(cModalDeliveryBilling);
            var objUrl = new ObjUrl(cfrmDeliveryBillingConvertFileUpdate);
            var requestUrl = objUrl.getUrlSubmitForm();
            var passData = {
                domainId: self.domainId(),
                domainName: self.domainName(),
                dateSelect: self.selectMonthAfterConvertFile(),
                customerId: vmViewIndex.customer.customerId(),
                email: vmViewIndex.customer.email(),
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
                removeSpinButton(cModalDeliveryBilling);
                if (result.status) {
                    var filterData = ko.utils.arrayFirst(self.data(), function (item) {
                        return item.domainId() == self.domainId();
                    });    
                    if (filterData != null) {
                        filterData.isUpdate(true);
                    }
                    self.dataDetailMonitor.isConvertTicket(false);
                    dataGrid.refresh();
                    modalHide(cModalDeliveryBilling);
                }
                var objAlert = new ObjAlert(cfrmDeliveryBillingConvertFileUpdate, result.message, result.status);
                objAlert.getAlert();
            })
            .fail(function (result) {
                removeSpinButton(cModalDeliveryBilling);
                swal(cSwal_Alert_Error, cError_Fail_TimeOut, cSwal_Icon_Error);
            });
        } else {
            modalHide(cModalDeliveryBilling);
        }
    };

    //Added by WEB-SA23-0049#3
    self.clickCloseModalDeliveryBillingDetailPrevMonth = function () {
        if (self.isDeliveryBillingDetailPrevMonth() && self.dataDetailMonitor.isConvertTicketPrevMonth()) {
            swal({
                title: 'Do you want to save?',
                text: 'Something has changed. Please save your changes.',
                type: 'question',
                showCancelButton: true,
                confirmButtonText: 'Yes',
                cancelButtonText: 'Cancel',
                confirmButtonClass: 'btn theme default-button px-4 gb_margin-x-5px',
                cancelButtonClass: 'btn btn-secondary gb_margin-x-5px',
                buttonsStyling: false,
                showLoaderOnConfirm: true,
                allowOutsideClick: false,
                allowEscapeKey: false,
            }).then(function () {
                self.clickSaveDeliveryBillingDetailPrevMonth();
            }, function (dismiss) {
                if (dismiss === 'cancel') {}
            });
        } else {
            self.dataDetailMonitor.isConvertTicketPrevMonth(false);
            self.isDeliveryBillingDetailPrevMonth(false);
            modalHide(cModalDeliveryBillingDetailPrevMonth);
        }
    };

    self.clickSaveDeliveryBillingDetailPrevMonth = function () { 
        if (self.isDeliveryBillingDetailPrevMonth() && self.dataDetailMonitor.isConvertTicketPrevMonth()) {
            addSpinButton(cModalDeliveryBillingDetailPrevMonth);
            var objUrl = new ObjUrl(cfrmDeliveryBillingConvertFileUpdate);
            var requestUrl = objUrl.getUrlSubmitForm();
            var passData = {
                domainId: self.domainId(),
                domainName: self.domainName(),
                dateSelect: moment(getPrevMonth(new Date(self.selectMonthAfterConvertFile())), 'L').format('L'),
                customerId: vmViewIndex.customer.customerId(),
                email: vmViewIndex.customer.email(),
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
                removeSpinButton(cModalDeliveryBillingDetailPrevMonth);
                if (result.status) {
                    var filterData = ko.utils.arrayFirst(self.data(), function (item) {
                        return item.domainId() == self.domainId();
                    });    
                    if (filterData != null) {
                        filterData.isUpdate(true);
                    }
                    dataGrid.refresh();
                    self.dataDetailMonitor.isConvertTicketPrevMonth(false);
                    self.isDeliveryBillingDetailPrevMonth(false);
                    modalHide(cModalDeliveryBillingDetailPrevMonth);
                }
                var objAlert = new ObjAlert(cfrmDeliveryBillingConvertFileUpdate, result.message, result.status);
                objAlert.getAlert();
            })
            .fail(function (result) {
                removeSpinButton(cModalDeliveryBillingDetailPrevMonth);
                swal(cSwal_Alert_Error, cError_Fail_TimeOut, cSwal_Icon_Error);
            });
        } else {
            self.dataDetailMonitor.isConvertTicketPrevMonth(false);
            self.isDeliveryBillingDetailPrevMonth(false);
            modalHide(cModalDeliveryBillingDetailPrevMonth);
        }
    };
    //End Added by WEB-SA23-0049#3

    self.dataDetailMonitor.clickDownload = function () { 
        isLoading(true);
        $(`#${cModalDeliveryBillingDetailMonitor}`).scrollTop(0);
        html2canvas(document.querySelector(`#${cModalDeliveryBillingDetailMonitor} .modal-content`), {
            allowTaint: false,
            useCORS: true,
        }).then(canvas => {
            saveAs(canvas.toDataURL(), 'ticket-' + self.dataDetailMonitor.shopTicket() + '.png');
            isLoading(false);
        });
    };

    self.dataDetailMonitor.selectTicketStatusConfirmByDriver = ko.observable({
        dataSource: self.dataDetailMonitor.selectTicketStatusConfirmByDriverStore,
        displayExpr: 'name',
        value: self.dataDetailMonitor.valSelectTicketStatusConfirmByDriver,
        valueExpr: 'id',
        placeholder: 'Select...',
        onValueChanged: function (data) {}
    });

    self.dataDetailMonitor.clickShowModalConvertTicket = function () {
        self.dataDetailMonitor.valSelectTicketStatusConfirmByDriver(self.dataDetailMonitor.isConfirmByDriver() ? 1 : 0);
        modalShow(cModalDeliveryBillingConvertTicket);
    };

    self.dataDetailMonitor.clickSaveConvertTicket = function () {
        addSpinButton(cModalDeliveryBillingConvertTicket);
        var shopTicket = self.dataDetailMonitor.shopTicket();
        var isConfirmByDriver = self.dataDetailMonitor.valSelectTicketStatusConfirmByDriver() == 1;
        var objUrl = new ObjUrl(cfrmDeliveryBillingConvertTicket);
        var requestUrl = objUrl.getUrlSubmitForm();
        var passData = {
            domainId: self.dataDetailMonitor.domainId(),
            domainName: self.dataDetailMonitor.domainName(),
            ticketId: self.dataDetailMonitor.ticketId(),
            isConfirmByDriver: isConfirmByDriver,
            customerId: vmViewIndex.customer.customerId(),
            email: vmViewIndex.customer.email(),
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
            removeSpinButton(cModalDeliveryBillingConvertTicket);
            if (result.status) {
                //Added by WEB-SA23-0049#3
                if (self.isDeliveryBillingDetailPrevMonth()) {
                    self.dataDetailMonitor.isConvertTicketPrevMonth(result.obj);
                    var filterDeliveryBillingDetailPrevMonth = ko.utils.arrayFirst(self.deliveryBillingDetailPrevMonthList(), function (item) {
                        return item.ticketId() == shopTicket;
                    });
                    if (filterDeliveryBillingDetailPrevMonth != null) {
                        filterDeliveryBillingDetailPrevMonth.isConfirmByDriver(isConfirmByDriver);
                    }
                    dataGridDetailPrevMonth.refresh();
                }                
                else {
                //End Added by WEB-SA23-0049#3
                    self.dataDetailMonitor.isConvertTicket(result.obj);
                    var filterDeliveryBillingDetail = ko.utils.arrayFirst(self.deliveryBillingDetailList(), function (item) {
                        return item.ticketId() == shopTicket;
                    });
                    if (filterDeliveryBillingDetail != null) {
                        filterDeliveryBillingDetail.isConfirmByDriver(isConfirmByDriver);
                    }
                    dataGridDetail.refresh();
                } //Added and End by WEB-SA23-0049#3
                modalHide(cModalDeliveryBillingConvertTicket);
                modalHide(cModalDeliveryBillingDetailMonitor);
            }
            var objAlert = new ObjAlert(cfrmDeliveryBillingConvertTicket, result.message, result.status);
            objAlert.getAlert();
        })
        .fail(function (result) {
            removeSpinButton(cModalDeliveryBillingConvertTicket);
            swal(cSwal_Alert_Error, cError_Fail_TimeOut, cSwal_Icon_Error);
        });
    };

    $('#uploadConvertFile').change(function (event) {
        $('#showUploadConvertFile').html($(this).val());
    });

    $(`#${cModalDeliveryBillingConvertFile}`).on('hidden.bs.modal', function () {
        $('#uploadConvertFile').val('');
        $('#showUploadConvertFile').text('');
    });

    $(`#${cModalDeliveryBillingDetailError}`).on('hidden.bs.modal', function () {
        modalShow(cModalDeliveryBilling);
    });

    //Added by WEB-SA23-0049#3
    $(`#${cModalDeliveryBillingDetailPrevMonth}`).on('hidden.bs.modal', function () {
        modalShow(cModalDeliveryBilling);
    });
    //End Added by WEB-SA23-0049#3
};

function DataDeliveryBillingConvertFileModalViewModel(data) {
    var self = vmViewIndex.deliveryBilling.dataConvertFileModal;
    self.shopName(data.shopName);
    self.shopStreet(data.shopStreet);
    self.period(data.period);
    self.countCommission(data.countCommission);
    self.countTip(data.countTip);
    self.sumCommission(data.sumCommission);
    self.sumTip(data.sumTip);
    self.totalAmount(rountTwo(self.sumCommission() + self.sumTip()));
    self.sumAmountDeposit(data.sumAmountDeposit);
    ko.mapping.fromJS(data.deliveryBillingDetailList, {}, self.deliveryBillingDetailList);
    ko.mapping.fromJS(data.deliveryBillingDetailErrorList, {}, self.deliveryBillingDetailErrorList);
    ko.mapping.fromJS(data.deliveryBillingDetailPrevMonthList, {}, self.deliveryBillingDetailPrevMonthList); //Added and End by WEB-SA23-0049#3
};
//End Added by WEB-SA23-0049

//Added by WEB-SA24-0002
function DataRpOrderPaperViewModel() {
    var self = this;
    self.domainId = ko.observable('');
    self.domainName = ko.observable('');
    self.shopName = ko.observable('');
    self.shopAddress = ko.observable('');

    self.clickTab = function (data, event) {
        var $target = $(event.target);
        var index = $target.data('id');
        var $divDate = $('.tab-body-rporderpaper .date');
        if (index == 1) {
            $divDate.show();
        } else {
            $divDate.hide();
        }
        $('.tab-rporderpaper').find('label').removeClass('theme default-background-color-dark force');
        $target.next('label').addClass('theme default-background-color-dark force');
        $('.support-tabs-wrapper').find('.tab-body').each(function () {
            if ($(this).data('id') == index) {
                $(this).css('opacity', 1);
                $(this).css('position', 'relative');
                $(this).show();
            } else {
                $(this).css('opacity', 0);
                $(this).css('position', 'absolute');
                $(this).hide();
            }
        });
    };

    // Tab History
    var dataGridHistory;
    self.dataHistory = ko.observableArray([]);
    self.selectMonthHistory = ko.observable(moment(new Date(), 'L').format('L'));

    self.dateBoxMonthHistory = ko.observable({
        acceptCustomValue: false,
        type: 'date',
        value: self.selectMonthHistory(),
        max: new Date(),
        displayFormat: 'monthAndYear',
        minZoomLevel: "century",
        maxZoomLevel: "year",
        width: 170,
        onValueChanged: function (e) {
            var value = moment(e.value).format('L');
            if (value != self.selectMonthHistory()) {
                self.selectMonthHistory(value);
                isLoading(true);
                setTimeout(function () {
                    var key = {
                        domainId: self.domainId(),
                        domainName: self.domainName(),
                        date: value,
                    };
                    var dataRpOrderPaperByDomain = JSON.parse(getObjFormAjaxByJson(cJsonGetDataRpOrderPaperByDomain, JSON.stringify(key)));
                    //ko.mapping.fromJS(dataRpOrderPaperByDomain.orderDetails.orders, {}, self.dataHistory); //Modified and End by WEB-SA24-0019
                    ko.mapping.fromJS(dataRpOrderPaperByDomain.orderHistoryList, {}, self.dataHistory); //Added and End by WEB-SA24-0019
                    dataGridHistory.refresh();
                    isLoading(false);
                }, 0);                
            }
        }
    });

    self.dataGridOptionsHistory = ko.observable({
        onInitialized: function (e) {
            dataGridHistory = e.component;
        },
        dataSource: self.dataHistory,
        showColumnLines: true,
        showRowLines: true,
        showBorders: true,
        //hoverStateEnabled: true, //Modified and End by WEB-SA24-0019
        hoverStateEnabled: false, //Added and End by WEB-SA24-0019
        sorting: { mode: 'multiple' },
        paging: {
            pageSize: 15
        },
        pager: {
            showPageSizeSelector: true,
            allowedPageSizes: [15, 30, 60, 90],
            showInfo: true,
            showNavigationButtons: true,
            showPageSizeSelector: true,
            visible: true
        },
        allowColumnReordering: true,
        columnAutoWidth: true,
        columns: [
            //{ dataField: 'createOn', caption: 'Date', alignment: 'center', cssClass: 'center', sortOrder: 'asc', dataType: 'date', format: "MM/dd/yyyy", }, //Modified and End by WEB-SA24-0019
            //Added by WEB-SA24-0019
            { 
                dataField: 'createOn', caption: 'Date', alignment: 'center', cssClass: 'center', sortOrder: 'asc', dataType: 'date', format: "MM/dd/yyyy",
                cellTemplate: function (container, options) {
                    var html = `<p class="mb-2">${options.text}</p>`;
                    var isPurchase = false;
                    _.forEach(options.data.purchaseItems(), function (item) {
                        if (item.totalPrice() > 0) {
                            isPurchase = true;
                            return false;
                        } 
                    });
                    if (isPurchase) {
                        html += `<p class="mb-2" style="color:#DE3112;">-Purchase-</p>`;
                    }
                    container.html(html);
                },
            },
            //End Added by WEB-SA24-0019
            { dataField: 'createOn', caption: 'Time', alignment: 'center', cssClass: 'center', dataType: 'date', format: 'hh:mm aa', },
            { 
                //Modified by WEB-SA24-0019
                //dataField: 'items', caption: 'Order', alignment: 'center', cssClass: 'left', width: '208px',
                //cellTemplate: function (container, options) {
                //    var html = '';
                //    _.forEach(options.data.items, function (item, key) {
                //        html += `<p class="mb-2">${capitalizeFirstLetter(key)}</p>`;
                //    });
                //    container.html(html);
                //},
                //End Modified by WEB-SA24-0019
                //Added by WEB-SA24-0019
                dataField: 'purchaseItems', caption: 'Order', alignment: 'center', cssClass: 'left', minWidth: '208px',
                cellTemplate: function (container, options) {
                    var html = '';
                    _.forEach(options.data.purchaseItems(), function (item) {
                        if (item.totalPrice() > 0) {
                            html += `<p class="mb-2">${capitalizeFirstLetter(item.displayName())}<span class="ml-2" style="color:#008A00;">$${numberWithCommas(item.totalPrice(), true)}</span></p>`;
                        } else {
                            html += `<p class="mb-2">${capitalizeFirstLetter(item.displayName())}</p>`;
                        }
                    });
                    container.html(html);
                },
                //End Added by WEB-SA24-0019
            },
            { 
                //Modified by WEB-SA24-0019
                //dataField: 'items', caption: 'Qty', alignment: 'center', cssClass: 'center',
                //cellTemplate: function (container, options) {
                //    var html = '';
                //    _.forEach(options.data.items, function (item, key) {
                //        html += `<p class="mb-2">${item()}</p>`;
                //    });
                //    container.html(html);
                //},
                //End Modified by WEB-SA24-0019
                //Added by WEB-SA24-0019
                dataField: 'purchaseItems', caption: 'Qty', alignment: 'center', cssClass: 'center',
                cellTemplate: function (container, options) {
                    var html = '';
                    _.forEach(options.data.purchaseItems(), function (item) {
                        html += `<p class="mb-2">${item.quantity()}</p>`;
                    });
                    container.html(html);
                },
                //End Added by WEB-SA24-0019
            },
            { dataField: 'createdBy', caption: 'Order By', alignment: 'center', cssClass: 'left pl-3', width: '240px', },
        ],
        onRowPrepared: function (e) {
            //Added by WEB-SA24-0019
            if (e.data != undefined) {
                var data = e.data;
                var isPurchase = false;
                _.forEach(data.purchaseItems(), function (item) {
                    if (item.totalPrice() > 0) {
                        isPurchase = true;
                        return false;
                    } 
                });
                if (isPurchase) {
                    e.rowElement.css('background', 'rgba(255, 0, 0, 0.05)');
                }
            }
            //End Added by WEB-SA24-0019
            e.rowElement.addClass('datagrid-summary-state-hover');
        },
    });

    self.resetDateBoxMonthHistory = function () {
        var dataDateBox = $(".tab-body-rporderpaper .date").dxDateBox('instance');
        dataDateBox.option({ value: self.selectMonthHistory() });
    };  

    // Tab Order Paper
    self.dataOrderPaper = ko.observableArray([]);
    self.selectTypeIdsOrderPaper = ko.observableArray([]);

    self.clickCheckTypeOrderPaper = function (data, event) {
        var typeId = data.orderPaperTypeId();
        if (!data.checked()) {
            data.qty(1);
            self.selectTypeIdsOrderPaper.remove(typeId);
        } else {
            self.selectTypeIdsOrderPaper.push(typeId);
        }
        return true;
    };

    self.clickQtyIncreaseOrderPaper = function (data, event) {
        data.qty(data.qty() + 1);
    };

    self.clickQtyDecreaseOrderPaper = function (data, event) {
        if (data.qty() == 1) {
            data.qty(1)
        } else {
            data.qty(data.qty() - 1);
        }
    };

    self.clickSendOrderToGravityOrderPaper = function () {
        if (self.selectTypeIdsOrderPaper().length > 0) { 
            swal({
                title: 'Are you sure?',
                text: 'Are you sure you want to send order to Gravity?',
                type: cSwal_Icon_Warning,
                showCancelButton: true,
                confirmButtonText: "Confirm",
                cancelButtonText: "Cancel",
                closeOnConfirm: false,
                closeOnCancel: false,
                confirmButtonClass: "btn btn-danger",
                cancelButtonClass: "btn btn-secondary mr-2",
                buttonsStyling: false,
                reverseButtons: true,
            }).then(function (isConfirm) {
                if (isConfirm) {
                    isLoading(true);
                    var objUrl = new ObjUrl(cfrmRpOrderPaperSendOrderToGravityByDomain);
                    var requestUrl = objUrl.getUrlSubmitForm();
                    var passData = {
                        domainId: self.domainId(),
                        domainName: self.domainName(),
                        jsonDataOrderPaper: ko.toJSON(self.dataOrderPaper()),
                        customerId: vmViewIndex.customer.customerId(),
                        email: vmViewIndex.customer.email(),
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
                        isLoading(false);
                        if (result.status) {
                            self.selectTypeIdsOrderPaper([]);
                            ko.utils.arrayForEach(self.dataOrderPaper(), function (item) {
                                ko.utils.arrayForEach(item.groupTypes(), function (type) {
                                    type.checked(false);
                                    type.qty(1);
                                });
                            });
                            var dataUpdate = JSON.parse(result.obj);
                            //ko.mapping.fromJS(dataUpdate.orderDetails.orders, {}, self.dataHistory); //Modified and End by WEB-SA24-0019
                            ko.mapping.fromJS(dataUpdate.orderHistoryList, {}, self.dataHistory); //Added and End by WEB-SA24-0019
                            self.isUnlockedSetting(dataUpdate.isOrderPaperUnlocked);  
                            dataGridHistory.refresh();
                        }
                        var objAlert = new ObjAlert(cfrmRpOrderPaperSendOrderToGravityByDomain, result.message, result.status);
                        objAlert.getAlert();
                    })
                    .fail(function (result) {
                        isLoading(false);
                        swal(cSwal_Alert_Error, cError_Fail_TimeOut, cSwal_Icon_Error);
                    });
                }
            });
        }
    };

    // Tab Setting
    self.dataSetting = ko.observableArray([]);
    self.hiddenTypeIdsSetting = ko.observableArray([]);
    self.selectCheckBoxTypeSetting = ko.observableArray([]);
    self.isUnlockedSetting = ko.observable(false);
    self.inEditModeSetting = ko.observable(false);

    self.clickBtnUnlockSetting = function () {
        if (!self.isUnlockedSetting()) {
            swal({
                title: 'Are you sure?',
                text: 'Are you sure you want unlock status?',
                type: cSwal_Icon_Warning,
                showCancelButton: true,
                confirmButtonText: "Confirm",
                cancelButtonText: "Cancel",
                closeOnConfirm: false,
                closeOnCancel: false,
                confirmButtonClass: "btn btn-danger",
                cancelButtonClass: "btn btn-secondary mr-2",
                buttonsStyling: false,
                reverseButtons: true,
            }).then(function (isConfirm) {
                if (isConfirm) {
                    isLoading(true);
                    var objUrl = new ObjUrl(cfrmRpOrderPaperSettingStatusUpdateByDomain);
                    var requestUrl = objUrl.getUrlSubmitForm();
                    var passData = {
                        domainId: self.domainId(),
                        domainName: self.domainName(),
                        isUnlocked: true,
                        customerId: vmViewIndex.customer.customerId(),
                        email: vmViewIndex.customer.email(),
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
                        isLoading(false);
                        if (result.status) {
                            self.isUnlockedSetting(true);
                        } else {
                            self.isUnlockedSetting(false);
                        }
                        var objAlert = new ObjAlert(cfrmRpOrderPaperSettingStatusUpdateByDomain, result.message, result.status);
                        objAlert.getAlert();
                    })
                    .fail(function (result) {
                        isLoading(false);
                        self.isUnlockedSetting(false);
                        swal(cSwal_Alert_Error, cError_Fail_TimeOut, cSwal_Icon_Error);
                    });
                }
            });
        }
    };

    self.clickBtnEditSetting = function () {
        if (!self.inEditModeSetting()) {
            self.inEditModeSetting(true);
        }
    };

    self.clickSaveSetting = function () {
        if (self.inEditModeSetting()) {
            isLoading(true);
            var objUrl = new ObjUrl(cfrmRpOrderPaperSettingTypeUpdateByDomain);
            var requestUrl = objUrl.getUrlSubmitForm();
            var passData = {
                domainId: self.domainId(),
                domainName: self.domainName(),
                jsonSelectOrderPaperTypeIds: ko.toJSON(self.selectCheckBoxTypeSetting()),
                jsonDataSettingType: ko.toJSON(self.dataSetting()),
                customerId: vmViewIndex.customer.customerId(),
                email: vmViewIndex.customer.email(),
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
                isLoading(false);
                if (result.status) {
                    self.inEditModeSetting(false);
                }
                var objAlert = new ObjAlert(cfrmRpOrderPaperSettingTypeUpdateByDomain, result.message, result.status);
                objAlert.getAlert();
            })
            .fail(function (result) {
                isLoading(false);
                swal(cSwal_Alert_Error, cError_Fail_TimeOut, cSwal_Icon_Error);
            });
        }
    };
};

function DataRpOrderPaperModalViewModel(data) {
    var self = vmViewIndex.report.dataRpOrderPaperModal;
    //ko.mapping.fromJS(data.orderDetails.orders, {}, self.dataHistory); //Modified and End by WEB-SA24-0019
    ko.mapping.fromJS(data.orderHistoryList, {}, self.dataHistory); //Added and End by WEB-SA24-0019

    self.dataOrderPaper([]);
    self.selectTypeIdsOrderPaper([]);

    ko.mapping.fromJS(data.orderPaperTypeGroupData, {}, self.dataSetting);
    ko.mapping.fromJS(data.hiddenOrderPaperTypeIds, {}, self.hiddenTypeIdsSetting);
    self.isUnlockedSetting(data.isOrderPaperUnlocked);
    self.inEditModeSetting(false);    
    self.selectCheckBoxTypeSetting([]);    

    // Map data to dataOrderPaper on Tab Order Paper 
    // Check select type on Tab Setting    
    ko.utils.arrayForEach(data.orderPaperTypeGroupData, function (item) {
        var groupTypes = ko.observableArray([]);
        ko.utils.arrayForEach(item.groupTypes, function (type) {
            var typeId = type.orderPaperTypeId;
            if (!self.hiddenTypeIdsSetting().includes(typeId)) {
                self.selectCheckBoxTypeSetting.push(typeId);
            }

            var groupType = ko.mapping.fromJS(type);
            groupType.checked = ko.observable(false);
            groupType.qty = ko.observable(1);
            groupTypes.push(groupType);
        });
        self.dataOrderPaper.push({
            groupName: ko.observable(item.groupName),
            groupTypes: groupTypes,
        })
    });
};

function DataRpOrderPaperSettingViewModel() {
    var self = this;
    self.countdownDays = ko.observable(0);
    self.dataSettingCondition = ko.observableArray([]);

    self.blurCountdownDays = function(){
        var value = $(event.target).val();
        if (!$.isNumeric(value)) {
            value = 0;
        } else {
            value = parseInt(value);
        }
        if (value < 0) {
            value = 0;
        }
        self.countdownDays(value);
    }

    self.blurMinCondition = function (i, data, event) {
        var value = $(event.target).val();
        const index = i();
        if (!$.isNumeric(value)) {
            value = 0;
        } else {
            value = parseInt(value);
        }
        if (value < 0) {
            value = 0;
        }
        self.dataSettingCondition()[index].min(value);
    };

    self.blurMaxCondition = function (i, data, event) {
        var value = $(event.target).val();
        const index = i();
        if (!$.isNumeric(value)) {
            value = 0;
        } else {
            value = parseInt(value);
        }
        if (value < 0) {
            value = 0;
        }
        self.dataSettingCondition()[index].max(value);

        if (self.dataSettingCondition().length != index + 1) {
            self.dataSettingCondition()[index + 1].min(value + 1);
        }
    };

    self.blurQtyCondition = function (i, data, event) {
        var value = $(event.target).val();
        const index = i();
        if (!$.isNumeric(value)) {
            value = 0;
        } else {
            value = parseInt(value);
        }
        if (value < 0) {
            value = 0;
        }
        self.dataSettingCondition()[index].qty(value);
    };

    self.clickBtnAddCondition = function () {
        var prevIndex = self.dataSettingCondition().length == 0 ? null : self.dataSettingCondition().length - 1;
        self.dataSettingCondition.push(new DataRpOrderPaperSettingConditionViewModel(null));
        if (prevIndex != null) {
            var prevMax = parseInt(self.dataSettingCondition()[prevIndex].max());
            self.dataSettingCondition()[prevIndex + 1].min(prevMax + 1);
        }
    };

    self.clickBtnRemoveCondition = function (i, data, event) {
        const index = i();
        if (index != 0) {
            var min = self.dataSettingCondition()[index].min();
            if (index + 1 < self.dataSettingCondition().length) {
                self.dataSettingCondition()[index + 1].min(min);
            }
            self.dataSettingCondition.splice(index, 1);
        }
    };

    self.clickSave = function () {
        var objValidate = new ObjValidateForm(cfrmRpOrderPaperSettingUpdate, null);
        objValidate.verifyData();
        if (objValidate.error.length > 0) {
            if (objValidate.showAlert) {
                var messageError = convertArrToString(objValidate.error);
                swal(cSwal_Alert_Error, replaceNewLineToBr(messageError), cSwal_Icon_Error);
            }
            return false;
        }

        isLoading(true);
        var dataSettingCondition = [];
        ko.utils.arrayForEach(self.dataSettingCondition(), function (item) {
            dataSettingCondition.push({
                item1: item.min().toFixed(1),
                item2: item.max().toFixed(1),
                item3: item.qty(),
            });
        });

        var objUrl = new ObjUrl(cfrmRpOrderPaperSettingUpdate);
        var requestUrl = objUrl.getUrlSubmitForm();
        var passData = {
            countdownDays: self.countdownDays(),
            jsonDataSettingCondition: JSON.stringify(dataSettingCondition),
            customerId: vmViewIndex.customer.customerId(),
            email: vmViewIndex.customer.email(),
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
            isLoading(false);
            if (result.status) {
                modalHide(cModalRpOrderPaperSetting);
            }
            var objAlert = new ObjAlert(cfrmRpOrderPaperSettingUpdate, result.message, result.status);
            objAlert.getAlert();
        })
        .fail(function (result) {
            isLoading(false);
            swal(cSwal_Alert_Error, cError_Fail_TimeOut, cSwal_Icon_Error);
        });
    };
};

function DataRpOrderPaperSettingConditionViewModel(data) {
    var self = this;
    if (!isEmpty(data)) {
        self.min = ko.observable(data.item1);
        self.max = ko.observable(data.item2);
        self.qty = ko.observable(data.item3);
    } else {
        self.min = ko.observable(0);
        self.max = ko.observable(0);
        self.qty = ko.observable(0);
    }
};
//End Added by WEB-SA24-0002

//Added and End by WEB-SA24-0029
function DataPersonnelViewModel() {
    var self = this;
    self.action = ko.observable(cStatusAdd);
    self.customerId = ko.observable(0);
    self.firstName = ko.observable('');
    self.lastName = ko.observable('');
    self.email = ko.observable('');
    self.valLookupEmployee = ko.observable('');
    self.roleIds = ko.observableArray([]);
    self.productPermissionIds = ko.observableArray([]);
    self.productPermissionIdsByRole = ko.observableArray([]);
    self.productPermissionIdsByUser = ko.observableArray([]);
    self.employeesStore = ko.observableArray([]);
    self.rolesStore = ko.observableArray([]);
    self.iconName = ko.pureComputed(function () {
        let iconName = '';
        _.forEach(self.roleIds(), function (roleId) {
            var firstRole = ko.utils.arrayFirst(self.rolesStore(), function (item) {
                return item.roleId() == roleId && item.active();
            });
            if (firstRole != null) {
                iconName = firstRole.iconName();
                return false;
            }
        });
        return iconName;
    });

    self.dxLookupEmployee = ko.observable({
        dataSource: self.employeesStore,
        displayExpr: function (item) {
            if (!item) {
              return '';
            }
            return `${item.firstName()} ${item.lastName()}`;
        },
        valueExpr: 'customerId',
        value: self.valLookupEmployee,
        placeholder: 'Select employee',
        closeOnOutsideClick: true,
        showPopupTitle: false,
        onValueChanged: function (e) {
            var value = e.value;
            self.roleIds([]);
            self.roleIds(vmViewIndex.personnel.getRoleIdsByCustomerId(value));
            self.productPermissionIdsByUser(vmViewIndex.personnel.getProductPermissionIdsByCustomerId(value));
            self.productPermissionIds(_.concat(self.productPermissionIdsByRole(), self.productPermissionIdsByUser()));
        }
    });

    self.dxTagBoxRoles = ko.observable({
        dataSource: self.rolesStore,
        displayExpr: 'roleName',
        valueExpr: 'roleId',
        value: self.roleIds,
        disabled: ko.pureComputed(function () {
            return  self.disableEditMode(); 
        }),
        showDropDownButton: true,
        searchEnabled: false,
        showSelectionControls: true,
        showMultiTagOnly: false,
        tagTemplate: function(data){
            var count = $('#modalPersonnel .dx-tagbox .dx-tag-content').length;
            if (count < self.roleIds().length) {
                var last = _.last(self.roleIds());
                if (count == 0 || self.roleIds().length - count > 1 || data.roleId() == last) {
                    const tag = $('<div>').attr('aria-disabled', false).addClass('dx-tag-content').css("background-color", data.active() ? data.hexColor() : '#DADADA')
                        .append(
                          $('<span>').text(data.roleName()),
                          $('<div>').addClass('dx-tag-remove-button'),
                        );
                    return tag;
                }
            } 
        },
        onValueChanged: function (e) {
            //Added by WEB-SA24-0029#2
            var previousValue = e.previousValue;
            var newValue = e.value;
            if (!isEmpty(newValue) && !vmViewIndex.personnel.compareRolePriorityByRoleId(vmViewIndex.customer.roleIds()[0], newValue[0])) {
                $('#modalPersonnel .dx-tagbox .dx-tag').remove();
                e.component.option("value", previousValue);
            }
            if (!isEmpty(newValue) && newValue.length == self.rolesStore().length) {
                $('#modalPersonnel .dx-tagbox .dx-tag').remove();
            }
            //End Added by WEB-SA24-0029#2
            self.setRolesStore();
            self.productPermissionIdsByRole(vmViewIndex.personnel.getProductPermissionIdsByRoleIds(self.roleIds()));
            self.productPermissionIds(_.uniq(_.concat(self.productPermissionIdsByRole(), self.productPermissionIdsByUser())));
        },
    });

    self.setRolesStore = function (isEnable) {
        var webPagesRoles = ko.mapping.fromJSON(ko.toJSON(vmViewIndex.personnel.fetchedWebPagesRoles()));
        ko.utils.arrayForEach(webPagesRoles(), function (item) {
            if (self.roleIds().length > 0) {
                item.disabled = ko.observable(false);
            } else if (!vmViewIndex.personnel.compareRolePriorityByRoleId(vmViewIndex.customer.roleIds()[0], item.roleId())) {
                item.disabled = ko.observable(true);
            }
        });
        self.rolesStore(webPagesRoles());
    };

    self.setEmployeesStore = function () {
        var profiles = ko.observableArray([]);
        ko.utils.arrayForEach(vmViewIndex.personnel.fetchedProfiles(), function (item) {
            if (vmViewIndex.personnel.compareRolePriorityByRoleId(vmViewIndex.customer.roleIds()[0], item.roleIds()[0])) {
                profiles.push(item);
            }
        });
        self.employeesStore(profiles());
    }    

    self.resetData = function () {
        self.action(cStatusAdd);
        self.customerId(0);
        self.firstName('');
        self.lastName('');
        self.email('');
        self.valLookupEmployee('');
        self.roleIds([]);
        self.productPermissionIds([]);
        self.productPermissionIdsByRole([]);
        self.productPermissionIdsByUser([]);
    };

    self.visiblePermissionAddOn = function (permissionId) {
        return self.productPermissionIds().includes(permissionId) && !self.productPermissionIdsByRole().includes(permissionId);
    };

    self.disableEditMode = function () {
        return (self.action() == cStatusAdd || isEmpty(self.roleIds())) ? false : !vmViewIndex.personnel.compareRolePriorityByRoleId(vmViewIndex.customer.roleIds()[0], self.roleIds()[0]);
    }

    self.clickDelete = function () {     
        swal({
            title: 'Are you sure you want to delete this record?',
            type: 'question',
            showCancelButton: true,
            confirmButtonText: 'Yes',
            cancelButtonText: 'No',
            confirmButtonClass: 'btn theme default-button',
            cancelButtonClass: 'btn btn-secondary',
            showLoaderOnConfirm: true,
            allowOutsideClick: false,
            allowEscapeKey: false,
        }).then(function () {
            vmViewIndex.personnel.sendPersonnelDelete([self.customerId()]);
        }, function (dismiss) {
            if (dismiss === 'cancel') {}
        });
    };

    self.clickSave = function () {
        var formId = cfrmPersonnel;
        if (!checkInternetConnection()) {
            var objAlert = new ObjAlert(formId, cError_Fail_NoInternet, false);
            objAlert.getAlert();
            return false;
        };

        var objValidate = new ObjValidateForm(formId, null);
        objValidate.verifyData();
        if (objValidate.error.length > 0) {
            if (objValidate.showAlert) {
                var messageError = convertArrToString(objValidate.error);
                swal(cSwal_Alert_Error, replaceNewLineToBr(messageError), cSwal_Icon_Error);
            }
            return false;
        }

        isLoading(true);
        var requestData = {
            customerId: self.customerId(),
            firstName: self.firstName(),
            lastName: self.lastName(),
            email: self.email(),
            roleIds: ko.toJSON(self.roleIds()),
            productPermissionIds: ko.toJSON(self.productPermissionIds())
        };

        var objUrl = new ObjUrl(formId, self.action());
        var requestUrl = objUrl.getUrlSubmitForm();
        var passData = {
            jsonRequestData: JSON.stringify(requestData),
            customerId: vmViewIndex.customer.customerId(),
            email: vmViewIndex.customer.email(),
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
            isLoading(false);
            if (result.status) {
                if (self.action() == cStatusAdd) {
                    vmViewIndex.personnel.dataSharedInvitationModal.inviteLink(result.obj);
                    vmViewIndex.personnel.dataSharedInvitationModal.generateQRCode();
                    modalShow(cModalPersonnelSharedInvitation);                    
                } else {
                    var data = JSON.parse(result.obj);
                    var resultProfiles = ko.mapping.fromJS(data.profiles);
                    var resultWebPagesUsersInRoles = ko.mapping.fromJS(data.webPagesUsersInRoles);
                    var resultProductUserPermissions = ko.mapping.fromJS(data.productUserPermissions);

                    ko.utils.arrayForEach(resultProfiles(), function (item) {
                        var firstProfile = ko.utils.arrayFirst(vmViewIndex.personnel.fetchedProfiles(), function (profile) {
                            return profile.customerId() == item.customerId();
                        });
                        if (firstProfile != null) {
                            vmViewIndex.personnel.fetchedProfiles.replace(firstProfile, item);    
                        }                                  
                    });

                    var filterWebPagesUsersInRoles = ko.utils.arrayFilter(vmViewIndex.personnel.fetchedWebPagesUsersInRoles(), function (item) {
                        return item.userId() == self.customerId();
                    });
                    if (filterWebPagesUsersInRoles.length > 0) {
                        vmViewIndex.personnel.fetchedWebPagesUsersInRoles.removeAll(filterWebPagesUsersInRoles);
                    }
                    vmViewIndex.personnel.fetchedWebPagesUsersInRoles(_.concat(vmViewIndex.personnel.fetchedWebPagesUsersInRoles(), resultWebPagesUsersInRoles()));

                    var filterProductUserPermissions = ko.utils.arrayFilter(vmViewIndex.personnel.fetchedProductUserPermissions(), function (item) {
                        return item.customerId() == self.customerId();
                    });
                    if (filterProductUserPermissions.length > 0) {
                        vmViewIndex.personnel.fetchedProductUserPermissions.removeAll(filterProductUserPermissions);
                    }
                    vmViewIndex.personnel.fetchedProductUserPermissions(_.concat(vmViewIndex.personnel.fetchedProductUserPermissions(), resultProductUserPermissions()));
                }
                modalHide(cModalPersonnel);     
            }
            var objAlert = new ObjAlert(formId, result.message, result.status);
            objAlert.getAlert();
        })
        .fail(function (result) {
            isLoading(false);
            swal(cSwal_Alert_Error, cError_Fail_TimeOut, cSwal_Icon_Error);
        });
    };

    $('#modalPersonnel .productPermissionTabsSlide').slick({
        arrows: false,
        infinite: false,
        speed: 300,
        variableWidth: true,
        centerMode: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        swipeToSlide: true,
        focusOnSelect: true,
    });
};

function DataPersonnelSharedInvitationViewModel() {
    var self = this;
    self.inviteLink = ko.observable('');

    var qrcode = new QRCode(document.getElementById("qrcode-invitaion"), {
        text: self.inviteLink(),
        width: 184,
        height: 184,
        colorDark: "#000000",
        colorLight: "#ffffff",
        correctLevel: QRCode.CorrectLevel.H
    });

    self.generateQRCode = function () {
        qrcode.clear();
        qrcode.makeCode(self.inviteLink());
    };

    self.clickCopy = function () { 
        copyTextToClipboard(self.inviteLink());
    };
};

function DataPersonnelGroupRoleViewModel() {
    var self = this;
    self.webPagesRoles = ko.observableArray([]);
    self.productPermissionIdsByRole = ko.observableArray([]);

    self.profilesByRole = {
        roleId: ko.observable(0),
        roleIconName: ko.observable(''),
        profiles: ko.observableArray([])
    };

    self.selectRole = {
        roleId: ko.observable(0),
        roleName: ko.observable(''),
        rolePriority: ko.observable(0),
        iconName: ko.observable(''),
        hexColor: ko.observable(''),
        subordinateRoleIds: ko.observableArray([]),
        active: ko.observable(false)
    };

    self.hasProductPermissionChanged = function () {
        var sourceProductPermissionIds = vmViewIndex.personnel.getProductPermissionIdsByRoleIds([self.selectRole.roleId()]);
        return sourceProductPermissionIds.sort().toString() != self.productPermissionIdsByRole().sort().toString();
    };

    self.hasWebPagesRolesChanged = function () {
        var sources = ko.mapping.toJS(vmViewIndex.personnel.fetchedWebPagesRoles());
        var models = ko.mapping.toJS(self.webPagesRoles());
        return !areArraysEqual(sources, models, 'roleId');
    };

    self.visiblePermission = function (permissionId) {
        return vmViewIndex.customer.roleIds()[0] == cRole_Administrator_Id || permissionId != permissions.cPersonnel || 
            (permissionId == permissions.cPersonnel && self.selectRole.subordinateRoleIds().length > 0);
    };

    self.disablePermission = function () {
        var customerRoleId = vmViewIndex.customer.roleIds()[0];
        return !(self.selectRole.active() == true && (customerRoleId == cRole_Administrator_Id || self.selectRole.roleId() != customerRoleId));
    };

    self.disableRole = function (roleId) {
        var customerRoleId = vmViewIndex.customer.roleIds()[0];
        if (customerRoleId == cRole_Administrator_Id || customerRoleId == roleId) {
            return false;
        }
        var customerRole = ko.utils.arrayFirst(vmViewIndex.personnel.fetchedWebPagesRoles(), function (item) {
            return item.roleId() == customerRoleId;
        });
        var subordinateRoleIds = JSON.parse("[" + customerRole.subordinateRoleIds() + "]");
        var notSubordinateRole = !subordinateRoleIds.includes(roleId);
        var compareRolePriority = vmViewIndex.personnel.compareRolePriorityByRoleId(roleId, customerRoleId);
        
        return compareRolePriority || notSubordinateRole;
    };

    self.swalUnsavedChangesWarning = function (targetTabRoleId, isCloseModalClicked) {
        swal({
            title: 'Do you want to save?',
            text: 'Something has changed. Please save your changes.',
            type: 'question',
            showCancelButton: true,
            confirmButtonText: 'Yes',
            cancelButtonText: 'No',
            confirmButtonClass: 'btn theme default-button',
            cancelButtonClass: 'btn btn-secondary',
            showLoaderOnConfirm: true,
            allowOutsideClick: false,
            allowEscapeKey: false,
        }).then(function () {
            self.clickSave(null, null, targetTabRoleId, isCloseModalClicked);
        }, function (dismiss) {
            if (dismiss === 'cancel') {
                self.productPermissionIdsByRole(vmViewIndex.personnel.getProductPermissionIdsByRoleIds([self.selectRole.roleId()]));
                if (typeof targetTabRoleId === "number" && !isEmpty(targetTabRoleId)) {
                    self.clickRoleById(targetTabRoleId);
                }
                if (isCloseModalClicked) {
                    modalHide(cModalPersonnelGroupRole);
                }
            }
        });
    }

    self.clickRole = function (data, event) {
        var $target = $(event.currentTarget);
        var roleId = $target.data('id');

        //if (self.hasProductPermissionChanged()) { //Modified and End by WEB-SA24-0029#1
        if (!isEmpty(self.selectRole.roleName()) && self.hasProductPermissionChanged()) { //Added and End by WEB-SA24-0029#1
            self.swalUnsavedChangesWarning(roleId);
            return false;
        }

        var firstWebPagesRoles = ko.utils.arrayFirst(vmViewIndex.personnel.fetchedWebPagesRoles(), function (item) {
            return item.roleId() == roleId;
        });

        var customerIds = ko.observableArray([]);        
        ko.utils.arrayForEach(vmViewIndex.personnel.fetchedWebPagesUsersInRoles(), function (item) { 
            if (item.roleId() == roleId) {
                customerIds.push(item.userId());
            }
        });

        var filterProfiles = ko.utils.arrayFilter(vmViewIndex.personnel.fetchedProfiles(), function (item) {
            return customerIds().includes(item.customerId());
        });

        if (firstWebPagesRoles != null) {
            self.selectRole.roleId(firstWebPagesRoles.roleId());
            self.selectRole.roleName(firstWebPagesRoles.roleName());
            self.selectRole.rolePriority(firstWebPagesRoles.rolePriority());
            self.selectRole.iconName(firstWebPagesRoles.iconName());
            self.selectRole.hexColor(firstWebPagesRoles.hexColor());
            self.selectRole.active(firstWebPagesRoles.active());
            if (!isEmpty(firstWebPagesRoles.subordinateRoleIds())) {
                var subordinateRoleIds = JSON.parse("[" + firstWebPagesRoles.subordinateRoleIds() + "]");
                self.selectRole.subordinateRoleIds(subordinateRoleIds);
            } else {
                self.selectRole.subordinateRoleIds([]);
            }

            self.productPermissionIdsByRole(vmViewIndex.personnel.getProductPermissionIdsByRoleIds([firstWebPagesRoles.roleId()]));
        }        

        if (!isEmpty(filterProfiles)) {
            self.profilesByRole.roleId(roleId);
            self.profilesByRole.roleIconName(firstWebPagesRoles.iconName());
            self.profilesByRole.profiles(filterProfiles);
        } else {
            self.profilesByRole.roleId(0);
            self.profilesByRole.roleIconName('');
            self.profilesByRole.profiles([]);
        }
    };

    self.clickRoleById = function (roleId) {
        var isRoleDisabled = self.disableRole(roleId);
        if (isRoleDisabled) {
            _.forEach(vmViewIndex.personnel.fetchedWebPagesRoles(), function (item) {
                isRoleDisabled = self.disableRole(item.roleId());
                if (!isRoleDisabled) {
                    roleId = item.roleId();
                    return false;
                }
            });
        }
        $(`#sortable-roles .role[data-id="${roleId}"]`).click();
    };

    self.clickAddRole = function () {
        vmViewIndex.personnel.dataRoleModal.action(cStatusAdd);
        vmViewIndex.personnel.dataRoleModal.roleId(0);
        vmViewIndex.personnel.dataRoleModal.roleName('');
        vmViewIndex.personnel.dataRoleModal.valDropDownBoxIcon('');
        vmViewIndex.personnel.dataRoleModal.valColorBox('');
        vmViewIndex.personnel.dataRoleModal.active(true);
        modalShow(cModalPersonnelRole);
    };

    self.clickEditRole = function () {
        vmViewIndex.personnel.dataRoleModal.action(cStatusUpdate);
        vmViewIndex.personnel.dataRoleModal.roleId(self.selectRole.roleId());
        vmViewIndex.personnel.dataRoleModal.roleName(self.selectRole.roleName());
        vmViewIndex.personnel.dataRoleModal.valDropDownBoxIcon(self.selectRole.iconName());
        vmViewIndex.personnel.dataRoleModal.valColorBox(self.selectRole.hexColor());
        vmViewIndex.personnel.dataRoleModal.active(self.selectRole.active());
        modalShow(cModalPersonnelRole);
    };

    self.clickOwnerRole = function () {
        vmViewIndex.personnel.dataOwnerRoleModal.roleId(self.selectRole.roleId());
        vmViewIndex.personnel.dataOwnerRoleModal.roleName(self.selectRole.roleName());
        vmViewIndex.personnel.dataOwnerRoleModal.rolePriority(self.selectRole.rolePriority());
        vmViewIndex.personnel.dataOwnerRoleModal.subordinateRoleIds(self.selectRole.subordinateRoleIds());
        vmViewIndex.personnel.dataOwnerRoleModal.active(self.selectRole.active());
        modalShow(cModalPersonnelOwnerRole);
    };

    self.clickCloseModalGroupRole = function () { 
        if (self.hasProductPermissionChanged() || self.hasWebPagesRolesChanged()) {
            self.swalUnsavedChangesWarning(null, true);
            return false;
        }
        modalHide(cModalPersonnelGroupRole);
    };

    self.clickSave = function (data, event, targetTabRoleId, isCloseModalClicked) {
        var formId = cfrmPersonnelGroupRoleUpdate;
        if (!checkInternetConnection()) {
            var objAlert = new ObjAlert(formId, cError_Fail_NoInternet, false);
            objAlert.getAlert();
            return false;
        };

        var objValidate = new ObjValidateForm(formId, null);
        objValidate.verifyData();
        if (objValidate.error.length > 0) {
            if (objValidate.showAlert) {
                var messageError = convertArrToString(objValidate.error);
                swal(cSwal_Alert_Error, replaceNewLineToBr(messageError), cSwal_Icon_Error);
            }
            return false;
        }

        isLoading(true);
        var requestData = {
            roleId: self.selectRole.roleId(),
            productPermissionIds: ko.toJSON(self.productPermissionIdsByRole()),
            webPagesRoles: ko.toJSON(self.webPagesRoles())
        }

        var objUrl = new ObjUrl(formId);
        var requestUrl = objUrl.getUrlSubmitForm();
        var passData = {
            jsonRequestData: JSON.stringify(requestData),
            customerId: vmViewIndex.customer.customerId(),
            email: vmViewIndex.customer.email(),
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
            isLoading(false);
            if (result.status) {
                var data = JSON.parse(result.obj);
                var resultWebPagesRoles = ko.mapping.fromJS(data.webPagesRoles);
                var resultProductRolePermissions = ko.mapping.fromJS(data.productRolePermissions);

                ko.utils.arrayForEach(resultWebPagesRoles(), function (item) {
                    var firstWebPagesRoles = ko.utils.arrayFirst(self.webPagesRoles(), function (webPagesRoles) {
                        return webPagesRoles.roleId() == item.roleId();
                    });
                    self.webPagesRoles.replace(firstWebPagesRoles, item);                 
                });
                ko.mapping.fromJSON(ko.toJSON(self.webPagesRoles()), {}, vmViewIndex.personnel.fetchedWebPagesRoles);
                
                var filterProductRolePermissions = ko.utils.arrayFilter(vmViewIndex.personnel.fetchedProductRolePermissions(), function (item) {
                    return item.roleId() == self.selectRole.roleId();
                });
                if (filterProductRolePermissions.length > 0) {
                    vmViewIndex.personnel.fetchedProductRolePermissions.removeAll(filterProductRolePermissions);
                }
                vmViewIndex.personnel.fetchedProductRolePermissions(_.concat(vmViewIndex.personnel.fetchedProductRolePermissions(), resultProductRolePermissions()));

                if (typeof targetTabRoleId === "number" && !isEmpty(targetTabRoleId)) {
                    self.clickRoleById(targetTabRoleId);
                }
                if (isCloseModalClicked) {
                    modalHide(cModalPersonnelGroupRole);
                }
            }
            var objAlert = new ObjAlert(formId, result.message, result.status);
            objAlert.getAlert();
        })
        .fail(function (result) {
            isLoading(false);
            swal(cSwal_Alert_Error, cError_Fail_TimeOut, cSwal_Icon_Error);
        });
    };

    self.initRolesSortable = function () {
        var oldIndex;

        $('#sortable-roles').sortable({
            items: '.role:not(.unsortable, .disable)',
            cursor: 'move',
            opacity: 0.4,
            disabled: vmViewIndex.customer.roleIds()[0] != cRole_Administrator_Id,
            start: function (event, ui) {
                oldIndex = ui.item.index();
            },
            update: function (event, ui) {
            },
            stop: function (event, ui) {
                var newIndex = ui.item.index();
                if (oldIndex != newIndex) {
                    var temp = self.webPagesRoles();
                    temp.splice(newIndex, 0, temp.splice(oldIndex, 1)[0]);
                    ko.utils.arrayForEach(temp, function (item, index) {
                        let i = index + 1;
                        item.rolePriority(i);
                    });
                    self.webPagesRoles(temp);
                }
            }
        });
    };

     $('#modalPersonnelGroupRole .productPermissionTabsSlide').slick({
        arrows: false,
        infinite: false,
        speed: 300,
        variableWidth: true,
        centerMode: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        swipeToSlide: true,
        focusOnSelect: true,
    });
};

function DataPersonnelRoleViewModel() {
    var self = this;
    var dropDownBoxIcon;
    self.icons = ko.observableArray(icons);
    self.action = ko.observable(cStatusAdd);
    self.roleId = ko.observable(0);
    self.roleName = ko.observable('');
    self.valDropDownBoxIcon = ko.observable('');
    self.valColorBox = ko.observable('');
    self.active = ko.observable(true);

    self.dxDropDownBoxIcon = ko.observable({
        onInitialized: function (e) {
            dropDownBoxIcon = e.component;
        },
        dataSource: self.icons,
        value: self.valDropDownBoxIcon,
        disabled: ko.pureComputed(function () {
            return  self.disableEditMode(); 
        }),
        placeholder: 'Select Icon',
        fieldTemplate(data, $container) {
            var result = $(`<div class='custom-item'><i class='fa ${data}'></i><div class='icon-name'></div></div>`);
            result.find('.icon-name')
                .dxTextBox({
                    value: data,
                    readOnly: true,
                    inputAttr: { 'aria-label': 'Name' },
                });
            $container.append(!isEmpty(data) ? result : $('<div>').dxTextBox({}));
        },        
        contentTemplate: function(e, $container) {
            var data = e.component.option("dataSource");
            var $iconPicker = $('<div class="icon-picker">').appendTo($container);
            var $iconPickerSearch = $('<input class="form-control icon-picker-search" type="search" placeholder="Search icon..." aria-label="Search">');
            var $iconPickerContent = $('<div class="icon-picker-content custom-scrollbar">');
            $iconPicker.append($iconPickerSearch);            
            $iconPicker.append($iconPickerContent);
            self.buildIcons(data);
        },
        onOpened: function (e) {
            if (!isEmpty(self.valDropDownBoxIcon())) {
                $('.icon-picker-content').find(`.${self.valDropDownBoxIcon()}`).parent().focus();
            }
            self.searchIcon();
        },
    });

    self.dxColorBox = ko.observable({
        value: self.valColorBox,
        disabled: ko.pureComputed(function () {
            return  self.disableEditMode(); 
        }),
        placeholder: 'Select Color',
    });

    self.searchIcon = function () {
        $('.icon-picker-search').on('keyup', function () {
            var value = $(this).val();
            var filteredIcon = _.filter(
                icons, function (icon) {
                    return JSON.stringify(icon).toLowerCase().includes(value.toLowerCase());
                }
            );
            self.buildIcons(filteredIcon);
        });
    };

    self.buildIcons = function (icons) {
        var $iconPickerContent = $('.icon-picker-content').empty();
        if (!isEmpty(icons)) {
            icons.forEach((icon) => {
                var $button = $(`<button class="icon-picker-item ${icon == self.valDropDownBoxIcon() ? 'is-selected' : ''}">`).on('dxclick', () => {
                    $('.icon-picker-content').find('.icon-picker-item').removeClass('is-selected');
                    $('.icon-picker-content').find(`.${icon}`).parent().addClass('is-selected');
                    self.valDropDownBoxIcon(!isEmpty(icon) ? icon : '');
                    dropDownBoxIcon.close();
                });

                var $icon = $(`<i class="fa ${icon}">`);
                $button.append($icon);
                $iconPickerContent.append($button);
            });
        } else {
            $iconPickerContent.append($('<div class="is-empty">No results found…</div>'));
        }
    };

    self.disableEditMode = function () {
        var customerRoleId = vmViewIndex.customer.roleIds()[0];
        return self.action() == cStatusAdd ? false : !(customerRoleId == cRole_Administrator_Id || self.roleId() != customerRoleId);
    };

    self.disableEditRoleAdministrator = function () {
        return self.action() == cStatusAdd ? false : self.roleId() == cRole_Administrator_Id;
    }

    self.clickActive = function () {
        var value = $(event.target).val();
        if (self.active() != value) {
            self.active(value);
        }
    };

    self.clickSave = function () {
        var formId = cfrmPersonnelRole;
        if (!checkInternetConnection()) {
            var objAlert = new ObjAlert(formId, cError_Fail_NoInternet, false);
            objAlert.getAlert();
            return false;
        };

        var objValidate = new ObjValidateForm(formId, null);
        objValidate.verifyData();
        if (objValidate.error.length > 0) {
            if (objValidate.showAlert) {
                var messageError = convertArrToString(objValidate.error);
                swal(cSwal_Alert_Error, replaceNewLineToBr(messageError), cSwal_Icon_Error);
            }
            return false;
        }

        isLoading(true);
        var requestData = {
            roleId: self.roleId(),
            roleName: self.roleName(),
            iconName: self.valDropDownBoxIcon(),
            hexColor: self.valColorBox(),
            active: self.active(),
        }

        var objUrl = new ObjUrl(formId, self.action());
        var requestUrl = objUrl.getUrlSubmitForm();
        var passData = {
            jsonRequestData: JSON.stringify(requestData),
            customerId: vmViewIndex.customer.customerId(),
            email: vmViewIndex.customer.email(),
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
            isLoading(false);
            if (result.status) {
                var data = JSON.parse(result.obj);
                var resultWebPagesRoles = ko.mapping.fromJS(data.webPagesRoles);
                var resultProductRolePermissions = ko.mapping.fromJS(data.productRolePermissions);
                ko.utils.arrayForEach(resultWebPagesRoles(), function (item) {
                    if (self.action() == cStatusAdd) {
                        vmViewIndex.personnel.dataGroupRoleModal.webPagesRoles.push(item);
                        self.roleId(item.roleId());
                    } else {
                        var firstWebPagesRoles = ko.utils.arrayFirst(vmViewIndex.personnel.dataGroupRoleModal.webPagesRoles(), function (webPagesRoles) {
                            return webPagesRoles.roleId() == item.roleId();
                        });
                        vmViewIndex.personnel.dataGroupRoleModal.webPagesRoles.replace(firstWebPagesRoles, item);
                    }                    
                });

                ko.utils.arrayForEach(resultProductRolePermissions(), function (item) {
                    var firstProductRolePermission = ko.utils.arrayFirst(vmViewIndex.personnel.fetchedProductRolePermissions(), function (productRolePermission) {
                        return productRolePermission.productRolePermissionId() == item.productRolePermissionId();
                    });
                    if (firstProductRolePermission != null) {
                        vmViewIndex.personnel.fetchedProductRolePermissions.replace(firstProductRolePermission, item);    
                    }                                  
                });

                ko.mapping.fromJSON(ko.toJSON(vmViewIndex.personnel.dataGroupRoleModal.webPagesRoles()), {}, vmViewIndex.personnel.fetchedWebPagesRoles);
                vmViewIndex.personnel.dataGroupRoleModal.clickRoleById(self.roleId());
                modalHide(cModalPersonnelRole);
            }
            var objAlert = new ObjAlert(formId, result.message, result.status);
            objAlert.getAlert();
        })
        .fail(function (result) {
            isLoading(false);
            swal(cSwal_Alert_Error, cError_Fail_TimeOut, cSwal_Icon_Error);
        });
    };
}

function DataPersonnelOwnerRoleViewModel() {
    var self = this;
    self.roleId = ko.observable(0);
    self.roleName = ko.observable('');
    self.rolePriority = ko.observable(0);
    self.subordinateRoleIds = ko.observableArray([]);
    self.active = ko.observable(false);

    self.getWebPagesRolesByIndex = function (index, isRightColumn) {
        var webPagesRoles = vmViewIndex.personnel.fetchedWebPagesRoles();
        if (isRightColumn) {
            return webPagesRoles[index + Math.ceil(webPagesRoles.length / 2)];
        }
        return webPagesRoles[index];
    };

    self.getMaxWebPagesRolesPerColumn = function() {
        return Math.ceil(vmViewIndex.personnel.fetchedWebPagesRoles().length / 2);
    };

    self.getBackgroundOrBorderColorByIndex = function (index, isRightColumn, isBorder) {
        var defaultBgColor = '#FFF';
        var defaultBdColor = '#C3C3C3';
        var webPagesRoles = self.getWebPagesRolesByIndex(index, isRightColumn);
        var roleId = webPagesRoles.roleId();
        var isRoleAdministrator = self.roleId() == cRole_Administrator_Id;
        var isRoleEdit = self.roleId() == roleId;
        var isSubordinateRole = self.subordinateRoleIds().includes(roleId);
        var valid = isRoleAdministrator || isRoleEdit || isSubordinateRole;
        return valid ? webPagesRoles.hexColor() : isBorder ? defaultBdColor : defaultBgColor;
    };

    self.getValueCheckboxByIndex = function (index, isRightColumn) {
        var webPagesRoles = self.getWebPagesRolesByIndex(index, isRightColumn);
        var roleId = webPagesRoles.roleId();
        return self.roleId() == cRole_Administrator_Id ? roleId == cRole_Administrator_Id ? -1 : cRole_Administrator_Id : roleId;
    };

    self.checkRoleMainByIndex = function (index, isRightColumn) {
        var webPagesRoles = self.getWebPagesRolesByIndex(index, isRightColumn);
        return self.roleId() == webPagesRoles.roleId();
    };

    self.disableRoleByIndex = function (index, isRightColumn) {
        var webPagesRoles = self.getWebPagesRolesByIndex(index, isRightColumn);
        return vmViewIndex.personnel.compareRolePriority(webPagesRoles.rolePriority(), self.rolePriority());
    };

    self.disableEditMode = function () {
        var customerRoleId = vmViewIndex.customer.roleIds()[0];
        return !(self.active() == true && (customerRoleId == cRole_Administrator_Id || self.roleId() != customerRoleId)) || self.roleId() == cRole_Administrator_Id;
    };

    self.clickSelectRole = function (index, isRightColumn, data, event) {
        if (self.roleId() == cRole_Administrator_Id) {
            return false;
        }

        var webPagesRoles = self.getWebPagesRolesByIndex(index, isRightColumn);
        var selectRoleId = webPagesRoles.roleId();
        var first = ko.utils.arrayFirst(self.subordinateRoleIds(), function (item) {
            return item == selectRoleId;
        });
        if (isEmpty(first)) {
            if (self.roleId() == selectRoleId) {
                return false;
            }
            self.subordinateRoleIds.push(selectRoleId);
        } else {
            self.subordinateRoleIds.remove(selectRoleId);
        }
    };

    self.clickSave = function () {
        var formId = cfrmPersonnelOwnerRoleUpdate;
        if (!checkInternetConnection()) {
            var objAlert = new ObjAlert(formId, cError_Fail_NoInternet, false);
            objAlert.getAlert();
            return false;
        };

        var objValidate = new ObjValidateForm(formId, null);
        objValidate.verifyData();
        if (objValidate.error.length > 0) {
            if (objValidate.showAlert) {
                var messageError = convertArrToString(objValidate.error);
                swal(cSwal_Alert_Error, replaceNewLineToBr(messageError), cSwal_Icon_Error);
            }
            return false;
        }

        isLoading(true);
        var requestData = {
            roleId: self.roleId(),
            subordinateRoleIds: ko.toJSON(self.subordinateRoleIds()),
        }

        var objUrl = new ObjUrl(formId);
        var requestUrl = objUrl.getUrlSubmitForm();
        var passData = {
            jsonRequestData: JSON.stringify(requestData),
            customerId: vmViewIndex.customer.customerId(),
            email: vmViewIndex.customer.email(),
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
            isLoading(false);
            if (result.status) {
                var resultWebPagesRoles = ko.mapping.fromJSON(result.obj);
                ko.utils.arrayForEach(resultWebPagesRoles(), function (item) {
                    var firstWebPagesRoles = ko.utils.arrayFirst(vmViewIndex.personnel.dataGroupRoleModal.webPagesRoles(), function (webPagesRoles) {
                        return webPagesRoles.roleId() == item.roleId();
                    });
                    vmViewIndex.personnel.dataGroupRoleModal.webPagesRoles.replace(firstWebPagesRoles, item);                  
                });
                ko.mapping.fromJSON(ko.toJSON(vmViewIndex.personnel.dataGroupRoleModal.webPagesRoles()), {}, vmViewIndex.personnel.fetchedWebPagesRoles);
                vmViewIndex.personnel.dataGroupRoleModal.clickRoleById(self.roleId());
                modalHide(cModalPersonnelOwnerRole);
            }
            var objAlert = new ObjAlert(formId, result.message, result.status);
            objAlert.getAlert();
        })
        .fail(function (result) {
            isLoading(false);
            swal(cSwal_Alert_Error, cError_Fail_TimeOut, cSwal_Icon_Error);
        });
    };
};
//End Added by WEB-SA24-0029