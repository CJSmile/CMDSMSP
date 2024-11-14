/*
 *  SMILEDINING-SA18-0010               03/22/2018      Customize                   1. Summary
 *  SMILEDINING-SA18-0011               05/07/2018      Customize                   1. New Web Report.
 *  SMILEDINING-SA19-0003               03/12/2019      Customize                   1. Add config data of minimum order into ‘tbglobalconfig’ table.
                                                                                    2. Add minimum order for pickup type of orders.
                                                                                    3. Support minimum order when enable or disable minimum order.
                                                                                    4. Add Setup minimum order for pickup and delivery and change integer value to floating point value.
 *  SMILEDINING-SA19-0023               09/13/2019      Customize                   1. Add 'void button' for void previous ticket list on WebSupport.
 *  SMILEDINING-SA19-0011               09/03/2019      Customize                   1. E-Gift Card.
 *  SMILEDINING-SA20-0004               13/05/2020      Customize                   1. New feature Guest On Smile Dining and Delivery Address and Config Menu Hour.
 *  SMILEDINING-SA20-0005               13/06/2020      Customize                   1. Add new product. 
 *  SMILEDINING-SA20-0006               13/08/2020      Customize                   1. Setup Contactless Payment Type and Update Contactless.
 *  SMILEDINING-SA20-0014               31/07/2020      Customize                   1. Separate email settings of Order Smiledining and E- Gift Card.  
 *  SMILECONTACTLESS-SA20-0001          06/10/2020      New Project                 1. New project smile contactless integrate smile dining, web owner, web api     
 *  SMILEDINING-SA20-0029               25/10/2020      Customize                   1. Adjust performance for Login. 
 *  SMILEDINING-SA20-0038               27/11/2020      Customize                   1. Custom time menu. 
 *  SMILEDINING-SA20-0044               18/12/2020      Customize                   1. On-off Pay By Cash or Pay By Credit only delivery or pickup.* 
 *  SMILEDINING-SA20-0031               02/12/2020      Customize                   1. Adjust shop close period date and time.  
 *  SMILEDINING-SA21-0007               02/02/2021      Customize                   1. Apple Pay and Set up Unit Of Work  and Shop Close API
 *  SMILEDINING-SA21-0014               08/03/2021      Customize                   1. Add new product 'Smile Third Party Integrations' used Deliverect.  
 *  SMILEDINING-SA21-0014#1             15/03/2021      Customize                   1. Fix bug 'Smile Third Party Integrations'. 
 *  SMILEDINING-SA21-0014#6             02/04/2021      Customize                   1. Change UI and sync multi location. 
 *  SMILEDINING-SA21-0014#7             09/04/2021      Customize                   1. Modified deliverect sync product and added new feature snooze product.  
 *  SMILEDINING-SA21-0028#3             05/08/2021      Customize                   1. Edit UI Smile Dining and Contactless (Layout P2).
 *  SMILEDINING-SA21-0041               05/08/2021      Customize                   1. Fix bug use pos button show data invalid.
 *  SMILEDINING-SA21-0043               18/08/2021      Customize                   1. Config data SignalR to Kafka
 *  SMILEDINING-SA21-0048               31/08/2021      Customize                   1. Add button update taxrate from revenueclass all domain.
 *  SMILEDINING-SA21-0048#1             07/09/2021      Customize                   1. Modified close update taxRate.
 *  SMILEDINING-SA21-0054               13/09/2021      Customize                   1. Add setting Required Estimate Time
 *  SMILEDINING-SA21-0057               16/09/2021      Customize                   1. Pre order up to max 30 day and Add calculate tax before discount
 *  SMILEDINING-SA21-0063               07/10/2021      Customize                   1. Add menu Marketing on web owner and Add menu Log on web support.
 *  SMILEDINING-SA21-0065               12/10/2021      Customize                   1. Change the solution to calling API Deliverect by JWT and asynchronous.
 *  SMILEDINING-SA21-0028#9             13/10/2021      Customize                   1. Edit UI auto create image.
 *  SMILEDINING-SA21-0065#1             14/10/2021      Customize                   1. Fix bug getAllAccount Deliverect and delete protobuf.
 *  SMILEDINING-SA21-0063#1             19/10/2021      Customize                   1. Remove library ExcelJS,FileSaver and Add Filter Month,Day.
 *  SMILEDINING-SA21-0066               21/10/2021      Customize                   1. New feature web dispatch deliverect.
 *  SMILEDINING-SA21-0066#1             22/10/2021      Customize                   1. Add button 'none' for WebDispatch.
 *  SMILEDINING-SA21-0063#3             19/10/2021      Customize                   1. Fix Log menu show all domainID and Fix end date over 30 day.
 *  SMILEDINING-SA21-0070               05/11/2021      Customize                   1. Add calculate before discount on web contactless.
 *  SMILEDINING-SA21-0066#5             14/11/2021      Customize                   1. Fix bug webSupport error when open domain and save domain and domain deactivate in setup.
 *  SMILEDINING-SA21-0063#9             23/11/2021      Customize                   1. Edit file name download "LOG" to "DATA_LOG_DOMAINNAME".
 *  SMILEDINING-SA21-0080               03/11/2021      Customize                   1. Activate Credit Card Fee & Marketing Service Fee.
 *  SMILEDINING-SA21-0021#8             07/06/2021      Customize                   1. Create icon default.
 *  SMILEDINING-SA21-0080#2             09/12/2021      Customize                   1. Calculate marketingFee in SmileDining and show receipt and report in webSupport.
 *  SMILEDINING-SA21-0081               16/12/2021      Customize                   1. Add loading shimmer web support.
                                                                                    2. Fix bug value when click button duplicate.
                                                                                    3. Menu summary change call api.
 *  SMILEDINING-SA21-0081#1             21/12/2021      Customize                   1. Edit class name shimmer and Add swal when get data fail.
 *  SMILEDINING-SA21-0081#3             21/01/2022      Customize                   1. Fix bug loading menu marketing service when filter month.
 *  SMILEDINING-SA22-0008               23/02/2022      Customize                   1. Call API in WebSupport.
 *  SMILEDINING-SA22-0008#12            30/03/2022      Customize                   1. Fix monitor resend, joingiftcer, delivery charge tax, clear output cache and change password.
 *  SMILEDINING-SA22-0008#14            31/03/2022      Customize                   1. Fix shop close second period time Fix giftcer join domain and Fix redis async.
 *  SMILEDINING-SA22-0008#15            01/04/2022      Customize                   1. Fix Owner Change Password, Add api token when shop not active.
 *  SMILEDINING-SA22-0008#19            07/04/2022      Customize                   1. Add marketing key on menu setup and Fix admin account can't add owner account.
 *  SMILEDINING-SA22-0011               25/04/2022      Customize                   1. Add dispatch type and dispatch web in setup.
 *  SMILEDINING-SA22-0012#1             12/05/2022      Customize                   1. Edit Dispatch for DoorDash in webSupport and webOwner.
 *  SMILEDINING-SA21-0080#10            24/05/2022      Customize                   1. Fix bug marketting report (websupport).
 *  SMILEDINING-SA22-0017               06/06/2022      Customize                   1. Add menu AutoUpdate in webSupport.
 *  SMILEDINING-SA22-0022               15/06/2022      Customize                   1. Add menu Delivery Billing in webSupport.
 *  SMILEDINING-SA22-0022#1             16/06/2022      Customize                   1. Fix bug filter Delivery Billing in webSupport.
 *  SMILEDINING-SA22-0022#2             21/06/2022      Customize                   1. Fix bug filter and delete icon Delivery Billing in webSupport.
 *  SMILEDINING-SA22-0017#2             22/06/2022      Customize                   1. Fix bug AutoUpdate in webSupport.
 *  SMILEDINING-SA22-0017#3             22/06/2022      Customize                   1. Fix bug AutoUpdate send data to POS in webSupport.
 *  SMILEDINING-SA22-0022#3             23/06/2022      Customize                   1. Fix bug UI Delivery Billing in webSupport.
 *  SMILEDINING-SA22-0025#1             15/07/2022      Customize                   1. Change database for save marketingFee.
 *  SMILEDINING-SA22-0027#1             20/07/2022      Customize                   1. Fix bug save domain when duplicate tab in webSupport.
 *  SMILEDINING-SA22-0028               22/07/2022      Customize                   1. Fix bug monitor in webSupport.
 *  SMILEDINING-SA22-0032               18/08/2022      Customize                   1. Edit summary report in WebSupport.
                                                                                    2. Edit setting service fee in WebSupport.
                                                                                    3. Add download and print for delivery billing in WebSupport.
 *  SMILEDINING-SA22-0033               25/08/2022      Customize                   1. Add amount deposit and email customer for delivery billing in WebSupport and WebOwner.
 *  SMILEDINING-SA22-0033#1             26/08/2022      Customize                   1. Fix bug show email customer for delivery billing in WebSupport.
 *  SMILEDINING-SA22-0033#2             29/08/2022      Customize                   1. Fix bug email customer change Api to centremap profile for delivery billing in WebSupport.
 *  SMILEDINING-SA22-0039               13/09/2022      Customize                   1. Add ThridParty setting in setup.
 *  SMILEDINING-SA22-0039#2             06/10/2022      Customize                   1. Fix bug Shogo setting in setup.
 *  WEB-SA22-0051                       12/10/2022      Customize                   1. Fix bug can't save shop close.
 *  WEB-SA22-0054                       19/10/2022      Customize                   1. Fix bug webSupport can't open in firefox browser.
 *  WEB-SA22-0057                       04/11/2022      Customize                   1. Add Flat Rate, Percentage and Setting in Websupport
 *  WEB-SA22-0057#1                     09/11/2022      Customize                   1. Fixbug Flat Rate, Percentage and Setting in Websupport
 *                                                                                  2. Edit summary report in WebSupport.
 *  WEB-SA22-0070                       15/12/2022      Customize                   1. Fix bug AutoUpdate v2 in webSupport.
 *  WEB-SA22-0071                       21/12/2022      Customize                   1. Add download excel for Delivery Billing in webSupport.
 *  WEB-SA22-0057#3                     26/12/2022      Customize                   1. Fix bug cache browser when save data in setup in webSupport.
 *  WEB-SA22-0073                       26/12/2022      Customize                   1. Add filter product in summary in webSupport.
 *  WEB-SA23-0008                       26/01/2023      Customize                   1. Use MQTT send data to kiosk in webSupport.
 *  WEB-SA23-0010                       02/02/2023      Customize                   1. Fix bug text for Taxes & Fees when no tax.
 *  WEB-SA23-0012                       06/02/2023      Customize                   1. Add setting Emergepay and edit UI payment service in webSupport.
 *  WEB-SA23-0013                       09/02/2023      Customize                   1. Fix bug summary and delivery billing in webSupport.
 *  WEB-SA23-0013#1                     13/02/2023      Customize                   1. Fix bug delivery billing show invalid shop in webSupport and webOwner.
 *  WEB-SA23-0013#2                     14/02/2023      Customize                   1. Fix bug delivery billing show invalid email in webSupport.
 *  WEB-SA23-0013#3                     15/02/2023      Customize                   1. Fix bug send email delivery billing in webSupport.
 *  WEB-SA23-0013#4                     23/02/2023      Customize                   1. Add address and postal in summary and delivery billing in webSupport.
 *  WEB-SA23-0013#5                     24/02/2023      Customize                   1. Fix bug filter delivery by in delivery billing in webSupport.
 *  WEB-SA23-0020                       13/03/2023      Customize                   1. Add setting additional charge for deliverect in webSupport.
 *  WEB-SA23-0022                       15/03/2023      Customize                   1. Add apple pay for Emergepay in webDining, webGiftCard, webOntable, webSupport.
    WEB-SA23-0025                       28/03/2023      Customize                   1. Add filter product and export excel in menu Setup on webSupport. 
                                                                                    2. Change version api cpxtransaction of setup-dining to v2 on webSupport.
                                                                                    3. Edit version POS in menu Auto Update on webSupport.
    WEB-SA23-0025#1                     29/03/2023      Customize                   1. Fix bug can't search monitor for firefox on webSupport.
    WEB-SA23-0025#2                     30/03/2023      Customize                   1. Fix bug don't show button void in monitor ticket detail for firefox on webSupport.
    WEB-SA23-0035#1                     30/05/2023      Customize                   1. Move setting statement type from webSupport to webOwner.
    WEB-SA23-0013#8                     26/06/2023      Customize                   1. Add state in summary and delivery billing in webSupport.
    WEB-SA23-0043                       31/07/2023      Customize                   1. Fix bug setting shop close on webOwner, webSupport.
                                                                                    2. Add product kiosk in setup on webSupport.
    WEB-SA23-0048                       11/09/2023      Customize                   1. Add setting Otter on webOwner, webSupport.
    WEB-SA23-0049                       22/09/2023      Customize                   1. Add check diff doordash on webSupport and fix bug get address for dispatch on webDining.
    WEB-SA23-0048#3                     17/10/2023      Customize                   1. Fix bug copy food and sync product for Otter on webOwner, webSupport.
    WEB-SA23-0049#1                     26/10/2023      Customize                   1. Fix bug check diff doordash and add filter product in menu Auto Update on webSupport.
    WEB-SA23-0056                       20/12/2023      Customize                   1. Add Service Fee Report on webSupport, webDining, webOnTable.
    WEB-SA24-0002                       02/02/2024      Customize                   1. Add Order Paper Report on webSupport.
    WEB-SA23-0056#4                     23/04/2024      Customize                   1. Add address in Service Fee Report on webSupport.
    WEB-SA24-0015                       28/05/2024      Customize                   1. Fix bug webSupport can't open on Safari browser.
    WEB-SA24-0016                       05/06/2024      Customize                   1. New requirement - Add pay at store only and notification for Smile On Table on webOwner, webSupport, webOnTable.
    WEB-SA24-0024                       23/07/2024      Customize                   1. Fix bug shop address and change the Captcha and SignalR defaults on webSupport.
    WEB-SA24-0024#3                     09/08/2024      Customize                   1. Fix bug invalid shop address for doordash on webSupport.
    WEB-SA24-0024#4                     19/08/2024      Customize                   1. Fix bug invalid shop address format for doordash on webSupport.
    WEB-SA24-0024#5                     06/09/2024      Customize                   1. Fix bug in the validation of the shop address for DoorDash on webSupport.
    WEB-SA24-0028                       17/09/2024      Customize                   1. Add ReCaptcha Site Key and Secret Key on webSupport.
    WEB-SA24-0029                       17/10/2024      Customize                   1. New Requirement - Personnel on webSupport.
 */ 

/*
 * View Model
 */

//Added by SMILECONTACTLESS-SA20-0001
function LoadingViewModel() {
    var self = this;
    self.loadingVisible = ko.observable(false);
    self.closeOnOutsideClick = ko.observable(false);
    self.showIndicator = ko.observable(true);
    self.showPane = ko.observable(true);
    self.shading = ko.observable(true);
    self.position = ko.observable('');

    self.loadOptions = {
        visible: self.loadingVisible,
        showIndicator: self.showIndicator,
        showPane: self.showPane,
        shading: self.shading,
        closeOnOutsideClick: self.closeOnOutsideClick,
        shadingColor: "rgba(0,0,0,0.4)",
        position: { of: self.position() },
        onShown: function () {

        },
        onHidden: function () {

        }
    };
    self.showLoadPanel = function () {
        self.loadingVisible(true);
    };
};
//End Added by SMILECONTACTLESS-SA20-0001

function MenuViewModel() {
    var self = this;
    self.name = ko.observable('Monitor');
    self.monitor = ko.observable(true);
    self.setup = ko.observable(false);
    self.owner = ko.observable(false);
    self.commission = ko.observable(false);
    self.webreport = ko.observable(false);  //Added and End by SMILEDINING-SA18-0011
    self.summary = ko.observable(false);    //Added and End by SMILEDINING-SA18-0010
    self.egiftcard = ko.observable(false);  //Added and End by SMILEDINING-SA19-0011
    self.log = ko.observable(false); //Added and End by SMILEDINING-SA21-0063
    self.marketingService = ko.observable(false);   //Added and End by SMILEDINING-SA21-0080#2
    self.autoUpdate = ko.observable(false); //Added and End by SMILEDINING-SA22-0017
    self.deliveryBilling = ko.observable(false);   //Added and End by SMILEDINING-SA22-0022
    self.personnel = ko.observable(false); //Added and End by WEB-SA24-0029
    self.report = ko.observable(false); //Added and End by WEB-SA23-0056
};

function CustomerViewModel(data) {
    var self = this;
    if (isEmpty(data)) {
        self.customerId = ko.observable('');
        self.firstName = ko.observable('');
        self.lastName = ko.observable('');
        self.flag = ko.observable(false);
        self.email = ko.observable('');
        self.isExternalLogIn = ko.observable(false);
        self.isAccountant = ko.observable(false);       //Added and End by SMILEDINING-SA20-0029
        //Added by WEB-SA24-0029
        self.roleIds = ko.observableArray([]);
        self.permissionIds = ko.observableArray([]);
        //End Added by WEB-SA24-0029
    } else {
        ko.mapping.fromJSON(data, {}, self);
    }
};

