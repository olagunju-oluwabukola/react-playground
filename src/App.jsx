import {  useEffect, useState } from "react"

const Card = ({title, actor}) =>{
 const [hasLiked, setHasLiked] = useState(false)
 const [count, setCount] = useState(0)
useEffect(()=>{
  console.log(`${title} has been liked : ${count} times`)
})
 const handleLikeCount = () =>{
  if(hasLiked){
    setCount(count-1)
  }
  else {
    setCount (count + 1)
  }
  setHasLiked(!hasLiked)
 }
 return(
<>
<p>{title}</p>
<p>{actor}</p>
<button onClick={() => setHasLiked(handleLikeCount)}>
  {hasLiked ? "❤️" : "🤍"}
</button>
{/* <button onClick={ () => setCount(count++)}>
  {count}
</button> */}

<p>likes: {count}</p>
</>

)

}

const App = () =>{
  return (
    <>
    <div>
      <h1>Hello React</h1>
    </div>

    <div>
      <Card  title = 'games of throne' actor = 'Bukola'/>
       <Card  title = 'la casa de papel' actor = 'Professor'/>
        <Card  title = 'Enola Holmes'/>
    </div>
    </>
  )
}

export default App;