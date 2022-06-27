/*
start 
initialize global variables
*/
const connectDB = require("./db/connect");
const express = require("express");

const morgan = require("morgan");

require('dotenv').config();

const app = express();

const tasksRouter = require("./routes/tasks");

const port = 3000;

/*
end intialize global variables
*/

/*
routes ---> t
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

app.get("/hello", (req, res) => {
  res.send("<h1>welcome to our task manager app</h1>");
});

app.use("/api/v1/tasks", tasksRouter);

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
