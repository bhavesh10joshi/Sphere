const mongoose = require("mongoose");
const { string } = require("zod");
const ObjectId = mongoose.ObjectId;
const Schema = mongoose.Schema;
mongoose.connect("mongodb+srv://josh10bhavesh:zp6aCDbTSZOd1ydK@cluster0.nd6zk.mongodb.net/Sphere?retryWrites=true&w=majority&appName=Cluster0");

const User = new Schema({
    Username : String , 
    Password : String ,
    Email : {unique : true , type : String} , 
    ContactNo : Number ,
    ProfileImage : { type: String, default: "https://default-image-link.com/avatar.png" } , //this can be a video or image 
    Name : String , 
    About : String , 
    Followers : Number , 
    Following : Number ,
    Posts : Number  
});
const Posts = new Schema({
    Description : String ,
    Date : String ,
    Time : String,
    Likes : Number ,
    Comments : Number , 
    Uploadedimage : { type: String, default: "https://default-image-link.com/avatar.png" } , //this can be a video or image 
    UserId : ObjectId
});
const Followers = new Schema({
    UserId : ObjectId , 
    FollowerId : ObjectId
});
const Following = new Schema({
    UserId : ObjectId , 
    FollowingUserId : ObjectId
});
const Comments = new Schema({
    UserId : ObjectId , 
    PostId : ObjectId , 
    AboutComment : String ,
    whoCommentedId : String
});
const Likes = new Schema({
    UserID : ObjectId , 
    PostId : ObjectId ,
    WhoLikedid : ObjectId
});

const UserModel = mongoose.model("User" , User);
const PostsModel = mongoose.model("Posts" , Posts);
const FollowersModel = mongoose.model("Followers", Followers);
const FollowingModel = mongoose.model("Followiong" , Following);
const CommentsModel = mongoose.model("Comments",Comments);