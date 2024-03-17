var axios = require("axios");

export default async function handler(req, res) {
     const  requestedData  = req.body;
  const  accessToken = req.body;
   
  
  

  // Append token as part of the form data

  try {
    var config = {
      method: 'post',
      url: `${process.env.API_URL}/api/user/update-user?api-version=1.0`,
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "multipart/form-data", // Set Content-Type to multipart/form-data
      },
      data: requestedData,
    };

    await axios(config)
      .then(function (returnResponse) {
        return res.status(200).json(returnResponse.data);
      })
      .catch(function (error) {
        if (error.response) {
          return res.status(error.response.status).json(error.response.data);
        }
        return res.status(400).json(error);
      });
  } catch (error) {
    console.error("Error:", error);
    res
      .status(500)
      .json({ message: "An error occurred. Please try again later." });
  }
}
