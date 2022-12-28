import { FiLink } from 'react-icons/fi';

import Image, { ImageProps } from 'next/image';

type Props = {
  title: string;
  description: string;
  link: string;
  image: ImageProps['src'];
  height: number;
  width: number;
};

// display image with title, then on hover, display description
const Project = (props: Props) => {
  return (
    <div
      className="max-w-[300px] m-2 p-3 group bg-black/20 hover:bg-black/40 hover:scale-105 transition-all hover:shadow-lg rounded-lg text-center"
      // style={{ aspectRatio: `${props.width}/${props.height}` }}
    >
      <a
        href={props.link}
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-col h-full"
      >
        <Image
          src={props.image}
          alt={props.title}
          className="rounded-lg group-hover:brightness-[.4] transition"
          quality={40}
          placeholder="blur"
          sizes="300px"
          // className="absolute inset-0 block object-cover w-full h-full"
        />

        <div className="h-full mt-2 text-white group-hover:brightness-[.6] transition">
          <h3 className="text-xl">{props.title}</h3>
          <hr className="my-3" />
          <p className="text-sm">{props.description}</p>
        </div>

        {/* link icon! */}
        <div className="absolute top-0 left-0 flex items-center justify-center w-full h-full text-transparent transition group-hover:text-gray-300">
          <FiLink className="text-3xl" />
        </div>
      </a>
    </div>
  );
};

export default Project;
