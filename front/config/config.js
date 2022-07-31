const prod = process.env.NODE_ENV === 'production';
module.exports = {
  backURL: prod ? 'http://landapi.grah.shop' : 'http://localhost:3065',
};
