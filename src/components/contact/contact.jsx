import React from "react";

import { FaEnvelope, FaRegEnvelope, FaLinkedin, FaGithub, FaPhone } from "react-icons/fa6";

import INFO from "../../data/user";


import "./contact.css";

const Contact = () => {
    return (
        <>
            <div className="pt-0 my-0">
                <div class="h2 header">Let's Get Connected</div>
                <div className="subtitle contact-subtitle">
                    <p>Thank you for your interest in getting in touch with
                        me. I welcome your feedback, questions, and
                        suggestions. If you have a specific question or
                        comment, please feel free to contact me thorugh any of
                        these avenues:</p>
                    <ul className="contact-all">
                        <li className="contact-socials">
                            <a
                                className="contact-link"
                                href={`mailto:${INFO.main.work}`}
                                aria-label="Work Email"
                            >
                                <span className="contact-icon">
                                    <FaEnvelope />
                                </span>
                                <span className="contact-label">Work Email:</span>
                                <span className="contact-value link-color">{INFO.main.work}</span>
                            </a>
                        </li>
                        <li className="contact-socials">
                            <a
                                className="contact-link"
                                href={`mailto:${INFO.main.personal}`}
                                aria-label="Personal Email"
                            >
                                <span className="contact-icon">
                                    <FaRegEnvelope />
                                </span>
                                <span className="contact-label">Personal Email:</span>
                                <span className="contact-value">{INFO.main.personal}</span>
                            </a>
                        </li>
                        <li className="contact-socials">
                            <a
                                className="contact-link"
                                href={INFO.main.linkedin}
                                target="_blank"
                                rel="noreferrer"
                                aria-label="LinkedIn"
                            >
                                <span className="contact-icon">
                                    <FaLinkedin />
                                </span>
                                <span className="contact-label">LinkedIn:</span>
                                <span className="contact-value">{INFO.main.linkedin}</span>
                            </a>
                        </li>
                        <li className="contact-socials">
                            <a
                                className="contact-link"
                                href={INFO.main.github}
                                target="_blank"
                                rel="noreferrer"
                                aria-label="GitHub"
                            >
                                <span className="contact-icon">
                                    <FaGithub />
                                </span>
                                <span className="contact-label">GitHub:</span>
                                <span className="contact-value">{INFO.main.github}</span>
                            </a>
                        </li>
                        <li className="contact-socials">
                            <a
                                className="contact-link"
                                href={`tel:${INFO.main.number.replace(/[^0-9+]/g, "")}`}
                                aria-label="Phone Number"
                            >
                                <span className="contact-icon">
                                    <FaPhone />
                                </span>
                                <span className="contact-label">Number:</span>
                                <span className="contact-value">{INFO.main.number}</span>
                            </a>
                        </li>
                    </ul>
                    <p>Thanks again for your interest, and I look forward
                        to hearing from you!</p>
                </div>
            </div>
        </>
    );
};

export default Contact;
