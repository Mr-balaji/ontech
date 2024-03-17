import commonHandler from '../api';

export default async function propertyGetHandler(req, res) {
  const { requestedData } = req.body;
  const { propertyId } = requestedData;
  //console.log(propertyId);
  commonHandler(
    req,
    res,
    'get',
    `/api/meter/get-meterby-propertyid/${propertyId}?api-version=1.0`
    // '/api/meter/get-meterby-propertyid/74?api-version=1.0'
  );
}
