const fs = require('fs');
const getResults = require('../scraper');

(async () => {
    let results = await getResults()
    let jsonString = JSON.stringify(results);
    fs.writeFileSync('../output.json', jsonString, 'utf-8');
})()
