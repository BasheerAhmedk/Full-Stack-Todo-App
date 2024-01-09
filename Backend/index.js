const express = require('express');
const { createTodo, updateTodo } = require('./types');
const { todo } = require('./db');

const app = express();

app.use(express.json());

app.get('/todos', async (req,res)=>{
    const todos = await todo.find({});
    res.json(todos);
});

app.post('/todo',async(req, res)=>{
    const payload = req.body;
    const parsedPayload = createTodo.safeParse(payload);
    if(!parsedPayload.success){
        res.send(411).json({msg: 'you sent the wrong inputs'})
    }
    
    await todo.create({
        title: payload.title,
        description: payload.description,
        completed: false
    })
    res.json({msg: 'Todo Created'})
});

app.put("/completed", async function(req, res) {
    const updatePayload = req.body;
    const parsedPayload = updateTodo.safeParse(updatePayload);
    if (!parsedPayload.success) {
        res.status(411).json({
            msg: "You sent the wrong inputs",
        })
        return;
    }
    await todo.updateOne({
        _id: req.body.id
    }, {
      completed: true  
    })
    res.json({
        msg: "Todo marked as completed"
    })
})

app.listen(3000);