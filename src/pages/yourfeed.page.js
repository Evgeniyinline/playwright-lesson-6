export class YourFeedPage {
  constructor(page) 
  {
    this.page = page;
    this.profileName = page.locator('.dropdown-toggle');
     
  }
    getProfileName() {
    return this.profileName;
  }

}


