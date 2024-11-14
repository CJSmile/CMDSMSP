/*
    SMILEDINING-SA17-0026               08/29/17         Customize                  1. Add new function Auto Charge.
    SMILEDINING-SA18-0010               03/22/2018       Customize                  1. Summary
    SMILEDINING-SA18-0011               05/07/2018       Customize                  1. New Web Report.
    SMILEDINING-SA19-0003               03/12/2019       Customize                  1. Add config data of minimum order into ‘tbglobalconfig’ table.
                                                                                    2. Add minimum order for pickup type of orders.
                                                                                    3. Support minimum order when enable or disable minimum order.
                                                                                    4. Add Setup minimum order for pickup and delivery and change integer value to floating point value.
    SMILEDINING-SA19-0023               09/13/2019       Customize                  1. Add 'void button' for void previous ticket list on WebSupport.
    SMILEDINING-SA19-0011               09/03/2019       Customize                  1. E-Gift Card. 
    SMILEDINING-SA20-0004               13/05/2020       Customize                  1. New feature Guest On Smile Dining and Delivery Address and Config Menu Hour.
    SMILEDINING-SA20-0007               07/07/2020       Customize                  1. New feature Gift Card.
    SMILEDINING-SA20-0005               13/06/2020       Customize                  1. Add new product.
    SMILEDINING-SA20-0006               13/08/2020       Customize                  1. Setup Contactless Payment Type and Update Contactless.
    SMILEDINING-SA20-0014               31/07/2020       Customize                  1. Separate email settings of Order Smiledining and E- Gift Card.
    SMILECONTACTLESS-SA20-0001          06/10/2020       New Project                1. New project smile contactless integrate smile dining, web owner, web api
    SMILEDINING-SA20-0011               23/07/2020       Customize                  1. New feature auto apply discount SmileDining.
    SMILEDINING-SA20-0044               18/12/2020       Customize                  1. On-off Pay By Cash or Pay By Credit only delivery or pickup.
    SMILEDINING-SA20-0031               02/12/2020       Customize                  1. Adjust shop close period date and time.
    SMILEDINING-SA20-0031#4             08/01/2021       Customize                  1. Add shopClose feature to WebSupport and Fix bug validate custom shopClose.
    SMILEDINING-SA21-0007               02/02/2021       Customize                  1. Apple Pay and Set up Unit Of Work  and Shop Close API
    SMILEDINING-SA21-0014               08/03/2021       Customize                  1. Add new product 'Smile Third Party Integrations' used Deliverect.
    SMILEDINING-SA21-0014#7             09/04/2021       Customize                  1. Modified deliverect sync product and added new feature snooze product. 
*   SMILEDINING-SA21-0006#3             28/04/2021       Customize                  1. Add column ticketId to tbgiftcertransaction.
*   SMILEDINING-SA20-0048#3             04/05/2021       Customize                  1. Edit protobuf for DiscountPriceName. 
 *  SMILEDINING-SA21-0043               18/08/2021       Customize                  1. Config data SignalR to Kafka
 *  SMILEDINING-SA21-0054               13/09/2021       Customize                  1. Add setting Required Estimate Time
*   SMILEDINING-SA21-0063               07/10/2021       Customize                  1. Add menu Marketing on web owner and Add menu Log on web support.
    SMILEDINING-SA21-0066               21/10/2021       Customize                  1. New feature web dispatch deliverect.
    SMILEDINING-SA21-0066#1             22/10/2021       Customize                  1. Add button 'none' for WebDispatch.
    SMILEDINING-SA21-0025#3             11/11/2021       Customize                  1. Fixed bug show utensils in mail Dining/ LiveOrder webOwner / Monitor webSupport and Resend Ticket.
    SMILEDINING-SA21-0066#5             14/11/2021       Customize                  1. Fix bug webSupport error when open domain and save domain and domain deactivate in setup.
    SMILEDINING-SA21-0066#13            08/12/2021       Customize                  1. Fix bug data resend to smilePOS for web dispatch in webSupport.
    SMILEDINING-SA21-0080#2             09/12/2021       Customize                  1. Calculate marketingFee in SmileDining and show receipt and report in webSupport.
    SMILEDINING-SA21-0081               16/12/2021       Customize                  1. Add loading shimmer web support.
                                                                                    2. Fix bug value when click button duplicate.
                                                                                    3. Menu summary change call api.
    SMILEDINING-SA21-0080#7             19/12/2020      Customize                   1. Modify marketing model and using constant ResId keep web api url.
                                                                                    2. Fix bug autocharge amount in smile dining.
    SMILEDINING-SA21-0081#1             21/12/2021      Customize                   1. Edit class name shimmer and Add swal when get data fail.
    SMILEDINING-SA21-0066#14            29/12/2021      Customize                   1. Fix bug data send to smilePOS for web dispatch in WebSmileDining and WebSupport.
    SMILEDINING-SA22-0008#6             03/03/2022      Customize                   1. Fix loading shimmer Setup and Fix menu Sync Product and Resend.
    SMILEDINING-SA22-0017               06/06/2022      Customize                   1. Add menu AutoUpdate in webSupport.
    SMILEDINING-SA22-0020               14/06/2022      Customize                   1. Add new charge name 'Payment Fee' apply to order online.
    SMILEDINING-SA22-0022               15/06/2022      Customize                   1. Add menu Delivery Billing in webSupport. 
    SMILEDINING-SA22-0020#4             23/06/2022      Customize                   1. Edit protobuf paymentFee (Web Support).
    SMILEDINING-SA22-0022#3             23/06/2022      Customize                   1. Fix bug UI Delivery Billing in webSupport.
    SMILEDINING-SA22-0025#1             15/07/2022      Customize                   1. Change database for save marketingFee.
    SMILEDINING-SA22-0032               18/08/2022      Customize                   1. Edit summary report in WebSupport.
                                                                                    2. Edit setting service fee in WebSupport.
                                                                                    3. Add download and print for delivery billing in WebSupport.
    SMILEDINING-SA22-0039               13/09/2022      Customize                   1. Add ThridParty setting in setup.
    SMILEDINING-SA22-0039#1             16/09/2022      Customize                   1. Fix bug setting in setup
    SMILEDINING-SA22-0039#2             06/10/2022      Customize                   1. Fix bug Shogo setting in setup
    WEB-SA22-0057                       04/11/2022      Customize                   1. Add Flat Rate, Percentage and Setting in Websupport
    WEB-SA22-0057#1                     09/11/2022      Customize                   1. Fixbug Flat Rate, Percentage and Setting in Websupport
                                                                                    2. Edit summary report in WebSupport.
    WEB-SA22-0071                       21/12/2022      Customize                   1. Add download excel for Delivery Billing in webSupport.
    WEB-SA22-0050#4                     22/12/2022      Customize                   1. prohibit Emoji for Create Account in WebSuuport
    WEB-SA23-0008                       26/01/2023      Customize                   1. Use MQTT send data to kiosk in webSupport.
    WEB-SA23-0008#1                     26/01/2023      Customize                   1. Fix bug data centreMapDomain for MQTT in webSupport.
    WEB-SA23-0010                       02/02/2023      Customize                   1. Fix bug text for Taxes & Fees when no tax.
    WEB-SA23-0012                       06/02/2023      Customize                   1. Add setting Emergepay and edit UI payment service in webSupport.
    WEB-SA23-0013                       09/02/2023      Customize                   1. Fix bug summary and delivery billing in webSupport.
    WEB-SA23-0013#4                     23/02/2023      Customize                   1. Add address and postal in summary and delivery billing in webSupport.
    WEB-SA23-0020                       13/03/2023      Customize                   1. Add setting additional charge for deliverect in webSupport.
    WEB-SA23-0022                       15/03/2023      Customize                   1. Add apple pay for Emergepay in webDining, webGiftCard, webOntable, webSupport.
    WEB-SA23-0024#1                     24/03/2023      Customize                   1. Edit data payChange send to POS for smileDining.
    WEB-SA23-0025                       28/03/2023      Customize                   1. Add filter product and export excel in menu Setup on webSupport. 
                                                                                    2. Change version api cpxtransaction of setup-dining to v2 on webSupport.
                                                                                    3. Edit version POS in menu Auto Update on webSupport.
    WEB-SA23-0035#1                     30/05/2023      Customize                   1. Move setting statement type from webSupport to webOwner.
    WEB-SA23-0036                       16/06/2023      Customize                   1. Fix bug billing address for POS on webDining, webGiftCard, webSupport.
    WEB-SA23-0036#1                     03/07/2023      Customize                   1. Fix bug billing address for signalR send to POS on webDining, webSupport.
    WEB-SA23-0043                       31/07/2023      Customize                   1. Fix bug setting shop close on webOwner, webSupport.
                                                                                    2. Add product kiosk in setup on webSupport.
    WEB-SA23-0048                       11/09/2023      Customize                   1. Add setting Otter on webOwner, webSupport.
    WEB-SA23-0049                       22/09/2023      Customize                   1. Add check diff doordash on webSupport and fix bug get address for dispatch on webDining.
    WEB-SA23-0050                       26/09/2023      Customize                   1. Fix bug alert invalid shop address and check domain name duplicate on webSupport.
    WEB-SA23-0048#3                     17/10/2023      Customize                   1. Fix bug copy food and sync product for Otter on webOwner, webSupport.
    WEB-SA23-0056                       20/12/2023      Customize                   1. Add Service Fee Report on webSupport, webDining, webOnTable.
    WEB-SA24-0002                       02/02/2024      Customize                   1. Add Order Paper Report on webSupport.
    WEB-SA24-0003                       06/02/2024      Customize                   1. New Requirement - Add Purchase date to E-Gift Card Menu on webOwner, webSupport.
                                                                                    2. New Requirement - Change default Auto Sync Product to "Yes" on webSupport.
                                                                                    3. Fix bug saving of shop address due to missing city on webSupport.
    WEB-SA24-0016                       05/06/2024      Customize                   1. New requirement - Add pay at store only and notification for Smile On Table on webOwner, webSupport, webOnTable.
    WEB-SA24-0024                       23/07/2024      Customize                   1. Fix bug shop address and change the Captcha and SignalR defaults on webSupport.
    WEB-SA24-0025#1                     31/07/2024      Customize                   1. Fix bug Cloudflare Turnstile limit on webSupport.
    WEB-SA24-0024#4                     19/08/2024      Customize                   1. Fix bug invalid shop address format for doordash on webSupport.
    WEB-SA24-0024#5                     06/09/2024      Customize                   1. Fix bug in the validation of the shop address for DoorDash on webSupport.
    WEB-SA24-0028                       17/09/2024      Customize                   1. Add ReCaptcha Site Key and Secret Key on webSupport.
    WEB-SA24-0029                       17/10/2024      Customize                   1. New Requirement - Personnel on webSupport.
* 
*/

