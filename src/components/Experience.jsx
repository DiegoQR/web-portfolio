import React from 'react';
import JobExperience from './JobExperience';
import { dataJobs } from '../data/ExperienceData.js';

function Experience() {

    return (<>
        <section id='experience' className='mt-10 space-y-10 scroll-mt-20'>
            <h1>Experience</h1>
            <div className='flex flex-col gap-10 lg:flex-row'>
                {dataJobs.map((job, index) => {
                    return <JobExperience key={index} job={job} />
                })}
            </div>
        </section>
    </>);
}

export default Experience;