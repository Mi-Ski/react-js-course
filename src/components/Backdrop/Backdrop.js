import React from 'react';

import './Backdrop.css';

const backdrop = (props) => (
    <div className={`Backdrop ${props.className}`}></div>
);

export default backdrop;