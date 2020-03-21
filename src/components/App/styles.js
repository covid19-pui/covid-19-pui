import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(
  theme => ({
    content: {
      marginLeft: theme.variables.spacing.navWidth,
      padding: '2em 0'
    }
  }),
  { name: 'App' }
);
