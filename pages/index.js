//our-domain.com/

import MeetupList from '../components/meetups/MeetupList'

const DUMMY_MEETUPS = [
    {
    id: 'm1',
    title: 'A First Meetup',
    image : 'https://images.pexels.com/photos/3719037/pexels-photo-3719037.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    descripton: 'This is a first meetup',
    },
    {
        id: 'm1',
        title: 'A First Meetup',
        image : 'https://images.pexels.com/photos/3719037/pexels-photo-3719037.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        descripton: 'This is a first meetup',
        },
        {
            id: 'm1',
            title: 'A First Meetup',
            image : 'https://images.pexels.com/photos/3719037/pexels-photo-3719037.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            descripton: 'This is a first meetup',
            }
]

function HomePage(){
    return <MeetupList meetups={DUMMY_MEETUPS}/>
}

export default HomePage;