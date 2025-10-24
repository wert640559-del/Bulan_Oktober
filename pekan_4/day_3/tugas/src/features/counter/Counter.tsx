import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import type { RootState } from '@/app/store';
import { increment, decrement, incrementByAmount, reset } from './counterSlice';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export function Counter() {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();
  const [incrementAmount, setIncrementAmount] = useState<string>('2');

  const handleIncrementByAmount = () => {
    const amount = Number(incrementAmount);
    if (!isNaN(amount)) {
      dispatch(incrementByAmount(amount));
    }
  };

  return (
    <Card className="w-[380px]">
      <CardHeader>
        <CardTitle>Counter State</CardTitle>
        <CardDescription>Manage counter state using Redux Toolkit</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-between mb-4">
          <Button variant="outline" size="icon" onClick={() => dispatch(decrement())}>-</Button>
          <span className="text-4xl font-bold">{count}</span>
          <Button variant="outline" size="icon" onClick={() => dispatch(increment())}>+</Button>
        </div>
        <div className="flex space-x-2 mb-4">
          <Input
            type="number"
            value={incrementAmount}
            onChange={(e) => setIncrementAmount(e.target.value)}
            className="text-center"
            placeholder="Enter amount"
          />
          <Button onClick={handleIncrementByAmount} variant="secondary">Add Amount</Button>
        </div>
        <Button onClick={() => dispatch(reset())} variant="destructive" className="w-full">Reset</Button>
      </CardContent>
    </Card>
  );
}
