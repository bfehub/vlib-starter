import { withInstall } from 'vant/es/utils'
import _<%= pascalCaseName %> from './src/<%= name %><%= type === 'sfc' ? '.vue' : '' %>'

export const <%= pascalCaseName %> = withInstall(_<%= pascalCaseName %>)
export default <%= pascalCaseName %>

export * from './src/props'
