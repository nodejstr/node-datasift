module.exports = function (sendRequest) {
    return {
        balance: function balance(callback) {
            var call = "balance"
            sendRequest(call, this.vars, callback)
        },
        compile: function compile(csdl, callback) {
            var call = "compile"
            var params = {
                csdl: csdl
            }
            sendRequest(call, params, callback)
        },
        dpu: function dpu(hash, callback) {
            var call = "dpu"
            var params = {
                hash: hash
            }
            sendRequest(call, params, callback)
        },
        stream: function stream(hash, options, callback) {
            var call = "stream"
            if (typeof options === 'function') {
                callback = options
                options = { hash: hash }
            } else {
                options.hash = hash
            }
            sendRequest(call, options, callback)
        },
        usage: function usage(period, callback) {
            var call = "usage"
            var params = {
                period: period
            }
            sendRequest(call, params, callback)
        },
        validate: function validate(csdl, callback) {
            var call = "validate"
            var params = {
                csdl: csdl
            }
            sendRequest(call, params, callback)
        }
    }
}