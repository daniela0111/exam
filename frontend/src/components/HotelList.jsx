import React from 'react';
import BookingForm from './components/BookingForm';

const ParentComponent = () => {
    const hotelLocations = [
      'Aarhus',
      'Borupgaard',
      'Bygholm Park',
    ];
  
    return <BookingForm locations={hotelLocations} />;
  };
  