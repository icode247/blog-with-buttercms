const butter = require("buttercms")(process.env.READ_API_TOKEN);

fetch('https://api.buttercms.com/v2/posts/', {
  method: 'POST',
  headers: {
    "Authorization": "Token your_write_api_token",
    "Content-Type": "application/json",
  },
  body: JSON.stringify(payload),
})
.then(json => console.log(json))
.catch(err => console.log("Request Failed", err));