import React from 'react';

function JobExperience(props) {
    const { job } = props;
    return (<>
        <div className='space-y-2 bg-blue-dark p-5 rounded-b-2xl shadow-2xl border-t-10 border-red'>
            <h2>{job.company}</h2>
            <h3 className='font-bold'>{job.position}</h3>
            <p className='font-light text-gray-400'>{job.startDate} - {job.endDate}</p>
            <ul className='list-disc list-inside'>
                {job.achievements.map((achievement, index) => {
                    return <li key={index}>{achievement}</li>  
                }
                )}
            </ul>
        </div>
    </>);
}

export default JobExperience;