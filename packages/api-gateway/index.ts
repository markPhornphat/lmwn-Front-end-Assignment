import express, { Application } from "express";
import axios from "axios";

//Server ==> HTTP and Express (On top HTTP)
const app: Application = express(); //Create a server (localhost but can't listen)
const port = 8080;
const cors = require("cors");

app.use(cors()); //For let front-end side (port:3000) able to fetch the data from port:8080
const apiUrl =
  "https://us-central1-wongnai-frontend-assignment.cloudfunctions.net/api/restaurants/";

app.use(express.json()); //เพื่อเข้าถึง req.body
app.use(express.urlencoded({ extended: true })); //To encode the body in HTML element with POST

app.get("/", (req, res) =>
  res.send(
    "<b>567051 (ร้านลืมเคี้ยว)<br>" +
      "227018 (Ekkamai Macchiato - Home Brewer)<br><br>" +
      "End point for restaurant http://localhost:8080/api/restaurants/:restaurantID<br>" +
      "End point for short menus localhost:8080/api/restaurants/:restaurantId/shortMenus/:menuName<br>" +
      "End point for full menus localhost:8080/api/restaurants/:restaurantId/fullMenus/:menuName "
  )
);

app.get("/api/restaurants/:resID", async (req, res) => {
  const requestID = req.params.resID;

  try {
    const resDataAPI = await axios.get(`${apiUrl}${requestID}.json`);
    const resData = resDataAPI.data;
    // console.log(resData);
    res.json(resData);
  } catch (error: any) {
    console.error(
      "Error fetching data from LinemanWongnai API:",
      error.message
    );
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.get(
  "/api/restaurants/:restaurantId/shortMenus/:menuName",
  async (req, res) => {
    const requestMenusName = req.params.menuName;
    const requestID = req.params.restaurantId;

    try {
      const menuDataApi = await axios.get(
        `${apiUrl}${requestID}/menus/${requestMenusName}/short.json`
      );
      const menuData = menuDataApi.data;
      res.json(menuData);
    } catch (error: any) {
      console.error(
        "Error fetching data from LinemanWongnai API:",
        error.message
      );
      res.status(500).json({ error: "Internal Server Error" });
    }
  }
);

app.get(
  "/api/restaurants/:restaurantId/fullMenus/:menuName",
  async (req, res) => {
    const requestMenusName = req.params.menuName;
    const requestID = req.params.restaurantId;
    try {
      const menuDataApi = await axios.get(
        `${apiUrl}${requestID}/menus/${requestMenusName}/full.json`
      );
      const menuData = menuDataApi.data;
      res.json(menuData);
    } catch (error: any) {
      console.error(
        "Error fetching data from LinemanWongnai API:",
        error.message
      );
      res.status(500).json({ error: "Internal Server Error" });
    }
  }
);

// get(path, (callback func.))

try {
  app.listen(port, (): void => {
    console.log(`Connected successfully on port ${port}`); //Listen every request
  });
} catch (error) {
  console.error(`Error occured: ${(error as Error).message}`);
}
