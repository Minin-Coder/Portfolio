import React from "react";
import { Box, Typography, Grid, Card, CardContent } from "@mui/material";
import CountUp from "react-countup";

import aboutImg from "../../assets/aboutImage.jpg";

const AboutMe = () => {
  return (
    <Box sx={{ textAlign: "center", mt: 4, px: 0, backgroundColor: "#007BFF" }}>
      <Grid container spacing={4} alignItems="center" justifyContent="center">
        <Grid item xs={12} md={6} textAlign="left">
          <Typography variant="h3" fontWeight="bold" color="#121212">
            <span style={{ color: "#007BFF" }}>About</span> Me
          </Typography>
          <Typography variant="body1" color="text.secondary" mt={2}>
            Passionate front-end developer and designer, crafting modern,
            responsive, and visually appealing web applications. Skilled in
            **HTML5, CSS3, Bootstrap5, JavaScript, React.js, Next.js,** and
            **CMS development** with **Webflow and Framer**. Dedicated to
            delivering seamless user experiences with clean, efficient, and
            scalable code.
          </Typography>
        </Grid>
        <Grid item xs={12} md={6} sx={{ paddingTop: "0px !important" }}>
          <img src={aboutImg} alt="About Me" style={{ width: "100%" }} />
        </Grid>
      </Grid>
      <Grid
        container
        spacing={4}
        mt={6}
        alignItems="center"
        justifyContent="center"
      >
        <Grid item xs={12} md={6} textAlign="left">
          <Typography variant="h4" fontWeight="bold" color="#121212" mb={2}>
            Personal Details
          </Typography>
          <Typography variant="body1">
            <b>Name:</b> Farasat Ali
          </Typography>
          <Typography variant="body1">
            <b>Age:</b> 25
          </Typography>
          <Typography variant="body1">
            <b>Date of Birth:</b> 10th Jan 1999
          </Typography>
          <Typography variant="body1">
            <b>Education:</b> Bachelor's in Computer Science
          </Typography>
          <Typography variant="body1">
            <b>Experience:</b> 4+ Years in Front-end Development
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <Grid container spacing={2} justifyContent="center">
            {[
              { label: "Happy Clients", value: 50 },
              { label: "Total Projects", value: 100 },
              { label: "Years of Experience", value: 4 },
              { label: "Awards", value: 5 },
            ].map((item, index) => (
              <Grid item xs={6} key={index}>
                <Card
                  sx={{
                    textAlign: "center",
                    p: 2,
                    borderRadius: 2,
                    boxShadow: 3,
                  }}
                >
                  <CardContent>
                    <Typography variant="h4" fontWeight="bold" color="#007BFF">
                      <CountUp start={0} end={item.value} duration={2.5} />
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                      {item.label}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AboutMe;
