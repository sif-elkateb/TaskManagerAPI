/*
start 
initialize global variables
*/

const express = require("express");

const morgan = require("morgan");

require('dotenv').config();

const app = express();

const connectDB = require("./db/connect");

const tasksRouter = require("./routes/tasks");

const notFoundMiddleware=require('./middleware/not-found');

const errorHandlerMiddleware=require('./middleware/errorhandler');
const port = process.env.PORT || 3000;

/*
end intialize global variables
*/

/*
routes ---> 
app.get('/api/v1/tasks')  get all the tasks 
app.post('/api/v1/tasks') add one tasks
app.get('/api/v1/tasks/:id') get info about a single task
app.patch('/api/v1/tasks/:id) update the the specific task
app.delete('/api/v1/tasks/:id') delete the specific task
*/

/*
start setting up middleware
*/

app.use(morgan("tiny"));

app.use(express.static("public"));

app.use(express.json());

app.use(
  express.urlencoded({
    extended: false,
  })
);
/*
end setting up middleware 
*/
/*
start setting up routes
*/


app.use("/api/v1/tasks", tasksRouter);
app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

/*
end setting up routes
*/

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URl);
    app.listen(port, () => {
      console.log(`started listening at port ${port}`);
    });
  } catch (err) {
    console.log(err);
  }
};

start();
