import { Header, Footer } from '@/components/layout';
import { Home } from '@/pages';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <main>
        <Home />
      </main>
      <Footer />
    </div>
  );
}
