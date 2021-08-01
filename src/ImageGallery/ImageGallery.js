import React from 'react';

const ImageGallery = ({ children }) => {
    return (
            <ul className="ImageGallery" id="ImageGallery">
                {children}
            </ul>
        )
    }
export default ImageGallery