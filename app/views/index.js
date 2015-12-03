// var template = require(__dirname + '/template.marko');

let    marko = require('marko');


// module.exports = function* (next) {
//     template.render({
//         name: 'Hung'
//     }, next);
// }

module.exports = function* (next) {
    
    let data = {
        name: 'Hung'
    };
    this.body = marko.load(__dirname + '/index.marko').stream(data);
    this.type = 'text/html';

}