//Added by SMILECONTACTLESS-SA20-0001
function isLoading(visible) {
    if (visible) vmViewIndex.loading.loadingVisible(true);
    else vmViewIndex.loading.loadingVisible(false);
};
//End Added by SMILECONTACTLESS-SA20-0001
//Added by SMILEDINING-SA21-0081
function loadingShimmer(isLoading, menu) {
    switch (menu) {
        //Modified by SMILEDINING-SA21-0081#1
        //case "Setup":
        //    var idMenu = $('#gridSetup');
        //    var idShimmer = $('#shimmer-setup');
        //    break;
        //case "Monitor":
        //    var idMenu = $('#gridMonitor');
        //    var idShimmer = $('#shimmer-monitor');
        //    break;
        //case "Owner":
        //    var idMenu = $('#gridOwner');
        //    var idShimmer = $('#shimmer-owner');
        //    break;
        //case "Log":
        //    var idMenu = $('#gridLog');
        //    var idShimmer = $('#shimmer-log');
        //    break;
        //case "Summary":
        //    var idMenu = $('#gridSummary');
        //    var idShimmer = $('#shimmer-summary');
        //    break;
        //case "Marketing":
        //    var idMenu = $('#gridMarketing');
        //    var idShimmer = $('#shimmer-marketing');
        //    break;
        //case "E-giftcard":
        //    var idMenu = $('#gridEgiftCard');
        //    var idShimmer = $('#shimmer-egiftcard');
        //    break;
        //case "WebReport-User":
        //    var idMenu = $('#gridUser');
        //    var idShimmer = $('#shimmer-webreport-user');
        //    break;
        //case "WebReport-Menu":
        //    var idMenu = $('#gridRoleMenuMap');
        //    var idShimmer = $('#shimmer-webreport-menu');
        //    break;
        //case "WebReport-Role":
        //    var idMenu = $('#gridUserRoleMap');
        //    var idShimmer = $('#shimmer-webreport-role');
        //    break;
        //End Modified by SMILEDINING-SA21-0081#1
        //Added by SMILEDINING-SA21-0081#1
        case cGridSetup:
            var gridMenu = $('.gridSetup');
            var shimmerMenu = $('.shimmer-setup');
            break;
        case cGridMonitor:
            var gridMenu = $('.gridMonitor');
            var shimmerMenu = $('.shimmer-monitor')
            break;
        case cGridOwner:
            var gridMenu = $('.gridOwner');
            var shimmerMenu = $('.shimmer-owner');
            break;
        case cGridLog:
            var gridMenu = $('.gridLog');
            var shimmerMenu = $('.shimmer-log');
            break;
        case cGridSummary:
            var gridMenu = $('.gridSummary');
            var shimmerMenu = $('.shimmer-summary');
            break;
        case cGridMarketing:
            var gridMenu = $('.gridMarketing');
            var shimmerMenu = $('.shimmer-marketing');
            break;
        case cGridEgiftCard:
            var gridMenu = $('.gridEgiftCard');
            var shimmerMenu = $('.shimmer-egiftcard');
            break;
        case cGridWrUser:
            var gridMenu = $('.gridUser');
            var shimmerMenu = $('.shimmer-webreport-user');
            break;
        case cGridWrRoleMenuMap:
            var gridMenu = $('.gridRoleMenuMap');
            var shimmerMenu = $('.shimmer-webreport-menu');
            break;
        case cGridWrUserRoleMap:
            var gridMenu = $('.gridUserRoleMap');
            var shimmerMenu = $('.shimmer-webreport-role');
            break;
        //End Added by SMILEDINING-SA21-0081#1
        //Added by SMILEDINING-SA22-0017
        case cGridAutoUpdate:
            var gridMenu = $('.gridAutoUpdate');
            var shimmerMenu = $('.shimmer-autoupdate');
            break;
        //End Added by SMILEDINING-SA22-0017
        //Added by SMILEDINING-SA22-0022
        case cGridDeliveryBilling:
            var gridMenu = $('.gridDeliveryBilling');
            var shimmerMenu = $('.shimmer-deliverybilling');
            break;
        //End Added by SMILEDINING-SA22-0022
        //Added by WEB-SA23-0056
        case cGridRpServiceFee:
            var gridMenu = $('.gridRpServiceFee');
            var shimmerMenu = $('.shimmer-rp-servicefee');
            break;
        //End Added by WEB-SA23-0056
        //Added by WEB-SA24-0002
        case cGridRpOrderPaper:
            var gridMenu = $('.gridRpOrderPaper');
            var shimmerMenu = $('.shimmer-rp-orderpaper');
            break;
        //End Added by WEB-SA24-0002
        //Added by WEB-SA24-0029
        case cGridPersonnel:
            var gridMenu = $('.gridPersonnel');
            var shimmerMenu = $('.shimmer-personnel');
            break;
        //End Added by WEB-SA24-0029
    }
    //Modified by SMILEDINING-SA21-0081#1
    //if (isLoading) {
    //    idMenu.hide();
    //    idShimmer.show();
    //} else {
    //    idMenu.hide();
    //    idShimmer.show();
    //}
    //End Modified by SMILEDINING-SA21-0081#1
    //Added by SMILEDINING-SA21-0081#1
    if (isLoading) {
        gridMenu.hide();
        shimmerMenu.show();
    } else {
        shimmerMenu.hide();
        gridMenu.show();
    }
    //End Added by SMILEDINING-SA21-0081#1
}
//End Added by SMILEDINING-SA21-0081
function setDefaultMenu() {
    vmViewIndex.menu.monitor(false);
    vmViewIndex.menu.setup(false);
    vmViewIndex.menu.owner(false);
    vmViewIndex.menu.commission(false);
    vmViewIndex.menu.webreport(false);     
    vmViewIndex.menu.summary(false);        //Added and End by SMILEDINING-SA18-0010
    vmViewIndex.menu.egiftcard(false);     //Added and End by SMILEDINING-SA19-0011
    vmViewIndex.menu.log(false); //Added and End by SMILEDINING-SA21-0063
    vmViewIndex.menu.marketingService(false);    //Added and End by SMILEDINING-SA21-0080#2
    vmViewIndex.menu.autoUpdate(false);     //Added and End by SMILEDINING-SA22-0017
    vmViewIndex.menu.deliveryBilling(false);     //Added and End by SMILEDINING-SA22-0022
    vmViewIndex.menu.report(false); //Added and End by WEB-SA23-0056
    vmViewIndex.menu.personnel(false); //Added and End by WEB-SA24-0029
};

function hiddenColumnByDataGrid(id, arrIndex, dataGrid) {
    var gridInstance = getIdTag(id).dxDataGrid("instance");
    _.forEach(arrIndex, function (value) {
        gridInstance.columnOption(dataGrid.columns[value].dataField, 'visible', false);
    })
    gridInstance.refresh();
};

function visibleColumnByDataGrid(id, arrIndex, dataGrid) {
    var gridInstance = getIdTag(id).dxDataGrid("instance");
    _.forEach(arrIndex, function (value) {
        gridInstance.columnOption(dataGrid.columns[value].dataField, 'visible', true);
    })
    gridInstance.refresh();
};

function changeDateBoxOnMonitor() {
    switch (checkResolution()) {
        case 'xs':
        case 'sm':
            if (vmViewIndex.monitor.dateBox().pickerType === 'calendar') {
                vmViewIndex.monitor.dateBox({
                    pickerType: 'rollers',
                })
            }
            break;
        case 'md':
        case 'lg':
        case 'xl':
            if (vmViewIndex.monitor.dateBox().pickerType === 'rollers') {
                vmViewIndex.monitor.dateBox({
                    pickerType: 'calendar',
                })
            }
            break;
        default:
    }
};

function setDataGrid(type) {
    switch (type) {
        case 'MONITOR':
            var defaultMonitor = [0, 1, 2, 3, 4, 5, 6, 7];
            hiddenColumnByDataGrid('gridMonitor', defaultMonitor, vmViewIndex.monitor.dataGridOptions());
            switch (checkResolution()) {
                case 'xs':
                    var arrMonitor = [];
                    arrMonitor.push(0);
                    arrMonitor.push(1);
                    arrMonitor.push(6);
                    arrMonitor.push(7);
                    visibleColumnByDataGrid('gridMonitor', arrMonitor, vmViewIndex.monitor.dataGridOptions());
                    break;
                case 'sm':
                    var arrMonitor = [];
                    arrMonitor.push(0);
                    arrMonitor.push(1);
                    arrMonitor.push(4);
                    arrMonitor.push(6);
                    arrMonitor.push(7);
                    visibleColumnByDataGrid('gridMonitor', arrMonitor, vmViewIndex.monitor.dataGridOptions());
                    break;
                case 'md':
                    var arrMonitor = [0, 1, 2, 4, 5, 6, 7];
                    visibleColumnByDataGrid('gridMonitor', arrMonitor, vmViewIndex.monitor.dataGridOptions());
                    break;
                case 'lg':
                    var arrMonitor = [0, 1, 2, 3, 4, 5, 6, 7];
                    visibleColumnByDataGrid('gridMonitor', arrMonitor, vmViewIndex.monitor.dataGridOptions());
                    break;
                case 'xl':
                    var arrMonitor = [0, 1, 2, 3, 4, 5, 6, 7];
                    visibleColumnByDataGrid('gridMonitor', arrMonitor, vmViewIndex.monitor.dataGridOptions());
                    break;
                default:
            }
        default:
    }
};

function isToday() {
    var currentTime = _currentTime.clone();
    var currentDate = moment(currentTime).format(moment_date_format_yyyymmdd);
    var selectDate = moment(vmViewIndex.monitor.selectDate()).format(moment_date_format_yyyymmdd);
    return currentDate === selectDate;
};

