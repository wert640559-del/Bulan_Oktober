import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import type { RootState } from '@/app/store';
import { fetchUsers } from './usersSlice';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export function Users() {
  const { list: users, status, error } = useSelector((state: RootState) => state.users);
  const dispatch = useDispatch();

  useEffect(() => { if (status === 'idle') dispatch(fetchUsers()); }, [status, dispatch]);

  let content: React.ReactNode;
  if (status === 'loading') {
    content = <div className="flex items-center justify-center py-8"><div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div><span className="ml-2">Loading users...</span></div>;
  } else if (status === 'succeeded') {
    content = <div className="space-y-3 max-h-80 overflow-y-auto">{users.map(u => (<div key={u.id} className="flex items-center justify-between p-3 border rounded-lg hover:bg-slate-50 transition-colors"><div className="flex-1 min-w-0"><p className="font-medium text-sm truncate">{u.name}</p><p className="text-xs text-muted-foreground truncate">{u.email}</p></div><Badge variant="secondary" className="ml-2 flex-shrink-0">{u.company.name}</Badge></div>))}</div>;
  } else if (status === 'failed') {
    content = <div className="text-center py-4"><div className="text-destructive mb-2">Error: {error}</div><Button onClick={() => dispatch(fetchUsers())} variant="outline">Try Again</Button></div>;
  }

  return (
    <Card className="w-[480px]">
      <CardHeader>
        <CardTitle>User Management</CardTitle>
        <CardDescription>
          {status === 'idle' && 'Ready to fetch users'}
          {status === 'loading' && 'Fetching users...'}
          {status === 'succeeded' && `Successfully loaded ${users.length} users`}
          {status === 'failed' && 'Failed to load users'}
        </CardDescription>
      </CardHeader>
      <CardContent>
        {content}
        <div className="flex justify-between items-center mt-4 pt-4 border-t">
          <Button onClick={() => dispatch(fetchUsers())} disabled={status === 'loading'} variant="outline" size="sm">{status === 'loading' ? 'Loading...' : 'Refresh Users'}</Button>
          <Badge variant={status === 'succeeded' ? 'default' : status === 'failed' ? 'destructive' : 'secondary'}>Status: {status}</Badge>
        </div>
      </CardContent>
    </Card>
  );
}
