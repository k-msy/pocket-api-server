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
  console.log('hgoehogehogehogehoo')
  const options = generate_access_token_options(req.query.request_token)
  try{
    console.log('---options---')
    console.log(options)
    console.log('---options---')
    const result = await axios(options)
    console.log('---result---')
    console.log(result)
    console.log('---result---')
    return result.data
  }catch(e){
    const err = generate_err_obj(e)
    console.log(err)
    return err
  }
  // const options = generate_access_token_options(req.query.request_token)
  // console.log('-----ここまで来てるよー')
  // console.log(options)
  // console.log('-----ここまで来てるよー')
  // try{
  //   console.log('>>>try')
  //   let result = await axios.post(options)
  //   return res.send(result)
  // }catch(e){
  //   console.log('>>>catch')
  //   const err = error.generate_err_obj(e)
  //   console.log('-------------err--------------')
  //   console.log(err)
  //   console.log('-------------err--------------')
  //   return res.send(err)
  // }
}