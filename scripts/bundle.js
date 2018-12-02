(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
/* Font Face Observer v2.1.0 - © Bram Stein. License: BSD-3-Clause */(function(){function l(a,b){document.addEventListener?a.addEventListener("scroll",b,!1):a.attachEvent("scroll",b)}function m(a){document.body?a():document.addEventListener?document.addEventListener("DOMContentLoaded",function c(){document.removeEventListener("DOMContentLoaded",c);a()}):document.attachEvent("onreadystatechange",function k(){if("interactive"==document.readyState||"complete"==document.readyState)document.detachEvent("onreadystatechange",k),a()})};function t(a){this.a=document.createElement("div");this.a.setAttribute("aria-hidden","true");this.a.appendChild(document.createTextNode(a));this.b=document.createElement("span");this.c=document.createElement("span");this.h=document.createElement("span");this.f=document.createElement("span");this.g=-1;this.b.style.cssText="max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;";this.c.style.cssText="max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;";
this.f.style.cssText="max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;";this.h.style.cssText="display:inline-block;width:200%;height:200%;font-size:16px;max-width:none;";this.b.appendChild(this.h);this.c.appendChild(this.f);this.a.appendChild(this.b);this.a.appendChild(this.c)}
function u(a,b){a.a.style.cssText="max-width:none;min-width:20px;min-height:20px;display:inline-block;overflow:hidden;position:absolute;width:auto;margin:0;padding:0;top:-999px;white-space:nowrap;font-synthesis:none;font:"+b+";"}function z(a){var b=a.a.offsetWidth,c=b+100;a.f.style.width=c+"px";a.c.scrollLeft=c;a.b.scrollLeft=a.b.scrollWidth+100;return a.g!==b?(a.g=b,!0):!1}function A(a,b){function c(){var a=k;z(a)&&a.a.parentNode&&b(a.g)}var k=a;l(a.b,c);l(a.c,c);z(a)};function B(a,b){var c=b||{};this.family=a;this.style=c.style||"normal";this.weight=c.weight||"normal";this.stretch=c.stretch||"normal"}var C=null,D=null,E=null,F=null;function G(){if(null===D)if(J()&&/Apple/.test(window.navigator.vendor)){var a=/AppleWebKit\/([0-9]+)(?:\.([0-9]+))(?:\.([0-9]+))/.exec(window.navigator.userAgent);D=!!a&&603>parseInt(a[1],10)}else D=!1;return D}function J(){null===F&&(F=!!document.fonts);return F}
function K(){if(null===E){var a=document.createElement("div");try{a.style.font="condensed 100px sans-serif"}catch(b){}E=""!==a.style.font}return E}function L(a,b){return[a.style,a.weight,K()?a.stretch:"","100px",b].join(" ")}
B.prototype.load=function(a,b){var c=this,k=a||"BESbswy",r=0,n=b||3E3,H=(new Date).getTime();return new Promise(function(a,b){if(J()&&!G()){var M=new Promise(function(a,b){function e(){(new Date).getTime()-H>=n?b(Error(""+n+"ms timeout exceeded")):document.fonts.load(L(c,'"'+c.family+'"'),k).then(function(c){1<=c.length?a():setTimeout(e,25)},b)}e()}),N=new Promise(function(a,c){r=setTimeout(function(){c(Error(""+n+"ms timeout exceeded"))},n)});Promise.race([N,M]).then(function(){clearTimeout(r);a(c)},
b)}else m(function(){function v(){var b;if(b=-1!=f&&-1!=g||-1!=f&&-1!=h||-1!=g&&-1!=h)(b=f!=g&&f!=h&&g!=h)||(null===C&&(b=/AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent),C=!!b&&(536>parseInt(b[1],10)||536===parseInt(b[1],10)&&11>=parseInt(b[2],10))),b=C&&(f==w&&g==w&&h==w||f==x&&g==x&&h==x||f==y&&g==y&&h==y)),b=!b;b&&(d.parentNode&&d.parentNode.removeChild(d),clearTimeout(r),a(c))}function I(){if((new Date).getTime()-H>=n)d.parentNode&&d.parentNode.removeChild(d),b(Error(""+
n+"ms timeout exceeded"));else{var a=document.hidden;if(!0===a||void 0===a)f=e.a.offsetWidth,g=p.a.offsetWidth,h=q.a.offsetWidth,v();r=setTimeout(I,50)}}var e=new t(k),p=new t(k),q=new t(k),f=-1,g=-1,h=-1,w=-1,x=-1,y=-1,d=document.createElement("div");d.dir="ltr";u(e,L(c,"sans-serif"));u(p,L(c,"serif"));u(q,L(c,"monospace"));d.appendChild(e.a);d.appendChild(p.a);d.appendChild(q.a);document.body.appendChild(d);w=e.a.offsetWidth;x=p.a.offsetWidth;y=q.a.offsetWidth;I();A(e,function(a){f=a;v()});u(e,
L(c,'"'+c.family+'",sans-serif'));A(p,function(a){g=a;v()});u(p,L(c,'"'+c.family+'",serif'));A(q,function(a){h=a;v()});u(q,L(c,'"'+c.family+'",monospace'))})})};"object"===typeof module?module.exports=B:(window.FontFaceObserver=B,window.FontFaceObserver.prototype.load=B.prototype.load);}());

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJub2RlX21vZHVsZXMvZm9udGZhY2VvYnNlcnZlci9mb250ZmFjZW9ic2VydmVyLnN0YW5kYWxvbmUuanMiLCJub2RlX21vZHVsZXMvZ3NhcC9TY3JvbGxUb1BsdWdpbi5qcyIsIm5vZGVfbW9kdWxlcy9nc2FwL1R3ZWVuTGl0ZS5qcyIsIm5vZGVfbW9kdWxlcy9sb2Rhc2gvX1N5bWJvbC5qcyIsIm5vZGVfbW9kdWxlcy9sb2Rhc2gvX2Jhc2VHZXRUYWcuanMiLCJub2RlX21vZHVsZXMvbG9kYXNoL19mcmVlR2xvYmFsLmpzIiwibm9kZV9tb2R1bGVzL2xvZGFzaC9fZ2V0UmF3VGFnLmpzIiwibm9kZV9tb2R1bGVzL2xvZGFzaC9fb2JqZWN0VG9TdHJpbmcuanMiLCJub2RlX21vZHVsZXMvbG9kYXNoL19yb290LmpzIiwibm9kZV9tb2R1bGVzL2xvZGFzaC9kZWJvdW5jZS5qcyIsIm5vZGVfbW9kdWxlcy9sb2Rhc2gvaXNPYmplY3QuanMiLCJub2RlX21vZHVsZXMvbG9kYXNoL2lzT2JqZWN0TGlrZS5qcyIsIm5vZGVfbW9kdWxlcy9sb2Rhc2gvaXNTeW1ib2wuanMiLCJub2RlX21vZHVsZXMvbG9kYXNoL25vdy5qcyIsIm5vZGVfbW9kdWxlcy9sb2Rhc2gvdG9OdW1iZXIuanMiLCJzcmMvc2NyaXB0cy9mb250T2JzZXJ2ZXJzLmpzIiwic3JjL3NjcmlwdHMvZ2EuanMiLCJzcmMvc2NyaXB0cy9tYWluLmpzIiwic3JjL3NjcmlwdHMvbW9kYWwuanMiLCJzcmMvc2NyaXB0cy9zbW9vdGhTY3JvbGwuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQ1JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUNsTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUN4NURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQzVCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FDSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM5Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN0QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDVEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM5TEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMvQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzdCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDN0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN2QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUNsRUEsSUFBTSxtQkFBbUIsUUFBUSxrQkFBUixDQUF6Qjs7QUFFQSxTQUFTLGlCQUFULEdBQTZCO0FBQzNCLE1BQU0sU0FBUyxJQUFJLGdCQUFKLENBQXFCLFFBQXJCLENBQWY7QUFDQSxNQUFNLGFBQWEsSUFBSSxnQkFBSixDQUFxQixRQUFyQixFQUErQjtBQUNoRCxZQUFRO0FBRHdDLEdBQS9CLENBQW5CO0FBR0EsTUFBTSxlQUFlLElBQUksZ0JBQUosQ0FBcUIsUUFBckIsRUFBK0I7QUFDbEQsV0FBTztBQUQyQyxHQUEvQixDQUFyQjtBQUdBLE1BQU0sYUFBYSxJQUFJLGdCQUFKLENBQXFCLGFBQXJCLENBQW5COztBQUVBLE1BQU0sWUFBWSxJQUFsQjtBQUNBLFVBQVEsR0FBUixDQUFZLENBQ1YsT0FBTyxJQUFQLENBQVksSUFBWixFQUFrQixTQUFsQixDQURVLEVBRVYsV0FBVyxJQUFYLENBQWdCLElBQWhCLEVBQXNCLFNBQXRCLENBRlUsRUFHVixhQUFhLElBQWIsQ0FBa0IsSUFBbEIsRUFBd0IsU0FBeEIsQ0FIVSxFQUlWLFdBQVcsSUFBWCxDQUFnQixJQUFoQixFQUFzQixTQUF0QixDQUpVLENBQVosRUFLRyxJQUxILENBS1EsWUFBTTtBQUFFLGFBQVMsSUFBVCxDQUFjLFNBQWQsQ0FBd0IsR0FBeEIsQ0FBNEIsY0FBNUI7QUFBOEMsR0FMOUQsRUFNRyxLQU5ILENBTVMsWUFBTTtBQUFFLGFBQVMsSUFBVCxDQUFjLFNBQWQsQ0FBd0IsR0FBeEIsQ0FBNEIsY0FBNUI7QUFBOEMsR0FOL0Q7QUFPRDs7QUFFRCxPQUFPLE9BQVAsR0FBaUIsaUJBQWpCOzs7OztBQ3RCQSxDQUFDLFVBQVMsQ0FBVCxFQUFXLENBQVgsRUFBYSxDQUFiLEVBQWUsQ0FBZixFQUFpQixDQUFqQixFQUFtQixDQUFuQixFQUFxQixDQUFyQixFQUF1QjtBQUFDLElBQUUsdUJBQUYsSUFBMkIsQ0FBM0IsQ0FBNkIsRUFBRSxDQUFGLElBQUssRUFBRSxDQUFGLEtBQU0sWUFBVTtBQUMzRSxLQUFDLEVBQUUsQ0FBRixFQUFLLENBQUwsR0FBTyxFQUFFLENBQUYsRUFBSyxDQUFMLElBQVEsRUFBaEIsRUFBb0IsSUFBcEIsQ0FBeUIsU0FBekI7QUFBb0MsR0FEa0IsRUFDakIsRUFBRSxDQUFGLEVBQUssQ0FBTCxHQUFPLElBQUUsSUFBSSxJQUFKLEVBRFEsQ0FDRyxJQUFFLEVBQUUsYUFBRixDQUFnQixDQUFoQixDQUFGLEVBQ3pELElBQUUsRUFBRSxvQkFBRixDQUF1QixDQUF2QixFQUEwQixDQUExQixDQUR1RCxDQUMxQixFQUFFLEtBQUYsR0FBUSxDQUFSLENBQVUsRUFBRSxHQUFGLEdBQU0sQ0FBTixDQUFRLEVBQUUsVUFBRixDQUFhLFlBQWIsQ0FBMEIsQ0FBMUIsRUFBNEIsQ0FBNUI7QUFDaEQsQ0FIRCxFQUdHLE1BSEgsRUFHVSxRQUhWLEVBR21CLFFBSG5CLEVBRzRCLCtDQUg1QixFQUc0RSxJQUg1RTs7QUFLQSxHQUFHLFFBQUgsRUFBYSxlQUFiLEVBQThCLE1BQTlCO0FBQ0EsR0FBRyxNQUFILEVBQVcsVUFBWDs7Ozs7QUNOQSxRQUFRLE1BQVI7QUFDQSxJQUFNLG9CQUFvQixRQUFRLGlCQUFSLENBQTFCO0FBQ0EsSUFBTSxrQkFBa0IsUUFBUSxTQUFSLENBQXhCO0FBQ0EsSUFBTSxtQkFBbUIsUUFBUSxnQkFBUixDQUF6Qjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxJQUFNLHFCQUFxQixTQUFTLGNBQVQsQ0FBd0Isc0JBQXhCLENBQTNCO0FBQ0EsbUJBQW1CLGdCQUFuQixDQUFvQyxPQUFwQyxFQUE2QyxtQkFBN0M7O0FBRUEsU0FBUyxtQkFBVCxHQUErQjtBQUM3QixRQUFNLGNBQU47QUFDQSxNQUFNLFlBQVksSUFBSSxJQUFKLEdBQVcsV0FBWCxFQUFsQjtBQUNBLE1BQU0sa0JBQWtCLElBQUksSUFBSixDQUFTLElBQVQsRUFBZSxDQUFmLEVBQWtCLEVBQWxCLEVBQXNCLFdBQXRCLEVBQXhCO0FBQ0EsUUFBTSxNQUFOLENBQWEsV0FBYixHQUE4QixZQUFZLGVBQTFDO0FBQ0EsUUFBTSxNQUFOLENBQWEsU0FBYixDQUF1QixNQUF2QixDQUE4QiwwQkFBOUI7QUFDQSxxQkFBbUIsbUJBQW5CLENBQXVDLE9BQXZDLEVBQWdELG1CQUFoRDtBQUNEOzs7OztBQ3BCRCxTQUFTLFNBQVQsR0FBcUI7QUFDbkIsTUFBTSxlQUFlLFNBQVMsYUFBVCxDQUF1QixRQUF2QixDQUFyQjtBQUNBLE1BQU0sZUFBZSxTQUFTLGFBQVQsQ0FBdUIsaUJBQXZCLENBQXJCO0FBQ0EsTUFBTSxhQUFhLFNBQVMsYUFBVCxDQUF1QixlQUF2QixDQUFuQjtBQUNBLE1BQU0sZUFBZSxTQUFTLGFBQVQsQ0FBdUIsaUJBQXZCLENBQXJCO0FBQ0EsTUFBTSxjQUFjLFNBQVMsYUFBVCxDQUF1QixnQkFBdkIsQ0FBcEI7O0FBRUEsTUFBTSxVQUFVLFNBQVMsYUFBVCxDQUF1QixXQUF2QixDQUFoQjtBQUNBLE1BQU0sWUFBWSxTQUFTLGFBQVQsQ0FBdUIsYUFBdkIsQ0FBbEI7O0FBRUEsTUFBTSxjQUFjLFNBQVMsZ0JBQVQsQ0FBMEIsWUFBMUIsQ0FBcEI7O0FBRUEsTUFBTSxpQkFBaUIsYUFBdkI7QUFDQSxNQUFNLGVBQWUsU0FBZixZQUFlLENBQUMsR0FBRDtBQUFBLGdHQUdMLElBQUksTUFBSixJQUFjLEVBSFQsWUFHZ0IsSUFBSSxVQUFKLElBQWtCLHVDQUhsQztBQUFBLEdBQXJCOztBQVVBLFdBQVMsT0FBVCxDQUFpQixDQUFqQixFQUFvQjtBQUNsQixNQUFFLGNBQUY7QUFDQSxnQkFBWSxTQUFaLENBQXNCLE1BQXRCLENBQTZCLFFBQTdCO0FBQ0EsYUFBUyxJQUFULENBQWMsU0FBZCxDQUF3QixHQUF4QixDQUE0QixVQUE1QjtBQUNBLFlBQVEsU0FBUixDQUFrQixHQUFsQixDQUFzQixRQUF0QjtBQUNBLGNBQVUsU0FBVixDQUFvQixHQUFwQixDQUF3QixRQUF4QjtBQUNBLGlCQUFhLFNBQWIsR0FBeUIsQ0FBekI7QUFDRDs7QUFFRCxXQUFTLFFBQVQsQ0FBa0IsQ0FBbEIsRUFBcUI7QUFDbkIsTUFBRSxjQUFGO0FBQ0EsTUFBRSxlQUFGO0FBQ0EsYUFBUyxJQUFULENBQWMsU0FBZCxDQUF3QixNQUF4QixDQUErQixVQUEvQjtBQUNBLFlBQVEsU0FBUixDQUFrQixNQUFsQixDQUF5QixRQUF6QjtBQUNBLGNBQVUsU0FBVixDQUFvQixNQUFwQixDQUEyQixRQUEzQjtBQUNBLGlCQUFhLFNBQWIsR0FBeUIsRUFBekI7QUFDRDs7QUFFRCxXQUFTLFlBQVQsQ0FBc0IsQ0FBdEIsRUFBeUI7QUFDdkIsUUFBTSxjQUFjLEVBQUUsYUFBRixDQUFnQixPQUFoQixDQUF3QixPQUE1QztBQUNBLFFBQU0sVUFBVSxXQUFTLGNBQVQsR0FBMEIsV0FBMUIsV0FBaEI7O0FBRUEsWUFBUSxDQUFSOztBQUVBLFlBQVEsSUFBUixDQUFhO0FBQUEsYUFBWSxTQUFTLEVBQVQsR0FBYyxRQUFkLEdBQXlCLFFBQVEsTUFBUixDQUFlLFFBQWYsQ0FBckM7QUFBQSxLQUFiLEVBQ0csSUFESCxDQUNRO0FBQUEsYUFBUSxLQUFLLElBQUwsRUFBUjtBQUFBLEtBRFIsRUFFRyxJQUZILENBRVEsZ0JBQVE7QUFBRSxtQkFBYSxTQUFiLEdBQXlCLElBQXpCO0FBQWdDLEtBRmxELEVBR0csSUFISCxDQUdRLGlCQUhSLEVBSUcsS0FKSCxDQUlTLGVBQU87QUFBRSxtQkFBYSxTQUFiLEdBQXlCLGFBQWEsR0FBYixDQUF6QixDQUE0QyxRQUFRLEtBQVIsQ0FBYyxHQUFkO0FBQXFCLEtBSm5GLEVBS0csSUFMSCxDQUtRLFlBQU07QUFBRSxrQkFBWSxTQUFaLENBQXNCLEdBQXRCLENBQTBCLFFBQTFCO0FBQXFDLEtBTHJEO0FBTUQ7O0FBRUQsV0FBUyxpQkFBVCxHQUE2QjtBQUMzQixRQUFNLFFBQVEsYUFBYSxhQUFiLENBQTJCLGVBQTNCLENBQWQ7QUFDQSxRQUFNLFlBQVksYUFBYSxhQUFiLENBQTJCLG9CQUEzQixDQUFsQjtBQUNBLFFBQUksQ0FBQyxLQUFMLEVBQVk7O0FBRVosUUFBTSxTQUFTLFNBQVMsYUFBVCxDQUF1QixLQUF2QixDQUFmO0FBQ0EsV0FBTyxTQUFQLEdBQW1CLDRDQUFuQjtBQUNBLFdBQU8sU0FBUDs7QUFJQSxjQUFVLFVBQVYsQ0FBcUIsWUFBckIsQ0FBa0MsTUFBbEMsRUFBMEMsU0FBMUM7QUFDQSxRQUFJLGFBQWEsTUFBTSxRQUFOLEtBQW1CLE9BQW5CLEdBQTZCLFdBQTdCLEdBQTJDLFFBQTVEO0FBQ0EsVUFBTSxVQUFOLElBQW9CLFlBQU07QUFDeEIsZ0JBQVUsU0FBVixDQUFvQixHQUFwQixDQUF3Qix5QkFBeEI7QUFDQSxnQkFBVSxTQUFWLENBQW9CLE1BQXBCLENBQTJCLFFBQTNCO0FBQ0EsYUFBTyxTQUFQLENBQWlCLEdBQWpCLENBQXFCLFFBQXJCO0FBQ0QsS0FKRDtBQUtEOztBQUVELGNBQVksT0FBWixDQUFvQjtBQUFBLFdBQU8sSUFBSSxnQkFBSixDQUFxQixPQUFyQixFQUE4QixZQUE5QixDQUFQO0FBQUEsR0FBcEI7QUFDQSxhQUFXLGdCQUFYLENBQTRCLE9BQTVCLEVBQXFDLFFBQXJDLEVBQStDLEtBQS9DOztBQUVBLGVBQWEsZ0JBQWIsQ0FBOEIsT0FBOUIsRUFBdUMsVUFBQyxDQUFELEVBQU87QUFDNUMsTUFBRSxlQUFGO0FBQ0EsUUFBSSxFQUFFLE1BQUYsS0FBYSxZQUFqQixFQUErQjtBQUFFLGVBQVMsQ0FBVDtBQUFjO0FBQ2hELEdBSEQ7O0FBS0EsU0FBTyxnQkFBUCxDQUF3QixTQUF4QixFQUFtQyxVQUFDLENBQUQsRUFBTztBQUN4QyxRQUFJLEVBQUUsT0FBRixLQUFjLEVBQWxCLEVBQXNCO0FBQUUsZUFBUyxDQUFUO0FBQWM7QUFDdkMsR0FGRDtBQUdEOztBQUVELE9BQU8sT0FBUCxHQUFpQixTQUFqQjs7Ozs7QUN4RkEsUUFBUSxxQkFBUjtBQUNBLElBQU0sWUFBWSxRQUFRLGdCQUFSLENBQWxCO0FBQ0EsSUFBTSxXQUFXLFFBQVEsaUJBQVIsQ0FBakI7O0FBRUE7QUFDQSxJQUFNLFVBQVUsU0FBUyxjQUFULENBQXdCLFVBQXhCLENBQWhCO0FBQ0EsSUFBSSxnQkFBZ0IsUUFBUSxTQUE1Qjs7QUFFQSxTQUFTLGdCQUFULEdBQTRCO0FBQzFCLE1BQU0sV0FBVyxHQUFqQjtBQUNBLE1BQU0sUUFBUSxTQUFTLGdCQUFULENBQTBCLGNBQTFCLENBQWQ7O0FBRUEsUUFBTSxPQUFOLENBQWMsVUFBQyxJQUFELEVBQVU7QUFDdEIsU0FBSyxnQkFBTCxDQUFzQixPQUF0QixFQUErQixVQUFDLENBQUQsRUFBTztBQUNwQyxRQUFFLGNBQUY7O0FBRUEsVUFBTSxPQUFPLEtBQUssWUFBTCxDQUFrQixNQUFsQixDQUFiO0FBQ0EsVUFBSSxTQUFTLEdBQWIsRUFBa0I7QUFDaEIsZUFBTyxLQUFQO0FBQ0Q7O0FBRUQsVUFBTSxTQUFTLFNBQVMsYUFBVCxDQUF1QixJQUF2QixDQUFmO0FBQ0EsVUFBSSxDQUFDLE1BQUwsRUFBYTtBQUNYLGVBQU8sS0FBUDtBQUNEOztBQUVELFVBQU0sZ0JBQWdCLFFBQVEsWUFBOUI7QUFDQSxVQUFNLGdCQUFnQixRQUFRLFNBQTlCO0FBQ0EsVUFBTSxlQUFlLE9BQU8sU0FBUCxHQUFtQixhQUFuQixHQUNqQixPQUFPLFNBQVAsR0FBbUIsYUFERixHQUVqQixPQUFPLFNBRlg7O0FBSUEsZ0JBQVUsRUFBVixDQUFhLE1BQWIsRUFBcUIsUUFBckIsRUFBK0I7QUFDN0Isa0JBQVUsWUFEbUI7QUFFN0IsY0FBTTtBQUZ1QixPQUEvQjs7QUFLQSxhQUFPLElBQVA7QUFDRCxLQXpCRDtBQTBCRCxHQTNCRDtBQTRCRDs7QUFFRDtBQUNBLFNBQVMsY0FBVCxHQUEwQjtBQUN4QixNQUFNLGVBQWUsU0FBUyxjQUFULENBQXdCLFFBQXhCLEVBQWtDLFlBQXZEO0FBQ0EsV0FBUyxJQUFULENBQWMsS0FBZCxDQUFvQixZQUFwQixHQUFzQyxZQUF0QztBQUNEO0FBQ0QsT0FBTyxnQkFBUCxDQUF3QixNQUF4QixFQUFnQyxjQUFoQzs7QUFFQTtBQUNBLFNBQVMsYUFBVCxHQUF5QjtBQUN2QixNQUFNLFlBQVksT0FBTyxPQUFQLElBQWtCLGFBQXBDO0FBQ0EsTUFBTSxlQUFlLFNBQVMsSUFBVCxDQUFjLFNBQWQsQ0FBd0IsUUFBeEIsQ0FBaUMsaUJBQWpDLENBQXJCO0FBQ0EsTUFBSSxhQUFhLENBQUMsWUFBbEIsRUFBZ0M7QUFDOUIsYUFBUyxJQUFULENBQWMsU0FBZCxDQUF3QixHQUF4QixDQUE0QixpQkFBNUI7QUFDQSxhQUFTLElBQVQsQ0FBYyxLQUFkLENBQW9CLFVBQXBCLEdBQW9DLFFBQVEsWUFBNUM7QUFDRCxHQUhELE1BR08sSUFBSSxDQUFDLFNBQUQsSUFBYyxZQUFsQixFQUFnQztBQUNyQyxhQUFTLElBQVQsQ0FBYyxTQUFkLENBQXdCLE1BQXhCLENBQStCLGlCQUEvQjtBQUNBLGFBQVMsSUFBVCxDQUFjLEtBQWQsQ0FBb0IsVUFBcEIsR0FBaUMsQ0FBakM7QUFDRDtBQUNGO0FBQ0Q7O0FBRUE7QUFDQSxTQUFTLGdCQUFULENBQTBCLFFBQTFCLEVBQW9DLGFBQXBDOztBQUVBO0FBQ0EsSUFBTSxnQkFBZ0IsU0FBUyxZQUFNO0FBQ25DLFdBQVMsSUFBVCxDQUFjLFNBQWQsQ0FBd0IsTUFBeEIsQ0FBK0IsaUJBQS9CO0FBQ0EsV0FBUyxJQUFULENBQWMsS0FBZCxDQUFvQixVQUFwQixHQUFpQyxDQUFqQztBQUNBLGtCQUFnQixRQUFRLFNBQXhCO0FBQ0E7QUFDQTtBQUNELENBTnFCLEVBTW5CLEdBTm1CLENBQXRCO0FBT0EsT0FBTyxnQkFBUCxDQUF3QixRQUF4QixFQUFrQyxhQUFsQzs7QUFFQSxPQUFPLE9BQVAsR0FBaUIsZ0JBQWpCIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiLyogRm9udCBGYWNlIE9ic2VydmVyIHYyLjEuMCAtIMKpIEJyYW0gU3RlaW4uIExpY2Vuc2U6IEJTRC0zLUNsYXVzZSAqLyhmdW5jdGlvbigpe2Z1bmN0aW9uIGwoYSxiKXtkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyP2EuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLGIsITEpOmEuYXR0YWNoRXZlbnQoXCJzY3JvbGxcIixiKX1mdW5jdGlvbiBtKGEpe2RvY3VtZW50LmJvZHk/YSgpOmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXI/ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIixmdW5jdGlvbiBjKCl7ZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIixjKTthKCl9KTpkb2N1bWVudC5hdHRhY2hFdmVudChcIm9ucmVhZHlzdGF0ZWNoYW5nZVwiLGZ1bmN0aW9uIGsoKXtpZihcImludGVyYWN0aXZlXCI9PWRvY3VtZW50LnJlYWR5U3RhdGV8fFwiY29tcGxldGVcIj09ZG9jdW1lbnQucmVhZHlTdGF0ZSlkb2N1bWVudC5kZXRhY2hFdmVudChcIm9ucmVhZHlzdGF0ZWNoYW5nZVwiLGspLGEoKX0pfTtmdW5jdGlvbiB0KGEpe3RoaXMuYT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO3RoaXMuYS5zZXRBdHRyaWJ1dGUoXCJhcmlhLWhpZGRlblwiLFwidHJ1ZVwiKTt0aGlzLmEuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoYSkpO3RoaXMuYj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTt0aGlzLmM9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7dGhpcy5oPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO3RoaXMuZj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTt0aGlzLmc9LTE7dGhpcy5iLnN0eWxlLmNzc1RleHQ9XCJtYXgtd2lkdGg6bm9uZTtkaXNwbGF5OmlubGluZS1ibG9jaztwb3NpdGlvbjphYnNvbHV0ZTtoZWlnaHQ6MTAwJTt3aWR0aDoxMDAlO292ZXJmbG93OnNjcm9sbDtmb250LXNpemU6MTZweDtcIjt0aGlzLmMuc3R5bGUuY3NzVGV4dD1cIm1heC13aWR0aDpub25lO2Rpc3BsYXk6aW5saW5lLWJsb2NrO3Bvc2l0aW9uOmFic29sdXRlO2hlaWdodDoxMDAlO3dpZHRoOjEwMCU7b3ZlcmZsb3c6c2Nyb2xsO2ZvbnQtc2l6ZToxNnB4O1wiO1xudGhpcy5mLnN0eWxlLmNzc1RleHQ9XCJtYXgtd2lkdGg6bm9uZTtkaXNwbGF5OmlubGluZS1ibG9jaztwb3NpdGlvbjphYnNvbHV0ZTtoZWlnaHQ6MTAwJTt3aWR0aDoxMDAlO292ZXJmbG93OnNjcm9sbDtmb250LXNpemU6MTZweDtcIjt0aGlzLmguc3R5bGUuY3NzVGV4dD1cImRpc3BsYXk6aW5saW5lLWJsb2NrO3dpZHRoOjIwMCU7aGVpZ2h0OjIwMCU7Zm9udC1zaXplOjE2cHg7bWF4LXdpZHRoOm5vbmU7XCI7dGhpcy5iLmFwcGVuZENoaWxkKHRoaXMuaCk7dGhpcy5jLmFwcGVuZENoaWxkKHRoaXMuZik7dGhpcy5hLmFwcGVuZENoaWxkKHRoaXMuYik7dGhpcy5hLmFwcGVuZENoaWxkKHRoaXMuYyl9XG5mdW5jdGlvbiB1KGEsYil7YS5hLnN0eWxlLmNzc1RleHQ9XCJtYXgtd2lkdGg6bm9uZTttaW4td2lkdGg6MjBweDttaW4taGVpZ2h0OjIwcHg7ZGlzcGxheTppbmxpbmUtYmxvY2s7b3ZlcmZsb3c6aGlkZGVuO3Bvc2l0aW9uOmFic29sdXRlO3dpZHRoOmF1dG87bWFyZ2luOjA7cGFkZGluZzowO3RvcDotOTk5cHg7d2hpdGUtc3BhY2U6bm93cmFwO2ZvbnQtc3ludGhlc2lzOm5vbmU7Zm9udDpcIitiK1wiO1wifWZ1bmN0aW9uIHooYSl7dmFyIGI9YS5hLm9mZnNldFdpZHRoLGM9YisxMDA7YS5mLnN0eWxlLndpZHRoPWMrXCJweFwiO2EuYy5zY3JvbGxMZWZ0PWM7YS5iLnNjcm9sbExlZnQ9YS5iLnNjcm9sbFdpZHRoKzEwMDtyZXR1cm4gYS5nIT09Yj8oYS5nPWIsITApOiExfWZ1bmN0aW9uIEEoYSxiKXtmdW5jdGlvbiBjKCl7dmFyIGE9azt6KGEpJiZhLmEucGFyZW50Tm9kZSYmYihhLmcpfXZhciBrPWE7bChhLmIsYyk7bChhLmMsYyk7eihhKX07ZnVuY3Rpb24gQihhLGIpe3ZhciBjPWJ8fHt9O3RoaXMuZmFtaWx5PWE7dGhpcy5zdHlsZT1jLnN0eWxlfHxcIm5vcm1hbFwiO3RoaXMud2VpZ2h0PWMud2VpZ2h0fHxcIm5vcm1hbFwiO3RoaXMuc3RyZXRjaD1jLnN0cmV0Y2h8fFwibm9ybWFsXCJ9dmFyIEM9bnVsbCxEPW51bGwsRT1udWxsLEY9bnVsbDtmdW5jdGlvbiBHKCl7aWYobnVsbD09PUQpaWYoSigpJiYvQXBwbGUvLnRlc3Qod2luZG93Lm5hdmlnYXRvci52ZW5kb3IpKXt2YXIgYT0vQXBwbGVXZWJLaXRcXC8oWzAtOV0rKSg/OlxcLihbMC05XSspKSg/OlxcLihbMC05XSspKS8uZXhlYyh3aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudCk7RD0hIWEmJjYwMz5wYXJzZUludChhWzFdLDEwKX1lbHNlIEQ9ITE7cmV0dXJuIER9ZnVuY3Rpb24gSigpe251bGw9PT1GJiYoRj0hIWRvY3VtZW50LmZvbnRzKTtyZXR1cm4gRn1cbmZ1bmN0aW9uIEsoKXtpZihudWxsPT09RSl7dmFyIGE9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTt0cnl7YS5zdHlsZS5mb250PVwiY29uZGVuc2VkIDEwMHB4IHNhbnMtc2VyaWZcIn1jYXRjaChiKXt9RT1cIlwiIT09YS5zdHlsZS5mb250fXJldHVybiBFfWZ1bmN0aW9uIEwoYSxiKXtyZXR1cm5bYS5zdHlsZSxhLndlaWdodCxLKCk/YS5zdHJldGNoOlwiXCIsXCIxMDBweFwiLGJdLmpvaW4oXCIgXCIpfVxuQi5wcm90b3R5cGUubG9hZD1mdW5jdGlvbihhLGIpe3ZhciBjPXRoaXMsaz1hfHxcIkJFU2Jzd3lcIixyPTAsbj1ifHwzRTMsSD0obmV3IERhdGUpLmdldFRpbWUoKTtyZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24oYSxiKXtpZihKKCkmJiFHKCkpe3ZhciBNPW5ldyBQcm9taXNlKGZ1bmN0aW9uKGEsYil7ZnVuY3Rpb24gZSgpeyhuZXcgRGF0ZSkuZ2V0VGltZSgpLUg+PW4/YihFcnJvcihcIlwiK24rXCJtcyB0aW1lb3V0IGV4Y2VlZGVkXCIpKTpkb2N1bWVudC5mb250cy5sb2FkKEwoYywnXCInK2MuZmFtaWx5KydcIicpLGspLnRoZW4oZnVuY3Rpb24oYyl7MTw9Yy5sZW5ndGg/YSgpOnNldFRpbWVvdXQoZSwyNSl9LGIpfWUoKX0pLE49bmV3IFByb21pc2UoZnVuY3Rpb24oYSxjKXtyPXNldFRpbWVvdXQoZnVuY3Rpb24oKXtjKEVycm9yKFwiXCIrbitcIm1zIHRpbWVvdXQgZXhjZWVkZWRcIikpfSxuKX0pO1Byb21pc2UucmFjZShbTixNXSkudGhlbihmdW5jdGlvbigpe2NsZWFyVGltZW91dChyKTthKGMpfSxcbmIpfWVsc2UgbShmdW5jdGlvbigpe2Z1bmN0aW9uIHYoKXt2YXIgYjtpZihiPS0xIT1mJiYtMSE9Z3x8LTEhPWYmJi0xIT1ofHwtMSE9ZyYmLTEhPWgpKGI9ZiE9ZyYmZiE9aCYmZyE9aCl8fChudWxsPT09QyYmKGI9L0FwcGxlV2ViS2l0XFwvKFswLTldKykoPzpcXC4oWzAtOV0rKSkvLmV4ZWMod2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQpLEM9ISFiJiYoNTM2PnBhcnNlSW50KGJbMV0sMTApfHw1MzY9PT1wYXJzZUludChiWzFdLDEwKSYmMTE+PXBhcnNlSW50KGJbMl0sMTApKSksYj1DJiYoZj09dyYmZz09dyYmaD09d3x8Zj09eCYmZz09eCYmaD09eHx8Zj09eSYmZz09eSYmaD09eSkpLGI9IWI7YiYmKGQucGFyZW50Tm9kZSYmZC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGQpLGNsZWFyVGltZW91dChyKSxhKGMpKX1mdW5jdGlvbiBJKCl7aWYoKG5ldyBEYXRlKS5nZXRUaW1lKCktSD49bilkLnBhcmVudE5vZGUmJmQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChkKSxiKEVycm9yKFwiXCIrXG5uK1wibXMgdGltZW91dCBleGNlZWRlZFwiKSk7ZWxzZXt2YXIgYT1kb2N1bWVudC5oaWRkZW47aWYoITA9PT1hfHx2b2lkIDA9PT1hKWY9ZS5hLm9mZnNldFdpZHRoLGc9cC5hLm9mZnNldFdpZHRoLGg9cS5hLm9mZnNldFdpZHRoLHYoKTtyPXNldFRpbWVvdXQoSSw1MCl9fXZhciBlPW5ldyB0KGspLHA9bmV3IHQoaykscT1uZXcgdChrKSxmPS0xLGc9LTEsaD0tMSx3PS0xLHg9LTEseT0tMSxkPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7ZC5kaXI9XCJsdHJcIjt1KGUsTChjLFwic2Fucy1zZXJpZlwiKSk7dShwLEwoYyxcInNlcmlmXCIpKTt1KHEsTChjLFwibW9ub3NwYWNlXCIpKTtkLmFwcGVuZENoaWxkKGUuYSk7ZC5hcHBlbmRDaGlsZChwLmEpO2QuYXBwZW5kQ2hpbGQocS5hKTtkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGQpO3c9ZS5hLm9mZnNldFdpZHRoO3g9cC5hLm9mZnNldFdpZHRoO3k9cS5hLm9mZnNldFdpZHRoO0koKTtBKGUsZnVuY3Rpb24oYSl7Zj1hO3YoKX0pO3UoZSxcbkwoYywnXCInK2MuZmFtaWx5KydcIixzYW5zLXNlcmlmJykpO0EocCxmdW5jdGlvbihhKXtnPWE7digpfSk7dShwLEwoYywnXCInK2MuZmFtaWx5KydcIixzZXJpZicpKTtBKHEsZnVuY3Rpb24oYSl7aD1hO3YoKX0pO3UocSxMKGMsJ1wiJytjLmZhbWlseSsnXCIsbW9ub3NwYWNlJykpfSl9KX07XCJvYmplY3RcIj09PXR5cGVvZiBtb2R1bGU/bW9kdWxlLmV4cG9ydHM9Qjood2luZG93LkZvbnRGYWNlT2JzZXJ2ZXI9Qix3aW5kb3cuRm9udEZhY2VPYnNlcnZlci5wcm90b3R5cGUubG9hZD1CLnByb3RvdHlwZS5sb2FkKTt9KCkpO1xuIiwiLyohXG4gKiBWRVJTSU9OOiAxLjkuMVxuICogREFURTogMjAxOC0wNS0yMVxuICogVVBEQVRFUyBBTkQgRE9DUyBBVDogaHR0cDovL2dyZWVuc29jay5jb21cbiAqXG4gKiBAbGljZW5zZSBDb3B5cmlnaHQgKGMpIDIwMDgtMjAxOCwgR3JlZW5Tb2NrLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICogVGhpcyB3b3JrIGlzIHN1YmplY3QgdG8gdGhlIHRlcm1zIGF0IGh0dHA6Ly9ncmVlbnNvY2suY29tL3N0YW5kYXJkLWxpY2Vuc2Ugb3IgZm9yXG4gKiBDbHViIEdyZWVuU29jayBtZW1iZXJzLCB0aGUgc29mdHdhcmUgYWdyZWVtZW50IHRoYXQgd2FzIGlzc3VlZCB3aXRoIHlvdXIgbWVtYmVyc2hpcC5cbiAqIFxuICogQGF1dGhvcjogSmFjayBEb3lsZSwgamFja0BncmVlbnNvY2suY29tXG4gKiovXG52YXIgX2dzU2NvcGUgPSAodHlwZW9mKG1vZHVsZSkgIT09IFwidW5kZWZpbmVkXCIgJiYgbW9kdWxlLmV4cG9ydHMgJiYgdHlwZW9mKGdsb2JhbCkgIT09IFwidW5kZWZpbmVkXCIpID8gZ2xvYmFsIDogdGhpcyB8fCB3aW5kb3c7IC8vaGVscHMgZW5zdXJlIGNvbXBhdGliaWxpdHkgd2l0aCBBTUQvUmVxdWlyZUpTIGFuZCBDb21tb25KUy9Ob2RlXG4oX2dzU2NvcGUuX2dzUXVldWUgfHwgKF9nc1Njb3BlLl9nc1F1ZXVlID0gW10pKS5wdXNoKCBmdW5jdGlvbigpIHtcblxuXHRcInVzZSBzdHJpY3RcIjtcblxuXHR2YXIgX2RvYyA9IChfZ3NTY29wZS5kb2N1bWVudCB8fCB7fSkuZG9jdW1lbnRFbGVtZW50LFxuXHRcdF93aW5kb3cgPSBfZ3NTY29wZSxcblx0XHRfbWF4ID0gZnVuY3Rpb24oZWxlbWVudCwgYXhpcykge1xuXHRcdFx0dmFyIGRpbSA9IChheGlzID09PSBcInhcIikgPyBcIldpZHRoXCIgOiBcIkhlaWdodFwiLFxuXHRcdFx0XHRzY3JvbGwgPSBcInNjcm9sbFwiICsgZGltLFxuXHRcdFx0XHRjbGllbnQgPSBcImNsaWVudFwiICsgZGltLFxuXHRcdFx0XHRib2R5ID0gZG9jdW1lbnQuYm9keTtcblx0XHRcdHJldHVybiAoZWxlbWVudCA9PT0gX3dpbmRvdyB8fCBlbGVtZW50ID09PSBfZG9jIHx8IGVsZW1lbnQgPT09IGJvZHkpID8gTWF0aC5tYXgoX2RvY1tzY3JvbGxdLCBib2R5W3Njcm9sbF0pIC0gKF93aW5kb3dbXCJpbm5lclwiICsgZGltXSB8fCBfZG9jW2NsaWVudF0gfHwgYm9keVtjbGllbnRdKSA6IGVsZW1lbnRbc2Nyb2xsXSAtIGVsZW1lbnRbXCJvZmZzZXRcIiArIGRpbV07XG5cdFx0fSxcblx0XHRfdW53cmFwRWxlbWVudCA9IGZ1bmN0aW9uKHZhbHVlKSB7XG5cdFx0XHRpZiAodHlwZW9mKHZhbHVlKSA9PT0gXCJzdHJpbmdcIikge1xuXHRcdFx0XHR2YWx1ZSA9IFR3ZWVuTGl0ZS5zZWxlY3Rvcih2YWx1ZSk7XG5cdFx0XHR9XG5cdFx0XHRpZiAodmFsdWUubGVuZ3RoICYmIHZhbHVlICE9PSBfd2luZG93ICYmIHZhbHVlWzBdICYmIHZhbHVlWzBdLnN0eWxlICYmICF2YWx1ZS5ub2RlVHlwZSkge1xuXHRcdFx0XHR2YWx1ZSA9IHZhbHVlWzBdO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuICh2YWx1ZSA9PT0gX3dpbmRvdyB8fCAodmFsdWUubm9kZVR5cGUgJiYgdmFsdWUuc3R5bGUpKSA/IHZhbHVlIDogbnVsbDtcblx0XHR9LFxuXHRcdF9idWlsZEdldHRlciA9IGZ1bmN0aW9uKGUsIGF4aXMpIHsgLy9wYXNzIGluIGFuIGVsZW1lbnQgYW5kIGFuIGF4aXMgKFwieFwiIG9yIFwieVwiKSBhbmQgaXQnbGwgcmV0dXJuIGEgZ2V0dGVyIGZ1bmN0aW9uIGZvciB0aGUgc2Nyb2xsIHBvc2l0aW9uIG9mIHRoYXQgZWxlbWVudCAobGlrZSBzY3JvbGxUb3Agb3Igc2Nyb2xsTGVmdCwgYWx0aG91Z2ggaWYgdGhlIGVsZW1lbnQgaXMgdGhlIHdpbmRvdywgaXQnbGwgdXNlIHRoZSBwYWdlWE9mZnNldC9wYWdlWU9mZnNldCBvciB0aGUgZG9jdW1lbnRFbGVtZW50J3Mgc2Nyb2xsVG9wL3Njcm9sbExlZnQgb3IgZG9jdW1lbnQuYm9keSdzLiBCYXNpY2FsbHkgdGhpcyBzdHJlYW1saW5lcyB0aGluZ3MgYW5kIG1ha2VzIGEgdmVyeSBmYXN0IGdldHRlciBhY3Jvc3MgYnJvd3NlcnMuXG5cdFx0XHR2YXIgcCA9IFwic2Nyb2xsXCIgKyAoKGF4aXMgPT09IFwieFwiKSA/IFwiTGVmdFwiIDogXCJUb3BcIik7XG5cdFx0XHRpZiAoZSA9PT0gX3dpbmRvdykge1xuXHRcdFx0XHRpZiAoZS5wYWdlWE9mZnNldCAhPSBudWxsKSB7XG5cdFx0XHRcdFx0cCA9IFwicGFnZVwiICsgYXhpcy50b1VwcGVyQ2FzZSgpICsgXCJPZmZzZXRcIjtcblx0XHRcdFx0fSBlbHNlIGlmIChfZG9jW3BdICE9IG51bGwpIHtcblx0XHRcdFx0XHRlID0gX2RvYztcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRlID0gZG9jdW1lbnQuYm9keTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRyZXR1cm4gZVtwXTtcblx0XHRcdH07XG5cdFx0fSxcblx0XHRfZ2V0T2Zmc2V0ID0gZnVuY3Rpb24oZWxlbWVudCwgY29udGFpbmVyKSB7XG5cdFx0XHR2YXIgcmVjdCA9IF91bndyYXBFbGVtZW50KGVsZW1lbnQpLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLFxuXHRcdFx0XHRiID0gZG9jdW1lbnQuYm9keSxcblx0XHRcdFx0aXNSb290ID0gKCFjb250YWluZXIgfHwgY29udGFpbmVyID09PSBfd2luZG93IHx8IGNvbnRhaW5lciA9PT0gYiksXG5cdFx0XHRcdGNSZWN0ID0gaXNSb290ID8ge3RvcDpfZG9jLmNsaWVudFRvcCAtICh3aW5kb3cucGFnZVlPZmZzZXQgfHwgX2RvYy5zY3JvbGxUb3AgfHwgYi5zY3JvbGxUb3AgfHwgMCksIGxlZnQ6X2RvYy5jbGllbnRMZWZ0IC0gKHdpbmRvdy5wYWdlWE9mZnNldCB8fCBfZG9jLnNjcm9sbExlZnQgfHwgYi5zY3JvbGxMZWZ0IHx8IDApfSA6IGNvbnRhaW5lci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSxcblx0XHRcdFx0b2Zmc2V0cyA9IHt4OiByZWN0LmxlZnQgLSBjUmVjdC5sZWZ0LCB5OiByZWN0LnRvcCAtIGNSZWN0LnRvcH07XG5cdFx0XHRpZiAoIWlzUm9vdCAmJiBjb250YWluZXIpIHsgLy9vbmx5IGFkZCB0aGUgY3VycmVudCBzY3JvbGwgcG9zaXRpb24gaWYgaXQncyBub3QgdGhlIHdpbmRvdy9ib2R5LlxuXHRcdFx0XHRvZmZzZXRzLnggKz0gX2J1aWxkR2V0dGVyKGNvbnRhaW5lciwgXCJ4XCIpKCk7XG5cdFx0XHRcdG9mZnNldHMueSArPSBfYnVpbGRHZXR0ZXIoY29udGFpbmVyLCBcInlcIikoKTtcblx0XHRcdH1cblx0XHRcdHJldHVybiBvZmZzZXRzO1xuXHRcdFx0LypcdFBSRVZJT1VTXG5cdFx0XHR2YXIgcmVjdCA9IF91bndyYXBFbGVtZW50KGVsZW1lbnQpLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLFxuXHRcdFx0XHRpc1Jvb3QgPSAoIWNvbnRhaW5lciB8fCBjb250YWluZXIgPT09IF93aW5kb3cgfHwgY29udGFpbmVyID09PSBkb2N1bWVudC5ib2R5KSxcblx0XHRcdFx0Y1JlY3QgPSAoaXNSb290ID8gX2RvYyA6IGNvbnRhaW5lcikuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCksXG5cdFx0XHRcdG9mZnNldHMgPSB7eDogcmVjdC5sZWZ0IC0gY1JlY3QubGVmdCwgeTogcmVjdC50b3AgLSBjUmVjdC50b3B9O1xuXHRcdFx0aWYgKCFpc1Jvb3QgJiYgY29udGFpbmVyKSB7IC8vb25seSBhZGQgdGhlIGN1cnJlbnQgc2Nyb2xsIHBvc2l0aW9uIGlmIGl0J3Mgbm90IHRoZSB3aW5kb3cvYm9keS5cblx0XHRcdFx0b2Zmc2V0cy54ICs9IF9idWlsZEdldHRlcihjb250YWluZXIsIFwieFwiKSgpO1xuXHRcdFx0XHRvZmZzZXRzLnkgKz0gX2J1aWxkR2V0dGVyKGNvbnRhaW5lciwgXCJ5XCIpKCk7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gb2Zmc2V0cztcblx0XHRcdCovXG5cdFx0fSxcblx0XHRfcGFyc2VWYWwgPSBmdW5jdGlvbih2YWx1ZSwgdGFyZ2V0LCBheGlzKSB7XG5cdFx0XHR2YXIgdHlwZSA9IHR5cGVvZih2YWx1ZSk7XG5cdFx0XHRyZXR1cm4gIWlzTmFOKHZhbHVlKSA/IHBhcnNlRmxvYXQodmFsdWUpIDogKHR5cGUgPT09IFwibnVtYmVyXCIgfHwgKHR5cGUgPT09IFwic3RyaW5nXCIgJiYgdmFsdWUuY2hhckF0KDEpID09PSBcIj1cIikpID8gdmFsdWUgOiAodmFsdWUgPT09IFwibWF4XCIpID8gX21heCh0YXJnZXQsIGF4aXMpIDogTWF0aC5taW4oX21heCh0YXJnZXQsIGF4aXMpLCBfZ2V0T2Zmc2V0KHZhbHVlLCB0YXJnZXQpW2F4aXNdKTtcblx0XHR9LFxuXG5cdFx0U2Nyb2xsVG9QbHVnaW4gPSBfZ3NTY29wZS5fZ3NEZWZpbmUucGx1Z2luKHtcblx0XHRcdHByb3BOYW1lOiBcInNjcm9sbFRvXCIsXG5cdFx0XHRBUEk6IDIsXG5cdFx0XHRnbG9iYWw6IHRydWUsXG5cdFx0XHR2ZXJzaW9uOlwiMS45LjFcIixcblxuXHRcdFx0Ly9jYWxsZWQgd2hlbiB0aGUgdHdlZW4gcmVuZGVycyBmb3IgdGhlIGZpcnN0IHRpbWUuIFRoaXMgaXMgd2hlcmUgaW5pdGlhbCB2YWx1ZXMgc2hvdWxkIGJlIHJlY29yZGVkIGFuZCBhbnkgc2V0dXAgcm91dGluZXMgc2hvdWxkIHJ1bi5cblx0XHRcdGluaXQ6IGZ1bmN0aW9uKHRhcmdldCwgdmFsdWUsIHR3ZWVuKSB7XG5cdFx0XHRcdHRoaXMuX3dkdyA9ICh0YXJnZXQgPT09IF93aW5kb3cpO1xuXHRcdFx0XHR0aGlzLl90YXJnZXQgPSB0YXJnZXQ7XG5cdFx0XHRcdHRoaXMuX3R3ZWVuID0gdHdlZW47XG5cdFx0XHRcdGlmICh0eXBlb2YodmFsdWUpICE9PSBcIm9iamVjdFwiKSB7XG5cdFx0XHRcdFx0dmFsdWUgPSB7eTp2YWx1ZX07IC8vaWYgd2UgZG9uJ3QgcmVjZWl2ZSBhbiBvYmplY3QgYXMgdGhlIHBhcmFtZXRlciwgYXNzdW1lIHRoZSB1c2VyIGludGVuZHMgXCJ5XCIuXG5cdFx0XHRcdFx0aWYgKHR5cGVvZih2YWx1ZS55KSA9PT0gXCJzdHJpbmdcIiAmJiB2YWx1ZS55ICE9PSBcIm1heFwiICYmIHZhbHVlLnkuY2hhckF0KDEpICE9PSBcIj1cIikge1xuXHRcdFx0XHRcdFx0dmFsdWUueCA9IHZhbHVlLnk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9IGVsc2UgaWYgKHZhbHVlLm5vZGVUeXBlKSB7XG5cdFx0XHRcdFx0dmFsdWUgPSB7eTp2YWx1ZSwgeDp2YWx1ZX07XG5cdFx0XHRcdH1cblx0XHRcdFx0dGhpcy52YXJzID0gdmFsdWU7XG5cdFx0XHRcdHRoaXMuX2F1dG9LaWxsID0gKHZhbHVlLmF1dG9LaWxsICE9PSBmYWxzZSk7XG5cdFx0XHRcdHRoaXMuZ2V0WCA9IF9idWlsZEdldHRlcih0YXJnZXQsIFwieFwiKTtcblx0XHRcdFx0dGhpcy5nZXRZID0gX2J1aWxkR2V0dGVyKHRhcmdldCwgXCJ5XCIpO1xuXHRcdFx0XHR0aGlzLnggPSB0aGlzLnhQcmV2ID0gdGhpcy5nZXRYKCk7XG5cdFx0XHRcdHRoaXMueSA9IHRoaXMueVByZXYgPSB0aGlzLmdldFkoKTtcblx0XHRcdFx0aWYgKHZhbHVlLnggIT0gbnVsbCkge1xuXHRcdFx0XHRcdHRoaXMuX2FkZFR3ZWVuKHRoaXMsIFwieFwiLCB0aGlzLngsIF9wYXJzZVZhbCh2YWx1ZS54LCB0YXJnZXQsIFwieFwiKSAtICh2YWx1ZS5vZmZzZXRYIHx8IDApLCBcInNjcm9sbFRvX3hcIiwgdHJ1ZSk7XG5cdFx0XHRcdFx0dGhpcy5fb3ZlcndyaXRlUHJvcHMucHVzaChcInNjcm9sbFRvX3hcIik7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0dGhpcy5za2lwWCA9IHRydWU7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKHZhbHVlLnkgIT0gbnVsbCkge1xuXHRcdFx0XHRcdHRoaXMuX2FkZFR3ZWVuKHRoaXMsIFwieVwiLCB0aGlzLnksIF9wYXJzZVZhbCh2YWx1ZS55LCB0YXJnZXQsIFwieVwiKSAtICh2YWx1ZS5vZmZzZXRZIHx8IDApLCBcInNjcm9sbFRvX3lcIiwgdHJ1ZSk7XG5cdFx0XHRcdFx0dGhpcy5fb3ZlcndyaXRlUHJvcHMucHVzaChcInNjcm9sbFRvX3lcIik7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0dGhpcy5za2lwWSA9IHRydWU7XG5cdFx0XHRcdH1cblx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHR9LFxuXG5cdFx0XHQvL2NhbGxlZCBlYWNoIHRpbWUgdGhlIHZhbHVlcyBzaG91bGQgYmUgdXBkYXRlZCwgYW5kIHRoZSByYXRpbyBnZXRzIHBhc3NlZCBhcyB0aGUgb25seSBwYXJhbWV0ZXIgKHR5cGljYWxseSBpdCdzIGEgdmFsdWUgYmV0d2VlbiAwIGFuZCAxLCBidXQgaXQgY2FuIGV4Y2VlZCB0aG9zZSB3aGVuIHVzaW5nIGFuIGVhc2UgbGlrZSBFbGFzdGljLmVhc2VPdXQgb3IgQmFjay5lYXNlT3V0LCBldGMuKVxuXHRcdFx0c2V0OiBmdW5jdGlvbih2KSB7XG5cdFx0XHRcdHRoaXMuX3N1cGVyLnNldFJhdGlvLmNhbGwodGhpcywgdik7XG5cblx0XHRcdFx0dmFyIHggPSAodGhpcy5fd2R3IHx8ICF0aGlzLnNraXBYKSA/IHRoaXMuZ2V0WCgpIDogdGhpcy54UHJldixcblx0XHRcdFx0XHR5ID0gKHRoaXMuX3dkdyB8fCAhdGhpcy5za2lwWSkgPyB0aGlzLmdldFkoKSA6IHRoaXMueVByZXYsXG5cdFx0XHRcdFx0eURpZiA9IHkgLSB0aGlzLnlQcmV2LFxuXHRcdFx0XHRcdHhEaWYgPSB4IC0gdGhpcy54UHJldixcblx0XHRcdFx0XHR0aHJlc2hvbGQgPSBTY3JvbGxUb1BsdWdpbi5hdXRvS2lsbFRocmVzaG9sZDtcblxuXHRcdFx0XHRpZiAodGhpcy54IDwgMCkgeyAvL2Nhbid0IHNjcm9sbCB0byBhIHBvc2l0aW9uIGxlc3MgdGhhbiAwISBNaWdodCBoYXBwZW4gaWYgc29tZW9uZSB1c2VzIGEgQmFjay5lYXNlT3V0IG9yIEVsYXN0aWMuZWFzZU91dCB3aGVuIHNjcm9sbGluZyBiYWNrIHRvIHRoZSB0b3Agb2YgdGhlIHBhZ2UgKGZvciBleGFtcGxlKVxuXHRcdFx0XHRcdHRoaXMueCA9IDA7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKHRoaXMueSA8IDApIHtcblx0XHRcdFx0XHR0aGlzLnkgPSAwO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmICh0aGlzLl9hdXRvS2lsbCkge1xuXHRcdFx0XHRcdC8vbm90ZTogaU9TIGhhcyBhIGJ1ZyB0aGF0IHRocm93cyBvZmYgdGhlIHNjcm9sbCBieSBzZXZlcmFsIHBpeGVscywgc28gd2UgbmVlZCB0byBjaGVjayBpZiBpdCdzIHdpdGhpbiA3IHBpeGVscyBvZiB0aGUgcHJldmlvdXMgb25lIHRoYXQgd2Ugc2V0IGluc3RlYWQgb2YganVzdCBsb29raW5nIGZvciBhbiBleGFjdCBtYXRjaC5cblx0XHRcdFx0XHRpZiAoIXRoaXMuc2tpcFggJiYgKHhEaWYgPiB0aHJlc2hvbGQgfHwgeERpZiA8IC10aHJlc2hvbGQpICYmIHggPCBfbWF4KHRoaXMuX3RhcmdldCwgXCJ4XCIpKSB7XG5cdFx0XHRcdFx0XHR0aGlzLnNraXBYID0gdHJ1ZTsgLy9pZiB0aGUgdXNlciBzY3JvbGxzIHNlcGFyYXRlbHksIHdlIHNob3VsZCBzdG9wIHR3ZWVuaW5nIVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRpZiAoIXRoaXMuc2tpcFkgJiYgKHlEaWYgPiB0aHJlc2hvbGQgfHwgeURpZiA8IC10aHJlc2hvbGQpICYmIHkgPCBfbWF4KHRoaXMuX3RhcmdldCwgXCJ5XCIpKSB7XG5cdFx0XHRcdFx0XHR0aGlzLnNraXBZID0gdHJ1ZTsgLy9pZiB0aGUgdXNlciBzY3JvbGxzIHNlcGFyYXRlbHksIHdlIHNob3VsZCBzdG9wIHR3ZWVuaW5nIVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRpZiAodGhpcy5za2lwWCAmJiB0aGlzLnNraXBZKSB7XG5cdFx0XHRcdFx0XHR0aGlzLl90d2Vlbi5raWxsKCk7XG5cdFx0XHRcdFx0XHRpZiAodGhpcy52YXJzLm9uQXV0b0tpbGwpIHtcblx0XHRcdFx0XHRcdFx0dGhpcy52YXJzLm9uQXV0b0tpbGwuYXBwbHkodGhpcy52YXJzLm9uQXV0b0tpbGxTY29wZSB8fCB0aGlzLl90d2VlbiwgdGhpcy52YXJzLm9uQXV0b0tpbGxQYXJhbXMgfHwgW10pO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAodGhpcy5fd2R3KSB7XG5cdFx0XHRcdFx0X3dpbmRvdy5zY3JvbGxUbygoIXRoaXMuc2tpcFgpID8gdGhpcy54IDogeCwgKCF0aGlzLnNraXBZKSA/IHRoaXMueSA6IHkpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdGlmICghdGhpcy5za2lwWSkge1xuXHRcdFx0XHRcdFx0dGhpcy5fdGFyZ2V0LnNjcm9sbFRvcCA9IHRoaXMueTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0aWYgKCF0aGlzLnNraXBYKSB7XG5cdFx0XHRcdFx0XHR0aGlzLl90YXJnZXQuc2Nyb2xsTGVmdCA9IHRoaXMueDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdFx0dGhpcy54UHJldiA9IHRoaXMueDtcblx0XHRcdFx0dGhpcy55UHJldiA9IHRoaXMueTtcblx0XHRcdH1cblxuXHRcdH0pLFxuXHRcdHAgPSBTY3JvbGxUb1BsdWdpbi5wcm90b3R5cGU7XG5cblx0U2Nyb2xsVG9QbHVnaW4ubWF4ID0gX21heDtcblx0U2Nyb2xsVG9QbHVnaW4uZ2V0T2Zmc2V0ID0gX2dldE9mZnNldDtcblx0U2Nyb2xsVG9QbHVnaW4uYnVpbGRHZXR0ZXIgPSBfYnVpbGRHZXR0ZXI7XG5cdFNjcm9sbFRvUGx1Z2luLmF1dG9LaWxsVGhyZXNob2xkID0gNztcblxuXHRwLl9raWxsID0gZnVuY3Rpb24obG9va3VwKSB7XG5cdFx0aWYgKGxvb2t1cC5zY3JvbGxUb194KSB7XG5cdFx0XHR0aGlzLnNraXBYID0gdHJ1ZTtcblx0XHR9XG5cdFx0aWYgKGxvb2t1cC5zY3JvbGxUb195KSB7XG5cdFx0XHR0aGlzLnNraXBZID0gdHJ1ZTtcblx0XHR9XG5cdFx0cmV0dXJuIHRoaXMuX3N1cGVyLl9raWxsLmNhbGwodGhpcywgbG9va3VwKTtcblx0fTtcblxufSk7IGlmIChfZ3NTY29wZS5fZ3NEZWZpbmUpIHsgX2dzU2NvcGUuX2dzUXVldWUucG9wKCkoKTsgfVxuXG4vL2V4cG9ydCB0byBBTUQvUmVxdWlyZUpTIGFuZCBDb21tb25KUy9Ob2RlIChwcmVjdXJzb3IgdG8gZnVsbCBtb2R1bGFyIGJ1aWxkIHN5c3RlbSBjb21pbmcgYXQgYSBsYXRlciBkYXRlKVxuKGZ1bmN0aW9uKG5hbWUpIHtcblx0XCJ1c2Ugc3RyaWN0XCI7XG5cdHZhciBnZXRHbG9iYWwgPSBmdW5jdGlvbigpIHtcblx0XHRyZXR1cm4gKF9nc1Njb3BlLkdyZWVuU29ja0dsb2JhbHMgfHwgX2dzU2NvcGUpW25hbWVdO1xuXHR9O1xuXHRpZiAodHlwZW9mKG1vZHVsZSkgIT09IFwidW5kZWZpbmVkXCIgJiYgbW9kdWxlLmV4cG9ydHMpIHsgLy9ub2RlXG5cdFx0cmVxdWlyZShcImdzYXAvVHdlZW5MaXRlXCIpO1xuXHRcdG1vZHVsZS5leHBvcnRzID0gZ2V0R2xvYmFsKCk7XG5cdH0gZWxzZSBpZiAodHlwZW9mKGRlZmluZSkgPT09IFwiZnVuY3Rpb25cIiAmJiBkZWZpbmUuYW1kKSB7IC8vQU1EXG5cdFx0ZGVmaW5lKFtcImdzYXAvVHdlZW5MaXRlXCJdLCBnZXRHbG9iYWwpO1xuXHR9XG59KFwiU2Nyb2xsVG9QbHVnaW5cIikpOyIsIi8qIVxuICogVkVSU0lPTjogMS4yMC41XG4gKiBEQVRFOiAyMDE4LTA1LTIxXG4gKiBVUERBVEVTIEFORCBET0NTIEFUOiBodHRwOi8vZ3JlZW5zb2NrLmNvbVxuICpcbiAqIEBsaWNlbnNlIENvcHlyaWdodCAoYykgMjAwOC0yMDE4LCBHcmVlblNvY2suIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKiBUaGlzIHdvcmsgaXMgc3ViamVjdCB0byB0aGUgdGVybXMgYXQgaHR0cDovL2dyZWVuc29jay5jb20vc3RhbmRhcmQtbGljZW5zZSBvciBmb3JcbiAqIENsdWIgR3JlZW5Tb2NrIG1lbWJlcnMsIHRoZSBzb2Z0d2FyZSBhZ3JlZW1lbnQgdGhhdCB3YXMgaXNzdWVkIHdpdGggeW91ciBtZW1iZXJzaGlwLlxuICogXG4gKiBAYXV0aG9yOiBKYWNrIERveWxlLCBqYWNrQGdyZWVuc29jay5jb21cbiAqL1xuKGZ1bmN0aW9uKHdpbmRvdywgbW9kdWxlTmFtZSkge1xuXG5cdFx0XCJ1c2Ugc3RyaWN0XCI7XG5cdFx0dmFyIF9leHBvcnRzID0ge30sXG5cdFx0XHRfZG9jID0gd2luZG93LmRvY3VtZW50LFxuXHRcdFx0X2dsb2JhbHMgPSB3aW5kb3cuR3JlZW5Tb2NrR2xvYmFscyA9IHdpbmRvdy5HcmVlblNvY2tHbG9iYWxzIHx8IHdpbmRvdztcblx0XHRpZiAoX2dsb2JhbHMuVHdlZW5MaXRlKSB7XG5cdFx0XHRyZXR1cm4gX2dsb2JhbHMuVHdlZW5MaXRlOyAvL2luIGNhc2UgdGhlIGNvcmUgc2V0IG9mIGNsYXNzZXMgaXMgYWxyZWFkeSBsb2FkZWQsIGRvbid0IGluc3RhbnRpYXRlIHR3aWNlLlxuXHRcdH1cblx0XHR2YXIgX25hbWVzcGFjZSA9IGZ1bmN0aW9uKG5zKSB7XG5cdFx0XHRcdHZhciBhID0gbnMuc3BsaXQoXCIuXCIpLFxuXHRcdFx0XHRcdHAgPSBfZ2xvYmFscywgaTtcblx0XHRcdFx0Zm9yIChpID0gMDsgaSA8IGEubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0XHRwW2FbaV1dID0gcCA9IHBbYVtpXV0gfHwge307XG5cdFx0XHRcdH1cblx0XHRcdFx0cmV0dXJuIHA7XG5cdFx0XHR9LFxuXHRcdFx0Z3MgPSBfbmFtZXNwYWNlKFwiY29tLmdyZWVuc29ja1wiKSxcblx0XHRcdF90aW55TnVtID0gMC4wMDAwMDAwMDAxLFxuXHRcdFx0X3NsaWNlID0gZnVuY3Rpb24oYSkgeyAvL2Rvbid0IHVzZSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbCh0YXJnZXQsIDApIGJlY2F1c2UgdGhhdCBkb2Vzbid0IHdvcmsgaW4gSUU4IHdpdGggYSBOb2RlTGlzdCB0aGF0J3MgcmV0dXJuZWQgYnkgcXVlcnlTZWxlY3RvckFsbCgpXG5cdFx0XHRcdHZhciBiID0gW10sXG5cdFx0XHRcdFx0bCA9IGEubGVuZ3RoLFxuXHRcdFx0XHRcdGk7XG5cdFx0XHRcdGZvciAoaSA9IDA7IGkgIT09IGw7IGIucHVzaChhW2krK10pKSB7fVxuXHRcdFx0XHRyZXR1cm4gYjtcblx0XHRcdH0sXG5cdFx0XHRfZW1wdHlGdW5jID0gZnVuY3Rpb24oKSB7fSxcblx0XHRcdF9pc0FycmF5ID0gKGZ1bmN0aW9uKCkgeyAvL3dvcmtzIGFyb3VuZCBpc3N1ZXMgaW4gaWZyYW1lIGVudmlyb25tZW50cyB3aGVyZSB0aGUgQXJyYXkgZ2xvYmFsIGlzbid0IHNoYXJlZCwgdGh1cyBpZiB0aGUgb2JqZWN0IG9yaWdpbmF0ZXMgaW4gYSBkaWZmZXJlbnQgd2luZG93L2lmcmFtZSwgXCIob2JqIGluc3RhbmNlb2YgQXJyYXkpXCIgd2lsbCBldmFsdWF0ZSBmYWxzZS4gV2UgYWRkZWQgc29tZSBzcGVlZCBvcHRpbWl6YXRpb25zIHRvIGF2b2lkIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCgpIHVubGVzcyBpdCdzIGFic29sdXRlbHkgbmVjZXNzYXJ5IGJlY2F1c2UgaXQncyBWRVJZIHNsb3cgKGxpa2UgMjB4IHNsb3dlcilcblx0XHRcdFx0dmFyIHRvU3RyaW5nID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZyxcblx0XHRcdFx0XHRhcnJheSA9IHRvU3RyaW5nLmNhbGwoW10pO1xuXHRcdFx0XHRyZXR1cm4gZnVuY3Rpb24ob2JqKSB7XG5cdFx0XHRcdFx0cmV0dXJuIG9iaiAhPSBudWxsICYmIChvYmogaW5zdGFuY2VvZiBBcnJheSB8fCAodHlwZW9mKG9iaikgPT09IFwib2JqZWN0XCIgJiYgISFvYmoucHVzaCAmJiB0b1N0cmluZy5jYWxsKG9iaikgPT09IGFycmF5KSk7XG5cdFx0XHRcdH07XG5cdFx0XHR9KCkpLFxuXHRcdFx0YSwgaSwgcCwgX3RpY2tlciwgX3RpY2tlckFjdGl2ZSxcblx0XHRcdF9kZWZMb29rdXAgPSB7fSxcblxuXHRcdFx0LyoqXG5cdFx0XHQgKiBAY29uc3RydWN0b3Jcblx0XHRcdCAqIERlZmluZXMgYSBHcmVlblNvY2sgY2xhc3MsIG9wdGlvbmFsbHkgd2l0aCBhbiBhcnJheSBvZiBkZXBlbmRlbmNpZXMgdGhhdCBtdXN0IGJlIGluc3RhbnRpYXRlZCBmaXJzdCBhbmQgcGFzc2VkIGludG8gdGhlIGRlZmluaXRpb24uXG5cdFx0XHQgKiBUaGlzIGFsbG93cyB1c2VycyB0byBsb2FkIEdyZWVuU29jayBKUyBmaWxlcyBpbiBhbnkgb3JkZXIgZXZlbiBpZiB0aGV5IGhhdmUgaW50ZXJkZXBlbmRlbmNpZXMgKGxpa2UgQ1NTUGx1Z2luIGV4dGVuZHMgVHdlZW5QbHVnaW4gd2hpY2ggaXNcblx0XHRcdCAqIGluc2lkZSBUd2VlbkxpdGUuanMsIGJ1dCBpZiBDU1NQbHVnaW4gaXMgbG9hZGVkIGZpcnN0LCBpdCBzaG91bGQgd2FpdCB0byBydW4gaXRzIGNvZGUgdW50aWwgVHdlZW5MaXRlLmpzIGxvYWRzIGFuZCBpbnN0YW50aWF0ZXMgVHdlZW5QbHVnaW5cblx0XHRcdCAqIGFuZCB0aGVuIHBhc3MgVHdlZW5QbHVnaW4gdG8gQ1NTUGx1Z2luJ3MgZGVmaW5pdGlvbikuIFRoaXMgaXMgYWxsIGRvbmUgYXV0b21hdGljYWxseSBhbmQgaW50ZXJuYWxseS5cblx0XHRcdCAqXG5cdFx0XHQgKiBFdmVyeSBkZWZpbml0aW9uIHdpbGwgYmUgYWRkZWQgdG8gYSBcImNvbS5ncmVlbnNvY2tcIiBnbG9iYWwgb2JqZWN0ICh0eXBpY2FsbHkgd2luZG93LCBidXQgaWYgYSB3aW5kb3cuR3JlZW5Tb2NrR2xvYmFscyBvYmplY3QgaXMgZm91bmQsXG5cdFx0XHQgKiBpdCB3aWxsIGdvIHRoZXJlIGFzIG9mIHYxLjcpLiBGb3IgZXhhbXBsZSwgVHdlZW5MaXRlIHdpbGwgYmUgZm91bmQgYXQgd2luZG93LmNvbS5ncmVlbnNvY2suVHdlZW5MaXRlIGFuZCBzaW5jZSBpdCdzIGEgZ2xvYmFsIGNsYXNzIHRoYXQgc2hvdWxkIGJlIGF2YWlsYWJsZSBhbnl3aGVyZSxcblx0XHRcdCAqIGl0IGlzIEFMU08gcmVmZXJlbmNlZCBhdCB3aW5kb3cuVHdlZW5MaXRlLiBIb3dldmVyIHNvbWUgY2xhc3NlcyBhcmVuJ3QgY29uc2lkZXJlZCBnbG9iYWwsIGxpa2UgdGhlIGJhc2UgY29tLmdyZWVuc29jay5jb3JlLkFuaW1hdGlvbiBjbGFzcywgc29cblx0XHRcdCAqIHRob3NlIHdpbGwgb25seSBiZSBhdCB0aGUgcGFja2FnZSBsaWtlIHdpbmRvdy5jb20uZ3JlZW5zb2NrLmNvcmUuQW5pbWF0aW9uLiBBZ2FpbiwgaWYgeW91IGRlZmluZSBhIEdyZWVuU29ja0dsb2JhbHMgb2JqZWN0IG9uIHRoZSB3aW5kb3csIGV2ZXJ5dGhpbmdcblx0XHRcdCAqIGdldHMgdHVja2VkIG5lYXRseSBpbnNpZGUgdGhlcmUgaW5zdGVhZCBvZiBvbiB0aGUgd2luZG93IGRpcmVjdGx5LiBUaGlzIGFsbG93cyB5b3UgdG8gZG8gYWR2YW5jZWQgdGhpbmdzIGxpa2UgbG9hZCBtdWx0aXBsZSB2ZXJzaW9ucyBvZiBHcmVlblNvY2tcblx0XHRcdCAqIGZpbGVzIGFuZCBwdXQgdGhlbSBpbnRvIGRpc3RpbmN0IG9iamVjdHMgKGltYWdpbmUgYSBiYW5uZXIgYWQgdXNlcyBhIG5ld2VyIHZlcnNpb24gYnV0IHRoZSBtYWluIHNpdGUgdXNlcyBhbiBvbGRlciBvbmUpLiBJbiB0aGF0IGNhc2UsIHlvdSBjb3VsZFxuXHRcdFx0ICogc2FuZGJveCB0aGUgYmFubmVyIG9uZSBsaWtlOlxuXHRcdFx0ICpcblx0XHRcdCAqIDxzY3JpcHQ+XG5cdFx0XHQgKiAgICAgdmFyIGdzID0gd2luZG93LkdyZWVuU29ja0dsb2JhbHMgPSB7fTsgLy90aGUgbmV3ZXIgdmVyc2lvbiB3ZSdyZSBhYm91dCB0byBsb2FkIGNvdWxkIG5vdyBiZSByZWZlcmVuY2VkIGluIGEgXCJnc1wiIG9iamVjdCwgbGlrZSBncy5Ud2VlbkxpdGUudG8oLi4uKS4gVXNlIHdoYXRldmVyIGFsaWFzIHlvdSB3YW50IGFzIGxvbmcgYXMgaXQncyB1bmlxdWUsIFwiZ3NcIiBvciBcImJhbm5lclwiIG9yIHdoYXRldmVyLlxuXHRcdFx0ICogPC9zY3JpcHQ+XG5cdFx0XHQgKiA8c2NyaXB0IHNyYz1cImpzL2dyZWVuc29jay92MS43L1R3ZWVuTWF4LmpzXCI+PC9zY3JpcHQ+XG5cdFx0XHQgKiA8c2NyaXB0PlxuXHRcdFx0ICogICAgIHdpbmRvdy5HcmVlblNvY2tHbG9iYWxzID0gd2luZG93Ll9nc1F1ZXVlID0gd2luZG93Ll9nc0RlZmluZSA9IG51bGw7IC8vcmVzZXQgaXQgYmFjayB0byBudWxsIChhbG9uZyB3aXRoIHRoZSBzcGVjaWFsIF9nc1F1ZXVlIHZhcmlhYmxlKSBzbyB0aGF0IHRoZSBuZXh0IGxvYWQgb2YgVHdlZW5NYXggYWZmZWN0cyB0aGUgd2luZG93IGFuZCB3ZSBjYW4gcmVmZXJlbmNlIHRoaW5ncyBkaXJlY3RseSBsaWtlIFR3ZWVuTGl0ZS50byguLi4pXG5cdFx0XHQgKiA8L3NjcmlwdD5cblx0XHRcdCAqIDxzY3JpcHQgc3JjPVwianMvZ3JlZW5zb2NrL3YxLjYvVHdlZW5NYXguanNcIj48L3NjcmlwdD5cblx0XHRcdCAqIDxzY3JpcHQ+XG5cdFx0XHQgKiAgICAgZ3MuVHdlZW5MaXRlLnRvKC4uLik7IC8vd291bGQgdXNlIHYxLjdcblx0XHRcdCAqICAgICBUd2VlbkxpdGUudG8oLi4uKTsgLy93b3VsZCB1c2UgdjEuNlxuXHRcdFx0ICogPC9zY3JpcHQ+XG5cdFx0XHQgKlxuXHRcdFx0ICogQHBhcmFtIHshc3RyaW5nfSBucyBUaGUgbmFtZXNwYWNlIG9mIHRoZSBjbGFzcyBkZWZpbml0aW9uLCBsZWF2aW5nIG9mZiBcImNvbS5ncmVlbnNvY2suXCIgYXMgdGhhdCdzIGFzc3VtZWQuIEZvciBleGFtcGxlLCBcIlR3ZWVuTGl0ZVwiIG9yIFwicGx1Z2lucy5DU1NQbHVnaW5cIiBvciBcImVhc2luZy5CYWNrXCIuXG5cdFx0XHQgKiBAcGFyYW0geyFBcnJheS48c3RyaW5nPn0gZGVwZW5kZW5jaWVzIEFuIGFycmF5IG9mIGRlcGVuZGVuY2llcyAoZGVzY3JpYmVkIGFzIHRoZWlyIG5hbWVzcGFjZXMgbWludXMgXCJjb20uZ3JlZW5zb2NrLlwiIHByZWZpeCkuIEZvciBleGFtcGxlIFtcIlR3ZWVuTGl0ZVwiLFwicGx1Z2lucy5Ud2VlblBsdWdpblwiLFwiY29yZS5BbmltYXRpb25cIl1cblx0XHRcdCAqIEBwYXJhbSB7IWZ1bmN0aW9uKCk6T2JqZWN0fSBmdW5jIFRoZSBmdW5jdGlvbiB0aGF0IHNob3VsZCBiZSBjYWxsZWQgYW5kIHBhc3NlZCB0aGUgcmVzb2x2ZWQgZGVwZW5kZW5jaWVzIHdoaWNoIHdpbGwgcmV0dXJuIHRoZSBhY3R1YWwgY2xhc3MgZm9yIHRoaXMgZGVmaW5pdGlvbi5cblx0XHRcdCAqIEBwYXJhbSB7Ym9vbGVhbj19IGdsb2JhbCBJZiB0cnVlLCB0aGUgY2xhc3Mgd2lsbCBiZSBhZGRlZCB0byB0aGUgZ2xvYmFsIHNjb3BlICh0eXBpY2FsbHkgd2luZG93IHVubGVzcyB5b3UgZGVmaW5lIGEgd2luZG93LkdyZWVuU29ja0dsb2JhbHMgb2JqZWN0KVxuXHRcdFx0ICovXG5cdFx0XHREZWZpbml0aW9uID0gZnVuY3Rpb24obnMsIGRlcGVuZGVuY2llcywgZnVuYywgZ2xvYmFsKSB7XG5cdFx0XHRcdHRoaXMuc2MgPSAoX2RlZkxvb2t1cFtuc10pID8gX2RlZkxvb2t1cFtuc10uc2MgOiBbXTsgLy9zdWJjbGFzc2VzXG5cdFx0XHRcdF9kZWZMb29rdXBbbnNdID0gdGhpcztcblx0XHRcdFx0dGhpcy5nc0NsYXNzID0gbnVsbDtcblx0XHRcdFx0dGhpcy5mdW5jID0gZnVuYztcblx0XHRcdFx0dmFyIF9jbGFzc2VzID0gW107XG5cdFx0XHRcdHRoaXMuY2hlY2sgPSBmdW5jdGlvbihpbml0KSB7XG5cdFx0XHRcdFx0dmFyIGkgPSBkZXBlbmRlbmNpZXMubGVuZ3RoLFxuXHRcdFx0XHRcdFx0bWlzc2luZyA9IGksXG5cdFx0XHRcdFx0XHRjdXIsIGEsIG4sIGNsO1xuXHRcdFx0XHRcdHdoaWxlICgtLWkgPiAtMSkge1xuXHRcdFx0XHRcdFx0aWYgKChjdXIgPSBfZGVmTG9va3VwW2RlcGVuZGVuY2llc1tpXV0gfHwgbmV3IERlZmluaXRpb24oZGVwZW5kZW5jaWVzW2ldLCBbXSkpLmdzQ2xhc3MpIHtcblx0XHRcdFx0XHRcdFx0X2NsYXNzZXNbaV0gPSBjdXIuZ3NDbGFzcztcblx0XHRcdFx0XHRcdFx0bWlzc2luZy0tO1xuXHRcdFx0XHRcdFx0fSBlbHNlIGlmIChpbml0KSB7XG5cdFx0XHRcdFx0XHRcdGN1ci5zYy5wdXNoKHRoaXMpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRpZiAobWlzc2luZyA9PT0gMCAmJiBmdW5jKSB7XG5cdFx0XHRcdFx0XHRhID0gKFwiY29tLmdyZWVuc29jay5cIiArIG5zKS5zcGxpdChcIi5cIik7XG5cdFx0XHRcdFx0XHRuID0gYS5wb3AoKTtcblx0XHRcdFx0XHRcdGNsID0gX25hbWVzcGFjZShhLmpvaW4oXCIuXCIpKVtuXSA9IHRoaXMuZ3NDbGFzcyA9IGZ1bmMuYXBwbHkoZnVuYywgX2NsYXNzZXMpO1xuXG5cdFx0XHRcdFx0XHQvL2V4cG9ydHMgdG8gbXVsdGlwbGUgZW52aXJvbm1lbnRzXG5cdFx0XHRcdFx0XHRpZiAoZ2xvYmFsKSB7XG5cdFx0XHRcdFx0XHRcdF9nbG9iYWxzW25dID0gX2V4cG9ydHNbbl0gPSBjbDsgLy9wcm92aWRlcyBhIHdheSB0byBhdm9pZCBnbG9iYWwgbmFtZXNwYWNlIHBvbGx1dGlvbi4gQnkgZGVmYXVsdCwgdGhlIG1haW4gY2xhc3NlcyBsaWtlIFR3ZWVuTGl0ZSwgUG93ZXIxLCBTdHJvbmcsIGV0Yy4gYXJlIGFkZGVkIHRvIHdpbmRvdyB1bmxlc3MgYSBHcmVlblNvY2tHbG9iYWxzIGlzIGRlZmluZWQuIFNvIGlmIHlvdSB3YW50IHRvIGhhdmUgdGhpbmdzIGFkZGVkIHRvIGEgY3VzdG9tIG9iamVjdCBpbnN0ZWFkLCBqdXN0IGRvIHNvbWV0aGluZyBsaWtlIHdpbmRvdy5HcmVlblNvY2tHbG9iYWxzID0ge30gYmVmb3JlIGxvYWRpbmcgYW55IEdyZWVuU29jayBmaWxlcy4gWW91IGNhbiBldmVuIHNldCB1cCBhbiBhbGlhcyBsaWtlIHdpbmRvdy5HcmVlblNvY2tHbG9iYWxzID0gd2luZG93cy5ncyA9IHt9IHNvIHRoYXQgeW91IGNhbiBhY2Nlc3MgZXZlcnl0aGluZyBsaWtlIGdzLlR3ZWVuTGl0ZS4gQWxzbyByZW1lbWJlciB0aGF0IEFMTCBjbGFzc2VzIGFyZSBhZGRlZCB0byB0aGUgd2luZG93LmNvbS5ncmVlbnNvY2sgb2JqZWN0IChpbiB0aGVpciByZXNwZWN0aXZlIHBhY2thZ2VzLCBsaWtlIGNvbS5ncmVlbnNvY2suZWFzaW5nLlBvd2VyMSwgY29tLmdyZWVuc29jay5Ud2VlbkxpdGUsIGV0Yy4pXG5cdFx0XHRcdFx0XHRcdGlmICh0eXBlb2YobW9kdWxlKSAhPT0gXCJ1bmRlZmluZWRcIiAmJiBtb2R1bGUuZXhwb3J0cykgeyAvL25vZGVcblx0XHRcdFx0XHRcdFx0XHRpZiAobnMgPT09IG1vZHVsZU5hbWUpIHtcblx0XHRcdFx0XHRcdFx0XHRcdG1vZHVsZS5leHBvcnRzID0gX2V4cG9ydHNbbW9kdWxlTmFtZV0gPSBjbDtcblx0XHRcdFx0XHRcdFx0XHRcdGZvciAoaSBpbiBfZXhwb3J0cykge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRjbFtpXSA9IF9leHBvcnRzW2ldO1xuXHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdH0gZWxzZSBpZiAoX2V4cG9ydHNbbW9kdWxlTmFtZV0pIHtcblx0XHRcdFx0XHRcdFx0XHRcdF9leHBvcnRzW21vZHVsZU5hbWVdW25dID0gY2w7XG5cdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHR9IGVsc2UgaWYgKHR5cGVvZihkZWZpbmUpID09PSBcImZ1bmN0aW9uXCIgJiYgZGVmaW5lLmFtZCl7IC8vQU1EXG5cdFx0XHRcdFx0XHRcdFx0ZGVmaW5lKCh3aW5kb3cuR3JlZW5Tb2NrQU1EUGF0aCA/IHdpbmRvdy5HcmVlblNvY2tBTURQYXRoICsgXCIvXCIgOiBcIlwiKSArIG5zLnNwbGl0KFwiLlwiKS5wb3AoKSwgW10sIGZ1bmN0aW9uKCkgeyByZXR1cm4gY2w7IH0pO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRmb3IgKGkgPSAwOyBpIDwgdGhpcy5zYy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRcdFx0XHR0aGlzLnNjW2ldLmNoZWNrKCk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9O1xuXHRcdFx0XHR0aGlzLmNoZWNrKHRydWUpO1xuXHRcdFx0fSxcblxuXHRcdFx0Ly91c2VkIHRvIGNyZWF0ZSBEZWZpbml0aW9uIGluc3RhbmNlcyAod2hpY2ggYmFzaWNhbGx5IHJlZ2lzdGVycyBhIGNsYXNzIHRoYXQgaGFzIGRlcGVuZGVuY2llcykuXG5cdFx0XHRfZ3NEZWZpbmUgPSB3aW5kb3cuX2dzRGVmaW5lID0gZnVuY3Rpb24obnMsIGRlcGVuZGVuY2llcywgZnVuYywgZ2xvYmFsKSB7XG5cdFx0XHRcdHJldHVybiBuZXcgRGVmaW5pdGlvbihucywgZGVwZW5kZW5jaWVzLCBmdW5jLCBnbG9iYWwpO1xuXHRcdFx0fSxcblxuXHRcdFx0Ly9hIHF1aWNrIHdheSB0byBjcmVhdGUgYSBjbGFzcyB0aGF0IGRvZXNuJ3QgaGF2ZSBhbnkgZGVwZW5kZW5jaWVzLiBSZXR1cm5zIHRoZSBjbGFzcywgYnV0IGZpcnN0IHJlZ2lzdGVycyBpdCBpbiB0aGUgR3JlZW5Tb2NrIG5hbWVzcGFjZSBzbyB0aGF0IG90aGVyIGNsYXNzZXMgY2FuIGdyYWIgaXQgKG90aGVyIGNsYXNzZXMgbWlnaHQgYmUgZGVwZW5kZW50IG9uIHRoZSBjbGFzcykuXG5cdFx0XHRfY2xhc3MgPSBncy5fY2xhc3MgPSBmdW5jdGlvbihucywgZnVuYywgZ2xvYmFsKSB7XG5cdFx0XHRcdGZ1bmMgPSBmdW5jIHx8IGZ1bmN0aW9uKCkge307XG5cdFx0XHRcdF9nc0RlZmluZShucywgW10sIGZ1bmN0aW9uKCl7IHJldHVybiBmdW5jOyB9LCBnbG9iYWwpO1xuXHRcdFx0XHRyZXR1cm4gZnVuYztcblx0XHRcdH07XG5cblx0XHRfZ3NEZWZpbmUuZ2xvYmFscyA9IF9nbG9iYWxzO1xuXG5cblxuLypcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIEVhc2VcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXHRcdHZhciBfYmFzZVBhcmFtcyA9IFswLCAwLCAxLCAxXSxcblx0XHRcdEVhc2UgPSBfY2xhc3MoXCJlYXNpbmcuRWFzZVwiLCBmdW5jdGlvbihmdW5jLCBleHRyYVBhcmFtcywgdHlwZSwgcG93ZXIpIHtcblx0XHRcdFx0dGhpcy5fZnVuYyA9IGZ1bmM7XG5cdFx0XHRcdHRoaXMuX3R5cGUgPSB0eXBlIHx8IDA7XG5cdFx0XHRcdHRoaXMuX3Bvd2VyID0gcG93ZXIgfHwgMDtcblx0XHRcdFx0dGhpcy5fcGFyYW1zID0gZXh0cmFQYXJhbXMgPyBfYmFzZVBhcmFtcy5jb25jYXQoZXh0cmFQYXJhbXMpIDogX2Jhc2VQYXJhbXM7XG5cdFx0XHR9LCB0cnVlKSxcblx0XHRcdF9lYXNlTWFwID0gRWFzZS5tYXAgPSB7fSxcblx0XHRcdF9lYXNlUmVnID0gRWFzZS5yZWdpc3RlciA9IGZ1bmN0aW9uKGVhc2UsIG5hbWVzLCB0eXBlcywgY3JlYXRlKSB7XG5cdFx0XHRcdHZhciBuYSA9IG5hbWVzLnNwbGl0KFwiLFwiKSxcblx0XHRcdFx0XHRpID0gbmEubGVuZ3RoLFxuXHRcdFx0XHRcdHRhID0gKHR5cGVzIHx8IFwiZWFzZUluLGVhc2VPdXQsZWFzZUluT3V0XCIpLnNwbGl0KFwiLFwiKSxcblx0XHRcdFx0XHRlLCBuYW1lLCBqLCB0eXBlO1xuXHRcdFx0XHR3aGlsZSAoLS1pID4gLTEpIHtcblx0XHRcdFx0XHRuYW1lID0gbmFbaV07XG5cdFx0XHRcdFx0ZSA9IGNyZWF0ZSA/IF9jbGFzcyhcImVhc2luZy5cIituYW1lLCBudWxsLCB0cnVlKSA6IGdzLmVhc2luZ1tuYW1lXSB8fCB7fTtcblx0XHRcdFx0XHRqID0gdGEubGVuZ3RoO1xuXHRcdFx0XHRcdHdoaWxlICgtLWogPiAtMSkge1xuXHRcdFx0XHRcdFx0dHlwZSA9IHRhW2pdO1xuXHRcdFx0XHRcdFx0X2Vhc2VNYXBbbmFtZSArIFwiLlwiICsgdHlwZV0gPSBfZWFzZU1hcFt0eXBlICsgbmFtZV0gPSBlW3R5cGVdID0gZWFzZS5nZXRSYXRpbyA/IGVhc2UgOiBlYXNlW3R5cGVdIHx8IG5ldyBlYXNlKCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9O1xuXG5cdFx0cCA9IEVhc2UucHJvdG90eXBlO1xuXHRcdHAuX2NhbGNFbmQgPSBmYWxzZTtcblx0XHRwLmdldFJhdGlvID0gZnVuY3Rpb24ocCkge1xuXHRcdFx0aWYgKHRoaXMuX2Z1bmMpIHtcblx0XHRcdFx0dGhpcy5fcGFyYW1zWzBdID0gcDtcblx0XHRcdFx0cmV0dXJuIHRoaXMuX2Z1bmMuYXBwbHkobnVsbCwgdGhpcy5fcGFyYW1zKTtcblx0XHRcdH1cblx0XHRcdHZhciB0ID0gdGhpcy5fdHlwZSxcblx0XHRcdFx0cHcgPSB0aGlzLl9wb3dlcixcblx0XHRcdFx0ciA9ICh0ID09PSAxKSA/IDEgLSBwIDogKHQgPT09IDIpID8gcCA6IChwIDwgMC41KSA/IHAgKiAyIDogKDEgLSBwKSAqIDI7XG5cdFx0XHRpZiAocHcgPT09IDEpIHtcblx0XHRcdFx0ciAqPSByO1xuXHRcdFx0fSBlbHNlIGlmIChwdyA9PT0gMikge1xuXHRcdFx0XHRyICo9IHIgKiByO1xuXHRcdFx0fSBlbHNlIGlmIChwdyA9PT0gMykge1xuXHRcdFx0XHRyICo9IHIgKiByICogcjtcblx0XHRcdH0gZWxzZSBpZiAocHcgPT09IDQpIHtcblx0XHRcdFx0ciAqPSByICogciAqIHIgKiByO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuICh0ID09PSAxKSA/IDEgLSByIDogKHQgPT09IDIpID8gciA6IChwIDwgMC41KSA/IHIgLyAyIDogMSAtIChyIC8gMik7XG5cdFx0fTtcblxuXHRcdC8vY3JlYXRlIGFsbCB0aGUgc3RhbmRhcmQgZWFzZXMgbGlrZSBMaW5lYXIsIFF1YWQsIEN1YmljLCBRdWFydCwgUXVpbnQsIFN0cm9uZywgUG93ZXIwLCBQb3dlcjEsIFBvd2VyMiwgUG93ZXIzLCBhbmQgUG93ZXI0IChlYWNoIHdpdGggZWFzZUluLCBlYXNlT3V0LCBhbmQgZWFzZUluT3V0KVxuXHRcdGEgPSBbXCJMaW5lYXJcIixcIlF1YWRcIixcIkN1YmljXCIsXCJRdWFydFwiLFwiUXVpbnQsU3Ryb25nXCJdO1xuXHRcdGkgPSBhLmxlbmd0aDtcblx0XHR3aGlsZSAoLS1pID4gLTEpIHtcblx0XHRcdHAgPSBhW2ldK1wiLFBvd2VyXCIraTtcblx0XHRcdF9lYXNlUmVnKG5ldyBFYXNlKG51bGwsbnVsbCwxLGkpLCBwLCBcImVhc2VPdXRcIiwgdHJ1ZSk7XG5cdFx0XHRfZWFzZVJlZyhuZXcgRWFzZShudWxsLG51bGwsMixpKSwgcCwgXCJlYXNlSW5cIiArICgoaSA9PT0gMCkgPyBcIixlYXNlTm9uZVwiIDogXCJcIikpO1xuXHRcdFx0X2Vhc2VSZWcobmV3IEVhc2UobnVsbCxudWxsLDMsaSksIHAsIFwiZWFzZUluT3V0XCIpO1xuXHRcdH1cblx0XHRfZWFzZU1hcC5saW5lYXIgPSBncy5lYXNpbmcuTGluZWFyLmVhc2VJbjtcblx0XHRfZWFzZU1hcC5zd2luZyA9IGdzLmVhc2luZy5RdWFkLmVhc2VJbk91dDsgLy9mb3IgalF1ZXJ5IGZvbGtzXG5cblxuLypcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIEV2ZW50RGlzcGF0Y2hlclxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cdFx0dmFyIEV2ZW50RGlzcGF0Y2hlciA9IF9jbGFzcyhcImV2ZW50cy5FdmVudERpc3BhdGNoZXJcIiwgZnVuY3Rpb24odGFyZ2V0KSB7XG5cdFx0XHR0aGlzLl9saXN0ZW5lcnMgPSB7fTtcblx0XHRcdHRoaXMuX2V2ZW50VGFyZ2V0ID0gdGFyZ2V0IHx8IHRoaXM7XG5cdFx0fSk7XG5cdFx0cCA9IEV2ZW50RGlzcGF0Y2hlci5wcm90b3R5cGU7XG5cblx0XHRwLmFkZEV2ZW50TGlzdGVuZXIgPSBmdW5jdGlvbih0eXBlLCBjYWxsYmFjaywgc2NvcGUsIHVzZVBhcmFtLCBwcmlvcml0eSkge1xuXHRcdFx0cHJpb3JpdHkgPSBwcmlvcml0eSB8fCAwO1xuXHRcdFx0dmFyIGxpc3QgPSB0aGlzLl9saXN0ZW5lcnNbdHlwZV0sXG5cdFx0XHRcdGluZGV4ID0gMCxcblx0XHRcdFx0bGlzdGVuZXIsIGk7XG5cdFx0XHRpZiAodGhpcyA9PT0gX3RpY2tlciAmJiAhX3RpY2tlckFjdGl2ZSkge1xuXHRcdFx0XHRfdGlja2VyLndha2UoKTtcblx0XHRcdH1cblx0XHRcdGlmIChsaXN0ID09IG51bGwpIHtcblx0XHRcdFx0dGhpcy5fbGlzdGVuZXJzW3R5cGVdID0gbGlzdCA9IFtdO1xuXHRcdFx0fVxuXHRcdFx0aSA9IGxpc3QubGVuZ3RoO1xuXHRcdFx0d2hpbGUgKC0taSA+IC0xKSB7XG5cdFx0XHRcdGxpc3RlbmVyID0gbGlzdFtpXTtcblx0XHRcdFx0aWYgKGxpc3RlbmVyLmMgPT09IGNhbGxiYWNrICYmIGxpc3RlbmVyLnMgPT09IHNjb3BlKSB7XG5cdFx0XHRcdFx0bGlzdC5zcGxpY2UoaSwgMSk7XG5cdFx0XHRcdH0gZWxzZSBpZiAoaW5kZXggPT09IDAgJiYgbGlzdGVuZXIucHIgPCBwcmlvcml0eSkge1xuXHRcdFx0XHRcdGluZGV4ID0gaSArIDE7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdGxpc3Quc3BsaWNlKGluZGV4LCAwLCB7YzpjYWxsYmFjaywgczpzY29wZSwgdXA6dXNlUGFyYW0sIHByOnByaW9yaXR5fSk7XG5cdFx0fTtcblxuXHRcdHAucmVtb3ZlRXZlbnRMaXN0ZW5lciA9IGZ1bmN0aW9uKHR5cGUsIGNhbGxiYWNrKSB7XG5cdFx0XHR2YXIgbGlzdCA9IHRoaXMuX2xpc3RlbmVyc1t0eXBlXSwgaTtcblx0XHRcdGlmIChsaXN0KSB7XG5cdFx0XHRcdGkgPSBsaXN0Lmxlbmd0aDtcblx0XHRcdFx0d2hpbGUgKC0taSA+IC0xKSB7XG5cdFx0XHRcdFx0aWYgKGxpc3RbaV0uYyA9PT0gY2FsbGJhY2spIHtcblx0XHRcdFx0XHRcdGxpc3Quc3BsaWNlKGksIDEpO1xuXHRcdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH07XG5cblx0XHRwLmRpc3BhdGNoRXZlbnQgPSBmdW5jdGlvbih0eXBlKSB7XG5cdFx0XHR2YXIgbGlzdCA9IHRoaXMuX2xpc3RlbmVyc1t0eXBlXSxcblx0XHRcdFx0aSwgdCwgbGlzdGVuZXI7XG5cdFx0XHRpZiAobGlzdCkge1xuXHRcdFx0XHRpID0gbGlzdC5sZW5ndGg7XG5cdFx0XHRcdGlmIChpID4gMSkgeyBcblx0XHRcdFx0XHRsaXN0ID0gbGlzdC5zbGljZSgwKTsgLy9pbiBjYXNlIGFkZEV2ZW50TGlzdGVuZXIoKSBpcyBjYWxsZWQgZnJvbSB3aXRoaW4gYSBsaXN0ZW5lci9jYWxsYmFjayAob3RoZXJ3aXNlIHRoZSBpbmRleCBjb3VsZCBjaGFuZ2UsIHJlc3VsdGluZyBpbiBhIHNraXApXG5cdFx0XHRcdH1cblx0XHRcdFx0dCA9IHRoaXMuX2V2ZW50VGFyZ2V0O1xuXHRcdFx0XHR3aGlsZSAoLS1pID4gLTEpIHtcblx0XHRcdFx0XHRsaXN0ZW5lciA9IGxpc3RbaV07XG5cdFx0XHRcdFx0aWYgKGxpc3RlbmVyKSB7XG5cdFx0XHRcdFx0XHRpZiAobGlzdGVuZXIudXApIHtcblx0XHRcdFx0XHRcdFx0bGlzdGVuZXIuYy5jYWxsKGxpc3RlbmVyLnMgfHwgdCwge3R5cGU6dHlwZSwgdGFyZ2V0OnR9KTtcblx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdGxpc3RlbmVyLmMuY2FsbChsaXN0ZW5lci5zIHx8IHQpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH07XG5cblxuLypcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIFRpY2tlclxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG4gXHRcdHZhciBfcmVxQW5pbUZyYW1lID0gd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSxcblx0XHRcdF9jYW5jZWxBbmltRnJhbWUgPSB3aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWUsXG5cdFx0XHRfZ2V0VGltZSA9IERhdGUubm93IHx8IGZ1bmN0aW9uKCkge3JldHVybiBuZXcgRGF0ZSgpLmdldFRpbWUoKTt9LFxuXHRcdFx0X2xhc3RVcGRhdGUgPSBfZ2V0VGltZSgpO1xuXG5cdFx0Ly9ub3cgdHJ5IHRvIGRldGVybWluZSB0aGUgcmVxdWVzdEFuaW1hdGlvbkZyYW1lIGFuZCBjYW5jZWxBbmltYXRpb25GcmFtZSBmdW5jdGlvbnMgYW5kIGlmIG5vbmUgYXJlIGZvdW5kLCB3ZSdsbCB1c2UgYSBzZXRUaW1lb3V0KCkvY2xlYXJUaW1lb3V0KCkgcG9seWZpbGwuXG5cdFx0YSA9IFtcIm1zXCIsXCJtb3pcIixcIndlYmtpdFwiLFwib1wiXTtcblx0XHRpID0gYS5sZW5ndGg7XG5cdFx0d2hpbGUgKC0taSA+IC0xICYmICFfcmVxQW5pbUZyYW1lKSB7XG5cdFx0XHRfcmVxQW5pbUZyYW1lID0gd2luZG93W2FbaV0gKyBcIlJlcXVlc3RBbmltYXRpb25GcmFtZVwiXTtcblx0XHRcdF9jYW5jZWxBbmltRnJhbWUgPSB3aW5kb3dbYVtpXSArIFwiQ2FuY2VsQW5pbWF0aW9uRnJhbWVcIl0gfHwgd2luZG93W2FbaV0gKyBcIkNhbmNlbFJlcXVlc3RBbmltYXRpb25GcmFtZVwiXTtcblx0XHR9XG5cblx0XHRfY2xhc3MoXCJUaWNrZXJcIiwgZnVuY3Rpb24oZnBzLCB1c2VSQUYpIHtcblx0XHRcdHZhciBfc2VsZiA9IHRoaXMsXG5cdFx0XHRcdF9zdGFydFRpbWUgPSBfZ2V0VGltZSgpLFxuXHRcdFx0XHRfdXNlUkFGID0gKHVzZVJBRiAhPT0gZmFsc2UgJiYgX3JlcUFuaW1GcmFtZSkgPyBcImF1dG9cIiA6IGZhbHNlLFxuXHRcdFx0XHRfbGFnVGhyZXNob2xkID0gNTAwLFxuXHRcdFx0XHRfYWRqdXN0ZWRMYWcgPSAzMyxcblx0XHRcdFx0X3RpY2tXb3JkID0gXCJ0aWNrXCIsIC8vaGVscHMgcmVkdWNlIGdjIGJ1cmRlblxuXHRcdFx0XHRfZnBzLCBfcmVxLCBfaWQsIF9nYXAsIF9uZXh0VGltZSxcblx0XHRcdFx0X3RpY2sgPSBmdW5jdGlvbihtYW51YWwpIHtcblx0XHRcdFx0XHR2YXIgZWxhcHNlZCA9IF9nZXRUaW1lKCkgLSBfbGFzdFVwZGF0ZSxcblx0XHRcdFx0XHRcdG92ZXJsYXAsIGRpc3BhdGNoO1xuXHRcdFx0XHRcdGlmIChlbGFwc2VkID4gX2xhZ1RocmVzaG9sZCkge1xuXHRcdFx0XHRcdFx0X3N0YXJ0VGltZSArPSBlbGFwc2VkIC0gX2FkanVzdGVkTGFnO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRfbGFzdFVwZGF0ZSArPSBlbGFwc2VkO1xuXHRcdFx0XHRcdF9zZWxmLnRpbWUgPSAoX2xhc3RVcGRhdGUgLSBfc3RhcnRUaW1lKSAvIDEwMDA7XG5cdFx0XHRcdFx0b3ZlcmxhcCA9IF9zZWxmLnRpbWUgLSBfbmV4dFRpbWU7XG5cdFx0XHRcdFx0aWYgKCFfZnBzIHx8IG92ZXJsYXAgPiAwIHx8IG1hbnVhbCA9PT0gdHJ1ZSkge1xuXHRcdFx0XHRcdFx0X3NlbGYuZnJhbWUrKztcblx0XHRcdFx0XHRcdF9uZXh0VGltZSArPSBvdmVybGFwICsgKG92ZXJsYXAgPj0gX2dhcCA/IDAuMDA0IDogX2dhcCAtIG92ZXJsYXApO1xuXHRcdFx0XHRcdFx0ZGlzcGF0Y2ggPSB0cnVlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRpZiAobWFudWFsICE9PSB0cnVlKSB7IC8vbWFrZSBzdXJlIHRoZSByZXF1ZXN0IGlzIG1hZGUgYmVmb3JlIHdlIGRpc3BhdGNoIHRoZSBcInRpY2tcIiBldmVudCBzbyB0aGF0IHRpbWluZyBpcyBtYWludGFpbmVkLiBPdGhlcndpc2UsIGlmIHByb2Nlc3NpbmcgdGhlIFwidGlja1wiIHJlcXVpcmVzIGEgYnVuY2ggb2YgdGltZSAobGlrZSAxNW1zKSBhbmQgd2UncmUgdXNpbmcgYSBzZXRUaW1lb3V0KCkgdGhhdCdzIGJhc2VkIG9uIDE2LjdtcywgaXQnZCB0ZWNobmljYWxseSB0YWtlIDMxLjdtcyBiZXR3ZWVuIGZyYW1lcyBvdGhlcndpc2UuXG5cdFx0XHRcdFx0XHRfaWQgPSBfcmVxKF90aWNrKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0aWYgKGRpc3BhdGNoKSB7XG5cdFx0XHRcdFx0XHRfc2VsZi5kaXNwYXRjaEV2ZW50KF90aWNrV29yZCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9O1xuXG5cdFx0XHRFdmVudERpc3BhdGNoZXIuY2FsbChfc2VsZik7XG5cdFx0XHRfc2VsZi50aW1lID0gX3NlbGYuZnJhbWUgPSAwO1xuXHRcdFx0X3NlbGYudGljayA9IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRfdGljayh0cnVlKTtcblx0XHRcdH07XG5cblx0XHRcdF9zZWxmLmxhZ1Ntb290aGluZyA9IGZ1bmN0aW9uKHRocmVzaG9sZCwgYWRqdXN0ZWRMYWcpIHtcblx0XHRcdFx0aWYgKCFhcmd1bWVudHMubGVuZ3RoKSB7IC8vaWYgbGFnU21vb3RoaW5nKCkgaXMgY2FsbGVkIHdpdGggbm8gYXJndW1lbnRzLCB0cmVhdCBpdCBsaWtlIGEgZ2V0dGVyIHRoYXQgcmV0dXJucyBhIGJvb2xlYW4gaW5kaWNhdGluZyBpZiBpdCdzIGVuYWJsZWQgb3Igbm90LiBUaGlzIGlzIHB1cnBvc2VseSB1bmRvY3VtZW50ZWQgYW5kIGlzIGZvciBpbnRlcm5hbCB1c2UuXG5cdFx0XHRcdFx0cmV0dXJuIChfbGFnVGhyZXNob2xkIDwgMSAvIF90aW55TnVtKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRfbGFnVGhyZXNob2xkID0gdGhyZXNob2xkIHx8ICgxIC8gX3RpbnlOdW0pOyAvL3plcm8gc2hvdWxkIGJlIGludGVycHJldGVkIGFzIGJhc2ljYWxseSB1bmxpbWl0ZWRcblx0XHRcdFx0X2FkanVzdGVkTGFnID0gTWF0aC5taW4oYWRqdXN0ZWRMYWcsIF9sYWdUaHJlc2hvbGQsIDApO1xuXHRcdFx0fTtcblxuXHRcdFx0X3NlbGYuc2xlZXAgPSBmdW5jdGlvbigpIHtcblx0XHRcdFx0aWYgKF9pZCA9PSBudWxsKSB7XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmICghX3VzZVJBRiB8fCAhX2NhbmNlbEFuaW1GcmFtZSkge1xuXHRcdFx0XHRcdGNsZWFyVGltZW91dChfaWQpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdF9jYW5jZWxBbmltRnJhbWUoX2lkKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRfcmVxID0gX2VtcHR5RnVuYztcblx0XHRcdFx0X2lkID0gbnVsbDtcblx0XHRcdFx0aWYgKF9zZWxmID09PSBfdGlja2VyKSB7XG5cdFx0XHRcdFx0X3RpY2tlckFjdGl2ZSA9IGZhbHNlO1xuXHRcdFx0XHR9XG5cdFx0XHR9O1xuXG5cdFx0XHRfc2VsZi53YWtlID0gZnVuY3Rpb24oc2VhbWxlc3MpIHtcblx0XHRcdFx0aWYgKF9pZCAhPT0gbnVsbCkge1xuXHRcdFx0XHRcdF9zZWxmLnNsZWVwKCk7XG5cdFx0XHRcdH0gZWxzZSBpZiAoc2VhbWxlc3MpIHtcblx0XHRcdFx0XHRfc3RhcnRUaW1lICs9IC1fbGFzdFVwZGF0ZSArIChfbGFzdFVwZGF0ZSA9IF9nZXRUaW1lKCkpO1xuXHRcdFx0XHR9IGVsc2UgaWYgKF9zZWxmLmZyYW1lID4gMTApIHsgLy9kb24ndCB0cmlnZ2VyIGxhZ1Ntb290aGluZyBpZiB3ZSdyZSBqdXN0IHdha2luZyB1cCwgYW5kIG1ha2Ugc3VyZSB0aGF0IGF0IGxlYXN0IDEwIGZyYW1lcyBoYXZlIGVsYXBzZWQgYmVjYXVzZSBvZiB0aGUgaU9TIGJ1ZyB0aGF0IHdlIHdvcmsgYXJvdW5kIGJlbG93IHdpdGggdGhlIDEuNS1zZWNvbmQgc2V0VGltb3V0KCkuXG5cdFx0XHRcdFx0X2xhc3RVcGRhdGUgPSBfZ2V0VGltZSgpIC0gX2xhZ1RocmVzaG9sZCArIDU7XG5cdFx0XHRcdH1cblx0XHRcdFx0X3JlcSA9IChfZnBzID09PSAwKSA/IF9lbXB0eUZ1bmMgOiAoIV91c2VSQUYgfHwgIV9yZXFBbmltRnJhbWUpID8gZnVuY3Rpb24oZikgeyByZXR1cm4gc2V0VGltZW91dChmLCAoKF9uZXh0VGltZSAtIF9zZWxmLnRpbWUpICogMTAwMCArIDEpIHwgMCk7IH0gOiBfcmVxQW5pbUZyYW1lO1xuXHRcdFx0XHRpZiAoX3NlbGYgPT09IF90aWNrZXIpIHtcblx0XHRcdFx0XHRfdGlja2VyQWN0aXZlID0gdHJ1ZTtcblx0XHRcdFx0fVxuXHRcdFx0XHRfdGljaygyKTtcblx0XHRcdH07XG5cblx0XHRcdF9zZWxmLmZwcyA9IGZ1bmN0aW9uKHZhbHVlKSB7XG5cdFx0XHRcdGlmICghYXJndW1lbnRzLmxlbmd0aCkge1xuXHRcdFx0XHRcdHJldHVybiBfZnBzO1xuXHRcdFx0XHR9XG5cdFx0XHRcdF9mcHMgPSB2YWx1ZTtcblx0XHRcdFx0X2dhcCA9IDEgLyAoX2ZwcyB8fCA2MCk7XG5cdFx0XHRcdF9uZXh0VGltZSA9IHRoaXMudGltZSArIF9nYXA7XG5cdFx0XHRcdF9zZWxmLndha2UoKTtcblx0XHRcdH07XG5cblx0XHRcdF9zZWxmLnVzZVJBRiA9IGZ1bmN0aW9uKHZhbHVlKSB7XG5cdFx0XHRcdGlmICghYXJndW1lbnRzLmxlbmd0aCkge1xuXHRcdFx0XHRcdHJldHVybiBfdXNlUkFGO1xuXHRcdFx0XHR9XG5cdFx0XHRcdF9zZWxmLnNsZWVwKCk7XG5cdFx0XHRcdF91c2VSQUYgPSB2YWx1ZTtcblx0XHRcdFx0X3NlbGYuZnBzKF9mcHMpO1xuXHRcdFx0fTtcblx0XHRcdF9zZWxmLmZwcyhmcHMpO1xuXG5cdFx0XHQvL2EgYnVnIGluIGlPUyA2IFNhZmFyaSBvY2Nhc2lvbmFsbHkgcHJldmVudHMgdGhlIHJlcXVlc3RBbmltYXRpb25GcmFtZSBmcm9tIHdvcmtpbmcgaW5pdGlhbGx5LCBzbyB3ZSB1c2UgYSAxLjUtc2Vjb25kIHRpbWVvdXQgdGhhdCBhdXRvbWF0aWNhbGx5IGZhbGxzIGJhY2sgdG8gc2V0VGltZW91dCgpIGlmIGl0IHNlbnNlcyB0aGlzIGNvbmRpdGlvbi5cblx0XHRcdHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG5cdFx0XHRcdGlmIChfdXNlUkFGID09PSBcImF1dG9cIiAmJiBfc2VsZi5mcmFtZSA8IDUgJiYgKF9kb2MgfHwge30pLnZpc2liaWxpdHlTdGF0ZSAhPT0gXCJoaWRkZW5cIikge1xuXHRcdFx0XHRcdF9zZWxmLnVzZVJBRihmYWxzZSk7XG5cdFx0XHRcdH1cblx0XHRcdH0sIDE1MDApO1xuXHRcdH0pO1xuXG5cdFx0cCA9IGdzLlRpY2tlci5wcm90b3R5cGUgPSBuZXcgZ3MuZXZlbnRzLkV2ZW50RGlzcGF0Y2hlcigpO1xuXHRcdHAuY29uc3RydWN0b3IgPSBncy5UaWNrZXI7XG5cblxuLypcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIEFuaW1hdGlvblxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cdFx0dmFyIEFuaW1hdGlvbiA9IF9jbGFzcyhcImNvcmUuQW5pbWF0aW9uXCIsIGZ1bmN0aW9uKGR1cmF0aW9uLCB2YXJzKSB7XG5cdFx0XHRcdHRoaXMudmFycyA9IHZhcnMgPSB2YXJzIHx8IHt9O1xuXHRcdFx0XHR0aGlzLl9kdXJhdGlvbiA9IHRoaXMuX3RvdGFsRHVyYXRpb24gPSBkdXJhdGlvbiB8fCAwO1xuXHRcdFx0XHR0aGlzLl9kZWxheSA9IE51bWJlcih2YXJzLmRlbGF5KSB8fCAwO1xuXHRcdFx0XHR0aGlzLl90aW1lU2NhbGUgPSAxO1xuXHRcdFx0XHR0aGlzLl9hY3RpdmUgPSAodmFycy5pbW1lZGlhdGVSZW5kZXIgPT09IHRydWUpO1xuXHRcdFx0XHR0aGlzLmRhdGEgPSB2YXJzLmRhdGE7XG5cdFx0XHRcdHRoaXMuX3JldmVyc2VkID0gKHZhcnMucmV2ZXJzZWQgPT09IHRydWUpO1xuXG5cdFx0XHRcdGlmICghX3Jvb3RUaW1lbGluZSkge1xuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoIV90aWNrZXJBY3RpdmUpIHsgLy9zb21lIGJyb3dzZXJzIChsaWtlIGlPUyA2IFNhZmFyaSkgc2h1dCBkb3duIEphdmFTY3JpcHQgZXhlY3V0aW9uIHdoZW4gdGhlIHRhYiBpcyBkaXNhYmxlZCBhbmQgdGhleSBbb2NjYXNpb25hbGx5XSBuZWdsZWN0IHRvIHN0YXJ0IHVwIHJlcXVlc3RBbmltYXRpb25GcmFtZSBhZ2FpbiB3aGVuIHJldHVybmluZyAtIHRoaXMgY29kZSBlbnN1cmVzIHRoYXQgdGhlIGVuZ2luZSBzdGFydHMgdXAgYWdhaW4gcHJvcGVybHkuXG5cdFx0XHRcdFx0X3RpY2tlci53YWtlKCk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHR2YXIgdGwgPSB0aGlzLnZhcnMudXNlRnJhbWVzID8gX3Jvb3RGcmFtZXNUaW1lbGluZSA6IF9yb290VGltZWxpbmU7XG5cdFx0XHRcdHRsLmFkZCh0aGlzLCB0bC5fdGltZSk7XG5cblx0XHRcdFx0aWYgKHRoaXMudmFycy5wYXVzZWQpIHtcblx0XHRcdFx0XHR0aGlzLnBhdXNlZCh0cnVlKTtcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cblx0XHRfdGlja2VyID0gQW5pbWF0aW9uLnRpY2tlciA9IG5ldyBncy5UaWNrZXIoKTtcblx0XHRwID0gQW5pbWF0aW9uLnByb3RvdHlwZTtcblx0XHRwLl9kaXJ0eSA9IHAuX2djID0gcC5faW5pdHRlZCA9IHAuX3BhdXNlZCA9IGZhbHNlO1xuXHRcdHAuX3RvdGFsVGltZSA9IHAuX3RpbWUgPSAwO1xuXHRcdHAuX3Jhd1ByZXZUaW1lID0gLTE7XG5cdFx0cC5fbmV4dCA9IHAuX2xhc3QgPSBwLl9vblVwZGF0ZSA9IHAuX3RpbWVsaW5lID0gcC50aW1lbGluZSA9IG51bGw7XG5cdFx0cC5fcGF1c2VkID0gZmFsc2U7XG5cblxuXHRcdC8vc29tZSBicm93c2VycyAobGlrZSBpT1MpIG9jY2FzaW9uYWxseSBkcm9wIHRoZSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUgZXZlbnQgd2hlbiB0aGUgdXNlciBzd2l0Y2hlcyB0byBhIGRpZmZlcmVudCB0YWIgYW5kIHRoZW4gY29tZXMgYmFjayBhZ2Fpbiwgc28gd2UgdXNlIGEgMi1zZWNvbmQgc2V0VGltZW91dCgpIHRvIHNlbnNlIGlmL3doZW4gdGhhdCBjb25kaXRpb24gb2NjdXJzIGFuZCB0aGVuIHdha2UoKSB0aGUgdGlja2VyLlxuXHRcdHZhciBfY2hlY2tUaW1lb3V0ID0gZnVuY3Rpb24oKSB7XG5cdFx0XHRcdGlmIChfdGlja2VyQWN0aXZlICYmIF9nZXRUaW1lKCkgLSBfbGFzdFVwZGF0ZSA+IDIwMDAgJiYgKChfZG9jIHx8IHt9KS52aXNpYmlsaXR5U3RhdGUgIT09IFwiaGlkZGVuXCIgfHwgIV90aWNrZXIubGFnU21vb3RoaW5nKCkpKSB7IC8vbm90ZTogaWYgdGhlIHRhYiBpcyBoaWRkZW4sIHdlIHNob3VsZCBzdGlsbCB3YWtlIGlmIGxhZ1Ntb290aGluZyBoYXMgYmVlbiBkaXNhYmxlZC5cblx0XHRcdFx0XHRfdGlja2VyLndha2UoKTtcblx0XHRcdFx0fVxuXHRcdFx0XHR2YXIgdCA9IHNldFRpbWVvdXQoX2NoZWNrVGltZW91dCwgMjAwMCk7XG5cdFx0XHRcdGlmICh0LnVucmVmKSB7XG5cdFx0XHRcdFx0Ly8gYWxsb3dzIGEgbm9kZSBwcm9jZXNzIHRvIGV4aXQgZXZlbiBpZiB0aGUgdGltZW91dOKAmXMgY2FsbGJhY2sgaGFzbid0IGJlZW4gaW52b2tlZC4gV2l0aG91dCBpdCwgdGhlIG5vZGUgcHJvY2VzcyBjb3VsZCBoYW5nIGFzIHRoaXMgZnVuY3Rpb24gaXMgY2FsbGVkIGV2ZXJ5IHR3byBzZWNvbmRzLlxuXHRcdFx0XHRcdHQudW5yZWYoKTtcblx0XHRcdFx0fVxuXHRcdFx0fTtcblx0XHRfY2hlY2tUaW1lb3V0KCk7XG5cblxuXHRcdHAucGxheSA9IGZ1bmN0aW9uKGZyb20sIHN1cHByZXNzRXZlbnRzKSB7XG5cdFx0XHRpZiAoZnJvbSAhPSBudWxsKSB7XG5cdFx0XHRcdHRoaXMuc2Vlayhmcm9tLCBzdXBwcmVzc0V2ZW50cyk7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gdGhpcy5yZXZlcnNlZChmYWxzZSkucGF1c2VkKGZhbHNlKTtcblx0XHR9O1xuXG5cdFx0cC5wYXVzZSA9IGZ1bmN0aW9uKGF0VGltZSwgc3VwcHJlc3NFdmVudHMpIHtcblx0XHRcdGlmIChhdFRpbWUgIT0gbnVsbCkge1xuXHRcdFx0XHR0aGlzLnNlZWsoYXRUaW1lLCBzdXBwcmVzc0V2ZW50cyk7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gdGhpcy5wYXVzZWQodHJ1ZSk7XG5cdFx0fTtcblxuXHRcdHAucmVzdW1lID0gZnVuY3Rpb24oZnJvbSwgc3VwcHJlc3NFdmVudHMpIHtcblx0XHRcdGlmIChmcm9tICE9IG51bGwpIHtcblx0XHRcdFx0dGhpcy5zZWVrKGZyb20sIHN1cHByZXNzRXZlbnRzKTtcblx0XHRcdH1cblx0XHRcdHJldHVybiB0aGlzLnBhdXNlZChmYWxzZSk7XG5cdFx0fTtcblxuXHRcdHAuc2VlayA9IGZ1bmN0aW9uKHRpbWUsIHN1cHByZXNzRXZlbnRzKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy50b3RhbFRpbWUoTnVtYmVyKHRpbWUpLCBzdXBwcmVzc0V2ZW50cyAhPT0gZmFsc2UpO1xuXHRcdH07XG5cblx0XHRwLnJlc3RhcnQgPSBmdW5jdGlvbihpbmNsdWRlRGVsYXksIHN1cHByZXNzRXZlbnRzKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5yZXZlcnNlZChmYWxzZSkucGF1c2VkKGZhbHNlKS50b3RhbFRpbWUoaW5jbHVkZURlbGF5ID8gLXRoaXMuX2RlbGF5IDogMCwgKHN1cHByZXNzRXZlbnRzICE9PSBmYWxzZSksIHRydWUpO1xuXHRcdH07XG5cblx0XHRwLnJldmVyc2UgPSBmdW5jdGlvbihmcm9tLCBzdXBwcmVzc0V2ZW50cykge1xuXHRcdFx0aWYgKGZyb20gIT0gbnVsbCkge1xuXHRcdFx0XHR0aGlzLnNlZWsoKGZyb20gfHwgdGhpcy50b3RhbER1cmF0aW9uKCkpLCBzdXBwcmVzc0V2ZW50cyk7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gdGhpcy5yZXZlcnNlZCh0cnVlKS5wYXVzZWQoZmFsc2UpO1xuXHRcdH07XG5cblx0XHRwLnJlbmRlciA9IGZ1bmN0aW9uKHRpbWUsIHN1cHByZXNzRXZlbnRzLCBmb3JjZSkge1xuXHRcdFx0Ly9zdHViIC0gd2Ugb3ZlcnJpZGUgdGhpcyBtZXRob2QgaW4gc3ViY2xhc3Nlcy5cblx0XHR9O1xuXG5cdFx0cC5pbnZhbGlkYXRlID0gZnVuY3Rpb24oKSB7XG5cdFx0XHR0aGlzLl90aW1lID0gdGhpcy5fdG90YWxUaW1lID0gMDtcblx0XHRcdHRoaXMuX2luaXR0ZWQgPSB0aGlzLl9nYyA9IGZhbHNlO1xuXHRcdFx0dGhpcy5fcmF3UHJldlRpbWUgPSAtMTtcblx0XHRcdGlmICh0aGlzLl9nYyB8fCAhdGhpcy50aW1lbGluZSkge1xuXHRcdFx0XHR0aGlzLl9lbmFibGVkKHRydWUpO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0fTtcblxuXHRcdHAuaXNBY3RpdmUgPSBmdW5jdGlvbigpIHtcblx0XHRcdHZhciB0bCA9IHRoaXMuX3RpbWVsaW5lLCAvL3RoZSAyIHJvb3QgdGltZWxpbmVzIHdvbid0IGhhdmUgYSBfdGltZWxpbmU7IHRoZXkncmUgYWx3YXlzIGFjdGl2ZS5cblx0XHRcdFx0c3RhcnRUaW1lID0gdGhpcy5fc3RhcnRUaW1lLFxuXHRcdFx0XHRyYXdUaW1lO1xuXHRcdFx0cmV0dXJuICghdGwgfHwgKCF0aGlzLl9nYyAmJiAhdGhpcy5fcGF1c2VkICYmIHRsLmlzQWN0aXZlKCkgJiYgKHJhd1RpbWUgPSB0bC5yYXdUaW1lKHRydWUpKSA+PSBzdGFydFRpbWUgJiYgcmF3VGltZSA8IHN0YXJ0VGltZSArIHRoaXMudG90YWxEdXJhdGlvbigpIC8gdGhpcy5fdGltZVNjYWxlIC0gMC4wMDAwMDAxKSk7XG5cdFx0fTtcblxuXHRcdHAuX2VuYWJsZWQgPSBmdW5jdGlvbiAoZW5hYmxlZCwgaWdub3JlVGltZWxpbmUpIHtcblx0XHRcdGlmICghX3RpY2tlckFjdGl2ZSkge1xuXHRcdFx0XHRfdGlja2VyLndha2UoKTtcblx0XHRcdH1cblx0XHRcdHRoaXMuX2djID0gIWVuYWJsZWQ7XG5cdFx0XHR0aGlzLl9hY3RpdmUgPSB0aGlzLmlzQWN0aXZlKCk7XG5cdFx0XHRpZiAoaWdub3JlVGltZWxpbmUgIT09IHRydWUpIHtcblx0XHRcdFx0aWYgKGVuYWJsZWQgJiYgIXRoaXMudGltZWxpbmUpIHtcblx0XHRcdFx0XHR0aGlzLl90aW1lbGluZS5hZGQodGhpcywgdGhpcy5fc3RhcnRUaW1lIC0gdGhpcy5fZGVsYXkpO1xuXHRcdFx0XHR9IGVsc2UgaWYgKCFlbmFibGVkICYmIHRoaXMudGltZWxpbmUpIHtcblx0XHRcdFx0XHR0aGlzLl90aW1lbGluZS5fcmVtb3ZlKHRoaXMsIHRydWUpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fTtcblxuXG5cdFx0cC5fa2lsbCA9IGZ1bmN0aW9uKHZhcnMsIHRhcmdldCkge1xuXHRcdFx0cmV0dXJuIHRoaXMuX2VuYWJsZWQoZmFsc2UsIGZhbHNlKTtcblx0XHR9O1xuXG5cdFx0cC5raWxsID0gZnVuY3Rpb24odmFycywgdGFyZ2V0KSB7XG5cdFx0XHR0aGlzLl9raWxsKHZhcnMsIHRhcmdldCk7XG5cdFx0XHRyZXR1cm4gdGhpcztcblx0XHR9O1xuXG5cdFx0cC5fdW5jYWNoZSA9IGZ1bmN0aW9uKGluY2x1ZGVTZWxmKSB7XG5cdFx0XHR2YXIgdHdlZW4gPSBpbmNsdWRlU2VsZiA/IHRoaXMgOiB0aGlzLnRpbWVsaW5lO1xuXHRcdFx0d2hpbGUgKHR3ZWVuKSB7XG5cdFx0XHRcdHR3ZWVuLl9kaXJ0eSA9IHRydWU7XG5cdFx0XHRcdHR3ZWVuID0gdHdlZW4udGltZWxpbmU7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gdGhpcztcblx0XHR9O1xuXG5cdFx0cC5fc3dhcFNlbGZJblBhcmFtcyA9IGZ1bmN0aW9uKHBhcmFtcykge1xuXHRcdFx0dmFyIGkgPSBwYXJhbXMubGVuZ3RoLFxuXHRcdFx0XHRjb3B5ID0gcGFyYW1zLmNvbmNhdCgpO1xuXHRcdFx0d2hpbGUgKC0taSA+IC0xKSB7XG5cdFx0XHRcdGlmIChwYXJhbXNbaV0gPT09IFwie3NlbGZ9XCIpIHtcblx0XHRcdFx0XHRjb3B5W2ldID0gdGhpcztcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIGNvcHk7XG5cdFx0fTtcblxuXHRcdHAuX2NhbGxiYWNrID0gZnVuY3Rpb24odHlwZSkge1xuXHRcdFx0dmFyIHYgPSB0aGlzLnZhcnMsXG5cdFx0XHRcdGNhbGxiYWNrID0gdlt0eXBlXSxcblx0XHRcdFx0cGFyYW1zID0gdlt0eXBlICsgXCJQYXJhbXNcIl0sXG5cdFx0XHRcdHNjb3BlID0gdlt0eXBlICsgXCJTY29wZVwiXSB8fCB2LmNhbGxiYWNrU2NvcGUgfHwgdGhpcyxcblx0XHRcdFx0bCA9IHBhcmFtcyA/IHBhcmFtcy5sZW5ndGggOiAwO1xuXHRcdFx0c3dpdGNoIChsKSB7IC8vc3BlZWQgb3B0aW1pemF0aW9uOyBjYWxsKCkgaXMgZmFzdGVyIHRoYW4gYXBwbHkoKSBzbyB1c2UgaXQgd2hlbiB0aGVyZSBhcmUgb25seSBhIGZldyBwYXJhbWV0ZXJzICh3aGljaCBpcyBieSBmYXIgbW9zdCBjb21tb24pLiBQcmV2aW91c2x5IHdlIHNpbXBseSBkaWQgdmFyIHYgPSB0aGlzLnZhcnM7IHZbdHlwZV0uYXBwbHkodlt0eXBlICsgXCJTY29wZVwiXSB8fCB2LmNhbGxiYWNrU2NvcGUgfHwgdGhpcywgdlt0eXBlICsgXCJQYXJhbXNcIl0gfHwgX2JsYW5rQXJyYXkpO1xuXHRcdFx0XHRjYXNlIDA6IGNhbGxiYWNrLmNhbGwoc2NvcGUpOyBicmVhaztcblx0XHRcdFx0Y2FzZSAxOiBjYWxsYmFjay5jYWxsKHNjb3BlLCBwYXJhbXNbMF0pOyBicmVhaztcblx0XHRcdFx0Y2FzZSAyOiBjYWxsYmFjay5jYWxsKHNjb3BlLCBwYXJhbXNbMF0sIHBhcmFtc1sxXSk7IGJyZWFrO1xuXHRcdFx0XHRkZWZhdWx0OiBjYWxsYmFjay5hcHBseShzY29wZSwgcGFyYW1zKTtcblx0XHRcdH1cblx0XHR9O1xuXG4vLy0tLS1BbmltYXRpb24gZ2V0dGVycy9zZXR0ZXJzIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cblx0XHRwLmV2ZW50Q2FsbGJhY2sgPSBmdW5jdGlvbih0eXBlLCBjYWxsYmFjaywgcGFyYW1zLCBzY29wZSkge1xuXHRcdFx0aWYgKCh0eXBlIHx8IFwiXCIpLnN1YnN0cigwLDIpID09PSBcIm9uXCIpIHtcblx0XHRcdFx0dmFyIHYgPSB0aGlzLnZhcnM7XG5cdFx0XHRcdGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAxKSB7XG5cdFx0XHRcdFx0cmV0dXJuIHZbdHlwZV07XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKGNhbGxiYWNrID09IG51bGwpIHtcblx0XHRcdFx0XHRkZWxldGUgdlt0eXBlXTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHR2W3R5cGVdID0gY2FsbGJhY2s7XG5cdFx0XHRcdFx0dlt0eXBlICsgXCJQYXJhbXNcIl0gPSAoX2lzQXJyYXkocGFyYW1zKSAmJiBwYXJhbXMuam9pbihcIlwiKS5pbmRleE9mKFwie3NlbGZ9XCIpICE9PSAtMSkgPyB0aGlzLl9zd2FwU2VsZkluUGFyYW1zKHBhcmFtcykgOiBwYXJhbXM7XG5cdFx0XHRcdFx0dlt0eXBlICsgXCJTY29wZVwiXSA9IHNjb3BlO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmICh0eXBlID09PSBcIm9uVXBkYXRlXCIpIHtcblx0XHRcdFx0XHR0aGlzLl9vblVwZGF0ZSA9IGNhbGxiYWNrO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gdGhpcztcblx0XHR9O1xuXG5cdFx0cC5kZWxheSA9IGZ1bmN0aW9uKHZhbHVlKSB7XG5cdFx0XHRpZiAoIWFyZ3VtZW50cy5sZW5ndGgpIHtcblx0XHRcdFx0cmV0dXJuIHRoaXMuX2RlbGF5O1xuXHRcdFx0fVxuXHRcdFx0aWYgKHRoaXMuX3RpbWVsaW5lLnNtb290aENoaWxkVGltaW5nKSB7XG5cdFx0XHRcdHRoaXMuc3RhcnRUaW1lKCB0aGlzLl9zdGFydFRpbWUgKyB2YWx1ZSAtIHRoaXMuX2RlbGF5ICk7XG5cdFx0XHR9XG5cdFx0XHR0aGlzLl9kZWxheSA9IHZhbHVlO1xuXHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0fTtcblxuXHRcdHAuZHVyYXRpb24gPSBmdW5jdGlvbih2YWx1ZSkge1xuXHRcdFx0aWYgKCFhcmd1bWVudHMubGVuZ3RoKSB7XG5cdFx0XHRcdHRoaXMuX2RpcnR5ID0gZmFsc2U7XG5cdFx0XHRcdHJldHVybiB0aGlzLl9kdXJhdGlvbjtcblx0XHRcdH1cblx0XHRcdHRoaXMuX2R1cmF0aW9uID0gdGhpcy5fdG90YWxEdXJhdGlvbiA9IHZhbHVlO1xuXHRcdFx0dGhpcy5fdW5jYWNoZSh0cnVlKTsgLy90cnVlIGluIGNhc2UgaXQncyBhIFR3ZWVuTWF4IG9yIFRpbWVsaW5lTWF4IHRoYXQgaGFzIGEgcmVwZWF0IC0gd2UnbGwgbmVlZCB0byByZWZyZXNoIHRoZSB0b3RhbER1cmF0aW9uLlxuXHRcdFx0aWYgKHRoaXMuX3RpbWVsaW5lLnNtb290aENoaWxkVGltaW5nKSBpZiAodGhpcy5fdGltZSA+IDApIGlmICh0aGlzLl90aW1lIDwgdGhpcy5fZHVyYXRpb24pIGlmICh2YWx1ZSAhPT0gMCkge1xuXHRcdFx0XHR0aGlzLnRvdGFsVGltZSh0aGlzLl90b3RhbFRpbWUgKiAodmFsdWUgLyB0aGlzLl9kdXJhdGlvbiksIHRydWUpO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0fTtcblxuXHRcdHAudG90YWxEdXJhdGlvbiA9IGZ1bmN0aW9uKHZhbHVlKSB7XG5cdFx0XHR0aGlzLl9kaXJ0eSA9IGZhbHNlO1xuXHRcdFx0cmV0dXJuICghYXJndW1lbnRzLmxlbmd0aCkgPyB0aGlzLl90b3RhbER1cmF0aW9uIDogdGhpcy5kdXJhdGlvbih2YWx1ZSk7XG5cdFx0fTtcblxuXHRcdHAudGltZSA9IGZ1bmN0aW9uKHZhbHVlLCBzdXBwcmVzc0V2ZW50cykge1xuXHRcdFx0aWYgKCFhcmd1bWVudHMubGVuZ3RoKSB7XG5cdFx0XHRcdHJldHVybiB0aGlzLl90aW1lO1xuXHRcdFx0fVxuXHRcdFx0aWYgKHRoaXMuX2RpcnR5KSB7XG5cdFx0XHRcdHRoaXMudG90YWxEdXJhdGlvbigpO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIHRoaXMudG90YWxUaW1lKCh2YWx1ZSA+IHRoaXMuX2R1cmF0aW9uKSA/IHRoaXMuX2R1cmF0aW9uIDogdmFsdWUsIHN1cHByZXNzRXZlbnRzKTtcblx0XHR9O1xuXG5cdFx0cC50b3RhbFRpbWUgPSBmdW5jdGlvbih0aW1lLCBzdXBwcmVzc0V2ZW50cywgdW5jYXBwZWQpIHtcblx0XHRcdGlmICghX3RpY2tlckFjdGl2ZSkge1xuXHRcdFx0XHRfdGlja2VyLndha2UoKTtcblx0XHRcdH1cblx0XHRcdGlmICghYXJndW1lbnRzLmxlbmd0aCkge1xuXHRcdFx0XHRyZXR1cm4gdGhpcy5fdG90YWxUaW1lO1xuXHRcdFx0fVxuXHRcdFx0aWYgKHRoaXMuX3RpbWVsaW5lKSB7XG5cdFx0XHRcdGlmICh0aW1lIDwgMCAmJiAhdW5jYXBwZWQpIHtcblx0XHRcdFx0XHR0aW1lICs9IHRoaXMudG90YWxEdXJhdGlvbigpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmICh0aGlzLl90aW1lbGluZS5zbW9vdGhDaGlsZFRpbWluZykge1xuXHRcdFx0XHRcdGlmICh0aGlzLl9kaXJ0eSkge1xuXHRcdFx0XHRcdFx0dGhpcy50b3RhbER1cmF0aW9uKCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHZhciB0b3RhbER1cmF0aW9uID0gdGhpcy5fdG90YWxEdXJhdGlvbixcblx0XHRcdFx0XHRcdHRsID0gdGhpcy5fdGltZWxpbmU7XG5cdFx0XHRcdFx0aWYgKHRpbWUgPiB0b3RhbER1cmF0aW9uICYmICF1bmNhcHBlZCkge1xuXHRcdFx0XHRcdFx0dGltZSA9IHRvdGFsRHVyYXRpb247XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHRoaXMuX3N0YXJ0VGltZSA9ICh0aGlzLl9wYXVzZWQgPyB0aGlzLl9wYXVzZVRpbWUgOiB0bC5fdGltZSkgLSAoKCF0aGlzLl9yZXZlcnNlZCA/IHRpbWUgOiB0b3RhbER1cmF0aW9uIC0gdGltZSkgLyB0aGlzLl90aW1lU2NhbGUpO1xuXHRcdFx0XHRcdGlmICghdGwuX2RpcnR5KSB7IC8vZm9yIHBlcmZvcm1hbmNlIGltcHJvdmVtZW50LiBJZiB0aGUgcGFyZW50J3MgY2FjaGUgaXMgYWxyZWFkeSBkaXJ0eSwgaXQgYWxyZWFkeSB0b29rIGNhcmUgb2YgbWFya2luZyB0aGUgYW5jZXN0b3JzIGFzIGRpcnR5IHRvbywgc28gc2tpcCB0aGUgZnVuY3Rpb24gY2FsbCBoZXJlLlxuXHRcdFx0XHRcdFx0dGhpcy5fdW5jYWNoZShmYWxzZSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdC8vaW4gY2FzZSBhbnkgb2YgdGhlIGFuY2VzdG9yIHRpbWVsaW5lcyBoYWQgY29tcGxldGVkIGJ1dCBzaG91bGQgbm93IGJlIGVuYWJsZWQsIHdlIHNob3VsZCByZXNldCB0aGVpciB0b3RhbFRpbWUoKSB3aGljaCB3aWxsIGFsc28gZW5zdXJlIHRoYXQgdGhleSdyZSBsaW5lZCB1cCBwcm9wZXJseSBhbmQgZW5hYmxlZC4gU2tpcCBmb3IgYW5pbWF0aW9ucyB0aGF0IGFyZSBvbiB0aGUgcm9vdCAod2FzdGVmdWwpLiBFeGFtcGxlOiBhIFRpbWVsaW5lTGl0ZS5leHBvcnRSb290KCkgaXMgcGVyZm9ybWVkIHdoZW4gdGhlcmUncyBhIHBhdXNlZCB0d2VlbiBvbiB0aGUgcm9vdCwgdGhlIGV4cG9ydCB3aWxsIG5vdCBjb21wbGV0ZSB1bnRpbCB0aGF0IHR3ZWVuIGlzIHVucGF1c2VkLCBidXQgaW1hZ2luZSBhIGNoaWxkIGdldHMgcmVzdGFydGVkIGxhdGVyLCBhZnRlciBhbGwgW3VucGF1c2VkXSB0d2VlbnMgaGF2ZSBjb21wbGV0ZWQuIFRoZSBzdGFydFRpbWUgb2YgdGhhdCBjaGlsZCB3b3VsZCBnZXQgcHVzaGVkIG91dCwgYnV0IG9uZSBvZiB0aGUgYW5jZXN0b3JzIG1heSBoYXZlIGNvbXBsZXRlZC5cblx0XHRcdFx0XHRpZiAodGwuX3RpbWVsaW5lKSB7XG5cdFx0XHRcdFx0XHR3aGlsZSAodGwuX3RpbWVsaW5lKSB7XG5cdFx0XHRcdFx0XHRcdGlmICh0bC5fdGltZWxpbmUuX3RpbWUgIT09ICh0bC5fc3RhcnRUaW1lICsgdGwuX3RvdGFsVGltZSkgLyB0bC5fdGltZVNjYWxlKSB7XG5cdFx0XHRcdFx0XHRcdFx0dGwudG90YWxUaW1lKHRsLl90b3RhbFRpbWUsIHRydWUpO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdHRsID0gdGwuX3RpbWVsaW5lO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAodGhpcy5fZ2MpIHtcblx0XHRcdFx0XHR0aGlzLl9lbmFibGVkKHRydWUsIGZhbHNlKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAodGhpcy5fdG90YWxUaW1lICE9PSB0aW1lIHx8IHRoaXMuX2R1cmF0aW9uID09PSAwKSB7XG5cdFx0XHRcdFx0aWYgKF9sYXp5VHdlZW5zLmxlbmd0aCkge1xuXHRcdFx0XHRcdFx0X2xhenlSZW5kZXIoKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0dGhpcy5yZW5kZXIodGltZSwgc3VwcHJlc3NFdmVudHMsIGZhbHNlKTtcblx0XHRcdFx0XHRpZiAoX2xhenlUd2VlbnMubGVuZ3RoKSB7IC8vaW4gY2FzZSByZW5kZXJpbmcgY2F1c2VkIGFueSB0d2VlbnMgdG8gbGF6eS1pbml0LCB3ZSBzaG91bGQgcmVuZGVyIHRoZW0gYmVjYXVzZSB0eXBpY2FsbHkgd2hlbiBzb21lb25lIGNhbGxzIHNlZWsoKSBvciB0aW1lKCkgb3IgcHJvZ3Jlc3MoKSwgdGhleSBleHBlY3QgYW4gaW1tZWRpYXRlIHJlbmRlci5cblx0XHRcdFx0XHRcdF9sYXp5UmVuZGVyKCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gdGhpcztcblx0XHR9O1xuXG5cdFx0cC5wcm9ncmVzcyA9IHAudG90YWxQcm9ncmVzcyA9IGZ1bmN0aW9uKHZhbHVlLCBzdXBwcmVzc0V2ZW50cykge1xuXHRcdFx0dmFyIGR1cmF0aW9uID0gdGhpcy5kdXJhdGlvbigpO1xuXHRcdFx0cmV0dXJuICghYXJndW1lbnRzLmxlbmd0aCkgPyAoZHVyYXRpb24gPyB0aGlzLl90aW1lIC8gZHVyYXRpb24gOiB0aGlzLnJhdGlvKSA6IHRoaXMudG90YWxUaW1lKGR1cmF0aW9uICogdmFsdWUsIHN1cHByZXNzRXZlbnRzKTtcblx0XHR9O1xuXG5cdFx0cC5zdGFydFRpbWUgPSBmdW5jdGlvbih2YWx1ZSkge1xuXHRcdFx0aWYgKCFhcmd1bWVudHMubGVuZ3RoKSB7XG5cdFx0XHRcdHJldHVybiB0aGlzLl9zdGFydFRpbWU7XG5cdFx0XHR9XG5cdFx0XHRpZiAodmFsdWUgIT09IHRoaXMuX3N0YXJ0VGltZSkge1xuXHRcdFx0XHR0aGlzLl9zdGFydFRpbWUgPSB2YWx1ZTtcblx0XHRcdFx0aWYgKHRoaXMudGltZWxpbmUpIGlmICh0aGlzLnRpbWVsaW5lLl9zb3J0Q2hpbGRyZW4pIHtcblx0XHRcdFx0XHR0aGlzLnRpbWVsaW5lLmFkZCh0aGlzLCB2YWx1ZSAtIHRoaXMuX2RlbGF5KTsgLy9lbnN1cmVzIHRoYXQgYW55IG5lY2Vzc2FyeSByZS1zZXF1ZW5jaW5nIG9mIEFuaW1hdGlvbnMgaW4gdGhlIHRpbWVsaW5lIG9jY3VycyB0byBtYWtlIHN1cmUgdGhlIHJlbmRlcmluZyBvcmRlciBpcyBjb3JyZWN0LlxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gdGhpcztcblx0XHR9O1xuXG5cdFx0cC5lbmRUaW1lID0gZnVuY3Rpb24oaW5jbHVkZVJlcGVhdHMpIHtcblx0XHRcdHJldHVybiB0aGlzLl9zdGFydFRpbWUgKyAoKGluY2x1ZGVSZXBlYXRzICE9IGZhbHNlKSA/IHRoaXMudG90YWxEdXJhdGlvbigpIDogdGhpcy5kdXJhdGlvbigpKSAvIHRoaXMuX3RpbWVTY2FsZTtcblx0XHR9O1xuXG5cdFx0cC50aW1lU2NhbGUgPSBmdW5jdGlvbih2YWx1ZSkge1xuXHRcdFx0aWYgKCFhcmd1bWVudHMubGVuZ3RoKSB7XG5cdFx0XHRcdHJldHVybiB0aGlzLl90aW1lU2NhbGU7XG5cdFx0XHR9XG5cdFx0XHR2YXIgcGF1c2VUaW1lLCB0O1xuXHRcdFx0dmFsdWUgPSB2YWx1ZSB8fCBfdGlueU51bTsgLy9jYW4ndCBhbGxvdyB6ZXJvIGJlY2F1c2UgaXQnbGwgdGhyb3cgdGhlIG1hdGggb2ZmXG5cdFx0XHRpZiAodGhpcy5fdGltZWxpbmUgJiYgdGhpcy5fdGltZWxpbmUuc21vb3RoQ2hpbGRUaW1pbmcpIHtcblx0XHRcdFx0cGF1c2VUaW1lID0gdGhpcy5fcGF1c2VUaW1lO1xuXHRcdFx0XHR0ID0gKHBhdXNlVGltZSB8fCBwYXVzZVRpbWUgPT09IDApID8gcGF1c2VUaW1lIDogdGhpcy5fdGltZWxpbmUudG90YWxUaW1lKCk7XG5cdFx0XHRcdHRoaXMuX3N0YXJ0VGltZSA9IHQgLSAoKHQgLSB0aGlzLl9zdGFydFRpbWUpICogdGhpcy5fdGltZVNjYWxlIC8gdmFsdWUpO1xuXHRcdFx0fVxuXHRcdFx0dGhpcy5fdGltZVNjYWxlID0gdmFsdWU7XG5cdFx0XHR0ID0gdGhpcy50aW1lbGluZTtcblx0XHRcdHdoaWxlICh0ICYmIHQudGltZWxpbmUpIHsgLy9tdXN0IHVwZGF0ZSB0aGUgZHVyYXRpb24vdG90YWxEdXJhdGlvbiBvZiBhbGwgYW5jZXN0b3IgdGltZWxpbmVzIGltbWVkaWF0ZWx5IGluIGNhc2UgaW4gdGhlIG1pZGRsZSBvZiBhIHJlbmRlciBsb29wLCBvbmUgdHdlZW4gYWx0ZXJzIGFub3RoZXIgdHdlZW4ncyB0aW1lU2NhbGUgd2hpY2ggc2hvdmVzIGl0cyBzdGFydFRpbWUgYmVmb3JlIDAsIGZvcmNpbmcgdGhlIHBhcmVudCB0aW1lbGluZSB0byBzaGlmdCBhcm91bmQgYW5kIHNoaWZ0Q2hpbGRyZW4oKSB3aGljaCBjb3VsZCBhZmZlY3QgdGhhdCBuZXh0IHR3ZWVuJ3MgcmVuZGVyIChzdGFydFRpbWUpLiBEb2Vzbid0IG1hdHRlciBmb3IgdGhlIHJvb3QgdGltZWxpbmUgdGhvdWdoLlxuXHRcdFx0XHR0Ll9kaXJ0eSA9IHRydWU7XG5cdFx0XHRcdHQudG90YWxEdXJhdGlvbigpO1xuXHRcdFx0XHR0ID0gdC50aW1lbGluZTtcblx0XHRcdH1cblx0XHRcdHJldHVybiB0aGlzO1xuXHRcdH07XG5cblx0XHRwLnJldmVyc2VkID0gZnVuY3Rpb24odmFsdWUpIHtcblx0XHRcdGlmICghYXJndW1lbnRzLmxlbmd0aCkge1xuXHRcdFx0XHRyZXR1cm4gdGhpcy5fcmV2ZXJzZWQ7XG5cdFx0XHR9XG5cdFx0XHRpZiAodmFsdWUgIT0gdGhpcy5fcmV2ZXJzZWQpIHtcblx0XHRcdFx0dGhpcy5fcmV2ZXJzZWQgPSB2YWx1ZTtcblx0XHRcdFx0dGhpcy50b3RhbFRpbWUoKCh0aGlzLl90aW1lbGluZSAmJiAhdGhpcy5fdGltZWxpbmUuc21vb3RoQ2hpbGRUaW1pbmcpID8gdGhpcy50b3RhbER1cmF0aW9uKCkgLSB0aGlzLl90b3RhbFRpbWUgOiB0aGlzLl90b3RhbFRpbWUpLCB0cnVlKTtcblx0XHRcdH1cblx0XHRcdHJldHVybiB0aGlzO1xuXHRcdH07XG5cblx0XHRwLnBhdXNlZCA9IGZ1bmN0aW9uKHZhbHVlKSB7XG5cdFx0XHRpZiAoIWFyZ3VtZW50cy5sZW5ndGgpIHtcblx0XHRcdFx0cmV0dXJuIHRoaXMuX3BhdXNlZDtcblx0XHRcdH1cblx0XHRcdHZhciB0bCA9IHRoaXMuX3RpbWVsaW5lLFxuXHRcdFx0XHRyYXcsIGVsYXBzZWQ7XG5cdFx0XHRpZiAodmFsdWUgIT0gdGhpcy5fcGF1c2VkKSBpZiAodGwpIHtcblx0XHRcdFx0aWYgKCFfdGlja2VyQWN0aXZlICYmICF2YWx1ZSkge1xuXHRcdFx0XHRcdF90aWNrZXIud2FrZSgpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHJhdyA9IHRsLnJhd1RpbWUoKTtcblx0XHRcdFx0ZWxhcHNlZCA9IHJhdyAtIHRoaXMuX3BhdXNlVGltZTtcblx0XHRcdFx0aWYgKCF2YWx1ZSAmJiB0bC5zbW9vdGhDaGlsZFRpbWluZykge1xuXHRcdFx0XHRcdHRoaXMuX3N0YXJ0VGltZSArPSBlbGFwc2VkO1xuXHRcdFx0XHRcdHRoaXMuX3VuY2FjaGUoZmFsc2UpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHRoaXMuX3BhdXNlVGltZSA9IHZhbHVlID8gcmF3IDogbnVsbDtcblx0XHRcdFx0dGhpcy5fcGF1c2VkID0gdmFsdWU7XG5cdFx0XHRcdHRoaXMuX2FjdGl2ZSA9IHRoaXMuaXNBY3RpdmUoKTtcblx0XHRcdFx0aWYgKCF2YWx1ZSAmJiBlbGFwc2VkICE9PSAwICYmIHRoaXMuX2luaXR0ZWQgJiYgdGhpcy5kdXJhdGlvbigpKSB7XG5cdFx0XHRcdFx0cmF3ID0gdGwuc21vb3RoQ2hpbGRUaW1pbmcgPyB0aGlzLl90b3RhbFRpbWUgOiAocmF3IC0gdGhpcy5fc3RhcnRUaW1lKSAvIHRoaXMuX3RpbWVTY2FsZTtcblx0XHRcdFx0XHR0aGlzLnJlbmRlcihyYXcsIChyYXcgPT09IHRoaXMuX3RvdGFsVGltZSksIHRydWUpOyAvL2luIGNhc2UgdGhlIHRhcmdldCdzIHByb3BlcnRpZXMgY2hhbmdlZCB2aWEgc29tZSBvdGhlciB0d2VlbiBvciBtYW51YWwgdXBkYXRlIGJ5IHRoZSB1c2VyLCB3ZSBzaG91bGQgZm9yY2UgYSByZW5kZXIuXG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdGlmICh0aGlzLl9nYyAmJiAhdmFsdWUpIHtcblx0XHRcdFx0dGhpcy5fZW5hYmxlZCh0cnVlLCBmYWxzZSk7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gdGhpcztcblx0XHR9O1xuXG5cbi8qXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBTaW1wbGVUaW1lbGluZVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cdFx0dmFyIFNpbXBsZVRpbWVsaW5lID0gX2NsYXNzKFwiY29yZS5TaW1wbGVUaW1lbGluZVwiLCBmdW5jdGlvbih2YXJzKSB7XG5cdFx0XHRBbmltYXRpb24uY2FsbCh0aGlzLCAwLCB2YXJzKTtcblx0XHRcdHRoaXMuYXV0b1JlbW92ZUNoaWxkcmVuID0gdGhpcy5zbW9vdGhDaGlsZFRpbWluZyA9IHRydWU7XG5cdFx0fSk7XG5cblx0XHRwID0gU2ltcGxlVGltZWxpbmUucHJvdG90eXBlID0gbmV3IEFuaW1hdGlvbigpO1xuXHRcdHAuY29uc3RydWN0b3IgPSBTaW1wbGVUaW1lbGluZTtcblx0XHRwLmtpbGwoKS5fZ2MgPSBmYWxzZTtcblx0XHRwLl9maXJzdCA9IHAuX2xhc3QgPSBwLl9yZWNlbnQgPSBudWxsO1xuXHRcdHAuX3NvcnRDaGlsZHJlbiA9IGZhbHNlO1xuXG5cdFx0cC5hZGQgPSBwLmluc2VydCA9IGZ1bmN0aW9uKGNoaWxkLCBwb3NpdGlvbiwgYWxpZ24sIHN0YWdnZXIpIHtcblx0XHRcdHZhciBwcmV2VHdlZW4sIHN0O1xuXHRcdFx0Y2hpbGQuX3N0YXJ0VGltZSA9IE51bWJlcihwb3NpdGlvbiB8fCAwKSArIGNoaWxkLl9kZWxheTtcblx0XHRcdGlmIChjaGlsZC5fcGF1c2VkKSBpZiAodGhpcyAhPT0gY2hpbGQuX3RpbWVsaW5lKSB7IC8vd2Ugb25seSBhZGp1c3QgdGhlIF9wYXVzZVRpbWUgaWYgaXQgd2Fzbid0IGluIHRoaXMgdGltZWxpbmUgYWxyZWFkeS4gUmVtZW1iZXIsIHNvbWV0aW1lcyBhIHR3ZWVuIHdpbGwgYmUgaW5zZXJ0ZWQgYWdhaW4gaW50byB0aGUgc2FtZSB0aW1lbGluZSB3aGVuIGl0cyBzdGFydFRpbWUgaXMgY2hhbmdlZCBzbyB0aGF0IHRoZSB0d2VlbnMgaW4gdGhlIFRpbWVsaW5lTGl0ZS9NYXggYXJlIHJlLW9yZGVyZWQgcHJvcGVybHkgaW4gdGhlIGxpbmtlZCBsaXN0IChzbyBldmVyeXRoaW5nIHJlbmRlcnMgaW4gdGhlIHByb3BlciBvcmRlcikuXG5cdFx0XHRcdGNoaWxkLl9wYXVzZVRpbWUgPSB0aGlzLnJhd1RpbWUoKSAtIChjaGlsZC5fdGltZWxpbmUucmF3VGltZSgpIC0gY2hpbGQuX3BhdXNlVGltZSk7XG5cdFx0XHR9XG5cdFx0XHRpZiAoY2hpbGQudGltZWxpbmUpIHtcblx0XHRcdFx0Y2hpbGQudGltZWxpbmUuX3JlbW92ZShjaGlsZCwgdHJ1ZSk7IC8vcmVtb3ZlcyBmcm9tIGV4aXN0aW5nIHRpbWVsaW5lIHNvIHRoYXQgaXQgY2FuIGJlIHByb3Blcmx5IGFkZGVkIHRvIHRoaXMgb25lLlxuXHRcdFx0fVxuXHRcdFx0Y2hpbGQudGltZWxpbmUgPSBjaGlsZC5fdGltZWxpbmUgPSB0aGlzO1xuXHRcdFx0aWYgKGNoaWxkLl9nYykge1xuXHRcdFx0XHRjaGlsZC5fZW5hYmxlZCh0cnVlLCB0cnVlKTtcblx0XHRcdH1cblx0XHRcdHByZXZUd2VlbiA9IHRoaXMuX2xhc3Q7XG5cdFx0XHRpZiAodGhpcy5fc29ydENoaWxkcmVuKSB7XG5cdFx0XHRcdHN0ID0gY2hpbGQuX3N0YXJ0VGltZTtcblx0XHRcdFx0d2hpbGUgKHByZXZUd2VlbiAmJiBwcmV2VHdlZW4uX3N0YXJ0VGltZSA+IHN0KSB7XG5cdFx0XHRcdFx0cHJldlR3ZWVuID0gcHJldlR3ZWVuLl9wcmV2O1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRpZiAocHJldlR3ZWVuKSB7XG5cdFx0XHRcdGNoaWxkLl9uZXh0ID0gcHJldlR3ZWVuLl9uZXh0O1xuXHRcdFx0XHRwcmV2VHdlZW4uX25leHQgPSBjaGlsZDtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGNoaWxkLl9uZXh0ID0gdGhpcy5fZmlyc3Q7XG5cdFx0XHRcdHRoaXMuX2ZpcnN0ID0gY2hpbGQ7XG5cdFx0XHR9XG5cdFx0XHRpZiAoY2hpbGQuX25leHQpIHtcblx0XHRcdFx0Y2hpbGQuX25leHQuX3ByZXYgPSBjaGlsZDtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRoaXMuX2xhc3QgPSBjaGlsZDtcblx0XHRcdH1cblx0XHRcdGNoaWxkLl9wcmV2ID0gcHJldlR3ZWVuO1xuXHRcdFx0dGhpcy5fcmVjZW50ID0gY2hpbGQ7XG5cdFx0XHRpZiAodGhpcy5fdGltZWxpbmUpIHtcblx0XHRcdFx0dGhpcy5fdW5jYWNoZSh0cnVlKTtcblx0XHRcdH1cblx0XHRcdHJldHVybiB0aGlzO1xuXHRcdH07XG5cblx0XHRwLl9yZW1vdmUgPSBmdW5jdGlvbih0d2Vlbiwgc2tpcERpc2FibGUpIHtcblx0XHRcdGlmICh0d2Vlbi50aW1lbGluZSA9PT0gdGhpcykge1xuXHRcdFx0XHRpZiAoIXNraXBEaXNhYmxlKSB7XG5cdFx0XHRcdFx0dHdlZW4uX2VuYWJsZWQoZmFsc2UsIHRydWUpO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0aWYgKHR3ZWVuLl9wcmV2KSB7XG5cdFx0XHRcdFx0dHdlZW4uX3ByZXYuX25leHQgPSB0d2Vlbi5fbmV4dDtcblx0XHRcdFx0fSBlbHNlIGlmICh0aGlzLl9maXJzdCA9PT0gdHdlZW4pIHtcblx0XHRcdFx0XHR0aGlzLl9maXJzdCA9IHR3ZWVuLl9uZXh0O1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmICh0d2Vlbi5fbmV4dCkge1xuXHRcdFx0XHRcdHR3ZWVuLl9uZXh0Ll9wcmV2ID0gdHdlZW4uX3ByZXY7XG5cdFx0XHRcdH0gZWxzZSBpZiAodGhpcy5fbGFzdCA9PT0gdHdlZW4pIHtcblx0XHRcdFx0XHR0aGlzLl9sYXN0ID0gdHdlZW4uX3ByZXY7XG5cdFx0XHRcdH1cblx0XHRcdFx0dHdlZW4uX25leHQgPSB0d2Vlbi5fcHJldiA9IHR3ZWVuLnRpbWVsaW5lID0gbnVsbDtcblx0XHRcdFx0aWYgKHR3ZWVuID09PSB0aGlzLl9yZWNlbnQpIHtcblx0XHRcdFx0XHR0aGlzLl9yZWNlbnQgPSB0aGlzLl9sYXN0O1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0aWYgKHRoaXMuX3RpbWVsaW5lKSB7XG5cdFx0XHRcdFx0dGhpcy5fdW5jYWNoZSh0cnVlKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0fTtcblxuXHRcdHAucmVuZGVyID0gZnVuY3Rpb24odGltZSwgc3VwcHJlc3NFdmVudHMsIGZvcmNlKSB7XG5cdFx0XHR2YXIgdHdlZW4gPSB0aGlzLl9maXJzdCxcblx0XHRcdFx0bmV4dDtcblx0XHRcdHRoaXMuX3RvdGFsVGltZSA9IHRoaXMuX3RpbWUgPSB0aGlzLl9yYXdQcmV2VGltZSA9IHRpbWU7XG5cdFx0XHR3aGlsZSAodHdlZW4pIHtcblx0XHRcdFx0bmV4dCA9IHR3ZWVuLl9uZXh0OyAvL3JlY29yZCBpdCBoZXJlIGJlY2F1c2UgdGhlIHZhbHVlIGNvdWxkIGNoYW5nZSBhZnRlciByZW5kZXJpbmcuLi5cblx0XHRcdFx0aWYgKHR3ZWVuLl9hY3RpdmUgfHwgKHRpbWUgPj0gdHdlZW4uX3N0YXJ0VGltZSAmJiAhdHdlZW4uX3BhdXNlZCAmJiAhdHdlZW4uX2djKSkge1xuXHRcdFx0XHRcdGlmICghdHdlZW4uX3JldmVyc2VkKSB7XG5cdFx0XHRcdFx0XHR0d2Vlbi5yZW5kZXIoKHRpbWUgLSB0d2Vlbi5fc3RhcnRUaW1lKSAqIHR3ZWVuLl90aW1lU2NhbGUsIHN1cHByZXNzRXZlbnRzLCBmb3JjZSk7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdHR3ZWVuLnJlbmRlcigoKCF0d2Vlbi5fZGlydHkpID8gdHdlZW4uX3RvdGFsRHVyYXRpb24gOiB0d2Vlbi50b3RhbER1cmF0aW9uKCkpIC0gKCh0aW1lIC0gdHdlZW4uX3N0YXJ0VGltZSkgKiB0d2Vlbi5fdGltZVNjYWxlKSwgc3VwcHJlc3NFdmVudHMsIGZvcmNlKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdFx0dHdlZW4gPSBuZXh0O1xuXHRcdFx0fVxuXHRcdH07XG5cblx0XHRwLnJhd1RpbWUgPSBmdW5jdGlvbigpIHtcblx0XHRcdGlmICghX3RpY2tlckFjdGl2ZSkge1xuXHRcdFx0XHRfdGlja2VyLndha2UoKTtcblx0XHRcdH1cblx0XHRcdHJldHVybiB0aGlzLl90b3RhbFRpbWU7XG5cdFx0fTtcblxuLypcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIFR3ZWVuTGl0ZVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cdFx0dmFyIFR3ZWVuTGl0ZSA9IF9jbGFzcyhcIlR3ZWVuTGl0ZVwiLCBmdW5jdGlvbih0YXJnZXQsIGR1cmF0aW9uLCB2YXJzKSB7XG5cdFx0XHRcdEFuaW1hdGlvbi5jYWxsKHRoaXMsIGR1cmF0aW9uLCB2YXJzKTtcblx0XHRcdFx0dGhpcy5yZW5kZXIgPSBUd2VlbkxpdGUucHJvdG90eXBlLnJlbmRlcjsgLy9zcGVlZCBvcHRpbWl6YXRpb24gKGF2b2lkIHByb3RvdHlwZSBsb29rdXAgb24gdGhpcyBcImhvdFwiIG1ldGhvZClcblxuXHRcdFx0XHRpZiAodGFyZ2V0ID09IG51bGwpIHtcblx0XHRcdFx0XHR0aHJvdyBcIkNhbm5vdCB0d2VlbiBhIG51bGwgdGFyZ2V0LlwiO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0dGhpcy50YXJnZXQgPSB0YXJnZXQgPSAodHlwZW9mKHRhcmdldCkgIT09IFwic3RyaW5nXCIpID8gdGFyZ2V0IDogVHdlZW5MaXRlLnNlbGVjdG9yKHRhcmdldCkgfHwgdGFyZ2V0O1xuXG5cdFx0XHRcdHZhciBpc1NlbGVjdG9yID0gKHRhcmdldC5qcXVlcnkgfHwgKHRhcmdldC5sZW5ndGggJiYgdGFyZ2V0ICE9PSB3aW5kb3cgJiYgdGFyZ2V0WzBdICYmICh0YXJnZXRbMF0gPT09IHdpbmRvdyB8fCAodGFyZ2V0WzBdLm5vZGVUeXBlICYmIHRhcmdldFswXS5zdHlsZSAmJiAhdGFyZ2V0Lm5vZGVUeXBlKSkpKSxcblx0XHRcdFx0XHRvdmVyd3JpdGUgPSB0aGlzLnZhcnMub3ZlcndyaXRlLFxuXHRcdFx0XHRcdGksIHRhcmcsIHRhcmdldHM7XG5cblx0XHRcdFx0dGhpcy5fb3ZlcndyaXRlID0gb3ZlcndyaXRlID0gKG92ZXJ3cml0ZSA9PSBudWxsKSA/IF9vdmVyd3JpdGVMb29rdXBbVHdlZW5MaXRlLmRlZmF1bHRPdmVyd3JpdGVdIDogKHR5cGVvZihvdmVyd3JpdGUpID09PSBcIm51bWJlclwiKSA/IG92ZXJ3cml0ZSA+PiAwIDogX292ZXJ3cml0ZUxvb2t1cFtvdmVyd3JpdGVdO1xuXG5cdFx0XHRcdGlmICgoaXNTZWxlY3RvciB8fCB0YXJnZXQgaW5zdGFuY2VvZiBBcnJheSB8fCAodGFyZ2V0LnB1c2ggJiYgX2lzQXJyYXkodGFyZ2V0KSkpICYmIHR5cGVvZih0YXJnZXRbMF0pICE9PSBcIm51bWJlclwiKSB7XG5cdFx0XHRcdFx0dGhpcy5fdGFyZ2V0cyA9IHRhcmdldHMgPSBfc2xpY2UodGFyZ2V0KTsgIC8vZG9uJ3QgdXNlIEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKHRhcmdldCwgMCkgYmVjYXVzZSB0aGF0IGRvZXNuJ3Qgd29yayBpbiBJRTggd2l0aCBhIE5vZGVMaXN0IHRoYXQncyByZXR1cm5lZCBieSBxdWVyeVNlbGVjdG9yQWxsKClcblx0XHRcdFx0XHR0aGlzLl9wcm9wTG9va3VwID0gW107XG5cdFx0XHRcdFx0dGhpcy5fc2libGluZ3MgPSBbXTtcblx0XHRcdFx0XHRmb3IgKGkgPSAwOyBpIDwgdGFyZ2V0cy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRcdFx0dGFyZyA9IHRhcmdldHNbaV07XG5cdFx0XHRcdFx0XHRpZiAoIXRhcmcpIHtcblx0XHRcdFx0XHRcdFx0dGFyZ2V0cy5zcGxpY2UoaS0tLCAxKTtcblx0XHRcdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdFx0XHR9IGVsc2UgaWYgKHR5cGVvZih0YXJnKSA9PT0gXCJzdHJpbmdcIikge1xuXHRcdFx0XHRcdFx0XHR0YXJnID0gdGFyZ2V0c1tpLS1dID0gVHdlZW5MaXRlLnNlbGVjdG9yKHRhcmcpOyAvL2luIGNhc2UgaXQncyBhbiBhcnJheSBvZiBzdHJpbmdzXG5cdFx0XHRcdFx0XHRcdGlmICh0eXBlb2YodGFyZykgPT09IFwic3RyaW5nXCIpIHtcblx0XHRcdFx0XHRcdFx0XHR0YXJnZXRzLnNwbGljZShpKzEsIDEpOyAvL3RvIGF2b2lkIGFuIGVuZGxlc3MgbG9vcCAoY2FuJ3QgaW1hZ2luZSB3aHkgdGhlIHNlbGVjdG9yIHdvdWxkIHJldHVybiBhIHN0cmluZywgYnV0IGp1c3QgaW4gY2FzZSlcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRjb250aW51ZTtcblx0XHRcdFx0XHRcdH0gZWxzZSBpZiAodGFyZy5sZW5ndGggJiYgdGFyZyAhPT0gd2luZG93ICYmIHRhcmdbMF0gJiYgKHRhcmdbMF0gPT09IHdpbmRvdyB8fCAodGFyZ1swXS5ub2RlVHlwZSAmJiB0YXJnWzBdLnN0eWxlICYmICF0YXJnLm5vZGVUeXBlKSkpIHsgLy9pbiBjYXNlIHRoZSB1c2VyIGlzIHBhc3NpbmcgaW4gYW4gYXJyYXkgb2Ygc2VsZWN0b3Igb2JqZWN0cyAobGlrZSBqUXVlcnkgb2JqZWN0cyksIHdlIG5lZWQgdG8gY2hlY2sgb25lIG1vcmUgbGV2ZWwgYW5kIHB1bGwgdGhpbmdzIG91dCBpZiBuZWNlc3NhcnkuIEFsc28gbm90ZSB0aGF0IDxzZWxlY3Q+IGVsZW1lbnRzIHBhc3MgYWxsIHRoZSBjcml0ZXJpYSByZWdhcmRpbmcgbGVuZ3RoIGFuZCB0aGUgZmlyc3QgY2hpbGQgaGF2aW5nIHN0eWxlLCBzbyB3ZSBtdXN0IGFsc28gY2hlY2sgdG8gZW5zdXJlIHRoZSB0YXJnZXQgaXNuJ3QgYW4gSFRNTCBub2RlIGl0c2VsZi5cblx0XHRcdFx0XHRcdFx0dGFyZ2V0cy5zcGxpY2UoaS0tLCAxKTtcblx0XHRcdFx0XHRcdFx0dGhpcy5fdGFyZ2V0cyA9IHRhcmdldHMgPSB0YXJnZXRzLmNvbmNhdChfc2xpY2UodGFyZykpO1xuXHRcdFx0XHRcdFx0XHRjb250aW51ZTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdHRoaXMuX3NpYmxpbmdzW2ldID0gX3JlZ2lzdGVyKHRhcmcsIHRoaXMsIGZhbHNlKTtcblx0XHRcdFx0XHRcdGlmIChvdmVyd3JpdGUgPT09IDEpIGlmICh0aGlzLl9zaWJsaW5nc1tpXS5sZW5ndGggPiAxKSB7XG5cdFx0XHRcdFx0XHRcdF9hcHBseU92ZXJ3cml0ZSh0YXJnLCB0aGlzLCBudWxsLCAxLCB0aGlzLl9zaWJsaW5nc1tpXSk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0dGhpcy5fcHJvcExvb2t1cCA9IHt9O1xuXHRcdFx0XHRcdHRoaXMuX3NpYmxpbmdzID0gX3JlZ2lzdGVyKHRhcmdldCwgdGhpcywgZmFsc2UpO1xuXHRcdFx0XHRcdGlmIChvdmVyd3JpdGUgPT09IDEpIGlmICh0aGlzLl9zaWJsaW5ncy5sZW5ndGggPiAxKSB7XG5cdFx0XHRcdFx0XHRfYXBwbHlPdmVyd3JpdGUodGFyZ2V0LCB0aGlzLCBudWxsLCAxLCB0aGlzLl9zaWJsaW5ncyk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRcdGlmICh0aGlzLnZhcnMuaW1tZWRpYXRlUmVuZGVyIHx8IChkdXJhdGlvbiA9PT0gMCAmJiB0aGlzLl9kZWxheSA9PT0gMCAmJiB0aGlzLnZhcnMuaW1tZWRpYXRlUmVuZGVyICE9PSBmYWxzZSkpIHtcblx0XHRcdFx0XHR0aGlzLl90aW1lID0gLV90aW55TnVtOyAvL2ZvcmNlcyBhIHJlbmRlciB3aXRob3V0IGhhdmluZyB0byBzZXQgdGhlIHJlbmRlcigpIFwiZm9yY2VcIiBwYXJhbWV0ZXIgdG8gdHJ1ZSBiZWNhdXNlIHdlIHdhbnQgdG8gYWxsb3cgbGF6eWluZyBieSBkZWZhdWx0ICh1c2luZyB0aGUgXCJmb3JjZVwiIHBhcmFtZXRlciBhbHdheXMgZm9yY2VzIGFuIGltbWVkaWF0ZSBmdWxsIHJlbmRlcilcblx0XHRcdFx0XHR0aGlzLnJlbmRlcihNYXRoLm1pbigwLCAtdGhpcy5fZGVsYXkpKTsgLy9pbiBjYXNlIGRlbGF5IGlzIG5lZ2F0aXZlXG5cdFx0XHRcdH1cblx0XHRcdH0sIHRydWUpLFxuXHRcdFx0X2lzU2VsZWN0b3IgPSBmdW5jdGlvbih2KSB7XG5cdFx0XHRcdHJldHVybiAodiAmJiB2Lmxlbmd0aCAmJiB2ICE9PSB3aW5kb3cgJiYgdlswXSAmJiAodlswXSA9PT0gd2luZG93IHx8ICh2WzBdLm5vZGVUeXBlICYmIHZbMF0uc3R5bGUgJiYgIXYubm9kZVR5cGUpKSk7IC8vd2UgY2Fubm90IGNoZWNrIFwibm9kZVR5cGVcIiBpZiB0aGUgdGFyZ2V0IGlzIHdpbmRvdyBmcm9tIHdpdGhpbiBhbiBpZnJhbWUsIG90aGVyd2lzZSBpdCB3aWxsIHRyaWdnZXIgYSBzZWN1cml0eSBlcnJvciBpbiBzb21lIGJyb3dzZXJzIGxpa2UgRmlyZWZveC5cblx0XHRcdH0sXG5cdFx0XHRfYXV0b0NTUyA9IGZ1bmN0aW9uKHZhcnMsIHRhcmdldCkge1xuXHRcdFx0XHR2YXIgY3NzID0ge30sXG5cdFx0XHRcdFx0cDtcblx0XHRcdFx0Zm9yIChwIGluIHZhcnMpIHtcblx0XHRcdFx0XHRpZiAoIV9yZXNlcnZlZFByb3BzW3BdICYmICghKHAgaW4gdGFyZ2V0KSB8fCBwID09PSBcInRyYW5zZm9ybVwiIHx8IHAgPT09IFwieFwiIHx8IHAgPT09IFwieVwiIHx8IHAgPT09IFwid2lkdGhcIiB8fCBwID09PSBcImhlaWdodFwiIHx8IHAgPT09IFwiY2xhc3NOYW1lXCIgfHwgcCA9PT0gXCJib3JkZXJcIikgJiYgKCFfcGx1Z2luc1twXSB8fCAoX3BsdWdpbnNbcF0gJiYgX3BsdWdpbnNbcF0uX2F1dG9DU1MpKSkgeyAvL25vdGU6IDxpbWc+IGVsZW1lbnRzIGNvbnRhaW4gcmVhZC1vbmx5IFwieFwiIGFuZCBcInlcIiBwcm9wZXJ0aWVzLiBXZSBzaG91bGQgYWxzbyBwcmlvcml0aXplIGVkaXRpbmcgY3NzIHdpZHRoL2hlaWdodCByYXRoZXIgdGhhbiB0aGUgZWxlbWVudCdzIHByb3BlcnRpZXMuXG5cdFx0XHRcdFx0XHRjc3NbcF0gPSB2YXJzW3BdO1xuXHRcdFx0XHRcdFx0ZGVsZXRlIHZhcnNbcF07XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRcdHZhcnMuY3NzID0gY3NzO1xuXHRcdFx0fTtcblxuXHRcdHAgPSBUd2VlbkxpdGUucHJvdG90eXBlID0gbmV3IEFuaW1hdGlvbigpO1xuXHRcdHAuY29uc3RydWN0b3IgPSBUd2VlbkxpdGU7XG5cdFx0cC5raWxsKCkuX2djID0gZmFsc2U7XG5cbi8vLS0tLVR3ZWVuTGl0ZSBkZWZhdWx0cywgb3ZlcndyaXRlIG1hbmFnZW1lbnQsIGFuZCByb290IHVwZGF0ZXMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5cdFx0cC5yYXRpbyA9IDA7XG5cdFx0cC5fZmlyc3RQVCA9IHAuX3RhcmdldHMgPSBwLl9vdmVyd3JpdHRlblByb3BzID0gcC5fc3RhcnRBdCA9IG51bGw7XG5cdFx0cC5fbm90aWZ5UGx1Z2luc09mRW5hYmxlZCA9IHAuX2xhenkgPSBmYWxzZTtcblxuXHRcdFR3ZWVuTGl0ZS52ZXJzaW9uID0gXCIxLjIwLjVcIjtcblx0XHRUd2VlbkxpdGUuZGVmYXVsdEVhc2UgPSBwLl9lYXNlID0gbmV3IEVhc2UobnVsbCwgbnVsbCwgMSwgMSk7XG5cdFx0VHdlZW5MaXRlLmRlZmF1bHRPdmVyd3JpdGUgPSBcImF1dG9cIjtcblx0XHRUd2VlbkxpdGUudGlja2VyID0gX3RpY2tlcjtcblx0XHRUd2VlbkxpdGUuYXV0b1NsZWVwID0gMTIwO1xuXHRcdFR3ZWVuTGl0ZS5sYWdTbW9vdGhpbmcgPSBmdW5jdGlvbih0aHJlc2hvbGQsIGFkanVzdGVkTGFnKSB7XG5cdFx0XHRfdGlja2VyLmxhZ1Ntb290aGluZyh0aHJlc2hvbGQsIGFkanVzdGVkTGFnKTtcblx0XHR9O1xuXG5cdFx0VHdlZW5MaXRlLnNlbGVjdG9yID0gd2luZG93LiQgfHwgd2luZG93LmpRdWVyeSB8fCBmdW5jdGlvbihlKSB7XG5cdFx0XHR2YXIgc2VsZWN0b3IgPSB3aW5kb3cuJCB8fCB3aW5kb3cualF1ZXJ5O1xuXHRcdFx0aWYgKHNlbGVjdG9yKSB7XG5cdFx0XHRcdFR3ZWVuTGl0ZS5zZWxlY3RvciA9IHNlbGVjdG9yO1xuXHRcdFx0XHRyZXR1cm4gc2VsZWN0b3IoZSk7XG5cdFx0XHR9XG5cdFx0XHRpZiAoIV9kb2MpIHsgLy9pbiBzb21lIGRldiBlbnZpcm9ubWVudHMgKGxpa2UgQW5ndWxhciA2KSwgR1NBUCBnZXRzIGxvYWRlZCBiZWZvcmUgdGhlIGRvY3VtZW50IGlzIGRlZmluZWQhIFNvIHJlLXF1ZXJ5IGl0IGhlcmUgaWYvd2hlbiBuZWNlc3NhcnkuXG5cdFx0XHRcdF9kb2MgPSB3aW5kb3cuZG9jdW1lbnQ7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gKCFfZG9jKSA/IGUgOiAoX2RvYy5xdWVyeVNlbGVjdG9yQWxsID8gX2RvYy5xdWVyeVNlbGVjdG9yQWxsKGUpIDogX2RvYy5nZXRFbGVtZW50QnlJZCgoZS5jaGFyQXQoMCkgPT09IFwiI1wiKSA/IGUuc3Vic3RyKDEpIDogZSkpO1xuXHRcdH07XG5cblx0XHR2YXIgX2xhenlUd2VlbnMgPSBbXSxcblx0XHRcdF9sYXp5TG9va3VwID0ge30sXG5cdFx0XHRfbnVtYmVyc0V4cCA9IC8oPzooLXwtPXxcXCs9KT9cXGQqXFwuP1xcZCooPzplW1xcLStdP1xcZCspPylbMC05XS9pZyxcblx0XHRcdF9yZWxFeHAgPSAvW1xcKy1dPS0/W1xcLlxcZF0vLFxuXHRcdFx0Ly9fbm9uTnVtYmVyc0V4cCA9IC8oPzooW1xcLStdKD8hKFxcZHw9KSkpfFteXFxkXFwtKz1lXXwoZSg/IVtcXC0rXVtcXGRdKSkpKy9pZyxcblx0XHRcdF9zZXRSYXRpbyA9IGZ1bmN0aW9uKHYpIHtcblx0XHRcdFx0dmFyIHB0ID0gdGhpcy5fZmlyc3RQVCxcblx0XHRcdFx0XHRtaW4gPSAwLjAwMDAwMSxcblx0XHRcdFx0XHR2YWw7XG5cdFx0XHRcdHdoaWxlIChwdCkge1xuXHRcdFx0XHRcdHZhbCA9ICFwdC5ibG9iID8gcHQuYyAqIHYgKyBwdC5zIDogKHYgPT09IDEgJiYgdGhpcy5lbmQgIT0gbnVsbCkgPyB0aGlzLmVuZCA6IHYgPyB0aGlzLmpvaW4oXCJcIikgOiB0aGlzLnN0YXJ0O1xuXHRcdFx0XHRcdGlmIChwdC5tKSB7XG5cdFx0XHRcdFx0XHR2YWwgPSBwdC5tLmNhbGwodGhpcy5fdHdlZW4sIHZhbCwgdGhpcy5fdGFyZ2V0IHx8IHB0LnQsIHRoaXMuX3R3ZWVuKTtcblx0XHRcdFx0XHR9IGVsc2UgaWYgKHZhbCA8IG1pbikgaWYgKHZhbCA+IC1taW4gJiYgIXB0LmJsb2IpIHsgLy9wcmV2ZW50cyBpc3N1ZXMgd2l0aCBjb252ZXJ0aW5nIHZlcnkgc21hbGwgbnVtYmVycyB0byBzdHJpbmdzIGluIHRoZSBicm93c2VyXG5cdFx0XHRcdFx0XHR2YWwgPSAwO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRpZiAoIXB0LmYpIHtcblx0XHRcdFx0XHRcdHB0LnRbcHQucF0gPSB2YWw7XG5cdFx0XHRcdFx0fSBlbHNlIGlmIChwdC5mcCkge1xuXHRcdFx0XHRcdFx0cHQudFtwdC5wXShwdC5mcCwgdmFsKTtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0cHQudFtwdC5wXSh2YWwpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRwdCA9IHB0Ll9uZXh0O1xuXHRcdFx0XHR9XG5cdFx0XHR9LFxuXHRcdFx0Ly9jb21wYXJlcyB0d28gc3RyaW5ncyAoc3RhcnQvZW5kKSwgZmluZHMgdGhlIG51bWJlcnMgdGhhdCBhcmUgZGlmZmVyZW50IGFuZCBzcGl0cyBiYWNrIGFuIGFycmF5IHJlcHJlc2VudGluZyB0aGUgd2hvbGUgdmFsdWUgYnV0IHdpdGggdGhlIGNoYW5naW5nIHZhbHVlcyBpc29sYXRlZCBhcyBlbGVtZW50cy4gRm9yIGV4YW1wbGUsIFwicmdiKDAsMCwwKVwiIGFuZCBcInJnYigxMDAsNTAsMClcIiB3b3VsZCBiZWNvbWUgW1wicmdiKFwiLCAwLCBcIixcIiwgNTAsIFwiLDApXCJdLiBOb3RpY2UgaXQgbWVyZ2VzIHRoZSBwYXJ0cyB0aGF0IGFyZSBpZGVudGljYWwgKHBlcmZvcm1hbmNlIG9wdGltaXphdGlvbikuIFRoZSBhcnJheSBhbHNvIGhhcyBhIGxpbmtlZCBsaXN0IG9mIFByb3BUd2VlbnMgYXR0YWNoZWQgc3RhcnRpbmcgd2l0aCBfZmlyc3RQVCB0aGF0IGNvbnRhaW4gdGhlIHR3ZWVuaW5nIGRhdGEgKHQsIHAsIHMsIGMsIGYsIGV0Yy4pLiBJdCBhbHNvIHN0b3JlcyB0aGUgc3RhcnRpbmcgdmFsdWUgYXMgYSBcInN0YXJ0XCIgcHJvcGVydHkgc28gdGhhdCB3ZSBjYW4gcmV2ZXJ0IHRvIGl0IGlmL3doZW4gbmVjZXNzYXJ5LCBsaWtlIHdoZW4gYSB0d2VlbiByZXdpbmRzIGZ1bGx5LiBJZiB0aGUgcXVhbnRpdHkgb2YgbnVtYmVycyBkaWZmZXJzIGJldHdlZW4gdGhlIHN0YXJ0IGFuZCBlbmQsIGl0IHdpbGwgYWx3YXlzIHByaW9yaXRpemUgdGhlIGVuZCB2YWx1ZShzKS4gVGhlIHB0IHBhcmFtZXRlciBpcyBvcHRpb25hbCAtIGl0J3MgZm9yIGEgUHJvcFR3ZWVuIHRoYXQgd2lsbCBiZSBhcHBlbmRlZCB0byB0aGUgZW5kIG9mIHRoZSBsaW5rZWQgbGlzdCBhbmQgaXMgdHlwaWNhbGx5IGZvciBhY3R1YWxseSBzZXR0aW5nIHRoZSB2YWx1ZSBhZnRlciBhbGwgb2YgdGhlIGVsZW1lbnRzIGhhdmUgYmVlbiB1cGRhdGVkICh3aXRoIGFycmF5LmpvaW4oXCJcIikpLlxuXHRcdFx0X2Jsb2JEaWYgPSBmdW5jdGlvbihzdGFydCwgZW5kLCBmaWx0ZXIsIHB0KSB7XG5cdFx0XHRcdHZhciBhID0gW10sXG5cdFx0XHRcdFx0Y2hhckluZGV4ID0gMCxcblx0XHRcdFx0XHRzID0gXCJcIixcblx0XHRcdFx0XHRjb2xvciA9IDAsXG5cdFx0XHRcdFx0c3RhcnROdW1zLCBlbmROdW1zLCBudW0sIGksIGwsIG5vbk51bWJlcnMsIGN1cnJlbnROdW07XG5cdFx0XHRcdGEuc3RhcnQgPSBzdGFydDtcblx0XHRcdFx0YS5lbmQgPSBlbmQ7XG5cdFx0XHRcdHN0YXJ0ID0gYVswXSA9IHN0YXJ0ICsgXCJcIjsgLy9lbnN1cmUgdmFsdWVzIGFyZSBzdHJpbmdzXG5cdFx0XHRcdGVuZCA9IGFbMV0gPSBlbmQgKyBcIlwiO1xuXHRcdFx0XHRpZiAoZmlsdGVyKSB7XG5cdFx0XHRcdFx0ZmlsdGVyKGEpOyAvL3Bhc3MgYW4gYXJyYXkgd2l0aCB0aGUgc3RhcnRpbmcgYW5kIGVuZGluZyB2YWx1ZXMgYW5kIGxldCB0aGUgZmlsdGVyIGRvIHdoYXRldmVyIGl0IG5lZWRzIHRvIHRoZSB2YWx1ZXMuXG5cdFx0XHRcdFx0c3RhcnQgPSBhWzBdO1xuXHRcdFx0XHRcdGVuZCA9IGFbMV07XG5cdFx0XHRcdH1cblx0XHRcdFx0YS5sZW5ndGggPSAwO1xuXHRcdFx0XHRzdGFydE51bXMgPSBzdGFydC5tYXRjaChfbnVtYmVyc0V4cCkgfHwgW107XG5cdFx0XHRcdGVuZE51bXMgPSBlbmQubWF0Y2goX251bWJlcnNFeHApIHx8IFtdO1xuXHRcdFx0XHRpZiAocHQpIHtcblx0XHRcdFx0XHRwdC5fbmV4dCA9IG51bGw7XG5cdFx0XHRcdFx0cHQuYmxvYiA9IDE7XG5cdFx0XHRcdFx0YS5fZmlyc3RQVCA9IGEuX2FwcGx5UFQgPSBwdDsgLy9hcHBseSBsYXN0IGluIHRoZSBsaW5rZWQgbGlzdCAod2hpY2ggbWVhbnMgaW5zZXJ0aW5nIGl0IGZpcnN0KVxuXHRcdFx0XHR9XG5cdFx0XHRcdGwgPSBlbmROdW1zLmxlbmd0aDtcblx0XHRcdFx0Zm9yIChpID0gMDsgaSA8IGw7IGkrKykge1xuXHRcdFx0XHRcdGN1cnJlbnROdW0gPSBlbmROdW1zW2ldO1xuXHRcdFx0XHRcdG5vbk51bWJlcnMgPSBlbmQuc3Vic3RyKGNoYXJJbmRleCwgZW5kLmluZGV4T2YoY3VycmVudE51bSwgY2hhckluZGV4KS1jaGFySW5kZXgpO1xuXHRcdFx0XHRcdHMgKz0gKG5vbk51bWJlcnMgfHwgIWkpID8gbm9uTnVtYmVycyA6IFwiLFwiOyAvL25vdGU6IFNWRyBzcGVjIGFsbG93cyBvbWlzc2lvbiBvZiBjb21tYS9zcGFjZSB3aGVuIGEgbmVnYXRpdmUgc2lnbiBpcyB3ZWRnZWQgYmV0d2VlbiB0d28gbnVtYmVycywgbGlrZSAyLjUtNS4zIGluc3RlYWQgb2YgMi41LC01LjMgYnV0IHdoZW4gdHdlZW5pbmcsIHRoZSBuZWdhdGl2ZSB2YWx1ZSBtYXkgc3dpdGNoIHRvIHBvc2l0aXZlLCBzbyB3ZSBpbnNlcnQgdGhlIGNvbW1hIGp1c3QgaW4gY2FzZS5cblx0XHRcdFx0XHRjaGFySW5kZXggKz0gbm9uTnVtYmVycy5sZW5ndGg7XG5cdFx0XHRcdFx0aWYgKGNvbG9yKSB7IC8vc2Vuc2UgcmdiYSgpIHZhbHVlcyBhbmQgcm91bmQgdGhlbS5cblx0XHRcdFx0XHRcdGNvbG9yID0gKGNvbG9yICsgMSkgJSA1O1xuXHRcdFx0XHRcdH0gZWxzZSBpZiAobm9uTnVtYmVycy5zdWJzdHIoLTUpID09PSBcInJnYmEoXCIpIHtcblx0XHRcdFx0XHRcdGNvbG9yID0gMTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0aWYgKGN1cnJlbnROdW0gPT09IHN0YXJ0TnVtc1tpXSB8fCBzdGFydE51bXMubGVuZ3RoIDw9IGkpIHtcblx0XHRcdFx0XHRcdHMgKz0gY3VycmVudE51bTtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0aWYgKHMpIHtcblx0XHRcdFx0XHRcdFx0YS5wdXNoKHMpO1xuXHRcdFx0XHRcdFx0XHRzID0gXCJcIjtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdG51bSA9IHBhcnNlRmxvYXQoc3RhcnROdW1zW2ldKTtcblx0XHRcdFx0XHRcdGEucHVzaChudW0pO1xuXHRcdFx0XHRcdFx0YS5fZmlyc3RQVCA9IHtfbmV4dDogYS5fZmlyc3RQVCwgdDphLCBwOiBhLmxlbmd0aC0xLCBzOm51bSwgYzooKGN1cnJlbnROdW0uY2hhckF0KDEpID09PSBcIj1cIikgPyBwYXJzZUludChjdXJyZW50TnVtLmNoYXJBdCgwKSArIFwiMVwiLCAxMCkgKiBwYXJzZUZsb2F0KGN1cnJlbnROdW0uc3Vic3RyKDIpKSA6IChwYXJzZUZsb2F0KGN1cnJlbnROdW0pIC0gbnVtKSkgfHwgMCwgZjowLCBtOihjb2xvciAmJiBjb2xvciA8IDQpID8gTWF0aC5yb3VuZCA6IDB9O1xuXHRcdFx0XHRcdFx0Ly9ub3RlOiB3ZSBkb24ndCBzZXQgX3ByZXYgYmVjYXVzZSB3ZSdsbCBuZXZlciBuZWVkIHRvIHJlbW92ZSBpbmRpdmlkdWFsIFByb3BUd2VlbnMgZnJvbSB0aGlzIGxpc3QuXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGNoYXJJbmRleCArPSBjdXJyZW50TnVtLmxlbmd0aDtcblx0XHRcdFx0fVxuXHRcdFx0XHRzICs9IGVuZC5zdWJzdHIoY2hhckluZGV4KTtcblx0XHRcdFx0aWYgKHMpIHtcblx0XHRcdFx0XHRhLnB1c2gocyk7XG5cdFx0XHRcdH1cblx0XHRcdFx0YS5zZXRSYXRpbyA9IF9zZXRSYXRpbztcblx0XHRcdFx0aWYgKF9yZWxFeHAudGVzdChlbmQpKSB7IC8vaWYgdGhlIGVuZCBzdHJpbmcgY29udGFpbnMgcmVsYXRpdmUgdmFsdWVzLCBkZWxldGUgaXQgc28gdGhhdCBvbiB0aGUgZmluYWwgcmVuZGVyIChpbiBfc2V0UmF0aW8oKSksIHdlIGRvbid0IGFjdHVhbGx5IHNldCBpdCB0byB0aGUgc3RyaW5nIHdpdGggKz0gb3IgLT0gY2hhcmFjdGVycyAoZm9yY2VzIGl0IHRvIHVzZSB0aGUgY2FsY3VsYXRlZCB2YWx1ZSkuXG5cdFx0XHRcdFx0YS5lbmQgPSBudWxsO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHJldHVybiBhO1xuXHRcdFx0fSxcblx0XHRcdC8vbm90ZTogXCJmdW5jUGFyYW1cIiBpcyBvbmx5IG5lY2Vzc2FyeSBmb3IgZnVuY3Rpb24tYmFzZWQgZ2V0dGVycy9zZXR0ZXJzIHRoYXQgcmVxdWlyZSBhbiBleHRyYSBwYXJhbWV0ZXIgbGlrZSBnZXRBdHRyaWJ1dGUoXCJ3aWR0aFwiKSBhbmQgc2V0QXR0cmlidXRlKFwid2lkdGhcIiwgdmFsdWUpLiBJbiB0aGlzIGV4YW1wbGUsIGZ1bmNQYXJhbSB3b3VsZCBiZSBcIndpZHRoXCIuIFVzZWQgYnkgQXR0clBsdWdpbiBmb3IgZXhhbXBsZS5cblx0XHRcdF9hZGRQcm9wVHdlZW4gPSBmdW5jdGlvbih0YXJnZXQsIHByb3AsIHN0YXJ0LCBlbmQsIG92ZXJ3cml0ZVByb3AsIG1vZCwgZnVuY1BhcmFtLCBzdHJpbmdGaWx0ZXIsIGluZGV4KSB7XG5cdFx0XHRcdGlmICh0eXBlb2YoZW5kKSA9PT0gXCJmdW5jdGlvblwiKSB7XG5cdFx0XHRcdFx0ZW5kID0gZW5kKGluZGV4IHx8IDAsIHRhcmdldCk7XG5cdFx0XHRcdH1cblx0XHRcdFx0dmFyIHR5cGUgPSB0eXBlb2YodGFyZ2V0W3Byb3BdKSxcblx0XHRcdFx0XHRnZXR0ZXJOYW1lID0gKHR5cGUgIT09IFwiZnVuY3Rpb25cIikgPyBcIlwiIDogKChwcm9wLmluZGV4T2YoXCJzZXRcIikgfHwgdHlwZW9mKHRhcmdldFtcImdldFwiICsgcHJvcC5zdWJzdHIoMyldKSAhPT0gXCJmdW5jdGlvblwiKSA/IHByb3AgOiBcImdldFwiICsgcHJvcC5zdWJzdHIoMykpLFxuXHRcdFx0XHRcdHMgPSAoc3RhcnQgIT09IFwiZ2V0XCIpID8gc3RhcnQgOiAhZ2V0dGVyTmFtZSA/IHRhcmdldFtwcm9wXSA6IGZ1bmNQYXJhbSA/IHRhcmdldFtnZXR0ZXJOYW1lXShmdW5jUGFyYW0pIDogdGFyZ2V0W2dldHRlck5hbWVdKCksXG5cdFx0XHRcdFx0aXNSZWxhdGl2ZSA9ICh0eXBlb2YoZW5kKSA9PT0gXCJzdHJpbmdcIiAmJiBlbmQuY2hhckF0KDEpID09PSBcIj1cIiksXG5cdFx0XHRcdFx0cHQgPSB7dDp0YXJnZXQsIHA6cHJvcCwgczpzLCBmOih0eXBlID09PSBcImZ1bmN0aW9uXCIpLCBwZzowLCBuOm92ZXJ3cml0ZVByb3AgfHwgcHJvcCwgbTooIW1vZCA/IDAgOiAodHlwZW9mKG1vZCkgPT09IFwiZnVuY3Rpb25cIikgPyBtb2QgOiBNYXRoLnJvdW5kKSwgcHI6MCwgYzppc1JlbGF0aXZlID8gcGFyc2VJbnQoZW5kLmNoYXJBdCgwKSArIFwiMVwiLCAxMCkgKiBwYXJzZUZsb2F0KGVuZC5zdWJzdHIoMikpIDogKHBhcnNlRmxvYXQoZW5kKSAtIHMpIHx8IDB9LFxuXHRcdFx0XHRcdGJsb2I7XG5cblx0XHRcdFx0aWYgKHR5cGVvZihzKSAhPT0gXCJudW1iZXJcIiB8fCAodHlwZW9mKGVuZCkgIT09IFwibnVtYmVyXCIgJiYgIWlzUmVsYXRpdmUpKSB7XG5cdFx0XHRcdFx0aWYgKGZ1bmNQYXJhbSB8fCBpc05hTihzKSB8fCAoIWlzUmVsYXRpdmUgJiYgaXNOYU4oZW5kKSkgfHwgdHlwZW9mKHMpID09PSBcImJvb2xlYW5cIiB8fCB0eXBlb2YoZW5kKSA9PT0gXCJib29sZWFuXCIpIHtcblx0XHRcdFx0XHRcdC8vYSBibG9iIChzdHJpbmcgdGhhdCBoYXMgbXVsdGlwbGUgbnVtYmVycyBpbiBpdClcblx0XHRcdFx0XHRcdHB0LmZwID0gZnVuY1BhcmFtO1xuXHRcdFx0XHRcdFx0YmxvYiA9IF9ibG9iRGlmKHMsIChpc1JlbGF0aXZlID8gKHBhcnNlRmxvYXQocHQucykgKyBwdC5jKSArIChwdC5zICsgXCJcIikucmVwbGFjZSgvWzAtOVxcLVxcLl0vZywgXCJcIikgOiBlbmQpLCBzdHJpbmdGaWx0ZXIgfHwgVHdlZW5MaXRlLmRlZmF1bHRTdHJpbmdGaWx0ZXIsIHB0KTtcblx0XHRcdFx0XHRcdHB0ID0ge3Q6IGJsb2IsIHA6IFwic2V0UmF0aW9cIiwgczogMCwgYzogMSwgZjogMiwgcGc6IDAsIG46IG92ZXJ3cml0ZVByb3AgfHwgcHJvcCwgcHI6IDAsIG06IDB9OyAvL1wiMlwiIGluZGljYXRlcyBpdCdzIGEgQmxvYiBwcm9wZXJ0eSB0d2Vlbi4gTmVlZGVkIGZvciBSb3VuZFByb3BzUGx1Z2luIGZvciBleGFtcGxlLlxuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRwdC5zID0gcGFyc2VGbG9hdChzKTtcblx0XHRcdFx0XHRcdGlmICghaXNSZWxhdGl2ZSkge1xuXHRcdFx0XHRcdFx0XHRwdC5jID0gKHBhcnNlRmxvYXQoZW5kKSAtIHB0LnMpIHx8IDA7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChwdC5jKSB7IC8vb25seSBhZGQgaXQgdG8gdGhlIGxpbmtlZCBsaXN0IGlmIHRoZXJlJ3MgYSBjaGFuZ2UuXG5cdFx0XHRcdFx0aWYgKChwdC5fbmV4dCA9IHRoaXMuX2ZpcnN0UFQpKSB7XG5cdFx0XHRcdFx0XHRwdC5fbmV4dC5fcHJldiA9IHB0O1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHR0aGlzLl9maXJzdFBUID0gcHQ7XG5cdFx0XHRcdFx0cmV0dXJuIHB0O1xuXHRcdFx0XHR9XG5cdFx0XHR9LFxuXHRcdFx0X2ludGVybmFscyA9IFR3ZWVuTGl0ZS5faW50ZXJuYWxzID0ge2lzQXJyYXk6X2lzQXJyYXksIGlzU2VsZWN0b3I6X2lzU2VsZWN0b3IsIGxhenlUd2VlbnM6X2xhenlUd2VlbnMsIGJsb2JEaWY6X2Jsb2JEaWZ9LCAvL2dpdmVzIHVzIGEgd2F5IHRvIGV4cG9zZSBjZXJ0YWluIHByaXZhdGUgdmFsdWVzIHRvIG90aGVyIEdyZWVuU29jayBjbGFzc2VzIHdpdGhvdXQgY29udGFtaW5hdGluZyB0aGEgbWFpbiBUd2VlbkxpdGUgb2JqZWN0LlxuXHRcdFx0X3BsdWdpbnMgPSBUd2VlbkxpdGUuX3BsdWdpbnMgPSB7fSxcblx0XHRcdF90d2Vlbkxvb2t1cCA9IF9pbnRlcm5hbHMudHdlZW5Mb29rdXAgPSB7fSxcblx0XHRcdF90d2Vlbkxvb2t1cE51bSA9IDAsXG5cdFx0XHRfcmVzZXJ2ZWRQcm9wcyA9IF9pbnRlcm5hbHMucmVzZXJ2ZWRQcm9wcyA9IHtlYXNlOjEsIGRlbGF5OjEsIG92ZXJ3cml0ZToxLCBvbkNvbXBsZXRlOjEsIG9uQ29tcGxldGVQYXJhbXM6MSwgb25Db21wbGV0ZVNjb3BlOjEsIHVzZUZyYW1lczoxLCBydW5CYWNrd2FyZHM6MSwgc3RhcnRBdDoxLCBvblVwZGF0ZToxLCBvblVwZGF0ZVBhcmFtczoxLCBvblVwZGF0ZVNjb3BlOjEsIG9uU3RhcnQ6MSwgb25TdGFydFBhcmFtczoxLCBvblN0YXJ0U2NvcGU6MSwgb25SZXZlcnNlQ29tcGxldGU6MSwgb25SZXZlcnNlQ29tcGxldGVQYXJhbXM6MSwgb25SZXZlcnNlQ29tcGxldGVTY29wZToxLCBvblJlcGVhdDoxLCBvblJlcGVhdFBhcmFtczoxLCBvblJlcGVhdFNjb3BlOjEsIGVhc2VQYXJhbXM6MSwgeW95bzoxLCBpbW1lZGlhdGVSZW5kZXI6MSwgcmVwZWF0OjEsIHJlcGVhdERlbGF5OjEsIGRhdGE6MSwgcGF1c2VkOjEsIHJldmVyc2VkOjEsIGF1dG9DU1M6MSwgbGF6eToxLCBvbk92ZXJ3cml0ZToxLCBjYWxsYmFja1Njb3BlOjEsIHN0cmluZ0ZpbHRlcjoxLCBpZDoxLCB5b3lvRWFzZToxfSxcblx0XHRcdF9vdmVyd3JpdGVMb29rdXAgPSB7bm9uZTowLCBhbGw6MSwgYXV0bzoyLCBjb25jdXJyZW50OjMsIGFsbE9uU3RhcnQ6NCwgcHJlZXhpc3Rpbmc6NSwgXCJ0cnVlXCI6MSwgXCJmYWxzZVwiOjB9LFxuXHRcdFx0X3Jvb3RGcmFtZXNUaW1lbGluZSA9IEFuaW1hdGlvbi5fcm9vdEZyYW1lc1RpbWVsaW5lID0gbmV3IFNpbXBsZVRpbWVsaW5lKCksXG5cdFx0XHRfcm9vdFRpbWVsaW5lID0gQW5pbWF0aW9uLl9yb290VGltZWxpbmUgPSBuZXcgU2ltcGxlVGltZWxpbmUoKSxcblx0XHRcdF9uZXh0R0NGcmFtZSA9IDMwLFxuXHRcdFx0X2xhenlSZW5kZXIgPSBfaW50ZXJuYWxzLmxhenlSZW5kZXIgPSBmdW5jdGlvbigpIHtcblx0XHRcdFx0dmFyIGkgPSBfbGF6eVR3ZWVucy5sZW5ndGgsXG5cdFx0XHRcdFx0dHdlZW47XG5cdFx0XHRcdF9sYXp5TG9va3VwID0ge307XG5cdFx0XHRcdHdoaWxlICgtLWkgPiAtMSkge1xuXHRcdFx0XHRcdHR3ZWVuID0gX2xhenlUd2VlbnNbaV07XG5cdFx0XHRcdFx0aWYgKHR3ZWVuICYmIHR3ZWVuLl9sYXp5ICE9PSBmYWxzZSkge1xuXHRcdFx0XHRcdFx0dHdlZW4ucmVuZGVyKHR3ZWVuLl9sYXp5WzBdLCB0d2Vlbi5fbGF6eVsxXSwgdHJ1ZSk7XG5cdFx0XHRcdFx0XHR0d2Vlbi5fbGF6eSA9IGZhbHNlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHRfbGF6eVR3ZWVucy5sZW5ndGggPSAwO1xuXHRcdFx0fTtcblxuXHRcdF9yb290VGltZWxpbmUuX3N0YXJ0VGltZSA9IF90aWNrZXIudGltZTtcblx0XHRfcm9vdEZyYW1lc1RpbWVsaW5lLl9zdGFydFRpbWUgPSBfdGlja2VyLmZyYW1lO1xuXHRcdF9yb290VGltZWxpbmUuX2FjdGl2ZSA9IF9yb290RnJhbWVzVGltZWxpbmUuX2FjdGl2ZSA9IHRydWU7XG5cdFx0c2V0VGltZW91dChfbGF6eVJlbmRlciwgMSk7IC8vb24gc29tZSBtb2JpbGUgZGV2aWNlcywgdGhlcmUgaXNuJ3QgYSBcInRpY2tcIiBiZWZvcmUgY29kZSBydW5zIHdoaWNoIG1lYW5zIGFueSBsYXp5IHJlbmRlcnMgd291bGRuJ3QgcnVuIGJlZm9yZSB0aGUgbmV4dCBvZmZpY2lhbCBcInRpY2tcIi5cblxuXHRcdEFuaW1hdGlvbi5fdXBkYXRlUm9vdCA9IFR3ZWVuTGl0ZS5yZW5kZXIgPSBmdW5jdGlvbigpIHtcblx0XHRcdFx0dmFyIGksIGEsIHA7XG5cdFx0XHRcdGlmIChfbGF6eVR3ZWVucy5sZW5ndGgpIHsgLy9pZiBjb2RlIGlzIHJ1biBvdXRzaWRlIG9mIHRoZSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUgbG9vcCwgdGhlcmUgbWF5IGJlIHR3ZWVucyBxdWV1ZWQgQUZURVIgdGhlIGVuZ2luZSByZWZyZXNoZWQsIHNvIHdlIG5lZWQgdG8gZW5zdXJlIGFueSBwZW5kaW5nIHJlbmRlcnMgb2NjdXIgYmVmb3JlIHdlIHJlZnJlc2ggYWdhaW4uXG5cdFx0XHRcdFx0X2xhenlSZW5kZXIoKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRfcm9vdFRpbWVsaW5lLnJlbmRlcigoX3RpY2tlci50aW1lIC0gX3Jvb3RUaW1lbGluZS5fc3RhcnRUaW1lKSAqIF9yb290VGltZWxpbmUuX3RpbWVTY2FsZSwgZmFsc2UsIGZhbHNlKTtcblx0XHRcdFx0X3Jvb3RGcmFtZXNUaW1lbGluZS5yZW5kZXIoKF90aWNrZXIuZnJhbWUgLSBfcm9vdEZyYW1lc1RpbWVsaW5lLl9zdGFydFRpbWUpICogX3Jvb3RGcmFtZXNUaW1lbGluZS5fdGltZVNjYWxlLCBmYWxzZSwgZmFsc2UpO1xuXHRcdFx0XHRpZiAoX2xhenlUd2VlbnMubGVuZ3RoKSB7XG5cdFx0XHRcdFx0X2xhenlSZW5kZXIoKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoX3RpY2tlci5mcmFtZSA+PSBfbmV4dEdDRnJhbWUpIHsgLy9kdW1wIGdhcmJhZ2UgZXZlcnkgMTIwIGZyYW1lcyBvciB3aGF0ZXZlciB0aGUgdXNlciBzZXRzIFR3ZWVuTGl0ZS5hdXRvU2xlZXAgdG9cblx0XHRcdFx0XHRfbmV4dEdDRnJhbWUgPSBfdGlja2VyLmZyYW1lICsgKHBhcnNlSW50KFR3ZWVuTGl0ZS5hdXRvU2xlZXAsIDEwKSB8fCAxMjApO1xuXHRcdFx0XHRcdGZvciAocCBpbiBfdHdlZW5Mb29rdXApIHtcblx0XHRcdFx0XHRcdGEgPSBfdHdlZW5Mb29rdXBbcF0udHdlZW5zO1xuXHRcdFx0XHRcdFx0aSA9IGEubGVuZ3RoO1xuXHRcdFx0XHRcdFx0d2hpbGUgKC0taSA+IC0xKSB7XG5cdFx0XHRcdFx0XHRcdGlmIChhW2ldLl9nYykge1xuXHRcdFx0XHRcdFx0XHRcdGEuc3BsaWNlKGksIDEpO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRpZiAoYS5sZW5ndGggPT09IDApIHtcblx0XHRcdFx0XHRcdFx0ZGVsZXRlIF90d2Vlbkxvb2t1cFtwXTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0Ly9pZiB0aGVyZSBhcmUgbm8gbW9yZSB0d2VlbnMgaW4gdGhlIHJvb3QgdGltZWxpbmVzLCBvciBpZiB0aGV5J3JlIGFsbCBwYXVzZWQsIG1ha2UgdGhlIF90aW1lciBzbGVlcCB0byByZWR1Y2UgbG9hZCBvbiB0aGUgQ1BVIHNsaWdodGx5XG5cdFx0XHRcdFx0cCA9IF9yb290VGltZWxpbmUuX2ZpcnN0O1xuXHRcdFx0XHRcdGlmICghcCB8fCBwLl9wYXVzZWQpIGlmIChUd2VlbkxpdGUuYXV0b1NsZWVwICYmICFfcm9vdEZyYW1lc1RpbWVsaW5lLl9maXJzdCAmJiBfdGlja2VyLl9saXN0ZW5lcnMudGljay5sZW5ndGggPT09IDEpIHtcblx0XHRcdFx0XHRcdHdoaWxlIChwICYmIHAuX3BhdXNlZCkge1xuXHRcdFx0XHRcdFx0XHRwID0gcC5fbmV4dDtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdGlmICghcCkge1xuXHRcdFx0XHRcdFx0XHRfdGlja2VyLnNsZWVwKCk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9O1xuXG5cdFx0X3RpY2tlci5hZGRFdmVudExpc3RlbmVyKFwidGlja1wiLCBBbmltYXRpb24uX3VwZGF0ZVJvb3QpO1xuXG5cdFx0dmFyIF9yZWdpc3RlciA9IGZ1bmN0aW9uKHRhcmdldCwgdHdlZW4sIHNjcnViKSB7XG5cdFx0XHRcdHZhciBpZCA9IHRhcmdldC5fZ3NUd2VlbklELCBhLCBpO1xuXHRcdFx0XHRpZiAoIV90d2Vlbkxvb2t1cFtpZCB8fCAodGFyZ2V0Ll9nc1R3ZWVuSUQgPSBpZCA9IFwidFwiICsgKF90d2Vlbkxvb2t1cE51bSsrKSldKSB7XG5cdFx0XHRcdFx0X3R3ZWVuTG9va3VwW2lkXSA9IHt0YXJnZXQ6dGFyZ2V0LCB0d2VlbnM6W119O1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmICh0d2Vlbikge1xuXHRcdFx0XHRcdGEgPSBfdHdlZW5Mb29rdXBbaWRdLnR3ZWVucztcblx0XHRcdFx0XHRhWyhpID0gYS5sZW5ndGgpXSA9IHR3ZWVuO1xuXHRcdFx0XHRcdGlmIChzY3J1Yikge1xuXHRcdFx0XHRcdFx0d2hpbGUgKC0taSA+IC0xKSB7XG5cdFx0XHRcdFx0XHRcdGlmIChhW2ldID09PSB0d2Vlbikge1xuXHRcdFx0XHRcdFx0XHRcdGEuc3BsaWNlKGksIDEpO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRcdHJldHVybiBfdHdlZW5Mb29rdXBbaWRdLnR3ZWVucztcblx0XHRcdH0sXG5cdFx0XHRfb25PdmVyd3JpdGUgPSBmdW5jdGlvbihvdmVyd3JpdHRlblR3ZWVuLCBvdmVyd3JpdGluZ1R3ZWVuLCB0YXJnZXQsIGtpbGxlZFByb3BzKSB7XG5cdFx0XHRcdHZhciBmdW5jID0gb3ZlcndyaXR0ZW5Ud2Vlbi52YXJzLm9uT3ZlcndyaXRlLCByMSwgcjI7XG5cdFx0XHRcdGlmIChmdW5jKSB7XG5cdFx0XHRcdFx0cjEgPSBmdW5jKG92ZXJ3cml0dGVuVHdlZW4sIG92ZXJ3cml0aW5nVHdlZW4sIHRhcmdldCwga2lsbGVkUHJvcHMpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGZ1bmMgPSBUd2VlbkxpdGUub25PdmVyd3JpdGU7XG5cdFx0XHRcdGlmIChmdW5jKSB7XG5cdFx0XHRcdFx0cjIgPSBmdW5jKG92ZXJ3cml0dGVuVHdlZW4sIG92ZXJ3cml0aW5nVHdlZW4sIHRhcmdldCwga2lsbGVkUHJvcHMpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHJldHVybiAocjEgIT09IGZhbHNlICYmIHIyICE9PSBmYWxzZSk7XG5cdFx0XHR9LFxuXHRcdFx0X2FwcGx5T3ZlcndyaXRlID0gZnVuY3Rpb24odGFyZ2V0LCB0d2VlbiwgcHJvcHMsIG1vZGUsIHNpYmxpbmdzKSB7XG5cdFx0XHRcdHZhciBpLCBjaGFuZ2VkLCBjdXJUd2VlbiwgbDtcblx0XHRcdFx0aWYgKG1vZGUgPT09IDEgfHwgbW9kZSA+PSA0KSB7XG5cdFx0XHRcdFx0bCA9IHNpYmxpbmdzLmxlbmd0aDtcblx0XHRcdFx0XHRmb3IgKGkgPSAwOyBpIDwgbDsgaSsrKSB7XG5cdFx0XHRcdFx0XHRpZiAoKGN1clR3ZWVuID0gc2libGluZ3NbaV0pICE9PSB0d2Vlbikge1xuXHRcdFx0XHRcdFx0XHRpZiAoIWN1clR3ZWVuLl9nYykge1xuXHRcdFx0XHRcdFx0XHRcdGlmIChjdXJUd2Vlbi5fa2lsbChudWxsLCB0YXJnZXQsIHR3ZWVuKSkge1xuXHRcdFx0XHRcdFx0XHRcdFx0Y2hhbmdlZCA9IHRydWU7XG5cdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9IGVsc2UgaWYgKG1vZGUgPT09IDUpIHtcblx0XHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHJldHVybiBjaGFuZ2VkO1xuXHRcdFx0XHR9XG5cdFx0XHRcdC8vTk9URTogQWRkIDAuMDAwMDAwMDAwMSB0byBvdmVyY29tZSBmbG9hdGluZyBwb2ludCBlcnJvcnMgdGhhdCBjYW4gY2F1c2UgdGhlIHN0YXJ0VGltZSB0byBiZSBWRVJZIHNsaWdodGx5IG9mZiAod2hlbiBhIHR3ZWVuJ3MgdGltZSgpIGlzIHNldCBmb3IgZXhhbXBsZSlcblx0XHRcdFx0dmFyIHN0YXJ0VGltZSA9IHR3ZWVuLl9zdGFydFRpbWUgKyBfdGlueU51bSxcblx0XHRcdFx0XHRvdmVybGFwcyA9IFtdLFxuXHRcdFx0XHRcdG9Db3VudCA9IDAsXG5cdFx0XHRcdFx0emVyb0R1ciA9ICh0d2Vlbi5fZHVyYXRpb24gPT09IDApLFxuXHRcdFx0XHRcdGdsb2JhbFN0YXJ0O1xuXHRcdFx0XHRpID0gc2libGluZ3MubGVuZ3RoO1xuXHRcdFx0XHR3aGlsZSAoLS1pID4gLTEpIHtcblx0XHRcdFx0XHRpZiAoKGN1clR3ZWVuID0gc2libGluZ3NbaV0pID09PSB0d2VlbiB8fCBjdXJUd2Vlbi5fZ2MgfHwgY3VyVHdlZW4uX3BhdXNlZCkge1xuXHRcdFx0XHRcdFx0Ly9pZ25vcmVcblx0XHRcdFx0XHR9IGVsc2UgaWYgKGN1clR3ZWVuLl90aW1lbGluZSAhPT0gdHdlZW4uX3RpbWVsaW5lKSB7XG5cdFx0XHRcdFx0XHRnbG9iYWxTdGFydCA9IGdsb2JhbFN0YXJ0IHx8IF9jaGVja092ZXJsYXAodHdlZW4sIDAsIHplcm9EdXIpO1xuXHRcdFx0XHRcdFx0aWYgKF9jaGVja092ZXJsYXAoY3VyVHdlZW4sIGdsb2JhbFN0YXJ0LCB6ZXJvRHVyKSA9PT0gMCkge1xuXHRcdFx0XHRcdFx0XHRvdmVybGFwc1tvQ291bnQrK10gPSBjdXJUd2Vlbjtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9IGVsc2UgaWYgKGN1clR3ZWVuLl9zdGFydFRpbWUgPD0gc3RhcnRUaW1lKSBpZiAoY3VyVHdlZW4uX3N0YXJ0VGltZSArIGN1clR3ZWVuLnRvdGFsRHVyYXRpb24oKSAvIGN1clR3ZWVuLl90aW1lU2NhbGUgPiBzdGFydFRpbWUpIGlmICghKCh6ZXJvRHVyIHx8ICFjdXJUd2Vlbi5faW5pdHRlZCkgJiYgc3RhcnRUaW1lIC0gY3VyVHdlZW4uX3N0YXJ0VGltZSA8PSAwLjAwMDAwMDAwMDIpKSB7XG5cdFx0XHRcdFx0XHRvdmVybGFwc1tvQ291bnQrK10gPSBjdXJUd2Vlbjtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpID0gb0NvdW50O1xuXHRcdFx0XHR3aGlsZSAoLS1pID4gLTEpIHtcblx0XHRcdFx0XHRjdXJUd2VlbiA9IG92ZXJsYXBzW2ldO1xuXHRcdFx0XHRcdGlmIChtb2RlID09PSAyKSBpZiAoY3VyVHdlZW4uX2tpbGwocHJvcHMsIHRhcmdldCwgdHdlZW4pKSB7XG5cdFx0XHRcdFx0XHRjaGFuZ2VkID0gdHJ1ZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0aWYgKG1vZGUgIT09IDIgfHwgKCFjdXJUd2Vlbi5fZmlyc3RQVCAmJiBjdXJUd2Vlbi5faW5pdHRlZCkpIHtcblx0XHRcdFx0XHRcdGlmIChtb2RlICE9PSAyICYmICFfb25PdmVyd3JpdGUoY3VyVHdlZW4sIHR3ZWVuKSkge1xuXHRcdFx0XHRcdFx0XHRjb250aW51ZTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdGlmIChjdXJUd2Vlbi5fZW5hYmxlZChmYWxzZSwgZmFsc2UpKSB7IC8vaWYgYWxsIHByb3BlcnR5IHR3ZWVucyBoYXZlIGJlZW4gb3ZlcndyaXR0ZW4sIGtpbGwgdGhlIHR3ZWVuLlxuXHRcdFx0XHRcdFx0XHRjaGFuZ2VkID0gdHJ1ZTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdFx0cmV0dXJuIGNoYW5nZWQ7XG5cdFx0XHR9LFxuXHRcdFx0X2NoZWNrT3ZlcmxhcCA9IGZ1bmN0aW9uKHR3ZWVuLCByZWZlcmVuY2UsIHplcm9EdXIpIHtcblx0XHRcdFx0dmFyIHRsID0gdHdlZW4uX3RpbWVsaW5lLFxuXHRcdFx0XHRcdHRzID0gdGwuX3RpbWVTY2FsZSxcblx0XHRcdFx0XHR0ID0gdHdlZW4uX3N0YXJ0VGltZTtcblx0XHRcdFx0d2hpbGUgKHRsLl90aW1lbGluZSkge1xuXHRcdFx0XHRcdHQgKz0gdGwuX3N0YXJ0VGltZTtcblx0XHRcdFx0XHR0cyAqPSB0bC5fdGltZVNjYWxlO1xuXHRcdFx0XHRcdGlmICh0bC5fcGF1c2VkKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gLTEwMDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0dGwgPSB0bC5fdGltZWxpbmU7XG5cdFx0XHRcdH1cblx0XHRcdFx0dCAvPSB0cztcblx0XHRcdFx0cmV0dXJuICh0ID4gcmVmZXJlbmNlKSA/IHQgLSByZWZlcmVuY2UgOiAoKHplcm9EdXIgJiYgdCA9PT0gcmVmZXJlbmNlKSB8fCAoIXR3ZWVuLl9pbml0dGVkICYmIHQgLSByZWZlcmVuY2UgPCAyICogX3RpbnlOdW0pKSA/IF90aW55TnVtIDogKCh0ICs9IHR3ZWVuLnRvdGFsRHVyYXRpb24oKSAvIHR3ZWVuLl90aW1lU2NhbGUgLyB0cykgPiByZWZlcmVuY2UgKyBfdGlueU51bSkgPyAwIDogdCAtIHJlZmVyZW5jZSAtIF90aW55TnVtO1xuXHRcdFx0fTtcblxuXG4vLy0tLS0gVHdlZW5MaXRlIGluc3RhbmNlIG1ldGhvZHMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuXHRcdHAuX2luaXQgPSBmdW5jdGlvbigpIHtcblx0XHRcdHZhciB2ID0gdGhpcy52YXJzLFxuXHRcdFx0XHRvcCA9IHRoaXMuX292ZXJ3cml0dGVuUHJvcHMsXG5cdFx0XHRcdGR1ciA9IHRoaXMuX2R1cmF0aW9uLFxuXHRcdFx0XHRpbW1lZGlhdGUgPSAhIXYuaW1tZWRpYXRlUmVuZGVyLFxuXHRcdFx0XHRlYXNlID0gdi5lYXNlLFxuXHRcdFx0XHRpLCBpbml0UGx1Z2lucywgcHQsIHAsIHN0YXJ0VmFycywgbDtcblx0XHRcdGlmICh2LnN0YXJ0QXQpIHtcblx0XHRcdFx0aWYgKHRoaXMuX3N0YXJ0QXQpIHtcblx0XHRcdFx0XHR0aGlzLl9zdGFydEF0LnJlbmRlcigtMSwgdHJ1ZSk7IC8vaWYgd2UndmUgcnVuIGEgc3RhcnRBdCBwcmV2aW91c2x5ICh3aGVuIHRoZSB0d2VlbiBpbnN0YW50aWF0ZWQpLCB3ZSBzaG91bGQgcmV2ZXJ0IGl0IHNvIHRoYXQgdGhlIHZhbHVlcyByZS1pbnN0YW50aWF0ZSBjb3JyZWN0bHkgcGFydGljdWxhcmx5IGZvciByZWxhdGl2ZSB0d2VlbnMuIFdpdGhvdXQgdGhpcywgYSBUd2VlbkxpdGUuZnJvbVRvKG9iaiwgMSwge3g6XCIrPTEwMFwifSwge3g6XCItPTEwMFwifSksIGZvciBleGFtcGxlLCB3b3VsZCBhY3R1YWxseSBqdW1wIHRvICs9MjAwIGJlY2F1c2UgdGhlIHN0YXJ0QXQgd291bGQgcnVuIHR3aWNlLCBkb3VibGluZyB0aGUgcmVsYXRpdmUgY2hhbmdlLlxuXHRcdFx0XHRcdHRoaXMuX3N0YXJ0QXQua2lsbCgpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHN0YXJ0VmFycyA9IHt9O1xuXHRcdFx0XHRmb3IgKHAgaW4gdi5zdGFydEF0KSB7IC8vY29weSB0aGUgcHJvcGVydGllcy92YWx1ZXMgaW50byBhIG5ldyBvYmplY3QgdG8gYXZvaWQgY29sbGlzaW9ucywgbGlrZSB2YXIgdG8gPSB7eDowfSwgZnJvbSA9IHt4OjUwMH07IHRpbWVsaW5lLmZyb21UbyhlLCAxLCBmcm9tLCB0bykuZnJvbVRvKGUsIDEsIHRvLCBmcm9tKTtcblx0XHRcdFx0XHRzdGFydFZhcnNbcF0gPSB2LnN0YXJ0QXRbcF07XG5cdFx0XHRcdH1cblx0XHRcdFx0c3RhcnRWYXJzLmRhdGEgPSBcImlzU3RhcnRcIjtcblx0XHRcdFx0c3RhcnRWYXJzLm92ZXJ3cml0ZSA9IGZhbHNlO1xuXHRcdFx0XHRzdGFydFZhcnMuaW1tZWRpYXRlUmVuZGVyID0gdHJ1ZTtcblx0XHRcdFx0c3RhcnRWYXJzLmxhenkgPSAoaW1tZWRpYXRlICYmIHYubGF6eSAhPT0gZmFsc2UpO1xuXHRcdFx0XHRzdGFydFZhcnMuc3RhcnRBdCA9IHN0YXJ0VmFycy5kZWxheSA9IG51bGw7IC8vbm8gbmVzdGluZyBvZiBzdGFydEF0IG9iamVjdHMgYWxsb3dlZCAob3RoZXJ3aXNlIGl0IGNvdWxkIGNhdXNlIGFuIGluZmluaXRlIGxvb3ApLlxuXHRcdFx0XHRzdGFydFZhcnMub25VcGRhdGUgPSB2Lm9uVXBkYXRlO1xuXHRcdFx0XHRzdGFydFZhcnMub25VcGRhdGVQYXJhbXMgPSB2Lm9uVXBkYXRlUGFyYW1zO1xuXHRcdFx0XHRzdGFydFZhcnMub25VcGRhdGVTY29wZSA9IHYub25VcGRhdGVTY29wZSB8fCB2LmNhbGxiYWNrU2NvcGUgfHwgdGhpcztcblx0XHRcdFx0dGhpcy5fc3RhcnRBdCA9IFR3ZWVuTGl0ZS50byh0aGlzLnRhcmdldCB8fCB7fSwgMCwgc3RhcnRWYXJzKTtcblx0XHRcdFx0aWYgKGltbWVkaWF0ZSkge1xuXHRcdFx0XHRcdGlmICh0aGlzLl90aW1lID4gMCkge1xuXHRcdFx0XHRcdFx0dGhpcy5fc3RhcnRBdCA9IG51bGw7IC8vdHdlZW5zIHRoYXQgcmVuZGVyIGltbWVkaWF0ZWx5IChsaWtlIG1vc3QgZnJvbSgpIGFuZCBmcm9tVG8oKSB0d2VlbnMpIHNob3VsZG4ndCByZXZlcnQgd2hlbiB0aGVpciBwYXJlbnQgdGltZWxpbmUncyBwbGF5aGVhZCBnb2VzIGJhY2t3YXJkIHBhc3QgdGhlIHN0YXJ0VGltZSBiZWNhdXNlIHRoZSBpbml0aWFsIHJlbmRlciBjb3VsZCBoYXZlIGhhcHBlbmVkIGFueXRpbWUgYW5kIGl0IHNob3VsZG4ndCBiZSBkaXJlY3RseSBjb3JyZWxhdGVkIHRvIHRoaXMgdHdlZW4ncyBzdGFydFRpbWUuIEltYWdpbmUgc2V0dGluZyB1cCBhIGNvbXBsZXggYW5pbWF0aW9uIHdoZXJlIHRoZSBiZWdpbm5pbmcgc3RhdGVzIG9mIHZhcmlvdXMgb2JqZWN0cyBhcmUgcmVuZGVyZWQgaW1tZWRpYXRlbHkgYnV0IHRoZSB0d2VlbiBkb2Vzbid0IGhhcHBlbiBmb3IgcXVpdGUgc29tZSB0aW1lIC0gaWYgd2UgcmV2ZXJ0IHRvIHRoZSBzdGFydGluZyB2YWx1ZXMgYXMgc29vbiBhcyB0aGUgcGxheWhlYWQgZ29lcyBiYWNrd2FyZCBwYXN0IHRoZSB0d2VlbidzIHN0YXJ0VGltZSwgaXQgd2lsbCB0aHJvdyB0aGluZ3Mgb2ZmIHZpc3VhbGx5LiBSZXZlcnNpb24gc2hvdWxkIG9ubHkgaGFwcGVuIGluIFRpbWVsaW5lTGl0ZS9NYXggaW5zdGFuY2VzIHdoZXJlIGltbWVkaWF0ZVJlbmRlciB3YXMgZmFsc2UgKHdoaWNoIGlzIHRoZSBkZWZhdWx0IGluIHRoZSBjb252ZW5pZW5jZSBtZXRob2RzIGxpa2UgZnJvbSgpKS5cblx0XHRcdFx0XHR9IGVsc2UgaWYgKGR1ciAhPT0gMCkge1xuXHRcdFx0XHRcdFx0cmV0dXJuOyAvL3dlIHNraXAgaW5pdGlhbGl6YXRpb24gaGVyZSBzbyB0aGF0IG92ZXJ3cml0aW5nIGRvZXNuJ3Qgb2NjdXIgdW50aWwgdGhlIHR3ZWVuIGFjdHVhbGx5IGJlZ2lucy4gT3RoZXJ3aXNlLCBpZiB5b3UgY3JlYXRlIHNldmVyYWwgaW1tZWRpYXRlUmVuZGVyOnRydWUgdHdlZW5zIG9mIHRoZSBzYW1lIHRhcmdldC9wcm9wZXJ0aWVzIHRvIGRyb3AgaW50byBhIFRpbWVsaW5lTGl0ZSBvciBUaW1lbGluZU1heCwgdGhlIGxhc3Qgb25lIGNyZWF0ZWQgd291bGQgb3ZlcndyaXRlIHRoZSBmaXJzdCBvbmVzIGJlY2F1c2UgdGhleSBkaWRuJ3QgZ2V0IHBsYWNlZCBpbnRvIHRoZSB0aW1lbGluZSB5ZXQgYmVmb3JlIHRoZSBmaXJzdCByZW5kZXIgb2NjdXJzIGFuZCBraWNrcyBpbiBvdmVyd3JpdGluZy5cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSBpZiAodi5ydW5CYWNrd2FyZHMgJiYgZHVyICE9PSAwKSB7XG5cdFx0XHRcdC8vZnJvbSgpIHR3ZWVucyBtdXN0IGJlIGhhbmRsZWQgdW5pcXVlbHk6IHRoZWlyIGJlZ2lubmluZyB2YWx1ZXMgbXVzdCBiZSByZW5kZXJlZCBidXQgd2UgZG9uJ3Qgd2FudCBvdmVyd3JpdGluZyB0byBvY2N1ciB5ZXQgKHdoZW4gdGltZSBpcyBzdGlsbCAwKS4gV2FpdCB1bnRpbCB0aGUgdHdlZW4gYWN0dWFsbHkgYmVnaW5zIGJlZm9yZSBkb2luZyBhbGwgdGhlIHJvdXRpbmVzIGxpa2Ugb3ZlcndyaXRpbmcuIEF0IHRoYXQgdGltZSwgd2Ugc2hvdWxkIHJlbmRlciBhdCB0aGUgRU5EIG9mIHRoZSB0d2VlbiB0byBlbnN1cmUgdGhhdCB0aGluZ3MgaW5pdGlhbGl6ZSBjb3JyZWN0bHkgKHJlbWVtYmVyLCBmcm9tKCkgdHdlZW5zIGdvIGJhY2t3YXJkcylcblx0XHRcdFx0aWYgKHRoaXMuX3N0YXJ0QXQpIHtcblx0XHRcdFx0XHR0aGlzLl9zdGFydEF0LnJlbmRlcigtMSwgdHJ1ZSk7XG5cdFx0XHRcdFx0dGhpcy5fc3RhcnRBdC5raWxsKCk7XG5cdFx0XHRcdFx0dGhpcy5fc3RhcnRBdCA9IG51bGw7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0aWYgKHRoaXMuX3RpbWUgIT09IDApIHsgLy9pbiByYXJlIGNhc2VzIChsaWtlIGlmIGEgZnJvbSgpIHR3ZWVuIHJ1bnMgYW5kIHRoZW4gaXMgaW52YWxpZGF0ZSgpLWVkKSwgaW1tZWRpYXRlUmVuZGVyIGNvdWxkIGJlIHRydWUgYnV0IHRoZSBpbml0aWFsIGZvcmNlZC1yZW5kZXIgZ2V0cyBza2lwcGVkLCBzbyB0aGVyZSdzIG5vIG5lZWQgdG8gZm9yY2UgdGhlIHJlbmRlciBpbiB0aGlzIGNvbnRleHQgd2hlbiB0aGUgX3RpbWUgaXMgZ3JlYXRlciB0aGFuIDBcblx0XHRcdFx0XHRcdGltbWVkaWF0ZSA9IGZhbHNlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRwdCA9IHt9O1xuXHRcdFx0XHRcdGZvciAocCBpbiB2KSB7IC8vY29weSBwcm9wcyBpbnRvIGEgbmV3IG9iamVjdCBhbmQgc2tpcCBhbnkgcmVzZXJ2ZWQgcHJvcHMsIG90aGVyd2lzZSBvbkNvbXBsZXRlIG9yIG9uVXBkYXRlIG9yIG9uU3RhcnQgY291bGQgZmlyZS4gV2Ugc2hvdWxkLCBob3dldmVyLCBwZXJtaXQgYXV0b0NTUyB0byBnbyB0aHJvdWdoLlxuXHRcdFx0XHRcdFx0aWYgKCFfcmVzZXJ2ZWRQcm9wc1twXSB8fCBwID09PSBcImF1dG9DU1NcIikge1xuXHRcdFx0XHRcdFx0XHRwdFtwXSA9IHZbcF07XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHB0Lm92ZXJ3cml0ZSA9IDA7XG5cdFx0XHRcdFx0cHQuZGF0YSA9IFwiaXNGcm9tU3RhcnRcIjsgLy93ZSB0YWcgdGhlIHR3ZWVuIHdpdGggYXMgXCJpc0Zyb21TdGFydFwiIHNvIHRoYXQgaWYgW2luc2lkZSBhIHBsdWdpbl0gd2UgbmVlZCB0byBvbmx5IGRvIHNvbWV0aGluZyBhdCB0aGUgdmVyeSBFTkQgb2YgYSB0d2Vlbiwgd2UgaGF2ZSBhIHdheSBvZiBpZGVudGlmeWluZyB0aGlzIHR3ZWVuIGFzIG1lcmVseSB0aGUgb25lIHRoYXQncyBzZXR0aW5nIHRoZSBiZWdpbm5pbmcgdmFsdWVzIGZvciBhIFwiZnJvbSgpXCIgdHdlZW4uIEZvciBleGFtcGxlLCBjbGVhclByb3BzIGluIENTU1BsdWdpbiBzaG91bGQgb25seSBnZXQgYXBwbGllZCBhdCB0aGUgdmVyeSBFTkQgb2YgYSB0d2VlbiBhbmQgd2l0aG91dCB0aGlzIHRhZywgZnJvbSguLi57aGVpZ2h0OjEwMCwgY2xlYXJQcm9wczpcImhlaWdodFwiLCBkZWxheToxfSkgd291bGQgd2lwZSB0aGUgaGVpZ2h0IGF0IHRoZSBiZWdpbm5pbmcgb2YgdGhlIHR3ZWVuIGFuZCBhZnRlciAxIHNlY29uZCwgaXQnZCBraWNrIGJhY2sgaW4uXG5cdFx0XHRcdFx0cHQubGF6eSA9IChpbW1lZGlhdGUgJiYgdi5sYXp5ICE9PSBmYWxzZSk7XG5cdFx0XHRcdFx0cHQuaW1tZWRpYXRlUmVuZGVyID0gaW1tZWRpYXRlOyAvL3plcm8tZHVyYXRpb24gdHdlZW5zIHJlbmRlciBpbW1lZGlhdGVseSBieSBkZWZhdWx0LCBidXQgaWYgd2UncmUgbm90IHNwZWNpZmljYWxseSBpbnN0cnVjdGVkIHRvIHJlbmRlciB0aGlzIHR3ZWVuIGltbWVkaWF0ZWx5LCB3ZSBzaG91bGQgc2tpcCB0aGlzIGFuZCBtZXJlbHkgX2luaXQoKSB0byByZWNvcmQgdGhlIHN0YXJ0aW5nIHZhbHVlcyAocmVuZGVyaW5nIHRoZW0gaW1tZWRpYXRlbHkgd291bGQgcHVzaCB0aGVtIHRvIGNvbXBsZXRpb24gd2hpY2ggaXMgd2FzdGVmdWwgaW4gdGhhdCBjYXNlIC0gd2UnZCBoYXZlIHRvIHJlbmRlcigtMSkgaW1tZWRpYXRlbHkgYWZ0ZXIpXG5cdFx0XHRcdFx0dGhpcy5fc3RhcnRBdCA9IFR3ZWVuTGl0ZS50byh0aGlzLnRhcmdldCwgMCwgcHQpO1xuXHRcdFx0XHRcdGlmICghaW1tZWRpYXRlKSB7XG5cdFx0XHRcdFx0XHR0aGlzLl9zdGFydEF0Ll9pbml0KCk7IC8vZW5zdXJlcyB0aGF0IHRoZSBpbml0aWFsIHZhbHVlcyBhcmUgcmVjb3JkZWRcblx0XHRcdFx0XHRcdHRoaXMuX3N0YXJ0QXQuX2VuYWJsZWQoZmFsc2UpOyAvL25vIG5lZWQgdG8gaGF2ZSB0aGUgdHdlZW4gcmVuZGVyIG9uIHRoZSBuZXh0IGN5Y2xlLiBEaXNhYmxlIGl0IGJlY2F1c2Ugd2UnbGwgYWx3YXlzIG1hbnVhbGx5IGNvbnRyb2wgdGhlIHJlbmRlcnMgb2YgdGhlIF9zdGFydEF0IHR3ZWVuLlxuXHRcdFx0XHRcdFx0aWYgKHRoaXMudmFycy5pbW1lZGlhdGVSZW5kZXIpIHtcblx0XHRcdFx0XHRcdFx0dGhpcy5fc3RhcnRBdCA9IG51bGw7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSBlbHNlIGlmICh0aGlzLl90aW1lID09PSAwKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHR0aGlzLl9lYXNlID0gZWFzZSA9ICghZWFzZSkgPyBUd2VlbkxpdGUuZGVmYXVsdEVhc2UgOiAoZWFzZSBpbnN0YW5jZW9mIEVhc2UpID8gZWFzZSA6ICh0eXBlb2YoZWFzZSkgPT09IFwiZnVuY3Rpb25cIikgPyBuZXcgRWFzZShlYXNlLCB2LmVhc2VQYXJhbXMpIDogX2Vhc2VNYXBbZWFzZV0gfHwgVHdlZW5MaXRlLmRlZmF1bHRFYXNlO1xuXHRcdFx0aWYgKHYuZWFzZVBhcmFtcyBpbnN0YW5jZW9mIEFycmF5ICYmIGVhc2UuY29uZmlnKSB7XG5cdFx0XHRcdHRoaXMuX2Vhc2UgPSBlYXNlLmNvbmZpZy5hcHBseShlYXNlLCB2LmVhc2VQYXJhbXMpO1xuXHRcdFx0fVxuXHRcdFx0dGhpcy5fZWFzZVR5cGUgPSB0aGlzLl9lYXNlLl90eXBlO1xuXHRcdFx0dGhpcy5fZWFzZVBvd2VyID0gdGhpcy5fZWFzZS5fcG93ZXI7XG5cdFx0XHR0aGlzLl9maXJzdFBUID0gbnVsbDtcblxuXHRcdFx0aWYgKHRoaXMuX3RhcmdldHMpIHtcblx0XHRcdFx0bCA9IHRoaXMuX3RhcmdldHMubGVuZ3RoO1xuXHRcdFx0XHRmb3IgKGkgPSAwOyBpIDwgbDsgaSsrKSB7XG5cdFx0XHRcdFx0aWYgKCB0aGlzLl9pbml0UHJvcHMoIHRoaXMuX3RhcmdldHNbaV0sICh0aGlzLl9wcm9wTG9va3VwW2ldID0ge30pLCB0aGlzLl9zaWJsaW5nc1tpXSwgKG9wID8gb3BbaV0gOiBudWxsKSwgaSkgKSB7XG5cdFx0XHRcdFx0XHRpbml0UGx1Z2lucyA9IHRydWU7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRpbml0UGx1Z2lucyA9IHRoaXMuX2luaXRQcm9wcyh0aGlzLnRhcmdldCwgdGhpcy5fcHJvcExvb2t1cCwgdGhpcy5fc2libGluZ3MsIG9wLCAwKTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKGluaXRQbHVnaW5zKSB7XG5cdFx0XHRcdFR3ZWVuTGl0ZS5fb25QbHVnaW5FdmVudChcIl9vbkluaXRBbGxQcm9wc1wiLCB0aGlzKTsgLy9yZW9yZGVycyB0aGUgYXJyYXkgaW4gb3JkZXIgb2YgcHJpb3JpdHkuIFVzZXMgYSBzdGF0aWMgVHdlZW5QbHVnaW4gbWV0aG9kIGluIG9yZGVyIHRvIG1pbmltaXplIGZpbGUgc2l6ZSBpbiBUd2VlbkxpdGVcblx0XHRcdH1cblx0XHRcdGlmIChvcCkgaWYgKCF0aGlzLl9maXJzdFBUKSBpZiAodHlwZW9mKHRoaXMudGFyZ2V0KSAhPT0gXCJmdW5jdGlvblwiKSB7IC8vaWYgYWxsIHR3ZWVuaW5nIHByb3BlcnRpZXMgaGF2ZSBiZWVuIG92ZXJ3cml0dGVuLCBraWxsIHRoZSB0d2Vlbi4gSWYgdGhlIHRhcmdldCBpcyBhIGZ1bmN0aW9uLCBpdCdzIHByb2JhYmx5IGEgZGVsYXllZENhbGwgc28gbGV0IGl0IGxpdmUuXG5cdFx0XHRcdHRoaXMuX2VuYWJsZWQoZmFsc2UsIGZhbHNlKTtcblx0XHRcdH1cblx0XHRcdGlmICh2LnJ1bkJhY2t3YXJkcykge1xuXHRcdFx0XHRwdCA9IHRoaXMuX2ZpcnN0UFQ7XG5cdFx0XHRcdHdoaWxlIChwdCkge1xuXHRcdFx0XHRcdHB0LnMgKz0gcHQuYztcblx0XHRcdFx0XHRwdC5jID0gLXB0LmM7XG5cdFx0XHRcdFx0cHQgPSBwdC5fbmV4dDtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0dGhpcy5fb25VcGRhdGUgPSB2Lm9uVXBkYXRlO1xuXHRcdFx0dGhpcy5faW5pdHRlZCA9IHRydWU7XG5cdFx0fTtcblxuXHRcdHAuX2luaXRQcm9wcyA9IGZ1bmN0aW9uKHRhcmdldCwgcHJvcExvb2t1cCwgc2libGluZ3MsIG92ZXJ3cml0dGVuUHJvcHMsIGluZGV4KSB7XG5cdFx0XHR2YXIgcCwgaSwgaW5pdFBsdWdpbnMsIHBsdWdpbiwgcHQsIHY7XG5cdFx0XHRpZiAodGFyZ2V0ID09IG51bGwpIHtcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoX2xhenlMb29rdXBbdGFyZ2V0Ll9nc1R3ZWVuSURdKSB7XG5cdFx0XHRcdF9sYXp5UmVuZGVyKCk7IC8vaWYgb3RoZXIgdHdlZW5zIG9mIHRoZSBzYW1lIHRhcmdldCBoYXZlIHJlY2VudGx5IGluaXR0ZWQgYnV0IGhhdmVuJ3QgcmVuZGVyZWQgeWV0LCB3ZSd2ZSBnb3QgdG8gZm9yY2UgdGhlIHJlbmRlciBzbyB0aGF0IHRoZSBzdGFydGluZyB2YWx1ZXMgYXJlIGNvcnJlY3QgKGltYWdpbmUgcG9wdWxhdGluZyBhIHRpbWVsaW5lIHdpdGggYSBidW5jaCBvZiBzZXF1ZW50aWFsIHR3ZWVucyBhbmQgdGhlbiBqdW1waW5nIHRvIHRoZSBlbmQpXG5cdFx0XHR9XG5cblx0XHRcdGlmICghdGhpcy52YXJzLmNzcykgaWYgKHRhcmdldC5zdHlsZSkgaWYgKHRhcmdldCAhPT0gd2luZG93ICYmIHRhcmdldC5ub2RlVHlwZSkgaWYgKF9wbHVnaW5zLmNzcykgaWYgKHRoaXMudmFycy5hdXRvQ1NTICE9PSBmYWxzZSkgeyAvL2l0J3Mgc28gY29tbW9uIHRvIHVzZSBUd2VlbkxpdGUvTWF4IHRvIGFuaW1hdGUgdGhlIGNzcyBvZiBET00gZWxlbWVudHMsIHdlIGFzc3VtZSB0aGF0IGlmIHRoZSB0YXJnZXQgaXMgYSBET00gZWxlbWVudCwgdGhhdCdzIHdoYXQgaXMgaW50ZW5kZWQgKGEgY29udmVuaWVuY2Ugc28gdGhhdCB1c2VycyBkb24ndCBoYXZlIHRvIHdyYXAgdGhpbmdzIGluIGNzczp7fSwgYWx0aG91Z2ggd2Ugc3RpbGwgcmVjb21tZW5kIGl0IGZvciBhIHNsaWdodCBwZXJmb3JtYW5jZSBib29zdCBhbmQgYmV0dGVyIHNwZWNpZmljaXR5KS4gTm90ZTogd2UgY2Fubm90IGNoZWNrIFwibm9kZVR5cGVcIiBvbiB0aGUgd2luZG93IGluc2lkZSBhbiBpZnJhbWUuXG5cdFx0XHRcdF9hdXRvQ1NTKHRoaXMudmFycywgdGFyZ2V0KTtcblx0XHRcdH1cblx0XHRcdGZvciAocCBpbiB0aGlzLnZhcnMpIHtcblx0XHRcdFx0diA9IHRoaXMudmFyc1twXTtcblx0XHRcdFx0aWYgKF9yZXNlcnZlZFByb3BzW3BdKSB7XG5cdFx0XHRcdFx0aWYgKHYpIGlmICgodiBpbnN0YW5jZW9mIEFycmF5KSB8fCAodi5wdXNoICYmIF9pc0FycmF5KHYpKSkgaWYgKHYuam9pbihcIlwiKS5pbmRleE9mKFwie3NlbGZ9XCIpICE9PSAtMSkge1xuXHRcdFx0XHRcdFx0dGhpcy52YXJzW3BdID0gdiA9IHRoaXMuX3N3YXBTZWxmSW5QYXJhbXModiwgdGhpcyk7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdH0gZWxzZSBpZiAoX3BsdWdpbnNbcF0gJiYgKHBsdWdpbiA9IG5ldyBfcGx1Z2luc1twXSgpKS5fb25Jbml0VHdlZW4odGFyZ2V0LCB0aGlzLnZhcnNbcF0sIHRoaXMsIGluZGV4KSkge1xuXG5cdFx0XHRcdFx0Ly90IC0gdGFyZ2V0IFx0XHRbb2JqZWN0XVxuXHRcdFx0XHRcdC8vcCAtIHByb3BlcnR5IFx0XHRbc3RyaW5nXVxuXHRcdFx0XHRcdC8vcyAtIHN0YXJ0XHRcdFx0W251bWJlcl1cblx0XHRcdFx0XHQvL2MgLSBjaGFuZ2VcdFx0W251bWJlcl1cblx0XHRcdFx0XHQvL2YgLSBpc0Z1bmN0aW9uXHRbYm9vbGVhbl1cblx0XHRcdFx0XHQvL24gLSBuYW1lXHRcdFx0W3N0cmluZ11cblx0XHRcdFx0XHQvL3BnIC0gaXNQbHVnaW4gXHRbYm9vbGVhbl1cblx0XHRcdFx0XHQvL3ByIC0gcHJpb3JpdHlcdFx0W251bWJlcl1cblx0XHRcdFx0XHQvL20gLSBtb2QgICAgICAgICAgIFtmdW5jdGlvbiB8IDBdXG5cdFx0XHRcdFx0dGhpcy5fZmlyc3RQVCA9IHB0ID0ge19uZXh0OnRoaXMuX2ZpcnN0UFQsIHQ6cGx1Z2luLCBwOlwic2V0UmF0aW9cIiwgczowLCBjOjEsIGY6MSwgbjpwLCBwZzoxLCBwcjpwbHVnaW4uX3ByaW9yaXR5LCBtOjB9O1xuXHRcdFx0XHRcdGkgPSBwbHVnaW4uX292ZXJ3cml0ZVByb3BzLmxlbmd0aDtcblx0XHRcdFx0XHR3aGlsZSAoLS1pID4gLTEpIHtcblx0XHRcdFx0XHRcdHByb3BMb29rdXBbcGx1Z2luLl9vdmVyd3JpdGVQcm9wc1tpXV0gPSB0aGlzLl9maXJzdFBUO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRpZiAocGx1Z2luLl9wcmlvcml0eSB8fCBwbHVnaW4uX29uSW5pdEFsbFByb3BzKSB7XG5cdFx0XHRcdFx0XHRpbml0UGx1Z2lucyA9IHRydWU7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGlmIChwbHVnaW4uX29uRGlzYWJsZSB8fCBwbHVnaW4uX29uRW5hYmxlKSB7XG5cdFx0XHRcdFx0XHR0aGlzLl9ub3RpZnlQbHVnaW5zT2ZFbmFibGVkID0gdHJ1ZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0aWYgKHB0Ll9uZXh0KSB7XG5cdFx0XHRcdFx0XHRwdC5fbmV4dC5fcHJldiA9IHB0O1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHByb3BMb29rdXBbcF0gPSBfYWRkUHJvcFR3ZWVuLmNhbGwodGhpcywgdGFyZ2V0LCBwLCBcImdldFwiLCB2LCBwLCAwLCBudWxsLCB0aGlzLnZhcnMuc3RyaW5nRmlsdGVyLCBpbmRleCk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0aWYgKG92ZXJ3cml0dGVuUHJvcHMpIGlmICh0aGlzLl9raWxsKG92ZXJ3cml0dGVuUHJvcHMsIHRhcmdldCkpIHsgLy9hbm90aGVyIHR3ZWVuIG1heSBoYXZlIHRyaWVkIHRvIG92ZXJ3cml0ZSBwcm9wZXJ0aWVzIG9mIHRoaXMgdHdlZW4gYmVmb3JlIGluaXQoKSB3YXMgY2FsbGVkIChsaWtlIGlmIHR3byB0d2VlbnMgc3RhcnQgYXQgdGhlIHNhbWUgdGltZSwgdGhlIG9uZSBjcmVhdGVkIHNlY29uZCB3aWxsIHJ1biBmaXJzdClcblx0XHRcdFx0cmV0dXJuIHRoaXMuX2luaXRQcm9wcyh0YXJnZXQsIHByb3BMb29rdXAsIHNpYmxpbmdzLCBvdmVyd3JpdHRlblByb3BzLCBpbmRleCk7XG5cdFx0XHR9XG5cdFx0XHRpZiAodGhpcy5fb3ZlcndyaXRlID4gMSkgaWYgKHRoaXMuX2ZpcnN0UFQpIGlmIChzaWJsaW5ncy5sZW5ndGggPiAxKSBpZiAoX2FwcGx5T3ZlcndyaXRlKHRhcmdldCwgdGhpcywgcHJvcExvb2t1cCwgdGhpcy5fb3ZlcndyaXRlLCBzaWJsaW5ncykpIHtcblx0XHRcdFx0dGhpcy5fa2lsbChwcm9wTG9va3VwLCB0YXJnZXQpO1xuXHRcdFx0XHRyZXR1cm4gdGhpcy5faW5pdFByb3BzKHRhcmdldCwgcHJvcExvb2t1cCwgc2libGluZ3MsIG92ZXJ3cml0dGVuUHJvcHMsIGluZGV4KTtcblx0XHRcdH1cblx0XHRcdGlmICh0aGlzLl9maXJzdFBUKSBpZiAoKHRoaXMudmFycy5sYXp5ICE9PSBmYWxzZSAmJiB0aGlzLl9kdXJhdGlvbikgfHwgKHRoaXMudmFycy5sYXp5ICYmICF0aGlzLl9kdXJhdGlvbikpIHsgLy96ZXJvIGR1cmF0aW9uIHR3ZWVucyBkb24ndCBsYXp5IHJlbmRlciBieSBkZWZhdWx0OyBldmVyeXRoaW5nIGVsc2UgZG9lcy5cblx0XHRcdFx0X2xhenlMb29rdXBbdGFyZ2V0Ll9nc1R3ZWVuSURdID0gdHJ1ZTtcblx0XHRcdH1cblx0XHRcdHJldHVybiBpbml0UGx1Z2lucztcblx0XHR9O1xuXG5cdFx0cC5yZW5kZXIgPSBmdW5jdGlvbih0aW1lLCBzdXBwcmVzc0V2ZW50cywgZm9yY2UpIHtcblx0XHRcdHZhciBwcmV2VGltZSA9IHRoaXMuX3RpbWUsXG5cdFx0XHRcdGR1cmF0aW9uID0gdGhpcy5fZHVyYXRpb24sXG5cdFx0XHRcdHByZXZSYXdQcmV2VGltZSA9IHRoaXMuX3Jhd1ByZXZUaW1lLFxuXHRcdFx0XHRpc0NvbXBsZXRlLCBjYWxsYmFjaywgcHQsIHJhd1ByZXZUaW1lO1xuXHRcdFx0aWYgKHRpbWUgPj0gZHVyYXRpb24gLSAwLjAwMDAwMDEgJiYgdGltZSA+PSAwKSB7IC8vdG8gd29yayBhcm91bmQgb2NjYXNpb25hbCBmbG9hdGluZyBwb2ludCBtYXRoIGFydGlmYWN0cy5cblx0XHRcdFx0dGhpcy5fdG90YWxUaW1lID0gdGhpcy5fdGltZSA9IGR1cmF0aW9uO1xuXHRcdFx0XHR0aGlzLnJhdGlvID0gdGhpcy5fZWFzZS5fY2FsY0VuZCA/IHRoaXMuX2Vhc2UuZ2V0UmF0aW8oMSkgOiAxO1xuXHRcdFx0XHRpZiAoIXRoaXMuX3JldmVyc2VkICkge1xuXHRcdFx0XHRcdGlzQ29tcGxldGUgPSB0cnVlO1xuXHRcdFx0XHRcdGNhbGxiYWNrID0gXCJvbkNvbXBsZXRlXCI7XG5cdFx0XHRcdFx0Zm9yY2UgPSAoZm9yY2UgfHwgdGhpcy5fdGltZWxpbmUuYXV0b1JlbW92ZUNoaWxkcmVuKTsgLy9vdGhlcndpc2UsIGlmIHRoZSBhbmltYXRpb24gaXMgdW5wYXVzZWQvYWN0aXZhdGVkIGFmdGVyIGl0J3MgYWxyZWFkeSBmaW5pc2hlZCwgaXQgZG9lc24ndCBnZXQgcmVtb3ZlZCBmcm9tIHRoZSBwYXJlbnQgdGltZWxpbmUuXG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKGR1cmF0aW9uID09PSAwKSBpZiAodGhpcy5faW5pdHRlZCB8fCAhdGhpcy52YXJzLmxhenkgfHwgZm9yY2UpIHsgLy96ZXJvLWR1cmF0aW9uIHR3ZWVucyBhcmUgdHJpY2t5IGJlY2F1c2Ugd2UgbXVzdCBkaXNjZXJuIHRoZSBtb21lbnR1bS9kaXJlY3Rpb24gb2YgdGltZSBpbiBvcmRlciB0byBkZXRlcm1pbmUgd2hldGhlciB0aGUgc3RhcnRpbmcgdmFsdWVzIHNob3VsZCBiZSByZW5kZXJlZCBvciB0aGUgZW5kaW5nIHZhbHVlcy4gSWYgdGhlIFwicGxheWhlYWRcIiBvZiBpdHMgdGltZWxpbmUgZ29lcyBwYXN0IHRoZSB6ZXJvLWR1cmF0aW9uIHR3ZWVuIGluIHRoZSBmb3J3YXJkIGRpcmVjdGlvbiBvciBsYW5kcyBkaXJlY3RseSBvbiBpdCwgdGhlIGVuZCB2YWx1ZXMgc2hvdWxkIGJlIHJlbmRlcmVkLCBidXQgaWYgdGhlIHRpbWVsaW5lJ3MgXCJwbGF5aGVhZFwiIG1vdmVzIHBhc3QgaXQgaW4gdGhlIGJhY2t3YXJkIGRpcmVjdGlvbiAoZnJvbSBhIHBvc3RpdGl2ZSB0aW1lIHRvIGEgbmVnYXRpdmUgdGltZSksIHRoZSBzdGFydGluZyB2YWx1ZXMgbXVzdCBiZSByZW5kZXJlZC5cblx0XHRcdFx0XHRpZiAodGhpcy5fc3RhcnRUaW1lID09PSB0aGlzLl90aW1lbGluZS5fZHVyYXRpb24pIHsgLy9pZiBhIHplcm8tZHVyYXRpb24gdHdlZW4gaXMgYXQgdGhlIFZFUlkgZW5kIG9mIGEgdGltZWxpbmUgYW5kIHRoYXQgdGltZWxpbmUgcmVuZGVycyBhdCBpdHMgZW5kLCBpdCB3aWxsIHR5cGljYWxseSBhZGQgYSB0aW55IGJpdCBvZiBjdXNoaW9uIHRvIHRoZSByZW5kZXIgdGltZSB0byBwcmV2ZW50IHJvdW5kaW5nIGVycm9ycyBmcm9tIGdldHRpbmcgaW4gdGhlIHdheSBvZiB0d2VlbnMgcmVuZGVyaW5nIHRoZWlyIFZFUlkgZW5kLiBJZiB3ZSB0aGVuIHJldmVyc2UoKSB0aGF0IHRpbWVsaW5lLCB0aGUgemVyby1kdXJhdGlvbiB0d2VlbiB3aWxsIHRyaWdnZXIgaXRzIG9uUmV2ZXJzZUNvbXBsZXRlIGV2ZW4gdGhvdWdoIHRlY2huaWNhbGx5IHRoZSBwbGF5aGVhZCBkaWRuJ3QgcGFzcyBvdmVyIGl0IGFnYWluLiBJdCdzIGEgdmVyeSBzcGVjaWZpYyBlZGdlIGNhc2Ugd2UgbXVzdCBhY2NvbW1vZGF0ZS5cblx0XHRcdFx0XHRcdHRpbWUgPSAwO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRpZiAocHJldlJhd1ByZXZUaW1lIDwgMCB8fCAodGltZSA8PSAwICYmIHRpbWUgPj0gLTAuMDAwMDAwMSkgfHwgKHByZXZSYXdQcmV2VGltZSA9PT0gX3RpbnlOdW0gJiYgdGhpcy5kYXRhICE9PSBcImlzUGF1c2VcIikpIGlmIChwcmV2UmF3UHJldlRpbWUgIT09IHRpbWUpIHsgLy9ub3RlOiB3aGVuIHRoaXMuZGF0YSBpcyBcImlzUGF1c2VcIiwgaXQncyBhIGNhbGxiYWNrIGFkZGVkIGJ5IGFkZFBhdXNlKCkgb24gYSB0aW1lbGluZSB0aGF0IHdlIHNob3VsZCBub3QgYmUgdHJpZ2dlcmVkIHdoZW4gTEVBVklORyBpdHMgZXhhY3Qgc3RhcnQgdGltZS4gSW4gb3RoZXIgd29yZHMsIHRsLmFkZFBhdXNlKDEpLnBsYXkoMSkgc2hvdWxkbid0IHBhdXNlLlxuXHRcdFx0XHRcdFx0Zm9yY2UgPSB0cnVlO1xuXHRcdFx0XHRcdFx0aWYgKHByZXZSYXdQcmV2VGltZSA+IF90aW55TnVtKSB7XG5cdFx0XHRcdFx0XHRcdGNhbGxiYWNrID0gXCJvblJldmVyc2VDb21wbGV0ZVwiO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHR0aGlzLl9yYXdQcmV2VGltZSA9IHJhd1ByZXZUaW1lID0gKCFzdXBwcmVzc0V2ZW50cyB8fCB0aW1lIHx8IHByZXZSYXdQcmV2VGltZSA9PT0gdGltZSkgPyB0aW1lIDogX3RpbnlOdW07IC8vd2hlbiB0aGUgcGxheWhlYWQgYXJyaXZlcyBhdCBFWEFDVExZIHRpbWUgMCAocmlnaHQgb24gdG9wKSBvZiBhIHplcm8tZHVyYXRpb24gdHdlZW4sIHdlIG5lZWQgdG8gZGlzY2VybiBpZiBldmVudHMgYXJlIHN1cHByZXNzZWQgc28gdGhhdCB3aGVuIHRoZSBwbGF5aGVhZCBtb3ZlcyBhZ2FpbiAobmV4dCB0aW1lKSwgaXQnbGwgdHJpZ2dlciB0aGUgY2FsbGJhY2suIElmIGV2ZW50cyBhcmUgTk9UIHN1cHByZXNzZWQsIG9idmlvdXNseSB0aGUgY2FsbGJhY2sgd291bGQgYmUgdHJpZ2dlcmVkIGluIHRoaXMgcmVuZGVyLiBCYXNpY2FsbHksIHRoZSBjYWxsYmFjayBzaG91bGQgZmlyZSBlaXRoZXIgd2hlbiB0aGUgcGxheWhlYWQgQVJSSVZFUyBvciBMRUFWRVMgdGhpcyBleGFjdCBzcG90LCBub3QgYm90aC4gSW1hZ2luZSBkb2luZyBhIHRpbWVsaW5lLnNlZWsoMCkgYW5kIHRoZXJlJ3MgYSBjYWxsYmFjayB0aGF0IHNpdHMgYXQgMC4gU2luY2UgZXZlbnRzIGFyZSBzdXBwcmVzc2VkIG9uIHRoYXQgc2VlaygpIGJ5IGRlZmF1bHQsIG5vdGhpbmcgd2lsbCBmaXJlLCBidXQgd2hlbiB0aGUgcGxheWhlYWQgbW92ZXMgb2ZmIG9mIHRoYXQgcG9zaXRpb24sIHRoZSBjYWxsYmFjayBzaG91bGQgZmlyZS4gVGhpcyBiZWhhdmlvciBpcyB3aGF0IHBlb3BsZSBpbnR1aXRpdmVseSBleHBlY3QuIFdlIHNldCB0aGUgX3Jhd1ByZXZUaW1lIHRvIGJlIGEgcHJlY2lzZSB0aW55IG51bWJlciB0byBpbmRpY2F0ZSB0aGlzIHNjZW5hcmlvIHJhdGhlciB0aGFuIHVzaW5nIGFub3RoZXIgcHJvcGVydHkvdmFyaWFibGUgd2hpY2ggd291bGQgaW5jcmVhc2UgbWVtb3J5IHVzYWdlLiBUaGlzIHRlY2huaXF1ZSBpcyBsZXNzIHJlYWRhYmxlLCBidXQgbW9yZSBlZmZpY2llbnQuXG5cdFx0XHRcdH1cblxuXHRcdFx0fSBlbHNlIGlmICh0aW1lIDwgMC4wMDAwMDAxKSB7IC8vdG8gd29yayBhcm91bmQgb2NjYXNpb25hbCBmbG9hdGluZyBwb2ludCBtYXRoIGFydGlmYWN0cywgcm91bmQgc3VwZXIgc21hbGwgdmFsdWVzIHRvIDAuXG5cdFx0XHRcdHRoaXMuX3RvdGFsVGltZSA9IHRoaXMuX3RpbWUgPSAwO1xuXHRcdFx0XHR0aGlzLnJhdGlvID0gdGhpcy5fZWFzZS5fY2FsY0VuZCA/IHRoaXMuX2Vhc2UuZ2V0UmF0aW8oMCkgOiAwO1xuXHRcdFx0XHRpZiAocHJldlRpbWUgIT09IDAgfHwgKGR1cmF0aW9uID09PSAwICYmIHByZXZSYXdQcmV2VGltZSA+IDApKSB7XG5cdFx0XHRcdFx0Y2FsbGJhY2sgPSBcIm9uUmV2ZXJzZUNvbXBsZXRlXCI7XG5cdFx0XHRcdFx0aXNDb21wbGV0ZSA9IHRoaXMuX3JldmVyc2VkO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmICh0aW1lIDwgMCkge1xuXHRcdFx0XHRcdHRoaXMuX2FjdGl2ZSA9IGZhbHNlO1xuXHRcdFx0XHRcdGlmIChkdXJhdGlvbiA9PT0gMCkgaWYgKHRoaXMuX2luaXR0ZWQgfHwgIXRoaXMudmFycy5sYXp5IHx8IGZvcmNlKSB7IC8vemVyby1kdXJhdGlvbiB0d2VlbnMgYXJlIHRyaWNreSBiZWNhdXNlIHdlIG11c3QgZGlzY2VybiB0aGUgbW9tZW50dW0vZGlyZWN0aW9uIG9mIHRpbWUgaW4gb3JkZXIgdG8gZGV0ZXJtaW5lIHdoZXRoZXIgdGhlIHN0YXJ0aW5nIHZhbHVlcyBzaG91bGQgYmUgcmVuZGVyZWQgb3IgdGhlIGVuZGluZyB2YWx1ZXMuIElmIHRoZSBcInBsYXloZWFkXCIgb2YgaXRzIHRpbWVsaW5lIGdvZXMgcGFzdCB0aGUgemVyby1kdXJhdGlvbiB0d2VlbiBpbiB0aGUgZm9yd2FyZCBkaXJlY3Rpb24gb3IgbGFuZHMgZGlyZWN0bHkgb24gaXQsIHRoZSBlbmQgdmFsdWVzIHNob3VsZCBiZSByZW5kZXJlZCwgYnV0IGlmIHRoZSB0aW1lbGluZSdzIFwicGxheWhlYWRcIiBtb3ZlcyBwYXN0IGl0IGluIHRoZSBiYWNrd2FyZCBkaXJlY3Rpb24gKGZyb20gYSBwb3N0aXRpdmUgdGltZSB0byBhIG5lZ2F0aXZlIHRpbWUpLCB0aGUgc3RhcnRpbmcgdmFsdWVzIG11c3QgYmUgcmVuZGVyZWQuXG5cdFx0XHRcdFx0XHRpZiAocHJldlJhd1ByZXZUaW1lID49IDAgJiYgIShwcmV2UmF3UHJldlRpbWUgPT09IF90aW55TnVtICYmIHRoaXMuZGF0YSA9PT0gXCJpc1BhdXNlXCIpKSB7XG5cdFx0XHRcdFx0XHRcdGZvcmNlID0gdHJ1ZTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdHRoaXMuX3Jhd1ByZXZUaW1lID0gcmF3UHJldlRpbWUgPSAoIXN1cHByZXNzRXZlbnRzIHx8IHRpbWUgfHwgcHJldlJhd1ByZXZUaW1lID09PSB0aW1lKSA/IHRpbWUgOiBfdGlueU51bTsgLy93aGVuIHRoZSBwbGF5aGVhZCBhcnJpdmVzIGF0IEVYQUNUTFkgdGltZSAwIChyaWdodCBvbiB0b3ApIG9mIGEgemVyby1kdXJhdGlvbiB0d2Vlbiwgd2UgbmVlZCB0byBkaXNjZXJuIGlmIGV2ZW50cyBhcmUgc3VwcHJlc3NlZCBzbyB0aGF0IHdoZW4gdGhlIHBsYXloZWFkIG1vdmVzIGFnYWluIChuZXh0IHRpbWUpLCBpdCdsbCB0cmlnZ2VyIHRoZSBjYWxsYmFjay4gSWYgZXZlbnRzIGFyZSBOT1Qgc3VwcHJlc3NlZCwgb2J2aW91c2x5IHRoZSBjYWxsYmFjayB3b3VsZCBiZSB0cmlnZ2VyZWQgaW4gdGhpcyByZW5kZXIuIEJhc2ljYWxseSwgdGhlIGNhbGxiYWNrIHNob3VsZCBmaXJlIGVpdGhlciB3aGVuIHRoZSBwbGF5aGVhZCBBUlJJVkVTIG9yIExFQVZFUyB0aGlzIGV4YWN0IHNwb3QsIG5vdCBib3RoLiBJbWFnaW5lIGRvaW5nIGEgdGltZWxpbmUuc2VlaygwKSBhbmQgdGhlcmUncyBhIGNhbGxiYWNrIHRoYXQgc2l0cyBhdCAwLiBTaW5jZSBldmVudHMgYXJlIHN1cHByZXNzZWQgb24gdGhhdCBzZWVrKCkgYnkgZGVmYXVsdCwgbm90aGluZyB3aWxsIGZpcmUsIGJ1dCB3aGVuIHRoZSBwbGF5aGVhZCBtb3ZlcyBvZmYgb2YgdGhhdCBwb3NpdGlvbiwgdGhlIGNhbGxiYWNrIHNob3VsZCBmaXJlLiBUaGlzIGJlaGF2aW9yIGlzIHdoYXQgcGVvcGxlIGludHVpdGl2ZWx5IGV4cGVjdC4gV2Ugc2V0IHRoZSBfcmF3UHJldlRpbWUgdG8gYmUgYSBwcmVjaXNlIHRpbnkgbnVtYmVyIHRvIGluZGljYXRlIHRoaXMgc2NlbmFyaW8gcmF0aGVyIHRoYW4gdXNpbmcgYW5vdGhlciBwcm9wZXJ0eS92YXJpYWJsZSB3aGljaCB3b3VsZCBpbmNyZWFzZSBtZW1vcnkgdXNhZ2UuIFRoaXMgdGVjaG5pcXVlIGlzIGxlc3MgcmVhZGFibGUsIGJ1dCBtb3JlIGVmZmljaWVudC5cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKCF0aGlzLl9pbml0dGVkIHx8ICh0aGlzLl9zdGFydEF0ICYmIHRoaXMuX3N0YXJ0QXQucHJvZ3Jlc3MoKSkpIHsgLy9pZiB3ZSByZW5kZXIgdGhlIHZlcnkgYmVnaW5uaW5nICh0aW1lID09IDApIG9mIGEgZnJvbVRvKCksIHdlIG11c3QgZm9yY2UgdGhlIHJlbmRlciAobm9ybWFsIHR3ZWVucyB3b3VsZG4ndCBuZWVkIHRvIHJlbmRlciBhdCBhIHRpbWUgb2YgMCB3aGVuIHRoZSBwcmV2VGltZSB3YXMgYWxzbyAwKS4gVGhpcyBpcyBhbHNvIG1hbmRhdG9yeSB0byBtYWtlIHN1cmUgb3ZlcndyaXRpbmcga2lja3MgaW4gaW1tZWRpYXRlbHkuIEFsc28sIHdlIGNoZWNrIHByb2dyZXNzKCkgYmVjYXVzZSBpZiBzdGFydEF0IGhhcyBhbHJlYWR5IHJlbmRlcmVkIGF0IGl0cyBlbmQsIHdlIHNob3VsZCBmb3JjZSBhIHJlbmRlciBhdCBpdHMgYmVnaW5uaW5nLiBPdGhlcndpc2UsIGlmIHlvdSBwdXQgdGhlIHBsYXloZWFkIGRpcmVjdGx5IG9uIHRvcCBvZiB3aGVyZSBhIGZyb21Ubyh7aW1tZWRpYXRlUmVuZGVyOmZhbHNlfSkgc3RhcnRzLCBhbmQgdGhlbiBtb3ZlIGl0IGJhY2t3YXJkcywgdGhlIGZyb20oKSB3b24ndCByZXZlcnQgaXRzIHZhbHVlcy5cblx0XHRcdFx0XHRmb3JjZSA9IHRydWU7XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRoaXMuX3RvdGFsVGltZSA9IHRoaXMuX3RpbWUgPSB0aW1lO1xuXG5cdFx0XHRcdGlmICh0aGlzLl9lYXNlVHlwZSkge1xuXHRcdFx0XHRcdHZhciByID0gdGltZSAvIGR1cmF0aW9uLCB0eXBlID0gdGhpcy5fZWFzZVR5cGUsIHBvdyA9IHRoaXMuX2Vhc2VQb3dlcjtcblx0XHRcdFx0XHRpZiAodHlwZSA9PT0gMSB8fCAodHlwZSA9PT0gMyAmJiByID49IDAuNSkpIHtcblx0XHRcdFx0XHRcdHIgPSAxIC0gcjtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0aWYgKHR5cGUgPT09IDMpIHtcblx0XHRcdFx0XHRcdHIgKj0gMjtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0aWYgKHBvdyA9PT0gMSkge1xuXHRcdFx0XHRcdFx0ciAqPSByO1xuXHRcdFx0XHRcdH0gZWxzZSBpZiAocG93ID09PSAyKSB7XG5cdFx0XHRcdFx0XHRyICo9IHIgKiByO1xuXHRcdFx0XHRcdH0gZWxzZSBpZiAocG93ID09PSAzKSB7XG5cdFx0XHRcdFx0XHRyICo9IHIgKiByICogcjtcblx0XHRcdFx0XHR9IGVsc2UgaWYgKHBvdyA9PT0gNCkge1xuXHRcdFx0XHRcdFx0ciAqPSByICogciAqIHIgKiByO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdGlmICh0eXBlID09PSAxKSB7XG5cdFx0XHRcdFx0XHR0aGlzLnJhdGlvID0gMSAtIHI7XG5cdFx0XHRcdFx0fSBlbHNlIGlmICh0eXBlID09PSAyKSB7XG5cdFx0XHRcdFx0XHR0aGlzLnJhdGlvID0gcjtcblx0XHRcdFx0XHR9IGVsc2UgaWYgKHRpbWUgLyBkdXJhdGlvbiA8IDAuNSkge1xuXHRcdFx0XHRcdFx0dGhpcy5yYXRpbyA9IHIgLyAyO1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHR0aGlzLnJhdGlvID0gMSAtIChyIC8gMik7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0dGhpcy5yYXRpbyA9IHRoaXMuX2Vhc2UuZ2V0UmF0aW8odGltZSAvIGR1cmF0aW9uKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRpZiAodGhpcy5fdGltZSA9PT0gcHJldlRpbWUgJiYgIWZvcmNlKSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH0gZWxzZSBpZiAoIXRoaXMuX2luaXR0ZWQpIHtcblx0XHRcdFx0dGhpcy5faW5pdCgpO1xuXHRcdFx0XHRpZiAoIXRoaXMuX2luaXR0ZWQgfHwgdGhpcy5fZ2MpIHsgLy9pbW1lZGlhdGVSZW5kZXIgdHdlZW5zIHR5cGljYWxseSB3b24ndCBpbml0aWFsaXplIHVudGlsIHRoZSBwbGF5aGVhZCBhZHZhbmNlcyAoX3RpbWUgaXMgZ3JlYXRlciB0aGFuIDApIGluIG9yZGVyIHRvIGVuc3VyZSB0aGF0IG92ZXJ3cml0aW5nIG9jY3VycyBwcm9wZXJseS4gQWxzbywgaWYgYWxsIG9mIHRoZSB0d2VlbmluZyBwcm9wZXJ0aWVzIGhhdmUgYmVlbiBvdmVyd3JpdHRlbiAod2hpY2ggd291bGQgY2F1c2UgX2djIHRvIGJlIHRydWUsIGFzIHNldCBpbiBfaW5pdCgpKSwgd2Ugc2hvdWxkbid0IGNvbnRpbnVlIG90aGVyd2lzZSBhbiBvblN0YXJ0IGNhbGxiYWNrIGNvdWxkIGJlIGNhbGxlZCBmb3IgZXhhbXBsZS5cblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH0gZWxzZSBpZiAoIWZvcmNlICYmIHRoaXMuX2ZpcnN0UFQgJiYgKCh0aGlzLnZhcnMubGF6eSAhPT0gZmFsc2UgJiYgdGhpcy5fZHVyYXRpb24pIHx8ICh0aGlzLnZhcnMubGF6eSAmJiAhdGhpcy5fZHVyYXRpb24pKSkge1xuXHRcdFx0XHRcdHRoaXMuX3RpbWUgPSB0aGlzLl90b3RhbFRpbWUgPSBwcmV2VGltZTtcblx0XHRcdFx0XHR0aGlzLl9yYXdQcmV2VGltZSA9IHByZXZSYXdQcmV2VGltZTtcblx0XHRcdFx0XHRfbGF6eVR3ZWVucy5wdXNoKHRoaXMpO1xuXHRcdFx0XHRcdHRoaXMuX2xhenkgPSBbdGltZSwgc3VwcHJlc3NFdmVudHNdO1xuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fVxuXHRcdFx0XHQvL19lYXNlIGlzIGluaXRpYWxseSBzZXQgdG8gZGVmYXVsdEVhc2UsIHNvIG5vdyB0aGF0IGluaXQoKSBoYXMgcnVuLCBfZWFzZSBpcyBzZXQgcHJvcGVybHkgYW5kIHdlIG5lZWQgdG8gcmVjYWxjdWxhdGUgdGhlIHJhdGlvLiBPdmVyYWxsIHRoaXMgaXMgZmFzdGVyIHRoYW4gdXNpbmcgY29uZGl0aW9uYWwgbG9naWMgZWFybGllciBpbiB0aGUgbWV0aG9kIHRvIGF2b2lkIGhhdmluZyB0byBzZXQgcmF0aW8gdHdpY2UgYmVjYXVzZSB3ZSBvbmx5IGluaXQoKSBvbmNlIGJ1dCByZW5kZXJUaW1lKCkgZ2V0cyBjYWxsZWQgVkVSWSBmcmVxdWVudGx5LlxuXHRcdFx0XHRpZiAodGhpcy5fdGltZSAmJiAhaXNDb21wbGV0ZSkge1xuXHRcdFx0XHRcdHRoaXMucmF0aW8gPSB0aGlzLl9lYXNlLmdldFJhdGlvKHRoaXMuX3RpbWUgLyBkdXJhdGlvbik7XG5cdFx0XHRcdH0gZWxzZSBpZiAoaXNDb21wbGV0ZSAmJiB0aGlzLl9lYXNlLl9jYWxjRW5kKSB7XG5cdFx0XHRcdFx0dGhpcy5yYXRpbyA9IHRoaXMuX2Vhc2UuZ2V0UmF0aW8oKHRoaXMuX3RpbWUgPT09IDApID8gMCA6IDEpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRpZiAodGhpcy5fbGF6eSAhPT0gZmFsc2UpIHsgLy9pbiBjYXNlIGEgbGF6eSByZW5kZXIgaXMgcGVuZGluZywgd2Ugc2hvdWxkIGZsdXNoIGl0IGJlY2F1c2UgdGhlIG5ldyByZW5kZXIgaXMgb2NjdXJyaW5nIG5vdyAoaW1hZ2luZSBhIGxhenkgdHdlZW4gaW5zdGFudGlhdGluZyBhbmQgdGhlbiBpbW1lZGlhdGVseSB0aGUgdXNlciBjYWxscyB0d2Vlbi5zZWVrKHR3ZWVuLmR1cmF0aW9uKCkpLCBza2lwcGluZyB0byB0aGUgZW5kIC0gdGhlIGVuZCByZW5kZXIgd291bGQgYmUgZm9yY2VkLCBhbmQgdGhlbiBpZiB3ZSBkaWRuJ3QgZmx1c2ggdGhlIGxhenkgcmVuZGVyLCBpdCdkIGZpcmUgQUZURVIgdGhlIHNlZWsoKSwgcmVuZGVyaW5nIGl0IGF0IHRoZSB3cm9uZyB0aW1lLlxuXHRcdFx0XHR0aGlzLl9sYXp5ID0gZmFsc2U7XG5cdFx0XHR9XG5cdFx0XHRpZiAoIXRoaXMuX2FjdGl2ZSkgaWYgKCF0aGlzLl9wYXVzZWQgJiYgdGhpcy5fdGltZSAhPT0gcHJldlRpbWUgJiYgdGltZSA+PSAwKSB7XG5cdFx0XHRcdHRoaXMuX2FjdGl2ZSA9IHRydWU7ICAvL3NvIHRoYXQgaWYgdGhlIHVzZXIgcmVuZGVycyBhIHR3ZWVuIChhcyBvcHBvc2VkIHRvIHRoZSB0aW1lbGluZSByZW5kZXJpbmcgaXQpLCB0aGUgdGltZWxpbmUgaXMgZm9yY2VkIHRvIHJlLXJlbmRlciBhbmQgYWxpZ24gaXQgd2l0aCB0aGUgcHJvcGVyIHRpbWUvZnJhbWUgb24gdGhlIG5leHQgcmVuZGVyaW5nIGN5Y2xlLiBNYXliZSB0aGUgdHdlZW4gYWxyZWFkeSBmaW5pc2hlZCBidXQgdGhlIHVzZXIgbWFudWFsbHkgcmUtcmVuZGVycyBpdCBhcyBoYWxmd2F5IGRvbmUuXG5cdFx0XHR9XG5cdFx0XHRpZiAocHJldlRpbWUgPT09IDApIHtcblx0XHRcdFx0aWYgKHRoaXMuX3N0YXJ0QXQpIHtcblx0XHRcdFx0XHRpZiAodGltZSA+PSAwKSB7XG5cdFx0XHRcdFx0XHR0aGlzLl9zdGFydEF0LnJlbmRlcih0aW1lLCB0cnVlLCBmb3JjZSk7XG5cdFx0XHRcdFx0fSBlbHNlIGlmICghY2FsbGJhY2spIHtcblx0XHRcdFx0XHRcdGNhbGxiYWNrID0gXCJfZHVtbXlHU1wiOyAvL2lmIG5vIGNhbGxiYWNrIGlzIGRlZmluZWQsIHVzZSBhIGR1bW15IHZhbHVlIGp1c3Qgc28gdGhhdCB0aGUgY29uZGl0aW9uIGF0IHRoZSBlbmQgZXZhbHVhdGVzIGFzIHRydWUgYmVjYXVzZSBfc3RhcnRBdCBzaG91bGQgcmVuZGVyIEFGVEVSIHRoZSBub3JtYWwgcmVuZGVyIGxvb3Agd2hlbiB0aGUgdGltZSBpcyBuZWdhdGl2ZS4gV2UgY291bGQgaGFuZGxlIHRoaXMgaW4gYSBtb3JlIGludHVpdGl2ZSB3YXksIG9mIGNvdXJzZSwgYnV0IHRoZSByZW5kZXIgbG9vcCBpcyB0aGUgTU9TVCBpbXBvcnRhbnQgdGhpbmcgdG8gb3B0aW1pemUsIHNvIHRoaXMgdGVjaG5pcXVlIGFsbG93cyB1cyB0byBhdm9pZCBhZGRpbmcgZXh0cmEgY29uZGl0aW9uYWwgbG9naWMgaW4gYSBoaWdoLWZyZXF1ZW5jeSBhcmVhLlxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAodGhpcy52YXJzLm9uU3RhcnQpIGlmICh0aGlzLl90aW1lICE9PSAwIHx8IGR1cmF0aW9uID09PSAwKSBpZiAoIXN1cHByZXNzRXZlbnRzKSB7XG5cdFx0XHRcdFx0dGhpcy5fY2FsbGJhY2soXCJvblN0YXJ0XCIpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRwdCA9IHRoaXMuX2ZpcnN0UFQ7XG5cdFx0XHR3aGlsZSAocHQpIHtcblx0XHRcdFx0aWYgKHB0LmYpIHtcblx0XHRcdFx0XHRwdC50W3B0LnBdKHB0LmMgKiB0aGlzLnJhdGlvICsgcHQucyk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0cHQudFtwdC5wXSA9IHB0LmMgKiB0aGlzLnJhdGlvICsgcHQucztcblx0XHRcdFx0fVxuXHRcdFx0XHRwdCA9IHB0Ll9uZXh0O1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAodGhpcy5fb25VcGRhdGUpIHtcblx0XHRcdFx0aWYgKHRpbWUgPCAwKSBpZiAodGhpcy5fc3RhcnRBdCAmJiB0aW1lICE9PSAtMC4wMDAxKSB7IC8vaWYgdGhlIHR3ZWVuIGlzIHBvc2l0aW9uZWQgYXQgdGhlIFZFUlkgYmVnaW5uaW5nIChfc3RhcnRUaW1lIDApIG9mIGl0cyBwYXJlbnQgdGltZWxpbmUsIGl0J3MgaWxsZWdhbCBmb3IgdGhlIHBsYXloZWFkIHRvIGdvIGJhY2sgZnVydGhlciwgc28gd2Ugc2hvdWxkIG5vdCByZW5kZXIgdGhlIHJlY29yZGVkIHN0YXJ0QXQgdmFsdWVzLlxuXHRcdFx0XHRcdHRoaXMuX3N0YXJ0QXQucmVuZGVyKHRpbWUsIHRydWUsIGZvcmNlKTsgLy9ub3RlOiBmb3IgcGVyZm9ybWFuY2UgcmVhc29ucywgd2UgdHVjayB0aGlzIGNvbmRpdGlvbmFsIGxvZ2ljIGluc2lkZSBsZXNzIHRyYXZlbGVkIGFyZWFzIChtb3N0IHR3ZWVucyBkb24ndCBoYXZlIGFuIG9uVXBkYXRlKS4gV2UnZCBqdXN0IGhhdmUgaXQgYXQgdGhlIGVuZCBiZWZvcmUgdGhlIG9uQ29tcGxldGUsIGJ1dCB0aGUgdmFsdWVzIHNob3VsZCBiZSB1cGRhdGVkIGJlZm9yZSBhbnkgb25VcGRhdGUgaXMgY2FsbGVkLCBzbyB3ZSBBTFNPIHB1dCBpdCBoZXJlIGFuZCB0aGVuIGlmIGl0J3Mgbm90IGNhbGxlZCwgd2UgZG8gc28gbGF0ZXIgbmVhciB0aGUgb25Db21wbGV0ZS5cblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoIXN1cHByZXNzRXZlbnRzKSBpZiAodGhpcy5fdGltZSAhPT0gcHJldlRpbWUgfHwgaXNDb21wbGV0ZSB8fCBmb3JjZSkge1xuXHRcdFx0XHRcdHRoaXMuX2NhbGxiYWNrKFwib25VcGRhdGVcIik7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdGlmIChjYWxsYmFjaykgaWYgKCF0aGlzLl9nYyB8fCBmb3JjZSkgeyAvL2NoZWNrIF9nYyBiZWNhdXNlIHRoZXJlJ3MgYSBjaGFuY2UgdGhhdCBraWxsKCkgY291bGQgYmUgY2FsbGVkIGluIGFuIG9uVXBkYXRlXG5cdFx0XHRcdGlmICh0aW1lIDwgMCAmJiB0aGlzLl9zdGFydEF0ICYmICF0aGlzLl9vblVwZGF0ZSAmJiB0aW1lICE9PSAtMC4wMDAxKSB7IC8vLTAuMDAwMSBpcyBhIHNwZWNpYWwgdmFsdWUgdGhhdCB3ZSB1c2Ugd2hlbiBsb29waW5nIGJhY2sgdG8gdGhlIGJlZ2lubmluZyBvZiBhIHJlcGVhdGVkIFRpbWVsaW5lTWF4LCBpbiB3aGljaCBjYXNlIHdlIHNob3VsZG4ndCByZW5kZXIgdGhlIF9zdGFydEF0IHZhbHVlcy5cblx0XHRcdFx0XHR0aGlzLl9zdGFydEF0LnJlbmRlcih0aW1lLCB0cnVlLCBmb3JjZSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKGlzQ29tcGxldGUpIHtcblx0XHRcdFx0XHRpZiAodGhpcy5fdGltZWxpbmUuYXV0b1JlbW92ZUNoaWxkcmVuKSB7XG5cdFx0XHRcdFx0XHR0aGlzLl9lbmFibGVkKGZhbHNlLCBmYWxzZSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHRoaXMuX2FjdGl2ZSA9IGZhbHNlO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmICghc3VwcHJlc3NFdmVudHMgJiYgdGhpcy52YXJzW2NhbGxiYWNrXSkge1xuXHRcdFx0XHRcdHRoaXMuX2NhbGxiYWNrKGNhbGxiYWNrKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoZHVyYXRpb24gPT09IDAgJiYgdGhpcy5fcmF3UHJldlRpbWUgPT09IF90aW55TnVtICYmIHJhd1ByZXZUaW1lICE9PSBfdGlueU51bSkgeyAvL3RoZSBvbkNvbXBsZXRlIG9yIG9uUmV2ZXJzZUNvbXBsZXRlIGNvdWxkIHRyaWdnZXIgbW92ZW1lbnQgb2YgdGhlIHBsYXloZWFkIGFuZCBmb3IgemVyby1kdXJhdGlvbiB0d2VlbnMgKHdoaWNoIG11c3QgZGlzY2VybiBkaXJlY3Rpb24pIHRoYXQgbGFuZCBkaXJlY3RseSBiYWNrIG9uIHRoZWlyIHN0YXJ0IHRpbWUsIHdlIGRvbid0IHdhbnQgdG8gZmlyZSBhZ2FpbiBvbiB0aGUgbmV4dCByZW5kZXIuIFRoaW5rIG9mIHNldmVyYWwgYWRkUGF1c2UoKSdzIGluIGEgdGltZWxpbmUgdGhhdCBmb3JjZXMgdGhlIHBsYXloZWFkIHRvIGEgY2VydGFpbiBzcG90LCBidXQgd2hhdCBpZiBpdCdzIGFscmVhZHkgcGF1c2VkIGFuZCBhbm90aGVyIHR3ZWVuIGlzIHR3ZWVuaW5nIHRoZSBcInRpbWVcIiBvZiB0aGUgdGltZWxpbmU/IEVhY2ggdGltZSBpdCBtb3ZlcyBbZm9yd2FyZF0gcGFzdCB0aGF0IHNwb3QsIGl0IHdvdWxkIG1vdmUgYmFjaywgYW5kIHNpbmNlIHN1cHByZXNzRXZlbnRzIGlzIHRydWUsIGl0J2QgcmVzZXQgX3Jhd1ByZXZUaW1lIHRvIF90aW55TnVtIHNvIHRoYXQgd2hlbiBpdCBiZWdpbnMgYWdhaW4sIHRoZSBjYWxsYmFjayB3b3VsZCBmaXJlIChzbyB1bHRpbWF0ZWx5IGl0IGNvdWxkIGJvdW5jZSBiYWNrIGFuZCBmb3J0aCBkdXJpbmcgdGhhdCB0d2VlbikuIEFnYWluLCB0aGlzIGlzIGEgdmVyeSB1bmNvbW1vbiBzY2VuYXJpbywgYnV0IHBvc3NpYmxlIG5vbmV0aGVsZXNzLlxuXHRcdFx0XHRcdHRoaXMuX3Jhd1ByZXZUaW1lID0gMDtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH07XG5cblx0XHRwLl9raWxsID0gZnVuY3Rpb24odmFycywgdGFyZ2V0LCBvdmVyd3JpdGluZ1R3ZWVuKSB7XG5cdFx0XHRpZiAodmFycyA9PT0gXCJhbGxcIikge1xuXHRcdFx0XHR2YXJzID0gbnVsbDtcblx0XHRcdH1cblx0XHRcdGlmICh2YXJzID09IG51bGwpIGlmICh0YXJnZXQgPT0gbnVsbCB8fCB0YXJnZXQgPT09IHRoaXMudGFyZ2V0KSB7XG5cdFx0XHRcdHRoaXMuX2xhenkgPSBmYWxzZTtcblx0XHRcdFx0cmV0dXJuIHRoaXMuX2VuYWJsZWQoZmFsc2UsIGZhbHNlKTtcblx0XHRcdH1cblx0XHRcdHRhcmdldCA9ICh0eXBlb2YodGFyZ2V0KSAhPT0gXCJzdHJpbmdcIikgPyAodGFyZ2V0IHx8IHRoaXMuX3RhcmdldHMgfHwgdGhpcy50YXJnZXQpIDogVHdlZW5MaXRlLnNlbGVjdG9yKHRhcmdldCkgfHwgdGFyZ2V0O1xuXHRcdFx0dmFyIHNpbXVsdGFuZW91c092ZXJ3cml0ZSA9IChvdmVyd3JpdGluZ1R3ZWVuICYmIHRoaXMuX3RpbWUgJiYgb3ZlcndyaXRpbmdUd2Vlbi5fc3RhcnRUaW1lID09PSB0aGlzLl9zdGFydFRpbWUgJiYgdGhpcy5fdGltZWxpbmUgPT09IG92ZXJ3cml0aW5nVHdlZW4uX3RpbWVsaW5lKSxcblx0XHRcdFx0aSwgb3ZlcndyaXR0ZW5Qcm9wcywgcCwgcHQsIHByb3BMb29rdXAsIGNoYW5nZWQsIGtpbGxQcm9wcywgcmVjb3JkLCBraWxsZWQ7XG5cdFx0XHRpZiAoKF9pc0FycmF5KHRhcmdldCkgfHwgX2lzU2VsZWN0b3IodGFyZ2V0KSkgJiYgdHlwZW9mKHRhcmdldFswXSkgIT09IFwibnVtYmVyXCIpIHtcblx0XHRcdFx0aSA9IHRhcmdldC5sZW5ndGg7XG5cdFx0XHRcdHdoaWxlICgtLWkgPiAtMSkge1xuXHRcdFx0XHRcdGlmICh0aGlzLl9raWxsKHZhcnMsIHRhcmdldFtpXSwgb3ZlcndyaXRpbmdUd2VlbikpIHtcblx0XHRcdFx0XHRcdGNoYW5nZWQgPSB0cnVlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0aWYgKHRoaXMuX3RhcmdldHMpIHtcblx0XHRcdFx0XHRpID0gdGhpcy5fdGFyZ2V0cy5sZW5ndGg7XG5cdFx0XHRcdFx0d2hpbGUgKC0taSA+IC0xKSB7XG5cdFx0XHRcdFx0XHRpZiAodGFyZ2V0ID09PSB0aGlzLl90YXJnZXRzW2ldKSB7XG5cdFx0XHRcdFx0XHRcdHByb3BMb29rdXAgPSB0aGlzLl9wcm9wTG9va3VwW2ldIHx8IHt9O1xuXHRcdFx0XHRcdFx0XHR0aGlzLl9vdmVyd3JpdHRlblByb3BzID0gdGhpcy5fb3ZlcndyaXR0ZW5Qcm9wcyB8fCBbXTtcblx0XHRcdFx0XHRcdFx0b3ZlcndyaXR0ZW5Qcm9wcyA9IHRoaXMuX292ZXJ3cml0dGVuUHJvcHNbaV0gPSB2YXJzID8gdGhpcy5fb3ZlcndyaXR0ZW5Qcm9wc1tpXSB8fCB7fSA6IFwiYWxsXCI7XG5cdFx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSBlbHNlIGlmICh0YXJnZXQgIT09IHRoaXMudGFyZ2V0KSB7XG5cdFx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHByb3BMb29rdXAgPSB0aGlzLl9wcm9wTG9va3VwO1xuXHRcdFx0XHRcdG92ZXJ3cml0dGVuUHJvcHMgPSB0aGlzLl9vdmVyd3JpdHRlblByb3BzID0gdmFycyA/IHRoaXMuX292ZXJ3cml0dGVuUHJvcHMgfHwge30gOiBcImFsbFwiO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0aWYgKHByb3BMb29rdXApIHtcblx0XHRcdFx0XHRraWxsUHJvcHMgPSB2YXJzIHx8IHByb3BMb29rdXA7XG5cdFx0XHRcdFx0cmVjb3JkID0gKHZhcnMgIT09IG92ZXJ3cml0dGVuUHJvcHMgJiYgb3ZlcndyaXR0ZW5Qcm9wcyAhPT0gXCJhbGxcIiAmJiB2YXJzICE9PSBwcm9wTG9va3VwICYmICh0eXBlb2YodmFycykgIT09IFwib2JqZWN0XCIgfHwgIXZhcnMuX3RlbXBLaWxsKSk7IC8vX3RlbXBLaWxsIGlzIGEgc3VwZXItc2VjcmV0IHdheSB0byBkZWxldGUgYSBwYXJ0aWN1bGFyIHR3ZWVuaW5nIHByb3BlcnR5IGJ1dCBOT1QgaGF2ZSBpdCByZW1lbWJlcmVkIGFzIGFuIG9mZmljaWFsIG92ZXJ3cml0dGVuIHByb3BlcnR5IChsaWtlIGluIEJlemllclBsdWdpbilcblx0XHRcdFx0XHRpZiAob3ZlcndyaXRpbmdUd2VlbiAmJiAoVHdlZW5MaXRlLm9uT3ZlcndyaXRlIHx8IHRoaXMudmFycy5vbk92ZXJ3cml0ZSkpIHtcblx0XHRcdFx0XHRcdGZvciAocCBpbiBraWxsUHJvcHMpIHtcblx0XHRcdFx0XHRcdFx0aWYgKHByb3BMb29rdXBbcF0pIHtcblx0XHRcdFx0XHRcdFx0XHRpZiAoIWtpbGxlZCkge1xuXHRcdFx0XHRcdFx0XHRcdFx0a2lsbGVkID0gW107XG5cdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdGtpbGxlZC5wdXNoKHApO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRpZiAoKGtpbGxlZCB8fCAhdmFycykgJiYgIV9vbk92ZXJ3cml0ZSh0aGlzLCBvdmVyd3JpdGluZ1R3ZWVuLCB0YXJnZXQsIGtpbGxlZCkpIHsgLy9pZiB0aGUgb25PdmVyd3JpdGUgcmV0dXJuZWQgZmFsc2UsIHRoYXQgbWVhbnMgdGhlIHVzZXIgd2FudHMgdG8gb3ZlcnJpZGUgdGhlIG92ZXJ3cml0aW5nIChjYW5jZWwgaXQpLlxuXHRcdFx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0Zm9yIChwIGluIGtpbGxQcm9wcykge1xuXHRcdFx0XHRcdFx0aWYgKChwdCA9IHByb3BMb29rdXBbcF0pKSB7XG5cdFx0XHRcdFx0XHRcdGlmIChzaW11bHRhbmVvdXNPdmVyd3JpdGUpIHsgLy9pZiBhbm90aGVyIHR3ZWVuIG92ZXJ3cml0ZXMgdGhpcyBvbmUgYW5kIHRoZXkgYm90aCBzdGFydCBhdCBleGFjdGx5IHRoZSBzYW1lIHRpbWUsIHlldCB0aGlzIHR3ZWVuIGhhcyBhbHJlYWR5IHJlbmRlcmVkIG9uY2UgKGZvciBleGFtcGxlLCBhdCAwLjAwMSkgYmVjYXVzZSBpdCdzIGZpcnN0IGluIHRoZSBxdWV1ZSwgd2Ugc2hvdWxkIHJldmVydCB0aGUgdmFsdWVzIHRvIHdoZXJlIHRoZXkgd2VyZSBhdCAwIHNvIHRoYXQgdGhlIHN0YXJ0aW5nIHZhbHVlcyBhcmVuJ3QgY29udGFtaW5hdGVkIG9uIHRoZSBvdmVyd3JpdGluZyB0d2Vlbi5cblx0XHRcdFx0XHRcdFx0XHRpZiAocHQuZikge1xuXHRcdFx0XHRcdFx0XHRcdFx0cHQudFtwdC5wXShwdC5zKTtcblx0XHRcdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRcdFx0cHQudFtwdC5wXSA9IHB0LnM7XG5cdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdGNoYW5nZWQgPSB0cnVlO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdGlmIChwdC5wZyAmJiBwdC50Ll9raWxsKGtpbGxQcm9wcykpIHtcblx0XHRcdFx0XHRcdFx0XHRjaGFuZ2VkID0gdHJ1ZTsgLy9zb21lIHBsdWdpbnMgbmVlZCB0byBiZSBub3RpZmllZCBzbyB0aGV5IGNhbiBwZXJmb3JtIGNsZWFudXAgdGFza3MgZmlyc3Rcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRpZiAoIXB0LnBnIHx8IHB0LnQuX292ZXJ3cml0ZVByb3BzLmxlbmd0aCA9PT0gMCkge1xuXHRcdFx0XHRcdFx0XHRcdGlmIChwdC5fcHJldikge1xuXHRcdFx0XHRcdFx0XHRcdFx0cHQuX3ByZXYuX25leHQgPSBwdC5fbmV4dDtcblx0XHRcdFx0XHRcdFx0XHR9IGVsc2UgaWYgKHB0ID09PSB0aGlzLl9maXJzdFBUKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHR0aGlzLl9maXJzdFBUID0gcHQuX25leHQ7XG5cdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdGlmIChwdC5fbmV4dCkge1xuXHRcdFx0XHRcdFx0XHRcdFx0cHQuX25leHQuX3ByZXYgPSBwdC5fcHJldjtcblx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0cHQuX25leHQgPSBwdC5fcHJldiA9IG51bGw7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0ZGVsZXRlIHByb3BMb29rdXBbcF07XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRpZiAocmVjb3JkKSB7XG5cdFx0XHRcdFx0XHRcdG92ZXJ3cml0dGVuUHJvcHNbcF0gPSAxO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRpZiAoIXRoaXMuX2ZpcnN0UFQgJiYgdGhpcy5faW5pdHRlZCkgeyAvL2lmIGFsbCB0d2VlbmluZyBwcm9wZXJ0aWVzIGFyZSBraWxsZWQsIGtpbGwgdGhlIHR3ZWVuLiBXaXRob3V0IHRoaXMgbGluZSwgaWYgdGhlcmUncyBhIHR3ZWVuIHdpdGggbXVsdGlwbGUgdGFyZ2V0cyBhbmQgdGhlbiB5b3Uga2lsbFR3ZWVuc09mKCkgZWFjaCB0YXJnZXQgaW5kaXZpZHVhbGx5LCB0aGUgdHdlZW4gd291bGQgdGVjaG5pY2FsbHkgc3RpbGwgcmVtYWluIGFjdGl2ZSBhbmQgZmlyZSBpdHMgb25Db21wbGV0ZSBldmVuIHRob3VnaCB0aGVyZSBhcmVuJ3QgYW55IG1vcmUgcHJvcGVydGllcyB0d2VlbmluZy5cblx0XHRcdFx0XHRcdHRoaXMuX2VuYWJsZWQoZmFsc2UsIGZhbHNlKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdHJldHVybiBjaGFuZ2VkO1xuXHRcdH07XG5cblx0XHRwLmludmFsaWRhdGUgPSBmdW5jdGlvbigpIHtcblx0XHRcdGlmICh0aGlzLl9ub3RpZnlQbHVnaW5zT2ZFbmFibGVkKSB7XG5cdFx0XHRcdFR3ZWVuTGl0ZS5fb25QbHVnaW5FdmVudChcIl9vbkRpc2FibGVcIiwgdGhpcyk7XG5cdFx0XHR9XG5cdFx0XHR0aGlzLl9maXJzdFBUID0gdGhpcy5fb3ZlcndyaXR0ZW5Qcm9wcyA9IHRoaXMuX3N0YXJ0QXQgPSB0aGlzLl9vblVwZGF0ZSA9IG51bGw7XG5cdFx0XHR0aGlzLl9ub3RpZnlQbHVnaW5zT2ZFbmFibGVkID0gdGhpcy5fYWN0aXZlID0gdGhpcy5fbGF6eSA9IGZhbHNlO1xuXHRcdFx0dGhpcy5fcHJvcExvb2t1cCA9ICh0aGlzLl90YXJnZXRzKSA/IHt9IDogW107XG5cdFx0XHRBbmltYXRpb24ucHJvdG90eXBlLmludmFsaWRhdGUuY2FsbCh0aGlzKTtcblx0XHRcdGlmICh0aGlzLnZhcnMuaW1tZWRpYXRlUmVuZGVyKSB7XG5cdFx0XHRcdHRoaXMuX3RpbWUgPSAtX3RpbnlOdW07IC8vZm9yY2VzIGEgcmVuZGVyIHdpdGhvdXQgaGF2aW5nIHRvIHNldCB0aGUgcmVuZGVyKCkgXCJmb3JjZVwiIHBhcmFtZXRlciB0byB0cnVlIGJlY2F1c2Ugd2Ugd2FudCB0byBhbGxvdyBsYXp5aW5nIGJ5IGRlZmF1bHQgKHVzaW5nIHRoZSBcImZvcmNlXCIgcGFyYW1ldGVyIGFsd2F5cyBmb3JjZXMgYW4gaW1tZWRpYXRlIGZ1bGwgcmVuZGVyKVxuXHRcdFx0XHR0aGlzLnJlbmRlcihNYXRoLm1pbigwLCAtdGhpcy5fZGVsYXkpKTsgLy9pbiBjYXNlIGRlbGF5IGlzIG5lZ2F0aXZlLlxuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0fTtcblxuXHRcdHAuX2VuYWJsZWQgPSBmdW5jdGlvbihlbmFibGVkLCBpZ25vcmVUaW1lbGluZSkge1xuXHRcdFx0aWYgKCFfdGlja2VyQWN0aXZlKSB7XG5cdFx0XHRcdF90aWNrZXIud2FrZSgpO1xuXHRcdFx0fVxuXHRcdFx0aWYgKGVuYWJsZWQgJiYgdGhpcy5fZ2MpIHtcblx0XHRcdFx0dmFyIHRhcmdldHMgPSB0aGlzLl90YXJnZXRzLFxuXHRcdFx0XHRcdGk7XG5cdFx0XHRcdGlmICh0YXJnZXRzKSB7XG5cdFx0XHRcdFx0aSA9IHRhcmdldHMubGVuZ3RoO1xuXHRcdFx0XHRcdHdoaWxlICgtLWkgPiAtMSkge1xuXHRcdFx0XHRcdFx0dGhpcy5fc2libGluZ3NbaV0gPSBfcmVnaXN0ZXIodGFyZ2V0c1tpXSwgdGhpcywgdHJ1ZSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHRoaXMuX3NpYmxpbmdzID0gX3JlZ2lzdGVyKHRoaXMudGFyZ2V0LCB0aGlzLCB0cnVlKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0QW5pbWF0aW9uLnByb3RvdHlwZS5fZW5hYmxlZC5jYWxsKHRoaXMsIGVuYWJsZWQsIGlnbm9yZVRpbWVsaW5lKTtcblx0XHRcdGlmICh0aGlzLl9ub3RpZnlQbHVnaW5zT2ZFbmFibGVkKSBpZiAodGhpcy5fZmlyc3RQVCkge1xuXHRcdFx0XHRyZXR1cm4gVHdlZW5MaXRlLl9vblBsdWdpbkV2ZW50KChlbmFibGVkID8gXCJfb25FbmFibGVcIiA6IFwiX29uRGlzYWJsZVwiKSwgdGhpcyk7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fTtcblxuXG4vLy0tLS1Ud2VlbkxpdGUgc3RhdGljIG1ldGhvZHMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuXHRcdFR3ZWVuTGl0ZS50byA9IGZ1bmN0aW9uKHRhcmdldCwgZHVyYXRpb24sIHZhcnMpIHtcblx0XHRcdHJldHVybiBuZXcgVHdlZW5MaXRlKHRhcmdldCwgZHVyYXRpb24sIHZhcnMpO1xuXHRcdH07XG5cblx0XHRUd2VlbkxpdGUuZnJvbSA9IGZ1bmN0aW9uKHRhcmdldCwgZHVyYXRpb24sIHZhcnMpIHtcblx0XHRcdHZhcnMucnVuQmFja3dhcmRzID0gdHJ1ZTtcblx0XHRcdHZhcnMuaW1tZWRpYXRlUmVuZGVyID0gKHZhcnMuaW1tZWRpYXRlUmVuZGVyICE9IGZhbHNlKTtcblx0XHRcdHJldHVybiBuZXcgVHdlZW5MaXRlKHRhcmdldCwgZHVyYXRpb24sIHZhcnMpO1xuXHRcdH07XG5cblx0XHRUd2VlbkxpdGUuZnJvbVRvID0gZnVuY3Rpb24odGFyZ2V0LCBkdXJhdGlvbiwgZnJvbVZhcnMsIHRvVmFycykge1xuXHRcdFx0dG9WYXJzLnN0YXJ0QXQgPSBmcm9tVmFycztcblx0XHRcdHRvVmFycy5pbW1lZGlhdGVSZW5kZXIgPSAodG9WYXJzLmltbWVkaWF0ZVJlbmRlciAhPSBmYWxzZSAmJiBmcm9tVmFycy5pbW1lZGlhdGVSZW5kZXIgIT0gZmFsc2UpO1xuXHRcdFx0cmV0dXJuIG5ldyBUd2VlbkxpdGUodGFyZ2V0LCBkdXJhdGlvbiwgdG9WYXJzKTtcblx0XHR9O1xuXG5cdFx0VHdlZW5MaXRlLmRlbGF5ZWRDYWxsID0gZnVuY3Rpb24oZGVsYXksIGNhbGxiYWNrLCBwYXJhbXMsIHNjb3BlLCB1c2VGcmFtZXMpIHtcblx0XHRcdHJldHVybiBuZXcgVHdlZW5MaXRlKGNhbGxiYWNrLCAwLCB7ZGVsYXk6ZGVsYXksIG9uQ29tcGxldGU6Y2FsbGJhY2ssIG9uQ29tcGxldGVQYXJhbXM6cGFyYW1zLCBjYWxsYmFja1Njb3BlOnNjb3BlLCBvblJldmVyc2VDb21wbGV0ZTpjYWxsYmFjaywgb25SZXZlcnNlQ29tcGxldGVQYXJhbXM6cGFyYW1zLCBpbW1lZGlhdGVSZW5kZXI6ZmFsc2UsIGxhenk6ZmFsc2UsIHVzZUZyYW1lczp1c2VGcmFtZXMsIG92ZXJ3cml0ZTowfSk7XG5cdFx0fTtcblxuXHRcdFR3ZWVuTGl0ZS5zZXQgPSBmdW5jdGlvbih0YXJnZXQsIHZhcnMpIHtcblx0XHRcdHJldHVybiBuZXcgVHdlZW5MaXRlKHRhcmdldCwgMCwgdmFycyk7XG5cdFx0fTtcblxuXHRcdFR3ZWVuTGl0ZS5nZXRUd2VlbnNPZiA9IGZ1bmN0aW9uKHRhcmdldCwgb25seUFjdGl2ZSkge1xuXHRcdFx0aWYgKHRhcmdldCA9PSBudWxsKSB7IHJldHVybiBbXTsgfVxuXHRcdFx0dGFyZ2V0ID0gKHR5cGVvZih0YXJnZXQpICE9PSBcInN0cmluZ1wiKSA/IHRhcmdldCA6IFR3ZWVuTGl0ZS5zZWxlY3Rvcih0YXJnZXQpIHx8IHRhcmdldDtcblx0XHRcdHZhciBpLCBhLCBqLCB0O1xuXHRcdFx0aWYgKChfaXNBcnJheSh0YXJnZXQpIHx8IF9pc1NlbGVjdG9yKHRhcmdldCkpICYmIHR5cGVvZih0YXJnZXRbMF0pICE9PSBcIm51bWJlclwiKSB7XG5cdFx0XHRcdGkgPSB0YXJnZXQubGVuZ3RoO1xuXHRcdFx0XHRhID0gW107XG5cdFx0XHRcdHdoaWxlICgtLWkgPiAtMSkge1xuXHRcdFx0XHRcdGEgPSBhLmNvbmNhdChUd2VlbkxpdGUuZ2V0VHdlZW5zT2YodGFyZ2V0W2ldLCBvbmx5QWN0aXZlKSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0aSA9IGEubGVuZ3RoO1xuXHRcdFx0XHQvL25vdyBnZXQgcmlkIG9mIGFueSBkdXBsaWNhdGVzICh0d2VlbnMgb2YgYXJyYXlzIG9mIG9iamVjdHMgY291bGQgY2F1c2UgZHVwbGljYXRlcylcblx0XHRcdFx0d2hpbGUgKC0taSA+IC0xKSB7XG5cdFx0XHRcdFx0dCA9IGFbaV07XG5cdFx0XHRcdFx0aiA9IGk7XG5cdFx0XHRcdFx0d2hpbGUgKC0taiA+IC0xKSB7XG5cdFx0XHRcdFx0XHRpZiAodCA9PT0gYVtqXSkge1xuXHRcdFx0XHRcdFx0XHRhLnNwbGljZShpLCAxKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSBpZiAodGFyZ2V0Ll9nc1R3ZWVuSUQpIHtcblx0XHRcdFx0YSA9IF9yZWdpc3Rlcih0YXJnZXQpLmNvbmNhdCgpO1xuXHRcdFx0XHRpID0gYS5sZW5ndGg7XG5cdFx0XHRcdHdoaWxlICgtLWkgPiAtMSkge1xuXHRcdFx0XHRcdGlmIChhW2ldLl9nYyB8fCAob25seUFjdGl2ZSAmJiAhYVtpXS5pc0FjdGl2ZSgpKSkge1xuXHRcdFx0XHRcdFx0YS5zcGxpY2UoaSwgMSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gYSB8fCBbXTtcblx0XHR9O1xuXG5cdFx0VHdlZW5MaXRlLmtpbGxUd2VlbnNPZiA9IFR3ZWVuTGl0ZS5raWxsRGVsYXllZENhbGxzVG8gPSBmdW5jdGlvbih0YXJnZXQsIG9ubHlBY3RpdmUsIHZhcnMpIHtcblx0XHRcdGlmICh0eXBlb2Yob25seUFjdGl2ZSkgPT09IFwib2JqZWN0XCIpIHtcblx0XHRcdFx0dmFycyA9IG9ubHlBY3RpdmU7IC8vZm9yIGJhY2t3YXJkcyBjb21wYXRpYmlsaXR5IChiZWZvcmUgXCJvbmx5QWN0aXZlXCIgcGFyYW1ldGVyIHdhcyBpbnNlcnRlZClcblx0XHRcdFx0b25seUFjdGl2ZSA9IGZhbHNlO1xuXHRcdFx0fVxuXHRcdFx0dmFyIGEgPSBUd2VlbkxpdGUuZ2V0VHdlZW5zT2YodGFyZ2V0LCBvbmx5QWN0aXZlKSxcblx0XHRcdFx0aSA9IGEubGVuZ3RoO1xuXHRcdFx0d2hpbGUgKC0taSA+IC0xKSB7XG5cdFx0XHRcdGFbaV0uX2tpbGwodmFycywgdGFyZ2V0KTtcblx0XHRcdH1cblx0XHR9O1xuXG5cblxuLypcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIFR3ZWVuUGx1Z2luICAgKGNvdWxkIGVhc2lseSBiZSBzcGxpdCBvdXQgYXMgYSBzZXBhcmF0ZSBmaWxlL2NsYXNzLCBidXQgaW5jbHVkZWQgZm9yIGVhc2Ugb2YgdXNlIChzbyB0aGF0IHBlb3BsZSBkb24ndCBuZWVkIHRvIGluY2x1ZGUgYW5vdGhlciBzY3JpcHQgY2FsbCBiZWZvcmUgbG9hZGluZyBwbHVnaW5zIHdoaWNoIGlzIGVhc3kgdG8gZm9yZ2V0KVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cdFx0dmFyIFR3ZWVuUGx1Z2luID0gX2NsYXNzKFwicGx1Z2lucy5Ud2VlblBsdWdpblwiLCBmdW5jdGlvbihwcm9wcywgcHJpb3JpdHkpIHtcblx0XHRcdFx0XHR0aGlzLl9vdmVyd3JpdGVQcm9wcyA9IChwcm9wcyB8fCBcIlwiKS5zcGxpdChcIixcIik7XG5cdFx0XHRcdFx0dGhpcy5fcHJvcE5hbWUgPSB0aGlzLl9vdmVyd3JpdGVQcm9wc1swXTtcblx0XHRcdFx0XHR0aGlzLl9wcmlvcml0eSA9IHByaW9yaXR5IHx8IDA7XG5cdFx0XHRcdFx0dGhpcy5fc3VwZXIgPSBUd2VlblBsdWdpbi5wcm90b3R5cGU7XG5cdFx0XHRcdH0sIHRydWUpO1xuXG5cdFx0cCA9IFR3ZWVuUGx1Z2luLnByb3RvdHlwZTtcblx0XHRUd2VlblBsdWdpbi52ZXJzaW9uID0gXCIxLjE5LjBcIjtcblx0XHRUd2VlblBsdWdpbi5BUEkgPSAyO1xuXHRcdHAuX2ZpcnN0UFQgPSBudWxsO1xuXHRcdHAuX2FkZFR3ZWVuID0gX2FkZFByb3BUd2Vlbjtcblx0XHRwLnNldFJhdGlvID0gX3NldFJhdGlvO1xuXG5cdFx0cC5fa2lsbCA9IGZ1bmN0aW9uKGxvb2t1cCkge1xuXHRcdFx0dmFyIGEgPSB0aGlzLl9vdmVyd3JpdGVQcm9wcyxcblx0XHRcdFx0cHQgPSB0aGlzLl9maXJzdFBULFxuXHRcdFx0XHRpO1xuXHRcdFx0aWYgKGxvb2t1cFt0aGlzLl9wcm9wTmFtZV0gIT0gbnVsbCkge1xuXHRcdFx0XHR0aGlzLl9vdmVyd3JpdGVQcm9wcyA9IFtdO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0aSA9IGEubGVuZ3RoO1xuXHRcdFx0XHR3aGlsZSAoLS1pID4gLTEpIHtcblx0XHRcdFx0XHRpZiAobG9va3VwW2FbaV1dICE9IG51bGwpIHtcblx0XHRcdFx0XHRcdGEuc3BsaWNlKGksIDEpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0d2hpbGUgKHB0KSB7XG5cdFx0XHRcdGlmIChsb29rdXBbcHQubl0gIT0gbnVsbCkge1xuXHRcdFx0XHRcdGlmIChwdC5fbmV4dCkge1xuXHRcdFx0XHRcdFx0cHQuX25leHQuX3ByZXYgPSBwdC5fcHJldjtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0aWYgKHB0Ll9wcmV2KSB7XG5cdFx0XHRcdFx0XHRwdC5fcHJldi5fbmV4dCA9IHB0Ll9uZXh0O1xuXHRcdFx0XHRcdFx0cHQuX3ByZXYgPSBudWxsO1xuXHRcdFx0XHRcdH0gZWxzZSBpZiAodGhpcy5fZmlyc3RQVCA9PT0gcHQpIHtcblx0XHRcdFx0XHRcdHRoaXMuX2ZpcnN0UFQgPSBwdC5fbmV4dDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdFx0cHQgPSBwdC5fbmV4dDtcblx0XHRcdH1cblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9O1xuXG5cdFx0cC5fbW9kID0gcC5fcm91bmRQcm9wcyA9IGZ1bmN0aW9uKGxvb2t1cCkge1xuXHRcdFx0dmFyIHB0ID0gdGhpcy5fZmlyc3RQVCxcblx0XHRcdFx0dmFsO1xuXHRcdFx0d2hpbGUgKHB0KSB7XG5cdFx0XHRcdHZhbCA9IGxvb2t1cFt0aGlzLl9wcm9wTmFtZV0gfHwgKHB0Lm4gIT0gbnVsbCAmJiBsb29rdXBbIHB0Lm4uc3BsaXQodGhpcy5fcHJvcE5hbWUgKyBcIl9cIikuam9pbihcIlwiKSBdKTtcblx0XHRcdFx0aWYgKHZhbCAmJiB0eXBlb2YodmFsKSA9PT0gXCJmdW5jdGlvblwiKSB7IC8vc29tZSBwcm9wZXJ0aWVzIHRoYXQgYXJlIHZlcnkgcGx1Z2luLXNwZWNpZmljIGFkZCBhIHByZWZpeCBuYW1lZCBhZnRlciB0aGUgX3Byb3BOYW1lIHBsdXMgYW4gdW5kZXJzY29yZSwgc28gd2UgbmVlZCB0byBpZ25vcmUgdGhhdCBleHRyYSBzdHVmZiBoZXJlLlxuXHRcdFx0XHRcdGlmIChwdC5mID09PSAyKSB7XG5cdFx0XHRcdFx0XHRwdC50Ll9hcHBseVBULm0gPSB2YWw7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdHB0Lm0gPSB2YWw7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRcdHB0ID0gcHQuX25leHQ7XG5cdFx0XHR9XG5cdFx0fTtcblxuXHRcdFR3ZWVuTGl0ZS5fb25QbHVnaW5FdmVudCA9IGZ1bmN0aW9uKHR5cGUsIHR3ZWVuKSB7XG5cdFx0XHR2YXIgcHQgPSB0d2Vlbi5fZmlyc3RQVCxcblx0XHRcdFx0Y2hhbmdlZCwgcHQyLCBmaXJzdCwgbGFzdCwgbmV4dDtcblx0XHRcdGlmICh0eXBlID09PSBcIl9vbkluaXRBbGxQcm9wc1wiKSB7XG5cdFx0XHRcdC8vc29ydHMgdGhlIFByb3BUd2VlbiBsaW5rZWQgbGlzdCBpbiBvcmRlciBvZiBwcmlvcml0eSBiZWNhdXNlIHNvbWUgcGx1Z2lucyBuZWVkIHRvIHJlbmRlciBlYXJsaWVyL2xhdGVyIHRoYW4gb3RoZXJzLCBsaWtlIE1vdGlvbkJsdXJQbHVnaW4gYXBwbGllcyBpdHMgZWZmZWN0cyBhZnRlciBhbGwgeC95L2FscGhhIHR3ZWVucyBoYXZlIHJlbmRlcmVkIG9uIGVhY2ggZnJhbWUuXG5cdFx0XHRcdHdoaWxlIChwdCkge1xuXHRcdFx0XHRcdG5leHQgPSBwdC5fbmV4dDtcblx0XHRcdFx0XHRwdDIgPSBmaXJzdDtcblx0XHRcdFx0XHR3aGlsZSAocHQyICYmIHB0Mi5wciA+IHB0LnByKSB7XG5cdFx0XHRcdFx0XHRwdDIgPSBwdDIuX25leHQ7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGlmICgocHQuX3ByZXYgPSBwdDIgPyBwdDIuX3ByZXYgOiBsYXN0KSkge1xuXHRcdFx0XHRcdFx0cHQuX3ByZXYuX25leHQgPSBwdDtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0Zmlyc3QgPSBwdDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0aWYgKChwdC5fbmV4dCA9IHB0MikpIHtcblx0XHRcdFx0XHRcdHB0Mi5fcHJldiA9IHB0O1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRsYXN0ID0gcHQ7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHB0ID0gbmV4dDtcblx0XHRcdFx0fVxuXHRcdFx0XHRwdCA9IHR3ZWVuLl9maXJzdFBUID0gZmlyc3Q7XG5cdFx0XHR9XG5cdFx0XHR3aGlsZSAocHQpIHtcblx0XHRcdFx0aWYgKHB0LnBnKSBpZiAodHlwZW9mKHB0LnRbdHlwZV0pID09PSBcImZ1bmN0aW9uXCIpIGlmIChwdC50W3R5cGVdKCkpIHtcblx0XHRcdFx0XHRjaGFuZ2VkID0gdHJ1ZTtcblx0XHRcdFx0fVxuXHRcdFx0XHRwdCA9IHB0Ll9uZXh0O1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIGNoYW5nZWQ7XG5cdFx0fTtcblxuXHRcdFR3ZWVuUGx1Z2luLmFjdGl2YXRlID0gZnVuY3Rpb24ocGx1Z2lucykge1xuXHRcdFx0dmFyIGkgPSBwbHVnaW5zLmxlbmd0aDtcblx0XHRcdHdoaWxlICgtLWkgPiAtMSkge1xuXHRcdFx0XHRpZiAocGx1Z2luc1tpXS5BUEkgPT09IFR3ZWVuUGx1Z2luLkFQSSkge1xuXHRcdFx0XHRcdF9wbHVnaW5zWyhuZXcgcGx1Z2luc1tpXSgpKS5fcHJvcE5hbWVdID0gcGx1Z2luc1tpXTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fTtcblxuXHRcdC8vcHJvdmlkZXMgYSBtb3JlIGNvbmNpc2Ugd2F5IHRvIGRlZmluZSBwbHVnaW5zIHRoYXQgaGF2ZSBubyBkZXBlbmRlbmNpZXMgYmVzaWRlcyBUd2VlblBsdWdpbiBhbmQgVHdlZW5MaXRlLCB3cmFwcGluZyBjb21tb24gYm9pbGVycGxhdGUgc3R1ZmYgaW50byBvbmUgZnVuY3Rpb24gKGFkZGVkIGluIDEuOS4wKS4gWW91IGRvbid0IE5FRUQgdG8gdXNlIHRoaXMgdG8gZGVmaW5lIGEgcGx1Z2luIC0gdGhlIG9sZCB3YXkgc3RpbGwgd29ya3MgYW5kIGNhbiBiZSB1c2VmdWwgaW4gY2VydGFpbiAocmFyZSkgc2l0dWF0aW9ucy5cblx0XHRfZ3NEZWZpbmUucGx1Z2luID0gZnVuY3Rpb24oY29uZmlnKSB7XG5cdFx0XHRpZiAoIWNvbmZpZyB8fCAhY29uZmlnLnByb3BOYW1lIHx8ICFjb25maWcuaW5pdCB8fCAhY29uZmlnLkFQSSkgeyB0aHJvdyBcImlsbGVnYWwgcGx1Z2luIGRlZmluaXRpb24uXCI7IH1cblx0XHRcdHZhciBwcm9wTmFtZSA9IGNvbmZpZy5wcm9wTmFtZSxcblx0XHRcdFx0cHJpb3JpdHkgPSBjb25maWcucHJpb3JpdHkgfHwgMCxcblx0XHRcdFx0b3ZlcndyaXRlUHJvcHMgPSBjb25maWcub3ZlcndyaXRlUHJvcHMsXG5cdFx0XHRcdG1hcCA9IHtpbml0OlwiX29uSW5pdFR3ZWVuXCIsIHNldDpcInNldFJhdGlvXCIsIGtpbGw6XCJfa2lsbFwiLCByb3VuZDpcIl9tb2RcIiwgbW9kOlwiX21vZFwiLCBpbml0QWxsOlwiX29uSW5pdEFsbFByb3BzXCJ9LFxuXHRcdFx0XHRQbHVnaW4gPSBfY2xhc3MoXCJwbHVnaW5zLlwiICsgcHJvcE5hbWUuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBwcm9wTmFtZS5zdWJzdHIoMSkgKyBcIlBsdWdpblwiLFxuXHRcdFx0XHRcdGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdFx0VHdlZW5QbHVnaW4uY2FsbCh0aGlzLCBwcm9wTmFtZSwgcHJpb3JpdHkpO1xuXHRcdFx0XHRcdFx0dGhpcy5fb3ZlcndyaXRlUHJvcHMgPSBvdmVyd3JpdGVQcm9wcyB8fCBbXTtcblx0XHRcdFx0XHR9LCAoY29uZmlnLmdsb2JhbCA9PT0gdHJ1ZSkpLFxuXHRcdFx0XHRwID0gUGx1Z2luLnByb3RvdHlwZSA9IG5ldyBUd2VlblBsdWdpbihwcm9wTmFtZSksXG5cdFx0XHRcdHByb3A7XG5cdFx0XHRwLmNvbnN0cnVjdG9yID0gUGx1Z2luO1xuXHRcdFx0UGx1Z2luLkFQSSA9IGNvbmZpZy5BUEk7XG5cdFx0XHRmb3IgKHByb3AgaW4gbWFwKSB7XG5cdFx0XHRcdGlmICh0eXBlb2YoY29uZmlnW3Byb3BdKSA9PT0gXCJmdW5jdGlvblwiKSB7XG5cdFx0XHRcdFx0cFttYXBbcHJvcF1dID0gY29uZmlnW3Byb3BdO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRQbHVnaW4udmVyc2lvbiA9IGNvbmZpZy52ZXJzaW9uO1xuXHRcdFx0VHdlZW5QbHVnaW4uYWN0aXZhdGUoW1BsdWdpbl0pO1xuXHRcdFx0cmV0dXJuIFBsdWdpbjtcblx0XHR9O1xuXG5cblx0XHQvL25vdyBydW4gdGhyb3VnaCBhbGwgdGhlIGRlcGVuZGVuY2llcyBkaXNjb3ZlcmVkIGFuZCBpZiBhbnkgYXJlIG1pc3NpbmcsIGxvZyB0aGF0IHRvIHRoZSBjb25zb2xlIGFzIGEgd2FybmluZy4gVGhpcyBpcyB3aHkgaXQncyBiZXN0IHRvIGhhdmUgVHdlZW5MaXRlIGxvYWQgbGFzdCAtIGl0IGNhbiBjaGVjayBhbGwgdGhlIGRlcGVuZGVuY2llcyBmb3IgeW91LlxuXHRcdGEgPSB3aW5kb3cuX2dzUXVldWU7XG5cdFx0aWYgKGEpIHtcblx0XHRcdGZvciAoaSA9IDA7IGkgPCBhLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdGFbaV0oKTtcblx0XHRcdH1cblx0XHRcdGZvciAocCBpbiBfZGVmTG9va3VwKSB7XG5cdFx0XHRcdGlmICghX2RlZkxvb2t1cFtwXS5mdW5jKSB7XG5cdFx0XHRcdFx0d2luZG93LmNvbnNvbGUubG9nKFwiR1NBUCBlbmNvdW50ZXJlZCBtaXNzaW5nIGRlcGVuZGVuY3k6IFwiICsgcCk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cblx0XHRfdGlja2VyQWN0aXZlID0gZmFsc2U7IC8vZW5zdXJlcyB0aGF0IHRoZSBmaXJzdCBvZmZpY2lhbCBhbmltYXRpb24gZm9yY2VzIGEgdGlja2VyLnRpY2soKSB0byB1cGRhdGUgdGhlIHRpbWUgd2hlbiBpdCBpcyBpbnN0YW50aWF0ZWRcblxufSkoKHR5cGVvZihtb2R1bGUpICE9PSBcInVuZGVmaW5lZFwiICYmIG1vZHVsZS5leHBvcnRzICYmIHR5cGVvZihnbG9iYWwpICE9PSBcInVuZGVmaW5lZFwiKSA/IGdsb2JhbCA6IHRoaXMgfHwgd2luZG93LCBcIlR3ZWVuTGl0ZVwiKTsiLCJ2YXIgcm9vdCA9IHJlcXVpcmUoJy4vX3Jvb3QnKTtcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgU3ltYm9sID0gcm9vdC5TeW1ib2w7XG5cbm1vZHVsZS5leHBvcnRzID0gU3ltYm9sO1xuIiwidmFyIFN5bWJvbCA9IHJlcXVpcmUoJy4vX1N5bWJvbCcpLFxuICAgIGdldFJhd1RhZyA9IHJlcXVpcmUoJy4vX2dldFJhd1RhZycpLFxuICAgIG9iamVjdFRvU3RyaW5nID0gcmVxdWlyZSgnLi9fb2JqZWN0VG9TdHJpbmcnKTtcblxuLyoqIGBPYmplY3QjdG9TdHJpbmdgIHJlc3VsdCByZWZlcmVuY2VzLiAqL1xudmFyIG51bGxUYWcgPSAnW29iamVjdCBOdWxsXScsXG4gICAgdW5kZWZpbmVkVGFnID0gJ1tvYmplY3QgVW5kZWZpbmVkXSc7XG5cbi8qKiBCdWlsdC1pbiB2YWx1ZSByZWZlcmVuY2VzLiAqL1xudmFyIHN5bVRvU3RyaW5nVGFnID0gU3ltYm9sID8gU3ltYm9sLnRvU3RyaW5nVGFnIDogdW5kZWZpbmVkO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBnZXRUYWdgIHdpdGhvdXQgZmFsbGJhY2tzIGZvciBidWdneSBlbnZpcm9ubWVudHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHF1ZXJ5LlxuICogQHJldHVybnMge3N0cmluZ30gUmV0dXJucyB0aGUgYHRvU3RyaW5nVGFnYC5cbiAqL1xuZnVuY3Rpb24gYmFzZUdldFRhZyh2YWx1ZSkge1xuICBpZiAodmFsdWUgPT0gbnVsbCkge1xuICAgIHJldHVybiB2YWx1ZSA9PT0gdW5kZWZpbmVkID8gdW5kZWZpbmVkVGFnIDogbnVsbFRhZztcbiAgfVxuICByZXR1cm4gKHN5bVRvU3RyaW5nVGFnICYmIHN5bVRvU3RyaW5nVGFnIGluIE9iamVjdCh2YWx1ZSkpXG4gICAgPyBnZXRSYXdUYWcodmFsdWUpXG4gICAgOiBvYmplY3RUb1N0cmluZyh2YWx1ZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUdldFRhZztcbiIsIi8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgZ2xvYmFsYCBmcm9tIE5vZGUuanMuICovXG52YXIgZnJlZUdsb2JhbCA9IHR5cGVvZiBnbG9iYWwgPT0gJ29iamVjdCcgJiYgZ2xvYmFsICYmIGdsb2JhbC5PYmplY3QgPT09IE9iamVjdCAmJiBnbG9iYWw7XG5cbm1vZHVsZS5leHBvcnRzID0gZnJlZUdsb2JhbDtcbiIsInZhciBTeW1ib2wgPSByZXF1aXJlKCcuL19TeW1ib2wnKTtcblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gY2hlY2sgb2JqZWN0cyBmb3Igb3duIHByb3BlcnRpZXMuICovXG52YXIgaGFzT3duUHJvcGVydHkgPSBvYmplY3RQcm90by5oYXNPd25Qcm9wZXJ0eTtcblxuLyoqXG4gKiBVc2VkIHRvIHJlc29sdmUgdGhlXG4gKiBbYHRvU3RyaW5nVGFnYF0oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtb2JqZWN0LnByb3RvdHlwZS50b3N0cmluZylcbiAqIG9mIHZhbHVlcy5cbiAqL1xudmFyIG5hdGl2ZU9iamVjdFRvU3RyaW5nID0gb2JqZWN0UHJvdG8udG9TdHJpbmc7XG5cbi8qKiBCdWlsdC1pbiB2YWx1ZSByZWZlcmVuY2VzLiAqL1xudmFyIHN5bVRvU3RyaW5nVGFnID0gU3ltYm9sID8gU3ltYm9sLnRvU3RyaW5nVGFnIDogdW5kZWZpbmVkO1xuXG4vKipcbiAqIEEgc3BlY2lhbGl6ZWQgdmVyc2lvbiBvZiBgYmFzZUdldFRhZ2Agd2hpY2ggaWdub3JlcyBgU3ltYm9sLnRvU3RyaW5nVGFnYCB2YWx1ZXMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHF1ZXJ5LlxuICogQHJldHVybnMge3N0cmluZ30gUmV0dXJucyB0aGUgcmF3IGB0b1N0cmluZ1RhZ2AuXG4gKi9cbmZ1bmN0aW9uIGdldFJhd1RhZyh2YWx1ZSkge1xuICB2YXIgaXNPd24gPSBoYXNPd25Qcm9wZXJ0eS5jYWxsKHZhbHVlLCBzeW1Ub1N0cmluZ1RhZyksXG4gICAgICB0YWcgPSB2YWx1ZVtzeW1Ub1N0cmluZ1RhZ107XG5cbiAgdHJ5IHtcbiAgICB2YWx1ZVtzeW1Ub1N0cmluZ1RhZ10gPSB1bmRlZmluZWQ7XG4gICAgdmFyIHVubWFza2VkID0gdHJ1ZTtcbiAgfSBjYXRjaCAoZSkge31cblxuICB2YXIgcmVzdWx0ID0gbmF0aXZlT2JqZWN0VG9TdHJpbmcuY2FsbCh2YWx1ZSk7XG4gIGlmICh1bm1hc2tlZCkge1xuICAgIGlmIChpc093bikge1xuICAgICAgdmFsdWVbc3ltVG9TdHJpbmdUYWddID0gdGFnO1xuICAgIH0gZWxzZSB7XG4gICAgICBkZWxldGUgdmFsdWVbc3ltVG9TdHJpbmdUYWddO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGdldFJhd1RhZztcbiIsIi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKlxuICogVXNlZCB0byByZXNvbHZlIHRoZVxuICogW2B0b1N0cmluZ1RhZ2BdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLW9iamVjdC5wcm90b3R5cGUudG9zdHJpbmcpXG4gKiBvZiB2YWx1ZXMuXG4gKi9cbnZhciBuYXRpdmVPYmplY3RUb1N0cmluZyA9IG9iamVjdFByb3RvLnRvU3RyaW5nO1xuXG4vKipcbiAqIENvbnZlcnRzIGB2YWx1ZWAgdG8gYSBzdHJpbmcgdXNpbmcgYE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmdgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjb252ZXJ0LlxuICogQHJldHVybnMge3N0cmluZ30gUmV0dXJucyB0aGUgY29udmVydGVkIHN0cmluZy5cbiAqL1xuZnVuY3Rpb24gb2JqZWN0VG9TdHJpbmcodmFsdWUpIHtcbiAgcmV0dXJuIG5hdGl2ZU9iamVjdFRvU3RyaW5nLmNhbGwodmFsdWUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IG9iamVjdFRvU3RyaW5nO1xuIiwidmFyIGZyZWVHbG9iYWwgPSByZXF1aXJlKCcuL19mcmVlR2xvYmFsJyk7XG5cbi8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgc2VsZmAuICovXG52YXIgZnJlZVNlbGYgPSB0eXBlb2Ygc2VsZiA9PSAnb2JqZWN0JyAmJiBzZWxmICYmIHNlbGYuT2JqZWN0ID09PSBPYmplY3QgJiYgc2VsZjtcblxuLyoqIFVzZWQgYXMgYSByZWZlcmVuY2UgdG8gdGhlIGdsb2JhbCBvYmplY3QuICovXG52YXIgcm9vdCA9IGZyZWVHbG9iYWwgfHwgZnJlZVNlbGYgfHwgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblxubW9kdWxlLmV4cG9ydHMgPSByb290O1xuIiwidmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9pc09iamVjdCcpLFxuICAgIG5vdyA9IHJlcXVpcmUoJy4vbm93JyksXG4gICAgdG9OdW1iZXIgPSByZXF1aXJlKCcuL3RvTnVtYmVyJyk7XG5cbi8qKiBFcnJvciBtZXNzYWdlIGNvbnN0YW50cy4gKi9cbnZhciBGVU5DX0VSUk9SX1RFWFQgPSAnRXhwZWN0ZWQgYSBmdW5jdGlvbic7XG5cbi8qIEJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzIGZvciB0aG9zZSB3aXRoIHRoZSBzYW1lIG5hbWUgYXMgb3RoZXIgYGxvZGFzaGAgbWV0aG9kcy4gKi9cbnZhciBuYXRpdmVNYXggPSBNYXRoLm1heCxcbiAgICBuYXRpdmVNaW4gPSBNYXRoLm1pbjtcblxuLyoqXG4gKiBDcmVhdGVzIGEgZGVib3VuY2VkIGZ1bmN0aW9uIHRoYXQgZGVsYXlzIGludm9raW5nIGBmdW5jYCB1bnRpbCBhZnRlciBgd2FpdGBcbiAqIG1pbGxpc2Vjb25kcyBoYXZlIGVsYXBzZWQgc2luY2UgdGhlIGxhc3QgdGltZSB0aGUgZGVib3VuY2VkIGZ1bmN0aW9uIHdhc1xuICogaW52b2tlZC4gVGhlIGRlYm91bmNlZCBmdW5jdGlvbiBjb21lcyB3aXRoIGEgYGNhbmNlbGAgbWV0aG9kIHRvIGNhbmNlbFxuICogZGVsYXllZCBgZnVuY2AgaW52b2NhdGlvbnMgYW5kIGEgYGZsdXNoYCBtZXRob2QgdG8gaW1tZWRpYXRlbHkgaW52b2tlIHRoZW0uXG4gKiBQcm92aWRlIGBvcHRpb25zYCB0byBpbmRpY2F0ZSB3aGV0aGVyIGBmdW5jYCBzaG91bGQgYmUgaW52b2tlZCBvbiB0aGVcbiAqIGxlYWRpbmcgYW5kL29yIHRyYWlsaW5nIGVkZ2Ugb2YgdGhlIGB3YWl0YCB0aW1lb3V0LiBUaGUgYGZ1bmNgIGlzIGludm9rZWRcbiAqIHdpdGggdGhlIGxhc3QgYXJndW1lbnRzIHByb3ZpZGVkIHRvIHRoZSBkZWJvdW5jZWQgZnVuY3Rpb24uIFN1YnNlcXVlbnRcbiAqIGNhbGxzIHRvIHRoZSBkZWJvdW5jZWQgZnVuY3Rpb24gcmV0dXJuIHRoZSByZXN1bHQgb2YgdGhlIGxhc3QgYGZ1bmNgXG4gKiBpbnZvY2F0aW9uLlxuICpcbiAqICoqTm90ZToqKiBJZiBgbGVhZGluZ2AgYW5kIGB0cmFpbGluZ2Agb3B0aW9ucyBhcmUgYHRydWVgLCBgZnVuY2AgaXNcbiAqIGludm9rZWQgb24gdGhlIHRyYWlsaW5nIGVkZ2Ugb2YgdGhlIHRpbWVvdXQgb25seSBpZiB0aGUgZGVib3VuY2VkIGZ1bmN0aW9uXG4gKiBpcyBpbnZva2VkIG1vcmUgdGhhbiBvbmNlIGR1cmluZyB0aGUgYHdhaXRgIHRpbWVvdXQuXG4gKlxuICogSWYgYHdhaXRgIGlzIGAwYCBhbmQgYGxlYWRpbmdgIGlzIGBmYWxzZWAsIGBmdW5jYCBpbnZvY2F0aW9uIGlzIGRlZmVycmVkXG4gKiB1bnRpbCB0byB0aGUgbmV4dCB0aWNrLCBzaW1pbGFyIHRvIGBzZXRUaW1lb3V0YCB3aXRoIGEgdGltZW91dCBvZiBgMGAuXG4gKlxuICogU2VlIFtEYXZpZCBDb3JiYWNobydzIGFydGljbGVdKGh0dHBzOi8vY3NzLXRyaWNrcy5jb20vZGVib3VuY2luZy10aHJvdHRsaW5nLWV4cGxhaW5lZC1leGFtcGxlcy8pXG4gKiBmb3IgZGV0YWlscyBvdmVyIHRoZSBkaWZmZXJlbmNlcyBiZXR3ZWVuIGBfLmRlYm91bmNlYCBhbmQgYF8udGhyb3R0bGVgLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBjYXRlZ29yeSBGdW5jdGlvblxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gZGVib3VuY2UuXG4gKiBAcGFyYW0ge251bWJlcn0gW3dhaXQ9MF0gVGhlIG51bWJlciBvZiBtaWxsaXNlY29uZHMgdG8gZGVsYXkuXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnM9e31dIFRoZSBvcHRpb25zIG9iamVjdC5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW29wdGlvbnMubGVhZGluZz1mYWxzZV1cbiAqICBTcGVjaWZ5IGludm9raW5nIG9uIHRoZSBsZWFkaW5nIGVkZ2Ugb2YgdGhlIHRpbWVvdXQuXG4gKiBAcGFyYW0ge251bWJlcn0gW29wdGlvbnMubWF4V2FpdF1cbiAqICBUaGUgbWF4aW11bSB0aW1lIGBmdW5jYCBpcyBhbGxvd2VkIHRvIGJlIGRlbGF5ZWQgYmVmb3JlIGl0J3MgaW52b2tlZC5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW29wdGlvbnMudHJhaWxpbmc9dHJ1ZV1cbiAqICBTcGVjaWZ5IGludm9raW5nIG9uIHRoZSB0cmFpbGluZyBlZGdlIG9mIHRoZSB0aW1lb3V0LlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBuZXcgZGVib3VuY2VkIGZ1bmN0aW9uLlxuICogQGV4YW1wbGVcbiAqXG4gKiAvLyBBdm9pZCBjb3N0bHkgY2FsY3VsYXRpb25zIHdoaWxlIHRoZSB3aW5kb3cgc2l6ZSBpcyBpbiBmbHV4LlxuICogalF1ZXJ5KHdpbmRvdykub24oJ3Jlc2l6ZScsIF8uZGVib3VuY2UoY2FsY3VsYXRlTGF5b3V0LCAxNTApKTtcbiAqXG4gKiAvLyBJbnZva2UgYHNlbmRNYWlsYCB3aGVuIGNsaWNrZWQsIGRlYm91bmNpbmcgc3Vic2VxdWVudCBjYWxscy5cbiAqIGpRdWVyeShlbGVtZW50KS5vbignY2xpY2snLCBfLmRlYm91bmNlKHNlbmRNYWlsLCAzMDAsIHtcbiAqICAgJ2xlYWRpbmcnOiB0cnVlLFxuICogICAndHJhaWxpbmcnOiBmYWxzZVxuICogfSkpO1xuICpcbiAqIC8vIEVuc3VyZSBgYmF0Y2hMb2dgIGlzIGludm9rZWQgb25jZSBhZnRlciAxIHNlY29uZCBvZiBkZWJvdW5jZWQgY2FsbHMuXG4gKiB2YXIgZGVib3VuY2VkID0gXy5kZWJvdW5jZShiYXRjaExvZywgMjUwLCB7ICdtYXhXYWl0JzogMTAwMCB9KTtcbiAqIHZhciBzb3VyY2UgPSBuZXcgRXZlbnRTb3VyY2UoJy9zdHJlYW0nKTtcbiAqIGpRdWVyeShzb3VyY2UpLm9uKCdtZXNzYWdlJywgZGVib3VuY2VkKTtcbiAqXG4gKiAvLyBDYW5jZWwgdGhlIHRyYWlsaW5nIGRlYm91bmNlZCBpbnZvY2F0aW9uLlxuICogalF1ZXJ5KHdpbmRvdykub24oJ3BvcHN0YXRlJywgZGVib3VuY2VkLmNhbmNlbCk7XG4gKi9cbmZ1bmN0aW9uIGRlYm91bmNlKGZ1bmMsIHdhaXQsIG9wdGlvbnMpIHtcbiAgdmFyIGxhc3RBcmdzLFxuICAgICAgbGFzdFRoaXMsXG4gICAgICBtYXhXYWl0LFxuICAgICAgcmVzdWx0LFxuICAgICAgdGltZXJJZCxcbiAgICAgIGxhc3RDYWxsVGltZSxcbiAgICAgIGxhc3RJbnZva2VUaW1lID0gMCxcbiAgICAgIGxlYWRpbmcgPSBmYWxzZSxcbiAgICAgIG1heGluZyA9IGZhbHNlLFxuICAgICAgdHJhaWxpbmcgPSB0cnVlO1xuXG4gIGlmICh0eXBlb2YgZnVuYyAhPSAnZnVuY3Rpb24nKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihGVU5DX0VSUk9SX1RFWFQpO1xuICB9XG4gIHdhaXQgPSB0b051bWJlcih3YWl0KSB8fCAwO1xuICBpZiAoaXNPYmplY3Qob3B0aW9ucykpIHtcbiAgICBsZWFkaW5nID0gISFvcHRpb25zLmxlYWRpbmc7XG4gICAgbWF4aW5nID0gJ21heFdhaXQnIGluIG9wdGlvbnM7XG4gICAgbWF4V2FpdCA9IG1heGluZyA/IG5hdGl2ZU1heCh0b051bWJlcihvcHRpb25zLm1heFdhaXQpIHx8IDAsIHdhaXQpIDogbWF4V2FpdDtcbiAgICB0cmFpbGluZyA9ICd0cmFpbGluZycgaW4gb3B0aW9ucyA/ICEhb3B0aW9ucy50cmFpbGluZyA6IHRyYWlsaW5nO1xuICB9XG5cbiAgZnVuY3Rpb24gaW52b2tlRnVuYyh0aW1lKSB7XG4gICAgdmFyIGFyZ3MgPSBsYXN0QXJncyxcbiAgICAgICAgdGhpc0FyZyA9IGxhc3RUaGlzO1xuXG4gICAgbGFzdEFyZ3MgPSBsYXN0VGhpcyA9IHVuZGVmaW5lZDtcbiAgICBsYXN0SW52b2tlVGltZSA9IHRpbWU7XG4gICAgcmVzdWx0ID0gZnVuYy5hcHBseSh0aGlzQXJnLCBhcmdzKTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgZnVuY3Rpb24gbGVhZGluZ0VkZ2UodGltZSkge1xuICAgIC8vIFJlc2V0IGFueSBgbWF4V2FpdGAgdGltZXIuXG4gICAgbGFzdEludm9rZVRpbWUgPSB0aW1lO1xuICAgIC8vIFN0YXJ0IHRoZSB0aW1lciBmb3IgdGhlIHRyYWlsaW5nIGVkZ2UuXG4gICAgdGltZXJJZCA9IHNldFRpbWVvdXQodGltZXJFeHBpcmVkLCB3YWl0KTtcbiAgICAvLyBJbnZva2UgdGhlIGxlYWRpbmcgZWRnZS5cbiAgICByZXR1cm4gbGVhZGluZyA/IGludm9rZUZ1bmModGltZSkgOiByZXN1bHQ7XG4gIH1cblxuICBmdW5jdGlvbiByZW1haW5pbmdXYWl0KHRpbWUpIHtcbiAgICB2YXIgdGltZVNpbmNlTGFzdENhbGwgPSB0aW1lIC0gbGFzdENhbGxUaW1lLFxuICAgICAgICB0aW1lU2luY2VMYXN0SW52b2tlID0gdGltZSAtIGxhc3RJbnZva2VUaW1lLFxuICAgICAgICB0aW1lV2FpdGluZyA9IHdhaXQgLSB0aW1lU2luY2VMYXN0Q2FsbDtcblxuICAgIHJldHVybiBtYXhpbmdcbiAgICAgID8gbmF0aXZlTWluKHRpbWVXYWl0aW5nLCBtYXhXYWl0IC0gdGltZVNpbmNlTGFzdEludm9rZSlcbiAgICAgIDogdGltZVdhaXRpbmc7XG4gIH1cblxuICBmdW5jdGlvbiBzaG91bGRJbnZva2UodGltZSkge1xuICAgIHZhciB0aW1lU2luY2VMYXN0Q2FsbCA9IHRpbWUgLSBsYXN0Q2FsbFRpbWUsXG4gICAgICAgIHRpbWVTaW5jZUxhc3RJbnZva2UgPSB0aW1lIC0gbGFzdEludm9rZVRpbWU7XG5cbiAgICAvLyBFaXRoZXIgdGhpcyBpcyB0aGUgZmlyc3QgY2FsbCwgYWN0aXZpdHkgaGFzIHN0b3BwZWQgYW5kIHdlJ3JlIGF0IHRoZVxuICAgIC8vIHRyYWlsaW5nIGVkZ2UsIHRoZSBzeXN0ZW0gdGltZSBoYXMgZ29uZSBiYWNrd2FyZHMgYW5kIHdlJ3JlIHRyZWF0aW5nXG4gICAgLy8gaXQgYXMgdGhlIHRyYWlsaW5nIGVkZ2UsIG9yIHdlJ3ZlIGhpdCB0aGUgYG1heFdhaXRgIGxpbWl0LlxuICAgIHJldHVybiAobGFzdENhbGxUaW1lID09PSB1bmRlZmluZWQgfHwgKHRpbWVTaW5jZUxhc3RDYWxsID49IHdhaXQpIHx8XG4gICAgICAodGltZVNpbmNlTGFzdENhbGwgPCAwKSB8fCAobWF4aW5nICYmIHRpbWVTaW5jZUxhc3RJbnZva2UgPj0gbWF4V2FpdCkpO1xuICB9XG5cbiAgZnVuY3Rpb24gdGltZXJFeHBpcmVkKCkge1xuICAgIHZhciB0aW1lID0gbm93KCk7XG4gICAgaWYgKHNob3VsZEludm9rZSh0aW1lKSkge1xuICAgICAgcmV0dXJuIHRyYWlsaW5nRWRnZSh0aW1lKTtcbiAgICB9XG4gICAgLy8gUmVzdGFydCB0aGUgdGltZXIuXG4gICAgdGltZXJJZCA9IHNldFRpbWVvdXQodGltZXJFeHBpcmVkLCByZW1haW5pbmdXYWl0KHRpbWUpKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHRyYWlsaW5nRWRnZSh0aW1lKSB7XG4gICAgdGltZXJJZCA9IHVuZGVmaW5lZDtcblxuICAgIC8vIE9ubHkgaW52b2tlIGlmIHdlIGhhdmUgYGxhc3RBcmdzYCB3aGljaCBtZWFucyBgZnVuY2AgaGFzIGJlZW5cbiAgICAvLyBkZWJvdW5jZWQgYXQgbGVhc3Qgb25jZS5cbiAgICBpZiAodHJhaWxpbmcgJiYgbGFzdEFyZ3MpIHtcbiAgICAgIHJldHVybiBpbnZva2VGdW5jKHRpbWUpO1xuICAgIH1cbiAgICBsYXN0QXJncyA9IGxhc3RUaGlzID0gdW5kZWZpbmVkO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBmdW5jdGlvbiBjYW5jZWwoKSB7XG4gICAgaWYgKHRpbWVySWQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgY2xlYXJUaW1lb3V0KHRpbWVySWQpO1xuICAgIH1cbiAgICBsYXN0SW52b2tlVGltZSA9IDA7XG4gICAgbGFzdEFyZ3MgPSBsYXN0Q2FsbFRpbWUgPSBsYXN0VGhpcyA9IHRpbWVySWQgPSB1bmRlZmluZWQ7XG4gIH1cblxuICBmdW5jdGlvbiBmbHVzaCgpIHtcbiAgICByZXR1cm4gdGltZXJJZCA9PT0gdW5kZWZpbmVkID8gcmVzdWx0IDogdHJhaWxpbmdFZGdlKG5vdygpKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGRlYm91bmNlZCgpIHtcbiAgICB2YXIgdGltZSA9IG5vdygpLFxuICAgICAgICBpc0ludm9raW5nID0gc2hvdWxkSW52b2tlKHRpbWUpO1xuXG4gICAgbGFzdEFyZ3MgPSBhcmd1bWVudHM7XG4gICAgbGFzdFRoaXMgPSB0aGlzO1xuICAgIGxhc3RDYWxsVGltZSA9IHRpbWU7XG5cbiAgICBpZiAoaXNJbnZva2luZykge1xuICAgICAgaWYgKHRpbWVySWQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm4gbGVhZGluZ0VkZ2UobGFzdENhbGxUaW1lKTtcbiAgICAgIH1cbiAgICAgIGlmIChtYXhpbmcpIHtcbiAgICAgICAgLy8gSGFuZGxlIGludm9jYXRpb25zIGluIGEgdGlnaHQgbG9vcC5cbiAgICAgICAgdGltZXJJZCA9IHNldFRpbWVvdXQodGltZXJFeHBpcmVkLCB3YWl0KTtcbiAgICAgICAgcmV0dXJuIGludm9rZUZ1bmMobGFzdENhbGxUaW1lKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHRpbWVySWQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGltZXJJZCA9IHNldFRpbWVvdXQodGltZXJFeHBpcmVkLCB3YWl0KTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuICBkZWJvdW5jZWQuY2FuY2VsID0gY2FuY2VsO1xuICBkZWJvdW5jZWQuZmx1c2ggPSBmbHVzaDtcbiAgcmV0dXJuIGRlYm91bmNlZDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkZWJvdW5jZTtcbiIsIi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgdGhlXG4gKiBbbGFuZ3VhZ2UgdHlwZV0oaHR0cDovL3d3dy5lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLWVjbWFzY3JpcHQtbGFuZ3VhZ2UtdHlwZXMpXG4gKiBvZiBgT2JqZWN0YC4gKGUuZy4gYXJyYXlzLCBmdW5jdGlvbnMsIG9iamVjdHMsIHJlZ2V4ZXMsIGBuZXcgTnVtYmVyKDApYCwgYW5kIGBuZXcgU3RyaW5nKCcnKWApXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjEuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYW4gb2JqZWN0LCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNPYmplY3Qoe30pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3QoWzEsIDIsIDNdKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0KF8ubm9vcCk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdChudWxsKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzT2JqZWN0KHZhbHVlKSB7XG4gIHZhciB0eXBlID0gdHlwZW9mIHZhbHVlO1xuICByZXR1cm4gdmFsdWUgIT0gbnVsbCAmJiAodHlwZSA9PSAnb2JqZWN0JyB8fCB0eXBlID09ICdmdW5jdGlvbicpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzT2JqZWN0O1xuIiwiLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBvYmplY3QtbGlrZS4gQSB2YWx1ZSBpcyBvYmplY3QtbGlrZSBpZiBpdCdzIG5vdCBgbnVsbGBcbiAqIGFuZCBoYXMgYSBgdHlwZW9mYCByZXN1bHQgb2YgXCJvYmplY3RcIi5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBvYmplY3QtbGlrZSwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZSh7fSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdExpa2UoWzEsIDIsIDNdKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZShfLm5vb3ApO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZShudWxsKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzT2JqZWN0TGlrZSh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgIT0gbnVsbCAmJiB0eXBlb2YgdmFsdWUgPT0gJ29iamVjdCc7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNPYmplY3RMaWtlO1xuIiwidmFyIGJhc2VHZXRUYWcgPSByZXF1aXJlKCcuL19iYXNlR2V0VGFnJyksXG4gICAgaXNPYmplY3RMaWtlID0gcmVxdWlyZSgnLi9pc09iamVjdExpa2UnKTtcblxuLyoqIGBPYmplY3QjdG9TdHJpbmdgIHJlc3VsdCByZWZlcmVuY2VzLiAqL1xudmFyIHN5bWJvbFRhZyA9ICdbb2JqZWN0IFN5bWJvbF0nO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGNsYXNzaWZpZWQgYXMgYSBgU3ltYm9sYCBwcmltaXRpdmUgb3Igb2JqZWN0LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgc3ltYm9sLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNTeW1ib2woU3ltYm9sLml0ZXJhdG9yKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzU3ltYm9sKCdhYmMnKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzU3ltYm9sKHZhbHVlKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsdWUgPT0gJ3N5bWJvbCcgfHxcbiAgICAoaXNPYmplY3RMaWtlKHZhbHVlKSAmJiBiYXNlR2V0VGFnKHZhbHVlKSA9PSBzeW1ib2xUYWcpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzU3ltYm9sO1xuIiwidmFyIHJvb3QgPSByZXF1aXJlKCcuL19yb290Jyk7XG5cbi8qKlxuICogR2V0cyB0aGUgdGltZXN0YW1wIG9mIHRoZSBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIHRoYXQgaGF2ZSBlbGFwc2VkIHNpbmNlXG4gKiB0aGUgVW5peCBlcG9jaCAoMSBKYW51YXJ5IDE5NzAgMDA6MDA6MDAgVVRDKS5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDIuNC4wXG4gKiBAY2F0ZWdvcnkgRGF0ZVxuICogQHJldHVybnMge251bWJlcn0gUmV0dXJucyB0aGUgdGltZXN0YW1wLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmRlZmVyKGZ1bmN0aW9uKHN0YW1wKSB7XG4gKiAgIGNvbnNvbGUubG9nKF8ubm93KCkgLSBzdGFtcCk7XG4gKiB9LCBfLm5vdygpKTtcbiAqIC8vID0+IExvZ3MgdGhlIG51bWJlciBvZiBtaWxsaXNlY29uZHMgaXQgdG9vayBmb3IgdGhlIGRlZmVycmVkIGludm9jYXRpb24uXG4gKi9cbnZhciBub3cgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHJvb3QuRGF0ZS5ub3coKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gbm93O1xuIiwidmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9pc09iamVjdCcpLFxuICAgIGlzU3ltYm9sID0gcmVxdWlyZSgnLi9pc1N5bWJvbCcpO1xuXG4vKiogVXNlZCBhcyByZWZlcmVuY2VzIGZvciB2YXJpb3VzIGBOdW1iZXJgIGNvbnN0YW50cy4gKi9cbnZhciBOQU4gPSAwIC8gMDtcblxuLyoqIFVzZWQgdG8gbWF0Y2ggbGVhZGluZyBhbmQgdHJhaWxpbmcgd2hpdGVzcGFjZS4gKi9cbnZhciByZVRyaW0gPSAvXlxccyt8XFxzKyQvZztcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IGJhZCBzaWduZWQgaGV4YWRlY2ltYWwgc3RyaW5nIHZhbHVlcy4gKi9cbnZhciByZUlzQmFkSGV4ID0gL15bLStdMHhbMC05YS1mXSskL2k7XG5cbi8qKiBVc2VkIHRvIGRldGVjdCBiaW5hcnkgc3RyaW5nIHZhbHVlcy4gKi9cbnZhciByZUlzQmluYXJ5ID0gL14wYlswMV0rJC9pO1xuXG4vKiogVXNlZCB0byBkZXRlY3Qgb2N0YWwgc3RyaW5nIHZhbHVlcy4gKi9cbnZhciByZUlzT2N0YWwgPSAvXjBvWzAtN10rJC9pO1xuXG4vKiogQnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMgd2l0aG91dCBhIGRlcGVuZGVuY3kgb24gYHJvb3RgLiAqL1xudmFyIGZyZWVQYXJzZUludCA9IHBhcnNlSW50O1xuXG4vKipcbiAqIENvbnZlcnRzIGB2YWx1ZWAgdG8gYSBudW1iZXIuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHByb2Nlc3MuXG4gKiBAcmV0dXJucyB7bnVtYmVyfSBSZXR1cm5zIHRoZSBudW1iZXIuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8udG9OdW1iZXIoMy4yKTtcbiAqIC8vID0+IDMuMlxuICpcbiAqIF8udG9OdW1iZXIoTnVtYmVyLk1JTl9WQUxVRSk7XG4gKiAvLyA9PiA1ZS0zMjRcbiAqXG4gKiBfLnRvTnVtYmVyKEluZmluaXR5KTtcbiAqIC8vID0+IEluZmluaXR5XG4gKlxuICogXy50b051bWJlcignMy4yJyk7XG4gKiAvLyA9PiAzLjJcbiAqL1xuZnVuY3Rpb24gdG9OdW1iZXIodmFsdWUpIHtcbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PSAnbnVtYmVyJykge1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuICBpZiAoaXNTeW1ib2wodmFsdWUpKSB7XG4gICAgcmV0dXJuIE5BTjtcbiAgfVxuICBpZiAoaXNPYmplY3QodmFsdWUpKSB7XG4gICAgdmFyIG90aGVyID0gdHlwZW9mIHZhbHVlLnZhbHVlT2YgPT0gJ2Z1bmN0aW9uJyA/IHZhbHVlLnZhbHVlT2YoKSA6IHZhbHVlO1xuICAgIHZhbHVlID0gaXNPYmplY3Qob3RoZXIpID8gKG90aGVyICsgJycpIDogb3RoZXI7XG4gIH1cbiAgaWYgKHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykge1xuICAgIHJldHVybiB2YWx1ZSA9PT0gMCA/IHZhbHVlIDogK3ZhbHVlO1xuICB9XG4gIHZhbHVlID0gdmFsdWUucmVwbGFjZShyZVRyaW0sICcnKTtcbiAgdmFyIGlzQmluYXJ5ID0gcmVJc0JpbmFyeS50ZXN0KHZhbHVlKTtcbiAgcmV0dXJuIChpc0JpbmFyeSB8fCByZUlzT2N0YWwudGVzdCh2YWx1ZSkpXG4gICAgPyBmcmVlUGFyc2VJbnQodmFsdWUuc2xpY2UoMiksIGlzQmluYXJ5ID8gMiA6IDgpXG4gICAgOiAocmVJc0JhZEhleC50ZXN0KHZhbHVlKSA/IE5BTiA6ICt2YWx1ZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gdG9OdW1iZXI7XG4iLCJjb25zdCBGb250RmFjZU9ic2VydmVyID0gcmVxdWlyZSgnZm9udGZhY2VvYnNlcnZlcicpO1xyXG5cclxuZnVuY3Rpb24gaW5pdEZvbnRPYnNlcnZlcnMoKSB7XHJcbiAgY29uc3QgVWJ1bnR1ID0gbmV3IEZvbnRGYWNlT2JzZXJ2ZXIoJ1VidW50dScpO1xyXG4gIGNvbnN0IFVidW50dUJvbGQgPSBuZXcgRm9udEZhY2VPYnNlcnZlcignVWJ1bnR1Jywge1xyXG4gICAgd2VpZ2h0OiA1MDBcclxuICB9KTtcclxuICBjb25zdCBVYnVudHVJdGFsaWMgPSBuZXcgRm9udEZhY2VPYnNlcnZlcignVWJ1bnR1Jywge1xyXG4gICAgc3R5bGU6ICdpdGFsaWMnXHJcbiAgfSk7XHJcbiAgY29uc3QgVWJ1bnR1TW9ubyA9IG5ldyBGb250RmFjZU9ic2VydmVyKCdVYnVudHUgTW9ubycpO1xyXG5cclxuICBjb25zdCB0aHJlc2hvbGQgPSAxNDAwO1xyXG4gIFByb21pc2UuYWxsKFtcclxuICAgIFVidW50dS5sb2FkKG51bGwsIHRocmVzaG9sZCksXHJcbiAgICBVYnVudHVCb2xkLmxvYWQobnVsbCwgdGhyZXNob2xkKSxcclxuICAgIFVidW50dUl0YWxpYy5sb2FkKG51bGwsIHRocmVzaG9sZCksXHJcbiAgICBVYnVudHVNb25vLmxvYWQobnVsbCwgdGhyZXNob2xkKVxyXG4gIF0pLnRoZW4oKCkgPT4geyBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoJ2ZvbnRzLWxvYWRlZCcpOyB9KVxyXG4gICAgLmNhdGNoKCgpID0+IHsgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKCdmb250cy1mYWlsZWQnKTsgfSlcclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBpbml0Rm9udE9ic2VydmVyczsiLCIoZnVuY3Rpb24oaSxzLG8sZyxyLGEsbSl7aVsnR29vZ2xlQW5hbHl0aWNzT2JqZWN0J109cjtpW3JdPWlbcl18fGZ1bmN0aW9uKCl7XHJcbihpW3JdLnE9aVtyXS5xfHxbXSkucHVzaChhcmd1bWVudHMpfSxpW3JdLmw9MSpuZXcgRGF0ZSgpO2E9cy5jcmVhdGVFbGVtZW50KG8pLFxyXG5tPXMuZ2V0RWxlbWVudHNCeVRhZ05hbWUobylbMF07YS5hc3luYz0xO2Euc3JjPWc7bS5wYXJlbnROb2RlLmluc2VydEJlZm9yZShhLG0pXHJcbn0pKHdpbmRvdyxkb2N1bWVudCwnc2NyaXB0JywnaHR0cHM6Ly93d3cuZ29vZ2xlLWFuYWx5dGljcy5jb20vYW5hbHl0aWNzLmpzJywnZ2EnKTtcclxuXHJcbmdhKCdjcmVhdGUnLCAnVUEtOTYzNzk0MTUtMicsICdhdXRvJyk7XHJcbmdhKCdzZW5kJywgJ3BhZ2V2aWV3Jyk7XHJcbiIsInJlcXVpcmUoJy4vZ2EnKTtcbmNvbnN0IGluaXRGb250T2JzZXJ2ZXJzID0gcmVxdWlyZSgnLi9mb250T2JzZXJ2ZXJzJyk7XG5jb25zdCBpbml0TW9kYWxTeXN0ZW0gPSByZXF1aXJlKCcuL21vZGFsJyk7XG5jb25zdCBpbml0U21vb3RoU2Nyb2xsID0gcmVxdWlyZSgnLi9zbW9vdGhTY3JvbGwnKTtcblxuaW5pdEZvbnRPYnNlcnZlcnMoKTtcbmluaXRNb2RhbFN5c3RlbSgpO1xuaW5pdFNtb290aFNjcm9sbCgpO1xuXG4vLyBCaXJ0aGRheSBjbGljayBlYXN0ZXIgZWdnXG5jb25zdCBpbmxpbmVDb2RlQmlydGhkYXkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW5saW5lLWNvZGUtYmlydGhkYXknKTtcbmlubGluZUNvZGVCaXJ0aGRheS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZUJpcnRoZGF5Q2xpY2spO1xuXG5mdW5jdGlvbiBoYW5kbGVCaXJ0aGRheUNsaWNrKCkge1xuICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICBjb25zdCB0b2RheVllYXIgPSBuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCk7XG4gIGNvbnN0IGJhYnlCb2lCaXJ0aGRheSA9IG5ldyBEYXRlKDIwMTYsIDksIDIwKS5nZXRGdWxsWWVhcigpO1xuICBldmVudC50YXJnZXQudGV4dENvbnRlbnQgPSBgJHt0b2RheVllYXIgLSBiYWJ5Qm9pQmlydGhkYXl9IHllYXJzYDtcbiAgZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUoJ2lubGluZS1jb2RlLS1pbnRlcmFjdGl2ZScpO1xuICBpbmxpbmVDb2RlQmlydGhkYXkucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoYW5kbGVCaXJ0aGRheUNsaWNrKTtcbn1cbiIsImZ1bmN0aW9uIGluaXRNb2RhbCgpIHtcclxuICBjb25zdCBtb2RhbE92ZXJsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwnKTtcclxuICBjb25zdCBtb2RhbFdyYXBwZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWxfX3dyYXBwZXInKTtcclxuICBjb25zdCBtb2RhbENsb3NlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsX19jbG9zZScpO1xyXG4gIGNvbnN0IG1vZGFsQ29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbF9fY29udGVudCcpO1xyXG4gIGNvbnN0IG1vZGFsTG9hZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsX19sb2FkZXInKTtcclxuXHJcbiAgY29uc3QgbWFpbk5hdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluLW5hdicpO1xyXG4gIGNvbnN0IHNjcm9sbFRvcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zY3JvbGwtdG9wJyk7XHJcblxyXG4gIGNvbnN0IGluZm9CdXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRhZy0taW5mbycpO1xyXG5cclxuICBjb25zdCBwcm9qZWN0c0ZvbGRlciA9ICcuL3Byb2plY3RzLyc7XHJcbiAgY29uc3QgZXJyb3JNZXNzYWdlID0gKGVycikgPT4gYFxyXG4gICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lciBmYWRlLWluXCI+XHJcbiAgICAgIDxoMT5XaG9vcHMhPC9oMT5cclxuICAgICAgPGgyPkVycm9yICR7ZXJyLnN0YXR1cyB8fCAnJ306ICR7ZXJyLnN0YXR1c1RleHQgfHwgJ1BsZWFzZSBjaGVjayB5b3VyIGludGVybmV0IGNvbm5lY3Rpb24nfTwvaDI+XHJcbiAgICAgIDxwPlxyXG4gICAgICAgIEl0IGhhcHBlbnMhIFBsZWFzZSB0cnkgYWdhaW4gbGF0ZXIuIEknZCBiZSB0aGFua2Z1bCBpZiB5b3UgY2FuIGxldCBtZSBrbm93IHRoaXMgaGFwcGVuZWQuXHJcbiAgICAgIDwvcD5cclxuICAgIDwvZGl2PlxyXG4gIGA7XHJcblxyXG4gIGZ1bmN0aW9uIG1vZGFsT24oZSkge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgbW9kYWxMb2FkZXIuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XHJcbiAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoJ21vZGFsLW9uJyk7XHJcbiAgICBtYWluTmF2LmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xyXG4gICAgc2Nyb2xsVG9wLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xyXG4gICAgbW9kYWxXcmFwcGVyLnNjcm9sbFRvcCA9IDA7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBtb2RhbE9mZihlKSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKCdtb2RhbC1vbicpO1xyXG4gICAgbWFpbk5hdi5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcclxuICAgIHNjcm9sbFRvcC5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcclxuICAgIG1vZGFsQ29udGVudC5pbm5lckhUTUwgPSAnJztcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGZldGNoUHJvamVjdChlKSB7XHJcbiAgICBjb25zdCBwcm9qZWN0TmFtZSA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0LnByb2plY3Q7XHJcbiAgICBjb25zdCBwcm9qZWN0ID0gZmV0Y2goYCR7cHJvamVjdHNGb2xkZXJ9JHtwcm9qZWN0TmFtZX0uaHRtbGApO1xyXG5cclxuICAgIG1vZGFsT24oZSk7XHJcblxyXG4gICAgcHJvamVjdC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLm9rID8gcmVzcG9uc2UgOiBQcm9taXNlLnJlamVjdChyZXNwb25zZSkpXHJcbiAgICAgIC50aGVuKGRhdGEgPT4gZGF0YS50ZXh0KCkpXHJcbiAgICAgIC50aGVuKGh0bWwgPT4geyBtb2RhbENvbnRlbnQuaW5uZXJIVE1MID0gaHRtbDsgfSlcclxuICAgICAgLnRoZW4ocHJlcGFyZU1vZGFsTWVkaWEpXHJcbiAgICAgIC5jYXRjaChlcnIgPT4geyBtb2RhbENvbnRlbnQuaW5uZXJIVE1MID0gZXJyb3JNZXNzYWdlKGVycik7IGNvbnNvbGUuZXJyb3IoZXJyKTsgfSlcclxuICAgICAgLnRoZW4oKCkgPT4geyBtb2RhbExvYWRlci5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKSB9KVxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gcHJlcGFyZU1vZGFsTWVkaWEoKSB7XHJcbiAgICBjb25zdCBtZWRpYSA9IG1vZGFsQ29udGVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWxfX21lZGlhJyk7XHJcbiAgICBjb25zdCBtZWRpYUxpbmsgPSBtb2RhbENvbnRlbnQucXVlcnlTZWxlY3RvcignLm1vZGFsX19tZWRpYS1saW5rJyk7XHJcbiAgICBpZiAoIW1lZGlhKSByZXR1cm47XHJcblxyXG4gICAgY29uc3QgbG9hZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBsb2FkZXIuY2xhc3NOYW1lID0gJ21vZGFsX19sb2FkZXIgbW9kYWxfX2xvYWRlci0taW1hZ2UgZmFkZS1pbic7XHJcbiAgICBsb2FkZXIuaW5uZXJIVE1MID0gYFxyXG4gICAgICA8c3BhbiBjbGFzcz1cImljb24gaWNvbi1pbWFnZVwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvc3Bhbj5cclxuICAgIDxkaXYgY2xhc3M9XCJzci1vbmx5XCI+TG9hZGluZyBjb250ZW50Li4uPC9kaXY+YDtcclxuXHJcbiAgICBtZWRpYUxpbmsucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUobG9hZGVyLCBtZWRpYUxpbmspO1xyXG4gICAgbGV0IG1lZGlhRXZlbnQgPSBtZWRpYS5ub2RlTmFtZSA9PT0gJ1ZJREVPJyA/ICdvbmNhbnBsYXknIDogJ29ubG9hZCc7XHJcbiAgICBtZWRpYVttZWRpYUV2ZW50XSA9ICgpID0+IHtcclxuICAgICAgbWVkaWFMaW5rLmNsYXNzTGlzdC5hZGQoJ2ZhZGUtaW4tcmlnaHRAbGFuZHNjYXBlJyk7XHJcbiAgICAgIG1lZGlhTGluay5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcclxuICAgICAgbG9hZGVyLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaW5mb0J1dHRvbnMuZm9yRWFjaChidG4gPT4gYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZmV0Y2hQcm9qZWN0KSk7XHJcbiAgbW9kYWxDbG9zZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG1vZGFsT2ZmLCBmYWxzZSk7XHJcblxyXG4gIG1vZGFsT3ZlcmxheS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgaWYgKGUudGFyZ2V0ID09PSBtb2RhbE92ZXJsYXkpIHsgbW9kYWxPZmYoZSk7IH1cclxuICB9KTtcclxuXHJcbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCAoZSkgPT4ge1xyXG4gICAgaWYgKGUua2V5Q29kZSA9PT0gMjcpIHsgbW9kYWxPZmYoZSk7IH1cclxuICB9KTtcclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBpbml0TW9kYWw7IiwicmVxdWlyZSgnZ3NhcC9TY3JvbGxUb1BsdWdpbicpO1xyXG5jb25zdCBUd2VlbkxpdGUgPSByZXF1aXJlKCdnc2FwL1R3ZWVuTGl0ZScpO1xyXG5jb25zdCBkZWJvdW5jZSA9IHJlcXVpcmUoJ2xvZGFzaC9kZWJvdW5jZScpO1xyXG5cclxuLy8gTWFpbiBuYXZcclxuY29uc3QgbWFpbk5hdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWluLW5hdicpO1xyXG5sZXQgbWFpbk5hdk9mZnNldCA9IG1haW5OYXYub2Zmc2V0VG9wO1xyXG5cclxuZnVuY3Rpb24gaW5pdFNtb290aFNjcm9sbCgpIHtcclxuICBjb25zdCBEVVJBVElPTiA9IDEuMTtcclxuICBjb25zdCBsaW5rcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2FbaHJlZl49XCIjXCJdJyk7XHJcblxyXG4gIGxpbmtzLmZvckVhY2goKGxpbmspID0+IHtcclxuICAgIGxpbmsuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICBjb25zdCBoYXNoID0gbGluay5nZXRBdHRyaWJ1dGUoJ2hyZWYnKTtcclxuICAgICAgaWYgKGhhc2ggPT09ICcjJykge1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgY29uc3QgdGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihoYXNoKTtcclxuICAgICAgaWYgKCF0YXJnZXQpIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGNvbnN0IG1haW5OYXZIZWlnaHQgPSBtYWluTmF2LmNsaWVudEhlaWdodDtcclxuICAgICAgY29uc3QgbWFpbk5hdk9mZnNldCA9IG1haW5OYXYub2Zmc2V0VG9wO1xyXG4gICAgICBjb25zdCB0YXJnZXRPZmZzZXQgPSB0YXJnZXQub2Zmc2V0VG9wID4gbWFpbk5hdk9mZnNldFxyXG4gICAgICAgID8gdGFyZ2V0Lm9mZnNldFRvcCAtIG1haW5OYXZIZWlnaHRcclxuICAgICAgICA6IHRhcmdldC5vZmZzZXRUb3A7XHJcblxyXG4gICAgICBUd2VlbkxpdGUudG8od2luZG93LCBEVVJBVElPTiwge1xyXG4gICAgICAgIHNjcm9sbFRvOiB0YXJnZXRPZmZzZXQsXHJcbiAgICAgICAgZWFzZTogJ1Bvd2VyMi5lYXNlSW5PdXQnXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9KTtcclxuICB9KTtcclxufVxyXG5cclxuLy8gQ2FsY3VsYXRlIHNwYWNlIGZvciBmb290ZXJcclxuZnVuY3Rpb24gc3BhY2VGb3JGb290ZXIoKSB7XHJcbiAgY29uc3QgZm9vdGVySGVpZ2h0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Zvb3RlcicpLmNsaWVudEhlaWdodFxyXG4gIGRvY3VtZW50LmJvZHkuc3R5bGUubWFyZ2luQm90dG9tID0gYCR7Zm9vdGVySGVpZ2h0fXB4YDtcclxufVxyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIHNwYWNlRm9yRm9vdGVyKTtcclxuXHJcbi8vIEF0dGFjaGluZyBtYWluIG5hdlxyXG5mdW5jdGlvbiBzY3JvbGxQYXN0TmF2KCkge1xyXG4gIGNvbnN0IGlzUGFzdE5hdiA9IHdpbmRvdy5zY3JvbGxZID49IG1haW5OYXZPZmZzZXQ7XHJcbiAgY29uc3QgYm9keUhhc0NsYXNzID0gZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuY29udGFpbnMoJ3Njcm9sbC1wYXN0LW5hdicpO1xyXG4gIGlmIChpc1Bhc3ROYXYgJiYgIWJvZHlIYXNDbGFzcykge1xyXG4gICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKCdzY3JvbGwtcGFzdC1uYXYnKTtcclxuICAgIGRvY3VtZW50LmJvZHkuc3R5bGUucGFkZGluZ1RvcCA9IGAke21haW5OYXYub2Zmc2V0SGVpZ2h0fXB4YDtcclxuICB9IGVsc2UgaWYgKCFpc1Bhc3ROYXYgJiYgYm9keUhhc0NsYXNzKSB7XHJcbiAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoJ3Njcm9sbC1wYXN0LW5hdicpO1xyXG4gICAgZG9jdW1lbnQuYm9keS5zdHlsZS5wYWRkaW5nVG9wID0gMDtcclxuICB9XHJcbn1cclxuc2Nyb2xsUGFzdE5hdigpO1xyXG5cclxuLy8gU2Nyb2xsIGhhbmRsZXJcclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgc2Nyb2xsUGFzdE5hdik7XHJcblxyXG4vLyBSZXNpemUgaGFuZGxlclxyXG5jb25zdCByZXNpemVIYW5kbGVyID0gZGVib3VuY2UoKCkgPT4ge1xyXG4gIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnc2Nyb2xsLXBhc3QtbmF2Jyk7XHJcbiAgZG9jdW1lbnQuYm9keS5zdHlsZS5wYWRkaW5nVG9wID0gMDtcclxuICBtYWluTmF2T2Zmc2V0ID0gbWFpbk5hdi5vZmZzZXRUb3A7XHJcbiAgc2Nyb2xsUGFzdE5hdigpO1xyXG4gIHNwYWNlRm9yRm9vdGVyKCk7XHJcbn0sIDEwMCk7XHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCByZXNpemVIYW5kbGVyKTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gaW5pdFNtb290aFNjcm9sbDsiXX0=
