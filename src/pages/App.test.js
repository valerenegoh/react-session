import React from 'react';
import App from './App';
import {fireEvent, render, screen, waitFor} from '@testing-library/react';

describe('App', () => {
    it('should render a header', () => {
        render(<App/>);

        expect(screen.getByText('React Session')).toBeTruthy();
    });

    it('should render form', function () {
        render(<App/>);

        expect(screen.getByText("Add team member")).toBeInTheDocument();
    });

    it('should render table', function () {
        render(<App/>);

        expect(screen.getByText("Existing team members")).toBeInTheDocument();
    });

    it("should render submitted name and role when button is clicked", async () => {
        render(<App/>);
        const entry = {
            name: "Angie",
            role: "Dev"
        }

        fireEvent.change(screen.getByLabelText("Name"), { target: {value: entry.name}});
        fireEvent.change(screen.getByLabelText("Role"), { target: {value: entry.role}});

        await waitFor(() => {
            fireEvent.submit(screen.getByRole("button", { name: "Submit"}));
        });

        expect(screen.getByText(entry.name)).toBeInTheDocument();
        expect(screen.getByText(entry.role)).toBeInTheDocument();
    });
});