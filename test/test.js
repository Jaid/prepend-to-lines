import path from "path"

const indexModule = (process.env.MAIN ? path.resolve(process.env.MAIN) : path.join(__dirname, "..", "src")) |> require
const {default: prependToLines} = indexModule

it("should run", () => {
  const result = prependToLines("a\nb")
  expect(result).toStrictEqual("# a\n# b")
})