import {render, screen} from "@testing-library/react";
import InputField from "./InputField";

describe('Input Field', () => {
    it('should render example label and input box', () => {
        const field = "MyLabel";
        render(<InputField name={field}/>);

        expect(screen.getByLabelText(field)).toBeInTheDocument();
        expect(screen.getAllByRole("textbox").length).toEqual(1);
    });
})