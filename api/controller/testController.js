const fs = require('fs')

exports.postData = (req, res) => {
    console.log(req.params.id, req.body)
    fs.writeFile(`${req.params.id}.json`, JSON.stringify(req.body), function (err) {
        if (err) throw err;
        res.status(200).json({
            message: "Data saved"
        })
    });


}

exports.getData = (req, res) => {
    fs.readFile(`${req.params.id}.json`, 'utf8', function (err, data) {
        console.log(data)
        res.status(200).send(data)
    });


}