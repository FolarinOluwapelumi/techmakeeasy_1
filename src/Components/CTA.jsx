import Button from "./Button";
import { motion } from "framer-motion";
import chair from "../assets/blue chair.png";

export default function CTA() {
  return (
    <div className="mx-auto lg:py-16 py-10 mb-16 bg-gradient-to-r from-blue-400 to-purple-700 px-4 md:px-32">
      <div className="flex flex-col lg:flex-row items-center justify-between  ">
        <div className="text-center lg:text-left mb-8 lg:mb-0">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl lg:text-4xl font-bold mb-4"
          >
            Transform Your Ideas into Reality.
          </motion.h2>
          <p className="text-white mb-6">Request a Service Today</p>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              mailto="Techmakeeasy0@gmail.com"
              className="w-fit text-center bg-purple-500 px-6 py-3 font-bold
              transition-colors duration-300"
            >
              {" "}
              Let's build your ideas
            </Button>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-sm lg:max-w-md"
        >
          <img
            src={chair}
            alt="Office Chair"
            className="w-full h-full object-contain"
          />
        </motion.div>
      </div>
    </div>
  );
}
