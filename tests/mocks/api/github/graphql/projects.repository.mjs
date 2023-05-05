/**Mocked data */
export default function({faker, query, login = faker.internet.userName()}) {
  console.debug("metrics/compute/mocks > mocking graphql api result > projects/repository")
  return ({
    user: {
      repository: {
        projectV2: {
          name: "Repository project example",
          updatedAt: `${faker.date.recent()}`,
          body: faker.lorem.paragraph(),
          items: {
            get totalCount() {
              return this.nodes.length
            },
            nodes: new Array(faker.datatype.number(10)).fill(null).map(() => ({type: faker.helpers.arrayElement(["DRAFT_ISSUE", "ISSUE", "PULL_REQUEST", "REDACTED"]), fieldValues: {nodes: [{text: faker.lorem.sentence()}]}})),
          },
        },
      },
    },
  })
}
