import Trek from 'trek';

var app = new Trek(__dirname);

app.get('/', function* (next) {


  this.body = '<!DOCTYPE html><html><head></head><body>';
  this.body += 'Hello Trek.js!';
  this.body += '<ul>'
  this.body += '<li><a href=' + 'http://www.amazon.com/gp/product/B00NIYJF6U/ref=br_asw_pdt-1?pf_rd_m=ATVPDKIKX0DER&pf_rd_s=desktop-6&pf_rd_r=1KGFQQ4ZED56SY2ANJ4C&pf_rd_t=36701&pf_rd_p=2306025342&pf_rd_i=desktop' + '/></li>'
  this.body += '<li><a href=' + 'https://www.32redsport.com' + '/></li>'  

  this.body += '</ul>'
  this.body += '</body></html>';

//   this.body = ```<!DOCTYPE html><html><head></head><body>
//   Hello Trek.js!
//   <ul>
//   <li>
//   <a href='http://www.amazon.com/gp/product/B00NIYJF6U/ref=br_asw_pdt-1?pf_rd_m=ATVPDKIKX0DER&pf_rd_s=desktop-6&pf_rd_r=1KGFQQ4ZED56SY2ANJ4C&pf_rd_t=36701&pf_rd_p=2306025342&pf_rd_i=desktop'>
//   </li>
//   </ul>
//   </body>
//   </html>
//   ```
});

app.on('error', function (err, context) {
  app.logger.error(err);
});

app.run();
