import React from "react";
import {NavLink, Router} from "react-router-dom";

function MainNavigation() {
	return (
		<div>
			<ul>
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
	);
}

export default MainNavigation;
