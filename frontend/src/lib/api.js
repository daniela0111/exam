// lib/api.js
const API_BASE_URL = 'http://localhost:3001'; // adjust the URL based on your server configuration

export async function getAllReservations() {
  const response = await fetch(`${API_BASE_URL}/api/reservations`);
  return await response.json();
}

export async function createReservation(reservationData) {
  const response = await fetch(`${API_BASE_URL}/api/reservations`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(reservationData),
  });
  return await response.json();
}

  
export async function getAllLocations() {
  const response = await fetch(`${API_BASE_URL}/hotels`);
  return await response.json();
}