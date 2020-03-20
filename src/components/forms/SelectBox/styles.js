import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(
  theme => {
    return {
      root: {
        '& .MuiTextField-root': {
          margin: theme.spacing(1)
        }
      }
    };
  },
  { name: 'SelectBox' }
);
