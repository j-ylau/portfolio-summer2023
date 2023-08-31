import "./App.css";
import * as React from "react";
import { Box, Grid, Typography, Stack, IconButton } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import HoverEffect from "./HoverEffect";

// icons
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";

// import custom hard coded components
import SongSuggest from "./SongSuggest";
import CoupleFriends from "./CoupleFriends";
import SGC from "./SGC";
import DigitalTwin from "./DigitalTwin";
import VLABS from "./VLABS";
import Rentful from "./Rentful";
import Happyacres from "./Happyacres";
import UXSLOFEST from "./UXSLOFEST";
import Library from "./Library";
import Iter8 from "./ITER8";
import REKLCaseStudy from "./REKLCaseStudy";
import { GitHub } from "@mui/icons-material";

function handleScroll(id) {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({
      behavior: "smooth", // For smooth scrolling
      block: "start", // Scroll the top of the element to the top of the viewport
    });
  }
}

function ViewMoreLink({ children, href }) {
  return (
    <a className="viewMoreLink" id="view-more" href={href}>
      <span className="borderB">{children}</span>
      <span className="whitespaceNowrap">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="svg"
        >
          <path
            fillRule="evenodd"
            d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
            clipRule="evenodd"
          ></path>
        </svg>
      </span>
    </a>
  );
}
function Main() {
  const isSmall = useMediaQuery("(max-width:1200px)");

  return (
    <div>
      <Box className={isSmall ? "box2" : "main"}>
        {isSmall ? (
          /* Content for mobile */
          <Box className="main" id="mobile">
            <Grid container spacing={6} p={3}>
              <Grid item className="left-small">
                <Box>
                  <Typography
                    fontSize={"3rem"}
                    id="font"
                    style={{ fontWeight: "bold" }}
                  >
                    Justin Lau
                  </Typography>
                  <Typography fontSize={"1.5rem"} id="font">
                    Software Engineer at Boeing
                  </Typography>
                  <Typography fontSize={"1rem"} pt={2} id="font">
                    <b>
                      {" "}
                      I develop cutting-edge software solutions at Boeing,
                      contributing to aerospace innovation through robust
                      development practices and innovative problem-solving.
                    </b>
                  </Typography>
                  <Box pt={4}>
                    <Stack spacing={0}>
                      <a
                        onClick={() => handleScroll("about")}
                        className="nav-link"
                      >
                        <span className="nav-indicator"></span>
                        <span className="nav-text">About</span>
                      </a>
                      <a
                        onClick={() => handleScroll("code")}
                        className="nav-link"
                      >
                        <span className="nav-indicator"></span>
                        <span className="nav-text">Coding</span>
                      </a>
                      <a
                        onClick={() => handleScroll("design")}
                        className="nav-link"
                      >
                        <span className="nav-indicator"></span>
                        <span className="nav-text">Designing</span>
                      </a>
                      <a
                        onClick={() => handleScroll("pm")}
                        className="nav-link"
                      >
                        <span className="nav-indicator"></span>
                        <span className="nav-text">Product Management</span>
                      </a>
                      <a
                        onClick={() => handleScroll("casestudy")}
                        className="nav-link"
                      >
                        <span className="nav-indicator"></span>
                        <span className="nav-text">Case Studies</span>
                      </a>
                    </Stack>
                  </Box>
                  {/* Social Icons */}
                  <Box pt={4} color="white" bgColor="white">
                    <Stack direction="row" spacing={1}>
                      <IconButton
                        rel="noopener"
                        target="_blank"
                        aria-label="linkedin"
                        href="https://www.linkedin.com/in/lau-justin/"
                        sx={{ color: "white" }}
                      >
                        <LinkedInIcon />
                      </IconButton>
                      <IconButton
                        rel="noopener"
                        target="_blank"
                        aria-label="instagram"
                        href="https://www.instagram.com/_justinlau/"
                        sx={{ color: "white" }}
                      >
                        <InstagramIcon />
                      </IconButton>
                      <IconButton
                        rel="noopener"
                        target="_blank"
                        aria-label="github"
                        href="https://github.com/j-ylau"
                        sx={{ color: "white" }}
                      >
                        <GitHubIcon />
                      </IconButton>
                    </Stack>
                  </Box>
                </Box>
              </Grid>
              <Grid item className="right-small">
                <Stack spacing={4} style={{ fontWeight: "200" }} id="about">
                  <Typography fontSize={"1rem"} className="intro" inline>
                    Originally trained as a mechanical engineer, I stumbled upon
                    an unexpected opportunity in my freshman year that sparked
                    my interest in software development. Intrigued by the world
                    of coding, I took a leap and embraced the challenges it
                    presented. Since then, my passion for software engineering
                    has grown exponentially.
                  </Typography>

                  <Typography fontSize={"1rem"} className="intro" inline>
                    As a <b>Software Engineer</b> at Boeing, I am engaged in developing
                    software solutions that drive aerospace innovation. My role
                    involves collaborating with a talented team to create
                    user-centric applications that meet the complex needs of the
                    aerospace industry.
                  </Typography>
                  <Typography fontSize={"1rem"} className="intro" inline>
                    When I'm not immersed in software development, I enjoy
                    pursuing hobbies that fuel my curiosity and creativity.
                    Whether it's tinkering with new gadgets, experimenting with
                    DIY projects, or exploring the great outdoors, I find
                    inspiration in the world around me.
                  </Typography>
                  {/* <CustomCard
      date="2019"
      />
      <Typography id='font-link'>View Full Resume</Typography> */}
                  <Box pt={4} id="code">
                    <SongSuggest />
                    <CoupleFriends />
                    <SGC />
                    <DigitalTwin />
                  </Box>
                  <ViewMoreLink href="#link-not-available-yet">
                    View More Coding Projects
                  </ViewMoreLink>
                  <Box pt={4} id="design">
                    <UXSLOFEST />
                  </Box>
                  <ViewMoreLink href="#link-not-available-yet">
                    View More UX/UI Projects
                  </ViewMoreLink>
                  <Box pt={4} id="pm">
                    <Library />
                    <Iter8 />
                  </Box>
                  <ViewMoreLink href="#link-not-available-yet">
                    View More Product Management & Design Projects
                  </ViewMoreLink>
                  <Box pt={6} id="casestudy">
                    <VLABS />
                    <Rentful />
                    <Happyacres />
                    <REKLCaseStudy />
                  </Box>
                  <ViewMoreLink href="#link-not-available-yet">
                    View More Case Studies
                  </ViewMoreLink>
                  <Box className="credits" pt={12} pb={12} width="auto">
                    I conceptually designed the layout using <b>Figma</b> and
                    translated it into code using <b>Visual Studio Code</b>.
                    This creation was built with <b>React</b> and <b>MUI</b>,
                    then deployed with <b>Surge</b>. The text is presented in
                    the <b>Almarai</b> typeface.
                  </Box>
                </Stack>
              </Grid>
            </Grid>
          </Box>
        ) : (
          /* Content for non-mobile */

          <Box className="main">
            <HoverEffect />
            <Grid container spacing={6} p={30}>
              <Grid item xs={12} md={4} className="left" mt={5} ml={10}>
                <Box>
                  <Typography
                    fontSize={"3rem"}
                    id="font"
                    style={{ fontWeight: "bold" }}
                  >
                    Justin Lau
                  </Typography>
                  <Typography fontSize={"1rem"} id="font">
                    Software Engineer at Boeing
                  </Typography>
                  <Typography fontSize={"1.1rem"} pt={2} id="font">
                    <b>
                      {" "}
                      I develop cutting-edge software solutions at Boeing,
                      contributing to aerospace innovation through robust
                      development practices and innovative problem-solving.
                    </b>
                  </Typography>
                  <Box pt={4}>
                    <Stack spacing={0}>
                      <a
                        onClick={() => handleScroll("about")}
                        className="nav-link"
                      >
                        <span className="nav-indicator"></span>
                        <span className="nav-text">About</span>
                      </a>
                      <a
                        onClick={() => handleScroll("code")}
                        className="nav-link"
                      >
                        <span className="nav-indicator"></span>
                        <span className="nav-text">Coding</span>
                      </a>
                      <a
                        onClick={() => handleScroll("design")}
                        className="nav-link"
                      >
                        <span className="nav-indicator"></span>
                        <span className="nav-text">Designing</span>
                      </a>
                      <a
                        onClick={() => handleScroll("pm")}
                        className="nav-link"
                      >
                        <span className="nav-indicator"></span>
                        <span className="nav-text">Product Management</span>
                      </a>
                      <a
                        onClick={() => handleScroll("casestudy")}
                        className="nav-link"
                      >
                        <span className="nav-indicator"></span>
                        <span className="nav-text">Case Studies</span>
                      </a>
                    </Stack>
                  </Box>
                  {/* Social Icons  for Desktop*/}
                  <Box pt={4} color="white" bgColor="white">
                    <Stack direction="row" spacing={1}>
                      <IconButton
                        rel="noopener"
                        target="_blank"
                        aria-label="linkedin"
                        href="https://www.linkedin.com/in/lau-justin/"
                        sx={{ color: "white" }}
                      >
                        <LinkedInIcon />
                      </IconButton>
                      <IconButton
                        rel="noopener"
                        target="_blank"
                        aria-label="instagram"
                        href="https://www.instagram.com/_justinlau/"
                        sx={{ color: "white" }}
                      >
                        <InstagramIcon />
                      </IconButton>
                      <IconButton
                        rel="noopener"
                        target="_blank"
                        aria-label="github"
                        href="https://github.com/j-ylau"
                        sx={{ color: "white" }}
                      >
                        <GitHubIcon />
                      </IconButton>
                    </Stack>
                  </Box>
                </Box>
              </Grid>
              <Grid
                item
                xs={12}
                md={6}
                style={{ paddingTop: "5rem" }}
                pr={10}
                className="right"
                id="scrollableSection"
              >
                <Stack spacing={4} style={{ fontWeight: "200" }} id="about">
                  <Typography fontSize={"1rem"} className="intro" inline>
                    Originally trained as a mechanical engineer, I stumbled upon
                    an unexpected opportunity in my freshman year that sparked
                    my interest in software development. Intrigued by the world
                    of coding, I took a leap and embraced the challenges it
                    presented. Since then, my passion for software engineering
                    has grown exponentially.
                  </Typography>

                  <Typography fontSize={"1rem"} className="intro" inline>
                    As a <b>Software Engineer</b> at Boeing, I am engaged in developing
                    software solutions that drive aerospace innovation. My role
                    involves collaborating with a talented team to create
                    user-centric applications that meet the complex needs of the
                    aerospace industry.
                  </Typography>
                  <Typography fontSize={"1rem"} className="intro" inline>
                    When I'm not immersed in software development, I enjoy
                    pursuing hobbies that fuel my curiosity and creativity.
                    Whether it's tinkering with new gadgets, experimenting with
                    DIY projects, or exploring the great outdoors, I find
                    inspiration in the world around me.
                  </Typography>
                  {/* <CustomCard
      date="2019"
      />
      <Typography id='font-link'>View Full Resume</Typography> */}
                  <Box pt={4} id="code">
                    <SongSuggest />
                    <CoupleFriends />
                    <SGC />
                    <DigitalTwin />
                  </Box>
                  <ViewMoreLink href="#link-not-available-yet">
                    View More Coding Projects
                  </ViewMoreLink>
                  <Box pt={4} id="design">
                    <UXSLOFEST />
                  </Box>
                  <ViewMoreLink href="#link-not-available-yet">
                    View More UX/UI Projects
                  </ViewMoreLink>
                  <Box pt={4} id="pm">
                    <Library />
                    <Iter8 />
                  </Box>
                  <ViewMoreLink href="#link-not-available-yet">
                    View More Product Management & Design Projects
                  </ViewMoreLink>

                  <Box pt={6} id="casestudy">
                    <VLABS />
                    <Rentful />
                    <Happyacres />
                    <REKLCaseStudy />
                  </Box>
                  <ViewMoreLink href="#link-not-available-yet">
                    View More Case Studies
                  </ViewMoreLink>
                  <Box className="credits" pt={12} pb={12} width="400px">
                    I conceptually designed the layout using <b>Figma</b> and
                    translated it into code using <b>Visual Studio Code</b>.
                    This creation was built with <b>React</b> and <b>MUI</b>,
                    then deployed with <b>Surge</b>. The text is presented in
                    the <b>Almarai</b> typeface.
                  </Box>
                </Stack>
              </Grid>
            </Grid>
          </Box>
        )}
      </Box>
    </div>
  );
}

export default Main;
