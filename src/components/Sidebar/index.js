import React from "react";
import {SidebarContainer, Icon, CloseIcon, SidebarLink, SidebarRoute, SidebarWrapper, SideBtnWrap, SidebarMenu} from "./Sidebar.elements";
import {Link} from "react-router-dom";
import {MailIcon} from "../Navbar/Navbar.elements";

const Sidebar = ({isOpen, toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="offres" onClick={toggle}>Notre solution</SidebarLink>
                    <SidebarLink to="pointsforts" onClick={toggle}>Points forts</SidebarLink>
                    <SidebarLink to="nouschoisir" onClick={toggle}>Pourquoi nous choisir</SidebarLink>
                    <SidebarLink to="realisations" onClick={toggle}>Nos réalisations</SidebarLink>
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRoute>
                        <Link to="/contact"><MailIcon />  Contact</Link>
                    </SidebarRoute>
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    );
};

export default Sidebar;