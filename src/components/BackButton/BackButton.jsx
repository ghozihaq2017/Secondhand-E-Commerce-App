import React from 'react'
import { useNavigate } from 'react-router-dom';

//style
import './BackButton.css'

//assets
import { FiArrowLeft } from "react-icons/fi";

const BackButton = () => {
    const history = useNavigate();

    return (
        <>
            <FiArrowLeft className="back-button-arrow" onClick={() => history(-1)} />
        </>
    )
}

export default BackButton