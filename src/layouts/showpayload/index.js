import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import Alert from "@mui/material/Alert";
import Box from "@mui/material/Box";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import axios from "axios";
import { useEffect, useState } from "react";
import { Divider } from "@mui/material";
import { useNavigate } from "react-router-dom";
import authValue from "App";

function ShowPayload() {
  const navigate = useNavigate();
  console.log("authValue from showpayload", authValue.status);
  if (authValue.status === "true") { }
  else {
    navigate("/signin")
  }
  const [payload, setPayload] = useState([]);
  useEffect(async () => {
    axios.get("http://localhost:9001/entries/all").then((res) => {
      const threads = res;
      setPayload(threads);
    });
  }, []);

  const getPayloadData = (res) => (
    <Typography align="left" variant="caption" paragraph component="div">
      <h>.</h>
      <pre>{JSON.stringify(res.data, null, 2)}</pre>
    </Typography>
  );

  return (
    <DashboardLayout>
      <Box mt={2} mb={1}>
        <Grid container spacing={1} justifyContent="center">
          <Grid item xs={12} lg={8}>
            <Card>
              <Box p={2}>
                <Typography variant="h5">API Messages Payload</Typography>
                <Divider>-</Divider>
                <Alert color="success" dismissible="false">
                  {getPayloadData(payload)}
                </Alert>
              </Box>
              <Box>
                <Divider>-</Divider>
              </Box>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </DashboardLayout>
  );
}

export default ShowPayload;
