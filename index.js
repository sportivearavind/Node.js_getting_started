const {format} = require('date-fns')

const {v4: uuid} = require('uuid') // every time a new unique id is created

console.log(format(new Date(), 'ddMMyyyy\tHH:mm:ss'));

console.log(uuid()); 