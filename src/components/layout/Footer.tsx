import { APP_NAME, VERSION } from '@/constants';

export default function Footer() {
  return (
    <footer className="border-t bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <span className="py-6 text-center text-sm text-gray-600">
            &copy; {new Date().getFullYear()} {APP_NAME}. All rights reserved.
          </span>
          <span className="text-sm text-gray-600">Version {VERSION}</span>
        </div>
      </div>
    </footer>
  );
}
