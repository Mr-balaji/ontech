import commonHandler from '../api';

export default async function propertyGetHandler(req, res) {
  const { requestedData } = req.body;
  const { Id } = requestedData;
  commonHandler(
    req,
    res,
    'get',
    `/api/meter/delete-meter/${Id}?&api-version=1.0`
  );
}
