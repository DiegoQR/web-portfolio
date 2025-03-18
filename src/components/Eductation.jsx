import React from 'react';
import EducationCard from './EducationCard';

function Education() {
    const educationData = [
        {
            institution: "Universidad Catolica Boliviana 'San Pablo' ",
            title: "Professional Degree in Software Systems Engineering",
            startDate: "February 2019",
            endDate: "November 2023",
            achivements: [
                "Graduated with honors with an average grade of 87 out of 100",
                "Competed at the ICPC-Bolivia 2022 regional event with the CodeRunners Team",
                "Finalist in the Competitive Programing Contest sponsored by AzureSoft Digital Academy"
            ]
        },
        {
            institution: "Universidad Catolica Boliviana 'San Pablo' ",
            title: "Professional Degree in Software Systems Engineering",
            startDate: "February 2019",
            endDate: "November 2023",
            achivements: [
                "Graduated with honors with an average grade of 87 out of 100",
                "Competed at the ICPC-Bolivia 2022 regional event with the CodeRunners Team",
                "Finalist in the Competitive Programing Contest sponsored by AzureSoft Digital Academy"
            ]
        },
    ]
    return (<>
        <section id="education" className='mt-10 scroll-mt-20'>
            <h1>Education</h1>
            <div className='flex flex-col gap-5 mt-10 lg:flex-row'>
                {educationData.map((education, index) => {
                    return <EducationCard education={education} index={index} />
                })}
            </div>
        </section>
    </>);
}

export default Education;