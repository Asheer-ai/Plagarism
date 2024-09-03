import React from 'react';
import './AboutPage.css'; // Ensure this CSS file has the necessary styles

export default function About() {
    return (
        <div className="wrapper">
            <div className="title">
                <h4>Our Team Section</h4>
            </div>

            <div className="card_Container">
                <TeamMember
                    name="Stuti Biswas"
                    role="Data-Analyst"
                    image="./image/pic01.jpg"
                    socialLinks={{
                        instagram: "#",
                        github: "#",
                        linkedin: "#"
                    }}
                />
                <TeamMember
                    name="Asheer Azam"
                    role="Front-End Web Developerr"
                    image="Asheer.jpeg"
                    socialLinks={{
                        instagram: "#",
                        github: "#",
                        linkedin: "#"
                    }}
                />
                <TeamMember
                    name="Arindam "
                    role="Back-End Developer"
                    image="./image/pic03.jpg"
                    socialLinks={{
                        instagram: "#",
                        github: "#",
                        linkedin: "#"
                    }}
                />
                <TeamMember
                    name="Sk.Riaz"
                    role="Machine Learning"
                    image="./image/pic04.jpg"
                    socialLinks={{
                        instagram: "#",
                        github: "#",
                        linkedin: "#"
                    }}
                />
            </div>
        </div>
    );
}

function TeamMember({ name, role, image, socialLinks }) {
    return (
        <div className="card">
            <div className="imbBx">
                <img src={image} alt={name} />
            </div>
            <div className="content">
                <div className="contentBx">
                    <h3>{name} <br /><span>{role}</span></h3>
                </div>
                <ul className="sci">
                    {socialLinks.instagram && (
                        <li style={{ '--i': 1 }}>
                            <a href={socialLinks.instagram}>
                                <i className="fa-brands fa-instagram"></i>
                            </a>
                        </li>
                    )}
                    {socialLinks.github && (
                        <li style={{ '--i': 2 }}>
                            <a href={socialLinks.github}>
                                <i className="fa-brands fa-github"></i>
                            </a>
                        </li>
                    )}
                    {socialLinks.linkedin && (
                        <li style={{ '--i': 3 }}>
                            <a href={socialLinks.linkedin}>
                                <i className="fa-brands fa-linkedin-in"></i>
                            </a>
                        </li>
                    )}
                </ul>
            </div>
        </div>
    );
}
