import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(
  theme => {
    return {
      formControl: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        margin: theme.spacing(1)
      },
      '@global': {
        label: {
          fontFamily: '"Avenir Next", "Segoe UI", "Roboto", "Helvetica Neue", sans-serif'
        }
      }
    };
  },
  { name: 'DateField' }
);
