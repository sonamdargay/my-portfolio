import React from 'react';
import { Button } from 'react-bootstrap';

/**
 * For creating a link button that routes to an external page
 * @param href
 * @param buttonText
 * @param variant
 * @returns {Element}
 * @constructor
 */
const ExternalLinkButton = ({ href, buttonText, variant }) => {
    return (
        <Button variant={variant} href={href} target="_blank" rel="noopener noreferrer">
            {buttonText}
        </Button>
    );
};

export default ExternalLinkButton;
