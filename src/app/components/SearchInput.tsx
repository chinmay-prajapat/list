import Image from "next/image";

import styles from "@/app/page.module.css";
const SearchInput = ({
  value,
  onChange,
}: {
  value: string;
  onChange: (key: React.ChangeEvent<HTMLInputElement>) => void;
}) => (
  <div className={styles.inputsParent}>
    <div className={styles.inputs}>
      <Image
        alt="search-icon"
        src="/searchIcon.svg" // Ensure the correct path for your asset
        height={20}
        width={20}
      />
      <input value={value} onChange={onChange} placeholder="Search" />
    </div>
  </div>
);
export default SearchInput;
