import React from 'react';
import { Link } from 'react-router-dom';

import {
    Navbar,
    Nav,
    NavItem,
    SidebarTrigger
} from './../../components';

import { NavbarActivityFeed } from './NavbarActivityFeed';
import { NavbarMessages } from './NavbarMessages';
import { NavbarUser } from './NavbarUser';

export const SidebarANavbar = () => (
    <Navbar light expand="xs" fluid>
        <Nav navbar>
            <NavItem className="ml-3">
                <SidebarTrigger/>
            </NavItem>
            <NavItem className="navbar-brand h5 mb-0 d-lg-none">
                <Link to="/">
                    react.bs4
                </Link>
            </NavItem>
        </Nav>
        <Nav navbar className="mr-auto">
            <NavbarActivityFeed />
            <NavbarMessages className="mr-2" />
            <NavbarUser className="mr-2" />
        </Nav>
    </Navbar>
);
