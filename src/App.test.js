import { render, cleanup } from "@testing-library/react";
import { ProfileProvider } from "./contexts/ProfileContext";
import App from "./App";

afterEach(cleanup);

describe("should render App", () => {
  it("should render the App without the profiles", () => {
    let selectedIndex = -1,
      profiles = [];

    const { container } = render(
      <ProfileProvider value={(selectedIndex, profiles)}>
        <App />
      </ProfileProvider>
    );
    expect(container.querySelector(".App")[0]).toBe();
    expect(container.querySelector(".profile__modal")).toBeNull();
  });
});
