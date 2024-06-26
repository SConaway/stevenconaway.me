import { FiLink } from 'react-icons/fi';

import Image, { ImageProps } from 'next/image';

type Props = Omit<ImageProps, 'alt'> & {
  title: string;
  description: string;
  link: string;
};

// display image with title, then on hover, display description
const Project = (props: Props) => {
  return (
    <a
      href={props.link}
      target="_blank"
      rel="noopener noreferrer"
      // className="flex flex-col h-full"
    >
      <div
        className="max-w-[300px] m-2 p-3 group bg-black/20 hover:bg-black/40 hover:scale-105 transition-all hover:shadow-lg rounded-lg text-center relative"
        // style={{ aspectRatio: `${props.width}/${props.height}` }}
      >
        <Image
          {...props}
          className="rounded-lg group-hover:brightness-[.4] transition"
          quality={40}
          sizes="300px"
          placeholder={typeof props.src !== 'string' ? 'blur' : 'empty'}
          alt={props.title}
          // className="absolute inset-0 block object-cover w-full h-full"
        />

        <div className="h-full mt-2 text-white group-hover:brightness-[.6] transition">
          <h3 className="text-xl">{props.title}</h3>
          <hr className="my-3" />
          <p className="text-sm">{props.description}</p>
        </div>

        {/* link icon! */}
        {/* center in parent */}
        <div className="absolute inset-0 flex items-center justify-center text-transparent transition group-hover:text-gray-300">
          <FiLink className="text-3xl" />
        </div>
      </div>
    </a>
  );
};

export default Project;
