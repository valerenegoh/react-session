import React, {Component} from 'react';
import InputField from "../InputField/InputField";

const initialState = {
    name: "",
    role: ""
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
                <InputField label={"Name"} value={this.state.name} name={"name"} onChange={this.onChange}/>
                <InputField label={"Role"} value={this.state.role} name={"role"} onChange={this.onChange}/>
                <button>Submit</button>
            </form>
        );
    }
}

export default Form;