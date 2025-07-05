import { Card } from '@/components/ui';
import { APP_NAME, VERSION } from '@/constants';

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="mx-auto max-w-2xl">
        <Card title="About">
          <div className="space-y-4">
            <p>
              <strong>{APP_NAME}</strong> v{VERSION}
            </p>
            <p>This is a simple React starter template built with:</p>
            <ul className="list-disc list-inside space-y-1 text-gray-600">
              <li>React 19 + TypeScript</li>
              <li>Vite for fast development</li>
              <li>Tailwind CSS for styling</li>
              <li>Vitest for testing</li>
            </ul>
          </div>
        </Card>
      </div>
    </div>
  );
}
