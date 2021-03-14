import React, { useState } from 'react';
import useSWR from 'swr'

import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Card from '@material-ui/core/Card';

import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';

import { makeStyles } from '@material-ui/core/styles';
import { ffetcher} from 'services/api'
import { format } from 'date-fns'
import {
  DateTimePicker,
} from '@material-ui/pickers';

const useStyles = makeStyles({
  root: {
    marginBottom: '1em'
  },
  media: {
    height: 140,
  },
  inputWrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  autoComplete: {
    minWidth: '400px',
  },
  datePicker: {
    marginTop: '22px',
  }

});

const getOptionLabel = option => option.city_name

export default function SearchBar({ onChange }) {
  const classes = useStyles();
  const [query, setQuery] = useState('')
  const [dateFrom, setDateFrom] = useState(new Date());
  const [dateTo, setDateTo] = useState(new Date());
  const { data: options } = useSWR('api/places', ffetcher, { initialData: [] })
  // console.log('options', formatISO9075(dateTo, 'yyyy-MM-ddThh:mm'))

  const handleChange = () => onChange({
    pickup: query, 
    pickup_date: format(dateFrom, 'yyyy-MM-dd'),
    pickup_hour: format(dateFrom, 'hh'),
    pickup_minutes: format(dateFrom, 'mm'),
    dropoff_date: format(dateTo, 'yyyy-MM-dd'),
    dropoff_hour: format(dateFrom, 'hh'),
    dropoff_minutes: format(dateFrom, 'mm'),
  })

  return (
    <Card className={classes.root} >
      <CardContent>
      <div className={classes.inputWrapper}>
        <Autocomplete
          
          className={classes.autoComplete}

          autoComplete
          renderInput={(params) => (
            <TextField {...params} label='autoComplete' margin='normal' />
          )}
          options={options}
          getOptionLabel={getOptionLabel}
          onChange={(_, value) => setQuery(value.id_city)}
        />
        <DateTimePicker className={classes.datePicker} value={dateFrom} onChange={setDateFrom} />
        <DateTimePicker className={classes.datePicker} value={dateTo} onChange={setDateTo} />
        <Button variant="contained" color="secondary" size='small' onClick={handleChange} disabled={query} >Fire</Button>
        </div>
      </CardContent>

    </Card>
  )
}