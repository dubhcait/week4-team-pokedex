const handler = require("./handler.js")
const handlerJSON = require('./handlerJSON.js')

const router = (request, response) => {
const url =  request.url;
if (url.includes("query")) {
 handlerJSON(request, response)
} 
else {
  handler(request, response);
}
};

module.exports = router;

