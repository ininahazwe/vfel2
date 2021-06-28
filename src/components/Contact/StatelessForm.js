import React from "react";
import { useState } from "react";
import emailjs from "emailjs-com";
import {PageWrapper} from "../globalStyles";
import contact from "../../images/contact.svg";
import {ImgFort} from "../WhySection/Why.elements";

const ContactFormulaire = () => {
    const [name, setName] = useState("");
    const [subject, setSubject] = useState("");
    const [company, setCompany] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        let nameS = document.getElementById("name");
        let subjectS = document.getElementById("subject");
        let companyS = document.getElementById("company");
        let emailS = document.getElementById("email");
        let messageS = document.getElementById("message");
        let formMess = document.querySelector(".formMessage");

        const isEmail = () => {
            let isMail = document.getElementById("not-mail");
            let regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

            if (email.match(regex)) {
                isMail.style.display = "none";
                return true;
            } else {
                isMail.style.display = "block";
                isMail.style.animation = "dongle 1s";
                setTimeout(() => {
                    isMail.style.animation = "none";
                }, 1000);
                return false;
            }
        };

        if (name && subject && company && isEmail() && message) {
            nameS.classList.remove("red");
            subjectS.classList.remove("red");
            companyS.classList.remove("red");
            emailS.classList.remove("red");
            messageS.classList.remove("red");

            formMess.innerHTML = "Message en cours d'envoi...";
            formMess.style.background = "#00c1ec";
            formMess.style.opacity = "1";

            // voir doc : https://www.emailjs.com/docs/examples/reactjs/
            emailjs
                .send(
                    // your service ID
                    "service_f3mqyx8",
                    // your template ID
                    "template_talents",
                    {
                        name,
                        subject,
                        company,
                        email,
                        message,
                    },
                    // your user ID (protégé par .env)
                    process.env.REACT_APP_EMAILJS_KEY
                )
                .then(
                    () => {
                        formMess.innerHTML =
                            "Message envoyé ! Nous vous recontactons dès que possible.";

                        document.getElementById("name").classList.remove("error");
                        document.getElementById("subject").classList.remove("error");
                        document.getElementById("company").classList.remove("error");
                        document.getElementById("email").classList.remove("error");
                        document.getElementById("message").classList.remove("error");
                        setName("");
                        setSubject("");
                        setCompany("");
                        setEmail("");
                        setMessage("");

                        setTimeout(() => {
                            formMess.style.opacity = "0";
                        }, 5000);
                    },
                    (err) => {
                        console.log(err);
                        formMess.style.background = "rgb(253, 87, 87)";
                        formMess.innerHTML =
                            "Une erreur s'est produite, veuillez réessayer.";
                    }
                );
        } else {
            formMess.innerHTML = "Merci de remplir correctement les champs requis *";
            formMess.style.background = "rgb(253, 87, 87)";
            formMess.style.opacity = "1";

            if (!name) {
                nameS.classList.add("error");
            }
            if (!subject) {
                nameS.classList.add("error");
            }
            if (!company) {
                nameS.classList.add("error");
            }
            if (!email) {
                emailS.classList.add("error");
            }
            if (!message) {
                messageS.classList.add("error");
            }
        }
    };

    return (
        <>
            <PageWrapper>
                <ImgFort src={contact} />
                <form>
                    <div className="wrapper">
                        <div className="right">
                            <input
                                type="text"
                                id="name"
                                name="name"
                                required
                                onChange={(e) => setName(e.target.value)}
                                placeholder="nom & prénom*"
                                value={name}
                            />
                            <input
                                type="text"
                                id="subject"
                                name="subject"
                                required
                                onChange={(e) => setSubject(e.target.value)}
                                placeholder="sujet"
                                value={subject}
                            />
                            <input
                                type="text"
                                id="company"
                                name="company"
                                required
                                onChange={(e) => setCompany(e.target.value)}
                                placeholder="société"
                                value={company}
                            />
                            <div className="email-content">
                                <label id="not-mail">Email non valide</label>
                                <input
                                    type="mail"
                                    id="email"
                                    name="email"
                                    required
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="email *"
                                    value={email}
                                />
                            </div>
                        </div>
                        <div className="left">
                            <textarea
                                id="message"
                                name="message"
                                onChange={(e) => setMessage(e.target.value)}
                                placeholder="message *"
                                value={message}
                                required
                            />

                            <input
                                className="formButton hover"
                                type="submit"
                                value="envoyer"
                                onClick={(e) => handleSubmit(e)}
                            />
                        </div>
                    </div>
                </form>
                <div className="formMessage"></div>
            </PageWrapper>
        </>
    );
};

export default ContactFormulaire;