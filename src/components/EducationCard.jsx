import React from 'react';
function EducationCard(props) {
    const { education } = props
    return (<>
        <div className='bg-blue-dark p-10 rounded-2xl space-y-2'>
            <h2>{education.institution} - <strong>{education.title}</strong></h2>
            <span>{education.startDate} - {education.endDate}</span>
            <ul>
                {education.achivements.map((achivement, index) => {
                    return <li key={index}>{achivement}</li>
                })}
            </ul>
            <a>Docs</a>
        </div>
    </>);
}

export default EducationCard;