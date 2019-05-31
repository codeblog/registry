(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('@emotion/core'), require('react')) :
  typeof define === 'function' && define.amd ? define(['@emotion/core', 'react'], factory) :
  (global = global || self, global['@jarred/tweet'] = factory(global['@emotion/core'], global.react));
}(this, function (core, React) { 'use strict';

  React = React && React.hasOwnProperty('default') ? React['default'] : React;

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
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  function _defineProperty(obj, key, value) {
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
    if (superClass) _setPrototypeOf(subClass, superClass);
  }

  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
  }

  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };

    return _setPrototypeOf(o, p);
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
    }

    return _assertThisInitialized(self);
  }

  function createCommonjsModule(fn, module) {
  	return module = { exports: {} }, fn(module, module.exports), module.exports;
  }

  var script = createCommonjsModule(function (module) {
    /*!
      * $script.js JS loader & dependency manager
      * https://github.com/ded/script.js
      * (c) Dustin Diaz 2014 | License MIT
      */
    (function (name, definition) {
      if (module.exports) module.exports = definition();else this[name] = definition();
    })('$script', function () {
      var doc = document,
          head = doc.getElementsByTagName('head')[0],
          f = false,
          push = 'push',
          readyState = 'readyState',
          onreadystatechange = 'onreadystatechange',
          list = {},
          delay = {},
          scripts = {},
          scriptpath,
          urlArgs;

      function every(ar, fn) {
        for (var i = 0, j = ar.length; i < j; ++i) {
          if (!fn(ar[i])) return f;
        }

        return 1;
      }

      function each(ar, fn) {
        every(ar, function (el) {
          fn(el);
          return 1;
        });
      }

      function $script(paths, idOrDone, optDone) {
        paths = paths[push] ? paths : [paths];
        var idOrDoneIsDone = idOrDone && idOrDone.call,
            done = idOrDoneIsDone ? idOrDone : optDone,
            id = idOrDoneIsDone ? paths.join('') : idOrDone,
            queue = paths.length;

        function loopFn(item) {
          return item.call ? item() : list[item];
        }

        function callback() {
          if (! --queue) {
            list[id] = 1;
            done && done();

            for (var dset in delay) {
              every(dset.split('|'), loopFn) && !each(delay[dset], loopFn) && (delay[dset] = []);
            }
          }
        }

        setTimeout(function () {
          each(paths, function loading(path, force) {
            if (path === null) return callback();

            if (!force && !/^https?:\/\//.test(path) && scriptpath) {
              path = path.indexOf('.js') === -1 ? scriptpath + path + '.js' : scriptpath + path;
            }

            if (scripts[path]) {
              return scripts[path] == 2 ? callback() : setTimeout(function () {
                loading(path, true);
              }, 0);
            }

            scripts[path] = 1;
            create(path, callback);
          });
        }, 0);
        return $script;
      }

      function create(path, fn) {
        var el = doc.createElement('script'),
            loaded;

        el.onload = el.onerror = el[onreadystatechange] = function () {
          if (el[readyState] && !/^c|loade/.test(el[readyState]) || loaded) return;
          el.onload = el[onreadystatechange] = null;
          loaded = 1;
          scripts[path] = 2;
          fn();
        };

        el.async = 1;
        el.src = urlArgs ? path + (path.indexOf('?') === -1 ? '?' : '&') + urlArgs : path;
        head.insertBefore(el, head.lastChild);
      }

      $script.get = create;

      $script.order = function (scripts, id, done) {
        (function callback(s) {
          s = scripts.shift();
          !scripts.length ? $script(s, id, done) : $script(s, callback);
        })();
      };

      $script.path = function (p) {
        scriptpath = p;
      };

      $script.urlArgs = function (str) {
        urlArgs = str;
      };

      $script.ready = function (deps, ready, req) {
        deps = deps[push] ? deps : [deps];
        var missing = [];
        !each(deps, function (dep) {
          list[dep] || missing[push](dep);
        }) && every(deps, function (dep) {
          return list[dep];
        }) ? ready() : !function (key) {
          delay[key] = delay[key] || [];
          delay[key][push](ready);
          req && req(missing);
        }(deps.join('|'));
        return $script;
      };

      $script.done = function (idOrDone) {
        $script([null], idOrDone);
      };

      return $script;
    });
  });

  // This example will render text in uppercase. SHOUTING ON THE INTERNET

  var Tweet =
  /*#__PURE__*/
  function (_React$Component) {
    _inherits(Tweet, _React$Component);

    function Tweet(props) {
      var _this;

      _classCallCheck(this, Tweet);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(Tweet).call(this, props));

      _defineProperty(_assertThisInitialized(_this), "renderTweet", function () {
        if (!_this.mounted) return;

        if (!window.twttr) {
          // tslint:disable-next-line
          console.error("Failed to load Twitter lib.");
          return;
        }

        if (_this.containerRef && _this.containerRef.childElementCount === 1) {
          window.twttr.widgets.createTweet(_this.props.id, _this.containerRef);
        }
      });

      _defineProperty(_assertThisInitialized(_this), "setContainerRef", function (containerRef) {
        _this.containerRef = containerRef;

        if (_this.props.id && containerRef) {
          _this.renderTweet();
        }
      });

      _this.mounted = true;
      return _this;
    }

    _createClass(Tweet, [{
      key: "shouldComponentUpdate",
      value: function shouldComponentUpdate(props) {
        return this.props.id !== props.id;
      }
    }, {
      key: "componentDidMount",
      value: function componentDidMount() {
        var _this2 = this;

        if (window.twttr) {
          this.renderTweet();
        } else {
          script("https://platform.twitter.com/widgets.js", "tw", function () {
            return _this2.renderTweet();
          });
        }
      }
    }, {
      key: "componentDidUpdate",
      value: function componentDidUpdate(prevProps) {
        if (prevProps.id !== this.props.id) {
          this.renderTweet();
        }
      }
    }, {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        this.mounted = false;
      }
    }, {
      key: "render",
      value: function render() {
        return core.jsx("span", {
          ref: this.setContainerRef
        });
      }
    }]);

    return Tweet;
  }(React.Component);

  var _ref = {
    name: "1tx5fd6",
    styles: "opacity:0;height:0;visibility:hidden;position:absolute;"
  };

  var TweetEmbed =
  /*#__PURE__*/
  function (_React$Component2) {
    _inherits(TweetEmbed, _React$Component2);

    function TweetEmbed() {
      _classCallCheck(this, TweetEmbed);

      return _possibleConstructorReturn(this, _getPrototypeOf(TweetEmbed).apply(this, arguments));
    }

    _createClass(TweetEmbed, [{
      key: "render",
      value: function render() {
        var tweetID = this.props.url.split("status/")[1];
        return core.jsx(React.Fragment, null, core.jsx(Tweet, {
          key: tweetID,
          id: tweetID
        }), core.jsx("span", {
          css: _ref
        }, this.props.children, ">"));
      }
    }]);

    return TweetEmbed;
  }(React.Component); // If you want to...

  return TweetEmbed;

}));
