import React, {Component} from 'react';

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

    onChange= (event) => {
         const { name, value } = event.target;

         this.setState({
             [name]: value
         })
    }

    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <h1>Add team member</h1>
                <label>
                    <span>Name</span>
                    <input value={this.state.name} name={"name"} onChange={this.onChange}/>
                </label>
                <label>
                    <span>Role</span>
                    <input value={this.state.role} name={"role"} onChange={this.onChange}/>
                </label>
                <button>Submit</button>
            </form>
        );
    }
}

export default Form;