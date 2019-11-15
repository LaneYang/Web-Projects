const getNotes = require('./note.js')
const validator = require('validator')
const chalk = require('chalk')
const userCommand = process.argv[2]
if(userCommand ==="add"){
    console.log("adding note!")
}