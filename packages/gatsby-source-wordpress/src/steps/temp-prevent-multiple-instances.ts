import { Reporter } from "gatsby/reporter"
import { formatLogMessage } from "../utils/format-log-message"

let isWpSourcePluginInstalled = false

/**
 * Temporarily break the build when a user defines multiple source configs for the plugin
 * See https://github.com/gatsbyjs/gatsby-source-wordpress/issues/251
 * @param {Reporter} reporter
 */

export function tempPreventMultipleInstances({
  reporter,
}: {
  reporter: Reporter
}): void {
  if (isWpSourcePluginInstalled) {
    reporter.warn(
      formatLogMessage(`Multiple instances of this plugin may go all weird.`, {
        useVerboseStyle: true,
      })
    )
  } else {
    isWpSourcePluginInstalled = true
  }
}
