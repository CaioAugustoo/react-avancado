const GET_LANDING_PAGE = /* GraphQL */`
  query GET_LANDING_PAGE {
    landingPage {
      header {
        title
        description
        button {
          label
          url
        }
        image {
          alternativeText
          url
        }
      }
      logo {
        alternativeText
        url
      }
    }
  }
`
export default GET_LANDING_PAGE;