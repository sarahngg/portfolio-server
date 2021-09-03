/** Logger Middleware 
 *   req -> middleware -> res
 * - Express will supply req, res, next into middleware
 * - next() -  passes on to the next middleware
 * - either send its response or next()
*/

const logger = (req, res, next) => {
  const { method, url } = req;
  console.log(method, url, new Date().getFullYear());
  next();
}

module.exports = logger;