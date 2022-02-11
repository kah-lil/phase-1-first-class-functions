function receivesAFunction(cb) {
    return cb()
}

function returnsANamedFunction(){
    return function test(){
    }
}

function returnsAnAnonymousFunction(){
    return function(){
        console.log('test')
    }
}