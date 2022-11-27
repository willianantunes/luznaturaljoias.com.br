import * as React from "react"
import { graphql } from "gatsby"
import { SEO } from "../components/SEO"
import Layout from "../components/Layout"
import { InstagramAlt, WhatsappSquare } from "@styled-icons/boxicons-logos"
import { useEffect, useState } from "react"

const IndexPage = ({ data }) => {
  const { instagram, whatsappMobile, whatsappWeb } = data.site.siteMetadata.social
  const [isMobile, setIsMobile] = useState(true)

  useEffect(() => {
    console.log("Evaluating...")
    setIsMobile(/iPhone|iPad|iPod|Android/i.test(navigator.userAgent))
  }, [])

  return (
    <Layout>
      <section className={"text-center"}>
        <h1 className={"font-mono text-2xl"}>💍 O poder dos cristais 💎</h1>
        <p className={"font-serif text-lg md:w-[700px] mx-auto mt-10"}>
          Usar cristal ou ter um nas proximidades pode <strong>potencializar a nossa energia</strong> (cornalina laranja),{" "}
          <strong>purificar o ambiente</strong> (âmbar) e <strong>atrair riquezas</strong> (citrino). Os cristais podem mudar as
          nossas vidas. Quer mudar a sua ou de alguém?
        </p>
      </section>
      <aside className={"flex justify-center mt-10 gap-10"}>
        <div className={"w-[35px]"}>
          <a href={instagram} rel={"noreferrer noopener"} target={"_blank"}>
            <InstagramAlt />
          </a>
        </div>
        <div className={"w-[35px]"}>
          <a href={isMobile ? whatsappMobile : whatsappWeb} rel={"noreferrer noopener"} target={"_blank"}>
            <WhatsappSquare />
          </a>
        </div>
      </aside>
    </Layout>
  )
}

export const query = graphql`
  {
    site {
      siteMetadata {
        title
        description
        siteUrl
        social {
          instagram
          whatsappMobile
          whatsappWeb
        }
      }
    }
  }
`

export default IndexPage

export const Head = () => <SEO />
