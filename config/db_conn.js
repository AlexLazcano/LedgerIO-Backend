const { MongoClient } = require('mongodb');

async function connectToDatabase() {
    const uri = process.env.MONGO_URL;
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

    try {
        await client.connect();
        console.log('Connected to MongoDB');
        return client.db();
    } catch (err) {
        console.error('Error connecting to MongoDB:', err);
        throw err;
    }
}

module.exports = connectToDatabase;