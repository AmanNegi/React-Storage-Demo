import { useState } from "react";
import MyButton from "./components/Button";
import InputField from "./components/InputField";
import {
  saveToCookies,
  saveToLocalStorage,
  saveToSessionStorage,
} from "./services/data_helper";

function App() {
  return (
    <>
      <main className="bg-purple-200 h-screen w-[100%] light p-12 flex flex-col">
        <h1 className="text-6xl font-bold text-purple-900 mb-10 underline">
          Storage in React
        </h1>
        <FieldComponent
          saveText="Save to Local Storage"
          saveData={saveToLocalStorage}
        />
        <FieldComponent
          saveText="Save to Session Storage"
          saveData={saveToSessionStorage}
        />
        <FieldComponent saveText="Save to Cookies" saveData={saveToCookies} />

        <div className="flex flex-1"></div>
        <p className="text-purple-600">
        <span className="font-bold underline text-lg">NOTE:</span>  You can check that these values are saved by inspecting the page. Go
          to the application section and you will find local storage, session
          storage and cookies there.
        </p>
      </main>
    </>
  );
}

// eslint-disable-next-line react/prop-types
function FieldComponent({ saveText, saveData }) {
  const [fieldData, setFieldData] = useState({
    key: "",
    value: "",
  });

  return (
    <div className="flex flex-row flex-wrap items-end mb-5">
      <InputField
        name="Key"
        id="key"
        onChange={handleFieldChange}
        value={fieldData.key}
      />
      <div className="w-4"></div>
      <InputField
        name="Value"
        id="value"
        onChange={handleFieldChange}
        value={fieldData.value}
      />
      <div className="w-4"></div>
      <MyButton onClick={() => saveData(fieldData)} name={saveText} />
    </div>
  );
  function handleFieldChange(value) {
    setFieldData((oldData) => {
      return {
        ...oldData,
        [value.target.id]: value.target.value,
      };
    });
  }
}

export default App;
