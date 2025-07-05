import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Header, Footer } from '@/components/layout';
import { Home, About } from '@/pages';

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-hscreen flex flex-col bg-gray-50">
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            {}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
