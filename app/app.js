const express = require("express");
const { UserModel } = require("./models/schema");
const cors =require("cors");
const bcryptjs = require('bcryptjs');
const numSaltRounds = 8;
require("./db/conn");
const app = express();
app.use(cors());
app.use(express.json());
app.listen(3000, () => {
  console.log("Server started");
});
app.post("/userRegister", async (req, res) => {
  const {teamname, leadername,email, password,contact,player1,player2,player3} = req.body;

  try {
 
    const hashedPassword = await bcryptjs.hash(password, numSaltRounds);
       await UserModel.create({
      teamname, leadername,email,password:hashedPassword,contact,player1,player2,player3
    });

    res
      .status(201)
      .json({ message: "User created successfully", status: "Success"});
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(500).json({ message: "Failed to create user", status: "Fail" });
  }
});
app.get("/getuserRegister", async (req, res) => {
  try {
    const users = await UserModel.find().sort({ score: -1 });
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch the users" });
  }
});
app.get("/getspecificuser/:id",async(req,res)=>{
  const id=req.params.id;
  
  try {
    const users=await UserModel.findOne({_id:id})
    res.status(200).json(users);
    
  } catch (error) {
    res.status(500).json({message:"Failed to fetch the user"});
  }
})


app.post("/login",async(req,res)=>{
  const{email,password}=req.body;
  try {
    const user= await UserModel.findOne({email});
    if(!user)
    {
      return res.status(500).json({message:"User not found"});
    }
    const correctpass=bcryptjs.compare(password, user.password);
  if(correctpass)
  {
      res.status(200).json(user._id);
  }
  else{
     res.status(401).json({message:"Invalid Credentials"});
  }
  } catch (error) {
    res.status(500).json({message:"User not authenticated"});
  }
 
})

app.patch("/updateScore/:id", async (req, res) => {
  const id=req.params.id;
  const {score} = req.body;
  try {
    const date = new Date(); 
    const hours = ('0' + date.getHours()).slice(-2); 
    const minutes = ('0' + date.getMinutes()).slice(-2); 
    const timestamp = `${hours}:${minutes}`; 
    await UserModel.findOneAndUpdate(
      { _id: id },
      { $set: { score: score, lastUpdated: timestamp},$push:{scorearr:score}}, 
      { new: true }
    );
    res.status(200).json({ message: "Score updated successfully" });
  } catch (error) {
    res.status(500).json({ message: "Failed to update the score" });
  }
});


app.get("/selectTopUsers", async (req, res) => {
  try {
    const topUsers = await UserModel.find().sort({ score: -1 }).limit(4);

    if (topUsers.length > 0) {
      for (const user of topUsers) {
        user.is_Selected = true;
        await user.save();
      }

      res
        .status(200)
        .json( topUsers);
    } else {
      res.status(404).json({ message: "No top users found" });
    }
  } catch (error) {
    console.error("Error selecting top users:", error);
    res.status(500).json({ message: "Failed to select top users" });
  }
});
app.get("/nextRound", async (req, res) => {
  try {
    const nextRoundCandidates = await UserModel.find({
      is_Selected: true,
    }).sort({ score: -1 });

    if (nextRoundCandidates.length > 0) {
      for (const user of nextRoundCandidates) {
        user.score = "0";
        await user.save();
      }
    }

    res
      .status(200)
      .json({
        message: "Users reset successfully",
        NextRoundCandidates: nextRoundCandidates,
      });
  } catch (error) {
    console.error("Error resetting users for next round:", error);
    res.status(500).json({ message: "Failed to reset users for next round" });
  }
});

app.patch("/nextroundScore", async (req, res) => {
  const { id, score } = req.body;
  try {
    const date = new Date(); 
    const hours = ('0' + date.getHours()).slice(-2); 
    const minutes = ('0' + date.getMinutes()).slice(-2); 
    const timestamp = `${hours}:${minutes}`; 
    await UserModel.findOneAndUpdate(
      { _id: id },
      { $set: { score: score, lastUpdated: timestamp },$push:{scorearr:score} }, 
      { new: true }
    );
    res.status(200).json({ message: "Score updated successfully" });
  } catch (error) {
    res.status(500).json({ message: "Failed to update the score" });
  }
});

app.get("/getnextround", async (req, res) => {
  try {
    const users = await UserModel.find({ is_Selected: true }).sort({
      score: -1,
    });
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json(error);
  }
});
// app.get("/winner", async (req, res) => {
//   try {
//     const winner = await UserModel.findOne({ is_Selected: true }).sort({
//       score: -1,
//     });

//     if (winner) {
//       res.status(200).json({ message: "Congratulations!", winner: winner });
//     } else {
//       res.status(404).json({ message: "No winner found" });
//     }
//   } catch (error) {
//     console.error("Error getting the winner:", error);
//     res.status(500).json({ message: "Failed to get the winner" });
//   }
// });
