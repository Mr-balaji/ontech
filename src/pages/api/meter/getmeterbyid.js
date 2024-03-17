import commonHandler from '../api';

export default async function propertyGetHandler(req, res) {
  debugger;
  const { requestedData } = req.body;
  const { Id } = requestedData;
  commonHandler(req, res, 'get', `/api/meter/${Id}?api-version=1.0`);
}
