import React from 'react';

const Appointment = ({customer: {firstName}}) => {
    return (
        <h1>{firstName}</h1>
    )
}

export default Appointment;