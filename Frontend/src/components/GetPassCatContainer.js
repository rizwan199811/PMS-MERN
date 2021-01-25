import React, {useEffect}from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {fetchPassCat,editPassCat,deletePassCat} from '../redux';
import { Table,Button } from 'react-bootstrap';

function GetPassCatContainer(props) {
    
    const dispatch=useDispatch();
    useEffect(()=>{
        dispatch(fetchPassCat())
    });
    const allCategories=useSelector(state=>state.pass.allCategories);
if(allCategories){
    var CatData=allCategories.map((val,i)=>(
        <tr key={i}>
     <td key={val._id}>{i+1}</td>       
    <td>{val._id}</td>
    <td>{val.password_category_name}</td>
    <td><Button className="btn btn-primary" onClick={()=>{
        editCategory(val._id,val.password_category_name)
    }}>Edit</Button> 
    <Button className="btn btn-danger" onClick={()=>{
        deleteCategory(val._id)
    }}>Delete</Button></td>
    </tr>
    ))
}else{
    CatData=<tr>
    <td colSpan="4">No Records Found</td>       
   </tr>
}

   const editCategory=(id,category)=>{
    dispatch(editPassCat(id,category));
   }
   const deleteCategory=(id)=>{
    dispatch(deletePassCat(id));
   } 

//    const deleteCategory=(id)=>{
//        dispatch(deletePassCat(id));
//    }
    //console.log(allCategories);
    return (
        <div>
            <h1>All Passsword Category</h1>
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Category ID</th>
                        <th>Category Name</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        CatData
                    }
                    
                </tbody>
            </Table>
 
        </div>
    )
}
export default GetPassCatContainer;