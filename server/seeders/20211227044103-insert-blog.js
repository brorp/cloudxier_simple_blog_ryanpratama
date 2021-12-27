'use strict';
const axios = require('axios')
// const dataLoe = async () => {
//   const response = await axios({
//     method: 'GET',
//     url: 'https://newsapi.org/v2/everything?q=house&apiKey=7026d13236394963856a190be5b09e5c'
//   })
//   console.log(response.data.articles)
// }
// dataLoe()
module.exports = {
  up: async (queryInterface, Sequelize) => {
    let data = []
    const response = await axios({
      method: 'GET',
      url: 'https://newsapi.org/v2/everything?q=house&apiKey=7026d13236394963856a190be5b09e5c'
    })
    response.data.articles.forEach(el => {
      data.push({
        title: el.title,
        author: el.author,
        description: el.content,
        img: el.urlToImage,
        url: el.url,
        publishedAt: el.publishedAt.slice(0, 10),
        createdAt: new Date(),
        updatedAt: new Date()
      })
    })
    await queryInterface.bulkInsert("Blogs", data)
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Blogs', null, {})
  }
};
