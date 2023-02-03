//POST /api/new-meetup
import { MongoClient } from "mongodb";

async function handler(req, res){
    if(req.method === 'POST'){
        const data = req.body;
       const client =  await MongoClient.connect('mongodb+srv://deepak07:%40P3Gh%40W9bQYY5m4@cluster0.u6scy9x.mongodb.net/test')
   const db = client.db();
   const meetupsCollection = db.collection('meetups');

  const result= await meetupsCollection.insertOne(data);

console.log(result)
client.close();
res.status(201).json({message:"Meetup Inserted:"})
    }
}

export default handler;