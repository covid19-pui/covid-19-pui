import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(
  theme => ({
    root: {
      padding: theme.variables.spacing.globalPadding
    },
    'submit-button': {
      padding: '3em'
    },
    'fine-print': {
      fontFamily: theme.typography.primary.fontFamily,
      color: theme.palette.text.primary,
      fontSize: '16px'
    }
  }),
  { name: 'FormContent' }
);
