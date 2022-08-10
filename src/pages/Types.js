import React, {useEffect, useState} from "react";

import { useDispatch, useSelector } from "react-redux";
import { getAllTypes, updateType, deleteType } from "../slices/type";
import {Button, Table} from 'reactstrap'
import EditTypeModal from "../components/EditModal";
import DeleteModal from "../components/DeleteModal";
import { Redirect } from "react-router-dom";

const Types = (props) => {

    
     

  const [loading, setLoading] = useState(false);
  const [fileValue, setFieldValue] = useState('')
  const [typeName, setName] = useState('')
  const [typeDescription, setDescription] = useState('')
  const [typeId, setTypeId] = useState(null)
  const [open , setOpen]= useState(false)
  const [delOpen , setDelOpen]= useState(false)
  const { message } = useSelector((state) => state.message);
    const {types} = useSelector(state => state.type)
    
    
    const dispatch = useDispatch();
    useEffect(() => {
            dispatch(getAllTypes())
      
      
    }, [types, dispatch])
   
     const toggle=()=>{
        setOpen(!open)
     }
     const delToggle=()=>{
        setDelOpen(!delOpen)
     }
     const handleEditType=(formValue)=>{
        setLoading(true)
       const {name, description} = formValue
        dispatch(updateType({name,description,image:fileValue, id:typeId})).then(()=>{
            setLoading(false)
            toggle()
        })

     }
     const handleDeleteType=()=>{
        const ids=[]
        ids.push(typeId.toString())
        dispatch(deleteType({ids})).then(()=>{
            setLoading(false)
            delToggle()
        })

             }
             
    return ( 

        <>
        <div className="types-container">
            <h1>Types</h1>
            <div className="types-wrapper card">
               
                        <Table striped>
                        <thead>
                          <tr>
                            <th>Name</th>
                            <th>Description</th>
                            <th>Image</th>
                            <th>Actions</th>
                          </tr>
                        </thead>
                        <tbody>
                        {types.length> 0 ? types.map(({name,description, image, id}) =>{
                    return(
                          <tr key={id}>
                            <th scope="row">{name}</th>
                            <td>{description}</td>
                            <td><img src={image}  alt="img" width="50" height="50"/></td>
                            <td><Button color="primary" className="button" onClick={()=>{
                              setName(name)
                              setDescription(description)
                              setTypeId(id)
                              toggle()
                            }}>Edit</Button>
                            <Button color="danger"  onClick={()=>{
                                setTypeId(id)
                                setName(name)
                                delToggle()
                            }}>Delete</Button>
                            
                            </td>
                          </tr>
                    )

                }): "loading...."}
                         
                        </tbody>
                      </Table>
                    
            </div>
        </div>
        <EditTypeModal
        open={open}
        setFieldValue={setFieldValue}
        message={message}
        name={typeName}
        description={typeDescription}
        handleEdit={handleEditType}
        loading={loading}
        toggle={toggle}
        />
        <DeleteModal
        open={delOpen}
        delete={handleDeleteType}
        />
        </>
     );
}

export default Types ;