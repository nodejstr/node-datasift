var DS = require('../index')
ds = new DS(require('./conf'))

ds.api.push.get(function (err, data) {
    if (err)
        console.log(err)
    console.log(data)
})

ds.api.push.log(function (err, data) {
    if (err)
        console.log(err)
    console.log(data)
})