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

function query(sql, cb){
  pool.connect((err, client, done) => {
    if(err) return console.log('Loi: ' + err);
    done();
    client.query(sql,(err, result) => {
      if(err) return console.log('Loi ' + err);
      //console.log(result.rows);
      cb(result);
    });
  });
}
