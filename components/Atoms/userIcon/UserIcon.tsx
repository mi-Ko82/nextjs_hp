import Image from "next/image";
import { NextPage } from "next";

type Props = {
  iconPath: string;
  width: number;
  height: number;
  alt: string;
};

export const UserIcon: NextPage<Props> = (props) => {
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
