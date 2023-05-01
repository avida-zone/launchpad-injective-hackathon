import React from "react";
import Button from "../Buttons/Button";
import Link from "next/link";

const Success: React.FC = () => {
  return (
    <div className="flex gap-4 flex-col items-center justify-center text-center">
      <h2 className="col-span-2 md:col-span-4 text-lg">Project succesfull created</h2>
      <p className="text-gray-500 text-sm">This project is currently in review</p>
      <div className="flex gap-4 mt-8">
        <Button as={Link} href="/assets" variant="cuaternary">
          See your assets
        </Button>
        <Button as={Link} href="/projects" variant="secondary">
          See projects
        </Button>
      </div>
    </div>
  );
};

export default Success;
