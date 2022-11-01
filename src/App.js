import React, { Component } from "react";
import { Transition } from "react-transition-group";

import "./App.css";
import Modal from "./components/Modal/Modal";
import Backdrop from "./components/Backdrop/Backdrop";
import List from "./components/List/List";

class App extends Component {
  // modal shown satate
  state = {
    modalIsOpen: false,
  };

  //show modal
  showModal = () => {
    this.setState({ modalIsOpen: true });
  };

  //hide modal
  closeModal = () => {
    this.setState({ modalIsOpen: false });
  };

  render() {
    const duration = 300;
    const defaultStyle = {
      transition: `opacity ${duration}ms ease-in-out`,
      opacity: 0,
    };

    return (
      <div className="App">
        <h1>React Animations</h1>

        <Transition in={this.state.modalIsOpen} timeout={300}>
          {(state) => (
            <>
              <Modal
                closed={this.closeModal}
                className={
                  this.state.modalIsOpen ? "shown" : "hidden"
                }
              />
              <Backdrop
                className={
                  this.state.modalIsOpen ? "shown" : "hidden"
                }
              />
            </>
          )}
        </Transition>

        <button className="Button" onClick={() => this.showModal()}>
          Open Modal
        </button>
        <h3>Animating Lists</h3>
        <List />
      </div>
    );
  }
}

export default App;
