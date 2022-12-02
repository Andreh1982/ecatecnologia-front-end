import axios from "axios";
import { useEffect, useState } from "react";

import { Divider } from "@mui/material";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function ListAllEntries() {
  const [fuckingData, setData] = useState([]);
  useEffect(async () => {
    axios.get("http://localhost:9001/entries/all").then((res) => {
      const threads = res.data;
      setData(threads);
    });
  });

  return (
    <DashboardLayout>
      <Box mt={2} mb={1}>
        <Grid container spacing={1} justifyContent="center">
          <Grid item xs={12} lg={8}>
            <Card>
              <Box p={3}>
                <Typography variant="h5">JSON to Table Test</Typography>
                <Divider>-</Divider>
                <TableContainer component={Paper}>
                  <Table sx={{ minWidth: 100 }} arial-label="simple table">
                    <TableHead>
                      <TableRow>
                        <TableCell padding="normal" align="center">
                          Name
                        </TableCell>
                        <TableCell align="center">Entry ID</TableCell>
                        <TableCell align="center">Created At</TableCell>
                        <TableCell align="center">Updated At</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {fuckingData.map((row) => (
                        <TableRow
                          key={row.name}
                          sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                        >
                          <TableCell component="th" scope="row">
                            {row.name}
                          </TableCell>
                          <TableCell align="center">{row.entryId}</TableCell>
                          <TableCell align="center">{row.createdAt}</TableCell>
                          <TableCell align="center">{row.updatedAt}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </Box>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </DashboardLayout>
  );
}

export default ListAllEntries;
