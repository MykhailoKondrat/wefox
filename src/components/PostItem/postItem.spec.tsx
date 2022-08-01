import {fireEvent, render, screen} from '@testing-library/react';
import PostItem from "./index";
import { expect, jest } from "@jest/globals";
import React from "react";

describe("Components / PostItem", () => {
  it("should render correctly", () => {
    const { asFragment } = render(
      <PostItem
        title={"test"}
        content={"test"}
        lat={'123'}
        long={'123'}
        image_url={'image-url'}
        toggleEditMode={() => {}}
        deletePost={() => {}}
      />
    );
    expect(asFragment()).toMatchSnapshot();
  });
  it("Should trigger edit callback on click to edit button", () => {
    const spyEdit = jest.fn()
    render(
      <PostItem
        title={"test"}
        content={"test"}
        toggleEditMode={spyEdit}
        deletePost={() => {}}
      />
    );
    fireEvent.click(screen.getByText(/edit/i))
    expect(spyEdit).toHaveBeenCalled()
  })
  it("Should trigger  delete callback on click to  delete button", () => {
    const spyDelete = jest.fn()
    render(
      <PostItem
        title={"test"}
        content={"test"}
        toggleEditMode={() => {}}
        deletePost={spyDelete}
      />
    );
    fireEvent.click(screen.getByText(/delete/i))
    expect(spyDelete).toHaveBeenCalled()
  })
});
