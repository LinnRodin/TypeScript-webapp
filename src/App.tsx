import React from 'react'
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomeView from './Views/HomeView';
import CategoriesView from './Views/CategoriesView';
import ProductsView from './Views/ProductsView';
import ProductDetailsView from './Views/ProductDetailsView';
import ContactsView from './Views/ContactsView';
import SearchView from './Views/SearchView';
import CompareView from './Views/CompareView';
import WishListView from './Views/WishListView';
import ShoppingCartView from './Views/ShoppingCartView';
import NotFoundView from './Views/NotFoundView';
import { ProductProvider } from './Contexts/ProductContext';

function App() {


  return (
    <BrowserRouter>
      <ProductProvider>
        <Routes>
         <Route path="/" element={<HomeView /> } /> 
          <Route path="/products" element={<ProductsView /> } /> 
          <Route path="/categories" element={<CategoriesView /> } /> 
          <Route path="/products/:id" element={<ProductDetailsView /> } /> 
          <Route path="/contacts" element={<ContactsView /> } /> 
          <Route path="/search" element={<SearchView /> } /> 
          <Route path="/compare" element={<CompareView /> } /> 
          <Route path="/wishlist" element={<WishListView /> } />
          <Route path="/shoppingcart" element={<ShoppingCartView /> } /> 
          <Route path="*" element={<NotFoundView /> } /> 
        </Routes>
        </ProductProvider>
    </BrowserRouter>
  
  );
}

export default App;

