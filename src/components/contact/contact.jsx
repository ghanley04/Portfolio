import React from "react";



import INFO from "../../data/user";


import "./contact.css";

const Contact = () => {
    return (
        <>
            <div className="pt-0 my-0">
                <div class="h2 header">Let's Get Connected</div>

                <div  className="subtitle contact-subtitle">
                    <p>Thank you for your interest in getting in touch with
                        me. I welcome your feedback, questions, and
                        suggestions. If you have a specific question or
                        comment, please feel free to contact me thorugh any of
                        these avenues:</p>
                    <ul className="my-4 ms-10">
                        <li className = "contact-socials">Work Email:
                            &nbsp;{" "}
                            <a className="link-color" href={`mailto:${INFO.main.personal}`}>
                                {INFO.main.work}</a>
                        </li>
                        <li className = "contact-socials">Personal Email:
                            &nbsp;{" "}
                            <a href={`mailto:${INFO.main.personal}`}>
                                {INFO.main.personal}
                            </a>
                        </li>
                        <li className = "contact-socials"v>LinkedIn:
                            &nbsp;{" "}
                            <a href={INFO.main.linkedin}>
                                {INFO.main.linkedin}
                            </a>
                        </li>
                        <li className = "contact-socials">Number:
                            &nbsp;{" "}
                            {INFO.main.number}
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