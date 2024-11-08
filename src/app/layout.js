'use client'
import { Open_Sans } from 'next/font/google'
import "./globals.css";
const opensans = Open_Sans({ subsets: ['latin'] })
import { AppProvider } from '@/app/context/AppContext'

// export const metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body
				className={`${opensans.className} antialiased`}
			>
				<AppProvider>
					{children}
				</AppProvider>
			</body>
		</html>
	);
}
