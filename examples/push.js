var DS = require('../index')
ds = new DS(require('./conf'))

ds.push.get(function (err, data) {
    if (err)
        console.log(err)
    console.log(data)
})

ds.push.log(function (err, data) {
    if (err)
        console.log(err)
    console.log(data)
})