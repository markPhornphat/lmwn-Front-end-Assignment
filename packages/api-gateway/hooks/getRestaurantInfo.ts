import axios from "axios";

const getRestaurantInfo = async (
  data: any,
  restaurantId: number,
  setData: React.Dispatch<React.SetStateAction<object>>,
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>
) => {
  let result;
  setIsLoading(true);
  try {
    const response = await axios.get(
      `http://localhost:8080/api/restaurants/${restaurantId}`
    );

    if (response.status === 200) {
      result = response.data;
      setData(result);
      setIsLoading(false);
      // console.log(result);
    } else {
      throw new Error("Network response was not ok");
    }
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export default getRestaurantInfo;
