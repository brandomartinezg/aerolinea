import React from 'react'
import { mount, shallow} from 'enzyme';
import Header from '../../components/header/Header';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';

jest.mock("react-redux", () => ({
    useSelector: jest.fn(),
}));
jest.mock('react-router', () => ({
    useNavigate: jest.fn()
}));

describe('<Header/>', () => {
    var calls = 0;
    beforeEach(() => {
        useSelectorMock.mockImplementation(selector => selector(mockStore));
        useNavigateMock.mockImplementation(() => () => {calls=calls+1});
    })
    afterEach(() => {
        useSelectorMock.mockClear();
        useNavigateMock.mockClear()
    })

    const useSelectorMock = useSelector;
    const useNavigateMock = useNavigate;

    const mockStore = {
        selectedFlights:[{id:1}]
    };
    test('Render del componente Header', () => {
        const header = mount(<Header/>);
        expect(header.length).toEqual(1);
        header.unmount();
    });
    test('Render del título', () => {
        const header = shallow(<Header/>);
        expect(header.find('.hc-text').text()).toEqual('Cennet Air');
    });
    test('Simular onclick a home', () =>{
        const header = shallow(<Header/>);
        header.find('.hc-brand-container').simulate('click');
        expect(calls).toEqual(1);
    });
    test('Simular onclick a el carrito', () =>{
        const header = shallow(<Header/>);
        header.find('.hc-shopping-cart-container').simulate('click');
        expect(calls).toEqual(2);
    });
})
