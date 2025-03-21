import React from 'react';
import ReactModal from 'react-modal';

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';


function ImageGalleryModal(props) {
    const { opened, onClose, images } = props;
    return (
       <ReactModal
        isOpen={opened}
        onRequestClose={onClose}
        className='relative bg-transparent mx-10 outline-none'
        overlayClassName='fixed bg-black/50 fixed inset-0 flex justify-center items-center'
       >
            <Carousel showThumbs={false} dynamicHeight={true} infiniteLoop={true}>
                {images.map((image, index) => {
                    return <div key={index}>
                        <img src={image} alt={`Document ${index}`} />
                    </div>
                })}
            </Carousel>    
       </ReactModal>
    );
}

export default ImageGalleryModal;