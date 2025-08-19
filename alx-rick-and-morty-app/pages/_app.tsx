import "@/app/globals.css";
import { ApolloProvider } from "@apollo/client";
import client from "@/graphql/apolloClient";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ApolloProvider client={client}>
          {children}
        </ApolloProvider>
      </body>
    </html>
  );
}