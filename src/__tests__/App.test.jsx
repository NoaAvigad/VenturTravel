import React from "react";
import renderer from "react-test-renderer";
import NavigationTestUtils from "react-navigation/NavigationTestUtils";

import App from "../App";

describe("<App />", () => {
  beforeEach(() => {
    NavigationTestUtils.resetInternalState();
  });

  it("renders without crashing", () => {
    const rendered = renderer.create(<App />);
    expect(rendered).toBeTruthy();
  });
});
