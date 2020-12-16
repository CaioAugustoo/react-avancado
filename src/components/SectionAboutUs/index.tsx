import React from 'react'

import Heading from 'components/Heading'
import Container from 'components/Container'
import ProfileCard from 'components/ProfileCard'

import * as S from './styles'
import { SectionAbout } from 'types/api'

const SectionAboutUs = ({title, authors, socialLinks}: SectionAbout) => (
  <Container>
    <Heading reverseColor>{title}</Heading>

    <S.Content>
      {authors.map((profile) => (
        <ProfileCard
          key={profile.name}
          name={profile.name}
          role={profile.role}
          description={profile.description}
          photo={profile.photo}
          socialLinks={profile.socialLinks}
        />
      ))}
    </S.Content>
  </Container>
)

export default SectionAboutUs
