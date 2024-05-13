import React from 'react'
import { Link } from 'react-router-dom';




const CommercialProjects = ({CommercialProjectsDetails}) => {
    console.log(CommercialProjectsDetails)
  return (
    <div>
     <div>
        <div>
        <div className="main-complete">
           
          </div>
          
          <div>
          <div className="sub-images-div"
        style={{
          margin: "20px",
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "center",
          gap:"2vw",
        }}
      >
        {CommercialProjectsDetails.map((CommercialProjectsDetail) => (
          <div key={CommercialProjectsDetail.id} >
            <Link to={`/CommercialDetails/${CommercialProjectsDetail.id}`}>
              <img
                src={CommercialProjectsDetail.src}
                alt={`Product ${CommercialProjectsDetail.id}`}
                style={{
                  width: "450px",
                  height:"350px",
                 
                  objectFit: "cover",
                  borderRadius: "20px",
                 boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
                }}
              />
            </Link>
          </div>
        ))}
      </div>
          </div>
        </div>
     </div>
    </div>
  )
}

export default CommercialProjects