import { ColumnDef } from "@tanstack/react-table";
import { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Employee } from "../interfaces";
import { AppDispatch, StoreApp } from "../redux";
import { getEmployes } from "../redux/slices/Employes/thunks";

export const useEmployes = () => {
  const dispatch = useDispatch<AppDispatch>();

  const { employes } = useSelector((state: StoreApp) => state.employes);

  useEffect(() => {
    data();
  }, []);

  const data = async () => {
    dispatch(getEmployes());
  };

  const columns = useMemo<ColumnDef<Employee>[]>(
    () => [
      {
        header: "Employes",
        footer: (props) => props.column.id,
        columns: [
          {
            id: "id",
            accessorKey: "id",
            cell: (info) => info.getValue(),
            footer: (props) => props.column.id,
            header: () => <span>ID</span>,
          },
          {
            id: "name",
            accessorKey: "name",
            cell: (info) => info.getValue(),
            accessorFn: (row) => row.name,
            footer: (props) => props.column.id,
            header: () => <span>Name</span>,
          },
          {
            id: "last_name",
            accessorKey: "last_name",
            cell: (info) => info.getValue(),
            accessorFn: (row) => row.last_name,
            footer: (props) => props.column.id,
            header: () => <span>last_name</span>,
          },
          {
            id: "birthday",
            accessorKey: "birthday",
            cell: (info) => info.getValue(),
            accessorFn: (row) => row.birthday,
            footer: (props) => props.column.id,
            enableColumnFilter: false,
            header: () => <span>birthday</span>,
          },
        ],
      },
    ],
    []
  );

  return {
    employes,
    columns,
  };
};
