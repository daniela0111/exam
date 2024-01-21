// BookingForm.js
import React, { useState, useEffect } from 'react'
import Navbar from './Navbar'
import { readableDate } from '../utils/date'
import BookingFormStyle from './BookingFormStyle.module.css'
import {
  createReservation,
  getAllReservations,
  getAllLocations,
} from '../lib/api.js'

const BookingForm = (props, neco) => {
  const today = new Date()
  const tomorrow = new Date()
  tomorrow.setDate(today.getDate() + 1)

  const [locations, setLocations] = useState([])
  const backgroundImage = '/hotel.jpg'

  const [formData, setFormData] = useState({
    hotelId: '',
    rooms: 1,
    checkin: readableDate(today),
    checkout: readableDate(tomorrow),
  })

  const [reservations, setReservations] = useState([])

  const [selectedHotel, setSelectedHotel] = useState(null)

  useEffect(() => {
    async function fetchReservations() {
      try {
        const data = await getAllReservations()
        setReservations(data)
      } catch (error) {
        console.error('Error fetching reservations:', error)
        // Handle the error as needed
      }
    }

    fetchReservations()
  }, []) // Fetch reservations on component mount

  useEffect(() => {
    async function fetchLocations() {
      try {
        const data = await getAllLocations()
        console.log('DDAT hotels', data)
        setLocations(data)
      } catch (error) {
        console.error('Error fetching locations:', error)
      }
    }

    fetchLocations()
  }, [])

  const handleSubmit = async e => {
    e.preventDefault()
    console.log('formdata', formData, e)
    try {
      // Send reservation data to the server
      const createdReservation = await createReservation(formData)

      // Handle the created reservation as needed
      console.log('Reservation created:', createdReservation)

      // Update the list of reservations
      const updatedReservations = await getAllReservations()
      setReservations(updatedReservations)
    } catch (error) {
      console.error('Error creating reservation:', error)
      // Handle the error as needed
    }
  }

  const handleInputChange = e => {
    const { name, value } = e.target
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }))

    // Update the selected hotel when the "name" field changes
    if (name === 'name') {
      setSelectedHotel(value)
    }
  }
  const handleSelectHotel = e => {
    const { name, value } = e.target
    setSelectedHotel(locations.find(l => l.id === value))
    setFormData(prevData => ({
      ...prevData,
      hotelId: value,
    }))
  }

  return (
    <div
      className={`${BookingFormStyle['booking-form-container']} ${BookingFormStyle['background-image']}`}
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <h2>Check in at Comwell and discover Denmark</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Hotel:</label>
        <select
          id="name"
          name="name"
          value={formData.name}
          onChange={handleSelectHotel}
          required
        >
          <option value="" disabled>
            Select a hotel
          </option>
          {Array.isArray(locations) &&
            locations.map(location => (
              <option key={location.id} value={location.id}>
                {location.name}
              </option>
            ))}
        </select>

        {/* Conditionally render the location drawer based on the selected hotel */}
        {selectedHotel ? <div>{selectedHotel.description}</div> : null}

        <label htmlFor="rooms">Rooms:</label>
        <input
          type="number"
          id="rooms"
          name="rooms"
          max={selectedHotel?.roomsAmount ?? null}
          value={formData.rooms}
          onChange={handleInputChange}
          required
        />

        <label htmlFor="checkin">Check In:</label>
        <input
          type="date"
          min={readableDate(today)}
          id="checkin"
          name="checkin"
          value={formData.checkin}
          onChange={handleInputChange}
          required
        />

        <label htmlFor="checkout">Check Out:</label>
        <input
          type="date"
          min={readableDate(tomorrow)}
          id="checkout"
          name="checkout"
          value={formData.checkout}
          onChange={handleInputChange}
          required
        />

        <button type="submit">Submit</button>

        {/* Display reservations */}
        <div>
          <h3>Reservations:</h3>
          {Array.isArray(reservations) &&
            reservations.map(reservation => (
              <div key={reservation.id}>
                {/* Display reservation details */}
              </div>
            ))}
        </div>
      </form>
    </div>
  )
}

export default BookingForm
