import React, {Component} from 'react';
import {FormGroup, FormControl, Button} from 'react-bootstrap';
import './AddPlayer.scss'
import AddCircle from './Assets/AddCircle.svg'

class AddPlayer extends Component {
  constructor() {
    super()
    this.state = {
      addPlayer: ''
    }
    this.handleAddPlayer = this.handleAddPlayer.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleAddPlayer = (e) => {
    this.setState({
      addPlayer: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addPlayer(this.state.addPlayer)
    this.resetAddForm();
  }

  resetAddForm = () => {
    this.setState({
      addPlayer: ''
    })
  }

  render () {
    console.log(this.state.addPlayer)
    console.log(this.props)

    const {addPlayer} = this.state;
    const isEnabled = addPlayer.length > 0;

    return (
      <div className="AddPlayer">
          <form className="AddPlayerForm">
            <FormGroup controlId="formBasicText">

           <FormControl
             type="text"
             value={this.state.addPlayer}
             placeholder="Enter a Player's Name"
             onChange={this.handleAddPlayer}
             className="FormInput"
           />

            </FormGroup>
          </form>

          <div className="AddIcon">

            <img
              src= {AddCircle}
              className="AddIcon"
              disabled={!isEnabled}
              onClick={this.handleSubmit}
            />

          </div>
      </div>
    )
  }
}

export default AddPlayer;
