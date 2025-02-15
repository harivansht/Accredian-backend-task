import express from "express";
import { envVariables } from "@/config/env";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import referralRouter from "./routes/referral";

// create a new express application instance
const app = express();

// middlewares
app.use(helmet());
app.use(
  cors({
    origin: "*",
  })
);

app.use(morgan("combined"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// define a route handler for the default home page
app.get("/v1", (_req: express.Request, res: express.Response) => {
  res.send("API is running");
});

// route definitions below
app.use("/v1/referral", referralRouter);

// Export the app for Vercel
export default app;

// Start server locally when not in a serverless environment
if (process.env.NODE_ENV !== "production") {
  const port = envVariables.PORT || 3000;
  app.listen(port, () => {
    console.log(`Server started at http://localhost:${port}`);
  });
}
