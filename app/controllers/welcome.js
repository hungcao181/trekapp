
export default {

  * index(next) {
    this.body = 'Hello Trek.js!';
    this.body += '<ul>'
    this.body += '<li>' + 'http://www.amazon.com/gp/product/B00NIYJF6U/ref=br_asw_pdt-1?pf_rd_m=ATVPDKIKX0DER&pf_rd_s=desktop-6&pf_rd_r=1KGFQQ4ZED56SY2ANJ4C&pf_rd_t=36701&pf_rd_p=2306025342&pf_rd_i=desktop' + '</li>'
    this.body += '/ul'
  }

};