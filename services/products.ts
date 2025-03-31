import Product from "@/types/products";

const productsAPI = {
  getProductList: async (): Promise<Product[]> => {
    const response = await fetch('https://www.greatfrontend.com/api/projects/challenges/e-commerce/products?collection=latest');
    if (!response.ok) {
      throw new Error("Failed to fetch product");
    }

    const data = await response.json()
    return data.data;
  },
};

export { productsAPI };
