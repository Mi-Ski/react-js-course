import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const DUMMY_PRODUCTS = [
	{
		id: "p1",
		title: "My First Book",
		description: "The first book I ever wrote",
		price: 10,
	},
	{
		id: "p2",
		title: "My Second Book",
		description: "The second book I ever wrote",
		price: 20,
	},
];

const Products = props => {
	return (
		<section className={classes.products}>
			<h2>Buy your favorite products</h2>
			<ul>
				{DUMMY_PRODUCTS.map(el => (
					<ProductItem title={el.title}
						price={el.price}
						description={el.description}
						key={el.id}
						id={el.id}
					/>
				))}
			</ul>
		</section>
	);
};

export default Products;
