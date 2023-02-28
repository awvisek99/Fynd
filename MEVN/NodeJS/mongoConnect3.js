const MongoClient = require('mongodb').MongoClient;

const url = 'mongodb://127.0.0.1:27017';

async function findOne() {

    const client = await MongoClient.connect(url, { useNewUrlParser: true })
        .catch(err => { console.log(err); });

    if (!client) {
        return;
    }

    try {

        const db = client.db("college");

        let collection = db.collection('Department');

        let query = { DepartmentName: 'IT' };

        let res = await collection.findOne(query);
console.log(res);

    } catch (err) {

        console.log(err);
    } finally {

        client.close();
    }
}

 findOne();


