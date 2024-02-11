const fs = require('fs');
const process = require('process');
const axios = require('axios');



const makeFiles = function(data){
    fs.writeFile(data[1], data[0], 'utf8', function(err){
        if(err){
            console.log('ERROR: ', err);
        }
    console.log(`Wrote to ${data[1]}`);
    })
}


const getUrls = function(path){
    fs.readFile(path, 'utf8', function(err,data){
        if(err){
            console.log('ERROR: ', err);
            process.kill(1);
        }
        console.log(data.split('\n'));
        getHtml(data.split('\n'));
    })
}


const getHtml = async function(urls){
    for(let url of urls){
        try{
            console.log(url)
            let res = await axios.get(url);
            console.log(res.request.host);
            let htmlData = [res.data, String(res.request.host)]
            console.log(htmlData)
            makeFiles(htmlData);
        }
        catch{
            console.error(`ERROR: couldn't access ${url}`);
        }
    }
}


getUrls(process.argv[2]);