const router=require("express").Router();
const axios=require("axios");
const { Router } = require("express");
const dotenv= require('dotenv')
dotenv.config();

const accessToken = `${process.env.PUBLIC_ACCESS_TOKEN}`;

//api for contribution Graph
router.get('/contributionGraph/:username', async (req, res) => {
    const { username } = req.params;
  
    try {
      const response = await axios.get(`https://api.github.com/users/${username}/events`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
  
      const contributionGraphData = response.data.filter((e)=>e.type==='PushEvent'); //we are only showing pushevents data here which actually contains commit!
      res.json(contributionGraphData);
    } catch (error) {
      res.status(500).json({ error: 'Error fetching contribution graph data' });
    }
  });

  //api for repository Image
  router.get('/repositoryImage/:username', async (req, res) => {
    const { username } = req.params;
  
    try {
      const response = await axios.get(`https://api.github.com/users/${username}/repos`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
  
      const repositories = response.data.map(repo => {
        return {
          name: repo.name,
          avatar_url: repo.owner.avatar_url,
        };
      });
  
      res.json(repositories);
    } catch (error) {
      res.status(500).json({ error: 'Error fetching repository data' });
    }
  });
  



  module.exports=router;