require('dotenv').config()

const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const connection = require('./databaseClient');
const pool = require('./databaseClient');
const port = process.env.PORT

app.get('/', (req, res) => {
  res.send('Utopia Dex')
})

// Returns associated limit orders for orderer address
app.route('/getOrdererOrders/:ordererAddress')
  .get(function(req, res, next) {
    const query = "SELECT * FROM limitOrders WHERE contractAddress = ?"
    pool.query(query, [ req.params.ordererAddress ], (error, results) => {
      if (error) throw error;
      if (!results[0]) {
        res.json({ status: "Not Found"});
      } else {
        res.json(results[0]);
      }
    })
  });

// Retrieves limit order for given order number
app.route('/getOrdererOrders/:orderNumber')
  .get(function(req, res, next) {
    const query = "SELECT * FROM limitOrders WHERE orderNumber = ?"
    pool.query(query, [ req.params.ordererAddress ], (error, results) => {
      if (error) throw error;
      if (!results[0]) {
        res.json({ status: "Not Found"});
      } else {
        res.json(results[0]);
      }
    })
  });

// Creates a limit order 
app.post('/createOrder', async (req, res) => {
	const data = {
    contractAddress: req.body.contractAddress,
    ordererAddress: req.body.ordererAddress,
    tokenOneAmount: req.body.tokenOneAmount,
    tokenTwoAmount: req.body.tokenTwoAmount,
    orderPrice: req.body.tokenPrice,
    orderTime: req.body.orderTime
  }
  const query = "INSERT INTO limitOrders VALUES (?, ?, ?, ?, ?, ?)";
  pool.query(query, Object.values(data), (error) => {
    if (error) {
      res.json({ status: "failure", reason: error.code });
    } else {
      res.json({ status: "success", data: data});
    }
  })
});

// Deletes limit order with associated orderNumber
app.route('/getOrdererOrders/:orderNumber')
  .get(function(req, res, next) {
    const query = "DELETE * FROM limitOrders WHERE orderNumber = ?"
    pool.query(query, [ req.params.orderNumber ], (error, results) => {
      if (error) throw error;
      if (!results[0]) {
        res.json({ status: "Not Found"});
      } else {
        res.json(results[0]);
      }
    })
  });

app.get('/health', (req, res) => res.send("Healthy"));

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`)
  // Child thread which polls PKS stuff
})