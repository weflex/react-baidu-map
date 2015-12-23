"use strict";
import React from 'react';

export class BaiduMap extends React.Component {
  constructor(props) {
    super(props);
    this.id = props.id || 'allmap';
  }
  componentDidMount() {
    this._map = new BMap.Map(this.id);
    this._map.centerAndZoom(new BMap.Point(116.404, 39.915), 11);
    this._local = new BMap.LocalSearch(this._map, {
      renderOptions: { map: this._map },
      onInfoHtmlSet: poi => {
        if (typeof this.props.onSelect === 'function') {
          this.props.onSelect(poi.marker.getPosition());
        }
      }
    });
  }
  search(text) {
    this._local.search(text);
  }
  render() {
    return <div id={this.id} {...this.props}></div>;
  }
}