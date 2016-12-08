/**
 * Menu Toggles
 */

var cls = require('./share').cls;

var classes = document.body.classList;

cls('nav-btn').forEach(function (el) {
	el.onclick = function (e) {
		e.preventDefault();
		classes.toggle('menu--open');
	};
});
