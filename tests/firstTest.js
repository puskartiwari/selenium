
const {Builder} =require ("selenium-webdriver");
const {By,Key} = require('selenium-webdriver');
var should =require("chai").should();

//describe block
describe("add todo tests",function(){

  //it block
  it("successfully adds a todo to application", async function(){



// // launch the browser
let driver= await new Builder().forBrowser("chrome").build();



    //navigate to our applications

    await driver.get("https://galaxy.medekits.com")


     //add a todo
    // await driver.findElement(By.id('name')).sendKeys('John Doe');
    await driver.findElement(By.id('email')).sendKeys('gsc@medekits.com');
    await driver.findElement(By.id('password')).sendKeys('kpl@123');
    // await driver.findElement(By.id('confirm-password')).sendKeys('password');
    // await usernameInput.sendKeys('gsc@medekits.com');
    // await passwordInput.sendKeys('kpl@123');

    await driver.findElement(By.className('btn')).click();

    // Verify that the user has been logged in


// const loadMore= await driver.findElement(By.id('load_more'));
// assert (loadMore==='load_more');


//     const { By, until } = require('selenium-webdriver');
 // Wait for the page to load and find the welcome message
 await driver.wait(until.elementLocated(By.id('load_more')), 5000);

 // Assert that the welcome message is displayed
 let welcomeMessage = await driver.findElement(By.id('load_more')).getText();
 assert.strictEqual(welcomeMessage, 'load_more');

 await driver.findElement(By.className('load_more')).click();



   
      //navigate to our applications
          


      // await driver.get("https://galaxy.medekits.com/patient/list")
  
  // await driver.findElement(webdriver.By.className('btn')).click();



//close the browser
// await driver.quit();




  });
})








