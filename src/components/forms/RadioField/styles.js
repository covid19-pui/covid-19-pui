import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => ({
  radioGroup: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  },
  formLabel: {
    fontFamily: theme.typography.primary.fontFamily,
    color: theme.palette.text.primary
  }
}));
