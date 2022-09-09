import {Link} from "react-router-dom";

const Products = () => {
	return (
		<div>
			<h1>Products</h1>
			<ul>
				<li>
					<Link to="/products/item">An Item</Link>
				</li>
				<li>
					<Link to="/products/book">A Book</Link>
				</li>
				<li>
					<Link to="/products/car">A Car</Link>
				</li>
			</ul>
		</div>
	);
};

export default Products;