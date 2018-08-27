let test = {
    _num:1
    ,
    sora() {
        return this.num;
    },
    get num() {
        return this._num;
    }
}

console.log(test._num);
console.log(test.sora());
console.log(test.num);

let bikes = {
    schwinn: 'blue',
    trek: 'black'
}

bikes['specialized'] = 'red';
bikes.te = 'blue';
console.log(bikes);