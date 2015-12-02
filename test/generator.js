
console.log('-------------------------------------');


var makeRequest = require('request');


function request(url) {
    // this is where we're hiding the asynchronicity,
    // away from the main code of our generator
    // `it.next(..)` is the generator's iterator-resume
    // call
    makeRequest( url, function(err ,response, body){
        it2.next({'data': {'id': '10'}});
        // console.log(response);
    } );
    // Note: nothing returned here!
}

function *main() {
    var result1 = yield request( "https://www.google.com/?gws_rd=ssl#q=generator" );
    var data = JSON.parse( result1 );
    console.log(data);
    // var result2 = yield request( "https://www.google.com/?gws_rd=ssl#q=generator" + data.id );
    // var resp = JSON.parse( result2 );
    // console.log( "The value you asked for: " + resp.value );
}

var it2 = main();

it2.next(); // get it all started