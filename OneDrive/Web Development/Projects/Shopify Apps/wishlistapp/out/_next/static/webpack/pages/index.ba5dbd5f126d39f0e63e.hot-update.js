webpackHotUpdate_N_E("pages/index",{

/***/ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _taggedTemplateLiteral; });
function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  return Object.freeze(Object.defineProperties(strings, {
    raw: {
      value: Object.freeze(raw)
    }
  }));
}

/***/ }),

/***/ "./node_modules/store-js/dist/store.legacy.js":
/*!****************************************************!*\
  !*** ./node_modules/store-js/dist/store.legacy.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var engine = __webpack_require__(/*! ../src/store-engine */ "./node_modules/store-js/src/store-engine.js")

var storages = __webpack_require__(/*! ../storages/all */ "./node_modules/store-js/storages/all.js")
var plugins = [__webpack_require__(/*! ../plugins/json2 */ "./node_modules/store-js/plugins/json2.js")]

module.exports = engine.createStore(storages, plugins)


/***/ }),

/***/ "./node_modules/store-js/plugins/json2.js":
/*!************************************************!*\
  !*** ./node_modules/store-js/plugins/json2.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = json2Plugin

function json2Plugin() {
	__webpack_require__(/*! ./lib/json2 */ "./node_modules/store-js/plugins/lib/json2.js")
	return {}
}


/***/ }),

/***/ "./node_modules/store-js/plugins/lib/json2.js":
/*!****************************************************!*\
  !*** ./node_modules/store-js/plugins/lib/json2.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

//  json2.js
//  2016-10-28
//  Public Domain.
//  NO WARRANTY EXPRESSED OR IMPLIED. USE AT YOUR OWN RISK.
//  See http://www.JSON.org/js.html
//  This code should be minified before deployment.
//  See http://javascript.crockford.com/jsmin.html

//  USE YOUR OWN COPY. IT IS EXTREMELY UNWISE TO LOAD CODE FROM SERVERS YOU DO
//  NOT CONTROL.

//  This file creates a global JSON object containing two methods: stringify
//  and parse. This file provides the ES5 JSON capability to ES3 systems.
//  If a project might run on IE8 or earlier, then this file should be included.
//  This file does nothing on ES5 systems.

//      JSON.stringify(value, replacer, space)
//          value       any JavaScript value, usually an object or array.
//          replacer    an optional parameter that determines how object
//                      values are stringified for objects. It can be a
//                      function or an array of strings.
//          space       an optional parameter that specifies the indentation
//                      of nested structures. If it is omitted, the text will
//                      be packed without extra whitespace. If it is a number,
//                      it will specify the number of spaces to indent at each
//                      level. If it is a string (such as "\t" or "&nbsp;"),
//                      it contains the characters used to indent at each level.
//          This method produces a JSON text from a JavaScript value.
//          When an object value is found, if the object contains a toJSON
//          method, its toJSON method will be called and the result will be
//          stringified. A toJSON method does not serialize: it returns the
//          value represented by the name/value pair that should be serialized,
//          or undefined if nothing should be serialized. The toJSON method
//          will be passed the key associated with the value, and this will be
//          bound to the value.

//          For example, this would serialize Dates as ISO strings.

//              Date.prototype.toJSON = function (key) {
//                  function f(n) {
//                      // Format integers to have at least two digits.
//                      return (n < 10)
//                          ? "0" + n
//                          : n;
//                  }
//                  return this.getUTCFullYear()   + "-" +
//                       f(this.getUTCMonth() + 1) + "-" +
//                       f(this.getUTCDate())      + "T" +
//                       f(this.getUTCHours())     + ":" +
//                       f(this.getUTCMinutes())   + ":" +
//                       f(this.getUTCSeconds())   + "Z";
//              };

//          You can provide an optional replacer method. It will be passed the
//          key and value of each member, with this bound to the containing
//          object. The value that is returned from your method will be
//          serialized. If your method returns undefined, then the member will
//          be excluded from the serialization.

//          If the replacer parameter is an array of strings, then it will be
//          used to select the members to be serialized. It filters the results
//          such that only members with keys listed in the replacer array are
//          stringified.

//          Values that do not have JSON representations, such as undefined or
//          functions, will not be serialized. Such values in objects will be
//          dropped; in arrays they will be replaced with null. You can use
//          a replacer function to replace those with JSON values.

//          JSON.stringify(undefined) returns undefined.

//          The optional space parameter produces a stringification of the
//          value that is filled with line breaks and indentation to make it
//          easier to read.

//          If the space parameter is a non-empty string, then that string will
//          be used for indentation. If the space parameter is a number, then
//          the indentation will be that many spaces.

//          Example:

//          text = JSON.stringify(["e", {pluribus: "unum"}]);
//          // text is '["e",{"pluribus":"unum"}]'

//          text = JSON.stringify(["e", {pluribus: "unum"}], null, "\t");
//          // text is '[\n\t"e",\n\t{\n\t\t"pluribus": "unum"\n\t}\n]'

//          text = JSON.stringify([new Date()], function (key, value) {
//              return this[key] instanceof Date
//                  ? "Date(" + this[key] + ")"
//                  : value;
//          });
//          // text is '["Date(---current time---)"]'

//      JSON.parse(text, reviver)
//          This method parses a JSON text to produce an object or array.
//          It can throw a SyntaxError exception.

//          The optional reviver parameter is a function that can filter and
//          transform the results. It receives each of the keys and values,
//          and its return value is used instead of the original value.
//          If it returns what it received, then the structure is not modified.
//          If it returns undefined then the member is deleted.

//          Example:

//          // Parse the text. Values that look like ISO date strings will
//          // be converted to Date objects.

//          myData = JSON.parse(text, function (key, value) {
//              var a;
//              if (typeof value === "string") {
//                  a =
//   /^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2}(?:\.\d*)?)Z$/.exec(value);
//                  if (a) {
//                      return new Date(Date.UTC(+a[1], +a[2] - 1, +a[3], +a[4],
//                          +a[5], +a[6]));
//                  }
//              }
//              return value;
//          });

//          myData = JSON.parse('["Date(09/09/2001)"]', function (key, value) {
//              var d;
//              if (typeof value === "string" &&
//                      value.slice(0, 5) === "Date(" &&
//                      value.slice(-1) === ")") {
//                  d = new Date(value.slice(5, -1));
//                  if (d) {
//                      return d;
//                  }
//              }
//              return value;
//          });

//  This is a reference implementation. You are free to copy, modify, or
//  redistribute.

/*jslint
    eval, for, this
*/

/*property
    JSON, apply, call, charCodeAt, getUTCDate, getUTCFullYear, getUTCHours,
    getUTCMinutes, getUTCMonth, getUTCSeconds, hasOwnProperty, join,
    lastIndex, length, parse, prototype, push, replace, slice, stringify,
    test, toJSON, toString, valueOf
*/


// Create a JSON object only if one does not already exist. We create the
// methods in a closure to avoid creating global variables.

if (typeof JSON !== "object") {
    JSON = {};
}

(function () {
    "use strict";

    var rx_one = /^[\],:{}\s]*$/;
    var rx_two = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g;
    var rx_three = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g;
    var rx_four = /(?:^|:|,)(?:\s*\[)+/g;
    var rx_escapable = /[\\"\u0000-\u001f\u007f-\u009f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;
    var rx_dangerous = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;

    function f(n) {
        // Format integers to have at least two digits.
        return n < 10
            ? "0" + n
            : n;
    }

    function this_value() {
        return this.valueOf();
    }

    if (typeof Date.prototype.toJSON !== "function") {

        Date.prototype.toJSON = function () {

            return isFinite(this.valueOf())
                ? this.getUTCFullYear() + "-" +
                        f(this.getUTCMonth() + 1) + "-" +
                        f(this.getUTCDate()) + "T" +
                        f(this.getUTCHours()) + ":" +
                        f(this.getUTCMinutes()) + ":" +
                        f(this.getUTCSeconds()) + "Z"
                : null;
        };

        Boolean.prototype.toJSON = this_value;
        Number.prototype.toJSON = this_value;
        String.prototype.toJSON = this_value;
    }

    var gap;
    var indent;
    var meta;
    var rep;


    function quote(string) {

// If the string contains no control characters, no quote characters, and no
// backslash characters, then we can safely slap some quotes around it.
// Otherwise we must also replace the offending characters with safe escape
// sequences.

        rx_escapable.lastIndex = 0;
        return rx_escapable.test(string)
            ? "\"" + string.replace(rx_escapable, function (a) {
                var c = meta[a];
                return typeof c === "string"
                    ? c
                    : "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4);
            }) + "\""
            : "\"" + string + "\"";
    }


    function str(key, holder) {

// Produce a string from holder[key].

        var i;          // The loop counter.
        var k;          // The member key.
        var v;          // The member value.
        var length;
        var mind = gap;
        var partial;
        var value = holder[key];

// If the value has a toJSON method, call it to obtain a replacement value.

        if (value && typeof value === "object" &&
                typeof value.toJSON === "function") {
            value = value.toJSON(key);
        }

// If we were called with a replacer function, then call the replacer to
// obtain a replacement value.

        if (typeof rep === "function") {
            value = rep.call(holder, key, value);
        }

// What happens next depends on the value's type.

        switch (typeof value) {
        case "string":
            return quote(value);

        case "number":

// JSON numbers must be finite. Encode non-finite numbers as null.

            return isFinite(value)
                ? String(value)
                : "null";

        case "boolean":
        case "null":

// If the value is a boolean or null, convert it to a string. Note:
// typeof null does not produce "null". The case is included here in
// the remote chance that this gets fixed someday.

            return String(value);

// If the type is "object", we might be dealing with an object or an array or
// null.

        case "object":

// Due to a specification blunder in ECMAScript, typeof null is "object",
// so watch out for that case.

            if (!value) {
                return "null";
            }

// Make an array to hold the partial results of stringifying this object value.

            gap += indent;
            partial = [];

// Is the value an array?

            if (Object.prototype.toString.apply(value) === "[object Array]") {

// The value is an array. Stringify every element. Use null as a placeholder
// for non-JSON values.

                length = value.length;
                for (i = 0; i < length; i += 1) {
                    partial[i] = str(i, value) || "null";
                }

// Join all of the elements together, separated with commas, and wrap them in
// brackets.

                v = partial.length === 0
                    ? "[]"
                    : gap
                        ? "[\n" + gap + partial.join(",\n" + gap) + "\n" + mind + "]"
                        : "[" + partial.join(",") + "]";
                gap = mind;
                return v;
            }

// If the replacer is an array, use it to select the members to be stringified.

            if (rep && typeof rep === "object") {
                length = rep.length;
                for (i = 0; i < length; i += 1) {
                    if (typeof rep[i] === "string") {
                        k = rep[i];
                        v = str(k, value);
                        if (v) {
                            partial.push(quote(k) + (
                                gap
                                    ? ": "
                                    : ":"
                            ) + v);
                        }
                    }
                }
            } else {

// Otherwise, iterate through all of the keys in the object.

                for (k in value) {
                    if (Object.prototype.hasOwnProperty.call(value, k)) {
                        v = str(k, value);
                        if (v) {
                            partial.push(quote(k) + (
                                gap
                                    ? ": "
                                    : ":"
                            ) + v);
                        }
                    }
                }
            }

// Join all of the member texts together, separated with commas,
// and wrap them in braces.

            v = partial.length === 0
                ? "{}"
                : gap
                    ? "{\n" + gap + partial.join(",\n" + gap) + "\n" + mind + "}"
                    : "{" + partial.join(",") + "}";
            gap = mind;
            return v;
        }
    }

// If the JSON object does not yet have a stringify method, give it one.

    if (typeof JSON.stringify !== "function") {
        meta = {    // table of character substitutions
            "\b": "\\b",
            "\t": "\\t",
            "\n": "\\n",
            "\f": "\\f",
            "\r": "\\r",
            "\"": "\\\"",
            "\\": "\\\\"
        };
        JSON.stringify = function (value, replacer, space) {

// The stringify method takes a value and an optional replacer, and an optional
// space parameter, and returns a JSON text. The replacer can be a function
// that can replace values, or an array of strings that will select the keys.
// A default replacer method can be provided. Use of the space parameter can
// produce text that is more easily readable.

            var i;
            gap = "";
            indent = "";

// If the space parameter is a number, make an indent string containing that
// many spaces.

            if (typeof space === "number") {
                for (i = 0; i < space; i += 1) {
                    indent += " ";
                }

// If the space parameter is a string, it will be used as the indent string.

            } else if (typeof space === "string") {
                indent = space;
            }

// If there is a replacer, it must be a function or an array.
// Otherwise, throw an error.

            rep = replacer;
            if (replacer && typeof replacer !== "function" &&
                    (typeof replacer !== "object" ||
                    typeof replacer.length !== "number")) {
                throw new Error("JSON.stringify");
            }

// Make a fake root object containing our value under the key of "".
// Return the result of stringifying the value.

            return str("", {"": value});
        };
    }


// If the JSON object does not yet have a parse method, give it one.

    if (typeof JSON.parse !== "function") {
        JSON.parse = function (text, reviver) {

// The parse method takes a text and an optional reviver function, and returns
// a JavaScript value if the text is a valid JSON text.

            var j;

            function walk(holder, key) {

// The walk method is used to recursively walk the resulting structure so
// that modifications can be made.

                var k;
                var v;
                var value = holder[key];
                if (value && typeof value === "object") {
                    for (k in value) {
                        if (Object.prototype.hasOwnProperty.call(value, k)) {
                            v = walk(value, k);
                            if (v !== undefined) {
                                value[k] = v;
                            } else {
                                delete value[k];
                            }
                        }
                    }
                }
                return reviver.call(holder, key, value);
            }


// Parsing happens in four stages. In the first stage, we replace certain
// Unicode characters with escape sequences. JavaScript handles many characters
// incorrectly, either silently deleting them, or treating them as line endings.

            text = String(text);
            rx_dangerous.lastIndex = 0;
            if (rx_dangerous.test(text)) {
                text = text.replace(rx_dangerous, function (a) {
                    return "\\u" +
                            ("0000" + a.charCodeAt(0).toString(16)).slice(-4);
                });
            }

// In the second stage, we run the text against regular expressions that look
// for non-JSON patterns. We are especially concerned with "()" and "new"
// because they can cause invocation, and "=" because it can cause mutation.
// But just to be safe, we want to reject all unexpected forms.

// We split the second stage into 4 regexp operations in order to work around
// crippling inefficiencies in IE's and Safari's regexp engines. First we
// replace the JSON backslash pairs with "@" (a non-JSON character). Second, we
// replace all simple value tokens with "]" characters. Third, we delete all
// open brackets that follow a colon or comma or that begin the text. Finally,
// we look to see that the remaining characters are only whitespace or "]" or
// "," or ":" or "{" or "}". If that is so, then the text is safe for eval.

            if (
                rx_one.test(
                    text
                        .replace(rx_two, "@")
                        .replace(rx_three, "]")
                        .replace(rx_four, "")
                )
            ) {

// In the third stage we use the eval function to compile the text into a
// JavaScript structure. The "{" operator is subject to a syntactic ambiguity
// in JavaScript: it can begin a block or an object literal. We wrap the text
// in parens to eliminate the ambiguity.

                j = eval("(" + text + ")");

// In the optional fourth stage, we recursively walk the new structure, passing
// each name/value pair to a reviver function for possible transformation.

                return (typeof reviver === "function")
                    ? walk({"": j}, "")
                    : j;
            }

// If the text is not JSON parseable, then a SyntaxError is thrown.

            throw new SyntaxError("JSON.parse");
        };
    }
}());

/***/ }),

/***/ "./node_modules/store-js/src/store-engine.js":
/*!***************************************************!*\
  !*** ./node_modules/store-js/src/store-engine.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var util = __webpack_require__(/*! ./util */ "./node_modules/store-js/src/util.js")
var slice = util.slice
var pluck = util.pluck
var each = util.each
var create = util.create
var isList = util.isList
var isFunction = util.isFunction
var isObject = util.isObject

module.exports = {
	createStore: createStore,
}

var storeAPI = {
	version: '2.0.3',
	enabled: false,
	
	// addStorage adds another storage to this store. The store
	// will use the first storage it receives that is enabled, so
	// call addStorage in the order of preferred storage.
	addStorage: function(storage) {
		if (this.enabled) { return }
		if (this._testStorage(storage)) {
			this._storage.resolved = storage
			this.enabled = true
		}
	},

	// addPlugin will add a plugin to this store.
	addPlugin: function(plugin) {
		var self = this

		// If the plugin is an array, then add all plugins in the array.
		// This allows for a plugin to depend on other plugins.
		if (isList(plugin)) {
			each(plugin, function(plugin) {
				self.addPlugin(plugin)
			})
			return
		}

		// Keep track of all plugins we've seen so far, so that we
		// don't add any of them twice.
		var seenPlugin = pluck(this._seenPlugins, function(seenPlugin) { return (plugin === seenPlugin) })
		if (seenPlugin) {
			return
		}
		this._seenPlugins.push(plugin)

		// Check that the plugin is properly formed
		if (!isFunction(plugin)) {
			throw new Error('Plugins must be function values that return objects')
		}

		var pluginProperties = plugin.call(this)
		if (!isObject(pluginProperties)) {
			throw new Error('Plugins must return an object of function properties')
		}

		// Add the plugin function properties to this store instance.
		each(pluginProperties, function(pluginFnProp, propName) {
			if (!isFunction(pluginFnProp)) {
				throw new Error('Bad plugin property: '+propName+' from plugin '+plugin.name+'. Plugins should only return functions.')
			}
			self._assignPluginFnProp(pluginFnProp, propName)
		})
	},

	// get returns the value of the given key. If that value
	// is undefined, it returns optionalDefaultValue instead.
	get: function(key, optionalDefaultValue) {
		var data = this._storage().read(this._namespacePrefix + key)
		return this._deserialize(data, optionalDefaultValue)
	},

	// set will store the given value at key and returns value.
	// Calling set with value === undefined is equivalent to calling remove.
	set: function(key, value) {
		if (value === undefined) {
			return this.remove(key)
		}
		this._storage().write(this._namespacePrefix + key, this._serialize(value))
		return value
	},

	// remove deletes the key and value stored at the given key.
	remove: function(key) {
		this._storage().remove(this._namespacePrefix + key)
	},

	// each will call the given callback once for each key-value pair
	// in this store.
	each: function(callback) {
		var self = this
		this._storage().each(function(val, namespacedKey) {
			callback(self._deserialize(val), namespacedKey.replace(self._namespaceRegexp, ''))
		})
	},

	// clearAll will remove all the stored key-value pairs in this store.
	clearAll: function() {
		this._storage().clearAll()
	},

	// additional functionality that can't live in plugins
	// ---------------------------------------------------

	// hasNamespace returns true if this store instance has the given namespace.
	hasNamespace: function(namespace) {
		return (this._namespacePrefix == '__storejs_'+namespace+'_')
	},

	// namespace clones the current store and assigns it the given namespace
	namespace: function(namespace) {
		if (!this._legalNamespace.test(namespace)) {
			throw new Error('store.js namespaces can only have alhpanumerics + underscores and dashes')
		}
		// create a prefix that is very unlikely to collide with un-namespaced keys
		var namespacePrefix = '__storejs_'+namespace+'_'
		return create(this, {
			_namespacePrefix: namespacePrefix,
			_namespaceRegexp: namespacePrefix ? new RegExp('^'+namespacePrefix) : null
		})
	},

	// createStore creates a store.js instance with the first
	// functioning storage in the list of storage candidates,
	// and applies the the given mixins to the instance.
	createStore: function(storages, plugins) {
		return createStore(storages, plugins)
	},
}

function createStore(storages, plugins) {
	var _privateStoreProps = {
		_seenPlugins: [],
		_namespacePrefix: '',
		_namespaceRegexp: null,
		_legalNamespace: /^[a-zA-Z0-9_\-]+$/, // alpha-numeric + underscore and dash

		_storage: function() {
			if (!this.enabled) {
				throw new Error("store.js: No supported storage has been added! "+
					"Add one (e.g store.addStorage(require('store/storages/cookieStorage')) "+
					"or use a build with more built-in storages (e.g "+
					"https://github.com/marcuswestin/store.js/tree/master/dist/store.legacy.min.js)")
			}
			return this._storage.resolved
		},

		_testStorage: function(storage) {
			try {
				var testStr = '__storejs__test__'
				storage.write(testStr, testStr)
				var ok = (storage.read(testStr) === testStr)
				storage.remove(testStr)
				return ok
			} catch(e) {
				return false
			}
		},

		_assignPluginFnProp: function(pluginFnProp, propName) {
			var oldFn = this[propName]
			this[propName] = function pluginFn() {
				var args = slice(arguments, 0)
				var self = this

				// super_fn calls the old function which was overwritten by
				// this mixin.
				function super_fn() {
					if (!oldFn) { return }
					each(arguments, function(arg, i) {
						args[i] = arg
					})
					return oldFn.apply(self, args)
				}

				// Give mixing function access to super_fn by prefixing all mixin function
				// arguments with super_fn.
				var newFnArgs = [super_fn].concat(args)

				return pluginFnProp.apply(self, newFnArgs)
			}
		},

		_serialize: function(obj) {
			return JSON.stringify(obj)
		},

		_deserialize: function(strVal, defaultVal) {
			if (!strVal) { return defaultVal }
			// It is possible that a raw string value has been previously stored
			// in a storage without using store.js, meaning it will be a raw
			// string value instead of a JSON serialized string. By defaulting
			// to the raw string value in case of a JSON parse error, we allow
			// for past stored values to be forwards-compatible with store.js
			var val = ''
			try { val = JSON.parse(strVal) }
			catch(e) { val = strVal }

			return (val !== undefined ? val : defaultVal)
		},
	}

	var store = create(_privateStoreProps, storeAPI)
	each(storages, function(storage) {
		store.addStorage(storage)
	})
	each(plugins, function(plugin) {
		store.addPlugin(plugin)
	})
	return store
}