function MonitorViewModel(currentTime) {
    var self = this;
    var newDate;
    if (isFireFox()) {
        newDate = new Date();
    } else {
        //newDate = getDateJs(moment(currentTime).format(moment_date_format_mmddyyyy)); //Modified and End by WEB-SA23-0025#1
        //newDate = getDateJs(moment(currentTime, moment_date_format_mmddyyyy).format(moment_date_format_mmddyyyy)); //Added and End by WEB-SA23-0025#1 //Modified and End by WEB-SA24-0015
        newDate = getDateJs(moment(currentTime, moment_date_format_mmddyyyy).format('L')); //Added and End by WEB-SA24-0015
    }
    self.dateBox = ko.observable({
        type: 'date',
        pickerType: 'calendar',
        //value: currentTime,
        value: newDate,
        displayFormat: 'MM-dd-yyyy',
        onValueChanged: function (options) {
            //var value = moment(options.value).format(moment_date_format_mmddyyyy); //Modified and End by WEB-SA23-0025#1
            var value = moment(options.value, moment_date_format_mmddyyyy).format(moment_date_format_mmddyyyy); //Added and End by WEB-SA23-0025#1
            self.selectDate(value);
        }
    });
    //self.selectDate = ko.observable(moment(currentTime).format(moment_date_format_mmddyyyy)); //Modified and End by WEB-SA23-0025#1
    self.selectDate = ko.observable(moment(currentTime, moment_date_format_mmddyyyy).format(moment_date_format_mmddyyyy)); //Added and End by WEB-SA23-0025#1

    //Added by SMILECONTACTLESS-SA20-0001
    self.domainId = ko.observable('');
    self.store = new DevExpress.data.ArrayStore({
        data: [],
        key: 'domainId'
    }),

    self.dxLookupDomain = ko.observable({
        dataSource: self.store,
        displayExpr: 'domainDesc',
        valueExpr: 'domainId',
        value: '',
        closeOnOutsideClick: true, //Added and End by WEB-SA23-0049
        showPopupTitle: false,
        showClearButton: true,
        onValueChanged: function (e) {
            var previousValue = e.previousValue;
            var newValue = e.value;
            self.domainId(newValue);
        }
    });
    //End Added by SMILECONTACTLESS-SA20-0001
    //Added by SMILEDINING-SA22-0028
    self.valueArrProduct = ko.observable(products.cSmileDining);
    self.arrProductFilter = ko.observableArray([
        { name: products.mapName[products.cSmileDining].name, id: products.cSmileDining },
        { name: products.mapName[products.cSmileContactless].name, id: products.cSmileContactless },
        { name: products.mapName[products.cSmileKiosk].name, id: products.cSmileKiosk },
    ]);
    self.selectProduct = ko.observable({
        dataSource: new DevExpress.data.ArrayStore({
            data: self.arrProductFilter(),
            key: 'id'
        }),
        displayExpr: 'name',
        valueExpr: 'id',
        value: self.valueArrProduct,
        placeholder: 'Select Product',
        onItemClick: function (item) {
            var productId = item.itemData.id;
            self.valueArrProduct(productId);
        }
    });
    //End Added by SMILEDINING-SA22-0028    
    self.data = ko.observableArray([]);
    self.dataModal = new DataMonitorViewModel();
    self.dataSelectRow = new DataMonitorViewModel();
    self.dataGridOptions = ko.observable({
        dataSource: self.data,
        showColumnLines: true,
        showRowLines: true,
        showBorders: true,
        hoverStateEnabled: true,
        //columnHidingEnabled: true,
        columnChooser: {
            enabled: true,
            mode: 'select'
        },
        grouping: {
            contextMenuEnabled: true,
            expandMode: 'rowClick'
        },
        //selection: {
        //    mode: 'single'
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
        groupPanel: {
            visible: true
        },
        filterRow: { visible: true },
        allowColumnReordering: true,
        columnAutoWidth: true,
        //columns: [
        //    { hidingPriority: 7, dataField: 'shopName', caption: 'Shop Name', alignment: 'center', minWidth: '140px' },
        //    { hidingPriority: 2, dataField: 'shopTicket', caption: 'ID', alignment: 'center' },
        //    { hidingPriority: 1, dataField: 'customerName', caption: 'Customer Name', alignment: 'center', cssClass: 'left' },
        //    { hidingPriority: 0, dataField: 'orderTypeName', caption: 'Order Type', alignment: 'center' },
        //    { hidingPriority: 4, dataField: 'grandTotal', caption: 'Total', alignment: 'center', cssClass: 'right', format: 'currency', precision: 2 },
        //    { hidingPriority: 3, dataField: 'ticketDateTime', caption: 'Time', alignment: 'center'},
        //    { hidingPriority: 6, dataField: 'send', caption: 'Send', alignment: 'center'},
        //    { hidingPriority: 5, dataField: 'confirm', caption: 'Confirm', alignment: 'center'}
        //],
        columns: [
            {
                //dataField: 'shopName', caption: 'Shop Name', alignment: 'center', cssClass: 'left', minWidth: '140px', //Modified and End by SMILEDINING-SA22-0028
                dataField: 'shopTicket', caption: 'ID', alignment: 'center', //Added and End by SMILEDINING-SA22-0028
                cellTemplate: function (container, options) {
                    if (options.data.ticketStatus() == 'V') {
                        //container.html("<p>" + options.data.shopName() + " <span class='badge badge-danger'> Void </span>" + "</p>"); //Modified and End by SMILEDINING-SA22-0028
                        container.html("<p>" + options.data.shopTicket() + " <span class='badge badge-danger'> Void </span>" + "</p>"); //Added and End by SMILEDINING-SA22-0028
                    } else {
                        //container.html(options.data.shopName()); //Modified and End by SMILEDINING-SA22-0028
                        container.html(options.data.shopTicket()); //Added and End by SMILEDINING-SA22-0028
                    }
                },
            },
            //Modified by SMILEDINING-SA22-0028
            //{
            //    dataField: 'shopTicket', caption: 'ID', alignment: 'center'
            //},
            //End Modified by SMILEDINING-SA22-0028
            { dataField: 'customerName', caption: 'Customer Name', alignment: 'center', cssClass: 'left' },
            { dataField: 'orderTypeName', caption: 'Order Type', alignment: 'center' },
            { dataField: 'paymentType', caption: 'Payment Type', alignment: 'center' },
            { dataField: 'grandTotal', caption: 'Total', alignment: 'center', cssClass: 'right', format: 'currency', precision: 2 },
            { dataField: 'ticketDateTime', caption: 'Time', alignment: 'center', sortOrder: 'desc', dataType: 'date', format: 'hh:mm aa', allowFiltering: false },
            //{ dataField: 'todayAsap', caption: 'ASAP', alignment: 'center' }, //Modified and End by SMILEDINING-SA22-0028
            //Added by SMILEDINING-SA22-0028
            {
                dataField: 'todayAsap', caption: 'ASAP', alignment: 'center',
                cellTemplate: function (container, options) {
                    if (options.data.todayAsap()) {
                        container.text("ASAP");
                    } else {
                        container.text("Advance");
                    }
                },
                lookup: {
                    dataSource: [{name: "ASAP", value: true},{name: "Advance", value: false},],
                    valueExpr: 'value',
                    displayExpr: 'name',
                },
            },
            //End Added by SMILEDINING-SA22-0028
            { dataField: 'send', caption: 'Send', alignment: 'center' },
            { dataField: 'confirm', caption: 'Confirm', alignment: 'center' },
            { dataField: 'ticketStatus', caption: 'Status', alignment: 'center', visible: false },
        ],

        onCellPrepared: function (options) {
            var column = options.column;
            var fieldData = options.value,
                fieldHtml = '';
            //if (column.dataField === 'send' || column.dataField === 'confirm' || column.dataField === 'todayAsap') { //Modified and End by SMILEDINING-SA22-0028
            if (column.dataField === 'send' || column.dataField === 'confirm') { //Added and End by SMILEDINING-SA22-0028
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

        //onRowPrepared: function (info) {
        //    if (info.rowType === 'data') {
        //        if (info.data.ticketStatus() == 'V') {

        //        }

        //        //if(info.data.send()){
        //        //    info.cells[0].text = "123456"
        //        //} else {
        //        //    info.cells[0].text = "123456"
        //        //}

        //        //if (info.data.confirm()) {
        //        //    info.cells[0].text = "123456"
        //        //} else {
        //        //    info.cells[0].text = "123456"
        //        //}
        //    }
        //},
        onRowClick: function (info) {
            self.messageAdjust('');
            var data = info.data;
            //ko.mapping.fromJS(data, {}, self.dataModal);      //Modified and End by SMILEDINING-SA19-0023

            //Added by SMILEDINING-SA19-0023            
            var unmap = ko.mapping.toJSON(data);
            ko.mapping.fromJSON(unmap, {}, self.dataModal);
            //End Added by SMILEDINING-SA19-0023

            //var dataUniq = _.uniqBy(self.dataModal.order(), function (e) {
            //    return e.group();
            //});

            //_.forEach(dataUniq, function (value) {
            //    var dataGroup = ko.utils.arrayFilter(self.dataModal.order(), function (item) {
            //        return (item.group() == value.group());
            //    });
            //});

            //$('#modalMonitor').modal({
            //    keyboard: false,
            //    show: true,
            //    backdrop: false,
            //})
            modalShow(cModalMonitor);
        },

        onToolbarPreparing: function (e) {
            var dataGrid = e.component;

            e.toolbarOptions.items.unshift(
                //{
                //    location: 'after',
                //    widget: 'dxButton',
                //    options: {
                //        icon: 'fa fa-usd',
                //        onClick: function (options) {
                //            if (self.dataSelectRow.domainId().length == 0) {
                //                var objAlert = new ObjAlert('', cError_Select_Row, false);
                //                objAlert.getAlert();
                //                return true;
                //            }
                //            modalShow(cModalAdjustPrice);
                //        }
                //    }
                //},
                //{
                //    location: 'after',
                //    widget: 'dxButton',
                //    options: {
                //        icon: 'fa fa-percent',
                //        onClick: function (options) {
                //            if (self.dataSelectRow.domainId().length == 0) {
                //                var objAlert = new ObjAlert('', cError_Select_Row, false);
                //                objAlert.getAlert();
                //                return true;
                //            }
                //            modalShow(cModalAdjustTip);
                //        }
                //    }
                //},
                {
                    location: 'after',
                    widget: 'dxButton',
                    options: {
                        icon: 'fa fa-users',
                        onClick: function () {
                            vmViewIndex.isPopupVisible(true);
                        }
                    }
                });
        },
        onSelectionChanged: function (selectedItems) {
            ko.mapping.fromJS(selectedItems.selectedRowsData[0], {}, self.dataSelectRow);
        }
    });

    var adjustPrice = 'Adjust Price', adjustTip = 'Adjust Tip';
    self.messageAdjust = ko.observable('');
    self.clickAdjustPrice = function () {
        self.messageAdjust(adjustPrice);
    };
    self.clickAdjustTip = function () {
        self.messageAdjust(adjustTip);
    };

    //Added by SMILEDINING-SA19-0023
    self.getTicketStatus = function () {
        if (self.dataModal.ticketId() > 0) {
            var filterTicket = ko.utils.arrayFilter(self.data(), function (ticket) {
                return (ticket.ticketId() == self.dataModal.ticketId() && ticket.domainId() == self.dataModal.domainId());
            });

            if (filterTicket.length > 0) {
                var selectTicket = _.first(filterTicket);
                //Modified by WEB-SA23-0025#2
                //var shopDate = moment(currentTime).format(moment_date_format_mmddyyyy);
                //var ticketDate = moment(selectTicket.ticketDateTime()).format(moment_date_format_mmddyyyy);
                //End Modified by WEB-SA23-0025#2
                //Added by WEB-SA23-0025#2
                var shopDate = moment(currentTime, 'L').format('L');
                var ticketDate = moment(selectTicket.ticketDateTime(), moment_date_format_yyyymmddthhmmss).format('L');
                //End Added by WEB-SA23-0025#2
                if (moment(shopDate).diff(ticketDate, 'days') > 0)
                    return selectTicket.ticketStatus();
                else
                    return cShortStatusVoid;
            }
        }
        return null;
    };

    self.clickVoidTicket = function () {
        var messageObject = { msgType: 'warning', msgTitle: 'Do you want void transaction?' };
        swalMessage(messageObject, function () {
            $('#' + cfrmMonitorVoidTicket).submit();
        });
    };
    //End Added by SMILEDINING-SA19-0023

    self.tip = ko.observable(0.00).extend({ numeric: 2 });
    self.blurTip = function (data, event) {
        var value = $(event.target).val();
        if (!$.isNumeric(value)) {
            value = 0;
        } else {
            value = rountTwo(value);
        }
        if (value < 0) {
            value = 0;
        }
        self.tip(value);
    };

    self.price = ko.observable(0.00).extend({ numeric: 2 });
    self.blurPrice = function (data, event) {
        var value = $(event.target).val();
        if (!$.isNumeric(value)) {
            value = 0;
        } else {
            value = rountTwo(value);
        }
        if (value < 0) {
            value = 0;
        }
        self.price(value);
    };
};

function ShopOnlineViewModel() {
    var self = this;
    self.data = ko.observableArray([]);
    self.dataGridOptions = ko.observable({
        dataSource: self.data,
        width: '100%',
        paging: {
            pageSize: 100
        },
        paginate: false,
        showColumnLines: true,
        showRowLines: true,
        showBorders: true,
        hoverStateEnabled: true,
        //selection: {
        //    mode: 'single'
        //},
        sorting: { mode: 'multiple' },
        filterRow: { visible: true },
        allowColumnReordering: true,
        columnAutoWidth: true,
        columns: [
            //{ dataField: 'domainName', caption: 'Name', alignment: 'center', cssClass: 'left', sortOrder: 'asc' },     //Modified and End by SMILECONTACTLESS-SA20-0001
            { dataField: 'domainDesc', caption: 'Name', width: 200, alignment: 'center', cssClass: 'left', sortOrder: 'asc' },       //Added and End by SMILECONTACTLESS-SA20-0001
            { dataField: 'online', caption: 'Status', alignment: 'center' },
            { dataField: 'domainId', caption: 'Reset', width: 100, alignment: 'center' },      //Added and End by SMILECONTACTLESS-SA20-0001
        ],
        onCellPrepared: function (options) {
            var column = options.column;
            var fieldData = options.value,
                fieldHtml = '';
            if (column.dataField === 'online') {
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
            //Added by SMILECONTACTLESS-SA20-0001
            if (column.dataField === 'domainId') {
                if (!isEmpty(fieldData)) {
                    if (fieldData.length > 0) {
                        fieldHtml = "<span><button type='button' class='btn btn-light text-primary' value='RESET'>Reset</button></span>";
                    }
                    else {
                        fieldHtml = fieldData.value;
                    }
                    options.cellElement.html(fieldHtml);
                }
            }
            //End Added by SMILECONTACTLESS-SA20-0001
        },
        //Added by SMILECONTACTLESS-SA20-0001
        onCellClick: function (e) {
            var data = e.data;
            if (e.rowType == 'data' && e.column.dataField == 'domainId') {
                var messageObject = { msgType: 'warning', msgTitle: 'Do you want reset data [' + data.domainDesc() + '] ?' };
                swalMessage(messageObject, function () {
                    //getObjFormAjax(cJsonResetDataSmileDining, data.domainId()); //Modified and End by SMILEDINING-SA22-0008#12
                    getObjFormDomainFormAjax(cJsonResetDataSmileDining, data.domainId(), data.domainName()); //Added and End by SMILEDINING-SA22-0008#12
                });
            }
        }
        //End Added by SMILECONTACTLESS-SA20-0001
    });

    self.toastMessage = ko.observable('');
    self.toastVisible = ko.observable(false);
    self.toast = ko.observable({
        message: self.toastMessage,
        minWidth: 200,
        maxWidth: 350,
        animation: {
            show: { type: 'fade', from: 0, to: 1 },
            hide: { type: 'fade', from: 1, to: 0 }
        },
        visible: self.toastVisible,
        displayTime: 15000,
        position: {
            my: 'top',
            at: 'right top',
            of: window,
            offset: '-180 20'
        },
        type: 'error'
    });
};

function SetupViewModel(currentTime) {
    var self = this;
    var dataGrid; //Added and End by WEB-SA23-0025
    self.data = ko.observableArray([]);
    self.dataModal = new DatSetupViewModel(currentTime);
    self.dataSetUpUsaEpaySearchDateModal = new DataSetupUsaEpaySearchDateViewModel(currentTime);       //Added and End by SMILEDINING-SA21-0007
    //self.dataSelectRow = new DataMonitorViewModel();
    //Added by WEB-SA23-0025
    self.valSelectStatus = ko.observable(0);
    //self.valSelectProduct = ko.observableArray([products.cSmilePos, products.cSmileDining, products.cSmileEgiftCard, products.cSmileContactless, products.cSmileThirdPartyIntegrations, products.cSmileDeliveryService]); //Modified and End by WEB-SA23-0049#1
    self.valSelectProduct = ko.observableArray([products.cSmilePos, products.cSmileDining, products.cSmileEgiftCard, products.cSmileContactless, products.cSmileThirdPartyIntegrations, products.cSmileKiosk, products.cSmileDeliveryService]); //Added and End by WEB-SA23-0049#1
    self.valCheckBoxFilterProductMode = ko.observable(true);

    self.selectStatusStore = new DevExpress.data.ArrayStore({
        key: 'id',
        data: [
            { id: 0, name: 'All' },
            { id: 1, name: 'Active' },
            { id: 2, name: 'Deactive' },
        ],
    });
    self.selectProductStore = new DevExpress.data.ArrayStore({
        key: 'id',
        data: [
            { id: products.cSmilePos, name: products.mapName[products.cSmilePos].name },
            { id: products.cSmileDining, name: products.mapName[products.cSmileDining].name },
            { id: products.cSmileEgiftCard, name: products.mapName[products.cSmileEgiftCard].name },
            { id: products.cSmileContactless, name: products.mapName[products.cSmileContactless].name },
            { id: products.cSmileThirdPartyIntegrations, name: products.mapName[products.cSmileThirdPartyIntegrations].name },
            { id: products.cSmileKiosk, name: products.mapName[products.cSmileKiosk].name }, //Added and End by WEB-SA23-0043
            { id: products.cSmileDeliveryService, name: products.mapName[products.cSmileDeliveryService].name },
        ],
    });
    //End Added by WEB-SA23-0025
    self.dataGridOptions = ko.observable({
        //Added by WEB-SA23-0025
        onInitialized: function (e) {
            dataGrid = e.component;
        },
        //End Added by WEB-SA23-0025
        dataSource: self.data,
        showColumnLines: true,
        showRowLines: true,
        showBorders: true,
        hoverStateEnabled: true,
        columnChooser: {
            enabled: true,
            mode: 'select'
        },
        grouping: {
            contextMenuEnabled: true,
            expandMode: 'rowClick'
        },
        //selection: {
        //    mode: 'single'
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
        groupPanel: {
            visible: true
        },
        filterRow: { visible: true },
        allowColumnReordering: true,
        columnAutoWidth: true,
        columns: [
            //Modified by SMILEDINING-SA20-0029
            //{ dataField: 'centreMapDomain.domainId', caption: '#', alignment: 'center', cssClass: 'left' },
            //{ dataField: 'centreMapDomain.domainDesc', caption: 'Shop Name', alignment: 'center', cssClass: 'left', sortOrder: 'asc' },
            //{ dataField: 'centreMapDomain.domainValue', caption: 'Database', alignment: 'center', cssClass: 'left' },
            //{ dataField: 'centreMapDomain.domainName', caption: 'Domain Name', alignment: 'center', cssClass: 'left' },
            //End Modified by SMILEDINING-SA20-0029
            //Added by SMILEDINING-SA20-0029
            { dataField: 'domainId', caption: '#', alignment: 'center', cssClass: 'left' },
            { dataField: 'domainDesc', caption: 'Shop Name', alignment: 'center', cssClass: 'left', sortOrder: 'asc' },
            { dataField: 'domainValue', caption: 'Database', alignment: 'center', cssClass: 'left' },
            { dataField: 'domainName', caption: 'Domain Name', alignment: 'center', cssClass: 'left' },
            //End Added by SMILEDINING-SA20-0029
            //{ dataField: 'active', caption: '', width: 80, alignment: 'center', allowFiltering: false } //Added and End by SMILEDINING-SA21-0007 //Modified and End by WEB-SA23-0025
            //Added by WEB-SA23-0025
            { dataField: 'active', caption: 'Status', width: 130, alignment: 'center', allowFiltering: false },
            { dataField: 'isThirdPartyShogo', caption: '', width: 80, alignment: 'center', allowFiltering: false }
            //End Added by WEB-SA23-0025
        ],
        //Added by SMILEDINING-SA21-0007
        onCellPrepared: function (options) {
            var column = options.column;
            var fieldData = options.value,
                fieldHtml = '';

            //if (column.dataField === 'active') { //Modified and End by WEB-SA23-0025
            if (column.dataField === 'isThirdPartyShogo') { //Added and End by WEB-SA23-0025
                if (!isEmpty(fieldData)) {
                    fieldHtml = "<span><i class='fa fa-list-alt'></i></span>";
                    options.cellElement.html(fieldHtml);
                }
            }
            //Added by WEB-SA23-0025
            else if (column.dataField === 'active') {
                if (!isEmpty(fieldData)) {
                    if (fieldData == true) {
                        fieldHtml = '<span style="color:#3AB238;">Active</span>';
                    } else if (fieldData == false) {
                        fieldHtml = '<span style="color:#FF0000;">Deactive</span>';
                    }
                    options.cellElement.html(fieldHtml);
                }
            }
            //End Added by WEB-SA23-0025
        },
        onCellClick: function (e) {
            var data = e.data;
            //if (e.rowType == 'data' && e.column.dataField == 'active') { //Modified and End by WEB-SA23-0025
            if (e.rowType == 'data' && e.column.dataField == 'isThirdPartyShogo') { //Added and End by WEB-SA23-0025
                self.dataSetUpUsaEpaySearchDateModal.data([]);
                refreshGrid(cGridSetUpUsaEpaySearchDate);
                self.dataSetUpUsaEpaySearchDateModal.domainId(data.domainId());
                modalShow(cModalSetupUsaEpaySearchDate);
                //$('.slickSetup').slick('setPosition');
            } else {
                if (!isEmpty(data)) {
                    isLoading(true);
                    setTimeout(function () { //Added and End by SMILEDINING-SA22-0027#1
                        //Added by SMILEDINING-SA21-0065
                        //self.dataModal.accountId(data.deliverectAccountId() == null ? '' : data.deliverectAccountId()); //Modified and End by SMILEDINING-SA22-0008
                        self.dataModal.accountId(data.deliverect_AccountId() == null ? '' : data.deliverect_AccountId()); //Added and End by SMILEDINING-SA22-0008
                        self.dataModal.accountName('');
                        //if (self.dataModal.accountId() != '' && self.dataAllAccount().length > 0) { //Modified and End by SMILEDINING-SA21-0065#1
                        //if (self.dataModal.accountId() != '' && self.dataAllAccount().length > 0 && isProduction(data.domainId())) { //Added and End by SMILEDINING-SA21-0065#1 //Modified and End by SMILEDINING-SA22-0027#1
                        if (self.dataModal.accountId() != '' && self.dataAllAccount().length > 0) { //Added and End by SMILEDINING-SA22-0027#1
                            var accountNameFilter = ko.utils.arrayFilter(self.dataAllAccount(), function (item) {
                                return item.accountId() == self.dataModal.accountId();
                            });
                            if (!isEmpty(accountNameFilter)) //Added and End by SMILEDINING-SA22-0027#1
                                self.dataModal.accountName(_.first(accountNameFilter).accountName());
                        }
                        //End Added by SMILEDINING-SA21-0065
                        //var dataSetup = JSON.parse(getObjFormAjax(cJsonGetDataDomainValue, data.domainValue()));                          //Modified and End by SMILEDINING-SA21-0014#6
                        //var dataSetup = JSON.parse(getObjFormAjax(cJsonGetDataDomainValue, data.domainValue() + ',' + data.domainId()));    //Added and End by SMILEDINING-SA21-0014#6 //Modified and End by SMILEDINING-SA21-0065
                        //var dataSetup = JSON.parse(getObjFormAjax(cJsonGetDataDomainValue, data.domainValue() + ',' + data.domainId() + ',' + self.dataModal.accountName())); //Added and End by SMILEDINING-SA21-0065
                        //var dataSetup = JSON.parse(getDataSetupObjFormAjax(cJsonGetDataDomainValue, data.domainValue(), data.domainId(), self.dataModal.accountName())); //Added and End by SMILEDINING-SA21-0066#5 //Modified and End by SMILEDINING-SA22-0008#15
                        //Added by SMILEDINING-SA22-0008#15
                        var jsonData = getDataSetupObjFormAjax(cJsonGetDataDomainValue, data.domainValue(), data.domainId(), self.dataModal.accountName());
                        if (jsonData != "" && jsonData != null) {
                            var dataSetup = JSON.parse(jsonData);
                        //End Added by SMILEDINING-SA22-0008#15
                            //var centreMapDomain = data; //Modified and End by SMILEDINING-SA22-0027#1
                            var centreMapDomain = ko.mapping.fromJSON(JSON.stringify(dataSetup.centreMapDomain)); //Added and End by SMILEDINING-SA22-0027#1
                            //var creditCardFee = dataSetup.creditCardFee; //Modified and End by SMILEDINING-SA22-0032
                            var deliveryCharge = dataSetup.deliveryCharge;
                            var serviceFee = dataSetup.serviceFee;
                            var marketingServiceFee = dataSetup.marketingServiceFee;    //Added and End by SMILEDINING-SA21-0080
                            var globalConfig = ko.mapping.toJS(dataSetup.globalConfig);
                            var globalConfigContactless = ko.mapping.toJS(dataSetup.globalConfigContactless);

                            self.dataModal.action(cStatusUpdate);
                            self.dataModal.domainId(centreMapDomain.domainId());
                            self.dataModal.domainName(centreMapDomain.domainName());
                            self.dataModal.domainValue(centreMapDomain.domainValue());
                            self.dataModal.domainNameTemplate(centreMapDomain.domainNameTemplate());
                            self.dataModal.active(centreMapDomain.active());
                            self.dataModal.isThirdPartyShogo(centreMapDomain.isThirdPartyShogo());      //Added and End by SMILEDINING-SA22-0039
                            self.dataModal.sourceKey(centreMapDomain.sourceKey());
                            self.dataModal.pin(centreMapDomain.pin());
                            self.dataModal.productId(centreMapDomain.productId());
                            self.dataModal.currentProductId(centreMapDomain.productId());
                            self.dataModal.apiKey(centreMapDomain.apiKey());        //Added and End by KENG
                            self.dataModal.marketingKey(centreMapDomain.marketingKey());  //Added and End by SMILEDINING-SA22-0008#19
                            //Added by WEB-SA22-0057
                            self.dataModal.apiKey_percentage(centreMapDomain.apiKey_Percentage());
                            self.dataModal.pin_percentage(centreMapDomain.pin_Percentage());
                            self.dataModal.sourceKey_percentage(centreMapDomain.sourceKey_Percentage());
                            //Added by WEB-SA23-0012
                            self.dataModal.paymentServiceProvider(centreMapDomain.paymentServiceProvider() == 0 ? paymentServiceProviders.cUsaepay : centreMapDomain.paymentServiceProvider());
                            self.dataModal.emergepayOID(centreMapDomain.emergepay_OID());
                            self.dataModal.emergepayToken(centreMapDomain.emergepay_Token());
                            self.dataModal.emergepayOID_Percentage(centreMapDomain.emergepay_OID_Percentage());
                            self.dataModal.emergepayToken_Percentage(centreMapDomain.emergepay_Token_Percentage());
                            //End Added by WEB-SA23-0012
                            //Added by WEB-SA23-0022
                            self.dataModal.emergepayApiKey(centreMapDomain.emergepay_ApiKey());
                            self.dataModal.emergepayApiKey_Percentage(centreMapDomain.emergepay_ApiKey_Percentage());
                            //End Added by WEB-SA23-0022
                            self.dataModal.otterStoreId(centreMapDomain.otter_StoreId()); //Added and End by WEB-SA23-0048
                            //Modified by WEB-SA22-0057#3
                            //self.dataModal.feePos(centreMapDomain.feePos());
                            //self.dataModal.feeDining(centreMapDomain.feeDining());
                            //self.dataModal.feeOnTable(centreMapDomain.feeOnTable());
                            //self.dataModal.feeEGiftCard(centreMapDomain.feeEGiftCard());
                            //End Modified by WEB-SA22-0057#3
                            //Added by WEB-SA22-0057#3
                            self.dataModal.feePos(centreMapDomain.feePos() == 0 ? 1 : centreMapDomain.feePos());
                            self.dataModal.feeDining(centreMapDomain.feeDining() == 0 ? 1 : centreMapDomain.feeDining());
                            self.dataModal.feeOnTable(centreMapDomain.feeOnTable() == 0 ? 1 : centreMapDomain.feeOnTable());
                            self.dataModal.feeEGiftCard(centreMapDomain.feeEGiftCard() == 0 ? 1 : centreMapDomain.feeEGiftCard());
                            self.dataModal.messagingProtocol(centreMapDomain.messagingProtocol()); //Added and End by WEB-SA24-0024
                            //End Added by WEB-SA22-0057#3
                            //Modified WEB-SA22-0057#1
                            //self.dataModal.feePos(centreMapDomain.feePos());
                            //self.dataModal.feeDining(centreMapDomain.feeDining());
                            //self.dataModal.feeOnTable(centreMapDomain.feeOnTable());
                            //self.dataModal.feeEGiftCard(centreMapDomain.feeEGiftCard());
                            //End Modified by WEB-SA22-0057#1
                            //End Added by WEB-SA22-0057
                                                       
                            self.dataModal.isMarketingKey(dataSetup.isMarketingKey); //Added and End by WEB22-SA0057#1
                                                                                    
                            const arrSelectProduct = centreMapDomain.productId().split(',');
                            //const arrProduct = ['1', '2', '3', '4'];      //Modified and End by SMILEDINING-SA21-0014
                            //const arrProduct = ['1', '2', '3', '4', '5'];    //Added and End by SMILEDINING-SA21-0014 //Modified and End by WEB-SA23-0043
                            const arrProduct = ['1', '2', '3', '4', '5', '6'];    //Added and End by WEB-SA23-0043

                            self.dataModal.arrProduct.removeAll();
                            self.dataModal.selectCheckBoxProduct.removeAll();

                            if (arrProduct.length > 0) {
                                _.forEach(arrProduct, function (value) {
                                    self.dataModal.arrProduct.push(value);
                                });
                            }

                            if (arrSelectProduct.length > 0) {
                                _.forEach(arrSelectProduct, function (value) {
                                    self.dataModal.selectCheckBoxProduct.push(value);
                                });
                            }

                            if (self.dataModal.selectCheckBoxProduct().includes(products.cSmileContactless)) {
                                self.dataModal.showPaymentContactless(true);
                                self.dataModal.showSmileContactless(true);
                            }
                            else {
                                self.dataModal.showPaymentContactless(false);
                                self.dataModal.showSmileContactless(false);
                            }

                            if (self.dataModal.selectCheckBoxProduct().includes(products.cSmileDining)) {
                                self.dataModal.showSmileDining(true);
                            }
                            else {
                                self.dataModal.showSmileDining(false);
                            }

                            //Added by SMILEDINING-SA21-0014
                            //if (self.dataModal.selectCheckBoxProduct().includes(products.cSmileThirdPartyIntegrations)) { //Modified and End by SMILEDINING-SA21-0066#5
                            if (self.dataModal.selectCheckBoxProduct().includes(products.cSmileThirdPartyIntegrations) && self.dataModal.active()) { //Added and End by SMILEDINING-SA21-0066#5
                                self.dataModal.showThirdPartyIntegrations(true);
                                //$('.slickSetup .slick-dots li:nth-of-type(4)').removeClass('d-none');   //Added and End by SMILEDINING-SA21-0014#1 // Modified and End by SMILEDINING-SA22-0039#2
                                //$('.slickSetup .slick-dots li:nth-of-type(5)').removeClass('d-none');   //Added and End by SMILEDINING-SA22-0039#2 // Modified and End by WEB-SA22-0057
                                $('.slickSetup .slick-dots li:nth-of-type(6)').removeClass('d-none');   //Added and End WEB-SA22-0057
                            }
                            else {
                                self.dataModal.showThirdPartyIntegrations(false);
                                //$('.slickSetup .slick-dots li:nth-of-type(4)').addClass('d-none'); //Modified and End by SMILEDINING-SA22-0039#2
                                //$('.slickSetup .slick-dots li:nth-of-type(5)').addClass('d-none');  //Added and End by SMILEDINING-SA22-0039#2  // Modified and End by WEB-SA22-0057
                                $('.slickSetup .slick-dots li:nth-of-type(6)').addClass('d-none'); //Added and End WEB-SA22-0057
                            }
                            //self.dataModal.accountId(centreMapDomain.deliverectAccountId() == null ? '' : centreMapDomain.deliverectAccountId()); //Modified and End by SMILEDINING-SA21-0065
                            //self.dataModal.locationId(centreMapDomain.deliverectLocationId() == null ? '' : centreMapDomain.deliverectLocationId());      //Modified and End by SMILEDINING-SA21-0014#6
                            //End Added by SMILEDINING-SA21-0014
                            //Added by SMILEDINING-SA21-0014#7          
                            self.dataModal.listLocation([]);
                            ko.utils.arrayForEach(dataSetup.listLocation, function (item) {
                                self.dataModal.listLocation.push({
                                    locationId: ko.observable(item.locationId),
                                    locationName: ko.observable(item.locationName),
                                });
                            });
                            //var locationId = centreMapDomain.deliverectLocationId() == null ? '' : centreMapDomain.deliverectLocationId(); //Modified and End by SMILEDINING-SA22-0008
                            var locationId = centreMapDomain.deliverect_LocationId() == null ? '' : centreMapDomain.deliverect_LocationId(); //Added and End by SMILEDINING-SA22-0008
                            self.dataModal.locationSelect(locationId == '' ? '0' : locationId);
                            var location = ko.utils.arrayFilter(dataSetup.listLocation, function (item) {
                                return item.locationId == locationId;
                            });
                            //self.dataModal.locationId(ko.toJSON(_.first(location))); //Modified and End by SMILEDINING-SA21-0066#5
                            //Added by SMILEDINING-SA21-0066#5
                            //Modified by SMILEDINING-SA22-0008#15
                            //if (location.length > 0) {
                            //    self.dataModal.locationId(ko.toJSON(_.first(location)));
                            //}
                            //End Modified by SMILEDINING-SA22-0008#15
                            //Added by SMILEDINING-SA22-0008#15
                            if (location.length > 0) {
                                self.dataModal.locationId(ko.toJSON(_.first(location)));
                            } else {
                                self.dataModal.locationId("");
                            }
                            //End Added by SMILEDINING-SA22-0008#15
                            //End Added by SMILEDINING-SA21-0066#5
                            //Added by SMILEDINING-SA21-0065#1
                            //Modified by SMILEDINING-SA22-0027#1
                            //if (!isProduction(data.domainId())) {
                            //    self.dataModal.accountName(dataSetup.accountName);
                            //}
                            //End Modifid by SMILEDINING-SA22-0027#1
                            self.dataModal.accountName(dataSetup.accountName); //Added and End by SMILEDINING-SA22-0027#1
                            //End Added by SMILEDINING-SA21-0065#1
                            //Added by SMILEDINING-SA21-0066
                            self.dataModal.dispatchStore([]);
                            var dispatchIdStore = []; //Added and End by SMILEDINING-SA21-0066#5
                            ko.utils.arrayForEach(dataSetup.listDispatch, function (item) {
                                self.dataModal.dispatchStore.push({
                                    dispatchId: ko.observable(item.dispatchId),
                                    dispatchName: ko.observable(item.dispatchName),
                                });
                                dispatchIdStore.push(item.dispatchId); //Added and End by SMILEDINING-SA21-0066#5
                            });
                            //Added by SMILEDINING-SA21-0066#5
                            self.dataModal.currentDispatchIdStore('');
                            self.dataModal.currentDispatchIdStore(ko.toJSON(dispatchIdStore));
                            //End Added by SMILEDINING-SA21-0066#5

                            self.dataModal.initLocationId('');
                            self.dataModal.initLocationId(locationId);

                            self.dataModal.initListDispatch([]);
                            self.dataModal.listDispatch([]);
                            const arrSelectDispatch = centreMapDomain.thirdPartyId() == null ? '' : centreMapDomain.thirdPartyId().split(',');
                            if (arrSelectDispatch.length > 0) {
                                _.forEach(arrSelectDispatch, function (value) {
                                    ko.utils.arrayForEach(dataSetup.listDispatch, function (item) {
                                        if (item.thirdPartyId == value) {
                                            self.dataModal.initListDispatch.push(item.dispatchId);
                                        }
                                    });
                                });
                                self.dataModal.listDispatch(self.dataModal.initListDispatch());
                            }
                            //End Added by SMILEDINING-SA21-0066
                            //Modified by SMILEDINING-SA21-0065
                            //self.dataModal.accountName('');
                            //if (self.dataModal.accountId() != '') {
                            //    var accountNameFilter = ko.utils.arrayFilter(dataSetup.listAccount, function (item) {
                            //        return item.accountId == self.dataModal.accountId();
                            //    });
                            //    self.dataModal.accountName(_.first(accountNameFilter).accountName);
                            //}
                            //End Modified by SMILEDINING-SA21-0065

                            //End Added by SMILEDINING-SA21-0014#7

                            //Modified by SMILEDINING-SA21-0014#7
                            //Added by SMILEDINING-SA21-0014#6
                            //self.dataModal.listLocation([]);
                            //if (dataSetup.listLocation.length > 1) {
                            //    self.dataModal.listLocation.push({
                            //        locationId: ko.observable('0'),
                            //        locationName: ko.observable('All'),
                            //    });
                            //}

                            //ko.utils.arrayForEach(dataSetup.listLocation, function (item) {
                            //    self.dataModal.listLocation.push({
                            //        locationId: ko.observable(item.locationId),
                            //        locationName: ko.observable(item.locationName),
                            //    });
                            //});

                            //var locationId = centreMapDomain.deliverectLocationId() == null ? '' : centreMapDomain.deliverectLocationId();
                            //var listLocation = locationId.split(',');
                            //self.dataModal.locationSelect(listLocation.length == 1 ? (listLocation[0] == '' ? '0' : listLocation[0]) : '0');
                            //self.dataModal.locationId('');
                            //self.dataModal.locationId(ko.toJSON(dataSetup.listLocation));                                 
                            //End Added by SMILEDINING-SA21-0014#6
                            //End Modified by SMILEDINING-SA21-0014#7

                            //Added by KENG
                            self.dataModal.captchaEnable(convertStrToBool(filterGlobalConfig(globalConfig, 'captcha-enable')));
                            //Added by WEB-SA24-0028
                            self.dataModal.reCaptchaSiteKey(centreMapDomain.reCaptchaSiteKey() ?? '');
                            self.dataModal.reCaptchaSecretKey(centreMapDomain.reCaptchaSecretKey() ?? '');
                            //End Added by WEB-SA24-0028
                            self.dataModal.captchaKeepAlive(convertStrToBool(filterGlobalConfig(globalConfig, 'captcha-keep-alive')));
                            //End Added by KENG

                            var useTemplate = filterGlobalConfig(globalConfig, gcShopUseTemplate);
                            if (useTemplate == '0') {
                                self.dataModal.useTemplate(false);
                            } else {
                                self.dataModal.useTemplate(true);
                            }
                            self.dataModal.domainNameTemplateUrl(filterGlobalConfig(globalConfig, gcShopUseTemplateUrl));

                            //Added by SMILEDINING-SA21-0041
                            var usePos = filterGlobalConfig(globalConfig, gcShopUsePos);
                            if (usePos == '0') {
                                self.dataModal.usePos(false);
                            } else {
                                self.dataModal.usePos(true);
                            }
                            //End Added by SMILEDINING-SA21-0041
                            //Added by SMILEDINING-SA21-0043
                            var signalR = filterGlobalConfig(globalConfig, 'shop-signalr');
                            if (signalR == '0') {
                                self.dataModal.signalR(false);
                            } else {
                                self.dataModal.signalR(true);
                            }
                            //End Added by SMILEDINING-SA21-0043
                            //Added by SMILEDINING-SA21-0054
                            var estimateTime = filterGlobalConfig(globalConfig, 'required-estimate-time');
                            if (estimateTime == '1') {
                                self.dataModal.estimateTime(true);
                            } else {
                                self.dataModal.estimateTime(false);
                            }
                            //End Added by SMILEDINING-SA21-0054

                            //Added by SMILEDINING-SA21-0057
                            var calTax = filterGlobalConfig(globalConfig, gcCalTax);
                            if (calTax == '1') {
                                self.dataModal.isCalTax(true);
                            } else {
                                self.dataModal.isCalTax(false);
                            }
                            //End Added by SMILEDINING-SA21-0057
                            //Added by SMILEDINING-SA21-0070
                            var calTaxContactless = filterGlobalConfig(globalConfigContactless, gcCalTax);
                            if (calTaxContactless == '1') {
                                self.dataModal.isCalTaxContactless(true);
                            } else {
                                self.dataModal.isCalTaxContactless(false);
                            }
                            //End Added by SMILEDINING-SA21-0070
                            self.dataModal.shopName(filterGlobalConfig(globalConfig, gcShopName));
                            self.dataModal.shopAddress(filterGlobalConfig(globalConfig, gcShopStreet));
                            self.dataModal.shopCity(filterGlobalConfig(globalConfig, gcShopCity));
                            self.dataModal.shopState(filterGlobalConfig(globalConfig, gcShopState));
                            self.dataModal.shopPostal(filterGlobalConfig(globalConfig, gcShopPostal));
                            self.dataModal.shopPhone(filterGlobalConfig(globalConfig, gcShopPhone));
                            self.dataModal.shopFax(filterGlobalConfig(globalConfig, gcShopFax));
                            self.dataModal.shopEmail(filterGlobalConfig(globalConfig, gcShopEmail));
                            self.dataModal.shopEmailGiftCard(filterGlobalConfig(globalConfig, gcShopEmailGiftCard));
                            self.dataModal.lat(filterGlobalConfig(globalConfig, gcShopMapLat));
                            self.dataModal.lng(filterGlobalConfig(globalConfig, gcShopMapLng));
                            var timeZoneCode = filterGlobalConfig(globalConfig, gcShopTimeZoneCode);
                            self.dataModal.dxLookuptimeZoneCode({
                                value: timeZoneCode
                            })
                            self.dataModal.timeZoneCode(timeZoneCode);
                            self.dataModal.timePickupStart(filterGlobalConfig(globalConfig, gcTimePickupStart));
                            self.dataModal.timePickupEnd(filterGlobalConfig(globalConfig, gcTimePickupEnd));
                            self.dataModal.timeDeliveryStart(filterGlobalConfig(globalConfig, gcTimeDeliveryStart));
                            self.dataModal.timeDeliveryEnd(filterGlobalConfig(globalConfig, gcTimeDeliveryEnd));
                            self.dataModal.shippingType(filterGlobalConfig(globalConfig, gcShippingType));
                            self.dataModal.menuHourTimeStart(filterGlobalConfig(globalConfig, gcTimeMenuInit));
                            var customDay = filterGlobalConfig(globalConfig, gcTimeMenuCustomDay);
                            var customHour = filterGlobalConfig(globalConfig, gcTimeMenuCustomHours);

                            self.dataModal.isCustomTimeMenu(self.dataModal.menuHourTimeStart() == 'CUSTOM' ? true : false);
                            if (customDay == '' || customHour == '') {
                                self.dataModal.isShowCustomTimeMenu(false);
                            } else {
                                self.dataModal.isShowCustomTimeMenu(true);
                                self.dataModal.customDay(customDay);
                                self.dataModal.customHours(customHour);
                            }
                            //self.dataModal.creditCardFee(creditCardFee); //Modified and End by SMILEDINING-SA22-0032
                            self.dataModal.deliveryChargeTax(deliveryCharge);
                            self.dataModal.serviceFee(serviceFee);
                            //Added by SMILEDINING-SA21-0080
                            //self.dataModal.marketingServiceFee(marketingServiceFee); //Modified and End by SMILEDINING-SA22-0032

                            /* serviceFeePercent = creditCardFee = marketingServiceFee */                            
                            self.dataModal.serviceFeePercent(marketingServiceFee); //Added and End by SMILEDINING-SA22-0032
                            //Modified by WEB-SA22-0057#1
                            //if (filterGlobalConfig(globalConfig, 'fee-credit-and-marketing') == '1') {
                            //    self.dataModal.feeCreditAndMarketing(true);
                            //} else {
                            //    self.dataModal.feeCreditAndMarketing(false);
                            //}
                            //End Added by SMILEDINING-SA21-0080
                            //End Modified by WEB-SA22-0057#1
                            self.dataModal.minimumOrder(parseFloat(filterGlobalConfig(globalConfig, gcCalminumumOrder)));
                            var minimumPickup = filterGlobalConfig(globalConfig, gcCalminimumOrderForPickup);
                            self.dataModal.minimumOrderForPickup(minimumPickup != "" ? parseFloat(minimumPickup) : 0);
                            if (minimumPickup == "") {
                                self.dataModal.showminimumOrderForPickup(false);
                            }
                            else {
                                self.dataModal.showminimumOrderForPickup(true);
                            }
                            if (filterGlobalConfig(globalConfig, gcShopDeliveryTax) == '1') {
                                self.dataModal.calDeliveryTax(true);
                            } else {
                                self.dataModal.calDeliveryTax(false);
                            }
                            self.dataModal.commissionRule(filterGlobalConfig(globalConfig, gcRuleCommission));
                            if (filterGlobalConfig(globalConfig, gcShopStatus) == 'OPEN') {
                                self.dataModal.status(true);
                            } else {
                                self.dataModal.status(false);
                            }

                            self.dataModal.closeReson(filterGlobalConfig(globalConfig, gcShopCloseReason));

                            var closeStartDate = filterGlobalConfig(globalConfig, gcShopCloseStartDate);
                            if (closeStartDate.trim().length > 0) {
                                //closeStartDate = moment(closeStartDate).format(moment_date_format_mmddyyyy); //Modified and End by WEB-SA24-0015
                                closeStartDate = moment(closeStartDate).format('L'); //Added and End by WEB-SA24-0015
                            }
                            self.dataModal.closeStartDate(closeStartDate);
                            self.dataModal.dateBoxCloseStartDate({
                                value: closeStartDate
                            });

                            var closeEndDate = filterGlobalConfig(globalConfig, gcShopCloseEndDate);
                            if (closeEndDate.trim().length > 0) {
                                //closeEndDate = moment(closeEndDate).format(moment_date_format_mmddyyyy); //Modified and End by WEB-SA24-0015
                                closeEndDate = moment(closeEndDate).format('L'); //Added and End by WEB-SA24-0015
                            }
                            self.dataModal.closeEndDate(closeEndDate);
                            self.dataModal.dateBoxCloseEndDate({
                                value: closeEndDate
                            });

                            //Data Contactless
                            if (filterGlobalConfig(globalConfigContactless, gcShopStatus) == 'OPEN') {
                                self.dataModal.statusContactless(true);
                            } else {
                                self.dataModal.statusContactless(false);
                            }

                            self.dataModal.closeResonContactless(filterGlobalConfig(globalConfigContactless, gcShopCloseReason));

                            //Added by WEB-SA22-0051
                            var closeStartDateContactless = '';
                            var closeEndDateContactless = '';
                            if (self.dataModal.selectCheckBoxProduct().includes(products.cSmileContactless)) {
                                closeStartDateContactless = filterGlobalConfig(globalConfigContactless, gcShopCloseStartDate);
                                closeEndDateContactless = filterGlobalConfig(globalConfigContactless, gcShopCloseEndDate);
                            }
                            //End Added by WEB-SA22-0051

                            //var closeStartDateContactless = filterGlobalConfig(globalConfigContactless, gcShopCloseStartDate);//Modified and End by WEB-SA22-0051
                            if (closeStartDateContactless.trim().length > 0) {
                                //closeStartDateContactless = moment(closeStartDateContactless).format(moment_date_format_mmddyyyy); //Modified and End by WEB-SA24-0015
                                closeStartDateContactless = moment(closeStartDateContactless).format('L'); //Added and End by WEB-SA24-0015
                            }
                            self.dataModal.closeStartDateContactless(closeStartDateContactless);
                            self.dataModal.dateBoxCloseStartDateContactless({
                                value: closeStartDateContactless
                            });

                            // var closeEndDateContactless = filterGlobalConfig(globalConfigContactless, gcShopCloseEndDate); //Modified and End by WEB-SA22-0051
                            if (closeEndDateContactless.trim().length > 0) {
                                //closeEndDateContactless = moment(closeEndDateContactless).format(moment_date_format_mmddyyyy); //Modified and End by WEB-SA24-0015
                                closeEndDateContactless = moment(closeEndDateContactless).format('L'); //Added and End by WEB-SA24-0015
                            }
                            self.dataModal.closeEndDateContactless(closeEndDateContactless);
                            self.dataModal.dateBoxCloseEndDateContactless({
                                value: closeEndDateContactless
                            });

                            if (filterGlobalConfig(globalConfig, 'pay-by-cash-pickup') == '1') {
                                self.dataModal.pickupPayCash(true);
                            } else {
                                self.dataModal.pickupPayCash(false);
                            }
                            if (filterGlobalConfig(globalConfig, 'pay-by-credit-pickup') == '1') {
                                self.dataModal.pickupPayCredit(true);
                            } else {
                                self.dataModal.pickupPayCredit(false);
                            }

                            if (filterGlobalConfig(globalConfig, 'pay-by-cash-delivery') == '1') {
                                self.dataModal.deliveryPayCash(true);
                            } else {
                                self.dataModal.deliveryPayCash(false);
                            }
                            if (filterGlobalConfig(globalConfig, 'pay-by-credit-delivery') == '1') {
                                self.dataModal.deliveryPayCredit(true);
                            } else {
                                self.dataModal.deliveryPayCredit(false);
                            }

                            //Added by SMILEDINING-SA21-0014
                            if (filterGlobalConfig(globalConfig, 'deliverect-autosync-product') == '1') {
                                self.dataModal.autoSyncProduct(true);
                            } else {
                                self.dataModal.autoSyncProduct(false);
                            }
                            //End Added by SMILEDINING-SA21-0014
                            //Added by SMILEDINING-SA22-0011
                            if (filterGlobalConfig(globalConfig, 'dispatch-web') == '1') { 
                                self.dataModal.webDispatch(true);
                            } else if (filterGlobalConfig(globalConfig, 'dispatch-web') == '0') { //Added and End by SMILEDINING-SA21-0066#1
                                self.dataModal.webDispatch(false);
                            } else {
                                self.dataModal.webDispatch(null);
                            }
                            //End Added by SMILEDINING-SA22-0011
                            //Modified by SMILEDINING-SA22-0011
                            //Added by SMILEDINING-SA21-0066
                            //if (filterGlobalConfig(globalConfig, 'deliverect-web-dispatch') == '1') {
                            //    self.dataModal.webDispatch(true);
                            //    //} else { //Modified and End by SMILEDINING-SA21-0066#1
                            //} else if (filterGlobalConfig(globalConfig, 'deliverect-web-dispatch') == '0') { //Added and End by SMILEDINING-SA21-0066#1
                            //    self.dataModal.webDispatch(false);
                            //    //Added by SMILEDINING-SA21-0066#1
                            //} else {
                            //    self.dataModal.webDispatch(null);
                            //    //End Added by SMILEDINING-SA21-0066#1
                            //}
                            //End Added by SMILEDINING-SA21-0066
                            //End Modified by SMILEDINING-SA22-0011
                            //Added by SMILEDINING-SA22-0011
                            var dispatchType = filterGlobalConfig(globalConfig, 'dispatch-type');
                            //Added by SMILEDINING-SA22-0022
                            if (isEmpty(dispatchType)) {
                                self.dataModal.dispatchType(cDispatchType_None);
                            } else {
                                self.dataModal.dispatchType(dispatchType);
                            }
                            //End Added by SMILEDINING-SA22-0022
                            //Modified by SMILEDINING-SA22-0022
                            //if (dispatchType == '1' || dispatchType == '') {
                            //    self.dataModal.dispatchType('1');
                            //} else if (dispatchType == '2') {
                            //    self.dataModal.dispatchType('2');
                            //}
                            //End Modified by SMILEDINING-SA22-0022
                            //End Added by SMILEDINING-SA22-0011
                            var cPaymentType = filterGlobalConfig(globalConfigContactless, 'contactless-payment-type');
                            if (cPaymentType == '') {
                                self.dataModal.contactlessPaymentType(contactlessPaymentType.cFastService);
                            } else {
                                self.dataModal.contactlessPaymentType(cPaymentType);
                            }

                            //Added by WEB-SA24-0016
                            var paymentMethod = filterGlobalConfig(globalConfigContactless, 'contactless-payment-method');
                            if (paymentMethod == '') {
                                self.dataModal.contactlessPaymentMethod(contactlessPaymentMethod.cDefault);
                            } else {
                                self.dataModal.contactlessPaymentMethod(paymentMethod);
                            }
                            //End Added by WEB-SA24-0016
                            //self.dataModal.statementType(filterGlobalConfig(globalConfig, gcCalStatement)); //Modified and End by WEB-SA23-0035#1
                            self.dataModal.mapCode(filterGlobalConfig(globalConfig, gcShopMapCode));
                            //Added by SMILEDINING-SA22-0012#1
                            self.dataModal.tipAuto(filterGlobalConfig(globalConfig, 'tip-auto'));
                            self.dataModal.tipGuide(filterGlobalConfig(globalConfig, 'tip-guide'));
                            var dispatchServiceCharge = filterGlobalConfig(globalConfig, 'dispatch-service-charge');
                            self.dataModal.dispatchServiceCharge(!isEmpty(dispatchServiceCharge) ? parseFloat(dispatchServiceCharge) : 0)
                            //End Added by SMILEDINING-SA22-0012#1           
                            //Added by WEB-SA23-0010
                            self.dataModal.showSplitTaxesAndFeesProductIds([]);
                            var showSplitTaxesAndFees = convertStrToBool(filterGlobalConfig(globalConfig, 'show-split-taxes-and-fees'));
                            var showSplitTaxesAndFeesContactless = convertStrToBool(filterGlobalConfig(globalConfigContactless, 'show-split-taxes-and-fees'));
                            if (showSplitTaxesAndFees)
                                self.dataModal.showSplitTaxesAndFeesProductIds.push(products.cSmileDining);
                            if (showSplitTaxesAndFeesContactless)
                                self.dataModal.showSplitTaxesAndFeesProductIds.push(products.cSmileContactless);
                            //End Added by WEB-SA23-0010
                            self.dataModal.otterEventId(filterGlobalConfig(globalConfig, 'otter-event-id')); //Added and End by WEB-SA23-0048#3
                            //Added by WEB-SA23-0020
                            ko.mapping.fromJS(dataSetup.additionalChargeType, {}, self.dataModal.additionalChargeTypeList);
                            ko.mapping.fromJS(dataSetup.additionalCharge, {}, self.dataModal.tempAdditionalChargeList);
                            self.dataModal.additionalChargeList([]);
                            ko.utils.arrayForEach(self.dataModal.tempAdditionalChargeList(), function (item) {
                                self.dataModal.additionalChargeList.push(new DataAdditionalChargeViewModel(item));
                            });
                            self.dataModal.isAdditionalCharge(self.dataModal.additionalChargeList().length > 0);
                            //End Added by WEB-SA23-0020
                            connectMqtt(null, getClientIdMqtt(self.dataModal.domainId())); //Added and End by WEB-SA23-0008
                            modalShow(cModalSetup);
                            $('.slickSetup').slick('setPosition');
                            setMaskPhone();
                            setShopAddressPlaceId(); //Added and End by WEB-SA24-0024#5
                            isLoading(false);
                        //Added by SMILEDINING-SA22-0008#15
                        }
                        else {
                            swal(cSwal_Alert_Error, cError_GetDataDomainValue_Fail, cSwal_Icon_Error);
                            isLoading(false);
                        }
                    }, 0); //Added and End by SMILEDINING-SA22-0027#1
                    //End Added by SMILEDINING-SA22-0008#15

                }
            }
        },
        //End Added by SMILEDINING-SA21-0007
        //Modified by SMILEDINING-SA21-0007
        //onRowClick: function (info) {
        //    var data = info.data;

        //    //Modified by SMILEDINING-SA20-0029
        //    //var centreMapDomain = data.centreMapDomain;
        //    //var creditCardFee = data.creditCardFee();
        //    //var deliveryCharge = data.deliveryCharge();
        //    //var serviceFee = data.serviceFee();
        //    //var globalConfig = ko.mapping.toJS(data.globalConfig);
        //    //var globalConfigContactless = ko.mapping.toJS(data.globalConfigContactless);
        //    //End Modified by SMILEDINING-SA20-0029

        //	isLoading(true);    //Added and End by SMILECONTACTLESS-SA20-0001
        //    //Added by SMILEDINING-SA20-0029
        //    var dataSetup = JSON.parse(getObjFormAjax(cJsonGetDataDomainValue, data.domainValue()));
        //    var centreMapDomain = data;
        //    var creditCardFee = dataSetup.creditCardFee;
        //    var deliveryCharge = dataSetup.deliveryCharge;
        //    var serviceFee = dataSetup.serviceFee;
        //    var globalConfig = ko.mapping.toJS(dataSetup.globalConfig);
        //    var globalConfigContactless = ko.mapping.toJS(dataSetup.globalConfigContactless);
        //    //End Added by SMILEDINING-SA20-0029

        //    self.dataModal.action(cStatusUpdate);
        //    self.dataModal.domainId(centreMapDomain.domainId());
        //    self.dataModal.domainName(centreMapDomain.domainName());
        //    self.dataModal.domainValue(centreMapDomain.domainValue());
        //    self.dataModal.domainNameTemplate(centreMapDomain.domainNameTemplate());
        //    self.dataModal.active(centreMapDomain.active());
        //    self.dataModal.sourceKey(centreMapDomain.sourceKey());
        //    self.dataModal.pin(centreMapDomain.pin());
        //    //Added by SMILEDINING-SA19-0011
        //    self.dataModal.productId(centreMapDomain.productId());
        //    self.dataModal.currentProductId(centreMapDomain.productId());//Added and End by SMILEDINING-SA20-0005 
        //    const arrSelectProduct = centreMapDomain.productId().split(',');
        //    //const arrProduct = ['1','2','3'];     //Modified and End by SMILEDINING-SA20-0005
        //    const arrProduct = ['1', '2', '3', '4']; //Added and End by SMILEDINING-SA20-0005

        //    self.dataModal.arrProduct.removeAll();
        //    self.dataModal.selectCheckBoxProduct.removeAll();

        //    if (arrProduct.length > 0) {
        //        _.forEach(arrProduct, function (value) {
        //            self.dataModal.arrProduct.push(value);
        //        });
        //    }

        //    if (arrSelectProduct.length > 0) {
        //        _.forEach(arrSelectProduct, function (value) {
        //            self.dataModal.selectCheckBoxProduct.push(value);
        //        });
        //    }

        //    //Added by SMILEDINING-SA20-0006
        //    if (self.dataModal.selectCheckBoxProduct().includes(products.cSmileContactless)) {
        //        self.dataModal.showPaymentContactless(true);
        //        self.dataModal.showSmileContactless(true);      //Added and End by SMILEDINING-SA20-0031
        //    }
        //    else {
        //        self.dataModal.showPaymentContactless(false);
        //        self.dataModal.showSmileContactless(false);     //Added and End by SMILEDINING-SA20-0031
        //    }
        //    //End Added by SMILEDINING-SA20-0006

        //    //Added by SMILEDINING-SA20-0031
        //    if (self.dataModal.selectCheckBoxProduct().includes(products.cSmileDining)) {
        //        self.dataModal.showSmileDining(true);
        //    }
        //    else {
        //        self.dataModal.showSmileDining(false);
        //    }
        //    //End Added by SMILEDINING-SA20-0031

        //    //End Added by SMILEDINING-SA19-0011

        //    var useTemplate = filterGlobalConfig(globalConfig, gcShopUseTemplate);
        //    if (useTemplate == '0') {
        //        self.dataModal.useTemplate(false);
        //    } else {
        //        self.dataModal.useTemplate(true);
        //    }
        //    self.dataModal.domainNameTemplateUrl(filterGlobalConfig(globalConfig, gcShopUseTemplateUrl));

        //    self.dataModal.shopName(filterGlobalConfig(globalConfig, gcShopName));
        //    self.dataModal.shopAddress(filterGlobalConfig(globalConfig, gcShopStreet));
        //    self.dataModal.shopCity(filterGlobalConfig(globalConfig, gcShopCity));
        //    self.dataModal.shopState(filterGlobalConfig(globalConfig, gcShopState));
        //    self.dataModal.shopPostal(filterGlobalConfig(globalConfig, gcShopPostal));
        //    self.dataModal.shopPhone(filterGlobalConfig(globalConfig, gcShopPhone));
        //    self.dataModal.shopFax(filterGlobalConfig(globalConfig, gcShopFax));
        //    self.dataModal.shopEmail(filterGlobalConfig(globalConfig, gcShopEmail));
        //    self.dataModal.shopEmailGiftCard(filterGlobalConfig(globalConfig, gcShopEmailGiftCard)); //Added and End by SMILEDINING-SA20-0014
        //    self.dataModal.lat(filterGlobalConfig(globalConfig, gcShopMapLat));
        //    self.dataModal.lng(filterGlobalConfig(globalConfig, gcShopMapLng));
        //    var timeZoneCode = filterGlobalConfig(globalConfig, gcShopTimeZoneCode);
        //    self.dataModal.dxLookuptimeZoneCode({
        //        value: timeZoneCode
        //    })
        //    self.dataModal.timeZoneCode(timeZoneCode);
        //    self.dataModal.timePickupStart(filterGlobalConfig(globalConfig, gcTimePickupStart));
        //    self.dataModal.timePickupEnd(filterGlobalConfig(globalConfig, gcTimePickupEnd));
        //    self.dataModal.timeDeliveryStart(filterGlobalConfig(globalConfig, gcTimeDeliveryStart));
        //    self.dataModal.timeDeliveryEnd(filterGlobalConfig(globalConfig, gcTimeDeliveryEnd));
        //    self.dataModal.shippingType(filterGlobalConfig(globalConfig, gcShippingType));
        //    self.dataModal.menuHourTimeStart(filterGlobalConfig(globalConfig, gcTimeMenuInit));       //Added and End by SMILEDINING-SA20-0004
        //    //Added by SMILEDINING-SA20-0038
        //    var customDay = filterGlobalConfig(globalConfig, gcTimeMenuCustomDay);
        //    var customHour = filterGlobalConfig(globalConfig, gcTimeMenuCustomHours);

        //    self.dataModal.isCustomTimeMenu(self.dataModal.menuHourTimeStart() == 'CUSTOM' ? true : false);
        //    if (customDay == '' || customHour == '') {
        //        self.dataModal.isShowCustomTimeMenu(false);
        //    } else {
        //        self.dataModal.isShowCustomTimeMenu(true);
        //        self.dataModal.customDay(customDay);
        //        self.dataModal.customHours(customHour);
        //    }
        //    //End Added by SMILEDINING-SA20-0038
        //    self.dataModal.creditCardFee(creditCardFee);
        //    self.dataModal.deliveryChargeTax(deliveryCharge);
        //    self.dataModal.serviceFee(serviceFee);
        //    //self.dataModal.minimumOrder(filterGlobalConfig(globalConfig, gcCalminumumOrder));         //Modified By SMILEDINING-SA19-0003 
        //    // Added by SMILEDINING-SA19-0003            
        //    self.dataModal.minimumOrder(parseFloat(filterGlobalConfig(globalConfig, gcCalminumumOrder)));
        //    var minimumPickup = filterGlobalConfig(globalConfig, gcCalminimumOrderForPickup);
        //    self.dataModal.minimumOrderForPickup(minimumPickup != "" ? parseFloat(minimumPickup) : 0);
        //    if (minimumPickup == "") {
        //        self.dataModal.showminimumOrderForPickup(false);
        //    }
        //    else {
        //        self.dataModal.showminimumOrderForPickup(true);
        //    }                
        //    // End Added by SMILEDINING-SA19-0003
        //    if (filterGlobalConfig(globalConfig, gcShopDeliveryTax) == '1') {
        //        self.dataModal.calDeliveryTax(true);
        //    } else {
        //        self.dataModal.calDeliveryTax(false);
        //    }
        //    self.dataModal.commissionRule(filterGlobalConfig(globalConfig, gcRuleCommission));
        //    if (filterGlobalConfig(globalConfig, gcShopStatus) == 'OPEN') {
        //        self.dataModal.status(true);
        //    } else {
        //        self.dataModal.status(false);
        //    }

        //    self.dataModal.closeReson(filterGlobalConfig(globalConfig, gcShopCloseReason));

        //    var closeStartDate = filterGlobalConfig(globalConfig, gcShopCloseStartDate);
        //    if (closeStartDate.trim().length > 0) {
        //        closeStartDate = moment(closeStartDate).format(moment_date_format_mmddyyyy);
        //    }
        //    self.dataModal.closeStartDate(closeStartDate);
        //    self.dataModal.dateBoxCloseStartDate({
        //        value: closeStartDate
        //    });

        //    var closeEndDate = filterGlobalConfig(globalConfig, gcShopCloseEndDate);
        //    if (closeEndDate.trim().length > 0) {
        //        closeEndDate = moment(closeEndDate).format(moment_date_format_mmddyyyy);
        //    }
        //    self.dataModal.closeEndDate(closeEndDate);
        //    self.dataModal.dateBoxCloseEndDate({
        //        value: closeEndDate
        //    });

        //    //Added by SMILEDINING-SA20-0031
        //    //Data Contactless
        //    if (filterGlobalConfig(globalConfigContactless, gcShopStatus) == 'OPEN') {
        //        self.dataModal.statusContactless(true);
        //    } else {
        //        self.dataModal.statusContactless(false);
        //    }

        //    self.dataModal.closeResonContactless(filterGlobalConfig(globalConfigContactless, gcShopCloseReason));

        //    var closeStartDateContactless = filterGlobalConfig(globalConfigContactless, gcShopCloseStartDate);
        //    if (closeStartDateContactless.trim().length > 0) {
        //        closeStartDateContactless = moment(closeStartDateContactless).format(moment_date_format_mmddyyyy);
        //    }
        //    self.dataModal.closeStartDateContactless(closeStartDateContactless);
        //    self.dataModal.dateBoxCloseStartDateContactless({
        //        value: closeStartDateContactless
        //    });

        //    var closeEndDateContactless = filterGlobalConfig(globalConfigContactless, gcShopCloseEndDate);
        //    if (closeEndDateContactless.trim().length > 0) {
        //        closeEndDateContactless = moment(closeEndDateContactless).format(moment_date_format_mmddyyyy);
        //    }
        //    self.dataModal.closeEndDateContactless(closeEndDateContactless);
        //    self.dataModal.dateBoxCloseEndDateContactless({
        //        value: closeEndDateContactless
        //    });
        //    //End Added by SMILEDINING-SA20-0031

        //    //Modified by SMILEDINING-SA20-0044
        //    //if (filterGlobalConfig(globalConfig, gcPayByCash) == '1') {
        //    //    self.dataModal.payCash(true);
        //    //} else {
        //    //    self.dataModal.payCash(false);
        //    //}

        //    //if (filterGlobalConfig(globalConfig, gcPayByCredit) == '1') {
        //    //    self.dataModal.payCredit(true);
        //    //} else {
        //    //    self.dataModal.payCredit(false);
        //    //}
        //    //End Modified by SMILEDINING-SA20-0044
        //    //Added by SMILEDINING-SA20-0044
        //    if (filterGlobalConfig(globalConfig, 'pay-by-cash-pickup') == '1') {
        //        self.dataModal.pickupPayCash(true);
        //    } else {
        //        self.dataModal.pickupPayCash(false);
        //    }
        //    if (filterGlobalConfig(globalConfig, 'pay-by-credit-pickup') == '1') {
        //        self.dataModal.pickupPayCredit(true);
        //    } else {
        //        self.dataModal.pickupPayCredit(false);
        //    }

        //    if (filterGlobalConfig(globalConfig, 'pay-by-cash-delivery') == '1') {
        //        self.dataModal.deliveryPayCash(true);
        //    } else {
        //        self.dataModal.deliveryPayCash(false);
        //    }
        //    if (filterGlobalConfig(globalConfig, 'pay-by-credit-delivery') == '1') {
        //        self.dataModal.deliveryPayCredit(true);
        //    } else {
        //        self.dataModal.deliveryPayCredit(false);
        //    }
        //    //End Added by SMILEDINING-SA20-0044

        //    //Added by SMILEDINING-SA20-0006
        //    var cPaymentType = filterGlobalConfig(globalConfigContactless, 'contactless-payment-type');
        //    if (cPaymentType == '') {
        //        self.dataModal.contactlessPaymentType(contactlessPaymentType.cFastService);
        //    } else {
        //        self.dataModal.contactlessPaymentType(cPaymentType);
        //    }
        //    //End Added by SMILEDINING-SA20-0006

        //    self.dataModal.statementType(filterGlobalConfig(globalConfig, gcCalStatement));
        //    self.dataModal.mapCode(filterGlobalConfig(globalConfig, gcShopMapCode));
        //    modalShow(cModalSetup);
        //    //$('.slickSetup').slick('refresh');
        //    $('.slickSetup').slick('setPosition');
        //    setMaskPhone();
        //	isLoading(false);       //Added and End by SMILECONTACTLESS-SA20-0001
        //},
        //End Modified by SMILEDINING-SA21-0007
        onToolbarPreparing: function (e) {
            e.toolbarOptions.items.unshift(
                //Added by WEB-SA23-0025
                {
                    location: 'after',
                    widget: 'dxSelectBox',
                    options: {
                        dataSource: self.selectStatusStore,
                        displayExpr: 'name',
                        valueExpr: 'id',
                        value: self.valSelectStatus,
                        width: 120,
                        onValueChanged: function (e) {
                            self.filterDataGridSetUp();
                        },
                    }
                },
                {
                    location: 'after',
                    widget: 'dxTagBox',
                    options: {
                        dataSource: self.selectProductStore,
                        displayExpr: 'name',
                        valueExpr: 'id',
                        value: self.valSelectProduct,
                        showDropDownButton: true,
                        searchEnabled: false,
                        showSelectionControls: true,
                        maxDisplayedTags: 1,
                        multiline: false,
                        width: 250,
                        onValueChanged: function (e) {
                            self.filterDataGridSetUp();
                        },
                        onMultiTagPreparing(args) {
                            if (args.selectedItems.length < self.selectProductStore._array.length) {
                              args.cancel = false;
                            } else {
                              args.text = 'All Products';
                            }
                        },
                    }
                },
                {
                    location: 'after',
                    widget: 'dxCheckBox',
                    options: {
                        value: self.valCheckBoxFilterProductMode,
                        elementAttr: {  
                            class : "ml-2"  
                        },  
                        onValueChanged(data) {
                          self.filterDataGridSetUp();
                        },
                    }
                },
                {
                    location: 'after',
                    locateInMenu: 'never',
                    template() {
                      return $("<div class='toolbar-setup-productMode mr-3'>Contains</div>");
                    },
                },
                //End Added by WEB-SA23-0025
                {
                    location: 'after',
                    widget: 'dxButton',
                    options: {
                        icon: 'fa fa-plus',
                        onClick: function () {
                            //ko.mapping.fromJS(new DatSetupViewModel(), {} , self.dataModal)
                            resetSetupViewModel();
                            modalShow(cModalSetup);
                            $('.slickSetup').slick('setPosition');
                            //$('.slickSetup').slick('refresh');
                        }
                    }
                    //});   //Modified and End by SMILEDINING-SA21-0028#9
                    //Added by SMILEDINING-SA21-0028#9
                },
                {
                    location: 'after',
                    widget: 'dxButton',
                    options: {
                        icon: 'fa fa-cogs',
                        onClick: function () {
                            modalShow(cModalSettingAllDomain);
                        }
                    }
                },
                //Added by WEB-SA23-0025
                {
                    location: 'after',
                    widget: 'dxButton',
                    options: {
                        icon: 'fa fa-file-excel-o',
                        onClick: function () {
                            isLoading(true);
                            var exportDomainIds = [];
                            const filterExpr = dataGrid.getCombinedFilter(true);
                            const dataSource = dataGrid.getDataSource();
                            dataSource
                                .store()
                                .load({ filter: filterExpr })
                                .then(function(result){
                                    _.forEach(result, function (item){
                                        exportDomainIds.push(item.domainId());
                                    });
                                });
                            self.clickExportExcel(exportDomainIds);
                        }
                    }
                }
                //End Added by WEB-SA23-0025
            );
            //End Added by SMILEDINING-SA21-0028#9
        }
    });

    //Added by WEB-SA23-0025
    self.filterDataGridSetUp = function () {
        dataGrid.clearFilter('dataSource');
        var isPos = self.valSelectProduct().includes(products.cSmilePos);
        var isDining = self.valSelectProduct().includes(products.cSmileDining);
        var isEgiftCard = self.valSelectProduct().includes(products.cSmileEgiftCard);
        var isOnTable = self.valSelectProduct().includes(products.cSmileContactless);
        var isThirdPartyIntegrations = self.valSelectProduct().includes(products.cSmileThirdPartyIntegrations);
        var isKisok = self.valSelectProduct().includes(products.cSmileKiosk); //Added and End by WEB-SA23-0043
        var isDeliveryService = self.valSelectProduct().includes(products.cSmileDeliveryService);
        var filterPos = [];
        var filterDining = [];
        var filterEgiftCard = [];
        var filterOnTable = [];
        var filterThirdPartyIntegrations = [];
        var filterKiosk = []; //Added and End by WEB-SA23-0043
        var filterDeliveryService = [];
        var filterMode = self.valCheckBoxFilterProductMode() ? 'contains' : 'notcontains';
        if (isPos) {
            filterPos = ['productId', filterMode, products.cSmilePos];
        }
        if (isDining) {
            filterDining = ['productId', filterMode, products.cSmileDining];
        }
        if (isEgiftCard) {
            filterEgiftCard = ['productId', filterMode, products.cSmileEgiftCard];
        }
        if (isOnTable) {
            filterOnTable = ['productId', filterMode, products.cSmileContactless];
        }
        if (isThirdPartyIntegrations) {
            filterThirdPartyIntegrations = ['productId', filterMode, products.cSmileThirdPartyIntegrations];
        }
        //Added by WEB-SA23-0043
        if (isKisok) {
            filterKiosk = ['productId', filterMode, products.cSmileKiosk];
        }
        //End Added by WEB-SA23-0043
        if (isDeliveryService) {
            filterDeliveryService = self.valCheckBoxFilterProductMode() ? ['!', ['dispatchTypeId', '=', parseInt(cDispatchType_None)]] : ['dispatchTypeId', '=', parseInt(cDispatchType_None)];
        }

        var filterActive = [['active', '=', true], 'or', ['active', '=', false]];
        if (self.valSelectStatus() == 1) {
            filterActive = ['active', '=', true];
        } else if (self.valSelectStatus() == 2) {
            filterActive = ['active', '=', false];
        }

        //dataGrid.filter([filterPos, 'or', filterDining, 'or', filterEgiftCard, 'or', filterOnTable, 'or', filterThirdPartyIntegrations, 'or', filterDeliveryService], 'and', filterActive); //Modified and End by WEB-SA23-0043
        dataGrid.filter([filterPos, 'or', filterDining, 'or', filterEgiftCard, 'or', filterOnTable, 'or', filterThirdPartyIntegrations, 'or', filterKiosk, 'or', filterDeliveryService], 'and', filterActive); //Added and End by WEB-SA23-0043
        dataGrid.refresh();
    };

    self.resetFilterDataGridSetUp = function () {
        self.valSelectStatus(0);
        //self.valSelectProduct([products.cSmilePos, products.cSmileDining, products.cSmileEgiftCard, products.cSmileContactless, products.cSmileThirdPartyIntegrations, products.cSmileDeliveryService]); //Modified and End by WEB-SA23-0043
        self.valSelectProduct([products.cSmilePos, products.cSmileDining, products.cSmileEgiftCard, products.cSmileContactless, products.cSmileThirdPartyIntegrations, products.cSmileKiosk, products.cSmileDeliveryService]); //Added and End by WEB-SA23-0043
        self.valCheckBoxFilterProductMode(true);
    };

    self.clickExportExcel = function (domainIds) {
        var objUrl = new ObjUrl(cfrmSetUpExportExcel);
        var requestUrl = objUrl.getUrlSubmitForm();
        var passData = {
            domainIds: domainIds,
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
            isLoading(false);
            if (result.status) {
                window.location = '/SetUp/Download?fileGuid=' + result.fileGuid + '&filename=' + result.fileName;
            } else {
                if (!isEmpty(result.message)) {
                    var objAlert = new ObjAlert(cfrmSetUpExportExcel, result.message, result.status);
                    objAlert.getAlert();
                }
            }
        })
        .fail(function (result) {
            isLoading(false);
            swal(cSwal_Alert_Error, cError_Fail_TimeOut, cSwal_Icon_Error);
        });
    };
    //End Added by WEB-SA23-0025

    self.searchAddress = function () {
        //$(cfrmSetUpDomain_ShopAddress).trigger("geocode"); //Modified and End by WEB-SA24-0024#3
        //Added by WEB-SA24-0024#3
        var address = $(cfrmSetUpDomain_ShopAddress).val();
        //getPlacePredictions(address, function (prediction) { //Modified and End by WEB-SA24-0024#4
        //Added by WEB-SA24-0024#4
        getPlacePredictions(address, function (predictions) {
            var prediction = _.head(predictions);
        //End Added by WEB-SA24-0024#4
            if (isEmpty(prediction)) {
                return false;
            }
            //Modified by WEB-SA24-0024#4
            //$(cfrmSetUpDomain_ShopAddress).val(prediction.description);
            //getGeoData(prediction.description, cGeoByAddress, function (result) {
            //End Modified by WEB-SA24-0024#4
            getGeoData(prediction.place_id, '', function (result) { //Added and End by WEB-SA24-0024#4
                if (isEmpty(result)) {
                    return false;
                }
                var geo_fullAddress = !isEmpty(result.formatted_address) ? result.formatted_address : ''; //Added and End by WEB-SA24-0024#4
                var geo_postal_code = !isEmpty(result.postal_code) ? result.postal_code : '';
                var geo_lat = !isEmpty(result.lat) ? result.lat : '';
                var geo_lng = !isEmpty(result.lng) ? result.lng : '';
                var geo_state = !isEmpty(result.administrative_area_level_1_short) ? result.administrative_area_level_1_short : !isEmpty(result.administrative_area_level_2_short) ? result.administrative_area_level_2_short : '';
                var geo_city = !isEmpty(result.locality) ? result.locality : !isEmpty(result.sublocality) ? result.sublocality : !isEmpty(result.sublocality_level_1) ? result.sublocality_level_1 : '';
                var geo_subcity = !isEmpty(result.sublocality) ? result.sublocality : '';
                var geo_administrativearealevel3 = !isEmpty(result.administrative_area_level_3) ? result.administrative_area_level_3 : '';
                
                $(cfrmSetUpDomain_ShopAddress).val(geo_fullAddress); //Added and End by WEB-SA24-0024#4
                $(cfrmSetUpDomain_ShopAddress_PlaceId).val(prediction.place_id); //Added and End by WEB-SA24-0024#5
                $(cfrmSetUpDomain_ShopPostal).val(geo_postal_code);
                $(cfrmSetUpDomain_Latitude).val(geo_lat);
                $(cfrmSetUpDomain_Longitude).val(geo_lng);
                $(cfrmSetUpDomain_ShopState).val(geo_state);
                $(cfrmSetUpDomain_ShopCity).val(geo_city);
                $(cfrmSetUpDomain_ShopSubCity).val(geo_subcity);
                $(cfrmSetUpDomain_ShopAdministrativeAreaLevel3).val(geo_administrativearealevel3);
            });
        });
        //End Added by WEB-SA24-0024#3
    };

    self.dataAllAccount = ko.observableArray([]); //Added and End by SMILEDINING-SA21-0065
    //Added by SMILEDINING-SA21-0066#5
    self.showLoading = ko.observable(false);
    function getDataSetupObjFormAjax(jsonObj, domainValue, domainId, accountName) {
        var objUrl = new ObjUrl(jsonObj);
        var requestUrl = objUrl.getUrlFromJson();
        var passData;
        if (!isEmpty(domainValue) && !isEmpty(domainId)) {
            passData = JSON.parse('{"domainValue" : "' + domainValue + '", "domainId" : "' + domainId + '", "accountName" : "' + accountName + '"}');
        }
        return getJsonFromAjax(requestUrl, !ajax_async, ajax_cache, ajax_type_post, passData, ajax_timeout);
    };
    //End Added by SMILEDINING-SA21-0066#5
};

function OwnerViewModel() {
    var self = this;
    var dataGrid;   //Added and End by SMILEDINING-SA18-0010
    self.data = ko.observableArray([]);
    self.dataModal = new DataOwnerViewModel();
    self.dataGridOptions = ko.observable({
        //Added by SMILEDINING-SA18-0010
        onInitialized: function (e) {
            dataGrid = e.component;
        },
        //End Added by SMILEDINING-SA18-0010
        dataSource: self.data,
        showColumnLines: true,
        showRowLines: true,
        showBorders: true,
        hoverStateEnabled: true,
        columnChooser: {
            enabled: true,
            mode: 'select'
        },
        grouping: {
            contextMenuEnabled: true,
            expandMode: 'rowClick'
        },
        //selection: {
        //    mode: 'single'
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
        groupPanel: {
            visible: true
        },
        filterRow: { visible: true },
        allowColumnReordering: true,
        columnAutoWidth: true,
        columns: [
            {
                //Modified by SMILEDINING-SA18-0010
                //caption: '#',
                //cellTemplate: function (cellElement, cellInfo) {
                //    cellElement.text(cellInfo.row.rowIndex + 1)
                //},
                //alignment: 'center', width: '80px'
                //End Modified by SMILEDINING-SA18-0010
                //Added by SMILEDINING-SA18-0010
                caption: '#', width: 80, alignment: 'center',
                cellTemplate: function (container, options) {
                    container.text(dataGrid.pageIndex() * dataGrid.pageSize() + options.rowIndex + 1);
                }
                //End Added by SMILEDINING-SA18-0010
            },
            { dataField: 'ownerId', caption: 'ID', alignment: 'center', width: '120px' },
            { dataField: 'domainId', caption: 'Shop ID', alignment: 'center', width: '120px' },
            { dataField: 'domainDesc', caption: 'Shop Name', alignment: 'center', cssClass: 'left', sortOrder: 'asc' },
            { dataField: 'email', caption: 'Email', alignment: 'center', cssClass: 'left' },
            { dataField: 'firstName', caption: 'First Name', alignment: 'center', cssClass: 'left' },
            { dataField: 'lastName', caption: 'Last Name', alignment: 'center', cssClass: 'left' },
        ],
        onRowClick: function (info) {
            var data = info.data;
            self.dataModal.action(cStatusUpdate);
            self.dataModal.customerId(data.customerId());
            self.dataModal.ownerId(data.ownerId());
            self.dataModal.ownerPhone(data.ownerPhone());
            self.dataModal.email(data.email());
            self.dataModal.firstName(data.firstName());
            self.dataModal.lastName(data.lastName());
            self.dataModal.domainId(data.domainId());
            self.dataModal.password('');
            self.dataModal.confirmPassword('');
            self.dataModal.showPassword(false);
            self.dataModal.domainDesc(data.domainDesc()); //Added and End by SMILEDINING-SA22-0008
            self.dataModal.dxLookupDomain({
                value: data.domainId()
            });
            modalShow(cModalOwner);
        },
        onToolbarPreparing: function (e) {
            e.toolbarOptions.items.unshift(
                {
                    location: 'after',
                    widget: 'dxButton',
                    options: {
                        icon: 'fa fa-plus',
                        onClick: function () {
                            resetOwnerViewModel();
                            modalShow(cModalOwner);
                        }
                    }
                });
        }
    });
};

function SettingViewModel() {
    var self = this;
    self.dataModalChangePassword = new DataChangePasswordViewModel();
    self.dataModalCreateAccount = new DataCreateAccountViewModel();
};

//Added by SMILEDINING-SA21-0028#3
//function ResizeImageViewModel() { //Modified and End by SMILEDINING-SA21-0048
function SettingAllDomainViewModel() {   //Added and End by SMILEDINING-SA21-0048
    var self = this;
    self.clickResizeImage = function () {
        ResizeImage(false);
    };
    //Added by SMILEDINING-SA21-0021#8
    self.clickCreateIconImage = function () {
        createIconImage();
    };
    //End Added by SMILEDINING-SA21-0021#8
    //Modified by SMILEDINING-SA21-0048#1
    ////Added by SMILEDINING-SA21-0048
    //self.domainSelect = ko.observable();
    //self.allDomainInvalidTaxRate = ko.observableArray([]);
    //self.clickSettingAllDomainModal = function () {
    //    var allDomainInvalidTaxRate = JSON.parse(getObjFormAjax(cJsonGetAllDomainInvalidTaxRate));
    //    ko.mapping.fromJS(allDomainInvalidTaxRate, {}, self.allDomainInvalidTaxRate);        
    //    if (self.allDomainInvalidTaxRate().length > 0) {
    //        self.domainSelect(_.first(self.allDomainInvalidTaxRate()).domainID());
    //        $('#btnUpdateTaxRate').removeClass('disabled');
    //    } else {
    //        $('#btnUpdateTaxRate').addClass('disabled');
    //        self.domainSelect('');
    //    }
    //};
    //self.selectDomain = ko.observable({
    //    dataSource: self.allDomainInvalidTaxRate,
    //    displayExpr: 'domainName',
    //    value: self.domainSelect,
    //    valueExpr: 'domainID',  
    //    dropDownButtonTemplate: 'dropDownButton',
    //    onItemClick: function (item) {
    //        if (item.itemData != null) {
    //            self.domainSelect(item.itemData.domainID());
    //        }
    //    }
    //});
    //self.clickUpdateTaxRate = function () {
    //    if (self.domainSelect() != '') {

    //        $('#btnUpdateTaxRate').addClass('disabled');
    //        $('#btnUpdateTaxRate' + ' .fa').addClass('fa-circle-o-notch fa-spin');

    //        var objUrl = new ObjUrl(cfrmUpdateTaxRate);
    //        var requestUrl = objUrl.getUrlSubmitForm();
    //        var passData = {
    //            'domainId': self.domainSelect()
    //        };

    //        $.ajax({
    //            url: requestUrl,
    //            async: ajax_async,
    //            cache: ajax_cache,
    //            type: ajax_type_post,
    //            data: passData,
    //            timeout: ajax_timeout,
    //        })
    //        .done(function (result) {
    //            self.allDomainInvalidTaxRate([]);
    //            var allDomainInvalidTaxRate = JSON.parse(getObjFormAjax(cJsonGetAllDomainInvalidTaxRate));
    //            ko.mapping.fromJS(allDomainInvalidTaxRate, {}, self.allDomainInvalidTaxRate);
    //            if (self.allDomainInvalidTaxRate().length > 0) {
    //                self.domainSelect(_.first(self.allDomainInvalidTaxRate()).domainID());  
    //                $('#btnUpdateTaxRate').removeClass('disabled');
    //            } else {
    //                self.domainSelect('');
    //            }


    //            $('#btnUpdateTaxRate' + ' .fa').removeClass('fa-circle-o-notch fa-spin');

    //            var objAlert = new ObjAlert(cfrmUpdateTaxRate, result.message, result.status);
    //            objAlert.getAlert();
    //        })
    //        .fail(function (result) {
    //            swal(cSwal_Alert_Error, cError_Fail_TimeOut, cSwal_Icon_Error);
    //        });
    //    }
    //};
    ////End Added by SMILEDINING-SA21-0048
    //End Modified by SMILEDINING-SA21-0048#1
};
//End Added by SMILEDINING-SA21-0028#3
//Added by SMILEDINING-SA18-0011
function WebReportViewModel() {
    var self = this;
    const chevrondown = 'chevrondown';
    const chevronnext = 'chevronnext';
    const collapseAll = 'Collapse All';
    const expandAll = 'Expand All';

    self.dataCustomer = ko.observableArray([]);
    self.dataUser = ko.observableArray([]);
    self.dataRole = ko.observableArray([]);
    self.dataMenu = ko.observableArray([]);
    self.dataGroupMenu = ko.observableArray([]);
    self.dataRoleMenuMap = ko.observableArray([]);
    self.dataUserRoleMap = ko.observableArray([]);

    self.dataUserModal = new DataUserViewModel();
    self.dataUserRoleMapModal = new DataUserRoleMapModel();
    self.dataRoleMenuModal = new DataRoleMenuMapModel();

    self.dataGridRoleMenuMapExpanded = ko.observable(true);

    self.dataGridRoleMenuMapExpandButtonIcon = ko.observable(chevrondown),
        self.dataGridRoleMenuMapExpandButtonHint = ko.observable(collapseAll);

    self.dataGridRoleMenuMapExpanded.subscribe(function (newValue) {
        self.dataGridRoleMenuMapExpandButtonIcon(newValue ? chevrondown : chevronnext);
        self.dataGridRoleMenuMapExpandButtonHint(newValue ? collapseAll : expandAll);
    });


    self.rdoRoleSelectInRoleMenuMap = ko.observable(null);

    self.dataGridRoleMenuMap = ko.observable({
        dataSource: self.dataRoleMenuMap,
        showColumnLines: true,
        showRowLines: true,
        showBorders: true,
        hoverStateEnabled: true,
        columnChooser: {
            enabled: true,
            mode: 'select'
        },
        grouping: {
            autoExpandAll: self.dataGridRoleMenuMapExpanded,
            expandMode: 'rowClick'
        },
        //selection: {
        //    mode: 'single'
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
            { dataField: 'shopName', caption: 'Shop Name', alignment: 'center', width: '120px', groupIndex: 0, sortOrder: 'asc' },
            { dataField: 'roleName', caption: 'Role', alignment: 'center', width: '120px' },
            { dataField: 'menuName', caption: 'Menu', alignment: 'center' },
        ],
        onRowClick: function (info) {
            var data = info.data;

            self.dataRoleMenuModal.action(cStatusUpdate);
            self.dataRoleMenuModal.roleMenuMapId(data.roleMenuMapId());
            self.dataRoleMenuModal.customerId(data.customerId());
            self.dataRoleMenuModal.roleMenuMap([]);

            self.rdoRoleSelectInRoleMenuMap(data.roleId());

            self.dataRoleMenuModal.dxLookupCustomer({
                value: data.customerId()
            });

            var filterCustomer = ko.utils.arrayFilter(self.dataRoleMenuMap(), function (item) {
                return item.customerId() == data.customerId();
            });

            ko.utils.arrayForEach(self.dataRole(), function (itemRole) {
                var filterRole = ko.utils.arrayFilter(filterCustomer, function (item) {
                    return itemRole.roleId() == item.roleId();
                });

                var menu = [];
                ko.utils.arrayForEach(filterRole, function (item) {
                    menu.push({ 'id': item.menuId(), 'name': item.menuName() });
                });

                self.dataRoleMenuModal.roleMenuMap.push(new ChildrenDataRoleMenuMapModel(itemRole.roleId(), itemRole.roleName(), menu));
            })
            modalShow(cModalWrRoleMenuMap);
        },
        onToolbarPreparing: function (e) {
            var dataGrid = e.component;
            e.toolbarOptions.items.unshift(
                {
                    location: 'before',
                    widget: 'dxSelectBox',
                    options: {
                        width: 200,
                        items: [{
                            value: 'shopName',
                            text: "Grouping by Shop Name"
                        }, {
                            value: 'roleName',
                            text: "Grouping by Role"
                        }],
                        displayExpr: 'text',
                        valueExpr: 'value',
                        value: 'shopName',
                        onValueChanged: function (e) {
                            dataGrid.clearGrouping();
                            dataGrid.columnOption(e.value, 'groupIndex', 0);
                        }
                    }
                },
                {
                    location: 'before',
                    widget: 'dxButton',
                    options: {
                        hint: self.dataGridRoleMenuMapExpandButtonHint,
                        icon: self.dataGridRoleMenuMapExpandButtonIcon,
                        onClick: function (e) {
                            self.dataGridRoleMenuMapExpanded(!self.dataGridRoleMenuMapExpanded());
                        }
                    }
                },
                {
                    location: 'after',
                    widget: 'dxButton',
                    options: {
                        icon: 'fa fa-plus',
                        onClick: function () {
                            resetWrRoleMenuViewModel();
                            modalShow(cModalWrRoleMenuMap);
                        }
                    }
                });
        }

    });

    self.dataGridUser = ko.observable({
        onInitialized: function (e) {
            dataGrid = e.component;
        },
        dataSource: self.dataUser,
        showColumnLines: true,
        showRowLines: true,
        showBorders: true,
        hoverStateEnabled: true,
        columnChooser: {
            enabled: true,
            mode: 'select'
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
            { dataField: 'email', caption: 'Email', alignment: 'center', width: '150px' },
            { dataField: 'firstName', caption: 'First Name', alignment: 'center', cssClass: 'left', sortOrder: 'asc' },
            { dataField: 'lastName', caption: 'Last Name', alignment: 'center', cssClass: 'left' },
            //{ dataField: 'phone', caption: 'Phone', alignment: 'center' },
            { dataField: 'active', caption: '', alignment: 'center', width: '80px' },
        ],
        onRowClick: function (info) {
            var data = info.data;
            self.dataUserModal.action(cStatusUpdate);
            self.dataUserModal.userId(data.userId());
            self.dataUserModal.firstName(data.firstName());
            self.dataUserModal.lastName(data.lastName());
            self.dataUserModal.email(data.email());
            self.dataUserModal.phone(data.phone());
            self.dataUserModal.active(data.active());
            modalShow(cModalWrUser);
            setMaskPhone();
        },
        onToolbarPreparing: function (e) {
            e.toolbarOptions.items.unshift(
                {
                    location: 'after',
                    widget: 'dxButton',
                    options: {
                        icon: 'fa fa-plus',
                        onClick: function () {
                            resetWrUserViewModel();
                            modalShow(cModalWrUser);
                        }
                    }
                });
        },
        onCellPrepared: function (options) {
            var column = options.column;
            var fieldData = options.value,
                fieldHtml = '';
            if (column.dataField === 'active') {
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

    self.dataGridUserRoleMapExpanded = ko.observable(true);

    self.dataGridUserRoleMapExpandButtonIcon = ko.observable(chevrondown),
        self.dataGridUserRoleMapExpandButtonHint = ko.observable(collapseAll);

    self.dataGridUserRoleMapExpanded.subscribe(function (newValue) {
        self.dataGridUserRoleMapExpandButtonIcon(newValue ? chevrondown : chevronnext);
        self.dataGridUserRoleMapExpandButtonHint(newValue ? collapseAll : expandAll);
    });

    self.dataGridUserRoleMap = ko.observable({
        dataSource: self.dataUserRoleMap,
        showColumnLines: true,
        showRowLines: true,
        showBorders: true,
        hoverStateEnabled: true,
        columnChooser: {
            enabled: true,
            mode: 'select'
        },
        grouping: {
            autoExpandAll: self.dataGridUserRoleMapExpanded,
            expandMode: 'rowClick'
        },
        //selection: {
        //    mode: 'single'
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
            { dataField: 'shopName', caption: 'Shop Name', alignment: 'center', width: '120px', groupIndex: 0, sortOrder: 'asc' },
            { dataField: 'roleName', caption: 'Role', alignment: 'center', width: '120px' },
            { dataField: 'email', caption: 'Email', alignment: 'center' },
            { dataField: 'firstName', caption: 'First Name', alignment: 'center', cssClass: 'left' },
            { dataField: 'lastName', caption: 'Last Name', alignment: 'center', cssClass: 'left' },
            { dataField: 'active', caption: 'Active', alignment: 'center' },
        ],
        onRowClick: function (info) {
            var data = info.data;
            self.dataUserRoleMapModal.userRoleMapId(data.userRoleMapId());
            self.dataUserRoleMapModal.dxLookupCustomer({
                value: data.customerId()
            });
            self.dataUserRoleMapModal.dxLookupUser({
                value: data.userId()
            });
            self.dataUserRoleMapModal.dxLookupRole({
                value: data.roleId()
            });
            self.dataUserRoleMapModal.action(cStatusUpdate);
            modalShow(cModalWrUserRoleMap);
        },
        onToolbarPreparing: function (e) {
            var dataGrid = e.component;
            e.toolbarOptions.items.unshift(
                {
                    location: 'before',
                    widget: 'dxSelectBox',
                    options: {
                        width: 200,
                        items: [{
                            value: 'shopName',
                            text: "Grouping by Shop Name"
                        }, {
                            value: 'roleName',
                            text: "Grouping by Role"
                        }, {
                            value: 'email',
                            text: "Grouping by Email"
                        }],
                        displayExpr: 'text',
                        valueExpr: 'value',
                        value: 'shopName',
                        onValueChanged: function (e) {
                            dataGrid.clearGrouping();
                            dataGrid.columnOption(e.value, 'groupIndex', 0);
                        }
                    }
                },
                {
                    location: 'before',
                    widget: 'dxButton',
                    options: {
                        hint: self.dataGridUserRoleMapExpandButtonHint,
                        icon: self.dataGridUserRoleMapExpandButtonIcon,
                        onClick: function (e) {
                            self.dataGridUserRoleMapExpanded(!self.dataGridUserRoleMapExpanded());
                        }
                    }
                }, {
                location: 'after',
                widget: 'dxButton',
                options: {
                    icon: 'fa fa-plus',
                    onClick: function () {
                        resetWrUserRoleMapViewModel();
                        modalShow(cModalWrUserRoleMap);
                    }
                }
            });
        },
        onCellPrepared: function (options) {
            var column = options.column;
            var fieldData = options.value,
                fieldHtml = '';
            if (column.dataField === 'active') {
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

};
//End Added by SMILEDINING-SA18-0011

//Added by SMILEDINING-SA21-0063
function LogViewModel(currentTime) {
    var self = this;
    var dataGrid;
    self.domainId = ko.observable(null);
    self.data = ko.observableArray([]);
    self.store = new DevExpress.data.ArrayStore({
        data: [],
        key: 'domainId'
    });
    self.domainName = ko.observable(); //Added and End by SMILEDINING-SA21-0063#9
    //Added by SMILEDINING-SA21-0063#1
    var date = new Date();
    var currentMonth = new Date(date.getFullYear(), date.getMonth(), 1);
    self.selectTimeMenu = ko.observable('Month');
    //self.currentDate = ko.observable(moment(currentTime).format('MM/DD/YYYY')); //Modified and End by WEB-SA22-0054
    self.currentDate = ko.observable(moment(currentTime, 'L').format('L')); //Added and End by WEB-SA22-0054
    //self.dateMax = moment(self.currentDate()).add(29, 'day').format(moment_date_format_mmddyyyy); //Modified and End by SMILEDINING-SA21-0063#3
    self.firstDayofMonth = moment(currentMonth).format('L');
    self.valueStartMonth = ko.observable(self.firstDayofMonth);
    self.valueStartDate = ko.observable(self.currentDate());
    self.valueEndDate = ko.observable(self.currentDate());
    self.computeMinEndDate = ko.pureComputed(function () {
        if (self.valueStartDate() == '' || isEmpty(self.valueStartDate())) {
            return self.currentDate();
        }
        else {
            return self.valueStartDate();
        }
    });
    //Added by SMILEDINING-SA21-0063#3
    //self.dateMax = moment(self.valueStartDate()).add(29, 'day').format(moment_date_format_mmddyyyy); //Modified and End by WEB-SA22-0054
    self.dateMax = moment(self.valueStartDate()).add(29, 'day').format('L'); //Added and End by WEB-SA22-0054
    self.computeMaxEndDate = ko.pureComputed(function () {
        //return self.dateMax = moment(self.valueStartDate()).add(29, 'day').format(moment_date_format_mmddyyyy); //Modified and End by WEB-SA22-0054
        return self.dateMax = moment(self.valueStartDate()).add(29, 'day').format('L'); //Added and End by WEB-SA22-0054
    });
    //End Added by SMILEDINING-SA21-0063#3
    //Added by SMILEDINING-SA21-0063#9
    self.computeFileName = ko.pureComputed(function () {
        if (self.domainName() == '' || isEmpty(self.domainName())) {
            return '';
        } else {
            return self.domainName();
        }
    });
    //End Added by SMILEDINING-SA21-0063#9
    self.dateBoxMonth = ko.observable({
        type: 'date',
        width: 250,
        value: self.valueStartMonth(),
        displayFormat: 'monthAndYear',
        minZoomLevel: "century",
        maxZoomLevel: "year",
        onValueChanged: function (e) {
            var value = moment(e.value).format('L');
            if (value == 'Invalid date') {
                self.valueStartMonth('');
            }
            else {
                self.valueStartMonth(value);
            }
        }
    });
    self.dateBoxStartDate = ko.observable({
        type: 'date',
        pickerType: 'calendar',
        width: 100,
        value: self.valueStartDate(),
        max: self.dateMax,
        displayFormat: 'MM-dd-yyyy',
        onValueChanged: function (e) {
            var value = moment(e.value).format('L');
            if (value == 'Invalid date') {
                self.valueStartDate('');
            }
            else {
                self.valueStartDate(value);
                //self.dateMax = moment(self.valueStartDate()).add(29, 'day').format(moment_date_format_mmddyyyy); //Added and End by SMILEDINING-SA21-0063#3 //Modified and End by WEB-SA22-0054
                self.dateMax = moment(self.valueStartDate()).add(29, 'day').format('L'); //Added and End by WEB-SA22-0054
            }
        }
    });
    self.dateBoxEndDate = ko.observable({
        type: 'date',
        pickerType: 'calendar',
        width: 100,
        value: self.valueEndDate(),
        min: self.computeMinEndDate,
        //max: self.dateMax, //Modified and End by SMILEDINING-SA21-0063#3
        max: self.computeMaxEndDate, //Added and End by SMILEDINING-SA21-0063#3
        displayFormat: 'MM-dd-yyyy',
        onValueChanged: function (e) {
            var value = moment(e.value).format('L');
            self.valueEndDate(value);
            if (value == 'Invalid date') {
                self.valueEndDate('');
            }
            else {
                self.valueEndDate(value);
            }
        }
    });
    self.radioItem = ko.observableArray([
        {
            id: "Month",
            text: "Month",
        },
        {
            id: "Day",
            text: "Day",
        }
    ]);
    self.dxRadioFilter = ko.observable({
        dataSource: self.radioItem,
        displayExpr: 'text',
        valueExpr: 'id',
        value: self.radioItem()[0].id,
        layout: "horizontal",
        onValueChanged: function (e) {
            var value = e.value;
            self.selectTimeMenu(value);
        }
    });
    //End Added by SMILEDINING-SA21-0063#1
    self.dxLookupDomain = ko.observable({
        dataSource: self.store,
        displayExpr: 'domainDesc',
        valueExpr: 'domainId',
        value: '',
        closeOnOutsideClick: true, //Added and End by WEB-SA23-0049
        showPopupTitle: false,
        showClearButton: true,
        width: 320,     //Added and End by SMILEDINING-SA21-0063#1
        onValueChanged: function (e) {
            //Modified by SMILEDINING-SA21-0063#1
            //var previousValue = e.previousValue; 
            //var newValue = e.value;
            //self.domainId(newValue);
            //End Modified by SMILEDINING-SA21-0063#1
            self.domainId(e.value); //Added and End by SMILEDINING-SA21-0063#1
        }
    });

    self.dataGridLogStore = ko.observable({
        dataSource: self.data,
        onInitialized: function (e) {
            dataGrid = e.component;
        },
        showBorders: true,
        showColumnHeader: false,
        showColumnLines: true,
        showRowLines: true,
        visible: true,
        hoverStateEnabled: true,
        columnAutoWidth: true,
        filterRow: {
            visible: true,
        },
        columnChooser: {
            enabled: true,
            mode: 'select'
        },
        export: {
            enabled: true
            //Added by SMILEDINING-SA21-0063#1
            //, fileName: 'Log' //Modified and End by SMILEDINING-SA21-0063#9
            , fileName: self.computeFileName //Added and End by SMILEDINING-SA21-0063#9
            , allowExportSelectedData: false
            //End Added by SMILEDINING-SA21-0063#1
        },
        //Modified by SMILEDINING-SA21-0063#1
        //onExporting: function (e) {
        //    var workbook = new ExcelJS.Workbook();
        //    var worksheet = workbook.addWorksheet('Log');
        //    DevExpress.excelExporter.exportDataGrid({
        //        component: e.component,
        //        worksheet: worksheet,
        //        autoFilterEnabled: true,
        //        customizeCell: function (options) {
        //            var gridCell = options.gridCell;
        //            var excelCell = options.excelCell;
        //            if (gridCell.rowType === "data") {
        //                excelCell.alignment = { horizontal: 'left' };
        //            }
        //        }
        //    }).then(function () {
        //        workbook.xlsx.writeBuffer().then(function (buffer) {
        //            saveAs(new Blob([buffer], { type: 'application/octet-stream' }), 'Log.xlsx');
        //        });
        //    });
        //    e.cancel = true;
        //},
        //End Modified by SMILEDINING-SA21-0063#1
        columns: [
            { dataField: 'logID', caption: 'LogID', alignment: 'center', cssClass: 'left', width: '70px' },
            { dataField: 'customerID', caption: 'CustomerID', alignment: 'center', cssClass: 'left' },
            { dataField: 'email', caption: 'Email', alignment: 'center', cssClass: 'left' },
            { dataField: 'site', caption: 'Site', alignment: 'center', cssClass: 'left' },
            { dataField: 'domainID', caption: 'DomainID', alignment: 'center', cssClass: 'left' },
            { dataField: 'property', caption: 'Property', alignment: 'center', cssClass: 'left', width: '300px' },
            { dataField: 'before', caption: 'Before', alignment: 'center', cssClass: 'left', width: '300px' },
            { dataField: 'after', caption: 'After', alignment: 'center', cssClass: 'left', width: '300px' },
            { dataField: 'status', caption: 'Status', alignment: 'center', cssClass: 'left' },
            { dataField: 'menu', caption: 'Menu', alignment: 'center', cssClass: 'left' },
            { dataField: 'createDate', caption: 'CreateDate', alignment: 'center', cssClass: 'left' },
        ],
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
        loadPanel: {
            enabled: true,
            showPane: false,
            text: ""
        }
    });
}
//End Added by SMILEDINING-SA21-0063

//Added by SMILEDINING-SA18-0010
function SummaryViewModel() {
    var self = this;
    var dataGrid;
    self.data = ko.observableArray([]);
    self.showLoading = ko.observable(false);
    //Modified by WEB-SA23-0013
    //self.valueArrFilter = ko.observable('All'); //Added and End by SMILEDINING-SA22-0032
    ////Added by WEB-SA22-0073
    //self.valueArrProduct = ko.observable(products.cAllProduct);
    //self.arrProductFilter = ko.observableArray([
    //    { name: products.mapName[products.cAllProduct].name, id: products.cAllProduct },
    //    { name: products.mapName[products.cSmileDining].name, id: products.cSmileDining },
    //    { name: products.mapName[products.cSmileContactless].name, id: products.cSmileContactless },
    //]);
    ////End Added by WEB-SA22-0073
    //End Modified by WEB-SA23-0013
    //Added by WEB-SA23-0013
    self.valSelectProduct = ko.observable(products.cSmileDining);
    self.valSelectFeeType = ko.observable(fees.cAll);
    self.selectMonth = ko.observable(moment(getPrevMonth(new Date()), 'L').format('L'));
    self.isCurrentMonth = ko.observable(false);
    self.domainId = ko.observable('');

    self.selectProductStore = new DevExpress.data.ArrayStore({
        key: 'id',
        data: [
            { id: products.cSmileDining, name: products.mapName[products.cSmileDining].name },
            { id: products.cSmileContactless, name: products.mapName[products.cSmileContactless].name },
            { id: products.cAllProduct, name: 'E-Bundle' },
        ],
    });
    self.selectFeeTypeStore = new DevExpress.data.ArrayStore({
        key: 'id',
        data: [
            { id: fees.cAll, name: fees.mapName[fees.cAll].name },
            { id: fees.cFlatRate, name: fees.mapName[fees.cFlatRate].name },
            { id: fees.cPercentage, name: 'Service Fee On Credit' },
        ],
    });
    self.dxLookupShopNameStore = new DevExpress.data.ArrayStore({
        key: 'domainId',
        data: [],
    });

    self.selectProduct = ko.observable({
        dataSource: self.selectProductStore,
        displayExpr: 'name',
        valueExpr: 'id',
        value: self.valSelectProduct,
        placeholder: 'Select Product',
        width: 170,
        onValueChanged: function (data) {
            self.filterDataGrid(); 
        }
    });
    self.selectFeeType = ko.observable({
        dataSource: self.selectFeeTypeStore,
        displayExpr: 'name',
        valueExpr: 'id',
        value: self.valSelectFeeType,
        placeholder: 'Select Fee Type',
        width: 190,
        onValueChanged: function (data) {
            self.filterDataGrid(); 
        }
    });
    self.dateBoxMonth = ko.observable({
        acceptCustomValue: false,
        type: 'date',
        value: self.selectMonth(),
        //min: new Date(new Date().getFullYear() - 5, 0, 1), //Modified and End by WEB-SA23-0013#1
        max: new Date(),
        displayFormat: 'monthAndYear',
        minZoomLevel: "century",
        maxZoomLevel: "year",
        width: 170,
        onValueChanged: function (e) {
            var value = moment(e.value).format('L');
            if (value != self.selectMonth()) {
                loadingShimmer(true, cGridSummary);
                self.selectMonth(value);
                self.valSelectProduct(products.cSmileDining);
                self.valSelectFeeType(fees.cAll);
                self.domainId('');
                self.isCurrentMonth(self.checkCurrentMonth(value));
                if (self.isCurrentMonth()) {
                    self.data([]);
                    setTimeout(function () {
                        refreshGrid(cGridSummary);
                        loadingShimmer(false, cGridSummary);
                    }, 1000);
                } else {
                    getSummaryObjFormAjax(cfrmSummaryGetData, value);
                }
            }
        }
    });
    self.dxLookupShopName = ko.observable({
        dataSource: self.dxLookupShopNameStore,
        displayExpr: 'domainDesc',
        valueExpr: 'domainId',
        value: self.domainId,
        placeholder: 'Select Shop Name',
        closeOnOutsideClick: true, //Added and End by WEB-SA23-0049
        showPopupTitle: false,
        showClearButton: true,
        width: 300,
        onValueChanged: function (e) {
            self.domainId(e.value);
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
        columnChooser: {
            enabled: true,
            mode: 'select'
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
            { dataField: 'id', caption: 'Shop ID', alignment: 'center', width: '120px' },
            { dataField: 'name', caption: 'Shop Name', alignment: 'center', cssClass: 'left', sortOrder: 'asc' },
            //Added by WEB-SA23-0013#4
            { dataField: 'address', caption: 'Address', alignment: 'center', cssClass: 'left', },
            { dataField: 'state', caption: 'State', alignment: 'center', cssClass: 'left', }, //Added and End by WEB-SA23-0013#8
            { dataField: 'postal', caption: 'Postal', alignment: 'center', cssClass: 'left', },
            //End Added by WEB-SA23-0013#4
            { 
                dataField: 'count', caption: 'Tx Smile Dining', alignment: 'center', cssClass: 'center',
                customizeText: function(cellInfo) {
                    //return numberWithCommas(cellInfo.valueText); //Modified and End by WEB-SA23-0043
                    return numberWithCommas(cellInfo.value, false); //Added and End by WEB-SA23-0043
                }
            },
            { dataField: 'sumTotal', caption: 'Total Smile Dining', alignment: 'center', cssClass: 'right', format: 'currency', precision: 2, },
            { dataField: 'sumServiceFeeOnCredit', caption: 'Service Fee On Credit', alignment: 'center', cssClass: 'right', format: 'currency', precision: 2, },
            { dataField: 'sumAmountDeposit', caption: 'Amount Deposit', alignment: 'center', cssClass: 'right', format: 'currency', precision: 2, },
            { 
                dataField: 'stCount', caption: 'Tx Smile On Table', alignment: 'center', cssClass: 'center',
                customizeText: function(cellInfo) {
                    //return numberWithCommas(cellInfo.valueText); //Modified and End by WEB-SA23-0043
                    return numberWithCommas(cellInfo.value, false); //Added and End by WEB-SA23-0043
                }
            },
            { dataField: 'stSumTotal', caption: 'Total Smile On Table', alignment: 'center', cssClass: 'right', format: 'currency', precision: 2, },
            { dataField: 'stSumServiceFeeOnCredit', caption: 'Service Fee On Credit OnTable', alignment: 'center', cssClass: 'right', format: 'currency', precision: 2, },
            { dataField: 'stSumAmountDeposit', caption: 'Amount Deposit OnTable', alignment: 'center', cssClass: 'right', format: 'currency', precision: 2, },
        ],
        export: {
            enabled: true,
            fileName: 'Summary',
            allowExportSelectedData: false
        },
        summary: {
            totalItems: [
                {
                    column: 'count',
                    summaryType: 'sum',
                    customizeText(data) {
                        //return numberWithCommas(data.valueText); //Modified and End by WEB-SA23-0043
                        return 'Sum: ' + numberWithCommas(data.value, false); //Added and End by WEB-SA23-0043
                    }
                }, 
                {
                    column: 'sumTotal',
                    summaryType: 'sum',
                    valueFormat: 'currency',
                    precision: 2,
                },
                {
                    column: 'sumServiceFeeOnCredit',
                    summaryType: 'sum',
                    valueFormat: 'currency',
                    precision: 2,
                },
                {
                    column: 'sumAmountDeposit',
                    summaryType: 'sum',
                    valueFormat: 'currency',
                    precision: 2,
                },
                {
                    column: 'stCount',
                    summaryType: 'sum',
                    customizeText(data) {
                        //return numberWithCommas(data.valueText); //Modified and End by WEB-SA23-0043
                        return 'Sum: ' + numberWithCommas(data.value, false); //Added and End by WEB-SA23-0043
                    }
                },
                {
                    column: 'stSumTotal',
                    summaryType: 'sum',
                    valueFormat: 'currency',
                    precision: 2,
                },
                {
                    column: 'stSumServiceFeeOnCredit',
                    summaryType: 'sum',
                    valueFormat: 'currency',
                    precision: 2,
                },
                {
                    column: 'stSumAmountDeposit',
                    summaryType: 'sum',
                    valueFormat: 'currency',
                    precision: 2,
                },
            ]
        },
        onRowPrepared: function (e) {
            e.rowElement.addClass('datagrid-summary-state-hover');
        },
    });

    self.clickSearchSummary = function () {
        var objValidate = new ObjValidateForm(cfrmSummaryGetData, null);
        objValidate.verifyData();
        if (objValidate.error.length > 0) {
            if (objValidate.showAlert) {
                var messageError = convertArrToString(objValidate.error);
                swal(cSwal_Alert_Error, replaceNewLineToBr(messageError), cSwal_Icon_Error);
            }
            return false;
        }
        addSpinButton(cfrmSummarySearch);
        loadingShimmer(true, cGridSummary);
        self.valSelectProduct(products.cSmileDining);
        self.valSelectFeeType(fees.cAll);
        getSummaryObjFormAjax(cfrmSummaryGetData, self.selectMonth(), self.domainId());
    };

    self.checkCurrentMonth = function (date) {
        var currentDate = new Date();
        var currentMonth = currentDate.getMonth();
        var currentYear = currentDate.getFullYear();
        var selectDate = new Date(date);
        var selectMonth = selectDate.getMonth();
        var selectYear = selectDate.getFullYear();
        return currentMonth == selectMonth && currentYear == selectYear;
    };

    self.filterDataGrid = function () {
        if (self.valSelectFeeType() == fees.cFlatRate) {
            if (self.valSelectProduct() == products.cSmileDining) {
                dataGrid.filter(['isActiveFeeCreditAndMarketing', '=', false], 'and', ['productId', 'contains', products.cSmileDining]);
            } else if (self.valSelectProduct() == products.cSmileContactless) {
                dataGrid.filter(['stIsActiveFeeCreditAndMarketing', '=', false], 'and', ['productId', 'contains', products.cSmileContactless]);
            } else if (self.valSelectProduct() == products.cAllProduct) {
                dataGrid.filter(['isEBundle', '=', true], 'and', [['isActiveFeeCreditAndMarketing', '=', false], 'or', ['stIsActiveFeeCreditAndMarketing', '=', false]]);
            }
        } else if (self.valSelectFeeType() == fees.cPercentage) {
            if (self.valSelectProduct() == products.cSmileDining) {
                dataGrid.filter(['isActiveFeeCreditAndMarketing', '=', true], 'and', ['productId', 'contains', products.cSmileDining]);
            } else if (self.valSelectProduct() == products.cSmileContactless) {
                dataGrid.filter(['stIsActiveFeeCreditAndMarketing', '=', true], 'and', ['productId', 'contains', products.cSmileContactless]);
            } else if (self.valSelectProduct() == products.cAllProduct) {
                dataGrid.filter(['isEBundle', '=', true], 'and', [['isActiveFeeCreditAndMarketing', '=', true], 'or', ['stIsActiveFeeCreditAndMarketing', '=', true]]);
            }
        } else {
            if (self.valSelectProduct() == products.cSmileDining) {
                dataGrid.filter(['productId', 'contains', products.cSmileDining]);
            } else if (self.valSelectProduct() == products.cSmileContactless) {
                dataGrid.filter(['productId', 'contains', products.cSmileContactless]);
            } else if (self.valSelectProduct() == products.cAllProduct) {
                dataGrid.filter(['isEBundle', '=', true]);
            }
        }
        if (self.valSelectProduct() == products.cSmileDining) {
            self.setColumnVisible(true, false);
        } else if (self.valSelectProduct() == products.cSmileContactless) {
            self.setColumnVisible(false, true);
        } else if (self.valSelectProduct() == products.cAllProduct) {
            self.setColumnVisible(true, true);
        }        
        dataGrid.refresh();
    };

    self.setColumnVisible = function (visible, stVisible) {
        dataGrid.columnOption('count', 'visible', visible);
        dataGrid.columnOption('sumTotal', 'visible', visible);
        dataGrid.columnOption('sumServiceFeeOnCredit', 'visible', visible);
        dataGrid.columnOption('sumAmountDeposit', 'visible', visible);
        dataGrid.columnOption('stCount', 'visible', stVisible);
        dataGrid.columnOption('stSumTotal', 'visible', stVisible);
        dataGrid.columnOption('stSumServiceFeeOnCredit', 'visible', stVisible);
        dataGrid.columnOption('stSumAmountDeposit', 'visible', stVisible);
    }

    self.resetFilterDataGrid = function () {
        self.valSelectProduct(products.cSmileDining);
        self.valSelectFeeType(fees.cAll);
        self.selectMonth(moment(getPrevMonth(new Date()), 'L').format('L'));
        self.isCurrentMonth(self.checkCurrentMonth(self.selectMonth()));
        var dataDateBox = $(".selectMonthSummarySearch").dxDateBox('instance');
        dataDateBox.option({ value: self.selectMonth() });
    };
    //End Added by WEB-SA23-0013
    //Modified by WEB-SA23-0013
    //self.dataGridOptions = ko.observable({
    //    onInitialized: function (e) {
    //        dataGrid = e.component;
    //    },
    //    dataSource: self.data,
    //    showColumnLines: true,
    //    showRowLines: true,
    //    showBorders: true,
    //    hoverStateEnabled: true,
    //    columnChooser: {
    //        enabled: true,
    //        mode: 'select'
    //    },
    //    grouping: {
    //        contextMenuEnabled: true,
    //        expandMode: 'rowClick'
    //    },
    //    sorting: { mode: 'multiple' },
    //    paging: {
    //        pageSize: 15
    //    },
    //    pager: {
    //        showPageSizeSelector: true,
    //        allowedPageSizes: [15, 30, 60, 90],
    //        showInfo: true,
    //        showNavigationButtons: true,
    //        showPageSizeSelector: true,
    //        visible: true
    //    },
    //    groupPanel: {
    //        visible: true
    //    },
    //    filterRow: { visible: true },
    //    allowColumnReordering: true,
    //    columnAutoWidth: true,
    //    columns: [
    //        {
    //            dataField: '', caption: '#', width: 80, alignment: 'center',
    //            cellTemplate: function (container, options) {
    //                container.text(dataGrid.pageIndex() * dataGrid.pageSize() + options.rowIndex + 1);
    //            }
    //        },
    //        //Modified by SMILEDINING-SA21-0081
    //        //{ dataField: 'shopCode', caption: 'Shop ID', alignment: 'center', width: '120px' },
    //        //{ dataField: 'shopName', caption: 'Shop Name', alignment: 'center', cssClass: 'left', sortOrder: 'asc' },
    //        ////Modified by SMILEDINING-SA21-0007
    //        ////{ dataField: 'countTicket', caption: 'Transaction', alignment: 'center', cssClass: 'center' },
    //        ////{ dataField: 'sumTotal', caption: 'Total', alignment: 'center', cssClass: 'right', format: 'currency', precision: 2 },
    //        ////End Modified by SMILEDINING-SA21-0007
    //        ////Added by SMILEDINING-SA21-0007
    //        //{ dataField: 'countTicket', caption: 'Tx Smile Dining', alignment: 'center', cssClass: 'center' },
    //        //{ dataField: 'sumTotal', caption: 'Total Smile Dining', alignment: 'center', cssClass: 'right', format: 'currency', precision: 2 },
    //        //End Modified by SMILEDINING-SA21-0081
    //        //Added by SMILEDINING-SA21-0081
    //        //Modified by SMILEDINING-SA22-0032
    //        //{ dataField: 'id', caption: 'Shop ID', alignment: 'center', width: '120px' },
    //        //{ dataField: 'name', caption: 'Shop Name', alignment: 'center', cssClass: 'left', sortOrder: 'asc' },
    //        //{ dataField: 'count', caption: 'Tx Smile Dining', alignment: 'center', cssClass: 'center' },
    //        //{ dataField: 'sum', caption: 'Total Smile Dining', alignment: 'center', cssClass: 'right', format: 'currency', precision: 2 },
    //        ////End Added by SMILEDINING-SA21-0081
    //        //{ dataField: 'countTicketContactless', caption: 'Tx Smile On Table', alignment: 'center', cssClass: 'center' },
    //        //{ dataField: 'sumTotalContactless', caption: 'Total Smile On Table', alignment: 'center', cssClass: 'right', format: 'currency', precision: 2 },
    //        //End Modified by SMILEDINING-SA22-0032
    //        //End Added by SMILEDINING-SA21-0007
    //        //Modified by WEB-SA22-0073
    //        ////Added by SMILEDINING-SA22-0032
    //        //{ dataField: 'id', caption: 'Shop ID', alignment: 'center', width: '120px' },
    //        //{ dataField: 'name', caption: 'Shop Name', alignment: 'center', cssClass: 'left', sortOrder: 'asc' },
    //        //{ dataField: 'count', caption: 'Tx Smile Dining', alignment: 'center', cssClass: 'center' },
    //        //{ dataField: 'sumTotal', caption: 'Total Smile Dining', alignment: 'center', cssClass: 'right', format: 'currency', precision: 2 },
    //        //{ dataField: 'sumServiceFeeOnCredit', caption: 'Service Fee On Credit', alignment: 'center', cssClass: 'right', format: 'currency', precision: 2 },
    //        //{ dataField: 'sumAmountDeposit', caption: 'Amount Deposit', alignment: 'center', cssClass: 'right', format: 'currency', precision: 2 },
    //        //{ dataField: 'stCount', caption: 'Tx Smile On Table', alignment: 'center', cssClass: 'center' },
    //        //{ dataField: 'stSumTotal', caption: 'Total Smile On Table', alignment: 'center', cssClass: 'right', format: 'currency', precision: 2 },
    //        ////End Added by SMILEDINING-SA22-0032
    //        ////Added by WEB-SA22-0057#1
    //        //{ dataField: 'stSumServiceFeeOnCredit', caption: 'Service Fee On Credit OnTable', alignment: 'center', cssClass: 'right', format: 'currency', precision: 2 },
    //        //{ dataField: 'stSumAmountDeposit', caption: 'Amount Deposit OnTable', alignment: 'center', cssClass: 'right', format: 'currency', precision: 2 },
    //        ////End Added by WEB-SA22-0057#1
    //        //End Modified by WEB-SA22-0073
    //        //Added by WEB-SA22-0073
    //        { dataField: 'id', caption: 'Shop ID', alignment: 'center', width: '120px' },
    //        { dataField: 'name', caption: 'Shop Name', alignment: 'center', cssClass: 'left', sortOrder: 'asc' },
    //        { 
    //            dataField: 'count', caption: 'Tx Smile Dining', alignment: 'center', cssClass: 'center',
    //            customizeText: function(cellInfo) {
    //                return self.valueArrProduct() === products.cSmileContactless ? '-' : cellInfo.valueText;
    //            }
    //        },
    //        { 
    //            dataField: 'sumTotal', caption: 'Total Smile Dining', alignment: 'center', cssClass: 'right', format: 'currency', precision: 2,
    //            customizeText: function(cellInfo) {
    //                return self.valueArrProduct() === products.cSmileContactless ? '-' : cellInfo.valueText;
    //            }
    //        },
    //        { dataField: 'sumServiceFeeOnCredit', caption: 'Service Fee On Credit', alignment: 'center', cssClass: 'right', format: 'currency', precision: 2,
    //            customizeText: function(cellInfo) {
    //                return self.valueArrProduct() === products.cSmileContactless ? '-' : cellInfo.valueText;
    //            }
    //        },
    //        { dataField: 'sumAmountDeposit', caption: 'Amount Deposit', alignment: 'center', cssClass: 'right', format: 'currency', precision: 2,
    //            customizeText: function(cellInfo) {
    //                return self.valueArrProduct() === products.cSmileContactless ? '-' : cellInfo.valueText;
    //            }
    //        },
    //        { dataField: 'stCount', caption: 'Tx Smile On Table', alignment: 'center', cssClass: 'center',
    //            customizeText: function(cellInfo) {
    //                return self.valueArrProduct() === products.cSmileDining ? '-' : cellInfo.valueText;
    //            }
    //        },
    //        { dataField: 'stSumTotal', caption: 'Total Smile On Table', alignment: 'center', cssClass: 'right', format: 'currency', precision: 2,
    //            customizeText: function(cellInfo) {
    //                return self.valueArrProduct() === products.cSmileDining ? '-' : cellInfo.valueText;
    //            }
    //        },
    //        { dataField: 'stSumServiceFeeOnCredit', caption: 'Service Fee On Credit OnTable', alignment: 'center', cssClass: 'right', format: 'currency', precision: 2,
    //            customizeText: function(cellInfo) {
    //                return self.valueArrProduct() === products.cSmileDining ? '-' : cellInfo.valueText;
    //            }
    //        },
    //        { dataField: 'stSumAmountDeposit', caption: 'Amount Deposit OnTable', alignment: 'center', cssClass: 'right', format: 'currency', precision: 2,
    //            customizeText: function(cellInfo) {
    //                return self.valueArrProduct() === products.cSmileDining ? '-' : cellInfo.valueText;
    //            }
    //        },
    //        //End Added by WEB-SA22-0073
    //    ],
    //    export: {
    //        enabled: true,
    //        fileName: 'Summary',
    //        allowExportSelectedData: false
    //    },
    //    summary: {
    //        totalItems: [
    //            {
    //                //column: 'countTicket', //Modified and End by SMILEDINING-SA21-0081
    //                column: 'count', //Added and End by SMILEDINING-SA21-0081
    //                summaryType: 'sum',
    //                //Added by WEB-SA22-0073
    //                customizeText(data) {
    //                    return self.valueArrProduct() === products.cSmileContactless ? '-' : data.valueText;
    //                }
    //                //End Added by WEB-SA22-0073
    //            }, 
    //            {
    //                //column: 'sumTotal', //Modified and End by SMILEDINING-SA21-0081
    //                //column: 'sum', //Added and End by SMILEDINING-SA21-0081 //Modified and End by SMILEDINING-SA22-0032
    //                column: 'sumTotal', //Added and End by SMILEDINING-SA22-0032
    //                summaryType: 'sum',
    //                valueFormat: 'currency',
    //                precision: 2, //Added and End by SMILEDINING-SA22-0032
    //                //Added by WEB-SA22-0073
    //                customizeText(data) {
    //                    return self.valueArrProduct() === products.cSmileContactless ? '-' : data.valueText;
    //                }
    //                //End Added by WEB-SA22-0073
    //            },
    //            //Added by SMILEDINING-SA22-0032
    //            {
    //                column: 'sumServiceFeeOnCredit',
    //                summaryType: 'sum',
    //                valueFormat: 'currency',
    //                precision: 2,
    //                //Added by WEB-SA22-0073
    //                customizeText(data) {
    //                    return self.valueArrProduct() === products.cSmileContactless ? '-' : data.valueText;
    //                }
    //                //End Added by WEB-SA22-0073
    //            },
    //            {
    //                column: 'sumAmountDeposit',
    //                summaryType: 'sum',
    //                valueFormat: 'currency',
    //                precision: 2,
    //                //Added by WEB-SA22-0073
    //                customizeText(data) {
    //                    return self.valueArrProduct() === products.cSmileContactless ? '-' : data.valueText;
    //                }
    //                //End Added by WEB-SA22-0073
    //            },
    //            //End Added by SMILEDINING-SA22-0032
    //            //Added by SMILEDINING-SA21-0007
    //            {
    //                //column: 'countTicketContactless', //Modified and End by SMILEDINING-SA22-0032
    //                column: 'stCount', //Added and End by SMILEDINING-SA22-0032
    //                summaryType: 'sum',
    //                //Added by WEB-SA22-0073
    //                customizeText(data) {
    //                    return self.valueArrProduct() === products.cSmileDining ? '-' : data.valueText;
    //                }
    //                //End Added by WEB-SA22-0073
    //            },
    //            {
    //                //column: 'sumTotalContactless', //Modified and End by SMILEDINING-SA22-0032
    //                column: 'stSumTotal', //Added and End by SMILEDINING-SA22-0032
    //                summaryType: 'sum',
    //                valueFormat: 'currency',
    //                precision: 2, //Added and End by SMILEDINING-SA22-0032
    //                //Added by WEB-SA22-0073
    //                customizeText(data) {
    //                    return self.valueArrProduct() === products.cSmileDining ? '-' : data.valueText;
    //                }
    //                //End Added by WEB-SA22-0073
    //            },
    //            //End Added by SMILEDINING-SA21-0007
    //            //Added by WEB-SA22-0057#1
    //            {
    //                column: 'stSumServiceFeeOnCredit',
    //                summaryType: 'sum',
    //                valueFormat: 'currency',
    //                precision: 2,
    //                //Added by WEB-SA22-0073
    //                customizeText(data) {
    //                    return self.valueArrProduct() === products.cSmileDining ? '-' : data.valueText;
    //                }
    //                //End Added by WEB-SA22-0073
    //            },
    //            {
    //                column: 'stSumAmountDeposit',
    //                summaryType: 'sum',
    //                valueFormat: 'currency',
    //                precision: 2,
    //                //Added by WEB-SA22-0073
    //                customizeText(data) {
    //                    return self.valueArrProduct() === products.cSmileDining ? '-' : data.valueText;
    //                }
    //                //End Added by WEB-SA22-0073
    //            },
    //            //End Added by WEB-SA22-0057#1
    //        ]
    //    },
    //    onRowPrepared: function (e) {
    //        e.rowElement.addClass('datagrid-summary-state-hover');
    //    },
    //    onToolbarPreparing: function (e) {
    //        e.toolbarOptions.items.unshift(
    //            //Added by WEB-SA22-0073
    //            {
    //                location: 'after',
    //                widget: 'dxSelectBox',
    //                options: {
    //                    dataSource: new DevExpress.data.ArrayStore({
    //                        data: self.arrProductFilter(),
    //                        key: 'id'
    //                    }),
    //                    displayExpr: 'name',
    //                    valueExpr: 'id',
    //                    value: self.valueArrProduct,
    //                    placeholder: 'Select Product',
    //                    width: 170,
    //                    onValueChanged: function (data) {
    //                        filterDataGrid();          
    //                    }
    //                }
    //            },
    //            //End Added by WEB-SA22-0073
    //            //Added by SMILEDINING-SA22-0032
    //            {
    //                location: 'after',
    //                widget: 'dxSelectBox',
    //                options: {
    //                    dataSource: ['All', 'Flat Rate', 'Service Fee On Credit'],
    //                    value: self.valueArrFilter,
    //                    //width: 220, //Modified and End by WEB-SA22-0073
    //                    width: 190, //Added and End by WEB-SA22-0073
    //                    onValueChanged: function (data) {
    //                        //Modified by WEB-SA22-0073
    //                        //if (data.value === 'Flat Rate') {
    //                        //    //dataGrid.filter(['isActiveFeeCreditAndMarketing', '=', false]); //Modified and End by WEB-SA22-0057#1
    //                        //    dataGrid.filter(['isActiveFeeCreditAndMarketing', '=', false], 'or', ['stIsActiveFeeCreditAndMarketing', '=', false] ); //Added and End by WEB-SA22-0057#1 
    //                        //} else if (data.value === 'Service Fee On Credit') {
    //                        //    //dataGrid.filter(['isActiveFeeCreditAndMarketing', '=', true]); //Modified and End by WEB-SA22-0057#1
    //                        //    dataGrid.filter(['isActiveFeeCreditAndMarketing', '=', true], 'or', ['stIsActiveFeeCreditAndMarketing', '=', true] ); //Added and End by WEB-SA22-0057#1
    //                        //} else {
    //                        //    dataGrid.clearFilter('dataSource');
    //                        //}
    //                        //End Modified by WEB-SA22-0073  
    //                        filterDataGrid(); //Added and End by WEB-SA22-0073
    //                    }
    //                }
    //            },
    //            //End Added by SMILEDINING-SA22-0032
    //            {
    //                location: 'after',
    //                widget: 'dxDateBox',
    //                options: {
    //                    acceptCustomValue: false,
    //                    format: "date",
    //                    width: 170,
    //                    value: new Date(),
    //                    displayFormat: 'monthAndYear',
    //                    maxZoomLevel: 'year',
    //                    minZoomLevel: 'century',
    //                    onInitialized: function (e) {
    //                        setTimeout(function () {
    //                            e.component.field().on('click', function () {
    //                                if (!e.component.option('opened'))
    //                                    e.component.open();
    //                            });
    //                        });
    //                    },
    //                    onValueChanged: function (v) {
    //                        //Modified by SMILEDINING-SA21-0081
    //                        //vmViewIndex.summary.showLoading(true);
    //                        //setTimeout(function () {
    //                        //    var summary = getSummaryObjFormAjax(cfrmSummaryGetData, moment(v.value).format('L'));
    //                        //    ko.mapping.fromJSON(summary, {}, vmViewIndex.summary.data);
    //                        //    refreshGrid(cGridSummary);
    //                        //    vmViewIndex.summary.showLoading(false);
    //                        //}, 2500);
    //                        //End Modified by SMILEDINING-SA21-0081
    //                        //Added by SMILEDINING-SA21-0081
    //                        //loadingShimmer(true, 'Summary'); //Modified and End by SMILEDINING-SA21-0081#1
    //                        loadingShimmer(true, cGridSummary); //Added and End by SMILEDINING-SA21-0081#1
    //                        self.valueArrProduct(products.cAllProduct); //Added and End by WEB-SA22-0073
    //                        self.valueArrFilter('All'); //Added and End by SMILEDINING-SA22-0032
    //                        getSummaryObjFormAjax(cfrmSummaryGetData, moment(v.value).format('L'));
    //                        //End Added by SMILEDINING-SA21-0081
    //                    }
    //                }
    //            },
    //        );
    //    }
    //});
    //End Modified by WEB-SA23-0013

    //function getSummaryObjFormAjax(jsonObj, date) { //Modified and End by WEB-SA23-0013
    function getSummaryObjFormAjax(jsonObj, date, domainId) { //Added and End by WEB-SA23-0013
        var objUrl = new ObjUrl(jsonObj);
        var requestUrl = objUrl.getUrlFromJson();
        //Modified by WEB-SA23-0013
        //var passData;
        //if (!isEmpty(date)) {
        //    passData = JSON.parse('{"time" : "' + date + '"}');
        //}
        //End Modified by WEB-SA23-0013
        //Added by WEB-SA23-0013
        var passData = {
            time: date,
            domainId: domainId,
        };
        //End Added by WEB-SA23-0013
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
                //Modified by SMILEDINING-SA21-0081#1
                //if (result.status) {
                //    summary = result.obj.Result; 
                //    ko.mapping.fromJSON(summary, {}, vmViewIndex.summary.data);
                //}
                //End Modified by SMILEDINING-SA21-0081#1
                //Added by SMILEDINING-SA21-0081#1
                removeSpinButton(cfrmSummarySearch); //Added and End by WEB-SA23-0013
                if (result.status) {
                    summary = result.obj;
                    ko.mapping.fromJSON(summary, {}, vmViewIndex.summary.data);
                } else {
                    swal(cSwal_Alert_Error, result.message, cSwal_Icon_Error);
                    //vmViewIndex.summary.data = null; //Modified and End by WEB-SA23-0013
                    vmViewIndex.summary.data([]); //Added and End by WEB-SA23-0013
                }
                //End Added by SMILEDINING-SA21-0081#1
                //refreshGrid(cGridSummary); //Modified and End by WEB-SA23-0013#1
                self.filterDataGrid(); //Added and End by WEB-SA23-0013#1
                //loadingShimmer(false, 'Summary'); //Modified and End by SMILEDINING-SA21-0081#1
                loadingShimmer(false, cGridSummary); //Added and End by SMILEDINING-SA21-0081#1
            })
            .fail(function (result) {
                //vmViewIndex.summary.data = null; //Modified and End by WEB-SA23-0013
                //loadingShimmer(false, 'Summary'); //Modified and End by SMILEDINING-SA21-0081#1
                //Added by SMILEDINING-SA21-0081#1
                swal(cSwal_Alert_Error, result.message, cSwal_Icon_Error);
                //Added by WEB-SA23-0013
                removeSpinButton(cfrmSummarySearch);
                vmViewIndex.summary.data([]);
                //refreshGrid(cGridSummary); //Modified and End by WEB-SA23-0013#1
                self.filterDataGrid(); //Added and End by WEB-SA23-0013#1
                //End Added by WEB-SA23-0013
                loadingShimmer(false, cGridSummary);
                //End Added by SMILEDINING-SA21-0081#1
            });
        //End Added by SMILEDINING-SA21-0081
    };
    //Added by WEB-SA22-0073
    //Modified by WEB-SA23-0013
    //function filterDataGrid() {
    //    var isActiveFeeCreditAndMarketing = self.valueArrProduct() == products.cSmileContactless ? 'stIsActiveFeeCreditAndMarketing' : 'isActiveFeeCreditAndMarketing';
    //    if (self.valueArrFilter() === 'Flat Rate') {
    //        if (self.valueArrProduct() == products.cAllProduct) {
    //            dataGrid.filter(['isActiveFeeCreditAndMarketing', '=', false], 'or', ['stIsActiveFeeCreditAndMarketing', '=', false]);
    //        } else {
    //            dataGrid.filter([isActiveFeeCreditAndMarketing, '=', false]);
    //        }                                
    //    } else if (self.valueArrFilter() === 'Service Fee On Credit') {
    //        if (self.valueArrProduct() == products.cAllProduct) {
    //            dataGrid.filter(['isActiveFeeCreditAndMarketing', '=', true], 'or', ['stIsActiveFeeCreditAndMarketing', '=', true]);
    //        } else {
    //            dataGrid.filter([isActiveFeeCreditAndMarketing, '=', true]);
    //        }
    //    } else {
    //        dataGrid.clearFilter('dataSource');
    //    }
    //    dataGrid.refresh();
    //};
    //End Modified by WEB-SA23-0013
    //End Added by WEB-SA22-0073
};
//End Added by SMILEDINING-SA18-0010

//Added by SMILEDINING-SA21-0080#2
function MarketingServiceViewModel() {
    var self = this;
    var dataGrid;
    self.data = ko.observableArray([]);
    self.showLoading = ko.observable(false);
    self.dataGridOptions = ko.observable({
        onInitialized: function (e) {
            dataGrid = e.component;
        },
        dataSource: self.data,
        showColumnLines: true,
        showRowLines: true,
        showBorders: true,
        hoverStateEnabled: true,
        columnChooser: {
            enabled: true,
            mode: 'select'
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
            { dataField: 'id', caption: 'Shop ID', alignment: 'center', width: '120px' },
            { dataField: 'name', caption: 'Shop Name', alignment: 'center', cssClass: 'left', sortOrder: 'asc' },
            { dataField: 'count', caption: 'Count', alignment: 'center', cssClass: 'center' },
            { dataField: 'totalCredit', caption: 'Total Credit', alignment: 'center', cssClass: 'right', format: 'currency', precision: 2 },
            { dataField: 'tip', caption: 'Total Tip', alignment: 'center', cssClass: 'right', format: 'currency', precision: 2 },   //Added and End by SMILEDINING-SA22-0025#1
            { dataField: 'marketingFee', caption: 'Marketing Service Fee', alignment: 'center', cssClass: 'right', format: 'currency', precision: 2 },
            { dataField: 'creditCardFee', caption: 'Total CC Fee', alignment: 'center', cssClass: 'right', format: 'currency', precision: 2 },
            { dataField: 'amountDeposit', caption: 'Amount Deposit', alignment: 'center', cssClass: 'right', format: 'currency', precision: 2 },
        ],
        export: {
            enabled: true,
            fileName: 'MarketingService',
            allowExportSelectedData: false
        },
        summary: {
            totalItems: [{
                column: 'count',
                summaryType: 'sum',
                valueFormat: 'currency',
                precision: 2
            }, {
                column: 'totalCredit',
                summaryType: 'sum',
                valueFormat: 'currency',
                precision: 2
                }
                //Added by SMILEDINING-SA22-0025#1
                , {
                    column: 'tip',
                    summaryType: 'sum',
                    valueFormat: 'currency',
                    precision: 2
                }
                //End Added by SMILEDINING-SA22-0025#1
                , {
                column: 'marketingFee',
                summaryType: 'sum',
                valueFormat: 'currency',
                precision: 2
            }
                , {
                column: 'creditCardFee',
                summaryType: 'sum',
                valueFormat: 'currency',
                precision: 2
            }, {
                column: 'amountDeposit',
                summaryType: 'sum',
                valueFormat: 'currency',
                precision: 2
            }
            ]
        },
        onRowPrepared: function (e) {
            e.rowElement.addClass('datagrid-summary-state-hover');
        },
        onToolbarPreparing: function (e) {
            e.toolbarOptions.items.unshift({
                location: 'after',
                widget: 'dxDateBox',
                options: {
                    acceptCustomValue: false,
                    format: "date",
                    width: 170,
                    value: new Date(),
                    displayFormat: 'monthAndYear',
                    maxZoomLevel: 'year',
                    minZoomLevel: 'century',
                    onInitialized: function (e) {
                        setTimeout(function () {
                            e.component.field().on('click', function () {
                                if (!e.component.option('opened'))
                                    e.component.open();
                            });
                        });
                    },
                    onValueChanged: function (v) {
                        //Modified by SMILEDINING-SA21-0081
                        //vmViewIndex.marketingService.showLoading(true);
                        //setTimeout(function () {
                        //    var marketing = getSummaryObjFormAjax(cfrmMarketingServiceGetData, moment(v.value).format('M'));
                        //    ko.mapping.fromJSON(marketing.Result, {}, vmViewIndex.marketingService.data);
                        //    refreshGrid('gridMarketing');
                        //    //vmViewIndex.marketingService.showLoading(false);
                        //}, 2500);
                        //End Modified by SMILEDINING-SA21-0081
                        //Added by SMILEDINING-SA21-0081
                        //loadingShimmer(true, 'Marketing'); //Modified and End by SMILEDINING-SA21-0081#1
                        loadingShimmer(true, cGridMarketing);//Added and End by SMILEDINING-SA21-0081#1
                        //getSummaryObjFormAjax(cfrmMarketingServiceGetData, moment(v.value).format('M'));  //Modified and End by SMILEDINING-SA21-0080#10
                        getMarketingObjFormAjax(cfrmMarketingServiceGetData, moment(v.value).format(moment_date_format_mmddyyyy));  //Added and End by SMILEDINING-SA21-0080#10
                        //End Added by SMILEDINING-SA21-0081
                    }
                }
            });
        }
    });

    //function getSummaryObjFormAjax(jsonObj, date) {   //Modified and End by SMILEDINING-SA21-0080#10
    function getMarketingObjFormAjax(jsonObj, date) {   //Added and End by SMILEDINING-SA21-0080#10
        var objUrl = new ObjUrl(jsonObj);
        var requestUrl = objUrl.getUrlFromJson();
        var passData;
        if (!isEmpty(date)) {
            //passData = JSON.parse('{"month" : "' + date + '"}');  //Modified and End by SMILEDINING-SA21-0080#10
            passData = JSON.parse('{"date" : "' + date + '"}');  //Added and End by SMILEDINING-SA21-0080#10
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
                    marketing = result.obj;
                    ko.mapping.fromJSON(marketing.Result, {}, vmViewIndex.marketingService.data);
                }
                refreshGrid('gridMarketing');
                //loadingShimmer(true, 'Marketing'); //Modified and End by SMILEDINING-SA21-0081#1
                //loadingShimmer(true, cGridMarketing);//Added and End by SMILEDINING-SA21-0081#1 //Modified and End by SMILEDINING-SA21-0081#3
                loadingShimmer(false, cGridMarketing); //Added and End by SMILEDINING-SA21-0081#3
            })
            .fail(function (result) {
                vmViewIndex.marketingService.data = null;
                //loadingShimmer(true, 'Marketing'); //Modified and End by SMILEDINING-SA21-0081#1
                //loadingShimmer(true, cGridMarketing);//Added and End by SMILEDINING-SA21-0081#1 //Modified and End by SMILEDINING-SA21-0081#3
                loadingShimmer(false, cGridMarketing); //Added and End by SMILEDINING-SA21-0081#3
            });
        //End Added by SMILEDINING-SA21-0081
    };
};

//End Added by SMILEDINING-SA21-0080#2

//Added by SMILEDINING-SA19-0011
function EgiftCardViewModel(currentTime) {
    var dataGrid;
    var self = this;
    self.data = ko.observableArray([]);
    self.dataGiftCer = ko.observable();

    self.dataGiftCerModal = new DataGiftCerModel();
    self.dataGiftCerDetailModal = new DataGiftCerDetailModel();
    self.dataGiftCerSearchModal = new DataGiftCerSearchModel();
    self.dataGiftCerSearchDateModal = new DataGiftCerSearchDateModel(currentTime);

    self.selectGiftCerId = ko.observable();
    self.loadingVisible = ko.observable(false);
    self.loadOptions = {
        visible: self.loadingVisible,
        showIndicator: true,
        showPane: true,
        shading: true,
        closeOnOutsideClick: false,
        shadingColor: "rgba(0,0,0,0.4)",
        position: { my: 'center', at: 'center', of: window },
        onShown: function (d) {
            var objUrl = new ObjUrl(cJsonGetWrGiftCerX);
            var requestUrl = objUrl.getUrlFromJson();
            var passData = JSON.parse('{"key" : "' + self.selectGiftCerId() + '"}');
            var data = JSON.parse(getJsonFromAjax(requestUrl, !ajax_async, ajax_cache, ajax_type_post, passData, ajax_timeout));

            self.dataGiftCerModal.dataJoinDomain.removeAll();

            //Modified by SMILEDINING-SA22-0008#12
            //if (data.length > 0) {
            //    _.forEach(data, function (item) {
            //        var value = ko.utils.arrayFilter(self.data(), function(i){
            //            return i.domainId() == item.customerCode;
            //        });
            //        if (value.length > 0) {
            //            self.dataGiftCerModal.dataJoinDomain.push(new DataGiftCerJoinModel(_.head(value).domainId(), _.head(value).domainName()));
            //        }                    
            //    });
            //}
            //End Modified by SMILEDINING-SA22-0008#12
            //Added by SMILEDINING-SA22-0008#12
            if (data != null) {
                if (data.length > 0) {
                    _.forEach(data, function (item) {
                        var value = ko.utils.arrayFilter(self.data(), function (i) {
                            //return i.domainId() == item.customerCode; //Modified and End by SMILEDINING-SA22-0008#12
                            //Added by SMILEDINING-SA22-0008#12
                            if (i != undefined) {
                                return i.domainId() == item.customerCode;
                            }
                            //End Added by SMILEDINING-SA22-0008#12
                        });
                        if (value.length > 0) {
                            self.dataGiftCerModal.dataJoinDomain.push(new DataGiftCerJoinModel(_.head(value).domainId(), _.head(value).domainName()));
                        }
                    });
                }
            }
            //End Added by SMILEDINING-SA22-0008#12

            self.dataGiftCerModal.action(cStatusUpdate);
            setTimeout(function () {

                modalHide(cModalEgiftCardDetail);
                modalShow(cModalEgiftCard);
                self.loadingVisible(false);
            }, 1000);
        },
    };

    self.clickRound = function (data, event) {
        self.selectGiftCerId(data.giftCerId());
        self.dataGiftCerModal.isMain(data.isMain());
        self.dataGiftCerModal.times(data.times());
        self.loadingVisible(true);
    };

    self.clickNewGiftCer = function () {
        self.dataGiftCerModal.action(cStatusAdd);
        modalHide(cModalEgiftCardDetail);
        //Added by SMILEDINING-SA22-0008#14
        self.dataGiftCerModal.isMain(true);
        var dataJoinDomain = vmViewIndex.egiftcard.dataGiftCerModal.dataJoinDomain();
        if (dataJoinDomain.length > 0) {
            vmViewIndex.egiftcard.dataGiftCerModal.dataJoinDomain.removeAll();
        }
        //End Added by SMILEDINING-SA22-0008#14
        modalShow(cModalEgiftCard);
    };

    self.dataGridEgiftCard = ko.observable({
        onInitialized: function (e) {
            dataGrid = e.component;
        },
        dataSource: self.data,
        showColumnLines: true,
        showRowLines: true,
        showBorders: true,
        hoverStateEnabled: true,
        columnChooser: {
            enabled: true,
            mode: 'select'
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
            {
                caption: '#', width: 80, alignment: 'center',
                cellTemplate: function (container, options) {
                    container.text(dataGrid.pageIndex() * dataGrid.pageSize() + options.rowIndex + 1);
                }
            },
            { dataField: 'domainId', caption: 'ID', alignment: 'center', width: '120px' },
            { dataField: 'domainDesc', caption: 'Shop Name', alignment: 'center', cssClass: 'left', sortOrder: 'asc' },
            {
                dataField: 'active', caption: '', width: 80, alignment: 'center', allowFiltering: false
            }
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

        onRowPrepared: function (e) {
            e.rowElement.addClass('datagrid-summary-state-hover');
        },
        onCellClick: function (e) {
            var data = e.data;
            if (e.rowType == 'data' && e.column.dataField == 'active') {
                self.dataGiftCerSearchDateModal.domainId(data.domainId());
                self.dataGiftCerSearchDateModal.domainName(data.domainName());  //Added and End by SMILEDINING-SA22-0008
                modalShow(cModalEgiftCardSearchDate);
                $('.slickSetup').slick('setPosition');
            } else if (e.rowType == 'data') {
                self.dataGiftCerModal.domainId(data.domainId());
                self.dataGiftCerModal.domainName(data.domainName());             
                self.dataGiftCerModal.storeDomain.clear();
                _.forEach(self.dataGiftCerModal.storeDomainData._array, function (item) {
                    if (item.domainId() != self.dataGiftCerModal.domainId()) {
                        self.dataGiftCerModal.storeDomain.insert(item);
                    }
                });

                //$('#dxLookupJoinGiftCer').data().dxLookup.getDataSource().reload();
                refreshLookUp($('#dxLookupJoinGiftCer'));

                //Filter Data GiftCer Condition data domain ID
                var filterDataGiftCer = ko.utils.arrayFilter(self.dataGiftCer(), function (item) {
                    return item.customerCode() == data.domainId()
                });

                if (isEmpty(filterDataGiftCer)) {
                    //First Time
                    modalShow(cModalEgiftCard);
                } else {
                    // Show All Times Box From Gift Card
                    self.dataGiftCerDetailModal.data.removeAll();
                    //ko.utils.arrayForEach(filterDataGiftCer, function (item) {
                    //    self.dataGiftCerDetailModal.data.push(item);
                    //})

                    _.forEach(filterDataGiftCer, function (item) {
                        self.dataGiftCerDetailModal.data.push(item);
                        //ko.utils.arrayPushAll(self.dataGiftCerDetailModal.data, item);
                    });

                    self.dataGiftCerDetailModal.domainId(data.domainId());
                    self.dataGiftCerDetailModal.domainName(data.domainId());

                    modalShow(cModalEgiftCardDetail);
                }
            }
        },
        onRowClick: function (info) { },
        onToolbarPreparing: function (e) {
            e.toolbarOptions.items.unshift(
                {
                    location: 'after',
                    widget: 'dxButton',
                    options: {
                        icon: 'fa fa-th-list',
                        onClick: function () {
                            //resetSetupViewModel();
                            modalShow(cModalEgiftCardSearch);
                        }
                    }
                });
        }

    });

};
//End Added by SMILEDINING-SA19-0011

//Added by SMILEDINING-SA22-0017
function AutoUpdateViewModel() {    
    var self = this;
    var dataGrid; //Added and End by SMILEDINING-SA22-0017#3
    self.data = ko.observableArray([]);
    self.dataUpdateVersionModal = new DataUpdateVersionViewModel();
    self.dataUpdateVersionDetailModal = new DataUpdateVersionDetailViewModel();
    self.dataSettingSvnModal = new DataSettingSvnViewModel();
    self.dataProcessDomainStore = ko.observableArray([]);
    self.valueFilter = ko.observable('All'); //Added and End by WEB-SA22-0070
    //Added by WEB-SA23-0049#1
    self.valSelectProduct = ko.observableArray([products.cSmilePos, products.cSmileDining, products.cSmileEgiftCard, products.cSmileContactless, products.cSmileThirdPartyIntegrations, products.cSmileKiosk, products.cSmileDeliveryService]);
    self.selectProductStore = new DevExpress.data.ArrayStore({
        key: 'id',
        data: [
            { id: products.cSmilePos, name: products.mapName[products.cSmilePos].name },
            { id: products.cSmileDining, name: products.mapName[products.cSmileDining].name },
            { id: products.cSmileEgiftCard, name: products.mapName[products.cSmileEgiftCard].name },
            { id: products.cSmileContactless, name: products.mapName[products.cSmileContactless].name },
            { id: products.cSmileThirdPartyIntegrations, name: products.mapName[products.cSmileThirdPartyIntegrations].name },
            { id: products.cSmileKiosk, name: products.mapName[products.cSmileKiosk].name },
            { id: products.cSmileDeliveryService, name: products.mapName[products.cSmileDeliveryService].name },
        ],
    });
    //End Added by WEB-SA23-0049#1
    self.dataGridAutoUpdate = ko.observable({
        onInitialized: function (e) {
            dataGrid = e.component;
        },
        dataSource: self.data,
        showColumnLines: true,
        showRowLines: true,
        showBorders: true,
        hoverStateEnabled: true,
        columnChooser: {
            enabled: true,
            mode: 'select'
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
        selection: {
            mode: 'multiple',
            allowSelectAll: true,
            showCheckBoxesMode: "always"
        },
        columns: [
            { dataField: 'domainId', caption: 'ID', alignment: 'center', width: '120px' },
            { dataField: 'domainDesc', caption: 'Shop Name', alignment: 'center', cssClass: 'left', sortOrder: 'asc' },
            { dataField: 'domainVersion', caption: 'Version', width: 150, alignment: 'left', },
            { dataField: 'status', caption: 'Status', width: 300, alignment: 'left', }
        ],
        //Added by WEB-SA23-0025
        export: {
            enabled: true,
            fileName: 'Auto Update',
            allowExportSelectedData: false
        },
        //End Added by WEB-SA23-0025
        onCellPrepared: function (option) {
            var column = option.column;
            var rowType = option.rowType;
            var data = option.data;
            var fieldHtml = '';
            var color = '';
            if (rowType === "data" && column.dataField === "domainDesc") {
                if (data.status().includes(cProcessStatusFailed)) {
                    fieldHtml = '<div>' + option.text + '<span style="color:red;">  Fail...</span>' + '</div>';
                //Added by SMILEDINING-SA22-0017#2
                } else if (data.status().includes(cProcessStatusNotAvailable)) {
                    fieldHtml = '<div>' + option.text + '<span style="color:red;">  Not available...</span>' + '</div>';
                //End Added by SMILEDINING-SA22-0017#2
                } else if (data.status().includes(cProcessStatusRollback)) {
                    fieldHtml = '<div>' + option.text + '<span style="color:#FF9800;">  Rollback...</span>' + '</div>';
                } else if (data.status() == cProcessStatusFinished || isEmpty(data.status())) {
                    fieldHtml = '<div>' + option.text + '</div>';
                } else {
                    fieldHtml = '<div>' + option.text + '<span style="color:#FF9800;">  Update...</span>' + '</div>';
                }
                option.cellElement.html(fieldHtml);
            } else if (rowType === "data" && column.dataField === "status") {
                //if (data.status().includes(cProcessStatusFailed)) { //Modified and End by SMILEDINING-SA22-0017#2
                if (data.status().includes(cProcessStatusFailed) || data.status().includes(cProcessStatusNotAvailable)) { //Added and End by SMILEDINING-SA22-0017#2
                    color = "red";
                } else if (data.status() == cProcessStatusFinished) {
                    color = "green";
                } else {
                    color = "#FF9800";
                }
                option.cellElement.css("color", color);
            }
        },
        onRowPrepared: function (e) {
            if (e.data != undefined) {
                var data = e.data;
                if (!isEmpty(data.status())) {
                    e.rowElement.css('background', '#E0E0E0');
                }
            }
            e.rowElement.addClass('datagrid-summary-state-hover'); 
        },
        onCellClick: function (e) {
            var data = e.data;
            if (data != undefined) {
                if (!isEmpty(data.status()) && e.column.dataType != "boolean") {
                    var filterProcessDomain = ko.utils.arrayFirst(vmViewIndex.autoUpdate.dataProcessDomainStore(), function (item) {
                        return item.domainId() == data.domainId();
                    });
                    if (filterProcessDomain != null) {
                        self.dataUpdateVersionDetailModal.data(filterProcessDomain.data());
                    }
                    self.dataUpdateVersionDetailModal.domainId(data.domainId());
                    self.dataUpdateVersionDetailModal.domainDesc(data.domainDesc());
                    self.dataUpdateVersionDetailModal.domainVersion(data.domainVersion());
                    self.dataUpdateVersionDetailModal.status(data.status());
                    modalShow(cModalUpdateVersionDetail);
                }
            }    
        },
        onSelectionChanged: function (e) {
            //var dataGrid = e.component; //Modified and End by SMILEDINING-SA22-0017#3
            //Modified by WEB-SA22-0070
            //var currentSelectedRowKeys = e.currentSelectedRowKeys;
            //var rowKey = currentSelectedRowKeys[0];
            //if (rowKey != undefined && !isEmpty(rowKey.status())) {
            //    dataGrid.deselectRows(currentSelectedRowKeys);
            //}
            //End Modified by WEB-SA22-0070
            //Added by WEB-SA22-0070
            var currentSelectedRowKeys = e.currentSelectedRowKeys;
            if (!isEmpty(currentSelectedRowKeys)){
                ko.utils.arrayForEach(currentSelectedRowKeys, function (rowKey) {
                    if (rowKey != undefined && !isEmpty(rowKey.status()) && !(rowKey.status().includes(cProcessStatusFailed) || rowKey.status().includes(cProcessStatusNotAvailable))) {
                        dataGrid.deselectRows(rowKey);
                    }
                });
            }
            //End Added by WEB-SA22-0070
        },
        onRowClick: function (info) { },
        onToolbarPreparing: function (e) {
            //var dataGrid = e.component; //Modified and End by SMILEDINING-SA22-0017#3
            e.toolbarOptions.items.unshift( 
                {
                    location: 'before',
                    widget: 'dxButton',
                    options: {
                        text: "Clear",  
                        icon: 'refresh',
                        onClick() {
                            dataGrid.clearSelection();              
                        },
                    },
                },
                //Added by WEB-SA23-0049#1
                {
                    location: 'after',
                    widget: 'dxTagBox',
                    options: {
                        dataSource: self.selectProductStore,
                        displayExpr: 'name',
                        valueExpr: 'id',
                        value: self.valSelectProduct,
                        showDropDownButton: true,
                        searchEnabled: false,
                        showSelectionControls: true,
                        maxDisplayedTags: 1,
                        multiline: false,
                        width: 250,
                        onValueChanged: function (e) {
                            self.filterDataGridAutoUpdate();
                        },
                        onMultiTagPreparing(args) {
                            if (args.selectedItems.length < self.selectProductStore._array.length) {
                              args.cancel = false;
                            } else {
                              args.text = 'All Products';
                            }
                        },
                    }
                },
                //End Added by WEB-SA23-0049#1
                //Added by WEB-SA22-0070
                {
                    location: 'after',
                    widget: 'dxSelectBox',
                    options: {
                        dataSource: ['All', cProcessStatusFailed, cProcessStatusFinished, cProcessStatusUpdating],
                        value: self.valueFilter,
                        width: 120,
                        onValueChanged: function (data) {
                            //Modified by WEB-SA23-0049#1
                            //if (data.value === cProcessStatusFinished) {
                            //    dataGrid.filter(['status', 'contains', cProcessStatusFinished]);
                            //} else if (data.value === cProcessStatusFailed) {
                            //    dataGrid.filter(['status', 'contains', cProcessStatusFailed], 'or', ['status', 'contains', cProcessStatusNotAvailable]);
                            //} else if (data.value === cProcessStatusUpdating) {
                            //    dataGrid.filter(['!', ['status', '=', null]], 'and', ['!', ['status', '=', '']], 'and', ['!', ['status', 'contains', cProcessStatusFinished]], 'and', ['!', ['status', 'contains', cProcessStatusFailed]], 'and', ['!', ['status', 'contains', cProcessStatusNotAvailable]]);
                            //} else {
                            //    dataGrid.clearFilter('dataSource');
                            //}              
                            //End Modified by WEB-SA23-0049#1
                            self.filterDataGridAutoUpdate(); //Added and End by WEB-SA23-0049#1
                        }
                    }
                },
                //End Added by WEB-SA22-0070
                {
                    location: 'after',
                    widget: 'dxButton',
                    options: {
                        text: "Update Version",
                        onClick: function () {
                            var rowsData = dataGrid.getSelectedRowsData();
                            self.dataUpdateVersionModal.data(rowsData);
                            if (self.dataUpdateVersionModal.dataDomainUpdate().length != 0) {
                                self.dataUpdateVersionModal.dataDomainUpdate.removeAll();
                            }
                            modalShow(cModalUpdateVersion);
                        }
                    }
                },
                {
                    location: 'after',
                    widget: 'dxButton',
                    options: {
                        icon: 'fa fa-cogs',
                        onClick: function () {
                            modalShow(cModalSettingSvn);
                        }
                    }
                }
            );
        },
    });

    //Added by WEB-SA23-0049#1
    self.filterDataGridAutoUpdate = function () {
        dataGrid.clearFilter('dataSource');
        var isPos = self.valSelectProduct().includes(products.cSmilePos);
        var isDining = self.valSelectProduct().includes(products.cSmileDining);
        var isEgiftCard = self.valSelectProduct().includes(products.cSmileEgiftCard);
        var isOnTable = self.valSelectProduct().includes(products.cSmileContactless);
        var isThirdPartyIntegrations = self.valSelectProduct().includes(products.cSmileThirdPartyIntegrations);
        var isKisok = self.valSelectProduct().includes(products.cSmileKiosk);
        var isDeliveryService = self.valSelectProduct().includes(products.cSmileDeliveryService);
        var filterPos = [];
        var filterDining = [];
        var filterEgiftCard = [];
        var filterOnTable = [];
        var filterThirdPartyIntegrations = [];
        var filterKiosk = [];
        var filterDeliveryService = [];
        var filterMode = 'contains';
        if (isPos) {
            filterPos = ['productId', filterMode, products.cSmilePos];
        }
        if (isDining) {
            filterDining = ['productId', filterMode, products.cSmileDining];
        }
        if (isEgiftCard) {
            filterEgiftCard = ['productId', filterMode, products.cSmileEgiftCard];
        }
        if (isOnTable) {
            filterOnTable = ['productId', filterMode, products.cSmileContactless];
        }
        if (isThirdPartyIntegrations) {
            filterThirdPartyIntegrations = ['productId', filterMode, products.cSmileThirdPartyIntegrations];
        }
        if (isKisok) {
            filterKiosk = ['productId', filterMode, products.cSmileKiosk];
        }
        if (isDeliveryService) {
            filterDeliveryService = ['!', ['dispatchTypeId', '=', parseInt(cDispatchType_None)]];
        }

        var filterStatus = [];
        if (self.valueFilter() === cProcessStatusFinished) {
            filterStatus = ['status', 'contains', cProcessStatusFinished];
        } else if (self.valueFilter() === cProcessStatusFailed) {
            filterStatus = [['status', 'contains', cProcessStatusFailed], 'or', ['status', 'contains', cProcessStatusNotAvailable]];
        } else if (self.valueFilter() === cProcessStatusUpdating) {
            filterStatus = [['!', ['status', '=', null]], 'and', ['!', ['status', '=', '']], 'and', ['!', ['status', 'contains', cProcessStatusFinished]], 'and', ['!', ['status', 'contains', cProcessStatusFailed]], 'and', ['!', ['status', 'contains', cProcessStatusNotAvailable]]];
        } else {
            filterStatus = [['status', '=', null], 'or', ['status', '=', ''], 'or', ['!', ['status', '=', null]], 'or', ['!', ['status', '=', '']]];
        }

        dataGrid.filter([filterPos, 'or', filterDining, 'or', filterEgiftCard, 'or', filterOnTable, 'or', filterThirdPartyIntegrations, 'or', filterKiosk, 'or', filterDeliveryService], 'and', filterStatus);
        dataGrid.refresh();
    };

    self.resetFilterDataGridAutoUpdate = function () {
        self.valueFilter('All');
        self.valSelectProduct([products.cSmilePos, products.cSmileDining, products.cSmileEgiftCard, products.cSmileContactless, products.cSmileThirdPartyIntegrations, products.cSmileKiosk, products.cSmileDeliveryService]);
    };
    //End Added by WEB-SA23-0049#1
}
//End Added by SMILEDINING-SA22-0017

//Added by SMILEDINING-SA22-0022
function DeliveryBillingViewModel() {
    var self = this;
    var dataGrid; //Added and End by WEB-SA23-0013#1
    self.data = ko.observableArray([]);
    self.dataModal = new DataDeliveryBillingViewModel();
    self.dataSendEmailModal = new DataDeliveryBillingSendEmailViewModel();
    self.dataDownloadExcelModal = new DataDeliveryBillingDownloadExcelViewModel(); //Added and End by WEB-SA22-0071
    self.dataConvertFileModal = new DataDeliveryBillingConvertFileViewModel(); //Added and End by WEB-SA23-0049
    //Added by WEB-SA23-0013#4
    self.selectMonth = ko.observable(moment(getPrevMonth(new Date()), 'L').format('L')); 
    self.isCurrentMonth = ko.observable(checkCurrentMonth(self.selectMonth()));
    self.selectMonthName = ko.pureComputed(function () {
        var monthName = moment(self.selectMonth(), 'L').format('MMMM');
        var year = moment(self.selectMonth(), 'L').format('YYYY');
        return `${monthName} ${year}`;
    });
    //End Added by WEB-SA23-0013#4
    self.dataSourceFilter = ko.observableArray([]);
    //Modified by WEB-SA23-0013#1
    //self.checkDataSourceFilter = function () { 
    //    if (self.data().length > 0) {
    //        var dispatchTypeIdArr = [];
    //        dispatchTypeIdArr.push(_.first(self.data()).dispatchTypeId());
    //        _.forEach(self.data(), function (item) {
    //            if (dispatchTypeIdArr.indexOf(item.dispatchTypeId()) == -1) {
    //                dispatchTypeIdArr.push(item.dispatchTypeId());
    //            }
    //        });
    //        _.forEach(dispatchTypeIdArr, function (value) { 
    //            //Modified by SMILEDINING-SA22-0022#1
    //            //var dispatchTypeIdString = value.toString();
    //            //var obj = {
    //            //    text: checkDispatchTypeName(dispatchTypeIdString),
    //            //    value: ['dispatchTypeId', '=', dispatchTypeIdString]
    //            //}
    //            //End Modified by SMILEDINING-SA22-0022#1
    //            //Added by SMILEDINING-SA22-0022#1
    //            var obj = {
    //                text: checkDispatchTypeName(value),
    //                value: ['dispatchTypeId', '=', value]
    //            }
    //            //End Added by SMILEDINING-SA22-0022#1
    //            self.dataSourceFilter.push(obj);
    //        });
    //    } 
    //};
    //End Modified by WEB-SA23-0013#1
    //Added by WEB-SA23-0013#1
    self.valSelectDispatchType = ko.observable('0');
    self.selectDispatchTypeStore = new DevExpress.data.ArrayStore({
        key: 'id',
        data: [{ id: '0', name: 'All Delivery By' }],
    });
    //End Added by WEB-SA23-0013#1

    self.dataGridOptions = ko.observable({
        //Added by WEB-SA23-0013#1
        onInitialized: function (e) {
            dataGrid = e.component;
        },
        //End Added by WEB-SA23-0013#1
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
            visible: true
        },
        filterRow: { visible: true },
        allowColumnReordering: true,
        columnAutoWidth: true,
        selection: {
            mode: 'multiple',
            allowSelectAll: true,
            showCheckBoxesMode: "always"
        },
        columns: [
            { dataField: 'domainId', caption: 'ID', alignment: 'center', width: '120px', allowHeaderFiltering: false },
            { dataField: 'domainDesc', caption: 'Shop Name', alignment: 'center', cssClass: 'left', sortOrder: 'asc', allowHeaderFiltering: false },
            //Added by WEB-SA23-0013#4
            { dataField: 'address', caption: 'Address', alignment: 'center', cssClass: 'left', width: '500px', allowHeaderFiltering: false },
            { dataField: 'state', caption: 'State', alignment: 'center', cssClass: 'left', width: '90px', allowHeaderFiltering: false }, //Added and End by WEB-SA23-0013#8
            { dataField: 'postal', caption: 'Postal', alignment: 'center', cssClass: 'left', width: '120px', allowHeaderFiltering: false },
            //End Added by WEB-SA23-0013#4
            { dataField: 'dispatchTypeId', caption: 'Delivery By', alignment: 'center', cssClass: 'left', width: '300px', allowFiltering: false, allowHeaderFiltering: false }, //Added and End by WEB-SA23-0013#1
            //Modified by WEB-SA23-0013#1
            //{ 
            //    dataField: 'dispatchTypeId', caption: 'Delivery By', alignment: 'center', cssClass: 'left', width: '300px', allowFiltering: false, allowHeaderFiltering: true,
            //    headerFilter: {
            //        //dataSource: self.dataSourceFilter() //Modified and End by SMILEDINING-SA22-0022#2
            //        //Added by SMILEDINING-SA22-0022#2
            //        dataSource: {
            //            load: function () {
            //                return self.dataSourceFilter();
            //            }
            //        }
            //        //End Added by SMILEDINING-SA22-0022#2
            //    }
            //},
            //End Modified by WEB-SA23-0013#1
            { dataField: 'active', caption: '', width: 80, alignment: 'center', allowFiltering: false, allowHeaderFiltering: false }
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
            } else if (column.dataField === 'dispatchTypeId') {
                if (!isEmpty(fieldData)) {
                    //Modified by WEB-SA23-0013#1
                    //if (fieldData == cDispatchType_Deliverect) {
                    //    fieldHtml = "<span><img src='/Content/Images/deliverect_logo.png'></span>";
                    //} else if (fieldData == cDispatchType_DoorDash) {
                    //    fieldHtml = "<span><img src='/Content/Images/doordash_logo.png'></span><span><img src='/Content/Images/deliverect_logo.png'></span><span><img src='/Content/Images/deliverect_logo.png'></span><span><img src='/Content/Images/deliverect_logo.png'></span><span><img src='/Content/Images/deliverect_logo.png'></span><span><img src='/Content/Images/deliverect_logo.png'></span>";
                    //}
                    //End Modified by WEB-SA23-0013#1
                    //Added by WEB-SA23-0013#1
                    var isDeliverect = fieldData.includes(cDispatchType_Deliverect);
                    var isDoorDash = fieldData.includes(cDispatchType_DoorDash)
                    if (isDeliverect && isDoorDash && self.valSelectDispatchType() == '0') {
                        var currentDispatchTypeId = _.first(fieldData.split(','));
                        var firstLogoName = currentDispatchTypeId == cDispatchType_Deliverect ? 'deliverect_logo.png' : 'doordash_logo.png';
                        var nextLogoName = currentDispatchTypeId != cDispatchType_Deliverect ? 'deliverect_logo.png' : 'doordash_logo.png';
                        fieldHtml = "<span><img src='/Content/Images/" + firstLogoName + "'></span><span><img src='/Content/Images/" + nextLogoName + "'></span>";
                    } else {
                        if ((isDeliverect && self.valSelectDispatchType() == '0') || (isDeliverect && self.valSelectDispatchType() == cDispatchType_Deliverect)) {
                            fieldHtml = "<span><img src='/Content/Images/deliverect_logo.png'></span>";
                        } else if ((isDoorDash && self.valSelectDispatchType() == '0') || (isDoorDash && self.valSelectDispatchType() == cDispatchType_DoorDash)) {
                            fieldHtml = "<span><img src='/Content/Images/doordash_logo.png'></span>";
                        }
                    }
                    //End Added by WEB-SA23-0013#1
                    options.cellElement.html(fieldHtml);
                }
            }
        },
        onCellClick: function (e) {
            self.dataModal.clearDataModal();
            var data = e.data;
            if (e.rowType == 'data' && e.column.dataField == 'active') {
                //self.dataSendEmailModal.data.push(data); //Modified and End by SMILEDINING-SA22-0033#1
                //Added by SMILEDINING-SA22-0033#1
                //var customer = _.first(JSON.parse(getObjFormAjax(cJsonGetEmailCustomer, data.domainId()))); //Modified and End by SMILEDINING-SA22-0033#2
                //Added by SMILEDINING-SA22-0033#2
                isLoading(true);
                setTimeout(function () { 
                    //Modified by WEB-SA23-0013#2
                    //var customers = JSON.parse(getObjFormAjax(cJsonGetEmailCustomer, data.domainId()));
                    //var emailArr = [];
                    //_.forEach(customers, function (customer) {
                    //    if (customer.ownerId == data.domainId()) {
                    //        emailArr.push(customer.email);
                    //    }
                    //});
                    //End Modified by WEB-SA23-0013#2
                    //Added by WEB-SA23-0013#2
                    var emailArr = [];
                    var customer = _.first(JSON.parse(getObjFormAjax(cJsonGetEmailCustomer, data.domainId())));
                    if (!isEmpty(customer)) {
                        if (!isEmpty(customer.email)) //Added and End by WEB-SA23-0013#3
                            emailArr = customer.email.split(',');
                    }
                    //End Added by WEB-SA23-0013#2
                //End Added by SMILEDINING-SA22-0033#2
                    var dispatchTypeId = self.valSelectDispatchType() == '0' ? _.first(data.dispatchTypeId().split(',')) ?? self.valSelectDispatchType() : self.valSelectDispatchType(); //Added and End by WEB-SA23-0013#1
                    var newData = {
                        domainName: ko.observable(data.domainName()),
                        domainDesc: ko.observable(data.domainDesc()),
                        dispatchTypeId: ko.observable(dispatchTypeId), //Added and End by WEB-SA23-0013#1
                        //dispatchTypeId: ko.observable(data.dispatchTypeId()), //Modified and End by WEB-SA23-0013#1
                        //email: ko.observable(customer.email) //Modified and End by SMILEDINING-SA22-0033#2
                        email: ko.observable(emailArr.toString()) //Added and End by SMILEDINING-SA22-0033#2
                    };
                    self.dataSendEmailModal.data.push(newData);
                    //End Added by SMILEDINING-SA22-0033#1
                    //self.dataModal.resetDateBoxMonth(false); //Added and End by SMILEDINING-SA22-0022#3 //Modified and End by WEB-SA22-0071
                    //self.dataModal.resetDateBoxMonth(false, true); //Added and End by WEB-SA22-0071 //Modified and End by WEB-SA23-0013#4
                    modalShow(cModalDeliveryBillingSendEmail);
                //Added by SMILEDINING-SA22-0033#2
                    isLoading(false); 
                },0);
                //End Added by SMILEDINING-SA22-0033#2
            } else {
                if (!isEmpty(data) && e.column.dataField != undefined) {
                    isLoading(true);
                    setTimeout(function () { 
                        //var dataDeliveryBilling = JSON.parse(getDataDeliveryBillingObjFormAjax(cJsonGetDataDeliveryBilling, data.domainId(), data.domainName(), "")); //Modified and End by SMILEDINING-SA22-0022#3
                        //var dataDeliveryBilling = JSON.parse(getDataDeliveryBillingObjFormAjax(cJsonGetDataDeliveryBilling, data.domainId(), data.domainName(), "", data.dispatchTypeId())); //Added and End by SMILEDINING-SA22-0022#3 //Modified and End by WEB-SA23-0013#1
                        //Added by WEB-SA23-0013#1
                        var dispatchTypeId = self.valSelectDispatchType() == '0' ? _.first(data.dispatchTypeId().split(',')) ?? self.valSelectDispatchType() : self.valSelectDispatchType();
                        //var dataDeliveryBilling = JSON.parse(getDataDeliveryBillingObjFormAjax(cJsonGetDataDeliveryBilling, data.domainId(), data.domainName(), "", parseInt(dispatchTypeId))); //Modified and End by WEB-SA23-0013#4
                        //End Added by WEB-SA23-0013#1
                        //Added by WEB-SA23-0013#4
                        var dataDeliveryBilling = JSON.parse(getDataDeliveryBillingObjFormAjax(cJsonGetDataDeliveryBilling, data.domainId(), data.domainName(), self.selectMonth(), parseInt(dispatchTypeId)));
                        vmViewIndex.deliveryBilling.dataModal.selectMonth(self.selectMonth());
                        //End Added by WEB-SA23-0013#4
                        DataDeliveryBillingModalViewModel(dataDeliveryBilling);
                        //self.dataModal.resetDateBoxMonth(true); //Added and End by SMILEDINING-SA22-0022#3 //Modified and End by WEB-SA22-0071
                        self.dataModal.resetDateBoxMonth(true, false); //Added and End by WEB-SA22-0071
                        self.dataModal.dataObj(data);
                        //Added by SMILEDINING-SA22-0033
                        //Modified by SMILEDINING-SA22-0033#2
                        //Added by WEB-SA23-0013#2
                        var customer = _.first(JSON.parse(getObjFormAjax(cJsonGetEmailCustomer, data.domainId())));
                        if (!isEmpty(customer)) {
                            //var emailArr = customer.email.split(','); //Modified and End by WEB-SA23-0013#3
                            var emailArr = !isEmpty(customer.email) ? customer.email.split(',') : []; //Added and End by WEB-SA23-0013#3
                            self.dataModal.emailCustomerArr(emailArr);
                        }
                        //End Added by WEB-SA23-0013#2
                        //End Modified by SMILEDINING-SA22-0033#2
                        //End Added by SMILEDINING-SA22-0033
                        //Added by SMILEDINING-SA22-0033#2
                        //Modified by WEB-SA23-0013#2
                        //var customers = JSON.parse(getObjFormAjax(cJsonGetEmailCustomer, data.domainId()));
                        //_.forEach(customers, function (customer) {
                        //    if (customer.ownerId == data.domainId()) {
                        //        self.dataModal.emailCustomerArr.push(customer.email);
                        //    }
                        //});
                        //End Modified by WEB-SA23-0013#2
                        //End by SMILEDINING-SA22-0033#2
                        modalShow(cModalDeliveryBilling);
                        //Added by WEB-SA23-0049
                        var gridDeliveryBillingModalInstance = $(`#${cGridDeliveryBillingModal}`).dxDataGrid('instance');
                        gridDeliveryBillingModalInstance.pageSize(15);
                        gridDeliveryBillingModalInstance.pageIndex(0);
                        //End Added by WEB-SA23-0049
                        isLoading(false); 
                    },0);
                }
            }
        },
        onToolbarPreparing: function (e) {
            var dataGrid = e.component;
            e.toolbarOptions.items.unshift(
                {
                    location: 'before',
                    widget: 'dxButton',
                    options: {
                        //Modified by WEB-SA23-0049
                        //text: "Clear",  
                        //icon: 'refresh',
                        //onClick() {
                        //    dataGrid.clearSelection();              
                        //},
                        //End Modified by WEB-SA23-0049
                        //Added by WEB-SA23-0049
                        text: "Convert File",  
                        icon: 'upload',
                        onClick() {
                            modalShow(cModalDeliveryBillingConvertFile);             
                        },
                        //End Added by WEB-SA23-0049
                    },
                },
                //Added by WEB-SA23-0013#4
                {
                    location: 'after',
                    widget: 'dxDateBox',
                    options: {
                        acceptCustomValue: false,
                        type: "date",
                        value: self.selectMonth(),
                        max: new Date(),
                        displayFormat: 'monthAndYear',
                        maxZoomLevel: 'year',
                        minZoomLevel: 'century',
                        width: 170,
                        onValueChanged: function (e) {
                            var value = moment(e.value).format('L');
                            if (value != self.selectMonth()) { 
                                loadingShimmer(true, cGridDeliveryBilling);
                                self.selectMonth(value);
                                self.isCurrentMonth(checkCurrentMonth(self.selectMonth()));
                                self.resetFilterDataGrid(false);
                                getDeliveryBillingObjFormAjax(cfrmDeliveryBillingGetData, value);
                            }
                        }
                    }
                },
                //End Added by WEB-SA23-0013#4
                //Added by WEB-SA23-0013#1
                {
                    location: 'after',
                    widget: 'dxSelectBox',
                    options: {
                        dataSource: self.selectDispatchTypeStore,
                        displayExpr: 'name',
                        valueExpr: 'id',
                        value: self.valSelectDispatchType,
                        placeholder: 'Select Delivery By',
                        width: 190,
                        onValueChanged: function (data) {
                            self.filterDataGrid();
                        }
                    }
                },
                //End Added by WEB-SA23-0013#1
                //Added by WEB-SA22-0071
                {
                    location: 'after',
                    widget: 'dxButton',
                    options: {
                        icon: 'fa fa-download',
                        text: 'Download',
                        disabled: self.isCurrentMonth, //Added and End by WEB-SA23-0013#4
                        onClick: function () {
                            self.dataModal.clearDataModal();
                            //Modified by WEB-SA23-0013#4
                            //Added by WEB-SA23-0013#1
                            //self.dataModal.selectMonth(getPrevMonth(new Date()));
                            //self.dataModal.dateBoxMonthMax(self.dataModal.selectMonth());
                            ////End Added by WEB-SA23-0013#1
                            //self.dataModal.resetDateBoxMonth(false, false);
                            //End Modified by WEB-SA23-0013#4
                            var rowsData = dataGrid.getSelectedRowsData();
                            if (rowsData.length > 0) {
                                var dispatchTypeIdArr = [];
                                var domainIdArr = [];
                                //dispatchTypeIdArr.push(_.first(rowsData).dispatchTypeId()); //Modified and End by WEB-SA23-0013#1
                                _.forEach(rowsData, function (item) {
                                    //Modified by WEB-SA23-0013#1
                                    //if (dispatchTypeIdArr.indexOf(item.dispatchTypeId()) == -1) {
                                    //    dispatchTypeIdArr.push(item.dispatchTypeId());
                                    //}
                                    //End Modified by WEB-SA23-0013#1
                                    //Added by WEB-SA23-0013#1
                                    if (self.valSelectDispatchType() == '0') {
                                        dispatchTypeIdArr = self.getUniqueDispatchTypeIds(item.dispatchTypeId(), dispatchTypeIdArr);
                                    } else {
                                        if (dispatchTypeIdArr.length == 0) {
                                            dispatchTypeIdArr.push(self.valSelectDispatchType());
                                        }
                                    }
                                    //End Added by WEB-SA23-0013#1
                                    domainIdArr.push(item.domainId());
                                });
                                if (dispatchTypeIdArr.length > 1) {
                                    dataGrid.clearSelection();
                                    swal(cSwal_Alert_Warning, cError_DeliveryBilling_DispatchType_Duplicate, cSwal_Icon_Warning);
                                } else {
                                    isLoading(true);
                                    setTimeout(function () {
                                        var data = [];
                                        _.forEach(rowsData, function (item) {
                                            var newItem = {
                                                domainId: ko.observable(item.domainId()),
                                                domainDesc: ko.observable(item.domainDesc()),
                                                //dispatchTypeId: ko.observable(item.dispatchTypeId()), //Modified and End by WEB-SA23-0013#1
                                                dispatchTypeId: ko.observable(_.first(dispatchTypeIdArr)), //Added and End by WEB-SA23-0013#1
                                            };
                                            data.push(newItem);
                                        });
                                        self.dataDownloadExcelModal.data(data);
                                        self.dataDownloadExcelModal.dispatchTypeId(_.first(data).dispatchTypeId());
                                        modalShow(cModalDeliveryBillingDownloadExcel);
                                        isLoading(false); 
                                    }, 0);
                                }
                            } else {
                                modalShow(cModalDeliveryBillingDownloadExcel);
                            }
                        }
                    }
                },
                //End Added by WEB-SA22-0071
                {
                    location: 'after',
                    widget: 'dxButton',
                    options: {
                        icon: 'fa fa-send',
                        text: 'Send to Email',
                        disabled: self.isCurrentMonth, //Added and End by WEB-SA23-0013#4
                        onClick: function () {
                            self.dataModal.clearDataModal();
                            //self.dataModal.resetDateBoxMonth(false); //Added and End by SMILEDINING-SA22-0022#3 //Modified and End by WEB-SA22-0071
                            //self.dataModal.resetDateBoxMonth(false, true); //Added and End by WEB-SA22-0071 //Modified and End by WEB-SA23-0013#4
                            var rowsData = dataGrid.getSelectedRowsData();
                            if (rowsData.length > 0) {
                                var dispatchTypeIdArr = [];
                                var domainIdArr = []; //Added and End by SMILEDINING-SA22-0033
                                //dispatchTypeIdArr.push(_.first(rowsData).dispatchTypeId()); //Modified and End by WEB-SA23-0013#1
                                _.forEach(rowsData, function (item) {
                                    //Modified by WEB-SA23-0013#1
                                    //if (dispatchTypeIdArr.indexOf(item.dispatchTypeId()) == -1) {
                                    //    dispatchTypeIdArr.push(item.dispatchTypeId());
                                    //}
                                    //End Modified by WEB-SA23-0013#1
                                    //Added by WEB-SA23-0013#1
                                    if (self.valSelectDispatchType() == '0') {
                                        dispatchTypeIdArr = self.getUniqueDispatchTypeIds(item.dispatchTypeId(), dispatchTypeIdArr);
                                    } else {
                                        if (dispatchTypeIdArr.length == 0) {
                                            dispatchTypeIdArr.push(self.valSelectDispatchType());
                                        }
                                    }
                                    //End Added by WEB-SA23-0013#1
                                    domainIdArr.push(item.domainId()); //Added and End by SMILEDINING-SA22-0033
                                });
                                if (dispatchTypeIdArr.length > 1) {
                                    dataGrid.clearSelection();
                                    swal(cSwal_Alert_Warning, cError_DeliveryBilling_DispatchType_Duplicate, cSwal_Icon_Warning);
                                } else {
                                    //Added by SMILEDINING-SA22-0033#2
                                    isLoading(true);
                                    setTimeout(function () {
                                    //End Added by SMILEDINING-SA22-0033#2
                                        //self.dataSendEmailModal.data(rowsData); //Modified and End by SMILEDINING-SA22-0033
                                        //Added by SMILEDINING-SA22-0033
                                        var customers = JSON.parse(getObjFormAjax(cJsonGetEmailCustomer, domainIdArr));
                                        var data = [];
                                        _.forEach(rowsData, function (item) {
                                            //Modified by SMILEDINING-SA22-0033#2
                                            //var customer = _.find(customers, function (val) {
                                            //    return val.customerCode == item.domainId();
                                            //});
                                            //if (customer != null) {
                                            //    var newItem = {
                                            //        domainName: ko.observable(item.domainName()),
                                            //        domainDesc: ko.observable(item.domainDesc()),
                                            //        dispatchTypeId: ko.observable(item.dispatchTypeId()),
                                            //        email: ko.observable(customer.email)
                                            //    };
                                            //    data.push(newItem);
                                            //}
                                            //End Modified by SMILEDINING-SA22-0033#2
                                            //Added by SMILEDINING-SA22-0033#2
                                            var emailArr = [];
                                            //Added by WEB-SA23-0013#2
                                            var customer = _.find(customers, function (val) {
                                                return val.customerCode == item.domainId();
                                            });
                                            if (!isEmpty(customer)) {
                                                if (!isEmpty(customer.email)) //Added and End by WEB-SA23-0013#3
                                                    emailArr = customer.email.split(',');
                                            }
                                            //End Added by WEB-SA23-0013#2
                                            //Modified by WEB-SA23-0013#2
                                            //_.forEach(customers, function (customer) {
                                            //    if (customer.ownerId == item.domainId()) {
                                            //        emailArr.push(customer.email);
                                            //    }
                                            //});
                                            //End Modified by WEB-SA23-0013#2
                                            var newItem = {
                                                domainName: ko.observable(item.domainName()),
                                                domainDesc: ko.observable(item.domainDesc()),
                                                //dispatchTypeId: ko.observable(item.dispatchTypeId()), //Modified and End by WEB-SA23-0013#1
                                                dispatchTypeId: ko.observable(_.first(dispatchTypeIdArr)), //Added and End by WEB-SA23-0013#1
                                                email: ko.observable(emailArr.toString())
                                            };
                                            data.push(newItem);
                                            //End Added by SMILEDINING-SA22-0033#2
                                        });
                                        self.dataSendEmailModal.data(data);
                                        //End Added by SMILEDINING-SA22-0033
                                        modalShow(cModalDeliveryBillingSendEmail);
                                    //Added by SMILEDINING-SA22-0033#2
                                        isLoading(false); 
                                    }, 0);
                                    //End Added by SMILEDINING-SA22-0033#2
                                }
                            } else {
                                modalShow(cModalDeliveryBillingSendEmail);
                            }
                        }
                    }
                },
            );
        }
    });

    //Added by WEB-SA23-0013#1
    self.filterDataGrid = function () {    
        if (self.valSelectDispatchType() == cDispatchType_Deliverect) {
            dataGrid.filter(['dispatchTypeId', 'contains', cDispatchType_Deliverect]);
        } else if (self.valSelectDispatchType() == cDispatchType_DoorDash) {
            dataGrid.filter(['dispatchTypeId', 'contains', cDispatchType_DoorDash]);
        } else {
            dataGrid.clearFilter('dataSource');
        }
        dataGrid.refresh();
    };

    self.getUniqueDispatchTypeIds = function (dispatchTypeId, dispatchTypeIdList) {
        var dispatchTypeIds = dispatchTypeIdList;
        if (dispatchTypeId.includes(cDispatchType_Deliverect) && dispatchTypeIds.indexOf(cDispatchType_Deliverect) == -1) {
            dispatchTypeIds.push(cDispatchType_Deliverect);
        }
        if (dispatchTypeId.includes(cDispatchType_DoorDash) && dispatchTypeIds.indexOf(cDispatchType_DoorDash) == -1) {
            dispatchTypeIds.push(cDispatchType_DoorDash);
        }
        return dispatchTypeIds;
    }
    //End Added by WEB-SA23-0013#1
    //Added by WEB-SA23-0013#4
    self.resetFilterDataGrid = function (isClickMenu) {
        self.selectDispatchTypeStore.clear();
        self.selectDispatchTypeStore.insert({ id: '0', name: 'All Delivery By' });
        self.valSelectDispatchType('0');
        if (isClickMenu) {
            self.selectMonth(moment(getPrevMonth(new Date()), 'L').format('L'));
            self.isCurrentMonth(checkCurrentMonth(self.selectMonth()));
            var dataDateBox = $(`.${cGridDeliveryBilling} .dx-datebox`).dxDateBox('instance');
            dataDateBox.option({ value: self.selectMonth() });
        }
    };
    //Added by WEB-SA23-0013#5
    self.checkDataSourceSelectDispatchType = function (data) {
        var dispatchTypeIds = [];
        _.forEach(data, function (item) {
            dispatchTypeIds = vmViewIndex.deliveryBilling.getUniqueDispatchTypeIds(item.dispatchTypeId(), dispatchTypeIds);
        });
        dispatchTypeIds.sort(function(a, b){return parseInt(a) - parseInt(b)});
        _.forEach(dispatchTypeIds, function (item) {
            if (item == cDispatchType_Deliverect) {
                vmViewIndex.deliveryBilling.selectDispatchTypeStore.insert({ id: cDispatchType_Deliverect, name: cDispatchType_Deliverect_Name });
            }
            if (item == cDispatchType_DoorDash) {
                vmViewIndex.deliveryBilling.selectDispatchTypeStore.insert({ id: cDispatchType_DoorDash, name: cDispatchType_DoorDash_Name });
            }
        });
        var dataSelectBox = $(`.${cGridDeliveryBilling} .dx-selectbox`).dxSelectBox('instance');
        dataSelectBox.option({ dataSource: vmViewIndex.deliveryBilling.selectDispatchTypeStore });
    }
    //End Added by WEB-SA23-0013#5

    function getDeliveryBillingObjFormAjax(jsonObj, date) {
        var objUrl = new ObjUrl(jsonObj);
        var requestUrl = objUrl.getUrlFromJson();
        var passData = {
            date: date,
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
                ko.mapping.fromJSON(result.obj, {}, vmViewIndex.deliveryBilling.data);
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
            } else {
                swal(cSwal_Alert_Error, result.message, cSwal_Icon_Error);
                vmViewIndex.deliveryBilling.data([]);
            }
            self.filterDataGrid();
            loadingShimmer(false, cGridDeliveryBilling);
        })
        .fail(function (result) {
            swal(cSwal_Alert_Error, result.message, cSwal_Icon_Error);
            vmViewIndex.deliveryBilling.data([]);
            self.filterDataGrid();
            loadingShimmer(false, cGridDeliveryBilling);
        });
    };
    //End Added by WEB-SA23-0013#4
};
//End Added by SMILEDINING-SA22-0022

//Added by WEB-SA23-0056
function ReportViewModel() {
    var self = this;
    //Added by WEB-SA24-0002
    self.valSelectReport = ko.observable(reports.cServiceFee);

    self.selectReportStore = new DevExpress.data.ArrayStore({
        key: 'id',
        data: [
            { id: reports.cServiceFee, name: reports.mapName[reports.cServiceFee].name },
            { id: reports.cOrderPaper, name: reports.mapName[reports.cOrderPaper].name },
        ],
    });

    var suspendValueChagned;
    self.selectReport = ko.observable({
        dataSource: self.selectReportStore,
        displayExpr: 'name',
        valueExpr: 'id',
        value: self.valSelectReport,
        placeholder: 'Select Report',
        width: 170,
        onValueChanged: function (e) {
            if (suspendValueChagned) {  
                suspendValueChagned = false;  
                return;  
            }  
            var value = e.value;
            if (value == reports.cServiceFee) {
                loadingShimmer(true, cGridRpServiceFee);
                self.resetFilterDataGridRpServiceFee();
                getRpServiceFeeObjFormAjax(cfrmRpServiceFeeGetData, self.selectMonthRpServiceFee());
            } else if (value == reports.cOrderPaper) {
                loadingShimmer(true, cGridRpOrderPaper);
                self.resetFilterDataGridRpOrderPaper();
                getRpOrderPaperObjFormAjax(cfrmRpOrderPaperGetData, self.selectMonthRpOrderPaper());
            }
            suspendValueChagned = true;
        }
    });
    //End Added by WEB-SA24-0002

    // Service Fee Report
    var dataGridRpServiceFee;
    self.dataRpServiceFee = ko.observableArray([]);
    self.valSelectProductRpServiceFee = ko.observable(products.cSmileDining);
    self.selectMonthRpServiceFee = ko.observable(moment(getPrevMonth(new Date()), 'L').format('L'));
    self.isCurrentMonthRpServiceFee = ko.observable(false);
    self.domainIdRpServiceFee = ko.observable('');    

    self.selectProductStoreRpServiceFee = new DevExpress.data.ArrayStore({
        key: 'id',
        data: [
            { id: products.cSmileDining, name: products.mapName[products.cSmileDining].name },
            { id: products.cSmileContactless, name: products.mapName[products.cSmileContactless].name },
        ],
    });

    self.dxLookupShopNameStoreRpServiceFee = new DevExpress.data.ArrayStore({
        key: 'domainId',
        data: [],
    });

    self.selectProductRpServiceFee = ko.observable({
        dataSource: self.selectProductStoreRpServiceFee,
        displayExpr: 'name',
        valueExpr: 'id',
        value: self.valSelectProductRpServiceFee,
        placeholder: 'Select Product',
        width: 170,
        onValueChanged: function (e) {
            self.filterDataGridRpServiceFee();
        }
    });

    self.dateBoxMonthRpServiceFee = ko.observable({
        acceptCustomValue: false,
        type: 'date',
        value: self.selectMonthRpServiceFee(),
        max: new Date(),
        displayFormat: 'monthAndYear',
        minZoomLevel: "century",
        maxZoomLevel: "year",
        width: 170,
        onValueChanged: function (e) {
            var value = moment(e.value).format('L');
            if (value != self.selectMonthRpServiceFee()) {
                loadingShimmer(true, cGridRpServiceFee);    
                self.selectMonthRpServiceFee(value);
                self.valSelectProductRpServiceFee(products.cSmileDining);
                self.domainIdRpServiceFee('');
                self.isCurrentMonthRpServiceFee(checkCurrentMonth(value));
                if (self.isCurrentMonthRpServiceFee()) {
                    self.dataRpServiceFee([]);
                    setTimeout(function () {
                        refreshGrid(cGridRpServiceFee);
                        loadingShimmer(false, cGridRpServiceFee);
                    }, 1000);
                } else {
                    getRpServiceFeeObjFormAjax(cfrmRpServiceFeeGetData, value);
                }
            }
        }
    });

    self.dxLookupShopNameRpServiceFee = ko.observable({
        dataSource: self.dxLookupShopNameStoreRpServiceFee,
        displayExpr: 'domainDesc',
        valueExpr: 'domainId',
        value: self.domainIdRpServiceFee,
        placeholder: 'Select Shop Name',
        closeOnOutsideClick: true,
        showPopupTitle: false,
        showClearButton: true,
        width: 300,
        onValueChanged: function (e) {
            self.domainIdRpServiceFee(e.value);
        }
    });

    self.dataGridOptionsRpServiceFee = ko.observable({
        onInitialized: function (e) {
            dataGridRpServiceFee = e.component;
        },
        dataSource: self.dataRpServiceFee,
        showColumnLines: true,
        showRowLines: true,
        showBorders: true,
        hoverStateEnabled: true,
        columnChooser: {
            enabled: true,
            mode: 'select'
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
            { dataField: 'id', caption: 'ID', alignment: 'center', width: '120px' },
            { dataField: 'name', caption: 'Shop Name', alignment: 'center', cssClass: 'left', sortOrder: 'asc' },
            { dataField: 'address', caption: 'Address', alignment: 'center', cssClass: 'left', }, //Added and End by WEB-SA23-0056#4
            { dataField: 'state', caption: 'State', alignment: 'center', cssClass: 'left', },
            { dataField: 'taxRate', caption: 'Tax Rate (%)', alignment: 'center', cssClass: 'center', },
            { dataField: 'sumServiceFeeOnCredit', caption: 'Service Fee On Credit (Included Tax)', alignment: 'center', cssClass: 'right', format: 'currency', precision: 2, },
            { dataField: 'sumServiceFeeOnCreditExcludedTax', caption: 'Service Fee On Credit (Excluded Tax)', alignment: 'center', cssClass: 'right', format: 'currency', precision: 2, },
            { dataField: 'taxAmount', caption: 'Tax Amount', alignment: 'center', cssClass: 'right', format: 'currency', precision: 2, },
            { dataField: 'stTaxRate', caption: 'Tax Rate (%)', alignment: 'center', cssClass: 'center', },
            { dataField: 'stSumServiceFeeOnCredit', caption: 'Service Fee On Credit OnTable (Included Tax)', alignment: 'center', cssClass: 'right', format: 'currency', precision: 2, },
            { dataField: 'stSumServiceFeeOnCreditExcludedTax', caption: 'Service Fee On Credit OnTable (Excluded Tax)', alignment: 'center', cssClass: 'right', format: 'currency', precision: 2, },
            { dataField: 'stTaxAmount', caption: 'Tax Amount OnTable', alignment: 'center', cssClass: 'right', format: 'currency', precision: 2, },
        ],
        export: {
            enabled: true,
            fileName: 'Service_Fee_Report',
            allowExportSelectedData: false
        },
        summary: {
            totalItems: [
                {
                    column: 'sumServiceFeeOnCredit',
                    summaryType: 'sum',
                    valueFormat: 'currency',
                    precision: 2,
                },
                {
                    column: 'sumServiceFeeOnCreditExcludedTax',
                    summaryType: 'sum',
                    valueFormat: 'currency',
                    precision: 2,
                },
                {
                    column: 'taxAmount',
                    summaryType: 'sum',
                    valueFormat: 'currency',
                    precision: 2,
                },
                {
                    column: 'stSumServiceFeeOnCredit',
                    summaryType: 'sum',
                    valueFormat: 'currency',
                    precision: 2,
                },
                {
                    column: 'stSumServiceFeeOnCreditExcludedTax',
                    summaryType: 'sum',
                    valueFormat: 'currency',
                    precision: 2,
                },
                {
                    column: 'stTaxAmount',
                    summaryType: 'sum',
                    valueFormat: 'currency',
                    precision: 2,
                },
            ]
        },
        onRowPrepared: function (e) {
            e.rowElement.addClass('datagrid-summary-state-hover');
        },
    });

    self.clickSearchRpServiceFee = function () {
        var objValidate = new ObjValidateForm(cfrmRpServiceFeeGetData, null);
        objValidate.verifyData();
        if (objValidate.error.length > 0) {
            if (objValidate.showAlert) {
                var messageError = convertArrToString(objValidate.error);
                swal(cSwal_Alert_Error, replaceNewLineToBr(messageError), cSwal_Icon_Error);
            }
            return false;
        }
        addSpinButton(cfrmRpServiceFeeSearch);
        loadingShimmer(true, cGridRpServiceFee);
        //self.valSelectProductRpServiceFee(products.cSmileDining); //Modified and End by WEB-SA23-0056#4
        getRpServiceFeeObjFormAjax(cfrmRpServiceFeeGetData, self.selectMonthRpServiceFee(), self.domainIdRpServiceFee());
    };

    self.filterDataGridRpServiceFee = function () {
        if (self.valSelectProductRpServiceFee() == products.cSmileDining) {
            dataGridRpServiceFee.filter(['productId', 'contains', products.cSmileDining]);
            self.setColumnVisibleRpServiceFee(true, false);
        } else if (self.valSelectProductRpServiceFee() == products.cSmileContactless) {
            dataGridRpServiceFee.filter(['productId', 'contains', products.cSmileContactless]);
            self.setColumnVisibleRpServiceFee(false, true);
        }
        dataGridRpServiceFee.refresh();
    };

    self.setColumnVisibleRpServiceFee = function (visible, stVisible) {
        dataGridRpServiceFee.columnOption('taxRate', 'visible', visible);
        dataGridRpServiceFee.columnOption('sumServiceFeeOnCredit', 'visible', visible);
        dataGridRpServiceFee.columnOption('sumServiceFeeOnCreditExcludedTax', 'visible', visible);
        dataGridRpServiceFee.columnOption('taxAmount', 'visible', visible);
        dataGridRpServiceFee.columnOption('stTaxRate', 'visible', stVisible);
        dataGridRpServiceFee.columnOption('stSumServiceFeeOnCredit', 'visible', stVisible);
        dataGridRpServiceFee.columnOption('stSumServiceFeeOnCreditExcludedTax', 'visible', stVisible);
        dataGridRpServiceFee.columnOption('stTaxAmount', 'visible', stVisible);
    };

    self.resetFilterDataGridRpServiceFee = function () {
        self.valSelectProductRpServiceFee(products.cSmileDining);
        self.selectMonthRpServiceFee(moment(getPrevMonth(new Date()), 'L').format('L'));
        self.isCurrentMonthRpServiceFee(checkCurrentMonth(self.selectMonthRpServiceFee()));
        var dataDateBox = $(".selectMonthRpServiceFeeSearch").dxDateBox('instance');
        dataDateBox.option({ value: self.selectMonthRpServiceFee() });
    };

    //Added by WEB-SA24-0002
    // Order Paper Report
    var dataGridRpOrderPaper;
    self.dataRpOrderPaper = ko.observableArray([]);
    self.dataRpOrderPaperModal = new DataRpOrderPaperViewModel();
    self.dataRpOrderPaperSettingModal = new DataRpOrderPaperSettingViewModel();
    self.selectMonthRpOrderPaper = ko.observable(moment(new Date()).format('L'));

    self.dateBoxMonthRpOrderPaper = ko.observable({
        acceptCustomValue: false,
        type: 'date',
        value: self.selectMonthRpOrderPaper(),
        max: new Date(),
        displayFormat: 'monthAndYear',
        minZoomLevel: "century",
        maxZoomLevel: "year",
        width: 170,
        onValueChanged: function (e) {
            var value = moment(e.value).format('L');
            if (value != self.selectMonthRpOrderPaper()) {
                loadingShimmer(true, cGridRpOrderPaper);
                self.selectMonthRpOrderPaper(value);
                getRpOrderPaperObjFormAjax(cfrmRpOrderPaperGetData, value);
            }
        }
    });

    self.dataGridOptionsRpOrderPaper = ko.observable({
        onInitialized: function (e) {
            dataGridRpOrderPaper = e.component;
        },
        dataSource: self.dataRpOrderPaper,
        showColumnLines: true,
        showRowLines: true,
        showBorders: true,
        hoverStateEnabled: true,
        columnChooser: {
            enabled: true,
            mode: 'select'
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
            visible: true
        },
        filterRow: { visible: true },
        allowColumnReordering: true,
        columnAutoWidth: true,
        columns: [],
        export: {
            enabled: true,
            fileName: 'Order_Paper_Report',
            allowExportSelectedData: false
        },
        onCellClick: function (e) {
            var data = e.data;
            if (!isEmpty(data) && e.column.dataField != undefined) {
                isLoading(true);
                setTimeout(function () {
                    vmViewIndex.report.dataRpOrderPaperModal.domainId(data.id());
                    vmViewIndex.report.dataRpOrderPaperModal.domainName(data.domainName());
                    vmViewIndex.report.dataRpOrderPaperModal.shopName(data.name());
                    vmViewIndex.report.dataRpOrderPaperModal.shopAddress(data.address());
                    var key = {
                        domainId: data.id(),
                        domainName: data.domainName(),
                        date: self.selectMonthRpOrderPaper(),
                    };
                    var dataRpOrderPaperByDomain = JSON.parse(getObjFormAjaxByJson(cJsonGetDataRpOrderPaperByDomain, JSON.stringify(key)));
                    DataRpOrderPaperModalViewModel(dataRpOrderPaperByDomain);
                    vmViewIndex.report.dataRpOrderPaperModal.selectMonthHistory(self.selectMonthRpOrderPaper());
                    vmViewIndex.report.dataRpOrderPaperModal.resetDateBoxMonthHistory();
                    modalShow(cModalRpOrderPaper);                   
                    isLoading(false);
                    $('#tabHistory').click();
                }, 0);
            }
        },
        onToolbarPreparing: function (e) {
            e.toolbarOptions.items.unshift( 
                {
                    location: 'after',
                    widget: 'dxSelectBox',
                    options: self.selectReport
                },
                {
                    location: 'after',
                    widget: 'dxDateBox',
                    options: self.dateBoxMonthRpOrderPaper
                },
                {
                    location: 'after',
                    widget: 'dxButton',
                    options: {
                        icon: 'fa fa-cogs',
                        text: 'Setting',
                        onClick: function () {
                            isLoading(true);
                            setTimeout(function () {
                                var dataRpOrderPaperSetting = JSON.parse(getObjFormAjaxByJson(cJsonGetDataRpOrderPaperSetting, ''));
                                self.dataRpOrderPaperSettingModal.countdownDays(dataRpOrderPaperSetting.countdownDays);
                                self.dataRpOrderPaperSettingModal.dataSettingCondition([]);
                                _.forEach(dataRpOrderPaperSetting.maxOrderQtyPaymentRanges, function (item) {
                                    self.dataRpOrderPaperSettingModal.dataSettingCondition.push(new DataRpOrderPaperSettingConditionViewModel(item));
                                });
                                modalShow(cModalRpOrderPaperSetting);
                                isLoading(false);
                            }, 0);
                        }
                    }
                },
            );
        },
    });

    self.filterDataGridRpOrderPaper = function () {
        dataGridRpOrderPaper.refresh();
    };

    self.resetFilterDataGridRpOrderPaper = function () {
        self.selectMonthRpOrderPaper(moment(new Date()).format('L'));
        var dataDateBox = $(`.${cGridRpOrderPaper} .dx-datebox`).dxDateBox('instance');
        dataDateBox.option({ value: self.selectMonthRpOrderPaper() });
    };

    self.setColumnOptionsRpOrderPaper = function (orderPaperTypeList = []) {
        dataGridRpOrderPaper.option('columns', []);  
        var columns = [
            {
                dataField: '', caption: '#', width: 80, alignment: 'center',
                cellTemplate: function (container, options) {
                    container.text(dataGrid.pageIndex() * dataGrid.pageSize() + options.rowIndex + 1);
                }
            },
            { dataField: 'id', caption: 'Shop ID', alignment: 'center', width: '120px' },
            { dataField: 'name', caption: 'Shop Name', alignment: 'center', cssClass: 'left', sortOrder: 'asc' },
            { dataField: 'address', caption: 'Address', alignment: 'center', cssClass: 'left', },
            { dataField: 'state', caption: 'State', alignment: 'center', cssClass: 'left', },
            { dataField: 'postal', caption: 'Postal', alignment: 'center', cssClass: 'left', },
        ];
        _.forEach(orderPaperTypeList, function (item) {
            var columnOptions = { 
                dataField: item.key, caption: item.name, alignment: 'center', cssClass: 'center',
                customizeText: function(cellInfo) {
                    return numberWithCommas(cellInfo.value, false);
                }
            }
            columns.push(columnOptions);
        });
        var columnOrderOptions = {
            dataField: 'count', caption: 'Order', alignment: 'center', cssClass: 'center',
            customizeText: function (cellInfo) {
                return numberWithCommas(cellInfo.value, false);
            }
        };
        columns.push(columnOrderOptions);
        dataGridRpOrderPaper.option('columns', columns);  
    };
    //End Added by WEB-SA24-0002

    function getRpServiceFeeObjFormAjax(jsonObj, date, domainId) {
        var objUrl = new ObjUrl(jsonObj);
        var requestUrl = objUrl.getUrlFromJson();
        var passData = {
            time: date,
            domainId: domainId,
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
            removeSpinButton(cfrmRpServiceFeeSearch);
            if (result.status) {
                rpServiceFee = result.obj;
                ko.mapping.fromJSON(rpServiceFee, {}, self.dataRpServiceFee);
            } else {
                swal(cSwal_Alert_Error, result.message, cSwal_Icon_Error);
                self.dataRpServiceFee([]); 
            }
            self.filterDataGridRpServiceFee();
            loadingShimmer(false, cGridRpServiceFee);
        })
        .fail(function (result) {
            swal(cSwal_Alert_Error, result.message, cSwal_Icon_Error);
            removeSpinButton(cfrmRpServiceFeeSearch);
            self.dataRpServiceFee([]);
            self.filterDataGridRpServiceFee();
            loadingShimmer(false, cGridRpServiceFee);    
        });
    };

    //Added by WEB-SA24-0002
    function getRpOrderPaperObjFormAjax(jsonObj, date) {
        var objUrl = new ObjUrl(jsonObj);
        var requestUrl = objUrl.getUrlFromJson();
        var passData = {
            date: date,
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
                var rpOrderPaperData = JSON.parse(result.obj);
                self.setColumnOptionsRpOrderPaper(rpOrderPaperData.orderPaperTypeList);
                ko.mapping.fromJS(rpOrderPaperData.rpOrderPaperList, {}, self.dataRpOrderPaper);
            } else {
                swal(cSwal_Alert_Error, result.message, cSwal_Icon_Error);
                self.setColumnOptionsRpOrderPaper();
                self.dataRpOrderPaper([]); 
            }
            self.filterDataGridRpOrderPaper();   
            loadingShimmer(false, cGridRpOrderPaper);
        })
        .fail(function (result) {
            swal(cSwal_Alert_Error, result.message, cSwal_Icon_Error);
            self.setColumnOptionsRpOrderPaper();
            self.dataRpOrderPaper([]); 
            self.filterDataGridRpOrderPaper();
            loadingShimmer(false, cGridRpOrderPaper);
        });
    };
    //End Added by WEB-SA24-0002
};
//End Added by WEB-SA23-0056

