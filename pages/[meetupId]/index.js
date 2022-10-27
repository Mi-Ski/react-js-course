// import { useRouter } from "next/router";
import {MongoClient, ObjectId} from 'mongodb';
import Head from "next/head";

import MeetupDetail from "../../components/meetups/MeetupDetail";

const MeetupDetails = (props) => {
	console.log(props);

  return (
		<>
		<Head>
			<title>{props.meetupData.title}</title>
			<meta name="description" content={props.meetupData.description} />
		</Head>
    <MeetupDetail
      image={props.meetupData.image}
      title={props.meetupData.title}
      address={props.meetupData.address}
      description={props.meetupData.description}
    />
		</>
  );
};

export default MeetupDetails;

export async function getStaticPaths() {

  const client = await MongoClient.connect(
    "mongodb+srv://MiSki2:dce8WJxpC05cEhFP@cluster0.xdv2bhb.mongodb.net/?retryWrites=true&w=majority"
  );
  const db = client.db();
  const meetupsCollection = db.collection("meetups");

	const meetupsProjection = await meetupsCollection.find({}, { _id: 1 } ).toArray();
	client.close();

  return {
    fallback: false,
		paths: meetupsProjection.map(el => ({
			params: {
				meetupId: el._id.toString(),
			}
		}))
  };
}


export async function getStaticProps(context) {
  const meetupId = context.params.meetupId;
	let o_id = new ObjectId(meetupId);

  const client = await MongoClient.connect(
    "mongodb+srv://MiSki2:dce8WJxpC05cEhFP@cluster0.xdv2bhb.mongodb.net/?retryWrites=true&w=majority"
  );


	const db = client.db();
	const meetupsCollection = db.collection("meetups");
	const selectedMeetup = await meetupsCollection.findOne({ _id: o_id });
	
	client.close();


  return {
    props: {
      meetupData: JSON.parse(JSON.stringify(selectedMeetup)), 
    },
		revalidate: 1,
  };
}