/***/ }),

/***/ "./node_modules/store-js/src/util.js":
/*!*******************************************!*\
  !*** ./node_modules/store-js/src/util.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var assign = make_assign()
var create = make_create()
var trim = make_trim()
var Global = (typeof window !== 'undefined' ? window : global)

module.exports = {
	assign: assign,
	create: create,
	trim: trim,
	bind: bind,
	slice: slice,
	each: each,
	map: map,
	pluck: pluck,
	isList: isList,
	isFunction: isFunction,
	isObject: isObject,
	Global: Global,
}

function make_assign() {
	if (Object.assign) {
		return Object.assign
	} else {
		return function shimAssign(obj, props1, props2, etc) {
			for (var i = 1; i < arguments.length; i++) {
				each(Object(arguments[i]), function(val, key) {
					obj[key] = val
				})
			}			
			return obj
		}
	}
}

function make_create() {
	if (Object.create) {
		return function create(obj, assignProps1, assignProps2, etc) {
			var assignArgsList = slice(arguments, 1)
			return assign.apply(this, [Object.create(obj)].concat(assignArgsList))
		}
	} else {
		function F() {} // eslint-disable-line no-inner-declarations
		return function create(obj, assignProps1, assignProps2, etc) {
			var assignArgsList = slice(arguments, 1)
			F.prototype = obj
			return assign.apply(this, [new F()].concat(assignArgsList))
		}
	}
}

function make_trim() {
	if (String.prototype.trim) {
		return function trim(str) {
			return String.prototype.trim.call(str)
		}
	} else {
		return function trim(str) {
			return str.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '')
		}
	}
}

function bind(obj, fn) {
	return function() {
		return fn.apply(obj, Array.prototype.slice.call(arguments, 0))
	}
}

function slice(arr, index) {
	return Array.prototype.slice.call(arr, index || 0)
}

function each(obj, fn) {
	pluck(obj, function(key, val) {
		fn(key, val)
		return false
	})
}

function map(obj, fn) {
	var res = (isList(obj) ? [] : {})
	pluck(obj, function(v, k) {
		res[k] = fn(v, k)
		return false
	})
	return res
}

function pluck(obj, fn) {
	if (isList(obj)) {
		for (var i=0; i<obj.length; i++) {
			if (fn(obj[i], i)) {
				return obj[i]
			}
		}
	} else {
		for (var key in obj) {
			if (obj.hasOwnProperty(key)) {
				if (fn(obj[key], key)) {
					return obj[key]
				}
			}
		}
	}
}

function isList(val) {
	return (val != null && typeof val != 'function' && typeof val.length == 'number')
}

function isFunction(val) {
	return val && {}.toString.call(val) === '[object Function]'
}

function isObject(val) {
	return val && {}.toString.call(val) === '[object Object]'
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/store-js/storages/all.js":
/*!***********************************************!*\
  !*** ./node_modules/store-js/storages/all.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
	// Listed in order of usage preference
	'localStorage': __webpack_require__(/*! ./localStorage */ "./node_modules/store-js/storages/localStorage.js"),
	'oldFF-globalStorage': __webpack_require__(/*! ./oldFF-globalStorage */ "./node_modules/store-js/storages/oldFF-globalStorage.js"),
	'oldIE-userDataStorage': __webpack_require__(/*! ./oldIE-userDataStorage */ "./node_modules/store-js/storages/oldIE-userDataStorage.js"),
	'cookieStorage': __webpack_require__(/*! ./cookieStorage */ "./node_modules/store-js/storages/cookieStorage.js"),
	'sessionStorage': __webpack_require__(/*! ./sessionStorage */ "./node_modules/store-js/storages/sessionStorage.js"),
	'memoryStorage': __webpack_require__(/*! ./memoryStorage */ "./node_modules/store-js/storages/memoryStorage.js"),
}


/***/ }),

/***/ "./node_modules/store-js/storages/cookieStorage.js":
/*!*********************************************************!*\
  !*** ./node_modules/store-js/storages/cookieStorage.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// cookieStorage is useful Safari private browser mode, where localStorage
// doesn't work but cookies do. This implementation is adopted from
// https://developer.mozilla.org/en-US/docs/Web/API/Storage/LocalStorage

var util = __webpack_require__(/*! ../src/util */ "./node_modules/store-js/src/util.js")
var Global = util.Global
var trim = util.trim

module.exports = {
	name: 'cookieStorage',
	read: read,
	write: write,
	each: each,
	remove: remove,
	clearAll: clearAll,
}

var doc = Global.document

function read(key) {
	if (!key || !_has(key)) { return null }
	var regexpStr = "(?:^|.*;\\s*)" +
		escape(key).replace(/[\-\.\+\*]/g, "\\$&") +
		"\\s*\\=\\s*((?:[^;](?!;))*[^;]?).*"
	return unescape(doc.cookie.replace(new RegExp(regexpStr), "$1"))
}

function each(callback) {
	var cookies = doc.cookie.split(/; ?/g)
	for (var i = cookies.length - 1; i >= 0; i--) {
		if (!trim(cookies[i])) {
			continue
		}
		var kvp = cookies[i].split('=')
		var key = unescape(kvp[0])
		var val = unescape(kvp[1])
		callback(val, key)
	}
}

function write(key, data) {
	if(!key) { return }
	doc.cookie = escape(key) + "=" + escape(data) + "; expires=Tue, 19 Jan 2038 03:14:07 GMT; path=/"
}

function remove(key) {
	if (!key || !_has(key)) {
		return
	}
	doc.cookie = escape(key) + "=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/"
}

function clearAll() {
	each(function(_, key) {
		remove(key)
	})
}

function _has(key) {
	return (new RegExp("(?:^|;\\s*)" + escape(key).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=")).test(doc.cookie)
}


/***/ }),

/***/ "./node_modules/store-js/storages/localStorage.js":
/*!********************************************************!*\
  !*** ./node_modules/store-js/storages/localStorage.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var util = __webpack_require__(/*! ../src/util */ "./node_modules/store-js/src/util.js")
var Global = util.Global

module.exports = {
	name: 'localStorage',
	read: read,
	write: write,
	each: each,
	remove: remove,
	clearAll: clearAll,
}

function localStorage() {
	return Global.localStorage
}

function read(key) {
	return localStorage().getItem(key)
}

function write(key, data) {
	return localStorage().setItem(key, data)
}

function each(fn) {
	for (var i = localStorage().length - 1; i >= 0; i--) {
		var key = localStorage().key(i)
		fn(read(key), key)
	}
}

function remove(key) {
	return localStorage().removeItem(key)
}

function clearAll() {
	return localStorage().clear()
}


/***/ }),

/***/ "./node_modules/store-js/storages/memoryStorage.js":
/*!*********************************************************!*\
  !*** ./node_modules/store-js/storages/memoryStorage.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// memoryStorage is a useful last fallback to ensure that the store
// is functions (meaning store.get(), store.set(), etc will all function).
// However, stored values will not persist when the browser navigates to
// a new page or reloads the current page.

module.exports = {
	name: 'memoryStorage',
	read: read,
	write: write,
	each: each,
	remove: remove,
	clearAll: clearAll,
}

var memoryStorage = {}

function read(key) {
	return memoryStorage[key]
}

function write(key, data) {
	memoryStorage[key] = data
}

function each(callback) {
	for (var key in memoryStorage) {
		if (memoryStorage.hasOwnProperty(key)) {
			callback(memoryStorage[key], key)
		}
	}
}

function remove(key) {
	delete memoryStorage[key]
}

function clearAll(key) {
	memoryStorage = {}
}


/***/ }),

/***/ "./node_modules/store-js/storages/oldFF-globalStorage.js":
/*!***************************************************************!*\
  !*** ./node_modules/store-js/storages/oldFF-globalStorage.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// oldFF-globalStorage provides storage for Firefox
// versions 6 and 7, where no localStorage, etc
// is available.

var util = __webpack_require__(/*! ../src/util */ "./node_modules/store-js/src/util.js")
var Global = util.Global

module.exports = {
	name: 'oldFF-globalStorage',
	read: read,
	write: write,
	each: each,
	remove: remove,
	clearAll: clearAll,
}

var globalStorage = Global.globalStorage

function read(key) {
	return globalStorage[key]
}

function write(key, data) {
	globalStorage[key] = data
}

function each(fn) {
	for (var i = globalStorage.length - 1; i >= 0; i--) {
		var key = globalStorage.key(i)
		fn(globalStorage[key], key)
	}
}

function remove(key) {
	return globalStorage.removeItem(key)
}

function clearAll() {
	each(function(key, _) {
		delete globalStorage[key]
	})
}


/***/ }),

/***/ "./node_modules/store-js/storages/oldIE-userDataStorage.js":
/*!*****************************************************************!*\
  !*** ./node_modules/store-js/storages/oldIE-userDataStorage.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// oldIE-userDataStorage provides storage for Internet Explorer
// versions 6 and 7, where no localStorage, sessionStorage, etc
// is available.

var util = __webpack_require__(/*! ../src/util */ "./node_modules/store-js/src/util.js")
var Global = util.Global

module.exports = {
	name: 'oldIE-userDataStorage',
	write: write,
	read: read,
	each: each,
	remove: remove,
	clearAll: clearAll,
}

var storageName = 'storejs'
var doc = Global.document
var _withStorageEl = _makeIEStorageElFunction()
var disable = (Global.navigator ? Global.navigator.userAgent : '').match(/ (MSIE 8|MSIE 9|MSIE 10)\./) // MSIE 9.x, MSIE 10.x

function write(unfixedKey, data) {
	if (disable) { return }
	var fixedKey = fixKey(unfixedKey)
	_withStorageEl(function(storageEl) {
		storageEl.setAttribute(fixedKey, data)
		storageEl.save(storageName)
	})
}

function read(unfixedKey) {
	if (disable) { return }
	var fixedKey = fixKey(unfixedKey)
	var res = null
	_withStorageEl(function(storageEl) {
		res = storageEl.getAttribute(fixedKey)
	})
	return res
}

function each(callback) {
	_withStorageEl(function(storageEl) {
		var attributes = storageEl.XMLDocument.documentElement.attributes
		for (var i=attributes.length-1; i>=0; i--) {
			var attr = attributes[i]
			callback(storageEl.getAttribute(attr.name), attr.name)
		}
	})
}

function remove(unfixedKey) {
	var fixedKey = fixKey(unfixedKey)
	_withStorageEl(function(storageEl) {
		storageEl.removeAttribute(fixedKey)
		storageEl.save(storageName)
	})
}

function clearAll() {
	_withStorageEl(function(storageEl) {
		var attributes = storageEl.XMLDocument.documentElement.attributes
		storageEl.load(storageName)
		for (var i=attributes.length-1; i>=0; i--) {
			storageEl.removeAttribute(attributes[i].name)
		}
		storageEl.save(storageName)
	})
}

// Helpers
//////////

// In IE7, keys cannot start with a digit or contain certain chars.
// See https://github.com/marcuswestin/store.js/issues/40
// See https://github.com/marcuswestin/store.js/issues/83
var forbiddenCharsRegex = new RegExp("[!\"#$%&'()*+,/\\\\:;<=>?@[\\]^`{|}~]", "g")
function fixKey(key) {
	return key.replace(/^\d/, '___$&').replace(forbiddenCharsRegex, '___')
}

function _makeIEStorageElFunction() {
	if (!doc || !doc.documentElement || !doc.documentElement.addBehavior) {
		return null
	}
	var scriptTag = 'script',
		storageOwner,
		storageContainer,
		storageEl

	// Since #userData storage applies only to specific paths, we need to
	// somehow link our data to a specific path.  We choose /favicon.ico
	// as a pretty safe option, since all browsers already make a request to
	// this URL anyway and being a 404 will not hurt us here.  We wrap an
	// iframe pointing to the favicon in an ActiveXObject(htmlfile) object
	// (see: http://msdn.microsoft.com/en-us/library/aa752574(v=VS.85).aspx)
	// since the iframe access rules appear to allow direct access and
	// manipulation of the document element, even for a 404 page.  This
	// document can be used instead of the current document (which would
	// have been limited to the current path) to perform #userData storage.
	try {
		/* global ActiveXObject */
		storageContainer = new ActiveXObject('htmlfile')
		storageContainer.open()
		storageContainer.write('<'+scriptTag+'>document.w=window</'+scriptTag+'><iframe src="/favicon.ico"></iframe>')
		storageContainer.close()
		storageOwner = storageContainer.w.frames[0].document
		storageEl = storageOwner.createElement('div')
	} catch(e) {
		// somehow ActiveXObject instantiation failed (perhaps some special
		// security settings or otherwse), fall back to per-path storage
		storageEl = doc.createElement('div')
		storageOwner = doc.body
	}

	return function(storeFunction) {
		var args = [].slice.call(arguments, 0)
		args.unshift(storageEl)
		// See http://msdn.microsoft.com/en-us/library/ms531081(v=VS.85).aspx
		// and http://msdn.microsoft.com/en-us/library/ms531424(v=VS.85).aspx
		storageOwner.appendChild(storageEl)
		storageEl.addBehavior('#default#userData')
		storageEl.load(storageName)
		storeFunction.apply(this, args)
		storageOwner.removeChild(storageEl)
		return
	}
}


/***/ }),

/***/ "./node_modules/store-js/storages/sessionStorage.js":
/*!**********************************************************!*\
  !*** ./node_modules/store-js/storages/sessionStorage.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var util = __webpack_require__(/*! ../src/util */ "./node_modules/store-js/src/util.js")
var Global = util.Global

module.exports = {
	name: 'sessionStorage',
	read: read,
	write: write,
	each: each,
	remove: remove,
	clearAll: clearAll,
}

function sessionStorage() {
	return Global.sessionStorage
}

function read(key) {
	return sessionStorage().getItem(key)
}

function write(key, data) {
	return sessionStorage().setItem(key, data)
}

function each(fn) {
	for (var i = sessionStorage().length - 1; i >= 0; i--) {
		var key = sessionStorage().key(i)
		fn(read(key), key)
	}
}

function remove(key) {
	return sessionStorage().removeItem(key)
}

function clearAll() {
	return sessionStorage().clear()
}


/***/ }),

/***/ "./pages/components/ResourceList.js":
/*!******************************************!*\
  !*** ./pages/components/ResourceList.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-apollo */ "./node_modules/react-apollo/lib/react-apollo.esm.js");
/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @shopify/polaris */ "./node_modules/@shopify/polaris/dist/esm/index.js");
/* harmony import */ var store_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! store-js */ "./node_modules/store-js/dist/store.legacy.js");
/* harmony import */ var store_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(store_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _shopify_app_bridge_actions__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @shopify/app-bridge/actions */ "./node_modules/@shopify/app-bridge/actions/index.js");
/* harmony import */ var _shopify_app_bridge_actions__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_shopify_app_bridge_actions__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @shopify/app-bridge-react */ "./node_modules/@shopify/app-bridge-react/index.js");
/* harmony import */ var _shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_13__);







var _jsxFileName = "C:\\Users\\Matt\\OneDrive\\Web Development\\Projects\\Shopify Apps\\wishlistapp\\pages\\components\\ResourceList.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _templateObject() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_6__["default"])(["\n  query getProducts($ids: [ID!]!) {\n    nodes(ids: $ids) {\n      ... on Product {\n        title\n        handle\n        descriptionHtml\n        id\n        images(first: 1) {\n          edges {\n            node {\n              originalSrc\n              altText\n            }\n          }\n        }\n        variants(first: 1) {\n          edges {\n            node {\n              price\n              id\n            }\n          }\n        }\n      }\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}







 // GraphQL query to retrieve products by IDs.
// The price field belongs to the variants object because
// variations of a product can have different prices.

var GET_PRODUCTS_BY_ID = graphql_tag__WEBPACK_IMPORTED_MODULE_8___default()(_templateObject());

var ResourceListWithProducts = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(ResourceListWithProducts, _React$Component);

  var _super = _createSuper(ResourceListWithProducts);

  function ResourceListWithProducts() {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, ResourceListWithProducts);

    return _super.apply(this, arguments);
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(ResourceListWithProducts, [{
    key: "render",
    value: function render() {
      var _this = this;

      var app = this.context;
      return (// GraphQL query to retrieve products and their prices
        __jsx(react_apollo__WEBPACK_IMPORTED_MODULE_9__["Query"], {
          query: GET_PRODUCTS_BY_ID,
          variables: {
            ids: store_js__WEBPACK_IMPORTED_MODULE_14___default.a.get("ids")
          },
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 55,
            columnNumber: 7
          }
        }, function (_ref) {
          var data = _ref.data,
              loading = _ref.loading,
              error = _ref.error;
          if (loading) return __jsx("div", {
            __self: _this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 57,
              columnNumber: 31
            }
          }, "Loading\u2026");
          if (error) return __jsx("div", {
            __self: _this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 58,
              columnNumber: 29
            }
          }, error.message);
          return __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_10__["Card"], {
            __self: _this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 61,
              columnNumber: 13
            }
          }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_10__["ResourceList"] // Defines your resource list component
          , {
            showHeader: true,
            resourceName: {
              singular: "Product",
              plural: "Products"
            },
            items: data.nodes,
            renderItem: function renderItem(item) {
              var media = __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_10__["Thumbnail"], {
                source: item.images.edges[0] ? item.images.edges[0].node.originalSrc : "",
                alt: item.images.edges[0] ? item.images.edges[0].node.altText : "",
                __self: _this,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 68,
                  columnNumber: 21
                }
              });

              var price = item.variants.edges[0].node.price;
              return __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_10__["ResourceList"].Item, {
                id: item.id,
                media: media,
                accessibilityLabel: "View details for ".concat(item.title),
                onClick: function onClick() {
                  store_js__WEBPACK_IMPORTED_MODULE_14___default.a.set("item", item);
                },
                __self: _this,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 83,
                  columnNumber: 21
                }
              }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_10__["Stack"], {
                __self: _this,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 91,
                  columnNumber: 23
                }
              }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_10__["Stack"].Item, {
                fill: true,
                __self: _this,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 92,
                  columnNumber: 25
                }
              }, __jsx("h3", {
                __self: _this,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 93,
                  columnNumber: 27
                }
              }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_10__["TextStyle"], {
                variation: "strong",
                __self: _this,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 94,
                  columnNumber: 29
                }
              }, item.title))), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_10__["Stack"].Item, {
                __self: _this,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 99,
                  columnNumber: 25
                }
              }, __jsx("p", {
                __self: _this,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 100,
                  columnNumber: 27
                }
              }, "$", price))));
            },
            __self: _this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 62,
              columnNumber: 15
            }
          }));
        })
      );
    }
  }]);

  return ResourceListWithProducts;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(ResourceListWithProducts, "contextType", _shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_13__["Context"]);

/* harmony default export */ __webpack_exports__["default"] = (ResourceListWithProducts);

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @shopify/polaris */ "./node_modules/@shopify/polaris/dist/esm/index.js");
/* harmony import */ var _shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @shopify/app-bridge-react */ "./node_modules/@shopify/app-bridge-react/index.js");
/* harmony import */ var _shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var store_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! store-js */ "./node_modules/store-js/dist/store.legacy.js");
/* harmony import */ var store_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(store_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _components_ResourceList__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/ResourceList */ "./pages/components/ResourceList.js");







var _jsxFileName = "C:\\Users\\Matt\\OneDrive\\Web Development\\Projects\\Shopify Apps\\wishlistapp\\pages\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }






var img = "https://cdn.shopify.com/s/files/1/0757/9955/files/empty-state.svg";

