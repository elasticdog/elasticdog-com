import { componentRegistry } from "./quartz/components/registry"
import { loadQuartzConfig, loadQuartzLayout } from "./quartz/plugins/loader/config-loader"

componentRegistry.setOptionOverrides("@quartz-community/footer", {
  message: `Copyright &copy; 2003&ndash;${new Date().getFullYear()}&nbsp;&nbsp;<a href="/abs">Aaron Bull Schaefer</a>`,
})

const config = await loadQuartzConfig()
export default config
export const layout = await loadQuartzLayout()
