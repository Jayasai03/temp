// server/routes/appointments.js
const express = require('express');
const router = express.Router();

// Example route for getting appointments
router.get('/', (req, res) => {
  res.send('Appointments list');
});

// Example route for creating an appointment
router.post('/', (req, res) => {
  const { patientName, date, time } = req.body;
  // Logic to save the appointment would go here
  res.status(201).send({ message: 'Appointment created' });
});

module.exports = router;
dfhudsjf