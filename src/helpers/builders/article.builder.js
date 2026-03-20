import { faker } from "@faker-js/faker";

// генерация статьи 
export class ArticleBuilder {
  withTitle (title) {
    this.title = title ?? faker.lorem.sentence();
    return this;
  }

  withDescription (description) {
    this.description = description ?? faker.lorem.sentence();
    return this;
  }

  withBody (body) {
    this.body = body ?? faker.lorem.paragraph();
    return this;
  }

  withTag (tag) {
    this.tag = tag ?? faker.lorem.word();
    return this;
  }

  // сбор статьи
  build () {
    const result = {...this};
    return result;
  }
}
