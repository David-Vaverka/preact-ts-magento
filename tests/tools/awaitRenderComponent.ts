import { ComponentChild } from "preact";
import { render, RenderOptions, RenderResult } from "@testing-library/preact";
import { act } from "@testing-library/preact-hooks";

export const awaitRenderComponent = async (
  ui: ComponentChild,
  options?: Omit<RenderOptions, "queries">
) => {
  let component: RenderResult | null = null;
  await act(async () => {
    component = await render(ui, options);
  });

  return component as unknown as RenderResult;
}
