import prependToLines from "prepend-to-lines"

const text = "I\nwant\nto\nbe\na\nMarkdown\nlist"
const result = prependToLines(text, "- ")

const linesArray = ["Hello", "world"]
const result2 = prependToLines(linesArray, "x")

const result3 = prependToLines("Without linebreaks", "* ")