import {fetchUtils} from "react-admin";
const apiUrl = `http://localhost:8000/api`
const httpClient = fetchUtils.fetchJson;
export const dataProvider = {
    
    getList: (resource, params) => {
        console.log(apiUrl);
        const { page, perPage } = params.pagination;
        const { field, order } = params.sort;

        // Chuyển đổi thành query string
        const query = {
            page,
            per_page: perPage,
            sort_by: field,
            sort_order: order,
            ...params.filter
        };
        const url = `${apiUrl}/${resource}?${fetchUtils.queryParameters(query)}`;

        return httpClient(url).then(({ json }) => ({
            data: json.data,
            total: json.total,
        }));
    },
}