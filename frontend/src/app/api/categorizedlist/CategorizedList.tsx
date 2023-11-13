import { baseAxios } from '../Api'

export async function CategorizedList (member_id : string, category : string) {
    try {
        const response = await baseAxios.get(`/api/product/category/${member_id}/${category}`);
        return response.data.data;
    }
    catch (e){
        console.log(e);
    }
}