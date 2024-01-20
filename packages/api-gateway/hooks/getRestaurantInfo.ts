import axios from "axios";

const getRestaurantInfo = async (
  restaurantId: number,
  setData: React.Dispatch<React.SetStateAction<object>>,
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>
) => {
  let result;
  setIsLoading(true);
  try {
    const response = await axios.get(
      `http://localhost:3001/api/restaurants/${restaurantId}`
    );

    if (response.status === 200) {
      result = response.data;
      setIsLoading(false);
      setData(result);
    } else {
      throw new Error("Network response was not ok");
    }
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export default getRestaurantInfo;
