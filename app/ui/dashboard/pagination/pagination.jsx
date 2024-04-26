"use client";

import styles from "./pagination.module.css";
import { usePathname, useRouter, useSearchParams } from "next/navigation";


const Pagination = ({count}) => {
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const pathname = usePathname();

  const page = searchParams.get("page") || 1;

  const params = new URLSearchParams(searchParams);
  const ITEM_PER_PAGE = 2;

  const hasPrev = ITEM_PER_PAGE * (parseInt(page)-1) > 0
  const hasNext = ITEM_PER_PAGE * parseInt(page) < count

  return (
    <div className={styles.container}>
      <button className={styles.button} disabled={!hasPrev}>Previous</button>
      <button className={styles.button} disabled={!hasNext}>Next</button>
    </div>
  );
};

export default Pagination;