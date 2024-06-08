//@desc Get all contacts
//@route GET /api/contacts
//@access public
const getContact = (req, res) => {
  res.status(200).json({ message: "Get all contacts" });
};

//@desc Create a contact
//@route POST /api/contacts
//@access public
const createContact = (req, res) => {
  console.log(req.body);
  const {name, mobile, email} = req.body;
  if (!name || !mobile || !email) {
    res.status(400)
    throw new Error("All fields are requires");
  }
  res.status(201).json({ message: "Created a contact" });
};

//@desc Get a contact
//@route GET /api/contacts.:id
//@access public
const getSingleContact = (req, res) => {
  res.status(201).json({ message: `Get the contact with id ${req.params.id}` });
};

//@desc Update a contact
//@route PUT /api/contacts.:id
//@access public
const updateContact = (req, res) => {
  res
    .status(200)
    .json({ message: `Update the contact with id ${req.params.id}` });
};

//@desc Delete a contact
//@route DELETE /api/contacts.:id
//@access public
const deleteContact = (req, res) => {
  res
    .status(200)
    .json({ message: `Delete the contact with id ${req.params.id}` });
};

module.exports = {
  getContact,
  createContact,
  getSingleContact,
  updateContact,
  deleteContact,
};
