const express = require('express'); // express is a class 
const app = express(); // app is object with all properties of express(class) in it
NOTES  =[
    {"id":1,
     "title":"note 1"},
     {"id":2,
      "title":"note 2"},
      {"id":3,
      "title":"note 3"}
]
app.get('/',firstRoute)
function firstRoute(req,res){
    res.send("hi");
}

app.get('/notes',(req,res)=>{
    res.send(NOTES);
})

app.get('/notes/:id',(req,res)=>
{const id = req.params.id;
for(var i=0;i<NOTES.length;i++){
    if(NOTES[i].id == id){
        res.send(NOTES[i]);
    }
    else
    res.send("Notes not found");
}
}
)



app.listen(3000,printMessage)
function printMessage(){
    console.log('server is running in port 3000');
}