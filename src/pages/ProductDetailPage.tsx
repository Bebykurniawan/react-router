import { useParams } from "react-router"

const ProductDetailPage = () => {
    const params = useParams()
  return (
    <div  style={{backgroundColor: "blue", textAlign: "center"}}>
      <h2>This is product detail page</h2>
      <p>{params.productSlug}</p>
    </div>
  )
}

export default ProductDetailPage
