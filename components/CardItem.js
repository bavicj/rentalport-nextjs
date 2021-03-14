import React from 'react';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Image from 'next/image'

const useStyles = makeStyles({
  root: {
  },
  media: {
    height: 140,
  },
});

export default function CardDetail({ car }) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
      <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="140"
          image={car.car_img}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography  variant="h5" component="h2">
            {car.car_name}
          </Typography>
          <Typography gutterBottom variant="body2" color="textSecondary" component="p">
          {car.car_desc}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {car.pickup_place_gps_text}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Reserve
        </Button>
      </CardActions>
    </Card>
  )
}