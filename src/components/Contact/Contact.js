import React, {useState} from "react";
import emailjs from 'emailjs-com';
import './Contact.elements.css';
import Pulse from 'react-reveal/Pulse';
import Fade from "react-reveal/Fade";
import Flash from "react-reveal/Flash";
import {PageWrapper} from "../globalStyles";
import contact from "../../images/contact.svg";
import {ImgFort} from "../WhySection/Why.elements";

export default function ContactForm() {
    const [status, setStatus] = useState(false);

    const [name, setName] = useState("");
    const [company, setCompany] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const sendEmail = e =>{
        e.preventDefault();
        setStatus(true);

        emailjs.sendForm('service_f3mqyx8', 'template_talents', e.target, 'user_tv0CLQdhdLqVKFXNYavb3', )
            .then((res) => {
                console.log('success !');
                setName("");
                setCompany("");
                setPhone("");
                setEmail("");
                setMessage("");
            })
            .catch(
                (err) =>
                    document.querySelector('.form-message').innerHTML =
                        "Une erreur s'est produite, veuillez réessayer.")
        e.target.reset()
    }

    return(
        <>
            <div className="form-message"></div>
            <Fade bottom>
            <PageWrapper>
                <ImgFort src={contact} />
                <form onSubmit={sendEmail}>
                      <div className="wrapper">
                            <div className="right">
                                <div className="field">
                                    <input
                                        type="text"
                                        name="name"
                                        id="name"
                                        placeholder="Nom et prénom"
                                        onChange={(e) => setName(e.target.value)}
                                        value={name}
                                        autoComplete="off"
                                    />
                                </div>
                                <div className="field">
                                    <input
                                        type="text"
                                        name="subject"
                                        id="subject"
                                        placeholder="Sujet" />
                                </div>
                                <div className="field">
                                    <input
                                        type="text"
                                        name="societe"
                                        id="societe"
                                        onChange={(e) => setCompany(e.target.value)}
                                        placeholder="Société"
                                        value={company}
                                    />
                                </div>
                                <div className="field">
                                    <input
                                        type="text"
                                        name="email"
                                        id="email"
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="Email *"
                                        value={email}
                                        autoComplete="off"
                                    />
                                </div>
                                <div className="field">
                                    <input
                                        type="text"
                                        name="phone"
                                        id="phone"
                                        onChange={(e) => setPhone(e.target.value)}
                                        placeholder="Téléphone"
                                        value={phone}
                                    />
                                </div>
                            </div>
                            <div className="left">
                                <div className="field">
                                <textarea
                                    type="text"
                                    name="message"
                                    id="message"
                                    placeholder="Message"
                                    onChange={(e) => setMessage(e.target.value)}
                                    value={message}
                                />
                                </div>
                                <input type="submit" value="Envoyer"/>
                                {status && (
                                    <Pulse>
                                        <Flash>
                                            Message envoyé
                                        </Flash>
                                    </Pulse>
                                )}
                            </div>
                        </div>

                </form>
            </PageWrapper>
            </Fade>
        </>
    )
}