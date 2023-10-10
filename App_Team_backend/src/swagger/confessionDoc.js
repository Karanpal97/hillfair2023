/**
 * @swagger
 * components:
 *   schemas:
 *       ConfessionSchema:
 *             type: object
 *             properties:
 *               conf_message:
 *                  type: string
 *                  description: confession message
 *               user:
 *                  type: userId
 */

/**
 * @swagger
 * /conf/allConfessions:
 *      get:
 *        tags: ['Confession']
 *        summary: Api to get all confesssion
 *        discription: Api to get all confessions
 *        responses:
 *            '200':
 *               discription: all confessions
 *               content:
 *                  application/json:
 *                     schema:
 *            '500':
 *                description: Error loading data
 */

/**
 * @swagger
 * /conf/postConfession:
 *      post:
 *        tags: ['Confession']
 *        summary: Api to post confesssion
 *        discription: Api to post confessions
 *        requestBody:
 *            required: true
 *        responses:
 *            '200':
 *               discription: created confessions
 *               content:
 *                  application/json:
 *                     schema:
 *                         example:
 *                             conf_message: hello
 *                             user: 65244075f16a617f89396d22
 *            '500':
 *                description: Error loading data
 */

/**
 * @swagger
 * /conf/deleteConfession:
 *      delete:
 *        tags: ['Confession']
 *        summary: Api to delete confesssion
 *        discription: Api to delete confessions
 *        parameters:
 *            -in: query
 *             required: true
 *             name: id
 *             schema:
 *                type: objectId
 *        responses:
 *            '200':
 *               discription: deleted confessions
 *               content:
 *                  application/json:
 *                     schema:
 *            '500':
 *                description: Error loading data
 */
