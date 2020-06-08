import React from 'react';
import Icon from "@material-ui/core/Icon";
import Textarea from 'react-textarea-autosize';
import Card from "@material-ui/core/Card";
import Button from "@material-ui/core/Button";
import { connect } from "react-redux";
import { addList, addCard } from "../actions";


class TrelloActionButton extends React.Component {

  state = {
    formOpen: false,  
  };

  openForm = () => {
    this.setState({
      formOpen: true
    });
  };

  closeForm = event => {
    this.setState({
      formOpen: false
    });
  };

  handleInputChange = event => {
    this.setState({
      text:event.target.value
    });
  };

  handleAddList = () => {
    const { dispatch } = this.props;
    const { text } = this.state;

    if (text) {
      this.setState({
        text: ""
      })
      dispatch(addList(text))
    }

    return;
  };

  handleAddCard = () => {
    const { dispatch, listID } = this.props;
    const { text } = this.state;

    if (text) {
      this.setState({
        text: ""
      })
      dispatch(addCard(listID, text))
    }
  }

  renderAddButton = () => {
    const { list } = this.props;
    
    const buttonText = list ? "New Card" : "TASK";
    const buttonTextOpacity = list ? 1 : 0.5;
    const buttonTextColor = list ? "white" : "rgb(75, 75, 75)";
    const buttonTextBackground = list ? "rgba(0,0,0,.15)" : "inherit";

    return (
      <div 
        onClick={this.openForm}
        className="BtnGroup"
        style={{opacity:buttonTextOpacity,
                color:buttonTextColor,
                backgroundColor:buttonTextBackground
        }}>
        <Icon>add</Icon>
        <p> {buttonText} </p>
      </div>

    );

  };

  renderForm = () => {
    const { list } = this.props;
    const placeholder = list ? "Enter list Title" : "Enter a title for this card...";

    const buttonTitle = list ? "Add List" : "Add Card";

    return <div>
      <Card className="writeCard">
        <Textarea 
          className="TextArea"
          placeholder= {placeholder}
          autoFocus
          onBlur= {this.closeForm}
          value = {this.state.text}
          onChange= {this.handleInputChange}
        />
                
      </Card>

      <div className="FormBtnGroup">
        <Button 
          onMouseDown = { list ? this.handleAddList : this.handleAddCard }
          className="AddBtn" 
          variant ="contained" > {buttonTitle} {""} </Button>
        <Icon className="CloseBtn"> close </Icon>
      </div>

    </div>

  };

  render (){
    return this.state.formOpen ? this.renderForm() : this.renderAddButton();
  }
}

export default connect()(TrelloActionButton);