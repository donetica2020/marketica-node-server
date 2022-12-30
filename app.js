
const express = require('express');
const mongoose = require('mongoose');
const Organization = require('./models/organization');
const PendingOrganization = require('./models/pendingorganization');
const app = express();
const cors = require('cors');
app.use(cors())
app.use(express.json())

const dburi = "mongodb+srv://donetica2020:Alwaysthesun2020@cluster0.y1vng.mongodb.net/marketica?retryWrites=true&w=majority";

mongoose.connect(dburi, { useNewUrlParser: true, useUnifiedTopology: true })
    .then((result) => {
        app.listen(4000);
        console.log('listening on 4000')
    })
    .catch(err => {
        console.log(err)
    });



//get all organziation
app.get('/all-org', (req, res) => {
    Organization.find().then((result) => {
        res.send(result);
        res.end()
    }).catch(err => {
        res.send('error')
    })
})

//search specific organization
app.get('/search-org', (req, res) => {

})
//save organization to pending
app.post('/save-org', (req, res) => {
    const item = req.body.data
    const org = new PendingOrganization({
        name: item.name, email: item.email, mission: item.mission, address: item.address, country: item.country,
        continent: item.continent, language: item.language, website: item.website, donationurl: item.donationurl
    })
    org.save()
    res.send('success')
    res.end();
})
//save organinzation on approval
app.post('./save-by-admin', (req, res) => {

})

app.get('/search-filter', (req, res) => {
    Organization.find({ continent: 'South Asia' }).then(result => {
        console.log(result)
    }).catch(err => {
        console.log(err)
    })
})



/* 
//read excel files
const readXlsxFile = require('read-excel-file/node')
var fs = require('fs');

const paths = ['Africa', 'Asia', 'Caribbean', 'East Asia', 'Europe', 'latin america', 'MIDDLE EAST', 'North America',
    'Oceiana', 'South Asia', 'UNITED KINGDOM']

const functiona = async (name) => {
    console.log(name)
    let rawData = fs.readFileSync(`./json/${name}.json`);
    let realData = JSON.parse(rawData);
    return realData;
}

const continents = [
    'Africa', 'Asia', 'Caribbean', 'East Asia', 'Europe', 'Latin America', 'Middle East',
    'North America', 'Oceiana', 'South Asia', 'United Kingdom'
]

const readData = () => {
    paths.map((item, index) => {
        functiona(item).then(res => {
            res.map((org, indexx) => {
                const organ = new Organization({
                    name: org.name !== null ? org.name : 'none',
                    email: org.email !== null ? org.email : 'none',
                    mission: org.mission !== null ? org.mission : 'none',
                    address: org.address !== null ? org.address : 'none',
                    website: org.website !== null ? org.website : 'none',
                    donationurl: org.donationurl !== null ? org.donationurl : 'none',
                    language: org.language !== null ? org.language : 'none',
                    country: org.country !== null ? org.country : 'none',
                    continent: continents[index]
                })
                organ.save();
            })
        })
    })
    console.log('done')
}

*/

