import { types } from 'react-bricks'
import { website } from 'react-bricks-ui'
import HeroUnit from './MyHeroUnit'
import Team from './Team'
import TeamMember from './TeamMember'

const bricks: types.Brick<any>[] = [
  ...website, // React Bricks UI
  HeroUnit, // Example custom brick
  Team,
  TeamMember,
  // Put here your other bricks...
]

export default bricks
