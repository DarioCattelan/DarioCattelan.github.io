import { QuartzTransformerPlugin } from "../types"

export const RemoveLocalCallouts: QuartzTransformerPlugin = () => ({
  name: "RemoveLocalCallouts",

  textTransform(_ctx, src) {
    // Remove each [!local] callout, including its quoted content.
    return src.replace(
      /^> ?\[!local\][^\r\n]*(?:\r?\n>.*)*/gim,
      "",
    )
  },
})