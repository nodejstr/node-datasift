var DS = require('../index')
ds = new DS(require('./conf'))

ds.api.core.balance(function (err, data) {
    if (err)
        console.log(err)
    console.log(data)
})