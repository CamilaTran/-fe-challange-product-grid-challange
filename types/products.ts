export default interface Product {
  product_id: string;
  name: string;
  colors: string[];
  priceRange: { highest: number; lowest: number };
  images: [{ color: string; image_url: string }];
}
