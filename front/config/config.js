const prod = process.env.NODE_ENV === 'production';
module.exports = {
  backURL: prod ? 'http://api.grah.shop' : 'http://localhost:3065',
};
