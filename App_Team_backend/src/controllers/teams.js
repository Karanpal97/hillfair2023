const member_model = require("../models/Members");
const team_model = require("../models/teams.js");

 const getMembers = async (request, response) => {
    try {
      const members = await member_model.find();
      response.status(200).json(members);
    } catch (error) {
      console.log(error);
      response.status(500).send(error);
    }
  };

 const postMembers = async (req, res)=>{
  const member = req.body;
  const teamId = member.teamId;

  try {
    const team = await team_model.findById(teamId);
    console.log(team);
    const user = new member_model({
      member_name: member.member_name,
      team_name: team.team_name,
      teamId: teamId,
      position: member.position,
      year: member.year,
      image: member.image,
      instagram: member.instagram,
    });

    const newUser = await user.save();

    if(newUser){
      res.status(201).send({mesage: "member added", newUser});
    }
    else{
      res.status(500).send({message : "Error found"});
    }
  } catch (error) {
    res.status(500).send(error);
  }
}


 const getTeams = async (req, res) =>{
   
     try {
        const teams = await team_model.find();
        res.status(200).send(teams);
     } catch (error) {
        res.status(500).send(error);
     }
}

 const postTeam = async (req, res) =>{

     try {
      const teamData = req.body;
      console.log(teamData.team_name);

     const newTeam = await team_model.create(teamData);
     res.status(201).send({message : "New team added", newTeam});
     } catch (error) {
      res.status(500).send(error);
     }
}

 const getTeamMembers = async(req, res) =>{
        
  const teamId = req.params.id;
  const year = Number(req.query.year)||0;

   try {
      if(year==0){
        const teamMembers = await member_model.find({teamId:teamId});
        res.status(200).json(teamMembers);
      }else{
      
      const teamMembers = await member_model.find({ teamId:teamId, year:year });
      res.status(200).json(teamMembers);
    }
        
      } catch (error) {
        res.status(500).send(error);
      }
}

 const updateMember = async (req,res) =>{
   
     const memberId = req.params.id;
     const memberdata = req.body;

     try {
       const newMember = await member_model.findByIdAndUpdate(memberId, memberdata, {
        new:true
       })
       res.status(200).send({message: "Member updated", newMember});
     } 
     catch (error) {
      res.status(500).send(error);
     }
}

 const updateTeam = async (req,res) =>{
   
  const TeamId = req.params.id;
  const Teamdata = req.body;

  try {
    const newTeam = await team_model.findByIdAndUpdate(TeamId, Teamdata, {
     new:true
    })
    res.status(200).send({message: "Team updated", newTeam});
  } 
  catch (error) {
   res.status(500).send(error);
  }
}

 const deleteMember = async (req,res) =>{
   
  const memberId = req.params.id;

  try {
    const deletedMember = await member_model.findByIdAndDelete(memberId)
    res.status(200).send({message: "Member Deleted", deletedMember});
  } 
  catch (error) {
   res.status(500).send(error);
  }
}

 const deleteTeam = async (req,res) =>{
   
  const teamId = req.params.id;

  try {
    const deletedTeam = await team_model.findByIdAndDelete(teamId)
    res.status(200).send({message: "Team Deleted", deletedTeam});
  } 
  catch (error) {
   res.status(500).send(error);
  }
}

module.exports = { getMembers,getTeams,postMembers,postTeam,getTeamMembers ,updateMember,updateTeam,deleteMember,deleteTeam}