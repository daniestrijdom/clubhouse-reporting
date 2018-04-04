const { getSprintStories } = require ('./stories') 

const SPRINT_NUMBER = process.argv[2]

getSprintStories(SPRINT_NUMBER)