"use client";
import React, { FC, useState, useEffect } from "react";


//import Image from "next/image";
import { Product } from "@/app/page";
import { useRouter } from "next/navigation";
import Link from "next/link";
//importaremos el icono de home de heroicons
import { HomeIcon } from "@heroicons/react/20/solid";
import CardProduct from "@/components/CardProduct/CardProduct";

interface HomeAppProps {
  dataProducts: Product[];
  page: number;
  totalPages: number;
  noParams?: boolean;
}

const HomeApp: FC<HomeAppProps> = ({ dataProducts, page, totalPages,noParams }) => {
  //console.log('Component:',products);
  const [searchTerm, setSearchTerm] = useState("");
  //const loaderRef = React.useRef<HTMLDivElement>(null);
  const [loading, setLoading] = useState(false);
  const [sortOption, setSortOption] = useState("price-asc");
  const router = useRouter();
  

  useEffect(() => {
    if(noParams){
      setLoading(false);
      setSearchTerm("");
      setSortOption("");
    }
  }, [noParams]);

  useEffect(() => {
    //console.log('searchTerm:', searchTerm);
    if (searchTerm !== "") {
      setLoading(true);
      router.push(`/?search=${searchTerm}`);
    } else {
      router.push(`/?page=${page}`);
    }
  }, [searchTerm]);

  useEffect(() => {
    //console.log('sortOption:', sortOption);
    if (sortOption !== "") {
      setLoading(true);
      router.push(`/?sort=${sortOption}`);
    } else {
      router.push(`/?page=${page}`);
    }
  }, [sortOption]);

  useEffect(() => {
    //console.log('dataProducts:', dataProducts);
    setLoading(false);
    
  }, [dataProducts]);

  const handlePagination = (page: number) => {
    setSearchTerm("");
    setSortOption("");
    router.push(`/?page=${page}`);
    
  };
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSortOption("");
    setSearchTerm(e.target.value);
  };
  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSearchTerm("");
    setSortOption(e.target.value);
  };
  const handleClearParams = () => {
    setSearchTerm("");
    setSortOption("");
    router.push("/");
  }
  
  return (
    <div>
      
        
          <div 
          style={{ cursor: "pointer" }}
          onClick={handleClearParams}
          className="flex items-center justify-center">
            <HomeIcon className="h-6 w-6 mr-2" />
            <span className="text-3xl">Product Listing</span>
          </div>
        
        
        

      <div className="flex flex-wrap justify-around align-center my-8">
        {/* Barra de búsqueda */}
        <div style={{ maxWidth: "350px" }} className="mb-4">
          <input
            type="text"
            placeholder="Search products..."
            value={searchTerm}
            onChange={handleSearchChange}
            className="w-full p-2 border border-gray-300 rounded text-black"
          />
        </div>
        {/* Opción de ordenación */}
        <div className="mb-4">
          <select
            value={sortOption}
            onChange={handleSortChange}
            className="p-2 border border-gray-300 rounded text-black"
          >
            <option value="">Sort by</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
            <option value="rating-asc">Rating: Low to High</option>
            <option value="rating-desc">Rating: High to Low</option>
          </select>
        </div>
        {/* Paginación */}
        <div className="flex justify-center h-10">
          <button
            className={
              page === 1
                ? "px-4 py-2 mx-2 bg-gray-300 rounded-lg"
                : "px-4 py-2 mx-2 bg-blue-500 text-white rounded-lg"
            }
            onClick={() => handlePagination(page - 1)}
            disabled={page === 1}
          >
            Previous
          </button>
          <button
            className={
              page === totalPages
                ? "px-4 py-2 mx-2 bg-gray-300 rounded-lg"
                : "px-4 py-2 mx-2 bg-blue-500 text-white rounded-lg"
            }
            onClick={() => handlePagination(page + 1)}
            disabled={page === totalPages}
          >
            Next
          </button>
        </div>
      </div>

      {/* Loader para indicar que se están cargando más productos */}
      {loading && (
        <div className="flex items-center justify-center my-8">
          <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-white-500 "></div>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {dataProducts?.map((product: Product) => (
          <CardProduct key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default HomeApp;
