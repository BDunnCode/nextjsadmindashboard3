import Pagination from "@/app/ui/dashboard/pagination/pagination";
import Search from "@/app/ui/dashboard/search/search";
import styles from "@/app/ui/dashboard/products/products.module.css";
import Image from "next/image";
import Link from "next/link";
import { searchParams } from "next/navigation";
import { fetchProducts } from "@/app/lib/data";

const ProductPage = async () => {
  const query = searchParams?.query || "";
  const page = searchParams?.page || 1;
  const { products } = await fetchProducts(query, page);
  console.log(products)

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder="Search for a product..."  />
        <Link href="/dashboard/products/add">
          <button className={styles.addButton}>Add New</button>
        </Link>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Title</td>
            <td>Description</td>
            <td>Price</td>
            <td>Created At</td>
            <td>Stock</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          {products?.map(product => (
            <tr key={product._id}>
              <td>
                <div className={styles.product}>
                  <Image
                    src={product.img || "/noproduct.jpg"}
                    alt="" 
                    width={40} 
                    height={40}
                    className={styles.userImage}
                  />
                  {product.title}
                </div>
              </td>
              <td>{product.desc}</td>
              <td>${product.price}</td>
              <td>{product.createdAt?.toString().splice(4,16)}</td>
              <td>{product.stock}</td>
              <td className={styles.buttons}>
                <Link href="/dashboard/products/test">
                  <button className={`${styles.button} ${styles.view}`}>View</button>
                </Link>
                  <button className={`${styles.button} ${styles.delete}`}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination />
    </div>
  );
};

export default ProductPage;