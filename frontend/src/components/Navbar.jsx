//Navbar.js
import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Drawer from 'react-modern-drawer';
import 'react-modern-drawer/dist/index.css';
import styles from './Navbar.module.css';
import locationStyles from './LocationDrawer.module.css';
import profileStyles from './ProfileDrawer.module.css';
import menuStyles from './MenuDrawer.module.css';
import BookingForm from './BookingForm';

const Navbar = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isLocationDrawerOpen, setIsLocationDrawerOpen] = useState(false);
  const [isMenuDrawerOpen, setIsMenuDrawerOpen] = useState(false);
  const router = useRouter();

  const toggleProfileDrawer = () => {
    setIsProfileOpen((prevState) => !prevState);
  };

  const toggleLocationDrawer = () => {
    setIsLocationDrawerOpen((prevState) => !prevState);
  };

  const toggleMenuDrawer = () => {
    setIsMenuDrawerOpen((prevState) => !prevState);
  };

  const closeProfileDrawer = () => {
    setIsProfileOpen(false);
  };

  const closeLocationDrawer = () => {
    setIsLocationDrawerOpen(false);
  };

  const closeMenuDrawer = () => {
    setIsMenuDrawerOpen(false);
  };

  const profileDrawerContent = () => (
    <div className={profileStyles['profile-drawer']}>
      <h3>Profile</h3>
      <form>
        <label>Email:</label>
        <input type="email" />
        <label>Password:</label>
        <input type="password" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );

  const locationDrawerContent = () => (
    <div className={locationStyles['location-drawer-container']}>
      <ul className={locationStyles['location-drawer']}>
        <li className={locationStyles['location-list-item']} onClick={() => router.push('/')}>Aarhus</li>
        <li className={locationStyles['location-list-item']} onClick={() => router.push('/')}>Borupgaard</li>
        <li className={locationStyles['location-list-item']} onClick={() => router.push('/')}>Bygholm Park</li>
        <li className={locationStyles['location-list-item']} onClick={() => router.push('/')}>Centralværkstedet</li>
        <li className={locationStyles['location-list-item']} onClick={() => router.push('/')}>Copenhagen Portside</li>
        <li className={locationStyles['location-list-item']} onClick={() => router.push('/')}>H.C. Andersen Odense</li>
        <li className={locationStyles['location-list-item']} onClick={() => router.push('/')}>Holte</li>
        <li className={locationStyles['location-list-item']} onClick={() => router.push('/')}>Hvide Hus Aalborg</li>
        <li className={locationStyles['location-list-item']} onClick={() => router.push('/')}>Kellers Park</li>
        <li className={locationStyles['location-list-item']} onClick={() => router.push('/')}>Klarskovgaard</li>
        <li className={locationStyles['location-list-item']} onClick={() => router.push('/')}>Kolding</li>
        <li className={locationStyles['location-list-item']} onClick={() => router.push('/')}>Kongebrogaarden</li>
        <li className={locationStyles['location-list-item']} onClick={() => router.push('/')}>Køge Strand</li>
        <li className={locationStyles['location-list-item']} onClick={() => router.push('/')}>Middelfart</li>
        <li className={locationStyles['location-list-item']} onClick={() => router.push('/')}>Rebild Bakker</li>
        <li className={locationStyles['location-list-item']} onClick={() => router.push('/')}>Roskilde</li>
        <li className={locationStyles['location-list-item']} onClick={() => router.push('/')}>Varbergs Kusthotell</li>
      </ul>
    </div>
  );

  const menuDrawerContent = () => (
    <ul className={menuStyles['menu-drawer']}>
      <li className={menuStyles['menu-list-item']} onClick={() => router.push('/')}>Hotels</li>
      <li className={menuStyles['menu-list-item']} onClick={() => router.push('/')}>Packages</li>
      <li className={menuStyles['menu-list-item']} onClick={() => router.push('/')}>Meeting & Conference</li>
      <li className={menuStyles['menu-list-item']} onClick={() => router.push('/')}>Restaurant & Events</li>
      <li className={menuStyles['menu-list-item']} onClick={() => router.push('/')}>Spa</li>
      <li className={menuStyles['menu-list-item']} onClick={() => router.push('/')}>Contact</li>
    </ul>
  );

  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.logos}>
          <a href="/" className={styles.logo}>Comwell</a>
          <a href="/" className={styles.logo}>HOTELS</a>
        </div>
        <ul className={styles.navList}>
          <li>
            <a className={styles.navLink} onClick={toggleLocationDrawer}>
              Location
            </a>
          </li>
          <li>
            <a className={styles.navLink} onClick={toggleProfileDrawer}>
              Profile
            </a>
          </li>
          <li>
            <a className={styles.navLink} onClick={toggleMenuDrawer}>
              Menu
            </a>
          </li>
        </ul>
      </nav>

      <Drawer
        open={isLocationDrawerOpen}
        onClose={closeLocationDrawer}
        direction='right'
        size={750}
        className='your-custom-styles-location'
      >
        {locationDrawerContent()}
      </Drawer>

      <Drawer
        open={isProfileOpen}
        onClose={closeProfileDrawer}
        direction='top'
        size={150}
        className='your-custom-styles-profile'
      >
        {/* Content of the Profile Drawer */}
        {profileDrawerContent()}
      </Drawer>

      <Drawer
        open={isMenuDrawerOpen}
        onClose={closeMenuDrawer}
        direction='right'
        size={750}
        className='your-custom-styles-menu'
      >
        {/* Content of the Menu Drawer */}
        {menuDrawerContent()}
      </Drawer>
    </>
  );
};

export default Navbar;
