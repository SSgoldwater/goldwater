import React from 'react';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import AppDispatcher from '../../dispatcher/AppDispatcher';
import ToDoActions from '../../actions/ToDoActions';
import styles from './styles/CreateToDoStyles';

class CreateToDo extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      textField: "",
    }
  }

  _textChange = (event) => {
    this.setState({ textField: event.target.value });
  }

  _createToDo = () => {
    ToDoActions.createToDo({
      text: this.state.textField
    });

    this.setState({ textField: "" });
  }

  render() {
    return (
      <Paper
        style={ styles.createPostCard }
      >
        <div>
          <TextField
            style={ styles.todoInput }
            floatingLabelText={ "New ToDo" }
            value={ this.state.textField }
            onChange={ this._textChange }
          />
          <RaisedButton
            style={ styles.submitToDo }
            label={ "Create ToDo" }
            onTouchTap={ this._createToDo }
          />
        </div>
      </Paper>
    )
  }
}

export default CreateToDo;
