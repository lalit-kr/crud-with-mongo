const mongo=require('mongodb').MongoClient;
const dbConnect=require('./mongoDB.js');

// async function getData(){
//     let result = await client.connect();
//     let db = result.db('company');
//     let collection = db.collection('users');
//     let response = await collection.find().toArray();
//     console.log(response);
// }

// getData();

const main= async () =>{
    let data=await dbConnect();
    data= await data.find().toArray();
    console.log(data);
}

main();