import React from 'react';
import Label from './Label';

function AboutMe() {
    return ( 
        <section id='about' className='space-y-5 bg-blue-dark p-10 mt-10 rounded-2xl'>
            <h1 className='border-b-2'>About Me </h1>
            <p className='text-justify font-medium'>
                My name is Diego Alejandro Quiñones
                Rudon. I'm a <strong>software developer mainly with
                knowledge in web development</strong> in backend and
                frontend graduated from the <strong>Bolivian 
                Catholic University of "San Pablo" with an 
                excellence degree. </strong> 
                My hobbies are the music, drawing, 
                videogames and every geek theme, i also have
                knowledge many other technologies such as
                Quality Assurance, Artificial Intelligence, 
                Algorithm analysis and data science. 
            </p>
            <h2>Tech Skills</h2>
            <div className='flex flex-wrap gap-3'>
                <Label color='bg-red-500' icon={<i className="fa-brands fa-html5"></i>}>HTML</Label>
                <Label color='bg-blue-500' icon={<i className="fa-brands fa-css3"></i>}>CSS</Label>
                <Label color='bg-yellow-500' icon={<i className="fa-brands fa-js"></i>}>JavaScript</Label>
                <Label color='bg-blue-700' icon={<i className="fa-brands fa-react"></i>}>React</Label>
                <Label color='bg-teal-500' icon={<i className="fa-brands fa-node"></i>}>Node</Label>
                <Label color='bg-amber-600' icon={<i className="fa-brands fa-python"></i>}>Python</Label>
                <Label color='bg-purple-500' icon={<i class="fa-solid fa-globe"></i>}>.NET</Label>
                <Label color='bg-lime-500' icon={<i class="fa-solid fa-database"></i>}>SQL</Label>
                <Label color='bg-green-500' icon={<i class="fa-solid fa-server"></i>}>MongoDB</Label>
                <Label color='bg-slate-950' icon={<i class="fa-brands fa-square-git"></i>}>Git</Label>
            </div>
            <h2>Soft Skills</h2>
            <div className='flex flex-wrap gap-3'>
                <Label color='bg-cyan-700' icon={<i class="fa-solid fa-user-gear"></i>}>Adaptability</Label>
                <Label color='bg-red-800' icon={<i class="fa-solid fa-face-smile-beam"></i>}>Integrity</Label>
                <Label color='bg-fuchsia-900' icon={<i class="fa-solid fa-sitemap"></i>}>Organization</Label>
                <Label color='bg-amber-900' icon={<i class="fa-solid fa-handshake"></i>}>Team Work</Label>
                <Label color='bg-pink-900' icon={<i class="fa-solid fa-people-group"></i>}>Cooperation</Label>
                <Label color='bg-slate-600' icon={<i class="fa-solid fa-clock-rotate-left"></i>}>Time Management</Label>
            </div>
            <h2>Languages</h2>
            <div className='flex flex-wrap gap-3'>
                <Label color='bg-violet-950' icon={<i class="fa-solid fa-flag-usa"></i>}>English</Label>
                <Label color='bg-orange-950' icon={<i class="fa-solid fa-flag"></i>}>Spanish</Label>
            </div>
        </section>
    );
}

export default AboutMe;