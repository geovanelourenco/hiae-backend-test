import http from "http";
import {
  challengeOne
  // challengeTwo,
  // challengeThree,
  // challengeFour
} from "./challenges";

challengeOne();

http
  .createServer(function (req, res) {
    challengeOne(); //Uncomment to use
    // challengeTwo(); //Uncomment to use
    // challengeThree(); //Uncomment to use
    // challengeFour(); //Uncomment to use
    res.end(); //end the response
  })
  .listen(8080); //the server object listens on port 8080
