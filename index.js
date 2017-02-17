let express = require('express');
let app = express();
app.set('view engine', 'ejs');
app.set('views', './views');
let parser = require('body-parser').urlencoded({extended: false});
let {checkUser, insertUser} = require('./db.js');

app.listen(3000, () => console.log('Server started'));

app.get('/', (req, res) => res.send('Homepage'));

app.get('/dangnhap', (req, res) => res.render('dangnhap'));

app.get('/dangky', (req, res) => res.render('dangky'));

app.post('/xulydangnhap', parser, (req, res) => {
  res.send('Da dang nhap');
});

app.post('/xulydangky', parser, (req, res) => {
  let {username, password, phone} = req.body;
  insertUser(username, password, phone, (err, result) => {
    if(err) return res.send(err);
    if(result.rowCount != 1) return res.send('Loi dang ky');
    res.send('Dang ky thanh cong');
  });
});
