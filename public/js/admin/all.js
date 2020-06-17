/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/jquery/dist/jquery.js":
/*!********************************************!*\
  !*** ./node_modules/jquery/dist/jquery.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * jQuery JavaScript Library v3.5.1
 * https://jquery.com/
 *
 * Includes Sizzle.js
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2020-05-04T22:49Z
 */
( function( global, factory ) {

	"use strict";

	if (  true && typeof module.exports === "object" ) {

		// For CommonJS and CommonJS-like environments where a proper `window`
		// is present, execute the factory and get jQuery.
		// For environments that do not have a `window` with a `document`
		// (such as Node.js), expose a factory as module.exports.
		// This accentuates the need for the creation of a real `window`.
		// e.g. var jQuery = require("jquery")(window);
		// See ticket #14549 for more info.
		module.exports = global.document ?
			factory( global, true ) :
			function( w ) {
				if ( !w.document ) {
					throw new Error( "jQuery requires a window with a document" );
				}
				return factory( w );
			};
	} else {
		factory( global );
	}

// Pass this if window is not defined yet
} )( typeof window !== "undefined" ? window : this, function( window, noGlobal ) {

// Edge <= 12 - 13+, Firefox <=18 - 45+, IE 10 - 11, Safari 5.1 - 9+, iOS 6 - 9.1
// throw exceptions when non-strict code (e.g., ASP.NET 4.5) accesses strict mode
// arguments.callee.caller (trac-13335). But as of jQuery 3.0 (2016), strict mode should be common
// enough that all such attempts are guarded in a try block.
"use strict";

var arr = [];

var getProto = Object.getPrototypeOf;

var slice = arr.slice;

var flat = arr.flat ? function( array ) {
	return arr.flat.call( array );
} : function( array ) {
	return arr.concat.apply( [], array );
};


var push = arr.push;

var indexOf = arr.indexOf;

var class2type = {};

var toString = class2type.toString;

var hasOwn = class2type.hasOwnProperty;

var fnToString = hasOwn.toString;

var ObjectFunctionString = fnToString.call( Object );

var support = {};

var isFunction = function isFunction( obj ) {

      // Support: Chrome <=57, Firefox <=52
      // In some browsers, typeof returns "function" for HTML <object> elements
      // (i.e., `typeof document.createElement( "object" ) === "function"`).
      // We don't want to classify *any* DOM node as a function.
      return typeof obj === "function" && typeof obj.nodeType !== "number";
  };


var isWindow = function isWindow( obj ) {
		return obj != null && obj === obj.window;
	};


var document = window.document;



	var preservedScriptAttributes = {
		type: true,
		src: true,
		nonce: true,
		noModule: true
	};

	function DOMEval( code, node, doc ) {
		doc = doc || document;

		var i, val,
			script = doc.createElement( "script" );

		script.text = code;
		if ( node ) {
			for ( i in preservedScriptAttributes ) {

				// Support: Firefox 64+, Edge 18+
				// Some browsers don't support the "nonce" property on scripts.
				// On the other hand, just using `getAttribute` is not enough as
				// the `nonce` attribute is reset to an empty string whenever it
				// becomes browsing-context connected.
				// See https://github.com/whatwg/html/issues/2369
				// See https://html.spec.whatwg.org/#nonce-attributes
				// The `node.getAttribute` check was added for the sake of
				// `jQuery.globalEval` so that it can fake a nonce-containing node
				// via an object.
				val = node[ i ] || node.getAttribute && node.getAttribute( i );
				if ( val ) {
					script.setAttribute( i, val );
				}
			}
		}
		doc.head.appendChild( script ).parentNode.removeChild( script );
	}


function toType( obj ) {
	if ( obj == null ) {
		return obj + "";
	}

	// Support: Android <=2.3 only (functionish RegExp)
	return typeof obj === "object" || typeof obj === "function" ?
		class2type[ toString.call( obj ) ] || "object" :
		typeof obj;
}
/* global Symbol */
// Defining this global in .eslintrc.json would create a danger of using the global
// unguarded in another place, it seems safer to define global only for this module



var
	version = "3.5.1",

	// Define a local copy of jQuery
	jQuery = function( selector, context ) {

		// The jQuery object is actually just the init constructor 'enhanced'
		// Need init if jQuery is called (just allow error to be thrown if not included)
		return new jQuery.fn.init( selector, context );
	};

jQuery.fn = jQuery.prototype = {

	// The current version of jQuery being used
	jquery: version,

	constructor: jQuery,

	// The default length of a jQuery object is 0
	length: 0,

	toArray: function() {
		return slice.call( this );
	},

	// Get the Nth element in the matched element set OR
	// Get the whole matched element set as a clean array
	get: function( num ) {

		// Return all the elements in a clean array
		if ( num == null ) {
			return slice.call( this );
		}

		// Return just the one element from the set
		return num < 0 ? this[ num + this.length ] : this[ num ];
	},

	// Take an array of elements and push it onto the stack
	// (returning the new matched element set)
	pushStack: function( elems ) {

		// Build a new jQuery matched element set
		var ret = jQuery.merge( this.constructor(), elems );

		// Add the old object onto the stack (as a reference)
		ret.prevObject = this;

		// Return the newly-formed element set
		return ret;
	},

	// Execute a callback for every element in the matched set.
	each: function( callback ) {
		return jQuery.each( this, callback );
	},

	map: function( callback ) {
		return this.pushStack( jQuery.map( this, function( elem, i ) {
			return callback.call( elem, i, elem );
		} ) );
	},

	slice: function() {
		return this.pushStack( slice.apply( this, arguments ) );
	},

	first: function() {
		return this.eq( 0 );
	},

	last: function() {
		return this.eq( -1 );
	},

	even: function() {
		return this.pushStack( jQuery.grep( this, function( _elem, i ) {
			return ( i + 1 ) % 2;
		} ) );
	},

	odd: function() {
		return this.pushStack( jQuery.grep( this, function( _elem, i ) {
			return i % 2;
		} ) );
	},

	eq: function( i ) {
		var len = this.length,
			j = +i + ( i < 0 ? len : 0 );
		return this.pushStack( j >= 0 && j < len ? [ this[ j ] ] : [] );
	},

	end: function() {
		return this.prevObject || this.constructor();
	},

	// For internal use only.
	// Behaves like an Array's method, not like a jQuery method.
	push: push,
	sort: arr.sort,
	splice: arr.splice
};

jQuery.extend = jQuery.fn.extend = function() {
	var options, name, src, copy, copyIsArray, clone,
		target = arguments[ 0 ] || {},
		i = 1,
		length = arguments.length,
		deep = false;

	// Handle a deep copy situation
	if ( typeof target === "boolean" ) {
		deep = target;

		// Skip the boolean and the target
		target = arguments[ i ] || {};
		i++;
	}

	// Handle case when target is a string or something (possible in deep copy)
	if ( typeof target !== "object" && !isFunction( target ) ) {
		target = {};
	}

	// Extend jQuery itself if only one argument is passed
	if ( i === length ) {
		target = this;
		i--;
	}

	for ( ; i < length; i++ ) {

		// Only deal with non-null/undefined values
		if ( ( options = arguments[ i ] ) != null ) {

			// Extend the base object
			for ( name in options ) {
				copy = options[ name ];

				// Prevent Object.prototype pollution
				// Prevent never-ending loop
				if ( name === "__proto__" || target === copy ) {
					continue;
				}

				// Recurse if we're merging plain objects or arrays
				if ( deep && copy && ( jQuery.isPlainObject( copy ) ||
					( copyIsArray = Array.isArray( copy ) ) ) ) {
					src = target[ name ];

					// Ensure proper type for the source value
					if ( copyIsArray && !Array.isArray( src ) ) {
						clone = [];
					} else if ( !copyIsArray && !jQuery.isPlainObject( src ) ) {
						clone = {};
					} else {
						clone = src;
					}
					copyIsArray = false;

					// Never move original objects, clone them
					target[ name ] = jQuery.extend( deep, clone, copy );

				// Don't bring in undefined values
				} else if ( copy !== undefined ) {
					target[ name ] = copy;
				}
			}
		}
	}

	// Return the modified object
	return target;
};

jQuery.extend( {

	// Unique for each copy of jQuery on the page
	expando: "jQuery" + ( version + Math.random() ).replace( /\D/g, "" ),

	// Assume jQuery is ready without the ready module
	isReady: true,

	error: function( msg ) {
		throw new Error( msg );
	},

	noop: function() {},

	isPlainObject: function( obj ) {
		var proto, Ctor;

		// Detect obvious negatives
		// Use toString instead of jQuery.type to catch host objects
		if ( !obj || toString.call( obj ) !== "[object Object]" ) {
			return false;
		}

		proto = getProto( obj );

		// Objects with no prototype (e.g., `Object.create( null )`) are plain
		if ( !proto ) {
			return true;
		}

		// Objects with prototype are plain iff they were constructed by a global Object function
		Ctor = hasOwn.call( proto, "constructor" ) && proto.constructor;
		return typeof Ctor === "function" && fnToString.call( Ctor ) === ObjectFunctionString;
	},

	isEmptyObject: function( obj ) {
		var name;

		for ( name in obj ) {
			return false;
		}
		return true;
	},

	// Evaluates a script in a provided context; falls back to the global one
	// if not specified.
	globalEval: function( code, options, doc ) {
		DOMEval( code, { nonce: options && options.nonce }, doc );
	},

	each: function( obj, callback ) {
		var length, i = 0;

		if ( isArrayLike( obj ) ) {
			length = obj.length;
			for ( ; i < length; i++ ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		} else {
			for ( i in obj ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		}

		return obj;
	},

	// results is for internal usage only
	makeArray: function( arr, results ) {
		var ret = results || [];

		if ( arr != null ) {
			if ( isArrayLike( Object( arr ) ) ) {
				jQuery.merge( ret,
					typeof arr === "string" ?
					[ arr ] : arr
				);
			} else {
				push.call( ret, arr );
			}
		}

		return ret;
	},

	inArray: function( elem, arr, i ) {
		return arr == null ? -1 : indexOf.call( arr, elem, i );
	},

	// Support: Android <=4.0 only, PhantomJS 1 only
	// push.apply(_, arraylike) throws on ancient WebKit
	merge: function( first, second ) {
		var len = +second.length,
			j = 0,
			i = first.length;

		for ( ; j < len; j++ ) {
			first[ i++ ] = second[ j ];
		}

		first.length = i;

		return first;
	},

	grep: function( elems, callback, invert ) {
		var callbackInverse,
			matches = [],
			i = 0,
			length = elems.length,
			callbackExpect = !invert;

		// Go through the array, only saving the items
		// that pass the validator function
		for ( ; i < length; i++ ) {
			callbackInverse = !callback( elems[ i ], i );
			if ( callbackInverse !== callbackExpect ) {
				matches.push( elems[ i ] );
			}
		}

		return matches;
	},

	// arg is for internal usage only
	map: function( elems, callback, arg ) {
		var length, value,
			i = 0,
			ret = [];

		// Go through the array, translating each of the items to their new values
		if ( isArrayLike( elems ) ) {
			length = elems.length;
			for ( ; i < length; i++ ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}

		// Go through every key on the object,
		} else {
			for ( i in elems ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}
		}

		// Flatten any nested arrays
		return flat( ret );
	},

	// A global GUID counter for objects
	guid: 1,

	// jQuery.support is not used in Core but other projects attach their
	// properties to it so it needs to exist.
	support: support
} );

if ( typeof Symbol === "function" ) {
	jQuery.fn[ Symbol.iterator ] = arr[ Symbol.iterator ];
}

// Populate the class2type map
jQuery.each( "Boolean Number String Function Array Date RegExp Object Error Symbol".split( " " ),
function( _i, name ) {
	class2type[ "[object " + name + "]" ] = name.toLowerCase();
} );

function isArrayLike( obj ) {

	// Support: real iOS 8.2 only (not reproducible in simulator)
	// `in` check used to prevent JIT error (gh-2145)
	// hasOwn isn't used here due to false negatives
	// regarding Nodelist length in IE
	var length = !!obj && "length" in obj && obj.length,
		type = toType( obj );

	if ( isFunction( obj ) || isWindow( obj ) ) {
		return false;
	}

	return type === "array" || length === 0 ||
		typeof length === "number" && length > 0 && ( length - 1 ) in obj;
}
var Sizzle =
/*!
 * Sizzle CSS Selector Engine v2.3.5
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation and other contributors
 * Released under the MIT license
 * https://js.foundation/
 *
 * Date: 2020-03-14
 */
( function( window ) {
var i,
	support,
	Expr,
	getText,
	isXML,
	tokenize,
	compile,
	select,
	outermostContext,
	sortInput,
	hasDuplicate,

	// Local document vars
	setDocument,
	document,
	docElem,
	documentIsHTML,
	rbuggyQSA,
	rbuggyMatches,
	matches,
	contains,

	// Instance-specific data
	expando = "sizzle" + 1 * new Date(),
	preferredDoc = window.document,
	dirruns = 0,
	done = 0,
	classCache = createCache(),
	tokenCache = createCache(),
	compilerCache = createCache(),
	nonnativeSelectorCache = createCache(),
	sortOrder = function( a, b ) {
		if ( a === b ) {
			hasDuplicate = true;
		}
		return 0;
	},

	// Instance methods
	hasOwn = ( {} ).hasOwnProperty,
	arr = [],
	pop = arr.pop,
	pushNative = arr.push,
	push = arr.push,
	slice = arr.slice,

	// Use a stripped-down indexOf as it's faster than native
	// https://jsperf.com/thor-indexof-vs-for/5
	indexOf = function( list, elem ) {
		var i = 0,
			len = list.length;
		for ( ; i < len; i++ ) {
			if ( list[ i ] === elem ) {
				return i;
			}
		}
		return -1;
	},

	booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|" +
		"ismap|loop|multiple|open|readonly|required|scoped",

	// Regular expressions

	// http://www.w3.org/TR/css3-selectors/#whitespace
	whitespace = "[\\x20\\t\\r\\n\\f]",

	// https://www.w3.org/TR/css-syntax-3/#ident-token-diagram
	identifier = "(?:\\\\[\\da-fA-F]{1,6}" + whitespace +
		"?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",

	// Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
	attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace +

		// Operator (capture 2)
		"*([*^$|!~]?=)" + whitespace +

		// "Attribute values must be CSS identifiers [capture 5]
		// or strings [capture 3 or capture 4]"
		"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" +
		whitespace + "*\\]",

	pseudos = ":(" + identifier + ")(?:\\((" +

		// To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
		// 1. quoted (capture 3; capture 4 or capture 5)
		"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" +

		// 2. simple (capture 6)
		"((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" +

		// 3. anything else (capture 2)
		".*" +
		")\\)|)",

	// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
	rwhitespace = new RegExp( whitespace + "+", "g" ),
	rtrim = new RegExp( "^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" +
		whitespace + "+$", "g" ),

	rcomma = new RegExp( "^" + whitespace + "*," + whitespace + "*" ),
	rcombinators = new RegExp( "^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace +
		"*" ),
	rdescend = new RegExp( whitespace + "|>" ),

	rpseudo = new RegExp( pseudos ),
	ridentifier = new RegExp( "^" + identifier + "$" ),

	matchExpr = {
		"ID": new RegExp( "^#(" + identifier + ")" ),
		"CLASS": new RegExp( "^\\.(" + identifier + ")" ),
		"TAG": new RegExp( "^(" + identifier + "|[*])" ),
		"ATTR": new RegExp( "^" + attributes ),
		"PSEUDO": new RegExp( "^" + pseudos ),
		"CHILD": new RegExp( "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
			whitespace + "*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" +
			whitespace + "*(\\d+)|))" + whitespace + "*\\)|)", "i" ),
		"bool": new RegExp( "^(?:" + booleans + ")$", "i" ),

		// For use in libraries implementing .is()
		// We use this for POS matching in `select`
		"needsContext": new RegExp( "^" + whitespace +
			"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + whitespace +
			"*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i" )
	},

	rhtml = /HTML$/i,
	rinputs = /^(?:input|select|textarea|button)$/i,
	rheader = /^h\d$/i,

	rnative = /^[^{]+\{\s*\[native \w/,

	// Easily-parseable/retrievable ID or TAG or CLASS selectors
	rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,

	rsibling = /[+~]/,

	// CSS escapes
	// http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
	runescape = new RegExp( "\\\\[\\da-fA-F]{1,6}" + whitespace + "?|\\\\([^\\r\\n\\f])", "g" ),
	funescape = function( escape, nonHex ) {
		var high = "0x" + escape.slice( 1 ) - 0x10000;

		return nonHex ?

			// Strip the backslash prefix from a non-hex escape sequence
			nonHex :

			// Replace a hexadecimal escape sequence with the encoded Unicode code point
			// Support: IE <=11+
			// For values outside the Basic Multilingual Plane (BMP), manually construct a
			// surrogate pair
			high < 0 ?
				String.fromCharCode( high + 0x10000 ) :
				String.fromCharCode( high >> 10 | 0xD800, high & 0x3FF | 0xDC00 );
	},

	// CSS string/identifier serialization
	// https://drafts.csswg.org/cssom/#common-serializing-idioms
	rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
	fcssescape = function( ch, asCodePoint ) {
		if ( asCodePoint ) {

			// U+0000 NULL becomes U+FFFD REPLACEMENT CHARACTER
			if ( ch === "\0" ) {
				return "\uFFFD";
			}

			// Control characters and (dependent upon position) numbers get escaped as code points
			return ch.slice( 0, -1 ) + "\\" +
				ch.charCodeAt( ch.length - 1 ).toString( 16 ) + " ";
		}

		// Other potentially-special ASCII characters get backslash-escaped
		return "\\" + ch;
	},

	// Used for iframes
	// See setDocument()
	// Removing the function wrapper causes a "Permission Denied"
	// error in IE
	unloadHandler = function() {
		setDocument();
	},

	inDisabledFieldset = addCombinator(
		function( elem ) {
			return elem.disabled === true && elem.nodeName.toLowerCase() === "fieldset";
		},
		{ dir: "parentNode", next: "legend" }
	);

// Optimize for push.apply( _, NodeList )
try {
	push.apply(
		( arr = slice.call( preferredDoc.childNodes ) ),
		preferredDoc.childNodes
	);

	// Support: Android<4.0
	// Detect silently failing push.apply
	// eslint-disable-next-line no-unused-expressions
	arr[ preferredDoc.childNodes.length ].nodeType;
} catch ( e ) {
	push = { apply: arr.length ?

		// Leverage slice if possible
		function( target, els ) {
			pushNative.apply( target, slice.call( els ) );
		} :

		// Support: IE<9
		// Otherwise append directly
		function( target, els ) {
			var j = target.length,
				i = 0;

			// Can't trust NodeList.length
			while ( ( target[ j++ ] = els[ i++ ] ) ) {}
			target.length = j - 1;
		}
	};
}

function Sizzle( selector, context, results, seed ) {
	var m, i, elem, nid, match, groups, newSelector,
		newContext = context && context.ownerDocument,

		// nodeType defaults to 9, since context defaults to document
		nodeType = context ? context.nodeType : 9;

	results = results || [];

	// Return early from calls with invalid selector or context
	if ( typeof selector !== "string" || !selector ||
		nodeType !== 1 && nodeType !== 9 && nodeType !== 11 ) {

		return results;
	}

	// Try to shortcut find operations (as opposed to filters) in HTML documents
	if ( !seed ) {
		setDocument( context );
		context = context || document;

		if ( documentIsHTML ) {

			// If the selector is sufficiently simple, try using a "get*By*" DOM method
			// (excepting DocumentFragment context, where the methods don't exist)
			if ( nodeType !== 11 && ( match = rquickExpr.exec( selector ) ) ) {

				// ID selector
				if ( ( m = match[ 1 ] ) ) {

					// Document context
					if ( nodeType === 9 ) {
						if ( ( elem = context.getElementById( m ) ) ) {

							// Support: IE, Opera, Webkit
							// TODO: identify versions
							// getElementById can match elements by name instead of ID
							if ( elem.id === m ) {
								results.push( elem );
								return results;
							}
						} else {
							return results;
						}

					// Element context
					} else {

						// Support: IE, Opera, Webkit
						// TODO: identify versions
						// getElementById can match elements by name instead of ID
						if ( newContext && ( elem = newContext.getElementById( m ) ) &&
							contains( context, elem ) &&
							elem.id === m ) {

							results.push( elem );
							return results;
						}
					}

				// Type selector
				} else if ( match[ 2 ] ) {
					push.apply( results, context.getElementsByTagName( selector ) );
					return results;

				// Class selector
				} else if ( ( m = match[ 3 ] ) && support.getElementsByClassName &&
					context.getElementsByClassName ) {

					push.apply( results, context.getElementsByClassName( m ) );
					return results;
				}
			}

			// Take advantage of querySelectorAll
			if ( support.qsa &&
				!nonnativeSelectorCache[ selector + " " ] &&
				( !rbuggyQSA || !rbuggyQSA.test( selector ) ) &&

				// Support: IE 8 only
				// Exclude object elements
				( nodeType !== 1 || context.nodeName.toLowerCase() !== "object" ) ) {

				newSelector = selector;
				newContext = context;

				// qSA considers elements outside a scoping root when evaluating child or
				// descendant combinators, which is not what we want.
				// In such cases, we work around the behavior by prefixing every selector in the
				// list with an ID selector referencing the scope context.
				// The technique has to be used as well when a leading combinator is used
				// as such selectors are not recognized by querySelectorAll.
				// Thanks to Andrew Dupont for this technique.
				if ( nodeType === 1 &&
					( rdescend.test( selector ) || rcombinators.test( selector ) ) ) {

					// Expand context for sibling selectors
					newContext = rsibling.test( selector ) && testContext( context.parentNode ) ||
						context;

					// We can use :scope instead of the ID hack if the browser
					// supports it & if we're not changing the context.
					if ( newContext !== context || !support.scope ) {

						// Capture the context ID, setting it first if necessary
						if ( ( nid = context.getAttribute( "id" ) ) ) {
							nid = nid.replace( rcssescape, fcssescape );
						} else {
							context.setAttribute( "id", ( nid = expando ) );
						}
					}

					// Prefix every selector in the list
					groups = tokenize( selector );
					i = groups.length;
					while ( i-- ) {
						groups[ i ] = ( nid ? "#" + nid : ":scope" ) + " " +
							toSelector( groups[ i ] );
					}
					newSelector = groups.join( "," );
				}

				try {
					push.apply( results,
						newContext.querySelectorAll( newSelector )
					);
					return results;
				} catch ( qsaError ) {
					nonnativeSelectorCache( selector, true );
				} finally {
					if ( nid === expando ) {
						context.removeAttribute( "id" );
					}
				}
			}
		}
	}

	// All others
	return select( selector.replace( rtrim, "$1" ), context, results, seed );
}

/**
 * Create key-value caches of limited size
 * @returns {function(string, object)} Returns the Object data after storing it on itself with
 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
 *	deleting the oldest entry
 */
function createCache() {
	var keys = [];

	function cache( key, value ) {

		// Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
		if ( keys.push( key + " " ) > Expr.cacheLength ) {

			// Only keep the most recent entries
			delete cache[ keys.shift() ];
		}
		return ( cache[ key + " " ] = value );
	}
	return cache;
}

/**
 * Mark a function for special use by Sizzle
 * @param {Function} fn The function to mark
 */
function markFunction( fn ) {
	fn[ expando ] = true;
	return fn;
}

/**
 * Support testing using an element
 * @param {Function} fn Passed the created element and returns a boolean result
 */
function assert( fn ) {
	var el = document.createElement( "fieldset" );

	try {
		return !!fn( el );
	} catch ( e ) {
		return false;
	} finally {

		// Remove from its parent by default
		if ( el.parentNode ) {
			el.parentNode.removeChild( el );
		}

		// release memory in IE
		el = null;
	}
}

/**
 * Adds the same handler for all of the specified attrs
 * @param {String} attrs Pipe-separated list of attributes
 * @param {Function} handler The method that will be applied
 */
function addHandle( attrs, handler ) {
	var arr = attrs.split( "|" ),
		i = arr.length;

	while ( i-- ) {
		Expr.attrHandle[ arr[ i ] ] = handler;
	}
}

/**
 * Checks document order of two siblings
 * @param {Element} a
 * @param {Element} b
 * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
 */
function siblingCheck( a, b ) {
	var cur = b && a,
		diff = cur && a.nodeType === 1 && b.nodeType === 1 &&
			a.sourceIndex - b.sourceIndex;

	// Use IE sourceIndex if available on both nodes
	if ( diff ) {
		return diff;
	}

	// Check if b follows a
	if ( cur ) {
		while ( ( cur = cur.nextSibling ) ) {
			if ( cur === b ) {
				return -1;
			}
		}
	}

	return a ? 1 : -1;
}

/**
 * Returns a function to use in pseudos for input types
 * @param {String} type
 */
function createInputPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return name === "input" && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for buttons
 * @param {String} type
 */
function createButtonPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return ( name === "input" || name === "button" ) && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for :enabled/:disabled
 * @param {Boolean} disabled true for :disabled; false for :enabled
 */
function createDisabledPseudo( disabled ) {

	// Known :disabled false positives: fieldset[disabled] > legend:nth-of-type(n+2) :can-disable
	return function( elem ) {

		// Only certain elements can match :enabled or :disabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-enabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-disabled
		if ( "form" in elem ) {

			// Check for inherited disabledness on relevant non-disabled elements:
			// * listed form-associated elements in a disabled fieldset
			//   https://html.spec.whatwg.org/multipage/forms.html#category-listed
			//   https://html.spec.whatwg.org/multipage/forms.html#concept-fe-disabled
			// * option elements in a disabled optgroup
			//   https://html.spec.whatwg.org/multipage/forms.html#concept-option-disabled
			// All such elements have a "form" property.
			if ( elem.parentNode && elem.disabled === false ) {

				// Option elements defer to a parent optgroup if present
				if ( "label" in elem ) {
					if ( "label" in elem.parentNode ) {
						return elem.parentNode.disabled === disabled;
					} else {
						return elem.disabled === disabled;
					}
				}

				// Support: IE 6 - 11
				// Use the isDisabled shortcut property to check for disabled fieldset ancestors
				return elem.isDisabled === disabled ||

					// Where there is no isDisabled, check manually
					/* jshint -W018 */
					elem.isDisabled !== !disabled &&
					inDisabledFieldset( elem ) === disabled;
			}

			return elem.disabled === disabled;

		// Try to winnow out elements that can't be disabled before trusting the disabled property.
		// Some victims get caught in our net (label, legend, menu, track), but it shouldn't
		// even exist on them, let alone have a boolean value.
		} else if ( "label" in elem ) {
			return elem.disabled === disabled;
		}

		// Remaining elements are neither :enabled nor :disabled
		return false;
	};
}

/**
 * Returns a function to use in pseudos for positionals
 * @param {Function} fn
 */
function createPositionalPseudo( fn ) {
	return markFunction( function( argument ) {
		argument = +argument;
		return markFunction( function( seed, matches ) {
			var j,
				matchIndexes = fn( [], seed.length, argument ),
				i = matchIndexes.length;

			// Match elements found at the specified indexes
			while ( i-- ) {
				if ( seed[ ( j = matchIndexes[ i ] ) ] ) {
					seed[ j ] = !( matches[ j ] = seed[ j ] );
				}
			}
		} );
	} );
}

/**
 * Checks a node for validity as a Sizzle context
 * @param {Element|Object=} context
 * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
 */
function testContext( context ) {
	return context && typeof context.getElementsByTagName !== "undefined" && context;
}

// Expose support vars for convenience
support = Sizzle.support = {};

/**
 * Detects XML nodes
 * @param {Element|Object} elem An element or a document
 * @returns {Boolean} True iff elem is a non-HTML XML node
 */
isXML = Sizzle.isXML = function( elem ) {
	var namespace = elem.namespaceURI,
		docElem = ( elem.ownerDocument || elem ).documentElement;

	// Support: IE <=8
	// Assume HTML when documentElement doesn't yet exist, such as inside loading iframes
	// https://bugs.jquery.com/ticket/4833
	return !rhtml.test( namespace || docElem && docElem.nodeName || "HTML" );
};

/**
 * Sets document-related variables once based on the current document
 * @param {Element|Object} [doc] An element or document object to use to set the document
 * @returns {Object} Returns the current document
 */
setDocument = Sizzle.setDocument = function( node ) {
	var hasCompare, subWindow,
		doc = node ? node.ownerDocument || node : preferredDoc;

	// Return early if doc is invalid or already selected
	// Support: IE 11+, Edge 17 - 18+
	// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
	// two documents; shallow comparisons work.
	// eslint-disable-next-line eqeqeq
	if ( doc == document || doc.nodeType !== 9 || !doc.documentElement ) {
		return document;
	}

	// Update global variables
	document = doc;
	docElem = document.documentElement;
	documentIsHTML = !isXML( document );

	// Support: IE 9 - 11+, Edge 12 - 18+
	// Accessing iframe documents after unload throws "permission denied" errors (jQuery #13936)
	// Support: IE 11+, Edge 17 - 18+
	// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
	// two documents; shallow comparisons work.
	// eslint-disable-next-line eqeqeq
	if ( preferredDoc != document &&
		( subWindow = document.defaultView ) && subWindow.top !== subWindow ) {

		// Support: IE 11, Edge
		if ( subWindow.addEventListener ) {
			subWindow.addEventListener( "unload", unloadHandler, false );

		// Support: IE 9 - 10 only
		} else if ( subWindow.attachEvent ) {
			subWindow.attachEvent( "onunload", unloadHandler );
		}
	}

	// Support: IE 8 - 11+, Edge 12 - 18+, Chrome <=16 - 25 only, Firefox <=3.6 - 31 only,
	// Safari 4 - 5 only, Opera <=11.6 - 12.x only
	// IE/Edge & older browsers don't support the :scope pseudo-class.
	// Support: Safari 6.0 only
	// Safari 6.0 supports :scope but it's an alias of :root there.
	support.scope = assert( function( el ) {
		docElem.appendChild( el ).appendChild( document.createElement( "div" ) );
		return typeof el.querySelectorAll !== "undefined" &&
			!el.querySelectorAll( ":scope fieldset div" ).length;
	} );

	/* Attributes
	---------------------------------------------------------------------- */

	// Support: IE<8
	// Verify that getAttribute really returns attributes and not properties
	// (excepting IE8 booleans)
	support.attributes = assert( function( el ) {
		el.className = "i";
		return !el.getAttribute( "className" );
	} );

	/* getElement(s)By*
	---------------------------------------------------------------------- */

	// Check if getElementsByTagName("*") returns only elements
	support.getElementsByTagName = assert( function( el ) {
		el.appendChild( document.createComment( "" ) );
		return !el.getElementsByTagName( "*" ).length;
	} );

	// Support: IE<9
	support.getElementsByClassName = rnative.test( document.getElementsByClassName );

	// Support: IE<10
	// Check if getElementById returns elements by name
	// The broken getElementById methods don't pick up programmatically-set names,
	// so use a roundabout getElementsByName test
	support.getById = assert( function( el ) {
		docElem.appendChild( el ).id = expando;
		return !document.getElementsByName || !document.getElementsByName( expando ).length;
	} );

	// ID filter and find
	if ( support.getById ) {
		Expr.filter[ "ID" ] = function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				return elem.getAttribute( "id" ) === attrId;
			};
		};
		Expr.find[ "ID" ] = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var elem = context.getElementById( id );
				return elem ? [ elem ] : [];
			}
		};
	} else {
		Expr.filter[ "ID" ] =  function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				var node = typeof elem.getAttributeNode !== "undefined" &&
					elem.getAttributeNode( "id" );
				return node && node.value === attrId;
			};
		};

		// Support: IE 6 - 7 only
		// getElementById is not reliable as a find shortcut
		Expr.find[ "ID" ] = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var node, i, elems,
					elem = context.getElementById( id );

				if ( elem ) {

					// Verify the id attribute
					node = elem.getAttributeNode( "id" );
					if ( node && node.value === id ) {
						return [ elem ];
					}

					// Fall back on getElementsByName
					elems = context.getElementsByName( id );
					i = 0;
					while ( ( elem = elems[ i++ ] ) ) {
						node = elem.getAttributeNode( "id" );
						if ( node && node.value === id ) {
							return [ elem ];
						}
					}
				}

				return [];
			}
		};
	}

	// Tag
	Expr.find[ "TAG" ] = support.getElementsByTagName ?
		function( tag, context ) {
			if ( typeof context.getElementsByTagName !== "undefined" ) {
				return context.getElementsByTagName( tag );

			// DocumentFragment nodes don't have gEBTN
			} else if ( support.qsa ) {
				return context.querySelectorAll( tag );
			}
		} :

		function( tag, context ) {
			var elem,
				tmp = [],
				i = 0,

				// By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
				results = context.getElementsByTagName( tag );

			// Filter out possible comments
			if ( tag === "*" ) {
				while ( ( elem = results[ i++ ] ) ) {
					if ( elem.nodeType === 1 ) {
						tmp.push( elem );
					}
				}

				return tmp;
			}
			return results;
		};

	// Class
	Expr.find[ "CLASS" ] = support.getElementsByClassName && function( className, context ) {
		if ( typeof context.getElementsByClassName !== "undefined" && documentIsHTML ) {
			return context.getElementsByClassName( className );
		}
	};

	/* QSA/matchesSelector
	---------------------------------------------------------------------- */

	// QSA and matchesSelector support

	// matchesSelector(:active) reports false when true (IE9/Opera 11.5)
	rbuggyMatches = [];

	// qSa(:focus) reports false when true (Chrome 21)
	// We allow this because of a bug in IE8/9 that throws an error
	// whenever `document.activeElement` is accessed on an iframe
	// So, we allow :focus to pass through QSA all the time to avoid the IE error
	// See https://bugs.jquery.com/ticket/13378
	rbuggyQSA = [];

	if ( ( support.qsa = rnative.test( document.querySelectorAll ) ) ) {

		// Build QSA regex
		// Regex strategy adopted from Diego Perini
		assert( function( el ) {

			var input;

			// Select is set to empty string on purpose
			// This is to test IE's treatment of not explicitly
			// setting a boolean content attribute,
			// since its presence should be enough
			// https://bugs.jquery.com/ticket/12359
			docElem.appendChild( el ).innerHTML = "<a id='" + expando + "'></a>" +
				"<select id='" + expando + "-\r\\' msallowcapture=''>" +
				"<option selected=''></option></select>";

			// Support: IE8, Opera 11-12.16
			// Nothing should be selected when empty strings follow ^= or $= or *=
			// The test attribute must be unknown in Opera but "safe" for WinRT
			// https://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
			if ( el.querySelectorAll( "[msallowcapture^='']" ).length ) {
				rbuggyQSA.push( "[*^$]=" + whitespace + "*(?:''|\"\")" );
			}

			// Support: IE8
			// Boolean attributes and "value" are not treated correctly
			if ( !el.querySelectorAll( "[selected]" ).length ) {
				rbuggyQSA.push( "\\[" + whitespace + "*(?:value|" + booleans + ")" );
			}

			// Support: Chrome<29, Android<4.4, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.8+
			if ( !el.querySelectorAll( "[id~=" + expando + "-]" ).length ) {
				rbuggyQSA.push( "~=" );
			}

			// Support: IE 11+, Edge 15 - 18+
			// IE 11/Edge don't find elements on a `[name='']` query in some cases.
			// Adding a temporary attribute to the document before the selection works
			// around the issue.
			// Interestingly, IE 10 & older don't seem to have the issue.
			input = document.createElement( "input" );
			input.setAttribute( "name", "" );
			el.appendChild( input );
			if ( !el.querySelectorAll( "[name='']" ).length ) {
				rbuggyQSA.push( "\\[" + whitespace + "*name" + whitespace + "*=" +
					whitespace + "*(?:''|\"\")" );
			}

			// Webkit/Opera - :checked should return selected option elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			// IE8 throws error here and will not see later tests
			if ( !el.querySelectorAll( ":checked" ).length ) {
				rbuggyQSA.push( ":checked" );
			}

			// Support: Safari 8+, iOS 8+
			// https://bugs.webkit.org/show_bug.cgi?id=136851
			// In-page `selector#id sibling-combinator selector` fails
			if ( !el.querySelectorAll( "a#" + expando + "+*" ).length ) {
				rbuggyQSA.push( ".#.+[+~]" );
			}

			// Support: Firefox <=3.6 - 5 only
			// Old Firefox doesn't throw on a badly-escaped identifier.
			el.querySelectorAll( "\\\f" );
			rbuggyQSA.push( "[\\r\\n\\f]" );
		} );

		assert( function( el ) {
			el.innerHTML = "<a href='' disabled='disabled'></a>" +
				"<select disabled='disabled'><option/></select>";

			// Support: Windows 8 Native Apps
			// The type and name attributes are restricted during .innerHTML assignment
			var input = document.createElement( "input" );
			input.setAttribute( "type", "hidden" );
			el.appendChild( input ).setAttribute( "name", "D" );

			// Support: IE8
			// Enforce case-sensitivity of name attribute
			if ( el.querySelectorAll( "[name=d]" ).length ) {
				rbuggyQSA.push( "name" + whitespace + "*[*^$|!~]?=" );
			}

			// FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
			// IE8 throws error here and will not see later tests
			if ( el.querySelectorAll( ":enabled" ).length !== 2 ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Support: IE9-11+
			// IE's :disabled selector does not pick up the children of disabled fieldsets
			docElem.appendChild( el ).disabled = true;
			if ( el.querySelectorAll( ":disabled" ).length !== 2 ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Support: Opera 10 - 11 only
			// Opera 10-11 does not throw on post-comma invalid pseudos
			el.querySelectorAll( "*,:x" );
			rbuggyQSA.push( ",.*:" );
		} );
	}

	if ( ( support.matchesSelector = rnative.test( ( matches = docElem.matches ||
		docElem.webkitMatchesSelector ||
		docElem.mozMatchesSelector ||
		docElem.oMatchesSelector ||
		docElem.msMatchesSelector ) ) ) ) {

		assert( function( el ) {

			// Check to see if it's possible to do matchesSelector
			// on a disconnected node (IE 9)
			support.disconnectedMatch = matches.call( el, "*" );

			// This should fail with an exception
			// Gecko does not error, returns false instead
			matches.call( el, "[s!='']:x" );
			rbuggyMatches.push( "!=", pseudos );
		} );
	}

	rbuggyQSA = rbuggyQSA.length && new RegExp( rbuggyQSA.join( "|" ) );
	rbuggyMatches = rbuggyMatches.length && new RegExp( rbuggyMatches.join( "|" ) );

	/* Contains
	---------------------------------------------------------------------- */
	hasCompare = rnative.test( docElem.compareDocumentPosition );

	// Element contains another
	// Purposefully self-exclusive
	// As in, an element does not contain itself
	contains = hasCompare || rnative.test( docElem.contains ) ?
		function( a, b ) {
			var adown = a.nodeType === 9 ? a.documentElement : a,
				bup = b && b.parentNode;
			return a === bup || !!( bup && bup.nodeType === 1 && (
				adown.contains ?
					adown.contains( bup ) :
					a.compareDocumentPosition && a.compareDocumentPosition( bup ) & 16
			) );
		} :
		function( a, b ) {
			if ( b ) {
				while ( ( b = b.parentNode ) ) {
					if ( b === a ) {
						return true;
					}
				}
			}
			return false;
		};

	/* Sorting
	---------------------------------------------------------------------- */

	// Document order sorting
	sortOrder = hasCompare ?
	function( a, b ) {

		// Flag for duplicate removal
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		// Sort on method existence if only one input has compareDocumentPosition
		var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
		if ( compare ) {
			return compare;
		}

		// Calculate position if both inputs belong to the same document
		// Support: IE 11+, Edge 17 - 18+
		// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
		// two documents; shallow comparisons work.
		// eslint-disable-next-line eqeqeq
		compare = ( a.ownerDocument || a ) == ( b.ownerDocument || b ) ?
			a.compareDocumentPosition( b ) :

			// Otherwise we know they are disconnected
			1;

		// Disconnected nodes
		if ( compare & 1 ||
			( !support.sortDetached && b.compareDocumentPosition( a ) === compare ) ) {

			// Choose the first element that is related to our preferred document
			// Support: IE 11+, Edge 17 - 18+
			// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
			// two documents; shallow comparisons work.
			// eslint-disable-next-line eqeqeq
			if ( a == document || a.ownerDocument == preferredDoc &&
				contains( preferredDoc, a ) ) {
				return -1;
			}

			// Support: IE 11+, Edge 17 - 18+
			// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
			// two documents; shallow comparisons work.
			// eslint-disable-next-line eqeqeq
			if ( b == document || b.ownerDocument == preferredDoc &&
				contains( preferredDoc, b ) ) {
				return 1;
			}

			// Maintain original order
			return sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;
		}

		return compare & 4 ? -1 : 1;
	} :
	function( a, b ) {

		// Exit early if the nodes are identical
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		var cur,
			i = 0,
			aup = a.parentNode,
			bup = b.parentNode,
			ap = [ a ],
			bp = [ b ];

		// Parentless nodes are either documents or disconnected
		if ( !aup || !bup ) {

			// Support: IE 11+, Edge 17 - 18+
			// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
			// two documents; shallow comparisons work.
			/* eslint-disable eqeqeq */
			return a == document ? -1 :
				b == document ? 1 :
				/* eslint-enable eqeqeq */
				aup ? -1 :
				bup ? 1 :
				sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;

		// If the nodes are siblings, we can do a quick check
		} else if ( aup === bup ) {
			return siblingCheck( a, b );
		}

		// Otherwise we need full lists of their ancestors for comparison
		cur = a;
		while ( ( cur = cur.parentNode ) ) {
			ap.unshift( cur );
		}
		cur = b;
		while ( ( cur = cur.parentNode ) ) {
			bp.unshift( cur );
		}

		// Walk down the tree looking for a discrepancy
		while ( ap[ i ] === bp[ i ] ) {
			i++;
		}

		return i ?

			// Do a sibling check if the nodes have a common ancestor
			siblingCheck( ap[ i ], bp[ i ] ) :

			// Otherwise nodes in our document sort first
			// Support: IE 11+, Edge 17 - 18+
			// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
			// two documents; shallow comparisons work.
			/* eslint-disable eqeqeq */
			ap[ i ] == preferredDoc ? -1 :
			bp[ i ] == preferredDoc ? 1 :
			/* eslint-enable eqeqeq */
			0;
	};

	return document;
};

Sizzle.matches = function( expr, elements ) {
	return Sizzle( expr, null, null, elements );
};

Sizzle.matchesSelector = function( elem, expr ) {
	setDocument( elem );

	if ( support.matchesSelector && documentIsHTML &&
		!nonnativeSelectorCache[ expr + " " ] &&
		( !rbuggyMatches || !rbuggyMatches.test( expr ) ) &&
		( !rbuggyQSA     || !rbuggyQSA.test( expr ) ) ) {

		try {
			var ret = matches.call( elem, expr );

			// IE 9's matchesSelector returns false on disconnected nodes
			if ( ret || support.disconnectedMatch ||

				// As well, disconnected nodes are said to be in a document
				// fragment in IE 9
				elem.document && elem.document.nodeType !== 11 ) {
				return ret;
			}
		} catch ( e ) {
			nonnativeSelectorCache( expr, true );
		}
	}

	return Sizzle( expr, document, null, [ elem ] ).length > 0;
};

Sizzle.contains = function( context, elem ) {

	// Set document vars if needed
	// Support: IE 11+, Edge 17 - 18+
	// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
	// two documents; shallow comparisons work.
	// eslint-disable-next-line eqeqeq
	if ( ( context.ownerDocument || context ) != document ) {
		setDocument( context );
	}
	return contains( context, elem );
};

Sizzle.attr = function( elem, name ) {

	// Set document vars if needed
	// Support: IE 11+, Edge 17 - 18+
	// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
	// two documents; shallow comparisons work.
	// eslint-disable-next-line eqeqeq
	if ( ( elem.ownerDocument || elem ) != document ) {
		setDocument( elem );
	}

	var fn = Expr.attrHandle[ name.toLowerCase() ],

		// Don't get fooled by Object.prototype properties (jQuery #13807)
		val = fn && hasOwn.call( Expr.attrHandle, name.toLowerCase() ) ?
			fn( elem, name, !documentIsHTML ) :
			undefined;

	return val !== undefined ?
		val :
		support.attributes || !documentIsHTML ?
			elem.getAttribute( name ) :
			( val = elem.getAttributeNode( name ) ) && val.specified ?
				val.value :
				null;
};

Sizzle.escape = function( sel ) {
	return ( sel + "" ).replace( rcssescape, fcssescape );
};

Sizzle.error = function( msg ) {
	throw new Error( "Syntax error, unrecognized expression: " + msg );
};

/**
 * Document sorting and removing duplicates
 * @param {ArrayLike} results
 */
Sizzle.uniqueSort = function( results ) {
	var elem,
		duplicates = [],
		j = 0,
		i = 0;

	// Unless we *know* we can detect duplicates, assume their presence
	hasDuplicate = !support.detectDuplicates;
	sortInput = !support.sortStable && results.slice( 0 );
	results.sort( sortOrder );

	if ( hasDuplicate ) {
		while ( ( elem = results[ i++ ] ) ) {
			if ( elem === results[ i ] ) {
				j = duplicates.push( i );
			}
		}
		while ( j-- ) {
			results.splice( duplicates[ j ], 1 );
		}
	}

	// Clear input after sorting to release objects
	// See https://github.com/jquery/sizzle/pull/225
	sortInput = null;

	return results;
};

/**
 * Utility function for retrieving the text value of an array of DOM nodes
 * @param {Array|Element} elem
 */
getText = Sizzle.getText = function( elem ) {
	var node,
		ret = "",
		i = 0,
		nodeType = elem.nodeType;

	if ( !nodeType ) {

		// If no nodeType, this is expected to be an array
		while ( ( node = elem[ i++ ] ) ) {

			// Do not traverse comment nodes
			ret += getText( node );
		}
	} else if ( nodeType === 1 || nodeType === 9 || nodeType === 11 ) {

		// Use textContent for elements
		// innerText usage removed for consistency of new lines (jQuery #11153)
		if ( typeof elem.textContent === "string" ) {
			return elem.textContent;
		} else {

			// Traverse its children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				ret += getText( elem );
			}
		}
	} else if ( nodeType === 3 || nodeType === 4 ) {
		return elem.nodeValue;
	}

	// Do not include comment or processing instruction nodes

	return ret;
};

Expr = Sizzle.selectors = {

	// Can be adjusted by the user
	cacheLength: 50,

	createPseudo: markFunction,

	match: matchExpr,

	attrHandle: {},

	find: {},

	relative: {
		">": { dir: "parentNode", first: true },
		" ": { dir: "parentNode" },
		"+": { dir: "previousSibling", first: true },
		"~": { dir: "previousSibling" }
	},

	preFilter: {
		"ATTR": function( match ) {
			match[ 1 ] = match[ 1 ].replace( runescape, funescape );

			// Move the given value to match[3] whether quoted or unquoted
			match[ 3 ] = ( match[ 3 ] || match[ 4 ] ||
				match[ 5 ] || "" ).replace( runescape, funescape );

			if ( match[ 2 ] === "~=" ) {
				match[ 3 ] = " " + match[ 3 ] + " ";
			}

			return match.slice( 0, 4 );
		},

		"CHILD": function( match ) {

			/* matches from matchExpr["CHILD"]
				1 type (only|nth|...)
				2 what (child|of-type)
				3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
				4 xn-component of xn+y argument ([+-]?\d*n|)
				5 sign of xn-component
				6 x of xn-component
				7 sign of y-component
				8 y of y-component
			*/
			match[ 1 ] = match[ 1 ].toLowerCase();

			if ( match[ 1 ].slice( 0, 3 ) === "nth" ) {

				// nth-* requires argument
				if ( !match[ 3 ] ) {
					Sizzle.error( match[ 0 ] );
				}

				// numeric x and y parameters for Expr.filter.CHILD
				// remember that false/true cast respectively to 0/1
				match[ 4 ] = +( match[ 4 ] ?
					match[ 5 ] + ( match[ 6 ] || 1 ) :
					2 * ( match[ 3 ] === "even" || match[ 3 ] === "odd" ) );
				match[ 5 ] = +( ( match[ 7 ] + match[ 8 ] ) || match[ 3 ] === "odd" );

				// other types prohibit arguments
			} else if ( match[ 3 ] ) {
				Sizzle.error( match[ 0 ] );
			}

			return match;
		},

		"PSEUDO": function( match ) {
			var excess,
				unquoted = !match[ 6 ] && match[ 2 ];

			if ( matchExpr[ "CHILD" ].test( match[ 0 ] ) ) {
				return null;
			}

			// Accept quoted arguments as-is
			if ( match[ 3 ] ) {
				match[ 2 ] = match[ 4 ] || match[ 5 ] || "";

			// Strip excess characters from unquoted arguments
			} else if ( unquoted && rpseudo.test( unquoted ) &&

				// Get excess from tokenize (recursively)
				( excess = tokenize( unquoted, true ) ) &&

				// advance to the next closing parenthesis
				( excess = unquoted.indexOf( ")", unquoted.length - excess ) - unquoted.length ) ) {

				// excess is a negative index
				match[ 0 ] = match[ 0 ].slice( 0, excess );
				match[ 2 ] = unquoted.slice( 0, excess );
			}

			// Return only captures needed by the pseudo filter method (type and argument)
			return match.slice( 0, 3 );
		}
	},

	filter: {

		"TAG": function( nodeNameSelector ) {
			var nodeName = nodeNameSelector.replace( runescape, funescape ).toLowerCase();
			return nodeNameSelector === "*" ?
				function() {
					return true;
				} :
				function( elem ) {
					return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
				};
		},

		"CLASS": function( className ) {
			var pattern = classCache[ className + " " ];

			return pattern ||
				( pattern = new RegExp( "(^|" + whitespace +
					")" + className + "(" + whitespace + "|$)" ) ) && classCache(
						className, function( elem ) {
							return pattern.test(
								typeof elem.className === "string" && elem.className ||
								typeof elem.getAttribute !== "undefined" &&
									elem.getAttribute( "class" ) ||
								""
							);
				} );
		},

		"ATTR": function( name, operator, check ) {
			return function( elem ) {
				var result = Sizzle.attr( elem, name );

				if ( result == null ) {
					return operator === "!=";
				}
				if ( !operator ) {
					return true;
				}

				result += "";

				/* eslint-disable max-len */

				return operator === "=" ? result === check :
					operator === "!=" ? result !== check :
					operator === "^=" ? check && result.indexOf( check ) === 0 :
					operator === "*=" ? check && result.indexOf( check ) > -1 :
					operator === "$=" ? check && result.slice( -check.length ) === check :
					operator === "~=" ? ( " " + result.replace( rwhitespace, " " ) + " " ).indexOf( check ) > -1 :
					operator === "|=" ? result === check || result.slice( 0, check.length + 1 ) === check + "-" :
					false;
				/* eslint-enable max-len */

			};
		},

		"CHILD": function( type, what, _argument, first, last ) {
			var simple = type.slice( 0, 3 ) !== "nth",
				forward = type.slice( -4 ) !== "last",
				ofType = what === "of-type";

			return first === 1 && last === 0 ?

				// Shortcut for :nth-*(n)
				function( elem ) {
					return !!elem.parentNode;
				} :

				function( elem, _context, xml ) {
					var cache, uniqueCache, outerCache, node, nodeIndex, start,
						dir = simple !== forward ? "nextSibling" : "previousSibling",
						parent = elem.parentNode,
						name = ofType && elem.nodeName.toLowerCase(),
						useCache = !xml && !ofType,
						diff = false;

					if ( parent ) {

						// :(first|last|only)-(child|of-type)
						if ( simple ) {
							while ( dir ) {
								node = elem;
								while ( ( node = node[ dir ] ) ) {
									if ( ofType ?
										node.nodeName.toLowerCase() === name :
										node.nodeType === 1 ) {

										return false;
									}
								}

								// Reverse direction for :only-* (if we haven't yet done so)
								start = dir = type === "only" && !start && "nextSibling";
							}
							return true;
						}

						start = [ forward ? parent.firstChild : parent.lastChild ];

						// non-xml :nth-child(...) stores cache data on `parent`
						if ( forward && useCache ) {

							// Seek `elem` from a previously-cached index

							// ...in a gzip-friendly way
							node = parent;
							outerCache = node[ expando ] || ( node[ expando ] = {} );

							// Support: IE <9 only
							// Defend against cloned attroperties (jQuery gh-1709)
							uniqueCache = outerCache[ node.uniqueID ] ||
								( outerCache[ node.uniqueID ] = {} );

							cache = uniqueCache[ type ] || [];
							nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
							diff = nodeIndex && cache[ 2 ];
							node = nodeIndex && parent.childNodes[ nodeIndex ];

							while ( ( node = ++nodeIndex && node && node[ dir ] ||

								// Fallback to seeking `elem` from the start
								( diff = nodeIndex = 0 ) || start.pop() ) ) {

								// When found, cache indexes on `parent` and break
								if ( node.nodeType === 1 && ++diff && node === elem ) {
									uniqueCache[ type ] = [ dirruns, nodeIndex, diff ];
									break;
								}
							}

						} else {

							// Use previously-cached element index if available
							if ( useCache ) {

								// ...in a gzip-friendly way
								node = elem;
								outerCache = node[ expando ] || ( node[ expando ] = {} );

								// Support: IE <9 only
								// Defend against cloned attroperties (jQuery gh-1709)
								uniqueCache = outerCache[ node.uniqueID ] ||
									( outerCache[ node.uniqueID ] = {} );

								cache = uniqueCache[ type ] || [];
								nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
								diff = nodeIndex;
							}

							// xml :nth-child(...)
							// or :nth-last-child(...) or :nth(-last)?-of-type(...)
							if ( diff === false ) {

								// Use the same loop as above to seek `elem` from the start
								while ( ( node = ++nodeIndex && node && node[ dir ] ||
									( diff = nodeIndex = 0 ) || start.pop() ) ) {

									if ( ( ofType ?
										node.nodeName.toLowerCase() === name :
										node.nodeType === 1 ) &&
										++diff ) {

										// Cache the index of each encountered element
										if ( useCache ) {
											outerCache = node[ expando ] ||
												( node[ expando ] = {} );

											// Support: IE <9 only
											// Defend against cloned attroperties (jQuery gh-1709)
											uniqueCache = outerCache[ node.uniqueID ] ||
												( outerCache[ node.uniqueID ] = {} );

											uniqueCache[ type ] = [ dirruns, diff ];
										}

										if ( node === elem ) {
											break;
										}
									}
								}
							}
						}

						// Incorporate the offset, then check against cycle size
						diff -= last;
						return diff === first || ( diff % first === 0 && diff / first >= 0 );
					}
				};
		},

		"PSEUDO": function( pseudo, argument ) {

			// pseudo-class names are case-insensitive
			// http://www.w3.org/TR/selectors/#pseudo-classes
			// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
			// Remember that setFilters inherits from pseudos
			var args,
				fn = Expr.pseudos[ pseudo ] || Expr.setFilters[ pseudo.toLowerCase() ] ||
					Sizzle.error( "unsupported pseudo: " + pseudo );

			// The user may use createPseudo to indicate that
			// arguments are needed to create the filter function
			// just as Sizzle does
			if ( fn[ expando ] ) {
				return fn( argument );
			}

			// But maintain support for old signatures
			if ( fn.length > 1 ) {
				args = [ pseudo, pseudo, "", argument ];
				return Expr.setFilters.hasOwnProperty( pseudo.toLowerCase() ) ?
					markFunction( function( seed, matches ) {
						var idx,
							matched = fn( seed, argument ),
							i = matched.length;
						while ( i-- ) {
							idx = indexOf( seed, matched[ i ] );
							seed[ idx ] = !( matches[ idx ] = matched[ i ] );
						}
					} ) :
					function( elem ) {
						return fn( elem, 0, args );
					};
			}

			return fn;
		}
	},

	pseudos: {

		// Potentially complex pseudos
		"not": markFunction( function( selector ) {

			// Trim the selector passed to compile
			// to avoid treating leading and trailing
			// spaces as combinators
			var input = [],
				results = [],
				matcher = compile( selector.replace( rtrim, "$1" ) );

			return matcher[ expando ] ?
				markFunction( function( seed, matches, _context, xml ) {
					var elem,
						unmatched = matcher( seed, null, xml, [] ),
						i = seed.length;

					// Match elements unmatched by `matcher`
					while ( i-- ) {
						if ( ( elem = unmatched[ i ] ) ) {
							seed[ i ] = !( matches[ i ] = elem );
						}
					}
				} ) :
				function( elem, _context, xml ) {
					input[ 0 ] = elem;
					matcher( input, null, xml, results );

					// Don't keep the element (issue #299)
					input[ 0 ] = null;
					return !results.pop();
				};
		} ),

		"has": markFunction( function( selector ) {
			return function( elem ) {
				return Sizzle( selector, elem ).length > 0;
			};
		} ),

		"contains": markFunction( function( text ) {
			text = text.replace( runescape, funescape );
			return function( elem ) {
				return ( elem.textContent || getText( elem ) ).indexOf( text ) > -1;
			};
		} ),

		// "Whether an element is represented by a :lang() selector
		// is based solely on the element's language value
		// being equal to the identifier C,
		// or beginning with the identifier C immediately followed by "-".
		// The matching of C against the element's language value is performed case-insensitively.
		// The identifier C does not have to be a valid language name."
		// http://www.w3.org/TR/selectors/#lang-pseudo
		"lang": markFunction( function( lang ) {

			// lang value must be a valid identifier
			if ( !ridentifier.test( lang || "" ) ) {
				Sizzle.error( "unsupported lang: " + lang );
			}
			lang = lang.replace( runescape, funescape ).toLowerCase();
			return function( elem ) {
				var elemLang;
				do {
					if ( ( elemLang = documentIsHTML ?
						elem.lang :
						elem.getAttribute( "xml:lang" ) || elem.getAttribute( "lang" ) ) ) {

						elemLang = elemLang.toLowerCase();
						return elemLang === lang || elemLang.indexOf( lang + "-" ) === 0;
					}
				} while ( ( elem = elem.parentNode ) && elem.nodeType === 1 );
				return false;
			};
		} ),

		// Miscellaneous
		"target": function( elem ) {
			var hash = window.location && window.location.hash;
			return hash && hash.slice( 1 ) === elem.id;
		},

		"root": function( elem ) {
			return elem === docElem;
		},

		"focus": function( elem ) {
			return elem === document.activeElement &&
				( !document.hasFocus || document.hasFocus() ) &&
				!!( elem.type || elem.href || ~elem.tabIndex );
		},

		// Boolean properties
		"enabled": createDisabledPseudo( false ),
		"disabled": createDisabledPseudo( true ),

		"checked": function( elem ) {

			// In CSS3, :checked should return both checked and selected elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			var nodeName = elem.nodeName.toLowerCase();
			return ( nodeName === "input" && !!elem.checked ) ||
				( nodeName === "option" && !!elem.selected );
		},

		"selected": function( elem ) {

			// Accessing this property makes selected-by-default
			// options in Safari work properly
			if ( elem.parentNode ) {
				// eslint-disable-next-line no-unused-expressions
				elem.parentNode.selectedIndex;
			}

			return elem.selected === true;
		},

		// Contents
		"empty": function( elem ) {

			// http://www.w3.org/TR/selectors/#empty-pseudo
			// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
			//   but not by others (comment: 8; processing instruction: 7; etc.)
			// nodeType < 6 works because attributes (2) do not appear as children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				if ( elem.nodeType < 6 ) {
					return false;
				}
			}
			return true;
		},

		"parent": function( elem ) {
			return !Expr.pseudos[ "empty" ]( elem );
		},

		// Element/input types
		"header": function( elem ) {
			return rheader.test( elem.nodeName );
		},

		"input": function( elem ) {
			return rinputs.test( elem.nodeName );
		},

		"button": function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return name === "input" && elem.type === "button" || name === "button";
		},

		"text": function( elem ) {
			var attr;
			return elem.nodeName.toLowerCase() === "input" &&
				elem.type === "text" &&

				// Support: IE<8
				// New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
				( ( attr = elem.getAttribute( "type" ) ) == null ||
					attr.toLowerCase() === "text" );
		},

		// Position-in-collection
		"first": createPositionalPseudo( function() {
			return [ 0 ];
		} ),

		"last": createPositionalPseudo( function( _matchIndexes, length ) {
			return [ length - 1 ];
		} ),

		"eq": createPositionalPseudo( function( _matchIndexes, length, argument ) {
			return [ argument < 0 ? argument + length : argument ];
		} ),

		"even": createPositionalPseudo( function( matchIndexes, length ) {
			var i = 0;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		} ),

		"odd": createPositionalPseudo( function( matchIndexes, length ) {
			var i = 1;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		} ),

		"lt": createPositionalPseudo( function( matchIndexes, length, argument ) {
			var i = argument < 0 ?
				argument + length :
				argument > length ?
					length :
					argument;
			for ( ; --i >= 0; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		} ),

		"gt": createPositionalPseudo( function( matchIndexes, length, argument ) {
			var i = argument < 0 ? argument + length : argument;
			for ( ; ++i < length; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		} )
	}
};

Expr.pseudos[ "nth" ] = Expr.pseudos[ "eq" ];

// Add button/input type pseudos
for ( i in { radio: true, checkbox: true, file: true, password: true, image: true } ) {
	Expr.pseudos[ i ] = createInputPseudo( i );
}
for ( i in { submit: true, reset: true } ) {
	Expr.pseudos[ i ] = createButtonPseudo( i );
}

// Easy API for creating new setFilters
function setFilters() {}
setFilters.prototype = Expr.filters = Expr.pseudos;
Expr.setFilters = new setFilters();

tokenize = Sizzle.tokenize = function( selector, parseOnly ) {
	var matched, match, tokens, type,
		soFar, groups, preFilters,
		cached = tokenCache[ selector + " " ];

	if ( cached ) {
		return parseOnly ? 0 : cached.slice( 0 );
	}

	soFar = selector;
	groups = [];
	preFilters = Expr.preFilter;

	while ( soFar ) {

		// Comma and first run
		if ( !matched || ( match = rcomma.exec( soFar ) ) ) {
			if ( match ) {

				// Don't consume trailing commas as valid
				soFar = soFar.slice( match[ 0 ].length ) || soFar;
			}
			groups.push( ( tokens = [] ) );
		}

		matched = false;

		// Combinators
		if ( ( match = rcombinators.exec( soFar ) ) ) {
			matched = match.shift();
			tokens.push( {
				value: matched,

				// Cast descendant combinators to space
				type: match[ 0 ].replace( rtrim, " " )
			} );
			soFar = soFar.slice( matched.length );
		}

		// Filters
		for ( type in Expr.filter ) {
			if ( ( match = matchExpr[ type ].exec( soFar ) ) && ( !preFilters[ type ] ||
				( match = preFilters[ type ]( match ) ) ) ) {
				matched = match.shift();
				tokens.push( {
					value: matched,
					type: type,
					matches: match
				} );
				soFar = soFar.slice( matched.length );
			}
		}

		if ( !matched ) {
			break;
		}
	}

	// Return the length of the invalid excess
	// if we're just parsing
	// Otherwise, throw an error or return tokens
	return parseOnly ?
		soFar.length :
		soFar ?
			Sizzle.error( selector ) :

			// Cache the tokens
			tokenCache( selector, groups ).slice( 0 );
};

function toSelector( tokens ) {
	var i = 0,
		len = tokens.length,
		selector = "";
	for ( ; i < len; i++ ) {
		selector += tokens[ i ].value;
	}
	return selector;
}

function addCombinator( matcher, combinator, base ) {
	var dir = combinator.dir,
		skip = combinator.next,
		key = skip || dir,
		checkNonElements = base && key === "parentNode",
		doneName = done++;

	return combinator.first ?

		// Check against closest ancestor/preceding element
		function( elem, context, xml ) {
			while ( ( elem = elem[ dir ] ) ) {
				if ( elem.nodeType === 1 || checkNonElements ) {
					return matcher( elem, context, xml );
				}
			}
			return false;
		} :

		// Check against all ancestor/preceding elements
		function( elem, context, xml ) {
			var oldCache, uniqueCache, outerCache,
				newCache = [ dirruns, doneName ];

			// We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching
			if ( xml ) {
				while ( ( elem = elem[ dir ] ) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						if ( matcher( elem, context, xml ) ) {
							return true;
						}
					}
				}
			} else {
				while ( ( elem = elem[ dir ] ) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						outerCache = elem[ expando ] || ( elem[ expando ] = {} );

						// Support: IE <9 only
						// Defend against cloned attroperties (jQuery gh-1709)
						uniqueCache = outerCache[ elem.uniqueID ] ||
							( outerCache[ elem.uniqueID ] = {} );

						if ( skip && skip === elem.nodeName.toLowerCase() ) {
							elem = elem[ dir ] || elem;
						} else if ( ( oldCache = uniqueCache[ key ] ) &&
							oldCache[ 0 ] === dirruns && oldCache[ 1 ] === doneName ) {

							// Assign to newCache so results back-propagate to previous elements
							return ( newCache[ 2 ] = oldCache[ 2 ] );
						} else {

							// Reuse newcache so results back-propagate to previous elements
							uniqueCache[ key ] = newCache;

							// A match means we're done; a fail means we have to keep checking
							if ( ( newCache[ 2 ] = matcher( elem, context, xml ) ) ) {
								return true;
							}
						}
					}
				}
			}
			return false;
		};
}

function elementMatcher( matchers ) {
	return matchers.length > 1 ?
		function( elem, context, xml ) {
			var i = matchers.length;
			while ( i-- ) {
				if ( !matchers[ i ]( elem, context, xml ) ) {
					return false;
				}
			}
			return true;
		} :
		matchers[ 0 ];
}

function multipleContexts( selector, contexts, results ) {
	var i = 0,
		len = contexts.length;
	for ( ; i < len; i++ ) {
		Sizzle( selector, contexts[ i ], results );
	}
	return results;
}

function condense( unmatched, map, filter, context, xml ) {
	var elem,
		newUnmatched = [],
		i = 0,
		len = unmatched.length,
		mapped = map != null;

	for ( ; i < len; i++ ) {
		if ( ( elem = unmatched[ i ] ) ) {
			if ( !filter || filter( elem, context, xml ) ) {
				newUnmatched.push( elem );
				if ( mapped ) {
					map.push( i );
				}
			}
		}
	}

	return newUnmatched;
}

function setMatcher( preFilter, selector, matcher, postFilter, postFinder, postSelector ) {
	if ( postFilter && !postFilter[ expando ] ) {
		postFilter = setMatcher( postFilter );
	}
	if ( postFinder && !postFinder[ expando ] ) {
		postFinder = setMatcher( postFinder, postSelector );
	}
	return markFunction( function( seed, results, context, xml ) {
		var temp, i, elem,
			preMap = [],
			postMap = [],
			preexisting = results.length,

			// Get initial elements from seed or context
			elems = seed || multipleContexts(
				selector || "*",
				context.nodeType ? [ context ] : context,
				[]
			),

			// Prefilter to get matcher input, preserving a map for seed-results synchronization
			matcherIn = preFilter && ( seed || !selector ) ?
				condense( elems, preMap, preFilter, context, xml ) :
				elems,

			matcherOut = matcher ?

				// If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
				postFinder || ( seed ? preFilter : preexisting || postFilter ) ?

					// ...intermediate processing is necessary
					[] :

					// ...otherwise use results directly
					results :
				matcherIn;

		// Find primary matches
		if ( matcher ) {
			matcher( matcherIn, matcherOut, context, xml );
		}

		// Apply postFilter
		if ( postFilter ) {
			temp = condense( matcherOut, postMap );
			postFilter( temp, [], context, xml );

			// Un-match failing elements by moving them back to matcherIn
			i = temp.length;
			while ( i-- ) {
				if ( ( elem = temp[ i ] ) ) {
					matcherOut[ postMap[ i ] ] = !( matcherIn[ postMap[ i ] ] = elem );
				}
			}
		}

		if ( seed ) {
			if ( postFinder || preFilter ) {
				if ( postFinder ) {

					// Get the final matcherOut by condensing this intermediate into postFinder contexts
					temp = [];
					i = matcherOut.length;
					while ( i-- ) {
						if ( ( elem = matcherOut[ i ] ) ) {

							// Restore matcherIn since elem is not yet a final match
							temp.push( ( matcherIn[ i ] = elem ) );
						}
					}
					postFinder( null, ( matcherOut = [] ), temp, xml );
				}

				// Move matched elements from seed to results to keep them synchronized
				i = matcherOut.length;
				while ( i-- ) {
					if ( ( elem = matcherOut[ i ] ) &&
						( temp = postFinder ? indexOf( seed, elem ) : preMap[ i ] ) > -1 ) {

						seed[ temp ] = !( results[ temp ] = elem );
					}
				}
			}

		// Add elements to results, through postFinder if defined
		} else {
			matcherOut = condense(
				matcherOut === results ?
					matcherOut.splice( preexisting, matcherOut.length ) :
					matcherOut
			);
			if ( postFinder ) {
				postFinder( null, results, matcherOut, xml );
			} else {
				push.apply( results, matcherOut );
			}
		}
	} );
}

function matcherFromTokens( tokens ) {
	var checkContext, matcher, j,
		len = tokens.length,
		leadingRelative = Expr.relative[ tokens[ 0 ].type ],
		implicitRelative = leadingRelative || Expr.relative[ " " ],
		i = leadingRelative ? 1 : 0,

		// The foundational matcher ensures that elements are reachable from top-level context(s)
		matchContext = addCombinator( function( elem ) {
			return elem === checkContext;
		}, implicitRelative, true ),
		matchAnyContext = addCombinator( function( elem ) {
			return indexOf( checkContext, elem ) > -1;
		}, implicitRelative, true ),
		matchers = [ function( elem, context, xml ) {
			var ret = ( !leadingRelative && ( xml || context !== outermostContext ) ) || (
				( checkContext = context ).nodeType ?
					matchContext( elem, context, xml ) :
					matchAnyContext( elem, context, xml ) );

			// Avoid hanging onto element (issue #299)
			checkContext = null;
			return ret;
		} ];

	for ( ; i < len; i++ ) {
		if ( ( matcher = Expr.relative[ tokens[ i ].type ] ) ) {
			matchers = [ addCombinator( elementMatcher( matchers ), matcher ) ];
		} else {
			matcher = Expr.filter[ tokens[ i ].type ].apply( null, tokens[ i ].matches );

			// Return special upon seeing a positional matcher
			if ( matcher[ expando ] ) {

				// Find the next relative operator (if any) for proper handling
				j = ++i;
				for ( ; j < len; j++ ) {
					if ( Expr.relative[ tokens[ j ].type ] ) {
						break;
					}
				}
				return setMatcher(
					i > 1 && elementMatcher( matchers ),
					i > 1 && toSelector(

					// If the preceding token was a descendant combinator, insert an implicit any-element `*`
					tokens
						.slice( 0, i - 1 )
						.concat( { value: tokens[ i - 2 ].type === " " ? "*" : "" } )
					).replace( rtrim, "$1" ),
					matcher,
					i < j && matcherFromTokens( tokens.slice( i, j ) ),
					j < len && matcherFromTokens( ( tokens = tokens.slice( j ) ) ),
					j < len && toSelector( tokens )
				);
			}
			matchers.push( matcher );
		}
	}

	return elementMatcher( matchers );
}

function matcherFromGroupMatchers( elementMatchers, setMatchers ) {
	var bySet = setMatchers.length > 0,
		byElement = elementMatchers.length > 0,
		superMatcher = function( seed, context, xml, results, outermost ) {
			var elem, j, matcher,
				matchedCount = 0,
				i = "0",
				unmatched = seed && [],
				setMatched = [],
				contextBackup = outermostContext,

				// We must always have either seed elements or outermost context
				elems = seed || byElement && Expr.find[ "TAG" ]( "*", outermost ),

				// Use integer dirruns iff this is the outermost matcher
				dirrunsUnique = ( dirruns += contextBackup == null ? 1 : Math.random() || 0.1 ),
				len = elems.length;

			if ( outermost ) {

				// Support: IE 11+, Edge 17 - 18+
				// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
				// two documents; shallow comparisons work.
				// eslint-disable-next-line eqeqeq
				outermostContext = context == document || context || outermost;
			}

			// Add elements passing elementMatchers directly to results
			// Support: IE<9, Safari
			// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
			for ( ; i !== len && ( elem = elems[ i ] ) != null; i++ ) {
				if ( byElement && elem ) {
					j = 0;

					// Support: IE 11+, Edge 17 - 18+
					// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
					// two documents; shallow comparisons work.
					// eslint-disable-next-line eqeqeq
					if ( !context && elem.ownerDocument != document ) {
						setDocument( elem );
						xml = !documentIsHTML;
					}
					while ( ( matcher = elementMatchers[ j++ ] ) ) {
						if ( matcher( elem, context || document, xml ) ) {
							results.push( elem );
							break;
						}
					}
					if ( outermost ) {
						dirruns = dirrunsUnique;
					}
				}

				// Track unmatched elements for set filters
				if ( bySet ) {

					// They will have gone through all possible matchers
					if ( ( elem = !matcher && elem ) ) {
						matchedCount--;
					}

					// Lengthen the array for every element, matched or not
					if ( seed ) {
						unmatched.push( elem );
					}
				}
			}

			// `i` is now the count of elements visited above, and adding it to `matchedCount`
			// makes the latter nonnegative.
			matchedCount += i;

			// Apply set filters to unmatched elements
			// NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
			// equals `i`), unless we didn't visit _any_ elements in the above loop because we have
			// no element matchers and no seed.
			// Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
			// case, which will result in a "00" `matchedCount` that differs from `i` but is also
			// numerically zero.
			if ( bySet && i !== matchedCount ) {
				j = 0;
				while ( ( matcher = setMatchers[ j++ ] ) ) {
					matcher( unmatched, setMatched, context, xml );
				}

				if ( seed ) {

					// Reintegrate element matches to eliminate the need for sorting
					if ( matchedCount > 0 ) {
						while ( i-- ) {
							if ( !( unmatched[ i ] || setMatched[ i ] ) ) {
								setMatched[ i ] = pop.call( results );
							}
						}
					}

					// Discard index placeholder values to get only actual matches
					setMatched = condense( setMatched );
				}

				// Add matches to results
				push.apply( results, setMatched );

				// Seedless set matches succeeding multiple successful matchers stipulate sorting
				if ( outermost && !seed && setMatched.length > 0 &&
					( matchedCount + setMatchers.length ) > 1 ) {

					Sizzle.uniqueSort( results );
				}
			}

			// Override manipulation of globals by nested matchers
			if ( outermost ) {
				dirruns = dirrunsUnique;
				outermostContext = contextBackup;
			}

			return unmatched;
		};

	return bySet ?
		markFunction( superMatcher ) :
		superMatcher;
}

compile = Sizzle.compile = function( selector, match /* Internal Use Only */ ) {
	var i,
		setMatchers = [],
		elementMatchers = [],
		cached = compilerCache[ selector + " " ];

	if ( !cached ) {

		// Generate a function of recursive functions that can be used to check each element
		if ( !match ) {
			match = tokenize( selector );
		}
		i = match.length;
		while ( i-- ) {
			cached = matcherFromTokens( match[ i ] );
			if ( cached[ expando ] ) {
				setMatchers.push( cached );
			} else {
				elementMatchers.push( cached );
			}
		}

		// Cache the compiled function
		cached = compilerCache(
			selector,
			matcherFromGroupMatchers( elementMatchers, setMatchers )
		);

		// Save selector and tokenization
		cached.selector = selector;
	}
	return cached;
};

/**
 * A low-level selection function that works with Sizzle's compiled
 *  selector functions
 * @param {String|Function} selector A selector or a pre-compiled
 *  selector function built with Sizzle.compile
 * @param {Element} context
 * @param {Array} [results]
 * @param {Array} [seed] A set of elements to match against
 */
select = Sizzle.select = function( selector, context, results, seed ) {
	var i, tokens, token, type, find,
		compiled = typeof selector === "function" && selector,
		match = !seed && tokenize( ( selector = compiled.selector || selector ) );

	results = results || [];

	// Try to minimize operations if there is only one selector in the list and no seed
	// (the latter of which guarantees us context)
	if ( match.length === 1 ) {

		// Reduce context if the leading compound selector is an ID
		tokens = match[ 0 ] = match[ 0 ].slice( 0 );
		if ( tokens.length > 2 && ( token = tokens[ 0 ] ).type === "ID" &&
			context.nodeType === 9 && documentIsHTML && Expr.relative[ tokens[ 1 ].type ] ) {

			context = ( Expr.find[ "ID" ]( token.matches[ 0 ]
				.replace( runescape, funescape ), context ) || [] )[ 0 ];
			if ( !context ) {
				return results;

			// Precompiled matchers will still verify ancestry, so step up a level
			} else if ( compiled ) {
				context = context.parentNode;
			}

			selector = selector.slice( tokens.shift().value.length );
		}

		// Fetch a seed set for right-to-left matching
		i = matchExpr[ "needsContext" ].test( selector ) ? 0 : tokens.length;
		while ( i-- ) {
			token = tokens[ i ];

			// Abort if we hit a combinator
			if ( Expr.relative[ ( type = token.type ) ] ) {
				break;
			}
			if ( ( find = Expr.find[ type ] ) ) {

				// Search, expanding context for leading sibling combinators
				if ( ( seed = find(
					token.matches[ 0 ].replace( runescape, funescape ),
					rsibling.test( tokens[ 0 ].type ) && testContext( context.parentNode ) ||
						context
				) ) ) {

					// If seed is empty or no tokens remain, we can return early
					tokens.splice( i, 1 );
					selector = seed.length && toSelector( tokens );
					if ( !selector ) {
						push.apply( results, seed );
						return results;
					}

					break;
				}
			}
		}
	}

	// Compile and execute a filtering function if one is not provided
	// Provide `match` to avoid retokenization if we modified the selector above
	( compiled || compile( selector, match ) )(
		seed,
		context,
		!documentIsHTML,
		results,
		!context || rsibling.test( selector ) && testContext( context.parentNode ) || context
	);
	return results;
};

// One-time assignments

// Sort stability
support.sortStable = expando.split( "" ).sort( sortOrder ).join( "" ) === expando;

// Support: Chrome 14-35+
// Always assume duplicates if they aren't passed to the comparison function
support.detectDuplicates = !!hasDuplicate;

// Initialize against the default document
setDocument();

// Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
// Detached nodes confoundingly follow *each other*
support.sortDetached = assert( function( el ) {

	// Should return 1, but returns 4 (following)
	return el.compareDocumentPosition( document.createElement( "fieldset" ) ) & 1;
} );

// Support: IE<8
// Prevent attribute/property "interpolation"
// https://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
if ( !assert( function( el ) {
	el.innerHTML = "<a href='#'></a>";
	return el.firstChild.getAttribute( "href" ) === "#";
} ) ) {
	addHandle( "type|href|height|width", function( elem, name, isXML ) {
		if ( !isXML ) {
			return elem.getAttribute( name, name.toLowerCase() === "type" ? 1 : 2 );
		}
	} );
}

// Support: IE<9
// Use defaultValue in place of getAttribute("value")
if ( !support.attributes || !assert( function( el ) {
	el.innerHTML = "<input/>";
	el.firstChild.setAttribute( "value", "" );
	return el.firstChild.getAttribute( "value" ) === "";
} ) ) {
	addHandle( "value", function( elem, _name, isXML ) {
		if ( !isXML && elem.nodeName.toLowerCase() === "input" ) {
			return elem.defaultValue;
		}
	} );
}

// Support: IE<9
// Use getAttributeNode to fetch booleans when getAttribute lies
if ( !assert( function( el ) {
	return el.getAttribute( "disabled" ) == null;
} ) ) {
	addHandle( booleans, function( elem, name, isXML ) {
		var val;
		if ( !isXML ) {
			return elem[ name ] === true ? name.toLowerCase() :
				( val = elem.getAttributeNode( name ) ) && val.specified ?
					val.value :
					null;
		}
	} );
}

return Sizzle;

} )( window );



jQuery.find = Sizzle;
jQuery.expr = Sizzle.selectors;

// Deprecated
jQuery.expr[ ":" ] = jQuery.expr.pseudos;
jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
jQuery.text = Sizzle.getText;
jQuery.isXMLDoc = Sizzle.isXML;
jQuery.contains = Sizzle.contains;
jQuery.escapeSelector = Sizzle.escape;




var dir = function( elem, dir, until ) {
	var matched = [],
		truncate = until !== undefined;

	while ( ( elem = elem[ dir ] ) && elem.nodeType !== 9 ) {
		if ( elem.nodeType === 1 ) {
			if ( truncate && jQuery( elem ).is( until ) ) {
				break;
			}
			matched.push( elem );
		}
	}
	return matched;
};


var siblings = function( n, elem ) {
	var matched = [];

	for ( ; n; n = n.nextSibling ) {
		if ( n.nodeType === 1 && n !== elem ) {
			matched.push( n );
		}
	}

	return matched;
};


var rneedsContext = jQuery.expr.match.needsContext;



function nodeName( elem, name ) {

  return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();

};
var rsingleTag = ( /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i );



// Implement the identical functionality for filter and not
function winnow( elements, qualifier, not ) {
	if ( isFunction( qualifier ) ) {
		return jQuery.grep( elements, function( elem, i ) {
			return !!qualifier.call( elem, i, elem ) !== not;
		} );
	}

	// Single element
	if ( qualifier.nodeType ) {
		return jQuery.grep( elements, function( elem ) {
			return ( elem === qualifier ) !== not;
		} );
	}

	// Arraylike of elements (jQuery, arguments, Array)
	if ( typeof qualifier !== "string" ) {
		return jQuery.grep( elements, function( elem ) {
			return ( indexOf.call( qualifier, elem ) > -1 ) !== not;
		} );
	}

	// Filtered directly for both simple and complex selectors
	return jQuery.filter( qualifier, elements, not );
}

jQuery.filter = function( expr, elems, not ) {
	var elem = elems[ 0 ];

	if ( not ) {
		expr = ":not(" + expr + ")";
	}

	if ( elems.length === 1 && elem.nodeType === 1 ) {
		return jQuery.find.matchesSelector( elem, expr ) ? [ elem ] : [];
	}

	return jQuery.find.matches( expr, jQuery.grep( elems, function( elem ) {
		return elem.nodeType === 1;
	} ) );
};

jQuery.fn.extend( {
	find: function( selector ) {
		var i, ret,
			len = this.length,
			self = this;

		if ( typeof selector !== "string" ) {
			return this.pushStack( jQuery( selector ).filter( function() {
				for ( i = 0; i < len; i++ ) {
					if ( jQuery.contains( self[ i ], this ) ) {
						return true;
					}
				}
			} ) );
		}

		ret = this.pushStack( [] );

		for ( i = 0; i < len; i++ ) {
			jQuery.find( selector, self[ i ], ret );
		}

		return len > 1 ? jQuery.uniqueSort( ret ) : ret;
	},
	filter: function( selector ) {
		return this.pushStack( winnow( this, selector || [], false ) );
	},
	not: function( selector ) {
		return this.pushStack( winnow( this, selector || [], true ) );
	},
	is: function( selector ) {
		return !!winnow(
			this,

			// If this is a positional/relative selector, check membership in the returned set
			// so $("p:first").is("p:last") won't return true for a doc with two "p".
			typeof selector === "string" && rneedsContext.test( selector ) ?
				jQuery( selector ) :
				selector || [],
			false
		).length;
	}
} );


// Initialize a jQuery object


// A central reference to the root jQuery(document)
var rootjQuery,

	// A simple way to check for HTML strings
	// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
	// Strict HTML recognition (#11290: must start with <)
	// Shortcut simple #id case for speed
	rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,

	init = jQuery.fn.init = function( selector, context, root ) {
		var match, elem;

		// HANDLE: $(""), $(null), $(undefined), $(false)
		if ( !selector ) {
			return this;
		}

		// Method init() accepts an alternate rootjQuery
		// so migrate can support jQuery.sub (gh-2101)
		root = root || rootjQuery;

		// Handle HTML strings
		if ( typeof selector === "string" ) {
			if ( selector[ 0 ] === "<" &&
				selector[ selector.length - 1 ] === ">" &&
				selector.length >= 3 ) {

				// Assume that strings that start and end with <> are HTML and skip the regex check
				match = [ null, selector, null ];

			} else {
				match = rquickExpr.exec( selector );
			}

			// Match html or make sure no context is specified for #id
			if ( match && ( match[ 1 ] || !context ) ) {

				// HANDLE: $(html) -> $(array)
				if ( match[ 1 ] ) {
					context = context instanceof jQuery ? context[ 0 ] : context;

					// Option to run scripts is true for back-compat
					// Intentionally let the error be thrown if parseHTML is not present
					jQuery.merge( this, jQuery.parseHTML(
						match[ 1 ],
						context && context.nodeType ? context.ownerDocument || context : document,
						true
					) );

					// HANDLE: $(html, props)
					if ( rsingleTag.test( match[ 1 ] ) && jQuery.isPlainObject( context ) ) {
						for ( match in context ) {

							// Properties of context are called as methods if possible
							if ( isFunction( this[ match ] ) ) {
								this[ match ]( context[ match ] );

							// ...and otherwise set as attributes
							} else {
								this.attr( match, context[ match ] );
							}
						}
					}

					return this;

				// HANDLE: $(#id)
				} else {
					elem = document.getElementById( match[ 2 ] );

					if ( elem ) {

						// Inject the element directly into the jQuery object
						this[ 0 ] = elem;
						this.length = 1;
					}
					return this;
				}

			// HANDLE: $(expr, $(...))
			} else if ( !context || context.jquery ) {
				return ( context || root ).find( selector );

			// HANDLE: $(expr, context)
			// (which is just equivalent to: $(context).find(expr)
			} else {
				return this.constructor( context ).find( selector );
			}

		// HANDLE: $(DOMElement)
		} else if ( selector.nodeType ) {
			this[ 0 ] = selector;
			this.length = 1;
			return this;

		// HANDLE: $(function)
		// Shortcut for document ready
		} else if ( isFunction( selector ) ) {
			return root.ready !== undefined ?
				root.ready( selector ) :

				// Execute immediately if ready is not present
				selector( jQuery );
		}

		return jQuery.makeArray( selector, this );
	};

// Give the init function the jQuery prototype for later instantiation
init.prototype = jQuery.fn;

// Initialize central reference
rootjQuery = jQuery( document );


var rparentsprev = /^(?:parents|prev(?:Until|All))/,

	// Methods guaranteed to produce a unique set when starting from a unique set
	guaranteedUnique = {
		children: true,
		contents: true,
		next: true,
		prev: true
	};

jQuery.fn.extend( {
	has: function( target ) {
		var targets = jQuery( target, this ),
			l = targets.length;

		return this.filter( function() {
			var i = 0;
			for ( ; i < l; i++ ) {
				if ( jQuery.contains( this, targets[ i ] ) ) {
					return true;
				}
			}
		} );
	},

	closest: function( selectors, context ) {
		var cur,
			i = 0,
			l = this.length,
			matched = [],
			targets = typeof selectors !== "string" && jQuery( selectors );

		// Positional selectors never match, since there's no _selection_ context
		if ( !rneedsContext.test( selectors ) ) {
			for ( ; i < l; i++ ) {
				for ( cur = this[ i ]; cur && cur !== context; cur = cur.parentNode ) {

					// Always skip document fragments
					if ( cur.nodeType < 11 && ( targets ?
						targets.index( cur ) > -1 :

						// Don't pass non-elements to Sizzle
						cur.nodeType === 1 &&
							jQuery.find.matchesSelector( cur, selectors ) ) ) {

						matched.push( cur );
						break;
					}
				}
			}
		}

		return this.pushStack( matched.length > 1 ? jQuery.uniqueSort( matched ) : matched );
	},

	// Determine the position of an element within the set
	index: function( elem ) {

		// No argument, return index in parent
		if ( !elem ) {
			return ( this[ 0 ] && this[ 0 ].parentNode ) ? this.first().prevAll().length : -1;
		}

		// Index in selector
		if ( typeof elem === "string" ) {
			return indexOf.call( jQuery( elem ), this[ 0 ] );
		}

		// Locate the position of the desired element
		return indexOf.call( this,

			// If it receives a jQuery object, the first element is used
			elem.jquery ? elem[ 0 ] : elem
		);
	},

	add: function( selector, context ) {
		return this.pushStack(
			jQuery.uniqueSort(
				jQuery.merge( this.get(), jQuery( selector, context ) )
			)
		);
	},

	addBack: function( selector ) {
		return this.add( selector == null ?
			this.prevObject : this.prevObject.filter( selector )
		);
	}
} );

function sibling( cur, dir ) {
	while ( ( cur = cur[ dir ] ) && cur.nodeType !== 1 ) {}
	return cur;
}

jQuery.each( {
	parent: function( elem ) {
		var parent = elem.parentNode;
		return parent && parent.nodeType !== 11 ? parent : null;
	},
	parents: function( elem ) {
		return dir( elem, "parentNode" );
	},
	parentsUntil: function( elem, _i, until ) {
		return dir( elem, "parentNode", until );
	},
	next: function( elem ) {
		return sibling( elem, "nextSibling" );
	},
	prev: function( elem ) {
		return sibling( elem, "previousSibling" );
	},
	nextAll: function( elem ) {
		return dir( elem, "nextSibling" );
	},
	prevAll: function( elem ) {
		return dir( elem, "previousSibling" );
	},
	nextUntil: function( elem, _i, until ) {
		return dir( elem, "nextSibling", until );
	},
	prevUntil: function( elem, _i, until ) {
		return dir( elem, "previousSibling", until );
	},
	siblings: function( elem ) {
		return siblings( ( elem.parentNode || {} ).firstChild, elem );
	},
	children: function( elem ) {
		return siblings( elem.firstChild );
	},
	contents: function( elem ) {
		if ( elem.contentDocument != null &&

			// Support: IE 11+
			// <object> elements with no `data` attribute has an object
			// `contentDocument` with a `null` prototype.
			getProto( elem.contentDocument ) ) {

			return elem.contentDocument;
		}

		// Support: IE 9 - 11 only, iOS 7 only, Android Browser <=4.3 only
		// Treat the template element as a regular one in browsers that
		// don't support it.
		if ( nodeName( elem, "template" ) ) {
			elem = elem.content || elem;
		}

		return jQuery.merge( [], elem.childNodes );
	}
}, function( name, fn ) {
	jQuery.fn[ name ] = function( until, selector ) {
		var matched = jQuery.map( this, fn, until );

		if ( name.slice( -5 ) !== "Until" ) {
			selector = until;
		}

		if ( selector && typeof selector === "string" ) {
			matched = jQuery.filter( selector, matched );
		}

		if ( this.length > 1 ) {

			// Remove duplicates
			if ( !guaranteedUnique[ name ] ) {
				jQuery.uniqueSort( matched );
			}

			// Reverse order for parents* and prev-derivatives
			if ( rparentsprev.test( name ) ) {
				matched.reverse();
			}
		}

		return this.pushStack( matched );
	};
} );
var rnothtmlwhite = ( /[^\x20\t\r\n\f]+/g );



// Convert String-formatted options into Object-formatted ones
function createOptions( options ) {
	var object = {};
	jQuery.each( options.match( rnothtmlwhite ) || [], function( _, flag ) {
		object[ flag ] = true;
	} );
	return object;
}

/*
 * Create a callback list using the following parameters:
 *
 *	options: an optional list of space-separated options that will change how
 *			the callback list behaves or a more traditional option object
 *
 * By default a callback list will act like an event callback list and can be
 * "fired" multiple times.
 *
 * Possible options:
 *
 *	once:			will ensure the callback list can only be fired once (like a Deferred)
 *
 *	memory:			will keep track of previous values and will call any callback added
 *					after the list has been fired right away with the latest "memorized"
 *					values (like a Deferred)
 *
 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
 *
 *	stopOnFalse:	interrupt callings when a callback returns false
 *
 */
jQuery.Callbacks = function( options ) {

	// Convert options from String-formatted to Object-formatted if needed
	// (we check in cache first)
	options = typeof options === "string" ?
		createOptions( options ) :
		jQuery.extend( {}, options );

	var // Flag to know if list is currently firing
		firing,

		// Last fire value for non-forgettable lists
		memory,

		// Flag to know if list was already fired
		fired,

		// Flag to prevent firing
		locked,

		// Actual callback list
		list = [],

		// Queue of execution data for repeatable lists
		queue = [],

		// Index of currently firing callback (modified by add/remove as needed)
		firingIndex = -1,

		// Fire callbacks
		fire = function() {

			// Enforce single-firing
			locked = locked || options.once;

			// Execute callbacks for all pending executions,
			// respecting firingIndex overrides and runtime changes
			fired = firing = true;
			for ( ; queue.length; firingIndex = -1 ) {
				memory = queue.shift();
				while ( ++firingIndex < list.length ) {

					// Run callback and check for early termination
					if ( list[ firingIndex ].apply( memory[ 0 ], memory[ 1 ] ) === false &&
						options.stopOnFalse ) {

						// Jump to end and forget the data so .add doesn't re-fire
						firingIndex = list.length;
						memory = false;
					}
				}
			}

			// Forget the data if we're done with it
			if ( !options.memory ) {
				memory = false;
			}

			firing = false;

			// Clean up if we're done firing for good
			if ( locked ) {

				// Keep an empty list if we have data for future add calls
				if ( memory ) {
					list = [];

				// Otherwise, this object is spent
				} else {
					list = "";
				}
			}
		},

		// Actual Callbacks object
		self = {

			// Add a callback or a collection of callbacks to the list
			add: function() {
				if ( list ) {

					// If we have memory from a past run, we should fire after adding
					if ( memory && !firing ) {
						firingIndex = list.length - 1;
						queue.push( memory );
					}

					( function add( args ) {
						jQuery.each( args, function( _, arg ) {
							if ( isFunction( arg ) ) {
								if ( !options.unique || !self.has( arg ) ) {
									list.push( arg );
								}
							} else if ( arg && arg.length && toType( arg ) !== "string" ) {

								// Inspect recursively
								add( arg );
							}
						} );
					} )( arguments );

					if ( memory && !firing ) {
						fire();
					}
				}
				return this;
			},

			// Remove a callback from the list
			remove: function() {
				jQuery.each( arguments, function( _, arg ) {
					var index;
					while ( ( index = jQuery.inArray( arg, list, index ) ) > -1 ) {
						list.splice( index, 1 );

						// Handle firing indexes
						if ( index <= firingIndex ) {
							firingIndex--;
						}
					}
				} );
				return this;
			},

			// Check if a given callback is in the list.
			// If no argument is given, return whether or not list has callbacks attached.
			has: function( fn ) {
				return fn ?
					jQuery.inArray( fn, list ) > -1 :
					list.length > 0;
			},

			// Remove all callbacks from the list
			empty: function() {
				if ( list ) {
					list = [];
				}
				return this;
			},

			// Disable .fire and .add
			// Abort any current/pending executions
			// Clear all callbacks and values
			disable: function() {
				locked = queue = [];
				list = memory = "";
				return this;
			},
			disabled: function() {
				return !list;
			},

			// Disable .fire
			// Also disable .add unless we have memory (since it would have no effect)
			// Abort any pending executions
			lock: function() {
				locked = queue = [];
				if ( !memory && !firing ) {
					list = memory = "";
				}
				return this;
			},
			locked: function() {
				return !!locked;
			},

			// Call all callbacks with the given context and arguments
			fireWith: function( context, args ) {
				if ( !locked ) {
					args = args || [];
					args = [ context, args.slice ? args.slice() : args ];
					queue.push( args );
					if ( !firing ) {
						fire();
					}
				}
				return this;
			},

			// Call all the callbacks with the given arguments
			fire: function() {
				self.fireWith( this, arguments );
				return this;
			},

			// To know if the callbacks have already been called at least once
			fired: function() {
				return !!fired;
			}
		};

	return self;
};


function Identity( v ) {
	return v;
}
function Thrower( ex ) {
	throw ex;
}

function adoptValue( value, resolve, reject, noValue ) {
	var method;

	try {

		// Check for promise aspect first to privilege synchronous behavior
		if ( value && isFunction( ( method = value.promise ) ) ) {
			method.call( value ).done( resolve ).fail( reject );

		// Other thenables
		} else if ( value && isFunction( ( method = value.then ) ) ) {
			method.call( value, resolve, reject );

		// Other non-thenables
		} else {

			// Control `resolve` arguments by letting Array#slice cast boolean `noValue` to integer:
			// * false: [ value ].slice( 0 ) => resolve( value )
			// * true: [ value ].slice( 1 ) => resolve()
			resolve.apply( undefined, [ value ].slice( noValue ) );
		}

	// For Promises/A+, convert exceptions into rejections
	// Since jQuery.when doesn't unwrap thenables, we can skip the extra checks appearing in
	// Deferred#then to conditionally suppress rejection.
	} catch ( value ) {

		// Support: Android 4.0 only
		// Strict mode functions invoked without .call/.apply get global-object context
		reject.apply( undefined, [ value ] );
	}
}

jQuery.extend( {

	Deferred: function( func ) {
		var tuples = [

				// action, add listener, callbacks,
				// ... .then handlers, argument index, [final state]
				[ "notify", "progress", jQuery.Callbacks( "memory" ),
					jQuery.Callbacks( "memory" ), 2 ],
				[ "resolve", "done", jQuery.Callbacks( "once memory" ),
					jQuery.Callbacks( "once memory" ), 0, "resolved" ],
				[ "reject", "fail", jQuery.Callbacks( "once memory" ),
					jQuery.Callbacks( "once memory" ), 1, "rejected" ]
			],
			state = "pending",
			promise = {
				state: function() {
					return state;
				},
				always: function() {
					deferred.done( arguments ).fail( arguments );
					return this;
				},
				"catch": function( fn ) {
					return promise.then( null, fn );
				},

				// Keep pipe for back-compat
				pipe: function( /* fnDone, fnFail, fnProgress */ ) {
					var fns = arguments;

					return jQuery.Deferred( function( newDefer ) {
						jQuery.each( tuples, function( _i, tuple ) {

							// Map tuples (progress, done, fail) to arguments (done, fail, progress)
							var fn = isFunction( fns[ tuple[ 4 ] ] ) && fns[ tuple[ 4 ] ];

							// deferred.progress(function() { bind to newDefer or newDefer.notify })
							// deferred.done(function() { bind to newDefer or newDefer.resolve })
							// deferred.fail(function() { bind to newDefer or newDefer.reject })
							deferred[ tuple[ 1 ] ]( function() {
								var returned = fn && fn.apply( this, arguments );
								if ( returned && isFunction( returned.promise ) ) {
									returned.promise()
										.progress( newDefer.notify )
										.done( newDefer.resolve )
										.fail( newDefer.reject );
								} else {
									newDefer[ tuple[ 0 ] + "With" ](
										this,
										fn ? [ returned ] : arguments
									);
								}
							} );
						} );
						fns = null;
					} ).promise();
				},
				then: function( onFulfilled, onRejected, onProgress ) {
					var maxDepth = 0;
					function resolve( depth, deferred, handler, special ) {
						return function() {
							var that = this,
								args = arguments,
								mightThrow = function() {
									var returned, then;

									// Support: Promises/A+ section 2.3.3.3.3
									// https://promisesaplus.com/#point-59
									// Ignore double-resolution attempts
									if ( depth < maxDepth ) {
										return;
									}

									returned = handler.apply( that, args );

									// Support: Promises/A+ section 2.3.1
									// https://promisesaplus.com/#point-48
									if ( returned === deferred.promise() ) {
										throw new TypeError( "Thenable self-resolution" );
									}

									// Support: Promises/A+ sections 2.3.3.1, 3.5
									// https://promisesaplus.com/#point-54
									// https://promisesaplus.com/#point-75
									// Retrieve `then` only once
									then = returned &&

										// Support: Promises/A+ section 2.3.4
										// https://promisesaplus.com/#point-64
										// Only check objects and functions for thenability
										( typeof returned === "object" ||
											typeof returned === "function" ) &&
										returned.then;

									// Handle a returned thenable
									if ( isFunction( then ) ) {

										// Special processors (notify) just wait for resolution
										if ( special ) {
											then.call(
												returned,
												resolve( maxDepth, deferred, Identity, special ),
												resolve( maxDepth, deferred, Thrower, special )
											);

										// Normal processors (resolve) also hook into progress
										} else {

											// ...and disregard older resolution values
											maxDepth++;

											then.call(
												returned,
												resolve( maxDepth, deferred, Identity, special ),
												resolve( maxDepth, deferred, Thrower, special ),
												resolve( maxDepth, deferred, Identity,
													deferred.notifyWith )
											);
										}

									// Handle all other returned values
									} else {

										// Only substitute handlers pass on context
										// and multiple values (non-spec behavior)
										if ( handler !== Identity ) {
											that = undefined;
											args = [ returned ];
										}

										// Process the value(s)
										// Default process is resolve
										( special || deferred.resolveWith )( that, args );
									}
								},

								// Only normal processors (resolve) catch and reject exceptions
								process = special ?
									mightThrow :
									function() {
										try {
											mightThrow();
										} catch ( e ) {

											if ( jQuery.Deferred.exceptionHook ) {
												jQuery.Deferred.exceptionHook( e,
													process.stackTrace );
											}

											// Support: Promises/A+ section 2.3.3.3.4.1
											// https://promisesaplus.com/#point-61
											// Ignore post-resolution exceptions
											if ( depth + 1 >= maxDepth ) {

												// Only substitute handlers pass on context
												// and multiple values (non-spec behavior)
												if ( handler !== Thrower ) {
													that = undefined;
													args = [ e ];
												}

												deferred.rejectWith( that, args );
											}
										}
									};

							// Support: Promises/A+ section 2.3.3.3.1
							// https://promisesaplus.com/#point-57
							// Re-resolve promises immediately to dodge false rejection from
							// subsequent errors
							if ( depth ) {
								process();
							} else {

								// Call an optional hook to record the stack, in case of exception
								// since it's otherwise lost when execution goes async
								if ( jQuery.Deferred.getStackHook ) {
									process.stackTrace = jQuery.Deferred.getStackHook();
								}
								window.setTimeout( process );
							}
						};
					}

					return jQuery.Deferred( function( newDefer ) {

						// progress_handlers.add( ... )
						tuples[ 0 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								isFunction( onProgress ) ?
									onProgress :
									Identity,
								newDefer.notifyWith
							)
						);

						// fulfilled_handlers.add( ... )
						tuples[ 1 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								isFunction( onFulfilled ) ?
									onFulfilled :
									Identity
							)
						);

						// rejected_handlers.add( ... )
						tuples[ 2 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								isFunction( onRejected ) ?
									onRejected :
									Thrower
							)
						);
					} ).promise();
				},

				// Get a promise for this deferred
				// If obj is provided, the promise aspect is added to the object
				promise: function( obj ) {
					return obj != null ? jQuery.extend( obj, promise ) : promise;
				}
			},
			deferred = {};

		// Add list-specific methods
		jQuery.each( tuples, function( i, tuple ) {
			var list = tuple[ 2 ],
				stateString = tuple[ 5 ];

			// promise.progress = list.add
			// promise.done = list.add
			// promise.fail = list.add
			promise[ tuple[ 1 ] ] = list.add;

			// Handle state
			if ( stateString ) {
				list.add(
					function() {

						// state = "resolved" (i.e., fulfilled)
						// state = "rejected"
						state = stateString;
					},

					// rejected_callbacks.disable
					// fulfilled_callbacks.disable
					tuples[ 3 - i ][ 2 ].disable,

					// rejected_handlers.disable
					// fulfilled_handlers.disable
					tuples[ 3 - i ][ 3 ].disable,

					// progress_callbacks.lock
					tuples[ 0 ][ 2 ].lock,

					// progress_handlers.lock
					tuples[ 0 ][ 3 ].lock
				);
			}

			// progress_handlers.fire
			// fulfilled_handlers.fire
			// rejected_handlers.fire
			list.add( tuple[ 3 ].fire );

			// deferred.notify = function() { deferred.notifyWith(...) }
			// deferred.resolve = function() { deferred.resolveWith(...) }
			// deferred.reject = function() { deferred.rejectWith(...) }
			deferred[ tuple[ 0 ] ] = function() {
				deferred[ tuple[ 0 ] + "With" ]( this === deferred ? undefined : this, arguments );
				return this;
			};

			// deferred.notifyWith = list.fireWith
			// deferred.resolveWith = list.fireWith
			// deferred.rejectWith = list.fireWith
			deferred[ tuple[ 0 ] + "With" ] = list.fireWith;
		} );

		// Make the deferred a promise
		promise.promise( deferred );

		// Call given func if any
		if ( func ) {
			func.call( deferred, deferred );
		}

		// All done!
		return deferred;
	},

	// Deferred helper
	when: function( singleValue ) {
		var

			// count of uncompleted subordinates
			remaining = arguments.length,

			// count of unprocessed arguments
			i = remaining,

			// subordinate fulfillment data
			resolveContexts = Array( i ),
			resolveValues = slice.call( arguments ),

			// the master Deferred
			master = jQuery.Deferred(),

			// subordinate callback factory
			updateFunc = function( i ) {
				return function( value ) {
					resolveContexts[ i ] = this;
					resolveValues[ i ] = arguments.length > 1 ? slice.call( arguments ) : value;
					if ( !( --remaining ) ) {
						master.resolveWith( resolveContexts, resolveValues );
					}
				};
			};

		// Single- and empty arguments are adopted like Promise.resolve
		if ( remaining <= 1 ) {
			adoptValue( singleValue, master.done( updateFunc( i ) ).resolve, master.reject,
				!remaining );

			// Use .then() to unwrap secondary thenables (cf. gh-3000)
			if ( master.state() === "pending" ||
				isFunction( resolveValues[ i ] && resolveValues[ i ].then ) ) {

				return master.then();
			}
		}

		// Multiple arguments are aggregated like Promise.all array elements
		while ( i-- ) {
			adoptValue( resolveValues[ i ], updateFunc( i ), master.reject );
		}

		return master.promise();
	}
} );


// These usually indicate a programmer mistake during development,
// warn about them ASAP rather than swallowing them by default.
var rerrorNames = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;

jQuery.Deferred.exceptionHook = function( error, stack ) {

	// Support: IE 8 - 9 only
	// Console exists when dev tools are open, which can happen at any time
	if ( window.console && window.console.warn && error && rerrorNames.test( error.name ) ) {
		window.console.warn( "jQuery.Deferred exception: " + error.message, error.stack, stack );
	}
};




jQuery.readyException = function( error ) {
	window.setTimeout( function() {
		throw error;
	} );
};




// The deferred used on DOM ready
var readyList = jQuery.Deferred();

jQuery.fn.ready = function( fn ) {

	readyList
		.then( fn )

		// Wrap jQuery.readyException in a function so that the lookup
		// happens at the time of error handling instead of callback
		// registration.
		.catch( function( error ) {
			jQuery.readyException( error );
		} );

	return this;
};

jQuery.extend( {

	// Is the DOM ready to be used? Set to true once it occurs.
	isReady: false,

	// A counter to track how many items to wait for before
	// the ready event fires. See #6781
	readyWait: 1,

	// Handle when the DOM is ready
	ready: function( wait ) {

		// Abort if there are pending holds or we're already ready
		if ( wait === true ? --jQuery.readyWait : jQuery.isReady ) {
			return;
		}

		// Remember that the DOM is ready
		jQuery.isReady = true;

		// If a normal DOM Ready event fired, decrement, and wait if need be
		if ( wait !== true && --jQuery.readyWait > 0 ) {
			return;
		}

		// If there are functions bound, to execute
		readyList.resolveWith( document, [ jQuery ] );
	}
} );

jQuery.ready.then = readyList.then;

// The ready event handler and self cleanup method
function completed() {
	document.removeEventListener( "DOMContentLoaded", completed );
	window.removeEventListener( "load", completed );
	jQuery.ready();
}

// Catch cases where $(document).ready() is called
// after the browser event has already occurred.
// Support: IE <=9 - 10 only
// Older IE sometimes signals "interactive" too soon
if ( document.readyState === "complete" ||
	( document.readyState !== "loading" && !document.documentElement.doScroll ) ) {

	// Handle it asynchronously to allow scripts the opportunity to delay ready
	window.setTimeout( jQuery.ready );

} else {

	// Use the handy event callback
	document.addEventListener( "DOMContentLoaded", completed );

	// A fallback to window.onload, that will always work
	window.addEventListener( "load", completed );
}




// Multifunctional method to get and set values of a collection
// The value/s can optionally be executed if it's a function
var access = function( elems, fn, key, value, chainable, emptyGet, raw ) {
	var i = 0,
		len = elems.length,
		bulk = key == null;

	// Sets many values
	if ( toType( key ) === "object" ) {
		chainable = true;
		for ( i in key ) {
			access( elems, fn, i, key[ i ], true, emptyGet, raw );
		}

	// Sets one value
	} else if ( value !== undefined ) {
		chainable = true;

		if ( !isFunction( value ) ) {
			raw = true;
		}

		if ( bulk ) {

			// Bulk operations run against the entire set
			if ( raw ) {
				fn.call( elems, value );
				fn = null;

			// ...except when executing function values
			} else {
				bulk = fn;
				fn = function( elem, _key, value ) {
					return bulk.call( jQuery( elem ), value );
				};
			}
		}

		if ( fn ) {
			for ( ; i < len; i++ ) {
				fn(
					elems[ i ], key, raw ?
					value :
					value.call( elems[ i ], i, fn( elems[ i ], key ) )
				);
			}
		}
	}

	if ( chainable ) {
		return elems;
	}

	// Gets
	if ( bulk ) {
		return fn.call( elems );
	}

	return len ? fn( elems[ 0 ], key ) : emptyGet;
};


// Matches dashed string for camelizing
var rmsPrefix = /^-ms-/,
	rdashAlpha = /-([a-z])/g;

// Used by camelCase as callback to replace()
function fcamelCase( _all, letter ) {
	return letter.toUpperCase();
}

// Convert dashed to camelCase; used by the css and data modules
// Support: IE <=9 - 11, Edge 12 - 15
// Microsoft forgot to hump their vendor prefix (#9572)
function camelCase( string ) {
	return string.replace( rmsPrefix, "ms-" ).replace( rdashAlpha, fcamelCase );
}
var acceptData = function( owner ) {

	// Accepts only:
	//  - Node
	//    - Node.ELEMENT_NODE
	//    - Node.DOCUMENT_NODE
	//  - Object
	//    - Any
	return owner.nodeType === 1 || owner.nodeType === 9 || !( +owner.nodeType );
};




function Data() {
	this.expando = jQuery.expando + Data.uid++;
}

Data.uid = 1;

Data.prototype = {

	cache: function( owner ) {

		// Check if the owner object already has a cache
		var value = owner[ this.expando ];

		// If not, create one
		if ( !value ) {
			value = {};

			// We can accept data for non-element nodes in modern browsers,
			// but we should not, see #8335.
			// Always return an empty object.
			if ( acceptData( owner ) ) {

				// If it is a node unlikely to be stringify-ed or looped over
				// use plain assignment
				if ( owner.nodeType ) {
					owner[ this.expando ] = value;

				// Otherwise secure it in a non-enumerable property
				// configurable must be true to allow the property to be
				// deleted when data is removed
				} else {
					Object.defineProperty( owner, this.expando, {
						value: value,
						configurable: true
					} );
				}
			}
		}

		return value;
	},
	set: function( owner, data, value ) {
		var prop,
			cache = this.cache( owner );

		// Handle: [ owner, key, value ] args
		// Always use camelCase key (gh-2257)
		if ( typeof data === "string" ) {
			cache[ camelCase( data ) ] = value;

		// Handle: [ owner, { properties } ] args
		} else {

			// Copy the properties one-by-one to the cache object
			for ( prop in data ) {
				cache[ camelCase( prop ) ] = data[ prop ];
			}
		}
		return cache;
	},
	get: function( owner, key ) {
		return key === undefined ?
			this.cache( owner ) :

			// Always use camelCase key (gh-2257)
			owner[ this.expando ] && owner[ this.expando ][ camelCase( key ) ];
	},
	access: function( owner, key, value ) {

		// In cases where either:
		//
		//   1. No key was specified
		//   2. A string key was specified, but no value provided
		//
		// Take the "read" path and allow the get method to determine
		// which value to return, respectively either:
		//
		//   1. The entire cache object
		//   2. The data stored at the key
		//
		if ( key === undefined ||
				( ( key && typeof key === "string" ) && value === undefined ) ) {

			return this.get( owner, key );
		}

		// When the key is not a string, or both a key and value
		// are specified, set or extend (existing objects) with either:
		//
		//   1. An object of properties
		//   2. A key and value
		//
		this.set( owner, key, value );

		// Since the "set" path can have two possible entry points
		// return the expected data based on which path was taken[*]
		return value !== undefined ? value : key;
	},
	remove: function( owner, key ) {
		var i,
			cache = owner[ this.expando ];

		if ( cache === undefined ) {
			return;
		}

		if ( key !== undefined ) {

			// Support array or space separated string of keys
			if ( Array.isArray( key ) ) {

				// If key is an array of keys...
				// We always set camelCase keys, so remove that.
				key = key.map( camelCase );
			} else {
				key = camelCase( key );

				// If a key with the spaces exists, use it.
				// Otherwise, create an array by matching non-whitespace
				key = key in cache ?
					[ key ] :
					( key.match( rnothtmlwhite ) || [] );
			}

			i = key.length;

			while ( i-- ) {
				delete cache[ key[ i ] ];
			}
		}

		// Remove the expando if there's no more data
		if ( key === undefined || jQuery.isEmptyObject( cache ) ) {

			// Support: Chrome <=35 - 45
			// Webkit & Blink performance suffers when deleting properties
			// from DOM nodes, so set to undefined instead
			// https://bugs.chromium.org/p/chromium/issues/detail?id=378607 (bug restricted)
			if ( owner.nodeType ) {
				owner[ this.expando ] = undefined;
			} else {
				delete owner[ this.expando ];
			}
		}
	},
	hasData: function( owner ) {
		var cache = owner[ this.expando ];
		return cache !== undefined && !jQuery.isEmptyObject( cache );
	}
};
var dataPriv = new Data();

var dataUser = new Data();



//	Implementation Summary
//
//	1. Enforce API surface and semantic compatibility with 1.9.x branch
//	2. Improve the module's maintainability by reducing the storage
//		paths to a single mechanism.
//	3. Use the same single mechanism to support "private" and "user" data.
//	4. _Never_ expose "private" data to user code (TODO: Drop _data, _removeData)
//	5. Avoid exposing implementation details on user objects (eg. expando properties)
//	6. Provide a clear path for implementation upgrade to WeakMap in 2014

var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
	rmultiDash = /[A-Z]/g;

function getData( data ) {
	if ( data === "true" ) {
		return true;
	}

	if ( data === "false" ) {
		return false;
	}

	if ( data === "null" ) {
		return null;
	}

	// Only convert to a number if it doesn't change the string
	if ( data === +data + "" ) {
		return +data;
	}

	if ( rbrace.test( data ) ) {
		return JSON.parse( data );
	}

	return data;
}

function dataAttr( elem, key, data ) {
	var name;

	// If nothing was found internally, try to fetch any
	// data from the HTML5 data-* attribute
	if ( data === undefined && elem.nodeType === 1 ) {
		name = "data-" + key.replace( rmultiDash, "-$&" ).toLowerCase();
		data = elem.getAttribute( name );

		if ( typeof data === "string" ) {
			try {
				data = getData( data );
			} catch ( e ) {}

			// Make sure we set the data so it isn't changed later
			dataUser.set( elem, key, data );
		} else {
			data = undefined;
		}
	}
	return data;
}

jQuery.extend( {
	hasData: function( elem ) {
		return dataUser.hasData( elem ) || dataPriv.hasData( elem );
	},

	data: function( elem, name, data ) {
		return dataUser.access( elem, name, data );
	},

	removeData: function( elem, name ) {
		dataUser.remove( elem, name );
	},

	// TODO: Now that all calls to _data and _removeData have been replaced
	// with direct calls to dataPriv methods, these can be deprecated.
	_data: function( elem, name, data ) {
		return dataPriv.access( elem, name, data );
	},

	_removeData: function( elem, name ) {
		dataPriv.remove( elem, name );
	}
} );

jQuery.fn.extend( {
	data: function( key, value ) {
		var i, name, data,
			elem = this[ 0 ],
			attrs = elem && elem.attributes;

		// Gets all values
		if ( key === undefined ) {
			if ( this.length ) {
				data = dataUser.get( elem );

				if ( elem.nodeType === 1 && !dataPriv.get( elem, "hasDataAttrs" ) ) {
					i = attrs.length;
					while ( i-- ) {

						// Support: IE 11 only
						// The attrs elements can be null (#14894)
						if ( attrs[ i ] ) {
							name = attrs[ i ].name;
							if ( name.indexOf( "data-" ) === 0 ) {
								name = camelCase( name.slice( 5 ) );
								dataAttr( elem, name, data[ name ] );
							}
						}
					}
					dataPriv.set( elem, "hasDataAttrs", true );
				}
			}

			return data;
		}

		// Sets multiple values
		if ( typeof key === "object" ) {
			return this.each( function() {
				dataUser.set( this, key );
			} );
		}

		return access( this, function( value ) {
			var data;

			// The calling jQuery object (element matches) is not empty
			// (and therefore has an element appears at this[ 0 ]) and the
			// `value` parameter was not undefined. An empty jQuery object
			// will result in `undefined` for elem = this[ 0 ] which will
			// throw an exception if an attempt to read a data cache is made.
			if ( elem && value === undefined ) {

				// Attempt to get data from the cache
				// The key will always be camelCased in Data
				data = dataUser.get( elem, key );
				if ( data !== undefined ) {
					return data;
				}

				// Attempt to "discover" the data in
				// HTML5 custom data-* attrs
				data = dataAttr( elem, key );
				if ( data !== undefined ) {
					return data;
				}

				// We tried really hard, but the data doesn't exist.
				return;
			}

			// Set the data...
			this.each( function() {

				// We always store the camelCased key
				dataUser.set( this, key, value );
			} );
		}, null, value, arguments.length > 1, null, true );
	},

	removeData: function( key ) {
		return this.each( function() {
			dataUser.remove( this, key );
		} );
	}
} );


jQuery.extend( {
	queue: function( elem, type, data ) {
		var queue;

		if ( elem ) {
			type = ( type || "fx" ) + "queue";
			queue = dataPriv.get( elem, type );

			// Speed up dequeue by getting out quickly if this is just a lookup
			if ( data ) {
				if ( !queue || Array.isArray( data ) ) {
					queue = dataPriv.access( elem, type, jQuery.makeArray( data ) );
				} else {
					queue.push( data );
				}
			}
			return queue || [];
		}
	},

	dequeue: function( elem, type ) {
		type = type || "fx";

		var queue = jQuery.queue( elem, type ),
			startLength = queue.length,
			fn = queue.shift(),
			hooks = jQuery._queueHooks( elem, type ),
			next = function() {
				jQuery.dequeue( elem, type );
			};

		// If the fx queue is dequeued, always remove the progress sentinel
		if ( fn === "inprogress" ) {
			fn = queue.shift();
			startLength--;
		}

		if ( fn ) {

			// Add a progress sentinel to prevent the fx queue from being
			// automatically dequeued
			if ( type === "fx" ) {
				queue.unshift( "inprogress" );
			}

			// Clear up the last queue stop function
			delete hooks.stop;
			fn.call( elem, next, hooks );
		}

		if ( !startLength && hooks ) {
			hooks.empty.fire();
		}
	},

	// Not public - generate a queueHooks object, or return the current one
	_queueHooks: function( elem, type ) {
		var key = type + "queueHooks";
		return dataPriv.get( elem, key ) || dataPriv.access( elem, key, {
			empty: jQuery.Callbacks( "once memory" ).add( function() {
				dataPriv.remove( elem, [ type + "queue", key ] );
			} )
		} );
	}
} );

jQuery.fn.extend( {
	queue: function( type, data ) {
		var setter = 2;

		if ( typeof type !== "string" ) {
			data = type;
			type = "fx";
			setter--;
		}

		if ( arguments.length < setter ) {
			return jQuery.queue( this[ 0 ], type );
		}

		return data === undefined ?
			this :
			this.each( function() {
				var queue = jQuery.queue( this, type, data );

				// Ensure a hooks for this queue
				jQuery._queueHooks( this, type );

				if ( type === "fx" && queue[ 0 ] !== "inprogress" ) {
					jQuery.dequeue( this, type );
				}
			} );
	},
	dequeue: function( type ) {
		return this.each( function() {
			jQuery.dequeue( this, type );
		} );
	},
	clearQueue: function( type ) {
		return this.queue( type || "fx", [] );
	},

	// Get a promise resolved when queues of a certain type
	// are emptied (fx is the type by default)
	promise: function( type, obj ) {
		var tmp,
			count = 1,
			defer = jQuery.Deferred(),
			elements = this,
			i = this.length,
			resolve = function() {
				if ( !( --count ) ) {
					defer.resolveWith( elements, [ elements ] );
				}
			};

		if ( typeof type !== "string" ) {
			obj = type;
			type = undefined;
		}
		type = type || "fx";

		while ( i-- ) {
			tmp = dataPriv.get( elements[ i ], type + "queueHooks" );
			if ( tmp && tmp.empty ) {
				count++;
				tmp.empty.add( resolve );
			}
		}
		resolve();
		return defer.promise( obj );
	}
} );
var pnum = ( /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/ ).source;

var rcssNum = new RegExp( "^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i" );


var cssExpand = [ "Top", "Right", "Bottom", "Left" ];

var documentElement = document.documentElement;



	var isAttached = function( elem ) {
			return jQuery.contains( elem.ownerDocument, elem );
		},
		composed = { composed: true };

	// Support: IE 9 - 11+, Edge 12 - 18+, iOS 10.0 - 10.2 only
	// Check attachment across shadow DOM boundaries when possible (gh-3504)
	// Support: iOS 10.0-10.2 only
	// Early iOS 10 versions support `attachShadow` but not `getRootNode`,
	// leading to errors. We need to check for `getRootNode`.
	if ( documentElement.getRootNode ) {
		isAttached = function( elem ) {
			return jQuery.contains( elem.ownerDocument, elem ) ||
				elem.getRootNode( composed ) === elem.ownerDocument;
		};
	}
var isHiddenWithinTree = function( elem, el ) {

		// isHiddenWithinTree might be called from jQuery#filter function;
		// in that case, element will be second argument
		elem = el || elem;

		// Inline style trumps all
		return elem.style.display === "none" ||
			elem.style.display === "" &&

			// Otherwise, check computed style
			// Support: Firefox <=43 - 45
			// Disconnected elements can have computed display: none, so first confirm that elem is
			// in the document.
			isAttached( elem ) &&

			jQuery.css( elem, "display" ) === "none";
	};



function adjustCSS( elem, prop, valueParts, tween ) {
	var adjusted, scale,
		maxIterations = 20,
		currentValue = tween ?
			function() {
				return tween.cur();
			} :
			function() {
				return jQuery.css( elem, prop, "" );
			},
		initial = currentValue(),
		unit = valueParts && valueParts[ 3 ] || ( jQuery.cssNumber[ prop ] ? "" : "px" ),

		// Starting value computation is required for potential unit mismatches
		initialInUnit = elem.nodeType &&
			( jQuery.cssNumber[ prop ] || unit !== "px" && +initial ) &&
			rcssNum.exec( jQuery.css( elem, prop ) );

	if ( initialInUnit && initialInUnit[ 3 ] !== unit ) {

		// Support: Firefox <=54
		// Halve the iteration target value to prevent interference from CSS upper bounds (gh-2144)
		initial = initial / 2;

		// Trust units reported by jQuery.css
		unit = unit || initialInUnit[ 3 ];

		// Iteratively approximate from a nonzero starting point
		initialInUnit = +initial || 1;

		while ( maxIterations-- ) {

			// Evaluate and update our best guess (doubling guesses that zero out).
			// Finish if the scale equals or crosses 1 (making the old*new product non-positive).
			jQuery.style( elem, prop, initialInUnit + unit );
			if ( ( 1 - scale ) * ( 1 - ( scale = currentValue() / initial || 0.5 ) ) <= 0 ) {
				maxIterations = 0;
			}
			initialInUnit = initialInUnit / scale;

		}

		initialInUnit = initialInUnit * 2;
		jQuery.style( elem, prop, initialInUnit + unit );

		// Make sure we update the tween properties later on
		valueParts = valueParts || [];
	}

	if ( valueParts ) {
		initialInUnit = +initialInUnit || +initial || 0;

		// Apply relative offset (+=/-=) if specified
		adjusted = valueParts[ 1 ] ?
			initialInUnit + ( valueParts[ 1 ] + 1 ) * valueParts[ 2 ] :
			+valueParts[ 2 ];
		if ( tween ) {
			tween.unit = unit;
			tween.start = initialInUnit;
			tween.end = adjusted;
		}
	}
	return adjusted;
}


var defaultDisplayMap = {};

function getDefaultDisplay( elem ) {
	var temp,
		doc = elem.ownerDocument,
		nodeName = elem.nodeName,
		display = defaultDisplayMap[ nodeName ];

	if ( display ) {
		return display;
	}

	temp = doc.body.appendChild( doc.createElement( nodeName ) );
	display = jQuery.css( temp, "display" );

	temp.parentNode.removeChild( temp );

	if ( display === "none" ) {
		display = "block";
	}
	defaultDisplayMap[ nodeName ] = display;

	return display;
}

function showHide( elements, show ) {
	var display, elem,
		values = [],
		index = 0,
		length = elements.length;

	// Determine new display value for elements that need to change
	for ( ; index < length; index++ ) {
		elem = elements[ index ];
		if ( !elem.style ) {
			continue;
		}

		display = elem.style.display;
		if ( show ) {

			// Since we force visibility upon cascade-hidden elements, an immediate (and slow)
			// check is required in this first loop unless we have a nonempty display value (either
			// inline or about-to-be-restored)
			if ( display === "none" ) {
				values[ index ] = dataPriv.get( elem, "display" ) || null;
				if ( !values[ index ] ) {
					elem.style.display = "";
				}
			}
			if ( elem.style.display === "" && isHiddenWithinTree( elem ) ) {
				values[ index ] = getDefaultDisplay( elem );
			}
		} else {
			if ( display !== "none" ) {
				values[ index ] = "none";

				// Remember what we're overwriting
				dataPriv.set( elem, "display", display );
			}
		}
	}

	// Set the display of the elements in a second loop to avoid constant reflow
	for ( index = 0; index < length; index++ ) {
		if ( values[ index ] != null ) {
			elements[ index ].style.display = values[ index ];
		}
	}

	return elements;
}

jQuery.fn.extend( {
	show: function() {
		return showHide( this, true );
	},
	hide: function() {
		return showHide( this );
	},
	toggle: function( state ) {
		if ( typeof state === "boolean" ) {
			return state ? this.show() : this.hide();
		}

		return this.each( function() {
			if ( isHiddenWithinTree( this ) ) {
				jQuery( this ).show();
			} else {
				jQuery( this ).hide();
			}
		} );
	}
} );
var rcheckableType = ( /^(?:checkbox|radio)$/i );

var rtagName = ( /<([a-z][^\/\0>\x20\t\r\n\f]*)/i );

var rscriptType = ( /^$|^module$|\/(?:java|ecma)script/i );



( function() {
	var fragment = document.createDocumentFragment(),
		div = fragment.appendChild( document.createElement( "div" ) ),
		input = document.createElement( "input" );

	// Support: Android 4.0 - 4.3 only
	// Check state lost if the name is set (#11217)
	// Support: Windows Web Apps (WWA)
	// `name` and `type` must use .setAttribute for WWA (#14901)
	input.setAttribute( "type", "radio" );
	input.setAttribute( "checked", "checked" );
	input.setAttribute( "name", "t" );

	div.appendChild( input );

	// Support: Android <=4.1 only
	// Older WebKit doesn't clone checked state correctly in fragments
	support.checkClone = div.cloneNode( true ).cloneNode( true ).lastChild.checked;

	// Support: IE <=11 only
	// Make sure textarea (and checkbox) defaultValue is properly cloned
	div.innerHTML = "<textarea>x</textarea>";
	support.noCloneChecked = !!div.cloneNode( true ).lastChild.defaultValue;

	// Support: IE <=9 only
	// IE <=9 replaces <option> tags with their contents when inserted outside of
	// the select element.
	div.innerHTML = "<option></option>";
	support.option = !!div.lastChild;
} )();


// We have to close these tags to support XHTML (#13200)
var wrapMap = {

	// XHTML parsers do not magically insert elements in the
	// same way that tag soup parsers do. So we cannot shorten
	// this by omitting <tbody> or other required elements.
	thead: [ 1, "<table>", "</table>" ],
	col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
	tr: [ 2, "<table><tbody>", "</tbody></table>" ],
	td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],

	_default: [ 0, "", "" ]
};

wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
wrapMap.th = wrapMap.td;

// Support: IE <=9 only
if ( !support.option ) {
	wrapMap.optgroup = wrapMap.option = [ 1, "<select multiple='multiple'>", "</select>" ];
}


function getAll( context, tag ) {

	// Support: IE <=9 - 11 only
	// Use typeof to avoid zero-argument method invocation on host objects (#15151)
	var ret;

	if ( typeof context.getElementsByTagName !== "undefined" ) {
		ret = context.getElementsByTagName( tag || "*" );

	} else if ( typeof context.querySelectorAll !== "undefined" ) {
		ret = context.querySelectorAll( tag || "*" );

	} else {
		ret = [];
	}

	if ( tag === undefined || tag && nodeName( context, tag ) ) {
		return jQuery.merge( [ context ], ret );
	}

	return ret;
}


// Mark scripts as having already been evaluated
function setGlobalEval( elems, refElements ) {
	var i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		dataPriv.set(
			elems[ i ],
			"globalEval",
			!refElements || dataPriv.get( refElements[ i ], "globalEval" )
		);
	}
}


var rhtml = /<|&#?\w+;/;

function buildFragment( elems, context, scripts, selection, ignored ) {
	var elem, tmp, tag, wrap, attached, j,
		fragment = context.createDocumentFragment(),
		nodes = [],
		i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		elem = elems[ i ];

		if ( elem || elem === 0 ) {

			// Add nodes directly
			if ( toType( elem ) === "object" ) {

				// Support: Android <=4.0 only, PhantomJS 1 only
				// push.apply(_, arraylike) throws on ancient WebKit
				jQuery.merge( nodes, elem.nodeType ? [ elem ] : elem );

			// Convert non-html into a text node
			} else if ( !rhtml.test( elem ) ) {
				nodes.push( context.createTextNode( elem ) );

			// Convert html into DOM nodes
			} else {
				tmp = tmp || fragment.appendChild( context.createElement( "div" ) );

				// Deserialize a standard representation
				tag = ( rtagName.exec( elem ) || [ "", "" ] )[ 1 ].toLowerCase();
				wrap = wrapMap[ tag ] || wrapMap._default;
				tmp.innerHTML = wrap[ 1 ] + jQuery.htmlPrefilter( elem ) + wrap[ 2 ];

				// Descend through wrappers to the right content
				j = wrap[ 0 ];
				while ( j-- ) {
					tmp = tmp.lastChild;
				}

				// Support: Android <=4.0 only, PhantomJS 1 only
				// push.apply(_, arraylike) throws on ancient WebKit
				jQuery.merge( nodes, tmp.childNodes );

				// Remember the top-level container
				tmp = fragment.firstChild;

				// Ensure the created nodes are orphaned (#12392)
				tmp.textContent = "";
			}
		}
	}

	// Remove wrapper from fragment
	fragment.textContent = "";

	i = 0;
	while ( ( elem = nodes[ i++ ] ) ) {

		// Skip elements already in the context collection (trac-4087)
		if ( selection && jQuery.inArray( elem, selection ) > -1 ) {
			if ( ignored ) {
				ignored.push( elem );
			}
			continue;
		}

		attached = isAttached( elem );

		// Append to fragment
		tmp = getAll( fragment.appendChild( elem ), "script" );

		// Preserve script evaluation history
		if ( attached ) {
			setGlobalEval( tmp );
		}

		// Capture executables
		if ( scripts ) {
			j = 0;
			while ( ( elem = tmp[ j++ ] ) ) {
				if ( rscriptType.test( elem.type || "" ) ) {
					scripts.push( elem );
				}
			}
		}
	}

	return fragment;
}


var
	rkeyEvent = /^key/,
	rmouseEvent = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
	rtypenamespace = /^([^.]*)(?:\.(.+)|)/;

function returnTrue() {
	return true;
}

function returnFalse() {
	return false;
}

// Support: IE <=9 - 11+
// focus() and blur() are asynchronous, except when they are no-op.
// So expect focus to be synchronous when the element is already active,
// and blur to be synchronous when the element is not already active.
// (focus and blur are always synchronous in other supported browsers,
// this just defines when we can count on it).
function expectSync( elem, type ) {
	return ( elem === safeActiveElement() ) === ( type === "focus" );
}

// Support: IE <=9 only
// Accessing document.activeElement can throw unexpectedly
// https://bugs.jquery.com/ticket/13393
function safeActiveElement() {
	try {
		return document.activeElement;
	} catch ( err ) { }
}

function on( elem, types, selector, data, fn, one ) {
	var origFn, type;

	// Types can be a map of types/handlers
	if ( typeof types === "object" ) {

		// ( types-Object, selector, data )
		if ( typeof selector !== "string" ) {

			// ( types-Object, data )
			data = data || selector;
			selector = undefined;
		}
		for ( type in types ) {
			on( elem, type, selector, data, types[ type ], one );
		}
		return elem;
	}

	if ( data == null && fn == null ) {

		// ( types, fn )
		fn = selector;
		data = selector = undefined;
	} else if ( fn == null ) {
		if ( typeof selector === "string" ) {

			// ( types, selector, fn )
			fn = data;
			data = undefined;
		} else {

			// ( types, data, fn )
			fn = data;
			data = selector;
			selector = undefined;
		}
	}
	if ( fn === false ) {
		fn = returnFalse;
	} else if ( !fn ) {
		return elem;
	}

	if ( one === 1 ) {
		origFn = fn;
		fn = function( event ) {

			// Can use an empty set, since event contains the info
			jQuery().off( event );
			return origFn.apply( this, arguments );
		};

		// Use same guid so caller can remove using origFn
		fn.guid = origFn.guid || ( origFn.guid = jQuery.guid++ );
	}
	return elem.each( function() {
		jQuery.event.add( this, types, fn, data, selector );
	} );
}

/*
 * Helper functions for managing events -- not part of the public interface.
 * Props to Dean Edwards' addEvent library for many of the ideas.
 */
jQuery.event = {

	global: {},

	add: function( elem, types, handler, data, selector ) {

		var handleObjIn, eventHandle, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = dataPriv.get( elem );

		// Only attach events to objects that accept data
		if ( !acceptData( elem ) ) {
			return;
		}

		// Caller can pass in an object of custom data in lieu of the handler
		if ( handler.handler ) {
			handleObjIn = handler;
			handler = handleObjIn.handler;
			selector = handleObjIn.selector;
		}

		// Ensure that invalid selectors throw exceptions at attach time
		// Evaluate against documentElement in case elem is a non-element node (e.g., document)
		if ( selector ) {
			jQuery.find.matchesSelector( documentElement, selector );
		}

		// Make sure that the handler has a unique ID, used to find/remove it later
		if ( !handler.guid ) {
			handler.guid = jQuery.guid++;
		}

		// Init the element's event structure and main handler, if this is the first
		if ( !( events = elemData.events ) ) {
			events = elemData.events = Object.create( null );
		}
		if ( !( eventHandle = elemData.handle ) ) {
			eventHandle = elemData.handle = function( e ) {

				// Discard the second event of a jQuery.event.trigger() and
				// when an event is called after a page has unloaded
				return typeof jQuery !== "undefined" && jQuery.event.triggered !== e.type ?
					jQuery.event.dispatch.apply( elem, arguments ) : undefined;
			};
		}

		// Handle multiple events separated by a space
		types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// There *must* be a type, no attaching namespace-only handlers
			if ( !type ) {
				continue;
			}

			// If event changes its type, use the special event handlers for the changed type
			special = jQuery.event.special[ type ] || {};

			// If selector defined, determine special event api type, otherwise given type
			type = ( selector ? special.delegateType : special.bindType ) || type;

			// Update special based on newly reset type
			special = jQuery.event.special[ type ] || {};

			// handleObj is passed to all event handlers
			handleObj = jQuery.extend( {
				type: type,
				origType: origType,
				data: data,
				handler: handler,
				guid: handler.guid,
				selector: selector,
				needsContext: selector && jQuery.expr.match.needsContext.test( selector ),
				namespace: namespaces.join( "." )
			}, handleObjIn );

			// Init the event handler queue if we're the first
			if ( !( handlers = events[ type ] ) ) {
				handlers = events[ type ] = [];
				handlers.delegateCount = 0;

				// Only use addEventListener if the special events handler returns false
				if ( !special.setup ||
					special.setup.call( elem, data, namespaces, eventHandle ) === false ) {

					if ( elem.addEventListener ) {
						elem.addEventListener( type, eventHandle );
					}
				}
			}

			if ( special.add ) {
				special.add.call( elem, handleObj );

				if ( !handleObj.handler.guid ) {
					handleObj.handler.guid = handler.guid;
				}
			}

			// Add to the element's handler list, delegates in front
			if ( selector ) {
				handlers.splice( handlers.delegateCount++, 0, handleObj );
			} else {
				handlers.push( handleObj );
			}

			// Keep track of which events have ever been used, for event optimization
			jQuery.event.global[ type ] = true;
		}

	},

	// Detach an event or set of events from an element
	remove: function( elem, types, handler, selector, mappedTypes ) {

		var j, origCount, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = dataPriv.hasData( elem ) && dataPriv.get( elem );

		if ( !elemData || !( events = elemData.events ) ) {
			return;
		}

		// Once for each type.namespace in types; type may be omitted
		types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// Unbind all events (on this namespace, if provided) for the element
			if ( !type ) {
				for ( type in events ) {
					jQuery.event.remove( elem, type + types[ t ], handler, selector, true );
				}
				continue;
			}

			special = jQuery.event.special[ type ] || {};
			type = ( selector ? special.delegateType : special.bindType ) || type;
			handlers = events[ type ] || [];
			tmp = tmp[ 2 ] &&
				new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" );

			// Remove matching events
			origCount = j = handlers.length;
			while ( j-- ) {
				handleObj = handlers[ j ];

				if ( ( mappedTypes || origType === handleObj.origType ) &&
					( !handler || handler.guid === handleObj.guid ) &&
					( !tmp || tmp.test( handleObj.namespace ) ) &&
					( !selector || selector === handleObj.selector ||
						selector === "**" && handleObj.selector ) ) {
					handlers.splice( j, 1 );

					if ( handleObj.selector ) {
						handlers.delegateCount--;
					}
					if ( special.remove ) {
						special.remove.call( elem, handleObj );
					}
				}
			}

			// Remove generic event handler if we removed something and no more handlers exist
			// (avoids potential for endless recursion during removal of special event handlers)
			if ( origCount && !handlers.length ) {
				if ( !special.teardown ||
					special.teardown.call( elem, namespaces, elemData.handle ) === false ) {

					jQuery.removeEvent( elem, type, elemData.handle );
				}

				delete events[ type ];
			}
		}

		// Remove data and the expando if it's no longer used
		if ( jQuery.isEmptyObject( events ) ) {
			dataPriv.remove( elem, "handle events" );
		}
	},

	dispatch: function( nativeEvent ) {

		var i, j, ret, matched, handleObj, handlerQueue,
			args = new Array( arguments.length ),

			// Make a writable jQuery.Event from the native event object
			event = jQuery.event.fix( nativeEvent ),

			handlers = (
					dataPriv.get( this, "events" ) || Object.create( null )
				)[ event.type ] || [],
			special = jQuery.event.special[ event.type ] || {};

		// Use the fix-ed jQuery.Event rather than the (read-only) native event
		args[ 0 ] = event;

		for ( i = 1; i < arguments.length; i++ ) {
			args[ i ] = arguments[ i ];
		}

		event.delegateTarget = this;

		// Call the preDispatch hook for the mapped type, and let it bail if desired
		if ( special.preDispatch && special.preDispatch.call( this, event ) === false ) {
			return;
		}

		// Determine handlers
		handlerQueue = jQuery.event.handlers.call( this, event, handlers );

		// Run delegates first; they may want to stop propagation beneath us
		i = 0;
		while ( ( matched = handlerQueue[ i++ ] ) && !event.isPropagationStopped() ) {
			event.currentTarget = matched.elem;

			j = 0;
			while ( ( handleObj = matched.handlers[ j++ ] ) &&
				!event.isImmediatePropagationStopped() ) {

				// If the event is namespaced, then each handler is only invoked if it is
				// specially universal or its namespaces are a superset of the event's.
				if ( !event.rnamespace || handleObj.namespace === false ||
					event.rnamespace.test( handleObj.namespace ) ) {

					event.handleObj = handleObj;
					event.data = handleObj.data;

					ret = ( ( jQuery.event.special[ handleObj.origType ] || {} ).handle ||
						handleObj.handler ).apply( matched.elem, args );

					if ( ret !== undefined ) {
						if ( ( event.result = ret ) === false ) {
							event.preventDefault();
							event.stopPropagation();
						}
					}
				}
			}
		}

		// Call the postDispatch hook for the mapped type
		if ( special.postDispatch ) {
			special.postDispatch.call( this, event );
		}

		return event.result;
	},

	handlers: function( event, handlers ) {
		var i, handleObj, sel, matchedHandlers, matchedSelectors,
			handlerQueue = [],
			delegateCount = handlers.delegateCount,
			cur = event.target;

		// Find delegate handlers
		if ( delegateCount &&

			// Support: IE <=9
			// Black-hole SVG <use> instance trees (trac-13180)
			cur.nodeType &&

			// Support: Firefox <=42
			// Suppress spec-violating clicks indicating a non-primary pointer button (trac-3861)
			// https://www.w3.org/TR/DOM-Level-3-Events/#event-type-click
			// Support: IE 11 only
			// ...but not arrow key "clicks" of radio inputs, which can have `button` -1 (gh-2343)
			!( event.type === "click" && event.button >= 1 ) ) {

			for ( ; cur !== this; cur = cur.parentNode || this ) {

				// Don't check non-elements (#13208)
				// Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
				if ( cur.nodeType === 1 && !( event.type === "click" && cur.disabled === true ) ) {
					matchedHandlers = [];
					matchedSelectors = {};
					for ( i = 0; i < delegateCount; i++ ) {
						handleObj = handlers[ i ];

						// Don't conflict with Object.prototype properties (#13203)
						sel = handleObj.selector + " ";

						if ( matchedSelectors[ sel ] === undefined ) {
							matchedSelectors[ sel ] = handleObj.needsContext ?
								jQuery( sel, this ).index( cur ) > -1 :
								jQuery.find( sel, this, null, [ cur ] ).length;
						}
						if ( matchedSelectors[ sel ] ) {
							matchedHandlers.push( handleObj );
						}
					}
					if ( matchedHandlers.length ) {
						handlerQueue.push( { elem: cur, handlers: matchedHandlers } );
					}
				}
			}
		}

		// Add the remaining (directly-bound) handlers
		cur = this;
		if ( delegateCount < handlers.length ) {
			handlerQueue.push( { elem: cur, handlers: handlers.slice( delegateCount ) } );
		}

		return handlerQueue;
	},

	addProp: function( name, hook ) {
		Object.defineProperty( jQuery.Event.prototype, name, {
			enumerable: true,
			configurable: true,

			get: isFunction( hook ) ?
				function() {
					if ( this.originalEvent ) {
							return hook( this.originalEvent );
					}
				} :
				function() {
					if ( this.originalEvent ) {
							return this.originalEvent[ name ];
					}
				},

			set: function( value ) {
				Object.defineProperty( this, name, {
					enumerable: true,
					configurable: true,
					writable: true,
					value: value
				} );
			}
		} );
	},

	fix: function( originalEvent ) {
		return originalEvent[ jQuery.expando ] ?
			originalEvent :
			new jQuery.Event( originalEvent );
	},

	special: {
		load: {

			// Prevent triggered image.load events from bubbling to window.load
			noBubble: true
		},
		click: {

			// Utilize native event to ensure correct state for checkable inputs
			setup: function( data ) {

				// For mutual compressibility with _default, replace `this` access with a local var.
				// `|| data` is dead code meant only to preserve the variable through minification.
				var el = this || data;

				// Claim the first handler
				if ( rcheckableType.test( el.type ) &&
					el.click && nodeName( el, "input" ) ) {

					// dataPriv.set( el, "click", ... )
					leverageNative( el, "click", returnTrue );
				}

				// Return false to allow normal processing in the caller
				return false;
			},
			trigger: function( data ) {

				// For mutual compressibility with _default, replace `this` access with a local var.
				// `|| data` is dead code meant only to preserve the variable through minification.
				var el = this || data;

				// Force setup before triggering a click
				if ( rcheckableType.test( el.type ) &&
					el.click && nodeName( el, "input" ) ) {

					leverageNative( el, "click" );
				}

				// Return non-false to allow normal event-path propagation
				return true;
			},

			// For cross-browser consistency, suppress native .click() on links
			// Also prevent it if we're currently inside a leveraged native-event stack
			_default: function( event ) {
				var target = event.target;
				return rcheckableType.test( target.type ) &&
					target.click && nodeName( target, "input" ) &&
					dataPriv.get( target, "click" ) ||
					nodeName( target, "a" );
			}
		},

		beforeunload: {
			postDispatch: function( event ) {

				// Support: Firefox 20+
				// Firefox doesn't alert if the returnValue field is not set.
				if ( event.result !== undefined && event.originalEvent ) {
					event.originalEvent.returnValue = event.result;
				}
			}
		}
	}
};

// Ensure the presence of an event listener that handles manually-triggered
// synthetic events by interrupting progress until reinvoked in response to
// *native* events that it fires directly, ensuring that state changes have
// already occurred before other listeners are invoked.
function leverageNative( el, type, expectSync ) {

	// Missing expectSync indicates a trigger call, which must force setup through jQuery.event.add
	if ( !expectSync ) {
		if ( dataPriv.get( el, type ) === undefined ) {
			jQuery.event.add( el, type, returnTrue );
		}
		return;
	}

	// Register the controller as a special universal handler for all event namespaces
	dataPriv.set( el, type, false );
	jQuery.event.add( el, type, {
		namespace: false,
		handler: function( event ) {
			var notAsync, result,
				saved = dataPriv.get( this, type );

			if ( ( event.isTrigger & 1 ) && this[ type ] ) {

				// Interrupt processing of the outer synthetic .trigger()ed event
				// Saved data should be false in such cases, but might be a leftover capture object
				// from an async native handler (gh-4350)
				if ( !saved.length ) {

					// Store arguments for use when handling the inner native event
					// There will always be at least one argument (an event object), so this array
					// will not be confused with a leftover capture object.
					saved = slice.call( arguments );
					dataPriv.set( this, type, saved );

					// Trigger the native event and capture its result
					// Support: IE <=9 - 11+
					// focus() and blur() are asynchronous
					notAsync = expectSync( this, type );
					this[ type ]();
					result = dataPriv.get( this, type );
					if ( saved !== result || notAsync ) {
						dataPriv.set( this, type, false );
					} else {
						result = {};
					}
					if ( saved !== result ) {

						// Cancel the outer synthetic event
						event.stopImmediatePropagation();
						event.preventDefault();
						return result.value;
					}

				// If this is an inner synthetic event for an event with a bubbling surrogate
				// (focus or blur), assume that the surrogate already propagated from triggering the
				// native event and prevent that from happening again here.
				// This technically gets the ordering wrong w.r.t. to `.trigger()` (in which the
				// bubbling surrogate propagates *after* the non-bubbling base), but that seems
				// less bad than duplication.
				} else if ( ( jQuery.event.special[ type ] || {} ).delegateType ) {
					event.stopPropagation();
				}

			// If this is a native event triggered above, everything is now in order
			// Fire an inner synthetic event with the original arguments
			} else if ( saved.length ) {

				// ...and capture the result
				dataPriv.set( this, type, {
					value: jQuery.event.trigger(

						// Support: IE <=9 - 11+
						// Extend with the prototype to reset the above stopImmediatePropagation()
						jQuery.extend( saved[ 0 ], jQuery.Event.prototype ),
						saved.slice( 1 ),
						this
					)
				} );

				// Abort handling of the native event
				event.stopImmediatePropagation();
			}
		}
	} );
}

jQuery.removeEvent = function( elem, type, handle ) {

	// This "if" is needed for plain objects
	if ( elem.removeEventListener ) {
		elem.removeEventListener( type, handle );
	}
};

jQuery.Event = function( src, props ) {

	// Allow instantiation without the 'new' keyword
	if ( !( this instanceof jQuery.Event ) ) {
		return new jQuery.Event( src, props );
	}

	// Event object
	if ( src && src.type ) {
		this.originalEvent = src;
		this.type = src.type;

		// Events bubbling up the document may have been marked as prevented
		// by a handler lower down the tree; reflect the correct value.
		this.isDefaultPrevented = src.defaultPrevented ||
				src.defaultPrevented === undefined &&

				// Support: Android <=2.3 only
				src.returnValue === false ?
			returnTrue :
			returnFalse;

		// Create target properties
		// Support: Safari <=6 - 7 only
		// Target should not be a text node (#504, #13143)
		this.target = ( src.target && src.target.nodeType === 3 ) ?
			src.target.parentNode :
			src.target;

		this.currentTarget = src.currentTarget;
		this.relatedTarget = src.relatedTarget;

	// Event type
	} else {
		this.type = src;
	}

	// Put explicitly provided properties onto the event object
	if ( props ) {
		jQuery.extend( this, props );
	}

	// Create a timestamp if incoming event doesn't have one
	this.timeStamp = src && src.timeStamp || Date.now();

	// Mark it as fixed
	this[ jQuery.expando ] = true;
};

// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
// https://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
jQuery.Event.prototype = {
	constructor: jQuery.Event,
	isDefaultPrevented: returnFalse,
	isPropagationStopped: returnFalse,
	isImmediatePropagationStopped: returnFalse,
	isSimulated: false,

	preventDefault: function() {
		var e = this.originalEvent;

		this.isDefaultPrevented = returnTrue;

		if ( e && !this.isSimulated ) {
			e.preventDefault();
		}
	},
	stopPropagation: function() {
		var e = this.originalEvent;

		this.isPropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopPropagation();
		}
	},
	stopImmediatePropagation: function() {
		var e = this.originalEvent;

		this.isImmediatePropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopImmediatePropagation();
		}

		this.stopPropagation();
	}
};

// Includes all common event props including KeyEvent and MouseEvent specific props
jQuery.each( {
	altKey: true,
	bubbles: true,
	cancelable: true,
	changedTouches: true,
	ctrlKey: true,
	detail: true,
	eventPhase: true,
	metaKey: true,
	pageX: true,
	pageY: true,
	shiftKey: true,
	view: true,
	"char": true,
	code: true,
	charCode: true,
	key: true,
	keyCode: true,
	button: true,
	buttons: true,
	clientX: true,
	clientY: true,
	offsetX: true,
	offsetY: true,
	pointerId: true,
	pointerType: true,
	screenX: true,
	screenY: true,
	targetTouches: true,
	toElement: true,
	touches: true,

	which: function( event ) {
		var button = event.button;

		// Add which for key events
		if ( event.which == null && rkeyEvent.test( event.type ) ) {
			return event.charCode != null ? event.charCode : event.keyCode;
		}

		// Add which for click: 1 === left; 2 === middle; 3 === right
		if ( !event.which && button !== undefined && rmouseEvent.test( event.type ) ) {
			if ( button & 1 ) {
				return 1;
			}

			if ( button & 2 ) {
				return 3;
			}

			if ( button & 4 ) {
				return 2;
			}

			return 0;
		}

		return event.which;
	}
}, jQuery.event.addProp );

jQuery.each( { focus: "focusin", blur: "focusout" }, function( type, delegateType ) {
	jQuery.event.special[ type ] = {

		// Utilize native event if possible so blur/focus sequence is correct
		setup: function() {

			// Claim the first handler
			// dataPriv.set( this, "focus", ... )
			// dataPriv.set( this, "blur", ... )
			leverageNative( this, type, expectSync );

			// Return false to allow normal processing in the caller
			return false;
		},
		trigger: function() {

			// Force setup before trigger
			leverageNative( this, type );

			// Return non-false to allow normal event-path propagation
			return true;
		},

		delegateType: delegateType
	};
} );

// Create mouseenter/leave events using mouseover/out and event-time checks
// so that event delegation works in jQuery.
// Do the same for pointerenter/pointerleave and pointerover/pointerout
//
// Support: Safari 7 only
// Safari sends mouseenter too often; see:
// https://bugs.chromium.org/p/chromium/issues/detail?id=470258
// for the description of the bug (it existed in older Chrome versions as well).
jQuery.each( {
	mouseenter: "mouseover",
	mouseleave: "mouseout",
	pointerenter: "pointerover",
	pointerleave: "pointerout"
}, function( orig, fix ) {
	jQuery.event.special[ orig ] = {
		delegateType: fix,
		bindType: fix,

		handle: function( event ) {
			var ret,
				target = this,
				related = event.relatedTarget,
				handleObj = event.handleObj;

			// For mouseenter/leave call the handler if related is outside the target.
			// NB: No relatedTarget if the mouse left/entered the browser window
			if ( !related || ( related !== target && !jQuery.contains( target, related ) ) ) {
				event.type = handleObj.origType;
				ret = handleObj.handler.apply( this, arguments );
				event.type = fix;
			}
			return ret;
		}
	};
} );

jQuery.fn.extend( {

	on: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn );
	},
	one: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn, 1 );
	},
	off: function( types, selector, fn ) {
		var handleObj, type;
		if ( types && types.preventDefault && types.handleObj ) {

			// ( event )  dispatched jQuery.Event
			handleObj = types.handleObj;
			jQuery( types.delegateTarget ).off(
				handleObj.namespace ?
					handleObj.origType + "." + handleObj.namespace :
					handleObj.origType,
				handleObj.selector,
				handleObj.handler
			);
			return this;
		}
		if ( typeof types === "object" ) {

			// ( types-object [, selector] )
			for ( type in types ) {
				this.off( type, selector, types[ type ] );
			}
			return this;
		}
		if ( selector === false || typeof selector === "function" ) {

			// ( types [, fn] )
			fn = selector;
			selector = undefined;
		}
		if ( fn === false ) {
			fn = returnFalse;
		}
		return this.each( function() {
			jQuery.event.remove( this, types, fn, selector );
		} );
	}
} );


var

	// Support: IE <=10 - 11, Edge 12 - 13 only
	// In IE/Edge using regex groups here causes severe slowdowns.
	// See https://connect.microsoft.com/IE/feedback/details/1736512/
	rnoInnerhtml = /<script|<style|<link/i,

	// checked="checked" or checked
	rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
	rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

// Prefer a tbody over its parent table for containing new rows
function manipulationTarget( elem, content ) {
	if ( nodeName( elem, "table" ) &&
		nodeName( content.nodeType !== 11 ? content : content.firstChild, "tr" ) ) {

		return jQuery( elem ).children( "tbody" )[ 0 ] || elem;
	}

	return elem;
}

// Replace/restore the type attribute of script elements for safe DOM manipulation
function disableScript( elem ) {
	elem.type = ( elem.getAttribute( "type" ) !== null ) + "/" + elem.type;
	return elem;
}
function restoreScript( elem ) {
	if ( ( elem.type || "" ).slice( 0, 5 ) === "true/" ) {
		elem.type = elem.type.slice( 5 );
	} else {
		elem.removeAttribute( "type" );
	}

	return elem;
}

function cloneCopyEvent( src, dest ) {
	var i, l, type, pdataOld, udataOld, udataCur, events;

	if ( dest.nodeType !== 1 ) {
		return;
	}

	// 1. Copy private data: events, handlers, etc.
	if ( dataPriv.hasData( src ) ) {
		pdataOld = dataPriv.get( src );
		events = pdataOld.events;

		if ( events ) {
			dataPriv.remove( dest, "handle events" );

			for ( type in events ) {
				for ( i = 0, l = events[ type ].length; i < l; i++ ) {
					jQuery.event.add( dest, type, events[ type ][ i ] );
				}
			}
		}
	}

	// 2. Copy user data
	if ( dataUser.hasData( src ) ) {
		udataOld = dataUser.access( src );
		udataCur = jQuery.extend( {}, udataOld );

		dataUser.set( dest, udataCur );
	}
}

// Fix IE bugs, see support tests
function fixInput( src, dest ) {
	var nodeName = dest.nodeName.toLowerCase();

	// Fails to persist the checked state of a cloned checkbox or radio button.
	if ( nodeName === "input" && rcheckableType.test( src.type ) ) {
		dest.checked = src.checked;

	// Fails to return the selected option to the default selected state when cloning options
	} else if ( nodeName === "input" || nodeName === "textarea" ) {
		dest.defaultValue = src.defaultValue;
	}
}

function domManip( collection, args, callback, ignored ) {

	// Flatten any nested arrays
	args = flat( args );

	var fragment, first, scripts, hasScripts, node, doc,
		i = 0,
		l = collection.length,
		iNoClone = l - 1,
		value = args[ 0 ],
		valueIsFunction = isFunction( value );

	// We can't cloneNode fragments that contain checked, in WebKit
	if ( valueIsFunction ||
			( l > 1 && typeof value === "string" &&
				!support.checkClone && rchecked.test( value ) ) ) {
		return collection.each( function( index ) {
			var self = collection.eq( index );
			if ( valueIsFunction ) {
				args[ 0 ] = value.call( this, index, self.html() );
			}
			domManip( self, args, callback, ignored );
		} );
	}

	if ( l ) {
		fragment = buildFragment( args, collection[ 0 ].ownerDocument, false, collection, ignored );
		first = fragment.firstChild;

		if ( fragment.childNodes.length === 1 ) {
			fragment = first;
		}

		// Require either new content or an interest in ignored elements to invoke the callback
		if ( first || ignored ) {
			scripts = jQuery.map( getAll( fragment, "script" ), disableScript );
			hasScripts = scripts.length;

			// Use the original fragment for the last item
			// instead of the first because it can end up
			// being emptied incorrectly in certain situations (#8070).
			for ( ; i < l; i++ ) {
				node = fragment;

				if ( i !== iNoClone ) {
					node = jQuery.clone( node, true, true );

					// Keep references to cloned scripts for later restoration
					if ( hasScripts ) {

						// Support: Android <=4.0 only, PhantomJS 1 only
						// push.apply(_, arraylike) throws on ancient WebKit
						jQuery.merge( scripts, getAll( node, "script" ) );
					}
				}

				callback.call( collection[ i ], node, i );
			}

			if ( hasScripts ) {
				doc = scripts[ scripts.length - 1 ].ownerDocument;

				// Reenable scripts
				jQuery.map( scripts, restoreScript );

				// Evaluate executable scripts on first document insertion
				for ( i = 0; i < hasScripts; i++ ) {
					node = scripts[ i ];
					if ( rscriptType.test( node.type || "" ) &&
						!dataPriv.access( node, "globalEval" ) &&
						jQuery.contains( doc, node ) ) {

						if ( node.src && ( node.type || "" ).toLowerCase()  !== "module" ) {

							// Optional AJAX dependency, but won't run scripts if not present
							if ( jQuery._evalUrl && !node.noModule ) {
								jQuery._evalUrl( node.src, {
									nonce: node.nonce || node.getAttribute( "nonce" )
								}, doc );
							}
						} else {
							DOMEval( node.textContent.replace( rcleanScript, "" ), node, doc );
						}
					}
				}
			}
		}
	}

	return collection;
}

function remove( elem, selector, keepData ) {
	var node,
		nodes = selector ? jQuery.filter( selector, elem ) : elem,
		i = 0;

	for ( ; ( node = nodes[ i ] ) != null; i++ ) {
		if ( !keepData && node.nodeType === 1 ) {
			jQuery.cleanData( getAll( node ) );
		}

		if ( node.parentNode ) {
			if ( keepData && isAttached( node ) ) {
				setGlobalEval( getAll( node, "script" ) );
			}
			node.parentNode.removeChild( node );
		}
	}

	return elem;
}

jQuery.extend( {
	htmlPrefilter: function( html ) {
		return html;
	},

	clone: function( elem, dataAndEvents, deepDataAndEvents ) {
		var i, l, srcElements, destElements,
			clone = elem.cloneNode( true ),
			inPage = isAttached( elem );

		// Fix IE cloning issues
		if ( !support.noCloneChecked && ( elem.nodeType === 1 || elem.nodeType === 11 ) &&
				!jQuery.isXMLDoc( elem ) ) {

			// We eschew Sizzle here for performance reasons: https://jsperf.com/getall-vs-sizzle/2
			destElements = getAll( clone );
			srcElements = getAll( elem );

			for ( i = 0, l = srcElements.length; i < l; i++ ) {
				fixInput( srcElements[ i ], destElements[ i ] );
			}
		}

		// Copy the events from the original to the clone
		if ( dataAndEvents ) {
			if ( deepDataAndEvents ) {
				srcElements = srcElements || getAll( elem );
				destElements = destElements || getAll( clone );

				for ( i = 0, l = srcElements.length; i < l; i++ ) {
					cloneCopyEvent( srcElements[ i ], destElements[ i ] );
				}
			} else {
				cloneCopyEvent( elem, clone );
			}
		}

		// Preserve script evaluation history
		destElements = getAll( clone, "script" );
		if ( destElements.length > 0 ) {
			setGlobalEval( destElements, !inPage && getAll( elem, "script" ) );
		}

		// Return the cloned set
		return clone;
	},

	cleanData: function( elems ) {
		var data, elem, type,
			special = jQuery.event.special,
			i = 0;

		for ( ; ( elem = elems[ i ] ) !== undefined; i++ ) {
			if ( acceptData( elem ) ) {
				if ( ( data = elem[ dataPriv.expando ] ) ) {
					if ( data.events ) {
						for ( type in data.events ) {
							if ( special[ type ] ) {
								jQuery.event.remove( elem, type );

							// This is a shortcut to avoid jQuery.event.remove's overhead
							} else {
								jQuery.removeEvent( elem, type, data.handle );
							}
						}
					}

					// Support: Chrome <=35 - 45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataPriv.expando ] = undefined;
				}
				if ( elem[ dataUser.expando ] ) {

					// Support: Chrome <=35 - 45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataUser.expando ] = undefined;
				}
			}
		}
	}
} );

jQuery.fn.extend( {
	detach: function( selector ) {
		return remove( this, selector, true );
	},

	remove: function( selector ) {
		return remove( this, selector );
	},

	text: function( value ) {
		return access( this, function( value ) {
			return value === undefined ?
				jQuery.text( this ) :
				this.empty().each( function() {
					if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
						this.textContent = value;
					}
				} );
		}, null, value, arguments.length );
	},

	append: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.appendChild( elem );
			}
		} );
	},

	prepend: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.insertBefore( elem, target.firstChild );
			}
		} );
	},

	before: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this );
			}
		} );
	},

	after: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this.nextSibling );
			}
		} );
	},

	empty: function() {
		var elem,
			i = 0;

		for ( ; ( elem = this[ i ] ) != null; i++ ) {
			if ( elem.nodeType === 1 ) {

				// Prevent memory leaks
				jQuery.cleanData( getAll( elem, false ) );

				// Remove any remaining nodes
				elem.textContent = "";
			}
		}

		return this;
	},

	clone: function( dataAndEvents, deepDataAndEvents ) {
		dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
		deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;

		return this.map( function() {
			return jQuery.clone( this, dataAndEvents, deepDataAndEvents );
		} );
	},

	html: function( value ) {
		return access( this, function( value ) {
			var elem = this[ 0 ] || {},
				i = 0,
				l = this.length;

			if ( value === undefined && elem.nodeType === 1 ) {
				return elem.innerHTML;
			}

			// See if we can take a shortcut and just use innerHTML
			if ( typeof value === "string" && !rnoInnerhtml.test( value ) &&
				!wrapMap[ ( rtagName.exec( value ) || [ "", "" ] )[ 1 ].toLowerCase() ] ) {

				value = jQuery.htmlPrefilter( value );

				try {
					for ( ; i < l; i++ ) {
						elem = this[ i ] || {};

						// Remove element nodes and prevent memory leaks
						if ( elem.nodeType === 1 ) {
							jQuery.cleanData( getAll( elem, false ) );
							elem.innerHTML = value;
						}
					}

					elem = 0;

				// If using innerHTML throws an exception, use the fallback method
				} catch ( e ) {}
			}

			if ( elem ) {
				this.empty().append( value );
			}
		}, null, value, arguments.length );
	},

	replaceWith: function() {
		var ignored = [];

		// Make the changes, replacing each non-ignored context element with the new content
		return domManip( this, arguments, function( elem ) {
			var parent = this.parentNode;

			if ( jQuery.inArray( this, ignored ) < 0 ) {
				jQuery.cleanData( getAll( this ) );
				if ( parent ) {
					parent.replaceChild( elem, this );
				}
			}

		// Force callback invocation
		}, ignored );
	}
} );

jQuery.each( {
	appendTo: "append",
	prependTo: "prepend",
	insertBefore: "before",
	insertAfter: "after",
	replaceAll: "replaceWith"
}, function( name, original ) {
	jQuery.fn[ name ] = function( selector ) {
		var elems,
			ret = [],
			insert = jQuery( selector ),
			last = insert.length - 1,
			i = 0;

		for ( ; i <= last; i++ ) {
			elems = i === last ? this : this.clone( true );
			jQuery( insert[ i ] )[ original ]( elems );

			// Support: Android <=4.0 only, PhantomJS 1 only
			// .get() because push.apply(_, arraylike) throws on ancient WebKit
			push.apply( ret, elems.get() );
		}

		return this.pushStack( ret );
	};
} );
var rnumnonpx = new RegExp( "^(" + pnum + ")(?!px)[a-z%]+$", "i" );

var getStyles = function( elem ) {

		// Support: IE <=11 only, Firefox <=30 (#15098, #14150)
		// IE throws on elements created in popups
		// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
		var view = elem.ownerDocument.defaultView;

		if ( !view || !view.opener ) {
			view = window;
		}

		return view.getComputedStyle( elem );
	};

var swap = function( elem, options, callback ) {
	var ret, name,
		old = {};

	// Remember the old values, and insert the new ones
	for ( name in options ) {
		old[ name ] = elem.style[ name ];
		elem.style[ name ] = options[ name ];
	}

	ret = callback.call( elem );

	// Revert the old values
	for ( name in options ) {
		elem.style[ name ] = old[ name ];
	}

	return ret;
};


var rboxStyle = new RegExp( cssExpand.join( "|" ), "i" );



( function() {

	// Executing both pixelPosition & boxSizingReliable tests require only one layout
	// so they're executed at the same time to save the second computation.
	function computeStyleTests() {

		// This is a singleton, we need to execute it only once
		if ( !div ) {
			return;
		}

		container.style.cssText = "position:absolute;left:-11111px;width:60px;" +
			"margin-top:1px;padding:0;border:0";
		div.style.cssText =
			"position:relative;display:block;box-sizing:border-box;overflow:scroll;" +
			"margin:auto;border:1px;padding:1px;" +
			"width:60%;top:1%";
		documentElement.appendChild( container ).appendChild( div );

		var divStyle = window.getComputedStyle( div );
		pixelPositionVal = divStyle.top !== "1%";

		// Support: Android 4.0 - 4.3 only, Firefox <=3 - 44
		reliableMarginLeftVal = roundPixelMeasures( divStyle.marginLeft ) === 12;

		// Support: Android 4.0 - 4.3 only, Safari <=9.1 - 10.1, iOS <=7.0 - 9.3
		// Some styles come back with percentage values, even though they shouldn't
		div.style.right = "60%";
		pixelBoxStylesVal = roundPixelMeasures( divStyle.right ) === 36;

		// Support: IE 9 - 11 only
		// Detect misreporting of content dimensions for box-sizing:border-box elements
		boxSizingReliableVal = roundPixelMeasures( divStyle.width ) === 36;

		// Support: IE 9 only
		// Detect overflow:scroll screwiness (gh-3699)
		// Support: Chrome <=64
		// Don't get tricked when zoom affects offsetWidth (gh-4029)
		div.style.position = "absolute";
		scrollboxSizeVal = roundPixelMeasures( div.offsetWidth / 3 ) === 12;

		documentElement.removeChild( container );

		// Nullify the div so it wouldn't be stored in the memory and
		// it will also be a sign that checks already performed
		div = null;
	}

	function roundPixelMeasures( measure ) {
		return Math.round( parseFloat( measure ) );
	}

	var pixelPositionVal, boxSizingReliableVal, scrollboxSizeVal, pixelBoxStylesVal,
		reliableTrDimensionsVal, reliableMarginLeftVal,
		container = document.createElement( "div" ),
		div = document.createElement( "div" );

	// Finish early in limited (non-browser) environments
	if ( !div.style ) {
		return;
	}

	// Support: IE <=9 - 11 only
	// Style of cloned element affects source element cloned (#8908)
	div.style.backgroundClip = "content-box";
	div.cloneNode( true ).style.backgroundClip = "";
	support.clearCloneStyle = div.style.backgroundClip === "content-box";

	jQuery.extend( support, {
		boxSizingReliable: function() {
			computeStyleTests();
			return boxSizingReliableVal;
		},
		pixelBoxStyles: function() {
			computeStyleTests();
			return pixelBoxStylesVal;
		},
		pixelPosition: function() {
			computeStyleTests();
			return pixelPositionVal;
		},
		reliableMarginLeft: function() {
			computeStyleTests();
			return reliableMarginLeftVal;
		},
		scrollboxSize: function() {
			computeStyleTests();
			return scrollboxSizeVal;
		},

		// Support: IE 9 - 11+, Edge 15 - 18+
		// IE/Edge misreport `getComputedStyle` of table rows with width/height
		// set in CSS while `offset*` properties report correct values.
		// Behavior in IE 9 is more subtle than in newer versions & it passes
		// some versions of this test; make sure not to make it pass there!
		reliableTrDimensions: function() {
			var table, tr, trChild, trStyle;
			if ( reliableTrDimensionsVal == null ) {
				table = document.createElement( "table" );
				tr = document.createElement( "tr" );
				trChild = document.createElement( "div" );

				table.style.cssText = "position:absolute;left:-11111px";
				tr.style.height = "1px";
				trChild.style.height = "9px";

				documentElement
					.appendChild( table )
					.appendChild( tr )
					.appendChild( trChild );

				trStyle = window.getComputedStyle( tr );
				reliableTrDimensionsVal = parseInt( trStyle.height ) > 3;

				documentElement.removeChild( table );
			}
			return reliableTrDimensionsVal;
		}
	} );
} )();


function curCSS( elem, name, computed ) {
	var width, minWidth, maxWidth, ret,

		// Support: Firefox 51+
		// Retrieving style before computed somehow
		// fixes an issue with getting wrong values
		// on detached elements
		style = elem.style;

	computed = computed || getStyles( elem );

	// getPropertyValue is needed for:
	//   .css('filter') (IE 9 only, #12537)
	//   .css('--customProperty) (#3144)
	if ( computed ) {
		ret = computed.getPropertyValue( name ) || computed[ name ];

		if ( ret === "" && !isAttached( elem ) ) {
			ret = jQuery.style( elem, name );
		}

		// A tribute to the "awesome hack by Dean Edwards"
		// Android Browser returns percentage for some values,
		// but width seems to be reliably pixels.
		// This is against the CSSOM draft spec:
		// https://drafts.csswg.org/cssom/#resolved-values
		if ( !support.pixelBoxStyles() && rnumnonpx.test( ret ) && rboxStyle.test( name ) ) {

			// Remember the original values
			width = style.width;
			minWidth = style.minWidth;
			maxWidth = style.maxWidth;

			// Put in the new values to get a computed value out
			style.minWidth = style.maxWidth = style.width = ret;
			ret = computed.width;

			// Revert the changed values
			style.width = width;
			style.minWidth = minWidth;
			style.maxWidth = maxWidth;
		}
	}

	return ret !== undefined ?

		// Support: IE <=9 - 11 only
		// IE returns zIndex value as an integer.
		ret + "" :
		ret;
}


function addGetHookIf( conditionFn, hookFn ) {

	// Define the hook, we'll check on the first run if it's really needed.
	return {
		get: function() {
			if ( conditionFn() ) {

				// Hook not needed (or it's not possible to use it due
				// to missing dependency), remove it.
				delete this.get;
				return;
			}

			// Hook needed; redefine it so that the support test is not executed again.
			return ( this.get = hookFn ).apply( this, arguments );
		}
	};
}


var cssPrefixes = [ "Webkit", "Moz", "ms" ],
	emptyStyle = document.createElement( "div" ).style,
	vendorProps = {};

// Return a vendor-prefixed property or undefined
function vendorPropName( name ) {

	// Check for vendor prefixed names
	var capName = name[ 0 ].toUpperCase() + name.slice( 1 ),
		i = cssPrefixes.length;

	while ( i-- ) {
		name = cssPrefixes[ i ] + capName;
		if ( name in emptyStyle ) {
			return name;
		}
	}
}

// Return a potentially-mapped jQuery.cssProps or vendor prefixed property
function finalPropName( name ) {
	var final = jQuery.cssProps[ name ] || vendorProps[ name ];

	if ( final ) {
		return final;
	}
	if ( name in emptyStyle ) {
		return name;
	}
	return vendorProps[ name ] = vendorPropName( name ) || name;
}


var

	// Swappable if display is none or starts with table
	// except "table", "table-cell", or "table-caption"
	// See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
	rdisplayswap = /^(none|table(?!-c[ea]).+)/,
	rcustomProp = /^--/,
	cssShow = { position: "absolute", visibility: "hidden", display: "block" },
	cssNormalTransform = {
		letterSpacing: "0",
		fontWeight: "400"
	};

function setPositiveNumber( _elem, value, subtract ) {

	// Any relative (+/-) values have already been
	// normalized at this point
	var matches = rcssNum.exec( value );
	return matches ?

		// Guard against undefined "subtract", e.g., when used as in cssHooks
		Math.max( 0, matches[ 2 ] - ( subtract || 0 ) ) + ( matches[ 3 ] || "px" ) :
		value;
}

function boxModelAdjustment( elem, dimension, box, isBorderBox, styles, computedVal ) {
	var i = dimension === "width" ? 1 : 0,
		extra = 0,
		delta = 0;

	// Adjustment may not be necessary
	if ( box === ( isBorderBox ? "border" : "content" ) ) {
		return 0;
	}

	for ( ; i < 4; i += 2 ) {

		// Both box models exclude margin
		if ( box === "margin" ) {
			delta += jQuery.css( elem, box + cssExpand[ i ], true, styles );
		}

		// If we get here with a content-box, we're seeking "padding" or "border" or "margin"
		if ( !isBorderBox ) {

			// Add padding
			delta += jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );

			// For "border" or "margin", add border
			if ( box !== "padding" ) {
				delta += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );

			// But still keep track of it otherwise
			} else {
				extra += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}

		// If we get here with a border-box (content + padding + border), we're seeking "content" or
		// "padding" or "margin"
		} else {

			// For "content", subtract padding
			if ( box === "content" ) {
				delta -= jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
			}

			// For "content" or "padding", subtract border
			if ( box !== "margin" ) {
				delta -= jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}
		}
	}

	// Account for positive content-box scroll gutter when requested by providing computedVal
	if ( !isBorderBox && computedVal >= 0 ) {

		// offsetWidth/offsetHeight is a rounded sum of content, padding, scroll gutter, and border
		// Assuming integer scroll gutter, subtract the rest and round down
		delta += Math.max( 0, Math.ceil(
			elem[ "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 ) ] -
			computedVal -
			delta -
			extra -
			0.5

		// If offsetWidth/offsetHeight is unknown, then we can't determine content-box scroll gutter
		// Use an explicit zero to avoid NaN (gh-3964)
		) ) || 0;
	}

	return delta;
}

function getWidthOrHeight( elem, dimension, extra ) {

	// Start with computed style
	var styles = getStyles( elem ),

		// To avoid forcing a reflow, only fetch boxSizing if we need it (gh-4322).
		// Fake content-box until we know it's needed to know the true value.
		boxSizingNeeded = !support.boxSizingReliable() || extra,
		isBorderBox = boxSizingNeeded &&
			jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
		valueIsBorderBox = isBorderBox,

		val = curCSS( elem, dimension, styles ),
		offsetProp = "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 );

	// Support: Firefox <=54
	// Return a confounding non-pixel value or feign ignorance, as appropriate.
	if ( rnumnonpx.test( val ) ) {
		if ( !extra ) {
			return val;
		}
		val = "auto";
	}


	// Support: IE 9 - 11 only
	// Use offsetWidth/offsetHeight for when box sizing is unreliable.
	// In those cases, the computed value can be trusted to be border-box.
	if ( ( !support.boxSizingReliable() && isBorderBox ||

		// Support: IE 10 - 11+, Edge 15 - 18+
		// IE/Edge misreport `getComputedStyle` of table rows with width/height
		// set in CSS while `offset*` properties report correct values.
		// Interestingly, in some cases IE 9 doesn't suffer from this issue.
		!support.reliableTrDimensions() && nodeName( elem, "tr" ) ||

		// Fall back to offsetWidth/offsetHeight when value is "auto"
		// This happens for inline elements with no explicit setting (gh-3571)
		val === "auto" ||

		// Support: Android <=4.1 - 4.3 only
		// Also use offsetWidth/offsetHeight for misreported inline dimensions (gh-3602)
		!parseFloat( val ) && jQuery.css( elem, "display", false, styles ) === "inline" ) &&

		// Make sure the element is visible & connected
		elem.getClientRects().length ) {

		isBorderBox = jQuery.css( elem, "boxSizing", false, styles ) === "border-box";

		// Where available, offsetWidth/offsetHeight approximate border box dimensions.
		// Where not available (e.g., SVG), assume unreliable box-sizing and interpret the
		// retrieved value as a content box dimension.
		valueIsBorderBox = offsetProp in elem;
		if ( valueIsBorderBox ) {
			val = elem[ offsetProp ];
		}
	}

	// Normalize "" and auto
	val = parseFloat( val ) || 0;

	// Adjust for the element's box model
	return ( val +
		boxModelAdjustment(
			elem,
			dimension,
			extra || ( isBorderBox ? "border" : "content" ),
			valueIsBorderBox,
			styles,

			// Provide the current computed size to request scroll gutter calculation (gh-3589)
			val
		)
	) + "px";
}

jQuery.extend( {

	// Add in style property hooks for overriding the default
	// behavior of getting and setting a style property
	cssHooks: {
		opacity: {
			get: function( elem, computed ) {
				if ( computed ) {

					// We should always get a number back from opacity
					var ret = curCSS( elem, "opacity" );
					return ret === "" ? "1" : ret;
				}
			}
		}
	},

	// Don't automatically add "px" to these possibly-unitless properties
	cssNumber: {
		"animationIterationCount": true,
		"columnCount": true,
		"fillOpacity": true,
		"flexGrow": true,
		"flexShrink": true,
		"fontWeight": true,
		"gridArea": true,
		"gridColumn": true,
		"gridColumnEnd": true,
		"gridColumnStart": true,
		"gridRow": true,
		"gridRowEnd": true,
		"gridRowStart": true,
		"lineHeight": true,
		"opacity": true,
		"order": true,
		"orphans": true,
		"widows": true,
		"zIndex": true,
		"zoom": true
	},

	// Add in properties whose names you wish to fix before
	// setting or getting the value
	cssProps: {},

	// Get and set the style property on a DOM Node
	style: function( elem, name, value, extra ) {

		// Don't set styles on text and comment nodes
		if ( !elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style ) {
			return;
		}

		// Make sure that we're working with the right name
		var ret, type, hooks,
			origName = camelCase( name ),
			isCustomProp = rcustomProp.test( name ),
			style = elem.style;

		// Make sure that we're working with the right name. We don't
		// want to query the value if it is a CSS custom property
		// since they are user-defined.
		if ( !isCustomProp ) {
			name = finalPropName( origName );
		}

		// Gets hook for the prefixed version, then unprefixed version
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// Check if we're setting a value
		if ( value !== undefined ) {
			type = typeof value;

			// Convert "+=" or "-=" to relative numbers (#7345)
			if ( type === "string" && ( ret = rcssNum.exec( value ) ) && ret[ 1 ] ) {
				value = adjustCSS( elem, name, ret );

				// Fixes bug #9237
				type = "number";
			}

			// Make sure that null and NaN values aren't set (#7116)
			if ( value == null || value !== value ) {
				return;
			}

			// If a number was passed in, add the unit (except for certain CSS properties)
			// The isCustomProp check can be removed in jQuery 4.0 when we only auto-append
			// "px" to a few hardcoded values.
			if ( type === "number" && !isCustomProp ) {
				value += ret && ret[ 3 ] || ( jQuery.cssNumber[ origName ] ? "" : "px" );
			}

			// background-* props affect original clone's values
			if ( !support.clearCloneStyle && value === "" && name.indexOf( "background" ) === 0 ) {
				style[ name ] = "inherit";
			}

			// If a hook was provided, use that value, otherwise just set the specified value
			if ( !hooks || !( "set" in hooks ) ||
				( value = hooks.set( elem, value, extra ) ) !== undefined ) {

				if ( isCustomProp ) {
					style.setProperty( name, value );
				} else {
					style[ name ] = value;
				}
			}

		} else {

			// If a hook was provided get the non-computed value from there
			if ( hooks && "get" in hooks &&
				( ret = hooks.get( elem, false, extra ) ) !== undefined ) {

				return ret;
			}

			// Otherwise just get the value from the style object
			return style[ name ];
		}
	},

	css: function( elem, name, extra, styles ) {
		var val, num, hooks,
			origName = camelCase( name ),
			isCustomProp = rcustomProp.test( name );

		// Make sure that we're working with the right name. We don't
		// want to modify the value if it is a CSS custom property
		// since they are user-defined.
		if ( !isCustomProp ) {
			name = finalPropName( origName );
		}

		// Try prefixed name followed by the unprefixed name
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// If a hook was provided get the computed value from there
		if ( hooks && "get" in hooks ) {
			val = hooks.get( elem, true, extra );
		}

		// Otherwise, if a way to get the computed value exists, use that
		if ( val === undefined ) {
			val = curCSS( elem, name, styles );
		}

		// Convert "normal" to computed value
		if ( val === "normal" && name in cssNormalTransform ) {
			val = cssNormalTransform[ name ];
		}

		// Make numeric if forced or a qualifier was provided and val looks numeric
		if ( extra === "" || extra ) {
			num = parseFloat( val );
			return extra === true || isFinite( num ) ? num || 0 : val;
		}

		return val;
	}
} );

jQuery.each( [ "height", "width" ], function( _i, dimension ) {
	jQuery.cssHooks[ dimension ] = {
		get: function( elem, computed, extra ) {
			if ( computed ) {

				// Certain elements can have dimension info if we invisibly show them
				// but it must have a current display style that would benefit
				return rdisplayswap.test( jQuery.css( elem, "display" ) ) &&

					// Support: Safari 8+
					// Table columns in Safari have non-zero offsetWidth & zero
					// getBoundingClientRect().width unless display is changed.
					// Support: IE <=11 only
					// Running getBoundingClientRect on a disconnected node
					// in IE throws an error.
					( !elem.getClientRects().length || !elem.getBoundingClientRect().width ) ?
						swap( elem, cssShow, function() {
							return getWidthOrHeight( elem, dimension, extra );
						} ) :
						getWidthOrHeight( elem, dimension, extra );
			}
		},

		set: function( elem, value, extra ) {
			var matches,
				styles = getStyles( elem ),

				// Only read styles.position if the test has a chance to fail
				// to avoid forcing a reflow.
				scrollboxSizeBuggy = !support.scrollboxSize() &&
					styles.position === "absolute",

				// To avoid forcing a reflow, only fetch boxSizing if we need it (gh-3991)
				boxSizingNeeded = scrollboxSizeBuggy || extra,
				isBorderBox = boxSizingNeeded &&
					jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
				subtract = extra ?
					boxModelAdjustment(
						elem,
						dimension,
						extra,
						isBorderBox,
						styles
					) :
					0;

			// Account for unreliable border-box dimensions by comparing offset* to computed and
			// faking a content-box to get border and padding (gh-3699)
			if ( isBorderBox && scrollboxSizeBuggy ) {
				subtract -= Math.ceil(
					elem[ "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 ) ] -
					parseFloat( styles[ dimension ] ) -
					boxModelAdjustment( elem, dimension, "border", false, styles ) -
					0.5
				);
			}

			// Convert to pixels if value adjustment is needed
			if ( subtract && ( matches = rcssNum.exec( value ) ) &&
				( matches[ 3 ] || "px" ) !== "px" ) {

				elem.style[ dimension ] = value;
				value = jQuery.css( elem, dimension );
			}

			return setPositiveNumber( elem, value, subtract );
		}
	};
} );

jQuery.cssHooks.marginLeft = addGetHookIf( support.reliableMarginLeft,
	function( elem, computed ) {
		if ( computed ) {
			return ( parseFloat( curCSS( elem, "marginLeft" ) ) ||
				elem.getBoundingClientRect().left -
					swap( elem, { marginLeft: 0 }, function() {
						return elem.getBoundingClientRect().left;
					} )
				) + "px";
		}
	}
);

// These hooks are used by animate to expand properties
jQuery.each( {
	margin: "",
	padding: "",
	border: "Width"
}, function( prefix, suffix ) {
	jQuery.cssHooks[ prefix + suffix ] = {
		expand: function( value ) {
			var i = 0,
				expanded = {},

				// Assumes a single number if not a string
				parts = typeof value === "string" ? value.split( " " ) : [ value ];

			for ( ; i < 4; i++ ) {
				expanded[ prefix + cssExpand[ i ] + suffix ] =
					parts[ i ] || parts[ i - 2 ] || parts[ 0 ];
			}

			return expanded;
		}
	};

	if ( prefix !== "margin" ) {
		jQuery.cssHooks[ prefix + suffix ].set = setPositiveNumber;
	}
} );

jQuery.fn.extend( {
	css: function( name, value ) {
		return access( this, function( elem, name, value ) {
			var styles, len,
				map = {},
				i = 0;

			if ( Array.isArray( name ) ) {
				styles = getStyles( elem );
				len = name.length;

				for ( ; i < len; i++ ) {
					map[ name[ i ] ] = jQuery.css( elem, name[ i ], false, styles );
				}

				return map;
			}

			return value !== undefined ?
				jQuery.style( elem, name, value ) :
				jQuery.css( elem, name );
		}, name, value, arguments.length > 1 );
	}
} );


function Tween( elem, options, prop, end, easing ) {
	return new Tween.prototype.init( elem, options, prop, end, easing );
}
jQuery.Tween = Tween;

Tween.prototype = {
	constructor: Tween,
	init: function( elem, options, prop, end, easing, unit ) {
		this.elem = elem;
		this.prop = prop;
		this.easing = easing || jQuery.easing._default;
		this.options = options;
		this.start = this.now = this.cur();
		this.end = end;
		this.unit = unit || ( jQuery.cssNumber[ prop ] ? "" : "px" );
	},
	cur: function() {
		var hooks = Tween.propHooks[ this.prop ];

		return hooks && hooks.get ?
			hooks.get( this ) :
			Tween.propHooks._default.get( this );
	},
	run: function( percent ) {
		var eased,
			hooks = Tween.propHooks[ this.prop ];

		if ( this.options.duration ) {
			this.pos = eased = jQuery.easing[ this.easing ](
				percent, this.options.duration * percent, 0, 1, this.options.duration
			);
		} else {
			this.pos = eased = percent;
		}
		this.now = ( this.end - this.start ) * eased + this.start;

		if ( this.options.step ) {
			this.options.step.call( this.elem, this.now, this );
		}

		if ( hooks && hooks.set ) {
			hooks.set( this );
		} else {
			Tween.propHooks._default.set( this );
		}
		return this;
	}
};

Tween.prototype.init.prototype = Tween.prototype;

Tween.propHooks = {
	_default: {
		get: function( tween ) {
			var result;

			// Use a property on the element directly when it is not a DOM element,
			// or when there is no matching style property that exists.
			if ( tween.elem.nodeType !== 1 ||
				tween.elem[ tween.prop ] != null && tween.elem.style[ tween.prop ] == null ) {
				return tween.elem[ tween.prop ];
			}

			// Passing an empty string as a 3rd parameter to .css will automatically
			// attempt a parseFloat and fallback to a string if the parse fails.
			// Simple values such as "10px" are parsed to Float;
			// complex values such as "rotate(1rad)" are returned as-is.
			result = jQuery.css( tween.elem, tween.prop, "" );

			// Empty strings, null, undefined and "auto" are converted to 0.
			return !result || result === "auto" ? 0 : result;
		},
		set: function( tween ) {

			// Use step hook for back compat.
			// Use cssHook if its there.
			// Use .style if available and use plain properties where available.
			if ( jQuery.fx.step[ tween.prop ] ) {
				jQuery.fx.step[ tween.prop ]( tween );
			} else if ( tween.elem.nodeType === 1 && (
					jQuery.cssHooks[ tween.prop ] ||
					tween.elem.style[ finalPropName( tween.prop ) ] != null ) ) {
				jQuery.style( tween.elem, tween.prop, tween.now + tween.unit );
			} else {
				tween.elem[ tween.prop ] = tween.now;
			}
		}
	}
};

// Support: IE <=9 only
// Panic based approach to setting things on disconnected nodes
Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
	set: function( tween ) {
		if ( tween.elem.nodeType && tween.elem.parentNode ) {
			tween.elem[ tween.prop ] = tween.now;
		}
	}
};

jQuery.easing = {
	linear: function( p ) {
		return p;
	},
	swing: function( p ) {
		return 0.5 - Math.cos( p * Math.PI ) / 2;
	},
	_default: "swing"
};

jQuery.fx = Tween.prototype.init;

// Back compat <1.8 extension point
jQuery.fx.step = {};




var
	fxNow, inProgress,
	rfxtypes = /^(?:toggle|show|hide)$/,
	rrun = /queueHooks$/;

function schedule() {
	if ( inProgress ) {
		if ( document.hidden === false && window.requestAnimationFrame ) {
			window.requestAnimationFrame( schedule );
		} else {
			window.setTimeout( schedule, jQuery.fx.interval );
		}

		jQuery.fx.tick();
	}
}

// Animations created synchronously will run synchronously
function createFxNow() {
	window.setTimeout( function() {
		fxNow = undefined;
	} );
	return ( fxNow = Date.now() );
}

// Generate parameters to create a standard animation
function genFx( type, includeWidth ) {
	var which,
		i = 0,
		attrs = { height: type };

	// If we include width, step value is 1 to do all cssExpand values,
	// otherwise step value is 2 to skip over Left and Right
	includeWidth = includeWidth ? 1 : 0;
	for ( ; i < 4; i += 2 - includeWidth ) {
		which = cssExpand[ i ];
		attrs[ "margin" + which ] = attrs[ "padding" + which ] = type;
	}

	if ( includeWidth ) {
		attrs.opacity = attrs.width = type;
	}

	return attrs;
}

function createTween( value, prop, animation ) {
	var tween,
		collection = ( Animation.tweeners[ prop ] || [] ).concat( Animation.tweeners[ "*" ] ),
		index = 0,
		length = collection.length;
	for ( ; index < length; index++ ) {
		if ( ( tween = collection[ index ].call( animation, prop, value ) ) ) {

			// We're done with this property
			return tween;
		}
	}
}

function defaultPrefilter( elem, props, opts ) {
	var prop, value, toggle, hooks, oldfire, propTween, restoreDisplay, display,
		isBox = "width" in props || "height" in props,
		anim = this,
		orig = {},
		style = elem.style,
		hidden = elem.nodeType && isHiddenWithinTree( elem ),
		dataShow = dataPriv.get( elem, "fxshow" );

	// Queue-skipping animations hijack the fx hooks
	if ( !opts.queue ) {
		hooks = jQuery._queueHooks( elem, "fx" );
		if ( hooks.unqueued == null ) {
			hooks.unqueued = 0;
			oldfire = hooks.empty.fire;
			hooks.empty.fire = function() {
				if ( !hooks.unqueued ) {
					oldfire();
				}
			};
		}
		hooks.unqueued++;

		anim.always( function() {

			// Ensure the complete handler is called before this completes
			anim.always( function() {
				hooks.unqueued--;
				if ( !jQuery.queue( elem, "fx" ).length ) {
					hooks.empty.fire();
				}
			} );
		} );
	}

	// Detect show/hide animations
	for ( prop in props ) {
		value = props[ prop ];
		if ( rfxtypes.test( value ) ) {
			delete props[ prop ];
			toggle = toggle || value === "toggle";
			if ( value === ( hidden ? "hide" : "show" ) ) {

				// Pretend to be hidden if this is a "show" and
				// there is still data from a stopped show/hide
				if ( value === "show" && dataShow && dataShow[ prop ] !== undefined ) {
					hidden = true;

				// Ignore all other no-op show/hide data
				} else {
					continue;
				}
			}
			orig[ prop ] = dataShow && dataShow[ prop ] || jQuery.style( elem, prop );
		}
	}

	// Bail out if this is a no-op like .hide().hide()
	propTween = !jQuery.isEmptyObject( props );
	if ( !propTween && jQuery.isEmptyObject( orig ) ) {
		return;
	}

	// Restrict "overflow" and "display" styles during box animations
	if ( isBox && elem.nodeType === 1 ) {

		// Support: IE <=9 - 11, Edge 12 - 15
		// Record all 3 overflow attributes because IE does not infer the shorthand
		// from identically-valued overflowX and overflowY and Edge just mirrors
		// the overflowX value there.
		opts.overflow = [ style.overflow, style.overflowX, style.overflowY ];

		// Identify a display type, preferring old show/hide data over the CSS cascade
		restoreDisplay = dataShow && dataShow.display;
		if ( restoreDisplay == null ) {
			restoreDisplay = dataPriv.get( elem, "display" );
		}
		display = jQuery.css( elem, "display" );
		if ( display === "none" ) {
			if ( restoreDisplay ) {
				display = restoreDisplay;
			} else {

				// Get nonempty value(s) by temporarily forcing visibility
				showHide( [ elem ], true );
				restoreDisplay = elem.style.display || restoreDisplay;
				display = jQuery.css( elem, "display" );
				showHide( [ elem ] );
			}
		}

		// Animate inline elements as inline-block
		if ( display === "inline" || display === "inline-block" && restoreDisplay != null ) {
			if ( jQuery.css( elem, "float" ) === "none" ) {

				// Restore the original display value at the end of pure show/hide animations
				if ( !propTween ) {
					anim.done( function() {
						style.display = restoreDisplay;
					} );
					if ( restoreDisplay == null ) {
						display = style.display;
						restoreDisplay = display === "none" ? "" : display;
					}
				}
				style.display = "inline-block";
			}
		}
	}

	if ( opts.overflow ) {
		style.overflow = "hidden";
		anim.always( function() {
			style.overflow = opts.overflow[ 0 ];
			style.overflowX = opts.overflow[ 1 ];
			style.overflowY = opts.overflow[ 2 ];
		} );
	}

	// Implement show/hide animations
	propTween = false;
	for ( prop in orig ) {

		// General show/hide setup for this element animation
		if ( !propTween ) {
			if ( dataShow ) {
				if ( "hidden" in dataShow ) {
					hidden = dataShow.hidden;
				}
			} else {
				dataShow = dataPriv.access( elem, "fxshow", { display: restoreDisplay } );
			}

			// Store hidden/visible for toggle so `.stop().toggle()` "reverses"
			if ( toggle ) {
				dataShow.hidden = !hidden;
			}

			// Show elements before animating them
			if ( hidden ) {
				showHide( [ elem ], true );
			}

			/* eslint-disable no-loop-func */

			anim.done( function() {

			/* eslint-enable no-loop-func */

				// The final step of a "hide" animation is actually hiding the element
				if ( !hidden ) {
					showHide( [ elem ] );
				}
				dataPriv.remove( elem, "fxshow" );
				for ( prop in orig ) {
					jQuery.style( elem, prop, orig[ prop ] );
				}
			} );
		}

		// Per-property setup
		propTween = createTween( hidden ? dataShow[ prop ] : 0, prop, anim );
		if ( !( prop in dataShow ) ) {
			dataShow[ prop ] = propTween.start;
			if ( hidden ) {
				propTween.end = propTween.start;
				propTween.start = 0;
			}
		}
	}
}

function propFilter( props, specialEasing ) {
	var index, name, easing, value, hooks;

	// camelCase, specialEasing and expand cssHook pass
	for ( index in props ) {
		name = camelCase( index );
		easing = specialEasing[ name ];
		value = props[ index ];
		if ( Array.isArray( value ) ) {
			easing = value[ 1 ];
			value = props[ index ] = value[ 0 ];
		}

		if ( index !== name ) {
			props[ name ] = value;
			delete props[ index ];
		}

		hooks = jQuery.cssHooks[ name ];
		if ( hooks && "expand" in hooks ) {
			value = hooks.expand( value );
			delete props[ name ];

			// Not quite $.extend, this won't overwrite existing keys.
			// Reusing 'index' because we have the correct "name"
			for ( index in value ) {
				if ( !( index in props ) ) {
					props[ index ] = value[ index ];
					specialEasing[ index ] = easing;
				}
			}
		} else {
			specialEasing[ name ] = easing;
		}
	}
}

function Animation( elem, properties, options ) {
	var result,
		stopped,
		index = 0,
		length = Animation.prefilters.length,
		deferred = jQuery.Deferred().always( function() {

			// Don't match elem in the :animated selector
			delete tick.elem;
		} ),
		tick = function() {
			if ( stopped ) {
				return false;
			}
			var currentTime = fxNow || createFxNow(),
				remaining = Math.max( 0, animation.startTime + animation.duration - currentTime ),

				// Support: Android 2.3 only
				// Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (#12497)
				temp = remaining / animation.duration || 0,
				percent = 1 - temp,
				index = 0,
				length = animation.tweens.length;

			for ( ; index < length; index++ ) {
				animation.tweens[ index ].run( percent );
			}

			deferred.notifyWith( elem, [ animation, percent, remaining ] );

			// If there's more to do, yield
			if ( percent < 1 && length ) {
				return remaining;
			}

			// If this was an empty animation, synthesize a final progress notification
			if ( !length ) {
				deferred.notifyWith( elem, [ animation, 1, 0 ] );
			}

			// Resolve the animation and report its conclusion
			deferred.resolveWith( elem, [ animation ] );
			return false;
		},
		animation = deferred.promise( {
			elem: elem,
			props: jQuery.extend( {}, properties ),
			opts: jQuery.extend( true, {
				specialEasing: {},
				easing: jQuery.easing._default
			}, options ),
			originalProperties: properties,
			originalOptions: options,
			startTime: fxNow || createFxNow(),
			duration: options.duration,
			tweens: [],
			createTween: function( prop, end ) {
				var tween = jQuery.Tween( elem, animation.opts, prop, end,
						animation.opts.specialEasing[ prop ] || animation.opts.easing );
				animation.tweens.push( tween );
				return tween;
			},
			stop: function( gotoEnd ) {
				var index = 0,

					// If we are going to the end, we want to run all the tweens
					// otherwise we skip this part
					length = gotoEnd ? animation.tweens.length : 0;
				if ( stopped ) {
					return this;
				}
				stopped = true;
				for ( ; index < length; index++ ) {
					animation.tweens[ index ].run( 1 );
				}

				// Resolve when we played the last frame; otherwise, reject
				if ( gotoEnd ) {
					deferred.notifyWith( elem, [ animation, 1, 0 ] );
					deferred.resolveWith( elem, [ animation, gotoEnd ] );
				} else {
					deferred.rejectWith( elem, [ animation, gotoEnd ] );
				}
				return this;
			}
		} ),
		props = animation.props;

	propFilter( props, animation.opts.specialEasing );

	for ( ; index < length; index++ ) {
		result = Animation.prefilters[ index ].call( animation, elem, props, animation.opts );
		if ( result ) {
			if ( isFunction( result.stop ) ) {
				jQuery._queueHooks( animation.elem, animation.opts.queue ).stop =
					result.stop.bind( result );
			}
			return result;
		}
	}

	jQuery.map( props, createTween, animation );

	if ( isFunction( animation.opts.start ) ) {
		animation.opts.start.call( elem, animation );
	}

	// Attach callbacks from options
	animation
		.progress( animation.opts.progress )
		.done( animation.opts.done, animation.opts.complete )
		.fail( animation.opts.fail )
		.always( animation.opts.always );

	jQuery.fx.timer(
		jQuery.extend( tick, {
			elem: elem,
			anim: animation,
			queue: animation.opts.queue
		} )
	);

	return animation;
}

jQuery.Animation = jQuery.extend( Animation, {

	tweeners: {
		"*": [ function( prop, value ) {
			var tween = this.createTween( prop, value );
			adjustCSS( tween.elem, prop, rcssNum.exec( value ), tween );
			return tween;
		} ]
	},

	tweener: function( props, callback ) {
		if ( isFunction( props ) ) {
			callback = props;
			props = [ "*" ];
		} else {
			props = props.match( rnothtmlwhite );
		}

		var prop,
			index = 0,
			length = props.length;

		for ( ; index < length; index++ ) {
			prop = props[ index ];
			Animation.tweeners[ prop ] = Animation.tweeners[ prop ] || [];
			Animation.tweeners[ prop ].unshift( callback );
		}
	},

	prefilters: [ defaultPrefilter ],

	prefilter: function( callback, prepend ) {
		if ( prepend ) {
			Animation.prefilters.unshift( callback );
		} else {
			Animation.prefilters.push( callback );
		}
	}
} );

jQuery.speed = function( speed, easing, fn ) {
	var opt = speed && typeof speed === "object" ? jQuery.extend( {}, speed ) : {
		complete: fn || !fn && easing ||
			isFunction( speed ) && speed,
		duration: speed,
		easing: fn && easing || easing && !isFunction( easing ) && easing
	};

	// Go to the end state if fx are off
	if ( jQuery.fx.off ) {
		opt.duration = 0;

	} else {
		if ( typeof opt.duration !== "number" ) {
			if ( opt.duration in jQuery.fx.speeds ) {
				opt.duration = jQuery.fx.speeds[ opt.duration ];

			} else {
				opt.duration = jQuery.fx.speeds._default;
			}
		}
	}

	// Normalize opt.queue - true/undefined/null -> "fx"
	if ( opt.queue == null || opt.queue === true ) {
		opt.queue = "fx";
	}

	// Queueing
	opt.old = opt.complete;

	opt.complete = function() {
		if ( isFunction( opt.old ) ) {
			opt.old.call( this );
		}

		if ( opt.queue ) {
			jQuery.dequeue( this, opt.queue );
		}
	};

	return opt;
};

jQuery.fn.extend( {
	fadeTo: function( speed, to, easing, callback ) {

		// Show any hidden elements after setting opacity to 0
		return this.filter( isHiddenWithinTree ).css( "opacity", 0 ).show()

			// Animate to the value specified
			.end().animate( { opacity: to }, speed, easing, callback );
	},
	animate: function( prop, speed, easing, callback ) {
		var empty = jQuery.isEmptyObject( prop ),
			optall = jQuery.speed( speed, easing, callback ),
			doAnimation = function() {

				// Operate on a copy of prop so per-property easing won't be lost
				var anim = Animation( this, jQuery.extend( {}, prop ), optall );

				// Empty animations, or finishing resolves immediately
				if ( empty || dataPriv.get( this, "finish" ) ) {
					anim.stop( true );
				}
			};
			doAnimation.finish = doAnimation;

		return empty || optall.queue === false ?
			this.each( doAnimation ) :
			this.queue( optall.queue, doAnimation );
	},
	stop: function( type, clearQueue, gotoEnd ) {
		var stopQueue = function( hooks ) {
			var stop = hooks.stop;
			delete hooks.stop;
			stop( gotoEnd );
		};

		if ( typeof type !== "string" ) {
			gotoEnd = clearQueue;
			clearQueue = type;
			type = undefined;
		}
		if ( clearQueue ) {
			this.queue( type || "fx", [] );
		}

		return this.each( function() {
			var dequeue = true,
				index = type != null && type + "queueHooks",
				timers = jQuery.timers,
				data = dataPriv.get( this );

			if ( index ) {
				if ( data[ index ] && data[ index ].stop ) {
					stopQueue( data[ index ] );
				}
			} else {
				for ( index in data ) {
					if ( data[ index ] && data[ index ].stop && rrun.test( index ) ) {
						stopQueue( data[ index ] );
					}
				}
			}

			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this &&
					( type == null || timers[ index ].queue === type ) ) {

					timers[ index ].anim.stop( gotoEnd );
					dequeue = false;
					timers.splice( index, 1 );
				}
			}

			// Start the next in the queue if the last step wasn't forced.
			// Timers currently will call their complete callbacks, which
			// will dequeue but only if they were gotoEnd.
			if ( dequeue || !gotoEnd ) {
				jQuery.dequeue( this, type );
			}
		} );
	},
	finish: function( type ) {
		if ( type !== false ) {
			type = type || "fx";
		}
		return this.each( function() {
			var index,
				data = dataPriv.get( this ),
				queue = data[ type + "queue" ],
				hooks = data[ type + "queueHooks" ],
				timers = jQuery.timers,
				length = queue ? queue.length : 0;

			// Enable finishing flag on private data
			data.finish = true;

			// Empty the queue first
			jQuery.queue( this, type, [] );

			if ( hooks && hooks.stop ) {
				hooks.stop.call( this, true );
			}

			// Look for any active animations, and finish them
			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this && timers[ index ].queue === type ) {
					timers[ index ].anim.stop( true );
					timers.splice( index, 1 );
				}
			}

			// Look for any animations in the old queue and finish them
			for ( index = 0; index < length; index++ ) {
				if ( queue[ index ] && queue[ index ].finish ) {
					queue[ index ].finish.call( this );
				}
			}

			// Turn off finishing flag
			delete data.finish;
		} );
	}
} );

jQuery.each( [ "toggle", "show", "hide" ], function( _i, name ) {
	var cssFn = jQuery.fn[ name ];
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return speed == null || typeof speed === "boolean" ?
			cssFn.apply( this, arguments ) :
			this.animate( genFx( name, true ), speed, easing, callback );
	};
} );

// Generate shortcuts for custom animations
jQuery.each( {
	slideDown: genFx( "show" ),
	slideUp: genFx( "hide" ),
	slideToggle: genFx( "toggle" ),
	fadeIn: { opacity: "show" },
	fadeOut: { opacity: "hide" },
	fadeToggle: { opacity: "toggle" }
}, function( name, props ) {
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return this.animate( props, speed, easing, callback );
	};
} );

jQuery.timers = [];
jQuery.fx.tick = function() {
	var timer,
		i = 0,
		timers = jQuery.timers;

	fxNow = Date.now();

	for ( ; i < timers.length; i++ ) {
		timer = timers[ i ];

		// Run the timer and safely remove it when done (allowing for external removal)
		if ( !timer() && timers[ i ] === timer ) {
			timers.splice( i--, 1 );
		}
	}

	if ( !timers.length ) {
		jQuery.fx.stop();
	}
	fxNow = undefined;
};

jQuery.fx.timer = function( timer ) {
	jQuery.timers.push( timer );
	jQuery.fx.start();
};

jQuery.fx.interval = 13;
jQuery.fx.start = function() {
	if ( inProgress ) {
		return;
	}

	inProgress = true;
	schedule();
};

jQuery.fx.stop = function() {
	inProgress = null;
};

jQuery.fx.speeds = {
	slow: 600,
	fast: 200,

	// Default speed
	_default: 400
};


// Based off of the plugin by Clint Helfers, with permission.
// https://web.archive.org/web/20100324014747/http://blindsignals.com/index.php/2009/07/jquery-delay/
jQuery.fn.delay = function( time, type ) {
	time = jQuery.fx ? jQuery.fx.speeds[ time ] || time : time;
	type = type || "fx";

	return this.queue( type, function( next, hooks ) {
		var timeout = window.setTimeout( next, time );
		hooks.stop = function() {
			window.clearTimeout( timeout );
		};
	} );
};


( function() {
	var input = document.createElement( "input" ),
		select = document.createElement( "select" ),
		opt = select.appendChild( document.createElement( "option" ) );

	input.type = "checkbox";

	// Support: Android <=4.3 only
	// Default value for a checkbox should be "on"
	support.checkOn = input.value !== "";

	// Support: IE <=11 only
	// Must access selectedIndex to make default options select
	support.optSelected = opt.selected;

	// Support: IE <=11 only
	// An input loses its value after becoming a radio
	input = document.createElement( "input" );
	input.value = "t";
	input.type = "radio";
	support.radioValue = input.value === "t";
} )();


var boolHook,
	attrHandle = jQuery.expr.attrHandle;

jQuery.fn.extend( {
	attr: function( name, value ) {
		return access( this, jQuery.attr, name, value, arguments.length > 1 );
	},

	removeAttr: function( name ) {
		return this.each( function() {
			jQuery.removeAttr( this, name );
		} );
	}
} );

jQuery.extend( {
	attr: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set attributes on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		// Fallback to prop when attributes are not supported
		if ( typeof elem.getAttribute === "undefined" ) {
			return jQuery.prop( elem, name, value );
		}

		// Attribute hooks are determined by the lowercase version
		// Grab necessary hook if one is defined
		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {
			hooks = jQuery.attrHooks[ name.toLowerCase() ] ||
				( jQuery.expr.match.bool.test( name ) ? boolHook : undefined );
		}

		if ( value !== undefined ) {
			if ( value === null ) {
				jQuery.removeAttr( elem, name );
				return;
			}

			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			elem.setAttribute( name, value + "" );
			return value;
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		ret = jQuery.find.attr( elem, name );

		// Non-existent attributes return null, we normalize to undefined
		return ret == null ? undefined : ret;
	},

	attrHooks: {
		type: {
			set: function( elem, value ) {
				if ( !support.radioValue && value === "radio" &&
					nodeName( elem, "input" ) ) {
					var val = elem.value;
					elem.setAttribute( "type", value );
					if ( val ) {
						elem.value = val;
					}
					return value;
				}
			}
		}
	},

	removeAttr: function( elem, value ) {
		var name,
			i = 0,

			// Attribute names can contain non-HTML whitespace characters
			// https://html.spec.whatwg.org/multipage/syntax.html#attributes-2
			attrNames = value && value.match( rnothtmlwhite );

		if ( attrNames && elem.nodeType === 1 ) {
			while ( ( name = attrNames[ i++ ] ) ) {
				elem.removeAttribute( name );
			}
		}
	}
} );

// Hooks for boolean attributes
boolHook = {
	set: function( elem, value, name ) {
		if ( value === false ) {

			// Remove boolean attributes when set to false
			jQuery.removeAttr( elem, name );
		} else {
			elem.setAttribute( name, name );
		}
		return name;
	}
};

jQuery.each( jQuery.expr.match.bool.source.match( /\w+/g ), function( _i, name ) {
	var getter = attrHandle[ name ] || jQuery.find.attr;

	attrHandle[ name ] = function( elem, name, isXML ) {
		var ret, handle,
			lowercaseName = name.toLowerCase();

		if ( !isXML ) {

			// Avoid an infinite loop by temporarily removing this function from the getter
			handle = attrHandle[ lowercaseName ];
			attrHandle[ lowercaseName ] = ret;
			ret = getter( elem, name, isXML ) != null ?
				lowercaseName :
				null;
			attrHandle[ lowercaseName ] = handle;
		}
		return ret;
	};
} );




var rfocusable = /^(?:input|select|textarea|button)$/i,
	rclickable = /^(?:a|area)$/i;

jQuery.fn.extend( {
	prop: function( name, value ) {
		return access( this, jQuery.prop, name, value, arguments.length > 1 );
	},

	removeProp: function( name ) {
		return this.each( function() {
			delete this[ jQuery.propFix[ name ] || name ];
		} );
	}
} );

jQuery.extend( {
	prop: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set properties on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {

			// Fix name and attach hooks
			name = jQuery.propFix[ name ] || name;
			hooks = jQuery.propHooks[ name ];
		}

		if ( value !== undefined ) {
			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			return ( elem[ name ] = value );
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		return elem[ name ];
	},

	propHooks: {
		tabIndex: {
			get: function( elem ) {

				// Support: IE <=9 - 11 only
				// elem.tabIndex doesn't always return the
				// correct value when it hasn't been explicitly set
				// https://web.archive.org/web/20141116233347/http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
				// Use proper attribute retrieval(#12072)
				var tabindex = jQuery.find.attr( elem, "tabindex" );

				if ( tabindex ) {
					return parseInt( tabindex, 10 );
				}

				if (
					rfocusable.test( elem.nodeName ) ||
					rclickable.test( elem.nodeName ) &&
					elem.href
				) {
					return 0;
				}

				return -1;
			}
		}
	},

	propFix: {
		"for": "htmlFor",
		"class": "className"
	}
} );

// Support: IE <=11 only
// Accessing the selectedIndex property
// forces the browser to respect setting selected
// on the option
// The getter ensures a default option is selected
// when in an optgroup
// eslint rule "no-unused-expressions" is disabled for this code
// since it considers such accessions noop
if ( !support.optSelected ) {
	jQuery.propHooks.selected = {
		get: function( elem ) {

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent && parent.parentNode ) {
				parent.parentNode.selectedIndex;
			}
			return null;
		},
		set: function( elem ) {

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent ) {
				parent.selectedIndex;

				if ( parent.parentNode ) {
					parent.parentNode.selectedIndex;
				}
			}
		}
	};
}

jQuery.each( [
	"tabIndex",
	"readOnly",
	"maxLength",
	"cellSpacing",
	"cellPadding",
	"rowSpan",
	"colSpan",
	"useMap",
	"frameBorder",
	"contentEditable"
], function() {
	jQuery.propFix[ this.toLowerCase() ] = this;
} );




	// Strip and collapse whitespace according to HTML spec
	// https://infra.spec.whatwg.org/#strip-and-collapse-ascii-whitespace
	function stripAndCollapse( value ) {
		var tokens = value.match( rnothtmlwhite ) || [];
		return tokens.join( " " );
	}


function getClass( elem ) {
	return elem.getAttribute && elem.getAttribute( "class" ) || "";
}

function classesToArray( value ) {
	if ( Array.isArray( value ) ) {
		return value;
	}
	if ( typeof value === "string" ) {
		return value.match( rnothtmlwhite ) || [];
	}
	return [];
}

jQuery.fn.extend( {
	addClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).addClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		classes = classesToArray( value );

		if ( classes.length ) {
			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );
				cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {
						if ( cur.indexOf( " " + clazz + " " ) < 0 ) {
							cur += clazz + " ";
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						elem.setAttribute( "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	removeClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).removeClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		if ( !arguments.length ) {
			return this.attr( "class", "" );
		}

		classes = classesToArray( value );

		if ( classes.length ) {
			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );

				// This expression is here for better compressibility (see addClass)
				cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {

						// Remove *all* instances
						while ( cur.indexOf( " " + clazz + " " ) > -1 ) {
							cur = cur.replace( " " + clazz + " ", " " );
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						elem.setAttribute( "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	toggleClass: function( value, stateVal ) {
		var type = typeof value,
			isValidValue = type === "string" || Array.isArray( value );

		if ( typeof stateVal === "boolean" && isValidValue ) {
			return stateVal ? this.addClass( value ) : this.removeClass( value );
		}

		if ( isFunction( value ) ) {
			return this.each( function( i ) {
				jQuery( this ).toggleClass(
					value.call( this, i, getClass( this ), stateVal ),
					stateVal
				);
			} );
		}

		return this.each( function() {
			var className, i, self, classNames;

			if ( isValidValue ) {

				// Toggle individual class names
				i = 0;
				self = jQuery( this );
				classNames = classesToArray( value );

				while ( ( className = classNames[ i++ ] ) ) {

					// Check each className given, space separated list
					if ( self.hasClass( className ) ) {
						self.removeClass( className );
					} else {
						self.addClass( className );
					}
				}

			// Toggle whole class name
			} else if ( value === undefined || type === "boolean" ) {
				className = getClass( this );
				if ( className ) {

					// Store className if set
					dataPriv.set( this, "__className__", className );
				}

				// If the element has a class name or if we're passed `false`,
				// then remove the whole classname (if there was one, the above saved it).
				// Otherwise bring back whatever was previously saved (if anything),
				// falling back to the empty string if nothing was stored.
				if ( this.setAttribute ) {
					this.setAttribute( "class",
						className || value === false ?
						"" :
						dataPriv.get( this, "__className__" ) || ""
					);
				}
			}
		} );
	},

	hasClass: function( selector ) {
		var className, elem,
			i = 0;

		className = " " + selector + " ";
		while ( ( elem = this[ i++ ] ) ) {
			if ( elem.nodeType === 1 &&
				( " " + stripAndCollapse( getClass( elem ) ) + " " ).indexOf( className ) > -1 ) {
					return true;
			}
		}

		return false;
	}
} );




var rreturn = /\r/g;

jQuery.fn.extend( {
	val: function( value ) {
		var hooks, ret, valueIsFunction,
			elem = this[ 0 ];

		if ( !arguments.length ) {
			if ( elem ) {
				hooks = jQuery.valHooks[ elem.type ] ||
					jQuery.valHooks[ elem.nodeName.toLowerCase() ];

				if ( hooks &&
					"get" in hooks &&
					( ret = hooks.get( elem, "value" ) ) !== undefined
				) {
					return ret;
				}

				ret = elem.value;

				// Handle most common string cases
				if ( typeof ret === "string" ) {
					return ret.replace( rreturn, "" );
				}

				// Handle cases where value is null/undef or number
				return ret == null ? "" : ret;
			}

			return;
		}

		valueIsFunction = isFunction( value );

		return this.each( function( i ) {
			var val;

			if ( this.nodeType !== 1 ) {
				return;
			}

			if ( valueIsFunction ) {
				val = value.call( this, i, jQuery( this ).val() );
			} else {
				val = value;
			}

			// Treat null/undefined as ""; convert numbers to string
			if ( val == null ) {
				val = "";

			} else if ( typeof val === "number" ) {
				val += "";

			} else if ( Array.isArray( val ) ) {
				val = jQuery.map( val, function( value ) {
					return value == null ? "" : value + "";
				} );
			}

			hooks = jQuery.valHooks[ this.type ] || jQuery.valHooks[ this.nodeName.toLowerCase() ];

			// If set returns undefined, fall back to normal setting
			if ( !hooks || !( "set" in hooks ) || hooks.set( this, val, "value" ) === undefined ) {
				this.value = val;
			}
		} );
	}
} );

jQuery.extend( {
	valHooks: {
		option: {
			get: function( elem ) {

				var val = jQuery.find.attr( elem, "value" );
				return val != null ?
					val :

					// Support: IE <=10 - 11 only
					// option.text throws exceptions (#14686, #14858)
					// Strip and collapse whitespace
					// https://html.spec.whatwg.org/#strip-and-collapse-whitespace
					stripAndCollapse( jQuery.text( elem ) );
			}
		},
		select: {
			get: function( elem ) {
				var value, option, i,
					options = elem.options,
					index = elem.selectedIndex,
					one = elem.type === "select-one",
					values = one ? null : [],
					max = one ? index + 1 : options.length;

				if ( index < 0 ) {
					i = max;

				} else {
					i = one ? index : 0;
				}

				// Loop through all the selected options
				for ( ; i < max; i++ ) {
					option = options[ i ];

					// Support: IE <=9 only
					// IE8-9 doesn't update selected after form reset (#2551)
					if ( ( option.selected || i === index ) &&

							// Don't return options that are disabled or in a disabled optgroup
							!option.disabled &&
							( !option.parentNode.disabled ||
								!nodeName( option.parentNode, "optgroup" ) ) ) {

						// Get the specific value for the option
						value = jQuery( option ).val();

						// We don't need an array for one selects
						if ( one ) {
							return value;
						}

						// Multi-Selects return an array
						values.push( value );
					}
				}

				return values;
			},

			set: function( elem, value ) {
				var optionSet, option,
					options = elem.options,
					values = jQuery.makeArray( value ),
					i = options.length;

				while ( i-- ) {
					option = options[ i ];

					/* eslint-disable no-cond-assign */

					if ( option.selected =
						jQuery.inArray( jQuery.valHooks.option.get( option ), values ) > -1
					) {
						optionSet = true;
					}

					/* eslint-enable no-cond-assign */
				}

				// Force browsers to behave consistently when non-matching value is set
				if ( !optionSet ) {
					elem.selectedIndex = -1;
				}
				return values;
			}
		}
	}
} );

// Radios and checkboxes getter/setter
jQuery.each( [ "radio", "checkbox" ], function() {
	jQuery.valHooks[ this ] = {
		set: function( elem, value ) {
			if ( Array.isArray( value ) ) {
				return ( elem.checked = jQuery.inArray( jQuery( elem ).val(), value ) > -1 );
			}
		}
	};
	if ( !support.checkOn ) {
		jQuery.valHooks[ this ].get = function( elem ) {
			return elem.getAttribute( "value" ) === null ? "on" : elem.value;
		};
	}
} );




// Return jQuery for attributes-only inclusion


support.focusin = "onfocusin" in window;


var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/,
	stopPropagationCallback = function( e ) {
		e.stopPropagation();
	};

jQuery.extend( jQuery.event, {

	trigger: function( event, data, elem, onlyHandlers ) {

		var i, cur, tmp, bubbleType, ontype, handle, special, lastElement,
			eventPath = [ elem || document ],
			type = hasOwn.call( event, "type" ) ? event.type : event,
			namespaces = hasOwn.call( event, "namespace" ) ? event.namespace.split( "." ) : [];

		cur = lastElement = tmp = elem = elem || document;

		// Don't do events on text and comment nodes
		if ( elem.nodeType === 3 || elem.nodeType === 8 ) {
			return;
		}

		// focus/blur morphs to focusin/out; ensure we're not firing them right now
		if ( rfocusMorph.test( type + jQuery.event.triggered ) ) {
			return;
		}

		if ( type.indexOf( "." ) > -1 ) {

			// Namespaced trigger; create a regexp to match event type in handle()
			namespaces = type.split( "." );
			type = namespaces.shift();
			namespaces.sort();
		}
		ontype = type.indexOf( ":" ) < 0 && "on" + type;

		// Caller can pass in a jQuery.Event object, Object, or just an event type string
		event = event[ jQuery.expando ] ?
			event :
			new jQuery.Event( type, typeof event === "object" && event );

		// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
		event.isTrigger = onlyHandlers ? 2 : 3;
		event.namespace = namespaces.join( "." );
		event.rnamespace = event.namespace ?
			new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" ) :
			null;

		// Clean up the event in case it is being reused
		event.result = undefined;
		if ( !event.target ) {
			event.target = elem;
		}

		// Clone any incoming data and prepend the event, creating the handler arg list
		data = data == null ?
			[ event ] :
			jQuery.makeArray( data, [ event ] );

		// Allow special events to draw outside the lines
		special = jQuery.event.special[ type ] || {};
		if ( !onlyHandlers && special.trigger && special.trigger.apply( elem, data ) === false ) {
			return;
		}

		// Determine event propagation path in advance, per W3C events spec (#9951)
		// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
		if ( !onlyHandlers && !special.noBubble && !isWindow( elem ) ) {

			bubbleType = special.delegateType || type;
			if ( !rfocusMorph.test( bubbleType + type ) ) {
				cur = cur.parentNode;
			}
			for ( ; cur; cur = cur.parentNode ) {
				eventPath.push( cur );
				tmp = cur;
			}

			// Only add window if we got to document (e.g., not plain obj or detached DOM)
			if ( tmp === ( elem.ownerDocument || document ) ) {
				eventPath.push( tmp.defaultView || tmp.parentWindow || window );
			}
		}

		// Fire handlers on the event path
		i = 0;
		while ( ( cur = eventPath[ i++ ] ) && !event.isPropagationStopped() ) {
			lastElement = cur;
			event.type = i > 1 ?
				bubbleType :
				special.bindType || type;

			// jQuery handler
			handle = (
					dataPriv.get( cur, "events" ) || Object.create( null )
				)[ event.type ] &&
				dataPriv.get( cur, "handle" );
			if ( handle ) {
				handle.apply( cur, data );
			}

			// Native handler
			handle = ontype && cur[ ontype ];
			if ( handle && handle.apply && acceptData( cur ) ) {
				event.result = handle.apply( cur, data );
				if ( event.result === false ) {
					event.preventDefault();
				}
			}
		}
		event.type = type;

		// If nobody prevented the default action, do it now
		if ( !onlyHandlers && !event.isDefaultPrevented() ) {

			if ( ( !special._default ||
				special._default.apply( eventPath.pop(), data ) === false ) &&
				acceptData( elem ) ) {

				// Call a native DOM method on the target with the same name as the event.
				// Don't do default actions on window, that's where global variables be (#6170)
				if ( ontype && isFunction( elem[ type ] ) && !isWindow( elem ) ) {

					// Don't re-trigger an onFOO event when we call its FOO() method
					tmp = elem[ ontype ];

					if ( tmp ) {
						elem[ ontype ] = null;
					}

					// Prevent re-triggering of the same event, since we already bubbled it above
					jQuery.event.triggered = type;

					if ( event.isPropagationStopped() ) {
						lastElement.addEventListener( type, stopPropagationCallback );
					}

					elem[ type ]();

					if ( event.isPropagationStopped() ) {
						lastElement.removeEventListener( type, stopPropagationCallback );
					}

					jQuery.event.triggered = undefined;

					if ( tmp ) {
						elem[ ontype ] = tmp;
					}
				}
			}
		}

		return event.result;
	},

	// Piggyback on a donor event to simulate a different one
	// Used only for `focus(in | out)` events
	simulate: function( type, elem, event ) {
		var e = jQuery.extend(
			new jQuery.Event(),
			event,
			{
				type: type,
				isSimulated: true
			}
		);

		jQuery.event.trigger( e, null, elem );
	}

} );

jQuery.fn.extend( {

	trigger: function( type, data ) {
		return this.each( function() {
			jQuery.event.trigger( type, data, this );
		} );
	},
	triggerHandler: function( type, data ) {
		var elem = this[ 0 ];
		if ( elem ) {
			return jQuery.event.trigger( type, data, elem, true );
		}
	}
} );


// Support: Firefox <=44
// Firefox doesn't have focus(in | out) events
// Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
//
// Support: Chrome <=48 - 49, Safari <=9.0 - 9.1
// focus(in | out) events fire after focus & blur events,
// which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
// Related ticket - https://bugs.chromium.org/p/chromium/issues/detail?id=449857
if ( !support.focusin ) {
	jQuery.each( { focus: "focusin", blur: "focusout" }, function( orig, fix ) {

		// Attach a single capturing handler on the document while someone wants focusin/focusout
		var handler = function( event ) {
			jQuery.event.simulate( fix, event.target, jQuery.event.fix( event ) );
		};

		jQuery.event.special[ fix ] = {
			setup: function() {

				// Handle: regular nodes (via `this.ownerDocument`), window
				// (via `this.document`) & document (via `this`).
				var doc = this.ownerDocument || this.document || this,
					attaches = dataPriv.access( doc, fix );

				if ( !attaches ) {
					doc.addEventListener( orig, handler, true );
				}
				dataPriv.access( doc, fix, ( attaches || 0 ) + 1 );
			},
			teardown: function() {
				var doc = this.ownerDocument || this.document || this,
					attaches = dataPriv.access( doc, fix ) - 1;

				if ( !attaches ) {
					doc.removeEventListener( orig, handler, true );
					dataPriv.remove( doc, fix );

				} else {
					dataPriv.access( doc, fix, attaches );
				}
			}
		};
	} );
}
var location = window.location;

var nonce = { guid: Date.now() };

var rquery = ( /\?/ );



// Cross-browser xml parsing
jQuery.parseXML = function( data ) {
	var xml;
	if ( !data || typeof data !== "string" ) {
		return null;
	}

	// Support: IE 9 - 11 only
	// IE throws on parseFromString with invalid input.
	try {
		xml = ( new window.DOMParser() ).parseFromString( data, "text/xml" );
	} catch ( e ) {
		xml = undefined;
	}

	if ( !xml || xml.getElementsByTagName( "parsererror" ).length ) {
		jQuery.error( "Invalid XML: " + data );
	}
	return xml;
};


var
	rbracket = /\[\]$/,
	rCRLF = /\r?\n/g,
	rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
	rsubmittable = /^(?:input|select|textarea|keygen)/i;

function buildParams( prefix, obj, traditional, add ) {
	var name;

	if ( Array.isArray( obj ) ) {

		// Serialize array item.
		jQuery.each( obj, function( i, v ) {
			if ( traditional || rbracket.test( prefix ) ) {

				// Treat each array item as a scalar.
				add( prefix, v );

			} else {

				// Item is non-scalar (array or object), encode its numeric index.
				buildParams(
					prefix + "[" + ( typeof v === "object" && v != null ? i : "" ) + "]",
					v,
					traditional,
					add
				);
			}
		} );

	} else if ( !traditional && toType( obj ) === "object" ) {

		// Serialize object item.
		for ( name in obj ) {
			buildParams( prefix + "[" + name + "]", obj[ name ], traditional, add );
		}

	} else {

		// Serialize scalar item.
		add( prefix, obj );
	}
}

// Serialize an array of form elements or a set of
// key/values into a query string
jQuery.param = function( a, traditional ) {
	var prefix,
		s = [],
		add = function( key, valueOrFunction ) {

			// If value is a function, invoke it and use its return value
			var value = isFunction( valueOrFunction ) ?
				valueOrFunction() :
				valueOrFunction;

			s[ s.length ] = encodeURIComponent( key ) + "=" +
				encodeURIComponent( value == null ? "" : value );
		};

	if ( a == null ) {
		return "";
	}

	// If an array was passed in, assume that it is an array of form elements.
	if ( Array.isArray( a ) || ( a.jquery && !jQuery.isPlainObject( a ) ) ) {

		// Serialize the form elements
		jQuery.each( a, function() {
			add( this.name, this.value );
		} );

	} else {

		// If traditional, encode the "old" way (the way 1.3.2 or older
		// did it), otherwise encode params recursively.
		for ( prefix in a ) {
			buildParams( prefix, a[ prefix ], traditional, add );
		}
	}

	// Return the resulting serialization
	return s.join( "&" );
};

jQuery.fn.extend( {
	serialize: function() {
		return jQuery.param( this.serializeArray() );
	},
	serializeArray: function() {
		return this.map( function() {

			// Can add propHook for "elements" to filter or add form elements
			var elements = jQuery.prop( this, "elements" );
			return elements ? jQuery.makeArray( elements ) : this;
		} )
		.filter( function() {
			var type = this.type;

			// Use .is( ":disabled" ) so that fieldset[disabled] works
			return this.name && !jQuery( this ).is( ":disabled" ) &&
				rsubmittable.test( this.nodeName ) && !rsubmitterTypes.test( type ) &&
				( this.checked || !rcheckableType.test( type ) );
		} )
		.map( function( _i, elem ) {
			var val = jQuery( this ).val();

			if ( val == null ) {
				return null;
			}

			if ( Array.isArray( val ) ) {
				return jQuery.map( val, function( val ) {
					return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
				} );
			}

			return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
		} ).get();
	}
} );


var
	r20 = /%20/g,
	rhash = /#.*$/,
	rantiCache = /([?&])_=[^&]*/,
	rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg,

	// #7653, #8125, #8152: local protocol detection
	rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
	rnoContent = /^(?:GET|HEAD)$/,
	rprotocol = /^\/\//,

	/* Prefilters
	 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
	 * 2) These are called:
	 *    - BEFORE asking for a transport
	 *    - AFTER param serialization (s.data is a string if s.processData is true)
	 * 3) key is the dataType
	 * 4) the catchall symbol "*" can be used
	 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
	 */
	prefilters = {},

	/* Transports bindings
	 * 1) key is the dataType
	 * 2) the catchall symbol "*" can be used
	 * 3) selection will start with transport dataType and THEN go to "*" if needed
	 */
	transports = {},

	// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
	allTypes = "*/".concat( "*" ),

	// Anchor tag for parsing the document origin
	originAnchor = document.createElement( "a" );
	originAnchor.href = location.href;

// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
function addToPrefiltersOrTransports( structure ) {

	// dataTypeExpression is optional and defaults to "*"
	return function( dataTypeExpression, func ) {

		if ( typeof dataTypeExpression !== "string" ) {
			func = dataTypeExpression;
			dataTypeExpression = "*";
		}

		var dataType,
			i = 0,
			dataTypes = dataTypeExpression.toLowerCase().match( rnothtmlwhite ) || [];

		if ( isFunction( func ) ) {

			// For each dataType in the dataTypeExpression
			while ( ( dataType = dataTypes[ i++ ] ) ) {

				// Prepend if requested
				if ( dataType[ 0 ] === "+" ) {
					dataType = dataType.slice( 1 ) || "*";
					( structure[ dataType ] = structure[ dataType ] || [] ).unshift( func );

				// Otherwise append
				} else {
					( structure[ dataType ] = structure[ dataType ] || [] ).push( func );
				}
			}
		}
	};
}

// Base inspection function for prefilters and transports
function inspectPrefiltersOrTransports( structure, options, originalOptions, jqXHR ) {

	var inspected = {},
		seekingTransport = ( structure === transports );

	function inspect( dataType ) {
		var selected;
		inspected[ dataType ] = true;
		jQuery.each( structure[ dataType ] || [], function( _, prefilterOrFactory ) {
			var dataTypeOrTransport = prefilterOrFactory( options, originalOptions, jqXHR );
			if ( typeof dataTypeOrTransport === "string" &&
				!seekingTransport && !inspected[ dataTypeOrTransport ] ) {

				options.dataTypes.unshift( dataTypeOrTransport );
				inspect( dataTypeOrTransport );
				return false;
			} else if ( seekingTransport ) {
				return !( selected = dataTypeOrTransport );
			}
		} );
		return selected;
	}

	return inspect( options.dataTypes[ 0 ] ) || !inspected[ "*" ] && inspect( "*" );
}

// A special extend for ajax options
// that takes "flat" options (not to be deep extended)
// Fixes #9887
function ajaxExtend( target, src ) {
	var key, deep,
		flatOptions = jQuery.ajaxSettings.flatOptions || {};

	for ( key in src ) {
		if ( src[ key ] !== undefined ) {
			( flatOptions[ key ] ? target : ( deep || ( deep = {} ) ) )[ key ] = src[ key ];
		}
	}
	if ( deep ) {
		jQuery.extend( true, target, deep );
	}

	return target;
}

/* Handles responses to an ajax request:
 * - finds the right dataType (mediates between content-type and expected dataType)
 * - returns the corresponding response
 */
function ajaxHandleResponses( s, jqXHR, responses ) {

	var ct, type, finalDataType, firstDataType,
		contents = s.contents,
		dataTypes = s.dataTypes;

	// Remove auto dataType and get content-type in the process
	while ( dataTypes[ 0 ] === "*" ) {
		dataTypes.shift();
		if ( ct === undefined ) {
			ct = s.mimeType || jqXHR.getResponseHeader( "Content-Type" );
		}
	}

	// Check if we're dealing with a known content-type
	if ( ct ) {
		for ( type in contents ) {
			if ( contents[ type ] && contents[ type ].test( ct ) ) {
				dataTypes.unshift( type );
				break;
			}
		}
	}

	// Check to see if we have a response for the expected dataType
	if ( dataTypes[ 0 ] in responses ) {
		finalDataType = dataTypes[ 0 ];
	} else {

		// Try convertible dataTypes
		for ( type in responses ) {
			if ( !dataTypes[ 0 ] || s.converters[ type + " " + dataTypes[ 0 ] ] ) {
				finalDataType = type;
				break;
			}
			if ( !firstDataType ) {
				firstDataType = type;
			}
		}

		// Or just use first one
		finalDataType = finalDataType || firstDataType;
	}

	// If we found a dataType
	// We add the dataType to the list if needed
	// and return the corresponding response
	if ( finalDataType ) {
		if ( finalDataType !== dataTypes[ 0 ] ) {
			dataTypes.unshift( finalDataType );
		}
		return responses[ finalDataType ];
	}
}

/* Chain conversions given the request and the original response
 * Also sets the responseXXX fields on the jqXHR instance
 */
function ajaxConvert( s, response, jqXHR, isSuccess ) {
	var conv2, current, conv, tmp, prev,
		converters = {},

		// Work with a copy of dataTypes in case we need to modify it for conversion
		dataTypes = s.dataTypes.slice();

	// Create converters map with lowercased keys
	if ( dataTypes[ 1 ] ) {
		for ( conv in s.converters ) {
			converters[ conv.toLowerCase() ] = s.converters[ conv ];
		}
	}

	current = dataTypes.shift();

	// Convert to each sequential dataType
	while ( current ) {

		if ( s.responseFields[ current ] ) {
			jqXHR[ s.responseFields[ current ] ] = response;
		}

		// Apply the dataFilter if provided
		if ( !prev && isSuccess && s.dataFilter ) {
			response = s.dataFilter( response, s.dataType );
		}

		prev = current;
		current = dataTypes.shift();

		if ( current ) {

			// There's only work to do if current dataType is non-auto
			if ( current === "*" ) {

				current = prev;

			// Convert response if prev dataType is non-auto and differs from current
			} else if ( prev !== "*" && prev !== current ) {

				// Seek a direct converter
				conv = converters[ prev + " " + current ] || converters[ "* " + current ];

				// If none found, seek a pair
				if ( !conv ) {
					for ( conv2 in converters ) {

						// If conv2 outputs current
						tmp = conv2.split( " " );
						if ( tmp[ 1 ] === current ) {

							// If prev can be converted to accepted input
							conv = converters[ prev + " " + tmp[ 0 ] ] ||
								converters[ "* " + tmp[ 0 ] ];
							if ( conv ) {

								// Condense equivalence converters
								if ( conv === true ) {
									conv = converters[ conv2 ];

								// Otherwise, insert the intermediate dataType
								} else if ( converters[ conv2 ] !== true ) {
									current = tmp[ 0 ];
									dataTypes.unshift( tmp[ 1 ] );
								}
								break;
							}
						}
					}
				}

				// Apply converter (if not an equivalence)
				if ( conv !== true ) {

					// Unless errors are allowed to bubble, catch and return them
					if ( conv && s.throws ) {
						response = conv( response );
					} else {
						try {
							response = conv( response );
						} catch ( e ) {
							return {
								state: "parsererror",
								error: conv ? e : "No conversion from " + prev + " to " + current
							};
						}
					}
				}
			}
		}
	}

	return { state: "success", data: response };
}

jQuery.extend( {

	// Counter for holding the number of active queries
	active: 0,

	// Last-Modified header cache for next request
	lastModified: {},
	etag: {},

	ajaxSettings: {
		url: location.href,
		type: "GET",
		isLocal: rlocalProtocol.test( location.protocol ),
		global: true,
		processData: true,
		async: true,
		contentType: "application/x-www-form-urlencoded; charset=UTF-8",

		/*
		timeout: 0,
		data: null,
		dataType: null,
		username: null,
		password: null,
		cache: null,
		throws: false,
		traditional: false,
		headers: {},
		*/

		accepts: {
			"*": allTypes,
			text: "text/plain",
			html: "text/html",
			xml: "application/xml, text/xml",
			json: "application/json, text/javascript"
		},

		contents: {
			xml: /\bxml\b/,
			html: /\bhtml/,
			json: /\bjson\b/
		},

		responseFields: {
			xml: "responseXML",
			text: "responseText",
			json: "responseJSON"
		},

		// Data converters
		// Keys separate source (or catchall "*") and destination types with a single space
		converters: {

			// Convert anything to text
			"* text": String,

			// Text to html (true = no transformation)
			"text html": true,

			// Evaluate text as a json expression
			"text json": JSON.parse,

			// Parse text as xml
			"text xml": jQuery.parseXML
		},

		// For options that shouldn't be deep extended:
		// you can add your own custom options here if
		// and when you create one that shouldn't be
		// deep extended (see ajaxExtend)
		flatOptions: {
			url: true,
			context: true
		}
	},

	// Creates a full fledged settings object into target
	// with both ajaxSettings and settings fields.
	// If target is omitted, writes into ajaxSettings.
	ajaxSetup: function( target, settings ) {
		return settings ?

			// Building a settings object
			ajaxExtend( ajaxExtend( target, jQuery.ajaxSettings ), settings ) :

			// Extending ajaxSettings
			ajaxExtend( jQuery.ajaxSettings, target );
	},

	ajaxPrefilter: addToPrefiltersOrTransports( prefilters ),
	ajaxTransport: addToPrefiltersOrTransports( transports ),

	// Main method
	ajax: function( url, options ) {

		// If url is an object, simulate pre-1.5 signature
		if ( typeof url === "object" ) {
			options = url;
			url = undefined;
		}

		// Force options to be an object
		options = options || {};

		var transport,

			// URL without anti-cache param
			cacheURL,

			// Response headers
			responseHeadersString,
			responseHeaders,

			// timeout handle
			timeoutTimer,

			// Url cleanup var
			urlAnchor,

			// Request state (becomes false upon send and true upon completion)
			completed,

			// To know if global events are to be dispatched
			fireGlobals,

			// Loop variable
			i,

			// uncached part of the url
			uncached,

			// Create the final options object
			s = jQuery.ajaxSetup( {}, options ),

			// Callbacks context
			callbackContext = s.context || s,

			// Context for global events is callbackContext if it is a DOM node or jQuery collection
			globalEventContext = s.context &&
				( callbackContext.nodeType || callbackContext.jquery ) ?
					jQuery( callbackContext ) :
					jQuery.event,

			// Deferreds
			deferred = jQuery.Deferred(),
			completeDeferred = jQuery.Callbacks( "once memory" ),

			// Status-dependent callbacks
			statusCode = s.statusCode || {},

			// Headers (they are sent all at once)
			requestHeaders = {},
			requestHeadersNames = {},

			// Default abort message
			strAbort = "canceled",

			// Fake xhr
			jqXHR = {
				readyState: 0,

				// Builds headers hashtable if needed
				getResponseHeader: function( key ) {
					var match;
					if ( completed ) {
						if ( !responseHeaders ) {
							responseHeaders = {};
							while ( ( match = rheaders.exec( responseHeadersString ) ) ) {
								responseHeaders[ match[ 1 ].toLowerCase() + " " ] =
									( responseHeaders[ match[ 1 ].toLowerCase() + " " ] || [] )
										.concat( match[ 2 ] );
							}
						}
						match = responseHeaders[ key.toLowerCase() + " " ];
					}
					return match == null ? null : match.join( ", " );
				},

				// Raw string
				getAllResponseHeaders: function() {
					return completed ? responseHeadersString : null;
				},

				// Caches the header
				setRequestHeader: function( name, value ) {
					if ( completed == null ) {
						name = requestHeadersNames[ name.toLowerCase() ] =
							requestHeadersNames[ name.toLowerCase() ] || name;
						requestHeaders[ name ] = value;
					}
					return this;
				},

				// Overrides response content-type header
				overrideMimeType: function( type ) {
					if ( completed == null ) {
						s.mimeType = type;
					}
					return this;
				},

				// Status-dependent callbacks
				statusCode: function( map ) {
					var code;
					if ( map ) {
						if ( completed ) {

							// Execute the appropriate callbacks
							jqXHR.always( map[ jqXHR.status ] );
						} else {

							// Lazy-add the new callbacks in a way that preserves old ones
							for ( code in map ) {
								statusCode[ code ] = [ statusCode[ code ], map[ code ] ];
							}
						}
					}
					return this;
				},

				// Cancel the request
				abort: function( statusText ) {
					var finalText = statusText || strAbort;
					if ( transport ) {
						transport.abort( finalText );
					}
					done( 0, finalText );
					return this;
				}
			};

		// Attach deferreds
		deferred.promise( jqXHR );

		// Add protocol if not provided (prefilters might expect it)
		// Handle falsy url in the settings object (#10093: consistency with old signature)
		// We also use the url parameter if available
		s.url = ( ( url || s.url || location.href ) + "" )
			.replace( rprotocol, location.protocol + "//" );

		// Alias method option to type as per ticket #12004
		s.type = options.method || options.type || s.method || s.type;

		// Extract dataTypes list
		s.dataTypes = ( s.dataType || "*" ).toLowerCase().match( rnothtmlwhite ) || [ "" ];

		// A cross-domain request is in order when the origin doesn't match the current origin.
		if ( s.crossDomain == null ) {
			urlAnchor = document.createElement( "a" );

			// Support: IE <=8 - 11, Edge 12 - 15
			// IE throws exception on accessing the href property if url is malformed,
			// e.g. http://example.com:80x/
			try {
				urlAnchor.href = s.url;

				// Support: IE <=8 - 11 only
				// Anchor's host property isn't correctly set when s.url is relative
				urlAnchor.href = urlAnchor.href;
				s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !==
					urlAnchor.protocol + "//" + urlAnchor.host;
			} catch ( e ) {

				// If there is an error parsing the URL, assume it is crossDomain,
				// it can be rejected by the transport if it is invalid
				s.crossDomain = true;
			}
		}

		// Convert data if not already a string
		if ( s.data && s.processData && typeof s.data !== "string" ) {
			s.data = jQuery.param( s.data, s.traditional );
		}

		// Apply prefilters
		inspectPrefiltersOrTransports( prefilters, s, options, jqXHR );

		// If request was aborted inside a prefilter, stop there
		if ( completed ) {
			return jqXHR;
		}

		// We can fire global events as of now if asked to
		// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)
		fireGlobals = jQuery.event && s.global;

		// Watch for a new set of requests
		if ( fireGlobals && jQuery.active++ === 0 ) {
			jQuery.event.trigger( "ajaxStart" );
		}

		// Uppercase the type
		s.type = s.type.toUpperCase();

		// Determine if request has content
		s.hasContent = !rnoContent.test( s.type );

		// Save the URL in case we're toying with the If-Modified-Since
		// and/or If-None-Match header later on
		// Remove hash to simplify url manipulation
		cacheURL = s.url.replace( rhash, "" );

		// More options handling for requests with no content
		if ( !s.hasContent ) {

			// Remember the hash so we can put it back
			uncached = s.url.slice( cacheURL.length );

			// If data is available and should be processed, append data to url
			if ( s.data && ( s.processData || typeof s.data === "string" ) ) {
				cacheURL += ( rquery.test( cacheURL ) ? "&" : "?" ) + s.data;

				// #9682: remove data so that it's not used in an eventual retry
				delete s.data;
			}

			// Add or update anti-cache param if needed
			if ( s.cache === false ) {
				cacheURL = cacheURL.replace( rantiCache, "$1" );
				uncached = ( rquery.test( cacheURL ) ? "&" : "?" ) + "_=" + ( nonce.guid++ ) +
					uncached;
			}

			// Put hash and anti-cache on the URL that will be requested (gh-1732)
			s.url = cacheURL + uncached;

		// Change '%20' to '+' if this is encoded form body content (gh-2658)
		} else if ( s.data && s.processData &&
			( s.contentType || "" ).indexOf( "application/x-www-form-urlencoded" ) === 0 ) {
			s.data = s.data.replace( r20, "+" );
		}

		// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
		if ( s.ifModified ) {
			if ( jQuery.lastModified[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-Modified-Since", jQuery.lastModified[ cacheURL ] );
			}
			if ( jQuery.etag[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-None-Match", jQuery.etag[ cacheURL ] );
			}
		}

		// Set the correct header, if data is being sent
		if ( s.data && s.hasContent && s.contentType !== false || options.contentType ) {
			jqXHR.setRequestHeader( "Content-Type", s.contentType );
		}

		// Set the Accepts header for the server, depending on the dataType
		jqXHR.setRequestHeader(
			"Accept",
			s.dataTypes[ 0 ] && s.accepts[ s.dataTypes[ 0 ] ] ?
				s.accepts[ s.dataTypes[ 0 ] ] +
					( s.dataTypes[ 0 ] !== "*" ? ", " + allTypes + "; q=0.01" : "" ) :
				s.accepts[ "*" ]
		);

		// Check for headers option
		for ( i in s.headers ) {
			jqXHR.setRequestHeader( i, s.headers[ i ] );
		}

		// Allow custom headers/mimetypes and early abort
		if ( s.beforeSend &&
			( s.beforeSend.call( callbackContext, jqXHR, s ) === false || completed ) ) {

			// Abort if not done already and return
			return jqXHR.abort();
		}

		// Aborting is no longer a cancellation
		strAbort = "abort";

		// Install callbacks on deferreds
		completeDeferred.add( s.complete );
		jqXHR.done( s.success );
		jqXHR.fail( s.error );

		// Get transport
		transport = inspectPrefiltersOrTransports( transports, s, options, jqXHR );

		// If no transport, we auto-abort
		if ( !transport ) {
			done( -1, "No Transport" );
		} else {
			jqXHR.readyState = 1;

			// Send global event
			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxSend", [ jqXHR, s ] );
			}

			// If request was aborted inside ajaxSend, stop there
			if ( completed ) {
				return jqXHR;
			}

			// Timeout
			if ( s.async && s.timeout > 0 ) {
				timeoutTimer = window.setTimeout( function() {
					jqXHR.abort( "timeout" );
				}, s.timeout );
			}

			try {
				completed = false;
				transport.send( requestHeaders, done );
			} catch ( e ) {

				// Rethrow post-completion exceptions
				if ( completed ) {
					throw e;
				}

				// Propagate others as results
				done( -1, e );
			}
		}

		// Callback for when everything is done
		function done( status, nativeStatusText, responses, headers ) {
			var isSuccess, success, error, response, modified,
				statusText = nativeStatusText;

			// Ignore repeat invocations
			if ( completed ) {
				return;
			}

			completed = true;

			// Clear timeout if it exists
			if ( timeoutTimer ) {
				window.clearTimeout( timeoutTimer );
			}

			// Dereference transport for early garbage collection
			// (no matter how long the jqXHR object will be used)
			transport = undefined;

			// Cache response headers
			responseHeadersString = headers || "";

			// Set readyState
			jqXHR.readyState = status > 0 ? 4 : 0;

			// Determine if successful
			isSuccess = status >= 200 && status < 300 || status === 304;

			// Get response data
			if ( responses ) {
				response = ajaxHandleResponses( s, jqXHR, responses );
			}

			// Use a noop converter for missing script
			if ( !isSuccess && jQuery.inArray( "script", s.dataTypes ) > -1 ) {
				s.converters[ "text script" ] = function() {};
			}

			// Convert no matter what (that way responseXXX fields are always set)
			response = ajaxConvert( s, response, jqXHR, isSuccess );

			// If successful, handle type chaining
			if ( isSuccess ) {

				// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
				if ( s.ifModified ) {
					modified = jqXHR.getResponseHeader( "Last-Modified" );
					if ( modified ) {
						jQuery.lastModified[ cacheURL ] = modified;
					}
					modified = jqXHR.getResponseHeader( "etag" );
					if ( modified ) {
						jQuery.etag[ cacheURL ] = modified;
					}
				}

				// if no content
				if ( status === 204 || s.type === "HEAD" ) {
					statusText = "nocontent";

				// if not modified
				} else if ( status === 304 ) {
					statusText = "notmodified";

				// If we have data, let's convert it
				} else {
					statusText = response.state;
					success = response.data;
					error = response.error;
					isSuccess = !error;
				}
			} else {

				// Extract error from statusText and normalize for non-aborts
				error = statusText;
				if ( status || !statusText ) {
					statusText = "error";
					if ( status < 0 ) {
						status = 0;
					}
				}
			}

			// Set data for the fake xhr object
			jqXHR.status = status;
			jqXHR.statusText = ( nativeStatusText || statusText ) + "";

			// Success/Error
			if ( isSuccess ) {
				deferred.resolveWith( callbackContext, [ success, statusText, jqXHR ] );
			} else {
				deferred.rejectWith( callbackContext, [ jqXHR, statusText, error ] );
			}

			// Status-dependent callbacks
			jqXHR.statusCode( statusCode );
			statusCode = undefined;

			if ( fireGlobals ) {
				globalEventContext.trigger( isSuccess ? "ajaxSuccess" : "ajaxError",
					[ jqXHR, s, isSuccess ? success : error ] );
			}

			// Complete
			completeDeferred.fireWith( callbackContext, [ jqXHR, statusText ] );

			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxComplete", [ jqXHR, s ] );

				// Handle the global AJAX counter
				if ( !( --jQuery.active ) ) {
					jQuery.event.trigger( "ajaxStop" );
				}
			}
		}

		return jqXHR;
	},

	getJSON: function( url, data, callback ) {
		return jQuery.get( url, data, callback, "json" );
	},

	getScript: function( url, callback ) {
		return jQuery.get( url, undefined, callback, "script" );
	}
} );

jQuery.each( [ "get", "post" ], function( _i, method ) {
	jQuery[ method ] = function( url, data, callback, type ) {

		// Shift arguments if data argument was omitted
		if ( isFunction( data ) ) {
			type = type || callback;
			callback = data;
			data = undefined;
		}

		// The url can be an options object (which then must have .url)
		return jQuery.ajax( jQuery.extend( {
			url: url,
			type: method,
			dataType: type,
			data: data,
			success: callback
		}, jQuery.isPlainObject( url ) && url ) );
	};
} );

jQuery.ajaxPrefilter( function( s ) {
	var i;
	for ( i in s.headers ) {
		if ( i.toLowerCase() === "content-type" ) {
			s.contentType = s.headers[ i ] || "";
		}
	}
} );


jQuery._evalUrl = function( url, options, doc ) {
	return jQuery.ajax( {
		url: url,

		// Make this explicit, since user can override this through ajaxSetup (#11264)
		type: "GET",
		dataType: "script",
		cache: true,
		async: false,
		global: false,

		// Only evaluate the response if it is successful (gh-4126)
		// dataFilter is not invoked for failure responses, so using it instead
		// of the default converter is kludgy but it works.
		converters: {
			"text script": function() {}
		},
		dataFilter: function( response ) {
			jQuery.globalEval( response, options, doc );
		}
	} );
};


jQuery.fn.extend( {
	wrapAll: function( html ) {
		var wrap;

		if ( this[ 0 ] ) {
			if ( isFunction( html ) ) {
				html = html.call( this[ 0 ] );
			}

			// The elements to wrap the target around
			wrap = jQuery( html, this[ 0 ].ownerDocument ).eq( 0 ).clone( true );

			if ( this[ 0 ].parentNode ) {
				wrap.insertBefore( this[ 0 ] );
			}

			wrap.map( function() {
				var elem = this;

				while ( elem.firstElementChild ) {
					elem = elem.firstElementChild;
				}

				return elem;
			} ).append( this );
		}

		return this;
	},

	wrapInner: function( html ) {
		if ( isFunction( html ) ) {
			return this.each( function( i ) {
				jQuery( this ).wrapInner( html.call( this, i ) );
			} );
		}

		return this.each( function() {
			var self = jQuery( this ),
				contents = self.contents();

			if ( contents.length ) {
				contents.wrapAll( html );

			} else {
				self.append( html );
			}
		} );
	},

	wrap: function( html ) {
		var htmlIsFunction = isFunction( html );

		return this.each( function( i ) {
			jQuery( this ).wrapAll( htmlIsFunction ? html.call( this, i ) : html );
		} );
	},

	unwrap: function( selector ) {
		this.parent( selector ).not( "body" ).each( function() {
			jQuery( this ).replaceWith( this.childNodes );
		} );
		return this;
	}
} );


jQuery.expr.pseudos.hidden = function( elem ) {
	return !jQuery.expr.pseudos.visible( elem );
};
jQuery.expr.pseudos.visible = function( elem ) {
	return !!( elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length );
};




jQuery.ajaxSettings.xhr = function() {
	try {
		return new window.XMLHttpRequest();
	} catch ( e ) {}
};

var xhrSuccessStatus = {

		// File protocol always yields status code 0, assume 200
		0: 200,

		// Support: IE <=9 only
		// #1450: sometimes IE returns 1223 when it should be 204
		1223: 204
	},
	xhrSupported = jQuery.ajaxSettings.xhr();

support.cors = !!xhrSupported && ( "withCredentials" in xhrSupported );
support.ajax = xhrSupported = !!xhrSupported;

jQuery.ajaxTransport( function( options ) {
	var callback, errorCallback;

	// Cross domain only allowed if supported through XMLHttpRequest
	if ( support.cors || xhrSupported && !options.crossDomain ) {
		return {
			send: function( headers, complete ) {
				var i,
					xhr = options.xhr();

				xhr.open(
					options.type,
					options.url,
					options.async,
					options.username,
					options.password
				);

				// Apply custom fields if provided
				if ( options.xhrFields ) {
					for ( i in options.xhrFields ) {
						xhr[ i ] = options.xhrFields[ i ];
					}
				}

				// Override mime type if needed
				if ( options.mimeType && xhr.overrideMimeType ) {
					xhr.overrideMimeType( options.mimeType );
				}

				// X-Requested-With header
				// For cross-domain requests, seeing as conditions for a preflight are
				// akin to a jigsaw puzzle, we simply never set it to be sure.
				// (it can always be set on a per-request basis or even using ajaxSetup)
				// For same-domain requests, won't change header if already provided.
				if ( !options.crossDomain && !headers[ "X-Requested-With" ] ) {
					headers[ "X-Requested-With" ] = "XMLHttpRequest";
				}

				// Set headers
				for ( i in headers ) {
					xhr.setRequestHeader( i, headers[ i ] );
				}

				// Callback
				callback = function( type ) {
					return function() {
						if ( callback ) {
							callback = errorCallback = xhr.onload =
								xhr.onerror = xhr.onabort = xhr.ontimeout =
									xhr.onreadystatechange = null;

							if ( type === "abort" ) {
								xhr.abort();
							} else if ( type === "error" ) {

								// Support: IE <=9 only
								// On a manual native abort, IE9 throws
								// errors on any property access that is not readyState
								if ( typeof xhr.status !== "number" ) {
									complete( 0, "error" );
								} else {
									complete(

										// File: protocol always yields status 0; see #8605, #14207
										xhr.status,
										xhr.statusText
									);
								}
							} else {
								complete(
									xhrSuccessStatus[ xhr.status ] || xhr.status,
									xhr.statusText,

									// Support: IE <=9 only
									// IE9 has no XHR2 but throws on binary (trac-11426)
									// For XHR2 non-text, let the caller handle it (gh-2498)
									( xhr.responseType || "text" ) !== "text"  ||
									typeof xhr.responseText !== "string" ?
										{ binary: xhr.response } :
										{ text: xhr.responseText },
									xhr.getAllResponseHeaders()
								);
							}
						}
					};
				};

				// Listen to events
				xhr.onload = callback();
				errorCallback = xhr.onerror = xhr.ontimeout = callback( "error" );

				// Support: IE 9 only
				// Use onreadystatechange to replace onabort
				// to handle uncaught aborts
				if ( xhr.onabort !== undefined ) {
					xhr.onabort = errorCallback;
				} else {
					xhr.onreadystatechange = function() {

						// Check readyState before timeout as it changes
						if ( xhr.readyState === 4 ) {

							// Allow onerror to be called first,
							// but that will not handle a native abort
							// Also, save errorCallback to a variable
							// as xhr.onerror cannot be accessed
							window.setTimeout( function() {
								if ( callback ) {
									errorCallback();
								}
							} );
						}
					};
				}

				// Create the abort callback
				callback = callback( "abort" );

				try {

					// Do send the request (this may raise an exception)
					xhr.send( options.hasContent && options.data || null );
				} catch ( e ) {

					// #14683: Only rethrow if this hasn't been notified as an error yet
					if ( callback ) {
						throw e;
					}
				}
			},

			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




// Prevent auto-execution of scripts when no explicit dataType was provided (See gh-2432)
jQuery.ajaxPrefilter( function( s ) {
	if ( s.crossDomain ) {
		s.contents.script = false;
	}
} );

// Install script dataType
jQuery.ajaxSetup( {
	accepts: {
		script: "text/javascript, application/javascript, " +
			"application/ecmascript, application/x-ecmascript"
	},
	contents: {
		script: /\b(?:java|ecma)script\b/
	},
	converters: {
		"text script": function( text ) {
			jQuery.globalEval( text );
			return text;
		}
	}
} );

// Handle cache's special case and crossDomain
jQuery.ajaxPrefilter( "script", function( s ) {
	if ( s.cache === undefined ) {
		s.cache = false;
	}
	if ( s.crossDomain ) {
		s.type = "GET";
	}
} );

// Bind script tag hack transport
jQuery.ajaxTransport( "script", function( s ) {

	// This transport only deals with cross domain or forced-by-attrs requests
	if ( s.crossDomain || s.scriptAttrs ) {
		var script, callback;
		return {
			send: function( _, complete ) {
				script = jQuery( "<script>" )
					.attr( s.scriptAttrs || {} )
					.prop( { charset: s.scriptCharset, src: s.url } )
					.on( "load error", callback = function( evt ) {
						script.remove();
						callback = null;
						if ( evt ) {
							complete( evt.type === "error" ? 404 : 200, evt.type );
						}
					} );

				// Use native DOM manipulation to avoid our domManip AJAX trickery
				document.head.appendChild( script[ 0 ] );
			},
			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




var oldCallbacks = [],
	rjsonp = /(=)\?(?=&|$)|\?\?/;

// Default jsonp settings
jQuery.ajaxSetup( {
	jsonp: "callback",
	jsonpCallback: function() {
		var callback = oldCallbacks.pop() || ( jQuery.expando + "_" + ( nonce.guid++ ) );
		this[ callback ] = true;
		return callback;
	}
} );

// Detect, normalize options and install callbacks for jsonp requests
jQuery.ajaxPrefilter( "json jsonp", function( s, originalSettings, jqXHR ) {

	var callbackName, overwritten, responseContainer,
		jsonProp = s.jsonp !== false && ( rjsonp.test( s.url ) ?
			"url" :
			typeof s.data === "string" &&
				( s.contentType || "" )
					.indexOf( "application/x-www-form-urlencoded" ) === 0 &&
				rjsonp.test( s.data ) && "data"
		);

	// Handle iff the expected data type is "jsonp" or we have a parameter to set
	if ( jsonProp || s.dataTypes[ 0 ] === "jsonp" ) {

		// Get callback name, remembering preexisting value associated with it
		callbackName = s.jsonpCallback = isFunction( s.jsonpCallback ) ?
			s.jsonpCallback() :
			s.jsonpCallback;

		// Insert callback into url or form data
		if ( jsonProp ) {
			s[ jsonProp ] = s[ jsonProp ].replace( rjsonp, "$1" + callbackName );
		} else if ( s.jsonp !== false ) {
			s.url += ( rquery.test( s.url ) ? "&" : "?" ) + s.jsonp + "=" + callbackName;
		}

		// Use data converter to retrieve json after script execution
		s.converters[ "script json" ] = function() {
			if ( !responseContainer ) {
				jQuery.error( callbackName + " was not called" );
			}
			return responseContainer[ 0 ];
		};

		// Force json dataType
		s.dataTypes[ 0 ] = "json";

		// Install callback
		overwritten = window[ callbackName ];
		window[ callbackName ] = function() {
			responseContainer = arguments;
		};

		// Clean-up function (fires after converters)
		jqXHR.always( function() {

			// If previous value didn't exist - remove it
			if ( overwritten === undefined ) {
				jQuery( window ).removeProp( callbackName );

			// Otherwise restore preexisting value
			} else {
				window[ callbackName ] = overwritten;
			}

			// Save back as free
			if ( s[ callbackName ] ) {

				// Make sure that re-using the options doesn't screw things around
				s.jsonpCallback = originalSettings.jsonpCallback;

				// Save the callback name for future use
				oldCallbacks.push( callbackName );
			}

			// Call if it was a function and we have a response
			if ( responseContainer && isFunction( overwritten ) ) {
				overwritten( responseContainer[ 0 ] );
			}

			responseContainer = overwritten = undefined;
		} );

		// Delegate to script
		return "script";
	}
} );




// Support: Safari 8 only
// In Safari 8 documents created via document.implementation.createHTMLDocument
// collapse sibling forms: the second one becomes a child of the first one.
// Because of that, this security measure has to be disabled in Safari 8.
// https://bugs.webkit.org/show_bug.cgi?id=137337
support.createHTMLDocument = ( function() {
	var body = document.implementation.createHTMLDocument( "" ).body;
	body.innerHTML = "<form></form><form></form>";
	return body.childNodes.length === 2;
} )();


// Argument "data" should be string of html
// context (optional): If specified, the fragment will be created in this context,
// defaults to document
// keepScripts (optional): If true, will include scripts passed in the html string
jQuery.parseHTML = function( data, context, keepScripts ) {
	if ( typeof data !== "string" ) {
		return [];
	}
	if ( typeof context === "boolean" ) {
		keepScripts = context;
		context = false;
	}

	var base, parsed, scripts;

	if ( !context ) {

		// Stop scripts or inline event handlers from being executed immediately
		// by using document.implementation
		if ( support.createHTMLDocument ) {
			context = document.implementation.createHTMLDocument( "" );

			// Set the base href for the created document
			// so any parsed elements with URLs
			// are based on the document's URL (gh-2965)
			base = context.createElement( "base" );
			base.href = document.location.href;
			context.head.appendChild( base );
		} else {
			context = document;
		}
	}

	parsed = rsingleTag.exec( data );
	scripts = !keepScripts && [];

	// Single tag
	if ( parsed ) {
		return [ context.createElement( parsed[ 1 ] ) ];
	}

	parsed = buildFragment( [ data ], context, scripts );

	if ( scripts && scripts.length ) {
		jQuery( scripts ).remove();
	}

	return jQuery.merge( [], parsed.childNodes );
};


/**
 * Load a url into a page
 */
jQuery.fn.load = function( url, params, callback ) {
	var selector, type, response,
		self = this,
		off = url.indexOf( " " );

	if ( off > -1 ) {
		selector = stripAndCollapse( url.slice( off ) );
		url = url.slice( 0, off );
	}

	// If it's a function
	if ( isFunction( params ) ) {

		// We assume that it's the callback
		callback = params;
		params = undefined;

	// Otherwise, build a param string
	} else if ( params && typeof params === "object" ) {
		type = "POST";
	}

	// If we have elements to modify, make the request
	if ( self.length > 0 ) {
		jQuery.ajax( {
			url: url,

			// If "type" variable is undefined, then "GET" method will be used.
			// Make value of this field explicit since
			// user can override it through ajaxSetup method
			type: type || "GET",
			dataType: "html",
			data: params
		} ).done( function( responseText ) {

			// Save response for use in complete callback
			response = arguments;

			self.html( selector ?

				// If a selector was specified, locate the right elements in a dummy div
				// Exclude scripts to avoid IE 'Permission Denied' errors
				jQuery( "<div>" ).append( jQuery.parseHTML( responseText ) ).find( selector ) :

				// Otherwise use the full result
				responseText );

		// If the request succeeds, this function gets "data", "status", "jqXHR"
		// but they are ignored because response was set above.
		// If it fails, this function gets "jqXHR", "status", "error"
		} ).always( callback && function( jqXHR, status ) {
			self.each( function() {
				callback.apply( this, response || [ jqXHR.responseText, status, jqXHR ] );
			} );
		} );
	}

	return this;
};




jQuery.expr.pseudos.animated = function( elem ) {
	return jQuery.grep( jQuery.timers, function( fn ) {
		return elem === fn.elem;
	} ).length;
};




jQuery.offset = {
	setOffset: function( elem, options, i ) {
		var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition,
			position = jQuery.css( elem, "position" ),
			curElem = jQuery( elem ),
			props = {};

		// Set position first, in-case top/left are set even on static elem
		if ( position === "static" ) {
			elem.style.position = "relative";
		}

		curOffset = curElem.offset();
		curCSSTop = jQuery.css( elem, "top" );
		curCSSLeft = jQuery.css( elem, "left" );
		calculatePosition = ( position === "absolute" || position === "fixed" ) &&
			( curCSSTop + curCSSLeft ).indexOf( "auto" ) > -1;

		// Need to be able to calculate position if either
		// top or left is auto and position is either absolute or fixed
		if ( calculatePosition ) {
			curPosition = curElem.position();
			curTop = curPosition.top;
			curLeft = curPosition.left;

		} else {
			curTop = parseFloat( curCSSTop ) || 0;
			curLeft = parseFloat( curCSSLeft ) || 0;
		}

		if ( isFunction( options ) ) {

			// Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
			options = options.call( elem, i, jQuery.extend( {}, curOffset ) );
		}

		if ( options.top != null ) {
			props.top = ( options.top - curOffset.top ) + curTop;
		}
		if ( options.left != null ) {
			props.left = ( options.left - curOffset.left ) + curLeft;
		}

		if ( "using" in options ) {
			options.using.call( elem, props );

		} else {
			if ( typeof props.top === "number" ) {
				props.top += "px";
			}
			if ( typeof props.left === "number" ) {
				props.left += "px";
			}
			curElem.css( props );
		}
	}
};

jQuery.fn.extend( {

	// offset() relates an element's border box to the document origin
	offset: function( options ) {

		// Preserve chaining for setter
		if ( arguments.length ) {
			return options === undefined ?
				this :
				this.each( function( i ) {
					jQuery.offset.setOffset( this, options, i );
				} );
		}

		var rect, win,
			elem = this[ 0 ];

		if ( !elem ) {
			return;
		}

		// Return zeros for disconnected and hidden (display: none) elements (gh-2310)
		// Support: IE <=11 only
		// Running getBoundingClientRect on a
		// disconnected node in IE throws an error
		if ( !elem.getClientRects().length ) {
			return { top: 0, left: 0 };
		}

		// Get document-relative position by adding viewport scroll to viewport-relative gBCR
		rect = elem.getBoundingClientRect();
		win = elem.ownerDocument.defaultView;
		return {
			top: rect.top + win.pageYOffset,
			left: rect.left + win.pageXOffset
		};
	},

	// position() relates an element's margin box to its offset parent's padding box
	// This corresponds to the behavior of CSS absolute positioning
	position: function() {
		if ( !this[ 0 ] ) {
			return;
		}

		var offsetParent, offset, doc,
			elem = this[ 0 ],
			parentOffset = { top: 0, left: 0 };

		// position:fixed elements are offset from the viewport, which itself always has zero offset
		if ( jQuery.css( elem, "position" ) === "fixed" ) {

			// Assume position:fixed implies availability of getBoundingClientRect
			offset = elem.getBoundingClientRect();

		} else {
			offset = this.offset();

			// Account for the *real* offset parent, which can be the document or its root element
			// when a statically positioned element is identified
			doc = elem.ownerDocument;
			offsetParent = elem.offsetParent || doc.documentElement;
			while ( offsetParent &&
				( offsetParent === doc.body || offsetParent === doc.documentElement ) &&
				jQuery.css( offsetParent, "position" ) === "static" ) {

				offsetParent = offsetParent.parentNode;
			}
			if ( offsetParent && offsetParent !== elem && offsetParent.nodeType === 1 ) {

				// Incorporate borders into its offset, since they are outside its content origin
				parentOffset = jQuery( offsetParent ).offset();
				parentOffset.top += jQuery.css( offsetParent, "borderTopWidth", true );
				parentOffset.left += jQuery.css( offsetParent, "borderLeftWidth", true );
			}
		}

		// Subtract parent offsets and element margins
		return {
			top: offset.top - parentOffset.top - jQuery.css( elem, "marginTop", true ),
			left: offset.left - parentOffset.left - jQuery.css( elem, "marginLeft", true )
		};
	},

	// This method will return documentElement in the following cases:
	// 1) For the element inside the iframe without offsetParent, this method will return
	//    documentElement of the parent window
	// 2) For the hidden or detached element
	// 3) For body or html element, i.e. in case of the html node - it will return itself
	//
	// but those exceptions were never presented as a real life use-cases
	// and might be considered as more preferable results.
	//
	// This logic, however, is not guaranteed and can change at any point in the future
	offsetParent: function() {
		return this.map( function() {
			var offsetParent = this.offsetParent;

			while ( offsetParent && jQuery.css( offsetParent, "position" ) === "static" ) {
				offsetParent = offsetParent.offsetParent;
			}

			return offsetParent || documentElement;
		} );
	}
} );

// Create scrollLeft and scrollTop methods
jQuery.each( { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function( method, prop ) {
	var top = "pageYOffset" === prop;

	jQuery.fn[ method ] = function( val ) {
		return access( this, function( elem, method, val ) {

			// Coalesce documents and windows
			var win;
			if ( isWindow( elem ) ) {
				win = elem;
			} else if ( elem.nodeType === 9 ) {
				win = elem.defaultView;
			}

			if ( val === undefined ) {
				return win ? win[ prop ] : elem[ method ];
			}

			if ( win ) {
				win.scrollTo(
					!top ? val : win.pageXOffset,
					top ? val : win.pageYOffset
				);

			} else {
				elem[ method ] = val;
			}
		}, method, val, arguments.length );
	};
} );

// Support: Safari <=7 - 9.1, Chrome <=37 - 49
// Add the top/left cssHooks using jQuery.fn.position
// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
// Blink bug: https://bugs.chromium.org/p/chromium/issues/detail?id=589347
// getComputedStyle returns percent when specified for top/left/bottom/right;
// rather than make the css module depend on the offset module, just check for it here
jQuery.each( [ "top", "left" ], function( _i, prop ) {
	jQuery.cssHooks[ prop ] = addGetHookIf( support.pixelPosition,
		function( elem, computed ) {
			if ( computed ) {
				computed = curCSS( elem, prop );

				// If curCSS returns percentage, fallback to offset
				return rnumnonpx.test( computed ) ?
					jQuery( elem ).position()[ prop ] + "px" :
					computed;
			}
		}
	);
} );


// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
jQuery.each( { Height: "height", Width: "width" }, function( name, type ) {
	jQuery.each( { padding: "inner" + name, content: type, "": "outer" + name },
		function( defaultExtra, funcName ) {

		// Margin is only for outerHeight, outerWidth
		jQuery.fn[ funcName ] = function( margin, value ) {
			var chainable = arguments.length && ( defaultExtra || typeof margin !== "boolean" ),
				extra = defaultExtra || ( margin === true || value === true ? "margin" : "border" );

			return access( this, function( elem, type, value ) {
				var doc;

				if ( isWindow( elem ) ) {

					// $( window ).outerWidth/Height return w/h including scrollbars (gh-1729)
					return funcName.indexOf( "outer" ) === 0 ?
						elem[ "inner" + name ] :
						elem.document.documentElement[ "client" + name ];
				}

				// Get document width or height
				if ( elem.nodeType === 9 ) {
					doc = elem.documentElement;

					// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
					// whichever is greatest
					return Math.max(
						elem.body[ "scroll" + name ], doc[ "scroll" + name ],
						elem.body[ "offset" + name ], doc[ "offset" + name ],
						doc[ "client" + name ]
					);
				}

				return value === undefined ?

					// Get width or height on the element, requesting but not forcing parseFloat
					jQuery.css( elem, type, extra ) :

					// Set width or height on the element
					jQuery.style( elem, type, value, extra );
			}, type, chainable ? margin : undefined, chainable );
		};
	} );
} );


jQuery.each( [
	"ajaxStart",
	"ajaxStop",
	"ajaxComplete",
	"ajaxError",
	"ajaxSuccess",
	"ajaxSend"
], function( _i, type ) {
	jQuery.fn[ type ] = function( fn ) {
		return this.on( type, fn );
	};
} );




jQuery.fn.extend( {

	bind: function( types, data, fn ) {
		return this.on( types, null, data, fn );
	},
	unbind: function( types, fn ) {
		return this.off( types, null, fn );
	},

	delegate: function( selector, types, data, fn ) {
		return this.on( types, selector, data, fn );
	},
	undelegate: function( selector, types, fn ) {

		// ( namespace ) or ( selector, types [, fn] )
		return arguments.length === 1 ?
			this.off( selector, "**" ) :
			this.off( types, selector || "**", fn );
	},

	hover: function( fnOver, fnOut ) {
		return this.mouseenter( fnOver ).mouseleave( fnOut || fnOver );
	}
} );

jQuery.each( ( "blur focus focusin focusout resize scroll click dblclick " +
	"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
	"change select submit keydown keypress keyup contextmenu" ).split( " " ),
	function( _i, name ) {

		// Handle event binding
		jQuery.fn[ name ] = function( data, fn ) {
			return arguments.length > 0 ?
				this.on( name, null, data, fn ) :
				this.trigger( name );
		};
	} );




// Support: Android <=4.0 only
// Make sure we trim BOM and NBSP
var rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;

// Bind a function to a context, optionally partially applying any
// arguments.
// jQuery.proxy is deprecated to promote standards (specifically Function#bind)
// However, it is not slated for removal any time soon
jQuery.proxy = function( fn, context ) {
	var tmp, args, proxy;

	if ( typeof context === "string" ) {
		tmp = fn[ context ];
		context = fn;
		fn = tmp;
	}

	// Quick check to determine if target is callable, in the spec
	// this throws a TypeError, but we will just return undefined.
	if ( !isFunction( fn ) ) {
		return undefined;
	}

	// Simulated bind
	args = slice.call( arguments, 2 );
	proxy = function() {
		return fn.apply( context || this, args.concat( slice.call( arguments ) ) );
	};

	// Set the guid of unique handler to the same of original handler, so it can be removed
	proxy.guid = fn.guid = fn.guid || jQuery.guid++;

	return proxy;
};

jQuery.holdReady = function( hold ) {
	if ( hold ) {
		jQuery.readyWait++;
	} else {
		jQuery.ready( true );
	}
};
jQuery.isArray = Array.isArray;
jQuery.parseJSON = JSON.parse;
jQuery.nodeName = nodeName;
jQuery.isFunction = isFunction;
jQuery.isWindow = isWindow;
jQuery.camelCase = camelCase;
jQuery.type = toType;

jQuery.now = Date.now;

jQuery.isNumeric = function( obj ) {

	// As of jQuery 3.0, isNumeric is limited to
	// strings and numbers (primitives or objects)
	// that can be coerced to finite numbers (gh-2662)
	var type = jQuery.type( obj );
	return ( type === "number" || type === "string" ) &&

		// parseFloat NaNs numeric-cast false positives ("")
		// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
		// subtraction forces infinities to NaN
		!isNaN( obj - parseFloat( obj ) );
};

jQuery.trim = function( text ) {
	return text == null ?
		"" :
		( text + "" ).replace( rtrim, "" );
};



// Register as a named AMD module, since jQuery can be concatenated with other
// files that may use define, but not via a proper concatenation script that
// understands anonymous AMD modules. A named AMD is safest and most robust
// way to register. Lowercase jquery is used because AMD module names are
// derived from file names, and jQuery is normally delivered in a lowercase
// file name. Do this after creating the global so that if an AMD module wants
// to call noConflict to hide this version of jQuery, it will work.

// Note that for maximum portability, libraries that are not jQuery should
// declare themselves as anonymous modules, and avoid setting a global if an
// AMD loader is present. jQuery is a special case. For more information, see
// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon

if ( true ) {
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function() {
		return jQuery;
	}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
}




var

	// Map over jQuery in case of overwrite
	_jQuery = window.jQuery,

	// Map over the $ in case of overwrite
	_$ = window.$;

jQuery.noConflict = function( deep ) {
	if ( window.$ === jQuery ) {
		window.$ = _$;
	}

	if ( deep && window.jQuery === jQuery ) {
		window.jQuery = _jQuery;
	}

	return jQuery;
};

// Expose jQuery and $ identifiers, even in AMD
// (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
// and CommonJS for browser emulators (#13566)
if ( typeof noGlobal === "undefined" ) {
	window.jQuery = window.$ = jQuery;
}




return jQuery;
} );


/***/ }),

/***/ "./node_modules/webpack/buildin/amd-options.js":
/*!****************************************!*\
  !*** (webpack)/buildin/amd-options.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* WEBPACK VAR INJECTION */(function(__webpack_amd_options__) {/* globals __webpack_amd_options__ */
module.exports = __webpack_amd_options__;

/* WEBPACK VAR INJECTION */}.call(this, {}))

/***/ }),

/***/ "./node_modules/webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ "./resources/js/admin/adminlte.min.js":
/*!********************************************!*\
  !*** ./resources/js/admin/adminlte.min.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*! AdminLTE app.js
* ================
* Main JS application file for AdminLTE v2. This file
* should be included in all pages. It controls some layout
* options and implements exclusive AdminLTE plugins.
*
* @Author  Almsaeed Studio
* @Support <https://www.almsaeedstudio.com>
* @Email   <abdullah@almsaeedstudio.com>
* @version 2.4.8
* @repository git://github.com/almasaeed2010/AdminLTE.git
* @license MIT <http://opensource.org/licenses/MIT>
*/
if ("undefined" == typeof jQuery) throw new Error("AdminLTE requires jQuery");
+function (a) {
  "use strict";

  function b(b) {
    return this.each(function () {
      var e = a(this),
          g = e.data(c);

      if (!g) {
        var h = a.extend({}, d, e.data(), "object" == _typeof(b) && b);
        e.data(c, g = new f(e, h));
      }

      if ("string" == typeof g) {
        if (void 0 === g[b]) throw new Error("No method named " + b);
        g[b]();
      }
    });
  }

  var c = "lte.boxrefresh",
      d = {
    source: "",
    params: {},
    trigger: ".refresh-btn",
    content: ".box-body",
    loadInContent: !0,
    responseType: "",
    overlayTemplate: '<div class="overlay"><div class="fa fa-refresh fa-spin"></div></div>',
    onLoadStart: function onLoadStart() {},
    onLoadDone: function onLoadDone(a) {
      return a;
    }
  },
      e = {
    data: '[data-widget="box-refresh"]'
  },
      f = function f(b, c) {
    if (this.element = b, this.options = c, this.$overlay = a(c.overlayTemplate), "" === c.source) throw new Error("Source url was not defined. Please specify a url in your BoxRefresh source option.");
    this._setUpListeners(), this.load();
  };

  f.prototype.load = function () {
    this._addOverlay(), this.options.onLoadStart.call(a(this)), a.get(this.options.source, this.options.params, function (b) {
      this.options.loadInContent && a(this.element).find(this.options.content).html(b), this.options.onLoadDone.call(a(this), b), this._removeOverlay();
    }.bind(this), "" !== this.options.responseType && this.options.responseType);
  }, f.prototype._setUpListeners = function () {
    a(this.element).on("click", this.options.trigger, function (a) {
      a && a.preventDefault(), this.load();
    }.bind(this));
  }, f.prototype._addOverlay = function () {
    a(this.element).append(this.$overlay);
  }, f.prototype._removeOverlay = function () {
    a(this.$overlay).remove();
  };
  var g = a.fn.boxRefresh;
  a.fn.boxRefresh = b, a.fn.boxRefresh.Constructor = f, a.fn.boxRefresh.noConflict = function () {
    return a.fn.boxRefresh = g, this;
  }, a(window).on("load", function () {
    a(e.data).each(function () {
      b.call(a(this));
    });
  });
}(jQuery), function (a) {
  "use strict";

  function b(b) {
    return this.each(function () {
      var e = a(this),
          f = e.data(c);

      if (!f) {
        var g = a.extend({}, d, e.data(), "object" == _typeof(b) && b);
        e.data(c, f = new h(e, g));
      }

      if ("string" == typeof b) {
        if (void 0 === f[b]) throw new Error("No method named " + b);
        f[b]();
      }
    });
  }

  var c = "lte.boxwidget",
      d = {
    animationSpeed: 500,
    collapseTrigger: '[data-widget="collapse"]',
    removeTrigger: '[data-widget="remove"]',
    collapseIcon: "fa-minus",
    expandIcon: "fa-plus",
    removeIcon: "fa-times"
  },
      e = {
    data: ".box",
    collapsed: ".collapsed-box",
    header: ".box-header",
    body: ".box-body",
    footer: ".box-footer",
    tools: ".box-tools"
  },
      f = {
    collapsed: "collapsed-box"
  },
      g = {
    collapsing: "collapsing.boxwidget",
    collapsed: "collapsed.boxwidget",
    expanding: "expanding.boxwidget",
    expanded: "expanded.boxwidget",
    removing: "removing.boxwidget",
    removed: "removed.boxwidget"
  },
      h = function h(a, b) {
    this.element = a, this.options = b, this._setUpListeners();
  };

  h.prototype.toggle = function () {
    a(this.element).is(e.collapsed) ? this.expand() : this.collapse();
  }, h.prototype.expand = function () {
    var b = a.Event(g.expanded),
        c = a.Event(g.expanding),
        d = this.options.collapseIcon,
        h = this.options.expandIcon;
    a(this.element).removeClass(f.collapsed), a(this.element).children(e.header + ", " + e.body + ", " + e.footer).children(e.tools).find("." + h).removeClass(h).addClass(d), a(this.element).children(e.body + ", " + e.footer).slideDown(this.options.animationSpeed, function () {
      a(this.element).trigger(b);
    }.bind(this)).trigger(c);
  }, h.prototype.collapse = function () {
    var b = a.Event(g.collapsed),
        c = (a.Event(g.collapsing), this.options.collapseIcon),
        d = this.options.expandIcon;
    a(this.element).children(e.header + ", " + e.body + ", " + e.footer).children(e.tools).find("." + c).removeClass(c).addClass(d), a(this.element).children(e.body + ", " + e.footer).slideUp(this.options.animationSpeed, function () {
      a(this.element).addClass(f.collapsed), a(this.element).trigger(b);
    }.bind(this)).trigger(expandingEvent);
  }, h.prototype.remove = function () {
    var b = a.Event(g.removed),
        c = a.Event(g.removing);
    a(this.element).slideUp(this.options.animationSpeed, function () {
      a(this.element).trigger(b), a(this.element).remove();
    }.bind(this)).trigger(c);
  }, h.prototype._setUpListeners = function () {
    var b = this;
    a(this.element).on("click", this.options.collapseTrigger, function (c) {
      return c && c.preventDefault(), b.toggle(a(this)), !1;
    }), a(this.element).on("click", this.options.removeTrigger, function (c) {
      return c && c.preventDefault(), b.remove(a(this)), !1;
    });
  };
  var i = a.fn.boxWidget;
  a.fn.boxWidget = b, a.fn.boxWidget.Constructor = h, a.fn.boxWidget.noConflict = function () {
    return a.fn.boxWidget = i, this;
  }, a(window).on("load", function () {
    a(e.data).each(function () {
      b.call(a(this));
    });
  });
}(jQuery), function (a) {
  "use strict";

  function b(b) {
    return this.each(function () {
      var e = a(this),
          f = e.data(c);

      if (!f) {
        var g = a.extend({}, d, e.data(), "object" == _typeof(b) && b);
        e.data(c, f = new h(e, g));
      }

      "string" == typeof b && f.toggle();
    });
  }

  var c = "lte.controlsidebar",
      d = {
    slide: !0
  },
      e = {
    sidebar: ".control-sidebar",
    data: '[data-toggle="control-sidebar"]',
    open: ".control-sidebar-open",
    bg: ".control-sidebar-bg",
    wrapper: ".wrapper",
    content: ".content-wrapper",
    boxed: ".layout-boxed"
  },
      f = {
    open: "control-sidebar-open",
    fixed: "fixed"
  },
      g = {
    collapsed: "collapsed.controlsidebar",
    expanded: "expanded.controlsidebar"
  },
      h = function h(a, b) {
    this.element = a, this.options = b, this.hasBindedResize = !1, this.init();
  };

  h.prototype.init = function () {
    a(this.element).is(e.data) || a(this).on("click", this.toggle), this.fix(), a(window).resize(function () {
      this.fix();
    }.bind(this));
  }, h.prototype.toggle = function (b) {
    b && b.preventDefault(), this.fix(), a(e.sidebar).is(e.open) || a("body").is(e.open) ? this.collapse() : this.expand();
  }, h.prototype.expand = function () {
    this.options.slide ? a(e.sidebar).addClass(f.open) : a("body").addClass(f.open), a(this.element).trigger(a.Event(g.expanded));
  }, h.prototype.collapse = function () {
    a("body, " + e.sidebar).removeClass(f.open), a(this.element).trigger(a.Event(g.collapsed));
  }, h.prototype.fix = function () {
    a("body").is(e.boxed) && this._fixForBoxed(a(e.bg));
  }, h.prototype._fixForBoxed = function (b) {
    b.css({
      position: "absolute",
      height: a(e.wrapper).height()
    });
  };
  var i = a.fn.controlSidebar;
  a.fn.controlSidebar = b, a.fn.controlSidebar.Constructor = h, a.fn.controlSidebar.noConflict = function () {
    return a.fn.controlSidebar = i, this;
  }, a(document).on("click", e.data, function (c) {
    c && c.preventDefault(), b.call(a(this), "toggle");
  });
}(jQuery), function (a) {
  "use strict";

  function b(b) {
    return this.each(function () {
      var d = a(this),
          e = d.data(c);
      e || d.data(c, e = new f(d)), "string" == typeof b && e.toggle(d);
    });
  }

  var c = "lte.directchat",
      d = {
    data: '[data-widget="chat-pane-toggle"]',
    box: ".direct-chat"
  },
      e = {
    open: "direct-chat-contacts-open"
  },
      f = function f(a) {
    this.element = a;
  };

  f.prototype.toggle = function (a) {
    a.parents(d.box).first().toggleClass(e.open);
  };

  var g = a.fn.directChat;
  a.fn.directChat = b, a.fn.directChat.Constructor = f, a.fn.directChat.noConflict = function () {
    return a.fn.directChat = g, this;
  }, a(document).on("click", d.data, function (c) {
    c && c.preventDefault(), b.call(a(this), "toggle");
  });
}(jQuery), function (a) {
  "use strict";

  function b(b) {
    return this.each(function () {
      var e = a(this),
          f = e.data(c);

      if (!f) {
        var h = a.extend({}, d, e.data(), "object" == _typeof(b) && b);
        e.data(c, f = new g(h));
      }

      if ("string" == typeof b) {
        if (void 0 === f[b]) throw new Error("No method named " + b);
        f[b]();
      }
    });
  }

  var c = "lte.layout",
      d = {
    slimscroll: !0,
    resetHeight: !0
  },
      e = {
    wrapper: ".wrapper",
    contentWrapper: ".content-wrapper",
    layoutBoxed: ".layout-boxed",
    mainFooter: ".main-footer",
    mainHeader: ".main-header",
    sidebar: ".sidebar",
    controlSidebar: ".control-sidebar",
    fixed: ".fixed",
    sidebarMenu: ".sidebar-menu",
    logo: ".main-header .logo"
  },
      f = {
    fixed: "fixed",
    holdTransition: "hold-transition"
  },
      g = function g(a) {
    this.options = a, this.bindedResize = !1, this.activate();
  };

  g.prototype.activate = function () {
    this.fix(), this.fixSidebar(), a("body").removeClass(f.holdTransition), this.options.resetHeight && a("body, html, " + e.wrapper).css({
      height: "auto",
      "min-height": "100%"
    }), this.bindedResize || (a(window).resize(function () {
      this.fix(), this.fixSidebar(), a(e.logo + ", " + e.sidebar).one("webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend", function () {
        this.fix(), this.fixSidebar();
      }.bind(this));
    }.bind(this)), this.bindedResize = !0), a(e.sidebarMenu).on("expanded.tree", function () {
      this.fix(), this.fixSidebar();
    }.bind(this)), a(e.sidebarMenu).on("collapsed.tree", function () {
      this.fix(), this.fixSidebar();
    }.bind(this));
  }, g.prototype.fix = function () {
    a(e.layoutBoxed + " > " + e.wrapper).css("overflow", "hidden");
    var b = a(e.mainFooter).outerHeight() || 0,
        c = a(e.mainHeader).outerHeight() || 0,
        d = c + b,
        g = a(window).height(),
        h = a(e.sidebar).height() || 0;
    if (a("body").hasClass(f.fixed)) a(e.contentWrapper).css("min-height", g - b);else {
      var i;
      g >= h + c ? (a(e.contentWrapper).css("min-height", g - d), i = g - d) : (a(e.contentWrapper).css("min-height", h), i = h);
      var j = a(e.controlSidebar);
      void 0 !== j && j.height() > i && a(e.contentWrapper).css("min-height", j.height());
    }
  }, g.prototype.fixSidebar = function () {
    if (!a("body").hasClass(f.fixed)) return void (void 0 !== a.fn.slimScroll && a(e.sidebar).slimScroll({
      destroy: !0
    }).height("auto"));
    this.options.slimscroll && void 0 !== a.fn.slimScroll && a(e.sidebar).slimScroll({
      height: a(window).height() - a(e.mainHeader).height() + "px"
    });
  };
  var h = a.fn.layout;
  a.fn.layout = b, a.fn.layout.Constuctor = g, a.fn.layout.noConflict = function () {
    return a.fn.layout = h, this;
  }, a(window).on("load", function () {
    b.call(a("body"));
  });
}(jQuery), function (a) {
  "use strict";

  function b(b) {
    return this.each(function () {
      var e = a(this),
          f = e.data(c);

      if (!f) {
        var g = a.extend({}, d, e.data(), "object" == _typeof(b) && b);
        e.data(c, f = new h(g));
      }

      "toggle" === b && f.toggle();
    });
  }

  var c = "lte.pushmenu",
      d = {
    collapseScreenSize: 767,
    expandOnHover: !1,
    expandTransitionDelay: 200
  },
      e = {
    collapsed: ".sidebar-collapse",
    open: ".sidebar-open",
    mainSidebar: ".main-sidebar",
    contentWrapper: ".content-wrapper",
    searchInput: ".sidebar-form .form-control",
    button: '[data-toggle="push-menu"]',
    mini: ".sidebar-mini",
    expanded: ".sidebar-expanded-on-hover",
    layoutFixed: ".fixed"
  },
      f = {
    collapsed: "sidebar-collapse",
    open: "sidebar-open",
    mini: "sidebar-mini",
    expanded: "sidebar-expanded-on-hover",
    expandFeature: "sidebar-mini-expand-feature",
    layoutFixed: "fixed"
  },
      g = {
    expanded: "expanded.pushMenu",
    collapsed: "collapsed.pushMenu"
  },
      h = function h(a) {
    this.options = a, this.init();
  };

  h.prototype.init = function () {
    (this.options.expandOnHover || a("body").is(e.mini + e.layoutFixed)) && (this.expandOnHover(), a("body").addClass(f.expandFeature)), a(e.contentWrapper).click(function () {
      a(window).width() <= this.options.collapseScreenSize && a("body").hasClass(f.open) && this.close();
    }.bind(this)), a(e.searchInput).click(function (a) {
      a.stopPropagation();
    });
  }, h.prototype.toggle = function () {
    var b = a(window).width(),
        c = !a("body").hasClass(f.collapsed);
    b <= this.options.collapseScreenSize && (c = a("body").hasClass(f.open)), c ? this.close() : this.open();
  }, h.prototype.open = function () {
    a(window).width() > this.options.collapseScreenSize ? a("body").removeClass(f.collapsed).trigger(a.Event(g.expanded)) : a("body").addClass(f.open).trigger(a.Event(g.expanded));
  }, h.prototype.close = function () {
    a(window).width() > this.options.collapseScreenSize ? a("body").addClass(f.collapsed).trigger(a.Event(g.collapsed)) : a("body").removeClass(f.open + " " + f.collapsed).trigger(a.Event(g.collapsed));
  }, h.prototype.expandOnHover = function () {
    a(e.mainSidebar).hover(function () {
      a("body").is(e.mini + e.collapsed) && a(window).width() > this.options.collapseScreenSize && this.expand();
    }.bind(this), function () {
      a("body").is(e.expanded) && this.collapse();
    }.bind(this));
  }, h.prototype.expand = function () {
    setTimeout(function () {
      a("body").removeClass(f.collapsed).addClass(f.expanded);
    }, this.options.expandTransitionDelay);
  }, h.prototype.collapse = function () {
    setTimeout(function () {
      a("body").removeClass(f.expanded).addClass(f.collapsed);
    }, this.options.expandTransitionDelay);
  };
  var i = a.fn.pushMenu;
  a.fn.pushMenu = b, a.fn.pushMenu.Constructor = h, a.fn.pushMenu.noConflict = function () {
    return a.fn.pushMenu = i, this;
  }, a(document).on("click", e.button, function (c) {
    c.preventDefault(), b.call(a(this), "toggle");
  }), a(window).on("load", function () {
    b.call(a(e.button));
  });
}(jQuery), function (a) {
  "use strict";

  function b(b) {
    return this.each(function () {
      var e = a(this),
          f = e.data(c);

      if (!f) {
        var h = a.extend({}, d, e.data(), "object" == _typeof(b) && b);
        e.data(c, f = new g(e, h));
      }

      if ("string" == typeof f) {
        if (void 0 === f[b]) throw new Error("No method named " + b);
        f[b]();
      }
    });
  }

  var c = "lte.todolist",
      d = {
    onCheck: function onCheck(a) {
      return a;
    },
    onUnCheck: function onUnCheck(a) {
      return a;
    }
  },
      e = {
    data: '[data-widget="todo-list"]'
  },
      f = {
    done: "done"
  },
      g = function g(a, b) {
    this.element = a, this.options = b, this._setUpListeners();
  };

  g.prototype.toggle = function (a) {
    if (a.parents(e.li).first().toggleClass(f.done), !a.prop("checked")) return void this.unCheck(a);
    this.check(a);
  }, g.prototype.check = function (a) {
    this.options.onCheck.call(a);
  }, g.prototype.unCheck = function (a) {
    this.options.onUnCheck.call(a);
  }, g.prototype._setUpListeners = function () {
    var b = this;
    a(this.element).on("change ifChanged", "input:checkbox", function () {
      b.toggle(a(this));
    });
  };
  var h = a.fn.todoList;
  a.fn.todoList = b, a.fn.todoList.Constructor = g, a.fn.todoList.noConflict = function () {
    return a.fn.todoList = h, this;
  }, a(window).on("load", function () {
    a(e.data).each(function () {
      b.call(a(this));
    });
  });
}(jQuery), function (a) {
  "use strict";

  function b(b) {
    return this.each(function () {
      var e = a(this);

      if (!e.data(c)) {
        var f = a.extend({}, d, e.data(), "object" == _typeof(b) && b);
        e.data(c, new h(e, f));
      }
    });
  }

  var c = "lte.tree",
      d = {
    animationSpeed: 500,
    accordion: !0,
    followLink: !1,
    trigger: ".treeview a"
  },
      e = {
    tree: ".tree",
    treeview: ".treeview",
    treeviewMenu: ".treeview-menu",
    open: ".menu-open, .active",
    li: "li",
    data: '[data-widget="tree"]',
    active: ".active"
  },
      f = {
    open: "menu-open",
    tree: "tree"
  },
      g = {
    collapsed: "collapsed.tree",
    expanded: "expanded.tree"
  },
      h = function h(b, c) {
    this.element = b, this.options = c, a(this.element).addClass(f.tree), a(e.treeview + e.active, this.element).addClass(f.open), this._setUpListeners();
  };

  h.prototype.toggle = function (a, b) {
    var c = a.next(e.treeviewMenu),
        d = a.parent(),
        g = d.hasClass(f.open);
    d.is(e.treeview) && (this.options.followLink && "#" !== a.attr("href") || b.preventDefault(), g ? this.collapse(c, d) : this.expand(c, d));
  }, h.prototype.expand = function (b, c) {
    var d = a.Event(g.expanded);

    if (this.options.accordion) {
      var h = c.siblings(e.open),
          i = h.children(e.treeviewMenu);
      this.collapse(i, h);
    }

    c.addClass(f.open), b.slideDown(this.options.animationSpeed, function () {
      a(this.element).trigger(d);
    }.bind(this));
  }, h.prototype.collapse = function (b, c) {
    var d = a.Event(g.collapsed);
    c.removeClass(f.open), b.slideUp(this.options.animationSpeed, function () {
      a(this.element).trigger(d);
    }.bind(this));
  }, h.prototype._setUpListeners = function () {
    var b = this;
    a(this.element).on("click", this.options.trigger, function (c) {
      b.toggle(a(this), c);
    });
  };
  var i = a.fn.tree;
  a.fn.tree = b, a.fn.tree.Constructor = h, a.fn.tree.noConflict = function () {
    return a.fn.tree = i, this;
  }, a(window).on("load", function () {
    a(e.data).each(function () {
      b.call(a(this));
    });
  });
}(jQuery);

/***/ }),

/***/ "./resources/js/admin/bootstrap-datepicker.min.js":
/*!********************************************************!*\
  !*** ./resources/js/admin/bootstrap-datepicker.min.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*!
 * Datepicker for Bootstrap v1.8.0 (https://github.com/uxsolutions/bootstrap-datepicker)
 *
 * Licensed under the Apache License v2.0 (http://www.apache.org/licenses/LICENSE-2.0)
 */
!function (a) {
   true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (a),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
}(function (a, b) {
  function c() {
    return new Date(Date.UTC.apply(Date, arguments));
  }

  function d() {
    var a = new Date();
    return c(a.getFullYear(), a.getMonth(), a.getDate());
  }

  function e(a, b) {
    return a.getUTCFullYear() === b.getUTCFullYear() && a.getUTCMonth() === b.getUTCMonth() && a.getUTCDate() === b.getUTCDate();
  }

  function f(c, d) {
    return function () {
      return d !== b && a.fn.datepicker.deprecated(d), this[c].apply(this, arguments);
    };
  }

  function g(a) {
    return a && !isNaN(a.getTime());
  }

  function h(b, c) {
    function d(a, b) {
      return b.toLowerCase();
    }

    var e,
        f = a(b).data(),
        g = {},
        h = new RegExp("^" + c.toLowerCase() + "([A-Z])");
    c = new RegExp("^" + c.toLowerCase());

    for (var i in f) {
      c.test(i) && (e = i.replace(h, d), g[e] = f[i]);
    }

    return g;
  }

  function i(b) {
    var c = {};

    if (q[b] || (b = b.split("-")[0], q[b])) {
      var d = q[b];
      return a.each(p, function (a, b) {
        b in d && (c[b] = d[b]);
      }), c;
    }
  }

  var j = function () {
    var b = {
      get: function get(a) {
        return this.slice(a)[0];
      },
      contains: function contains(a) {
        for (var b = a && a.valueOf(), c = 0, d = this.length; c < d; c++) {
          if (0 <= this[c].valueOf() - b && this[c].valueOf() - b < 864e5) return c;
        }

        return -1;
      },
      remove: function remove(a) {
        this.splice(a, 1);
      },
      replace: function replace(b) {
        b && (a.isArray(b) || (b = [b]), this.clear(), this.push.apply(this, b));
      },
      clear: function clear() {
        this.length = 0;
      },
      copy: function copy() {
        var a = new j();
        return a.replace(this), a;
      }
    };
    return function () {
      var c = [];
      return c.push.apply(c, arguments), a.extend(c, b), c;
    };
  }(),
      k = function k(b, c) {
    a.data(b, "datepicker", this), this._process_options(c), this.dates = new j(), this.viewDate = this.o.defaultViewDate, this.focusDate = null, this.element = a(b), this.isInput = this.element.is("input"), this.inputField = this.isInput ? this.element : this.element.find("input"), this.component = !!this.element.hasClass("date") && this.element.find(".add-on, .input-group-addon, .btn"), this.component && 0 === this.component.length && (this.component = !1), this.isInline = !this.component && this.element.is("div"), this.picker = a(r.template), this._check_template(this.o.templates.leftArrow) && this.picker.find(".prev").html(this.o.templates.leftArrow), this._check_template(this.o.templates.rightArrow) && this.picker.find(".next").html(this.o.templates.rightArrow), this._buildEvents(), this._attachEvents(), this.isInline ? this.picker.addClass("datepicker-inline").appendTo(this.element) : this.picker.addClass("datepicker-dropdown dropdown-menu"), this.o.rtl && this.picker.addClass("datepicker-rtl"), this.o.calendarWeeks && this.picker.find(".datepicker-days .datepicker-switch, thead .datepicker-title, tfoot .today, tfoot .clear").attr("colspan", function (a, b) {
      return Number(b) + 1;
    }), this._process_options({
      startDate: this._o.startDate,
      endDate: this._o.endDate,
      daysOfWeekDisabled: this.o.daysOfWeekDisabled,
      daysOfWeekHighlighted: this.o.daysOfWeekHighlighted,
      datesDisabled: this.o.datesDisabled
    }), this._allow_update = !1, this.setViewMode(this.o.startView), this._allow_update = !0, this.fillDow(), this.fillMonths(), this.update(), this.isInline && this.show();
  };

  k.prototype = {
    constructor: k,
    _resolveViewName: function _resolveViewName(b) {
      return a.each(r.viewModes, function (c, d) {
        if (b === c || a.inArray(b, d.names) !== -1) return b = c, !1;
      }), b;
    },
    _resolveDaysOfWeek: function _resolveDaysOfWeek(b) {
      return a.isArray(b) || (b = b.split(/[,\s]*/)), a.map(b, Number);
    },
    _check_template: function _check_template(c) {
      try {
        if (c === b || "" === c) return !1;
        if ((c.match(/[<>]/g) || []).length <= 0) return !0;
        var d = a(c);
        return d.length > 0;
      } catch (a) {
        return !1;
      }
    },
    _process_options: function _process_options(b) {
      this._o = a.extend({}, this._o, b);
      var e = this.o = a.extend({}, this._o),
          f = e.language;
      q[f] || (f = f.split("-")[0], q[f] || (f = o.language)), e.language = f, e.startView = this._resolveViewName(e.startView), e.minViewMode = this._resolveViewName(e.minViewMode), e.maxViewMode = this._resolveViewName(e.maxViewMode), e.startView = Math.max(this.o.minViewMode, Math.min(this.o.maxViewMode, e.startView)), e.multidate !== !0 && (e.multidate = Number(e.multidate) || !1, e.multidate !== !1 && (e.multidate = Math.max(0, e.multidate))), e.multidateSeparator = String(e.multidateSeparator), e.weekStart %= 7, e.weekEnd = (e.weekStart + 6) % 7;
      var g = r.parseFormat(e.format);
      e.startDate !== -(1 / 0) && (e.startDate ? e.startDate instanceof Date ? e.startDate = this._local_to_utc(this._zero_time(e.startDate)) : e.startDate = r.parseDate(e.startDate, g, e.language, e.assumeNearbyYear) : e.startDate = -(1 / 0)), e.endDate !== 1 / 0 && (e.endDate ? e.endDate instanceof Date ? e.endDate = this._local_to_utc(this._zero_time(e.endDate)) : e.endDate = r.parseDate(e.endDate, g, e.language, e.assumeNearbyYear) : e.endDate = 1 / 0), e.daysOfWeekDisabled = this._resolveDaysOfWeek(e.daysOfWeekDisabled || []), e.daysOfWeekHighlighted = this._resolveDaysOfWeek(e.daysOfWeekHighlighted || []), e.datesDisabled = e.datesDisabled || [], a.isArray(e.datesDisabled) || (e.datesDisabled = e.datesDisabled.split(",")), e.datesDisabled = a.map(e.datesDisabled, function (a) {
        return r.parseDate(a, g, e.language, e.assumeNearbyYear);
      });
      var h = String(e.orientation).toLowerCase().split(/\s+/g),
          i = e.orientation.toLowerCase();
      if (h = a.grep(h, function (a) {
        return /^auto|left|right|top|bottom$/.test(a);
      }), e.orientation = {
        x: "auto",
        y: "auto"
      }, i && "auto" !== i) {
        if (1 === h.length) switch (h[0]) {
          case "top":
          case "bottom":
            e.orientation.y = h[0];
            break;

          case "left":
          case "right":
            e.orientation.x = h[0];
        } else i = a.grep(h, function (a) {
          return /^left|right$/.test(a);
        }), e.orientation.x = i[0] || "auto", i = a.grep(h, function (a) {
          return /^top|bottom$/.test(a);
        }), e.orientation.y = i[0] || "auto";
      } else ;
      if (e.defaultViewDate instanceof Date || "string" == typeof e.defaultViewDate) e.defaultViewDate = r.parseDate(e.defaultViewDate, g, e.language, e.assumeNearbyYear);else if (e.defaultViewDate) {
        var j = e.defaultViewDate.year || new Date().getFullYear(),
            k = e.defaultViewDate.month || 0,
            l = e.defaultViewDate.day || 1;
        e.defaultViewDate = c(j, k, l);
      } else e.defaultViewDate = d();
    },
    _events: [],
    _secondaryEvents: [],
    _applyEvents: function _applyEvents(a) {
      for (var c, d, e, f = 0; f < a.length; f++) {
        c = a[f][0], 2 === a[f].length ? (d = b, e = a[f][1]) : 3 === a[f].length && (d = a[f][1], e = a[f][2]), c.on(e, d);
      }
    },
    _unapplyEvents: function _unapplyEvents(a) {
      for (var c, d, e, f = 0; f < a.length; f++) {
        c = a[f][0], 2 === a[f].length ? (e = b, d = a[f][1]) : 3 === a[f].length && (e = a[f][1], d = a[f][2]), c.off(d, e);
      }
    },
    _buildEvents: function _buildEvents() {
      var b = {
        keyup: a.proxy(function (b) {
          a.inArray(b.keyCode, [27, 37, 39, 38, 40, 32, 13, 9]) === -1 && this.update();
        }, this),
        keydown: a.proxy(this.keydown, this),
        paste: a.proxy(this.paste, this)
      };
      this.o.showOnFocus === !0 && (b.focus = a.proxy(this.show, this)), this.isInput ? this._events = [[this.element, b]] : this.component && this.inputField.length ? this._events = [[this.inputField, b], [this.component, {
        click: a.proxy(this.show, this)
      }]] : this._events = [[this.element, {
        click: a.proxy(this.show, this),
        keydown: a.proxy(this.keydown, this)
      }]], this._events.push([this.element, "*", {
        blur: a.proxy(function (a) {
          this._focused_from = a.target;
        }, this)
      }], [this.element, {
        blur: a.proxy(function (a) {
          this._focused_from = a.target;
        }, this)
      }]), this.o.immediateUpdates && this._events.push([this.element, {
        "changeYear changeMonth": a.proxy(function (a) {
          this.update(a.date);
        }, this)
      }]), this._secondaryEvents = [[this.picker, {
        click: a.proxy(this.click, this)
      }], [this.picker, ".prev, .next", {
        click: a.proxy(this.navArrowsClick, this)
      }], [this.picker, ".day:not(.disabled)", {
        click: a.proxy(this.dayCellClick, this)
      }], [a(window), {
        resize: a.proxy(this.place, this)
      }], [a(document), {
        "mousedown touchstart": a.proxy(function (a) {
          this.element.is(a.target) || this.element.find(a.target).length || this.picker.is(a.target) || this.picker.find(a.target).length || this.isInline || this.hide();
        }, this)
      }]];
    },
    _attachEvents: function _attachEvents() {
      this._detachEvents(), this._applyEvents(this._events);
    },
    _detachEvents: function _detachEvents() {
      this._unapplyEvents(this._events);
    },
    _attachSecondaryEvents: function _attachSecondaryEvents() {
      this._detachSecondaryEvents(), this._applyEvents(this._secondaryEvents);
    },
    _detachSecondaryEvents: function _detachSecondaryEvents() {
      this._unapplyEvents(this._secondaryEvents);
    },
    _trigger: function _trigger(b, c) {
      var d = c || this.dates.get(-1),
          e = this._utc_to_local(d);

      this.element.trigger({
        type: b,
        date: e,
        viewMode: this.viewMode,
        dates: a.map(this.dates, this._utc_to_local),
        format: a.proxy(function (a, b) {
          0 === arguments.length ? (a = this.dates.length - 1, b = this.o.format) : "string" == typeof a && (b = a, a = this.dates.length - 1), b = b || this.o.format;
          var c = this.dates.get(a);
          return r.formatDate(c, b, this.o.language);
        }, this)
      });
    },
    show: function show() {
      if (!(this.inputField.prop("disabled") || this.inputField.prop("readonly") && this.o.enableOnReadonly === !1)) return this.isInline || this.picker.appendTo(this.o.container), this.place(), this.picker.show(), this._attachSecondaryEvents(), this._trigger("show"), (window.navigator.msMaxTouchPoints || "ontouchstart" in document) && this.o.disableTouchKeyboard && a(this.element).blur(), this;
    },
    hide: function hide() {
      return this.isInline || !this.picker.is(":visible") ? this : (this.focusDate = null, this.picker.hide().detach(), this._detachSecondaryEvents(), this.setViewMode(this.o.startView), this.o.forceParse && this.inputField.val() && this.setValue(), this._trigger("hide"), this);
    },
    destroy: function destroy() {
      return this.hide(), this._detachEvents(), this._detachSecondaryEvents(), this.picker.remove(), delete this.element.data().datepicker, this.isInput || delete this.element.data().date, this;
    },
    paste: function paste(b) {
      var c;
      if (b.originalEvent.clipboardData && b.originalEvent.clipboardData.types && a.inArray("text/plain", b.originalEvent.clipboardData.types) !== -1) c = b.originalEvent.clipboardData.getData("text/plain");else {
        if (!window.clipboardData) return;
        c = window.clipboardData.getData("Text");
      }
      this.setDate(c), this.update(), b.preventDefault();
    },
    _utc_to_local: function _utc_to_local(a) {
      if (!a) return a;
      var b = new Date(a.getTime() + 6e4 * a.getTimezoneOffset());
      return b.getTimezoneOffset() !== a.getTimezoneOffset() && (b = new Date(a.getTime() + 6e4 * b.getTimezoneOffset())), b;
    },
    _local_to_utc: function _local_to_utc(a) {
      return a && new Date(a.getTime() - 6e4 * a.getTimezoneOffset());
    },
    _zero_time: function _zero_time(a) {
      return a && new Date(a.getFullYear(), a.getMonth(), a.getDate());
    },
    _zero_utc_time: function _zero_utc_time(a) {
      return a && c(a.getUTCFullYear(), a.getUTCMonth(), a.getUTCDate());
    },
    getDates: function getDates() {
      return a.map(this.dates, this._utc_to_local);
    },
    getUTCDates: function getUTCDates() {
      return a.map(this.dates, function (a) {
        return new Date(a);
      });
    },
    getDate: function getDate() {
      return this._utc_to_local(this.getUTCDate());
    },
    getUTCDate: function getUTCDate() {
      var a = this.dates.get(-1);
      return a !== b ? new Date(a) : null;
    },
    clearDates: function clearDates() {
      this.inputField.val(""), this.update(), this._trigger("changeDate"), this.o.autoclose && this.hide();
    },
    setDates: function setDates() {
      var b = a.isArray(arguments[0]) ? arguments[0] : arguments;
      return this.update.apply(this, b), this._trigger("changeDate"), this.setValue(), this;
    },
    setUTCDates: function setUTCDates() {
      var b = a.isArray(arguments[0]) ? arguments[0] : arguments;
      return this.setDates.apply(this, a.map(b, this._utc_to_local)), this;
    },
    setDate: f("setDates"),
    setUTCDate: f("setUTCDates"),
    remove: f("destroy", "Method `remove` is deprecated and will be removed in version 2.0. Use `destroy` instead"),
    setValue: function setValue() {
      var a = this.getFormattedDate();
      return this.inputField.val(a), this;
    },
    getFormattedDate: function getFormattedDate(c) {
      c === b && (c = this.o.format);
      var d = this.o.language;
      return a.map(this.dates, function (a) {
        return r.formatDate(a, c, d);
      }).join(this.o.multidateSeparator);
    },
    getStartDate: function getStartDate() {
      return this.o.startDate;
    },
    setStartDate: function setStartDate(a) {
      return this._process_options({
        startDate: a
      }), this.update(), this.updateNavArrows(), this;
    },
    getEndDate: function getEndDate() {
      return this.o.endDate;
    },
    setEndDate: function setEndDate(a) {
      return this._process_options({
        endDate: a
      }), this.update(), this.updateNavArrows(), this;
    },
    setDaysOfWeekDisabled: function setDaysOfWeekDisabled(a) {
      return this._process_options({
        daysOfWeekDisabled: a
      }), this.update(), this;
    },
    setDaysOfWeekHighlighted: function setDaysOfWeekHighlighted(a) {
      return this._process_options({
        daysOfWeekHighlighted: a
      }), this.update(), this;
    },
    setDatesDisabled: function setDatesDisabled(a) {
      return this._process_options({
        datesDisabled: a
      }), this.update(), this;
    },
    place: function place() {
      if (this.isInline) return this;
      var b = this.picker.outerWidth(),
          c = this.picker.outerHeight(),
          d = 10,
          e = a(this.o.container),
          f = e.width(),
          g = "body" === this.o.container ? a(document).scrollTop() : e.scrollTop(),
          h = e.offset(),
          i = [0];
      this.element.parents().each(function () {
        var b = a(this).css("z-index");
        "auto" !== b && 0 !== Number(b) && i.push(Number(b));
      });
      var j = Math.max.apply(Math, i) + this.o.zIndexOffset,
          k = this.component ? this.component.parent().offset() : this.element.offset(),
          l = this.component ? this.component.outerHeight(!0) : this.element.outerHeight(!1),
          m = this.component ? this.component.outerWidth(!0) : this.element.outerWidth(!1),
          n = k.left - h.left,
          o = k.top - h.top;
      "body" !== this.o.container && (o += g), this.picker.removeClass("datepicker-orient-top datepicker-orient-bottom datepicker-orient-right datepicker-orient-left"), "auto" !== this.o.orientation.x ? (this.picker.addClass("datepicker-orient-" + this.o.orientation.x), "right" === this.o.orientation.x && (n -= b - m)) : k.left < 0 ? (this.picker.addClass("datepicker-orient-left"), n -= k.left - d) : n + b > f ? (this.picker.addClass("datepicker-orient-right"), n += m - b) : this.o.rtl ? this.picker.addClass("datepicker-orient-right") : this.picker.addClass("datepicker-orient-left");
      var p,
          q = this.o.orientation.y;

      if ("auto" === q && (p = -g + o - c, q = p < 0 ? "bottom" : "top"), this.picker.addClass("datepicker-orient-" + q), "top" === q ? o -= c + parseInt(this.picker.css("padding-top")) : o += l, this.o.rtl) {
        var r = f - (n + m);
        this.picker.css({
          top: o,
          right: r,
          zIndex: j
        });
      } else this.picker.css({
        top: o,
        left: n,
        zIndex: j
      });

      return this;
    },
    _allow_update: !0,
    update: function update() {
      if (!this._allow_update) return this;
      var b = this.dates.copy(),
          c = [],
          d = !1;
      return arguments.length ? (a.each(arguments, a.proxy(function (a, b) {
        b instanceof Date && (b = this._local_to_utc(b)), c.push(b);
      }, this)), d = !0) : (c = this.isInput ? this.element.val() : this.element.data("date") || this.inputField.val(), c = c && this.o.multidate ? c.split(this.o.multidateSeparator) : [c], delete this.element.data().date), c = a.map(c, a.proxy(function (a) {
        return r.parseDate(a, this.o.format, this.o.language, this.o.assumeNearbyYear);
      }, this)), c = a.grep(c, a.proxy(function (a) {
        return !this.dateWithinRange(a) || !a;
      }, this), !0), this.dates.replace(c), this.o.updateViewDate && (this.dates.length ? this.viewDate = new Date(this.dates.get(-1)) : this.viewDate < this.o.startDate ? this.viewDate = new Date(this.o.startDate) : this.viewDate > this.o.endDate ? this.viewDate = new Date(this.o.endDate) : this.viewDate = this.o.defaultViewDate), d ? (this.setValue(), this.element.change()) : this.dates.length && String(b) !== String(this.dates) && d && (this._trigger("changeDate"), this.element.change()), !this.dates.length && b.length && (this._trigger("clearDate"), this.element.change()), this.fill(), this;
    },
    fillDow: function fillDow() {
      if (this.o.showWeekDays) {
        var b = this.o.weekStart,
            c = "<tr>";

        for (this.o.calendarWeeks && (c += '<th class="cw">&#160;</th>'); b < this.o.weekStart + 7;) {
          c += '<th class="dow', a.inArray(b, this.o.daysOfWeekDisabled) !== -1 && (c += " disabled"), c += '">' + q[this.o.language].daysMin[b++ % 7] + "</th>";
        }

        c += "</tr>", this.picker.find(".datepicker-days thead").append(c);
      }
    },
    fillMonths: function fillMonths() {
      for (var a, b = this._utc_to_local(this.viewDate), c = "", d = 0; d < 12; d++) {
        a = b && b.getMonth() === d ? " focused" : "", c += '<span class="month' + a + '">' + q[this.o.language].monthsShort[d] + "</span>";
      }

      this.picker.find(".datepicker-months td").html(c);
    },
    setRange: function setRange(b) {
      b && b.length ? this.range = a.map(b, function (a) {
        return a.valueOf();
      }) : delete this.range, this.fill();
    },
    getClassNames: function getClassNames(b) {
      var c = [],
          f = this.viewDate.getUTCFullYear(),
          g = this.viewDate.getUTCMonth(),
          h = d();
      return b.getUTCFullYear() < f || b.getUTCFullYear() === f && b.getUTCMonth() < g ? c.push("old") : (b.getUTCFullYear() > f || b.getUTCFullYear() === f && b.getUTCMonth() > g) && c.push("new"), this.focusDate && b.valueOf() === this.focusDate.valueOf() && c.push("focused"), this.o.todayHighlight && e(b, h) && c.push("today"), this.dates.contains(b) !== -1 && c.push("active"), this.dateWithinRange(b) || c.push("disabled"), this.dateIsDisabled(b) && c.push("disabled", "disabled-date"), a.inArray(b.getUTCDay(), this.o.daysOfWeekHighlighted) !== -1 && c.push("highlighted"), this.range && (b > this.range[0] && b < this.range[this.range.length - 1] && c.push("range"), a.inArray(b.valueOf(), this.range) !== -1 && c.push("selected"), b.valueOf() === this.range[0] && c.push("range-start"), b.valueOf() === this.range[this.range.length - 1] && c.push("range-end")), c;
    },
    _fill_yearsView: function _fill_yearsView(c, d, e, f, g, h, i) {
      for (var j, k, l, m = "", n = e / 10, o = this.picker.find(c), p = Math.floor(f / e) * e, q = p + 9 * n, r = Math.floor(this.viewDate.getFullYear() / n) * n, s = a.map(this.dates, function (a) {
        return Math.floor(a.getUTCFullYear() / n) * n;
      }), t = p - n; t <= q + n; t += n) {
        j = [d], k = null, t === p - n ? j.push("old") : t === q + n && j.push("new"), a.inArray(t, s) !== -1 && j.push("active"), (t < g || t > h) && j.push("disabled"), t === r && j.push("focused"), i !== a.noop && (l = i(new Date(t, 0, 1)), l === b ? l = {} : "boolean" == typeof l ? l = {
          enabled: l
        } : "string" == typeof l && (l = {
          classes: l
        }), l.enabled === !1 && j.push("disabled"), l.classes && (j = j.concat(l.classes.split(/\s+/))), l.tooltip && (k = l.tooltip)), m += '<span class="' + j.join(" ") + '"' + (k ? ' title="' + k + '"' : "") + ">" + t + "</span>";
      }

      o.find(".datepicker-switch").text(p + "-" + q), o.find("td").html(m);
    },
    fill: function fill() {
      var d,
          e,
          f = new Date(this.viewDate),
          g = f.getUTCFullYear(),
          h = f.getUTCMonth(),
          i = this.o.startDate !== -(1 / 0) ? this.o.startDate.getUTCFullYear() : -(1 / 0),
          j = this.o.startDate !== -(1 / 0) ? this.o.startDate.getUTCMonth() : -(1 / 0),
          k = this.o.endDate !== 1 / 0 ? this.o.endDate.getUTCFullYear() : 1 / 0,
          l = this.o.endDate !== 1 / 0 ? this.o.endDate.getUTCMonth() : 1 / 0,
          m = q[this.o.language].today || q.en.today || "",
          n = q[this.o.language].clear || q.en.clear || "",
          o = q[this.o.language].titleFormat || q.en.titleFormat;

      if (!isNaN(g) && !isNaN(h)) {
        this.picker.find(".datepicker-days .datepicker-switch").text(r.formatDate(f, o, this.o.language)), this.picker.find("tfoot .today").text(m).css("display", this.o.todayBtn === !0 || "linked" === this.o.todayBtn ? "table-cell" : "none"), this.picker.find("tfoot .clear").text(n).css("display", this.o.clearBtn === !0 ? "table-cell" : "none"), this.picker.find("thead .datepicker-title").text(this.o.title).css("display", "string" == typeof this.o.title && "" !== this.o.title ? "table-cell" : "none"), this.updateNavArrows(), this.fillMonths();
        var p = c(g, h, 0),
            s = p.getUTCDate();
        p.setUTCDate(s - (p.getUTCDay() - this.o.weekStart + 7) % 7);
        var t = new Date(p);
        p.getUTCFullYear() < 100 && t.setUTCFullYear(p.getUTCFullYear()), t.setUTCDate(t.getUTCDate() + 42), t = t.valueOf();

        for (var u, v, w = []; p.valueOf() < t;) {
          if (u = p.getUTCDay(), u === this.o.weekStart && (w.push("<tr>"), this.o.calendarWeeks)) {
            var x = new Date(+p + (this.o.weekStart - u - 7) % 7 * 864e5),
                y = new Date(Number(x) + (11 - x.getUTCDay()) % 7 * 864e5),
                z = new Date(Number(z = c(y.getUTCFullYear(), 0, 1)) + (11 - z.getUTCDay()) % 7 * 864e5),
                A = (y - z) / 864e5 / 7 + 1;
            w.push('<td class="cw">' + A + "</td>");
          }

          v = this.getClassNames(p), v.push("day");
          var B = p.getUTCDate();
          this.o.beforeShowDay !== a.noop && (e = this.o.beforeShowDay(this._utc_to_local(p)), e === b ? e = {} : "boolean" == typeof e ? e = {
            enabled: e
          } : "string" == typeof e && (e = {
            classes: e
          }), e.enabled === !1 && v.push("disabled"), e.classes && (v = v.concat(e.classes.split(/\s+/))), e.tooltip && (d = e.tooltip), e.content && (B = e.content)), v = a.isFunction(a.uniqueSort) ? a.uniqueSort(v) : a.unique(v), w.push('<td class="' + v.join(" ") + '"' + (d ? ' title="' + d + '"' : "") + ' data-date="' + p.getTime().toString() + '">' + B + "</td>"), d = null, u === this.o.weekEnd && w.push("</tr>"), p.setUTCDate(p.getUTCDate() + 1);
        }

        this.picker.find(".datepicker-days tbody").html(w.join(""));
        var C = q[this.o.language].monthsTitle || q.en.monthsTitle || "Months",
            D = this.picker.find(".datepicker-months").find(".datepicker-switch").text(this.o.maxViewMode < 2 ? C : g).end().find("tbody span").removeClass("active");

        if (a.each(this.dates, function (a, b) {
          b.getUTCFullYear() === g && D.eq(b.getUTCMonth()).addClass("active");
        }), (g < i || g > k) && D.addClass("disabled"), g === i && D.slice(0, j).addClass("disabled"), g === k && D.slice(l + 1).addClass("disabled"), this.o.beforeShowMonth !== a.noop) {
          var E = this;
          a.each(D, function (c, d) {
            var e = new Date(g, c, 1),
                f = E.o.beforeShowMonth(e);
            f === b ? f = {} : "boolean" == typeof f ? f = {
              enabled: f
            } : "string" == typeof f && (f = {
              classes: f
            }), f.enabled !== !1 || a(d).hasClass("disabled") || a(d).addClass("disabled"), f.classes && a(d).addClass(f.classes), f.tooltip && a(d).prop("title", f.tooltip);
          });
        }

        this._fill_yearsView(".datepicker-years", "year", 10, g, i, k, this.o.beforeShowYear), this._fill_yearsView(".datepicker-decades", "decade", 100, g, i, k, this.o.beforeShowDecade), this._fill_yearsView(".datepicker-centuries", "century", 1e3, g, i, k, this.o.beforeShowCentury);
      }
    },
    updateNavArrows: function updateNavArrows() {
      if (this._allow_update) {
        var a,
            b,
            c = new Date(this.viewDate),
            d = c.getUTCFullYear(),
            e = c.getUTCMonth(),
            f = this.o.startDate !== -(1 / 0) ? this.o.startDate.getUTCFullYear() : -(1 / 0),
            g = this.o.startDate !== -(1 / 0) ? this.o.startDate.getUTCMonth() : -(1 / 0),
            h = this.o.endDate !== 1 / 0 ? this.o.endDate.getUTCFullYear() : 1 / 0,
            i = this.o.endDate !== 1 / 0 ? this.o.endDate.getUTCMonth() : 1 / 0,
            j = 1;

        switch (this.viewMode) {
          case 4:
            j *= 10;

          case 3:
            j *= 10;

          case 2:
            j *= 10;

          case 1:
            a = Math.floor(d / j) * j < f, b = Math.floor(d / j) * j + j > h;
            break;

          case 0:
            a = d <= f && e < g, b = d >= h && e > i;
        }

        this.picker.find(".prev").toggleClass("disabled", a), this.picker.find(".next").toggleClass("disabled", b);
      }
    },
    click: function click(b) {
      b.preventDefault(), b.stopPropagation();
      var e, f, g, h;
      e = a(b.target), e.hasClass("datepicker-switch") && this.viewMode !== this.o.maxViewMode && this.setViewMode(this.viewMode + 1), e.hasClass("today") && !e.hasClass("day") && (this.setViewMode(0), this._setDate(d(), "linked" === this.o.todayBtn ? null : "view")), e.hasClass("clear") && this.clearDates(), e.hasClass("disabled") || (e.hasClass("month") || e.hasClass("year") || e.hasClass("decade") || e.hasClass("century")) && (this.viewDate.setUTCDate(1), f = 1, 1 === this.viewMode ? (h = e.parent().find("span").index(e), g = this.viewDate.getUTCFullYear(), this.viewDate.setUTCMonth(h)) : (h = 0, g = Number(e.text()), this.viewDate.setUTCFullYear(g)), this._trigger(r.viewModes[this.viewMode - 1].e, this.viewDate), this.viewMode === this.o.minViewMode ? this._setDate(c(g, h, f)) : (this.setViewMode(this.viewMode - 1), this.fill())), this.picker.is(":visible") && this._focused_from && this._focused_from.focus(), delete this._focused_from;
    },
    dayCellClick: function dayCellClick(b) {
      var c = a(b.currentTarget),
          d = c.data("date"),
          e = new Date(d);
      this.o.updateViewDate && (e.getUTCFullYear() !== this.viewDate.getUTCFullYear() && this._trigger("changeYear", this.viewDate), e.getUTCMonth() !== this.viewDate.getUTCMonth() && this._trigger("changeMonth", this.viewDate)), this._setDate(e);
    },
    navArrowsClick: function navArrowsClick(b) {
      var c = a(b.currentTarget),
          d = c.hasClass("prev") ? -1 : 1;
      0 !== this.viewMode && (d *= 12 * r.viewModes[this.viewMode].navStep), this.viewDate = this.moveMonth(this.viewDate, d), this._trigger(r.viewModes[this.viewMode].e, this.viewDate), this.fill();
    },
    _toggle_multidate: function _toggle_multidate(a) {
      var b = this.dates.contains(a);
      if (a || this.dates.clear(), b !== -1 ? (this.o.multidate === !0 || this.o.multidate > 1 || this.o.toggleActive) && this.dates.remove(b) : this.o.multidate === !1 ? (this.dates.clear(), this.dates.push(a)) : this.dates.push(a), "number" == typeof this.o.multidate) for (; this.dates.length > this.o.multidate;) {
        this.dates.remove(0);
      }
    },
    _setDate: function _setDate(a, b) {
      b && "date" !== b || this._toggle_multidate(a && new Date(a)), (!b && this.o.updateViewDate || "view" === b) && (this.viewDate = a && new Date(a)), this.fill(), this.setValue(), b && "view" === b || this._trigger("changeDate"), this.inputField.trigger("change"), !this.o.autoclose || b && "date" !== b || this.hide();
    },
    moveDay: function moveDay(a, b) {
      var c = new Date(a);
      return c.setUTCDate(a.getUTCDate() + b), c;
    },
    moveWeek: function moveWeek(a, b) {
      return this.moveDay(a, 7 * b);
    },
    moveMonth: function moveMonth(a, b) {
      if (!g(a)) return this.o.defaultViewDate;
      if (!b) return a;
      var c,
          d,
          e = new Date(a.valueOf()),
          f = e.getUTCDate(),
          h = e.getUTCMonth(),
          i = Math.abs(b);
      if (b = b > 0 ? 1 : -1, 1 === i) d = b === -1 ? function () {
        return e.getUTCMonth() === h;
      } : function () {
        return e.getUTCMonth() !== c;
      }, c = h + b, e.setUTCMonth(c), c = (c + 12) % 12;else {
        for (var j = 0; j < i; j++) {
          e = this.moveMonth(e, b);
        }

        c = e.getUTCMonth(), e.setUTCDate(f), d = function d() {
          return c !== e.getUTCMonth();
        };
      }

      for (; d();) {
        e.setUTCDate(--f), e.setUTCMonth(c);
      }

      return e;
    },
    moveYear: function moveYear(a, b) {
      return this.moveMonth(a, 12 * b);
    },
    moveAvailableDate: function moveAvailableDate(a, b, c) {
      do {
        if (a = this[c](a, b), !this.dateWithinRange(a)) return !1;
        c = "moveDay";
      } while (this.dateIsDisabled(a));

      return a;
    },
    weekOfDateIsDisabled: function weekOfDateIsDisabled(b) {
      return a.inArray(b.getUTCDay(), this.o.daysOfWeekDisabled) !== -1;
    },
    dateIsDisabled: function dateIsDisabled(b) {
      return this.weekOfDateIsDisabled(b) || a.grep(this.o.datesDisabled, function (a) {
        return e(b, a);
      }).length > 0;
    },
    dateWithinRange: function dateWithinRange(a) {
      return a >= this.o.startDate && a <= this.o.endDate;
    },
    keydown: function keydown(a) {
      if (!this.picker.is(":visible")) return void (40 !== a.keyCode && 27 !== a.keyCode || (this.show(), a.stopPropagation()));
      var b,
          c,
          d = !1,
          e = this.focusDate || this.viewDate;

      switch (a.keyCode) {
        case 27:
          this.focusDate ? (this.focusDate = null, this.viewDate = this.dates.get(-1) || this.viewDate, this.fill()) : this.hide(), a.preventDefault(), a.stopPropagation();
          break;

        case 37:
        case 38:
        case 39:
        case 40:
          if (!this.o.keyboardNavigation || 7 === this.o.daysOfWeekDisabled.length) break;
          b = 37 === a.keyCode || 38 === a.keyCode ? -1 : 1, 0 === this.viewMode ? a.ctrlKey ? (c = this.moveAvailableDate(e, b, "moveYear"), c && this._trigger("changeYear", this.viewDate)) : a.shiftKey ? (c = this.moveAvailableDate(e, b, "moveMonth"), c && this._trigger("changeMonth", this.viewDate)) : 37 === a.keyCode || 39 === a.keyCode ? c = this.moveAvailableDate(e, b, "moveDay") : this.weekOfDateIsDisabled(e) || (c = this.moveAvailableDate(e, b, "moveWeek")) : 1 === this.viewMode ? (38 !== a.keyCode && 40 !== a.keyCode || (b *= 4), c = this.moveAvailableDate(e, b, "moveMonth")) : 2 === this.viewMode && (38 !== a.keyCode && 40 !== a.keyCode || (b *= 4), c = this.moveAvailableDate(e, b, "moveYear")), c && (this.focusDate = this.viewDate = c, this.setValue(), this.fill(), a.preventDefault());
          break;

        case 13:
          if (!this.o.forceParse) break;
          e = this.focusDate || this.dates.get(-1) || this.viewDate, this.o.keyboardNavigation && (this._toggle_multidate(e), d = !0), this.focusDate = null, this.viewDate = this.dates.get(-1) || this.viewDate, this.setValue(), this.fill(), this.picker.is(":visible") && (a.preventDefault(), a.stopPropagation(), this.o.autoclose && this.hide());
          break;

        case 9:
          this.focusDate = null, this.viewDate = this.dates.get(-1) || this.viewDate, this.fill(), this.hide();
      }

      d && (this.dates.length ? this._trigger("changeDate") : this._trigger("clearDate"), this.inputField.trigger("change"));
    },
    setViewMode: function setViewMode(a) {
      this.viewMode = a, this.picker.children("div").hide().filter(".datepicker-" + r.viewModes[this.viewMode].clsName).show(), this.updateNavArrows(), this._trigger("changeViewMode", new Date(this.viewDate));
    }
  };

  var l = function l(b, c) {
    a.data(b, "datepicker", this), this.element = a(b), this.inputs = a.map(c.inputs, function (a) {
      return a.jquery ? a[0] : a;
    }), delete c.inputs, this.keepEmptyValues = c.keepEmptyValues, delete c.keepEmptyValues, n.call(a(this.inputs), c).on("changeDate", a.proxy(this.dateUpdated, this)), this.pickers = a.map(this.inputs, function (b) {
      return a.data(b, "datepicker");
    }), this.updateDates();
  };

  l.prototype = {
    updateDates: function updateDates() {
      this.dates = a.map(this.pickers, function (a) {
        return a.getUTCDate();
      }), this.updateRanges();
    },
    updateRanges: function updateRanges() {
      var b = a.map(this.dates, function (a) {
        return a.valueOf();
      });
      a.each(this.pickers, function (a, c) {
        c.setRange(b);
      });
    },
    clearDates: function clearDates() {
      a.each(this.pickers, function (a, b) {
        b.clearDates();
      });
    },
    dateUpdated: function dateUpdated(c) {
      if (!this.updating) {
        this.updating = !0;
        var d = a.data(c.target, "datepicker");

        if (d !== b) {
          var e = d.getUTCDate(),
              f = this.keepEmptyValues,
              g = a.inArray(c.target, this.inputs),
              h = g - 1,
              i = g + 1,
              j = this.inputs.length;

          if (g !== -1) {
            if (a.each(this.pickers, function (a, b) {
              b.getUTCDate() || b !== d && f || b.setUTCDate(e);
            }), e < this.dates[h]) for (; h >= 0 && e < this.dates[h];) {
              this.pickers[h--].setUTCDate(e);
            } else if (e > this.dates[i]) for (; i < j && e > this.dates[i];) {
              this.pickers[i++].setUTCDate(e);
            }
            this.updateDates(), delete this.updating;
          }
        }
      }
    },
    destroy: function destroy() {
      a.map(this.pickers, function (a) {
        a.destroy();
      }), a(this.inputs).off("changeDate", this.dateUpdated), delete this.element.data().datepicker;
    },
    remove: f("destroy", "Method `remove` is deprecated and will be removed in version 2.0. Use `destroy` instead")
  };

  var m = a.fn.datepicker,
      n = function n(c) {
    var d = Array.apply(null, arguments);
    d.shift();
    var e;
    if (this.each(function () {
      var b = a(this),
          f = b.data("datepicker"),
          g = "object" == _typeof(c) && c;

      if (!f) {
        var j = h(this, "date"),
            m = a.extend({}, o, j, g),
            n = i(m.language),
            p = a.extend({}, o, n, j, g);
        b.hasClass("input-daterange") || p.inputs ? (a.extend(p, {
          inputs: p.inputs || b.find("input").toArray()
        }), f = new l(this, p)) : f = new k(this, p), b.data("datepicker", f);
      }

      "string" == typeof c && "function" == typeof f[c] && (e = f[c].apply(f, d));
    }), e === b || e instanceof k || e instanceof l) return this;
    if (this.length > 1) throw new Error("Using only allowed for the collection of a single element (" + c + " function)");
    return e;
  };

  a.fn.datepicker = n;
  var o = a.fn.datepicker.defaults = {
    assumeNearbyYear: !1,
    autoclose: !1,
    beforeShowDay: a.noop,
    beforeShowMonth: a.noop,
    beforeShowYear: a.noop,
    beforeShowDecade: a.noop,
    beforeShowCentury: a.noop,
    calendarWeeks: !1,
    clearBtn: !1,
    toggleActive: !1,
    daysOfWeekDisabled: [],
    daysOfWeekHighlighted: [],
    datesDisabled: [],
    endDate: 1 / 0,
    forceParse: !0,
    format: "mm/dd/yyyy",
    keepEmptyValues: !1,
    keyboardNavigation: !0,
    language: "en",
    minViewMode: 0,
    maxViewMode: 4,
    multidate: !1,
    multidateSeparator: ",",
    orientation: "auto",
    rtl: !1,
    startDate: -(1 / 0),
    startView: 0,
    todayBtn: !1,
    todayHighlight: !1,
    updateViewDate: !0,
    weekStart: 0,
    disableTouchKeyboard: !1,
    enableOnReadonly: !0,
    showOnFocus: !0,
    zIndexOffset: 10,
    container: "body",
    immediateUpdates: !1,
    title: "",
    templates: {
      leftArrow: "&#x00AB;",
      rightArrow: "&#x00BB;"
    },
    showWeekDays: !0
  },
      p = a.fn.datepicker.locale_opts = ["format", "rtl", "weekStart"];
  a.fn.datepicker.Constructor = k;
  var q = a.fn.datepicker.dates = {
    en: {
      days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      daysShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
      daysMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
      months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
      monthsShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
      today: "Today",
      clear: "Clear",
      titleFormat: "MM yyyy"
    }
  },
      r = {
    viewModes: [{
      names: ["days", "month"],
      clsName: "days",
      e: "changeMonth"
    }, {
      names: ["months", "year"],
      clsName: "months",
      e: "changeYear",
      navStep: 1
    }, {
      names: ["years", "decade"],
      clsName: "years",
      e: "changeDecade",
      navStep: 10
    }, {
      names: ["decades", "century"],
      clsName: "decades",
      e: "changeCentury",
      navStep: 100
    }, {
      names: ["centuries", "millennium"],
      clsName: "centuries",
      e: "changeMillennium",
      navStep: 1e3
    }],
    validParts: /dd?|DD?|mm?|MM?|yy(?:yy)?/g,
    nonpunctuation: /[^ -\/:-@\u5e74\u6708\u65e5\[-`{-~\t\n\r]+/g,
    parseFormat: function parseFormat(a) {
      if ("function" == typeof a.toValue && "function" == typeof a.toDisplay) return a;
      var b = a.replace(this.validParts, "\0").split("\0"),
          c = a.match(this.validParts);
      if (!b || !b.length || !c || 0 === c.length) throw new Error("Invalid date format.");
      return {
        separators: b,
        parts: c
      };
    },
    parseDate: function parseDate(c, e, f, g) {
      function h(a, b) {
        return b === !0 && (b = 10), a < 100 && (a += 2e3, a > new Date().getFullYear() + b && (a -= 100)), a;
      }

      function i() {
        var a = this.slice(0, j[n].length),
            b = j[n].slice(0, a.length);
        return a.toLowerCase() === b.toLowerCase();
      }

      if (!c) return b;
      if (c instanceof Date) return c;
      if ("string" == typeof e && (e = r.parseFormat(e)), e.toValue) return e.toValue(c, e, f);
      var j,
          l,
          m,
          n,
          o,
          p = {
        d: "moveDay",
        m: "moveMonth",
        w: "moveWeek",
        y: "moveYear"
      },
          s = {
        yesterday: "-1d",
        today: "+0d",
        tomorrow: "+1d"
      };

      if (c in s && (c = s[c]), /^[\-+]\d+[dmwy]([\s,]+[\-+]\d+[dmwy])*$/i.test(c)) {
        for (j = c.match(/([\-+]\d+)([dmwy])/gi), c = new Date(), n = 0; n < j.length; n++) {
          l = j[n].match(/([\-+]\d+)([dmwy])/i), m = Number(l[1]), o = p[l[2].toLowerCase()], c = k.prototype[o](c, m);
        }

        return k.prototype._zero_utc_time(c);
      }

      j = c && c.match(this.nonpunctuation) || [];
      var t,
          u,
          v = {},
          w = ["yyyy", "yy", "M", "MM", "m", "mm", "d", "dd"],
          x = {
        yyyy: function yyyy(a, b) {
          return a.setUTCFullYear(g ? h(b, g) : b);
        },
        m: function m(a, b) {
          if (isNaN(a)) return a;

          for (b -= 1; b < 0;) {
            b += 12;
          }

          for (b %= 12, a.setUTCMonth(b); a.getUTCMonth() !== b;) {
            a.setUTCDate(a.getUTCDate() - 1);
          }

          return a;
        },
        d: function d(a, b) {
          return a.setUTCDate(b);
        }
      };
      x.yy = x.yyyy, x.M = x.MM = x.mm = x.m, x.dd = x.d, c = d();
      var y = e.parts.slice();

      if (j.length !== y.length && (y = a(y).filter(function (b, c) {
        return a.inArray(c, w) !== -1;
      }).toArray()), j.length === y.length) {
        var z;

        for (n = 0, z = y.length; n < z; n++) {
          if (t = parseInt(j[n], 10), l = y[n], isNaN(t)) switch (l) {
            case "MM":
              u = a(q[f].months).filter(i), t = a.inArray(u[0], q[f].months) + 1;
              break;

            case "M":
              u = a(q[f].monthsShort).filter(i), t = a.inArray(u[0], q[f].monthsShort) + 1;
          }
          v[l] = t;
        }

        var A, B;

        for (n = 0; n < w.length; n++) {
          B = w[n], B in v && !isNaN(v[B]) && (A = new Date(c), x[B](A, v[B]), isNaN(A) || (c = A));
        }
      }

      return c;
    },
    formatDate: function formatDate(b, c, d) {
      if (!b) return "";
      if ("string" == typeof c && (c = r.parseFormat(c)), c.toDisplay) return c.toDisplay(b, c, d);
      var e = {
        d: b.getUTCDate(),
        D: q[d].daysShort[b.getUTCDay()],
        DD: q[d].days[b.getUTCDay()],
        m: b.getUTCMonth() + 1,
        M: q[d].monthsShort[b.getUTCMonth()],
        MM: q[d].months[b.getUTCMonth()],
        yy: b.getUTCFullYear().toString().substring(2),
        yyyy: b.getUTCFullYear()
      };
      e.dd = (e.d < 10 ? "0" : "") + e.d, e.mm = (e.m < 10 ? "0" : "") + e.m, b = [];

      for (var f = a.extend([], c.separators), g = 0, h = c.parts.length; g <= h; g++) {
        f.length && b.push(f.shift()), b.push(e[c.parts[g]]);
      }

      return b.join("");
    },
    headTemplate: '<thead><tr><th colspan="7" class="datepicker-title"></th></tr><tr><th class="prev">' + o.templates.leftArrow + '</th><th colspan="5" class="datepicker-switch"></th><th class="next">' + o.templates.rightArrow + "</th></tr></thead>",
    contTemplate: '<tbody><tr><td colspan="7"></td></tr></tbody>',
    footTemplate: '<tfoot><tr><th colspan="7" class="today"></th></tr><tr><th colspan="7" class="clear"></th></tr></tfoot>'
  };
  r.template = '<div class="datepicker"><div class="datepicker-days"><table class="table-condensed">' + r.headTemplate + "<tbody></tbody>" + r.footTemplate + '</table></div><div class="datepicker-months"><table class="table-condensed">' + r.headTemplate + r.contTemplate + r.footTemplate + '</table></div><div class="datepicker-years"><table class="table-condensed">' + r.headTemplate + r.contTemplate + r.footTemplate + '</table></div><div class="datepicker-decades"><table class="table-condensed">' + r.headTemplate + r.contTemplate + r.footTemplate + '</table></div><div class="datepicker-centuries"><table class="table-condensed">' + r.headTemplate + r.contTemplate + r.footTemplate + "</table></div></div>", a.fn.datepicker.DPGlobal = r, a.fn.datepicker.noConflict = function () {
    return a.fn.datepicker = m, this;
  }, a.fn.datepicker.version = "1.8.0", a.fn.datepicker.deprecated = function (a) {
    var b = window.console;
    b && b.warn && b.warn("DEPRECATED: " + a);
  }, a(document).on("focus.datepicker.data-api click.datepicker.data-api", '[data-provide="datepicker"]', function (b) {
    var c = a(this);
    c.data("datepicker") || (b.preventDefault(), n.call(c, "show"));
  }), a(function () {
    n.call(a('[data-provide="datepicker-inline"]'));
  });
});

/***/ }),

/***/ "./resources/js/admin/fastclick.js":
/*!*****************************************!*\
  !*** ./resources/js/admin/fastclick.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

;

(function () {
  'use strict';
  /**
   * @preserve FastClick: polyfill to remove click delays on browsers with touch UIs.
   *
   * @codingstandard ftlabs-jsv2
   * @copyright The Financial Times Limited [All Rights Reserved]
   * @license MIT License (see LICENSE.txt)
   */

  /*jslint browser:true, node:true*/

  /*global define, Event, Node*/

  /**
   * Instantiate fast-clicking listeners on the specified layer.
   *
   * @constructor
   * @param {Element} layer The layer to listen on
   * @param {Object} [options={}] The options to override the defaults
   */

  function FastClick(layer, options) {
    var oldOnClick;
    options = options || {};
    /**
     * Whether a click is currently being tracked.
     *
     * @type boolean
     */

    this.trackingClick = false;
    /**
     * Timestamp for when click tracking started.
     *
     * @type number
     */

    this.trackingClickStart = 0;
    /**
     * The element being tracked for a click.
     *
     * @type EventTarget
     */

    this.targetElement = null;
    /**
     * X-coordinate of touch start event.
     *
     * @type number
     */

    this.touchStartX = 0;
    /**
     * Y-coordinate of touch start event.
     *
     * @type number
     */

    this.touchStartY = 0;
    /**
     * ID of the last touch, retrieved from Touch.identifier.
     *
     * @type number
     */

    this.lastTouchIdentifier = 0;
    /**
     * Touchmove boundary, beyond which a click will be cancelled.
     *
     * @type number
     */

    this.touchBoundary = options.touchBoundary || 10;
    /**
     * The FastClick layer.
     *
     * @type Element
     */

    this.layer = layer;
    /**
     * The minimum time between tap(touchstart and touchend) events
     *
     * @type number
     */

    this.tapDelay = options.tapDelay || 200;
    /**
     * The maximum time for a tap
     *
     * @type number
     */

    this.tapTimeout = options.tapTimeout || 700;

    if (FastClick.notNeeded(layer)) {
      return;
    } // Some old versions of Android don't have Function.prototype.bind


    function bind(method, context) {
      return function () {
        return method.apply(context, arguments);
      };
    }

    var methods = ['onMouse', 'onClick', 'onTouchStart', 'onTouchMove', 'onTouchEnd', 'onTouchCancel'];
    var context = this;

    for (var i = 0, l = methods.length; i < l; i++) {
      context[methods[i]] = bind(context[methods[i]], context);
    } // Set up event handlers as required


    if (deviceIsAndroid) {
      layer.addEventListener('mouseover', this.onMouse, true);
      layer.addEventListener('mousedown', this.onMouse, true);
      layer.addEventListener('mouseup', this.onMouse, true);
    }

    layer.addEventListener('click', this.onClick, true);
    layer.addEventListener('touchstart', this.onTouchStart, false);
    layer.addEventListener('touchmove', this.onTouchMove, false);
    layer.addEventListener('touchend', this.onTouchEnd, false);
    layer.addEventListener('touchcancel', this.onTouchCancel, false); // Hack is required for browsers that don't support Event#stopImmediatePropagation (e.g. Android 2)
    // which is how FastClick normally stops click events bubbling to callbacks registered on the FastClick
    // layer when they are cancelled.

    if (!Event.prototype.stopImmediatePropagation) {
      layer.removeEventListener = function (type, callback, capture) {
        var rmv = Node.prototype.removeEventListener;

        if (type === 'click') {
          rmv.call(layer, type, callback.hijacked || callback, capture);
        } else {
          rmv.call(layer, type, callback, capture);
        }
      };

      layer.addEventListener = function (type, callback, capture) {
        var adv = Node.prototype.addEventListener;

        if (type === 'click') {
          adv.call(layer, type, callback.hijacked || (callback.hijacked = function (event) {
            if (!event.propagationStopped) {
              callback(event);
            }
          }), capture);
        } else {
          adv.call(layer, type, callback, capture);
        }
      };
    } // If a handler is already declared in the element's onclick attribute, it will be fired before
    // FastClick's onClick handler. Fix this by pulling out the user-defined handler function and
    // adding it as listener.


    if (typeof layer.onclick === 'function') {
      // Android browser on at least 3.2 requires a new reference to the function in layer.onclick
      // - the old one won't work if passed to addEventListener directly.
      oldOnClick = layer.onclick;
      layer.addEventListener('click', function (event) {
        oldOnClick(event);
      }, false);
      layer.onclick = null;
    }
  }
  /**
  * Windows Phone 8.1 fakes user agent string to look like Android and iPhone.
  *
  * @type boolean
  */


  var deviceIsWindowsPhone = navigator.userAgent.indexOf("Windows Phone") >= 0;
  /**
   * Android requires exceptions.
   *
   * @type boolean
   */

  var deviceIsAndroid = navigator.userAgent.indexOf('Android') > 0 && !deviceIsWindowsPhone;
  /**
   * iOS requires exceptions.
   *
   * @type boolean
   */

  var deviceIsIOS = /iP(ad|hone|od)/.test(navigator.userAgent) && !deviceIsWindowsPhone;
  /**
   * iOS 4 requires an exception for select elements.
   *
   * @type boolean
   */

  var deviceIsIOS4 = deviceIsIOS && /OS 4_\d(_\d)?/.test(navigator.userAgent);
  /**
   * iOS 6.0-7.* requires the target element to be manually derived
   *
   * @type boolean
   */

  var deviceIsIOSWithBadTarget = deviceIsIOS && /OS [6-7]_\d/.test(navigator.userAgent);
  /**
   * BlackBerry requires exceptions.
   *
   * @type boolean
   */

  var deviceIsBlackBerry10 = navigator.userAgent.indexOf('BB10') > 0;
  /**
   * Determine whether a given element requires a native click.
   *
   * @param {EventTarget|Element} target Target DOM element
   * @returns {boolean} Returns true if the element needs a native click
   */

  FastClick.prototype.needsClick = function (target) {
    switch (target.nodeName.toLowerCase()) {
      // Don't send a synthetic click to disabled inputs (issue #62)
      case 'button':
      case 'select':
      case 'textarea':
        if (target.disabled) {
          return true;
        }

        break;

      case 'input':
        // File inputs need real clicks on iOS 6 due to a browser bug (issue #68)
        if (deviceIsIOS && target.type === 'file' || target.disabled) {
          return true;
        }

        break;

      case 'label':
      case 'iframe': // iOS8 homescreen apps can prevent events bubbling into frames

      case 'video':
        return true;
    }

    return /\bneedsclick\b/.test(target.className);
  };
  /**
   * Determine whether a given element requires a call to focus to simulate click into element.
   *
   * @param {EventTarget|Element} target Target DOM element
   * @returns {boolean} Returns true if the element requires a call to focus to simulate native click.
   */


  FastClick.prototype.needsFocus = function (target) {
    switch (target.nodeName.toLowerCase()) {
      case 'textarea':
        return true;

      case 'select':
        return !deviceIsAndroid;

      case 'input':
        switch (target.type) {
          case 'button':
          case 'checkbox':
          case 'file':
          case 'image':
          case 'radio':
          case 'submit':
            return false;
        } // No point in attempting to focus disabled inputs


        return !target.disabled && !target.readOnly;

      default:
        return /\bneedsfocus\b/.test(target.className);
    }
  };
  /**
   * Send a click event to the specified element.
   *
   * @param {EventTarget|Element} targetElement
   * @param {Event} event
   */


  FastClick.prototype.sendClick = function (targetElement, event) {
    var clickEvent, touch; // On some Android devices activeElement needs to be blurred otherwise the synthetic click will have no effect (#24)

    if (document.activeElement && document.activeElement !== targetElement) {
      document.activeElement.blur();
    }

    touch = event.changedTouches[0]; // Synthesise a click event, with an extra attribute so it can be tracked

    clickEvent = document.createEvent('MouseEvents');
    clickEvent.initMouseEvent(this.determineEventType(targetElement), true, true, window, 1, touch.screenX, touch.screenY, touch.clientX, touch.clientY, false, false, false, false, 0, null);
    clickEvent.forwardedTouchEvent = true;
    targetElement.dispatchEvent(clickEvent);
  };

  FastClick.prototype.determineEventType = function (targetElement) {
    //Issue #159: Android Chrome Select Box does not open with a synthetic click event
    if (deviceIsAndroid && targetElement.tagName.toLowerCase() === 'select') {
      return 'mousedown';
    }

    return 'click';
  };
  /**
   * @param {EventTarget|Element} targetElement
   */


  FastClick.prototype.focus = function (targetElement) {
    var length; // Issue #160: on iOS 7, some input elements (e.g. date datetime month) throw a vague TypeError on setSelectionRange. These elements don't have an integer value for the selectionStart and selectionEnd properties, but unfortunately that can't be used for detection because accessing the properties also throws a TypeError. Just check the type instead. Filed as Apple bug #15122724.

    if (deviceIsIOS && targetElement.setSelectionRange && targetElement.type.indexOf('date') !== 0 && targetElement.type !== 'time' && targetElement.type !== 'month') {
      length = targetElement.value.length;
      targetElement.setSelectionRange(length, length);
    } else {
      targetElement.focus();
    }
  };
  /**
   * Check whether the given target element is a child of a scrollable layer and if so, set a flag on it.
   *
   * @param {EventTarget|Element} targetElement
   */


  FastClick.prototype.updateScrollParent = function (targetElement) {
    var scrollParent, parentElement;
    scrollParent = targetElement.fastClickScrollParent; // Attempt to discover whether the target element is contained within a scrollable layer. Re-check if the
    // target element was moved to another parent.

    if (!scrollParent || !scrollParent.contains(targetElement)) {
      parentElement = targetElement;

      do {
        if (parentElement.scrollHeight > parentElement.offsetHeight) {
          scrollParent = parentElement;
          targetElement.fastClickScrollParent = parentElement;
          break;
        }

        parentElement = parentElement.parentElement;
      } while (parentElement);
    } // Always update the scroll top tracker if possible.


    if (scrollParent) {
      scrollParent.fastClickLastScrollTop = scrollParent.scrollTop;
    }
  };
  /**
   * @param {EventTarget} targetElement
   * @returns {Element|EventTarget}
   */


  FastClick.prototype.getTargetElementFromEventTarget = function (eventTarget) {
    // On some older browsers (notably Safari on iOS 4.1 - see issue #56) the event target may be a text node.
    if (eventTarget.nodeType === Node.TEXT_NODE) {
      return eventTarget.parentNode;
    }

    return eventTarget;
  };
  /**
   * On touch start, record the position and scroll offset.
   *
   * @param {Event} event
   * @returns {boolean}
   */


  FastClick.prototype.onTouchStart = function (event) {
    var targetElement, touch, selection; // Ignore multiple touches, otherwise pinch-to-zoom is prevented if both fingers are on the FastClick element (issue #111).

    if (event.targetTouches.length > 1) {
      return true;
    }

    targetElement = this.getTargetElementFromEventTarget(event.target);
    touch = event.targetTouches[0];

    if (deviceIsIOS) {
      // Only trusted events will deselect text on iOS (issue #49)
      selection = window.getSelection();

      if (selection.rangeCount && !selection.isCollapsed) {
        return true;
      }

      if (!deviceIsIOS4) {
        // Weird things happen on iOS when an alert or confirm dialog is opened from a click event callback (issue #23):
        // when the user next taps anywhere else on the page, new touchstart and touchend events are dispatched
        // with the same identifier as the touch event that previously triggered the click that triggered the alert.
        // Sadly, there is an issue on iOS 4 that causes some normal touch events to have the same identifier as an
        // immediately preceeding touch event (issue #52), so this fix is unavailable on that platform.
        // Issue 120: touch.identifier is 0 when Chrome dev tools 'Emulate touch events' is set with an iOS device UA string,
        // which causes all touch events to be ignored. As this block only applies to iOS, and iOS identifiers are always long,
        // random integers, it's safe to to continue if the identifier is 0 here.
        if (touch.identifier && touch.identifier === this.lastTouchIdentifier) {
          event.preventDefault();
          return false;
        }

        this.lastTouchIdentifier = touch.identifier; // If the target element is a child of a scrollable layer (using -webkit-overflow-scrolling: touch) and:
        // 1) the user does a fling scroll on the scrollable layer
        // 2) the user stops the fling scroll with another tap
        // then the event.target of the last 'touchend' event will be the element that was under the user's finger
        // when the fling scroll was started, causing FastClick to send a click event to that layer - unless a check
        // is made to ensure that a parent layer was not scrolled before sending a synthetic click (issue #42).

        this.updateScrollParent(targetElement);
      }
    }

    this.trackingClick = true;
    this.trackingClickStart = event.timeStamp;
    this.targetElement = targetElement;
    this.touchStartX = touch.pageX;
    this.touchStartY = touch.pageY; // Prevent phantom clicks on fast double-tap (issue #36)

    if (event.timeStamp - this.lastClickTime < this.tapDelay) {
      event.preventDefault();
    }

    return true;
  };
  /**
   * Based on a touchmove event object, check whether the touch has moved past a boundary since it started.
   *
   * @param {Event} event
   * @returns {boolean}
   */


  FastClick.prototype.touchHasMoved = function (event) {
    var touch = event.changedTouches[0],
        boundary = this.touchBoundary;

    if (Math.abs(touch.pageX - this.touchStartX) > boundary || Math.abs(touch.pageY - this.touchStartY) > boundary) {
      return true;
    }

    return false;
  };
  /**
   * Update the last position.
   *
   * @param {Event} event
   * @returns {boolean}
   */


  FastClick.prototype.onTouchMove = function (event) {
    if (!this.trackingClick) {
      return true;
    } // If the touch has moved, cancel the click tracking


    if (this.targetElement !== this.getTargetElementFromEventTarget(event.target) || this.touchHasMoved(event)) {
      this.trackingClick = false;
      this.targetElement = null;
    }

    return true;
  };
  /**
   * Attempt to find the labelled control for the given label element.
   *
   * @param {EventTarget|HTMLLabelElement} labelElement
   * @returns {Element|null}
   */


  FastClick.prototype.findControl = function (labelElement) {
    // Fast path for newer browsers supporting the HTML5 control attribute
    if (labelElement.control !== undefined) {
      return labelElement.control;
    } // All browsers under test that support touch events also support the HTML5 htmlFor attribute


    if (labelElement.htmlFor) {
      return document.getElementById(labelElement.htmlFor);
    } // If no for attribute exists, attempt to retrieve the first labellable descendant element
    // the list of which is defined here: http://www.w3.org/TR/html5/forms.html#category-label


    return labelElement.querySelector('button, input:not([type=hidden]), keygen, meter, output, progress, select, textarea');
  };
  /**
   * On touch end, determine whether to send a click event at once.
   *
   * @param {Event} event
   * @returns {boolean}
   */


  FastClick.prototype.onTouchEnd = function (event) {
    var forElement,
        trackingClickStart,
        targetTagName,
        scrollParent,
        touch,
        targetElement = this.targetElement;

    if (!this.trackingClick) {
      return true;
    } // Prevent phantom clicks on fast double-tap (issue #36)


    if (event.timeStamp - this.lastClickTime < this.tapDelay) {
      this.cancelNextClick = true;
      return true;
    }

    if (event.timeStamp - this.trackingClickStart > this.tapTimeout) {
      return true;
    } // Reset to prevent wrong click cancel on input (issue #156).


    this.cancelNextClick = false;
    this.lastClickTime = event.timeStamp;
    trackingClickStart = this.trackingClickStart;
    this.trackingClick = false;
    this.trackingClickStart = 0; // On some iOS devices, the targetElement supplied with the event is invalid if the layer
    // is performing a transition or scroll, and has to be re-detected manually. Note that
    // for this to function correctly, it must be called *after* the event target is checked!
    // See issue #57; also filed as rdar://13048589 .

    if (deviceIsIOSWithBadTarget) {
      touch = event.changedTouches[0]; // In certain cases arguments of elementFromPoint can be negative, so prevent setting targetElement to null

      targetElement = document.elementFromPoint(touch.pageX - window.pageXOffset, touch.pageY - window.pageYOffset) || targetElement;
      targetElement.fastClickScrollParent = this.targetElement.fastClickScrollParent;
    }

    targetTagName = targetElement.tagName.toLowerCase();

    if (targetTagName === 'label') {
      forElement = this.findControl(targetElement);

      if (forElement) {
        this.focus(targetElement);

        if (deviceIsAndroid) {
          return false;
        }

        targetElement = forElement;
      }
    } else if (this.needsFocus(targetElement)) {
      // Case 1: If the touch started a while ago (best guess is 100ms based on tests for issue #36) then focus will be triggered anyway. Return early and unset the target element reference so that the subsequent click will be allowed through.
      // Case 2: Without this exception for input elements tapped when the document is contained in an iframe, then any inputted text won't be visible even though the value attribute is updated as the user types (issue #37).
      if (event.timeStamp - trackingClickStart > 100 || deviceIsIOS && window.top !== window && targetTagName === 'input') {
        this.targetElement = null;
        return false;
      }

      this.focus(targetElement);
      this.sendClick(targetElement, event); // Select elements need the event to go through on iOS 4, otherwise the selector menu won't open.
      // Also this breaks opening selects when VoiceOver is active on iOS6, iOS7 (and possibly others)

      if (!deviceIsIOS || targetTagName !== 'select') {
        this.targetElement = null;
        event.preventDefault();
      }

      return false;
    }

    if (deviceIsIOS && !deviceIsIOS4) {
      // Don't send a synthetic click event if the target element is contained within a parent layer that was scrolled
      // and this tap is being used to stop the scrolling (usually initiated by a fling - issue #42).
      scrollParent = targetElement.fastClickScrollParent;

      if (scrollParent && scrollParent.fastClickLastScrollTop !== scrollParent.scrollTop) {
        return true;
      }
    } // Prevent the actual click from going though - unless the target node is marked as requiring
    // real clicks or if it is in the whitelist in which case only non-programmatic clicks are permitted.


    if (!this.needsClick(targetElement)) {
      event.preventDefault();
      this.sendClick(targetElement, event);
    }

    return false;
  };
  /**
   * On touch cancel, stop tracking the click.
   *
   * @returns {void}
   */


  FastClick.prototype.onTouchCancel = function () {
    this.trackingClick = false;
    this.targetElement = null;
  };
  /**
   * Determine mouse events which should be permitted.
   *
   * @param {Event} event
   * @returns {boolean}
   */


  FastClick.prototype.onMouse = function (event) {
    // If a target element was never set (because a touch event was never fired) allow the event
    if (!this.targetElement) {
      return true;
    }

    if (event.forwardedTouchEvent) {
      return true;
    } // Programmatically generated events targeting a specific element should be permitted


    if (!event.cancelable) {
      return true;
    } // Derive and check the target element to see whether the mouse event needs to be permitted;
    // unless explicitly enabled, prevent non-touch click events from triggering actions,
    // to prevent ghost/doubleclicks.


    if (!this.needsClick(this.targetElement) || this.cancelNextClick) {
      // Prevent any user-added listeners declared on FastClick element from being fired.
      if (event.stopImmediatePropagation) {
        event.stopImmediatePropagation();
      } else {
        // Part of the hack for browsers that don't support Event#stopImmediatePropagation (e.g. Android 2)
        event.propagationStopped = true;
      } // Cancel the event


      event.stopPropagation();
      event.preventDefault();
      return false;
    } // If the mouse event is permitted, return true for the action to go through.


    return true;
  };
  /**
   * On actual clicks, determine whether this is a touch-generated click, a click action occurring
   * naturally after a delay after a touch (which needs to be cancelled to avoid duplication), or
   * an actual click which should be permitted.
   *
   * @param {Event} event
   * @returns {boolean}
   */


  FastClick.prototype.onClick = function (event) {
    var permitted; // It's possible for another FastClick-like library delivered with third-party code to fire a click event before FastClick does (issue #44). In that case, set the click-tracking flag back to false and return early. This will cause onTouchEnd to return early.

    if (this.trackingClick) {
      this.targetElement = null;
      this.trackingClick = false;
      return true;
    } // Very odd behaviour on iOS (issue #18): if a submit element is present inside a form and the user hits enter in the iOS simulator or clicks the Go button on the pop-up OS keyboard the a kind of 'fake' click event will be triggered with the submit-type input element as the target.


    if (event.target.type === 'submit' && event.detail === 0) {
      return true;
    }

    permitted = this.onMouse(event); // Only unset targetElement if the click is not permitted. This will ensure that the check for !targetElement in onMouse fails and the browser's click doesn't go through.

    if (!permitted) {
      this.targetElement = null;
    } // If clicks are permitted, return true for the action to go through.


    return permitted;
  };
  /**
   * Remove all FastClick's event listeners.
   *
   * @returns {void}
   */


  FastClick.prototype.destroy = function () {
    var layer = this.layer;

    if (deviceIsAndroid) {
      layer.removeEventListener('mouseover', this.onMouse, true);
      layer.removeEventListener('mousedown', this.onMouse, true);
      layer.removeEventListener('mouseup', this.onMouse, true);
    }

    layer.removeEventListener('click', this.onClick, true);
    layer.removeEventListener('touchstart', this.onTouchStart, false);
    layer.removeEventListener('touchmove', this.onTouchMove, false);
    layer.removeEventListener('touchend', this.onTouchEnd, false);
    layer.removeEventListener('touchcancel', this.onTouchCancel, false);
  };
  /**
   * Check whether FastClick is needed.
   *
   * @param {Element} layer The layer to listen on
   */


  FastClick.notNeeded = function (layer) {
    var metaViewport;
    var chromeVersion;
    var blackberryVersion;
    var firefoxVersion; // Devices that don't support touch don't need FastClick

    if (typeof window.ontouchstart === 'undefined') {
      return true;
    } // Chrome version - zero for other browsers


    chromeVersion = +(/Chrome\/([0-9]+)/.exec(navigator.userAgent) || [, 0])[1];

    if (chromeVersion) {
      if (deviceIsAndroid) {
        metaViewport = document.querySelector('meta[name=viewport]');

        if (metaViewport) {
          // Chrome on Android with user-scalable="no" doesn't need FastClick (issue #89)
          if (metaViewport.content.indexOf('user-scalable=no') !== -1) {
            return true;
          } // Chrome 32 and above with width=device-width or less don't need FastClick


          if (chromeVersion > 31 && document.documentElement.scrollWidth <= window.outerWidth) {
            return true;
          }
        } // Chrome desktop doesn't need FastClick (issue #15)

      } else {
        return true;
      }
    }

    if (deviceIsBlackBerry10) {
      blackberryVersion = navigator.userAgent.match(/Version\/([0-9]*)\.([0-9]*)/); // BlackBerry 10.3+ does not require Fastclick library.
      // https://github.com/ftlabs/fastclick/issues/251

      if (blackberryVersion[1] >= 10 && blackberryVersion[2] >= 3) {
        metaViewport = document.querySelector('meta[name=viewport]');

        if (metaViewport) {
          // user-scalable=no eliminates click delay.
          if (metaViewport.content.indexOf('user-scalable=no') !== -1) {
            return true;
          } // width=device-width (or less than device-width) eliminates click delay.


          if (document.documentElement.scrollWidth <= window.outerWidth) {
            return true;
          }
        }
      }
    } // IE10 with -ms-touch-action: none or manipulation, which disables double-tap-to-zoom (issue #97)


    if (layer.style.msTouchAction === 'none' || layer.style.touchAction === 'manipulation') {
      return true;
    } // Firefox version - zero for other browsers


    firefoxVersion = +(/Firefox\/([0-9]+)/.exec(navigator.userAgent) || [, 0])[1];

    if (firefoxVersion >= 27) {
      // Firefox 27+ does not have tap delay if the content is not zoomable - https://bugzilla.mozilla.org/show_bug.cgi?id=922896
      metaViewport = document.querySelector('meta[name=viewport]');

      if (metaViewport && (metaViewport.content.indexOf('user-scalable=no') !== -1 || document.documentElement.scrollWidth <= window.outerWidth)) {
        return true;
      }
    } // IE11: prefixed -ms-touch-action is no longer supported and it's recomended to use non-prefixed version
    // http://msdn.microsoft.com/en-us/library/windows/apps/Hh767313.aspx


    if (layer.style.touchAction === 'none' || layer.style.touchAction === 'manipulation') {
      return true;
    }

    return false;
  };
  /**
   * Factory method for creating a FastClick object
   *
   * @param {Element} layer The layer to listen on
   * @param {Object} [options={}] The options to override the defaults
   */


  FastClick.attach = function (layer, options) {
    return new FastClick(layer, options);
  };

  if ( true && _typeof(__webpack_require__(/*! !webpack amd options */ "./node_modules/webpack/buildin/amd-options.js")) === 'object' && __webpack_require__(/*! !webpack amd options */ "./node_modules/webpack/buildin/amd-options.js")) {
    // AMD. Register as an anonymous module.
    !(__WEBPACK_AMD_DEFINE_RESULT__ = (function () {
      return FastClick;
    }).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if ( true && module.exports) {
    module.exports = FastClick.attach;
    module.exports.FastClick = FastClick;
  } else {
    window.FastClick = FastClick;
  }
})();

/***/ }),

/***/ "./resources/js/admin/jquery-jvectormap.js":
/*!*************************************************!*\
  !*** ./resources/js/admin/jquery-jvectormap.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/**
 * jVectorMap version 1.2.2
 *
 * Copyright 2011-2013, Kirill Lebedev
 * Licensed under the MIT license.
 *
 */
(function (e) {
  var t = {
    set: {
      colors: 1,
      values: 1,
      backgroundColor: 1,
      scaleColors: 1,
      normalizeFunction: 1,
      focus: 1
    },
    get: {
      selectedRegions: 1,
      selectedMarkers: 1,
      mapObject: 1,
      regionName: 1
    }
  };

  e.fn.vectorMap = function (e) {
    var n,
        r,
        i,
        n = this.children(".jvectormap-container").data("mapObject");
    if (e === "addMap") jvm.WorldMap.maps[arguments[1]] = arguments[2];else {
      if (!(e !== "set" && e !== "get" || !t[e][arguments[1]])) return r = arguments[1].charAt(0).toUpperCase() + arguments[1].substr(1), n[e + r].apply(n, Array.prototype.slice.call(arguments, 2));
      e = e || {}, e.container = this, n = new jvm.WorldMap(e);
    }
    return this;
  };
})(jQuery), function (e) {
  function r(t) {
    var n = t || window.event,
        r = [].slice.call(arguments, 1),
        i = 0,
        s = !0,
        o = 0,
        u = 0;
    return t = e.event.fix(n), t.type = "mousewheel", n.wheelDelta && (i = n.wheelDelta / 120), n.detail && (i = -n.detail / 3), u = i, n.axis !== undefined && n.axis === n.HORIZONTAL_AXIS && (u = 0, o = -1 * i), n.wheelDeltaY !== undefined && (u = n.wheelDeltaY / 120), n.wheelDeltaX !== undefined && (o = -1 * n.wheelDeltaX / 120), r.unshift(t, i, o, u), (e.event.dispatch || e.event.handle).apply(this, r);
  }

  var t = ["DOMMouseScroll", "mousewheel"];
  if (e.event.fixHooks) for (var n = t.length; n;) {
    e.event.fixHooks[t[--n]] = e.event.mouseHooks;
  }
  e.event.special.mousewheel = {
    setup: function setup() {
      if (this.addEventListener) for (var e = t.length; e;) {
        this.addEventListener(t[--e], r, !1);
      } else this.onmousewheel = r;
    },
    teardown: function teardown() {
      if (this.removeEventListener) for (var e = t.length; e;) {
        this.removeEventListener(t[--e], r, !1);
      } else this.onmousewheel = null;
    }
  }, e.fn.extend({
    mousewheel: function mousewheel(e) {
      return e ? this.bind("mousewheel", e) : this.trigger("mousewheel");
    },
    unmousewheel: function unmousewheel(e) {
      return this.unbind("mousewheel", e);
    }
  });
}(jQuery);
var jvm = {
  inherits: function inherits(e, t) {
    function n() {}

    n.prototype = t.prototype, e.prototype = new n(), e.prototype.constructor = e, e.parentClass = t;
  },
  mixin: function mixin(e, t) {
    var n;

    for (n in t.prototype) {
      t.prototype.hasOwnProperty(n) && (e.prototype[n] = t.prototype[n]);
    }
  },
  min: function min(e) {
    var t = Number.MAX_VALUE,
        n;
    if (e instanceof Array) for (n = 0; n < e.length; n++) {
      e[n] < t && (t = e[n]);
    } else for (n in e) {
      e[n] < t && (t = e[n]);
    }
    return t;
  },
  max: function max(e) {
    var t = Number.MIN_VALUE,
        n;
    if (e instanceof Array) for (n = 0; n < e.length; n++) {
      e[n] > t && (t = e[n]);
    } else for (n in e) {
      e[n] > t && (t = e[n]);
    }
    return t;
  },
  keys: function keys(e) {
    var t = [],
        n;

    for (n in e) {
      t.push(n);
    }

    return t;
  },
  values: function values(e) {
    var t = [],
        n,
        r;

    for (r = 0; r < arguments.length; r++) {
      e = arguments[r];

      for (n in e) {
        t.push(e[n]);
      }
    }

    return t;
  }
};
jvm.$ = jQuery, jvm.AbstractElement = function (e, t) {
  this.node = this.createElement(e), this.name = e, this.properties = {}, t && this.set(t);
}, jvm.AbstractElement.prototype.set = function (e, t) {
  var n;
  if (_typeof(e) == "object") for (n in e) {
    this.properties[n] = e[n], this.applyAttr(n, e[n]);
  } else this.properties[e] = t, this.applyAttr(e, t);
}, jvm.AbstractElement.prototype.get = function (e) {
  return this.properties[e];
}, jvm.AbstractElement.prototype.applyAttr = function (e, t) {
  this.node.setAttribute(e, t);
}, jvm.AbstractElement.prototype.remove = function () {
  jvm.$(this.node).remove();
}, jvm.AbstractCanvasElement = function (e, t, n) {
  this.container = e, this.setSize(t, n), this.rootElement = new jvm[this.classPrefix + "GroupElement"](), this.node.appendChild(this.rootElement.node), this.container.appendChild(this.node);
}, jvm.AbstractCanvasElement.prototype.add = function (e, t) {
  t = t || this.rootElement, t.add(e), e.canvas = this;
}, jvm.AbstractCanvasElement.prototype.addPath = function (e, t, n) {
  var r = new jvm[this.classPrefix + "PathElement"](e, t);
  return this.add(r, n), r;
}, jvm.AbstractCanvasElement.prototype.addCircle = function (e, t, n) {
  var r = new jvm[this.classPrefix + "CircleElement"](e, t);
  return this.add(r, n), r;
}, jvm.AbstractCanvasElement.prototype.addGroup = function (e) {
  var t = new jvm[this.classPrefix + "GroupElement"]();
  return e ? e.node.appendChild(t.node) : this.node.appendChild(t.node), t.canvas = this, t;
}, jvm.AbstractShapeElement = function (e, t, n) {
  this.style = n || {}, this.style.current = {}, this.isHovered = !1, this.isSelected = !1, this.updateStyle();
}, jvm.AbstractShapeElement.prototype.setHovered = function (e) {
  this.isHovered !== e && (this.isHovered = e, this.updateStyle());
}, jvm.AbstractShapeElement.prototype.setSelected = function (e) {
  this.isSelected !== e && (this.isSelected = e, this.updateStyle(), jvm.$(this.node).trigger("selected", [e]));
}, jvm.AbstractShapeElement.prototype.setStyle = function (e, t) {
  var n = {};
  _typeof(e) == "object" ? n = e : n[e] = t, jvm.$.extend(this.style.current, n), this.updateStyle();
}, jvm.AbstractShapeElement.prototype.updateStyle = function () {
  var e = {};
  jvm.AbstractShapeElement.mergeStyles(e, this.style.initial), jvm.AbstractShapeElement.mergeStyles(e, this.style.current), this.isHovered && jvm.AbstractShapeElement.mergeStyles(e, this.style.hover), this.isSelected && (jvm.AbstractShapeElement.mergeStyles(e, this.style.selected), this.isHovered && jvm.AbstractShapeElement.mergeStyles(e, this.style.selectedHover)), this.set(e);
}, jvm.AbstractShapeElement.mergeStyles = function (e, t) {
  var n;
  t = t || {};

  for (n in t) {
    t[n] === null ? delete e[n] : e[n] = t[n];
  }
}, jvm.SVGElement = function (e, t) {
  jvm.SVGElement.parentClass.apply(this, arguments);
}, jvm.inherits(jvm.SVGElement, jvm.AbstractElement), jvm.SVGElement.svgns = "http://www.w3.org/2000/svg", jvm.SVGElement.prototype.createElement = function (e) {
  return document.createElementNS(jvm.SVGElement.svgns, e);
}, jvm.SVGElement.prototype.addClass = function (e) {
  this.node.setAttribute("class", e);
}, jvm.SVGElement.prototype.getElementCtr = function (e) {
  return jvm["SVG" + e];
}, jvm.SVGElement.prototype.getBBox = function () {
  return this.node.getBBox();
}, jvm.SVGGroupElement = function () {
  jvm.SVGGroupElement.parentClass.call(this, "g");
}, jvm.inherits(jvm.SVGGroupElement, jvm.SVGElement), jvm.SVGGroupElement.prototype.add = function (e) {
  this.node.appendChild(e.node);
}, jvm.SVGCanvasElement = function (e, t, n) {
  this.classPrefix = "SVG", jvm.SVGCanvasElement.parentClass.call(this, "svg"), jvm.AbstractCanvasElement.apply(this, arguments);
}, jvm.inherits(jvm.SVGCanvasElement, jvm.SVGElement), jvm.mixin(jvm.SVGCanvasElement, jvm.AbstractCanvasElement), jvm.SVGCanvasElement.prototype.setSize = function (e, t) {
  this.width = e, this.height = t, this.node.setAttribute("width", e), this.node.setAttribute("height", t);
}, jvm.SVGCanvasElement.prototype.applyTransformParams = function (e, t, n) {
  this.scale = e, this.transX = t, this.transY = n, this.rootElement.node.setAttribute("transform", "scale(" + e + ") translate(" + t + ", " + n + ")");
}, jvm.SVGShapeElement = function (e, t, n) {
  jvm.SVGShapeElement.parentClass.call(this, e, t), jvm.AbstractShapeElement.apply(this, arguments);
}, jvm.inherits(jvm.SVGShapeElement, jvm.SVGElement), jvm.mixin(jvm.SVGShapeElement, jvm.AbstractShapeElement), jvm.SVGPathElement = function (e, t) {
  jvm.SVGPathElement.parentClass.call(this, "path", e, t), this.node.setAttribute("fill-rule", "evenodd");
}, jvm.inherits(jvm.SVGPathElement, jvm.SVGShapeElement), jvm.SVGCircleElement = function (e, t) {
  jvm.SVGCircleElement.parentClass.call(this, "circle", e, t);
}, jvm.inherits(jvm.SVGCircleElement, jvm.SVGShapeElement), jvm.VMLElement = function (e, t) {
  jvm.VMLElement.VMLInitialized || jvm.VMLElement.initializeVML(), jvm.VMLElement.parentClass.apply(this, arguments);
}, jvm.inherits(jvm.VMLElement, jvm.AbstractElement), jvm.VMLElement.VMLInitialized = !1, jvm.VMLElement.initializeVML = function () {
  try {
    document.namespaces.rvml || document.namespaces.add("rvml", "urn:schemas-microsoft-com:vml"), jvm.VMLElement.prototype.createElement = function (e) {
      return document.createElement("<rvml:" + e + ' class="rvml">');
    };
  } catch (e) {
    jvm.VMLElement.prototype.createElement = function (e) {
      return document.createElement("<" + e + ' xmlns="urn:schemas-microsoft.com:vml" class="rvml">');
    };
  }

  document.createStyleSheet().addRule(".rvml", "behavior:url(#default#VML)"), jvm.VMLElement.VMLInitialized = !0;
}, jvm.VMLElement.prototype.getElementCtr = function (e) {
  return jvm["VML" + e];
}, jvm.VMLElement.prototype.addClass = function (e) {
  jvm.$(this.node).addClass(e);
}, jvm.VMLElement.prototype.applyAttr = function (e, t) {
  this.node[e] = t;
}, jvm.VMLElement.prototype.getBBox = function () {
  var e = jvm.$(this.node);
  return {
    x: e.position().left / this.canvas.scale,
    y: e.position().top / this.canvas.scale,
    width: e.width() / this.canvas.scale,
    height: e.height() / this.canvas.scale
  };
}, jvm.VMLGroupElement = function () {
  jvm.VMLGroupElement.parentClass.call(this, "group"), this.node.style.left = "0px", this.node.style.top = "0px", this.node.coordorigin = "0 0";
}, jvm.inherits(jvm.VMLGroupElement, jvm.VMLElement), jvm.VMLGroupElement.prototype.add = function (e) {
  this.node.appendChild(e.node);
}, jvm.VMLCanvasElement = function (e, t, n) {
  this.classPrefix = "VML", jvm.VMLCanvasElement.parentClass.call(this, "group"), jvm.AbstractCanvasElement.apply(this, arguments), this.node.style.position = "absolute";
}, jvm.inherits(jvm.VMLCanvasElement, jvm.VMLElement), jvm.mixin(jvm.VMLCanvasElement, jvm.AbstractCanvasElement), jvm.VMLCanvasElement.prototype.setSize = function (e, t) {
  var n, r, i, s;
  this.width = e, this.height = t, this.node.style.width = e + "px", this.node.style.height = t + "px", this.node.coordsize = e + " " + t, this.node.coordorigin = "0 0";

  if (this.rootElement) {
    n = this.rootElement.node.getElementsByTagName("shape");

    for (i = 0, s = n.length; i < s; i++) {
      n[i].coordsize = e + " " + t, n[i].style.width = e + "px", n[i].style.height = t + "px";
    }

    r = this.node.getElementsByTagName("group");

    for (i = 0, s = r.length; i < s; i++) {
      r[i].coordsize = e + " " + t, r[i].style.width = e + "px", r[i].style.height = t + "px";
    }
  }
}, jvm.VMLCanvasElement.prototype.applyTransformParams = function (e, t, n) {
  this.scale = e, this.transX = t, this.transY = n, this.rootElement.node.coordorigin = this.width - t - this.width / 100 + "," + (this.height - n - this.height / 100), this.rootElement.node.coordsize = this.width / e + "," + this.height / e;
}, jvm.VMLShapeElement = function (e, t) {
  jvm.VMLShapeElement.parentClass.call(this, e, t), this.fillElement = new jvm.VMLElement("fill"), this.strokeElement = new jvm.VMLElement("stroke"), this.node.appendChild(this.fillElement.node), this.node.appendChild(this.strokeElement.node), this.node.stroked = !1, jvm.AbstractShapeElement.apply(this, arguments);
}, jvm.inherits(jvm.VMLShapeElement, jvm.VMLElement), jvm.mixin(jvm.VMLShapeElement, jvm.AbstractShapeElement), jvm.VMLShapeElement.prototype.applyAttr = function (e, t) {
  switch (e) {
    case "fill":
      this.node.fillcolor = t;
      break;

    case "fill-opacity":
      this.fillElement.node.opacity = Math.round(t * 100) + "%";
      break;

    case "stroke":
      t === "none" ? this.node.stroked = !1 : this.node.stroked = !0, this.node.strokecolor = t;
      break;

    case "stroke-opacity":
      this.strokeElement.node.opacity = Math.round(t * 100) + "%";
      break;

    case "stroke-width":
      parseInt(t, 10) === 0 ? this.node.stroked = !1 : this.node.stroked = !0, this.node.strokeweight = t;
      break;

    case "d":
      this.node.path = jvm.VMLPathElement.pathSvgToVml(t);
      break;

    default:
      jvm.VMLShapeElement.parentClass.prototype.applyAttr.apply(this, arguments);
  }
}, jvm.VMLPathElement = function (e, t) {
  var n = new jvm.VMLElement("skew");
  jvm.VMLPathElement.parentClass.call(this, "shape", e, t), this.node.coordorigin = "0 0", n.node.on = !0, n.node.matrix = "0.01,0,0,0.01,0,0", n.node.offset = "0,0", this.node.appendChild(n.node);
}, jvm.inherits(jvm.VMLPathElement, jvm.VMLShapeElement), jvm.VMLPathElement.prototype.applyAttr = function (e, t) {
  e === "d" ? this.node.path = jvm.VMLPathElement.pathSvgToVml(t) : jvm.VMLShapeElement.prototype.applyAttr.call(this, e, t);
}, jvm.VMLPathElement.pathSvgToVml = function (e) {
  var t = "",
      n = 0,
      r = 0,
      i,
      s;
  return e = e.replace(/(-?\d+)e(-?\d+)/g, "0"), e.replace(/([MmLlHhVvCcSs])\s*((?:-?\d*(?:\.\d+)?\s*,?\s*)+)/g, function (e, t, o, u) {
    o = o.replace(/(\d)-/g, "$1,-").replace(/^\s+/g, "").replace(/\s+$/g, "").replace(/\s+/g, ",").split(","), o[0] || o.shift();

    for (var a = 0, f = o.length; a < f; a++) {
      o[a] = Math.round(100 * o[a]);
    }

    switch (t) {
      case "m":
        return n += o[0], r += o[1], "t" + o.join(",");

      case "M":
        return n = o[0], r = o[1], "m" + o.join(",");

      case "l":
        return n += o[0], r += o[1], "r" + o.join(",");

      case "L":
        return n = o[0], r = o[1], "l" + o.join(",");

      case "h":
        return n += o[0], "r" + o[0] + ",0";

      case "H":
        return n = o[0], "l" + n + "," + r;

      case "v":
        return r += o[0], "r0," + o[0];

      case "V":
        return r = o[0], "l" + n + "," + r;

      case "c":
        return i = n + o[o.length - 4], s = r + o[o.length - 3], n += o[o.length - 2], r += o[o.length - 1], "v" + o.join(",");

      case "C":
        return i = o[o.length - 4], s = o[o.length - 3], n = o[o.length - 2], r = o[o.length - 1], "c" + o.join(",");

      case "s":
        return o.unshift(r - s), o.unshift(n - i), i = n + o[o.length - 4], s = r + o[o.length - 3], n += o[o.length - 2], r += o[o.length - 1], "v" + o.join(",");

      case "S":
        return o.unshift(r + r - s), o.unshift(n + n - i), i = o[o.length - 4], s = o[o.length - 3], n = o[o.length - 2], r = o[o.length - 1], "c" + o.join(",");
    }

    return "";
  }).replace(/z/g, "e");
}, jvm.VMLCircleElement = function (e, t) {
  jvm.VMLCircleElement.parentClass.call(this, "oval", e, t);
}, jvm.inherits(jvm.VMLCircleElement, jvm.VMLShapeElement), jvm.VMLCircleElement.prototype.applyAttr = function (e, t) {
  switch (e) {
    case "r":
      this.node.style.width = t * 2 + "px", this.node.style.height = t * 2 + "px", this.applyAttr("cx", this.get("cx") || 0), this.applyAttr("cy", this.get("cy") || 0);
      break;

    case "cx":
      if (!t) return;
      this.node.style.left = t - (this.get("r") || 0) + "px";
      break;

    case "cy":
      if (!t) return;
      this.node.style.top = t - (this.get("r") || 0) + "px";
      break;

    default:
      jvm.VMLCircleElement.parentClass.prototype.applyAttr.call(this, e, t);
  }
}, jvm.VectorCanvas = function (e, t, n) {
  return this.mode = window.SVGAngle ? "svg" : "vml", this.mode == "svg" ? this.impl = new jvm.SVGCanvasElement(e, t, n) : this.impl = new jvm.VMLCanvasElement(e, t, n), this.impl;
}, jvm.SimpleScale = function (e) {
  this.scale = e;
}, jvm.SimpleScale.prototype.getValue = function (e) {
  return e;
}, jvm.OrdinalScale = function (e) {
  this.scale = e;
}, jvm.OrdinalScale.prototype.getValue = function (e) {
  return this.scale[e];
}, jvm.NumericScale = function (e, t, n, r) {
  this.scale = [], t = t || "linear", e && this.setScale(e), t && this.setNormalizeFunction(t), n && this.setMin(n), r && this.setMax(r);
}, jvm.NumericScale.prototype = {
  setMin: function setMin(e) {
    this.clearMinValue = e, typeof this.normalize == "function" ? this.minValue = this.normalize(e) : this.minValue = e;
  },
  setMax: function setMax(e) {
    this.clearMaxValue = e, typeof this.normalize == "function" ? this.maxValue = this.normalize(e) : this.maxValue = e;
  },
  setScale: function setScale(e) {
    var t;

    for (t = 0; t < e.length; t++) {
      this.scale[t] = [e[t]];
    }
  },
  setNormalizeFunction: function setNormalizeFunction(e) {
    e === "polynomial" ? this.normalize = function (e) {
      return Math.pow(e, .2);
    } : e === "linear" ? delete this.normalize : this.normalize = e, this.setMin(this.clearMinValue), this.setMax(this.clearMaxValue);
  },
  getValue: function getValue(e) {
    var t = [],
        n = 0,
        r,
        i = 0,
        s;
    typeof this.normalize == "function" && (e = this.normalize(e));

    for (i = 0; i < this.scale.length - 1; i++) {
      r = this.vectorLength(this.vectorSubtract(this.scale[i + 1], this.scale[i])), t.push(r), n += r;
    }

    s = (this.maxValue - this.minValue) / n;

    for (i = 0; i < t.length; i++) {
      t[i] *= s;
    }

    i = 0, e -= this.minValue;

    while (e - t[i] >= 0) {
      e -= t[i], i++;
    }

    return i == this.scale.length - 1 ? e = this.vectorToNum(this.scale[i]) : e = this.vectorToNum(this.vectorAdd(this.scale[i], this.vectorMult(this.vectorSubtract(this.scale[i + 1], this.scale[i]), e / t[i]))), e;
  },
  vectorToNum: function vectorToNum(e) {
    var t = 0,
        n;

    for (n = 0; n < e.length; n++) {
      t += Math.round(e[n]) * Math.pow(256, e.length - n - 1);
    }

    return t;
  },
  vectorSubtract: function vectorSubtract(e, t) {
    var n = [],
        r;

    for (r = 0; r < e.length; r++) {
      n[r] = e[r] - t[r];
    }

    return n;
  },
  vectorAdd: function vectorAdd(e, t) {
    var n = [],
        r;

    for (r = 0; r < e.length; r++) {
      n[r] = e[r] + t[r];
    }

    return n;
  },
  vectorMult: function vectorMult(e, t) {
    var n = [],
        r;

    for (r = 0; r < e.length; r++) {
      n[r] = e[r] * t;
    }

    return n;
  },
  vectorLength: function vectorLength(e) {
    var t = 0,
        n;

    for (n = 0; n < e.length; n++) {
      t += e[n] * e[n];
    }

    return Math.sqrt(t);
  }
}, jvm.ColorScale = function (e, t, n, r) {
  jvm.ColorScale.parentClass.apply(this, arguments);
}, jvm.inherits(jvm.ColorScale, jvm.NumericScale), jvm.ColorScale.prototype.setScale = function (e) {
  var t;

  for (t = 0; t < e.length; t++) {
    this.scale[t] = jvm.ColorScale.rgbToArray(e[t]);
  }
}, jvm.ColorScale.prototype.getValue = function (e) {
  return jvm.ColorScale.numToRgb(jvm.ColorScale.parentClass.prototype.getValue.call(this, e));
}, jvm.ColorScale.arrayToRgb = function (e) {
  var t = "#",
      n,
      r;

  for (r = 0; r < e.length; r++) {
    n = e[r].toString(16), t += n.length == 1 ? "0" + n : n;
  }

  return t;
}, jvm.ColorScale.numToRgb = function (e) {
  e = e.toString(16);

  while (e.length < 6) {
    e = "0" + e;
  }

  return "#" + e;
}, jvm.ColorScale.rgbToArray = function (e) {
  return e = e.substr(1), [parseInt(e.substr(0, 2), 16), parseInt(e.substr(2, 2), 16), parseInt(e.substr(4, 2), 16)];
}, jvm.DataSeries = function (e, t) {
  var n;
  e = e || {}, e.attribute = e.attribute || "fill", this.elements = t, this.params = e, e.attributes && this.setAttributes(e.attributes), jvm.$.isArray(e.scale) ? (n = e.attribute === "fill" || e.attribute === "stroke" ? jvm.ColorScale : jvm.NumericScale, this.scale = new n(e.scale, e.normalizeFunction, e.min, e.max)) : e.scale ? this.scale = new jvm.OrdinalScale(e.scale) : this.scale = new jvm.SimpleScale(e.scale), this.values = e.values || {}, this.setValues(this.values);
}, jvm.DataSeries.prototype = {
  setAttributes: function setAttributes(e, t) {
    var n = e,
        r;
    if (typeof e == "string") this.elements[e] && this.elements[e].setStyle(this.params.attribute, t);else for (r in n) {
      this.elements[r] && this.elements[r].element.setStyle(this.params.attribute, n[r]);
    }
  },
  setValues: function setValues(e) {
    var t = Number.MIN_VALUE,
        n = Number.MAX_VALUE,
        r,
        i,
        s = {};
    if (this.scale instanceof jvm.OrdinalScale || this.scale instanceof jvm.SimpleScale) for (i in e) {
      e[i] ? s[i] = this.scale.getValue(e[i]) : s[i] = this.elements[i].element.style.initial[this.params.attribute];
    } else {
      if (!this.params.min || !this.params.max) {
        for (i in e) {
          r = parseFloat(e[i]), r > t && (t = e[i]), r < n && (n = r);
        }

        this.params.min || this.scale.setMin(n), this.params.max || this.scale.setMax(t), this.params.min = n, this.params.max = t;
      }

      for (i in e) {
        r = parseFloat(e[i]), isNaN(r) ? s[i] = this.elements[i].element.style.initial[this.params.attribute] : s[i] = this.scale.getValue(r);
      }
    }
    this.setAttributes(s), jvm.$.extend(this.values, e);
  },
  clear: function clear() {
    var e,
        t = {};

    for (e in this.values) {
      this.elements[e] && (t[e] = this.elements[e].element.style.initial[this.params.attribute]);
    }

    this.setAttributes(t), this.values = {};
  },
  setScale: function setScale(e) {
    this.scale.setScale(e), this.values && this.setValues(this.values);
  },
  setNormalizeFunction: function setNormalizeFunction(e) {
    this.scale.setNormalizeFunction(e), this.values && this.setValues(this.values);
  }
}, jvm.Proj = {
  degRad: 180 / Math.PI,
  radDeg: Math.PI / 180,
  radius: 6381372,
  sgn: function sgn(e) {
    return e > 0 ? 1 : e < 0 ? -1 : e;
  },
  mill: function mill(e, t, n) {
    return {
      x: this.radius * (t - n) * this.radDeg,
      y: -this.radius * Math.log(Math.tan((45 + .4 * e) * this.radDeg)) / .8
    };
  },
  mill_inv: function mill_inv(e, t, n) {
    return {
      lat: (2.5 * Math.atan(Math.exp(.8 * t / this.radius)) - 5 * Math.PI / 8) * this.degRad,
      lng: (n * this.radDeg + e / this.radius) * this.degRad
    };
  },
  merc: function merc(e, t, n) {
    return {
      x: this.radius * (t - n) * this.radDeg,
      y: -this.radius * Math.log(Math.tan(Math.PI / 4 + e * Math.PI / 360))
    };
  },
  merc_inv: function merc_inv(e, t, n) {
    return {
      lat: (2 * Math.atan(Math.exp(t / this.radius)) - Math.PI / 2) * this.degRad,
      lng: (n * this.radDeg + e / this.radius) * this.degRad
    };
  },
  aea: function aea(e, t, n) {
    var r = 0,
        i = n * this.radDeg,
        s = 29.5 * this.radDeg,
        o = 45.5 * this.radDeg,
        u = e * this.radDeg,
        a = t * this.radDeg,
        f = (Math.sin(s) + Math.sin(o)) / 2,
        l = Math.cos(s) * Math.cos(s) + 2 * f * Math.sin(s),
        c = f * (a - i),
        h = Math.sqrt(l - 2 * f * Math.sin(u)) / f,
        p = Math.sqrt(l - 2 * f * Math.sin(r)) / f;
    return {
      x: h * Math.sin(c) * this.radius,
      y: -(p - h * Math.cos(c)) * this.radius
    };
  },
  aea_inv: function aea_inv(e, t, n) {
    var r = e / this.radius,
        i = t / this.radius,
        s = 0,
        o = n * this.radDeg,
        u = 29.5 * this.radDeg,
        a = 45.5 * this.radDeg,
        f = (Math.sin(u) + Math.sin(a)) / 2,
        l = Math.cos(u) * Math.cos(u) + 2 * f * Math.sin(u),
        c = Math.sqrt(l - 2 * f * Math.sin(s)) / f,
        h = Math.sqrt(r * r + (c - i) * (c - i)),
        p = Math.atan(r / (c - i));
    return {
      lat: Math.asin((l - h * h * f * f) / (2 * f)) * this.degRad,
      lng: (o + p / f) * this.degRad
    };
  },
  lcc: function lcc(e, t, n) {
    var r = 0,
        i = n * this.radDeg,
        s = t * this.radDeg,
        o = 33 * this.radDeg,
        u = 45 * this.radDeg,
        a = e * this.radDeg,
        f = Math.log(Math.cos(o) * (1 / Math.cos(u))) / Math.log(Math.tan(Math.PI / 4 + u / 2) * (1 / Math.tan(Math.PI / 4 + o / 2))),
        l = Math.cos(o) * Math.pow(Math.tan(Math.PI / 4 + o / 2), f) / f,
        c = l * Math.pow(1 / Math.tan(Math.PI / 4 + a / 2), f),
        h = l * Math.pow(1 / Math.tan(Math.PI / 4 + r / 2), f);
    return {
      x: c * Math.sin(f * (s - i)) * this.radius,
      y: -(h - c * Math.cos(f * (s - i))) * this.radius
    };
  },
  lcc_inv: function lcc_inv(e, t, n) {
    var r = e / this.radius,
        i = t / this.radius,
        s = 0,
        o = n * this.radDeg,
        u = 33 * this.radDeg,
        a = 45 * this.radDeg,
        f = Math.log(Math.cos(u) * (1 / Math.cos(a))) / Math.log(Math.tan(Math.PI / 4 + a / 2) * (1 / Math.tan(Math.PI / 4 + u / 2))),
        l = Math.cos(u) * Math.pow(Math.tan(Math.PI / 4 + u / 2), f) / f,
        c = l * Math.pow(1 / Math.tan(Math.PI / 4 + s / 2), f),
        h = this.sgn(f) * Math.sqrt(r * r + (c - i) * (c - i)),
        p = Math.atan(r / (c - i));
    return {
      lat: (2 * Math.atan(Math.pow(l / h, 1 / f)) - Math.PI / 2) * this.degRad,
      lng: (o + p / f) * this.degRad
    };
  }
}, jvm.WorldMap = function (e) {
  var t = this,
      n;
  this.params = jvm.$.extend(!0, {}, jvm.WorldMap.defaultParams, e);
  if (!jvm.WorldMap.maps[this.params.map]) throw new Error("Attempt to use map which was not loaded: " + this.params.map);
  this.mapData = jvm.WorldMap.maps[this.params.map], this.markers = {}, this.regions = {}, this.regionsColors = {}, this.regionsData = {}, this.container = jvm.$("<div>").css({
    width: "100%",
    height: "100%"
  }).addClass("jvectormap-container"), this.params.container.append(this.container), this.container.data("mapObject", this), this.container.css({
    position: "relative",
    overflow: "hidden"
  }), this.defaultWidth = this.mapData.width, this.defaultHeight = this.mapData.height, this.setBackgroundColor(this.params.backgroundColor), this.onResize = function () {
    t.setSize();
  }, jvm.$(window).resize(this.onResize);

  for (n in jvm.WorldMap.apiEvents) {
    this.params[n] && this.container.bind(jvm.WorldMap.apiEvents[n] + ".jvectormap", this.params[n]);
  }

  this.canvas = new jvm.VectorCanvas(this.container[0], this.width, this.height), "ontouchstart" in window || window.DocumentTouch && document instanceof DocumentTouch ? this.params.bindTouchEvents && this.bindContainerTouchEvents() : this.bindContainerEvents(), this.bindElementEvents(), this.createLabel(), this.params.zoomButtons && this.bindZoomButtons(), this.createRegions(), this.createMarkers(this.params.markers || {}), this.setSize(), this.params.focusOn && (_typeof(this.params.focusOn) == "object" ? this.setFocus.call(this, this.params.focusOn.scale, this.params.focusOn.x, this.params.focusOn.y) : this.setFocus.call(this, this.params.focusOn)), this.params.selectedRegions && this.setSelectedRegions(this.params.selectedRegions), this.params.selectedMarkers && this.setSelectedMarkers(this.params.selectedMarkers), this.params.series && this.createSeries();
}, jvm.WorldMap.prototype = {
  transX: 0,
  transY: 0,
  scale: 1,
  baseTransX: 0,
  baseTransY: 0,
  baseScale: 1,
  width: 0,
  height: 0,
  setBackgroundColor: function setBackgroundColor(e) {
    this.container.css("background-color", e);
  },
  resize: function resize() {
    var e = this.baseScale;
    this.width / this.height > this.defaultWidth / this.defaultHeight ? (this.baseScale = this.height / this.defaultHeight, this.baseTransX = Math.abs(this.width - this.defaultWidth * this.baseScale) / (2 * this.baseScale)) : (this.baseScale = this.width / this.defaultWidth, this.baseTransY = Math.abs(this.height - this.defaultHeight * this.baseScale) / (2 * this.baseScale)), this.scale *= this.baseScale / e, this.transX *= this.baseScale / e, this.transY *= this.baseScale / e;
  },
  setSize: function setSize() {
    this.width = this.container.width(), this.height = this.container.height(), this.resize(), this.canvas.setSize(this.width, this.height), this.applyTransform();
  },
  reset: function reset() {
    var e, t;

    for (e in this.series) {
      for (t = 0; t < this.series[e].length; t++) {
        this.series[e][t].clear();
      }
    }

    this.scale = this.baseScale, this.transX = this.baseTransX, this.transY = this.baseTransY, this.applyTransform();
  },
  applyTransform: function applyTransform() {
    var e, t, n, r;
    this.defaultWidth * this.scale <= this.width ? (e = (this.width - this.defaultWidth * this.scale) / (2 * this.scale), n = (this.width - this.defaultWidth * this.scale) / (2 * this.scale)) : (e = 0, n = (this.width - this.defaultWidth * this.scale) / this.scale), this.defaultHeight * this.scale <= this.height ? (t = (this.height - this.defaultHeight * this.scale) / (2 * this.scale), r = (this.height - this.defaultHeight * this.scale) / (2 * this.scale)) : (t = 0, r = (this.height - this.defaultHeight * this.scale) / this.scale), this.transY > t ? this.transY = t : this.transY < r && (this.transY = r), this.transX > e ? this.transX = e : this.transX < n && (this.transX = n), this.canvas.applyTransformParams(this.scale, this.transX, this.transY), this.markers && this.repositionMarkers(), this.container.trigger("viewportChange", [this.scale / this.baseScale, this.transX, this.transY]);
  },
  bindContainerEvents: function bindContainerEvents() {
    var e = !1,
        t,
        n,
        r = this;
    this.container.mousemove(function (i) {
      return e && (r.transX -= (t - i.pageX) / r.scale, r.transY -= (n - i.pageY) / r.scale, r.applyTransform(), t = i.pageX, n = i.pageY), !1;
    }).mousedown(function (r) {
      return e = !0, t = r.pageX, n = r.pageY, !1;
    }), jvm.$("body").mouseup(function () {
      e = !1;
    }), this.params.zoomOnScroll && this.container.mousewheel(function (e, t, n, i) {
      var s = jvm.$(r.container).offset(),
          o = e.pageX - s.left,
          u = e.pageY - s.top,
          a = Math.pow(1.3, i);
      r.label.hide(), r.setScale(r.scale * a, o, u), e.preventDefault();
    });
  },
  bindContainerTouchEvents: function bindContainerTouchEvents() {
    var e,
        t,
        n = this,
        r,
        i,
        s,
        o,
        u,
        a = function a(_a) {
      var f = _a.originalEvent.touches,
          l,
          c,
          h,
          p;
      _a.type == "touchstart" && (u = 0), f.length == 1 ? (u == 1 && (h = n.transX, p = n.transY, n.transX -= (r - f[0].pageX) / n.scale, n.transY -= (i - f[0].pageY) / n.scale, n.applyTransform(), n.label.hide(), (h != n.transX || p != n.transY) && _a.preventDefault()), r = f[0].pageX, i = f[0].pageY) : f.length == 2 && (u == 2 ? (c = Math.sqrt(Math.pow(f[0].pageX - f[1].pageX, 2) + Math.pow(f[0].pageY - f[1].pageY, 2)) / t, n.setScale(e * c, s, o), n.label.hide(), _a.preventDefault()) : (l = jvm.$(n.container).offset(), f[0].pageX > f[1].pageX ? s = f[1].pageX + (f[0].pageX - f[1].pageX) / 2 : s = f[0].pageX + (f[1].pageX - f[0].pageX) / 2, f[0].pageY > f[1].pageY ? o = f[1].pageY + (f[0].pageY - f[1].pageY) / 2 : o = f[0].pageY + (f[1].pageY - f[0].pageY) / 2, s -= l.left, o -= l.top, e = n.scale, t = Math.sqrt(Math.pow(f[0].pageX - f[1].pageX, 2) + Math.pow(f[0].pageY - f[1].pageY, 2)))), u = f.length;
    };

    jvm.$(this.container).bind("touchstart", a), jvm.$(this.container).bind("touchmove", a);
  },
  bindElementEvents: function bindElementEvents() {
    var e = this,
        t;
    this.container.mousemove(function () {
      t = !0;
    }), this.container.delegate("[class~='jvectormap-element']", "mouseover mouseout", function (t) {
      var n = this,
          r = jvm.$(this).attr("class").baseVal ? jvm.$(this).attr("class").baseVal : jvm.$(this).attr("class"),
          i = r.indexOf("jvectormap-region") === -1 ? "marker" : "region",
          s = i == "region" ? jvm.$(this).attr("data-code") : jvm.$(this).attr("data-index"),
          o = i == "region" ? e.regions[s].element : e.markers[s].element,
          u = i == "region" ? e.mapData.paths[s].name : e.markers[s].config.name || "",
          a = jvm.$.Event(i + "LabelShow.jvectormap"),
          f = jvm.$.Event(i + "Over.jvectormap");
      t.type == "mouseover" ? (e.container.trigger(f, [s]), f.isDefaultPrevented() || o.setHovered(!0), e.label.text(u), e.container.trigger(a, [e.label, s]), a.isDefaultPrevented() || (e.label.show(), e.labelWidth = e.label.width(), e.labelHeight = e.label.height())) : (o.setHovered(!1), e.label.hide(), e.container.trigger(i + "Out.jvectormap", [s]));
    }), this.container.delegate("[class~='jvectormap-element']", "mousedown", function (e) {
      t = !1;
    }), this.container.delegate("[class~='jvectormap-element']", "mouseup", function (n) {
      var r = this,
          i = jvm.$(this).attr("class").baseVal ? jvm.$(this).attr("class").baseVal : jvm.$(this).attr("class"),
          s = i.indexOf("jvectormap-region") === -1 ? "marker" : "region",
          o = s == "region" ? jvm.$(this).attr("data-code") : jvm.$(this).attr("data-index"),
          u = jvm.$.Event(s + "Click.jvectormap"),
          a = s == "region" ? e.regions[o].element : e.markers[o].element;

      if (!t) {
        e.container.trigger(u, [o]);
        if (s === "region" && e.params.regionsSelectable || s === "marker" && e.params.markersSelectable) u.isDefaultPrevented() || (e.params[s + "sSelectableOne"] && e.clearSelected(s + "s"), a.setSelected(!a.isSelected));
      }
    });
  },
  bindZoomButtons: function bindZoomButtons() {
    var e = this;
    jvm.$("<div/>").addClass("jvectormap-zoomin").text("+").appendTo(this.container), jvm.$("<div/>").addClass("jvectormap-zoomout").html("&#x2212;").appendTo(this.container), this.container.find(".jvectormap-zoomin").click(function () {
      e.setScale(e.scale * e.params.zoomStep, e.width / 2, e.height / 2);
    }), this.container.find(".jvectormap-zoomout").click(function () {
      e.setScale(e.scale / e.params.zoomStep, e.width / 2, e.height / 2);
    });
  },
  createLabel: function createLabel() {
    var e = this;
    this.label = jvm.$("<div/>").addClass("jvectormap-label").appendTo(jvm.$("body")), this.container.mousemove(function (t) {
      var n = t.pageX - 15 - e.labelWidth,
          r = t.pageY - 15 - e.labelHeight;
      n < 5 && (n = t.pageX + 15), r < 5 && (r = t.pageY + 15), e.label.is(":visible") && e.label.css({
        left: n,
        top: r
      });
    });
  },
  setScale: function setScale(e, t, n, r) {
    var i,
        s = jvm.$.Event("zoom.jvectormap");
    e > this.params.zoomMax * this.baseScale ? e = this.params.zoomMax * this.baseScale : e < this.params.zoomMin * this.baseScale && (e = this.params.zoomMin * this.baseScale), typeof t != "undefined" && typeof n != "undefined" && (i = e / this.scale, r ? (this.transX = t + this.defaultWidth * (this.width / (this.defaultWidth * e)) / 2, this.transY = n + this.defaultHeight * (this.height / (this.defaultHeight * e)) / 2) : (this.transX -= (i - 1) / e * t, this.transY -= (i - 1) / e * n)), this.scale = e, this.applyTransform(), this.container.trigger(s, [e / this.baseScale]);
  },
  setFocus: function setFocus(e, t, n) {
    var r, i, s, o, u;

    if (jvm.$.isArray(e) || this.regions[e]) {
      jvm.$.isArray(e) ? o = e : o = [e];

      for (u = 0; u < o.length; u++) {
        this.regions[o[u]] && (i = this.regions[o[u]].element.getBBox(), i && (typeof r == "undefined" ? r = i : (s = {
          x: Math.min(r.x, i.x),
          y: Math.min(r.y, i.y),
          width: Math.max(r.x + r.width, i.x + i.width) - Math.min(r.x, i.x),
          height: Math.max(r.y + r.height, i.y + i.height) - Math.min(r.y, i.y)
        }, r = s)));
      }

      this.setScale(Math.min(this.width / r.width, this.height / r.height), -(r.x + r.width / 2), -(r.y + r.height / 2), !0);
    } else e *= this.baseScale, this.setScale(e, -t * this.defaultWidth, -n * this.defaultHeight, !0);
  },
  getSelected: function getSelected(e) {
    var t,
        n = [];

    for (t in this[e]) {
      this[e][t].element.isSelected && n.push(t);
    }

    return n;
  },
  getSelectedRegions: function getSelectedRegions() {
    return this.getSelected("regions");
  },
  getSelectedMarkers: function getSelectedMarkers() {
    return this.getSelected("markers");
  },
  setSelected: function setSelected(e, t) {
    var n;
    _typeof(t) != "object" && (t = [t]);
    if (jvm.$.isArray(t)) for (n = 0; n < t.length; n++) {
      this[e][t[n]].element.setSelected(!0);
    } else for (n in t) {
      this[e][n].element.setSelected(!!t[n]);
    }
  },
  setSelectedRegions: function setSelectedRegions(e) {
    this.setSelected("regions", e);
  },
  setSelectedMarkers: function setSelectedMarkers(e) {
    this.setSelected("markers", e);
  },
  clearSelected: function clearSelected(e) {
    var t = {},
        n = this.getSelected(e),
        r;

    for (r = 0; r < n.length; r++) {
      t[n[r]] = !1;
    }

    this.setSelected(e, t);
  },
  clearSelectedRegions: function clearSelectedRegions() {
    this.clearSelected("regions");
  },
  clearSelectedMarkers: function clearSelectedMarkers() {
    this.clearSelected("markers");
  },
  getMapObject: function getMapObject() {
    return this;
  },
  getRegionName: function getRegionName(e) {
    return this.mapData.paths[e].name;
  },
  createRegions: function createRegions() {
    var e,
        t,
        n = this;

    for (e in this.mapData.paths) {
      t = this.canvas.addPath({
        d: this.mapData.paths[e].path,
        "data-code": e
      }, jvm.$.extend(!0, {}, this.params.regionStyle)), jvm.$(t.node).bind("selected", function (e, t) {
        n.container.trigger("regionSelected.jvectormap", [jvm.$(this).attr("data-code"), t, n.getSelectedRegions()]);
      }), t.addClass("jvectormap-region jvectormap-element"), this.regions[e] = {
        element: t,
        config: this.mapData.paths[e]
      };
    }
  },
  createMarkers: function createMarkers(e) {
    var t,
        n,
        r,
        i,
        s,
        o = this;
    this.markersGroup = this.markersGroup || this.canvas.addGroup();

    if (jvm.$.isArray(e)) {
      s = e.slice(), e = {};

      for (t = 0; t < s.length; t++) {
        e[t] = s[t];
      }
    }

    for (t in e) {
      i = e[t] instanceof Array ? {
        latLng: e[t]
      } : e[t], r = this.getMarkerPosition(i), r !== !1 && (n = this.canvas.addCircle({
        "data-index": t,
        cx: r.x,
        cy: r.y
      }, jvm.$.extend(!0, {}, this.params.markerStyle, {
        initial: i.style || {}
      }), this.markersGroup), n.addClass("jvectormap-marker jvectormap-element"), jvm.$(n.node).bind("selected", function (e, t) {
        o.container.trigger("markerSelected.jvectormap", [jvm.$(this).attr("data-index"), t, o.getSelectedMarkers()]);
      }), this.markers[t] && this.removeMarkers([t]), this.markers[t] = {
        element: n,
        config: i
      });
    }
  },
  repositionMarkers: function repositionMarkers() {
    var e, t;

    for (e in this.markers) {
      t = this.getMarkerPosition(this.markers[e].config), t !== !1 && this.markers[e].element.setStyle({
        cx: t.x,
        cy: t.y
      });
    }
  },
  getMarkerPosition: function getMarkerPosition(e) {
    return jvm.WorldMap.maps[this.params.map].projection ? this.latLngToPoint.apply(this, e.latLng || [0, 0]) : {
      x: e.coords[0] * this.scale + this.transX * this.scale,
      y: e.coords[1] * this.scale + this.transY * this.scale
    };
  },
  addMarker: function addMarker(e, t, n) {
    var r = {},
        i = [],
        s,
        o,
        n = n || [];
    r[e] = t;

    for (o = 0; o < n.length; o++) {
      s = {}, s[e] = n[o], i.push(s);
    }

    this.addMarkers(r, i);
  },
  addMarkers: function addMarkers(e, t) {
    var n;
    t = t || [], this.createMarkers(e);

    for (n = 0; n < t.length; n++) {
      this.series.markers[n].setValues(t[n] || {});
    }
  },
  removeMarkers: function removeMarkers(e) {
    var t;

    for (t = 0; t < e.length; t++) {
      this.markers[e[t]].element.remove(), delete this.markers[e[t]];
    }
  },
  removeAllMarkers: function removeAllMarkers() {
    var e,
        t = [];

    for (e in this.markers) {
      t.push(e);
    }

    this.removeMarkers(t);
  },
  latLngToPoint: function latLngToPoint(e, t) {
    var n,
        r = jvm.WorldMap.maps[this.params.map].projection,
        i = r.centralMeridian,
        s = this.width - this.baseTransX * 2 * this.baseScale,
        o = this.height - this.baseTransY * 2 * this.baseScale,
        u,
        a,
        f = this.scale / this.baseScale;
    return t < -180 + i && (t += 360), n = jvm.Proj[r.type](e, t, i), u = this.getInsetForPoint(n.x, n.y), u ? (a = u.bbox, n.x = (n.x - a[0].x) / (a[1].x - a[0].x) * u.width * this.scale, n.y = (n.y - a[0].y) / (a[1].y - a[0].y) * u.height * this.scale, {
      x: n.x + this.transX * this.scale + u.left * this.scale,
      y: n.y + this.transY * this.scale + u.top * this.scale
    }) : !1;
  },
  pointToLatLng: function pointToLatLng(e, t) {
    var n = jvm.WorldMap.maps[this.params.map].projection,
        r = n.centralMeridian,
        i = jvm.WorldMap.maps[this.params.map].insets,
        s,
        o,
        u,
        a,
        f;

    for (s = 0; s < i.length; s++) {
      o = i[s], u = o.bbox, a = e - (this.transX * this.scale + o.left * this.scale), f = t - (this.transY * this.scale + o.top * this.scale), a = a / (o.width * this.scale) * (u[1].x - u[0].x) + u[0].x, f = f / (o.height * this.scale) * (u[1].y - u[0].y) + u[0].y;
      if (a > u[0].x && a < u[1].x && f > u[0].y && f < u[1].y) return jvm.Proj[n.type + "_inv"](a, -f, r);
    }

    return !1;
  },
  getInsetForPoint: function getInsetForPoint(e, t) {
    var n = jvm.WorldMap.maps[this.params.map].insets,
        r,
        i;

    for (r = 0; r < n.length; r++) {
      i = n[r].bbox;
      if (e > i[0].x && e < i[1].x && t > i[0].y && t < i[1].y) return n[r];
    }
  },
  createSeries: function createSeries() {
    var e, t;
    this.series = {
      markers: [],
      regions: []
    };

    for (t in this.params.series) {
      for (e = 0; e < this.params.series[t].length; e++) {
        this.series[t][e] = new jvm.DataSeries(this.params.series[t][e], this[t]);
      }
    }
  },
  remove: function remove() {
    this.label.remove(), this.container.remove(), jvm.$(window).unbind("resize", this.onResize);
  }
}, jvm.WorldMap.maps = {}, jvm.WorldMap.defaultParams = {
  map: "world_mill_en",
  backgroundColor: "#505050",
  zoomButtons: !0,
  zoomOnScroll: !0,
  zoomMax: 8,
  zoomMin: 1,
  zoomStep: 1.6,
  regionsSelectable: !1,
  markersSelectable: !1,
  bindTouchEvents: !0,
  regionStyle: {
    initial: {
      fill: "white",
      "fill-opacity": 1,
      stroke: "none",
      "stroke-width": 0,
      "stroke-opacity": 1
    },
    hover: {
      "fill-opacity": .8
    },
    selected: {
      fill: "yellow"
    },
    selectedHover: {}
  },
  markerStyle: {
    initial: {
      fill: "grey",
      stroke: "#505050",
      "fill-opacity": 1,
      "stroke-width": 1,
      "stroke-opacity": 1,
      r: 5
    },
    hover: {
      stroke: "black",
      "stroke-width": 2
    },
    selected: {
      fill: "blue"
    },
    selectedHover: {}
  }
}, jvm.WorldMap.apiEvents = {
  onRegionLabelShow: "regionLabelShow",
  onRegionOver: "regionOver",
  onRegionOut: "regionOut",
  onRegionClick: "regionClick",
  onRegionSelected: "regionSelected",
  onMarkerLabelShow: "markerLabelShow",
  onMarkerOver: "markerOver",
  onMarkerOut: "markerOut",
  onMarkerClick: "markerClick",
  onMarkerSelected: "markerSelected",
  onViewportChange: "viewportChange"
};

/***/ }),

/***/ "./resources/js/admin/jquery-jvectormap1.js":
/*!**************************************************!*\
  !*** ./resources/js/admin/jquery-jvectormap1.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

$.fn.vectorMap('addMap', 'world_mill_en', {
  "insets": [{
    "width": 900.0,
    "top": 0,
    "height": 440.7063107441331,
    "bbox": [{
      "y": -12671671.123330014,
      "x": -20004297.151525836
    }, {
      "y": 6930392.02513512,
      "x": 20026572.394749384
    }],
    "left": 0
  }],
  "paths": {
    "BD": {
      "path": "M652.71,228.85l-0.04,1.38l-0.46,-0.21l-0.42,0.3l0.05,0.65l-0.17,-1.37l-0.48,-1.26l-1.08,-1.6l-0.23,-0.13l-2.31,-0.11l-0.31,0.36l0.21,0.98l-0.6,1.11l-0.8,-0.4l-0.37,0.09l-0.23,0.3l-0.54,-0.21l-0.78,-0.19l-0.38,-2.04l-0.83,-1.89l0.4,-1.5l-0.16,-0.35l-1.24,-0.57l0.36,-0.62l1.5,-0.95l0.02,-0.49l-1.62,-1.26l0.64,-1.31l1.7,1.0l0.12,0.04l0.96,0.11l0.19,1.62l0.25,0.26l2.38,0.37l2.32,-0.04l1.06,0.33l-0.92,1.79l-0.97,0.13l-0.23,0.16l-0.77,1.51l0.05,0.35l1.37,1.37l0.5,-0.14l0.35,-1.46l0.24,-0.0l1.24,3.92Z",
      "name": "Bangladesh"
    },
    "BE": {
      "path": "M429.28,143.95l1.76,0.25l0.13,-0.01l2.16,-0.64l1.46,1.34l1.26,0.71l-0.23,1.8l-0.44,0.08l-0.24,0.25l-0.2,1.36l-1.8,-1.22l-0.23,-0.05l-1.14,0.23l-1.62,-1.43l-1.15,-1.31l-0.21,-0.1l-0.95,-0.04l-0.21,-0.68l1.66,-0.54Z",
      "name": "Belgium"
    },
    "BF": {
      "path": "M413.48,260.21l-1.22,-0.46l-0.13,-0.02l-1.17,0.1l-0.15,0.06l-0.73,0.53l-0.87,-0.41l-0.39,-0.75l-0.13,-0.13l-0.98,-0.48l-0.14,-1.2l0.63,-0.99l0.05,-0.18l-0.05,-0.73l1.9,-2.01l0.08,-0.14l0.35,-1.65l0.49,-0.44l1.05,0.3l0.21,-0.02l1.05,-0.52l0.13,-0.13l0.3,-0.58l1.87,-1.1l0.11,-0.1l0.43,-0.72l2.23,-1.01l1.21,-0.32l0.51,0.4l0.19,0.06l1.25,-0.01l-0.14,0.89l0.01,0.13l0.34,1.16l0.06,0.11l1.35,1.59l0.07,1.13l0.24,0.28l2.64,0.53l-0.05,1.39l-0.42,0.59l-1.11,0.21l-0.22,0.17l-0.46,0.99l-0.69,0.23l-2.12,-0.05l-1.14,-0.2l-0.19,0.03l-0.72,0.36l-1.07,-0.17l-4.35,0.12l-0.29,0.29l-0.06,1.44l0.25,1.45Z",
      "name": "Burkina Faso"
    },
    "BG": {
      "path": "M477.63,166.84l0.51,0.9l0.33,0.14l0.9,-0.21l1.91,0.47l3.68,0.16l0.17,-0.05l1.2,-0.75l2.78,-0.67l1.72,1.05l1.02,0.24l-0.97,0.97l-0.91,2.17l0.0,0.24l0.56,1.19l-1.58,-0.3l-0.16,0.01l-2.55,0.95l-0.2,0.28l-0.02,1.23l-1.92,0.24l-1.68,-0.99l-0.27,-0.02l-1.94,0.8l-1.52,-0.07l-0.15,-1.72l-0.12,-0.21l-0.99,-0.76l0.18,-0.18l0.02,-0.39l-0.17,-0.22l0.33,-0.75l0.91,-0.91l0.01,-0.42l-1.16,-1.25l-0.18,-0.89l0.24,-0.27Z",
      "name": "Bulgaria"
    },
    "BA": {
      "path": "M468.39,164.66l0.16,0.04l0.43,-0.0l-0.43,0.93l0.06,0.34l1.08,1.06l-0.28,1.09l-0.5,0.13l-0.47,0.28l-0.86,0.74l-0.1,0.16l-0.28,1.29l-1.81,-0.94l-0.9,-1.22l-1.0,-0.73l-1.1,-1.1l-0.55,-0.96l-1.11,-1.3l0.3,-0.75l0.59,0.46l0.42,-0.04l0.46,-0.54l1.0,-0.06l2.11,0.5l1.72,-0.03l1.06,0.64Z",
      "name": "Bosnia and Herzegovina"
    },
    "BN": {
      "path": "M707.34,273.57l0.76,-0.72l1.59,-1.03l-0.18,1.93l-0.9,-0.06l-0.28,0.14l-0.31,0.51l-0.68,-0.78Z",
      "name": "Brunei"
    },
    "BO": {
      "path": "M263.83,340.79l-0.23,-0.12l-2.86,-0.11l-0.28,0.17l-0.77,1.67l-1.17,-1.51l-0.18,-0.11l-3.28,-0.64l-0.28,0.1l-2.02,2.3l-1.43,0.29l-0.91,-3.35l-1.31,-2.88l0.75,-2.41l-0.09,-0.32l-1.23,-1.03l-0.31,-1.76l-0.05,-0.12l-1.12,-1.6l1.49,-2.62l0.01,-0.28l-1.0,-2.0l0.48,-0.72l0.02,-0.29l-0.37,-0.78l0.87,-1.13l0.06,-0.18l0.05,-2.17l0.12,-1.71l0.5,-0.8l0.01,-0.3l-1.9,-3.58l1.3,0.15l1.34,-0.05l0.23,-0.12l0.51,-0.7l2.12,-0.99l1.31,-0.93l2.81,-0.37l-0.21,1.51l0.01,0.13l0.29,0.91l-0.19,1.64l0.11,0.27l2.72,2.27l0.15,0.07l2.71,0.41l0.92,0.88l0.12,0.07l1.64,0.49l1.0,0.71l0.18,0.06l1.5,-0.02l1.24,0.64l0.1,1.31l0.05,0.14l0.44,0.68l0.02,0.73l-0.44,0.03l-0.27,0.39l0.96,2.99l0.28,0.21l4.43,0.1l-0.28,1.12l0.0,0.15l0.27,1.02l0.15,0.19l1.27,0.67l0.52,1.42l-0.42,1.91l-0.66,1.1l-0.04,0.2l0.21,1.3l-0.19,0.13l-0.01,-0.27l-0.15,-0.24l-2.33,-1.33l-0.14,-0.04l-2.38,-0.03l-4.36,0.76l-0.21,0.16l-1.2,2.29l-0.03,0.13l-0.06,1.37l-0.79,2.53l-0.05,-0.08Z",
      "name": "Bolivia"
    },
    "JP": {
      "path": "M781.17,166.78l1.8,0.67l0.28,-0.04l1.38,-1.01l0.43,2.67l-3.44,0.77l-0.18,0.12l-2.04,2.79l-3.71,-1.94l-0.42,0.15l-1.29,3.11l-2.32,0.04l-0.3,-2.63l1.12,-2.1l2.51,-0.16l0.28,-0.25l0.73,-4.22l0.58,-1.9l2.59,2.84l2.0,1.1ZM773.66,187.36l-0.92,2.24l-0.01,0.2l0.4,1.3l-1.18,1.81l-3.06,1.28l-4.35,0.17l-0.19,0.08l-3.4,3.06l-1.36,-0.87l-0.1,-1.95l-0.34,-0.28l-4.35,0.62l-2.99,1.33l-2.87,0.05l-0.28,0.2l0.09,0.33l2.37,1.93l-1.57,4.44l-1.35,0.97l-0.9,-0.79l0.57,-2.32l-0.15,-0.34l-1.5,-0.77l-0.81,-1.53l2.04,-0.75l0.14,-0.1l1.28,-1.72l2.47,-1.43l1.84,-1.92l4.83,-0.82l2.62,0.57l0.33,-0.16l2.45,-4.77l1.38,1.14l0.38,0.0l5.1,-4.02l0.09,-0.11l1.57,-3.57l0.02,-0.16l-0.42,-3.22l0.94,-1.67l2.27,-0.47l1.26,3.82l-0.07,2.23l-2.26,2.86l-0.06,0.19l0.04,2.93ZM757.85,196.18l0.22,0.66l-1.11,1.33l-0.8,-0.7l-0.33,-0.04l-1.28,0.65l-0.14,0.15l-0.54,1.34l-1.17,-0.57l0.02,-1.03l1.2,-1.45l1.24,0.28l0.29,-0.1l0.9,-1.03l1.51,0.5Z",
      "name": "Japan"
    },
    "BI": {
      "path": "M494.7,295.83l-0.14,-2.71l-0.04,-0.13l-0.34,-0.62l0.93,0.12l0.3,-0.16l0.67,-1.25l0.9,0.11l0.11,0.76l0.08,0.16l0.46,0.48l0.02,0.56l-0.55,0.48l-0.96,1.29l-0.82,0.82l-0.61,0.07Z",
      "name": "Burundi"
    },
    "BJ": {
      "path": "M427.4,268.94l-1.58,0.22l-0.52,-1.45l0.11,-5.73l-0.08,-0.21l-0.43,-0.44l-0.09,-1.13l-0.09,-0.19l-1.52,-1.52l0.24,-1.01l0.7,-0.23l0.18,-0.16l0.45,-0.97l1.07,-0.21l0.19,-0.12l0.53,-0.73l0.73,-0.65l0.68,-0.0l1.69,1.3l-0.08,0.67l0.02,0.14l0.52,1.38l-0.44,0.9l-0.01,0.24l0.2,0.52l-1.1,1.42l-0.76,0.76l-0.08,0.13l-0.47,1.59l0.05,1.69l-0.13,3.79Z",
      "name": "Benin"
    },
    "BT": {
      "path": "M650.38,213.78l0.88,0.75l-0.13,1.24l-1.77,0.07l-2.1,-0.18l-1.57,0.4l-2.02,-0.91l-0.02,-0.24l1.54,-1.87l1.18,-0.6l1.67,0.59l1.32,0.08l1.01,0.67Z",
      "name": "Bhutan"
    },
    "JM": {
      "path": "M226.67,238.37l1.64,0.23l1.2,0.56l0.11,0.19l-1.25,0.03l-0.14,0.04l-0.65,0.37l-1.24,-0.37l-1.17,-0.77l0.11,-0.22l0.86,-0.15l0.52,0.08Z",
      "name": "Jamaica"
    },
    "BW": {
      "path": "M484.91,331.96l0.53,0.52l0.82,1.53l2.83,2.86l0.14,0.08l0.85,0.22l0.03,0.81l0.74,1.66l0.21,0.17l1.87,0.39l1.17,0.87l-3.13,1.71l-2.3,2.01l-0.07,0.1l-0.82,1.74l-0.66,0.88l-1.24,0.19l-0.24,0.2l-0.65,1.98l-1.4,0.55l-1.9,-0.12l-1.2,-0.74l-1.06,-0.32l-0.22,0.02l-1.22,0.62l-0.14,0.14l-0.58,1.21l-1.16,0.79l-1.18,1.13l-1.5,0.23l-0.4,-0.68l0.22,-1.53l-0.04,-0.19l-1.48,-2.54l-0.11,-0.11l-0.53,-0.31l-0.0,-7.25l2.18,-0.08l0.29,-0.3l0.07,-9.0l1.63,-0.08l3.69,-0.86l0.84,0.93l0.38,0.05l1.53,-0.97l0.79,-0.03l1.3,-0.53l0.23,0.1l0.92,1.96Z",
      "name": "Botswana"
    },
    "BR": {
      "path": "M259.49,274.87l1.42,0.25l1.97,0.62l0.28,-0.05l0.67,-0.55l1.76,-0.38l2.8,-0.94l0.12,-0.08l0.92,-0.96l0.05,-0.33l-0.15,-0.32l0.73,-0.06l0.36,0.35l-0.27,0.93l0.17,0.36l0.76,0.34l0.44,0.9l-0.58,0.73l-0.06,0.13l-0.4,2.13l0.03,0.19l0.62,1.22l0.17,1.11l0.11,0.19l1.54,1.18l0.15,0.06l1.23,0.12l0.29,-0.15l0.2,-0.36l0.71,-0.11l1.13,-0.44l0.79,-0.63l1.25,0.19l0.65,-0.08l1.32,0.2l0.32,-0.18l0.23,-0.51l-0.05,-0.31l-0.31,-0.37l0.11,-0.31l0.75,0.17l0.13,0.0l1.1,-0.24l1.34,0.5l1.08,0.51l0.33,-0.05l0.67,-0.58l0.27,0.05l0.28,0.57l0.31,0.17l1.2,-0.18l0.17,-0.08l1.03,-1.05l0.76,-1.82l1.39,-2.16l0.49,-0.07l0.52,1.17l1.4,4.37l0.2,0.2l1.14,0.35l0.05,1.39l-1.8,1.97l0.01,0.42l0.78,0.75l0.18,0.08l4.16,0.37l0.08,2.25l0.5,0.22l1.78,-1.54l2.98,0.85l4.07,1.5l1.07,1.28l-0.37,1.23l0.36,0.38l2.83,-0.75l4.8,1.3l3.75,-0.09l3.6,2.02l3.27,2.84l1.93,0.72l2.13,0.11l0.76,0.66l1.22,4.56l-0.96,4.03l-1.22,1.58l-3.52,3.51l-1.63,2.91l-1.75,2.09l-0.5,0.04l-0.26,0.19l-0.72,1.99l0.18,4.76l-0.95,5.56l-0.74,0.96l-0.06,0.15l-0.43,3.39l-2.49,3.34l-0.06,0.13l-0.4,2.56l-1.9,1.07l-0.13,0.16l-0.51,1.38l-2.59,0.0l-3.94,1.01l-1.82,1.19l-2.85,0.81l-3.01,2.17l-2.12,2.65l-0.06,0.13l-0.36,2.0l0.01,0.13l0.4,1.42l-0.45,2.63l-0.53,1.23l-1.76,1.53l-2.76,4.79l-2.16,2.15l-1.69,1.29l-0.09,0.12l-1.12,2.6l-1.3,1.26l-0.45,-1.02l0.99,-1.18l0.01,-0.37l-1.5,-1.95l-1.98,-1.54l-2.58,-1.77l-0.2,-0.05l-0.81,0.07l-2.42,-2.05l-0.25,-0.07l-0.77,0.14l2.75,-3.07l2.8,-2.61l1.67,-1.09l2.11,-1.49l0.13,-0.24l0.05,-2.15l-0.07,-0.2l-1.26,-1.54l-0.35,-0.09l-0.64,0.27l0.3,-0.95l0.34,-1.57l0.01,-1.52l-0.16,-0.26l-0.9,-0.48l-0.27,-0.01l-0.86,0.39l-0.65,-0.08l-0.23,-0.8l-0.23,-2.39l-0.04,-0.12l-0.47,-0.79l-0.14,-0.12l-1.69,-0.71l-0.25,0.01l-0.93,0.47l-2.29,-0.44l0.15,-3.3l-0.03,-0.15l-0.62,-1.22l0.57,-0.39l0.13,-0.3l-0.22,-1.37l0.67,-1.13l0.44,-2.04l-0.01,-0.17l-0.59,-1.61l-0.14,-0.16l-1.25,-0.66l-0.22,-0.82l0.35,-1.41l-0.28,-0.37l-4.59,-0.1l-0.78,-2.41l0.34,-0.02l0.28,-0.31l-0.03,-1.1l-0.05,-0.16l-0.45,-0.68l-0.1,-1.4l-0.16,-0.24l-1.45,-0.76l-0.14,-0.03l-1.48,0.02l-1.04,-0.73l-1.62,-0.48l-0.93,-0.9l-0.16,-0.08l-2.72,-0.41l-2.53,-2.12l0.18,-1.54l-0.01,-0.13l-0.29,-0.91l0.26,-1.83l-0.34,-0.34l-3.28,0.43l-0.14,0.05l-1.3,0.93l-2.16,1.01l-0.12,0.09l-0.47,0.65l-1.12,0.05l-1.84,-0.21l-0.12,0.01l-1.33,0.41l-0.82,-0.21l0.16,-3.6l-0.48,-0.26l-1.97,1.43l-1.96,-0.06l-0.86,-1.23l-0.22,-0.13l-1.23,-0.11l0.34,-0.69l-0.05,-0.33l-1.36,-1.5l-0.92,-2.0l0.45,-0.32l0.13,-0.25l-0.0,-0.87l1.34,-0.64l0.17,-0.32l-0.23,-1.23l0.56,-0.77l0.05,-0.13l0.16,-1.03l2.7,-1.61l2.01,-0.47l0.16,-0.09l0.24,-0.27l2.11,0.11l0.31,-0.25l1.13,-6.87l0.06,-1.12l-0.4,-1.53l-0.1,-0.15l-1.0,-0.82l0.01,-1.45l1.08,-0.32l0.39,0.2l0.44,-0.24l0.08,-0.96l-0.25,-0.32l-1.22,-0.22l-0.02,-1.01l4.57,0.05l0.22,-0.09l0.6,-0.63l0.44,0.5l0.47,1.42l0.45,0.16l0.27,-0.18l1.21,1.16l0.23,0.08l1.95,-0.16l0.23,-0.14l0.43,-0.67l1.76,-0.55l1.05,-0.42l0.18,-0.2l0.25,-0.92l1.65,-0.66l0.18,-0.35l-0.14,-0.53l-0.26,-0.22l-1.91,-0.19l-0.29,-1.33l0.1,-1.64l-0.15,-0.28l-0.44,-0.25Z",
      "name": "Brazil"
    },
    "BS": {
      "path": "M227.51,216.69l0.3,0.18l-0.24,1.07l0.03,-1.04l-0.09,-0.21ZM226.5,224.03l-0.13,0.03l-0.54,-1.3l-0.09,-0.12l-0.78,-0.64l0.4,-1.26l0.33,0.05l0.79,2.0l0.01,1.24ZM225.76,216.5l-2.16,0.34l-0.07,-0.41l0.85,-0.16l1.36,0.07l0.02,0.16Z",
      "name": "The Bahamas"
    },
    "BY": {
      "path": "M480.08,135.28l2.09,0.02l0.13,-0.03l2.72,-1.3l0.16,-0.19l0.55,-1.83l1.94,-1.06l0.15,-0.31l-0.2,-1.33l1.33,-0.52l2.58,-1.3l2.39,0.8l0.3,0.75l0.37,0.17l1.22,-0.39l2.18,0.75l0.2,1.36l-0.48,0.85l0.01,0.32l1.57,2.26l0.92,0.6l-0.1,0.41l0.19,0.35l1.61,0.57l0.48,0.6l-0.64,0.49l-1.91,-0.11l-0.18,0.05l-0.48,0.32l-0.1,0.39l0.57,1.1l0.51,1.78l-1.79,0.17l-0.18,0.08l-0.77,0.73l-0.09,0.19l-0.13,1.31l-0.75,-0.22l-2.11,0.15l-0.56,-0.66l-0.39,-0.06l-0.8,0.49l-0.79,-0.4l-0.13,-0.03l-1.94,-0.07l-2.76,-0.79l-2.58,-0.27l-1.98,0.07l-0.15,0.05l-1.31,0.86l-0.8,0.09l-0.04,-1.16l-0.03,-0.12l-0.63,-1.28l1.22,-0.56l0.17,-0.27l0.01,-1.35l-0.04,-0.15l-0.66,-1.24l-0.08,-1.12Z",
      "name": "Belarus"
    },
    "BZ": {
      "path": "M198.03,239.7l0.28,0.19l0.43,-0.1l0.82,-1.42l0.0,0.07l0.29,0.29l0.16,0.0l-0.02,0.35l-0.39,1.08l0.02,0.25l0.16,0.29l-0.23,0.8l0.04,0.24l0.09,0.14l-0.25,1.12l-0.38,0.53l-0.33,0.06l-0.21,0.15l-0.41,0.74l-0.25,0.0l0.17,-2.58l0.01,-2.2Z",
      "name": "Belize"
    },
    "RU": {
      "path": "M688.57,38.85l0.63,2.39l0.44,0.19l2.22,-1.23l7.18,0.07l5.54,2.49l1.85,1.77l-0.55,2.34l-2.64,1.42l-6.57,2.76l-1.95,1.5l0.12,0.53l3.09,0.68l3.69,1.23l0.21,-0.01l1.98,-0.81l1.16,2.84l0.5,0.08l1.03,-1.18l3.86,-0.74l7.79,0.78l0.56,2.05l0.27,0.22l10.47,0.71l0.32,-0.29l0.13,-3.34l4.98,0.8l3.96,-0.02l3.88,2.43l1.06,2.79l-1.38,1.83l0.01,0.38l3.15,3.64l0.1,0.08l3.94,1.86l0.4,-0.14l2.28,-4.56l3.75,1.94l0.22,0.02l4.18,-1.22l4.76,1.4l0.26,-0.04l1.74,-1.23l3.98,0.63l0.32,-0.41l-1.71,-4.1l3.0,-1.86l22.39,3.04l2.06,2.67l0.1,0.08l6.55,3.51l0.17,0.03l10.08,-0.86l4.86,0.73l1.91,1.72l-0.29,3.13l0.18,0.31l3.08,1.26l0.19,0.01l3.32,-0.9l4.37,-0.11l4.78,0.87l4.61,-0.48l4.26,3.82l0.32,0.05l3.1,-1.4l0.12,-0.45l-1.91,-2.67l0.92,-1.64l7.78,1.22l5.22,-0.26l7.12,2.1l9.6,5.22l6.4,4.15l-0.2,2.44l0.14,0.28l1.69,1.04l0.45,-0.31l-0.51,-2.66l6.31,0.58l4.52,3.61l-2.1,1.52l-4.02,0.42l-0.27,0.29l-0.06,3.83l-0.81,0.67l-2.14,-0.11l-1.91,-1.39l-3.19,-1.13l-0.51,-1.63l-0.21,-0.2l-2.54,-0.67l-0.13,-0.0l-2.69,0.5l-1.12,-1.19l0.48,-1.36l-0.38,-0.39l-3.0,0.98l-0.17,0.44l1.02,1.76l-1.27,1.55l-3.09,1.71l-3.15,-0.29l-0.3,0.18l0.07,0.34l2.22,2.1l1.47,3.22l1.15,1.09l0.25,1.41l-0.48,0.76l-4.47,-0.81l-0.17,0.02l-6.97,2.9l-2.2,0.44l-0.11,0.05l-3.83,2.68l-3.63,2.32l-0.1,0.11l-0.76,1.4l-3.3,-2.4l-0.3,-0.03l-6.31,2.85l-0.99,-1.21l-0.4,-0.06l-2.32,1.54l-3.23,-0.49l-0.33,0.2l-0.79,2.39l-2.97,3.51l-0.07,0.21l0.09,1.47l0.22,0.27l2.62,0.74l-0.3,4.7l-2.06,0.12l-0.26,0.2l-1.07,2.94l0.04,0.27l0.83,1.19l-4.03,1.63l-0.18,0.21l-0.83,3.72l-3.55,0.79l-0.23,0.23l-0.73,3.32l-3.22,2.76l-0.76,-1.88l-1.07,-4.88l-1.39,-7.59l1.17,-4.76l2.05,-2.08l0.09,-0.19l0.11,-1.46l3.67,-0.77l0.15,-0.08l4.47,-4.61l4.29,-3.82l4.48,-3.01l0.11,-0.14l2.01,-5.43l-0.31,-0.4l-3.04,0.33l-0.24,0.17l-1.47,3.11l-5.98,3.94l-1.91,-4.36l-0.33,-0.17l-6.46,1.3l-0.15,0.08l-6.27,6.33l-0.01,0.41l1.7,1.87l-5.04,0.87l-3.51,0.34l0.16,-2.32l-0.26,-0.32l-3.89,-0.56l-0.19,0.04l-3.02,1.77l-7.63,-0.63l-8.24,1.1l-0.16,0.07l-8.11,7.09l-9.6,8.31l0.16,0.52l3.79,0.42l1.16,2.03l0.17,0.14l2.43,0.76l0.31,-0.08l1.5,-1.61l2.49,0.2l3.46,3.6l0.08,2.67l-1.91,3.26l-0.04,0.14l-0.21,3.91l-1.11,5.09l-3.73,4.55l-0.87,2.21l-6.73,7.14l-1.59,1.77l-3.23,1.72l-1.38,0.03l-1.48,-1.39l-0.37,-0.03l-3.36,2.22l-0.11,0.14l-0.16,0.42l-0.01,-1.09l1.0,-0.06l0.28,-0.27l0.36,-3.6l-0.61,-2.51l1.85,-0.94l2.94,0.53l0.32,-0.15l1.71,-3.1l0.84,-3.38l0.97,-1.18l1.32,-2.88l-0.34,-0.42l-4.14,0.95l-2.18,1.25l-3.51,-0.0l-0.95,-2.81l-0.1,-0.14l-2.97,-2.3l-0.11,-0.05l-4.19,-1.0l-0.89,-3.08l-0.87,-2.03l-0.95,-1.46l-1.54,-3.37l-0.12,-0.14l-2.27,-1.28l-3.83,-1.02l-3.37,0.1l-3.11,0.61l-0.13,0.06l-2.07,1.69l0.04,0.49l1.23,0.72l0.03,1.53l-1.34,1.05l-2.26,3.51l-0.05,0.17l0.02,1.27l-3.25,1.9l-2.87,-1.17l-0.14,-0.02l-2.86,0.26l-1.22,-1.02l-0.12,-0.06l-1.5,-0.35l-0.23,0.04l-3.62,2.27l-3.24,0.53l-2.28,0.79l-3.08,-0.51l-2.24,0.03l-1.49,-1.61l-2.45,-1.57l-0.11,-0.04l-2.6,-0.43l-3.17,0.43l-2.31,0.59l-3.31,-1.28l-0.45,-2.31l-0.21,-0.23l-2.94,-0.85l-2.26,-0.39l-2.77,-1.36l-0.37,0.09l-2.59,3.45l-0.03,0.32l0.91,1.74l-2.15,2.01l-3.47,-0.79l-2.44,-0.12l-1.59,-1.46l-0.2,-0.08l-2.55,-0.05l-2.12,-0.98l-0.24,-0.01l-3.85,1.57l-4.74,2.79l-2.59,0.55l-0.79,0.21l-1.21,-1.81l-0.29,-0.13l-3.05,0.41l-0.96,-1.25l-0.14,-0.1l-1.65,-0.6l-1.15,-1.82l-0.13,-0.12l-1.38,-0.6l-0.19,-0.02l-3.49,0.82l-3.35,-1.85l-0.38,0.08l-1.08,1.4l-5.36,-8.17l-3.02,-2.52l0.72,-0.85l0.01,-0.38l-0.37,-0.08l-6.22,3.21l-1.98,0.16l0.17,-1.51l-0.2,-0.31l-3.22,-1.17l-0.19,-0.0l-2.3,0.74l-0.72,-3.27l-0.24,-0.23l-4.5,-0.75l-0.21,0.04l-2.2,1.42l-6.21,1.27l-0.11,0.05l-1.16,0.81l-9.3,1.19l-0.18,0.09l-1.15,1.17l-0.02,0.39l1.56,2.01l-2.02,0.74l-0.16,0.42l0.35,0.68l-2.18,1.49l0.02,0.51l3.83,2.16l-0.45,1.13l-3.31,-0.13l-0.25,0.12l-0.57,0.77l-2.97,-1.59l-0.15,-0.04l-3.97,0.07l-0.13,0.03l-2.53,1.32l-2.84,-1.28l-5.52,-2.3l-0.12,-0.02l-3.91,0.09l-0.16,0.05l-5.17,3.6l-0.13,0.21l-0.25,1.89l-2.17,-1.6l-0.44,0.1l-2.0,3.59l0.06,0.37l0.55,0.5l-1.32,2.23l0.04,0.36l2.13,2.17l0.23,0.09l1.7,-0.08l1.42,1.89l-0.23,1.5l0.19,0.32l0.94,0.38l-0.89,1.44l-2.3,0.49l-0.17,0.11l-2.49,3.2l0.0,0.37l2.2,2.81l-0.23,1.93l0.06,0.22l2.56,3.32l-1.27,1.02l-0.4,0.66l-0.8,-0.15l-1.65,-1.75l-0.18,-0.09l-0.66,-0.09l-1.45,-0.64l-0.72,-1.16l-0.18,-0.13l-2.34,-0.63l-0.17,0.0l-1.32,0.41l-0.31,-0.4l-0.12,-0.09l-3.49,-1.48l-3.67,-0.49l-2.1,-0.52l-0.3,0.1l-0.12,0.14l-2.96,-2.4l-2.89,-1.19l-1.69,-1.42l1.27,-0.35l0.16,-0.1l2.08,-2.61l-0.04,-0.41l-1.02,-0.9l3.21,-1.12l0.2,-0.31l-0.07,-0.69l-0.37,-0.26l-1.86,0.42l0.05,-0.86l1.11,-0.76l2.35,-0.23l0.25,-0.19l0.39,-1.07l0.0,-0.19l-0.51,-1.64l0.95,-1.58l0.04,-0.16l-0.03,-0.95l-0.22,-0.28l-3.69,-1.06l-1.43,0.02l-1.45,-1.44l-0.29,-0.08l-1.83,0.49l-2.88,-1.04l0.04,-0.42l-0.04,-0.18l-0.89,-1.43l-0.23,-0.14l-1.77,-0.14l-0.13,-0.66l0.52,-0.56l0.01,-0.4l-1.6,-1.9l-0.27,-0.1l-2.55,0.32l-0.71,-0.16l-0.3,0.1l-0.53,0.63l-0.58,-0.08l-0.56,-1.97l-0.48,-0.94l0.17,-0.11l1.92,0.11l0.2,-0.06l0.97,-0.74l0.05,-0.42l-0.72,-0.91l-0.13,-0.1l-1.43,-0.51l0.09,-0.36l-0.13,-0.33l-0.97,-0.59l-1.43,-2.06l0.44,-0.77l0.04,-0.19l-0.25,-1.64l-0.2,-0.24l-2.45,-0.84l-0.19,-0.0l-1.05,0.34l-0.25,-0.62l-0.18,-0.17l-2.5,-0.84l-0.74,-1.93l-0.21,-1.7l-0.13,-0.21l-0.92,-0.63l0.83,-0.89l0.07,-0.27l-0.71,-3.26l1.69,-2.01l0.03,-0.34l-0.24,-0.41l2.63,-1.9l-0.01,-0.49l-2.31,-1.57l5.08,-4.61l2.33,-2.24l1.01,-2.08l-0.09,-0.37l-3.52,-2.56l0.94,-2.38l-0.04,-0.29l-2.14,-2.86l1.61,-3.35l-0.01,-0.29l-2.81,-4.58l2.19,-3.04l-0.06,-0.42l-3.7,-2.76l0.32,-2.67l1.87,-0.38l4.26,-1.77l2.46,-1.47l3.96,2.58l0.12,0.05l6.81,1.04l9.37,4.87l1.81,1.92l0.15,2.55l-2.61,2.06l-3.95,1.07l-11.1,-3.15l-0.17,0.0l-1.84,0.53l-0.1,0.53l3.97,2.97l0.15,1.77l0.16,4.14l0.19,0.27l3.21,1.22l1.94,1.03l0.44,-0.22l0.32,-1.94l-0.07,-0.25l-1.32,-1.52l1.25,-1.2l5.87,2.45l0.24,-0.01l2.11,-0.98l0.13,-0.42l-1.55,-2.75l5.52,-3.84l2.13,0.22l2.28,1.42l0.43,-0.12l1.46,-2.87l-0.04,-0.33l-1.97,-2.37l1.14,-2.38l-0.02,-0.3l-1.42,-2.07l6.15,1.22l1.14,1.92l-2.74,0.46l-0.25,0.3l0.02,2.36l0.12,0.24l1.97,1.44l0.25,0.05l3.87,-0.91l0.22,-0.23l0.58,-2.55l5.09,-1.98l8.67,-3.69l1.22,0.14l-2.06,2.2l0.18,0.5l3.11,0.45l0.23,-0.07l1.71,-1.41l4.59,-0.12l0.12,-0.03l3.53,-1.72l2.7,2.48l0.42,-0.01l2.85,-2.88l-0.0,-0.43l-2.42,-2.35l1.0,-1.13l7.2,1.31l3.42,1.36l9.06,4.97l0.39,-0.08l1.67,-2.27l-0.04,-0.4l-2.46,-2.23l-0.06,-0.82l-0.26,-0.27l-2.64,-0.38l0.69,-1.76l0.0,-0.22l-1.32,-3.47l-0.07,-1.27l4.52,-4.09l0.08,-0.11l1.6,-4.18l1.67,-0.84l6.33,1.2l0.46,2.31l-2.31,3.67l0.05,0.38l1.49,1.41l0.77,3.04l-0.56,6.05l0.09,0.24l2.62,2.54l-0.99,2.65l-4.87,5.96l0.17,0.48l2.86,0.61l0.31,-0.13l0.94,-1.42l2.67,-1.04l0.18,-0.19l0.64,-2.01l2.11,-1.98l0.05,-0.37l-1.38,-2.32l1.11,-2.74l-0.24,-0.41l-2.53,-0.33l-0.53,-2.16l1.96,-4.42l-0.05,-0.32l-3.03,-3.48l4.21,-2.94l0.12,-0.3l-0.52,-3.04l0.72,-0.06l1.18,2.35l-0.97,4.39l0.2,0.35l2.68,0.84l0.37,-0.38l-1.05,-3.07l3.89,-1.71l5.05,-0.24l4.55,2.62l0.36,-0.05l0.05,-0.36l-2.19,-3.84l-0.23,-4.78l4.07,-0.92l5.98,0.21l5.47,-0.64l0.2,-0.48l-1.88,-2.37l2.65,-2.99l2.75,-0.13l0.12,-0.03l4.82,-2.48l6.56,-0.67l0.23,-0.14l0.76,-1.27l6.33,-0.46l1.97,1.11l0.28,0.01l5.55,-2.71l4.53,0.08l0.29,-0.21l0.67,-2.18l2.29,-2.15l5.75,-2.13l3.48,1.4l-2.7,1.03l-0.19,0.31l0.26,0.26l5.47,0.78ZM871.83,65.73l0.25,-0.15l1.99,0.01l3.3,1.2l-0.08,0.22l-2.41,1.03l-5.73,0.49l-0.31,-1.0l2.99,-1.8ZM797.64,48.44l-2.22,1.51l-3.85,-0.43l-4.35,-1.85l0.42,-1.13l4.42,0.72l5.59,1.17ZM783.82,46.06l-1.71,3.25l-9.05,-0.14l-4.11,1.15l-4.64,-3.04l1.21,-3.13l3.11,-0.91l6.53,0.22l8.66,2.59ZM780.37,145.71l2.28,5.23l-3.09,-0.89l-0.37,0.19l-1.54,4.65l0.04,0.27l2.38,3.17l-0.05,1.4l-1.41,-1.41l-0.46,0.04l-1.23,1.81l-0.33,-1.86l0.28,-3.1l-0.28,-3.41l0.58,-2.46l0.11,-4.39l-0.03,-0.13l-1.44,-3.2l0.21,-4.39l2.19,-1.49l0.09,-0.41l-0.81,-1.3l0.48,-0.21l0.56,1.94l0.86,3.23l-0.05,3.36l1.03,3.35ZM780.16,57.18l-3.4,0.03l-5.06,-0.53l1.97,-1.59l2.95,-0.42l3.35,1.75l0.18,0.77ZM683.84,31.18l-13.29,1.97l4.16,-6.56l1.88,-0.58l1.77,0.34l6.08,3.02l-0.6,1.8ZM670.94,28.02l-5.18,0.65l-6.89,-1.58l-4.03,-2.07l-1.88,-3.98l-0.18,-0.16l-2.8,-0.93l5.91,-3.62l5.25,-1.29l4.73,2.88l5.63,5.44l-0.57,4.66ZM564.37,68.98l-0.85,0.23l-7.93,-0.57l-0.6,-1.84l-0.21,-0.2l-4.34,-1.18l-0.3,-2.08l2.34,-0.92l0.19,-0.29l-0.08,-2.43l4.85,-4.0l-0.12,-0.52l-1.68,-0.43l5.47,-3.94l0.11,-0.33l-0.6,-2.02l5.36,-2.55l8.22,-3.27l8.29,-0.96l4.34,-1.94l4.67,-0.65l1.45,1.72l-1.43,1.37l-8.8,2.52l-7.65,2.42l-7.92,4.84l-3.73,4.75l-3.92,4.58l-0.07,0.23l0.51,3.88l0.11,0.2l4.32,3.39ZM548.86,18.57l-3.28,0.75l-2.25,0.44l-0.22,0.19l-0.3,0.81l-2.67,0.86l-2.27,-1.14l1.2,-1.51l-0.23,-0.49l-3.14,-0.1l2.48,-0.54l3.55,-0.07l0.44,1.36l0.49,0.12l1.4,-1.35l2.2,-0.9l3.13,1.08l-0.54,0.49ZM477.5,133.25l-4.21,0.05l-2.69,-0.34l0.39,-1.03l3.24,-1.06l2.51,0.58l0.85,0.43l-0.2,0.71l-0.0,0.15l0.12,0.52Z",
      "name": "Russia"
    },
    "RW": {
      "path": "M497.03,288.12l0.78,1.11l-0.12,1.19l-0.49,0.21l-1.25,-0.15l-0.3,0.16l-0.67,1.24l-1.01,-0.13l0.16,-0.92l0.22,-0.12l0.15,-0.24l0.09,-1.37l0.49,-0.48l0.42,0.18l0.25,-0.01l1.26,-0.65Z",
      "name": "Rwanda"
    },
    "RS": {
      "path": "M469.75,168.65l0.21,-0.21l0.36,-1.44l-0.08,-0.29l-1.06,-1.03l0.54,-1.16l-0.28,-0.43l-0.26,0.0l0.55,-0.67l-0.01,-0.39l-0.77,-0.86l-0.45,-0.89l1.56,-0.67l1.39,0.12l1.22,1.1l0.26,0.91l0.16,0.19l1.38,0.66l0.17,1.12l0.14,0.21l1.46,0.9l0.35,-0.03l0.62,-0.54l0.09,0.06l-0.28,0.25l-0.03,0.42l0.29,0.34l-0.44,0.5l-0.07,0.26l0.22,1.12l0.07,0.14l1.02,1.1l-0.81,0.84l-0.42,0.96l0.04,0.3l0.12,0.15l-0.15,0.16l-1.04,0.04l-0.39,0.08l0.33,-0.81l-0.29,-0.41l-0.21,0.01l-0.39,-0.45l-0.13,-0.09l-0.32,-0.11l-0.27,-0.4l-0.14,-0.11l-0.4,-0.16l-0.31,-0.37l-0.34,-0.09l-0.45,0.17l-0.18,0.18l-0.29,0.84l-0.96,-0.65l-0.81,-0.33l-0.32,-0.37l-0.22,-0.18Z",
      "name": "Republic of Serbia"
    },
    "LT": {
      "path": "M478.13,133.31l-0.14,-0.63l0.25,-0.88l-0.15,-0.35l-1.17,-0.58l-2.43,-0.57l-0.45,-2.51l2.58,-0.97l4.14,0.22l2.3,-0.32l0.26,0.54l0.22,0.17l1.26,0.22l2.25,1.6l0.19,1.23l-1.87,1.01l-0.14,0.18l-0.54,1.83l-2.54,1.21l-2.18,-0.02l-0.52,-0.91l-0.18,-0.14l-1.11,-0.32Z",
      "name": "Lithuania"
    },
    "LU": {
      "path": "M435.95,147.99l0.33,0.49l-0.11,1.07l-0.39,0.04l-0.29,-0.15l0.21,-1.4l0.25,-0.05Z",
      "name": "Luxembourg"
    },
    "LR": {
      "path": "M401.37,273.67l-0.32,0.01l-2.48,-1.15l-2.24,-1.89l-2.14,-1.38l-1.47,-1.42l0.44,-0.59l0.05,-0.13l0.12,-0.65l1.07,-1.3l1.08,-1.09l0.52,-0.07l0.43,-0.18l0.84,1.24l-0.15,0.89l0.07,0.25l0.49,0.54l0.22,0.1l0.71,0.01l0.27,-0.16l0.42,-0.83l0.19,0.02l-0.06,0.52l0.23,1.12l-0.5,1.03l0.06,0.35l0.73,0.69l0.14,0.08l0.71,0.15l0.92,0.91l0.06,0.76l-0.17,0.22l-0.06,0.15l-0.17,1.8Z",
      "name": "Liberia"
    },
    "RO": {
      "path": "M477.94,155.19l1.02,-0.64l1.49,0.33l1.52,0.01l1.09,0.73l0.32,0.01l0.81,-0.46l1.8,-0.3l0.18,-0.1l0.54,-0.64l0.86,0.0l0.64,0.26l0.71,0.87l0.8,1.35l1.39,1.81l0.07,1.25l-0.26,1.3l0.01,0.15l0.45,1.42l0.15,0.18l1.12,0.57l0.25,0.01l1.05,-0.45l0.86,0.4l0.03,0.43l-0.92,0.51l-0.63,-0.24l-0.4,0.22l-0.64,3.41l-1.12,-0.24l-1.78,-1.09l-0.23,-0.04l-2.95,0.71l-1.25,0.77l-3.55,-0.16l-1.89,-0.47l-0.14,-0.0l-0.75,0.17l-0.61,-1.07l-0.3,-0.36l0.36,-0.32l-0.04,-0.48l-0.62,-0.38l-0.36,0.03l-0.62,0.54l-1.15,-0.71l-0.18,-1.14l-0.17,-0.22l-1.4,-0.67l-0.24,-0.86l-0.09,-0.14l-0.96,-0.87l1.49,-0.44l0.16,-0.11l1.51,-2.14l1.15,-2.09l1.44,-0.63Z",
      "name": "Romania"
    },
    "GW": {
      "path": "M383.03,256.73l-1.12,-0.88l-0.14,-0.06l-0.94,-0.15l-0.43,-0.54l0.01,-0.27l-0.13,-0.26l-0.68,-0.48l-0.05,-0.16l0.99,-0.31l0.77,0.08l0.15,-0.02l0.61,-0.26l4.25,0.1l-0.02,0.44l-0.19,0.18l-0.08,0.29l0.17,0.66l-0.17,0.14l-0.44,0.0l-0.16,0.05l-0.57,0.37l-0.66,-0.04l-0.24,0.1l-0.92,1.03Z",
      "name": "Guinea Bissau"
    },
    "GT": {
      "path": "M195.13,249.89l-1.05,-0.35l-1.5,-0.04l-1.06,-0.47l-1.19,-0.93l0.04,-0.53l0.27,-0.55l-0.03,-0.31l-0.24,-0.32l1.02,-1.77l3.04,-0.01l0.3,-0.28l0.06,-0.88l-0.19,-0.3l-0.3,-0.11l-0.23,-0.45l-0.11,-0.12l-0.9,-0.58l-0.35,-0.33l0.37,-0.0l0.3,-0.3l0.0,-1.15l4.05,0.02l-0.02,1.74l-0.2,2.89l0.3,0.32l0.67,-0.0l0.75,0.42l0.4,-0.11l-0.62,0.53l-1.17,0.7l-0.13,0.16l-0.18,0.49l0.0,0.21l0.14,0.34l-0.35,0.44l-0.49,0.13l-0.2,0.41l0.03,0.06l-0.27,0.16l-0.86,0.64l-0.12,0.22ZM199.35,245.38l0.07,-0.13l0.05,0.02l-0.13,0.11Z",
      "name": "Guatemala"
    },
    "GR": {
      "path": "M487.2,174.55l-0.64,1.54l-0.43,0.24l-1.41,-0.08l-1.28,-0.28l-0.14,0.0l-3.03,0.77l-0.13,0.51l1.39,1.34l-0.78,0.29l-1.2,0.0l-1.23,-1.42l-0.47,0.02l-0.47,0.65l-0.04,0.27l0.56,1.76l0.06,0.11l1.02,1.12l-0.66,0.45l-0.04,0.46l1.39,1.35l1.15,0.79l0.02,1.06l-1.91,-0.63l-0.36,0.42l0.56,1.12l-1.2,0.23l-0.22,0.4l0.8,2.14l-1.15,0.02l-1.89,-1.15l-0.89,-2.19l-0.43,-1.91l-0.05,-0.11l-0.98,-1.35l-1.24,-1.62l-0.13,-0.63l1.07,-1.32l0.06,-0.14l0.13,-0.81l0.68,-0.36l0.16,-0.25l0.03,-0.54l1.4,-0.23l0.12,-0.05l0.87,-0.6l1.26,0.05l0.25,-0.11l0.34,-0.43l0.33,-0.07l1.81,0.08l0.13,-0.02l1.87,-0.77l1.64,0.97l0.19,0.04l2.28,-0.28l0.26,-0.29l0.02,-0.95l0.56,0.36ZM480.44,192.0l1.05,0.74l0.01,0.0l-1.26,-0.23l0.2,-0.51ZM481.76,192.79l1.86,-0.15l1.53,0.17l-0.02,0.19l0.34,0.3l-2.28,0.15l0.01,-0.13l-0.25,-0.31l-1.19,-0.22ZM485.65,193.28l0.65,-0.16l-0.05,0.12l-0.6,0.04Z",
      "name": "Greece"
    },
    "GQ": {
      "path": "M444.81,282.04l-0.21,-0.17l0.74,-2.4l3.56,0.05l0.02,2.42l-3.34,-0.02l-0.76,0.13Z",
      "name": "Equatorial Guinea"
    },
    "GY": {
      "path": "M271.34,264.25l1.43,0.81l1.44,1.53l0.06,1.19l0.28,0.28l0.84,0.05l2.13,1.92l-0.34,1.93l-1.37,0.59l-0.17,0.34l0.12,0.51l-0.43,1.21l0.03,0.26l1.11,1.82l0.26,0.14l0.56,0.0l0.32,1.29l1.25,1.78l-0.08,0.01l-1.34,-0.21l-0.24,0.06l-0.78,0.64l-1.06,0.41l-0.76,0.1l-0.22,0.15l-0.18,0.32l-0.95,-0.1l-1.38,-1.05l-0.19,-1.13l-0.6,-1.18l0.37,-1.96l0.65,-0.83l0.03,-0.32l-0.57,-1.17l-0.15,-0.14l-0.62,-0.27l0.25,-0.85l-0.08,-0.3l-0.58,-0.58l-0.24,-0.09l-1.15,0.1l-1.41,-1.58l0.48,-0.49l0.09,-0.22l-0.04,-0.92l1.31,-0.34l0.73,-0.52l0.04,-0.44l-0.75,-0.82l0.16,-0.66l1.74,-1.3Z",
      "name": "Guyana"
    },
    "GE": {
      "path": "M525.41,174.19l0.26,-0.88l-0.0,-0.17l-0.63,-2.06l-0.1,-0.15l-1.45,-1.12l-0.11,-0.05l-1.31,-0.33l-0.66,-0.69l1.97,0.48l3.65,0.49l3.3,1.41l0.39,0.5l0.33,0.1l1.43,-0.45l2.14,0.58l0.7,1.14l0.13,0.12l1.06,0.47l-0.18,0.11l-0.08,0.43l1.08,1.41l-0.06,0.06l-1.16,-0.15l-1.82,-0.84l-0.31,0.04l-0.55,0.44l-3.29,0.44l-2.32,-1.41l-0.17,-0.04l-2.25,0.12Z",
      "name": "Georgia"
    },
    "GB": {
      "path": "M412.82,118.6l-2.31,3.4l-0.0,0.33l0.31,0.13l2.52,-0.49l2.34,0.02l-0.56,2.51l-2.22,3.13l0.22,0.47l2.43,0.21l2.35,4.35l0.17,0.14l1.58,0.51l1.49,3.78l0.73,1.37l0.2,0.15l2.76,0.59l-0.25,1.75l-1.18,0.91l-0.08,0.39l0.87,1.49l-1.96,1.51l-3.31,-0.02l-4.15,0.88l-1.07,-0.59l-0.35,0.04l-1.55,1.44l-2.17,-0.35l-0.22,0.05l-1.61,1.15l-0.78,-0.38l3.31,-3.12l2.18,-0.7l0.21,-0.31l-0.26,-0.27l-3.78,-0.54l-0.48,-0.9l2.3,-0.92l0.13,-0.46l-1.29,-1.71l0.39,-1.83l3.46,0.29l0.32,-0.24l0.37,-1.99l-0.06,-0.24l-1.71,-2.17l-0.18,-0.11l-2.91,-0.58l-0.43,-0.68l0.82,-1.4l-0.03,-0.35l-0.82,-0.97l-0.46,0.01l-0.85,1.05l-0.11,-2.6l-0.05,-0.16l-1.19,-1.7l0.86,-3.53l1.81,-2.75l1.88,0.26l2.38,-0.24ZM406.39,132.84l-1.09,1.92l-1.65,-0.62l-1.26,0.02l0.41,-1.46l0.0,-0.16l-0.42,-1.51l1.62,-0.11l2.39,1.92Z",
      "name": "United Kingdom"
    },
    "GA": {
      "path": "M448.76,294.47l-2.38,-2.34l-1.63,-2.04l-1.46,-2.48l0.06,-0.66l0.54,-0.81l0.61,-1.82l0.46,-1.69l0.63,-0.11l3.62,0.03l0.3,-0.3l-0.02,-2.75l0.88,-0.12l1.47,0.32l0.13,0.0l1.39,-0.3l-0.13,0.87l0.03,0.19l0.7,1.29l0.3,0.16l1.74,-0.19l0.36,0.29l-1.01,2.7l0.05,0.29l1.13,1.42l0.25,1.82l-0.3,1.56l-0.64,0.99l-1.93,-0.09l-1.26,-1.13l-0.5,0.17l-0.16,0.91l-1.48,0.27l-0.12,0.05l-0.86,0.63l-0.08,0.39l0.81,1.42l-1.48,1.08Z",
      "name": "Gabon"
    },
    "GN": {
      "path": "M399.83,265.31l-0.69,-0.06l-0.3,0.16l-0.43,0.85l-0.39,-0.01l-0.3,-0.33l0.14,-0.87l-0.05,-0.22l-1.05,-1.54l-0.37,-0.11l-0.61,0.27l-0.84,0.12l0.02,-0.54l-0.04,-0.17l-0.35,-0.57l0.07,-0.63l-0.03,-0.17l-0.57,-1.11l-0.7,-0.9l-0.24,-0.12l-2.0,-0.0l-0.19,0.07l-0.51,0.42l-0.6,0.05l-0.21,0.11l-0.43,0.55l-0.3,0.7l-1.04,0.86l-0.91,-1.24l-1.0,-1.02l-0.69,-0.37l-0.52,-0.42l-0.3,-1.11l-0.37,-0.56l-0.1,-0.1l-0.4,-0.23l0.77,-0.85l0.62,0.04l0.18,-0.05l0.58,-0.38l0.46,-0.0l0.19,-0.07l0.39,-0.34l0.1,-0.3l-0.17,-0.67l0.15,-0.14l0.09,-0.2l0.03,-0.57l0.87,0.02l1.76,0.6l0.13,0.01l0.55,-0.06l0.22,-0.13l0.08,-0.12l1.18,0.17l0.17,-0.02l0.09,0.56l0.3,0.25l0.4,-0.0l0.14,-0.03l0.56,-0.29l0.23,0.05l0.63,0.59l0.15,0.07l1.07,0.2l0.24,-0.06l0.65,-0.52l0.77,-0.32l0.55,-0.32l0.3,0.04l0.44,0.45l0.34,0.74l0.84,0.87l-0.35,0.45l-0.06,0.15l-0.1,0.82l0.42,0.31l0.35,-0.16l0.05,0.04l-0.1,0.59l0.09,0.27l0.42,0.4l-0.06,0.02l-0.18,0.21l-0.2,0.86l0.03,0.21l0.56,1.02l0.52,1.71l-0.65,0.21l-0.15,0.12l-0.24,0.35l-0.03,0.28l0.16,0.41l-0.1,0.76l-0.12,0.0Z",
      "name": "Guinea"
    },
    "GM": {
      "path": "M379.18,251.48l0.15,-0.55l2.51,-0.07l0.21,-0.09l0.48,-0.52l0.58,-0.03l0.91,0.58l0.16,0.05l0.78,0.01l0.14,-0.03l0.59,-0.31l0.16,0.24l-0.71,0.38l-0.94,-0.04l-1.02,-0.51l-0.3,0.01l-0.86,0.55l-0.37,0.02l-0.14,0.04l-0.53,0.31l-1.81,-0.04Z",
      "name": "Gambia"
    },
    "GL": {
      "path": "M304.13,6.6l8.19,-3.63l8.72,0.28l0.19,-0.06l3.12,-2.28l8.75,-0.61l19.94,0.8l14.93,4.75l-3.92,2.01l-9.52,0.27l-13.48,0.6l-0.27,0.2l0.09,0.33l1.26,1.09l0.22,0.07l8.81,-0.67l7.49,2.07l0.19,-0.01l4.68,-1.78l1.76,1.84l-2.59,3.26l-0.01,0.36l0.34,0.11l6.35,-2.2l12.09,-2.32l7.31,1.14l1.17,2.13l-9.9,4.05l-1.43,1.32l-7.91,0.98l-0.26,0.31l0.29,0.29l5.25,0.25l-2.63,3.72l-2.02,3.61l-0.04,0.15l0.08,6.05l0.07,0.19l2.61,3.0l-3.4,0.2l-4.12,1.66l-0.04,0.54l4.5,2.67l0.53,3.9l-2.39,0.42l-0.19,0.48l2.91,3.83l-5.0,0.32l-0.27,0.22l0.12,0.33l2.69,1.84l-0.65,1.35l-3.36,0.71l-3.46,0.01l-0.21,0.51l3.05,3.15l0.02,1.53l-4.54,-1.79l-0.32,0.06l-1.29,1.26l0.11,0.5l3.33,1.15l3.17,2.74l0.85,3.29l-4.0,0.78l-1.83,-1.66l-3.1,-2.64l-0.36,-0.02l-0.13,0.33l0.8,2.92l-2.76,2.26l-0.09,0.33l0.28,0.2l6.59,0.19l2.47,0.18l-5.86,3.38l-6.76,3.43l-7.26,1.48l-2.73,0.02l-0.16,0.05l-2.67,1.72l-3.44,4.42l-5.28,2.86l-1.73,0.18l-3.33,1.01l-3.59,0.96l-0.15,0.1l-2.15,2.52l-0.07,0.19l-0.03,2.76l-1.21,2.49l-4.03,3.1l-0.1,0.33l0.98,2.94l-2.31,6.57l-3.21,0.21l-3.6,-3.0l-0.19,-0.07l-4.9,-0.02l-2.29,-1.97l-1.69,-3.78l-4.31,-4.86l-1.23,-2.52l-0.34,-3.58l-0.08,-0.17l-3.35,-3.67l0.85,-2.92l-0.09,-0.31l-1.5,-1.34l2.33,-4.7l3.67,-1.57l0.15,-0.13l1.02,-1.93l0.52,-3.47l-0.44,-0.31l-2.85,1.57l-1.33,0.64l-2.12,0.59l-2.81,-1.32l-0.15,-2.79l0.88,-2.17l2.09,-0.06l5.07,1.2l0.34,-0.17l-0.11,-0.37l-4.3,-2.9l-2.24,-1.58l-0.25,-0.05l-2.38,0.62l-1.7,-0.93l2.62,-4.1l-0.03,-0.36l-1.51,-1.75l-1.97,-3.3l-3.01,-5.21l-0.1,-0.11l-3.04,-1.85l0.03,-1.94l-0.18,-0.28l-6.82,-3.01l-5.35,-0.38l-6.69,0.21l-6.03,0.37l-2.81,-1.59l-3.84,-2.9l5.94,-1.5l5.01,-0.28l0.28,-0.29l-0.26,-0.31l-10.68,-1.38l-5.38,-2.1l0.27,-1.68l9.3,-2.6l9.18,-2.68l0.19,-0.16l0.97,-2.05l-0.18,-0.42l-6.29,-1.91l1.81,-1.9l8.58,-4.05l3.6,-0.63l0.23,-0.4l-0.92,-2.37l5.59,-1.5l7.66,-0.95l7.58,-0.05l2.65,1.84l0.31,0.02l6.52,-3.29l5.85,2.24l3.55,0.49l5.17,1.95l0.38,-0.16l-0.13,-0.39l-5.77,-3.16l0.29,-2.26Z",
      "name": "Greenland"
    },
    "KW": {
      "path": "M540.87,207.81l0.41,0.94l-0.18,0.51l0.0,0.21l0.65,1.66l-1.15,0.05l-0.54,-1.12l-0.24,-0.17l-1.73,-0.2l1.44,-2.06l1.33,0.18Z",
      "name": "Kuwait"
    },
    "GH": {
      "path": "M423.16,269.88l-3.58,1.34l-1.41,0.87l-2.13,0.69l-1.91,-0.61l0.09,-0.75l-0.03,-0.17l-1.04,-2.07l0.62,-2.7l1.04,-2.08l0.03,-0.19l-1.0,-5.46l0.05,-1.12l4.04,-0.11l1.08,0.18l0.18,-0.03l0.72,-0.36l0.75,0.13l-0.11,0.48l0.06,0.26l0.98,1.22l-0.0,1.77l0.24,1.99l0.05,0.13l0.55,0.81l-0.52,2.14l0.19,1.37l0.69,1.66l0.38,0.62Z",
      "name": "Ghana"
    },
    "OM": {
      "path": "M568.16,231.0l-0.08,0.1l-0.84,1.61l-0.93,-0.11l-0.27,0.11l-0.58,0.73l-0.4,1.32l-0.01,0.14l0.29,1.61l-0.07,0.09l-1.0,-0.01l-0.16,0.04l-1.56,0.97l-0.14,0.2l-0.23,1.17l-0.41,0.4l-1.44,-0.02l-0.17,0.05l-0.98,0.65l-0.13,0.25l0.01,0.87l-0.97,0.57l-1.27,-0.22l-0.19,0.03l-1.63,0.84l-0.88,0.11l-2.55,-5.57l7.2,-2.49l0.19,-0.19l1.67,-5.23l-0.03,-0.25l-1.1,-1.78l0.05,-0.89l0.68,-1.03l0.05,-0.16l0.01,-0.89l0.96,-0.44l0.07,-0.5l-0.32,-0.26l0.16,-1.31l0.85,-0.01l1.03,1.67l0.09,0.09l1.4,0.96l0.11,0.05l1.82,0.34l1.37,0.45l1.75,2.32l0.13,0.1l0.7,0.26l-0.0,0.3l-1.25,2.19l-1.01,0.8ZM561.88,218.47l-0.01,0.02l-0.15,-0.29l0.3,-0.38l-0.14,0.65Z",
      "name": "Oman"
    },
    "_3": {
      "path": "M543.2,261.06l-1.07,1.46l-1.65,1.99l-1.91,0.01l-8.08,-2.95l-0.89,-0.84l-0.9,-1.19l-0.81,-1.23l0.44,-0.73l0.76,-1.12l0.49,0.28l0.52,1.05l1.13,1.06l0.2,0.08l1.24,0.01l2.42,-0.65l2.77,-0.31l2.17,-0.78l1.31,-0.19l0.84,-0.43l1.03,-0.06l-0.01,4.54Z",
      "name": "Somaliland"
    },
    "_2": {
      "path": "M384.23,230.37l0.07,-0.06l0.28,-0.89l0.99,-1.13l0.07,-0.13l0.8,-3.54l3.4,-2.8l0.09,-0.13l0.76,-2.17l0.07,5.5l-2.07,0.21l-0.24,0.17l-0.61,1.36l-0.02,0.16l0.43,3.46l-4.01,-0.01ZM391.82,218.2l0.07,-0.06l0.75,-1.93l1.86,-0.25l0.94,0.34l1.14,0.0l0.18,-0.06l0.73,-0.56l1.41,-0.08l-0.0,2.72l-7.08,-0.12Z",
      "name": "Western Sahara"
    },
    "_1": {
      "path": "M472.71,172.84l-0.07,-0.43l-0.16,-0.22l-0.53,-0.27l-0.38,-0.58l0.3,-0.43l0.51,-0.19l0.18,-0.18l0.3,-0.87l0.12,-0.04l0.22,0.26l0.12,0.09l0.38,0.15l0.28,0.41l0.15,0.12l0.34,0.12l0.43,0.5l0.15,0.07l-0.12,0.3l-0.27,0.32l-0.03,0.18l-0.31,0.06l-1.48,0.47l-0.15,0.17Z",
      "name": "Kosovo"
    },
    "_0": {
      "path": "M503.54,192.92l0.09,-0.17l0.41,0.01l-0.08,0.01l-0.42,0.15ZM504.23,192.76l1.02,0.02l0.4,-0.13l-0.09,0.29l0.03,0.08l-0.35,0.16l-0.24,-0.04l-0.06,-0.1l-0.18,-0.17l-0.19,-0.08l-0.33,-0.02Z",
      "name": "Northern Cyprus"
    },
    "JO": {
      "path": "M510.26,200.93l0.28,-0.57l2.53,1.0l0.27,-0.02l4.57,-2.77l0.84,2.84l-0.28,0.25l-4.95,1.37l-0.14,0.49l2.24,2.48l-0.5,0.28l-0.13,0.14l-0.35,0.78l-1.76,0.35l-0.2,0.14l-0.57,0.94l-0.94,0.73l-2.45,-0.38l-0.03,-0.12l1.23,-4.32l-0.04,-1.1l0.34,-0.75l0.03,-0.12l0.0,-1.63Z",
      "name": "Jordan"
    },
    "HR": {
      "path": "M455.49,162.73l1.53,0.09l0.24,-0.1l0.29,-0.34l0.64,0.38l0.14,0.04l0.98,0.06l0.32,-0.3l-0.01,-0.66l0.67,-0.25l0.19,-0.22l0.21,-1.11l1.72,-0.72l0.65,0.32l1.94,1.37l2.07,0.6l0.22,-0.02l0.67,-0.33l0.47,0.94l0.67,0.76l-0.63,0.77l-0.91,-0.55l-0.16,-0.04l-1.69,0.04l-2.2,-0.51l-1.17,0.07l-0.21,0.11l-0.36,0.42l-0.67,-0.53l-0.46,0.12l-0.52,1.29l0.05,0.31l1.21,1.42l0.58,0.99l1.15,1.14l0.95,0.68l0.92,1.23l0.1,0.09l1.75,0.91l-1.87,-0.89l-1.5,-1.11l-2.23,-0.88l-1.77,-1.9l0.12,-0.06l0.1,-0.47l-1.07,-1.22l-0.04,-0.94l-0.21,-0.27l-1.61,-0.49l-0.35,0.14l-0.53,0.93l-0.41,-0.57l0.04,-0.73Z",
      "name": "Croatia"
    },
    "HT": {
      "path": "M237.82,234.68l1.35,0.1l1.95,0.37l0.18,1.15l-0.16,0.83l-0.51,0.37l-0.06,0.44l0.57,0.68l-0.02,0.22l-1.31,-0.35l-1.26,0.17l-1.49,-0.18l-0.15,0.02l-1.03,0.43l-1.02,-0.61l0.09,-0.36l2.04,0.32l1.9,0.21l0.19,-0.05l0.9,-0.58l0.05,-0.47l-1.05,-1.03l0.02,-0.86l-0.23,-0.3l-1.13,-0.29l0.18,-0.23Z",
      "name": "Haiti"
    },
    "HU": {
      "path": "M461.96,157.92l0.68,-1.66l-0.03,-0.29l-0.15,-0.22l0.84,-0.0l0.3,-0.26l0.12,-0.84l0.88,0.57l0.98,0.38l0.16,0.01l2.1,-0.39l0.23,-0.21l0.14,-0.45l0.88,-0.1l1.06,-0.43l0.13,0.1l0.28,0.04l1.18,-0.4l0.14,-0.1l0.52,-0.67l0.63,-0.15l2.6,0.95l0.26,-0.03l0.38,-0.23l1.12,0.7l0.1,0.49l-1.31,0.57l-0.14,0.13l-1.18,2.14l-1.44,2.04l-1.85,0.55l-1.51,-0.13l-0.14,0.02l-1.92,0.82l-0.85,0.42l-1.91,-0.55l-1.83,-1.31l-0.74,-0.37l-0.44,-0.97l-0.26,-0.18Z",
      "name": "Hungary"
    },
    "HN": {
      "path": "M202.48,251.87l-0.33,-0.62l-0.18,-0.14l-0.5,-0.15l0.13,-0.76l-0.11,-0.28l-0.34,-0.28l-0.6,-0.23l-0.18,-0.01l-0.81,0.22l-0.16,-0.24l-0.72,-0.39l-0.51,-0.48l-0.12,-0.07l-0.31,-0.09l0.24,-0.3l0.04,-0.3l-0.16,-0.4l0.1,-0.28l1.14,-0.69l1.0,-0.86l0.09,0.04l0.3,-0.05l0.47,-0.39l0.49,-0.03l0.14,0.13l0.29,0.06l0.31,-0.1l1.16,0.22l1.24,-0.08l0.81,-0.28l0.29,-0.25l0.63,0.1l0.69,0.18l0.65,-0.06l0.49,-0.2l1.04,0.32l0.38,0.06l0.7,0.44l0.71,0.56l0.92,0.41l0.1,0.11l-0.11,-0.01l-0.23,0.09l-0.3,0.3l-0.76,0.29l-0.58,0.0l-0.15,0.04l-0.45,0.26l-0.31,-0.07l-0.37,-0.34l-0.28,-0.07l-0.26,0.07l-0.18,0.15l-0.23,0.43l-0.04,-0.0l-0.33,0.28l-0.03,0.4l-0.76,0.61l-0.45,0.3l-0.15,0.16l-0.51,-0.36l-0.41,0.06l-0.45,0.56l-0.41,-0.01l-0.59,0.06l-0.27,0.31l0.04,0.96l-0.07,0.0l-0.25,0.16l-0.24,0.45l-0.42,0.06Z",
      "name": "Honduras"
    },
    "PR": {
      "path": "M254.95,238.31l1.15,0.21l0.2,0.23l-0.36,0.36l-1.76,-0.01l-1.2,0.07l-0.09,-0.69l0.17,-0.18l1.89,0.01Z",
      "name": "Puerto Rico"
    },
    "PS": {
      "path": "M509.66,201.06l-0.0,1.44l-0.29,0.63l-0.59,0.19l0.02,-0.11l0.52,-0.31l-0.02,-0.53l-0.41,-0.2l0.36,-1.28l0.41,0.17Z",
      "name": "West Bank"
    },
    "PT": {
      "path": "M398.65,173.6l0.75,-0.63l0.7,-0.3l0.51,1.2l0.28,0.18l1.48,-0.0l0.2,-0.08l0.33,-0.3l1.16,0.08l0.52,1.11l-0.95,0.66l-0.13,0.24l-0.03,2.2l-0.33,0.35l-0.08,0.18l-0.08,1.17l-0.86,0.19l-0.2,0.44l0.93,1.64l-0.64,1.79l0.07,0.31l0.72,0.72l-0.24,0.56l-0.9,1.05l-0.07,0.26l0.17,0.77l-0.73,0.54l-1.18,-0.36l-0.16,-0.0l-0.85,0.21l0.31,-1.81l-0.23,-1.87l-0.23,-0.25l-0.99,-0.24l-0.49,-0.91l0.18,-1.72l0.93,-0.99l0.08,-0.16l0.17,-1.17l0.52,-1.76l-0.04,-1.36l-0.51,-1.14l-0.09,-0.8Z",
      "name": "Portugal"
    },
    "PY": {
      "path": "M264.33,341.43l0.93,-2.96l0.07,-1.42l1.1,-2.1l4.19,-0.73l2.22,0.04l2.12,1.21l0.07,0.76l0.7,1.38l-0.16,3.48l0.24,0.31l2.64,0.5l0.19,-0.03l0.9,-0.45l1.47,0.62l0.38,0.64l0.23,2.35l0.3,1.07l0.25,0.21l0.93,0.12l0.16,-0.02l0.8,-0.37l0.61,0.33l-0.0,1.25l-0.33,1.53l-0.5,1.57l-0.39,2.26l-2.14,1.94l-1.85,0.4l-2.74,-0.4l-2.13,-0.62l2.26,-3.75l0.03,-0.24l-0.36,-1.18l-0.17,-0.19l-2.55,-1.03l-3.04,-1.95l-2.07,-0.43l-4.4,-4.12Z",
      "name": "Paraguay"
    },
    "PA": {
      "path": "M213.65,263.79l0.18,-0.43l0.02,-0.18l-0.06,-0.28l0.23,-0.18l-0.01,-0.48l-0.4,-0.29l-0.01,-0.62l0.57,-0.13l0.68,0.69l-0.04,0.39l0.26,0.33l1.0,0.11l0.27,-0.1l0.49,0.44l0.24,0.07l1.34,-0.22l1.04,-0.62l1.49,-0.5l0.86,-0.73l0.99,0.11l0.18,0.28l1.35,0.08l1.02,0.4l0.78,0.72l0.71,0.53l-0.1,0.12l-0.05,0.3l0.53,1.34l-0.28,0.44l-0.6,-0.13l-0.36,0.22l-0.2,0.76l-0.41,-0.36l-0.44,-1.12l0.49,-0.53l-0.14,-0.49l-0.51,-0.14l-0.41,-0.72l-0.11,-0.11l-1.25,-0.7l-0.19,-0.04l-1.1,0.16l-0.22,0.15l-0.47,0.81l-0.9,0.56l-0.49,0.08l-0.22,0.17l-0.25,0.52l0.05,0.32l0.93,1.07l-0.41,0.21l-0.29,0.3l-0.81,0.09l-0.36,-1.26l-0.53,-0.1l-0.21,0.28l-0.5,-0.09l-0.44,-0.88l-0.22,-0.16l-0.99,-0.16l-0.61,-0.28l-0.13,-0.03l-1.0,0.0Z",
      "name": "Panama"
    },
    "PG": {
      "path": "M808.4,298.6l0.62,0.46l1.19,1.56l1.04,0.77l-0.18,0.37l-0.42,0.15l-0.92,-0.82l-1.05,-1.53l-0.27,-0.96ZM804.09,296.06l-0.3,0.26l-0.36,-1.11l-0.66,-1.06l-2.55,-1.89l-1.42,-0.59l0.17,-0.15l1.16,0.6l0.85,0.55l1.01,0.58l0.97,1.02l0.9,0.76l0.24,1.03ZM796.71,297.99l0.15,0.82l0.34,0.24l1.43,-0.19l0.19,-0.11l0.68,-0.82l1.36,-0.87l0.13,-0.31l-0.21,-1.13l1.04,-0.03l0.3,0.25l-0.04,1.17l-0.74,1.34l-1.17,0.18l-0.22,0.15l-0.35,0.62l-2.51,1.13l-1.21,-0.0l-1.99,-0.71l-1.19,-0.58l0.07,-0.28l1.98,0.32l1.46,-0.2l0.24,-0.21l0.25,-0.79ZM789.24,303.52l0.11,0.15l2.19,1.62l1.6,2.62l0.27,0.14l1.09,-0.06l-0.07,0.77l0.23,0.32l1.23,0.27l-0.14,0.09l0.05,0.53l2.39,0.95l-0.11,0.28l-1.33,0.14l-0.51,-0.55l-0.18,-0.09l-4.59,-0.65l-1.87,-1.55l-1.38,-1.35l-1.28,-2.17l-0.16,-0.13l-3.27,-1.1l-0.19,0.0l-2.12,0.72l-1.58,0.85l-0.15,0.31l0.28,1.63l-1.65,0.73l-1.37,-0.4l-2.3,-0.09l-0.08,-15.65l3.95,1.57l4.58,1.42l1.67,1.25l1.32,1.19l0.36,1.39l0.19,0.21l4.06,1.51l0.39,0.85l-1.9,0.22l-0.25,0.39l0.55,1.68Z",
      "name": "Papua New Guinea"
    },
    "PE": {
      "path": "M246.44,329.21l-0.63,1.25l-1.05,0.54l-2.25,-1.33l-0.19,-0.93l-0.16,-0.21l-4.95,-2.58l-4.46,-2.79l-1.87,-1.52l-0.94,-1.91l0.33,-0.6l-0.01,-0.31l-2.11,-3.33l-2.46,-4.66l-2.36,-5.02l-1.04,-1.18l-0.77,-1.81l-0.08,-0.11l-1.95,-1.64l-1.54,-0.88l0.61,-0.85l0.02,-0.31l-1.15,-2.27l0.69,-1.56l1.59,-1.26l0.12,0.42l-0.56,0.47l-0.11,0.25l0.07,0.92l0.36,0.27l0.97,-0.19l0.85,0.23l0.99,1.19l0.41,0.05l1.42,-1.03l0.11,-0.16l0.46,-1.64l1.45,-2.06l2.92,-0.96l0.11,-0.07l2.73,-2.62l0.84,-1.72l0.02,-0.18l-0.3,-1.65l0.28,-0.1l1.49,1.06l0.77,1.14l0.1,0.09l1.08,0.6l1.43,2.55l0.21,0.15l1.86,0.31l0.18,-0.03l1.25,-0.6l0.77,0.37l0.17,0.03l1.4,-0.2l1.57,0.96l-1.45,2.29l0.23,0.46l0.63,0.05l0.66,0.7l-1.51,-0.08l-0.24,0.1l-0.27,0.31l-1.96,0.46l-2.95,1.74l-0.14,0.21l-0.17,1.1l-0.6,0.82l-0.05,0.23l0.21,1.13l-1.31,0.63l-0.17,0.27l0.0,0.91l-0.53,0.37l-0.1,0.37l1.04,2.27l1.31,1.46l-0.44,0.9l0.24,0.43l1.52,0.13l0.87,1.23l0.24,0.13l2.21,0.07l0.18,-0.06l1.55,-1.13l-0.14,3.22l0.23,0.3l1.14,0.29l0.16,-0.0l1.18,-0.36l1.97,3.71l-0.45,0.71l-0.04,0.14l-0.12,1.8l-0.05,2.07l-0.92,1.2l-0.03,0.31l0.38,0.8l-0.48,0.72l-0.02,0.3l1.01,2.02l-1.5,2.64Z",
      "name": "Peru"
    },
    "PK": {
      "path": "M609.08,187.76l1.66,1.21l0.71,2.11l0.2,0.19l3.62,1.01l-1.98,1.95l-2.65,0.4l-3.75,-0.68l-0.26,0.08l-1.23,1.22l-0.07,0.31l0.89,2.46l0.88,1.92l0.1,0.12l1.67,1.14l-1.8,1.35l-0.12,0.25l0.04,1.85l-2.35,2.67l-1.59,2.79l-2.5,2.72l-2.76,-0.2l-0.24,0.09l-2.76,2.83l0.04,0.45l1.54,1.13l0.27,1.94l0.09,0.17l1.34,1.29l0.4,1.83l-5.14,-0.01l-0.22,0.09l-1.53,1.63l-1.52,-0.56l-0.76,-1.88l-1.93,-2.03l-0.25,-0.09l-4.6,0.5l-4.05,0.05l-3.1,0.33l0.77,-2.53l3.48,-1.33l0.19,-0.33l-0.21,-1.24l-0.19,-0.23l-1.01,-0.37l-0.06,-2.18l-0.17,-0.26l-2.32,-1.16l-0.96,-1.57l-0.56,-0.65l3.16,1.05l0.14,0.01l2.45,-0.4l1.44,0.33l0.3,-0.1l0.4,-0.47l1.58,0.22l0.14,-0.01l3.25,-1.14l0.2,-0.27l0.08,-2.23l1.23,-1.38l1.73,0.0l0.28,-0.2l0.22,-0.61l1.68,-0.32l0.86,0.24l0.27,-0.05l0.98,-0.78l0.11,-0.26l-0.13,-1.57l0.96,-1.52l1.51,-0.67l0.14,-0.41l-0.74,-1.4l1.86,0.07l0.26,-0.13l0.69,-1.01l0.05,-0.2l-0.09,-0.94l1.14,-1.09l0.09,-0.28l-0.29,-1.41l-0.51,-1.07l1.23,-1.05l2.6,-0.58l2.86,-0.33l1.33,-0.54l1.3,-0.29Z",
      "name": "Pakistan"
    },
    "PH": {
      "path": "M737.11,263.82l0.25,1.66l0.14,1.34l-0.54,1.46l-0.64,-1.79l-0.5,-0.1l-1.17,1.28l-0.05,0.32l0.74,1.71l-0.49,0.81l-2.6,-1.28l-0.61,-1.57l0.68,-1.07l-0.07,-0.4l-1.59,-1.19l-0.42,0.06l-0.69,0.91l-1.01,-0.08l-0.21,0.06l-1.58,1.2l-0.17,-0.3l0.87,-1.88l1.48,-0.66l1.18,-0.81l0.71,0.92l0.34,0.1l1.9,-0.69l0.18,-0.18l0.34,-0.94l1.57,-0.06l0.29,-0.32l-0.1,-1.38l1.41,0.83l0.36,2.06ZM734.94,254.42l0.56,2.24l-1.41,-0.49l-0.4,0.3l0.07,0.94l0.51,1.3l-0.54,0.26l-0.08,-1.34l-0.25,-0.28l-0.56,-0.1l-0.23,-0.91l1.03,0.14l0.34,-0.31l-0.03,-0.96l-0.06,-0.18l-1.14,-1.44l1.62,0.04l0.57,0.78ZM724.68,238.33l1.48,0.71l0.33,-0.04l0.44,-0.38l0.05,0.13l-0.37,0.97l0.01,0.23l0.81,1.75l-0.59,1.92l-1.37,0.79l-0.14,0.2l-0.39,2.07l0.01,0.14l0.56,2.04l0.23,0.21l1.33,0.28l0.14,-0.0l1.0,-0.27l2.82,1.28l-0.2,1.16l0.12,0.29l0.66,0.5l-0.13,0.56l-1.54,-0.99l-0.89,-1.29l-0.49,0.0l-0.44,0.65l-1.34,-1.28l-0.26,-0.08l-2.18,0.36l-0.96,-0.44l0.09,-0.72l0.69,-0.57l-0.01,-0.47l-0.75,-0.59l-0.47,0.14l-0.15,0.43l-0.86,-1.02l-0.34,-1.02l-0.07,-1.74l0.49,0.41l0.49,-0.21l0.26,-3.99l0.73,-2.1l1.23,0.0ZM731.12,258.92l-0.82,0.75l-0.83,1.64l-0.52,0.5l-1.17,-1.33l0.36,-0.47l0.62,-0.7l0.07,-0.15l0.24,-1.35l0.73,-0.08l-0.31,1.29l0.16,0.34l0.37,-0.09l1.21,-1.6l-0.12,1.24ZM726.66,255.58l0.85,0.45l0.14,0.03l1.28,-0.0l-0.03,0.62l-1.04,0.96l-1.15,0.55l-0.05,-0.71l0.17,-1.26l-0.01,-0.13l-0.16,-0.51ZM724.92,252.06l-0.45,1.5l-0.7,-0.83l-0.95,-1.43l1.44,0.06l0.67,0.7ZM717.48,261.28l-1.87,1.35l0.21,-0.3l1.81,-1.57l1.5,-1.75l0.97,-1.84l0.23,1.08l-1.56,1.33l-1.29,1.7Z",
      "name": "Philippines"
    },
    "PL": {
      "path": "M458.8,144.25l-0.96,-1.98l0.18,-1.06l-0.01,-0.15l-0.62,-1.8l-0.82,-1.11l0.56,-0.73l0.05,-0.28l-0.51,-1.51l1.48,-0.87l3.88,-1.58l3.06,-1.14l2.23,0.52l0.15,0.66l0.29,0.23l2.4,0.04l3.11,0.39l4.56,-0.05l1.12,0.32l0.51,0.89l0.1,1.45l0.03,0.12l0.66,1.23l-0.01,1.08l-1.33,0.61l-0.14,0.41l0.74,1.5l0.07,1.53l1.22,2.79l-0.19,0.66l-1.09,0.33l-0.14,0.09l-2.27,2.72l-0.04,0.31l0.35,0.8l-2.22,-1.16l-0.21,-0.02l-1.72,0.44l-1.1,-0.31l-0.21,0.02l-1.3,0.61l-1.11,-1.02l-0.32,-0.05l-0.81,0.35l-1.15,-1.61l-0.21,-0.12l-1.65,-0.17l-0.19,-0.82l-0.23,-0.23l-1.72,-0.37l-0.34,0.17l-0.25,0.56l-0.88,-0.44l0.12,-0.69l-0.25,-0.35l-1.78,-0.27l-1.08,-0.97Z",
      "name": "Poland"
    },
    "ZM": {
      "path": "M502.81,308.32l1.09,1.04l0.58,1.94l-0.39,0.66l-0.5,2.05l-0.0,0.14l0.45,1.95l-0.69,0.77l-0.06,0.11l-0.76,2.37l0.15,0.36l0.62,0.31l-6.85,1.9l-0.22,0.33l0.2,1.54l-1.62,0.3l-0.12,0.05l-1.43,1.02l-0.11,0.15l-0.25,0.73l-0.73,0.17l-0.14,0.08l-2.18,2.12l-1.33,1.6l-0.65,0.05l-0.83,-0.29l-2.75,-0.28l-0.24,-0.1l-0.15,-0.27l-0.99,-0.58l-0.12,-0.04l-1.73,-0.14l-1.88,0.54l-1.5,-1.48l-1.61,-2.01l0.11,-7.73l4.92,0.03l0.29,-0.37l-0.19,-0.79l0.34,-0.86l0.0,-0.21l-0.41,-1.11l0.26,-1.14l-0.01,-0.16l-0.12,-0.36l0.18,0.01l0.1,0.56l0.31,0.25l1.14,-0.06l1.44,0.21l0.76,1.05l0.19,0.12l2.01,0.35l0.19,-0.03l1.24,-0.65l0.44,1.03l0.22,0.18l1.81,0.34l0.85,0.99l1.02,1.39l0.24,0.12l1.92,0.02l0.3,-0.32l-0.21,-2.74l-0.47,-0.23l-0.53,0.36l-1.58,-0.89l-0.51,-0.34l0.29,-2.36l0.44,-2.99l-0.03,-0.18l-0.5,-0.99l0.61,-1.38l0.53,-0.24l3.26,-0.41l0.89,0.23l1.01,0.62l1.04,0.44l1.6,0.43l1.35,0.72Z",
      "name": "Zambia"
    },
    "EE": {
      "path": "M482.19,120.88l0.23,-1.68l-0.43,-0.31l-0.75,0.37l-1.34,-1.1l-0.18,-1.75l2.92,-0.95l3.07,-0.53l2.66,0.6l2.48,-0.1l0.18,0.31l-1.65,1.96l-0.06,0.26l0.71,3.25l-0.88,0.94l-1.85,-0.01l-2.08,-1.3l-1.14,-0.47l-0.2,-0.01l-1.69,0.51Z",
      "name": "Estonia"
    },
    "EG": {
      "path": "M508.07,208.8l-0.66,1.06l-0.53,2.03l-0.64,1.32l-0.32,0.26l-1.74,-1.85l-1.77,-3.86l-0.48,-0.09l-0.26,0.25l-0.07,0.32l1.04,2.88l1.55,2.76l1.89,4.18l0.94,1.48l0.83,1.54l2.08,2.73l-0.3,0.28l-0.1,0.23l0.08,1.72l0.11,0.22l2.91,2.37l-28.78,0.0l0.0,-19.06l-0.73,-2.2l0.61,-1.59l0.0,-0.2l-0.34,-1.04l0.73,-1.08l3.13,-0.04l2.36,0.72l2.48,0.81l1.15,0.43l0.23,-0.01l1.93,-0.87l1.02,-0.78l2.08,-0.21l1.59,0.31l0.62,1.24l0.52,0.03l0.46,-0.71l1.86,0.59l1.95,0.16l0.17,-0.04l0.92,-0.52l1.48,4.24Z",
      "name": "Egypt"
    },
    "ZA": {
      "path": "M467.06,373.27l-0.13,-0.29l0.01,-1.58l-0.02,-0.12l-0.71,-1.64l0.59,-0.37l0.14,-0.26l-0.07,-2.13l-0.05,-0.15l-1.63,-2.58l-1.25,-2.31l-1.71,-3.37l0.88,-0.98l0.7,0.52l0.39,1.08l0.23,0.19l1.1,0.19l1.55,0.51l0.14,0.01l1.35,-0.2l0.11,-0.04l2.24,-1.39l0.14,-0.25l0.0,-9.4l0.16,0.09l1.39,2.38l-0.22,1.53l0.04,0.19l0.56,0.94l0.3,0.14l1.79,-0.27l0.16,-0.08l1.23,-1.18l1.17,-0.79l0.1,-0.12l0.57,-1.19l1.02,-0.52l0.9,0.28l1.16,0.73l0.14,0.05l2.04,0.13l0.13,-0.02l1.6,-0.62l0.18,-0.19l0.63,-1.93l1.18,-0.19l0.19,-0.12l0.78,-1.05l0.81,-1.71l2.18,-1.91l3.44,-1.88l0.89,0.02l1.17,0.43l0.21,-0.0l0.76,-0.29l1.07,0.21l1.15,3.55l0.63,1.82l-0.44,2.9l0.1,0.52l-0.74,-0.29l-0.18,-0.01l-0.72,0.19l-0.21,0.2l-0.22,0.74l-0.66,0.97l-0.05,0.18l0.02,0.93l0.09,0.21l1.49,1.46l0.27,0.08l1.47,-0.29l0.22,-0.18l0.43,-1.01l1.29,0.02l-0.51,1.63l-0.29,2.2l-0.59,1.12l-2.2,1.78l-1.06,1.39l-0.72,1.44l-1.39,1.93l-2.81,2.84l-1.75,1.65l-1.85,1.24l-2.55,1.06l-1.23,0.14l-0.24,0.18l-0.22,0.54l-1.27,-0.35l-0.2,0.01l-1.15,0.5l-2.62,-0.52l-0.12,0.0l-1.46,0.33l-0.98,-0.14l-0.16,0.02l-2.55,1.1l-2.11,0.44l-1.59,1.07l-0.93,0.06l-0.97,-0.92l-0.19,-0.08l-0.72,-0.04l-1.0,-1.16l-0.25,0.05ZM493.72,359.24l-1.12,-0.86l-0.31,-0.03l-1.23,0.59l-1.36,1.07l-1.39,1.78l0.01,0.38l1.88,2.11l0.31,0.09l0.9,-0.27l0.18,-0.15l0.4,-0.77l1.28,-0.39l0.18,-0.16l0.42,-0.88l0.76,-1.32l-0.05,-0.37l-0.87,-0.82Z",
      "name": "South Africa"
    },
    "EC": {
      "path": "M220.2,293.48l1.25,-1.76l0.02,-0.31l-0.54,-1.09l-0.5,-0.06l-0.78,0.94l-1.03,-0.75l0.33,-0.46l0.05,-0.23l-0.38,-2.04l0.66,-0.28l0.17,-0.19l0.45,-1.52l0.93,-1.58l0.04,-0.2l-0.13,-0.78l1.19,-0.47l1.57,-0.91l2.35,1.34l0.17,0.04l0.28,-0.02l0.52,0.91l0.21,0.15l2.12,0.35l0.2,-0.03l0.55,-0.31l1.08,0.73l0.97,0.54l0.31,1.67l-0.71,1.49l-2.64,2.54l-2.95,0.97l-0.15,0.11l-1.53,2.18l-0.49,1.68l-1.1,0.8l-0.87,-1.05l-0.15,-0.1l-1.01,-0.27l-0.13,-0.0l-0.7,0.14l-0.03,-0.43l0.6,-0.5l0.1,-0.31l-0.26,-0.91Z",
      "name": "Ecuador"
    },
    "AL": {
      "path": "M470.27,171.7l0.38,0.19l0.45,-0.18l0.4,0.61l0.11,0.1l0.46,0.24l0.13,0.87l-0.3,0.95l-0.0,0.17l0.36,1.28l0.12,0.17l0.9,0.63l-0.03,0.44l-0.67,0.35l-0.16,0.22l-0.14,0.88l-0.96,1.18l-0.06,-0.03l-0.04,-0.48l-0.12,-0.22l-1.28,-0.92l-0.19,-1.25l0.2,-1.96l0.33,-0.89l-0.06,-0.3l-0.36,-0.41l-0.13,-0.75l0.66,-0.9Z",
      "name": "Albania"
    },
    "AO": {
      "path": "M461.62,299.93l0.55,1.67l0.73,1.54l1.56,2.18l0.28,0.12l1.66,-0.2l0.81,-0.34l1.28,0.33l0.33,-0.14l0.39,-0.67l0.56,-1.3l1.37,-0.09l0.27,-0.21l0.07,-0.23l0.67,-0.01l-0.13,0.53l0.29,0.37l2.74,-0.02l0.04,1.29l0.03,0.13l0.46,0.87l-0.35,1.52l0.18,1.55l0.07,0.16l0.75,0.85l-0.13,2.89l0.41,0.29l0.56,-0.21l1.11,0.05l1.5,-0.37l0.9,0.12l0.18,0.53l-0.27,1.15l0.01,0.17l0.4,1.08l-0.33,0.85l-0.01,0.18l0.12,0.51l-4.83,-0.03l-0.3,0.3l-0.12,8.13l0.07,0.19l1.69,2.1l1.27,1.25l-4.03,0.92l-5.93,-0.36l-1.66,-1.19l-0.18,-0.06l-10.15,0.11l-0.34,0.13l-1.35,-1.05l-0.17,-0.06l-1.62,-0.08l-1.6,0.45l-0.88,0.36l-0.17,-1.2l0.34,-2.19l0.85,-2.32l0.14,-1.13l0.79,-2.24l0.57,-1.0l1.42,-1.64l0.82,-1.15l0.05,-0.13l0.26,-1.88l-0.13,-1.51l-0.07,-0.16l-0.72,-0.87l-1.23,-2.91l0.09,-0.37l0.73,-0.95l0.05,-0.27l-1.27,-4.12l-1.19,-1.54l0.1,-0.2l0.86,-0.28l0.78,0.03l0.83,-0.29l7.12,0.03ZM451.81,298.94l-0.17,0.07l-0.5,-1.42l0.85,-0.92l0.53,-0.29l0.48,0.44l-0.56,0.32l-0.1,0.1l-0.41,0.65l-0.05,0.14l-0.07,0.91Z",
      "name": "Angola"
    },
    "KZ": {
      "path": "M598.42,172.08l-1.37,0.54l-3.3,2.09l-0.11,0.12l-1.01,1.97l-0.56,0.01l-0.6,-1.24l-0.26,-0.17l-2.95,-0.09l-0.46,-2.22l-0.29,-0.24l-0.91,-0.02l0.17,-2.72l-0.12,-0.26l-3.0,-2.22l-0.2,-0.06l-4.29,0.24l-2.8,0.42l-2.36,-2.7l-6.4,-3.65l-0.23,-0.03l-6.45,1.83l-0.22,0.29l0.1,10.94l-0.84,0.1l-1.65,-2.21l-0.11,-0.09l-1.69,-0.84l-0.2,-0.02l-2.84,0.63l-0.14,0.07l-0.71,0.64l-0.02,-0.11l0.57,-1.17l0.0,-0.26l-0.48,-1.05l-0.17,-0.16l-2.78,-0.99l-1.08,-2.62l-0.13,-0.15l-1.24,-0.7l-0.04,-0.48l2.07,0.25l0.34,-0.29l0.09,-2.03l1.84,-0.44l2.12,0.45l0.36,-0.25l0.45,-3.04l-0.45,-2.06l-0.31,-0.23l-2.44,0.15l-2.07,-0.75l-0.23,0.01l-2.88,1.38l-2.21,0.62l-0.96,-0.38l0.22,-1.39l-0.06,-0.23l-1.6,-2.12l-0.25,-0.12l-1.72,0.08l-1.87,-1.91l1.33,-2.24l-0.06,-0.38l-0.55,-0.5l1.72,-3.08l2.3,1.7l0.48,-0.2l0.29,-2.26l4.99,-3.48l3.76,-0.08l5.46,2.27l2.96,1.33l0.26,-0.01l2.59,-1.36l3.82,-0.06l3.13,1.67l0.38,-0.09l0.63,-0.85l3.36,0.14l0.29,-0.19l0.63,-1.57l-0.13,-0.37l-3.64,-2.05l2.0,-1.36l0.1,-0.38l-0.32,-0.62l2.09,-0.76l0.13,-0.47l-1.65,-2.13l0.89,-0.91l9.27,-1.18l0.13,-0.05l1.17,-0.82l6.2,-1.27l2.26,-1.43l4.19,0.7l0.74,3.39l0.38,0.22l2.52,-0.81l2.9,1.06l-0.18,1.63l0.32,0.33l2.52,-0.23l5.0,-2.58l0.03,0.39l3.16,2.62l5.57,8.48l0.49,0.02l1.18,-1.53l3.22,1.78l0.21,0.03l3.5,-0.83l1.21,0.52l1.16,1.82l0.15,0.12l1.67,0.61l1.01,1.32l0.28,0.11l3.04,-0.41l1.1,1.64l-1.68,1.89l-1.97,0.28l-0.26,0.29l-0.12,3.09l-1.2,1.23l-4.81,-1.01l-0.35,0.2l-1.77,5.51l-1.14,0.62l-4.92,1.23l-0.2,0.41l2.14,5.06l-1.45,0.67l-0.17,0.31l0.15,1.28l-1.05,-0.3l-1.21,-1.04l-0.17,-0.07l-3.73,-0.32l-4.15,-0.08l-0.92,0.31l-3.46,-1.24l-0.22,0.01l-1.42,0.63l-0.17,0.21l-0.32,1.49l-3.82,-0.97l-0.15,0.0l-1.65,0.43l-0.2,0.17l-0.51,1.21Z",
      "name": "Kazakhstan"
    },
    "ET": {
      "path": "M516.0,247.63l1.21,0.92l0.3,0.04l1.3,-0.53l0.46,0.41l0.19,0.08l1.65,0.03l2.05,0.96l0.67,0.88l1.07,0.79l1.0,1.45l0.7,0.68l-0.72,0.92l-0.85,1.19l-0.04,0.25l0.19,0.67l0.04,0.74l0.29,0.28l1.4,0.04l0.55,-0.15l0.23,0.19l-0.41,0.67l0.01,0.32l0.92,1.39l0.93,1.23l0.99,0.94l0.1,0.06l8.19,2.99l1.51,0.01l-6.51,6.95l-3.14,0.11l-0.18,0.06l-2.15,1.71l-1.51,0.04l-0.22,0.1l-0.6,0.69l-1.46,-0.0l-0.93,-0.78l-0.32,-0.04l-2.29,1.05l-0.12,0.1l-0.64,0.9l-1.44,-0.17l-0.51,-0.26l-0.17,-0.03l-0.56,0.07l-0.68,-0.02l-3.1,-2.08l-0.17,-0.05l-1.62,0.0l-0.68,-0.65l0.0,-1.28l-0.21,-0.29l-1.19,-0.38l-1.42,-2.63l-0.13,-0.12l-1.05,-0.53l-0.46,-1.0l-1.27,-1.23l-0.17,-0.08l-1.08,-0.13l0.53,-0.9l1.17,-0.05l0.26,-0.17l0.37,-0.77l0.03,-0.14l-0.03,-2.23l0.7,-2.49l1.08,-0.65l0.14,-0.19l0.24,-1.0l1.03,-1.85l1.47,-1.22l0.09,-0.12l1.02,-2.51l0.36,-1.96l2.62,0.48l0.33,-0.18l0.63,-1.55Z",
      "name": "Ethiopia"
    },
    "ZW": {
      "path": "M498.95,341.2l-1.16,-0.23l-0.16,0.01l-0.74,0.28l-1.11,-0.41l-1.02,-0.04l-1.52,-1.13l-0.12,-0.05l-1.79,-0.37l-0.65,-1.46l-0.01,-0.86l-0.22,-0.29l-0.99,-0.26l-2.74,-2.77l-0.77,-1.46l-0.52,-0.5l-0.72,-1.54l2.24,0.23l0.78,0.28l0.12,0.02l0.85,-0.06l0.21,-0.11l1.38,-1.66l2.11,-2.05l0.81,-0.18l0.22,-0.2l0.27,-0.8l1.29,-0.93l1.53,-0.28l0.11,0.66l0.3,0.25l2.02,-0.05l1.04,0.48l0.5,0.59l0.18,0.1l1.13,0.18l1.11,0.7l0.01,3.06l-0.49,1.82l-0.11,1.94l0.03,0.16l0.35,0.68l-0.24,1.3l-0.27,0.17l-0.12,0.15l-0.64,1.83l-2.49,2.8Z",
      "name": "Zimbabwe"
    },
    "ES": {
      "path": "M398.67,172.8l0.09,-1.45l-0.06,-0.2l-0.82,-1.05l3.16,-1.96l3.01,0.54l3.33,-0.02l2.64,0.52l2.14,-0.15l3.9,0.1l0.91,1.08l0.14,0.09l4.61,1.38l0.26,-0.04l0.77,-0.55l2.66,1.29l0.17,0.03l2.59,-0.35l0.1,1.28l-2.2,1.85l-3.13,0.62l-0.23,0.23l-0.21,0.92l-1.54,1.68l-0.97,2.4l0.02,0.26l0.85,1.46l-1.27,1.14l-0.09,0.14l-0.5,1.73l-1.73,0.53l-0.15,0.1l-1.68,2.1l-3.03,0.04l-2.38,-0.05l-0.17,0.05l-1.57,1.01l-0.9,1.01l-0.96,-0.19l-0.82,-0.86l-0.69,-1.6l-0.22,-0.18l-2.14,-0.41l-0.13,-0.62l0.83,-0.97l0.39,-0.86l-0.06,-0.33l-0.73,-0.73l0.63,-1.74l-0.02,-0.25l-0.8,-1.41l0.69,-0.15l0.23,-0.27l0.09,-1.29l0.33,-0.36l0.08,-0.2l0.03,-2.16l1.03,-0.72l0.1,-0.37l-0.7,-1.5l-0.25,-0.17l-1.46,-0.11l-0.22,0.07l-0.34,0.3l-1.17,0.0l-0.55,-1.29l-0.39,-0.16l-1.02,0.44l-0.45,0.36Z",
      "name": "Spain"
    },
    "ER": {
      "path": "M527.15,253.05l-0.77,-0.74l-1.01,-1.47l-1.14,-0.86l-0.62,-0.84l-0.11,-0.09l-2.18,-1.02l-0.12,-0.03l-1.61,-0.03l-0.52,-0.46l-0.31,-0.05l-1.31,0.54l-1.38,-1.06l-0.46,0.12l-0.69,1.68l-2.49,-0.46l-0.2,-0.76l1.06,-3.69l0.24,-1.65l0.66,-0.66l1.76,-0.4l0.16,-0.1l0.97,-1.13l1.24,2.55l0.68,2.34l0.09,0.14l1.4,1.27l3.39,2.4l1.37,1.43l2.14,2.34l0.94,0.6l-0.32,0.26l-0.85,-0.17Z",
      "name": "Eritrea"
    },
    "ME": {
      "path": "M469.05,172.9l-0.57,-0.8l-0.1,-0.09l-0.82,-0.46l0.16,-0.33l0.35,-1.57l0.72,-0.62l0.27,-0.16l0.48,0.38l0.35,0.4l0.12,0.08l0.79,0.32l0.66,0.43l-0.43,0.62l-0.28,0.11l-0.07,-0.25l-0.53,-0.1l-1.09,1.49l-0.05,0.23l0.06,0.32Z",
      "name": "Montenegro"
    },
    "MD": {
      "path": "M488.2,153.75l0.14,-0.11l1.49,-0.28l1.75,0.95l1.06,0.14l0.92,0.7l-0.15,0.9l0.15,0.31l0.8,0.46l0.33,1.2l0.09,0.14l0.72,0.66l-0.11,0.28l0.1,0.33l-0.06,0.02l-1.25,-0.08l-0.17,-0.29l-0.39,-0.12l-0.52,0.25l-0.16,0.36l0.13,0.42l-0.6,0.88l-0.43,1.03l-0.22,0.12l-0.32,-1.0l0.25,-1.34l-0.08,-1.38l-0.06,-0.17l-1.43,-1.87l-0.81,-1.36l-0.78,-0.95l-0.12,-0.09l-0.29,-0.12Z",
      "name": "Moldova"
    },
    "MG": {
      "path": "M544.77,316.45l0.64,1.04l0.6,1.62l0.4,3.04l0.63,1.21l-0.22,1.07l-0.15,0.26l-0.59,-1.05l-0.52,-0.01l-0.47,0.76l-0.04,0.23l0.46,1.84l-0.19,0.92l-0.61,0.53l-0.1,0.21l-0.16,2.15l-0.97,2.98l-1.24,3.59l-1.55,4.97l-0.96,3.67l-1.08,2.93l-1.94,0.61l-2.05,1.06l-3.2,-1.53l-0.62,-1.26l-0.18,-2.39l-0.87,-2.07l-0.22,-1.8l0.4,-1.69l1.01,-0.4l0.19,-0.28l0.01,-0.79l1.15,-1.91l0.04,-0.11l0.23,-1.66l-0.03,-0.17l-0.57,-1.21l-0.46,-1.58l-0.19,-2.25l0.82,-1.36l0.33,-1.51l1.11,-0.1l1.4,-0.53l0.9,-0.45l1.03,-0.03l0.21,-0.09l1.41,-1.45l2.12,-1.65l0.75,-1.29l0.03,-0.24l-0.17,-0.56l0.53,0.15l0.32,-0.1l1.38,-1.77l0.06,-0.18l0.04,-1.44l0.54,-0.74l0.62,0.77Z",
      "name": "Madagascar"
    },
    "MA": {
      "path": "M378.66,230.13l0.07,-0.75l0.93,-0.72l0.82,-1.37l0.04,-0.21l-0.14,-0.8l0.8,-1.74l1.33,-1.61l0.79,-0.4l0.14,-0.15l0.66,-1.55l0.08,-1.46l0.83,-1.52l1.6,-0.94l0.11,-0.11l1.56,-2.71l1.2,-0.99l2.24,-0.29l0.17,-0.08l1.95,-1.83l1.3,-0.77l2.09,-2.28l0.07,-0.26l-0.61,-3.34l0.92,-2.3l0.33,-1.44l1.52,-1.79l2.48,-1.27l1.86,-1.16l0.1,-0.11l1.67,-2.93l0.72,-1.59l1.54,0.01l1.43,1.14l0.21,0.06l2.33,-0.19l2.55,0.62l0.97,0.03l0.83,1.6l0.15,1.71l0.86,2.96l0.09,0.14l0.5,0.45l-0.31,0.73l-3.11,0.44l-0.16,0.07l-1.07,0.97l-1.36,0.23l-0.25,0.28l-0.1,1.85l-2.74,1.02l-0.14,0.11l-0.9,1.3l-1.93,0.69l-2.56,0.44l-4.04,2.01l-0.17,0.27l0.02,2.91l-0.08,0.0l-0.3,0.31l0.05,1.15l-1.25,0.07l-0.16,0.06l-0.73,0.55l-0.98,0.0l-0.85,-0.33l-0.15,-0.02l-2.11,0.29l-0.24,0.19l-0.76,1.95l-0.63,0.16l-0.21,0.19l-1.15,3.29l-3.42,2.81l-0.1,0.17l-0.81,3.57l-0.98,1.12l-0.3,0.85l-5.13,0.19Z",
      "name": "Morocco"
    },
    "UZ": {
      "path": "M587.83,186.48l0.06,-1.46l-0.19,-0.29l-3.31,-1.24l-2.57,-1.4l-1.63,-1.38l-2.79,-1.98l-1.2,-2.98l-0.12,-0.14l-0.84,-0.54l-0.18,-0.05l-2.61,0.13l-0.76,-0.48l-0.25,-2.25l-0.17,-0.24l-3.37,-1.6l-0.32,0.04l-2.08,1.73l-2.11,1.02l-0.16,0.35l0.31,1.14l-2.14,0.03l-0.09,-10.68l6.1,-1.74l6.25,3.57l2.36,2.72l0.27,0.1l2.92,-0.44l4.17,-0.23l2.78,2.06l-0.18,2.87l0.29,0.32l0.98,0.02l0.46,2.22l0.28,0.24l3.0,0.09l0.61,1.25l0.28,0.17l0.93,-0.02l0.26,-0.16l1.06,-2.06l3.21,-2.03l1.3,-0.5l0.19,0.08l-1.75,1.62l0.05,0.48l1.85,1.12l0.27,0.02l1.65,-0.69l2.4,1.27l-2.69,1.79l-1.79,-0.27l-0.89,0.06l-0.22,-0.52l0.48,-1.26l-0.34,-0.4l-3.35,0.69l-0.22,0.18l-0.78,1.87l-1.07,1.47l-1.93,-0.13l-0.29,0.16l-0.65,1.29l0.16,0.42l1.69,0.64l0.48,1.91l-1.25,2.6l-1.64,-0.53l-1.18,-0.03Z",
      "name": "Uzbekistan"
    },
    "MM": {
      "path": "M670.1,233.39l-1.46,1.11l-1.68,0.11l-0.26,0.19l-1.1,2.7l-0.95,0.42l-0.14,0.42l1.21,2.27l1.61,1.92l0.94,1.55l-0.82,1.99l-0.77,0.42l-0.13,0.39l0.64,1.35l1.62,1.97l0.26,1.32l-0.04,1.15l0.02,0.13l0.92,2.18l-1.3,2.23l-0.79,1.69l-0.1,-0.77l0.74,-1.87l-0.02,-0.26l-0.8,-1.42l0.2,-2.68l-0.06,-0.2l-0.98,-1.27l-0.8,-2.98l-0.45,-3.22l-1.11,-2.22l-0.45,-0.1l-1.64,1.28l-2.74,1.76l-1.26,-0.2l-1.27,-0.49l0.79,-2.93l0.0,-0.14l-0.52,-2.42l-1.93,-2.97l0.26,-0.8l-0.22,-0.39l-1.37,-0.31l-1.65,-1.98l-0.12,-1.5l0.41,0.19l0.42,-0.26l0.05,-1.7l1.08,-0.54l0.16,-0.34l-0.24,-1.0l0.5,-0.79l0.05,-0.15l0.08,-2.35l1.58,0.49l0.36,-0.15l1.12,-2.19l0.15,-1.34l1.35,-2.18l0.04,-0.17l-0.07,-1.35l2.97,-1.71l1.67,0.45l0.38,-0.33l-0.18,-1.46l0.7,-0.4l0.15,-0.32l-0.13,-0.72l0.94,-0.13l0.74,1.41l0.11,0.12l0.95,0.56l0.07,1.89l-0.09,2.08l-2.28,2.15l-0.09,0.19l-0.3,3.15l0.35,0.32l2.37,-0.39l0.53,2.17l0.2,0.21l1.3,0.42l-0.63,1.9l0.14,0.36l1.86,0.99l1.1,0.49l0.24,0.0l1.45,-0.6l0.04,0.51l-2.01,1.6l-0.56,0.96l-1.34,0.56Z",
      "name": "Myanmar"
    },
    "ML": {
      "path": "M390.79,248.2l0.67,-0.37l0.14,-0.18l0.36,-1.31l0.51,-0.04l1.68,0.69l0.21,0.0l1.34,-0.48l0.89,0.16l0.3,-0.13l0.29,-0.44l9.89,-0.04l0.29,-0.21l0.56,-1.8l-0.11,-0.33l-0.33,-0.24l-2.37,-22.1l3.41,-0.04l8.37,5.73l8.38,5.68l0.56,1.15l0.14,0.14l1.56,0.75l0.99,0.36l0.03,1.45l0.33,0.29l2.45,-0.22l0.01,5.52l-1.3,1.64l-0.06,0.15l-0.18,1.37l-1.99,0.36l-3.4,0.22l-0.19,0.09l-0.85,0.83l-1.48,0.09l-1.49,0.01l-0.54,-0.43l-0.26,-0.05l-1.38,0.36l-2.39,1.08l-0.13,0.12l-0.44,0.73l-1.88,1.11l-0.11,0.12l-0.3,0.57l-0.86,0.42l-1.1,-0.31l-0.28,0.07l-0.69,0.62l-0.09,0.16l-0.35,1.66l-1.93,2.04l-0.08,0.23l0.05,0.76l-0.63,0.99l-0.04,0.19l0.14,1.23l-0.81,0.29l-0.32,0.17l-0.27,-0.75l-0.39,-0.18l-0.65,0.26l-0.36,-0.04l-0.29,0.14l-0.37,0.6l-1.69,-0.02l-0.63,-0.34l-0.32,0.02l-0.12,0.09l-0.47,-0.45l0.1,-0.6l-0.09,-0.27l-0.31,-0.3l-0.33,-0.05l-0.05,0.02l0.02,-0.21l0.46,-0.59l-0.02,-0.39l-0.99,-1.02l-0.34,-0.74l-0.56,-0.56l-0.17,-0.09l-0.5,-0.07l-0.19,0.04l-0.58,0.35l-0.79,0.33l-0.65,0.51l-0.85,-0.16l-0.63,-0.59l-0.14,-0.07l-0.41,-0.08l-0.2,0.03l-0.59,0.31l-0.07,0.0l-0.1,-0.63l0.11,-0.85l-0.21,-0.98l-0.11,-0.17l-0.86,-0.66l-0.45,-1.34l-0.1,-1.36Z",
      "name": "Mali"
    },
    "MN": {
      "path": "M641.06,150.59l2.41,-0.53l4.76,-2.8l3.67,-1.49l2.06,0.96l0.12,0.03l2.5,0.05l1.59,1.45l0.19,0.08l2.47,0.12l3.59,0.81l0.27,-0.07l2.43,-2.28l0.06,-0.36l-0.93,-1.77l2.33,-3.1l2.66,1.3l2.26,0.39l2.75,0.8l0.44,2.3l0.19,0.22l3.56,1.38l0.18,0.01l2.35,-0.6l3.1,-0.42l2.4,0.41l2.37,1.52l1.49,1.63l0.23,0.1l2.29,-0.03l3.13,0.52l0.15,-0.01l2.28,-0.79l3.27,-0.53l0.11,-0.04l3.56,-2.23l1.31,0.31l1.26,1.05l0.22,0.07l2.45,-0.22l-0.98,1.96l-1.77,3.21l-0.01,0.28l0.64,1.31l0.35,0.16l1.35,-0.38l2.4,0.48l0.22,-0.04l1.78,-1.09l1.82,0.92l2.11,2.07l-0.17,0.68l-1.79,-0.31l-3.74,0.45l-1.85,0.96l-1.78,2.01l-3.74,1.18l-2.46,1.61l-2.45,-0.6l-1.42,-0.28l-0.31,0.13l-1.31,1.99l0.0,0.33l0.78,1.15l0.3,0.74l-1.58,0.93l-1.75,1.59l-2.83,1.03l-3.77,0.12l-4.05,1.05l-2.81,1.54l-0.95,-0.8l-0.19,-0.07l-2.96,0.0l-3.64,-1.8l-2.55,-0.48l-3.38,0.41l-5.13,-0.67l-2.66,0.06l-1.35,-1.65l-1.12,-2.78l-0.21,-0.18l-1.5,-0.33l-2.98,-1.89l-0.12,-0.04l-3.37,-0.43l-2.84,-0.51l-0.75,-1.13l0.93,-3.54l-0.04,-0.24l-1.73,-2.55l-0.15,-0.12l-3.52,-1.18l-1.99,-1.61l-0.54,-1.85Z",
      "name": "Mongolia"
    },
    "MK": {
      "path": "M472.73,173.87l0.08,0.01l0.32,-0.25l0.08,-0.44l1.29,-0.41l1.37,-0.28l1.03,-0.04l1.06,0.82l0.14,1.59l-0.22,0.04l-0.17,0.11l-0.32,0.4l-1.2,-0.05l-0.18,0.05l-0.9,0.61l-1.45,0.23l-0.85,-0.59l-0.3,-1.09l0.22,-0.71Z",
      "name": "Macedonia"
    },
    "MW": {
      "path": "M507.18,313.84l-0.67,1.85l-0.01,0.16l0.7,3.31l0.31,0.24l0.75,-0.03l0.78,0.71l0.99,1.75l0.2,3.03l-0.91,0.45l-0.14,0.15l-0.59,1.38l-1.24,-1.21l-0.17,-1.62l0.49,-1.12l0.02,-0.16l-0.15,-1.03l-0.13,-0.21l-0.99,-0.65l-0.26,-0.03l-0.53,0.18l-1.31,-1.12l-1.15,-0.59l0.66,-2.06l0.75,-0.84l0.07,-0.27l-0.47,-2.04l0.48,-1.94l0.4,-0.65l0.03,-0.24l-0.64,-2.15l-0.08,-0.13l-0.44,-0.42l1.34,0.26l1.25,1.73l0.67,3.3Z",
      "name": "Malawi"
    },
    "MR": {
      "path": "M390.54,247.66l-1.48,-1.58l-1.51,-1.88l-0.12,-0.09l-1.64,-0.67l-1.17,-0.74l-0.17,-0.05l-1.4,0.03l-0.12,0.03l-1.14,0.52l-1.15,-0.21l-0.26,0.08l-0.44,0.43l-0.11,-0.72l0.68,-1.29l0.31,-2.43l-0.28,-2.63l-0.29,-1.27l0.24,-1.24l-0.03,-0.2l-0.65,-1.24l-1.19,-1.05l0.32,-0.51l9.64,0.02l0.3,-0.34l-0.46,-3.71l0.51,-1.12l2.17,-0.22l0.27,-0.3l-0.08,-6.5l7.91,0.13l0.31,-0.3l0.01,-3.5l8.17,5.63l-2.89,0.04l-0.29,0.33l2.42,22.56l0.12,0.21l0.26,0.19l-0.43,1.38l-9.83,0.04l-0.25,0.13l-0.27,0.41l-0.77,-0.14l-0.15,0.01l-1.3,0.47l-1.64,-0.67l-0.14,-0.02l-0.79,0.06l-0.27,0.22l-0.39,1.39l-0.53,0.29Z",
      "name": "Mauritania"
    },
    "UG": {
      "path": "M500.74,287.17l-2.84,-0.02l-0.92,0.32l-1.37,0.71l-0.29,-0.12l0.02,-1.6l0.54,-0.89l0.04,-0.13l0.14,-1.96l0.49,-1.09l0.91,-1.24l0.97,-0.68l0.8,-0.89l-0.13,-0.49l-0.79,-0.27l0.13,-2.55l0.78,-0.52l1.45,0.51l0.18,0.01l1.97,-0.57l1.72,0.01l0.18,-0.06l1.29,-0.97l0.98,1.44l0.29,1.24l1.05,2.75l-0.84,1.68l-1.94,2.66l-0.06,0.18l0.02,2.36l-4.8,0.18Z",
      "name": "Uganda"
    },
    "MY": {
      "path": "M717.6,273.52l-1.51,0.7l-2.13,-0.41l-2.88,-0.0l-0.29,0.21l-0.84,2.77l-0.9,0.82l-0.08,0.12l-1.23,3.34l-1.81,0.47l-2.29,-0.68l-0.14,-0.01l-1.2,0.22l-0.14,0.07l-1.36,1.18l-1.47,-0.17l-0.12,0.01l-1.46,0.46l-1.51,-1.25l-0.24,-0.97l1.26,0.59l0.2,0.02l1.93,-0.47l0.22,-0.22l0.47,-1.98l0.9,-0.4l2.97,-0.54l0.17,-0.09l1.8,-1.98l1.02,-1.32l0.9,1.03l0.48,-0.04l0.43,-0.7l1.02,0.07l0.32,-0.27l0.25,-2.72l1.84,-1.67l1.23,-1.89l0.73,-0.01l1.12,1.11l0.1,0.99l0.18,0.24l1.66,0.71l1.85,0.67l-0.09,0.51l-1.45,0.11l-0.26,0.4l0.35,0.97ZM673.78,269.53l0.17,1.14l0.35,0.25l1.65,-0.3l0.18,-0.11l0.68,-0.86l0.31,0.13l1.41,1.45l0.99,1.59l0.13,1.57l-0.26,1.09l0.0,0.15l0.24,0.84l0.18,1.46l0.11,0.2l0.82,0.64l0.92,2.08l-0.03,0.52l-1.4,0.13l-2.29,-1.79l-2.86,-1.92l-0.27,-1.16l-0.07,-0.13l-1.39,-1.61l-0.33,-1.99l-0.05,-0.12l-0.84,-1.27l0.26,-1.72l-0.03,-0.18l-0.45,-0.87l0.13,-0.13l1.71,0.92Z",
      "name": "Malaysia"
    },
    "MX": {
      "path": "M133.41,213.83l0.61,0.09l0.27,-0.09l0.93,-1.01l0.08,-0.18l0.09,-1.22l-0.09,-0.23l-1.93,-1.94l-1.46,-0.77l-2.96,-5.62l-0.86,-2.1l2.44,-0.18l2.68,-0.25l-0.03,0.08l0.17,0.4l3.79,1.35l5.81,1.97l6.96,-0.02l0.3,-0.3l0.0,-0.84l3.91,0.0l0.87,0.93l1.27,0.87l1.44,1.17l0.79,1.37l0.62,1.49l0.12,0.14l1.35,0.85l2.08,0.82l0.35,-0.1l1.49,-2.04l1.81,-0.05l1.63,1.01l1.21,1.8l0.86,1.58l1.47,1.55l0.53,1.82l0.73,1.32l0.14,0.13l1.98,0.84l1.78,0.59l0.61,-0.03l-0.78,1.89l-0.45,1.96l-0.19,3.58l-0.24,1.27l0.01,0.14l0.43,1.43l0.78,1.31l0.49,1.98l0.06,0.12l1.63,1.9l0.61,1.51l0.98,1.28l0.16,0.11l2.58,0.67l0.98,1.02l0.31,0.08l2.17,-0.71l1.91,-0.26l1.87,-0.47l1.67,-0.49l1.59,-1.06l0.11,-0.14l0.6,-1.52l0.22,-2.21l0.35,-0.62l1.58,-0.64l2.59,-0.59l2.18,0.09l1.43,-0.2l0.39,0.36l-0.07,1.02l-1.28,1.48l-0.65,1.68l0.07,0.32l0.33,0.32l-0.79,2.49l-0.28,-0.3l-0.24,-0.09l-1.0,0.08l-0.24,0.15l-0.74,1.28l-0.19,-0.13l-0.28,-0.03l-0.3,0.12l-0.19,0.29l0.0,0.06l-4.34,-0.02l-0.3,0.3l-0.0,1.16l-0.83,0.0l-0.28,0.19l0.08,0.33l0.93,0.86l0.9,0.58l0.24,0.48l0.16,0.15l0.2,0.08l-0.03,0.38l-2.94,0.01l-0.26,0.15l-1.21,2.09l0.02,0.33l0.25,0.33l-0.21,0.44l-0.04,0.22l-2.42,-2.35l-1.36,-0.87l-2.04,-0.67l-0.13,-0.01l-1.4,0.19l-2.07,0.98l-1.14,0.23l-1.72,-0.66l-1.85,-0.48l-2.31,-1.16l-1.92,-0.38l-2.79,-1.18l-2.04,-1.2l-0.6,-0.66l-0.19,-0.1l-1.37,-0.15l-2.45,-0.78l-1.07,-1.18l-2.63,-1.44l-1.2,-1.56l-0.44,-0.93l0.5,-0.15l0.2,-0.39l-0.2,-0.58l0.46,-0.55l0.07,-0.19l0.01,-0.91l-0.06,-0.18l-0.81,-1.13l-0.25,-1.08l-0.86,-1.36l-2.21,-2.63l-2.53,-2.09l-1.2,-1.63l-0.11,-0.09l-2.08,-1.06l-0.34,-0.48l0.35,-1.53l-0.16,-0.34l-1.24,-0.61l-1.39,-1.23l-0.6,-1.81l-0.24,-0.2l-1.25,-0.2l-1.38,-1.35l-1.11,-1.25l-0.1,-0.76l-0.05,-0.13l-1.33,-2.04l-0.85,-2.02l0.04,-0.99l-0.14,-0.27l-1.81,-1.1l-0.2,-0.04l-0.74,0.11l-1.34,-0.72l-0.42,0.16l-0.4,1.12l-0.0,0.19l0.41,1.3l0.24,2.04l0.06,0.15l0.88,1.16l1.84,1.86l0.4,0.61l0.12,0.1l0.27,0.14l0.29,0.82l0.31,0.2l0.2,-0.02l0.43,1.51l0.09,0.14l0.72,0.65l0.51,0.91l1.58,1.4l0.8,2.42l0.77,1.23l0.66,1.19l0.13,1.34l0.28,0.27l1.08,0.08l0.92,1.1l0.83,1.08l-0.03,0.24l-0.88,0.81l-0.13,-0.0l-0.59,-1.42l-0.07,-0.11l-1.67,-1.53l-1.81,-1.28l-1.15,-0.61l0.07,-1.85l-0.38,-1.45l-0.12,-0.17l-2.91,-2.03l-0.39,0.04l-0.11,0.11l-0.42,-0.46l-0.11,-0.08l-1.49,-0.63l-1.09,-1.16Z",
      "name": "Mexico"
    },
    "VU": {
      "path": "M839.92,325.66l0.78,0.73l-0.18,0.07l-0.6,-0.8ZM839.13,322.74l0.27,1.36l-0.13,-0.06l-0.21,-0.02l-0.29,0.08l-0.22,-0.43l-0.03,-1.32l0.61,0.4Z",
      "name": "Vanuatu"
    },
    "FR": {
      "path": "M444.58,172.63l-0.68,1.92l-0.72,-0.38l-0.51,-1.79l0.43,-0.95l1.15,-0.83l0.33,2.04ZM429.71,147.03l1.77,1.57l0.26,0.07l1.16,-0.23l2.12,1.44l0.56,0.28l0.16,0.03l0.61,-0.06l1.09,0.78l0.13,0.05l3.18,0.53l-1.09,1.94l-0.3,2.16l-0.48,0.38l-1.0,-0.26l-0.37,0.32l0.07,0.66l-1.73,1.68l-0.09,0.21l-0.04,1.42l0.41,0.29l0.96,-0.4l0.67,1.07l-0.09,0.78l0.04,0.19l0.61,0.97l-0.71,0.78l-0.07,0.28l0.65,2.39l0.21,0.21l1.09,0.31l-0.2,0.95l-2.08,1.58l-4.81,-0.8l-0.13,0.01l-3.65,0.99l-0.22,0.24l-0.25,1.6l-2.59,0.35l-2.74,-1.33l-0.31,0.03l-0.79,0.57l-4.38,-1.31l-0.79,-0.94l1.16,-1.64l0.05,-0.15l0.48,-6.17l-0.06,-0.21l-2.58,-3.3l-1.89,-1.65l-0.11,-0.06l-3.64,-1.17l-0.2,-1.88l2.92,-0.63l4.14,0.82l0.35,-0.36l-0.65,-3.0l1.77,1.05l0.27,0.02l5.83,-2.54l0.17,-0.19l0.71,-2.54l1.75,-0.53l0.27,0.88l0.27,0.21l1.04,0.05l1.08,1.23ZM289.1,278.45l-0.85,0.84l-0.88,0.13l-0.25,-0.51l-0.21,-0.16l-0.56,-0.1l-0.25,0.07l-0.63,0.55l-0.62,-0.29l0.5,-0.88l0.21,-1.11l0.42,-1.05l-0.03,-0.28l-0.93,-1.42l-0.18,-1.54l1.13,-1.87l2.42,0.78l2.55,2.04l0.33,0.81l-1.4,2.16l-0.77,1.84Z",
      "name": "France"
    },
    "FI": {
      "path": "M492.26,76.42l-0.38,3.12l0.12,0.28l3.6,2.69l-2.14,2.96l-0.01,0.33l2.83,4.61l-1.61,3.36l0.03,0.31l2.15,2.87l-0.96,2.44l0.1,0.35l3.51,2.55l-0.81,1.72l-2.28,2.19l-5.28,4.79l-4.51,0.31l-4.39,1.37l-3.87,0.75l-1.34,-1.89l-0.11,-0.09l-2.23,-1.14l0.53,-3.54l-0.01,-0.14l-1.17,-3.37l1.12,-2.13l2.23,-2.44l5.69,-4.33l1.65,-0.84l0.16,-0.31l-0.26,-1.73l-0.15,-0.22l-3.4,-1.91l-0.77,-1.47l-0.07,-6.45l-0.12,-0.24l-3.91,-2.94l-3.0,-1.92l0.97,-0.76l2.6,2.17l0.21,0.07l3.2,-0.21l2.63,1.03l0.3,-0.05l2.39,-1.94l0.09,-0.13l1.18,-3.12l3.63,-1.42l2.87,1.59l-0.98,2.87Z",
      "name": "Finland"
    },
    "FJ": {
      "path": "M869.98,327.07l-1.31,0.44l-0.14,-0.41l0.96,-0.41l0.85,-0.17l1.43,-0.78l-0.16,0.65l-1.64,0.67ZM867.58,329.12l0.54,0.47l-0.31,1.0l-1.32,0.3l-1.13,-0.26l-0.17,-0.78l0.72,-0.66l0.98,0.27l0.25,-0.04l0.43,-0.29Z",
      "name": "Fiji"
    },
    "FK": {
      "path": "M268.15,427.89l2.6,-1.73l1.98,0.77l0.31,-0.05l1.32,-1.17l1.58,1.18l-0.54,0.84l-3.1,0.92l-1.0,-1.04l-0.39,-0.04l-1.9,1.35l-0.86,-1.04Z",
      "name": "Falkland Islands"
    },
    "NI": {
      "path": "M202.1,252.6l0.23,-0.0l0.12,-0.11l0.68,-0.09l0.22,-0.15l0.23,-0.43l0.2,-0.01l0.28,-0.31l-0.04,-0.97l0.29,-0.03l0.5,0.02l0.25,-0.11l0.37,-0.46l0.51,0.35l0.4,-0.06l0.23,-0.28l0.45,-0.29l0.87,-0.7l0.11,-0.21l0.02,-0.26l0.23,-0.12l0.25,-0.48l0.29,0.27l0.14,0.07l0.5,0.12l0.22,-0.03l0.48,-0.28l0.66,-0.02l0.87,-0.33l0.36,-0.32l0.21,0.01l-0.11,0.48l0.0,0.14l0.22,0.8l-0.54,0.85l-0.27,1.03l-0.09,1.18l0.14,0.72l0.05,0.95l-0.24,0.15l-0.13,0.19l-0.23,1.09l0.0,0.14l0.14,0.53l-0.42,0.53l-0.06,0.24l0.12,0.69l0.08,0.15l0.18,0.19l-0.26,0.23l-0.49,-0.11l-0.35,-0.44l-0.16,-0.1l-0.79,-0.21l-0.23,0.03l-0.45,0.26l-1.51,-0.62l-0.31,0.05l-0.17,0.15l-1.81,-1.62l-0.6,-0.9l-1.04,-0.79l-0.77,-0.71Z",
      "name": "Nicaragua"
    },
    "NL": {
      "path": "M436.22,136.65l1.82,0.08l0.36,0.89l-0.6,2.96l-0.53,1.06l-1.32,0.0l-0.3,0.34l0.35,2.89l-0.83,-0.47l-1.56,-1.43l-0.29,-0.07l-2.26,0.67l-1.02,-0.15l0.68,-0.48l0.1,-0.12l2.14,-4.84l3.25,-1.35Z",
      "name": "Netherlands"
    },
    "NO": {
      "path": "M491.45,67.31l7.06,3.0l-2.52,0.94l-0.11,0.49l2.43,2.49l-3.82,1.59l-1.48,0.3l0.89,-2.61l-0.14,-0.36l-3.21,-1.78l-0.25,-0.02l-3.89,1.52l-0.17,0.17l-1.2,3.17l-2.19,1.78l-2.53,-0.99l-0.13,-0.02l-3.15,0.21l-2.69,-2.25l-0.38,-0.01l-1.43,1.11l-1.47,0.17l-0.26,0.26l-0.33,2.57l-4.42,-0.65l-0.33,0.22l-0.6,2.19l-2.17,-0.01l-0.27,0.16l-4.15,7.68l-3.88,5.76l-0.0,0.33l0.81,1.23l-0.7,1.27l-2.3,-0.06l-0.28,0.18l-1.63,3.72l-0.02,0.13l0.15,5.17l0.07,0.18l1.51,1.84l-0.79,4.24l-2.04,2.5l-0.92,1.75l-1.39,-1.88l-0.44,-0.05l-4.89,4.21l-3.16,0.81l-3.24,-1.74l-0.86,-3.82l-0.78,-8.6l2.18,-2.36l6.56,-3.28l5.0,-4.16l4.63,-5.74l5.99,-8.09l4.17,-3.23l6.84,-5.49l5.39,-1.92l4.06,0.24l0.23,-0.09l3.72,-3.67l4.51,0.19l4.4,-0.89ZM484.58,19.95l4.42,1.82l-3.25,2.68l-7.14,0.65l-7.16,-0.91l-0.39,-1.37l-0.28,-0.22l-3.48,-0.1l-2.25,-2.15l7.09,-1.48l3.55,1.36l0.28,-0.03l2.42,-1.66l6.18,1.41ZM481.99,33.92l-4.73,1.85l-3.76,-1.06l1.27,-1.02l0.04,-0.43l-1.18,-1.35l4.46,-0.94l0.89,1.83l0.17,0.15l2.83,0.96ZM466.5,23.95l7.64,3.87l-5.63,1.94l-0.19,0.19l-1.35,3.88l-2.08,0.96l-0.16,0.19l-1.14,4.18l-2.71,0.18l-4.94,-2.95l1.95,-1.63l-0.08,-0.51l-3.7,-1.54l-4.79,-4.54l-1.78,-4.01l6.29,-1.88l1.25,1.81l0.25,0.13l3.57,-0.08l0.26,-0.17l0.87,-1.79l3.41,-0.18l3.08,1.94Z",
      "name": "Norway"
    },
    "NA": {
      "path": "M461.88,357.98l-1.61,-1.77l-0.94,-1.9l-0.54,-2.58l-0.62,-1.95l-0.83,-4.05l-0.06,-3.13l-0.33,-1.5l-0.07,-0.14l-0.95,-1.06l-1.27,-2.12l-1.3,-3.1l-0.59,-1.71l-1.98,-2.46l-0.13,-1.67l0.99,-0.4l1.44,-0.42l1.48,0.07l1.42,1.11l0.31,0.03l0.32,-0.15l9.99,-0.11l1.66,1.18l0.16,0.06l6.06,0.37l4.69,-1.06l2.01,-0.57l1.5,0.14l0.63,0.37l-1.0,0.41l-0.7,0.01l-0.16,0.05l-1.38,0.88l-0.79,-0.88l-0.29,-0.09l-3.83,0.9l-1.84,0.08l-0.29,0.3l-0.07,8.99l-2.18,0.08l-0.29,0.3l-0.0,17.47l-2.04,1.27l-1.21,0.18l-1.51,-0.49l-0.99,-0.18l-0.36,-1.0l-0.1,-0.14l-0.99,-0.74l-0.4,0.04l-0.98,1.09Z",
      "name": "Namibia"
    },
    "NC": {
      "path": "M835.87,338.68l2.06,1.63l1.01,0.94l-0.49,0.32l-1.21,-0.62l-1.76,-1.16l-1.58,-1.36l-1.61,-1.79l-0.16,-0.41l0.54,0.02l1.32,0.83l1.08,0.87l0.79,0.73Z",
      "name": "New Caledonia"
    },
    "NE": {
      "path": "M426.67,254.17l0.03,-1.04l-0.24,-0.3l-2.66,-0.53l-0.06,-1.0l-0.07,-0.17l-1.37,-1.62l-0.3,-1.04l0.15,-0.94l1.37,-0.09l0.19,-0.09l0.85,-0.83l3.34,-0.22l2.22,-0.41l0.24,-0.26l0.2,-1.5l1.32,-1.65l0.07,-0.19l-0.01,-5.74l3.4,-1.13l7.24,-5.12l8.46,-4.95l3.76,1.08l1.35,1.39l0.36,0.05l1.39,-0.77l0.55,3.66l0.12,0.2l0.82,0.6l0.03,0.69l0.1,0.21l0.87,0.74l-0.47,0.99l-0.96,5.26l-0.13,3.25l-3.08,2.34l-0.1,0.15l-1.08,3.37l0.08,0.31l0.94,0.86l-0.01,1.51l0.29,0.3l1.25,0.05l-0.14,0.66l-0.51,0.11l-0.24,0.26l-0.06,0.57l-0.04,0.0l-1.59,-2.62l-0.21,-0.14l-0.59,-0.1l-0.23,0.05l-1.83,1.33l-1.79,-0.68l-1.42,-0.17l-0.17,0.03l-0.65,0.32l-1.39,-0.07l-0.19,0.06l-1.4,1.03l-1.12,0.05l-2.97,-1.29l-0.26,0.01l-1.12,0.59l-1.08,-0.04l-0.85,-0.88l-0.11,-0.07l-2.51,-0.95l-0.14,-0.02l-2.69,0.3l-0.16,0.07l-0.65,0.55l-0.1,0.16l-0.34,1.41l-0.69,0.98l-0.05,0.15l-0.13,1.72l-1.47,-1.13l-0.18,-0.06l-0.9,0.01l-0.2,0.08l-0.32,0.28Z",
      "name": "Niger"
    },
    "NG": {
      "path": "M442.0,272.7l-2.4,0.83l-0.88,-0.12l-0.19,0.04l-0.89,0.52l-1.78,-0.05l-1.23,-1.44l-0.88,-1.87l-1.77,-1.66l-0.21,-0.08l-3.78,0.03l0.13,-3.75l-0.06,-1.58l0.44,-1.47l0.74,-0.75l1.21,-1.56l0.04,-0.29l-0.22,-0.56l0.44,-0.9l0.01,-0.24l-0.54,-1.44l0.26,-2.97l0.72,-1.06l0.33,-1.37l0.51,-0.43l2.53,-0.28l2.38,0.9l0.89,0.91l0.2,0.09l1.28,0.04l0.15,-0.03l1.06,-0.56l2.9,1.26l0.13,0.02l1.28,-0.06l0.16,-0.06l1.39,-1.02l1.36,0.07l0.15,-0.03l0.64,-0.32l1.22,0.13l1.9,0.73l0.28,-0.04l1.86,-1.35l0.33,0.06l1.62,2.67l0.29,0.14l0.32,-0.04l0.73,0.74l-0.19,0.37l-0.12,0.74l-2.03,1.89l-0.07,0.11l-0.66,1.62l-0.35,1.28l-0.48,0.51l-0.07,0.12l-0.48,1.67l-1.26,0.98l-0.1,0.15l-0.38,1.24l-0.58,1.07l-0.2,0.91l-1.43,0.7l-1.26,-0.93l-0.19,-0.06l-0.95,0.04l-0.2,0.09l-1.41,1.39l-0.61,0.02l-0.26,0.17l-1.19,2.42l-0.61,1.67Z",
      "name": "Nigeria"
    },
    "NZ": {
      "path": "M857.9,379.62l1.85,3.1l0.33,0.14l0.22,-0.28l0.04,-1.41l0.57,0.4l0.35,2.06l0.17,0.22l2.02,0.94l1.78,0.26l0.22,-0.06l1.31,-1.01l0.84,0.22l-0.53,2.27l-0.67,1.5l-1.71,-0.05l-0.25,0.12l-0.67,0.89l-0.05,0.23l0.21,1.15l-0.31,0.46l-2.15,3.57l-1.6,0.99l-0.28,-0.51l-0.15,-0.13l-0.72,-0.3l1.27,-2.15l0.01,-0.29l-0.82,-1.63l-0.15,-0.14l-2.5,-1.09l0.05,-0.69l1.67,-0.94l0.15,-0.21l0.42,-2.24l-0.11,-1.95l-0.03,-0.12l-0.97,-1.85l0.05,-0.41l-0.09,-0.25l-1.18,-1.17l-1.94,-2.49l-0.86,-1.64l0.38,-0.09l1.24,1.43l0.12,0.08l1.81,0.68l0.67,2.39ZM853.93,393.55l0.57,1.24l0.44,0.12l1.51,-1.03l0.52,0.91l0.0,1.09l-0.88,1.31l-1.62,2.2l-1.26,1.2l-0.05,0.38l0.64,1.02l-1.4,0.03l-0.14,0.04l-2.14,1.16l-0.14,0.17l-0.67,2.0l-1.38,3.06l-3.07,2.19l-2.12,-0.06l-1.55,-0.99l-0.14,-0.05l-2.53,-0.2l-0.31,-0.84l1.25,-2.15l3.07,-2.97l1.62,-0.59l1.81,-1.17l2.18,-1.63l1.55,-1.65l1.08,-2.18l0.9,-0.72l0.11,-0.17l0.35,-1.56l1.37,-1.07l0.4,0.91Z",
      "name": "New Zealand"
    },
    "NP": {
      "path": "M641.26,213.53l-0.14,0.95l0.32,1.64l-0.21,0.78l-1.83,0.04l-2.98,-0.62l-1.86,-0.25l-1.37,-1.3l-0.18,-0.08l-3.38,-0.34l-3.21,-1.49l-2.38,-1.34l-2.16,-0.92l0.84,-2.2l1.51,-1.18l0.89,-0.57l1.83,0.77l2.5,1.76l1.39,0.41l0.78,1.21l0.17,0.13l1.91,0.53l2.0,1.17l2.92,0.66l2.63,0.24Z",
      "name": "Nepal"
    },
    "CI": {
      "path": "M413.53,272.08l-0.83,0.02l-1.79,-0.49l-1.64,0.03l-3.04,0.46l-1.73,0.72l-2.4,0.89l-0.12,-0.02l0.16,-1.7l0.19,-0.25l0.06,-0.2l-0.08,-0.99l-0.09,-0.19l-1.06,-1.05l-0.15,-0.08l-0.71,-0.15l-0.51,-0.48l0.45,-0.92l0.02,-0.19l-0.24,-1.16l0.07,-0.43l0.14,-0.0l0.3,-0.26l0.15,-1.1l-0.02,-0.15l-0.13,-0.34l0.09,-0.13l0.83,-0.27l0.19,-0.37l-0.62,-2.02l-0.55,-1.0l0.14,-0.59l0.35,-0.14l0.24,-0.16l0.53,0.29l0.14,0.04l1.93,0.02l0.26,-0.14l0.36,-0.58l0.39,0.01l0.43,-0.17l0.28,0.79l0.43,0.16l0.56,-0.31l0.89,-0.32l0.92,0.45l0.39,0.75l0.14,0.13l1.13,0.53l0.3,-0.03l0.81,-0.59l1.02,-0.08l1.49,0.57l0.62,3.33l-1.03,2.09l-0.65,2.84l0.02,0.2l1.05,2.08l-0.07,0.64Z",
      "name": "Ivory Coast"
    },
    "CH": {
      "path": "M444.71,156.27l0.05,0.3l-0.34,0.69l0.13,0.4l1.13,0.58l1.07,0.1l-0.12,0.81l-0.87,0.42l-1.75,-0.37l-0.34,0.18l-0.47,1.1l-0.86,0.07l-0.33,-0.38l-0.41,-0.04l-1.34,1.01l-1.02,0.13l-0.93,-0.58l-0.82,-1.32l-0.37,-0.12l-0.77,0.32l0.02,-0.84l1.74,-1.69l0.09,-0.25l-0.04,-0.38l0.73,0.19l0.26,-0.06l0.6,-0.48l2.02,0.02l0.24,-0.12l0.38,-0.51l2.31,0.84Z",
      "name": "Switzerland"
    },
    "CO": {
      "path": "M232.24,284.95l-0.94,-0.52l-1.22,-0.82l-0.31,-0.01l-0.62,0.35l-1.88,-0.31l-0.54,-0.95l-0.29,-0.15l-0.37,0.03l-2.34,-1.33l-0.15,-0.35l0.57,-0.11l0.24,-0.32l-0.1,-1.15l0.46,-0.71l1.11,-0.15l0.21,-0.13l1.05,-1.57l0.95,-1.31l-0.08,-0.43l-0.73,-0.47l0.4,-1.24l0.01,-0.16l-0.53,-2.15l0.44,-0.54l0.06,-0.24l-0.4,-2.13l-0.06,-0.13l-0.93,-1.22l0.21,-0.8l0.52,0.12l0.32,-0.13l0.47,-0.75l0.03,-0.27l-0.52,-1.32l0.09,-0.11l1.14,0.07l0.22,-0.08l1.82,-1.71l0.96,-0.25l0.22,-0.28l0.02,-0.81l0.43,-2.01l1.28,-1.04l1.48,-0.05l0.27,-0.19l0.12,-0.31l1.73,0.19l0.2,-0.05l1.96,-1.28l0.97,-0.56l1.16,-1.16l0.64,0.11l0.43,0.44l-0.31,0.55l-1.49,0.39l-0.19,0.16l-0.6,1.2l-0.97,0.74l-0.73,0.94l-0.06,0.13l-0.3,1.76l-0.68,1.44l0.23,0.43l1.1,0.14l0.27,0.97l0.08,0.13l0.49,0.49l0.17,0.85l-0.27,0.86l-0.01,0.14l0.09,0.53l0.2,0.23l0.52,0.18l0.54,0.79l0.27,0.13l3.18,-0.24l1.31,0.29l1.7,2.08l0.31,0.1l0.96,-0.26l1.75,0.13l1.41,-0.27l0.56,0.27l-0.36,1.07l-0.54,0.81l-0.05,0.13l-0.2,1.8l0.51,1.79l0.07,0.12l0.65,0.68l0.05,0.32l-1.16,1.14l0.05,0.47l0.86,0.52l0.6,0.79l0.31,1.01l-0.7,-0.81l-0.44,-0.01l-0.74,0.77l-4.75,-0.05l-0.3,0.31l0.03,1.57l0.25,0.29l1.2,0.21l-0.02,0.24l-0.1,-0.05l-0.22,-0.02l-1.41,0.41l-0.22,0.29l-0.01,1.82l0.11,0.23l1.04,0.85l0.35,1.3l-0.06,1.02l-1.02,6.26l-0.84,-0.89l-0.19,-0.09l-0.25,-0.02l1.35,-2.13l-0.1,-0.42l-1.92,-1.17l-0.2,-0.04l-1.41,0.2l-0.82,-0.39l-0.26,0.0l-1.29,0.62l-1.63,-0.27l-1.4,-2.5l-0.12,-0.12l-1.1,-0.61l-0.83,-1.2l-1.67,-1.19l-0.27,-0.04l-0.54,0.19Z",
      "name": "Colombia"
    },
    "CN": {
      "path": "M740.32,148.94l0.22,0.21l4.3,1.03l2.84,2.2l0.99,2.92l0.28,0.2l3.8,0.0l0.15,-0.04l2.13,-1.24l3.5,-0.8l-1.05,2.29l-0.95,1.13l-0.06,0.12l-0.85,3.41l-1.56,2.81l-2.83,-0.51l-0.19,0.03l-2.15,1.09l-0.15,0.34l0.65,2.59l-0.33,3.3l-1.03,0.07l-0.28,0.3l0.01,0.75l-1.09,-1.2l-0.48,0.05l-0.94,1.6l-3.76,1.26l-0.2,0.36l0.29,1.19l-1.67,-0.08l-1.11,-0.88l-0.42,0.05l-1.69,2.08l-2.71,1.57l-2.04,1.88l-3.42,0.84l-0.11,0.05l-1.8,1.34l-1.54,0.46l0.52,-0.53l0.06,-0.33l-0.44,-0.96l1.84,-1.84l0.02,-0.41l-1.32,-1.56l-0.36,-0.08l-2.23,1.08l-2.83,2.06l-1.52,1.85l-2.32,0.13l-0.2,0.09l-1.28,1.37l-0.03,0.37l1.32,1.97l0.18,0.13l1.83,0.43l0.07,1.08l0.18,0.26l1.98,0.84l0.3,-0.03l2.66,-1.96l2.06,1.04l0.12,0.03l1.4,0.07l0.27,1.0l-3.24,0.73l-0.17,0.11l-1.13,1.5l-2.38,1.4l-0.1,0.1l-1.29,1.99l0.1,0.42l2.6,1.5l0.97,2.72l1.52,2.56l1.66,2.08l-0.03,1.76l-1.4,0.67l-0.15,0.38l0.6,1.47l0.13,0.15l1.29,0.75l-0.35,2.0l-0.58,1.96l-1.22,0.21l-0.2,0.14l-1.83,2.93l-2.02,3.51l-2.29,3.13l-3.4,2.42l-3.42,2.18l-2.75,0.3l-0.15,0.06l-1.32,1.01l-0.68,-0.67l-0.41,-0.01l-1.37,1.27l-3.42,1.28l-2.62,0.4l-0.24,0.21l-0.8,2.57l-0.95,0.11l-0.53,-1.54l0.52,-0.89l-0.19,-0.44l-3.36,-0.84l-0.17,0.01l-1.09,0.4l-2.36,-0.64l-1.0,-0.9l0.35,-1.34l-0.23,-0.37l-2.22,-0.47l-1.15,-0.94l-0.36,-0.02l-2.08,1.37l-2.35,0.29l-1.98,-0.01l-0.13,0.03l-1.32,0.63l-1.28,0.38l-0.21,0.33l0.33,2.65l-0.78,-0.04l-0.14,-0.39l-0.07,-1.04l-0.41,-0.26l-1.72,0.71l-0.96,-0.43l-1.63,-0.86l0.65,-1.95l-0.19,-0.38l-1.43,-0.46l-0.56,-2.27l-0.34,-0.22l-2.26,0.38l0.25,-2.65l2.29,-2.15l0.09,-0.2l0.1,-2.21l-0.07,-2.09l-0.15,-0.25l-1.02,-0.6l-0.8,-1.52l-0.31,-0.16l-1.42,0.2l-2.16,-0.32l0.55,-0.74l0.01,-0.35l-1.17,-1.7l-0.41,-0.08l-1.67,1.07l-1.97,-0.63l-0.25,0.03l-2.89,1.73l-2.26,1.99l-1.82,0.3l-1.0,-0.66l-0.15,-0.05l-1.28,-0.06l-1.75,-0.61l-0.24,0.02l-1.35,0.69l-0.1,0.08l-1.2,1.45l-0.14,-1.41l-0.4,-0.25l-1.46,0.55l-2.83,-0.26l-2.77,-0.61l-1.99,-1.17l-1.91,-0.54l-0.78,-1.21l-0.17,-0.13l-1.36,-0.38l-2.54,-1.79l-2.01,-0.84l-0.28,0.02l-0.89,0.56l-3.31,-1.83l-2.35,-1.67l-0.57,-2.49l1.34,0.28l0.36,-0.28l0.08,-1.42l-0.05,-0.19l-0.93,-1.34l0.24,-2.18l-0.07,-0.22l-2.69,-3.32l-0.15,-0.1l-3.97,-1.11l-0.69,-2.05l-0.11,-0.15l-1.79,-1.3l-0.39,-0.73l-0.36,-1.57l0.08,-1.09l-0.18,-0.3l-1.52,-0.66l-0.22,-0.01l-0.51,0.18l-0.52,-2.21l0.59,-0.55l0.06,-0.35l-0.22,-0.44l2.12,-1.24l1.63,-0.55l2.58,0.39l0.31,-0.16l0.87,-1.75l3.05,-0.34l0.21,-0.12l0.84,-1.12l3.87,-1.59l0.15,-0.14l0.35,-0.68l0.03,-0.17l-0.17,-1.51l1.52,-0.7l0.15,-0.39l-2.12,-5.0l4.62,-1.15l1.35,-0.72l0.14,-0.17l1.72,-5.37l4.7,0.99l0.28,-0.08l1.39,-1.43l0.08,-0.2l0.11,-2.95l1.83,-0.26l0.18,-0.1l1.85,-2.08l0.61,-0.17l0.57,1.97l0.1,0.15l2.2,1.75l3.48,1.17l1.59,2.36l-0.93,3.53l0.04,0.24l0.9,1.35l0.2,0.13l2.98,0.53l3.32,0.43l2.97,1.89l1.49,0.35l1.08,2.67l1.52,1.88l0.24,0.11l2.74,-0.07l5.15,0.67l3.36,-0.41l2.39,0.43l3.67,1.81l0.13,0.03l2.92,-0.0l1.02,0.86l0.34,0.03l2.88,-1.59l3.98,-1.03l3.81,-0.13l3.02,-1.12l1.77,-1.61l1.73,-1.01l0.13,-0.37l-0.41,-1.01l-0.72,-1.07l1.09,-1.66l1.21,0.24l2.57,0.63l0.24,-0.04l2.46,-1.62l3.78,-1.19l0.13,-0.09l1.8,-2.03l1.66,-0.84l3.54,-0.41l1.93,0.35l0.34,-0.22l0.27,-1.12l-0.08,-0.29l-2.27,-2.22l-2.08,-1.07l-0.29,0.01l-1.82,1.12l-2.36,-0.47l-0.14,0.01l-1.18,0.34l-0.46,-0.94l1.69,-3.08l1.1,-2.21l2.75,1.12l0.26,-0.02l3.53,-2.06l0.15,-0.26l-0.02,-1.35l2.18,-3.39l1.35,-1.04l0.12,-0.24l-0.03,-1.85l-0.15,-0.25l-1.0,-0.58l1.68,-1.37l3.01,-0.59l3.25,-0.09l3.67,0.99l2.08,1.18l1.51,3.3l0.95,1.45l0.85,1.99l0.92,3.19ZM697.0,237.37l-1.95,1.12l-1.74,-0.68l-0.06,-1.9l1.08,-1.03l2.62,-0.7l1.23,0.05l0.37,0.65l-1.01,1.08l-0.54,1.4Z",
      "name": "China"
    },
    "CM": {
      "path": "M453.76,278.92l-0.26,-0.11l-0.18,-0.02l-1.42,0.31l-1.56,-0.33l-1.17,0.16l-3.7,-0.05l0.3,-1.63l-0.04,-0.21l-0.98,-1.66l-0.15,-0.13l-1.03,-0.38l-0.46,-1.01l-0.13,-0.14l-0.48,-0.27l0.02,-0.46l0.62,-1.72l1.1,-2.25l0.54,-0.02l0.2,-0.09l1.41,-1.39l0.73,-0.03l1.32,0.97l0.31,0.03l1.72,-0.85l0.16,-0.2l0.22,-1.0l0.57,-1.03l0.36,-1.18l1.26,-0.98l0.1,-0.15l0.49,-1.7l0.48,-0.51l0.07,-0.13l0.35,-1.3l0.63,-1.54l2.06,-1.92l0.09,-0.17l0.12,-0.79l0.24,-0.41l-0.04,-0.36l-0.89,-0.91l0.04,-0.45l0.28,-0.06l0.85,1.39l0.16,1.59l-0.09,1.66l0.04,0.17l1.09,1.84l-0.86,-0.02l-0.72,0.17l-1.07,-0.24l-0.34,0.17l-0.54,1.19l0.06,0.34l1.48,1.47l1.06,0.44l0.32,0.94l0.73,1.6l-0.32,0.57l-1.23,2.49l-0.54,0.41l-0.12,0.21l-0.19,1.95l0.24,1.08l-0.18,0.67l0.07,0.28l1.13,1.25l0.24,0.93l0.92,1.29l1.1,0.8l0.1,1.01l0.26,0.73l-0.12,0.93l-1.65,-0.49l-2.02,-0.66l-3.19,-0.11Z",
      "name": "Cameroon"
    },
    "CL": {
      "path": "M246.8,429.1l-1.14,0.78l-2.25,1.21l-0.16,0.23l-0.37,2.94l-0.75,0.06l-2.72,-1.07l-2.83,-2.34l-3.06,-1.9l-0.71,-1.92l0.67,-1.84l-0.02,-0.25l-1.22,-2.13l-0.31,-5.41l1.02,-2.95l2.59,-2.4l-0.13,-0.51l-3.32,-0.8l2.06,-2.4l0.07,-0.15l0.79,-4.77l2.44,0.95l0.4,-0.22l1.31,-6.31l-0.16,-0.33l-1.68,-0.8l-0.42,0.21l-0.72,3.47l-1.01,-0.27l0.74,-4.06l0.85,-5.46l1.12,-1.96l0.03,-0.22l-0.71,-2.82l-0.19,-2.94l0.76,-0.07l0.26,-0.2l1.53,-4.62l1.73,-4.52l1.07,-4.2l-0.56,-4.2l0.73,-2.2l0.01,-0.12l-0.29,-3.3l1.46,-3.34l0.45,-5.19l0.8,-5.52l0.78,-5.89l-0.18,-4.33l-0.49,-3.47l1.1,-0.56l0.13,-0.13l0.44,-0.88l0.9,1.29l0.32,1.8l0.1,0.18l1.16,0.97l-0.73,2.33l0.01,0.21l1.33,2.91l0.97,3.6l0.35,0.22l1.57,-0.31l0.16,0.34l-0.79,2.51l-2.61,1.25l-0.17,0.28l0.08,4.36l-0.48,0.79l0.01,0.33l0.6,0.84l-1.62,1.55l-1.67,2.6l-0.89,2.47l-0.02,0.13l0.23,2.56l-1.5,2.76l-0.03,0.21l1.15,4.8l0.11,0.17l0.54,0.42l-0.01,2.37l-1.4,2.7l-0.03,0.15l0.06,2.25l-1.8,1.78l-0.09,0.21l0.02,2.73l0.71,2.63l-1.33,0.94l-0.12,0.17l-0.67,2.64l-0.59,3.03l0.4,3.55l-0.84,0.51l-0.14,0.31l0.58,3.5l0.08,0.16l0.96,0.99l-0.7,1.08l0.11,0.43l1.04,0.55l0.19,0.8l-0.89,0.48l-0.16,0.31l0.26,1.77l-0.89,4.06l-1.31,2.67l-0.03,0.19l0.28,1.53l-0.73,1.88l-1.85,1.37l-0.12,0.26l0.22,3.46l0.06,0.16l0.88,1.19l0.28,0.12l1.32,-0.17l-0.04,2.13l0.04,0.15l1.04,1.95l0.24,0.16l5.94,0.44ZM248.79,430.71l0.0,7.41l0.3,0.3l2.67,0.0l1.01,0.06l-0.54,0.91l-1.99,1.01l-1.13,-0.1l-1.42,-0.27l-1.87,-1.06l-2.57,-0.49l-3.09,-1.9l-2.52,-1.83l-2.65,-2.93l0.93,0.32l3.54,2.29l3.32,1.23l0.34,-0.09l1.29,-1.57l0.83,-2.32l2.11,-1.28l1.43,0.32Z",
      "name": "Chile"
    },
    "CA": {
      "path": "M280.14,145.66l-1.66,2.88l0.06,0.37l0.37,0.03l1.5,-1.01l1.17,0.49l-0.64,0.83l0.13,0.46l2.22,0.89l0.28,-0.03l1.02,-0.7l2.09,0.83l-0.69,2.1l0.37,0.38l1.43,-0.45l0.27,1.43l0.74,1.88l-0.95,2.5l-0.88,0.09l-1.34,-0.48l0.49,-2.34l-0.14,-0.32l-0.7,-0.4l-0.36,0.04l-2.81,2.66l-0.63,-0.05l1.2,-1.01l-0.1,-0.52l-2.4,-0.77l-2.79,0.18l-4.65,-0.09l-0.22,-0.54l1.37,-0.99l0.01,-0.48l-0.82,-0.65l1.91,-1.79l2.57,-5.17l1.49,-1.81l2.04,-1.07l0.63,0.08l-0.27,0.51l-1.33,2.07ZM193.92,74.85l-0.01,4.24l0.19,0.28l0.33,-0.07l3.14,-3.22l2.65,2.5l-0.71,3.04l0.06,0.26l2.42,2.88l0.46,0.0l2.66,-3.14l1.83,-3.74l0.03,-0.12l0.13,-4.53l3.23,0.31l3.63,0.64l3.18,2.08l0.13,1.91l-1.79,2.22l-0.0,0.37l1.69,2.2l-0.28,1.8l-4.74,2.84l-3.33,0.62l-2.5,-1.21l-0.41,0.17l-0.73,2.05l-2.39,3.44l-0.74,1.78l-2.78,2.61l-3.48,0.26l-0.17,0.07l-1.98,1.68l-0.1,0.21l-0.15,2.33l-2.68,0.45l-0.17,0.09l-3.1,3.2l-2.75,4.38l-0.99,3.06l-0.14,4.31l0.25,0.31l3.5,0.58l1.07,3.24l1.18,2.76l0.34,0.18l3.43,-0.69l4.55,1.52l2.45,1.32l1.76,1.65l0.12,0.07l3.11,0.96l2.63,1.46l0.13,0.04l4.12,0.2l2.41,0.3l-0.36,2.81l0.8,3.51l1.81,3.78l0.08,0.1l3.73,3.17l0.34,0.03l1.93,-1.08l0.13,-0.15l1.35,-3.44l0.01,-0.18l-1.31,-5.38l-0.08,-0.14l-1.46,-1.5l3.68,-1.51l2.84,-2.46l1.45,-2.55l0.04,-0.17l-0.2,-2.39l-0.04,-0.12l-1.7,-3.07l-2.9,-2.64l2.79,-3.66l0.05,-0.27l-1.08,-3.38l-0.8,-5.75l1.45,-0.75l4.18,1.03l2.6,0.38l0.18,-0.03l1.93,-0.95l2.18,1.23l3.01,2.18l0.73,1.42l0.25,0.16l4.18,0.27l-0.06,2.95l0.83,4.7l0.22,0.24l2.19,0.55l1.75,2.08l0.38,0.07l3.63,-2.03l0.11,-0.11l2.38,-4.06l1.36,-1.43l1.76,3.01l3.26,4.68l2.68,4.19l-0.94,2.09l0.12,0.38l3.31,1.98l2.23,1.98l0.13,0.07l3.94,0.89l1.48,1.02l0.96,2.82l0.22,0.2l1.85,0.43l0.88,1.13l0.17,3.53l-1.68,1.16l-1.76,1.14l-4.08,1.17l-0.11,0.06l-3.08,2.65l-4.11,0.52l-5.35,-0.69l-3.76,-0.02l-2.62,0.23l-0.2,0.1l-2.05,2.29l-3.13,1.41l-0.11,0.08l-3.6,4.24l-2.87,2.92l-0.05,0.36l0.33,0.14l2.13,-0.52l0.15,-0.08l3.98,-4.15l5.16,-2.63l3.58,-0.31l1.82,1.3l-2.09,1.91l-0.09,0.29l0.8,3.46l0.82,2.37l0.15,0.17l3.25,1.56l0.16,0.03l4.14,-0.45l0.21,-0.12l2.03,-2.86l0.11,1.46l0.13,0.22l1.26,0.88l-2.7,1.78l-5.51,1.83l-2.52,1.26l-2.75,2.16l-1.52,-0.18l-0.08,-2.16l4.19,-2.47l0.14,-0.34l-0.3,-0.22l-4.01,0.1l-2.66,0.36l-1.45,-1.56l0.0,-4.16l-0.11,-0.23l-1.11,-0.91l-0.28,-0.05l-1.5,0.48l-0.7,-0.7l-0.45,0.02l-1.91,2.39l-0.8,2.5l-0.82,1.31l-0.95,0.43l-0.77,0.15l-0.23,0.2l-0.18,0.56l-8.2,0.02l-0.13,0.03l-1.19,0.61l-2.95,2.45l-0.78,1.13l-4.6,0.01l-0.12,0.02l-1.13,0.48l-0.13,0.44l0.37,0.55l0.2,0.82l-0.01,0.09l-3.1,1.42l-2.63,0.5l-2.84,1.57l-0.47,0.0l-0.72,-0.4l-0.18,-0.27l0.03,-0.15l0.52,-1.0l1.2,-1.71l0.73,-1.8l0.02,-0.17l-1.03,-5.47l-0.15,-0.21l-2.35,-1.32l0.16,-0.29l-0.05,-0.35l-0.37,-0.38l-0.22,-0.09l-0.56,0.0l-0.35,-0.34l-0.11,-0.65l-0.46,-0.2l-0.39,0.26l-0.2,-0.03l-0.11,-0.33l-0.48,-0.25l-0.21,-0.71l-0.15,-0.18l-3.97,-2.07l-4.8,-2.39l-0.25,-0.01l-2.19,0.89l-0.72,0.03l-3.04,-0.82l-0.14,-0.0l-1.94,0.4l-2.4,-0.98l-2.56,-0.51l-1.7,-0.19l-0.62,-0.44l-0.42,-1.67l-0.3,-0.23l-0.85,0.02l-0.29,0.3l-0.01,0.95l-69.26,-0.01l-4.77,-3.14l-1.78,-1.41l-4.51,-1.38l-1.3,-2.73l0.34,-1.96l-0.17,-0.33l-3.06,-1.37l-0.41,-2.58l-0.11,-0.18l-2.92,-2.4l-0.05,-1.53l1.32,-1.59l0.07,-0.2l-0.07,-2.21l-0.16,-0.26l-4.19,-2.22l-2.52,-4.02l-1.56,-2.6l-0.08,-0.09l-2.28,-1.64l-1.65,-1.48l-1.31,-1.89l-0.38,-0.1l-2.51,1.21l-2.28,1.92l-2.03,-2.22l-1.85,-1.71l-2.44,-1.04l-2.28,-0.12l0.03,-37.72l4.27,0.98l4.0,2.13l2.61,0.4l0.24,-0.07l2.17,-1.81l2.92,-1.33l3.63,0.53l0.18,-0.03l3.72,-1.94l3.89,-1.06l1.6,1.72l0.37,0.06l1.87,-1.04l0.14,-0.19l0.48,-1.83l1.37,0.38l4.18,3.96l0.41,0.0l2.89,-2.62l0.28,2.79l0.37,0.26l3.08,-0.73l0.17,-0.12l0.85,-1.16l2.81,0.24l3.83,1.86l5.86,1.61l3.46,0.75l2.44,-0.26l2.89,1.89l-3.12,1.89l-0.14,0.31l0.24,0.24l4.53,0.92l6.84,-0.5l2.04,-0.71l2.54,2.44l0.39,0.02l2.72,-2.16l-0.01,-0.48l-2.26,-1.61l1.27,-1.16l2.94,-0.19l1.94,-0.42l1.89,0.97l2.49,2.32l0.24,0.08l2.71,-0.33l4.35,1.9l0.17,0.02l3.86,-0.67l3.62,0.1l0.31,-0.33l-0.26,-2.44l1.9,-0.65l3.58,1.36l-0.01,3.84l0.23,0.29l0.34,-0.17l1.51,-3.23l1.81,0.1l0.31,-0.22l1.13,-4.37l-0.08,-0.29l-2.68,-2.73l-2.83,-1.76l0.19,-4.73l2.77,-3.15l3.06,0.69l2.44,1.97l3.24,4.88l-2.05,2.02l0.15,0.51l4.41,0.85ZM265.85,150.7l-0.84,0.04l-3.15,-0.99l-1.77,-1.17l0.19,-0.06l3.17,0.79l2.39,1.27l0.01,0.12ZM249.41,3.71l6.68,0.49l5.34,0.79l4.34,1.6l-0.08,1.24l-5.91,2.56l-6.03,1.21l-2.36,1.38l-0.14,0.34l0.29,0.22l4.37,-0.02l-4.96,3.01l-4.06,1.64l-0.11,0.08l-4.21,4.62l-5.07,0.92l-0.12,0.05l-1.53,1.1l-7.5,0.59l-0.28,0.28l0.24,0.31l2.67,0.54l-1.04,0.6l-0.09,0.44l1.89,2.49l-2.11,1.66l-3.83,1.52l-0.15,0.13l-1.14,2.01l-3.41,1.55l-0.16,0.36l0.35,1.19l0.3,0.22l3.98,-0.19l0.03,0.78l-6.42,2.99l-6.44,-1.41l-7.41,0.79l-3.72,-0.62l-4.48,-0.26l-0.25,-2.0l4.37,-1.13l0.21,-0.38l-1.14,-3.55l1.13,-0.28l6.61,2.29l0.35,-0.12l-0.04,-0.37l-3.41,-3.45l-0.14,-0.08l-3.57,-0.92l1.62,-1.7l4.36,-1.3l0.2,-0.18l0.71,-1.94l-0.12,-0.36l-3.45,-2.15l-0.88,-2.43l6.36,0.23l1.94,0.61l0.23,-0.02l3.91,-2.1l0.15,-0.32l-0.26,-0.24l-5.69,-0.67l-8.69,0.37l-4.3,-1.92l-2.12,-2.39l-2.82,-1.68l-0.44,-1.65l3.41,-1.06l2.93,-0.2l4.91,-0.99l3.69,-2.28l2.93,0.31l2.64,1.68l0.42,-0.1l1.84,-3.23l3.17,-0.96l4.45,-0.69l7.56,-0.26l1.26,0.64l0.18,0.03l7.2,-1.06l10.81,0.8ZM203.94,57.59l0.01,0.32l1.97,2.97l0.51,-0.01l2.26,-3.75l6.05,-1.89l4.08,4.72l-0.36,2.95l0.38,0.33l4.95,-1.36l0.11,-0.05l2.23,-1.77l5.37,2.31l3.32,2.14l0.3,1.89l0.36,0.25l4.48,-1.01l2.49,2.8l0.14,0.09l5.99,1.78l2.09,1.74l2.18,3.83l-4.29,1.91l-0.01,0.54l5.9,2.83l3.95,0.94l3.54,3.84l0.2,0.1l3.58,0.25l-0.67,2.51l-4.18,4.54l-2.84,-1.61l-3.91,-3.95l-0.26,-0.09l-3.24,0.52l-0.25,0.26l-0.32,2.37l0.1,0.26l2.63,2.38l3.42,1.89l0.96,1.0l1.57,3.8l-0.74,2.43l-2.85,-0.96l-6.26,-3.15l-0.38,0.09l0.04,0.39l3.54,3.4l2.55,2.31l0.23,0.78l-6.26,-1.43l-5.33,-2.25l-2.73,-1.73l0.67,-0.86l-0.09,-0.45l-7.38,-4.01l-0.44,0.27l0.03,0.89l-6.85,0.61l-1.8,-1.17l1.43,-2.6l4.56,-0.07l5.15,-0.52l0.23,-0.45l-0.76,-1.34l0.8,-1.89l3.21,-4.06l0.05,-0.29l-0.72,-1.95l-0.97,-1.47l-0.11,-0.1l-3.84,-2.1l-4.53,-1.33l1.09,-0.75l0.05,-0.45l-2.65,-2.75l-0.18,-0.09l-2.12,-0.24l-1.91,-1.47l-0.39,0.02l-1.27,1.25l-4.4,0.56l-9.06,-0.99l-5.28,-1.31l-4.01,-0.67l-1.72,-1.31l2.32,-1.85l0.1,-0.33l-0.28,-0.2l-3.3,-0.02l-0.74,-4.36l1.86,-4.09l2.46,-1.88l5.74,-1.15l-1.5,2.55ZM261.28,159.28l0.19,0.14l1.82,0.42l1.66,-0.05l-0.66,0.68l-0.75,0.16l-3.0,-1.25l-0.46,-0.77l0.51,-0.52l0.68,1.19ZM230.87,84.48l-2.48,0.19l-0.52,-1.74l0.96,-2.17l2.03,-0.53l1.71,1.04l0.02,1.6l-0.22,0.46l-1.5,1.16ZM229.52,58.19l0.14,0.82l-4.99,-0.22l-2.73,0.63l-0.59,-0.23l-2.61,-2.4l0.08,-1.38l0.94,-0.25l5.61,0.51l4.14,2.54ZM222.12,105.0l-0.79,1.63l-0.75,-0.22l-0.52,-0.91l0.04,-0.09l0.84,-1.01l0.74,0.06l0.44,0.55ZM183.77,38.22l2.72,1.65l0.16,0.04l4.83,-0.01l1.92,1.52l-0.51,1.75l0.18,0.36l2.84,1.14l1.56,1.19l0.16,0.06l3.37,0.22l3.65,0.42l4.07,-1.1l5.05,-0.43l3.96,0.35l2.53,1.8l0.48,1.79l-1.37,1.16l-3.6,1.03l-3.22,-0.59l-7.17,0.76l-5.1,0.09l-4.0,-0.6l-6.48,-1.56l-0.81,-2.57l-0.3,-2.49l-0.1,-0.19l-2.51,-2.25l-0.16,-0.07l-5.12,-0.63l-2.61,-1.45l0.75,-1.71l4.88,0.32ZM207.46,91.26l0.42,1.62l0.42,0.19l1.12,-0.55l1.35,0.99l2.74,1.39l2.73,1.2l0.2,1.74l0.35,0.26l1.72,-0.29l1.31,0.97l-1.72,0.96l-3.68,-0.9l-1.34,-1.71l-0.43,-0.04l-2.46,2.1l-3.23,1.85l-0.74,-1.98l-0.31,-0.19l-2.47,0.28l1.49,-1.34l0.1,-0.19l0.32,-3.15l0.79,-3.45l1.34,0.25ZM215.59,102.66l-2.73,2.0l-1.49,-0.08l-0.37,-0.7l1.61,-1.56l3.0,0.03l-0.02,0.3ZM202.79,24.07l0.11,0.12l2.54,1.53l-3.01,1.47l-4.55,4.07l-4.3,0.38l-5.07,-0.68l-2.51,-2.09l0.03,-1.72l1.86,-1.4l0.1,-0.34l-0.29,-0.2l-4.49,0.04l-2.63,-1.79l-1.45,-2.36l1.61,-2.38l1.65,-1.69l2.47,-0.4l0.19,-0.48l-0.72,-0.89l5.1,-0.26l3.1,3.05l0.13,0.07l4.21,1.25l3.99,1.06l1.92,3.65ZM187.5,59.3l-0.15,0.1l-2.59,3.4l-2.5,-0.15l-1.47,-3.92l0.04,-2.24l1.22,-1.92l2.34,-1.26l5.11,0.17l4.28,1.06l-3.36,3.86l-2.9,0.9ZM186.19,48.8l-1.15,1.63l-3.42,-0.35l-2.68,-1.15l1.11,-1.88l3.34,-1.27l2.01,1.63l0.79,1.38ZM185.78,35.41l-0.95,0.13l-4.48,-0.33l-0.4,-0.91l4.5,0.07l1.45,0.82l-0.1,0.21ZM180.76,32.56l-3.43,1.03l-1.85,-1.14l-1.01,-1.92l-0.16,-1.87l2.87,0.2l1.39,0.35l2.75,1.75l-0.55,1.6ZM181.03,76.32l-1.21,1.2l-3.19,-1.26l-0.18,-0.01l-1.92,0.45l-2.88,-1.67l1.84,-1.16l1.6,-1.77l2.45,1.17l1.45,0.77l2.05,2.28ZM169.72,54.76l2.83,0.97l0.14,0.01l4.25,-0.58l0.47,1.01l-2.19,2.16l0.07,0.48l3.61,1.95l-0.41,3.84l-3.87,1.68l-2.23,-0.36l-1.73,-1.75l-6.07,-3.53l0.03,-1.01l4.79,0.55l0.3,-0.16l-0.04,-0.34l-2.55,-2.89l2.59,-2.05ZM174.44,40.56l1.49,1.87l0.07,2.48l-1.07,3.52l-3.87,0.48l-2.41,-0.72l0.05,-2.72l-0.33,-0.3l-3.79,0.36l-0.13,-3.31l2.36,0.14l0.15,-0.03l3.7,-1.74l3.44,0.29l0.31,-0.22l0.03,-0.12ZM170.14,31.5l0.75,1.74l-3.52,-0.52l-4.19,-1.77l-4.65,-0.17l1.65,-1.11l-0.05,-0.52l-2.86,-1.26l-0.13,-1.58l4.52,0.7l6.66,1.99l1.84,2.5ZM134.64,58.08l-1.08,1.93l0.34,0.44l5.44,-1.41l3.37,2.32l0.37,-0.02l2.66,-2.28l2.03,1.38l2.01,4.53l0.53,0.04l1.26,-1.93l0.03,-0.27l-1.67,-4.55l1.82,-0.58l2.36,0.73l2.69,1.84l1.53,4.46l0.77,3.24l0.15,0.19l4.22,2.26l4.32,2.04l-0.21,1.51l-3.87,0.34l-0.19,0.5l1.45,1.54l-0.65,1.23l-4.3,-0.65l-4.4,-1.19l-2.97,0.28l-4.67,1.48l-6.31,0.65l-4.27,0.39l-1.26,-1.91l-0.15,-0.12l-3.42,-1.2l-0.16,-0.01l-2.05,0.45l-2.66,-3.02l1.2,-0.34l3.82,-0.76l3.58,0.19l3.27,-0.78l0.23,-0.29l-0.24,-0.29l-4.84,-1.06l-5.42,0.35l-3.4,-0.09l-0.97,-1.22l5.39,-1.7l0.21,-0.33l-0.3,-0.25l-3.82,0.06l-3.95,-1.1l1.88,-3.13l1.68,-1.81l6.54,-2.84l2.11,0.77ZM158.85,56.58l-1.82,2.62l-3.38,-2.9l0.49,-0.39l3.17,-0.18l1.54,0.86ZM149.71,42.7l1.0,1.87l0.37,0.14l2.17,-0.83l2.33,0.2l0.38,2.16l-1.38,2.17l-8.33,0.76l-6.34,2.15l-3.51,0.1l-0.22,-1.13l4.98,-2.12l0.17,-0.34l-0.31,-0.23l-11.27,0.6l-3.04,-0.78l3.14,-4.57l2.2,-1.35l6.87,1.7l4.4,3.0l0.14,0.05l4.37,0.39l0.27,-0.48l-3.41,-4.68l1.96,-1.62l2.28,0.53l0.79,2.32ZM145.44,29.83l-2.18,0.77l-3.79,-0.0l0.02,-0.31l2.34,-1.5l1.2,0.23l2.42,0.83ZM144.83,34.5l-4.44,1.46l-3.18,-1.48l1.6,-1.36l3.51,-0.53l3.1,0.75l-0.6,1.16ZM119.02,65.87l-6.17,2.07l-1.19,-1.82l-0.13,-0.11l-5.48,-2.32l0.92,-1.7l1.73,-3.44l2.16,-3.15l-0.02,-0.36l-2.09,-2.56l7.84,-0.71l3.59,1.02l6.32,0.27l2.35,1.37l2.25,1.71l-2.68,1.04l-6.21,3.41l-3.1,3.28l-0.08,0.21l0.0,1.81ZM129.66,35.4l-0.3,3.55l-1.77,1.67l-2.34,0.27l-4.62,2.2l-3.89,0.76l-2.83,-0.93l3.85,-3.52l5.04,-3.36l3.75,0.07l3.11,-0.7ZM111.24,152.74l-0.82,0.29l-3.92,-1.39l-0.7,-1.06l-0.12,-0.1l-2.15,-1.09l-0.41,-0.84l-0.2,-0.16l-2.44,-0.56l-0.84,-1.56l0.1,-0.36l2.34,0.64l1.53,0.5l2.28,0.34l0.78,1.04l1.24,1.55l0.09,0.08l2.42,1.3l0.81,1.39ZM88.54,134.82l0.14,0.02l2.0,-0.23l-0.67,3.48l0.06,0.24l1.78,2.22l-0.24,-0.0l-1.4,-1.42l-0.91,-1.53l-1.26,-1.08l-0.42,-1.35l0.09,-0.66l0.82,0.31Z",
      "name": "Canada"
    },
    "CG": {
      "path": "M453.66,296.61l-0.9,-0.82l-0.35,-0.04l-0.83,0.48l-0.77,0.83l-1.65,-2.13l1.66,-1.2l0.08,-0.39l-0.81,-1.43l0.59,-0.43l1.62,-0.29l0.24,-0.24l0.1,-0.58l0.94,0.84l0.19,0.08l2.21,0.11l0.27,-0.14l0.81,-1.29l0.32,-1.76l-0.27,-1.96l-0.06,-0.15l-1.08,-1.35l1.02,-2.74l-0.09,-0.34l-0.62,-0.5l-0.22,-0.06l-1.66,0.18l-0.55,-1.03l0.12,-0.73l2.85,0.09l1.98,0.65l2.0,0.59l0.38,-0.25l0.17,-1.3l1.26,-2.24l1.34,-1.19l1.54,0.38l1.35,0.12l-0.11,1.15l-0.74,1.34l-0.5,1.61l-0.31,2.22l0.12,1.41l-0.4,0.9l-0.06,0.88l-0.24,0.67l-1.57,1.15l-1.24,1.41l-1.09,2.43l-0.03,0.13l0.08,1.95l-0.55,0.69l-1.46,1.23l-1.32,1.41l-0.61,-0.29l-0.13,-0.57l-0.29,-0.23l-1.36,-0.02l-0.23,0.1l-0.72,0.81l-0.41,-0.16Z",
      "name": "Republic of the Congo"
    },
    "CF": {
      "path": "M459.41,266.56l1.9,-0.17l0.22,-0.12l0.36,-0.5l0.14,0.02l0.55,0.51l0.29,0.07l3.15,-0.96l0.12,-0.07l1.05,-0.97l1.29,-0.87l0.12,-0.33l-0.17,-0.61l0.38,-0.12l2.36,0.15l0.15,-0.03l2.36,-1.17l0.12,-0.1l1.78,-2.72l1.18,-0.96l1.23,-0.34l0.21,0.79l0.07,0.13l1.37,1.5l0.01,0.86l-0.39,1.0l-0.01,0.17l0.16,0.78l0.1,0.17l0.91,0.76l1.89,1.09l1.24,0.92l0.02,0.67l0.12,0.23l1.67,1.3l0.99,1.03l0.61,1.46l0.14,0.15l1.79,0.95l0.2,0.4l-0.44,0.14l-1.54,-0.06l-1.98,-0.26l-0.93,0.22l-0.19,0.14l-0.3,0.48l-0.57,0.05l-0.91,-0.49l-0.26,-0.01l-2.7,1.21l-1.04,-0.23l-0.21,0.03l-0.34,0.19l-0.12,0.13l-0.64,1.3l-1.67,-0.43l-1.77,-0.24l-1.58,-0.91l-2.06,-0.85l-0.27,0.02l-1.42,0.88l-0.97,1.27l-0.06,0.14l-0.19,1.46l-1.3,-0.11l-1.67,-0.42l-0.27,0.07l-1.55,1.41l-0.99,1.76l-0.14,-1.18l-0.13,-0.22l-1.1,-0.78l-0.86,-1.2l-0.2,-0.84l-0.07,-0.13l-1.07,-1.19l0.16,-0.59l0.0,-0.15l-0.24,-1.01l0.18,-1.77l0.5,-0.38l0.09,-0.11l1.18,-2.4Z",
      "name": "Central African Republic"
    },
    "CD": {
      "path": "M497.85,276.25l-0.14,2.77l0.2,0.3l0.57,0.19l-0.47,0.52l-1.0,0.71l-0.96,1.31l-0.56,1.22l-0.16,2.04l-0.54,0.89l-0.04,0.15l-0.02,1.76l-0.63,0.61l-0.09,0.2l-0.08,1.33l-0.2,0.11l-0.15,0.21l-0.23,1.37l0.03,0.2l0.6,1.08l0.16,2.96l0.44,2.29l-0.24,1.25l0.01,0.15l0.5,1.46l0.07,0.12l1.41,1.37l1.09,2.56l-0.51,-0.11l-3.45,0.45l-0.67,0.3l-0.15,0.15l-0.71,1.61l0.01,0.26l0.52,1.03l-0.43,2.9l-0.31,2.55l0.13,0.29l0.7,0.46l1.75,0.99l0.31,-0.01l0.26,-0.17l0.15,1.9l-1.44,-0.02l-0.94,-1.28l-0.94,-1.1l-0.17,-0.1l-1.76,-0.33l-0.5,-1.18l-0.42,-0.15l-1.44,0.75l-1.79,-0.32l-0.77,-1.05l-0.2,-0.12l-1.59,-0.23l-0.97,0.04l-0.1,-0.53l-0.27,-0.25l-0.86,-0.06l-1.13,-0.15l-1.62,0.37l-1.04,-0.06l-0.32,0.09l0.11,-2.56l-0.08,-0.21l-0.77,-0.87l-0.17,-1.41l0.36,-1.47l-0.03,-0.21l-0.48,-0.91l-0.04,-1.52l-0.3,-0.29l-2.65,0.02l0.13,-0.53l-0.29,-0.37l-1.28,0.01l-0.28,0.21l-0.07,0.24l-1.35,0.09l-0.26,0.18l-0.62,1.45l-0.25,0.42l-1.17,-0.3l-0.19,0.01l-0.79,0.34l-1.44,0.18l-1.41,-1.96l-0.7,-1.47l-0.61,-1.86l-0.28,-0.21l-7.39,-0.03l-0.92,0.3l-0.78,-0.03l-0.78,0.25l-0.11,-0.25l0.35,-0.15l0.18,-0.26l0.07,-1.02l0.33,-0.52l0.72,-0.42l0.52,0.2l0.33,-0.08l0.76,-0.86l0.99,0.02l0.11,0.48l0.16,0.2l0.94,0.44l0.35,-0.07l1.46,-1.56l1.44,-1.21l0.68,-0.85l0.06,-0.2l-0.08,-1.99l1.04,-2.33l1.1,-1.23l1.62,-1.19l0.11,-0.14l0.29,-0.8l0.08,-0.94l0.38,-0.82l0.03,-0.16l-0.13,-1.38l0.3,-2.16l0.47,-1.51l0.73,-1.31l0.04,-0.12l0.15,-1.51l0.21,-1.66l0.89,-1.16l1.16,-0.7l1.9,0.79l1.69,0.95l1.81,0.24l1.85,0.48l0.35,-0.16l0.71,-1.43l0.16,-0.09l1.03,0.23l0.19,-0.02l2.65,-1.19l0.86,0.46l0.17,0.03l0.81,-0.08l0.23,-0.14l0.31,-0.5l0.75,-0.17l1.83,0.26l1.64,0.06l0.72,-0.21l1.39,1.9l0.16,0.11l1.12,0.3l0.24,-0.04l0.58,-0.36l1.05,0.15l0.15,-0.02l1.15,-0.44l0.47,0.84l0.08,0.09l2.08,1.57Z",
      "name": "Democratic Republic of the Congo"
    },
    "CZ": {
      "path": "M463.29,152.22l-0.88,-0.47l-0.18,-0.03l-1.08,0.15l-1.86,-0.94l-0.21,-0.02l-0.88,0.24l-0.13,0.07l-1.25,1.17l-1.63,-0.91l-1.38,-1.36l-1.22,-0.75l-0.24,-1.24l-0.33,-0.75l1.53,-0.6l0.98,-0.84l1.74,-0.62l0.11,-0.07l0.47,-0.47l0.46,0.27l0.24,0.03l0.96,-0.3l1.06,0.95l0.15,0.07l1.57,0.24l-0.1,0.6l0.16,0.32l1.36,0.68l0.41,-0.15l0.28,-0.62l1.29,0.28l0.19,0.84l0.26,0.23l1.73,0.18l0.74,1.02l-0.17,0.0l-0.25,0.13l-0.32,0.49l-0.46,0.11l-0.22,0.23l-0.13,0.57l-0.32,0.1l-0.2,0.22l-0.03,0.14l-0.65,0.25l-1.05,-0.05l-0.28,0.17l-0.22,0.43Z",
      "name": "Czech Republic"
    },
    "CY": {
      "path": "M505.03,193.75l-1.51,0.68l-1.0,-0.3l-0.32,-0.63l0.69,-0.06l0.41,0.13l0.19,-0.0l0.62,-0.22l0.31,0.02l0.06,0.22l0.49,0.17l0.06,-0.01Z",
      "name": "Cyprus"
    },
    "CR": {
      "path": "M213.0,263.84l-0.98,-0.4l-0.3,-0.31l0.16,-0.24l0.05,-0.21l-0.09,-0.56l-0.1,-0.18l-0.76,-0.65l-0.99,-0.5l-0.74,-0.28l-0.13,-0.58l-0.12,-0.18l-0.66,-0.45l-0.34,-0.0l-0.13,0.31l0.13,0.59l-0.17,0.21l-0.34,-0.42l-0.14,-0.1l-0.7,-0.22l-0.23,-0.34l0.01,-0.62l0.31,-0.74l-0.14,-0.38l-0.3,-0.15l0.47,-0.4l1.48,0.6l0.26,-0.02l0.47,-0.27l0.58,0.15l0.35,0.44l0.17,0.11l0.74,0.17l0.27,-0.07l0.3,-0.27l0.52,1.09l0.97,1.02l0.77,0.71l-0.41,0.1l-0.23,0.3l0.01,1.02l0.12,0.24l0.2,0.14l-0.07,0.05l-0.11,0.3l0.08,0.37l-0.23,0.63Z",
      "name": "Costa Rica"
    },
    "CU": {
      "path": "M215.01,226.09l2.08,0.18l1.94,0.03l2.24,0.86l0.95,0.92l0.25,0.08l2.22,-0.28l0.79,0.55l3.68,2.81l0.19,0.06l0.77,-0.03l1.18,0.42l-0.12,0.47l0.27,0.37l1.78,0.1l1.59,0.9l-0.11,0.22l-1.5,0.3l-1.64,0.13l-1.75,-0.2l-2.69,0.19l1.0,-0.86l-0.03,-0.48l-1.02,-0.68l-0.13,-0.05l-1.52,-0.16l-0.74,-0.64l-0.57,-1.42l-0.3,-0.19l-1.36,0.1l-2.23,-0.67l-0.71,-0.52l-0.14,-0.06l-3.2,-0.4l-0.42,-0.25l0.56,-0.39l0.12,-0.33l-0.27,-0.22l-2.46,-0.13l-0.2,0.06l-1.72,1.31l-0.94,0.03l-0.25,0.15l-0.29,0.53l-1.04,0.24l-0.29,-0.07l0.7,-0.43l0.1,-0.11l0.5,-0.87l1.04,-0.54l1.23,-0.49l1.86,-0.25l0.62,-0.28Z",
      "name": "Cuba"
    },
    "SZ": {
      "path": "M500.95,353.41l-0.41,0.97l-1.16,0.23l-1.29,-1.26l-0.02,-0.71l0.63,-0.93l0.23,-0.7l0.47,-0.12l1.04,0.4l0.32,1.05l0.2,1.08Z",
      "name": "Swaziland"
    },
    "SY": {
      "path": "M510.84,199.83l0.09,-0.11l0.07,-0.2l-0.04,-1.08l0.56,-1.4l1.3,-1.01l0.1,-0.34l-0.41,-1.11l-0.24,-0.19l-0.89,-0.11l-0.2,-1.84l0.55,-1.05l1.3,-1.22l0.09,-0.19l0.09,-1.09l0.39,0.27l0.25,0.04l2.66,-0.77l1.35,0.52l2.06,-0.01l2.93,-1.08l1.35,0.04l2.14,-0.34l-0.83,1.16l-1.31,0.68l-0.16,0.3l0.23,2.03l-0.9,3.25l-5.43,2.87l-4.79,2.91l-2.32,-0.92Z",
      "name": "Syria"
    },
    "KG": {
      "path": "M599.04,172.15l0.38,-0.9l1.43,-0.37l4.04,1.02l0.37,-0.23l0.36,-1.64l1.17,-0.52l3.45,1.24l0.2,-0.0l0.86,-0.31l4.09,0.08l3.61,0.31l1.18,1.02l0.11,0.06l1.19,0.34l-0.13,0.26l-3.84,1.58l-0.13,0.1l-0.81,1.08l-3.08,0.34l-0.24,0.16l-0.85,1.7l-2.43,-0.37l-0.14,0.01l-1.79,0.61l-2.39,1.4l-0.12,0.39l0.25,0.49l-0.48,0.45l-4.57,0.43l-3.04,-0.94l-2.45,0.18l0.14,-1.02l2.42,0.44l0.27,-0.08l0.81,-0.81l1.76,0.27l0.21,-0.05l3.21,-2.14l-0.03,-0.51l-2.97,-1.57l-0.26,-0.01l-1.64,0.69l-1.38,-0.84l1.81,-1.67l-0.09,-0.5l-0.46,-0.18Z",
      "name": "Kyrgyzstan"
    },
    "KE": {
      "path": "M523.3,287.04l0.06,0.17l1.29,1.8l-1.46,0.84l-0.11,0.11l-0.55,0.93l-0.81,0.16l-0.24,0.24l-0.34,1.69l-0.81,1.06l-0.46,1.58l-0.76,0.63l-3.3,-2.3l-0.16,-1.32l-0.15,-0.23l-9.35,-5.28l-0.02,-2.4l1.92,-2.63l0.91,-1.83l0.01,-0.24l-1.09,-2.86l-0.29,-1.24l-1.09,-1.63l2.93,-2.85l0.92,0.3l0.0,1.19l0.09,0.22l0.86,0.83l0.21,0.08l1.65,0.0l3.09,2.08l0.16,0.05l0.79,0.03l0.54,-0.06l0.58,0.28l1.67,0.2l0.28,-0.12l0.69,-0.98l2.04,-0.94l0.86,0.73l0.19,0.07l1.1,0.0l-1.82,2.36l-0.06,0.18l0.03,9.12Z",
      "name": "Kenya"
    },
    "SS": {
      "path": "M505.7,261.39l0.02,1.64l-0.27,0.55l-1.15,0.05l-0.24,0.15l-0.85,1.44l0.22,0.45l1.44,0.17l1.15,1.12l0.42,0.95l0.14,0.15l1.06,0.54l1.33,2.45l-3.06,2.98l-1.44,1.08l-1.75,0.01l-1.92,0.56l-1.5,-0.53l-0.27,0.03l-0.85,0.57l-1.98,-1.5l-0.56,-1.02l-0.37,-0.13l-1.32,0.5l-1.08,-0.15l-0.2,0.04l-0.56,0.35l-0.9,-0.24l-1.44,-1.97l-0.39,-0.77l-0.13,-0.13l-1.78,-0.94l-0.65,-1.5l-1.08,-1.12l-1.57,-1.22l-0.02,-0.68l-0.12,-0.23l-1.37,-1.02l-1.17,-0.68l0.2,-0.08l0.86,-0.48l0.14,-0.18l0.63,-2.22l0.6,-1.02l1.47,-0.28l0.35,0.56l1.29,1.48l0.14,0.09l0.69,0.22l0.22,-0.02l0.83,-0.4l1.58,0.08l0.26,0.39l0.25,0.13l2.49,0.0l0.3,-0.25l0.06,-0.35l1.13,-0.42l0.18,-0.18l0.22,-0.63l0.68,-0.38l1.95,1.37l0.23,0.05l1.29,-0.26l0.19,-0.12l1.23,-1.8l1.36,-1.37l0.08,-0.25l-0.21,-1.52l-0.06,-0.15l-0.25,-0.3l0.94,-0.08l0.26,-0.21l0.1,-0.32l0.6,0.09l-0.25,1.67l0.3,1.83l0.11,0.19l1.22,0.94l0.25,0.73l-0.04,1.2l0.26,0.31l0.09,0.01Z",
      "name": "South Sudan"
    },
    "SR": {
      "path": "M278.1,270.26l2.71,0.45l0.31,-0.14l0.19,-0.32l1.82,-0.16l2.25,0.56l-1.09,1.81l-0.04,0.19l0.2,1.72l0.05,0.13l0.9,1.35l-0.39,0.99l-0.21,1.09l-0.48,0.8l-1.2,-0.44l-0.17,-0.01l-1.12,0.24l-0.95,-0.21l-0.35,0.2l-0.25,0.73l0.05,0.29l0.3,0.35l-0.06,0.13l-1.01,-0.15l-1.42,-2.03l-0.32,-1.36l-0.29,-0.23l-0.63,-0.0l-0.95,-1.56l0.41,-1.16l0.01,-0.17l-0.08,-0.35l1.29,-0.56l0.18,-0.22l0.35,-1.97Z",
      "name": "Suriname"
    },
    "KH": {
      "path": "M680.28,257.89l-0.93,-1.2l-1.24,-2.56l-0.56,-2.9l1.45,-1.92l3.07,-0.46l2.26,0.35l2.03,0.98l0.38,-0.11l1.0,-1.55l1.86,0.79l0.52,1.51l-0.28,2.82l-4.05,1.88l-0.12,0.45l0.79,1.1l-2.2,0.17l-2.08,0.98l-1.89,-0.33Z",
      "name": "Cambodia"
    },
    "SV": {
      "path": "M197.02,248.89l0.18,-0.05l0.59,0.17l0.55,0.51l0.64,0.35l0.06,0.22l0.37,0.21l1.01,-0.28l0.38,0.13l0.16,0.13l-0.14,0.81l-0.18,0.38l-1.22,-0.03l-0.84,-0.23l-1.11,-0.52l-1.31,-0.15l-0.49,-0.38l0.02,-0.08l0.76,-0.57l0.46,-0.27l0.11,-0.35Z",
      "name": "El Salvador"
    },
    "SK": {
      "path": "M468.01,150.02l0.05,0.07l0.36,0.1l0.85,-0.37l1.12,1.02l0.33,0.05l1.38,-0.65l1.07,0.3l0.16,0.0l1.69,-0.43l1.95,1.02l-0.51,0.64l-0.45,1.2l-0.32,0.2l-2.55,-0.93l-0.17,-0.01l-0.82,0.2l-0.17,0.11l-0.53,0.68l-0.94,0.32l-0.14,-0.11l-0.29,-0.04l-1.18,0.48l-0.95,0.09l-0.26,0.21l-0.15,0.47l-1.84,0.34l-0.82,-0.31l-1.14,-0.73l-0.2,-0.89l0.42,-0.84l0.91,0.05l0.12,-0.02l0.86,-0.33l0.18,-0.21l0.03,-0.13l0.32,-0.1l0.2,-0.22l0.12,-0.55l0.39,-0.1l0.18,-0.13l0.3,-0.45l0.43,-0.0Z",
      "name": "Slovakia"
    },
    "KR": {
      "path": "M737.31,185.72l0.84,0.08l0.27,-0.12l0.89,-1.2l1.63,-0.13l1.1,-0.2l0.21,-0.16l0.12,-0.24l1.86,2.95l0.59,1.79l0.02,3.17l-0.84,1.38l-2.23,0.55l-1.95,1.14l-1.91,0.21l-0.22,-1.21l0.45,-2.07l-0.01,-0.17l-0.99,-2.67l1.54,-0.4l0.17,-0.46l-1.55,-2.24Z",
      "name": "South Korea"
    },
    "SI": {
      "path": "M455.77,159.59l1.79,0.21l0.18,-0.04l1.2,-0.68l2.12,-0.08l0.21,-0.1l0.38,-0.42l0.1,0.01l0.28,0.62l-1.71,0.71l-0.18,0.22l-0.21,1.1l-0.71,0.26l-0.2,0.28l0.01,0.55l-0.59,-0.04l-0.79,-0.47l-0.38,0.06l-0.36,0.41l-0.84,-0.05l0.05,-0.15l-0.56,-1.24l0.21,-1.17Z",
      "name": "Slovenia"
    },
    "KP": {
      "path": "M747.76,172.02l-0.23,-0.04l-0.26,0.08l-1.09,1.02l-0.78,1.06l-0.06,0.19l0.09,1.95l-1.12,0.57l-0.53,0.58l-0.88,0.82l-1.69,0.51l-1.09,0.79l-0.12,0.22l-0.07,1.17l-0.22,0.25l0.09,0.47l0.96,0.46l1.22,1.1l-0.19,0.37l-0.91,0.16l-1.75,0.14l-0.22,0.12l-0.87,1.18l-0.95,-0.09l-0.3,0.18l-0.97,-0.44l-0.39,0.13l-0.25,0.44l-0.29,0.09l-0.03,-0.2l-0.18,-0.23l-0.62,-0.25l-0.43,-0.29l0.52,-0.97l0.52,-0.3l0.13,-0.38l-0.18,-0.42l0.59,-1.47l0.01,-0.21l-0.16,-0.48l-0.22,-0.2l-1.41,-0.31l-0.82,-0.55l1.74,-1.62l2.73,-1.58l1.62,-1.96l0.96,0.76l0.17,0.06l2.17,0.11l0.31,-0.37l-0.32,-1.31l3.61,-1.21l0.16,-0.13l0.79,-1.34l1.25,1.38Z",
      "name": "North Korea"
    },
    "SO": {
      "path": "M543.8,256.48l0.61,-0.05l1.14,-0.37l1.31,-0.25l0.12,-0.05l1.11,-0.81l0.57,-0.0l0.03,0.39l-0.23,1.49l0.01,1.25l-0.52,0.92l-0.7,2.71l-1.19,2.79l-1.54,3.2l-2.13,3.66l-2.12,2.79l-2.92,3.39l-2.47,2.0l-3.76,2.5l-2.33,1.9l-2.77,3.06l-0.61,1.35l-0.28,0.29l-1.22,-1.69l-0.03,-8.92l2.12,-2.76l0.59,-0.68l1.47,-0.04l0.18,-0.06l2.15,-1.71l3.16,-0.11l0.21,-0.09l7.08,-7.55l1.76,-2.12l1.14,-1.57l0.06,-0.18l0.01,-4.67Z",
      "name": "Somalia"
    },
    "SN": {
      "path": "M379.28,250.34l-0.95,-1.82l-0.09,-0.1l-0.83,-0.6l0.62,-0.28l0.13,-0.11l1.21,-1.8l0.6,-1.31l0.71,-0.68l1.09,0.2l0.18,-0.02l1.17,-0.53l1.25,-0.03l1.17,0.73l1.59,0.65l1.47,1.83l1.59,1.7l0.12,1.56l0.49,1.46l0.1,0.14l0.85,0.65l0.18,0.82l-0.08,0.57l-0.13,0.05l-1.29,-0.19l-0.29,0.13l-0.11,0.16l-0.35,0.04l-1.83,-0.61l-5.84,-0.13l-0.12,0.02l-0.6,0.26l-0.87,-0.06l-1.01,0.32l-0.26,-1.26l1.9,0.04l0.16,-0.04l0.54,-0.32l0.37,-0.02l0.15,-0.05l0.78,-0.5l0.92,0.46l0.12,0.03l1.09,0.04l0.15,-0.03l1.08,-0.57l0.11,-0.44l-0.51,-0.74l-0.39,-0.1l-0.76,0.39l-0.62,-0.01l-0.92,-0.58l-0.18,-0.05l-0.79,0.04l-0.2,0.09l-0.48,0.51l-2.41,0.06Z",
      "name": "Senegal"
    },
    "SL": {
      "path": "M392.19,267.53l-0.44,-0.12l-1.73,-0.97l-1.24,-1.28l-0.4,-0.84l-0.27,-1.65l1.21,-1.0l0.09,-0.12l0.27,-0.66l0.32,-0.41l0.56,-0.05l0.16,-0.07l0.5,-0.41l1.75,0.0l0.59,0.77l0.49,0.96l-0.07,0.64l0.04,0.19l0.36,0.58l-0.03,0.84l0.24,0.2l-0.64,0.65l-1.13,1.37l-0.06,0.14l-0.12,0.66l-0.43,0.58Z",
      "name": "Sierra Leone"
    },
    "SB": {
      "path": "M826.74,311.51l0.23,0.29l-0.95,-0.01l-0.39,-0.63l0.65,0.27l0.45,0.09ZM825.01,308.52l-1.18,-1.39l-0.37,-1.06l0.24,0.0l0.82,1.84l0.49,0.6ZM823.21,309.42l-0.44,0.03l-1.43,-0.24l-0.32,-0.24l0.08,-0.5l1.29,0.31l0.72,0.47l0.11,0.18ZM817.9,303.81l2.59,1.44l0.3,0.41l-1.21,-0.66l-1.34,-0.89l-0.34,-0.3ZM813.77,302.4l0.48,0.34l0.1,0.08l-0.33,-0.17l-0.25,-0.25Z",
      "name": "Solomon Islands"
    },
    "SA": {
      "path": "M528.24,243.1l-0.2,-0.69l-0.07,-0.12l-0.69,-0.71l-0.18,-0.94l-0.12,-0.19l-1.24,-0.89l-1.28,-2.09l-0.7,-2.08l-0.07,-0.11l-1.73,-1.79l-0.11,-0.07l-1.03,-0.39l-1.57,-2.36l-0.27,-1.72l0.1,-1.53l-0.03,-0.15l-1.44,-2.93l-1.25,-1.13l-1.34,-0.56l-0.72,-1.33l0.11,-0.49l-0.02,-0.2l-0.7,-1.38l-0.08,-0.1l-0.68,-0.56l-0.97,-1.98l-2.8,-4.03l-0.25,-0.13l-0.85,0.01l0.29,-1.11l0.12,-0.97l0.23,-0.81l2.52,0.39l0.23,-0.06l1.08,-0.84l0.6,-0.95l1.78,-0.35l0.22,-0.17l0.37,-0.83l0.74,-0.42l0.08,-0.46l-2.17,-2.4l4.55,-1.26l0.12,-0.06l0.36,-0.32l2.83,0.71l3.67,1.91l7.04,5.5l0.17,0.06l4.64,0.22l2.06,0.24l0.55,1.15l0.28,0.17l1.56,-0.06l0.9,2.15l0.14,0.15l1.14,0.57l0.39,0.85l0.11,0.13l1.59,1.06l0.12,0.91l-0.23,0.83l0.01,0.18l0.32,0.9l0.07,0.11l0.68,0.7l0.33,0.86l0.37,0.65l0.09,0.1l0.76,0.53l0.25,0.04l0.45,-0.12l0.35,0.75l0.1,0.63l0.96,2.68l0.23,0.19l7.53,1.33l0.27,-0.09l0.24,-0.26l0.87,1.41l-1.58,4.96l-7.34,2.54l-7.28,1.02l-2.34,1.17l-0.12,0.1l-1.74,2.63l-0.86,0.32l-0.49,-0.68l-0.28,-0.12l-0.92,0.12l-2.32,-0.25l-0.41,-0.23l-0.15,-0.04l-2.89,0.06l-0.63,0.2l-0.91,-0.59l-0.43,0.11l-0.66,1.27l-0.03,0.21l0.21,0.89l-0.6,0.45Z",
      "name": "Saudi Arabia"
    },
    "SE": {
      "path": "M476.42,90.44l-0.15,0.1l-2.43,2.86l-0.07,0.24l0.36,2.31l-3.84,3.1l-4.83,3.38l-0.11,0.15l-1.82,5.45l0.03,0.26l1.78,2.68l2.27,1.99l-2.13,3.88l-2.49,0.82l-0.2,0.24l-0.95,6.05l-1.32,3.09l-2.82,-0.32l-0.3,0.16l-1.34,2.64l-2.48,0.14l-0.76,-3.15l-2.09,-4.04l-1.85,-5.01l1.03,-1.98l2.06,-2.53l0.06,-0.13l0.83,-4.45l-0.06,-0.25l-1.54,-1.86l-0.15,-5.0l1.52,-3.48l2.28,0.06l0.27,-0.16l0.87,-1.59l-0.01,-0.31l-0.8,-1.21l3.79,-5.63l4.07,-7.54l2.23,0.01l0.29,-0.22l0.59,-2.15l4.46,0.66l0.34,-0.26l0.34,-2.64l1.21,-0.14l3.24,2.08l3.78,2.85l0.06,6.37l0.03,0.14l0.67,1.29l-3.95,1.07Z",
      "name": "Sweden"
    },
    "SD": {
      "path": "M505.98,259.75l-0.31,-0.9l-0.1,-0.14l-1.2,-0.93l-0.27,-1.66l0.29,-1.83l-0.25,-0.34l-1.16,-0.17l-0.33,0.21l-0.11,0.37l-1.3,0.11l-0.21,0.49l0.55,0.68l0.18,1.29l-1.31,1.33l-1.18,1.72l-1.04,0.21l-2.0,-1.4l-0.32,-0.02l-0.95,0.52l-0.14,0.16l-0.21,0.6l-1.16,0.43l-0.19,0.23l-0.04,0.27l-2.08,0.0l-0.25,-0.39l-0.24,-0.13l-1.81,-0.09l-0.14,0.03l-0.8,0.38l-0.49,-0.16l-1.22,-1.39l-0.42,-0.67l-0.31,-0.14l-1.81,0.35l-0.2,0.14l-0.72,1.24l-0.61,2.14l-0.73,0.4l-0.62,0.22l-0.83,-0.68l-0.12,-0.6l0.38,-0.97l0.01,-1.14l-0.08,-0.2l-1.39,-1.53l-0.25,-0.97l0.03,-0.57l-0.11,-0.25l-0.81,-0.66l-0.03,-1.34l-0.04,-0.14l-0.52,-0.98l-0.31,-0.15l-0.42,0.07l0.12,-0.44l0.63,-1.03l0.03,-0.23l-0.24,-0.88l0.69,-0.66l0.02,-0.41l-0.4,-0.46l0.58,-1.39l1.04,-1.71l1.97,0.16l0.32,-0.3l-0.12,-10.24l0.02,-0.8l2.59,-0.01l0.3,-0.3l0.0,-4.92l29.19,0.0l0.68,2.17l-0.4,0.35l-0.1,0.27l0.36,2.69l0.93,3.15l0.12,0.16l2.05,1.4l-0.99,1.15l-1.75,0.4l-0.15,0.08l-0.79,0.79l-0.08,0.17l-0.24,1.69l-1.07,3.75l-0.0,0.16l0.25,0.96l-0.38,2.1l-0.98,2.41l-1.52,1.3l-1.07,1.94l-0.25,0.99l-1.08,0.64l-0.13,0.18l-0.46,1.65Z",
      "name": "Sudan"
    },
    "DO": {
      "path": "M241.7,234.97l0.15,-0.22l1.73,0.01l1.43,0.64l0.15,0.03l0.45,-0.04l0.36,0.74l0.28,0.17l1.02,-0.04l-0.04,0.43l0.27,0.33l1.03,0.09l0.91,0.7l-0.57,0.64l-0.99,-0.47l-0.16,-0.03l-1.11,0.11l-0.79,-0.12l-0.26,0.09l-0.38,0.4l-0.66,0.11l-0.28,-0.45l-0.38,-0.12l-0.83,0.37l-0.14,0.13l-0.85,1.49l-0.27,-0.17l-0.1,-0.58l0.05,-0.67l-0.07,-0.21l-0.44,-0.53l0.35,-0.25l0.12,-0.19l0.19,-1.0l-0.2,-1.4Z",
      "name": "Dominican Republic"
    },
    "DJ": {
      "path": "M528.78,253.36l0.34,0.45l-0.06,0.76l-1.26,0.54l-0.05,0.53l0.82,0.53l-0.57,0.83l-0.3,-0.25l-0.27,-0.05l-0.56,0.17l-1.07,-0.03l-0.04,-0.56l-0.16,-0.56l0.76,-1.07l0.76,-0.97l0.89,0.18l0.25,-0.06l0.51,-0.42Z",
      "name": "Djibouti"
    },
    "DK": {
      "path": "M452.4,129.07l-1.27,2.39l-2.25,-1.69l-0.26,-1.08l3.15,-1.0l0.63,1.39ZM447.87,126.25l-0.35,0.76l-0.47,-0.24l-0.38,0.09l-1.8,2.53l-0.03,0.29l0.56,1.4l-1.22,0.4l-1.68,-0.41l-0.92,-1.76l-0.07,-3.47l0.38,-0.88l0.62,-0.93l2.07,-0.21l0.19,-0.1l0.84,-0.95l1.5,-0.76l-0.06,1.26l-0.7,1.1l-0.03,0.25l0.3,1.0l0.18,0.19l1.06,0.42Z",
      "name": "Denmark"
    },
    "DE": {
      "path": "M445.51,131.69l0.03,0.94l0.21,0.28l2.32,0.74l-0.02,1.0l0.37,0.3l2.55,-0.65l1.36,-0.89l2.63,1.27l1.09,1.01l0.51,1.51l-0.6,0.78l-0.0,0.36l0.88,1.17l0.58,1.68l-0.18,1.08l0.03,0.18l0.87,1.81l-0.66,0.2l-0.55,-0.32l-0.36,0.05l-0.58,0.58l-1.73,0.62l-0.99,0.84l-1.77,0.7l-0.16,0.4l0.42,0.94l0.26,1.34l0.14,0.2l1.25,0.76l1.22,1.2l-0.71,1.2l-0.81,0.37l-0.17,0.32l0.34,1.99l-0.04,0.09l-0.47,-0.39l-0.17,-0.07l-1.2,-0.1l-1.85,0.57l-2.15,-0.13l-0.29,0.18l-0.21,0.5l-0.96,-0.67l-0.24,-0.05l-0.67,0.16l-2.6,-0.94l-0.34,0.1l-0.42,0.57l-1.64,-0.02l0.26,-1.88l1.24,-2.15l-0.21,-0.45l-3.54,-0.58l-0.98,-0.71l0.12,-1.26l-0.05,-0.2l-0.44,-0.64l0.27,-2.18l-0.38,-3.14l1.17,-0.0l0.27,-0.17l0.63,-1.26l0.65,-3.17l-0.02,-0.17l-0.41,-1.0l0.32,-0.47l1.77,-0.16l0.37,0.6l0.47,0.06l1.7,-1.69l0.06,-0.33l-0.55,-1.24l-0.09,-1.51l1.5,0.36l0.16,-0.01l1.22,-0.4Z",
      "name": "Germany"
    },
    "YE": {
      "path": "M553.53,242.65l-1.51,0.58l-0.17,0.16l-0.48,1.14l-0.07,0.79l-2.31,1.0l-3.98,1.19l-2.28,1.8l-0.97,0.12l-0.7,-0.14l-0.23,0.05l-1.42,1.03l-1.51,0.47l-2.07,0.13l-0.68,0.15l-0.17,0.1l-0.49,0.6l-0.57,0.16l-0.18,0.13l-0.3,0.49l-1.06,-0.05l-0.13,0.02l-0.73,0.32l-1.48,-0.11l-0.55,-1.26l0.07,-1.32l-0.04,-0.16l-0.39,-0.72l-0.48,-1.85l-0.52,-0.79l0.08,-0.02l0.22,-0.36l-0.23,-1.05l0.24,-0.39l0.04,-0.19l-0.09,-0.95l0.96,-0.72l0.11,-0.31l-0.23,-0.98l0.46,-0.88l0.75,0.49l0.26,0.03l0.63,-0.22l2.76,-0.06l0.5,0.25l2.42,0.26l0.85,-0.11l0.52,0.71l0.35,0.1l1.17,-0.43l0.15,-0.12l1.75,-2.64l2.22,-1.11l6.95,-0.96l2.55,5.58Z",
      "name": "Yemen"
    },
    "AT": {
      "path": "M463.17,154.15l-0.14,0.99l-1.15,0.01l-0.24,0.47l0.39,0.56l-0.75,1.84l-0.36,0.4l-2.06,0.07l-0.14,0.04l-1.18,0.67l-1.96,-0.23l-3.43,-0.78l-0.5,-0.97l-0.33,-0.16l-2.47,0.55l-0.2,0.16l-0.18,0.37l-1.27,-0.38l-1.28,-0.09l-0.81,-0.41l0.25,-0.51l0.03,-0.18l-0.05,-0.28l0.35,-0.08l1.16,0.81l0.45,-0.13l0.27,-0.64l2.0,0.12l1.84,-0.57l1.05,0.09l0.71,0.59l0.47,-0.11l0.23,-0.54l0.02,-0.17l-0.32,-1.85l0.69,-0.31l0.13,-0.12l0.73,-1.23l1.61,0.89l0.35,-0.04l1.35,-1.27l0.7,-0.19l1.84,0.93l0.18,0.03l1.08,-0.15l0.81,0.43l-0.07,0.15l-0.02,0.2l0.24,1.06Z",
      "name": "Austria"
    },
    "DZ": {
      "path": "M450.58,224.94l-8.31,4.86l-7.23,5.12l-3.46,1.13l-2.42,0.22l-0.02,-1.33l-0.2,-0.28l-1.15,-0.42l-1.45,-0.69l-0.55,-1.13l-0.1,-0.12l-8.45,-5.72l-17.72,-12.17l0.03,-0.38l-0.02,-3.21l3.84,-1.91l2.46,-0.41l2.1,-0.75l0.14,-0.11l0.9,-1.3l2.84,-1.06l0.19,-0.27l0.09,-1.81l1.21,-0.2l0.15,-0.07l1.06,-0.96l3.19,-0.46l0.23,-0.18l0.46,-1.08l-0.08,-0.34l-0.6,-0.54l-0.83,-2.85l-0.18,-1.8l-0.82,-1.57l2.13,-1.37l2.65,-0.49l0.13,-0.05l1.55,-1.15l2.34,-0.85l4.2,-0.51l4.07,-0.23l1.21,0.41l0.23,-0.01l2.3,-1.11l2.52,-0.02l0.94,0.62l0.2,0.05l1.25,-0.13l-0.36,1.03l-0.01,0.14l0.39,2.66l-0.56,2.2l-1.49,1.52l-0.08,0.24l0.22,2.12l0.11,0.2l1.94,1.58l0.02,0.54l0.12,0.23l1.45,1.06l1.04,4.85l0.81,2.42l0.13,1.19l-0.43,2.17l0.17,1.28l-0.31,1.53l0.2,1.56l-0.9,1.02l-0.01,0.38l1.43,1.88l0.09,1.06l0.04,0.13l0.89,1.48l0.37,0.12l1.03,-0.43l1.79,1.12l0.89,1.34Z",
      "name": "Algeria"
    },
    "US": {
      "path": "M892.64,99.05l1.16,0.57l0.21,0.02l1.45,-0.38l1.92,0.99l2.17,0.47l-1.65,0.72l-1.75,-0.79l-0.93,-0.7l-0.21,-0.06l-2.11,0.22l-0.35,-0.2l0.09,-0.87ZM183.29,150.37l0.39,1.54l0.12,0.17l0.78,0.55l0.14,0.05l1.74,0.2l2.52,0.5l2.4,0.98l0.17,0.02l1.96,-0.4l3.01,0.81l0.91,-0.02l2.22,-0.88l4.67,2.33l3.86,2.01l0.21,0.71l0.15,0.18l0.33,0.17l-0.02,0.05l0.23,0.43l0.67,0.1l0.21,-0.05l0.1,-0.07l0.05,0.29l0.09,0.16l0.5,0.5l0.21,0.09l0.56,0.0l0.13,0.13l-0.2,0.36l0.12,0.41l2.49,1.39l0.99,5.24l-0.69,1.68l-1.16,1.64l-0.6,1.18l-0.06,0.31l0.04,0.22l0.28,0.43l0.11,0.1l0.85,0.47l0.15,0.04l0.63,0.0l0.14,-0.04l2.87,-1.58l2.6,-0.49l3.28,-1.5l0.17,-0.23l0.04,-0.43l-0.23,-0.93l-0.24,-0.39l0.74,-0.32l4.7,-0.01l0.25,-0.13l0.77,-1.15l2.9,-2.41l1.04,-0.52l8.35,-0.02l0.28,-0.21l0.2,-0.6l0.7,-0.14l1.06,-0.48l0.13,-0.11l0.92,-1.49l0.75,-2.39l1.67,-2.08l0.59,0.6l0.3,0.07l1.52,-0.49l0.88,0.72l-0.0,4.14l0.08,0.2l1.6,1.72l0.31,0.72l-2.42,1.35l-2.55,1.05l-2.64,0.9l-0.14,0.11l-1.33,1.81l-0.44,0.7l-0.05,0.15l-0.03,1.6l0.03,0.14l0.83,1.59l0.24,0.16l0.78,0.06l-1.15,0.33l-1.25,-0.04l-1.83,0.52l-2.51,0.29l-2.17,0.88l-0.17,0.36l0.33,0.22l3.55,-0.54l0.15,0.11l-2.87,0.73l-1.19,0.0l-0.16,-0.33l-0.36,0.06l-0.76,0.82l0.17,0.5l0.42,0.08l-0.45,1.75l-1.4,1.74l-0.04,-0.17l-0.21,-0.22l-0.48,-0.13l-0.77,-0.69l-0.36,-0.03l-0.12,0.34l0.52,1.58l0.09,0.14l0.52,0.43l0.03,0.87l-0.74,1.05l-0.39,0.63l0.05,-0.12l-0.08,-0.34l-1.19,-1.03l-0.28,-2.31l-0.26,-0.26l-0.32,0.19l-0.48,1.27l-0.01,0.19l0.39,1.33l-1.14,-0.31l-0.36,0.18l0.14,0.38l1.57,0.85l0.1,2.58l0.22,0.28l0.55,0.15l0.21,0.81l0.33,2.72l-1.46,1.94l-2.5,0.81l-0.12,0.07l-1.58,1.58l-1.15,0.17l-0.15,0.06l-1.27,1.03l-0.09,0.13l-0.32,0.85l-2.71,1.79l-1.45,1.37l-1.18,1.64l-0.05,0.12l-0.39,1.96l0.0,0.13l0.44,1.91l0.85,2.37l1.1,1.91l0.03,1.2l1.16,3.07l-0.08,1.74l-0.1,0.99l-0.57,1.48l-0.54,0.24l-0.97,-0.26l-0.34,-1.02l-0.12,-0.16l-0.89,-0.58l-2.44,-4.28l-0.34,-0.94l0.49,-1.71l-0.02,-0.21l-0.7,-1.5l-2.0,-2.35l-0.11,-0.08l-0.98,-0.42l-0.25,0.01l-2.42,1.19l-0.26,-0.08l-1.26,-1.29l-1.57,-0.68l-0.16,-0.02l-2.79,0.34l-2.18,-0.3l-1.98,0.19l-1.12,0.45l-0.14,0.44l0.4,0.65l-0.04,1.02l0.09,0.22l0.29,0.3l-0.06,0.05l-0.77,-0.33l-0.26,0.01l-0.87,0.48l-1.64,-0.08l-1.79,-1.39l-0.23,-0.06l-2.11,0.33l-1.75,-0.61l-0.14,-0.01l-1.61,0.2l-2.11,0.64l-0.11,0.06l-2.25,1.99l-2.53,1.21l-1.43,1.38l-0.58,1.22l-0.03,0.12l-0.03,1.86l0.13,1.32l0.3,0.62l-0.46,0.04l-1.71,-0.57l-1.85,-0.79l-0.63,-1.14l-0.54,-1.85l-0.07,-0.12l-1.45,-1.51l-0.86,-1.58l-1.26,-1.87l-0.09,-0.09l-1.76,-1.09l-0.17,-0.04l-2.05,0.05l-0.23,0.12l-1.44,1.97l-1.84,-0.72l-1.19,-0.76l-0.6,-1.45l-0.9,-1.52l-1.49,-1.21l-1.27,-0.87l-0.89,-0.96l-0.22,-0.1l-4.34,-0.0l-0.3,0.3l-0.0,0.84l-6.62,0.02l-5.66,-1.93l-3.48,-1.24l0.11,-0.25l-0.3,-0.42l-3.18,0.3l-2.6,0.2l-0.35,-1.19l-0.08,-0.13l-1.62,-1.61l-0.13,-0.08l-1.02,-0.29l-0.22,-0.66l-0.25,-0.2l-1.31,-0.13l-0.82,-0.7l-0.16,-0.07l-2.25,-0.27l-0.48,-0.34l-0.28,-1.44l-0.07,-0.14l-2.41,-2.84l-2.03,-3.89l0.08,-0.58l-0.1,-0.27l-1.08,-0.94l-1.87,-2.36l-0.33,-2.31l-0.07,-0.15l-1.24,-1.5l0.52,-2.4l-0.09,-2.57l-0.78,-2.3l0.96,-2.83l0.61,-5.66l-0.46,-4.26l-0.79,-2.71l-0.68,-1.4l0.13,-0.26l3.24,0.97l1.28,2.88l0.52,0.06l0.62,-0.84l0.06,-0.22l-0.4,-2.61l-0.74,-2.29l68.9,-0.0l0.3,-0.3l0.01,-0.95l0.32,-0.01ZM32.5,67.43l1.75,1.99l0.41,0.04l1.02,-0.81l3.79,0.25l-0.1,0.72l0.24,0.34l3.83,0.77l2.6,-0.44l5.21,1.41l4.84,0.43l1.9,0.57l0.15,0.01l3.25,-0.71l3.72,1.32l2.52,0.58l-0.03,38.14l0.29,0.3l2.41,0.11l2.34,1.0l1.7,1.59l2.22,2.42l0.42,0.03l2.41,-2.04l2.25,-1.08l1.23,1.76l1.71,1.53l2.24,1.62l1.54,2.56l2.56,4.09l0.11,0.11l4.1,2.17l0.06,1.93l-1.12,1.35l-1.22,-1.14l-2.08,-1.05l-0.68,-2.94l-0.09,-0.16l-3.18,-2.84l-1.32,-3.35l-0.25,-0.19l-2.43,-0.24l-3.93,-0.09l-2.85,-1.02l-5.24,-3.85l-6.77,-2.04l-3.52,0.3l-4.84,-1.7l-2.96,-1.6l-0.23,-0.02l-2.78,0.8l-0.21,0.35l0.46,2.31l-1.11,0.19l-2.9,0.78l-2.24,1.26l-2.42,0.68l-0.29,-1.79l1.07,-3.49l2.54,-1.11l0.12,-0.45l-0.69,-0.96l-0.41,-0.07l-3.19,2.12l-1.76,2.54l-3.57,2.62l-0.03,0.46l1.63,1.59l-2.14,2.38l-2.64,1.49l-2.49,1.09l-0.16,0.17l-0.58,1.48l-3.8,1.79l-0.14,0.14l-0.75,1.57l-2.75,1.41l-1.62,-0.25l-0.16,0.02l-2.35,0.98l-2.54,1.19l-2.06,1.15l-4.05,0.93l-0.1,-0.15l2.45,-1.45l2.49,-1.1l2.61,-1.88l3.03,-0.39l0.19,-0.1l1.2,-1.41l3.43,-2.11l0.61,-0.75l1.81,-1.24l0.13,-0.2l0.42,-2.7l1.24,-2.12l-0.03,-0.35l-0.34,-0.09l-2.73,1.05l-0.67,-0.53l-0.39,0.02l-1.13,1.11l-1.43,-1.62l-0.49,0.06l-0.41,0.8l-0.67,-1.31l-0.42,-0.12l-2.43,1.43l-1.18,-0.0l-0.18,-1.86l0.43,-1.3l-0.09,-0.33l-1.61,-1.33l-0.26,-0.06l-3.11,0.68l-2.0,-1.66l-1.61,-0.85l-0.01,-1.97l-0.11,-0.23l-1.76,-1.48l0.86,-1.96l2.01,-2.13l0.88,-1.94l1.79,-0.25l1.65,0.6l0.31,-0.06l1.91,-1.8l1.67,0.31l0.22,-0.04l1.91,-1.23l0.13,-0.33l-0.47,-1.82l-0.15,-0.19l-1.0,-0.52l1.51,-1.27l0.09,-0.34l-0.29,-0.19l-1.62,0.06l-2.66,0.88l-0.13,0.09l-0.62,0.72l-1.77,-0.8l-0.16,-0.02l-3.48,0.44l-3.5,-0.92l-1.06,-1.61l-2.78,-2.09l3.07,-1.51l5.52,-2.01l1.65,0.0l-0.28,1.73l0.31,0.35l5.29,-0.16l0.23,-0.49l-2.03,-2.59l-0.1,-0.08l-3.03,-1.58l-1.79,-2.12l-2.4,-1.83l-3.18,-1.27l1.13,-1.84l4.28,-0.14l0.15,-0.05l3.16,-2.0l0.13,-0.17l0.57,-2.07l2.43,-2.02l2.42,-0.52l4.67,-1.98l2.22,0.29l0.2,-0.04l3.74,-2.37l3.57,0.91ZM37.66,123.49l-2.31,1.26l-1.04,-0.75l-0.31,-1.35l2.06,-1.16l1.24,-0.51l1.48,0.22l0.76,0.81l-1.89,1.49ZM30.89,233.84l1.2,0.57l0.35,0.3l0.48,0.69l-1.6,0.86l-0.3,0.31l-0.24,-0.14l0.05,-0.54l-0.02,-0.15l-0.36,-0.83l0.05,-0.12l0.39,-0.38l0.07,-0.31l-0.09,-0.27ZM29.06,231.89l0.5,0.14l0.31,0.19l-0.46,0.1l-0.34,-0.43ZM25.02,230.13l0.2,-0.11l0.4,0.47l-0.43,-0.05l-0.17,-0.31ZM21.29,228.68l0.1,-0.07l0.22,0.02l0.02,0.21l-0.02,0.02l-0.32,-0.18ZM6.0,113.33l-1.19,0.45l-1.5,-0.64l-0.94,-0.63l1.76,-0.46l1.71,0.29l0.16,0.98Z",
      "name": "United States of America"
    },
    "LV": {
      "path": "M473.99,127.16l0.07,-2.15l1.15,-2.11l2.05,-1.07l1.84,2.48l0.25,0.12l2.01,-0.07l0.29,-0.25l0.45,-2.58l1.85,-0.56l0.98,0.4l2.13,1.33l0.16,0.05l1.97,0.01l1.02,0.7l0.21,1.67l0.71,1.84l-2.44,1.23l-1.36,0.53l-2.28,-1.62l-0.12,-0.05l-1.18,-0.2l-0.28,-0.6l-0.31,-0.17l-2.43,0.35l-4.17,-0.23l-0.12,0.02l-2.45,0.93Z",
      "name": "Latvia"
    },
    "UY": {
      "path": "M276.9,363.17l1.3,-0.23l2.4,2.04l0.22,0.07l0.82,-0.07l2.48,1.7l1.93,1.5l1.28,1.67l-0.95,1.14l-0.04,0.31l0.63,1.45l-0.96,1.57l-2.65,1.47l-1.73,-0.53l-0.15,-0.01l-1.25,0.28l-2.22,-1.16l-0.16,-0.03l-1.56,0.08l-1.33,-1.36l0.17,-1.58l0.48,-0.55l0.07,-0.2l-0.02,-2.74l0.66,-2.8l0.57,-2.02Z",
      "name": "Uruguay"
    },
    "LB": {
      "path": "M510.44,198.11l-0.48,0.03l-0.26,0.17l-0.15,0.32l-0.21,-0.0l0.72,-1.85l1.19,-1.9l0.74,0.09l0.27,0.73l-1.19,0.93l-0.09,0.13l-0.54,1.36Z",
      "name": "Lebanon"
    },
    "LA": {
      "path": "M684.87,248.8l0.61,-0.86l0.05,-0.16l0.11,-2.17l-0.08,-0.22l-1.96,-2.16l-0.15,-2.44l-0.08,-0.18l-1.9,-2.1l-0.19,-0.1l-1.89,-0.18l-0.29,0.15l-0.42,0.76l-1.21,0.06l-0.67,-0.41l-0.31,-0.0l-2.2,1.29l-0.05,-1.77l0.61,-2.7l-0.27,-0.37l-1.44,-0.1l-0.12,-1.31l-0.12,-0.21l-0.87,-0.65l0.38,-0.68l1.76,-1.41l0.08,0.22l0.27,0.2l1.33,0.07l0.31,-0.34l-0.35,-2.75l0.85,-0.25l1.32,1.88l1.11,2.36l0.27,0.17l2.89,0.02l0.78,1.82l-1.32,0.56l-0.12,0.09l-0.72,0.93l0.1,0.45l2.93,1.52l3.62,5.27l1.88,1.78l0.58,1.67l-0.38,2.11l-1.87,-0.79l-0.37,0.11l-0.99,1.54l-1.51,-0.73Z",
      "name": "Laos"
    },
    "TW": {
      "path": "M725.6,222.5l-1.5,4.22l-0.82,1.65l-1.01,-1.7l-0.26,-1.8l1.4,-2.48l1.8,-1.81l0.76,0.53l-0.38,1.39Z",
      "name": "Taiwan"
    },
    "TT": {
      "path": "M266.35,259.46l0.41,-0.39l0.09,-0.23l-0.04,-0.75l1.14,-0.26l0.2,0.03l-0.07,1.37l-1.73,0.23Z",
      "name": "Trinidad and Tobago"
    },
    "TR": {
      "path": "M513.25,175.38l3.63,1.17l0.14,0.01l2.88,-0.45l2.11,0.26l0.18,-0.03l2.9,-1.53l2.51,-0.13l2.25,1.37l0.36,0.88l-0.23,1.36l0.19,0.33l1.81,0.72l0.61,0.53l-1.31,0.64l-0.16,0.34l0.76,3.24l-0.44,0.8l0.01,0.3l1.19,2.02l-0.71,0.29l-0.74,-0.62l-0.15,-0.07l-2.91,-0.37l-0.15,0.02l-1.04,0.43l-2.78,0.44l-1.44,-0.03l-2.83,1.06l-1.95,0.01l-1.28,-0.52l-0.2,-0.01l-2.62,0.76l-0.7,-0.48l-0.47,0.22l-0.13,1.49l-1.01,0.94l-0.58,-0.82l0.79,-0.9l0.04,-0.34l-0.31,-0.15l-1.46,0.23l-2.03,-0.64l-0.3,0.07l-1.65,1.58l-3.58,0.3l-1.94,-1.47l-0.17,-0.06l-2.7,-0.1l-0.28,0.17l-0.51,1.06l-1.47,0.29l-2.32,-1.46l-0.17,-0.05l-2.55,0.05l-1.4,-2.7l-1.72,-1.54l1.11,-2.06l-0.07,-0.37l-1.35,-1.19l2.47,-2.51l3.74,-0.11l0.26,-0.17l0.96,-2.07l4.56,0.38l0.19,-0.05l2.97,-1.92l2.84,-0.83l4.03,-0.06l4.31,2.08ZM488.85,176.8l-1.81,1.38l-0.57,-1.01l0.02,-0.36l0.45,-0.25l0.13,-0.15l0.78,-1.87l-0.11,-0.37l-0.72,-0.47l1.91,-0.71l1.89,0.35l0.25,0.97l0.17,0.2l1.87,0.83l-0.19,0.31l-2.82,0.16l-0.18,0.07l-1.06,0.91Z",
      "name": "Turkey"
    },
    "LK": {
      "path": "M625.44,266.07l-0.35,2.4l-0.9,0.61l-1.91,0.5l-1.04,-1.75l-0.43,-3.5l1.0,-3.6l1.34,1.09l1.13,1.72l1.16,2.52Z",
      "name": "Sri Lanka"
    },
    "TN": {
      "path": "M444.91,206.18l-0.99,-4.57l-0.12,-0.18l-1.43,-1.04l-0.02,-0.53l-0.11,-0.22l-1.95,-1.59l-0.19,-1.85l1.44,-1.47l0.08,-0.14l0.59,-2.34l-0.38,-2.77l0.44,-1.28l2.52,-1.08l1.41,0.28l-0.06,1.2l0.43,0.28l1.81,-0.9l0.02,0.06l-1.14,1.28l-0.08,0.2l-0.02,1.32l0.11,0.24l0.74,0.6l-0.29,2.18l-1.56,1.35l-0.09,0.32l0.48,1.54l0.28,0.21l1.11,0.04l0.55,1.17l0.15,0.14l0.76,0.35l-0.12,1.79l-1.1,0.72l-0.8,0.91l-1.68,1.04l-0.13,0.32l0.25,1.08l-0.18,0.96l-0.74,0.39Z",
      "name": "Tunisia"
    },
    "TL": {
      "path": "M734.21,307.22l0.17,-0.34l1.99,-0.52l1.72,-0.08l0.78,-0.3l0.29,0.1l-0.43,0.32l-2.57,1.09l-1.71,0.59l-0.05,-0.49l-0.19,-0.36Z",
      "name": "East Timor"
    },
    "TM": {
      "path": "M553.16,173.51l-0.12,1.0l-0.26,-0.65l0.38,-0.34ZM553.54,173.16l0.13,-0.12l0.43,-0.09l-0.56,0.21ZM555.68,172.6l0.65,-0.14l1.53,0.76l1.71,2.29l0.27,0.12l1.27,-0.14l2.81,-0.04l0.29,-0.38l-0.35,-1.27l1.98,-0.97l1.96,-1.63l3.05,1.44l0.25,2.23l0.14,0.22l0.96,0.61l0.18,0.05l2.61,-0.13l0.68,0.44l1.2,2.97l0.1,0.13l2.85,2.03l1.67,1.41l2.66,1.45l3.13,1.17l-0.05,1.23l-0.36,-0.04l-1.12,-0.73l-0.44,0.14l-0.34,0.89l-1.96,0.52l-0.22,0.23l-0.47,2.17l-1.26,0.78l-1.93,0.42l-0.21,0.18l-0.46,1.14l-1.64,0.33l-2.3,-0.97l-0.2,-2.23l-0.28,-0.27l-1.76,-0.1l-2.78,-2.48l-0.15,-0.07l-1.95,-0.31l-2.82,-1.48l-1.78,-0.27l-0.18,0.03l-1.03,0.51l-1.6,-0.08l-0.22,0.08l-1.72,1.6l-1.83,0.46l-0.39,-1.7l0.36,-3.0l-0.16,-0.3l-1.73,-0.88l0.57,-1.77l-0.25,-0.39l-1.33,-0.14l0.41,-1.85l2.05,0.63l0.21,-0.01l2.2,-0.95l0.09,-0.49l-1.78,-1.75l-0.69,-1.66l-0.07,-0.03Z",
      "name": "Turkmenistan"
    },
    "TJ": {
      "path": "M597.99,178.71l-0.23,0.23l-2.57,-0.47l-0.35,0.25l-0.24,1.7l0.32,0.34l2.66,-0.22l3.15,0.95l4.47,-0.42l0.58,2.45l0.39,0.21l0.71,-0.25l1.22,0.53l-0.06,1.01l0.29,1.28l-2.19,-0.0l-1.71,-0.21l-0.23,0.07l-1.51,1.25l-1.05,0.27l-0.77,0.51l-0.71,-0.67l0.22,-2.28l-0.24,-0.32l-0.43,-0.08l0.17,-0.57l-0.16,-0.36l-1.36,-0.66l-0.34,0.05l-1.08,1.01l-0.09,0.15l-0.25,1.09l-0.24,0.26l-1.36,-0.05l-0.27,0.14l-0.65,1.06l-0.58,-0.39l-0.3,-0.02l-1.68,0.86l-0.36,-0.16l1.28,-2.65l0.02,-0.2l-0.54,-2.17l-0.18,-0.21l-1.53,-0.58l0.41,-0.82l1.89,0.13l0.26,-0.12l1.19,-1.63l0.77,-1.82l2.66,-0.55l-0.33,0.87l0.01,0.23l0.36,0.82l0.3,0.18l0.23,-0.02Z",
      "name": "Tajikistan"
    },
    "LS": {
      "path": "M493.32,359.69l0.69,0.65l-0.65,1.12l-0.38,0.8l-1.27,0.39l-0.18,0.15l-0.4,0.77l-0.59,0.18l-1.59,-1.78l1.16,-1.5l1.3,-1.02l0.97,-0.46l0.94,0.72Z",
      "name": "Lesotho"
    },
    "TH": {
      "path": "M677.42,253.68l-1.7,-0.88l-0.14,-0.03l-1.77,0.04l0.3,-1.64l-0.3,-0.35l-2.21,0.01l-0.3,0.28l-0.2,2.76l-2.15,5.9l-0.02,0.13l0.17,1.83l0.28,0.27l1.45,0.07l0.93,2.1l0.44,2.15l0.08,0.15l1.4,1.44l0.16,0.09l1.43,0.27l1.04,1.05l-0.58,0.73l-1.24,0.22l-0.15,-0.99l-0.15,-0.22l-2.04,-1.1l-0.36,0.06l-0.23,0.23l-0.72,-0.71l-0.41,-1.18l-0.06,-0.11l-1.33,-1.42l-1.22,-1.2l-0.5,0.13l-0.15,0.54l-0.14,-0.41l0.26,-1.48l0.73,-2.38l1.2,-2.57l1.37,-2.35l0.02,-0.27l-0.95,-2.26l0.03,-1.19l-0.29,-1.42l-0.06,-0.13l-1.65,-2.0l-0.46,-0.99l0.62,-0.34l0.13,-0.15l0.92,-2.23l-0.02,-0.27l-1.05,-1.74l-1.57,-1.86l-1.04,-1.96l0.76,-0.34l0.16,-0.16l1.07,-2.63l1.58,-0.1l0.16,-0.06l1.43,-1.11l1.24,-0.52l0.84,0.62l0.13,1.43l0.28,0.27l1.34,0.09l-0.54,2.39l0.05,2.39l0.45,0.25l2.48,-1.45l0.6,0.36l0.17,0.04l1.47,-0.07l0.25,-0.15l0.41,-0.73l1.58,0.15l1.76,1.93l0.15,2.44l0.08,0.18l1.94,2.15l-0.1,1.96l-0.66,0.93l-2.25,-0.34l-3.24,0.49l-0.19,0.12l-1.6,2.12l-0.06,0.24l0.48,2.46Z",
      "name": "Thailand"
    },
    "TF": {
      "path": "M593.76,417.73l1.38,0.84l2.15,0.37l0.04,0.31l-0.59,1.24l-3.36,0.19l-0.05,-1.38l0.43,-1.56Z",
      "name": "French Southern and Antarctic Lands"
    },
    "TG": {
      "path": "M425.23,269.29l-1.49,0.4l-0.43,-0.68l-0.64,-1.54l-0.18,-1.16l0.54,-2.21l-0.04,-0.24l-0.59,-0.86l-0.23,-1.9l0.0,-1.82l-0.07,-0.19l-0.95,-1.19l0.1,-0.41l1.58,0.04l-0.23,0.97l0.08,0.28l1.55,1.55l0.09,1.13l0.08,0.19l0.42,0.43l-0.11,5.66l0.52,1.53Z",
      "name": "Togo"
    },
    "TD": {
      "path": "M457.57,252.46l0.23,-1.08l-0.28,-0.36l-1.32,-0.05l0.0,-1.35l-0.1,-0.22l-0.9,-0.82l0.99,-3.1l3.12,-2.37l0.12,-0.23l0.13,-3.33l0.95,-5.2l0.53,-1.09l-0.07,-0.36l-0.94,-0.81l-0.03,-0.7l-0.12,-0.23l-0.84,-0.61l-0.57,-3.76l2.21,-1.26l19.67,9.88l0.12,9.74l-1.83,-0.15l-0.28,0.14l-1.14,1.89l-0.68,1.62l0.05,0.31l0.33,0.38l-0.61,0.58l-0.08,0.3l0.25,0.93l-0.58,0.95l-0.29,1.01l0.34,0.37l0.67,-0.11l0.39,0.73l0.03,1.4l0.11,0.23l0.8,0.65l-0.01,0.24l-1.38,0.37l-0.11,0.06l-1.27,1.03l-1.83,2.76l-2.21,1.1l-2.34,-0.15l-0.82,0.25l-0.2,0.37l0.19,0.68l-1.16,0.79l-1.01,0.94l-2.92,0.89l-0.5,-0.46l-0.17,-0.08l-0.41,-0.05l-0.28,0.12l-0.38,0.54l-1.36,0.12l0.1,-0.18l0.01,-0.27l-0.78,-1.72l-0.35,-1.03l-0.17,-0.18l-1.03,-0.41l-1.29,-1.28l0.36,-0.78l0.9,0.2l0.14,-0.0l0.67,-0.17l1.36,0.02l0.26,-0.45l-1.32,-2.22l0.09,-1.64l-0.17,-1.68l-0.04,-0.13l-0.93,-1.53Z",
      "name": "Chad"
    },
    "LY": {
      "path": "M457.99,226.38l-1.57,0.87l-1.25,-1.28l-0.13,-0.08l-3.85,-1.11l-1.04,-1.57l-0.09,-0.09l-1.98,-1.23l-0.27,-0.02l-0.93,0.39l-0.72,-1.2l-0.09,-1.07l-0.06,-0.16l-1.33,-1.75l0.83,-0.94l0.07,-0.24l-0.21,-1.64l0.31,-1.43l-0.17,-1.29l0.43,-2.26l-0.15,-1.33l-0.73,-2.18l0.99,-0.52l0.16,-0.21l0.22,-1.16l-0.22,-1.06l1.54,-0.95l0.81,-0.92l1.19,-0.78l0.14,-0.23l0.12,-1.76l2.57,0.84l0.16,0.01l0.99,-0.23l2.01,0.45l3.19,1.2l1.12,2.36l0.2,0.16l2.24,0.53l3.5,1.14l2.65,1.36l0.29,-0.01l1.22,-0.71l1.27,-1.32l0.07,-0.29l-0.55,-2.0l0.69,-1.19l1.7,-1.23l1.61,-0.35l3.2,0.54l0.78,1.14l0.24,0.13l0.85,0.01l0.84,0.47l2.35,0.31l0.42,0.63l-0.79,1.16l-0.04,0.26l0.35,1.08l-0.61,1.6l-0.0,0.2l0.73,2.16l0.0,24.24l-2.58,0.01l-0.3,0.29l-0.02,0.62l-19.55,-9.83l-0.28,0.01l-2.53,1.44Z",
      "name": "Libya"
    },
    "AE": {
      "path": "M550.59,223.8l0.12,0.08l1.92,-0.41l3.54,0.15l0.23,-0.09l1.71,-1.79l1.86,-1.7l1.31,-1.36l0.26,0.5l0.28,1.72l-0.93,0.01l-0.3,0.26l-0.21,1.73l0.11,0.27l0.08,0.06l-0.7,0.32l-0.17,0.27l-0.01,0.99l-0.68,1.02l-0.05,0.15l-0.06,0.96l-0.32,0.36l-7.19,-1.27l-0.79,-2.22Z",
      "name": "United Arab Emirates"
    },
    "VE": {
      "path": "M240.66,256.5l0.65,0.91l-0.03,1.13l-1.05,1.39l-0.03,0.31l0.95,2.0l0.32,0.17l1.08,-0.16l0.24,-0.21l0.56,-1.83l-0.06,-0.29l-0.71,-0.81l-0.1,-1.58l2.9,-0.96l0.19,-0.37l-0.29,-1.02l0.45,-0.41l0.72,1.43l0.26,0.16l1.65,0.04l1.46,1.27l0.08,0.72l0.3,0.27l2.28,0.02l2.55,-0.25l1.34,1.06l0.14,0.06l1.92,0.31l0.2,-0.03l1.4,-0.79l0.15,-0.25l0.02,-0.36l2.82,-0.14l1.17,-0.01l-0.41,0.14l-0.14,0.46l0.86,1.19l0.22,0.12l1.93,0.18l1.73,1.13l0.37,1.9l0.31,0.24l1.21,-0.05l0.52,0.32l-1.63,1.21l-0.11,0.17l-0.22,0.92l0.07,0.27l0.63,0.69l-0.31,0.24l-1.48,0.39l-0.22,0.3l0.04,1.03l-0.59,0.6l-0.01,0.41l1.67,1.87l0.23,0.48l-0.72,0.76l-2.71,0.91l-1.78,0.39l-0.13,0.06l-0.6,0.49l-1.84,-0.58l-1.89,-0.33l-0.18,0.03l-0.47,0.23l-0.02,0.53l0.96,0.56l-0.08,1.58l0.35,1.58l0.26,0.23l1.91,0.19l0.02,0.07l-1.54,0.62l-0.18,0.2l-0.25,0.92l-0.88,0.35l-1.85,0.58l-0.16,0.13l-0.4,0.64l-1.66,0.14l-1.22,-1.18l-0.79,-2.52l-0.67,-0.88l-0.66,-0.43l0.99,-0.98l0.09,-0.26l-0.09,-0.56l-0.08,-0.16l-0.66,-0.69l-0.47,-1.54l0.18,-1.67l0.55,-0.85l0.45,-1.35l-0.15,-0.36l-0.89,-0.43l-0.19,-0.02l-1.39,0.28l-1.76,-0.13l-0.92,0.23l-1.64,-2.01l-0.17,-0.1l-1.54,-0.33l-3.05,0.23l-0.5,-0.73l-0.15,-0.12l-0.45,-0.15l-0.05,-0.28l0.28,-0.86l0.01,-0.15l-0.2,-1.01l-0.08,-0.15l-0.5,-0.5l-0.3,-1.08l-0.25,-0.22l-0.89,-0.12l0.54,-1.18l0.29,-1.73l0.66,-0.85l0.94,-0.7l0.09,-0.11l0.3,-0.6Z",
      "name": "Venezuela"
    },
    "AF": {
      "path": "M574.42,192.1l2.24,0.95l0.18,0.02l1.89,-0.38l0.22,-0.18l0.46,-1.14l1.82,-0.4l1.5,-0.91l0.14,-0.19l0.46,-2.12l1.93,-0.51l0.2,-0.18l0.26,-0.68l0.87,0.57l0.13,0.05l0.79,0.09l1.35,0.02l1.83,0.59l0.75,0.34l0.26,-0.01l1.66,-0.85l0.7,0.46l0.42,-0.09l0.72,-1.17l1.32,0.05l0.23,-0.1l0.39,-0.43l0.07,-0.14l0.24,-1.08l0.86,-0.81l0.94,0.46l-0.2,0.64l0.23,0.38l0.49,0.09l-0.21,2.15l0.09,0.25l0.99,0.94l0.38,0.03l0.83,-0.57l1.06,-0.27l0.12,-0.06l1.46,-1.21l1.63,0.2l2.4,0.0l0.17,0.32l-1.12,0.25l-1.23,0.52l-2.86,0.33l-2.69,0.6l-0.13,0.06l-1.46,1.25l-0.07,0.36l0.58,1.18l0.25,1.21l-1.13,1.08l-0.09,0.25l0.09,0.98l-0.53,0.79l-2.22,-0.08l-0.28,0.44l0.83,1.57l-1.3,0.58l-0.13,0.11l-1.06,1.69l-0.05,0.18l0.13,1.51l-0.73,0.58l-0.78,-0.22l-0.14,-0.01l-1.91,0.36l-0.23,0.19l-0.2,0.57l-1.65,-0.0l-0.22,0.1l-1.4,1.56l-0.08,0.19l-0.08,2.13l-2.99,1.05l-1.67,-0.23l-0.27,0.1l-0.39,0.46l-1.43,-0.31l-2.43,0.4l-3.69,-1.23l1.96,-2.15l0.08,-0.24l-0.21,-1.78l-0.23,-0.26l-1.69,-0.42l-0.19,-1.62l-0.77,-2.08l0.98,-1.41l-0.14,-0.45l-0.82,-0.31l0.6,-1.79l0.93,-3.21Z",
      "name": "Afghanistan"
    },
    "IQ": {
      "path": "M534.42,190.89l0.13,0.14l1.5,0.78l0.15,1.34l-1.13,0.87l-0.11,0.16l-0.58,2.2l0.04,0.24l1.73,2.67l0.12,0.1l2.99,1.49l1.18,1.94l-0.39,1.89l0.29,0.36l0.5,-0.0l0.02,1.17l0.08,0.2l0.83,0.86l-2.36,-0.29l-0.29,0.13l-1.74,2.49l-4.4,-0.21l-7.03,-5.49l-3.73,-1.94l-2.92,-0.74l-0.89,-3.0l5.33,-2.81l0.15,-0.19l0.95,-3.43l-0.2,-2.0l1.19,-0.61l0.11,-0.09l1.23,-1.73l0.92,-0.38l2.75,0.35l0.81,0.68l0.31,0.05l0.94,-0.38l1.5,3.17Z",
      "name": "Iraq"
    },
    "IS": {
      "path": "M384.26,87.96l-0.51,2.35l0.08,0.28l2.61,2.58l-2.99,2.83l-7.16,2.72l-2.08,0.7l-9.51,-1.71l1.89,-1.36l-0.07,-0.53l-4.4,-1.59l3.33,-0.59l0.25,-0.32l-0.11,-1.2l-0.25,-0.27l-4.82,-0.88l1.38,-2.2l3.54,-0.57l3.8,2.74l0.33,0.01l3.68,-2.18l3.02,1.12l0.25,-0.02l4.01,-2.18l3.72,0.27Z",
      "name": "Iceland"
    },
    "IR": {
      "path": "M556.2,187.5l2.05,-0.52l0.13,-0.07l1.69,-1.57l1.55,0.08l0.15,-0.03l1.02,-0.5l1.64,0.25l2.82,1.48l1.91,0.3l2.8,2.49l0.18,0.08l1.61,0.09l0.19,2.09l-1.0,3.47l-0.69,2.04l0.18,0.38l0.73,0.28l-0.85,1.22l-0.04,0.28l0.81,2.19l0.19,1.72l0.23,0.26l1.69,0.42l0.17,1.43l-2.18,2.39l-0.01,0.4l1.22,1.42l1.0,1.62l0.12,0.11l2.23,1.11l0.06,2.2l0.2,0.27l1.03,0.38l0.14,0.83l-3.38,1.3l-0.18,0.19l-0.87,2.85l-4.44,-0.76l-2.75,-0.62l-2.64,-0.32l-1.01,-3.11l-0.17,-0.19l-1.2,-0.48l-0.18,-0.01l-1.99,0.51l-2.42,1.25l-2.89,-0.84l-2.48,-2.03l-2.41,-0.79l-1.61,-2.47l-1.84,-3.63l-0.36,-0.15l-1.22,0.4l-1.48,-0.84l-0.37,0.06l-0.72,0.82l-1.08,-1.12l-0.02,-1.35l-0.3,-0.29l-0.43,0.0l0.34,-1.64l-0.04,-0.22l-1.29,-2.11l-0.12,-0.11l-3.0,-1.49l-1.62,-2.49l0.52,-1.98l1.18,-0.92l0.11,-0.27l-0.19,-1.66l-0.16,-0.23l-1.55,-0.81l-1.58,-3.33l-1.3,-2.2l0.41,-0.75l0.03,-0.21l-0.73,-3.12l1.2,-0.59l0.35,0.9l1.26,1.35l0.15,0.09l1.81,0.39l0.91,-0.09l0.15,-0.06l2.9,-2.13l0.7,-0.16l0.48,0.56l-0.75,1.26l0.05,0.37l1.56,1.53l0.28,0.08l0.37,-0.09l0.7,1.89l0.21,0.19l2.31,0.59l1.69,1.4l0.15,0.07l3.66,0.49l3.91,-0.76l0.23,-0.19l0.19,-0.52Z",
      "name": "Iran"
    },
    "AM": {
      "path": "M530.51,176.08l2.91,-0.39l0.41,0.63l0.11,0.1l0.66,0.36l-0.32,0.47l0.07,0.41l1.1,0.84l-0.53,0.7l0.06,0.42l1.06,0.8l1.01,0.44l0.04,1.56l-0.44,0.04l-0.88,-1.46l0.01,-0.37l-0.3,-0.31l-0.98,0.01l-0.65,-0.69l-0.26,-0.09l-0.38,0.06l-0.97,-0.82l-1.64,-0.65l0.2,-1.2l-0.02,-0.16l-0.28,-0.69Z",
      "name": "Armenia"
    },
    "IT": {
      "path": "M451.68,158.58l0.2,0.16l3.3,0.75l-0.22,1.26l0.02,0.18l0.35,0.78l-1.4,-0.32l-0.21,0.03l-2.04,1.1l-0.16,0.29l0.13,1.47l-0.29,0.82l0.02,0.24l0.82,1.57l0.1,0.11l2.28,1.5l1.29,2.53l2.79,2.43l0.2,0.07l1.83,-0.02l0.31,0.34l-0.46,0.39l0.06,0.5l4.06,1.97l2.06,1.49l0.17,0.36l-0.24,0.53l-1.08,-1.07l-0.15,-0.08l-2.18,-0.49l-0.33,0.15l-1.05,1.91l0.11,0.4l1.63,0.98l-0.22,1.12l-0.84,0.14l-0.22,0.15l-1.27,2.38l-0.54,0.12l0.01,-0.47l0.48,-1.46l0.5,-0.58l0.03,-0.35l-0.97,-1.69l-0.76,-1.48l-0.17,-0.15l-0.94,-0.33l-0.68,-1.18l-0.16,-0.13l-1.53,-0.52l-1.03,-1.14l-0.19,-0.1l-1.78,-0.19l-1.88,-1.3l-2.27,-1.94l-1.64,-1.68l-0.76,-2.94l-0.21,-0.21l-1.22,-0.35l-2.01,-1.0l-0.24,-0.01l-1.15,0.42l-0.11,0.07l-1.38,1.36l-0.5,0.11l0.19,-0.87l-0.21,-0.35l-1.19,-0.34l-0.56,-2.06l0.76,-0.82l0.03,-0.36l-0.68,-1.08l0.04,-0.31l0.68,0.42l0.19,0.04l1.21,-0.15l0.14,-0.06l1.18,-0.89l0.25,0.29l0.25,0.1l1.19,-0.1l0.25,-0.18l0.45,-1.04l1.61,0.34l0.19,-0.02l1.1,-0.53l0.17,-0.22l0.15,-0.95l1.19,0.35l0.35,-0.16l0.23,-0.47l2.11,-0.47l0.45,0.89ZM459.35,184.63l-0.71,1.81l0.0,0.23l0.33,0.79l-0.37,1.03l-1.6,-0.91l-1.33,-0.34l-3.24,-1.36l0.23,-0.99l2.73,0.24l3.95,-0.5ZM443.95,175.91l1.26,1.77l-0.31,3.47l-0.82,-0.13l-0.26,0.08l-0.83,0.79l-0.64,-0.52l-0.1,-3.42l-0.44,-1.34l0.91,0.1l0.21,-0.06l1.01,-0.74Z",
      "name": "Italy"
    },
    "VN": {
      "path": "M690.8,230.21l-2.86,1.93l-2.09,2.46l-0.06,0.11l-0.55,1.8l0.04,0.26l4.26,6.1l2.31,1.63l1.46,1.97l1.12,4.62l-0.32,4.3l-1.97,1.57l-2.85,1.62l-2.09,2.14l-2.83,2.13l-0.67,-1.19l0.65,-1.58l-0.09,-0.35l-1.47,-1.14l1.67,-0.79l2.57,-0.18l0.22,-0.47l-0.89,-1.24l3.88,-1.8l0.17,-0.24l0.31,-3.05l-0.01,-0.13l-0.56,-1.63l0.44,-2.48l-0.01,-0.15l-0.63,-1.81l-0.08,-0.12l-1.87,-1.77l-3.64,-5.3l-0.11,-0.1l-2.68,-1.39l0.45,-0.59l1.53,-0.65l0.16,-0.39l-0.97,-2.27l-0.27,-0.18l-2.89,-0.02l-1.04,-2.21l-1.28,-1.83l0.96,-0.46l1.97,0.01l2.43,-0.3l0.13,-0.05l1.95,-1.29l1.04,0.85l0.13,0.06l1.98,0.42l-0.32,1.21l0.09,0.3l1.19,1.07l0.12,0.07l1.88,0.51Z",
      "name": "Vietnam"
    },
    "AR": {
      "path": "M258.11,341.34l1.4,1.81l0.51,-0.06l0.89,-1.94l2.51,0.1l0.36,0.49l4.6,4.31l0.15,0.08l1.99,0.39l3.01,1.93l2.5,1.01l0.28,0.91l-2.4,3.97l0.17,0.44l2.57,0.74l2.81,0.41l2.09,-0.44l0.14,-0.07l2.27,-2.06l0.09,-0.17l0.38,-2.2l0.88,-0.36l1.05,1.29l-0.04,1.88l-1.98,1.4l-1.72,1.13l-2.84,2.65l-3.34,3.73l-0.07,0.12l-0.63,2.22l-0.67,2.85l0.02,2.73l-0.47,0.54l-0.07,0.17l-0.36,3.28l0.12,0.27l3.03,2.32l-0.31,1.78l0.11,0.29l1.44,1.15l-0.11,1.17l-2.32,3.57l-3.59,1.51l-4.95,0.6l-2.72,-0.29l-0.32,0.38l0.5,1.67l-0.49,2.13l0.01,0.16l0.4,1.29l-1.27,0.88l-2.41,0.39l-2.33,-1.05l-0.31,0.04l-0.97,0.78l-0.11,0.27l0.35,2.98l0.16,0.23l1.69,0.91l0.31,-0.02l1.08,-0.75l0.46,0.96l-2.1,0.88l-2.01,1.89l-0.09,0.18l-0.36,3.05l-0.51,1.42l-2.16,0.01l-0.19,0.07l-1.96,1.59l-0.1,0.15l-0.72,2.34l0.08,0.31l2.46,2.31l0.13,0.07l2.09,0.56l-0.74,2.45l-2.86,1.75l-0.12,0.14l-1.59,3.71l-2.2,1.24l-0.1,0.09l-1.03,1.54l-0.04,0.23l0.81,3.45l0.06,0.13l1.13,1.32l-2.59,-0.57l-5.89,-0.44l-0.92,-1.73l0.05,-2.4l-0.34,-0.3l-1.49,0.19l-0.72,-0.98l-0.2,-3.21l1.79,-1.33l0.1,-0.13l0.79,-2.04l0.02,-0.16l-0.27,-1.52l1.31,-2.69l0.91,-4.15l-0.23,-1.72l0.91,-0.49l0.15,-0.33l-0.27,-1.16l-0.15,-0.2l-0.87,-0.46l0.65,-1.01l-0.04,-0.37l-1.06,-1.09l-0.54,-3.2l0.83,-0.51l0.14,-0.29l-0.42,-3.6l0.58,-2.98l0.64,-2.5l1.41,-1.0l0.12,-0.32l-0.75,-2.8l-0.01,-2.48l1.81,-1.78l0.09,-0.22l-0.06,-2.3l1.39,-2.69l0.03,-0.14l0.01,-2.58l-0.11,-0.24l-0.57,-0.45l-1.1,-4.59l1.49,-2.73l0.04,-0.17l-0.23,-2.59l0.86,-2.38l1.6,-2.48l1.74,-1.65l0.04,-0.39l-0.64,-0.89l0.42,-0.7l0.04,-0.16l-0.08,-4.26l2.55,-1.23l0.16,-0.18l0.86,-2.75l-0.01,-0.22l-0.22,-0.48l1.84,-2.1l3.0,0.59ZM256.77,438.98l-2.1,0.15l-1.18,-1.14l-0.19,-0.08l-1.53,-0.09l-2.38,-0.0l-0.0,-6.28l0.4,0.65l1.25,2.55l0.11,0.12l3.26,2.07l3.19,0.8l-0.82,1.26Z",
      "name": "Argentina"
    },
    "AU": {
      "path": "M705.55,353.06l0.09,0.09l0.37,0.05l0.13,-0.35l-0.57,-1.69l0.48,0.3l0.71,0.99l0.34,0.11l0.2,-0.29l-0.04,-1.37l-0.04,-0.14l-1.22,-2.07l-0.28,-0.9l-0.51,-0.69l0.24,-1.33l0.52,-0.7l0.34,-1.32l0.01,-0.13l-0.25,-1.44l0.51,-0.94l0.1,1.03l0.23,0.26l0.32,-0.14l1.01,-1.72l1.94,-0.84l1.27,-1.14l1.84,-0.92l1.0,-0.18l0.6,0.28l0.26,-0.0l1.94,-0.96l1.48,-0.28l0.19,-0.13l0.32,-0.49l0.51,-0.18l1.42,0.05l2.63,-0.76l0.11,-0.06l1.36,-1.15l0.08,-0.1l0.61,-1.33l1.42,-1.27l0.1,-0.19l0.11,-1.03l0.06,-1.32l1.39,-1.74l0.85,1.79l0.4,0.14l1.07,-0.51l0.11,-0.45l-0.77,-1.05l0.53,-0.84l0.86,0.43l0.43,-0.22l0.29,-1.85l1.29,-1.19l0.6,-0.98l1.16,-0.4l0.2,-0.27l0.02,-0.34l0.74,0.2l0.38,-0.27l0.03,-0.44l1.98,-0.61l1.7,1.08l1.36,1.48l0.22,0.1l1.55,0.02l1.57,0.24l0.33,-0.4l-0.48,-1.27l1.09,-1.86l1.06,-0.63l0.1,-0.42l-0.28,-0.46l0.93,-1.24l1.36,-0.8l1.16,0.27l0.14,0.0l2.1,-0.48l0.23,-0.3l-0.05,-1.3l-0.18,-0.26l-1.08,-0.49l0.44,-0.12l1.52,0.58l1.39,1.06l2.11,0.65l0.19,-0.0l0.59,-0.21l1.44,0.72l0.27,0.0l1.37,-0.68l0.84,0.2l0.26,-0.06l0.37,-0.3l0.82,0.89l-0.56,1.14l-0.84,0.91l-0.75,0.07l-0.26,0.38l0.26,0.9l-0.67,1.15l-0.88,1.24l-0.05,0.25l0.18,0.72l0.12,0.17l1.99,1.42l1.96,0.84l1.25,0.86l1.8,1.51l0.19,0.07l0.63,-0.0l1.15,0.58l0.34,0.7l0.17,0.15l2.39,0.88l0.24,-0.02l1.65,-0.88l0.14,-0.16l0.49,-1.37l0.52,-1.19l0.31,-1.39l0.75,-2.02l0.01,-0.19l-0.33,-1.16l0.16,-0.67l0.0,-0.13l-0.28,-1.41l0.3,-1.78l0.42,-0.45l0.05,-0.33l-0.33,-0.73l0.56,-1.25l0.48,-1.39l0.07,-0.69l0.58,-0.59l0.48,0.84l0.17,1.53l0.17,0.24l0.47,0.23l0.09,0.9l0.05,0.14l0.87,1.23l0.17,1.33l-0.09,0.89l0.03,0.15l0.9,2.0l0.43,0.13l1.38,-0.83l0.71,0.92l1.06,0.88l-0.22,0.96l0.0,0.14l0.53,2.2l0.38,1.3l0.15,0.18l0.52,0.26l0.62,2.01l-0.23,1.27l0.02,0.18l0.81,1.76l0.14,0.14l2.69,1.35l3.21,2.21l-0.2,0.4l0.04,0.34l1.39,1.6l0.95,2.78l0.43,0.16l0.79,-0.46l0.85,0.96l0.39,0.05l0.22,-0.15l0.36,2.33l0.09,0.18l1.78,1.63l1.16,1.01l1.9,2.1l0.67,2.05l0.06,1.47l-0.17,1.64l0.03,0.17l1.16,2.22l-0.14,2.28l-0.43,1.24l-0.68,2.44l0.04,1.63l-0.48,1.92l-1.06,2.43l-1.79,1.32l-0.1,0.12l-0.91,2.15l-0.82,1.37l-0.76,2.47l-0.98,1.46l-0.63,2.14l-0.33,2.02l0.1,0.82l-1.21,0.85l-2.71,0.1l-0.13,0.03l-2.31,1.19l-1.21,1.17l-1.34,1.11l-1.89,-1.18l-1.33,-0.46l0.32,-1.24l-0.4,-0.35l-1.46,0.61l-2.06,1.98l-1.99,-0.73l-1.43,-0.46l-1.45,-0.22l-2.32,-0.81l-1.51,-1.67l-0.45,-2.11l-0.6,-1.5l-0.07,-0.11l-1.23,-1.16l-0.16,-0.08l-1.96,-0.28l0.59,-0.99l0.03,-0.24l-0.61,-2.1l-0.54,-0.08l-1.16,1.85l-1.23,0.29l0.73,-0.88l0.06,-0.12l0.37,-1.57l0.93,-1.33l0.05,-0.2l-0.2,-2.07l-0.53,-0.17l-2.01,2.35l-1.52,0.94l-0.12,0.14l-0.82,1.93l-1.5,-0.9l0.07,-1.32l-0.06,-0.2l-1.57,-2.04l-1.15,-0.92l0.3,-0.41l-0.1,-0.44l-3.21,-1.69l-0.13,-0.03l-1.69,-0.08l-2.35,-1.31l-0.16,-0.04l-4.55,0.27l-3.24,0.99l-2.8,0.91l-2.33,-0.18l-0.17,0.03l-2.63,1.41l-2.14,0.64l-0.2,0.19l-0.47,1.42l-0.8,0.99l-1.99,0.06l-1.55,0.24l-2.27,-0.5l-1.79,0.3l-1.71,0.13l-0.19,0.09l-1.38,1.39l-0.58,-0.1l-0.21,0.04l-1.26,0.8l-1.13,0.85l-1.72,-0.1l-1.6,-0.0l-2.58,-1.76l-1.21,-0.49l0.04,-1.19l1.04,-0.32l0.16,-0.12l0.42,-0.64l0.05,-0.19l-0.09,-0.97l0.3,-2.0l-0.28,-1.64l-1.34,-2.84l-0.39,-1.49l0.1,-1.51l-0.04,-0.17l-0.96,-1.72l-0.06,-0.73l-0.09,-0.19l-1.04,-1.01l-0.3,-2.02l-0.05,-0.12l-1.23,-1.83ZM784.95,393.35l2.39,1.01l0.2,0.01l3.26,-0.96l1.19,0.16l0.16,3.19l-0.78,0.95l-0.07,0.16l-0.19,1.83l-0.43,-0.41l-0.44,0.03l-1.61,1.96l-0.4,-0.12l-1.38,-0.09l-1.43,-2.42l-0.37,-2.03l-1.4,-2.53l0.04,-0.94l1.27,0.2Z",
      "name": "Australia"
    },
    "IL": {
      "path": "M509.04,199.22l0.71,0.0l0.27,-0.17l0.15,-0.33l0.19,-0.01l0.02,0.73l-0.27,0.34l0.02,0.08l-0.32,0.62l-0.65,-0.27l-0.41,0.19l-0.52,1.85l0.16,0.35l0.14,0.07l-0.17,0.1l-0.14,0.21l-0.11,0.73l0.39,0.33l0.81,-0.26l0.03,0.64l-0.97,3.43l-1.28,-3.67l0.62,-0.78l-0.03,-0.41l0.58,-1.16l0.5,-2.07l0.27,-0.54Z",
      "name": "Israel"
    },
    "IN": {
      "path": "M615.84,192.58l2.4,2.97l-0.24,2.17l0.05,0.2l0.94,1.35l-0.06,0.97l-1.46,-0.3l-0.35,0.36l0.7,3.06l0.12,0.18l2.46,1.75l3.11,1.72l-1.23,0.96l-0.1,0.13l-0.97,2.55l0.16,0.38l2.41,1.02l2.37,1.33l3.27,1.52l3.43,0.37l1.37,1.3l0.17,0.08l1.92,0.25l3.0,0.62l2.15,-0.04l0.28,-0.22l0.29,-1.06l0.0,-0.13l-0.32,-1.66l0.16,-0.94l1.0,-0.37l0.23,2.28l0.18,0.24l2.28,1.02l0.2,0.02l1.52,-0.41l2.06,0.18l2.08,-0.08l0.29,-0.27l0.18,-1.66l-0.1,-0.26l-0.53,-0.44l1.38,-0.23l0.15,-0.07l2.26,-2.0l2.75,-1.65l1.97,0.63l0.25,-0.03l1.54,-0.99l0.89,1.28l-0.72,0.97l0.2,0.48l2.49,0.37l0.11,0.61l-0.69,0.39l-0.15,0.3l0.15,1.22l-1.36,-0.37l-0.23,0.03l-3.24,1.86l-0.15,0.28l0.07,1.44l-1.33,2.16l-0.04,0.13l-0.12,1.24l-0.98,1.91l-1.72,-0.53l-0.39,0.28l-0.09,2.66l-0.52,0.83l-0.04,0.23l0.21,0.89l-0.71,0.36l-1.21,-3.85l-0.29,-0.21l-0.69,0.01l-0.29,0.23l-0.28,1.17l-0.84,-0.84l0.6,-1.17l0.97,-0.13l0.23,-0.16l1.15,-2.25l-0.18,-0.42l-1.54,-0.47l-2.3,0.04l-2.13,-0.33l-0.19,-1.63l-0.26,-0.26l-1.13,-0.13l-1.93,-1.13l-0.42,0.13l-0.88,1.82l0.08,0.37l1.47,1.15l-1.21,0.77l-0.1,0.1l-0.56,0.97l0.13,0.42l1.31,0.61l-0.36,1.35l0.01,0.2l0.85,1.95l0.37,2.05l-0.26,0.68l-1.55,-0.02l-3.09,0.54l-0.25,0.32l0.13,1.84l-1.21,1.4l-3.64,1.79l-2.79,3.04l-1.86,1.61l-2.48,1.68l-0.13,0.25l-0.0,1.0l-1.07,0.55l-2.21,0.9l-1.13,0.13l-0.25,0.19l-0.75,1.96l-0.02,0.15l0.52,3.31l0.13,2.03l-1.03,2.35l-0.03,0.12l-0.01,4.03l-1.02,0.1l-0.23,0.15l-1.14,1.93l0.04,0.36l0.44,0.48l-1.83,0.57l-0.18,0.15l-0.81,1.65l-0.74,0.53l-2.14,-2.12l-1.14,-3.47l-0.96,-2.57l-0.9,-1.26l-1.3,-2.38l-0.61,-3.14l-0.44,-1.62l-2.29,-3.56l-1.03,-4.94l-0.74,-3.29l0.01,-3.12l-0.49,-2.51l-0.41,-0.22l-3.56,1.53l-1.59,-0.28l-2.96,-2.87l0.94,-0.74l0.06,-0.41l-0.74,-1.03l-2.73,-2.1l1.35,-1.43l5.38,0.01l0.29,-0.36l-0.5,-2.29l-0.09,-0.15l-1.33,-1.28l-0.27,-1.96l-0.12,-0.2l-1.36,-1.0l2.42,-2.48l2.77,0.2l0.24,-0.1l2.62,-2.85l1.59,-2.8l2.41,-2.74l0.07,-0.2l-0.04,-1.82l2.01,-1.51l-0.01,-0.49l-1.95,-1.33l-0.83,-1.81l-0.82,-2.27l0.98,-0.97l3.64,0.66l2.89,-0.42l0.17,-0.08l2.18,-2.15Z",
      "name": "India"
    },
    "TZ": {
      "path": "M505.77,287.58l0.36,0.23l8.95,5.03l0.15,1.3l0.13,0.21l3.4,2.37l-1.07,2.88l-0.02,0.14l0.15,1.42l0.15,0.23l1.47,0.84l0.05,0.42l-0.66,1.44l-0.02,0.18l0.13,0.72l-0.16,1.16l0.03,0.19l0.87,1.57l1.03,2.48l0.12,0.14l0.53,0.32l-1.59,1.18l-2.64,0.95l-1.45,-0.04l-0.2,0.07l-0.81,0.69l-1.64,0.06l-0.68,0.3l-2.9,-0.69l-1.71,0.17l-0.65,-3.18l-0.05,-0.12l-1.35,-1.88l-0.19,-0.12l-2.41,-0.46l-1.38,-0.74l-1.63,-0.44l-0.96,-0.41l-0.95,-0.58l-1.31,-3.09l-1.47,-1.46l-0.45,-1.31l0.24,-1.34l-0.39,-1.99l0.71,-0.08l0.18,-0.09l0.91,-0.91l0.98,-1.31l0.59,-0.5l0.11,-0.24l-0.02,-0.81l-0.08,-0.2l-0.47,-0.5l-0.1,-0.67l0.51,-0.23l0.18,-0.25l0.14,-1.47l-0.05,-0.2l-0.76,-1.09l0.45,-0.15l2.71,0.03l5.01,-0.19Z",
      "name": "Tanzania"
    },
    "AZ": {
      "path": "M539.36,175.66l0.16,0.09l1.11,0.2l0.32,-0.15l0.4,-0.71l1.22,-0.99l1.11,1.33l1.26,2.09l0.22,0.14l1.06,0.13l0.28,0.29l-1.46,0.17l-0.26,0.24l-0.43,2.26l-0.39,0.92l-0.85,0.63l-0.12,0.25l0.06,1.2l-0.22,0.05l-1.28,-1.25l0.74,-1.25l-0.03,-0.35l-0.74,-0.86l-0.3,-0.1l-1.05,0.27l-2.49,1.82l-0.04,-1.46l-0.18,-0.27l-1.09,-0.47l-0.8,-0.6l0.53,-0.7l-0.06,-0.42l-1.11,-0.84l0.34,-0.51l-0.11,-0.43l-0.89,-0.48l-0.33,-0.49l0.25,-0.2l1.78,0.81l1.35,0.18l0.25,-0.09l0.34,-0.35l0.02,-0.39l-1.04,-1.36l0.28,-0.18l0.49,0.07l1.65,1.74ZM533.53,180.16l0.63,0.67l0.22,0.09l0.8,-0.0l0.04,0.31l0.66,1.09l-0.94,-0.21l-1.16,-1.24l-0.25,-0.71Z",
      "name": "Azerbaijan"
    },
    "IE": {
      "path": "M405.17,135.35l0.36,2.16l-1.78,2.84l-4.28,1.91l-3.02,-0.43l1.81,-3.13l0.02,-0.26l-1.23,-3.26l3.24,-2.56l1.54,-1.32l0.37,1.33l-0.49,1.77l0.3,0.38l1.49,-0.05l1.68,0.63Z",
      "name": "Ireland"
    },
    "ID": {
      "path": "M756.56,287.86l0.69,4.02l0.15,0.21l2.59,1.5l0.39,-0.07l2.05,-2.61l2.75,-1.45l2.09,-0.0l2.08,0.85l1.85,0.89l2.52,0.46l0.08,15.44l-1.72,-1.6l-0.15,-0.07l-2.54,-0.51l-0.29,0.1l-0.53,0.62l-2.53,0.06l0.78,-1.51l1.48,-0.66l0.17,-0.34l-0.65,-2.74l-1.23,-2.19l-0.14,-0.13l-4.85,-2.13l-2.09,-0.23l-3.7,-2.28l-0.41,0.1l-0.67,1.11l-0.63,0.14l-0.41,-0.67l-0.01,-1.01l-0.14,-0.25l-1.39,-0.89l2.05,-0.69l1.73,0.05l0.29,-0.39l-0.21,-0.66l-0.29,-0.21l-3.5,-0.0l-0.9,-1.36l-0.19,-0.13l-2.14,-0.44l-0.65,-0.76l2.86,-0.51l1.28,-0.79l3.75,0.96l0.32,0.76ZM758.01,300.37l-0.79,1.04l-0.14,-1.07l0.4,-0.81l0.29,-0.47l0.24,0.31l-0.0,1.0ZM747.45,292.9l0.48,1.02l-1.45,-0.69l-2.09,-0.21l-1.45,0.16l-1.28,-0.07l0.35,-0.81l2.86,-0.1l2.58,0.68ZM741.15,285.69l-0.16,-0.25l-0.72,-3.08l0.47,-1.86l0.35,-0.38l0.1,0.73l0.25,0.26l1.28,0.19l0.18,0.78l-0.11,1.8l-0.96,-0.18l-0.35,0.22l-0.38,1.52l0.05,0.24ZM741.19,285.75l0.76,0.97l-0.11,0.05l-0.65,-1.02ZM739.18,293.52l-0.61,0.54l-1.44,-0.38l-0.25,-0.55l1.93,-0.09l0.36,0.48ZM728.4,295.87l-0.27,-0.07l-2.26,0.89l-0.37,-0.41l0.27,-0.8l-0.09,-0.33l-1.68,-1.37l0.17,-2.29l-0.42,-0.3l-1.67,0.76l-0.17,0.29l0.21,2.92l0.09,3.34l-1.22,0.28l-0.78,-0.54l0.65,-2.1l0.01,-0.14l-0.39,-2.42l-0.29,-0.25l-0.86,-0.02l-0.63,-1.4l0.99,-1.61l0.35,-1.97l1.24,-3.73l0.49,-0.96l1.95,-1.7l1.86,0.69l3.16,0.35l2.92,-0.1l0.17,-0.06l2.24,-1.65l0.11,0.14l-1.8,2.22l-1.72,0.44l-2.41,-0.48l-4.21,0.13l-2.19,0.36l-0.25,0.24l-0.36,1.9l0.08,0.27l2.24,2.23l0.4,0.02l1.29,-1.08l3.19,-0.58l-0.19,0.06l-1.04,1.4l-2.13,0.94l-0.12,0.45l2.26,3.06l-0.37,0.69l0.03,0.32l1.51,1.95ZM728.48,295.97l0.59,0.76l-0.02,1.37l-1.0,0.55l-0.64,-0.58l1.09,-1.84l-0.02,-0.26ZM728.64,286.95l0.79,-0.14l-0.07,0.39l-0.72,-0.24ZM732.38,310.1l-1.89,0.49l-0.06,-0.06l0.17,-0.64l1.0,-1.42l2.14,-0.87l0.1,0.2l0.04,0.58l-1.49,1.72ZM728.26,305.71l-0.17,0.63l-3.53,0.67l-3.02,-0.28l-0.0,-0.42l1.66,-0.44l1.47,0.71l0.16,0.03l1.75,-0.21l1.69,-0.69ZM722.98,310.33l-0.74,0.03l-2.52,-1.35l1.42,-0.3l1.19,0.7l0.72,0.63l-0.06,0.28ZM716.24,305.63l0.66,0.49l0.22,0.06l1.35,-0.18l0.31,0.53l-4.18,0.77l-0.8,-0.01l0.51,-0.86l1.2,-0.02l0.24,-0.12l0.49,-0.65ZM715.84,280.21l0.09,0.34l2.25,1.86l-2.25,0.22l-0.24,0.17l-0.84,1.71l-0.03,0.15l0.1,2.11l-2.27,1.62l-0.13,0.24l-0.06,2.46l-0.74,2.92l-0.02,-0.05l-0.39,-0.16l-2.62,1.04l-0.86,-1.33l-0.23,-0.14l-1.71,-0.14l-1.19,-0.76l-0.25,-0.03l-2.78,0.84l-0.79,-1.05l-0.26,-0.12l-1.61,0.13l-1.8,-0.25l-0.36,-3.13l-0.15,-0.23l-1.18,-0.65l-1.13,-2.02l-0.33,-2.1l0.27,-2.19l1.05,-1.17l0.28,1.12l0.1,0.16l1.71,1.41l0.28,0.05l1.55,-0.49l1.54,0.17l0.23,-0.07l1.4,-1.21l1.05,-0.19l2.3,0.68l0.16,0.0l2.04,-0.53l0.21,-0.19l1.26,-3.41l0.91,-0.82l0.09,-0.14l0.8,-2.64l2.63,0.0l1.71,0.33l-1.19,1.89l0.02,0.34l1.74,2.24l-0.37,1.0ZM692.67,302.0l0.26,0.19l4.8,0.25l0.28,-0.16l0.44,-0.83l4.29,1.12l0.85,1.52l0.23,0.15l3.71,0.45l2.37,1.15l-2.06,0.69l-2.77,-1.0l-2.25,0.07l-2.57,-0.18l-2.31,-0.45l-2.94,-0.97l-1.84,-0.25l-0.13,0.01l-0.97,0.29l-4.34,-0.98l-0.38,-0.94l-0.25,-0.19l-1.76,-0.14l1.31,-1.84l2.81,0.14l1.97,0.96l0.95,0.19l0.28,0.74ZM685.63,299.27l-2.36,0.04l-2.07,-2.05l-3.17,-2.02l-1.06,-1.5l-1.88,-2.02l-1.22,-1.85l-1.9,-3.49l-2.2,-2.11l-0.71,-2.08l-0.94,-1.99l-0.1,-0.12l-2.21,-1.54l-1.35,-2.17l-1.86,-1.39l-2.53,-2.68l-0.14,-0.81l1.22,0.08l3.76,0.47l2.16,2.4l1.94,1.7l1.37,1.04l2.35,2.67l0.22,0.1l2.44,0.04l1.99,1.62l1.42,2.06l0.09,0.09l1.67,1.0l-0.88,1.8l0.11,0.39l1.44,0.87l0.13,0.04l0.68,0.05l0.41,1.62l0.87,1.4l0.22,0.14l1.71,0.21l1.06,1.38l-0.61,3.04l-0.09,3.6Z",
      "name": "Indonesia"
    },
    "UA": {
      "path": "M500.54,141.42l0.9,0.13l0.27,-0.11l0.52,-0.62l0.68,0.13l2.43,-0.3l1.32,1.57l-0.45,0.48l-0.07,0.26l0.21,1.03l0.27,0.24l1.85,0.15l0.76,1.22l-0.05,0.55l0.2,0.31l3.18,1.15l0.18,0.01l1.75,-0.47l1.42,1.41l0.22,0.09l1.42,-0.03l3.44,0.99l0.02,0.65l-0.97,1.62l-0.03,0.24l0.52,1.67l-0.29,0.79l-2.24,0.22l-0.14,0.05l-1.29,0.89l-0.13,0.23l-0.07,1.16l-1.75,0.22l-0.12,0.04l-1.6,0.98l-2.27,0.16l-0.12,0.04l-2.16,1.17l-0.16,0.29l0.15,1.94l0.14,0.23l1.23,0.75l0.18,0.04l2.06,-0.15l-0.22,0.51l-2.67,0.54l-3.27,1.72l-1.0,-0.45l0.45,-1.19l-0.19,-0.39l-2.34,-0.78l0.15,-0.2l2.32,-1.0l0.09,-0.49l-0.73,-0.72l-0.15,-0.08l-3.69,-0.75l-0.14,-0.96l-0.35,-0.25l-2.32,0.39l-0.21,0.15l-0.91,1.7l-1.77,2.1l-0.93,-0.44l-0.24,-0.0l-1.05,0.45l-0.48,-0.25l0.13,-0.07l0.14,-0.15l0.43,-1.04l0.67,-0.97l0.04,-0.26l-0.1,-0.31l0.04,-0.02l0.11,0.19l0.24,0.15l1.48,0.09l0.78,-0.25l0.07,-0.53l-0.27,-0.19l0.09,-0.25l-0.08,-0.33l-0.81,-0.74l-0.34,-1.24l-0.14,-0.18l-0.73,-0.42l0.15,-0.87l-0.11,-0.29l-1.13,-0.86l-0.15,-0.06l-0.97,-0.11l-1.79,-0.97l-0.2,-0.03l-1.66,0.32l-0.13,0.06l-0.52,0.41l-0.95,-0.0l-0.23,0.11l-0.56,0.66l-1.74,0.29l-0.79,0.43l-1.01,-0.68l-0.16,-0.05l-1.57,-0.01l-1.52,-0.35l-0.23,0.04l-0.71,0.45l-0.09,-0.43l-0.13,-0.19l-1.18,-0.74l0.38,-1.02l0.53,-0.64l0.35,0.12l0.37,-0.41l-0.57,-1.29l2.1,-2.5l1.16,-0.36l0.2,-0.2l0.27,-0.92l-0.01,-0.2l-1.1,-2.52l0.79,-0.09l0.13,-0.05l1.3,-0.86l1.83,-0.07l2.48,0.26l2.84,0.8l1.91,0.06l0.88,0.45l0.29,-0.01l0.72,-0.44l0.49,0.58l0.25,0.11l2.2,-0.16l0.94,0.3l0.39,-0.26l0.15,-1.57l0.61,-0.59l2.01,-0.19Z",
      "name": "Ukraine"
    },
    "QA": {
      "path": "M548.47,221.47l-0.15,-1.72l0.59,-1.23l0.38,-0.16l0.54,0.6l0.04,1.4l-0.47,1.37l-0.41,0.11l-0.53,-0.37Z",
      "name": "Qatar"
    },
    "MZ": {
      "path": "M507.71,314.14l1.65,-0.18l2.96,0.7l0.2,-0.02l0.6,-0.29l1.68,-0.06l0.18,-0.07l0.8,-0.69l1.5,0.02l2.74,-0.98l1.74,-1.27l0.25,0.7l-0.1,2.47l0.31,2.27l0.1,3.97l0.42,1.24l-0.7,1.71l-0.94,1.73l-1.52,1.52l-5.06,2.21l-2.88,2.8l-1.01,0.51l-1.72,1.81l-0.99,0.58l-0.15,0.23l-0.21,1.86l0.04,0.19l1.17,1.95l0.47,1.47l0.03,0.74l0.39,0.28l0.05,-0.01l-0.06,2.13l-0.39,1.19l0.1,0.33l0.42,0.32l-0.28,0.83l-0.95,0.86l-2.03,0.88l-3.08,1.49l-1.1,0.99l-0.09,0.28l0.21,1.13l0.21,0.23l0.38,0.11l-0.14,0.89l-1.39,-0.02l-0.17,-0.94l-0.38,-1.23l-0.2,-0.89l0.44,-2.91l-0.01,-0.14l-0.65,-1.88l-1.15,-3.55l2.52,-2.85l0.68,-1.89l0.29,-0.18l0.14,-0.2l0.28,-1.53l-0.03,-0.19l-0.36,-0.7l0.1,-1.83l0.49,-1.84l-0.01,-3.26l-0.14,-0.25l-1.3,-0.83l-0.11,-0.04l-1.08,-0.17l-0.47,-0.55l-0.1,-0.08l-1.16,-0.54l-0.13,-0.03l-1.83,0.04l-0.32,-2.25l7.19,-1.99l1.32,1.12l0.29,0.06l0.55,-0.19l0.75,0.49l0.11,0.81l-0.49,1.11l-0.02,0.15l0.19,1.81l0.09,0.18l1.63,1.59l0.48,-0.1l0.72,-1.68l0.99,-0.49l0.17,-0.29l-0.21,-3.29l-0.04,-0.13l-1.11,-1.92l-0.9,-0.82l-0.21,-0.08l-0.62,0.03l-0.63,-2.98l0.61,-1.67Z",
      "name": "Mozambique"
    }
  },
  "height": 440.7063107441331,
  "projection": {
    "type": "mill",
    "centralMeridian": 11.5
  },
  "width": 900.0
});

/***/ }),

/***/ "./resources/js/admin/jquery.knob.min.js":
/*!***********************************************!*\
  !*** ./resources/js/admin/jquery.knob.min.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (e) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (e),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
})(function (e) {
  "use strict";

  var t = {},
      n = Math.max,
      r = Math.min;
  t.c = {};
  t.c.d = e(document);

  t.c.t = function (e) {
    return e.originalEvent.touches.length - 1;
  };

  t.o = function () {
    var n = this;
    this.o = null;
    this.$ = null;
    this.i = null;
    this.g = null;
    this.v = null;
    this.cv = null;
    this.x = 0;
    this.y = 0;
    this.w = 0;
    this.h = 0;
    this.$c = null;
    this.c = null;
    this.t = 0;
    this.isInit = false;
    this.fgColor = null;
    this.pColor = null;
    this.dH = null;
    this.cH = null;
    this.eH = null;
    this.rH = null;
    this.scale = 1;
    this.relative = false;
    this.relativeWidth = false;
    this.relativeHeight = false;
    this.$div = null;

    this.run = function () {
      var t = function t(e, _t) {
        var r;

        for (r in _t) {
          n.o[r] = _t[r];
        }

        n._carve().init();

        n._configure()._draw();
      };

      if (this.$.data("kontroled")) return;
      this.$.data("kontroled", true);
      this.extend();
      this.o = e.extend({
        min: this.$.data("min") !== undefined ? this.$.data("min") : 0,
        max: this.$.data("max") !== undefined ? this.$.data("max") : 100,
        stopper: true,
        readOnly: this.$.data("readonly") || this.$.attr("readonly") === "readonly",
        cursor: this.$.data("cursor") === true && 30 || this.$.data("cursor") || 0,
        thickness: this.$.data("thickness") && Math.max(Math.min(this.$.data("thickness"), 1), .01) || .35,
        lineCap: this.$.data("linecap") || "butt",
        width: this.$.data("width") || 200,
        height: this.$.data("height") || 200,
        displayInput: this.$.data("displayinput") == null || this.$.data("displayinput"),
        displayPrevious: this.$.data("displayprevious"),
        fgColor: this.$.data("fgcolor") || "#87CEEB",
        inputColor: this.$.data("inputcolor"),
        font: this.$.data("font") || "Arial",
        fontWeight: this.$.data("font-weight") || "bold",
        inline: false,
        step: this.$.data("step") || 1,
        rotation: this.$.data("rotation"),
        draw: null,
        change: null,
        cancel: null,
        release: null,
        format: function format(e) {
          return e;
        },
        parse: function parse(e) {
          return parseFloat(e);
        }
      }, this.o);
      this.o.flip = this.o.rotation === "anticlockwise" || this.o.rotation === "acw";

      if (!this.o.inputColor) {
        this.o.inputColor = this.o.fgColor;
      }

      if (this.$.is("fieldset")) {
        this.v = {};
        this.i = this.$.find("input");
        this.i.each(function (t) {
          var r = e(this);
          n.i[t] = r;
          n.v[t] = n.o.parse(r.val());
          r.bind("change blur", function () {
            var e = {};
            e[t] = r.val();
            n.val(n._validate(e));
          });
        });
        this.$.find("legend").remove();
      } else {
        this.i = this.$;
        this.v = this.o.parse(this.$.val());
        this.v === "" && (this.v = this.o.min);
        this.$.bind("change blur", function () {
          n.val(n._validate(n.o.parse(n.$.val())));
        });
      }

      !this.o.displayInput && this.$.hide();
      this.$c = e(document.createElement("canvas")).attr({
        width: this.o.width,
        height: this.o.height
      });
      this.$div = e('<div style="' + (this.o.inline ? "display:inline;" : "") + "width:" + this.o.width + "px;height:" + this.o.height + "px;" + '"></div>');
      this.$.wrap(this.$div).before(this.$c);
      this.$div = this.$.parent();

      if (typeof G_vmlCanvasManager !== "undefined") {
        G_vmlCanvasManager.initElement(this.$c[0]);
      }

      this.c = this.$c[0].getContext ? this.$c[0].getContext("2d") : null;

      if (!this.c) {
        throw {
          name: "CanvasNotSupportedException",
          message: "Canvas not supported. Please use excanvas on IE8.0.",
          toString: function toString() {
            return this.name + ": " + this.message;
          }
        };
      }

      this.scale = (window.devicePixelRatio || 1) / (this.c.webkitBackingStorePixelRatio || this.c.mozBackingStorePixelRatio || this.c.msBackingStorePixelRatio || this.c.oBackingStorePixelRatio || this.c.backingStorePixelRatio || 1);
      this.relativeWidth = this.o.width % 1 !== 0 && this.o.width.indexOf("%");
      this.relativeHeight = this.o.height % 1 !== 0 && this.o.height.indexOf("%");
      this.relative = this.relativeWidth || this.relativeHeight;

      this._carve();

      if (this.v instanceof Object) {
        this.cv = {};
        this.copy(this.v, this.cv);
      } else {
        this.cv = this.v;
      }

      this.$.bind("configure", t).parent().bind("configure", t);

      this._listen()._configure()._xy().init();

      this.isInit = true;
      this.$.val(this.o.format(this.v));

      this._draw();

      return this;
    };

    this._carve = function () {
      if (this.relative) {
        var e = this.relativeWidth ? this.$div.parent().width() * parseInt(this.o.width) / 100 : this.$div.parent().width(),
            t = this.relativeHeight ? this.$div.parent().height() * parseInt(this.o.height) / 100 : this.$div.parent().height();
        this.w = this.h = Math.min(e, t);
      } else {
        this.w = this.o.width;
        this.h = this.o.height;
      }

      this.$div.css({
        width: this.w + "px",
        height: this.h + "px"
      });
      this.$c.attr({
        width: this.w,
        height: this.h
      });

      if (this.scale !== 1) {
        this.$c[0].width = this.$c[0].width * this.scale;
        this.$c[0].height = this.$c[0].height * this.scale;
        this.$c.width(this.w);
        this.$c.height(this.h);
      }

      return this;
    };

    this._draw = function () {
      var e = true;
      n.g = n.c;
      n.clear();
      n.dH && (e = n.dH());
      e !== false && n.draw();
    };

    this._touch = function (e) {
      var r = function r(e) {
        var t = n.xy2val(e.originalEvent.touches[n.t].pageX, e.originalEvent.touches[n.t].pageY);
        if (t == n.cv) return;
        if (n.cH && n.cH(t) === false) return;
        n.change(n._validate(t));

        n._draw();
      };

      this.t = t.c.t(e);
      r(e);
      t.c.d.bind("touchmove.k", r).bind("touchend.k", function () {
        t.c.d.unbind("touchmove.k touchend.k");
        n.val(n.cv);
      });
      return this;
    };

    this._mouse = function (e) {
      var r = function r(e) {
        var t = n.xy2val(e.pageX, e.pageY);
        if (t == n.cv) return;
        if (n.cH && n.cH(t) === false) return;
        n.change(n._validate(t));

        n._draw();
      };

      r(e);
      t.c.d.bind("mousemove.k", r).bind("keyup.k", function (e) {
        if (e.keyCode === 27) {
          t.c.d.unbind("mouseup.k mousemove.k keyup.k");
          if (n.eH && n.eH() === false) return;
          n.cancel();
        }
      }).bind("mouseup.k", function (e) {
        t.c.d.unbind("mousemove.k mouseup.k keyup.k");
        n.val(n.cv);
      });
      return this;
    };

    this._xy = function () {
      var e = this.$c.offset();
      this.x = e.left;
      this.y = e.top;
      return this;
    };

    this._listen = function () {
      if (!this.o.readOnly) {
        this.$c.bind("mousedown", function (e) {
          e.preventDefault();

          n._xy()._mouse(e);
        }).bind("touchstart", function (e) {
          e.preventDefault();

          n._xy()._touch(e);
        });
        this.listen();
      } else {
        this.$.attr("readonly", "readonly");
      }

      if (this.relative) {
        e(window).resize(function () {
          n._carve().init();

          n._draw();
        });
      }

      return this;
    };

    this._configure = function () {
      if (this.o.draw) this.dH = this.o.draw;
      if (this.o.change) this.cH = this.o.change;
      if (this.o.cancel) this.eH = this.o.cancel;
      if (this.o.release) this.rH = this.o.release;

      if (this.o.displayPrevious) {
        this.pColor = this.h2rgba(this.o.fgColor, "0.4");
        this.fgColor = this.h2rgba(this.o.fgColor, "0.6");
      } else {
        this.fgColor = this.o.fgColor;
      }

      return this;
    };

    this._clear = function () {
      this.$c[0].width = this.$c[0].width;
    };

    this._validate = function (e) {
      var t = ~~((e < 0 ? -.5 : .5) + e / this.o.step) * this.o.step;
      return Math.round(t * 100) / 100;
    };

    this.listen = function () {};

    this.extend = function () {};

    this.init = function () {};

    this.change = function (e) {};

    this.val = function (e) {};

    this.xy2val = function (e, t) {};

    this.draw = function () {};

    this.clear = function () {
      this._clear();
    };

    this.h2rgba = function (e, t) {
      var n;
      e = e.substring(1, 7);
      n = [parseInt(e.substring(0, 2), 16), parseInt(e.substring(2, 4), 16), parseInt(e.substring(4, 6), 16)];
      return "rgba(" + n[0] + "," + n[1] + "," + n[2] + "," + t + ")";
    };

    this.copy = function (e, t) {
      for (var n in e) {
        t[n] = e[n];
      }
    };
  };

  t.Dial = function () {
    t.o.call(this);
    this.startAngle = null;
    this.xy = null;
    this.radius = null;
    this.lineWidth = null;
    this.cursorExt = null;
    this.w2 = null;
    this.PI2 = 2 * Math.PI;

    this.extend = function () {
      this.o = e.extend({
        bgColor: this.$.data("bgcolor") || "#EEEEEE",
        angleOffset: this.$.data("angleoffset") || 0,
        angleArc: this.$.data("anglearc") || 360,
        inline: true
      }, this.o);
    };

    this.val = function (e, t) {
      if (null != e) {
        e = this.o.parse(e);

        if (t !== false && e != this.v && this.rH && this.rH(e) === false) {
          return;
        }

        this.cv = this.o.stopper ? n(r(e, this.o.max), this.o.min) : e;
        this.v = this.cv;
        this.$.val(this.o.format(this.v));

        this._draw();
      } else {
        return this.v;
      }
    };

    this.xy2val = function (e, t) {
      var i, s;
      i = Math.atan2(e - (this.x + this.w2), -(t - this.y - this.w2)) - this.angleOffset;

      if (this.o.flip) {
        i = this.angleArc - i - this.PI2;
      }

      if (this.angleArc != this.PI2 && i < 0 && i > -.5) {
        i = 0;
      } else if (i < 0) {
        i += this.PI2;
      }

      s = i * (this.o.max - this.o.min) / this.angleArc + this.o.min;
      this.o.stopper && (s = n(r(s, this.o.max), this.o.min));
      return s;
    };

    this.listen = function () {
      var t = this,
          i,
          s,
          o = function o(e) {
        e.preventDefault();
        var o = e.originalEvent,
            u = o.detail || o.wheelDeltaX,
            a = o.detail || o.wheelDeltaY,
            f = t._validate(t.o.parse(t.$.val())) + (u > 0 || a > 0 ? t.o.step : u < 0 || a < 0 ? -t.o.step : 0);
        f = n(r(f, t.o.max), t.o.min);
        t.val(f, false);

        if (t.rH) {
          clearTimeout(i);
          i = setTimeout(function () {
            t.rH(f);
            i = null;
          }, 100);

          if (!s) {
            s = setTimeout(function () {
              if (i) t.rH(f);
              s = null;
            }, 200);
          }
        }
      },
          u,
          a,
          f = 1,
          l = {
        37: -t.o.step,
        38: t.o.step,
        39: t.o.step,
        40: -t.o.step
      };

      this.$.bind("keydown", function (i) {
        var s = i.keyCode;

        if (s >= 96 && s <= 105) {
          s = i.keyCode = s - 48;
        }

        u = parseInt(String.fromCharCode(s));

        if (isNaN(u)) {
          s !== 13 && s !== 8 && s !== 9 && s !== 189 && (s !== 190 || t.$.val().match(/\./)) && i.preventDefault();

          if (e.inArray(s, [37, 38, 39, 40]) > -1) {
            i.preventDefault();
            var o = t.o.parse(t.$.val()) + l[s] * f;
            t.o.stopper && (o = n(r(o, t.o.max), t.o.min));
            t.change(t._validate(o));

            t._draw();

            a = window.setTimeout(function () {
              f *= 2;
            }, 30);
          }
        }
      }).bind("keyup", function (e) {
        if (isNaN(u)) {
          if (a) {
            window.clearTimeout(a);
            a = null;
            f = 1;
            t.val(t.$.val());
          }
        } else {
          t.$.val() > t.o.max && t.$.val(t.o.max) || t.$.val() < t.o.min && t.$.val(t.o.min);
        }
      });
      this.$c.bind("mousewheel DOMMouseScroll", o);
      this.$.bind("mousewheel DOMMouseScroll", o);
    };

    this.init = function () {
      if (this.v < this.o.min || this.v > this.o.max) {
        this.v = this.o.min;
      }

      this.$.val(this.v);
      this.w2 = this.w / 2;
      this.cursorExt = this.o.cursor / 100;
      this.xy = this.w2 * this.scale;
      this.lineWidth = this.xy * this.o.thickness;
      this.lineCap = this.o.lineCap;
      this.radius = this.xy - this.lineWidth / 2;
      this.o.angleOffset && (this.o.angleOffset = isNaN(this.o.angleOffset) ? 0 : this.o.angleOffset);
      this.o.angleArc && (this.o.angleArc = isNaN(this.o.angleArc) ? this.PI2 : this.o.angleArc);
      this.angleOffset = this.o.angleOffset * Math.PI / 180;
      this.angleArc = this.o.angleArc * Math.PI / 180;
      this.startAngle = 1.5 * Math.PI + this.angleOffset;
      this.endAngle = 1.5 * Math.PI + this.angleOffset + this.angleArc;
      var e = n(String(Math.abs(this.o.max)).length, String(Math.abs(this.o.min)).length, 2) + 2;
      this.o.displayInput && this.i.css({
        width: (this.w / 2 + 4 >> 0) + "px",
        height: (this.w / 3 >> 0) + "px",
        position: "absolute",
        "vertical-align": "middle",
        "margin-top": (this.w / 3 >> 0) + "px",
        "margin-left": "-" + (this.w * 3 / 4 + 2 >> 0) + "px",
        border: 0,
        background: "none",
        font: this.o.fontWeight + " " + (this.w / e >> 0) + "px " + this.o.font,
        "text-align": "center",
        color: this.o.inputColor || this.o.fgColor,
        padding: "0px",
        "-webkit-appearance": "none"
      }) || this.i.css({
        width: "0px",
        visibility: "hidden"
      });
    };

    this.change = function (e) {
      this.cv = e;
      this.$.val(this.o.format(e));
    };

    this.angle = function (e) {
      return (e - this.o.min) * this.angleArc / (this.o.max - this.o.min);
    };

    this.arc = function (e) {
      var t, n;
      e = this.angle(e);

      if (this.o.flip) {
        t = this.endAngle + 1e-5;
        n = t - e - 1e-5;
      } else {
        t = this.startAngle - 1e-5;
        n = t + e + 1e-5;
      }

      this.o.cursor && (t = n - this.cursorExt) && (n = n + this.cursorExt);
      return {
        s: t,
        e: n,
        d: this.o.flip && !this.o.cursor
      };
    };

    this.draw = function () {
      var e = this.g,
          t = this.arc(this.cv),
          n,
          r = 1;
      e.lineWidth = this.lineWidth;
      e.lineCap = this.lineCap;

      if (this.o.bgColor !== "none") {
        e.beginPath();
        e.strokeStyle = this.o.bgColor;
        e.arc(this.xy, this.xy, this.radius, this.endAngle - 1e-5, this.startAngle + 1e-5, true);
        e.stroke();
      }

      if (this.o.displayPrevious) {
        n = this.arc(this.v);
        e.beginPath();
        e.strokeStyle = this.pColor;
        e.arc(this.xy, this.xy, this.radius, n.s, n.e, n.d);
        e.stroke();
        r = this.cv == this.v;
      }

      e.beginPath();
      e.strokeStyle = r ? this.o.fgColor : this.fgColor;
      e.arc(this.xy, this.xy, this.radius, t.s, t.e, t.d);
      e.stroke();
    };

    this.cancel = function () {
      this.val(this.v);
    };
  };

  e.fn.dial = e.fn.knob = function (n) {
    return this.each(function () {
      var r = new t.Dial();
      r.o = n;
      r.$ = e(this);
      r.run();
    }).parent();
  };
});

/***/ }),

/***/ "./resources/js/admin/jquery.slimscroll.min.js":
/*!*****************************************************!*\
  !*** ./resources/js/admin/jquery.slimscroll.min.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*! Copyright (c) 2011 Piotr Rochala (http://rocha.la)
 * Dual licensed under the MIT (http://www.opensource.org/licenses/mit-license.php)
 * and GPL (http://www.opensource.org/licenses/gpl-license.php) licenses.
 *
 * Version: 1.3.8
 *
 */
(function (e) {
  e.fn.extend({
    slimScroll: function slimScroll(f) {
      var a = e.extend({
        width: "auto",
        height: "250px",
        size: "7px",
        color: "#000",
        position: "right",
        distance: "1px",
        start: "top",
        opacity: .4,
        alwaysVisible: !1,
        disableFadeOut: !1,
        railVisible: !1,
        railColor: "#333",
        railOpacity: .2,
        railDraggable: !0,
        railClass: "slimScrollRail",
        barClass: "slimScrollBar",
        wrapperClass: "slimScrollDiv",
        allowPageScroll: !1,
        wheelStep: 20,
        touchScrollStep: 200,
        borderRadius: "7px",
        railBorderRadius: "7px"
      }, f);
      this.each(function () {
        function v(d) {
          if (r) {
            d = d || window.event;
            var c = 0;
            d.wheelDelta && (c = -d.wheelDelta / 120);
            d.detail && (c = d.detail / 3);
            e(d.target || d.srcTarget || d.srcElement).closest("." + a.wrapperClass).is(b.parent()) && n(c, !0);
            d.preventDefault && !k && d.preventDefault();
            k || (d.returnValue = !1);
          }
        }

        function n(d, g, e) {
          k = !1;
          var f = b.outerHeight() - c.outerHeight();
          g && (g = parseInt(c.css("top")) + d * parseInt(a.wheelStep) / 100 * c.outerHeight(), g = Math.min(Math.max(g, 0), f), g = 0 < d ? Math.ceil(g) : Math.floor(g), c.css({
            top: g + "px"
          }));
          l = parseInt(c.css("top")) / (b.outerHeight() - c.outerHeight());
          g = l * (b[0].scrollHeight - b.outerHeight());
          e && (g = d, d = g / b[0].scrollHeight * b.outerHeight(), d = Math.min(Math.max(d, 0), f), c.css({
            top: d + "px"
          }));
          b.scrollTop(g);
          b.trigger("slimscrolling", ~~g);
          w();
          p();
        }

        function x() {
          u = Math.max(b.outerHeight() / b[0].scrollHeight * b.outerHeight(), 30);
          c.css({
            height: u + "px"
          });
          var a = u == b.outerHeight() ? "none" : "block";
          c.css({
            display: a
          });
        }

        function w() {
          x();
          clearTimeout(B);
          l == ~~l ? (k = a.allowPageScroll, C != l && b.trigger("slimscroll", 0 == ~~l ? "top" : "bottom")) : k = !1;
          C = l;
          u >= b.outerHeight() ? k = !0 : (c.stop(!0, !0).fadeIn("fast"), a.railVisible && m.stop(!0, !0).fadeIn("fast"));
        }

        function p() {
          a.alwaysVisible || (B = setTimeout(function () {
            a.disableFadeOut && r || y || z || (c.fadeOut("slow"), m.fadeOut("slow"));
          }, 1E3));
        }

        var r,
            y,
            z,
            B,
            A,
            u,
            l,
            C,
            k = !1,
            b = e(this);

        if (b.parent().hasClass(a.wrapperClass)) {
          var q = b.scrollTop(),
              c = b.siblings("." + a.barClass),
              m = b.siblings("." + a.railClass);
          x();

          if (e.isPlainObject(f)) {
            if ("height" in f && "auto" == f.height) {
              b.parent().css("height", "auto");
              b.css("height", "auto");
              var h = b.parent().parent().height();
              b.parent().css("height", h);
              b.css("height", h);
            } else "height" in f && (h = f.height, b.parent().css("height", h), b.css("height", h));

            if ("scrollTo" in f) q = parseInt(a.scrollTo);else if ("scrollBy" in f) q += parseInt(a.scrollBy);else if ("destroy" in f) {
              c.remove();
              m.remove();
              b.unwrap();
              return;
            }
            n(q, !1, !0);
          }
        } else if (!(e.isPlainObject(f) && "destroy" in f)) {
          a.height = "auto" == a.height ? b.parent().height() : a.height;
          q = e("<div></div>").addClass(a.wrapperClass).css({
            position: "relative",
            overflow: "hidden",
            width: a.width,
            height: a.height
          });
          b.css({
            overflow: "hidden",
            width: a.width,
            height: a.height
          });
          var m = e("<div></div>").addClass(a.railClass).css({
            width: a.size,
            height: "100%",
            position: "absolute",
            top: 0,
            display: a.alwaysVisible && a.railVisible ? "block" : "none",
            "border-radius": a.railBorderRadius,
            background: a.railColor,
            opacity: a.railOpacity,
            zIndex: 90
          }),
              c = e("<div></div>").addClass(a.barClass).css({
            background: a.color,
            width: a.size,
            position: "absolute",
            top: 0,
            opacity: a.opacity,
            display: a.alwaysVisible ? "block" : "none",
            "border-radius": a.borderRadius,
            BorderRadius: a.borderRadius,
            MozBorderRadius: a.borderRadius,
            WebkitBorderRadius: a.borderRadius,
            zIndex: 99
          }),
              h = "right" == a.position ? {
            right: a.distance
          } : {
            left: a.distance
          };
          m.css(h);
          c.css(h);
          b.wrap(q);
          b.parent().append(c);
          b.parent().append(m);
          a.railDraggable && c.bind("mousedown", function (a) {
            var b = e(document);
            z = !0;
            t = parseFloat(c.css("top"));
            pageY = a.pageY;
            b.bind("mousemove.slimscroll", function (a) {
              currTop = t + a.pageY - pageY;
              c.css("top", currTop);
              n(0, c.position().top, !1);
            });
            b.bind("mouseup.slimscroll", function (a) {
              z = !1;
              p();
              b.unbind(".slimscroll");
            });
            return !1;
          }).bind("selectstart.slimscroll", function (a) {
            a.stopPropagation();
            a.preventDefault();
            return !1;
          });
          m.hover(function () {
            w();
          }, function () {
            p();
          });
          c.hover(function () {
            y = !0;
          }, function () {
            y = !1;
          });
          b.hover(function () {
            r = !0;
            w();
            p();
          }, function () {
            r = !1;
            p();
          });
          b.bind("touchstart", function (a, b) {
            a.originalEvent.touches.length && (A = a.originalEvent.touches[0].pageY);
          });
          b.bind("touchmove", function (b) {
            k || b.originalEvent.preventDefault();
            b.originalEvent.touches.length && (n((A - b.originalEvent.touches[0].pageY) / a.touchScrollStep, !0), A = b.originalEvent.touches[0].pageY);
          });
          x();
          "bottom" === a.start ? (c.css({
            top: b.outerHeight() - c.outerHeight()
          }), n(0, !0)) : "top" !== a.start && (n(e(a.start).position().top, null, !0), a.alwaysVisible || c.hide());
          window.addEventListener ? (this.addEventListener("DOMMouseScroll", v, !1), this.addEventListener("mousewheel", v, !1)) : document.attachEvent("onmousewheel", v);
        }
      });
      return this;
    }
  });
  e.fn.extend({
    slimscroll: e.fn.slimScroll
  });
})(jQuery);

/***/ }),

/***/ "./resources/js/admin/jquery.sparkline.min.js":
/*!****************************************************!*\
  !*** ./resources/js/admin/jquery.sparkline.min.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/* jquery.sparkline 2.1.3 - http://omnipotent.net/jquery.sparkline/ 
** Licensed under the New BSD License - see above site for details */
(function (document, Math, undefined) {
  (function (factory) {
    if (true) {
      !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else {}
  })(function ($) {
    "use strict";

    var UNSET_OPTION = {},
        getDefaults,
        createClass,
        SPFormat,
        clipval,
        quartile,
        normalizeValue,
        normalizeValues,
        remove,
        isNumber,
        all,
        sum,
        addCSS,
        ensureArray,
        formatNumber,
        RangeMap,
        MouseHandler,
        Tooltip,
        barHighlightMixin,
        line,
        bar,
        tristate,
        discrete,
        bullet,
        pie,
        box,
        defaultStyles,
        initStyles,
        VShape,
        VCanvas_base,
        VCanvas_canvas,
        VCanvas_vml,
        pending,
        shapeCount = 0;

    getDefaults = function getDefaults() {
      return {
        common: {
          type: "line",
          lineColor: "#00f",
          fillColor: "#cdf",
          defaultPixelsPerValue: 3,
          width: "auto",
          height: "auto",
          composite: false,
          tagValuesAttribute: "values",
          tagOptionsPrefix: "spark",
          enableTagOptions: false,
          enableHighlight: true,
          highlightLighten: 1.4,
          tooltipSkipNull: true,
          tooltipPrefix: "",
          tooltipSuffix: "",
          disableHiddenCheck: false,
          numberFormatter: false,
          numberDigitGroupCount: 3,
          numberDigitGroupSep: ",",
          numberDecimalMark: ".",
          disableTooltips: false,
          disableInteraction: false
        },
        line: {
          spotColor: "#f80",
          highlightSpotColor: "#5f5",
          highlightLineColor: "#f22",
          spotRadius: 1.5,
          minSpotColor: "#f80",
          maxSpotColor: "#f80",
          lineWidth: 1,
          normalRangeMin: undefined,
          normalRangeMax: undefined,
          normalRangeColor: "#ccc",
          drawNormalOnTop: false,
          chartRangeMin: undefined,
          chartRangeMax: undefined,
          chartRangeMinX: undefined,
          chartRangeMaxX: undefined,
          tooltipFormat: new SPFormat('<span style="color: {{color}}">&#9679;</span> {{prefix}}{{y}}{{suffix}}')
        },
        bar: {
          barColor: "#3366cc",
          negBarColor: "#f44",
          stackedBarColor: ["#3366cc", "#dc3912", "#ff9900", "#109618", "#66aa00", "#dd4477", "#0099c6", "#990099"],
          zeroColor: undefined,
          nullColor: undefined,
          zeroAxis: true,
          barWidth: 4,
          barSpacing: 1,
          chartRangeMax: undefined,
          chartRangeMin: undefined,
          chartRangeClip: false,
          colorMap: undefined,
          tooltipFormat: new SPFormat('<span style="color: {{color}}">&#9679;</span> {{prefix}}{{value}}{{suffix}}')
        },
        tristate: {
          barWidth: 4,
          barSpacing: 1,
          posBarColor: "#6f6",
          negBarColor: "#f44",
          zeroBarColor: "#999",
          colorMap: {},
          tooltipFormat: new SPFormat('<span style="color: {{color}}">&#9679;</span> {{value:map}}'),
          tooltipValueLookups: {
            map: {
              "-1": "Loss",
              0: "Draw",
              1: "Win"
            }
          }
        },
        discrete: {
          lineHeight: "auto",
          thresholdColor: undefined,
          thresholdValue: 0,
          chartRangeMax: undefined,
          chartRangeMin: undefined,
          chartRangeClip: false,
          tooltipFormat: new SPFormat("{{prefix}}{{value}}{{suffix}}")
        },
        bullet: {
          targetColor: "#f33",
          targetWidth: 3,
          performanceColor: "#33f",
          rangeColors: ["#d3dafe", "#a8b6ff", "#7f94ff"],
          base: undefined,
          tooltipFormat: new SPFormat("{{fieldkey:fields}} - {{value}}"),
          tooltipValueLookups: {
            fields: {
              r: "Range",
              p: "Performance",
              t: "Target"
            }
          }
        },
        pie: {
          offset: 0,
          sliceColors: ["#3366cc", "#dc3912", "#ff9900", "#109618", "#66aa00", "#dd4477", "#0099c6", "#990099"],
          borderWidth: 0,
          borderColor: "#000",
          tooltipFormat: new SPFormat('<span style="color: {{color}}">&#9679;</span> {{value}} ({{percent.1}}%)')
        },
        box: {
          raw: false,
          boxLineColor: "#000",
          boxFillColor: "#cdf",
          whiskerColor: "#000",
          outlierLineColor: "#333",
          outlierFillColor: "#fff",
          medianColor: "#f00",
          showOutliers: true,
          outlierIQR: 1.5,
          spotRadius: 1.5,
          target: undefined,
          targetColor: "#4a2",
          chartRangeMax: undefined,
          chartRangeMin: undefined,
          tooltipFormat: new SPFormat("{{field:fields}}: {{value}}"),
          tooltipFormatFieldlistKey: "field",
          tooltipValueLookups: {
            fields: {
              lq: "Lower Quartile",
              med: "Median",
              uq: "Upper Quartile",
              lo: "Left Outlier",
              ro: "Right Outlier",
              lw: "Left Whisker",
              rw: "Right Whisker"
            }
          }
        }
      };
    };

    defaultStyles = ".jqstooltip { " + "position: absolute;" + "left: 0px;" + "top: 0px;" + "visibility: hidden;" + "background: rgb(0, 0, 0) transparent;" + "background-color: rgba(0,0,0,0.6);" + "filter:progid:DXImageTransform.Microsoft.gradient(startColorstr=#99000000, endColorstr=#99000000);" + '-ms-filter: "progid:DXImageTransform.Microsoft.gradient(startColorstr=#99000000, endColorstr=#99000000)";' + "color: white;" + "font: 10px arial, san serif;" + "text-align: left;" + "white-space: nowrap;" + "padding: 5px;" + "border: 1px solid white;" + "box-sizing: content-box;" + "z-index: 10000;" + "}" + ".jqsfield { " + "color: white;" + "font: 10px arial, san serif;" + "text-align: left;" + "}";

    createClass = function createClass() {
      var Class, args;

      Class = function Class() {
        this.init.apply(this, arguments);
      };

      if (arguments.length > 1) {
        if (arguments[0]) {
          Class.prototype = $.extend(new arguments[0](), arguments[arguments.length - 1]);
          Class._super = arguments[0].prototype;
        } else {
          Class.prototype = arguments[arguments.length - 1];
        }

        if (arguments.length > 2) {
          args = Array.prototype.slice.call(arguments, 1, -1);
          args.unshift(Class.prototype);
          $.extend.apply($, args);
        }
      } else {
        Class.prototype = arguments[0];
      }

      Class.prototype.cls = Class;
      return Class;
    };

    $.SPFormatClass = SPFormat = createClass({
      fre: /\{\{([\w.]+?)(:(.+?))?\}\}/g,
      precre: /(\w+)\.(\d+)/,
      init: function init(format, fclass) {
        this.format = format;
        this.fclass = fclass;
      },
      render: function render(fieldset, lookups, options) {
        var self = this,
            fields = fieldset,
            match,
            token,
            lookupkey,
            fieldvalue,
            prec;
        return this.format.replace(this.fre, function () {
          var lookup;
          token = arguments[1];
          lookupkey = arguments[3];
          match = self.precre.exec(token);

          if (match) {
            prec = match[2];
            token = match[1];
          } else {
            prec = false;
          }

          fieldvalue = fields[token];

          if (fieldvalue === undefined) {
            return "";
          }

          if (lookupkey && lookups && lookups[lookupkey]) {
            lookup = lookups[lookupkey];

            if (lookup.get) {
              return lookups[lookupkey].get(fieldvalue) || fieldvalue;
            } else {
              return lookups[lookupkey][fieldvalue] || fieldvalue;
            }
          }

          if (isNumber(fieldvalue)) {
            if (options.get("numberFormatter")) {
              fieldvalue = options.get("numberFormatter")(fieldvalue);
            } else {
              fieldvalue = formatNumber(fieldvalue, prec, options.get("numberDigitGroupCount"), options.get("numberDigitGroupSep"), options.get("numberDecimalMark"));
            }
          }

          return fieldvalue;
        });
      }
    });

    $.spformat = function (format, fclass) {
      return new SPFormat(format, fclass);
    };

    clipval = function clipval(val, min, max) {
      if (val < min) {
        return min;
      }

      if (val > max) {
        return max;
      }

      return val;
    };

    quartile = function quartile(values, q) {
      var vl;

      if (q === 2) {
        vl = Math.floor(values.length / 2);
        return values.length % 2 ? values[vl] : (values[vl - 1] + values[vl]) / 2;
      } else {
        if (values.length % 2) {
          vl = (values.length * q + q) / 4;
          return vl % 1 ? (values[Math.floor(vl)] + values[Math.floor(vl) - 1]) / 2 : values[vl - 1];
        } else {
          vl = (values.length * q + 2) / 4;
          return vl % 1 ? (values[Math.floor(vl)] + values[Math.floor(vl) - 1]) / 2 : values[vl - 1];
        }
      }
    };

    normalizeValue = function normalizeValue(val) {
      var nf;

      switch (val) {
        case "undefined":
          val = undefined;
          break;

        case "null":
          val = null;
          break;

        case "true":
          val = true;
          break;

        case "false":
          val = false;
          break;

        default:
          nf = parseFloat(val);

          if (val == nf) {
            val = nf;
          }

      }

      return val;
    };

    normalizeValues = function normalizeValues(vals) {
      var i,
          result = [];

      for (i = vals.length; i--;) {
        result[i] = normalizeValue(vals[i]);
      }

      return result;
    };

    remove = function remove(vals, filter) {
      var i,
          vl,
          result = [];

      for (i = 0, vl = vals.length; i < vl; i++) {
        if (vals[i] !== filter) {
          result.push(vals[i]);
        }
      }

      return result;
    };

    isNumber = function isNumber(num) {
      return !isNaN(parseFloat(num)) && isFinite(num);
    };

    formatNumber = function formatNumber(num, prec, groupsize, groupsep, decsep) {
      var p, i;
      num = (prec === false ? parseFloat(num).toString() : num.toFixed(prec)).split("");
      p = (p = $.inArray(".", num)) < 0 ? num.length : p;

      if (p < num.length) {
        num[p] = decsep;
      }

      for (i = p - groupsize; i > 0; i -= groupsize) {
        num.splice(i, 0, groupsep);
      }

      return num.join("");
    };

    all = function all(val, arr, ignoreNull) {
      var i;

      for (i = arr.length; i--;) {
        if (ignoreNull && arr[i] === null) continue;

        if (arr[i] !== val) {
          return false;
        }
      }

      return true;
    };

    sum = function sum(vals) {
      var total = 0,
          i;

      for (i = vals.length; i--;) {
        total += typeof vals[i] === "number" ? vals[i] : 0;
      }

      return total;
    };

    ensureArray = function ensureArray(val) {
      return $.isArray(val) ? val : [val];
    };

    addCSS = function addCSS(css) {
      var tag, iefail;

      if (document.createStyleSheet) {
        try {
          document.createStyleSheet().cssText = css;
          return;
        } catch (e) {
          iefail = true;
        }
      }

      tag = document.createElement("style");
      tag.type = "text/css";
      document.getElementsByTagName("head")[0].appendChild(tag);

      if (iefail) {
        document.styleSheets[document.styleSheets.length - 1].cssText = css;
      } else {
        tag[typeof document.body.style.WebkitAppearance == "string" ? "innerText" : "innerHTML"] = css;
      }
    };

    $.fn.simpledraw = function (width, height, useExisting, interact) {
      var target, mhandler;

      if (useExisting && (target = this.data("_jqs_vcanvas"))) {
        return target;
      }

      if ($.fn.sparkline.canvas === false) {
        return false;
      } else if ($.fn.sparkline.canvas === undefined) {
        var el = document.createElement("canvas");

        if (!!(el.getContext && el.getContext("2d"))) {
          $.fn.sparkline.canvas = function (width, height, target, interact) {
            return new VCanvas_canvas(width, height, target, interact);
          };
        } else if (document.namespaces && !document.namespaces.v) {
          document.namespaces.add("v", "urn:schemas-microsoft-com:vml", "#default#VML");

          $.fn.sparkline.canvas = function (width, height, target, interact) {
            return new VCanvas_vml(width, height, target);
          };
        } else {
          $.fn.sparkline.canvas = false;
          return false;
        }
      }

      if (width === undefined) {
        width = $(this).innerWidth();
      }

      if (height === undefined) {
        height = $(this).innerHeight();
      }

      target = $.fn.sparkline.canvas(width, height, this, interact);
      mhandler = $(this).data("_jqs_mhandler");

      if (mhandler) {
        mhandler.registerCanvas(target);
      }

      return target;
    };

    $.fn.cleardraw = function () {
      var target = this.data("_jqs_vcanvas");

      if (target) {
        target.reset();
      }
    };

    $.RangeMapClass = RangeMap = createClass({
      init: function init(map) {
        var key,
            range,
            rangelist = [];

        for (key in map) {
          if (map.hasOwnProperty(key) && typeof key === "string" && key.indexOf(":") > -1) {
            range = key.split(":");
            range[0] = range[0].length === 0 ? -Infinity : parseFloat(range[0]);
            range[1] = range[1].length === 0 ? Infinity : parseFloat(range[1]);
            range[2] = map[key];
            rangelist.push(range);
          }
        }

        this.map = map;
        this.rangelist = rangelist || false;
      },
      get: function get(value) {
        var rangelist = this.rangelist,
            i,
            range,
            result;

        if ((result = this.map[value]) !== undefined) {
          return result;
        }

        if (rangelist) {
          for (i = rangelist.length; i--;) {
            range = rangelist[i];

            if (range[0] <= value && range[1] >= value) {
              return range[2];
            }
          }
        }

        return undefined;
      }
    });

    $.range_map = function (map) {
      return new RangeMap(map);
    };

    MouseHandler = createClass({
      init: function init(el, options) {
        var $el = $(el);
        this.$el = $el;
        this.options = options;
        this.currentPageX = 0;
        this.currentPageY = 0;
        this.el = el;
        this.splist = [];
        this.tooltip = null;
        this.over = false;
        this.displayTooltips = !options.get("disableTooltips");
        this.highlightEnabled = !options.get("disableHighlight");
      },
      registerSparkline: function registerSparkline(sp) {
        this.splist.push(sp);

        if (this.over) {
          this.updateDisplay();
        }
      },
      registerCanvas: function registerCanvas(canvas) {
        var $canvas = $(canvas.canvas);
        this.canvas = canvas;
        this.$canvas = $canvas;
        $canvas.mouseenter($.proxy(this.mouseenter, this));
        $canvas.mouseleave($.proxy(this.mouseleave, this));
        $canvas.click($.proxy(this.mouseclick, this));
      },
      reset: function reset(removeTooltip) {
        this.splist = [];

        if (this.tooltip && removeTooltip) {
          this.tooltip.remove();
          this.tooltip = undefined;
        }
      },
      mouseclick: function mouseclick(e) {
        var clickEvent = $.Event("sparklineClick");
        clickEvent.originalEvent = e;
        clickEvent.sparklines = this.splist;
        this.$el.trigger(clickEvent);
      },
      mouseenter: function mouseenter(e) {
        $(document.body).unbind("mousemove.jqs");
        $(document.body).bind("mousemove.jqs", $.proxy(this.mousemove, this));
        this.over = true;
        this.currentPageX = e.pageX;
        this.currentPageY = e.pageY;
        this.currentEl = e.target;

        if (!this.tooltip && this.displayTooltips) {
          this.tooltip = new Tooltip(this.options);
          this.tooltip.updatePosition(e.pageX, e.pageY);
        }

        this.updateDisplay();
      },
      mouseleave: function mouseleave() {
        $(document.body).unbind("mousemove.jqs");
        var splist = this.splist,
            spcount = splist.length,
            needsRefresh = false,
            sp,
            i;
        this.over = false;
        this.currentEl = null;

        if (this.tooltip) {
          this.tooltip.remove();
          this.tooltip = null;
        }

        for (i = 0; i < spcount; i++) {
          sp = splist[i];

          if (sp.clearRegionHighlight()) {
            needsRefresh = true;
          }
        }

        if (needsRefresh) {
          this.canvas.render();
        }
      },
      mousemove: function mousemove(e) {
        this.currentPageX = e.pageX;
        this.currentPageY = e.pageY;
        this.currentEl = e.target;

        if (this.tooltip) {
          this.tooltip.updatePosition(e.pageX, e.pageY);
        }

        this.updateDisplay();
      },
      updateDisplay: function updateDisplay() {
        var splist = this.splist,
            spcount = splist.length,
            needsRefresh = false,
            offset = this.$canvas.offset(),
            localX = this.currentPageX - offset.left,
            localY = this.currentPageY - offset.top,
            tooltiphtml,
            sp,
            i,
            result,
            changeEvent;

        if (!this.over) {
          return;
        }

        for (i = 0; i < spcount; i++) {
          sp = splist[i];
          result = sp.setRegionHighlight(this.currentEl, localX, localY);

          if (result) {
            needsRefresh = true;
          }
        }

        if (needsRefresh) {
          changeEvent = $.Event("sparklineRegionChange");
          changeEvent.sparklines = this.splist;
          this.$el.trigger(changeEvent);

          if (this.tooltip) {
            tooltiphtml = "";

            for (i = 0; i < spcount; i++) {
              sp = splist[i];
              tooltiphtml += sp.getCurrentRegionTooltip();
            }

            this.tooltip.setContent(tooltiphtml);
          }

          if (!this.disableHighlight) {
            this.canvas.render();
          }
        }

        if (result === null) {
          this.mouseleave();
        }
      }
    });
    Tooltip = createClass({
      sizeStyle: "position: static !important;" + "display: block !important;" + "visibility: hidden !important;" + "float: left !important;",
      init: function init(options) {
        var tooltipClassname = options.get("tooltipClassname", "jqstooltip"),
            sizetipStyle = this.sizeStyle,
            offset;
        this.container = options.get("tooltipContainer") || document.body;
        this.tooltipOffsetX = options.get("tooltipOffsetX", 10);
        this.tooltipOffsetY = options.get("tooltipOffsetY", 12);
        $("#jqssizetip").remove();
        $("#jqstooltip").remove();
        this.sizetip = $("<div/>", {
          id: "jqssizetip",
          style: sizetipStyle,
          "class": tooltipClassname
        });
        this.tooltip = $("<div/>", {
          id: "jqstooltip",
          "class": tooltipClassname
        }).appendTo(this.container);
        offset = this.tooltip.offset();
        this.offsetLeft = offset.left;
        this.offsetTop = offset.top;
        this.hidden = true;
        $(window).unbind("resize.jqs scroll.jqs");
        $(window).bind("resize.jqs scroll.jqs", $.proxy(this.updateWindowDims, this));
        this.updateWindowDims();
      },
      updateWindowDims: function updateWindowDims() {
        this.scrollTop = $(window).scrollTop();
        this.scrollLeft = $(window).scrollLeft();
        this.scrollRight = this.scrollLeft + $(window).width();
        this.updatePosition();
      },
      getSize: function getSize(content) {
        this.sizetip.html(content).appendTo(this.container);
        this.width = this.sizetip.width() + 1;
        this.height = this.sizetip.height();
        this.sizetip.remove();
      },
      setContent: function setContent(content) {
        if (!content) {
          this.tooltip.css("visibility", "hidden");
          this.hidden = true;
          return;
        }

        this.getSize(content);
        this.tooltip.html(content).css({
          width: this.width,
          height: this.height,
          visibility: "visible"
        });

        if (this.hidden) {
          this.hidden = false;
          this.updatePosition();
        }
      },
      updatePosition: function updatePosition(x, y) {
        if (x === undefined) {
          if (this.mousex === undefined) {
            return;
          }

          x = this.mousex - this.offsetLeft;
          y = this.mousey - this.offsetTop;
        } else {
          this.mousex = x = x - this.offsetLeft;
          this.mousey = y = y - this.offsetTop;
        }

        if (!this.height || !this.width || this.hidden) {
          return;
        }

        y -= this.height + this.tooltipOffsetY;
        x += this.tooltipOffsetX;

        if (y < this.scrollTop) {
          y = this.scrollTop;
        }

        if (x < this.scrollLeft) {
          x = this.scrollLeft;
        } else if (x + this.width > this.scrollRight) {
          x = this.scrollRight - this.width;
        }

        this.tooltip.css({
          left: x,
          top: y
        });
      },
      remove: function remove() {
        this.tooltip.remove();
        this.sizetip.remove();
        this.sizetip = this.tooltip = undefined;
        $(window).unbind("resize.jqs scroll.jqs");
      }
    });

    initStyles = function initStyles() {
      addCSS(defaultStyles);
    };

    $(initStyles);
    pending = [];

    $.fn.sparkline = function (userValues, userOptions) {
      return this.each(function () {
        var options = new $.fn.sparkline.options(this, userOptions),
            $this = $(this),
            render,
            i;

        render = function render() {
          var values, width, height, tmp, mhandler, sp, vals;

          if (userValues === "html" || userValues === undefined) {
            vals = this.getAttribute(options.get("tagValuesAttribute"));

            if (vals === undefined || vals === null) {
              vals = $this.html();
            }

            values = vals.replace(/(^\s*<!--)|(-->\s*$)|\s+/g, "").split(",");
          } else {
            values = userValues;
          }

          width = options.get("width") === "auto" ? values.length * options.get("defaultPixelsPerValue") : options.get("width");

          if (options.get("height") === "auto") {
            if (!options.get("composite") || !$.data(this, "_jqs_vcanvas")) {
              tmp = document.createElement("span");
              tmp.innerHTML = "a";
              $this.html(tmp);
              height = $(tmp).innerHeight() || $(tmp).height();
              $(tmp).remove();
              tmp = null;
            }
          } else {
            height = options.get("height");
          }

          if (!options.get("disableInteraction")) {
            mhandler = $.data(this, "_jqs_mhandler");

            if (!mhandler) {
              mhandler = new MouseHandler(this, options);
              $.data(this, "_jqs_mhandler", mhandler);
            } else if (!options.get("composite")) {
              mhandler.reset();
            }
          } else {
            mhandler = false;
          }

          if (options.get("composite") && !$.data(this, "_jqs_vcanvas")) {
            if (!$.data(this, "_jqs_errnotify")) {
              alert("Attempted to attach a composite sparkline to an element with no existing sparkline");
              $.data(this, "_jqs_errnotify", true);
            }

            return;
          }

          sp = new $.fn.sparkline[options.get("type")](this, values, options, width, height);
          sp.render();

          if (mhandler) {
            mhandler.registerSparkline(sp);
          }
        };

        if ($(this).html() && !options.get("disableHiddenCheck") && $(this).is(":hidden") || !$(this).parents("body").length) {
          if (!options.get("composite") && $.data(this, "_jqs_pending")) {
            for (i = pending.length; i; i--) {
              if (pending[i - 1][0] == this) {
                pending.splice(i - 1, 1);
              }
            }
          }

          pending.push([this, render]);
          $.data(this, "_jqs_pending", true);
        } else {
          render.call(this);
        }
      });
    };

    $.fn.sparkline.defaults = getDefaults();

    $.sparkline_display_visible = function () {
      var el, i, pl;
      var done = [];

      for (i = 0, pl = pending.length; i < pl; i++) {
        el = pending[i][0];

        if ($(el).is(":visible") && !$(el).parents().is(":hidden")) {
          pending[i][1].call(el);
          $.data(pending[i][0], "_jqs_pending", false);
          done.push(i);
        } else if (!$(el).closest("html").length && !$.data(el, "_jqs_pending")) {
          $.data(pending[i][0], "_jqs_pending", false);
          done.push(i);
        }
      }

      for (i = done.length; i; i--) {
        pending.splice(done[i - 1], 1);
      }
    };

    $.fn.sparkline.options = createClass({
      init: function init(tag, userOptions) {
        var extendedOptions, defaults, base, tagOptionType;
        this.userOptions = userOptions = userOptions || {};
        this.tag = tag;
        this.tagValCache = {};
        defaults = $.fn.sparkline.defaults;
        base = defaults.common;
        this.tagOptionsPrefix = userOptions.enableTagOptions && (userOptions.tagOptionsPrefix || base.tagOptionsPrefix);
        tagOptionType = this.getTagSetting("type");

        if (tagOptionType === UNSET_OPTION) {
          extendedOptions = defaults[userOptions.type || base.type];
        } else {
          extendedOptions = defaults[tagOptionType];
        }

        this.mergedOptions = $.extend({}, base, extendedOptions, userOptions);
      },
      getTagSetting: function getTagSetting(key) {
        var prefix = this.tagOptionsPrefix,
            val,
            i,
            pairs,
            keyval;

        if (prefix === false || prefix === undefined) {
          return UNSET_OPTION;
        }

        if (this.tagValCache.hasOwnProperty(key)) {
          val = this.tagValCache.key;
        } else {
          val = this.tag.getAttribute(prefix + key);

          if (val === undefined || val === null) {
            val = UNSET_OPTION;
          } else if (val.substr(0, 1) === "[") {
            val = val.substr(1, val.length - 2).split(",");

            for (i = val.length; i--;) {
              val[i] = normalizeValue(val[i].replace(/(^\s*)|(\s*$)/g, ""));
            }
          } else if (val.substr(0, 1) === "{") {
            pairs = val.substr(1, val.length - 2).split(",");
            val = {};

            for (i = pairs.length; i--;) {
              keyval = pairs[i].split(":", 2);
              val[keyval[0].replace(/(^\s*)|(\s*$)/g, "")] = normalizeValue(keyval[1].replace(/(^\s*)|(\s*$)/g, ""));
            }
          } else {
            val = normalizeValue(val);
          }

          this.tagValCache.key = val;
        }

        return val;
      },
      get: function get(key, defaultval) {
        var tagOption = this.getTagSetting(key),
            result;

        if (tagOption !== UNSET_OPTION) {
          return tagOption;
        }

        return (result = this.mergedOptions[key]) === undefined ? defaultval : result;
      }
    });
    $.fn.sparkline._base = createClass({
      disabled: false,
      init: function init(el, values, options, width, height) {
        this.el = el;
        this.$el = $(el);
        this.values = values;
        this.options = options;
        this.width = width;
        this.height = height;
        this.currentRegion = undefined;
      },
      initTarget: function initTarget() {
        var interactive = !this.options.get("disableInteraction");

        if (!(this.target = this.$el.simpledraw(this.width, this.height, this.options.get("composite"), interactive))) {
          this.disabled = true;
        } else {
          this.canvasWidth = this.target.pixelWidth;
          this.canvasHeight = this.target.pixelHeight;
        }
      },
      render: function render() {
        if (this.disabled) {
          this.el.innerHTML = "";
          return false;
        }

        return true;
      },
      getRegion: function getRegion(x, y) {},
      setRegionHighlight: function setRegionHighlight(el, x, y) {
        var currentRegion = this.currentRegion,
            highlightEnabled = !this.options.get("disableHighlight"),
            newRegion;

        if (x > this.canvasWidth || y > this.canvasHeight || x < 0 || y < 0) {
          return null;
        }

        newRegion = this.getRegion(el, x, y);

        if (currentRegion !== newRegion) {
          if (currentRegion !== undefined && highlightEnabled) {
            this.removeHighlight();
          }

          this.currentRegion = newRegion;

          if (newRegion !== undefined && highlightEnabled) {
            this.renderHighlight();
          }

          return true;
        }

        return false;
      },
      clearRegionHighlight: function clearRegionHighlight() {
        if (this.currentRegion !== undefined) {
          this.removeHighlight();
          this.currentRegion = undefined;
          return true;
        }

        return false;
      },
      renderHighlight: function renderHighlight() {
        this.changeHighlight(true);
      },
      removeHighlight: function removeHighlight() {
        this.changeHighlight(false);
      },
      changeHighlight: function changeHighlight(highlight) {},
      getCurrentRegionTooltip: function getCurrentRegionTooltip() {
        var options = this.options,
            header = "",
            entries = [],
            fields,
            formats,
            formatlen,
            fclass,
            text,
            i,
            showFields,
            showFieldsKey,
            newFields,
            fv,
            formatter,
            format,
            fieldlen,
            j;

        if (this.currentRegion === undefined) {
          return "";
        }

        fields = this.getCurrentRegionFields();
        formatter = options.get("tooltipFormatter");

        if (formatter) {
          return formatter(this, options, fields);
        }

        if (options.get("tooltipChartTitle")) {
          header += '<div class="jqs jqstitle">' + options.get("tooltipChartTitle") + "</div>\n";
        }

        formats = this.options.get("tooltipFormat");

        if (!formats) {
          return "";
        }

        if (!$.isArray(formats)) {
          formats = [formats];
        }

        if (!$.isArray(fields)) {
          fields = [fields];
        }

        showFields = this.options.get("tooltipFormatFieldlist");
        showFieldsKey = this.options.get("tooltipFormatFieldlistKey");

        if (showFields && showFieldsKey) {
          newFields = [];

          for (i = fields.length; i--;) {
            fv = fields[i][showFieldsKey];

            if ((j = $.inArray(fv, showFields)) != -1) {
              newFields[j] = fields[i];
            }
          }

          fields = newFields;
        }

        formatlen = formats.length;
        fieldlen = fields.length;

        for (i = 0; i < formatlen; i++) {
          format = formats[i];

          if (typeof format === "string") {
            format = new SPFormat(format);
          }

          fclass = format.fclass || "jqsfield";

          for (j = 0; j < fieldlen; j++) {
            if (!fields[j].isNull || !options.get("tooltipSkipNull")) {
              $.extend(fields[j], {
                prefix: options.get("tooltipPrefix"),
                suffix: options.get("tooltipSuffix")
              });
              text = format.render(fields[j], options.get("tooltipValueLookups"), options);
              entries.push('<div class="' + fclass + '">' + text + "</div>");
            }
          }
        }

        if (entries.length) {
          return header + entries.join("\n");
        }

        return "";
      },
      getCurrentRegionFields: function getCurrentRegionFields() {},
      calcHighlightColor: function calcHighlightColor(color, options) {
        var highlightColor = options.get("highlightColor"),
            lighten = options.get("highlightLighten"),
            parse,
            mult,
            rgbnew,
            i;

        if (highlightColor) {
          return highlightColor;
        }

        if (lighten) {
          parse = /^#([0-9a-f])([0-9a-f])([0-9a-f])$/i.exec(color) || /^#([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i.exec(color);

          if (parse) {
            rgbnew = [];
            mult = color.length === 4 ? 16 : 1;

            for (i = 0; i < 3; i++) {
              rgbnew[i] = clipval(Math.round(parseInt(parse[i + 1], 16) * mult * lighten), 0, 255);
            }

            return "rgb(" + rgbnew.join(",") + ")";
          }
        }

        return color;
      }
    });
    barHighlightMixin = {
      changeHighlight: function changeHighlight(highlight) {
        var currentRegion = this.currentRegion,
            target = this.target,
            shapeids = this.regionShapes[currentRegion],
            newShapes;

        if (shapeids) {
          newShapes = this.renderRegion(currentRegion, highlight);

          if ($.isArray(newShapes) || $.isArray(shapeids)) {
            target.replaceWithShapes(shapeids, newShapes);
            this.regionShapes[currentRegion] = $.map(newShapes, function (newShape) {
              return newShape.id;
            });
          } else {
            target.replaceWithShape(shapeids, newShapes);
            this.regionShapes[currentRegion] = newShapes.id;
          }
        }
      },
      render: function render() {
        var values = this.values,
            target = this.target,
            regionShapes = this.regionShapes,
            shapes,
            ids,
            i,
            j;

        if (!this.cls._super.render.call(this)) {
          return;
        }

        for (i = values.length; i--;) {
          shapes = this.renderRegion(i);

          if (shapes) {
            if ($.isArray(shapes)) {
              ids = [];

              for (j = shapes.length; j--;) {
                shapes[j].append();
                ids.push(shapes[j].id);
              }

              regionShapes[i] = ids;
            } else {
              shapes.append();
              regionShapes[i] = shapes.id;
            }
          } else {
            regionShapes[i] = null;
          }
        }

        target.render();
      }
    };
    $.fn.sparkline.line = line = createClass($.fn.sparkline._base, {
      type: "line",
      init: function init(el, values, options, width, height) {
        line._super.init.call(this, el, values, options, width, height);

        this.vertices = [];
        this.regionMap = [];
        this.xvalues = [];
        this.yvalues = [];
        this.yminmax = [];
        this.hightlightSpotId = null;
        this.lastShapeId = null;
        this.initTarget();
      },
      getRegion: function getRegion(el, x, y) {
        var i,
            regionMap = this.regionMap;

        for (i = regionMap.length; i--;) {
          if (regionMap[i] !== null && x >= regionMap[i][0] && x <= regionMap[i][1]) {
            return regionMap[i][2];
          }
        }

        return undefined;
      },
      getCurrentRegionFields: function getCurrentRegionFields() {
        var currentRegion = this.currentRegion;
        return {
          isNull: this.yvalues[currentRegion] === null,
          x: this.xvalues[currentRegion],
          y: this.yvalues[currentRegion],
          color: this.options.get("lineColor"),
          fillColor: this.options.get("fillColor"),
          offset: currentRegion
        };
      },
      renderHighlight: function renderHighlight() {
        var currentRegion = this.currentRegion,
            target = this.target,
            vertex = this.vertices[currentRegion],
            options = this.options,
            spotRadius = options.get("spotRadius"),
            highlightSpotColor = options.get("highlightSpotColor"),
            highlightLineColor = options.get("highlightLineColor"),
            highlightSpot,
            highlightLine;

        if (!vertex) {
          return;
        }

        if (spotRadius && highlightSpotColor) {
          highlightSpot = target.drawCircle(vertex[0], vertex[1], spotRadius, undefined, highlightSpotColor);
          this.highlightSpotId = highlightSpot.id;
          target.insertAfterShape(this.lastShapeId, highlightSpot);
        }

        if (highlightLineColor) {
          highlightLine = target.drawLine(vertex[0], this.canvasTop, vertex[0], this.canvasTop + this.canvasHeight, highlightLineColor);
          this.highlightLineId = highlightLine.id;
          target.insertAfterShape(this.lastShapeId, highlightLine);
        }
      },
      removeHighlight: function removeHighlight() {
        var target = this.target;

        if (this.highlightSpotId) {
          target.removeShapeId(this.highlightSpotId);
          this.highlightSpotId = null;
        }

        if (this.highlightLineId) {
          target.removeShapeId(this.highlightLineId);
          this.highlightLineId = null;
        }
      },
      scanValues: function scanValues() {
        var values = this.values,
            valcount = values.length,
            xvalues = this.xvalues,
            yvalues = this.yvalues,
            yminmax = this.yminmax,
            i,
            val,
            isStr,
            isArray,
            sp;

        for (i = 0; i < valcount; i++) {
          val = values[i];
          isStr = typeof values[i] === "string";
          isArray = _typeof(values[i]) === "object" && values[i] instanceof Array;
          sp = isStr && values[i].split(":");

          if (isStr && sp.length === 2) {
            xvalues.push(Number(sp[0]));
            yvalues.push(Number(sp[1]));
            yminmax.push(Number(sp[1]));
          } else if (isArray) {
            xvalues.push(val[0]);
            yvalues.push(val[1]);
            yminmax.push(val[1]);
          } else {
            xvalues.push(i);

            if (values[i] === null || values[i] === "null") {
              yvalues.push(null);
            } else {
              yvalues.push(Number(val));
              yminmax.push(Number(val));
            }
          }
        }

        if (this.options.get("xvalues")) {
          xvalues = this.options.get("xvalues");
        }

        this.maxy = this.maxyorg = Math.max.apply(Math, yminmax);
        this.miny = this.minyorg = Math.min.apply(Math, yminmax);
        this.maxx = Math.max.apply(Math, xvalues);
        this.minx = Math.min.apply(Math, xvalues);
        this.xvalues = xvalues;
        this.yvalues = yvalues;
        this.yminmax = yminmax;
      },
      processRangeOptions: function processRangeOptions() {
        var options = this.options,
            normalRangeMin = options.get("normalRangeMin"),
            normalRangeMax = options.get("normalRangeMax");

        if (normalRangeMin !== undefined) {
          if (normalRangeMin < this.miny) {
            this.miny = normalRangeMin;
          }

          if (normalRangeMax > this.maxy) {
            this.maxy = normalRangeMax;
          }
        }

        if (options.get("chartRangeMin") !== undefined && (options.get("chartRangeClip") || options.get("chartRangeMin") < this.miny)) {
          this.miny = options.get("chartRangeMin");
        }

        if (options.get("chartRangeMax") !== undefined && (options.get("chartRangeClip") || options.get("chartRangeMax") > this.maxy)) {
          this.maxy = options.get("chartRangeMax");
        }

        if (options.get("chartRangeMinX") !== undefined && (options.get("chartRangeClipX") || options.get("chartRangeMinX") < this.minx)) {
          this.minx = options.get("chartRangeMinX");
        }

        if (options.get("chartRangeMaxX") !== undefined && (options.get("chartRangeClipX") || options.get("chartRangeMaxX") > this.maxx)) {
          this.maxx = options.get("chartRangeMaxX");
        }
      },
      drawNormalRange: function drawNormalRange(canvasLeft, canvasTop, canvasHeight, canvasWidth, rangey) {
        var normalRangeMin = this.options.get("normalRangeMin"),
            normalRangeMax = this.options.get("normalRangeMax"),
            ytop = canvasTop + Math.round(canvasHeight - canvasHeight * ((normalRangeMax - this.miny) / rangey)),
            height = Math.round(canvasHeight * (normalRangeMax - normalRangeMin) / rangey);
        this.target.drawRect(canvasLeft, ytop, canvasWidth, height, undefined, this.options.get("normalRangeColor")).append();
      },
      render: function render() {
        var options = this.options,
            target = this.target,
            canvasWidth = this.canvasWidth,
            canvasHeight = this.canvasHeight,
            vertices = this.vertices,
            spotRadius = options.get("spotRadius"),
            regionMap = this.regionMap,
            rangex,
            rangey,
            yvallast,
            canvasTop,
            canvasLeft,
            vertex,
            path,
            paths,
            x,
            y,
            xnext,
            xpos,
            xposnext,
            last,
            next,
            yvalcount,
            lineShapes,
            fillShapes,
            plen,
            valueSpots,
            hlSpotsEnabled,
            color,
            xvalues,
            yvalues,
            i;

        if (!line._super.render.call(this)) {
          return;
        }

        this.scanValues();
        this.processRangeOptions();
        xvalues = this.xvalues;
        yvalues = this.yvalues;

        if (!this.yminmax.length || this.yvalues.length < 2) {
          return;
        }

        canvasTop = canvasLeft = 0;
        rangex = this.maxx - this.minx === 0 ? 1 : this.maxx - this.minx;
        rangey = this.maxy - this.miny === 0 ? 1 : this.maxy - this.miny;
        yvallast = this.yvalues.length - 1;

        if (spotRadius && (canvasWidth < spotRadius * 4 || canvasHeight < spotRadius * 4)) {
          spotRadius = 0;
        }

        if (spotRadius) {
          hlSpotsEnabled = options.get("highlightSpotColor") && !options.get("disableInteraction");

          if (hlSpotsEnabled || options.get("minSpotColor") || options.get("spotColor") && yvalues[yvallast] === this.miny) {
            canvasHeight -= Math.ceil(spotRadius);
          }

          if (hlSpotsEnabled || options.get("maxSpotColor") || options.get("spotColor") && yvalues[yvallast] === this.maxy) {
            canvasHeight -= Math.ceil(spotRadius);
            canvasTop += Math.ceil(spotRadius);
          }

          if (hlSpotsEnabled || (options.get("minSpotColor") || options.get("maxSpotColor")) && (yvalues[0] === this.miny || yvalues[0] === this.maxy)) {
            canvasLeft += Math.ceil(spotRadius);
            canvasWidth -= Math.ceil(spotRadius);
          }

          if (hlSpotsEnabled || options.get("spotColor") || options.get("minSpotColor") || options.get("maxSpotColor") && (yvalues[yvallast] === this.miny || yvalues[yvallast] === this.maxy)) {
            canvasWidth -= Math.ceil(spotRadius);
          }
        }

        canvasHeight--;

        if (options.get("normalRangeMin") !== undefined && !options.get("drawNormalOnTop")) {
          this.drawNormalRange(canvasLeft, canvasTop, canvasHeight, canvasWidth, rangey);
        }

        path = [];
        paths = [path];
        last = next = null;
        yvalcount = yvalues.length;

        for (i = 0; i < yvalcount; i++) {
          x = xvalues[i];
          xnext = xvalues[i + 1];
          y = yvalues[i];
          xpos = canvasLeft + Math.round((x - this.minx) * (canvasWidth / rangex));
          xposnext = i < yvalcount - 1 ? canvasLeft + Math.round((xnext - this.minx) * (canvasWidth / rangex)) : canvasWidth;
          next = xpos + (xposnext - xpos) / 2;
          regionMap[i] = [last || 0, next, i];
          last = next;

          if (y === null) {
            if (i) {
              if (yvalues[i - 1] !== null) {
                path = [];
                paths.push(path);
              }

              vertices.push(null);
            }
          } else {
            if (y < this.miny) {
              y = this.miny;
            }

            if (y > this.maxy) {
              y = this.maxy;
            }

            if (!path.length) {
              path.push([xpos, canvasTop + canvasHeight]);
            }

            vertex = [xpos, canvasTop + Math.round(canvasHeight - canvasHeight * ((y - this.miny) / rangey))];
            path.push(vertex);
            vertices.push(vertex);
          }
        }

        lineShapes = [];
        fillShapes = [];
        plen = paths.length;

        for (i = 0; i < plen; i++) {
          path = paths[i];

          if (path.length) {
            if (options.get("fillColor")) {
              path.push([path[path.length - 1][0], canvasTop + canvasHeight]);
              fillShapes.push(path.slice(0));
              path.pop();
            }

            if (path.length > 2) {
              path[0] = [path[0][0], path[1][1]];
            }

            lineShapes.push(path);
          }
        }

        plen = fillShapes.length;

        for (i = 0; i < plen; i++) {
          target.drawShape(fillShapes[i], options.get("fillColor"), options.get("fillColor")).append();
        }

        if (options.get("normalRangeMin") !== undefined && options.get("drawNormalOnTop")) {
          this.drawNormalRange(canvasLeft, canvasTop, canvasHeight, canvasWidth, rangey);
        }

        plen = lineShapes.length;

        for (i = 0; i < plen; i++) {
          target.drawShape(lineShapes[i], options.get("lineColor"), undefined, options.get("lineWidth")).append();
        }

        if (spotRadius && options.get("valueSpots")) {
          valueSpots = options.get("valueSpots");

          if (valueSpots.get === undefined) {
            valueSpots = new RangeMap(valueSpots);
          }

          for (i = 0; i < yvalcount; i++) {
            color = valueSpots.get(yvalues[i]);

            if (color) {
              target.drawCircle(canvasLeft + Math.round((xvalues[i] - this.minx) * (canvasWidth / rangex)), canvasTop + Math.round(canvasHeight - canvasHeight * ((yvalues[i] - this.miny) / rangey)), spotRadius, undefined, color).append();
            }
          }
        }

        if (spotRadius && options.get("spotColor") && yvalues[yvallast] !== null) {
          target.drawCircle(canvasLeft + Math.round((xvalues[xvalues.length - 1] - this.minx) * (canvasWidth / rangex)), canvasTop + Math.round(canvasHeight - canvasHeight * ((yvalues[yvallast] - this.miny) / rangey)), spotRadius, undefined, options.get("spotColor")).append();
        }

        if (this.maxy !== this.minyorg) {
          if (spotRadius && options.get("minSpotColor")) {
            x = xvalues[$.inArray(this.minyorg, yvalues)];
            target.drawCircle(canvasLeft + Math.round((x - this.minx) * (canvasWidth / rangex)), canvasTop + Math.round(canvasHeight - canvasHeight * ((this.minyorg - this.miny) / rangey)), spotRadius, undefined, options.get("minSpotColor")).append();
          }

          if (spotRadius && options.get("maxSpotColor")) {
            x = xvalues[$.inArray(this.maxyorg, yvalues)];
            target.drawCircle(canvasLeft + Math.round((x - this.minx) * (canvasWidth / rangex)), canvasTop + Math.round(canvasHeight - canvasHeight * ((this.maxyorg - this.miny) / rangey)), spotRadius, undefined, options.get("maxSpotColor")).append();
          }
        }

        this.lastShapeId = target.getLastShapeId();
        this.canvasTop = canvasTop;
        target.render();
      }
    });
    $.fn.sparkline.bar = bar = createClass($.fn.sparkline._base, barHighlightMixin, {
      type: "bar",
      init: function init(el, values, options, width, height) {
        var barWidth = parseInt(options.get("barWidth"), 10),
            barSpacing = parseInt(options.get("barSpacing"), 10),
            chartRangeMin = options.get("chartRangeMin"),
            chartRangeMax = options.get("chartRangeMax"),
            chartRangeClip = options.get("chartRangeClip"),
            stackMin = Infinity,
            stackMax = -Infinity,
            isStackString,
            groupMin,
            groupMax,
            stackRanges,
            numValues,
            i,
            vlen,
            range,
            zeroAxis,
            xaxisOffset,
            min,
            max,
            clipMin,
            clipMax,
            stacked,
            vlist,
            j,
            slen,
            svals,
            val,
            yoffset,
            yMaxCalc,
            canvasHeightEf;

        bar._super.init.call(this, el, values, options, width, height);

        for (i = 0, vlen = values.length; i < vlen; i++) {
          val = values[i];
          isStackString = typeof val === "string" && val.indexOf(":") > -1;

          if (isStackString || $.isArray(val)) {
            stacked = true;

            if (isStackString) {
              val = values[i] = normalizeValues(val.split(":"));
            }

            val = remove(val, null);
            groupMin = Math.min.apply(Math, val);
            groupMax = Math.max.apply(Math, val);

            if (groupMin < stackMin) {
              stackMin = groupMin;
            }

            if (groupMax > stackMax) {
              stackMax = groupMax;
            }
          }
        }

        this.stacked = stacked;
        this.regionShapes = {};
        this.barWidth = barWidth;
        this.barSpacing = barSpacing;
        this.totalBarWidth = barWidth + barSpacing;
        this.width = width = values.length * barWidth + (values.length - 1) * barSpacing;
        this.initTarget();

        if (chartRangeClip) {
          clipMin = chartRangeMin === undefined ? -Infinity : chartRangeMin;
          clipMax = chartRangeMax === undefined ? Infinity : chartRangeMax;
        }

        numValues = [];
        stackRanges = stacked ? [] : numValues;
        var stackTotals = [];
        var stackRangesNeg = [];

        for (i = 0, vlen = values.length; i < vlen; i++) {
          if (stacked) {
            vlist = values[i];
            values[i] = svals = [];
            stackTotals[i] = 0;
            stackRanges[i] = stackRangesNeg[i] = 0;

            for (j = 0, slen = vlist.length; j < slen; j++) {
              val = svals[j] = chartRangeClip ? clipval(vlist[j], clipMin, clipMax) : vlist[j];

              if (val !== null) {
                if (val > 0) {
                  stackTotals[i] += val;
                }

                if (stackMin < 0 && stackMax > 0) {
                  if (val < 0) {
                    stackRangesNeg[i] += Math.abs(val);
                  } else {
                    stackRanges[i] += val;
                  }
                } else {
                  stackRanges[i] += Math.abs(val - (val < 0 ? stackMax : stackMin));
                }

                numValues.push(val);
              }
            }
          } else {
            val = chartRangeClip ? clipval(values[i], clipMin, clipMax) : values[i];
            val = values[i] = normalizeValue(val);

            if (val !== null) {
              numValues.push(val);
            }
          }
        }

        this.max = max = Math.max.apply(Math, numValues);
        this.min = min = Math.min.apply(Math, numValues);
        this.stackMax = stackMax = stacked ? Math.max.apply(Math, stackTotals) : max;
        this.stackMin = stackMin = stacked ? Math.min.apply(Math, numValues) : min;

        if (options.get("chartRangeMin") !== undefined && (options.get("chartRangeClip") || options.get("chartRangeMin") < min)) {
          min = options.get("chartRangeMin");
        }

        if (options.get("chartRangeMax") !== undefined && (options.get("chartRangeClip") || options.get("chartRangeMax") > max)) {
          max = options.get("chartRangeMax");
        }

        this.zeroAxis = zeroAxis = options.get("zeroAxis", true);

        if (min <= 0 && max >= 0 && zeroAxis) {
          xaxisOffset = 0;
        } else if (zeroAxis == false) {
          xaxisOffset = min;
        } else if (min > 0) {
          xaxisOffset = min;
        } else {
          xaxisOffset = max;
        }

        this.xaxisOffset = xaxisOffset;
        range = stacked ? Math.max.apply(Math, stackRanges) + Math.max.apply(Math, stackRangesNeg) : max - min;
        this.canvasHeightEf = zeroAxis && min < 0 ? this.canvasHeight - 2 : this.canvasHeight - 1;

        if (min < xaxisOffset) {
          yMaxCalc = stacked && max >= 0 ? stackMax : max;
          yoffset = (yMaxCalc - xaxisOffset) / range * this.canvasHeight;

          if (yoffset !== Math.ceil(yoffset)) {
            this.canvasHeightEf -= 2;
            yoffset = Math.ceil(yoffset);
          }
        } else {
          yoffset = this.canvasHeight;
        }

        this.yoffset = yoffset;

        if ($.isArray(options.get("colorMap"))) {
          this.colorMapByIndex = options.get("colorMap");
          this.colorMapByValue = null;
        } else {
          this.colorMapByIndex = null;
          this.colorMapByValue = options.get("colorMap");

          if (this.colorMapByValue && this.colorMapByValue.get === undefined) {
            this.colorMapByValue = new RangeMap(this.colorMapByValue);
          }
        }

        this.range = range;
      },
      getRegion: function getRegion(el, x, y) {
        var result = Math.floor(x / this.totalBarWidth);
        return result < 0 || result >= this.values.length ? undefined : result;
      },
      getCurrentRegionFields: function getCurrentRegionFields() {
        var currentRegion = this.currentRegion,
            values = ensureArray(this.values[currentRegion]),
            result = [],
            value,
            i;

        for (i = values.length; i--;) {
          value = values[i];
          result.push({
            isNull: value === null,
            value: value,
            color: this.calcColor(i, value, currentRegion),
            offset: currentRegion
          });
        }

        return result;
      },
      calcColor: function calcColor(stacknum, value, valuenum) {
        var colorMapByIndex = this.colorMapByIndex,
            colorMapByValue = this.colorMapByValue,
            options = this.options,
            color,
            newColor;

        if (this.stacked) {
          color = options.get("stackedBarColor");
        } else {
          color = value < 0 ? options.get("negBarColor") : options.get("barColor");
        }

        if (value === 0 && options.get("zeroColor") !== undefined) {
          color = options.get("zeroColor");
        }

        if (colorMapByValue && (newColor = colorMapByValue.get(value))) {
          color = newColor;
        } else if (colorMapByIndex && colorMapByIndex.length > valuenum) {
          color = colorMapByIndex[valuenum];
        }

        return $.isArray(color) ? color[stacknum % color.length] : color;
      },
      renderRegion: function renderRegion(valuenum, highlight) {
        var vals = this.values[valuenum],
            options = this.options,
            xaxisOffset = this.xaxisOffset,
            result = [],
            range = this.range,
            stacked = this.stacked,
            target = this.target,
            x = valuenum * this.totalBarWidth,
            canvasHeightEf = this.canvasHeightEf,
            yoffset = this.yoffset,
            y,
            height,
            color,
            isNull,
            yoffsetNeg,
            i,
            valcount,
            val,
            minPlotted,
            allMin;
        vals = $.isArray(vals) ? vals : [vals];
        valcount = vals.length;
        val = vals[0];
        isNull = all(null, vals);
        allMin = all(xaxisOffset, vals, true);

        if (isNull) {
          if (options.get("nullColor")) {
            color = highlight ? options.get("nullColor") : this.calcHighlightColor(options.get("nullColor"), options);
            y = yoffset > 0 ? yoffset - 1 : yoffset;
            return target.drawRect(x, y, this.barWidth - 1, 0, color, color);
          } else {
            return undefined;
          }
        }

        yoffsetNeg = yoffset;

        for (i = 0; i < valcount; i++) {
          val = vals[i];

          if (stacked && val === xaxisOffset) {
            if (!allMin || minPlotted) {
              continue;
            }

            minPlotted = true;
          }

          if (range > 0) {
            height = Math.floor(canvasHeightEf * (Math.abs(val - xaxisOffset) / range)) + 1;
          } else {
            height = 1;
          }

          if (val < xaxisOffset || val === xaxisOffset && yoffset === 0) {
            y = yoffsetNeg;
            yoffsetNeg += height;
          } else {
            y = yoffset - height;
            yoffset -= height;
          }

          color = this.calcColor(i, val, valuenum);

          if (highlight) {
            color = this.calcHighlightColor(color, options);
          }

          result.push(target.drawRect(x, y, this.barWidth - 1, height - 1, color, color));
        }

        if (result.length === 1) {
          return result[0];
        }

        return result;
      }
    });
    $.fn.sparkline.tristate = tristate = createClass($.fn.sparkline._base, barHighlightMixin, {
      type: "tristate",
      init: function init(el, values, options, width, height) {
        var barWidth = parseInt(options.get("barWidth"), 10),
            barSpacing = parseInt(options.get("barSpacing"), 10);

        tristate._super.init.call(this, el, values, options, width, height);

        this.regionShapes = {};
        this.barWidth = barWidth;
        this.barSpacing = barSpacing;
        this.totalBarWidth = barWidth + barSpacing;
        this.values = $.map(values, Number);
        this.width = width = values.length * barWidth + (values.length - 1) * barSpacing;

        if ($.isArray(options.get("colorMap"))) {
          this.colorMapByIndex = options.get("colorMap");
          this.colorMapByValue = null;
        } else {
          this.colorMapByIndex = null;
          this.colorMapByValue = options.get("colorMap");

          if (this.colorMapByValue && this.colorMapByValue.get === undefined) {
            this.colorMapByValue = new RangeMap(this.colorMapByValue);
          }
        }

        this.initTarget();
      },
      getRegion: function getRegion(el, x, y) {
        return Math.floor(x / this.totalBarWidth);
      },
      getCurrentRegionFields: function getCurrentRegionFields() {
        var currentRegion = this.currentRegion;
        return {
          isNull: this.values[currentRegion] === undefined,
          value: this.values[currentRegion],
          color: this.calcColor(this.values[currentRegion], currentRegion),
          offset: currentRegion
        };
      },
      calcColor: function calcColor(value, valuenum) {
        var values = this.values,
            options = this.options,
            colorMapByIndex = this.colorMapByIndex,
            colorMapByValue = this.colorMapByValue,
            color,
            newColor;

        if (colorMapByValue && (newColor = colorMapByValue.get(value))) {
          color = newColor;
        } else if (colorMapByIndex && colorMapByIndex.length > valuenum) {
          color = colorMapByIndex[valuenum];
        } else if (values[valuenum] < 0) {
          color = options.get("negBarColor");
        } else if (values[valuenum] > 0) {
          color = options.get("posBarColor");
        } else {
          color = options.get("zeroBarColor");
        }

        return color;
      },
      renderRegion: function renderRegion(valuenum, highlight) {
        var values = this.values,
            options = this.options,
            target = this.target,
            canvasHeight,
            height,
            halfHeight,
            x,
            y,
            color;
        canvasHeight = target.pixelHeight;
        halfHeight = Math.round(canvasHeight / 2);
        x = valuenum * this.totalBarWidth;

        if (values[valuenum] < 0) {
          y = halfHeight;
          height = halfHeight - 1;
        } else if (values[valuenum] > 0) {
          y = 0;
          height = halfHeight - 1;
        } else {
          y = halfHeight - 1;
          height = 2;
        }

        color = this.calcColor(values[valuenum], valuenum);

        if (color === null) {
          return;
        }

        if (highlight) {
          color = this.calcHighlightColor(color, options);
        }

        return target.drawRect(x, y, this.barWidth - 1, height - 1, color, color);
      }
    });
    $.fn.sparkline.discrete = discrete = createClass($.fn.sparkline._base, barHighlightMixin, {
      type: "discrete",
      init: function init(el, values, options, width, height) {
        discrete._super.init.call(this, el, values, options, width, height);

        this.regionShapes = {};
        this.values = values = $.map(values, Number);
        this.min = Math.min.apply(Math, values);
        this.max = Math.max.apply(Math, values);
        this.range = this.max - this.min;
        this.width = width = options.get("width") === "auto" ? values.length * 2 : this.width;
        this.interval = Math.floor(width / values.length);
        this.itemWidth = width / values.length;

        if (options.get("chartRangeMin") !== undefined && (options.get("chartRangeClip") || options.get("chartRangeMin") < this.min)) {
          this.min = options.get("chartRangeMin");
        }

        if (options.get("chartRangeMax") !== undefined && (options.get("chartRangeClip") || options.get("chartRangeMax") > this.max)) {
          this.max = options.get("chartRangeMax");
        }

        this.initTarget();

        if (this.target) {
          this.lineHeight = options.get("lineHeight") === "auto" ? Math.round(this.canvasHeight * .3) : options.get("lineHeight");
        }
      },
      getRegion: function getRegion(el, x, y) {
        return Math.floor(x / this.itemWidth);
      },
      getCurrentRegionFields: function getCurrentRegionFields() {
        var currentRegion = this.currentRegion;
        return {
          isNull: this.values[currentRegion] === undefined,
          value: this.values[currentRegion],
          offset: currentRegion
        };
      },
      renderRegion: function renderRegion(valuenum, highlight) {
        var values = this.values,
            options = this.options,
            min = this.min,
            max = this.max,
            range = this.range,
            interval = this.interval,
            target = this.target,
            canvasHeight = this.canvasHeight,
            lineHeight = this.lineHeight,
            pheight = canvasHeight - lineHeight,
            ytop,
            val,
            color,
            x;
        val = clipval(values[valuenum], min, max);
        x = valuenum * interval;
        ytop = Math.round(pheight - pheight * ((val - min) / range));
        color = options.get("thresholdColor") && val < options.get("thresholdValue") ? options.get("thresholdColor") : options.get("lineColor");

        if (highlight) {
          color = this.calcHighlightColor(color, options);
        }

        return target.drawLine(x, ytop, x, ytop + lineHeight, color);
      }
    });
    $.fn.sparkline.bullet = bullet = createClass($.fn.sparkline._base, {
      type: "bullet",
      init: function init(el, values, options, width, height) {
        var min, max, vals;

        bullet._super.init.call(this, el, values, options, width, height);

        this.values = values = normalizeValues(values);
        vals = values.slice();
        vals[0] = vals[0] === null ? vals[2] : vals[0];
        vals[1] = values[1] === null ? vals[2] : vals[1];
        min = Math.min.apply(Math, values);
        max = Math.max.apply(Math, values);

        if (options.get("base") === undefined) {
          min = min < 0 ? min : 0;
        } else {
          min = options.get("base");
        }

        this.min = min;
        this.max = max;
        this.range = max - min;
        this.shapes = {};
        this.valueShapes = {};
        this.regiondata = {};
        this.width = width = options.get("width") === "auto" ? "4.0em" : width;
        this.target = this.$el.simpledraw(width, height, options.get("composite"));

        if (!values.length) {
          this.disabled = true;
        }

        this.initTarget();
      },
      getRegion: function getRegion(el, x, y) {
        var shapeid = this.target.getShapeAt(el, x, y);
        return shapeid !== undefined && this.shapes[shapeid] !== undefined ? this.shapes[shapeid] : undefined;
      },
      getCurrentRegionFields: function getCurrentRegionFields() {
        var currentRegion = this.currentRegion;
        return {
          fieldkey: currentRegion.substr(0, 1),
          value: this.values[currentRegion.substr(1)],
          region: currentRegion
        };
      },
      changeHighlight: function changeHighlight(highlight) {
        var currentRegion = this.currentRegion,
            shapeid = this.valueShapes[currentRegion],
            shape;
        delete this.shapes[shapeid];

        switch (currentRegion.substr(0, 1)) {
          case "r":
            shape = this.renderRange(currentRegion.substr(1), highlight);
            break;

          case "p":
            shape = this.renderPerformance(highlight);
            break;

          case "t":
            shape = this.renderTarget(highlight);
            break;
        }

        this.valueShapes[currentRegion] = shape.id;
        this.shapes[shape.id] = currentRegion;
        this.target.replaceWithShape(shapeid, shape);
      },
      renderRange: function renderRange(rn, highlight) {
        var rangeval = this.values[rn],
            rangewidth = Math.round(this.canvasWidth * ((rangeval - this.min) / this.range)),
            color = this.options.get("rangeColors")[rn - 2];

        if (highlight) {
          color = this.calcHighlightColor(color, this.options);
        }

        return this.target.drawRect(0, 0, rangewidth - 1, this.canvasHeight - 1, color, color);
      },
      renderPerformance: function renderPerformance(highlight) {
        var perfval = this.values[1],
            perfwidth = Math.round(this.canvasWidth * ((perfval - this.min) / this.range)),
            color = this.options.get("performanceColor");

        if (highlight) {
          color = this.calcHighlightColor(color, this.options);
        }

        return this.target.drawRect(0, Math.round(this.canvasHeight * .3), perfwidth - 1, Math.round(this.canvasHeight * .4) - 1, color, color);
      },
      renderTarget: function renderTarget(highlight) {
        var targetval = this.values[0],
            x = Math.round(this.canvasWidth * ((targetval - this.min) / this.range) - this.options.get("targetWidth") / 2),
            targettop = Math.round(this.canvasHeight * .1),
            targetheight = this.canvasHeight - targettop * 2,
            color = this.options.get("targetColor");

        if (highlight) {
          color = this.calcHighlightColor(color, this.options);
        }

        return this.target.drawRect(x, targettop, this.options.get("targetWidth") - 1, targetheight - 1, color, color);
      },
      render: function render() {
        var vlen = this.values.length,
            target = this.target,
            i,
            shape;

        if (!bullet._super.render.call(this)) {
          return;
        }

        for (i = 2; i < vlen; i++) {
          shape = this.renderRange(i).append();
          this.shapes[shape.id] = "r" + i;
          this.valueShapes["r" + i] = shape.id;
        }

        if (this.values[1] !== null) {
          shape = this.renderPerformance().append();
          this.shapes[shape.id] = "p1";
          this.valueShapes.p1 = shape.id;
        }

        if (this.values[0] !== null) {
          shape = this.renderTarget().append();
          this.shapes[shape.id] = "t0";
          this.valueShapes.t0 = shape.id;
        }

        target.render();
      }
    });
    $.fn.sparkline.pie = pie = createClass($.fn.sparkline._base, {
      type: "pie",
      init: function init(el, values, options, width, height) {
        var total = 0,
            i;

        pie._super.init.call(this, el, values, options, width, height);

        this.shapes = {};
        this.valueShapes = {};
        this.values = values = $.map(values, Number);

        if (options.get("width") === "auto") {
          this.width = this.height;
        }

        if (values.length > 0) {
          for (i = values.length; i--;) {
            total += values[i];
          }
        }

        this.total = total;
        this.initTarget();
        this.radius = Math.floor(Math.min(this.canvasWidth, this.canvasHeight) / 2);
      },
      getRegion: function getRegion(el, x, y) {
        var shapeid = this.target.getShapeAt(el, x, y);
        return shapeid !== undefined && this.shapes[shapeid] !== undefined ? this.shapes[shapeid] : undefined;
      },
      getCurrentRegionFields: function getCurrentRegionFields() {
        var currentRegion = this.currentRegion;
        return {
          isNull: this.values[currentRegion] === undefined,
          value: this.values[currentRegion],
          percent: this.values[currentRegion] / this.total * 100,
          color: this.options.get("sliceColors")[currentRegion % this.options.get("sliceColors").length],
          offset: currentRegion
        };
      },
      changeHighlight: function changeHighlight(highlight) {
        var currentRegion = this.currentRegion,
            newslice = this.renderSlice(currentRegion, highlight),
            shapeid = this.valueShapes[currentRegion];
        delete this.shapes[shapeid];
        this.target.replaceWithShape(shapeid, newslice);
        this.valueShapes[currentRegion] = newslice.id;
        this.shapes[newslice.id] = currentRegion;
      },
      renderSlice: function renderSlice(valuenum, highlight) {
        var target = this.target,
            options = this.options,
            radius = this.radius,
            borderWidth = options.get("borderWidth"),
            offset = options.get("offset"),
            circle = 2 * Math.PI,
            values = this.values,
            total = this.total,
            next = offset ? 2 * Math.PI * (offset / 360) : 0,
            start,
            end,
            i,
            vlen,
            color;
        vlen = values.length;

        for (i = 0; i < vlen; i++) {
          start = next;
          end = next;

          if (total > 0) {
            end = next + circle * (values[i] / total);
          }

          if (valuenum === i) {
            color = options.get("sliceColors")[i % options.get("sliceColors").length];

            if (highlight) {
              color = this.calcHighlightColor(color, options);
            }

            return target.drawPieSlice(radius, radius, radius - borderWidth, start, end, undefined, color);
          }

          next = end;
        }
      },
      render: function render() {
        var target = this.target,
            values = this.values,
            options = this.options,
            radius = this.radius,
            borderWidth = options.get("borderWidth"),
            shape,
            i;

        if (!pie._super.render.call(this)) {
          return;
        }

        if (borderWidth) {
          target.drawCircle(radius, radius, Math.floor(radius - borderWidth / 2), options.get("borderColor"), undefined, borderWidth).append();
        }

        for (i = values.length; i--;) {
          if (values[i]) {
            shape = this.renderSlice(i).append();
            this.valueShapes[i] = shape.id;
            this.shapes[shape.id] = i;
          }
        }

        target.render();
      }
    });
    $.fn.sparkline.box = box = createClass($.fn.sparkline._base, {
      type: "box",
      init: function init(el, values, options, width, height) {
        box._super.init.call(this, el, values, options, width, height);

        this.values = $.map(values, Number);
        this.width = options.get("width") === "auto" ? "4.0em" : width;
        this.initTarget();

        if (!this.values.length) {
          this.disabled = 1;
        }
      },
      getRegion: function getRegion() {
        return 1;
      },
      getCurrentRegionFields: function getCurrentRegionFields() {
        var result = [{
          field: "lq",
          value: this.quartiles[0]
        }, {
          field: "med",
          value: this.quartiles[1]
        }, {
          field: "uq",
          value: this.quartiles[2]
        }];

        if (this.loutlier !== undefined) {
          result.push({
            field: "lo",
            value: this.loutlier
          });
        }

        if (this.routlier !== undefined) {
          result.push({
            field: "ro",
            value: this.routlier
          });
        }

        if (this.lwhisker !== undefined) {
          result.push({
            field: "lw",
            value: this.lwhisker
          });
        }

        if (this.rwhisker !== undefined) {
          result.push({
            field: "rw",
            value: this.rwhisker
          });
        }

        return result;
      },
      render: function render() {
        var target = this.target,
            values = this.values,
            vlen = values.length,
            options = this.options,
            canvasWidth = this.canvasWidth,
            canvasHeight = this.canvasHeight,
            minValue = options.get("chartRangeMin") === undefined ? Math.min.apply(Math, values) : options.get("chartRangeMin"),
            maxValue = options.get("chartRangeMax") === undefined ? Math.max.apply(Math, values) : options.get("chartRangeMax"),
            canvasLeft = 0,
            lwhisker,
            loutlier,
            iqr,
            q1,
            q2,
            q3,
            rwhisker,
            routlier,
            i,
            size,
            unitSize;

        if (!box._super.render.call(this)) {
          return;
        }

        if (options.get("raw")) {
          if (options.get("showOutliers") && values.length > 5) {
            loutlier = values[0];
            lwhisker = values[1];
            q1 = values[2];
            q2 = values[3];
            q3 = values[4];
            rwhisker = values[5];
            routlier = values[6];
          } else {
            lwhisker = values[0];
            q1 = values[1];
            q2 = values[2];
            q3 = values[3];
            rwhisker = values[4];
          }
        } else {
          values.sort(function (a, b) {
            return a - b;
          });
          q1 = quartile(values, 1);
          q2 = quartile(values, 2);
          q3 = quartile(values, 3);
          iqr = q3 - q1;

          if (options.get("showOutliers")) {
            lwhisker = rwhisker = undefined;

            for (i = 0; i < vlen; i++) {
              if (lwhisker === undefined && values[i] > q1 - iqr * options.get("outlierIQR")) {
                lwhisker = values[i];
              }

              if (values[i] < q3 + iqr * options.get("outlierIQR")) {
                rwhisker = values[i];
              }
            }

            loutlier = values[0];
            routlier = values[vlen - 1];
          } else {
            lwhisker = values[0];
            rwhisker = values[vlen - 1];
          }
        }

        this.quartiles = [q1, q2, q3];
        this.lwhisker = lwhisker;
        this.rwhisker = rwhisker;
        this.loutlier = loutlier;
        this.routlier = routlier;
        unitSize = canvasWidth / (maxValue - minValue + 1);

        if (options.get("showOutliers")) {
          canvasLeft = Math.ceil(options.get("spotRadius"));
          canvasWidth -= 2 * Math.ceil(options.get("spotRadius"));
          unitSize = canvasWidth / (maxValue - minValue + 1);

          if (loutlier < lwhisker) {
            target.drawCircle((loutlier - minValue) * unitSize + canvasLeft, canvasHeight / 2, options.get("spotRadius"), options.get("outlierLineColor"), options.get("outlierFillColor")).append();
          }

          if (routlier > rwhisker) {
            target.drawCircle((routlier - minValue) * unitSize + canvasLeft, canvasHeight / 2, options.get("spotRadius"), options.get("outlierLineColor"), options.get("outlierFillColor")).append();
          }
        }

        target.drawRect(Math.round((q1 - minValue) * unitSize + canvasLeft), Math.round(canvasHeight * .1), Math.round((q3 - q1) * unitSize), Math.round(canvasHeight * .8), options.get("boxLineColor"), options.get("boxFillColor")).append();
        target.drawLine(Math.round((lwhisker - minValue) * unitSize + canvasLeft), Math.round(canvasHeight / 2), Math.round((q1 - minValue) * unitSize + canvasLeft), Math.round(canvasHeight / 2), options.get("lineColor")).append();
        target.drawLine(Math.round((lwhisker - minValue) * unitSize + canvasLeft), Math.round(canvasHeight / 4), Math.round((lwhisker - minValue) * unitSize + canvasLeft), Math.round(canvasHeight - canvasHeight / 4), options.get("whiskerColor")).append();
        target.drawLine(Math.round((rwhisker - minValue) * unitSize + canvasLeft), Math.round(canvasHeight / 2), Math.round((q3 - minValue) * unitSize + canvasLeft), Math.round(canvasHeight / 2), options.get("lineColor")).append();
        target.drawLine(Math.round((rwhisker - minValue) * unitSize + canvasLeft), Math.round(canvasHeight / 4), Math.round((rwhisker - minValue) * unitSize + canvasLeft), Math.round(canvasHeight - canvasHeight / 4), options.get("whiskerColor")).append();
        target.drawLine(Math.round((q2 - minValue) * unitSize + canvasLeft), Math.round(canvasHeight * .1), Math.round((q2 - minValue) * unitSize + canvasLeft), Math.round(canvasHeight * .9), options.get("medianColor")).append();

        if (options.get("target")) {
          size = Math.ceil(options.get("spotRadius"));
          target.drawLine(Math.round((options.get("target") - minValue) * unitSize + canvasLeft), Math.round(canvasHeight / 2 - size), Math.round((options.get("target") - minValue) * unitSize + canvasLeft), Math.round(canvasHeight / 2 + size), options.get("targetColor")).append();
          target.drawLine(Math.round((options.get("target") - minValue) * unitSize + canvasLeft - size), Math.round(canvasHeight / 2), Math.round((options.get("target") - minValue) * unitSize + canvasLeft + size), Math.round(canvasHeight / 2), options.get("targetColor")).append();
        }

        target.render();
      }
    });
    VShape = createClass({
      init: function init(target, id, type, args) {
        this.target = target;
        this.id = id;
        this.type = type;
        this.args = args;
      },
      append: function append() {
        this.target.appendShape(this);
        return this;
      }
    });
    VCanvas_base = createClass({
      _pxregex: /(\d+)(px)?\s*$/i,
      init: function init(width, height, target) {
        if (!width) {
          return;
        }

        this.width = width;
        this.height = height;
        this.target = target;
        this.lastShapeId = null;

        if (target[0]) {
          target = target[0];
        }

        $.data(target, "_jqs_vcanvas", this);
      },
      drawLine: function drawLine(x1, y1, x2, y2, lineColor, lineWidth) {
        return this.drawShape([[x1, y1], [x2, y2]], lineColor, lineWidth);
      },
      drawShape: function drawShape(path, lineColor, fillColor, lineWidth) {
        return this._genShape("Shape", [path, lineColor, fillColor, lineWidth]);
      },
      drawCircle: function drawCircle(x, y, radius, lineColor, fillColor, lineWidth) {
        return this._genShape("Circle", [x, y, radius, lineColor, fillColor, lineWidth]);
      },
      drawPieSlice: function drawPieSlice(x, y, radius, startAngle, endAngle, lineColor, fillColor) {
        return this._genShape("PieSlice", [x, y, radius, startAngle, endAngle, lineColor, fillColor]);
      },
      drawRect: function drawRect(x, y, width, height, lineColor, fillColor) {
        return this._genShape("Rect", [x, y, width, height, lineColor, fillColor]);
      },
      getElement: function getElement() {
        return this.canvas;
      },
      getLastShapeId: function getLastShapeId() {
        return this.lastShapeId;
      },
      reset: function reset() {
        alert("reset not implemented");
      },
      _insert: function _insert(el, target) {
        $(target).html(el);
      },
      _calculatePixelDims: function _calculatePixelDims(width, height, canvas) {
        var match;
        match = this._pxregex.exec(height);

        if (match) {
          this.pixelHeight = match[1];
        } else {
          this.pixelHeight = $(canvas).height();
        }

        match = this._pxregex.exec(width);

        if (match) {
          this.pixelWidth = match[1];
        } else {
          this.pixelWidth = $(canvas).width();
        }
      },
      _genShape: function _genShape(shapetype, shapeargs) {
        var id = shapeCount++;
        shapeargs.unshift(id);
        return new VShape(this, id, shapetype, shapeargs);
      },
      appendShape: function appendShape(shape) {
        alert("appendShape not implemented");
      },
      replaceWithShape: function replaceWithShape(shapeid, shape) {
        alert("replaceWithShape not implemented");
      },
      insertAfterShape: function insertAfterShape(shapeid, shape) {
        alert("insertAfterShape not implemented");
      },
      removeShapeId: function removeShapeId(shapeid) {
        alert("removeShapeId not implemented");
      },
      getShapeAt: function getShapeAt(el, x, y) {
        alert("getShapeAt not implemented");
      },
      render: function render() {
        alert("render not implemented");
      }
    });
    VCanvas_canvas = createClass(VCanvas_base, {
      init: function init(width, height, target, interact) {
        VCanvas_canvas._super.init.call(this, width, height, target);

        this.canvas = document.createElement("canvas");

        if (target[0]) {
          target = target[0];
        }

        $.data(target, "_jqs_vcanvas", this);
        $(this.canvas).css({
          display: "inline-block",
          width: width,
          height: height,
          verticalAlign: "top"
        });

        this._insert(this.canvas, target);

        this._calculatePixelDims(width, height, this.canvas);

        this.canvas.width = this.pixelWidth;
        this.canvas.height = this.pixelHeight;
        this.interact = interact;
        this.shapes = {};
        this.shapeseq = [];
        this.currentTargetShapeId = undefined;
        $(this.canvas).css({
          width: this.pixelWidth,
          height: this.pixelHeight
        });
      },
      _getContext: function _getContext(lineColor, fillColor, lineWidth) {
        var context = this.canvas.getContext("2d");

        if (lineColor !== undefined) {
          context.strokeStyle = lineColor;
        }

        context.lineWidth = lineWidth === undefined ? 1 : lineWidth;

        if (fillColor !== undefined) {
          context.fillStyle = fillColor;
        }

        return context;
      },
      reset: function reset() {
        var context = this._getContext();

        context.clearRect(0, 0, this.pixelWidth, this.pixelHeight);
        this.shapes = {};
        this.shapeseq = [];
        this.currentTargetShapeId = undefined;
      },
      _drawShape: function _drawShape(shapeid, path, lineColor, fillColor, lineWidth) {
        var context = this._getContext(lineColor, fillColor, lineWidth),
            i,
            plen;

        context.beginPath();
        context.moveTo(path[0][0] + .5, path[0][1] + .5);

        for (i = 1, plen = path.length; i < plen; i++) {
          context.lineTo(path[i][0] + .5, path[i][1] + .5);
        }

        if (lineColor !== undefined) {
          context.stroke();
        }

        if (fillColor !== undefined) {
          context.fill();
        }

        if (this.targetX !== undefined && this.targetY !== undefined && context.isPointInPath(this.targetX, this.targetY)) {
          this.currentTargetShapeId = shapeid;
        }
      },
      _drawCircle: function _drawCircle(shapeid, x, y, radius, lineColor, fillColor, lineWidth) {
        var context = this._getContext(lineColor, fillColor, lineWidth);

        context.beginPath();
        context.arc(x, y, radius, 0, 2 * Math.PI, false);

        if (this.targetX !== undefined && this.targetY !== undefined && context.isPointInPath(this.targetX, this.targetY)) {
          this.currentTargetShapeId = shapeid;
        }

        if (lineColor !== undefined) {
          context.stroke();
        }

        if (fillColor !== undefined) {
          context.fill();
        }
      },
      _drawPieSlice: function _drawPieSlice(shapeid, x, y, radius, startAngle, endAngle, lineColor, fillColor) {
        var context = this._getContext(lineColor, fillColor);

        context.beginPath();
        context.moveTo(x, y);
        context.arc(x, y, radius, startAngle, endAngle, false);
        context.lineTo(x, y);
        context.closePath();

        if (lineColor !== undefined) {
          context.stroke();
        }

        if (fillColor) {
          context.fill();
        }

        if (this.targetX !== undefined && this.targetY !== undefined && context.isPointInPath(this.targetX, this.targetY)) {
          this.currentTargetShapeId = shapeid;
        }
      },
      _drawRect: function _drawRect(shapeid, x, y, width, height, lineColor, fillColor) {
        return this._drawShape(shapeid, [[x, y], [x + width, y], [x + width, y + height], [x, y + height], [x, y]], lineColor, fillColor);
      },
      appendShape: function appendShape(shape) {
        this.shapes[shape.id] = shape;
        this.shapeseq.push(shape.id);
        this.lastShapeId = shape.id;
        return shape.id;
      },
      replaceWithShape: function replaceWithShape(shapeid, shape) {
        var shapeseq = this.shapeseq,
            i;
        this.shapes[shape.id] = shape;

        for (i = shapeseq.length; i--;) {
          if (shapeseq[i] == shapeid) {
            shapeseq[i] = shape.id;
          }
        }

        delete this.shapes[shapeid];
      },
      replaceWithShapes: function replaceWithShapes(shapeids, shapes) {
        var shapeseq = this.shapeseq,
            shapemap = {},
            sid,
            i,
            first;

        for (i = shapeids.length; i--;) {
          shapemap[shapeids[i]] = true;
        }

        for (i = shapeseq.length; i--;) {
          sid = shapeseq[i];

          if (shapemap[sid]) {
            shapeseq.splice(i, 1);
            delete this.shapes[sid];
            first = i;
          }
        }

        for (i = shapes.length; i--;) {
          shapeseq.splice(first, 0, shapes[i].id);
          this.shapes[shapes[i].id] = shapes[i];
        }
      },
      insertAfterShape: function insertAfterShape(shapeid, shape) {
        var shapeseq = this.shapeseq,
            i;

        for (i = shapeseq.length; i--;) {
          if (shapeseq[i] === shapeid) {
            shapeseq.splice(i + 1, 0, shape.id);
            this.shapes[shape.id] = shape;
            return;
          }
        }
      },
      removeShapeId: function removeShapeId(shapeid) {
        var shapeseq = this.shapeseq,
            i;

        for (i = shapeseq.length; i--;) {
          if (shapeseq[i] === shapeid) {
            shapeseq.splice(i, 1);
            break;
          }
        }

        delete this.shapes[shapeid];
      },
      getShapeAt: function getShapeAt(el, x, y) {
        this.targetX = x;
        this.targetY = y;
        this.render();
        return this.currentTargetShapeId;
      },
      render: function render() {
        var shapeseq = this.shapeseq,
            shapes = this.shapes,
            shapeCount = shapeseq.length,
            context = this._getContext(),
            shapeid,
            shape,
            i;

        context.clearRect(0, 0, this.pixelWidth, this.pixelHeight);

        for (i = 0; i < shapeCount; i++) {
          shapeid = shapeseq[i];
          shape = shapes[shapeid];
          this["_draw" + shape.type].apply(this, shape.args);
        }

        if (!this.interact) {
          this.shapes = {};
          this.shapeseq = [];
        }
      }
    });
    VCanvas_vml = createClass(VCanvas_base, {
      init: function init(width, height, target) {
        var groupel;

        VCanvas_vml._super.init.call(this, width, height, target);

        if (target[0]) {
          target = target[0];
        }

        $.data(target, "_jqs_vcanvas", this);
        this.canvas = document.createElement("span");
        $(this.canvas).css({
          display: "inline-block",
          position: "relative",
          overflow: "hidden",
          width: width,
          height: height,
          margin: "0px",
          padding: "0px",
          verticalAlign: "top"
        });

        this._insert(this.canvas, target);

        this._calculatePixelDims(width, height, this.canvas);

        this.canvas.width = this.pixelWidth;
        this.canvas.height = this.pixelHeight;
        groupel = '<v:group coordorigin="0 0" coordsize="' + this.pixelWidth + " " + this.pixelHeight + '"' + ' style="position:absolute;top:0;left:0;width:' + this.pixelWidth + "px;height=" + this.pixelHeight + 'px;"></v:group>';
        this.canvas.insertAdjacentHTML("beforeEnd", groupel);
        this.group = $(this.canvas).children()[0];
        this.rendered = false;
        this.prerender = "";
      },
      _drawShape: function _drawShape(shapeid, path, lineColor, fillColor, lineWidth) {
        var vpath = [],
            initial,
            stroke,
            fill,
            closed,
            vel,
            plen,
            i;

        for (i = 0, plen = path.length; i < plen; i++) {
          vpath[i] = "" + path[i][0] + "," + path[i][1];
        }

        initial = vpath.splice(0, 1);
        lineWidth = lineWidth === undefined ? 1 : lineWidth;
        stroke = lineColor === undefined ? ' stroked="false" ' : ' strokeWeight="' + lineWidth + 'px" strokeColor="' + lineColor + '" ';
        fill = fillColor === undefined ? ' filled="false"' : ' fillColor="' + fillColor + '" filled="true" ';
        closed = vpath[0] === vpath[vpath.length - 1] ? "x " : "";
        vel = '<v:shape coordorigin="0 0" coordsize="' + this.pixelWidth + " " + this.pixelHeight + '" ' + ' id="jqsshape' + shapeid + '" ' + stroke + fill + ' style="position:absolute;left:0px;top:0px;height:' + this.pixelHeight + "px;width:" + this.pixelWidth + 'px;padding:0px;margin:0px;" ' + ' path="m ' + initial + " l " + vpath.join(", ") + " " + closed + 'e">' + " </v:shape>";
        return vel;
      },
      _drawCircle: function _drawCircle(shapeid, x, y, radius, lineColor, fillColor, lineWidth) {
        var stroke, fill, vel;
        x -= radius;
        y -= radius;
        stroke = lineColor === undefined ? ' stroked="false" ' : ' strokeWeight="' + lineWidth + 'px" strokeColor="' + lineColor + '" ';
        fill = fillColor === undefined ? ' filled="false"' : ' fillColor="' + fillColor + '" filled="true" ';
        vel = "<v:oval " + ' id="jqsshape' + shapeid + '" ' + stroke + fill + ' style="position:absolute;top:' + y + "px; left:" + x + "px; width:" + radius * 2 + "px; height:" + radius * 2 + 'px"></v:oval>';
        return vel;
      },
      _drawPieSlice: function _drawPieSlice(shapeid, x, y, radius, startAngle, endAngle, lineColor, fillColor) {
        var vpath, startx, starty, endx, endy, stroke, fill, vel;

        if (startAngle === endAngle) {
          return "";
        }

        if (endAngle - startAngle === 2 * Math.PI) {
          startAngle = 0;
          endAngle = 2 * Math.PI;
        }

        startx = x + Math.round(Math.cos(startAngle) * radius);
        starty = y + Math.round(Math.sin(startAngle) * radius);
        endx = x + Math.round(Math.cos(endAngle) * radius);
        endy = y + Math.round(Math.sin(endAngle) * radius);

        if (startx === endx && starty === endy) {
          if (endAngle - startAngle < Math.PI) {
            return "";
          }

          startx = endx = x + radius;
          starty = endy = y;
        }

        if (startx === endx && starty === endy && endAngle - startAngle < Math.PI) {
          return "";
        }

        vpath = [x - radius, y - radius, x + radius, y + radius, startx, starty, endx, endy];
        stroke = lineColor === undefined ? ' stroked="false" ' : ' strokeWeight="1px" strokeColor="' + lineColor + '" ';
        fill = fillColor === undefined ? ' filled="false"' : ' fillColor="' + fillColor + '" filled="true" ';
        vel = '<v:shape coordorigin="0 0" coordsize="' + this.pixelWidth + " " + this.pixelHeight + '" ' + ' id="jqsshape' + shapeid + '" ' + stroke + fill + ' style="position:absolute;left:0px;top:0px;height:' + this.pixelHeight + "px;width:" + this.pixelWidth + 'px;padding:0px;margin:0px;" ' + ' path="m ' + x + "," + y + " wa " + vpath.join(", ") + ' x e">' + " </v:shape>";
        return vel;
      },
      _drawRect: function _drawRect(shapeid, x, y, width, height, lineColor, fillColor) {
        return this._drawShape(shapeid, [[x, y], [x, y + height], [x + width, y + height], [x + width, y], [x, y]], lineColor, fillColor);
      },
      reset: function reset() {
        this.group.innerHTML = "";
      },
      appendShape: function appendShape(shape) {
        var vel = this["_draw" + shape.type].apply(this, shape.args);

        if (this.rendered) {
          this.group.insertAdjacentHTML("beforeEnd", vel);
        } else {
          this.prerender += vel;
        }

        this.lastShapeId = shape.id;
        return shape.id;
      },
      replaceWithShape: function replaceWithShape(shapeid, shape) {
        var existing = $("#jqsshape" + shapeid),
            vel = this["_draw" + shape.type].apply(this, shape.args);
        existing[0].outerHTML = vel;
      },
      replaceWithShapes: function replaceWithShapes(shapeids, shapes) {
        var existing = $("#jqsshape" + shapeids[0]),
            replace = "",
            slen = shapes.length,
            i;

        for (i = 0; i < slen; i++) {
          replace += this["_draw" + shapes[i].type].apply(this, shapes[i].args);
        }

        existing[0].outerHTML = replace;

        for (i = 1; i < shapeids.length; i++) {
          $("#jqsshape" + shapeids[i]).remove();
        }
      },
      insertAfterShape: function insertAfterShape(shapeid, shape) {
        var existing = $("#jqsshape" + shapeid),
            vel = this["_draw" + shape.type].apply(this, shape.args);
        existing[0].insertAdjacentHTML("afterEnd", vel);
      },
      removeShapeId: function removeShapeId(shapeid) {
        var existing = $("#jqsshape" + shapeid);
        this.group.removeChild(existing[0]);
      },
      getShapeAt: function getShapeAt(el, x, y) {
        var shapeid = el.id.substr(8);
        return shapeid;
      },
      render: function render() {
        if (!this.rendered) {
          this.group.innerHTML = this.prerender;
          this.rendered = true;
        }
      }
    });
  });
})(document, Math);

/***/ }),

/***/ "./resources/js/admin/morris.min.js":
/*!******************************************!*\
  !*** ./resources/js/admin/morris.min.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* @license
morris.js v0.5.0
Copyright 2014 Olly Smith All rights reserved.
Licensed under the BSD-2-Clause License.
*/
(function () {
  var a,
      b,
      c,
      d,
      e = [].slice,
      f = function f(a, b) {
    return function () {
      return a.apply(b, arguments);
    };
  },
      g = {}.hasOwnProperty,
      h = function h(a, b) {
    function c() {
      this.constructor = a;
    }

    for (var d in b) {
      g.call(b, d) && (a[d] = b[d]);
    }

    return c.prototype = b.prototype, a.prototype = new c(), a.__super__ = b.prototype, a;
  },
      i = [].indexOf || function (a) {
    for (var b = 0, c = this.length; c > b; b++) {
      if (b in this && this[b] === a) return b;
    }

    return -1;
  };

  b = window.Morris = {}, a = jQuery, b.EventEmitter = function () {
    function a() {}

    return a.prototype.on = function (a, b) {
      return null == this.handlers && (this.handlers = {}), null == this.handlers[a] && (this.handlers[a] = []), this.handlers[a].push(b), this;
    }, a.prototype.fire = function () {
      var a, b, c, d, f, g, h;

      if (c = arguments[0], a = 2 <= arguments.length ? e.call(arguments, 1) : [], null != this.handlers && null != this.handlers[c]) {
        for (g = this.handlers[c], h = [], d = 0, f = g.length; f > d; d++) {
          b = g[d], h.push(b.apply(null, a));
        }

        return h;
      }
    }, a;
  }(), b.commas = function (a) {
    var b, c, d, e;
    return null != a ? (d = 0 > a ? "-" : "", b = Math.abs(a), c = Math.floor(b).toFixed(0), d += c.replace(/(?=(?:\d{3})+$)(?!^)/g, ","), e = b.toString(), e.length > c.length && (d += e.slice(c.length)), d) : "-";
  }, b.pad2 = function (a) {
    return (10 > a ? "0" : "") + a;
  }, b.Grid = function (c) {
    function d(b) {
      this.resizeHandler = f(this.resizeHandler, this);
      var c = this;
      if (this.el = "string" == typeof b.element ? a(document.getElementById(b.element)) : a(b.element), null == this.el || 0 === this.el.length) throw new Error("Graph container element not found");
      "static" === this.el.css("position") && this.el.css("position", "relative"), this.options = a.extend({}, this.gridDefaults, this.defaults || {}, b), "string" == typeof this.options.units && (this.options.postUnits = b.units), this.raphael = new Raphael(this.el[0]), this.elementWidth = null, this.elementHeight = null, this.dirty = !1, this.selectFrom = null, this.init && this.init(), this.setData(this.options.data), this.el.bind("mousemove", function (a) {
        var b, d, e, f, g;
        return d = c.el.offset(), g = a.pageX - d.left, c.selectFrom ? (b = c.data[c.hitTest(Math.min(g, c.selectFrom))]._x, e = c.data[c.hitTest(Math.max(g, c.selectFrom))]._x, f = e - b, c.selectionRect.attr({
          x: b,
          width: f
        })) : c.fire("hovermove", g, a.pageY - d.top);
      }), this.el.bind("mouseleave", function () {
        return c.selectFrom && (c.selectionRect.hide(), c.selectFrom = null), c.fire("hoverout");
      }), this.el.bind("touchstart touchmove touchend", function (a) {
        var b, d;
        return d = a.originalEvent.touches[0] || a.originalEvent.changedTouches[0], b = c.el.offset(), c.fire("hovermove", d.pageX - b.left, d.pageY - b.top);
      }), this.el.bind("click", function (a) {
        var b;
        return b = c.el.offset(), c.fire("gridclick", a.pageX - b.left, a.pageY - b.top);
      }), this.options.rangeSelect && (this.selectionRect = this.raphael.rect(0, 0, 0, this.el.innerHeight()).attr({
        fill: this.options.rangeSelectColor,
        stroke: !1
      }).toBack().hide(), this.el.bind("mousedown", function (a) {
        var b;
        return b = c.el.offset(), c.startRange(a.pageX - b.left);
      }), this.el.bind("mouseup", function (a) {
        var b;
        return b = c.el.offset(), c.endRange(a.pageX - b.left), c.fire("hovermove", a.pageX - b.left, a.pageY - b.top);
      })), this.options.resize && a(window).bind("resize", function () {
        return null != c.timeoutId && window.clearTimeout(c.timeoutId), c.timeoutId = window.setTimeout(c.resizeHandler, 100);
      }), this.el.css("-webkit-tap-highlight-color", "rgba(0,0,0,0)"), this.postInit && this.postInit();
    }

    return h(d, c), d.prototype.gridDefaults = {
      dateFormat: null,
      axes: !0,
      grid: !0,
      gridLineColor: "#aaa",
      gridStrokeWidth: .5,
      gridTextColor: "#888",
      gridTextSize: 12,
      gridTextFamily: "sans-serif",
      gridTextWeight: "normal",
      hideHover: !1,
      yLabelFormat: null,
      xLabelAngle: 0,
      numLines: 5,
      padding: 25,
      parseTime: !0,
      postUnits: "",
      preUnits: "",
      ymax: "auto",
      ymin: "auto 0",
      goals: [],
      goalStrokeWidth: 1,
      goalLineColors: ["#666633", "#999966", "#cc6666", "#663333"],
      events: [],
      eventStrokeWidth: 1,
      eventLineColors: ["#005a04", "#ccffbb", "#3a5f0b", "#005502"],
      rangeSelect: null,
      rangeSelectColor: "#eef",
      resize: !1
    }, d.prototype.setData = function (a, c) {
      var d, e, f, g, h, i, j, k, l, m, n, o, p, q, r;
      return null == c && (c = !0), this.options.data = a, null == a || 0 === a.length ? (this.data = [], this.raphael.clear(), null != this.hover && this.hover.hide(), void 0) : (o = this.cumulative ? 0 : null, p = this.cumulative ? 0 : null, this.options.goals.length > 0 && (h = Math.min.apply(Math, this.options.goals), g = Math.max.apply(Math, this.options.goals), p = null != p ? Math.min(p, h) : h, o = null != o ? Math.max(o, g) : g), this.data = function () {
        var c, d, g;

        for (g = [], f = c = 0, d = a.length; d > c; f = ++c) {
          j = a[f], i = {
            src: j
          }, i.label = j[this.options.xkey], this.options.parseTime ? (i.x = b.parseDate(i.label), this.options.dateFormat ? i.label = this.options.dateFormat(i.x) : "number" == typeof i.label && (i.label = new Date(i.label).toString())) : (i.x = f, this.options.xLabelFormat && (i.label = this.options.xLabelFormat(i))), l = 0, i.y = function () {
            var a, b, c, d;

            for (c = this.options.ykeys, d = [], e = a = 0, b = c.length; b > a; e = ++a) {
              n = c[e], q = j[n], "string" == typeof q && (q = parseFloat(q)), null != q && "number" != typeof q && (q = null), null != q && (this.cumulative ? l += q : null != o ? (o = Math.max(q, o), p = Math.min(q, p)) : o = p = q), this.cumulative && null != l && (o = Math.max(l, o), p = Math.min(l, p)), d.push(q);
            }

            return d;
          }.call(this), g.push(i);
        }

        return g;
      }.call(this), this.options.parseTime && (this.data = this.data.sort(function (a, b) {
        return (a.x > b.x) - (b.x > a.x);
      })), this.xmin = this.data[0].x, this.xmax = this.data[this.data.length - 1].x, this.events = [], this.options.events.length > 0 && (this.events = this.options.parseTime ? function () {
        var a, c, e, f;

        for (e = this.options.events, f = [], a = 0, c = e.length; c > a; a++) {
          d = e[a], f.push(b.parseDate(d));
        }

        return f;
      }.call(this) : this.options.events, this.xmax = Math.max(this.xmax, Math.max.apply(Math, this.events)), this.xmin = Math.min(this.xmin, Math.min.apply(Math, this.events))), this.xmin === this.xmax && (this.xmin -= 1, this.xmax += 1), this.ymin = this.yboundary("min", p), this.ymax = this.yboundary("max", o), this.ymin === this.ymax && (p && (this.ymin -= 1), this.ymax += 1), ((r = this.options.axes) === !0 || "both" === r || "y" === r || this.options.grid === !0) && (this.options.ymax === this.gridDefaults.ymax && this.options.ymin === this.gridDefaults.ymin ? (this.grid = this.autoGridLines(this.ymin, this.ymax, this.options.numLines), this.ymin = Math.min(this.ymin, this.grid[0]), this.ymax = Math.max(this.ymax, this.grid[this.grid.length - 1])) : (k = (this.ymax - this.ymin) / (this.options.numLines - 1), this.grid = function () {
        var a, b, c, d;

        for (d = [], m = a = b = this.ymin, c = this.ymax; k > 0 ? c >= a : a >= c; m = a += k) {
          d.push(m);
        }

        return d;
      }.call(this))), this.dirty = !0, c ? this.redraw() : void 0);
    }, d.prototype.yboundary = function (a, b) {
      var c, d;
      return c = this.options["y" + a], "string" == typeof c ? "auto" === c.slice(0, 4) ? c.length > 5 ? (d = parseInt(c.slice(5), 10), null == b ? d : Math[a](b, d)) : null != b ? b : 0 : parseInt(c, 10) : c;
    }, d.prototype.autoGridLines = function (a, b, c) {
      var d, e, f, g, h, i, j, k, l;
      return h = b - a, l = Math.floor(Math.log(h) / Math.log(10)), j = Math.pow(10, l), e = Math.floor(a / j) * j, d = Math.ceil(b / j) * j, i = (d - e) / (c - 1), 1 === j && i > 1 && Math.ceil(i) !== i && (i = Math.ceil(i), d = e + i * (c - 1)), 0 > e && d > 0 && (e = Math.floor(a / i) * i, d = Math.ceil(b / i) * i), 1 > i ? (g = Math.floor(Math.log(i) / Math.log(10)), f = function () {
        var a, b;

        for (b = [], k = a = e; i > 0 ? d >= a : a >= d; k = a += i) {
          b.push(parseFloat(k.toFixed(1 - g)));
        }

        return b;
      }()) : f = function () {
        var a, b;

        for (b = [], k = a = e; i > 0 ? d >= a : a >= d; k = a += i) {
          b.push(k);
        }

        return b;
      }(), f;
    }, d.prototype._calc = function () {
      var a, b, c, d, e, f, g, h;
      return e = this.el.width(), c = this.el.height(), (this.elementWidth !== e || this.elementHeight !== c || this.dirty) && (this.elementWidth = e, this.elementHeight = c, this.dirty = !1, this.left = this.options.padding, this.right = this.elementWidth - this.options.padding, this.top = this.options.padding, this.bottom = this.elementHeight - this.options.padding, ((g = this.options.axes) === !0 || "both" === g || "y" === g) && (f = function () {
        var a, c, d, e;

        for (d = this.grid, e = [], a = 0, c = d.length; c > a; a++) {
          b = d[a], e.push(this.measureText(this.yAxisFormat(b)).width);
        }

        return e;
      }.call(this), this.left += Math.max.apply(Math, f)), ((h = this.options.axes) === !0 || "both" === h || "x" === h) && (a = function () {
        var a, b, c;

        for (c = [], d = a = 0, b = this.data.length; b >= 0 ? b > a : a > b; d = b >= 0 ? ++a : --a) {
          c.push(this.measureText(this.data[d].text, -this.options.xLabelAngle).height);
        }

        return c;
      }.call(this), this.bottom -= Math.max.apply(Math, a)), this.width = Math.max(1, this.right - this.left), this.height = Math.max(1, this.bottom - this.top), this.dx = this.width / (this.xmax - this.xmin), this.dy = this.height / (this.ymax - this.ymin), this.calc) ? this.calc() : void 0;
    }, d.prototype.transY = function (a) {
      return this.bottom - (a - this.ymin) * this.dy;
    }, d.prototype.transX = function (a) {
      return 1 === this.data.length ? (this.left + this.right) / 2 : this.left + (a - this.xmin) * this.dx;
    }, d.prototype.redraw = function () {
      return this.raphael.clear(), this._calc(), this.drawGrid(), this.drawGoals(), this.drawEvents(), this.draw ? this.draw() : void 0;
    }, d.prototype.measureText = function (a, b) {
      var c, d;
      return null == b && (b = 0), d = this.raphael.text(100, 100, a).attr("font-size", this.options.gridTextSize).attr("font-family", this.options.gridTextFamily).attr("font-weight", this.options.gridTextWeight).rotate(b), c = d.getBBox(), d.remove(), c;
    }, d.prototype.yAxisFormat = function (a) {
      return this.yLabelFormat(a);
    }, d.prototype.yLabelFormat = function (a) {
      return "function" == typeof this.options.yLabelFormat ? this.options.yLabelFormat(a) : "" + this.options.preUnits + b.commas(a) + this.options.postUnits;
    }, d.prototype.drawGrid = function () {
      var a, b, c, d, e, f, g, h;

      if (this.options.grid !== !1 || (e = this.options.axes) === !0 || "both" === e || "y" === e) {
        for (f = this.grid, h = [], c = 0, d = f.length; d > c; c++) {
          a = f[c], b = this.transY(a), ((g = this.options.axes) === !0 || "both" === g || "y" === g) && this.drawYAxisLabel(this.left - this.options.padding / 2, b, this.yAxisFormat(a)), this.options.grid ? h.push(this.drawGridLine("M" + this.left + "," + b + "H" + (this.left + this.width))) : h.push(void 0);
        }

        return h;
      }
    }, d.prototype.drawGoals = function () {
      var a, b, c, d, e, f, g;

      for (f = this.options.goals, g = [], c = d = 0, e = f.length; e > d; c = ++d) {
        b = f[c], a = this.options.goalLineColors[c % this.options.goalLineColors.length], g.push(this.drawGoal(b, a));
      }

      return g;
    }, d.prototype.drawEvents = function () {
      var a, b, c, d, e, f, g;

      for (f = this.events, g = [], c = d = 0, e = f.length; e > d; c = ++d) {
        b = f[c], a = this.options.eventLineColors[c % this.options.eventLineColors.length], g.push(this.drawEvent(b, a));
      }

      return g;
    }, d.prototype.drawGoal = function (a, b) {
      return this.raphael.path("M" + this.left + "," + this.transY(a) + "H" + this.right).attr("stroke", b).attr("stroke-width", this.options.goalStrokeWidth);
    }, d.prototype.drawEvent = function (a, b) {
      return this.raphael.path("M" + this.transX(a) + "," + this.bottom + "V" + this.top).attr("stroke", b).attr("stroke-width", this.options.eventStrokeWidth);
    }, d.prototype.drawYAxisLabel = function (a, b, c) {
      return this.raphael.text(a, b, c).attr("font-size", this.options.gridTextSize).attr("font-family", this.options.gridTextFamily).attr("font-weight", this.options.gridTextWeight).attr("fill", this.options.gridTextColor).attr("text-anchor", "end");
    }, d.prototype.drawGridLine = function (a) {
      return this.raphael.path(a).attr("stroke", this.options.gridLineColor).attr("stroke-width", this.options.gridStrokeWidth);
    }, d.prototype.startRange = function (a) {
      return this.hover.hide(), this.selectFrom = a, this.selectionRect.attr({
        x: a,
        width: 0
      }).show();
    }, d.prototype.endRange = function (a) {
      var b, c;
      return this.selectFrom ? (c = Math.min(this.selectFrom, a), b = Math.max(this.selectFrom, a), this.options.rangeSelect.call(this.el, {
        start: this.data[this.hitTest(c)].x,
        end: this.data[this.hitTest(b)].x
      }), this.selectFrom = null) : void 0;
    }, d.prototype.resizeHandler = function () {
      return this.timeoutId = null, this.raphael.setSize(this.el.width(), this.el.height()), this.redraw();
    }, d;
  }(b.EventEmitter), b.parseDate = function (a) {
    var b, c, d, e, f, g, h, i, j, k, l;
    return "number" == typeof a ? a : (c = a.match(/^(\d+) Q(\d)$/), e = a.match(/^(\d+)-(\d+)$/), f = a.match(/^(\d+)-(\d+)-(\d+)$/), h = a.match(/^(\d+) W(\d+)$/), i = a.match(/^(\d+)-(\d+)-(\d+)[ T](\d+):(\d+)(Z|([+-])(\d\d):?(\d\d))?$/), j = a.match(/^(\d+)-(\d+)-(\d+)[ T](\d+):(\d+):(\d+(\.\d+)?)(Z|([+-])(\d\d):?(\d\d))?$/), c ? new Date(parseInt(c[1], 10), 3 * parseInt(c[2], 10) - 1, 1).getTime() : e ? new Date(parseInt(e[1], 10), parseInt(e[2], 10) - 1, 1).getTime() : f ? new Date(parseInt(f[1], 10), parseInt(f[2], 10) - 1, parseInt(f[3], 10)).getTime() : h ? (k = new Date(parseInt(h[1], 10), 0, 1), 4 !== k.getDay() && k.setMonth(0, 1 + (4 - k.getDay() + 7) % 7), k.getTime() + 6048e5 * parseInt(h[2], 10)) : i ? i[6] ? (g = 0, "Z" !== i[6] && (g = 60 * parseInt(i[8], 10) + parseInt(i[9], 10), "+" === i[7] && (g = 0 - g)), Date.UTC(parseInt(i[1], 10), parseInt(i[2], 10) - 1, parseInt(i[3], 10), parseInt(i[4], 10), parseInt(i[5], 10) + g)) : new Date(parseInt(i[1], 10), parseInt(i[2], 10) - 1, parseInt(i[3], 10), parseInt(i[4], 10), parseInt(i[5], 10)).getTime() : j ? (l = parseFloat(j[6]), b = Math.floor(l), d = Math.round(1e3 * (l - b)), j[8] ? (g = 0, "Z" !== j[8] && (g = 60 * parseInt(j[10], 10) + parseInt(j[11], 10), "+" === j[9] && (g = 0 - g)), Date.UTC(parseInt(j[1], 10), parseInt(j[2], 10) - 1, parseInt(j[3], 10), parseInt(j[4], 10), parseInt(j[5], 10) + g, b, d)) : new Date(parseInt(j[1], 10), parseInt(j[2], 10) - 1, parseInt(j[3], 10), parseInt(j[4], 10), parseInt(j[5], 10), b, d).getTime()) : new Date(parseInt(a, 10), 0, 1).getTime());
  }, b.Hover = function () {
    function c(c) {
      null == c && (c = {}), this.options = a.extend({}, b.Hover.defaults, c), this.el = a("<div class='" + this.options["class"] + "'></div>"), this.el.hide(), this.options.parent.append(this.el);
    }

    return c.defaults = {
      "class": "morris-hover morris-default-style"
    }, c.prototype.update = function (a, b, c) {
      return a ? (this.html(a), this.show(), this.moveTo(b, c)) : this.hide();
    }, c.prototype.html = function (a) {
      return this.el.html(a);
    }, c.prototype.moveTo = function (a, b) {
      var c, d, e, f, g, h;
      return g = this.options.parent.innerWidth(), f = this.options.parent.innerHeight(), d = this.el.outerWidth(), c = this.el.outerHeight(), e = Math.min(Math.max(0, a - d / 2), g - d), null != b ? (h = b - c - 10, 0 > h && (h = b + 10, h + c > f && (h = f / 2 - c / 2))) : h = f / 2 - c / 2, this.el.css({
        left: e + "px",
        top: parseInt(h) + "px"
      });
    }, c.prototype.show = function () {
      return this.el.show();
    }, c.prototype.hide = function () {
      return this.el.hide();
    }, c;
  }(), b.Line = function (a) {
    function c(a) {
      return this.hilight = f(this.hilight, this), this.onHoverOut = f(this.onHoverOut, this), this.onHoverMove = f(this.onHoverMove, this), this.onGridClick = f(this.onGridClick, this), this instanceof b.Line ? (c.__super__.constructor.call(this, a), void 0) : new b.Line(a);
    }

    return h(c, a), c.prototype.init = function () {
      return "always" !== this.options.hideHover ? (this.hover = new b.Hover({
        parent: this.el
      }), this.on("hovermove", this.onHoverMove), this.on("hoverout", this.onHoverOut), this.on("gridclick", this.onGridClick)) : void 0;
    }, c.prototype.defaults = {
      lineWidth: 3,
      pointSize: 4,
      lineColors: ["#0b62a4", "#7A92A3", "#4da74d", "#afd8f8", "#edc240", "#cb4b4b", "#9440ed"],
      pointStrokeWidths: [1],
      pointStrokeColors: ["#ffffff"],
      pointFillColors: [],
      smooth: !0,
      xLabels: "auto",
      xLabelFormat: null,
      xLabelMargin: 24,
      hideHover: !1
    }, c.prototype.calc = function () {
      return this.calcPoints(), this.generatePaths();
    }, c.prototype.calcPoints = function () {
      var a, b, c, d, e, f;

      for (e = this.data, f = [], c = 0, d = e.length; d > c; c++) {
        a = e[c], a._x = this.transX(a.x), a._y = function () {
          var c, d, e, f;

          for (e = a.y, f = [], c = 0, d = e.length; d > c; c++) {
            b = e[c], null != b ? f.push(this.transY(b)) : f.push(b);
          }

          return f;
        }.call(this), f.push(a._ymax = Math.min.apply(Math, [this.bottom].concat(function () {
          var c, d, e, f;

          for (e = a._y, f = [], c = 0, d = e.length; d > c; c++) {
            b = e[c], null != b && f.push(b);
          }

          return f;
        }())));
      }

      return f;
    }, c.prototype.hitTest = function (a) {
      var b, c, d, e, f;
      if (0 === this.data.length) return null;

      for (f = this.data.slice(1), b = d = 0, e = f.length; e > d && (c = f[b], !(a < (c._x + this.data[b]._x) / 2)); b = ++d) {
        ;
      }

      return b;
    }, c.prototype.onGridClick = function (a, b) {
      var c;
      return c = this.hitTest(a), this.fire("click", c, this.data[c].src, a, b);
    }, c.prototype.onHoverMove = function (a) {
      var b;
      return b = this.hitTest(a), this.displayHoverForRow(b);
    }, c.prototype.onHoverOut = function () {
      return this.options.hideHover !== !1 ? this.displayHoverForRow(null) : void 0;
    }, c.prototype.displayHoverForRow = function (a) {
      var b;
      return null != a ? ((b = this.hover).update.apply(b, this.hoverContentForRow(a)), this.hilight(a)) : (this.hover.hide(), this.hilight());
    }, c.prototype.hoverContentForRow = function (a) {
      var b, c, d, e, f, g, h;

      for (d = this.data[a], b = "<div class='morris-hover-row-label'>" + d.label + "</div>", h = d.y, c = f = 0, g = h.length; g > f; c = ++f) {
        e = h[c], b += "<div class='morris-hover-point' style='color: " + this.colorFor(d, c, "label") + "'>\n  " + this.options.labels[c] + ":\n  " + this.yLabelFormat(e) + "\n</div>";
      }

      return "function" == typeof this.options.hoverCallback && (b = this.options.hoverCallback(a, this.options, b, d.src)), [b, d._x, d._ymax];
    }, c.prototype.generatePaths = function () {
      var a, c, d, e;
      return this.paths = function () {
        var f, g, h, j;

        for (j = [], c = f = 0, g = this.options.ykeys.length; g >= 0 ? g > f : f > g; c = g >= 0 ? ++f : --f) {
          e = "boolean" == typeof this.options.smooth ? this.options.smooth : (h = this.options.ykeys[c], i.call(this.options.smooth, h) >= 0), a = function () {
            var a, b, e, f;

            for (e = this.data, f = [], a = 0, b = e.length; b > a; a++) {
              d = e[a], void 0 !== d._y[c] && f.push({
                x: d._x,
                y: d._y[c]
              });
            }

            return f;
          }.call(this), a.length > 1 ? j.push(b.Line.createPath(a, e, this.bottom)) : j.push(null);
        }

        return j;
      }.call(this);
    }, c.prototype.draw = function () {
      var a;
      return ((a = this.options.axes) === !0 || "both" === a || "x" === a) && this.drawXAxis(), this.drawSeries(), this.options.hideHover === !1 ? this.displayHoverForRow(this.data.length - 1) : void 0;
    }, c.prototype.drawXAxis = function () {
      var a,
          c,
          d,
          e,
          f,
          g,
          h,
          i,
          j,
          k,
          l = this;

      for (h = this.bottom + this.options.padding / 2, f = null, e = null, a = function a(_a, b) {
        var c, d, g, i, j;
        return c = l.drawXAxisLabel(l.transX(b), h, _a), j = c.getBBox(), c.transform("r" + -l.options.xLabelAngle), d = c.getBBox(), c.transform("t0," + d.height / 2 + "..."), 0 !== l.options.xLabelAngle && (i = -.5 * j.width * Math.cos(l.options.xLabelAngle * Math.PI / 180), c.transform("t" + i + ",0...")), d = c.getBBox(), (null == f || f >= d.x + d.width || null != e && e >= d.x) && d.x >= 0 && d.x + d.width < l.el.width() ? (0 !== l.options.xLabelAngle && (g = 1.25 * l.options.gridTextSize / Math.sin(l.options.xLabelAngle * Math.PI / 180), e = d.x - g), f = d.x - l.options.xLabelMargin) : c.remove();
      }, d = this.options.parseTime ? 1 === this.data.length && "auto" === this.options.xLabels ? [[this.data[0].label, this.data[0].x]] : b.labelSeries(this.xmin, this.xmax, this.width, this.options.xLabels, this.options.xLabelFormat) : function () {
        var a, b, c, d;

        for (c = this.data, d = [], a = 0, b = c.length; b > a; a++) {
          g = c[a], d.push([g.label, g.x]);
        }

        return d;
      }.call(this), d.reverse(), k = [], i = 0, j = d.length; j > i; i++) {
        c = d[i], k.push(a(c[0], c[1]));
      }

      return k;
    }, c.prototype.drawSeries = function () {
      var a, b, c, d, e, f;

      for (this.seriesPoints = [], a = b = d = this.options.ykeys.length - 1; 0 >= d ? 0 >= b : b >= 0; a = 0 >= d ? ++b : --b) {
        this._drawLineFor(a);
      }

      for (f = [], a = c = e = this.options.ykeys.length - 1; 0 >= e ? 0 >= c : c >= 0; a = 0 >= e ? ++c : --c) {
        f.push(this._drawPointFor(a));
      }

      return f;
    }, c.prototype._drawPointFor = function (a) {
      var b, c, d, e, f, g;

      for (this.seriesPoints[a] = [], f = this.data, g = [], d = 0, e = f.length; e > d; d++) {
        c = f[d], b = null, null != c._y[a] && (b = this.drawLinePoint(c._x, c._y[a], this.colorFor(c, a, "point"), a)), g.push(this.seriesPoints[a].push(b));
      }

      return g;
    }, c.prototype._drawLineFor = function (a) {
      var b;
      return b = this.paths[a], null !== b ? this.drawLinePath(b, this.colorFor(null, a, "line"), a) : void 0;
    }, c.createPath = function (a, c, d) {
      var e, f, g, h, i, j, k, l, m, n, o, p, q, r;

      for (k = "", c && (g = b.Line.gradients(a)), l = {
        y: null
      }, h = q = 0, r = a.length; r > q; h = ++q) {
        e = a[h], null != e.y && (null != l.y ? c ? (f = g[h], j = g[h - 1], i = (e.x - l.x) / 4, m = l.x + i, o = Math.min(d, l.y + i * j), n = e.x - i, p = Math.min(d, e.y - i * f), k += "C" + m + "," + o + "," + n + "," + p + "," + e.x + "," + e.y) : k += "L" + e.x + "," + e.y : c && null == g[h] || (k += "M" + e.x + "," + e.y)), l = e;
      }

      return k;
    }, c.gradients = function (a) {
      var b, c, d, e, f, g, h, i;

      for (c = function c(a, b) {
        return (a.y - b.y) / (a.x - b.x);
      }, i = [], d = g = 0, h = a.length; h > g; d = ++g) {
        b = a[d], null != b.y ? (e = a[d + 1] || {
          y: null
        }, f = a[d - 1] || {
          y: null
        }, null != f.y && null != e.y ? i.push(c(f, e)) : null != f.y ? i.push(c(f, b)) : null != e.y ? i.push(c(b, e)) : i.push(null)) : i.push(null);
      }

      return i;
    }, c.prototype.hilight = function (a) {
      var b, c, d, e, f;
      if (null !== this.prevHilight && this.prevHilight !== a) for (b = c = 0, e = this.seriesPoints.length - 1; e >= 0 ? e >= c : c >= e; b = e >= 0 ? ++c : --c) {
        this.seriesPoints[b][this.prevHilight] && this.seriesPoints[b][this.prevHilight].animate(this.pointShrinkSeries(b));
      }
      if (null !== a && this.prevHilight !== a) for (b = d = 0, f = this.seriesPoints.length - 1; f >= 0 ? f >= d : d >= f; b = f >= 0 ? ++d : --d) {
        this.seriesPoints[b][a] && this.seriesPoints[b][a].animate(this.pointGrowSeries(b));
      }
      return this.prevHilight = a;
    }, c.prototype.colorFor = function (a, b, c) {
      return "function" == typeof this.options.lineColors ? this.options.lineColors.call(this, a, b, c) : "point" === c ? this.options.pointFillColors[b % this.options.pointFillColors.length] || this.options.lineColors[b % this.options.lineColors.length] : this.options.lineColors[b % this.options.lineColors.length];
    }, c.prototype.drawXAxisLabel = function (a, b, c) {
      return this.raphael.text(a, b, c).attr("font-size", this.options.gridTextSize).attr("font-family", this.options.gridTextFamily).attr("font-weight", this.options.gridTextWeight).attr("fill", this.options.gridTextColor);
    }, c.prototype.drawLinePath = function (a, b, c) {
      return this.raphael.path(a).attr("stroke", b).attr("stroke-width", this.lineWidthForSeries(c));
    }, c.prototype.drawLinePoint = function (a, b, c, d) {
      return this.raphael.circle(a, b, this.pointSizeForSeries(d)).attr("fill", c).attr("stroke-width", this.pointStrokeWidthForSeries(d)).attr("stroke", this.pointStrokeColorForSeries(d));
    }, c.prototype.pointStrokeWidthForSeries = function (a) {
      return this.options.pointStrokeWidths[a % this.options.pointStrokeWidths.length];
    }, c.prototype.pointStrokeColorForSeries = function (a) {
      return this.options.pointStrokeColors[a % this.options.pointStrokeColors.length];
    }, c.prototype.lineWidthForSeries = function (a) {
      return this.options.lineWidth instanceof Array ? this.options.lineWidth[a % this.options.lineWidth.length] : this.options.lineWidth;
    }, c.prototype.pointSizeForSeries = function (a) {
      return this.options.pointSize instanceof Array ? this.options.pointSize[a % this.options.pointSize.length] : this.options.pointSize;
    }, c.prototype.pointGrowSeries = function (a) {
      return Raphael.animation({
        r: this.pointSizeForSeries(a) + 3
      }, 25, "linear");
    }, c.prototype.pointShrinkSeries = function (a) {
      return Raphael.animation({
        r: this.pointSizeForSeries(a)
      }, 25, "linear");
    }, c;
  }(b.Grid), b.labelSeries = function (c, d, e, f, g) {
    var h, i, j, k, l, m, n, o, p, q, r;
    if (j = 200 * (d - c) / e, i = new Date(c), n = b.LABEL_SPECS[f], void 0 === n) for (r = b.AUTO_LABEL_ORDER, p = 0, q = r.length; q > p; p++) {
      if (k = r[p], m = b.LABEL_SPECS[k], j >= m.span) {
        n = m;
        break;
      }
    }

    for (void 0 === n && (n = b.LABEL_SPECS.second), g && (n = a.extend({}, n, {
      fmt: g
    })), h = n.start(i), l = []; (o = h.getTime()) <= d;) {
      o >= c && l.push([n.fmt(h), o]), n.incr(h);
    }

    return l;
  }, c = function c(a) {
    return {
      span: 60 * a * 1e3,
      start: function start(a) {
        return new Date(a.getFullYear(), a.getMonth(), a.getDate(), a.getHours());
      },
      fmt: function fmt(a) {
        return "" + b.pad2(a.getHours()) + ":" + b.pad2(a.getMinutes());
      },
      incr: function incr(b) {
        return b.setUTCMinutes(b.getUTCMinutes() + a);
      }
    };
  }, d = function d(a) {
    return {
      span: 1e3 * a,
      start: function start(a) {
        return new Date(a.getFullYear(), a.getMonth(), a.getDate(), a.getHours(), a.getMinutes());
      },
      fmt: function fmt(a) {
        return "" + b.pad2(a.getHours()) + ":" + b.pad2(a.getMinutes()) + ":" + b.pad2(a.getSeconds());
      },
      incr: function incr(b) {
        return b.setUTCSeconds(b.getUTCSeconds() + a);
      }
    };
  }, b.LABEL_SPECS = {
    decade: {
      span: 1728e8,
      start: function start(a) {
        return new Date(a.getFullYear() - a.getFullYear() % 10, 0, 1);
      },
      fmt: function fmt(a) {
        return "" + a.getFullYear();
      },
      incr: function incr(a) {
        return a.setFullYear(a.getFullYear() + 10);
      }
    },
    year: {
      span: 1728e7,
      start: function start(a) {
        return new Date(a.getFullYear(), 0, 1);
      },
      fmt: function fmt(a) {
        return "" + a.getFullYear();
      },
      incr: function incr(a) {
        return a.setFullYear(a.getFullYear() + 1);
      }
    },
    month: {
      span: 24192e5,
      start: function start(a) {
        return new Date(a.getFullYear(), a.getMonth(), 1);
      },
      fmt: function fmt(a) {
        return "" + a.getFullYear() + "-" + b.pad2(a.getMonth() + 1);
      },
      incr: function incr(a) {
        return a.setMonth(a.getMonth() + 1);
      }
    },
    week: {
      span: 6048e5,
      start: function start(a) {
        return new Date(a.getFullYear(), a.getMonth(), a.getDate());
      },
      fmt: function fmt(a) {
        return "" + a.getFullYear() + "-" + b.pad2(a.getMonth() + 1) + "-" + b.pad2(a.getDate());
      },
      incr: function incr(a) {
        return a.setDate(a.getDate() + 7);
      }
    },
    day: {
      span: 864e5,
      start: function start(a) {
        return new Date(a.getFullYear(), a.getMonth(), a.getDate());
      },
      fmt: function fmt(a) {
        return "" + a.getFullYear() + "-" + b.pad2(a.getMonth() + 1) + "-" + b.pad2(a.getDate());
      },
      incr: function incr(a) {
        return a.setDate(a.getDate() + 1);
      }
    },
    hour: c(60),
    "30min": c(30),
    "15min": c(15),
    "10min": c(10),
    "5min": c(5),
    minute: c(1),
    "30sec": d(30),
    "15sec": d(15),
    "10sec": d(10),
    "5sec": d(5),
    second: d(1)
  }, b.AUTO_LABEL_ORDER = ["decade", "year", "month", "week", "day", "hour", "30min", "15min", "10min", "5min", "minute", "30sec", "15sec", "10sec", "5sec", "second"], b.Area = function (c) {
    function d(c) {
      var f;
      return this instanceof b.Area ? (f = a.extend({}, e, c), this.cumulative = !f.behaveLikeLine, "auto" === f.fillOpacity && (f.fillOpacity = f.behaveLikeLine ? .8 : 1), d.__super__.constructor.call(this, f), void 0) : new b.Area(c);
    }

    var e;
    return h(d, c), e = {
      fillOpacity: "auto",
      behaveLikeLine: !1
    }, d.prototype.calcPoints = function () {
      var a, b, c, d, e, f, g;

      for (f = this.data, g = [], d = 0, e = f.length; e > d; d++) {
        a = f[d], a._x = this.transX(a.x), b = 0, a._y = function () {
          var d, e, f, g;

          for (f = a.y, g = [], d = 0, e = f.length; e > d; d++) {
            c = f[d], this.options.behaveLikeLine ? g.push(this.transY(c)) : (b += c || 0, g.push(this.transY(b)));
          }

          return g;
        }.call(this), g.push(a._ymax = Math.max.apply(Math, a._y));
      }

      return g;
    }, d.prototype.drawSeries = function () {
      var a, b, c, d, e, f, g, h;

      for (this.seriesPoints = [], b = this.options.behaveLikeLine ? function () {
        f = [];

        for (var a = 0, b = this.options.ykeys.length - 1; b >= 0 ? b >= a : a >= b; b >= 0 ? a++ : a--) {
          f.push(a);
        }

        return f;
      }.apply(this) : function () {
        g = [];

        for (var a = e = this.options.ykeys.length - 1; 0 >= e ? 0 >= a : a >= 0; 0 >= e ? a++ : a--) {
          g.push(a);
        }

        return g;
      }.apply(this), h = [], c = 0, d = b.length; d > c; c++) {
        a = b[c], this._drawFillFor(a), this._drawLineFor(a), h.push(this._drawPointFor(a));
      }

      return h;
    }, d.prototype._drawFillFor = function (a) {
      var b;
      return b = this.paths[a], null !== b ? (b += "L" + this.transX(this.xmax) + "," + this.bottom + "L" + this.transX(this.xmin) + "," + this.bottom + "Z", this.drawFilledPath(b, this.fillForSeries(a))) : void 0;
    }, d.prototype.fillForSeries = function (a) {
      var b;
      return b = Raphael.rgb2hsl(this.colorFor(this.data[a], a, "line")), Raphael.hsl(b.h, this.options.behaveLikeLine ? .9 * b.s : .75 * b.s, Math.min(.98, this.options.behaveLikeLine ? 1.2 * b.l : 1.25 * b.l));
    }, d.prototype.drawFilledPath = function (a, b) {
      return this.raphael.path(a).attr("fill", b).attr("fill-opacity", this.options.fillOpacity).attr("stroke", "none");
    }, d;
  }(b.Line), b.Bar = function (c) {
    function d(c) {
      return this.onHoverOut = f(this.onHoverOut, this), this.onHoverMove = f(this.onHoverMove, this), this.onGridClick = f(this.onGridClick, this), this instanceof b.Bar ? (d.__super__.constructor.call(this, a.extend({}, c, {
        parseTime: !1
      })), void 0) : new b.Bar(c);
    }

    return h(d, c), d.prototype.init = function () {
      return this.cumulative = this.options.stacked, "always" !== this.options.hideHover ? (this.hover = new b.Hover({
        parent: this.el
      }), this.on("hovermove", this.onHoverMove), this.on("hoverout", this.onHoverOut), this.on("gridclick", this.onGridClick)) : void 0;
    }, d.prototype.defaults = {
      barSizeRatio: .75,
      barGap: 3,
      barColors: ["#0b62a4", "#7a92a3", "#4da74d", "#afd8f8", "#edc240", "#cb4b4b", "#9440ed"],
      barOpacity: 1,
      barRadius: [0, 0, 0, 0],
      xLabelMargin: 50
    }, d.prototype.calc = function () {
      var a;
      return this.calcBars(), this.options.hideHover === !1 ? (a = this.hover).update.apply(a, this.hoverContentForRow(this.data.length - 1)) : void 0;
    }, d.prototype.calcBars = function () {
      var a, b, c, d, e, f, g;

      for (f = this.data, g = [], a = d = 0, e = f.length; e > d; a = ++d) {
        b = f[a], b._x = this.left + this.width * (a + .5) / this.data.length, g.push(b._y = function () {
          var a, d, e, f;

          for (e = b.y, f = [], a = 0, d = e.length; d > a; a++) {
            c = e[a], null != c ? f.push(this.transY(c)) : f.push(null);
          }

          return f;
        }.call(this));
      }

      return g;
    }, d.prototype.draw = function () {
      var a;
      return ((a = this.options.axes) === !0 || "both" === a || "x" === a) && this.drawXAxis(), this.drawSeries();
    }, d.prototype.drawXAxis = function () {
      var a, b, c, d, e, f, g, h, i, j, k, l, m;

      for (j = this.bottom + (this.options.xAxisLabelTopPadding || this.options.padding / 2), g = null, f = null, m = [], a = k = 0, l = this.data.length; l >= 0 ? l > k : k > l; a = l >= 0 ? ++k : --k) {
        h = this.data[this.data.length - 1 - a], b = this.drawXAxisLabel(h._x, j, h.label), i = b.getBBox(), b.transform("r" + -this.options.xLabelAngle), c = b.getBBox(), b.transform("t0," + c.height / 2 + "..."), 0 !== this.options.xLabelAngle && (e = -.5 * i.width * Math.cos(this.options.xLabelAngle * Math.PI / 180), b.transform("t" + e + ",0...")), (null == g || g >= c.x + c.width || null != f && f >= c.x) && c.x >= 0 && c.x + c.width < this.el.width() ? (0 !== this.options.xLabelAngle && (d = 1.25 * this.options.gridTextSize / Math.sin(this.options.xLabelAngle * Math.PI / 180), f = c.x - d), m.push(g = c.x - this.options.xLabelMargin)) : m.push(b.remove());
      }

      return m;
    }, d.prototype.drawSeries = function () {
      var a, b, c, d, e, f, g, h, i, j, k, l, m, n, o;
      return c = this.width / this.options.data.length, h = this.options.stacked ? 1 : this.options.ykeys.length, a = (c * this.options.barSizeRatio - this.options.barGap * (h - 1)) / h, this.options.barSize && (a = Math.min(a, this.options.barSize)), l = c - a * h - this.options.barGap * (h - 1), g = l / 2, o = this.ymin <= 0 && this.ymax >= 0 ? this.transY(0) : null, this.bars = function () {
        var h, l, p, q;

        for (p = this.data, q = [], d = h = 0, l = p.length; l > h; d = ++h) {
          i = p[d], e = 0, q.push(function () {
            var h, l, p, q;

            for (p = i._y, q = [], j = h = 0, l = p.length; l > h; j = ++h) {
              n = p[j], null !== n ? (o ? (m = Math.min(n, o), b = Math.max(n, o)) : (m = n, b = this.bottom), f = this.left + d * c + g, this.options.stacked || (f += j * (a + this.options.barGap)), k = b - m, this.options.verticalGridCondition && this.options.verticalGridCondition(i.x) && this.drawBar(this.left + d * c, this.top, c, Math.abs(this.top - this.bottom), this.options.verticalGridColor, this.options.verticalGridOpacity, this.options.barRadius), this.options.stacked && (m -= e), this.drawBar(f, m, a, k, this.colorFor(i, j, "bar"), this.options.barOpacity, this.options.barRadius), q.push(e += k)) : q.push(null);
            }

            return q;
          }.call(this));
        }

        return q;
      }.call(this);
    }, d.prototype.colorFor = function (a, b, c) {
      var d, e;
      return "function" == typeof this.options.barColors ? (d = {
        x: a.x,
        y: a.y[b],
        label: a.label
      }, e = {
        index: b,
        key: this.options.ykeys[b],
        label: this.options.labels[b]
      }, this.options.barColors.call(this, d, e, c)) : this.options.barColors[b % this.options.barColors.length];
    }, d.prototype.hitTest = function (a) {
      return 0 === this.data.length ? null : (a = Math.max(Math.min(a, this.right), this.left), Math.min(this.data.length - 1, Math.floor((a - this.left) / (this.width / this.data.length))));
    }, d.prototype.onGridClick = function (a, b) {
      var c;
      return c = this.hitTest(a), this.fire("click", c, this.data[c].src, a, b);
    }, d.prototype.onHoverMove = function (a) {
      var b, c;
      return b = this.hitTest(a), (c = this.hover).update.apply(c, this.hoverContentForRow(b));
    }, d.prototype.onHoverOut = function () {
      return this.options.hideHover !== !1 ? this.hover.hide() : void 0;
    }, d.prototype.hoverContentForRow = function (a) {
      var b, c, d, e, f, g, h, i;

      for (d = this.data[a], b = "<div class='morris-hover-row-label'>" + d.label + "</div>", i = d.y, c = g = 0, h = i.length; h > g; c = ++g) {
        f = i[c], b += "<div class='morris-hover-point' style='color: " + this.colorFor(d, c, "label") + "'>\n  " + this.options.labels[c] + ":\n  " + this.yLabelFormat(f) + "\n</div>";
      }

      return "function" == typeof this.options.hoverCallback && (b = this.options.hoverCallback(a, this.options, b, d.src)), e = this.left + (a + .5) * this.width / this.data.length, [b, e];
    }, d.prototype.drawXAxisLabel = function (a, b, c) {
      var d;
      return d = this.raphael.text(a, b, c).attr("font-size", this.options.gridTextSize).attr("font-family", this.options.gridTextFamily).attr("font-weight", this.options.gridTextWeight).attr("fill", this.options.gridTextColor);
    }, d.prototype.drawBar = function (a, b, c, d, e, f, g) {
      var h, i;
      return h = Math.max.apply(Math, g), i = 0 === h || h > d ? this.raphael.rect(a, b, c, d) : this.raphael.path(this.roundedRect(a, b, c, d, g)), i.attr("fill", e).attr("fill-opacity", f).attr("stroke", "none");
    }, d.prototype.roundedRect = function (a, b, c, d, e) {
      return null == e && (e = [0, 0, 0, 0]), ["M", a, e[0] + b, "Q", a, b, a + e[0], b, "L", a + c - e[1], b, "Q", a + c, b, a + c, b + e[1], "L", a + c, b + d - e[2], "Q", a + c, b + d, a + c - e[2], b + d, "L", a + e[3], b + d, "Q", a, b + d, a, b + d - e[3], "Z"];
    }, d;
  }(b.Grid), b.Donut = function (c) {
    function d(c) {
      this.resizeHandler = f(this.resizeHandler, this), this.select = f(this.select, this), this.click = f(this.click, this);
      var d = this;
      if (!(this instanceof b.Donut)) return new b.Donut(c);
      if (this.options = a.extend({}, this.defaults, c), this.el = "string" == typeof c.element ? a(document.getElementById(c.element)) : a(c.element), null === this.el || 0 === this.el.length) throw new Error("Graph placeholder not found.");
      void 0 !== c.data && 0 !== c.data.length && (this.raphael = new Raphael(this.el[0]), this.options.resize && a(window).bind("resize", function () {
        return null != d.timeoutId && window.clearTimeout(d.timeoutId), d.timeoutId = window.setTimeout(d.resizeHandler, 100);
      }), this.setData(c.data));
    }

    return h(d, c), d.prototype.defaults = {
      colors: ["#0B62A4", "#3980B5", "#679DC6", "#95BBD7", "#B0CCE1", "#095791", "#095085", "#083E67", "#052C48", "#042135"],
      backgroundColor: "#FFFFFF",
      labelColor: "#000000",
      formatter: b.commas,
      resize: !1
    }, d.prototype.redraw = function () {
      var a, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x;

      for (this.raphael.clear(), c = this.el.width() / 2, d = this.el.height() / 2, n = (Math.min(c, d) - 10) / 3, l = 0, u = this.values, o = 0, r = u.length; r > o; o++) {
        m = u[o], l += m;
      }

      for (i = 5 / (2 * n), a = 1.9999 * Math.PI - i * this.data.length, g = 0, f = 0, this.segments = [], v = this.values, e = p = 0, s = v.length; s > p; e = ++p) {
        m = v[e], j = g + i + a * (m / l), k = new b.DonutSegment(c, d, 2 * n, n, g, j, this.data[e].color || this.options.colors[f % this.options.colors.length], this.options.backgroundColor, f, this.raphael), k.render(), this.segments.push(k), k.on("hover", this.select), k.on("click", this.click), g = j, f += 1;
      }

      for (this.text1 = this.drawEmptyDonutLabel(c, d - 10, this.options.labelColor, 15, 800), this.text2 = this.drawEmptyDonutLabel(c, d + 10, this.options.labelColor, 14), h = Math.max.apply(Math, this.values), f = 0, w = this.values, x = [], q = 0, t = w.length; t > q; q++) {
        if (m = w[q], m === h) {
          this.select(f);
          break;
        }

        x.push(f += 1);
      }

      return x;
    }, d.prototype.setData = function (a) {
      var b;
      return this.data = a, this.values = function () {
        var a, c, d, e;

        for (d = this.data, e = [], a = 0, c = d.length; c > a; a++) {
          b = d[a], e.push(parseFloat(b.value));
        }

        return e;
      }.call(this), this.redraw();
    }, d.prototype.click = function (a) {
      return this.fire("click", a, this.data[a]);
    }, d.prototype.select = function (a) {
      var b, c, d, e, f, g;

      for (g = this.segments, e = 0, f = g.length; f > e; e++) {
        c = g[e], c.deselect();
      }

      return d = this.segments[a], d.select(), b = this.data[a], this.setLabels(b.label, this.options.formatter(b.value, b));
    }, d.prototype.setLabels = function (a, b) {
      var c, d, e, f, g, h, i, j;
      return c = 2 * (Math.min(this.el.width() / 2, this.el.height() / 2) - 10) / 3, f = 1.8 * c, e = c / 2, d = c / 3, this.text1.attr({
        text: a,
        transform: ""
      }), g = this.text1.getBBox(), h = Math.min(f / g.width, e / g.height), this.text1.attr({
        transform: "S" + h + "," + h + "," + (g.x + g.width / 2) + "," + (g.y + g.height)
      }), this.text2.attr({
        text: b,
        transform: ""
      }), i = this.text2.getBBox(), j = Math.min(f / i.width, d / i.height), this.text2.attr({
        transform: "S" + j + "," + j + "," + (i.x + i.width / 2) + "," + i.y
      });
    }, d.prototype.drawEmptyDonutLabel = function (a, b, c, d, e) {
      var f;
      return f = this.raphael.text(a, b, "").attr("font-size", d).attr("fill", c), null != e && f.attr("font-weight", e), f;
    }, d.prototype.resizeHandler = function () {
      return this.timeoutId = null, this.raphael.setSize(this.el.width(), this.el.height()), this.redraw();
    }, d;
  }(b.EventEmitter), b.DonutSegment = function (a) {
    function b(a, b, c, d, e, g, h, i, j, k) {
      this.cx = a, this.cy = b, this.inner = c, this.outer = d, this.color = h, this.backgroundColor = i, this.index = j, this.raphael = k, this.deselect = f(this.deselect, this), this.select = f(this.select, this), this.sin_p0 = Math.sin(e), this.cos_p0 = Math.cos(e), this.sin_p1 = Math.sin(g), this.cos_p1 = Math.cos(g), this.is_long = g - e > Math.PI ? 1 : 0, this.path = this.calcSegment(this.inner + 3, this.inner + this.outer - 5), this.selectedPath = this.calcSegment(this.inner + 3, this.inner + this.outer), this.hilight = this.calcArc(this.inner);
    }

    return h(b, a), b.prototype.calcArcPoints = function (a) {
      return [this.cx + a * this.sin_p0, this.cy + a * this.cos_p0, this.cx + a * this.sin_p1, this.cy + a * this.cos_p1];
    }, b.prototype.calcSegment = function (a, b) {
      var c, d, e, f, g, h, i, j, k, l;
      return k = this.calcArcPoints(a), c = k[0], e = k[1], d = k[2], f = k[3], l = this.calcArcPoints(b), g = l[0], i = l[1], h = l[2], j = l[3], "M" + c + "," + e + ("A" + a + "," + a + ",0," + this.is_long + ",0," + d + "," + f) + ("L" + h + "," + j) + ("A" + b + "," + b + ",0," + this.is_long + ",1," + g + "," + i) + "Z";
    }, b.prototype.calcArc = function (a) {
      var b, c, d, e, f;
      return f = this.calcArcPoints(a), b = f[0], d = f[1], c = f[2], e = f[3], "M" + b + "," + d + ("A" + a + "," + a + ",0," + this.is_long + ",0," + c + "," + e);
    }, b.prototype.render = function () {
      var a = this;
      return this.arc = this.drawDonutArc(this.hilight, this.color), this.seg = this.drawDonutSegment(this.path, this.color, this.backgroundColor, function () {
        return a.fire("hover", a.index);
      }, function () {
        return a.fire("click", a.index);
      });
    }, b.prototype.drawDonutArc = function (a, b) {
      return this.raphael.path(a).attr({
        stroke: b,
        "stroke-width": 2,
        opacity: 0
      });
    }, b.prototype.drawDonutSegment = function (a, b, c, d, e) {
      return this.raphael.path(a).attr({
        fill: b,
        stroke: c,
        "stroke-width": 3
      }).hover(d).click(e);
    }, b.prototype.select = function () {
      return this.selected ? void 0 : (this.seg.animate({
        path: this.selectedPath
      }, 150, "<>"), this.arc.animate({
        opacity: 1
      }, 150, "<>"), this.selected = !0);
    }, b.prototype.deselect = function () {
      return this.selected ? (this.seg.animate({
        path: this.path
      }, 150, "<>"), this.arc.animate({
        opacity: 0
      }, 150, "<>"), this.selected = !1) : void 0;
    }, b;
  }(b.EventEmitter);
}).call(this);

/***/ }),

/***/ "./resources/js/admin/raphael.min.js":
/*!*******************************************!*\
  !*** ./resources/js/admin/raphael.min.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

!function t(e, r) {
  "object" == ( false ? undefined : _typeof(exports)) && "object" == ( false ? undefined : _typeof(module)) ? module.exports = r() :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (r),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
}(this, function () {
  return function (t) {
    function e(i) {
      if (r[i]) return r[i].exports;
      var n = r[i] = {
        exports: {},
        id: i,
        loaded: !1
      };
      return t[i].call(n.exports, n, n.exports, e), n.loaded = !0, n.exports;
    }

    var r = {};
    return e.m = t, e.c = r, e.p = "", e(0);
  }([function (t, e, r) {
    var i, n;
    i = [r(1), r(3), r(4)], n = function (t) {
      return t;
    }.apply(e, i), !(void 0 !== n && (t.exports = n));
  }, function (t, e, r) {
    var i, n;
    i = [r(2)], n = function (t) {
      function e(r) {
        if (e.is(r, "function")) return w ? r() : t.on("raphael.DOMload", r);
        if (e.is(r, Q)) return e._engine.create[z](e, r.splice(0, 3 + e.is(r[0], $))).add(r);
        var i = Array.prototype.slice.call(arguments, 0);

        if (e.is(i[i.length - 1], "function")) {
          var n = i.pop();
          return w ? n.call(e._engine.create[z](e, i)) : t.on("raphael.DOMload", function () {
            n.call(e._engine.create[z](e, i));
          });
        }

        return e._engine.create[z](e, arguments);
      }

      function r(t) {
        if ("function" == typeof t || Object(t) !== t) return t;
        var e = new t.constructor();

        for (var i in t) {
          t[A](i) && (e[i] = r(t[i]));
        }

        return e;
      }

      function i(t, e) {
        for (var r = 0, i = t.length; r < i; r++) {
          if (t[r] === e) return t.push(t.splice(r, 1)[0]);
        }
      }

      function n(t, e, r) {
        function n() {
          var a = Array.prototype.slice.call(arguments, 0),
              s = a.join("␀"),
              o = n.cache = n.cache || {},
              l = n.count = n.count || [];
          return o[A](s) ? (i(l, s), r ? r(o[s]) : o[s]) : (l.length >= 1e3 && delete o[l.shift()], l.push(s), o[s] = t[z](e, a), r ? r(o[s]) : o[s]);
        }

        return n;
      }

      function a() {
        return this.hex;
      }

      function s(t, e) {
        for (var r = [], i = 0, n = t.length; n - 2 * !e > i; i += 2) {
          var a = [{
            x: +t[i - 2],
            y: +t[i - 1]
          }, {
            x: +t[i],
            y: +t[i + 1]
          }, {
            x: +t[i + 2],
            y: +t[i + 3]
          }, {
            x: +t[i + 4],
            y: +t[i + 5]
          }];
          e ? i ? n - 4 == i ? a[3] = {
            x: +t[0],
            y: +t[1]
          } : n - 2 == i && (a[2] = {
            x: +t[0],
            y: +t[1]
          }, a[3] = {
            x: +t[2],
            y: +t[3]
          }) : a[0] = {
            x: +t[n - 2],
            y: +t[n - 1]
          } : n - 4 == i ? a[3] = a[2] : i || (a[0] = {
            x: +t[i],
            y: +t[i + 1]
          }), r.push(["C", (-a[0].x + 6 * a[1].x + a[2].x) / 6, (-a[0].y + 6 * a[1].y + a[2].y) / 6, (a[1].x + 6 * a[2].x - a[3].x) / 6, (a[1].y + 6 * a[2].y - a[3].y) / 6, a[2].x, a[2].y]);
        }

        return r;
      }

      function o(t, e, r, i, n) {
        var a = -3 * e + 9 * r - 9 * i + 3 * n,
            s = t * a + 6 * e - 12 * r + 6 * i;
        return t * s - 3 * e + 3 * r;
      }

      function l(t, e, r, i, n, a, s, l, h) {
        null == h && (h = 1), h = h > 1 ? 1 : h < 0 ? 0 : h;

        for (var u = h / 2, c = 12, f = [-.1252, .1252, -.3678, .3678, -.5873, .5873, -.7699, .7699, -.9041, .9041, -.9816, .9816], p = [.2491, .2491, .2335, .2335, .2032, .2032, .1601, .1601, .1069, .1069, .0472, .0472], d = 0, g = 0; g < c; g++) {
          var v = u * f[g] + u,
              x = o(v, t, r, n, s),
              y = o(v, e, i, a, l),
              m = x * x + y * y;
          d += p[g] * Y.sqrt(m);
        }

        return u * d;
      }

      function h(t, e, r, i, n, a, s, o, h) {
        if (!(h < 0 || l(t, e, r, i, n, a, s, o) < h)) {
          var u = 1,
              c = u / 2,
              f = u - c,
              p,
              d = .01;

          for (p = l(t, e, r, i, n, a, s, o, f); H(p - h) > d;) {
            c /= 2, f += (p < h ? 1 : -1) * c, p = l(t, e, r, i, n, a, s, o, f);
          }

          return f;
        }
      }

      function u(t, e, r, i, n, a, s, o) {
        if (!(W(t, r) < G(n, s) || G(t, r) > W(n, s) || W(e, i) < G(a, o) || G(e, i) > W(a, o))) {
          var l = (t * i - e * r) * (n - s) - (t - r) * (n * o - a * s),
              h = (t * i - e * r) * (a - o) - (e - i) * (n * o - a * s),
              u = (t - r) * (a - o) - (e - i) * (n - s);

          if (u) {
            var c = l / u,
                f = h / u,
                p = +c.toFixed(2),
                d = +f.toFixed(2);
            if (!(p < +G(t, r).toFixed(2) || p > +W(t, r).toFixed(2) || p < +G(n, s).toFixed(2) || p > +W(n, s).toFixed(2) || d < +G(e, i).toFixed(2) || d > +W(e, i).toFixed(2) || d < +G(a, o).toFixed(2) || d > +W(a, o).toFixed(2))) return {
              x: c,
              y: f
            };
          }
        }
      }

      function c(t, e) {
        return p(t, e);
      }

      function f(t, e) {
        return p(t, e, 1);
      }

      function p(t, r, i) {
        var n = e.bezierBBox(t),
            a = e.bezierBBox(r);
        if (!e.isBBoxIntersect(n, a)) return i ? 0 : [];

        for (var s = l.apply(0, t), o = l.apply(0, r), h = W(~~(s / 5), 1), c = W(~~(o / 5), 1), f = [], p = [], d = {}, g = i ? 0 : [], v = 0; v < h + 1; v++) {
          var x = e.findDotsAtSegment.apply(e, t.concat(v / h));
          f.push({
            x: x.x,
            y: x.y,
            t: v / h
          });
        }

        for (v = 0; v < c + 1; v++) {
          x = e.findDotsAtSegment.apply(e, r.concat(v / c)), p.push({
            x: x.x,
            y: x.y,
            t: v / c
          });
        }

        for (v = 0; v < h; v++) {
          for (var y = 0; y < c; y++) {
            var m = f[v],
                b = f[v + 1],
                _ = p[y],
                w = p[y + 1],
                k = H(b.x - m.x) < .001 ? "y" : "x",
                B = H(w.x - _.x) < .001 ? "y" : "x",
                C = u(m.x, m.y, b.x, b.y, _.x, _.y, w.x, w.y);

            if (C) {
              if (d[C.x.toFixed(4)] == C.y.toFixed(4)) continue;
              d[C.x.toFixed(4)] = C.y.toFixed(4);

              var S = m.t + H((C[k] - m[k]) / (b[k] - m[k])) * (b.t - m.t),
                  A = _.t + H((C[B] - _[B]) / (w[B] - _[B])) * (w.t - _.t);

              S >= 0 && S <= 1.001 && A >= 0 && A <= 1.001 && (i ? g++ : g.push({
                x: C.x,
                y: C.y,
                t1: G(S, 1),
                t2: G(A, 1)
              }));
            }
          }
        }

        return g;
      }

      function d(t, r, i) {
        t = e._path2curve(t), r = e._path2curve(r);

        for (var n, a, s, o, l, h, u, c, f, d, g = i ? 0 : [], v = 0, x = t.length; v < x; v++) {
          var y = t[v];
          if ("M" == y[0]) n = l = y[1], a = h = y[2];else {
            "C" == y[0] ? (f = [n, a].concat(y.slice(1)), n = f[6], a = f[7]) : (f = [n, a, n, a, l, h, l, h], n = l, a = h);

            for (var m = 0, b = r.length; m < b; m++) {
              var _ = r[m];
              if ("M" == _[0]) s = u = _[1], o = c = _[2];else {
                "C" == _[0] ? (d = [s, o].concat(_.slice(1)), s = d[6], o = d[7]) : (d = [s, o, s, o, u, c, u, c], s = u, o = c);
                var w = p(f, d, i);
                if (i) g += w;else {
                  for (var k = 0, B = w.length; k < B; k++) {
                    w[k].segment1 = v, w[k].segment2 = m, w[k].bez1 = f, w[k].bez2 = d;
                  }

                  g = g.concat(w);
                }
              }
            }
          }
        }

        return g;
      }

      function g(t, e, r, i, n, a) {
        null != t ? (this.a = +t, this.b = +e, this.c = +r, this.d = +i, this.e = +n, this.f = +a) : (this.a = 1, this.b = 0, this.c = 0, this.d = 1, this.e = 0, this.f = 0);
      }

      function v() {
        return this.x + j + this.y;
      }

      function x() {
        return this.x + j + this.y + j + this.width + " × " + this.height;
      }

      function y(t, e, r, i, n, a) {
        function s(t) {
          return ((c * t + u) * t + h) * t;
        }

        function o(t, e) {
          var r = l(t, e);
          return ((d * r + p) * r + f) * r;
        }

        function l(t, e) {
          var r, i, n, a, o, l;

          for (n = t, l = 0; l < 8; l++) {
            if (a = s(n) - t, H(a) < e) return n;
            if (o = (3 * c * n + 2 * u) * n + h, H(o) < 1e-6) break;
            n -= a / o;
          }

          if (r = 0, i = 1, n = t, n < r) return r;
          if (n > i) return i;

          for (; r < i;) {
            if (a = s(n), H(a - t) < e) return n;
            t > a ? r = n : i = n, n = (i - r) / 2 + r;
          }

          return n;
        }

        var h = 3 * e,
            u = 3 * (i - e) - h,
            c = 1 - h - u,
            f = 3 * r,
            p = 3 * (n - r) - f,
            d = 1 - f - p;
        return o(t, 1 / (200 * a));
      }

      function m(t, e) {
        var r = [],
            i = {};

        if (this.ms = e, this.times = 1, t) {
          for (var n in t) {
            t[A](n) && (i[ht(n)] = t[n], r.push(ht(n)));
          }

          r.sort(Bt);
        }

        this.anim = i, this.top = r[r.length - 1], this.percents = r;
      }

      function b(r, i, n, a, s, o) {
        n = ht(n);
        var l,
            h,
            u,
            c = [],
            f,
            p,
            d,
            v = r.ms,
            x = {},
            m = {},
            b = {};
        if (a) for (w = 0, B = Ee.length; w < B; w++) {
          var _ = Ee[w];

          if (_.el.id == i.id && _.anim == r) {
            _.percent != n ? (Ee.splice(w, 1), u = 1) : h = _, i.attr(_.totalOrigin);
            break;
          }
        } else a = +m;

        for (var w = 0, B = r.percents.length; w < B; w++) {
          if (r.percents[w] == n || r.percents[w] > a * r.top) {
            n = r.percents[w], p = r.percents[w - 1] || 0, v = v / r.top * (n - p), f = r.percents[w + 1], l = r.anim[n];
            break;
          }

          a && i.attr(r.anim[r.percents[w]]);
        }

        if (l) {
          if (h) h.initstatus = a, h.start = new Date() - h.ms * a;else {
            for (var C in l) {
              if (l[A](C) && (pt[A](C) || i.paper.customAttributes[A](C))) switch (x[C] = i.attr(C), null == x[C] && (x[C] = ft[C]), m[C] = l[C], pt[C]) {
                case $:
                  b[C] = (m[C] - x[C]) / v;
                  break;

                case "colour":
                  x[C] = e.getRGB(x[C]);
                  var S = e.getRGB(m[C]);
                  b[C] = {
                    r: (S.r - x[C].r) / v,
                    g: (S.g - x[C].g) / v,
                    b: (S.b - x[C].b) / v
                  };
                  break;

                case "path":
                  var T = Qt(x[C], m[C]),
                      E = T[1];

                  for (x[C] = T[0], b[C] = [], w = 0, B = x[C].length; w < B; w++) {
                    b[C][w] = [0];

                    for (var M = 1, N = x[C][w].length; M < N; M++) {
                      b[C][w][M] = (E[w][M] - x[C][w][M]) / v;
                    }
                  }

                  break;

                case "transform":
                  var L = i._,
                      z = le(L[C], m[C]);
                  if (z) for (x[C] = z.from, m[C] = z.to, b[C] = [], b[C].real = !0, w = 0, B = x[C].length; w < B; w++) {
                    for (b[C][w] = [x[C][w][0]], M = 1, N = x[C][w].length; M < N; M++) {
                      b[C][w][M] = (m[C][w][M] - x[C][w][M]) / v;
                    }
                  } else {
                    var F = i.matrix || new g(),
                        R = {
                      _: {
                        transform: L.transform
                      },
                      getBBox: function getBBox() {
                        return i.getBBox(1);
                      }
                    };
                    x[C] = [F.a, F.b, F.c, F.d, F.e, F.f], se(R, m[C]), m[C] = R._.transform, b[C] = [(R.matrix.a - F.a) / v, (R.matrix.b - F.b) / v, (R.matrix.c - F.c) / v, (R.matrix.d - F.d) / v, (R.matrix.e - F.e) / v, (R.matrix.f - F.f) / v];
                  }
                  break;

                case "csv":
                  var j = I(l[C])[q](k),
                      D = I(x[C])[q](k);
                  if ("clip-rect" == C) for (x[C] = D, b[C] = [], w = D.length; w--;) {
                    b[C][w] = (j[w] - x[C][w]) / v;
                  }
                  m[C] = j;
                  break;

                default:
                  for (j = [][P](l[C]), D = [][P](x[C]), b[C] = [], w = i.paper.customAttributes[C].length; w--;) {
                    b[C][w] = ((j[w] || 0) - (D[w] || 0)) / v;
                  }

              }
            }

            var V = l.easing,
                O = e.easing_formulas[V];
            if (!O) if (O = I(V).match(st), O && 5 == O.length) {
              var Y = O;

              O = function O(t) {
                return y(t, +Y[1], +Y[2], +Y[3], +Y[4], v);
              };
            } else O = St;
            if (d = l.start || r.start || +new Date(), _ = {
              anim: r,
              percent: n,
              timestamp: d,
              start: d + (r.del || 0),
              status: 0,
              initstatus: a || 0,
              stop: !1,
              ms: v,
              easing: O,
              from: x,
              diff: b,
              to: m,
              el: i,
              callback: l.callback,
              prev: p,
              next: f,
              repeat: o || r.times,
              origin: i.attr(),
              totalOrigin: s
            }, Ee.push(_), a && !h && !u && (_.stop = !0, _.start = new Date() - v * a, 1 == Ee.length)) return Ne();
            u && (_.start = new Date() - _.ms * a), 1 == Ee.length && Me(Ne);
          }
          t("raphael.anim.start." + i.id, i, r);
        }
      }

      function _(t) {
        for (var e = 0; e < Ee.length; e++) {
          Ee[e].el.paper == t && Ee.splice(e--, 1);
        }
      }

      e.version = "2.2.0", e.eve = t;

      var w,
          k = /[, ]+/,
          B = {
        circle: 1,
        rect: 1,
        path: 1,
        ellipse: 1,
        text: 1,
        image: 1
      },
          C = /\{(\d+)\}/g,
          S = "prototype",
          A = "hasOwnProperty",
          T = {
        doc: document,
        win: window
      },
          E = {
        was: Object.prototype[A].call(T.win, "Raphael"),
        is: T.win.Raphael
      },
          M = function M() {
        this.ca = this.customAttributes = {};
      },
          N,
          L = "appendChild",
          z = "apply",
          P = "concat",
          F = "ontouchstart" in T.win || T.win.DocumentTouch && T.doc instanceof DocumentTouch,
          R = "",
          j = " ",
          I = String,
          q = "split",
          D = "click dblclick mousedown mousemove mouseout mouseover mouseup touchstart touchmove touchend touchcancel"[q](j),
          V = {
        mousedown: "touchstart",
        mousemove: "touchmove",
        mouseup: "touchend"
      },
          O = I.prototype.toLowerCase,
          Y = Math,
          W = Y.max,
          G = Y.min,
          H = Y.abs,
          X = Y.pow,
          U = Y.PI,
          $ = "number",
          Z = "string",
          Q = "array",
          J = "toString",
          K = "fill",
          tt = Object.prototype.toString,
          et = {},
          rt = "push",
          it = e._ISURL = /^url\(['"]?(.+?)['"]?\)$/i,
          nt = /^\s*((#[a-f\d]{6})|(#[a-f\d]{3})|rgba?\(\s*([\d\.]+%?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+%?(?:\s*,\s*[\d\.]+%?)?)\s*\)|hsba?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?)%?\s*\)|hsla?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?)%?\s*\))\s*$/i,
          at = {
        NaN: 1,
        Infinity: 1,
        "-Infinity": 1
      },
          st = /^(?:cubic-)?bezier\(([^,]+),([^,]+),([^,]+),([^\)]+)\)/,
          ot = Y.round,
          lt = "setAttribute",
          ht = parseFloat,
          ut = parseInt,
          ct = I.prototype.toUpperCase,
          ft = e._availableAttrs = {
        "arrow-end": "none",
        "arrow-start": "none",
        blur: 0,
        "clip-rect": "0 0 1e9 1e9",
        cursor: "default",
        cx: 0,
        cy: 0,
        fill: "#fff",
        "fill-opacity": 1,
        font: '10px "Arial"',
        "font-family": '"Arial"',
        "font-size": "10",
        "font-style": "normal",
        "font-weight": 400,
        gradient: 0,
        height: 0,
        href: "http://raphaeljs.com/",
        "letter-spacing": 0,
        opacity: 1,
        path: "M0,0",
        r: 0,
        rx: 0,
        ry: 0,
        src: "",
        stroke: "#000",
        "stroke-dasharray": "",
        "stroke-linecap": "butt",
        "stroke-linejoin": "butt",
        "stroke-miterlimit": 0,
        "stroke-opacity": 1,
        "stroke-width": 1,
        target: "_blank",
        "text-anchor": "middle",
        title: "Raphael",
        transform: "",
        width: 0,
        x: 0,
        y: 0,
        "class": ""
      },
          pt = e._availableAnimAttrs = {
        blur: $,
        "clip-rect": "csv",
        cx: $,
        cy: $,
        fill: "colour",
        "fill-opacity": $,
        "font-size": $,
        height: $,
        opacity: $,
        path: "path",
        r: $,
        rx: $,
        ry: $,
        stroke: "colour",
        "stroke-opacity": $,
        "stroke-width": $,
        transform: "transform",
        width: $,
        x: $,
        y: $
      },
          dt = /[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]/g,
          gt = /[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*/,
          vt = {
        hs: 1,
        rg: 1
      },
          xt = /,?([achlmqrstvxz]),?/gi,
          yt = /([achlmrqstvz])[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029,]*((-?\d*\.?\d*(?:e[\-+]?\d+)?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*)+)/gi,
          mt = /([rstm])[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029,]*((-?\d*\.?\d*(?:e[\-+]?\d+)?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*)+)/gi,
          bt = /(-?\d*\.?\d*(?:e[\-+]?\d+)?)[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*/gi,
          _t = e._radial_gradient = /^r(?:\(([^,]+?)[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*([^\)]+?)\))?/,
          wt = {},
          kt = function kt(t, e) {
        return t.key - e.key;
      },
          Bt = function Bt(t, e) {
        return ht(t) - ht(e);
      },
          Ct = function Ct() {},
          St = function St(t) {
        return t;
      },
          At = e._rectPath = function (t, e, r, i, n) {
        return n ? [["M", t + n, e], ["l", r - 2 * n, 0], ["a", n, n, 0, 0, 1, n, n], ["l", 0, i - 2 * n], ["a", n, n, 0, 0, 1, -n, n], ["l", 2 * n - r, 0], ["a", n, n, 0, 0, 1, -n, -n], ["l", 0, 2 * n - i], ["a", n, n, 0, 0, 1, n, -n], ["z"]] : [["M", t, e], ["l", r, 0], ["l", 0, i], ["l", -r, 0], ["z"]];
      },
          Tt = function Tt(t, e, r, i) {
        return null == i && (i = r), [["M", t, e], ["m", 0, -i], ["a", r, i, 0, 1, 1, 0, 2 * i], ["a", r, i, 0, 1, 1, 0, -2 * i], ["z"]];
      },
          Et = e._getPath = {
        path: function path(t) {
          return t.attr("path");
        },
        circle: function circle(t) {
          var e = t.attrs;
          return Tt(e.cx, e.cy, e.r);
        },
        ellipse: function ellipse(t) {
          var e = t.attrs;
          return Tt(e.cx, e.cy, e.rx, e.ry);
        },
        rect: function rect(t) {
          var e = t.attrs;
          return At(e.x, e.y, e.width, e.height, e.r);
        },
        image: function image(t) {
          var e = t.attrs;
          return At(e.x, e.y, e.width, e.height);
        },
        text: function text(t) {
          var e = t._getBBox();

          return At(e.x, e.y, e.width, e.height);
        },
        set: function set(t) {
          var e = t._getBBox();

          return At(e.x, e.y, e.width, e.height);
        }
      },
          Mt = e.mapPath = function (t, e) {
        if (!e) return t;
        var r, i, n, a, s, o, l;

        for (t = Qt(t), n = 0, s = t.length; n < s; n++) {
          for (l = t[n], a = 1, o = l.length; a < o; a += 2) {
            r = e.x(l[a], l[a + 1]), i = e.y(l[a], l[a + 1]), l[a] = r, l[a + 1] = i;
          }
        }

        return t;
      };

      if (e._g = T, e.type = T.win.SVGAngle || T.doc.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure", "1.1") ? "SVG" : "VML", "VML" == e.type) {
        var Nt = T.doc.createElement("div"),
            Lt;
        if (Nt.innerHTML = '<v:shape adj="1"/>', Lt = Nt.firstChild, Lt.style.behavior = "url(#default#VML)", !Lt || "object" != _typeof(Lt.adj)) return e.type = R;
        Nt = null;
      }

      e.svg = !(e.vml = "VML" == e.type), e._Paper = M, e.fn = N = M.prototype = e.prototype, e._id = 0, e.is = function (t, e) {
        return e = O.call(e), "finite" == e ? !at[A](+t) : "array" == e ? t instanceof Array : "null" == e && null === t || e == _typeof(t) && null !== t || "object" == e && t === Object(t) || "array" == e && Array.isArray && Array.isArray(t) || tt.call(t).slice(8, -1).toLowerCase() == e;
      }, e.angle = function (t, r, i, n, a, s) {
        if (null == a) {
          var o = t - i,
              l = r - n;
          return o || l ? (180 + 180 * Y.atan2(-l, -o) / U + 360) % 360 : 0;
        }

        return e.angle(t, r, a, s) - e.angle(i, n, a, s);
      }, e.rad = function (t) {
        return t % 360 * U / 180;
      }, e.deg = function (t) {
        return Math.round(180 * t / U % 360 * 1e3) / 1e3;
      }, e.snapTo = function (t, r, i) {
        if (i = e.is(i, "finite") ? i : 10, e.is(t, Q)) {
          for (var n = t.length; n--;) {
            if (H(t[n] - r) <= i) return t[n];
          }
        } else {
          t = +t;
          var a = r % t;
          if (a < i) return r - a;
          if (a > t - i) return r - a + t;
        }

        return r;
      };

      var zt = e.createUUID = function (t, e) {
        return function () {
          return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(t, e).toUpperCase();
        };
      }(/[xy]/g, function (t) {
        var e = 16 * Y.random() | 0,
            r = "x" == t ? e : 3 & e | 8;
        return r.toString(16);
      });

      e.setWindow = function (r) {
        t("raphael.setWindow", e, T.win, r), T.win = r, T.doc = T.win.document, e._engine.initWin && e._engine.initWin(T.win);
      };

      var _Pt = function Pt(t) {
        if (e.vml) {
          var r = /^\s+|\s+$/g,
              i;

          try {
            var a = new ActiveXObject("htmlfile");
            a.write("<body>"), a.close(), i = a.body;
          } catch (s) {
            i = createPopup().document.body;
          }

          var o = i.createTextRange();
          _Pt = n(function (t) {
            try {
              i.style.color = I(t).replace(r, R);
              var e = o.queryCommandValue("ForeColor");
              return e = (255 & e) << 16 | 65280 & e | (16711680 & e) >>> 16, "#" + ("000000" + e.toString(16)).slice(-6);
            } catch (n) {
              return "none";
            }
          });
        } else {
          var l = T.doc.createElement("i");
          l.title = "Raphaël Colour Picker", l.style.display = "none", T.doc.body.appendChild(l), _Pt = n(function (t) {
            return l.style.color = t, T.doc.defaultView.getComputedStyle(l, R).getPropertyValue("color");
          });
        }

        return _Pt(t);
      },
          Ft = function Ft() {
        return "hsb(" + [this.h, this.s, this.b] + ")";
      },
          Rt = function Rt() {
        return "hsl(" + [this.h, this.s, this.l] + ")";
      },
          jt = function jt() {
        return this.hex;
      },
          It = function It(t, r, i) {
        if (null == r && e.is(t, "object") && "r" in t && "g" in t && "b" in t && (i = t.b, r = t.g, t = t.r), null == r && e.is(t, Z)) {
          var n = e.getRGB(t);
          t = n.r, r = n.g, i = n.b;
        }

        return (t > 1 || r > 1 || i > 1) && (t /= 255, r /= 255, i /= 255), [t, r, i];
      },
          qt = function qt(t, r, i, n) {
        t *= 255, r *= 255, i *= 255;
        var a = {
          r: t,
          g: r,
          b: i,
          hex: e.rgb(t, r, i),
          toString: jt
        };
        return e.is(n, "finite") && (a.opacity = n), a;
      };

      e.color = function (t) {
        var r;
        return e.is(t, "object") && "h" in t && "s" in t && "b" in t ? (r = e.hsb2rgb(t), t.r = r.r, t.g = r.g, t.b = r.b, t.hex = r.hex) : e.is(t, "object") && "h" in t && "s" in t && "l" in t ? (r = e.hsl2rgb(t), t.r = r.r, t.g = r.g, t.b = r.b, t.hex = r.hex) : (e.is(t, "string") && (t = e.getRGB(t)), e.is(t, "object") && "r" in t && "g" in t && "b" in t ? (r = e.rgb2hsl(t), t.h = r.h, t.s = r.s, t.l = r.l, r = e.rgb2hsb(t), t.v = r.b) : (t = {
          hex: "none"
        }, t.r = t.g = t.b = t.h = t.s = t.v = t.l = -1)), t.toString = jt, t;
      }, e.hsb2rgb = function (t, e, r, i) {
        this.is(t, "object") && "h" in t && "s" in t && "b" in t && (r = t.b, e = t.s, i = t.o, t = t.h), t *= 360;
        var n, a, s, o, l;
        return t = t % 360 / 60, l = r * e, o = l * (1 - H(t % 2 - 1)), n = a = s = r - l, t = ~~t, n += [l, o, 0, 0, o, l][t], a += [o, l, l, o, 0, 0][t], s += [0, 0, o, l, l, o][t], qt(n, a, s, i);
      }, e.hsl2rgb = function (t, e, r, i) {
        this.is(t, "object") && "h" in t && "s" in t && "l" in t && (r = t.l, e = t.s, t = t.h), (t > 1 || e > 1 || r > 1) && (t /= 360, e /= 100, r /= 100), t *= 360;
        var n, a, s, o, l;
        return t = t % 360 / 60, l = 2 * e * (r < .5 ? r : 1 - r), o = l * (1 - H(t % 2 - 1)), n = a = s = r - l / 2, t = ~~t, n += [l, o, 0, 0, o, l][t], a += [o, l, l, o, 0, 0][t], s += [0, 0, o, l, l, o][t], qt(n, a, s, i);
      }, e.rgb2hsb = function (t, e, r) {
        r = It(t, e, r), t = r[0], e = r[1], r = r[2];
        var i, n, a, s;
        return a = W(t, e, r), s = a - G(t, e, r), i = 0 == s ? null : a == t ? (e - r) / s : a == e ? (r - t) / s + 2 : (t - e) / s + 4, i = (i + 360) % 6 * 60 / 360, n = 0 == s ? 0 : s / a, {
          h: i,
          s: n,
          b: a,
          toString: Ft
        };
      }, e.rgb2hsl = function (t, e, r) {
        r = It(t, e, r), t = r[0], e = r[1], r = r[2];
        var i, n, a, s, o, l;
        return s = W(t, e, r), o = G(t, e, r), l = s - o, i = 0 == l ? null : s == t ? (e - r) / l : s == e ? (r - t) / l + 2 : (t - e) / l + 4, i = (i + 360) % 6 * 60 / 360, a = (s + o) / 2, n = 0 == l ? 0 : a < .5 ? l / (2 * a) : l / (2 - 2 * a), {
          h: i,
          s: n,
          l: a,
          toString: Rt
        };
      }, e._path2string = function () {
        return this.join(",").replace(xt, "$1");
      };

      var Dt = e._preload = function (t, e) {
        var r = T.doc.createElement("img");
        r.style.cssText = "position:absolute;left:-9999em;top:-9999em", r.onload = function () {
          e.call(this), this.onload = null, T.doc.body.removeChild(this);
        }, r.onerror = function () {
          T.doc.body.removeChild(this);
        }, T.doc.body.appendChild(r), r.src = t;
      };

      e.getRGB = n(function (t) {
        if (!t || (t = I(t)).indexOf("-") + 1) return {
          r: -1,
          g: -1,
          b: -1,
          hex: "none",
          error: 1,
          toString: a
        };
        if ("none" == t) return {
          r: -1,
          g: -1,
          b: -1,
          hex: "none",
          toString: a
        };
        !(vt[A](t.toLowerCase().substring(0, 2)) || "#" == t.charAt()) && (t = _Pt(t));
        var r,
            i,
            n,
            s,
            o,
            l,
            h,
            u = t.match(nt);
        return u ? (u[2] && (s = ut(u[2].substring(5), 16), n = ut(u[2].substring(3, 5), 16), i = ut(u[2].substring(1, 3), 16)), u[3] && (s = ut((l = u[3].charAt(3)) + l, 16), n = ut((l = u[3].charAt(2)) + l, 16), i = ut((l = u[3].charAt(1)) + l, 16)), u[4] && (h = u[4][q](gt), i = ht(h[0]), "%" == h[0].slice(-1) && (i *= 2.55), n = ht(h[1]), "%" == h[1].slice(-1) && (n *= 2.55), s = ht(h[2]), "%" == h[2].slice(-1) && (s *= 2.55), "rgba" == u[1].toLowerCase().slice(0, 4) && (o = ht(h[3])), h[3] && "%" == h[3].slice(-1) && (o /= 100)), u[5] ? (h = u[5][q](gt), i = ht(h[0]), "%" == h[0].slice(-1) && (i *= 2.55), n = ht(h[1]), "%" == h[1].slice(-1) && (n *= 2.55), s = ht(h[2]), "%" == h[2].slice(-1) && (s *= 2.55), ("deg" == h[0].slice(-3) || "°" == h[0].slice(-1)) && (i /= 360), "hsba" == u[1].toLowerCase().slice(0, 4) && (o = ht(h[3])), h[3] && "%" == h[3].slice(-1) && (o /= 100), e.hsb2rgb(i, n, s, o)) : u[6] ? (h = u[6][q](gt), i = ht(h[0]), "%" == h[0].slice(-1) && (i *= 2.55), n = ht(h[1]), "%" == h[1].slice(-1) && (n *= 2.55), s = ht(h[2]), "%" == h[2].slice(-1) && (s *= 2.55), ("deg" == h[0].slice(-3) || "°" == h[0].slice(-1)) && (i /= 360), "hsla" == u[1].toLowerCase().slice(0, 4) && (o = ht(h[3])), h[3] && "%" == h[3].slice(-1) && (o /= 100), e.hsl2rgb(i, n, s, o)) : (u = {
          r: i,
          g: n,
          b: s,
          toString: a
        }, u.hex = "#" + (16777216 | s | n << 8 | i << 16).toString(16).slice(1), e.is(o, "finite") && (u.opacity = o), u)) : {
          r: -1,
          g: -1,
          b: -1,
          hex: "none",
          error: 1,
          toString: a
        };
      }, e), e.hsb = n(function (t, r, i) {
        return e.hsb2rgb(t, r, i).hex;
      }), e.hsl = n(function (t, r, i) {
        return e.hsl2rgb(t, r, i).hex;
      }), e.rgb = n(function (t, e, r) {
        function i(t) {
          return t + .5 | 0;
        }

        return "#" + (16777216 | i(r) | i(e) << 8 | i(t) << 16).toString(16).slice(1);
      }), e.getColor = function (t) {
        var e = this.getColor.start = this.getColor.start || {
          h: 0,
          s: 1,
          b: t || .75
        },
            r = this.hsb2rgb(e.h, e.s, e.b);
        return e.h += .075, e.h > 1 && (e.h = 0, e.s -= .2, e.s <= 0 && (this.getColor.start = {
          h: 0,
          s: 1,
          b: e.b
        })), r.hex;
      }, e.getColor.reset = function () {
        delete this.start;
      }, e.parsePathString = function (t) {
        if (!t) return null;
        var r = Vt(t);
        if (r.arr) return Yt(r.arr);
        var i = {
          a: 7,
          c: 6,
          h: 1,
          l: 2,
          m: 2,
          r: 4,
          q: 4,
          s: 4,
          t: 2,
          v: 1,
          z: 0
        },
            n = [];
        return e.is(t, Q) && e.is(t[0], Q) && (n = Yt(t)), n.length || I(t).replace(yt, function (t, e, r) {
          var a = [],
              s = e.toLowerCase();
          if (r.replace(bt, function (t, e) {
            e && a.push(+e);
          }), "m" == s && a.length > 2 && (n.push([e][P](a.splice(0, 2))), s = "l", e = "m" == e ? "l" : "L"), "r" == s) n.push([e][P](a));else for (; a.length >= i[s] && (n.push([e][P](a.splice(0, i[s]))), i[s]);) {
            ;
          }
        }), n.toString = e._path2string, r.arr = Yt(n), n;
      }, e.parseTransformString = n(function (t) {
        if (!t) return null;
        var r = {
          r: 3,
          s: 4,
          t: 2,
          m: 6
        },
            i = [];
        return e.is(t, Q) && e.is(t[0], Q) && (i = Yt(t)), i.length || I(t).replace(mt, function (t, e, r) {
          var n = [],
              a = O.call(e);
          r.replace(bt, function (t, e) {
            e && n.push(+e);
          }), i.push([e][P](n));
        }), i.toString = e._path2string, i;
      });

      var Vt = function Vt(t) {
        var e = Vt.ps = Vt.ps || {};
        return e[t] ? e[t].sleep = 100 : e[t] = {
          sleep: 100
        }, setTimeout(function () {
          for (var r in e) {
            e[A](r) && r != t && (e[r].sleep--, !e[r].sleep && delete e[r]);
          }
        }), e[t];
      };

      e.findDotsAtSegment = function (t, e, r, i, n, a, s, o, l) {
        var h = 1 - l,
            u = X(h, 3),
            c = X(h, 2),
            f = l * l,
            p = f * l,
            d = u * t + 3 * c * l * r + 3 * h * l * l * n + p * s,
            g = u * e + 3 * c * l * i + 3 * h * l * l * a + p * o,
            v = t + 2 * l * (r - t) + f * (n - 2 * r + t),
            x = e + 2 * l * (i - e) + f * (a - 2 * i + e),
            y = r + 2 * l * (n - r) + f * (s - 2 * n + r),
            m = i + 2 * l * (a - i) + f * (o - 2 * a + i),
            b = h * t + l * r,
            _ = h * e + l * i,
            w = h * n + l * s,
            k = h * a + l * o,
            B = 90 - 180 * Y.atan2(v - y, x - m) / U;

        return (v > y || x < m) && (B += 180), {
          x: d,
          y: g,
          m: {
            x: v,
            y: x
          },
          n: {
            x: y,
            y: m
          },
          start: {
            x: b,
            y: _
          },
          end: {
            x: w,
            y: k
          },
          alpha: B
        };
      }, e.bezierBBox = function (t, r, i, n, a, s, o, l) {
        e.is(t, "array") || (t = [t, r, i, n, a, s, o, l]);
        var h = Zt.apply(null, t);
        return {
          x: h.min.x,
          y: h.min.y,
          x2: h.max.x,
          y2: h.max.y,
          width: h.max.x - h.min.x,
          height: h.max.y - h.min.y
        };
      }, e.isPointInsideBBox = function (t, e, r) {
        return e >= t.x && e <= t.x2 && r >= t.y && r <= t.y2;
      }, e.isBBoxIntersect = function (t, r) {
        var i = e.isPointInsideBBox;
        return i(r, t.x, t.y) || i(r, t.x2, t.y) || i(r, t.x, t.y2) || i(r, t.x2, t.y2) || i(t, r.x, r.y) || i(t, r.x2, r.y) || i(t, r.x, r.y2) || i(t, r.x2, r.y2) || (t.x < r.x2 && t.x > r.x || r.x < t.x2 && r.x > t.x) && (t.y < r.y2 && t.y > r.y || r.y < t.y2 && r.y > t.y);
      }, e.pathIntersection = function (t, e) {
        return d(t, e);
      }, e.pathIntersectionNumber = function (t, e) {
        return d(t, e, 1);
      }, e.isPointInsidePath = function (t, r, i) {
        var n = e.pathBBox(t);
        return e.isPointInsideBBox(n, r, i) && d(t, [["M", r, i], ["H", n.x2 + 10]], 1) % 2 == 1;
      }, e._removedFactory = function (e) {
        return function () {
          t("raphael.log", null, "Raphaël: you are calling to method “" + e + "” of removed object", e);
        };
      };

      var Ot = e.pathBBox = function (t) {
        var e = Vt(t);
        if (e.bbox) return r(e.bbox);
        if (!t) return {
          x: 0,
          y: 0,
          width: 0,
          height: 0,
          x2: 0,
          y2: 0
        };
        t = Qt(t);

        for (var i = 0, n = 0, a = [], s = [], o, l = 0, h = t.length; l < h; l++) {
          if (o = t[l], "M" == o[0]) i = o[1], n = o[2], a.push(i), s.push(n);else {
            var u = Zt(i, n, o[1], o[2], o[3], o[4], o[5], o[6]);
            a = a[P](u.min.x, u.max.x), s = s[P](u.min.y, u.max.y), i = o[5], n = o[6];
          }
        }

        var c = G[z](0, a),
            f = G[z](0, s),
            p = W[z](0, a),
            d = W[z](0, s),
            g = p - c,
            v = d - f,
            x = {
          x: c,
          y: f,
          x2: p,
          y2: d,
          width: g,
          height: v,
          cx: c + g / 2,
          cy: f + v / 2
        };
        return e.bbox = r(x), x;
      },
          Yt = function Yt(t) {
        var i = r(t);
        return i.toString = e._path2string, i;
      },
          Wt = e._pathToRelative = function (t) {
        var r = Vt(t);
        if (r.rel) return Yt(r.rel);
        e.is(t, Q) && e.is(t && t[0], Q) || (t = e.parsePathString(t));
        var i = [],
            n = 0,
            a = 0,
            s = 0,
            o = 0,
            l = 0;
        "M" == t[0][0] && (n = t[0][1], a = t[0][2], s = n, o = a, l++, i.push(["M", n, a]));

        for (var h = l, u = t.length; h < u; h++) {
          var c = i[h] = [],
              f = t[h];
          if (f[0] != O.call(f[0])) switch (c[0] = O.call(f[0]), c[0]) {
            case "a":
              c[1] = f[1], c[2] = f[2], c[3] = f[3], c[4] = f[4], c[5] = f[5], c[6] = +(f[6] - n).toFixed(3), c[7] = +(f[7] - a).toFixed(3);
              break;

            case "v":
              c[1] = +(f[1] - a).toFixed(3);
              break;

            case "m":
              s = f[1], o = f[2];

            default:
              for (var p = 1, d = f.length; p < d; p++) {
                c[p] = +(f[p] - (p % 2 ? n : a)).toFixed(3);
              }

          } else {
            c = i[h] = [], "m" == f[0] && (s = f[1] + n, o = f[2] + a);

            for (var g = 0, v = f.length; g < v; g++) {
              i[h][g] = f[g];
            }
          }
          var x = i[h].length;

          switch (i[h][0]) {
            case "z":
              n = s, a = o;
              break;

            case "h":
              n += +i[h][x - 1];
              break;

            case "v":
              a += +i[h][x - 1];
              break;

            default:
              n += +i[h][x - 2], a += +i[h][x - 1];
          }
        }

        return i.toString = e._path2string, r.rel = Yt(i), i;
      },
          Gt = e._pathToAbsolute = function (t) {
        var r = Vt(t);
        if (r.abs) return Yt(r.abs);
        if (e.is(t, Q) && e.is(t && t[0], Q) || (t = e.parsePathString(t)), !t || !t.length) return [["M", 0, 0]];
        var i = [],
            n = 0,
            a = 0,
            o = 0,
            l = 0,
            h = 0;
        "M" == t[0][0] && (n = +t[0][1], a = +t[0][2], o = n, l = a, h++, i[0] = ["M", n, a]);

        for (var u = 3 == t.length && "M" == t[0][0] && "R" == t[1][0].toUpperCase() && "Z" == t[2][0].toUpperCase(), c, f, p = h, d = t.length; p < d; p++) {
          if (i.push(c = []), f = t[p], f[0] != ct.call(f[0])) switch (c[0] = ct.call(f[0]), c[0]) {
            case "A":
              c[1] = f[1], c[2] = f[2], c[3] = f[3], c[4] = f[4], c[5] = f[5], c[6] = +(f[6] + n), c[7] = +(f[7] + a);
              break;

            case "V":
              c[1] = +f[1] + a;
              break;

            case "H":
              c[1] = +f[1] + n;
              break;

            case "R":
              for (var g = [n, a][P](f.slice(1)), v = 2, x = g.length; v < x; v++) {
                g[v] = +g[v] + n, g[++v] = +g[v] + a;
              }

              i.pop(), i = i[P](s(g, u));
              break;

            case "M":
              o = +f[1] + n, l = +f[2] + a;

            default:
              for (v = 1, x = f.length; v < x; v++) {
                c[v] = +f[v] + (v % 2 ? n : a);
              }

          } else if ("R" == f[0]) g = [n, a][P](f.slice(1)), i.pop(), i = i[P](s(g, u)), c = ["R"][P](f.slice(-2));else for (var y = 0, m = f.length; y < m; y++) {
            c[y] = f[y];
          }

          switch (c[0]) {
            case "Z":
              n = o, a = l;
              break;

            case "H":
              n = c[1];
              break;

            case "V":
              a = c[1];
              break;

            case "M":
              o = c[c.length - 2], l = c[c.length - 1];

            default:
              n = c[c.length - 2], a = c[c.length - 1];
          }
        }

        return i.toString = e._path2string, r.abs = Yt(i), i;
      },
          Ht = function Ht(t, e, r, i) {
        return [t, e, r, i, r, i];
      },
          Xt = function Xt(t, e, r, i, n, a) {
        var s = 1 / 3,
            o = 2 / 3;
        return [s * t + o * r, s * e + o * i, s * n + o * r, s * a + o * i, n, a];
      },
          Ut = function Ut(t, e, r, i, a, s, o, l, h, u) {
        var c = 120 * U / 180,
            f = U / 180 * (+a || 0),
            p = [],
            d,
            g = n(function (t, e, r) {
          var i = t * Y.cos(r) - e * Y.sin(r),
              n = t * Y.sin(r) + e * Y.cos(r);
          return {
            x: i,
            y: n
          };
        });
        if (u) S = u[0], A = u[1], B = u[2], C = u[3];else {
          d = g(t, e, -f), t = d.x, e = d.y, d = g(l, h, -f), l = d.x, h = d.y;
          var v = Y.cos(U / 180 * a),
              x = Y.sin(U / 180 * a),
              y = (t - l) / 2,
              m = (e - h) / 2,
              b = y * y / (r * r) + m * m / (i * i);
          b > 1 && (b = Y.sqrt(b), r = b * r, i = b * i);

          var _ = r * r,
              w = i * i,
              k = (s == o ? -1 : 1) * Y.sqrt(H((_ * w - _ * m * m - w * y * y) / (_ * m * m + w * y * y))),
              B = k * r * m / i + (t + l) / 2,
              C = k * -i * y / r + (e + h) / 2,
              S = Y.asin(((e - C) / i).toFixed(9)),
              A = Y.asin(((h - C) / i).toFixed(9));

          S = t < B ? U - S : S, A = l < B ? U - A : A, S < 0 && (S = 2 * U + S), A < 0 && (A = 2 * U + A), o && S > A && (S -= 2 * U), !o && A > S && (A -= 2 * U);
        }
        var T = A - S;

        if (H(T) > c) {
          var E = A,
              M = l,
              N = h;
          A = S + c * (o && A > S ? 1 : -1), l = B + r * Y.cos(A), h = C + i * Y.sin(A), p = Ut(l, h, r, i, a, 0, o, M, N, [A, E, B, C]);
        }

        T = A - S;
        var L = Y.cos(S),
            z = Y.sin(S),
            F = Y.cos(A),
            R = Y.sin(A),
            j = Y.tan(T / 4),
            I = 4 / 3 * r * j,
            D = 4 / 3 * i * j,
            V = [t, e],
            O = [t + I * z, e - D * L],
            W = [l + I * R, h - D * F],
            G = [l, h];
        if (O[0] = 2 * V[0] - O[0], O[1] = 2 * V[1] - O[1], u) return [O, W, G][P](p);
        p = [O, W, G][P](p).join()[q](",");

        for (var X = [], $ = 0, Z = p.length; $ < Z; $++) {
          X[$] = $ % 2 ? g(p[$ - 1], p[$], f).y : g(p[$], p[$ + 1], f).x;
        }

        return X;
      },
          $t = function $t(t, e, r, i, n, a, s, o, l) {
        var h = 1 - l;
        return {
          x: X(h, 3) * t + 3 * X(h, 2) * l * r + 3 * h * l * l * n + X(l, 3) * s,
          y: X(h, 3) * e + 3 * X(h, 2) * l * i + 3 * h * l * l * a + X(l, 3) * o
        };
      },
          Zt = n(function (t, e, r, i, n, a, s, o) {
        var l = n - 2 * r + t - (s - 2 * n + r),
            h = 2 * (r - t) - 2 * (n - r),
            u = t - r,
            c = (-h + Y.sqrt(h * h - 4 * l * u)) / 2 / l,
            f = (-h - Y.sqrt(h * h - 4 * l * u)) / 2 / l,
            p = [e, o],
            d = [t, s],
            g;
        return H(c) > "1e12" && (c = .5), H(f) > "1e12" && (f = .5), c > 0 && c < 1 && (g = $t(t, e, r, i, n, a, s, o, c), d.push(g.x), p.push(g.y)), f > 0 && f < 1 && (g = $t(t, e, r, i, n, a, s, o, f), d.push(g.x), p.push(g.y)), l = a - 2 * i + e - (o - 2 * a + i), h = 2 * (i - e) - 2 * (a - i), u = e - i, c = (-h + Y.sqrt(h * h - 4 * l * u)) / 2 / l, f = (-h - Y.sqrt(h * h - 4 * l * u)) / 2 / l, H(c) > "1e12" && (c = .5), H(f) > "1e12" && (f = .5), c > 0 && c < 1 && (g = $t(t, e, r, i, n, a, s, o, c), d.push(g.x), p.push(g.y)), f > 0 && f < 1 && (g = $t(t, e, r, i, n, a, s, o, f), d.push(g.x), p.push(g.y)), {
          min: {
            x: G[z](0, d),
            y: G[z](0, p)
          },
          max: {
            x: W[z](0, d),
            y: W[z](0, p)
          }
        };
      }),
          Qt = e._path2curve = n(function (t, e) {
        var r = !e && Vt(t);
        if (!e && r.curve) return Yt(r.curve);

        for (var i = Gt(t), n = e && Gt(e), a = {
          x: 0,
          y: 0,
          bx: 0,
          by: 0,
          X: 0,
          Y: 0,
          qx: null,
          qy: null
        }, s = {
          x: 0,
          y: 0,
          bx: 0,
          by: 0,
          X: 0,
          Y: 0,
          qx: null,
          qy: null
        }, o = function o(t, e, r) {
          var i,
              n,
              a = {
            T: 1,
            Q: 1
          };
          if (!t) return ["C", e.x, e.y, e.x, e.y, e.x, e.y];

          switch (!(t[0] in a) && (e.qx = e.qy = null), t[0]) {
            case "M":
              e.X = t[1], e.Y = t[2];
              break;

            case "A":
              t = ["C"][P](Ut[z](0, [e.x, e.y][P](t.slice(1))));
              break;

            case "S":
              "C" == r || "S" == r ? (i = 2 * e.x - e.bx, n = 2 * e.y - e.by) : (i = e.x, n = e.y), t = ["C", i, n][P](t.slice(1));
              break;

            case "T":
              "Q" == r || "T" == r ? (e.qx = 2 * e.x - e.qx, e.qy = 2 * e.y - e.qy) : (e.qx = e.x, e.qy = e.y), t = ["C"][P](Xt(e.x, e.y, e.qx, e.qy, t[1], t[2]));
              break;

            case "Q":
              e.qx = t[1], e.qy = t[2], t = ["C"][P](Xt(e.x, e.y, t[1], t[2], t[3], t[4]));
              break;

            case "L":
              t = ["C"][P](Ht(e.x, e.y, t[1], t[2]));
              break;

            case "H":
              t = ["C"][P](Ht(e.x, e.y, t[1], e.y));
              break;

            case "V":
              t = ["C"][P](Ht(e.x, e.y, e.x, t[1]));
              break;

            case "Z":
              t = ["C"][P](Ht(e.x, e.y, e.X, e.Y));
          }

          return t;
        }, l = function l(t, e) {
          if (t[e].length > 7) {
            t[e].shift();

            for (var r = t[e]; r.length;) {
              u[e] = "A", n && (c[e] = "A"), t.splice(e++, 0, ["C"][P](r.splice(0, 6)));
            }

            t.splice(e, 1), g = W(i.length, n && n.length || 0);
          }
        }, h = function h(t, e, r, a, s) {
          t && e && "M" == t[s][0] && "M" != e[s][0] && (e.splice(s, 0, ["M", a.x, a.y]), r.bx = 0, r.by = 0, r.x = t[s][1], r.y = t[s][2], g = W(i.length, n && n.length || 0));
        }, u = [], c = [], f = "", p = "", d = 0, g = W(i.length, n && n.length || 0); d < g; d++) {
          i[d] && (f = i[d][0]), "C" != f && (u[d] = f, d && (p = u[d - 1])), i[d] = o(i[d], a, p), "A" != u[d] && "C" == f && (u[d] = "C"), l(i, d), n && (n[d] && (f = n[d][0]), "C" != f && (c[d] = f, d && (p = c[d - 1])), n[d] = o(n[d], s, p), "A" != c[d] && "C" == f && (c[d] = "C"), l(n, d)), h(i, n, a, s, d), h(n, i, s, a, d);
          var v = i[d],
              x = n && n[d],
              y = v.length,
              m = n && x.length;
          a.x = v[y - 2], a.y = v[y - 1], a.bx = ht(v[y - 4]) || a.x, a.by = ht(v[y - 3]) || a.y, s.bx = n && (ht(x[m - 4]) || s.x), s.by = n && (ht(x[m - 3]) || s.y), s.x = n && x[m - 2], s.y = n && x[m - 1];
        }

        return n || (r.curve = Yt(i)), n ? [i, n] : i;
      }, null, Yt),
          Jt = e._parseDots = n(function (t) {
        for (var r = [], i = 0, n = t.length; i < n; i++) {
          var a = {},
              s = t[i].match(/^([^:]*):?([\d\.]*)/);
          if (a.color = e.getRGB(s[1]), a.color.error) return null;
          a.opacity = a.color.opacity, a.color = a.color.hex, s[2] && (a.offset = s[2] + "%"), r.push(a);
        }

        for (i = 1, n = r.length - 1; i < n; i++) {
          if (!r[i].offset) {
            for (var o = ht(r[i - 1].offset || 0), l = 0, h = i + 1; h < n; h++) {
              if (r[h].offset) {
                l = r[h].offset;
                break;
              }
            }

            l || (l = 100, h = n), l = ht(l);

            for (var u = (l - o) / (h - i + 1); i < h; i++) {
              o += u, r[i].offset = o + "%";
            }
          }
        }

        return r;
      }),
          Kt = e._tear = function (t, e) {
        t == e.top && (e.top = t.prev), t == e.bottom && (e.bottom = t.next), t.next && (t.next.prev = t.prev), t.prev && (t.prev.next = t.next);
      },
          te = e._tofront = function (t, e) {
        e.top !== t && (Kt(t, e), t.next = null, t.prev = e.top, e.top.next = t, e.top = t);
      },
          ee = e._toback = function (t, e) {
        e.bottom !== t && (Kt(t, e), t.next = e.bottom, t.prev = null, e.bottom.prev = t, e.bottom = t);
      },
          re = e._insertafter = function (t, e, r) {
        Kt(t, r), e == r.top && (r.top = t), e.next && (e.next.prev = t), t.next = e.next, t.prev = e, e.next = t;
      },
          ie = e._insertbefore = function (t, e, r) {
        Kt(t, r), e == r.bottom && (r.bottom = t), e.prev && (e.prev.next = t), t.prev = e.prev, e.prev = t, t.next = e;
      },
          ne = e.toMatrix = function (t, e) {
        var r = Ot(t),
            i = {
          _: {
            transform: R
          },
          getBBox: function getBBox() {
            return r;
          }
        };
        return se(i, e), i.matrix;
      },
          ae = e.transformPath = function (t, e) {
        return Mt(t, ne(t, e));
      },
          se = e._extractTransform = function (t, r) {
        if (null == r) return t._.transform;
        r = I(r).replace(/\.{3}|\u2026/g, t._.transform || R);
        var i = e.parseTransformString(r),
            n = 0,
            a = 0,
            s = 0,
            o = 1,
            l = 1,
            h = t._,
            u = new g();
        if (h.transform = i || [], i) for (var c = 0, f = i.length; c < f; c++) {
          var p = i[c],
              d = p.length,
              v = I(p[0]).toLowerCase(),
              x = p[0] != v,
              y = x ? u.invert() : 0,
              m,
              b,
              _,
              w,
              k;

          "t" == v && 3 == d ? x ? (m = y.x(0, 0), b = y.y(0, 0), _ = y.x(p[1], p[2]), w = y.y(p[1], p[2]), u.translate(_ - m, w - b)) : u.translate(p[1], p[2]) : "r" == v ? 2 == d ? (k = k || t.getBBox(1), u.rotate(p[1], k.x + k.width / 2, k.y + k.height / 2), n += p[1]) : 4 == d && (x ? (_ = y.x(p[2], p[3]), w = y.y(p[2], p[3]), u.rotate(p[1], _, w)) : u.rotate(p[1], p[2], p[3]), n += p[1]) : "s" == v ? 2 == d || 3 == d ? (k = k || t.getBBox(1), u.scale(p[1], p[d - 1], k.x + k.width / 2, k.y + k.height / 2), o *= p[1], l *= p[d - 1]) : 5 == d && (x ? (_ = y.x(p[3], p[4]), w = y.y(p[3], p[4]), u.scale(p[1], p[2], _, w)) : u.scale(p[1], p[2], p[3], p[4]), o *= p[1], l *= p[2]) : "m" == v && 7 == d && u.add(p[1], p[2], p[3], p[4], p[5], p[6]), h.dirtyT = 1, t.matrix = u;
        }
        t.matrix = u, h.sx = o, h.sy = l, h.deg = n, h.dx = a = u.e, h.dy = s = u.f, 1 == o && 1 == l && !n && h.bbox ? (h.bbox.x += +a, h.bbox.y += +s) : h.dirtyT = 1;
      },
          oe = function oe(t) {
        var e = t[0];

        switch (e.toLowerCase()) {
          case "t":
            return [e, 0, 0];

          case "m":
            return [e, 1, 0, 0, 1, 0, 0];

          case "r":
            return 4 == t.length ? [e, 0, t[2], t[3]] : [e, 0];

          case "s":
            return 5 == t.length ? [e, 1, 1, t[3], t[4]] : 3 == t.length ? [e, 1, 1] : [e, 1];
        }
      },
          le = e._equaliseTransform = function (t, r) {
        r = I(r).replace(/\.{3}|\u2026/g, t), t = e.parseTransformString(t) || [], r = e.parseTransformString(r) || [];

        for (var i = W(t.length, r.length), n = [], a = [], s = 0, o, l, h, u; s < i; s++) {
          if (h = t[s] || oe(r[s]), u = r[s] || oe(h), h[0] != u[0] || "r" == h[0].toLowerCase() && (h[2] != u[2] || h[3] != u[3]) || "s" == h[0].toLowerCase() && (h[3] != u[3] || h[4] != u[4])) return;

          for (n[s] = [], a[s] = [], o = 0, l = W(h.length, u.length); o < l; o++) {
            o in h && (n[s][o] = h[o]), o in u && (a[s][o] = u[o]);
          }
        }

        return {
          from: n,
          to: a
        };
      };

      e._getContainer = function (t, r, i, n) {
        var a;
        if (a = null != n || e.is(t, "object") ? t : T.doc.getElementById(t), null != a) return a.tagName ? null == r ? {
          container: a,
          width: a.style.pixelWidth || a.offsetWidth,
          height: a.style.pixelHeight || a.offsetHeight
        } : {
          container: a,
          width: r,
          height: i
        } : {
          container: 1,
          x: t,
          y: r,
          width: i,
          height: n
        };
      }, e.pathToRelative = Wt, e._engine = {}, e.path2curve = Qt, e.matrix = function (t, e, r, i, n, a) {
        return new g(t, e, r, i, n, a);
      }, function (t) {
        function r(t) {
          return t[0] * t[0] + t[1] * t[1];
        }

        function i(t) {
          var e = Y.sqrt(r(t));
          t[0] && (t[0] /= e), t[1] && (t[1] /= e);
        }

        t.add = function (t, e, r, i, n, a) {
          var s = [[], [], []],
              o = [[this.a, this.c, this.e], [this.b, this.d, this.f], [0, 0, 1]],
              l = [[t, r, n], [e, i, a], [0, 0, 1]],
              h,
              u,
              c,
              f;

          for (t && t instanceof g && (l = [[t.a, t.c, t.e], [t.b, t.d, t.f], [0, 0, 1]]), h = 0; h < 3; h++) {
            for (u = 0; u < 3; u++) {
              for (f = 0, c = 0; c < 3; c++) {
                f += o[h][c] * l[c][u];
              }

              s[h][u] = f;
            }
          }

          this.a = s[0][0], this.b = s[1][0], this.c = s[0][1], this.d = s[1][1], this.e = s[0][2], this.f = s[1][2];
        }, t.invert = function () {
          var t = this,
              e = t.a * t.d - t.b * t.c;
          return new g(t.d / e, -t.b / e, -t.c / e, t.a / e, (t.c * t.f - t.d * t.e) / e, (t.b * t.e - t.a * t.f) / e);
        }, t.clone = function () {
          return new g(this.a, this.b, this.c, this.d, this.e, this.f);
        }, t.translate = function (t, e) {
          this.add(1, 0, 0, 1, t, e);
        }, t.scale = function (t, e, r, i) {
          null == e && (e = t), (r || i) && this.add(1, 0, 0, 1, r, i), this.add(t, 0, 0, e, 0, 0), (r || i) && this.add(1, 0, 0, 1, -r, -i);
        }, t.rotate = function (t, r, i) {
          t = e.rad(t), r = r || 0, i = i || 0;
          var n = +Y.cos(t).toFixed(9),
              a = +Y.sin(t).toFixed(9);
          this.add(n, a, -a, n, r, i), this.add(1, 0, 0, 1, -r, -i);
        }, t.x = function (t, e) {
          return t * this.a + e * this.c + this.e;
        }, t.y = function (t, e) {
          return t * this.b + e * this.d + this.f;
        }, t.get = function (t) {
          return +this[I.fromCharCode(97 + t)].toFixed(4);
        }, t.toString = function () {
          return e.svg ? "matrix(" + [this.get(0), this.get(1), this.get(2), this.get(3), this.get(4), this.get(5)].join() + ")" : [this.get(0), this.get(2), this.get(1), this.get(3), 0, 0].join();
        }, t.toFilter = function () {
          return "progid:DXImageTransform.Microsoft.Matrix(M11=" + this.get(0) + ", M12=" + this.get(2) + ", M21=" + this.get(1) + ", M22=" + this.get(3) + ", Dx=" + this.get(4) + ", Dy=" + this.get(5) + ", sizingmethod='auto expand')";
        }, t.offset = function () {
          return [this.e.toFixed(4), this.f.toFixed(4)];
        }, t.split = function () {
          var t = {};
          t.dx = this.e, t.dy = this.f;
          var n = [[this.a, this.c], [this.b, this.d]];
          t.scalex = Y.sqrt(r(n[0])), i(n[0]), t.shear = n[0][0] * n[1][0] + n[0][1] * n[1][1], n[1] = [n[1][0] - n[0][0] * t.shear, n[1][1] - n[0][1] * t.shear], t.scaley = Y.sqrt(r(n[1])), i(n[1]), t.shear /= t.scaley;
          var a = -n[0][1],
              s = n[1][1];
          return s < 0 ? (t.rotate = e.deg(Y.acos(s)), a < 0 && (t.rotate = 360 - t.rotate)) : t.rotate = e.deg(Y.asin(a)), t.isSimple = !(+t.shear.toFixed(9) || t.scalex.toFixed(9) != t.scaley.toFixed(9) && t.rotate), t.isSuperSimple = !+t.shear.toFixed(9) && t.scalex.toFixed(9) == t.scaley.toFixed(9) && !t.rotate, t.noRotation = !+t.shear.toFixed(9) && !t.rotate, t;
        }, t.toTransformString = function (t) {
          var e = t || this[q]();
          return e.isSimple ? (e.scalex = +e.scalex.toFixed(4), e.scaley = +e.scaley.toFixed(4), e.rotate = +e.rotate.toFixed(4), (e.dx || e.dy ? "t" + [e.dx, e.dy] : R) + (1 != e.scalex || 1 != e.scaley ? "s" + [e.scalex, e.scaley, 0, 0] : R) + (e.rotate ? "r" + [e.rotate, 0, 0] : R)) : "m" + [this.get(0), this.get(1), this.get(2), this.get(3), this.get(4), this.get(5)];
        };
      }(g.prototype);

      for (var he = function he() {
        this.returnValue = !1;
      }, ue = function ue() {
        return this.originalEvent.preventDefault();
      }, ce = function ce() {
        this.cancelBubble = !0;
      }, fe = function fe() {
        return this.originalEvent.stopPropagation();
      }, pe = function pe(t) {
        var e = T.doc.documentElement.scrollTop || T.doc.body.scrollTop,
            r = T.doc.documentElement.scrollLeft || T.doc.body.scrollLeft;
        return {
          x: t.clientX + r,
          y: t.clientY + e
        };
      }, de = function () {
        return T.doc.addEventListener ? function (t, e, r, i) {
          var n = function n(t) {
            var e = pe(t);
            return r.call(i, t, e.x, e.y);
          };

          if (t.addEventListener(e, n, !1), F && V[e]) {
            var a = function a(e) {
              for (var n = pe(e), a = e, s = 0, o = e.targetTouches && e.targetTouches.length; s < o; s++) {
                if (e.targetTouches[s].target == t) {
                  e = e.targetTouches[s], e.originalEvent = a, e.preventDefault = ue, e.stopPropagation = fe;
                  break;
                }
              }

              return r.call(i, e, n.x, n.y);
            };

            t.addEventListener(V[e], a, !1);
          }

          return function () {
            return t.removeEventListener(e, n, !1), F && V[e] && t.removeEventListener(V[e], a, !1), !0;
          };
        } : T.doc.attachEvent ? function (t, e, r, i) {
          var n = function n(t) {
            t = t || T.win.event;
            var e = T.doc.documentElement.scrollTop || T.doc.body.scrollTop,
                n = T.doc.documentElement.scrollLeft || T.doc.body.scrollLeft,
                a = t.clientX + n,
                s = t.clientY + e;
            return t.preventDefault = t.preventDefault || he, t.stopPropagation = t.stopPropagation || ce, r.call(i, t, a, s);
          };

          t.attachEvent("on" + e, n);

          var a = function a() {
            return t.detachEvent("on" + e, n), !0;
          };

          return a;
        } : void 0;
      }(), ge = [], ve = function ve(e) {
        for (var r = e.clientX, i = e.clientY, n = T.doc.documentElement.scrollTop || T.doc.body.scrollTop, a = T.doc.documentElement.scrollLeft || T.doc.body.scrollLeft, s, o = ge.length; o--;) {
          if (s = ge[o], F && e.touches) {
            for (var l = e.touches.length, h; l--;) {
              if (h = e.touches[l], h.identifier == s.el._drag.id) {
                r = h.clientX, i = h.clientY, (e.originalEvent ? e.originalEvent : e).preventDefault();
                break;
              }
            }
          } else e.preventDefault();

          var u = s.el.node,
              c,
              f = u.nextSibling,
              p = u.parentNode,
              d = u.style.display;
          T.win.opera && p.removeChild(u), u.style.display = "none", c = s.el.paper.getElementByPoint(r, i), u.style.display = d, T.win.opera && (f ? p.insertBefore(u, f) : p.appendChild(u)), c && t("raphael.drag.over." + s.el.id, s.el, c), r += a, i += n, t("raphael.drag.move." + s.el.id, s.move_scope || s.el, r - s.el._drag.x, i - s.el._drag.y, r, i, e);
        }
      }, xe = function xe(r) {
        e.unmousemove(ve).unmouseup(xe);

        for (var i = ge.length, n; i--;) {
          n = ge[i], n.el._drag = {}, t("raphael.drag.end." + n.el.id, n.end_scope || n.start_scope || n.move_scope || n.el, r);
        }

        ge = [];
      }, ye = e.el = {}, me = D.length; me--;) {
        !function (t) {
          e[t] = ye[t] = function (r, i) {
            return e.is(r, "function") && (this.events = this.events || [], this.events.push({
              name: t,
              f: r,
              unbind: de(this.shape || this.node || T.doc, t, r, i || this)
            })), this;
          }, e["un" + t] = ye["un" + t] = function (r) {
            for (var i = this.events || [], n = i.length; n--;) {
              i[n].name != t || !e.is(r, "undefined") && i[n].f != r || (i[n].unbind(), i.splice(n, 1), !i.length && delete this.events);
            }

            return this;
          };
        }(D[me]);
      }

      ye.data = function (r, i) {
        var n = wt[this.id] = wt[this.id] || {};
        if (0 == arguments.length) return n;

        if (1 == arguments.length) {
          if (e.is(r, "object")) {
            for (var a in r) {
              r[A](a) && this.data(a, r[a]);
            }

            return this;
          }

          return t("raphael.data.get." + this.id, this, n[r], r), n[r];
        }

        return n[r] = i, t("raphael.data.set." + this.id, this, i, r), this;
      }, ye.removeData = function (t) {
        return null == t ? wt[this.id] = {} : wt[this.id] && delete wt[this.id][t], this;
      }, ye.getData = function () {
        return r(wt[this.id] || {});
      }, ye.hover = function (t, e, r, i) {
        return this.mouseover(t, r).mouseout(e, i || r);
      }, ye.unhover = function (t, e) {
        return this.unmouseover(t).unmouseout(e);
      };
      var be = [];
      ye.drag = function (r, i, n, a, s, o) {
        function l(l) {
          (l.originalEvent || l).preventDefault();
          var h = l.clientX,
              u = l.clientY,
              c = T.doc.documentElement.scrollTop || T.doc.body.scrollTop,
              f = T.doc.documentElement.scrollLeft || T.doc.body.scrollLeft;
          if (this._drag.id = l.identifier, F && l.touches) for (var p = l.touches.length, d; p--;) {
            if (d = l.touches[p], this._drag.id = d.identifier, d.identifier == this._drag.id) {
              h = d.clientX, u = d.clientY;
              break;
            }
          }
          this._drag.x = h + f, this._drag.y = u + c, !ge.length && e.mousemove(ve).mouseup(xe), ge.push({
            el: this,
            move_scope: a,
            start_scope: s,
            end_scope: o
          }), i && t.on("raphael.drag.start." + this.id, i), r && t.on("raphael.drag.move." + this.id, r), n && t.on("raphael.drag.end." + this.id, n), t("raphael.drag.start." + this.id, s || a || this, l.clientX + f, l.clientY + c, l);
        }

        return this._drag = {}, be.push({
          el: this,
          start: l
        }), this.mousedown(l), this;
      }, ye.onDragOver = function (e) {
        e ? t.on("raphael.drag.over." + this.id, e) : t.unbind("raphael.drag.over." + this.id);
      }, ye.undrag = function () {
        for (var r = be.length; r--;) {
          be[r].el == this && (this.unmousedown(be[r].start), be.splice(r, 1), t.unbind("raphael.drag.*." + this.id));
        }

        !be.length && e.unmousemove(ve).unmouseup(xe), ge = [];
      }, N.circle = function (t, r, i) {
        var n = e._engine.circle(this, t || 0, r || 0, i || 0);

        return this.__set__ && this.__set__.push(n), n;
      }, N.rect = function (t, r, i, n, a) {
        var s = e._engine.rect(this, t || 0, r || 0, i || 0, n || 0, a || 0);

        return this.__set__ && this.__set__.push(s), s;
      }, N.ellipse = function (t, r, i, n) {
        var a = e._engine.ellipse(this, t || 0, r || 0, i || 0, n || 0);

        return this.__set__ && this.__set__.push(a), a;
      }, N.path = function (t) {
        t && !e.is(t, Z) && !e.is(t[0], Q) && (t += R);

        var r = e._engine.path(e.format[z](e, arguments), this);

        return this.__set__ && this.__set__.push(r), r;
      }, N.image = function (t, r, i, n, a) {
        var s = e._engine.image(this, t || "about:blank", r || 0, i || 0, n || 0, a || 0);

        return this.__set__ && this.__set__.push(s), s;
      }, N.text = function (t, r, i) {
        var n = e._engine.text(this, t || 0, r || 0, I(i));

        return this.__set__ && this.__set__.push(n), n;
      }, N.set = function (t) {
        !e.is(t, "array") && (t = Array.prototype.splice.call(arguments, 0, arguments.length));
        var r = new ze(t);
        return this.__set__ && this.__set__.push(r), r.paper = this, r.type = "set", r;
      }, N.setStart = function (t) {
        this.__set__ = t || this.set();
      }, N.setFinish = function (t) {
        var e = this.__set__;
        return delete this.__set__, e;
      }, N.getSize = function () {
        var t = this.canvas.parentNode;
        return {
          width: t.offsetWidth,
          height: t.offsetHeight
        };
      }, N.setSize = function (t, r) {
        return e._engine.setSize.call(this, t, r);
      }, N.setViewBox = function (t, r, i, n, a) {
        return e._engine.setViewBox.call(this, t, r, i, n, a);
      }, N.top = N.bottom = null, N.raphael = e;

      var _e = function _e(t) {
        var e = t.getBoundingClientRect(),
            r = t.ownerDocument,
            i = r.body,
            n = r.documentElement,
            a = n.clientTop || i.clientTop || 0,
            s = n.clientLeft || i.clientLeft || 0,
            o = e.top + (T.win.pageYOffset || n.scrollTop || i.scrollTop) - a,
            l = e.left + (T.win.pageXOffset || n.scrollLeft || i.scrollLeft) - s;
        return {
          y: o,
          x: l
        };
      };

      N.getElementByPoint = function (t, e) {
        var r = this,
            i = r.canvas,
            n = T.doc.elementFromPoint(t, e);

        if (T.win.opera && "svg" == n.tagName) {
          var a = _e(i),
              s = i.createSVGRect();

          s.x = t - a.x, s.y = e - a.y, s.width = s.height = 1;
          var o = i.getIntersectionList(s, null);
          o.length && (n = o[o.length - 1]);
        }

        if (!n) return null;

        for (; n.parentNode && n != i.parentNode && !n.raphael;) {
          n = n.parentNode;
        }

        return n == r.canvas.parentNode && (n = i), n = n && n.raphael ? r.getById(n.raphaelid) : null;
      }, N.getElementsByBBox = function (t) {
        var r = this.set();
        return this.forEach(function (i) {
          e.isBBoxIntersect(i.getBBox(), t) && r.push(i);
        }), r;
      }, N.getById = function (t) {
        for (var e = this.bottom; e;) {
          if (e.id == t) return e;
          e = e.next;
        }

        return null;
      }, N.forEach = function (t, e) {
        for (var r = this.bottom; r;) {
          if (t.call(e, r) === !1) return this;
          r = r.next;
        }

        return this;
      }, N.getElementsByPoint = function (t, e) {
        var r = this.set();
        return this.forEach(function (i) {
          i.isPointInside(t, e) && r.push(i);
        }), r;
      }, ye.isPointInside = function (t, r) {
        var i = this.realPath = Et[this.type](this);
        return this.attr("transform") && this.attr("transform").length && (i = e.transformPath(i, this.attr("transform"))), e.isPointInsidePath(i, t, r);
      }, ye.getBBox = function (t) {
        if (this.removed) return {};
        var e = this._;
        return t ? (!e.dirty && e.bboxwt || (this.realPath = Et[this.type](this), e.bboxwt = Ot(this.realPath), e.bboxwt.toString = x, e.dirty = 0), e.bboxwt) : ((e.dirty || e.dirtyT || !e.bbox) && (!e.dirty && this.realPath || (e.bboxwt = 0, this.realPath = Et[this.type](this)), e.bbox = Ot(Mt(this.realPath, this.matrix)), e.bbox.toString = x, e.dirty = e.dirtyT = 0), e.bbox);
      }, ye.clone = function () {
        if (this.removed) return null;
        var t = this.paper[this.type]().attr(this.attr());
        return this.__set__ && this.__set__.push(t), t;
      }, ye.glow = function (t) {
        if ("text" == this.type) return null;
        t = t || {};
        var e = {
          width: (t.width || 10) + (+this.attr("stroke-width") || 1),
          fill: t.fill || !1,
          opacity: null == t.opacity ? .5 : t.opacity,
          offsetx: t.offsetx || 0,
          offsety: t.offsety || 0,
          color: t.color || "#000"
        },
            r = e.width / 2,
            i = this.paper,
            n = i.set(),
            a = this.realPath || Et[this.type](this);
        a = this.matrix ? Mt(a, this.matrix) : a;

        for (var s = 1; s < r + 1; s++) {
          n.push(i.path(a).attr({
            stroke: e.color,
            fill: e.fill ? e.color : "none",
            "stroke-linejoin": "round",
            "stroke-linecap": "round",
            "stroke-width": +(e.width / r * s).toFixed(3),
            opacity: +(e.opacity / r).toFixed(3)
          }));
        }

        return n.insertBefore(this).translate(e.offsetx, e.offsety);
      };

      var we = {},
          ke = function ke(t, r, i, n, a, s, o, u, c) {
        return null == c ? l(t, r, i, n, a, s, o, u) : e.findDotsAtSegment(t, r, i, n, a, s, o, u, h(t, r, i, n, a, s, o, u, c));
      },
          Be = function Be(t, r) {
        return function (i, n, a) {
          i = Qt(i);

          for (var s, o, l, h, u = "", c = {}, f, p = 0, d = 0, g = i.length; d < g; d++) {
            if (l = i[d], "M" == l[0]) s = +l[1], o = +l[2];else {
              if (h = ke(s, o, l[1], l[2], l[3], l[4], l[5], l[6]), p + h > n) {
                if (r && !c.start) {
                  if (f = ke(s, o, l[1], l[2], l[3], l[4], l[5], l[6], n - p), u += ["C" + f.start.x, f.start.y, f.m.x, f.m.y, f.x, f.y], a) return u;
                  c.start = u, u = ["M" + f.x, f.y + "C" + f.n.x, f.n.y, f.end.x, f.end.y, l[5], l[6]].join(), p += h, s = +l[5], o = +l[6];
                  continue;
                }

                if (!t && !r) return f = ke(s, o, l[1], l[2], l[3], l[4], l[5], l[6], n - p), {
                  x: f.x,
                  y: f.y,
                  alpha: f.alpha
                };
              }

              p += h, s = +l[5], o = +l[6];
            }
            u += l.shift() + l;
          }

          return c.end = u, f = t ? p : r ? c : e.findDotsAtSegment(s, o, l[0], l[1], l[2], l[3], l[4], l[5], 1), f.alpha && (f = {
            x: f.x,
            y: f.y,
            alpha: f.alpha
          }), f;
        };
      },
          Ce = Be(1),
          Se = Be(),
          Ae = Be(0, 1);

      e.getTotalLength = Ce, e.getPointAtLength = Se, e.getSubpath = function (t, e, r) {
        if (this.getTotalLength(t) - r < 1e-6) return Ae(t, e).end;
        var i = Ae(t, r, 1);
        return e ? Ae(i, e).end : i;
      }, ye.getTotalLength = function () {
        var t = this.getPath();
        if (t) return this.node.getTotalLength ? this.node.getTotalLength() : Ce(t);
      }, ye.getPointAtLength = function (t) {
        var e = this.getPath();
        if (e) return Se(e, t);
      }, ye.getPath = function () {
        var t,
            r = e._getPath[this.type];
        if ("text" != this.type && "set" != this.type) return r && (t = r(this)), t;
      }, ye.getSubpath = function (t, r) {
        var i = this.getPath();
        if (i) return e.getSubpath(i, t, r);
      };
      var Te = e.easing_formulas = {
        linear: function linear(t) {
          return t;
        },
        "<": function _(t) {
          return X(t, 1.7);
        },
        ">": function _(t) {
          return X(t, .48);
        },
        "<>": function _(t) {
          var e = .48 - t / 1.04,
              r = Y.sqrt(.1734 + e * e),
              i = r - e,
              n = X(H(i), 1 / 3) * (i < 0 ? -1 : 1),
              a = -r - e,
              s = X(H(a), 1 / 3) * (a < 0 ? -1 : 1),
              o = n + s + .5;
          return 3 * (1 - o) * o * o + o * o * o;
        },
        backIn: function backIn(t) {
          var e = 1.70158;
          return t * t * ((e + 1) * t - e);
        },
        backOut: function backOut(t) {
          t -= 1;
          var e = 1.70158;
          return t * t * ((e + 1) * t + e) + 1;
        },
        elastic: function elastic(t) {
          return t == !!t ? t : X(2, -10 * t) * Y.sin((t - .075) * (2 * U) / .3) + 1;
        },
        bounce: function bounce(t) {
          var e = 7.5625,
              r = 2.75,
              i;
          return t < 1 / r ? i = e * t * t : t < 2 / r ? (t -= 1.5 / r, i = e * t * t + .75) : t < 2.5 / r ? (t -= 2.25 / r, i = e * t * t + .9375) : (t -= 2.625 / r, i = e * t * t + .984375), i;
        }
      };
      Te.easeIn = Te["ease-in"] = Te["<"], Te.easeOut = Te["ease-out"] = Te[">"], Te.easeInOut = Te["ease-in-out"] = Te["<>"], Te["back-in"] = Te.backIn, Te["back-out"] = Te.backOut;

      var Ee = [],
          Me = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (t) {
        setTimeout(t, 16);
      },
          Ne = function Ne() {
        for (var r = +new Date(), i = 0; i < Ee.length; i++) {
          var n = Ee[i];

          if (!n.el.removed && !n.paused) {
            var a = r - n.start,
                s = n.ms,
                o = n.easing,
                l = n.from,
                h = n.diff,
                u = n.to,
                c = n.t,
                f = n.el,
                p = {},
                d,
                g = {},
                v;
            if (n.initstatus ? (a = (n.initstatus * n.anim.top - n.prev) / (n.percent - n.prev) * s, n.status = n.initstatus, delete n.initstatus, n.stop && Ee.splice(i--, 1)) : n.status = (n.prev + (n.percent - n.prev) * (a / s)) / n.anim.top, !(a < 0)) if (a < s) {
              var x = o(a / s);

              for (var y in l) {
                if (l[A](y)) {
                  switch (pt[y]) {
                    case $:
                      d = +l[y] + x * s * h[y];
                      break;

                    case "colour":
                      d = "rgb(" + [Le(ot(l[y].r + x * s * h[y].r)), Le(ot(l[y].g + x * s * h[y].g)), Le(ot(l[y].b + x * s * h[y].b))].join(",") + ")";
                      break;

                    case "path":
                      d = [];

                      for (var m = 0, _ = l[y].length; m < _; m++) {
                        d[m] = [l[y][m][0]];

                        for (var w = 1, k = l[y][m].length; w < k; w++) {
                          d[m][w] = +l[y][m][w] + x * s * h[y][m][w];
                        }

                        d[m] = d[m].join(j);
                      }

                      d = d.join(j);
                      break;

                    case "transform":
                      if (h[y].real) for (d = [], m = 0, _ = l[y].length; m < _; m++) {
                        for (d[m] = [l[y][m][0]], w = 1, k = l[y][m].length; w < k; w++) {
                          d[m][w] = l[y][m][w] + x * s * h[y][m][w];
                        }
                      } else {
                        var B = function B(t) {
                          return +l[y][t] + x * s * h[y][t];
                        };

                        d = [["m", B(0), B(1), B(2), B(3), B(4), B(5)]];
                      }
                      break;

                    case "csv":
                      if ("clip-rect" == y) for (d = [], m = 4; m--;) {
                        d[m] = +l[y][m] + x * s * h[y][m];
                      }
                      break;

                    default:
                      var C = [][P](l[y]);

                      for (d = [], m = f.paper.customAttributes[y].length; m--;) {
                        d[m] = +C[m] + x * s * h[y][m];
                      }

                  }

                  p[y] = d;
                }
              }

              f.attr(p), function (e, r, i) {
                setTimeout(function () {
                  t("raphael.anim.frame." + e, r, i);
                });
              }(f.id, f, n.anim);
            } else {
              if (function (r, i, n) {
                setTimeout(function () {
                  t("raphael.anim.frame." + i.id, i, n), t("raphael.anim.finish." + i.id, i, n), e.is(r, "function") && r.call(i);
                });
              }(n.callback, f, n.anim), f.attr(u), Ee.splice(i--, 1), n.repeat > 1 && !n.next) {
                for (v in u) {
                  u[A](v) && (g[v] = n.totalOrigin[v]);
                }

                n.el.attr(g), b(n.anim, n.el, n.anim.percents[0], null, n.totalOrigin, n.repeat - 1);
              }

              n.next && !n.stop && b(n.anim, n.el, n.next, null, n.totalOrigin, n.repeat);
            }
          }
        }

        Ee.length && Me(Ne);
      },
          Le = function Le(t) {
        return t > 255 ? 255 : t < 0 ? 0 : t;
      };

      ye.animateWith = function (t, r, i, n, a, s) {
        var o = this;
        if (o.removed) return s && s.call(o), o;
        var l = i instanceof m ? i : e.animation(i, n, a, s),
            h,
            u;
        b(l, o, l.percents[0], null, o.attr());

        for (var c = 0, f = Ee.length; c < f; c++) {
          if (Ee[c].anim == r && Ee[c].el == t) {
            Ee[f - 1].start = Ee[c].start;
            break;
          }
        }

        return o;
      }, ye.onAnimation = function (e) {
        return e ? t.on("raphael.anim.frame." + this.id, e) : t.unbind("raphael.anim.frame." + this.id), this;
      }, m.prototype.delay = function (t) {
        var e = new m(this.anim, this.ms);
        return e.times = this.times, e.del = +t || 0, e;
      }, m.prototype.repeat = function (t) {
        var e = new m(this.anim, this.ms);
        return e.del = this.del, e.times = Y.floor(W(t, 0)) || 1, e;
      }, e.animation = function (t, r, i, n) {
        if (t instanceof m) return t;
        !e.is(i, "function") && i || (n = n || i || null, i = null), t = Object(t), r = +r || 0;
        var a = {},
            s,
            o;

        for (o in t) {
          t[A](o) && ht(o) != o && ht(o) + "%" != o && (s = !0, a[o] = t[o]);
        }

        if (s) return i && (a.easing = i), n && (a.callback = n), new m({
          100: a
        }, r);

        if (n) {
          var l = 0;

          for (var h in t) {
            var u = ut(h);
            t[A](h) && u > l && (l = u);
          }

          l += "%", !t[l].callback && (t[l].callback = n);
        }

        return new m(t, r);
      }, ye.animate = function (t, r, i, n) {
        var a = this;
        if (a.removed) return n && n.call(a), a;
        var s = t instanceof m ? t : e.animation(t, r, i, n);
        return b(s, a, s.percents[0], null, a.attr()), a;
      }, ye.setTime = function (t, e) {
        return t && null != e && this.status(t, G(e, t.ms) / t.ms), this;
      }, ye.status = function (t, e) {
        var r = [],
            i = 0,
            n,
            a;
        if (null != e) return b(t, this, -1, G(e, 1)), this;

        for (n = Ee.length; i < n; i++) {
          if (a = Ee[i], a.el.id == this.id && (!t || a.anim == t)) {
            if (t) return a.status;
            r.push({
              anim: a.anim,
              status: a.status
            });
          }
        }

        return t ? 0 : r;
      }, ye.pause = function (e) {
        for (var r = 0; r < Ee.length; r++) {
          Ee[r].el.id != this.id || e && Ee[r].anim != e || t("raphael.anim.pause." + this.id, this, Ee[r].anim) !== !1 && (Ee[r].paused = !0);
        }

        return this;
      }, ye.resume = function (e) {
        for (var r = 0; r < Ee.length; r++) {
          if (Ee[r].el.id == this.id && (!e || Ee[r].anim == e)) {
            var i = Ee[r];
            t("raphael.anim.resume." + this.id, this, i.anim) !== !1 && (delete i.paused, this.status(i.anim, i.status));
          }
        }

        return this;
      }, ye.stop = function (e) {
        for (var r = 0; r < Ee.length; r++) {
          Ee[r].el.id != this.id || e && Ee[r].anim != e || t("raphael.anim.stop." + this.id, this, Ee[r].anim) !== !1 && Ee.splice(r--, 1);
        }

        return this;
      }, t.on("raphael.remove", _), t.on("raphael.clear", _), ye.toString = function () {
        return "Raphaël’s object";
      };

      var ze = function ze(t) {
        if (this.items = [], this.length = 0, this.type = "set", t) for (var e = 0, r = t.length; e < r; e++) {
          !t[e] || t[e].constructor != ye.constructor && t[e].constructor != ze || (this[this.items.length] = this.items[this.items.length] = t[e], this.length++);
        }
      },
          Pe = ze.prototype;

      Pe.push = function () {
        for (var t, e, r = 0, i = arguments.length; r < i; r++) {
          t = arguments[r], !t || t.constructor != ye.constructor && t.constructor != ze || (e = this.items.length, this[e] = this.items[e] = t, this.length++);
        }

        return this;
      }, Pe.pop = function () {
        return this.length && delete this[this.length--], this.items.pop();
      }, Pe.forEach = function (t, e) {
        for (var r = 0, i = this.items.length; r < i; r++) {
          if (t.call(e, this.items[r], r) === !1) return this;
        }

        return this;
      };

      for (var Fe in ye) {
        ye[A](Fe) && (Pe[Fe] = function (t) {
          return function () {
            var e = arguments;
            return this.forEach(function (r) {
              r[t][z](r, e);
            });
          };
        }(Fe));
      }

      return Pe.attr = function (t, r) {
        if (t && e.is(t, Q) && e.is(t[0], "object")) for (var i = 0, n = t.length; i < n; i++) {
          this.items[i].attr(t[i]);
        } else for (var a = 0, s = this.items.length; a < s; a++) {
          this.items[a].attr(t, r);
        }
        return this;
      }, Pe.clear = function () {
        for (; this.length;) {
          this.pop();
        }
      }, Pe.splice = function (t, e, r) {
        t = t < 0 ? W(this.length + t, 0) : t, e = W(0, G(this.length - t, e));
        var i = [],
            n = [],
            a = [],
            s;

        for (s = 2; s < arguments.length; s++) {
          a.push(arguments[s]);
        }

        for (s = 0; s < e; s++) {
          n.push(this[t + s]);
        }

        for (; s < this.length - t; s++) {
          i.push(this[t + s]);
        }

        var o = a.length;

        for (s = 0; s < o + i.length; s++) {
          this.items[t + s] = this[t + s] = s < o ? a[s] : i[s - o];
        }

        for (s = this.items.length = this.length -= e - o; this[s];) {
          delete this[s++];
        }

        return new ze(n);
      }, Pe.exclude = function (t) {
        for (var e = 0, r = this.length; e < r; e++) {
          if (this[e] == t) return this.splice(e, 1), !0;
        }
      }, Pe.animate = function (t, r, i, n) {
        (e.is(i, "function") || !i) && (n = i || null);
        var a = this.items.length,
            s = a,
            o,
            l = this,
            h;
        if (!a) return this;
        n && (h = function h() {
          ! --a && n.call(l);
        }), i = e.is(i, Z) ? i : h;
        var u = e.animation(t, r, i, h);

        for (o = this.items[--s].animate(u); s--;) {
          this.items[s] && !this.items[s].removed && this.items[s].animateWith(o, u, u), this.items[s] && !this.items[s].removed || a--;
        }

        return this;
      }, Pe.insertAfter = function (t) {
        for (var e = this.items.length; e--;) {
          this.items[e].insertAfter(t);
        }

        return this;
      }, Pe.getBBox = function () {
        for (var t = [], e = [], r = [], i = [], n = this.items.length; n--;) {
          if (!this.items[n].removed) {
            var a = this.items[n].getBBox();
            t.push(a.x), e.push(a.y), r.push(a.x + a.width), i.push(a.y + a.height);
          }
        }

        return t = G[z](0, t), e = G[z](0, e), r = W[z](0, r), i = W[z](0, i), {
          x: t,
          y: e,
          x2: r,
          y2: i,
          width: r - t,
          height: i - e
        };
      }, Pe.clone = function (t) {
        t = this.paper.set();

        for (var e = 0, r = this.items.length; e < r; e++) {
          t.push(this.items[e].clone());
        }

        return t;
      }, Pe.toString = function () {
        return "Raphaël‘s set";
      }, Pe.glow = function (t) {
        var e = this.paper.set();
        return this.forEach(function (r, i) {
          var n = r.glow(t);
          null != n && n.forEach(function (t, r) {
            e.push(t);
          });
        }), e;
      }, Pe.isPointInside = function (t, e) {
        var r = !1;
        return this.forEach(function (i) {
          if (i.isPointInside(t, e)) return r = !0, !1;
        }), r;
      }, e.registerFont = function (t) {
        if (!t.face) return t;
        this.fonts = this.fonts || {};
        var e = {
          w: t.w,
          face: {},
          glyphs: {}
        },
            r = t.face["font-family"];

        for (var i in t.face) {
          t.face[A](i) && (e.face[i] = t.face[i]);
        }

        if (this.fonts[r] ? this.fonts[r].push(e) : this.fonts[r] = [e], !t.svg) {
          e.face["units-per-em"] = ut(t.face["units-per-em"], 10);

          for (var n in t.glyphs) {
            if (t.glyphs[A](n)) {
              var a = t.glyphs[n];
              if (e.glyphs[n] = {
                w: a.w,
                k: {},
                d: a.d && "M" + a.d.replace(/[mlcxtrv]/g, function (t) {
                  return {
                    l: "L",
                    c: "C",
                    x: "z",
                    t: "m",
                    r: "l",
                    v: "c"
                  }[t] || "M";
                }) + "z"
              }, a.k) for (var s in a.k) {
                a[A](s) && (e.glyphs[n].k[s] = a.k[s]);
              }
            }
          }
        }

        return t;
      }, N.getFont = function (t, r, i, n) {
        if (n = n || "normal", i = i || "normal", r = +r || {
          normal: 400,
          bold: 700,
          lighter: 300,
          bolder: 800
        }[r] || 400, e.fonts) {
          var a = e.fonts[t];

          if (!a) {
            var s = new RegExp("(^|\\s)" + t.replace(/[^\w\d\s+!~.:_-]/g, R) + "(\\s|$)", "i");

            for (var o in e.fonts) {
              if (e.fonts[A](o) && s.test(o)) {
                a = e.fonts[o];
                break;
              }
            }
          }

          var l;
          if (a) for (var h = 0, u = a.length; h < u && (l = a[h], l.face["font-weight"] != r || l.face["font-style"] != i && l.face["font-style"] || l.face["font-stretch"] != n); h++) {
            ;
          }
          return l;
        }
      }, N.print = function (t, r, i, n, a, s, o, l) {
        s = s || "middle", o = W(G(o || 0, 1), -1), l = W(G(l || 1, 3), 1);
        var h = I(i)[q](R),
            u = 0,
            c = 0,
            f = R,
            p;

        if (e.is(n, "string") && (n = this.getFont(n)), n) {
          p = (a || 16) / n.face["units-per-em"];

          for (var d = n.face.bbox[q](k), g = +d[0], v = d[3] - d[1], x = 0, y = +d[1] + ("baseline" == s ? v + +n.face.descent : v / 2), m = 0, b = h.length; m < b; m++) {
            if ("\n" == h[m]) u = 0, w = 0, c = 0, x += v * l;else {
              var _ = c && n.glyphs[h[m - 1]] || {},
                  w = n.glyphs[h[m]];

              u += c ? (_.w || n.w) + (_.k && _.k[h[m]] || 0) + n.w * o : 0, c = 1;
            }
            w && w.d && (f += e.transformPath(w.d, ["t", u * p, x * p, "s", p, p, g, y, "t", (t - g) / p, (r - y) / p]));
          }
        }

        return this.path(f).attr({
          fill: "#000",
          stroke: "none"
        });
      }, N.add = function (t) {
        if (e.is(t, "array")) for (var r = this.set(), i = 0, n = t.length, a; i < n; i++) {
          a = t[i] || {}, B[A](a.type) && r.push(this[a.type]().attr(a));
        }
        return r;
      }, e.format = function (t, r) {
        var i = e.is(r, Q) ? [0][P](r) : arguments;
        return t && e.is(t, Z) && i.length - 1 && (t = t.replace(C, function (t, e) {
          return null == i[++e] ? R : i[e];
        })), t || R;
      }, e.fullfill = function () {
        var t = /\{([^\}]+)\}/g,
            e = /(?:(?:^|\.)(.+?)(?=\[|\.|$|\()|\[('|")(.+?)\2\])(\(\))?/g,
            r = function r(t, _r, i) {
          var n = i;
          return _r.replace(e, function (t, e, r, i, a) {
            e = e || i, n && (e in n && (n = n[e]), "function" == typeof n && a && (n = n()));
          }), n = (null == n || n == i ? t : n) + "";
        };

        return function (e, i) {
          return String(e).replace(t, function (t, e) {
            return r(t, e, i);
          });
        };
      }(), e.ninja = function () {
        if (E.was) T.win.Raphael = E.is;else {
          window.Raphael = void 0;

          try {
            delete window.Raphael;
          } catch (t) {}
        }
        return e;
      }, e.st = Pe, t.on("raphael.DOMload", function () {
        w = !0;
      }), function (t, r, _i) {
        function n() {
          /in/.test(t.readyState) ? setTimeout(n, 9) : e.eve("raphael.DOMload");
        }

        null == t.readyState && t.addEventListener && (t.addEventListener(r, _i = function i() {
          t.removeEventListener(r, _i, !1), t.readyState = "complete";
        }, !1), t.readyState = "loading"), n();
      }(document, "DOMContentLoaded"), e;
    }.apply(e, i), !(void 0 !== n && (t.exports = n));
  }, function (t, e, r) {
    var i, n;
    !function (r) {
      var a = "0.5.0",
          s = "hasOwnProperty",
          o = /[\.\/]/,
          l = /\s*,\s*/,
          h = "*",
          u = function u() {},
          c = function c(t, e) {
        return t - e;
      },
          f,
          p,
          d = {
        n: {}
      },
          g = function g() {
        for (var t = 0, e = this.length; t < e; t++) {
          if ("undefined" != typeof this[t]) return this[t];
        }
      },
          v = function v() {
        for (var t = this.length; --t;) {
          if ("undefined" != typeof this[t]) return this[t];
        }
      },
          x = Object.prototype.toString,
          y = String,
          m = Array.isArray || function (t) {
        return t instanceof Array || "[object Array]" == x.call(t);
      };

      eve = function (_eve) {
        function eve(_x, _x2) {
          return _eve.apply(this, arguments);
        }

        eve.toString = function () {
          return _eve.toString();
        };

        return eve;
      }(function (t, e) {
        var r = d,
            i = p,
            n = Array.prototype.slice.call(arguments, 2),
            a = eve.listeners(t),
            s = 0,
            o = !1,
            l,
            h = [],
            u = {},
            x = [],
            y = f,
            m = [];
        x.firstDefined = g, x.lastDefined = v, f = t, p = 0;

        for (var b = 0, _ = a.length; b < _; b++) {
          "zIndex" in a[b] && (h.push(a[b].zIndex), a[b].zIndex < 0 && (u[a[b].zIndex] = a[b]));
        }

        for (h.sort(c); h[s] < 0;) {
          if (l = u[h[s++]], x.push(l.apply(e, n)), p) return p = i, x;
        }

        for (b = 0; b < _; b++) {
          if (l = a[b], "zIndex" in l) {
            if (l.zIndex == h[s]) {
              if (x.push(l.apply(e, n)), p) break;

              do {
                if (s++, l = u[h[s]], l && x.push(l.apply(e, n)), p) break;
              } while (l);
            } else u[l.zIndex] = l;
          } else if (x.push(l.apply(e, n)), p) break;
        }

        return p = i, f = y, x;
      }), eve._events = d, eve.listeners = function (t) {
        var e = m(t) ? t : t.split(o),
            r = d,
            i,
            n,
            a,
            s,
            l,
            u,
            c,
            f,
            p = [r],
            g = [];

        for (s = 0, l = e.length; s < l; s++) {
          for (f = [], u = 0, c = p.length; u < c; u++) {
            for (r = p[u].n, n = [r[e[s]], r[h]], a = 2; a--;) {
              i = n[a], i && (f.push(i), g = g.concat(i.f || []));
            }
          }

          p = f;
        }

        return g;
      }, eve.separator = function (t) {
        t ? (t = y(t).replace(/(?=[\.\^\]\[\-])/g, "\\"), t = "[" + t + "]", o = new RegExp(t)) : o = /[\.\/]/;
      }, eve.on = function (t, e) {
        if ("function" != typeof e) return function () {};

        for (var r = m(t) ? m(t[0]) ? t : [t] : y(t).split(l), i = 0, n = r.length; i < n; i++) {
          !function (t) {
            for (var r = m(t) ? t : y(t).split(o), i = d, n, a = 0, s = r.length; a < s; a++) {
              i = i.n, i = i.hasOwnProperty(r[a]) && i[r[a]] || (i[r[a]] = {
                n: {}
              });
            }

            for (i.f = i.f || [], a = 0, s = i.f.length; a < s; a++) {
              if (i.f[a] == e) {
                n = !0;
                break;
              }
            }

            !n && i.f.push(e);
          }(r[i]);
        }

        return function (t) {
          +t == +t && (e.zIndex = +t);
        };
      }, eve.f = function (t) {
        var e = [].slice.call(arguments, 1);
        return function () {
          eve.apply(null, [t, null].concat(e).concat([].slice.call(arguments, 0)));
        };
      }, eve.stop = function () {
        p = 1;
      }, eve.nt = function (t) {
        var e = m(f) ? f.join(".") : f;
        return t ? new RegExp("(?:\\.|\\/|^)" + t + "(?:\\.|\\/|$)").test(e) : e;
      }, eve.nts = function () {
        return m(f) ? f : f.split(o);
      }, eve.off = eve.unbind = function (t, e) {
        if (!t) return void (eve._events = d = {
          n: {}
        });
        var r = m(t) ? m(t[0]) ? t : [t] : y(t).split(l);
        if (r.length > 1) for (var i = 0, n = r.length; i < n; i++) {
          eve.off(r[i], e);
        } else {
          r = m(t) ? t : y(t).split(o);
          var a,
              u,
              c,
              i,
              n,
              f,
              p,
              g = [d];

          for (i = 0, n = r.length; i < n; i++) {
            for (f = 0; f < g.length; f += c.length - 2) {
              if (c = [f, 1], a = g[f].n, r[i] != h) a[r[i]] && c.push(a[r[i]]);else for (u in a) {
                a[s](u) && c.push(a[u]);
              }
              g.splice.apply(g, c);
            }
          }

          for (i = 0, n = g.length; i < n; i++) {
            for (a = g[i]; a.n;) {
              if (e) {
                if (a.f) {
                  for (f = 0, p = a.f.length; f < p; f++) {
                    if (a.f[f] == e) {
                      a.f.splice(f, 1);
                      break;
                    }
                  }

                  !a.f.length && delete a.f;
                }

                for (u in a.n) {
                  if (a.n[s](u) && a.n[u].f) {
                    var v = a.n[u].f;

                    for (f = 0, p = v.length; f < p; f++) {
                      if (v[f] == e) {
                        v.splice(f, 1);
                        break;
                      }
                    }

                    !v.length && delete a.n[u].f;
                  }
                }
              } else {
                delete a.f;

                for (u in a.n) {
                  a.n[s](u) && a.n[u].f && delete a.n[u].f;
                }
              }

              a = a.n;
            }
          }
        }
      }, eve.once = function (t, e) {
        var r = function r() {
          return eve.off(t, r), e.apply(this, arguments);
        };

        return eve.on(t, r);
      }, eve.version = a, eve.toString = function () {
        return "You are running Eve " + a;
      }, "undefined" != typeof t && t.exports ? t.exports = eve : (i = [], n = function () {
        return eve;
      }.apply(e, i), !(void 0 !== n && (t.exports = n)));
    }(this);
  }, function (t, e, r) {
    var i, n;
    i = [r(1)], n = function (t) {
      if (!t || t.svg) {
        var e = "hasOwnProperty",
            r = String,
            i = parseFloat,
            n = parseInt,
            a = Math,
            s = a.max,
            o = a.abs,
            l = a.pow,
            h = /[, ]+/,
            u = t.eve,
            c = "",
            f = " ",
            p = "http://www.w3.org/1999/xlink",
            d = {
          block: "M5,0 0,2.5 5,5z",
          classic: "M5,0 0,2.5 5,5 3.5,3 3.5,2z",
          diamond: "M2.5,0 5,2.5 2.5,5 0,2.5z",
          open: "M6,1 1,3.5 6,6",
          oval: "M2.5,0A2.5,2.5,0,0,1,2.5,5 2.5,2.5,0,0,1,2.5,0z"
        },
            g = {};

        t.toString = function () {
          return "Your browser supports SVG.\nYou are running Raphaël " + this.version;
        };

        var v = function v(i, n) {
          if (n) {
            "string" == typeof i && (i = v(i));

            for (var a in n) {
              n[e](a) && ("xlink:" == a.substring(0, 6) ? i.setAttributeNS(p, a.substring(6), r(n[a])) : i.setAttribute(a, r(n[a])));
            }
          } else i = t._g.doc.createElementNS("http://www.w3.org/2000/svg", i), i.style && (i.style.webkitTapHighlightColor = "rgba(0,0,0,0)");

          return i;
        },
            x = function x(e, n) {
          var h = "linear",
              u = e.id + n,
              f = .5,
              p = .5,
              d = e.node,
              g = e.paper,
              x = d.style,
              y = t._g.doc.getElementById(u);

          if (!y) {
            if (n = r(n).replace(t._radial_gradient, function (t, e, r) {
              if (h = "radial", e && r) {
                f = i(e), p = i(r);
                var n = 2 * (p > .5) - 1;
                l(f - .5, 2) + l(p - .5, 2) > .25 && (p = a.sqrt(.25 - l(f - .5, 2)) * n + .5) && .5 != p && (p = p.toFixed(5) - 1e-5 * n);
              }

              return c;
            }), n = n.split(/\s*\-\s*/), "linear" == h) {
              var b = n.shift();
              if (b = -i(b), isNaN(b)) return null;
              var _ = [0, 0, a.cos(t.rad(b)), a.sin(t.rad(b))],
                  w = 1 / (s(o(_[2]), o(_[3])) || 1);
              _[2] *= w, _[3] *= w, _[2] < 0 && (_[0] = -_[2], _[2] = 0), _[3] < 0 && (_[1] = -_[3], _[3] = 0);
            }

            var k = t._parseDots(n);

            if (!k) return null;

            if (u = u.replace(/[\(\)\s,\xb0#]/g, "_"), e.gradient && u != e.gradient.id && (g.defs.removeChild(e.gradient), delete e.gradient), !e.gradient) {
              y = v(h + "Gradient", {
                id: u
              }), e.gradient = y, v(y, "radial" == h ? {
                fx: f,
                fy: p
              } : {
                x1: _[0],
                y1: _[1],
                x2: _[2],
                y2: _[3],
                gradientTransform: e.matrix.invert()
              }), g.defs.appendChild(y);

              for (var B = 0, C = k.length; B < C; B++) {
                y.appendChild(v("stop", {
                  offset: k[B].offset ? k[B].offset : B ? "100%" : "0%",
                  "stop-color": k[B].color || "#fff",
                  "stop-opacity": isFinite(k[B].opacity) ? k[B].opacity : 1
                }));
              }
            }
          }

          return v(d, {
            fill: m(u),
            opacity: 1,
            "fill-opacity": 1
          }), x.fill = c, x.opacity = 1, x.fillOpacity = 1, 1;
        },
            y = function y() {
          var t = document.documentMode;
          return t && (9 === t || 10 === t);
        },
            m = function m(t) {
          if (y()) return "url('#" + t + "')";
          var e = document.location,
              r = e.protocol + "//" + e.host + e.pathname + e.search;
          return "url('" + r + "#" + t + "')";
        },
            b = function b(t) {
          var e = t.getBBox(1);
          v(t.pattern, {
            patternTransform: t.matrix.invert() + " translate(" + e.x + "," + e.y + ")"
          });
        },
            _ = function _(i, n, a) {
          if ("path" == i.type) {
            for (var s = r(n).toLowerCase().split("-"), o = i.paper, l = a ? "end" : "start", h = i.node, u = i.attrs, f = u["stroke-width"], p = s.length, x = "classic", y, m, b, _, w, k = 3, B = 3, C = 5; p--;) {
              switch (s[p]) {
                case "block":
                case "classic":
                case "oval":
                case "diamond":
                case "open":
                case "none":
                  x = s[p];
                  break;

                case "wide":
                  B = 5;
                  break;

                case "narrow":
                  B = 2;
                  break;

                case "long":
                  k = 5;
                  break;

                case "short":
                  k = 2;
              }
            }

            if ("open" == x ? (k += 2, B += 2, C += 2, b = 1, _ = a ? 4 : 1, w = {
              fill: "none",
              stroke: u.stroke
            }) : (_ = b = k / 2, w = {
              fill: u.stroke,
              stroke: "none"
            }), i._.arrows ? a ? (i._.arrows.endPath && g[i._.arrows.endPath]--, i._.arrows.endMarker && g[i._.arrows.endMarker]--) : (i._.arrows.startPath && g[i._.arrows.startPath]--, i._.arrows.startMarker && g[i._.arrows.startMarker]--) : i._.arrows = {}, "none" != x) {
              var S = "raphael-marker-" + x,
                  A = "raphael-marker-" + l + x + k + B + "-obj" + i.id;
              t._g.doc.getElementById(S) ? g[S]++ : (o.defs.appendChild(v(v("path"), {
                "stroke-linecap": "round",
                d: d[x],
                id: S
              })), g[S] = 1);

              var T = t._g.doc.getElementById(A),
                  E;

              T ? (g[A]++, E = T.getElementsByTagName("use")[0]) : (T = v(v("marker"), {
                id: A,
                markerHeight: B,
                markerWidth: k,
                orient: "auto",
                refX: _,
                refY: B / 2
              }), E = v(v("use"), {
                "xlink:href": "#" + S,
                transform: (a ? "rotate(180 " + k / 2 + " " + B / 2 + ") " : c) + "scale(" + k / C + "," + B / C + ")",
                "stroke-width": (1 / ((k / C + B / C) / 2)).toFixed(4)
              }), T.appendChild(E), o.defs.appendChild(T), g[A] = 1), v(E, w);
              var M = b * ("diamond" != x && "oval" != x);
              a ? (y = i._.arrows.startdx * f || 0, m = t.getTotalLength(u.path) - M * f) : (y = M * f, m = t.getTotalLength(u.path) - (i._.arrows.enddx * f || 0)), w = {}, w["marker-" + l] = "url(#" + A + ")", (m || y) && (w.d = t.getSubpath(u.path, y, m)), v(h, w), i._.arrows[l + "Path"] = S, i._.arrows[l + "Marker"] = A, i._.arrows[l + "dx"] = M, i._.arrows[l + "Type"] = x, i._.arrows[l + "String"] = n;
            } else a ? (y = i._.arrows.startdx * f || 0, m = t.getTotalLength(u.path) - y) : (y = 0, m = t.getTotalLength(u.path) - (i._.arrows.enddx * f || 0)), i._.arrows[l + "Path"] && v(h, {
              d: t.getSubpath(u.path, y, m)
            }), delete i._.arrows[l + "Path"], delete i._.arrows[l + "Marker"], delete i._.arrows[l + "dx"], delete i._.arrows[l + "Type"], delete i._.arrows[l + "String"];

            for (w in g) {
              if (g[e](w) && !g[w]) {
                var N = t._g.doc.getElementById(w);

                N && N.parentNode.removeChild(N);
              }
            }
          }
        },
            w = {
          "-": [3, 1],
          ".": [1, 1],
          "-.": [3, 1, 1, 1],
          "-..": [3, 1, 1, 1, 1, 1],
          ". ": [1, 3],
          "- ": [4, 3],
          "--": [8, 3],
          "- .": [4, 3, 1, 3],
          "--.": [8, 3, 1, 3],
          "--..": [8, 3, 1, 3, 1, 3]
        },
            k = function k(t, e, i) {
          if (e = w[r(e).toLowerCase()]) {
            for (var n = t.attrs["stroke-width"] || "1", a = {
              round: n,
              square: n,
              butt: 0
            }[t.attrs["stroke-linecap"] || i["stroke-linecap"]] || 0, s = [], o = e.length; o--;) {
              s[o] = e[o] * n + (o % 2 ? 1 : -1) * a;
            }

            v(t.node, {
              "stroke-dasharray": s.join(",")
            });
          } else v(t.node, {
            "stroke-dasharray": "none"
          });
        },
            B = function B(i, a) {
          var l = i.node,
              u = i.attrs,
              f = l.style.visibility;
          l.style.visibility = "hidden";

          for (var d in a) {
            if (a[e](d)) {
              if (!t._availableAttrs[e](d)) continue;
              var g = a[d];

              switch (u[d] = g, d) {
                case "blur":
                  i.blur(g);
                  break;

                case "title":
                  var y = l.getElementsByTagName("title");
                  if (y.length && (y = y[0])) y.firstChild.nodeValue = g;else {
                    y = v("title");

                    var m = t._g.doc.createTextNode(g);

                    y.appendChild(m), l.appendChild(y);
                  }
                  break;

                case "href":
                case "target":
                  var w = l.parentNode;

                  if ("a" != w.tagName.toLowerCase()) {
                    var B = v("a");
                    w.insertBefore(B, l), B.appendChild(l), w = B;
                  }

                  "target" == d ? w.setAttributeNS(p, "show", "blank" == g ? "new" : g) : w.setAttributeNS(p, d, g);
                  break;

                case "cursor":
                  l.style.cursor = g;
                  break;

                case "transform":
                  i.transform(g);
                  break;

                case "arrow-start":
                  _(i, g);

                  break;

                case "arrow-end":
                  _(i, g, 1);

                  break;

                case "clip-rect":
                  var C = r(g).split(h);

                  if (4 == C.length) {
                    i.clip && i.clip.parentNode.parentNode.removeChild(i.clip.parentNode);
                    var A = v("clipPath"),
                        T = v("rect");
                    A.id = t.createUUID(), v(T, {
                      x: C[0],
                      y: C[1],
                      width: C[2],
                      height: C[3]
                    }), A.appendChild(T), i.paper.defs.appendChild(A), v(l, {
                      "clip-path": "url(#" + A.id + ")"
                    }), i.clip = T;
                  }

                  if (!g) {
                    var E = l.getAttribute("clip-path");

                    if (E) {
                      var M = t._g.doc.getElementById(E.replace(/(^url\(#|\)$)/g, c));

                      M && M.parentNode.removeChild(M), v(l, {
                        "clip-path": c
                      }), delete i.clip;
                    }
                  }

                  break;

                case "path":
                  "path" == i.type && (v(l, {
                    d: g ? u.path = t._pathToAbsolute(g) : "M0,0"
                  }), i._.dirty = 1, i._.arrows && ("startString" in i._.arrows && _(i, i._.arrows.startString), "endString" in i._.arrows && _(i, i._.arrows.endString, 1)));
                  break;

                case "width":
                  if (l.setAttribute(d, g), i._.dirty = 1, !u.fx) break;
                  d = "x", g = u.x;

                case "x":
                  u.fx && (g = -u.x - (u.width || 0));

                case "rx":
                  if ("rx" == d && "rect" == i.type) break;

                case "cx":
                  l.setAttribute(d, g), i.pattern && b(i), i._.dirty = 1;
                  break;

                case "height":
                  if (l.setAttribute(d, g), i._.dirty = 1, !u.fy) break;
                  d = "y", g = u.y;

                case "y":
                  u.fy && (g = -u.y - (u.height || 0));

                case "ry":
                  if ("ry" == d && "rect" == i.type) break;

                case "cy":
                  l.setAttribute(d, g), i.pattern && b(i), i._.dirty = 1;
                  break;

                case "r":
                  "rect" == i.type ? v(l, {
                    rx: g,
                    ry: g
                  }) : l.setAttribute(d, g), i._.dirty = 1;
                  break;

                case "src":
                  "image" == i.type && l.setAttributeNS(p, "href", g);
                  break;

                case "stroke-width":
                  1 == i._.sx && 1 == i._.sy || (g /= s(o(i._.sx), o(i._.sy)) || 1), l.setAttribute(d, g), u["stroke-dasharray"] && k(i, u["stroke-dasharray"], a), i._.arrows && ("startString" in i._.arrows && _(i, i._.arrows.startString), "endString" in i._.arrows && _(i, i._.arrows.endString, 1));
                  break;

                case "stroke-dasharray":
                  k(i, g, a);
                  break;

                case "fill":
                  var N = r(g).match(t._ISURL);

                  if (N) {
                    A = v("pattern");
                    var L = v("image");
                    A.id = t.createUUID(), v(A, {
                      x: 0,
                      y: 0,
                      patternUnits: "userSpaceOnUse",
                      height: 1,
                      width: 1
                    }), v(L, {
                      x: 0,
                      y: 0,
                      "xlink:href": N[1]
                    }), A.appendChild(L), function (e) {
                      t._preload(N[1], function () {
                        var t = this.offsetWidth,
                            r = this.offsetHeight;
                        v(e, {
                          width: t,
                          height: r
                        }), v(L, {
                          width: t,
                          height: r
                        });
                      });
                    }(A), i.paper.defs.appendChild(A), v(l, {
                      fill: "url(#" + A.id + ")"
                    }), i.pattern = A, i.pattern && b(i);
                    break;
                  }

                  var z = t.getRGB(g);

                  if (z.error) {
                    if (("circle" == i.type || "ellipse" == i.type || "r" != r(g).charAt()) && x(i, g)) {
                      if ("opacity" in u || "fill-opacity" in u) {
                        var P = t._g.doc.getElementById(l.getAttribute("fill").replace(/^url\(#|\)$/g, c));

                        if (P) {
                          var F = P.getElementsByTagName("stop");
                          v(F[F.length - 1], {
                            "stop-opacity": ("opacity" in u ? u.opacity : 1) * ("fill-opacity" in u ? u["fill-opacity"] : 1)
                          });
                        }
                      }

                      u.gradient = g, u.fill = "none";
                      break;
                    }
                  } else delete a.gradient, delete u.gradient, !t.is(u.opacity, "undefined") && t.is(a.opacity, "undefined") && v(l, {
                    opacity: u.opacity
                  }), !t.is(u["fill-opacity"], "undefined") && t.is(a["fill-opacity"], "undefined") && v(l, {
                    "fill-opacity": u["fill-opacity"]
                  });

                  z[e]("opacity") && v(l, {
                    "fill-opacity": z.opacity > 1 ? z.opacity / 100 : z.opacity
                  });

                case "stroke":
                  z = t.getRGB(g), l.setAttribute(d, z.hex), "stroke" == d && z[e]("opacity") && v(l, {
                    "stroke-opacity": z.opacity > 1 ? z.opacity / 100 : z.opacity
                  }), "stroke" == d && i._.arrows && ("startString" in i._.arrows && _(i, i._.arrows.startString), "endString" in i._.arrows && _(i, i._.arrows.endString, 1));
                  break;

                case "gradient":
                  ("circle" == i.type || "ellipse" == i.type || "r" != r(g).charAt()) && x(i, g);
                  break;

                case "opacity":
                  u.gradient && !u[e]("stroke-opacity") && v(l, {
                    "stroke-opacity": g > 1 ? g / 100 : g
                  });

                case "fill-opacity":
                  if (u.gradient) {
                    P = t._g.doc.getElementById(l.getAttribute("fill").replace(/^url\(#|\)$/g, c)), P && (F = P.getElementsByTagName("stop"), v(F[F.length - 1], {
                      "stop-opacity": g
                    }));
                    break;
                  }

                default:
                  "font-size" == d && (g = n(g, 10) + "px");
                  var R = d.replace(/(\-.)/g, function (t) {
                    return t.substring(1).toUpperCase();
                  });
                  l.style[R] = g, i._.dirty = 1, l.setAttribute(d, g);
              }
            }
          }

          S(i, a), l.style.visibility = f;
        },
            C = 1.2,
            S = function S(i, a) {
          if ("text" == i.type && (a[e]("text") || a[e]("font") || a[e]("font-size") || a[e]("x") || a[e]("y"))) {
            var s = i.attrs,
                o = i.node,
                l = o.firstChild ? n(t._g.doc.defaultView.getComputedStyle(o.firstChild, c).getPropertyValue("font-size"), 10) : 10;

            if (a[e]("text")) {
              for (s.text = a.text; o.firstChild;) {
                o.removeChild(o.firstChild);
              }

              for (var h = r(a.text).split("\n"), u = [], f, p = 0, d = h.length; p < d; p++) {
                f = v("tspan"), p && v(f, {
                  dy: l * C,
                  x: s.x
                }), f.appendChild(t._g.doc.createTextNode(h[p])), o.appendChild(f), u[p] = f;
              }
            } else for (u = o.getElementsByTagName("tspan"), p = 0, d = u.length; p < d; p++) {
              p ? v(u[p], {
                dy: l * C,
                x: s.x
              }) : v(u[0], {
                dy: 0
              });
            }

            v(o, {
              x: s.x,
              y: s.y
            }), i._.dirty = 1;

            var g = i._getBBox(),
                x = s.y - (g.y + g.height / 2);

            x && t.is(x, "finite") && v(u[0], {
              dy: x
            });
          }
        },
            A = function A(t) {
          return t.parentNode && "a" === t.parentNode.tagName.toLowerCase() ? t.parentNode : t;
        },
            T = function T(e, r) {
          function i() {
            return ("0000" + (Math.random() * Math.pow(36, 5) << 0).toString(36)).slice(-5);
          }

          var n = 0,
              a = 0;
          this[0] = this.node = e, e.raphael = !0, this.id = i(), e.raphaelid = this.id, this.matrix = t.matrix(), this.realPath = null, this.paper = r, this.attrs = this.attrs || {}, this._ = {
            transform: [],
            sx: 1,
            sy: 1,
            deg: 0,
            dx: 0,
            dy: 0,
            dirty: 1
          }, !r.bottom && (r.bottom = this), this.prev = r.top, r.top && (r.top.next = this), r.top = this, this.next = null;
        },
            E = t.el;

        T.prototype = E, E.constructor = T, t._engine.path = function (t, e) {
          var r = v("path");
          e.canvas && e.canvas.appendChild(r);
          var i = new T(r, e);
          return i.type = "path", B(i, {
            fill: "none",
            stroke: "#000",
            path: t
          }), i;
        }, E.rotate = function (t, e, n) {
          if (this.removed) return this;

          if (t = r(t).split(h), t.length - 1 && (e = i(t[1]), n = i(t[2])), t = i(t[0]), null == n && (e = n), null == e || null == n) {
            var a = this.getBBox(1);
            e = a.x + a.width / 2, n = a.y + a.height / 2;
          }

          return this.transform(this._.transform.concat([["r", t, e, n]])), this;
        }, E.scale = function (t, e, n, a) {
          if (this.removed) return this;
          if (t = r(t).split(h), t.length - 1 && (e = i(t[1]), n = i(t[2]), a = i(t[3])), t = i(t[0]), null == e && (e = t), null == a && (n = a), null == n || null == a) var s = this.getBBox(1);
          return n = null == n ? s.x + s.width / 2 : n, a = null == a ? s.y + s.height / 2 : a, this.transform(this._.transform.concat([["s", t, e, n, a]])), this;
        }, E.translate = function (t, e) {
          return this.removed ? this : (t = r(t).split(h), t.length - 1 && (e = i(t[1])), t = i(t[0]) || 0, e = +e || 0, this.transform(this._.transform.concat([["t", t, e]])), this);
        }, E.transform = function (r) {
          var i = this._;
          if (null == r) return i.transform;

          if (t._extractTransform(this, r), this.clip && v(this.clip, {
            transform: this.matrix.invert()
          }), this.pattern && b(this), this.node && v(this.node, {
            transform: this.matrix
          }), 1 != i.sx || 1 != i.sy) {
            var n = this.attrs[e]("stroke-width") ? this.attrs["stroke-width"] : 1;
            this.attr({
              "stroke-width": n
            });
          }

          return this;
        }, E.hide = function () {
          return this.removed || (this.node.style.display = "none"), this;
        }, E.show = function () {
          return this.removed || (this.node.style.display = ""), this;
        }, E.remove = function () {
          var e = A(this.node);

          if (!this.removed && e.parentNode) {
            var r = this.paper;
            r.__set__ && r.__set__.exclude(this), u.unbind("raphael.*.*." + this.id), this.gradient && r.defs.removeChild(this.gradient), t._tear(this, r), e.parentNode.removeChild(e), this.removeData();

            for (var i in this) {
              this[i] = "function" == typeof this[i] ? t._removedFactory(i) : null;
            }

            this.removed = !0;
          }
        }, E._getBBox = function () {
          if ("none" == this.node.style.display) {
            this.show();
            var t = !0;
          }

          var e = !1,
              r;
          this.paper.canvas.parentElement ? r = this.paper.canvas.parentElement.style : this.paper.canvas.parentNode && (r = this.paper.canvas.parentNode.style), r && "none" == r.display && (e = !0, r.display = "");
          var i = {};

          try {
            i = this.node.getBBox();
          } catch (n) {
            i = {
              x: this.node.clientLeft,
              y: this.node.clientTop,
              width: this.node.clientWidth,
              height: this.node.clientHeight
            };
          } finally {
            i = i || {}, e && (r.display = "none");
          }

          return t && this.hide(), i;
        }, E.attr = function (r, i) {
          if (this.removed) return this;

          if (null == r) {
            var n = {};

            for (var a in this.attrs) {
              this.attrs[e](a) && (n[a] = this.attrs[a]);
            }

            return n.gradient && "none" == n.fill && (n.fill = n.gradient) && delete n.gradient, n.transform = this._.transform, n;
          }

          if (null == i && t.is(r, "string")) {
            if ("fill" == r && "none" == this.attrs.fill && this.attrs.gradient) return this.attrs.gradient;
            if ("transform" == r) return this._.transform;

            for (var s = r.split(h), o = {}, l = 0, c = s.length; l < c; l++) {
              r = s[l], r in this.attrs ? o[r] = this.attrs[r] : t.is(this.paper.customAttributes[r], "function") ? o[r] = this.paper.customAttributes[r].def : o[r] = t._availableAttrs[r];
            }

            return c - 1 ? o : o[s[0]];
          }

          if (null == i && t.is(r, "array")) {
            for (o = {}, l = 0, c = r.length; l < c; l++) {
              o[r[l]] = this.attr(r[l]);
            }

            return o;
          }

          if (null != i) {
            var f = {};
            f[r] = i;
          } else null != r && t.is(r, "object") && (f = r);

          for (var p in f) {
            u("raphael.attr." + p + "." + this.id, this, f[p]);
          }

          for (p in this.paper.customAttributes) {
            if (this.paper.customAttributes[e](p) && f[e](p) && t.is(this.paper.customAttributes[p], "function")) {
              var d = this.paper.customAttributes[p].apply(this, [].concat(f[p]));
              this.attrs[p] = f[p];

              for (var g in d) {
                d[e](g) && (f[g] = d[g]);
              }
            }
          }

          return B(this, f), this;
        }, E.toFront = function () {
          if (this.removed) return this;
          var e = A(this.node);
          e.parentNode.appendChild(e);
          var r = this.paper;
          return r.top != this && t._tofront(this, r), this;
        }, E.toBack = function () {
          if (this.removed) return this;
          var e = A(this.node),
              r = e.parentNode;
          r.insertBefore(e, r.firstChild), t._toback(this, this.paper);
          var i = this.paper;
          return this;
        }, E.insertAfter = function (e) {
          if (this.removed || !e) return this;
          var r = A(this.node),
              i = A(e.node || e[e.length - 1].node);
          return i.nextSibling ? i.parentNode.insertBefore(r, i.nextSibling) : i.parentNode.appendChild(r), t._insertafter(this, e, this.paper), this;
        }, E.insertBefore = function (e) {
          if (this.removed || !e) return this;
          var r = A(this.node),
              i = A(e.node || e[0].node);
          return i.parentNode.insertBefore(r, i), t._insertbefore(this, e, this.paper), this;
        }, E.blur = function (e) {
          var r = this;

          if (0 !== +e) {
            var i = v("filter"),
                n = v("feGaussianBlur");
            r.attrs.blur = e, i.id = t.createUUID(), v(n, {
              stdDeviation: +e || 1.5
            }), i.appendChild(n), r.paper.defs.appendChild(i), r._blur = i, v(r.node, {
              filter: "url(#" + i.id + ")"
            });
          } else r._blur && (r._blur.parentNode.removeChild(r._blur), delete r._blur, delete r.attrs.blur), r.node.removeAttribute("filter");

          return r;
        }, t._engine.circle = function (t, e, r, i) {
          var n = v("circle");
          t.canvas && t.canvas.appendChild(n);
          var a = new T(n, t);
          return a.attrs = {
            cx: e,
            cy: r,
            r: i,
            fill: "none",
            stroke: "#000"
          }, a.type = "circle", v(n, a.attrs), a;
        }, t._engine.rect = function (t, e, r, i, n, a) {
          var s = v("rect");
          t.canvas && t.canvas.appendChild(s);
          var o = new T(s, t);
          return o.attrs = {
            x: e,
            y: r,
            width: i,
            height: n,
            rx: a || 0,
            ry: a || 0,
            fill: "none",
            stroke: "#000"
          }, o.type = "rect", v(s, o.attrs), o;
        }, t._engine.ellipse = function (t, e, r, i, n) {
          var a = v("ellipse");
          t.canvas && t.canvas.appendChild(a);
          var s = new T(a, t);
          return s.attrs = {
            cx: e,
            cy: r,
            rx: i,
            ry: n,
            fill: "none",
            stroke: "#000"
          }, s.type = "ellipse", v(a, s.attrs), s;
        }, t._engine.image = function (t, e, r, i, n, a) {
          var s = v("image");
          v(s, {
            x: r,
            y: i,
            width: n,
            height: a,
            preserveAspectRatio: "none"
          }), s.setAttributeNS(p, "href", e), t.canvas && t.canvas.appendChild(s);
          var o = new T(s, t);
          return o.attrs = {
            x: r,
            y: i,
            width: n,
            height: a,
            src: e
          }, o.type = "image", o;
        }, t._engine.text = function (e, r, i, n) {
          var a = v("text");
          e.canvas && e.canvas.appendChild(a);
          var s = new T(a, e);
          return s.attrs = {
            x: r,
            y: i,
            "text-anchor": "middle",
            text: n,
            "font-family": t._availableAttrs["font-family"],
            "font-size": t._availableAttrs["font-size"],
            stroke: "none",
            fill: "#000"
          }, s.type = "text", B(s, s.attrs), s;
        }, t._engine.setSize = function (t, e) {
          return this.width = t || this.width, this.height = e || this.height, this.canvas.setAttribute("width", this.width), this.canvas.setAttribute("height", this.height), this._viewBox && this.setViewBox.apply(this, this._viewBox), this;
        }, t._engine.create = function () {
          var e = t._getContainer.apply(0, arguments),
              r = e && e.container,
              i = e.x,
              n = e.y,
              a = e.width,
              s = e.height;

          if (!r) throw new Error("SVG container not found.");
          var o = v("svg"),
              l = "overflow:hidden;",
              h;
          return i = i || 0, n = n || 0, a = a || 512, s = s || 342, v(o, {
            height: s,
            version: 1.1,
            width: a,
            xmlns: "http://www.w3.org/2000/svg",
            "xmlns:xlink": "http://www.w3.org/1999/xlink"
          }), 1 == r ? (o.style.cssText = l + "position:absolute;left:" + i + "px;top:" + n + "px", t._g.doc.body.appendChild(o), h = 1) : (o.style.cssText = l + "position:relative", r.firstChild ? r.insertBefore(o, r.firstChild) : r.appendChild(o)), r = new t._Paper(), r.width = a, r.height = s, r.canvas = o, r.clear(), r._left = r._top = 0, h && (r.renderfix = function () {}), r.renderfix(), r;
        }, t._engine.setViewBox = function (t, e, r, i, n) {
          u("raphael.setViewBox", this, this._viewBox, [t, e, r, i, n]);
          var a = this.getSize(),
              o = s(r / a.width, i / a.height),
              l = this.top,
              h = n ? "xMidYMid meet" : "xMinYMin",
              c,
              p;

          for (null == t ? (this._vbSize && (o = 1), delete this._vbSize, c = "0 0 " + this.width + f + this.height) : (this._vbSize = o, c = t + f + e + f + r + f + i), v(this.canvas, {
            viewBox: c,
            preserveAspectRatio: h
          }); o && l;) {
            p = "stroke-width" in l.attrs ? l.attrs["stroke-width"] : 1, l.attr({
              "stroke-width": p
            }), l._.dirty = 1, l._.dirtyT = 1, l = l.prev;
          }

          return this._viewBox = [t, e, r, i, !!n], this;
        }, t.prototype.renderfix = function () {
          var t = this.canvas,
              e = t.style,
              r;

          try {
            r = t.getScreenCTM() || t.createSVGMatrix();
          } catch (i) {
            r = t.createSVGMatrix();
          }

          var n = -r.e % 1,
              a = -r.f % 1;
          (n || a) && (n && (this._left = (this._left + n) % 1, e.left = this._left + "px"), a && (this._top = (this._top + a) % 1, e.top = this._top + "px"));
        }, t.prototype.clear = function () {
          t.eve("raphael.clear", this);

          for (var e = this.canvas; e.firstChild;) {
            e.removeChild(e.firstChild);
          }

          this.bottom = this.top = null, (this.desc = v("desc")).appendChild(t._g.doc.createTextNode("Created with Raphaël " + t.version)), e.appendChild(this.desc), e.appendChild(this.defs = v("defs"));
        }, t.prototype.remove = function () {
          u("raphael.remove", this), this.canvas.parentNode && this.canvas.parentNode.removeChild(this.canvas);

          for (var e in this) {
            this[e] = "function" == typeof this[e] ? t._removedFactory(e) : null;
          }
        };
        var M = t.st;

        for (var N in E) {
          E[e](N) && !M[e](N) && (M[N] = function (t) {
            return function () {
              var e = arguments;
              return this.forEach(function (r) {
                r[t].apply(r, e);
              });
            };
          }(N));
        }
      }
    }.apply(e, i), !(void 0 !== n && (t.exports = n));
  }, function (t, e, r) {
    var i, n;
    i = [r(1)], n = function (t) {
      if (!t || t.vml) {
        var e = "hasOwnProperty",
            r = String,
            i = parseFloat,
            n = Math,
            a = n.round,
            s = n.max,
            o = n.min,
            l = n.abs,
            h = "fill",
            u = /[, ]+/,
            c = t.eve,
            f = " progid:DXImageTransform.Microsoft",
            p = " ",
            d = "",
            g = {
          M: "m",
          L: "l",
          C: "c",
          Z: "x",
          m: "t",
          l: "r",
          c: "v",
          z: "x"
        },
            v = /([clmz]),?([^clmz]*)/gi,
            x = / progid:\S+Blur\([^\)]+\)/g,
            y = /-?[^,\s-]+/g,
            m = "position:absolute;left:0;top:0;width:1px;height:1px;behavior:url(#default#VML)",
            b = 21600,
            _ = {
          path: 1,
          rect: 1,
          image: 1
        },
            w = {
          circle: 1,
          ellipse: 1
        },
            k = function k(e) {
          var i = /[ahqstv]/gi,
              n = t._pathToAbsolute;

          if (r(e).match(i) && (n = t._path2curve), i = /[clmz]/g, n == t._pathToAbsolute && !r(e).match(i)) {
            var s = r(e).replace(v, function (t, e, r) {
              var i = [],
                  n = "m" == e.toLowerCase(),
                  s = g[e];
              return r.replace(y, function (t) {
                n && 2 == i.length && (s += i + g["m" == e ? "l" : "L"], i = []), i.push(a(t * b));
              }), s + i;
            });
            return s;
          }

          var o = n(e),
              l,
              h;
          s = [];

          for (var u = 0, c = o.length; u < c; u++) {
            l = o[u], h = o[u][0].toLowerCase(), "z" == h && (h = "x");

            for (var f = 1, x = l.length; f < x; f++) {
              h += a(l[f] * b) + (f != x - 1 ? "," : d);
            }

            s.push(h);
          }

          return s.join(p);
        },
            B = function B(e, r, i) {
          var n = t.matrix();
          return n.rotate(-e, .5, .5), {
            dx: n.x(r, i),
            dy: n.y(r, i)
          };
        },
            C = function C(t, e, r, i, n, a) {
          var s = t._,
              o = t.matrix,
              u = s.fillpos,
              c = t.node,
              f = c.style,
              d = 1,
              g = "",
              v,
              x = b / e,
              y = b / r;

          if (f.visibility = "hidden", e && r) {
            if (c.coordsize = l(x) + p + l(y), f.rotation = a * (e * r < 0 ? -1 : 1), a) {
              var m = B(a, i, n);
              i = m.dx, n = m.dy;
            }

            if (e < 0 && (g += "x"), r < 0 && (g += " y") && (d = -1), f.flip = g, c.coordorigin = i * -x + p + n * -y, u || s.fillsize) {
              var _ = c.getElementsByTagName(h);

              _ = _ && _[0], c.removeChild(_), u && (m = B(a, o.x(u[0], u[1]), o.y(u[0], u[1])), _.position = m.dx * d + p + m.dy * d), s.fillsize && (_.size = s.fillsize[0] * l(e) + p + s.fillsize[1] * l(r)), c.appendChild(_);
            }

            f.visibility = "visible";
          }
        };

        t.toString = function () {
          return "Your browser doesn’t support SVG. Falling down to VML.\nYou are running Raphaël " + this.version;
        };

        var S = function S(t, e, i) {
          for (var n = r(e).toLowerCase().split("-"), a = i ? "end" : "start", s = n.length, o = "classic", l = "medium", h = "medium"; s--;) {
            switch (n[s]) {
              case "block":
              case "classic":
              case "oval":
              case "diamond":
              case "open":
              case "none":
                o = n[s];
                break;

              case "wide":
              case "narrow":
                h = n[s];
                break;

              case "long":
              case "short":
                l = n[s];
            }
          }

          var u = t.node.getElementsByTagName("stroke")[0];
          u[a + "arrow"] = o, u[a + "arrowlength"] = l, u[a + "arrowwidth"] = h;
        },
            A = function A(n, l) {
          n.attrs = n.attrs || {};
          var c = n.node,
              f = n.attrs,
              g = c.style,
              v,
              x = _[n.type] && (l.x != f.x || l.y != f.y || l.width != f.width || l.height != f.height || l.cx != f.cx || l.cy != f.cy || l.rx != f.rx || l.ry != f.ry || l.r != f.r),
              y = w[n.type] && (f.cx != l.cx || f.cy != l.cy || f.r != l.r || f.rx != l.rx || f.ry != l.ry),
              m = n;

          for (var B in l) {
            l[e](B) && (f[B] = l[B]);
          }

          if (x && (f.path = t._getPath[n.type](n), n._.dirty = 1), l.href && (c.href = l.href), l.title && (c.title = l.title), l.target && (c.target = l.target), l.cursor && (g.cursor = l.cursor), "blur" in l && n.blur(l.blur), (l.path && "path" == n.type || x) && (c.path = k(~r(f.path).toLowerCase().indexOf("r") ? t._pathToAbsolute(f.path) : f.path), n._.dirty = 1, "image" == n.type && (n._.fillpos = [f.x, f.y], n._.fillsize = [f.width, f.height], C(n, 1, 1, 0, 0, 0))), "transform" in l && n.transform(l.transform), y) {
            var A = +f.cx,
                E = +f.cy,
                M = +f.rx || +f.r || 0,
                L = +f.ry || +f.r || 0;
            c.path = t.format("ar{0},{1},{2},{3},{4},{1},{4},{1}x", a((A - M) * b), a((E - L) * b), a((A + M) * b), a((E + L) * b), a(A * b)), n._.dirty = 1;
          }

          if ("clip-rect" in l) {
            var z = r(l["clip-rect"]).split(u);

            if (4 == z.length) {
              z[2] = +z[2] + +z[0], z[3] = +z[3] + +z[1];

              var P = c.clipRect || t._g.doc.createElement("div"),
                  F = P.style;

              F.clip = t.format("rect({1}px {2}px {3}px {0}px)", z), c.clipRect || (F.position = "absolute", F.top = 0, F.left = 0, F.width = n.paper.width + "px", F.height = n.paper.height + "px", c.parentNode.insertBefore(P, c), P.appendChild(c), c.clipRect = P);
            }

            l["clip-rect"] || c.clipRect && (c.clipRect.style.clip = "auto");
          }

          if (n.textpath) {
            var R = n.textpath.style;
            l.font && (R.font = l.font), l["font-family"] && (R.fontFamily = '"' + l["font-family"].split(",")[0].replace(/^['"]+|['"]+$/g, d) + '"'), l["font-size"] && (R.fontSize = l["font-size"]), l["font-weight"] && (R.fontWeight = l["font-weight"]), l["font-style"] && (R.fontStyle = l["font-style"]);
          }

          if ("arrow-start" in l && S(m, l["arrow-start"]), "arrow-end" in l && S(m, l["arrow-end"], 1), null != l.opacity || null != l.fill || null != l.src || null != l.stroke || null != l["stroke-width"] || null != l["stroke-opacity"] || null != l["fill-opacity"] || null != l["stroke-dasharray"] || null != l["stroke-miterlimit"] || null != l["stroke-linejoin"] || null != l["stroke-linecap"]) {
            var j = c.getElementsByTagName(h),
                I = !1;

            if (j = j && j[0], !j && (I = j = N(h)), "image" == n.type && l.src && (j.src = l.src), l.fill && (j.on = !0), null != j.on && "none" != l.fill && null !== l.fill || (j.on = !1), j.on && l.fill) {
              var q = r(l.fill).match(t._ISURL);

              if (q) {
                j.parentNode == c && c.removeChild(j), j.rotate = !0, j.src = q[1], j.type = "tile";
                var D = n.getBBox(1);
                j.position = D.x + p + D.y, n._.fillpos = [D.x, D.y], t._preload(q[1], function () {
                  n._.fillsize = [this.offsetWidth, this.offsetHeight];
                });
              } else j.color = t.getRGB(l.fill).hex, j.src = d, j.type = "solid", t.getRGB(l.fill).error && (m.type in {
                circle: 1,
                ellipse: 1
              } || "r" != r(l.fill).charAt()) && T(m, l.fill, j) && (f.fill = "none", f.gradient = l.fill, j.rotate = !1);
            }

            if ("fill-opacity" in l || "opacity" in l) {
              var V = ((+f["fill-opacity"] + 1 || 2) - 1) * ((+f.opacity + 1 || 2) - 1) * ((+t.getRGB(l.fill).o + 1 || 2) - 1);
              V = o(s(V, 0), 1), j.opacity = V, j.src && (j.color = "none");
            }

            c.appendChild(j);
            var O = c.getElementsByTagName("stroke") && c.getElementsByTagName("stroke")[0],
                Y = !1;
            !O && (Y = O = N("stroke")), (l.stroke && "none" != l.stroke || l["stroke-width"] || null != l["stroke-opacity"] || l["stroke-dasharray"] || l["stroke-miterlimit"] || l["stroke-linejoin"] || l["stroke-linecap"]) && (O.on = !0), ("none" == l.stroke || null === l.stroke || null == O.on || 0 == l.stroke || 0 == l["stroke-width"]) && (O.on = !1);
            var W = t.getRGB(l.stroke);
            O.on && l.stroke && (O.color = W.hex), V = ((+f["stroke-opacity"] + 1 || 2) - 1) * ((+f.opacity + 1 || 2) - 1) * ((+W.o + 1 || 2) - 1);
            var G = .75 * (i(l["stroke-width"]) || 1);

            if (V = o(s(V, 0), 1), null == l["stroke-width"] && (G = f["stroke-width"]), l["stroke-width"] && (O.weight = G), G && G < 1 && (V *= G) && (O.weight = 1), O.opacity = V, l["stroke-linejoin"] && (O.joinstyle = l["stroke-linejoin"] || "miter"), O.miterlimit = l["stroke-miterlimit"] || 8, l["stroke-linecap"] && (O.endcap = "butt" == l["stroke-linecap"] ? "flat" : "square" == l["stroke-linecap"] ? "square" : "round"), "stroke-dasharray" in l) {
              var H = {
                "-": "shortdash",
                ".": "shortdot",
                "-.": "shortdashdot",
                "-..": "shortdashdotdot",
                ". ": "dot",
                "- ": "dash",
                "--": "longdash",
                "- .": "dashdot",
                "--.": "longdashdot",
                "--..": "longdashdotdot"
              };
              O.dashstyle = H[e](l["stroke-dasharray"]) ? H[l["stroke-dasharray"]] : d;
            }

            Y && c.appendChild(O);
          }

          if ("text" == m.type) {
            m.paper.canvas.style.display = d;
            var X = m.paper.span,
                U = 100,
                $ = f.font && f.font.match(/\d+(?:\.\d*)?(?=px)/);
            g = X.style, f.font && (g.font = f.font), f["font-family"] && (g.fontFamily = f["font-family"]), f["font-weight"] && (g.fontWeight = f["font-weight"]), f["font-style"] && (g.fontStyle = f["font-style"]), $ = i(f["font-size"] || $ && $[0]) || 10, g.fontSize = $ * U + "px", m.textpath.string && (X.innerHTML = r(m.textpath.string).replace(/</g, "&#60;").replace(/&/g, "&#38;").replace(/\n/g, "<br>"));
            var Z = X.getBoundingClientRect();
            m.W = f.w = (Z.right - Z.left) / U, m.H = f.h = (Z.bottom - Z.top) / U, m.X = f.x, m.Y = f.y + m.H / 2, ("x" in l || "y" in l) && (m.path.v = t.format("m{0},{1}l{2},{1}", a(f.x * b), a(f.y * b), a(f.x * b) + 1));

            for (var Q = ["x", "y", "text", "font", "font-family", "font-weight", "font-style", "font-size"], J = 0, K = Q.length; J < K; J++) {
              if (Q[J] in l) {
                m._.dirty = 1;
                break;
              }
            }

            switch (f["text-anchor"]) {
              case "start":
                m.textpath.style["v-text-align"] = "left", m.bbx = m.W / 2;
                break;

              case "end":
                m.textpath.style["v-text-align"] = "right", m.bbx = -m.W / 2;
                break;

              default:
                m.textpath.style["v-text-align"] = "center", m.bbx = 0;
            }

            m.textpath.style["v-text-kern"] = !0;
          }
        },
            T = function T(e, a, s) {
          e.attrs = e.attrs || {};
          var o = e.attrs,
              l = Math.pow,
              h,
              u,
              c = "linear",
              f = ".5 .5";

          if (e.attrs.gradient = a, a = r(a).replace(t._radial_gradient, function (t, e, r) {
            return c = "radial", e && r && (e = i(e), r = i(r), l(e - .5, 2) + l(r - .5, 2) > .25 && (r = n.sqrt(.25 - l(e - .5, 2)) * (2 * (r > .5) - 1) + .5), f = e + p + r), d;
          }), a = a.split(/\s*\-\s*/), "linear" == c) {
            var g = a.shift();
            if (g = -i(g), isNaN(g)) return null;
          }

          var v = t._parseDots(a);

          if (!v) return null;

          if (e = e.shape || e.node, v.length) {
            e.removeChild(s), s.on = !0, s.method = "none", s.color = v[0].color, s.color2 = v[v.length - 1].color;

            for (var x = [], y = 0, m = v.length; y < m; y++) {
              v[y].offset && x.push(v[y].offset + p + v[y].color);
            }

            s.colors = x.length ? x.join() : "0% " + s.color, "radial" == c ? (s.type = "gradientTitle", s.focus = "100%", s.focussize = "0 0", s.focusposition = f, s.angle = 0) : (s.type = "gradient", s.angle = (270 - g) % 360), e.appendChild(s);
          }

          return 1;
        },
            E = function E(e, r) {
          this[0] = this.node = e, e.raphael = !0, this.id = t._oid++, e.raphaelid = this.id, this.X = 0, this.Y = 0, this.attrs = {}, this.paper = r, this.matrix = t.matrix(), this._ = {
            transform: [],
            sx: 1,
            sy: 1,
            dx: 0,
            dy: 0,
            deg: 0,
            dirty: 1,
            dirtyT: 1
          }, !r.bottom && (r.bottom = this), this.prev = r.top, r.top && (r.top.next = this), r.top = this, this.next = null;
        },
            M = t.el;

        E.prototype = M, M.constructor = E, M.transform = function (e) {
          if (null == e) return this._.transform;
          var i = this.paper._viewBoxShift,
              n = i ? "s" + [i.scale, i.scale] + "-1-1t" + [i.dx, i.dy] : d,
              a;
          i && (a = e = r(e).replace(/\.{3}|\u2026/g, this._.transform || d)), t._extractTransform(this, n + e);
          var s = this.matrix.clone(),
              o = this.skew,
              l = this.node,
              h,
              u = ~r(this.attrs.fill).indexOf("-"),
              c = !r(this.attrs.fill).indexOf("url(");
          if (s.translate(1, 1), c || u || "image" == this.type) {
            if (o.matrix = "1 0 0 1", o.offset = "0 0", h = s.split(), u && h.noRotation || !h.isSimple) {
              l.style.filter = s.toFilter();
              var f = this.getBBox(),
                  g = this.getBBox(1),
                  v = f.x - g.x,
                  x = f.y - g.y;
              l.coordorigin = v * -b + p + x * -b, C(this, 1, 1, v, x, 0);
            } else l.style.filter = d, C(this, h.scalex, h.scaley, h.dx, h.dy, h.rotate);
          } else l.style.filter = d, o.matrix = r(s), o.offset = s.offset();
          return null !== a && (this._.transform = a, t._extractTransform(this, a)), this;
        }, M.rotate = function (t, e, n) {
          if (this.removed) return this;

          if (null != t) {
            if (t = r(t).split(u), t.length - 1 && (e = i(t[1]), n = i(t[2])), t = i(t[0]), null == n && (e = n), null == e || null == n) {
              var a = this.getBBox(1);
              e = a.x + a.width / 2, n = a.y + a.height / 2;
            }

            return this._.dirtyT = 1, this.transform(this._.transform.concat([["r", t, e, n]])), this;
          }
        }, M.translate = function (t, e) {
          return this.removed ? this : (t = r(t).split(u), t.length - 1 && (e = i(t[1])), t = i(t[0]) || 0, e = +e || 0, this._.bbox && (this._.bbox.x += t, this._.bbox.y += e), this.transform(this._.transform.concat([["t", t, e]])), this);
        }, M.scale = function (t, e, n, a) {
          if (this.removed) return this;
          if (t = r(t).split(u), t.length - 1 && (e = i(t[1]), n = i(t[2]), a = i(t[3]), isNaN(n) && (n = null), isNaN(a) && (a = null)), t = i(t[0]), null == e && (e = t), null == a && (n = a), null == n || null == a) var s = this.getBBox(1);
          return n = null == n ? s.x + s.width / 2 : n, a = null == a ? s.y + s.height / 2 : a, this.transform(this._.transform.concat([["s", t, e, n, a]])), this._.dirtyT = 1, this;
        }, M.hide = function () {
          return !this.removed && (this.node.style.display = "none"), this;
        }, M.show = function () {
          return !this.removed && (this.node.style.display = d), this;
        }, M.auxGetBBox = t.el.getBBox, M.getBBox = function () {
          var t = this.auxGetBBox();

          if (this.paper && this.paper._viewBoxShift) {
            var e = {},
                r = 1 / this.paper._viewBoxShift.scale;
            return e.x = t.x - this.paper._viewBoxShift.dx, e.x *= r, e.y = t.y - this.paper._viewBoxShift.dy, e.y *= r, e.width = t.width * r, e.height = t.height * r, e.x2 = e.x + e.width, e.y2 = e.y + e.height, e;
          }

          return t;
        }, M._getBBox = function () {
          return this.removed ? {} : {
            x: this.X + (this.bbx || 0) - this.W / 2,
            y: this.Y - this.H,
            width: this.W,
            height: this.H
          };
        }, M.remove = function () {
          if (!this.removed && this.node.parentNode) {
            this.paper.__set__ && this.paper.__set__.exclude(this), t.eve.unbind("raphael.*.*." + this.id), t._tear(this, this.paper), this.node.parentNode.removeChild(this.node), this.shape && this.shape.parentNode.removeChild(this.shape);

            for (var e in this) {
              this[e] = "function" == typeof this[e] ? t._removedFactory(e) : null;
            }

            this.removed = !0;
          }
        }, M.attr = function (r, i) {
          if (this.removed) return this;

          if (null == r) {
            var n = {};

            for (var a in this.attrs) {
              this.attrs[e](a) && (n[a] = this.attrs[a]);
            }

            return n.gradient && "none" == n.fill && (n.fill = n.gradient) && delete n.gradient, n.transform = this._.transform, n;
          }

          if (null == i && t.is(r, "string")) {
            if (r == h && "none" == this.attrs.fill && this.attrs.gradient) return this.attrs.gradient;

            for (var s = r.split(u), o = {}, l = 0, f = s.length; l < f; l++) {
              r = s[l], r in this.attrs ? o[r] = this.attrs[r] : t.is(this.paper.customAttributes[r], "function") ? o[r] = this.paper.customAttributes[r].def : o[r] = t._availableAttrs[r];
            }

            return f - 1 ? o : o[s[0]];
          }

          if (this.attrs && null == i && t.is(r, "array")) {
            for (o = {}, l = 0, f = r.length; l < f; l++) {
              o[r[l]] = this.attr(r[l]);
            }

            return o;
          }

          var p;
          null != i && (p = {}, p[r] = i), null == i && t.is(r, "object") && (p = r);

          for (var d in p) {
            c("raphael.attr." + d + "." + this.id, this, p[d]);
          }

          if (p) {
            for (d in this.paper.customAttributes) {
              if (this.paper.customAttributes[e](d) && p[e](d) && t.is(this.paper.customAttributes[d], "function")) {
                var g = this.paper.customAttributes[d].apply(this, [].concat(p[d]));
                this.attrs[d] = p[d];

                for (var v in g) {
                  g[e](v) && (p[v] = g[v]);
                }
              }
            }

            p.text && "text" == this.type && (this.textpath.string = p.text), A(this, p);
          }

          return this;
        }, M.toFront = function () {
          return !this.removed && this.node.parentNode.appendChild(this.node), this.paper && this.paper.top != this && t._tofront(this, this.paper), this;
        }, M.toBack = function () {
          return this.removed ? this : (this.node.parentNode.firstChild != this.node && (this.node.parentNode.insertBefore(this.node, this.node.parentNode.firstChild), t._toback(this, this.paper)), this);
        }, M.insertAfter = function (e) {
          return this.removed ? this : (e.constructor == t.st.constructor && (e = e[e.length - 1]), e.node.nextSibling ? e.node.parentNode.insertBefore(this.node, e.node.nextSibling) : e.node.parentNode.appendChild(this.node), t._insertafter(this, e, this.paper), this);
        }, M.insertBefore = function (e) {
          return this.removed ? this : (e.constructor == t.st.constructor && (e = e[0]), e.node.parentNode.insertBefore(this.node, e.node), t._insertbefore(this, e, this.paper), this);
        }, M.blur = function (e) {
          var r = this.node.runtimeStyle,
              i = r.filter;
          return i = i.replace(x, d), 0 !== +e ? (this.attrs.blur = e, r.filter = i + p + f + ".Blur(pixelradius=" + (+e || 1.5) + ")", r.margin = t.format("-{0}px 0 0 -{0}px", a(+e || 1.5))) : (r.filter = i, r.margin = 0, delete this.attrs.blur), this;
        }, t._engine.path = function (t, e) {
          var r = N("shape");
          r.style.cssText = m, r.coordsize = b + p + b, r.coordorigin = e.coordorigin;
          var i = new E(r, e),
              n = {
            fill: "none",
            stroke: "#000"
          };
          t && (n.path = t), i.type = "path", i.path = [], i.Path = d, A(i, n), e.canvas && e.canvas.appendChild(r);
          var a = N("skew");
          return a.on = !0, r.appendChild(a), i.skew = a, i.transform(d), i;
        }, t._engine.rect = function (e, r, i, n, a, s) {
          var o = t._rectPath(r, i, n, a, s),
              l = e.path(o),
              h = l.attrs;

          return l.X = h.x = r, l.Y = h.y = i, l.W = h.width = n, l.H = h.height = a, h.r = s, h.path = o, l.type = "rect", l;
        }, t._engine.ellipse = function (t, e, r, i, n) {
          var a = t.path(),
              s = a.attrs;
          return a.X = e - i, a.Y = r - n, a.W = 2 * i, a.H = 2 * n, a.type = "ellipse", A(a, {
            cx: e,
            cy: r,
            rx: i,
            ry: n
          }), a;
        }, t._engine.circle = function (t, e, r, i) {
          var n = t.path(),
              a = n.attrs;
          return n.X = e - i, n.Y = r - i, n.W = n.H = 2 * i, n.type = "circle", A(n, {
            cx: e,
            cy: r,
            r: i
          }), n;
        }, t._engine.image = function (e, r, i, n, a, s) {
          var o = t._rectPath(i, n, a, s),
              l = e.path(o).attr({
            stroke: "none"
          }),
              u = l.attrs,
              c = l.node,
              f = c.getElementsByTagName(h)[0];

          return u.src = r, l.X = u.x = i, l.Y = u.y = n, l.W = u.width = a, l.H = u.height = s, u.path = o, l.type = "image", f.parentNode == c && c.removeChild(f), f.rotate = !0, f.src = r, f.type = "tile", l._.fillpos = [i, n], l._.fillsize = [a, s], c.appendChild(f), C(l, 1, 1, 0, 0, 0), l;
        }, t._engine.text = function (e, i, n, s) {
          var o = N("shape"),
              l = N("path"),
              h = N("textpath");
          i = i || 0, n = n || 0, s = s || "", l.v = t.format("m{0},{1}l{2},{1}", a(i * b), a(n * b), a(i * b) + 1), l.textpathok = !0, h.string = r(s), h.on = !0, o.style.cssText = m, o.coordsize = b + p + b, o.coordorigin = "0 0";
          var u = new E(o, e),
              c = {
            fill: "#000",
            stroke: "none",
            font: t._availableAttrs.font,
            text: s
          };
          u.shape = o, u.path = l, u.textpath = h, u.type = "text", u.attrs.text = r(s), u.attrs.x = i, u.attrs.y = n, u.attrs.w = 1, u.attrs.h = 1, A(u, c), o.appendChild(h), o.appendChild(l), e.canvas.appendChild(o);
          var f = N("skew");
          return f.on = !0, o.appendChild(f), u.skew = f, u.transform(d), u;
        }, t._engine.setSize = function (e, r) {
          var i = this.canvas.style;
          return this.width = e, this.height = r, e == +e && (e += "px"), r == +r && (r += "px"), i.width = e, i.height = r, i.clip = "rect(0 " + e + " " + r + " 0)", this._viewBox && t._engine.setViewBox.apply(this, this._viewBox), this;
        }, t._engine.setViewBox = function (e, r, i, n, a) {
          t.eve("raphael.setViewBox", this, this._viewBox, [e, r, i, n, a]);
          var s = this.getSize(),
              o = s.width,
              l = s.height,
              h,
              u;
          return a && (h = l / n, u = o / i, i * h < o && (e -= (o - i * h) / 2 / h), n * u < l && (r -= (l - n * u) / 2 / u)), this._viewBox = [e, r, i, n, !!a], this._viewBoxShift = {
            dx: -e,
            dy: -r,
            scale: s
          }, this.forEach(function (t) {
            t.transform("...");
          }), this;
        };
        var N;
        t._engine.initWin = function (t) {
          var e = t.document;
          e.styleSheets.length < 31 ? e.createStyleSheet().addRule(".rvml", "behavior:url(#default#VML)") : e.styleSheets[0].addRule(".rvml", "behavior:url(#default#VML)");

          try {
            !e.namespaces.rvml && e.namespaces.add("rvml", "urn:schemas-microsoft-com:vml"), N = function N(t) {
              return e.createElement("<rvml:" + t + ' class="rvml">');
            };
          } catch (r) {
            N = function N(t) {
              return e.createElement("<" + t + ' xmlns="urn:schemas-microsoft.com:vml" class="rvml">');
            };
          }
        }, t._engine.initWin(t._g.win), t._engine.create = function () {
          var e = t._getContainer.apply(0, arguments),
              r = e.container,
              i = e.height,
              n,
              a = e.width,
              s = e.x,
              o = e.y;

          if (!r) throw new Error("VML container not found.");

          var l = new t._Paper(),
              h = l.canvas = t._g.doc.createElement("div"),
              u = h.style;

          return s = s || 0, o = o || 0, a = a || 512, i = i || 342, l.width = a, l.height = i, a == +a && (a += "px"), i == +i && (i += "px"), l.coordsize = 1e3 * b + p + 1e3 * b, l.coordorigin = "0 0", l.span = t._g.doc.createElement("span"), l.span.style.cssText = "position:absolute;left:-9999em;top:-9999em;padding:0;margin:0;line-height:1;", h.appendChild(l.span), u.cssText = t.format("top:0;left:0;width:{0};height:{1};display:inline-block;position:relative;clip:rect(0 {0} {1} 0);overflow:hidden", a, i), 1 == r ? (t._g.doc.body.appendChild(h), u.left = s + "px", u.top = o + "px", u.position = "absolute") : r.firstChild ? r.insertBefore(h, r.firstChild) : r.appendChild(h), l.renderfix = function () {}, l;
        }, t.prototype.clear = function () {
          t.eve("raphael.clear", this), this.canvas.innerHTML = d, this.span = t._g.doc.createElement("span"), this.span.style.cssText = "position:absolute;left:-9999em;top:-9999em;padding:0;margin:0;line-height:1;display:inline;", this.canvas.appendChild(this.span), this.bottom = this.top = null;
        }, t.prototype.remove = function () {
          t.eve("raphael.remove", this), this.canvas.parentNode.removeChild(this.canvas);

          for (var e in this) {
            this[e] = "function" == typeof this[e] ? t._removedFactory(e) : null;
          }

          return !0;
        };
        var L = t.st;

        for (var z in M) {
          M[e](z) && !L[e](z) && (L[z] = function (t) {
            return function () {
              var e = arguments;
              return this.forEach(function (r) {
                r[t].apply(r, e);
              });
            };
          }(z));
        }
      }
    }.apply(e, i), !(void 0 !== n && (t.exports = n));
  }]);
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ 2:
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** multi ./resources/js/admin/adminlte.min.js ./resources/js/admin/bootstrap-datepicker.min.js ./resources/js/admin/fastclick.js ./resources/js/admin/jquery-jvectormap.js ./resources/js/admin/jquery-jvectormap1.js ./resources/js/admin/jquery.knob.min.js ./resources/js/admin/jquery.slimscroll.min.js ./resources/js/admin/jquery.sparkline.min.js ./resources/js/admin/morris.min.js ./resources/js/admin/raphael.min.js ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! E:\xampp\htdocs\Rio-Ecommerce\resources\js\admin\adminlte.min.js */"./resources/js/admin/adminlte.min.js");
__webpack_require__(/*! E:\xampp\htdocs\Rio-Ecommerce\resources\js\admin\bootstrap-datepicker.min.js */"./resources/js/admin/bootstrap-datepicker.min.js");
__webpack_require__(/*! E:\xampp\htdocs\Rio-Ecommerce\resources\js\admin\fastclick.js */"./resources/js/admin/fastclick.js");
__webpack_require__(/*! E:\xampp\htdocs\Rio-Ecommerce\resources\js\admin\jquery-jvectormap.js */"./resources/js/admin/jquery-jvectormap.js");
__webpack_require__(/*! E:\xampp\htdocs\Rio-Ecommerce\resources\js\admin\jquery-jvectormap1.js */"./resources/js/admin/jquery-jvectormap1.js");
__webpack_require__(/*! E:\xampp\htdocs\Rio-Ecommerce\resources\js\admin\jquery.knob.min.js */"./resources/js/admin/jquery.knob.min.js");
__webpack_require__(/*! E:\xampp\htdocs\Rio-Ecommerce\resources\js\admin\jquery.slimscroll.min.js */"./resources/js/admin/jquery.slimscroll.min.js");
__webpack_require__(/*! E:\xampp\htdocs\Rio-Ecommerce\resources\js\admin\jquery.sparkline.min.js */"./resources/js/admin/jquery.sparkline.min.js");
__webpack_require__(/*! E:\xampp\htdocs\Rio-Ecommerce\resources\js\admin\morris.min.js */"./resources/js/admin/morris.min.js");
module.exports = __webpack_require__(/*! E:\xampp\htdocs\Rio-Ecommerce\resources\js\admin\raphael.min.js */"./resources/js/admin/raphael.min.js");


/***/ })

/******/ });