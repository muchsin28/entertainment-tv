const { db, ObjectId } = require("../config/mongo");
const Series = db.collection("series");

class Tv {
	static find() {
		return Series.find().toArray();
	}

	static findOne(id) {
		const o_id = new ObjectId(id)
		return Series.findOne({ _id: o_id });
	}

	static insert(data) {
		return Series.insertOne(data);
	}

	static updateOne(id, data) {
		const o_id = new ObjectId(id)
		return Series.updateOne({ _id: o_id }, { $set: data });
	}

	static deleteOne(id) {
		const o_id = new ObjectId(id)
		return Series.deleteOne({ _id: o_id })
	}
}

module.exports = Tv;
