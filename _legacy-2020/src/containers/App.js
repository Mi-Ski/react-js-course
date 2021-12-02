import React, { Component } from 'react';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import classes from './App.css';
import withClass from '../hoc/withClass';
import Auxiliary from '../hoc/Auxiliary';

class App extends Component {
	constructor(props) {
		console.log('[app.js] constructor');
		super(props);

		this.state = {
			persons: [
				{ id: 'sdff', name: 'Max', age: 28 },
				{ id: 'dfsd', name: 'Manu', age: 29 },
				{ id: '34l', name: 'Stephanie', age: 26 },
			],
			personsVisibility: false,
			cockpitShown: true,
			counter: 0
		};
	}

	static getDerivedStateFromProps(props, state) {
		console.log('[app.js] getDerivedStateFromProps');
		return state;
	}

	componentDidMount() {
		console.log('[app.js] componentdidmount');
	}

	shouldComponentUpdate() {
		console.log('[app.js] shouldComponentUpdate');
		return true;
	}

	getSnapshotBeforeUpdate() {
		return '[app.js] getSnapshotBeforeUpdate haha';
	}

	componentDidUpdate(prevProps, prevState, snapshot) {
		console.log('[app.js] componentDidUpdate   ' + snapshot);
	}

	deletePersonHandler = (index) => {
		// slice without arguments just returns a true copy of the array
		// const persons = this.state.persons.slice();
		const persons = [...this.state.persons];
		persons.splice(index, 1);
		this.setState({ persons: persons });
	};

	nameChnagedHandler = (event, id) => {
		// only one person will match (return true)
		const matchingPersonId = this.state.persons.findIndex((el) => {
			return el.id === id;
		});
		const personToChange = {
			...this.state.persons[matchingPersonId],
		};

		personToChange.name = event.target.value;

		const newPersonsArray = [...this.state.persons];
		newPersonsArray[matchingPersonId] = personToChange;

		this.setState((prevState, currentProps) => {
			return{
				persons: newPersonsArray,
				counter: prevState.counter + 10
			};
		});
	};

	togglePersonsHandler = () => {
		const showState = this.state.personsVisibility;
		this.setState({ personsVisibility: !showState });
	};

	//!              Render               //

	render() {
		console.log('[app.js] render');
		let personsToRender = null;

		if (this.state.personsVisibility) {
			personsToRender = (
				<Persons
					persons={this.state.persons}
					clicked={this.deletePersonHandler}
					changed={this.nameChnagedHandler}
				/>
			);
		}

		return (
			<Auxiliary>
				<button
					onClick={() => {
						this.setState({ cockpitShown: !this.state.cockpitShown });
					}}
				>
					Toggle Cockpit
				</button>

				{this.state.cockpitShown ? (
					<Cockpit
						title={this.props.title}
						btnClasses={classes.Button}
						togglePersonsHandler={this.togglePersonsHandler}
						personsVisibility={this.state.personsVisibility}
						personsLength={this.state.persons.length}
					></Cockpit>
				) : null}
				{personsToRender}
			</Auxiliary>
		);
	}
}
export default withClass(App, classes.App);