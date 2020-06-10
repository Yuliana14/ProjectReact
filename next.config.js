// must restart server whenever you make changes in next.config
module.exports = {
  env: {
    MONGO_SRV: "mongodb+srv://user:user3113@appscluster-ux9qy.mongodb.net/test?retryWrites=true&w=majority",
    JWT_SECRET: "<insert-jwt-secret>",
    CLOUDINARY_URL: "https://api.cloudinary.com/v1_1/dev14/image/upload",
    STRIPE_SECRET_KEY: "<insert-stripe-secret-key>"
  }
};
