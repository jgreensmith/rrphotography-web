/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getWLimages = /* GraphQL */ `
  query GetWLimages($id: ID!) {
    getWLimages(id: $id) {
      id
      imageName
      cName
      createdAt
      updatedAt
    }
  }
`;
export const listWLimagess = /* GraphQL */ `
  query ListWLimagess(
    $filter: ModelWLimagesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listWLimagess(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        imageName
        cName
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getCimages = /* GraphQL */ `
  query GetCimages($id: ID!) {
    getCimages(id: $id) {
      id
      imageName
      cName
      createdAt
      updatedAt
    }
  }
`;
export const listCimagess = /* GraphQL */ `
  query ListCimagess(
    $filter: ModelCimagesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCimagess(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        imageName
        cName
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getLSimages = /* GraphQL */ `
  query GetLSimages($id: ID!) {
    getLSimages(id: $id) {
      id
      imageName
      cName
      createdAt
      updatedAt
    }
  }
`;
export const listLSimagess = /* GraphQL */ `
  query ListLSimagess(
    $filter: ModelLSimagesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listLSimagess(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        imageName
        cName
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getBWimages = /* GraphQL */ `
  query GetBWimages($id: ID!) {
    getBWimages(id: $id) {
      id
      imageName
      cName
      createdAt
      updatedAt
    }
  }
`;
export const listBWimagess = /* GraphQL */ `
  query ListBWimagess(
    $filter: ModelBWimagesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBWimagess(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        imageName
        cName
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
