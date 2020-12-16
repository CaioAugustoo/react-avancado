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

export type Concept = {
  title: string
}

export type SectionConcept = {
  title: string
  concepts: Concept[]
}

export type Modules = {
  title: string
  subtitle: string
  description: string
}

export type SectionModule = {
  title: string
  modules: Modules[]
}

export type SectionAgendaProp = {
  title: string
  description: string
}

export type LandingPageProps = {
  logo: LogoProps
  header: HeaderProps
  sectionAboutProject: SectionAboutProjects
  sectionTech: SectionTechs
  sectionConcepts: SectionConcept
  sectionModules: SectionModule
  sectionAgenda: SectionAgendaProp
}