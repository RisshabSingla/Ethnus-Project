const mongoose = require("mongoose");
const Joi = require("joi");

const podcastSchema = new mongoose.Schema({
	name: { type: String, required: true },
	artist: { type: String, required: true },
	podcast: { type: String, required: true },
	img: { type: String, required: true },
	duration: { type: String, required: true },
});

const validate = (podcast) => {
	const schema = Joi.object({
		name: Joi.string().required(),
		artist: Joi.string().required(),
		podcast: Joi.string().required(),
		img: Joi.string().required(),
		duration: Joi.number().required(),
	});
	return schema.validate(podcast);
};

const Podcast = mongoose.model("podcast", podcastSchema);

module.exports = { Podcast, validate };