function resend(result) {
    if (_signalConnect) {
        //Protobuf
        var path = $('#protobuf-path').val();
        var protobuf = dcodeIO.ProtoBuf;
        var builder = protobuf.newBuilder({ convertFieldsToCamelCase: true });
        protobuf.loadProtoFile(path, builder);
        var root = builder.build();

        var customer = JSON.parse(result.objCustomer);
        var customerAddress = JSON.parse(result.objCustomerAddress);
        var customerAddressBilling = JSON.parse(result.objCustomerAddressBilling);     
        var ticket = JSON.parse(result.objTicket);
        var ticketPayment = JSON.parse(result.objTicketPayment);
        var order = JSON.parse(result.objOrder);
        var orderChoice = JSON.parse(result.objOrderChoice);
        var autoCharge = JSON.parse(result.objAutoCharge);       //Added and End by SMILEDINING-SA17-0026
        var paymentFee = JSON.parse(result.objPaymentFee);  //Added and End by SMILEDINING-SA22-0020
        var guest = JSON.parse(result.objGuest);  //Added and End by WEB-SA23-0036
        var orderTypeName = result.dataOrderTypeName;
        var groupId = result.shopCode;
        var authentication = result.authentication;
        var giftCerTransaction = JSON.parse(result.objGiftCerTransaction);  //Added and End by SMILEDINING-SA21-0006#3
        //var thirdParty = JSON.parse(result.objThirdParty);  //Added and End by SMILEDINING-SA21-0066#13 //Modified and End by SMILEDINING-SA21-0066#14

        if (result.shopUsePos == "1") {

            var protoJob = new root.Job();
            var protoTicket = new root.Ticket();
            protoTicket.set('TicketID', ticket.ticketId.toString());
            protoTicket.set('JobID', null);
            protoTicket.set('SettlementID', null);
            protoTicket.set('OrderTypeID', ticket.orderTypeId);
            protoTicket.set('EmployeesID', null);
            protoTicket.set('UserClockID', null);
            protoTicket.set('TicketNumber', null);
            protoTicket.set('PrintCount', null);
            protoTicket.set('SubTotal', ticket.subTotal);
            protoTicket.set('DeliveryCharge', ticket.deliveryCharge);
            protoTicket.set('MinimumOrderCharge', null);
            protoTicket.set('GratuityCharge', null);
            protoTicket.set('CCTransactionFee', null);
            protoTicket.set('OtherCharge', null);
            if (isEmpty(ticket.discountAmount)) {
                protoTicket.set('DiscountAmount', 0);
            } else {
                protoTicket.set('DiscountAmount', ticket.discountAmount);
            }
            protoTicket.set('TaxAmount', ticket.taxAmount);
            protoTicket.set('GrandTotal', ticket.grandTotal);
            protoTicket.set('ApplyGratuity', null);
            protoTicket.set('GratuityID', null);
            protoTicket.set('ApplyNoTax', null);
            //Modified by SMILEDINING-SA21-0066#14
            //protoTicket.set('ThirdPartyID', null);
            //protoTicket.set('ThirdPartyName', null);
            //End Modified by SMILEDINING-SA21-0066#14
            //Added by SMILEDINING-SA21-0066#14
            protoTicket.set('ThirdPartyID', ticket.thirdPartyId);
            protoTicket.set('ThirdPartyName', ticket.thirdPartyName == "" ? null : ticket.thirdPartyName);
            //End Added by SMILEDINING-SA21-0066#14
            protoTicket.set('ThirdPartyFixTax', null);
            protoTicket.set('ThirdPartyTip', null);
            protoTicket.set('TicketStatus', ticket.ticketStatus);
            protoTicket.set('GratuityPercent', null);
            protoTicket.set('Status', ticket.ticketStatus);
            protoTicket.set('OrderTypeName', orderTypeName);
            protoTicket.set('DeliveryChargeTax', ticket.deliveryChargeTax);
            protoTicket.set('CustomerID', ticket.customerId);
            if (isEmpty(ticket.customerAddressId)) {
                protoTicket.set('CustomerAddressID', 0);
            } else {
                protoTicket.set('CustomerAddressID', ticket.customerAddressId);
            }
            if (ticket.ticketComment == null) {
                protoTicket.set('TicketComment', '');
            } else {
                protoTicket.set('TicketComment', ticket.ticketComment);
            }

            protoTicket.set('ScheduleDateTime', ticket.scheduleDateTime);
            //protoTicket.set('TodayAsp', ticket.todayAsap); //Modified and End by SMILEDINING-SA22-0008#6
            protoTicket.set('TodayAsp', ticket.todayAsp);  //Added and End by SMILEDINING-SA22-0008#6
            protoTicket.set('TicketDateTime', ticket.ticketDateTime);
            protoTicket.set('TimezoneDateTime', ticket.timeZoneDateTime);
            protoTicket.set('CommissionFee', ticket.commissionFee);
            protoTicket.set('CreditCardFee', ticket.creditCardFee);
            protoTicket.set('Command', 'NEW');
            protoTicket.set('DiscountID', ticket.discountId);
            //Added by SMILEDINING-SA20-0011
            if (isEmpty(ticket.autoDiscountAmount)) {
                protoTicket.set('AutoDiscountAmount', 0);
            } else {
                protoTicket.set('AutoDiscountAmount', ticket.autoDiscountAmount);
            }
            protoTicket.set('AutoDiscountID', ticket.autoDiscountId);
            if (isEmpty(ticket.couponDiscountAmount)) {
                protoTicket.set('CouponDiscountAmount', 0);
            } else {
                protoTicket.set('CouponDiscountAmount', ticket.couponDiscountAmount);
            }
            //End Added by SMILEDINING-SA20-0011

            //Added by SMILEDINING-SA20-0048#3
            protoTicket.set('DiscountOneTimeUseID', ticket.discountOneTimeUseId);
            protoTicket.set('DiscountPriceName', ticket.discountName + '|' + ticket.discountPriceName);    
            //End Added by SMILEDINING-SA20-0048#3
            //Added by SMILEDINING-SA21-0025#3
            protoTicket.set('IsUtensils', ticket.isUtensils);
            protoTicket.set('UtensilsAmount', ticket.utensilsAmount);
            //End Added SMILEDINING-SA21-0025#3
            //Added by SMILEDINING-SA22-0025#1
            if (isEmpty(ticket.marketingFee)) {
                protoTicket.set('MarketingFee', 0);
            } else {
                protoTicket.set('MarketingFee', ticket.marketingFee);
            }
            //End Added by SMILEDINING-SA22-0025#1
            //Modified by SMILEDINING-SA20-0007
            //var ticketpaymentArr = [];
            //var protoTicketPayment = new root.TicketPayment();
            //protoTicketPayment.set('TicketPaymentID', ticketPayment.ticketPaymentId.toString());
            //protoTicketPayment.set('ReceiptNumber', null);
            //protoTicketPayment.set('PaymentDatetime', ticketPayment.paymentDateTime);
            //protoTicketPayment.set('TotalAmount', ticketPayment.totalAmount);
            //protoTicketPayment.set('PaymentTypeID', ticketPayment.paymentTypeId);
            //protoTicketPayment.set('PaymentTypeName', ticketPayment.paymentTypeName);
            //protoTicketPayment.set('PayCash', ticketPayment.payCash);
            //protoTicketPayment.set('PayCredit', ticketPayment.payCredit);
            //protoTicketPayment.set('PayCheck', null);
            //protoTicketPayment.set('PayGiftCer', null);
            //protoTicketPayment.set('PayThirdParty', null);
            //protoTicketPayment.set('PayChange', null);
            //protoTicketPayment.set('Description', null);
            //protoTicketPayment.set('CCDisplaySeq', null);
            //if (ticketPayment.paymentTypeId == 2) {
            //    protoTicketPayment.set('CCCardCompany', ticketPayment.ccCardCompany);
            //    protoTicketPayment.set('CCCardName', ticketPayment.ccCardName);
            //    protoTicketPayment.set('CCLastFour', ticketPayment.ccLastFour);
            //    protoTicketPayment.set('CCTroutD', ticketPayment.ccTroutD);
            //    protoTicketPayment.set('CCAuthCode', ticketPayment.ccAuthCode);
            //} else {
            //    protoTicketPayment.set('CCCardCompany', null);
            //    protoTicketPayment.set('CCCardName', null);
            //    protoTicketPayment.set('CCLastFour', null);
            //    protoTicketPayment.set('CCTroutD', null);
            //    protoTicketPayment.set('CCAuthCode', null);
            //}
            //protoTicketPayment.set('CCCardInfo', null);
            //protoTicketPayment.set('CCCardExp', null);
            //protoTicketPayment.set('CCTipDateTime', null);
            //if (ticketPayment.ccTip == null) {
            //    protoTicketPayment.set('CCTip', null);
            //} else {
            //    protoTicketPayment.set('CCTip', ticketPayment.ccTip);
            //}
            //protoTicketPayment.set('CCVoidDateTime', null);
            //protoTicketPayment.set('TicketID', ticketPayment.ticketId.toString());
            //protoTicketPayment.set('JobID', null);
            //protoTicketPayment.set('SettlementID', null);
            //protoTicketPayment.set('UserClockID', null);
            //protoTicketPayment.set('OrderTypeID', ticketPayment.orderTypeId);
            //protoTicketPayment.set('ClientID', null);
            //protoTicketPayment.set('EmployeesID', null);
            //protoTicketPayment.set('GiftCerTID', null);
            //protoTicketPayment.set('ThirdPartyID', null);
            //protoTicketPayment.set('TicketPaymentStatus', ticketPayment.ticketPaymentStatus);
            //protoTicketPayment.set('Status', ticketPayment.ticketPaymentStatus);
            //protoTicketPayment.set('OrderTypeName', orderTypeName);
            //protoTicketPayment.set('Command', 'NEW');
            //ticketpaymentArr.push(protoTicketPayment);
            //End Modified by SMILEDINING-SA20-0007
            //Added by SMILEDINING-SA20-0007
            var ticketpaymentArr = [];
            _.forEach(ticketPayment, function (v) {
                var protoTicketPayment = new root.TicketPayment();
                protoTicketPayment.set('TicketPaymentID', v.ticketPaymentId.toString());
                protoTicketPayment.set('ReceiptNumber', null);
                protoTicketPayment.set('PaymentDatetime', v.paymentDateTime);
                protoTicketPayment.set('TotalAmount', v.totalAmount);
                protoTicketPayment.set('PaymentTypeID', v.paymentTypeId);
                protoTicketPayment.set('PaymentTypeName', v.paymentTypeName);
                protoTicketPayment.set('PayCash', v.payCash);
                protoTicketPayment.set('PayCredit', v.payCredit);
                protoTicketPayment.set('PayCheck', null);
                protoTicketPayment.set('PayGiftCer', v.payGiftCer);
                protoTicketPayment.set('PayThirdParty', null);                
                protoTicketPayment.set('Description', null);
                protoTicketPayment.set('CCDisplaySeq', null);
                if (v.paymentTypeId == 2) {
                    protoTicketPayment.set('CCCardCompany', v.ccCardCompany);
                    protoTicketPayment.set('CCCardName', v.ccCardName);
                    protoTicketPayment.set('CCLastFour', v.ccLastFour);
                    protoTicketPayment.set('CCTroutD', v.ccTroutD);
                    protoTicketPayment.set('CCAuthCode', v.ccAuthCode);
                    protoTicketPayment.set('CCCardInfo', null);
                    //protoTicketPayment.set('PayChange', null); //Modified and End by WEB-SA23-0024#1
                    protoTicketPayment.set('PayChange', 0); //Added and End by WEB-SA23-0024#1
                } else if (v.paymentTypeId == 4) {
                    protoTicketPayment.set('CCCardCompany', null);
                    protoTicketPayment.set('CCCardName', null);
                    protoTicketPayment.set('CCLastFour', null);
                    protoTicketPayment.set('CCTroutD', v.ccTroutD);
                    protoTicketPayment.set('CCAuthCode', null);
                    protoTicketPayment.set('CCCardInfo', v.ccCardInfo);
                    //protoTicketPayment.set('PayChange', v.payChange); //Modified and End by WEB-SA23-0024#1
                    protoTicketPayment.set('PayChange', 0); //Added and End by WEB-SA23-0024#1
                } else {
                    protoTicketPayment.set('CCCardCompany', null);
                    protoTicketPayment.set('CCCardName', null);
                    protoTicketPayment.set('CCLastFour', null);
                    protoTicketPayment.set('CCTroutD', null);
                    protoTicketPayment.set('CCAuthCode', null);
                    protoTicketPayment.set('CCCardInfo', null);
                    //protoTicketPayment.set('PayChange', null); //Modified and End by WEB-SA23-0024#1
                    protoTicketPayment.set('PayChange', 0); //Added and End by WEB-SA23-0024#1
                }
                protoTicketPayment.set('CCCardExp', null);
                protoTicketPayment.set('CCTipDateTime', null);
                if (v.ccTip == null) {
                    protoTicketPayment.set('CCTip', 0);
                } else {
                    protoTicketPayment.set('CCTip', v.ccTip);
                }
                //Modified by SMILEDINING-SA21-0080#7
                //Added by SMILEDINING-SA21-0080#2
                //protoTicketPayment.set('MarketingFee', v.marketingFee);
                //protoTicketPayment.set('CreditCardFee', v.creditCardFee);
                //End Added by SMILEDINING-SA21-0080#2
                //End Modified by SMILEDINING-SA21-0080#7
                //Modified by SMILEDINING-SA22-0008#6
                //Added by SMILEDINING-SA21-0080#7
                //protoTicketPayment.set('MarketingFee', v.marketingFee.toString());
                //protoTicketPayment.set('CreditCardFee', v.creditCardFee.toString());
                //End Added by SMILEDINING-SA21-0080#7
                //End Modified by SMILEDINING-SA22-0008#6
                //Added by SMILEDINING-SA22-0008#6
                protoTicketPayment.set('MarketingFee', v.marketingFee == null ? "" : v.marketingFee.toString());
                protoTicketPayment.set('CreditCardFee', v.creditCardFee == null ? "" : v.creditCardFee.toString());
                //End Added by SMILEDINING-SA22-0008#6
                protoTicketPayment.set('CCVoidDateTime', null);
                protoTicketPayment.set('TicketID', v.ticketId.toString());
                protoTicketPayment.set('JobID', null);
                protoTicketPayment.set('SettlementID', null);
                protoTicketPayment.set('UserClockID', null);
                protoTicketPayment.set('OrderTypeID', v.orderTypeId);
                protoTicketPayment.set('ClientID', null);
                protoTicketPayment.set('EmployeesID', null);
                protoTicketPayment.set('GiftCerTID', null);
                //protoTicketPayment.set('ThirdPartyID', null); //Modified and End by SMILEDINING-SA21-0066#14
                protoTicketPayment.set('ThirdPartyID', v.thirdPartyId); //Added and End by SMILEDINING-SA21-0066#14
                protoTicketPayment.set('TicketPaymentStatus', v.ticketPaymentStatus);
                protoTicketPayment.set('Status', v.ticketPaymentStatus);
                protoTicketPayment.set('OrderTypeName', orderTypeName);
                protoTicketPayment.set('Command', 'NEW');
                ticketpaymentArr.push(protoTicketPayment);
            });
            //End Added by SMILEDINING-SA20-0007

            var orderArrId = [];
            var orderArr = [];

            _.forEach(order, function (v) {
                var protoOrder = new root.Order();
                orderArrId.push(v.orderId);
                protoOrder.set('OrderID', v.orderId.toString());
                protoOrder.set('DisplayFoodName', null);
                protoOrder.set('DisplayFoodInfo', null);
                protoOrder.set('DisplayFoodPrice', null);
                protoOrder.set('JobID', null);
                protoOrder.set('TicketID', v.ticketId.toString());
                protoOrder.set('SettlementID', null);
                protoOrder.set('UserClockID', null);
                protoOrder.set('OrderTypeID', v.orderTypeId);
                protoOrder.set('EmployeesID', null);
                protoOrder.set('ClientID', null);
                protoOrder.set('FoodID', v.foodId);
                protoOrder.set('FoodSetID', v.foodSetId);
                protoOrder.set('FoodCatID', v.foodCatId);
                protoOrder.set('RevenueClassID', v.revenueClassId);
                protoOrder.set('TaxRateID', v.taxRateId);
                protoOrder.set('TaxRate2ID', null);
                protoOrder.set('OrderDateTime', v.orderDateTime);
                if (isEmpty(v.discountAmount)) {
                    protoOrder.set('DiscountAmount', 0);
                } else {
                    protoOrder.set('DiscountAmount', v.discountAmount);
                }
                protoOrder.set('ApplyNoTax', null);
                protoOrder.set('TaxAmount', v.taxAmount);
                protoOrder.set('Tax2Amount', null);
                protoOrder.set('KitchenPrintDateTime', null);
                protoOrder.set('VoidReasonText', null);
                protoOrder.set('VoidDateTime', null);
                protoOrder.set('VoidReasonID', null);
                protoOrder.set('VoidEmployeesID', null);
                protoOrder.set('OrderEmployeeID', null);
                protoOrder.set('FoodName', v.foodName);
                protoOrder.set('FoodNameAlt', v.foodNameAlt);
                protoOrder.set('FoodPrice', v.foodPrice);
                protoOrder.set('OrderComment', v.orderComment);
                protoOrder.set('ExtraText', null);
                protoOrder.set('ExtraAmount', null);
                protoOrder.set('OrderChoiceAmount', v.orderChoiceAmount);
                protoOrder.set('OrderNetPrice', v.orderNetPrice);
                protoOrder.set('Priority', null);
                protoOrder.set('KitchenPrintStatus', null);
                protoOrder.set('HoldPrintTime', null);
                protoOrder.set('OrderStatus', v.orderStatus);
                protoOrder.set('InMemory', null);
                protoOrder.set('Status', v.orderStatus);
                protoOrder.set('GuestName', null);
                protoOrder.set('CanRollUp', null);
                protoOrder.set('PrintOnReceipt', null);
                protoOrder.set('PrintSingle', null);
                protoOrder.set('Ordering', v.ordering);
                protoOrder.set('FreshItemID', null);
                protoOrder.set('FreshDeduct', null);
                protoOrder.set('PriceMultiply', null);
                protoOrder.set('GratuityAmount', null);
                protoOrder.set('GratuityTax', null);
                protoOrder.set('OtherTax', v.otherTax);
                protoOrder.set('SplitInto', null);
                protoOrder.set('SplitNum', null);
                protoOrder.set('ThirdPartyID', null);
                protoOrder.set('ThirdPartyName', null);
                protoOrder.set('OrderTypeName', orderTypeName);
                protoOrder.set('Group', v.group);
                protoOrder.set('Command', 'NEW');

                var orderChoiceArr = [];
                var orderChoiceFilter = _.filter(orderChoice, function (f) {
                    return f.orderId == v.orderId;
                });

                _.forEach(orderChoiceFilter, function (oc) {
                    var protoOrderChoice = new root.OrderChoice();
                    protoOrderChoice.set('OrderChoiceID', oc.orderChoiceId.toString());
                    protoOrderChoice.set('OrderID', oc.orderId.toString());
                    protoOrderChoice.set('ChoiceID', oc.choiceId);
                    protoOrderChoice.set('ChoiceTypeID', oc.choiceTypeId);
                    protoOrderChoice.set('ChoiceName', oc.choiceName);
                    protoOrderChoice.set('ChoiceNameAlt', oc.choiceNameAlt);
                    protoOrderChoice.set('ChoicePrice', oc.choicePrice);
                    protoOrderChoice.set('ChoiceSort', oc.choiceSort);
                    protoOrderChoice.set('OrderChoiceDateTime', oc.orderChoiceDateTime);
                    protoOrderChoice.set('OrderChoiceStatus', oc.orderChoiceStatus);
                    protoOrderChoice.set('PrefixID', null);
                    protoOrderChoice.set('PriceMultiply', null);
                    protoOrderChoice.set('ChoiceOperator', oc.choiceOperator);
                    protoOrderChoice.set('InMemory', null);
                    protoOrderChoice.set('Status', oc.orderChoiceStatus);
                    orderChoiceArr.push(protoOrderChoice);
                });

                protoOrder.set('OrderChoiceList', orderChoiceArr);
                orderArr.push(protoOrder);
            });

            //Added by SMILEDINING-SA17-0026
            var autoChargeArr = [];
            _.forEach(autoCharge, function (v) {
                var protoAutoCharge = new root.AutoCharge();
                protoAutoCharge.set('Name', v.name);
                protoAutoCharge.set('Value', v.value);
                protoAutoCharge.set('Tax', v.tax);
                autoChargeArr.push(protoAutoCharge);
            });
            //End Aded by SMILEDINING-SA17-0026
            //Added by SMILEDINING-SA22-0020
            var paymentFeeArr = [];
            _.forEach(paymentFee, function (v) {
                var protoPaymentFee = new root.PaymentFee();
                protoPaymentFee.set('Name', v.name);
                protoPaymentFee.set('Value', v.value);
                protoPaymentFee.set('ID', v.id);    //Added and End by SMILEDINING-SA22-0020#4
                paymentFeeArr.push(protoPaymentFee);
            });
            //End Added by SMILEDINING-SA22-0020

            protoTicket.set('TicketPaymentList', ticketpaymentArr);
            protoTicket.set('OrderList', orderArr);
            protoTicket.set('AutoChargeList', autoChargeArr);       //Added and End by SMILEDINING-SA17-0026
            protoTicket.set('PaymentFeeList', paymentFeeArr);   //Added and End by SMILEDINING-SA22-0020
            protoTicket.set('CurbsidePickup', ticket.curbsidePickup);  //Added and End by SMILECONTACTLESS-SA20-0001

            var protoCustomer = new root.CustomerProfile();
            protoCustomer.set('CustomerID', ticket.customerId);
            protoCustomer.set('Email', customer.email);
            protoCustomer.set('Flag', customer.flag);
            protoCustomer.set('IsExternalLogIn', customer.isExternalLogIn);
            protoCustomer.set('FirstName', customer.firstName);
            protoCustomer.set('LastName', customer.lastName);
            
            var protoCustomerAddress = new root.CustomerAddress();
            if (isEmpty(customerAddress)) {
                protoCustomerAddress.set('CustomerAddressID', 0);
                protoCustomerAddress.set('Line', 0);
                protoCustomerAddress.set('AddressName', '');
                protoCustomerAddress.set('Address', '');
                protoCustomerAddress.set('AddressApt', '');
                protoCustomerAddress.set('City', '');
                protoCustomerAddress.set('State', '');
                protoCustomerAddress.set('PostTal', '');
                //protoCustomerAddress.set('Phone', currentPhone);  currentPhone is Smile Dining Only
                //protoCustomerAddress.set('Phone', '');  
                protoCustomerAddress.set('Phone', customer.ownerPhone); 
                protoCustomerAddress.set('IsDefault', false);
                protoCustomerAddress.set('CustomerID', ticket.customerId);
                protoCustomerAddress.set('Latitude', 0);
                protoCustomerAddress.set('Longitude', 0);
            } else {
                //protoCustomerAddress.set('CustomerAddressID', ticket.customerAddressId);      //Modified and End by SMILEDINING-SA20-0004
                //Added by SMILEDINING-SA20-0004
                if (isEmpty(ticket.customerAddressId)) {
                    protoCustomerAddress.set('CustomerAddressID', 0);
                } else {
                    protoCustomerAddress.set('CustomerAddressID', ticket.customerAddressId);
                }
                //End Added by SMILEDINING-SA20-0004
                protoCustomerAddress.set('Line', customerAddress.line);
                protoCustomerAddress.set('AddressName', customerAddress.addressName);
                protoCustomerAddress.set('Address', customerAddress.address);
                protoCustomerAddress.set('AddressApt', customerAddress.addressApt);
                protoCustomerAddress.set('City', customerAddress.city);
                protoCustomerAddress.set('State', customerAddress.state);
                protoCustomerAddress.set('PostTal', customerAddress.postTal);
                protoCustomerAddress.set('Phone', customerAddress.phone);
                protoCustomerAddress.set('IsDefault', customerAddress.isDefault);
                protoCustomerAddress.set('CustomerID', ticket.customerId);
                protoCustomerAddress.set('Latitude', parseFloat(customerAddress.latitude));
                protoCustomerAddress.set('Longitude', parseFloat(customerAddress.longitude));
            }

            var protoCustomerAddressBilling = new root.CustomerAddressBilling();
            if (isEmpty(customerAddressBilling)) {
                //Added by WEB-SA23-0036
                if (!isEmpty(ticket.guestId) && ticket.guestId != 0 && !isEmpty(guest.billingAddress)) {
                    protoCustomerAddressBilling.set('CustomerAddressBillingID', '');
                    protoCustomerAddressBilling.set('Line', 0);
                    protoCustomerAddressBilling.set('Address', guest.billingAddress);
                    //Modified by WEB-SA23-0036#1
                    //protoCustomerAddressBilling.set('City', guest.billingCity);
                    //protoCustomerAddressBilling.set('State', guest.billingState);
                    //End Modified by WEB-SA23-0036#1
                    //Added by WEB-SA23-0036#1
                    protoCustomerAddressBilling.set('City', !isEmpty(guest.billingCity) ? guest.billingCity : '');
                    protoCustomerAddressBilling.set('State', !isEmpty(guest.billingState) ? guest.billingState : '');
                    //End Added by WEB-SA23-0036#1
                    protoCustomerAddressBilling.set('PostTal', guest.billingPostal);
                    protoCustomerAddressBilling.set('Phone', customer.ownerPhone);
                    protoCustomerAddressBilling.set('IsDefault', false);
                    protoCustomerAddressBilling.set('CustomerID', 0);
                    protoCustomerAddressBilling.set('Latitude', 0);
                    protoCustomerAddressBilling.set('Longitude', 0);
                } else {
                //End Added by WEB-SA23-0036
                    protoCustomerAddressBilling.set('CustomerAddressBillingID', '');
                    protoCustomerAddressBilling.set('Line', 0);
                    protoCustomerAddressBilling.set('Address', '');
                    protoCustomerAddressBilling.set('City', '');
                    protoCustomerAddressBilling.set('State', '');
                    protoCustomerAddressBilling.set('PostTal', '');
                    protoCustomerAddressBilling.set('Phone', customer.ownerPhone);
                    protoCustomerAddressBilling.set('IsDefault', false);
                    protoCustomerAddressBilling.set('CustomerID', ticket.customerId);
                    protoCustomerAddressBilling.set('Latitude', 0);
                    protoCustomerAddressBilling.set('Longitude', 0);
                }
            } else {
                //protoCustomerAddressBilling.set('CustomerAddressBillingID', customerAddressBilling.customerAddresBillingID); //Modified and End by SMILEDINING-SA22-0008#6
                protoCustomerAddressBilling.set('CustomerAddressBillingID', customerAddressBilling.customerAddresBillingId.toString()); //Added and End by SMILEDINING-SA22-0008#6
                protoCustomerAddressBilling.set('Line', customerAddressBilling.line);
                protoCustomerAddressBilling.set('Address', customerAddressBilling.address);
                //Modified by WEB-SA23-0036#1
                //protoCustomerAddressBilling.set('City', customerAddressBilling.city);
                //protoCustomerAddressBilling.set('State', customerAddressBilling.state);
                //End Modified by WEB-SA23-0036#1
                //Added by WEB-SA23-0036#1
                protoCustomerAddressBilling.set('City', !isEmpty(customerAddressBilling.city) ? customerAddressBilling.city : '');
                protoCustomerAddressBilling.set('State', !isEmpty(customerAddressBilling.state) ? customerAddressBilling.state : '');
                //End Added by WEB-SA23-0036#1
                protoCustomerAddressBilling.set('PostTal', customerAddressBilling.postTal);
                protoCustomerAddressBilling.set('Phone', customerAddressBilling.phone);
                protoCustomerAddressBilling.set('IsDefault', customerAddressBilling.isDefault);
                protoCustomerAddressBilling.set('CustomerID', ticket.customerId);
                protoCustomerAddressBilling.set('Latitude', parseFloat(customerAddressBilling.latitude));
                protoCustomerAddressBilling.set('Longitude', parseFloat(customerAddressBilling.longitude));
            }

            protoCustomer.set('CustomerAddressList', protoCustomerAddress);
            protoCustomer.set('CustomerAddressBillingList', protoCustomerAddressBilling);       
            protoJob.set('TicketList', protoTicket);
            protoJob.set('CustomerProfileList', protoCustomer);

            //Added by SMILEDINING-SA21-0006#3
            var giftCerTransactionArr = [];
            var protoGiftCerTransaction = new root.GiftCerTransaction();
            if (giftCerTransaction != null) {
                protoGiftCerTransaction.set('TicketID', giftCerTransaction.ticketId.toString());
                protoGiftCerTransaction.set('PayCredit', giftCerTransaction.payCredit);
            }
            else {
                protoGiftCerTransaction.set('TicketID', '');
                protoGiftCerTransaction.set('PayCredit', null);
            }
            giftCerTransactionArr.push(protoGiftCerTransaction);
            protoTicket.set('GiftCerTransactionList', giftCerTransactionArr);
            //End Added by SMILEDINING-SA21-0006#3

            //Modified by SMILEDINING-SA21-0066#14
            ////Added by SMILEDINING-SA21-0066#13
            //var thirdPartyArr = [];
            //_.forEach(thirdParty, function (v) {
            //    var protoThirdParty = new root.ThirdParty();
            //    protoThirdParty.set('ChannelName', v.thirdPartyName);
            //    protoThirdParty.set('ChannelID', v.channelId);
            //    thirdPartyArr.push(protoThirdParty);
            //});
            //protoJob.set('ThirdPartyList', thirdPartyArr);
            ////End Added by SMILEDINING-SA21-0066#13
            //End Modified by SMILEDINING-SA21-0066#14

            var checkoutTicketByteBuffer = protoJob.encode();
            var checkoutTicketeBuffer = checkoutTicketByteBuffer.toBase64();

            var callSendTicket = $.connection.checkout.server.sendTicket(authentication, ticket.ticketId, orderArrId, checkoutTicketeBuffer, groupId);
            callSendTicket.done(function () {
                modalHide(cModalMonitor);
            });

            callSendTicket.fail(function (error) {
                swal('Oops...', cError_Fail_Send, cSwal_Icon_Error);
            });
        }
        //Owner
        else {
            var callSendTicket = $.connection.checkout.server.sendTicketToOwner(ticket.ticketId, groupId);
            callSendTicket.done(function () {
                modalHide(cModalMonitor);
            });

            callSendTicket.fail(function (error) {
                swal('Oops...', cError_Fail_Send, cSwal_Icon_Error);
            });
        }
    } else {
        swal('Oops...', cError_Fail_Send, cSwal_Icon_Error);
    }
};

