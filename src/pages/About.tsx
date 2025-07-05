import { useLocation, useNavigate } from 'react-router-dom';
import { Button, Card } from '@/components/ui';
import { APP_NAME, VERSION, DESCRIPTION } from '@/constants';

export default function About() {
  const navigate = useNavigate();
  const location = useLocation();

  const techStack = [
    'React 19 + TypeScript',
    'Vite for fast development',
    'Tailwind CSS for styling',
    'Vitest for testing',
    'React Router for navigation',
    'ESLint + Prettier for code quality',
  ];

  const goBack = () => {
    navigate(-1); // ブラウザの戻るボタンと同じ
  };

  const goHome = () => {
    navigate('/');
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-2xl mx-auto space-y-6">
        <Card title="About">
          <div className="space-y-4">
            <div>
              <h2 className="text-xl font-semibold mb-2">{APP_NAME}</h2>
              <p className="text-gray-600 mb-4">Version {VERSION}</p>
              <p className="text-gray-700">{DESCRIPTION}</p>
            </div>

            <div>
              <h3 className="font-medium mb-3">Tech Stack</h3>
              <ul className="space-y-2">
                {techStack.map((tech, index) => (
                  <li key={index} className="flex items-center text-gray-600">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                    {tech}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-medium mb-3">Current Route Info</h3>
              <div className="bg-gray-50 p-3 rounded text-sm font-mono">
                <p>
                  <strong>Pathname:</strong> {location.pathname}
                </p>
                <p>
                  <strong>Search:</strong> {location.search || '(none)'}
                </p>
                <p>
                  <strong>Hash:</strong> {location.hash || '(none)'}
                </p>
              </div>
            </div>
          </div>
        </Card>

        <Card title="Features">
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <h4 className="font-medium mb-2">🎨 Modern UI</h4>
              <p className="text-sm text-gray-600">Tailwind CSSを使用したモダンなデザイン</p>
            </div>
            <div>
              <h4 className="font-medium mb-2">⚡ Fast Development</h4>
              <p className="text-sm text-gray-600">Viteによる高速な開発環境</p>
            </div>
            <div>
              <h4 className="font-medium mb-2">🔒 Type Safe</h4>
              <p className="text-sm text-gray-600">TypeScriptによる型安全性</p>
            </div>
            <div>
              <h4 className="font-medium mb-2">🧪 Testing Ready</h4>
              <p className="text-sm text-gray-600">Vitestでテスト環境構築済み</p>
            </div>
          </div>
        </Card>

        <Card title="Navigation Controls">
          <div className="flex gap-3 justify-center">
            <Button onClick={goBack}>← 戻る</Button>
            <Button onClick={goHome}>🏠 ホームへ</Button>
          </div>
        </Card>
      </div>
    </div>
  );
}
