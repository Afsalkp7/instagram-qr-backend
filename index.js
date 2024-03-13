const express = require('express')
const app = express()
const port = 3100;
const axios = require('axios');
const dotenv = require("dotenv")
dotenv.config();

app.get("/:userId",async(req,res)=>{
    const username = req.params.userId
    const options = {
        method: 'GET',
        url: process.env.InstaUrl,
        params: {username: username},
        headers: {
          'X-RapidAPI-Key': process.env.XRapidAPIKey,
          'X-RapidAPI-Host': process.env.XRapidAPIHost
        }
      };
      
      try {
          const response = await axios.request(options);
          const data = response.data;
          res.json({data})
      } catch (error) {
          console.error(error);
      }
})


app.listen(port,()=>console.log(`server running on ${port}`))