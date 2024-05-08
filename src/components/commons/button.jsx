//import React from 'react';
import { Button } from 'react-bootstrap';
import PropTypes from 'prop-types';
import './../../styles/commons/button.css';

const CustomButton = ({
    variant = 'outline',
    text = 'Button',
    onClick,
    href,
    borderColor = '#EF7B2040',
    textColor = '#EF7B20',
    borderRadius = '5px',
    hoverTextColor = '#EF7B20',
    hoverBorderColor = '#EF7B2040',
    activeBackgroundColor = '#EF7B20',
    ...rest
    }) => {
        const buttonStyles = {
            borderColor: borderColor,
            color: textColor,
            borderRadius: borderRadius,
            width: 'auto',
            height: 'auto',
            marginBottom: '15px',
            marginTop: '15px'
    };

const hoverStyles = {
    color: hoverTextColor,
    borderColor: hoverBorderColor,
};

return (
    <Button
        variant={variant}
        style={buttonStyles}
        onClick={onClick}
        href={href}
        {...rest}
        className="custom-button"
    >
        {text}
    </Button>
    );
};

CustomButton.propTypes = {
    variant: PropTypes.string,
    text: PropTypes.string,
    onClick: PropTypes.func,
    href: PropTypes.string,
    borderColor: PropTypes.string,
    textColor: PropTypes.string,
    borderRadius: PropTypes.string,
    hoverTextColor: PropTypes.string,
    hoverBorderColor: PropTypes.string,
    activeBackgroundColor: PropTypes.string,
    };

CustomButton.defaultProps = {
    text: 'Button',
    variant: 'outline',
    borderColor: '#EF7B2040',
    textColor: '#EF7B20',
    borderRadius: '5px',
    hoverTextColor: '#EF7B20',
    hoverBorderColor: '#EF7B2040',
    activeBackgroundColor: '#EF7B20',
};

export default CustomButton;