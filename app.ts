import server from "./server";

const port = process.env.PORT || 4000;

const app = server.listen(port, () => {
  console.log(`Running on port ${port}`);
});

export default app;
