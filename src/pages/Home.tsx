import { useState } from 'react';
import { Button, Card } from '@/components/ui';
import { useLocalStorage } from '@/hooks';

export default function Home() {
  const [count, setCount] = useLocalStorage<number>('count', 0);
  const [loading, setLoading] = useState(false);

  const handleIncrement = async () => {
    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 500));
    setCount(count + 1);
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="mx-auto max-w-md">
        <Card title="Counter App">
          <div className="text-center">
            <p className="mb-6 text-2xl font-bold">Count: {count}</p>

            <div className="flex gap-2 justify-center">
              <Button onClick={handleIncrement} disabled={loading}>
                {loading ? 'Incrementing...' : 'Increment'}
              </Button>
              <Button onClick={() => setCount(count - 1)} disabled={loading}>
                Decrement
              </Button>
              <Button onClick={() => setCount(0)} disabled={loading}>
                Reset
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
