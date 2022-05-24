const Post = require('./Post');

module.exports = {
    create: (req, res, next) => {
        const post = req.body
        const user = req.user.username
        console.log(typeof(user))
        try {
            new Post({
                uploader: user,
                ...post
            })
            .save()
            .then(() =>{
                return next()
            }
            )
            .catch(err => next(err))
        } catch (err) {
            next(err)
        }
    }
}