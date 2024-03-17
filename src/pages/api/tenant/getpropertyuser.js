import commonHandler from '../api';

export default async function propertyGetHandler(req, res) {
  debugger;
  const { requestedData } = req.body;
  const { propertyId } = requestedData;
  commonHandler(
    req,
    res,
    'get',
    `/api/propertyuser/get_property_userlist/${propertyId}?api-version=1.0`
  );
}
