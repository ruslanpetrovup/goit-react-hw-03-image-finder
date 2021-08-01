import React from 'react';

const ImageGalleryItem = ({ imagesItem }) => {
    return (
    <>
        {imagesItem.map((num) => { return (<li key={num.id} className="ImageGalleryItem">
            <img src={num.webformatURL} alt={num.id} className="ImageGalleryItem-image" />
            </li>)
        })}
    </>
    )
}
export default ImageGalleryItem