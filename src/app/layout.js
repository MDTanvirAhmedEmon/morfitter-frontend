import { ConfigProvider } from "antd";
import "./globals.css";
import { mainTheme } from "@/theme/ant-theme";


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
