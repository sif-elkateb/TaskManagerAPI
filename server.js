/*
start 
initialize global variables
*/
const express =require('express');

const app=express();

const port =3000;

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

app.get('/hello',(req,res)=>{
    res.send('<h1>welcome to our task manager app</h1>');
})

app.listen(port,()=>{
    console.log(`started listening at port ${port}`);
})


