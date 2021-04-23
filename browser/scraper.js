const puppeteer = require('puppeteer');
module.exports = async function main(url) {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://www.google.com/search?q='+url);
  await page.click('[id="zV9nZe"]');

  let jsonfile = await page.evaluate(() => {
      let commresults = document.querySelectorAll('[class="cUezCb luh4tb O9g5cc uUPGi"]');
      let freeresults = document.querySelectorAll('[class="tF2Cxc"]');
      let res=[];
      freeresults.forEach(element => {
          let head = element.querySelector('[class="LC20lb DKV0Md"]').innerHTML;
          let url = element.querySelector('a').href;
          let description = element.querySelector('[class="aCOpRe"]').textContent;
          let obj = {head: head, url: url, description: description, advert: false};
          res.push(obj);
          
      });
      console.log("okk")
      try{
        commresults.forEach(element => {
            let head = element.querySelector('[class="cfxYMc JfZTW c4Djg MUxGbd v0nnCb"]').textContent;
            let url = element.querySelector('a').href;
            let objs = element.querySelectorAll('[class="MUxGbd yDYNvb lyLwlc"]');
            let description = '';
            objs.forEach(obj =>{
              description = description + obj.textContent
            })
            let obj = {head: head, url: url, description: description, advert: true};
            res.push(obj)}
            )}
      catch{};
      return res
  });
  await browser.close();
  return jsonfile;
}
