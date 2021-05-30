import React from 'react';
import Header from '../components/Header/Header';
import './App.css';
import Form from "../components/Form/Form";
import Table from "../components/Table/Table";

class App extends React.Component {
    state = {
        teamMembers: []
    }

    addMember = (teamMember) => {
        if(this.validateFields(teamMember)) {
            this.setState({
                teamMembers: [...this.state.teamMembers, teamMember]
            })
        }
    }

    validateFields = (teamMember) => {
        for (let key of Object.keys(teamMember)) {
            if (!teamMember[key].trim()) {
                return false;
            }
        }
        return true;
    }

  render = () => {

    return (
      <div className="app">
        <Header></Header>
        <div className="content">
            <Form onSubmit={this.addMember}/>
            <Table entries={this.state.teamMembers}/>
        </div>
      </div>
    );
  }
}

export default App;