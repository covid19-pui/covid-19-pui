import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(
  theme => ({
    root: {
      display: 'flex',
      justifyContent: 'space-between',
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
      height: '130px',
      margin: theme.variables.spacing.globalPadding,
      padding: '0 2em'
    },
    'patient-data': {
      display: 'flex',
      alignItems: 'center'
    },
    icon: {
      fontSize: '6em',
      marginRight: '0.5em'
    },
    'patient-form': {
      display: 'flex',
      flexDirection: 'column',
      marginBottom: '15px',
      width: '400px',
      minWidth: '400px'
    },
    'patient-form-field': {
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'space-between'
    },
    label: {
      marginRight: '2em',
      fontWeight: '600',
      color: theme.palette.common.lightGray,
      width: '140px',
      minWidth: '140px'
    },
    field: {
      flexGrow: '1'
    },
    footnote: {
      display: 'flex',
      alignItems: 'flex-end',
      marginBottom: '1em',
      textTransform: 'uppercase',
      fontWeight: '500',
      color: theme.palette.common.lightGray
    }
  }),
  { name: 'PatientHeader' }
);
