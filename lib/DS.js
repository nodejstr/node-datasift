var request = require('request'),
    util = require('util'),
    helpers = require('./helpers/helpers'),
    core = require('./helpers/core'),
    push = require('./helpers/push')

function DS(options) {
    if (!options || !options.username || !options.apikey)
        throw new Error('ERROR: need USERNAME and APIKEY in options')
    this.options = options
    var sendRequest = function (call, params, callback) {
        request.post({
            headers: {
                Auth: options.username + ":" + options.apikey
            },
            url: "http://api.datasift.com/v1/" + call,
            qs: params
        }, function (err, res, data) {
            if (err)
                callback(err)
            else {
                if (!data)
                    data = {}
                if (data.error)
                    callback(data.error)
                else
                    callback(null, data, res)
            }
        })
    }
    this.core = core(sendRequest)
    this.push = push(sendRequest)
    this.helpers = helpers(this.core)
}

function DSError(message) {
    Error.captureStackTrace(this, DSError)
    this.message = message
}

util.inherits(DSError, Error)
module.exports = DS