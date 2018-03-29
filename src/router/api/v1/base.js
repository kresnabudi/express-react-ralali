'use strict'

const base_path = '/api/v1/'
module.exports = (app) => {
    app.get(base_path, (req, res, next) => {
        res.send({
			status: 'Api File is Running'
	    })
    })
}
