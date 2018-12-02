(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
/* Font Face Observer v2.0.13 - © Bram Stein. License: BSD-3-Clause */(function(){function l(a,b){document.addEventListener?a.addEventListener("scroll",b,!1):a.attachEvent("scroll",b)}function m(a){document.body?a():document.addEventListener?document.addEventListener("DOMContentLoaded",function c(){document.removeEventListener("DOMContentLoaded",c);a()}):document.attachEvent("onreadystatechange",function k(){if("interactive"==document.readyState||"complete"==document.readyState)document.detachEvent("onreadystatechange",k),a()})};function r(a){this.a=document.createElement("div");this.a.setAttribute("aria-hidden","true");this.a.appendChild(document.createTextNode(a));this.b=document.createElement("span");this.c=document.createElement("span");this.h=document.createElement("span");this.f=document.createElement("span");this.g=-1;this.b.style.cssText="max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;";this.c.style.cssText="max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;";
this.f.style.cssText="max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;";this.h.style.cssText="display:inline-block;width:200%;height:200%;font-size:16px;max-width:none;";this.b.appendChild(this.h);this.c.appendChild(this.f);this.a.appendChild(this.b);this.a.appendChild(this.c)}
function t(a,b){a.a.style.cssText="max-width:none;min-width:20px;min-height:20px;display:inline-block;overflow:hidden;position:absolute;width:auto;margin:0;padding:0;top:-999px;white-space:nowrap;font-synthesis:none;font:"+b+";"}function y(a){var b=a.a.offsetWidth,c=b+100;a.f.style.width=c+"px";a.c.scrollLeft=c;a.b.scrollLeft=a.b.scrollWidth+100;return a.g!==b?(a.g=b,!0):!1}function z(a,b){function c(){var a=k;y(a)&&a.a.parentNode&&b(a.g)}var k=a;l(a.b,c);l(a.c,c);y(a)};function A(a,b){var c=b||{};this.family=a;this.style=c.style||"normal";this.weight=c.weight||"normal";this.stretch=c.stretch||"normal"}var B=null,C=null,E=null,F=null;function G(){if(null===C)if(J()&&/Apple/.test(window.navigator.vendor)){var a=/AppleWebKit\/([0-9]+)(?:\.([0-9]+))(?:\.([0-9]+))/.exec(window.navigator.userAgent);C=!!a&&603>parseInt(a[1],10)}else C=!1;return C}function J(){null===F&&(F=!!document.fonts);return F}
function K(){if(null===E){var a=document.createElement("div");try{a.style.font="condensed 100px sans-serif"}catch(b){}E=""!==a.style.font}return E}function L(a,b){return[a.style,a.weight,K()?a.stretch:"","100px",b].join(" ")}
A.prototype.load=function(a,b){var c=this,k=a||"BESbswy",q=0,D=b||3E3,H=(new Date).getTime();return new Promise(function(a,b){if(J()&&!G()){var M=new Promise(function(a,b){function e(){(new Date).getTime()-H>=D?b():document.fonts.load(L(c,'"'+c.family+'"'),k).then(function(c){1<=c.length?a():setTimeout(e,25)},function(){b()})}e()}),N=new Promise(function(a,c){q=setTimeout(c,D)});Promise.race([N,M]).then(function(){clearTimeout(q);a(c)},function(){b(c)})}else m(function(){function u(){var b;if(b=-1!=
f&&-1!=g||-1!=f&&-1!=h||-1!=g&&-1!=h)(b=f!=g&&f!=h&&g!=h)||(null===B&&(b=/AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent),B=!!b&&(536>parseInt(b[1],10)||536===parseInt(b[1],10)&&11>=parseInt(b[2],10))),b=B&&(f==v&&g==v&&h==v||f==w&&g==w&&h==w||f==x&&g==x&&h==x)),b=!b;b&&(d.parentNode&&d.parentNode.removeChild(d),clearTimeout(q),a(c))}function I(){if((new Date).getTime()-H>=D)d.parentNode&&d.parentNode.removeChild(d),b(c);else{var a=document.hidden;if(!0===a||void 0===a)f=e.a.offsetWidth,
g=n.a.offsetWidth,h=p.a.offsetWidth,u();q=setTimeout(I,50)}}var e=new r(k),n=new r(k),p=new r(k),f=-1,g=-1,h=-1,v=-1,w=-1,x=-1,d=document.createElement("div");d.dir="ltr";t(e,L(c,"sans-serif"));t(n,L(c,"serif"));t(p,L(c,"monospace"));d.appendChild(e.a);d.appendChild(n.a);d.appendChild(p.a);document.body.appendChild(d);v=e.a.offsetWidth;w=n.a.offsetWidth;x=p.a.offsetWidth;I();z(e,function(a){f=a;u()});t(e,L(c,'"'+c.family+'",sans-serif'));z(n,function(a){g=a;u()});t(n,L(c,'"'+c.family+'",serif'));
z(p,function(a){h=a;u()});t(p,L(c,'"'+c.family+'",monospace'))})})};"object"===typeof module?module.exports=A:(window.FontFaceObserver=A,window.FontFaceObserver.prototype.load=A.prototype.load);}());

},{}],2:[function(require,module,exports){
(function (global){
/*!
 * VERSION: 1.9.1
 * DATE: 2018-05-21
 * UPDATES AND DOCS AT: http://greensock.com
 *
 * @license Copyright (c) 2008-2018, GreenSock. All rights reserved.
 * This work is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 **/
var _gsScope = (typeof(module) !== "undefined" && module.exports && typeof(global) !== "undefined") ? global : this || window; //helps ensure compatibility with AMD/RequireJS and CommonJS/Node
(_gsScope._gsQueue || (_gsScope._gsQueue = [])).push( function() {

	"use strict";

	var _doc = (_gsScope.document || {}).documentElement,
		_window = _gsScope,
		_max = function(element, axis) {
			var dim = (axis === "x") ? "Width" : "Height",
				scroll = "scroll" + dim,
				client = "client" + dim,
				body = document.body;
			return (element === _window || element === _doc || element === body) ? Math.max(_doc[scroll], body[scroll]) - (_window["inner" + dim] || _doc[client] || body[client]) : element[scroll] - element["offset" + dim];
		},
		_unwrapElement = function(value) {
			if (typeof(value) === "string") {
				value = TweenLite.selector(value);
			}
			if (value.length && value !== _window && value[0] && value[0].style && !value.nodeType) {
				value = value[0];
			}
			return (value === _window || (value.nodeType && value.style)) ? value : null;
		},
		_buildGetter = function(e, axis) { //pass in an element and an axis ("x" or "y") and it'll return a getter function for the scroll position of that element (like scrollTop or scrollLeft, although if the element is the window, it'll use the pageXOffset/pageYOffset or the documentElement's scrollTop/scrollLeft or document.body's. Basically this streamlines things and makes a very fast getter across browsers.
			var p = "scroll" + ((axis === "x") ? "Left" : "Top");
			if (e === _window) {
				if (e.pageXOffset != null) {
					p = "page" + axis.toUpperCase() + "Offset";
				} else if (_doc[p] != null) {
					e = _doc;
				} else {
					e = document.body;
				}
			}
			return function() {
				return e[p];
			};
		},
		_getOffset = function(element, container) {
			var rect = _unwrapElement(element).getBoundingClientRect(),
				b = document.body,
				isRoot = (!container || container === _window || container === b),
				cRect = isRoot ? {top:_doc.clientTop - (window.pageYOffset || _doc.scrollTop || b.scrollTop || 0), left:_doc.clientLeft - (window.pageXOffset || _doc.scrollLeft || b.scrollLeft || 0)} : container.getBoundingClientRect(),
				offsets = {x: rect.left - cRect.left, y: rect.top - cRect.top};
			if (!isRoot && container) { //only add the current scroll position if it's not the window/body.
				offsets.x += _buildGetter(container, "x")();
				offsets.y += _buildGetter(container, "y")();
			}
			return offsets;
			/*	PREVIOUS
			var rect = _unwrapElement(element).getBoundingClientRect(),
				isRoot = (!container || container === _window || container === document.body),
				cRect = (isRoot ? _doc : container).getBoundingClientRect(),
				offsets = {x: rect.left - cRect.left, y: rect.top - cRect.top};
			if (!isRoot && container) { //only add the current scroll position if it's not the window/body.
				offsets.x += _buildGetter(container, "x")();
				offsets.y += _buildGetter(container, "y")();
			}
			return offsets;
			*/
		},
		_parseVal = function(value, target, axis) {
			var type = typeof(value);
			return !isNaN(value) ? parseFloat(value) : (type === "number" || (type === "string" && value.charAt(1) === "=")) ? value : (value === "max") ? _max(target, axis) : Math.min(_max(target, axis), _getOffset(value, target)[axis]);
		},

		ScrollToPlugin = _gsScope._gsDefine.plugin({
			propName: "scrollTo",
			API: 2,
			global: true,
			version:"1.9.1",

			//called when the tween renders for the first time. This is where initial values should be recorded and any setup routines should run.
			init: function(target, value, tween) {
				this._wdw = (target === _window);
				this._target = target;
				this._tween = tween;
				if (typeof(value) !== "object") {
					value = {y:value}; //if we don't receive an object as the parameter, assume the user intends "y".
					if (typeof(value.y) === "string" && value.y !== "max" && value.y.charAt(1) !== "=") {
						value.x = value.y;
					}
				} else if (value.nodeType) {
					value = {y:value, x:value};
				}
				this.vars = value;
				this._autoKill = (value.autoKill !== false);
				this.getX = _buildGetter(target, "x");
				this.getY = _buildGetter(target, "y");
				this.x = this.xPrev = this.getX();
				this.y = this.yPrev = this.getY();
				if (value.x != null) {
					this._addTween(this, "x", this.x, _parseVal(value.x, target, "x") - (value.offsetX || 0), "scrollTo_x", true);
					this._overwriteProps.push("scrollTo_x");
				} else {
					this.skipX = true;
				}
				if (value.y != null) {
					this._addTween(this, "y", this.y, _parseVal(value.y, target, "y") - (value.offsetY || 0), "scrollTo_y", true);
					this._overwriteProps.push("scrollTo_y");
				} else {
					this.skipY = true;
				}
				return true;
			},

			//called each time the values should be updated, and the ratio gets passed as the only parameter (typically it's a value between 0 and 1, but it can exceed those when using an ease like Elastic.easeOut or Back.easeOut, etc.)
			set: function(v) {
				this._super.setRatio.call(this, v);

				var x = (this._wdw || !this.skipX) ? this.getX() : this.xPrev,
					y = (this._wdw || !this.skipY) ? this.getY() : this.yPrev,
					yDif = y - this.yPrev,
					xDif = x - this.xPrev,
					threshold = ScrollToPlugin.autoKillThreshold;

				if (this.x < 0) { //can't scroll to a position less than 0! Might happen if someone uses a Back.easeOut or Elastic.easeOut when scrolling back to the top of the page (for example)
					this.x = 0;
				}
				if (this.y < 0) {
					this.y = 0;
				}
				if (this._autoKill) {
					//note: iOS has a bug that throws off the scroll by several pixels, so we need to check if it's within 7 pixels of the previous one that we set instead of just looking for an exact match.
					if (!this.skipX && (xDif > threshold || xDif < -threshold) && x < _max(this._target, "x")) {
						this.skipX = true; //if the user scrolls separately, we should stop tweening!
					}
					if (!this.skipY && (yDif > threshold || yDif < -threshold) && y < _max(this._target, "y")) {
						this.skipY = true; //if the user scrolls separately, we should stop tweening!
					}
					if (this.skipX && this.skipY) {
						this._tween.kill();
						if (this.vars.onAutoKill) {
							this.vars.onAutoKill.apply(this.vars.onAutoKillScope || this._tween, this.vars.onAutoKillParams || []);
						}
					}
				}
				if (this._wdw) {
					_window.scrollTo((!this.skipX) ? this.x : x, (!this.skipY) ? this.y : y);
				} else {
					if (!this.skipY) {
						this._target.scrollTop = this.y;
					}
					if (!this.skipX) {
						this._target.scrollLeft = this.x;
					}
				}
				this.xPrev = this.x;
				this.yPrev = this.y;
			}

		}),
		p = ScrollToPlugin.prototype;

	ScrollToPlugin.max = _max;
	ScrollToPlugin.getOffset = _getOffset;
	ScrollToPlugin.buildGetter = _buildGetter;
	ScrollToPlugin.autoKillThreshold = 7;

	p._kill = function(lookup) {
		if (lookup.scrollTo_x) {
			this.skipX = true;
		}
		if (lookup.scrollTo_y) {
			this.skipY = true;
		}
		return this._super._kill.call(this, lookup);
	};

}); if (_gsScope._gsDefine) { _gsScope._gsQueue.pop()(); }

//export to AMD/RequireJS and CommonJS/Node (precursor to full modular build system coming at a later date)
(function(name) {
	"use strict";
	var getGlobal = function() {
		return (_gsScope.GreenSockGlobals || _gsScope)[name];
	};
	if (typeof(module) !== "undefined" && module.exports) { //node
		require("gsap/TweenLite");
		module.exports = getGlobal();
	} else if (typeof(define) === "function" && define.amd) { //AMD
		define(["gsap/TweenLite"], getGlobal);
	}
}("ScrollToPlugin"));
}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"gsap/TweenLite":3}],3:[function(require,module,exports){
(function (global){
/*!
 * VERSION: 1.20.5
 * DATE: 2018-05-21
 * UPDATES AND DOCS AT: http://greensock.com
 *
 * @license Copyright (c) 2008-2018, GreenSock. All rights reserved.
 * This work is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 */
(function(window, moduleName) {

		"use strict";
		var _exports = {},
			_doc = window.document,
			_globals = window.GreenSockGlobals = window.GreenSockGlobals || window;
		if (_globals.TweenLite) {
			return _globals.TweenLite; //in case the core set of classes is already loaded, don't instantiate twice.
		}
		var _namespace = function(ns) {
				var a = ns.split("."),
					p = _globals, i;
				for (i = 0; i < a.length; i++) {
					p[a[i]] = p = p[a[i]] || {};
				}
				return p;
			},
			gs = _namespace("com.greensock"),
			_tinyNum = 0.0000000001,
			_slice = function(a) { //don't use Array.prototype.slice.call(target, 0) because that doesn't work in IE8 with a NodeList that's returned by querySelectorAll()
				var b = [],
					l = a.length,
					i;
				for (i = 0; i !== l; b.push(a[i++])) {}
				return b;
			},
			_emptyFunc = function() {},
			_isArray = (function() { //works around issues in iframe environments where the Array global isn't shared, thus if the object originates in a different window/iframe, "(obj instanceof Array)" will evaluate false. We added some speed optimizations to avoid Object.prototype.toString.call() unless it's absolutely necessary because it's VERY slow (like 20x slower)
				var toString = Object.prototype.toString,
					array = toString.call([]);
				return function(obj) {
					return obj != null && (obj instanceof Array || (typeof(obj) === "object" && !!obj.push && toString.call(obj) === array));
				};
			}()),
			a, i, p, _ticker, _tickerActive,
			_defLookup = {},

			/**
			 * @constructor
			 * Defines a GreenSock class, optionally with an array of dependencies that must be instantiated first and passed into the definition.
			 * This allows users to load GreenSock JS files in any order even if they have interdependencies (like CSSPlugin extends TweenPlugin which is
			 * inside TweenLite.js, but if CSSPlugin is loaded first, it should wait to run its code until TweenLite.js loads and instantiates TweenPlugin
			 * and then pass TweenPlugin to CSSPlugin's definition). This is all done automatically and internally.
			 *
			 * Every definition will be added to a "com.greensock" global object (typically window, but if a window.GreenSockGlobals object is found,
			 * it will go there as of v1.7). For example, TweenLite will be found at window.com.greensock.TweenLite and since it's a global class that should be available anywhere,
			 * it is ALSO referenced at window.TweenLite. However some classes aren't considered global, like the base com.greensock.core.Animation class, so
			 * those will only be at the package like window.com.greensock.core.Animation. Again, if you define a GreenSockGlobals object on the window, everything
			 * gets tucked neatly inside there instead of on the window directly. This allows you to do advanced things like load multiple versions of GreenSock
			 * files and put them into distinct objects (imagine a banner ad uses a newer version but the main site uses an older one). In that case, you could
			 * sandbox the banner one like:
			 *
			 * <script>
			 *     var gs = window.GreenSockGlobals = {}; //the newer version we're about to load could now be referenced in a "gs" object, like gs.TweenLite.to(...). Use whatever alias you want as long as it's unique, "gs" or "banner" or whatever.
			 * </script>
			 * <script src="js/greensock/v1.7/TweenMax.js"></script>
			 * <script>
			 *     window.GreenSockGlobals = window._gsQueue = window._gsDefine = null; //reset it back to null (along with the special _gsQueue variable) so that the next load of TweenMax affects the window and we can reference things directly like TweenLite.to(...)
			 * </script>
			 * <script src="js/greensock/v1.6/TweenMax.js"></script>
			 * <script>
			 *     gs.TweenLite.to(...); //would use v1.7
			 *     TweenLite.to(...); //would use v1.6
			 * </script>
			 *
			 * @param {!string} ns The namespace of the class definition, leaving off "com.greensock." as that's assumed. For example, "TweenLite" or "plugins.CSSPlugin" or "easing.Back".
			 * @param {!Array.<string>} dependencies An array of dependencies (described as their namespaces minus "com.greensock." prefix). For example ["TweenLite","plugins.TweenPlugin","core.Animation"]
			 * @param {!function():Object} func The function that should be called and passed the resolved dependencies which will return the actual class for this definition.
			 * @param {boolean=} global If true, the class will be added to the global scope (typically window unless you define a window.GreenSockGlobals object)
			 */
			Definition = function(ns, dependencies, func, global) {
				this.sc = (_defLookup[ns]) ? _defLookup[ns].sc : []; //subclasses
				_defLookup[ns] = this;
				this.gsClass = null;
				this.func = func;
				var _classes = [];
				this.check = function(init) {
					var i = dependencies.length,
						missing = i,
						cur, a, n, cl;
					while (--i > -1) {
						if ((cur = _defLookup[dependencies[i]] || new Definition(dependencies[i], [])).gsClass) {
							_classes[i] = cur.gsClass;
							missing--;
						} else if (init) {
							cur.sc.push(this);
						}
					}
					if (missing === 0 && func) {
						a = ("com.greensock." + ns).split(".");
						n = a.pop();
						cl = _namespace(a.join("."))[n] = this.gsClass = func.apply(func, _classes);

						//exports to multiple environments
						if (global) {
							_globals[n] = _exports[n] = cl; //provides a way to avoid global namespace pollution. By default, the main classes like TweenLite, Power1, Strong, etc. are added to window unless a GreenSockGlobals is defined. So if you want to have things added to a custom object instead, just do something like window.GreenSockGlobals = {} before loading any GreenSock files. You can even set up an alias like window.GreenSockGlobals = windows.gs = {} so that you can access everything like gs.TweenLite. Also remember that ALL classes are added to the window.com.greensock object (in their respective packages, like com.greensock.easing.Power1, com.greensock.TweenLite, etc.)
							if (typeof(module) !== "undefined" && module.exports) { //node
								if (ns === moduleName) {
									module.exports = _exports[moduleName] = cl;
									for (i in _exports) {
										cl[i] = _exports[i];
									}
								} else if (_exports[moduleName]) {
									_exports[moduleName][n] = cl;
								}
							} else if (typeof(define) === "function" && define.amd){ //AMD
								define((window.GreenSockAMDPath ? window.GreenSockAMDPath + "/" : "") + ns.split(".").pop(), [], function() { return cl; });
							}
						}
						for (i = 0; i < this.sc.length; i++) {
							this.sc[i].check();
						}
					}
				};
				this.check(true);
			},

			//used to create Definition instances (which basically registers a class that has dependencies).
			_gsDefine = window._gsDefine = function(ns, dependencies, func, global) {
				return new Definition(ns, dependencies, func, global);
			},

			//a quick way to create a class that doesn't have any dependencies. Returns the class, but first registers it in the GreenSock namespace so that other classes can grab it (other classes might be dependent on the class).
			_class = gs._class = function(ns, func, global) {
				func = func || function() {};
				_gsDefine(ns, [], function(){ return func; }, global);
				return func;
			};

		_gsDefine.globals = _globals;



/*
 * ----------------------------------------------------------------
 * Ease
 * ----------------------------------------------------------------
 */
		var _baseParams = [0, 0, 1, 1],
			Ease = _class("easing.Ease", function(func, extraParams, type, power) {
				this._func = func;
				this._type = type || 0;
				this._power = power || 0;
				this._params = extraParams ? _baseParams.concat(extraParams) : _baseParams;
			}, true),
			_easeMap = Ease.map = {},
			_easeReg = Ease.register = function(ease, names, types, create) {
				var na = names.split(","),
					i = na.length,
					ta = (types || "easeIn,easeOut,easeInOut").split(","),
					e, name, j, type;
				while (--i > -1) {
					name = na[i];
					e = create ? _class("easing."+name, null, true) : gs.easing[name] || {};
					j = ta.length;
					while (--j > -1) {
						type = ta[j];
						_easeMap[name + "." + type] = _easeMap[type + name] = e[type] = ease.getRatio ? ease : ease[type] || new ease();
					}
				}
			};

		p = Ease.prototype;
		p._calcEnd = false;
		p.getRatio = function(p) {
			if (this._func) {
				this._params[0] = p;
				return this._func.apply(null, this._params);
			}
			var t = this._type,
				pw = this._power,
				r = (t === 1) ? 1 - p : (t === 2) ? p : (p < 0.5) ? p * 2 : (1 - p) * 2;
			if (pw === 1) {
				r *= r;
			} else if (pw === 2) {
				r *= r * r;
			} else if (pw === 3) {
				r *= r * r * r;
			} else if (pw === 4) {
				r *= r * r * r * r;
			}
			return (t === 1) ? 1 - r : (t === 2) ? r : (p < 0.5) ? r / 2 : 1 - (r / 2);
		};

		//create all the standard eases like Linear, Quad, Cubic, Quart, Quint, Strong, Power0, Power1, Power2, Power3, and Power4 (each with easeIn, easeOut, and easeInOut)
		a = ["Linear","Quad","Cubic","Quart","Quint,Strong"];
		i = a.length;
		while (--i > -1) {
			p = a[i]+",Power"+i;
			_easeReg(new Ease(null,null,1,i), p, "easeOut", true);
			_easeReg(new Ease(null,null,2,i), p, "easeIn" + ((i === 0) ? ",easeNone" : ""));
			_easeReg(new Ease(null,null,3,i), p, "easeInOut");
		}
		_easeMap.linear = gs.easing.Linear.easeIn;
		_easeMap.swing = gs.easing.Quad.easeInOut; //for jQuery folks


/*
 * ----------------------------------------------------------------
 * EventDispatcher
 * ----------------------------------------------------------------
 */
		var EventDispatcher = _class("events.EventDispatcher", function(target) {
			this._listeners = {};
			this._eventTarget = target || this;
		});
		p = EventDispatcher.prototype;

		p.addEventListener = function(type, callback, scope, useParam, priority) {
			priority = priority || 0;
			var list = this._listeners[type],
				index = 0,
				listener, i;
			if (this === _ticker && !_tickerActive) {
				_ticker.wake();
			}
			if (list == null) {
				this._listeners[type] = list = [];
			}
			i = list.length;
			while (--i > -1) {
				listener = list[i];
				if (listener.c === callback && listener.s === scope) {
					list.splice(i, 1);
				} else if (index === 0 && listener.pr < priority) {
					index = i + 1;
				}
			}
			list.splice(index, 0, {c:callback, s:scope, up:useParam, pr:priority});
		};

		p.removeEventListener = function(type, callback) {
			var list = this._listeners[type], i;
			if (list) {
				i = list.length;
				while (--i > -1) {
					if (list[i].c === callback) {
						list.splice(i, 1);
						return;
					}
				}
			}
		};

		p.dispatchEvent = function(type) {
			var list = this._listeners[type],
				i, t, listener;
			if (list) {
				i = list.length;
				if (i > 1) { 
					list = list.slice(0); //in case addEventListener() is called from within a listener/callback (otherwise the index could change, resulting in a skip)
				}
				t = this._eventTarget;
				while (--i > -1) {
					listener = list[i];
					if (listener) {
						if (listener.up) {
							listener.c.call(listener.s || t, {type:type, target:t});
						} else {
							listener.c.call(listener.s || t);
						}
					}
				}
			}
		};


/*
 * ----------------------------------------------------------------
 * Ticker
 * ----------------------------------------------------------------
 */
 		var _reqAnimFrame = window.requestAnimationFrame,
			_cancelAnimFrame = window.cancelAnimationFrame,
			_getTime = Date.now || function() {return new Date().getTime();},
			_lastUpdate = _getTime();

		//now try to determine the requestAnimationFrame and cancelAnimationFrame functions and if none are found, we'll use a setTimeout()/clearTimeout() polyfill.
		a = ["ms","moz","webkit","o"];
		i = a.length;
		while (--i > -1 && !_reqAnimFrame) {
			_reqAnimFrame = window[a[i] + "RequestAnimationFrame"];
			_cancelAnimFrame = window[a[i] + "CancelAnimationFrame"] || window[a[i] + "CancelRequestAnimationFrame"];
		}

		_class("Ticker", function(fps, useRAF) {
			var _self = this,
				_startTime = _getTime(),
				_useRAF = (useRAF !== false && _reqAnimFrame) ? "auto" : false,
				_lagThreshold = 500,
				_adjustedLag = 33,
				_tickWord = "tick", //helps reduce gc burden
				_fps, _req, _id, _gap, _nextTime,
				_tick = function(manual) {
					var elapsed = _getTime() - _lastUpdate,
						overlap, dispatch;
					if (elapsed > _lagThreshold) {
						_startTime += elapsed - _adjustedLag;
					}
					_lastUpdate += elapsed;
					_self.time = (_lastUpdate - _startTime) / 1000;
					overlap = _self.time - _nextTime;
					if (!_fps || overlap > 0 || manual === true) {
						_self.frame++;
						_nextTime += overlap + (overlap >= _gap ? 0.004 : _gap - overlap);
						dispatch = true;
					}
					if (manual !== true) { //make sure the request is made before we dispatch the "tick" event so that timing is maintained. Otherwise, if processing the "tick" requires a bunch of time (like 15ms) and we're using a setTimeout() that's based on 16.7ms, it'd technically take 31.7ms between frames otherwise.
						_id = _req(_tick);
					}
					if (dispatch) {
						_self.dispatchEvent(_tickWord);
					}
				};

			EventDispatcher.call(_self);
			_self.time = _self.frame = 0;
			_self.tick = function() {
				_tick(true);
			};

			_self.lagSmoothing = function(threshold, adjustedLag) {
				if (!arguments.length) { //if lagSmoothing() is called with no arguments, treat it like a getter that returns a boolean indicating if it's enabled or not. This is purposely undocumented and is for internal use.
					return (_lagThreshold < 1 / _tinyNum);
				}
				_lagThreshold = threshold || (1 / _tinyNum); //zero should be interpreted as basically unlimited
				_adjustedLag = Math.min(adjustedLag, _lagThreshold, 0);
			};

			_self.sleep = function() {
				if (_id == null) {
					return;
				}
				if (!_useRAF || !_cancelAnimFrame) {
					clearTimeout(_id);
				} else {
					_cancelAnimFrame(_id);
				}
				_req = _emptyFunc;
				_id = null;
				if (_self === _ticker) {
					_tickerActive = false;
				}
			};

			_self.wake = function(seamless) {
				if (_id !== null) {
					_self.sleep();
				} else if (seamless) {
					_startTime += -_lastUpdate + (_lastUpdate = _getTime());
				} else if (_self.frame > 10) { //don't trigger lagSmoothing if we're just waking up, and make sure that at least 10 frames have elapsed because of the iOS bug that we work around below with the 1.5-second setTimout().
					_lastUpdate = _getTime() - _lagThreshold + 5;
				}
				_req = (_fps === 0) ? _emptyFunc : (!_useRAF || !_reqAnimFrame) ? function(f) { return setTimeout(f, ((_nextTime - _self.time) * 1000 + 1) | 0); } : _reqAnimFrame;
				if (_self === _ticker) {
					_tickerActive = true;
				}
				_tick(2);
			};

			_self.fps = function(value) {
				if (!arguments.length) {
					return _fps;
				}
				_fps = value;
				_gap = 1 / (_fps || 60);
				_nextTime = this.time + _gap;
				_self.wake();
			};

			_self.useRAF = function(value) {
				if (!arguments.length) {
					return _useRAF;
				}
				_self.sleep();
				_useRAF = value;
				_self.fps(_fps);
			};
			_self.fps(fps);

			//a bug in iOS 6 Safari occasionally prevents the requestAnimationFrame from working initially, so we use a 1.5-second timeout that automatically falls back to setTimeout() if it senses this condition.
			setTimeout(function() {
				if (_useRAF === "auto" && _self.frame < 5 && (_doc || {}).visibilityState !== "hidden") {
					_self.useRAF(false);
				}
			}, 1500);
		});

		p = gs.Ticker.prototype = new gs.events.EventDispatcher();
		p.constructor = gs.Ticker;


/*
 * ----------------------------------------------------------------
 * Animation
 * ----------------------------------------------------------------
 */
		var Animation = _class("core.Animation", function(duration, vars) {
				this.vars = vars = vars || {};
				this._duration = this._totalDuration = duration || 0;
				this._delay = Number(vars.delay) || 0;
				this._timeScale = 1;
				this._active = (vars.immediateRender === true);
				this.data = vars.data;
				this._reversed = (vars.reversed === true);

				if (!_rootTimeline) {
					return;
				}
				if (!_tickerActive) { //some browsers (like iOS 6 Safari) shut down JavaScript execution when the tab is disabled and they [occasionally] neglect to start up requestAnimationFrame again when returning - this code ensures that the engine starts up again properly.
					_ticker.wake();
				}

				var tl = this.vars.useFrames ? _rootFramesTimeline : _rootTimeline;
				tl.add(this, tl._time);

				if (this.vars.paused) {
					this.paused(true);
				}
			});

		_ticker = Animation.ticker = new gs.Ticker();
		p = Animation.prototype;
		p._dirty = p._gc = p._initted = p._paused = false;
		p._totalTime = p._time = 0;
		p._rawPrevTime = -1;
		p._next = p._last = p._onUpdate = p._timeline = p.timeline = null;
		p._paused = false;


		//some browsers (like iOS) occasionally drop the requestAnimationFrame event when the user switches to a different tab and then comes back again, so we use a 2-second setTimeout() to sense if/when that condition occurs and then wake() the ticker.
		var _checkTimeout = function() {
				if (_tickerActive && _getTime() - _lastUpdate > 2000 && ((_doc || {}).visibilityState !== "hidden" || !_ticker.lagSmoothing())) { //note: if the tab is hidden, we should still wake if lagSmoothing has been disabled.
					_ticker.wake();
				}
				var t = setTimeout(_checkTimeout, 2000);
				if (t.unref) {
					// allows a node process to exit even if the timeout’s callback hasn't been invoked. Without it, the node process could hang as this function is called every two seconds.
					t.unref();
				}
			};
		_checkTimeout();


		p.play = function(from, suppressEvents) {
			if (from != null) {
				this.seek(from, suppressEvents);
			}
			return this.reversed(false).paused(false);
		};

		p.pause = function(atTime, suppressEvents) {
			if (atTime != null) {
				this.seek(atTime, suppressEvents);
			}
			return this.paused(true);
		};

		p.resume = function(from, suppressEvents) {
			if (from != null) {
				this.seek(from, suppressEvents);
			}
			return this.paused(false);
		};

		p.seek = function(time, suppressEvents) {
			return this.totalTime(Number(time), suppressEvents !== false);
		};

		p.restart = function(includeDelay, suppressEvents) {
			return this.reversed(false).paused(false).totalTime(includeDelay ? -this._delay : 0, (suppressEvents !== false), true);
		};

		p.reverse = function(from, suppressEvents) {
			if (from != null) {
				this.seek((from || this.totalDuration()), suppressEvents);
			}
			return this.reversed(true).paused(false);
		};

		p.render = function(time, suppressEvents, force) {
			//stub - we override this method in subclasses.
		};

		p.invalidate = function() {
			this._time = this._totalTime = 0;
			this._initted = this._gc = false;
			this._rawPrevTime = -1;
			if (this._gc || !this.timeline) {
				this._enabled(true);
			}
			return this;
		};

		p.isActive = function() {
			var tl = this._timeline, //the 2 root timelines won't have a _timeline; they're always active.
				startTime = this._startTime,
				rawTime;
			return (!tl || (!this._gc && !this._paused && tl.isActive() && (rawTime = tl.rawTime(true)) >= startTime && rawTime < startTime + this.totalDuration() / this._timeScale - 0.0000001));
		};

		p._enabled = function (enabled, ignoreTimeline) {
			if (!_tickerActive) {
				_ticker.wake();
			}
			this._gc = !enabled;
			this._active = this.isActive();
			if (ignoreTimeline !== true) {
				if (enabled && !this.timeline) {
					this._timeline.add(this, this._startTime - this._delay);
				} else if (!enabled && this.timeline) {
					this._timeline._remove(this, true);
				}
			}
			return false;
		};


		p._kill = function(vars, target) {
			return this._enabled(false, false);
		};

		p.kill = function(vars, target) {
			this._kill(vars, target);
			return this;
		};

		p._uncache = function(includeSelf) {
			var tween = includeSelf ? this : this.timeline;
			while (tween) {
				tween._dirty = true;
				tween = tween.timeline;
			}
			return this;
		};

		p._swapSelfInParams = function(params) {
			var i = params.length,
				copy = params.concat();
			while (--i > -1) {
				if (params[i] === "{self}") {
					copy[i] = this;
				}
			}
			return copy;
		};

		p._callback = function(type) {
			var v = this.vars,
				callback = v[type],
				params = v[type + "Params"],
				scope = v[type + "Scope"] || v.callbackScope || this,
				l = params ? params.length : 0;
			switch (l) { //speed optimization; call() is faster than apply() so use it when there are only a few parameters (which is by far most common). Previously we simply did var v = this.vars; v[type].apply(v[type + "Scope"] || v.callbackScope || this, v[type + "Params"] || _blankArray);
				case 0: callback.call(scope); break;
				case 1: callback.call(scope, params[0]); break;
				case 2: callback.call(scope, params[0], params[1]); break;
				default: callback.apply(scope, params);
			}
		};

//----Animation getters/setters --------------------------------------------------------

		p.eventCallback = function(type, callback, params, scope) {
			if ((type || "").substr(0,2) === "on") {
				var v = this.vars;
				if (arguments.length === 1) {
					return v[type];
				}
				if (callback == null) {
					delete v[type];
				} else {
					v[type] = callback;
					v[type + "Params"] = (_isArray(params) && params.join("").indexOf("{self}") !== -1) ? this._swapSelfInParams(params) : params;
					v[type + "Scope"] = scope;
				}
				if (type === "onUpdate") {
					this._onUpdate = callback;
				}
			}
			return this;
		};

		p.delay = function(value) {
			if (!arguments.length) {
				return this._delay;
			}
			if (this._timeline.smoothChildTiming) {
				this.startTime( this._startTime + value - this._delay );
			}
			this._delay = value;
			return this;
		};

		p.duration = function(value) {
			if (!arguments.length) {
				this._dirty = false;
				return this._duration;
			}
			this._duration = this._totalDuration = value;
			this._uncache(true); //true in case it's a TweenMax or TimelineMax that has a repeat - we'll need to refresh the totalDuration.
			if (this._timeline.smoothChildTiming) if (this._time > 0) if (this._time < this._duration) if (value !== 0) {
				this.totalTime(this._totalTime * (value / this._duration), true);
			}
			return this;
		};

		p.totalDuration = function(value) {
			this._dirty = false;
			return (!arguments.length) ? this._totalDuration : this.duration(value);
		};

		p.time = function(value, suppressEvents) {
			if (!arguments.length) {
				return this._time;
			}
			if (this._dirty) {
				this.totalDuration();
			}
			return this.totalTime((value > this._duration) ? this._duration : value, suppressEvents);
		};

		p.totalTime = function(time, suppressEvents, uncapped) {
			if (!_tickerActive) {
				_ticker.wake();
			}
			if (!arguments.length) {
				return this._totalTime;
			}
			if (this._timeline) {
				if (time < 0 && !uncapped) {
					time += this.totalDuration();
				}
				if (this._timeline.smoothChildTiming) {
					if (this._dirty) {
						this.totalDuration();
					}
					var totalDuration = this._totalDuration,
						tl = this._timeline;
					if (time > totalDuration && !uncapped) {
						time = totalDuration;
					}
					this._startTime = (this._paused ? this._pauseTime : tl._time) - ((!this._reversed ? time : totalDuration - time) / this._timeScale);
					if (!tl._dirty) { //for performance improvement. If the parent's cache is already dirty, it already took care of marking the ancestors as dirty too, so skip the function call here.
						this._uncache(false);
					}
					//in case any of the ancestor timelines had completed but should now be enabled, we should reset their totalTime() which will also ensure that they're lined up properly and enabled. Skip for animations that are on the root (wasteful). Example: a TimelineLite.exportRoot() is performed when there's a paused tween on the root, the export will not complete until that tween is unpaused, but imagine a child gets restarted later, after all [unpaused] tweens have completed. The startTime of that child would get pushed out, but one of the ancestors may have completed.
					if (tl._timeline) {
						while (tl._timeline) {
							if (tl._timeline._time !== (tl._startTime + tl._totalTime) / tl._timeScale) {
								tl.totalTime(tl._totalTime, true);
							}
							tl = tl._timeline;
						}
					}
				}
				if (this._gc) {
					this._enabled(true, false);
				}
				if (this._totalTime !== time || this._duration === 0) {
					if (_lazyTweens.length) {
						_lazyRender();
					}
					this.render(time, suppressEvents, false);
					if (_lazyTweens.length) { //in case rendering caused any tweens to lazy-init, we should render them because typically when someone calls seek() or time() or progress(), they expect an immediate render.
						_lazyRender();
					}
				}
			}
			return this;
		};

		p.progress = p.totalProgress = function(value, suppressEvents) {
			var duration = this.duration();
			return (!arguments.length) ? (duration ? this._time / duration : this.ratio) : this.totalTime(duration * value, suppressEvents);
		};

		p.startTime = function(value) {
			if (!arguments.length) {
				return this._startTime;
			}
			if (value !== this._startTime) {
				this._startTime = value;
				if (this.timeline) if (this.timeline._sortChildren) {
					this.timeline.add(this, value - this._delay); //ensures that any necessary re-sequencing of Animations in the timeline occurs to make sure the rendering order is correct.
				}
			}
			return this;
		};

		p.endTime = function(includeRepeats) {
			return this._startTime + ((includeRepeats != false) ? this.totalDuration() : this.duration()) / this._timeScale;
		};

		p.timeScale = function(value) {
			if (!arguments.length) {
				return this._timeScale;
			}
			var pauseTime, t;
			value = value || _tinyNum; //can't allow zero because it'll throw the math off
			if (this._timeline && this._timeline.smoothChildTiming) {
				pauseTime = this._pauseTime;
				t = (pauseTime || pauseTime === 0) ? pauseTime : this._timeline.totalTime();
				this._startTime = t - ((t - this._startTime) * this._timeScale / value);
			}
			this._timeScale = value;
			t = this.timeline;
			while (t && t.timeline) { //must update the duration/totalDuration of all ancestor timelines immediately in case in the middle of a render loop, one tween alters another tween's timeScale which shoves its startTime before 0, forcing the parent timeline to shift around and shiftChildren() which could affect that next tween's render (startTime). Doesn't matter for the root timeline though.
				t._dirty = true;
				t.totalDuration();
				t = t.timeline;
			}
			return this;
		};

		p.reversed = function(value) {
			if (!arguments.length) {
				return this._reversed;
			}
			if (value != this._reversed) {
				this._reversed = value;
				this.totalTime(((this._timeline && !this._timeline.smoothChildTiming) ? this.totalDuration() - this._totalTime : this._totalTime), true);
			}
			return this;
		};

		p.paused = function(value) {
			if (!arguments.length) {
				return this._paused;
			}
			var tl = this._timeline,
				raw, elapsed;
			if (value != this._paused) if (tl) {
				if (!_tickerActive && !value) {
					_ticker.wake();
				}
				raw = tl.rawTime();
				elapsed = raw - this._pauseTime;
				if (!value && tl.smoothChildTiming) {
					this._startTime += elapsed;
					this._uncache(false);
				}
				this._pauseTime = value ? raw : null;
				this._paused = value;
				this._active = this.isActive();
				if (!value && elapsed !== 0 && this._initted && this.duration()) {
					raw = tl.smoothChildTiming ? this._totalTime : (raw - this._startTime) / this._timeScale;
					this.render(raw, (raw === this._totalTime), true); //in case the target's properties changed via some other tween or manual update by the user, we should force a render.
				}
			}
			if (this._gc && !value) {
				this._enabled(true, false);
			}
			return this;
		};


/*
 * ----------------------------------------------------------------
 * SimpleTimeline
 * ----------------------------------------------------------------
 */
		var SimpleTimeline = _class("core.SimpleTimeline", function(vars) {
			Animation.call(this, 0, vars);
			this.autoRemoveChildren = this.smoothChildTiming = true;
		});

		p = SimpleTimeline.prototype = new Animation();
		p.constructor = SimpleTimeline;
		p.kill()._gc = false;
		p._first = p._last = p._recent = null;
		p._sortChildren = false;

		p.add = p.insert = function(child, position, align, stagger) {
			var prevTween, st;
			child._startTime = Number(position || 0) + child._delay;
			if (child._paused) if (this !== child._timeline) { //we only adjust the _pauseTime if it wasn't in this timeline already. Remember, sometimes a tween will be inserted again into the same timeline when its startTime is changed so that the tweens in the TimelineLite/Max are re-ordered properly in the linked list (so everything renders in the proper order).
				child._pauseTime = this.rawTime() - (child._timeline.rawTime() - child._pauseTime);
			}
			if (child.timeline) {
				child.timeline._remove(child, true); //removes from existing timeline so that it can be properly added to this one.
			}
			child.timeline = child._timeline = this;
			if (child._gc) {
				child._enabled(true, true);
			}
			prevTween = this._last;
			if (this._sortChildren) {
				st = child._startTime;
				while (prevTween && prevTween._startTime > st) {
					prevTween = prevTween._prev;
				}
			}
			if (prevTween) {
				child._next = prevTween._next;
				prevTween._next = child;
			} else {
				child._next = this._first;
				this._first = child;
			}
			if (child._next) {
				child._next._prev = child;
			} else {
				this._last = child;
			}
			child._prev = prevTween;
			this._recent = child;
			if (this._timeline) {
				this._uncache(true);
			}
			return this;
		};

		p._remove = function(tween, skipDisable) {
			if (tween.timeline === this) {
				if (!skipDisable) {
					tween._enabled(false, true);
				}

				if (tween._prev) {
					tween._prev._next = tween._next;
				} else if (this._first === tween) {
					this._first = tween._next;
				}
				if (tween._next) {
					tween._next._prev = tween._prev;
				} else if (this._last === tween) {
					this._last = tween._prev;
				}
				tween._next = tween._prev = tween.timeline = null;
				if (tween === this._recent) {
					this._recent = this._last;
				}

				if (this._timeline) {
					this._uncache(true);
				}
			}
			return this;
		};

		p.render = function(time, suppressEvents, force) {
			var tween = this._first,
				next;
			this._totalTime = this._time = this._rawPrevTime = time;
			while (tween) {
				next = tween._next; //record it here because the value could change after rendering...
				if (tween._active || (time >= tween._startTime && !tween._paused && !tween._gc)) {
					if (!tween._reversed) {
						tween.render((time - tween._startTime) * tween._timeScale, suppressEvents, force);
					} else {
						tween.render(((!tween._dirty) ? tween._totalDuration : tween.totalDuration()) - ((time - tween._startTime) * tween._timeScale), suppressEvents, force);
					}
				}
				tween = next;
			}
		};

		p.rawTime = function() {
			if (!_tickerActive) {
				_ticker.wake();
			}
			return this._totalTime;
		};

/*
 * ----------------------------------------------------------------
 * TweenLite
 * ----------------------------------------------------------------
 */
		var TweenLite = _class("TweenLite", function(target, duration, vars) {
				Animation.call(this, duration, vars);
				this.render = TweenLite.prototype.render; //speed optimization (avoid prototype lookup on this "hot" method)

				if (target == null) {
					throw "Cannot tween a null target.";
				}

				this.target = target = (typeof(target) !== "string") ? target : TweenLite.selector(target) || target;

				var isSelector = (target.jquery || (target.length && target !== window && target[0] && (target[0] === window || (target[0].nodeType && target[0].style && !target.nodeType)))),
					overwrite = this.vars.overwrite,
					i, targ, targets;

				this._overwrite = overwrite = (overwrite == null) ? _overwriteLookup[TweenLite.defaultOverwrite] : (typeof(overwrite) === "number") ? overwrite >> 0 : _overwriteLookup[overwrite];

				if ((isSelector || target instanceof Array || (target.push && _isArray(target))) && typeof(target[0]) !== "number") {
					this._targets = targets = _slice(target);  //don't use Array.prototype.slice.call(target, 0) because that doesn't work in IE8 with a NodeList that's returned by querySelectorAll()
					this._propLookup = [];
					this._siblings = [];
					for (i = 0; i < targets.length; i++) {
						targ = targets[i];
						if (!targ) {
							targets.splice(i--, 1);
							continue;
						} else if (typeof(targ) === "string") {
							targ = targets[i--] = TweenLite.selector(targ); //in case it's an array of strings
							if (typeof(targ) === "string") {
								targets.splice(i+1, 1); //to avoid an endless loop (can't imagine why the selector would return a string, but just in case)
							}
							continue;
						} else if (targ.length && targ !== window && targ[0] && (targ[0] === window || (targ[0].nodeType && targ[0].style && !targ.nodeType))) { //in case the user is passing in an array of selector objects (like jQuery objects), we need to check one more level and pull things out if necessary. Also note that <select> elements pass all the criteria regarding length and the first child having style, so we must also check to ensure the target isn't an HTML node itself.
							targets.splice(i--, 1);
							this._targets = targets = targets.concat(_slice(targ));
							continue;
						}
						this._siblings[i] = _register(targ, this, false);
						if (overwrite === 1) if (this._siblings[i].length > 1) {
							_applyOverwrite(targ, this, null, 1, this._siblings[i]);
						}
					}

				} else {
					this._propLookup = {};
					this._siblings = _register(target, this, false);
					if (overwrite === 1) if (this._siblings.length > 1) {
						_applyOverwrite(target, this, null, 1, this._siblings);
					}
				}
				if (this.vars.immediateRender || (duration === 0 && this._delay === 0 && this.vars.immediateRender !== false)) {
					this._time = -_tinyNum; //forces a render without having to set the render() "force" parameter to true because we want to allow lazying by default (using the "force" parameter always forces an immediate full render)
					this.render(Math.min(0, -this._delay)); //in case delay is negative
				}
			}, true),
			_isSelector = function(v) {
				return (v && v.length && v !== window && v[0] && (v[0] === window || (v[0].nodeType && v[0].style && !v.nodeType))); //we cannot check "nodeType" if the target is window from within an iframe, otherwise it will trigger a security error in some browsers like Firefox.
			},
			_autoCSS = function(vars, target) {
				var css = {},
					p;
				for (p in vars) {
					if (!_reservedProps[p] && (!(p in target) || p === "transform" || p === "x" || p === "y" || p === "width" || p === "height" || p === "className" || p === "border") && (!_plugins[p] || (_plugins[p] && _plugins[p]._autoCSS))) { //note: <img> elements contain read-only "x" and "y" properties. We should also prioritize editing css width/height rather than the element's properties.
						css[p] = vars[p];
						delete vars[p];
					}
				}
				vars.css = css;
			};

		p = TweenLite.prototype = new Animation();
		p.constructor = TweenLite;
		p.kill()._gc = false;

//----TweenLite defaults, overwrite management, and root updates ----------------------------------------------------

		p.ratio = 0;
		p._firstPT = p._targets = p._overwrittenProps = p._startAt = null;
		p._notifyPluginsOfEnabled = p._lazy = false;

		TweenLite.version = "1.20.5";
		TweenLite.defaultEase = p._ease = new Ease(null, null, 1, 1);
		TweenLite.defaultOverwrite = "auto";
		TweenLite.ticker = _ticker;
		TweenLite.autoSleep = 120;
		TweenLite.lagSmoothing = function(threshold, adjustedLag) {
			_ticker.lagSmoothing(threshold, adjustedLag);
		};

		TweenLite.selector = window.$ || window.jQuery || function(e) {
			var selector = window.$ || window.jQuery;
			if (selector) {
				TweenLite.selector = selector;
				return selector(e);
			}
			if (!_doc) { //in some dev environments (like Angular 6), GSAP gets loaded before the document is defined! So re-query it here if/when necessary.
				_doc = window.document;
			}
			return (!_doc) ? e : (_doc.querySelectorAll ? _doc.querySelectorAll(e) : _doc.getElementById((e.charAt(0) === "#") ? e.substr(1) : e));
		};

		var _lazyTweens = [],
			_lazyLookup = {},
			_numbersExp = /(?:(-|-=|\+=)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/ig,
			_relExp = /[\+-]=-?[\.\d]/,
			//_nonNumbersExp = /(?:([\-+](?!(\d|=)))|[^\d\-+=e]|(e(?![\-+][\d])))+/ig,
			_setRatio = function(v) {
				var pt = this._firstPT,
					min = 0.000001,
					val;
				while (pt) {
					val = !pt.blob ? pt.c * v + pt.s : (v === 1 && this.end != null) ? this.end : v ? this.join("") : this.start;
					if (pt.m) {
						val = pt.m.call(this._tween, val, this._target || pt.t, this._tween);
					} else if (val < min) if (val > -min && !pt.blob) { //prevents issues with converting very small numbers to strings in the browser
						val = 0;
					}
					if (!pt.f) {
						pt.t[pt.p] = val;
					} else if (pt.fp) {
						pt.t[pt.p](pt.fp, val);
					} else {
						pt.t[pt.p](val);
					}
					pt = pt._next;
				}
			},
			//compares two strings (start/end), finds the numbers that are different and spits back an array representing the whole value but with the changing values isolated as elements. For example, "rgb(0,0,0)" and "rgb(100,50,0)" would become ["rgb(", 0, ",", 50, ",0)"]. Notice it merges the parts that are identical (performance optimization). The array also has a linked list of PropTweens attached starting with _firstPT that contain the tweening data (t, p, s, c, f, etc.). It also stores the starting value as a "start" property so that we can revert to it if/when necessary, like when a tween rewinds fully. If the quantity of numbers differs between the start and end, it will always prioritize the end value(s). The pt parameter is optional - it's for a PropTween that will be appended to the end of the linked list and is typically for actually setting the value after all of the elements have been updated (with array.join("")).
			_blobDif = function(start, end, filter, pt) {
				var a = [],
					charIndex = 0,
					s = "",
					color = 0,
					startNums, endNums, num, i, l, nonNumbers, currentNum;
				a.start = start;
				a.end = end;
				start = a[0] = start + ""; //ensure values are strings
				end = a[1] = end + "";
				if (filter) {
					filter(a); //pass an array with the starting and ending values and let the filter do whatever it needs to the values.
					start = a[0];
					end = a[1];
				}
				a.length = 0;
				startNums = start.match(_numbersExp) || [];
				endNums = end.match(_numbersExp) || [];
				if (pt) {
					pt._next = null;
					pt.blob = 1;
					a._firstPT = a._applyPT = pt; //apply last in the linked list (which means inserting it first)
				}
				l = endNums.length;
				for (i = 0; i < l; i++) {
					currentNum = endNums[i];
					nonNumbers = end.substr(charIndex, end.indexOf(currentNum, charIndex)-charIndex);
					s += (nonNumbers || !i) ? nonNumbers : ","; //note: SVG spec allows omission of comma/space when a negative sign is wedged between two numbers, like 2.5-5.3 instead of 2.5,-5.3 but when tweening, the negative value may switch to positive, so we insert the comma just in case.
					charIndex += nonNumbers.length;
					if (color) { //sense rgba() values and round them.
						color = (color + 1) % 5;
					} else if (nonNumbers.substr(-5) === "rgba(") {
						color = 1;
					}
					if (currentNum === startNums[i] || startNums.length <= i) {
						s += currentNum;
					} else {
						if (s) {
							a.push(s);
							s = "";
						}
						num = parseFloat(startNums[i]);
						a.push(num);
						a._firstPT = {_next: a._firstPT, t:a, p: a.length-1, s:num, c:((currentNum.charAt(1) === "=") ? parseInt(currentNum.charAt(0) + "1", 10) * parseFloat(currentNum.substr(2)) : (parseFloat(currentNum) - num)) || 0, f:0, m:(color && color < 4) ? Math.round : 0};
						//note: we don't set _prev because we'll never need to remove individual PropTweens from this list.
					}
					charIndex += currentNum.length;
				}
				s += end.substr(charIndex);
				if (s) {
					a.push(s);
				}
				a.setRatio = _setRatio;
				if (_relExp.test(end)) { //if the end string contains relative values, delete it so that on the final render (in _setRatio()), we don't actually set it to the string with += or -= characters (forces it to use the calculated value).
					a.end = null;
				}
				return a;
			},
			//note: "funcParam" is only necessary for function-based getters/setters that require an extra parameter like getAttribute("width") and setAttribute("width", value). In this example, funcParam would be "width". Used by AttrPlugin for example.
			_addPropTween = function(target, prop, start, end, overwriteProp, mod, funcParam, stringFilter, index) {
				if (typeof(end) === "function") {
					end = end(index || 0, target);
				}
				var type = typeof(target[prop]),
					getterName = (type !== "function") ? "" : ((prop.indexOf("set") || typeof(target["get" + prop.substr(3)]) !== "function") ? prop : "get" + prop.substr(3)),
					s = (start !== "get") ? start : !getterName ? target[prop] : funcParam ? target[getterName](funcParam) : target[getterName](),
					isRelative = (typeof(end) === "string" && end.charAt(1) === "="),
					pt = {t:target, p:prop, s:s, f:(type === "function"), pg:0, n:overwriteProp || prop, m:(!mod ? 0 : (typeof(mod) === "function") ? mod : Math.round), pr:0, c:isRelative ? parseInt(end.charAt(0) + "1", 10) * parseFloat(end.substr(2)) : (parseFloat(end) - s) || 0},
					blob;

				if (typeof(s) !== "number" || (typeof(end) !== "number" && !isRelative)) {
					if (funcParam || isNaN(s) || (!isRelative && isNaN(end)) || typeof(s) === "boolean" || typeof(end) === "boolean") {
						//a blob (string that has multiple numbers in it)
						pt.fp = funcParam;
						blob = _blobDif(s, (isRelative ? (parseFloat(pt.s) + pt.c) + (pt.s + "").replace(/[0-9\-\.]/g, "") : end), stringFilter || TweenLite.defaultStringFilter, pt);
						pt = {t: blob, p: "setRatio", s: 0, c: 1, f: 2, pg: 0, n: overwriteProp || prop, pr: 0, m: 0}; //"2" indicates it's a Blob property tween. Needed for RoundPropsPlugin for example.
					} else {
						pt.s = parseFloat(s);
						if (!isRelative) {
							pt.c = (parseFloat(end) - pt.s) || 0;
						}
					}
				}
				if (pt.c) { //only add it to the linked list if there's a change.
					if ((pt._next = this._firstPT)) {
						pt._next._prev = pt;
					}
					this._firstPT = pt;
					return pt;
				}
			},
			_internals = TweenLite._internals = {isArray:_isArray, isSelector:_isSelector, lazyTweens:_lazyTweens, blobDif:_blobDif}, //gives us a way to expose certain private values to other GreenSock classes without contaminating tha main TweenLite object.
			_plugins = TweenLite._plugins = {},
			_tweenLookup = _internals.tweenLookup = {},
			_tweenLookupNum = 0,
			_reservedProps = _internals.reservedProps = {ease:1, delay:1, overwrite:1, onComplete:1, onCompleteParams:1, onCompleteScope:1, useFrames:1, runBackwards:1, startAt:1, onUpdate:1, onUpdateParams:1, onUpdateScope:1, onStart:1, onStartParams:1, onStartScope:1, onReverseComplete:1, onReverseCompleteParams:1, onReverseCompleteScope:1, onRepeat:1, onRepeatParams:1, onRepeatScope:1, easeParams:1, yoyo:1, immediateRender:1, repeat:1, repeatDelay:1, data:1, paused:1, reversed:1, autoCSS:1, lazy:1, onOverwrite:1, callbackScope:1, stringFilter:1, id:1, yoyoEase:1},
			_overwriteLookup = {none:0, all:1, auto:2, concurrent:3, allOnStart:4, preexisting:5, "true":1, "false":0},
			_rootFramesTimeline = Animation._rootFramesTimeline = new SimpleTimeline(),
			_rootTimeline = Animation._rootTimeline = new SimpleTimeline(),
			_nextGCFrame = 30,
			_lazyRender = _internals.lazyRender = function() {
				var i = _lazyTweens.length,
					tween;
				_lazyLookup = {};
				while (--i > -1) {
					tween = _lazyTweens[i];
					if (tween && tween._lazy !== false) {
						tween.render(tween._lazy[0], tween._lazy[1], true);
						tween._lazy = false;
					}
				}
				_lazyTweens.length = 0;
			};

		_rootTimeline._startTime = _ticker.time;
		_rootFramesTimeline._startTime = _ticker.frame;
		_rootTimeline._active = _rootFramesTimeline._active = true;
		setTimeout(_lazyRender, 1); //on some mobile devices, there isn't a "tick" before code runs which means any lazy renders wouldn't run before the next official "tick".

		Animation._updateRoot = TweenLite.render = function() {
				var i, a, p;
				if (_lazyTweens.length) { //if code is run outside of the requestAnimationFrame loop, there may be tweens queued AFTER the engine refreshed, so we need to ensure any pending renders occur before we refresh again.
					_lazyRender();
				}
				_rootTimeline.render((_ticker.time - _rootTimeline._startTime) * _rootTimeline._timeScale, false, false);
				_rootFramesTimeline.render((_ticker.frame - _rootFramesTimeline._startTime) * _rootFramesTimeline._timeScale, false, false);
				if (_lazyTweens.length) {
					_lazyRender();
				}
				if (_ticker.frame >= _nextGCFrame) { //dump garbage every 120 frames or whatever the user sets TweenLite.autoSleep to
					_nextGCFrame = _ticker.frame + (parseInt(TweenLite.autoSleep, 10) || 120);
					for (p in _tweenLookup) {
						a = _tweenLookup[p].tweens;
						i = a.length;
						while (--i > -1) {
							if (a[i]._gc) {
								a.splice(i, 1);
							}
						}
						if (a.length === 0) {
							delete _tweenLookup[p];
						}
					}
					//if there are no more tweens in the root timelines, or if they're all paused, make the _timer sleep to reduce load on the CPU slightly
					p = _rootTimeline._first;
					if (!p || p._paused) if (TweenLite.autoSleep && !_rootFramesTimeline._first && _ticker._listeners.tick.length === 1) {
						while (p && p._paused) {
							p = p._next;
						}
						if (!p) {
							_ticker.sleep();
						}
					}
				}
			};

		_ticker.addEventListener("tick", Animation._updateRoot);

		var _register = function(target, tween, scrub) {
				var id = target._gsTweenID, a, i;
				if (!_tweenLookup[id || (target._gsTweenID = id = "t" + (_tweenLookupNum++))]) {
					_tweenLookup[id] = {target:target, tweens:[]};
				}
				if (tween) {
					a = _tweenLookup[id].tweens;
					a[(i = a.length)] = tween;
					if (scrub) {
						while (--i > -1) {
							if (a[i] === tween) {
								a.splice(i, 1);
							}
						}
					}
				}
				return _tweenLookup[id].tweens;
			},
			_onOverwrite = function(overwrittenTween, overwritingTween, target, killedProps) {
				var func = overwrittenTween.vars.onOverwrite, r1, r2;
				if (func) {
					r1 = func(overwrittenTween, overwritingTween, target, killedProps);
				}
				func = TweenLite.onOverwrite;
				if (func) {
					r2 = func(overwrittenTween, overwritingTween, target, killedProps);
				}
				return (r1 !== false && r2 !== false);
			},
			_applyOverwrite = function(target, tween, props, mode, siblings) {
				var i, changed, curTween, l;
				if (mode === 1 || mode >= 4) {
					l = siblings.length;
					for (i = 0; i < l; i++) {
						if ((curTween = siblings[i]) !== tween) {
							if (!curTween._gc) {
								if (curTween._kill(null, target, tween)) {
									changed = true;
								}
							}
						} else if (mode === 5) {
							break;
						}
					}
					return changed;
				}
				//NOTE: Add 0.0000000001 to overcome floating point errors that can cause the startTime to be VERY slightly off (when a tween's time() is set for example)
				var startTime = tween._startTime + _tinyNum,
					overlaps = [],
					oCount = 0,
					zeroDur = (tween._duration === 0),
					globalStart;
				i = siblings.length;
				while (--i > -1) {
					if ((curTween = siblings[i]) === tween || curTween._gc || curTween._paused) {
						//ignore
					} else if (curTween._timeline !== tween._timeline) {
						globalStart = globalStart || _checkOverlap(tween, 0, zeroDur);
						if (_checkOverlap(curTween, globalStart, zeroDur) === 0) {
							overlaps[oCount++] = curTween;
						}
					} else if (curTween._startTime <= startTime) if (curTween._startTime + curTween.totalDuration() / curTween._timeScale > startTime) if (!((zeroDur || !curTween._initted) && startTime - curTween._startTime <= 0.0000000002)) {
						overlaps[oCount++] = curTween;
					}
				}

				i = oCount;
				while (--i > -1) {
					curTween = overlaps[i];
					if (mode === 2) if (curTween._kill(props, target, tween)) {
						changed = true;
					}
					if (mode !== 2 || (!curTween._firstPT && curTween._initted)) {
						if (mode !== 2 && !_onOverwrite(curTween, tween)) {
							continue;
						}
						if (curTween._enabled(false, false)) { //if all property tweens have been overwritten, kill the tween.
							changed = true;
						}
					}
				}
				return changed;
			},
			_checkOverlap = function(tween, reference, zeroDur) {
				var tl = tween._timeline,
					ts = tl._timeScale,
					t = tween._startTime;
				while (tl._timeline) {
					t += tl._startTime;
					ts *= tl._timeScale;
					if (tl._paused) {
						return -100;
					}
					tl = tl._timeline;
				}
				t /= ts;
				return (t > reference) ? t - reference : ((zeroDur && t === reference) || (!tween._initted && t - reference < 2 * _tinyNum)) ? _tinyNum : ((t += tween.totalDuration() / tween._timeScale / ts) > reference + _tinyNum) ? 0 : t - reference - _tinyNum;
			};


//---- TweenLite instance methods -----------------------------------------------------------------------------

		p._init = function() {
			var v = this.vars,
				op = this._overwrittenProps,
				dur = this._duration,
				immediate = !!v.immediateRender,
				ease = v.ease,
				i, initPlugins, pt, p, startVars, l;
			if (v.startAt) {
				if (this._startAt) {
					this._startAt.render(-1, true); //if we've run a startAt previously (when the tween instantiated), we should revert it so that the values re-instantiate correctly particularly for relative tweens. Without this, a TweenLite.fromTo(obj, 1, {x:"+=100"}, {x:"-=100"}), for example, would actually jump to +=200 because the startAt would run twice, doubling the relative change.
					this._startAt.kill();
				}
				startVars = {};
				for (p in v.startAt) { //copy the properties/values into a new object to avoid collisions, like var to = {x:0}, from = {x:500}; timeline.fromTo(e, 1, from, to).fromTo(e, 1, to, from);
					startVars[p] = v.startAt[p];
				}
				startVars.data = "isStart";
				startVars.overwrite = false;
				startVars.immediateRender = true;
				startVars.lazy = (immediate && v.lazy !== false);
				startVars.startAt = startVars.delay = null; //no nesting of startAt objects allowed (otherwise it could cause an infinite loop).
				startVars.onUpdate = v.onUpdate;
				startVars.onUpdateParams = v.onUpdateParams;
				startVars.onUpdateScope = v.onUpdateScope || v.callbackScope || this;
				this._startAt = TweenLite.to(this.target || {}, 0, startVars);
				if (immediate) {
					if (this._time > 0) {
						this._startAt = null; //tweens that render immediately (like most from() and fromTo() tweens) shouldn't revert when their parent timeline's playhead goes backward past the startTime because the initial render could have happened anytime and it shouldn't be directly correlated to this tween's startTime. Imagine setting up a complex animation where the beginning states of various objects are rendered immediately but the tween doesn't happen for quite some time - if we revert to the starting values as soon as the playhead goes backward past the tween's startTime, it will throw things off visually. Reversion should only happen in TimelineLite/Max instances where immediateRender was false (which is the default in the convenience methods like from()).
					} else if (dur !== 0) {
						return; //we skip initialization here so that overwriting doesn't occur until the tween actually begins. Otherwise, if you create several immediateRender:true tweens of the same target/properties to drop into a TimelineLite or TimelineMax, the last one created would overwrite the first ones because they didn't get placed into the timeline yet before the first render occurs and kicks in overwriting.
					}
				}
			} else if (v.runBackwards && dur !== 0) {
				//from() tweens must be handled uniquely: their beginning values must be rendered but we don't want overwriting to occur yet (when time is still 0). Wait until the tween actually begins before doing all the routines like overwriting. At that time, we should render at the END of the tween to ensure that things initialize correctly (remember, from() tweens go backwards)
				if (this._startAt) {
					this._startAt.render(-1, true);
					this._startAt.kill();
					this._startAt = null;
				} else {
					if (this._time !== 0) { //in rare cases (like if a from() tween runs and then is invalidate()-ed), immediateRender could be true but the initial forced-render gets skipped, so there's no need to force the render in this context when the _time is greater than 0
						immediate = false;
					}
					pt = {};
					for (p in v) { //copy props into a new object and skip any reserved props, otherwise onComplete or onUpdate or onStart could fire. We should, however, permit autoCSS to go through.
						if (!_reservedProps[p] || p === "autoCSS") {
							pt[p] = v[p];
						}
					}
					pt.overwrite = 0;
					pt.data = "isFromStart"; //we tag the tween with as "isFromStart" so that if [inside a plugin] we need to only do something at the very END of a tween, we have a way of identifying this tween as merely the one that's setting the beginning values for a "from()" tween. For example, clearProps in CSSPlugin should only get applied at the very END of a tween and without this tag, from(...{height:100, clearProps:"height", delay:1}) would wipe the height at the beginning of the tween and after 1 second, it'd kick back in.
					pt.lazy = (immediate && v.lazy !== false);
					pt.immediateRender = immediate; //zero-duration tweens render immediately by default, but if we're not specifically instructed to render this tween immediately, we should skip this and merely _init() to record the starting values (rendering them immediately would push them to completion which is wasteful in that case - we'd have to render(-1) immediately after)
					this._startAt = TweenLite.to(this.target, 0, pt);
					if (!immediate) {
						this._startAt._init(); //ensures that the initial values are recorded
						this._startAt._enabled(false); //no need to have the tween render on the next cycle. Disable it because we'll always manually control the renders of the _startAt tween.
						if (this.vars.immediateRender) {
							this._startAt = null;
						}
					} else if (this._time === 0) {
						return;
					}
				}
			}
			this._ease = ease = (!ease) ? TweenLite.defaultEase : (ease instanceof Ease) ? ease : (typeof(ease) === "function") ? new Ease(ease, v.easeParams) : _easeMap[ease] || TweenLite.defaultEase;
			if (v.easeParams instanceof Array && ease.config) {
				this._ease = ease.config.apply(ease, v.easeParams);
			}
			this._easeType = this._ease._type;
			this._easePower = this._ease._power;
			this._firstPT = null;

			if (this._targets) {
				l = this._targets.length;
				for (i = 0; i < l; i++) {
					if ( this._initProps( this._targets[i], (this._propLookup[i] = {}), this._siblings[i], (op ? op[i] : null), i) ) {
						initPlugins = true;
					}
				}
			} else {
				initPlugins = this._initProps(this.target, this._propLookup, this._siblings, op, 0);
			}

			if (initPlugins) {
				TweenLite._onPluginEvent("_onInitAllProps", this); //reorders the array in order of priority. Uses a static TweenPlugin method in order to minimize file size in TweenLite
			}
			if (op) if (!this._firstPT) if (typeof(this.target) !== "function") { //if all tweening properties have been overwritten, kill the tween. If the target is a function, it's probably a delayedCall so let it live.
				this._enabled(false, false);
			}
			if (v.runBackwards) {
				pt = this._firstPT;
				while (pt) {
					pt.s += pt.c;
					pt.c = -pt.c;
					pt = pt._next;
				}
			}
			this._onUpdate = v.onUpdate;
			this._initted = true;
		};

		p._initProps = function(target, propLookup, siblings, overwrittenProps, index) {
			var p, i, initPlugins, plugin, pt, v;
			if (target == null) {
				return false;
			}

			if (_lazyLookup[target._gsTweenID]) {
				_lazyRender(); //if other tweens of the same target have recently initted but haven't rendered yet, we've got to force the render so that the starting values are correct (imagine populating a timeline with a bunch of sequential tweens and then jumping to the end)
			}

			if (!this.vars.css) if (target.style) if (target !== window && target.nodeType) if (_plugins.css) if (this.vars.autoCSS !== false) { //it's so common to use TweenLite/Max to animate the css of DOM elements, we assume that if the target is a DOM element, that's what is intended (a convenience so that users don't have to wrap things in css:{}, although we still recommend it for a slight performance boost and better specificity). Note: we cannot check "nodeType" on the window inside an iframe.
				_autoCSS(this.vars, target);
			}
			for (p in this.vars) {
				v = this.vars[p];
				if (_reservedProps[p]) {
					if (v) if ((v instanceof Array) || (v.push && _isArray(v))) if (v.join("").indexOf("{self}") !== -1) {
						this.vars[p] = v = this._swapSelfInParams(v, this);
					}

				} else if (_plugins[p] && (plugin = new _plugins[p]())._onInitTween(target, this.vars[p], this, index)) {

					//t - target 		[object]
					//p - property 		[string]
					//s - start			[number]
					//c - change		[number]
					//f - isFunction	[boolean]
					//n - name			[string]
					//pg - isPlugin 	[boolean]
					//pr - priority		[number]
					//m - mod           [function | 0]
					this._firstPT = pt = {_next:this._firstPT, t:plugin, p:"setRatio", s:0, c:1, f:1, n:p, pg:1, pr:plugin._priority, m:0};
					i = plugin._overwriteProps.length;
					while (--i > -1) {
						propLookup[plugin._overwriteProps[i]] = this._firstPT;
					}
					if (plugin._priority || plugin._onInitAllProps) {
						initPlugins = true;
					}
					if (plugin._onDisable || plugin._onEnable) {
						this._notifyPluginsOfEnabled = true;
					}
					if (pt._next) {
						pt._next._prev = pt;
					}

				} else {
					propLookup[p] = _addPropTween.call(this, target, p, "get", v, p, 0, null, this.vars.stringFilter, index);
				}
			}

			if (overwrittenProps) if (this._kill(overwrittenProps, target)) { //another tween may have tried to overwrite properties of this tween before init() was called (like if two tweens start at the same time, the one created second will run first)
				return this._initProps(target, propLookup, siblings, overwrittenProps, index);
			}
			if (this._overwrite > 1) if (this._firstPT) if (siblings.length > 1) if (_applyOverwrite(target, this, propLookup, this._overwrite, siblings)) {
				this._kill(propLookup, target);
				return this._initProps(target, propLookup, siblings, overwrittenProps, index);
			}
			if (this._firstPT) if ((this.vars.lazy !== false && this._duration) || (this.vars.lazy && !this._duration)) { //zero duration tweens don't lazy render by default; everything else does.
				_lazyLookup[target._gsTweenID] = true;
			}
			return initPlugins;
		};

		p.render = function(time, suppressEvents, force) {
			var prevTime = this._time,
				duration = this._duration,
				prevRawPrevTime = this._rawPrevTime,
				isComplete, callback, pt, rawPrevTime;
			if (time >= duration - 0.0000001 && time >= 0) { //to work around occasional floating point math artifacts.
				this._totalTime = this._time = duration;
				this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1;
				if (!this._reversed ) {
					isComplete = true;
					callback = "onComplete";
					force = (force || this._timeline.autoRemoveChildren); //otherwise, if the animation is unpaused/activated after it's already finished, it doesn't get removed from the parent timeline.
				}
				if (duration === 0) if (this._initted || !this.vars.lazy || force) { //zero-duration tweens are tricky because we must discern the momentum/direction of time in order to determine whether the starting values should be rendered or the ending values. If the "playhead" of its timeline goes past the zero-duration tween in the forward direction or lands directly on it, the end values should be rendered, but if the timeline's "playhead" moves past it in the backward direction (from a postitive time to a negative time), the starting values must be rendered.
					if (this._startTime === this._timeline._duration) { //if a zero-duration tween is at the VERY end of a timeline and that timeline renders at its end, it will typically add a tiny bit of cushion to the render time to prevent rounding errors from getting in the way of tweens rendering their VERY end. If we then reverse() that timeline, the zero-duration tween will trigger its onReverseComplete even though technically the playhead didn't pass over it again. It's a very specific edge case we must accommodate.
						time = 0;
					}
					if (prevRawPrevTime < 0 || (time <= 0 && time >= -0.0000001) || (prevRawPrevTime === _tinyNum && this.data !== "isPause")) if (prevRawPrevTime !== time) { //note: when this.data is "isPause", it's a callback added by addPause() on a timeline that we should not be triggered when LEAVING its exact start time. In other words, tl.addPause(1).play(1) shouldn't pause.
						force = true;
						if (prevRawPrevTime > _tinyNum) {
							callback = "onReverseComplete";
						}
					}
					this._rawPrevTime = rawPrevTime = (!suppressEvents || time || prevRawPrevTime === time) ? time : _tinyNum; //when the playhead arrives at EXACTLY time 0 (right on top) of a zero-duration tween, we need to discern if events are suppressed so that when the playhead moves again (next time), it'll trigger the callback. If events are NOT suppressed, obviously the callback would be triggered in this render. Basically, the callback should fire either when the playhead ARRIVES or LEAVES this exact spot, not both. Imagine doing a timeline.seek(0) and there's a callback that sits at 0. Since events are suppressed on that seek() by default, nothing will fire, but when the playhead moves off of that position, the callback should fire. This behavior is what people intuitively expect. We set the _rawPrevTime to be a precise tiny number to indicate this scenario rather than using another property/variable which would increase memory usage. This technique is less readable, but more efficient.
				}

			} else if (time < 0.0000001) { //to work around occasional floating point math artifacts, round super small values to 0.
				this._totalTime = this._time = 0;
				this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0;
				if (prevTime !== 0 || (duration === 0 && prevRawPrevTime > 0)) {
					callback = "onReverseComplete";
					isComplete = this._reversed;
				}
				if (time < 0) {
					this._active = false;
					if (duration === 0) if (this._initted || !this.vars.lazy || force) { //zero-duration tweens are tricky because we must discern the momentum/direction of time in order to determine whether the starting values should be rendered or the ending values. If the "playhead" of its timeline goes past the zero-duration tween in the forward direction or lands directly on it, the end values should be rendered, but if the timeline's "playhead" moves past it in the backward direction (from a postitive time to a negative time), the starting values must be rendered.
						if (prevRawPrevTime >= 0 && !(prevRawPrevTime === _tinyNum && this.data === "isPause")) {
							force = true;
						}
						this._rawPrevTime = rawPrevTime = (!suppressEvents || time || prevRawPrevTime === time) ? time : _tinyNum; //when the playhead arrives at EXACTLY time 0 (right on top) of a zero-duration tween, we need to discern if events are suppressed so that when the playhead moves again (next time), it'll trigger the callback. If events are NOT suppressed, obviously the callback would be triggered in this render. Basically, the callback should fire either when the playhead ARRIVES or LEAVES this exact spot, not both. Imagine doing a timeline.seek(0) and there's a callback that sits at 0. Since events are suppressed on that seek() by default, nothing will fire, but when the playhead moves off of that position, the callback should fire. This behavior is what people intuitively expect. We set the _rawPrevTime to be a precise tiny number to indicate this scenario rather than using another property/variable which would increase memory usage. This technique is less readable, but more efficient.
					}
				}
				if (!this._initted || (this._startAt && this._startAt.progress())) { //if we render the very beginning (time == 0) of a fromTo(), we must force the render (normal tweens wouldn't need to render at a time of 0 when the prevTime was also 0). This is also mandatory to make sure overwriting kicks in immediately. Also, we check progress() because if startAt has already rendered at its end, we should force a render at its beginning. Otherwise, if you put the playhead directly on top of where a fromTo({immediateRender:false}) starts, and then move it backwards, the from() won't revert its values.
					force = true;
				}
			} else {
				this._totalTime = this._time = time;

				if (this._easeType) {
					var r = time / duration, type = this._easeType, pow = this._easePower;
					if (type === 1 || (type === 3 && r >= 0.5)) {
						r = 1 - r;
					}
					if (type === 3) {
						r *= 2;
					}
					if (pow === 1) {
						r *= r;
					} else if (pow === 2) {
						r *= r * r;
					} else if (pow === 3) {
						r *= r * r * r;
					} else if (pow === 4) {
						r *= r * r * r * r;
					}

					if (type === 1) {
						this.ratio = 1 - r;
					} else if (type === 2) {
						this.ratio = r;
					} else if (time / duration < 0.5) {
						this.ratio = r / 2;
					} else {
						this.ratio = 1 - (r / 2);
					}

				} else {
					this.ratio = this._ease.getRatio(time / duration);
				}
			}

			if (this._time === prevTime && !force) {
				return;
			} else if (!this._initted) {
				this._init();
				if (!this._initted || this._gc) { //immediateRender tweens typically won't initialize until the playhead advances (_time is greater than 0) in order to ensure that overwriting occurs properly. Also, if all of the tweening properties have been overwritten (which would cause _gc to be true, as set in _init()), we shouldn't continue otherwise an onStart callback could be called for example.
					return;
				} else if (!force && this._firstPT && ((this.vars.lazy !== false && this._duration) || (this.vars.lazy && !this._duration))) {
					this._time = this._totalTime = prevTime;
					this._rawPrevTime = prevRawPrevTime;
					_lazyTweens.push(this);
					this._lazy = [time, suppressEvents];
					return;
				}
				//_ease is initially set to defaultEase, so now that init() has run, _ease is set properly and we need to recalculate the ratio. Overall this is faster than using conditional logic earlier in the method to avoid having to set ratio twice because we only init() once but renderTime() gets called VERY frequently.
				if (this._time && !isComplete) {
					this.ratio = this._ease.getRatio(this._time / duration);
				} else if (isComplete && this._ease._calcEnd) {
					this.ratio = this._ease.getRatio((this._time === 0) ? 0 : 1);
				}
			}
			if (this._lazy !== false) { //in case a lazy render is pending, we should flush it because the new render is occurring now (imagine a lazy tween instantiating and then immediately the user calls tween.seek(tween.duration()), skipping to the end - the end render would be forced, and then if we didn't flush the lazy render, it'd fire AFTER the seek(), rendering it at the wrong time.
				this._lazy = false;
			}
			if (!this._active) if (!this._paused && this._time !== prevTime && time >= 0) {
				this._active = true;  //so that if the user renders a tween (as opposed to the timeline rendering it), the timeline is forced to re-render and align it with the proper time/frame on the next rendering cycle. Maybe the tween already finished but the user manually re-renders it as halfway done.
			}
			if (prevTime === 0) {
				if (this._startAt) {
					if (time >= 0) {
						this._startAt.render(time, true, force);
					} else if (!callback) {
						callback = "_dummyGS"; //if no callback is defined, use a dummy value just so that the condition at the end evaluates as true because _startAt should render AFTER the normal render loop when the time is negative. We could handle this in a more intuitive way, of course, but the render loop is the MOST important thing to optimize, so this technique allows us to avoid adding extra conditional logic in a high-frequency area.
					}
				}
				if (this.vars.onStart) if (this._time !== 0 || duration === 0) if (!suppressEvents) {
					this._callback("onStart");
				}
			}
			pt = this._firstPT;
			while (pt) {
				if (pt.f) {
					pt.t[pt.p](pt.c * this.ratio + pt.s);
				} else {
					pt.t[pt.p] = pt.c * this.ratio + pt.s;
				}
				pt = pt._next;
			}

			if (this._onUpdate) {
				if (time < 0) if (this._startAt && time !== -0.0001) { //if the tween is positioned at the VERY beginning (_startTime 0) of its parent timeline, it's illegal for the playhead to go back further, so we should not render the recorded startAt values.
					this._startAt.render(time, true, force); //note: for performance reasons, we tuck this conditional logic inside less traveled areas (most tweens don't have an onUpdate). We'd just have it at the end before the onComplete, but the values should be updated before any onUpdate is called, so we ALSO put it here and then if it's not called, we do so later near the onComplete.
				}
				if (!suppressEvents) if (this._time !== prevTime || isComplete || force) {
					this._callback("onUpdate");
				}
			}
			if (callback) if (!this._gc || force) { //check _gc because there's a chance that kill() could be called in an onUpdate
				if (time < 0 && this._startAt && !this._onUpdate && time !== -0.0001) { //-0.0001 is a special value that we use when looping back to the beginning of a repeated TimelineMax, in which case we shouldn't render the _startAt values.
					this._startAt.render(time, true, force);
				}
				if (isComplete) {
					if (this._timeline.autoRemoveChildren) {
						this._enabled(false, false);
					}
					this._active = false;
				}
				if (!suppressEvents && this.vars[callback]) {
					this._callback(callback);
				}
				if (duration === 0 && this._rawPrevTime === _tinyNum && rawPrevTime !== _tinyNum) { //the onComplete or onReverseComplete could trigger movement of the playhead and for zero-duration tweens (which must discern direction) that land directly back on their start time, we don't want to fire again on the next render. Think of several addPause()'s in a timeline that forces the playhead to a certain spot, but what if it's already paused and another tween is tweening the "time" of the timeline? Each time it moves [forward] past that spot, it would move back, and since suppressEvents is true, it'd reset _rawPrevTime to _tinyNum so that when it begins again, the callback would fire (so ultimately it could bounce back and forth during that tween). Again, this is a very uncommon scenario, but possible nonetheless.
					this._rawPrevTime = 0;
				}
			}
		};

		p._kill = function(vars, target, overwritingTween) {
			if (vars === "all") {
				vars = null;
			}
			if (vars == null) if (target == null || target === this.target) {
				this._lazy = false;
				return this._enabled(false, false);
			}
			target = (typeof(target) !== "string") ? (target || this._targets || this.target) : TweenLite.selector(target) || target;
			var simultaneousOverwrite = (overwritingTween && this._time && overwritingTween._startTime === this._startTime && this._timeline === overwritingTween._timeline),
				i, overwrittenProps, p, pt, propLookup, changed, killProps, record, killed;
			if ((_isArray(target) || _isSelector(target)) && typeof(target[0]) !== "number") {
				i = target.length;
				while (--i > -1) {
					if (this._kill(vars, target[i], overwritingTween)) {
						changed = true;
					}
				}
			} else {
				if (this._targets) {
					i = this._targets.length;
					while (--i > -1) {
						if (target === this._targets[i]) {
							propLookup = this._propLookup[i] || {};
							this._overwrittenProps = this._overwrittenProps || [];
							overwrittenProps = this._overwrittenProps[i] = vars ? this._overwrittenProps[i] || {} : "all";
							break;
						}
					}
				} else if (target !== this.target) {
					return false;
				} else {
					propLookup = this._propLookup;
					overwrittenProps = this._overwrittenProps = vars ? this._overwrittenProps || {} : "all";
				}

				if (propLookup) {
					killProps = vars || propLookup;
					record = (vars !== overwrittenProps && overwrittenProps !== "all" && vars !== propLookup && (typeof(vars) !== "object" || !vars._tempKill)); //_tempKill is a super-secret way to delete a particular tweening property but NOT have it remembered as an official overwritten property (like in BezierPlugin)
					if (overwritingTween && (TweenLite.onOverwrite || this.vars.onOverwrite)) {
						for (p in killProps) {
							if (propLookup[p]) {
								if (!killed) {
									killed = [];
								}
								killed.push(p);
							}
						}
						if ((killed || !vars) && !_onOverwrite(this, overwritingTween, target, killed)) { //if the onOverwrite returned false, that means the user wants to override the overwriting (cancel it).
							return false;
						}
					}

					for (p in killProps) {
						if ((pt = propLookup[p])) {
							if (simultaneousOverwrite) { //if another tween overwrites this one and they both start at exactly the same time, yet this tween has already rendered once (for example, at 0.001) because it's first in the queue, we should revert the values to where they were at 0 so that the starting values aren't contaminated on the overwriting tween.
								if (pt.f) {
									pt.t[pt.p](pt.s);
								} else {
									pt.t[pt.p] = pt.s;
								}
								changed = true;
							}
							if (pt.pg && pt.t._kill(killProps)) {
								changed = true; //some plugins need to be notified so they can perform cleanup tasks first
							}
							if (!pt.pg || pt.t._overwriteProps.length === 0) {
								if (pt._prev) {
									pt._prev._next = pt._next;
								} else if (pt === this._firstPT) {
									this._firstPT = pt._next;
								}
								if (pt._next) {
									pt._next._prev = pt._prev;
								}
								pt._next = pt._prev = null;
							}
							delete propLookup[p];
						}
						if (record) {
							overwrittenProps[p] = 1;
						}
					}
					if (!this._firstPT && this._initted) { //if all tweening properties are killed, kill the tween. Without this line, if there's a tween with multiple targets and then you killTweensOf() each target individually, the tween would technically still remain active and fire its onComplete even though there aren't any more properties tweening.
						this._enabled(false, false);
					}
				}
			}
			return changed;
		};

		p.invalidate = function() {
			if (this._notifyPluginsOfEnabled) {
				TweenLite._onPluginEvent("_onDisable", this);
			}
			this._firstPT = this._overwrittenProps = this._startAt = this._onUpdate = null;
			this._notifyPluginsOfEnabled = this._active = this._lazy = false;
			this._propLookup = (this._targets) ? {} : [];
			Animation.prototype.invalidate.call(this);
			if (this.vars.immediateRender) {
				this._time = -_tinyNum; //forces a render without having to set the render() "force" parameter to true because we want to allow lazying by default (using the "force" parameter always forces an immediate full render)
				this.render(Math.min(0, -this._delay)); //in case delay is negative.
			}
			return this;
		};

		p._enabled = function(enabled, ignoreTimeline) {
			if (!_tickerActive) {
				_ticker.wake();
			}
			if (enabled && this._gc) {
				var targets = this._targets,
					i;
				if (targets) {
					i = targets.length;
					while (--i > -1) {
						this._siblings[i] = _register(targets[i], this, true);
					}
				} else {
					this._siblings = _register(this.target, this, true);
				}
			}
			Animation.prototype._enabled.call(this, enabled, ignoreTimeline);
			if (this._notifyPluginsOfEnabled) if (this._firstPT) {
				return TweenLite._onPluginEvent((enabled ? "_onEnable" : "_onDisable"), this);
			}
			return false;
		};


//----TweenLite static methods -----------------------------------------------------

		TweenLite.to = function(target, duration, vars) {
			return new TweenLite(target, duration, vars);
		};

		TweenLite.from = function(target, duration, vars) {
			vars.runBackwards = true;
			vars.immediateRender = (vars.immediateRender != false);
			return new TweenLite(target, duration, vars);
		};

		TweenLite.fromTo = function(target, duration, fromVars, toVars) {
			toVars.startAt = fromVars;
			toVars.immediateRender = (toVars.immediateRender != false && fromVars.immediateRender != false);
			return new TweenLite(target, duration, toVars);
		};

		TweenLite.delayedCall = function(delay, callback, params, scope, useFrames) {
			return new TweenLite(callback, 0, {delay:delay, onComplete:callback, onCompleteParams:params, callbackScope:scope, onReverseComplete:callback, onReverseCompleteParams:params, immediateRender:false, lazy:false, useFrames:useFrames, overwrite:0});
		};

		TweenLite.set = function(target, vars) {
			return new TweenLite(target, 0, vars);
		};

		TweenLite.getTweensOf = function(target, onlyActive) {
			if (target == null) { return []; }
			target = (typeof(target) !== "string") ? target : TweenLite.selector(target) || target;
			var i, a, j, t;
			if ((_isArray(target) || _isSelector(target)) && typeof(target[0]) !== "number") {
				i = target.length;
				a = [];
				while (--i > -1) {
					a = a.concat(TweenLite.getTweensOf(target[i], onlyActive));
				}
				i = a.length;
				//now get rid of any duplicates (tweens of arrays of objects could cause duplicates)
				while (--i > -1) {
					t = a[i];
					j = i;
					while (--j > -1) {
						if (t === a[j]) {
							a.splice(i, 1);
						}
					}
				}
			} else if (target._gsTweenID) {
				a = _register(target).concat();
				i = a.length;
				while (--i > -1) {
					if (a[i]._gc || (onlyActive && !a[i].isActive())) {
						a.splice(i, 1);
					}
				}
			}
			return a || [];
		};

		TweenLite.killTweensOf = TweenLite.killDelayedCallsTo = function(target, onlyActive, vars) {
			if (typeof(onlyActive) === "object") {
				vars = onlyActive; //for backwards compatibility (before "onlyActive" parameter was inserted)
				onlyActive = false;
			}
			var a = TweenLite.getTweensOf(target, onlyActive),
				i = a.length;
			while (--i > -1) {
				a[i]._kill(vars, target);
			}
		};



/*
 * ----------------------------------------------------------------
 * TweenPlugin   (could easily be split out as a separate file/class, but included for ease of use (so that people don't need to include another script call before loading plugins which is easy to forget)
 * ----------------------------------------------------------------
 */
		var TweenPlugin = _class("plugins.TweenPlugin", function(props, priority) {
					this._overwriteProps = (props || "").split(",");
					this._propName = this._overwriteProps[0];
					this._priority = priority || 0;
					this._super = TweenPlugin.prototype;
				}, true);

		p = TweenPlugin.prototype;
		TweenPlugin.version = "1.19.0";
		TweenPlugin.API = 2;
		p._firstPT = null;
		p._addTween = _addPropTween;
		p.setRatio = _setRatio;

		p._kill = function(lookup) {
			var a = this._overwriteProps,
				pt = this._firstPT,
				i;
			if (lookup[this._propName] != null) {
				this._overwriteProps = [];
			} else {
				i = a.length;
				while (--i > -1) {
					if (lookup[a[i]] != null) {
						a.splice(i, 1);
					}
				}
			}
			while (pt) {
				if (lookup[pt.n] != null) {
					if (pt._next) {
						pt._next._prev = pt._prev;
					}
					if (pt._prev) {
						pt._prev._next = pt._next;
						pt._prev = null;
					} else if (this._firstPT === pt) {
						this._firstPT = pt._next;
					}
				}
				pt = pt._next;
			}
			return false;
		};

		p._mod = p._roundProps = function(lookup) {
			var pt = this._firstPT,
				val;
			while (pt) {
				val = lookup[this._propName] || (pt.n != null && lookup[ pt.n.split(this._propName + "_").join("") ]);
				if (val && typeof(val) === "function") { //some properties that are very plugin-specific add a prefix named after the _propName plus an underscore, so we need to ignore that extra stuff here.
					if (pt.f === 2) {
						pt.t._applyPT.m = val;
					} else {
						pt.m = val;
					}
				}
				pt = pt._next;
			}
		};

		TweenLite._onPluginEvent = function(type, tween) {
			var pt = tween._firstPT,
				changed, pt2, first, last, next;
			if (type === "_onInitAllProps") {
				//sorts the PropTween linked list in order of priority because some plugins need to render earlier/later than others, like MotionBlurPlugin applies its effects after all x/y/alpha tweens have rendered on each frame.
				while (pt) {
					next = pt._next;
					pt2 = first;
					while (pt2 && pt2.pr > pt.pr) {
						pt2 = pt2._next;
					}
					if ((pt._prev = pt2 ? pt2._prev : last)) {
						pt._prev._next = pt;
					} else {
						first = pt;
					}
					if ((pt._next = pt2)) {
						pt2._prev = pt;
					} else {
						last = pt;
					}
					pt = next;
				}
				pt = tween._firstPT = first;
			}
			while (pt) {
				if (pt.pg) if (typeof(pt.t[type]) === "function") if (pt.t[type]()) {
					changed = true;
				}
				pt = pt._next;
			}
			return changed;
		};

		TweenPlugin.activate = function(plugins) {
			var i = plugins.length;
			while (--i > -1) {
				if (plugins[i].API === TweenPlugin.API) {
					_plugins[(new plugins[i]())._propName] = plugins[i];
				}
			}
			return true;
		};

		//provides a more concise way to define plugins that have no dependencies besides TweenPlugin and TweenLite, wrapping common boilerplate stuff into one function (added in 1.9.0). You don't NEED to use this to define a plugin - the old way still works and can be useful in certain (rare) situations.
		_gsDefine.plugin = function(config) {
			if (!config || !config.propName || !config.init || !config.API) { throw "illegal plugin definition."; }
			var propName = config.propName,
				priority = config.priority || 0,
				overwriteProps = config.overwriteProps,
				map = {init:"_onInitTween", set:"setRatio", kill:"_kill", round:"_mod", mod:"_mod", initAll:"_onInitAllProps"},
				Plugin = _class("plugins." + propName.charAt(0).toUpperCase() + propName.substr(1) + "Plugin",
					function() {
						TweenPlugin.call(this, propName, priority);
						this._overwriteProps = overwriteProps || [];
					}, (config.global === true)),
				p = Plugin.prototype = new TweenPlugin(propName),
				prop;
			p.constructor = Plugin;
			Plugin.API = config.API;
			for (prop in map) {
				if (typeof(config[prop]) === "function") {
					p[map[prop]] = config[prop];
				}
			}
			Plugin.version = config.version;
			TweenPlugin.activate([Plugin]);
			return Plugin;
		};


		//now run through all the dependencies discovered and if any are missing, log that to the console as a warning. This is why it's best to have TweenLite load last - it can check all the dependencies for you.
		a = window._gsQueue;
		if (a) {
			for (i = 0; i < a.length; i++) {
				a[i]();
			}
			for (p in _defLookup) {
				if (!_defLookup[p].func) {
					window.console.log("GSAP encountered missing dependency: " + p);
				}
			}
		}

		_tickerActive = false; //ensures that the first official animation forces a ticker.tick() to update the time when it is instantiated

})((typeof(module) !== "undefined" && module.exports && typeof(global) !== "undefined") ? global : this || window, "TweenLite");
}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{}],4:[function(require,module,exports){
var root = require('./_root');

/** Built-in value references. */
var Symbol = root.Symbol;

module.exports = Symbol;

},{"./_root":9}],5:[function(require,module,exports){
var Symbol = require('./_Symbol'),
    getRawTag = require('./_getRawTag'),
    objectToString = require('./_objectToString');

/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? getRawTag(value)
    : objectToString(value);
}

module.exports = baseGetTag;

},{"./_Symbol":4,"./_getRawTag":7,"./_objectToString":8}],6:[function(require,module,exports){
(function (global){
/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

module.exports = freeGlobal;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{}],7:[function(require,module,exports){
var Symbol = require('./_Symbol');

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

module.exports = getRawTag;

},{"./_Symbol":4}],8:[function(require,module,exports){
/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

module.exports = objectToString;

},{}],9:[function(require,module,exports){
var freeGlobal = require('./_freeGlobal');

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

module.exports = root;

},{"./_freeGlobal":6}],10:[function(require,module,exports){
var isObject = require('./isObject'),
    now = require('./now'),
    toNumber = require('./toNumber');

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max,
    nativeMin = Math.min;

/**
 * Creates a debounced function that delays invoking `func` until after `wait`
 * milliseconds have elapsed since the last time the debounced function was
 * invoked. The debounced function comes with a `cancel` method to cancel
 * delayed `func` invocations and a `flush` method to immediately invoke them.
 * Provide `options` to indicate whether `func` should be invoked on the
 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
 * with the last arguments provided to the debounced function. Subsequent
 * calls to the debounced function return the result of the last `func`
 * invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the debounced function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.debounce` and `_.throttle`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to debounce.
 * @param {number} [wait=0] The number of milliseconds to delay.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=false]
 *  Specify invoking on the leading edge of the timeout.
 * @param {number} [options.maxWait]
 *  The maximum time `func` is allowed to be delayed before it's invoked.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new debounced function.
 * @example
 *
 * // Avoid costly calculations while the window size is in flux.
 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
 *
 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
 * jQuery(element).on('click', _.debounce(sendMail, 300, {
 *   'leading': true,
 *   'trailing': false
 * }));
 *
 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
 * var source = new EventSource('/stream');
 * jQuery(source).on('message', debounced);
 *
 * // Cancel the trailing debounced invocation.
 * jQuery(window).on('popstate', debounced.cancel);
 */
function debounce(func, wait, options) {
  var lastArgs,
      lastThis,
      maxWait,
      result,
      timerId,
      lastCallTime,
      lastInvokeTime = 0,
      leading = false,
      maxing = false,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  wait = toNumber(wait) || 0;
  if (isObject(options)) {
    leading = !!options.leading;
    maxing = 'maxWait' in options;
    maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }

  function invokeFunc(time) {
    var args = lastArgs,
        thisArg = lastThis;

    lastArgs = lastThis = undefined;
    lastInvokeTime = time;
    result = func.apply(thisArg, args);
    return result;
  }

  function leadingEdge(time) {
    // Reset any `maxWait` timer.
    lastInvokeTime = time;
    // Start the timer for the trailing edge.
    timerId = setTimeout(timerExpired, wait);
    // Invoke the leading edge.
    return leading ? invokeFunc(time) : result;
  }

  function remainingWait(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime,
        timeWaiting = wait - timeSinceLastCall;

    return maxing
      ? nativeMin(timeWaiting, maxWait - timeSinceLastInvoke)
      : timeWaiting;
  }

  function shouldInvoke(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime;

    // Either this is the first call, activity has stopped and we're at the
    // trailing edge, the system time has gone backwards and we're treating
    // it as the trailing edge, or we've hit the `maxWait` limit.
    return (lastCallTime === undefined || (timeSinceLastCall >= wait) ||
      (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait));
  }

  function timerExpired() {
    var time = now();
    if (shouldInvoke(time)) {
      return trailingEdge(time);
    }
    // Restart the timer.
    timerId = setTimeout(timerExpired, remainingWait(time));
  }

  function trailingEdge(time) {
    timerId = undefined;

    // Only invoke if we have `lastArgs` which means `func` has been
    // debounced at least once.
    if (trailing && lastArgs) {
      return invokeFunc(time);
    }
    lastArgs = lastThis = undefined;
    return result;
  }

  function cancel() {
    if (timerId !== undefined) {
      clearTimeout(timerId);
    }
    lastInvokeTime = 0;
    lastArgs = lastCallTime = lastThis = timerId = undefined;
  }

  function flush() {
    return timerId === undefined ? result : trailingEdge(now());
  }

  function debounced() {
    var time = now(),
        isInvoking = shouldInvoke(time);

    lastArgs = arguments;
    lastThis = this;
    lastCallTime = time;

    if (isInvoking) {
      if (timerId === undefined) {
        return leadingEdge(lastCallTime);
      }
      if (maxing) {
        // Handle invocations in a tight loop.
        timerId = setTimeout(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    }
    if (timerId === undefined) {
      timerId = setTimeout(timerExpired, wait);
    }
    return result;
  }
  debounced.cancel = cancel;
  debounced.flush = flush;
  return debounced;
}

module.exports = debounce;

},{"./isObject":11,"./now":14,"./toNumber":15}],11:[function(require,module,exports){
/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

module.exports = isObject;

},{}],12:[function(require,module,exports){
/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

module.exports = isObjectLike;

},{}],13:[function(require,module,exports){
var baseGetTag = require('./_baseGetTag'),
    isObjectLike = require('./isObjectLike');

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && baseGetTag(value) == symbolTag);
}

module.exports = isSymbol;

},{"./_baseGetTag":5,"./isObjectLike":12}],14:[function(require,module,exports){
var root = require('./_root');

/**
 * Gets the timestamp of the number of milliseconds that have elapsed since
 * the Unix epoch (1 January 1970 00:00:00 UTC).
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Date
 * @returns {number} Returns the timestamp.
 * @example
 *
 * _.defer(function(stamp) {
 *   console.log(_.now() - stamp);
 * }, _.now());
 * // => Logs the number of milliseconds it took for the deferred invocation.
 */
var now = function() {
  return root.Date.now();
};

module.exports = now;

},{"./_root":9}],15:[function(require,module,exports){
var isObject = require('./isObject'),
    isSymbol = require('./isSymbol');

/** Used as references for various `Number` constants. */
var NAN = 0 / 0;

/** Used to match leading and trailing whitespace. */
var reTrim = /^\s+|\s+$/g;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject(other) ? (other + '') : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = value.replace(reTrim, '');
  var isBinary = reIsBinary.test(value);
  return (isBinary || reIsOctal.test(value))
    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
    : (reIsBadHex.test(value) ? NAN : +value);
}

module.exports = toNumber;

},{"./isObject":11,"./isSymbol":13}],16:[function(require,module,exports){
'use strict';

var FontFaceObserver = require('fontfaceobserver');

function initFontObservers() {
  var Ubuntu = new FontFaceObserver('Ubuntu');
  var UbuntuBold = new FontFaceObserver('Ubuntu', {
    weight: 500
  });
  var UbuntuItalic = new FontFaceObserver('Ubuntu', {
    style: 'italic'
  });
  var UbuntuMono = new FontFaceObserver('Ubuntu Mono');

  var threshold = 1400;
  Promise.all([Ubuntu.load(null, threshold), UbuntuBold.load(null, threshold), UbuntuItalic.load(null, threshold), UbuntuMono.load(null, threshold)]).then(function () {
    document.body.classList.add('fonts-loaded');
  }).catch(function () {
    document.body.classList.add('fonts-failed');
  });
}

module.exports = initFontObservers;

},{"fontfaceobserver":1}],17:[function(require,module,exports){
'use strict';

(function (i, s, o, g, r, a, m) {
  i['GoogleAnalyticsObject'] = r;i[r] = i[r] || function () {
    (i[r].q = i[r].q || []).push(arguments);
  }, i[r].l = 1 * new Date();a = s.createElement(o), m = s.getElementsByTagName(o)[0];a.async = 1;a.src = g;m.parentNode.insertBefore(a, m);
})(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga');

ga('create', 'UA-96379415-2', 'auto');
ga('send', 'pageview');

},{}],18:[function(require,module,exports){
'use strict';

require('./ga');
var initFontObservers = require('./fontObservers');
var initModalSystem = require('./modal');
var initSmoothScroll = require('./smoothScroll');

initFontObservers();
initModalSystem();
initSmoothScroll();

// Birthday click easter egg
var inlineCodeBirthday = document.getElementById('inline-code-birthday');
inlineCodeBirthday.addEventListener('click', handleBirthdayClick);

function handleBirthdayClick() {
  event.preventDefault();
  var todayYear = new Date().getFullYear();
  var babyBoiBirthday = new Date(2016, 9, 20).getFullYear();
  event.target.textContent = todayYear - babyBoiBirthday + ' years';
  event.target.classList.remove('inline-code--interactive');
  inlineCodeBirthday.removeEventListener('click', handleBirthdayClick);
}

},{"./fontObservers":16,"./ga":17,"./modal":19,"./smoothScroll":20}],19:[function(require,module,exports){
'use strict';

function initModal() {
  var modalOverlay = document.querySelector('.modal');
  var modalWrapper = document.querySelector('.modal__wrapper');
  var modalClose = document.querySelector('.modal__close');
  var modalContent = document.querySelector('.modal__content');
  var modalLoader = document.querySelector('.modal__loader');

  var mainNav = document.querySelector('.main-nav');
  var scrollTop = document.querySelector('.scroll-top');

  var infoButtons = document.querySelectorAll('.tag--info');

  var projectsFolder = './projects/';
  var errorMessage = function errorMessage(err) {
    return '\n    <div class="container fade-in">\n      <h1>Whoops!</h1>\n      <h2>Error ' + (err.status || '') + ': ' + (err.statusText || 'Please check your internet connection') + '</h2>\n      <p>\n        It happens! Please try again later. I\'d be thankful if you can let me know this happened.\n      </p>\n    </div>\n  ';
  };

  function modalOn(e) {
    e.preventDefault();
    modalLoader.classList.remove('hidden');
    document.body.classList.add('modal-on');
    mainNav.classList.add('hidden');
    scrollTop.classList.add('hidden');
    modalWrapper.scrollTop = 0;
  }

  function modalOff(e) {
    e.preventDefault();
    e.stopPropagation();
    document.body.classList.remove('modal-on');
    mainNav.classList.remove('hidden');
    scrollTop.classList.remove('hidden');
    modalContent.innerHTML = '';
  }

  function fetchProject(e) {
    var projectName = e.currentTarget.dataset.project;
    var project = fetch('' + projectsFolder + projectName + '.html');

    modalOn(e);

    project.then(function (response) {
      return response.ok ? response : Promise.reject(response);
    }).then(function (data) {
      return data.text();
    }).then(function (html) {
      modalContent.innerHTML = html;
    }).then(prepareModalMedia).catch(function (err) {
      modalContent.innerHTML = errorMessage(err);console.error(err);
    }).then(function () {
      modalLoader.classList.add('hidden');
    });
  }

  function prepareModalMedia() {
    var media = modalContent.querySelector('.modal__media');
    var mediaLink = modalContent.querySelector('.modal__media-link');
    if (!media) return;

    var loader = document.createElement('div');
    loader.className = 'modal__loader modal__loader--image fade-in';
    loader.innerHTML = '\n      <span class="icon icon-image" aria-hidden="true"></span>\n    <div class="sr-only">Loading content...</div>';

    mediaLink.parentNode.insertBefore(loader, mediaLink);
    var mediaEvent = media.nodeName === 'VIDEO' ? 'oncanplay' : 'onload';
    media[mediaEvent] = function () {
      mediaLink.classList.add('fade-in-right@landscape');
      mediaLink.classList.remove('hidden');
      loader.classList.add('hidden');
    };
  }

  infoButtons.forEach(function (btn) {
    return btn.addEventListener('click', fetchProject);
  });
  modalClose.addEventListener('click', modalOff, false);

  modalOverlay.addEventListener('click', function (e) {
    e.stopPropagation();
    if (e.target === modalOverlay) {
      modalOff(e);
    }
  });

  window.addEventListener('keydown', function (e) {
    if (e.keyCode === 27) {
      modalOff(e);
    }
  });
}

module.exports = initModal;

},{}],20:[function(require,module,exports){
'use strict';

require('gsap/ScrollToPlugin');
var TweenLite = require('gsap/TweenLite');
var debounce = require('lodash/debounce');

// Main nav
var mainNav = document.getElementById('main-nav');
var mainNavOffset = mainNav.offsetTop;

function initSmoothScroll() {
  var DURATION = 1.1;
  var links = document.querySelectorAll('a[href^="#"]');

  links.forEach(function (link) {
    link.addEventListener('click', function (e) {
      e.preventDefault();

      var hash = link.getAttribute('href');
      if (hash === '#') {
        return false;
      }

      var target = document.querySelector(hash);
      if (!target) {
        return false;
      }

      var mainNavHeight = mainNav.clientHeight;
      var mainNavOffset = mainNav.offsetTop;
      var targetOffset = target.offsetTop > mainNavOffset ? target.offsetTop - mainNavHeight : target.offsetTop;

      TweenLite.to(window, DURATION, {
        scrollTo: targetOffset,
        ease: 'Power2.easeInOut'
      });

      return true;
    });
  });
}

// Calculate space for footer
function spaceForFooter() {
  var footerHeight = document.getElementById('footer').clientHeight;
  document.body.style.marginBottom = footerHeight + 'px';
}
window.addEventListener('load', spaceForFooter);

// Attaching main nav
function scrollPastNav() {
  var isPastNav = window.scrollY >= mainNavOffset;
  var bodyHasClass = document.body.classList.contains('scroll-past-nav');
  if (isPastNav && !bodyHasClass) {
    document.body.classList.add('scroll-past-nav');
    document.body.style.paddingTop = mainNav.offsetHeight + 'px';
  } else if (!isPastNav && bodyHasClass) {
    document.body.classList.remove('scroll-past-nav');
    document.body.style.paddingTop = 0;
  }
}
scrollPastNav();

// Scroll handler
document.addEventListener('scroll', scrollPastNav);

// Resize handler
var resizeHandler = debounce(function () {
  document.body.classList.remove('scroll-past-nav');
  document.body.style.paddingTop = 0;
  mainNavOffset = mainNav.offsetTop;
  scrollPastNav();
  spaceForFooter();
}, 100);
window.addEventListener('resize', resizeHandler);

module.exports = initSmoothScroll;

},{"gsap/ScrollToPlugin":2,"gsap/TweenLite":3,"lodash/debounce":10}]},{},[18])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJub2RlX21vZHVsZXMvZm9udGZhY2VvYnNlcnZlci9mb250ZmFjZW9ic2VydmVyLnN0YW5kYWxvbmUuanMiLCJub2RlX21vZHVsZXMvZ3NhcC9TY3JvbGxUb1BsdWdpbi5qcyIsIm5vZGVfbW9kdWxlcy9nc2FwL1R3ZWVuTGl0ZS5qcyIsIm5vZGVfbW9kdWxlcy9sb2Rhc2gvX1N5bWJvbC5qcyIsIm5vZGVfbW9kdWxlcy9sb2Rhc2gvX2Jhc2VHZXRUYWcuanMiLCJub2RlX21vZHVsZXMvbG9kYXNoL19mcmVlR2xvYmFsLmpzIiwibm9kZV9tb2R1bGVzL2xvZGFzaC9fZ2V0UmF3VGFnLmpzIiwibm9kZV9tb2R1bGVzL2xvZGFzaC9fb2JqZWN0VG9TdHJpbmcuanMiLCJub2RlX21vZHVsZXMvbG9kYXNoL19yb290LmpzIiwibm9kZV9tb2R1bGVzL2xvZGFzaC9kZWJvdW5jZS5qcyIsIm5vZGVfbW9kdWxlcy9sb2Rhc2gvaXNPYmplY3QuanMiLCJub2RlX21vZHVsZXMvbG9kYXNoL2lzT2JqZWN0TGlrZS5qcyIsIm5vZGVfbW9kdWxlcy9sb2Rhc2gvaXNTeW1ib2wuanMiLCJub2RlX21vZHVsZXMvbG9kYXNoL25vdy5qcyIsIm5vZGVfbW9kdWxlcy9sb2Rhc2gvdG9OdW1iZXIuanMiLCJzcmMvc2NyaXB0cy9mb250T2JzZXJ2ZXJzLmpzIiwic3JjL3NjcmlwdHMvZ2EuanMiLCJzcmMvc2NyaXB0cy9tYWluLmpzIiwic3JjL3NjcmlwdHMvbW9kYWwuanMiLCJzcmMvc2NyaXB0cy9zbW9vdGhTY3JvbGwuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQ1JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUNsTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUN4NURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQzVCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FDSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM5Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN0QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDVEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM5TEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMvQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzdCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDN0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN2QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUNsRUEsSUFBTSxtQkFBbUIsUUFBUSxrQkFBUixDQUF6Qjs7QUFFQSxTQUFTLGlCQUFULEdBQTZCO0FBQzNCLE1BQU0sU0FBUyxJQUFJLGdCQUFKLENBQXFCLFFBQXJCLENBQWY7QUFDQSxNQUFNLGFBQWEsSUFBSSxnQkFBSixDQUFxQixRQUFyQixFQUErQjtBQUNoRCxZQUFRO0FBRHdDLEdBQS9CLENBQW5CO0FBR0EsTUFBTSxlQUFlLElBQUksZ0JBQUosQ0FBcUIsUUFBckIsRUFBK0I7QUFDbEQsV0FBTztBQUQyQyxHQUEvQixDQUFyQjtBQUdBLE1BQU0sYUFBYSxJQUFJLGdCQUFKLENBQXFCLGFBQXJCLENBQW5COztBQUVBLE1BQU0sWUFBWSxJQUFsQjtBQUNBLFVBQVEsR0FBUixDQUFZLENBQ1YsT0FBTyxJQUFQLENBQVksSUFBWixFQUFrQixTQUFsQixDQURVLEVBRVYsV0FBVyxJQUFYLENBQWdCLElBQWhCLEVBQXNCLFNBQXRCLENBRlUsRUFHVixhQUFhLElBQWIsQ0FBa0IsSUFBbEIsRUFBd0IsU0FBeEIsQ0FIVSxFQUlWLFdBQVcsSUFBWCxDQUFnQixJQUFoQixFQUFzQixTQUF0QixDQUpVLENBQVosRUFLRyxJQUxILENBS1EsWUFBTTtBQUFFLGFBQVMsSUFBVCxDQUFjLFNBQWQsQ0FBd0IsR0FBeEIsQ0FBNEIsY0FBNUI7QUFBOEMsR0FMOUQsRUFNRyxLQU5ILENBTVMsWUFBTTtBQUFFLGFBQVMsSUFBVCxDQUFjLFNBQWQsQ0FBd0IsR0FBeEIsQ0FBNEIsY0FBNUI7QUFBOEMsR0FOL0Q7QUFPRDs7QUFFRCxPQUFPLE9BQVAsR0FBaUIsaUJBQWpCOzs7OztBQ3RCQSxDQUFDLFVBQVMsQ0FBVCxFQUFXLENBQVgsRUFBYSxDQUFiLEVBQWUsQ0FBZixFQUFpQixDQUFqQixFQUFtQixDQUFuQixFQUFxQixDQUFyQixFQUF1QjtBQUFDLElBQUUsdUJBQUYsSUFBMkIsQ0FBM0IsQ0FBNkIsRUFBRSxDQUFGLElBQUssRUFBRSxDQUFGLEtBQU0sWUFBVTtBQUMzRSxLQUFDLEVBQUUsQ0FBRixFQUFLLENBQUwsR0FBTyxFQUFFLENBQUYsRUFBSyxDQUFMLElBQVEsRUFBaEIsRUFBb0IsSUFBcEIsQ0FBeUIsU0FBekI7QUFBb0MsR0FEa0IsRUFDakIsRUFBRSxDQUFGLEVBQUssQ0FBTCxHQUFPLElBQUUsSUFBSSxJQUFKLEVBRFEsQ0FDRyxJQUFFLEVBQUUsYUFBRixDQUFnQixDQUFoQixDQUFGLEVBQ3pELElBQUUsRUFBRSxvQkFBRixDQUF1QixDQUF2QixFQUEwQixDQUExQixDQUR1RCxDQUMxQixFQUFFLEtBQUYsR0FBUSxDQUFSLENBQVUsRUFBRSxHQUFGLEdBQU0sQ0FBTixDQUFRLEVBQUUsVUFBRixDQUFhLFlBQWIsQ0FBMEIsQ0FBMUIsRUFBNEIsQ0FBNUI7QUFDaEQsQ0FIRCxFQUdHLE1BSEgsRUFHVSxRQUhWLEVBR21CLFFBSG5CLEVBRzRCLCtDQUg1QixFQUc0RSxJQUg1RTs7QUFLQSxHQUFHLFFBQUgsRUFBYSxlQUFiLEVBQThCLE1BQTlCO0FBQ0EsR0FBRyxNQUFILEVBQVcsVUFBWDs7Ozs7QUNOQSxRQUFRLE1BQVI7QUFDQSxJQUFNLG9CQUFvQixRQUFRLGlCQUFSLENBQTFCO0FBQ0EsSUFBTSxrQkFBa0IsUUFBUSxTQUFSLENBQXhCO0FBQ0EsSUFBTSxtQkFBbUIsUUFBUSxnQkFBUixDQUF6Qjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxJQUFNLHFCQUFxQixTQUFTLGNBQVQsQ0FBd0Isc0JBQXhCLENBQTNCO0FBQ0EsbUJBQW1CLGdCQUFuQixDQUFvQyxPQUFwQyxFQUE2QyxtQkFBN0M7O0FBRUEsU0FBUyxtQkFBVCxHQUErQjtBQUM3QixRQUFNLGNBQU47QUFDQSxNQUFNLFlBQVksSUFBSSxJQUFKLEdBQVcsV0FBWCxFQUFsQjtBQUNBLE1BQU0sa0JBQWtCLElBQUksSUFBSixDQUFTLElBQVQsRUFBZSxDQUFmLEVBQWtCLEVBQWxCLEVBQXNCLFdBQXRCLEVBQXhCO0FBQ0EsUUFBTSxNQUFOLENBQWEsV0FBYixHQUE4QixZQUFZLGVBQTFDO0FBQ0EsUUFBTSxNQUFOLENBQWEsU0FBYixDQUF1QixNQUF2QixDQUE4QiwwQkFBOUI7QUFDQSxxQkFBbUIsbUJBQW5CLENBQXVDLE9BQXZDLEVBQWdELG1CQUFoRDtBQUNEOzs7OztBQ3BCRCxTQUFTLFNBQVQsR0FBcUI7QUFDbkIsTUFBTSxlQUFlLFNBQVMsYUFBVCxDQUF1QixRQUF2QixDQUFyQjtBQUNBLE1BQU0sZUFBZSxTQUFTLGFBQVQsQ0FBdUIsaUJBQXZCLENBQXJCO0FBQ0EsTUFBTSxhQUFhLFNBQVMsYUFBVCxDQUF1QixlQUF2QixDQUFuQjtBQUNBLE1BQU0sZUFBZSxTQUFTLGFBQVQsQ0FBdUIsaUJBQXZCLENBQXJCO0FBQ0EsTUFBTSxjQUFjLFNBQVMsYUFBVCxDQUF1QixnQkFBdkIsQ0FBcEI7O0FBRUEsTUFBTSxVQUFVLFNBQVMsYUFBVCxDQUF1QixXQUF2QixDQUFoQjtBQUNBLE1BQU0sWUFBWSxTQUFTLGFBQVQsQ0FBdUIsYUFBdkIsQ0FBbEI7O0FBRUEsTUFBTSxjQUFjLFNBQVMsZ0JBQVQsQ0FBMEIsWUFBMUIsQ0FBcEI7O0FBRUEsTUFBTSxpQkFBaUIsYUFBdkI7QUFDQSxNQUFNLGVBQWUsU0FBZixZQUFlLENBQUMsR0FBRDtBQUFBLGdHQUdMLElBQUksTUFBSixJQUFjLEVBSFQsWUFHZ0IsSUFBSSxVQUFKLElBQWtCLHVDQUhsQztBQUFBLEdBQXJCOztBQVVBLFdBQVMsT0FBVCxDQUFpQixDQUFqQixFQUFvQjtBQUNsQixNQUFFLGNBQUY7QUFDQSxnQkFBWSxTQUFaLENBQXNCLE1BQXRCLENBQTZCLFFBQTdCO0FBQ0EsYUFBUyxJQUFULENBQWMsU0FBZCxDQUF3QixHQUF4QixDQUE0QixVQUE1QjtBQUNBLFlBQVEsU0FBUixDQUFrQixHQUFsQixDQUFzQixRQUF0QjtBQUNBLGNBQVUsU0FBVixDQUFvQixHQUFwQixDQUF3QixRQUF4QjtBQUNBLGlCQUFhLFNBQWIsR0FBeUIsQ0FBekI7QUFDRDs7QUFFRCxXQUFTLFFBQVQsQ0FBa0IsQ0FBbEIsRUFBcUI7QUFDbkIsTUFBRSxjQUFGO0FBQ0EsTUFBRSxlQUFGO0FBQ0EsYUFBUyxJQUFULENBQWMsU0FBZCxDQUF3QixNQUF4QixDQUErQixVQUEvQjtBQUNBLFlBQVEsU0FBUixDQUFrQixNQUFsQixDQUF5QixRQUF6QjtBQUNBLGNBQVUsU0FBVixDQUFvQixNQUFwQixDQUEyQixRQUEzQjtBQUNBLGlCQUFhLFNBQWIsR0FBeUIsRUFBekI7QUFDRDs7QUFFRCxXQUFTLFlBQVQsQ0FBc0IsQ0FBdEIsRUFBeUI7QUFDdkIsUUFBTSxjQUFjLEVBQUUsYUFBRixDQUFnQixPQUFoQixDQUF3QixPQUE1QztBQUNBLFFBQU0sVUFBVSxXQUFTLGNBQVQsR0FBMEIsV0FBMUIsV0FBaEI7O0FBRUEsWUFBUSxDQUFSOztBQUVBLFlBQVEsSUFBUixDQUFhO0FBQUEsYUFBWSxTQUFTLEVBQVQsR0FBYyxRQUFkLEdBQXlCLFFBQVEsTUFBUixDQUFlLFFBQWYsQ0FBckM7QUFBQSxLQUFiLEVBQ0csSUFESCxDQUNRO0FBQUEsYUFBUSxLQUFLLElBQUwsRUFBUjtBQUFBLEtBRFIsRUFFRyxJQUZILENBRVEsZ0JBQVE7QUFBRSxtQkFBYSxTQUFiLEdBQXlCLElBQXpCO0FBQWdDLEtBRmxELEVBR0csSUFISCxDQUdRLGlCQUhSLEVBSUcsS0FKSCxDQUlTLGVBQU87QUFBRSxtQkFBYSxTQUFiLEdBQXlCLGFBQWEsR0FBYixDQUF6QixDQUE0QyxRQUFRLEtBQVIsQ0FBYyxHQUFkO0FBQXFCLEtBSm5GLEVBS0csSUFMSCxDQUtRLFlBQU07QUFBRSxrQkFBWSxTQUFaLENBQXNCLEdBQXRCLENBQTBCLFFBQTFCO0FBQXFDLEtBTHJEO0FBTUQ7O0FBRUQsV0FBUyxpQkFBVCxHQUE2QjtBQUMzQixRQUFNLFFBQVEsYUFBYSxhQUFiLENBQTJCLGVBQTNCLENBQWQ7QUFDQSxRQUFNLFlBQVksYUFBYSxhQUFiLENBQTJCLG9CQUEzQixDQUFsQjtBQUNBLFFBQUksQ0FBQyxLQUFMLEVBQVk7O0FBRVosUUFBTSxTQUFTLFNBQVMsYUFBVCxDQUF1QixLQUF2QixDQUFmO0FBQ0EsV0FBTyxTQUFQLEdBQW1CLDRDQUFuQjtBQUNBLFdBQU8sU0FBUDs7QUFJQSxjQUFVLFVBQVYsQ0FBcUIsWUFBckIsQ0FBa0MsTUFBbEMsRUFBMEMsU0FBMUM7QUFDQSxRQUFJLGFBQWEsTUFBTSxRQUFOLEtBQW1CLE9BQW5CLEdBQTZCLFdBQTdCLEdBQTJDLFFBQTVEO0FBQ0EsVUFBTSxVQUFOLElBQW9CLFlBQU07QUFDeEIsZ0JBQVUsU0FBVixDQUFvQixHQUFwQixDQUF3Qix5QkFBeEI7QUFDQSxnQkFBVSxTQUFWLENBQW9CLE1BQXBCLENBQTJCLFFBQTNCO0FBQ0EsYUFBTyxTQUFQLENBQWlCLEdBQWpCLENBQXFCLFFBQXJCO0FBQ0QsS0FKRDtBQUtEOztBQUVELGNBQVksT0FBWixDQUFvQjtBQUFBLFdBQU8sSUFBSSxnQkFBSixDQUFxQixPQUFyQixFQUE4QixZQUE5QixDQUFQO0FBQUEsR0FBcEI7QUFDQSxhQUFXLGdCQUFYLENBQTRCLE9BQTVCLEVBQXFDLFFBQXJDLEVBQStDLEtBQS9DOztBQUVBLGVBQWEsZ0JBQWIsQ0FBOEIsT0FBOUIsRUFBdUMsVUFBQyxDQUFELEVBQU87QUFDNUMsTUFBRSxlQUFGO0FBQ0EsUUFBSSxFQUFFLE1BQUYsS0FBYSxZQUFqQixFQUErQjtBQUFFLGVBQVMsQ0FBVDtBQUFjO0FBQ2hELEdBSEQ7O0FBS0EsU0FBTyxnQkFBUCxDQUF3QixTQUF4QixFQUFtQyxVQUFDLENBQUQsRUFBTztBQUN4QyxRQUFJLEVBQUUsT0FBRixLQUFjLEVBQWxCLEVBQXNCO0FBQUUsZUFBUyxDQUFUO0FBQWM7QUFDdkMsR0FGRDtBQUdEOztBQUVELE9BQU8sT0FBUCxHQUFpQixTQUFqQjs7Ozs7QUN4RkEsUUFBUSxxQkFBUjtBQUNBLElBQU0sWUFBWSxRQUFRLGdCQUFSLENBQWxCO0FBQ0EsSUFBTSxXQUFXLFFBQVEsaUJBQVIsQ0FBakI7O0FBRUE7QUFDQSxJQUFNLFVBQVUsU0FBUyxjQUFULENBQXdCLFVBQXhCLENBQWhCO0FBQ0EsSUFBSSxnQkFBZ0IsUUFBUSxTQUE1Qjs7QUFFQSxTQUFTLGdCQUFULEdBQTRCO0FBQzFCLE1BQU0sV0FBVyxHQUFqQjtBQUNBLE1BQU0sUUFBUSxTQUFTLGdCQUFULENBQTBCLGNBQTFCLENBQWQ7O0FBRUEsUUFBTSxPQUFOLENBQWMsVUFBQyxJQUFELEVBQVU7QUFDdEIsU0FBSyxnQkFBTCxDQUFzQixPQUF0QixFQUErQixVQUFDLENBQUQsRUFBTztBQUNwQyxRQUFFLGNBQUY7O0FBRUEsVUFBTSxPQUFPLEtBQUssWUFBTCxDQUFrQixNQUFsQixDQUFiO0FBQ0EsVUFBSSxTQUFTLEdBQWIsRUFBa0I7QUFDaEIsZUFBTyxLQUFQO0FBQ0Q7O0FBRUQsVUFBTSxTQUFTLFNBQVMsYUFBVCxDQUF1QixJQUF2QixDQUFmO0FBQ0EsVUFBSSxDQUFDLE1BQUwsRUFBYTtBQUNYLGVBQU8sS0FBUDtBQUNEOztBQUVELFVBQU0sZ0JBQWdCLFFBQVEsWUFBOUI7QUFDQSxVQUFNLGdCQUFnQixRQUFRLFNBQTlCO0FBQ0EsVUFBTSxlQUFlLE9BQU8sU0FBUCxHQUFtQixhQUFuQixHQUNqQixPQUFPLFNBQVAsR0FBbUIsYUFERixHQUVqQixPQUFPLFNBRlg7O0FBSUEsZ0JBQVUsRUFBVixDQUFhLE1BQWIsRUFBcUIsUUFBckIsRUFBK0I7QUFDN0Isa0JBQVUsWUFEbUI7QUFFN0IsY0FBTTtBQUZ1QixPQUEvQjs7QUFLQSxhQUFPLElBQVA7QUFDRCxLQXpCRDtBQTBCRCxHQTNCRDtBQTRCRDs7QUFFRDtBQUNBLFNBQVMsY0FBVCxHQUEwQjtBQUN4QixNQUFNLGVBQWUsU0FBUyxjQUFULENBQXdCLFFBQXhCLEVBQWtDLFlBQXZEO0FBQ0EsV0FBUyxJQUFULENBQWMsS0FBZCxDQUFvQixZQUFwQixHQUFzQyxZQUF0QztBQUNEO0FBQ0QsT0FBTyxnQkFBUCxDQUF3QixNQUF4QixFQUFnQyxjQUFoQzs7QUFFQTtBQUNBLFNBQVMsYUFBVCxHQUF5QjtBQUN2QixNQUFNLFlBQVksT0FBTyxPQUFQLElBQWtCLGFBQXBDO0FBQ0EsTUFBTSxlQUFlLFNBQVMsSUFBVCxDQUFjLFNBQWQsQ0FBd0IsUUFBeEIsQ0FBaUMsaUJBQWpDLENBQXJCO0FBQ0EsTUFBSSxhQUFhLENBQUMsWUFBbEIsRUFBZ0M7QUFDOUIsYUFBUyxJQUFULENBQWMsU0FBZCxDQUF3QixHQUF4QixDQUE0QixpQkFBNUI7QUFDQSxhQUFTLElBQVQsQ0FBYyxLQUFkLENBQW9CLFVBQXBCLEdBQW9DLFFBQVEsWUFBNUM7QUFDRCxHQUhELE1BR08sSUFBSSxDQUFDLFNBQUQsSUFBYyxZQUFsQixFQUFnQztBQUNyQyxhQUFTLElBQVQsQ0FBYyxTQUFkLENBQXdCLE1BQXhCLENBQStCLGlCQUEvQjtBQUNBLGFBQVMsSUFBVCxDQUFjLEtBQWQsQ0FBb0IsVUFBcEIsR0FBaUMsQ0FBakM7QUFDRDtBQUNGO0FBQ0Q7O0FBRUE7QUFDQSxTQUFTLGdCQUFULENBQTBCLFFBQTFCLEVBQW9DLGFBQXBDOztBQUVBO0FBQ0EsSUFBTSxnQkFBZ0IsU0FBUyxZQUFNO0FBQ25DLFdBQVMsSUFBVCxDQUFjLFNBQWQsQ0FBd0IsTUFBeEIsQ0FBK0IsaUJBQS9CO0FBQ0EsV0FBUyxJQUFULENBQWMsS0FBZCxDQUFvQixVQUFwQixHQUFpQyxDQUFqQztBQUNBLGtCQUFnQixRQUFRLFNBQXhCO0FBQ0E7QUFDQTtBQUNELENBTnFCLEVBTW5CLEdBTm1CLENBQXRCO0FBT0EsT0FBTyxnQkFBUCxDQUF3QixRQUF4QixFQUFrQyxhQUFsQzs7QUFFQSxPQUFPLE9BQVAsR0FBaUIsZ0JBQWpCIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiLyogRm9udCBGYWNlIE9ic2VydmVyIHYyLjAuMTMgLSDCqSBCcmFtIFN0ZWluLiBMaWNlbnNlOiBCU0QtMy1DbGF1c2UgKi8oZnVuY3Rpb24oKXtmdW5jdGlvbiBsKGEsYil7ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcj9hLmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIixiLCExKTphLmF0dGFjaEV2ZW50KFwic2Nyb2xsXCIsYil9ZnVuY3Rpb24gbShhKXtkb2N1bWVudC5ib2R5P2EoKTpkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyP2RvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsZnVuY3Rpb24gYygpe2RvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsYyk7YSgpfSk6ZG9jdW1lbnQuYXR0YWNoRXZlbnQoXCJvbnJlYWR5c3RhdGVjaGFuZ2VcIixmdW5jdGlvbiBrKCl7aWYoXCJpbnRlcmFjdGl2ZVwiPT1kb2N1bWVudC5yZWFkeVN0YXRlfHxcImNvbXBsZXRlXCI9PWRvY3VtZW50LnJlYWR5U3RhdGUpZG9jdW1lbnQuZGV0YWNoRXZlbnQoXCJvbnJlYWR5c3RhdGVjaGFuZ2VcIixrKSxhKCl9KX07ZnVuY3Rpb24gcihhKXt0aGlzLmE9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTt0aGlzLmEuc2V0QXR0cmlidXRlKFwiYXJpYS1oaWRkZW5cIixcInRydWVcIik7dGhpcy5hLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGEpKTt0aGlzLmI9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7dGhpcy5jPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO3RoaXMuaD1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTt0aGlzLmY9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7dGhpcy5nPS0xO3RoaXMuYi5zdHlsZS5jc3NUZXh0PVwibWF4LXdpZHRoOm5vbmU7ZGlzcGxheTppbmxpbmUtYmxvY2s7cG9zaXRpb246YWJzb2x1dGU7aGVpZ2h0OjEwMCU7d2lkdGg6MTAwJTtvdmVyZmxvdzpzY3JvbGw7Zm9udC1zaXplOjE2cHg7XCI7dGhpcy5jLnN0eWxlLmNzc1RleHQ9XCJtYXgtd2lkdGg6bm9uZTtkaXNwbGF5OmlubGluZS1ibG9jaztwb3NpdGlvbjphYnNvbHV0ZTtoZWlnaHQ6MTAwJTt3aWR0aDoxMDAlO292ZXJmbG93OnNjcm9sbDtmb250LXNpemU6MTZweDtcIjtcbnRoaXMuZi5zdHlsZS5jc3NUZXh0PVwibWF4LXdpZHRoOm5vbmU7ZGlzcGxheTppbmxpbmUtYmxvY2s7cG9zaXRpb246YWJzb2x1dGU7aGVpZ2h0OjEwMCU7d2lkdGg6MTAwJTtvdmVyZmxvdzpzY3JvbGw7Zm9udC1zaXplOjE2cHg7XCI7dGhpcy5oLnN0eWxlLmNzc1RleHQ9XCJkaXNwbGF5OmlubGluZS1ibG9jazt3aWR0aDoyMDAlO2hlaWdodDoyMDAlO2ZvbnQtc2l6ZToxNnB4O21heC13aWR0aDpub25lO1wiO3RoaXMuYi5hcHBlbmRDaGlsZCh0aGlzLmgpO3RoaXMuYy5hcHBlbmRDaGlsZCh0aGlzLmYpO3RoaXMuYS5hcHBlbmRDaGlsZCh0aGlzLmIpO3RoaXMuYS5hcHBlbmRDaGlsZCh0aGlzLmMpfVxuZnVuY3Rpb24gdChhLGIpe2EuYS5zdHlsZS5jc3NUZXh0PVwibWF4LXdpZHRoOm5vbmU7bWluLXdpZHRoOjIwcHg7bWluLWhlaWdodDoyMHB4O2Rpc3BsYXk6aW5saW5lLWJsb2NrO292ZXJmbG93OmhpZGRlbjtwb3NpdGlvbjphYnNvbHV0ZTt3aWR0aDphdXRvO21hcmdpbjowO3BhZGRpbmc6MDt0b3A6LTk5OXB4O3doaXRlLXNwYWNlOm5vd3JhcDtmb250LXN5bnRoZXNpczpub25lO2ZvbnQ6XCIrYitcIjtcIn1mdW5jdGlvbiB5KGEpe3ZhciBiPWEuYS5vZmZzZXRXaWR0aCxjPWIrMTAwO2EuZi5zdHlsZS53aWR0aD1jK1wicHhcIjthLmMuc2Nyb2xsTGVmdD1jO2EuYi5zY3JvbGxMZWZ0PWEuYi5zY3JvbGxXaWR0aCsxMDA7cmV0dXJuIGEuZyE9PWI/KGEuZz1iLCEwKTohMX1mdW5jdGlvbiB6KGEsYil7ZnVuY3Rpb24gYygpe3ZhciBhPWs7eShhKSYmYS5hLnBhcmVudE5vZGUmJmIoYS5nKX12YXIgaz1hO2woYS5iLGMpO2woYS5jLGMpO3koYSl9O2Z1bmN0aW9uIEEoYSxiKXt2YXIgYz1ifHx7fTt0aGlzLmZhbWlseT1hO3RoaXMuc3R5bGU9Yy5zdHlsZXx8XCJub3JtYWxcIjt0aGlzLndlaWdodD1jLndlaWdodHx8XCJub3JtYWxcIjt0aGlzLnN0cmV0Y2g9Yy5zdHJldGNofHxcIm5vcm1hbFwifXZhciBCPW51bGwsQz1udWxsLEU9bnVsbCxGPW51bGw7ZnVuY3Rpb24gRygpe2lmKG51bGw9PT1DKWlmKEooKSYmL0FwcGxlLy50ZXN0KHdpbmRvdy5uYXZpZ2F0b3IudmVuZG9yKSl7dmFyIGE9L0FwcGxlV2ViS2l0XFwvKFswLTldKykoPzpcXC4oWzAtOV0rKSkoPzpcXC4oWzAtOV0rKSkvLmV4ZWMod2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQpO0M9ISFhJiY2MDM+cGFyc2VJbnQoYVsxXSwxMCl9ZWxzZSBDPSExO3JldHVybiBDfWZ1bmN0aW9uIEooKXtudWxsPT09RiYmKEY9ISFkb2N1bWVudC5mb250cyk7cmV0dXJuIEZ9XG5mdW5jdGlvbiBLKCl7aWYobnVsbD09PUUpe3ZhciBhPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7dHJ5e2Euc3R5bGUuZm9udD1cImNvbmRlbnNlZCAxMDBweCBzYW5zLXNlcmlmXCJ9Y2F0Y2goYil7fUU9XCJcIiE9PWEuc3R5bGUuZm9udH1yZXR1cm4gRX1mdW5jdGlvbiBMKGEsYil7cmV0dXJuW2Euc3R5bGUsYS53ZWlnaHQsSygpP2Euc3RyZXRjaDpcIlwiLFwiMTAwcHhcIixiXS5qb2luKFwiIFwiKX1cbkEucHJvdG90eXBlLmxvYWQ9ZnVuY3Rpb24oYSxiKXt2YXIgYz10aGlzLGs9YXx8XCJCRVNic3d5XCIscT0wLEQ9Ynx8M0UzLEg9KG5ldyBEYXRlKS5nZXRUaW1lKCk7cmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKGEsYil7aWYoSigpJiYhRygpKXt2YXIgTT1uZXcgUHJvbWlzZShmdW5jdGlvbihhLGIpe2Z1bmN0aW9uIGUoKXsobmV3IERhdGUpLmdldFRpbWUoKS1IPj1EP2IoKTpkb2N1bWVudC5mb250cy5sb2FkKEwoYywnXCInK2MuZmFtaWx5KydcIicpLGspLnRoZW4oZnVuY3Rpb24oYyl7MTw9Yy5sZW5ndGg/YSgpOnNldFRpbWVvdXQoZSwyNSl9LGZ1bmN0aW9uKCl7YigpfSl9ZSgpfSksTj1uZXcgUHJvbWlzZShmdW5jdGlvbihhLGMpe3E9c2V0VGltZW91dChjLEQpfSk7UHJvbWlzZS5yYWNlKFtOLE1dKS50aGVuKGZ1bmN0aW9uKCl7Y2xlYXJUaW1lb3V0KHEpO2EoYyl9LGZ1bmN0aW9uKCl7YihjKX0pfWVsc2UgbShmdW5jdGlvbigpe2Z1bmN0aW9uIHUoKXt2YXIgYjtpZihiPS0xIT1cbmYmJi0xIT1nfHwtMSE9ZiYmLTEhPWh8fC0xIT1nJiYtMSE9aCkoYj1mIT1nJiZmIT1oJiZnIT1oKXx8KG51bGw9PT1CJiYoYj0vQXBwbGVXZWJLaXRcXC8oWzAtOV0rKSg/OlxcLihbMC05XSspKS8uZXhlYyh3aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudCksQj0hIWImJig1MzY+cGFyc2VJbnQoYlsxXSwxMCl8fDUzNj09PXBhcnNlSW50KGJbMV0sMTApJiYxMT49cGFyc2VJbnQoYlsyXSwxMCkpKSxiPUImJihmPT12JiZnPT12JiZoPT12fHxmPT13JiZnPT13JiZoPT13fHxmPT14JiZnPT14JiZoPT14KSksYj0hYjtiJiYoZC5wYXJlbnROb2RlJiZkLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZCksY2xlYXJUaW1lb3V0KHEpLGEoYykpfWZ1bmN0aW9uIEkoKXtpZigobmV3IERhdGUpLmdldFRpbWUoKS1IPj1EKWQucGFyZW50Tm9kZSYmZC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGQpLGIoYyk7ZWxzZXt2YXIgYT1kb2N1bWVudC5oaWRkZW47aWYoITA9PT1hfHx2b2lkIDA9PT1hKWY9ZS5hLm9mZnNldFdpZHRoLFxuZz1uLmEub2Zmc2V0V2lkdGgsaD1wLmEub2Zmc2V0V2lkdGgsdSgpO3E9c2V0VGltZW91dChJLDUwKX19dmFyIGU9bmV3IHIoayksbj1uZXcgcihrKSxwPW5ldyByKGspLGY9LTEsZz0tMSxoPS0xLHY9LTEsdz0tMSx4PS0xLGQ9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtkLmRpcj1cImx0clwiO3QoZSxMKGMsXCJzYW5zLXNlcmlmXCIpKTt0KG4sTChjLFwic2VyaWZcIikpO3QocCxMKGMsXCJtb25vc3BhY2VcIikpO2QuYXBwZW5kQ2hpbGQoZS5hKTtkLmFwcGVuZENoaWxkKG4uYSk7ZC5hcHBlbmRDaGlsZChwLmEpO2RvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZCk7dj1lLmEub2Zmc2V0V2lkdGg7dz1uLmEub2Zmc2V0V2lkdGg7eD1wLmEub2Zmc2V0V2lkdGg7SSgpO3ooZSxmdW5jdGlvbihhKXtmPWE7dSgpfSk7dChlLEwoYywnXCInK2MuZmFtaWx5KydcIixzYW5zLXNlcmlmJykpO3oobixmdW5jdGlvbihhKXtnPWE7dSgpfSk7dChuLEwoYywnXCInK2MuZmFtaWx5KydcIixzZXJpZicpKTtcbnoocCxmdW5jdGlvbihhKXtoPWE7dSgpfSk7dChwLEwoYywnXCInK2MuZmFtaWx5KydcIixtb25vc3BhY2UnKSl9KX0pfTtcIm9iamVjdFwiPT09dHlwZW9mIG1vZHVsZT9tb2R1bGUuZXhwb3J0cz1BOih3aW5kb3cuRm9udEZhY2VPYnNlcnZlcj1BLHdpbmRvdy5Gb250RmFjZU9ic2VydmVyLnByb3RvdHlwZS5sb2FkPUEucHJvdG90eXBlLmxvYWQpO30oKSk7XG4iLCIvKiFcbiAqIFZFUlNJT046IDEuOS4xXG4gKiBEQVRFOiAyMDE4LTA1LTIxXG4gKiBVUERBVEVTIEFORCBET0NTIEFUOiBodHRwOi8vZ3JlZW5zb2NrLmNvbVxuICpcbiAqIEBsaWNlbnNlIENvcHlyaWdodCAoYykgMjAwOC0yMDE4LCBHcmVlblNvY2suIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKiBUaGlzIHdvcmsgaXMgc3ViamVjdCB0byB0aGUgdGVybXMgYXQgaHR0cDovL2dyZWVuc29jay5jb20vc3RhbmRhcmQtbGljZW5zZSBvciBmb3JcbiAqIENsdWIgR3JlZW5Tb2NrIG1lbWJlcnMsIHRoZSBzb2Z0d2FyZSBhZ3JlZW1lbnQgdGhhdCB3YXMgaXNzdWVkIHdpdGggeW91ciBtZW1iZXJzaGlwLlxuICogXG4gKiBAYXV0aG9yOiBKYWNrIERveWxlLCBqYWNrQGdyZWVuc29jay5jb21cbiAqKi9cbnZhciBfZ3NTY29wZSA9ICh0eXBlb2YobW9kdWxlKSAhPT0gXCJ1bmRlZmluZWRcIiAmJiBtb2R1bGUuZXhwb3J0cyAmJiB0eXBlb2YoZ2xvYmFsKSAhPT0gXCJ1bmRlZmluZWRcIikgPyBnbG9iYWwgOiB0aGlzIHx8IHdpbmRvdzsgLy9oZWxwcyBlbnN1cmUgY29tcGF0aWJpbGl0eSB3aXRoIEFNRC9SZXF1aXJlSlMgYW5kIENvbW1vbkpTL05vZGVcbihfZ3NTY29wZS5fZ3NRdWV1ZSB8fCAoX2dzU2NvcGUuX2dzUXVldWUgPSBbXSkpLnB1c2goIGZ1bmN0aW9uKCkge1xuXG5cdFwidXNlIHN0cmljdFwiO1xuXG5cdHZhciBfZG9jID0gKF9nc1Njb3BlLmRvY3VtZW50IHx8IHt9KS5kb2N1bWVudEVsZW1lbnQsXG5cdFx0X3dpbmRvdyA9IF9nc1Njb3BlLFxuXHRcdF9tYXggPSBmdW5jdGlvbihlbGVtZW50LCBheGlzKSB7XG5cdFx0XHR2YXIgZGltID0gKGF4aXMgPT09IFwieFwiKSA/IFwiV2lkdGhcIiA6IFwiSGVpZ2h0XCIsXG5cdFx0XHRcdHNjcm9sbCA9IFwic2Nyb2xsXCIgKyBkaW0sXG5cdFx0XHRcdGNsaWVudCA9IFwiY2xpZW50XCIgKyBkaW0sXG5cdFx0XHRcdGJvZHkgPSBkb2N1bWVudC5ib2R5O1xuXHRcdFx0cmV0dXJuIChlbGVtZW50ID09PSBfd2luZG93IHx8IGVsZW1lbnQgPT09IF9kb2MgfHwgZWxlbWVudCA9PT0gYm9keSkgPyBNYXRoLm1heChfZG9jW3Njcm9sbF0sIGJvZHlbc2Nyb2xsXSkgLSAoX3dpbmRvd1tcImlubmVyXCIgKyBkaW1dIHx8IF9kb2NbY2xpZW50XSB8fCBib2R5W2NsaWVudF0pIDogZWxlbWVudFtzY3JvbGxdIC0gZWxlbWVudFtcIm9mZnNldFwiICsgZGltXTtcblx0XHR9LFxuXHRcdF91bndyYXBFbGVtZW50ID0gZnVuY3Rpb24odmFsdWUpIHtcblx0XHRcdGlmICh0eXBlb2YodmFsdWUpID09PSBcInN0cmluZ1wiKSB7XG5cdFx0XHRcdHZhbHVlID0gVHdlZW5MaXRlLnNlbGVjdG9yKHZhbHVlKTtcblx0XHRcdH1cblx0XHRcdGlmICh2YWx1ZS5sZW5ndGggJiYgdmFsdWUgIT09IF93aW5kb3cgJiYgdmFsdWVbMF0gJiYgdmFsdWVbMF0uc3R5bGUgJiYgIXZhbHVlLm5vZGVUeXBlKSB7XG5cdFx0XHRcdHZhbHVlID0gdmFsdWVbMF07XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gKHZhbHVlID09PSBfd2luZG93IHx8ICh2YWx1ZS5ub2RlVHlwZSAmJiB2YWx1ZS5zdHlsZSkpID8gdmFsdWUgOiBudWxsO1xuXHRcdH0sXG5cdFx0X2J1aWxkR2V0dGVyID0gZnVuY3Rpb24oZSwgYXhpcykgeyAvL3Bhc3MgaW4gYW4gZWxlbWVudCBhbmQgYW4gYXhpcyAoXCJ4XCIgb3IgXCJ5XCIpIGFuZCBpdCdsbCByZXR1cm4gYSBnZXR0ZXIgZnVuY3Rpb24gZm9yIHRoZSBzY3JvbGwgcG9zaXRpb24gb2YgdGhhdCBlbGVtZW50IChsaWtlIHNjcm9sbFRvcCBvciBzY3JvbGxMZWZ0LCBhbHRob3VnaCBpZiB0aGUgZWxlbWVudCBpcyB0aGUgd2luZG93LCBpdCdsbCB1c2UgdGhlIHBhZ2VYT2Zmc2V0L3BhZ2VZT2Zmc2V0IG9yIHRoZSBkb2N1bWVudEVsZW1lbnQncyBzY3JvbGxUb3Avc2Nyb2xsTGVmdCBvciBkb2N1bWVudC5ib2R5J3MuIEJhc2ljYWxseSB0aGlzIHN0cmVhbWxpbmVzIHRoaW5ncyBhbmQgbWFrZXMgYSB2ZXJ5IGZhc3QgZ2V0dGVyIGFjcm9zcyBicm93c2Vycy5cblx0XHRcdHZhciBwID0gXCJzY3JvbGxcIiArICgoYXhpcyA9PT0gXCJ4XCIpID8gXCJMZWZ0XCIgOiBcIlRvcFwiKTtcblx0XHRcdGlmIChlID09PSBfd2luZG93KSB7XG5cdFx0XHRcdGlmIChlLnBhZ2VYT2Zmc2V0ICE9IG51bGwpIHtcblx0XHRcdFx0XHRwID0gXCJwYWdlXCIgKyBheGlzLnRvVXBwZXJDYXNlKCkgKyBcIk9mZnNldFwiO1xuXHRcdFx0XHR9IGVsc2UgaWYgKF9kb2NbcF0gIT0gbnVsbCkge1xuXHRcdFx0XHRcdGUgPSBfZG9jO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdGUgPSBkb2N1bWVudC5ib2R5O1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHJldHVybiBlW3BdO1xuXHRcdFx0fTtcblx0XHR9LFxuXHRcdF9nZXRPZmZzZXQgPSBmdW5jdGlvbihlbGVtZW50LCBjb250YWluZXIpIHtcblx0XHRcdHZhciByZWN0ID0gX3Vud3JhcEVsZW1lbnQoZWxlbWVudCkuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCksXG5cdFx0XHRcdGIgPSBkb2N1bWVudC5ib2R5LFxuXHRcdFx0XHRpc1Jvb3QgPSAoIWNvbnRhaW5lciB8fCBjb250YWluZXIgPT09IF93aW5kb3cgfHwgY29udGFpbmVyID09PSBiKSxcblx0XHRcdFx0Y1JlY3QgPSBpc1Jvb3QgPyB7dG9wOl9kb2MuY2xpZW50VG9wIC0gKHdpbmRvdy5wYWdlWU9mZnNldCB8fCBfZG9jLnNjcm9sbFRvcCB8fCBiLnNjcm9sbFRvcCB8fCAwKSwgbGVmdDpfZG9jLmNsaWVudExlZnQgLSAod2luZG93LnBhZ2VYT2Zmc2V0IHx8IF9kb2Muc2Nyb2xsTGVmdCB8fCBiLnNjcm9sbExlZnQgfHwgMCl9IDogY29udGFpbmVyLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLFxuXHRcdFx0XHRvZmZzZXRzID0ge3g6IHJlY3QubGVmdCAtIGNSZWN0LmxlZnQsIHk6IHJlY3QudG9wIC0gY1JlY3QudG9wfTtcblx0XHRcdGlmICghaXNSb290ICYmIGNvbnRhaW5lcikgeyAvL29ubHkgYWRkIHRoZSBjdXJyZW50IHNjcm9sbCBwb3NpdGlvbiBpZiBpdCdzIG5vdCB0aGUgd2luZG93L2JvZHkuXG5cdFx0XHRcdG9mZnNldHMueCArPSBfYnVpbGRHZXR0ZXIoY29udGFpbmVyLCBcInhcIikoKTtcblx0XHRcdFx0b2Zmc2V0cy55ICs9IF9idWlsZEdldHRlcihjb250YWluZXIsIFwieVwiKSgpO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIG9mZnNldHM7XG5cdFx0XHQvKlx0UFJFVklPVVNcblx0XHRcdHZhciByZWN0ID0gX3Vud3JhcEVsZW1lbnQoZWxlbWVudCkuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCksXG5cdFx0XHRcdGlzUm9vdCA9ICghY29udGFpbmVyIHx8IGNvbnRhaW5lciA9PT0gX3dpbmRvdyB8fCBjb250YWluZXIgPT09IGRvY3VtZW50LmJvZHkpLFxuXHRcdFx0XHRjUmVjdCA9IChpc1Jvb3QgPyBfZG9jIDogY29udGFpbmVyKS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSxcblx0XHRcdFx0b2Zmc2V0cyA9IHt4OiByZWN0LmxlZnQgLSBjUmVjdC5sZWZ0LCB5OiByZWN0LnRvcCAtIGNSZWN0LnRvcH07XG5cdFx0XHRpZiAoIWlzUm9vdCAmJiBjb250YWluZXIpIHsgLy9vbmx5IGFkZCB0aGUgY3VycmVudCBzY3JvbGwgcG9zaXRpb24gaWYgaXQncyBub3QgdGhlIHdpbmRvdy9ib2R5LlxuXHRcdFx0XHRvZmZzZXRzLnggKz0gX2J1aWxkR2V0dGVyKGNvbnRhaW5lciwgXCJ4XCIpKCk7XG5cdFx0XHRcdG9mZnNldHMueSArPSBfYnVpbGRHZXR0ZXIoY29udGFpbmVyLCBcInlcIikoKTtcblx0XHRcdH1cblx0XHRcdHJldHVybiBvZmZzZXRzO1xuXHRcdFx0Ki9cblx0XHR9LFxuXHRcdF9wYXJzZVZhbCA9IGZ1bmN0aW9uKHZhbHVlLCB0YXJnZXQsIGF4aXMpIHtcblx0XHRcdHZhciB0eXBlID0gdHlwZW9mKHZhbHVlKTtcblx0XHRcdHJldHVybiAhaXNOYU4odmFsdWUpID8gcGFyc2VGbG9hdCh2YWx1ZSkgOiAodHlwZSA9PT0gXCJudW1iZXJcIiB8fCAodHlwZSA9PT0gXCJzdHJpbmdcIiAmJiB2YWx1ZS5jaGFyQXQoMSkgPT09IFwiPVwiKSkgPyB2YWx1ZSA6ICh2YWx1ZSA9PT0gXCJtYXhcIikgPyBfbWF4KHRhcmdldCwgYXhpcykgOiBNYXRoLm1pbihfbWF4KHRhcmdldCwgYXhpcyksIF9nZXRPZmZzZXQodmFsdWUsIHRhcmdldClbYXhpc10pO1xuXHRcdH0sXG5cblx0XHRTY3JvbGxUb1BsdWdpbiA9IF9nc1Njb3BlLl9nc0RlZmluZS5wbHVnaW4oe1xuXHRcdFx0cHJvcE5hbWU6IFwic2Nyb2xsVG9cIixcblx0XHRcdEFQSTogMixcblx0XHRcdGdsb2JhbDogdHJ1ZSxcblx0XHRcdHZlcnNpb246XCIxLjkuMVwiLFxuXG5cdFx0XHQvL2NhbGxlZCB3aGVuIHRoZSB0d2VlbiByZW5kZXJzIGZvciB0aGUgZmlyc3QgdGltZS4gVGhpcyBpcyB3aGVyZSBpbml0aWFsIHZhbHVlcyBzaG91bGQgYmUgcmVjb3JkZWQgYW5kIGFueSBzZXR1cCByb3V0aW5lcyBzaG91bGQgcnVuLlxuXHRcdFx0aW5pdDogZnVuY3Rpb24odGFyZ2V0LCB2YWx1ZSwgdHdlZW4pIHtcblx0XHRcdFx0dGhpcy5fd2R3ID0gKHRhcmdldCA9PT0gX3dpbmRvdyk7XG5cdFx0XHRcdHRoaXMuX3RhcmdldCA9IHRhcmdldDtcblx0XHRcdFx0dGhpcy5fdHdlZW4gPSB0d2Vlbjtcblx0XHRcdFx0aWYgKHR5cGVvZih2YWx1ZSkgIT09IFwib2JqZWN0XCIpIHtcblx0XHRcdFx0XHR2YWx1ZSA9IHt5OnZhbHVlfTsgLy9pZiB3ZSBkb24ndCByZWNlaXZlIGFuIG9iamVjdCBhcyB0aGUgcGFyYW1ldGVyLCBhc3N1bWUgdGhlIHVzZXIgaW50ZW5kcyBcInlcIi5cblx0XHRcdFx0XHRpZiAodHlwZW9mKHZhbHVlLnkpID09PSBcInN0cmluZ1wiICYmIHZhbHVlLnkgIT09IFwibWF4XCIgJiYgdmFsdWUueS5jaGFyQXQoMSkgIT09IFwiPVwiKSB7XG5cdFx0XHRcdFx0XHR2YWx1ZS54ID0gdmFsdWUueTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0gZWxzZSBpZiAodmFsdWUubm9kZVR5cGUpIHtcblx0XHRcdFx0XHR2YWx1ZSA9IHt5OnZhbHVlLCB4OnZhbHVlfTtcblx0XHRcdFx0fVxuXHRcdFx0XHR0aGlzLnZhcnMgPSB2YWx1ZTtcblx0XHRcdFx0dGhpcy5fYXV0b0tpbGwgPSAodmFsdWUuYXV0b0tpbGwgIT09IGZhbHNlKTtcblx0XHRcdFx0dGhpcy5nZXRYID0gX2J1aWxkR2V0dGVyKHRhcmdldCwgXCJ4XCIpO1xuXHRcdFx0XHR0aGlzLmdldFkgPSBfYnVpbGRHZXR0ZXIodGFyZ2V0LCBcInlcIik7XG5cdFx0XHRcdHRoaXMueCA9IHRoaXMueFByZXYgPSB0aGlzLmdldFgoKTtcblx0XHRcdFx0dGhpcy55ID0gdGhpcy55UHJldiA9IHRoaXMuZ2V0WSgpO1xuXHRcdFx0XHRpZiAodmFsdWUueCAhPSBudWxsKSB7XG5cdFx0XHRcdFx0dGhpcy5fYWRkVHdlZW4odGhpcywgXCJ4XCIsIHRoaXMueCwgX3BhcnNlVmFsKHZhbHVlLngsIHRhcmdldCwgXCJ4XCIpIC0gKHZhbHVlLm9mZnNldFggfHwgMCksIFwic2Nyb2xsVG9feFwiLCB0cnVlKTtcblx0XHRcdFx0XHR0aGlzLl9vdmVyd3JpdGVQcm9wcy5wdXNoKFwic2Nyb2xsVG9feFwiKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHR0aGlzLnNraXBYID0gdHJ1ZTtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAodmFsdWUueSAhPSBudWxsKSB7XG5cdFx0XHRcdFx0dGhpcy5fYWRkVHdlZW4odGhpcywgXCJ5XCIsIHRoaXMueSwgX3BhcnNlVmFsKHZhbHVlLnksIHRhcmdldCwgXCJ5XCIpIC0gKHZhbHVlLm9mZnNldFkgfHwgMCksIFwic2Nyb2xsVG9feVwiLCB0cnVlKTtcblx0XHRcdFx0XHR0aGlzLl9vdmVyd3JpdGVQcm9wcy5wdXNoKFwic2Nyb2xsVG9feVwiKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHR0aGlzLnNraXBZID0gdHJ1ZTtcblx0XHRcdFx0fVxuXHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdH0sXG5cblx0XHRcdC8vY2FsbGVkIGVhY2ggdGltZSB0aGUgdmFsdWVzIHNob3VsZCBiZSB1cGRhdGVkLCBhbmQgdGhlIHJhdGlvIGdldHMgcGFzc2VkIGFzIHRoZSBvbmx5IHBhcmFtZXRlciAodHlwaWNhbGx5IGl0J3MgYSB2YWx1ZSBiZXR3ZWVuIDAgYW5kIDEsIGJ1dCBpdCBjYW4gZXhjZWVkIHRob3NlIHdoZW4gdXNpbmcgYW4gZWFzZSBsaWtlIEVsYXN0aWMuZWFzZU91dCBvciBCYWNrLmVhc2VPdXQsIGV0Yy4pXG5cdFx0XHRzZXQ6IGZ1bmN0aW9uKHYpIHtcblx0XHRcdFx0dGhpcy5fc3VwZXIuc2V0UmF0aW8uY2FsbCh0aGlzLCB2KTtcblxuXHRcdFx0XHR2YXIgeCA9ICh0aGlzLl93ZHcgfHwgIXRoaXMuc2tpcFgpID8gdGhpcy5nZXRYKCkgOiB0aGlzLnhQcmV2LFxuXHRcdFx0XHRcdHkgPSAodGhpcy5fd2R3IHx8ICF0aGlzLnNraXBZKSA/IHRoaXMuZ2V0WSgpIDogdGhpcy55UHJldixcblx0XHRcdFx0XHR5RGlmID0geSAtIHRoaXMueVByZXYsXG5cdFx0XHRcdFx0eERpZiA9IHggLSB0aGlzLnhQcmV2LFxuXHRcdFx0XHRcdHRocmVzaG9sZCA9IFNjcm9sbFRvUGx1Z2luLmF1dG9LaWxsVGhyZXNob2xkO1xuXG5cdFx0XHRcdGlmICh0aGlzLnggPCAwKSB7IC8vY2FuJ3Qgc2Nyb2xsIHRvIGEgcG9zaXRpb24gbGVzcyB0aGFuIDAhIE1pZ2h0IGhhcHBlbiBpZiBzb21lb25lIHVzZXMgYSBCYWNrLmVhc2VPdXQgb3IgRWxhc3RpYy5lYXNlT3V0IHdoZW4gc2Nyb2xsaW5nIGJhY2sgdG8gdGhlIHRvcCBvZiB0aGUgcGFnZSAoZm9yIGV4YW1wbGUpXG5cdFx0XHRcdFx0dGhpcy54ID0gMDtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAodGhpcy55IDwgMCkge1xuXHRcdFx0XHRcdHRoaXMueSA9IDA7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKHRoaXMuX2F1dG9LaWxsKSB7XG5cdFx0XHRcdFx0Ly9ub3RlOiBpT1MgaGFzIGEgYnVnIHRoYXQgdGhyb3dzIG9mZiB0aGUgc2Nyb2xsIGJ5IHNldmVyYWwgcGl4ZWxzLCBzbyB3ZSBuZWVkIHRvIGNoZWNrIGlmIGl0J3Mgd2l0aGluIDcgcGl4ZWxzIG9mIHRoZSBwcmV2aW91cyBvbmUgdGhhdCB3ZSBzZXQgaW5zdGVhZCBvZiBqdXN0IGxvb2tpbmcgZm9yIGFuIGV4YWN0IG1hdGNoLlxuXHRcdFx0XHRcdGlmICghdGhpcy5za2lwWCAmJiAoeERpZiA+IHRocmVzaG9sZCB8fCB4RGlmIDwgLXRocmVzaG9sZCkgJiYgeCA8IF9tYXgodGhpcy5fdGFyZ2V0LCBcInhcIikpIHtcblx0XHRcdFx0XHRcdHRoaXMuc2tpcFggPSB0cnVlOyAvL2lmIHRoZSB1c2VyIHNjcm9sbHMgc2VwYXJhdGVseSwgd2Ugc2hvdWxkIHN0b3AgdHdlZW5pbmchXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGlmICghdGhpcy5za2lwWSAmJiAoeURpZiA+IHRocmVzaG9sZCB8fCB5RGlmIDwgLXRocmVzaG9sZCkgJiYgeSA8IF9tYXgodGhpcy5fdGFyZ2V0LCBcInlcIikpIHtcblx0XHRcdFx0XHRcdHRoaXMuc2tpcFkgPSB0cnVlOyAvL2lmIHRoZSB1c2VyIHNjcm9sbHMgc2VwYXJhdGVseSwgd2Ugc2hvdWxkIHN0b3AgdHdlZW5pbmchXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGlmICh0aGlzLnNraXBYICYmIHRoaXMuc2tpcFkpIHtcblx0XHRcdFx0XHRcdHRoaXMuX3R3ZWVuLmtpbGwoKTtcblx0XHRcdFx0XHRcdGlmICh0aGlzLnZhcnMub25BdXRvS2lsbCkge1xuXHRcdFx0XHRcdFx0XHR0aGlzLnZhcnMub25BdXRvS2lsbC5hcHBseSh0aGlzLnZhcnMub25BdXRvS2lsbFNjb3BlIHx8IHRoaXMuX3R3ZWVuLCB0aGlzLnZhcnMub25BdXRvS2lsbFBhcmFtcyB8fCBbXSk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRcdGlmICh0aGlzLl93ZHcpIHtcblx0XHRcdFx0XHRfd2luZG93LnNjcm9sbFRvKCghdGhpcy5za2lwWCkgPyB0aGlzLnggOiB4LCAoIXRoaXMuc2tpcFkpID8gdGhpcy55IDogeSk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0aWYgKCF0aGlzLnNraXBZKSB7XG5cdFx0XHRcdFx0XHR0aGlzLl90YXJnZXQuc2Nyb2xsVG9wID0gdGhpcy55O1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRpZiAoIXRoaXMuc2tpcFgpIHtcblx0XHRcdFx0XHRcdHRoaXMuX3RhcmdldC5zY3JvbGxMZWZ0ID0gdGhpcy54O1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHR0aGlzLnhQcmV2ID0gdGhpcy54O1xuXHRcdFx0XHR0aGlzLnlQcmV2ID0gdGhpcy55O1xuXHRcdFx0fVxuXG5cdFx0fSksXG5cdFx0cCA9IFNjcm9sbFRvUGx1Z2luLnByb3RvdHlwZTtcblxuXHRTY3JvbGxUb1BsdWdpbi5tYXggPSBfbWF4O1xuXHRTY3JvbGxUb1BsdWdpbi5nZXRPZmZzZXQgPSBfZ2V0T2Zmc2V0O1xuXHRTY3JvbGxUb1BsdWdpbi5idWlsZEdldHRlciA9IF9idWlsZEdldHRlcjtcblx0U2Nyb2xsVG9QbHVnaW4uYXV0b0tpbGxUaHJlc2hvbGQgPSA3O1xuXG5cdHAuX2tpbGwgPSBmdW5jdGlvbihsb29rdXApIHtcblx0XHRpZiAobG9va3VwLnNjcm9sbFRvX3gpIHtcblx0XHRcdHRoaXMuc2tpcFggPSB0cnVlO1xuXHRcdH1cblx0XHRpZiAobG9va3VwLnNjcm9sbFRvX3kpIHtcblx0XHRcdHRoaXMuc2tpcFkgPSB0cnVlO1xuXHRcdH1cblx0XHRyZXR1cm4gdGhpcy5fc3VwZXIuX2tpbGwuY2FsbCh0aGlzLCBsb29rdXApO1xuXHR9O1xuXG59KTsgaWYgKF9nc1Njb3BlLl9nc0RlZmluZSkgeyBfZ3NTY29wZS5fZ3NRdWV1ZS5wb3AoKSgpOyB9XG5cbi8vZXhwb3J0IHRvIEFNRC9SZXF1aXJlSlMgYW5kIENvbW1vbkpTL05vZGUgKHByZWN1cnNvciB0byBmdWxsIG1vZHVsYXIgYnVpbGQgc3lzdGVtIGNvbWluZyBhdCBhIGxhdGVyIGRhdGUpXG4oZnVuY3Rpb24obmFtZSkge1xuXHRcInVzZSBzdHJpY3RcIjtcblx0dmFyIGdldEdsb2JhbCA9IGZ1bmN0aW9uKCkge1xuXHRcdHJldHVybiAoX2dzU2NvcGUuR3JlZW5Tb2NrR2xvYmFscyB8fCBfZ3NTY29wZSlbbmFtZV07XG5cdH07XG5cdGlmICh0eXBlb2YobW9kdWxlKSAhPT0gXCJ1bmRlZmluZWRcIiAmJiBtb2R1bGUuZXhwb3J0cykgeyAvL25vZGVcblx0XHRyZXF1aXJlKFwiZ3NhcC9Ud2VlbkxpdGVcIik7XG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBnZXRHbG9iYWwoKTtcblx0fSBlbHNlIGlmICh0eXBlb2YoZGVmaW5lKSA9PT0gXCJmdW5jdGlvblwiICYmIGRlZmluZS5hbWQpIHsgLy9BTURcblx0XHRkZWZpbmUoW1wiZ3NhcC9Ud2VlbkxpdGVcIl0sIGdldEdsb2JhbCk7XG5cdH1cbn0oXCJTY3JvbGxUb1BsdWdpblwiKSk7IiwiLyohXG4gKiBWRVJTSU9OOiAxLjIwLjVcbiAqIERBVEU6IDIwMTgtMDUtMjFcbiAqIFVQREFURVMgQU5EIERPQ1MgQVQ6IGh0dHA6Ly9ncmVlbnNvY2suY29tXG4gKlxuICogQGxpY2Vuc2UgQ29weXJpZ2h0IChjKSAyMDA4LTIwMTgsIEdyZWVuU29jay4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqIFRoaXMgd29yayBpcyBzdWJqZWN0IHRvIHRoZSB0ZXJtcyBhdCBodHRwOi8vZ3JlZW5zb2NrLmNvbS9zdGFuZGFyZC1saWNlbnNlIG9yIGZvclxuICogQ2x1YiBHcmVlblNvY2sgbWVtYmVycywgdGhlIHNvZnR3YXJlIGFncmVlbWVudCB0aGF0IHdhcyBpc3N1ZWQgd2l0aCB5b3VyIG1lbWJlcnNoaXAuXG4gKiBcbiAqIEBhdXRob3I6IEphY2sgRG95bGUsIGphY2tAZ3JlZW5zb2NrLmNvbVxuICovXG4oZnVuY3Rpb24od2luZG93LCBtb2R1bGVOYW1lKSB7XG5cblx0XHRcInVzZSBzdHJpY3RcIjtcblx0XHR2YXIgX2V4cG9ydHMgPSB7fSxcblx0XHRcdF9kb2MgPSB3aW5kb3cuZG9jdW1lbnQsXG5cdFx0XHRfZ2xvYmFscyA9IHdpbmRvdy5HcmVlblNvY2tHbG9iYWxzID0gd2luZG93LkdyZWVuU29ja0dsb2JhbHMgfHwgd2luZG93O1xuXHRcdGlmIChfZ2xvYmFscy5Ud2VlbkxpdGUpIHtcblx0XHRcdHJldHVybiBfZ2xvYmFscy5Ud2VlbkxpdGU7IC8vaW4gY2FzZSB0aGUgY29yZSBzZXQgb2YgY2xhc3NlcyBpcyBhbHJlYWR5IGxvYWRlZCwgZG9uJ3QgaW5zdGFudGlhdGUgdHdpY2UuXG5cdFx0fVxuXHRcdHZhciBfbmFtZXNwYWNlID0gZnVuY3Rpb24obnMpIHtcblx0XHRcdFx0dmFyIGEgPSBucy5zcGxpdChcIi5cIiksXG5cdFx0XHRcdFx0cCA9IF9nbG9iYWxzLCBpO1xuXHRcdFx0XHRmb3IgKGkgPSAwOyBpIDwgYS5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRcdHBbYVtpXV0gPSBwID0gcFthW2ldXSB8fCB7fTtcblx0XHRcdFx0fVxuXHRcdFx0XHRyZXR1cm4gcDtcblx0XHRcdH0sXG5cdFx0XHRncyA9IF9uYW1lc3BhY2UoXCJjb20uZ3JlZW5zb2NrXCIpLFxuXHRcdFx0X3RpbnlOdW0gPSAwLjAwMDAwMDAwMDEsXG5cdFx0XHRfc2xpY2UgPSBmdW5jdGlvbihhKSB7IC8vZG9uJ3QgdXNlIEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKHRhcmdldCwgMCkgYmVjYXVzZSB0aGF0IGRvZXNuJ3Qgd29yayBpbiBJRTggd2l0aCBhIE5vZGVMaXN0IHRoYXQncyByZXR1cm5lZCBieSBxdWVyeVNlbGVjdG9yQWxsKClcblx0XHRcdFx0dmFyIGIgPSBbXSxcblx0XHRcdFx0XHRsID0gYS5sZW5ndGgsXG5cdFx0XHRcdFx0aTtcblx0XHRcdFx0Zm9yIChpID0gMDsgaSAhPT0gbDsgYi5wdXNoKGFbaSsrXSkpIHt9XG5cdFx0XHRcdHJldHVybiBiO1xuXHRcdFx0fSxcblx0XHRcdF9lbXB0eUZ1bmMgPSBmdW5jdGlvbigpIHt9LFxuXHRcdFx0X2lzQXJyYXkgPSAoZnVuY3Rpb24oKSB7IC8vd29ya3MgYXJvdW5kIGlzc3VlcyBpbiBpZnJhbWUgZW52aXJvbm1lbnRzIHdoZXJlIHRoZSBBcnJheSBnbG9iYWwgaXNuJ3Qgc2hhcmVkLCB0aHVzIGlmIHRoZSBvYmplY3Qgb3JpZ2luYXRlcyBpbiBhIGRpZmZlcmVudCB3aW5kb3cvaWZyYW1lLCBcIihvYmogaW5zdGFuY2VvZiBBcnJheSlcIiB3aWxsIGV2YWx1YXRlIGZhbHNlLiBXZSBhZGRlZCBzb21lIHNwZWVkIG9wdGltaXphdGlvbnMgdG8gYXZvaWQgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKCkgdW5sZXNzIGl0J3MgYWJzb2x1dGVseSBuZWNlc3NhcnkgYmVjYXVzZSBpdCdzIFZFUlkgc2xvdyAobGlrZSAyMHggc2xvd2VyKVxuXHRcdFx0XHR2YXIgdG9TdHJpbmcgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLFxuXHRcdFx0XHRcdGFycmF5ID0gdG9TdHJpbmcuY2FsbChbXSk7XG5cdFx0XHRcdHJldHVybiBmdW5jdGlvbihvYmopIHtcblx0XHRcdFx0XHRyZXR1cm4gb2JqICE9IG51bGwgJiYgKG9iaiBpbnN0YW5jZW9mIEFycmF5IHx8ICh0eXBlb2Yob2JqKSA9PT0gXCJvYmplY3RcIiAmJiAhIW9iai5wdXNoICYmIHRvU3RyaW5nLmNhbGwob2JqKSA9PT0gYXJyYXkpKTtcblx0XHRcdFx0fTtcblx0XHRcdH0oKSksXG5cdFx0XHRhLCBpLCBwLCBfdGlja2VyLCBfdGlja2VyQWN0aXZlLFxuXHRcdFx0X2RlZkxvb2t1cCA9IHt9LFxuXG5cdFx0XHQvKipcblx0XHRcdCAqIEBjb25zdHJ1Y3RvclxuXHRcdFx0ICogRGVmaW5lcyBhIEdyZWVuU29jayBjbGFzcywgb3B0aW9uYWxseSB3aXRoIGFuIGFycmF5IG9mIGRlcGVuZGVuY2llcyB0aGF0IG11c3QgYmUgaW5zdGFudGlhdGVkIGZpcnN0IGFuZCBwYXNzZWQgaW50byB0aGUgZGVmaW5pdGlvbi5cblx0XHRcdCAqIFRoaXMgYWxsb3dzIHVzZXJzIHRvIGxvYWQgR3JlZW5Tb2NrIEpTIGZpbGVzIGluIGFueSBvcmRlciBldmVuIGlmIHRoZXkgaGF2ZSBpbnRlcmRlcGVuZGVuY2llcyAobGlrZSBDU1NQbHVnaW4gZXh0ZW5kcyBUd2VlblBsdWdpbiB3aGljaCBpc1xuXHRcdFx0ICogaW5zaWRlIFR3ZWVuTGl0ZS5qcywgYnV0IGlmIENTU1BsdWdpbiBpcyBsb2FkZWQgZmlyc3QsIGl0IHNob3VsZCB3YWl0IHRvIHJ1biBpdHMgY29kZSB1bnRpbCBUd2VlbkxpdGUuanMgbG9hZHMgYW5kIGluc3RhbnRpYXRlcyBUd2VlblBsdWdpblxuXHRcdFx0ICogYW5kIHRoZW4gcGFzcyBUd2VlblBsdWdpbiB0byBDU1NQbHVnaW4ncyBkZWZpbml0aW9uKS4gVGhpcyBpcyBhbGwgZG9uZSBhdXRvbWF0aWNhbGx5IGFuZCBpbnRlcm5hbGx5LlxuXHRcdFx0ICpcblx0XHRcdCAqIEV2ZXJ5IGRlZmluaXRpb24gd2lsbCBiZSBhZGRlZCB0byBhIFwiY29tLmdyZWVuc29ja1wiIGdsb2JhbCBvYmplY3QgKHR5cGljYWxseSB3aW5kb3csIGJ1dCBpZiBhIHdpbmRvdy5HcmVlblNvY2tHbG9iYWxzIG9iamVjdCBpcyBmb3VuZCxcblx0XHRcdCAqIGl0IHdpbGwgZ28gdGhlcmUgYXMgb2YgdjEuNykuIEZvciBleGFtcGxlLCBUd2VlbkxpdGUgd2lsbCBiZSBmb3VuZCBhdCB3aW5kb3cuY29tLmdyZWVuc29jay5Ud2VlbkxpdGUgYW5kIHNpbmNlIGl0J3MgYSBnbG9iYWwgY2xhc3MgdGhhdCBzaG91bGQgYmUgYXZhaWxhYmxlIGFueXdoZXJlLFxuXHRcdFx0ICogaXQgaXMgQUxTTyByZWZlcmVuY2VkIGF0IHdpbmRvdy5Ud2VlbkxpdGUuIEhvd2V2ZXIgc29tZSBjbGFzc2VzIGFyZW4ndCBjb25zaWRlcmVkIGdsb2JhbCwgbGlrZSB0aGUgYmFzZSBjb20uZ3JlZW5zb2NrLmNvcmUuQW5pbWF0aW9uIGNsYXNzLCBzb1xuXHRcdFx0ICogdGhvc2Ugd2lsbCBvbmx5IGJlIGF0IHRoZSBwYWNrYWdlIGxpa2Ugd2luZG93LmNvbS5ncmVlbnNvY2suY29yZS5BbmltYXRpb24uIEFnYWluLCBpZiB5b3UgZGVmaW5lIGEgR3JlZW5Tb2NrR2xvYmFscyBvYmplY3Qgb24gdGhlIHdpbmRvdywgZXZlcnl0aGluZ1xuXHRcdFx0ICogZ2V0cyB0dWNrZWQgbmVhdGx5IGluc2lkZSB0aGVyZSBpbnN0ZWFkIG9mIG9uIHRoZSB3aW5kb3cgZGlyZWN0bHkuIFRoaXMgYWxsb3dzIHlvdSB0byBkbyBhZHZhbmNlZCB0aGluZ3MgbGlrZSBsb2FkIG11bHRpcGxlIHZlcnNpb25zIG9mIEdyZWVuU29ja1xuXHRcdFx0ICogZmlsZXMgYW5kIHB1dCB0aGVtIGludG8gZGlzdGluY3Qgb2JqZWN0cyAoaW1hZ2luZSBhIGJhbm5lciBhZCB1c2VzIGEgbmV3ZXIgdmVyc2lvbiBidXQgdGhlIG1haW4gc2l0ZSB1c2VzIGFuIG9sZGVyIG9uZSkuIEluIHRoYXQgY2FzZSwgeW91IGNvdWxkXG5cdFx0XHQgKiBzYW5kYm94IHRoZSBiYW5uZXIgb25lIGxpa2U6XG5cdFx0XHQgKlxuXHRcdFx0ICogPHNjcmlwdD5cblx0XHRcdCAqICAgICB2YXIgZ3MgPSB3aW5kb3cuR3JlZW5Tb2NrR2xvYmFscyA9IHt9OyAvL3RoZSBuZXdlciB2ZXJzaW9uIHdlJ3JlIGFib3V0IHRvIGxvYWQgY291bGQgbm93IGJlIHJlZmVyZW5jZWQgaW4gYSBcImdzXCIgb2JqZWN0LCBsaWtlIGdzLlR3ZWVuTGl0ZS50byguLi4pLiBVc2Ugd2hhdGV2ZXIgYWxpYXMgeW91IHdhbnQgYXMgbG9uZyBhcyBpdCdzIHVuaXF1ZSwgXCJnc1wiIG9yIFwiYmFubmVyXCIgb3Igd2hhdGV2ZXIuXG5cdFx0XHQgKiA8L3NjcmlwdD5cblx0XHRcdCAqIDxzY3JpcHQgc3JjPVwianMvZ3JlZW5zb2NrL3YxLjcvVHdlZW5NYXguanNcIj48L3NjcmlwdD5cblx0XHRcdCAqIDxzY3JpcHQ+XG5cdFx0XHQgKiAgICAgd2luZG93LkdyZWVuU29ja0dsb2JhbHMgPSB3aW5kb3cuX2dzUXVldWUgPSB3aW5kb3cuX2dzRGVmaW5lID0gbnVsbDsgLy9yZXNldCBpdCBiYWNrIHRvIG51bGwgKGFsb25nIHdpdGggdGhlIHNwZWNpYWwgX2dzUXVldWUgdmFyaWFibGUpIHNvIHRoYXQgdGhlIG5leHQgbG9hZCBvZiBUd2Vlbk1heCBhZmZlY3RzIHRoZSB3aW5kb3cgYW5kIHdlIGNhbiByZWZlcmVuY2UgdGhpbmdzIGRpcmVjdGx5IGxpa2UgVHdlZW5MaXRlLnRvKC4uLilcblx0XHRcdCAqIDwvc2NyaXB0PlxuXHRcdFx0ICogPHNjcmlwdCBzcmM9XCJqcy9ncmVlbnNvY2svdjEuNi9Ud2Vlbk1heC5qc1wiPjwvc2NyaXB0PlxuXHRcdFx0ICogPHNjcmlwdD5cblx0XHRcdCAqICAgICBncy5Ud2VlbkxpdGUudG8oLi4uKTsgLy93b3VsZCB1c2UgdjEuN1xuXHRcdFx0ICogICAgIFR3ZWVuTGl0ZS50byguLi4pOyAvL3dvdWxkIHVzZSB2MS42XG5cdFx0XHQgKiA8L3NjcmlwdD5cblx0XHRcdCAqXG5cdFx0XHQgKiBAcGFyYW0geyFzdHJpbmd9IG5zIFRoZSBuYW1lc3BhY2Ugb2YgdGhlIGNsYXNzIGRlZmluaXRpb24sIGxlYXZpbmcgb2ZmIFwiY29tLmdyZWVuc29jay5cIiBhcyB0aGF0J3MgYXNzdW1lZC4gRm9yIGV4YW1wbGUsIFwiVHdlZW5MaXRlXCIgb3IgXCJwbHVnaW5zLkNTU1BsdWdpblwiIG9yIFwiZWFzaW5nLkJhY2tcIi5cblx0XHRcdCAqIEBwYXJhbSB7IUFycmF5LjxzdHJpbmc+fSBkZXBlbmRlbmNpZXMgQW4gYXJyYXkgb2YgZGVwZW5kZW5jaWVzIChkZXNjcmliZWQgYXMgdGhlaXIgbmFtZXNwYWNlcyBtaW51cyBcImNvbS5ncmVlbnNvY2suXCIgcHJlZml4KS4gRm9yIGV4YW1wbGUgW1wiVHdlZW5MaXRlXCIsXCJwbHVnaW5zLlR3ZWVuUGx1Z2luXCIsXCJjb3JlLkFuaW1hdGlvblwiXVxuXHRcdFx0ICogQHBhcmFtIHshZnVuY3Rpb24oKTpPYmplY3R9IGZ1bmMgVGhlIGZ1bmN0aW9uIHRoYXQgc2hvdWxkIGJlIGNhbGxlZCBhbmQgcGFzc2VkIHRoZSByZXNvbHZlZCBkZXBlbmRlbmNpZXMgd2hpY2ggd2lsbCByZXR1cm4gdGhlIGFjdHVhbCBjbGFzcyBmb3IgdGhpcyBkZWZpbml0aW9uLlxuXHRcdFx0ICogQHBhcmFtIHtib29sZWFuPX0gZ2xvYmFsIElmIHRydWUsIHRoZSBjbGFzcyB3aWxsIGJlIGFkZGVkIHRvIHRoZSBnbG9iYWwgc2NvcGUgKHR5cGljYWxseSB3aW5kb3cgdW5sZXNzIHlvdSBkZWZpbmUgYSB3aW5kb3cuR3JlZW5Tb2NrR2xvYmFscyBvYmplY3QpXG5cdFx0XHQgKi9cblx0XHRcdERlZmluaXRpb24gPSBmdW5jdGlvbihucywgZGVwZW5kZW5jaWVzLCBmdW5jLCBnbG9iYWwpIHtcblx0XHRcdFx0dGhpcy5zYyA9IChfZGVmTG9va3VwW25zXSkgPyBfZGVmTG9va3VwW25zXS5zYyA6IFtdOyAvL3N1YmNsYXNzZXNcblx0XHRcdFx0X2RlZkxvb2t1cFtuc10gPSB0aGlzO1xuXHRcdFx0XHR0aGlzLmdzQ2xhc3MgPSBudWxsO1xuXHRcdFx0XHR0aGlzLmZ1bmMgPSBmdW5jO1xuXHRcdFx0XHR2YXIgX2NsYXNzZXMgPSBbXTtcblx0XHRcdFx0dGhpcy5jaGVjayA9IGZ1bmN0aW9uKGluaXQpIHtcblx0XHRcdFx0XHR2YXIgaSA9IGRlcGVuZGVuY2llcy5sZW5ndGgsXG5cdFx0XHRcdFx0XHRtaXNzaW5nID0gaSxcblx0XHRcdFx0XHRcdGN1ciwgYSwgbiwgY2w7XG5cdFx0XHRcdFx0d2hpbGUgKC0taSA+IC0xKSB7XG5cdFx0XHRcdFx0XHRpZiAoKGN1ciA9IF9kZWZMb29rdXBbZGVwZW5kZW5jaWVzW2ldXSB8fCBuZXcgRGVmaW5pdGlvbihkZXBlbmRlbmNpZXNbaV0sIFtdKSkuZ3NDbGFzcykge1xuXHRcdFx0XHRcdFx0XHRfY2xhc3Nlc1tpXSA9IGN1ci5nc0NsYXNzO1xuXHRcdFx0XHRcdFx0XHRtaXNzaW5nLS07XG5cdFx0XHRcdFx0XHR9IGVsc2UgaWYgKGluaXQpIHtcblx0XHRcdFx0XHRcdFx0Y3VyLnNjLnB1c2godGhpcyk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGlmIChtaXNzaW5nID09PSAwICYmIGZ1bmMpIHtcblx0XHRcdFx0XHRcdGEgPSAoXCJjb20uZ3JlZW5zb2NrLlwiICsgbnMpLnNwbGl0KFwiLlwiKTtcblx0XHRcdFx0XHRcdG4gPSBhLnBvcCgpO1xuXHRcdFx0XHRcdFx0Y2wgPSBfbmFtZXNwYWNlKGEuam9pbihcIi5cIikpW25dID0gdGhpcy5nc0NsYXNzID0gZnVuYy5hcHBseShmdW5jLCBfY2xhc3Nlcyk7XG5cblx0XHRcdFx0XHRcdC8vZXhwb3J0cyB0byBtdWx0aXBsZSBlbnZpcm9ubWVudHNcblx0XHRcdFx0XHRcdGlmIChnbG9iYWwpIHtcblx0XHRcdFx0XHRcdFx0X2dsb2JhbHNbbl0gPSBfZXhwb3J0c1tuXSA9IGNsOyAvL3Byb3ZpZGVzIGEgd2F5IHRvIGF2b2lkIGdsb2JhbCBuYW1lc3BhY2UgcG9sbHV0aW9uLiBCeSBkZWZhdWx0LCB0aGUgbWFpbiBjbGFzc2VzIGxpa2UgVHdlZW5MaXRlLCBQb3dlcjEsIFN0cm9uZywgZXRjLiBhcmUgYWRkZWQgdG8gd2luZG93IHVubGVzcyBhIEdyZWVuU29ja0dsb2JhbHMgaXMgZGVmaW5lZC4gU28gaWYgeW91IHdhbnQgdG8gaGF2ZSB0aGluZ3MgYWRkZWQgdG8gYSBjdXN0b20gb2JqZWN0IGluc3RlYWQsIGp1c3QgZG8gc29tZXRoaW5nIGxpa2Ugd2luZG93LkdyZWVuU29ja0dsb2JhbHMgPSB7fSBiZWZvcmUgbG9hZGluZyBhbnkgR3JlZW5Tb2NrIGZpbGVzLiBZb3UgY2FuIGV2ZW4gc2V0IHVwIGFuIGFsaWFzIGxpa2Ugd2luZG93LkdyZWVuU29ja0dsb2JhbHMgPSB3aW5kb3dzLmdzID0ge30gc28gdGhhdCB5b3UgY2FuIGFjY2VzcyBldmVyeXRoaW5nIGxpa2UgZ3MuVHdlZW5MaXRlLiBBbHNvIHJlbWVtYmVyIHRoYXQgQUxMIGNsYXNzZXMgYXJlIGFkZGVkIHRvIHRoZSB3aW5kb3cuY29tLmdyZWVuc29jayBvYmplY3QgKGluIHRoZWlyIHJlc3BlY3RpdmUgcGFja2FnZXMsIGxpa2UgY29tLmdyZWVuc29jay5lYXNpbmcuUG93ZXIxLCBjb20uZ3JlZW5zb2NrLlR3ZWVuTGl0ZSwgZXRjLilcblx0XHRcdFx0XHRcdFx0aWYgKHR5cGVvZihtb2R1bGUpICE9PSBcInVuZGVmaW5lZFwiICYmIG1vZHVsZS5leHBvcnRzKSB7IC8vbm9kZVxuXHRcdFx0XHRcdFx0XHRcdGlmIChucyA9PT0gbW9kdWxlTmFtZSkge1xuXHRcdFx0XHRcdFx0XHRcdFx0bW9kdWxlLmV4cG9ydHMgPSBfZXhwb3J0c1ttb2R1bGVOYW1lXSA9IGNsO1xuXHRcdFx0XHRcdFx0XHRcdFx0Zm9yIChpIGluIF9leHBvcnRzKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNsW2ldID0gX2V4cG9ydHNbaV07XG5cdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0fSBlbHNlIGlmIChfZXhwb3J0c1ttb2R1bGVOYW1lXSkge1xuXHRcdFx0XHRcdFx0XHRcdFx0X2V4cG9ydHNbbW9kdWxlTmFtZV1bbl0gPSBjbDtcblx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdH0gZWxzZSBpZiAodHlwZW9mKGRlZmluZSkgPT09IFwiZnVuY3Rpb25cIiAmJiBkZWZpbmUuYW1kKXsgLy9BTURcblx0XHRcdFx0XHRcdFx0XHRkZWZpbmUoKHdpbmRvdy5HcmVlblNvY2tBTURQYXRoID8gd2luZG93LkdyZWVuU29ja0FNRFBhdGggKyBcIi9cIiA6IFwiXCIpICsgbnMuc3BsaXQoXCIuXCIpLnBvcCgpLCBbXSwgZnVuY3Rpb24oKSB7IHJldHVybiBjbDsgfSk7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdGZvciAoaSA9IDA7IGkgPCB0aGlzLnNjLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdFx0XHRcdHRoaXMuc2NbaV0uY2hlY2soKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH07XG5cdFx0XHRcdHRoaXMuY2hlY2sodHJ1ZSk7XG5cdFx0XHR9LFxuXG5cdFx0XHQvL3VzZWQgdG8gY3JlYXRlIERlZmluaXRpb24gaW5zdGFuY2VzICh3aGljaCBiYXNpY2FsbHkgcmVnaXN0ZXJzIGEgY2xhc3MgdGhhdCBoYXMgZGVwZW5kZW5jaWVzKS5cblx0XHRcdF9nc0RlZmluZSA9IHdpbmRvdy5fZ3NEZWZpbmUgPSBmdW5jdGlvbihucywgZGVwZW5kZW5jaWVzLCBmdW5jLCBnbG9iYWwpIHtcblx0XHRcdFx0cmV0dXJuIG5ldyBEZWZpbml0aW9uKG5zLCBkZXBlbmRlbmNpZXMsIGZ1bmMsIGdsb2JhbCk7XG5cdFx0XHR9LFxuXG5cdFx0XHQvL2EgcXVpY2sgd2F5IHRvIGNyZWF0ZSBhIGNsYXNzIHRoYXQgZG9lc24ndCBoYXZlIGFueSBkZXBlbmRlbmNpZXMuIFJldHVybnMgdGhlIGNsYXNzLCBidXQgZmlyc3QgcmVnaXN0ZXJzIGl0IGluIHRoZSBHcmVlblNvY2sgbmFtZXNwYWNlIHNvIHRoYXQgb3RoZXIgY2xhc3NlcyBjYW4gZ3JhYiBpdCAob3RoZXIgY2xhc3NlcyBtaWdodCBiZSBkZXBlbmRlbnQgb24gdGhlIGNsYXNzKS5cblx0XHRcdF9jbGFzcyA9IGdzLl9jbGFzcyA9IGZ1bmN0aW9uKG5zLCBmdW5jLCBnbG9iYWwpIHtcblx0XHRcdFx0ZnVuYyA9IGZ1bmMgfHwgZnVuY3Rpb24oKSB7fTtcblx0XHRcdFx0X2dzRGVmaW5lKG5zLCBbXSwgZnVuY3Rpb24oKXsgcmV0dXJuIGZ1bmM7IH0sIGdsb2JhbCk7XG5cdFx0XHRcdHJldHVybiBmdW5jO1xuXHRcdFx0fTtcblxuXHRcdF9nc0RlZmluZS5nbG9iYWxzID0gX2dsb2JhbHM7XG5cblxuXG4vKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogRWFzZVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cdFx0dmFyIF9iYXNlUGFyYW1zID0gWzAsIDAsIDEsIDFdLFxuXHRcdFx0RWFzZSA9IF9jbGFzcyhcImVhc2luZy5FYXNlXCIsIGZ1bmN0aW9uKGZ1bmMsIGV4dHJhUGFyYW1zLCB0eXBlLCBwb3dlcikge1xuXHRcdFx0XHR0aGlzLl9mdW5jID0gZnVuYztcblx0XHRcdFx0dGhpcy5fdHlwZSA9IHR5cGUgfHwgMDtcblx0XHRcdFx0dGhpcy5fcG93ZXIgPSBwb3dlciB8fCAwO1xuXHRcdFx0XHR0aGlzLl9wYXJhbXMgPSBleHRyYVBhcmFtcyA/IF9iYXNlUGFyYW1zLmNvbmNhdChleHRyYVBhcmFtcykgOiBfYmFzZVBhcmFtcztcblx0XHRcdH0sIHRydWUpLFxuXHRcdFx0X2Vhc2VNYXAgPSBFYXNlLm1hcCA9IHt9LFxuXHRcdFx0X2Vhc2VSZWcgPSBFYXNlLnJlZ2lzdGVyID0gZnVuY3Rpb24oZWFzZSwgbmFtZXMsIHR5cGVzLCBjcmVhdGUpIHtcblx0XHRcdFx0dmFyIG5hID0gbmFtZXMuc3BsaXQoXCIsXCIpLFxuXHRcdFx0XHRcdGkgPSBuYS5sZW5ndGgsXG5cdFx0XHRcdFx0dGEgPSAodHlwZXMgfHwgXCJlYXNlSW4sZWFzZU91dCxlYXNlSW5PdXRcIikuc3BsaXQoXCIsXCIpLFxuXHRcdFx0XHRcdGUsIG5hbWUsIGosIHR5cGU7XG5cdFx0XHRcdHdoaWxlICgtLWkgPiAtMSkge1xuXHRcdFx0XHRcdG5hbWUgPSBuYVtpXTtcblx0XHRcdFx0XHRlID0gY3JlYXRlID8gX2NsYXNzKFwiZWFzaW5nLlwiK25hbWUsIG51bGwsIHRydWUpIDogZ3MuZWFzaW5nW25hbWVdIHx8IHt9O1xuXHRcdFx0XHRcdGogPSB0YS5sZW5ndGg7XG5cdFx0XHRcdFx0d2hpbGUgKC0taiA+IC0xKSB7XG5cdFx0XHRcdFx0XHR0eXBlID0gdGFbal07XG5cdFx0XHRcdFx0XHRfZWFzZU1hcFtuYW1lICsgXCIuXCIgKyB0eXBlXSA9IF9lYXNlTWFwW3R5cGUgKyBuYW1lXSA9IGVbdHlwZV0gPSBlYXNlLmdldFJhdGlvID8gZWFzZSA6IGVhc2VbdHlwZV0gfHwgbmV3IGVhc2UoKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH07XG5cblx0XHRwID0gRWFzZS5wcm90b3R5cGU7XG5cdFx0cC5fY2FsY0VuZCA9IGZhbHNlO1xuXHRcdHAuZ2V0UmF0aW8gPSBmdW5jdGlvbihwKSB7XG5cdFx0XHRpZiAodGhpcy5fZnVuYykge1xuXHRcdFx0XHR0aGlzLl9wYXJhbXNbMF0gPSBwO1xuXHRcdFx0XHRyZXR1cm4gdGhpcy5fZnVuYy5hcHBseShudWxsLCB0aGlzLl9wYXJhbXMpO1xuXHRcdFx0fVxuXHRcdFx0dmFyIHQgPSB0aGlzLl90eXBlLFxuXHRcdFx0XHRwdyA9IHRoaXMuX3Bvd2VyLFxuXHRcdFx0XHRyID0gKHQgPT09IDEpID8gMSAtIHAgOiAodCA9PT0gMikgPyBwIDogKHAgPCAwLjUpID8gcCAqIDIgOiAoMSAtIHApICogMjtcblx0XHRcdGlmIChwdyA9PT0gMSkge1xuXHRcdFx0XHRyICo9IHI7XG5cdFx0XHR9IGVsc2UgaWYgKHB3ID09PSAyKSB7XG5cdFx0XHRcdHIgKj0gciAqIHI7XG5cdFx0XHR9IGVsc2UgaWYgKHB3ID09PSAzKSB7XG5cdFx0XHRcdHIgKj0gciAqIHIgKiByO1xuXHRcdFx0fSBlbHNlIGlmIChwdyA9PT0gNCkge1xuXHRcdFx0XHRyICo9IHIgKiByICogciAqIHI7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gKHQgPT09IDEpID8gMSAtIHIgOiAodCA9PT0gMikgPyByIDogKHAgPCAwLjUpID8gciAvIDIgOiAxIC0gKHIgLyAyKTtcblx0XHR9O1xuXG5cdFx0Ly9jcmVhdGUgYWxsIHRoZSBzdGFuZGFyZCBlYXNlcyBsaWtlIExpbmVhciwgUXVhZCwgQ3ViaWMsIFF1YXJ0LCBRdWludCwgU3Ryb25nLCBQb3dlcjAsIFBvd2VyMSwgUG93ZXIyLCBQb3dlcjMsIGFuZCBQb3dlcjQgKGVhY2ggd2l0aCBlYXNlSW4sIGVhc2VPdXQsIGFuZCBlYXNlSW5PdXQpXG5cdFx0YSA9IFtcIkxpbmVhclwiLFwiUXVhZFwiLFwiQ3ViaWNcIixcIlF1YXJ0XCIsXCJRdWludCxTdHJvbmdcIl07XG5cdFx0aSA9IGEubGVuZ3RoO1xuXHRcdHdoaWxlICgtLWkgPiAtMSkge1xuXHRcdFx0cCA9IGFbaV0rXCIsUG93ZXJcIitpO1xuXHRcdFx0X2Vhc2VSZWcobmV3IEVhc2UobnVsbCxudWxsLDEsaSksIHAsIFwiZWFzZU91dFwiLCB0cnVlKTtcblx0XHRcdF9lYXNlUmVnKG5ldyBFYXNlKG51bGwsbnVsbCwyLGkpLCBwLCBcImVhc2VJblwiICsgKChpID09PSAwKSA/IFwiLGVhc2VOb25lXCIgOiBcIlwiKSk7XG5cdFx0XHRfZWFzZVJlZyhuZXcgRWFzZShudWxsLG51bGwsMyxpKSwgcCwgXCJlYXNlSW5PdXRcIik7XG5cdFx0fVxuXHRcdF9lYXNlTWFwLmxpbmVhciA9IGdzLmVhc2luZy5MaW5lYXIuZWFzZUluO1xuXHRcdF9lYXNlTWFwLnN3aW5nID0gZ3MuZWFzaW5nLlF1YWQuZWFzZUluT3V0OyAvL2ZvciBqUXVlcnkgZm9sa3NcblxuXG4vKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogRXZlbnREaXNwYXRjaGVyXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblx0XHR2YXIgRXZlbnREaXNwYXRjaGVyID0gX2NsYXNzKFwiZXZlbnRzLkV2ZW50RGlzcGF0Y2hlclwiLCBmdW5jdGlvbih0YXJnZXQpIHtcblx0XHRcdHRoaXMuX2xpc3RlbmVycyA9IHt9O1xuXHRcdFx0dGhpcy5fZXZlbnRUYXJnZXQgPSB0YXJnZXQgfHwgdGhpcztcblx0XHR9KTtcblx0XHRwID0gRXZlbnREaXNwYXRjaGVyLnByb3RvdHlwZTtcblxuXHRcdHAuYWRkRXZlbnRMaXN0ZW5lciA9IGZ1bmN0aW9uKHR5cGUsIGNhbGxiYWNrLCBzY29wZSwgdXNlUGFyYW0sIHByaW9yaXR5KSB7XG5cdFx0XHRwcmlvcml0eSA9IHByaW9yaXR5IHx8IDA7XG5cdFx0XHR2YXIgbGlzdCA9IHRoaXMuX2xpc3RlbmVyc1t0eXBlXSxcblx0XHRcdFx0aW5kZXggPSAwLFxuXHRcdFx0XHRsaXN0ZW5lciwgaTtcblx0XHRcdGlmICh0aGlzID09PSBfdGlja2VyICYmICFfdGlja2VyQWN0aXZlKSB7XG5cdFx0XHRcdF90aWNrZXIud2FrZSgpO1xuXHRcdFx0fVxuXHRcdFx0aWYgKGxpc3QgPT0gbnVsbCkge1xuXHRcdFx0XHR0aGlzLl9saXN0ZW5lcnNbdHlwZV0gPSBsaXN0ID0gW107XG5cdFx0XHR9XG5cdFx0XHRpID0gbGlzdC5sZW5ndGg7XG5cdFx0XHR3aGlsZSAoLS1pID4gLTEpIHtcblx0XHRcdFx0bGlzdGVuZXIgPSBsaXN0W2ldO1xuXHRcdFx0XHRpZiAobGlzdGVuZXIuYyA9PT0gY2FsbGJhY2sgJiYgbGlzdGVuZXIucyA9PT0gc2NvcGUpIHtcblx0XHRcdFx0XHRsaXN0LnNwbGljZShpLCAxKTtcblx0XHRcdFx0fSBlbHNlIGlmIChpbmRleCA9PT0gMCAmJiBsaXN0ZW5lci5wciA8IHByaW9yaXR5KSB7XG5cdFx0XHRcdFx0aW5kZXggPSBpICsgMTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0bGlzdC5zcGxpY2UoaW5kZXgsIDAsIHtjOmNhbGxiYWNrLCBzOnNjb3BlLCB1cDp1c2VQYXJhbSwgcHI6cHJpb3JpdHl9KTtcblx0XHR9O1xuXG5cdFx0cC5yZW1vdmVFdmVudExpc3RlbmVyID0gZnVuY3Rpb24odHlwZSwgY2FsbGJhY2spIHtcblx0XHRcdHZhciBsaXN0ID0gdGhpcy5fbGlzdGVuZXJzW3R5cGVdLCBpO1xuXHRcdFx0aWYgKGxpc3QpIHtcblx0XHRcdFx0aSA9IGxpc3QubGVuZ3RoO1xuXHRcdFx0XHR3aGlsZSAoLS1pID4gLTEpIHtcblx0XHRcdFx0XHRpZiAobGlzdFtpXS5jID09PSBjYWxsYmFjaykge1xuXHRcdFx0XHRcdFx0bGlzdC5zcGxpY2UoaSwgMSk7XG5cdFx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fTtcblxuXHRcdHAuZGlzcGF0Y2hFdmVudCA9IGZ1bmN0aW9uKHR5cGUpIHtcblx0XHRcdHZhciBsaXN0ID0gdGhpcy5fbGlzdGVuZXJzW3R5cGVdLFxuXHRcdFx0XHRpLCB0LCBsaXN0ZW5lcjtcblx0XHRcdGlmIChsaXN0KSB7XG5cdFx0XHRcdGkgPSBsaXN0Lmxlbmd0aDtcblx0XHRcdFx0aWYgKGkgPiAxKSB7IFxuXHRcdFx0XHRcdGxpc3QgPSBsaXN0LnNsaWNlKDApOyAvL2luIGNhc2UgYWRkRXZlbnRMaXN0ZW5lcigpIGlzIGNhbGxlZCBmcm9tIHdpdGhpbiBhIGxpc3RlbmVyL2NhbGxiYWNrIChvdGhlcndpc2UgdGhlIGluZGV4IGNvdWxkIGNoYW5nZSwgcmVzdWx0aW5nIGluIGEgc2tpcClcblx0XHRcdFx0fVxuXHRcdFx0XHR0ID0gdGhpcy5fZXZlbnRUYXJnZXQ7XG5cdFx0XHRcdHdoaWxlICgtLWkgPiAtMSkge1xuXHRcdFx0XHRcdGxpc3RlbmVyID0gbGlzdFtpXTtcblx0XHRcdFx0XHRpZiAobGlzdGVuZXIpIHtcblx0XHRcdFx0XHRcdGlmIChsaXN0ZW5lci51cCkge1xuXHRcdFx0XHRcdFx0XHRsaXN0ZW5lci5jLmNhbGwobGlzdGVuZXIucyB8fCB0LCB7dHlwZTp0eXBlLCB0YXJnZXQ6dH0pO1xuXHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0bGlzdGVuZXIuYy5jYWxsKGxpc3RlbmVyLnMgfHwgdCk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fTtcblxuXG4vKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogVGlja2VyXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cbiBcdFx0dmFyIF9yZXFBbmltRnJhbWUgPSB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lLFxuXHRcdFx0X2NhbmNlbEFuaW1GcmFtZSA9IHdpbmRvdy5jYW5jZWxBbmltYXRpb25GcmFtZSxcblx0XHRcdF9nZXRUaW1lID0gRGF0ZS5ub3cgfHwgZnVuY3Rpb24oKSB7cmV0dXJuIG5ldyBEYXRlKCkuZ2V0VGltZSgpO30sXG5cdFx0XHRfbGFzdFVwZGF0ZSA9IF9nZXRUaW1lKCk7XG5cblx0XHQvL25vdyB0cnkgdG8gZGV0ZXJtaW5lIHRoZSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUgYW5kIGNhbmNlbEFuaW1hdGlvbkZyYW1lIGZ1bmN0aW9ucyBhbmQgaWYgbm9uZSBhcmUgZm91bmQsIHdlJ2xsIHVzZSBhIHNldFRpbWVvdXQoKS9jbGVhclRpbWVvdXQoKSBwb2x5ZmlsbC5cblx0XHRhID0gW1wibXNcIixcIm1velwiLFwid2Via2l0XCIsXCJvXCJdO1xuXHRcdGkgPSBhLmxlbmd0aDtcblx0XHR3aGlsZSAoLS1pID4gLTEgJiYgIV9yZXFBbmltRnJhbWUpIHtcblx0XHRcdF9yZXFBbmltRnJhbWUgPSB3aW5kb3dbYVtpXSArIFwiUmVxdWVzdEFuaW1hdGlvbkZyYW1lXCJdO1xuXHRcdFx0X2NhbmNlbEFuaW1GcmFtZSA9IHdpbmRvd1thW2ldICsgXCJDYW5jZWxBbmltYXRpb25GcmFtZVwiXSB8fCB3aW5kb3dbYVtpXSArIFwiQ2FuY2VsUmVxdWVzdEFuaW1hdGlvbkZyYW1lXCJdO1xuXHRcdH1cblxuXHRcdF9jbGFzcyhcIlRpY2tlclwiLCBmdW5jdGlvbihmcHMsIHVzZVJBRikge1xuXHRcdFx0dmFyIF9zZWxmID0gdGhpcyxcblx0XHRcdFx0X3N0YXJ0VGltZSA9IF9nZXRUaW1lKCksXG5cdFx0XHRcdF91c2VSQUYgPSAodXNlUkFGICE9PSBmYWxzZSAmJiBfcmVxQW5pbUZyYW1lKSA/IFwiYXV0b1wiIDogZmFsc2UsXG5cdFx0XHRcdF9sYWdUaHJlc2hvbGQgPSA1MDAsXG5cdFx0XHRcdF9hZGp1c3RlZExhZyA9IDMzLFxuXHRcdFx0XHRfdGlja1dvcmQgPSBcInRpY2tcIiwgLy9oZWxwcyByZWR1Y2UgZ2MgYnVyZGVuXG5cdFx0XHRcdF9mcHMsIF9yZXEsIF9pZCwgX2dhcCwgX25leHRUaW1lLFxuXHRcdFx0XHRfdGljayA9IGZ1bmN0aW9uKG1hbnVhbCkge1xuXHRcdFx0XHRcdHZhciBlbGFwc2VkID0gX2dldFRpbWUoKSAtIF9sYXN0VXBkYXRlLFxuXHRcdFx0XHRcdFx0b3ZlcmxhcCwgZGlzcGF0Y2g7XG5cdFx0XHRcdFx0aWYgKGVsYXBzZWQgPiBfbGFnVGhyZXNob2xkKSB7XG5cdFx0XHRcdFx0XHRfc3RhcnRUaW1lICs9IGVsYXBzZWQgLSBfYWRqdXN0ZWRMYWc7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdF9sYXN0VXBkYXRlICs9IGVsYXBzZWQ7XG5cdFx0XHRcdFx0X3NlbGYudGltZSA9IChfbGFzdFVwZGF0ZSAtIF9zdGFydFRpbWUpIC8gMTAwMDtcblx0XHRcdFx0XHRvdmVybGFwID0gX3NlbGYudGltZSAtIF9uZXh0VGltZTtcblx0XHRcdFx0XHRpZiAoIV9mcHMgfHwgb3ZlcmxhcCA+IDAgfHwgbWFudWFsID09PSB0cnVlKSB7XG5cdFx0XHRcdFx0XHRfc2VsZi5mcmFtZSsrO1xuXHRcdFx0XHRcdFx0X25leHRUaW1lICs9IG92ZXJsYXAgKyAob3ZlcmxhcCA+PSBfZ2FwID8gMC4wMDQgOiBfZ2FwIC0gb3ZlcmxhcCk7XG5cdFx0XHRcdFx0XHRkaXNwYXRjaCA9IHRydWU7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGlmIChtYW51YWwgIT09IHRydWUpIHsgLy9tYWtlIHN1cmUgdGhlIHJlcXVlc3QgaXMgbWFkZSBiZWZvcmUgd2UgZGlzcGF0Y2ggdGhlIFwidGlja1wiIGV2ZW50IHNvIHRoYXQgdGltaW5nIGlzIG1haW50YWluZWQuIE90aGVyd2lzZSwgaWYgcHJvY2Vzc2luZyB0aGUgXCJ0aWNrXCIgcmVxdWlyZXMgYSBidW5jaCBvZiB0aW1lIChsaWtlIDE1bXMpIGFuZCB3ZSdyZSB1c2luZyBhIHNldFRpbWVvdXQoKSB0aGF0J3MgYmFzZWQgb24gMTYuN21zLCBpdCdkIHRlY2huaWNhbGx5IHRha2UgMzEuN21zIGJldHdlZW4gZnJhbWVzIG90aGVyd2lzZS5cblx0XHRcdFx0XHRcdF9pZCA9IF9yZXEoX3RpY2spO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRpZiAoZGlzcGF0Y2gpIHtcblx0XHRcdFx0XHRcdF9zZWxmLmRpc3BhdGNoRXZlbnQoX3RpY2tXb3JkKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH07XG5cblx0XHRcdEV2ZW50RGlzcGF0Y2hlci5jYWxsKF9zZWxmKTtcblx0XHRcdF9zZWxmLnRpbWUgPSBfc2VsZi5mcmFtZSA9IDA7XG5cdFx0XHRfc2VsZi50aWNrID0gZnVuY3Rpb24oKSB7XG5cdFx0XHRcdF90aWNrKHRydWUpO1xuXHRcdFx0fTtcblxuXHRcdFx0X3NlbGYubGFnU21vb3RoaW5nID0gZnVuY3Rpb24odGhyZXNob2xkLCBhZGp1c3RlZExhZykge1xuXHRcdFx0XHRpZiAoIWFyZ3VtZW50cy5sZW5ndGgpIHsgLy9pZiBsYWdTbW9vdGhpbmcoKSBpcyBjYWxsZWQgd2l0aCBubyBhcmd1bWVudHMsIHRyZWF0IGl0IGxpa2UgYSBnZXR0ZXIgdGhhdCByZXR1cm5zIGEgYm9vbGVhbiBpbmRpY2F0aW5nIGlmIGl0J3MgZW5hYmxlZCBvciBub3QuIFRoaXMgaXMgcHVycG9zZWx5IHVuZG9jdW1lbnRlZCBhbmQgaXMgZm9yIGludGVybmFsIHVzZS5cblx0XHRcdFx0XHRyZXR1cm4gKF9sYWdUaHJlc2hvbGQgPCAxIC8gX3RpbnlOdW0pO1xuXHRcdFx0XHR9XG5cdFx0XHRcdF9sYWdUaHJlc2hvbGQgPSB0aHJlc2hvbGQgfHwgKDEgLyBfdGlueU51bSk7IC8vemVybyBzaG91bGQgYmUgaW50ZXJwcmV0ZWQgYXMgYmFzaWNhbGx5IHVubGltaXRlZFxuXHRcdFx0XHRfYWRqdXN0ZWRMYWcgPSBNYXRoLm1pbihhZGp1c3RlZExhZywgX2xhZ1RocmVzaG9sZCwgMCk7XG5cdFx0XHR9O1xuXG5cdFx0XHRfc2VsZi5zbGVlcCA9IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRpZiAoX2lkID09IG51bGwpIHtcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKCFfdXNlUkFGIHx8ICFfY2FuY2VsQW5pbUZyYW1lKSB7XG5cdFx0XHRcdFx0Y2xlYXJUaW1lb3V0KF9pZCk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0X2NhbmNlbEFuaW1GcmFtZShfaWQpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdF9yZXEgPSBfZW1wdHlGdW5jO1xuXHRcdFx0XHRfaWQgPSBudWxsO1xuXHRcdFx0XHRpZiAoX3NlbGYgPT09IF90aWNrZXIpIHtcblx0XHRcdFx0XHRfdGlja2VyQWN0aXZlID0gZmFsc2U7XG5cdFx0XHRcdH1cblx0XHRcdH07XG5cblx0XHRcdF9zZWxmLndha2UgPSBmdW5jdGlvbihzZWFtbGVzcykge1xuXHRcdFx0XHRpZiAoX2lkICE9PSBudWxsKSB7XG5cdFx0XHRcdFx0X3NlbGYuc2xlZXAoKTtcblx0XHRcdFx0fSBlbHNlIGlmIChzZWFtbGVzcykge1xuXHRcdFx0XHRcdF9zdGFydFRpbWUgKz0gLV9sYXN0VXBkYXRlICsgKF9sYXN0VXBkYXRlID0gX2dldFRpbWUoKSk7XG5cdFx0XHRcdH0gZWxzZSBpZiAoX3NlbGYuZnJhbWUgPiAxMCkgeyAvL2Rvbid0IHRyaWdnZXIgbGFnU21vb3RoaW5nIGlmIHdlJ3JlIGp1c3Qgd2FraW5nIHVwLCBhbmQgbWFrZSBzdXJlIHRoYXQgYXQgbGVhc3QgMTAgZnJhbWVzIGhhdmUgZWxhcHNlZCBiZWNhdXNlIG9mIHRoZSBpT1MgYnVnIHRoYXQgd2Ugd29yayBhcm91bmQgYmVsb3cgd2l0aCB0aGUgMS41LXNlY29uZCBzZXRUaW1vdXQoKS5cblx0XHRcdFx0XHRfbGFzdFVwZGF0ZSA9IF9nZXRUaW1lKCkgLSBfbGFnVGhyZXNob2xkICsgNTtcblx0XHRcdFx0fVxuXHRcdFx0XHRfcmVxID0gKF9mcHMgPT09IDApID8gX2VtcHR5RnVuYyA6ICghX3VzZVJBRiB8fCAhX3JlcUFuaW1GcmFtZSkgPyBmdW5jdGlvbihmKSB7IHJldHVybiBzZXRUaW1lb3V0KGYsICgoX25leHRUaW1lIC0gX3NlbGYudGltZSkgKiAxMDAwICsgMSkgfCAwKTsgfSA6IF9yZXFBbmltRnJhbWU7XG5cdFx0XHRcdGlmIChfc2VsZiA9PT0gX3RpY2tlcikge1xuXHRcdFx0XHRcdF90aWNrZXJBY3RpdmUgPSB0cnVlO1xuXHRcdFx0XHR9XG5cdFx0XHRcdF90aWNrKDIpO1xuXHRcdFx0fTtcblxuXHRcdFx0X3NlbGYuZnBzID0gZnVuY3Rpb24odmFsdWUpIHtcblx0XHRcdFx0aWYgKCFhcmd1bWVudHMubGVuZ3RoKSB7XG5cdFx0XHRcdFx0cmV0dXJuIF9mcHM7XG5cdFx0XHRcdH1cblx0XHRcdFx0X2ZwcyA9IHZhbHVlO1xuXHRcdFx0XHRfZ2FwID0gMSAvIChfZnBzIHx8IDYwKTtcblx0XHRcdFx0X25leHRUaW1lID0gdGhpcy50aW1lICsgX2dhcDtcblx0XHRcdFx0X3NlbGYud2FrZSgpO1xuXHRcdFx0fTtcblxuXHRcdFx0X3NlbGYudXNlUkFGID0gZnVuY3Rpb24odmFsdWUpIHtcblx0XHRcdFx0aWYgKCFhcmd1bWVudHMubGVuZ3RoKSB7XG5cdFx0XHRcdFx0cmV0dXJuIF91c2VSQUY7XG5cdFx0XHRcdH1cblx0XHRcdFx0X3NlbGYuc2xlZXAoKTtcblx0XHRcdFx0X3VzZVJBRiA9IHZhbHVlO1xuXHRcdFx0XHRfc2VsZi5mcHMoX2Zwcyk7XG5cdFx0XHR9O1xuXHRcdFx0X3NlbGYuZnBzKGZwcyk7XG5cblx0XHRcdC8vYSBidWcgaW4gaU9TIDYgU2FmYXJpIG9jY2FzaW9uYWxseSBwcmV2ZW50cyB0aGUgcmVxdWVzdEFuaW1hdGlvbkZyYW1lIGZyb20gd29ya2luZyBpbml0aWFsbHksIHNvIHdlIHVzZSBhIDEuNS1zZWNvbmQgdGltZW91dCB0aGF0IGF1dG9tYXRpY2FsbHkgZmFsbHMgYmFjayB0byBzZXRUaW1lb3V0KCkgaWYgaXQgc2Vuc2VzIHRoaXMgY29uZGl0aW9uLlxuXHRcdFx0c2V0VGltZW91dChmdW5jdGlvbigpIHtcblx0XHRcdFx0aWYgKF91c2VSQUYgPT09IFwiYXV0b1wiICYmIF9zZWxmLmZyYW1lIDwgNSAmJiAoX2RvYyB8fCB7fSkudmlzaWJpbGl0eVN0YXRlICE9PSBcImhpZGRlblwiKSB7XG5cdFx0XHRcdFx0X3NlbGYudXNlUkFGKGZhbHNlKTtcblx0XHRcdFx0fVxuXHRcdFx0fSwgMTUwMCk7XG5cdFx0fSk7XG5cblx0XHRwID0gZ3MuVGlja2VyLnByb3RvdHlwZSA9IG5ldyBncy5ldmVudHMuRXZlbnREaXNwYXRjaGVyKCk7XG5cdFx0cC5jb25zdHJ1Y3RvciA9IGdzLlRpY2tlcjtcblxuXG4vKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQW5pbWF0aW9uXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblx0XHR2YXIgQW5pbWF0aW9uID0gX2NsYXNzKFwiY29yZS5BbmltYXRpb25cIiwgZnVuY3Rpb24oZHVyYXRpb24sIHZhcnMpIHtcblx0XHRcdFx0dGhpcy52YXJzID0gdmFycyA9IHZhcnMgfHwge307XG5cdFx0XHRcdHRoaXMuX2R1cmF0aW9uID0gdGhpcy5fdG90YWxEdXJhdGlvbiA9IGR1cmF0aW9uIHx8IDA7XG5cdFx0XHRcdHRoaXMuX2RlbGF5ID0gTnVtYmVyKHZhcnMuZGVsYXkpIHx8IDA7XG5cdFx0XHRcdHRoaXMuX3RpbWVTY2FsZSA9IDE7XG5cdFx0XHRcdHRoaXMuX2FjdGl2ZSA9ICh2YXJzLmltbWVkaWF0ZVJlbmRlciA9PT0gdHJ1ZSk7XG5cdFx0XHRcdHRoaXMuZGF0YSA9IHZhcnMuZGF0YTtcblx0XHRcdFx0dGhpcy5fcmV2ZXJzZWQgPSAodmFycy5yZXZlcnNlZCA9PT0gdHJ1ZSk7XG5cblx0XHRcdFx0aWYgKCFfcm9vdFRpbWVsaW5lKSB7XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmICghX3RpY2tlckFjdGl2ZSkgeyAvL3NvbWUgYnJvd3NlcnMgKGxpa2UgaU9TIDYgU2FmYXJpKSBzaHV0IGRvd24gSmF2YVNjcmlwdCBleGVjdXRpb24gd2hlbiB0aGUgdGFiIGlzIGRpc2FibGVkIGFuZCB0aGV5IFtvY2Nhc2lvbmFsbHldIG5lZ2xlY3QgdG8gc3RhcnQgdXAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lIGFnYWluIHdoZW4gcmV0dXJuaW5nIC0gdGhpcyBjb2RlIGVuc3VyZXMgdGhhdCB0aGUgZW5naW5lIHN0YXJ0cyB1cCBhZ2FpbiBwcm9wZXJseS5cblx0XHRcdFx0XHRfdGlja2VyLndha2UoKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHZhciB0bCA9IHRoaXMudmFycy51c2VGcmFtZXMgPyBfcm9vdEZyYW1lc1RpbWVsaW5lIDogX3Jvb3RUaW1lbGluZTtcblx0XHRcdFx0dGwuYWRkKHRoaXMsIHRsLl90aW1lKTtcblxuXHRcdFx0XHRpZiAodGhpcy52YXJzLnBhdXNlZCkge1xuXHRcdFx0XHRcdHRoaXMucGF1c2VkKHRydWUpO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblxuXHRcdF90aWNrZXIgPSBBbmltYXRpb24udGlja2VyID0gbmV3IGdzLlRpY2tlcigpO1xuXHRcdHAgPSBBbmltYXRpb24ucHJvdG90eXBlO1xuXHRcdHAuX2RpcnR5ID0gcC5fZ2MgPSBwLl9pbml0dGVkID0gcC5fcGF1c2VkID0gZmFsc2U7XG5cdFx0cC5fdG90YWxUaW1lID0gcC5fdGltZSA9IDA7XG5cdFx0cC5fcmF3UHJldlRpbWUgPSAtMTtcblx0XHRwLl9uZXh0ID0gcC5fbGFzdCA9IHAuX29uVXBkYXRlID0gcC5fdGltZWxpbmUgPSBwLnRpbWVsaW5lID0gbnVsbDtcblx0XHRwLl9wYXVzZWQgPSBmYWxzZTtcblxuXG5cdFx0Ly9zb21lIGJyb3dzZXJzIChsaWtlIGlPUykgb2NjYXNpb25hbGx5IGRyb3AgdGhlIHJlcXVlc3RBbmltYXRpb25GcmFtZSBldmVudCB3aGVuIHRoZSB1c2VyIHN3aXRjaGVzIHRvIGEgZGlmZmVyZW50IHRhYiBhbmQgdGhlbiBjb21lcyBiYWNrIGFnYWluLCBzbyB3ZSB1c2UgYSAyLXNlY29uZCBzZXRUaW1lb3V0KCkgdG8gc2Vuc2UgaWYvd2hlbiB0aGF0IGNvbmRpdGlvbiBvY2N1cnMgYW5kIHRoZW4gd2FrZSgpIHRoZSB0aWNrZXIuXG5cdFx0dmFyIF9jaGVja1RpbWVvdXQgPSBmdW5jdGlvbigpIHtcblx0XHRcdFx0aWYgKF90aWNrZXJBY3RpdmUgJiYgX2dldFRpbWUoKSAtIF9sYXN0VXBkYXRlID4gMjAwMCAmJiAoKF9kb2MgfHwge30pLnZpc2liaWxpdHlTdGF0ZSAhPT0gXCJoaWRkZW5cIiB8fCAhX3RpY2tlci5sYWdTbW9vdGhpbmcoKSkpIHsgLy9ub3RlOiBpZiB0aGUgdGFiIGlzIGhpZGRlbiwgd2Ugc2hvdWxkIHN0aWxsIHdha2UgaWYgbGFnU21vb3RoaW5nIGhhcyBiZWVuIGRpc2FibGVkLlxuXHRcdFx0XHRcdF90aWNrZXIud2FrZSgpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHZhciB0ID0gc2V0VGltZW91dChfY2hlY2tUaW1lb3V0LCAyMDAwKTtcblx0XHRcdFx0aWYgKHQudW5yZWYpIHtcblx0XHRcdFx0XHQvLyBhbGxvd3MgYSBub2RlIHByb2Nlc3MgdG8gZXhpdCBldmVuIGlmIHRoZSB0aW1lb3V04oCZcyBjYWxsYmFjayBoYXNuJ3QgYmVlbiBpbnZva2VkLiBXaXRob3V0IGl0LCB0aGUgbm9kZSBwcm9jZXNzIGNvdWxkIGhhbmcgYXMgdGhpcyBmdW5jdGlvbiBpcyBjYWxsZWQgZXZlcnkgdHdvIHNlY29uZHMuXG5cdFx0XHRcdFx0dC51bnJlZigpO1xuXHRcdFx0XHR9XG5cdFx0XHR9O1xuXHRcdF9jaGVja1RpbWVvdXQoKTtcblxuXG5cdFx0cC5wbGF5ID0gZnVuY3Rpb24oZnJvbSwgc3VwcHJlc3NFdmVudHMpIHtcblx0XHRcdGlmIChmcm9tICE9IG51bGwpIHtcblx0XHRcdFx0dGhpcy5zZWVrKGZyb20sIHN1cHByZXNzRXZlbnRzKTtcblx0XHRcdH1cblx0XHRcdHJldHVybiB0aGlzLnJldmVyc2VkKGZhbHNlKS5wYXVzZWQoZmFsc2UpO1xuXHRcdH07XG5cblx0XHRwLnBhdXNlID0gZnVuY3Rpb24oYXRUaW1lLCBzdXBwcmVzc0V2ZW50cykge1xuXHRcdFx0aWYgKGF0VGltZSAhPSBudWxsKSB7XG5cdFx0XHRcdHRoaXMuc2VlayhhdFRpbWUsIHN1cHByZXNzRXZlbnRzKTtcblx0XHRcdH1cblx0XHRcdHJldHVybiB0aGlzLnBhdXNlZCh0cnVlKTtcblx0XHR9O1xuXG5cdFx0cC5yZXN1bWUgPSBmdW5jdGlvbihmcm9tLCBzdXBwcmVzc0V2ZW50cykge1xuXHRcdFx0aWYgKGZyb20gIT0gbnVsbCkge1xuXHRcdFx0XHR0aGlzLnNlZWsoZnJvbSwgc3VwcHJlc3NFdmVudHMpO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIHRoaXMucGF1c2VkKGZhbHNlKTtcblx0XHR9O1xuXG5cdFx0cC5zZWVrID0gZnVuY3Rpb24odGltZSwgc3VwcHJlc3NFdmVudHMpIHtcblx0XHRcdHJldHVybiB0aGlzLnRvdGFsVGltZShOdW1iZXIodGltZSksIHN1cHByZXNzRXZlbnRzICE9PSBmYWxzZSk7XG5cdFx0fTtcblxuXHRcdHAucmVzdGFydCA9IGZ1bmN0aW9uKGluY2x1ZGVEZWxheSwgc3VwcHJlc3NFdmVudHMpIHtcblx0XHRcdHJldHVybiB0aGlzLnJldmVyc2VkKGZhbHNlKS5wYXVzZWQoZmFsc2UpLnRvdGFsVGltZShpbmNsdWRlRGVsYXkgPyAtdGhpcy5fZGVsYXkgOiAwLCAoc3VwcHJlc3NFdmVudHMgIT09IGZhbHNlKSwgdHJ1ZSk7XG5cdFx0fTtcblxuXHRcdHAucmV2ZXJzZSA9IGZ1bmN0aW9uKGZyb20sIHN1cHByZXNzRXZlbnRzKSB7XG5cdFx0XHRpZiAoZnJvbSAhPSBudWxsKSB7XG5cdFx0XHRcdHRoaXMuc2VlaygoZnJvbSB8fCB0aGlzLnRvdGFsRHVyYXRpb24oKSksIHN1cHByZXNzRXZlbnRzKTtcblx0XHRcdH1cblx0XHRcdHJldHVybiB0aGlzLnJldmVyc2VkKHRydWUpLnBhdXNlZChmYWxzZSk7XG5cdFx0fTtcblxuXHRcdHAucmVuZGVyID0gZnVuY3Rpb24odGltZSwgc3VwcHJlc3NFdmVudHMsIGZvcmNlKSB7XG5cdFx0XHQvL3N0dWIgLSB3ZSBvdmVycmlkZSB0aGlzIG1ldGhvZCBpbiBzdWJjbGFzc2VzLlxuXHRcdH07XG5cblx0XHRwLmludmFsaWRhdGUgPSBmdW5jdGlvbigpIHtcblx0XHRcdHRoaXMuX3RpbWUgPSB0aGlzLl90b3RhbFRpbWUgPSAwO1xuXHRcdFx0dGhpcy5faW5pdHRlZCA9IHRoaXMuX2djID0gZmFsc2U7XG5cdFx0XHR0aGlzLl9yYXdQcmV2VGltZSA9IC0xO1xuXHRcdFx0aWYgKHRoaXMuX2djIHx8ICF0aGlzLnRpbWVsaW5lKSB7XG5cdFx0XHRcdHRoaXMuX2VuYWJsZWQodHJ1ZSk7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gdGhpcztcblx0XHR9O1xuXG5cdFx0cC5pc0FjdGl2ZSA9IGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIHRsID0gdGhpcy5fdGltZWxpbmUsIC8vdGhlIDIgcm9vdCB0aW1lbGluZXMgd29uJ3QgaGF2ZSBhIF90aW1lbGluZTsgdGhleSdyZSBhbHdheXMgYWN0aXZlLlxuXHRcdFx0XHRzdGFydFRpbWUgPSB0aGlzLl9zdGFydFRpbWUsXG5cdFx0XHRcdHJhd1RpbWU7XG5cdFx0XHRyZXR1cm4gKCF0bCB8fCAoIXRoaXMuX2djICYmICF0aGlzLl9wYXVzZWQgJiYgdGwuaXNBY3RpdmUoKSAmJiAocmF3VGltZSA9IHRsLnJhd1RpbWUodHJ1ZSkpID49IHN0YXJ0VGltZSAmJiByYXdUaW1lIDwgc3RhcnRUaW1lICsgdGhpcy50b3RhbER1cmF0aW9uKCkgLyB0aGlzLl90aW1lU2NhbGUgLSAwLjAwMDAwMDEpKTtcblx0XHR9O1xuXG5cdFx0cC5fZW5hYmxlZCA9IGZ1bmN0aW9uIChlbmFibGVkLCBpZ25vcmVUaW1lbGluZSkge1xuXHRcdFx0aWYgKCFfdGlja2VyQWN0aXZlKSB7XG5cdFx0XHRcdF90aWNrZXIud2FrZSgpO1xuXHRcdFx0fVxuXHRcdFx0dGhpcy5fZ2MgPSAhZW5hYmxlZDtcblx0XHRcdHRoaXMuX2FjdGl2ZSA9IHRoaXMuaXNBY3RpdmUoKTtcblx0XHRcdGlmIChpZ25vcmVUaW1lbGluZSAhPT0gdHJ1ZSkge1xuXHRcdFx0XHRpZiAoZW5hYmxlZCAmJiAhdGhpcy50aW1lbGluZSkge1xuXHRcdFx0XHRcdHRoaXMuX3RpbWVsaW5lLmFkZCh0aGlzLCB0aGlzLl9zdGFydFRpbWUgLSB0aGlzLl9kZWxheSk7XG5cdFx0XHRcdH0gZWxzZSBpZiAoIWVuYWJsZWQgJiYgdGhpcy50aW1lbGluZSkge1xuXHRcdFx0XHRcdHRoaXMuX3RpbWVsaW5lLl9yZW1vdmUodGhpcywgdHJ1ZSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9O1xuXG5cblx0XHRwLl9raWxsID0gZnVuY3Rpb24odmFycywgdGFyZ2V0KSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5fZW5hYmxlZChmYWxzZSwgZmFsc2UpO1xuXHRcdH07XG5cblx0XHRwLmtpbGwgPSBmdW5jdGlvbih2YXJzLCB0YXJnZXQpIHtcblx0XHRcdHRoaXMuX2tpbGwodmFycywgdGFyZ2V0KTtcblx0XHRcdHJldHVybiB0aGlzO1xuXHRcdH07XG5cblx0XHRwLl91bmNhY2hlID0gZnVuY3Rpb24oaW5jbHVkZVNlbGYpIHtcblx0XHRcdHZhciB0d2VlbiA9IGluY2x1ZGVTZWxmID8gdGhpcyA6IHRoaXMudGltZWxpbmU7XG5cdFx0XHR3aGlsZSAodHdlZW4pIHtcblx0XHRcdFx0dHdlZW4uX2RpcnR5ID0gdHJ1ZTtcblx0XHRcdFx0dHdlZW4gPSB0d2Vlbi50aW1lbGluZTtcblx0XHRcdH1cblx0XHRcdHJldHVybiB0aGlzO1xuXHRcdH07XG5cblx0XHRwLl9zd2FwU2VsZkluUGFyYW1zID0gZnVuY3Rpb24ocGFyYW1zKSB7XG5cdFx0XHR2YXIgaSA9IHBhcmFtcy5sZW5ndGgsXG5cdFx0XHRcdGNvcHkgPSBwYXJhbXMuY29uY2F0KCk7XG5cdFx0XHR3aGlsZSAoLS1pID4gLTEpIHtcblx0XHRcdFx0aWYgKHBhcmFtc1tpXSA9PT0gXCJ7c2VsZn1cIikge1xuXHRcdFx0XHRcdGNvcHlbaV0gPSB0aGlzO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gY29weTtcblx0XHR9O1xuXG5cdFx0cC5fY2FsbGJhY2sgPSBmdW5jdGlvbih0eXBlKSB7XG5cdFx0XHR2YXIgdiA9IHRoaXMudmFycyxcblx0XHRcdFx0Y2FsbGJhY2sgPSB2W3R5cGVdLFxuXHRcdFx0XHRwYXJhbXMgPSB2W3R5cGUgKyBcIlBhcmFtc1wiXSxcblx0XHRcdFx0c2NvcGUgPSB2W3R5cGUgKyBcIlNjb3BlXCJdIHx8IHYuY2FsbGJhY2tTY29wZSB8fCB0aGlzLFxuXHRcdFx0XHRsID0gcGFyYW1zID8gcGFyYW1zLmxlbmd0aCA6IDA7XG5cdFx0XHRzd2l0Y2ggKGwpIHsgLy9zcGVlZCBvcHRpbWl6YXRpb247IGNhbGwoKSBpcyBmYXN0ZXIgdGhhbiBhcHBseSgpIHNvIHVzZSBpdCB3aGVuIHRoZXJlIGFyZSBvbmx5IGEgZmV3IHBhcmFtZXRlcnMgKHdoaWNoIGlzIGJ5IGZhciBtb3N0IGNvbW1vbikuIFByZXZpb3VzbHkgd2Ugc2ltcGx5IGRpZCB2YXIgdiA9IHRoaXMudmFyczsgdlt0eXBlXS5hcHBseSh2W3R5cGUgKyBcIlNjb3BlXCJdIHx8IHYuY2FsbGJhY2tTY29wZSB8fCB0aGlzLCB2W3R5cGUgKyBcIlBhcmFtc1wiXSB8fCBfYmxhbmtBcnJheSk7XG5cdFx0XHRcdGNhc2UgMDogY2FsbGJhY2suY2FsbChzY29wZSk7IGJyZWFrO1xuXHRcdFx0XHRjYXNlIDE6IGNhbGxiYWNrLmNhbGwoc2NvcGUsIHBhcmFtc1swXSk7IGJyZWFrO1xuXHRcdFx0XHRjYXNlIDI6IGNhbGxiYWNrLmNhbGwoc2NvcGUsIHBhcmFtc1swXSwgcGFyYW1zWzFdKTsgYnJlYWs7XG5cdFx0XHRcdGRlZmF1bHQ6IGNhbGxiYWNrLmFwcGx5KHNjb3BlLCBwYXJhbXMpO1xuXHRcdFx0fVxuXHRcdH07XG5cbi8vLS0tLUFuaW1hdGlvbiBnZXR0ZXJzL3NldHRlcnMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuXHRcdHAuZXZlbnRDYWxsYmFjayA9IGZ1bmN0aW9uKHR5cGUsIGNhbGxiYWNrLCBwYXJhbXMsIHNjb3BlKSB7XG5cdFx0XHRpZiAoKHR5cGUgfHwgXCJcIikuc3Vic3RyKDAsMikgPT09IFwib25cIikge1xuXHRcdFx0XHR2YXIgdiA9IHRoaXMudmFycztcblx0XHRcdFx0aWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDEpIHtcblx0XHRcdFx0XHRyZXR1cm4gdlt0eXBlXTtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoY2FsbGJhY2sgPT0gbnVsbCkge1xuXHRcdFx0XHRcdGRlbGV0ZSB2W3R5cGVdO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHZbdHlwZV0gPSBjYWxsYmFjaztcblx0XHRcdFx0XHR2W3R5cGUgKyBcIlBhcmFtc1wiXSA9IChfaXNBcnJheShwYXJhbXMpICYmIHBhcmFtcy5qb2luKFwiXCIpLmluZGV4T2YoXCJ7c2VsZn1cIikgIT09IC0xKSA/IHRoaXMuX3N3YXBTZWxmSW5QYXJhbXMocGFyYW1zKSA6IHBhcmFtcztcblx0XHRcdFx0XHR2W3R5cGUgKyBcIlNjb3BlXCJdID0gc2NvcGU7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKHR5cGUgPT09IFwib25VcGRhdGVcIikge1xuXHRcdFx0XHRcdHRoaXMuX29uVXBkYXRlID0gY2FsbGJhY2s7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdHJldHVybiB0aGlzO1xuXHRcdH07XG5cblx0XHRwLmRlbGF5ID0gZnVuY3Rpb24odmFsdWUpIHtcblx0XHRcdGlmICghYXJndW1lbnRzLmxlbmd0aCkge1xuXHRcdFx0XHRyZXR1cm4gdGhpcy5fZGVsYXk7XG5cdFx0XHR9XG5cdFx0XHRpZiAodGhpcy5fdGltZWxpbmUuc21vb3RoQ2hpbGRUaW1pbmcpIHtcblx0XHRcdFx0dGhpcy5zdGFydFRpbWUoIHRoaXMuX3N0YXJ0VGltZSArIHZhbHVlIC0gdGhpcy5fZGVsYXkgKTtcblx0XHRcdH1cblx0XHRcdHRoaXMuX2RlbGF5ID0gdmFsdWU7XG5cdFx0XHRyZXR1cm4gdGhpcztcblx0XHR9O1xuXG5cdFx0cC5kdXJhdGlvbiA9IGZ1bmN0aW9uKHZhbHVlKSB7XG5cdFx0XHRpZiAoIWFyZ3VtZW50cy5sZW5ndGgpIHtcblx0XHRcdFx0dGhpcy5fZGlydHkgPSBmYWxzZTtcblx0XHRcdFx0cmV0dXJuIHRoaXMuX2R1cmF0aW9uO1xuXHRcdFx0fVxuXHRcdFx0dGhpcy5fZHVyYXRpb24gPSB0aGlzLl90b3RhbER1cmF0aW9uID0gdmFsdWU7XG5cdFx0XHR0aGlzLl91bmNhY2hlKHRydWUpOyAvL3RydWUgaW4gY2FzZSBpdCdzIGEgVHdlZW5NYXggb3IgVGltZWxpbmVNYXggdGhhdCBoYXMgYSByZXBlYXQgLSB3ZSdsbCBuZWVkIHRvIHJlZnJlc2ggdGhlIHRvdGFsRHVyYXRpb24uXG5cdFx0XHRpZiAodGhpcy5fdGltZWxpbmUuc21vb3RoQ2hpbGRUaW1pbmcpIGlmICh0aGlzLl90aW1lID4gMCkgaWYgKHRoaXMuX3RpbWUgPCB0aGlzLl9kdXJhdGlvbikgaWYgKHZhbHVlICE9PSAwKSB7XG5cdFx0XHRcdHRoaXMudG90YWxUaW1lKHRoaXMuX3RvdGFsVGltZSAqICh2YWx1ZSAvIHRoaXMuX2R1cmF0aW9uKSwgdHJ1ZSk7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gdGhpcztcblx0XHR9O1xuXG5cdFx0cC50b3RhbER1cmF0aW9uID0gZnVuY3Rpb24odmFsdWUpIHtcblx0XHRcdHRoaXMuX2RpcnR5ID0gZmFsc2U7XG5cdFx0XHRyZXR1cm4gKCFhcmd1bWVudHMubGVuZ3RoKSA/IHRoaXMuX3RvdGFsRHVyYXRpb24gOiB0aGlzLmR1cmF0aW9uKHZhbHVlKTtcblx0XHR9O1xuXG5cdFx0cC50aW1lID0gZnVuY3Rpb24odmFsdWUsIHN1cHByZXNzRXZlbnRzKSB7XG5cdFx0XHRpZiAoIWFyZ3VtZW50cy5sZW5ndGgpIHtcblx0XHRcdFx0cmV0dXJuIHRoaXMuX3RpbWU7XG5cdFx0XHR9XG5cdFx0XHRpZiAodGhpcy5fZGlydHkpIHtcblx0XHRcdFx0dGhpcy50b3RhbER1cmF0aW9uKCk7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gdGhpcy50b3RhbFRpbWUoKHZhbHVlID4gdGhpcy5fZHVyYXRpb24pID8gdGhpcy5fZHVyYXRpb24gOiB2YWx1ZSwgc3VwcHJlc3NFdmVudHMpO1xuXHRcdH07XG5cblx0XHRwLnRvdGFsVGltZSA9IGZ1bmN0aW9uKHRpbWUsIHN1cHByZXNzRXZlbnRzLCB1bmNhcHBlZCkge1xuXHRcdFx0aWYgKCFfdGlja2VyQWN0aXZlKSB7XG5cdFx0XHRcdF90aWNrZXIud2FrZSgpO1xuXHRcdFx0fVxuXHRcdFx0aWYgKCFhcmd1bWVudHMubGVuZ3RoKSB7XG5cdFx0XHRcdHJldHVybiB0aGlzLl90b3RhbFRpbWU7XG5cdFx0XHR9XG5cdFx0XHRpZiAodGhpcy5fdGltZWxpbmUpIHtcblx0XHRcdFx0aWYgKHRpbWUgPCAwICYmICF1bmNhcHBlZCkge1xuXHRcdFx0XHRcdHRpbWUgKz0gdGhpcy50b3RhbER1cmF0aW9uKCk7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKHRoaXMuX3RpbWVsaW5lLnNtb290aENoaWxkVGltaW5nKSB7XG5cdFx0XHRcdFx0aWYgKHRoaXMuX2RpcnR5KSB7XG5cdFx0XHRcdFx0XHR0aGlzLnRvdGFsRHVyYXRpb24oKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0dmFyIHRvdGFsRHVyYXRpb24gPSB0aGlzLl90b3RhbER1cmF0aW9uLFxuXHRcdFx0XHRcdFx0dGwgPSB0aGlzLl90aW1lbGluZTtcblx0XHRcdFx0XHRpZiAodGltZSA+IHRvdGFsRHVyYXRpb24gJiYgIXVuY2FwcGVkKSB7XG5cdFx0XHRcdFx0XHR0aW1lID0gdG90YWxEdXJhdGlvbjtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0dGhpcy5fc3RhcnRUaW1lID0gKHRoaXMuX3BhdXNlZCA/IHRoaXMuX3BhdXNlVGltZSA6IHRsLl90aW1lKSAtICgoIXRoaXMuX3JldmVyc2VkID8gdGltZSA6IHRvdGFsRHVyYXRpb24gLSB0aW1lKSAvIHRoaXMuX3RpbWVTY2FsZSk7XG5cdFx0XHRcdFx0aWYgKCF0bC5fZGlydHkpIHsgLy9mb3IgcGVyZm9ybWFuY2UgaW1wcm92ZW1lbnQuIElmIHRoZSBwYXJlbnQncyBjYWNoZSBpcyBhbHJlYWR5IGRpcnR5LCBpdCBhbHJlYWR5IHRvb2sgY2FyZSBvZiBtYXJraW5nIHRoZSBhbmNlc3RvcnMgYXMgZGlydHkgdG9vLCBzbyBza2lwIHRoZSBmdW5jdGlvbiBjYWxsIGhlcmUuXG5cdFx0XHRcdFx0XHR0aGlzLl91bmNhY2hlKGZhbHNlKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0Ly9pbiBjYXNlIGFueSBvZiB0aGUgYW5jZXN0b3IgdGltZWxpbmVzIGhhZCBjb21wbGV0ZWQgYnV0IHNob3VsZCBub3cgYmUgZW5hYmxlZCwgd2Ugc2hvdWxkIHJlc2V0IHRoZWlyIHRvdGFsVGltZSgpIHdoaWNoIHdpbGwgYWxzbyBlbnN1cmUgdGhhdCB0aGV5J3JlIGxpbmVkIHVwIHByb3Blcmx5IGFuZCBlbmFibGVkLiBTa2lwIGZvciBhbmltYXRpb25zIHRoYXQgYXJlIG9uIHRoZSByb290ICh3YXN0ZWZ1bCkuIEV4YW1wbGU6IGEgVGltZWxpbmVMaXRlLmV4cG9ydFJvb3QoKSBpcyBwZXJmb3JtZWQgd2hlbiB0aGVyZSdzIGEgcGF1c2VkIHR3ZWVuIG9uIHRoZSByb290LCB0aGUgZXhwb3J0IHdpbGwgbm90IGNvbXBsZXRlIHVudGlsIHRoYXQgdHdlZW4gaXMgdW5wYXVzZWQsIGJ1dCBpbWFnaW5lIGEgY2hpbGQgZ2V0cyByZXN0YXJ0ZWQgbGF0ZXIsIGFmdGVyIGFsbCBbdW5wYXVzZWRdIHR3ZWVucyBoYXZlIGNvbXBsZXRlZC4gVGhlIHN0YXJ0VGltZSBvZiB0aGF0IGNoaWxkIHdvdWxkIGdldCBwdXNoZWQgb3V0LCBidXQgb25lIG9mIHRoZSBhbmNlc3RvcnMgbWF5IGhhdmUgY29tcGxldGVkLlxuXHRcdFx0XHRcdGlmICh0bC5fdGltZWxpbmUpIHtcblx0XHRcdFx0XHRcdHdoaWxlICh0bC5fdGltZWxpbmUpIHtcblx0XHRcdFx0XHRcdFx0aWYgKHRsLl90aW1lbGluZS5fdGltZSAhPT0gKHRsLl9zdGFydFRpbWUgKyB0bC5fdG90YWxUaW1lKSAvIHRsLl90aW1lU2NhbGUpIHtcblx0XHRcdFx0XHRcdFx0XHR0bC50b3RhbFRpbWUodGwuX3RvdGFsVGltZSwgdHJ1ZSk7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0dGwgPSB0bC5fdGltZWxpbmU7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRcdGlmICh0aGlzLl9nYykge1xuXHRcdFx0XHRcdHRoaXMuX2VuYWJsZWQodHJ1ZSwgZmFsc2UpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmICh0aGlzLl90b3RhbFRpbWUgIT09IHRpbWUgfHwgdGhpcy5fZHVyYXRpb24gPT09IDApIHtcblx0XHRcdFx0XHRpZiAoX2xhenlUd2VlbnMubGVuZ3RoKSB7XG5cdFx0XHRcdFx0XHRfbGF6eVJlbmRlcigpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHR0aGlzLnJlbmRlcih0aW1lLCBzdXBwcmVzc0V2ZW50cywgZmFsc2UpO1xuXHRcdFx0XHRcdGlmIChfbGF6eVR3ZWVucy5sZW5ndGgpIHsgLy9pbiBjYXNlIHJlbmRlcmluZyBjYXVzZWQgYW55IHR3ZWVucyB0byBsYXp5LWluaXQsIHdlIHNob3VsZCByZW5kZXIgdGhlbSBiZWNhdXNlIHR5cGljYWxseSB3aGVuIHNvbWVvbmUgY2FsbHMgc2VlaygpIG9yIHRpbWUoKSBvciBwcm9ncmVzcygpLCB0aGV5IGV4cGVjdCBhbiBpbW1lZGlhdGUgcmVuZGVyLlxuXHRcdFx0XHRcdFx0X2xhenlSZW5kZXIoKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdHJldHVybiB0aGlzO1xuXHRcdH07XG5cblx0XHRwLnByb2dyZXNzID0gcC50b3RhbFByb2dyZXNzID0gZnVuY3Rpb24odmFsdWUsIHN1cHByZXNzRXZlbnRzKSB7XG5cdFx0XHR2YXIgZHVyYXRpb24gPSB0aGlzLmR1cmF0aW9uKCk7XG5cdFx0XHRyZXR1cm4gKCFhcmd1bWVudHMubGVuZ3RoKSA/IChkdXJhdGlvbiA/IHRoaXMuX3RpbWUgLyBkdXJhdGlvbiA6IHRoaXMucmF0aW8pIDogdGhpcy50b3RhbFRpbWUoZHVyYXRpb24gKiB2YWx1ZSwgc3VwcHJlc3NFdmVudHMpO1xuXHRcdH07XG5cblx0XHRwLnN0YXJ0VGltZSA9IGZ1bmN0aW9uKHZhbHVlKSB7XG5cdFx0XHRpZiAoIWFyZ3VtZW50cy5sZW5ndGgpIHtcblx0XHRcdFx0cmV0dXJuIHRoaXMuX3N0YXJ0VGltZTtcblx0XHRcdH1cblx0XHRcdGlmICh2YWx1ZSAhPT0gdGhpcy5fc3RhcnRUaW1lKSB7XG5cdFx0XHRcdHRoaXMuX3N0YXJ0VGltZSA9IHZhbHVlO1xuXHRcdFx0XHRpZiAodGhpcy50aW1lbGluZSkgaWYgKHRoaXMudGltZWxpbmUuX3NvcnRDaGlsZHJlbikge1xuXHRcdFx0XHRcdHRoaXMudGltZWxpbmUuYWRkKHRoaXMsIHZhbHVlIC0gdGhpcy5fZGVsYXkpOyAvL2Vuc3VyZXMgdGhhdCBhbnkgbmVjZXNzYXJ5IHJlLXNlcXVlbmNpbmcgb2YgQW5pbWF0aW9ucyBpbiB0aGUgdGltZWxpbmUgb2NjdXJzIHRvIG1ha2Ugc3VyZSB0aGUgcmVuZGVyaW5nIG9yZGVyIGlzIGNvcnJlY3QuXG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdHJldHVybiB0aGlzO1xuXHRcdH07XG5cblx0XHRwLmVuZFRpbWUgPSBmdW5jdGlvbihpbmNsdWRlUmVwZWF0cykge1xuXHRcdFx0cmV0dXJuIHRoaXMuX3N0YXJ0VGltZSArICgoaW5jbHVkZVJlcGVhdHMgIT0gZmFsc2UpID8gdGhpcy50b3RhbER1cmF0aW9uKCkgOiB0aGlzLmR1cmF0aW9uKCkpIC8gdGhpcy5fdGltZVNjYWxlO1xuXHRcdH07XG5cblx0XHRwLnRpbWVTY2FsZSA9IGZ1bmN0aW9uKHZhbHVlKSB7XG5cdFx0XHRpZiAoIWFyZ3VtZW50cy5sZW5ndGgpIHtcblx0XHRcdFx0cmV0dXJuIHRoaXMuX3RpbWVTY2FsZTtcblx0XHRcdH1cblx0XHRcdHZhciBwYXVzZVRpbWUsIHQ7XG5cdFx0XHR2YWx1ZSA9IHZhbHVlIHx8IF90aW55TnVtOyAvL2Nhbid0IGFsbG93IHplcm8gYmVjYXVzZSBpdCdsbCB0aHJvdyB0aGUgbWF0aCBvZmZcblx0XHRcdGlmICh0aGlzLl90aW1lbGluZSAmJiB0aGlzLl90aW1lbGluZS5zbW9vdGhDaGlsZFRpbWluZykge1xuXHRcdFx0XHRwYXVzZVRpbWUgPSB0aGlzLl9wYXVzZVRpbWU7XG5cdFx0XHRcdHQgPSAocGF1c2VUaW1lIHx8IHBhdXNlVGltZSA9PT0gMCkgPyBwYXVzZVRpbWUgOiB0aGlzLl90aW1lbGluZS50b3RhbFRpbWUoKTtcblx0XHRcdFx0dGhpcy5fc3RhcnRUaW1lID0gdCAtICgodCAtIHRoaXMuX3N0YXJ0VGltZSkgKiB0aGlzLl90aW1lU2NhbGUgLyB2YWx1ZSk7XG5cdFx0XHR9XG5cdFx0XHR0aGlzLl90aW1lU2NhbGUgPSB2YWx1ZTtcblx0XHRcdHQgPSB0aGlzLnRpbWVsaW5lO1xuXHRcdFx0d2hpbGUgKHQgJiYgdC50aW1lbGluZSkgeyAvL211c3QgdXBkYXRlIHRoZSBkdXJhdGlvbi90b3RhbER1cmF0aW9uIG9mIGFsbCBhbmNlc3RvciB0aW1lbGluZXMgaW1tZWRpYXRlbHkgaW4gY2FzZSBpbiB0aGUgbWlkZGxlIG9mIGEgcmVuZGVyIGxvb3AsIG9uZSB0d2VlbiBhbHRlcnMgYW5vdGhlciB0d2VlbidzIHRpbWVTY2FsZSB3aGljaCBzaG92ZXMgaXRzIHN0YXJ0VGltZSBiZWZvcmUgMCwgZm9yY2luZyB0aGUgcGFyZW50IHRpbWVsaW5lIHRvIHNoaWZ0IGFyb3VuZCBhbmQgc2hpZnRDaGlsZHJlbigpIHdoaWNoIGNvdWxkIGFmZmVjdCB0aGF0IG5leHQgdHdlZW4ncyByZW5kZXIgKHN0YXJ0VGltZSkuIERvZXNuJ3QgbWF0dGVyIGZvciB0aGUgcm9vdCB0aW1lbGluZSB0aG91Z2guXG5cdFx0XHRcdHQuX2RpcnR5ID0gdHJ1ZTtcblx0XHRcdFx0dC50b3RhbER1cmF0aW9uKCk7XG5cdFx0XHRcdHQgPSB0LnRpbWVsaW5lO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0fTtcblxuXHRcdHAucmV2ZXJzZWQgPSBmdW5jdGlvbih2YWx1ZSkge1xuXHRcdFx0aWYgKCFhcmd1bWVudHMubGVuZ3RoKSB7XG5cdFx0XHRcdHJldHVybiB0aGlzLl9yZXZlcnNlZDtcblx0XHRcdH1cblx0XHRcdGlmICh2YWx1ZSAhPSB0aGlzLl9yZXZlcnNlZCkge1xuXHRcdFx0XHR0aGlzLl9yZXZlcnNlZCA9IHZhbHVlO1xuXHRcdFx0XHR0aGlzLnRvdGFsVGltZSgoKHRoaXMuX3RpbWVsaW5lICYmICF0aGlzLl90aW1lbGluZS5zbW9vdGhDaGlsZFRpbWluZykgPyB0aGlzLnRvdGFsRHVyYXRpb24oKSAtIHRoaXMuX3RvdGFsVGltZSA6IHRoaXMuX3RvdGFsVGltZSksIHRydWUpO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0fTtcblxuXHRcdHAucGF1c2VkID0gZnVuY3Rpb24odmFsdWUpIHtcblx0XHRcdGlmICghYXJndW1lbnRzLmxlbmd0aCkge1xuXHRcdFx0XHRyZXR1cm4gdGhpcy5fcGF1c2VkO1xuXHRcdFx0fVxuXHRcdFx0dmFyIHRsID0gdGhpcy5fdGltZWxpbmUsXG5cdFx0XHRcdHJhdywgZWxhcHNlZDtcblx0XHRcdGlmICh2YWx1ZSAhPSB0aGlzLl9wYXVzZWQpIGlmICh0bCkge1xuXHRcdFx0XHRpZiAoIV90aWNrZXJBY3RpdmUgJiYgIXZhbHVlKSB7XG5cdFx0XHRcdFx0X3RpY2tlci53YWtlKCk7XG5cdFx0XHRcdH1cblx0XHRcdFx0cmF3ID0gdGwucmF3VGltZSgpO1xuXHRcdFx0XHRlbGFwc2VkID0gcmF3IC0gdGhpcy5fcGF1c2VUaW1lO1xuXHRcdFx0XHRpZiAoIXZhbHVlICYmIHRsLnNtb290aENoaWxkVGltaW5nKSB7XG5cdFx0XHRcdFx0dGhpcy5fc3RhcnRUaW1lICs9IGVsYXBzZWQ7XG5cdFx0XHRcdFx0dGhpcy5fdW5jYWNoZShmYWxzZSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0dGhpcy5fcGF1c2VUaW1lID0gdmFsdWUgPyByYXcgOiBudWxsO1xuXHRcdFx0XHR0aGlzLl9wYXVzZWQgPSB2YWx1ZTtcblx0XHRcdFx0dGhpcy5fYWN0aXZlID0gdGhpcy5pc0FjdGl2ZSgpO1xuXHRcdFx0XHRpZiAoIXZhbHVlICYmIGVsYXBzZWQgIT09IDAgJiYgdGhpcy5faW5pdHRlZCAmJiB0aGlzLmR1cmF0aW9uKCkpIHtcblx0XHRcdFx0XHRyYXcgPSB0bC5zbW9vdGhDaGlsZFRpbWluZyA/IHRoaXMuX3RvdGFsVGltZSA6IChyYXcgLSB0aGlzLl9zdGFydFRpbWUpIC8gdGhpcy5fdGltZVNjYWxlO1xuXHRcdFx0XHRcdHRoaXMucmVuZGVyKHJhdywgKHJhdyA9PT0gdGhpcy5fdG90YWxUaW1lKSwgdHJ1ZSk7IC8vaW4gY2FzZSB0aGUgdGFyZ2V0J3MgcHJvcGVydGllcyBjaGFuZ2VkIHZpYSBzb21lIG90aGVyIHR3ZWVuIG9yIG1hbnVhbCB1cGRhdGUgYnkgdGhlIHVzZXIsIHdlIHNob3VsZCBmb3JjZSBhIHJlbmRlci5cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0aWYgKHRoaXMuX2djICYmICF2YWx1ZSkge1xuXHRcdFx0XHR0aGlzLl9lbmFibGVkKHRydWUsIGZhbHNlKTtcblx0XHRcdH1cblx0XHRcdHJldHVybiB0aGlzO1xuXHRcdH07XG5cblxuLypcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIFNpbXBsZVRpbWVsaW5lXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblx0XHR2YXIgU2ltcGxlVGltZWxpbmUgPSBfY2xhc3MoXCJjb3JlLlNpbXBsZVRpbWVsaW5lXCIsIGZ1bmN0aW9uKHZhcnMpIHtcblx0XHRcdEFuaW1hdGlvbi5jYWxsKHRoaXMsIDAsIHZhcnMpO1xuXHRcdFx0dGhpcy5hdXRvUmVtb3ZlQ2hpbGRyZW4gPSB0aGlzLnNtb290aENoaWxkVGltaW5nID0gdHJ1ZTtcblx0XHR9KTtcblxuXHRcdHAgPSBTaW1wbGVUaW1lbGluZS5wcm90b3R5cGUgPSBuZXcgQW5pbWF0aW9uKCk7XG5cdFx0cC5jb25zdHJ1Y3RvciA9IFNpbXBsZVRpbWVsaW5lO1xuXHRcdHAua2lsbCgpLl9nYyA9IGZhbHNlO1xuXHRcdHAuX2ZpcnN0ID0gcC5fbGFzdCA9IHAuX3JlY2VudCA9IG51bGw7XG5cdFx0cC5fc29ydENoaWxkcmVuID0gZmFsc2U7XG5cblx0XHRwLmFkZCA9IHAuaW5zZXJ0ID0gZnVuY3Rpb24oY2hpbGQsIHBvc2l0aW9uLCBhbGlnbiwgc3RhZ2dlcikge1xuXHRcdFx0dmFyIHByZXZUd2Vlbiwgc3Q7XG5cdFx0XHRjaGlsZC5fc3RhcnRUaW1lID0gTnVtYmVyKHBvc2l0aW9uIHx8IDApICsgY2hpbGQuX2RlbGF5O1xuXHRcdFx0aWYgKGNoaWxkLl9wYXVzZWQpIGlmICh0aGlzICE9PSBjaGlsZC5fdGltZWxpbmUpIHsgLy93ZSBvbmx5IGFkanVzdCB0aGUgX3BhdXNlVGltZSBpZiBpdCB3YXNuJ3QgaW4gdGhpcyB0aW1lbGluZSBhbHJlYWR5LiBSZW1lbWJlciwgc29tZXRpbWVzIGEgdHdlZW4gd2lsbCBiZSBpbnNlcnRlZCBhZ2FpbiBpbnRvIHRoZSBzYW1lIHRpbWVsaW5lIHdoZW4gaXRzIHN0YXJ0VGltZSBpcyBjaGFuZ2VkIHNvIHRoYXQgdGhlIHR3ZWVucyBpbiB0aGUgVGltZWxpbmVMaXRlL01heCBhcmUgcmUtb3JkZXJlZCBwcm9wZXJseSBpbiB0aGUgbGlua2VkIGxpc3QgKHNvIGV2ZXJ5dGhpbmcgcmVuZGVycyBpbiB0aGUgcHJvcGVyIG9yZGVyKS5cblx0XHRcdFx0Y2hpbGQuX3BhdXNlVGltZSA9IHRoaXMucmF3VGltZSgpIC0gKGNoaWxkLl90aW1lbGluZS5yYXdUaW1lKCkgLSBjaGlsZC5fcGF1c2VUaW1lKTtcblx0XHRcdH1cblx0XHRcdGlmIChjaGlsZC50aW1lbGluZSkge1xuXHRcdFx0XHRjaGlsZC50aW1lbGluZS5fcmVtb3ZlKGNoaWxkLCB0cnVlKTsgLy9yZW1vdmVzIGZyb20gZXhpc3RpbmcgdGltZWxpbmUgc28gdGhhdCBpdCBjYW4gYmUgcHJvcGVybHkgYWRkZWQgdG8gdGhpcyBvbmUuXG5cdFx0XHR9XG5cdFx0XHRjaGlsZC50aW1lbGluZSA9IGNoaWxkLl90aW1lbGluZSA9IHRoaXM7XG5cdFx0XHRpZiAoY2hpbGQuX2djKSB7XG5cdFx0XHRcdGNoaWxkLl9lbmFibGVkKHRydWUsIHRydWUpO1xuXHRcdFx0fVxuXHRcdFx0cHJldlR3ZWVuID0gdGhpcy5fbGFzdDtcblx0XHRcdGlmICh0aGlzLl9zb3J0Q2hpbGRyZW4pIHtcblx0XHRcdFx0c3QgPSBjaGlsZC5fc3RhcnRUaW1lO1xuXHRcdFx0XHR3aGlsZSAocHJldlR3ZWVuICYmIHByZXZUd2Vlbi5fc3RhcnRUaW1lID4gc3QpIHtcblx0XHRcdFx0XHRwcmV2VHdlZW4gPSBwcmV2VHdlZW4uX3ByZXY7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdGlmIChwcmV2VHdlZW4pIHtcblx0XHRcdFx0Y2hpbGQuX25leHQgPSBwcmV2VHdlZW4uX25leHQ7XG5cdFx0XHRcdHByZXZUd2Vlbi5fbmV4dCA9IGNoaWxkO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Y2hpbGQuX25leHQgPSB0aGlzLl9maXJzdDtcblx0XHRcdFx0dGhpcy5fZmlyc3QgPSBjaGlsZDtcblx0XHRcdH1cblx0XHRcdGlmIChjaGlsZC5fbmV4dCkge1xuXHRcdFx0XHRjaGlsZC5fbmV4dC5fcHJldiA9IGNoaWxkO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGhpcy5fbGFzdCA9IGNoaWxkO1xuXHRcdFx0fVxuXHRcdFx0Y2hpbGQuX3ByZXYgPSBwcmV2VHdlZW47XG5cdFx0XHR0aGlzLl9yZWNlbnQgPSBjaGlsZDtcblx0XHRcdGlmICh0aGlzLl90aW1lbGluZSkge1xuXHRcdFx0XHR0aGlzLl91bmNhY2hlKHRydWUpO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0fTtcblxuXHRcdHAuX3JlbW92ZSA9IGZ1bmN0aW9uKHR3ZWVuLCBza2lwRGlzYWJsZSkge1xuXHRcdFx0aWYgKHR3ZWVuLnRpbWVsaW5lID09PSB0aGlzKSB7XG5cdFx0XHRcdGlmICghc2tpcERpc2FibGUpIHtcblx0XHRcdFx0XHR0d2Vlbi5fZW5hYmxlZChmYWxzZSwgdHJ1ZSk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpZiAodHdlZW4uX3ByZXYpIHtcblx0XHRcdFx0XHR0d2Vlbi5fcHJldi5fbmV4dCA9IHR3ZWVuLl9uZXh0O1xuXHRcdFx0XHR9IGVsc2UgaWYgKHRoaXMuX2ZpcnN0ID09PSB0d2Vlbikge1xuXHRcdFx0XHRcdHRoaXMuX2ZpcnN0ID0gdHdlZW4uX25leHQ7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKHR3ZWVuLl9uZXh0KSB7XG5cdFx0XHRcdFx0dHdlZW4uX25leHQuX3ByZXYgPSB0d2Vlbi5fcHJldjtcblx0XHRcdFx0fSBlbHNlIGlmICh0aGlzLl9sYXN0ID09PSB0d2Vlbikge1xuXHRcdFx0XHRcdHRoaXMuX2xhc3QgPSB0d2Vlbi5fcHJldjtcblx0XHRcdFx0fVxuXHRcdFx0XHR0d2Vlbi5fbmV4dCA9IHR3ZWVuLl9wcmV2ID0gdHdlZW4udGltZWxpbmUgPSBudWxsO1xuXHRcdFx0XHRpZiAodHdlZW4gPT09IHRoaXMuX3JlY2VudCkge1xuXHRcdFx0XHRcdHRoaXMuX3JlY2VudCA9IHRoaXMuX2xhc3Q7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpZiAodGhpcy5fdGltZWxpbmUpIHtcblx0XHRcdFx0XHR0aGlzLl91bmNhY2hlKHRydWUpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gdGhpcztcblx0XHR9O1xuXG5cdFx0cC5yZW5kZXIgPSBmdW5jdGlvbih0aW1lLCBzdXBwcmVzc0V2ZW50cywgZm9yY2UpIHtcblx0XHRcdHZhciB0d2VlbiA9IHRoaXMuX2ZpcnN0LFxuXHRcdFx0XHRuZXh0O1xuXHRcdFx0dGhpcy5fdG90YWxUaW1lID0gdGhpcy5fdGltZSA9IHRoaXMuX3Jhd1ByZXZUaW1lID0gdGltZTtcblx0XHRcdHdoaWxlICh0d2Vlbikge1xuXHRcdFx0XHRuZXh0ID0gdHdlZW4uX25leHQ7IC8vcmVjb3JkIGl0IGhlcmUgYmVjYXVzZSB0aGUgdmFsdWUgY291bGQgY2hhbmdlIGFmdGVyIHJlbmRlcmluZy4uLlxuXHRcdFx0XHRpZiAodHdlZW4uX2FjdGl2ZSB8fCAodGltZSA+PSB0d2Vlbi5fc3RhcnRUaW1lICYmICF0d2Vlbi5fcGF1c2VkICYmICF0d2Vlbi5fZ2MpKSB7XG5cdFx0XHRcdFx0aWYgKCF0d2Vlbi5fcmV2ZXJzZWQpIHtcblx0XHRcdFx0XHRcdHR3ZWVuLnJlbmRlcigodGltZSAtIHR3ZWVuLl9zdGFydFRpbWUpICogdHdlZW4uX3RpbWVTY2FsZSwgc3VwcHJlc3NFdmVudHMsIGZvcmNlKTtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0dHdlZW4ucmVuZGVyKCgoIXR3ZWVuLl9kaXJ0eSkgPyB0d2Vlbi5fdG90YWxEdXJhdGlvbiA6IHR3ZWVuLnRvdGFsRHVyYXRpb24oKSkgLSAoKHRpbWUgLSB0d2Vlbi5fc3RhcnRUaW1lKSAqIHR3ZWVuLl90aW1lU2NhbGUpLCBzdXBwcmVzc0V2ZW50cywgZm9yY2UpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHR0d2VlbiA9IG5leHQ7XG5cdFx0XHR9XG5cdFx0fTtcblxuXHRcdHAucmF3VGltZSA9IGZ1bmN0aW9uKCkge1xuXHRcdFx0aWYgKCFfdGlja2VyQWN0aXZlKSB7XG5cdFx0XHRcdF90aWNrZXIud2FrZSgpO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIHRoaXMuX3RvdGFsVGltZTtcblx0XHR9O1xuXG4vKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogVHdlZW5MaXRlXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblx0XHR2YXIgVHdlZW5MaXRlID0gX2NsYXNzKFwiVHdlZW5MaXRlXCIsIGZ1bmN0aW9uKHRhcmdldCwgZHVyYXRpb24sIHZhcnMpIHtcblx0XHRcdFx0QW5pbWF0aW9uLmNhbGwodGhpcywgZHVyYXRpb24sIHZhcnMpO1xuXHRcdFx0XHR0aGlzLnJlbmRlciA9IFR3ZWVuTGl0ZS5wcm90b3R5cGUucmVuZGVyOyAvL3NwZWVkIG9wdGltaXphdGlvbiAoYXZvaWQgcHJvdG90eXBlIGxvb2t1cCBvbiB0aGlzIFwiaG90XCIgbWV0aG9kKVxuXG5cdFx0XHRcdGlmICh0YXJnZXQgPT0gbnVsbCkge1xuXHRcdFx0XHRcdHRocm93IFwiQ2Fubm90IHR3ZWVuIGEgbnVsbCB0YXJnZXQuXCI7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHR0aGlzLnRhcmdldCA9IHRhcmdldCA9ICh0eXBlb2YodGFyZ2V0KSAhPT0gXCJzdHJpbmdcIikgPyB0YXJnZXQgOiBUd2VlbkxpdGUuc2VsZWN0b3IodGFyZ2V0KSB8fCB0YXJnZXQ7XG5cblx0XHRcdFx0dmFyIGlzU2VsZWN0b3IgPSAodGFyZ2V0LmpxdWVyeSB8fCAodGFyZ2V0Lmxlbmd0aCAmJiB0YXJnZXQgIT09IHdpbmRvdyAmJiB0YXJnZXRbMF0gJiYgKHRhcmdldFswXSA9PT0gd2luZG93IHx8ICh0YXJnZXRbMF0ubm9kZVR5cGUgJiYgdGFyZ2V0WzBdLnN0eWxlICYmICF0YXJnZXQubm9kZVR5cGUpKSkpLFxuXHRcdFx0XHRcdG92ZXJ3cml0ZSA9IHRoaXMudmFycy5vdmVyd3JpdGUsXG5cdFx0XHRcdFx0aSwgdGFyZywgdGFyZ2V0cztcblxuXHRcdFx0XHR0aGlzLl9vdmVyd3JpdGUgPSBvdmVyd3JpdGUgPSAob3ZlcndyaXRlID09IG51bGwpID8gX292ZXJ3cml0ZUxvb2t1cFtUd2VlbkxpdGUuZGVmYXVsdE92ZXJ3cml0ZV0gOiAodHlwZW9mKG92ZXJ3cml0ZSkgPT09IFwibnVtYmVyXCIpID8gb3ZlcndyaXRlID4+IDAgOiBfb3ZlcndyaXRlTG9va3VwW292ZXJ3cml0ZV07XG5cblx0XHRcdFx0aWYgKChpc1NlbGVjdG9yIHx8IHRhcmdldCBpbnN0YW5jZW9mIEFycmF5IHx8ICh0YXJnZXQucHVzaCAmJiBfaXNBcnJheSh0YXJnZXQpKSkgJiYgdHlwZW9mKHRhcmdldFswXSkgIT09IFwibnVtYmVyXCIpIHtcblx0XHRcdFx0XHR0aGlzLl90YXJnZXRzID0gdGFyZ2V0cyA9IF9zbGljZSh0YXJnZXQpOyAgLy9kb24ndCB1c2UgQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwodGFyZ2V0LCAwKSBiZWNhdXNlIHRoYXQgZG9lc24ndCB3b3JrIGluIElFOCB3aXRoIGEgTm9kZUxpc3QgdGhhdCdzIHJldHVybmVkIGJ5IHF1ZXJ5U2VsZWN0b3JBbGwoKVxuXHRcdFx0XHRcdHRoaXMuX3Byb3BMb29rdXAgPSBbXTtcblx0XHRcdFx0XHR0aGlzLl9zaWJsaW5ncyA9IFtdO1xuXHRcdFx0XHRcdGZvciAoaSA9IDA7IGkgPCB0YXJnZXRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdFx0XHR0YXJnID0gdGFyZ2V0c1tpXTtcblx0XHRcdFx0XHRcdGlmICghdGFyZykge1xuXHRcdFx0XHRcdFx0XHR0YXJnZXRzLnNwbGljZShpLS0sIDEpO1xuXHRcdFx0XHRcdFx0XHRjb250aW51ZTtcblx0XHRcdFx0XHRcdH0gZWxzZSBpZiAodHlwZW9mKHRhcmcpID09PSBcInN0cmluZ1wiKSB7XG5cdFx0XHRcdFx0XHRcdHRhcmcgPSB0YXJnZXRzW2ktLV0gPSBUd2VlbkxpdGUuc2VsZWN0b3IodGFyZyk7IC8vaW4gY2FzZSBpdCdzIGFuIGFycmF5IG9mIHN0cmluZ3Ncblx0XHRcdFx0XHRcdFx0aWYgKHR5cGVvZih0YXJnKSA9PT0gXCJzdHJpbmdcIikge1xuXHRcdFx0XHRcdFx0XHRcdHRhcmdldHMuc3BsaWNlKGkrMSwgMSk7IC8vdG8gYXZvaWQgYW4gZW5kbGVzcyBsb29wIChjYW4ndCBpbWFnaW5lIHdoeSB0aGUgc2VsZWN0b3Igd291bGQgcmV0dXJuIGEgc3RyaW5nLCBidXQganVzdCBpbiBjYXNlKVxuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0XHRcdFx0fSBlbHNlIGlmICh0YXJnLmxlbmd0aCAmJiB0YXJnICE9PSB3aW5kb3cgJiYgdGFyZ1swXSAmJiAodGFyZ1swXSA9PT0gd2luZG93IHx8ICh0YXJnWzBdLm5vZGVUeXBlICYmIHRhcmdbMF0uc3R5bGUgJiYgIXRhcmcubm9kZVR5cGUpKSkgeyAvL2luIGNhc2UgdGhlIHVzZXIgaXMgcGFzc2luZyBpbiBhbiBhcnJheSBvZiBzZWxlY3RvciBvYmplY3RzIChsaWtlIGpRdWVyeSBvYmplY3RzKSwgd2UgbmVlZCB0byBjaGVjayBvbmUgbW9yZSBsZXZlbCBhbmQgcHVsbCB0aGluZ3Mgb3V0IGlmIG5lY2Vzc2FyeS4gQWxzbyBub3RlIHRoYXQgPHNlbGVjdD4gZWxlbWVudHMgcGFzcyBhbGwgdGhlIGNyaXRlcmlhIHJlZ2FyZGluZyBsZW5ndGggYW5kIHRoZSBmaXJzdCBjaGlsZCBoYXZpbmcgc3R5bGUsIHNvIHdlIG11c3QgYWxzbyBjaGVjayB0byBlbnN1cmUgdGhlIHRhcmdldCBpc24ndCBhbiBIVE1MIG5vZGUgaXRzZWxmLlxuXHRcdFx0XHRcdFx0XHR0YXJnZXRzLnNwbGljZShpLS0sIDEpO1xuXHRcdFx0XHRcdFx0XHR0aGlzLl90YXJnZXRzID0gdGFyZ2V0cyA9IHRhcmdldHMuY29uY2F0KF9zbGljZSh0YXJnKSk7XG5cdFx0XHRcdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0dGhpcy5fc2libGluZ3NbaV0gPSBfcmVnaXN0ZXIodGFyZywgdGhpcywgZmFsc2UpO1xuXHRcdFx0XHRcdFx0aWYgKG92ZXJ3cml0ZSA9PT0gMSkgaWYgKHRoaXMuX3NpYmxpbmdzW2ldLmxlbmd0aCA+IDEpIHtcblx0XHRcdFx0XHRcdFx0X2FwcGx5T3ZlcndyaXRlKHRhcmcsIHRoaXMsIG51bGwsIDEsIHRoaXMuX3NpYmxpbmdzW2ldKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHR0aGlzLl9wcm9wTG9va3VwID0ge307XG5cdFx0XHRcdFx0dGhpcy5fc2libGluZ3MgPSBfcmVnaXN0ZXIodGFyZ2V0LCB0aGlzLCBmYWxzZSk7XG5cdFx0XHRcdFx0aWYgKG92ZXJ3cml0ZSA9PT0gMSkgaWYgKHRoaXMuX3NpYmxpbmdzLmxlbmd0aCA+IDEpIHtcblx0XHRcdFx0XHRcdF9hcHBseU92ZXJ3cml0ZSh0YXJnZXQsIHRoaXMsIG51bGwsIDEsIHRoaXMuX3NpYmxpbmdzKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKHRoaXMudmFycy5pbW1lZGlhdGVSZW5kZXIgfHwgKGR1cmF0aW9uID09PSAwICYmIHRoaXMuX2RlbGF5ID09PSAwICYmIHRoaXMudmFycy5pbW1lZGlhdGVSZW5kZXIgIT09IGZhbHNlKSkge1xuXHRcdFx0XHRcdHRoaXMuX3RpbWUgPSAtX3RpbnlOdW07IC8vZm9yY2VzIGEgcmVuZGVyIHdpdGhvdXQgaGF2aW5nIHRvIHNldCB0aGUgcmVuZGVyKCkgXCJmb3JjZVwiIHBhcmFtZXRlciB0byB0cnVlIGJlY2F1c2Ugd2Ugd2FudCB0byBhbGxvdyBsYXp5aW5nIGJ5IGRlZmF1bHQgKHVzaW5nIHRoZSBcImZvcmNlXCIgcGFyYW1ldGVyIGFsd2F5cyBmb3JjZXMgYW4gaW1tZWRpYXRlIGZ1bGwgcmVuZGVyKVxuXHRcdFx0XHRcdHRoaXMucmVuZGVyKE1hdGgubWluKDAsIC10aGlzLl9kZWxheSkpOyAvL2luIGNhc2UgZGVsYXkgaXMgbmVnYXRpdmVcblx0XHRcdFx0fVxuXHRcdFx0fSwgdHJ1ZSksXG5cdFx0XHRfaXNTZWxlY3RvciA9IGZ1bmN0aW9uKHYpIHtcblx0XHRcdFx0cmV0dXJuICh2ICYmIHYubGVuZ3RoICYmIHYgIT09IHdpbmRvdyAmJiB2WzBdICYmICh2WzBdID09PSB3aW5kb3cgfHwgKHZbMF0ubm9kZVR5cGUgJiYgdlswXS5zdHlsZSAmJiAhdi5ub2RlVHlwZSkpKTsgLy93ZSBjYW5ub3QgY2hlY2sgXCJub2RlVHlwZVwiIGlmIHRoZSB0YXJnZXQgaXMgd2luZG93IGZyb20gd2l0aGluIGFuIGlmcmFtZSwgb3RoZXJ3aXNlIGl0IHdpbGwgdHJpZ2dlciBhIHNlY3VyaXR5IGVycm9yIGluIHNvbWUgYnJvd3NlcnMgbGlrZSBGaXJlZm94LlxuXHRcdFx0fSxcblx0XHRcdF9hdXRvQ1NTID0gZnVuY3Rpb24odmFycywgdGFyZ2V0KSB7XG5cdFx0XHRcdHZhciBjc3MgPSB7fSxcblx0XHRcdFx0XHRwO1xuXHRcdFx0XHRmb3IgKHAgaW4gdmFycykge1xuXHRcdFx0XHRcdGlmICghX3Jlc2VydmVkUHJvcHNbcF0gJiYgKCEocCBpbiB0YXJnZXQpIHx8IHAgPT09IFwidHJhbnNmb3JtXCIgfHwgcCA9PT0gXCJ4XCIgfHwgcCA9PT0gXCJ5XCIgfHwgcCA9PT0gXCJ3aWR0aFwiIHx8IHAgPT09IFwiaGVpZ2h0XCIgfHwgcCA9PT0gXCJjbGFzc05hbWVcIiB8fCBwID09PSBcImJvcmRlclwiKSAmJiAoIV9wbHVnaW5zW3BdIHx8IChfcGx1Z2luc1twXSAmJiBfcGx1Z2luc1twXS5fYXV0b0NTUykpKSB7IC8vbm90ZTogPGltZz4gZWxlbWVudHMgY29udGFpbiByZWFkLW9ubHkgXCJ4XCIgYW5kIFwieVwiIHByb3BlcnRpZXMuIFdlIHNob3VsZCBhbHNvIHByaW9yaXRpemUgZWRpdGluZyBjc3Mgd2lkdGgvaGVpZ2h0IHJhdGhlciB0aGFuIHRoZSBlbGVtZW50J3MgcHJvcGVydGllcy5cblx0XHRcdFx0XHRcdGNzc1twXSA9IHZhcnNbcF07XG5cdFx0XHRcdFx0XHRkZWxldGUgdmFyc1twXTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdFx0dmFycy5jc3MgPSBjc3M7XG5cdFx0XHR9O1xuXG5cdFx0cCA9IFR3ZWVuTGl0ZS5wcm90b3R5cGUgPSBuZXcgQW5pbWF0aW9uKCk7XG5cdFx0cC5jb25zdHJ1Y3RvciA9IFR3ZWVuTGl0ZTtcblx0XHRwLmtpbGwoKS5fZ2MgPSBmYWxzZTtcblxuLy8tLS0tVHdlZW5MaXRlIGRlZmF1bHRzLCBvdmVyd3JpdGUgbWFuYWdlbWVudCwgYW5kIHJvb3QgdXBkYXRlcyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cblx0XHRwLnJhdGlvID0gMDtcblx0XHRwLl9maXJzdFBUID0gcC5fdGFyZ2V0cyA9IHAuX292ZXJ3cml0dGVuUHJvcHMgPSBwLl9zdGFydEF0ID0gbnVsbDtcblx0XHRwLl9ub3RpZnlQbHVnaW5zT2ZFbmFibGVkID0gcC5fbGF6eSA9IGZhbHNlO1xuXG5cdFx0VHdlZW5MaXRlLnZlcnNpb24gPSBcIjEuMjAuNVwiO1xuXHRcdFR3ZWVuTGl0ZS5kZWZhdWx0RWFzZSA9IHAuX2Vhc2UgPSBuZXcgRWFzZShudWxsLCBudWxsLCAxLCAxKTtcblx0XHRUd2VlbkxpdGUuZGVmYXVsdE92ZXJ3cml0ZSA9IFwiYXV0b1wiO1xuXHRcdFR3ZWVuTGl0ZS50aWNrZXIgPSBfdGlja2VyO1xuXHRcdFR3ZWVuTGl0ZS5hdXRvU2xlZXAgPSAxMjA7XG5cdFx0VHdlZW5MaXRlLmxhZ1Ntb290aGluZyA9IGZ1bmN0aW9uKHRocmVzaG9sZCwgYWRqdXN0ZWRMYWcpIHtcblx0XHRcdF90aWNrZXIubGFnU21vb3RoaW5nKHRocmVzaG9sZCwgYWRqdXN0ZWRMYWcpO1xuXHRcdH07XG5cblx0XHRUd2VlbkxpdGUuc2VsZWN0b3IgPSB3aW5kb3cuJCB8fCB3aW5kb3cualF1ZXJ5IHx8IGZ1bmN0aW9uKGUpIHtcblx0XHRcdHZhciBzZWxlY3RvciA9IHdpbmRvdy4kIHx8IHdpbmRvdy5qUXVlcnk7XG5cdFx0XHRpZiAoc2VsZWN0b3IpIHtcblx0XHRcdFx0VHdlZW5MaXRlLnNlbGVjdG9yID0gc2VsZWN0b3I7XG5cdFx0XHRcdHJldHVybiBzZWxlY3RvcihlKTtcblx0XHRcdH1cblx0XHRcdGlmICghX2RvYykgeyAvL2luIHNvbWUgZGV2IGVudmlyb25tZW50cyAobGlrZSBBbmd1bGFyIDYpLCBHU0FQIGdldHMgbG9hZGVkIGJlZm9yZSB0aGUgZG9jdW1lbnQgaXMgZGVmaW5lZCEgU28gcmUtcXVlcnkgaXQgaGVyZSBpZi93aGVuIG5lY2Vzc2FyeS5cblx0XHRcdFx0X2RvYyA9IHdpbmRvdy5kb2N1bWVudDtcblx0XHRcdH1cblx0XHRcdHJldHVybiAoIV9kb2MpID8gZSA6IChfZG9jLnF1ZXJ5U2VsZWN0b3JBbGwgPyBfZG9jLnF1ZXJ5U2VsZWN0b3JBbGwoZSkgOiBfZG9jLmdldEVsZW1lbnRCeUlkKChlLmNoYXJBdCgwKSA9PT0gXCIjXCIpID8gZS5zdWJzdHIoMSkgOiBlKSk7XG5cdFx0fTtcblxuXHRcdHZhciBfbGF6eVR3ZWVucyA9IFtdLFxuXHRcdFx0X2xhenlMb29rdXAgPSB7fSxcblx0XHRcdF9udW1iZXJzRXhwID0gLyg/OigtfC09fFxcKz0pP1xcZCpcXC4/XFxkKig/OmVbXFwtK10/XFxkKyk/KVswLTldL2lnLFxuXHRcdFx0X3JlbEV4cCA9IC9bXFwrLV09LT9bXFwuXFxkXS8sXG5cdFx0XHQvL19ub25OdW1iZXJzRXhwID0gLyg/OihbXFwtK10oPyEoXFxkfD0pKSl8W15cXGRcXC0rPWVdfChlKD8hW1xcLStdW1xcZF0pKSkrL2lnLFxuXHRcdFx0X3NldFJhdGlvID0gZnVuY3Rpb24odikge1xuXHRcdFx0XHR2YXIgcHQgPSB0aGlzLl9maXJzdFBULFxuXHRcdFx0XHRcdG1pbiA9IDAuMDAwMDAxLFxuXHRcdFx0XHRcdHZhbDtcblx0XHRcdFx0d2hpbGUgKHB0KSB7XG5cdFx0XHRcdFx0dmFsID0gIXB0LmJsb2IgPyBwdC5jICogdiArIHB0LnMgOiAodiA9PT0gMSAmJiB0aGlzLmVuZCAhPSBudWxsKSA/IHRoaXMuZW5kIDogdiA/IHRoaXMuam9pbihcIlwiKSA6IHRoaXMuc3RhcnQ7XG5cdFx0XHRcdFx0aWYgKHB0Lm0pIHtcblx0XHRcdFx0XHRcdHZhbCA9IHB0Lm0uY2FsbCh0aGlzLl90d2VlbiwgdmFsLCB0aGlzLl90YXJnZXQgfHwgcHQudCwgdGhpcy5fdHdlZW4pO1xuXHRcdFx0XHRcdH0gZWxzZSBpZiAodmFsIDwgbWluKSBpZiAodmFsID4gLW1pbiAmJiAhcHQuYmxvYikgeyAvL3ByZXZlbnRzIGlzc3VlcyB3aXRoIGNvbnZlcnRpbmcgdmVyeSBzbWFsbCBudW1iZXJzIHRvIHN0cmluZ3MgaW4gdGhlIGJyb3dzZXJcblx0XHRcdFx0XHRcdHZhbCA9IDA7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGlmICghcHQuZikge1xuXHRcdFx0XHRcdFx0cHQudFtwdC5wXSA9IHZhbDtcblx0XHRcdFx0XHR9IGVsc2UgaWYgKHB0LmZwKSB7XG5cdFx0XHRcdFx0XHRwdC50W3B0LnBdKHB0LmZwLCB2YWwpO1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRwdC50W3B0LnBdKHZhbCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHB0ID0gcHQuX25leHQ7XG5cdFx0XHRcdH1cblx0XHRcdH0sXG5cdFx0XHQvL2NvbXBhcmVzIHR3byBzdHJpbmdzIChzdGFydC9lbmQpLCBmaW5kcyB0aGUgbnVtYmVycyB0aGF0IGFyZSBkaWZmZXJlbnQgYW5kIHNwaXRzIGJhY2sgYW4gYXJyYXkgcmVwcmVzZW50aW5nIHRoZSB3aG9sZSB2YWx1ZSBidXQgd2l0aCB0aGUgY2hhbmdpbmcgdmFsdWVzIGlzb2xhdGVkIGFzIGVsZW1lbnRzLiBGb3IgZXhhbXBsZSwgXCJyZ2IoMCwwLDApXCIgYW5kIFwicmdiKDEwMCw1MCwwKVwiIHdvdWxkIGJlY29tZSBbXCJyZ2IoXCIsIDAsIFwiLFwiLCA1MCwgXCIsMClcIl0uIE5vdGljZSBpdCBtZXJnZXMgdGhlIHBhcnRzIHRoYXQgYXJlIGlkZW50aWNhbCAocGVyZm9ybWFuY2Ugb3B0aW1pemF0aW9uKS4gVGhlIGFycmF5IGFsc28gaGFzIGEgbGlua2VkIGxpc3Qgb2YgUHJvcFR3ZWVucyBhdHRhY2hlZCBzdGFydGluZyB3aXRoIF9maXJzdFBUIHRoYXQgY29udGFpbiB0aGUgdHdlZW5pbmcgZGF0YSAodCwgcCwgcywgYywgZiwgZXRjLikuIEl0IGFsc28gc3RvcmVzIHRoZSBzdGFydGluZyB2YWx1ZSBhcyBhIFwic3RhcnRcIiBwcm9wZXJ0eSBzbyB0aGF0IHdlIGNhbiByZXZlcnQgdG8gaXQgaWYvd2hlbiBuZWNlc3NhcnksIGxpa2Ugd2hlbiBhIHR3ZWVuIHJld2luZHMgZnVsbHkuIElmIHRoZSBxdWFudGl0eSBvZiBudW1iZXJzIGRpZmZlcnMgYmV0d2VlbiB0aGUgc3RhcnQgYW5kIGVuZCwgaXQgd2lsbCBhbHdheXMgcHJpb3JpdGl6ZSB0aGUgZW5kIHZhbHVlKHMpLiBUaGUgcHQgcGFyYW1ldGVyIGlzIG9wdGlvbmFsIC0gaXQncyBmb3IgYSBQcm9wVHdlZW4gdGhhdCB3aWxsIGJlIGFwcGVuZGVkIHRvIHRoZSBlbmQgb2YgdGhlIGxpbmtlZCBsaXN0IGFuZCBpcyB0eXBpY2FsbHkgZm9yIGFjdHVhbGx5IHNldHRpbmcgdGhlIHZhbHVlIGFmdGVyIGFsbCBvZiB0aGUgZWxlbWVudHMgaGF2ZSBiZWVuIHVwZGF0ZWQgKHdpdGggYXJyYXkuam9pbihcIlwiKSkuXG5cdFx0XHRfYmxvYkRpZiA9IGZ1bmN0aW9uKHN0YXJ0LCBlbmQsIGZpbHRlciwgcHQpIHtcblx0XHRcdFx0dmFyIGEgPSBbXSxcblx0XHRcdFx0XHRjaGFySW5kZXggPSAwLFxuXHRcdFx0XHRcdHMgPSBcIlwiLFxuXHRcdFx0XHRcdGNvbG9yID0gMCxcblx0XHRcdFx0XHRzdGFydE51bXMsIGVuZE51bXMsIG51bSwgaSwgbCwgbm9uTnVtYmVycywgY3VycmVudE51bTtcblx0XHRcdFx0YS5zdGFydCA9IHN0YXJ0O1xuXHRcdFx0XHRhLmVuZCA9IGVuZDtcblx0XHRcdFx0c3RhcnQgPSBhWzBdID0gc3RhcnQgKyBcIlwiOyAvL2Vuc3VyZSB2YWx1ZXMgYXJlIHN0cmluZ3Ncblx0XHRcdFx0ZW5kID0gYVsxXSA9IGVuZCArIFwiXCI7XG5cdFx0XHRcdGlmIChmaWx0ZXIpIHtcblx0XHRcdFx0XHRmaWx0ZXIoYSk7IC8vcGFzcyBhbiBhcnJheSB3aXRoIHRoZSBzdGFydGluZyBhbmQgZW5kaW5nIHZhbHVlcyBhbmQgbGV0IHRoZSBmaWx0ZXIgZG8gd2hhdGV2ZXIgaXQgbmVlZHMgdG8gdGhlIHZhbHVlcy5cblx0XHRcdFx0XHRzdGFydCA9IGFbMF07XG5cdFx0XHRcdFx0ZW5kID0gYVsxXTtcblx0XHRcdFx0fVxuXHRcdFx0XHRhLmxlbmd0aCA9IDA7XG5cdFx0XHRcdHN0YXJ0TnVtcyA9IHN0YXJ0Lm1hdGNoKF9udW1iZXJzRXhwKSB8fCBbXTtcblx0XHRcdFx0ZW5kTnVtcyA9IGVuZC5tYXRjaChfbnVtYmVyc0V4cCkgfHwgW107XG5cdFx0XHRcdGlmIChwdCkge1xuXHRcdFx0XHRcdHB0Ll9uZXh0ID0gbnVsbDtcblx0XHRcdFx0XHRwdC5ibG9iID0gMTtcblx0XHRcdFx0XHRhLl9maXJzdFBUID0gYS5fYXBwbHlQVCA9IHB0OyAvL2FwcGx5IGxhc3QgaW4gdGhlIGxpbmtlZCBsaXN0ICh3aGljaCBtZWFucyBpbnNlcnRpbmcgaXQgZmlyc3QpXG5cdFx0XHRcdH1cblx0XHRcdFx0bCA9IGVuZE51bXMubGVuZ3RoO1xuXHRcdFx0XHRmb3IgKGkgPSAwOyBpIDwgbDsgaSsrKSB7XG5cdFx0XHRcdFx0Y3VycmVudE51bSA9IGVuZE51bXNbaV07XG5cdFx0XHRcdFx0bm9uTnVtYmVycyA9IGVuZC5zdWJzdHIoY2hhckluZGV4LCBlbmQuaW5kZXhPZihjdXJyZW50TnVtLCBjaGFySW5kZXgpLWNoYXJJbmRleCk7XG5cdFx0XHRcdFx0cyArPSAobm9uTnVtYmVycyB8fCAhaSkgPyBub25OdW1iZXJzIDogXCIsXCI7IC8vbm90ZTogU1ZHIHNwZWMgYWxsb3dzIG9taXNzaW9uIG9mIGNvbW1hL3NwYWNlIHdoZW4gYSBuZWdhdGl2ZSBzaWduIGlzIHdlZGdlZCBiZXR3ZWVuIHR3byBudW1iZXJzLCBsaWtlIDIuNS01LjMgaW5zdGVhZCBvZiAyLjUsLTUuMyBidXQgd2hlbiB0d2VlbmluZywgdGhlIG5lZ2F0aXZlIHZhbHVlIG1heSBzd2l0Y2ggdG8gcG9zaXRpdmUsIHNvIHdlIGluc2VydCB0aGUgY29tbWEganVzdCBpbiBjYXNlLlxuXHRcdFx0XHRcdGNoYXJJbmRleCArPSBub25OdW1iZXJzLmxlbmd0aDtcblx0XHRcdFx0XHRpZiAoY29sb3IpIHsgLy9zZW5zZSByZ2JhKCkgdmFsdWVzIGFuZCByb3VuZCB0aGVtLlxuXHRcdFx0XHRcdFx0Y29sb3IgPSAoY29sb3IgKyAxKSAlIDU7XG5cdFx0XHRcdFx0fSBlbHNlIGlmIChub25OdW1iZXJzLnN1YnN0cigtNSkgPT09IFwicmdiYShcIikge1xuXHRcdFx0XHRcdFx0Y29sb3IgPSAxO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRpZiAoY3VycmVudE51bSA9PT0gc3RhcnROdW1zW2ldIHx8IHN0YXJ0TnVtcy5sZW5ndGggPD0gaSkge1xuXHRcdFx0XHRcdFx0cyArPSBjdXJyZW50TnVtO1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRpZiAocykge1xuXHRcdFx0XHRcdFx0XHRhLnB1c2gocyk7XG5cdFx0XHRcdFx0XHRcdHMgPSBcIlwiO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0bnVtID0gcGFyc2VGbG9hdChzdGFydE51bXNbaV0pO1xuXHRcdFx0XHRcdFx0YS5wdXNoKG51bSk7XG5cdFx0XHRcdFx0XHRhLl9maXJzdFBUID0ge19uZXh0OiBhLl9maXJzdFBULCB0OmEsIHA6IGEubGVuZ3RoLTEsIHM6bnVtLCBjOigoY3VycmVudE51bS5jaGFyQXQoMSkgPT09IFwiPVwiKSA/IHBhcnNlSW50KGN1cnJlbnROdW0uY2hhckF0KDApICsgXCIxXCIsIDEwKSAqIHBhcnNlRmxvYXQoY3VycmVudE51bS5zdWJzdHIoMikpIDogKHBhcnNlRmxvYXQoY3VycmVudE51bSkgLSBudW0pKSB8fCAwLCBmOjAsIG06KGNvbG9yICYmIGNvbG9yIDwgNCkgPyBNYXRoLnJvdW5kIDogMH07XG5cdFx0XHRcdFx0XHQvL25vdGU6IHdlIGRvbid0IHNldCBfcHJldiBiZWNhdXNlIHdlJ2xsIG5ldmVyIG5lZWQgdG8gcmVtb3ZlIGluZGl2aWR1YWwgUHJvcFR3ZWVucyBmcm9tIHRoaXMgbGlzdC5cblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0Y2hhckluZGV4ICs9IGN1cnJlbnROdW0ubGVuZ3RoO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHMgKz0gZW5kLnN1YnN0cihjaGFySW5kZXgpO1xuXHRcdFx0XHRpZiAocykge1xuXHRcdFx0XHRcdGEucHVzaChzKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRhLnNldFJhdGlvID0gX3NldFJhdGlvO1xuXHRcdFx0XHRpZiAoX3JlbEV4cC50ZXN0KGVuZCkpIHsgLy9pZiB0aGUgZW5kIHN0cmluZyBjb250YWlucyByZWxhdGl2ZSB2YWx1ZXMsIGRlbGV0ZSBpdCBzbyB0aGF0IG9uIHRoZSBmaW5hbCByZW5kZXIgKGluIF9zZXRSYXRpbygpKSwgd2UgZG9uJ3QgYWN0dWFsbHkgc2V0IGl0IHRvIHRoZSBzdHJpbmcgd2l0aCArPSBvciAtPSBjaGFyYWN0ZXJzIChmb3JjZXMgaXQgdG8gdXNlIHRoZSBjYWxjdWxhdGVkIHZhbHVlKS5cblx0XHRcdFx0XHRhLmVuZCA9IG51bGw7XG5cdFx0XHRcdH1cblx0XHRcdFx0cmV0dXJuIGE7XG5cdFx0XHR9LFxuXHRcdFx0Ly9ub3RlOiBcImZ1bmNQYXJhbVwiIGlzIG9ubHkgbmVjZXNzYXJ5IGZvciBmdW5jdGlvbi1iYXNlZCBnZXR0ZXJzL3NldHRlcnMgdGhhdCByZXF1aXJlIGFuIGV4dHJhIHBhcmFtZXRlciBsaWtlIGdldEF0dHJpYnV0ZShcIndpZHRoXCIpIGFuZCBzZXRBdHRyaWJ1dGUoXCJ3aWR0aFwiLCB2YWx1ZSkuIEluIHRoaXMgZXhhbXBsZSwgZnVuY1BhcmFtIHdvdWxkIGJlIFwid2lkdGhcIi4gVXNlZCBieSBBdHRyUGx1Z2luIGZvciBleGFtcGxlLlxuXHRcdFx0X2FkZFByb3BUd2VlbiA9IGZ1bmN0aW9uKHRhcmdldCwgcHJvcCwgc3RhcnQsIGVuZCwgb3ZlcndyaXRlUHJvcCwgbW9kLCBmdW5jUGFyYW0sIHN0cmluZ0ZpbHRlciwgaW5kZXgpIHtcblx0XHRcdFx0aWYgKHR5cGVvZihlbmQpID09PSBcImZ1bmN0aW9uXCIpIHtcblx0XHRcdFx0XHRlbmQgPSBlbmQoaW5kZXggfHwgMCwgdGFyZ2V0KTtcblx0XHRcdFx0fVxuXHRcdFx0XHR2YXIgdHlwZSA9IHR5cGVvZih0YXJnZXRbcHJvcF0pLFxuXHRcdFx0XHRcdGdldHRlck5hbWUgPSAodHlwZSAhPT0gXCJmdW5jdGlvblwiKSA/IFwiXCIgOiAoKHByb3AuaW5kZXhPZihcInNldFwiKSB8fCB0eXBlb2YodGFyZ2V0W1wiZ2V0XCIgKyBwcm9wLnN1YnN0cigzKV0pICE9PSBcImZ1bmN0aW9uXCIpID8gcHJvcCA6IFwiZ2V0XCIgKyBwcm9wLnN1YnN0cigzKSksXG5cdFx0XHRcdFx0cyA9IChzdGFydCAhPT0gXCJnZXRcIikgPyBzdGFydCA6ICFnZXR0ZXJOYW1lID8gdGFyZ2V0W3Byb3BdIDogZnVuY1BhcmFtID8gdGFyZ2V0W2dldHRlck5hbWVdKGZ1bmNQYXJhbSkgOiB0YXJnZXRbZ2V0dGVyTmFtZV0oKSxcblx0XHRcdFx0XHRpc1JlbGF0aXZlID0gKHR5cGVvZihlbmQpID09PSBcInN0cmluZ1wiICYmIGVuZC5jaGFyQXQoMSkgPT09IFwiPVwiKSxcblx0XHRcdFx0XHRwdCA9IHt0OnRhcmdldCwgcDpwcm9wLCBzOnMsIGY6KHR5cGUgPT09IFwiZnVuY3Rpb25cIiksIHBnOjAsIG46b3ZlcndyaXRlUHJvcCB8fCBwcm9wLCBtOighbW9kID8gMCA6ICh0eXBlb2YobW9kKSA9PT0gXCJmdW5jdGlvblwiKSA/IG1vZCA6IE1hdGgucm91bmQpLCBwcjowLCBjOmlzUmVsYXRpdmUgPyBwYXJzZUludChlbmQuY2hhckF0KDApICsgXCIxXCIsIDEwKSAqIHBhcnNlRmxvYXQoZW5kLnN1YnN0cigyKSkgOiAocGFyc2VGbG9hdChlbmQpIC0gcykgfHwgMH0sXG5cdFx0XHRcdFx0YmxvYjtcblxuXHRcdFx0XHRpZiAodHlwZW9mKHMpICE9PSBcIm51bWJlclwiIHx8ICh0eXBlb2YoZW5kKSAhPT0gXCJudW1iZXJcIiAmJiAhaXNSZWxhdGl2ZSkpIHtcblx0XHRcdFx0XHRpZiAoZnVuY1BhcmFtIHx8IGlzTmFOKHMpIHx8ICghaXNSZWxhdGl2ZSAmJiBpc05hTihlbmQpKSB8fCB0eXBlb2YocykgPT09IFwiYm9vbGVhblwiIHx8IHR5cGVvZihlbmQpID09PSBcImJvb2xlYW5cIikge1xuXHRcdFx0XHRcdFx0Ly9hIGJsb2IgKHN0cmluZyB0aGF0IGhhcyBtdWx0aXBsZSBudW1iZXJzIGluIGl0KVxuXHRcdFx0XHRcdFx0cHQuZnAgPSBmdW5jUGFyYW07XG5cdFx0XHRcdFx0XHRibG9iID0gX2Jsb2JEaWYocywgKGlzUmVsYXRpdmUgPyAocGFyc2VGbG9hdChwdC5zKSArIHB0LmMpICsgKHB0LnMgKyBcIlwiKS5yZXBsYWNlKC9bMC05XFwtXFwuXS9nLCBcIlwiKSA6IGVuZCksIHN0cmluZ0ZpbHRlciB8fCBUd2VlbkxpdGUuZGVmYXVsdFN0cmluZ0ZpbHRlciwgcHQpO1xuXHRcdFx0XHRcdFx0cHQgPSB7dDogYmxvYiwgcDogXCJzZXRSYXRpb1wiLCBzOiAwLCBjOiAxLCBmOiAyLCBwZzogMCwgbjogb3ZlcndyaXRlUHJvcCB8fCBwcm9wLCBwcjogMCwgbTogMH07IC8vXCIyXCIgaW5kaWNhdGVzIGl0J3MgYSBCbG9iIHByb3BlcnR5IHR3ZWVuLiBOZWVkZWQgZm9yIFJvdW5kUHJvcHNQbHVnaW4gZm9yIGV4YW1wbGUuXG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdHB0LnMgPSBwYXJzZUZsb2F0KHMpO1xuXHRcdFx0XHRcdFx0aWYgKCFpc1JlbGF0aXZlKSB7XG5cdFx0XHRcdFx0XHRcdHB0LmMgPSAocGFyc2VGbG9hdChlbmQpIC0gcHQucykgfHwgMDtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKHB0LmMpIHsgLy9vbmx5IGFkZCBpdCB0byB0aGUgbGlua2VkIGxpc3QgaWYgdGhlcmUncyBhIGNoYW5nZS5cblx0XHRcdFx0XHRpZiAoKHB0Ll9uZXh0ID0gdGhpcy5fZmlyc3RQVCkpIHtcblx0XHRcdFx0XHRcdHB0Ll9uZXh0Ll9wcmV2ID0gcHQ7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHRoaXMuX2ZpcnN0UFQgPSBwdDtcblx0XHRcdFx0XHRyZXR1cm4gcHQ7XG5cdFx0XHRcdH1cblx0XHRcdH0sXG5cdFx0XHRfaW50ZXJuYWxzID0gVHdlZW5MaXRlLl9pbnRlcm5hbHMgPSB7aXNBcnJheTpfaXNBcnJheSwgaXNTZWxlY3RvcjpfaXNTZWxlY3RvciwgbGF6eVR3ZWVuczpfbGF6eVR3ZWVucywgYmxvYkRpZjpfYmxvYkRpZn0sIC8vZ2l2ZXMgdXMgYSB3YXkgdG8gZXhwb3NlIGNlcnRhaW4gcHJpdmF0ZSB2YWx1ZXMgdG8gb3RoZXIgR3JlZW5Tb2NrIGNsYXNzZXMgd2l0aG91dCBjb250YW1pbmF0aW5nIHRoYSBtYWluIFR3ZWVuTGl0ZSBvYmplY3QuXG5cdFx0XHRfcGx1Z2lucyA9IFR3ZWVuTGl0ZS5fcGx1Z2lucyA9IHt9LFxuXHRcdFx0X3R3ZWVuTG9va3VwID0gX2ludGVybmFscy50d2Vlbkxvb2t1cCA9IHt9LFxuXHRcdFx0X3R3ZWVuTG9va3VwTnVtID0gMCxcblx0XHRcdF9yZXNlcnZlZFByb3BzID0gX2ludGVybmFscy5yZXNlcnZlZFByb3BzID0ge2Vhc2U6MSwgZGVsYXk6MSwgb3ZlcndyaXRlOjEsIG9uQ29tcGxldGU6MSwgb25Db21wbGV0ZVBhcmFtczoxLCBvbkNvbXBsZXRlU2NvcGU6MSwgdXNlRnJhbWVzOjEsIHJ1bkJhY2t3YXJkczoxLCBzdGFydEF0OjEsIG9uVXBkYXRlOjEsIG9uVXBkYXRlUGFyYW1zOjEsIG9uVXBkYXRlU2NvcGU6MSwgb25TdGFydDoxLCBvblN0YXJ0UGFyYW1zOjEsIG9uU3RhcnRTY29wZToxLCBvblJldmVyc2VDb21wbGV0ZToxLCBvblJldmVyc2VDb21wbGV0ZVBhcmFtczoxLCBvblJldmVyc2VDb21wbGV0ZVNjb3BlOjEsIG9uUmVwZWF0OjEsIG9uUmVwZWF0UGFyYW1zOjEsIG9uUmVwZWF0U2NvcGU6MSwgZWFzZVBhcmFtczoxLCB5b3lvOjEsIGltbWVkaWF0ZVJlbmRlcjoxLCByZXBlYXQ6MSwgcmVwZWF0RGVsYXk6MSwgZGF0YToxLCBwYXVzZWQ6MSwgcmV2ZXJzZWQ6MSwgYXV0b0NTUzoxLCBsYXp5OjEsIG9uT3ZlcndyaXRlOjEsIGNhbGxiYWNrU2NvcGU6MSwgc3RyaW5nRmlsdGVyOjEsIGlkOjEsIHlveW9FYXNlOjF9LFxuXHRcdFx0X292ZXJ3cml0ZUxvb2t1cCA9IHtub25lOjAsIGFsbDoxLCBhdXRvOjIsIGNvbmN1cnJlbnQ6MywgYWxsT25TdGFydDo0LCBwcmVleGlzdGluZzo1LCBcInRydWVcIjoxLCBcImZhbHNlXCI6MH0sXG5cdFx0XHRfcm9vdEZyYW1lc1RpbWVsaW5lID0gQW5pbWF0aW9uLl9yb290RnJhbWVzVGltZWxpbmUgPSBuZXcgU2ltcGxlVGltZWxpbmUoKSxcblx0XHRcdF9yb290VGltZWxpbmUgPSBBbmltYXRpb24uX3Jvb3RUaW1lbGluZSA9IG5ldyBTaW1wbGVUaW1lbGluZSgpLFxuXHRcdFx0X25leHRHQ0ZyYW1lID0gMzAsXG5cdFx0XHRfbGF6eVJlbmRlciA9IF9pbnRlcm5hbHMubGF6eVJlbmRlciA9IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHR2YXIgaSA9IF9sYXp5VHdlZW5zLmxlbmd0aCxcblx0XHRcdFx0XHR0d2Vlbjtcblx0XHRcdFx0X2xhenlMb29rdXAgPSB7fTtcblx0XHRcdFx0d2hpbGUgKC0taSA+IC0xKSB7XG5cdFx0XHRcdFx0dHdlZW4gPSBfbGF6eVR3ZWVuc1tpXTtcblx0XHRcdFx0XHRpZiAodHdlZW4gJiYgdHdlZW4uX2xhenkgIT09IGZhbHNlKSB7XG5cdFx0XHRcdFx0XHR0d2Vlbi5yZW5kZXIodHdlZW4uX2xhenlbMF0sIHR3ZWVuLl9sYXp5WzFdLCB0cnVlKTtcblx0XHRcdFx0XHRcdHR3ZWVuLl9sYXp5ID0gZmFsc2U7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRcdF9sYXp5VHdlZW5zLmxlbmd0aCA9IDA7XG5cdFx0XHR9O1xuXG5cdFx0X3Jvb3RUaW1lbGluZS5fc3RhcnRUaW1lID0gX3RpY2tlci50aW1lO1xuXHRcdF9yb290RnJhbWVzVGltZWxpbmUuX3N0YXJ0VGltZSA9IF90aWNrZXIuZnJhbWU7XG5cdFx0X3Jvb3RUaW1lbGluZS5fYWN0aXZlID0gX3Jvb3RGcmFtZXNUaW1lbGluZS5fYWN0aXZlID0gdHJ1ZTtcblx0XHRzZXRUaW1lb3V0KF9sYXp5UmVuZGVyLCAxKTsgLy9vbiBzb21lIG1vYmlsZSBkZXZpY2VzLCB0aGVyZSBpc24ndCBhIFwidGlja1wiIGJlZm9yZSBjb2RlIHJ1bnMgd2hpY2ggbWVhbnMgYW55IGxhenkgcmVuZGVycyB3b3VsZG4ndCBydW4gYmVmb3JlIHRoZSBuZXh0IG9mZmljaWFsIFwidGlja1wiLlxuXG5cdFx0QW5pbWF0aW9uLl91cGRhdGVSb290ID0gVHdlZW5MaXRlLnJlbmRlciA9IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHR2YXIgaSwgYSwgcDtcblx0XHRcdFx0aWYgKF9sYXp5VHdlZW5zLmxlbmd0aCkgeyAvL2lmIGNvZGUgaXMgcnVuIG91dHNpZGUgb2YgdGhlIHJlcXVlc3RBbmltYXRpb25GcmFtZSBsb29wLCB0aGVyZSBtYXkgYmUgdHdlZW5zIHF1ZXVlZCBBRlRFUiB0aGUgZW5naW5lIHJlZnJlc2hlZCwgc28gd2UgbmVlZCB0byBlbnN1cmUgYW55IHBlbmRpbmcgcmVuZGVycyBvY2N1ciBiZWZvcmUgd2UgcmVmcmVzaCBhZ2Fpbi5cblx0XHRcdFx0XHRfbGF6eVJlbmRlcigpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdF9yb290VGltZWxpbmUucmVuZGVyKChfdGlja2VyLnRpbWUgLSBfcm9vdFRpbWVsaW5lLl9zdGFydFRpbWUpICogX3Jvb3RUaW1lbGluZS5fdGltZVNjYWxlLCBmYWxzZSwgZmFsc2UpO1xuXHRcdFx0XHRfcm9vdEZyYW1lc1RpbWVsaW5lLnJlbmRlcigoX3RpY2tlci5mcmFtZSAtIF9yb290RnJhbWVzVGltZWxpbmUuX3N0YXJ0VGltZSkgKiBfcm9vdEZyYW1lc1RpbWVsaW5lLl90aW1lU2NhbGUsIGZhbHNlLCBmYWxzZSk7XG5cdFx0XHRcdGlmIChfbGF6eVR3ZWVucy5sZW5ndGgpIHtcblx0XHRcdFx0XHRfbGF6eVJlbmRlcigpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChfdGlja2VyLmZyYW1lID49IF9uZXh0R0NGcmFtZSkgeyAvL2R1bXAgZ2FyYmFnZSBldmVyeSAxMjAgZnJhbWVzIG9yIHdoYXRldmVyIHRoZSB1c2VyIHNldHMgVHdlZW5MaXRlLmF1dG9TbGVlcCB0b1xuXHRcdFx0XHRcdF9uZXh0R0NGcmFtZSA9IF90aWNrZXIuZnJhbWUgKyAocGFyc2VJbnQoVHdlZW5MaXRlLmF1dG9TbGVlcCwgMTApIHx8IDEyMCk7XG5cdFx0XHRcdFx0Zm9yIChwIGluIF90d2Vlbkxvb2t1cCkge1xuXHRcdFx0XHRcdFx0YSA9IF90d2Vlbkxvb2t1cFtwXS50d2VlbnM7XG5cdFx0XHRcdFx0XHRpID0gYS5sZW5ndGg7XG5cdFx0XHRcdFx0XHR3aGlsZSAoLS1pID4gLTEpIHtcblx0XHRcdFx0XHRcdFx0aWYgKGFbaV0uX2djKSB7XG5cdFx0XHRcdFx0XHRcdFx0YS5zcGxpY2UoaSwgMSk7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdGlmIChhLmxlbmd0aCA9PT0gMCkge1xuXHRcdFx0XHRcdFx0XHRkZWxldGUgX3R3ZWVuTG9va3VwW3BdO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHQvL2lmIHRoZXJlIGFyZSBubyBtb3JlIHR3ZWVucyBpbiB0aGUgcm9vdCB0aW1lbGluZXMsIG9yIGlmIHRoZXkncmUgYWxsIHBhdXNlZCwgbWFrZSB0aGUgX3RpbWVyIHNsZWVwIHRvIHJlZHVjZSBsb2FkIG9uIHRoZSBDUFUgc2xpZ2h0bHlcblx0XHRcdFx0XHRwID0gX3Jvb3RUaW1lbGluZS5fZmlyc3Q7XG5cdFx0XHRcdFx0aWYgKCFwIHx8IHAuX3BhdXNlZCkgaWYgKFR3ZWVuTGl0ZS5hdXRvU2xlZXAgJiYgIV9yb290RnJhbWVzVGltZWxpbmUuX2ZpcnN0ICYmIF90aWNrZXIuX2xpc3RlbmVycy50aWNrLmxlbmd0aCA9PT0gMSkge1xuXHRcdFx0XHRcdFx0d2hpbGUgKHAgJiYgcC5fcGF1c2VkKSB7XG5cdFx0XHRcdFx0XHRcdHAgPSBwLl9uZXh0O1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0aWYgKCFwKSB7XG5cdFx0XHRcdFx0XHRcdF90aWNrZXIuc2xlZXAoKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH07XG5cblx0XHRfdGlja2VyLmFkZEV2ZW50TGlzdGVuZXIoXCJ0aWNrXCIsIEFuaW1hdGlvbi5fdXBkYXRlUm9vdCk7XG5cblx0XHR2YXIgX3JlZ2lzdGVyID0gZnVuY3Rpb24odGFyZ2V0LCB0d2Vlbiwgc2NydWIpIHtcblx0XHRcdFx0dmFyIGlkID0gdGFyZ2V0Ll9nc1R3ZWVuSUQsIGEsIGk7XG5cdFx0XHRcdGlmICghX3R3ZWVuTG9va3VwW2lkIHx8ICh0YXJnZXQuX2dzVHdlZW5JRCA9IGlkID0gXCJ0XCIgKyAoX3R3ZWVuTG9va3VwTnVtKyspKV0pIHtcblx0XHRcdFx0XHRfdHdlZW5Mb29rdXBbaWRdID0ge3RhcmdldDp0YXJnZXQsIHR3ZWVuczpbXX07XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKHR3ZWVuKSB7XG5cdFx0XHRcdFx0YSA9IF90d2Vlbkxvb2t1cFtpZF0udHdlZW5zO1xuXHRcdFx0XHRcdGFbKGkgPSBhLmxlbmd0aCldID0gdHdlZW47XG5cdFx0XHRcdFx0aWYgKHNjcnViKSB7XG5cdFx0XHRcdFx0XHR3aGlsZSAoLS1pID4gLTEpIHtcblx0XHRcdFx0XHRcdFx0aWYgKGFbaV0gPT09IHR3ZWVuKSB7XG5cdFx0XHRcdFx0XHRcdFx0YS5zcGxpY2UoaSwgMSk7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdFx0cmV0dXJuIF90d2Vlbkxvb2t1cFtpZF0udHdlZW5zO1xuXHRcdFx0fSxcblx0XHRcdF9vbk92ZXJ3cml0ZSA9IGZ1bmN0aW9uKG92ZXJ3cml0dGVuVHdlZW4sIG92ZXJ3cml0aW5nVHdlZW4sIHRhcmdldCwga2lsbGVkUHJvcHMpIHtcblx0XHRcdFx0dmFyIGZ1bmMgPSBvdmVyd3JpdHRlblR3ZWVuLnZhcnMub25PdmVyd3JpdGUsIHIxLCByMjtcblx0XHRcdFx0aWYgKGZ1bmMpIHtcblx0XHRcdFx0XHRyMSA9IGZ1bmMob3ZlcndyaXR0ZW5Ud2Vlbiwgb3ZlcndyaXRpbmdUd2VlbiwgdGFyZ2V0LCBraWxsZWRQcm9wcyk7XG5cdFx0XHRcdH1cblx0XHRcdFx0ZnVuYyA9IFR3ZWVuTGl0ZS5vbk92ZXJ3cml0ZTtcblx0XHRcdFx0aWYgKGZ1bmMpIHtcblx0XHRcdFx0XHRyMiA9IGZ1bmMob3ZlcndyaXR0ZW5Ud2Vlbiwgb3ZlcndyaXRpbmdUd2VlbiwgdGFyZ2V0LCBraWxsZWRQcm9wcyk7XG5cdFx0XHRcdH1cblx0XHRcdFx0cmV0dXJuIChyMSAhPT0gZmFsc2UgJiYgcjIgIT09IGZhbHNlKTtcblx0XHRcdH0sXG5cdFx0XHRfYXBwbHlPdmVyd3JpdGUgPSBmdW5jdGlvbih0YXJnZXQsIHR3ZWVuLCBwcm9wcywgbW9kZSwgc2libGluZ3MpIHtcblx0XHRcdFx0dmFyIGksIGNoYW5nZWQsIGN1clR3ZWVuLCBsO1xuXHRcdFx0XHRpZiAobW9kZSA9PT0gMSB8fCBtb2RlID49IDQpIHtcblx0XHRcdFx0XHRsID0gc2libGluZ3MubGVuZ3RoO1xuXHRcdFx0XHRcdGZvciAoaSA9IDA7IGkgPCBsOyBpKyspIHtcblx0XHRcdFx0XHRcdGlmICgoY3VyVHdlZW4gPSBzaWJsaW5nc1tpXSkgIT09IHR3ZWVuKSB7XG5cdFx0XHRcdFx0XHRcdGlmICghY3VyVHdlZW4uX2djKSB7XG5cdFx0XHRcdFx0XHRcdFx0aWYgKGN1clR3ZWVuLl9raWxsKG51bGwsIHRhcmdldCwgdHdlZW4pKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRjaGFuZ2VkID0gdHJ1ZTtcblx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH0gZWxzZSBpZiAobW9kZSA9PT0gNSkge1xuXHRcdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0cmV0dXJuIGNoYW5nZWQ7XG5cdFx0XHRcdH1cblx0XHRcdFx0Ly9OT1RFOiBBZGQgMC4wMDAwMDAwMDAxIHRvIG92ZXJjb21lIGZsb2F0aW5nIHBvaW50IGVycm9ycyB0aGF0IGNhbiBjYXVzZSB0aGUgc3RhcnRUaW1lIHRvIGJlIFZFUlkgc2xpZ2h0bHkgb2ZmICh3aGVuIGEgdHdlZW4ncyB0aW1lKCkgaXMgc2V0IGZvciBleGFtcGxlKVxuXHRcdFx0XHR2YXIgc3RhcnRUaW1lID0gdHdlZW4uX3N0YXJ0VGltZSArIF90aW55TnVtLFxuXHRcdFx0XHRcdG92ZXJsYXBzID0gW10sXG5cdFx0XHRcdFx0b0NvdW50ID0gMCxcblx0XHRcdFx0XHR6ZXJvRHVyID0gKHR3ZWVuLl9kdXJhdGlvbiA9PT0gMCksXG5cdFx0XHRcdFx0Z2xvYmFsU3RhcnQ7XG5cdFx0XHRcdGkgPSBzaWJsaW5ncy5sZW5ndGg7XG5cdFx0XHRcdHdoaWxlICgtLWkgPiAtMSkge1xuXHRcdFx0XHRcdGlmICgoY3VyVHdlZW4gPSBzaWJsaW5nc1tpXSkgPT09IHR3ZWVuIHx8IGN1clR3ZWVuLl9nYyB8fCBjdXJUd2Vlbi5fcGF1c2VkKSB7XG5cdFx0XHRcdFx0XHQvL2lnbm9yZVxuXHRcdFx0XHRcdH0gZWxzZSBpZiAoY3VyVHdlZW4uX3RpbWVsaW5lICE9PSB0d2Vlbi5fdGltZWxpbmUpIHtcblx0XHRcdFx0XHRcdGdsb2JhbFN0YXJ0ID0gZ2xvYmFsU3RhcnQgfHwgX2NoZWNrT3ZlcmxhcCh0d2VlbiwgMCwgemVyb0R1cik7XG5cdFx0XHRcdFx0XHRpZiAoX2NoZWNrT3ZlcmxhcChjdXJUd2VlbiwgZ2xvYmFsU3RhcnQsIHplcm9EdXIpID09PSAwKSB7XG5cdFx0XHRcdFx0XHRcdG92ZXJsYXBzW29Db3VudCsrXSA9IGN1clR3ZWVuO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH0gZWxzZSBpZiAoY3VyVHdlZW4uX3N0YXJ0VGltZSA8PSBzdGFydFRpbWUpIGlmIChjdXJUd2Vlbi5fc3RhcnRUaW1lICsgY3VyVHdlZW4udG90YWxEdXJhdGlvbigpIC8gY3VyVHdlZW4uX3RpbWVTY2FsZSA+IHN0YXJ0VGltZSkgaWYgKCEoKHplcm9EdXIgfHwgIWN1clR3ZWVuLl9pbml0dGVkKSAmJiBzdGFydFRpbWUgLSBjdXJUd2Vlbi5fc3RhcnRUaW1lIDw9IDAuMDAwMDAwMDAwMikpIHtcblx0XHRcdFx0XHRcdG92ZXJsYXBzW29Db3VudCsrXSA9IGN1clR3ZWVuO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXG5cdFx0XHRcdGkgPSBvQ291bnQ7XG5cdFx0XHRcdHdoaWxlICgtLWkgPiAtMSkge1xuXHRcdFx0XHRcdGN1clR3ZWVuID0gb3ZlcmxhcHNbaV07XG5cdFx0XHRcdFx0aWYgKG1vZGUgPT09IDIpIGlmIChjdXJUd2Vlbi5fa2lsbChwcm9wcywgdGFyZ2V0LCB0d2VlbikpIHtcblx0XHRcdFx0XHRcdGNoYW5nZWQgPSB0cnVlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRpZiAobW9kZSAhPT0gMiB8fCAoIWN1clR3ZWVuLl9maXJzdFBUICYmIGN1clR3ZWVuLl9pbml0dGVkKSkge1xuXHRcdFx0XHRcdFx0aWYgKG1vZGUgIT09IDIgJiYgIV9vbk92ZXJ3cml0ZShjdXJUd2VlbiwgdHdlZW4pKSB7XG5cdFx0XHRcdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0aWYgKGN1clR3ZWVuLl9lbmFibGVkKGZhbHNlLCBmYWxzZSkpIHsgLy9pZiBhbGwgcHJvcGVydHkgdHdlZW5zIGhhdmUgYmVlbiBvdmVyd3JpdHRlbiwga2lsbCB0aGUgdHdlZW4uXG5cdFx0XHRcdFx0XHRcdGNoYW5nZWQgPSB0cnVlO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHRyZXR1cm4gY2hhbmdlZDtcblx0XHRcdH0sXG5cdFx0XHRfY2hlY2tPdmVybGFwID0gZnVuY3Rpb24odHdlZW4sIHJlZmVyZW5jZSwgemVyb0R1cikge1xuXHRcdFx0XHR2YXIgdGwgPSB0d2Vlbi5fdGltZWxpbmUsXG5cdFx0XHRcdFx0dHMgPSB0bC5fdGltZVNjYWxlLFxuXHRcdFx0XHRcdHQgPSB0d2Vlbi5fc3RhcnRUaW1lO1xuXHRcdFx0XHR3aGlsZSAodGwuX3RpbWVsaW5lKSB7XG5cdFx0XHRcdFx0dCArPSB0bC5fc3RhcnRUaW1lO1xuXHRcdFx0XHRcdHRzICo9IHRsLl90aW1lU2NhbGU7XG5cdFx0XHRcdFx0aWYgKHRsLl9wYXVzZWQpIHtcblx0XHRcdFx0XHRcdHJldHVybiAtMTAwO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHR0bCA9IHRsLl90aW1lbGluZTtcblx0XHRcdFx0fVxuXHRcdFx0XHR0IC89IHRzO1xuXHRcdFx0XHRyZXR1cm4gKHQgPiByZWZlcmVuY2UpID8gdCAtIHJlZmVyZW5jZSA6ICgoemVyb0R1ciAmJiB0ID09PSByZWZlcmVuY2UpIHx8ICghdHdlZW4uX2luaXR0ZWQgJiYgdCAtIHJlZmVyZW5jZSA8IDIgKiBfdGlueU51bSkpID8gX3RpbnlOdW0gOiAoKHQgKz0gdHdlZW4udG90YWxEdXJhdGlvbigpIC8gdHdlZW4uX3RpbWVTY2FsZSAvIHRzKSA+IHJlZmVyZW5jZSArIF90aW55TnVtKSA/IDAgOiB0IC0gcmVmZXJlbmNlIC0gX3RpbnlOdW07XG5cdFx0XHR9O1xuXG5cbi8vLS0tLSBUd2VlbkxpdGUgaW5zdGFuY2UgbWV0aG9kcyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5cdFx0cC5faW5pdCA9IGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIHYgPSB0aGlzLnZhcnMsXG5cdFx0XHRcdG9wID0gdGhpcy5fb3ZlcndyaXR0ZW5Qcm9wcyxcblx0XHRcdFx0ZHVyID0gdGhpcy5fZHVyYXRpb24sXG5cdFx0XHRcdGltbWVkaWF0ZSA9ICEhdi5pbW1lZGlhdGVSZW5kZXIsXG5cdFx0XHRcdGVhc2UgPSB2LmVhc2UsXG5cdFx0XHRcdGksIGluaXRQbHVnaW5zLCBwdCwgcCwgc3RhcnRWYXJzLCBsO1xuXHRcdFx0aWYgKHYuc3RhcnRBdCkge1xuXHRcdFx0XHRpZiAodGhpcy5fc3RhcnRBdCkge1xuXHRcdFx0XHRcdHRoaXMuX3N0YXJ0QXQucmVuZGVyKC0xLCB0cnVlKTsgLy9pZiB3ZSd2ZSBydW4gYSBzdGFydEF0IHByZXZpb3VzbHkgKHdoZW4gdGhlIHR3ZWVuIGluc3RhbnRpYXRlZCksIHdlIHNob3VsZCByZXZlcnQgaXQgc28gdGhhdCB0aGUgdmFsdWVzIHJlLWluc3RhbnRpYXRlIGNvcnJlY3RseSBwYXJ0aWN1bGFybHkgZm9yIHJlbGF0aXZlIHR3ZWVucy4gV2l0aG91dCB0aGlzLCBhIFR3ZWVuTGl0ZS5mcm9tVG8ob2JqLCAxLCB7eDpcIis9MTAwXCJ9LCB7eDpcIi09MTAwXCJ9KSwgZm9yIGV4YW1wbGUsIHdvdWxkIGFjdHVhbGx5IGp1bXAgdG8gKz0yMDAgYmVjYXVzZSB0aGUgc3RhcnRBdCB3b3VsZCBydW4gdHdpY2UsIGRvdWJsaW5nIHRoZSByZWxhdGl2ZSBjaGFuZ2UuXG5cdFx0XHRcdFx0dGhpcy5fc3RhcnRBdC5raWxsKCk7XG5cdFx0XHRcdH1cblx0XHRcdFx0c3RhcnRWYXJzID0ge307XG5cdFx0XHRcdGZvciAocCBpbiB2LnN0YXJ0QXQpIHsgLy9jb3B5IHRoZSBwcm9wZXJ0aWVzL3ZhbHVlcyBpbnRvIGEgbmV3IG9iamVjdCB0byBhdm9pZCBjb2xsaXNpb25zLCBsaWtlIHZhciB0byA9IHt4OjB9LCBmcm9tID0ge3g6NTAwfTsgdGltZWxpbmUuZnJvbVRvKGUsIDEsIGZyb20sIHRvKS5mcm9tVG8oZSwgMSwgdG8sIGZyb20pO1xuXHRcdFx0XHRcdHN0YXJ0VmFyc1twXSA9IHYuc3RhcnRBdFtwXTtcblx0XHRcdFx0fVxuXHRcdFx0XHRzdGFydFZhcnMuZGF0YSA9IFwiaXNTdGFydFwiO1xuXHRcdFx0XHRzdGFydFZhcnMub3ZlcndyaXRlID0gZmFsc2U7XG5cdFx0XHRcdHN0YXJ0VmFycy5pbW1lZGlhdGVSZW5kZXIgPSB0cnVlO1xuXHRcdFx0XHRzdGFydFZhcnMubGF6eSA9IChpbW1lZGlhdGUgJiYgdi5sYXp5ICE9PSBmYWxzZSk7XG5cdFx0XHRcdHN0YXJ0VmFycy5zdGFydEF0ID0gc3RhcnRWYXJzLmRlbGF5ID0gbnVsbDsgLy9ubyBuZXN0aW5nIG9mIHN0YXJ0QXQgb2JqZWN0cyBhbGxvd2VkIChvdGhlcndpc2UgaXQgY291bGQgY2F1c2UgYW4gaW5maW5pdGUgbG9vcCkuXG5cdFx0XHRcdHN0YXJ0VmFycy5vblVwZGF0ZSA9IHYub25VcGRhdGU7XG5cdFx0XHRcdHN0YXJ0VmFycy5vblVwZGF0ZVBhcmFtcyA9IHYub25VcGRhdGVQYXJhbXM7XG5cdFx0XHRcdHN0YXJ0VmFycy5vblVwZGF0ZVNjb3BlID0gdi5vblVwZGF0ZVNjb3BlIHx8IHYuY2FsbGJhY2tTY29wZSB8fCB0aGlzO1xuXHRcdFx0XHR0aGlzLl9zdGFydEF0ID0gVHdlZW5MaXRlLnRvKHRoaXMudGFyZ2V0IHx8IHt9LCAwLCBzdGFydFZhcnMpO1xuXHRcdFx0XHRpZiAoaW1tZWRpYXRlKSB7XG5cdFx0XHRcdFx0aWYgKHRoaXMuX3RpbWUgPiAwKSB7XG5cdFx0XHRcdFx0XHR0aGlzLl9zdGFydEF0ID0gbnVsbDsgLy90d2VlbnMgdGhhdCByZW5kZXIgaW1tZWRpYXRlbHkgKGxpa2UgbW9zdCBmcm9tKCkgYW5kIGZyb21UbygpIHR3ZWVucykgc2hvdWxkbid0IHJldmVydCB3aGVuIHRoZWlyIHBhcmVudCB0aW1lbGluZSdzIHBsYXloZWFkIGdvZXMgYmFja3dhcmQgcGFzdCB0aGUgc3RhcnRUaW1lIGJlY2F1c2UgdGhlIGluaXRpYWwgcmVuZGVyIGNvdWxkIGhhdmUgaGFwcGVuZWQgYW55dGltZSBhbmQgaXQgc2hvdWxkbid0IGJlIGRpcmVjdGx5IGNvcnJlbGF0ZWQgdG8gdGhpcyB0d2VlbidzIHN0YXJ0VGltZS4gSW1hZ2luZSBzZXR0aW5nIHVwIGEgY29tcGxleCBhbmltYXRpb24gd2hlcmUgdGhlIGJlZ2lubmluZyBzdGF0ZXMgb2YgdmFyaW91cyBvYmplY3RzIGFyZSByZW5kZXJlZCBpbW1lZGlhdGVseSBidXQgdGhlIHR3ZWVuIGRvZXNuJ3QgaGFwcGVuIGZvciBxdWl0ZSBzb21lIHRpbWUgLSBpZiB3ZSByZXZlcnQgdG8gdGhlIHN0YXJ0aW5nIHZhbHVlcyBhcyBzb29uIGFzIHRoZSBwbGF5aGVhZCBnb2VzIGJhY2t3YXJkIHBhc3QgdGhlIHR3ZWVuJ3Mgc3RhcnRUaW1lLCBpdCB3aWxsIHRocm93IHRoaW5ncyBvZmYgdmlzdWFsbHkuIFJldmVyc2lvbiBzaG91bGQgb25seSBoYXBwZW4gaW4gVGltZWxpbmVMaXRlL01heCBpbnN0YW5jZXMgd2hlcmUgaW1tZWRpYXRlUmVuZGVyIHdhcyBmYWxzZSAod2hpY2ggaXMgdGhlIGRlZmF1bHQgaW4gdGhlIGNvbnZlbmllbmNlIG1ldGhvZHMgbGlrZSBmcm9tKCkpLlxuXHRcdFx0XHRcdH0gZWxzZSBpZiAoZHVyICE9PSAwKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm47IC8vd2Ugc2tpcCBpbml0aWFsaXphdGlvbiBoZXJlIHNvIHRoYXQgb3ZlcndyaXRpbmcgZG9lc24ndCBvY2N1ciB1bnRpbCB0aGUgdHdlZW4gYWN0dWFsbHkgYmVnaW5zLiBPdGhlcndpc2UsIGlmIHlvdSBjcmVhdGUgc2V2ZXJhbCBpbW1lZGlhdGVSZW5kZXI6dHJ1ZSB0d2VlbnMgb2YgdGhlIHNhbWUgdGFyZ2V0L3Byb3BlcnRpZXMgdG8gZHJvcCBpbnRvIGEgVGltZWxpbmVMaXRlIG9yIFRpbWVsaW5lTWF4LCB0aGUgbGFzdCBvbmUgY3JlYXRlZCB3b3VsZCBvdmVyd3JpdGUgdGhlIGZpcnN0IG9uZXMgYmVjYXVzZSB0aGV5IGRpZG4ndCBnZXQgcGxhY2VkIGludG8gdGhlIHRpbWVsaW5lIHlldCBiZWZvcmUgdGhlIGZpcnN0IHJlbmRlciBvY2N1cnMgYW5kIGtpY2tzIGluIG92ZXJ3cml0aW5nLlxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIGlmICh2LnJ1bkJhY2t3YXJkcyAmJiBkdXIgIT09IDApIHtcblx0XHRcdFx0Ly9mcm9tKCkgdHdlZW5zIG11c3QgYmUgaGFuZGxlZCB1bmlxdWVseTogdGhlaXIgYmVnaW5uaW5nIHZhbHVlcyBtdXN0IGJlIHJlbmRlcmVkIGJ1dCB3ZSBkb24ndCB3YW50IG92ZXJ3cml0aW5nIHRvIG9jY3VyIHlldCAod2hlbiB0aW1lIGlzIHN0aWxsIDApLiBXYWl0IHVudGlsIHRoZSB0d2VlbiBhY3R1YWxseSBiZWdpbnMgYmVmb3JlIGRvaW5nIGFsbCB0aGUgcm91dGluZXMgbGlrZSBvdmVyd3JpdGluZy4gQXQgdGhhdCB0aW1lLCB3ZSBzaG91bGQgcmVuZGVyIGF0IHRoZSBFTkQgb2YgdGhlIHR3ZWVuIHRvIGVuc3VyZSB0aGF0IHRoaW5ncyBpbml0aWFsaXplIGNvcnJlY3RseSAocmVtZW1iZXIsIGZyb20oKSB0d2VlbnMgZ28gYmFja3dhcmRzKVxuXHRcdFx0XHRpZiAodGhpcy5fc3RhcnRBdCkge1xuXHRcdFx0XHRcdHRoaXMuX3N0YXJ0QXQucmVuZGVyKC0xLCB0cnVlKTtcblx0XHRcdFx0XHR0aGlzLl9zdGFydEF0LmtpbGwoKTtcblx0XHRcdFx0XHR0aGlzLl9zdGFydEF0ID0gbnVsbDtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRpZiAodGhpcy5fdGltZSAhPT0gMCkgeyAvL2luIHJhcmUgY2FzZXMgKGxpa2UgaWYgYSBmcm9tKCkgdHdlZW4gcnVucyBhbmQgdGhlbiBpcyBpbnZhbGlkYXRlKCktZWQpLCBpbW1lZGlhdGVSZW5kZXIgY291bGQgYmUgdHJ1ZSBidXQgdGhlIGluaXRpYWwgZm9yY2VkLXJlbmRlciBnZXRzIHNraXBwZWQsIHNvIHRoZXJlJ3Mgbm8gbmVlZCB0byBmb3JjZSB0aGUgcmVuZGVyIGluIHRoaXMgY29udGV4dCB3aGVuIHRoZSBfdGltZSBpcyBncmVhdGVyIHRoYW4gMFxuXHRcdFx0XHRcdFx0aW1tZWRpYXRlID0gZmFsc2U7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHB0ID0ge307XG5cdFx0XHRcdFx0Zm9yIChwIGluIHYpIHsgLy9jb3B5IHByb3BzIGludG8gYSBuZXcgb2JqZWN0IGFuZCBza2lwIGFueSByZXNlcnZlZCBwcm9wcywgb3RoZXJ3aXNlIG9uQ29tcGxldGUgb3Igb25VcGRhdGUgb3Igb25TdGFydCBjb3VsZCBmaXJlLiBXZSBzaG91bGQsIGhvd2V2ZXIsIHBlcm1pdCBhdXRvQ1NTIHRvIGdvIHRocm91Z2guXG5cdFx0XHRcdFx0XHRpZiAoIV9yZXNlcnZlZFByb3BzW3BdIHx8IHAgPT09IFwiYXV0b0NTU1wiKSB7XG5cdFx0XHRcdFx0XHRcdHB0W3BdID0gdltwXTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0cHQub3ZlcndyaXRlID0gMDtcblx0XHRcdFx0XHRwdC5kYXRhID0gXCJpc0Zyb21TdGFydFwiOyAvL3dlIHRhZyB0aGUgdHdlZW4gd2l0aCBhcyBcImlzRnJvbVN0YXJ0XCIgc28gdGhhdCBpZiBbaW5zaWRlIGEgcGx1Z2luXSB3ZSBuZWVkIHRvIG9ubHkgZG8gc29tZXRoaW5nIGF0IHRoZSB2ZXJ5IEVORCBvZiBhIHR3ZWVuLCB3ZSBoYXZlIGEgd2F5IG9mIGlkZW50aWZ5aW5nIHRoaXMgdHdlZW4gYXMgbWVyZWx5IHRoZSBvbmUgdGhhdCdzIHNldHRpbmcgdGhlIGJlZ2lubmluZyB2YWx1ZXMgZm9yIGEgXCJmcm9tKClcIiB0d2Vlbi4gRm9yIGV4YW1wbGUsIGNsZWFyUHJvcHMgaW4gQ1NTUGx1Z2luIHNob3VsZCBvbmx5IGdldCBhcHBsaWVkIGF0IHRoZSB2ZXJ5IEVORCBvZiBhIHR3ZWVuIGFuZCB3aXRob3V0IHRoaXMgdGFnLCBmcm9tKC4uLntoZWlnaHQ6MTAwLCBjbGVhclByb3BzOlwiaGVpZ2h0XCIsIGRlbGF5OjF9KSB3b3VsZCB3aXBlIHRoZSBoZWlnaHQgYXQgdGhlIGJlZ2lubmluZyBvZiB0aGUgdHdlZW4gYW5kIGFmdGVyIDEgc2Vjb25kLCBpdCdkIGtpY2sgYmFjayBpbi5cblx0XHRcdFx0XHRwdC5sYXp5ID0gKGltbWVkaWF0ZSAmJiB2LmxhenkgIT09IGZhbHNlKTtcblx0XHRcdFx0XHRwdC5pbW1lZGlhdGVSZW5kZXIgPSBpbW1lZGlhdGU7IC8vemVyby1kdXJhdGlvbiB0d2VlbnMgcmVuZGVyIGltbWVkaWF0ZWx5IGJ5IGRlZmF1bHQsIGJ1dCBpZiB3ZSdyZSBub3Qgc3BlY2lmaWNhbGx5IGluc3RydWN0ZWQgdG8gcmVuZGVyIHRoaXMgdHdlZW4gaW1tZWRpYXRlbHksIHdlIHNob3VsZCBza2lwIHRoaXMgYW5kIG1lcmVseSBfaW5pdCgpIHRvIHJlY29yZCB0aGUgc3RhcnRpbmcgdmFsdWVzIChyZW5kZXJpbmcgdGhlbSBpbW1lZGlhdGVseSB3b3VsZCBwdXNoIHRoZW0gdG8gY29tcGxldGlvbiB3aGljaCBpcyB3YXN0ZWZ1bCBpbiB0aGF0IGNhc2UgLSB3ZSdkIGhhdmUgdG8gcmVuZGVyKC0xKSBpbW1lZGlhdGVseSBhZnRlcilcblx0XHRcdFx0XHR0aGlzLl9zdGFydEF0ID0gVHdlZW5MaXRlLnRvKHRoaXMudGFyZ2V0LCAwLCBwdCk7XG5cdFx0XHRcdFx0aWYgKCFpbW1lZGlhdGUpIHtcblx0XHRcdFx0XHRcdHRoaXMuX3N0YXJ0QXQuX2luaXQoKTsgLy9lbnN1cmVzIHRoYXQgdGhlIGluaXRpYWwgdmFsdWVzIGFyZSByZWNvcmRlZFxuXHRcdFx0XHRcdFx0dGhpcy5fc3RhcnRBdC5fZW5hYmxlZChmYWxzZSk7IC8vbm8gbmVlZCB0byBoYXZlIHRoZSB0d2VlbiByZW5kZXIgb24gdGhlIG5leHQgY3ljbGUuIERpc2FibGUgaXQgYmVjYXVzZSB3ZSdsbCBhbHdheXMgbWFudWFsbHkgY29udHJvbCB0aGUgcmVuZGVycyBvZiB0aGUgX3N0YXJ0QXQgdHdlZW4uXG5cdFx0XHRcdFx0XHRpZiAodGhpcy52YXJzLmltbWVkaWF0ZVJlbmRlcikge1xuXHRcdFx0XHRcdFx0XHR0aGlzLl9zdGFydEF0ID0gbnVsbDtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9IGVsc2UgaWYgKHRoaXMuX3RpbWUgPT09IDApIHtcblx0XHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdHRoaXMuX2Vhc2UgPSBlYXNlID0gKCFlYXNlKSA/IFR3ZWVuTGl0ZS5kZWZhdWx0RWFzZSA6IChlYXNlIGluc3RhbmNlb2YgRWFzZSkgPyBlYXNlIDogKHR5cGVvZihlYXNlKSA9PT0gXCJmdW5jdGlvblwiKSA/IG5ldyBFYXNlKGVhc2UsIHYuZWFzZVBhcmFtcykgOiBfZWFzZU1hcFtlYXNlXSB8fCBUd2VlbkxpdGUuZGVmYXVsdEVhc2U7XG5cdFx0XHRpZiAodi5lYXNlUGFyYW1zIGluc3RhbmNlb2YgQXJyYXkgJiYgZWFzZS5jb25maWcpIHtcblx0XHRcdFx0dGhpcy5fZWFzZSA9IGVhc2UuY29uZmlnLmFwcGx5KGVhc2UsIHYuZWFzZVBhcmFtcyk7XG5cdFx0XHR9XG5cdFx0XHR0aGlzLl9lYXNlVHlwZSA9IHRoaXMuX2Vhc2UuX3R5cGU7XG5cdFx0XHR0aGlzLl9lYXNlUG93ZXIgPSB0aGlzLl9lYXNlLl9wb3dlcjtcblx0XHRcdHRoaXMuX2ZpcnN0UFQgPSBudWxsO1xuXG5cdFx0XHRpZiAodGhpcy5fdGFyZ2V0cykge1xuXHRcdFx0XHRsID0gdGhpcy5fdGFyZ2V0cy5sZW5ndGg7XG5cdFx0XHRcdGZvciAoaSA9IDA7IGkgPCBsOyBpKyspIHtcblx0XHRcdFx0XHRpZiAoIHRoaXMuX2luaXRQcm9wcyggdGhpcy5fdGFyZ2V0c1tpXSwgKHRoaXMuX3Byb3BMb29rdXBbaV0gPSB7fSksIHRoaXMuX3NpYmxpbmdzW2ldLCAob3AgPyBvcFtpXSA6IG51bGwpLCBpKSApIHtcblx0XHRcdFx0XHRcdGluaXRQbHVnaW5zID0gdHJ1ZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGluaXRQbHVnaW5zID0gdGhpcy5faW5pdFByb3BzKHRoaXMudGFyZ2V0LCB0aGlzLl9wcm9wTG9va3VwLCB0aGlzLl9zaWJsaW5ncywgb3AsIDApO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoaW5pdFBsdWdpbnMpIHtcblx0XHRcdFx0VHdlZW5MaXRlLl9vblBsdWdpbkV2ZW50KFwiX29uSW5pdEFsbFByb3BzXCIsIHRoaXMpOyAvL3Jlb3JkZXJzIHRoZSBhcnJheSBpbiBvcmRlciBvZiBwcmlvcml0eS4gVXNlcyBhIHN0YXRpYyBUd2VlblBsdWdpbiBtZXRob2QgaW4gb3JkZXIgdG8gbWluaW1pemUgZmlsZSBzaXplIGluIFR3ZWVuTGl0ZVxuXHRcdFx0fVxuXHRcdFx0aWYgKG9wKSBpZiAoIXRoaXMuX2ZpcnN0UFQpIGlmICh0eXBlb2YodGhpcy50YXJnZXQpICE9PSBcImZ1bmN0aW9uXCIpIHsgLy9pZiBhbGwgdHdlZW5pbmcgcHJvcGVydGllcyBoYXZlIGJlZW4gb3ZlcndyaXR0ZW4sIGtpbGwgdGhlIHR3ZWVuLiBJZiB0aGUgdGFyZ2V0IGlzIGEgZnVuY3Rpb24sIGl0J3MgcHJvYmFibHkgYSBkZWxheWVkQ2FsbCBzbyBsZXQgaXQgbGl2ZS5cblx0XHRcdFx0dGhpcy5fZW5hYmxlZChmYWxzZSwgZmFsc2UpO1xuXHRcdFx0fVxuXHRcdFx0aWYgKHYucnVuQmFja3dhcmRzKSB7XG5cdFx0XHRcdHB0ID0gdGhpcy5fZmlyc3RQVDtcblx0XHRcdFx0d2hpbGUgKHB0KSB7XG5cdFx0XHRcdFx0cHQucyArPSBwdC5jO1xuXHRcdFx0XHRcdHB0LmMgPSAtcHQuYztcblx0XHRcdFx0XHRwdCA9IHB0Ll9uZXh0O1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHR0aGlzLl9vblVwZGF0ZSA9IHYub25VcGRhdGU7XG5cdFx0XHR0aGlzLl9pbml0dGVkID0gdHJ1ZTtcblx0XHR9O1xuXG5cdFx0cC5faW5pdFByb3BzID0gZnVuY3Rpb24odGFyZ2V0LCBwcm9wTG9va3VwLCBzaWJsaW5ncywgb3ZlcndyaXR0ZW5Qcm9wcywgaW5kZXgpIHtcblx0XHRcdHZhciBwLCBpLCBpbml0UGx1Z2lucywgcGx1Z2luLCBwdCwgdjtcblx0XHRcdGlmICh0YXJnZXQgPT0gbnVsbCkge1xuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHR9XG5cblx0XHRcdGlmIChfbGF6eUxvb2t1cFt0YXJnZXQuX2dzVHdlZW5JRF0pIHtcblx0XHRcdFx0X2xhenlSZW5kZXIoKTsgLy9pZiBvdGhlciB0d2VlbnMgb2YgdGhlIHNhbWUgdGFyZ2V0IGhhdmUgcmVjZW50bHkgaW5pdHRlZCBidXQgaGF2ZW4ndCByZW5kZXJlZCB5ZXQsIHdlJ3ZlIGdvdCB0byBmb3JjZSB0aGUgcmVuZGVyIHNvIHRoYXQgdGhlIHN0YXJ0aW5nIHZhbHVlcyBhcmUgY29ycmVjdCAoaW1hZ2luZSBwb3B1bGF0aW5nIGEgdGltZWxpbmUgd2l0aCBhIGJ1bmNoIG9mIHNlcXVlbnRpYWwgdHdlZW5zIGFuZCB0aGVuIGp1bXBpbmcgdG8gdGhlIGVuZClcblx0XHRcdH1cblxuXHRcdFx0aWYgKCF0aGlzLnZhcnMuY3NzKSBpZiAodGFyZ2V0LnN0eWxlKSBpZiAodGFyZ2V0ICE9PSB3aW5kb3cgJiYgdGFyZ2V0Lm5vZGVUeXBlKSBpZiAoX3BsdWdpbnMuY3NzKSBpZiAodGhpcy52YXJzLmF1dG9DU1MgIT09IGZhbHNlKSB7IC8vaXQncyBzbyBjb21tb24gdG8gdXNlIFR3ZWVuTGl0ZS9NYXggdG8gYW5pbWF0ZSB0aGUgY3NzIG9mIERPTSBlbGVtZW50cywgd2UgYXNzdW1lIHRoYXQgaWYgdGhlIHRhcmdldCBpcyBhIERPTSBlbGVtZW50LCB0aGF0J3Mgd2hhdCBpcyBpbnRlbmRlZCAoYSBjb252ZW5pZW5jZSBzbyB0aGF0IHVzZXJzIGRvbid0IGhhdmUgdG8gd3JhcCB0aGluZ3MgaW4gY3NzOnt9LCBhbHRob3VnaCB3ZSBzdGlsbCByZWNvbW1lbmQgaXQgZm9yIGEgc2xpZ2h0IHBlcmZvcm1hbmNlIGJvb3N0IGFuZCBiZXR0ZXIgc3BlY2lmaWNpdHkpLiBOb3RlOiB3ZSBjYW5ub3QgY2hlY2sgXCJub2RlVHlwZVwiIG9uIHRoZSB3aW5kb3cgaW5zaWRlIGFuIGlmcmFtZS5cblx0XHRcdFx0X2F1dG9DU1ModGhpcy52YXJzLCB0YXJnZXQpO1xuXHRcdFx0fVxuXHRcdFx0Zm9yIChwIGluIHRoaXMudmFycykge1xuXHRcdFx0XHR2ID0gdGhpcy52YXJzW3BdO1xuXHRcdFx0XHRpZiAoX3Jlc2VydmVkUHJvcHNbcF0pIHtcblx0XHRcdFx0XHRpZiAodikgaWYgKCh2IGluc3RhbmNlb2YgQXJyYXkpIHx8ICh2LnB1c2ggJiYgX2lzQXJyYXkodikpKSBpZiAodi5qb2luKFwiXCIpLmluZGV4T2YoXCJ7c2VsZn1cIikgIT09IC0xKSB7XG5cdFx0XHRcdFx0XHR0aGlzLnZhcnNbcF0gPSB2ID0gdGhpcy5fc3dhcFNlbGZJblBhcmFtcyh2LCB0aGlzKTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0fSBlbHNlIGlmIChfcGx1Z2luc1twXSAmJiAocGx1Z2luID0gbmV3IF9wbHVnaW5zW3BdKCkpLl9vbkluaXRUd2Vlbih0YXJnZXQsIHRoaXMudmFyc1twXSwgdGhpcywgaW5kZXgpKSB7XG5cblx0XHRcdFx0XHQvL3QgLSB0YXJnZXQgXHRcdFtvYmplY3RdXG5cdFx0XHRcdFx0Ly9wIC0gcHJvcGVydHkgXHRcdFtzdHJpbmddXG5cdFx0XHRcdFx0Ly9zIC0gc3RhcnRcdFx0XHRbbnVtYmVyXVxuXHRcdFx0XHRcdC8vYyAtIGNoYW5nZVx0XHRbbnVtYmVyXVxuXHRcdFx0XHRcdC8vZiAtIGlzRnVuY3Rpb25cdFtib29sZWFuXVxuXHRcdFx0XHRcdC8vbiAtIG5hbWVcdFx0XHRbc3RyaW5nXVxuXHRcdFx0XHRcdC8vcGcgLSBpc1BsdWdpbiBcdFtib29sZWFuXVxuXHRcdFx0XHRcdC8vcHIgLSBwcmlvcml0eVx0XHRbbnVtYmVyXVxuXHRcdFx0XHRcdC8vbSAtIG1vZCAgICAgICAgICAgW2Z1bmN0aW9uIHwgMF1cblx0XHRcdFx0XHR0aGlzLl9maXJzdFBUID0gcHQgPSB7X25leHQ6dGhpcy5fZmlyc3RQVCwgdDpwbHVnaW4sIHA6XCJzZXRSYXRpb1wiLCBzOjAsIGM6MSwgZjoxLCBuOnAsIHBnOjEsIHByOnBsdWdpbi5fcHJpb3JpdHksIG06MH07XG5cdFx0XHRcdFx0aSA9IHBsdWdpbi5fb3ZlcndyaXRlUHJvcHMubGVuZ3RoO1xuXHRcdFx0XHRcdHdoaWxlICgtLWkgPiAtMSkge1xuXHRcdFx0XHRcdFx0cHJvcExvb2t1cFtwbHVnaW4uX292ZXJ3cml0ZVByb3BzW2ldXSA9IHRoaXMuX2ZpcnN0UFQ7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGlmIChwbHVnaW4uX3ByaW9yaXR5IHx8IHBsdWdpbi5fb25Jbml0QWxsUHJvcHMpIHtcblx0XHRcdFx0XHRcdGluaXRQbHVnaW5zID0gdHJ1ZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0aWYgKHBsdWdpbi5fb25EaXNhYmxlIHx8IHBsdWdpbi5fb25FbmFibGUpIHtcblx0XHRcdFx0XHRcdHRoaXMuX25vdGlmeVBsdWdpbnNPZkVuYWJsZWQgPSB0cnVlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRpZiAocHQuX25leHQpIHtcblx0XHRcdFx0XHRcdHB0Ll9uZXh0Ll9wcmV2ID0gcHQ7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0cHJvcExvb2t1cFtwXSA9IF9hZGRQcm9wVHdlZW4uY2FsbCh0aGlzLCB0YXJnZXQsIHAsIFwiZ2V0XCIsIHYsIHAsIDAsIG51bGwsIHRoaXMudmFycy5zdHJpbmdGaWx0ZXIsIGluZGV4KTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRpZiAob3ZlcndyaXR0ZW5Qcm9wcykgaWYgKHRoaXMuX2tpbGwob3ZlcndyaXR0ZW5Qcm9wcywgdGFyZ2V0KSkgeyAvL2Fub3RoZXIgdHdlZW4gbWF5IGhhdmUgdHJpZWQgdG8gb3ZlcndyaXRlIHByb3BlcnRpZXMgb2YgdGhpcyB0d2VlbiBiZWZvcmUgaW5pdCgpIHdhcyBjYWxsZWQgKGxpa2UgaWYgdHdvIHR3ZWVucyBzdGFydCBhdCB0aGUgc2FtZSB0aW1lLCB0aGUgb25lIGNyZWF0ZWQgc2Vjb25kIHdpbGwgcnVuIGZpcnN0KVxuXHRcdFx0XHRyZXR1cm4gdGhpcy5faW5pdFByb3BzKHRhcmdldCwgcHJvcExvb2t1cCwgc2libGluZ3MsIG92ZXJ3cml0dGVuUHJvcHMsIGluZGV4KTtcblx0XHRcdH1cblx0XHRcdGlmICh0aGlzLl9vdmVyd3JpdGUgPiAxKSBpZiAodGhpcy5fZmlyc3RQVCkgaWYgKHNpYmxpbmdzLmxlbmd0aCA+IDEpIGlmIChfYXBwbHlPdmVyd3JpdGUodGFyZ2V0LCB0aGlzLCBwcm9wTG9va3VwLCB0aGlzLl9vdmVyd3JpdGUsIHNpYmxpbmdzKSkge1xuXHRcdFx0XHR0aGlzLl9raWxsKHByb3BMb29rdXAsIHRhcmdldCk7XG5cdFx0XHRcdHJldHVybiB0aGlzLl9pbml0UHJvcHModGFyZ2V0LCBwcm9wTG9va3VwLCBzaWJsaW5ncywgb3ZlcndyaXR0ZW5Qcm9wcywgaW5kZXgpO1xuXHRcdFx0fVxuXHRcdFx0aWYgKHRoaXMuX2ZpcnN0UFQpIGlmICgodGhpcy52YXJzLmxhenkgIT09IGZhbHNlICYmIHRoaXMuX2R1cmF0aW9uKSB8fCAodGhpcy52YXJzLmxhenkgJiYgIXRoaXMuX2R1cmF0aW9uKSkgeyAvL3plcm8gZHVyYXRpb24gdHdlZW5zIGRvbid0IGxhenkgcmVuZGVyIGJ5IGRlZmF1bHQ7IGV2ZXJ5dGhpbmcgZWxzZSBkb2VzLlxuXHRcdFx0XHRfbGF6eUxvb2t1cFt0YXJnZXQuX2dzVHdlZW5JRF0gPSB0cnVlO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIGluaXRQbHVnaW5zO1xuXHRcdH07XG5cblx0XHRwLnJlbmRlciA9IGZ1bmN0aW9uKHRpbWUsIHN1cHByZXNzRXZlbnRzLCBmb3JjZSkge1xuXHRcdFx0dmFyIHByZXZUaW1lID0gdGhpcy5fdGltZSxcblx0XHRcdFx0ZHVyYXRpb24gPSB0aGlzLl9kdXJhdGlvbixcblx0XHRcdFx0cHJldlJhd1ByZXZUaW1lID0gdGhpcy5fcmF3UHJldlRpbWUsXG5cdFx0XHRcdGlzQ29tcGxldGUsIGNhbGxiYWNrLCBwdCwgcmF3UHJldlRpbWU7XG5cdFx0XHRpZiAodGltZSA+PSBkdXJhdGlvbiAtIDAuMDAwMDAwMSAmJiB0aW1lID49IDApIHsgLy90byB3b3JrIGFyb3VuZCBvY2Nhc2lvbmFsIGZsb2F0aW5nIHBvaW50IG1hdGggYXJ0aWZhY3RzLlxuXHRcdFx0XHR0aGlzLl90b3RhbFRpbWUgPSB0aGlzLl90aW1lID0gZHVyYXRpb247XG5cdFx0XHRcdHRoaXMucmF0aW8gPSB0aGlzLl9lYXNlLl9jYWxjRW5kID8gdGhpcy5fZWFzZS5nZXRSYXRpbygxKSA6IDE7XG5cdFx0XHRcdGlmICghdGhpcy5fcmV2ZXJzZWQgKSB7XG5cdFx0XHRcdFx0aXNDb21wbGV0ZSA9IHRydWU7XG5cdFx0XHRcdFx0Y2FsbGJhY2sgPSBcIm9uQ29tcGxldGVcIjtcblx0XHRcdFx0XHRmb3JjZSA9IChmb3JjZSB8fCB0aGlzLl90aW1lbGluZS5hdXRvUmVtb3ZlQ2hpbGRyZW4pOyAvL290aGVyd2lzZSwgaWYgdGhlIGFuaW1hdGlvbiBpcyB1bnBhdXNlZC9hY3RpdmF0ZWQgYWZ0ZXIgaXQncyBhbHJlYWR5IGZpbmlzaGVkLCBpdCBkb2Vzbid0IGdldCByZW1vdmVkIGZyb20gdGhlIHBhcmVudCB0aW1lbGluZS5cblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoZHVyYXRpb24gPT09IDApIGlmICh0aGlzLl9pbml0dGVkIHx8ICF0aGlzLnZhcnMubGF6eSB8fCBmb3JjZSkgeyAvL3plcm8tZHVyYXRpb24gdHdlZW5zIGFyZSB0cmlja3kgYmVjYXVzZSB3ZSBtdXN0IGRpc2Nlcm4gdGhlIG1vbWVudHVtL2RpcmVjdGlvbiBvZiB0aW1lIGluIG9yZGVyIHRvIGRldGVybWluZSB3aGV0aGVyIHRoZSBzdGFydGluZyB2YWx1ZXMgc2hvdWxkIGJlIHJlbmRlcmVkIG9yIHRoZSBlbmRpbmcgdmFsdWVzLiBJZiB0aGUgXCJwbGF5aGVhZFwiIG9mIGl0cyB0aW1lbGluZSBnb2VzIHBhc3QgdGhlIHplcm8tZHVyYXRpb24gdHdlZW4gaW4gdGhlIGZvcndhcmQgZGlyZWN0aW9uIG9yIGxhbmRzIGRpcmVjdGx5IG9uIGl0LCB0aGUgZW5kIHZhbHVlcyBzaG91bGQgYmUgcmVuZGVyZWQsIGJ1dCBpZiB0aGUgdGltZWxpbmUncyBcInBsYXloZWFkXCIgbW92ZXMgcGFzdCBpdCBpbiB0aGUgYmFja3dhcmQgZGlyZWN0aW9uIChmcm9tIGEgcG9zdGl0aXZlIHRpbWUgdG8gYSBuZWdhdGl2ZSB0aW1lKSwgdGhlIHN0YXJ0aW5nIHZhbHVlcyBtdXN0IGJlIHJlbmRlcmVkLlxuXHRcdFx0XHRcdGlmICh0aGlzLl9zdGFydFRpbWUgPT09IHRoaXMuX3RpbWVsaW5lLl9kdXJhdGlvbikgeyAvL2lmIGEgemVyby1kdXJhdGlvbiB0d2VlbiBpcyBhdCB0aGUgVkVSWSBlbmQgb2YgYSB0aW1lbGluZSBhbmQgdGhhdCB0aW1lbGluZSByZW5kZXJzIGF0IGl0cyBlbmQsIGl0IHdpbGwgdHlwaWNhbGx5IGFkZCBhIHRpbnkgYml0IG9mIGN1c2hpb24gdG8gdGhlIHJlbmRlciB0aW1lIHRvIHByZXZlbnQgcm91bmRpbmcgZXJyb3JzIGZyb20gZ2V0dGluZyBpbiB0aGUgd2F5IG9mIHR3ZWVucyByZW5kZXJpbmcgdGhlaXIgVkVSWSBlbmQuIElmIHdlIHRoZW4gcmV2ZXJzZSgpIHRoYXQgdGltZWxpbmUsIHRoZSB6ZXJvLWR1cmF0aW9uIHR3ZWVuIHdpbGwgdHJpZ2dlciBpdHMgb25SZXZlcnNlQ29tcGxldGUgZXZlbiB0aG91Z2ggdGVjaG5pY2FsbHkgdGhlIHBsYXloZWFkIGRpZG4ndCBwYXNzIG92ZXIgaXQgYWdhaW4uIEl0J3MgYSB2ZXJ5IHNwZWNpZmljIGVkZ2UgY2FzZSB3ZSBtdXN0IGFjY29tbW9kYXRlLlxuXHRcdFx0XHRcdFx0dGltZSA9IDA7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGlmIChwcmV2UmF3UHJldlRpbWUgPCAwIHx8ICh0aW1lIDw9IDAgJiYgdGltZSA+PSAtMC4wMDAwMDAxKSB8fCAocHJldlJhd1ByZXZUaW1lID09PSBfdGlueU51bSAmJiB0aGlzLmRhdGEgIT09IFwiaXNQYXVzZVwiKSkgaWYgKHByZXZSYXdQcmV2VGltZSAhPT0gdGltZSkgeyAvL25vdGU6IHdoZW4gdGhpcy5kYXRhIGlzIFwiaXNQYXVzZVwiLCBpdCdzIGEgY2FsbGJhY2sgYWRkZWQgYnkgYWRkUGF1c2UoKSBvbiBhIHRpbWVsaW5lIHRoYXQgd2Ugc2hvdWxkIG5vdCBiZSB0cmlnZ2VyZWQgd2hlbiBMRUFWSU5HIGl0cyBleGFjdCBzdGFydCB0aW1lLiBJbiBvdGhlciB3b3JkcywgdGwuYWRkUGF1c2UoMSkucGxheSgxKSBzaG91bGRuJ3QgcGF1c2UuXG5cdFx0XHRcdFx0XHRmb3JjZSA9IHRydWU7XG5cdFx0XHRcdFx0XHRpZiAocHJldlJhd1ByZXZUaW1lID4gX3RpbnlOdW0pIHtcblx0XHRcdFx0XHRcdFx0Y2FsbGJhY2sgPSBcIm9uUmV2ZXJzZUNvbXBsZXRlXCI7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHRoaXMuX3Jhd1ByZXZUaW1lID0gcmF3UHJldlRpbWUgPSAoIXN1cHByZXNzRXZlbnRzIHx8IHRpbWUgfHwgcHJldlJhd1ByZXZUaW1lID09PSB0aW1lKSA/IHRpbWUgOiBfdGlueU51bTsgLy93aGVuIHRoZSBwbGF5aGVhZCBhcnJpdmVzIGF0IEVYQUNUTFkgdGltZSAwIChyaWdodCBvbiB0b3ApIG9mIGEgemVyby1kdXJhdGlvbiB0d2Vlbiwgd2UgbmVlZCB0byBkaXNjZXJuIGlmIGV2ZW50cyBhcmUgc3VwcHJlc3NlZCBzbyB0aGF0IHdoZW4gdGhlIHBsYXloZWFkIG1vdmVzIGFnYWluIChuZXh0IHRpbWUpLCBpdCdsbCB0cmlnZ2VyIHRoZSBjYWxsYmFjay4gSWYgZXZlbnRzIGFyZSBOT1Qgc3VwcHJlc3NlZCwgb2J2aW91c2x5IHRoZSBjYWxsYmFjayB3b3VsZCBiZSB0cmlnZ2VyZWQgaW4gdGhpcyByZW5kZXIuIEJhc2ljYWxseSwgdGhlIGNhbGxiYWNrIHNob3VsZCBmaXJlIGVpdGhlciB3aGVuIHRoZSBwbGF5aGVhZCBBUlJJVkVTIG9yIExFQVZFUyB0aGlzIGV4YWN0IHNwb3QsIG5vdCBib3RoLiBJbWFnaW5lIGRvaW5nIGEgdGltZWxpbmUuc2VlaygwKSBhbmQgdGhlcmUncyBhIGNhbGxiYWNrIHRoYXQgc2l0cyBhdCAwLiBTaW5jZSBldmVudHMgYXJlIHN1cHByZXNzZWQgb24gdGhhdCBzZWVrKCkgYnkgZGVmYXVsdCwgbm90aGluZyB3aWxsIGZpcmUsIGJ1dCB3aGVuIHRoZSBwbGF5aGVhZCBtb3ZlcyBvZmYgb2YgdGhhdCBwb3NpdGlvbiwgdGhlIGNhbGxiYWNrIHNob3VsZCBmaXJlLiBUaGlzIGJlaGF2aW9yIGlzIHdoYXQgcGVvcGxlIGludHVpdGl2ZWx5IGV4cGVjdC4gV2Ugc2V0IHRoZSBfcmF3UHJldlRpbWUgdG8gYmUgYSBwcmVjaXNlIHRpbnkgbnVtYmVyIHRvIGluZGljYXRlIHRoaXMgc2NlbmFyaW8gcmF0aGVyIHRoYW4gdXNpbmcgYW5vdGhlciBwcm9wZXJ0eS92YXJpYWJsZSB3aGljaCB3b3VsZCBpbmNyZWFzZSBtZW1vcnkgdXNhZ2UuIFRoaXMgdGVjaG5pcXVlIGlzIGxlc3MgcmVhZGFibGUsIGJ1dCBtb3JlIGVmZmljaWVudC5cblx0XHRcdFx0fVxuXG5cdFx0XHR9IGVsc2UgaWYgKHRpbWUgPCAwLjAwMDAwMDEpIHsgLy90byB3b3JrIGFyb3VuZCBvY2Nhc2lvbmFsIGZsb2F0aW5nIHBvaW50IG1hdGggYXJ0aWZhY3RzLCByb3VuZCBzdXBlciBzbWFsbCB2YWx1ZXMgdG8gMC5cblx0XHRcdFx0dGhpcy5fdG90YWxUaW1lID0gdGhpcy5fdGltZSA9IDA7XG5cdFx0XHRcdHRoaXMucmF0aW8gPSB0aGlzLl9lYXNlLl9jYWxjRW5kID8gdGhpcy5fZWFzZS5nZXRSYXRpbygwKSA6IDA7XG5cdFx0XHRcdGlmIChwcmV2VGltZSAhPT0gMCB8fCAoZHVyYXRpb24gPT09IDAgJiYgcHJldlJhd1ByZXZUaW1lID4gMCkpIHtcblx0XHRcdFx0XHRjYWxsYmFjayA9IFwib25SZXZlcnNlQ29tcGxldGVcIjtcblx0XHRcdFx0XHRpc0NvbXBsZXRlID0gdGhpcy5fcmV2ZXJzZWQ7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKHRpbWUgPCAwKSB7XG5cdFx0XHRcdFx0dGhpcy5fYWN0aXZlID0gZmFsc2U7XG5cdFx0XHRcdFx0aWYgKGR1cmF0aW9uID09PSAwKSBpZiAodGhpcy5faW5pdHRlZCB8fCAhdGhpcy52YXJzLmxhenkgfHwgZm9yY2UpIHsgLy96ZXJvLWR1cmF0aW9uIHR3ZWVucyBhcmUgdHJpY2t5IGJlY2F1c2Ugd2UgbXVzdCBkaXNjZXJuIHRoZSBtb21lbnR1bS9kaXJlY3Rpb24gb2YgdGltZSBpbiBvcmRlciB0byBkZXRlcm1pbmUgd2hldGhlciB0aGUgc3RhcnRpbmcgdmFsdWVzIHNob3VsZCBiZSByZW5kZXJlZCBvciB0aGUgZW5kaW5nIHZhbHVlcy4gSWYgdGhlIFwicGxheWhlYWRcIiBvZiBpdHMgdGltZWxpbmUgZ29lcyBwYXN0IHRoZSB6ZXJvLWR1cmF0aW9uIHR3ZWVuIGluIHRoZSBmb3J3YXJkIGRpcmVjdGlvbiBvciBsYW5kcyBkaXJlY3RseSBvbiBpdCwgdGhlIGVuZCB2YWx1ZXMgc2hvdWxkIGJlIHJlbmRlcmVkLCBidXQgaWYgdGhlIHRpbWVsaW5lJ3MgXCJwbGF5aGVhZFwiIG1vdmVzIHBhc3QgaXQgaW4gdGhlIGJhY2t3YXJkIGRpcmVjdGlvbiAoZnJvbSBhIHBvc3RpdGl2ZSB0aW1lIHRvIGEgbmVnYXRpdmUgdGltZSksIHRoZSBzdGFydGluZyB2YWx1ZXMgbXVzdCBiZSByZW5kZXJlZC5cblx0XHRcdFx0XHRcdGlmIChwcmV2UmF3UHJldlRpbWUgPj0gMCAmJiAhKHByZXZSYXdQcmV2VGltZSA9PT0gX3RpbnlOdW0gJiYgdGhpcy5kYXRhID09PSBcImlzUGF1c2VcIikpIHtcblx0XHRcdFx0XHRcdFx0Zm9yY2UgPSB0cnVlO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0dGhpcy5fcmF3UHJldlRpbWUgPSByYXdQcmV2VGltZSA9ICghc3VwcHJlc3NFdmVudHMgfHwgdGltZSB8fCBwcmV2UmF3UHJldlRpbWUgPT09IHRpbWUpID8gdGltZSA6IF90aW55TnVtOyAvL3doZW4gdGhlIHBsYXloZWFkIGFycml2ZXMgYXQgRVhBQ1RMWSB0aW1lIDAgKHJpZ2h0IG9uIHRvcCkgb2YgYSB6ZXJvLWR1cmF0aW9uIHR3ZWVuLCB3ZSBuZWVkIHRvIGRpc2Nlcm4gaWYgZXZlbnRzIGFyZSBzdXBwcmVzc2VkIHNvIHRoYXQgd2hlbiB0aGUgcGxheWhlYWQgbW92ZXMgYWdhaW4gKG5leHQgdGltZSksIGl0J2xsIHRyaWdnZXIgdGhlIGNhbGxiYWNrLiBJZiBldmVudHMgYXJlIE5PVCBzdXBwcmVzc2VkLCBvYnZpb3VzbHkgdGhlIGNhbGxiYWNrIHdvdWxkIGJlIHRyaWdnZXJlZCBpbiB0aGlzIHJlbmRlci4gQmFzaWNhbGx5LCB0aGUgY2FsbGJhY2sgc2hvdWxkIGZpcmUgZWl0aGVyIHdoZW4gdGhlIHBsYXloZWFkIEFSUklWRVMgb3IgTEVBVkVTIHRoaXMgZXhhY3Qgc3BvdCwgbm90IGJvdGguIEltYWdpbmUgZG9pbmcgYSB0aW1lbGluZS5zZWVrKDApIGFuZCB0aGVyZSdzIGEgY2FsbGJhY2sgdGhhdCBzaXRzIGF0IDAuIFNpbmNlIGV2ZW50cyBhcmUgc3VwcHJlc3NlZCBvbiB0aGF0IHNlZWsoKSBieSBkZWZhdWx0LCBub3RoaW5nIHdpbGwgZmlyZSwgYnV0IHdoZW4gdGhlIHBsYXloZWFkIG1vdmVzIG9mZiBvZiB0aGF0IHBvc2l0aW9uLCB0aGUgY2FsbGJhY2sgc2hvdWxkIGZpcmUuIFRoaXMgYmVoYXZpb3IgaXMgd2hhdCBwZW9wbGUgaW50dWl0aXZlbHkgZXhwZWN0LiBXZSBzZXQgdGhlIF9yYXdQcmV2VGltZSB0byBiZSBhIHByZWNpc2UgdGlueSBudW1iZXIgdG8gaW5kaWNhdGUgdGhpcyBzY2VuYXJpbyByYXRoZXIgdGhhbiB1c2luZyBhbm90aGVyIHByb3BlcnR5L3ZhcmlhYmxlIHdoaWNoIHdvdWxkIGluY3JlYXNlIG1lbW9yeSB1c2FnZS4gVGhpcyB0ZWNobmlxdWUgaXMgbGVzcyByZWFkYWJsZSwgYnV0IG1vcmUgZWZmaWNpZW50LlxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoIXRoaXMuX2luaXR0ZWQgfHwgKHRoaXMuX3N0YXJ0QXQgJiYgdGhpcy5fc3RhcnRBdC5wcm9ncmVzcygpKSkgeyAvL2lmIHdlIHJlbmRlciB0aGUgdmVyeSBiZWdpbm5pbmcgKHRpbWUgPT0gMCkgb2YgYSBmcm9tVG8oKSwgd2UgbXVzdCBmb3JjZSB0aGUgcmVuZGVyIChub3JtYWwgdHdlZW5zIHdvdWxkbid0IG5lZWQgdG8gcmVuZGVyIGF0IGEgdGltZSBvZiAwIHdoZW4gdGhlIHByZXZUaW1lIHdhcyBhbHNvIDApLiBUaGlzIGlzIGFsc28gbWFuZGF0b3J5IHRvIG1ha2Ugc3VyZSBvdmVyd3JpdGluZyBraWNrcyBpbiBpbW1lZGlhdGVseS4gQWxzbywgd2UgY2hlY2sgcHJvZ3Jlc3MoKSBiZWNhdXNlIGlmIHN0YXJ0QXQgaGFzIGFscmVhZHkgcmVuZGVyZWQgYXQgaXRzIGVuZCwgd2Ugc2hvdWxkIGZvcmNlIGEgcmVuZGVyIGF0IGl0cyBiZWdpbm5pbmcuIE90aGVyd2lzZSwgaWYgeW91IHB1dCB0aGUgcGxheWhlYWQgZGlyZWN0bHkgb24gdG9wIG9mIHdoZXJlIGEgZnJvbVRvKHtpbW1lZGlhdGVSZW5kZXI6ZmFsc2V9KSBzdGFydHMsIGFuZCB0aGVuIG1vdmUgaXQgYmFja3dhcmRzLCB0aGUgZnJvbSgpIHdvbid0IHJldmVydCBpdHMgdmFsdWVzLlxuXHRcdFx0XHRcdGZvcmNlID0gdHJ1ZTtcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGhpcy5fdG90YWxUaW1lID0gdGhpcy5fdGltZSA9IHRpbWU7XG5cblx0XHRcdFx0aWYgKHRoaXMuX2Vhc2VUeXBlKSB7XG5cdFx0XHRcdFx0dmFyIHIgPSB0aW1lIC8gZHVyYXRpb24sIHR5cGUgPSB0aGlzLl9lYXNlVHlwZSwgcG93ID0gdGhpcy5fZWFzZVBvd2VyO1xuXHRcdFx0XHRcdGlmICh0eXBlID09PSAxIHx8ICh0eXBlID09PSAzICYmIHIgPj0gMC41KSkge1xuXHRcdFx0XHRcdFx0ciA9IDEgLSByO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRpZiAodHlwZSA9PT0gMykge1xuXHRcdFx0XHRcdFx0ciAqPSAyO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRpZiAocG93ID09PSAxKSB7XG5cdFx0XHRcdFx0XHRyICo9IHI7XG5cdFx0XHRcdFx0fSBlbHNlIGlmIChwb3cgPT09IDIpIHtcblx0XHRcdFx0XHRcdHIgKj0gciAqIHI7XG5cdFx0XHRcdFx0fSBlbHNlIGlmIChwb3cgPT09IDMpIHtcblx0XHRcdFx0XHRcdHIgKj0gciAqIHIgKiByO1xuXHRcdFx0XHRcdH0gZWxzZSBpZiAocG93ID09PSA0KSB7XG5cdFx0XHRcdFx0XHRyICo9IHIgKiByICogciAqIHI7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0aWYgKHR5cGUgPT09IDEpIHtcblx0XHRcdFx0XHRcdHRoaXMucmF0aW8gPSAxIC0gcjtcblx0XHRcdFx0XHR9IGVsc2UgaWYgKHR5cGUgPT09IDIpIHtcblx0XHRcdFx0XHRcdHRoaXMucmF0aW8gPSByO1xuXHRcdFx0XHRcdH0gZWxzZSBpZiAodGltZSAvIGR1cmF0aW9uIDwgMC41KSB7XG5cdFx0XHRcdFx0XHR0aGlzLnJhdGlvID0gciAvIDI7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdHRoaXMucmF0aW8gPSAxIC0gKHIgLyAyKTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHR0aGlzLnJhdGlvID0gdGhpcy5fZWFzZS5nZXRSYXRpbyh0aW1lIC8gZHVyYXRpb24pO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdGlmICh0aGlzLl90aW1lID09PSBwcmV2VGltZSAmJiAhZm9yY2UpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fSBlbHNlIGlmICghdGhpcy5faW5pdHRlZCkge1xuXHRcdFx0XHR0aGlzLl9pbml0KCk7XG5cdFx0XHRcdGlmICghdGhpcy5faW5pdHRlZCB8fCB0aGlzLl9nYykgeyAvL2ltbWVkaWF0ZVJlbmRlciB0d2VlbnMgdHlwaWNhbGx5IHdvbid0IGluaXRpYWxpemUgdW50aWwgdGhlIHBsYXloZWFkIGFkdmFuY2VzIChfdGltZSBpcyBncmVhdGVyIHRoYW4gMCkgaW4gb3JkZXIgdG8gZW5zdXJlIHRoYXQgb3ZlcndyaXRpbmcgb2NjdXJzIHByb3Blcmx5LiBBbHNvLCBpZiBhbGwgb2YgdGhlIHR3ZWVuaW5nIHByb3BlcnRpZXMgaGF2ZSBiZWVuIG92ZXJ3cml0dGVuICh3aGljaCB3b3VsZCBjYXVzZSBfZ2MgdG8gYmUgdHJ1ZSwgYXMgc2V0IGluIF9pbml0KCkpLCB3ZSBzaG91bGRuJ3QgY29udGludWUgb3RoZXJ3aXNlIGFuIG9uU3RhcnQgY2FsbGJhY2sgY291bGQgYmUgY2FsbGVkIGZvciBleGFtcGxlLlxuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fSBlbHNlIGlmICghZm9yY2UgJiYgdGhpcy5fZmlyc3RQVCAmJiAoKHRoaXMudmFycy5sYXp5ICE9PSBmYWxzZSAmJiB0aGlzLl9kdXJhdGlvbikgfHwgKHRoaXMudmFycy5sYXp5ICYmICF0aGlzLl9kdXJhdGlvbikpKSB7XG5cdFx0XHRcdFx0dGhpcy5fdGltZSA9IHRoaXMuX3RvdGFsVGltZSA9IHByZXZUaW1lO1xuXHRcdFx0XHRcdHRoaXMuX3Jhd1ByZXZUaW1lID0gcHJldlJhd1ByZXZUaW1lO1xuXHRcdFx0XHRcdF9sYXp5VHdlZW5zLnB1c2godGhpcyk7XG5cdFx0XHRcdFx0dGhpcy5fbGF6eSA9IFt0aW1lLCBzdXBwcmVzc0V2ZW50c107XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cdFx0XHRcdC8vX2Vhc2UgaXMgaW5pdGlhbGx5IHNldCB0byBkZWZhdWx0RWFzZSwgc28gbm93IHRoYXQgaW5pdCgpIGhhcyBydW4sIF9lYXNlIGlzIHNldCBwcm9wZXJseSBhbmQgd2UgbmVlZCB0byByZWNhbGN1bGF0ZSB0aGUgcmF0aW8uIE92ZXJhbGwgdGhpcyBpcyBmYXN0ZXIgdGhhbiB1c2luZyBjb25kaXRpb25hbCBsb2dpYyBlYXJsaWVyIGluIHRoZSBtZXRob2QgdG8gYXZvaWQgaGF2aW5nIHRvIHNldCByYXRpbyB0d2ljZSBiZWNhdXNlIHdlIG9ubHkgaW5pdCgpIG9uY2UgYnV0IHJlbmRlclRpbWUoKSBnZXRzIGNhbGxlZCBWRVJZIGZyZXF1ZW50bHkuXG5cdFx0XHRcdGlmICh0aGlzLl90aW1lICYmICFpc0NvbXBsZXRlKSB7XG5cdFx0XHRcdFx0dGhpcy5yYXRpbyA9IHRoaXMuX2Vhc2UuZ2V0UmF0aW8odGhpcy5fdGltZSAvIGR1cmF0aW9uKTtcblx0XHRcdFx0fSBlbHNlIGlmIChpc0NvbXBsZXRlICYmIHRoaXMuX2Vhc2UuX2NhbGNFbmQpIHtcblx0XHRcdFx0XHR0aGlzLnJhdGlvID0gdGhpcy5fZWFzZS5nZXRSYXRpbygodGhpcy5fdGltZSA9PT0gMCkgPyAwIDogMSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdGlmICh0aGlzLl9sYXp5ICE9PSBmYWxzZSkgeyAvL2luIGNhc2UgYSBsYXp5IHJlbmRlciBpcyBwZW5kaW5nLCB3ZSBzaG91bGQgZmx1c2ggaXQgYmVjYXVzZSB0aGUgbmV3IHJlbmRlciBpcyBvY2N1cnJpbmcgbm93IChpbWFnaW5lIGEgbGF6eSB0d2VlbiBpbnN0YW50aWF0aW5nIGFuZCB0aGVuIGltbWVkaWF0ZWx5IHRoZSB1c2VyIGNhbGxzIHR3ZWVuLnNlZWsodHdlZW4uZHVyYXRpb24oKSksIHNraXBwaW5nIHRvIHRoZSBlbmQgLSB0aGUgZW5kIHJlbmRlciB3b3VsZCBiZSBmb3JjZWQsIGFuZCB0aGVuIGlmIHdlIGRpZG4ndCBmbHVzaCB0aGUgbGF6eSByZW5kZXIsIGl0J2QgZmlyZSBBRlRFUiB0aGUgc2VlaygpLCByZW5kZXJpbmcgaXQgYXQgdGhlIHdyb25nIHRpbWUuXG5cdFx0XHRcdHRoaXMuX2xhenkgPSBmYWxzZTtcblx0XHRcdH1cblx0XHRcdGlmICghdGhpcy5fYWN0aXZlKSBpZiAoIXRoaXMuX3BhdXNlZCAmJiB0aGlzLl90aW1lICE9PSBwcmV2VGltZSAmJiB0aW1lID49IDApIHtcblx0XHRcdFx0dGhpcy5fYWN0aXZlID0gdHJ1ZTsgIC8vc28gdGhhdCBpZiB0aGUgdXNlciByZW5kZXJzIGEgdHdlZW4gKGFzIG9wcG9zZWQgdG8gdGhlIHRpbWVsaW5lIHJlbmRlcmluZyBpdCksIHRoZSB0aW1lbGluZSBpcyBmb3JjZWQgdG8gcmUtcmVuZGVyIGFuZCBhbGlnbiBpdCB3aXRoIHRoZSBwcm9wZXIgdGltZS9mcmFtZSBvbiB0aGUgbmV4dCByZW5kZXJpbmcgY3ljbGUuIE1heWJlIHRoZSB0d2VlbiBhbHJlYWR5IGZpbmlzaGVkIGJ1dCB0aGUgdXNlciBtYW51YWxseSByZS1yZW5kZXJzIGl0IGFzIGhhbGZ3YXkgZG9uZS5cblx0XHRcdH1cblx0XHRcdGlmIChwcmV2VGltZSA9PT0gMCkge1xuXHRcdFx0XHRpZiAodGhpcy5fc3RhcnRBdCkge1xuXHRcdFx0XHRcdGlmICh0aW1lID49IDApIHtcblx0XHRcdFx0XHRcdHRoaXMuX3N0YXJ0QXQucmVuZGVyKHRpbWUsIHRydWUsIGZvcmNlKTtcblx0XHRcdFx0XHR9IGVsc2UgaWYgKCFjYWxsYmFjaykge1xuXHRcdFx0XHRcdFx0Y2FsbGJhY2sgPSBcIl9kdW1teUdTXCI7IC8vaWYgbm8gY2FsbGJhY2sgaXMgZGVmaW5lZCwgdXNlIGEgZHVtbXkgdmFsdWUganVzdCBzbyB0aGF0IHRoZSBjb25kaXRpb24gYXQgdGhlIGVuZCBldmFsdWF0ZXMgYXMgdHJ1ZSBiZWNhdXNlIF9zdGFydEF0IHNob3VsZCByZW5kZXIgQUZURVIgdGhlIG5vcm1hbCByZW5kZXIgbG9vcCB3aGVuIHRoZSB0aW1lIGlzIG5lZ2F0aXZlLiBXZSBjb3VsZCBoYW5kbGUgdGhpcyBpbiBhIG1vcmUgaW50dWl0aXZlIHdheSwgb2YgY291cnNlLCBidXQgdGhlIHJlbmRlciBsb29wIGlzIHRoZSBNT1NUIGltcG9ydGFudCB0aGluZyB0byBvcHRpbWl6ZSwgc28gdGhpcyB0ZWNobmlxdWUgYWxsb3dzIHVzIHRvIGF2b2lkIGFkZGluZyBleHRyYSBjb25kaXRpb25hbCBsb2dpYyBpbiBhIGhpZ2gtZnJlcXVlbmN5IGFyZWEuXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRcdGlmICh0aGlzLnZhcnMub25TdGFydCkgaWYgKHRoaXMuX3RpbWUgIT09IDAgfHwgZHVyYXRpb24gPT09IDApIGlmICghc3VwcHJlc3NFdmVudHMpIHtcblx0XHRcdFx0XHR0aGlzLl9jYWxsYmFjayhcIm9uU3RhcnRcIik7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdHB0ID0gdGhpcy5fZmlyc3RQVDtcblx0XHRcdHdoaWxlIChwdCkge1xuXHRcdFx0XHRpZiAocHQuZikge1xuXHRcdFx0XHRcdHB0LnRbcHQucF0ocHQuYyAqIHRoaXMucmF0aW8gKyBwdC5zKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRwdC50W3B0LnBdID0gcHQuYyAqIHRoaXMucmF0aW8gKyBwdC5zO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHB0ID0gcHQuX25leHQ7XG5cdFx0XHR9XG5cblx0XHRcdGlmICh0aGlzLl9vblVwZGF0ZSkge1xuXHRcdFx0XHRpZiAodGltZSA8IDApIGlmICh0aGlzLl9zdGFydEF0ICYmIHRpbWUgIT09IC0wLjAwMDEpIHsgLy9pZiB0aGUgdHdlZW4gaXMgcG9zaXRpb25lZCBhdCB0aGUgVkVSWSBiZWdpbm5pbmcgKF9zdGFydFRpbWUgMCkgb2YgaXRzIHBhcmVudCB0aW1lbGluZSwgaXQncyBpbGxlZ2FsIGZvciB0aGUgcGxheWhlYWQgdG8gZ28gYmFjayBmdXJ0aGVyLCBzbyB3ZSBzaG91bGQgbm90IHJlbmRlciB0aGUgcmVjb3JkZWQgc3RhcnRBdCB2YWx1ZXMuXG5cdFx0XHRcdFx0dGhpcy5fc3RhcnRBdC5yZW5kZXIodGltZSwgdHJ1ZSwgZm9yY2UpOyAvL25vdGU6IGZvciBwZXJmb3JtYW5jZSByZWFzb25zLCB3ZSB0dWNrIHRoaXMgY29uZGl0aW9uYWwgbG9naWMgaW5zaWRlIGxlc3MgdHJhdmVsZWQgYXJlYXMgKG1vc3QgdHdlZW5zIGRvbid0IGhhdmUgYW4gb25VcGRhdGUpLiBXZSdkIGp1c3QgaGF2ZSBpdCBhdCB0aGUgZW5kIGJlZm9yZSB0aGUgb25Db21wbGV0ZSwgYnV0IHRoZSB2YWx1ZXMgc2hvdWxkIGJlIHVwZGF0ZWQgYmVmb3JlIGFueSBvblVwZGF0ZSBpcyBjYWxsZWQsIHNvIHdlIEFMU08gcHV0IGl0IGhlcmUgYW5kIHRoZW4gaWYgaXQncyBub3QgY2FsbGVkLCB3ZSBkbyBzbyBsYXRlciBuZWFyIHRoZSBvbkNvbXBsZXRlLlxuXHRcdFx0XHR9XG5cdFx0XHRcdGlmICghc3VwcHJlc3NFdmVudHMpIGlmICh0aGlzLl90aW1lICE9PSBwcmV2VGltZSB8fCBpc0NvbXBsZXRlIHx8IGZvcmNlKSB7XG5cdFx0XHRcdFx0dGhpcy5fY2FsbGJhY2soXCJvblVwZGF0ZVwiKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0aWYgKGNhbGxiYWNrKSBpZiAoIXRoaXMuX2djIHx8IGZvcmNlKSB7IC8vY2hlY2sgX2djIGJlY2F1c2UgdGhlcmUncyBhIGNoYW5jZSB0aGF0IGtpbGwoKSBjb3VsZCBiZSBjYWxsZWQgaW4gYW4gb25VcGRhdGVcblx0XHRcdFx0aWYgKHRpbWUgPCAwICYmIHRoaXMuX3N0YXJ0QXQgJiYgIXRoaXMuX29uVXBkYXRlICYmIHRpbWUgIT09IC0wLjAwMDEpIHsgLy8tMC4wMDAxIGlzIGEgc3BlY2lhbCB2YWx1ZSB0aGF0IHdlIHVzZSB3aGVuIGxvb3BpbmcgYmFjayB0byB0aGUgYmVnaW5uaW5nIG9mIGEgcmVwZWF0ZWQgVGltZWxpbmVNYXgsIGluIHdoaWNoIGNhc2Ugd2Ugc2hvdWxkbid0IHJlbmRlciB0aGUgX3N0YXJ0QXQgdmFsdWVzLlxuXHRcdFx0XHRcdHRoaXMuX3N0YXJ0QXQucmVuZGVyKHRpbWUsIHRydWUsIGZvcmNlKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoaXNDb21wbGV0ZSkge1xuXHRcdFx0XHRcdGlmICh0aGlzLl90aW1lbGluZS5hdXRvUmVtb3ZlQ2hpbGRyZW4pIHtcblx0XHRcdFx0XHRcdHRoaXMuX2VuYWJsZWQoZmFsc2UsIGZhbHNlKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0dGhpcy5fYWN0aXZlID0gZmFsc2U7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKCFzdXBwcmVzc0V2ZW50cyAmJiB0aGlzLnZhcnNbY2FsbGJhY2tdKSB7XG5cdFx0XHRcdFx0dGhpcy5fY2FsbGJhY2soY2FsbGJhY2spO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChkdXJhdGlvbiA9PT0gMCAmJiB0aGlzLl9yYXdQcmV2VGltZSA9PT0gX3RpbnlOdW0gJiYgcmF3UHJldlRpbWUgIT09IF90aW55TnVtKSB7IC8vdGhlIG9uQ29tcGxldGUgb3Igb25SZXZlcnNlQ29tcGxldGUgY291bGQgdHJpZ2dlciBtb3ZlbWVudCBvZiB0aGUgcGxheWhlYWQgYW5kIGZvciB6ZXJvLWR1cmF0aW9uIHR3ZWVucyAod2hpY2ggbXVzdCBkaXNjZXJuIGRpcmVjdGlvbikgdGhhdCBsYW5kIGRpcmVjdGx5IGJhY2sgb24gdGhlaXIgc3RhcnQgdGltZSwgd2UgZG9uJ3Qgd2FudCB0byBmaXJlIGFnYWluIG9uIHRoZSBuZXh0IHJlbmRlci4gVGhpbmsgb2Ygc2V2ZXJhbCBhZGRQYXVzZSgpJ3MgaW4gYSB0aW1lbGluZSB0aGF0IGZvcmNlcyB0aGUgcGxheWhlYWQgdG8gYSBjZXJ0YWluIHNwb3QsIGJ1dCB3aGF0IGlmIGl0J3MgYWxyZWFkeSBwYXVzZWQgYW5kIGFub3RoZXIgdHdlZW4gaXMgdHdlZW5pbmcgdGhlIFwidGltZVwiIG9mIHRoZSB0aW1lbGluZT8gRWFjaCB0aW1lIGl0IG1vdmVzIFtmb3J3YXJkXSBwYXN0IHRoYXQgc3BvdCwgaXQgd291bGQgbW92ZSBiYWNrLCBhbmQgc2luY2Ugc3VwcHJlc3NFdmVudHMgaXMgdHJ1ZSwgaXQnZCByZXNldCBfcmF3UHJldlRpbWUgdG8gX3RpbnlOdW0gc28gdGhhdCB3aGVuIGl0IGJlZ2lucyBhZ2FpbiwgdGhlIGNhbGxiYWNrIHdvdWxkIGZpcmUgKHNvIHVsdGltYXRlbHkgaXQgY291bGQgYm91bmNlIGJhY2sgYW5kIGZvcnRoIGR1cmluZyB0aGF0IHR3ZWVuKS4gQWdhaW4sIHRoaXMgaXMgYSB2ZXJ5IHVuY29tbW9uIHNjZW5hcmlvLCBidXQgcG9zc2libGUgbm9uZXRoZWxlc3MuXG5cdFx0XHRcdFx0dGhpcy5fcmF3UHJldlRpbWUgPSAwO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fTtcblxuXHRcdHAuX2tpbGwgPSBmdW5jdGlvbih2YXJzLCB0YXJnZXQsIG92ZXJ3cml0aW5nVHdlZW4pIHtcblx0XHRcdGlmICh2YXJzID09PSBcImFsbFwiKSB7XG5cdFx0XHRcdHZhcnMgPSBudWxsO1xuXHRcdFx0fVxuXHRcdFx0aWYgKHZhcnMgPT0gbnVsbCkgaWYgKHRhcmdldCA9PSBudWxsIHx8IHRhcmdldCA9PT0gdGhpcy50YXJnZXQpIHtcblx0XHRcdFx0dGhpcy5fbGF6eSA9IGZhbHNlO1xuXHRcdFx0XHRyZXR1cm4gdGhpcy5fZW5hYmxlZChmYWxzZSwgZmFsc2UpO1xuXHRcdFx0fVxuXHRcdFx0dGFyZ2V0ID0gKHR5cGVvZih0YXJnZXQpICE9PSBcInN0cmluZ1wiKSA/ICh0YXJnZXQgfHwgdGhpcy5fdGFyZ2V0cyB8fCB0aGlzLnRhcmdldCkgOiBUd2VlbkxpdGUuc2VsZWN0b3IodGFyZ2V0KSB8fCB0YXJnZXQ7XG5cdFx0XHR2YXIgc2ltdWx0YW5lb3VzT3ZlcndyaXRlID0gKG92ZXJ3cml0aW5nVHdlZW4gJiYgdGhpcy5fdGltZSAmJiBvdmVyd3JpdGluZ1R3ZWVuLl9zdGFydFRpbWUgPT09IHRoaXMuX3N0YXJ0VGltZSAmJiB0aGlzLl90aW1lbGluZSA9PT0gb3ZlcndyaXRpbmdUd2Vlbi5fdGltZWxpbmUpLFxuXHRcdFx0XHRpLCBvdmVyd3JpdHRlblByb3BzLCBwLCBwdCwgcHJvcExvb2t1cCwgY2hhbmdlZCwga2lsbFByb3BzLCByZWNvcmQsIGtpbGxlZDtcblx0XHRcdGlmICgoX2lzQXJyYXkodGFyZ2V0KSB8fCBfaXNTZWxlY3Rvcih0YXJnZXQpKSAmJiB0eXBlb2YodGFyZ2V0WzBdKSAhPT0gXCJudW1iZXJcIikge1xuXHRcdFx0XHRpID0gdGFyZ2V0Lmxlbmd0aDtcblx0XHRcdFx0d2hpbGUgKC0taSA+IC0xKSB7XG5cdFx0XHRcdFx0aWYgKHRoaXMuX2tpbGwodmFycywgdGFyZ2V0W2ldLCBvdmVyd3JpdGluZ1R3ZWVuKSkge1xuXHRcdFx0XHRcdFx0Y2hhbmdlZCA9IHRydWU7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRpZiAodGhpcy5fdGFyZ2V0cykge1xuXHRcdFx0XHRcdGkgPSB0aGlzLl90YXJnZXRzLmxlbmd0aDtcblx0XHRcdFx0XHR3aGlsZSAoLS1pID4gLTEpIHtcblx0XHRcdFx0XHRcdGlmICh0YXJnZXQgPT09IHRoaXMuX3RhcmdldHNbaV0pIHtcblx0XHRcdFx0XHRcdFx0cHJvcExvb2t1cCA9IHRoaXMuX3Byb3BMb29rdXBbaV0gfHwge307XG5cdFx0XHRcdFx0XHRcdHRoaXMuX292ZXJ3cml0dGVuUHJvcHMgPSB0aGlzLl9vdmVyd3JpdHRlblByb3BzIHx8IFtdO1xuXHRcdFx0XHRcdFx0XHRvdmVyd3JpdHRlblByb3BzID0gdGhpcy5fb3ZlcndyaXR0ZW5Qcm9wc1tpXSA9IHZhcnMgPyB0aGlzLl9vdmVyd3JpdHRlblByb3BzW2ldIHx8IHt9IDogXCJhbGxcIjtcblx0XHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9IGVsc2UgaWYgKHRhcmdldCAhPT0gdGhpcy50YXJnZXQpIHtcblx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0cHJvcExvb2t1cCA9IHRoaXMuX3Byb3BMb29rdXA7XG5cdFx0XHRcdFx0b3ZlcndyaXR0ZW5Qcm9wcyA9IHRoaXMuX292ZXJ3cml0dGVuUHJvcHMgPSB2YXJzID8gdGhpcy5fb3ZlcndyaXR0ZW5Qcm9wcyB8fCB7fSA6IFwiYWxsXCI7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpZiAocHJvcExvb2t1cCkge1xuXHRcdFx0XHRcdGtpbGxQcm9wcyA9IHZhcnMgfHwgcHJvcExvb2t1cDtcblx0XHRcdFx0XHRyZWNvcmQgPSAodmFycyAhPT0gb3ZlcndyaXR0ZW5Qcm9wcyAmJiBvdmVyd3JpdHRlblByb3BzICE9PSBcImFsbFwiICYmIHZhcnMgIT09IHByb3BMb29rdXAgJiYgKHR5cGVvZih2YXJzKSAhPT0gXCJvYmplY3RcIiB8fCAhdmFycy5fdGVtcEtpbGwpKTsgLy9fdGVtcEtpbGwgaXMgYSBzdXBlci1zZWNyZXQgd2F5IHRvIGRlbGV0ZSBhIHBhcnRpY3VsYXIgdHdlZW5pbmcgcHJvcGVydHkgYnV0IE5PVCBoYXZlIGl0IHJlbWVtYmVyZWQgYXMgYW4gb2ZmaWNpYWwgb3ZlcndyaXR0ZW4gcHJvcGVydHkgKGxpa2UgaW4gQmV6aWVyUGx1Z2luKVxuXHRcdFx0XHRcdGlmIChvdmVyd3JpdGluZ1R3ZWVuICYmIChUd2VlbkxpdGUub25PdmVyd3JpdGUgfHwgdGhpcy52YXJzLm9uT3ZlcndyaXRlKSkge1xuXHRcdFx0XHRcdFx0Zm9yIChwIGluIGtpbGxQcm9wcykge1xuXHRcdFx0XHRcdFx0XHRpZiAocHJvcExvb2t1cFtwXSkge1xuXHRcdFx0XHRcdFx0XHRcdGlmICgha2lsbGVkKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRraWxsZWQgPSBbXTtcblx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0a2lsbGVkLnB1c2gocCk7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdGlmICgoa2lsbGVkIHx8ICF2YXJzKSAmJiAhX29uT3ZlcndyaXRlKHRoaXMsIG92ZXJ3cml0aW5nVHdlZW4sIHRhcmdldCwga2lsbGVkKSkgeyAvL2lmIHRoZSBvbk92ZXJ3cml0ZSByZXR1cm5lZCBmYWxzZSwgdGhhdCBtZWFucyB0aGUgdXNlciB3YW50cyB0byBvdmVycmlkZSB0aGUgb3ZlcndyaXRpbmcgKGNhbmNlbCBpdCkuXG5cdFx0XHRcdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRmb3IgKHAgaW4ga2lsbFByb3BzKSB7XG5cdFx0XHRcdFx0XHRpZiAoKHB0ID0gcHJvcExvb2t1cFtwXSkpIHtcblx0XHRcdFx0XHRcdFx0aWYgKHNpbXVsdGFuZW91c092ZXJ3cml0ZSkgeyAvL2lmIGFub3RoZXIgdHdlZW4gb3ZlcndyaXRlcyB0aGlzIG9uZSBhbmQgdGhleSBib3RoIHN0YXJ0IGF0IGV4YWN0bHkgdGhlIHNhbWUgdGltZSwgeWV0IHRoaXMgdHdlZW4gaGFzIGFscmVhZHkgcmVuZGVyZWQgb25jZSAoZm9yIGV4YW1wbGUsIGF0IDAuMDAxKSBiZWNhdXNlIGl0J3MgZmlyc3QgaW4gdGhlIHF1ZXVlLCB3ZSBzaG91bGQgcmV2ZXJ0IHRoZSB2YWx1ZXMgdG8gd2hlcmUgdGhleSB3ZXJlIGF0IDAgc28gdGhhdCB0aGUgc3RhcnRpbmcgdmFsdWVzIGFyZW4ndCBjb250YW1pbmF0ZWQgb24gdGhlIG92ZXJ3cml0aW5nIHR3ZWVuLlxuXHRcdFx0XHRcdFx0XHRcdGlmIChwdC5mKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRwdC50W3B0LnBdKHB0LnMpO1xuXHRcdFx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRwdC50W3B0LnBdID0gcHQucztcblx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0Y2hhbmdlZCA9IHRydWU7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0aWYgKHB0LnBnICYmIHB0LnQuX2tpbGwoa2lsbFByb3BzKSkge1xuXHRcdFx0XHRcdFx0XHRcdGNoYW5nZWQgPSB0cnVlOyAvL3NvbWUgcGx1Z2lucyBuZWVkIHRvIGJlIG5vdGlmaWVkIHNvIHRoZXkgY2FuIHBlcmZvcm0gY2xlYW51cCB0YXNrcyBmaXJzdFxuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdGlmICghcHQucGcgfHwgcHQudC5fb3ZlcndyaXRlUHJvcHMubGVuZ3RoID09PSAwKSB7XG5cdFx0XHRcdFx0XHRcdFx0aWYgKHB0Ll9wcmV2KSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRwdC5fcHJldi5fbmV4dCA9IHB0Ll9uZXh0O1xuXHRcdFx0XHRcdFx0XHRcdH0gZWxzZSBpZiAocHQgPT09IHRoaXMuX2ZpcnN0UFQpIHtcblx0XHRcdFx0XHRcdFx0XHRcdHRoaXMuX2ZpcnN0UFQgPSBwdC5fbmV4dDtcblx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0aWYgKHB0Ll9uZXh0KSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRwdC5fbmV4dC5fcHJldiA9IHB0Ll9wcmV2O1xuXHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRwdC5fbmV4dCA9IHB0Ll9wcmV2ID0gbnVsbDtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRkZWxldGUgcHJvcExvb2t1cFtwXTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdGlmIChyZWNvcmQpIHtcblx0XHRcdFx0XHRcdFx0b3ZlcndyaXR0ZW5Qcm9wc1twXSA9IDE7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGlmICghdGhpcy5fZmlyc3RQVCAmJiB0aGlzLl9pbml0dGVkKSB7IC8vaWYgYWxsIHR3ZWVuaW5nIHByb3BlcnRpZXMgYXJlIGtpbGxlZCwga2lsbCB0aGUgdHdlZW4uIFdpdGhvdXQgdGhpcyBsaW5lLCBpZiB0aGVyZSdzIGEgdHdlZW4gd2l0aCBtdWx0aXBsZSB0YXJnZXRzIGFuZCB0aGVuIHlvdSBraWxsVHdlZW5zT2YoKSBlYWNoIHRhcmdldCBpbmRpdmlkdWFsbHksIHRoZSB0d2VlbiB3b3VsZCB0ZWNobmljYWxseSBzdGlsbCByZW1haW4gYWN0aXZlIGFuZCBmaXJlIGl0cyBvbkNvbXBsZXRlIGV2ZW4gdGhvdWdoIHRoZXJlIGFyZW4ndCBhbnkgbW9yZSBwcm9wZXJ0aWVzIHR3ZWVuaW5nLlxuXHRcdFx0XHRcdFx0dGhpcy5fZW5hYmxlZChmYWxzZSwgZmFsc2UpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIGNoYW5nZWQ7XG5cdFx0fTtcblxuXHRcdHAuaW52YWxpZGF0ZSA9IGZ1bmN0aW9uKCkge1xuXHRcdFx0aWYgKHRoaXMuX25vdGlmeVBsdWdpbnNPZkVuYWJsZWQpIHtcblx0XHRcdFx0VHdlZW5MaXRlLl9vblBsdWdpbkV2ZW50KFwiX29uRGlzYWJsZVwiLCB0aGlzKTtcblx0XHRcdH1cblx0XHRcdHRoaXMuX2ZpcnN0UFQgPSB0aGlzLl9vdmVyd3JpdHRlblByb3BzID0gdGhpcy5fc3RhcnRBdCA9IHRoaXMuX29uVXBkYXRlID0gbnVsbDtcblx0XHRcdHRoaXMuX25vdGlmeVBsdWdpbnNPZkVuYWJsZWQgPSB0aGlzLl9hY3RpdmUgPSB0aGlzLl9sYXp5ID0gZmFsc2U7XG5cdFx0XHR0aGlzLl9wcm9wTG9va3VwID0gKHRoaXMuX3RhcmdldHMpID8ge30gOiBbXTtcblx0XHRcdEFuaW1hdGlvbi5wcm90b3R5cGUuaW52YWxpZGF0ZS5jYWxsKHRoaXMpO1xuXHRcdFx0aWYgKHRoaXMudmFycy5pbW1lZGlhdGVSZW5kZXIpIHtcblx0XHRcdFx0dGhpcy5fdGltZSA9IC1fdGlueU51bTsgLy9mb3JjZXMgYSByZW5kZXIgd2l0aG91dCBoYXZpbmcgdG8gc2V0IHRoZSByZW5kZXIoKSBcImZvcmNlXCIgcGFyYW1ldGVyIHRvIHRydWUgYmVjYXVzZSB3ZSB3YW50IHRvIGFsbG93IGxhenlpbmcgYnkgZGVmYXVsdCAodXNpbmcgdGhlIFwiZm9yY2VcIiBwYXJhbWV0ZXIgYWx3YXlzIGZvcmNlcyBhbiBpbW1lZGlhdGUgZnVsbCByZW5kZXIpXG5cdFx0XHRcdHRoaXMucmVuZGVyKE1hdGgubWluKDAsIC10aGlzLl9kZWxheSkpOyAvL2luIGNhc2UgZGVsYXkgaXMgbmVnYXRpdmUuXG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gdGhpcztcblx0XHR9O1xuXG5cdFx0cC5fZW5hYmxlZCA9IGZ1bmN0aW9uKGVuYWJsZWQsIGlnbm9yZVRpbWVsaW5lKSB7XG5cdFx0XHRpZiAoIV90aWNrZXJBY3RpdmUpIHtcblx0XHRcdFx0X3RpY2tlci53YWtlKCk7XG5cdFx0XHR9XG5cdFx0XHRpZiAoZW5hYmxlZCAmJiB0aGlzLl9nYykge1xuXHRcdFx0XHR2YXIgdGFyZ2V0cyA9IHRoaXMuX3RhcmdldHMsXG5cdFx0XHRcdFx0aTtcblx0XHRcdFx0aWYgKHRhcmdldHMpIHtcblx0XHRcdFx0XHRpID0gdGFyZ2V0cy5sZW5ndGg7XG5cdFx0XHRcdFx0d2hpbGUgKC0taSA+IC0xKSB7XG5cdFx0XHRcdFx0XHR0aGlzLl9zaWJsaW5nc1tpXSA9IF9yZWdpc3Rlcih0YXJnZXRzW2ldLCB0aGlzLCB0cnVlKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0dGhpcy5fc2libGluZ3MgPSBfcmVnaXN0ZXIodGhpcy50YXJnZXQsIHRoaXMsIHRydWUpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRBbmltYXRpb24ucHJvdG90eXBlLl9lbmFibGVkLmNhbGwodGhpcywgZW5hYmxlZCwgaWdub3JlVGltZWxpbmUpO1xuXHRcdFx0aWYgKHRoaXMuX25vdGlmeVBsdWdpbnNPZkVuYWJsZWQpIGlmICh0aGlzLl9maXJzdFBUKSB7XG5cdFx0XHRcdHJldHVybiBUd2VlbkxpdGUuX29uUGx1Z2luRXZlbnQoKGVuYWJsZWQgPyBcIl9vbkVuYWJsZVwiIDogXCJfb25EaXNhYmxlXCIpLCB0aGlzKTtcblx0XHRcdH1cblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9O1xuXG5cbi8vLS0tLVR3ZWVuTGl0ZSBzdGF0aWMgbWV0aG9kcyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5cdFx0VHdlZW5MaXRlLnRvID0gZnVuY3Rpb24odGFyZ2V0LCBkdXJhdGlvbiwgdmFycykge1xuXHRcdFx0cmV0dXJuIG5ldyBUd2VlbkxpdGUodGFyZ2V0LCBkdXJhdGlvbiwgdmFycyk7XG5cdFx0fTtcblxuXHRcdFR3ZWVuTGl0ZS5mcm9tID0gZnVuY3Rpb24odGFyZ2V0LCBkdXJhdGlvbiwgdmFycykge1xuXHRcdFx0dmFycy5ydW5CYWNrd2FyZHMgPSB0cnVlO1xuXHRcdFx0dmFycy5pbW1lZGlhdGVSZW5kZXIgPSAodmFycy5pbW1lZGlhdGVSZW5kZXIgIT0gZmFsc2UpO1xuXHRcdFx0cmV0dXJuIG5ldyBUd2VlbkxpdGUodGFyZ2V0LCBkdXJhdGlvbiwgdmFycyk7XG5cdFx0fTtcblxuXHRcdFR3ZWVuTGl0ZS5mcm9tVG8gPSBmdW5jdGlvbih0YXJnZXQsIGR1cmF0aW9uLCBmcm9tVmFycywgdG9WYXJzKSB7XG5cdFx0XHR0b1ZhcnMuc3RhcnRBdCA9IGZyb21WYXJzO1xuXHRcdFx0dG9WYXJzLmltbWVkaWF0ZVJlbmRlciA9ICh0b1ZhcnMuaW1tZWRpYXRlUmVuZGVyICE9IGZhbHNlICYmIGZyb21WYXJzLmltbWVkaWF0ZVJlbmRlciAhPSBmYWxzZSk7XG5cdFx0XHRyZXR1cm4gbmV3IFR3ZWVuTGl0ZSh0YXJnZXQsIGR1cmF0aW9uLCB0b1ZhcnMpO1xuXHRcdH07XG5cblx0XHRUd2VlbkxpdGUuZGVsYXllZENhbGwgPSBmdW5jdGlvbihkZWxheSwgY2FsbGJhY2ssIHBhcmFtcywgc2NvcGUsIHVzZUZyYW1lcykge1xuXHRcdFx0cmV0dXJuIG5ldyBUd2VlbkxpdGUoY2FsbGJhY2ssIDAsIHtkZWxheTpkZWxheSwgb25Db21wbGV0ZTpjYWxsYmFjaywgb25Db21wbGV0ZVBhcmFtczpwYXJhbXMsIGNhbGxiYWNrU2NvcGU6c2NvcGUsIG9uUmV2ZXJzZUNvbXBsZXRlOmNhbGxiYWNrLCBvblJldmVyc2VDb21wbGV0ZVBhcmFtczpwYXJhbXMsIGltbWVkaWF0ZVJlbmRlcjpmYWxzZSwgbGF6eTpmYWxzZSwgdXNlRnJhbWVzOnVzZUZyYW1lcywgb3ZlcndyaXRlOjB9KTtcblx0XHR9O1xuXG5cdFx0VHdlZW5MaXRlLnNldCA9IGZ1bmN0aW9uKHRhcmdldCwgdmFycykge1xuXHRcdFx0cmV0dXJuIG5ldyBUd2VlbkxpdGUodGFyZ2V0LCAwLCB2YXJzKTtcblx0XHR9O1xuXG5cdFx0VHdlZW5MaXRlLmdldFR3ZWVuc09mID0gZnVuY3Rpb24odGFyZ2V0LCBvbmx5QWN0aXZlKSB7XG5cdFx0XHRpZiAodGFyZ2V0ID09IG51bGwpIHsgcmV0dXJuIFtdOyB9XG5cdFx0XHR0YXJnZXQgPSAodHlwZW9mKHRhcmdldCkgIT09IFwic3RyaW5nXCIpID8gdGFyZ2V0IDogVHdlZW5MaXRlLnNlbGVjdG9yKHRhcmdldCkgfHwgdGFyZ2V0O1xuXHRcdFx0dmFyIGksIGEsIGosIHQ7XG5cdFx0XHRpZiAoKF9pc0FycmF5KHRhcmdldCkgfHwgX2lzU2VsZWN0b3IodGFyZ2V0KSkgJiYgdHlwZW9mKHRhcmdldFswXSkgIT09IFwibnVtYmVyXCIpIHtcblx0XHRcdFx0aSA9IHRhcmdldC5sZW5ndGg7XG5cdFx0XHRcdGEgPSBbXTtcblx0XHRcdFx0d2hpbGUgKC0taSA+IC0xKSB7XG5cdFx0XHRcdFx0YSA9IGEuY29uY2F0KFR3ZWVuTGl0ZS5nZXRUd2VlbnNPZih0YXJnZXRbaV0sIG9ubHlBY3RpdmUpKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRpID0gYS5sZW5ndGg7XG5cdFx0XHRcdC8vbm93IGdldCByaWQgb2YgYW55IGR1cGxpY2F0ZXMgKHR3ZWVucyBvZiBhcnJheXMgb2Ygb2JqZWN0cyBjb3VsZCBjYXVzZSBkdXBsaWNhdGVzKVxuXHRcdFx0XHR3aGlsZSAoLS1pID4gLTEpIHtcblx0XHRcdFx0XHR0ID0gYVtpXTtcblx0XHRcdFx0XHRqID0gaTtcblx0XHRcdFx0XHR3aGlsZSAoLS1qID4gLTEpIHtcblx0XHRcdFx0XHRcdGlmICh0ID09PSBhW2pdKSB7XG5cdFx0XHRcdFx0XHRcdGEuc3BsaWNlKGksIDEpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIGlmICh0YXJnZXQuX2dzVHdlZW5JRCkge1xuXHRcdFx0XHRhID0gX3JlZ2lzdGVyKHRhcmdldCkuY29uY2F0KCk7XG5cdFx0XHRcdGkgPSBhLmxlbmd0aDtcblx0XHRcdFx0d2hpbGUgKC0taSA+IC0xKSB7XG5cdFx0XHRcdFx0aWYgKGFbaV0uX2djIHx8IChvbmx5QWN0aXZlICYmICFhW2ldLmlzQWN0aXZlKCkpKSB7XG5cdFx0XHRcdFx0XHRhLnNwbGljZShpLCAxKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdHJldHVybiBhIHx8IFtdO1xuXHRcdH07XG5cblx0XHRUd2VlbkxpdGUua2lsbFR3ZWVuc09mID0gVHdlZW5MaXRlLmtpbGxEZWxheWVkQ2FsbHNUbyA9IGZ1bmN0aW9uKHRhcmdldCwgb25seUFjdGl2ZSwgdmFycykge1xuXHRcdFx0aWYgKHR5cGVvZihvbmx5QWN0aXZlKSA9PT0gXCJvYmplY3RcIikge1xuXHRcdFx0XHR2YXJzID0gb25seUFjdGl2ZTsgLy9mb3IgYmFja3dhcmRzIGNvbXBhdGliaWxpdHkgKGJlZm9yZSBcIm9ubHlBY3RpdmVcIiBwYXJhbWV0ZXIgd2FzIGluc2VydGVkKVxuXHRcdFx0XHRvbmx5QWN0aXZlID0gZmFsc2U7XG5cdFx0XHR9XG5cdFx0XHR2YXIgYSA9IFR3ZWVuTGl0ZS5nZXRUd2VlbnNPZih0YXJnZXQsIG9ubHlBY3RpdmUpLFxuXHRcdFx0XHRpID0gYS5sZW5ndGg7XG5cdFx0XHR3aGlsZSAoLS1pID4gLTEpIHtcblx0XHRcdFx0YVtpXS5fa2lsbCh2YXJzLCB0YXJnZXQpO1xuXHRcdFx0fVxuXHRcdH07XG5cblxuXG4vKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogVHdlZW5QbHVnaW4gICAoY291bGQgZWFzaWx5IGJlIHNwbGl0IG91dCBhcyBhIHNlcGFyYXRlIGZpbGUvY2xhc3MsIGJ1dCBpbmNsdWRlZCBmb3IgZWFzZSBvZiB1c2UgKHNvIHRoYXQgcGVvcGxlIGRvbid0IG5lZWQgdG8gaW5jbHVkZSBhbm90aGVyIHNjcmlwdCBjYWxsIGJlZm9yZSBsb2FkaW5nIHBsdWdpbnMgd2hpY2ggaXMgZWFzeSB0byBmb3JnZXQpXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblx0XHR2YXIgVHdlZW5QbHVnaW4gPSBfY2xhc3MoXCJwbHVnaW5zLlR3ZWVuUGx1Z2luXCIsIGZ1bmN0aW9uKHByb3BzLCBwcmlvcml0eSkge1xuXHRcdFx0XHRcdHRoaXMuX292ZXJ3cml0ZVByb3BzID0gKHByb3BzIHx8IFwiXCIpLnNwbGl0KFwiLFwiKTtcblx0XHRcdFx0XHR0aGlzLl9wcm9wTmFtZSA9IHRoaXMuX292ZXJ3cml0ZVByb3BzWzBdO1xuXHRcdFx0XHRcdHRoaXMuX3ByaW9yaXR5ID0gcHJpb3JpdHkgfHwgMDtcblx0XHRcdFx0XHR0aGlzLl9zdXBlciA9IFR3ZWVuUGx1Z2luLnByb3RvdHlwZTtcblx0XHRcdFx0fSwgdHJ1ZSk7XG5cblx0XHRwID0gVHdlZW5QbHVnaW4ucHJvdG90eXBlO1xuXHRcdFR3ZWVuUGx1Z2luLnZlcnNpb24gPSBcIjEuMTkuMFwiO1xuXHRcdFR3ZWVuUGx1Z2luLkFQSSA9IDI7XG5cdFx0cC5fZmlyc3RQVCA9IG51bGw7XG5cdFx0cC5fYWRkVHdlZW4gPSBfYWRkUHJvcFR3ZWVuO1xuXHRcdHAuc2V0UmF0aW8gPSBfc2V0UmF0aW87XG5cblx0XHRwLl9raWxsID0gZnVuY3Rpb24obG9va3VwKSB7XG5cdFx0XHR2YXIgYSA9IHRoaXMuX292ZXJ3cml0ZVByb3BzLFxuXHRcdFx0XHRwdCA9IHRoaXMuX2ZpcnN0UFQsXG5cdFx0XHRcdGk7XG5cdFx0XHRpZiAobG9va3VwW3RoaXMuX3Byb3BOYW1lXSAhPSBudWxsKSB7XG5cdFx0XHRcdHRoaXMuX292ZXJ3cml0ZVByb3BzID0gW107XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRpID0gYS5sZW5ndGg7XG5cdFx0XHRcdHdoaWxlICgtLWkgPiAtMSkge1xuXHRcdFx0XHRcdGlmIChsb29rdXBbYVtpXV0gIT0gbnVsbCkge1xuXHRcdFx0XHRcdFx0YS5zcGxpY2UoaSwgMSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHR3aGlsZSAocHQpIHtcblx0XHRcdFx0aWYgKGxvb2t1cFtwdC5uXSAhPSBudWxsKSB7XG5cdFx0XHRcdFx0aWYgKHB0Ll9uZXh0KSB7XG5cdFx0XHRcdFx0XHRwdC5fbmV4dC5fcHJldiA9IHB0Ll9wcmV2O1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRpZiAocHQuX3ByZXYpIHtcblx0XHRcdFx0XHRcdHB0Ll9wcmV2Ll9uZXh0ID0gcHQuX25leHQ7XG5cdFx0XHRcdFx0XHRwdC5fcHJldiA9IG51bGw7XG5cdFx0XHRcdFx0fSBlbHNlIGlmICh0aGlzLl9maXJzdFBUID09PSBwdCkge1xuXHRcdFx0XHRcdFx0dGhpcy5fZmlyc3RQVCA9IHB0Ll9uZXh0O1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHRwdCA9IHB0Ll9uZXh0O1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH07XG5cblx0XHRwLl9tb2QgPSBwLl9yb3VuZFByb3BzID0gZnVuY3Rpb24obG9va3VwKSB7XG5cdFx0XHR2YXIgcHQgPSB0aGlzLl9maXJzdFBULFxuXHRcdFx0XHR2YWw7XG5cdFx0XHR3aGlsZSAocHQpIHtcblx0XHRcdFx0dmFsID0gbG9va3VwW3RoaXMuX3Byb3BOYW1lXSB8fCAocHQubiAhPSBudWxsICYmIGxvb2t1cFsgcHQubi5zcGxpdCh0aGlzLl9wcm9wTmFtZSArIFwiX1wiKS5qb2luKFwiXCIpIF0pO1xuXHRcdFx0XHRpZiAodmFsICYmIHR5cGVvZih2YWwpID09PSBcImZ1bmN0aW9uXCIpIHsgLy9zb21lIHByb3BlcnRpZXMgdGhhdCBhcmUgdmVyeSBwbHVnaW4tc3BlY2lmaWMgYWRkIGEgcHJlZml4IG5hbWVkIGFmdGVyIHRoZSBfcHJvcE5hbWUgcGx1cyBhbiB1bmRlcnNjb3JlLCBzbyB3ZSBuZWVkIHRvIGlnbm9yZSB0aGF0IGV4dHJhIHN0dWZmIGhlcmUuXG5cdFx0XHRcdFx0aWYgKHB0LmYgPT09IDIpIHtcblx0XHRcdFx0XHRcdHB0LnQuX2FwcGx5UFQubSA9IHZhbDtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0cHQubSA9IHZhbDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdFx0cHQgPSBwdC5fbmV4dDtcblx0XHRcdH1cblx0XHR9O1xuXG5cdFx0VHdlZW5MaXRlLl9vblBsdWdpbkV2ZW50ID0gZnVuY3Rpb24odHlwZSwgdHdlZW4pIHtcblx0XHRcdHZhciBwdCA9IHR3ZWVuLl9maXJzdFBULFxuXHRcdFx0XHRjaGFuZ2VkLCBwdDIsIGZpcnN0LCBsYXN0LCBuZXh0O1xuXHRcdFx0aWYgKHR5cGUgPT09IFwiX29uSW5pdEFsbFByb3BzXCIpIHtcblx0XHRcdFx0Ly9zb3J0cyB0aGUgUHJvcFR3ZWVuIGxpbmtlZCBsaXN0IGluIG9yZGVyIG9mIHByaW9yaXR5IGJlY2F1c2Ugc29tZSBwbHVnaW5zIG5lZWQgdG8gcmVuZGVyIGVhcmxpZXIvbGF0ZXIgdGhhbiBvdGhlcnMsIGxpa2UgTW90aW9uQmx1clBsdWdpbiBhcHBsaWVzIGl0cyBlZmZlY3RzIGFmdGVyIGFsbCB4L3kvYWxwaGEgdHdlZW5zIGhhdmUgcmVuZGVyZWQgb24gZWFjaCBmcmFtZS5cblx0XHRcdFx0d2hpbGUgKHB0KSB7XG5cdFx0XHRcdFx0bmV4dCA9IHB0Ll9uZXh0O1xuXHRcdFx0XHRcdHB0MiA9IGZpcnN0O1xuXHRcdFx0XHRcdHdoaWxlIChwdDIgJiYgcHQyLnByID4gcHQucHIpIHtcblx0XHRcdFx0XHRcdHB0MiA9IHB0Mi5fbmV4dDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0aWYgKChwdC5fcHJldiA9IHB0MiA/IHB0Mi5fcHJldiA6IGxhc3QpKSB7XG5cdFx0XHRcdFx0XHRwdC5fcHJldi5fbmV4dCA9IHB0O1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRmaXJzdCA9IHB0O1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRpZiAoKHB0Ll9uZXh0ID0gcHQyKSkge1xuXHRcdFx0XHRcdFx0cHQyLl9wcmV2ID0gcHQ7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdGxhc3QgPSBwdDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0cHQgPSBuZXh0O1xuXHRcdFx0XHR9XG5cdFx0XHRcdHB0ID0gdHdlZW4uX2ZpcnN0UFQgPSBmaXJzdDtcblx0XHRcdH1cblx0XHRcdHdoaWxlIChwdCkge1xuXHRcdFx0XHRpZiAocHQucGcpIGlmICh0eXBlb2YocHQudFt0eXBlXSkgPT09IFwiZnVuY3Rpb25cIikgaWYgKHB0LnRbdHlwZV0oKSkge1xuXHRcdFx0XHRcdGNoYW5nZWQgPSB0cnVlO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHB0ID0gcHQuX25leHQ7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gY2hhbmdlZDtcblx0XHR9O1xuXG5cdFx0VHdlZW5QbHVnaW4uYWN0aXZhdGUgPSBmdW5jdGlvbihwbHVnaW5zKSB7XG5cdFx0XHR2YXIgaSA9IHBsdWdpbnMubGVuZ3RoO1xuXHRcdFx0d2hpbGUgKC0taSA+IC0xKSB7XG5cdFx0XHRcdGlmIChwbHVnaW5zW2ldLkFQSSA9PT0gVHdlZW5QbHVnaW4uQVBJKSB7XG5cdFx0XHRcdFx0X3BsdWdpbnNbKG5ldyBwbHVnaW5zW2ldKCkpLl9wcm9wTmFtZV0gPSBwbHVnaW5zW2ldO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9O1xuXG5cdFx0Ly9wcm92aWRlcyBhIG1vcmUgY29uY2lzZSB3YXkgdG8gZGVmaW5lIHBsdWdpbnMgdGhhdCBoYXZlIG5vIGRlcGVuZGVuY2llcyBiZXNpZGVzIFR3ZWVuUGx1Z2luIGFuZCBUd2VlbkxpdGUsIHdyYXBwaW5nIGNvbW1vbiBib2lsZXJwbGF0ZSBzdHVmZiBpbnRvIG9uZSBmdW5jdGlvbiAoYWRkZWQgaW4gMS45LjApLiBZb3UgZG9uJ3QgTkVFRCB0byB1c2UgdGhpcyB0byBkZWZpbmUgYSBwbHVnaW4gLSB0aGUgb2xkIHdheSBzdGlsbCB3b3JrcyBhbmQgY2FuIGJlIHVzZWZ1bCBpbiBjZXJ0YWluIChyYXJlKSBzaXR1YXRpb25zLlxuXHRcdF9nc0RlZmluZS5wbHVnaW4gPSBmdW5jdGlvbihjb25maWcpIHtcblx0XHRcdGlmICghY29uZmlnIHx8ICFjb25maWcucHJvcE5hbWUgfHwgIWNvbmZpZy5pbml0IHx8ICFjb25maWcuQVBJKSB7IHRocm93IFwiaWxsZWdhbCBwbHVnaW4gZGVmaW5pdGlvbi5cIjsgfVxuXHRcdFx0dmFyIHByb3BOYW1lID0gY29uZmlnLnByb3BOYW1lLFxuXHRcdFx0XHRwcmlvcml0eSA9IGNvbmZpZy5wcmlvcml0eSB8fCAwLFxuXHRcdFx0XHRvdmVyd3JpdGVQcm9wcyA9IGNvbmZpZy5vdmVyd3JpdGVQcm9wcyxcblx0XHRcdFx0bWFwID0ge2luaXQ6XCJfb25Jbml0VHdlZW5cIiwgc2V0Olwic2V0UmF0aW9cIiwga2lsbDpcIl9raWxsXCIsIHJvdW5kOlwiX21vZFwiLCBtb2Q6XCJfbW9kXCIsIGluaXRBbGw6XCJfb25Jbml0QWxsUHJvcHNcIn0sXG5cdFx0XHRcdFBsdWdpbiA9IF9jbGFzcyhcInBsdWdpbnMuXCIgKyBwcm9wTmFtZS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHByb3BOYW1lLnN1YnN0cigxKSArIFwiUGx1Z2luXCIsXG5cdFx0XHRcdFx0ZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0XHRUd2VlblBsdWdpbi5jYWxsKHRoaXMsIHByb3BOYW1lLCBwcmlvcml0eSk7XG5cdFx0XHRcdFx0XHR0aGlzLl9vdmVyd3JpdGVQcm9wcyA9IG92ZXJ3cml0ZVByb3BzIHx8IFtdO1xuXHRcdFx0XHRcdH0sIChjb25maWcuZ2xvYmFsID09PSB0cnVlKSksXG5cdFx0XHRcdHAgPSBQbHVnaW4ucHJvdG90eXBlID0gbmV3IFR3ZWVuUGx1Z2luKHByb3BOYW1lKSxcblx0XHRcdFx0cHJvcDtcblx0XHRcdHAuY29uc3RydWN0b3IgPSBQbHVnaW47XG5cdFx0XHRQbHVnaW4uQVBJID0gY29uZmlnLkFQSTtcblx0XHRcdGZvciAocHJvcCBpbiBtYXApIHtcblx0XHRcdFx0aWYgKHR5cGVvZihjb25maWdbcHJvcF0pID09PSBcImZ1bmN0aW9uXCIpIHtcblx0XHRcdFx0XHRwW21hcFtwcm9wXV0gPSBjb25maWdbcHJvcF07XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdFBsdWdpbi52ZXJzaW9uID0gY29uZmlnLnZlcnNpb247XG5cdFx0XHRUd2VlblBsdWdpbi5hY3RpdmF0ZShbUGx1Z2luXSk7XG5cdFx0XHRyZXR1cm4gUGx1Z2luO1xuXHRcdH07XG5cblxuXHRcdC8vbm93IHJ1biB0aHJvdWdoIGFsbCB0aGUgZGVwZW5kZW5jaWVzIGRpc2NvdmVyZWQgYW5kIGlmIGFueSBhcmUgbWlzc2luZywgbG9nIHRoYXQgdG8gdGhlIGNvbnNvbGUgYXMgYSB3YXJuaW5nLiBUaGlzIGlzIHdoeSBpdCdzIGJlc3QgdG8gaGF2ZSBUd2VlbkxpdGUgbG9hZCBsYXN0IC0gaXQgY2FuIGNoZWNrIGFsbCB0aGUgZGVwZW5kZW5jaWVzIGZvciB5b3UuXG5cdFx0YSA9IHdpbmRvdy5fZ3NRdWV1ZTtcblx0XHRpZiAoYSkge1xuXHRcdFx0Zm9yIChpID0gMDsgaSA8IGEubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0YVtpXSgpO1xuXHRcdFx0fVxuXHRcdFx0Zm9yIChwIGluIF9kZWZMb29rdXApIHtcblx0XHRcdFx0aWYgKCFfZGVmTG9va3VwW3BdLmZ1bmMpIHtcblx0XHRcdFx0XHR3aW5kb3cuY29uc29sZS5sb2coXCJHU0FQIGVuY291bnRlcmVkIG1pc3NpbmcgZGVwZW5kZW5jeTogXCIgKyBwKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdF90aWNrZXJBY3RpdmUgPSBmYWxzZTsgLy9lbnN1cmVzIHRoYXQgdGhlIGZpcnN0IG9mZmljaWFsIGFuaW1hdGlvbiBmb3JjZXMgYSB0aWNrZXIudGljaygpIHRvIHVwZGF0ZSB0aGUgdGltZSB3aGVuIGl0IGlzIGluc3RhbnRpYXRlZFxuXG59KSgodHlwZW9mKG1vZHVsZSkgIT09IFwidW5kZWZpbmVkXCIgJiYgbW9kdWxlLmV4cG9ydHMgJiYgdHlwZW9mKGdsb2JhbCkgIT09IFwidW5kZWZpbmVkXCIpID8gZ2xvYmFsIDogdGhpcyB8fCB3aW5kb3csIFwiVHdlZW5MaXRlXCIpOyIsInZhciByb290ID0gcmVxdWlyZSgnLi9fcm9vdCcpO1xuXG4vKiogQnVpbHQtaW4gdmFsdWUgcmVmZXJlbmNlcy4gKi9cbnZhciBTeW1ib2wgPSByb290LlN5bWJvbDtcblxubW9kdWxlLmV4cG9ydHMgPSBTeW1ib2w7XG4iLCJ2YXIgU3ltYm9sID0gcmVxdWlyZSgnLi9fU3ltYm9sJyksXG4gICAgZ2V0UmF3VGFnID0gcmVxdWlyZSgnLi9fZ2V0UmF3VGFnJyksXG4gICAgb2JqZWN0VG9TdHJpbmcgPSByZXF1aXJlKCcuL19vYmplY3RUb1N0cmluZycpO1xuXG4vKiogYE9iamVjdCN0b1N0cmluZ2AgcmVzdWx0IHJlZmVyZW5jZXMuICovXG52YXIgbnVsbFRhZyA9ICdbb2JqZWN0IE51bGxdJyxcbiAgICB1bmRlZmluZWRUYWcgPSAnW29iamVjdCBVbmRlZmluZWRdJztcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgc3ltVG9TdHJpbmdUYWcgPSBTeW1ib2wgPyBTeW1ib2wudG9TdHJpbmdUYWcgOiB1bmRlZmluZWQ7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYGdldFRhZ2Agd2l0aG91dCBmYWxsYmFja3MgZm9yIGJ1Z2d5IGVudmlyb25tZW50cy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSBgdG9TdHJpbmdUYWdgLlxuICovXG5mdW5jdGlvbiBiYXNlR2V0VGFnKHZhbHVlKSB7XG4gIGlmICh2YWx1ZSA9PSBudWxsKSB7XG4gICAgcmV0dXJuIHZhbHVlID09PSB1bmRlZmluZWQgPyB1bmRlZmluZWRUYWcgOiBudWxsVGFnO1xuICB9XG4gIHJldHVybiAoc3ltVG9TdHJpbmdUYWcgJiYgc3ltVG9TdHJpbmdUYWcgaW4gT2JqZWN0KHZhbHVlKSlcbiAgICA/IGdldFJhd1RhZyh2YWx1ZSlcbiAgICA6IG9iamVjdFRvU3RyaW5nKHZhbHVlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlR2V0VGFnO1xuIiwiLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBnbG9iYWxgIGZyb20gTm9kZS5qcy4gKi9cbnZhciBmcmVlR2xvYmFsID0gdHlwZW9mIGdsb2JhbCA9PSAnb2JqZWN0JyAmJiBnbG9iYWwgJiYgZ2xvYmFsLk9iamVjdCA9PT0gT2JqZWN0ICYmIGdsb2JhbDtcblxubW9kdWxlLmV4cG9ydHMgPSBmcmVlR2xvYmFsO1xuIiwidmFyIFN5bWJvbCA9IHJlcXVpcmUoJy4vX1N5bWJvbCcpO1xuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byBjaGVjayBvYmplY3RzIGZvciBvd24gcHJvcGVydGllcy4gKi9cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IG9iamVjdFByb3RvLmhhc093blByb3BlcnR5O1xuXG4vKipcbiAqIFVzZWQgdG8gcmVzb2x2ZSB0aGVcbiAqIFtgdG9TdHJpbmdUYWdgXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1vYmplY3QucHJvdG90eXBlLnRvc3RyaW5nKVxuICogb2YgdmFsdWVzLlxuICovXG52YXIgbmF0aXZlT2JqZWN0VG9TdHJpbmcgPSBvYmplY3RQcm90by50b1N0cmluZztcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgc3ltVG9TdHJpbmdUYWcgPSBTeW1ib2wgPyBTeW1ib2wudG9TdHJpbmdUYWcgOiB1bmRlZmluZWQ7XG5cbi8qKlxuICogQSBzcGVjaWFsaXplZCB2ZXJzaW9uIG9mIGBiYXNlR2V0VGFnYCB3aGljaCBpZ25vcmVzIGBTeW1ib2wudG9TdHJpbmdUYWdgIHZhbHVlcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSByYXcgYHRvU3RyaW5nVGFnYC5cbiAqL1xuZnVuY3Rpb24gZ2V0UmF3VGFnKHZhbHVlKSB7XG4gIHZhciBpc093biA9IGhhc093blByb3BlcnR5LmNhbGwodmFsdWUsIHN5bVRvU3RyaW5nVGFnKSxcbiAgICAgIHRhZyA9IHZhbHVlW3N5bVRvU3RyaW5nVGFnXTtcblxuICB0cnkge1xuICAgIHZhbHVlW3N5bVRvU3RyaW5nVGFnXSA9IHVuZGVmaW5lZDtcbiAgICB2YXIgdW5tYXNrZWQgPSB0cnVlO1xuICB9IGNhdGNoIChlKSB7fVxuXG4gIHZhciByZXN1bHQgPSBuYXRpdmVPYmplY3RUb1N0cmluZy5jYWxsKHZhbHVlKTtcbiAgaWYgKHVubWFza2VkKSB7XG4gICAgaWYgKGlzT3duKSB7XG4gICAgICB2YWx1ZVtzeW1Ub1N0cmluZ1RhZ10gPSB0YWc7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRlbGV0ZSB2YWx1ZVtzeW1Ub1N0cmluZ1RhZ107XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZ2V0UmF3VGFnO1xuIiwiLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqXG4gKiBVc2VkIHRvIHJlc29sdmUgdGhlXG4gKiBbYHRvU3RyaW5nVGFnYF0oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtb2JqZWN0LnByb3RvdHlwZS50b3N0cmluZylcbiAqIG9mIHZhbHVlcy5cbiAqL1xudmFyIG5hdGl2ZU9iamVjdFRvU3RyaW5nID0gb2JqZWN0UHJvdG8udG9TdHJpbmc7XG5cbi8qKlxuICogQ29udmVydHMgYHZhbHVlYCB0byBhIHN0cmluZyB1c2luZyBgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZ2AuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNvbnZlcnQuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSBjb252ZXJ0ZWQgc3RyaW5nLlxuICovXG5mdW5jdGlvbiBvYmplY3RUb1N0cmluZyh2YWx1ZSkge1xuICByZXR1cm4gbmF0aXZlT2JqZWN0VG9TdHJpbmcuY2FsbCh2YWx1ZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gb2JqZWN0VG9TdHJpbmc7XG4iLCJ2YXIgZnJlZUdsb2JhbCA9IHJlcXVpcmUoJy4vX2ZyZWVHbG9iYWwnKTtcblxuLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBzZWxmYC4gKi9cbnZhciBmcmVlU2VsZiA9IHR5cGVvZiBzZWxmID09ICdvYmplY3QnICYmIHNlbGYgJiYgc2VsZi5PYmplY3QgPT09IE9iamVjdCAmJiBzZWxmO1xuXG4vKiogVXNlZCBhcyBhIHJlZmVyZW5jZSB0byB0aGUgZ2xvYmFsIG9iamVjdC4gKi9cbnZhciByb290ID0gZnJlZUdsb2JhbCB8fCBmcmVlU2VsZiB8fCBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHJvb3Q7XG4iLCJ2YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL2lzT2JqZWN0JyksXG4gICAgbm93ID0gcmVxdWlyZSgnLi9ub3cnKSxcbiAgICB0b051bWJlciA9IHJlcXVpcmUoJy4vdG9OdW1iZXInKTtcblxuLyoqIEVycm9yIG1lc3NhZ2UgY29uc3RhbnRzLiAqL1xudmFyIEZVTkNfRVJST1JfVEVYVCA9ICdFeHBlY3RlZCBhIGZ1bmN0aW9uJztcblxuLyogQnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMgZm9yIHRob3NlIHdpdGggdGhlIHNhbWUgbmFtZSBhcyBvdGhlciBgbG9kYXNoYCBtZXRob2RzLiAqL1xudmFyIG5hdGl2ZU1heCA9IE1hdGgubWF4LFxuICAgIG5hdGl2ZU1pbiA9IE1hdGgubWluO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBkZWJvdW5jZWQgZnVuY3Rpb24gdGhhdCBkZWxheXMgaW52b2tpbmcgYGZ1bmNgIHVudGlsIGFmdGVyIGB3YWl0YFxuICogbWlsbGlzZWNvbmRzIGhhdmUgZWxhcHNlZCBzaW5jZSB0aGUgbGFzdCB0aW1lIHRoZSBkZWJvdW5jZWQgZnVuY3Rpb24gd2FzXG4gKiBpbnZva2VkLiBUaGUgZGVib3VuY2VkIGZ1bmN0aW9uIGNvbWVzIHdpdGggYSBgY2FuY2VsYCBtZXRob2QgdG8gY2FuY2VsXG4gKiBkZWxheWVkIGBmdW5jYCBpbnZvY2F0aW9ucyBhbmQgYSBgZmx1c2hgIG1ldGhvZCB0byBpbW1lZGlhdGVseSBpbnZva2UgdGhlbS5cbiAqIFByb3ZpZGUgYG9wdGlvbnNgIHRvIGluZGljYXRlIHdoZXRoZXIgYGZ1bmNgIHNob3VsZCBiZSBpbnZva2VkIG9uIHRoZVxuICogbGVhZGluZyBhbmQvb3IgdHJhaWxpbmcgZWRnZSBvZiB0aGUgYHdhaXRgIHRpbWVvdXQuIFRoZSBgZnVuY2AgaXMgaW52b2tlZFxuICogd2l0aCB0aGUgbGFzdCBhcmd1bWVudHMgcHJvdmlkZWQgdG8gdGhlIGRlYm91bmNlZCBmdW5jdGlvbi4gU3Vic2VxdWVudFxuICogY2FsbHMgdG8gdGhlIGRlYm91bmNlZCBmdW5jdGlvbiByZXR1cm4gdGhlIHJlc3VsdCBvZiB0aGUgbGFzdCBgZnVuY2BcbiAqIGludm9jYXRpb24uXG4gKlxuICogKipOb3RlOioqIElmIGBsZWFkaW5nYCBhbmQgYHRyYWlsaW5nYCBvcHRpb25zIGFyZSBgdHJ1ZWAsIGBmdW5jYCBpc1xuICogaW52b2tlZCBvbiB0aGUgdHJhaWxpbmcgZWRnZSBvZiB0aGUgdGltZW91dCBvbmx5IGlmIHRoZSBkZWJvdW5jZWQgZnVuY3Rpb25cbiAqIGlzIGludm9rZWQgbW9yZSB0aGFuIG9uY2UgZHVyaW5nIHRoZSBgd2FpdGAgdGltZW91dC5cbiAqXG4gKiBJZiBgd2FpdGAgaXMgYDBgIGFuZCBgbGVhZGluZ2AgaXMgYGZhbHNlYCwgYGZ1bmNgIGludm9jYXRpb24gaXMgZGVmZXJyZWRcbiAqIHVudGlsIHRvIHRoZSBuZXh0IHRpY2ssIHNpbWlsYXIgdG8gYHNldFRpbWVvdXRgIHdpdGggYSB0aW1lb3V0IG9mIGAwYC5cbiAqXG4gKiBTZWUgW0RhdmlkIENvcmJhY2hvJ3MgYXJ0aWNsZV0oaHR0cHM6Ly9jc3MtdHJpY2tzLmNvbS9kZWJvdW5jaW5nLXRocm90dGxpbmctZXhwbGFpbmVkLWV4YW1wbGVzLylcbiAqIGZvciBkZXRhaWxzIG92ZXIgdGhlIGRpZmZlcmVuY2VzIGJldHdlZW4gYF8uZGVib3VuY2VgIGFuZCBgXy50aHJvdHRsZWAuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjEuMFxuICogQGNhdGVnb3J5IEZ1bmN0aW9uXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byBkZWJvdW5jZS5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbd2FpdD0wXSBUaGUgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyB0byBkZWxheS5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9ucz17fV0gVGhlIG9wdGlvbnMgb2JqZWN0LlxuICogQHBhcmFtIHtib29sZWFufSBbb3B0aW9ucy5sZWFkaW5nPWZhbHNlXVxuICogIFNwZWNpZnkgaW52b2tpbmcgb24gdGhlIGxlYWRpbmcgZWRnZSBvZiB0aGUgdGltZW91dC5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbb3B0aW9ucy5tYXhXYWl0XVxuICogIFRoZSBtYXhpbXVtIHRpbWUgYGZ1bmNgIGlzIGFsbG93ZWQgdG8gYmUgZGVsYXllZCBiZWZvcmUgaXQncyBpbnZva2VkLlxuICogQHBhcmFtIHtib29sZWFufSBbb3B0aW9ucy50cmFpbGluZz10cnVlXVxuICogIFNwZWNpZnkgaW52b2tpbmcgb24gdGhlIHRyYWlsaW5nIGVkZ2Ugb2YgdGhlIHRpbWVvdXQuXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBkZWJvdW5jZWQgZnVuY3Rpb24uXG4gKiBAZXhhbXBsZVxuICpcbiAqIC8vIEF2b2lkIGNvc3RseSBjYWxjdWxhdGlvbnMgd2hpbGUgdGhlIHdpbmRvdyBzaXplIGlzIGluIGZsdXguXG4gKiBqUXVlcnkod2luZG93KS5vbigncmVzaXplJywgXy5kZWJvdW5jZShjYWxjdWxhdGVMYXlvdXQsIDE1MCkpO1xuICpcbiAqIC8vIEludm9rZSBgc2VuZE1haWxgIHdoZW4gY2xpY2tlZCwgZGVib3VuY2luZyBzdWJzZXF1ZW50IGNhbGxzLlxuICogalF1ZXJ5KGVsZW1lbnQpLm9uKCdjbGljaycsIF8uZGVib3VuY2Uoc2VuZE1haWwsIDMwMCwge1xuICogICAnbGVhZGluZyc6IHRydWUsXG4gKiAgICd0cmFpbGluZyc6IGZhbHNlXG4gKiB9KSk7XG4gKlxuICogLy8gRW5zdXJlIGBiYXRjaExvZ2AgaXMgaW52b2tlZCBvbmNlIGFmdGVyIDEgc2Vjb25kIG9mIGRlYm91bmNlZCBjYWxscy5cbiAqIHZhciBkZWJvdW5jZWQgPSBfLmRlYm91bmNlKGJhdGNoTG9nLCAyNTAsIHsgJ21heFdhaXQnOiAxMDAwIH0pO1xuICogdmFyIHNvdXJjZSA9IG5ldyBFdmVudFNvdXJjZSgnL3N0cmVhbScpO1xuICogalF1ZXJ5KHNvdXJjZSkub24oJ21lc3NhZ2UnLCBkZWJvdW5jZWQpO1xuICpcbiAqIC8vIENhbmNlbCB0aGUgdHJhaWxpbmcgZGVib3VuY2VkIGludm9jYXRpb24uXG4gKiBqUXVlcnkod2luZG93KS5vbigncG9wc3RhdGUnLCBkZWJvdW5jZWQuY2FuY2VsKTtcbiAqL1xuZnVuY3Rpb24gZGVib3VuY2UoZnVuYywgd2FpdCwgb3B0aW9ucykge1xuICB2YXIgbGFzdEFyZ3MsXG4gICAgICBsYXN0VGhpcyxcbiAgICAgIG1heFdhaXQsXG4gICAgICByZXN1bHQsXG4gICAgICB0aW1lcklkLFxuICAgICAgbGFzdENhbGxUaW1lLFxuICAgICAgbGFzdEludm9rZVRpbWUgPSAwLFxuICAgICAgbGVhZGluZyA9IGZhbHNlLFxuICAgICAgbWF4aW5nID0gZmFsc2UsXG4gICAgICB0cmFpbGluZyA9IHRydWU7XG5cbiAgaWYgKHR5cGVvZiBmdW5jICE9ICdmdW5jdGlvbicpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKEZVTkNfRVJST1JfVEVYVCk7XG4gIH1cbiAgd2FpdCA9IHRvTnVtYmVyKHdhaXQpIHx8IDA7XG4gIGlmIChpc09iamVjdChvcHRpb25zKSkge1xuICAgIGxlYWRpbmcgPSAhIW9wdGlvbnMubGVhZGluZztcbiAgICBtYXhpbmcgPSAnbWF4V2FpdCcgaW4gb3B0aW9ucztcbiAgICBtYXhXYWl0ID0gbWF4aW5nID8gbmF0aXZlTWF4KHRvTnVtYmVyKG9wdGlvbnMubWF4V2FpdCkgfHwgMCwgd2FpdCkgOiBtYXhXYWl0O1xuICAgIHRyYWlsaW5nID0gJ3RyYWlsaW5nJyBpbiBvcHRpb25zID8gISFvcHRpb25zLnRyYWlsaW5nIDogdHJhaWxpbmc7XG4gIH1cblxuICBmdW5jdGlvbiBpbnZva2VGdW5jKHRpbWUpIHtcbiAgICB2YXIgYXJncyA9IGxhc3RBcmdzLFxuICAgICAgICB0aGlzQXJnID0gbGFzdFRoaXM7XG5cbiAgICBsYXN0QXJncyA9IGxhc3RUaGlzID0gdW5kZWZpbmVkO1xuICAgIGxhc3RJbnZva2VUaW1lID0gdGltZTtcbiAgICByZXN1bHQgPSBmdW5jLmFwcGx5KHRoaXNBcmcsIGFyZ3MpO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBmdW5jdGlvbiBsZWFkaW5nRWRnZSh0aW1lKSB7XG4gICAgLy8gUmVzZXQgYW55IGBtYXhXYWl0YCB0aW1lci5cbiAgICBsYXN0SW52b2tlVGltZSA9IHRpbWU7XG4gICAgLy8gU3RhcnQgdGhlIHRpbWVyIGZvciB0aGUgdHJhaWxpbmcgZWRnZS5cbiAgICB0aW1lcklkID0gc2V0VGltZW91dCh0aW1lckV4cGlyZWQsIHdhaXQpO1xuICAgIC8vIEludm9rZSB0aGUgbGVhZGluZyBlZGdlLlxuICAgIHJldHVybiBsZWFkaW5nID8gaW52b2tlRnVuYyh0aW1lKSA6IHJlc3VsdDtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlbWFpbmluZ1dhaXQodGltZSkge1xuICAgIHZhciB0aW1lU2luY2VMYXN0Q2FsbCA9IHRpbWUgLSBsYXN0Q2FsbFRpbWUsXG4gICAgICAgIHRpbWVTaW5jZUxhc3RJbnZva2UgPSB0aW1lIC0gbGFzdEludm9rZVRpbWUsXG4gICAgICAgIHRpbWVXYWl0aW5nID0gd2FpdCAtIHRpbWVTaW5jZUxhc3RDYWxsO1xuXG4gICAgcmV0dXJuIG1heGluZ1xuICAgICAgPyBuYXRpdmVNaW4odGltZVdhaXRpbmcsIG1heFdhaXQgLSB0aW1lU2luY2VMYXN0SW52b2tlKVxuICAgICAgOiB0aW1lV2FpdGluZztcbiAgfVxuXG4gIGZ1bmN0aW9uIHNob3VsZEludm9rZSh0aW1lKSB7XG4gICAgdmFyIHRpbWVTaW5jZUxhc3RDYWxsID0gdGltZSAtIGxhc3RDYWxsVGltZSxcbiAgICAgICAgdGltZVNpbmNlTGFzdEludm9rZSA9IHRpbWUgLSBsYXN0SW52b2tlVGltZTtcblxuICAgIC8vIEVpdGhlciB0aGlzIGlzIHRoZSBmaXJzdCBjYWxsLCBhY3Rpdml0eSBoYXMgc3RvcHBlZCBhbmQgd2UncmUgYXQgdGhlXG4gICAgLy8gdHJhaWxpbmcgZWRnZSwgdGhlIHN5c3RlbSB0aW1lIGhhcyBnb25lIGJhY2t3YXJkcyBhbmQgd2UncmUgdHJlYXRpbmdcbiAgICAvLyBpdCBhcyB0aGUgdHJhaWxpbmcgZWRnZSwgb3Igd2UndmUgaGl0IHRoZSBgbWF4V2FpdGAgbGltaXQuXG4gICAgcmV0dXJuIChsYXN0Q2FsbFRpbWUgPT09IHVuZGVmaW5lZCB8fCAodGltZVNpbmNlTGFzdENhbGwgPj0gd2FpdCkgfHxcbiAgICAgICh0aW1lU2luY2VMYXN0Q2FsbCA8IDApIHx8IChtYXhpbmcgJiYgdGltZVNpbmNlTGFzdEludm9rZSA+PSBtYXhXYWl0KSk7XG4gIH1cblxuICBmdW5jdGlvbiB0aW1lckV4cGlyZWQoKSB7XG4gICAgdmFyIHRpbWUgPSBub3coKTtcbiAgICBpZiAoc2hvdWxkSW52b2tlKHRpbWUpKSB7XG4gICAgICByZXR1cm4gdHJhaWxpbmdFZGdlKHRpbWUpO1xuICAgIH1cbiAgICAvLyBSZXN0YXJ0IHRoZSB0aW1lci5cbiAgICB0aW1lcklkID0gc2V0VGltZW91dCh0aW1lckV4cGlyZWQsIHJlbWFpbmluZ1dhaXQodGltZSkpO1xuICB9XG5cbiAgZnVuY3Rpb24gdHJhaWxpbmdFZGdlKHRpbWUpIHtcbiAgICB0aW1lcklkID0gdW5kZWZpbmVkO1xuXG4gICAgLy8gT25seSBpbnZva2UgaWYgd2UgaGF2ZSBgbGFzdEFyZ3NgIHdoaWNoIG1lYW5zIGBmdW5jYCBoYXMgYmVlblxuICAgIC8vIGRlYm91bmNlZCBhdCBsZWFzdCBvbmNlLlxuICAgIGlmICh0cmFpbGluZyAmJiBsYXN0QXJncykge1xuICAgICAgcmV0dXJuIGludm9rZUZ1bmModGltZSk7XG4gICAgfVxuICAgIGxhc3RBcmdzID0gbGFzdFRoaXMgPSB1bmRlZmluZWQ7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNhbmNlbCgpIHtcbiAgICBpZiAodGltZXJJZCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBjbGVhclRpbWVvdXQodGltZXJJZCk7XG4gICAgfVxuICAgIGxhc3RJbnZva2VUaW1lID0gMDtcbiAgICBsYXN0QXJncyA9IGxhc3RDYWxsVGltZSA9IGxhc3RUaGlzID0gdGltZXJJZCA9IHVuZGVmaW5lZDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGZsdXNoKCkge1xuICAgIHJldHVybiB0aW1lcklkID09PSB1bmRlZmluZWQgPyByZXN1bHQgOiB0cmFpbGluZ0VkZ2Uobm93KCkpO1xuICB9XG5cbiAgZnVuY3Rpb24gZGVib3VuY2VkKCkge1xuICAgIHZhciB0aW1lID0gbm93KCksXG4gICAgICAgIGlzSW52b2tpbmcgPSBzaG91bGRJbnZva2UodGltZSk7XG5cbiAgICBsYXN0QXJncyA9IGFyZ3VtZW50cztcbiAgICBsYXN0VGhpcyA9IHRoaXM7XG4gICAgbGFzdENhbGxUaW1lID0gdGltZTtcblxuICAgIGlmIChpc0ludm9raW5nKSB7XG4gICAgICBpZiAodGltZXJJZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybiBsZWFkaW5nRWRnZShsYXN0Q2FsbFRpbWUpO1xuICAgICAgfVxuICAgICAgaWYgKG1heGluZykge1xuICAgICAgICAvLyBIYW5kbGUgaW52b2NhdGlvbnMgaW4gYSB0aWdodCBsb29wLlxuICAgICAgICB0aW1lcklkID0gc2V0VGltZW91dCh0aW1lckV4cGlyZWQsIHdhaXQpO1xuICAgICAgICByZXR1cm4gaW52b2tlRnVuYyhsYXN0Q2FsbFRpbWUpO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAodGltZXJJZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aW1lcklkID0gc2V0VGltZW91dCh0aW1lckV4cGlyZWQsIHdhaXQpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG4gIGRlYm91bmNlZC5jYW5jZWwgPSBjYW5jZWw7XG4gIGRlYm91bmNlZC5mbHVzaCA9IGZsdXNoO1xuICByZXR1cm4gZGVib3VuY2VkO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRlYm91bmNlO1xuIiwiLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyB0aGVcbiAqIFtsYW5ndWFnZSB0eXBlXShodHRwOi8vd3d3LmVjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtZWNtYXNjcmlwdC1sYW5ndWFnZS10eXBlcylcbiAqIG9mIGBPYmplY3RgLiAoZS5nLiBhcnJheXMsIGZ1bmN0aW9ucywgb2JqZWN0cywgcmVnZXhlcywgYG5ldyBOdW1iZXIoMClgLCBhbmQgYG5ldyBTdHJpbmcoJycpYClcbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuMS4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhbiBvYmplY3QsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc09iamVjdCh7fSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdChbMSwgMiwgM10pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3QoXy5ub29wKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0KG51bGwpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNPYmplY3QodmFsdWUpIHtcbiAgdmFyIHR5cGUgPSB0eXBlb2YgdmFsdWU7XG4gIHJldHVybiB2YWx1ZSAhPSBudWxsICYmICh0eXBlID09ICdvYmplY3QnIHx8IHR5cGUgPT0gJ2Z1bmN0aW9uJyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNPYmplY3Q7XG4iLCIvKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIG9iamVjdC1saWtlLiBBIHZhbHVlIGlzIG9iamVjdC1saWtlIGlmIGl0J3Mgbm90IGBudWxsYFxuICogYW5kIGhhcyBhIGB0eXBlb2ZgIHJlc3VsdCBvZiBcIm9iamVjdFwiLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIG9iamVjdC1saWtlLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNPYmplY3RMaWtlKHt9KTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZShbMSwgMiwgM10pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3RMaWtlKF8ubm9vcCk7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uaXNPYmplY3RMaWtlKG51bGwpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNPYmplY3RMaWtlKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSAhPSBudWxsICYmIHR5cGVvZiB2YWx1ZSA9PSAnb2JqZWN0Jztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc09iamVjdExpa2U7XG4iLCJ2YXIgYmFzZUdldFRhZyA9IHJlcXVpcmUoJy4vX2Jhc2VHZXRUYWcnKSxcbiAgICBpc09iamVjdExpa2UgPSByZXF1aXJlKCcuL2lzT2JqZWN0TGlrZScpO1xuXG4vKiogYE9iamVjdCN0b1N0cmluZ2AgcmVzdWx0IHJlZmVyZW5jZXMuICovXG52YXIgc3ltYm9sVGFnID0gJ1tvYmplY3QgU3ltYm9sXSc7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgY2xhc3NpZmllZCBhcyBhIGBTeW1ib2xgIHByaW1pdGl2ZSBvciBvYmplY3QuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSBzeW1ib2wsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc1N5bWJvbChTeW1ib2wuaXRlcmF0b3IpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNTeW1ib2woJ2FiYycpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNTeW1ib2wodmFsdWUpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PSAnc3ltYm9sJyB8fFxuICAgIChpc09iamVjdExpa2UodmFsdWUpICYmIGJhc2VHZXRUYWcodmFsdWUpID09IHN5bWJvbFRhZyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNTeW1ib2w7XG4iLCJ2YXIgcm9vdCA9IHJlcXVpcmUoJy4vX3Jvb3QnKTtcblxuLyoqXG4gKiBHZXRzIHRoZSB0aW1lc3RhbXAgb2YgdGhlIG51bWJlciBvZiBtaWxsaXNlY29uZHMgdGhhdCBoYXZlIGVsYXBzZWQgc2luY2VcbiAqIHRoZSBVbml4IGVwb2NoICgxIEphbnVhcnkgMTk3MCAwMDowMDowMCBVVEMpLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMi40LjBcbiAqIEBjYXRlZ29yeSBEYXRlXG4gKiBAcmV0dXJucyB7bnVtYmVyfSBSZXR1cm5zIHRoZSB0aW1lc3RhbXAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uZGVmZXIoZnVuY3Rpb24oc3RhbXApIHtcbiAqICAgY29uc29sZS5sb2coXy5ub3coKSAtIHN0YW1wKTtcbiAqIH0sIF8ubm93KCkpO1xuICogLy8gPT4gTG9ncyB0aGUgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyBpdCB0b29rIGZvciB0aGUgZGVmZXJyZWQgaW52b2NhdGlvbi5cbiAqL1xudmFyIG5vdyA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gcm9vdC5EYXRlLm5vdygpO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBub3c7XG4iLCJ2YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL2lzT2JqZWN0JyksXG4gICAgaXNTeW1ib2wgPSByZXF1aXJlKCcuL2lzU3ltYm9sJyk7XG5cbi8qKiBVc2VkIGFzIHJlZmVyZW5jZXMgZm9yIHZhcmlvdXMgYE51bWJlcmAgY29uc3RhbnRzLiAqL1xudmFyIE5BTiA9IDAgLyAwO1xuXG4vKiogVXNlZCB0byBtYXRjaCBsZWFkaW5nIGFuZCB0cmFpbGluZyB3aGl0ZXNwYWNlLiAqL1xudmFyIHJlVHJpbSA9IC9eXFxzK3xcXHMrJC9nO1xuXG4vKiogVXNlZCB0byBkZXRlY3QgYmFkIHNpZ25lZCBoZXhhZGVjaW1hbCBzdHJpbmcgdmFsdWVzLiAqL1xudmFyIHJlSXNCYWRIZXggPSAvXlstK10weFswLTlhLWZdKyQvaTtcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IGJpbmFyeSBzdHJpbmcgdmFsdWVzLiAqL1xudmFyIHJlSXNCaW5hcnkgPSAvXjBiWzAxXSskL2k7XG5cbi8qKiBVc2VkIHRvIGRldGVjdCBvY3RhbCBzdHJpbmcgdmFsdWVzLiAqL1xudmFyIHJlSXNPY3RhbCA9IC9eMG9bMC03XSskL2k7XG5cbi8qKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyB3aXRob3V0IGEgZGVwZW5kZW5jeSBvbiBgcm9vdGAuICovXG52YXIgZnJlZVBhcnNlSW50ID0gcGFyc2VJbnQ7XG5cbi8qKlxuICogQ29udmVydHMgYHZhbHVlYCB0byBhIG51bWJlci5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gcHJvY2Vzcy5cbiAqIEByZXR1cm5zIHtudW1iZXJ9IFJldHVybnMgdGhlIG51bWJlci5cbiAqIEBleGFtcGxlXG4gKlxuICogXy50b051bWJlcigzLjIpO1xuICogLy8gPT4gMy4yXG4gKlxuICogXy50b051bWJlcihOdW1iZXIuTUlOX1ZBTFVFKTtcbiAqIC8vID0+IDVlLTMyNFxuICpcbiAqIF8udG9OdW1iZXIoSW5maW5pdHkpO1xuICogLy8gPT4gSW5maW5pdHlcbiAqXG4gKiBfLnRvTnVtYmVyKCczLjInKTtcbiAqIC8vID0+IDMuMlxuICovXG5mdW5jdGlvbiB0b051bWJlcih2YWx1ZSkge1xuICBpZiAodHlwZW9mIHZhbHVlID09ICdudW1iZXInKSB7XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG4gIGlmIChpc1N5bWJvbCh2YWx1ZSkpIHtcbiAgICByZXR1cm4gTkFOO1xuICB9XG4gIGlmIChpc09iamVjdCh2YWx1ZSkpIHtcbiAgICB2YXIgb3RoZXIgPSB0eXBlb2YgdmFsdWUudmFsdWVPZiA9PSAnZnVuY3Rpb24nID8gdmFsdWUudmFsdWVPZigpIDogdmFsdWU7XG4gICAgdmFsdWUgPSBpc09iamVjdChvdGhlcikgPyAob3RoZXIgKyAnJykgOiBvdGhlcjtcbiAgfVxuICBpZiAodHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIHZhbHVlID09PSAwID8gdmFsdWUgOiArdmFsdWU7XG4gIH1cbiAgdmFsdWUgPSB2YWx1ZS5yZXBsYWNlKHJlVHJpbSwgJycpO1xuICB2YXIgaXNCaW5hcnkgPSByZUlzQmluYXJ5LnRlc3QodmFsdWUpO1xuICByZXR1cm4gKGlzQmluYXJ5IHx8IHJlSXNPY3RhbC50ZXN0KHZhbHVlKSlcbiAgICA/IGZyZWVQYXJzZUludCh2YWx1ZS5zbGljZSgyKSwgaXNCaW5hcnkgPyAyIDogOClcbiAgICA6IChyZUlzQmFkSGV4LnRlc3QodmFsdWUpID8gTkFOIDogK3ZhbHVlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB0b051bWJlcjtcbiIsImNvbnN0IEZvbnRGYWNlT2JzZXJ2ZXIgPSByZXF1aXJlKCdmb250ZmFjZW9ic2VydmVyJyk7XHJcblxyXG5mdW5jdGlvbiBpbml0Rm9udE9ic2VydmVycygpIHtcclxuICBjb25zdCBVYnVudHUgPSBuZXcgRm9udEZhY2VPYnNlcnZlcignVWJ1bnR1Jyk7XHJcbiAgY29uc3QgVWJ1bnR1Qm9sZCA9IG5ldyBGb250RmFjZU9ic2VydmVyKCdVYnVudHUnLCB7XHJcbiAgICB3ZWlnaHQ6IDUwMFxyXG4gIH0pO1xyXG4gIGNvbnN0IFVidW50dUl0YWxpYyA9IG5ldyBGb250RmFjZU9ic2VydmVyKCdVYnVudHUnLCB7XHJcbiAgICBzdHlsZTogJ2l0YWxpYydcclxuICB9KTtcclxuICBjb25zdCBVYnVudHVNb25vID0gbmV3IEZvbnRGYWNlT2JzZXJ2ZXIoJ1VidW50dSBNb25vJyk7XHJcblxyXG4gIGNvbnN0IHRocmVzaG9sZCA9IDE0MDA7XHJcbiAgUHJvbWlzZS5hbGwoW1xyXG4gICAgVWJ1bnR1LmxvYWQobnVsbCwgdGhyZXNob2xkKSxcclxuICAgIFVidW50dUJvbGQubG9hZChudWxsLCB0aHJlc2hvbGQpLFxyXG4gICAgVWJ1bnR1SXRhbGljLmxvYWQobnVsbCwgdGhyZXNob2xkKSxcclxuICAgIFVidW50dU1vbm8ubG9hZChudWxsLCB0aHJlc2hvbGQpXHJcbiAgXSkudGhlbigoKSA9PiB7IGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZCgnZm9udHMtbG9hZGVkJyk7IH0pXHJcbiAgICAuY2F0Y2goKCkgPT4geyBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoJ2ZvbnRzLWZhaWxlZCcpOyB9KVxyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IGluaXRGb250T2JzZXJ2ZXJzOyIsIihmdW5jdGlvbihpLHMsbyxnLHIsYSxtKXtpWydHb29nbGVBbmFseXRpY3NPYmplY3QnXT1yO2lbcl09aVtyXXx8ZnVuY3Rpb24oKXtcclxuKGlbcl0ucT1pW3JdLnF8fFtdKS5wdXNoKGFyZ3VtZW50cyl9LGlbcl0ubD0xKm5ldyBEYXRlKCk7YT1zLmNyZWF0ZUVsZW1lbnQobyksXHJcbm09cy5nZXRFbGVtZW50c0J5VGFnTmFtZShvKVswXTthLmFzeW5jPTE7YS5zcmM9ZzttLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGEsbSlcclxufSkod2luZG93LGRvY3VtZW50LCdzY3JpcHQnLCdodHRwczovL3d3dy5nb29nbGUtYW5hbHl0aWNzLmNvbS9hbmFseXRpY3MuanMnLCdnYScpO1xyXG5cclxuZ2EoJ2NyZWF0ZScsICdVQS05NjM3OTQxNS0yJywgJ2F1dG8nKTtcclxuZ2EoJ3NlbmQnLCAncGFnZXZpZXcnKTtcclxuIiwicmVxdWlyZSgnLi9nYScpO1xuY29uc3QgaW5pdEZvbnRPYnNlcnZlcnMgPSByZXF1aXJlKCcuL2ZvbnRPYnNlcnZlcnMnKTtcbmNvbnN0IGluaXRNb2RhbFN5c3RlbSA9IHJlcXVpcmUoJy4vbW9kYWwnKTtcbmNvbnN0IGluaXRTbW9vdGhTY3JvbGwgPSByZXF1aXJlKCcuL3Ntb290aFNjcm9sbCcpO1xuXG5pbml0Rm9udE9ic2VydmVycygpO1xuaW5pdE1vZGFsU3lzdGVtKCk7XG5pbml0U21vb3RoU2Nyb2xsKCk7XG5cbi8vIEJpcnRoZGF5IGNsaWNrIGVhc3RlciBlZ2dcbmNvbnN0IGlubGluZUNvZGVCaXJ0aGRheSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbmxpbmUtY29kZS1iaXJ0aGRheScpO1xuaW5saW5lQ29kZUJpcnRoZGF5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlQmlydGhkYXlDbGljayk7XG5cbmZ1bmN0aW9uIGhhbmRsZUJpcnRoZGF5Q2xpY2soKSB7XG4gIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gIGNvbnN0IHRvZGF5WWVhciA9IG5ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKTtcbiAgY29uc3QgYmFieUJvaUJpcnRoZGF5ID0gbmV3IERhdGUoMjAxNiwgOSwgMjApLmdldEZ1bGxZZWFyKCk7XG4gIGV2ZW50LnRhcmdldC50ZXh0Q29udGVudCA9IGAke3RvZGF5WWVhciAtIGJhYnlCb2lCaXJ0aGRheX0geWVhcnNgO1xuICBldmVudC50YXJnZXQuY2xhc3NMaXN0LnJlbW92ZSgnaW5saW5lLWNvZGUtLWludGVyYWN0aXZlJyk7XG4gIGlubGluZUNvZGVCaXJ0aGRheS5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZUJpcnRoZGF5Q2xpY2spO1xufVxuIiwiZnVuY3Rpb24gaW5pdE1vZGFsKCkge1xyXG4gIGNvbnN0IG1vZGFsT3ZlcmxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbCcpO1xyXG4gIGNvbnN0IG1vZGFsV3JhcHBlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbF9fd3JhcHBlcicpO1xyXG4gIGNvbnN0IG1vZGFsQ2xvc2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWxfX2Nsb3NlJyk7XHJcbiAgY29uc3QgbW9kYWxDb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsX19jb250ZW50Jyk7XHJcbiAgY29uc3QgbW9kYWxMb2FkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWxfX2xvYWRlcicpO1xyXG5cclxuICBjb25zdCBtYWluTmF2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4tbmF2Jyk7XHJcbiAgY29uc3Qgc2Nyb2xsVG9wID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNjcm9sbC10b3AnKTtcclxuXHJcbiAgY29uc3QgaW5mb0J1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudGFnLS1pbmZvJyk7XHJcblxyXG4gIGNvbnN0IHByb2plY3RzRm9sZGVyID0gJy4vcHJvamVjdHMvJztcclxuICBjb25zdCBlcnJvck1lc3NhZ2UgPSAoZXJyKSA9PiBgXHJcbiAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyIGZhZGUtaW5cIj5cclxuICAgICAgPGgxPldob29wcyE8L2gxPlxyXG4gICAgICA8aDI+RXJyb3IgJHtlcnIuc3RhdHVzIHx8ICcnfTogJHtlcnIuc3RhdHVzVGV4dCB8fCAnUGxlYXNlIGNoZWNrIHlvdXIgaW50ZXJuZXQgY29ubmVjdGlvbid9PC9oMj5cclxuICAgICAgPHA+XHJcbiAgICAgICAgSXQgaGFwcGVucyEgUGxlYXNlIHRyeSBhZ2FpbiBsYXRlci4gSSdkIGJlIHRoYW5rZnVsIGlmIHlvdSBjYW4gbGV0IG1lIGtub3cgdGhpcyBoYXBwZW5lZC5cclxuICAgICAgPC9wPlxyXG4gICAgPC9kaXY+XHJcbiAgYDtcclxuXHJcbiAgZnVuY3Rpb24gbW9kYWxPbihlKSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBtb2RhbExvYWRlci5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcclxuICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZCgnbW9kYWwtb24nKTtcclxuICAgIG1haW5OYXYuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XHJcbiAgICBzY3JvbGxUb3AuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XHJcbiAgICBtb2RhbFdyYXBwZXIuc2Nyb2xsVG9wID0gMDtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIG1vZGFsT2ZmKGUpIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoJ21vZGFsLW9uJyk7XHJcbiAgICBtYWluTmF2LmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xyXG4gICAgc2Nyb2xsVG9wLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xyXG4gICAgbW9kYWxDb250ZW50LmlubmVySFRNTCA9ICcnO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gZmV0Y2hQcm9qZWN0KGUpIHtcclxuICAgIGNvbnN0IHByb2plY3ROYW1lID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQucHJvamVjdDtcclxuICAgIGNvbnN0IHByb2plY3QgPSBmZXRjaChgJHtwcm9qZWN0c0ZvbGRlcn0ke3Byb2plY3ROYW1lfS5odG1sYCk7XHJcblxyXG4gICAgbW9kYWxPbihlKTtcclxuXHJcbiAgICBwcm9qZWN0LnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2Uub2sgPyByZXNwb25zZSA6IFByb21pc2UucmVqZWN0KHJlc3BvbnNlKSlcclxuICAgICAgLnRoZW4oZGF0YSA9PiBkYXRhLnRleHQoKSlcclxuICAgICAgLnRoZW4oaHRtbCA9PiB7IG1vZGFsQ29udGVudC5pbm5lckhUTUwgPSBodG1sOyB9KVxyXG4gICAgICAudGhlbihwcmVwYXJlTW9kYWxNZWRpYSlcclxuICAgICAgLmNhdGNoKGVyciA9PiB7IG1vZGFsQ29udGVudC5pbm5lckhUTUwgPSBlcnJvck1lc3NhZ2UoZXJyKTsgY29uc29sZS5lcnJvcihlcnIpOyB9KVxyXG4gICAgICAudGhlbigoKSA9PiB7IG1vZGFsTG9hZGVyLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpIH0pXHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBwcmVwYXJlTW9kYWxNZWRpYSgpIHtcclxuICAgIGNvbnN0IG1lZGlhID0gbW9kYWxDb250ZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbF9fbWVkaWEnKTtcclxuICAgIGNvbnN0IG1lZGlhTGluayA9IG1vZGFsQ29udGVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWxfX21lZGlhLWxpbmsnKTtcclxuICAgIGlmICghbWVkaWEpIHJldHVybjtcclxuXHJcbiAgICBjb25zdCBsb2FkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGxvYWRlci5jbGFzc05hbWUgPSAnbW9kYWxfX2xvYWRlciBtb2RhbF9fbG9hZGVyLS1pbWFnZSBmYWRlLWluJztcclxuICAgIGxvYWRlci5pbm5lckhUTUwgPSBgXHJcbiAgICAgIDxzcGFuIGNsYXNzPVwiaWNvbiBpY29uLWltYWdlXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9zcGFuPlxyXG4gICAgPGRpdiBjbGFzcz1cInNyLW9ubHlcIj5Mb2FkaW5nIGNvbnRlbnQuLi48L2Rpdj5gO1xyXG5cclxuICAgIG1lZGlhTGluay5wYXJlbnROb2RlLmluc2VydEJlZm9yZShsb2FkZXIsIG1lZGlhTGluayk7XHJcbiAgICBsZXQgbWVkaWFFdmVudCA9IG1lZGlhLm5vZGVOYW1lID09PSAnVklERU8nID8gJ29uY2FucGxheScgOiAnb25sb2FkJztcclxuICAgIG1lZGlhW21lZGlhRXZlbnRdID0gKCkgPT4ge1xyXG4gICAgICBtZWRpYUxpbmsuY2xhc3NMaXN0LmFkZCgnZmFkZS1pbi1yaWdodEBsYW5kc2NhcGUnKTtcclxuICAgICAgbWVkaWFMaW5rLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xyXG4gICAgICBsb2FkZXIuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBpbmZvQnV0dG9ucy5mb3JFYWNoKGJ0biA9PiBidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmZXRjaFByb2plY3QpKTtcclxuICBtb2RhbENsb3NlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgbW9kYWxPZmYsIGZhbHNlKTtcclxuXHJcbiAgbW9kYWxPdmVybGF5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICBpZiAoZS50YXJnZXQgPT09IG1vZGFsT3ZlcmxheSkgeyBtb2RhbE9mZihlKTsgfVxyXG4gIH0pO1xyXG5cclxuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIChlKSA9PiB7XHJcbiAgICBpZiAoZS5rZXlDb2RlID09PSAyNykgeyBtb2RhbE9mZihlKTsgfVxyXG4gIH0pO1xyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IGluaXRNb2RhbDsiLCJyZXF1aXJlKCdnc2FwL1Njcm9sbFRvUGx1Z2luJyk7XHJcbmNvbnN0IFR3ZWVuTGl0ZSA9IHJlcXVpcmUoJ2dzYXAvVHdlZW5MaXRlJyk7XHJcbmNvbnN0IGRlYm91bmNlID0gcmVxdWlyZSgnbG9kYXNoL2RlYm91bmNlJyk7XHJcblxyXG4vLyBNYWluIG5hdlxyXG5jb25zdCBtYWluTmF2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haW4tbmF2Jyk7XHJcbmxldCBtYWluTmF2T2Zmc2V0ID0gbWFpbk5hdi5vZmZzZXRUb3A7XHJcblxyXG5mdW5jdGlvbiBpbml0U21vb3RoU2Nyb2xsKCkge1xyXG4gIGNvbnN0IERVUkFUSU9OID0gMS4xO1xyXG4gIGNvbnN0IGxpbmtzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnYVtocmVmXj1cIiNcIl0nKTtcclxuXHJcbiAgbGlua3MuZm9yRWFjaCgobGluaykgPT4ge1xyXG4gICAgbGluay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgIGNvbnN0IGhhc2ggPSBsaW5rLmdldEF0dHJpYnV0ZSgnaHJlZicpO1xyXG4gICAgICBpZiAoaGFzaCA9PT0gJyMnKSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBjb25zdCB0YXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGhhc2gpO1xyXG4gICAgICBpZiAoIXRhcmdldCkge1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgY29uc3QgbWFpbk5hdkhlaWdodCA9IG1haW5OYXYuY2xpZW50SGVpZ2h0O1xyXG4gICAgICBjb25zdCBtYWluTmF2T2Zmc2V0ID0gbWFpbk5hdi5vZmZzZXRUb3A7XHJcbiAgICAgIGNvbnN0IHRhcmdldE9mZnNldCA9IHRhcmdldC5vZmZzZXRUb3AgPiBtYWluTmF2T2Zmc2V0XHJcbiAgICAgICAgPyB0YXJnZXQub2Zmc2V0VG9wIC0gbWFpbk5hdkhlaWdodFxyXG4gICAgICAgIDogdGFyZ2V0Lm9mZnNldFRvcDtcclxuXHJcbiAgICAgIFR3ZWVuTGl0ZS50byh3aW5kb3csIERVUkFUSU9OLCB7XHJcbiAgICAgICAgc2Nyb2xsVG86IHRhcmdldE9mZnNldCxcclxuICAgICAgICBlYXNlOiAnUG93ZXIyLmVhc2VJbk91dCdcclxuICAgICAgfSk7XHJcblxyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH0pO1xyXG4gIH0pO1xyXG59XHJcblxyXG4vLyBDYWxjdWxhdGUgc3BhY2UgZm9yIGZvb3RlclxyXG5mdW5jdGlvbiBzcGFjZUZvckZvb3RlcigpIHtcclxuICBjb25zdCBmb290ZXJIZWlnaHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZm9vdGVyJykuY2xpZW50SGVpZ2h0XHJcbiAgZG9jdW1lbnQuYm9keS5zdHlsZS5tYXJnaW5Cb3R0b20gPSBgJHtmb290ZXJIZWlnaHR9cHhgO1xyXG59XHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgc3BhY2VGb3JGb290ZXIpO1xyXG5cclxuLy8gQXR0YWNoaW5nIG1haW4gbmF2XHJcbmZ1bmN0aW9uIHNjcm9sbFBhc3ROYXYoKSB7XHJcbiAgY29uc3QgaXNQYXN0TmF2ID0gd2luZG93LnNjcm9sbFkgPj0gbWFpbk5hdk9mZnNldDtcclxuICBjb25zdCBib2R5SGFzQ2xhc3MgPSBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5jb250YWlucygnc2Nyb2xsLXBhc3QtbmF2Jyk7XHJcbiAgaWYgKGlzUGFzdE5hdiAmJiAhYm9keUhhc0NsYXNzKSB7XHJcbiAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoJ3Njcm9sbC1wYXN0LW5hdicpO1xyXG4gICAgZG9jdW1lbnQuYm9keS5zdHlsZS5wYWRkaW5nVG9wID0gYCR7bWFpbk5hdi5vZmZzZXRIZWlnaHR9cHhgO1xyXG4gIH0gZWxzZSBpZiAoIWlzUGFzdE5hdiAmJiBib2R5SGFzQ2xhc3MpIHtcclxuICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnc2Nyb2xsLXBhc3QtbmF2Jyk7XHJcbiAgICBkb2N1bWVudC5ib2R5LnN0eWxlLnBhZGRpbmdUb3AgPSAwO1xyXG4gIH1cclxufVxyXG5zY3JvbGxQYXN0TmF2KCk7XHJcblxyXG4vLyBTY3JvbGwgaGFuZGxlclxyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBzY3JvbGxQYXN0TmF2KTtcclxuXHJcbi8vIFJlc2l6ZSBoYW5kbGVyXHJcbmNvbnN0IHJlc2l6ZUhhbmRsZXIgPSBkZWJvdW5jZSgoKSA9PiB7XHJcbiAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKCdzY3JvbGwtcGFzdC1uYXYnKTtcclxuICBkb2N1bWVudC5ib2R5LnN0eWxlLnBhZGRpbmdUb3AgPSAwO1xyXG4gIG1haW5OYXZPZmZzZXQgPSBtYWluTmF2Lm9mZnNldFRvcDtcclxuICBzY3JvbGxQYXN0TmF2KCk7XHJcbiAgc3BhY2VGb3JGb290ZXIoKTtcclxufSwgMTAwKTtcclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHJlc2l6ZUhhbmRsZXIpO1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBpbml0U21vb3RoU2Nyb2xsOyJdfQ==
