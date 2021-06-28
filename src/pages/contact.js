import React from 'react';
import ContactForm from "../components/Contact/Contact";
import {BigCloseIcon, PageContainer} from "../components/globalStyles";
import {Link} from "react-router-dom";
import ContactFormulaire from "../components/Contact/StatelessForm";

const ContactPage = () => {
    return(
        <>
            <PageContainer>
                <Link to='/'>
                    <BigCloseIcon />
                </Link>
                <ContactFormulaire  />
            </PageContainer>
        </>
    );
};

export default ContactPage;