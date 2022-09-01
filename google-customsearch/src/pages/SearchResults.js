import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const SearchResults = () => {
	const params = useParams();

	const [imagesArr, setImagesArr] = useState([]);
	const key = "AIzaSyDH9WsLXUIQXfeTBxV4XJB3Xl7_VScUtuE";
	const cx = "91fb7cd6b81604ce1";

	useEffect(() => {
		const search = async () => {
			const searchUrl =
        `https://www.googleapis.com/customsearch/v1?q=cat&key=AIzaSyDH9WsLXUIQXfeTBxV4XJB3Xl7_VScUtuE&cx=91fb7cd6b81604ce1&searchType=image&imgSize=large&q=${params.imageQuery}`;

			const response = await fetch(searchUrl);
			const data = await response.json();
			setImagesArr(data.items);
		};
		search();
	}, []);

	return (
		<div>
			{imagesArr ?  imagesArr.map(image => (
				<img src={image.link}
					alt={image.title}
					key={image.link}
				/>
			)) : <img src="https://picsum.photos/200/300" />}
		</div>
	);
};

export default SearchResults;
