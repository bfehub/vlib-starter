import path from 'path'
import prompts from 'prompts'
import fs from 'fs-extra'
import _ from 'lodash-es'

/**
 * 校验组件名称是否符合短横线命名
 */
const checkComponentName = (name: string) => {
  return !/^[a-z][a-z|-]*[a-z]$/.test(name)
}

/**
 * 校验组件是否已经创建
 */
const checkComponentExist = (name: string) => {
  return fs.existsSync(path.resolve(process.cwd(), `src/${name}`))
}

/**
 * 获取需要创建的文件
 */
const getCreatedFiles = (name: string, type?: string) => {
  return [
    {
      file: 'index.ts',
      template: 'index.ts.tpl',
    },
    {
      file: 'README.md',
      template: 'README.md.tpl',
    },

    {
      file: 'src/props.ts',
      template: 'src.props.ts.tpl',
    },
    type === 'tsx'
      ? {
          file: `src/${name}.tsx`,
          template: 'src.component.tsx.tpl',
        }
      : {
          file: `src/${name}.vue`,
          template: 'src.component.vue.tpl',
        },
    {
      file: 'style/index.scss',
      template: 'style.index.scss.tpl',
    },
    {
      file: '__demos__/basic.vue',
      template: '__demos__.basic.vue.tpl',
    },
    {
      file: `__tests__/${name}.test.tsx`,
      template: '__tests__.component.test.tsx.tpl',
    },
  ]
}

/**
 * 添加一个组件
 */
const addComponent = async (name: string, type?: string) => {
  getCreatedFiles(name, type).forEach(async (item) => {
    // 读取模板
    const tplPath = path.resolve(__dirname, `./template/${item.template}`)
    let data = await fs.readFile(tplPath, 'utf-8')

    // 编译模板
    const compiled = _.template(data)
    data = compiled({
      name,
      type,
      camelCaseName: _.camelCase(name),
      pascalCaseName: _.upperFirst(_.camelCase(name)),
    })

    // 输入模板
    const outputPath = path.resolve(process.cwd(), `src/${name}/${item.file}`)
    await fs.outputFile(outputPath, data)
    console.log(`已创建：${outputPath}`)
  })
}

/**
 * init
 */
const init = async () => {
  const result = await prompts([
    {
      type: 'text',
      name: 'name',
      message: '输入组件名称',
      validate: (name) => {
        if (checkComponentName(name)) {
          return '组件名称请使用(kebab-case)方式命名！'
        }
        if (checkComponentExist(name)) {
          return `组件库中已经存在名为${name}的组件！`
        }
        return true
      },
    },
    {
      type: 'select',
      name: 'type',
      message: '选择组件模板',
      choices: [
        { title: 'sfc', value: 'sfc' },
        { title: 'tsx', value: 'tsx' },
      ],
    },
  ])

  if (!result.name) return
  await addComponent(result.name, result.type)
}

init()
