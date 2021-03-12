import React, { useEffect } from 'react';
import useSWR, { SWRConfig } from 'swr'
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import CardList from 'components/CardList';
import { fireDb } from 'services/fireinit'

export default function Search() {
  useEffect(() => { window.fireDB = fireDb }, [])
  const { data } = useSWR('/api/search')
  console.log(data)
  


  return (
    <Container maxWidth="md">
      <Box my={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          Search Works
        </Typography>
        <CardList cars={data} />
      </Box>
    </Container>
  );
}