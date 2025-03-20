// filepath: d:\Sistemas_Diego\web-portfolio\src\components\ImageGalleryModal.jsx
import React from 'react';
import Modal from 'react-modal';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

Modal.setAppElement('#root'); // Ajusta esto según tu estructura de proyecto

function ImageGalleryModal({ isOpen, onRequestClose, images }) {
    return (
        <Modal isOpen={isOpen} onRequestClose={onRequestClose} className="flex items-center justify-center">
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-3xl w-full">
                <h2 className="text-2xl mb-4">Documentos</h2>
                <button onClick={onRequestClose} className="bg-red-500 text-white px-4 py-2 rounded mb-4">Cerrar</button>
                <Carousel showThumbs={false} className="carousel">
                    {images.map((image, index) => (
                        <div key={index}>
                            <img src={image} alt={`Document ${index + 1}`} className="max-h-96 object-contain mx-auto" />
                        </div>
                    ))}
                </Carousel>
            </div>
        </Modal>
    );
}

export default ImageGalleryModal;