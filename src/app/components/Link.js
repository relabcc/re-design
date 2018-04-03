import React from 'react';
import Link from 'next/link';

export default ({
  children,
  className,
  style,
  ...props
}) => (
  <Link {...props}>
    <a className={className} style={style}>
      {children}
    </a>
  </Link>
);
