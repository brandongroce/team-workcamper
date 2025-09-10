export const metadata = {
  title: 'Work Camper Team – Adventure Poster',
  description: 'Brandon Groce & Amanda Bee Adcox – Work Camper Team',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="font-display">{children}</body>
    </html>
  );
}