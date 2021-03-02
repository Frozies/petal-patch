const puppeteer = require('puppeteer');

const express = require('express');
const app = express();

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/', async (req, res) => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://www.teleflora.com/bouquet/make-a-wish?prodID=P_TEV13-6A&skuId=TEV13-6A&zipMin='); // URL is given by the "user" (your client-side application)

    const PRICE_SELECTOR = '#sizeRadios > li:nth-child(INDEX)';

    res.set('Content-Type', 'text/html');

    for (let i = 1; i <= 3; i++) {
        let priceSelector = PRICE_SELECTOR.replace("INDEX", i);

        let productName = await page.evaluate((sel, i) => {
            return document.getElementById("skuRadio" + i).getAttribute('data-alttext');
        }, priceSelector, i);

        // Product ID
        let productID = await page.evaluate((sel, i) => {
            return document.getElementById("skuRadio" + i).value;
        }, priceSelector, i);

        // Price of Product
        let price = await page.evaluate((sel, i) => {
            return document.getElementById("skuid-" + i).value;
        }, priceSelector, i);

        // Product Image
        let productImage = await page.evaluate((sel, i) => {
            return document.getElementById("skuRadio" + i).getAttribute('data-zoom');
        }, priceSelector, i);

        res.write(JSON.stringify({
            name: productName,
            id: productID,
            price: price,
            img: productImage.replace("/w_800,h_1000", "/w_300,h_300"),
        }))
    }

    res.send();
    await browser.close();
})

app.listen(4000);