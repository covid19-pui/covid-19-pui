import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(
  theme => ({
    root: {
      display: 'flex',
      alignItems: 'center',
      marginLeft: '1em'
    },
    label: {
      fontFamily: theme.typography.primary.fontFamily,
      color: theme.palette.text.primary
    }
  }),
  { name: 'CheckboxField' }
);
