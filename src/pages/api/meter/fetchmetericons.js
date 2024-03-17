import commonHandler from '../api';

export default async function propertyGetHandler(req, res) {
  debugger;
  const { requestedData } = req.body;
  const { ownerId } = requestedData;
  commonHandler(
    req,
    res,
    'get',
    `/api/meter/get-meter-masters/${ownerId}?api-version=1.0`
  );
}
