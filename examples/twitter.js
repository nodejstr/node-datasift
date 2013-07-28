var DS = require('../index')
ds = new DS(require('./conf'))

ds.helpers.generateTwitterFollowHash([20731458, 18751623, 363450850], function (err, data) {
    if (err)
        console.log(err)
    console.log(data)
})