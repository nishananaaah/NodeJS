var http = require("http")


http.createServer(function(req,res){
     res.write("hello from http module")
     res.end()
})
.listen("8080")