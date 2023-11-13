import React from 'react';
import "../styles/style.css";

function NavTabs({ currentPage, handlePageChange }) {
    return (
        <nav class="navbar navbar-light">
            <ul class="nav justify-content-end nav-underline">
                <li class="nav-item">
                    <a class="nav-item nav-link active"
                        href="#About"
                        onClick={() => handlePageChange('About')}

                        className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
                    >
                        About
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-item nav-link active"
                        href="#Work"
                        onClick={() => handlePageChange('Work')}

                        className={currentPage === 'Work' ? 'nav-link active' : 'nav-link'}
                    >
                        Work
                    </a>
                </li>

                <li class="nav-item">
                    <a class="nav-item nav-link active"
                        href="#contact"

                        onClick={() => handlePageChange('Contact')}
                        className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
                    >
                        Contact
                    </a>
                </li>
            </ul>
        </nav >
    );
}

export default NavTabs;