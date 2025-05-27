//ONE TO MANY APPROACH 3
//storing the parent object reference or id inside the child
const mongoose = require("mongoose");
const { Schema } = mongoose;

main()
  .then(() => {
    console.log("connection successful");
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/relationDemo");
}

const userSchema = new Schema({
  username: String,
  email: String,
});

const postSchema = new Schema({
  content: String,
  likes: Number,
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
});

const User = mongoose.model("User", userSchema);
const Post = mongoose.model("Post", postSchema);

let addData = async () => {
  let user = await User.findOne({ username: "rahul kumar " });

  //   let user1 = new User({
  //     username: "rahul kumar ",
  //     email: "rahul@gmail.com",
  //   });

  //   let post1 = new Post({
  //     content: "Hello world",
  //     likes: 7,
  //   });

  let post2 = new Post({
    content: "Bye Bye",
    likes: 23,
  });
  post2.user = user;

  //await user1.save();
  await post2.save();
};
addData();


// const getData = async () => {
//   let result = await Post.findOne({}).populate("user");
//   // let result = await Post.findOne({}).populate("user","username");
//   //use this when we want to populate or use only username from user and no email or anything

//   console.log(result);
// };

// getData();
