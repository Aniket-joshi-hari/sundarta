import React from "react";
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import "../css/gallery.css"
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        marginTop: '100px'
    },
    paper: {
        padding: theme.spacing(8),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));
function Gallery() {
    const classes = useStyles();
    return (
        <div className={classes.root} id="gallery">
            <Grid container spacing={3}>
                <Grid item xs={12} >
                    <div className="gallery" >GALLERY</div>
                </Grid>
                <Grid item xs={4} >
                    <img src="https://static.wixstatic.com/media/a9ff3b_50fc973e87804883bbba3d1d0ca9614d~mv2_d_2500_3760_s_4_2.jpg/v1/fill/w_273,h_411,al_c,q_80,usm_0.66_1.00_0.01/a9ff3b_50fc973e87804883bbba3d1d0ca9614d~mv2_d_2500_3760_s_4_2.webp"></img>
                </Grid>
                <Grid item xs={4} >
                    <img src="https://static.wixstatic.com/media/a9ff3b_6211a6baeb3b468db167563342ab72a9~mv2_d_2500_3516_s_4_2.jpg/v1/fill/w_292,h_411,al_c,q_80,usm_0.66_1.00_0.01/a9ff3b_6211a6baeb3b468db167563342ab72a9~mv2_d_2500_3516_s_4_2.webp"></img>
                </Grid>
                <Grid item xs={4} >
                    <img src="https://static.wixstatic.com/media/a9ff3b_cc9a75e4e2cb4a9ea1e05cd3a123de88~mv2_d_1712_2021_s_2.jpg/v1/fill/w_348,h_411,al_c,q_80,usm_0.66_1.00_0.01/a9ff3b_cc9a75e4e2cb4a9ea1e05cd3a123de88~mv2_d_1712_2021_s_2.webp"></img>
                </Grid>


            </Grid>

        </div>
    )
}
export default Gallery;