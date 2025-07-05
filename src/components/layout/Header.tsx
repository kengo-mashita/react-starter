import { APP_NAME } from '@/constants';

export default function Header() {
  return (
    <header className="border-b bg-white">
      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <h1 className="text-xl font-bold text-gray-900">{APP_NAME}</h1>
          <nav className="flex space-x-4">
            <a href="/" className="text-gray-600 hover:text-gray-900 transition-colors">
              Home
            </a>
            <a href="/about" className="text-gray-600 hover:text-gray-900 transition-colors">
              About
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
