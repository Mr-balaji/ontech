var axios = require("axios");

export default async function handler(req, res) {
  const profileFormData= req.body; // Extracting profileFormData and accessToken separately

  console.log("profileFormData",profileFormData);

  try {
    const apiRes = await fetch(`${process.env.API_URL}/api/user/update-profile_pic?api-version=1.0`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'multipart/form-data;boundary=None',
            'Authorization': `Bearer eyJhbGciOiJodHRwOi8vd3d3LnczLm9yZy8yMDAxLzA0L3htbGRzaWctbW9yZSNobWFjLXNoYTI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImJhbGFqaUBnbWFpbC5jb20iLCJjb21wYW55IjoiMSIsImV4cCI6MTcxMDU4OTM2MiwiaXNzIjoiaHR0cDovL09udGVjLmNvbS8iLCJhdWQiOiJodHRwOi8vT250ZWMuY29tLyJ9.Wbjbhd6lE8yn5YcdLLXxKJVXn4u7qkeCzkPtoays-ao
            Content-Type:
            multipart/form-data; boundary=----WebKitFormBoundarylxZ4lZXiykGUQmOP`
        },
        body: req.body
    });

    const data = await apiRes.json();
    console.log(data)

    if (apiRes.status === 200) {
        return res.status(200).json({ updatedplaylist: data });
    } else {
        return res.status(apiRes.status).json({
            error: data.error
        });
    }
} catch(err) {
    return res.status(500).json({
        error: 'Something went wrong when registering for an account'
    });
}
}