import { addPost } from "../../lib/action";

const ServerActionTest = () => {
  //   const actionInComponent = async () => {
  //     "use server";
  //     console.log("it works");
  //   };

  return (
    <div>
      <form action={addPost}>
        <input type="text" placeholder="title" name="title" />
        <input type="text" placeholder="title" name="desc" />
        <input type="text" placeholder="title" name="slug" />
        <input type="text" placeholder="title" name="userId" />
        <button>Create post</button>

        {/* <form action={deletePost}>
          <input type="text" placeholder="postId" name="id" />
          <button>Delete post</button>
        </form> */}
      </form>
    </div>
  );
};

export default ServerActionTest;
