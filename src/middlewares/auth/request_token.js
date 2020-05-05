axios = require('axios')
constant = require('../../../constant/config.js')
error = require('../../../service/error')

generate_err_obj = (e) => {
  const err = {
    status: e.response.status,
    statusText: e.response.statusText,
    'x-error': e.response.headers['x-error'],
    'x-error-code': e.response.headers['x-error-code']
  }
  return err
}

module.exports = async (req, res) => {
  const options = {
    consumer_key: constant.CONSUMER_KEY,
    redirect_uri: constant.REDIRECT_URI
  }
  try{
    let result = await axios.post(constant.REQUEST_TOKEN_URL, options)
    const data = {
      request_token: result.data.split('=')[1],
      redirect_uri: constant.REDIRECT_URI
    }
    return res.send(data)
  }catch(e){
    const err = error.generate_err_obj(e)
    return res.send(err)
  }
}