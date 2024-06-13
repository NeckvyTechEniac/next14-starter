"use client";

import { addPost } from "../../lib/action";
import styles from "./adminPostForm.module.css";
import { useFormState } from "react-dom";

const AdminPostForm = ({ userId }) => {
  const [state, formActon] = useFormState(addPost, undefined);
  return (
    <form action={formActon} className={styles.container}>
      <h1>Add New Post</h1>
      <input type="hidden" name="userId" value={userId} />
      <input type="text" name="title" placeholder="title" />
      <input type="text" name="slug" placeholder="slug" />
      <input type="text" name="img" placeholder="img" />
      <textarea type="text" name="desc" placeholder="desc" rows={10} />
      <button>Add</button>
      {state && state.error}
    </form>
  );
};

export default AdminPostForm;
