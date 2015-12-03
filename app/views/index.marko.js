function create(__helpers) {
  var str = __helpers.s,
      empty = __helpers.e,
      notEmpty = __helpers.ne;

  return function render(data, out) {
    out.w('<!DOCTYPE html> <html>\n  <head>\n  </head>\n  <body>\n    <ul class="linksList">\n        <li>\n            <a href="http://www.amazon.com/gp/product/B00NIYJF6U/ref=br_asw_pdt-1?pf_rd_m=ATVPDKIKX0DER&amp;pf_rd_s=desktop-6&amp;pf_rd_r=1KGFQQ4ZED56SY2ANJ4C&amp;pf_rd_t=36701&amp;pf_rd_p=2306025342&amp;pf_rd_i=desktop"> Amazon </a>\n        </li>\n        <li>    \n            <a href="https://www.32redsport.com"> Bet </a>\n        </li>\n    </ul>\n    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>    \n    <script type="text/javascript">\n        $(document).ready(function(){\n            var links = $("li a");\n            console.log(\'links: \', links);\n        });\n\n        $(".linksList").on(\'click\', \'a\', function(e) {\n            e.preventDefault();\n            var myl = $(this).attr(\'href\');\n            console.log(\'you clicked on \', myl);\n            var endpoint = \'http://api.viglink.com/api/click?key=\' + \'f1f5aa4cd49024c84ddc8cf6c88a8ac5\'; \n            endpoint = endpoint + \'&out=\' + myl;\n            endpoint = endpoint + \'&loc=\' + \'localhost\';\n            $.get(endpoint, function(data, status) {\n            console.log("Data: " + data + "\\nStatus: " + status);\n            });\n            //http://api.viglink.com/api/click?key=<your API key>&out=<URL>&loc=<URL>\r\n        });\r\n        \r\n    </script>\n  </body>\n</html>');
  };
}
(module.exports = require("marko").c(__filename)).c(create);