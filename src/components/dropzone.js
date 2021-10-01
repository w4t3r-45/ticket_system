import { useDropzone } from "react-dropzone";
import { Box, Typography } from "@mui/material";
import { FileUploadOutlined } from "@mui/icons-material";
import { useTheme } from "@mui/material/styles";

export default function Dropzone(props) {
  const theme = useTheme();
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone();

  const files = acceptedFiles.map((file) => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ));

  return (
    <>
      <Box
        sx={{
          border: `1px dashed ${theme.palette.primary.light}`,
          mt: 1,
          mb: 1,
          borderRadius: theme.shape.borderRadius,
          cursor: "pointer"
        }}
        className="container"
      >
        <Box
          {...getRootProps({ className: "dropzone" })}
          display="flex"
          alignItems="center"
          justifyContent="center"
          flexDirection="column"
          sx={{ width: "100%", height: "100%", padding: 1 }}
        >
          <input {...getInputProps()} />
          <Typography variant="h4" fontSize="1rem" color="text.secondary">
            Drag 'n' drop some files here, or click to select files
          </Typography>
          <FileUploadOutlined
            sx={{ width: 50, height: 50, color: theme.palette.text.secondary }}
          />
        </Box>
      </Box>
      <Box sx={{ mb: 2 }}>
        <Typography variant="subtitle2">Selected Files :</Typography>
        {files}
      </Box>
    </>
  );
}
