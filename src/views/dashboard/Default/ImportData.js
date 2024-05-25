import PropTypes from 'prop-types';
import { useState } from 'react';
import { Grid, Typography, Box, TextField, IconButton } from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import SkeletonImportData from 'ui-component/cards/Skeleton/TotalGrowthBarChart';
import MainCard from 'ui-component/cards/MainCard';
import { gridSpacing } from 'store/constant';
import SaveAsIcon from '@mui/icons-material/SaveAs';

const ImportData = ({ isLoading }) => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState('');

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      const fileType = selectedFile.type;
      if (fileType === 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' || fileType === 'application/vnd.ms-excel') {
        setFile(selectedFile);
        setError('');
      } else {
        setFile(null);
        setError('Please select a valid Excel file.');
      }
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (file) {
      // Add file handling logic here (e.g., upload to server)
      console.log('File to be submitted:', file);
    } else {
      setError('Please select a file to upload.');
    }
  };

  return (
    <>
      {isLoading ? (
        <SkeletonImportData />
      ) : (
        <MainCard>
          <Grid container spacing={gridSpacing} justifyContent="center">
            <Grid item xs={12} md={8} lg={10} spacing={2}>
              <Box component="form" onSubmit={handleSubmit} sx={{ maxWidth: 1500, textAlign: 'center', mx: 'auto' }}>
                <Typography variant="h4" gutterBottom>
                  Bienvenue dans notre application dédiée à l&apos;automatisation de la prévision du trafic des liens à faisceaux hertziens et au dimensionnement en vue d&apos;anticiper sur les extensions capacitaires du réseau de transmission d&apos;Orange Cameroun.
                </Typography>
                <Grid container spacing={2} alignItems="center" justifyContent="center">
                  <Grid item xs={12} md={8} lg={11}>
                    <TextField
                      variant="outlined"
                      fullWidth
                      margin="normal"
                      InputProps={{
                        startAdornment: (
                          <IconButton component="label">
                            <CloudUploadIcon />
                            <input
                              type="file"
                              accept=".xlsx,.xls"
                              hidden
                              onChange={handleFileChange}
                            />
                          </IconButton>
                        ),
                        endAdornment: (
                          <IconButton type="submit">
                            <SaveAsIcon />
                          </IconButton>
                        ),
                        readOnly: true,
                      }}
                      value={file ? file.name : ''}
                      error={Boolean(error)}
                      helperText={error}
                    />
                  </Grid>
                </Grid>
                {file && (
                  <Box mt={2}>
                    <Typography variant="body2">File Size: {(file.size / 1024).toFixed(2)} KB</Typography>
                    <Typography variant="body2">File Type: {file.type}</Typography>
                  </Box>
                )}
              </Box>
            </Grid>
          </Grid>
        </MainCard>
      )}
    </>
  );
};

ImportData.propTypes = {
  isLoading: PropTypes.bool
};

export default ImportData;
