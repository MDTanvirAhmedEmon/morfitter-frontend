
export default function MainLayout({ children }) {
  return (
    <html>
      <body>
        <h2>Header</h2>
        {children}
      </body>
    </html>
  );
}
