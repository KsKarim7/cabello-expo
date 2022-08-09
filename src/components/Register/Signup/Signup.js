import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from "@fortawesome/free-solid-svg-icons"
import { faLock } from "@fortawesome/free-solid-svg-icons"
import { faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { faTwitter } from "@fortawesome/free-brands-svg-icons"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { faGoogle } from "@fortawesome/free-brands-svg-icons"

import React from 'react';
import SignupCss from './Signup.module.css'

const Signup = () => {
    return (
        <div>
            <div className={SignupCss.container}>
                <div className={SignupCss.formsContainer}>
                    <div className={SignupCss.signInSignUp}>
                        <form action="" className={SignupCss.signInForm}>
                            <h2 className={SignupCss.title}>Sign In</h2>
                            <div className={SignupCss.inputField}>
                                <FontAwesomeIcon className={SignupCss.icon} icon={faUser}></FontAwesomeIcon>
                                <input type="text" placeholder='Username' />
                            </div>
                            <div className={SignupCss.inputField}>
                                <FontAwesomeIcon className={SignupCss.icon} icon={faLock}></FontAwesomeIcon>
                                <input type="password" placeholder='Password' />
                            </div>
                            <input type="submit" value="Login" className={SignupCss.btnSolid} />
                            <p className={SignupCss.socialText}>Or Sign In with your Social Accounts</p>
                            <div className={SignupCss.socialMedia}>
                                <a href="" className={SignupCss.socialIcon}></a>
                                <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>
                                <a href="" className={SignupCss.socialIcon}></a>
                                <FontAwesomeIcon icon={faGoogle}></FontAwesomeIcon>
                                <a href="" className={SignupCss.socialIcon}></a>
                                <FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon>
                                <a href="" className={SignupCss.socialIcon}></a>
                                <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>

                            </div>
                        </form>

                    </div>

                </div>
            </div>

        </div>
    );
};

export default Signup;