import { execa } from 'execa'
import { src, dest } from 'gulp'
import { root, outputEsm, outputCjs } from '../utils/paths'

export const generateTypes = async () => {
  await execa('vue-tsc', ['-p', 'tsconfig.declaration.json'], {
    cwd: root,
  })

  return src(`${outputEsm}/**/*.d.ts`).pipe(dest(`${outputCjs}`))
}
