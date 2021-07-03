import { Request, Response } from "express";
import CreateCourseService from "./CreateCourseService";

export function createCourse(request: Request, response: Response) {
  CreateCourseService.execute({
    name: "Node.js",
    educator: "Andre",
    duration: 10,
  });

  CreateCourseService.execute({
    name: "React",
    educator: "Gomes Mendes",
  });
  return response.send();
}
