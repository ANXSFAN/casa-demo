import Link from "next/link";

export default function NotFound() {
  return (
    <div className="pt-20 min-h-screen flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="font-serif text-6xl font-bold text-olive-800 mb-4">404</h1>
        <p className="text-stone-custom-600 mb-8">Página no encontrada</p>
        <Link
          href="/"
          className="inline-flex items-center bg-olive-600 hover:bg-olive-700 text-white px-6 py-3 rounded-full font-medium transition-colors"
        >
          Volver al inicio
        </Link>
      </div>
    </div>
  );
}
