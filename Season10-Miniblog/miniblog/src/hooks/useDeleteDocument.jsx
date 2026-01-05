import { useState, useEffect, useReducer, useRef } from "react";
import { db } from "../firebase/config";
import { doc, deleteDoc } from "firebase/firestore";

const initialState = {
  loading: false,
  error: null,
};

const deleteReducer = (state, action) => {
  switch (action.type) {
    case "LOADING":
      return { loading: true, error: null };
    case "DELETED_DOC":
      return { loading: false, error: null };
    case "ERROR":
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const useDeleteDocument = (docCollection) => {
  const [response, dispatch] = useReducer(deleteReducer, initialState);
  
  const cancelled = useRef(false);

  const checkCancelBeforeDispatch = (action) => {
    if (!cancelled.current) {
      dispatch(action);
    }
  };

  const deleteDocument = async (id) => {
    checkCancelBeforeDispatch({ type: "LOADING" });




    try {
    const deleteDocument = await deleteDoc(doc(db, docCollection, id))
    
      checkCancelBeforeDispatch({ 
        type: "DELETE_DOC",
        payload: deleteDoc,
      });
      
      return deleteDocument;
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

  return { deleteDocument, response };
};