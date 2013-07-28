var DS = require('../index')
ds = new DS(require('./conf'))
var ids = [20731458, 18751623, 363450850];
ds.helpers.generateTwitterFollowHash(ids, function (err, data) {
    if (err) { throw err; }
    console.log(data);
});