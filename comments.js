// Create web server
// npm init -y
// npm install express --save
// npm install nodemon --save-dev
// npm install body-parser --save
// npm install ejs --save
// 
// Create server.js
// const express = require('express')
// const app = express()
// const bodyParser = require('body-parser')
// app.use(bodyParser.urlencoded({ extended: true }))
// app.use(express.static("public"))
// app.set('view engine', 'ejs')
// 
// app.get('/', function(req, res) 
// {
//     res.render('index')
// })
// 
// app.listen(3000, function() 
// {
//     console.log('Server is running on port 3000')
// })
// 
// Create views folder
// Create index.ejs in views folder
// <!DOCTYPE html>
// <html>
// 
// <head>
//     <title>Home</title>
// </head>
// 
// <body>
//     <h1>Home</h1>
// </body>
// 
// </html>
// 
// Start server
// nodemon server.js
// 
// Create public folder
// Create styles.css in public folder
// body
// {
//     background-color: yellow;
// }
// 
// Create images folder in public folder
// Create logo.png in images folder
// 
// Create partials folder in views folder
// Create header.ejs in partials folder
// <!DOCTYPE html>
// <html>
// 
// <head>
//     <title>Header</title>
// </head>
// 
// <body>
//     <h1>Header</h1>
// </body>
// 
// </html>
// 
// Create footer.ejs in partials folder
// <!DOCTYPE html>
// <html>
// 
// <head>
//     <title>Footer</title>
// </head>
// 
// <body>
//     <h1>Footer</h1>
// </body>
// 
// </html>
// 
// Create views folder
// Create index.ejs in views folder
// <% include partials/header %>
// 
// <body>
//     <h1>Home</h1>
// </body>
// 
// <% include partials/footer %>
// 
// Create about.ejs in views folder
// <% include partials/header %>
//


