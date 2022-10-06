import React from "react";
import {NavLink} from "react-router-dom";
import classes from "./MainNavigation.module.css";

function MainNavigation() {
	return (
		<header className={classes.header}>
			<div className={classes.logo}>Great Quotes</div>
			<div className={classes.nav}>
				<ul >
					<li>
						<NavLink to="/quotes">Quotes</NavLink>
					</li>
					<li>
						<NavLink to="/quotes/new">New Quote</NavLink>
					</li>
					<li>
						<NavLink to="/quotes/:id">Quote Details</NavLink>
					</li>
				</ul>
			</div>
		</header>
	);
}

export default MainNavigation;
