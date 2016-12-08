'use strict';

var debounce = require('debounce');
var scroller = require('./scroller');

window.onload = scroller; // check onload
window.onscroll = debounce(scroller, 120);

require('./tabs');
require('./menu');
