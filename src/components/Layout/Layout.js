import React from 'react';
import {
    Outlet,
} from "react-router-dom";
import Header from './Header/Header';
import Sidebar from './Sidebar/Sidebar';
import Footer from './Footer/Footer';
import { Container } from 'reactstrap';

import './Layout.scss';
import ErrorBoundary from './../Shared/ErrorBoundary/ErrorBoundary';

const loading = () => <div className="animated fadeIn pt-3 text-center">Loading...</div>;

const Layout = (props) => {
    return (
        <div className="Layout">
            <Header className="header-component" />
            <Sidebar className="sidebar-component" />
            <div className="main">
                <Container fluid>
                    <ErrorBoundary>
                        <Outlet />
                    </ErrorBoundary>
                </Container>
            </div>
            <Footer className="footer-component" />
        </div>
    );
}

export default Layout;