import commonHandler from '../api';

export default async function propertyGetHandler(req, res) {
    const { requestedData } = req.body;
    const { userId } = requestedData;
    console.log("userId",userId)
    commonHandler(req, res, "get", `/api/user/${userId}`);
}
