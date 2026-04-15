import { test } from '@playwright/test';

const urlApi = 'https://apichallenges.eviltester.com';

export class ChallengerServices {
  constructor(request) {
    this.request = request;

  }
  async post () {
    return test.step ('POST /challenger', async() => {

    const responce = await this.request.post(`${urlApi}/challenger`);
    const headers = responce.headers();
    const key = headers['x-challenger'];

    const link = `${urlApi}${headers.location}`;
    console.log(link);
    return key;
          
    })
  } 
}