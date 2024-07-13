import { Router } from "express";
import sessionsRouter from "./users.router.js";
import boardsRouter from "./board.router.js";
import listsRouter from "./list.router.js";
import cardsRouter from "./card.router.js";
import verifyToken from "../middlewares/verifyToken.mid.js";

const router = Router();

router.use("/sessions", sessionsRouter);
router.use("/boards", verifyToken, boardsRouter);
router.use("/lists", verifyToken, listsRouter);
router.use("/cards", verifyToken, cardsRouter);

export default router;