import React from 'react';
import JobExperience from './JobExperience';
function Experience() {
    const dataJobs = [
        {
            company: "TRUEXTEND",
            position: "Internship",
            startDate: "February 2023",
            endDate: "November 2023",
            achievements: [
                "Developed and maintained company website using HTML, CSS, C#, Javascript and Orchard with a team of other developers.",
                "Created database models and API for dynamic web applications.",
                "Collaborated with developers, designers and QA to put in production software.",
                "Troubleshooted and resolved bugs within the main site of the company."
            ]
        },
        {
            company: "One Click",
            position: "Developer",
            startDate: "November 2024",
            endDate: "Present",
            achievements: [
                "The first few months I worked in customer service and product sales. Later I was assigned to develop a management system for improving the business process.",
                "Started a development from scratch to build a  website for a resource management with database design, requirements engineering and UI design.",
                "Developed from scratch a website for a resource management using SQL database, .NET with MVC, React and Tailwind  as technology stack"
            ]
        },
    ]

    return (<>
        <section id='experience' className='mt-10 space-y-10 scroll-mt-20'>
            <h1>Experience</h1>
            {dataJobs.map((job, index) => {
                return <JobExperience key={index} job={job} />
            })}
        </section>
    </>);
}

export default Experience;