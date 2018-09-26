import React from "react";

import Header from "./Header";
import Action from "./Action";
import AddOption from "./AddOption";
import Options from "./Options";
import OptionModal from "./OptionModal";
import Footer from "./Footer";

class IndecisionApp extends React.Component {
  state = {
    options: [],
    selectedOption: undefined,
  };

  handleDeleteOptions = () => {
    this.setState(() => ({ options: [] }));
  };
  handleDeleteOption = optionToRemove => {
    this.setState(prevState => ({
      options: prevState.options.filter(option => optionToRemove !== option),
    }));
  };
  handlePick = () => {
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randomNum];
    this.setState(() => ({
      selectedOption: option,
    }));
  };
  handleAddOption = option => {
    if (!option) {
      return "Enter valid value to add item";
    } else if (this.state.options.indexOf(option) > -1) {
      return "This option already exists";
    }

    this.setState(prevState => ({
      options: prevState.options.concat(option),
    }));
  };

  handleClearOption = () => {
    this.setState(() => ({
      selectedOption: undefined,
    }));
  };
  componentDidMount() {
    try {
      const json = localStorage.getItem("options");
      const options = JSON.parse(json);
      //If there are no option in optionsArray DONT setState
      //instead(else) setState will be just=== options: props.options
      if (options) {
        this.setState(() => ({ options }));
      }
    } catch (e) {
      //Do nothing if the json data is NOT valid-- DO nothing
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.options.length !== this.state.options.length) {
      const json = JSON.stringify(this.state.options);
      localStorage.setItem("options", json);
      // console.log('saving data');
      console.log("update");
    }
  }

  componentWillUnmount() {
    console.log("Component will unmount");
  }
  render() {
    const subtitle = "Put your life in the hands of a computer";

    return (
      <div>
        <Header subtitle={subtitle} />
        <div className="container">
          <Action
            hasOptions={this.state.options.length > 0}
            handlePick={this.handlePick}
          />
          <div className="widget">
            <Options
              hasOptions={this.state.options.length > 0}
              options={this.state.options}
              handleDeleteOptions={this.handleDeleteOptions}
              handleDeleteOption={this.handleDeleteOption}
            />
            <AddOption handleAddOption={this.handleAddOption} />
          </div>
        </div>
        <OptionModal
          selectedOption={this.state.selectedOption}
          handleClearOption={this.handleClearOption}
        />
        {/* <Footer /> */}
      </div>
    );
  }
}

export default IndecisionApp;
