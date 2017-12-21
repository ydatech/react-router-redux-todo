import React, { Component } from 'react';

//material-ui components
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';

class NotFound extends Component {

    render() {

        return (
            <Grid item xs={12} sm={6}>
                <Typography align="center" type="display3">Page Not Found!</Typography>
            </Grid>
        );
    }
}

export default NotFound;

