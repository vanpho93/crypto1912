var pg = require('pg');

var config = {
  user: 'postgres',
  database: 'Node1912',
  password: 'khoapham',
  host: 'localhost',
  port: 5432,
  max: 10,
  idleTimeoutMillis: 1000
};

var pool = new pg.Pool(config);

function query(sql, data, cb){
  pool.connect((err, client, done) => {
    if(err) return cb(err);
    done();
    client.query(sql, data, (err, result) => {
      if(err) return cb(err)
      //console.log(result.rows);
      cb(undefined, result);
    });
  });
}

let insertUser = (username, password, phone, cb) => {
  let sql = `INSERT INTO public."User"(username, "password", phone)
	VALUES ($1, $2, $3)`;
  query(sql, [username, password, phone], cb);
}

let checkUser = (username, password, cb) => {
  let sql = `SELECT * FROM "User" WHERE username = $1 AND "password" = $2`;
  query(sql, [username, password], (err, result) => {
    if(err) return cb(err);
    if(result.rowCount != 1) return cb(new Error('User khong ton tai'));
    cb(undefined);
  });
}

// insertUser(`j'jj'j`, '123', '09372483', (err, res) => {
//   console.log(err);
//   console.log(res);
// })

// checkUser('Pho', '12223', err => {
//   if(err) return console.log(err);
//   console.log('Dang nhap thanh cong');
// });