var Index = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(Index, _React$Component);

  var _super = _createSuper(Index);

  function Index() {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Index);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "state", {
      open: false
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "handleSelection", function (resources) {
      var idsFromResources = resources.selection.map(function (product) {
        return product.id;
      });

      _this.setState({
        open: false
      });

      store_js__WEBPACK_IMPORTED_MODULE_10___default.a.set("ids", idsFromResources);
    });

    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Index, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      // A constant that defines your app's empty state
      var emptyState = !store_js__WEBPACK_IMPORTED_MODULE_10___default.a.get("ids");
      return __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_8__["Page"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15,
          columnNumber: 7
        }
      }, __jsx(_shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_9__["TitleBar"], {
        primaryAction: {
          content: "Select products",
          onAction: function onAction() {
            return _this2.setState({
              open: true
            });
          }
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16,
          columnNumber: 9
        }
      }), __jsx(_shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_9__["ResourcePicker"], {
        resourceType: "Product",
        showVariants: false,
        open: this.state.open,
        onSelection: function onSelection(resources) {
          return _this2.handleSelection(resources);
        },
        onCancel: function onCancel() {
          return _this2.setState({
            open: false
          });
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 9
        }
      }), emptyState ? // Controls the layout of your app's empty state
      __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_8__["Layout"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 11
        }
      }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_8__["EmptyState"], {
        heading: "Discount your products temporarily",
        action: {
          content: "Select products",
          onAction: function onAction() {
            return _this2.setState({
              open: true
            });
          }
        },
        image: img,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 13
        }
      }, __jsx("p", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 15
        }
      }, "Select products to change their price temporarily."))) : // Uses the new resource list that retrieves products by IDs
      __jsx(_components_ResourceList__WEBPACK_IMPORTED_MODULE_11__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 11
        }
      }));
    }
  }]);

  return Index;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Index);

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3RhZ2dlZFRlbXBsYXRlTGl0ZXJhbC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3N0b3JlLWpzL2Rpc3Qvc3RvcmUubGVnYWN5LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvc3RvcmUtanMvcGx1Z2lucy9qc29uMi5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3N0b3JlLWpzL3BsdWdpbnMvbGliL2pzb24yLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvc3RvcmUtanMvc3JjL3N0b3JlLWVuZ2luZS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3N0b3JlLWpzL3NyYy91dGlsLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvc3RvcmUtanMvc3RvcmFnZXMvYWxsLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvc3RvcmUtanMvc3RvcmFnZXMvY29va2llU3RvcmFnZS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3N0b3JlLWpzL3N0b3JhZ2VzL2xvY2FsU3RvcmFnZS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3N0b3JlLWpzL3N0b3JhZ2VzL21lbW9yeVN0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9zdG9yZS1qcy9zdG9yYWdlcy9vbGRGRi1nbG9iYWxTdG9yYWdlLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvc3RvcmUtanMvc3RvcmFnZXMvb2xkSUUtdXNlckRhdGFTdG9yYWdlLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvc3RvcmUtanMvc3RvcmFnZXMvc2Vzc2lvblN0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2NvbXBvbmVudHMvUmVzb3VyY2VMaXN0LmpzIiwid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6WyJHRVRfUFJPRFVDVFNfQllfSUQiLCJncWwiLCJSZXNvdXJjZUxpc3RXaXRoUHJvZHVjdHMiLCJhcHAiLCJjb250ZXh0IiwiaWRzIiwic3RvcmUiLCJnZXQiLCJkYXRhIiwibG9hZGluZyIsImVycm9yIiwibWVzc2FnZSIsInNpbmd1bGFyIiwicGx1cmFsIiwibm9kZXMiLCJpdGVtIiwibWVkaWEiLCJpbWFnZXMiLCJlZGdlcyIsIm5vZGUiLCJvcmlnaW5hbFNyYyIsImFsdFRleHQiLCJwcmljZSIsInZhcmlhbnRzIiwiaWQiLCJ0aXRsZSIsInNldCIsIlJlYWN0IiwiQ29tcG9uZW50IiwiQ29udGV4dCIsImltZyIsIkluZGV4Iiwib3BlbiIsInJlc291cmNlcyIsImlkc0Zyb21SZXNvdXJjZXMiLCJzZWxlY3Rpb24iLCJtYXAiLCJwcm9kdWN0Iiwic2V0U3RhdGUiLCJlbXB0eVN0YXRlIiwiY29udGVudCIsIm9uQWN0aW9uIiwic3RhdGUiLCJoYW5kbGVTZWxlY3Rpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQzs7Ozs7Ozs7Ozs7QUNWQSxhQUFhLG1CQUFPLENBQUMsd0VBQXFCOztBQUUxQyxlQUFlLG1CQUFPLENBQUMsZ0VBQWlCO0FBQ3hDLGVBQWUsbUJBQU8sQ0FBQyxrRUFBa0I7O0FBRXpDOzs7Ozs7Ozs7Ozs7QUNMQTs7QUFFQTtBQUNBLENBQUMsbUJBQU8sQ0FBQyxpRUFBYTtBQUN0QjtBQUNBOzs7Ozs7Ozs7Ozs7QUNMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlFQUF5RTtB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QUFHO0FBQ0gsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILEVBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1IsYUFBYTs7QUFFYjtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBOzs7Ozs7Ozs7Ozs7QUNyTkE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtB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RjtBQWtDRDs7OztFQXZDaUJILDRDQUFLLENBQUNDLFM7O0FBOENYRyxvRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5iYTVkYmQ1ZjEyNmQzOWYwZTYzZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX3RhZ2dlZFRlbXBsYXRlTGl0ZXJhbChzdHJpbmdzLCByYXcpIHtcbiAgaWYgKCFyYXcpIHtcbiAgICByYXcgPSBzdHJpbmdzLnNsaWNlKDApO1xuICB9XG5cbiAgcmV0dXJuIE9iamVjdC5mcmVlemUoT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoc3RyaW5ncywge1xuICAgIHJhdzoge1xuICAgICAgdmFsdWU6IE9iamVjdC5mcmVlemUocmF3KVxuICAgIH1cbiAgfSkpO1xufSIsInZhciBlbmdpbmUgPSByZXF1aXJlKCcuLi9zcmMvc3RvcmUtZW5naW5lJylcclxuXHJcbnZhciBzdG9yYWdlcyA9IHJlcXVpcmUoJy4uL3N0b3JhZ2VzL2FsbCcpXHJcbnZhciBwbHVnaW5zID0gW3JlcXVpcmUoJy4uL3BsdWdpbnMvanNvbjInKV1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gZW5naW5lLmNyZWF0ZVN0b3JlKHN0b3JhZ2VzLCBwbHVnaW5zKVxyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IGpzb24yUGx1Z2luXHJcblxyXG5mdW5jdGlvbiBqc29uMlBsdWdpbigpIHtcclxuXHRyZXF1aXJlKCcuL2xpYi9qc29uMicpXHJcblx0cmV0dXJuIHt9XHJcbn1cclxuIiwiLy8gIGpzb24yLmpzXHJcbi8vICAyMDE2LTEwLTI4XHJcbi8vICBQdWJsaWMgRG9tYWluLlxyXG4vLyAgTk8gV0FSUkFOVFkgRVhQUkVTU0VEIE9SIElNUExJRUQuIFVTRSBBVCBZT1VSIE9XTiBSSVNLLlxyXG4vLyAgU2VlIGh0dHA6Ly93d3cuSlNPTi5vcmcvanMuaHRtbFxyXG4vLyAgVGhpcyBjb2RlIHNob3VsZCBiZSBtaW5pZmllZCBiZWZvcmUgZGVwbG95bWVudC5cclxuLy8gIFNlZSBodHRwOi8vamF2YXNjcmlwdC5jcm9ja2ZvcmQuY29tL2pzbWluLmh0bWxcclxuXHJcbi8vICBVU0UgWU9VUiBPV04gQ09QWS4gSVQgSVMgRVhUUkVNRUxZIFVOV0lTRSBUTyBMT0FEIENPREUgRlJPTSBTRVJWRVJTIFlPVSBET1xyXG4vLyAgTk9UIENPTlRST0wuXHJcblxyXG4vLyAgVGhpcyBmaWxlIGNyZWF0ZXMgYSBnbG9iYWwgSlNPTiBvYmplY3QgY29udGFpbmluZyB0d28gbWV0aG9kczogc3RyaW5naWZ5XHJcbi8vICBhbmQgcGFyc2UuIFRoaXMgZmlsZSBwcm92aWRlcyB0aGUgRVM1IEpTT04gY2FwYWJpbGl0eSB0byBFUzMgc3lzdGVtcy5cclxuLy8gIElmIGEgcHJvamVjdCBtaWdodCBydW4gb24gSUU4IG9yIGVhcmxpZXIsIHRoZW4gdGhpcyBmaWxlIHNob3VsZCBiZSBpbmNsdWRlZC5cclxuLy8gIFRoaXMgZmlsZSBkb2VzIG5vdGhpbmcgb24gRVM1IHN5c3RlbXMuXHJcblxyXG4vLyAgICAgIEpTT04uc3RyaW5naWZ5KHZhbHVlLCByZXBsYWNlciwgc3BhY2UpXHJcbi8vICAgICAgICAgIHZhbHVlICAgICAgIGFueSBKYXZhU2NyaXB0IHZhbHVlLCB1c3VhbGx5IGFuIG9iamVjdCBvciBhcnJheS5cclxuLy8gICAgICAgICAgcmVwbGFjZXIgICAgYW4gb3B0aW9uYWwgcGFyYW1ldGVyIHRoYXQgZGV0ZXJtaW5lcyBob3cgb2JqZWN0XHJcbi8vICAgICAgICAgICAgICAgICAgICAgIHZhbHVlcyBhcmUgc3RyaW5naWZpZWQgZm9yIG9iamVjdHMuIEl0IGNhbiBiZSBhXHJcbi8vICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIG9yIGFuIGFycmF5IG9mIHN0cmluZ3MuXHJcbi8vICAgICAgICAgIHNwYWNlICAgICAgIGFuIG9wdGlvbmFsIHBhcmFtZXRlciB0aGF0IHNwZWNpZmllcyB0aGUgaW5kZW50YXRpb25cclxuLy8gICAgICAgICAgICAgICAgICAgICAgb2YgbmVzdGVkIHN0cnVjdHVyZXMuIElmIGl0IGlzIG9taXR0ZWQsIHRoZSB0ZXh0IHdpbGxcclxuLy8gICAgICAgICAgICAgICAgICAgICAgYmUgcGFja2VkIHdpdGhvdXQgZXh0cmEgd2hpdGVzcGFjZS4gSWYgaXQgaXMgYSBudW1iZXIsXHJcbi8vICAgICAgICAgICAgICAgICAgICAgIGl0IHdpbGwgc3BlY2lmeSB0aGUgbnVtYmVyIG9mIHNwYWNlcyB0byBpbmRlbnQgYXQgZWFjaFxyXG4vLyAgICAgICAgICAgICAgICAgICAgICBsZXZlbC4gSWYgaXQgaXMgYSBzdHJpbmcgKHN1Y2ggYXMgXCJcXHRcIiBvciBcIiZuYnNwO1wiKSxcclxuLy8gICAgICAgICAgICAgICAgICAgICAgaXQgY29udGFpbnMgdGhlIGNoYXJhY3RlcnMgdXNlZCB0byBpbmRlbnQgYXQgZWFjaCBsZXZlbC5cclxuLy8gICAgICAgICAgVGhpcyBtZXRob2QgcHJvZHVjZXMgYSBKU09OIHRleHQgZnJvbSBhIEphdmFTY3JpcHQgdmFsdWUuXHJcbi8vICAgICAgICAgIFdoZW4gYW4gb2JqZWN0IHZhbHVlIGlzIGZvdW5kLCBpZiB0aGUgb2JqZWN0IGNvbnRhaW5zIGEgdG9KU09OXHJcbi8vICAgICAgICAgIG1ldGhvZCwgaXRzIHRvSlNPTiBtZXRob2Qgd2lsbCBiZSBjYWxsZWQgYW5kIHRoZSByZXN1bHQgd2lsbCBiZVxyXG4vLyAgICAgICAgICBzdHJpbmdpZmllZC4gQSB0b0pTT04gbWV0aG9kIGRvZXMgbm90IHNlcmlhbGl6ZTogaXQgcmV0dXJucyB0aGVcclxuLy8gICAgICAgICAgdmFsdWUgcmVwcmVzZW50ZWQgYnkgdGhlIG5hbWUvdmFsdWUgcGFpciB0aGF0IHNob3VsZCBiZSBzZXJpYWxpemVkLFxyXG4vLyAgICAgICAgICBvciB1bmRlZmluZWQgaWYgbm90aGluZyBzaG91bGQgYmUgc2VyaWFsaXplZC4gVGhlIHRvSlNPTiBtZXRob2RcclxuLy8gICAgICAgICAgd2lsbCBiZSBwYXNzZWQgdGhlIGtleSBhc3NvY2lhdGVkIHdpdGggdGhlIHZhbHVlLCBhbmQgdGhpcyB3aWxsIGJlXHJcbi8vICAgICAgICAgIGJvdW5kIHRvIHRoZSB2YWx1ZS5cclxuXHJcbi8vICAgICAgICAgIEZvciBleGFtcGxlLCB0aGlzIHdvdWxkIHNlcmlhbGl6ZSBEYXRlcyBhcyBJU08gc3RyaW5ncy5cclxuXHJcbi8vICAgICAgICAgICAgICBEYXRlLnByb3RvdHlwZS50b0pTT04gPSBmdW5jdGlvbiAoa2V5KSB7XHJcbi8vICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gZihuKSB7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgIC8vIEZvcm1hdCBpbnRlZ2VycyB0byBoYXZlIGF0IGxlYXN0IHR3byBkaWdpdHMuXHJcbi8vICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAobiA8IDEwKVxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcIjBcIiArIG5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgIDogbjtcclxuLy8gICAgICAgICAgICAgICAgICB9XHJcbi8vICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2V0VVRDRnVsbFllYXIoKSAgICsgXCItXCIgK1xyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgZih0aGlzLmdldFVUQ01vbnRoKCkgKyAxKSArIFwiLVwiICtcclxuLy8gICAgICAgICAgICAgICAgICAgICAgIGYodGhpcy5nZXRVVENEYXRlKCkpICAgICAgKyBcIlRcIiArXHJcbi8vICAgICAgICAgICAgICAgICAgICAgICBmKHRoaXMuZ2V0VVRDSG91cnMoKSkgICAgICsgXCI6XCIgK1xyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgZih0aGlzLmdldFVUQ01pbnV0ZXMoKSkgICArIFwiOlwiICtcclxuLy8gICAgICAgICAgICAgICAgICAgICAgIGYodGhpcy5nZXRVVENTZWNvbmRzKCkpICAgKyBcIlpcIjtcclxuLy8gICAgICAgICAgICAgIH07XHJcblxyXG4vLyAgICAgICAgICBZb3UgY2FuIHByb3ZpZGUgYW4gb3B0aW9uYWwgcmVwbGFjZXIgbWV0aG9kLiBJdCB3aWxsIGJlIHBhc3NlZCB0aGVcclxuLy8gICAgICAgICAga2V5IGFuZCB2YWx1ZSBvZiBlYWNoIG1lbWJlciwgd2l0aCB0aGlzIGJvdW5kIHRvIHRoZSBjb250YWluaW5nXHJcbi8vICAgICAgICAgIG9iamVjdC4gVGhlIHZhbHVlIHRoYXQgaXMgcmV0dXJuZWQgZnJvbSB5b3VyIG1ldGhvZCB3aWxsIGJlXHJcbi8vICAgICAgICAgIHNlcmlhbGl6ZWQuIElmIHlvdXIgbWV0aG9kIHJldHVybnMgdW5kZWZpbmVkLCB0aGVuIHRoZSBtZW1iZXIgd2lsbFxyXG4vLyAgICAgICAgICBiZSBleGNsdWRlZCBmcm9tIHRoZSBzZXJpYWxpemF0aW9uLlxyXG5cclxuLy8gICAgICAgICAgSWYgdGhlIHJlcGxhY2VyIHBhcmFtZXRlciBpcyBhbiBhcnJheSBvZiBzdHJpbmdzLCB0aGVuIGl0IHdpbGwgYmVcclxuLy8gICAgICAgICAgdXNlZCB0byBzZWxlY3QgdGhlIG1lbWJlcnMgdG8gYmUgc2VyaWFsaXplZC4gSXQgZmlsdGVycyB0aGUgcmVzdWx0c1xyXG4vLyAgICAgICAgICBzdWNoIHRoYXQgb25seSBtZW1iZXJzIHdpdGgga2V5cyBsaXN0ZWQgaW4gdGhlIHJlcGxhY2VyIGFycmF5IGFyZVxyXG4vLyAgICAgICAgICBzdHJpbmdpZmllZC5cclxuXHJcbi8vICAgICAgICAgIFZhbHVlcyB0aGF0IGRvIG5vdCBoYXZlIEpTT04gcmVwcmVzZW50YXRpb25zLCBzdWNoIGFzIHVuZGVmaW5lZCBvclxyXG4vLyAgICAgICAgICBmdW5jdGlvbnMsIHdpbGwgbm90IGJlIHNlcmlhbGl6ZWQuIFN1Y2ggdmFsdWVzIGluIG9iamVjdHMgd2lsbCBiZVxyXG4vLyAgICAgICAgICBkcm9wcGVkOyBpbiBhcnJheXMgdGhleSB3aWxsIGJlIHJlcGxhY2VkIHdpdGggbnVsbC4gWW91IGNhbiB1c2VcclxuLy8gICAgICAgICAgYSByZXBsYWNlciBmdW5jdGlvbiB0byByZXBsYWNlIHRob3NlIHdpdGggSlNPTiB2YWx1ZXMuXHJcblxyXG4vLyAgICAgICAgICBKU09OLnN0cmluZ2lmeSh1bmRlZmluZWQpIHJldHVybnMgdW5kZWZpbmVkLlxyXG5cclxuLy8gICAgICAgICAgVGhlIG9wdGlvbmFsIHNwYWNlIHBhcmFtZXRlciBwcm9kdWNlcyBhIHN0cmluZ2lmaWNhdGlvbiBvZiB0aGVcclxuLy8gICAgICAgICAgdmFsdWUgdGhhdCBpcyBmaWxsZWQgd2l0aCBsaW5lIGJyZWFrcyBhbmQgaW5kZW50YXRpb24gdG8gbWFrZSBpdFxyXG4vLyAgICAgICAgICBlYXNpZXIgdG8gcmVhZC5cclxuXHJcbi8vICAgICAgICAgIElmIHRoZSBzcGFjZSBwYXJhbWV0ZXIgaXMgYSBub24tZW1wdHkgc3RyaW5nLCB0aGVuIHRoYXQgc3RyaW5nIHdpbGxcclxuLy8gICAgICAgICAgYmUgdXNlZCBmb3IgaW5kZW50YXRpb24uIElmIHRoZSBzcGFjZSBwYXJhbWV0ZXIgaXMgYSBudW1iZXIsIHRoZW5cclxuLy8gICAgICAgICAgdGhlIGluZGVudGF0aW9uIHdpbGwgYmUgdGhhdCBtYW55IHNwYWNlcy5cclxuXHJcbi8vICAgICAgICAgIEV4YW1wbGU6XHJcblxyXG4vLyAgICAgICAgICB0ZXh0ID0gSlNPTi5zdHJpbmdpZnkoW1wiZVwiLCB7cGx1cmlidXM6IFwidW51bVwifV0pO1xyXG4vLyAgICAgICAgICAvLyB0ZXh0IGlzICdbXCJlXCIse1wicGx1cmlidXNcIjpcInVudW1cIn1dJ1xyXG5cclxuLy8gICAgICAgICAgdGV4dCA9IEpTT04uc3RyaW5naWZ5KFtcImVcIiwge3BsdXJpYnVzOiBcInVudW1cIn1dLCBudWxsLCBcIlxcdFwiKTtcclxuLy8gICAgICAgICAgLy8gdGV4dCBpcyAnW1xcblxcdFwiZVwiLFxcblxcdHtcXG5cXHRcXHRcInBsdXJpYnVzXCI6IFwidW51bVwiXFxuXFx0fVxcbl0nXHJcblxyXG4vLyAgICAgICAgICB0ZXh0ID0gSlNPTi5zdHJpbmdpZnkoW25ldyBEYXRlKCldLCBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xyXG4vLyAgICAgICAgICAgICAgcmV0dXJuIHRoaXNba2V5XSBpbnN0YW5jZW9mIERhdGVcclxuLy8gICAgICAgICAgICAgICAgICA/IFwiRGF0ZShcIiArIHRoaXNba2V5XSArIFwiKVwiXHJcbi8vICAgICAgICAgICAgICAgICAgOiB2YWx1ZTtcclxuLy8gICAgICAgICAgfSk7XHJcbi8vICAgICAgICAgIC8vIHRleHQgaXMgJ1tcIkRhdGUoLS0tY3VycmVudCB0aW1lLS0tKVwiXSdcclxuXHJcbi8vICAgICAgSlNPTi5wYXJzZSh0ZXh0LCByZXZpdmVyKVxyXG4vLyAgICAgICAgICBUaGlzIG1ldGhvZCBwYXJzZXMgYSBKU09OIHRleHQgdG8gcHJvZHVjZSBhbiBvYmplY3Qgb3IgYXJyYXkuXHJcbi8vICAgICAgICAgIEl0IGNhbiB0aHJvdyBhIFN5bnRheEVycm9yIGV4Y2VwdGlvbi5cclxuXHJcbi8vICAgICAgICAgIFRoZSBvcHRpb25hbCByZXZpdmVyIHBhcmFtZXRlciBpcyBhIGZ1bmN0aW9uIHRoYXQgY2FuIGZpbHRlciBhbmRcclxuLy8gICAgICAgICAgdHJhbnNmb3JtIHRoZSByZXN1bHRzLiBJdCByZWNlaXZlcyBlYWNoIG9mIHRoZSBrZXlzIGFuZCB2YWx1ZXMsXHJcbi8vICAgICAgICAgIGFuZCBpdHMgcmV0dXJuIHZhbHVlIGlzIHVzZWQgaW5zdGVhZCBvZiB0aGUgb3JpZ2luYWwgdmFsdWUuXHJcbi8vICAgICAgICAgIElmIGl0IHJldHVybnMgd2hhdCBpdCByZWNlaXZlZCwgdGhlbiB0aGUgc3RydWN0dXJlIGlzIG5vdCBtb2RpZmllZC5cclxuLy8gICAgICAgICAgSWYgaXQgcmV0dXJucyB1bmRlZmluZWQgdGhlbiB0aGUgbWVtYmVyIGlzIGRlbGV0ZWQuXHJcblxyXG4vLyAgICAgICAgICBFeGFtcGxlOlxyXG5cclxuLy8gICAgICAgICAgLy8gUGFyc2UgdGhlIHRleHQuIFZhbHVlcyB0aGF0IGxvb2sgbGlrZSBJU08gZGF0ZSBzdHJpbmdzIHdpbGxcclxuLy8gICAgICAgICAgLy8gYmUgY29udmVydGVkIHRvIERhdGUgb2JqZWN0cy5cclxuXHJcbi8vICAgICAgICAgIG15RGF0YSA9IEpTT04ucGFyc2UodGV4dCwgZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcclxuLy8gICAgICAgICAgICAgIHZhciBhO1xyXG4vLyAgICAgICAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gXCJzdHJpbmdcIikge1xyXG4vLyAgICAgICAgICAgICAgICAgIGEgPVxyXG4vLyAgIC9eKFxcZHs0fSktKFxcZHsyfSktKFxcZHsyfSlUKFxcZHsyfSk6KFxcZHsyfSk6KFxcZHsyfSg/OlxcLlxcZCopPylaJC8uZXhlYyh2YWx1ZSk7XHJcbi8vICAgICAgICAgICAgICAgICAgaWYgKGEpIHtcclxuLy8gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBEYXRlKERhdGUuVVRDKCthWzFdLCArYVsyXSAtIDEsICthWzNdLCArYVs0XSxcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICthWzVdLCArYVs2XSkpO1xyXG4vLyAgICAgICAgICAgICAgICAgIH1cclxuLy8gICAgICAgICAgICAgIH1cclxuLy8gICAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcclxuLy8gICAgICAgICAgfSk7XHJcblxyXG4vLyAgICAgICAgICBteURhdGEgPSBKU09OLnBhcnNlKCdbXCJEYXRlKDA5LzA5LzIwMDEpXCJdJywgZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcclxuLy8gICAgICAgICAgICAgIHZhciBkO1xyXG4vLyAgICAgICAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gXCJzdHJpbmdcIiAmJlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICB2YWx1ZS5zbGljZSgwLCA1KSA9PT0gXCJEYXRlKFwiICYmXHJcbi8vICAgICAgICAgICAgICAgICAgICAgIHZhbHVlLnNsaWNlKC0xKSA9PT0gXCIpXCIpIHtcclxuLy8gICAgICAgICAgICAgICAgICBkID0gbmV3IERhdGUodmFsdWUuc2xpY2UoNSwgLTEpKTtcclxuLy8gICAgICAgICAgICAgICAgICBpZiAoZCkge1xyXG4vLyAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZDtcclxuLy8gICAgICAgICAgICAgICAgICB9XHJcbi8vICAgICAgICAgICAgICB9XHJcbi8vICAgICAgICAgICAgICByZXR1cm4gdmFsdWU7XHJcbi8vICAgICAgICAgIH0pO1xyXG5cclxuLy8gIFRoaXMgaXMgYSByZWZlcmVuY2UgaW1wbGVtZW50YXRpb24uIFlvdSBhcmUgZnJlZSB0byBjb3B5LCBtb2RpZnksIG9yXHJcbi8vICByZWRpc3RyaWJ1dGUuXHJcblxyXG4vKmpzbGludFxyXG4gICAgZXZhbCwgZm9yLCB0aGlzXHJcbiovXHJcblxyXG4vKnByb3BlcnR5XHJcbiAgICBKU09OLCBhcHBseSwgY2FsbCwgY2hhckNvZGVBdCwgZ2V0VVRDRGF0ZSwgZ2V0VVRDRnVsbFllYXIsIGdldFVUQ0hvdXJzLFxyXG4gICAgZ2V0VVRDTWludXRlcywgZ2V0VVRDTW9udGgsIGdldFVUQ1NlY29uZHMsIGhhc093blByb3BlcnR5LCBqb2luLFxyXG4gICAgbGFzdEluZGV4LCBsZW5ndGgsIHBhcnNlLCBwcm90b3R5cGUsIHB1c2gsIHJlcGxhY2UsIHNsaWNlLCBzdHJpbmdpZnksXHJcbiAgICB0ZXN0LCB0b0pTT04sIHRvU3RyaW5nLCB2YWx1ZU9mXHJcbiovXHJcblxyXG5cclxuLy8gQ3JlYXRlIGEgSlNPTiBvYmplY3Qgb25seSBpZiBvbmUgZG9lcyBub3QgYWxyZWFkeSBleGlzdC4gV2UgY3JlYXRlIHRoZVxyXG4vLyBtZXRob2RzIGluIGEgY2xvc3VyZSB0byBhdm9pZCBjcmVhdGluZyBnbG9iYWwgdmFyaWFibGVzLlxyXG5cclxuaWYgKHR5cGVvZiBKU09OICE9PSBcIm9iamVjdFwiKSB7XHJcbiAgICBKU09OID0ge307XHJcbn1cclxuXHJcbihmdW5jdGlvbiAoKSB7XHJcbiAgICBcInVzZSBzdHJpY3RcIjtcclxuXHJcbiAgICB2YXIgcnhfb25lID0gL15bXFxdLDp7fVxcc10qJC87XHJcbiAgICB2YXIgcnhfdHdvID0gL1xcXFwoPzpbXCJcXFxcXFwvYmZucnRdfHVbMC05YS1mQS1GXXs0fSkvZztcclxuICAgIHZhciByeF90aHJlZSA9IC9cIlteXCJcXFxcXFxuXFxyXSpcInx0cnVlfGZhbHNlfG51bGx8LT9cXGQrKD86XFwuXFxkKik/KD86W2VFXVsrXFwtXT9cXGQrKT8vZztcclxuICAgIHZhciByeF9mb3VyID0gLyg/Ol58OnwsKSg/OlxccypcXFspKy9nO1xyXG4gICAgdmFyIHJ4X2VzY2FwYWJsZSA9IC9bXFxcXFwiXFx1MDAwMC1cXHUwMDFmXFx1MDA3Zi1cXHUwMDlmXFx1MDBhZFxcdTA2MDAtXFx1MDYwNFxcdTA3MGZcXHUxN2I0XFx1MTdiNVxcdTIwMGMtXFx1MjAwZlxcdTIwMjgtXFx1MjAyZlxcdTIwNjAtXFx1MjA2ZlxcdWZlZmZcXHVmZmYwLVxcdWZmZmZdL2c7XHJcbiAgICB2YXIgcnhfZGFuZ2Vyb3VzID0gL1tcXHUwMDAwXFx1MDBhZFxcdTA2MDAtXFx1MDYwNFxcdTA3MGZcXHUxN2I0XFx1MTdiNVxcdTIwMGMtXFx1MjAwZlxcdTIwMjgtXFx1MjAyZlxcdTIwNjAtXFx1MjA2ZlxcdWZlZmZcXHVmZmYwLVxcdWZmZmZdL2c7XHJcblxyXG4gICAgZnVuY3Rpb24gZihuKSB7XHJcbiAgICAgICAgLy8gRm9ybWF0IGludGVnZXJzIHRvIGhhdmUgYXQgbGVhc3QgdHdvIGRpZ2l0cy5cclxuICAgICAgICByZXR1cm4gbiA8IDEwXHJcbiAgICAgICAgICAgID8gXCIwXCIgKyBuXHJcbiAgICAgICAgICAgIDogbjtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiB0aGlzX3ZhbHVlKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnZhbHVlT2YoKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodHlwZW9mIERhdGUucHJvdG90eXBlLnRvSlNPTiAhPT0gXCJmdW5jdGlvblwiKSB7XHJcblxyXG4gICAgICAgIERhdGUucHJvdG90eXBlLnRvSlNPTiA9IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiBpc0Zpbml0ZSh0aGlzLnZhbHVlT2YoKSlcclxuICAgICAgICAgICAgICAgID8gdGhpcy5nZXRVVENGdWxsWWVhcigpICsgXCItXCIgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmKHRoaXMuZ2V0VVRDTW9udGgoKSArIDEpICsgXCItXCIgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmKHRoaXMuZ2V0VVRDRGF0ZSgpKSArIFwiVFwiICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZih0aGlzLmdldFVUQ0hvdXJzKCkpICsgXCI6XCIgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmKHRoaXMuZ2V0VVRDTWludXRlcygpKSArIFwiOlwiICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZih0aGlzLmdldFVUQ1NlY29uZHMoKSkgKyBcIlpcIlxyXG4gICAgICAgICAgICAgICAgOiBudWxsO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIEJvb2xlYW4ucHJvdG90eXBlLnRvSlNPTiA9IHRoaXNfdmFsdWU7XHJcbiAgICAgICAgTnVtYmVyLnByb3RvdHlwZS50b0pTT04gPSB0aGlzX3ZhbHVlO1xyXG4gICAgICAgIFN0cmluZy5wcm90b3R5cGUudG9KU09OID0gdGhpc192YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICB2YXIgZ2FwO1xyXG4gICAgdmFyIGluZGVudDtcclxuICAgIHZhciBtZXRhO1xyXG4gICAgdmFyIHJlcDtcclxuXHJcblxyXG4gICAgZnVuY3Rpb24gcXVvdGUoc3RyaW5nKSB7XHJcblxyXG4vLyBJZiB0aGUgc3RyaW5nIGNvbnRhaW5zIG5vIGNvbnRyb2wgY2hhcmFjdGVycywgbm8gcXVvdGUgY2hhcmFjdGVycywgYW5kIG5vXHJcbi8vIGJhY2tzbGFzaCBjaGFyYWN0ZXJzLCB0aGVuIHdlIGNhbiBzYWZlbHkgc2xhcCBzb21lIHF1b3RlcyBhcm91bmQgaXQuXHJcbi8vIE90aGVyd2lzZSB3ZSBtdXN0IGFsc28gcmVwbGFjZSB0aGUgb2ZmZW5kaW5nIGNoYXJhY3RlcnMgd2l0aCBzYWZlIGVzY2FwZVxyXG4vLyBzZXF1ZW5jZXMuXHJcblxyXG4gICAgICAgIHJ4X2VzY2FwYWJsZS5sYXN0SW5kZXggPSAwO1xyXG4gICAgICAgIHJldHVybiByeF9lc2NhcGFibGUudGVzdChzdHJpbmcpXHJcbiAgICAgICAgICAgID8gXCJcXFwiXCIgKyBzdHJpbmcucmVwbGFjZShyeF9lc2NhcGFibGUsIGZ1bmN0aW9uIChhKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgYyA9IG1ldGFbYV07XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHlwZW9mIGMgPT09IFwic3RyaW5nXCJcclxuICAgICAgICAgICAgICAgICAgICA/IGNcclxuICAgICAgICAgICAgICAgICAgICA6IFwiXFxcXHVcIiArIChcIjAwMDBcIiArIGEuY2hhckNvZGVBdCgwKS50b1N0cmluZygxNikpLnNsaWNlKC00KTtcclxuICAgICAgICAgICAgfSkgKyBcIlxcXCJcIlxyXG4gICAgICAgICAgICA6IFwiXFxcIlwiICsgc3RyaW5nICsgXCJcXFwiXCI7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGZ1bmN0aW9uIHN0cihrZXksIGhvbGRlcikge1xyXG5cclxuLy8gUHJvZHVjZSBhIHN0cmluZyBmcm9tIGhvbGRlcltrZXldLlxyXG5cclxuICAgICAgICB2YXIgaTsgICAgICAgICAgLy8gVGhlIGxvb3AgY291bnRlci5cclxuICAgICAgICB2YXIgazsgICAgICAgICAgLy8gVGhlIG1lbWJlciBrZXkuXHJcbiAgICAgICAgdmFyIHY7ICAgICAgICAgIC8vIFRoZSBtZW1iZXIgdmFsdWUuXHJcbiAgICAgICAgdmFyIGxlbmd0aDtcclxuICAgICAgICB2YXIgbWluZCA9IGdhcDtcclxuICAgICAgICB2YXIgcGFydGlhbDtcclxuICAgICAgICB2YXIgdmFsdWUgPSBob2xkZXJba2V5XTtcclxuXHJcbi8vIElmIHRoZSB2YWx1ZSBoYXMgYSB0b0pTT04gbWV0aG9kLCBjYWxsIGl0IHRvIG9idGFpbiBhIHJlcGxhY2VtZW50IHZhbHVlLlxyXG5cclxuICAgICAgICBpZiAodmFsdWUgJiYgdHlwZW9mIHZhbHVlID09PSBcIm9iamVjdFwiICYmXHJcbiAgICAgICAgICAgICAgICB0eXBlb2YgdmFsdWUudG9KU09OID09PSBcImZ1bmN0aW9uXCIpIHtcclxuICAgICAgICAgICAgdmFsdWUgPSB2YWx1ZS50b0pTT04oa2V5KTtcclxuICAgICAgICB9XHJcblxyXG4vLyBJZiB3ZSB3ZXJlIGNhbGxlZCB3aXRoIGEgcmVwbGFjZXIgZnVuY3Rpb24sIHRoZW4gY2FsbCB0aGUgcmVwbGFjZXIgdG9cclxuLy8gb2J0YWluIGEgcmVwbGFjZW1lbnQgdmFsdWUuXHJcblxyXG4gICAgICAgIGlmICh0eXBlb2YgcmVwID09PSBcImZ1bmN0aW9uXCIpIHtcclxuICAgICAgICAgICAgdmFsdWUgPSByZXAuY2FsbChob2xkZXIsIGtleSwgdmFsdWUpO1xyXG4gICAgICAgIH1cclxuXHJcbi8vIFdoYXQgaGFwcGVucyBuZXh0IGRlcGVuZHMgb24gdGhlIHZhbHVlJ3MgdHlwZS5cclxuXHJcbiAgICAgICAgc3dpdGNoICh0eXBlb2YgdmFsdWUpIHtcclxuICAgICAgICBjYXNlIFwic3RyaW5nXCI6XHJcbiAgICAgICAgICAgIHJldHVybiBxdW90ZSh2YWx1ZSk7XHJcblxyXG4gICAgICAgIGNhc2UgXCJudW1iZXJcIjpcclxuXHJcbi8vIEpTT04gbnVtYmVycyBtdXN0IGJlIGZpbml0ZS4gRW5jb2RlIG5vbi1maW5pdGUgbnVtYmVycyBhcyBudWxsLlxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIGlzRmluaXRlKHZhbHVlKVxyXG4gICAgICAgICAgICAgICAgPyBTdHJpbmcodmFsdWUpXHJcbiAgICAgICAgICAgICAgICA6IFwibnVsbFwiO1xyXG5cclxuICAgICAgICBjYXNlIFwiYm9vbGVhblwiOlxyXG4gICAgICAgIGNhc2UgXCJudWxsXCI6XHJcblxyXG4vLyBJZiB0aGUgdmFsdWUgaXMgYSBib29sZWFuIG9yIG51bGwsIGNvbnZlcnQgaXQgdG8gYSBzdHJpbmcuIE5vdGU6XHJcbi8vIHR5cGVvZiBudWxsIGRvZXMgbm90IHByb2R1Y2UgXCJudWxsXCIuIFRoZSBjYXNlIGlzIGluY2x1ZGVkIGhlcmUgaW5cclxuLy8gdGhlIHJlbW90ZSBjaGFuY2UgdGhhdCB0aGlzIGdldHMgZml4ZWQgc29tZWRheS5cclxuXHJcbiAgICAgICAgICAgIHJldHVybiBTdHJpbmcodmFsdWUpO1xyXG5cclxuLy8gSWYgdGhlIHR5cGUgaXMgXCJvYmplY3RcIiwgd2UgbWlnaHQgYmUgZGVhbGluZyB3aXRoIGFuIG9iamVjdCBvciBhbiBhcnJheSBvclxyXG4vLyBudWxsLlxyXG5cclxuICAgICAgICBjYXNlIFwib2JqZWN0XCI6XHJcblxyXG4vLyBEdWUgdG8gYSBzcGVjaWZpY2F0aW9uIGJsdW5kZXIgaW4gRUNNQVNjcmlwdCwgdHlwZW9mIG51bGwgaXMgXCJvYmplY3RcIixcclxuLy8gc28gd2F0Y2ggb3V0IGZvciB0aGF0IGNhc2UuXHJcblxyXG4gICAgICAgICAgICBpZiAoIXZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJudWxsXCI7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbi8vIE1ha2UgYW4gYXJyYXkgdG8gaG9sZCB0aGUgcGFydGlhbCByZXN1bHRzIG9mIHN0cmluZ2lmeWluZyB0aGlzIG9iamVjdCB2YWx1ZS5cclxuXHJcbiAgICAgICAgICAgIGdhcCArPSBpbmRlbnQ7XHJcbiAgICAgICAgICAgIHBhcnRpYWwgPSBbXTtcclxuXHJcbi8vIElzIHRoZSB2YWx1ZSBhbiBhcnJheT9cclxuXHJcbiAgICAgICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmFwcGx5KHZhbHVlKSA9PT0gXCJbb2JqZWN0IEFycmF5XVwiKSB7XHJcblxyXG4vLyBUaGUgdmFsdWUgaXMgYW4gYXJyYXkuIFN0cmluZ2lmeSBldmVyeSBlbGVtZW50LiBVc2UgbnVsbCBhcyBhIHBsYWNlaG9sZGVyXHJcbi8vIGZvciBub24tSlNPTiB2YWx1ZXMuXHJcblxyXG4gICAgICAgICAgICAgICAgbGVuZ3RoID0gdmFsdWUubGVuZ3RoO1xyXG4gICAgICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IGxlbmd0aDsgaSArPSAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFydGlhbFtpXSA9IHN0cihpLCB2YWx1ZSkgfHwgXCJudWxsXCI7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4vLyBKb2luIGFsbCBvZiB0aGUgZWxlbWVudHMgdG9nZXRoZXIsIHNlcGFyYXRlZCB3aXRoIGNvbW1hcywgYW5kIHdyYXAgdGhlbSBpblxyXG4vLyBicmFja2V0cy5cclxuXHJcbiAgICAgICAgICAgICAgICB2ID0gcGFydGlhbC5sZW5ndGggPT09IDBcclxuICAgICAgICAgICAgICAgICAgICA/IFwiW11cIlxyXG4gICAgICAgICAgICAgICAgICAgIDogZ2FwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID8gXCJbXFxuXCIgKyBnYXAgKyBwYXJ0aWFsLmpvaW4oXCIsXFxuXCIgKyBnYXApICsgXCJcXG5cIiArIG1pbmQgKyBcIl1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA6IFwiW1wiICsgcGFydGlhbC5qb2luKFwiLFwiKSArIFwiXVwiO1xyXG4gICAgICAgICAgICAgICAgZ2FwID0gbWluZDtcclxuICAgICAgICAgICAgICAgIHJldHVybiB2O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4vLyBJZiB0aGUgcmVwbGFjZXIgaXMgYW4gYXJyYXksIHVzZSBpdCB0byBzZWxlY3QgdGhlIG1lbWJlcnMgdG8gYmUgc3RyaW5naWZpZWQuXHJcblxyXG4gICAgICAgICAgICBpZiAocmVwICYmIHR5cGVvZiByZXAgPT09IFwib2JqZWN0XCIpIHtcclxuICAgICAgICAgICAgICAgIGxlbmd0aCA9IHJlcC5sZW5ndGg7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbGVuZ3RoOyBpICs9IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHJlcFtpXSA9PT0gXCJzdHJpbmdcIikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBrID0gcmVwW2ldO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2ID0gc3RyKGssIHZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHYpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcnRpYWwucHVzaChxdW90ZShrKSArIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnYXBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcIjogXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcIjpcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSArIHYpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG5cclxuLy8gT3RoZXJ3aXNlLCBpdGVyYXRlIHRocm91Z2ggYWxsIG9mIHRoZSBrZXlzIGluIHRoZSBvYmplY3QuXHJcblxyXG4gICAgICAgICAgICAgICAgZm9yIChrIGluIHZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbCh2YWx1ZSwgaykpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdiA9IHN0cihrLCB2YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh2KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJ0aWFsLnB1c2gocXVvdGUoaykgKyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2FwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCI6IFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCI6XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgKyB2KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuLy8gSm9pbiBhbGwgb2YgdGhlIG1lbWJlciB0ZXh0cyB0b2dldGhlciwgc2VwYXJhdGVkIHdpdGggY29tbWFzLFxyXG4vLyBhbmQgd3JhcCB0aGVtIGluIGJyYWNlcy5cclxuXHJcbiAgICAgICAgICAgIHYgPSBwYXJ0aWFsLmxlbmd0aCA9PT0gMFxyXG4gICAgICAgICAgICAgICAgPyBcInt9XCJcclxuICAgICAgICAgICAgICAgIDogZ2FwXHJcbiAgICAgICAgICAgICAgICAgICAgPyBcIntcXG5cIiArIGdhcCArIHBhcnRpYWwuam9pbihcIixcXG5cIiArIGdhcCkgKyBcIlxcblwiICsgbWluZCArIFwifVwiXHJcbiAgICAgICAgICAgICAgICAgICAgOiBcIntcIiArIHBhcnRpYWwuam9pbihcIixcIikgKyBcIn1cIjtcclxuICAgICAgICAgICAgZ2FwID0gbWluZDtcclxuICAgICAgICAgICAgcmV0dXJuIHY7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuLy8gSWYgdGhlIEpTT04gb2JqZWN0IGRvZXMgbm90IHlldCBoYXZlIGEgc3RyaW5naWZ5IG1ldGhvZCwgZ2l2ZSBpdCBvbmUuXHJcblxyXG4gICAgaWYgKHR5cGVvZiBKU09OLnN0cmluZ2lmeSAhPT0gXCJmdW5jdGlvblwiKSB7XHJcbiAgICAgICAgbWV0YSA9IHsgICAgLy8gdGFibGUgb2YgY2hhcmFjdGVyIHN1YnN0aXR1dGlvbnNcclxuICAgICAgICAgICAgXCJcXGJcIjogXCJcXFxcYlwiLFxyXG4gICAgICAgICAgICBcIlxcdFwiOiBcIlxcXFx0XCIsXHJcbiAgICAgICAgICAgIFwiXFxuXCI6IFwiXFxcXG5cIixcclxuICAgICAgICAgICAgXCJcXGZcIjogXCJcXFxcZlwiLFxyXG4gICAgICAgICAgICBcIlxcclwiOiBcIlxcXFxyXCIsXHJcbiAgICAgICAgICAgIFwiXFxcIlwiOiBcIlxcXFxcXFwiXCIsXHJcbiAgICAgICAgICAgIFwiXFxcXFwiOiBcIlxcXFxcXFxcXCJcclxuICAgICAgICB9O1xyXG4gICAgICAgIEpTT04uc3RyaW5naWZ5ID0gZnVuY3Rpb24gKHZhbHVlLCByZXBsYWNlciwgc3BhY2UpIHtcclxuXHJcbi8vIFRoZSBzdHJpbmdpZnkgbWV0aG9kIHRha2VzIGEgdmFsdWUgYW5kIGFuIG9wdGlvbmFsIHJlcGxhY2VyLCBhbmQgYW4gb3B0aW9uYWxcclxuLy8gc3BhY2UgcGFyYW1ldGVyLCBhbmQgcmV0dXJucyBhIEpTT04gdGV4dC4gVGhlIHJlcGxhY2VyIGNhbiBiZSBhIGZ1bmN0aW9uXHJcbi8vIHRoYXQgY2FuIHJlcGxhY2UgdmFsdWVzLCBvciBhbiBhcnJheSBvZiBzdHJpbmdzIHRoYXQgd2lsbCBzZWxlY3QgdGhlIGtleXMuXHJcbi8vIEEgZGVmYXVsdCByZXBsYWNlciBtZXRob2QgY2FuIGJlIHByb3ZpZGVkLiBVc2Ugb2YgdGhlIHNwYWNlIHBhcmFtZXRlciBjYW5cclxuLy8gcHJvZHVjZSB0ZXh0IHRoYXQgaXMgbW9yZSBlYXNpbHkgcmVhZGFibGUuXHJcblxyXG4gICAgICAgICAgICB2YXIgaTtcclxuICAgICAgICAgICAgZ2FwID0gXCJcIjtcclxuICAgICAgICAgICAgaW5kZW50ID0gXCJcIjtcclxuXHJcbi8vIElmIHRoZSBzcGFjZSBwYXJhbWV0ZXIgaXMgYSBudW1iZXIsIG1ha2UgYW4gaW5kZW50IHN0cmluZyBjb250YWluaW5nIHRoYXRcclxuLy8gbWFueSBzcGFjZXMuXHJcblxyXG4gICAgICAgICAgICBpZiAodHlwZW9mIHNwYWNlID09PSBcIm51bWJlclwiKSB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgc3BhY2U7IGkgKz0gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGluZGVudCArPSBcIiBcIjtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbi8vIElmIHRoZSBzcGFjZSBwYXJhbWV0ZXIgaXMgYSBzdHJpbmcsIGl0IHdpbGwgYmUgdXNlZCBhcyB0aGUgaW5kZW50IHN0cmluZy5cclxuXHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIHNwYWNlID09PSBcInN0cmluZ1wiKSB7XHJcbiAgICAgICAgICAgICAgICBpbmRlbnQgPSBzcGFjZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuLy8gSWYgdGhlcmUgaXMgYSByZXBsYWNlciwgaXQgbXVzdCBiZSBhIGZ1bmN0aW9uIG9yIGFuIGFycmF5LlxyXG4vLyBPdGhlcndpc2UsIHRocm93IGFuIGVycm9yLlxyXG5cclxuICAgICAgICAgICAgcmVwID0gcmVwbGFjZXI7XHJcbiAgICAgICAgICAgIGlmIChyZXBsYWNlciAmJiB0eXBlb2YgcmVwbGFjZXIgIT09IFwiZnVuY3Rpb25cIiAmJlxyXG4gICAgICAgICAgICAgICAgICAgICh0eXBlb2YgcmVwbGFjZXIgIT09IFwib2JqZWN0XCIgfHxcclxuICAgICAgICAgICAgICAgICAgICB0eXBlb2YgcmVwbGFjZXIubGVuZ3RoICE9PSBcIm51bWJlclwiKSkge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiSlNPTi5zdHJpbmdpZnlcIik7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbi8vIE1ha2UgYSBmYWtlIHJvb3Qgb2JqZWN0IGNvbnRhaW5pbmcgb3VyIHZhbHVlIHVuZGVyIHRoZSBrZXkgb2YgXCJcIi5cclxuLy8gUmV0dXJuIHRoZSByZXN1bHQgb2Ygc3RyaW5naWZ5aW5nIHRoZSB2YWx1ZS5cclxuXHJcbiAgICAgICAgICAgIHJldHVybiBzdHIoXCJcIiwge1wiXCI6IHZhbHVlfSk7XHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcblxyXG4vLyBJZiB0aGUgSlNPTiBvYmplY3QgZG9lcyBub3QgeWV0IGhhdmUgYSBwYXJzZSBtZXRob2QsIGdpdmUgaXQgb25lLlxyXG5cclxuICAgIGlmICh0eXBlb2YgSlNPTi5wYXJzZSAhPT0gXCJmdW5jdGlvblwiKSB7XHJcbiAgICAgICAgSlNPTi5wYXJzZSA9IGZ1bmN0aW9uICh0ZXh0LCByZXZpdmVyKSB7XHJcblxyXG4vLyBUaGUgcGFyc2UgbWV0aG9kIHRha2VzIGEgdGV4dCBhbmQgYW4gb3B0aW9uYWwgcmV2aXZlciBmdW5jdGlvbiwgYW5kIHJldHVybnNcclxuLy8gYSBKYXZhU2NyaXB0IHZhbHVlIGlmIHRoZSB0ZXh0IGlzIGEgdmFsaWQgSlNPTiB0ZXh0LlxyXG5cclxuICAgICAgICAgICAgdmFyIGo7XHJcblxyXG4gICAgICAgICAgICBmdW5jdGlvbiB3YWxrKGhvbGRlciwga2V5KSB7XHJcblxyXG4vLyBUaGUgd2FsayBtZXRob2QgaXMgdXNlZCB0byByZWN1cnNpdmVseSB3YWxrIHRoZSByZXN1bHRpbmcgc3RydWN0dXJlIHNvXHJcbi8vIHRoYXQgbW9kaWZpY2F0aW9ucyBjYW4gYmUgbWFkZS5cclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgaztcclxuICAgICAgICAgICAgICAgIHZhciB2O1xyXG4gICAgICAgICAgICAgICAgdmFyIHZhbHVlID0gaG9sZGVyW2tleV07XHJcbiAgICAgICAgICAgICAgICBpZiAodmFsdWUgJiYgdHlwZW9mIHZhbHVlID09PSBcIm9iamVjdFwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yIChrIGluIHZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwodmFsdWUsIGspKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2ID0gd2Fsayh2YWx1ZSwgayk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodiAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVba10gPSB2O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWxldGUgdmFsdWVba107XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcmV2aXZlci5jYWxsKGhvbGRlciwga2V5LCB2YWx1ZSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcblxyXG4vLyBQYXJzaW5nIGhhcHBlbnMgaW4gZm91ciBzdGFnZXMuIEluIHRoZSBmaXJzdCBzdGFnZSwgd2UgcmVwbGFjZSBjZXJ0YWluXHJcbi8vIFVuaWNvZGUgY2hhcmFjdGVycyB3aXRoIGVzY2FwZSBzZXF1ZW5jZXMuIEphdmFTY3JpcHQgaGFuZGxlcyBtYW55IGNoYXJhY3RlcnNcclxuLy8gaW5jb3JyZWN0bHksIGVpdGhlciBzaWxlbnRseSBkZWxldGluZyB0aGVtLCBvciB0cmVhdGluZyB0aGVtIGFzIGxpbmUgZW5kaW5ncy5cclxuXHJcbiAgICAgICAgICAgIHRleHQgPSBTdHJpbmcodGV4dCk7XHJcbiAgICAgICAgICAgIHJ4X2Rhbmdlcm91cy5sYXN0SW5kZXggPSAwO1xyXG4gICAgICAgICAgICBpZiAocnhfZGFuZ2Vyb3VzLnRlc3QodGV4dCkpIHtcclxuICAgICAgICAgICAgICAgIHRleHQgPSB0ZXh0LnJlcGxhY2UocnhfZGFuZ2Vyb3VzLCBmdW5jdGlvbiAoYSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBcIlxcXFx1XCIgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKFwiMDAwMFwiICsgYS5jaGFyQ29kZUF0KDApLnRvU3RyaW5nKDE2KSkuc2xpY2UoLTQpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbi8vIEluIHRoZSBzZWNvbmQgc3RhZ2UsIHdlIHJ1biB0aGUgdGV4dCBhZ2FpbnN0IHJlZ3VsYXIgZXhwcmVzc2lvbnMgdGhhdCBsb29rXHJcbi8vIGZvciBub24tSlNPTiBwYXR0ZXJucy4gV2UgYXJlIGVzcGVjaWFsbHkgY29uY2VybmVkIHdpdGggXCIoKVwiIGFuZCBcIm5ld1wiXHJcbi8vIGJlY2F1c2UgdGhleSBjYW4gY2F1c2UgaW52b2NhdGlvbiwgYW5kIFwiPVwiIGJlY2F1c2UgaXQgY2FuIGNhdXNlIG11dGF0aW9uLlxyXG4vLyBCdXQganVzdCB0byBiZSBzYWZlLCB3ZSB3YW50IHRvIHJlamVjdCBhbGwgdW5leHBlY3RlZCBmb3Jtcy5cclxuXHJcbi8vIFdlIHNwbGl0IHRoZSBzZWNvbmQgc3RhZ2UgaW50byA0IHJlZ2V4cCBvcGVyYXRpb25zIGluIG9yZGVyIHRvIHdvcmsgYXJvdW5kXHJcbi8vIGNyaXBwbGluZyBpbmVmZmljaWVuY2llcyBpbiBJRSdzIGFuZCBTYWZhcmkncyByZWdleHAgZW5naW5lcy4gRmlyc3Qgd2VcclxuLy8gcmVwbGFjZSB0aGUgSlNPTiBiYWNrc2xhc2ggcGFpcnMgd2l0aCBcIkBcIiAoYSBub24tSlNPTiBjaGFyYWN0ZXIpLiBTZWNvbmQsIHdlXHJcbi8vIHJlcGxhY2UgYWxsIHNpbXBsZSB2YWx1ZSB0b2tlbnMgd2l0aCBcIl1cIiBjaGFyYWN0ZXJzLiBUaGlyZCwgd2UgZGVsZXRlIGFsbFxyXG4vLyBvcGVuIGJyYWNrZXRzIHRoYXQgZm9sbG93IGEgY29sb24gb3IgY29tbWEgb3IgdGhhdCBiZWdpbiB0aGUgdGV4dC4gRmluYWxseSxcclxuLy8gd2UgbG9vayB0byBzZWUgdGhhdCB0aGUgcmVtYWluaW5nIGNoYXJhY3RlcnMgYXJlIG9ubHkgd2hpdGVzcGFjZSBvciBcIl1cIiBvclxyXG4vLyBcIixcIiBvciBcIjpcIiBvciBcIntcIiBvciBcIn1cIi4gSWYgdGhhdCBpcyBzbywgdGhlbiB0aGUgdGV4dCBpcyBzYWZlIGZvciBldmFsLlxyXG5cclxuICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICAgcnhfb25lLnRlc3QoXHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAucmVwbGFjZShyeF90d28sIFwiQFwiKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAucmVwbGFjZShyeF90aHJlZSwgXCJdXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5yZXBsYWNlKHJ4X2ZvdXIsIFwiXCIpXHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICkge1xyXG5cclxuLy8gSW4gdGhlIHRoaXJkIHN0YWdlIHdlIHVzZSB0aGUgZXZhbCBmdW5jdGlvbiB0byBjb21waWxlIHRoZSB0ZXh0IGludG8gYVxyXG4vLyBKYXZhU2NyaXB0IHN0cnVjdHVyZS4gVGhlIFwie1wiIG9wZXJhdG9yIGlzIHN1YmplY3QgdG8gYSBzeW50YWN0aWMgYW1iaWd1aXR5XHJcbi8vIGluIEphdmFTY3JpcHQ6IGl0IGNhbiBiZWdpbiBhIGJsb2NrIG9yIGFuIG9iamVjdCBsaXRlcmFsLiBXZSB3cmFwIHRoZSB0ZXh0XHJcbi8vIGluIHBhcmVucyB0byBlbGltaW5hdGUgdGhlIGFtYmlndWl0eS5cclxuXHJcbiAgICAgICAgICAgICAgICBqID0gZXZhbChcIihcIiArIHRleHQgKyBcIilcIik7XHJcblxyXG4vLyBJbiB0aGUgb3B0aW9uYWwgZm91cnRoIHN0YWdlLCB3ZSByZWN1cnNpdmVseSB3YWxrIHRoZSBuZXcgc3RydWN0dXJlLCBwYXNzaW5nXHJcbi8vIGVhY2ggbmFtZS92YWx1ZSBwYWlyIHRvIGEgcmV2aXZlciBmdW5jdGlvbiBmb3IgcG9zc2libGUgdHJhbnNmb3JtYXRpb24uXHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuICh0eXBlb2YgcmV2aXZlciA9PT0gXCJmdW5jdGlvblwiKVxyXG4gICAgICAgICAgICAgICAgICAgID8gd2Fsayh7XCJcIjogan0sIFwiXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgOiBqO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4vLyBJZiB0aGUgdGV4dCBpcyBub3QgSlNPTiBwYXJzZWFibGUsIHRoZW4gYSBTeW50YXhFcnJvciBpcyB0aHJvd24uXHJcblxyXG4gICAgICAgICAgICB0aHJvdyBuZXcgU3ludGF4RXJyb3IoXCJKU09OLnBhcnNlXCIpO1xyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbn0oKSk7IiwidmFyIHV0aWwgPSByZXF1aXJlKCcuL3V0aWwnKVxyXG52YXIgc2xpY2UgPSB1dGlsLnNsaWNlXHJcbnZhciBwbHVjayA9IHV0aWwucGx1Y2tcclxudmFyIGVhY2ggPSB1dGlsLmVhY2hcclxudmFyIGNyZWF0ZSA9IHV0aWwuY3JlYXRlXHJcbnZhciBpc0xpc3QgPSB1dGlsLmlzTGlzdFxyXG52YXIgaXNGdW5jdGlvbiA9IHV0aWwuaXNGdW5jdGlvblxyXG52YXIgaXNPYmplY3QgPSB1dGlsLmlzT2JqZWN0XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHtcclxuXHRjcmVhdGVTdG9yZTogY3JlYXRlU3RvcmUsXHJcbn1cclxuXHJcbnZhciBzdG9yZUFQSSA9IHtcclxuXHR2ZXJzaW9uOiAnMi4wLjMnLFxyXG5cdGVuYWJsZWQ6IGZhbHNlLFxyXG5cdFxyXG5cdC8vIGFkZFN0b3JhZ2UgYWRkcyBhbm90aGVyIHN0b3JhZ2UgdG8gdGhpcyBzdG9yZS4gVGhlIHN0b3JlXHJcblx0Ly8gd2lsbCB1c2UgdGhlIGZpcnN0IHN0b3JhZ2UgaXQgcmVjZWl2ZXMgdGhhdCBpcyBlbmFibGVkLCBzb1xyXG5cdC8vIGNhbGwgYWRkU3RvcmFnZSBpbiB0aGUgb3JkZXIgb2YgcHJlZmVycmVkIHN0b3JhZ2UuXHJcblx0YWRkU3RvcmFnZTogZnVuY3Rpb24oc3RvcmFnZSkge1xyXG5cdFx0aWYgKHRoaXMuZW5hYmxlZCkgeyByZXR1cm4gfVxyXG5cdFx0aWYgKHRoaXMuX3Rlc3RTdG9yYWdlKHN0b3JhZ2UpKSB7XHJcblx0XHRcdHRoaXMuX3N0b3JhZ2UucmVzb2x2ZWQgPSBzdG9yYWdlXHJcblx0XHRcdHRoaXMuZW5hYmxlZCA9IHRydWVcclxuXHRcdH1cclxuXHR9LFxyXG5cclxuXHQvLyBhZGRQbHVnaW4gd2lsbCBhZGQgYSBwbHVnaW4gdG8gdGhpcyBzdG9yZS5cclxuXHRhZGRQbHVnaW46IGZ1bmN0aW9uKHBsdWdpbikge1xyXG5cdFx0dmFyIHNlbGYgPSB0aGlzXHJcblxyXG5cdFx0Ly8gSWYgdGhlIHBsdWdpbiBpcyBhbiBhcnJheSwgdGhlbiBhZGQgYWxsIHBsdWdpbnMgaW4gdGhlIGFycmF5LlxyXG5cdFx0Ly8gVGhpcyBhbGxvd3MgZm9yIGEgcGx1Z2luIHRvIGRlcGVuZCBvbiBvdGhlciBwbHVnaW5zLlxyXG5cdFx0aWYgKGlzTGlzdChwbHVnaW4pKSB7XHJcblx0XHRcdGVhY2gocGx1Z2luLCBmdW5jdGlvbihwbHVnaW4pIHtcclxuXHRcdFx0XHRzZWxmLmFkZFBsdWdpbihwbHVnaW4pXHJcblx0XHRcdH0pXHJcblx0XHRcdHJldHVyblxyXG5cdFx0fVxyXG5cclxuXHRcdC8vIEtlZXAgdHJhY2sgb2YgYWxsIHBsdWdpbnMgd2UndmUgc2VlbiBzbyBmYXIsIHNvIHRoYXQgd2VcclxuXHRcdC8vIGRvbid0IGFkZCBhbnkgb2YgdGhlbSB0d2ljZS5cclxuXHRcdHZhciBzZWVuUGx1Z2luID0gcGx1Y2sodGhpcy5fc2VlblBsdWdpbnMsIGZ1bmN0aW9uKHNlZW5QbHVnaW4pIHsgcmV0dXJuIChwbHVnaW4gPT09IHNlZW5QbHVnaW4pIH0pXHJcblx0XHRpZiAoc2VlblBsdWdpbikge1xyXG5cdFx0XHRyZXR1cm5cclxuXHRcdH1cclxuXHRcdHRoaXMuX3NlZW5QbHVnaW5zLnB1c2gocGx1Z2luKVxyXG5cclxuXHRcdC8vIENoZWNrIHRoYXQgdGhlIHBsdWdpbiBpcyBwcm9wZXJseSBmb3JtZWRcclxuXHRcdGlmICghaXNGdW5jdGlvbihwbHVnaW4pKSB7XHJcblx0XHRcdHRocm93IG5ldyBFcnJvcignUGx1Z2lucyBtdXN0IGJlIGZ1bmN0aW9uIHZhbHVlcyB0aGF0IHJldHVybiBvYmplY3RzJylcclxuXHRcdH1cclxuXHJcblx0XHR2YXIgcGx1Z2luUHJvcGVydGllcyA9IHBsdWdpbi5jYWxsKHRoaXMpXHJcblx0XHRpZiAoIWlzT2JqZWN0KHBsdWdpblByb3BlcnRpZXMpKSB7XHJcblx0XHRcdHRocm93IG5ldyBFcnJvcignUGx1Z2lucyBtdXN0IHJldHVybiBhbiBvYmplY3Qgb2YgZnVuY3Rpb24gcHJvcGVydGllcycpXHJcblx0XHR9XHJcblxyXG5cdFx0Ly8gQWRkIHRoZSBwbHVnaW4gZnVuY3Rpb24gcHJvcGVydGllcyB0byB0aGlzIHN0b3JlIGluc3RhbmNlLlxyXG5cdFx0ZWFjaChwbHVnaW5Qcm9wZXJ0aWVzLCBmdW5jdGlvbihwbHVnaW5GblByb3AsIHByb3BOYW1lKSB7XHJcblx0XHRcdGlmICghaXNGdW5jdGlvbihwbHVnaW5GblByb3ApKSB7XHJcblx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKCdCYWQgcGx1Z2luIHByb3BlcnR5OiAnK3Byb3BOYW1lKycgZnJvbSBwbHVnaW4gJytwbHVnaW4ubmFtZSsnLiBQbHVnaW5zIHNob3VsZCBvbmx5IHJldHVybiBmdW5jdGlvbnMuJylcclxuXHRcdFx0fVxyXG5cdFx0XHRzZWxmLl9hc3NpZ25QbHVnaW5GblByb3AocGx1Z2luRm5Qcm9wLCBwcm9wTmFtZSlcclxuXHRcdH0pXHJcblx0fSxcclxuXHJcblx0Ly8gZ2V0IHJldHVybnMgdGhlIHZhbHVlIG9mIHRoZSBnaXZlbiBrZXkuIElmIHRoYXQgdmFsdWVcclxuXHQvLyBpcyB1bmRlZmluZWQsIGl0IHJldHVybnMgb3B0aW9uYWxEZWZhdWx0VmFsdWUgaW5zdGVhZC5cclxuXHRnZXQ6IGZ1bmN0aW9uKGtleSwgb3B0aW9uYWxEZWZhdWx0VmFsdWUpIHtcclxuXHRcdHZhciBkYXRhID0gdGhpcy5fc3RvcmFnZSgpLnJlYWQodGhpcy5fbmFtZXNwYWNlUHJlZml4ICsga2V5KVxyXG5cdFx0cmV0dXJuIHRoaXMuX2Rlc2VyaWFsaXplKGRhdGEsIG9wdGlvbmFsRGVmYXVsdFZhbHVlKVxyXG5cdH0sXHJcblxyXG5cdC8vIHNldCB3aWxsIHN0b3JlIHRoZSBnaXZlbiB2YWx1ZSBhdCBrZXkgYW5kIHJldHVybnMgdmFsdWUuXHJcblx0Ly8gQ2FsbGluZyBzZXQgd2l0aCB2YWx1ZSA9PT0gdW5kZWZpbmVkIGlzIGVxdWl2YWxlbnQgdG8gY2FsbGluZyByZW1vdmUuXHJcblx0c2V0OiBmdW5jdGlvbihrZXksIHZhbHVlKSB7XHJcblx0XHRpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xyXG5cdFx0XHRyZXR1cm4gdGhpcy5yZW1vdmUoa2V5KVxyXG5cdFx0fVxyXG5cdFx0dGhpcy5fc3RvcmFnZSgpLndyaXRlKHRoaXMuX25hbWVzcGFjZVByZWZpeCArIGtleSwgdGhpcy5fc2VyaWFsaXplKHZhbHVlKSlcclxuXHRcdHJldHVybiB2YWx1ZVxyXG5cdH0sXHJcblxyXG5cdC8vIHJlbW92ZSBkZWxldGVzIHRoZSBrZXkgYW5kIHZhbHVlIHN0b3JlZCBhdCB0aGUgZ2l2ZW4ga2V5LlxyXG5cdHJlbW92ZTogZnVuY3Rpb24oa2V5KSB7XHJcblx0XHR0aGlzLl9zdG9yYWdlKCkucmVtb3ZlKHRoaXMuX25hbWVzcGFjZVByZWZpeCArIGtleSlcclxuXHR9LFxyXG5cclxuXHQvLyBlYWNoIHdpbGwgY2FsbCB0aGUgZ2l2ZW4gY2FsbGJhY2sgb25jZSBmb3IgZWFjaCBrZXktdmFsdWUgcGFpclxyXG5cdC8vIGluIHRoaXMgc3RvcmUuXHJcblx0ZWFjaDogZnVuY3Rpb24oY2FsbGJhY2spIHtcclxuXHRcdHZhciBzZWxmID0gdGhpc1xyXG5cdFx0dGhpcy5fc3RvcmFnZSgpLmVhY2goZnVuY3Rpb24odmFsLCBuYW1lc3BhY2VkS2V5KSB7XHJcblx0XHRcdGNhbGxiYWNrKHNlbGYuX2Rlc2VyaWFsaXplKHZhbCksIG5hbWVzcGFjZWRLZXkucmVwbGFjZShzZWxmLl9uYW1lc3BhY2VSZWdleHAsICcnKSlcclxuXHRcdH0pXHJcblx0fSxcclxuXHJcblx0Ly8gY2xlYXJBbGwgd2lsbCByZW1vdmUgYWxsIHRoZSBzdG9yZWQga2V5LXZhbHVlIHBhaXJzIGluIHRoaXMgc3RvcmUuXHJcblx0Y2xlYXJBbGw6IGZ1bmN0aW9uKCkge1xyXG5cdFx0dGhpcy5fc3RvcmFnZSgpLmNsZWFyQWxsKClcclxuXHR9LFxyXG5cclxuXHQvLyBhZGRpdGlvbmFsIGZ1bmN0aW9uYWxpdHkgdGhhdCBjYW4ndCBsaXZlIGluIHBsdWdpbnNcclxuXHQvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcblx0Ly8gaGFzTmFtZXNwYWNlIHJldHVybnMgdHJ1ZSBpZiB0aGlzIHN0b3JlIGluc3RhbmNlIGhhcyB0aGUgZ2l2ZW4gbmFtZXNwYWNlLlxyXG5cdGhhc05hbWVzcGFjZTogZnVuY3Rpb24obmFtZXNwYWNlKSB7XHJcblx0XHRyZXR1cm4gKHRoaXMuX25hbWVzcGFjZVByZWZpeCA9PSAnX19zdG9yZWpzXycrbmFtZXNwYWNlKydfJylcclxuXHR9LFxyXG5cclxuXHQvLyBuYW1lc3BhY2UgY2xvbmVzIHRoZSBjdXJyZW50IHN0b3JlIGFuZCBhc3NpZ25zIGl0IHRoZSBnaXZlbiBuYW1lc3BhY2VcclxuXHRuYW1lc3BhY2U6IGZ1bmN0aW9uKG5hbWVzcGFjZSkge1xyXG5cdFx0aWYgKCF0aGlzLl9sZWdhbE5hbWVzcGFjZS50ZXN0KG5hbWVzcGFjZSkpIHtcclxuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCdzdG9yZS5qcyBuYW1lc3BhY2VzIGNhbiBvbmx5IGhhdmUgYWxocGFudW1lcmljcyArIHVuZGVyc2NvcmVzIGFuZCBkYXNoZXMnKVxyXG5cdFx0fVxyXG5cdFx0Ly8gY3JlYXRlIGEgcHJlZml4IHRoYXQgaXMgdmVyeSB1bmxpa2VseSB0byBjb2xsaWRlIHdpdGggdW4tbmFtZXNwYWNlZCBrZXlzXHJcblx0XHR2YXIgbmFtZXNwYWNlUHJlZml4ID0gJ19fc3RvcmVqc18nK25hbWVzcGFjZSsnXydcclxuXHRcdHJldHVybiBjcmVhdGUodGhpcywge1xyXG5cdFx0XHRfbmFtZXNwYWNlUHJlZml4OiBuYW1lc3BhY2VQcmVmaXgsXHJcblx0XHRcdF9uYW1lc3BhY2VSZWdleHA6IG5hbWVzcGFjZVByZWZpeCA/IG5ldyBSZWdFeHAoJ14nK25hbWVzcGFjZVByZWZpeCkgOiBudWxsXHJcblx0XHR9KVxyXG5cdH0sXHJcblxyXG5cdC8vIGNyZWF0ZVN0b3JlIGNyZWF0ZXMgYSBzdG9yZS5qcyBpbnN0YW5jZSB3aXRoIHRoZSBmaXJzdFxyXG5cdC8vIGZ1bmN0aW9uaW5nIHN0b3JhZ2UgaW4gdGhlIGxpc3Qgb2Ygc3RvcmFnZSBjYW5kaWRhdGVzLFxyXG5cdC8vIGFuZCBhcHBsaWVzIHRoZSB0aGUgZ2l2ZW4gbWl4aW5zIHRvIHRoZSBpbnN0YW5jZS5cclxuXHRjcmVhdGVTdG9yZTogZnVuY3Rpb24oc3RvcmFnZXMsIHBsdWdpbnMpIHtcclxuXHRcdHJldHVybiBjcmVhdGVTdG9yZShzdG9yYWdlcywgcGx1Z2lucylcclxuXHR9LFxyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVTdG9yZShzdG9yYWdlcywgcGx1Z2lucykge1xyXG5cdHZhciBfcHJpdmF0ZVN0b3JlUHJvcHMgPSB7XHJcblx0XHRfc2VlblBsdWdpbnM6IFtdLFxyXG5cdFx0X25hbWVzcGFjZVByZWZpeDogJycsXHJcblx0XHRfbmFtZXNwYWNlUmVnZXhwOiBudWxsLFxyXG5cdFx0X2xlZ2FsTmFtZXNwYWNlOiAvXlthLXpBLVowLTlfXFwtXSskLywgLy8gYWxwaGEtbnVtZXJpYyArIHVuZGVyc2NvcmUgYW5kIGRhc2hcclxuXHJcblx0XHRfc3RvcmFnZTogZnVuY3Rpb24oKSB7XHJcblx0XHRcdGlmICghdGhpcy5lbmFibGVkKSB7XHJcblx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKFwic3RvcmUuanM6IE5vIHN1cHBvcnRlZCBzdG9yYWdlIGhhcyBiZWVuIGFkZGVkISBcIitcclxuXHRcdFx0XHRcdFwiQWRkIG9uZSAoZS5nIHN0b3JlLmFkZFN0b3JhZ2UocmVxdWlyZSgnc3RvcmUvc3RvcmFnZXMvY29va2llU3RvcmFnZScpKSBcIitcclxuXHRcdFx0XHRcdFwib3IgdXNlIGEgYnVpbGQgd2l0aCBtb3JlIGJ1aWx0LWluIHN0b3JhZ2VzIChlLmcgXCIrXHJcblx0XHRcdFx0XHRcImh0dHBzOi8vZ2l0aHViLmNvbS9tYXJjdXN3ZXN0aW4vc3RvcmUuanMvdHJlZS9tYXN0ZXIvZGlzdC9zdG9yZS5sZWdhY3kubWluLmpzKVwiKVxyXG5cdFx0XHR9XHJcblx0XHRcdHJldHVybiB0aGlzLl9zdG9yYWdlLnJlc29sdmVkXHJcblx0XHR9LFxyXG5cclxuXHRcdF90ZXN0U3RvcmFnZTogZnVuY3Rpb24oc3RvcmFnZSkge1xyXG5cdFx0XHR0cnkge1xyXG5cdFx0XHRcdHZhciB0ZXN0U3RyID0gJ19fc3RvcmVqc19fdGVzdF9fJ1xyXG5cdFx0XHRcdHN0b3JhZ2Uud3JpdGUodGVzdFN0ciwgdGVzdFN0cilcclxuXHRcdFx0XHR2YXIgb2sgPSAoc3RvcmFnZS5yZWFkKHRlc3RTdHIpID09PSB0ZXN0U3RyKVxyXG5cdFx0XHRcdHN0b3JhZ2UucmVtb3ZlKHRlc3RTdHIpXHJcblx0XHRcdFx0cmV0dXJuIG9rXHJcblx0XHRcdH0gY2F0Y2goZSkge1xyXG5cdFx0XHRcdHJldHVybiBmYWxzZVxyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cclxuXHRcdF9hc3NpZ25QbHVnaW5GblByb3A6IGZ1bmN0aW9uKHBsdWdpbkZuUHJvcCwgcHJvcE5hbWUpIHtcclxuXHRcdFx0dmFyIG9sZEZuID0gdGhpc1twcm9wTmFtZV1cclxuXHRcdFx0dGhpc1twcm9wTmFtZV0gPSBmdW5jdGlvbiBwbHVnaW5GbigpIHtcclxuXHRcdFx0XHR2YXIgYXJncyA9IHNsaWNlKGFyZ3VtZW50cywgMClcclxuXHRcdFx0XHR2YXIgc2VsZiA9IHRoaXNcclxuXHJcblx0XHRcdFx0Ly8gc3VwZXJfZm4gY2FsbHMgdGhlIG9sZCBmdW5jdGlvbiB3aGljaCB3YXMgb3ZlcndyaXR0ZW4gYnlcclxuXHRcdFx0XHQvLyB0aGlzIG1peGluLlxyXG5cdFx0XHRcdGZ1bmN0aW9uIHN1cGVyX2ZuKCkge1xyXG5cdFx0XHRcdFx0aWYgKCFvbGRGbikgeyByZXR1cm4gfVxyXG5cdFx0XHRcdFx0ZWFjaChhcmd1bWVudHMsIGZ1bmN0aW9uKGFyZywgaSkge1xyXG5cdFx0XHRcdFx0XHRhcmdzW2ldID0gYXJnXHJcblx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0cmV0dXJuIG9sZEZuLmFwcGx5KHNlbGYsIGFyZ3MpXHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHQvLyBHaXZlIG1peGluZyBmdW5jdGlvbiBhY2Nlc3MgdG8gc3VwZXJfZm4gYnkgcHJlZml4aW5nIGFsbCBtaXhpbiBmdW5jdGlvblxyXG5cdFx0XHRcdC8vIGFyZ3VtZW50cyB3aXRoIHN1cGVyX2ZuLlxyXG5cdFx0XHRcdHZhciBuZXdGbkFyZ3MgPSBbc3VwZXJfZm5dLmNvbmNhdChhcmdzKVxyXG5cclxuXHRcdFx0XHRyZXR1cm4gcGx1Z2luRm5Qcm9wLmFwcGx5KHNlbGYsIG5ld0ZuQXJncylcclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHJcblx0XHRfc2VyaWFsaXplOiBmdW5jdGlvbihvYmopIHtcclxuXHRcdFx0cmV0dXJuIEpTT04uc3RyaW5naWZ5KG9iailcclxuXHRcdH0sXHJcblxyXG5cdFx0X2Rlc2VyaWFsaXplOiBmdW5jdGlvbihzdHJWYWwsIGRlZmF1bHRWYWwpIHtcclxuXHRcdFx0aWYgKCFzdHJWYWwpIHsgcmV0dXJuIGRlZmF1bHRWYWwgfVxyXG5cdFx0XHQvLyBJdCBpcyBwb3NzaWJsZSB0aGF0IGEgcmF3IHN0cmluZyB2YWx1ZSBoYXMgYmVlbiBwcmV2aW91c2x5IHN0b3JlZFxyXG5cdFx0XHQvLyBpbiBhIHN0b3JhZ2Ugd2l0aG91dCB1c2luZyBzdG9yZS5qcywgbWVhbmluZyBpdCB3aWxsIGJlIGEgcmF3XHJcblx0XHRcdC8vIHN0cmluZyB2YWx1ZSBpbnN0ZWFkIG9mIGEgSlNPTiBzZXJpYWxpemVkIHN0cmluZy4gQnkgZGVmYXVsdGluZ1xyXG5cdFx0XHQvLyB0byB0aGUgcmF3IHN0cmluZyB2YWx1ZSBpbiBjYXNlIG9mIGEgSlNPTiBwYXJzZSBlcnJvciwgd2UgYWxsb3dcclxuXHRcdFx0Ly8gZm9yIHBhc3Qgc3RvcmVkIHZhbHVlcyB0byBiZSBmb3J3YXJkcy1jb21wYXRpYmxlIHdpdGggc3RvcmUuanNcclxuXHRcdFx0dmFyIHZhbCA9ICcnXHJcblx0XHRcdHRyeSB7IHZhbCA9IEpTT04ucGFyc2Uoc3RyVmFsKSB9XHJcblx0XHRcdGNhdGNoKGUpIHsgdmFsID0gc3RyVmFsIH1cclxuXHJcblx0XHRcdHJldHVybiAodmFsICE9PSB1bmRlZmluZWQgPyB2YWwgOiBkZWZhdWx0VmFsKVxyXG5cdFx0fSxcclxuXHR9XHJcblxyXG5cdHZhciBzdG9yZSA9IGNyZWF0ZShfcHJpdmF0ZVN0b3JlUHJvcHMsIHN0b3JlQVBJKVxyXG5cdGVhY2goc3RvcmFnZXMsIGZ1bmN0aW9uKHN0b3JhZ2UpIHtcclxuXHRcdHN0b3JlLmFkZFN0b3JhZ2Uoc3RvcmFnZSlcclxuXHR9KVxyXG5cdGVhY2gocGx1Z2lucywgZnVuY3Rpb24ocGx1Z2luKSB7XHJcblx0XHRzdG9yZS5hZGRQbHVnaW4ocGx1Z2luKVxyXG5cdH0pXHJcblx0cmV0dXJuIHN0b3JlXHJcbn1cclxuIiwidmFyIGFzc2lnbiA9IG1ha2VfYXNzaWduKClcclxudmFyIGNyZWF0ZSA9IG1ha2VfY3JlYXRlKClcclxudmFyIHRyaW0gPSBtYWtlX3RyaW0oKVxyXG52YXIgR2xvYmFsID0gKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnID8gd2luZG93IDogZ2xvYmFsKVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSB7XHJcblx0YXNzaWduOiBhc3NpZ24sXHJcblx0Y3JlYXRlOiBjcmVhdGUsXHJcblx0dHJpbTogdHJpbSxcclxuXHRiaW5kOiBiaW5kLFxyXG5cdHNsaWNlOiBzbGljZSxcclxuXHRlYWNoOiBlYWNoLFxyXG5cdG1hcDogbWFwLFxyXG5cdHBsdWNrOiBwbHVjayxcclxuXHRpc0xpc3Q6IGlzTGlzdCxcclxuXHRpc0Z1bmN0aW9uOiBpc0Z1bmN0aW9uLFxyXG5cdGlzT2JqZWN0OiBpc09iamVjdCxcclxuXHRHbG9iYWw6IEdsb2JhbCxcclxufVxyXG5cclxuZnVuY3Rpb24gbWFrZV9hc3NpZ24oKSB7XHJcblx0aWYgKE9iamVjdC5hc3NpZ24pIHtcclxuXHRcdHJldHVybiBPYmplY3QuYXNzaWduXHJcblx0fSBlbHNlIHtcclxuXHRcdHJldHVybiBmdW5jdGlvbiBzaGltQXNzaWduKG9iaiwgcHJvcHMxLCBwcm9wczIsIGV0Yykge1xyXG5cdFx0XHRmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHRcdGVhY2goT2JqZWN0KGFyZ3VtZW50c1tpXSksIGZ1bmN0aW9uKHZhbCwga2V5KSB7XHJcblx0XHRcdFx0XHRvYmpba2V5XSA9IHZhbFxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdH1cdFx0XHRcclxuXHRcdFx0cmV0dXJuIG9ialxyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5cclxuZnVuY3Rpb24gbWFrZV9jcmVhdGUoKSB7XHJcblx0aWYgKE9iamVjdC5jcmVhdGUpIHtcclxuXHRcdHJldHVybiBmdW5jdGlvbiBjcmVhdGUob2JqLCBhc3NpZ25Qcm9wczEsIGFzc2lnblByb3BzMiwgZXRjKSB7XHJcblx0XHRcdHZhciBhc3NpZ25BcmdzTGlzdCA9IHNsaWNlKGFyZ3VtZW50cywgMSlcclxuXHRcdFx0cmV0dXJuIGFzc2lnbi5hcHBseSh0aGlzLCBbT2JqZWN0LmNyZWF0ZShvYmopXS5jb25jYXQoYXNzaWduQXJnc0xpc3QpKVxyXG5cdFx0fVxyXG5cdH0gZWxzZSB7XHJcblx0XHRmdW5jdGlvbiBGKCkge30gLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1pbm5lci1kZWNsYXJhdGlvbnNcclxuXHRcdHJldHVybiBmdW5jdGlvbiBjcmVhdGUob2JqLCBhc3NpZ25Qcm9wczEsIGFzc2lnblByb3BzMiwgZXRjKSB7XHJcblx0XHRcdHZhciBhc3NpZ25BcmdzTGlzdCA9IHNsaWNlKGFyZ3VtZW50cywgMSlcclxuXHRcdFx0Ri5wcm90b3R5cGUgPSBvYmpcclxuXHRcdFx0cmV0dXJuIGFzc2lnbi5hcHBseSh0aGlzLCBbbmV3IEYoKV0uY29uY2F0KGFzc2lnbkFyZ3NMaXN0KSlcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG1ha2VfdHJpbSgpIHtcclxuXHRpZiAoU3RyaW5nLnByb3RvdHlwZS50cmltKSB7XHJcblx0XHRyZXR1cm4gZnVuY3Rpb24gdHJpbShzdHIpIHtcclxuXHRcdFx0cmV0dXJuIFN0cmluZy5wcm90b3R5cGUudHJpbS5jYWxsKHN0cilcclxuXHRcdH1cclxuXHR9IGVsc2Uge1xyXG5cdFx0cmV0dXJuIGZ1bmN0aW9uIHRyaW0oc3RyKSB7XHJcblx0XHRcdHJldHVybiBzdHIucmVwbGFjZSgvXltcXHNcXHVGRUZGXFx4QTBdK3xbXFxzXFx1RkVGRlxceEEwXSskL2csICcnKVxyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5cclxuZnVuY3Rpb24gYmluZChvYmosIGZuKSB7XHJcblx0cmV0dXJuIGZ1bmN0aW9uKCkge1xyXG5cdFx0cmV0dXJuIGZuLmFwcGx5KG9iaiwgQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAwKSlcclxuXHR9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNsaWNlKGFyciwgaW5kZXgpIHtcclxuXHRyZXR1cm4gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJyLCBpbmRleCB8fCAwKVxyXG59XHJcblxyXG5mdW5jdGlvbiBlYWNoKG9iaiwgZm4pIHtcclxuXHRwbHVjayhvYmosIGZ1bmN0aW9uKGtleSwgdmFsKSB7XHJcblx0XHRmbihrZXksIHZhbClcclxuXHRcdHJldHVybiBmYWxzZVxyXG5cdH0pXHJcbn1cclxuXHJcbmZ1bmN0aW9uIG1hcChvYmosIGZuKSB7XHJcblx0dmFyIHJlcyA9IChpc0xpc3Qob2JqKSA/IFtdIDoge30pXHJcblx0cGx1Y2sob2JqLCBmdW5jdGlvbih2LCBrKSB7XHJcblx0XHRyZXNba10gPSBmbih2LCBrKVxyXG5cdFx0cmV0dXJuIGZhbHNlXHJcblx0fSlcclxuXHRyZXR1cm4gcmVzXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHBsdWNrKG9iaiwgZm4pIHtcclxuXHRpZiAoaXNMaXN0KG9iaikpIHtcclxuXHRcdGZvciAodmFyIGk9MDsgaTxvYmoubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0aWYgKGZuKG9ialtpXSwgaSkpIHtcclxuXHRcdFx0XHRyZXR1cm4gb2JqW2ldXHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9IGVsc2Uge1xyXG5cdFx0Zm9yICh2YXIga2V5IGluIG9iaikge1xyXG5cdFx0XHRpZiAob2JqLmhhc093blByb3BlcnR5KGtleSkpIHtcclxuXHRcdFx0XHRpZiAoZm4ob2JqW2tleV0sIGtleSkpIHtcclxuXHRcdFx0XHRcdHJldHVybiBvYmpba2V5XVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5cclxuZnVuY3Rpb24gaXNMaXN0KHZhbCkge1xyXG5cdHJldHVybiAodmFsICE9IG51bGwgJiYgdHlwZW9mIHZhbCAhPSAnZnVuY3Rpb24nICYmIHR5cGVvZiB2YWwubGVuZ3RoID09ICdudW1iZXInKVxyXG59XHJcblxyXG5mdW5jdGlvbiBpc0Z1bmN0aW9uKHZhbCkge1xyXG5cdHJldHVybiB2YWwgJiYge30udG9TdHJpbmcuY2FsbCh2YWwpID09PSAnW29iamVjdCBGdW5jdGlvbl0nXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGlzT2JqZWN0KHZhbCkge1xyXG5cdHJldHVybiB2YWwgJiYge30udG9TdHJpbmcuY2FsbCh2YWwpID09PSAnW29iamVjdCBPYmplY3RdJ1xyXG59XHJcbiIsIm1vZHVsZS5leHBvcnRzID0ge1xyXG5cdC8vIExpc3RlZCBpbiBvcmRlciBvZiB1c2FnZSBwcmVmZXJlbmNlXHJcblx0J2xvY2FsU3RvcmFnZSc6IHJlcXVpcmUoJy4vbG9jYWxTdG9yYWdlJyksXHJcblx0J29sZEZGLWdsb2JhbFN0b3JhZ2UnOiByZXF1aXJlKCcuL29sZEZGLWdsb2JhbFN0b3JhZ2UnKSxcclxuXHQnb2xkSUUtdXNlckRhdGFTdG9yYWdlJzogcmVxdWlyZSgnLi9vbGRJRS11c2VyRGF0YVN0b3JhZ2UnKSxcclxuXHQnY29va2llU3RvcmFnZSc6IHJlcXVpcmUoJy4vY29va2llU3RvcmFnZScpLFxyXG5cdCdzZXNzaW9uU3RvcmFnZSc6IHJlcXVpcmUoJy4vc2Vzc2lvblN0b3JhZ2UnKSxcclxuXHQnbWVtb3J5U3RvcmFnZSc6IHJlcXVpcmUoJy4vbWVtb3J5U3RvcmFnZScpLFxyXG59XHJcbiIsIi8vIGNvb2tpZVN0b3JhZ2UgaXMgdXNlZnVsIFNhZmFyaSBwcml2YXRlIGJyb3dzZXIgbW9kZSwgd2hlcmUgbG9jYWxTdG9yYWdlXHJcbi8vIGRvZXNuJ3Qgd29yayBidXQgY29va2llcyBkby4gVGhpcyBpbXBsZW1lbnRhdGlvbiBpcyBhZG9wdGVkIGZyb21cclxuLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL1N0b3JhZ2UvTG9jYWxTdG9yYWdlXHJcblxyXG52YXIgdXRpbCA9IHJlcXVpcmUoJy4uL3NyYy91dGlsJylcclxudmFyIEdsb2JhbCA9IHV0aWwuR2xvYmFsXHJcbnZhciB0cmltID0gdXRpbC50cmltXHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHtcclxuXHRuYW1lOiAnY29va2llU3RvcmFnZScsXHJcblx0cmVhZDogcmVhZCxcclxuXHR3cml0ZTogd3JpdGUsXHJcblx0ZWFjaDogZWFjaCxcclxuXHRyZW1vdmU6IHJlbW92ZSxcclxuXHRjbGVhckFsbDogY2xlYXJBbGwsXHJcbn1cclxuXHJcbnZhciBkb2MgPSBHbG9iYWwuZG9jdW1lbnRcclxuXHJcbmZ1bmN0aW9uIHJlYWQoa2V5KSB7XHJcblx0aWYgKCFrZXkgfHwgIV9oYXMoa2V5KSkgeyByZXR1cm4gbnVsbCB9XHJcblx0dmFyIHJlZ2V4cFN0ciA9IFwiKD86XnwuKjtcXFxccyopXCIgK1xyXG5cdFx0ZXNjYXBlKGtleSkucmVwbGFjZSgvW1xcLVxcLlxcK1xcKl0vZywgXCJcXFxcJCZcIikgK1xyXG5cdFx0XCJcXFxccypcXFxcPVxcXFxzKigoPzpbXjtdKD8hOykpKlteO10/KS4qXCJcclxuXHRyZXR1cm4gdW5lc2NhcGUoZG9jLmNvb2tpZS5yZXBsYWNlKG5ldyBSZWdFeHAocmVnZXhwU3RyKSwgXCIkMVwiKSlcclxufVxyXG5cclxuZnVuY3Rpb24gZWFjaChjYWxsYmFjaykge1xyXG5cdHZhciBjb29raWVzID0gZG9jLmNvb2tpZS5zcGxpdCgvOyA/L2cpXHJcblx0Zm9yICh2YXIgaSA9IGNvb2tpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcclxuXHRcdGlmICghdHJpbShjb29raWVzW2ldKSkge1xyXG5cdFx0XHRjb250aW51ZVxyXG5cdFx0fVxyXG5cdFx0dmFyIGt2cCA9IGNvb2tpZXNbaV0uc3BsaXQoJz0nKVxyXG5cdFx0dmFyIGtleSA9IHVuZXNjYXBlKGt2cFswXSlcclxuXHRcdHZhciB2YWwgPSB1bmVzY2FwZShrdnBbMV0pXHJcblx0XHRjYWxsYmFjayh2YWwsIGtleSlcclxuXHR9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHdyaXRlKGtleSwgZGF0YSkge1xyXG5cdGlmKCFrZXkpIHsgcmV0dXJuIH1cclxuXHRkb2MuY29va2llID0gZXNjYXBlKGtleSkgKyBcIj1cIiArIGVzY2FwZShkYXRhKSArIFwiOyBleHBpcmVzPVR1ZSwgMTkgSmFuIDIwMzggMDM6MTQ6MDcgR01UOyBwYXRoPS9cIlxyXG59XHJcblxyXG5mdW5jdGlvbiByZW1vdmUoa2V5KSB7XHJcblx0aWYgKCFrZXkgfHwgIV9oYXMoa2V5KSkge1xyXG5cdFx0cmV0dXJuXHJcblx0fVxyXG5cdGRvYy5jb29raWUgPSBlc2NhcGUoa2V5KSArIFwiPTsgZXhwaXJlcz1UaHUsIDAxIEphbiAxOTcwIDAwOjAwOjAwIEdNVDsgcGF0aD0vXCJcclxufVxyXG5cclxuZnVuY3Rpb24gY2xlYXJBbGwoKSB7XHJcblx0ZWFjaChmdW5jdGlvbihfLCBrZXkpIHtcclxuXHRcdHJlbW92ZShrZXkpXHJcblx0fSlcclxufVxyXG5cclxuZnVuY3Rpb24gX2hhcyhrZXkpIHtcclxuXHRyZXR1cm4gKG5ldyBSZWdFeHAoXCIoPzpefDtcXFxccyopXCIgKyBlc2NhcGUoa2V5KS5yZXBsYWNlKC9bXFwtXFwuXFwrXFwqXS9nLCBcIlxcXFwkJlwiKSArIFwiXFxcXHMqXFxcXD1cIikpLnRlc3QoZG9jLmNvb2tpZSlcclxufVxyXG4iLCJ2YXIgdXRpbCA9IHJlcXVpcmUoJy4uL3NyYy91dGlsJylcclxudmFyIEdsb2JhbCA9IHV0aWwuR2xvYmFsXHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHtcclxuXHRuYW1lOiAnbG9jYWxTdG9yYWdlJyxcclxuXHRyZWFkOiByZWFkLFxyXG5cdHdyaXRlOiB3cml0ZSxcclxuXHRlYWNoOiBlYWNoLFxyXG5cdHJlbW92ZTogcmVtb3ZlLFxyXG5cdGNsZWFyQWxsOiBjbGVhckFsbCxcclxufVxyXG5cclxuZnVuY3Rpb24gbG9jYWxTdG9yYWdlKCkge1xyXG5cdHJldHVybiBHbG9iYWwubG9jYWxTdG9yYWdlXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlYWQoa2V5KSB7XHJcblx0cmV0dXJuIGxvY2FsU3RvcmFnZSgpLmdldEl0ZW0oa2V5KVxyXG59XHJcblxyXG5mdW5jdGlvbiB3cml0ZShrZXksIGRhdGEpIHtcclxuXHRyZXR1cm4gbG9jYWxTdG9yYWdlKCkuc2V0SXRlbShrZXksIGRhdGEpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGVhY2goZm4pIHtcclxuXHRmb3IgKHZhciBpID0gbG9jYWxTdG9yYWdlKCkubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcclxuXHRcdHZhciBrZXkgPSBsb2NhbFN0b3JhZ2UoKS5rZXkoaSlcclxuXHRcdGZuKHJlYWQoa2V5KSwga2V5KVxyXG5cdH1cclxufVxyXG5cclxuZnVuY3Rpb24gcmVtb3ZlKGtleSkge1xyXG5cdHJldHVybiBsb2NhbFN0b3JhZ2UoKS5yZW1vdmVJdGVtKGtleSlcclxufVxyXG5cclxuZnVuY3Rpb24gY2xlYXJBbGwoKSB7XHJcblx0cmV0dXJuIGxvY2FsU3RvcmFnZSgpLmNsZWFyKClcclxufVxyXG4iLCIvLyBtZW1vcnlTdG9yYWdlIGlzIGEgdXNlZnVsIGxhc3QgZmFsbGJhY2sgdG8gZW5zdXJlIHRoYXQgdGhlIHN0b3JlXHJcbi8vIGlzIGZ1bmN0aW9ucyAobWVhbmluZyBzdG9yZS5nZXQoKSwgc3RvcmUuc2V0KCksIGV0YyB3aWxsIGFsbCBmdW5jdGlvbikuXHJcbi8vIEhvd2V2ZXIsIHN0b3JlZCB2YWx1ZXMgd2lsbCBub3QgcGVyc2lzdCB3aGVuIHRoZSBicm93c2VyIG5hdmlnYXRlcyB0b1xyXG4vLyBhIG5ldyBwYWdlIG9yIHJlbG9hZHMgdGhlIGN1cnJlbnQgcGFnZS5cclxuXHJcbm1vZHVsZS5leHBvcnRzID0ge1xyXG5cdG5hbWU6ICdtZW1vcnlTdG9yYWdlJyxcclxuXHRyZWFkOiByZWFkLFxyXG5cdHdyaXRlOiB3cml0ZSxcclxuXHRlYWNoOiBlYWNoLFxyXG5cdHJlbW92ZTogcmVtb3ZlLFxyXG5cdGNsZWFyQWxsOiBjbGVhckFsbCxcclxufVxyXG5cclxudmFyIG1lbW9yeVN0b3JhZ2UgPSB7fVxyXG5cclxuZnVuY3Rpb24gcmVhZChrZXkpIHtcclxuXHRyZXR1cm4gbWVtb3J5U3RvcmFnZVtrZXldXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHdyaXRlKGtleSwgZGF0YSkge1xyXG5cdG1lbW9yeVN0b3JhZ2Vba2V5XSA9IGRhdGFcclxufVxyXG5cclxuZnVuY3Rpb24gZWFjaChjYWxsYmFjaykge1xyXG5cdGZvciAodmFyIGtleSBpbiBtZW1vcnlTdG9yYWdlKSB7XHJcblx0XHRpZiAobWVtb3J5U3RvcmFnZS5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XHJcblx0XHRcdGNhbGxiYWNrKG1lbW9yeVN0b3JhZ2Vba2V5XSwga2V5KVxyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5cclxuZnVuY3Rpb24gcmVtb3ZlKGtleSkge1xyXG5cdGRlbGV0ZSBtZW1vcnlTdG9yYWdlW2tleV1cclxufVxyXG5cclxuZnVuY3Rpb24gY2xlYXJBbGwoa2V5KSB7XHJcblx0bWVtb3J5U3RvcmFnZSA9IHt9XHJcbn1cclxuIiwiLy8gb2xkRkYtZ2xvYmFsU3RvcmFnZSBwcm92aWRlcyBzdG9yYWdlIGZvciBGaXJlZm94XHJcbi8vIHZlcnNpb25zIDYgYW5kIDcsIHdoZXJlIG5vIGxvY2FsU3RvcmFnZSwgZXRjXHJcbi8vIGlzIGF2YWlsYWJsZS5cclxuXHJcbnZhciB1dGlsID0gcmVxdWlyZSgnLi4vc3JjL3V0aWwnKVxyXG52YXIgR2xvYmFsID0gdXRpbC5HbG9iYWxcclxuXHJcbm1vZHVsZS5leHBvcnRzID0ge1xyXG5cdG5hbWU6ICdvbGRGRi1nbG9iYWxTdG9yYWdlJyxcclxuXHRyZWFkOiByZWFkLFxyXG5cdHdyaXRlOiB3cml0ZSxcclxuXHRlYWNoOiBlYWNoLFxyXG5cdHJlbW92ZTogcmVtb3ZlLFxyXG5cdGNsZWFyQWxsOiBjbGVhckFsbCxcclxufVxyXG5cclxudmFyIGdsb2JhbFN0b3JhZ2UgPSBHbG9iYWwuZ2xvYmFsU3RvcmFnZVxyXG5cclxuZnVuY3Rpb24gcmVhZChrZXkpIHtcclxuXHRyZXR1cm4gZ2xvYmFsU3RvcmFnZVtrZXldXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHdyaXRlKGtleSwgZGF0YSkge1xyXG5cdGdsb2JhbFN0b3JhZ2Vba2V5XSA9IGRhdGFcclxufVxyXG5cclxuZnVuY3Rpb24gZWFjaChmbikge1xyXG5cdGZvciAodmFyIGkgPSBnbG9iYWxTdG9yYWdlLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XHJcblx0XHR2YXIga2V5ID0gZ2xvYmFsU3RvcmFnZS5rZXkoaSlcclxuXHRcdGZuKGdsb2JhbFN0b3JhZ2Vba2V5XSwga2V5KVxyXG5cdH1cclxufVxyXG5cclxuZnVuY3Rpb24gcmVtb3ZlKGtleSkge1xyXG5cdHJldHVybiBnbG9iYWxTdG9yYWdlLnJlbW92ZUl0ZW0oa2V5KVxyXG59XHJcblxyXG5mdW5jdGlvbiBjbGVhckFsbCgpIHtcclxuXHRlYWNoKGZ1bmN0aW9uKGtleSwgXykge1xyXG5cdFx0ZGVsZXRlIGdsb2JhbFN0b3JhZ2Vba2V5XVxyXG5cdH0pXHJcbn1cclxuIiwiLy8gb2xkSUUtdXNlckRhdGFTdG9yYWdlIHByb3ZpZGVzIHN0b3JhZ2UgZm9yIEludGVybmV0IEV4cGxvcmVyXHJcbi8vIHZlcnNpb25zIDYgYW5kIDcsIHdoZXJlIG5vIGxvY2FsU3RvcmFnZSwgc2Vzc2lvblN0b3JhZ2UsIGV0Y1xyXG4vLyBpcyBhdmFpbGFibGUuXHJcblxyXG52YXIgdXRpbCA9IHJlcXVpcmUoJy4uL3NyYy91dGlsJylcclxudmFyIEdsb2JhbCA9IHV0aWwuR2xvYmFsXHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHtcclxuXHRuYW1lOiAnb2xkSUUtdXNlckRhdGFTdG9yYWdlJyxcclxuXHR3cml0ZTogd3JpdGUsXHJcblx0cmVhZDogcmVhZCxcclxuXHRlYWNoOiBlYWNoLFxyXG5cdHJlbW92ZTogcmVtb3ZlLFxyXG5cdGNsZWFyQWxsOiBjbGVhckFsbCxcclxufVxyXG5cclxudmFyIHN0b3JhZ2VOYW1lID0gJ3N0b3JlanMnXHJcbnZhciBkb2MgPSBHbG9iYWwuZG9jdW1lbnRcclxudmFyIF93aXRoU3RvcmFnZUVsID0gX21ha2VJRVN0b3JhZ2VFbEZ1bmN0aW9uKClcclxudmFyIGRpc2FibGUgPSAoR2xvYmFsLm5hdmlnYXRvciA/IEdsb2JhbC5uYXZpZ2F0b3IudXNlckFnZW50IDogJycpLm1hdGNoKC8gKE1TSUUgOHxNU0lFIDl8TVNJRSAxMClcXC4vKSAvLyBNU0lFIDkueCwgTVNJRSAxMC54XHJcblxyXG5mdW5jdGlvbiB3cml0ZSh1bmZpeGVkS2V5LCBkYXRhKSB7XHJcblx0aWYgKGRpc2FibGUpIHsgcmV0dXJuIH1cclxuXHR2YXIgZml4ZWRLZXkgPSBmaXhLZXkodW5maXhlZEtleSlcclxuXHRfd2l0aFN0b3JhZ2VFbChmdW5jdGlvbihzdG9yYWdlRWwpIHtcclxuXHRcdHN0b3JhZ2VFbC5zZXRBdHRyaWJ1dGUoZml4ZWRLZXksIGRhdGEpXHJcblx0XHRzdG9yYWdlRWwuc2F2ZShzdG9yYWdlTmFtZSlcclxuXHR9KVxyXG59XHJcblxyXG5mdW5jdGlvbiByZWFkKHVuZml4ZWRLZXkpIHtcclxuXHRpZiAoZGlzYWJsZSkgeyByZXR1cm4gfVxyXG5cdHZhciBmaXhlZEtleSA9IGZpeEtleSh1bmZpeGVkS2V5KVxyXG5cdHZhciByZXMgPSBudWxsXHJcblx0X3dpdGhTdG9yYWdlRWwoZnVuY3Rpb24oc3RvcmFnZUVsKSB7XHJcblx0XHRyZXMgPSBzdG9yYWdlRWwuZ2V0QXR0cmlidXRlKGZpeGVkS2V5KVxyXG5cdH0pXHJcblx0cmV0dXJuIHJlc1xyXG59XHJcblxyXG5mdW5jdGlvbiBlYWNoKGNhbGxiYWNrKSB7XHJcblx0X3dpdGhTdG9yYWdlRWwoZnVuY3Rpb24oc3RvcmFnZUVsKSB7XHJcblx0XHR2YXIgYXR0cmlidXRlcyA9IHN0b3JhZ2VFbC5YTUxEb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuYXR0cmlidXRlc1xyXG5cdFx0Zm9yICh2YXIgaT1hdHRyaWJ1dGVzLmxlbmd0aC0xOyBpPj0wOyBpLS0pIHtcclxuXHRcdFx0dmFyIGF0dHIgPSBhdHRyaWJ1dGVzW2ldXHJcblx0XHRcdGNhbGxiYWNrKHN0b3JhZ2VFbC5nZXRBdHRyaWJ1dGUoYXR0ci5uYW1lKSwgYXR0ci5uYW1lKVxyXG5cdFx0fVxyXG5cdH0pXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlbW92ZSh1bmZpeGVkS2V5KSB7XHJcblx0dmFyIGZpeGVkS2V5ID0gZml4S2V5KHVuZml4ZWRLZXkpXHJcblx0X3dpdGhTdG9yYWdlRWwoZnVuY3Rpb24oc3RvcmFnZUVsKSB7XHJcblx0XHRzdG9yYWdlRWwucmVtb3ZlQXR0cmlidXRlKGZpeGVkS2V5KVxyXG5cdFx0c3RvcmFnZUVsLnNhdmUoc3RvcmFnZU5hbWUpXHJcblx0fSlcclxufVxyXG5cclxuZnVuY3Rpb24gY2xlYXJBbGwoKSB7XHJcblx0X3dpdGhTdG9yYWdlRWwoZnVuY3Rpb24oc3RvcmFnZUVsKSB7XHJcblx0XHR2YXIgYXR0cmlidXRlcyA9IHN0b3JhZ2VFbC5YTUxEb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuYXR0cmlidXRlc1xyXG5cdFx0c3RvcmFnZUVsLmxvYWQoc3RvcmFnZU5hbWUpXHJcblx0XHRmb3IgKHZhciBpPWF0dHJpYnV0ZXMubGVuZ3RoLTE7IGk+PTA7IGktLSkge1xyXG5cdFx0XHRzdG9yYWdlRWwucmVtb3ZlQXR0cmlidXRlKGF0dHJpYnV0ZXNbaV0ubmFtZSlcclxuXHRcdH1cclxuXHRcdHN0b3JhZ2VFbC5zYXZlKHN0b3JhZ2VOYW1lKVxyXG5cdH0pXHJcbn1cclxuXHJcbi8vIEhlbHBlcnNcclxuLy8vLy8vLy8vL1xyXG5cclxuLy8gSW4gSUU3LCBrZXlzIGNhbm5vdCBzdGFydCB3aXRoIGEgZGlnaXQgb3IgY29udGFpbiBjZXJ0YWluIGNoYXJzLlxyXG4vLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL21hcmN1c3dlc3Rpbi9zdG9yZS5qcy9pc3N1ZXMvNDBcclxuLy8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9tYXJjdXN3ZXN0aW4vc3RvcmUuanMvaXNzdWVzLzgzXHJcbnZhciBmb3JiaWRkZW5DaGFyc1JlZ2V4ID0gbmV3IFJlZ0V4cChcIlshXFxcIiMkJSYnKCkqKywvXFxcXFxcXFw6Ozw9Pj9AW1xcXFxdXmB7fH1+XVwiLCBcImdcIilcclxuZnVuY3Rpb24gZml4S2V5KGtleSkge1xyXG5cdHJldHVybiBrZXkucmVwbGFjZSgvXlxcZC8sICdfX18kJicpLnJlcGxhY2UoZm9yYmlkZGVuQ2hhcnNSZWdleCwgJ19fXycpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIF9tYWtlSUVTdG9yYWdlRWxGdW5jdGlvbigpIHtcclxuXHRpZiAoIWRvYyB8fCAhZG9jLmRvY3VtZW50RWxlbWVudCB8fCAhZG9jLmRvY3VtZW50RWxlbWVudC5hZGRCZWhhdmlvcikge1xyXG5cdFx0cmV0dXJuIG51bGxcclxuXHR9XHJcblx0dmFyIHNjcmlwdFRhZyA9ICdzY3JpcHQnLFxyXG5cdFx0c3RvcmFnZU93bmVyLFxyXG5cdFx0c3RvcmFnZUNvbnRhaW5lcixcclxuXHRcdHN0b3JhZ2VFbFxyXG5cclxuXHQvLyBTaW5jZSAjdXNlckRhdGEgc3RvcmFnZSBhcHBsaWVzIG9ubHkgdG8gc3BlY2lmaWMgcGF0aHMsIHdlIG5lZWQgdG9cclxuXHQvLyBzb21laG93IGxpbmsgb3VyIGRhdGEgdG8gYSBzcGVjaWZpYyBwYXRoLiAgV2UgY2hvb3NlIC9mYXZpY29uLmljb1xyXG5cdC8vIGFzIGEgcHJldHR5IHNhZmUgb3B0aW9uLCBzaW5jZSBhbGwgYnJvd3NlcnMgYWxyZWFkeSBtYWtlIGEgcmVxdWVzdCB0b1xyXG5cdC8vIHRoaXMgVVJMIGFueXdheSBhbmQgYmVpbmcgYSA0MDQgd2lsbCBub3QgaHVydCB1cyBoZXJlLiAgV2Ugd3JhcCBhblxyXG5cdC8vIGlmcmFtZSBwb2ludGluZyB0byB0aGUgZmF2aWNvbiBpbiBhbiBBY3RpdmVYT2JqZWN0KGh0bWxmaWxlKSBvYmplY3RcclxuXHQvLyAoc2VlOiBodHRwOi8vbXNkbi5taWNyb3NvZnQuY29tL2VuLXVzL2xpYnJhcnkvYWE3NTI1NzQodj1WUy44NSkuYXNweClcclxuXHQvLyBzaW5jZSB0aGUgaWZyYW1lIGFjY2VzcyBydWxlcyBhcHBlYXIgdG8gYWxsb3cgZGlyZWN0IGFjY2VzcyBhbmRcclxuXHQvLyBtYW5pcHVsYXRpb24gb2YgdGhlIGRvY3VtZW50IGVsZW1lbnQsIGV2ZW4gZm9yIGEgNDA0IHBhZ2UuICBUaGlzXHJcblx0Ly8gZG9jdW1lbnQgY2FuIGJlIHVzZWQgaW5zdGVhZCBvZiB0aGUgY3VycmVudCBkb2N1bWVudCAod2hpY2ggd291bGRcclxuXHQvLyBoYXZlIGJlZW4gbGltaXRlZCB0byB0aGUgY3VycmVudCBwYXRoKSB0byBwZXJmb3JtICN1c2VyRGF0YSBzdG9yYWdlLlxyXG5cdHRyeSB7XHJcblx0XHQvKiBnbG9iYWwgQWN0aXZlWE9iamVjdCAqL1xyXG5cdFx0c3RvcmFnZUNvbnRhaW5lciA9IG5ldyBBY3RpdmVYT2JqZWN0KCdodG1sZmlsZScpXHJcblx0XHRzdG9yYWdlQ29udGFpbmVyLm9wZW4oKVxyXG5cdFx0c3RvcmFnZUNvbnRhaW5lci53cml0ZSgnPCcrc2NyaXB0VGFnKyc+ZG9jdW1lbnQudz13aW5kb3c8Lycrc2NyaXB0VGFnKyc+PGlmcmFtZSBzcmM9XCIvZmF2aWNvbi5pY29cIj48L2lmcmFtZT4nKVxyXG5cdFx0c3RvcmFnZUNvbnRhaW5lci5jbG9zZSgpXHJcblx0XHRzdG9yYWdlT3duZXIgPSBzdG9yYWdlQ29udGFpbmVyLncuZnJhbWVzWzBdLmRvY3VtZW50XHJcblx0XHRzdG9yYWdlRWwgPSBzdG9yYWdlT3duZXIuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuXHR9IGNhdGNoKGUpIHtcclxuXHRcdC8vIHNvbWVob3cgQWN0aXZlWE9iamVjdCBpbnN0YW50aWF0aW9uIGZhaWxlZCAocGVyaGFwcyBzb21lIHNwZWNpYWxcclxuXHRcdC8vIHNlY3VyaXR5IHNldHRpbmdzIG9yIG90aGVyd3NlKSwgZmFsbCBiYWNrIHRvIHBlci1wYXRoIHN0b3JhZ2VcclxuXHRcdHN0b3JhZ2VFbCA9IGRvYy5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG5cdFx0c3RvcmFnZU93bmVyID0gZG9jLmJvZHlcclxuXHR9XHJcblxyXG5cdHJldHVybiBmdW5jdGlvbihzdG9yZUZ1bmN0aW9uKSB7XHJcblx0XHR2YXIgYXJncyA9IFtdLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAwKVxyXG5cdFx0YXJncy51bnNoaWZ0KHN0b3JhZ2VFbClcclxuXHRcdC8vIFNlZSBodHRwOi8vbXNkbi5taWNyb3NvZnQuY29tL2VuLXVzL2xpYnJhcnkvbXM1MzEwODEodj1WUy44NSkuYXNweFxyXG5cdFx0Ly8gYW5kIGh0dHA6Ly9tc2RuLm1pY3Jvc29mdC5jb20vZW4tdXMvbGlicmFyeS9tczUzMTQyNCh2PVZTLjg1KS5hc3B4XHJcblx0XHRzdG9yYWdlT3duZXIuYXBwZW5kQ2hpbGQoc3RvcmFnZUVsKVxyXG5cdFx0c3RvcmFnZUVsLmFkZEJlaGF2aW9yKCcjZGVmYXVsdCN1c2VyRGF0YScpXHJcblx0XHRzdG9yYWdlRWwubG9hZChzdG9yYWdlTmFtZSlcclxuXHRcdHN0b3JlRnVuY3Rpb24uYXBwbHkodGhpcywgYXJncylcclxuXHRcdHN0b3JhZ2VPd25lci5yZW1vdmVDaGlsZChzdG9yYWdlRWwpXHJcblx0XHRyZXR1cm5cclxuXHR9XHJcbn1cclxuIiwidmFyIHV0aWwgPSByZXF1aXJlKCcuLi9zcmMvdXRpbCcpXHJcbnZhciBHbG9iYWwgPSB1dGlsLkdsb2JhbFxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSB7XHJcblx0bmFtZTogJ3Nlc3Npb25TdG9yYWdlJyxcclxuXHRyZWFkOiByZWFkLFxyXG5cdHdyaXRlOiB3cml0ZSxcclxuXHRlYWNoOiBlYWNoLFxyXG5cdHJlbW92ZTogcmVtb3ZlLFxyXG5cdGNsZWFyQWxsOiBjbGVhckFsbCxcclxufVxyXG5cclxuZnVuY3Rpb24gc2Vzc2lvblN0b3JhZ2UoKSB7XHJcblx0cmV0dXJuIEdsb2JhbC5zZXNzaW9uU3RvcmFnZVxyXG59XHJcblxyXG5mdW5jdGlvbiByZWFkKGtleSkge1xyXG5cdHJldHVybiBzZXNzaW9uU3RvcmFnZSgpLmdldEl0ZW0oa2V5KVxyXG59XHJcblxyXG5mdW5jdGlvbiB3cml0ZShrZXksIGRhdGEpIHtcclxuXHRyZXR1cm4gc2Vzc2lvblN0b3JhZ2UoKS5zZXRJdGVtKGtleSwgZGF0YSlcclxufVxyXG5cclxuZnVuY3Rpb24gZWFjaChmbikge1xyXG5cdGZvciAodmFyIGkgPSBzZXNzaW9uU3RvcmFnZSgpLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XHJcblx0XHR2YXIga2V5ID0gc2Vzc2lvblN0b3JhZ2UoKS5rZXkoaSlcclxuXHRcdGZuKHJlYWQoa2V5KSwga2V5KVxyXG5cdH1cclxufVxyXG5cclxuZnVuY3Rpb24gcmVtb3ZlKGtleSkge1xyXG5cdHJldHVybiBzZXNzaW9uU3RvcmFnZSgpLnJlbW92ZUl0ZW0oa2V5KVxyXG59XHJcblxyXG5mdW5jdGlvbiBjbGVhckFsbCgpIHtcclxuXHRyZXR1cm4gc2Vzc2lvblN0b3JhZ2UoKS5jbGVhcigpXHJcbn1cclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IGdxbCBmcm9tIFwiZ3JhcGhxbC10YWdcIjtcbmltcG9ydCB7IFF1ZXJ5IH0gZnJvbSBcInJlYWN0LWFwb2xsb1wiO1xuaW1wb3J0IHtcbiAgQ2FyZCxcbiAgUmVzb3VyY2VMaXN0LFxuICBTdGFjayxcbiAgVGV4dFN0eWxlLFxuICBUaHVtYm5haWwsXG59IGZyb20gXCJAc2hvcGlmeS9wb2xhcmlzXCI7XG5pbXBvcnQgc3RvcmUgZnJvbSBcInN0b3JlLWpzXCI7XG5pbXBvcnQgeyBSZWRpcmVjdCB9IGZyb20gXCJAc2hvcGlmeS9hcHAtYnJpZGdlL2FjdGlvbnNcIjtcbmltcG9ydCB7IENvbnRleHQgfSBmcm9tIFwiQHNob3BpZnkvYXBwLWJyaWRnZS1yZWFjdFwiO1xuXG4vLyBHcmFwaFFMIHF1ZXJ5IHRvIHJldHJpZXZlIHByb2R1Y3RzIGJ5IElEcy5cbi8vIFRoZSBwcmljZSBmaWVsZCBiZWxvbmdzIHRvIHRoZSB2YXJpYW50cyBvYmplY3QgYmVjYXVzZVxuLy8gdmFyaWF0aW9ucyBvZiBhIHByb2R1Y3QgY2FuIGhhdmUgZGlmZmVyZW50IHByaWNlcy5cbmNvbnN0IEdFVF9QUk9EVUNUU19CWV9JRCA9IGdxbGBcbiAgcXVlcnkgZ2V0UHJvZHVjdHMoJGlkczogW0lEIV0hKSB7XG4gICAgbm9kZXMoaWRzOiAkaWRzKSB7XG4gICAgICAuLi4gb24gUHJvZHVjdCB7XG4gICAgICAgIHRpdGxlXG4gICAgICAgIGhhbmRsZVxuICAgICAgICBkZXNjcmlwdGlvbkh0bWxcbiAgICAgICAgaWRcbiAgICAgICAgaW1hZ2VzKGZpcnN0OiAxKSB7XG4gICAgICAgICAgZWRnZXMge1xuICAgICAgICAgICAgbm9kZSB7XG4gICAgICAgICAgICAgIG9yaWdpbmFsU3JjXG4gICAgICAgICAgICAgIGFsdFRleHRcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdmFyaWFudHMoZmlyc3Q6IDEpIHtcbiAgICAgICAgICBlZGdlcyB7XG4gICAgICAgICAgICBub2RlIHtcbiAgICAgICAgICAgICAgcHJpY2VcbiAgICAgICAgICAgICAgaWRcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbmA7XG5cbmNsYXNzIFJlc291cmNlTGlzdFdpdGhQcm9kdWN0cyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHN0YXRpYyBjb250ZXh0VHlwZSA9IENvbnRleHQ7XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IGFwcCA9IHRoaXMuY29udGV4dDtcblxuICAgIHJldHVybiAoXG4gICAgICAvLyBHcmFwaFFMIHF1ZXJ5IHRvIHJldHJpZXZlIHByb2R1Y3RzIGFuZCB0aGVpciBwcmljZXNcbiAgICAgIDxRdWVyeSBxdWVyeT17R0VUX1BST0RVQ1RTX0JZX0lEfSB2YXJpYWJsZXM9e3sgaWRzOiBzdG9yZS5nZXQoXCJpZHNcIikgfX0+XG4gICAgICAgIHsoeyBkYXRhLCBsb2FkaW5nLCBlcnJvciB9KSA9PiB7XG4gICAgICAgICAgaWYgKGxvYWRpbmcpIHJldHVybiA8ZGl2PkxvYWRpbmfigKY8L2Rpdj47XG4gICAgICAgICAgaWYgKGVycm9yKSByZXR1cm4gPGRpdj57ZXJyb3IubWVzc2FnZX08L2Rpdj47XG5cbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPENhcmQ+XG4gICAgICAgICAgICAgIDxSZXNvdXJjZUxpc3QgLy8gRGVmaW5lcyB5b3VyIHJlc291cmNlIGxpc3QgY29tcG9uZW50XG4gICAgICAgICAgICAgICAgc2hvd0hlYWRlclxuICAgICAgICAgICAgICAgIHJlc291cmNlTmFtZT17eyBzaW5ndWxhcjogXCJQcm9kdWN0XCIsIHBsdXJhbDogXCJQcm9kdWN0c1wiIH19XG4gICAgICAgICAgICAgICAgaXRlbXM9e2RhdGEubm9kZXN9XG4gICAgICAgICAgICAgICAgcmVuZGVySXRlbT17KGl0ZW0pID0+IHtcbiAgICAgICAgICAgICAgICAgIGNvbnN0IG1lZGlhID0gKFxuICAgICAgICAgICAgICAgICAgICA8VGh1bWJuYWlsXG4gICAgICAgICAgICAgICAgICAgICAgc291cmNlPXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0uaW1hZ2VzLmVkZ2VzWzBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgID8gaXRlbS5pbWFnZXMuZWRnZXNbMF0ubm9kZS5vcmlnaW5hbFNyY1xuICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgYWx0PXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0uaW1hZ2VzLmVkZ2VzWzBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgID8gaXRlbS5pbWFnZXMuZWRnZXNbMF0ubm9kZS5hbHRUZXh0XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJcIlxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICBjb25zdCBwcmljZSA9IGl0ZW0udmFyaWFudHMuZWRnZXNbMF0ubm9kZS5wcmljZTtcbiAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgIDxSZXNvdXJjZUxpc3QuSXRlbVxuICAgICAgICAgICAgICAgICAgICAgIGlkPXtpdGVtLmlkfVxuICAgICAgICAgICAgICAgICAgICAgIG1lZGlhPXttZWRpYX1cbiAgICAgICAgICAgICAgICAgICAgICBhY2Nlc3NpYmlsaXR5TGFiZWw9e2BWaWV3IGRldGFpbHMgZm9yICR7aXRlbS50aXRsZX1gfVxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0b3JlLnNldChcIml0ZW1cIiwgaXRlbSk7XG4gICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIDxTdGFjaz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxTdGFjay5JdGVtIGZpbGw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxoMz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dFN0eWxlIHZhcmlhdGlvbj1cInN0cm9uZ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW0udGl0bGV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UZXh0U3R5bGU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L1N0YWNrLkl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8U3RhY2suSXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+JHtwcmljZX08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L1N0YWNrLkl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgPC9TdGFjaz5cbiAgICAgICAgICAgICAgICAgICAgPC9SZXNvdXJjZUxpc3QuSXRlbT5cbiAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvQ2FyZD5cbiAgICAgICAgICApO1xuICAgICAgICB9fVxuICAgICAgPC9RdWVyeT5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFJlc291cmNlTGlzdFdpdGhQcm9kdWN0cztcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IFBhZ2UsIExheW91dCwgRW1wdHlTdGF0ZSB9IGZyb20gXCJAc2hvcGlmeS9wb2xhcmlzXCI7XG5pbXBvcnQgeyBSZXNvdXJjZVBpY2tlciwgVGl0bGVCYXIgfSBmcm9tIFwiQHNob3BpZnkvYXBwLWJyaWRnZS1yZWFjdFwiO1xuaW1wb3J0IHN0b3JlIGZyb20gXCJzdG9yZS1qc1wiO1xuaW1wb3J0IFJlc291cmNlTGlzdFdpdGhQcm9kdWN0cyBmcm9tIFwiLi9jb21wb25lbnRzL1Jlc291cmNlTGlzdFwiO1xuXG5jb25zdCBpbWcgPSBcImh0dHBzOi8vY2RuLnNob3BpZnkuY29tL3MvZmlsZXMvMS8wNzU3Lzk5NTUvZmlsZXMvZW1wdHktc3RhdGUuc3ZnXCI7XG5cbmNsYXNzIEluZGV4IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgc3RhdGUgPSB7IG9wZW46IGZhbHNlIH07XG4gIHJlbmRlcigpIHtcbiAgICAvLyBBIGNvbnN0YW50IHRoYXQgZGVmaW5lcyB5b3VyIGFwcCdzIGVtcHR5IHN0YXRlXG4gICAgY29uc3QgZW1wdHlTdGF0ZSA9ICFzdG9yZS5nZXQoXCJpZHNcIik7XG4gICAgcmV0dXJuIChcbiAgICAgIDxQYWdlPlxuICAgICAgICA8VGl0bGVCYXJcbiAgICAgICAgICBwcmltYXJ5QWN0aW9uPXt7XG4gICAgICAgICAgICBjb250ZW50OiBcIlNlbGVjdCBwcm9kdWN0c1wiLFxuICAgICAgICAgICAgb25BY3Rpb246ICgpID0+IHRoaXMuc2V0U3RhdGUoeyBvcGVuOiB0cnVlIH0pLFxuICAgICAgICAgIH19XG4gICAgICAgIC8+XG4gICAgICAgIDxSZXNvdXJjZVBpY2tlclxuICAgICAgICAgIHJlc291cmNlVHlwZT1cIlByb2R1Y3RcIlxuICAgICAgICAgIHNob3dWYXJpYW50cz17ZmFsc2V9XG4gICAgICAgICAgb3Blbj17dGhpcy5zdGF0ZS5vcGVufVxuICAgICAgICAgIG9uU2VsZWN0aW9uPXsocmVzb3VyY2VzKSA9PiB0aGlzLmhhbmRsZVNlbGVjdGlvbihyZXNvdXJjZXMpfVxuICAgICAgICAgIG9uQ2FuY2VsPXsoKSA9PiB0aGlzLnNldFN0YXRlKHsgb3BlbjogZmFsc2UgfSl9XG4gICAgICAgIC8+XG4gICAgICAgIHtlbXB0eVN0YXRlID8gKCAvLyBDb250cm9scyB0aGUgbGF5b3V0IG9mIHlvdXIgYXBwJ3MgZW1wdHkgc3RhdGVcbiAgICAgICAgICA8TGF5b3V0PlxuICAgICAgICAgICAgPEVtcHR5U3RhdGVcbiAgICAgICAgICAgICAgaGVhZGluZz1cIkRpc2NvdW50IHlvdXIgcHJvZHVjdHMgdGVtcG9yYXJpbHlcIlxuICAgICAgICAgICAgICBhY3Rpb249e3tcbiAgICAgICAgICAgICAgICBjb250ZW50OiBcIlNlbGVjdCBwcm9kdWN0c1wiLFxuICAgICAgICAgICAgICAgIG9uQWN0aW9uOiAoKSA9PiB0aGlzLnNldFN0YXRlKHsgb3BlbjogdHJ1ZSB9KSxcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgaW1hZ2U9e2ltZ31cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPHA+U2VsZWN0IHByb2R1Y3RzIHRvIGNoYW5nZSB0aGVpciBwcmljZSB0ZW1wb3JhcmlseS48L3A+XG4gICAgICAgICAgICA8L0VtcHR5U3RhdGU+XG4gICAgICAgICAgPC9MYXlvdXQ+XG4gICAgICAgICkgOiAoXG4gICAgICAgICAgLy8gVXNlcyB0aGUgbmV3IHJlc291cmNlIGxpc3QgdGhhdCByZXRyaWV2ZXMgcHJvZHVjdHMgYnkgSURzXG4gICAgICAgICAgPFJlc291cmNlTGlzdFdpdGhQcm9kdWN0cyAvPlxuICAgICAgICApfVxuICAgICAgPC9QYWdlPlxuICAgICk7XG4gIH1cbiAgaGFuZGxlU2VsZWN0aW9uID0gKHJlc291cmNlcykgPT4ge1xuICAgIGNvbnN0IGlkc0Zyb21SZXNvdXJjZXMgPSByZXNvdXJjZXMuc2VsZWN0aW9uLm1hcCgocHJvZHVjdCkgPT4gcHJvZHVjdC5pZCk7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IG9wZW46IGZhbHNlIH0pO1xuICAgIHN0b3JlLnNldChcImlkc1wiLCBpZHNGcm9tUmVzb3VyY2VzKTtcbiAgfTtcbn1cbmV4cG9ydCBkZWZhdWx0IEluZGV4O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==