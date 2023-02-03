import { MongoClient, ObjectId } from 'mongodb';
import MeetupDetail from '../../components/meetups/MeetupDetails'


function meetupDetails(props){
return(
    <MeetupDetail  
    title={props.meetupData.title}
    url={props.meetupData.image}
    address={props.meetupData.address}
    description={props.meetupData.description}
    />
)
}

export async function getStaticPaths(){
    const client = await MongoClient.connect(
        'mongodb+srv://deepak07:%40P3Gh%40W9bQYY5m4@cluster0.u6scy9x.mongodb.net/test'
    )
    const db = client.db()
    const meetupsCollection = db.collection('meetups')
    const meetups = await meetupsCollection.find({}, {_id:1}).toArray();
    client.close();

    return {
        fallback: 'blocking',
        paths: meetups.map((meetup)=>({
           params: {meetupId: meetup._id.toString()},
        }))
    }
}

export async function getStaticProps(context){
    const meetupId= context.params.meetupId;
    const client = await MongoClient.connect(
        'mongodb+srv://deepak07:%40P3Gh%40W9bQYY5m4@cluster0.u6scy9x.mongodb.net/test'
    )
    const db = client.db();
    const meetupsCollection = db.collection('meetups');

    const selectedMeetup = await meetupsCollection.findOne({
        _id: new ObjectId(meetupId),
    });


client.close();

return{ 
    props:{
        meetupData:{
            id: selectedMeetup._id.toString(),
            title: selectedMeetup.title,
            address: selectedMeetup.address,
            image: selectedMeetup.image,
            description: selectedMeetup.description,
        },
    },
};
}

export default meetupDetails;

