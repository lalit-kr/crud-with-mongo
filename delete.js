const dbConnect=require('./mongoDB');

const deleteRecord = async () => {
    const db = await dbConnect();
    const result = await db.deleteOne({name:'Will'});
    // For multiple deletion use db.deleteMany()
    if(result.deletedCount){
        console.log("Record Deleted");
    }else{
        console.log("Record Not Found!");
    }
}

deleteRecord();