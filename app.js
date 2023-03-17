const express = require('express')
const app = express()
const port = 7000
const connectDB = require('./server/config/db');
var bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');

//db connection
connectDB();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))
//app.use(cors({ credentials: true, origin: 'http://localhost:3000' }));

app.use('/static', express.static(path.join(__dirname, './server/public/employee')))

// Routes

const EmployeeRoutes = require('./server/routes/web/employee-routes/employee-route');
const HolidayRoutes = require('./server/routes/web/holiday-routes/holiday-routes');
const EmployeeAttendanceRoutes = require('./server/routes/web/employee-attendance/employee-attendance-route');
const DepartmentsRoutes = require('./server/routes/web/department-routes/department-route');
const DesignationRoutes = require('./server/routes/web/designation-routes/designation-route');
const LeavesRoutes = require ('./server/routes/web/leave-routes/leave-route')

app.use('/employee', EmployeeRoutes)
app.use('/holiday', HolidayRoutes)
app.use('/attendance', EmployeeAttendanceRoutes)
app.use('/department', DepartmentsRoutes)
app.use('/designation', DesignationRoutes)
app.use('/leave', LeavesRoutes)

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})