function modalHide(id) {
    getIdTag(id).modal('hide');
};

function modalShow(id) {
    getIdTag(id).modal({
        keyboard: false,
        show: true,
        backdrop: false,
    })
};

function toastShopOffline(message) {
    vmViewIndex.shopOnline.toastMessage(message + ' is offline.');
    var toast = vmViewIndex.shopOnline.toast();
    switch (checkResolution()) {
        case 'xs':
        case 'sm':
            toast.position.my = 'left';
            toast.position.at = 'left bottom';
            toast.position.offset = '20 -40'
            break;
        case 'md':
        case 'lg':
        case 'xl':
            toast.position.my = 'top';
            toast.position.at = 'right top';
            toast.position.offset = '-180 20'
            break;
        default:
    }
    vmViewIndex.shopOnline.toastVisible(true);
};

function playSound(type) {
    switch (type) {
        case cSoundReceive:
            var sound = document.getElementById('audioSoundReceive');
            sound.play();
            break;
        case cSoundOffline:
            var sound = document.getElementById('audioSoundOffline');
            sound.play();
        default:

    }
};

function filterGlobalConfig(data, filter) {
    var values = ko.utils.arrayFilter(data, function (item) {
        return filter == item.globalConfigKey
    });
    //return values[0].globalConfigValue;       //Modified and End by SMILEDINING-SA19-0003
    // Added by SMILEDINING-SA19-0003    
    if (isEmpty(values))
        return "";
    else
        return values[0].globalConfigValue;
    // End Added by SMILEDINING-SA19-0003
};

