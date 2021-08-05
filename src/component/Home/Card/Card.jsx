import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
        margin: '50px'
    },
});

export default function ImgMediaCard() {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    alt="Contemplative Reptile"
                    height="200"
                    image="https://fainaidea.com/wp-content/uploads/2017/02/Sine-belie_krossovki_Nike_Roshe_Run_08Z_b14730.jpg"
                    title="Contemplative Reptile"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        TilekAir
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Удобные и практичные ботинки на каждый день отлично дополнят гардероб в городском стиле. Качественный пошив, натуральная кожа, мягкий задник, не натирающий пятку, подарят комфорт в каждом шаге. Эту модель можно сочетать с классическими брюками и жакетом, курточкой или коротким пальто.
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Typography size="small">
                    300$
                </Typography>
                <Button size="small" color="primary">
                    Детали
                </Button>
            </CardActions>
        </Card>


    );
}
