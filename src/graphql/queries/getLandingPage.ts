const GET_LANDING_PAGE = /* GraphQL */`
  fragment logo on LandingPage {
    logo {
      alternativeText
      url
    }
  }

  fragment sectionAboutProject on LandingPage {
    sectionAboutProject {
      title
      description
      image {
        alternativeText
        url
      }
    }
  }

  fragment header on LandingPage {
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
  }

  query GET_LANDING_PAGE {
    landingPage {
      ...header
      ...logo
      ...sectionAboutProject
    }
  }
`
export default GET_LANDING_PAGE;