// only POST request to /api/new-meetup

const handler =  (req, res) => {
	if (req.method === "POST") {
		const data = req.body;

		const { title, image, address, description } = data;

		// store in a database
	}

}

export default handler;