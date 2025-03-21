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
        className='bg-transparent mx-10'
        overlayClassName='bg-black/50 fixed inset-0 flex justify-center'
       >
            <Carousel showThumbs={false}dynamicHeight={true} className='mt-25'>
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