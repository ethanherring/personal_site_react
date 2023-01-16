import React from "react";
import { Grid, Avatar, CardContent, Typography } from "@mui/material";

//Import Images
import blueOrigin from '../Blue Origin Logo.png' // relative path to image 
import textronAviation from '../Textron Aviation Logo.png' // relative path to image
import textronSystems from '../Textron Systems Logo.png' // relative path to image
import bellHelicopter from '../bellLogo.png' // relative path to image 


const Timeline = ({ jobList }) => {

    //check which company is being rendered
  const companyImagePicker = (props) => {
    const company = props.company;
    if (company === 'Blue Origin') {
      return blueOrigin
    }
    else if (company === 'Textron Aviation') {
      return textronAviation
    }
    else if (company === 'Textron Systems') {
      return textronSystems
    }
    else if (company === 'Bell Helicopter') {
      return bellHelicopter
    }
  }
  

    return (
        <div className="timeline">
            {jobList.map((job, index) => (
                <React.Fragment key={job.id}>
                    <Grid item xs={3}>
                        <CardContent>
                            <Grid container direction="row" alignItems="center" justifyContent="center">
                                <Avatar
                                    src={companyImagePicker(job)}
                                    className="avatar-img"
                                    style={{ width: "100px", height: "100px" }}
                                    variant="circle"
                                />
                                <Typography>
                                    <p>{job.company}</p>
                                    <p>{job.role}</p>
                                    <p>{job.startYear} - {job.endYear}</p>
                                    <ul>
                                        {job.accomplishments && job.accomplishments.length > 0 ? (
                                            job.accomplishments.map((accomplishment, index) => (
                                                <li key={index}>{accomplishment}</li>
                                            ))
                                        ) : (
                                            <li>Unable to Load Content</li>
                                        )}
                                    </ul>
                                </Typography>
                            </Grid>
                        </CardContent>
                    </Grid>
                    {index !== jobList.length - 1 && <div className="line" />}
                </React.Fragment>
            ))}
        </div>
    );
};

export default Timeline;
