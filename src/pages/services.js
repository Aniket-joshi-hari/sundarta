import React from "react";
import "../css/services.css";
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Breakfast from "../assets/images/hair-cut.png";
import Garden from "../assets/images/facial.png";
import Pool from "../assets/images/facial1.png";
import Wifi from "../assets/images/anti-aging.png";
import Housekeeping from "../assets/images/massage.png";
import Dining from "../assets/images/makeup.png";
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
function Services() {
    const classes = useStyles();
    return (
        <div className="services" id="services">
            <div className={classes.root}>
                <Grid container spacing={3}>
                    <Grid item xs={12} className="services-heading">
                        Our Services
                    </Grid>
                    <Grid item xs={12} md={4} className="services-para">
                        <span>
                            <img src={Breakfast} style={{ color: 'red', width: "50px", height: '50px' }}></img>
                            <p className="service-head">Hair Care</p>
                            <p>I'm a paragraph. Click here to add your own text and edit me.</p>
                        </span>
                    </Grid>
                    <Grid item xs={12} md={4} className="services-para">
                        <span>
                            <img src={Garden} style={{ color: 'red', width: "50px", height: '50px' }}></img>
                            <p className="service-head">Facial Treatments</p>
                            <p>I'm a paragraph. Click here to add your own text and edit me.</p>
                        </span>
                    </Grid>
                    <Grid item xs={12} md={4} className="services-para">
                        <span>
                            <img src={Pool} style={{ color: 'red', width: "50px", height: '50px' }}></img>
                            <p className="service-head">Advanced Facial Treatments</p>
                            <p>I'm a paragraph. Click here to add your own text and edit me.</p>
                        </span>
                        <br />
                        <br />
                    </Grid>
                    <Grid item xs={12} md={4} className="services-para">
                        <span>
                            <img src={Wifi} style={{ color: 'red', width: "50px", height: '50px' }}></img>
                            <p className="service-head">Anti-Aging Treatments</p>
                            <p>I'm a paragraph. Click here to add your own text and edit me.</p>
                        </span>
                    </Grid>
                    <Grid item xs={12} md={4} className="services-para">
                        <span>
                            <img src={Housekeeping} style={{ color: 'red', width: "50px", height: '50px' }}></img>
                            <p className="service-head">Body Massage</p>
                            <p>I'm a paragraph. Click here to add your own text and edit me.</p>
                        </span>
                    </Grid>
                    <Grid item xs={12} md={4} className="services-para">
                        <span>
                            <img src={Dining} style={{ color: 'red', width: "50px", height: '50px' }}></img>
                            <p className="service-head">Makeup Services</p>
                            <p>I'm a paragraph. Click here to add your own text and edit me.</p>
                        </span>
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}
export default Services;