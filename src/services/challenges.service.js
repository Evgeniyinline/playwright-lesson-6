import { test } from '@playwright/test';

const urlApi = 'https://apichallenges.eviltester.com';

export class ChallengesServices {
  constructor(request) {
    this.request = request;

  }
  async get (token) {
    return test.step ('GET /challenges', async() => {

    const responce = await this.request.get(`${urlApi}/challenges`, {
      headers: {
        "X-CHALLENGER": token
      },
    });
    const r = await responce.json();
    return r;
  
    })
  } 
}