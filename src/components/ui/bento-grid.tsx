import { cn } from "../../lib/utils";
import { motion } from "framer-motion";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto ",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
  bgImage,
  iconClassName,
  titleClassName,
  descriptionClassName,
  headerClassName,
  delay
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  bgImage?: string;
  iconClassName?: string;
  titleClassName?: string;
  descriptionClassName?: string;
  headerClassName?: string;
  delay?: number; 
}) => {
  return (
    <motion.div
    variants={{hide: {opacity:0, y:75}}}
    initial= 'hide'
    whileInView={{opacity:1,y:0}}
    transition={{delay}}

      className={cn(
        "row-span-1 rounded-3xl group/bento shadow-2xl hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 bg-cover bg-center border-4 dark:border-[#1d1c20] border-transparent justify-between flex flex-col space-y-4 overflow-hidden ",
        className
      )}
      style={{backgroundImage: `url(${bgImage})`}}
    >
      <div className={` group-hover/bento:translate-x-2 transition duration-200 ${iconClassName} `}>
        {icon}
        <div className={`font-sans font-bold   mb-2 mt-2 ${titleClassName} `}>
          {title}
        </div>
        <div className={`font-sans font-normal    ${descriptionClassName} `}>
          {description}
        </div>
        <div className={`flex justify-center items-center object-center object-contain  ${headerClassName} `}>
          {header}
        </div>
      </div>
    </motion.div>
  );
};
