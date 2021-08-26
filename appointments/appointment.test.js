import React from 'react';
import ReactDOM from 'react-dom';
import Appointment from './Appoitment.component';

describe('Appointment', () => {
    let component;
    let container;
    let customer;

    const DomRender = component => ReactDOM.render(component, container)

    beforeEach(() => {
        container = document.createElement('div');
        
    })
    it('Renderiza o nome do primeiro client', () => {
        customer = { firstName: 'Ashley' };
        component = <Appointment customer={ customer } />;

        DomRender(component);
        expect(container.textContent).toMatch('Ashley')
    })

    it('Renderiza o nome de outro client', () => {
        customer = { firstName: 'Jordan' };
        component = <Appointment customer={ customer } />;

        DomRender(component);
        expect(container.textContent).toMatch('Jordan')
    })
})