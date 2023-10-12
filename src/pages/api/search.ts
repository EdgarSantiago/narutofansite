import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    const { name, slug } = req.query;

    try {
      // Make an Axios GET request to the external API
      const response = await axios.get(
        `https://narutodb.xyz/api/${slug}/search?name=${name}`
      );

      // Log the response object to the console for debugging

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
      console.error(error); // Log the error for debugging
      res.status(500).json({ error: "Error searching characters" });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" }); // Return 405 if the HTTP method is not GET
  }
}
