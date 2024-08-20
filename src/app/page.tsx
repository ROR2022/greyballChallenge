import Image from "next/image";
import HomeApp from "@/components/HomeApp/HomeApp";

import { apiBasicUrl } from "@/components/dataApp/dataAPI";




export type Product = {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  tags: string[];
  sku: string;
  weight: number;
  dimensions: {width:number, height:number, depth:number};
  warrantyInformation: string;
  shippingInformation: string;
  availabilityStatus: string;
  reviews: {rate:number, comment:string}[];
  returnPolicy: string;
  minimumOrderQuantity: number;
  meta: {title:string, description:string, keywords:string[]};
  images: string[];
  thumbnail: string;
  quantity?: number;
}



export default async function Home({searchParams,}: { searchParams?:{ [key: string]: string | undefined }}) {
  //obtener el page de la url actual usando los datos del query
  //console.log('searchParams:', searchParams);
  const limit = 10; // Número de productos por página
  const myPage = searchParams?.page;
  const mySearch = searchParams?.search;
  const mySort = searchParams?.sort;
  const pars = parseInt(myPage||'1');
  const totalProductsRes = await fetch(apiBasicUrl);
  //console.log('totalProductsRes:', totalProductsRes);
  const dataJsonProducts = await totalProductsRes?.json() || [];  
  const totalProducts = dataJsonProducts.products
  //console.log('totalProducts:', totalProducts);
  const totalPages = Math.ceil(dataJsonProducts.total / limit) || 1;
  const page = pars>totalPages ? totalPages: pars;
  
  //ahora extraer los productos a renderizar del array total de productos
  //const products:Product[] = totalProducts?.slice((page-1)*limit, page*limit);
  //determinar el skip deacuerdo a la página actual, el límite de productos por página y el total de productos

  if(mySort&&mySort.length>0){
    const termsSort = mySort.split('-');
    const res= await fetch(`${apiBasicUrl}?sortBy=${termsSort[0]}&order=${termsSort[1]}`);
    const dataProductsByPage = await res.json();
    const products:Product[] = dataProductsByPage.products;
    return (
      <div>
        <h1>Frontend Challenge</h1>
        <HomeApp dataProducts={products} page={page} totalPages={totalPages}/>
        
      </div>
    );
  }

  if(mySearch&&mySearch.length>0){
    const res= await fetch(`${apiBasicUrl}/search?q=${mySearch}`);
    const dataProductsByPage = await res.json();
    const products:Product[] = dataProductsByPage.products;
    return (
      <div>
        <h1>Frontend Challenge</h1>
        <HomeApp dataProducts={products} page={page} totalPages={totalPages}/>
        
      </div>
    );
  }


  const skip = (page-1)*limit||0;

  //console.log('page:', page);
  const res= await fetch(`${apiBasicUrl}?skip=${skip}&limit=${limit}`);
  const dataProductsByPage = await res.json();
  const products:Product[] = dataProductsByPage.products;
  
  //console.log('products:', products);


  
  return (
    <div>
      <h1>Frontend Challenge</h1>
      <HomeApp dataProducts={products} page={page} totalPages={totalPages} noParams={true}/>
      
    </div>
  );
}
