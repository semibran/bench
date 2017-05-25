exports.start = start
exports.end = end

var now = Date.now
var time = 0

function start() {
	time = now()
}

function end() {
	return now() - time
}
