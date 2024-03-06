const mongoose = require('mongoose');

let cachedDb = null;

const connectToDatabase = async () => {
    if (cachedDb) {
        console.log("Using cached database connection");
        return cachedDb;
    }

    const connectionString = process.env.MONGO_URL || "";
    console.log('Connecting to MongoDB', connectionString);

    try {
        await mongoose.connect(connectionString, {
            dbName: "ledger"
        });

        const db = mongoose.connection;
        
        cachedDb = db; // Cache the database connection
        return db;
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
        throw error;
    }
};

module.exports = connectToDatabase;



// let dbClient;

// async function connectToDatabase() {

//     if (dbClient && dbClient.isConnected()) {
//         console.warn('Trying to connect to database again');
//         return dbClient;
//     }


//     const uri = process.env.MONGO_URL;

//     dbClient = new MongoClient(uri);

//     try {
//         await dbClient.connect();
//         console.log('Connected to MongoDB');

//         const dbName = dbClient.db().databaseName;
//         console.log('Database name:', dbName);  
//         return dbClient.db();
//     } catch (err) {
//         console.error('Error connecting to MongoDB:', err);
//         throw err;
//     }
// }

// module.exports = connectToDatabase;