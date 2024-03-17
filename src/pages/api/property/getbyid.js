
import commonHandler from '../api';

export default async function propertyGetHandler(req, res) {
    const { requestedData } = req.body;
    const { Id,companyId } = requestedData;
    commonHandler(req, res, "get", `/api/property/${Id}?companyId=${companyId}&api-version=1.0`);
}
