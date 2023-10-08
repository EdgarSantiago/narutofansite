// pages/api/search.ts

import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    const { name } = req.query;

    const response = await axios.get(
      `https://narutodb.xyz/api/character/search?name=${name}`
    );

    // Log the response object to the console
    console.log(response.status);
    try {
      const { name } = req.query;
      // Make an Axios GET request to the external API
      const response = await axios.get(
        `https://narutodb.xyz/api/character/search?name=${name}`
      );

      // Log the response object to the console
      console.log(response);

      // Check the response status code
      if (response.status === 200) {
        const data = response.data;
        res.status(200).json(data); // Send the search results as JSON response
      } else {
        // Handle non-200 status codes (e.g., 404 or 500)
        res
          .status(response.status)
          .json({ error: `Request failed with status ${response.status}` });
      }
    } catch (error) {
      // Handle network errors or exceptions
      res.status(500).json({ error: "Error searching characters" });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" }); // Return 405 if the HTTP method is not GET
  }
}
