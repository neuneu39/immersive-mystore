const express = require('express');
const db = require('./connection');

const router = express.Router();

router.get('/', async (req, res, next) => {
  // DBの接続を取得する
  let connection;

  try {
    connection = await db.getConnection();
    console.log("connected")
    // 接続に対してクエリを発行する
    const [rows, fields] = await connection.query('select * from items');
    // 戻り値をjsonとしてレスポンスを返す
    res.json(rows);
    console.log(res.json(rows));
  } catch (err) { //nextにエラーを返してあげる
    next(err);

  } finally { //どちらにしても通る
     if (connection) {
       // DBの接続は閉じること
       connection.close();
     }
  }
 
  res.send('/api/items called');
});

module.exports = router;
