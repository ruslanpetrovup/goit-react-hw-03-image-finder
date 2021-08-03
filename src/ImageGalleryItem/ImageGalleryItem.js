import React from 'react';

const ImageGalleryItem = ({ imagesItem }) => {
    return (
    <>
        {imagesItem.map((num) => { return (<li className="ImageGalleryItem" >
            <img key={num.id} id={num.largeImageURL} src={num.webformatURL} alt={num.name} className="ImageGalleryItem-image" />
            </li>)
        })}
    </>
    )
}
export default ImageGalleryItem