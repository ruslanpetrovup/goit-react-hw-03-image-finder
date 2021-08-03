import React from 'react';


const Modal = ({src,alt, closeModal}) => {
    return (
        <div className="Overlay isHidden" onClick={closeModal}>
        <div className="Modal">
                <img src={src} alt={alt} />
        </div>
        </div>
    )
}
export default Modal