import axios from 'axios';
import endPoints from '../constants';

const addCategory = async (body: any) => {
  const config = {
    headers: {
      accept: '*/*',
      'Content-Type': 'application/json',
    },
  };
  const response = await axios.post(
    endPoints.categories.addCategory,
    body,
    config,
  );
  console.log(response);

  return response.data;
};

const deleteCategory = async (id: any) => {
  const response = await axios.delete(endPoints.products.deleteProduct(id));
  return response.data;
};

const updateCategory = async (id: any, body: any) => {
  const config = {
    headers: {
      accept: '*/*',
      'Content-Type': 'application/json',
    },
  };
  const response = await axios.put(
    endPoints.products.updateProducts(id),
    body,
    config,
  );
  return response.data;
};

const getCategorys = (url: string) => {
  const res = axios.get(url);

  return res;
};

export { addCategory, deleteCategory, updateCategory, getCategorys };
