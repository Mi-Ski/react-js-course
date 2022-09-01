import { useParams } from "react-router-dom";

const ProductDetail = product => {
	const params = useParams();
	console.log(params.productId);

	return (
		<div>
			<h1>Product Detail</h1>
			<p>Product ID: {params.productId}</p>
		</div>
	);

};

export default ProductDetail;