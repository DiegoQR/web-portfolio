import React from 'react';

function Contact() {
    return (<>
        <section id='contact' className='scroll-mt-20 my-10'>
            <h1>Contact</h1>
            <div className='flex flex-col gap-5 items-center justify-between lg:flex-row'>
                <p className='text-justify lg:w-3/5'>
                    If you're looking for a <strong>dedicated partner to help elevate your business and 
                    achieve your goals</strong>, I'd love to collaborate with you. Whether you need strategic guidance, 
                    creative solutions, or innovative ideas. Let’s work together to take your business to the 
                    next level! Feel free to reach out to me to discuss how we can make it happen.
                </p>
                <div className='space-y-10 text-xl flex flex-col lg:items-start'>
                    <ul className='space-y-5 font-black'>
                        <li>Email: <a className='hover:underline text-orange cursor-pointer'>diegoqr2000@gmail.com</a></li>
                    </ul>
                    <div className='text-center space-x-20'>
                        <a href='https://github.com/DiegoQR' target="_blank" className='hover:text-gray-300'><i class="fa-brands fa-github fa-3x"></i></a>
                        <a href='https://www.linkedin.com/in/diego-alejandro-quiñones-rudon-b7315a224' target="_blank" className='hover:text-gray-300'><i class="fa-brands fa-linkedin fa-3x"></i></a>
                    </div>
                </div>
            </div>
        </section>
    </>);
}

export default Contact;