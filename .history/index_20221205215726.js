const express = require("express");
const ejs = require("ejs");
require('dotenv').config()
const router = require('./routes');

const app = express();
app.set("view engine", "ejs");
app.use(express.json());
app.use('/static', express.static('public'));


app.get('blog', (req,res)=>{
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
        crossorigin="anonymous"
      />
      <title>Blogger</title>
    </head>
    <body>
      <nav class="navbar navbar-light bg-light mb-2">
        <div class="container-fluid">
          <span class="navbar-brand mb-0 h1">Blogger</span>
        </div>
      </nav>
      <div class="container">
        <div class="row" style="margin-top:6rem">
          <h4>Blogs</h4>
          <% data.forEach(blog =>{ %>
          <div class="col-4 mb-4">
            <div class="card" style="width: 18rem">
              <div class="card-body">
                <img src="<%= blog.featured_image %>" class="card-img-top" alt="...">
                <h5 class="card-title"><a href="/blog/<%= blog.slug %>"><%= blog.title %></a></h5>
              </div>
            </div>
          </div>
        <%}) %>
        </div>
      </div>
    </body>
  </html>
  
})


const PORT = 4002;
app.listen(PORT, () => {
  console.log(`Server is running at ${PORT}`);
});
