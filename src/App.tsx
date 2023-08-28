import { useEffect, useMemo, useState } from "react";
import type { Data } from "./type/profile";
import Theme01 from "./component/Theme01";
import Theme02 from "./component/Theme02";
import Theme03 from "./component/Theme03";
import Theme04 from "./component/Theme04";
import Theme05 from "./component/Theme05";

export const App = () => {
  const [profile, setProfile] = useState<Data>();
  const [theme, setTheme] = useState<string>();

  const queryParameters = useMemo(
    () => new URLSearchParams(window.location.search),
    []
  );

  useEffect(() => {
    console.log("useEffect");
    // Offline Setup
    const fectData = async () => {
      const id = queryParameters.get("pro");
      const url = `https://k80o05lshj.execute-api.ap-south-1.amazonaws.com/api/collections/profile/records/${id}`;
      const data = await fetch(url);
      const profileData = await data.json();
      console.log(queryParameters.get("pro"));
      console.log(queryParameters.get("theme"));
      console.log(profileData);
      setProfile(profileData);
      setTheme(queryParameters.get("theme")!);
    };
    fectData();

    console.log(queryParameters.get("theme"));
  }, [queryParameters, theme]);

  const getTheme = () => {
    switch (theme) {
      case "theme01":
        return <Theme01 {...profile!} />;
      case "theme02":
        return <Theme02 {...profile!} />;
      case "theme03":
        return <Theme03 {...profile!} />;
      case "theme04":
        return <Theme04 {...profile!} />;
      case "theme05":
        return <Theme05 {...profile!} />;
      default:
        return (
          <div className="text-2xl font-extrabold w-full h-full flex items-center justify-center">
            Home
          </div>
        );
    }
  };

  return (
    <div className="bg-gray-50 w-full h-full">
      <div className="max-w-screen-lg  border-r border-l shadow-2xl  m-auto bg-white h-full">
        {getTheme()}
      </div>
    </div>
  );
};
