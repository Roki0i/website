import NextChakraProvider from "../components/NextChakraProvider.jsx"
import { Container } from "@chakra-ui/react"
const Layout = ({ children }) => {
    <html>
        <head>
            <meta name="viewport" content="width=device-width,initial-scale=1" />
        </head>
        <body>
            <NextChakraProvider>
                <Container maxW="container.md">
                    {children}
                </Container>
            </NextChakraProvider>
        </body>
    </html>
}
export default Layout
