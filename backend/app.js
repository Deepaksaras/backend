const express = require('express');
const bodyParser = require('body-parser');
const employeeRoutes = require('./routes/employeeRoutes');
const loginRoutes = require('./routes/authRoutes');
const cors = require('cors');
const app = express();
const port = 5000;

app.use(bodyParser.json());
app.use(cors());

// Use employeeRoutes for handling employee-related requests
app.use('/', employeeRoutes);

app.use('/', loginRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});


