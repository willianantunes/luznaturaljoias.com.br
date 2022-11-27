import React from "react"
import { Link } from "gatsby"
import { SEO } from "../components/SEO"
import Layout from "../components/Layout"

const NotFoundPage = () => {
  return (
    <Layout>
      <section className={"text-center"}>
        <h1 className={"font-mono text-2xl"}>
          Página não encontrada{" "}
          <span role="img" aria-label="Thinking face">
            🤔
          </span>
        </h1>
        <p className={"font-serif text-lg mt-10"}>
          Mas aqui uma página que você pode sempre encontrar -{" "}
          <Link to="/" className={"underline"}>
            nossa página inicial
          </Link>
        </p>
      </section>
    </Layout>
  )

  // return (
  //   <main style={pageStyles}>
  //     <h1 style={headingStyles}>Page not found</h1>
  //     <p style={paragraphStyles}>
  //       Sorry 😔, we couldn’t find what you were looking for.
  //       <br />
  //       {process.env.NODE_ENV === "development" ? (
  //         <>
  //           <br />
  //           Try creating a page in <code style={codeStyles}>src/pages/</code>.
  //           <br />
  //         </>
  //       ) : null}
  //       <br />
  //       <Link to="/">Go home</Link>.
  //     </p>
  //   </main>
  // )
}

export default NotFoundPage

export const Head = () => <SEO title="404: Página não encontrada" />
