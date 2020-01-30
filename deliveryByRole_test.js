"use strict";

var webdriver = require('selenium-webdriver');
var until = require('selenium-webdriver/lib/until');

var caps = {
    'name': 'Test canceltp',
    'browserName': 'chrome'
}

var browser = new webdriver.Builder().usingServer().withCapabilities(caps).build();
//debugger;
browser.get('http://127.0.0.1/geng/index.php');
browser.findElement(webdriver.By.className('j-login-snils')).sendKeys('#admin1');
browser.findElement(webdriver.By.className('j-login-password')).sendKeys('password');
browser.findElement(webdriver.By.className('j-btn-login')).click();

let buttonService = browser.wait(
  until.elementLocated(webdriver.By.className('b-cabinet_service-btn')),
  20000
);
//.then(waitForDisplayVisible);
// .then(element => {
//   return browser.wait(
//      until.elementIsVisible(element),
//      20000
//    )
// });

buttonService = browser.findElement(webdriver.By.className('b-cabinet_service-btn'));
browser.wait(() => {
  return buttonService.getCssValue('display')
    .then(opacity => opacity !== 'none');
});

//console.log(buttonService);
//buttonService.click();

// browser.sleep(7000); // это временно позже будут промисы
// browser.findElement(webdriver.By.className('b-cabinet_service-btn')).click();
//---
// browser.sleep(1000);
// browser.findElement(webdriver.By.className('b-cabinet_delivery-btn')).click();
//
// browser.sleep(5000);
// browser.findElement(webdriver.By.className('b-delivery-title')).sendKeys('This is title');
// // за днемя из тини протестим
// browser.executeScript("tinyMCE.activeEditor.setContent('<h1>It is content mail</h1> TinyMCE')");
//
// browser.findElement(webdriver.By.className('b-delivery-send')).click();
// browser.sleep(5000);
//--
// let tinyMceEditor = browser.findElement(webdriver.By.className('b-delivery-content'));

// webdriver.execute_script("arguments[0].innerHTML = 'It is content mail'", tinyMceEditor);

//Assert.assertEquals(1,2);