function resetSetupViewModel() {
    vmViewIndex.setup.dataModal.action(cStatusAdd);
    vmViewIndex.setup.dataModal.domainId(0);
    vmViewIndex.setup.dataModal.domainName('');
    vmViewIndex.setup.dataModal.domainNameTemplate(null);
    vmViewIndex.setup.dataModal.domainValue('');

    //vmViewIndex.setup.dataModal.signalR(true); //Added and End by SMILEDINING-SA21-0043 //Modified and End by WEB-SA24-0024
    //Added by WEB-SA24-0024
    vmViewIndex.setup.dataModal.messagingProtocol(messagingProtocols.cKafkaAndSignalR);
    vmViewIndex.setup.dataModal.signalR(false);
    //End Added by WEB-SA24-0024
    vmViewIndex.setup.dataModal.usePos(true);
    vmViewIndex.setup.dataModal.useTemplate(false);
    vmViewIndex.setup.dataModal.active(true);
    //vmViewIndex.setup.dataModal.IsThirdPartyShogo(false); //Added and End by SMILEDINING-SA22-0039 // Modified and End by SMILEDINING-SA22-0039#1
    vmViewIndex.setup.dataModal.isThirdPartyShogo(false);   //Added and End by SMILEDINING-SA22-0039#1
    vmViewIndex.setup.dataModal.sourceKey('');
    vmViewIndex.setup.dataModal.pin('');
    vmViewIndex.setup.dataModal.apiKey('');     //Added and End by SMILEDINING-SA21-0007
    //Added by SMILEDINING-SA21-0014#7
    vmViewIndex.setup.dataModal.accountId('');
    vmViewIndex.setup.dataModal.accountName('');
    vmViewIndex.setup.dataModal.listLocation([]);
    vmViewIndex.setup.dataModal.locationSelect('');
    vmViewIndex.setup.dataModal.locationId('');
    //End Added by SMILEDINING-SA21-0014#7
    vmViewIndex.setup.dataModal.estimateTime(true); //Added an End by SMILEDINING-SA21-0054
    //Added by KENG
    //vmViewIndex.setup.dataModal.captchaEnable(false); //Modified and End by WEB-SA24-0024
    vmViewIndex.setup.dataModal.captchaEnable(true); //Added and End by WEB-SA24-0024
    //Added by WEB-SA24-0028
    vmViewIndex.setup.dataModal.reCaptchaSiteKey('');
    vmViewIndex.setup.dataModal.reCaptchaSecretKey('');
    //End Added by WEB-SA24-0028
    vmViewIndex.setup.dataModal.captchaKeepAlive(false);
    //End Added by KENG
    //Added by WEB-SA22-0057
    vmViewIndex.setup.dataModal.apiKey_percentage('');
    vmViewIndex.setup.dataModal.pin_percentage('');
    vmViewIndex.setup.dataModal.sourceKey_percentage('');
    //Added by WEB-SA23-0012
    vmViewIndex.setup.dataModal.paymentServiceProvider(1);
    vmViewIndex.setup.dataModal.emergepayOID(null);
    vmViewIndex.setup.dataModal.emergepayToken(null);
    vmViewIndex.setup.dataModal.emergepayOID_Percentage(null);
    vmViewIndex.setup.dataModal.emergepayToken_Percentage(null);
    //End Added by WEB-SA23-0012
    //Added by WEB-SA23-0022
    vmViewIndex.setup.dataModal.emergepayApiKey(null);
    vmViewIndex.setup.dataModal.emergepayApiKey_Percentage(null);
    //End Added by WEB-SA23-0022
    vmViewIndex.setup.dataModal.otterStoreId(null); //Added and End by WEB-SA23-0048
    vmViewIndex.setup.dataModal.otterEventId(null); //Added and End by WEB-SA23-0048#3
    //Modified by WEB-SA22-0057#1
    //vmViewIndex.setup.dataModal.feePos('');
    //vmViewIndex.setup.dataModal.feeDining('');
    //vmViewIndex.setup.dataModal.feeOnTable('');
    //vmViewIndex.setup.dataModal.feeEGiftCard('');
    //End Modified by WEB-SA22-0057#1
    //Added by WEB-SA22-0057#1
    vmViewIndex.setup.dataModal.feePos(1);
    vmViewIndex.setup.dataModal.feeDining(1);
    vmViewIndex.setup.dataModal.feeOnTable(1);
    vmViewIndex.setup.dataModal.feeEGiftCard(1);
    vmViewIndex.setup.dataModal.isMarketingKey(false);
    //End Added by WEB-SA22-0057#1
    //End Added by WEB-SA22-0057

    //status
    vmViewIndex.setup.dataModal.status(true);
    vmViewIndex.setup.dataModal.closeReson('');
    vmViewIndex.setup.dataModal.closeStartDate('');
    vmViewIndex.setup.dataModal.closeEndDate('');

    //Added by SMILEDINING-SA20-0031
    vmViewIndex.setup.dataModal.statusContactless(true);
    vmViewIndex.setup.dataModal.closeResonContactless('');
    vmViewIndex.setup.dataModal.closeStartDateContactless('');
    vmViewIndex.setup.dataModal.closeEndDateContactless('');
    //End Added by SMILEDINING-SA20-0031

    vmViewIndex.setup.dataModal.dateBoxCloseStartDate({
        value: null
    });

    vmViewIndex.setup.dataModal.dateBoxCloseEndDate({
        value: null
    });

    //shop
    vmViewIndex.setup.dataModal.shopName('');
    vmViewIndex.setup.dataModal.shopAddress('');
    vmViewIndex.setup.dataModal.shopCity('');
    vmViewIndex.setup.dataModal.shopState('');
    vmViewIndex.setup.dataModal.shopPostal('');
    vmViewIndex.setup.dataModal.shopPhone('');
    vmViewIndex.setup.dataModal.shopFax('');
    vmViewIndex.setup.dataModal.shopEmail('');
    vmViewIndex.setup.dataModal.shopEmailGiftCard(''); //Added and End by SMILEDINING-SA20-0014
    vmViewIndex.setup.dataModal.lat('');
    vmViewIndex.setup.dataModal.lng('');
    vmViewIndex.setup.dataModal.timeZoneCode('004');
    vmViewIndex.setup.dataModal.timePickupStart(0);
    vmViewIndex.setup.dataModal.timePickupEnd(0);
    vmViewIndex.setup.dataModal.timeDeliveryStart(0);
    vmViewIndex.setup.dataModal.timeDeliveryEnd(0);

    vmViewIndex.setup.dataModal.dxLookuptimeZoneCode({
        value: '004'
    })

    //Payment
    vmViewIndex.setup.dataModal.serviceFee(0);
    vmViewIndex.setup.dataModal.deliveryChargeTax(0);
    //vmViewIndex.setup.dataModal.creditCardFee(0); //Modified and End by SMILEDINING-SA22-0032
    vmViewIndex.setup.dataModal.serviceFeePercent(0); //Added and End by SMILEDINING-SA22-0032
    vmViewIndex.setup.dataModal.minimumOrder(0);
    vmViewIndex.setup.dataModal.calDeliveryTax(true);
    vmViewIndex.setup.dataModal.commissionRule('1');
    //vmViewIndex.setup.dataModal.payCash(true);
    //vmViewIndex.setup.dataModal.payCredit(true);
    //Added by SMILEDINING-SA20-0044
    vmViewIndex.setup.dataModal.pickupPayCash(true);
    vmViewIndex.setup.dataModal.pickupPayCredit(true);
    vmViewIndex.setup.dataModal.deliveryPayCash(true);
    vmViewIndex.setup.dataModal.deliveryPayCredit(true);
    //End Added by SMILEDINING-SA20-0044
    //Added by WEB-SA24-0016
    vmViewIndex.setup.dataModal.contactlessPaymentType(contactlessPaymentType.cFastService);
    vmViewIndex.setup.dataModal.contactlessPaymentMethod(contactlessPaymentMethod.cDefault);
    //End Added by WEB-SA24-0016
    //vmViewIndex.setup.dataModal.statementType('1');    //0 weekly 1 monthly //Modified and End by WEB-SA23-0035#1
    vmViewIndex.setup.dataModal.mapCode('1');  //0 : lat/long , code 1 : mile
    //vmViewIndex.setup.dataModal.autoSyncProduct(false); //Added and End by SMILEDINING-SA21-0014 //Modified and End by WEB-SA24-0003
    vmViewIndex.setup.dataModal.autoSyncProduct(true); //Added and End by WEB-SA24-0003
    //Added by WEB-SA23-0020
    vmViewIndex.setup.dataModal.isAdditionalCharge(false);
    vmViewIndex.setup.dataModal.additionalChargeTypeList([]);
    vmViewIndex.setup.dataModal.tempAdditionalChargeList([]);
    vmViewIndex.setup.dataModal.additionalChargeList([]);
    //End Added by WEB-SA23-0020
    //vmViewIndex.setup.dataModal.webDispatch(false); //Added and End by SMILEDINING-SA21-0066 //Modified and End by SMILEDINING-SA21-0066#1
    vmViewIndex.setup.dataModal.webDispatch(null); //Added and End by SMILEDINING-SA21-0066#1
    //Added by WEB-SA23-0025
    vmViewIndex.setup.dataModal.dispatchType(cDispatchType_None);
    vmViewIndex.setup.dataModal.listDispatchSelect('');
    vmViewIndex.setup.dataModal.dispatchStore([]);
    vmViewIndex.setup.dataModal.currentDispatchIdStore('');
    vmViewIndex.setup.dataModal.listDispatch([]);
    vmViewIndex.setup.dataModal.dispatchServiceCharge(0);
    //End Added by WEB-SA23-0025

    vmViewIndex.setup.dataModal.dxLookupCommission({
        value: '1'
    });


    //Gift Card
    //Added by SMILEDINING-SA19-0011
    vmViewIndex.setup.dataModal.productId('1,2');
    const arrSelectProduct = '1,2'.split(',');
    //const arrProduct = ['1', '2', '3'];       //Modified and End by SMILEDINING-SA20-0005
    //const arrProduct = ['1', '2', '3', '4'];    //Added and End by SMILEDINING-SA20-0005      //Modified and End by SMILEDINING-SA21-0014
    //const arrProduct = ['1', '2', '3', '4', '5'];    //Added and End by SMILEDINING-SA21-0014 //Modified and End by WEB-SA23-0043
    const arrProduct = ['1', '2', '3', '4', '5', '6'];    //Added and End by WEB-SA23-0043

    vmViewIndex.setup.dataModal.arrProduct.removeAll();
    vmViewIndex.setup.dataModal.selectCheckBoxProduct.removeAll();

    if (arrProduct.length > 0) {
        _.forEach(arrProduct, function (value) {
            vmViewIndex.setup.dataModal.arrProduct.push(value);
        });
    }

    if (arrSelectProduct.length > 0) {
        _.forEach(arrSelectProduct, function (value) {
           vmViewIndex.setup.dataModal.selectCheckBoxProduct.push(value);
        });
    }

    //Added by SMILEDINING-SA20-0006
    if (vmViewIndex.setup.dataModal.selectCheckBoxProduct().includes(products.cSmileContactless)) {
        vmViewIndex.setup.dataModal.showPaymentContactless(true);
        vmViewIndex.setup.dataModal.showSmileContactless(true);     //Added and End by SMILEDINING-SA20-0031
    }
    else {
        vmViewIndex.setup.dataModal.showPaymentContactless(false);
        vmViewIndex.setup.dataModal.showSmileContactless(false);     //Added and End by SMILEDINING-SA20-0031
    }
    //End Added by SMILEDINING-SA20-0006

    //Added by SMILEDINING-SA20-0031
    if (vmViewIndex.setup.dataModal.selectCheckBoxProduct().includes(products.cSmileDining)) {
        vmViewIndex.setup.dataModal.showSmileDining(true);
    }
    else {
        vmViewIndex.setup.dataModal.showSmileDining(false);
    }
    //End Added by SMILEDINING-SA20-0031

    //End Added by SMILEDINING-SA19-0011

    //Added by SMILEDINING-SA21-0014
    //if (vmViewIndex.setup.dataModal.selectCheckBoxProduct().includes(products.cSmileThirdPartyIntegrations)) { //Modified and End by SMILEDINING-SA21-0066#5
    if (vmViewIndex.setup.dataModal.selectCheckBoxProduct().includes(products.cSmileThirdPartyIntegrations) && vmViewIndex.setup.dataModal.active()) { //Added and End by SMILEDINING-SA21-0066#5
        vmViewIndex.setup.dataModal.showThirdPartyIntegrations(true);
    }
    else {
        vmViewIndex.setup.dataModal.showThirdPartyIntegrations(false);
        //$('.slickSetup .slick-dots li:nth-of-type(4)').addClass('d-none');    //Modified and End By SMILEDINING-SA22-0039#2
        //$('.slickSetup .slick-dots li:nth-of-type(5)').addClass('d-none');      //Added and End By SMILEDINING-SA22-0039#2    //Modified and End bu WEB-SA22-0057
        $('.slickSetup .slick-dots li:nth-of-type(6)').addClass('d-none');  //Added and End by WEB-SA22-0057
    }
    //End Added by SMILEDINING-SA21-0014
    vmViewIndex.setup.dataModal.showSplitTaxesAndFeesProductIds([]); //Added and End by WEB-SA23-0010
};

