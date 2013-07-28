# node-datasift

Complete Solution for DataSift.

### Note:

Forked from [datasift-rest](https://github.com/timisbusy/node-datasift-rest)


## Install*

    npm install node-datasift

## Use

    var DS = require('node-datasift')
    ds = new DS({username:'',apikey:''})

    ds.helpers.generateTwitterFollowHash([20731458, 18751623, 363450850], function (err, data) {
        if (err) console.log(err)
        console.log(data)
    })

## TODO

    * add project to NPM
    Lots of things