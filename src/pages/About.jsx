import React from 'react';
import { Typography, Grid, Card, CardContent, Box } from '@mui/material';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <Box sx={{ padding: 4 }}>
      {/* Hero Section with Animation */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Typography variant="h2" gutterBottom align="center">
          About Us
        </Typography>
        <Typography variant="body1" align="center" sx={{ marginBottom: 4 }}>
          We are a passionate team dedicated to delivering excellence and creating impactful experiences.
        </Typography>
      </motion.div>

      {/* Mission, Vision, Values Section */}
      <Grid container spacing={4}>
        {/* Mission */}
        <Grid item xs={12} md={4}>
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <Card sx={{ boxShadow: 3 }}>
              <CardContent>
                <Typography variant="h5" gutterBottom>
                  Our Mission
                </Typography>
                <Typography variant="body2">
                  To inspire and empower people through innovation and creativity, making the world a better place.
                </Typography>
              </CardContent>
            </Card>
          </motion.div>
        </Grid>

        {/* Vision */}
        <Grid item xs={12} md={4}>
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <Card sx={{ boxShadow: 3 }}>
              <CardContent>
                <Typography variant="h5" gutterBottom>
                  Our Vision
                </Typography>
                <Typography variant="body2">
                  To be a global leader in delivering innovative solutions that transform lives and create lasting value.
                </Typography>
              </CardContent>
            </Card>
          </motion.div>
        </Grid>

        {/* Values */}
        <Grid item xs={12} md={4}>
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <Card sx={{ boxShadow: 3 }}>
              <CardContent>
                <Typography variant="h5" gutterBottom>
                  Our Values
                </Typography>
                <Typography variant="body2">
                  Integrity, innovation, collaboration, and a commitment to making a difference.
                </Typography>
              </CardContent>
            </Card>
          </motion.div>
        </Grid>
      </Grid>

      {/* Animation for Call to Action */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        style={{ textAlign: 'center', marginTop: 40 }}
      >
        <Typography variant="h4" gutterBottom>
          Join Our Journey
        </Typography>
        <Typography variant="body1" sx={{ marginBottom: 2 }}>
          We’re constantly striving to make a difference. Be a part of our mission!
        </Typography>
      </motion.div>
    </Box>
  );
};

export default About;
