import { InfiniteMovingCards } from "@/components/ui/moving-cards";

const collabs = [
  {
    name: "Charles Dickens",
    imageUri: "https://placehold.co/600x400",
  },
  {
    name: "Charles Dickens",
    imageUri: "https://placehold.co/600x400",
  },
  {
    name: "Charles Dickens",
    imageUri: "https://placehold.co/600x400",
  },
  {
    name: "Charles Dickens",
    imageUri: "https://placehold.co/600x400",
  },
  {
    name: "Charles Dickens",
    imageUri: "https://placehold.co/600x400",
  },
  {
    name: "Charles Dickens",
    imageUri: "https://placehold.co/600x400",
  },
];

const Collaborations = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-8">
      <h3 className="text-4xl font-semibold">Our Collaborations</h3>
      <div className="relative flex flex-col items-center justify-center overflow-hidden antialiased rounded-md bg-background">
        <InfiniteMovingCards items={collabs} direction="right" speed="slow" />
      </div>
    </div>
  );
};

export default Collaborations;
