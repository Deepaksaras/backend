const mysql = require('mysql');

const connection = mysql.createConnection({
    host: '10.10.20.52',
    user: 'dev22',
    password: 'OcffcN6l7NDs6SeO',
    database: 'tdot_hrmgm',
});

connection.connect((err) => {
  if (err) throw err;
  console.log('Connected to MySQL!');
});

module.exports = connection;