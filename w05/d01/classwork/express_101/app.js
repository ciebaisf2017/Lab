const express = require('express');
const logger = require('morgan');


const app = express();
const port = process.env.PORT || 3000;
app.set('view engine', 'ejs');

app.set('views', './views');

app.use(logger('dev'));

// listening the port
app.listen(port, () => console.log('server is listening on port', port))

// event

app.get('/', (req, res) => {
  const links = ['/about', '/contact'];
   res.render('index', {
    message: 'This is the homepage',
    links: links
   });
});

app.get('/about', (req, res) => {
  const links = ['/', '/contact']
  res.render('index' ,{
    message: 'this is about page',
    links: links
  });
});

app.get('/contact', (req, res) => {
  const links = ['/', '/about'];
 res.render( 'index' , {
  message: 'this is contact page',
  links: links
 });
})
