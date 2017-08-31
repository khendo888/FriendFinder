var friends = require("../data/friends.js");

module.exports=function(app){
	app.get("/api/friends",function(req,res){
		res.json(friends);
	});
};
//how to match users with scores; calculate difference between friends to find best match