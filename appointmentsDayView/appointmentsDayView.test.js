import React from 'react';
import ReactDOM from 'react-dom';
import AppointmentsDayView from './appointmentsDayView.component'

describe('Appoitment Day View',() => {
    let container;
    const today = new Date();
    const appointments = [
        {startAt: today.setHours(12,0), customer: {firstName: "Ashley"}},
        {startAt: today.setHours(14,0), customer: {firstName: "John"}},
    ]

    const DomRender = component => ReactDOM.render(component, container);
    
    beforeEach(() => {
        container = document.createElement('div');
    })
    it('Renderiza o component com o id correto', () => {

        DomRender(<AppointmentsDayView appointments={[]} />);
        expect(container.querySelector('div.appointmentsDayView')).not.toBeNull();
    });
    
    it('Renderiza o número correto de agendamentos', () => {

        DomRender(<AppointmentsDayView appointments={appointments} />);
        expect(container.querySelector('ol').children).toHaveLength(2)
    });

    it('Renderiza o conteúdo dos agendamentos dentro de uma li e com padrão HH:MM', () => {
        DomRender(<AppointmentsDayView appointments={appointments} />);

        expect(container.querySelectorAll('li')).toHaveLength(2);
        expect(container.querySelectorAll('p')[0].textContent).toEqual('12:00');
        expect(container.querySelectorAll('p')[1].textContent).toEqual('14:00');
    })

    it('Renderiza um mensagem específica caso não tenhamos nenhum agendamento', () => {
        DomRender(<AppointmentsDayView appointments={[]} />);
        expect(container.textContent).toMatch('Nenhum agendamento feito ainda')
    })
})