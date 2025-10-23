// src/components/ProductList.tsx
import React, { useState, useMemo } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  category: string;
  stock: number;
  status: 'available' | 'out_of_stock' | 'discontinued';
  lastUpdated: string;
}

interface ProductListProps {
  products: Product[];
  onProductSelect: (product: Product) => void;
  onProductEdit: (product: Product) => void;
  loading?: boolean;
}

interface Filters {
  category: string;
  status: string;
  search: string;
}

const ProductList: React.FC<ProductListProps> = ({
  products,
  onProductSelect,
  onProductEdit,
  loading = false
}) => {
  const [filters, setFilters] = useState<Filters>({
    category: 'all',
    status: 'all',
    search: ''
  });

  const [sortBy, setSortBy] = useState<'name' | 'price' | 'stock'>('name');

  const categories = useMemo(() => {
    return Array.from(new Set(products.map(p => p.category)));
  }, [products]);

  const filteredProducts = useMemo(() => {
    return products
      .filter(product => {
        const matchesCategory = filters.category === 'all' || product.category === filters.category;
        const matchesStatus = filters.status === 'all' || product.status === filters.status;
        const matchesSearch = product.name.toLowerCase().includes(filters.search.toLowerCase()) ||
                           product.description.toLowerCase().includes(filters.search.toLowerCase());
        
        return matchesCategory && matchesStatus && matchesSearch;
      })
      .sort((a, b) => {
        if (sortBy === 'price') return a.price - b.price;
        if (sortBy === 'stock') return a.stock - b.stock;
        return a.name.localeCompare(b.name);
      });
  }, [products, filters, sortBy]);

  const getStatusVariant = (status: Product['status']) => {
    switch (status) {
      case 'available': return { variant: 'default' as const, class: 'bg-green-100 text-green-800 border-green-200' };
      case 'out_of_stock': return { variant: 'secondary' as const, class: 'bg-amber-100 text-amber-800 border-amber-200' };
      case 'discontinued': return { variant: 'secondary' as const, class: 'bg-stone-100 text-stone-600' };
    }
  };

  if (loading) {
    return (
      <Card>
        <CardContent className="p-6">
          <div className="text-center text-stone-600">Loading products...</div>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="space-y-6">
      {/* Filters */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Filters</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium text-stone-700">Search</label>
              <Input
                placeholder="Search products..."
                value={filters.search}
                onChange={(e) => setFilters(prev => ({ ...prev, search: e.target.value }))}
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-stone-700">Category</label>
              <select
                className="w-full h-10 rounded-md border border-stone-200 bg-white px-3 py-2 text-sm"
                value={filters.category}
                onChange={(e) => setFilters(prev => ({ ...prev, category: e.target.value }))}
              >
                <option value="all">All Categories</option>
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-stone-700">Status</label>
              <select
                className="w-full h-10 rounded-md border border-stone-200 bg-white px-3 py-2 text-sm"
                value={filters.status}
                onChange={(e) => setFilters(prev => ({ ...prev, status: e.target.value }))}
              >
                <option value="all">All Status</option>
                <option value="available">Available</option>
                <option value="out_of_stock">Out of Stock</option>
                <option value="discontinued">Discontinued</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-stone-700">Sort By</label>
              <select
                className="w-full h-10 rounded-md border border-stone-200 bg-white px-3 py-2 text-sm"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as 'name' | 'price' | 'stock')}
              >
                <option value="name">Name</option>
                <option value="price">Price</option>
                <option value="stock">Stock</option>
              </select>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProducts.map(product => {
          const statusInfo = getStatusVariant(product.status);
          return (
            <Card 
              key={product.id} 
              className="cursor-pointer hover:shadow-md transition-shadow"
              onClick={() => onProductSelect(product)}
            >
              <CardHeader className="pb-3">
                <div className="flex justify-between items-start">
                  <CardTitle className="text-lg">{product.name}</CardTitle>
                  <Badge variant={statusInfo.variant} className={statusInfo.class}>
                    {product.status.replace('_', ' ')}
                  </Badge>
                </div>
                <CardDescription>{product.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-stone-600">Price</span>
                  <span className="font-semibold">${product.price}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-stone-600">Stock</span>
                  <span className={product.stock < 10 ? 'text-amber-600 font-medium' : 'font-medium'}>
                    {product.stock} units
                  </span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-stone-600">Category</span>
                  <Badge variant="outline">{product.category}</Badge>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-stone-600">Updated</span>
                  <span className="text-stone-500">
                    {new Date(product.lastUpdated).toLocaleDateString()}
                  </span>
                </div>
                <Button 
                  variant="outline" 
                  className="w-full mt-4"
                  onClick={(e) => {
                    e.stopPropagation();
                    onProductEdit(product);
                  }}
                >
                  Edit Product
                </Button>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {filteredProducts.length === 0 && (
        <Card>
          <CardContent className="p-6 text-center">
            <div className="text-stone-500">No products found matching your criteria.</div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default ProductList;