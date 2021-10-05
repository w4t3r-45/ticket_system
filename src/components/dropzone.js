import { useDropzone } from "react-dropzone";
import { Box, Typography } from "@mui/material";
import { FileUploadOutlined } from "@mui/icons-material";
import { useTheme } from "@mui/material/styles";

export default function Dropzone(props) {
  const theme = useTheme();
  // size validator for
  const {
    acceptedFiles,
    fileRejections,
    getRootProps,
    getInputProps
  } = useDropzone({
    accept: "image/jpeg,image/png,video/mp4,application/pdf"
    // validator: sizeValidator
  });

  // file size calculation

  const returnFileSize = (number) => {
    if (number < 1024) {
      return number + " bytes";
    } else if (number >= 1024 && number < 1048576) {
      return (number / 1024).toFixed(1) + " KB";
    } else if (number >= 1048576 && number < 1073741824) {
      return (number / 1048576).toFixed(1) + " MB";
    } else if (number > 1073741824) {
      return (number / 1073741824).toFixed(1) + " GB";
    }
  };

  const files = acceptedFiles.map((file) => (
    <li key={file.path}>
      {file.path} - {returnFileSize(file.size)}
    </li>
  ));

  // rejected files
  const rejectedFiles = fileRejections.length;

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
        <p>{rejectedFiles}</p>
      </Box>
    </>
  );
}
