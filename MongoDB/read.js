const {MongoClient} = require('mongodb');

async function main() {
    //use your connection string/URI in your mongodb system

    const uri = "mongodb+srv://ifedikwasochima:IFEdikwa2018@cluster0.ainzfr2.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

    const client = new MongoClient(uri);

    try {
        // Connect to the MongoDB cluster
        await client.connect();

        //make the appropriate DB calls

        //Find the listing named "Infinite Views" that we created in create.js
        await findOneListingByName(client,"Infinite Views");

        // Find up to 5 listings with at least 4 bedrooms and at least 2 bathrooms
        // If you recently ran create.js, a listing named Beautiful Beach House should be included in the results 
        await findListingsWithMinimumBedroomsBathroomsAndMostRecentReviews(client, {
            minimumNumberOfBedrooms: 4,
            minimumNumberOfBathrooms: 2,
            maximumNumberOfResults: 5
        });
    } catch (e) {
        console.error(e);
    } finally {
        // Ensures that the client will close when you finish/error
        await client.close();
    }
}

main().catch(console.error);

async function findOneListingByName(client, nameOfListing) {
    const  result = await client.db("sample_mflix").collection('movies').findOne({name: nameOfListing});

    if (result) {
        console.log(`Found a listing in the collection with the name '${nameOfListing}':`);
        console.log(result);
    } else {
        console.log(`No listings found with the name '${nameOfListing}'`);
    }
}

async function findListingsWithMinimumBedroomsBathroomsAndMostRecentReviews(client, {
    minimumNumberOfBedrooms = 0,
    minimumNumberOfBathrooms = 0,
    maximumNumberOfResults = Number.MAX_SAFE_INTEGER
} = {}) {

    const cursor = client.db("sample_mflix").collection("movies")
        .find({
            bedrooms: { $gte: minimumNumberOfBedrooms },
            bathrooms: { $gte: minimumNumberOfBathrooms }
        }
        )
        .sort({ last_review: -1 })
        .limit(maximumNumberOfResults);

    // Store the results in an array
    const results = await cursor.toArray();

    // Print the results
    if (results.length > 0) {
        console.log(`Found listing(s) with at least ${minimumNumberOfBedrooms} bedrooms and ${minimumNumberOfBathrooms} bathrooms:`);
        results.forEach((result, i) => {
            const date = new Date(result.last_review).toDateString();

            console.log();
            console.log(`${i + 1}. name: ${result.name}`);
            console.log(`   _id: ${result._id}`);
            console.log(`   bedrooms: ${result.bedrooms}`);
            console.log(`   bathrooms: ${result.bathrooms}`);
            console.log(`   most recent review date: ${date}`);
        });
    } else {
        console.log(`No listings found with at least ${minimumNumberOfBedrooms} bedrooms and ${minimumNumberOfBathrooms} bathrooms`);
    }
}