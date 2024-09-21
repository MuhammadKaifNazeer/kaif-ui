import { redirect } from "next/navigation";
import BlocksData from "@/data/blocksData";
import Image from "next/image";
import Link from "next/link";

const AllBlocks: React.FC = () => {
  redirect("/blocks");

  return <div>{/* Your JSX code goes here */}</div>;
};

export default AllBlocks;
