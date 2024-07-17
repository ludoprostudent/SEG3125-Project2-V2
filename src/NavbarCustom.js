import { HashLink } from 'react-router-hash-link';

import { Container, Nav, Navbar, Badge, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { CartContext } from './CartContext';
import { useContext } from 'react';
import { useTranslation } from 'react-i18next';


import LanguageSwitcher from './LanguageSwitcher';

import './NavbarCustom.css';

const NavbarCustom = ({ isHomepage }) => {

    const { cartItems } = useContext(CartContext);

    const cartSize = cartItems.length;

    const { t } = useTranslation();


    return (
        <Navbar expand="lg" className="navbar" sticky="top" style={{ zIndex: '500' }}>
            <Container className="justify-content-center">
                <Nav className="mx-auto custom-nav-links">
                    {!isHomepage && (
                        <HashLink
                            className="nav-link navbar-text"
                            to="/#"
                            style={{ color: 'white' }}
                            aria-label={t('aria-nav-homepage')}
                        >
                            <b>{t('nav-homepage')}</b>
                        </HashLink>
                    )}
                    <HashLink
                        className="nav-link navbar-text"
                        to="/#"
                        aria-label={t('aria-nav-howtorent')}
                    >
                        <b>{t('nav-howtorent')}</b>
                    </HashLink>
                    <HashLink
                        className="nav-link navbar-text"
                        to="/Rental#"
                        aria-label={t('aria-nav-rentalequip')}
                    >
                        <b>{t('nav-rentalequip')}</b>
                    </HashLink>
                    <HashLink
                        className="nav-link navbar-text"
                        to="/Compare#"
                        aria-label={t('aria-nav-compare')}
                    >
                        <b>{t('nav-compare')}</b>
                    </HashLink>
                    <HashLink
                        className="nav-link navbar-text"
                        to="/safetyguides#"
                        aria-label={t('aria-nav-safety')}
                    >
                        <b>{t('nav-safety')}</b>
                    </HashLink>
                    <HashLink
                        className="nav-link navbar-text"
                        to="/#about-us"
                        aria-label={t('aria-nav-about')}
                    >
                        <b>{t('nav-about')}</b>
                    </HashLink>
                    <OverlayTrigger
                        placement="bottom"
                        overlay={<Tooltip className="custom-tooltip">View your cart and checkout</Tooltip>}
                    >
                        <HashLink
                            className="nav-link navbar-text"
                            to="/Checkout#"
                            aria-label={t('aria-nav-checkout')}
                        >
                            <i className="bi bi-cart"></i> <Badge bg="" className="custom-nav-badge">{cartSize}</Badge>
                        </HashLink>
                    </OverlayTrigger>
                </Nav>
                <OverlayTrigger
                    placement="bottom"
                    overlay={<Tooltip className="custom-tooltip">{t('aria-tooltip-language')}</Tooltip>}
                >
                    <LanguageSwitcher />
                </OverlayTrigger>
            </Container>
        </Navbar>
    );
};

export default NavbarCustom;