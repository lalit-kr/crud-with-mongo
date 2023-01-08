const dbConnect=require('./mongoDB');

const insert = async () => {
    const db = await dbConnect();
    // Single INSERTION
    // const result = await db.insert(
    //     {name:'Travis', country:'Canada',premium:'No'}
    // );

    // Multiple INSERTION
    const result = await db.insert(
        [
            {name:'Will',country:'USA',premium:'No'},
            {name:'Derek',country:'Peru',premium:'Yes'}
        ]
    );
    if(result.acknowledged){
        console.log("Data Inserted Successfully");
    }
}

insert();