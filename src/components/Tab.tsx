import "./Tab.css"
import  { useEffect, useState } from 'react'
import { FaAngleDoubleRight } from 'react-icons/fa'
function Tab() {
  const url = 'https://course-api.com/react-tabs-project'

const [loading , setLoading]=useState(true)
const [jobs , setJobs]=useState<any>([])
const [value , setValue ] = useState(0)

const fetchJob = async()=>{
    const res = await fetch(url)
    const newJob = await res.json()
    setJobs(newJob)
    setLoading(false)
    console.log(newJob);
}

useEffect(() => {
    fetchJob()
}, [])

if(loading){
    return <section>
        <h1>
            Loading...
        </h1>
    </section>
}
const  {company, dates, duties, title} = jobs[value];
return (
    <div className='mainContainer'>
    <section className='abouSection'>
        <div className='job-btn'>
        {jobs.map((item:any , index:any)=>{
            return(

                <button 
                onClick={()=>setValue(index)}
                className={`button-jobs ${index===value  && 'active'}`}
                key={item.id}>{item.company}</button>
                )
        })}
        </div>
        <div className='aboutJobs'>
           <div className='work'>
           <h3 className='jobTitle'>{title}</h3> 
           <button className='company'>{company}</button> 
           <p className='dates'>{dates}</p>
           </div>
           {duties.map((duti:string , index:number)=>{
            return <div className='foot' key={index}>
                <FaAngleDoubleRight className="icon" />
                <p>{duti}</p>
            </div>
           })} 
        </div>
    </section>
    </div>
  )
}

export default Tab