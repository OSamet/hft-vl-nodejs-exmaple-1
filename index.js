const express = require('express');

const port = process.env.PORT || 3000;
const app = express();

app.set('view engine', 'ejs');

app.use('/public', express.static(process.cwd() + '/public'));

app.get('/', function(req, res) {
  const pageTitle = 'This is a title';
  const anArrayOfData = ['This', 'is', 'something', 'to', 'loop'];


  res.render('pages/index', {
    title: pageTitle,
    data: anArrayOfData
  });
});

app.get('/about', function(req, res) {
  res.render('pages/about');
});

app.listen(port, function() {
 console.log(`Server listening on port ${port}…`)
});
