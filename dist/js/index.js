(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/math/sign"), __esModule: true };
},{"core-js/library/fn/math/sign":13}],2:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/object/create"), __esModule: true };
},{"core-js/library/fn/object/create":14}],3:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/object/define-property"), __esModule: true };
},{"core-js/library/fn/object/define-property":15}],4:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/object/get-prototype-of"), __esModule: true };
},{"core-js/library/fn/object/get-prototype-of":16}],5:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/object/set-prototype-of"), __esModule: true };
},{"core-js/library/fn/object/set-prototype-of":17}],6:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/symbol"), __esModule: true };
},{"core-js/library/fn/symbol":18}],7:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/symbol/iterator"), __esModule: true };
},{"core-js/library/fn/symbol/iterator":19}],8:[function(require,module,exports){
"use strict";

exports.__esModule = true;

exports.default = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};
},{}],9:[function(require,module,exports){
"use strict";

exports.__esModule = true;

var _defineProperty = require("../core-js/object/define-property");

var _defineProperty2 = _interopRequireDefault(_defineProperty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      (0, _defineProperty2.default)(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();
},{"../core-js/object/define-property":3}],10:[function(require,module,exports){
"use strict";

exports.__esModule = true;

var _setPrototypeOf = require("../core-js/object/set-prototype-of");

var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);

var _create = require("../core-js/object/create");

var _create2 = _interopRequireDefault(_create);

var _typeof2 = require("../helpers/typeof");

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : (0, _typeof3.default)(superClass)));
  }

  subClass.prototype = (0, _create2.default)(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf2.default ? (0, _setPrototypeOf2.default)(subClass, superClass) : subClass.__proto__ = superClass;
};
},{"../core-js/object/create":2,"../core-js/object/set-prototype-of":5,"../helpers/typeof":12}],11:[function(require,module,exports){
"use strict";

exports.__esModule = true;

var _typeof2 = require("../helpers/typeof");

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && ((typeof call === "undefined" ? "undefined" : (0, _typeof3.default)(call)) === "object" || typeof call === "function") ? call : self;
};
},{"../helpers/typeof":12}],12:[function(require,module,exports){
"use strict";

exports.__esModule = true;

var _iterator = require("../core-js/symbol/iterator");

var _iterator2 = _interopRequireDefault(_iterator);

var _symbol = require("../core-js/symbol");

var _symbol2 = _interopRequireDefault(_symbol);

var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
} : function (obj) {
  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
};
},{"../core-js/symbol":6,"../core-js/symbol/iterator":7}],13:[function(require,module,exports){
require('../../modules/es6.math.sign');
module.exports = require('../../modules/_core').Math.sign;

},{"../../modules/_core":25,"../../modules/es6.math.sign":79}],14:[function(require,module,exports){
require('../../modules/es6.object.create');
var $Object = require('../../modules/_core').Object;
module.exports = function create(P, D) {
  return $Object.create(P, D);
};

},{"../../modules/_core":25,"../../modules/es6.object.create":80}],15:[function(require,module,exports){
require('../../modules/es6.object.define-property');
var $Object = require('../../modules/_core').Object;
module.exports = function defineProperty(it, key, desc) {
  return $Object.defineProperty(it, key, desc);
};

},{"../../modules/_core":25,"../../modules/es6.object.define-property":81}],16:[function(require,module,exports){
require('../../modules/es6.object.get-prototype-of');
module.exports = require('../../modules/_core').Object.getPrototypeOf;

},{"../../modules/_core":25,"../../modules/es6.object.get-prototype-of":82}],17:[function(require,module,exports){
require('../../modules/es6.object.set-prototype-of');
module.exports = require('../../modules/_core').Object.setPrototypeOf;

},{"../../modules/_core":25,"../../modules/es6.object.set-prototype-of":83}],18:[function(require,module,exports){
require('../../modules/es6.symbol');
require('../../modules/es6.object.to-string');
require('../../modules/es7.symbol.async-iterator');
require('../../modules/es7.symbol.observable');
module.exports = require('../../modules/_core').Symbol;

},{"../../modules/_core":25,"../../modules/es6.object.to-string":84,"../../modules/es6.symbol":86,"../../modules/es7.symbol.async-iterator":87,"../../modules/es7.symbol.observable":88}],19:[function(require,module,exports){
require('../../modules/es6.string.iterator');
require('../../modules/web.dom.iterable');
module.exports = require('../../modules/_wks-ext').f('iterator');

},{"../../modules/_wks-ext":76,"../../modules/es6.string.iterator":85,"../../modules/web.dom.iterable":89}],20:[function(require,module,exports){
module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};

},{}],21:[function(require,module,exports){
module.exports = function () { /* empty */ };

},{}],22:[function(require,module,exports){
var isObject = require('./_is-object');
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};

},{"./_is-object":41}],23:[function(require,module,exports){
// false -> Array#indexOf
// true  -> Array#includes
var toIObject = require('./_to-iobject');
var toLength = require('./_to-length');
var toAbsoluteIndex = require('./_to-absolute-index');
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};

},{"./_to-absolute-index":68,"./_to-iobject":70,"./_to-length":71}],24:[function(require,module,exports){
var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};

},{}],25:[function(require,module,exports){
var core = module.exports = { version: '2.5.1' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef

},{}],26:[function(require,module,exports){
// optional / simple context binding
var aFunction = require('./_a-function');
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};

},{"./_a-function":20}],27:[function(require,module,exports){
// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};

},{}],28:[function(require,module,exports){
// Thank's IE8 for his funny defineProperty
module.exports = !require('./_fails')(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});

},{"./_fails":33}],29:[function(require,module,exports){
var isObject = require('./_is-object');
var document = require('./_global').document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};

},{"./_global":34,"./_is-object":41}],30:[function(require,module,exports){
// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');

},{}],31:[function(require,module,exports){
// all enumerable object keys, includes symbols
var getKeys = require('./_object-keys');
var gOPS = require('./_object-gops');
var pIE = require('./_object-pie');
module.exports = function (it) {
  var result = getKeys(it);
  var getSymbols = gOPS.f;
  if (getSymbols) {
    var symbols = getSymbols(it);
    var isEnum = pIE.f;
    var i = 0;
    var key;
    while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);
  } return result;
};

},{"./_object-gops":55,"./_object-keys":58,"./_object-pie":59}],32:[function(require,module,exports){
var global = require('./_global');
var core = require('./_core');
var ctx = require('./_ctx');
var hide = require('./_hide');
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var IS_WRAP = type & $export.W;
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE];
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
  var key, own, out;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if (own && key in exports) continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function (C) {
      var F = function (a, b, c) {
        if (this instanceof C) {
          switch (arguments.length) {
            case 0: return new C();
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if (IS_PROTO) {
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;

},{"./_core":25,"./_ctx":26,"./_global":34,"./_hide":36}],33:[function(require,module,exports){
module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};

},{}],34:[function(require,module,exports){
// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef

},{}],35:[function(require,module,exports){
var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};

},{}],36:[function(require,module,exports){
var dP = require('./_object-dp');
var createDesc = require('./_property-desc');
module.exports = require('./_descriptors') ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};

},{"./_descriptors":28,"./_object-dp":50,"./_property-desc":61}],37:[function(require,module,exports){
var document = require('./_global').document;
module.exports = document && document.documentElement;

},{"./_global":34}],38:[function(require,module,exports){
module.exports = !require('./_descriptors') && !require('./_fails')(function () {
  return Object.defineProperty(require('./_dom-create')('div'), 'a', { get: function () { return 7; } }).a != 7;
});

},{"./_descriptors":28,"./_dom-create":29,"./_fails":33}],39:[function(require,module,exports){
// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = require('./_cof');
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};

},{"./_cof":24}],40:[function(require,module,exports){
// 7.2.2 IsArray(argument)
var cof = require('./_cof');
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};

},{"./_cof":24}],41:[function(require,module,exports){
module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};

},{}],42:[function(require,module,exports){
'use strict';
var create = require('./_object-create');
var descriptor = require('./_property-desc');
var setToStringTag = require('./_set-to-string-tag');
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
require('./_hide')(IteratorPrototype, require('./_wks')('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};

},{"./_hide":36,"./_object-create":49,"./_property-desc":61,"./_set-to-string-tag":64,"./_wks":77}],43:[function(require,module,exports){
'use strict';
var LIBRARY = require('./_library');
var $export = require('./_export');
var redefine = require('./_redefine');
var hide = require('./_hide');
var has = require('./_has');
var Iterators = require('./_iterators');
var $iterCreate = require('./_iter-create');
var setToStringTag = require('./_set-to-string-tag');
var getPrototypeOf = require('./_object-gpo');
var ITERATOR = require('./_wks')('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && !has(IteratorPrototype, ITERATOR)) hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};

},{"./_export":32,"./_has":35,"./_hide":36,"./_iter-create":42,"./_iterators":45,"./_library":46,"./_object-gpo":56,"./_redefine":62,"./_set-to-string-tag":64,"./_wks":77}],44:[function(require,module,exports){
module.exports = function (done, value) {
  return { value: value, done: !!done };
};

},{}],45:[function(require,module,exports){
module.exports = {};

},{}],46:[function(require,module,exports){
module.exports = true;

},{}],47:[function(require,module,exports){
// 20.2.2.28 Math.sign(x)
module.exports = Math.sign || function sign(x) {
  // eslint-disable-next-line no-self-compare
  return (x = +x) == 0 || x != x ? x : x < 0 ? -1 : 1;
};

},{}],48:[function(require,module,exports){
var META = require('./_uid')('meta');
var isObject = require('./_is-object');
var has = require('./_has');
var setDesc = require('./_object-dp').f;
var id = 0;
var isExtensible = Object.isExtensible || function () {
  return true;
};
var FREEZE = !require('./_fails')(function () {
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function (it) {
  setDesc(it, META, { value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  } });
};
var fastKey = function (it, create) {
  // return primitive with prefix
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function (it, create) {
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY: META,
  NEED: false,
  fastKey: fastKey,
  getWeak: getWeak,
  onFreeze: onFreeze
};

},{"./_fails":33,"./_has":35,"./_is-object":41,"./_object-dp":50,"./_uid":74}],49:[function(require,module,exports){
// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = require('./_an-object');
var dPs = require('./_object-dps');
var enumBugKeys = require('./_enum-bug-keys');
var IE_PROTO = require('./_shared-key')('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = require('./_dom-create')('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  require('./_html').appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};

},{"./_an-object":22,"./_dom-create":29,"./_enum-bug-keys":30,"./_html":37,"./_object-dps":51,"./_shared-key":65}],50:[function(require,module,exports){
var anObject = require('./_an-object');
var IE8_DOM_DEFINE = require('./_ie8-dom-define');
var toPrimitive = require('./_to-primitive');
var dP = Object.defineProperty;

exports.f = require('./_descriptors') ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};

},{"./_an-object":22,"./_descriptors":28,"./_ie8-dom-define":38,"./_to-primitive":73}],51:[function(require,module,exports){
var dP = require('./_object-dp');
var anObject = require('./_an-object');
var getKeys = require('./_object-keys');

module.exports = require('./_descriptors') ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};

},{"./_an-object":22,"./_descriptors":28,"./_object-dp":50,"./_object-keys":58}],52:[function(require,module,exports){
var pIE = require('./_object-pie');
var createDesc = require('./_property-desc');
var toIObject = require('./_to-iobject');
var toPrimitive = require('./_to-primitive');
var has = require('./_has');
var IE8_DOM_DEFINE = require('./_ie8-dom-define');
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = require('./_descriptors') ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};

},{"./_descriptors":28,"./_has":35,"./_ie8-dom-define":38,"./_object-pie":59,"./_property-desc":61,"./_to-iobject":70,"./_to-primitive":73}],53:[function(require,module,exports){
// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = require('./_to-iobject');
var gOPN = require('./_object-gopn').f;
var toString = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return gOPN(it);
  } catch (e) {
    return windowNames.slice();
  }
};

module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
};

},{"./_object-gopn":54,"./_to-iobject":70}],54:[function(require,module,exports){
// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = require('./_object-keys-internal');
var hiddenKeys = require('./_enum-bug-keys').concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};

},{"./_enum-bug-keys":30,"./_object-keys-internal":57}],55:[function(require,module,exports){
exports.f = Object.getOwnPropertySymbols;

},{}],56:[function(require,module,exports){
// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = require('./_has');
var toObject = require('./_to-object');
var IE_PROTO = require('./_shared-key')('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};

},{"./_has":35,"./_shared-key":65,"./_to-object":72}],57:[function(require,module,exports){
var has = require('./_has');
var toIObject = require('./_to-iobject');
var arrayIndexOf = require('./_array-includes')(false);
var IE_PROTO = require('./_shared-key')('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};

},{"./_array-includes":23,"./_has":35,"./_shared-key":65,"./_to-iobject":70}],58:[function(require,module,exports){
// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = require('./_object-keys-internal');
var enumBugKeys = require('./_enum-bug-keys');

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};

},{"./_enum-bug-keys":30,"./_object-keys-internal":57}],59:[function(require,module,exports){
exports.f = {}.propertyIsEnumerable;

},{}],60:[function(require,module,exports){
// most Object methods by ES6 should accept primitives
var $export = require('./_export');
var core = require('./_core');
var fails = require('./_fails');
module.exports = function (KEY, exec) {
  var fn = (core.Object || {})[KEY] || Object[KEY];
  var exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function () { fn(1); }), 'Object', exp);
};

},{"./_core":25,"./_export":32,"./_fails":33}],61:[function(require,module,exports){
module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};

},{}],62:[function(require,module,exports){
module.exports = require('./_hide');

},{"./_hide":36}],63:[function(require,module,exports){
// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
var isObject = require('./_is-object');
var anObject = require('./_an-object');
var check = function (O, proto) {
  anObject(O);
  if (!isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
};
module.exports = {
  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
    function (test, buggy, set) {
      try {
        set = require('./_ctx')(Function.call, require('./_object-gopd').f(Object.prototype, '__proto__').set, 2);
        set(test, []);
        buggy = !(test instanceof Array);
      } catch (e) { buggy = true; }
      return function setPrototypeOf(O, proto) {
        check(O, proto);
        if (buggy) O.__proto__ = proto;
        else set(O, proto);
        return O;
      };
    }({}, false) : undefined),
  check: check
};

},{"./_an-object":22,"./_ctx":26,"./_is-object":41,"./_object-gopd":52}],64:[function(require,module,exports){
var def = require('./_object-dp').f;
var has = require('./_has');
var TAG = require('./_wks')('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};

},{"./_has":35,"./_object-dp":50,"./_wks":77}],65:[function(require,module,exports){
var shared = require('./_shared')('keys');
var uid = require('./_uid');
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};

},{"./_shared":66,"./_uid":74}],66:[function(require,module,exports){
var global = require('./_global');
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});
module.exports = function (key) {
  return store[key] || (store[key] = {});
};

},{"./_global":34}],67:[function(require,module,exports){
var toInteger = require('./_to-integer');
var defined = require('./_defined');
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};

},{"./_defined":27,"./_to-integer":69}],68:[function(require,module,exports){
var toInteger = require('./_to-integer');
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};

},{"./_to-integer":69}],69:[function(require,module,exports){
// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};

},{}],70:[function(require,module,exports){
// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = require('./_iobject');
var defined = require('./_defined');
module.exports = function (it) {
  return IObject(defined(it));
};

},{"./_defined":27,"./_iobject":39}],71:[function(require,module,exports){
// 7.1.15 ToLength
var toInteger = require('./_to-integer');
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};

},{"./_to-integer":69}],72:[function(require,module,exports){
// 7.1.13 ToObject(argument)
var defined = require('./_defined');
module.exports = function (it) {
  return Object(defined(it));
};

},{"./_defined":27}],73:[function(require,module,exports){
// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = require('./_is-object');
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};

},{"./_is-object":41}],74:[function(require,module,exports){
var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};

},{}],75:[function(require,module,exports){
var global = require('./_global');
var core = require('./_core');
var LIBRARY = require('./_library');
var wksExt = require('./_wks-ext');
var defineProperty = require('./_object-dp').f;
module.exports = function (name) {
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
};

},{"./_core":25,"./_global":34,"./_library":46,"./_object-dp":50,"./_wks-ext":76}],76:[function(require,module,exports){
exports.f = require('./_wks');

},{"./_wks":77}],77:[function(require,module,exports){
var store = require('./_shared')('wks');
var uid = require('./_uid');
var Symbol = require('./_global').Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;

},{"./_global":34,"./_shared":66,"./_uid":74}],78:[function(require,module,exports){
'use strict';
var addToUnscopables = require('./_add-to-unscopables');
var step = require('./_iter-step');
var Iterators = require('./_iterators');
var toIObject = require('./_to-iobject');

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = require('./_iter-define')(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');

},{"./_add-to-unscopables":21,"./_iter-define":43,"./_iter-step":44,"./_iterators":45,"./_to-iobject":70}],79:[function(require,module,exports){
// 20.2.2.28 Math.sign(x)
var $export = require('./_export');

$export($export.S, 'Math', { sign: require('./_math-sign') });

},{"./_export":32,"./_math-sign":47}],80:[function(require,module,exports){
var $export = require('./_export');
// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
$export($export.S, 'Object', { create: require('./_object-create') });

},{"./_export":32,"./_object-create":49}],81:[function(require,module,exports){
var $export = require('./_export');
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !require('./_descriptors'), 'Object', { defineProperty: require('./_object-dp').f });

},{"./_descriptors":28,"./_export":32,"./_object-dp":50}],82:[function(require,module,exports){
// 19.1.2.9 Object.getPrototypeOf(O)
var toObject = require('./_to-object');
var $getPrototypeOf = require('./_object-gpo');

require('./_object-sap')('getPrototypeOf', function () {
  return function getPrototypeOf(it) {
    return $getPrototypeOf(toObject(it));
  };
});

},{"./_object-gpo":56,"./_object-sap":60,"./_to-object":72}],83:[function(require,module,exports){
// 19.1.3.19 Object.setPrototypeOf(O, proto)
var $export = require('./_export');
$export($export.S, 'Object', { setPrototypeOf: require('./_set-proto').set });

},{"./_export":32,"./_set-proto":63}],84:[function(require,module,exports){

},{}],85:[function(require,module,exports){
'use strict';
var $at = require('./_string-at')(true);

// 21.1.3.27 String.prototype[@@iterator]()
require('./_iter-define')(String, 'String', function (iterated) {
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length) return { value: undefined, done: true };
  point = $at(O, index);
  this._i += point.length;
  return { value: point, done: false };
});

},{"./_iter-define":43,"./_string-at":67}],86:[function(require,module,exports){
'use strict';
// ECMAScript 6 symbols shim
var global = require('./_global');
var has = require('./_has');
var DESCRIPTORS = require('./_descriptors');
var $export = require('./_export');
var redefine = require('./_redefine');
var META = require('./_meta').KEY;
var $fails = require('./_fails');
var shared = require('./_shared');
var setToStringTag = require('./_set-to-string-tag');
var uid = require('./_uid');
var wks = require('./_wks');
var wksExt = require('./_wks-ext');
var wksDefine = require('./_wks-define');
var enumKeys = require('./_enum-keys');
var isArray = require('./_is-array');
var anObject = require('./_an-object');
var toIObject = require('./_to-iobject');
var toPrimitive = require('./_to-primitive');
var createDesc = require('./_property-desc');
var _create = require('./_object-create');
var gOPNExt = require('./_object-gopn-ext');
var $GOPD = require('./_object-gopd');
var $DP = require('./_object-dp');
var $keys = require('./_object-keys');
var gOPD = $GOPD.f;
var dP = $DP.f;
var gOPN = gOPNExt.f;
var $Symbol = global.Symbol;
var $JSON = global.JSON;
var _stringify = $JSON && $JSON.stringify;
var PROTOTYPE = 'prototype';
var HIDDEN = wks('_hidden');
var TO_PRIMITIVE = wks('toPrimitive');
var isEnum = {}.propertyIsEnumerable;
var SymbolRegistry = shared('symbol-registry');
var AllSymbols = shared('symbols');
var OPSymbols = shared('op-symbols');
var ObjectProto = Object[PROTOTYPE];
var USE_NATIVE = typeof $Symbol == 'function';
var QObject = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = DESCRIPTORS && $fails(function () {
  return _create(dP({}, 'a', {
    get: function () { return dP(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (it, key, D) {
  var protoDesc = gOPD(ObjectProto, key);
  if (protoDesc) delete ObjectProto[key];
  dP(it, key, D);
  if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);
} : dP;

var wrap = function (tag) {
  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D) {
  if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
  anObject(it);
  key = toPrimitive(key, true);
  anObject(D);
  if (has(AllSymbols, key)) {
    if (!D.enumerable) {
      if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
      D = _create(D, { enumerable: createDesc(0, false) });
    } return setSymbolDesc(it, key, D);
  } return dP(it, key, D);
};
var $defineProperties = function defineProperties(it, P) {
  anObject(it);
  var keys = enumKeys(P = toIObject(P));
  var i = 0;
  var l = keys.length;
  var key;
  while (l > i) $defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P) {
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key) {
  var E = isEnum.call(this, key = toPrimitive(key, true));
  if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
  it = toIObject(it);
  key = toPrimitive(key, true);
  if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;
  var D = gOPD(it, key);
  if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it) {
  var names = gOPN(toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
  } return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
  var IS_OP = it === ObjectProto;
  var names = gOPN(IS_OP ? OPSymbols : toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
  } return result;
};

// 19.4.1.1 Symbol([description])
if (!USE_NATIVE) {
  $Symbol = function Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function (value) {
      if (this === ObjectProto) $set.call(OPSymbols, value);
      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    };
    if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });
    return wrap(tag);
  };
  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
    return this._k;
  });

  $GOPD.f = $getOwnPropertyDescriptor;
  $DP.f = $defineProperty;
  require('./_object-gopn').f = gOPNExt.f = $getOwnPropertyNames;
  require('./_object-pie').f = $propertyIsEnumerable;
  require('./_object-gops').f = $getOwnPropertySymbols;

  if (DESCRIPTORS && !require('./_library')) {
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  wksExt.f = function (name) {
    return wrap(wks(name));
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Symbol: $Symbol });

for (var es6Symbols = (
  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
).split(','), j = 0; es6Symbols.length > j;)wks(es6Symbols[j++]);

for (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;) wksDefine(wellKnownSymbols[k++]);

$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function (key) {
    return has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');
    for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;
  },
  useSetter: function () { setter = true; },
  useSimple: function () { setter = false; }
});

$export($export.S + $export.F * !USE_NATIVE, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it) {
    if (it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
    var args = [it];
    var i = 1;
    var replacer, $replacer;
    while (arguments.length > i) args.push(arguments[i++]);
    replacer = args[1];
    if (typeof replacer == 'function') $replacer = replacer;
    if ($replacer || !isArray(replacer)) replacer = function (key, value) {
      if ($replacer) value = $replacer.call(this, key, value);
      if (!isSymbol(value)) return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE][TO_PRIMITIVE] || require('./_hide')($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);

},{"./_an-object":22,"./_descriptors":28,"./_enum-keys":31,"./_export":32,"./_fails":33,"./_global":34,"./_has":35,"./_hide":36,"./_is-array":40,"./_library":46,"./_meta":48,"./_object-create":49,"./_object-dp":50,"./_object-gopd":52,"./_object-gopn":54,"./_object-gopn-ext":53,"./_object-gops":55,"./_object-keys":58,"./_object-pie":59,"./_property-desc":61,"./_redefine":62,"./_set-to-string-tag":64,"./_shared":66,"./_to-iobject":70,"./_to-primitive":73,"./_uid":74,"./_wks":77,"./_wks-define":75,"./_wks-ext":76}],87:[function(require,module,exports){
require('./_wks-define')('asyncIterator');

},{"./_wks-define":75}],88:[function(require,module,exports){
require('./_wks-define')('observable');

},{"./_wks-define":75}],89:[function(require,module,exports){
require('./es6.array.iterator');
var global = require('./_global');
var hide = require('./_hide');
var Iterators = require('./_iterators');
var TO_STRING_TAG = require('./_wks')('toStringTag');

var DOMIterables = ('CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,' +
  'DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,' +
  'MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,' +
  'SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,' +
  'TextTrackList,TouchList').split(',');

for (var i = 0; i < DOMIterables.length; i++) {
  var NAME = DOMIterables[i];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  if (proto && !proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
  Iterators[NAME] = Iterators.Array;
}

},{"./_global":34,"./_hide":36,"./_iterators":45,"./_wks":77,"./es6.array.iterator":78}],90:[function(require,module,exports){
'use strict';

var _config = require('./phaser/config');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var game = new Phaser.Game(_config2.default);

},{"./phaser/config":96}],91:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _classCallCheck2 = require('D:\\www\\bees\\node_modules\\babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('D:\\www\\bees\\node_modules\\babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Elevator = function () {
    function Elevator(scene) {
        (0, _classCallCheck3.default)(this, Elevator);

        this.scene = scene;
        this.mapKey = 'elevator';
        this.map = this.scene.add.tilemap(this.mapKey);
        this.tileset = this.map.addTilesetImage('platformerPack_industrial_tilesheet', 'tiles');
        this.state = Elevator.STATE.iddle;
        this.width = this.map.widthInPixels;
        this.height = this.map.heightInPixels;
        this.x = 0;
        this.y = 0;
        this.create();
    }

    (0, _createClass3.default)(Elevator, [{
        key: 'create',
        value: function create() {
            this.createFloor();
            this.createBackground();
            this.createDecoration();
            this.createSensor();
        }
    }, {
        key: 'createBackground',
        value: function createBackground() {
            this.backgroundLayer = this.map.createDynamicLayer(Elevator.BACKGROUND, this.tileset, this.x, this.y);
        }
    }, {
        key: 'createFloor',
        value: function createFloor() {
            this.floorLayer = this.map.createDynamicLayer(Elevator.FLOOR, this.tileset, this.x, this.y);
            this.floorLayer.setCollisionByExclusion([-1], true);
            this.scene.physics.add.collider(this.scene.player.entity, this.floorLayer);
        }
    }, {
        key: 'createDecoration',
        value: function createDecoration() {
            this.decorationLayer = this.map.createDynamicLayer(Elevator.DECORATION, this.tileset, this.x, this.y);
        }
    }, {
        key: 'createSensor',
        value: function createSensor() {
            var _this = this;

            var sensorLayer = this.map.getObjectLayer(Elevator.SENSOR);
            sensorLayer.objects.map(function (sensor) {
                var x = _this.x + sensor.x;
                var y = _this.y + sensor.y;
                _this.sensor = new Phaser.Geom.Rectangle(x, y, sensor.width, sensor.height);
            });
        }
    }, {
        key: 'update',
        value: function update() {
            if (this.sensor) {
                this.checkSensor();
            }
        }
    }, {
        key: 'checkSensor',
        value: function checkSensor() {
            var intersectSensor = Phaser.Geom.Intersects.RectangleToRectangle(this.sensor, this.scene.player.entity.body);
            if (!intersectSensor) {
                return;
            }
            if (this.scene.cursors.down.isDown && this.state === Elevator.STATE.iddle) {
                this.down();
            }
            if (this.scene.cursors.up.isDown && this.state === Elevator.STATE.iddle) {
                this.up();
            }
        }
    }, {
        key: 'up',
        value: function up() {
            var _this2 = this;

            if (this.y === 0) {
                return;
            }
            this.state = Elevator.STATE.moving;
            this.y -= this.height;
            var tween = this.scene.tweens.add({
                targets: [this.floorLayer, this.decorationLayer, this.backgroundLayer, this.sensor],
                y: this.y,
                duration: 1000,
                ease: 'Sine.easeOut',
                onUpdate: function onUpdate() {
                    // We force the player to not moving
                    _this2.scene.player.getCharacter().body.setVelocityY(0);
                },
                onComplete: function onComplete() {
                    _this2.state = Elevator.STATE.iddle;
                }
            });
        }
    }, {
        key: 'down',
        value: function down() {
            var _this3 = this;

            this.state = Elevator.STATE.moving;
            this.y += this.height;
            var tween = this.scene.tweens.add({
                targets: [this.floorLayer, this.decorationLayer, this.backgroundLayer, this.sensor],
                y: this.y,
                duration: 1000,
                ease: 'Sine.easeOut',
                onUpdate: function onUpdate() {
                    // We force the player to not moving
                    _this3.scene.player.getCharacter().body.setVelocityY(600);
                },
                onComplete: function onComplete() {
                    _this3.state = Elevator.STATE.iddle;
                }
            });
        }
    }], [{
        key: 'BACKGROUND',
        get: function get() {
            return 'background';
        }
    }, {
        key: 'FLOOR',
        get: function get() {
            return 'floor';
        }
    }, {
        key: 'DECORATION',
        get: function get() {
            return 'decoration';
        }
    }, {
        key: 'SENSOR',
        get: function get() {
            return 'elevatorArea';
        }
    }, {
        key: 'STATE',
        get: function get() {
            return {
                'iddle': 'iddle',
                'moving': 'moving'
            };
        }
    }]);
    return Elevator;
}();

exports.default = Elevator;

},{"D:\\www\\bees\\node_modules\\babel-runtime/helpers/classCallCheck":8,"D:\\www\\bees\\node_modules\\babel-runtime/helpers/createClass":9}],92:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _classCallCheck2 = require("D:\\www\\bees\\node_modules\\babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("D:\\www\\bees\\node_modules\\babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _Room = require("./Room");

var _Room2 = _interopRequireDefault(_Room);

var _Elevator = require("./Elevator");

var _Elevator2 = _interopRequireDefault(_Elevator);

var _RoomManager = require("./RoomManager");

var _RoomManager2 = _interopRequireDefault(_RoomManager);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MapManager = function () {
    function MapManager(scene) {
        var _this = this;

        (0, _classCallCheck3.default)(this, MapManager);

        this.scene = scene;
        this.maxRooms = 5;
        this.roomOffset = 0;
        this.roomManager = new _RoomManager2.default(this.scene);
        this.scene.events.on('build-room', function (roomParams) {
            _this.addRoom(roomParams);
        });
    }

    (0, _createClass3.default)(MapManager, [{
        key: "_init",
        value: function _init() {
            this.addElevator();
            this.addRoom({ x: this.roomOffset, y: 0, widthInPixels: 0, heightInPixels: 0 });
        }
    }, {
        key: "addElevator",
        value: function addElevator() {
            this.elevator = new _Elevator2.default(this.scene);
            this.roomOffset = this.elevator.map.widthInPixels;
        }
    }, {
        key: "addRoom",
        value: function addRoom(roomParams) {
            this.roomManager.add(roomParams);
        }
    }, {
        key: "update",
        value: function update() {
            this.elevator.update();
            this.roomManager.update();
        }
    }]);
    return MapManager;
}();

exports.default = MapManager;

},{"./Elevator":91,"./Room":94,"./RoomManager":95,"D:\\www\\bees\\node_modules\\babel-runtime/helpers/classCallCheck":8,"D:\\www\\bees\\node_modules\\babel-runtime/helpers/createClass":9}],93:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _classCallCheck2 = require('D:\\www\\bees\\node_modules\\babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('D:\\www\\bees\\node_modules\\babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Player = function () {
    function Player(scene) {
        (0, _classCallCheck3.default)(this, Player);

        this.character = {
            'width': 80,
            'height': 110
        };
        this.scene = scene;
        this.entity = this.scene.add.container(110, 80);
        this.buildKey = this.scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.E);
        console.log(this.entity);
    }

    (0, _createClass3.default)(Player, [{
        key: 'create',
        value: function create() {
            var character = this.scene.add.sprite(0, 0, 'player');
            character.name = 'character';
            this.entity.add(character);
            this.setAnimation();
            this.entity.setSize(this.character.width, this.character.height);
            this.scene.physics.world.enable(this.entity);
            this.scene.physics.add.collider(this.entity, this.scene.physics.world);
            this.entity.body.setCollideWorldBounds(true);
            this.setEvents();
        }
    }, {
        key: 'setAnimation',
        value: function setAnimation() {
            this.scene.anims.create({
                key: 'left',
                frames: this.scene.anims.generateFrameNumbers('player', { start: 9, end: 10 }),
                frameRate: 10,
                repeat: -1
            });

            this.scene.anims.create({
                key: 'turn',
                frames: [{ key: 'player', frame: 23 }],
                frameRate: 20
            });

            this.scene.anims.create({
                key: 'right',
                frames: this.scene.anims.generateFrameNumbers('player', { start: 9, end: 10 }),
                frameRate: 10,
                repeat: -1
            });
        }
    }, {
        key: 'update',
        value: function update() {
            if (this.scene.cursors.left.isDown) {
                this.entity.body.setVelocityX(-300);
                this.getCharacter().anims.play('left', true);
                this.entity.getFirst('name', 'character').flipX = true;
                this.entity.getFirst('name', 'hive').flipX = true;
            } else if (this.scene.cursors.right.isDown) {
                this.entity.body.setVelocityX(300);
                this.getCharacter().anims.play('right', true);
                this.entity.getFirst('name', 'character').flipX = false;
                this.entity.getFirst('name', 'hive').flipX = false;
            } else {
                this.entity.body.setVelocityX(0);
                this.getCharacter().anims.play('turn');
            }

            if (this.scene.cursors.up.isDown && this.entity.body.onFloor()) {
                this.entity.body.setVelocityY(-600);
            }
        }
    }, {
        key: 'getCharacter',
        value: function getCharacter() {
            return this.entity.getByName('character');
        }
    }, {
        key: 'setEvents',
        value: function setEvents() {
            var _this = this;

            this.scene.input.keyboard.on('keydown', function (event) {
                switch (event.keyCode) {
                    case _this.buildKey.keyCode:
                        _this.scene.inventory.toggle();
                        break;
                    default:
                        break;
                }
            });
            this.scene.inventory.events.on('select-hive', function () {
                _this.selectHive();
            });
            this.scene.inventory.events.on('select-bee', function () {
                console.log('select bee');
            });
        }
    }, {
        key: 'selectHive',
        value: function selectHive() {
            var hive = this.scene.add.sprite(35, 15, 'hive');
            hive.setScale(.5);
            hive.name = 'hive';
            this.entity.add(hive);
            console.log(this.entity);
        }
    }]);
    return Player;
}();

exports.default = Player;

},{"D:\\www\\bees\\node_modules\\babel-runtime/helpers/classCallCheck":8,"D:\\www\\bees\\node_modules\\babel-runtime/helpers/createClass":9}],94:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _classCallCheck2 = require('D:\\www\\bees\\node_modules\\babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('D:\\www\\bees\\node_modules\\babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Room = function () {
    function Room(scene) {
        var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
        (0, _classCallCheck3.default)(this, Room);

        this.scene = scene;
        this.mapKey = 'room';
        this.map = this.scene.add.tilemap(this.mapKey);
        this.tileset = this.map.addTilesetImage('platformerPack_industrial_tilesheet', 'tiles');
        this.id = undefined;
        this.x = 0;
        this.y = 0;
        this.type = undefined;
        this.status = Room.STATUS.building;
        this.wall = null;
        this.floor = null;
        this.doors = null;
        this.doorSensor = null;
        this.doorsState = Room.DOORSSTATE.close;
        this.parseData(data);
        this.generate();
    }

    (0, _createClass3.default)(Room, [{
        key: 'parseData',
        value: function parseData(data) {
            if (data === undefined) {
                return false;
            }
            if (data.coords !== undefined) {
                this.x = data.coords.x !== undefined ? data.coords.x : 0;
                this.y = data.coords.y !== undefined ? data.coords.y : 0;
            }
            if (data.type !== undefined) {
                this.type = data.type;
            }
            this.id = data.id;
        }
    }, {
        key: 'generate',
        value: function generate() {
            switch (this.type) {
                case 'room-sas':
                    this.createFloor();
                    this.createDoorModule();
                    break;
                case 'room-void':
                    this.createFloor();
                    break;
                default:
                    this.createWall();
                    this.createFloor();
                    this.createDoorModule();
            }
        }
    }, {
        key: 'createWall',
        value: function createWall() {
            this.wall = this.map.createStaticLayer(Room.WALL, this.tileset, this.x, this.y);
            this.wall.setCollisionByExclusion([-1, 0], true);
            this.scene.physics.add.collider(this.scene.player.entity, this.wall);
        }
    }, {
        key: 'createFloor',
        value: function createFloor() {
            this.floor = this.map.createStaticLayer(Room.FLOOR, this.tileset, this.x, this.y);
            this.floor.setCollisionByExclusion([-1, 0], true);
            this.scene.physics.add.collider(this.scene.player.entity, this.floor);
        }
    }, {
        key: 'createDoorModule',
        value: function createDoorModule() {
            this.createDoors();
            this.createSensor();
            this.createDoorsTweens();
        }
    }, {
        key: 'createDoors',
        value: function createDoors() {
            var _this = this;

            var doorGroup = this.scene.physics.add.staticGroup();
            var doorsLayer = this.map.getObjectLayer(Room.DOORS);
            doorsLayer.objects.map(function (doorElement) {
                var x = doorElement.x + _this.x + _this.map.tileWidth / 2;
                var y = doorElement.y + _this.y - _this.map.tileHeight / 2;
                var sprite = _this.scene.add.sprite(x, y, 'tilesspritesheet', doorElement.gid - 1);
                doorGroup.add(sprite);
            });
            this.doorCollider = this.scene.physics.add.collider(this.scene.player.entity, doorGroup);
            this.doors = doorGroup;
        }
    }, {
        key: 'createSensor',
        value: function createSensor() {
            var _this2 = this;

            var doorSensorLayer = this.map.getObjectLayer(Room.DOORSENSOR);
            doorSensorLayer.objects.map(function (sensor) {
                var x = _this2.x + sensor.x;
                var y = _this2.y + sensor.y;
                _this2.doorSensor = new Phaser.Geom.Rectangle(x, y, sensor.width, sensor.height);
                var graphics = _this2.scene.add.graphics({
                    fillStyle: {
                        color: 0x0000ff,
                        alpha: 0.15
                    }
                });
                graphics.fillRectShape(_this2.doorSensor);
            });
            this.actionKey = this.scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.E);
        }
    }, {
        key: 'update',
        value: function update() {
            if (this.doorSensor) {
                this.checkSensor();
            }
        }
    }, {
        key: 'checkSensor',
        value: function checkSensor() {
            var _this3 = this;

            var intersectSensor = Phaser.Geom.Intersects.RectangleToRectangle(this.doorSensor, this.scene.player.entity.body);
            this.scene.input.keyboard.on('keydown', function (event) {
                if (event.keyCode !== _this3.actionKey.keyCode) {
                    return;
                }
                if (intersectSensor && _this3.doorsState === Room.DOORSSTATE.close) {
                    _this3.scene.events.emit('build-room', {
                        x: _this3.x,
                        y: _this3.y,
                        widthInPixels: _this3.map.widthInPixels,
                        heightInPixels: _this3.map.heightInPixels
                    });
                    _this3.doorsState = Room.DOORSSTATE.opening;
                    _this3.openDoors();
                }
            });
        }
    }, {
        key: 'createDoorsTweens',
        value: function createDoorsTweens() {
            var _this4 = this;

            var floorY = this.floor.layer.heightInPixels - 70 / 2;
            this.openingTween = this.scene.tweens.add({
                targets: this.doors.children.entries,
                paused: true,
                y: {
                    value: floorY,
                    duration: 600,
                    ease: 'Expo.easeOut'
                },
                onComplete: function onComplete() {
                    switch (_this4.doorsState) {
                        case Room.DOORSSTATE.close || Room.DOORSSTATE.opening:
                            _this4.doorsState = Room.DOORSSTATE.open;
                            break;
                        case Room.DOORSSTATE.open || Room.DOORSSTATE.closing:
                            _this4.doorsState = Room.DOORSSTATE.close;
                            break;
                    }
                    _this4.doorCollider.active = _this4.doorsState === Room.DOORSSTATE.close;
                }
            });
        }
    }, {
        key: 'openDoors',
        value: function openDoors() {
            this.openingTween.play();
        }
    }], [{
        key: 'DOORS',
        get: function get() {
            return 'doors';
        }
    }, {
        key: 'DOORSSTATE',
        get: function get() {
            return {
                close: 'close',
                closing: 'closing',
                opening: 'opening',
                open: 'open'
            };
        }
    }, {
        key: 'DOORSENSOR',
        get: function get() {
            return 'doorsensor';
        }
    }, {
        key: 'STATUS',
        get: function get() {
            return {
                building: 'building',
                build: 'build'
            };
        }
    }, {
        key: 'WALL',
        get: function get() {
            return 'wall';
        }
    }, {
        key: 'FLOOR',
        get: function get() {
            return 'floor';
        }
    }, {
        key: 'SPAWN',
        get: function get() {
            return 'spawn';
        }
    }]);
    return Room;
}();

