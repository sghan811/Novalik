const post_upload = (req, res, next) => (
    !req.user
      ? next(new Error('Authorization required'))
      : next()
)

module.exports={post_upload};