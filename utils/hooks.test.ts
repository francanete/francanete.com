import { renderHook } from "@testing-library/react-hooks";
import { useOnClickOutside } from "./hooks";

describe("useOnClickOutside", () => {
  it("should call the handler when clicking outside the ref element", () => {
    const ref = { current: document.createElement("div") };
    const handler = jest.fn();

    renderHook(() => useOnClickOutside(ref, handler));

    const event = new MouseEvent("mousedown", { bubbles: true });
    document.dispatchEvent(event);

    expect(handler).toHaveBeenCalled();
  });

  it("should not call the handler when clicking inside the ref element", () => {
    const ref = { current: document.createElement("div") };
    const handler = jest.fn();

    renderHook(() => useOnClickOutside(ref, handler));

    const event = new MouseEvent("mousedown", { bubbles: true });
    ref.current.dispatchEvent(event);

    expect(handler).not.toHaveBeenCalled();
  });
});
