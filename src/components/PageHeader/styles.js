import { makeStyles } from '@material-ui/core/styles';

import Image from './covid.png';

export default makeStyles(
  theme => {
    return {
      bg: {
        backgroundImage: `url(${Image})`,
        backgroundSize: '100%',
        backgroundRepeat: 'no-repeat',
        alignItems: 'center'
      },
      text: {
        color: 'white',
        fontFamily: theme.typography.secondary.fontFamily,
        fontWeight: 300,
        fontSize: 'calc(12px + 0.9vw)',
        padding: 'calc(2px + 1vw) 40px',
        width: '50%',
        minWidth: '500px'
      }
    };
  },
  { name: 'PageHeader' }
);
