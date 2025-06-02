import React from 'react';
import './Navbar.css';

function Navbar() {
    const navLinks = [
        {name: 'About', href: '#about'},
        {name: 'Projects', href: '#projects'},
        {name: 'Skills', href: '#skills'},
        {name: 'Contact', href: '#contact'},
    ];

    return (
        <div>
            <nav className="navbar">
                <h1>Sunil Poudel</h1>
                <ul>
                    {navLinks.map((link) => (
                        <li key={link.name}>
                            <a
                                href={link.href}
                                onClick={(e) => {
                                    e.preventDefault();
                                    document.querySelector(link.href).scrollIntoView({behavior: 'smooth'});
                                }}
                            >
                                {link.name}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    );
}

export default Navbar;