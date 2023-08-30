import React, { useContext } from "react";
import ReactDOM from 'react-dom';
import './Modal.css';
import closeIcon from '../assets/icons/x-square-fill.svg'
import {TodoContext} from '../Context/ToDoContext';

function Modal({children}){
    const {setOpenModal}=useContext(TodoContext);
    return ReactDOM.createPortal(
        <div className="modal">
            <div className="modal-content">
                <img src={closeIcon} className="close-modal" id="closeModal" alt="Close" onClick={()=>{setOpenModal(false)}}/>
                {children}
            </div>
        </div>,
        document.getElementById('modal')
    );
}

export {Modal};