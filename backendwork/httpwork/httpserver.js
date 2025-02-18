const http=require('http');
const PORT=2021;
const server=http.createServer((req,res)=>{
    res.setHeader('Content-Type','text/html')
    res.end("<h1>Helooo abes guyzzzzz</h1>");
})
server.listen(PORT,()=>{
    console.log("Server is running on the "+PORT);
})
