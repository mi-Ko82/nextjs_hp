import { NextPage } from "next";

type Props = {
  title: string;
  text: string;
};

export const DlistItem: NextPage<Props> = (props) => {
  const { title, text } = props;
  return (
    <div className="mt-3">
      <dt className="font-bold">{title}</dt>
      <dd className="text-xs mt-1 text-gray-600">{text}</dd>
    </div>
  );
};
