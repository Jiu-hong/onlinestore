import styles from './contact/contact.module.css';
import { useState } from 'react';

import Layout from '../components/layout';
export default function Contact() {
    const [visible, setVisible] = useState(false);
    const handleFade = () => {
        setVisible(!visible);
        console.log('visible: ', visible);
    };
    return (
        <div id="mySidenav" class="sidenav" className={styles.mySidenav}>
            {/* <a href="#" id="about" className={styles.about}>
                About
            </a>
            <a href="#" id="blog" className={styles.blog}>
                Blog
            </a>
            <a href="#" id="projects" className={styles.projects}>
                Projects
            </a>
            <a href="#" id="contact" className={styles.contact}>
                Contact
            </a>*/}
            {console.log('visible: ', visible)}
            <div>
                {/*
                <div className={visible ? 'fadeIn' : 'fadeOut'}>hello</div>*/}
                <div className={visible ? styles.fadeIn : styles.fadeOut}>
                    hello
                </div>
                <button onClick={handleFade}>click me</button>
            </div>
        </div>
    );
}
