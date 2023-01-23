import React from 'react';
import skillList from '../pageData/skillList.json';
import { Card, Grid, CardActions, CardContent, CardMedia, Button, Typography, Slider, Avatar} from '@mui/material';


//Import Images
import dockerImage from '../dockerLogo.png' // relative path to image 
import dataImage from '../dataLogo.png' // relative path to image
import codingLogo from '../codingLogo.png' // relative path to image  



const SkillCards = () => {


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
  

  return (
        <>
          {skillList.map((skill) => (
              <Grid item md={3} sm={6} xs={8} key={skill.id}>
                  <CardContent>
                      <Grid container direction="row"
                          alignItems="center"
                          justifyContent="center"
                          className="card-background-color"
                      >
                          <CardMedia
                              component='img'
                              src={skillImagePicker(skill)}
                              style={{ height: "150px", objectFit: 'contain' }}
                              title="Skill Logo"
                          />
                          <Typography>
                              <b>
                                  <p>{skill.skill}</p>
                              </b>
                              <p>{skill.role}</p>
                              <ul>
                                  {skill.projects && skill.projects.length > 0
                                      ? skill.projects.map((project, index) => (
                                          <li key={index}>{project}</li>
                                      ))
                                      : <li>Unable to Load Content</li>
                                  }
                              </ul>
                          </Typography>
                      </Grid>
                  </CardContent>
              </Grid>
          ))}
        </>
  
  );
}

export default SkillCards;