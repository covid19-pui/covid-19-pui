import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(
  theme => {
    return {
      content: {
        marginLeft: theme.variables.spacing.navWidth
      }
    };
  },
  { name: 'App' }
);
