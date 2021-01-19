const Tv = require("../models/tv-series");

class TvController {
	static getList(req, res, next) {
		Tv.find()
			.then(data => {
				res.status(200).json(data)
			})
			.catch(err => {
				res.status(400).json(err)
				console.log(err)
			})
	}

	static getById(req, res, next) {
		const id = req.params.id
		Tv.findOne(id)
			.then(data => {
				res.status(200).json(data)
			})
			.catch(err => {
				res.status(400).json(err)
				console.log(err)
			})
	}

	static create(req, res, next) {
		Tv.insert({
			title: req.body.title,
			overview: req.body.overview,
			poster_path: req.body.poster_path,
			popularity: Number(req.body.popularity),
			tags: req.body.tags.split(",")
		})
			.then(data => {
				const newSeries = data.ops[0]
				res.status(201).json({ message: "Success Add Series", newSeries })
			})
			.catch(err => {
				res.status(400).json(err)
			})
	}
	static update(req, res, next) {
		const id = req.params.id
		const updatedSeries = {
			title: req.body.title,
			overview: req.body.overview,
			poster_path: req.body.poster_path,
			popularity: Number(req.body.popularity),
			tags: req.body.tags.split(","),

		}
		Tv.updateOne(id, updatedSeries)
			.then(data => {
				res.status(200).json({ message: "Item Updated", updatedSeries })
			})
			.catch(err => {
				res.status(400).json(err)
			})
	}
	static delete(req, res, next) {
		const id = req.params.id
		Tv.deleteOne(id)
			.then(data => {
				res.status(200).json({ id, message: "Item Deleted!" })
			})
			.catch(err => {
				res.status(400).json(err)
			})
	}


}

module.exports = TvController;