exports.default = Room;

},{"D:\\www\\bees\\node_modules\\babel-runtime/helpers/classCallCheck":8,"D:\\www\\bees\\node_modules\\babel-runtime/helpers/createClass":9}],95:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _classCallCheck2 = require('D:\\www\\bees\\node_modules\\babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('D:\\www\\bees\\node_modules\\babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _Room = require('./Room');

var _Room2 = _interopRequireDefault(_Room);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var RoomManager = function () {
    function RoomManager(scene) {
        (0, _classCallCheck3.default)(this, RoomManager);

        this.scene = scene;
        this.rooms = [[]];
    }

    /**
     * @param {Object} roomParams
     * @param {number} roomParams.y
     * @param {number} roomParams.x
     * @param {number} roomParams.widthInPixels
     * @param {number} roomParams.heightInPixels
     **/


    (0, _createClass3.default)(RoomManager, [{
        key: 'add',
        value: function add(roomParams) {
            // console.log(roomParams);
            var roomCoords = {};

            if (roomParams.x !== undefined) {
                roomCoords.x = roomParams.x + roomParams.widthInPixels;
            } else {
                roomCoords.x = roomParams.widthInPixels !== undefined ? roomParams.widthInPixels : 0;
            }

            if (roomParams.y !== undefined) {
                roomCoords.y = roomParams.y;
            } else {
                roomCoords.y = roomParams.heightInPixels !== undefined ? roomParams.heightInPixels : 0;
            }

            var room = new _Room2.default(this.scene, {
                coords: roomCoords,
                id: this.rooms.length + 1,
                type: 'room-sas'
            });
            var matriceY = Math.floor(roomCoords.y / room.map.heightInPixels);
            var matriceX = Math.floor(roomCoords.x / room.map.widthInPixels);
            this.rooms[matriceY][matriceX] = room;
        }
    }, {
        key: 'update',
        value: function update() {
            this.rooms.map(function (raw) {
                raw.map(function (room) {
                    room.update();
                });
            });
        }
    }]);
    return RoomManager;
}();

exports.default = RoomManager;

},{"./Room":94,"D:\\www\\bees\\node_modules\\babel-runtime/helpers/classCallCheck":8,"D:\\www\\bees\\node_modules\\babel-runtime/helpers/createClass":9}],96:[function(require,module,exports){
"use strict";

var _Load = require("./scene/Load");

var _Load2 = _interopRequireDefault(_Load);

var _Main = require("./scene/Main");

var _Main2 = _interopRequireDefault(_Main);

var _Inventory = require("./scene/Inventory");

var _Inventory2 = _interopRequireDefault(_Inventory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = {
    type: Phaser.AUTO,
    parent: 'game',
    width: 800,
    height: 600,
    scaleMode: 0, //Phaser.ScaleManager.EXACT_FIT,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 1600 },
            debug: true
        }
    },
    scene: [_Load2.default, _Inventory2.default, _Main2.default]
};

},{"./scene/Inventory":97,"./scene/Load":98,"./scene/Main":99}],97:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _sign = require('D:\\www\\bees\\node_modules\\babel-runtime/core-js/math/sign');

