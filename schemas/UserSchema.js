// @ts-check
import graphQL = require("./graphql-url");

class UserSchema {
  auth(data) {
    return graphQL.gql`
    auth(username: data.username, password: data.password) {
      token
      user {
        id
        name
        image
        gravatar
        isAdmin
        isSuperuser
        isActive
      }
    }
    `
  }
}

export default new UserSchema();