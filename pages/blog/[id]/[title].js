import { Card, CardContent, Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flex: 1,
    padding: theme.spacing(2),
  },
}))
export default function Blog({ blog }) {

  const classes = useStyles();

  return (
    <Container className={classes.root}>
      <Card>
        <CardContent>
        <div dangerouslySetInnerHTML={{ __html: blog.content }}></div>
        </CardContent>
      </Card>
    </Container>
  );
}

export async function getStaticPaths() {
  console.log('detail tu2');
  const res = await fetch(
    `https://server.rentalport.com/index.php?page=154&ver=2&lang=sk`);

  const blogs = await res.json();

  // Get the paths we want to pre-render based on posts
  const paths = blogs.items.map(blog => `/blog/${blog.id}/${blog.title_url}`);

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  console.log('detail tu');
  // Fetch necessary data for the blog post using params.id
  const res = await fetch(
    `https://server.rentalport.com/index.php?page=154&view=item&id_content=${params.id}&lang=sk`);
  const blog = await res.json();

  // Pass post data to the page via props
  return { props: { blog } };

}