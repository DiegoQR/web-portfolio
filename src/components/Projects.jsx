import React from 'react';
import DevProject from './DevProject';

function Projects() {
    const dataProjects = [
        {
            urlImage: "https://res.cloudinary.com/dho0rif9d/image/upload/v1741906694/web-portfolio/imagen_2025-03-13_185810809_p2v0cx.png",
            title: "Niños con Valor (NCV)",
            description: "A university project in which we developed a system for a child foster NGO that helps them keep records of the children and caregivers in their care. ",
            technologies: ["HTML", "CSS", "Javascript", "React", ".NET", "Git"],
            urlRepository: "https://github.com/UCB-TallerDeDesarrollo/NCV.git",
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
            <div className='flex flex-col gap-20 mt-20 lg:flex-row lg:gap-5'>
                {dataProjects.map((project, index) => {
                    return <DevProject key={index} project={project} />;
                })}
            </div>
        </section>
    </>);
}

export default Projects;