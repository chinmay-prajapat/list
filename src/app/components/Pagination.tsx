import styles from "@/app/page.module.css"

const Pagination = ({
  totalPages,
  currentPage,
  onPageChange,
}: {
  totalPages: number;
  currentPage: number;
  onPageChange: (key: number) => void;
}) => (
  <div className={styles.paginationParent}>
    {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
      <div
        key={page}
        className={styles.paginationChild}
        style={{ borderColor: currentPage === page ? "#ddd" : "transparent" }}
        onClick={() => onPageChange(page)}
      >
        {page}
      </div>
    ))}
  </div>
);
export default Pagination;
