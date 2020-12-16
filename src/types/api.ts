export type HeaderProps = {
  title: string
  description: string
  button: Button
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

export type Button = {
  label: string
  url: string
}

export type PrincingBox = {
  totalPrice: number
  numberInstallments: number
  priceInstallment: number
  benefits: string
  button: Button
}

export type SocialLink = {
  title: string
  url: string
}

export type Author = {
  key?: string
  name: string
  role: string
  description: string
  photo: LogoProps
  socialLinks: SocialLink[]
}

export type SectionAbout = {
  title: string
  authors: Author[]
  socialLinks: SocialLink[]
}

export type LandingPageProps = {
  logo: LogoProps
  header: HeaderProps
  sectionAboutProject: SectionAboutProjects
  sectionTech: SectionTechs
  sectionConcepts: SectionConcept
  sectionModules: SectionModule
  sectionAgenda: SectionAgendaProp
  pricingBox: PrincingBox
  sectionAboutUs: SectionAbout
}