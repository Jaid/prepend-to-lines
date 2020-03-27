import path from "path"

const indexModule = (process.env.MAIN ? path.resolve(process.env.MAIN) : path.join(__dirname, "..", "src")) |> require
const {default: prependToLines} = indexModule

it("should run", () => {
  const result = prependToLines("a\nb")
  expect(result).toStrictEqual("# a\n# b")
})

it("should run with custom line break conditions", () => {
  const text = "a\r\nb\nc"
  const lines = text.split(/[\n\r]+/)
  const result = prependToLines(lines, "* ")
  expect(result).toStrictEqual("* a\n* b\n* c")
})