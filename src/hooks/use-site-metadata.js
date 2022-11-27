import { useStaticQuery, graphql } from "gatsby"

export function useSiteMetadata() {
  const { site } = useStaticQuery(
    graphql`
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
  )
  return site.siteMetadata
}
