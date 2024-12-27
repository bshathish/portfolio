import { Inter, Poppins, Kanit, Josefin_Sans } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const poppin = Josefin_Sans({  weight: "400" });

export const metadata = {
  title: "shathish",
  description: "shathish_portfolio",
  icons:{
    icon:['/favicon.ico?v=4'],
    apple:['/apple-touch-icon.png?v=4'],
    shortcut:['/apple-touch-icon.png']
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppin.className}>
          {children}
      </body>
    </html>
  );
}
