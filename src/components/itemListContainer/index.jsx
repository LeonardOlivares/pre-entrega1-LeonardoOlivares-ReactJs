import React, { useEffect, useState } from "react"
import { ItemList } from "../ItemList"
import { useParams } from "react-router-dom";
import { collection, getDocs, getFirestore, query, where } from "firebase/firestore";



const ItemListContainer = ({ greeting }) => {
    
  /*   const { category } = useParams();
  
  useEffect(() => {
      getItems(query).then((data) => {
          setProducts(data)
        })     
    }, [query]) */
    
    const [products, setProducts] = useState([])
    const {categoryId}  = useParams()
    
    useEffect(() =>{
        const db = getFirestore()
        const queryCollection = collection(db, "items")
        if(categoryId){
            const queryFilter = query(queryCollection, where("categoria", "==", categoryId))
            getDocs(queryFilter).then(res => setProducts(res.docs.map(item => ({id: item.id, ...item.data()}))))
        } else {
            getDocs(queryCollection).then(res => setProducts(res.docs.map(item =>({id: item.id, ...item.data()}))))
        }

    },[categoryId])

  /*   useEffect (()=>{
        const itemsRef = categoryId
        ? query(collection(db, "items"),where("categoria","==",categoryId))
        :
        collection(db, "items")

        getDocs(itemsRef).then(res => {
            const itemsAdapt = res.docs.map(doc =>{
                const data = doc.data()
                return {id:doc.id, ...data}
            })
            setProducts(itemsAdapt)
        })
        .catch(err =>{
            console.log(err)
        })

    },[db, categoryId])
     */

    
    return (
        <>        
            <h1> { greeting }</h1>
            <ItemList items={products} />
        </>
)
}

export { ItemListContainer } 
/*  useEffect(() => {
     const db = getFirestore()

     const itemsRef = collection(db, "items")
     getDocs(itemsRef).then((snapshot) => {
         setProducts(snapshot.docs.map((doc) =>({ id: doc.id, ...doc.data() })))
     })
 }, []) */

 

/*  useEffect(() =>{
     if (category) {
         getProductsByCategory(category).then((products) => {
             setProducts(products)
         })
     }
    else {
         getProducts().then((products) =>{
             setProducts(products)
         })
    }
 }, [category])
 
  */


//IGNORAR DE AQUI HACIA ABAJO


/* import React, { useEffect, useState } from "react"
import { ItemList } from "../ItemList"
import { getProducts, getProductsByCategory } from "../data/data"
import { getProducts } from '../../services'
import { useNavigate, useParams } from "react-router-dom";
import './style.css'


const ItemListContainer = ({ greeting }) => {
    
    const { categoryId } = useParams();
    const [products, setProducts] = useState([])
    const navigate = useNavigate()

    useEffect(() =>{
    getProducts().then((data) => {
            setProducts(data)
        })

    }, []) 
    
    if (category) {
        getProductsByCategory(category).then((products) => {
            setProducts(products)
        })
    }
   else {
        getProducts().then((products) =>{
            setProducts(products)
        })
   } 
    
    
    return (
        <>        
            <h1> { greeting }</h1>
            <ItemList products={products} />
        </>
)
}

export { ItemListContainer }  */