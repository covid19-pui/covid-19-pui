import { FormControl } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

export default withStyles({
  root: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  }
})(FormControl);
