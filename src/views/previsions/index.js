// material-ui
import MainCard from 'ui-component/cards/MainCard';
import { TextField, Button, Grid, Autocomplete, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import { useState } from 'react';
import * as XLSX from 'xlsx';

function createData(nomSite, capacite, liens, capaciteExistante, utilisation, capaciteDisponible) {
  return { nomSite, capacite, liens, capaciteExistante, utilisation, capaciteDisponible };
}

const initialRows = [
  createData('Site A', 1000, 5, 800, '80%', 200),
  createData('Site B', 2000, 10, 1500, '75%', 500),
  createData('Site C', 1500, 8, 1200, '80%', 300),
];

function PrevisionPage() {
  const [filters, setFilters] = useState({
    nomSite: '',
    capacite: '',
    liens: '',
    capaciteExistante: '',
    utilisation: '',
    capaciteDisponible: ''
  });

  const [siteA, setSiteA] = useState('');
  const [siteB, setSiteB] = useState('');

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
  };

  const handleSiteAChange = (event, value) => {
    setSiteA(value?.label || '');
  };

  const handleSiteBChange = (event, value) => {
    setSiteB(value?.label || '');
  };

  const filteredRows = initialRows.filter((row) => {
    return (
      Object.keys(filters).every((key) =>
        row[key].toString().toLowerCase().includes(filters[key].toLowerCase())
      ) &&
      (!siteA || row.nomSite === siteA || row.nomSite === siteB) &&
      (!siteB || row.nomSite === siteB || row.nomSite === siteA)
    );
  });

  const exportToExcel = () => {
    const worksheet = XLSX.utils.json_to_sheet(filteredRows);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'TableData');
    XLSX.writeFile(workbook, 'TableData.xlsx');
  };

  const siteOptions = initialRows.map((row) => ({ label: row.nomSite }));

  return (
    <MainCard>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={12} md={5.25}>
          <Autocomplete
            options={siteOptions.filter(option => option.label !== siteB)}
            value={siteOptions.find(option => option.label === siteA) || null}
            onChange={handleSiteAChange}
            getOptionLabel={(option) => option.label}
            renderInput={(params) => (
              <TextField {...params} fullWidth label="Site de départ" variant="outlined" />
            )}
          />
        </Grid>
        <Grid item xs={12} md={5.25}>
          <Autocomplete
            options={siteOptions.filter(option => option.label !== siteA)}
            value={siteOptions.find(option => option.label === siteB) || null}
            onChange={handleSiteBChange}
            getOptionLabel={(option) => option.label}
            renderInput={(params) => (
              <TextField {...params} fullWidth label="Site d’arrivé" variant="outlined" />
            )}
          />
        </Grid>
        <Grid item xs={12} md={1.5}>
          <Button
            fullWidth
            variant="contained"
            color="primary"
            sx={{ p: 1.25 }}
            endIcon={<FileDownloadIcon />}
            onClick={exportToExcel}
          >
            Exporter
          </Button>
        </Grid>
      </Grid>
      <TableContainer component={Paper} sx={{ mt: 4 }}>
        <Table sx={{ minWidth: 650, border: 1, borderColor: 'grey.400' }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center" sx={{ borderRight: 1, borderColor: 'grey.400' }}>
                <TextField
                  label="Nom Site"
                  variant="outlined"
                  name="nomSite"
                  value={filters.nomSite}
                  onChange={handleFilterChange}
                  fullWidth
                />
              </TableCell>
              <TableCell align="center" sx={{ borderRight: 1, borderColor: 'grey.400' }}>
                <TextField
                  label="Capacité Réquise (Mbps)"
                  variant="outlined"
                  name="capacite"
                  value={filters.capacite}
                  onChange={handleFilterChange}
                  fullWidth
                />
              </TableCell>
              <TableCell align="center" sx={{ borderRight: 1, borderColor: 'grey.400' }}>
                <TextField
                  label="Liens"
                  variant="outlined"
                  name="liens"
                  value={filters.liens}
                  onChange={handleFilterChange}
                  fullWidth
                />
              </TableCell>
              <TableCell align="center" sx={{ borderRight: 1, borderColor: 'grey.400' }}>
                <TextField
                  label="Capacité existante (Mbps)"
                  variant="outlined"
                  name="capaciteExistante"
                  value={filters.capaciteExistante}
                  onChange={handleFilterChange}
                  fullWidth
                />
              </TableCell>
              <TableCell align="center" sx={{ borderRight: 1, borderColor: 'grey.400' }}>
                <TextField
                  label="% Utilisation"
                  variant="outlined"
                  name="utilisation"
                  value={filters.utilisation}
                  onChange={handleFilterChange}
                  fullWidth
                />
              </TableCell>
              <TableCell align="center">
                <TextField
                  label="Capacité Disponible (Mbps)"
                  variant="outlined"
                  name="capaciteDisponible"
                  value={filters.capaciteDisponible}
                  onChange={handleFilterChange}
                  fullWidth
                />
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredRows.map((row) => (
              <TableRow key={row.nomSite}>
                <TableCell align="center" sx={{ borderRight: 1, borderColor: 'grey.400' }}>{row.nomSite}</TableCell>
                <TableCell align="center" sx={{ borderRight: 1, borderColor: 'grey.400' }}>{row.capacite}</TableCell>
                <TableCell align="center" sx={{ borderRight: 1, borderColor: 'grey.400' }}>{row.liens}</TableCell>
                <TableCell align="center" sx={{ borderRight: 1, borderColor: 'grey.400' }}>{row.capaciteExistante}</TableCell>
                <TableCell align="center" sx={{ borderRight: 1, borderColor: 'grey.400' }}>{row.utilisation}</TableCell>
                <TableCell align="center">{row.capaciteDisponible}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </MainCard>
  );
}

export default PrevisionPage;
