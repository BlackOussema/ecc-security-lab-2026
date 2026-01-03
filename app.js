const { ApolloServer, gql } = require('apollo-server-express');
const express = require('express');
const path = require('path');
const jwt = require('jsonwebtoken');

const CONFIG = {
    PORT: process.env.PORT || 4000,
    JWT_SECRET: "ECC-BETA-2026"
};

const typeDefs = gql`
  type SystemStatus { version: String, environment: String }
  type Query { status: SystemStatus, getInternalFlag: String }
`;

const resolvers = {
  Query: {
    status: () => ({ version: "1.0.4-stable", environment: "production-beta" }),
    getInternalFlag: (parent, args, context) => {
      if (!context.auth || context.auth.role !== 'admin') {
        throw new Error("Forbidden: Administrative privileges required.");
      }
      return "ECC_CTF{JWT_Cr4ck_4nd_Gr4phQL_Pwned}";
    }
  }
};

async function startServer() {
    const app = express();
    const server = new ApolloServer({
        typeDefs,
        resolvers,
        introspection: true,
        context: ({ req }) => {
            const header = req.headers.authorization || '';
            if (header.startsWith('Bearer ')) {
                const token = header.split(' ')[1];
                try {
                    const decoded = jwt.verify(token, CONFIG.JWT_SECRET);
                    return { auth: decoded };
                } catch (err) { return null; }
            }
        }
    });

    await server.start();
    server.applyMiddleware({ app, path: '/graphql' });

    app.get('/', (req, res) => {
        res.sendFile(path.join(__dirname, 'index.html'));
    });

    app.listen(CONFIG.PORT, () => {
        console.log(`[SYSTEM] Lab is live on port ${CONFIG.PORT}`);
    });
}

startServer();