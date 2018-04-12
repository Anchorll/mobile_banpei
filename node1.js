var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'anchor7',
  database : 'test'
});
 
connection.connect();
 
connection.query('SELECT * from websites', function (error, results, fields) {
  if (error) throw error;
  console.log('The solution is: ', results);
});