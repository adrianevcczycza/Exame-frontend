import "./globals.css";

export const metadata = {
  title: "EventHub",
  description: "Encontre atividades, cursos e workshops disponíveis.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
