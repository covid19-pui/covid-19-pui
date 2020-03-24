import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(
  theme => ({
    'radio-group': {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center'
    },
    'in-form-group': {
      width: '300px',
      minWidth: '300px',
      justifyContent: 'space-around'
    },
    grouped: {
      margin: '0'
    },
    'form-label': {
      fontFamily: theme.typography.primary.fontFamily,
      color: theme.palette.text.primary
    }
  }),
  { name: 'RadioField' }
);
