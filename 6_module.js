var myhttp = require("./6_module_call");
var newhttp = new myhttp.myhttp("HttpRequest","HttpResponse");
newhttp.print();
newhttp.doGet();
newhttp.doPost();
myhttp.httpinfo(newhttp);