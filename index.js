const express = require("express");

require("dotenv").config();
const app = express();
app.use(express.json());


app.get("/", (req, res) => {
  res.send("Hello World!");
});

require("./models/association");

//const stagiaireRoute = require("./routes/StagiairesRoute");
//app.use("/stagiaires", stagiaireRoute);


app.use((req, res) => {
  res.status(404).json({ message: "Route non trouvé" });
});

app.listen(process.env.PORT, () => {
  console.log(
    `✅ Votre serveur est lancé sur http://127.0.0.1:${process.env.PORT}`
  );
});