var _sign2 = _interopRequireDefault(_sign);

var _getPrototypeOf = require('D:\\www\\bees\\node_modules\\babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('D:\\www\\bees\\node_modules\\babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('D:\\www\\bees\\node_modules\\babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('D:\\www\\bees\\node_modules\\babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('D:\\www\\bees\\node_modules\\babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var InventoryScene = function (_Phaser$Scene) {
    (0, _inherits3.default)(InventoryScene, _Phaser$Scene);

    function InventoryScene() {
        (0, _classCallCheck3.default)(this, InventoryScene);

        var _this = (0, _possibleConstructorReturn3.default)(this, (InventoryScene.__proto__ || (0, _getPrototypeOf2.default)(InventoryScene)).call(this, {
            key: 'InventoryScene'
        }));

        _this.visible = false;
        _this.borderThickness = 4;
        _this.borderColor = 0xaaaaaa;
        _this.borderAlpha = 1;
        _this.windowAlpha = 1;
        _this.windowColor = 0xeeeeee;
        _this.itemBorderColor = 0xDDDB58;
        _this.itemColor = 0xeeeeee;
        _this.itemHeight = 60;
        _this.padding = 32;
        _this.closeBtnColor = 'black';

        _this.categories = [{
            name: 'Hives',
            img: 'menu-hives',
            action: 'select-hive'
        }, {
            name: 'Bees',
            img: 'menu-bees',
            action: 'select-bee'
        }];
        return _this;
    }

    (0, _createClass3.default)(InventoryScene, [{
        key: 'preload',
        value: function preload() {
            console.log('InventoryScene preload');
        }
    }, {
        key: 'create',
        value: function create() {
            console.log('InventoryScene create');
            this.group = this.add.container();
            this.group.visible = false;
            this._createUI();
        }
    }, {
        key: 'update',
        value: function update() {}
    }, {
        key: 'toggle',
        value: function toggle() {
            this.group.visible ? this.hide() : this.show();
        }
    }, {
        key: 'show',
        value: function show() {
            console.log('inventory show');
            this.scene.bringToTop(this.key);
            this.group.visible = true;
        }
    }, {
        key: 'hide',
        value: function hide() {
            console.log('inventory hide');
            this.group.visible = false;
            this.scene.sendToBack(this.key);
        }
    }, {
        key: '_createUI',
        value: function _createUI() {
            var gameHeight = this._getGameHeight();
            var gameWidth = this._getGameWidth();
            var dimensions = this._calculateWindowDimensions(gameWidth, gameHeight);
            this._createCategories();
        }
    }, {
        key: '_getGameWidth',
        value: function _getGameWidth() {
            return this.sys.game.config.width;
        }

        // Gets the height of the game (based on the scene)

    }, {
        key: '_getGameHeight',
        value: function _getGameHeight() {
            return this.sys.game.config.height;
        }

        // Calculates where to place the dialog window based on the game size

    }, {
        key: '_calculateWindowDimensions',
        value: function _calculateWindowDimensions(width, height) {
            var x = this.padding;
            var y = height - this.windowHeight - this.padding;
            var rectWidth = width - this.padding * 2;
            var rectHeight = this.windowHeight;
            return {
                x: x,
                y: y,
                rectWidth: rectWidth,
                rectHeight: rectHeight
            };
        }

        // Creates the inner dialog window (where the text is displayed)

    }, {
        key: '_createInnerWindow',
        value: function _createInnerWindow(x, y, rectWidth, rectHeight) {
            this.graphics.fillStyle(this.windowColor, this.windowAlpha);
            this.graphics.fillRect(x + 1, y + 1, rectWidth - 1, rectHeight - 1);
        }

        // Creates the border rectangle of the dialog window

    }, {
        key: '_createOuterWindow',
        value: function _createOuterWindow(x, y, rectWidth, rectHeight) {
            this.graphics.lineStyle(this.borderThickness, this.borderColor, this.borderAlpha);
            this.graphics.strokeRect(x, y, rectWidth, rectHeight);
        }
    }, {
        key: '_createCategories',
        value: function _createCategories() {
            var _this2 = this;

            this.categories.forEach(function (category, index) {
                console.log(Math.cos(45 * index));
                console.log(Math.sin(45 * index));
                var cos = 110 * Math.cos(45 * index - 90);
                var sin = 110 * Math.sin(45 * index - 90);
                var x = cos + _this2._getGameWidth() / 2 + (0, _sign2.default)(cos) * (_this2.itemHeight / 2);
                var y = sin + _this2._getGameHeight() / 2 + (0, _sign2.default)(sin) * (_this2.itemHeight / 2);
                var button = _this2.add.sprite(x, y, category.img);
                button.action = category.action;
                button.setInteractive();
                button.on('pointerdown', function () {
                    console.log('click');
                    _this2.events.emit(button.action);
                });
                _this2.group.add(button);
            });
        }
    }]);
    return InventoryScene;
}(Phaser.Scene);

exports.default = InventoryScene;

},{"D:\\www\\bees\\node_modules\\babel-runtime/core-js/math/sign":1,"D:\\www\\bees\\node_modules\\babel-runtime/core-js/object/get-prototype-of":4,"D:\\www\\bees\\node_modules\\babel-runtime/helpers/classCallCheck":8,"D:\\www\\bees\\node_modules\\babel-runtime/helpers/createClass":9,"D:\\www\\bees\\node_modules\\babel-runtime/helpers/inherits":10,"D:\\www\\bees\\node_modules\\babel-runtime/helpers/possibleConstructorReturn":11}],98:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getPrototypeOf = require('D:\\www\\bees\\node_modules\\babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('D:\\www\\bees\\node_modules\\babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('D:\\www\\bees\\node_modules\\babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('D:\\www\\bees\\node_modules\\babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('D:\\www\\bees\\node_modules\\babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var LoadScene = function (_Phaser$Scene) {
    (0, _inherits3.default)(LoadScene, _Phaser$Scene);

    function LoadScene() {
        (0, _classCallCheck3.default)(this, LoadScene);
        return (0, _possibleConstructorReturn3.default)(this, (LoadScene.__proto__ || (0, _getPrototypeOf2.default)(LoadScene)).call(this, {
            key: 'LoadScene'
        }));
    }

    (0, _createClass3.default)(LoadScene, [{
        key: 'preload',
        value: function preload() {
            this.load.image('ground', 'img/assets/ground.png');
            this.load.image('hive', 'img/assets/ruche-2.png');
            this.load.spritesheet('player', 'img/assets/sprite/adventurer_tilesheet.png', {
                frameWidth: 80,
                frameHeight: 111,
                endFrame: 23
            });

            // Load images and spritesheets
            this.load.image('tiles', 'img/assets/platformerPack_industrial_tilesheet.png');
            this.load.image('menu-bees', 'img/assets/menu-bees.png');
            this.load.image('menu-hives', 'img/assets/menu-hives.png');
            // I load the tiles as a spritesheet so I can use it for both sprites and tiles
            this.load.spritesheet('tilesspritesheet', 'img/assets/platformerPack_industrial_tilesheet.png', {
                frameWidth: 70,
                frameHeight: 70,
                endFrame: 107
            });

            this.load.tilemapTiledJSON('room', 'maps/room.json');
            this.load.tilemapTiledJSON('elevator', 'maps/elevator.json');
        }
    }, {
        key: 'create',
        value: function create() {
            this.scene.start('MainScene');
        }
    }]);
    return LoadScene;
}(Phaser.Scene);

exports.default = LoadScene;

},{"D:\\www\\bees\\node_modules\\babel-runtime/core-js/object/get-prototype-of":4,"D:\\www\\bees\\node_modules\\babel-runtime/helpers/classCallCheck":8,"D:\\www\\bees\\node_modules\\babel-runtime/helpers/createClass":9,"D:\\www\\bees\\node_modules\\babel-runtime/helpers/inherits":10,"D:\\www\\bees\\node_modules\\babel-runtime/helpers/possibleConstructorReturn":11}],99:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getPrototypeOf = require('D:\\www\\bees\\node_modules\\babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('D:\\www\\bees\\node_modules\\babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('D:\\www\\bees\\node_modules\\babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('D:\\www\\bees\\node_modules\\babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('D:\\www\\bees\\node_modules\\babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _Player = require('../class/Player');

var _Player2 = _interopRequireDefault(_Player);

var _MapManager = require('../class/MapManager');

var _MapManager2 = _interopRequireDefault(_MapManager);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MainScene = function (_Phaser$Scene) {
    (0, _inherits3.default)(MainScene, _Phaser$Scene);

    function MainScene() {
        (0, _classCallCheck3.default)(this, MainScene);

        var _this = (0, _possibleConstructorReturn3.default)(this, (MainScene.__proto__ || (0, _getPrototypeOf2.default)(MainScene)).call(this, {
            key: 'MainScene'
        }));

        _this.mapManager = null;
        _this.player = null;
        _this.cursors = null;
        _this.keys = [];
        _this.cameraSafeZone = 350;
        return _this;
    }

    (0, _createClass3.default)(MainScene, [{
        key: 'preload',
        value: function preload() {
            this.player = new _Player2.default(this);
            this.mapManager = new _MapManager2.default(this);
        }
    }, {
        key: 'create',
        value: function create() {
            this.inventory = this.scene.get('InventoryScene');
            this.scene.launch('InventoryScene');
            this.cursors = this.input.keyboard.createCursorKeys();
            this.player.create();
            this.mapManager._init();

            this.physics.world.bounds.width = 350 * 6;
            this.physics.world.bounds.height = 350 * 6;

            this.cameras.main.setBounds(this.physics.world.bounds.left, this.physics.world.bounds.top, this.physics.world.bounds.width, this.physics.world.bounds.height);
            this.cameras.main.startFollow(this.player.entity);
            this.player.entity.depth = 11;
        }
    }, {
        key: 'update',
        value: function update() {
            this.player.update();
            this.mapManager.update();
        }
    }, {
        key: 'updateWorldSize',
        value: function updateWorldSize() {
            var width = 0;
            var height = 0;
            var maxWidthRaw = this.mapManager.getWidth();
            var maxHeightRaw = this.mapManager.getHeight();
            this.physics.world.bounds.width = maxWidthRaw + this.cameraSafeZone;
            this.physics.world.bounds.height = maxHeightRaw + this.cameraSafeZone;
            this.cameras.main.setBounds(this.physics.world.bounds.left, this.physics.world.bounds.top, this.physics.world.bounds.width, this.physics.world.bounds.height);
        }
    }]);
    return MainScene;
}(Phaser.Scene);

exports.default = MainScene;

},{"../class/MapManager":92,"../class/Player":93,"D:\\www\\bees\\node_modules\\babel-runtime/core-js/object/get-prototype-of":4,"D:\\www\\bees\\node_modules\\babel-runtime/helpers/classCallCheck":8,"D:\\www\\bees\\node_modules\\babel-runtime/helpers/createClass":9,"D:\\www\\bees\\node_modules\\babel-runtime/helpers/inherits":10,"D:\\www\\bees\\node_modules\\babel-runtime/helpers/possibleConstructorReturn":11}]},{},[90]);
