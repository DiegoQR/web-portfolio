import React from 'react';
import DevProject from './DevProject';

function Projects() {
    const dataProjects = [
        {
            urlImage: "https://res.cloudinary.com/dho0rif9d/image/upload/v1741906694/web-portfolio/projects-screenshots/imagen_2025-03-13_185810809_p2v0cx.png",
            title: "Niños con Valor (NCV)",
            description: "A university project in which we developed a system for a child foster NGO that helps them keep records of the children and caregivers in their care. ",
            technologies: ["HTML", "CSS", "Javascript", "React", ".NET", "SQL", "Git"],
            urlRepository: "https://github.com/UCB-TallerDeDesarrollo/NCV.git",
        },
        {
            urlImage: "https://res.cloudinary.com/dho0rif9d/image/upload/v1742871250/web-portfolio/projects-screenshots/Captura_de_pantalla_2025-03-24_225214_athm5k.png",
            title: "Web Portfolio",
            description: "This is my personal web portfolio, where I showcase my skills and projects I worked on, as well as experience, education and contact, made with React and tailwind CSS.",
            technologies: ["HTML", "CSS", "React", "Git"],
            urlProject: "https//google.com",
            urlRepository: "https://github.com/DiegoQR/web-portfolio.git",
        },
        {
            urlImage: "https://res.cloudinary.com/dho0rif9d/image/upload/v1742873033/web-portfolio/projects-screenshots/Captura_de_pantalla_2025-03-24_232218_mddgun.png",
            title: "Digital evidence process analysis system with CDRs",
            description: "Communication process analysis system for fast processing, generating and visualizing digital evidence with CDRs, graphs and maps in a HTML document.",
            technologies: ["HTML", "Python", "Git"],
            urlRepository: "https://github.com/DiegoQR/ProyectoDeGrado.git",
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