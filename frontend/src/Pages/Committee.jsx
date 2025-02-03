import React from "react";
import { Card, CardContent, Typography, Grid } from "@mui/material";

const committeeMembers = [
  { name: "Dr. John Doe",profile:'', title: "Chief Patron", theme: "#FFEBEE" },
  { name: "Ms. Jane Smith",profile:'', title: "Patrons", theme: "#FFF3E0" },
  { name: "Prof. Alex Brown",profile:'', title: "Conference Chairs", theme: "#FFF9C4" },
  { name: "Dr. Emily Green",profile:'', title: "Program Chairs", theme: "#E8F5E9" },
  { name: "Mr. Chris White",profile:'', title: "Technical Program Chairs", theme: "#E3F2FD" },
  { name: "Dr. Olivia Black",profile:'', title: "Finance Chairs", theme: "#E1F5FE" },
  { name: "Prof. Daniel Gray",profile:'', title: "Publication Chairs", theme: "#E0F7FA" },
  { name: "Ms. Sophia Blue",profile:'', title: "Sponsorship Chairs", theme: "#F1F8E9" },
  { name: "Dr. Liam Red",profile:'', title: "Publicity and Media Chairs", theme: "#FCE4EC" },
];

const Committee= () => {
  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <Typography variant="h4" gutterBottom>
        Committee Members
      </Typography>
      <Grid container spacing={3} justifyContent="center">
        {committeeMembers.map((member, index) => (
          <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
            <Card
              sx={{
                backgroundColor: member.theme,
                borderRadius: "12px",
                boxShadow: 3,
              }}
            >
              <CardContent>
                <Typography variant="h6" fontWeight="bold">
                  {member.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {member.title}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Committee;
