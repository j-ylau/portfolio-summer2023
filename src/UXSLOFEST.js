import React from "react";
import "./CustomCard.css";
import "./App.css";
import { Box, Grid, Typography, Stack, Link, Chip } from "@mui/material";
import logo from "../src/assets/uxslofest.png";

function CustomCard() {
  const chipsData = [
    { label: "Figma", color: "info" },


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
                href="https://www.figma.com/proto/tR8vzmoGhuDbp0mYBiw2xt/uxslofest-2023?page-id=30%3A224&node-id=88%3A556&viewport=267%2C178%2C0.06&scaling=min-zoom&starting-point-node-id=88%3A556"
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
                UXSLOFEST 2023
              </Link>
            </Typography>
            <Typography pt={1} id="font">
              A design-a-thon hosted by Cal Poly UXFest. We placed as finalists,
              and this was my first design-a-thon!
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
