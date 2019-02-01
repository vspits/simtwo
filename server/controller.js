module.exports = {
    get: (req, res, next) => {
        const dbInstance = req.app.get('db')
        dbInstance.get_houses()
        .then(houses => res.status(200).send(houses))
        .catch(err => {
            res.status(500).send({errorMessage:'Try again, not werkin'})
        })
    },
    create: (req, res, next) => {

        // dbInstance.create_()
        // .then( created => res.sendStatus(200))
        // .catch(err => {
        //     res.status(500).send({errorMessage:'Try again, not werkin'})
        // })
    },
    delete: (req, res, next) => {

        // dbInstance.delete_()
        // .then(deleted => res.sendStatus(200))
        // .catch(err => {
        //     res.status(500).send({errorMessage:'Try again, not werkin'})
        // })
    },
    update: (req, res, next) => {
       
        // dbInstance.update_()
        // .then(updated => res.status(200).send(updated))
        // .catch(err => {
        //     res.status(500).send({errorMessage:'Try again, not werkin'})
        // })
    }
}