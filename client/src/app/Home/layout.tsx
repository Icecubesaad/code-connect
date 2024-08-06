import HomepageHeader from "@/components/HomepageHeader";
import "../globals.css";
import { ReduxProvider } from "../redux-provider";
import "./home.css";
export default function RootLayout({
  children,
  left,
  right,
}: Readonly<{
  children: React.ReactNode;
  left: React.ReactNode;
  right: React.ReactNode;
}>) {
  return (
    <ReduxProvider>
      <html lang="en">
        <body>
          <div className="flex flex-col w-full">
            <HomepageHeader/>
            <div className="flex flex-row w-full">
              <div className="w-[30%] h-screen flex justify-center">{left}</div>
              <div className="w-[85%] h-screen">{children}</div>
              <div className="w-[45%] h-screen">{right}</div>
            </div>
          </div>
        </body>
      </html>
    </ReduxProvider>
  );
}
