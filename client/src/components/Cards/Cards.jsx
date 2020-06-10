import React from "react";
import { Card, CardContent, Typography, Grid } from "@material-ui/core";
import CountUp from 'react-countup';
import styles from "./Cards.module.css";
import cx from 'classnames';





const Cards = ({data:{confirmed, recovered, deaths, lastUpdate}}) => {
if (!confirmed){
return 'Loading...'
}


const activeCases = confirmed.value - deaths.value - recovered.value;


  return (
    <div className={styles.container}>
      <Grid container spacing={3} justify="center">
        <Grid item component={Card} xs={12} md={2} className={cx(styles.card, styles.infected)}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>Infected</Typography>
            <Typography variant="h5">
                <CountUp start={0} end={confirmed.value} duration={2.5} separator="," />
            </Typography>
            <Typography variant="body2">Total cases of COVID-19</Typography>
            <br />
            <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
          </CardContent>
        </Grid>
        <Grid item component={Card} xs={12} md={2} className={cx(styles.card, styles.recovered)}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>Recoverd</Typography>
            <Typography variant="h5">
                <CountUp start={0} end={recovered.value} duration={2.5} separator="," />
            </Typography>
            <Typography variant="body2">Recoveries cases from COVID-19</Typography>
            <br />
            <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
          </CardContent>
        </Grid>
        <Grid item component={Card} xs={12} md={2} className={cx(styles.card, styles.active)}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>Active now</Typography>
            <Typography variant="h5">
                <CountUp start={0} end={activeCases} duration={2.5} separator="," />
            </Typography>
            <Typography variant="body2">A number of cases right now</Typography>
            <br />
            <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
          </CardContent>
        </Grid>
        <Grid item component={Card} xs={12} md={2} className={cx(styles.card, styles.deaths)}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>Deaths</Typography>
            <Typography variant="h5">
                <CountUp start={0} end={deaths.value} duration={2.5} separator="," />
            </Typography>
            <Typography variant="body2">Deaths caused from COVID-19</Typography>
            <br />
            <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
          </CardContent>
        </Grid>
      </Grid>
    </div>
  );
};

export default Cards;
