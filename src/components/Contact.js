import React from 'react';
import ReactDOM from 'react-dom';
import { SocialIcon } from 'react-social-icons';
import EmailShare from 'react-email-share-link'

export default function Contact() {
    return (
        <section id="contact" className="relative">
        
        <div style={{
             display: 'flex',
             alignItems: 'center',
             justifyContent: 'center',
             marginTop:'5px'
        }}>
            <SocialIcon url="https://www.linkedin.com/in/bardia-biramzadeh/" bgColor="#416BC7" style={{ height: 80, width: 80 }}/>
            <SocialIcon url="https://github.com/balthazarbb" style={{ height: 80, width: 80 }} bgColor="#416BC7"/>

            </div>
            </section>
        
        
    )
}
