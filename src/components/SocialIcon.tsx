type Props = {
  icon: JSX.Element;
  url: string;
  description: string;
};

const SocialIcon = ({ icon, url, description }: Props) => {
  return (
    <div className="p-2 text-4xl transition-transform border border-solid rounded-full hover:scale-110 text-slate-300 border-slate-300 hover:border-slate-500 hover:text-slate-500">
      <a
        href={url}
        className=""
        // open on new tab
        target="_blank"
        rel="noopener noreferrer"
        aria-label={description}
      >
        {icon}
      </a>
    </div>
  );
};

export default SocialIcon;
