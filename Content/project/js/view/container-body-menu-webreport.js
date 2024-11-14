/*
 * User
 * 
 *      SMILEDINING-SA18-0011      05/07/2018      Customize               1. New Web Report.
 */

$(document).on('click', cfrmWrUser_FirstName, function () {
    disableErrMsg($(this));
});

$(document).on('click', cfrmWrUser_LastName, function () {
    disableErrMsg($(this));
});

$(document).on('click', cfrmWrUser_Email, function () {
    disableErrMsg($(this));
});

$(document).on('click', '#' + cfrmWrRoleMenuMap + ' input:checkbox:checked', function () {
    removeErrorMessageRoleMenuMap()
});

$(document).on('click', '#' + cfrmWrRoleMenuMap + ' input:radio:checked', function () {
    removeErrorMessageRoleMenuMap();
});