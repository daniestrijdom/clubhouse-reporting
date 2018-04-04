const request = require('request-promise')
const R = require('ramda')

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').load();
}

const { API_KEY }  = process.env

function getSprintStories(sprintNumber) {
  const options = {
    url: 'https://api.clubhouse.io/api/beta/stories/search?token='  + API_KEY,
    method: 'POST',
    body: {
      label_name: `Sprint${sprintNumber}`
    },
    json: true
  }
  
  request(options)
  .then(response => {
    console.log(response)
    return response
  }).catch(error => {
    console.log(error)
  })
  
}

module.exports = {
  getSprintStories
}

