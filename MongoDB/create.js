const {MongoClient} = require('mongodb');


async function main() {
    //use your connection string/URI in your mongodb system

    const uri = "mongodb+srv://ifedikwasochima:IFEdikwa2018@cluster0.ainzfr2.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

    const client = new MongoClient(uri);

    try {
        // Connect to the MongoDB cluster
        await client.connect();

        //make the appropriate DB calls

        //create a single new listing
        await createListing(client, {
            name: "Lovely Loft",
            summary: "A charming loft in Paris",
            bedrooms: 1,
            bathrooms: 1
        });
    } catch (e) {
        console.error(e);
    } finally {
        // Ensures that the client will close when you finish/error
        await client.close();
    }
}

main().catch(console.error);


async function createListing(client, newListing) {
    const result = await client.db("sample_mflix").collection("movies").insertOne(newListing);
    console.log(`New listing created with the following id: ${result.insertedId}`);
}

async function createMultipleListing(client, newListings) {
    const result = await client.db("sample_mflix").collection("movies").insertMany(newListings);

    console.log(`${result.insertedCount} new listing(s) created with the following id(s):`);
    console.log((result.insertedIds))
}