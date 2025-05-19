const sochimaRoute = (req, res) => {
  res.send("Sochima Ifedikwa");
};

const josephRoute = (req, res) => {
  res.send("Joseph Ifedikwa");
};

const jajaRoute = (req, res) => {
  res.send("Jaja Ifedikwa");
};

const chisomRoute = (req, res) => {
  res.send("Chisom Okebugwu");
};

// This is the main route for the aplication to export the routes
module.exports = {
    sochimaRoute,
    josephRoute,
    jajaRoute,
    chisomRoute
};