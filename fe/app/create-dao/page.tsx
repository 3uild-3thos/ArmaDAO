"use client";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ChevronLeft, ChevronRight, ImagePlus, Star } from "lucide-react";
import { createContext, useContext, useState } from "react";

const CreateDaoContext = createContext<number>(0);

export default function CreateDao() {
  const [page, setPage] = useState(0);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "",
    location: "",
    pitchdeck: "",
    demoVideo: "",
    twitter: "",
    linkedIn: "",
    github: "",
    website: "",
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((state) => ({ ...state, [name]: value }));
  };

  const next = () => {
    localStorage.setItem(page.toString(), JSON.stringify(formData));
    setPage((state) => state + 1);
  };

  return (
    <CreateDaoContext.Provider value={page}>
      <div className="flex items-center gap-3">
        <ChevronLeft />
        <p>Back</p>
        <div className="max-h-full h-8 w-[1px] bg-gray-700"></div>
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/components" className="text-white">
                Home
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator className="text-white" />{" "}
            <BreadcrumbItem>
              <BreadcrumbLink href="/components" className="text-white">
                DAO
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator className="text-white" />
            <BreadcrumbItem>
              <BreadcrumbPage className="text-white">
                Create a project
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      <div className="flex flex-col gap-5 py-10">
        <p className="font-medium text-xl">Create a Project</p>

        <div className="grid grid-cols-3 p-5 gap-10">
          <CreateProjectStepper />
          <div className="col-span-2 flex flex-col gap-10">
            <div className="flex flex-col gap-3">
              <p className="text-sm text-gray-500">Files</p>
              <p className="">Cover Photo</p>
              {/* TODO: Add proper text color */}
              <p className="text-xs font-light text-gray-500">
                We suggest using 1200px (w) by 250px (h) with a 250px (w) by
                250px (h) safezone.
              </p>

              {/* TODO: Add proper bg color */}
              {/* TODO: Add proper border color */}
              {/* TODO: Add proper border radius */}
              <div className="border-dashed border-2 rounded border-gray-500 flex flex-col justify-center items-center gap-3 bg-card p-20 ">
                <div className="">
                  <ImagePlus size={64} />
                </div>
                <div className="text-center">
                  <p className="">Click or drag an image here to upload.</p>
                  <p className="">Maximum file size: 5MB</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-10 ">
              <div className="flex flex-col gap-7">
                <p className="text-sm text-gray-500">Basic Information</p>
                <div className="grid grid-cols-4 gap-3 items-center">
                  <p>Title</p>
                  <Input
                    className="col-span-3"
                    name="title"
                    onChange={handleChange}
                  />
                </div>
                <div className="grid grid-cols-4 gap-3 items-center">
                  <p>Category</p>
                  <Input
                    className="col-span-3"
                    name="category"
                    onChange={handleChange}
                  />
                </div>
                <div className="grid grid-cols-4 gap-3 items-center">
                  <div className="flex flex-col gap-2">
                    <p>Location</p>
                    <p className="text-xs font-light text-gray-500">Optional</p>
                  </div>
                  <Input
                    className="col-span-3"
                    name="location"
                    onChange={handleChange}
                  />
                </div>

                <div className="grid grid-cols-4 gap-3">
                  <p>Description</p>
                  <Textarea
                    className="col-span-3"
                    name="description"
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="flex flex-col gap-7">
                <p className="text-sm text-gray-500">Links</p>
                <div className="grid grid-cols-4 gap-3 items-center">
                  <p>Pitchdeck</p>
                  <Input
                    className="col-span-3"
                    name="pitchdeck"
                    onChange={handleChange}
                  />
                </div>
                <div className="grid grid-cols-4 gap-3 items-center">
                  <div className="flex flex-col gap-2">
                    <p>Demo Video</p>
                    <p className="text-xs font-light text-gray-500">Optional</p>
                  </div>
                  <Input
                    className="col-span-3"
                    name="demoVideo"
                    onChange={handleChange}
                  />
                </div>

                <div className="grid grid-cols-4 gap-3 items-center">
                  <div className="flex flex-col gap-2">
                    <p>Twitter / X</p>
                    <p className="text-xs font-light text-gray-500">Optional</p>
                  </div>
                  <Input
                    className="col-span-3"
                    name="twitter"
                    onChange={handleChange}
                  />
                </div>

                <div className="grid grid-cols-4 gap-3 items-center">
                  <div className="flex flex-col gap-2">
                    <p>Linked In</p>
                    <p className="text-xs font-light text-gray-500">Optional</p>
                  </div>
                  <Input
                    className="col-span-3"
                    name="linkedIn"
                    onChange={handleChange}
                  />
                </div>
                <div className="grid grid-cols-4 gap-3 items-center">
                  <div className="flex flex-col gap-2">
                    <p>Github</p>
                    <p className="text-xs font-light text-gray-500">Optional</p>
                  </div>
                  <Input
                    className="col-span-3"
                    name="github"
                    onChange={handleChange}
                  />
                </div>
                <div className="grid grid-cols-4 gap-3 items-center">
                  <div className="flex flex-col gap-2">
                    <p>Website</p>
                    <p className="text-xs font-light text-gray-500">Optional</p>
                  </div>
                  <Input
                    className="col-span-3"
                    name="website"
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-end">
          <Button variant={"ghost"} onClick={next}>
            Next
          </Button>
        </div>
      </div>
    </CreateDaoContext.Provider>
  );
}

function CreateProjectStepper() {
  const page = useContext(CreateDaoContext);

  const STEPS = [
    {
      title: "SubDao Info",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam ipsam aspernatur provident ullam ",
    },
    {
      title: "Team Details",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam ipsam aspernatur provident ullam ",
    },
    {
      title: "SubDao Config",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam ipsam aspernatur provident ullam ",
    },
    {
      title: "Review / Confirmation",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam ipsam aspernatur provident ullam ",
    },
  ];

  return (
    <div className="flex flex-col gap-20">
      {STEPS.map((e: any, index: number) => (
        <div className="grid grid-cols-10 gap-3" key={e.title}>
          <div
            className={`${
              index == page && "rounded-full bg-gray-500"
            } h-6 w-6 p-2 flex justify-center items-center`}
          >
            <p>{index + 1}</p>
          </div>
          <div className="flex justify-center">
            <Star size={20} />
          </div>
          <div className="flex flex-col gap-2 col-span-7">
            <p className="font-medium">{e.title}</p>
            {/* TODO: Add proper text color */}
            <p className="font-normal text-gray-500">{e.description}</p>
          </div>
          <div>
            <ChevronRight size={30} />
          </div>
        </div>
      ))}
    </div>
  );
}
