const router = require('express').Router()

const {
    getAllPost,
    getCreatePost,
    getUpdatePost,
    getSignlePostDelete
} = require('./postController')


router.get('/',getAllPost )

router.post('/',getCreatePost )

router.put('/',getUpdatePost )

router.delete('/',getSignlePostDelete)



module.exports = router