import { MongoClient } from "mongodb";
// only POST request to /api/new-meetup

async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;
    const { title, image, address, description } = data;

    // store in a database
    const client = await MongoClient.connect(
      "mongodb+srv://MiSki2:dce8WJxpC05cEhFP@cluster0.xdv2bhb.mongodb.net/?retryWrites=true&w=majority"
    );
    const db = client.db();
    const meetupsCollection = db.collection("meetups");
    // insert one object into the collection
    const result = await meetupsCollection.insertOne(data);

    // close the connection
    client.close();
    // return a response to the client (browser) that the request was successful
    res.json({ msg: "Your data has been saved" });
    res.status(201);
  }
}

export default handler;
