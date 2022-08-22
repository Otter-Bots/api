import type { NextFunction, Request, Response } from "express";
import container from "../container";

export default function auth(req: Request, res: Response, next: NextFunction) {
  try {
    if (container.routes.get(req.route.path).secure) {
    const token = req.headers.authorization?.split(' ')[1];
    //const token = req.query.auth;
    if (String(token) == String(process.env.AUTH_KEY)) {
      next();
    } else {
      res.status(401).json(
        {
          error: "Unauthorized"
        });
    }
  } else {
    next();
  }
  } catch {
    res.status(401).json({
      error: 'Invalid Request'
    });
  }
};