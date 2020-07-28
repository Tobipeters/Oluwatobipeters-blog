import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Bimg from '../../assets/images/avatar-1.jpg'


const useStyles = makeStyles({
  root: {
    maxWidth: 300,
    borderRadius:0,
    marginBottom:'30px',

    '@media screen and (max-width: 768px)': {
      maxWidth:'100%',
      margin:'5px 0px'
    }
  },
  media: {
    height: 200,
  },
  textTitle: {
    color: '#15171a',
    lineHeight: 1.15,
    fontWeight: 700,
    fontSize: '1.10rem',
  },
  smallText: {
    fontSize:'0.7em',
    color:'rgba(0, 0, 0, 0.54)',
    fontWeight: 500,
    lineHeight: 1.43,
    letterSpacing: '0.01071em',
  }
});

export default function MediaCard() {
  const classes = useStyles();  

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={Bimg}
          title="Contemplative Reptile"
        />
        <CardContent>
          {/* <Typography className={classes.textTitle} gutterBottom variant="h5" component="h2">
            Lizard
          </Typography> */}
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions style={{ padding:'16px', justifyContent:'space-between'}}>
        <span className={classes.smallText}>43 mins ago</span>
        <span className={classes.smallText}>2 mins</span>
      </CardActions>
    </Card>
  );
}
