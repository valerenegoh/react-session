import React from 'react';
import {render, screen, fireEvent, waitFor} from '@testing-library/react';
import Form from "./Form";

describe('Form', function () {
    it('should render form title', function () {
        render(<Form />);

        expect(screen.getByText("Add team member")).toBeInTheDocument();
    });

    it('should render input boxed', () => {
        render(<Form />);

        expect(screen.getByLabelText("Name")).toBeInTheDocument();
        expect(screen.getByLabelText("Role")).toBeInTheDocument();
        expect(screen.getAllByRole("textbox").length).toEqual(2);
    });

    it('should render submit button', function () {
        render(<Form />);

        expect(screen.getByRole("button", { name: "Submit"})).toBeInTheDocument();
    });

    it("should clear all input boxes when button is clicked", async () => {
        render(<Form onSubmit={() => {}}/>);

        const nameInput = screen.getByLabelText("Name");
        const roleInput = screen.getByLabelText("Role");
        const submitButton = screen.getByRole("button", { name: "Submit"});

        fireEvent.change(nameInput, { target: {value: "Angie"}});
        fireEvent.change(roleInput, { target: {value: "Dev"}});

        await waitFor(() => {
            fireEvent.submit(submitButton);
        });

        expect(nameInput.value).toEqual("");
        expect(roleInput.value).toEqual("");
    });
});