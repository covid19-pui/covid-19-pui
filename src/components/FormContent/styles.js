import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(
  theme => {
    return {
      root: {
        padding: theme.variables.spacing.globalPadding
      }
    };
  },
  { name: 'FormContent' }
);
