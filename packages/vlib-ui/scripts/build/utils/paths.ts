import { resolve } from 'path'

// root
export const root = resolve(__dirname, '..', '..', '..')
export const compRoot = resolve(root, 'src')

// output
export const output = resolve(root, 'dist')
export const outputEsm = resolve(root, 'es')
export const outputCjs = resolve(root, 'lib')

// package
export const compPackage = resolve(root, 'package.json')
