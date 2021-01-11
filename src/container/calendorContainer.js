import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "../css/calendar.css"
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
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

export default function CalendarContainer() {

    const [date, setdate] = React.useState(new Date());

    const handleCheckInDateChange = (date) => {
        setdate(date);
    };
    const handleCheckOutDateChange = (date) => {
        setdate(date);
    };
    return (
        <div className="calendarContainer">
            <Grid container spacing={3}>
                <Grid item xs={12} md={3}>
                    <label>Check in</label>     <br />
                    <DatePicker
                        className="datepicker"
                        selected={date}
                        //when day is clicked
                        onChange={handleCheckInDateChange} //only when value has changed

                        dateFormat="Pp"
                    />
                </Grid>
                <Grid item xs={12} md={3}>
                    <label>Check Out</label>     <br />
                    <DatePicker
                        className="datepicker"
                        selected={date}
                        //when day is clicked
                        onChange={handleCheckOutDateChange} //only when value has changed

                        dateFormat="Pp"
                    />
                </Grid>
                <Grid item xs={6} md={2}>
                    <label>Adults</label>     <br />
                    <input style={{ padding: '8px', width: '80%' }} type="number" defaultValue="1" />
                </Grid>
                <Grid item xs={6} md={2}>
                    <label>Kids</label><br />
                    <input style={{ padding: '8px', width: '80%' }} type="number" defaultValue="1" />
                </Grid>
                <Grid item xs={12} md={2}>
                    <br />
                    <button className="search">Search</button>
                </Grid>
            </Grid>

        </div >
    )
}