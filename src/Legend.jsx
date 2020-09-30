import React from 'react';
import PropTypes from 'prop-types';
import createClass from 'create-react-class';

import BemMixin from './utils/BemMixin';

import PureRenderMixin from 'react-addons-pure-render-mixin';


const getItems = (props) => {
  const source = props.customStateDefinitions || props.stateDefinitions;

  return Object.keys(source).map((key) => {
    const { label, color } = source[key];

    return (
      <li className={this.cx({element: 'LegendItem'})} key={key}>
        <span className={this.cx({element: 'LegendItemColor'})} style={{ backgroundColor: color }} />
        <span className={this.cx({element: 'LegendItemLabel'})}>{label}</span>
      </li>
    );
  });
};


const Legend = createClass({
  mixins: [BemMixin, PureRenderMixin],
  displayName: "Legend",

  propTypes: {
    selectedLabel: PropTypes.string.isRequired,
    stateDefinitions: PropTypes.object.isRequired,
    customStateDefinitions: PropTypes.object,
  },

  render() {
    let { selectedLabel } = this.props;
    const items = getItems(this.props);

    return (
      <ul className={this.cx()}>
        {selectedLabel && <li className={this.cx({element: 'LegendItem'})}>
          <span className={this.cx({element: 'LegendItemColor', modifiers: {'selection': true}})} />
          <span className={this.cx({element: 'LegendItemLabel'})}>{selectedLabel}</span>
        </li>}
        {items}
      </ul>
    );
  },
});

export default Legend;
