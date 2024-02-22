import express from 'express'
import cors from 'cors'

const app =express()


app.use(cors({
    origin:process.env.CORS_ORIGIN,
    credentials:true,
}  
))

app.use(express.json({limit:"20kb"}))


// Routes
import employeeRoutes from './routes/employee.routes.js';
import ratingRoutes from './routes/rating.routes.js';
import timesheetRoutes from './routes/timesheet.routes.js';


app.use('/employees', employeeRoutes);
app.use('/ratings', ratingRoutes);
app.use('/timesheets', timesheetRoutes);



export {app}