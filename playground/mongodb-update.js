const {MongoClient,ObjectID}=require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
    if(err){
        return console.log('Unable to connect to MongoDB server ');
    }
    console.log('Connected to MongoDB server ');

    // db.collection('Todos').findOneAndUpdate(
    //     {_id : new ObjectID("5c7004bbc808a546c8dc7ec8")}
    //     ,
    //     {
    //         $set:{completed : true}
    //     },{
    //         returnOriginal : false
    //     }).then((res)=>{
    //     console.log('Result', res);
    // },(err)=>{
    //     console.log('Error', err);
    // });

    db.collection('Users').findOneAndUpdate(
        { name : "Siddharth" },
        { $inc: { "age" : 3 } }
        ,{
            returnOriginal : false
        }).then((res)=>{
        console.log('Result', res);
    });
    db.close();
});