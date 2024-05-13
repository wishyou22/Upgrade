import React, { useState } from "react";
import { useParams } from "react-router-dom";


const CommercialDeatils = ({ CommercialProjectsDetails }) => {
    const [data , setData] = useState({img : '' , i : 0})
    const viewImage = (img, i) => {
        setData({ img: img.src, i: i });
    }
    
    
    const { id } = useParams();
    const CommercialProjectsDetail = CommercialProjectsDetails.find((p) => p.id === parseInt(id));
  
    if (!CommercialProjectsDetail) {
      return <div>Product not found</div>;
    }
  {console.log()}
    return (
      <div>
        {data.img &&
        <div
         style={{
            width : "100%",
            height: "100vh",
            background:"black",
            position:"fixed",
            display:"flex",
            justifyContent:"center",
            alignItems:"center",
            overflow:"hidden"
         }}>
            { console.log(data.img)}
<img src={data.img} style={{ width : "auto", maxWidth:"90%" , maxHeight: "90% "}}/>
        </div>
        }    
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            gap: "20px",
              justifyContent: "center",
              marginTop: "20px",
          }}
        >
          {CommercialProjectsDetail.children.map((child , i ) => (
            <img
              key={child.id}
              src={child.src}
              alt={`Product ${child.id}`}
              onClick={()=>viewImage(child , i) }
              style={{
              
                width: "450px",
                height:"350px",
                cursor: "pointer",
                objectFit: "cover",
                borderRadius: "10px",
                boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
              }}
            />
          ))}
        </div>
      </div>
    );
  };

export default CommercialDeatils