const mongodb = require("mongodb");
//
const url = "mongodb://127.0.0.1:27017";
const client = new mongodb.MongoClient(url);

/**
 * connecting to mongodb and running find queries on socialApp db
 */
async function run() {
    try {
        //connecting to client: sending connection request
        await client.connect();//wait here unless session opens
        //selecting the users collection
        const UserCollection = client.db("college").collection("Department");
        //finding the user colllection
        const cursor = UserCollection.find({});
        //iterating over the curosr
        await cursor.forEach((docs) => {
            console.log(docs);
        });
        console.log("Aggregation query");
    }

    catch (e) {
        console.error(e);
      } 
      finally {
        await client.close();//wait
      }
}
run();