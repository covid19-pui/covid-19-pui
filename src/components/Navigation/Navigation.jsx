import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import tocbot from 'tocbot';

const useStyles = makeStyles({
  toc: {
    background: '#d8d8d8',
    height: '100vh',
    position: 'sticky',
    top: '0',
    paddingRight: '1em',
    '@global': {
      ol: {
        listStyle: 'none',
        fontFamily: '"Avenir Next", "Segoe UI", "Roboto", "Helvetica Neue", sans-serif',
        fontWeight: 600,
        padding: '1.5em',
        margin: '0',
        textTransform: 'capitalize',
        '@global': {
          li: {
            padding: '0.25em 0',
            borderLeft: '2px solid #eee',
            paddingLeft: '1em',

            '&.is-active-li': {
              borderColor: '#A6354C',
              fontWeight: 700
            }
          },
          a: {
            color: '#404040',
            textDecoration: 'none'
          }
        }
      }
    }
  }
});

function Navigation() {
  const styles = useStyles();
  return <div className={clsx('toc', styles.toc)}></div>;
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
