import {
  Link as RouterLink,
} from 'react-router-dom';
import Link from '@mui/material/Link';
import PropTypes from 'prop-types';

LinkRouter.propTypes = {
  children: PropTypes.any.isRequired,
};

export default function LinkRouter({ children, ...otherProps }) {
  return (
    <Link component={RouterLink} {...otherProps} >
      {children} 
    </Link>
  );
}