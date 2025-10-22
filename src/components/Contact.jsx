import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

function Contact() {
    return (<>
        <section id='contact' className='scroll-mt-20 my-10 space-y-5'>
            <h1>Contact</h1>
            <div className='flex flex-col gap-5 items-center justify-between lg:flex-row'>
                <p className='lg:w-3/5'>
                    If you&apos;re looking for a <strong>dedicated partner to help elevate your business and 
                    achieve your goals</strong>, I&apos;d love to collaborate with you. Whether you need strategic guidance, 
                    creative solutions, or innovative ideas. Let&apos;s work together to take your business to the 
                    next level! Feel free to reach out to me to discuss how we can make it happen.
                </p>
                <div className='space-y-10 text-xl flex flex-col lg:items-start'>
                    <ul className='space-y-5 font-black'>
                        <li>Email: <a href="mailto:diegoqr2000@gmail.com?subject=Let%20me%20ask%20about%20your%20portfolio!&body=Hello%20Diego,%20i'm%20interested%20in%20your%20work!%20Could%20we%20discuss..." className='hover:underline text-orange cursor-pointer mmotion-preset-wobble'>diegoqr2000@gmail.com</a></li>
                    </ul>
                    <div className='flex gap-5 mx-auto'>
                        <a href='https://github.com/DiegoQR' target="_blank" className='hover:text-gray-300'><FaGithub size="3em"/></a>
                        <a href='https://www.linkedin.com/in/diego-alejandro-quiñones-rudon-b7315a224' target="_blank" className='hover:text-gray-300'><FaLinkedin size="3em"/></a>
                    </div>
                </div>
            </div>
        </section>
    </>);
}

export default Contact;