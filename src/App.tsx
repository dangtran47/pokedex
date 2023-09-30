import { useState } from "react";
import { Switch } from "@headlessui/react";
import { useQuery } from "react-query";

import "./App.css";

function App() {
  const [checked, setChecked] = useState(false);

  const { isLoading, error, data } = useQuery(
    "repoData",
    () =>
      fetch("https://api.github.com/repos/tannerlinsley/react-query").then(
        (res) => res.json(),
      ),
  );

  if (isLoading) return "Loading...";

  if (error) return "An error has occurred";

  return (


    <div>
      <Switch
        checked={checked}
        onChange={setChecked}
        className={`${
          checked ? "bg-blue-600" : "bg-gray-200"
        } relative inline-flex h-6 w-11 items-center rounded-full`}
        data-testiq="switch"
      >
        <span
          className={`${
            checked ? "translate-x-6" : "translate-x-1"
          } inline-block h-4 w-4 transform rounded-full bg-white transition`}
        />
      </Switch>

      <div>
        <h1>{data.name}</h1>
      </div>
    </div>
  );
}

export default App;
