const express = require('express')
const app = express()
const port = 3100;
const axios = require('axios');

app.get("/:userId",async(req,res)=>{
    const username = req.params.userId
    const options = {
        method: 'GET',
        url: 'https://instagram130.p.rapidapi.com/account-info',
        params: {username: username},
        headers: {
          'X-RapidAPI-Key': '8a34b61003msh89301ff5cc6221dp17fc38jsn018a4deb8ce8',
          'X-RapidAPI-Host': 'instagram130.p.rapidapi.com'
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