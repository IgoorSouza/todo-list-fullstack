import express from "express";
import cors from "cors";
import routes from "./routes/index.js";

const app = express();

app.use(cors());
app.use(express.json());

routes(app);

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}!`));
