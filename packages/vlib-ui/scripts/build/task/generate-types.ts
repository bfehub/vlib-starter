import { execa } from 'execa'
import { src, dest } from 'gulp'
import { root, outputEsm, outputCjs } from '../utils/paths'

export const generateTypes = async () => {
  await execa('vue-tsc', ['-p', 'tsconfig.declaration.json'], {
    cwd: root,
  })

  await new Promise((resolve) => {
    src('**/*.d.ts', { cwd: outputEsm })
      .pipe(dest(outputCjs))
      .on('end', resolve)
  })
}
