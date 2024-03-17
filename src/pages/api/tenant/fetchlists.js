import commonHandler from '../api';
// fetch propertylist, titlelist, & usertypelist
export default async function propertyGetHandler(req, res) {
  const { requestedData } = req.body;
  const { ownerId } = requestedData;
  commonHandler(
    req,
    res,
    'get',
    `/api/propertyuser/get-property-user-masters/${ownerId}?api-version=1.0`
  );
}
