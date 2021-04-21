import React from 'react';
import App from './App';
import { render, screen } from '@testing-library/react';

describe('App', () => {
    it('should render a header', () => {
        render(<App/>);

        expect(screen.getByText('React Session')).toBeTruthy();
    });
});