const express = require("express");
const app = express()
const port = 3500
app.use(express.json())
let data = [
  {
  "id": 2,
  "description": "Sweet and savory sauces relishes spreads and seasonings",
  "name": "Condiments"
  },
  {
  "id": 1,
  "description": "Soft drinks coffees teas beers and ales",
  "name": "Beverages"
  },
  {
  "id": 3,
  "description": "Desserts candies and sweet breads",
  "name": "Confections"
  },
  {
  "id": 4,
  "description": "Cheeses",
  "name": "Dairy Products"
  },
  {
  "id": 5,
  "description": "Breads crackers pasta and cereal",
  "name": "Grains/Cereals"
  },
  {
  "id": 6,
  "description": "Prepared meats",
  "name": "Meat/Poultry"
  },
  {
  "id": 7,
  "description": "Dried fruit and bean curd",
  "name": "Produce"
  },
  {
  "id": 8,
  "description": "Seaweed and fish",
  "name": "Seafood"
  }
  ]

  let count = 10





  app.get('/', (req,res) =>{
    res.send(data)
  })
  

app.get('/:id', (req,res) =>{
  const {id} = req.params
  const response = data.find((X)=> X.id === id)
  res.send(response)
})

app.post('/', (req,res) =>{
  const {name, age} = req.body
  count++
  data.push({name:name ,age:age ,id:count})
  res.send('dobavilos')

})

app.put('/:id', (req,res) =>{
  const {id} = req.params
  const {name, age} = req.body
  const index = data.findIndex(x=>x.id === +id)
  data[index] = {id:+id,name,age}

  res.send('changed')
})




app.listen(port, ()=> {
  console.log(`Exampe app listening on port ${port}`);
})