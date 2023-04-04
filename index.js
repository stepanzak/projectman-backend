const express = require('express')
const cors = require('cors')
const app = express()
app.use('/', express.static('../projectman-frontend/dist'))
app.use(express.json())
app.use(cors())

//mongoose for interacting with mongodb
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/projectman', { useNewUrlParser: true, family: 4 })
  .then(() => console.log('Connected to MongoDB!'))
  .catch(error => console.error('Could not connect to MongoDB... ', error));


const expenseSchema = new mongoose.Schema({
  name: String,
  task: String,
  cost: Number,
  date: Date,
  description: String
})

const workSchema = new mongoose.Schema({
  dateStart: Date,
  dateEnd: Date,
  worker: String,
  task: String,
  isFixedPrize: Boolean, //if not, it's hourly rate
  cost: Number,
  description: String
})

const customerSchema = new mongoose.Schema({
  name: String,
})

const projectSchema = new mongoose.Schema({
  name: String,
  customer: String,
  description: String,
  isDone: Boolean
})

const taskSchema = new mongoose.Schema({
  name: String,
  description: String,
  project: String,
  isDone: Boolean
})

const workerSchema = new mongoose.Schema({
  name: String
})


const Expense = mongoose.model('Expense', expenseSchema);
const Work = mongoose.model('Work', workSchema);
const Customer = mongoose.model('Customer', customerSchema);
const Project = mongoose.model('Project', projectSchema);
const Task = mongoose.model('Task', taskSchema);
const Worker = mongoose.model('Worker', workerSchema);



app.get('/', (req, res) => {
    res.send("jarel je karel")
    res.send("ok")
})

app.post('/expenses', (req, res) => {
  const expense = new Expense(req.body)
  console.log(expense)
  expense.save()
  res.send('ok')
})

app.post('/work', (req, res) => {
  const work = new Work(req.body)
  console.log(work)
  work.save()
  res.send('ok')
})

app.post('/customer', (req, res) => {
  const customer = new Customer(req.body)
  console.log(customer)
  customer.save()
  res.send('ok')
})

app.post('/project', (req, res) => {
  const project = new Project(req.body)
  console.log(project)
  project.save()
  res.send('ok')
})

app.post('/task', (req, res) => {
  const task = new Task(req.body)
  console.log(task)
  task.save()
  res.send('ok')
})

app.post('/worker', (req, res) => {
  const worker = new Worker(req.body)
  console.log(worker)
  worker.save()
  res.send('ok')
})


// GET requests


app.get('/expenses', (req, res) => {
  Expense.find({}, (err, expenses) => {
    res.send(expenses)
  })
})


app.get('/work', (req, res) => {
  Work.find({}, (err, works) => {
    res.send(works)
  })
})

app.get('/customer', (req, res) => {
  Customer.find({}, (err, customers) => {
    res.send(customers)
  })
})

app.get('/project', (req, res) => {
  Project.find({}, (err, projects) => {
    res.send(projects)
  })
})

app.get('/task', (req, res) => {
  Task.find({}, (err, tasks) => {
    res.send(tasks)
  })
})

app.get('/worker', (req, res) => {
  Worker.find({}, (err, workers) => {
    res.send(workers)
  })
})


app.listen(8000, () => {console.log('listening on port 8000')})
