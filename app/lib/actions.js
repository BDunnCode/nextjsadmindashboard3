import { redirect } from "next/navigation";
import { Product, User } from "./models";
import { connectToDB } from "./utils";
import { revalidatePath } from "next/cache";
import bcrypt from "bcrypt";

export const addUser = async (formData) => { 
  "use server";
  const { username, email, password, phone, address, isAdmin, isActive } = Object.fromEntries(formData);

  try {
    connectToDB();

    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)
    const newUser = new User({
      username, email, password: hashedPassword, phone, address, isAdmin, isActive
    });

    await newUser.save();
  } catch(error) {
    console.log(error)
    throw new Error("Failed to create user!")
  }

  revalidatePath("/dashboard/users");
  redirect("/dashboard/users");
};

export const addProduct = async (formData) => { 
  "use server";
  const { title, price, stock, color, size, desc } = Object.fromEntries(formData);

  try {
    connectToDB();

    const newProduct= new Product({
      title, price, stock, color, size, desc
    });

    await newProduct.save();
  } catch(error) {
    console.log(error)
    throw new Error("Failed to create product!")
  }

  revalidatePath("/dashboard/products");
  redirect("/dashboard/products");
};