function resetOwnerViewModel() {
    vmViewIndex.owner.dataModal.action(cStatusAdd);
    vmViewIndex.owner.dataModal.customerId('');
    vmViewIndex.owner.dataModal.ownerId('');
    vmViewIndex.owner.dataModal.ownerPhone('');
    vmViewIndex.owner.dataModal.email('');
    vmViewIndex.owner.dataModal.firstName('');
    vmViewIndex.owner.dataModal.lastName('');
    vmViewIndex.owner.dataModal.password('');
    vmViewIndex.owner.dataModal.confirmPassword('');
    vmViewIndex.owner.dataModal.showPassword(true);
    var value;
    if (isEmpty(vmViewIndex.owner.dataModal.dxLookupDomain().dataSource)) {
        value = vmViewIndex.owner.dataModal.dxLookupDomain().value
    } else {
        value = vmViewIndex.owner.dataModal.dxLookupDomain().dataSource._array[0].domainId();
    }
    
    vmViewIndex.owner.dataModal.dxLookupDomain({
        value: value
    })
    vmViewIndex.owner.dataModal.domainId(value);
};

function resetCreateAccountViewModel() {
    vmViewIndex.setting.dataModalCreateAccount.firstName('');
    vmViewIndex.setting.dataModalCreateAccount.lastName('');
    vmViewIndex.setting.dataModalCreateAccount.email('');
    vmViewIndex.setting.dataModalCreateAccount.newPassword('');
    vmViewIndex.setting.dataModalCreateAccount.confirmPassword('');
    vmViewIndex.setting.dataModalCreateAccount.securityCode('');
    vmViewIndex.setting.dataModalCreateAccount.roleName('');
};

function resetWrRoleMenuViewModel() {
    vmViewIndex.webreport.dataRoleMenuModal.roleMenuMapId(null);
    vmViewIndex.webreport.dataRoleMenuModal.customerId(null);
    vmViewIndex.webreport.dataRoleMenuModal.roleMenuMap([]);
    ko.utils.arrayForEach(vmViewIndex.webreport.dataRole(), function (item) {
        vmViewIndex.webreport.dataRoleMenuModal.roleMenuMap.push(new ChildrenDataRoleMenuMapModel(item.roleId(), item.roleName, []));
    })
    vmViewIndex.webreport.dataRoleMenuModal.action(cStatusAdd);
    vmViewIndex.webreport.rdoRoleSelectInRoleMenuMap(_.head(vmViewIndex.webreport.dataRole()).roleId());

    vmViewIndex.webreport.dataRoleMenuModal.dxLookupCustomer({
        value: null
    });
};

