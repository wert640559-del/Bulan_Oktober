// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { AppProvider, useAppContext } from '@/contexts/AppContext';
import UserCard, { User } from '@/components/UserCard';
import ProductList, { Product } from '@/components/ProductList';
import ValidatedForm from '@/components/ValidatedForm';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

// Sample data
const sampleUsers: User[] = [
  {
    id: 1,
    name: 'John Smith',
    email: 'john.smith@company.com',
    role: 'admin',
    department: 'Engineering',
    status: 'active',
    joinDate: '2022-01-15'
  },
  {
    id: 2,
    name: 'Sarah Johnson',
    email: 'sarah.j@company.com',
    role: 'user',
    department: 'Marketing',
    status: 'active',
    joinDate: '2022-03-20'
  },
  {
    id: 3,
    name: 'Michael Chen',
    email: 'michael.chen@company.com',
    role: 'moderator',
    department: 'Product',
    status: 'inactive',
    joinDate: '2021-11-08'
  }
];

const sampleProducts: Product[] = [
  {
    id: 1,
    name: 'Laptop Pro',
    description: 'High-performance business laptop',
    price: 1299,
    category: 'Electronics',
    stock: 15,
    status: 'available',
    lastUpdated: '2023-10-15'
  },
  {
    id: 2,
    name: 'Office Chair',
    description: 'Ergonomic office chair',
    price: 299,
    category: 'Furniture',
    stock: 8,
    status: 'available',
    lastUpdated: '2023-10-12'
  },
  {
    id: 3,
    name: 'Wireless Mouse',
    description: 'Bluetooth wireless mouse',
    price: 49,
    category: 'Electronics',
    stock: 0,
    status: 'out_of_stock',
    lastUpdated: '2023-10-10'
  }
];

const Navigation: React.FC = () => {
  const { state, logout, login } = useAppContext();

  return (
    <nav className="bg-white border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center space-x-8">
            <Link to="/" className="text-xl font-semibold text-stone-900">
              CompanyPortal
            </Link>
            <div className="hidden md:flex space-x-6">
              <Link to="/" className="text-stone-600 hover:text-stone-900 transition-colors">
                Dashboard
              </Link>
              <Link to="/users" className="text-stone-600 hover:text-stone-900 transition-colors">
                Users
              </Link>
              <Link to="/products" className="text-stone-600 hover:text-stone-900 transition-colors">
                Products
              </Link>
              <Link to="/form" className="text-stone-600 hover:text-stone-900 transition-colors">
                Registration
              </Link>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            {state.user ? (
              <>
                <span className="text-sm text-stone-600">Welcome, {state.user.name}</span>
                <Button variant="outline" size="sm" onClick={logout}>
                  Logout
                </Button>
              </>
            ) : (
              <Button 
                size="sm" 
                onClick={() => login({ id: 1, name: 'Demo User', email: 'demo@company.com', role: 'admin' })}
              >
                Login
              </Button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

const Dashboard: React.FC = () => {
  const { state } = useAppContext();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-stone-900">Dashboard</h1>
          <p className="text-stone-600 mt-2">Welcome to CompanyPortal management system</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Total Users</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-stone-900">{sampleUsers.length}</div>
              <p className="text-sm text-stone-600">Active employees</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Total Products</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-stone-900">{sampleProducts.length}</div>
              <p className="text-sm text-stone-600">In inventory</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">System Status</CardTitle>
            </CardHeader>
            <CardContent>
              <Badge variant="default" className="bg-green-100 text-green-800 border-green-200">
                Operational
              </Badge>
              <p className="text-sm text-stone-600 mt-2">All systems normal</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Recent Users</CardTitle>
              <CardDescription>Latest registered employees</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {sampleUsers.slice(0, 3).map(user => (
                  <div key={user.id} className="flex items-center justify-between p-3 border border-stone-200 rounded-lg">
                    <div>
                      <div className="font-medium text-stone-900">{user.name}</div>
                      <div className="text-sm text-stone-600">{user.department}</div>
                    </div>
                    <Badge variant={user.status === 'active' ? 'default' : 'secondary'}>
                      {user.status}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Product Overview</CardTitle>
              <CardDescription>Current inventory status</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {sampleProducts.slice(0, 3).map(product => (
                  <div key={product.id} className="flex items-center justify-between p-3 border border-stone-200 rounded-lg">
                    <div>
                      <div className="font-medium text-stone-900">{product.name}</div>
                      <div className="text-sm text-stone-600">${product.price}</div>
                    </div>
                    <Badge variant={
                      product.status === 'available' ? 'default' : 
                      product.status === 'out_of_stock' ? 'secondary' : 'outline'
                    }>
                      {product.status.replace('_', ' ')}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

const UsersPage: React.FC = () => {
  const { addNotification } = useAppContext();

  const handleEdit = (user: User): void => {
    addNotification({
      type: 'info',
      message: `Editing user: ${user.name}`
    });
  };

  const handleDelete = (userId: number): void => {
    addNotification({
      type: 'warning',
      message: `Deleting user with ID: ${userId}`
    });
  };

  const handleStatusToggle = (userId: number, status: User['status']): void => {
    addNotification({
      type: 'success',
      message: `User ${userId} status changed to: ${status}`
    });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-stone-900">User Management</h1>
          <p className="text-stone-600 mt-2">Manage employee accounts and permissions</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sampleUsers.map(user => (
            <UserCard
              key={user.id}
              user={user}
              onEdit={handleEdit}
              onDelete={handleDelete}
              onStatusToggle={handleStatusToggle}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const ProductsPage: React.FC = () => {
  const { addNotification } = useAppContext();

  const handleProductSelect = (product: Product): void => {
    addNotification({
      type: 'info',
      message: `Selected product: ${product.name}`
    });
  };

  const handleProductEdit = (product: Product): void => {
    addNotification({
      type: 'warning',
      message: `Editing product: ${product.name}`
    });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-stone-900">Product Inventory</h1>
          <p className="text-stone-600 mt-2">Manage products and stock levels</p>
        </div>

        <ProductList
          products={sampleProducts}
          onProductSelect={handleProductSelect}
          onProductEdit={handleProductEdit}
        />
      </div>
    </div>
  );
};

const FormPage: React.FC = () => {
  const { addNotification } = useAppContext();

  const handleFormSubmit = (data: any): void => {
    addNotification({
      type: 'success',
      message: 'Employee registration submitted successfully!'
    });
    console.log('Form data:', data);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="space-y-6">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-stone-900">Employee Registration</h1>
          <p className="text-stone-600 mt-2">Register new employees in the system</p>
        </div>

        <ValidatedForm onSubmit={handleFormSubmit} />
      </div>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <AppProvider>
      <Router>
        <div className="min-h-screen bg-stone-50">
          <Navigation />
          <main>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/users" element={<UsersPage />} />
              <Route path="/products" element={<ProductsPage />} />
              <Route path="/form" element={<FormPage />} />
            </Routes>
          </main>
        </div>
      </Router>
    </AppProvider>
  );
};

export default App;