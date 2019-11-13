const fs = require('fs')
fs.writeFileSync('notes.txt', 'created by nodejs')
fs.appendFileSync('notes.txt','     appended ')