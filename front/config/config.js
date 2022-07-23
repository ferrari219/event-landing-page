const prod = process.env.NODE_ENV === 'production';
module.exports = {
  backURL: prod ? 'http://' : 'http://localhost:3065',
};
