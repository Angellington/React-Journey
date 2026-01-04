import { useState, useEffect } from "react";
import { db } from "../firebase/config";
import { collection, query, orderBy, onSnapshot, where, QuerySnapshot } from "firebase/firestore";

export const useFetchDocuments = (docCollection, search = null, uuid = null) => {
    const [documents, setDocuments] = useState(null)
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(null)

    const [cancelled, setCancelled] = useState(false) 

    useEffect(() => {
        async function loadingData(){
            if(cancelled) return;
            setLoading(true)

            const collectionRef = await collection(db, docCollection)

            try{
                let q;

                // busca


                // dashboard

                if(search){
                    q = await query(collectionRef, where("tagsArray", "array-contains", search), orderBy("createdAt", "desc"))
                }else if (uuid) {
                       q = await query(collectionRef, where("uid", "==", uuid), orderBy("createdAt", "desc"))
                } else {
                    q = await query(collectionRef, orderBy("createdAt", "desc"))
                }

                await onSnapshot(q, (querySnapshot) => {
                    setDocuments(
                        querySnapshot.docs.map((doc) => ({
                            id: doc.id,
                            ...doc.data(),
                        }))
                    )
                })
            } catch (err){
                console.error(err)
                setError(err.message);
            } finally {
                setLoading(false)
            }
        }
        loadingData()

    }, [docCollection, search, uuid, cancelled])

    useEffect(() => {
        return () => setCancelled(true)
    }, [])

    return { documents, loading, error }
}