/*
 * @Author: Helijun
 * @Date: 2020-08-05 15:41:12
 * @LastEditors: Helijun
 * @LastEditTime: 2020-08-05 16:38:01
 * @Description: 植入JavaScript代码
 */ 

const puppeteer = require('puppeteer')
const { sleep } = require('../utils/common')

const invadeCode = async function() {
  const browser = await puppeteer.launch({
    headless: false,
    args: ['--no-sandbox', '--disable-setuid-sandbox' ]
  });
  const page = await browser.newPage();
  await page.goto('http://10.2.26.144:8080/#/');

  // 注册一个nodejs函数，在浏览器环境中运行
  // page.exposeFunction	将函数注入到 window 对象上
  // await page.exposeFunction('md5', text => {
  //   crypto.createHash('md5').update(text).digest('hex')
  // })

  // 注入js脚本
  await page.addScriptTag({
    content: "console.log('add script tag')"
  })

  // 执行脚本
  await page.evaluate(async () => {
    const myHash = await window.encodeURIComponent('PUPPETEER');
    const myString = '123456'
    console.log(`md5 of ${myString} is ${myHash}`)
  })



  await sleep(500000)

  await page.close();
  await browser.close()
}

module.exports = {
  invadeCode
}