const express = require('express')
const bodyParser = require('body-parser') //解析参数
const cors = require('cors')
const mysql = require('mysql')
const router = express.Router()
const app = express()

const options = {
  host:'localhost',
  user:'root',
  password:'root',
  port:3306,
  database: 'mydata',
  connectTimeout:500, // 连接超时
  multipleStatements:false
}
// 设置中间件
app.use(cors())//  配置cors跨域
app.use(bodyParser.json()) // json请求
app.use(bodyParser.urlencoded({extended:false}))//表单请求
app.listen(3000, () => {
  console.log('服务器开启成功');
})


const conn = mysql.createConnection(options)


app.all('/login', (req, res) => {
  conn.query('SELECT * FORM students', (e,r) => res.json(new Result({data: r})) )
})

// function Result({code=1, msg='',data={}}){
//   this.code = code,
//   this.msg = msg,
//   this.data = data
// }

const Result =({code:'1', msg='', data ={}}) => {

}










// app.get('/', (req, res) => {
//   // res.send('hello World')
//   console.log('这是get请求方式');
//   res.send('<div style="color:red">hello world</div>')
// })

// app.all('*', (req, res) => {
//   console.log('所有的请求方式');
//   res.send('*******')
// })

// app.post('/test', (req, res) => {
//   console.log('这是post请求方式');
//   res.send('这是post请求方式')
// })

// let login = true
// app.post('/login', (req,res,next ) => {
//   if(!login) return res.send('未登录')
//   next()
// })

// app.post('/test/:data',(req,res) => {
//    res.send({query: req.query, data:req.params, json: req.body})
// })