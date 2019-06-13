var express = require('express');
var ibmdb = require('ibm_db');

var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
	var num = req.query.txtNumber;
  
  ibmdb.open("DRIVER={DB2}; DATABASE=QHEA1; HOSTNAME=cap-au-sg-prd-02.securegateway.appdomain.cloud; PORT=15655; PROTOCOL=TCPIP; UID=EV6863; PWD=NJI90OKM", function (err,conn) {
  if (err) return console.log(err);

  conn.query('SELECT * FROM FF67U1.FF67VSTA', function (err, data) {
      if (err) console.log(err);
      else console.log(data);
      conn.close(function () {
        console.log('Connection closed');
      });
    });
  });
});

module.exports = router;


