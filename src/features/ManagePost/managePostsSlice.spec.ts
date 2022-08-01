import managePostsReducer, {
  ManagePostInitialState,
  toggleManagePost,
} from "./managePostSlice";
import { expect } from "@jest/globals";

describe("counter reducer", () => {
  const initialState: ManagePostInitialState = {
    isManagePostOpen: false,
    postIdToUpdate: null,
  };

  it("should handle toggle without post id", () => {
    const actual = managePostsReducer(initialState, toggleManagePost());
    expect(actual.isManagePostOpen).toEqual(true);
    expect(actual.postIdToUpdate).toBeNull();
  });

  it("should handle toggle with post id", () => {
    let actual = managePostsReducer(initialState, toggleManagePost(1));

    expect(actual.isManagePostOpen).toEqual(true);
    expect(actual.postIdToUpdate).toEqual(1);

    actual = managePostsReducer(actual, toggleManagePost());

    expect(actual.isManagePostOpen).toEqual(false);
    expect(actual.postIdToUpdate).toBeNull();
  });
});
