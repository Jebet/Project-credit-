import React from 'react';
import './ToggleButton.css'


const ToggleButton = (props) => {
    return ( 
            <div className="toggle-button" onClick={props.click}>
            <i class="fas fa fa-bars"></i>
            </div>
            );
};

export default ToggleButton;