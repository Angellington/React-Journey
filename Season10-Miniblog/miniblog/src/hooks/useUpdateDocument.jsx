import { useState, useEffect, useReducer, useRef } from "react";
import { db } from "../firebase/config";
import { updateDoc, doc } from "firebase/firestore";

const initialState = {
  loading: false,
  error: null,
};

const updateReducer = (state, action) => {
  switch (action.type) {
    case "LOADING":
      return { loading: true, error: null };
    case "UPDATED_DOC":
      return { loading: false, error: null };
    case "ERROR":
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const useUpdateDocument = (docCollection) => {
  const [response, dispatch] = useReducer(updateReducer, initialState);
  
  const cancelled = useRef(false);

  const checkCancelBeforeDispatch = (action) => {
    if (!cancelled.current) {
      dispatch(action);
    }
  };

  const updateDocument = async (id, data) => {
    checkCancelBeforeDispatch({ type: "LOADING" });


    try {
        const docRef = await doc(db,docCollection, id)

        const updatedDocument = await updateDoc(docRef, data)

        checkCancelBeforeDispatch({
            type: "UPDATED_DOC",
            payload: updatedDocument
        })
        
    } catch (err) {
      console.error("Erro ao inserir documento:", err);
      checkCancelBeforeDispatch({
        type: "ERROR",
        payload: err.message,
      });
      throw err;
    }
  };


  useEffect(() => {
    return () => {
      cancelled.current = true;
    };
  }, []);

  return { updateDocument, response };
};