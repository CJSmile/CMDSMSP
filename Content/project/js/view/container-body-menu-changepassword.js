﻿/*
 * container-body-menu-resetpasssword
 */

$(document).on('click', cfrmChangePassword_CurrentPassword, function () {
    disableErrMsg($(this));
});

$(document).on('click', cfrmChangePassword_NewPassword, function () {
    disableErrMsg($(this));
});

$(document).on('click', cfrmChangePassword_ConfirmPassword, function () {
    disableErrMsg($(this));
});

$(document).on('click', cfrmChangePassword_FirstName, function () {
    disableErrMsg($(this));
});

$(document).on('click', cfrmChangePassword_LastName, function () {
    disableErrMsg($(this));
});
