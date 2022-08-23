import { series, parallel } from 'gulp'
import {
  clean,
  buildModules,
  buildFull,
  buildStyle,
  generateTypes,
} from './task'

export default series(
  clean,
  parallel(buildModules, buildFull, buildStyle, generateTypes)
)
