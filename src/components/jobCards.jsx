import { React, useState } from 'react';
import { Card, Grid, CardContent, 
    CardMedia, Button, Typography, Zoom, Avatar } from '@mui/material';

import jobList from '../pageData/jobList.json';


//Import Images
import ethan from '../ethan.jpg' // relative path to image
import blueOrigin from '../Blue Origin Logo.png' // relative path to image 
import textronAviation from '../Textron Aviation Logo.png' // relative path to image
import textronSystems from '../Textron Systems Logo.png' // relative path to image
import bellHelicopter from '../bellLogo.png' // relative path to image    

const JobCards = () => {


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


 //Material UI Expand Cards State Eval
 const [expanded, setExpanded] = useState(false);
 const expandCards = () => {
     setExpanded(!expanded);
 } 


return (
    <>
    {jobList.map((job) => (
          <Zoom in={expanded}>
            <Grid item md={3} sm={6} xs={8} key={job.id}>
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
                    <b><p>{job.company}</p>
                    <p>{job.role}</p></b>
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
          </Zoom>
        ))}
    </>
);
}

export default JobCards;