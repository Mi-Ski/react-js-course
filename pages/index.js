import Head from "next/head";
import { MongoClient } from "mongodb";
import MeetupList from "../components/meetups/MeetupList";

const Homepage = (props) => {
  return (
    <>
      <Head>
				<title>React meetups!</title>
				<meta name="description" content="Discover react meetups!" />
			</Head>
      <MeetupList meetups={props.meetups} />
    </>
  );
};

export default Homepage;

export async function getStaticProps() {
  const client = await MongoClient.connect(
    "mongodb+srv://MiSki2:dce8WJxpC05cEhFP@cluster0.xdv2bhb.mongodb.net/?retryWrites=true&w=majority"
  );

  const db = client.db();
  const meetupsCollection = db.collection("meetups");

  // find by default finds all
  const meetups = await meetupsCollection.find().toArray();

  client.close();
  return {
    props: {
      meetups: meetups.map((el) => ({
        title: el.title,
        address: el.address,
        image: el.image,
        id: el._id.toString(),
      })),
    },
    revalidate: 10,
  };
}
