import { Outlet, createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/experiences")({
  component: ExperiencesLayout,
});

function ExperiencesLayout() {
  return <Outlet />;
}
