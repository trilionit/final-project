/*jslint  browser: true, white: true, plusplus: true */
/*global $, countries */

$(function () {
    $('#autocomplete').autocomplete({
        serviceUrl: '/flights/airports'
    });
});