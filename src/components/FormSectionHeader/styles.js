import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(
  theme => {
    return {
      titleBox: {
        fontFamily: theme.typography.primary.fontFamily,
        fontWeight: 500,
        backgroundColor: theme.palette.common.black,
        color: theme.palette.text.secondary,
        border: `3px solid ${theme.palette.common.black}`,
        letterSpacing: 1,
        display: 'inline-block',
        padding: '0 5px',
        textTransform: 'uppercase',
        marginBottom: '1em'
      },
      line: {
        display: 'inline-block',
        border: `1px solid ${theme.palette.common.black}`,
        width: '100%'
      }
    };
  },
  { name: 'FormSectionHeader' }
);
