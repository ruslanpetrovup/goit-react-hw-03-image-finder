import React from 'react';

const ImageGallery = ({ children,modal }) => {
    return (
            <ul className="ImageGallery" id="ImageGallery" onClick={modal}>
                {children}
            </ul>
        )
    }
export default ImageGallery