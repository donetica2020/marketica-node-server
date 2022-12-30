
const express = require('express');
const mongoose = require('mongoose');
const Organization = require('./models/organization');
const PendingOrganization = require('./models/pendingorganization');
const app = express();
const cors = require('cors');
app.use(cors())
app.use(express.json())

const port = process.env.port || 3000;

app.listen(port);
app.use('/',(req,res) =>{
    res.send('Hello world')
})

/*
const dburi = `mongodb+srv://donetica2020:Alwaysthesun2020@cluster0.y1vng.mongodb.net/marketica?retryWrites=true&w=majority`;

mongoose.connect(dburi, { useNewUrlParser: true, useUnifiedTopology: true })
    .then((result) => {
        app.listen(port);
    })
    .catch(err => {
        console.log(err)
    });



//get all organziation
app.get('/all-org', (req, res) => {
    Organization.find().then((result) => {
        res.send(result);
    }).catch(err => {
        res.send([])
    })
})

//search specific organization
app.get('/search-org', (req, res) => {
    console.log(req.body.name)
    let name = req.body.name;
    Organization.findOne({ name: name }, function (err, org) {
        if (err) {
            res.send([])
        } else {
            res.send(org)
        }
    })
})
app.get('/search-filter', (req, res) => {
    if (req.body.continent !== undefined && req.body.country !== undefined) {
        if (req.body.continent !== '' && req.body.country !== '') {
            Organization.find({ continent: req.body.continent, country: req.body.country }).then(result => {
                res.send(result)
            }).catch(err => {
                res.send([])
            })
        } else if (req.body.continent !== '' && req.body.country == '') {
            Organization.find({ continent: req.body.continent }).then(result => {
                res.send(result)
            }).catch(err => {
                res.send([])
            })
        } else if (req.body.continent == '' && req.body.country !== '') {
            Organization.find({ country: req.body.country }).then(result => {
                res.send(result)
            }).catch(err => {
                res.send([])
            })
        } else {
            res.send([])
        }
    } else {
        res.send([])
    }

})

//save organization to pending
app.post('/save-org', (req, res) => {
    if (req.body.data !== undefined) {
        const item = req.body.data
        const org = new PendingOrganization({
            name: item.name !== undefined ? item.name : 'none',
            email: item.email !== undefined ? item.email : 'none',
            mission: item.mission !== undefined ? item.mission : 'none',
            address: item.address !== undefined ? item.address : 'none',
            country: item.country !== undefined ? item.country : 'none',
            continent: item.continent !== undefined ? item.continent : 'none',
            language: item.language !== undefined ? item.language : 'none',
            website: item.website !== undefined ? item.website : 'none',
            donationurl: item.donationurl !== undefined ? item.donationurl : 'none'
        })
        org.save()
        res.send('success')
    } else {
        res.send('invalid org. data')
    }
})
//save organinzation on approval
app.post('/save-by-admin', (req, res) => {
    if (req.body.data !== undefined) {
        const item = req.body.data
        const org = new Organization({
            name: item.name !== undefined ? item.name : 'none',
            email: item.email !== undefined ? item.email : 'none',
            mission: item.mission !== undefined ? item.mission : 'none',
            address: item.address !== undefined ? item.address : 'none',
            country: item.country !== undefined ? item.country : 'none',
            continent: item.continent !== undefined ? item.continent : 'none',
            language: item.language !== undefined ? item.language : 'none',
            website: item.website !== undefined ? item.website : 'none',
            donationurl: item.donationurl !== undefined ? item.donationurl : 'none'
        })
        org.save()
        res.send('success')
    } else {
        res.send('invalid org. data')
    }
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

