//  This is how to connect to the mongo Database 

const {MongoClient} = require('mongodb');

async function main() {
    //use your connection string/URI in your mongodb system

    const uri = "mongodb+srv://ifedikwasochima:IFEdikwa2018@cluster0.ainzfr2.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

    const client = new MongoClient(uri);

    try {
        // Connect to the MongoDB cluster
        await client.connect();

        //make the appropriate DB calls
        await listDatabases(client);
    } catch (e) {
        console.error(e);
    } finally {
        // Ensures that the client will close when you finish/error
        await client.close();
    }
}

main().catch(console.error);

async function listDatabases(client) {
    const databasesList = await client.db().admin().listDatabases();

    console.log("Databases:");
    databasesList.databases.forEach((db) => {
        console.log(`- ${db.name}`);
    })
}