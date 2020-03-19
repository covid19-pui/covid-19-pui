import React, { useState, useCallback } from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import tocbot from 'tocbot';

const useStyles = makeStyles({
  toc: {
    background: '#d8d8d8',
    height: '100vh',
    position: 'sticky',
    top: '0',
    paddingTop: '0.5em',
    paddingRight: '1em',
    '@global': {
      ol: {
        listStyle: 'none',
        fontFamily: '"Avenir Next", "Segoe UI", "Roboto", "Helvetica Neue", sans-serif',
        fontWeight: 500,
        paddingLeft: '1.5em',
        textTransform: 'capitalize',
        '@global': {
          li: {
            marginBottom: '0.25em'
          },
          a: {
            color: '#404040',
            textDecoration: 'none'
          }
        }
      },
      '.activeHeading': {
        borderLeft: '0.1em solid',
        paddingLeft: '0.5em'
      }
    }
  }
});

function Navigation() {
  const styles = useStyles();
  const [classNames, setClassNames] = useState(clsx('toc', styles.toc));
  const scrollListener = useCallback(
    element => {
      const elementListener = () => {
        const top = element.getBoundingClientRect().top;
        top <= 0
          ? setClassNames(clsx('toc', styles.toc, 'makeSticky'))
          : setClassNames(clsx('toc', styles.toc));
      };
      console.log('asdf');
      console.log(element.getBoundingClientRect().top);
      window.addEventListener('scroll', elementListener);
      return () => {
        window.removeEventListener('scroll', elementListener);
      };
    },
    [styles.toc]
  );
  return <div ref={scrollListener} className={classNames}></div>;
}

function updateTOC() {
  // Initialize Tocbot
  tocbot.init({
    tocSelector: '.toc',
    contentSelector: '.tocSection',
    headingSelector: '.tocHeading',
    activeLinkClass: 'activeHeading'
  });
}

function cleanUpTOC() {
  tocbot.destroy();
}

export default Navigation;
export { updateTOC, cleanUpTOC };
