import path from "path"

const indexModule = (process.env.MAIN ? path.resolve(process.env.MAIN) : path.join(__dirname, "..", "src")) |> require
const {default: prependToLines} = indexModule

const input = "a\nb"

it("should run", () => {
  const result = prependToLines(input, "# ")
  expect(result).toStrictEqual("# a\n# b")
})

it("should run with a single argument", () => {
  const result = prependToLines(input)
  expect(result).toStrictEqual(input)
})

it("should run with custom line break conditions", () => {
  const text = "a\r\nb\nc"
  const lines = text.split(/[\n\r]+/)
  const result = prependToLines(lines, "* ")
  expect(result).toStrictEqual("* a\n* b\n* c")
})