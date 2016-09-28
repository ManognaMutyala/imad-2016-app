var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));
var article1={
    title:'article1',
    heading:'articleone',
};

function createTemplate(data)
{
    var title=data.title;
    var heading=data.heading;
    var htmltemplate=`< html> <head>
        <title>
            ${title}
            
        </title>
        <meta name="viewport" content="width=device -width,initial scale=1"/>
        <link href="/ui/style.css" rel="stylesheet" />
        <style>
        </style>
    </head>
    <body>
        <div class="container">
        <div>
            <a href="/">HOME</a>
        </div>
        <div>
            <hr/>
            ${heading}
            </div>
            <div>
                sep 28
            </div>
            <div>
                <p>
                    Its fun to learn webaapp and executing it!!!!!!!!!
                </p>
                <p>
                    i want to get maximum out of this course
                </p>
            
        </div>
        </div>
    </body>
</html>`;
return htmlTemplate;
}



    



app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
app.get('/article1', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'article1.html'));
});

app.get('/article2', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'article2.html'));
});
app.get('/article3', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'article3.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
