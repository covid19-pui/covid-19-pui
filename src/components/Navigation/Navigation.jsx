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
    paddingTop: '0.5em',
    '@global': {
      ol: {
        listStyle: 'none',
        fontFamily: 'Avenir Next',
        fontWeight: 500,
        '@global li': {
          marginBottom: '0.25em'
        },
        '@global a': {
          color: '#404040',
          textDecoration: 'none'
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
    headingSelector: '.tocHeading'
  });
}

function cleanUpTOC() {
  tocbot.destroy();
}

export default Navigation;
export { updateTOC, cleanUpTOC };
