import React, { useEffect } from 'react';
import classes from './Cockpit.css'

const cockpit = (props) => {
    // useEffect takes a function that runs on every render cycle as default, unless a 2nd argument is provided
    // componentDidMount and componentDidUpdate combined to one hook
    
    useEffect(() => {
        console.log('[Cockpit.js] useEffect');
        // http request...
        const timer = setTimeout(() => {
            // alert('1000% real data fetch')
        }, 1000)
        return () => {
            clearTimeout(timer);
            console.log('[cockpit.js] clean-up work in useEffect');
        }
    }, []);

    useEffect (() => {
        console.log('[Cockpit.js] 2nd useEffect');
        return console.log('[cockpit.js] 2nd clean-up (componentWillUnmount in useEffect)')
    });

    let assignedHeaderClasses = [];
    let btnClass = '';

    if (props.personsVisibility)    { btnClass = classes.Red; }
    if (props.personsLength <= 2)  { assignedHeaderClasses.push(classes.red); }
    if (props.personsLength<= 1)  { assignedHeaderClasses.push(classes.bold); }

    return (
        <div className={classes.Cockpit}>
            <h1>{props.title}</h1>
            <p className={assignedHeaderClasses.join(' ')}>This is really working!</p>
            <button className={btnClass} onClick={props.togglePersonsHandler}>
                Toggle List Visibility
            </button>
        </div>
    );
};

export default React.memo(cockpit);