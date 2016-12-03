'use strict';

var debounce = require('debounce');
var scroller = require('./scroller');

window.onscroll = debounce(scroller, 120);
