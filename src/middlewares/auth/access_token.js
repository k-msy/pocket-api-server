axios = require('axios')
constant = require('../../../constant/config.js')
error = require('../../../service/error')

generate_access_token_options = (token) => {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
      'X-Accept': 'application/json'
    },
    data: {
      consumer_key: constant.CONSUMER_KEY,
      code: token
    },
    url: constant.ACCESS_TOKEN_URL
  }
  return options
}

module.exports = async (req, res) => {
  const options = generate_access_token_options(req.query.request_token)
  try{
    let result = await axios.post(options)
    return res.send(result)
  }catch(e){
    const err = error.generate_err_obj(e)
    return res.send(err)
  }
}