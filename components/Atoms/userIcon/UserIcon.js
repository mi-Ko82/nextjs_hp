import Image from "next/image";

export const UserIcon = (props) => {
  const { iconPath, width, height, alt = "" } = props;
  return (
    <figure>
      <Image
        src={iconPath}
        width={width}
        height={height}
        alt={alt}
        className="rounded-full"
      />
    </figure>
  );
};
