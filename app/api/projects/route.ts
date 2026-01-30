import { NextResponse } from "next/server";
import { projectsSource } from "@/lib/source";
import { serializeProjects } from "@/utils/serializer";

export const dynamic = "force-static";

export const GET = () => {
  const projects = projectsSource.getPages();

  const serializedProjects = serializeProjects(projects);

  return NextResponse.json({ data: serializedProjects });
};
