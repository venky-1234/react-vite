import React, { useState } from 'react';
import { Typography, Grid, Card, CardContent, Box, Button, Dialog, DialogTitle, DialogContent, TextField, DialogActions } from '@mui/material';
import WorkIcon from '@mui/icons-material/Work';
import BenefitsIcon from '@mui/icons-material/CardGiftcard';
import CareerGrowthIcon from '@mui/icons-material/TrendingUp';

const Career = () => {
  const [open, setOpen] = useState(false);
  const [selectedJob, setSelectedJob] = useState('');

  const handleOpen = (jobTitle) => {
    setSelectedJob(jobTitle);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedJob('');
  };

  return (
    <Box sx={{ padding: 4 }}>
      {/* Hero Section */}
      <Box
        sx={{
          textAlign: 'center',
          backgroundColor: '#e3f2fd',
          padding: 6,
          borderRadius: 2,
          boxShadow: 3,
          marginBottom: 4,
        }}
      >
        <Typography variant="h2" gutterBottom>
          Join Our Team <WorkIcon fontSize="large" />
        </Typography>
        <Typography variant="body1" gutterBottom>
          Discover exciting career opportunities and grow with us.
        </Typography>
        <Button
          variant="contained"
          color="primary"
          size="large"
          sx={{ marginTop: 2 }}
        >
          View Open Positions
        </Button>
      </Box>

      {/* Why Work With Us Section */}
      <Typography variant="h4" gutterBottom>
        Why Work With Us?
      </Typography>
      <Grid container spacing={4}>
        {/* Benefit 1 */}
        <Grid item xs={12} md={4}>
          <Card sx={{ textAlign: 'center', boxShadow: 3 }}>
            <CardContent>
              <BenefitsIcon fontSize="large" color="primary" />
              <Typography variant="h5" gutterBottom>
                Amazing Benefits
              </Typography>
              <Typography variant="body2">
                Enjoy health insurance, flexible schedules, and generous leave policies.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Benefit 2 */}
        <Grid item xs={12} md={4}>
          <Card sx={{ textAlign: 'center', boxShadow: 3 }}>
            <CardContent>
              <CareerGrowthIcon fontSize="large" color="secondary" />
              <Typography variant="h5" gutterBottom>
                Career Growth
              </Typography>
              <Typography variant="body2">
                Access to training programs, mentorship, and opportunities to advance your career.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Benefit 3 */}
        <Grid item xs={12} md={4}>
          <Card sx={{ textAlign: 'center', boxShadow: 3 }}>
            <CardContent>
              <WorkIcon fontSize="large" color="success" />
              <Typography variant="h5" gutterBottom>
                Inclusive Culture
              </Typography>
              <Typography variant="body2">
                Be a part of a diverse and inclusive team that values collaboration and innovation.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Job Openings Section */}
      <Typography variant="h4" gutterBottom sx={{ marginTop: 6 }}>
        Current Job Openings
      </Typography>
      <Grid container spacing={4}>
        {/* Job 1 */}
        <Grid item xs={12} md={6}>
          <Card sx={{ boxShadow: 3 }}>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Frontend Developer
              </Typography>
              <Typography variant="body2">
                Build user-friendly interfaces with React, Material-UI, and cutting-edge tools.
              </Typography>
              <Button
                variant="outlined"
                color="primary"
                sx={{ marginTop: 2 }}
                onClick={() => handleOpen('Frontend Developer')}
              >
                Apply Now
              </Button>
            </CardContent>
          </Card>
        </Grid>

        {/* Job 2 */}
        <Grid item xs={12} md={6}>
          <Card sx={{ boxShadow: 3 }}>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Backend Engineer
              </Typography>
              <Typography variant="body2">
                Design and implement robust APIs and scalable server-side solutions.
              </Typography>
              <Button
                variant="outlined"
                color="primary"
                sx={{ marginTop: 2 }}
                onClick={() => handleOpen('Backend Engineer')}
              >
                Apply Now
              </Button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Modal for Application Form */}
      <Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm">
        <DialogTitle>Apply for {selectedJob}</DialogTitle>
        <DialogContent>
          <Typography variant="body1" gutterBottom>
            Fill in the form below to apply for the {selectedJob} position.
          </Typography>
          <TextField
            fullWidth
            label="Full Name"
            margin="normal"
          />
          <TextField
            fullWidth
            label="Email Address"
            margin="normal"
            type="email"
          />
          <TextField
            fullWidth
            label="Phone Number"
            margin="normal"
          />
          <TextField
            fullWidth
            label="Cover Letter"
            margin="normal"
            multiline
            rows={4}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="secondary">
            Cancel
          </Button>
          <Button variant="contained" color="primary">
            Submit Application
          </Button>
        </DialogActions>
      </Dialog>

      {/* Footer Section */}
      <Box
        sx={{
          textAlign: 'center',
          marginTop: 8,
          padding: 4,
          backgroundColor: '#f5f5f5',
          borderRadius: 2,
          boxShadow: 3,
        }}
      >
        <Typography variant="h5" gutterBottom>
          Ready to Make a Difference?
        </Typography>
        <Typography variant="body1" gutterBottom>
          Be a part of a team that values your skills and helps you grow.
        </Typography>
        <Button
          variant="contained"
          color="secondary"
          size="large"
          sx={{ marginTop: 2 }}
        >
          Explore Careers
        </Button>
      </Box>
    </Box>
  );
};

export default Career;
