'use strict';

/**
 * handleDisplay
 * @param  {string} id
 */

function handleDisplay(id) {
    if (!id) {
        return;
    }

    var $el = $('#' + id);

    $el.siblings('article').hide();
    $el.fadeIn('slow');
}

/**
 * handleSelection
 * @param  {string} id
 */

function handleSelection(id) {
    if (!id) {
        return;
    }

    // unordered list
    $('ul.room-list li').removeClass('active');
    $('[data-id="' + id + '"]').addClass('active');

    // select (drop-down)
    $('select.room-list').val(id);
}

/**
 * handleSelect attach event on drop-down
 */

function handleSelect() {
    var $dropDown = $('select.room-list');

    $dropDown.on('change', function(e) {
        var id = e.target.value;

        handleDisplay(id);
        handleSelection(id);
    });
}

/**
 * handleList attach event on list items
 */

function handleList() {
    var $roomList = $('ul.room-list');

    $roomList.children('li').on('click', function(e) {
        var id = $(e.target).attr('data-id');

        handleDisplay(id);
        handleSelection(id);
    });
}

/**
 * setupEvenHandlers
 */

module.exports = function setupEventHandlers() {
    handleList();
    handleSelect();
};
