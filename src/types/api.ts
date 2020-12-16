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
  sectionTech: SectionTechs
}

export type SectionAboutProjects = {
  title: string
  description: string
  image: LogoProps 
}

export type TechIcon = {
  title: string
  icon: {
    url: string
  }
}

export type SectionTechs = {
  title: string
  techIcons: TechIcon[]
}