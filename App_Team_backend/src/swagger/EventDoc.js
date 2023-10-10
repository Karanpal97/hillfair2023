/**
 * @swagger
 * components:
 *   schemas: 
 *      eventSchema:
 *          type: object
 *          properties:
 *           name:
 *            type: string
 *            description: name of event
 *           startDate:
 *            type: string
 *            description: start Date of event
 *           endDate: 
 *            type: string
 *            description: end date of event
 *           venue: 
 *            type: string
 *            description: venue of the event
 *           info:
 *              type: string
 *              description: info about the event 
 *           image:
 *              type: string
 *              description: url of the image
 *           isWorkshop: 
 *            type: Booelan
 *           regUrl:
 *            type: string
 *            description: registration url 
 */


/**
 * @swagger
 * /event/getEvent:
 *      get: 
 *         tags: ['Events']
 *         summary: Api to get all events
 *         discription: Api to get all events
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
 * /event/postEvent:
 *         post:
 *            tags: ['Events']
 *            summary: Api to  Post Events
 *            requestBody:
 *                  required: true
 *                  content:
 *                     application/json:
 *                         schema:
 *                      
 *                             example:
 *                                 name: HacknHills,
 *                                 startDate: 2023-02-06T13:08:52
 *                                 endDate: 2023-03-10T00:36:08
 *                                 venue: OAT
 *                                 regUrl: www.google.com
 *                                 image: sdslfxdfgdgfhcffghgdf
 *                                 info: Hacked hIlls
 *                                 isWorkshop: true  
 * 
 *            responses:
 *                '201':
 *                   description: created event with given fields
 *                   content:
 *                       application/json:
 *                           schema:
 * 
 *                '500':
 *                  description: error posting event
 */

/**
 * @swagger
 *  /event/searchEvent?search=searchWord:
 *      get:
 *        tags: ['Events']
 *        summary: Api to get searched events
 *        discription: Api to get search events
 *        parameters:
 *           - in: query
 *             name: search
 *             schema:
 *                type: text
 *        responses:
 *            '200':
 *               discription: Events related to search
 *               content:
 *                  application/json:
 *                     schema:
 *            '500':
 *                description: Error loading data    
 */

/**
 * @swagger
 *  /event/deleteEvent/{id}:
 *      delete:
 *        tags: ['Events']
 *        summary: Api to Delete event
 *        discription: Api to Delete events
 *        parameters:
 *           - in: query
 *             required: true
 *             name: id
 *             schema:
 *                type: objectId
 *        responses:
 *            '200':
 *               discription: Deleted event
 *               content:
 *                  application/json:
 *                     schema:
 *            '500':
 *                description: INternal server Error   
 */

/**
 * @swagger
 *  /event/updateEvent/{id}:
 *      patch:
 *        tags: ['Events']
 *        summary: Api to Update event
 *        requestBody:
 *              required: true
 *              content:
 *                  application/json:
 *                      schema:
 * 
 *                                example:
 *                                 name: HacknHills,
 *                                 startDate: 2023-02-06T13:08:52,
 *                                 endDate: 2023-03-10T00:36:08,
 *                                 venue: OAT
 *                                 regUrl: www.google.com
 *                                 image: sdslfxdfgdgfhcffghgdf
 *                                 info: Hacked hIlls
 *                                 isWorkshop: true 
 *        parameters:
 *            - in: query
 *              required: true
 *              name: id
 *              schema:
 *                  type: objectId
 *        responses:
 *            '200':
 *               discription: Updated event
 *               content:
 *                  application/json:
 *                     schema:
 *            '500':
 *                description: INternal server Error   
 */

