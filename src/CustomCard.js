import React from "react";
import "./CustomCard.css";
import { Box, Grid, Typography, Stack, Link, Chip } from "@mui/material";

function CustomCard(date) {
  return (
    <React.Fragment className='card-container'>
      <Grid container>
        <Grid item xs={2}>
          {date}
        </Grid>
        <Grid item xs={10}>
          <Stack direction="column">
            <Typography>lead engineer</Typography>
            <Typography>lead engineer</Typography>
            <Typography>lead engineer</Typography>
            <Typography>
              The href attribute is required for an anchor to be keyboard
              accessible. Provide a valid, navigable address as the href value.
              If you cannot provide an href, but still need the element to
              resemble a link, use a button and change it with appropriate
              styles. Learn more:
              https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/anchor-is-valid.md
              jsx-a11y/ancho
            </Typography>
          </Stack>
        <Box pt={2}>
        <Chip 
          label='hello' 
          variant="outlined"
          sx={{color:'white'}}
          >

          </Chip>
        </Box>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default CustomCard;
