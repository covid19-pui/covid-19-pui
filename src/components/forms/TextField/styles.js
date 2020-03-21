import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(
  theme => ({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1)
      }
    },
    formControl: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }),
  { name: 'TextField' }
);
