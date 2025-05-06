import React from 'react';

import { useDisclosure } from '@mantine/hooks';

import ImageGalleryModal from './ImageGalleryModal';
import { FaFileAlt } from "react-icons/fa";

function EducationCard(props) {
    const { education, index } = props;
    const [opened, { open, close }] = useDisclosure(false);

    return (
        <>
            <div className='bg-blue-dark p-10 rounded-2xl flex flex-col gap-2 intersect:motion-preset-rebound-left lg:w-48/100' key={index}>
                <h2>{education.institution} - <strong>{education.title}</strong></h2>
                <span className='text-sm text-gray-400'>{education.duration}</span>
                <ul className='list-disc list-inside'>
                    {education.achievements.map((achievements, index) => {
                        return <li key={index}>{achievements}</li>
                    })}
                </ul>
                <a onClick={open} className='bg-orange px-5 py-2.5 rounded-2xl font-bold space-x-3 mt-5 w-fit hover:bg-orange-200 cursor-pointer'>
                    <FaFileAlt className='inline' />
                    <span>Docs</span>
                </a>
            </div>
            <ImageGalleryModal
                opened={opened}
                onClose={close}
                images={education.documents} 
            />
        </>
    );
}

export default EducationCard;