function resetWrUserViewModel() {
    vmViewIndex.webreport.dataUserModal.userId(null);
    vmViewIndex.webreport.dataUserModal.email('');
    vmViewIndex.webreport.dataUserModal.firstName('');
    vmViewIndex.webreport.dataUserModal.lastName('');
    vmViewIndex.webreport.dataUserModal.phone('');
    vmViewIndex.webreport.dataUserModal.active(true);
    vmViewIndex.webreport.dataUserModal.action(cStatusAdd);
};

function resetWrUserRoleMapViewModel() {
    vmViewIndex.webreport.dataUserRoleMapModal.userRoleMapId(null);
    vmViewIndex.webreport.dataUserRoleMapModal.customerId(null);
    vmViewIndex.webreport.dataUserRoleMapModal.userId(null);
    vmViewIndex.webreport.dataUserRoleMapModal.roleId(null);
    vmViewIndex.webreport.dataUserRoleMapModal.action(cStatusAdd);

    vmViewIndex.webreport.dataUserRoleMapModal.dxLookupCustomer({
        value: null
    });

    vmViewIndex.webreport.dataUserRoleMapModal.dxLookupUser({
        value: null
    });

    vmViewIndex.webreport.dataUserRoleMapModal.dxLookupRole({
        value: null
    });

    vmViewIndex.webreport.dataUserRoleMapModal.dxLookupCustomerValid(true);
    vmViewIndex.webreport.dataUserRoleMapModal.dxLookupUserValid(true);
    vmViewIndex.webreport.dataUserRoleMapModal.dxLookupRoleValid(true);

    removeErrorMessageUserRoleMap();
};


function removeErrorMessageUserRoleMap() {
    getIdTag(cfrmWrUserRoleMap).find('.panel-messsage-error').hide();
};

function removeErrorMessageRoleMenuMap() {
    getIdTag(cfrmWrRoleMenuMap).find('.panel-messsage-error').hide();
};

//Added by SMILEDINING-SA19-0011
function removeErrorMessage(id) {
    getIdTag(id).find('.panel-messsage-error').hide();
}
//End Added by SMILEDINING-SA19-0011

function toggleSlideMobile() {
    $('.ssm-toggle-nav').click();
};

function setGeoLocation() {
    $('#' + cfrmSetUpDomain + ' ' + cfrmSetUpDomain_ShopAddress).geocomplete({
        details: ".googleAddress",
        detailsAttribute: "data-geo",
        country: 'US',
    });
};

//Added by WEB-SA24-0024#5
function setShopAddressPlaceId() {
    var address = $(cfrmSetUpDomain_ShopAddress).val();
    getPlacePredictions(address, function (predictions) {
        var prediction = _.head(predictions);
        if (isEmpty(prediction)) {
            return false;
        }
        $(cfrmSetUpDomain_ShopAddress_PlaceId).val(prediction.place_id);
    });
};
//End Added by WEB-SA24-0024#5

function setMaskPhone() {
    $('.mask-phone').inputmask({
        mask: '(999) 999-9999'
    });
};

function disableErrMsg(tag) {
    //tag.parent().parent().parent().parent().find('.panel-messsage-error').hide();
    //tag.parent().parent().parent().parent().parent().parent().parent().parent().parent().parent().find('.panel-messsage-error').hide(); //Modified and End by SMILEDINING-SA22-0032
    tag.parent().parent().parent().parent().parent().parent().parent().parent().parent().parent().parent().find('.panel-messsage-error').hide(); //Added and End by SMILEDINING-SA22-0032
    tag.removeClass(cCssInputValidateError);
};

//ko.extenders.numeric = function (target, precision) {
//    var result = ko.computed({
//        read: function () {
//            return parseFloat(target()).toFixed(precision);
//        },
//        write: target
//    });

//    result.raw = target;
//    return result;
//};

ko.extenders.numeric = function (target, precision) {
    //create a writable computed observable to intercept writes to our observable
    var result = ko.pureComputed({
        read: function () {
            return parseFloat(target()).toFixed(precision);
        },
        write: function (newValue) {
            var current = target(),
                roundingMultiplier = Math.pow(10, precision),
                newValueAsNum = isNaN(newValue) ? 0 : parseFloat(+newValue),
                valueToWrite = Math.round(newValueAsNum * roundingMultiplier) / roundingMultiplier;

            //only write if it changed
            if (valueToWrite !== current) {
                target(valueToWrite);
            } else {
                //if the rounded value is the same, but a different value was written, force a notification for the current field
                if (newValue !== current) {
                    target.notifySubscribers(valueToWrite);
                }
            }
        }
    }).extend({ notify: 'always' });

    //initialize with current value to make sure it is rounded appropriately
    result(target());

    //return the new computed observable
    return result;
};

//Added by SMILEDINING-SA19-0023
function swalMessage(messageObject, callback) {
    swal({
        type: messageObject.msgType,
        title: messageObject.msgTitle,
        showConfirmButton: true,
        showCancelButton: true,
    }).then(function () {
        if (typeof callback == 'function') {
            callback.call(this);
        };
    }, function (dismiss) {

    });
};

function updateVoidStatusTicketData(item) {
    var filterValue = ko.utils.arrayFilter(vmViewIndex.monitor.data(), function (value) {
        return (value.ticketId() == item.ticketId && value.domainId() == item.domainId);
    });
    var voidStatus = _.first(filterValue).ticketStatus(item.ticketStatus);
    vmViewIndex.monitor.data.replace(_.first(filterValue), voidStatus);
};
//End Added by SMILEDINING-SA19-0023

//Added by SMILECONTACTLESS-SA20-0001
function getObjFormAjax(jsonObj, id) {
    var objUrl = new ObjUrl(jsonObj);
    var requestUrl = objUrl.getUrlFromJson();
    var passData;
    if (!isEmpty(id)) {
        passData = JSON.parse('{"key" : "' + id + '"}');
    }
    return getJsonFromAjax(requestUrl, !ajax_async, ajax_cache, ajax_type_post, passData, ajax_timeout);
};
//End Added by SMILECONTACTLESS-SA20-0001

//Added by WEB-SA24-0002
function getObjFormAjaxByJson(jsonObj, json) {
    var objUrl = new ObjUrl(jsonObj);
    var requestUrl = objUrl.getUrlFromJson();
    var passData = { key: json };
    return getJsonFromAjax(requestUrl, !ajax_async, ajax_cache, ajax_type_post, passData, ajax_timeout);
};
//End Added by WEB-SA24-0002

//Added by SMILEDINING-SA20-0031#4
function getObjFormDomainFormAjax(jsonObj, domainId, key) {
    var objUrl = new ObjUrl(jsonObj);
    var requestUrl = objUrl.getUrlFromJson();
    var passData;
    if (!isEmpty(key) && !isEmpty(domainId)) {
        passData = JSON.parse('{"domain" : "' + domainId + '", "key" : "' + key + '"}');
    }
    return getJsonFromAjax(requestUrl, !ajax_async, ajax_cache, ajax_type_post, passData, ajax_timeout);
};
//End Added by SMILEDINING-SA20-0031#4
//Added by SMILEDINING-SA22-0022
//function getDataDeliveryBillingObjFormAjax(jsonObj, domainId, domainName, key) { //Modified and End by SMILEDINING-SA22-0022#3
function getDataDeliveryBillingObjFormAjax(jsonObj, domainId, domainName, key, dispatchType) { //Added and End by SMILEDINING-SA22-0022#3
    var objUrl = new ObjUrl(jsonObj);
    var requestUrl = objUrl.getUrlFromJson();
    var passData = {
        domainId: domainId,
        domainName: domainName,
        key: key,
        dispatchType: dispatchType, //Added and End by SMILEDINING-SA22-0022#3
    };
    return getJsonFromAjax(requestUrl, !ajax_async, ajax_cache, ajax_type_post, passData, ajax_timeout);
}

function checkDispatchTypeName(dispatchTypeId) {
    switch (dispatchTypeId.toString()) {
        case cDispatchType_Deliverect:
            return cDispatchType_Deliverect_Name;
            break;
        case cDispatchType_DoorDash:
            return cDispatchType_DoorDash_Name;
            break;
    }
}
//End Added by SMILEDINING-SA22-0022

//Added by SMILEDINING-SA22-0032
function printWindow(dataResult) {
    var printWindow = window.open('', '_blank', 'resizable=yes, width=800, height=768');
    printWindow.document.write('<html><head><title></title>');
    printWindow.document.write('<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta/css/bootstrap.min.css" type="text/css" />');
    printWindow.document.write('<style type="text/css">' +
                               '@page {size: 21cm 29.7cm;margin: 10mm 6mm 10mm 10mm;}' +
                               '</style>'
    );
    printWindow.document.write('</head><body><div class="row"><div class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 center-block">');
    printWindow.document.write(dataResult);
    printWindow.document.write('</div></div></body></html>');
    printWindow.document.close();
    setTimeout(function () {
        printWindow.print();
    }, 1000);
};

function removeTag(theTarget, theString) {
    return $("<div/>").append(
        $(theTarget, theString).remove().end()
    ).html();
};

function saveAs(uri, filename) {
    var link = document.createElement('a');
    if (typeof link.download === 'string') {
        link.href = uri;
        link.download = filename;

        //Firefox requires the link to be in the body
        document.body.appendChild(link);

        //simulate click
        link.click();

        //remove the link when done
        document.body.removeChild(link);
    } else {
        window.open(uri);
    }
};
//End Added by SMILEDINING-SA22-0032
//Modified by WEB-SA23-0043
////Added by WEB-SA22-0071
//function numberWithCommas(x) {
//    return x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
//}
////End Added by WEB-SA22-0071
//End Modified by WEB-SA23-0043
//Added by WEB-SA23-0043
function numberWithCommas(x, hasDigits = true) {
    if (hasDigits)
        return Number(x).toLocaleString('en-US', {minimumFractionDigits: 2, maximumFractionDigits: 2});
    else
        return Number(x).toLocaleString('en-US');
}
//End Added by WEB-SA23-0043
//Added by WEB-SA22-0050#4
function setBlockEmoji() {
    var inputs = $('input').not(':input[type=file]'); //Added and End by WEB-SA23-0049
    //$('input').bind('input', function () { //Modified and End by WEB-SA23-0049
    inputs.bind('input', function () { //Added and End by WEB-SA23-0049
        var str = $(this).val();
        var cleanStr = removeEmojis(str);
        $(this).val(cleanStr);
    });
    //$('input').bind('paste', function () { //Modified and End by WEB-SA23-0049
    inputs.bind('paste', function () { //Added and End by WEB-SA23-0049
        var str = $(this).val();
        var cleanStr = removeEmojis(str);
        $(this).val(cleanStr);
    });
    $('textarea').bind('input', function () {
        var str = $(this).val();
        var cleanStr = removeEmojis(str);
        $(this).val(cleanStr);
    });
    $('textarea').bind('paste', function () {
        var str = $(this).val();
        var cleanStr = removeEmojis(str);
        $(this).val(cleanStr);
    });
    function removeEmojis(string) {
        var regex = /(?:[\u2700-\u27bf]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff]|[\u0023-\u0039]\ufe0f?\u20e3|\u3299|\u3297|\u303d|\u3030|\u24c2|\ud83c[\udd70-\udd71]|\ud83c[\udd7e-\udd7f]|\ud83c\udd8e|\ud83c[\udd91-\udd9a]|\ud83c[\udde6-\uddff]|\ud83c[\ude01-\ude02]|\ud83c\ude1a|\ud83c\ude2f|\ud83c[\ude32-\ude3a]|\ud83c[\ude50-\ude51]|\u203c|\u2049|[\u25aa-\u25ab]|\u25b6|\u25c0|[\u25fb-\u25fe]|\u00a9|\u00ae|\u2122|\u2139|\ud83c\udc04|[\u2600-\u26FF]|\u2b05|\u2b06|\u2b07|\u2b1b|\u2b1c|\u2b50|\u2b55|\u231a|\u231b|\u2328|\u23cf|[\u23e9-\u23f3]|[\u23f8-\u23fa]|\ud83c\udccf|\u2934|\u2935|[\u2190-\u21ff]|[\u2764]|[\uFE0F]|[\uffff])/g; //Added and End by SMILEDINING-SA21-0069#2
        return string.replace(regex, '');
    }
}//End Added by WEB-SA22-0050#4

