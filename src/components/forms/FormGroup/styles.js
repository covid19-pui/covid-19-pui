import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(
  theme => ({
    'form-group-header': {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      height: '30px',
      fontFamily: theme.typography.primary.fontFamily,
      fontWeight: '600',
      color: theme.palette.text.primary
    },
    'header-text': {
      flexGrow: '1',
      backgroundColor: theme.palette.common.lightGray,
      lineHeight: '1'
    },
    'text-rows-1': {
      padding: '2px 10px'
    },
    'text-rows-2': {
      padding: '10px'
    },
    'header-button-options': {
      display: 'flex',
      justifyContent: 'space-between',
      backgroundColor: theme.palette.common.lightGray,
      lineHeight: '1'
    },
    'options-count-2': {
      width: '200px'
    },
    'options-count-3': {
      width: '300px'
    },
    'options-count-4': {
      width: '400px'
    },
    'header-button-option': {
      padding: '2px 10px',
      width: '100px',
      textAlign: 'center'
    },
    divider: {
      borderBottom: `1px solid ${theme.palette.common.lighterGray}`
    }
  }),
  { name: 'FormGroup' }
);
