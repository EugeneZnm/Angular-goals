function asycTask(){
    var promise = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("Action complete");
            resolve();
        },1000);
    });
    return promise;
}
