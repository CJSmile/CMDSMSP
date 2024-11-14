/*
 * obj Alert
 */

var ObjAlert = function (frmName, errMsg, status) {
    this.id = frmName;
    this.errMsg = errMsg;
    this.status = status;
};

ObjAlert.prototype.getAlert = function () {
    var icon = '';
    var msg = '';
    if (this.status) {
        icon = cSwal_Icon_Success;
        msg = cSwal_Alert_Success;
    } else {
        icon = cSwal_Icon_Error;
        switch (this.id) {
            case cfrmLogIn:
                msg = cSwal_Alert_InvalidLogIn
                break;
            default:
                msg = cSwal_Alert_Error;
                break;
        }
    }
    switch (this.id) {
        case cfrmLogIn:
            swal(msg, this.errMsg, icon);
            break;
        //case cfrmRegister:
        //    swal(msg, this.errMsg, icon);
        //    break;
        default:
            swal(msg, this.errMsg, icon);
            break;
    }
};