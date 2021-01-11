import React from "react";
import "../css/services.css";
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(8),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));
function Todo() {
    const classes = useStyles();
    return (
        <div className="services" id="see">
            <div className={classes.root}>
                <Grid container spacing={3}>
                    <Grid item xs={12} style={{ lineHeight: "1" }} className="services-heading">
                        THINGS TO DO
                    </Grid>
                    <Grid item xs={12} md={4} className="services-para">
                        <span>
                            <p className="service-head">Wineries Tour</p>
                            <p>I'm a paragraph. Click here to add your own text and edit me.</p>
                        </span>
                    </Grid>
                    <Grid item xs={12} md={4} className="services-para">
                        <span>

                            <p className="service-head">Cultural Sites</p>
                            <p>I'm a paragraph. Click here to add your own text and edit me.</p>
                        </span>
                    </Grid>
                    <Grid item xs={12} md={4} className="services-para">
                        <span>

                            <p className="service-head">Market Tour</p>
                            <p>I'm a paragraph. Click here to add your own text and edit me.</p>
                        </span>
                    </Grid>
                    <Grid item xs={12} md={4} className="services-para">
                        <span>

                            <p className="service-head">Leisure Activities</p>
                            <p>I'm a paragraph. Click here to add your own text and edit me.</p>
                        </span>
                    </Grid>
                    <Grid item xs={12} md={4} className="services-para">
                        <span>

                            <p className="service-head">Birds Safari</p>
                            <p>I'm a paragraph. Click here to add your own text and edit me.</p>
                        </span>
                    </Grid>
                    <Grid item xs={12} md={4} className="services-para">
                        <span>

                            <p className="service-head">Horse Riding </p>
                            <p>I'm a paragraph. Click here to add your own text and edit me.</p>
                        </span>
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}
export default Todo;