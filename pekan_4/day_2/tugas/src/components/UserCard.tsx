// src/components/UserCard.tsx
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export interface User {
  id: number;
  name: string;
  email: string;
  role: 'admin' | 'user' | 'moderator';
  department: string;
  status: 'active' | 'inactive';
  joinDate: string;
}

interface UserCardProps {
  user: User;
  onEdit: (user: User) => void;
  onDelete: (userId: number) => void;
  onStatusToggle: (userId: number, status: User['status']) => void;
}

const UserCard: React.FC<UserCardProps> = ({ 
  user, 
  onEdit, 
  onDelete, 
  onStatusToggle 
}) => {
  const handleStatusToggle = (): void => {
    onStatusToggle(user.id, user.status === 'active' ? 'inactive' : 'active');
  };

  return (
    <Card className="w-full max-w-md">
      <CardHeader className="pb-3">
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-lg">{user.name}</CardTitle>
            <CardDescription>{user.email}</CardDescription>
          </div>
          <Badge 
            variant={user.status === 'active' ? 'default' : 'secondary'}
            className={
              user.status === 'active' 
                ? 'bg-green-100 text-green-800 border-green-200' 
                : 'bg-stone-100 text-stone-600'
            }
          >
            {user.status}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex justify-between text-sm">
          <span className="text-stone-600">Role</span>
          <Badge variant="outline">{user.role}</Badge>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-stone-600">Department</span>
          <span className="font-medium">{user.department}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-stone-600">Join Date</span>
          <span className="font-medium">{new Date(user.joinDate).toLocaleDateString()}</span>
        </div>
        <div className="flex space-x-2 pt-2">
          <Button 
            variant="outline" 
            size="sm" 
            onClick={() => onEdit(user)}
            className="flex-1"
          >
            Edit
          </Button>
          <Button 
            variant={user.status === 'active' ? 'outline' : 'secondary'}
            size="sm"
            onClick={handleStatusToggle}
            className="flex-1"
          >
            {user.status === 'active' ? 'Deactivate' : 'Activate'}
          </Button>
          <Button 
            variant="destructive" 
            size="sm" 
            onClick={() => onDelete(user.id)}
          >
            Delete
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default UserCard;