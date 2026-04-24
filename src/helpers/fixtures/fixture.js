import { test as base } from "@playwright/test";
import { App } from "../../pages/app.page.js";

export const test = base.extend({

  app: async ({page}, use) => {
// открытие стартовой страницы
    const app = new App(page);
    await app.mainPage.open();
    await use(app);

  },
  
}); 