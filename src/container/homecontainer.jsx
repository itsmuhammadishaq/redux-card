import { connect } from "react-redux";

import { AddTOFromData } from "../service/actions/action";

import Home from "../component/home";
import { Card, CardContent, Typography, Grid } from "@mui/material";

const App = ({ formData, AddtoCardHandle }) => {
  return (
    <div style={{ padding: "2rem" }}>
      <Home AddtoCardHandle={AddtoCardHandle} />

      <Grid container spacing={2} style={{ marginTop: "2rem" }}>
        {formData.map((item, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card>
              <CardContent>
                <Typography variant="h6">Name: {item.name}</Typography>
                <Typography variant="body2">Age: {item.age}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

const mapStateToProps = (state) => ({
  formData: state.formItem.FormData,
});

const mapDispatchToProps = (dispatch) => ({
  AddtoCardHandle: (data) => dispatch(AddTOFromData(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
