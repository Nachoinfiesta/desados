// SocialButton.jsx
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const SocialButton = ({ icon }) => {
    let socialIcon;

    switch (icon) {
        case 'facebook':
            socialIcon = <FontAwesomeIcon icon={faFacebook} />;
            break;
        case 'github':
            socialIcon = <FontAwesomeIcon icon={faGithub} />;
            break;
        case 'linkedin':
            socialIcon = <FontAwesomeIcon icon={faLinkedin} />;
            break;
        default:
            socialIcon = null;
    }

    return <div>{socialIcon}</div>;
};

export default SocialButton;
