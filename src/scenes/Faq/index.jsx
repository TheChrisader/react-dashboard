import { Box, styled, Typography, useTheme } from "@mui/material";
import Header from "../../components/Header";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { tokens } from "../../theme";

const FAQ = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const StyledAccordion = styled(Accordion)(() => ({
    backgroundColor: colors.blueAccent[900],
    borderRadius: "15px",
    boxShadow: "none",
    "&::before": {
      display: "none",
    },
  }));

  return (
    <Box m="20px">
      <Header title="FAQ" subtitle="Frequently Asked Questions Page" />

      <Box m="40px 0 0 0" display="flex" flexDirection="column" gap="30px">
        <StyledAccordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography color={colors.greenAccent[500]} variant="h5">
              An Important Question?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Non,
              adipisci voluptate porro quia maxime laudantium eos totam autem in
              natus amet, obcaecati vitae tempore? Odit sapiente architecto
              totam a officiis?
            </Typography>
          </AccordionDetails>
        </StyledAccordion>
        <StyledAccordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography color={colors.greenAccent[500]} variant="h5">
              An Important Question?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Non,
              adipisci voluptate porro quia maxime laudantium eos totam autem in
              natus amet, obcaecati vitae tempore? Odit sapiente architecto
              totam a officiis?
            </Typography>
          </AccordionDetails>
        </StyledAccordion>
        <StyledAccordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography color={colors.greenAccent[500]} variant="h5">
              An Important Question?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Non,
              adipisci voluptate porro quia maxime laudantium eos totam autem in
              natus amet, obcaecati vitae tempore? Odit sapiente architecto
              totam a officiis?
            </Typography>
          </AccordionDetails>
        </StyledAccordion>
        <StyledAccordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography color={colors.greenAccent[500]} variant="h5">
              An Important Question?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Non,
              adipisci voluptate porro quia maxime laudantium eos totam autem in
              natus amet, obcaecati vitae tempore? Odit sapiente architecto
              totam a officiis?
            </Typography>
          </AccordionDetails>
        </StyledAccordion>
      </Box>
    </Box>
  );
};

export default FAQ;
