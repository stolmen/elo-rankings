const mongodb = require('mongodb');
const config = require('./config');

function getdbservice() {
	return {
		getCollection: async function (collection) {
			const db = await this.getconnection();
			return db.collection(collection);
		},
		mongodb, // this is a hack for now
		getconnection: () => {
			if (!this.connection) {
				this.connection = mongodb.MongoClient.connect(config.mongoUrl)
					.catch(err => {
						console.error('Error connecting to database');
						console.error(err.stack || err);
						process.exit(-1);
					});
			}
			return this.connection;
		}
	};
}

module.exports = {getDbService: getdbservice};
