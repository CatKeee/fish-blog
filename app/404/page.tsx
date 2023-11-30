import Link from "next/link"

export const Custom404 = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="text-center">
        <h1 className="text-6xl font-bold">404</h1>
        <h2 className="text-xl font-bold">Page Not Found</h2>
        <p className="text-lg">
          The page you are looking for does not exist or has been moved.
        </p>
        <Link href="/">
          <a className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Go to Homepage
          </a>
        </Link>
      </div>
    </div>
  )
}
