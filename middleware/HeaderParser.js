function HeaderParser(req, res, next) {
	res.json({
		ipaddress: req.ip,
		language: req.acceptsLanguages(),
		software: req.get('User-Agent')
	})
	next()
}

module.exports = HeaderParser