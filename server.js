var express = require("express")​

var app = express()​

​var cors=require('cors')
let projectcollection;

app.use(cors())

app.use(express.static(__dirname+'/public'))​

app.use(express.json());​

app.use(express.urlencoded({ extended: false }));​

​
const Mongoclient=require('mongodb').MongoClient;
const uri='mongodb+srv://sahilkumar:1234@cluster0.s2eii88.mongodb.net/?retryWrites=true&w=majority'
const client= new Mongoclient(uri,{useNewUrlParser: true})
const createcollection=(collectionName) =>{
    client.connect((err,db) =>{
        projectcollection = client.db().collection(collectionName);
        if(!err){
            console.log("mongodb connected")
        }
        else{
            console.log("DB error: ",err);
            process.exit(1);
        }
    })
}

​
const insertProjects = (project,callback) => {​

    projectCollection.insert(project,callback);​
app.get('/api/projects',(req,res) => {​

    res.json({statusCode: 200, data: cardList, message:"Success"})​

})​

​}
app.get('/api/projects',(req,res) => {​

    getProjects((err,result) => {​

        if(err) {​

            res.json({statusCode: 400, message: err})​

        }​

        else {​

            res.json({statusCode: 200, message:"Success", data: result})​

        }​

    })​

})
// get project...​

const getProjects = (callback) => {​

    projectCollection.find({}).toArray(callback);​

}​​

var port = process.env.port || 3000;​

​

app.listen(port,()=>{​

    console.log("App listening to: "+port)​
   createcollection('pets')
})​