const {MongoClient,ObjectID}=require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
    if(err){
        return console.log('Unable to connect to MongoDB server ');
    }
    console.log('Connected to MongoDB server ');

    // db.collection('Todos').deleteMany({text:"Eat lunch"}).then((res)=>{
    //     console.log('Result',res);
    // });

    // db.collection('Users').deleteMany({name: "Sharanya"}).then((res)=>{
    //     console.log('Result',res);
    // });
    
    // db.collection('Todos').deleteOne({text:"Eat lunch"}).then((res)=>{
    //     console.log('Result',res);
    // });

    db.collection('Users').findOneAndDelete({_id: new ObjectID("5c700784c808a546c8dc7fb5")}).then((res)=>{
        console.log('Result',res);
    });
    
    db.close();
});