const API = process.env.REACT_APP_URL;

const endPoints = {
  products: {
    getProduct: (id: any) => `${API}/api/products/${id}/`,
    allProducts: `${API}/api/products/`,
    getProducts: (limit: any, offset: any) =>
      `${API}/api/products?limit=${limit}&offset=${offset}`,
    addProducts: `${API}/api/products`,
    updateProducts: (id: any) => `${API}/api/products/${id}/`,
    deleteProduct: (id: any) => `${API}/api/products/${id}/`,
  },
  categories: {
    getCategoriesList: `${API}/api/category/`,
    addCategory: `${API}/api/category/register`,
    getCategoryItems: (id: any) => `${API}/api/categories/${id}/products/`,
    updateCategory: (id: any) => `${API}/api/categories/${id}/`,
  },
  files: {
    addImage: `${API}/api/files/upload/`,
  },
};

export default endPoints;
