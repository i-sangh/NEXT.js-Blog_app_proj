import './globals.css'
import Navbar from './components/Navbar'
import MyProfilePic from './components/MyProfilePic'

export const metadata = {
  title: "Next.JS Blog App",
  description: 'Created by Sanghapal Mangale',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="mainBackground">
        <Navbar />
        <MyProfilePic />
        {children}
      </body>
    </html>
  )
}