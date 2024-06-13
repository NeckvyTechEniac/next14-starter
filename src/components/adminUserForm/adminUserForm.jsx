"use client";

import styles from "./adminUserForm.module.css";

import { addUser } from "../../lib/action";
import { useFormState } from "react-dom";

const AdminUserForm = () => {
  const [state, formActon] = useFormState(addUser, undefined);
  return (
    <form action={formActon} className={styles.container}>
      <h1>Add New User</h1>
      <input type="text" name="username" placeholder="username" />
      <input type="text" name="email" placeholder="email" />
      <input type="password" name="passowrd" placeholder="passowrd" />
      <select name="isAdmin">
        <option value="false">isAdmin?</option>
        <option value="false">No</option>
        <option value="true">Yes</option>
      </select>
      <button>Add</button>
      {state && state.error}
    </form>
  );
};

export default AdminUserForm;
