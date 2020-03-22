import React, { useState, useCallback } from 'react';
import clsx from 'clsx';

import useStyles from './styles';

function Navigation() {
  const styles = useStyles();
  const [classNames, setClassNames] = useState(clsx('toc', styles.toc));

  const scrollListener = useCallback(
    element => {
      const distanceToTop = element?.getBoundingClientRect().top;
      const elementListener = () => {
        distanceToTop - document.documentElement.scrollTop <= 0
          ? setClassNames(clsx('toc', styles.toc, styles.makeSticky))
          : setClassNames(clsx('toc', styles.toc));
      };
      window.addEventListener('scroll', elementListener);
      return () => {
        window.removeEventListener('scroll', elementListener);
      };
    },
    [styles]
  );

  return <div ref={scrollListener} className={classNames}></div>;
}

export default Navigation;
