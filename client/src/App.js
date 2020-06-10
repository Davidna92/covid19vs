import React from 'react';
import { ThemeProvider } from "@material-ui/styles";
import {Cards, Chart, CountryP} from './components';
import styles from './App.module.css';
import {fetchApi} from './api/index';
import {createMuiTheme} from '@material-ui/core'

import corona from './images/image.png'


const theme = createMuiTheme({
    palette: {
      type: "dark"
    }
  });
  


class App extends React.Component {
   state = {
     data: {},
     country: '',
   }
   
   
    async componentDidMount () {
const fetchedData = await fetchApi();

this.setState({ data: fetchedData})
    }

    handleCountryChange = async (country) => {
        const fetchedData = await fetchApi(country);
console.log(fetchedData)
this.setState({ data: fetchedData, country: country });

    }

    render() {
        const { data, country} = this.state;
        return (
            <ThemeProvider theme={theme}>
            <div className={styles.container}>
                <img className={styles.image} src={corona} alt="coronaV"/>
                <Cards data={data}/>
                <CountryP handleCountryChange={this.handleCountryChange}/>
                <Chart data={data} country={country} />
            </div>
            <footer>&copy; Copyright 2020 David Nahum</footer>
            </ThemeProvider>
            
        )
    }
}

export default App;