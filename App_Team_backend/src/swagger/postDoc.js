/**
 * @swagger
 * components:
 *   schemas: 
 *      postSchema:
 *          type: object
 *          properties:
 *           content1:
 *            type: string
 *            description: write the content for post
 *           likes:
 *             type: array
 *             description: objectId of likeSchema who liked the post
 *           comment:
 *              type: array
 *              description: objectId of commentSchema who commented on the post
 * 
 *      likeSchema:
 *          type: object
 *          properties:
 *           user:
 *            type: string
 *            description: objectId of user who like the post
 *           onModel:
 *            type: string
 *            description: like made on which model it can be Post or Comment model
 *           likeable:
 *             type: string
 *             description: it is the object id of the post or comment schema
 * 
 *      hashtagSchema:
 *          type: object
 *          properties:
 *           text:
 *            type: string
 *            description: it is the hashtag written in the post
 *           post:
 *            type: array
 *            description: it is the object id of the post along which hastag was written
 * 
 *      userSchema:
 *          type: object
 *          properties:
 *           email:
 *            type: string
 *            description: this is email which will be enter while signUp the new user
 *           password:
 *            type: string
 *            description: password while new signUp of the user        
 *           bio:
 *            type: string   
 *            description: bio of the user example student
 *           post:
 *            type: array 
 *            description: it will include the objectId of the post made by the user
 */

/**
 * @swagger
 * /api/v1/post:
 *         post: 
 *            tags: ['Post']
 *            summary: Api to post the Post
 *            requestBody:
 *                  required: true
 *                  content:
 *                    application/json:
 *                        schema:
 *                           
 *                            example:
 *                                content: hey! everyOne lets go to ground #Hillfair
 *                                likes: 6520f43cbdd1b9d37e06974a
 *                                comment: 651ffe650733963ab5f55ada
 *            responses:
 *                '201':
 *                   description: this will create the post for an user
 *                   content:
 *                       application/json:
 *                           schema:
 * 
 *                '500':
 *                  description: error in posting the Post
 * 
 */

/** 
 * @swagger
 * /api/v1/post/get:
 *                get:
 *                   tags: ['Post']
 *                   summary: Api used to get all the posts
 *                   requestBody:
 *                         required: true
 *                         content:
 *                           application/json:
 *                               schema:
 *                                                               
 *                   responses:
 *                '201':
 *                   description: this will the posts
 *                   content:
 *                       application/json:
 *                           schema:
 * 
 *                '500':
 *                  description: error in getting the post
 * 
 */

/**
 * @swagger
 * /api/v1/like:
 *         post: 
 *            tags: ['Like']
 *            summary: Api to like the post or comment
 *            requestBody:
 *                  required: true
 *                  content:
 *                    application/json:
 *                        schema:
 *                           
 *                            example:
 *                                modelId: 6520f8e428310fd237004d5f
 *                                modelType: Post
 *                                userId: 651eb93913b4dac40a37a8d4
 *            responses:
 *                '201':
 *                   description: this will like the post its is based on toggle like
 *                   content:
 *                       application/json:
 *                           schema:
 * 
 *                '500':
 *                  description: error while liking the content  
 */

/** 
 * @swagger
 * /api/v1/user/signUp:
 *                post:
 *                   tags: ['signUp']
 *                   summary: Api used to signUp the user
 *                   requestBody:
 *                         required: true
 *                         content:
 *                           application/json:
 *                               schema:
 *                                  
 *                                  example:
 *                                        email: karangill1810@gmail.com
 *                                        password: 1234
 *                                        bio: student
 *                                        post: 6520f8dd28310fd237004d5b
 *                   responses:
 *                '201':
 *                   description: this will signUp the user
 *                   content:
 *                       application/json:
 *                           schema:
 * 
 *                '500':
 *                  description: error in signUp the user
 * 
*/

/** 
 * @swagger
 * /api/v1/post/:id:
 *                delete:
 *                   tags: ['Post']
 *                   summary: Api used to delete the post with the PostId
 *                   requestBody:
 *                         required: true
 *                         content:
 *                           application/json:
 *                               schema:
 *                                                               
 *                   responses:
 *                '201':
 *                   description: this will delete the post
 *                   content:
 *                       application/json:
 *                           schema:
 * 
 *                '500':
 *                  description: error in deleting the post
 * 
*/

