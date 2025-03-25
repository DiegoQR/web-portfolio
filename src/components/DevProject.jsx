import React from 'react';
import Label from './Label';

function DevProject(props) {
    const techLabelsDictionary= {
        "HTML": { icon: <i className="fa-brands fa-html5"></i>, color: "bg-red-500"},
        "CSS": { icon: <i className="fa-brands fa-css3"></i>, color: "bg-blue-500"},
        "Javascript": { icon: <i className="fa-brands fa-js"></i>, color: "bg-yellow-500"},
        "React": { icon: <i className="fa-brands fa-react"></i>, color: "bg-blue-700"},
        "Node": { icon: <i className="fa-brands fa-node"></i>, color: "bg-teal-500"},
        "Python": { icon: <i className="fa-brands fa-python"></i>, color: "bg-amber-600"},
        ".NET": { icon: <i className="fa-solid fa-globe"></i>, color: "bg-purple-500"},
        "SQL": { icon: <i className="fa-solid fa-database"></i>, color: "bg-lime-500"},
        "MongoDB": { icon: <i className="fa-solid fa-server"></i>, color: "bg-green-500"},
        "Git": { icon: <i className="fa-brands fa-square-git"></i>, color: "bg-slate-950"},
    }
    const project = props.project;
    return (<>
        <div className="relative flex w-full flex-col rounded-xl bg-blue-dark shadow-md intersect:motion-preset-rebound-right lg:w-30/100 ">
            <div className="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-blue-gray-500">
                <img src={project.urlImage} alt="Project" className="object-cover object-top w-full h-full" />
            </div>
            <div className="p-6">
                <h5 className="mb-2 block text-xl font-semibold leading-snug tracking-normal antialiased">
                {project.title}
                </h5>
                <p className="block text-base font-light leading-relaxed text-inherit antialiased">
                {project.description} 
                </p>
                <div className='flex flex-wrap gap-3 mt-3'>
                    {project.technologies.map((technology, index) => {
                        return <Label key={index} color={techLabelsDictionary[technology].color} icon={techLabelsDictionary[technology].icon}>{technology}</Label>
                    })}
                </div>
                <div className='flex gap-3 mt-10 justify-center items-center'>
                    {project.urlProject !==  undefined ? <a href={project.urlProject} className='rounded-2xl p-2 hover:text-gray-900 hover:bg-amber-50 transition' target='_blank'><i className="fa-solid fa-laptop-code fa-2x"></i></a> : <></>}
                    {project.urlRepository !== undefined ? <a href={project.urlRepository} className='rounded-2xl p-2 hover:text-gray-900 hover:bg-amber-50 transition' target='_blank'><i className="fa-brands fa-github fa-2xl"></i></a> : <></>}
                </div>
            </div>
            <div className="p-6 pt-0">
                
            </div>
        </div>
    </>);
}

export default DevProject;