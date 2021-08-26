import React from 'react';
import ReactDOM from 'react-dom';
import Appointment from './Appoitment.page';

describe('Appointment', () => {
    it('Renderiza o nome do primeiro client', () => {
        const customer = { firstName: 'Ashley' };
        const component = <Appointment customer={ customer } />;
        const container = document.createElement('div');

        ReactDOM.render(component, container);
        expect(container.textContent).toMatch('Ashley')
    })

    it('Renderiza o nome de outro client', () => {
        const customer = { firstName: 'Jordan' };
        const component = <Appointment customer={ customer } />;
        const container = document.createElement('div');

        ReactDOM.render(component, container);
        expect(container.textContent).toMatch('Jordan')
    })
})