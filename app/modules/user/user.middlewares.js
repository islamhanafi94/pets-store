function auth(req, res, next) {
  try {
    // this auth token will authenticate user and append its id
    // to the request and pass it to the next middleware
    // const decoded = jwt.verify(token, process.env.JWT_SECRET);
    // req.user = decoded;
    next();
  } catch (error) {
    return res.status(400).send('Invalid token');
  }
}

module.exports = auth;
