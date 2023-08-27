import _ from 'lodash'

const array = [2, 4, 5, 6, 3, 1, 8, 12, 7]

const chunks = _.chunk([...array], 3);
const fillArray = _.fill([...array], '*')
const findLast = _.findLast(array, function(n) {
    return n%2 == 0
})
const sample = _.sample(array);
const includes = _.includes([...array], 2)
const compact = _.concat(array, fillArray);
const sum = _.sum(array);
const max = _.max(array);
const random = _.random(1, 99);
const replace = _.replace('Hello World', 'World', 'Uzbekistan')


console.log(chunks);
console.log(fillArray);
console.log(includes);
console.log(compact);
console.log(sum);
console.log(max);
console.log(random);
console.log(replace);
console.log(findLast);
console.log(sample);

