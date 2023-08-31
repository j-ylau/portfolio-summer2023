import React from "react";
import "./CustomCard.css";
import "./App.css";
import { Box, Grid, Typography, Stack, Link, Chip } from "@mui/material";
import logo from "../src/assets/sgc.png";

function CustomCard() {
  const chipsData = [
    { label: "React", color: "info" },
    { label: "AWS", color: "info" },
    { label: "MUI", color: "info" },
    { label: "Python", color: "info" },
    { label: "JSX", color: "info" },

    // Add more chip data objects as needed
  ];

  return (
    <React.Fragment className="card-2-container">
      <Grid container pb={6}>
        <Grid item xs={4}>
          <div style={{ width: "90%", height: "90%" }}>
            <img
              src={logo}
              alt="Logo"
              style={{
                width: "90%",
                height: "auto",
                aspectRatio: "16 / 9",
                borderRadius: "5px",
                padding: "",
              }}
            />
          </div>
        </Grid>

        <Grid item xs={8}>
          <Stack direction="column">
            <Typography
              noWrap
              sx={{ width: "100%", textAlign: "left", p: 0, m: 0 }}
              variant="h5"
              fontWeight="700"
            >
              <Link
                href="https://sgc-redux.cacyber.net/"
                target="_blank"
                rel="noopener"
                id="font"
                sx={{
                  display: "inline-block",
                  textDecoration: "none",
                  color: "inherit",
                  p: 0,
                  m: 0,
                  "&:hover": {
                    transition: "all .3s",
                    color: "#82FECD",
                  },
                }}
              >
                SGC
              </Link>
            </Typography>
            <Typography pt={1} id="font">
              Space Grand Challenge (SGC) is an interactive website where students can
              engage in a thrilling cyber security challenge, fostering their
              skills and knowledge in a gamified learning environment
            </Typography>
            <Box pt={2}>
              <Stack
                spacing={2}
                direction={{ xs: "column", sm: "row" }}
                style={{ flexWrap: "wrap" }}
              >
                {chipsData.map((chip, index) => (
                  <Chip
                    id="font"
className="chip"
                    key={index}
                    label={chip.label}
                    variant="filled"
                    color={chip.color}
                    style={{
                      color: "#82FECD",
                      backgroundColor: "#336257",
                      justifyContent: "left",
                      width: "min-content",
                      fontSize: "1rem",
                      fontWeight: "bold",
                      margin: "5px",
                    }}
                  />
                ))}
              </Stack>
            </Box>
          </Stack>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default CustomCard;
