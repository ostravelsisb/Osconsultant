import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/countries/$slug")({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello "/countries/$slug"!</div>;
}
