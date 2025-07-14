import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFoundPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-6 py-12">
      <div className="max-w-md w-full text-center space-y-6">
        <h1 className="text-6xl font-extrabold text-indigo-600">404</h1>
        <h2 className="text-2xl font-bold text-gray-900">Page not found</h2>
        <p className="text-gray-600">
          The page you're looking for doesn’t exist or has been moved.
        </p>
        <Link
          to="/"
          className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Go back home
        </Link>
      </div>
    </div>
  );
}