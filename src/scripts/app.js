'use strict';

var debounce = require('debounce');

var ran = 0;
var bench = document.querySelector('.bench');
// `.bench` should hit 65% of win.height, from bottom
var target = Math.round(bench.offsetTop - window.innerHeight * 0.35);

var bars = [].slice.call(document.getElementsByClassName('bar'));

var widths = bars.map(function (el) {
	return el.getAttribute('width');
});

function onScroll() {
	if (!ran && window.scrollY >= target) {
		ran = 1;
		bars.forEach(function (el, idx) {
			el.style.width = widths[idx];
		});
	}
}

window.onscroll = debounce(onScroll, 120);
