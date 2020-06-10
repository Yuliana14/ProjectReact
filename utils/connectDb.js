import moongose from 'mongoose';
const connection = {};

async function connectDb() {
    if (connection.isConnected) {
        //use existing database connection
        console.log("use existing connection");
        return;
        
    }
    //use database connection
    const db = await moongose.connect(process.env.MONGO_SRV,{
        useCreateIndex : true,
        useFindAndModify : false,
        useNewUrlParser : true,
        useUnifiedTopology : true
    });

    console.log("DB is connected");
    connection.isConnected = db.connections[0].readyState;
    
}

export default connectDb;