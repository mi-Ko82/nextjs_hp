import Layout from "../components/Layout";
import { DlistItem } from "../components/Atoms/listItem/DlistItem";
import { UserIcon } from "../components/Atoms/userIcon/UserIcon";
import { SnsLinks } from "../components/Molecules/SnsLinks";
import { NextPage } from "next";

const Contact: NextPage = () => {
  return (
    <Layout title="Contact">
      <div className="bg-white text-center shadow-xl p-8 w-80 rounded">
        <div className="mt-4">
          <h1 className="font-bold text-xl">Contact Info</h1>
        </div>
        <div className="flex justify-center mt-4">
          <UserIcon
            iconPath="/user-icon.png"
            width={60}
            height={60}
            alt="apple"
          />
        </div>
        <dl className="mt-4">
          <DlistItem title="Address" text="city A" />
          <DlistItem title="E-mail" text="abc@gmail.com" />
          <DlistItem title="Phone" text="000-0000-0000" />
        </dl>
        <SnsLinks twLink="" fbLink="" ghLink="" />
      </div>
    </Layout>
  );
};

export default Contact;
