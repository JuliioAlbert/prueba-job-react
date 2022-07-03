import React from "react";
import { useEmployes } from "../../hooks/useEmployes";
import { Table } from "../Table";

export const EmployesData = () => {
  const { employes, columns } = useEmployes();
  return <Table data={employes} columns={columns} />;
};
