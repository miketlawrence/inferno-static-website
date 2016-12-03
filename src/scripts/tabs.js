/**
 * Tabs: Toggles & Active Indicator
 */

var cls = require('./share').cls;
var tag = require('./share').tag;
var each = require('./share').each;

var tabs = cls('tabs');

var _active = 'active';

function animateLine(tab, line) {
	line.style.width = tab.offsetWidth + 'px';
	line.style.left = tab.offsetLeft + 'px';
}

function toggle(tabs, contents, line, newIdx) {
	each(tabs, function (tab, idx) {
		if (idx === newIdx) {
			animateLine(tab, line);
			tab.classList.add(_active);
		} else {
			tab.classList.remove(_active);
		}
	});

	each(contents, function (cnt, idx) {
		var act = (idx === newIdx) ? 'add' : 'remove';
		cnt.classList[act](_active);
	});
}

tabs.forEach(function (grp) {
	var line = grp.querySelector('span');
	var cnts = cls('tab-content', grp.parentNode);
	var tabs = tag('a', grp);

	var actv;
	each(tabs, function (el, idx) {
		// find active link, if set
		if (el.classList.contains(_active)) {
			actv = idx;
		}

		// assign handler to each tab
		el.addEventListener('click', function (e) {
			e.preventDefault();
			toggle(tabs, cnts, line, idx);
		})
	});

	// first render
	toggle(tabs, cnts, line, actv || 0);
});
