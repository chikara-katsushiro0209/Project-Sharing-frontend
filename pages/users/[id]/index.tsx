import { Button } from "@mui/material";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { User } from "../../../types/user";
import { fetchUser, UpdateUser } from "../../api/user";

const Index = () => {
  const [user, setUser] = useState<User>({
    id: "",
    firstName: "",
    lastName: "",
    birthday: 0,
    email: "",
  });

  const router = useRouter();
  const { id } = router.query;

  const data = {
    lastName: "chimmy",
  };

  useEffect(() => {
    if (!id) {
      return;
    }

    fetchUser(id)
      .then((data) => {
        console.log(data);
        setUser(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  const userUpdate = () => {
    console.log("test");
    UpdateUser(id, "chimmy")
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      {user.id}
      {user.lastName}
      <Button onClick={userUpdate}>update</Button>
    </>
  );
};

export default Index;
