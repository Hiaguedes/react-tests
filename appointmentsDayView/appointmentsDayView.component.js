import React from 'react';
import Appointment from '../appointments/Appointment.component'

const AppointmentsDayView = ({appointments}) => {

    const handleConvertTimestampToHHMM = timestamp => {
        const [h,m] = new Date(timestamp)
                            .toTimeString()
                            .split(':');
        
            return `${h}:${m}`
    }
    if(appointments.length === 0){ 
        return(
        <div className="appointmentsDayView">
            <p>Nenhum agendamento feito ainda</p>
        </div>
        ) 
    }
    return( 
    <div className="appointmentsDayView">
        <ol>
        {appointments.map(({startAt, customer}, index) => {
            return (
                <li key={`${index} - ${new Date().getTime()}`}>
                    <p>{handleConvertTimestampToHHMM(startAt)}</p>
                    <Appointment customer={customer}/>
                </li>
            )
        })}
        </ol>
    </div>
    )
}

export default AppointmentsDayView