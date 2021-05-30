import React, {Component} from 'react';
import InputField from "../InputField/InputField";

const initialState = {
    Name: "",
    Role: ""
};

class Form extends Component {

    state = initialState

    onSubmit = (event) => {
        event.preventDefault();
        this.props.onSubmit(this.state);
        this.setState(initialState)
    }

    onChange = (name, value) => {
         this.setState({
             [name]: value
         })
    }

    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <h1>Add team member</h1>
                { Object.keys(this.state).map((key, i) => (
                    <InputField key={i} name={key} value={this.state[key]} onChange={this.onChange}/>
                ))}
                <button>Submit</button>
            </form>
        );
    }
}

export default Form;