//Added by WEB-SA24-0029
function PersonnelViewModel() {
    var self = this;
    var dataGrid;    
    self.dataPersonnelModal = new DataPersonnelViewModel();
    self.dataSharedInvitationModal = new DataPersonnelSharedInvitationViewModel();
    self.dataGroupRoleModal = new DataPersonnelGroupRoleViewModel();
    self.dataRoleModal = new DataPersonnelRoleViewModel();
    self.dataOwnerRoleModal = new DataPersonnelOwnerRoleViewModel();
    self.fetchedProfiles = ko.observableArray([]);
    self.fetchedWebPagesRoles = ko.observableArray([]);
    self.fetchedWebPagesUsersInRoles = ko.observableArray([]);
    self.fetchedProductPermissions = ko.observableArray([]);
    self.fetchedProductRolePermissions = ko.observableArray([]);
    self.fetchedProductUserPermissions = ko.observableArray([]);
    self.selectCustomerIds = ko.observableArray([]);

    self.permissionsByProduct = {
        productId: ko.observable(0),
        productName: ko.observable(''),
        permissions: ko.observableArray([])
    };

    self.dataGridOptions = ko.observable({
        onInitialized: function (e) {
            dataGrid = e.component;
        },
        dataSource: self.fetchedProfiles,
        showColumnLines: true,
        showRowLines: true,
        showBorders: true,
        hoverStateEnabled: true,
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
        selection: {
            mode: 'multiple',
            allowSelectAll: false,
            showCheckBoxesMode: "always"
        },
        columns: [
            { dataField: 'firstName', caption: 'First Name', alignment: 'center', cssClass: 'left', sortOrder: 'asc' },
            { dataField: 'lastName', caption: 'Last Name', alignment: 'center', cssClass: 'left' },
            { dataField: 'email', caption: 'Email', alignment: 'center', cssClass: 'left' },
            { 
                dataField: 'roleIds', caption: 'Role', alignment: 'center', cssClass: 'left', 
                cellTemplate: function (container, options) {
                    var fieldHtml = '';
                    ko.utils.arrayForEach(options.data.roleIds(), function (roleId) {
                        var firstWebPagesRoles = ko.utils.arrayFirst(vmViewIndex.personnel.fetchedWebPagesRoles(), function (item) {
                            return item.roleId() == roleId;
                        });
                        if (firstWebPagesRoles != null) {
                            fieldHtml += `<span style="background-color:${firstWebPagesRoles.hexColor()}; border-radius: 15px; padding: 6px 14px; margin-right: 6px">${firstWebPagesRoles.roleName()}</span>`;
                        }
                    });
                    container.html(fieldHtml);
                },
                calculateFilterExpression: function (filterValue, selectedFilterOperation) {
                    if (filterValue) { 
                        var roleIds = [];
                        var filterExpression = [['roleIds', 'contains', filterValue]];
                        ko.utils.arrayForEach(vmViewIndex.personnel.fetchedWebPagesRoles(), function (item) { 
                            if (item.roleName().toLowerCase().includes(filterValue.toLowerCase())) {
                                roleIds.push(item.roleId());
                                if (filterExpression.length > 0) {
                                    filterExpression.push('or');
                                }
                                filterExpression.push(['roleIds', 'contains', item.roleId()]);
                            }
                        });
                        return filterExpression;
                    }
                    return this.defaultCalculateFilterExpression.apply(this, arguments);
                },
            },
            { dataField: 'createDate', caption: 'CreateDate', alignment: 'center', cssClass: 'left', dataType: 'date', format: "yyyy-MM-dd" },
        ],
        onCellClick: function (e) {
            var data = e.data;
            if (!isEmpty(data) && e.column.dataField != undefined) {
                isLoading(true);
                setTimeout(function () {
                    dataGrid.clearSelection();      
                    self.dataPersonnelModal.resetData();
                    self.dataPersonnelModal.action(cStatusUpdate);
                    self.dataPersonnelModal.customerId(data.customerId());
                    self.dataPersonnelModal.firstName(data.firstName());
                    self.dataPersonnelModal.lastName(data.lastName());
                    self.dataPersonnelModal.email(data.email());                    
                    self.dataPersonnelModal.roleIds(self.getRoleIdsByCustomerId(data.customerId()));
                    self.dataPersonnelModal.productPermissionIdsByRole(self.getProductPermissionIdsByRoleIds(self.dataPersonnelModal.roleIds()));
                    self.dataPersonnelModal.productPermissionIdsByUser(self.getProductPermissionIdsByCustomerId(data.customerId()));
                    self.dataPersonnelModal.productPermissionIds(_.concat(self.dataPersonnelModal.productPermissionIdsByRole(), self.dataPersonnelModal.productPermissionIdsByUser()));
                    
                    modalShow(cModalPersonnel);  
                    self.selectInitialProductPermissionTab(cModalPersonnel);
                    isLoading(false);
                }, 0);
            }
        },
        onSelectionChanged: function (e) {            
            var currentSelectedRowKeys = e.currentSelectedRowKeys;            
            if (!isEmpty(currentSelectedRowKeys)){                
                ko.utils.arrayForEach(currentSelectedRowKeys, function (rowKey) {
                    var roleId = rowKey.roleIds()[0];
                    if (!self.compareRolePriorityByRoleId(vmViewIndex.customer.roleIds()[0], roleId)) {
                        dataGrid.deselectRows(rowKey);
                    }
                });
            }

            self.selectCustomerIds([]);
            var rowsData = dataGrid.getSelectedRowsData();
            ko.utils.arrayForEach(rowsData, function (item) {
                self.selectCustomerIds.push(item.customerId());
            });
        },
        onToolbarPreparing: function (e) {
            e.toolbarOptions.items.unshift(
                {
                    location: 'after',
                    widget: 'dxButton',
                    visible: ko.pureComputed(function () {
                        return  self.selectCustomerIds().length == 0; 
                    }),
                    options: {
                        icon: 'fa fa-users',
                        text: 'Group Role',
                        onClick: function () {
                            ko.mapping.fromJSON(ko.toJSON(self.fetchedWebPagesRoles()), {}, self.dataGroupRoleModal.webPagesRoles);
                            modalShow(cModalPersonnelGroupRole);       
                            self.selectInitialProductPermissionTab(cModalPersonnelGroupRole);
                            self.dataGroupRoleModal.initRolesSortable();
                            self.dataGroupRoleModal.clickRoleById(vmViewIndex.customer.roleIds()[0]);
                        }
                    }
                },
                {
                    location: 'after',
                    widget: 'dxButton',
                    visible: ko.pureComputed(function () {
                        return  self.selectCustomerIds().length == 0; 
                    }),
                    options: {
                        icon: 'fa fa-user',
                        text: 'Create account',
                        onClick: function () {    
                            self.dataPersonnelModal.setEmployeesStore();
                            self.dataPersonnelModal.resetData();
                            modalShow(cModalPersonnel);
                            self.selectInitialProductPermissionTab(cModalPersonnel);
                        }
                    }
                },
                {
                    location: 'after',
                    widget: 'dxButton',
                    visible: ko.pureComputed(function () {
                        return  self.selectCustomerIds().length > 0; 
                    }),
                    options: {
                        icon: 'fa fa-trash',
                        type: 'danger',
                        text: 'Delete',
                        elementAttr: {  
                            style : 'color:#FFF; background-color:#DE3112;',  
                        },  
                        onClick: function () {   
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
                                self.sendPersonnelDelete(self.selectCustomerIds());
                            }, function (dismiss) {
                                if (dismiss === 'cancel') {}
                            });

                        }
                    }
                }
            );
        },
    });

    self.mapFetchedData = function (data) {
        var obj = JSON.parse(data);
        ko.mapping.fromJS(obj.profiles, {}, self.fetchedProfiles);
        ko.mapping.fromJS(obj.webPagesRoles, {}, self.fetchedWebPagesRoles);
        ko.mapping.fromJS(obj.webPagesUsersInRoles, {}, self.fetchedWebPagesUsersInRoles);
        ko.mapping.fromJS(obj.productPermissions, {}, self.fetchedProductPermissions);
        ko.mapping.fromJS(obj.productRolePermissions, {}, self.fetchedProductRolePermissions);
        ko.mapping.fromJS(obj.productUserPermissions, {}, self.fetchedProductUserPermissions);
    };

    self.selectInitialProductPermissionTab = function (modalId) {
        setTimeout(function () {
            $(`#${modalId} .productPermissionTabsSlide .support-tab[data-id="${products.cSmileCloudDatabase}"]`).click();
        }, 0);        
    };

    self.getRoleIconOrDefault = function (iconName) {
        if (!isEmpty(iconName)) {
            return 'fa ' + iconName;
        } else {
            return 'fa fa-user';
        }
    };

    self.getRoleIdsByCustomerId = function (customerId) {
        var roleIds = [];
        ko.utils.arrayForEach(vmViewIndex.personnel.fetchedWebPagesUsersInRoles(), function (item) { 
            if (item.userId() == customerId) {
                roleIds.push(item.roleId());
            }
        });
        return roleIds;
    };
    
    self.getProductPermissionIdsByRoleIds = function (roleIds) {
        var productPermissionIds = [];
        ko.utils.arrayForEach(vmViewIndex.personnel.fetchedProductRolePermissions(), function (item) {
            if (roleIds.includes(item.roleId())) {
                productPermissionIds.push(item.productPermissionId());
            }
        });
        return _.uniq(productPermissionIds);
    };

    self.getProductPermissionIdsByCustomerId = function (customerId) {
        var productPermissionIds = [];
        ko.utils.arrayForEach(vmViewIndex.personnel.fetchedProductUserPermissions(), function (item) {
            if (item.customerId() == customerId) {
                productPermissionIds.push(item.productPermissionId());
            }
        });
        return productPermissionIds;
    };

    self.compareRolePriorityByRoleId = function(roleIdA, roleIdB) {
        var rolePriorityA = 0;
        var rolePriorityB = 0;
        _.forEach(vmViewIndex.personnel.fetchedWebPagesRoles(), function (item) { 
            if (item.roleId() == roleIdA) {
                rolePriorityA = item.rolePriority();
            }
            if (item.roleId() == roleIdB) {
                rolePriorityB = item.rolePriority();
            }
            if (rolePriorityA != 0 && rolePriorityB != 0) {
                return false;
            }
        });
        return self.compareRolePriority(rolePriorityA, rolePriorityB);
    };

    self.compareRolePriority = function (rolePriorityA, rolePriorityB) {
        if (rolePriorityA == 0 || rolePriorityB == 0) {
            return false;
        }
        return rolePriorityA < rolePriorityB;
    }

    self.clickProductPermissionTab = function (data, event) {
        $('.productPermissionTabsSlide').find('.support-tab').removeClass('active');
        var $currentTarget = $(event.currentTarget);
        $currentTarget.addClass('active');
        var productId = $currentTarget.data('id');

        var filterProductPermissions = ko.utils.arrayFilter(self.fetchedProductPermissions(), function (item) {
            return item.productId() == productId;
        });

        self.permissionsByProduct.productId(productId);
        self.permissionsByProduct.productName(products.mapName[productId.toString()].shotName);
        self.permissionsByProduct.permissions(filterProductPermissions);
    };

    self.sendPersonnelDelete = function (customerIds) {
        var formId = cfrmPersonnelDelete;
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
        var objUrl = new ObjUrl(formId);
        var requestUrl = objUrl.getUrlSubmitForm();
        var passData = {
            jsonRequestData: JSON.stringify(customerIds),
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
                var resultCustomerIds = JSON.parse(result.obj);

                var filterProfiles = ko.utils.arrayFilter(self.fetchedProfiles(), function (item) {
                    return resultCustomerIds.includes(item.customerId());
                });
                if (filterProfiles.length > 0) {
                    self.fetchedProfiles.removeAll(filterProfiles);
                }

                var filterWebPagesUsersInRoles = ko.utils.arrayFilter(self.fetchedWebPagesUsersInRoles(), function (item) {
                    return resultCustomerIds.includes(item.userId());
                });
                if (filterWebPagesUsersInRoles.length > 0) {
                    self.fetchedWebPagesUsersInRoles.removeAll(filterWebPagesUsersInRoles);
                }

                var filterProductUserPermissions = ko.utils.arrayFilter(self.fetchedProductUserPermissions(), function (item) {
                    return resultCustomerIds.includes(item.customerId());
                });
                if (filterProductUserPermissions.length > 0) {
                    self.fetchedProductUserPermissions.removeAll(filterProductUserPermissions);
                }
                modalHide(cModalPersonnel);      
                dataGrid.refresh();
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

function MemberInviteViewModel(data) {
    var self = this;
    self.webPagesRoles = ko.observableArray([]);
    self.newPassword = ko.observable('');
    self.confirmPassword = ko.observable('');
    if (isEmpty(data)) {
        self.showCreateAccount = ko.observable(false);
        self.firstName = ko.observable('');
        self.lastName = ko.observable('');
        self.email = ko.observable('');
        self.createDate = ko.observable('');
        self.roleIds = ko.observableArray([]);
        self.permissionIds = ko.observableArray([]);
    } else {
        var obj = JSON.parse(data);
        var profile = obj.profile;
        self.showCreateAccount = ko.observable(true);
        self.firstName = ko.observable(profile.firstName);
        self.lastName = ko.observable(profile.lastName);
        self.email = ko.observable(profile.email);
        self.createDate = ko.observable(profile.createDate);
        self.roleIds = ko.observableArray(profile.roleIds);
        self.permissionIds = ko.observableArray(profile.permissionIds);
        ko.mapping.fromJS(obj.webPagesRoles, {}, self.webPagesRoles);
    }    

    self.dxTagBoxRoles = ko.observable({
        dataSource: self.webPagesRoles,
        displayExpr: 'roleName',
        valueExpr: 'roleId',
        value: self.roleIds,
        disabled: true,
        showDropDownButton: true,
        searchEnabled: false,
        showSelectionControls: true,
        showMultiTagOnly: false,
    });

    self.resetData = function () {
        self.showCreateAccount(false);
        self.firstName('');
        self.lastName('');
        self.email('');
        self.createDate('');
        self.roleIds([]);
        self.permissionIds([]);
        self.webPagesRoles([]);
        self.newPassword('');
        self.confirmPassword('');
    };    
};
//End Added by WEB-SA24-0029