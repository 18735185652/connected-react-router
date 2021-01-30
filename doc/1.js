
function dispatch(){
    console.log('dispatch: ');
}

function logger(){
    console.log('logger前');
    dispatch()
    console.log('logger后');
}


function thunk(){
    console.log('thunk前');
    logger()
    console.log('thunk后');
    
}

function promise(){
    console.log('promise前');
    thunk()
    console.log('promise后');
  
}

promise()

/**
    promise前
    thunk前
    logger前
    dispatch: 
    logger后
    thunk后
    promise后
 */