import React, { useState } from 'react';
import jobList from '../pageData/jobList.json';
import skillList from '../pageData/skillList.json';
import { Card, Grid, CardContent, 
  CardMedia, Button, Typography, Zoom, Avatar } from '@mui/material';
import JobCards from './jobCards';


//Import Images
import ethan from '../ethan.jpg' // relative path to image
import blueOrigin from '../Blue Origin Logo.png' // relative path to image 
import textronAviation from '../Textron Aviation Logo.png' // relative path to image
import textronSystems from '../Textron Systems Logo.png' // relative path to image
import bellHelicopter from '../bellLogo.png' // relative path to image    
import ScrollToContent from './ScrollToContent';
//Import Skill Images
import dockerImage from '../dockerLogo.png'; // relative path to image 
import dataImage from '../dataLogo.png'; // relative path to image
import codingLogo from '../codingLogo.png'; // relative path to image  
import SkillCards from './skillCards';



const Companies = (props) => {
  const [currentPage, setCurrentPage] = useState('');
  

  //check which company is being rendered
  const companyImagePicker = (props) => {
    const company = props.company;
    if (company === "Blue Origin ('22 - Present)") {
      return blueOrigin
    }
    else if (company === "Textron Aviation ('22)") {
      return textronAviation
    }
    else if (company === "Textron Systems ('21)") {
      return textronSystems
    }
    else if (company === "Bell Helicopter ('20 - '21)") {
      return bellHelicopter
    }
  }

  //check which skill is being rendered
  const skillImagePicker = (props) => {
    const skill = props.skill;

    if (skill === 'Docker') {
      return dockerImage
    }
    else if (skill === 'Data') {
        return dataImage
    }
    else if (skill === 'Development') {
        return codingLogo
    }
  }

  //Material UI Expand Cards State Eval
  const [expanded, setExpanded] = useState(false);
  const expandCards = () => {
      setExpanded(!expanded);
  } 

  //Check Which Cards to render based on button clicked
  const setCardContent = (card) => {
    setCurrentPage(card);
  }
  

  return (
    <div className="center-container">
      <Grid container lg={12} md={12} spacing={2} justifyContent="center">
        <Grid item lg={4} md={4} xs={8}>
          <CardContent>
            <Grid container direction="row" 
            alignItems="center" 
            justifyContent="center"
            className="card-background-color">
              <Avatar
                src={ethan}
                style={{ width: "100px", height: "100px", marginRight: "15px" }}
                variant="circle"
              />
              <Typography>
                <h1>Ethan Herring</h1>
                <p>Supply Chain Business Intelligence Analyst III @ Blue Origin 🚀 | Passionate About Translating Large Data into Actionable Insights</p>
                <a href="https://www.linkedin.com/in/ethan-herring-a00448132/" target="_blank" rel="noreferrer">
                  <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="" style={{width: "25px", height: "25px", paddingRight: "10px"}}/>
                </a>
                <a href="https://github.com/ethanherring" target="_blank" rel="noreferrer">
                  <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="" style={{width: "25px", height: "25px", paddingRight: "10px"}}/>
                </a>
                <a href="mailto: ethanlherring@gmail.com" target="_blank" rel="noreferrer">
                  <img src="https://cdn-icons-png.flaticon.com/512/561/561127.png" alt="" style={{width: "25px", height: "25px", paddingRight: "10px"}}/>
                </a>
              </Typography>
            </Grid>
          </CardContent>
        </Grid>
        <Grid container direction="row" alignItems="center" justifyContent="center">
          <Grid item xs={8}
          style={{borderBottom: "solid 1px grey"}}
          ></Grid>
        </Grid>
        <Grid item xs={12}
        style={{height: '100px'}}
        >
        <CardContent>
            <Grid container 
              direction="row" 
              alignItems="center" 
              justifyContent="center"
              style={{color: "white", padding: "20px"}} 
              //className="card-background-color"
              >
              <Grid item md={3} sm={6} xs={3}>
                <Typography>
                  <Button 
                  variant="contained"
                  onClick={() => {expandCards(); setCardContent('Job');}}
                  style={{backgroundColor:'#65696a',color:'#fff',fontSize:'14px',padding:'10px'}}
                  >📊 Professional Background</Button>
                </Typography>
              </Grid>
              <Grid item md={3} sm={6} xs={3}>
                <Typography>
                  <Button 
                  variant="contained"
                  onClick={() => {expandCards(); setCardContent('Skill');}}
                  style={{backgroundColor:'#65696a',color:'#fff',fontSize:'14px',padding:'10px'}}
                  >🛠️ Skills</Button>
                </Typography>
              </Grid>
              <Grid item md={3} sm={6} xs={3}>
                <Typography>
                  <Button 
                  variant="contained"
                  style={{backgroundColor:'#65696a',color:'#fff',fontSize:'14px',padding:'10px'}}
                  >Blog Posts</Button>
                </Typography>
              </Grid>
            </Grid>
          </CardContent>
          
        </Grid>
        {currentPage === 'Job' && expanded && <JobCards />}
        {currentPage === 'Skill' && expanded && <SkillCards />}
        {/* {currentPage === 'Blog' && expanded && <BlogCards />} */}
      </Grid>
    </div>
  );
}

export default Companies;