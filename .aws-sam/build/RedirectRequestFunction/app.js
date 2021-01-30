const AWS = require('aws-sdk');


exports.handler = async (event) => {
    
    var redirectState=event.queryStringParameters.allowredirect
    var done=event.queryStringParameters.done
   console.log(redirectState)
      done++
    
    var url="https://"+event.requestContext.domainName+"/"+event.requestContext.stage+`/redirect?allowredirect=${redirectState}&done=`+done
 
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
await sleep(20000);

 console.log(done)
var response;
  if(redirectState=="success"){
    if(done<5){
      response = {
        statusCode: 301,
        headers:{
            "location":url
        },
    }
   
  }else{
    response = {
      statusCode: 200,
      body: JSON.stringify(' check successed '),
  }
  }

  }else if(redirectState=="fail"){
    if(done<8){
      response = {
        statusCode: 301,
        headers:{
            "location":url
        },
    }
  }else{
    response = {
      statusCode: 404,
      body: JSON.stringify(' failed because take long time')
  }
  }

}

 return response;

    
    
    
    
};
