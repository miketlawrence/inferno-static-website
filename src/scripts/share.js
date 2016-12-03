var doc = document;
var x = exports;

x.slice = function (mix) {
	return [].slice.call(mix);
};

x.each = function (arr, cb) {
	return arr.forEach(cb);
};

x.cls = function (str, ctx) {
	return x.slice((ctx || doc).getElementsByClassName(str));
};

x.tag = function (str, ctx) {
	return x.slice((ctx || doc).getElementsByTagName(str));
};
