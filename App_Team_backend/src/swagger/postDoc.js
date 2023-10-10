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
 *      get: 
 *         tags: ['Post']
 *         summary: Api to get all post
 *         discription: Api to get all post
 *         responses:
 *            '200':
 *               discription: all events
 *               content:
 *                  application/json:
 *                     schema:
 *            '500':
 *                description: Error loading data
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
 *                                modelId: 65243f1a29c80de2b983e016
 *                                modelType: Post
 *                                userId: 652423e6ee8e2947e410f59c
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
 *         post: 
 *            tags: ['User']
 *            summary: Api use to signUp the user
 *            requestBody:
 *                  required: true
 *                  content:
 *                    application/json:
 *                        schema:
 *                           
 *                            example:
 *                                email: karangill1810@gmail.com
 *                                password: 1234
 *                                bio: student
 *                                post: 6520f8dd28310fd237004d5b
 *            responses:
 *                '201':
 *                   description: this will signUp the user
 *                   content:
 *                       application/json:
 *                           schema:
 * 
 *                '500':
 *                  description: error in sigingUp the user
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


 /**
 * @swagger
 * /api/v1/user/{rollNo}:
 *   get: 
 *     tags: ['User']
 *     summary: Api to get user by rollNo
 *     description: Api to get user details by rollNo
 *     parameters:
 *       - in: path
 *         name: rollNo
 *         schema:
 *           type: string
 *         required: true
 *         description: User's roll number
 *     responses:
 *       '200':
 *         description: User details retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '../../models/user.js'  # Adjust this path based on your Swagger file structure
 *       '500':
 *         description: Error loading data
 */

 

/**
 * @swagger
 * /api/v1/user/id/{userId}:
 *   get:
 *     tags:
 *       - User
 *     summary: Api to get the user detail through user objectId
 *     description: Api to get user details by user objectId
 *     parameters:
 *       - in: path
 *         name: userId
 *         schema:
 *           type: string
 *         required: true
 *         description: User's ObjectId
 *     responses:
 *       '200':
 *         description: User details retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/definitions/User'  # Adjust this path based on your Swagger file structure
 *       '500':
 *         description: Error loading data
 * definitions:
 *   User:
 *     type: object
 *     properties:
 *       id:
 *         type: string
 *         description: User's ObjectId
 *       name:
 *         type: string
 *         description: User's name
 *       email:
 *         type: string
 *         description: User's email address
 *       
 */


/**
 * @swagger
 * /api/v1/user/signIn:
 *   post:
 *     tags: ['User']
 *     summary: Api to signIn the User
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 example: 22bph083@gmail.com
 *               password:
 *                 type: string
 *                 example: 456
 *     responses:
 *       '201':
 *         description: User signed in successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 message:
 *                   type: string
 *                   example: "Successfully signed in"
 *                 data:
 *                   type: string
 *                   example: "YOUR_JWT_TOKEN"
 *       '500':
 *         description: Error in signing in the user
 */
