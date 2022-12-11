const mongooose = require("mongoose");

const blogSchema = new mongooose.Schema({
  // Your code goes here
  topic: { type: String, unique: true, required: true },
  description: { type: String, required: true },
  posted_at: { type: String, required: true },
  posted_by: { type: String, required: true }
});

const Blog = mongooose.model("blogs", blogSchema);

module.exports = Blog;
