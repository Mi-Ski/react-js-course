import { useRouter } from "next/router";
import MeetupDetail from "../../components/meetups/MeetupDetail";

const MeetupDetails = (props) => {
  const router = useRouter();

  return (
    <MeetupDetail
      image="https://images.unsplash.com/photo-1551963831-b3b1ca40c98e"
      title={props.meetupData.title}
      address="Some Address 5, 12345 Some City"
      description="This is a first meetup!"
    />
  );
};

export async function getStaticProps(context) {
  const meetupId = context.params.meetupId;

  console.log(meetupId);
  return {
    props: {
      meetupData: {
        image:
          "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
        id: meetupId,
        title: meetupId,
        address: "Some Address 5, 12345 Some City",
        description: "This is a first meetup!",
      },
    },
  };
}

export async function getStaticPaths() {
  return {
    fallback: false,
    paths: [
      {
        params: {
          meetupId: "m1",
        },
      },
			{
				params: {
					meetupId: "m2"
				}
			}
    ],
  };
}

export default MeetupDetails;
