//
function Singleton(){
    this.foo = 'hello'
}


if(!global._foo){
    global._foo = new Singleton();
}

module.exports = global._foo;