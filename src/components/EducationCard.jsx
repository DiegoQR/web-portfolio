import React, { useState } from 'react';
import ImageGalleryModal from './ImageGalleryModal';

function EducationCard(props) {
    const { education } = props;
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const openModal = () => setModalIsOpen(true);
    const closeModal = () => setModalIsOpen(false);

    return (
        <>
            <div className='bg-blue-dark p-10 rounded-2xl flex flex-col gap-2'>
                <h2>{education.institution} - <strong>{education.title}</strong></h2>
                <span className='text-sm text-gray-400'>{education.startDate} - {education.endDate}</span>
                <ul className='list-disc list-inside'>
                    {education.achivements.map((achivement, index) => {
                        return <li key={index}>{achivement}</li>
                    })}
                </ul>
                <a onClick={openModal} className='bg-orange px-5 py-2.5 rounded-2xl font-bold space-x-3 mt-5 w-fit hover:bg-orange-200 cursor-pointer'>
                    <i className="fa-solid fa-file"></i>
                    <span>Docs</span>
                </a>
            </div>
            <ImageGalleryModal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                images={education.documents} // Asegúrate de que `education.documents` contenga las URLs de las imágenes
            />
        </>
    );
}

export default EducationCard;