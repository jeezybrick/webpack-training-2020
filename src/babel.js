async function start() {
    return await Promise.resolve('Its works');
}

start().then(console.log);

const unusedTest = 42;

class Util {
    static id = Date.now();
}

console.log(Util.id);
import ('lodash').then(_ => {
    console.log(_.random(0,100, true))
})
