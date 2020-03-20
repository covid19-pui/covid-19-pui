import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(
  theme => {
    return {
      toc: {
        background: theme.palette.common.gray,
        height: '100vh',
        position: 'sticky',
        top: '0',
        paddingRight: '1em',
        width: theme.variables.spacing.navWidth,
        float: 'left',
        '@global': {
          ol: {
            listStyle: 'none',
            fontFamily: theme.typography.primary.fontFamily,
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
                  borderColor: theme.palette.common.red,
                  fontWeight: 700
                }
              },
              a: {
                color: theme.palette.text.primary,
                textDecoration: 'none'
              }
            }
          }
        }
      },
      makeSticky: {
        position: 'fixed',
        top: '0'
      }
    };
  },
  { name: 'Navigation' }
);
