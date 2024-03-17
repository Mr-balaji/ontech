import commonHandler from '../api';

export default async function propertyGetHandler(req, res) {
  commonHandler(
    req,
    res,
    'post',
    `/api/property/get_property_by_ownerid?api-version=1.0`
  );
}
