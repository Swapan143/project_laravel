@extends('admin.layout.layout')
  
@section('content')
<div class="" style="margin-top: 10px;">
   <a class="btn btn-primary" href="{{url('admin/viewchildcategory')}}">
  Add Childcategory
</a> 
      <div class="ibox-content">
                            <div class="table-responsive">
                                <table class="table table-striped table-bordered table-hover dataTables-example" >
                                <thead>
                                    <tr>
                                        <th>Index</th>
                                        <th>Category Name</th>
                                        <th>Subcategory Name</th>
                                        <th>Childcategory Name</th>
                                        <th>Childcategory Image</th>
                                        <th>Status</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>    
                                 <tbody>   
                                    <td>1</td>
                                    <td>fgg</td>
                                    <td>uuuu</td>
                                    <td>uuuu</td>
                                    <td> <img src="" class="showTableImage"> </td>
                                       
                                    <td>
                                        <input type="checkbox" class="js-switch" onchange="common_status_change(this.value)" id="status" value="" />
                                   </td>
                                   <td>
                                            <a href=""><i class="fa fa-pencil-square action"></i></a>
                                            
                                            <a href="" onclick="return confirm('Are you sure delete this category?')"><i class="fa fa-trash action"></i></a>
                                        </td>
                                </tbody>
                                </table>
                            </div>
                         </div>
</div>  
@endsection