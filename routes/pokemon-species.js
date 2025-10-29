const comicsController = require('../controllers/pokemon-species');

const router = require('express').Router();
router.get('/', comicsController.getPokemonSpecies);

module.exports = router;

