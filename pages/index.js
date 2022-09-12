import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "This is a first meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Calle_Dlugie_Pobrzeze%2C_Gdansk%2C_Polonia%2C_2013-05-20%2C_DD_05.jpg/1920px-Calle_Dlugie_Pobrzeze%2C_Gdansk%2C_Polonia%2C_2013-05-20%2C_DD_05.jpg",
    address: "Some address 5, 12345 Some City",
    description: "This is a first meetup",
  },
  {
    id: "m2",
    title: "This is a second meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Stare_Miasto_w_Poznaniu.jpg/1920px-Stare_Miasto_w_Poznaniu.jpg",
    address: "Some address 10, 12345 Some City",
    description: "This is a second meetup",
  },
];

const Homepage = (props) => {
  return <MeetupList meetups={props.meetups} />;
};

export async function getServerSideProps(context) {
	const req = context.req;
	const res = context.res;


	return {
		props: {
			meetups: DUMMY_MEETUPS,
		}
	}
}

// export async function getStaticProps() {
//   // fetch data from an API
//   return {
//     props: {
//       meetups: DUMMY_MEETUPS,
//     },
// 		revalidate: 10,
//   };
// }

export default Homepage;
