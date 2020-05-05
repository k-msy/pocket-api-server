module.exports = {
  generate_err_obj: (e) => {
    const err = {
      status: e.response.status,
      statusText: e.response.statusText,
      'x-error': e.response.headers['x-error'],
      'x-error-code': e.response.headers['x-error-code']
    }
    return err
  }
}