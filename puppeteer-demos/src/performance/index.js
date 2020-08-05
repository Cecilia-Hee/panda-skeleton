/*
 * @Author: Helijun
 * @Date: 2020-08-05 15:58:44
 * @LastEditors: Helijun
 * @LastEditTime: 2020-08-05 16:05:52
 * @Description: 性能分析
 */ 
const puppeteer = require('puppeteer');

const { sleep } = require('../utils/common')

const performance = async function() {
  const browser = await puppeteer.launch({
    headless: false
  });
  const page = await browser.newPage();
  await page.tracing.start({
    path: '../files/trace.json'
  })
  await page.goto('http://10.2.26.144:8080/#/');
  await sleep(5000)
  await page.tracing.stop();
  await page.close()
  await browser.close()
}

module.exports = {
  performance
}