module.exports = {
    getHouses: (req, res, next) => {
        const dbInstance = req.app.get('db')
        dbInstance.get_houses()
        .then(houses => res.status(200).send(houses))
        .catch(err => {
            res.status(500).send({errorMessage:'Try again, not werkin'})
        })
    },
    createHouse: (req, res, next) => {
        const dbInstance = req.app.get('db')
        const { property_name, address, city, state, zip } = req.body
        dbInstance.create_house([property_name, address, city, state, zip])
        .then( house => res.sendStatus(200))
        .catch(err => {
            res.status(500).send({errorMessage:'Try again, not werkin'})
        })
    },
    deleteHouse: (req, res, next) => {
        const dbInstance = req.app.get('db')
        const { id } = req.params
        dbInstance.delete_house([id])
        .then(deletedHouse => res.sendStatus(200))
        .catch(err => {
            res.status(500).send({errorMessage:'Try again, not werkin'})
        })
    },
    // update: (req, res, next) => {
       
        // dbInstance.update_()
        // .then(updated => res.status(200).send(updated))
        // .catch(err => {
        //     res.status(500).send({errorMessage:'Try again, not werkin'})
        // })
    // }
}