import React from 'react';
import Label from './Label';
import { techData, softSkills, languages } from '../data/TechData';

function AboutMe() {
    return ( 
        <section id='about' className='space-y-5 bg-blue-dark p-10 mt-10 rounded-2xl scroll-mt-20 intersect:motion-preset-slide-right'>
            <h1 className='border-b-2'>About Me </h1>
            <div className='flex flex-col lg:flex-row gap-10 items-center '>
                <section className='text-left font-medium md:text-base/10 lg:w-7/10 space-y-5'>
                    <p>
                        My name is Diego Alejandro Quiñones
                        Rudon. I'm a <strong>software developer mainly with
                        knowledge in web development</strong> in backend and
                        frontend graduated from the <strong>Bolivian 
                        Catholic University of "San Pablo" with an 
                        excellence degree and a GPA  of 87.33 from a 100-point 
                        scale or a GPA of 4.37 on a 5.0 scale. </strong> 
                    </p>
                    <p>
                        My hobbies are the music, drawing, 
                        videogames and every geek theme, i also have
                        knowledge many other technologies such as
                        Quality Assurance, DevOps, Artificial Intelligence, 
                        Algorithm analysis, data science and many other more. 
                    </p>
                </section>
                <div className='space-y-4 lg:w-full'>
                    <h2>Tech Skills</h2>
                    <div className='flex flex-wrap gap-3'>
                        {
                            Object.entries(techData).map(([key, value]) => (
                                <Label key={key} color={value.color} icon={value.icon}>
                                    {key}
                                </Label>
                            ))
                        }
                    </div>
                    <h2>Soft Skills</h2>
                    <div className='flex flex-wrap gap-3'>
                        {
                            Object.entries(softSkills).map(([key, value]) => (
                                <Label key={key} color={value.color} icon={value.icon}>
                                    {key}
                                </Label>
                            ))
                        }
                    </div>
                    <h2>Languages</h2>
                    <div className='flex flex-wrap gap-3'>
                        {
                            Object.entries(languages).map(([key, value]) => (
                                <Label key={key} color={value.color} icon={value.icon}>
                                    {key}
                                </Label>
                            ))
                        }
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AboutMe;