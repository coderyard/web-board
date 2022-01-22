const bodyParser = require('body-parser');
const express = require('express');

const html = './html/main.ejs';

const app = express();
app.use(express.json());

app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.set('views',__dirname+'/views')
app.set('view engine','ejs')
app.engine('html', require('ejs').renderFile)

app.get('/', (req, res, next)=>{
  res.setHeader('Content-Type', 'text/html');
  res.render('main', (err, html)=>{
    res.send(html);
    console.log(res.json(req.body));
  });
  res.end();
})


app.listen(8080, ()=>{
  console.log('users come in!');
});