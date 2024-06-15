import CenterFull from "~/components/buildingBlocks/centerFull";
import { motion } from "framer-motion";
import Center from "~/components/buildingBlocks/center";

export default function Test() {
  return (
    <CenterFull className="relative">
      <Center className="p-10px bg-red-500">THis</Center>
    </CenterFull>
  );
}
