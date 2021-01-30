const AWS=require('aws-sdk')


exports.handler = async (event) => {

    var job=event.queryStringParameters.job
   
var start=0
    var sucessurl="https://"+event.requestContext.domainName+"/"+event.requestContext.stage+'/redirect?allowredirect=success&done=' +start
    var failureurl="https://"+event.requestContext.domainName+"/"+event.requestContext.stage+'/redirect?allowredirect=fail&done='+start

var response
if(job=="success"){
    response = {
        statusCode: 301,
        headers:{
            "location":sucessurl,
           
        },
       
    };
}else{

    response = {
        statusCode: 301,
        headers:{
            "location":failureurl,
         
        },
       
    };

}

console.log(response)



return response;

    
    
};
