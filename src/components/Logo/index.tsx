import React from 'react'
import { LogoProps } from 'types/api'
import * as S from './styles'

const Logo = ({url, alternativeText}: LogoProps) => <S.LogoWrapper src={`http://localhost:1337${url}`} alt={alternativeText} />

export default Logo
