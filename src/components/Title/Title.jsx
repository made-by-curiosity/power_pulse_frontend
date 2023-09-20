import { H1 } from "./Title.styled"
import PropTypes from 'prop-types';


export const Title = ({ children }) => {
    return (
        <H1>{children}</H1>
    )
}

Title.propTypes = {
  children: PropTypes.string,
//   margin: PropTypes.number,
};

