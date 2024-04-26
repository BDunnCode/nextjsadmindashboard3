

import styles from "@/app/ui/dashboard/products/singleProduct/singleProduct.module.css";
import Image from "next/image";

const SingleProductPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          <Image src="/noavatar.png" alt="" fill />
        </div>
        iPhone
      </div>
      <div className={styles.formContainer}>
        <form action="" className={styles.form}> 
          <label>Title</label>
          <input type="text" name="username" placeholder="John Doe" />
          <label>Price</label>
          <input type="text" name="price" placeholder="$100" />
          <label>Stock</label>
          <input type="text" name="password" placeholder="23" />
          <label>Color</label>
          <input type="text" name="color" placeholder="red" />
          <label>Size</label>
          <textarea type="text" name="size" placeholder="small" />
          <label>Category</label>
          <select name="category" id="category">
            <option value="kitchen">Kitchen</option>
            <option value="computers">Computers</option>
          </select>
          <label>Description</label>
          <textarea 
            name="desc"
            id="desc"
            rows="10"
            placeholder="desc"
          ></textarea>
          <button className={styles.button}>Update</button>
        </form>
      </div>
    </div>
  );
};

export default SingleProductPage;