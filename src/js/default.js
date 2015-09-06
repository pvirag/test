'use strict';

var setupView = require('./modules/setup-view'),
    setupEventHandlers = require('./modules/setup-event-handlers');

$(function() {
    setupView();
    setupEventHandlers();
});
