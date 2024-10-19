import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold mb-8">Welcome to Nebulo</h1>
      <p className="text-xl mb-8">Discover personalized playlists from your favorite artists</p>
      <Link href="/login" className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
        Get Started
      </Link>
    </main>
  )
}