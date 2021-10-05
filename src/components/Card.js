import { Box, Typography, Paper } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const IconStyle = { width: 50, height: 50, color: "#fff" };

export default function Card(props) {
  // mui theme
  const theme = useTheme();

  const boxStyle = {
    minWidth: 230,
    height: 80,
    ml: 2,
    display: "flex",
    borderRadius: theme.shape.borderRadius
  };

  const { Icon } = props;

  return (
    <>
      <Box component={Paper} sx={boxStyle}>
        {/* left box */}
        <Box sx={{ width: 60, position: "relative" }}>
          <Box
            component={Paper}
            display="flex"
            justifyContent="center"
            alignItems="center"
            sx={{
              position: "absolute",
              bgcolor: props.color, //we get color from props
              top: -25,
              left: 15,
              width: 90,
              height: 60,
              borderRadius: theme.shape.borderRadius
            }}
          >
            <Icon sx={{ ...IconStyle }} /> {/*** we get icon from props */}
          </Box>
        </Box>
        {/* right box */}
        <Box
          display="flex"
          justifyContent="flex-end"
          sx={{
            flexGrow: 1,
            pr: 1,
            pt: 1,
            borderRadius: theme.shape.borderRadius
          }}
        >
          <Box>
            <Typography
              variant="subtitle2"
              fontWeight="bold"
              sx={{ color: theme.palette.text.disabled }}
            >
              {props.title}
            </Typography>

            <Typography variant="subtitle1" fontWeight="bold">
              {props.value}
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
}
