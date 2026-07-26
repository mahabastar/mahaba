import { Outlet, createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/travel-journal")({
  component: TravelJournalLayout,
});

function TravelJournalLayout() {
  return <Outlet />;
}
