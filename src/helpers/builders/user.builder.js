import { faker } from "@faker-js/faker";

// генерация пользователя
export class UserBuilder {

  withEmail (email) {
    this.email = email ?? faker.internet.email();
    return this;

  }

  withPassword () {
    this.password = faker.internet.password();
    return this;

  }

  withUsername () {
    this.username = faker.person.lastName();
    return this;

  }

  withBio () {
    this.bio = faker.lorem.sentence();
    return this;

  }

  // сбор пользователя
  build () {
    const result = {...this};
    return result;

  }
}