import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import "../css/form.css"
const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: "100%",

        },
    },
    style2: {
        margin: theme.spacing(1),
        width: "100 %"
    }
}));

export default function TextFieldSizes() {
    const classes = useStyles();

    return (
        <div className="form-wrapper" id="contact">
            <div className="form-inner">
                <form className={classes.root} noValidate autoComplete="off">
                    <Grid container spacing={3}>
                        <Grid item xs={12} className="contact">
                            CONTACT US
                        </Grid>
                        <Grid item xs={6}>
                            <TextField label="Name" id="filled-size-normal" defaultValue={""} variant="filled" />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField label="Email" id="filled-size-normal" defaultValue={""} variant="filled" />
                        </Grid>


                        <Grid item xs={12}>
                            <TextField label="Subject" id="filled-size-normal" defaultValue={""} variant="filled" />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField label="Message" id="outlined-multiline-static" rows={4} multiline defaultValue={""} variant="filled" />
                        </Grid>
                        <Grid item xs={12} className="contact">
                            <button className="button-style">Send</button>
                        </Grid>

                    </Grid>

                </form >
            </div>
        </div>
    );
}