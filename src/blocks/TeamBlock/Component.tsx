import React from 'react'
import type { TeamBlock as TeamBlockProps } from '@/payload-types'
import TeamContent from './oldteam'

export const TeamBlock: React.FC<TeamBlockProps> = ({}) => {
  return <TeamContent />
}
