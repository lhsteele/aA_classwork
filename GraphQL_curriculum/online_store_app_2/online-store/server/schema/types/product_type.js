const mongoose = require("mongoose");
const graphql = require('graphql');
const { GraphQLObjectType, GraphQLString, GraphQLID, GraphQLInt } = graphql;
const CategoryType = require('./category_type')
const Category = mongoose.model("category");

const ProductType = new GraphQLObjectType({
  name: "ProductType",
  // remember we wrap the fields in a thunk to avoid circular dependency issues
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString }, 
    category: { 
      type: CategoryType,
      resolve(parentValue) {
        return Category.findById(parentValue.category)
          .then(category => category)
      } 
    },
    description: { type: GraphQLString },
    weight: { type: GraphQLInt }
  })
});

module.exports = ProductType;