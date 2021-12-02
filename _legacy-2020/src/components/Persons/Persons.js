import React, { PureComponent } from "react";
import Person from "./Person/Person";

export default class Persons extends PureComponent {
   // pure component implements shouldComponentUpdate with a complete props check
  // static getDerivedStateFromProps (props, state) {
  //    console.log('[persons.js] getDerivedStateFromProps');
  //    return state;
  // }

  // shouldComponentUpdate (nextProps, nextState) {
  // // returns a boolean
  // if (nextProps.persons !== this.props.persons || nextProps.clicked !== this.props.clicked || nextProps.changed !== this.props.changed) {
  // console.log('[persons.js] shouldComponentUpdate TRUE');
  // return true;
  // } else {
  // console.log('[persons.js] shouldComponentUpdate FALSE');
  // return false;
  // }
  // }

  getSnapshotBeforeUpdate(perviousProps, previousState) {
    console.log("[persons.js] getSnapshotBeforeUpdate");
    return { message: "Snapshot before update!💥" };
  }

  componentDidUpdate(previousProps, previousState, snapshot) {
    console.log("[persons.js] componentDidUpdate");
    console.log(snapshot);
  }

  componentWillUnmount() {
    console.log("[persons.js] componentWillUnmount");
  }
 
  render() {
    return this.props.persons.map((el, index) => {
      return (
        <Person
          name={el.name}
          key={el.id}
          age={el.age}
          click={() => this.props.clicked(index)}
          changed={(event) => this.props.changed(event, el.id)}
        />
      )
    })
  }
}
