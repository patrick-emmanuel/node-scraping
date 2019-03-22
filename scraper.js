const cheerio = require("cheerio");
const axios = require("axios");

const siteUrl = "https://remoteok.io/";

const fetchData = async () => {
  const result = await axios.get(siteUrl);
  return cheerio.load(result.data);
};

const categories = new Set();
const tags = new Set();
const locations = new Set();
const positions = new Set();

const getResults = () => {
  const $ = fetchData();

  $(".tags .tag").each((index, element) => {
    tags.add($(element).text());
  });
  $(".location").each((index, element) => {
    locations.add($(element).text());
  });
  $("div.nav p")
    .text()
    .each((index, element) => {
      categories.add($(element).text());
    });
  $('.company_and_position [itemprop="title"]').each((index, element) => {
    positions.add($(element).text());
  });
  console.log(positions);
  return {
    positions,
    tags,
    locations,
    categories
  };
};

module.exports = getResults;
