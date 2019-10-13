const registerValidator = require('../validator/registerValidator')
// login controller 
module.exports = {
	login(req, res) {
		let { name, email } = req.body

		res.json({
			message: `Welcome ${name}, we will contact with you by ${email}`
		})
	},
	register(req, res) {
		let { name, email, password, confirmPassword } = req.body
        let validate = registerValidator({ name, email, password, confirmPassword })
        
        if (!validate.isValid) {
            return res.status(400).json(validate.error)
        } else {
        	return res.status(200).json({
        		message: 'Everything is ok'
        	})
        }
	}
}