require('marko/node-require').install();

import Trek from 'trek';

let views = require('co-views'),
    compress = require('koa-compress'),
    marko = require('marko'),
    serve = require('koa-static');

var app = new Trek(__dirname);

app.use(compress(
  {
    flush: require('zlib').Z_SYNC_FLUSH
  }
));
app.use(serve(__dirname + '/public'));


app.get('/', require('./app/views/index.js'));

app.on('error', function (err, context) {
  app.logger.error(err);
});

app.run();
