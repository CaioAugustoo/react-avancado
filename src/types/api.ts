export type HeaderProps = {
  title: string
  description: string
  button: {
    label: string,
    url: string
  }
  image: LogoProps
}

export type LogoProps = {
  alternativeText: string
  url: string
}

export type LandingPageProps = {
  logo: LogoProps
  header: HeaderProps
  sectionAboutProject: SectionAboutProjects
}

export type SectionAboutProjects = {
  title: string
  description: string
  image: LogoProps 
}