import { FiLink } from 'react-icons/fi';

import Image, { ImageProps } from 'next/future/image';

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
    <a href={props.link}>
      <div
        className="max-w-[300px] mx-4 my-2 p-4 bg-black/20 hover:bg-black/40 hover:brightness-[.4] rounded-md text-center relative"
        // style={{ aspectRatio: `${props.width}/${props.height}` }}
      >
        <Image
          src={props.image}
          alt={props.title}
          className="rounded-lg"
          quality={70}
          placeholder="blur"
          sizes="300px"
          // className="absolute inset-0 block object-cover w-full h-full"
        />

        <div className="h-full mt-2 p--4">
          <h3 className="text-xl">{props.title}</h3>
          <hr className="my-3" />
          <p className="text-sm">{props.description}</p>
        </div>

        {/* link icon! */}
        <div className="absolute top-0 left-0 flex items-center justify-center w-full h-full text-transparent hover:text-white">
          <FiLink className="text-3xl" />
        </div>
      </div>
    </a>
  );
};

export default Project;
