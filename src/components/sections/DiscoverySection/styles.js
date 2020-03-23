import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(
  theme => ({
    'simple-text': {
      fontFamily: theme.typography.primary.fontFamily,
      color: theme.palette.text.primary
    }
  }),
  { name: 'DiscoverySection' }
);
