'use strict';

var config = require('./generate-room-data');

/**
 * setupNav
 * @param  {string} parentClass
 * @param  {object} data
 */

function setupNav(parentClass, data) {
    if (!parentClass || !data) {
        return;
    }

    var activeClass = '',
        outputListItem,
        outputOption;

    if (data.id === 'deluxe') {
        activeClass = ' class="active"';
    }

    outputListItem = '<li data-id="' + data.id +
        '"' + activeClass + '>' + data.name + '</li>';

    outputOption = '<option data-id="' + data.id + '" value="' +
        data.id + '">' + data.name + '</option>';

    $('ul' + parentClass).append(outputListItem);
    $('select' + parentClass).append(outputOption);
}

/**
 * setupFriendsMessage
 * @param  {object} data
 */

function setupFriendsMessage(data) {
    if (!data || !data.message) {
        return;
    }

    $('#' + data.id + ' .friends-info')
        .append(data.message)
        .toggleClass('hidden');
}

/**
 * init
 */

module.exports = function init() {
    var navClass = '.room-list' ,
        data = config(),
        l = data.length,
        i = 0;

    if (!$(navClass).length) {
        return;
    }

    for (i; i < l; i += 1) {
        setupNav(navClass, data[i]);
        setupFriendsMessage(data[i]);
    }
};
