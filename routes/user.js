const router = require("express").Router();

router.get("/test", (req,res) => {
    res.send("User test done");
});

router.post("/posttest", (req,res)=>{
    const username = req.body.username;
    res.send("Username is "+ username);
})

module.exports = router