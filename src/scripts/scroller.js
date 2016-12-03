/**
 * OnScroll: Animate Bar Chart
 */

var cls = require('./share').cls;

var ran = 0;
var bench = document.querySelector('.bench');
// `.bench` should hit 65% of win.height, from bottom
var target = Math.round(bench.offsetTop - window.innerHeight * 0.35);

var bars = cls('bar');

var widths = bars.map(function (el) {
	return el.getAttribute('width');
});

module.exports = function () {
	if (!ran && window.scrollY >= target) {
		ran = 1;
		bars.forEach(function (el, idx) {
			el.style.width = widths[idx];
		});
	}
}
