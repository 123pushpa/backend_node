const http=require("http");
const fs=require("fs");
const url=require("url");




//notes 
//http://localhost:8001/search?search_query=jave+tic+tac
//HERE ARE RESULTS FOR jave tic tac





const myServer=http.createServer((req,res)=>{

     if(res.url==="./favicon.ico") return res.end();

    const log=`${Date.now()}: ${req.method} ${req.url} NEW REQUEST RECEIVED\n`;

    //node -url library to prse serach parameter
    const myUrl=url.parse(req.url,true);
    // console.log(myUrl);

    fs.appendFile("log.txt",log,(error,data)=>{

   

    // switch(req.url){
    switch(myUrl.pathname){

        case "/":
            //GET METHOD
            if(req.method==="GET"){
                res.end("HOME PAGE");
            }
            // res.end("HOME PAGE");
            break;

            case "/about":
            const username=myUrl.query.myname;
            res.end(`HI,${username}`)
            res.end("ABOUT PAGE IS DISPLAY");
            break;

            case "/contact":
                res.end("CONATCT PAGE ")
                break;

            case "/search":
                const search=myUrl.query.search_query;
                res.end("HERE ARE RESULTS FOR " + search)
                
            case "/signup":
                if(req.method==="GET")
                    res.end("RENDER SIGNUP PAGE ON BROWSER")
                
                else if (req.method==="POST"){
                   //db query 
                   //redirect logic
                   res.end("SUCCESS")

                }   

                default:
                    res.end("404 NOT FOUND") 
    }



  })
// res.end("HELLOW FROM BRWSER")

})

myServer.listen(8001,()=>{
    console.log("SERVER STARTED")
})