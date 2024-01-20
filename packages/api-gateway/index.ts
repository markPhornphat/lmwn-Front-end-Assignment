import express, { Application } from "express";
import axios from "axios";

//Server ==> HTTP and Express (On top HTTP)
const app: Application = express(); //Create a server (localhost but can't listen)
const port = 3001;

const apiUrl =
  "https://us-central1-wongnai-frontend-assignment.cloudfunctions.net/api/restaurants/";

app.use(express.json()); //เพื่อเข้าถึง req.body
app.use(express.urlencoded({ extended: true })); //To encode the body in HTML element with POST
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
app.get("/", (req, res) =>
  res.send(
    "<b>567051 (ร้านลืมเคี้ยว)<br>" +
      "227018 (Ekkamai Macchiato - Home Brewer)<br>" +
      "Duo B หมูสามชั้นคั่วพริกกระเทียมไข่ดาว + กะเพราหมูสับไข่ดาว <br><br></b>" +
      "End point for restaurant http://localhost:3001/api/restaurants/227018 and http://localhost:3001/api/restaurants/567051<br>" +
      "End point for short menus localhost:3001/api/restaurants/:restaurantId/shortMenus/:menuName<br>" +
      "End point for full menus localhost:3001/api/restaurants/:restaurantId/fullMenus/:menuName "
  )
);

app.get("/api/restaurants/:resID", async (req, res) => {
  const requestID = req.params.resID;

  try {
    const resDataAPI = await axios.get(`${apiUrl}${requestID}.json`);
    const resData = resDataAPI.data;

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
