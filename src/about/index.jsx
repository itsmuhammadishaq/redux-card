import React from "react";
import { useSelector } from "react-redux";
import { Card, CardContent, Typography, Grid } from "@mui/material";

const About = () => {
  const formData = useSelector((state) => state.formItem.FormData);

  return (
    <div style={{ padding: "2rem" }}>
      <h2>Submitted Cards</h2>
      <Grid container spacing={2}>
        {formData.map((item, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card>
              <CardContent>
                <Typography variant="h6">Name: {item.name}</Typography>
                <Typography variant="body2">Age: {item.age}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default About;
