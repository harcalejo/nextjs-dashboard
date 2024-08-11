import Form from "@/app/ui/projects/create-form";
import Breadcrumbs from "@/app/ui/breadcrumbs";

export default async function Page() {
  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: "Proyectos", href: "/dashboard/proyectos" },
          {
            label: "Crear Proyecto",
            href: "/dashboard/projects/create",
            active: true,
          },
        ]}
      />
      <Form />
    </main>
  );
}
