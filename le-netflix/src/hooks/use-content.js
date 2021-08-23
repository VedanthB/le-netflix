import { FirebaseContext } from "../context/firebase";
import React, { useContext, useEffect, useState } from "react";

export default function useContent(target) {
  const [content, setContent] = useState([]);
  const { firebase } = useContext(FirebaseContext);

  useEffect(() => {
    firebase
      .firestore()
      .collection(target)
      .get()
      .then((snapshot) => {
        const allContent = snapshot.docs.map((contentObj) => ({
          ...contentObj.data(),
          docId: contentObj.id,
        }));

        setContent(allContent);
      })
      .catch((error) => {
        console.error(error.message);
      });
  }, []);

  return { [target]: content };
}
