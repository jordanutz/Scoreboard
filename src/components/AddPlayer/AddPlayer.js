import React, {Component} from 'react';
import {FormGroup, FormControl, Button} from 'react-bootstrap';
import './AddPlayer.css'


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

    return (
      <div className="addplayer-container">
          <form className="form-container">
            <FormGroup
             controlId="formBasicText"
           >

           <FormControl
             type="text"
             value={this.state.addPlayer}
             placeholder="Enter a Player's Name"
             onChange={this.handleAddPlayer}
             className="form-input"
           />

            </FormGroup>
          </form>

          <Button onClick={this.handleSubmit}>Add Player</Button>
      </div>
    )
  }
}

export default AddPlayer;
