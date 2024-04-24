import React from 'react';
import { Button } from 'react-bootstrap';

const ExternalLinkButton = ({ href, buttonText, variant }) => {
    return (
        <Button variant={variant} href={href} target="_blank" rel="noopener noreferrer">
            {buttonText}
        </Button>
    );
};

export default ExternalLinkButton;
