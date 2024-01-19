import express, { Application } from "express";
import axios from "axios";

//Server ==> HTTP and Express (On top HTTP)
const app: Application = express(); //Create a server (localhost but can't listen)
const port = 3001;

const apiUrl =
  "https://us-central1-wongnai-frontend-assignment.cloudfunctions.net/api/restaurants/";

app.use(express.json()); //เพื่อเข้าถึง req.body
app.use(express.urlencoded({ extended: true })); //To encode the body in HTML element with POST

app.get("/", (req, res) =>
  res.send(
    "End point of restaurant http://localhost:3001/api/restaurants/227018 and http://localhost:3001/api/restaurants/567051"
  )
);

app.get("/api/restaurants/:resID", async (req, res) => {
  const requestID = req.params.resID;

  try {
    const resDataAPI = await axios.get(`${apiUrl}${requestID}.json`);
    const resData = resDataAPI.data;

    res.json(resData);
  } catch (error: any) {
    console.error("Error fetching data from external API:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.get(
  "api/restaurants/:restaurantId/shortMenus/:menuName",
  async (req, res) => {}
);

// get(path, (callback func.))

try {
  app.listen(port, (): void => {
    console.log(`Connected successfully on port ${port}`); //Listen every request
  });
} catch (error) {
  console.error(`Error occured: ${(error as Error).message}`);
}
