import React from 'react';
import Label from './Label';

function DevProject(props) {
    const project = props.project;
    return (<>
        <div className="relative flex w-full flex-col rounded-xl bg-blue-dark shadow-md mt-15">
            <div className="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-blue-gray-500">
                <img src={project.urlImage} alt="Project" className="object-cover w-full h-full" />
            </div>
            <div className="p-6">
                <h5 className="mb-2 block text-xl font-semibold leading-snug tracking-normal antialiased">
                {project.title}
                </h5>
                <p className="block text-base font-light leading-relaxed text-inherit antialiased">
                {project.description} 
                </p>
                <div className='flex flex-wrap gap-3 mt-3'>
                    <Label color='bg-red-500' icon={<i className="fa-brands fa-html5"></i>}>HTML</Label>
                    <Label color='bg-blue-500' icon={<i className="fa-brands fa-css3"></i>}>CSS</Label>
                    <Label color='bg-yellow-500' icon={<i className="fa-brands fa-js"></i>}>JavaScript</Label>
                </div>
                <div className='flex gap-3 mt-10 justify-center'>
                    <a href={project.urlProject} className='group'><i className="fa-solid fa-laptop-code fa-2xl group-hover:text-gray-300"></i></a>
                    <a href={project.urlRepository} className='group'><i className="fa-brands fa-github fa-2xl group-hover:text-gray-300"></i></a>
                </div>
            </div>
            <div className="p-6 pt-0">
                
            </div>
        </div>
    </>);
}

export default DevProject;