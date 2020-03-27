/** @module prepend-to-lines */

import {isString} from "lodash"

const prependToLines = (string, linePrefix = "# ") => {
  if (isString(string)) {
    return string.replace(/^(.*)$/gm, line => `${linePrefix}${line}`)
  } else if (Array.isArray(string)) {
    return string.map(line => `${linePrefix}${line}`).join("\n")
  } else {
    return prependToLines(String(string))
  }
}

/**
 * Returns the given string with an additional prefix on each line
 * @param {string} string The string that may contain "\n" and "\r"
 * @param {string} linePrefix The prefix that will be added to each line of `string`
 * @returns {string} New string
 */
export default prependToLines