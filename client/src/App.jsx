import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css';
import ReactCalendarHeatmap from 'react-calendar-heatmap';
import 'react-calendar-heatmap/dist/styles.css';

const App = () => {
  const[username, setUsername] = useState('');
  const[contriData, setContriData] = useState([]);
  const[repoData, setRepoData] = useState([]);


  const fetchContri = async() => {
    try{
      const res = await axios.get(`http://localhost:3000/api/contributionGraph/${username}`);
      setContriData(res.data);
    }catch(e){
      console.log(e)
    }
  }
  

  const formattedData = contriData.map(data => ({
    date: new Date(data.created_at), 
    payload: data.payload
  }));

  const fetchRepoData = async() => {
    try{
      const res = await axios.get(`http://localhost:3000/api/repositoryImage/${username}`);
      setRepoData(res.data);
    }catch(e){
      console.log(e);
    }
  }
  
  const handleSubmit = () => {
    fetchRepoData();
    fetchContri();
  }

  return (
    <div style={{width:"100vw", display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", gap:"10px", overflowX:"hidden", marginTop:"20px"}}>
      <div>
      <label htmlFor="" > Enter UserName of the person: </label>
      <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />  
      <button style={{backgroundColor:"#AFE1AF",marginLeft:"5px",height:"fit-content"}} onClick={handleSubmit}>Enter</button>
      </div>
      <div className="contribution-graph" style={{width:"100%", display:"flex", flexDirection:"column", alignItems:"center"}}>
      <h2 >Contribution Graph</h2>
      <div style={{width:"50%"}}>
      {formattedData.length>0&& <ReactCalendarHeatmap
        
        startDate={new Date('2023-1-1')} 
        endDate={new Date()} 
        values={formattedData} 
        classForValue={(value) => {
          if (!value || !value.payload || !value.payload) {
            return 'color-empty';
          } else {
            return   value.payload?.commits?.length>0 ?'color-scale-high' :'color-empty';
          }
        }}
        
        showWeekdayLabels={true}
      />}

      </div>
      
    </div>
    <div>
      <h2>Repositories:</h2>
      <div style={{display:"flex", justifyContent:"center", alignItems:"center", flexDirection:"column", gap:"10px"}}>
        {
          repoData.map((e) => (
            <div key={e.name} style={{display:"flex", flexDirection:"row", gap:"10px", justifyContent:"center"}}>
              <img src={e.avatar_url} alt="error" style={{width:"10%", borderRadius:"50px"}} />
              <span style={{marginTop:"10px"}}>{e.name}</span>
            </div>
          ))
        }
      </div>
    </div>
    </div>
  )
}

export default App