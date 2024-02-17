const express = require('express');
const cors = require('cors');
// const proxy = require('express-http-proxy');
const url= require('url')
const app = express();

const proxy = require('http-proxy')
const apiProxy = proxy.createProxyServer()

// const corsOption = {
//   origin: ['http://localhost:3000'],
// };

// adding cors
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({
  extended: true,
}));

app.all('/api/*', (req,res)=>{
  apiProxy.web(req,res,{target:'http://localhost:5001'})
} );

app.all('/appointment/*', (req, res) => {
  apiProxy.web(req, res, { target: 'http://localhost:5002' })
});

// app.use('/appointment', proxy('http://localhost:5002',{
//   proxyReqPathResolver: req => url.parse(req.baseUrl).path
// }));
// app.use('/patient', proxy('http://localhost:5003'));

// app.use('/users', proxy('http://localhost:5003'));
// app.use('/medication', proxy('http://localhost:5004'));

const server = require('http').createServer(app)

apiProxy.on('error', (err, req, res)=>{
  console.log(err)
})

app.listen(5000, () => {
  console.log('Gateway on port 5000');
});
