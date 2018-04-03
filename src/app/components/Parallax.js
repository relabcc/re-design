import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { addEventListener } from 'consolidated-events';
import * as Rematrix from 'rematrix';
import entries from 'lodash/entries';

function isDOMElement(Component) {
  return (typeof Component.type === 'string');
}

const isBrowser = typeof window === 'object';

const partial = (m) => (d) => m * d;

const arrayAdd = (a, b) => a.map((av, index) => av + b[index]);
const arraySub = (a, b) => a.map((av, index) => av - b[index]);

class Parallax extends PureComponent {
  constructor(props) {
    super(props);
    const windowHeight = isBrowser ? window.innerHeight : 0;

    this.offsetStart = windowHeight;
    this.length = this.props.length || windowHeight;
  }

  componentDidMount() {
    this.setMatixTarget();
    this.unsubscribe = addEventListener(document, 'scroll', this.handleOnScroll());
    this.handleOnScroll(true)();
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  setTransform = (matirx) => {
    this.transformString = `matrix3d(${arrayAdd(matirx, this.identity).join()})`;
    requestAnimationFrame(() => {
      this.element.style.webkitTransform = this.transformString;
      this.element.style.mozTransform = this.transformString;
      this.element.style.msTransform = this.transformString;
      this.element.style.oTransform = this.transformString;
      this.element.style.Transform = this.transformString;
    });
  }

  setMatixTarget = () => {
    this.identity = Rematrix.identity();
    const transforms = entries(this.props.transform).map(([key, value]) => {
      const T = Rematrix[key];
      if (!T) return null;
      return T(value);
    }).filter(Boolean);
    this.matixTarget = arraySub(transforms.length ? transforms.reduce(Rematrix.multiply) : this.identity, this.identity);
  }

  handleOnScroll = (intial) => () => {
    this.elemDimension = this.element.getBoundingClientRect();
    this.curPosition = this.elemDimension.top;
    if (intial && (this.curPosition + window.scrollY) <= window.innerHeight) this.offsetStart = this.curPosition + window.scrollY;
    this.offset = Math.max(this.offsetStart - this.curPosition, 0);

    this.updateTransform();
  }

  updateTransform = () => {
    if (this.offset < 0) return;
    this.transformProgress = this.offset > this.length ? 1 : this.offset / this.length;
    if (this.transformProgress === this.prevTransformProgres) return;
    this.prevTransformProgres = this.transformProgress;
    this.setTransform(this.matixTarget.map(partial(this.transformProgress)));
  }

  refElement = (ref) => {
    this.element = ref;
  }

  render() {
    const { children } = this.props;

    if (!children) {
      return <span ref={this.refElement} style={{ fontSize: 0 }} />;
    }

    if (isDOMElement(children)) {
      const ref = (node) => {
        this.refElement(node);
        if (children.ref) {
          children.ref(node);
        }
      };

      return React.cloneElement(children, { ref });
    }

    return React.cloneElement(children, { innerRef: this.refElement });
  }
}

Parallax.propTypes = {
  children: PropTypes.node,
  length: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]),
  transform: PropTypes.shape(),
};

export default Parallax;
