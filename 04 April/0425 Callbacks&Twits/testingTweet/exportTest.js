var Twit = require("twit");
var config = require(__dirname + "/twitter_config.js");
var T = new Twit(config);
var exec = require("child_process").exec;
var getTweet = require(__dirname + "/getTweet.js");

T.get("search/tweets", getTweet.params, getTweet.getTweets).then(function(
  data
) {
  return data.data.statuses[0].text;
});

/**
  console.log(data.data.statuses[0].text);
  console.log(data.data.statuses[2].text);
  console.log(data.data.statuses[1].text);
  console.log("Program has finished");
  // console.log(JSON.stringify(data));
   */
