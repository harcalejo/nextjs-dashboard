import { lusitana } from "@/app/ui/fonts";
import { fetchProjectsPages } from "@/app/lib/data/project-repository";
import { Suspense } from "react";
import Pagination from "@/app/ui/pagination";
import Table from "@/app/ui/projects/projects-table";
import { CreateProject } from "@/app/ui/projects/buttons";

export default async function Page({
  searchParams,
}: {
  searchParams?: {
    page?: string;
  };
}) {
  const currentPage = Number(searchParams?.page) || 1;

  const totalPages = await fetchProjectsPages();

  return (
    <div className="w-full">
      <div className="flex w-full items-center justify-between">
        <h1 className={`${lusitana.className} text-2xl`}>Proyectos</h1>
      </div>
      <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
        <CreateProject />
      </div>
      <Suspense key={currentPage}>
        <Table currentPage={currentPage} />
      </Suspense>
      <div className="mt-5 flex w-full justify-center">
        <Pagination totalPages={totalPages} />
      </div>
    </div>
  );
}
