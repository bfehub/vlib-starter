import fs from 'fs-extra'
import { output, outputEsm, outputCjs } from '../utils/paths'

export const clean = async () => {
  await Promise.all([
    fs.remove(output),
    fs.remove(outputEsm),
    fs.remove(outputCjs),
  ])
}
