import { ConfigProvider } from "antd";
import "./globals.css";
import { mainTheme } from "@/theme/ant-theme";


export const metadata = {
  title: "Morfitter - Fit Your Life, Fit Your Schedule",
  description: "Morfitter - Fit Your Life, Fit Your Schedule",
};

export default function RootLayout({ children }) {
  return (
    <html>
      <ConfigProvider theme={mainTheme}>
        <body>
          {children}
        </body>
      </ConfigProvider>
    </html>
  );
}
