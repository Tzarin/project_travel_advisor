import React from 'react';
import GoogleMapReact from 'google-map-react';
import { Paper, Typography, useMediaQuery } from '@material-ui/core';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import Rating from '@material-ui/lab/Rating';

import useStyles from './styles.js';

const Map = () => {
     const isMobile = useMediaQuery('(min-width:600px)');
     const classes = useStyles();

     const coordinates = {lat: 0, lng: 0};
    return (
       <div className={classes.mapContainer}>
           <GoogleMapReact 
              bootstrapURLKeys={{key: 'AIzaSyCUXcd0sBP1Idp6tdG-W4K5EYw8pmp-bxI'}}
              defaultCenter={coordinates}
              center={coordinates}
              defaultZoom={14}
              margin={[50, 50, 50, 50]}
              options={''}
              onChange={''}
              

              onChildClick={''}
           >

           </GoogleMapReact>
       </div>
    );
}

export default Map;