//Added by WEB-SA23-0008
function checkBrowserName() {
    switch (true) {
        case isEdage():
            return 'Edge';
            break;
        case isEdageChromium():
            return 'Edge';
            break;
        case isChrome():
            return 'Chrome';
            break;
        case isSafari():
            return 'Safari';
            break;
        case isFireFox():
            return 'FireFox';
            break;
        default:
            return 'Other';
            break;
    }
};

function connectMqtt(message, clientId) {
    try {
        if (isEmpty(vmViewIndex.mqttServer()) || isEmpty(vmViewIndex.mqttUser()) || isEmpty(vmViewIndex.mqttPsw())) {
            var data = JSON.parse(getObjFormAjax(cJsonGetDataMqtt));
            vmViewIndex.mqttServer(data.mqttServer);
            vmViewIndex.mqttUser(data.mqttUser);
            vmViewIndex.mqttPsw(data.mqttPsw);
        }
        if (!isEmpty(vmViewIndex.mqttServer()) && !isEmpty(vmViewIndex.mqttUser()) && !isEmpty(vmViewIndex.mqttPsw()) && !isEmpty(clientId)) {
            var port = 8083;
            mqtt = new Paho.MQTT.Client(vmViewIndex.mqttServer(), Number(port), clientId);
            mqtt.onConnectionLost = onConnectionLost;
            mqtt.onMessageArrived = onMessageArrived; //Added and End by WEB-SA23-0048#3

            var connectOptions = {
                onSuccess: onConnect,
                onFailure: onFailure,
                useSSL: true,
                userName: vmViewIndex.mqttUser(),
                password: vmViewIndex.mqttPsw(),
            };
            mqtt.connect(connectOptions);

            function onConnect() {
                mqtt.subscribe(vmViewIndex.setup.dataModal.domainId() + cTopicTable + 'globalConfig'); //Added and End by WEB-SA23-0048#3
                if (!isEmpty(message))
                    mqtt.send(message);
            }

            function onFailure() {
                setTimeout(function () {
                    if (!mqtt.isConnected())
                        connectMqtt(message, clientId);
                }, reconnectTimeoutMqtt);
            }

            function onConnectionLost(responseObject) {
                if (responseObject.errorCode !== 0) {
                    console.log("onConnectionLost:" + responseObject.errorMessage);
                }
                setTimeout(function () {
                    if (!mqtt.isConnected())
                        connectMqtt(message, clientId);
                }, reconnectTimeoutMqtt);
            }

            //Added by WEB-SA23-0048#3
            function onMessageArrived(message) {
                if (message.destinationName === vmViewIndex.setup.dataModal.domainId() + cTopicTable + 'globalConfig') {
                    otterCheckEventId(message.payloadString);
                }
            }
            //End Added by WEB-SA23-0048#3
        }
    } catch (e) {
        console.log('Exception : ' + e.message);
    }
};

function sendMqtt(data, topic, clientId) {
    var message = new Paho.MQTT.Message(createJsonMqtt(data, clientId));
    message.destinationName = topic;
    message.qos = 1;
    message.retained = false;
    if (mqtt.isConnected())
        mqtt.send(message);
    else
        setTimeout(function () { connectMqtt(message, clientId); }, reconnectTimeoutMqtt);
};

function createJsonMqtt(data, clientId) {
    var jsonDataList = [];
    if (data.length > 0) {
        _.forEach(data, function (val) {
            jsonDataList.push(JSON.stringify(val));
        });
    }
    else if (!isEmpty(data)) {
        jsonDataList.push(JSON.stringify(data));
    }
    var results = {
        result: {
            product: 'support',
            values: jsonDataList
        },
        message: clientId,
        status: 1
    }
    return JSON.stringify(results);
};

function getClientIdMqtt(shopCode) {
    if (!isEmpty(shopCode)) {
        vmViewIndex.mqttClientId(shopCode + '/' + checkBrowserName() + '/' + parseInt(Math.random() * 100, 10));
        return vmViewIndex.mqttClientId();
    } else {
        return '';
    }
};

function getTopicMqtt(shopCode, name) {
    return shopCode + cTopicTable + name;
};

function checkMqttConnection(formId, status) {
    var isConnected = true;
    vmViewIndex.isKiosk(false);
    switch (formId) {
        case cfrmSetUpDomain:
            if (status == cStatusUpdate) {
                //if (vmViewIndex.setup.dataModal.productId().includes(products.cSmileContactless)) { //Modified and End by WEB-SA23-0008#1
                if (vmViewIndex.setup.dataModal.productId().includes(products.cSmileContactless) || vmViewIndex.setup.dataModal.currentProductId().includes(products.cSmileContactless)) { //Added and End by WEB-SA23-0008#1
                    vmViewIndex.isKiosk(true);
                    isConnected = mqtt.isConnected();
                }
            }
            break;
        case cfrmShopClose:
        case cfrmDeleteShopClose:
            if (vmViewIndex.setup.dataModal.productId().includes(products.cSmileContactless)) {
                vmViewIndex.isKiosk(true);
                isConnected = mqtt.isConnected();
            }
            break;
    }
    return isConnected;
};
//End Added by WEB-SA23-0008
//Added by WEB-SA23-0013
function getPrevMonth(date) {
    var prevMonth = new Date(date.setDate(1));
    prevMonth.setMonth(prevMonth.getMonth() - 1);
    return prevMonth;
};
//End Added by WEB-SA23-0013
//Added by WEB-SA23-0013#4
function checkCurrentMonth(date) {
    var currentDate = new Date();
    var currentMonth = currentDate.getMonth();
    var currentYear = currentDate.getFullYear();
    var selectDate = new Date(date);
    var selectMonth = selectDate.getMonth();
    var selectYear = selectDate.getFullYear();
    return currentMonth == selectMonth && currentYear == selectYear;
};
//End Added by WEB-SA23-0013#4
//Added by WEB-SA23-0050
function onShopAddressChange() {
    vmViewIndex.setup.dataModal.shopCity('');
    vmViewIndex.setup.dataModal.shopState('');
    document.getElementById(cfrmSetUpDomain_ShopCity.replace('#', '')).value = '';
    document.getElementById(cfrmSetUpDomain_ShopState.replace('#', '')).value = '';
};
//End Added by WEB-SA23-0050

//Added by WEB-SA24-0002
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
//End Added by WEB-SA24-0002

//Added by WEB-SA24-0024
function getGeoData(placeId, filter , callback) {
    var geocoder = new google.maps.Geocoder;

    if (filter == cGeoByAddress) {
        geocoder.geocode({ 'address': placeId }, function (results, status) { geoResult(results, status) });
    } else {
        geocoder.geocode({ 'placeId': placeId }, function (results, status) { geoResult(results, status) });
    }

    function geoResult(results, status) {
        if (status !== 'OK') {
            if (typeof callback == 'function') {
                callback.call(this, '');
            }
        }
        else {
            var data = {};
            var geoResult = _.head(results);
            var geoMetry = geoResult.geometry;
            var geoViewPort = geoMetry.viewport;
            var geoBounds = geoMetry.bounds;
            var geoAddress = geoResult.address_components;
            var geoFormattedAddress = geoResult.formatted_address;

            _.forEach(geoAddress, function (object, index) {
                var name = _.head(object.types);
                _.forEach(object.types, function (name, index) {
                    data[name] = object.long_name;
                    data[name + "_short"] = object.short_name;
                });
            });

            _.assignIn(data, {
                formatted_address: geoFormattedAddress,
                location_type: geoMetry.location_type || "PLACES",
                viewport: geoViewPort,
                bounds: geoBounds,
                location: geoMetry.location,
                lat: geoMetry.location.lat(),
                lng: geoMetry.location.lng()
            });

            if (typeof callback == 'function') {
                callback.call(this, data);
            }
        }
    };
};

function getPlacePredictions(txtInput, callback){
    var service = new google.maps.places.AutocompleteService();
    service.getPlacePredictions({ input: txtInput, componentRestrictions: { country: 'us' } }, 
        function (predictions, status) { 
            if (status == google.maps.places.PlacesServiceStatus.OK) {
                if (typeof callback == 'function') {
                    //callback.call(this, _.head(predictions)); //Modified and End by WEB-SA24-0024#4
                    callback.call(this, predictions); //Added and End by WEB-SA24-0024#4
                }
            } else {
                if (typeof callback == 'function') {
                    callback.call(this, '');
                }
            }
    });
};
//End Added by WEB-SA24-0024

//Added by WEB-SA24-0025#1
function renderCaptcha() {
    turnstile.ready(function () {
        $('.turnstileWidget').each(function (index) { 
            var id = "cf-turnstile-c" + index;
            $(this).html(`<div id="${id}" class="cf-turnstile-container"></div>`);
            turnstile.render('#' + id, {
                sitekey: vmViewIndex.reCaptchaSiteKey(),
                theme: 'light',
                size: 'normal',
                callback: function(token) {},
            });
        });
    });
};

function resetCaptCha() {
    $('.cf-turnstile-container').find('input[name="cf-turnstile-response"]').each(function() {
        var widgetId = $(this).attr('id');
        if (!isEmpty(widgetId)) {
            widgetId = widgetId.replace('_response', '');
            turnstile.reset(widgetId);
        }
    });
};
//End Added by WEB-SA24-0025#1

//Added by WEB-SA24-0029
function areArraysEqual(arrA, arrB, key) {
    if (arrA.length !== arrB.length) {
        return false;
    }

    let areArrsEqual = true;
    _.forEach(arrA, function (objA) {
        let objB = _.find(arrB, function (item) {
            return item[key] == objA[key];
        });
        if (isEmpty(objB) || (!areObjectsEqual(objA, objB))) {
            areArrsEqual = false;
            return false;
        }
    });
    return areArrsEqual;    
}

function areObjectsEqual(objA, objB) {
    let areObjsEqual = true;
    for(let propertyName in objA) {
      if(objA[propertyName] !== objB[propertyName]) {
         areObjsEqual = false;
         break;
      }
   }
   return areObjsEqual;
}

function checkCustomerPermission(permissionId) {
    if (isEmpty(vmViewIndex.customer.permissionIds()) || isEmpty(vmViewIndex.customer.roleIds()))
        return false;

    if (vmViewIndex.customer.roleIds().includes(0))
        return true;

    return vmViewIndex.customer.permissionIds().includes(permissionId);
};

function copyTextToClipboard(text) {
    var copyText = text.slice(0, 99999); // For mobile devices
    navigator.clipboard.writeText(copyText);
};
//End Added by WEB-SA24-0029