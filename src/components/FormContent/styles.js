import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(
  theme => ({
    root: {
      padding: theme.variables.spacing.globalPadding
    },
    'submit-button': {
      padding: '3em'
    }
  }),
  { name: 'FormContent' }
);
