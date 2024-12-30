import { AgGridReact } from "ag-grid-react";
import { AllCommunityModule, ModuleRegistry } from "ag-grid-community";
import { useMemo, useState } from "react";
import type { ColDef } from "ag-grid-community";
import "ag-grid-community/styles/ag-theme-quartz.css";
import Cell from "../components/Cell";

export interface Value {
  value: number;
}

// Register all Community features
ModuleRegistry.registerModules([AllCommunityModule]);
const AGgrid = () => {
  const [rowData] = useState([
    { make: "Tesla", model: "Model Y", price: 64950, electric: true },
    { make: "Tesla", model: "Model Y", price: 64950, electric: true },
    { make: "Ford", model: "F-Series", price: 33850, electric: false },
    { make: "Toyota", model: "Corolla", price: 29600, electric: false },
    { make: "Tesla", model: "Model Y", price: 64950, electric: true },
    { make: "Ford", model: "F-Series", price: 33850, electric: false },
    { make: "Tesla", model: "Model Y", price: 64950, electric: true },
    { make: "Toyota", model: "Corolla", price: 29600, electric: false },
    { make: "Tesla", model: "Model Y", price: 64950, electric: true },
    { make: "Ford", model: "F-Series", price: 33850, electric: false },
    { make: "Toyota", model: "Corolla", price: 29600, electric: false },
    { make: "Tesla", model: "Model Y", price: 64950, electric: true },
    { make: "Ford", model: "F-Series", price: 33850, electric: false },
    { make: "Toyota", model: "Corolla", price: 29600, electric: false },
    { make: "Tesla", model: "Model Y", price: 64950, electric: true },
    { make: "Ford", model: "F-Series", price: 33850, electric: false },
    { make: "Toyota", model: "Corolla", price: 29600, electric: false },
    { make: "Tesla", model: "Model Y", price: 64950, electric: true },
    { make: "Ford", model: "F-Series", price: 33850, electric: false },
    { make: "Toyota", model: "Corolla", price: 29600, electric: false },
    { make: "Tesla", model: "Model Y", price: 64950, electric: true },
    { make: "Ford", model: "F-Series", price: 33850, electric: false },
    { make: "Toyota", model: "Corolla", price: 29600, electric: false },
    { make: "Tesla", model: "Model Y", price: 64950, electric: true },
    { make: "Ford", model: "F-Series", price: 33850, electric: false },
    { make: "Toyota", model: "Corolla", price: 29600, electric: false },
    { make: "Tesla", model: "Model Y", price: 64950, electric: true },
    { make: "Ford", model: "F-Series", price: 33850, electric: false },
    { make: "Toyota", model: "Corolla", price: 29600, electric: false },
    { make: "Tesla", model: "Model Y", price: 64950, electric: true },
    { make: "Ford", model: "F-Series", price: 33850, electric: false },
    { make: "Toyota", model: "Corolla", price: 29600, electric: false },
  ]);

  // Column Definitions: Defines the columns to be displayed.
  const [colDefs] = useState<ColDef[]>([
    {
      field: "make",
      cellRenderer: Cell,
      cellEditor: "agSelectCellEditor",
      cellEditorParams: { values: ["Tesla", "Ford", "Toyota"] },
      checkboxSelection: true,
    },
    { field: "model" },
    {
      field: "price",
      valueFormatter: ({ value }: Value) => "₹" + value,
      cellClassRules: { "bg-green-800": ({ value }: Value) => value >= 60000 },
    },
    { field: "electric" },
  ]);

  const defColDef = useMemo(() => {
    return {
      //   flex: 1,
      filter: true,
      //   floatingFilter: true,
      editable: true,
    };
  }, []);
  return (
    <div className="flex items-center justify-center flex-col w-full h-[92vh]">
      <h1 className="font-title text-white text-4xl mb-10">AGgrid Practice</h1>
      <div
        // define a height because the Data Grid will fill the size of the parent container
        className="ag-theme-quartz-dark w-[90%] h-[70%]  md:w-[106vh] md:h-[66vh] mx-auto shadow-2xl rounded-xl shadow-[#46586e]"
        // style={{ height: 200, width: 800 }}
      >
        <AgGridReact
          rowData={rowData}
          columnDefs={colDefs}
          defaultColDef={defColDef}
          rowSelection={"multiple"}
          pagination={true}
          paginationPageSize={10}
          paginationPageSizeSelector={[10, 20]}
        />
      </div>
    </div>
  );
};
export default AGgrid;
