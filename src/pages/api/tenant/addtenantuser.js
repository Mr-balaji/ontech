import commonHandler from '../api';
// fetch tenant & user
export default async function propertyGetHandler(req, res) {
  commonHandler(
    req,
    res,
    'post',
    `/api/propertyuser/add-update?api-version=1.0`
  );
}
