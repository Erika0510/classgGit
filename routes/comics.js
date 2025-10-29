const comicsController = require('../controllers/comics');

const router = require('express').Router();
router.get('/', pokemonController.getComics);
module.exports = router;

router.get('/', comicsController.getPokemonSpecies);