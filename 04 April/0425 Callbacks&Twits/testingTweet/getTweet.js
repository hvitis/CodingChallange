console.log("Tweeter bot is starting...");
var Twit = require("twit");
var config = require(__dirname + "/twitter_config.js");
var T = new Twit(config);
// var fs = require("fs");
var exec = require("child_process").exec;

var params = {
  q: "trump",
  count: 5,
  lang: "en"
};

function getTweets(err, data, response) {
  if (err) {
    console.log(err);
  } else {
    var tweets = data.statuses;
    var twits = [];
    for (var i = 0; i < tweets.length; i++) {
      //fs.writeFileSync(__dirname + "/../tweets/tweet" + [i] + ".txt", tweets[i].text, "utf-8");
      twits.push(tweets[i].text);
    }
    console.log(twits);
    return twits;
  }
}

// T.get("search/tweets", params, getTweets).then(function(t) {
//   console.log(t);
// });

module.exports.getTweets = getTweets;
module.exports.params = params;
