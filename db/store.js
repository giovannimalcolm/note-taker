const util = require('util');
const fs = require('fs')

const readFileAysnc = util.promisify(fs.readFile)
const writeFileAysnc = util.promisify(fs.writeFile)


class Store {
readData(){ 
    return readFileAsync('db.json', 'utf8');
}

writeData(note){
    return writeFileAysnc('db.json', JSON.stringify(note));
}





}