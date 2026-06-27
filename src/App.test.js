// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders CryptoPro title', () => {
    render(<App />);
    const titleElement = screen.getByText(/CryptoPro/i);
    expect(titleElement).toBeInTheDocument();
});
