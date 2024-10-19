import React from 'react';
import githubIcon from '../assets/githubicon.png';
import twitterIcon from '../assets/twitter.png';
import instagramIcon from '../assets/instagram.png';
import linkedinIcon from '../assets/linkedin.png';

const Socials = () => {
    return (
        <div className="flex gap-6  mt-7 ">
            <a
                href="https://github.com/subrat004"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white hover:bg-white-600 text-white p-3 rounded-full transition-transform duration-300 hover:scale-110 hover:shadow-lg"
            >
                <img src={githubIcon} alt="Github" className="w-8 h-8" />
            </a>
            <a
                href="https://x.com/subrat_dhapola"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white hover:bg-white-600 text-white p-3 rounded-full transition-transform duration-300 hover:scale-110 hover:shadow-lg"
            >
                <img src={twitterIcon} alt="Twitter" className="w-8 h-8" />
            </a>
            <a
                href="https://www.instagram.com/_.subrat_/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white hover:bg-white-600 text-white p-3 rounded-full transition-transform duration-300 hover:scale-110 hover:shadow-lg"
            >
                <img src={instagramIcon} alt="Instagram" className="w-8 h-8" />
            </a>
            <a
                href="https://www.linkedin.com/in/subrat-dhapola-32b8a4191/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white hover:bg-white-600 text-white p-3 rounded-full transition-transform duration-300 hover:scale-110 hover:shadow-lg"
            >
                <img src={linkedinIcon} alt="LinkedIn" className="w-8 h-8" />
            </a>
        </div>
    );
};

export default Socials;
