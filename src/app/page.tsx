"use client";

import styles from "./page.module.css";
import { useEffect, useState } from "react";
import SearchInput from "./components/SearchInput";
import UserTable from "./components/UserTable";
import Pagination from "./components/Pagination";
const BASE_API = "https://reqres.in/api/users";

type USER_DATA = {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
};
interface USER_DATA_DETAILS {
  data: USER_DATA[];
  page: 1;
  per_page: 6;
  total: 12;
  total_pages: 2;
}
export default function Home() {
  const [currentPage, setCurrentPage] = useState(1);
  const [dataState, setDataState] = useState<USER_DATA_DETAILS>();
  const [value, setValue] = useState("");
  const [filteredData, setFilteredData] = useState<USER_DATA[] | undefined>([]);
  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const key = event.target.value;
    setValue(key);

    if (key === "") {
      // Reset to original data if search input is empty
      setFilteredData(dataState?.data);
    } else {
      // Filter data based on search key
      const filtered = dataState?.data.filter(
        (item) =>
          item.first_name.toLowerCase().includes(key.toLowerCase()) ||
          item.last_name.toLowerCase().includes(key.toLowerCase()) ||
          item.email.toLowerCase().includes(key.toLowerCase())
      );

      setFilteredData(filtered);
    }
  };
  const getData = async (page: number = 1) => {
    const res = await fetch(`${BASE_API}?page=${page}`);
    const userData = await res.json();
    const { data } = userData;
    setDataState(userData);
    setFilteredData(data);
  };
  useEffect(() => {
    getData(currentPage);
  }, [currentPage]);
  console.log(dataState);
  return (
    <main className={styles.main}>
      <SearchInput value={value} onChange={handleSearchChange} />
      <UserTable data={filteredData || []} />
      <Pagination
        totalPages={dataState?.total_pages || 0}
        currentPage={dataState?.page || 0}
        onPageChange={setCurrentPage}
      />
    </main>
  );
}
