import React from 'react';
import EducationCard from './EducationCard';

function Education() {
    const educationData = [
        {
            institution: "Universidad Catolica Boliviana 'San Pablo' ",
            title: "Professional Degree in Software Systems Engineering",
            startDate: "February 2019",
            endDate: "November 2023",
            achivements: ["Graduated with honors with an average grade of 87 out of 100"]
        },
    ]
    return (<>
        <section id="education" className='mt-10'>
            <h1>Education</h1>
            <div>
                {educationData.map((education, index) => {
                    return <EducationCard education={education} index={index} />
                })}
            </div>
        </section>
    </>);
}

export default Education;