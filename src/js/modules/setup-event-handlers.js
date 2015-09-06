'use strict';

/**
 * handleDisplay
 * @param  {string} id
 */

function handleDisplay(id) {
    var $el = $('#' + id);

    $el.siblings('article').hide();
    $el.fadeIn('slow');
}

/**
 * handleSelect attach event on drop-down
 */

function handleSelect() {
    var $dropDown = $('select.room-list');

    $dropDown.on('change', function(e) {
        handleDisplay(e.target.value);
        $('ul.room-list li').removeClass('active');
        $('[data-id="' + e.target.value + '"]')
            .addClass('active');
    });
}

/**
 * handleList attach event on list items
 */

function handleList() {
    var $roomList = $('ul.room-list');

    $roomList.children('li').on('click', function(e) {
        handleDisplay($(e.target).attr('data-id'));
        $(this).siblings('li').removeClass('active');
        $(this).addClass('active');
    });
}

/**
 * setupEvenHandlers
 */

module.exports = function setupEventHandlers() {
    handleList();
    handleSelect();
};
