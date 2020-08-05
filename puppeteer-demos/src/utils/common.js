/*
 * @Author: Helijun
 * @Date: 2020-08-05 15:14:08
 * @LastEditors: Helijun
 * @LastEditTime: 2020-08-05 15:15:10
 * @Description: 
 */ 

const sleep = (ms) => {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

module.exports = {
  sleep
}