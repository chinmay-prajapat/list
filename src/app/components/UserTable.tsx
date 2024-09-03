import Image from "next/image";
import styles from "@/app/page.module.css";
type USER_DATA = {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
};
const UserTable = ({ data }: { data: USER_DATA[] }) => (
  <div className={styles.userGrid}>
    <div className={styles.tableHeading}>
      <div>NAME</div>
      <div>EMAIL</div>
      <div>POSITION</div>
    </div>
    {!data.length ? (
      <div style={{ padding: 10, color: "#000", textAlign: "center" }}>
        Data not found!
      </div>
    ) : (
      data.map((item) => (
        <div className={styles.tableItems} key={item.id}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <Image
              alt={item.first_name}
              src={item.avatar}
              height={50}
              width={50}
              objectFit="cover" // Apply objectFit value as per your requirement
            />
            <div style={{ paddingLeft: "10px" }}>{item.first_name}</div>
          </div>
          <div>{item.email}</div>
          <div>{item.last_name}</div>
        </div>
      ))
    )}
  </div>
);

export default UserTable;
