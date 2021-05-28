import React from 'react';
import {render, screen} from '@testing-library/react';
import Table from "./Table";

describe('Table', function () {
    it('should render title', () => {
        render(<Table entries={[]}/>);
        expect(screen.getByText("Existing team members")).toBeInTheDocument();
    });

    it('should render Name and Role headers', () => {
        render(<Table entries={[]}/>);
        expect(screen.getByText("Name")).toBeInTheDocument();
        expect(screen.getByText("Role")).toBeInTheDocument();
    });

    it("should render example name and role in a row", async () => {
        const entry = {
            name: "Angie",
            role: "Dev"
        }
        render(<Table entries = {[entry]}/>);

        expect(screen.getByText(entry.name)).toBeInTheDocument();
        expect(screen.getByText(entry.role)).toBeInTheDocument();
    });
});