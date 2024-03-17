import commonHandler from '../api';

export default async function propertyGetHandler(req, res) {
    commonHandler(req, res, "post", `/api/property/edit?api-version=1.0`);
}
