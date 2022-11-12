import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Header from './Header';

test('renders text Home', () => {
    render(
        <BrowserRouter>
        <Header /> 
        </BrowserRouter>
        
    );
    const homeText = screen.getByText(/Home/i);
    expect(homeText).toBeInTheDocument();
});