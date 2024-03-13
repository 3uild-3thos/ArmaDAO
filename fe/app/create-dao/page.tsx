export default function CreateDao() {
  return (
    <>
      <p>Create a Project</p>

      <div className="grid grid-cols-3 p-5">
        <CreateProjectStepper />
        <div className="col-span-2">
          <div className="">
            <p className="text-sm text-gray">Files</p>
            <p className="">Cover Photo</p>
            <p className="">
              We suggest using 1200px (w) by 250px (h) with a 250px (w) by 250px
              (h) safezone.
            </p>

            <div className="flex flex-col justify-center items-center gap-3">
              <div className="">{/* TODO: Add image */}</div>
              <div className="text-center">
                <p className="">Click or drag an image here to upload.</p>
                <p className="">Maximum file size: 5MB</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-3">
              <p>Basic Information</p>

              <div className="flex gap-3 items-center">
                <p>Title</p>
                <input type="text" />
              </div>
              <div className="flex gap-3 items-center">
                <p>Category</p>
                <input type="text" />
              </div>
              <div className="flex gap-3 items-center">
                <div className="">
                  <p>Location</p>
                  <p>Optional</p>
                </div>
                <input type="text" />
              </div>

              <div className="flex gap-3 items-center">
                <p>Description</p>
                <input type="text" />
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <p>Links</p>
              <div className="flex gap-3 items-center">
                <p>Pitchdeck</p>
                <input type="text" />
              </div>
              <div className="flex gap-3 items-center">
                <div className="">
                  <p>Demo Video</p>
                  <p>Optional</p>
                </div>
                <input type="text" />
              </div>

              <div className="flex gap-3 items-center">
                <div className="">
                  <p>Twitter / X</p>
                  <p>Optional</p>
                </div>
                <input type="text" />
              </div>

              <div className="flex gap-3 items-center">
                <div className="">
                  <p>Linked In</p>
                  <p>Optional</p>
                </div>
                <input type="text" />
              </div>
              <div className="flex gap-3 items-center">
                <div className="">
                  <p>Github</p>
                  <p>Optional</p>
                </div>
                <input type="text" />
              </div>
              <div className="flex gap-3 items-center">
                <div className="">
                  <p>Website</p>
                  <p>Optional</p>
                </div>
                <input type="text" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-end">
        <button>Next</button>
      </div>
    </>
  );
}

function CreateProjectStepper() {
  const STEPS = [
    {
      title: "Project Info",
      description:
        "Provide the Backers with the basic information of what the project is about.",
    },
    {
      title: "Project Info",
      description:
        "Provide the Backers with the basic information of what the project is about.",
    },
    {
      title: "Project Info",
      description:
        "Provide the Backers with the basic information of what the project is about.",
    },
    {
      title: "Project Info",
      description:
        "Provide the Backers with the basic information of what the project is about.",
    },
    {
      title: "Project Info",
      description:
        "Provide the Backers with the basic information of what the project is about.",
    },
  ];
  return (
    <div className="flex flex-col gap-2">
      {STEPS.map((e: any, index: number) => (
        <div className="grid grid-cols-7">
          <div className="">{index + 1}</div>
          <div className="">{/* TODO: Add icon */}</div>
          <div className="flex flex-col gap-2 col-span-4">
            <p>{e.title}</p>
            <p>{e.description}</p>
          </div>
          <div className="">{/* TODO: Add next icon */}</div>
        </div>
      ))}
    </div>
  );
}
