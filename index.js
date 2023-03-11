

import http from "http";
import fetch from 'node-fetch';
const server = http.createServer((req, res) =>{
    const url = req.url
    let tableData = "<table border='1'><tr><th>Name</th><th>Height</th><th>birth_year</th><th>gender</th><th>url</th></tr>"

    //name height birth_year gender url

    if(url === '/'){
        res.write("Home Page")
        res.end()

    }
    if (url === '/message'){
        res.write("Welcome to My Message Page")
        res.end()

    }
    if (url === '/list') {
        fetch('https://swapi.dev/api/people')
            .then(res => res.json())
            .then (data => { 
                //console.log(data)
                createData(data.results)
                res.write(tableData)
                res.end()
        })
            

        
        
    }

    function createData(data){
        console.log(data)
        data.forEach(element => {
            tableData+=`<tr><td>${element.name}</td><td>${element.height}</td><td>${element.birth_year}</td><td>${element.gender}</td><td>${element.url}</td></tr>`
        });

        tableData+=`</table>` 
    }
}).listen(5090,console.log(`Server listening on port 5090 `))









