const dbConnect=require('./mongoDB');

const update = async () => {
    let db = await dbConnect();

    // Single Updation
    let result = await db.update(
        {name:'Travis'},{$set:{
            country:'Rio de Janeiro'
        }}
    );

    // Multiple updation :- use db.update()
    if(result.acknowledged){
        console.log("Data updated successfully");
    }
}

update();