import React from 'react';
import jobList from '../pageData/jobList.json';
import { Card, Grid, CardActions, CardContent, CardMedia, Button, Typography, Slider, Avatar} from '@mui/material';

//Import Images
import ethan from '../ethan.jpg' // relative path to image
import blueOrigin from '../Blue Origin Logo.png' // relative path to image 
import textronAviation from '../Textron Aviation Logo.png' // relative path to image
import textronSystems from '../Textron Systems Logo.png' // relative path to image
import bellHelicopter from '../bellLogo.png' // relative path to image    



const Companies = () => {


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
  

  return (
    <div className="center-container">
      <Grid container lg={12} md={12} spacing={2}>
        <Grid item xs={12}>
          <CardContent>
            <Grid container direction="row" alignItems="center" justifyContent="center" >
              <Avatar
                src={ethan}
                style={{ width: "100px", height: "100px", marginRight: "15px" }}
                variant="circle"
              />
              <Typography>
                <h1>Ethan Herring</h1>
                <a href="https://www.linkedin.com/in/ethan-herring-a00448132/">
                  <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="" style={{width: "25px", height: "25px", paddingRight: "10px"}}/>
                </a>
                <a href="https://github.com/ethanherring">
                  <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="" style={{width: "25px", height: "25px", paddingRight: "10px"}}/>
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
            <Grid container direction="row" alignItems="center" justifyContent="center" >
              <Typography>
                <h2>📊 Work Experience</h2>
              </Typography>
            </Grid>
          </CardContent>
        </Grid>
        {jobList.map((job) => (
          <Grid item md={3} sm={6} key={job.id}>
            <CardContent>
              <Grid container direction="row" 
              alignItems="center" 
              justifyContent="center"
              className="card-background-color"
            >
                <CardMedia
                  component='img'
                  src={companyImagePicker(job)}
                  style={{ height: "150px", objectFit: 'contain' }}
                  title="Company Logo"
                />
                <Typography>
                  <p>{job.company}</p>
                  <p>{job.role}</p>
                  <ul>
                    {job.accomplishments && job.accomplishments.length > 0 
                      ? job.accomplishments.map((accomplishment, index) => (
                        <li key={index}>{accomplishment}</li>
                      ))
                      : <li>Unable to Load Content</li>
                    }
                  </ul>
                </Typography>
              </Grid>
            </CardContent>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default Companies;