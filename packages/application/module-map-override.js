(function () {
  'use strict';

  function _iterableToArrayLimit(arr, i) {
    var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"];
    if (null != _i) {
      var _s,
        _e,
        _x,
        _r,
        _arr = [],
        _n = !0,
        _d = !1;
      try {
        if (_x = (_i = _i.call(arr)).next, 0 === i) {
          if (Object(_i) !== _i) return;
          _n = !1;
        } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0);
      } catch (err) {
        _d = !0, _e = err;
      } finally {
        try {
          if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return;
        } finally {
          if (_d) throw _e;
        }
      }
      return _arr;
    }
  }
  function _typeof(obj) {
    "@babel/helpers - typeof";

    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
      return typeof obj;
    } : function (obj) {
      return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    }, _typeof(obj);
  }
  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);
    }
  }
  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    Object.defineProperty(Constructor, "prototype", {
      writable: false
    });
    return Constructor;
  }
  function _defineProperty(obj, key, value) {
    key = _toPropertyKey(key);
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }
    return obj;
  }
  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    Object.defineProperty(subClass, "prototype", {
      writable: false
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
  }
  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
  }
  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };
    return _setPrototypeOf(o, p);
  }
  function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
      Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
      return true;
    } catch (e) {
      return false;
    }
  }
  function _construct(Parent, args, Class) {
    if (_isNativeReflectConstruct()) {
      _construct = Reflect.construct.bind();
    } else {
      _construct = function _construct(Parent, args, Class) {
        var a = [null];
        a.push.apply(a, args);
        var Constructor = Function.bind.apply(Parent, a);
        var instance = new Constructor();
        if (Class) _setPrototypeOf(instance, Class.prototype);
        return instance;
      };
    }
    return _construct.apply(null, arguments);
  }
  function _isNativeFunction(fn) {
    return Function.toString.call(fn).indexOf("[native code]") !== -1;
  }
  function _wrapNativeSuper(Class) {
    var _cache = typeof Map === "function" ? new Map() : undefined;
    _wrapNativeSuper = function _wrapNativeSuper(Class) {
      if (Class === null || !_isNativeFunction(Class)) return Class;
      if (typeof Class !== "function") {
        throw new TypeError("Super expression must either be null or a function");
      }
      if (typeof _cache !== "undefined") {
        if (_cache.has(Class)) return _cache.get(Class);
        _cache.set(Class, Wrapper);
      }
      function Wrapper() {
        return _construct(Class, arguments, _getPrototypeOf(this).constructor);
      }
      Wrapper.prototype = Object.create(Class.prototype, {
        constructor: {
          value: Wrapper,
          enumerable: false,
          writable: true,
          configurable: true
        }
      });
      return _setPrototypeOf(Wrapper, Class);
    };
    return _wrapNativeSuper(Class);
  }
  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
  }
  function _possibleConstructorReturn(self, call) {
    if (call && (typeof call === "object" || typeof call === "function")) {
      return call;
    } else if (call !== void 0) {
      throw new TypeError("Derived constructors may only return object or undefined");
    }
    return _assertThisInitialized(self);
  }
  function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();
    return function _createSuperInternal() {
      var Super = _getPrototypeOf(Derived),
        result;
      if (hasNativeReflectConstruct) {
        var NewTarget = _getPrototypeOf(this).constructor;
        result = Reflect.construct(Super, arguments, NewTarget);
      } else {
        result = Super.apply(this, arguments);
      }
      return _possibleConstructorReturn(this, result);
    };
  }
  function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
  }
  function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
  }
  function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
  }
  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
    return arr2;
  }
  function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  function _toPrimitive(input, hint) {
    if (typeof input !== "object" || input === null) return input;
    var prim = input[Symbol.toPrimitive];
    if (prim !== undefined) {
      var res = prim.call(input, hint || "default");
      if (typeof res !== "object") return res;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (hint === "string" ? String : Number)(input);
  }
  function _toPropertyKey(arg) {
    var key = _toPrimitive(arg, "string");
    return typeof key === "symbol" ? key : String(key);
  }

  var n,l$1,u$1,t$1,r$1,o$1,f$1,c$1={},s$1=[],a$1=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function h$1(n,l){for(var u in l)n[u]=l[u];return n}function v$1(n){var l=n.parentNode;l&&l.removeChild(n);}function y(l,u,i){var t,r,o,f={};for(o in u)"key"==o?t=u[o]:"ref"==o?r=u[o]:f[o]=u[o];if(arguments.length>2&&(f.children=arguments.length>3?n.call(arguments,2):i),"function"==typeof l&&null!=l.defaultProps)for(o in l.defaultProps)void 0===f[o]&&(f[o]=l.defaultProps[o]);return p$1(l,f,t,r,null)}function p$1(n,i,t,r,o){var f={type:n,props:i,key:t,ref:r,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:null==o?++u$1:o};return null==o&&null!=l$1.vnode&&l$1.vnode(f),f}function _$1(n){return n.children}function k$1(n,l){this.props=n,this.context=l;}function b$1(n,l){if(null==l)return n.__?b$1(n.__,n.__.__k.indexOf(n)+1):null;for(var u;l<n.__k.length;l++)if(null!=(u=n.__k[l])&&null!=u.__e)return u.__e;return "function"==typeof n.type?b$1(n):null}function g$1(n){var l,u;if(null!=(n=n.__)&&null!=n.__c){for(n.__e=n.__c.base=null,l=0;l<n.__k.length;l++)if(null!=(u=n.__k[l])&&null!=u.__e){n.__e=n.__c.base=u.__e;break}return g$1(n)}}function m$1(n){(!n.__d&&(n.__d=!0)&&t$1.push(n)&&!w$1.__r++||r$1!==l$1.debounceRendering)&&((r$1=l$1.debounceRendering)||o$1)(w$1);}function w$1(){var n,l,u,i,r,o,e,c;for(t$1.sort(f$1);n=t$1.shift();)n.__d&&(l=t$1.length,i=void 0,r=void 0,e=(o=(u=n).__v).__e,(c=u.__P)&&(i=[],(r=h$1({},o)).__v=o.__v+1,L(c,o,r,u.__n,void 0!==c.ownerSVGElement,null!=o.__h?[e]:null,i,null==e?b$1(o):e,o.__h),M(i,o),o.__e!=e&&g$1(o)),t$1.length>l&&t$1.sort(f$1));w$1.__r=0;}function x(n,l,u,i,t,r,o,f,e,a){var h,v,y,d,k,g,m,w=i&&i.__k||s$1,x=w.length;for(u.__k=[],h=0;h<l.length;h++)if(null!=(d=u.__k[h]=null==(d=l[h])||"boolean"==typeof d||"function"==typeof d?null:"string"==typeof d||"number"==typeof d||"bigint"==typeof d?p$1(null,d,null,null,d):Array.isArray(d)?p$1(_$1,{children:d},null,null,null):d.__b>0?p$1(d.type,d.props,d.key,d.ref?d.ref:null,d.__v):d)){if(d.__=u,d.__b=u.__b+1,null===(y=w[h])||y&&d.key==y.key&&d.type===y.type)w[h]=void 0;else for(v=0;v<x;v++){if((y=w[v])&&d.key==y.key&&d.type===y.type){w[v]=void 0;break}y=null;}L(n,d,y=y||c$1,t,r,o,f,e,a),k=d.__e,(v=d.ref)&&y.ref!=v&&(m||(m=[]),y.ref&&m.push(y.ref,null,d),m.push(v,d.__c||k,d)),null!=k?(null==g&&(g=k),"function"==typeof d.type&&d.__k===y.__k?d.__d=e=A(d,e,n):e=C(n,d,y,w,k,e),"function"==typeof u.type&&(u.__d=e)):e&&y.__e==e&&e.parentNode!=n&&(e=b$1(y));}for(u.__e=g,h=x;h--;)null!=w[h]&&("function"==typeof u.type&&null!=w[h].__e&&w[h].__e==u.__d&&(u.__d=$(i).nextSibling),S(w[h],w[h]));if(m)for(h=0;h<m.length;h++)O(m[h],m[++h],m[++h]);}function A(n,l,u){for(var i,t=n.__k,r=0;t&&r<t.length;r++)(i=t[r])&&(i.__=n,l="function"==typeof i.type?A(i,l,u):C(u,i,i,t,i.__e,l));return l}function C(n,l,u,i,t,r){var o,f,e;if(void 0!==l.__d)o=l.__d,l.__d=void 0;else if(null==u||t!=r||null==t.parentNode)n:if(null==r||r.parentNode!==n)n.appendChild(t),o=null;else {for(f=r,e=0;(f=f.nextSibling)&&e<i.length;e+=1)if(f==t)break n;n.insertBefore(t,r),o=r;}return void 0!==o?o:t.nextSibling}function $(n){var l,u,i;if(null==n.type||"string"==typeof n.type)return n.__e;if(n.__k)for(l=n.__k.length-1;l>=0;l--)if((u=n.__k[l])&&(i=$(u)))return i;return null}function H(n,l,u,i,t){var r;for(r in u)"children"===r||"key"===r||r in l||T$1(n,r,null,u[r],i);for(r in l)t&&"function"!=typeof l[r]||"children"===r||"key"===r||"value"===r||"checked"===r||u[r]===l[r]||T$1(n,r,l[r],u[r],i);}function I(n,l,u){"-"===l[0]?n.setProperty(l,null==u?"":u):n[l]=null==u?"":"number"!=typeof u||a$1.test(l)?u:u+"px";}function T$1(n,l,u,i,t){var r;n:if("style"===l)if("string"==typeof u)n.style.cssText=u;else {if("string"==typeof i&&(n.style.cssText=i=""),i)for(l in i)u&&l in u||I(n.style,l,"");if(u)for(l in u)i&&u[l]===i[l]||I(n.style,l,u[l]);}else if("o"===l[0]&&"n"===l[1])r=l!==(l=l.replace(/Capture$/,"")),l=l.toLowerCase()in n?l.toLowerCase().slice(2):l.slice(2),n.l||(n.l={}),n.l[l+r]=u,u?i||n.addEventListener(l,r?z$1:j$1,r):n.removeEventListener(l,r?z$1:j$1,r);else if("dangerouslySetInnerHTML"!==l){if(t)l=l.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if("width"!==l&&"height"!==l&&"href"!==l&&"list"!==l&&"form"!==l&&"tabIndex"!==l&&"download"!==l&&l in n)try{n[l]=null==u?"":u;break n}catch(n){}"function"==typeof u||(null==u||!1===u&&"-"!==l[4]?n.removeAttribute(l):n.setAttribute(l,u));}}function j$1(n){return this.l[n.type+!1](l$1.event?l$1.event(n):n)}function z$1(n){return this.l[n.type+!0](l$1.event?l$1.event(n):n)}function L(n,u,i,t,r,o,f,e,c){var s,a,v,y,p,d,b,g,m,w,A,P,C,$,H,I=u.type;if(void 0!==u.constructor)return null;null!=i.__h&&(c=i.__h,e=u.__e=i.__e,u.__h=null,o=[e]),(s=l$1.__b)&&s(u);try{n:if("function"==typeof I){if(g=u.props,m=(s=I.contextType)&&t[s.__c],w=s?m?m.props.value:s.__:t,i.__c?b=(a=u.__c=i.__c).__=a.__E:("prototype"in I&&I.prototype.render?u.__c=a=new I(g,w):(u.__c=a=new k$1(g,w),a.constructor=I,a.render=q),m&&m.sub(a),a.props=g,a.state||(a.state={}),a.context=w,a.__n=t,v=a.__d=!0,a.__h=[],a._sb=[]),null==a.__s&&(a.__s=a.state),null!=I.getDerivedStateFromProps&&(a.__s==a.state&&(a.__s=h$1({},a.__s)),h$1(a.__s,I.getDerivedStateFromProps(g,a.__s))),y=a.props,p=a.state,a.__v=u,v)null==I.getDerivedStateFromProps&&null!=a.componentWillMount&&a.componentWillMount(),null!=a.componentDidMount&&a.__h.push(a.componentDidMount);else {if(null==I.getDerivedStateFromProps&&g!==y&&null!=a.componentWillReceiveProps&&a.componentWillReceiveProps(g,w),!a.__e&&null!=a.shouldComponentUpdate&&!1===a.shouldComponentUpdate(g,a.__s,w)||u.__v===i.__v){for(u.__v!==i.__v&&(a.props=g,a.state=a.__s,a.__d=!1),a.__e=!1,u.__e=i.__e,u.__k=i.__k,u.__k.forEach(function(n){n&&(n.__=u);}),A=0;A<a._sb.length;A++)a.__h.push(a._sb[A]);a._sb=[],a.__h.length&&f.push(a);break n}null!=a.componentWillUpdate&&a.componentWillUpdate(g,a.__s,w),null!=a.componentDidUpdate&&a.__h.push(function(){a.componentDidUpdate(y,p,d);});}if(a.context=w,a.props=g,a.__P=n,P=l$1.__r,C=0,"prototype"in I&&I.prototype.render){for(a.state=a.__s,a.__d=!1,P&&P(u),s=a.render(a.props,a.state,a.context),$=0;$<a._sb.length;$++)a.__h.push(a._sb[$]);a._sb=[];}else do{a.__d=!1,P&&P(u),s=a.render(a.props,a.state,a.context),a.state=a.__s;}while(a.__d&&++C<25);a.state=a.__s,null!=a.getChildContext&&(t=h$1(h$1({},t),a.getChildContext())),v||null==a.getSnapshotBeforeUpdate||(d=a.getSnapshotBeforeUpdate(y,p)),H=null!=s&&s.type===_$1&&null==s.key?s.props.children:s,x(n,Array.isArray(H)?H:[H],u,i,t,r,o,f,e,c),a.base=u.__e,u.__h=null,a.__h.length&&f.push(a),b&&(a.__E=a.__=null),a.__e=!1;}else null==o&&u.__v===i.__v?(u.__k=i.__k,u.__e=i.__e):u.__e=N(i.__e,u,i,t,r,o,f,c);(s=l$1.diffed)&&s(u);}catch(n){u.__v=null,(c||null!=o)&&(u.__e=e,u.__h=!!c,o[o.indexOf(e)]=null),l$1.__e(n,u,i);}}function M(n,u){l$1.__c&&l$1.__c(u,n),n.some(function(u){try{n=u.__h,u.__h=[],n.some(function(n){n.call(u);});}catch(n){l$1.__e(n,u.__v);}});}function N(l,u,i,t,r,o,f,e){var s,a,h,y=i.props,p=u.props,d=u.type,_=0;if("svg"===d&&(r=!0),null!=o)for(;_<o.length;_++)if((s=o[_])&&"setAttribute"in s==!!d&&(d?s.localName===d:3===s.nodeType)){l=s,o[_]=null;break}if(null==l){if(null===d)return document.createTextNode(p);l=r?document.createElementNS("http://www.w3.org/2000/svg",d):document.createElement(d,p.is&&p),o=null,e=!1;}if(null===d)y===p||e&&l.data===p||(l.data=p);else {if(o=o&&n.call(l.childNodes),a=(y=i.props||c$1).dangerouslySetInnerHTML,h=p.dangerouslySetInnerHTML,!e){if(null!=o)for(y={},_=0;_<l.attributes.length;_++)y[l.attributes[_].name]=l.attributes[_].value;(h||a)&&(h&&(a&&h.__html==a.__html||h.__html===l.innerHTML)||(l.innerHTML=h&&h.__html||""));}if(H(l,p,y,r,e),h)u.__k=[];else if(_=u.props.children,x(l,Array.isArray(_)?_:[_],u,i,t,r&&"foreignObject"!==d,o,f,o?o[0]:i.__k&&b$1(i,0),e),null!=o)for(_=o.length;_--;)null!=o[_]&&v$1(o[_]);e||("value"in p&&void 0!==(_=p.value)&&(_!==l.value||"progress"===d&&!_||"option"===d&&_!==y.value)&&T$1(l,"value",_,y.value,!1),"checked"in p&&void 0!==(_=p.checked)&&_!==l.checked&&T$1(l,"checked",_,y.checked,!1));}return l}function O(n,u,i){try{"function"==typeof n?n(u):n.current=u;}catch(n){l$1.__e(n,i);}}function S(n,u,i){var t,r;if(l$1.unmount&&l$1.unmount(n),(t=n.ref)&&(t.current&&t.current!==n.__e||O(t,null,u)),null!=(t=n.__c)){if(t.componentWillUnmount)try{t.componentWillUnmount();}catch(n){l$1.__e(n,u);}t.base=t.__P=null,n.__c=void 0;}if(t=n.__k)for(r=0;r<t.length;r++)t[r]&&S(t[r],u,i||"function"!=typeof n.type);i||null==n.__e||v$1(n.__e),n.__=n.__e=n.__d=void 0;}function q(n,l,u){return this.constructor(n,u)}function B$1(u,i,t){var r,o,f;l$1.__&&l$1.__(u,i),o=(r="function"==typeof t)?null:t&&t.__k||i.__k,f=[],L(i,u=(!r&&t||i).__k=y(_$1,null,[u]),o||c$1,c$1,void 0!==i.ownerSVGElement,!r&&t?[t]:o?null:i.firstChild?n.call(i.childNodes):null,f,!r&&t?t:o?o.__e:i.firstChild,r),M(f,u);}n=s$1.slice,l$1={__e:function(n,l,u,i){for(var t,r,o;l=l.__;)if((t=l.__c)&&!t.__)try{if((r=t.constructor)&&null!=r.getDerivedStateFromError&&(t.setState(r.getDerivedStateFromError(n)),o=t.__d),null!=t.componentDidCatch&&(t.componentDidCatch(n,i||{}),o=t.__d),o)return t.__E=t}catch(l){n=l;}throw n}},u$1=0,k$1.prototype.setState=function(n,l){var u;u=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=h$1({},this.state),"function"==typeof n&&(n=n(h$1({},u),this.props)),n&&h$1(u,n),null!=n&&this.__v&&(l&&this._sb.push(l),m$1(this));},k$1.prototype.forceUpdate=function(n){this.__v&&(this.__e=!0,n&&this.__h.push(n),m$1(this));},k$1.prototype.render=_$1,t$1=[],o$1="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,f$1=function(n,l){return n.__v.__b-l.__v.__b},w$1.__r=0;

  var t,r,u,i,o=0,f=[],c=[],e=l$1.__b,a=l$1.__r,v=l$1.diffed,l=l$1.__c,m=l$1.unmount;function d(t,u){l$1.__h&&l$1.__h(r,t,o||u),o=0;var i=r.__H||(r.__H={__:[],__h:[]});return t>=i.__.length&&i.__.push({__V:c}),i.__[t]}function h(n){return o=1,s(B,n)}function s(n,u,i){var o=d(t++,2);if(o.t=n,!o.__c&&(o.__=[i?i(u):B(void 0,u),function(n){var t=o.__N?o.__N[0]:o.__[0],r=o.t(t,n);t!==r&&(o.__N=[r,o.__[1]],o.__c.setState({}));}],o.__c=r,!r.u)){var f=function(n,t,r){if(!o.__c.__H)return !0;var u=o.__c.__H.__.filter(function(n){return n.__c});if(u.every(function(n){return !n.__N}))return !c||c.call(this,n,t,r);var i=!1;return u.forEach(function(n){if(n.__N){var t=n.__[0];n.__=n.__N,n.__N=void 0,t!==n.__[0]&&(i=!0);}}),!(!i&&o.__c.props===n)&&(!c||c.call(this,n,t,r))};r.u=!0;var c=r.shouldComponentUpdate,e=r.componentWillUpdate;r.componentWillUpdate=function(n,t,r){if(this.__e){var u=c;c=void 0,f(n,t,r),c=u;}e&&e.call(this,n,t,r);},r.shouldComponentUpdate=f;}return o.__N||o.__}function p(u,i){var o=d(t++,3);!l$1.__s&&z(o.__H,i)&&(o.__=u,o.i=i,r.__H.__h.push(o));}function _(n){return o=5,F(function(){return {current:n}},[])}function F(n,r){var u=d(t++,7);return z(u.__H,r)?(u.__V=n(),u.i=r,u.__h=n,u.__V):u.__}function T(n,t){return o=8,F(function(){return n},t)}function b(){for(var t;t=f.shift();)if(t.__P&&t.__H)try{t.__H.__h.forEach(k),t.__H.__h.forEach(w),t.__H.__h=[];}catch(r){t.__H.__h=[],l$1.__e(r,t.__v);}}l$1.__b=function(n){r=null,e&&e(n);},l$1.__r=function(n){a&&a(n),t=0;var i=(r=n.__c).__H;i&&(u===r?(i.__h=[],r.__h=[],i.__.forEach(function(n){n.__N&&(n.__=n.__N),n.__V=c,n.__N=n.i=void 0;})):(i.__h.forEach(k),i.__h.forEach(w),i.__h=[])),u=r;},l$1.diffed=function(t){v&&v(t);var o=t.__c;o&&o.__H&&(o.__H.__h.length&&(1!==f.push(o)&&i===l$1.requestAnimationFrame||((i=l$1.requestAnimationFrame)||j)(b)),o.__H.__.forEach(function(n){n.i&&(n.__H=n.i),n.__V!==c&&(n.__=n.__V),n.i=void 0,n.__V=c;})),u=r=null;},l$1.__c=function(t,r){r.some(function(t){try{t.__h.forEach(k),t.__h=t.__h.filter(function(n){return !n.__||w(n)});}catch(u){r.some(function(n){n.__h&&(n.__h=[]);}),r=[],l$1.__e(u,t.__v);}}),l&&l(t,r);},l$1.unmount=function(t){m&&m(t);var r,u=t.__c;u&&u.__H&&(u.__H.__.forEach(function(n){try{k(n);}catch(n){r=n;}}),u.__H=void 0,r&&l$1.__e(r,u.__v));};var g="function"==typeof requestAnimationFrame;function j(n){var t,r=function(){clearTimeout(u),g&&cancelAnimationFrame(t),setTimeout(n);},u=setTimeout(r,100);g&&(t=requestAnimationFrame(r));}function k(n){var t=r,u=n.__c;"function"==typeof u&&(n.__c=void 0,u()),r=t;}function w(n){var t=r;n.__c=n.__(),r=t;}function z(n,t){return !n||n.length!==t.length||t.some(function(t,r){return t!==n[r]})}function B(n,t){return "function"==typeof t?t(n):t}

  function createCommonjsModule(fn, module) {
  	return module = { exports: {} }, fn(module, module.exports), module.exports;
  }

  var classnames = createCommonjsModule(function (module) {
  /*!
  	Copyright (c) 2018 Jed Watson.
  	Licensed under the MIT License (MIT), see
  	http://jedwatson.github.io/classnames
  */
  /* global define */

  (function () {

  	var hasOwn = {}.hasOwnProperty;

  	function classNames() {
  		var classes = [];

  		for (var i = 0; i < arguments.length; i++) {
  			var arg = arguments[i];
  			if (!arg) continue;

  			var argType = typeof arg;

  			if (argType === 'string' || argType === 'number') {
  				classes.push(arg);
  			} else if (Array.isArray(arg)) {
  				if (arg.length) {
  					var inner = classNames.apply(null, arg);
  					if (inner) {
  						classes.push(inner);
  					}
  				}
  			} else if (argType === 'object') {
  				if (arg.toString !== Object.prototype.toString && !arg.toString.toString().includes('[native code]')) {
  					classes.push(arg.toString());
  					continue;
  				}

  				for (var key in arg) {
  					if (hasOwn.call(arg, key) && arg[key]) {
  						classes.push(key);
  					}
  				}
  			}
  		}

  		return classes.join(' ');
  	}

  	if (module.exports) {
  		classNames.default = classNames;
  		module.exports = classNames;
  	} else {
  		window.classNames = classNames;
  	}
  }());
  });

  function styleInject(css, ref) {
    if ( ref === void 0 ) ref = {};
    var insertAt = ref.insertAt;

    if (!css || typeof document === 'undefined') { return; }

    var head = document.head || document.getElementsByTagName('head')[0];
    var style = document.createElement('style');
    style.type = 'text/css';

    if (insertAt === 'top') {
      if (head.firstChild) {
        head.insertBefore(style, head.firstChild);
      } else {
        head.appendChild(style);
      }
    } else {
      head.appendChild(style);
    }

    if (style.styleSheet) {
      style.styleSheet.cssText = css;
    } else {
      style.appendChild(document.createTextNode(css));
    }
  }

  var css_248z$4 = ".index-module_imoUnstyled__1nNis {\n  border: none;\n  padding: 0;\n  width: auto;\n  overflow: visible;\n  background: transparent;\n  color: inherit;\n  font: inherit;\n  line-height: normal;\n  cursor: pointer;\n  -webkit-font-smoothing: inherit;\n  -moz-osx-font-smoothing: inherit;\n  -webkit-appearance: none;\n}\n.index-module_imoUnstyled__1nNis::-moz-focus-inner {\n  border: 0;\n  padding: 0;\n}\n.index-module_imoTrigger__3c4yn {\n  position: fixed;\n  bottom: 0;\n  right: 0;\n  margin: 10px;\n  border-radius: 5px;\n  background-color: navajowhite;\n  height: 50px;\n  width: 50px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 18px;\n  font-family: sans-serif;\n  z-index: 10500;\n}\n.index-module_imoCurrentOverride__3KlcI {\n  background-color: salmon;\n}\n";
  var styles$4 = {"imoUnstyled":"index-module_imoUnstyled__1nNis","imoTrigger":"index-module_imoTrigger__3c4yn","imoCurrentOverride":"index-module_imoCurrentOverride__3KlcI"};
  styleInject(css_248z$4);

  function includes(obj, item) {
    if (Array.isArray(obj)) {
      for (var i = 0; i < obj.length; i++) {
        if (obj[i] === item) {
          return true;
        }
      }
      return false;
    } else if (typeof obj === "string") {
      return obj.indexOf(item) >= 0;
    } else {
      throw Error("Can't call includes on ".concat(_typeof(obj)));
    }
  }

  var useUpdate = function useUpdate() {
    var _useState = h({}),
      _useState2 = _slicedToArray(_useState, 2),
      setState = _useState2[1];
    return T(function () {
      return setState({});
    }, []);
  };

  var moduleMapType = 'application/json';
  var localStoragePrefix = "module-map-override:";
  var portRegex$1 = /^\d+$/g;
  var disabledOverridesLocalStorageKey = "module-map-overrides-disabled";
  var overrideAttribute = "data-is-modulemap-override";
  // 最后一个module import script标签
  var referenceNode;
  // 创建一个空的module map
  var createEmptyModuleMap = function createEmptyModuleMap() {
    return {
      imports: {},
      scopes: {}
    };
  };
  var fireChangedEvent = function fireChangedEvent() {
    fireEvent("change");
  };
  // 判断当前module是否是disabled状态
  var getModuleIsDisabled = function getModuleIsDisabled(moduleName) {
    return includes(getDisabledOverrides(), moduleName);
  };
  // 根据port和moduleName生成一个新的url
  var getUrlFromPort = function getUrlFromPort(moduleName, port) {
    var fileName = moduleName.replace(/@/g, "").replace(/\//g, "-");
    return "//localhost:".concat(port, "/").concat(fileName, ".js");
  };
  // 获取所有disabled的module
  var getDisabledOverrides = function getDisabledOverrides() {
    var disabledOverrides = localStorage.getItem(disabledOverridesLocalStorageKey);
    return disabledOverrides ? JSON.parse(disabledOverrides) : [];
  };
  var getIsCanFireCustomEvents = function getIsCanFireCustomEvents() {
    var canFireCustomEvents = true;
    try {
      if (CustomEvent) {
        new CustomEvent("a");
      } else {
        canFireCustomEvents = false;
      }
    } catch (err) {
      canFireCustomEvents = false;
    }
    return canFireCustomEvents;
  };
  var fireEvent = function fireEvent(type) {
    // Set timeout so that event fires after the change has totally finished
    var canFireCustomEvents = getIsCanFireCustomEvents();
    setTimeout(function () {
      var eventType = "import-map-overrides:".concat(type);
      var event = canFireCustomEvents ? new CustomEvent(eventType) : document.createEvent(eventType);
      window.dispatchEvent(event);
    });
  };
  var mergeModuleMap = function mergeModuleMap(originalMap, newMap) {
    var outMap = createEmptyModuleMap();
    for (var i in originalMap.imports) {
      outMap.imports[i] = originalMap.imports[i];
    }
    for (var _i in newMap.imports) {
      outMap.imports[_i] = newMap.imports[_i];
    }
    for (var _i2 in originalMap.scopes) {
      outMap.scopes[_i2] = originalMap.scopes[_i2];
    }
    for (var _i3 in newMap.scopes) {
      outMap.scopes[_i3] = newMap.scopes[_i3];
    }
    return outMap;
  };
  // 获取默认的module map
  var getDefaultMap = function getDefaultMap() {
    var selectorElements = document.querySelectorAll("script[type=\"".concat(moduleMapType, "\"]"));
    return Array.from(selectorElements).reduce(function (promise, scriptEl) {
      var textContent = JSON.parse(scriptEl.textContent || '[]');
      var imports = textContent.reduce(function (imports, scriptInfo) {
        imports[scriptInfo.name] = scriptInfo.url;
        return imports;
      }, {});
      var nextPromise = Promise.resolve({
        imports: imports,
        scopes: {}
      });
      return Promise.all([promise, nextPromise]).then(function (_ref) {
        var _ref2 = _slicedToArray(_ref, 2),
          originalMap = _ref2[0],
          newMap = _ref2[1];
        return mergeModuleMap(originalMap, newMap);
      });
    }, Promise.resolve(createEmptyModuleMap()));
  };
  // 获取被覆盖的module
  var getOverrideMap = function getOverrideMap() {
    var includeDisabled = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
    var overrides = createEmptyModuleMap();
    var disabledOverrides = getDisabledOverrides();
    var setOverride = function setOverride(moduleName, path) {
      if (includeDisabled || !(disabledOverrides.indexOf(moduleName) >= 0)) {
        overrides.imports[moduleName] = path;
      }
    };
    // get from localstorage
    for (var i = 0; i < localStorage.length; i++) {
      var key = localStorage.key(i);
      if (key && key.indexOf(localStoragePrefix) === 0) {
        setOverride(key.slice(localStoragePrefix.length), localStorage.getItem(key));
      }
    }
    return overrides;
  };
  // 覆盖module信息
  var addOverride = function addOverride(moduleName, url) {
    if (portRegex$1.test(url)) {
      url = getUrlFromPort(moduleName, url);
    }
    var key = localStoragePrefix + moduleName;
    localStorage.setItem(key, url);
    fireChangedEvent();
    return getOverrideMap();
  };
  // 移除module的覆盖信息
  var removeOverride = function removeOverride(moduleName) {
    var key = localStoragePrefix + moduleName;
    var hasItem = localStorage.getItem(key) !== null;
    localStorage.removeItem(key);
    enableOverride(moduleName);
    fireChangedEvent();
    return hasItem;
  };
  // 启动覆盖功能
  var enableOverride = function enableOverride(moduleName) {
    var disabledOverrides = getDisabledOverrides();
    var index = disabledOverrides.indexOf(moduleName);
    if (index >= 0) {
      disabledOverrides.splice(index, 1);
      localStorage.setItem(disabledOverridesLocalStorageKey, JSON.stringify(disabledOverrides));
      fireChangedEvent();
      return true;
    } else {
      return false;
    }
  };
  // 向页面中插入带module覆盖信息的script
  var insertOverrideMap = function insertOverrideMap(map, id, referenceNode) {
    var overrideMapElement = document.createElement("script");
    overrideMapElement.type = moduleMapType;
    overrideMapElement.id = id; // for debugging and for UI to identify this module map as special
    overrideMapElement.setAttribute(overrideAttribute, "");
    if (typeof map === "string") {
      overrideMapElement.src = map;
    } else {
      var imports = map.imports;
      var textContent = Object.entries(imports).map(function (_ref3) {
        var _ref4 = _slicedToArray(_ref3, 2),
          key = _ref4[0],
          value = _ref4[1];
        return {
          name: key,
          url: value
        };
      });
      overrideMapElement.textContent = JSON.stringify(textContent, null, 2);
    }
    if (referenceNode) {
      referenceNode.insertAdjacentElement("afterend", overrideMapElement);
    } else {
      document.head.appendChild(overrideMapElement);
    }
    return overrideMapElement;
  };
  // disable module的覆盖信息
  var disableOverride = function disableOverride(moduleName) {
    var disabledOverrides = getDisabledOverrides();
    if (!includes(disabledOverrides, moduleName)) {
      localStorage.setItem(disabledOverridesLocalStorageKey, JSON.stringify(disabledOverrides.concat(moduleName)));
      fireChangedEvent();
      return true;
    } else {
      return false;
    }
  };
  // 重置所有信息
  var resetOverrides = function resetOverrides() {
    Object.keys(getOverrideMap(true).imports).forEach(function (moduleName) {
      removeOverride(moduleName);
    });
    localStorage.removeItem(disabledOverridesLocalStorageKey);
    fireChangedEvent();
    return getOverrideMap();
  };
  var init = function init() {
    var initialOverrideMap = getOverrideMap();
    var overridableImportMap = document.querySelector('script[type="overridable-importmap"]');
    referenceNode = overridableImportMap;
    if (!referenceNode) {
      var importMaps = Array.from(document.querySelectorAll("script[type=\"".concat(moduleMapType, "\"]")));
      referenceNode = importMaps ? importMaps[importMaps.length - 1] : undefined;
    }
    if (overridableImportMap) {
      if (overridableImportMap.src) {
        throw Error("import-map-overrides: external import maps with type=\"overridable-importmap\" are not supported");
      }
      var originalMap;
      try {
        originalMap = JSON.parse(overridableImportMap.textContent || '[]');
      } catch (e) {
        throw Error("Invalid <script type=\"overridable-importmap\"> - text content must be json");
      }
      referenceNode = insertOverrideMap(mergeModuleMap(originalMap, initialOverrideMap), "plugins", referenceNode);
    } else {
      if (Object.keys(initialOverrideMap.imports).length > 0) {
        referenceNode = insertOverrideMap(initialOverrideMap, "plugins", referenceNode);
      }
    }
  };
  init();
  fireEvent("init");

  var css_248z$3 = ".index-module_imoModalContainer__2-AJb {\n  font-family: sans-serif;\n  box-sizing: border-box;\n}\n.index-module_imoModuleDialog__1y5hL {\n  position: fixed;\n  z-index: 30000000;\n  top: 30%;\n  max-width: 600px;\n  margin: 0 auto;\n  border: 4px solid navajowhite;\n  background-color: white;\n  padding: 1em;\n  left: 50%;\n  right: auto;\n  transform: translateX(-50%);\n}\n.index-module_imoModuleDialog__1y5hL input {\n  width: 100%;\n  font-size: 16px;\n  box-sizing: border-box;\n  padding-right: 20px;\n}\n.index-module_imoModuleDialog__1y5hL table {\n  margin-bottom: 16px;\n}\n.index-module_imoModuleDialog__1y5hL table td:first-child {\n  text-align: right;\n  padding-right: 16px;\n  word-break: keep-all;\n}\n.index-module_imoModuleDialog__1y5hL table td {\n  word-break: break-all;\n}\n.index-module_imoModuleDialog__1y5hL.index-module_imoOverridden__1nK6a {\n  border: 4px solid salmon;\n}\n.index-module_imoClearInput__1YNIM {\n  position: absolute;\n  top: 0;\n  right: 4px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  height: 100%;\n}\n.index-module_imoDialogActions__3k4Ht {\n  display: flex;\n  justify-content: flex-end;\n}\n.index-module_imoModal__2rfwJ {\n  background-color: rgba(61, 70, 77, 0.6);\n  position: fixed;\n  width: 100vw;\n  height: 100vh;\n  top: 0;\n  left: 0;\n  z-index: 20000000;\n}\n.index-module_clearIcon__3vn6V {\n  font-size: 12px;\n  padding: 0 5px;\n}\n.index-module_hideIcon__2igsI {\n  display: none;\n}\n.index-module_cancelButton__25stt {\n  margin-right: 16px;\n}\n.index-module_disableOverrideButton__2K0wt {\n  margin-right: 16px;\n}\n.index-module_enableOverrideButton__2N9pb {\n  margin-right: 16px;\n}\n";
  var styles$3 = {"imoModalContainer":"index-module_imoModalContainer__2-AJb","imoModuleDialog":"index-module_imoModuleDialog__1y5hL","imoOverridden":"index-module_imoOverridden__1nK6a","imoClearInput":"index-module_imoClearInput__1YNIM","imoDialogActions":"index-module_imoDialogActions__3k4Ht","imoModal":"index-module_imoModal__2rfwJ","clearIcon":"index-module_clearIcon__3vn6V","hideIcon":"index-module_hideIcon__2igsI","cancelButton":"index-module_cancelButton__25stt","disableOverrideButton":"index-module_disableOverrideButton__2K0wt","enableOverrideButton":"index-module_enableOverrideButton__2N9pb"};
  styleInject(css_248z$3);

  var getInitialOverrideUrl = function getInitialOverrideUrl(module) {
    if (!module) {
      return '';
    }
    var regex = new RegExp("//localhost:([0-9]+)/");
    var match = regex.exec(module.overrideUrl);
    if (match && module.overrideUrl === getUrlFromPort(module.moduleName, match[1] || '')) {
      return match[1] || '';
    } else if (module.overrideUrl) {
      return module.overrideUrl;
    }
    return '';
  };

  var portRegex = /^\d+$/;
  var ModuleDialog = function ModuleDialog(props) {
    var _cln, _cln4;
    var module = props.module,
      removeDialog = props.removeDialog,
      _props$isNew = props.isNew,
      isNew = _props$isNew === void 0 ? false : _props$isNew,
      title = props.title;
    var _useState = h(function () {
        return getInitialOverrideUrl(module);
      }),
      _useState2 = _slicedToArray(_useState, 2),
      overrideUrl = _useState2[0],
      setOverrideUrl = _useState2[1];
    var _useState3 = h(''),
      _useState4 = _slicedToArray(_useState3, 2),
      moduleName = _useState4[0],
      setModuleName = _useState4[1];
    var clearOverrideUrlInput = function clearOverrideUrlInput() {
      setOverrideUrl('');
    };
    var clearModuleName = function clearModuleName() {
      setModuleName('');
    };
    var getDerivedUrl = function getDerivedUrl() {
      var newModuleName = isNew ? '' : module.moduleName;
      return portRegex.test(overrideUrl) ? getUrlFromPort(newModuleName, overrideUrl) : overrideUrl;
    };
    var updateModuleUrl = function updateModuleUrl(url) {
      var newUrl = url || null;
      if (newUrl === null) {
        removeOverride(module.moduleName);
      } else {
        addOverride(module.moduleName, newUrl);
      }
    };
    var addNewModule = function addNewModule(name, url) {
      if (name && url) {
        addOverride(name, url);
      }
    };
    var handleSubmit = function handleSubmit(evt) {
      evt.preventDefault();
      if (module && module.moduleName && getModuleIsDisabled(module.moduleName)) {
        enableOverride(module.moduleName);
      }
      if (isNew) {
        addNewModule(moduleName, overrideUrl);
      } else {
        updateModuleUrl(overrideUrl);
      }
      removeDialog();
    };
    var isCanDisableOverride = module && module.overrideUrl && !module.disabled;
    var isCanEnableOverride = module && module.overrideUrl && module.disabled;
    return y("div", {
      className: styles$3.imoModalContainer
    }, y("div", {
      className: styles$3.imoModal
    }), y("dialog", {
      className: classnames(styles$3.imoModuleDialog, (_cln = {}, _defineProperty(_cln, styles$3.imoOverridden, overrideUrl.length > 0), _defineProperty(_cln, styles$3.imoDefault, overrideUrl.length <= 0), _cln)),
      open: true
    }, y("form", {
      method: "dialog",
      onSubmit: handleSubmit
    }, y("h3", {
      style: {
        marginTop: 0
      }
    }, title), y("table", null, y("tbody", null, !isNew && y("tr", null, y("td", null, "Default URL:"), y("td", null, module.defaultUrl)), isNew && y("tr", null, y("td", null, y("span", {
      id: "module-name-label"
    }, "Module Name:")), y("td", {
      style: {
        position: "relative"
      }
    }, y("input", {
      type: "text",
      tabIndex: 1,
      value: moduleName,
      "aria-labelledby": "module-name-label",
      onInput: function onInput(evt) {
        return setModuleName(evt.target.value);
      },
      required: true
    }), y("div", {
      role: "button",
      tabIndex: 3,
      className: styles$3.imoClearInput,
      onClick: clearModuleName
    }, y("div", {
      className: classnames(styles$3.clearIcon, _defineProperty({}, styles$3.hideIcon, moduleName.length <= 0))
    }, "\u24E7")))), y("tr", null, y("td", null, y("span", {
      id: "override-url-label"
    }, "Override URL:")), y("td", {
      style: {
        position: "relative"
      }
    }, y("input", {
      type: "text",
      value: overrideUrl,
      "aria-labelledby": "override-url-label",
      tabIndex: 2,
      onInput: function onInput(evt) {
        return setOverrideUrl(evt.target.value);
      }
    }), y("div", {
      role: "button",
      tabIndex: 4,
      className: styles$3.imoClearInput,
      onClick: clearOverrideUrlInput
    }, y("div", {
      className: classnames(styles$3.clearIcon, _defineProperty({}, styles$3.hideIcon, overrideUrl.length <= 0))
    }, "\u24E7")))), portRegex.test(overrideUrl) && y("tr", null, y("td", null, "Derived url:"), y("td", null, getDerivedUrl())))), y("div", {
      className: styles$3.imoDialogActions
    }, y("button", {
      type: "button",
      tabIndex: 5,
      onClick: removeDialog,
      className: styles$3.cancelButton
    }, "Cancel"), isCanDisableOverride && y("button", {
      type: "button",
      onClick: function onClick() {
        disableOverride(module.moduleName);
        removeDialog();
      },
      tabIndex: 6,
      className: styles$3.disableOverrideButton
    }, "Disable Override"), isCanEnableOverride && y("button", {
      type: "button",
      onClick: function onClick() {
        enableOverride(module.moduleName);
        removeDialog();
      },
      tabIndex: 6,
      className: styles$3.enableOverrideButton
    }, "Enable Override"), y("button", {
      type: "submit",
      tabIndex: 7,
      className: classnames((_cln4 = {}, _defineProperty(_cln4, styles$3.imoOverridden, overrideUrl.length > 0), _defineProperty(_cln4, styles$3.imoDefault, overrideUrl.length <= 0), _cln4))
    }, overrideUrl ? "Apply override" : "Reset to default")))));
  };

  var css_248z$2 = ".index-module_imoAddNew__1ydTU {\n  margin-left: 16px;\n}\n.index-module_wrapper__3jI2e {\n  display: flex;\n}\n";
  var styles$2 = {"imoAddNew":"index-module_imoAddNew__1ydTU","wrapper":"index-module_wrapper__3jI2e"};
  styleInject(css_248z$2);

  var PopupActions = function PopupActions() {
    var addNewModule = function addNewModule() {
      var dialogContainer = document.createElement("div");
      document.body.appendChild(dialogContainer);
      B$1(y(ModuleDialog, {
        removeDialog: function removeDialog() {
          dialogContainer.remove();
          B$1(null, dialogContainer);
        },
        isNew: true,
        title: 'New module'
      }), dialogContainer);
    };
    var resetAllOverrides = function resetAllOverrides() {
      resetOverrides();
    };
    return y("div", {
      className: styles$2.wrapper
    }, y("div", {
      className: styles$2.imoAddNew
    }, y("button", {
      onClick: addNewModule
    }, "Add new module")), y("div", {
      className: styles$2.imoAddNew
    }, y("button", {
      onClick: resetAllOverrides
    }, "Reset all overrides")));
  };

  var css_248z$1 = ".index-module_imoListContainer__2iGOn {\n  font-family: sans-serif;\n  box-sizing: border-box;\n}\n.index-module_imoTableHeaderActions__1pLUs {\n  display: flex;\n  align-items: center;\n}\n.index-module_imoListSearch__4Ufoh {\n  font-size: 14px;\n  height: 27px;\n  line-height: 27px;\n  line-height: 22px;\n  border: none;\n  padding: 5px;\n}\n.index-module_imoOverridesTable__tdGb5 {\n  border-collapse: collapse;\n  margin-top: 32px;\n}\n.index-module_imoOverridesTable__tdGb5 tr td:first-child {\n  display: flex;\n  align-items: center;\n  padding-right: 32px;\n  position: relative;\n}\n.index-module_imoOverridesTable__tdGb5 tbody tr:hover {\n  cursor: pointer;\n  background-color: #404040;\n}\n.index-module_imoOverridesTable__tdGb5 td,\n.index-module_imoOverridesTable__tdGb5 th {\n  line-height: 18px;\n  padding: 16px;\n  border: 1px solid white;\n}\n.index-module_imoStatus__1NOxN {\n  height: 16px;\n  width: 16px;\n  border-radius: 8px;\n  border: 1px solid white;\n  margin-right: 8px;\n}\n.index-module_imoDefaultModule__3-bBd {\n  background-color: lightgoldenrodyellow;\n}\n.index-module_imoCurrentOverride__3iNSy {\n  background-color: salmon;\n}\n.index-module_imoDisabledOverride__3o0Sr {\n  background-color: lightblue;\n}\n";
  var styles$1 = {"imoListContainer":"index-module_imoListContainer__2iGOn","imoTableHeaderActions":"index-module_imoTableHeaderActions__1pLUs","imoListSearch":"index-module_imoListSearch__4Ufoh","imoOverridesTable":"index-module_imoOverridesTable__tdGb5","imoStatus":"index-module_imoStatus__1NOxN","imoDefaultModule":"index-module_imoDefaultModule__3-bBd","imoCurrentOverride":"index-module_imoCurrentOverride__3iNSy","imoDisabledOverride":"index-module_imoDisabledOverride__3o0Sr"};
  styleInject(css_248z$1);

  // 获取module的url
  var toUrlStr = function toUrlStr(mod) {
    return mod.overrideUrl || mod.defaultUrl;
  };
  // 通过module的url构造出完整的地址
  var toURL = function toURL(urlStr) {
    try {
      return new URL(urlStr, location.origin + "/");
    } catch (_a) {
      return null;
    }
  };
  // 获取module的url对应的host信息
  var toDomain = function toDomain(mod) {
    var urlStr = toUrlStr(mod);
    var url = toURL(urlStr);
    return url ? url.host : urlStr;
  };
  //按照module的名称进行排序
  var sorter = function sorter(first, second) {
    if (first.moduleName > second.moduleName) {
      return 1;
    }
    if (first.moduleName < second.moduleName) {
      return -1;
    }
    return 0;
  };
  var toFileName = function toFileName(mod) {
    var urlStr = toUrlStr(mod);
    var url = toURL(urlStr);
    return url ? url.pathname.slice(url.pathname.lastIndexOf("/") + 1) : urlStr;
  };
  // 根据searchName对module进行过滤
  var filterModuleNames = function filterModuleNames(moduleName, searchName) {
    return searchName.trim().length > 0 ? includes(moduleName, searchName) : true;
  };
  // 获取被覆盖的module信息
  var getOverriddenModulesInfo = function getOverriddenModulesInfo(notOverriddenMap, searchName) {
    var overrideMap = getOverrideMap(true).imports;
    var disabledModules = getDisabledOverrides();
    var notOverriddenKeys = Object.keys(notOverriddenMap.imports);
    var overriddenModules = [];
    notOverriddenKeys.filter(function (moduleName) {
      return filterModuleNames(moduleName, searchName);
    }).forEach(function (moduleName) {
      var mod = {
        moduleName: moduleName,
        defaultUrl: notOverriddenMap.imports[moduleName] || '',
        overrideUrl: overrideMap[moduleName] || '',
        disabled: includes(disabledModules, moduleName)
      };
      if (!mod.disabled && overrideMap[moduleName]) {
        overriddenModules.push(mod);
      }
    });
    Object.keys(overrideMap).filter(function (moduleName) {
      return filterModuleNames(moduleName, searchName);
    }).forEach(function (moduleName) {
      if (!includes(notOverriddenKeys, moduleName)) {
        var mod = {
          moduleName: moduleName,
          defaultUrl: '',
          overrideUrl: overrideMap[moduleName] || '',
          disabled: includes(disabledModules, moduleName)
        };
        if (!mod.disabled) {
          overriddenModules.push(mod);
        }
      }
    });
    overriddenModules.sort(sorter);
    return overriddenModules;
  };
  // 获取置为disabled的module信息
  var getDisabledOverridesInfo = function getDisabledOverridesInfo(notOverriddenMap, searchName) {
    var overrideMap = getOverrideMap(true).imports;
    var disabledModules = getDisabledOverrides();
    var notOverriddenKeys = Object.keys(notOverriddenMap.imports);
    var disabledOverrides = [];
    notOverriddenKeys.filter(function (moduleName) {
      return filterModuleNames(moduleName, searchName);
    }).forEach(function (moduleName) {
      var mod = {
        moduleName: moduleName,
        defaultUrl: notOverriddenMap.imports[moduleName] || '',
        overrideUrl: overrideMap[moduleName] || '',
        disabled: includes(disabledModules, moduleName)
      };
      if (mod.disabled) {
        disabledOverrides.push(mod);
      }
    });
    Object.keys(overrideMap).filter(function (moduleName) {
      return filterModuleNames(moduleName, searchName);
    }).forEach(function (moduleName) {
      if (!includes(notOverriddenKeys, moduleName)) {
        var mod = {
          moduleName: moduleName,
          defaultUrl: '',
          overrideUrl: overrideMap[moduleName] || '',
          disabled: includes(disabledModules, moduleName)
        };
        if (mod.disabled) {
          disabledOverrides.push(mod);
        }
      }
    });
    disabledOverrides.sort(sorter);
    return disabledOverrides;
  };
  // 获取默认的module信息
  var getDefaultModulesInfo = function getDefaultModulesInfo(notOverriddenMap, searchName) {
    var overrideMap = getOverrideMap(true).imports;
    var disabledModules = getDisabledOverrides();
    var notOverriddenKeys = Object.keys(notOverriddenMap.imports);
    var defaultModules = [];
    notOverriddenKeys.filter(function (moduleName) {
      return filterModuleNames(moduleName, searchName);
    }).forEach(function (moduleName) {
      var mod = {
        moduleName: moduleName,
        defaultUrl: notOverriddenMap.imports[moduleName] || '',
        overrideUrl: overrideMap[moduleName] || '',
        disabled: includes(disabledModules, moduleName)
      };
      if (!mod.disabled && !overrideMap[moduleName]) {
        defaultModules.push(mod);
      }
    });
    defaultModules.sort(sorter);
    return defaultModules;
  };

  var ModuleMapList = function ModuleMapList() {
    var _useState = h(function () {
        return createEmptyModuleMap();
      }),
      _useState2 = _slicedToArray(_useState, 2),
      notOverriddenMap = _useState2[0],
      setNotOverriddenMap = _useState2[1];
    var _useState3 = h(''),
      _useState4 = _slicedToArray(_useState3, 2),
      searchName = _useState4[0],
      setSearchName = _useState4[1];
    var inputRef = _(null);
    var forceUpdate = useUpdate();
    p(function () {
      getDefaultMap().then(function (notOverriddenMap) {
        setNotOverriddenMap(notOverriddenMap);
      });
      fireChangedEvent();
    }, []);
    p(function () {
      var updateFn = function updateFn() {
        forceUpdate();
      };
      window.addEventListener("import-map-overrides:change", updateFn);
      return function () {
        window.removeEventListener("import-map-overrides:change", updateFn);
      };
    }, []);
    var defaultModules = getDefaultModulesInfo(notOverriddenMap, searchName);
    var overriddenModules = getOverriddenModulesInfo(notOverriddenMap, searchName);
    var disabledOverrides = getDisabledOverridesInfo(notOverriddenMap, searchName);
    var updateModuleInfo = function updateModuleInfo(mod) {
      var dialogContainer = document.createElement("div");
      document.body.appendChild(dialogContainer);
      B$1(y(ModuleDialog, {
        module: mod,
        removeDialog: function removeDialog() {
          dialogContainer.remove();
          B$1(null, dialogContainer);
        },
        title: mod.moduleName
      }), dialogContainer);
    };
    return y("div", {
      className: styles$1.imoListContainer
    }, y("div", {
      className: styles$1.imoTableHeaderActions
    }, y("input", {
      className: styles$1.imoListSearch,
      "aria-label": "Search modules",
      placeholder: "Search modules",
      value: searchName,
      onInput: function onInput(evt) {
        var _a;
        return setSearchName(((_a = evt === null || evt === void 0 ? void 0 : evt.target) === null || _a === void 0 ? void 0 : _a.value) || '');
      },
      ref: inputRef
    }), y(PopupActions, null)), y("table", {
      className: styles$1.imoOverridesTable
    }, y("thead", null, y("tr", null, y("th", null, "Module Status"), y("th", null, "Module Name"), y("th", null, "Domain"), y("th", null, "Filename"))), y("tbody", null, disabledOverrides.map(function (mod) {
      return y("tr", {
        role: "button",
        tabIndex: 0,
        onClick: function onClick() {
          return updateModuleInfo(mod);
        },
        key: mod.moduleName
      }, y("td", null, y("div", {
        className: classnames(styles$1.imoStatus, styles$1.imoDisabledOverride)
      }), y("div", null, "Override disabled")), y("td", null, mod.moduleName), y("td", null, toDomain(mod)), y("td", null, toFileName(mod)));
    }), overriddenModules.map(function (mod) {
      return y("tr", {
        role: "button",
        tabIndex: 0,
        key: mod.moduleName,
        onClick: function onClick() {
          return updateModuleInfo(mod);
        }
      }, y("td", null, y("div", {
        className: classnames(styles$1.imoStatus, styles$1.imoCurrentOverride)
      }), y("div", null, "Inline Override")), y("td", null, mod.moduleName), y("td", null, toDomain(mod)), y("td", null, toFileName(mod)));
    }), defaultModules.map(function (mod) {
      return y("tr", {
        role: "button",
        tabIndex: 0,
        key: mod.moduleName,
        onClick: function onClick() {
          return updateModuleInfo(mod);
        }
      }, y("td", null, y("div", {
        className: classnames(styles$1.imoStatus, styles$1.imoDefaultModule)
      }), y("div", null, "Default")), y("td", null, mod.moduleName), y("td", null, toDomain(mod)), y("td", null, toFileName(mod)));
    }))));
  };

  var css_248z = ".index-module_imoPopup__12eFm {\n  box-sizing: border-box;\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  height: 50%;\n  z-index: 10000;\n  background-color: black;\n  color: white;\n  font-family: sans-serif;\n  padding: 24px;\n  overflow-y: auto;\n}\n.index-module_imoPopup__12eFm a:visited {\n  color: white;\n}\n.index-module_imoPopup__12eFm a {\n  color: white;\n}\n.index-module_imoPopup__12eFm .index-module_imoModuleDialog__Zh0kZ {\n  left: calc(50% - 200px);\n}\n.index-module_imoHeader__2v2Sz {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n}\n.index-module_imoUnstyled__KIHPE {\n  border: none;\n  padding: 0;\n  width: auto;\n  overflow: visible;\n  background: transparent;\n  color: inherit;\n  font: inherit;\n  line-height: normal;\n  cursor: pointer;\n  -webkit-font-smoothing: inherit;\n  -moz-osx-font-smoothing: inherit;\n  -webkit-appearance: none;\n}\n.index-module_imoUnstyled__KIHPE::-moz-focus-inner {\n  border: 0;\n  padding: 0;\n}\n";
  var styles = {"imoPopup":"index-module_imoPopup__12eFm","imoModuleDialog":"index-module_imoModuleDialog__Zh0kZ","imoHeader":"index-module_imoHeader__2v2Sz","imoUnstyled":"index-module_imoUnstyled__KIHPE"};
  styleInject(css_248z);

  var PopupComponent = function PopupComponent(props) {
    var close = props.close;
    return y("div", {
      className: styles.imoPopup
    }, y("div", {
      className: styles.imoHeader
    }, y("div", null, y("h1", null, "Module Map Overrides"), y("p", null, "This developer tool allows you to view and override your Module maps. Start by clicking on a module that you'd like to override.", " ", y("a", {
      target: "_blank",
      href: "https://github.com/joeldenning/import-map-overrides"
    }, "See documentation for more info"), ".")), y("button", {
      className: styles.imoUnstyled,
      onClick: close
    }, "\u24E7")), y(ModuleMapList, null));
  };

  var FullUi = function FullUi() {
    var _useState = h(false),
      _useState2 = _slicedToArray(_useState, 2),
      showingPopup = _useState2[0],
      setShowingPopup = _useState2[1];
    // 强制组件刷新
    var forceUpdate = useUpdate();
    // 获取被覆盖的module信息
    var overrideMap = getOverrideMap().imports;
    p(function () {
      var updateFn = function updateFn() {
        forceUpdate();
      };
      window.addEventListener("import-map-overrides:change", updateFn);
      return function () {
        window.removeEventListener("import-map-overrides:change", updateFn);
      };
    }, []);
    return y("div", null, y("button", {
      onClick: function onClick() {
        return setShowingPopup(!showingPopup);
      },
      className: classnames(styles$4.imoUnstyled, styles$4.imoTrigger, _defineProperty({}, styles$4.imoCurrentOverride, Object.keys(overrideMap).length > 0))
    }, "{\xB7\xB7\xB7}"), showingPopup && y(PopupComponent, {
      close: function close() {
        return setShowingPopup(!showingPopup);
      }
    }));
  };

  if (window.customElements) {
    window.customElements.define("import-map-overrides-full", preactCustomElement(FullUi, ["show-when-local-storage"]));
  }
  function preactCustomElement(Comp) {
    var observedAttributes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
    return /*#__PURE__*/function (_HTMLElement) {
      _inherits(PreactCustomElement, _HTMLElement);
      var _super = _createSuper(PreactCustomElement);
      function PreactCustomElement() {
        _classCallCheck(this, PreactCustomElement);
        return _super.apply(this, arguments);
      }
      _createClass(PreactCustomElement, [{
        key: "connectedCallback",
        value: function connectedCallback() {
          this.renderWithPreact();
        }
      }, {
        key: "disconnectedCallback",
        value: function disconnectedCallback() {
          B$1(null, this);
          this.renderedEl = null;
        }
      }, {
        key: "attributeChangedCallback",
        value: function attributeChangedCallback() {
          this.renderWithPreact();
        }
      }, {
        key: "renderWithPreact",
        value: function renderWithPreact() {
          this.renderedEl = B$1(y(Comp, {
            customElement: this
          }), this, this.renderedEl);
        }
      }], [{
        key: "observedAttributes",
        get: function get() {
          return observedAttributes;
        }
      }]);
      return PreactCustomElement;
    }( /*#__PURE__*/_wrapNativeSuper(HTMLElement));
  }

})();
//# sourceMappingURL=index.js.map
