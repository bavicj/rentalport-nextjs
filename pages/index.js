import React from 'react';
import {
  Container,
  Paper,
  Grid,
  Card,
  CardContent,
  Typography,
  Button,
  CardActions,
  CardMedia,
  CardActionArea,
} from '@material-ui/core';
import Image from 'next/image';
import Link from 'components/Link';
import { makeStyles } from '@material-ui/core/styles';
import { format } from 'date-fns';

const useStyles = makeStyles((theme) => ({
  mainFeaturedPost: {
    position: 'relative',
    backgroundColor: theme.palette.grey[800],
    color: theme.palette.common.white,
    marginBottom: theme.spacing(4),
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: 'rgba(0,0,0,.3)',
  },
  mainFeaturedPostContent: {
    position: 'relative',
    padding: theme.spacing(3),
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(6),
      paddingRight: 0,
    },
  },
  media: {
    height: 320,
  },
  detailButton: {
    marginLeft: 'auto',
    marginRight: 5,
  },
  blogContainer: {
    padding: theme.spacing(2),
  },
}));

export default function Index({ blogs }) {

  const classes = useStyles();
  return (
    <div>
      <Paper className={classes.mainFeaturedPost}
             style={{ backgroundImage: `url(/images/frontpage-jar_small.jpeg)` }}>
        {/* Increase the priority of the hero background image */}
        {<img style={{ display: 'none' }} src='/images/frontpage-jar_small.jpeg'
              alt='Cover image'/>}
        <div className={classes.overlay}/>
        <Grid container>
          <Grid item md={6}>
            <div className={classes.mainFeaturedPostContent}>
              {/*<Typography component="h1" variant="h3" color="inherit" gutterBottom>*/}
              {/*  {post.title}*/}
              {/*</Typography>*/}
              {/*<Typography variant="h5" color="inherit" paragraph>*/}
              {/*  {post.description}*/}
              {/*</Typography>*/}
              {/*<Link variant="subtitle1" href="#">*/}
              {/*  {post.linkText}*/}
              {/*</Link>*/}
            </div>
          </Grid>
        </Grid>
      </Paper>
      {/*<Image src='/images/frontpage-jar_small.jpeg' alt='Cover image' layout='fill' className={classes.image} objectFit='cover' objectPosition='center'/>*/}
      <Container className={classes.blogContainer}>
        <Grid container spacing={2}>
          {blogs && blogs?.items.slice(0, 6).map(blog =>
            <Grid item md={6} lg={4} xs={12} key={blog.id}>
              <Card className={classes.root}>
                <CardActionArea>
                  <Link href={`/blog/${blog.id}/${blog.title_url}`}>
                    <CardMedia
                      className={classes.media}
                      image={blog.image_small}
                      title="Contemplative Reptile"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        {blog.title_head}
                      </Typography>
                      <Typography variant="body2" color="textSecondary"
                                  component="p"
                                  dangerouslySetInnerHTML={{ __html: blog.introtext_small }}>
                      </Typography>
                    </CardContent>
                  </Link>
                </CardActionArea>
                <CardActions disableSpacing>
                  <Typography variant={'overline'}>{format(
                    new Date(blog.publiched_from),
                    'dd.MM.yyyy HH:mm')}</Typography>
                  <Link href={`/blog/${blog.id}/${blog.title_url}`}
                        className={classes.detailButton}>
                    <Button size="small" color="primary">
                      Čítaj viac
                    </Button>
                  </Link>

                </CardActions>
              </Card>
            </Grid>,
          )}
          <Grid item>
            <Button variant="contained" color="primary">Blog / Všetky
              články</Button>
          </Grid>
        </Grid>
      </Container>
    </div>

  );
}

export async function getStaticProps(context) {
  const res = await fetch(
    `https://server.rentalport.com/index.php?page=154&ver=2&lang=sk`);
  const blogs = await res.json();
  // console.log('blogs', blogs)
  return {
    props: {
      blogs,
    },
    revalidate: 3600,
  };
}