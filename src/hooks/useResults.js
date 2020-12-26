import { useState, useEffect } from "react";
import yelp from "../api/yelp";

export default () => {
  const [results, setresults] = useState([]);
  const [errorMessage, seterrorMessage] = useState("");

  console.log("badhiaa");

  const searchApi = async (searchTerm) => {
    try {
      const response = await yelp.get("/search", {
        params: {
          limit: 50,
          term: searchTerm,
          location: "san jose",
        },
      });
      setresults(response.data.businesses);
    } catch (err) {
      seterrorMessage("Something went wrong");
    }
  };

  useEffect(() => {
    searchApi("pasta");
  }, []);

  return [searchApi, results, errorMessage];
};
