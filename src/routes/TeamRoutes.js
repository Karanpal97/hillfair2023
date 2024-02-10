const express = require("express");
const router = express.Router();

const {
    getMembers,
    getTeams,
    postTeamMember,
    postMembers,
    postTeam,
    getTeamMembers,
    updateMember,
    updateTeam,
    deleteMember,
    deleteTeam,
} = require("../controllers/teams");

router.get("/getMembers", getMembers);
router.post("/postMembers", postTeamMember);
router.get("/getTeams", getTeams);
router.post("/postTeam", postTeam);
router.get("/getTeamMember/:id", getTeamMembers);
router.patch("/updateMembers/:id", updateMember);
router.patch("/updateTeam/:id", updateTeam);
router.delete("/deleteTeam/:id", deleteTeam);
router.delete("/deleteMembers/:id", deleteMember);

module.exports = router;
