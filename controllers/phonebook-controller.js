const phonebook = require('../phonebook');

module.exports = {
  index: (req, res) => {
    res.render('index', {
      contacts: phonebook.getPhonebook()
    });
  },
  addPhonebookPost:(req, res) => {
    // TODO: add a phonebook object to the array
  }
}