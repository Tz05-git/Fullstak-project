import React, { useEffect, useState, useRef } from "react";
import { VirtualScroller } from "primereact/virtualscroller";
import { Skeleton } from "primereact/skeleton";
import { classNames } from "primereact/utils";
import { useGetbasketQuery } from "./basketApislice";
import { useDeletebasketMutation } from "./basketApislice";
import Button from "@mui/material/Button";


const BasketList = () => {
  const { data, isLoading, isError } = useGetbasketQuery();
  const [items, setItems] = useState([]);
  const [lazyLoading, setLazyLoading] = useState(true);
  const loadLazyTimeout = useRef(null);

  useEffect(() => {
    if (data && data.items) {
      setItems(data.items); 
      setLazyLoading(false);
    }
  }, [data]);

  const onLazyLoad = (event) => {
    setLazyLoading(true);

    if (loadLazyTimeout.current) {
      clearTimeout(loadLazyTimeout.current);
    }

    loadLazyTimeout.current = setTimeout(() => {
      setLazyLoading(false);
    }, 500);
  };
  const { data: allbasket = [], isSuccess } = useGetbasketQuery();
      const [basket, setbasket] = useState([]);
  const [deletebasket]= useDeletebasketMutation()
  const handleDeletebasket =async (id)=>{
    await deletebasket(id)
  }
  useEffect(()=>{
    if(isSuccess){
    setbasket(allbasket)
    }
 },[isSuccess,allbasket])
 
 
 
 
 
  const itemTemplate = (item, options) => {
    const className = classNames("flex flex-column p-3 border-bottom-1", {
      "surface-hover": options.odd,
    });

    return (
      <div className={className} style={{ height: options.props.itemSize + "px" }}>
        <div className="font-bold text-lg">{item.productId?.name || "לא ידוע"}</div>
        <div>כמות: {item.quantity}</div>
      </div>
    );
  };

  const loadingTemplate = (options) => {
    const className = classNames("flex align-items-center p-2", {
      odd: options.odd,
    });

    return (
      <div className={className} style={{ height: "50px" }}>
        <Skeleton width={options.even ? "60%" : "50%"} height="1.3rem" />
      </div>
    );
  };

  if (isError) return <div>שגיאה בטעינת העגלה</div>;

  return (
    <div className="card flex justify-content-center">
      <VirtualScroller
        items={items}
        itemSize={60}
        itemTemplate={itemTemplate}
        lazy
        onLazyLoad={onLazyLoad}
        loadingTemplate={loadingTemplate}
        showLoader
        loading={lazyLoading || isLoading}
        className="border-1 surface-border border-round"
        style={{ width: "400px", height: "300px" }}
    />
    <Button onClick={()=>handleDeletebasket(basket._id)} >Delete</Button>
  
    </div>
  );
};

export default BasketList;