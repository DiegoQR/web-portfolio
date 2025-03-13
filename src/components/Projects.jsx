import React from 'react';
import DevProject from './DevProject';

function Projects() {
    const dataProjects = [
        {
            urlImage: "https://i.imgur.com/ktLC9dO.png",
            title: "Project 1",
            description: "Brief description of the project",
            technologies: ["HTML", "CSS", "Javascript"],
            urlProject: "https//google.com",
            urlRepository: "https://github.com",
        },
        {
            urlImage: "https://i.imgur.com/ktLC9dO.png",
            title: "Project 2",
            description: "Brief description of the project",
            technologies: ["HTML", "CSS", "Javascript"],
            urlProject: "https//google.com",
            urlRepository: "https://github.com",
        },
        {
            urlImage: "https://i.imgur.com/ktLC9dO.png",
            title: "Project 3",
            description: "Brief description of the project",
            technologies: ["HTML", "CSS", "Javascript"],
            urlProject: "https//google.com",
            urlRepository: "https://github.com",
        },
    ]
    return (<>
        <section id="projects" className='mt-10 scroll-mt-20'>
            <h1>Projects</h1>
            {dataProjects.map((project, index) => {
                return <DevProject key={index} project={project} />;
            })}
        </section>
    </>);
}

export default Projects;