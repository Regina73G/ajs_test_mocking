import fetchData from "../http.js";
import { getLevel } from "../app.js";

jest.mock("../http");

beforeEach(() => {
  jest.resetAllMocks();
});

test("should return user level when response ok", () => {
  fetchData.mockReturnValue({ status: "ok", level: 5 });

  const result = getLevel(1);
  expect(result).toBe("Ваш текущий уровень: 5");
  expect(fetchData).toHaveBeenCalledWith("https://server:8080/user/1");
});

test("should return user level when response not ok", () => {
  fetchData.mockReturnValue({ status: "error"});

  const result = getLevel(2);
  expect(result).toBe("Информация об уровне временно недоступна");
  expect(fetchData).toHaveBeenCalledWith("https://server:8080/user/2");
});