const router = require(`express`).Router();
const { showAllUsers, showOneUser, addNewUser, removeUser, updateUser } = require(`../../controllers/userControl`)

router.get(`/`)

module.exports = router;