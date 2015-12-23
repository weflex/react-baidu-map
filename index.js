"use strict";

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');

/**
 * @class BaiduMap
 */

var BaiduMap = (function (_React$Component) {
  _inherits(BaiduMap, _React$Component);

  /**
   * @constructor
   * @id {String} the id to create DOM id
   */

  function BaiduMap(props) {
    _classCallCheck(this, BaiduMap);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(BaiduMap).call(this, props));

    _this.id = props.id || 'allmap';
    return _this;
  }
  /**
   * @method componentDidMount
   */

  _createClass(BaiduMap, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      this._map = new BMap.Map(this.id);
      this._map.centerAndZoom(new BMap.Point(116.404, 39.915), 11);
      this._local = new BMap.LocalSearch(this._map, {
        renderOptions: { map: this._map },
        onInfoHtmlSet: function onInfoHtmlSet(poi) {
          if (typeof _this2.props.onSelect === 'function') {
            _this2.props.onSelect(poi.marker.getPosition());
          }
        }
      });
    }
    /**
     * @method render
     */

  }, {
    key: 'render',
    value: function render() {
      return React.createElement('div', _extends({ id: this.id }, this.props));
    }
    /**
     * @method search
     * @param {String} text - the search keyword
     */

  }, {
    key: 'search',
    value: function search(text) {
      this._local.search(text);
    }
  }]);

  return BaiduMap;
})(React.Component);

BaiduMap.propTypes = {
  /**
   * the id to create DOM id
   */
  id: React.PropTypes.string,
  /**
   * this function will be fired when user click a marker and the info bubble is shown
   */
  onSelect: React.PropTypes.func
};

exports.default = BaiduMap;
