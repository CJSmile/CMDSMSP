/*
 * Error
 */

$(document).ready(function () {
    $('body').addClass('loaded');
    $('#btnBackToHome').click(function () {
        var link = $('#divHomeViewIndex').data('request-url');
        location.href = link;
    });
});