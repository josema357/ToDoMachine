import React from "react";
import ReactDOM from 'react-dom';
import './Modal.css';
import closeIcon from '../assets/icons/x-square-fill.svg'

function Modal({children}){
    return ReactDOM.createPortal(
        <div className="modal">
            <div className="modal-content">
                <img src={closeIcon} className="close-modal" id="closeModal" alt="Close"/>
                {children}
            </div>
        </div>,
        document.getElementById('modal')
    );
}

export {Modal};