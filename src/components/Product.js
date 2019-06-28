// Code Product Component Here
import React from 'react';
import PropTypes from 'prop-types';

export default class Product extends React.Component
{
  static defaultProps = {
    hasWatermark: false
  };

  static propTypes = {
    name: PropTypes.string.isRequired,
    producer: PropTypes.string,
    hasWatermark: PropTypes.bool,
    color: PropTypes.oneOf(['white','eggshell-white','salmon']).isRequired,
    weight: function(props,propName,componentName){
        let value = props[propName];
        if (typeof value !== "number") {
          return new Error('The #{value} prop validator is accepting types other than a number.');
        }
        if (!(propName in props)) {
          return new Error('#{props[propName]} is required');
        }
        if (value < 80 || value > 300) {
          return new Error('#{props[propName]} is not in range between 80 and 300');
        }
      }
  };

  render(){
    return(<div>
      <p>{this.props.name}</p>
      <p>{this.props.producer}</p>
      <p>{this.props.hasWatermark}</p>
      <p>{this.props.color}</p>
      <p>{this.props.weight}</p>
      </div>)
  }
}
