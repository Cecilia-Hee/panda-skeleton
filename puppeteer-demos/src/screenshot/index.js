/*
 * @Author: Helijun
 * @Date: 2020-08-05 13:47:32
 * @LastEditors: Helijun
 * @LastEditTime: 2020-08-05 16:32:01
 * @Description: 
 */ 

const puppeteer = require('puppeteer') 
const path = require('path')
const fs = require('fs')
const {sleep}  = require('../utils/common')
// console.log(puppeteer)

// 设备
// const devices = require('puppeteer/DeviceDescriptors');  // maybe已经过时了
const devices = puppeteer.devices // 用这个就可以了

const outputPath = '../files/'
module.exports = {
  screenshot: async function() {
    const browser = await puppeteer.launch({
      headless: true,
      args: ['--no-sandbox', '--disable-setuid-sandbox' ]
    })
  
    const page = await browser.newPage();

    // 设置设备
    await page.emulate(devices['iPhone 6'])

    // 创建目录
    if(!fs.existsSync(outputPath)) {
      fs.mkdirSync(outputPath)
    }

    // 设置可是区域大小
    // await page.setViewport({width: 375, height: 768});
    await page.goto('http://10.2.26.144:8080/#/');

    // 等待页面全部加载完成之后再调用
    await sleep(5000);

    // 对整个页面截图
    await page.screenshot({
      path: `${outputPath}capture.png`,
      type: 'png',
      fullPage: true,   // 边滚动边截图
    }).then((res) => {
      console.log('截图成功:', res)
    }).catch((err) => {
      console.log('err:', err)
    })

    // 对页面中某个元素进行截图
    let element = await page.$('.header');
    // console.log('element,', element)
    await element.screenshot({
      path: `${outputPath}element.png`,
      type: 'png',
    })

    // PDF必须要在headless为true的情况下才能调用
    await page.pdf({
      path: `${outputPath}saved.pdf`,
      format: 'a4'
    }).then((res) => {
      console.log('PDF成功：', res)
    }).catch((err) => {
      console.log('pdf,err', err)
    })

    await page.close();
    await browser.close()  
  }
}