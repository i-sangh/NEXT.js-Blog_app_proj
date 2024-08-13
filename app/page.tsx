import Posts from "./components/Posts"

export default function Home() {
  return (
    <main className="hello">
      <p className="mt-12 mb-12 text-3xl text-center text-gray-300">
        Welcome to the Blog app 👋&nbsp;
        <span className="whitespace-nowrap">
          Built on <span className="font-bold">Next.js</span>.
        </span>
      </p>
      <Posts />
      <p className="absolute bottom-4 right-4 text-gray-300" >Created by- Sanghapal Mangale [i-sangh]</p>
    </main>
  )
}