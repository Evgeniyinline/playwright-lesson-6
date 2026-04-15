import { test, expect } from "@playwright/test";
import { Api } from "@/services/api.services.js";

const urlApi = "https://apichallenges.eviltester.com";

test("setup получить токен доступа", async ({ request }) => {
  // получить ключ авторизации
  const api = new Api(request);
  const token = await api.challenger.post();
  let responce = await api.challenges.get(token);

  expect(responce.challenges.length).toEqual(59);
});


