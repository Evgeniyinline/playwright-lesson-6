import { test, expect } from '@playwright/test';

const urlApi = 'https://apichallenges.eviltester.com';

test('получить токен доступа', async ({ request }) => {
  // получить ключ авторизации
  let response = await request.post(`${urlApi}/challenger`);
  // конвертировать хедер в json
  const headers = response.headers();

  // вытащить токен из хедера
  const key = headers['x-challenger'];
  const link = `${urlApi}${headers.location}`;

  console.log(link);
  console.log(key);
  expect(headers['x-challenger'].length).toEqual(36);

  response = await request.get(`${urlApi}/challenges`, {
    headers: {
      'X-CHALLENGER': key
    }
  });
  let r = await response.json();
  expect(r.challenges.length).toEqual(59);

  response = await request.post(`${urlApi}/todos`, {
    headers: {
      'X-CHALLENGER': key
    },
    // унести в билдер
    data: {
        "title":'test summary',
        "doneStatus":false,
        "description":"my description",
      
    }

  });
  r = await response.json();
  expect(r.title).toEqual('test summary');
  expect(r.doneStatus).toEqual(false);
  expect(r.description).toEqual('my description');
  expect(r.id).toBeTruthy();

});