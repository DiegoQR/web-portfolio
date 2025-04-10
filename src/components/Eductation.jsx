import React from 'react';
import EducationCard from './EducationCard';
import { educationData } from '../data/EducationData.js';

function Education() {
    
    return (<>
        <section id="education" className='mt-10 scroll-mt-20'>
            <h1>Education and Achievements</h1>
            <div className='flex flex-col gap-5 mt-10 lg:flex-row flex-wrap justify-center'>
                {educationData.map((education, index) => {
                    return <EducationCard education={education} key={index} />
                })}
            </div>
        </section>
    </>);
}

export default Education;