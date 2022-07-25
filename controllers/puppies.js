import { Puppy } from '../models/puppy.js'

function create(req, res) {
  req.body.owner = req.user.profile
  Puppy.create(req.body)
    .then(puppy => {
      Puppy.findById(puppy._id)
        .populate('owner')
        .then(populatedPuppy => {
          res.json(populatedPuppy)
        })
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({ err: err.errmsg })
    })
}

function index(req, res) {
  Puppy.find({})
  .populate('owner')
  .then(puppies=> {
    res.json(puppies)
  })
  .catch(err => {
    console.log(err)
    res.status(500).json({err: err.errmsg})
  })
}

export {
  create,
  index
}