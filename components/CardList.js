import React, { Fragment } from 'react';
import CardItem from './CardItem'
import Grid from '@material-ui/core/Grid';

export default function CardDetail({ cars = [] }) {
  return (
    <Grid container spacing={2}>
      { cars.map((car, i) => (
        <Grid item key={i} xs={4}>
          <CardItem car={car} />
        </Grid>
      ))}
    </Grid>
  )
}