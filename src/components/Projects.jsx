import React from 'react';
import DevProject from './DevProject';
import { dataProjects } from '../data/ProjectData.js';

function Projects() {
    
    return (<>
        <section id="projects" className='mt-10 scroll-mt-20'>
            <h1>Projects</h1>
            <div className='flex flex-col flex-wrap mt-20 gap-10 lg:flex-row lg:gap-x-5 lg:gap-y-10 justify-center'>
                {dataProjects.map((project, index) => {
                    return <DevProject key={index} project={project} />;
                })}
            </div>
        </section>
    </>);
}

export default Projects;