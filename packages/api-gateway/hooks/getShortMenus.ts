import axios from "axios";

const getShortMenus = async (
  restaurantId: number,
  menuName: string,
  setMenus: React.Dispatch<React.SetStateAction<object>>,
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>
) => {
  let result;
  console.log("resID: " + restaurantId);
  console.log("menuName: " + menuName);
  setIsLoading(true);
  try {
    const response = await axios.get(
      `http://localhost:8080/api/restaurants/${restaurantId}/shortMenus/${menuName}`
    );
    if (response.status === 200) {
      result = response.data;
      // console.log(result);
      setMenus(result);
      setIsLoading(false);
    } else {
      throw new Error("Network response was not ok");
    }
  } catch (error) {
    console.error(error);
    setIsLoading(false);
    throw error;
  }
};

export default getShortMenus;
