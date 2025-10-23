// src/components/ValidatedForm.tsx
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company: string;
  position: string;
  department: string;
}

interface FormErrors {
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  company?: string;
  position?: string;
  department?: string;
}

interface ValidatedFormProps {
  onSubmit: (data: FormData) => void;
  loading?: boolean;
}

const ValidatedForm: React.FC<ValidatedFormProps> = ({ onSubmit, loading = false }) => {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    position: '',
    department: ''
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Set<keyof FormData>>(new Set());

  const validateField = (name: keyof FormData, value: string): string | undefined => {
    switch (name) {
      case 'firstName':
      case 'lastName':
        if (!value.trim()) return 'This field is required';
        if (value.length < 2) return 'Must be at least 2 characters';
        break;
      case 'email':
        if (!value.trim()) return 'Email is required';
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return 'Invalid email format';
        break;
      case 'phone':
        if (!value.trim()) return 'Phone number is required';
        if (!/^\+?[\d\s-()]+$/.test(value)) return 'Invalid phone number';
        break;
      case 'company':
      case 'position':
      case 'department':
        if (!value.trim()) return 'This field is required';
        break;
    }
  };

  const handleChange = (field: keyof FormData) => (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setFormData(prev => ({ ...prev, [field]: value }));

    if (touched.has(field)) {
      const error = validateField(field, value);
      setErrors(prev => ({ ...prev, [field]: error }));
    }
  };

  const handleBlur = (field: keyof FormData) => () => {
    setTouched(prev => new Set(prev).add(field));
    const error = validateField(field, formData[field]);
    setErrors(prev => ({ ...prev, [field]: error }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate all fields
    const newErrors: FormErrors = {};
    let hasErrors = false;

    (Object.keys(formData) as Array<keyof FormData>).forEach(field => {
      const error = validateField(field, formData[field]);
      if (error) {
        newErrors[field] = error;
        hasErrors = true;
      }
    });

    setErrors(newErrors);

    if (!hasErrors) {
      onSubmit(formData);
    }
  };

  const isFieldValid = (field: keyof FormData) => !errors[field] && touched.has(field);

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle>Employee Registration</CardTitle>
        <CardDescription>
          Please fill in the employee details below. All fields are required.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="firstName">First Name</Label>
              <Input
                id="firstName"
                value={formData.firstName}
                onChange={handleChange('firstName')}
                onBlur={handleBlur('firstName')}
                className={errors.firstName ? 'border-red-500' : isFieldValid('firstName') ? 'border-green-500' : ''}
              />
              {errors.firstName && <p className="text-red-500 text-sm">{errors.firstName}</p>}
            </div>

            <div className="space-y-2">
              <Label htmlFor="lastName">Last Name</Label>
              <Input
                id="lastName"
                value={formData.lastName}
                onChange={handleChange('lastName')}
                onBlur={handleBlur('lastName')}
                className={errors.lastName ? 'border-red-500' : isFieldValid('lastName') ? 'border-green-500' : ''}
              />
              {errors.lastName && <p className="text-red-500 text-sm">{errors.lastName}</p>}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={handleChange('email')}
                onBlur={handleBlur('email')}
                className={errors.email ? 'border-red-500' : isFieldValid('email') ? 'border-green-500' : ''}
              />
              {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number</Label>
              <Input
                id="phone"
                value={formData.phone}
                onChange={handleChange('phone')}
                onBlur={handleBlur('phone')}
                className={errors.phone ? 'border-red-500' : isFieldValid('phone') ? 'border-green-500' : ''}
              />
              {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="company">Company</Label>
            <Input
              id="company"
              value={formData.company}
              onChange={handleChange('company')}
              onBlur={handleBlur('company')}
              className={errors.company ? 'border-red-500' : isFieldValid('company') ? 'border-green-500' : ''}
            />
            {errors.company && <p className="text-red-500 text-sm">{errors.company}</p>}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="position">Position</Label>
              <Input
                id="position"
                value={formData.position}
                onChange={handleChange('position')}
                onBlur={handleBlur('position')}
                className={errors.position ? 'border-red-500' : isFieldValid('position') ? 'border-green-500' : ''}
              />
              {errors.position && <p className="text-red-500 text-sm">{errors.position}</p>}
            </div>

            <div className="space-y-2">
              <Label htmlFor="department">Department</Label>
              <Input
                id="department"
                value={formData.department}
                onChange={handleChange('department')}
                onBlur={handleBlur('department')}
                className={errors.department ? 'border-red-500' : isFieldValid('department') ? 'border-green-500' : ''}
              />
              {errors.department && <p className="text-red-500 text-sm">{errors.department}</p>}
            </div>
          </div>

          <Button 
            type="submit" 
            className="w-full" 
            disabled={loading}
          >
            {loading ? 'Submitting...' : 'Register Employee'}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default ValidatedForm;