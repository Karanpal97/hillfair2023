const Event = require("../models/EventModel");


const postEvent = async (req, res) =>{
    const event = req.body;
   
    try {
        const newEvent = await Event.create(event);
        res.status(201).json({message: "Event added", newEvent})
    } catch (error) {
        res.status(500).json(error);
    }
    
}

const getEvent = async (req, res) =>{

    try {
       const events = await Event.find();
       res.status(200).json(events); 
    }
     catch (error) {
        res.status(500).json(error);
    }
}


const getSearchEvent = async (req, res) =>{
         
    const schEvent = req.query.search ?
    {
        $or: [
            {name: {$regex: req.query.search, $options: "i"}},
        ],
    }
    : {}

    if(schEvent){

        try {
            const events = await Event.find(schEvent);
            res.send(events);
        } catch (error) {
            res.send(error);
        }
    }
    else{
        try {
            const events = await Event.find();
            res.status(200).json(events);
        } catch (error) {
            res.status(500).json(error)
        }
    }
}

const deleteEvent = async(req, res) =>{
    
    const id = req.params.id;
    try {
         
        const deletedEvent = await Event.findByIdAndDelete(id);
        res.status(200).send({message: "Event deleted successfully", deletedEvent});
    } 
    catch (error) {
       res.status(500).send(error); 
    }
}

const updateEvent = async (req, res) =>{
    
    const id = req.params.id;
    const update = req.body;

    try {
        const updatedEvent = await Event.findByIdAndUpdate(id, update,
            {
                new: true
            });

        res.status(200).send({message: "Event updated successfully", updatedEvent});
    }
     catch (error) {
        res.status(500).send(error);
    }
}


module.exports = {postEvent, getEvent, getSearchEvent, deleteEvent, updateEvent};