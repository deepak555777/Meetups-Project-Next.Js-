//our-domain.com/
import { MongoClient } from 'mongodb'
import MeetupList from '../components/meetups/MeetupList'
function HomePage(props){
    return <MeetupList meetups={props.meetups}/>
}

export async function getStaticProps() {
const client = await MongoClient.connect(
'mongodb+srv://deepak07:%40P3Gh%40W9bQYY5m4@cluster0.u6scy9x.mongodb.net/test'
);
    const db=client.db()
    const meetupsCollection = db.collection('meetups');
    const meetups = await meetupsCollection.find().toArray();
    client.close();
    return {
      props: {
        meetups: meetups.map((meetup)=>({
            id: meetup._id.toString(),
           title: meetup.title,
           image: meetup.image,
           address: meetup.address,
           description: meetup.description
        }))
      },
      revalidate: 1
    }; 
  }
  export default HomePage;